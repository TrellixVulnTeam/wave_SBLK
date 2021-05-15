// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Fluent from '@fluentui/react'
import { box, connect, on, wave, WaveErrorCode, WaveEvent, WaveEventType } from 'h2o-wave'
import React from 'react'
import { stylesheet } from 'typestyle'
import Dialog from './dialog'
import { LayoutPicker } from './editor'
import { Logo } from './logo'
import { PageLayout } from './page'
import { clas, cssVar, pc, themeB } from './theme'
import { bond, contentB } from './ui'

const
  css = stylesheet({
    app: {
      position: 'absolute',
      left: 0, top: 0, right: 0, bottom: 0,
      backgroundColor: cssVar('$page'),
      color: cssVar('$text'),
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto'
    },
    centerFullHeight: {
      height: pc(100),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: cssVar('$page'),
      color: cssVar('$text'),
    },
    freeOverlay: {
      display: 'none',
      position: 'fixed',
      left: 0, top: 0, right: 0, bottom: 0,
    },
    busyOverlay: {
      display: 'block',
    },
    notFoundOverlay: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })

let editable = false

const
  BusyOverlay = bond(() => {
    let
      spinTimeout = 0
    const
      spinDelay = 500, // ms
      busyB = wave.busyB,
      spinB = box(false),
      render = () => (
        <div className={busyB() ? clas(css.freeOverlay, css.busyOverlay) : css.freeOverlay}>
          <Fluent.Spinner className={css.centerFullHeight} style={{ opacity: spinB() ? 0.8 : 0 }} label='Loading...' size={Fluent.SpinnerSize.large} />
        </div>
      )
    on(busyB, busy => {
      window.clearTimeout(spinTimeout)
      if (busy) {
        spinTimeout = window.setTimeout(() => spinB(true), spinDelay)
      } else {
        spinB(false)
      }
    })
    return { render, busyB, spinB }
  }),
  NotFoundOverlay = bond(() => {
    const
      pickingLayoutB = box(false),
      onClick = () => {
        pickingLayoutB(true)
      },
      render = () => (
        <div className={css.notFoundOverlay}>
          <Logo />
          {editable && (
            <>
              <Fluent.DefaultButton onClick={onClick} >Edit this page...</Fluent.DefaultButton>
              <LayoutPicker visibleB={pickingLayoutB} />
            </>
          )}
        </div>
      )

    return { render }
  }),
  App = bond(() => {
    const
      onSocket = (e: WaveEvent) => {
        switch (e.t) {
          case WaveEventType.Data:
          case WaveEventType.Error:
          case WaveEventType.Exception:
          case WaveEventType.Disconnect:
            contentB(e)
            break
          case WaveEventType.Reset:
            window.location.reload()
            break
          case WaveEventType.Config:
            editable = e.editable
            break
        }
      },
      onHashChanged = () => {
        const h = window.location.hash
        if (h?.length > 1) {
          wave.args['#'] = h.substr(1)
        }
        wave.push()
      },
      init = () => {
        connect(onSocket)
        window.addEventListener('hashchange', onHashChanged)
      },
      render = () => {
        const e = contentB()
        if (e) {
          switch (e.t) {
            case WaveEventType.Data:
              {
                const page = e.page
                return (
                  <Fluent.Fabric applyTheme>
                    <div className={css.app}>
                      <PageLayout key={page.key} page={page} />
                      <BusyOverlay />
                      <Dialog />
                    </div>
                  </Fluent.Fabric>
                )
              }
            case WaveEventType.Error:
              {
                // TODO better sadface
                const message = e.code === WaveErrorCode.PageNotFound ? <NotFoundOverlay /> : 'Unknown Remote Error'
                return <div className={clas(css.centerFullHeight, css.app)}>{message}</div>
              }
            case WaveEventType.Exception:
              {
                // TODO better sadface
                const message = `Unhandled exception: ${e.error}`
                return <div className={clas(css.centerFullHeight, css.app)}>{message}</div>
              }
            case WaveEventType.Disconnect:
              {
                // TODO better sadface
                const message = `Disconnected. Reconnecting in ${e.retry}s`
                return <div className={clas(css.centerFullHeight, css.app)}>{message}</div>
              }
          }
        }
        return <Fluent.Spinner className={css.centerFullHeight} size={Fluent.SpinnerSize.large} label='Loading ...' />
      },
      dispose = () => {
        window.removeEventListener('hashchange', onHashChanged)
      }

    return { init, render, dispose, contentB, theme: themeB }
  })

export default App
