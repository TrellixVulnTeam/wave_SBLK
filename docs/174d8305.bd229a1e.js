(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{305:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,p=d["".concat(i,".").concat(b)]||d[b]||f[b]||c;return t?a.a.createElement(p,o(o({ref:n},s),{},{components:t})):a.a.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},306:function(e,n,t){"use strict";var r=t(0),a=t(19);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},307:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i}));var r=t(306),a=t(308);function c(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,c=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(c,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,c().withBaseUrl)(e,n)}},308:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},334:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADQCAYAAAD28o9OAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDExOjI3OjE0IEFNIFBEVBsf5CMAACAASURBVHic7d15fA3X/8fx173IvliD2qKWb1Elq6xIYqetJdZ+a2/7LVq7Lva2dqW0XzsR/ZYEbVG7JHZCIrbaQ4gEkV9qTSIhOb8/wuU2wR1blM/z8biP3pk5M3PO6LzvmXMnd3RKKYUQQmigz+8KCCH+eSQ4hBCaSXAIITST4BBCaCbBIYTQTIJDCKGZBIcQQjMJDiGEZhIcQgjNJDiEEJrlW3BkZmayfNkytm7dml9VEEI8IZOCY+HCIFycnXBxdmLDhg25lq9bu9awfO6cObmWHzp0yLB8zHffATB//jzGjRvLgP79OHjw4FM24/lq2LABLs5ODBk86Lnu5/q1a8ycOYNOHTtQ19cHTw8P3n/vXcaPH0diYmKu8gcPHmT27FnMnj2L1NTU51o3LRITE/isT2/Dv/nPixbld5XEM2ZScPj61jW8j46KyrU8MnK34f3uB97fsy862vDex9cXgBIlHAAwMzOjsL29idV9dZ08eZI2bVozb+5cTpw4QWpqKpmZGSQkJLBs6VIC27Rh165dRuscOniQObNnM2f2bG7evJlPNb/v9u3bLJg/n7aBgbnqKl4tBU0pVKlSJUqXLs3FixeJitqba/mePXsM7/88fJjU1FSsra0N86Kic8LGzMwMd3d3AAIDA6n59tvYFy5MqVKlnqoRT+POnTsULGjSYXhulFIMG/o1f/31F3q9nnbt2uHi6oq1tQ2HDh4kOHgh6enpDBv6NatXr8HqgWP7Mhk/biwrVqxAp9NRx8ODPZGR+V0l8ZyYfMb4+PqybOlSzp8/T1JSEiVLlgTgdGwsycnJhnJZWVlERUVRv359IOfEPHjgAAAuLq5YWloCEBoawsQJEwBYsXIV5cqVY8Xvv/Ptt988sh4//+8XqlevbpjesnkzS5eGcvToUTIyMilVqiT16tenU6cPcHBwMJQbMngQ4eHhVK1alW++/Y7x48Zx5MiftO/Qgf79BwAQFbWXefPmcfToUQoWKICfnz8DBz3fyxOACxcucPr0aQBatWrN4CFfGJbVqVOHN8q8wYjhw7l27Rr79+/H28cHF2cno200a9oEgBkzZ1GnTh3D/DVrVvPr8uWcOXOG27dv8+abb/Lee+/TJjAQvf5+h9Pfrz7Xrl2jTZtAOnTsyLixY/jzzyNYW1vh4enJp5/2okyZMo9sR1paOpUqVeLroUOxtbGlXbu2T31sxMvJ5ODw9ckJDoDo6CiaN28B3L80KVqsGKVKluTo0aPsiYw0BMeffx7m1q1bwP3LlKdhZlbI8H7WrJlGYyoFChQgPj6enxctYs2aNSxevIQSJUoYrX/r1i36fv45SUmXjOZv2LCBYUO/Jjs72zBv5coVpPyVAs/5J0se3Gdqau5LjubNW9CkSVMAw8mu1+uN1rs3T6/XGaZHjhjO6tWrjcocPXqUo0ePErknkkmTJhuFB+SEWI8e3bl+7Rp6vZ4rV66wbu1adu/axYKghVSoUOGh7WjfoT1vv12TggULcjo21sTWi38ik79VcXN3x9zcHICoB8Y57nVHfbx9qO/nBxiPeURH3R/f8PX1eeQ+/AMCWLp0mdFr6LBhhuXNmzencuUqACQkJDBv7lwAGjduTFh4BJF79jJu/Hh0Oh1/paQQGhqSax/x8fHo9Tqm//gTv69YSYcOHbl58ybjxo4hOzsbKysrRn/zLav+WM20adM5eeIEf/31l6mH6YmUK1eOGjVqALB+/Xq+/OILdu7cSVpamqFMgQIFKFCgADpdTjBERe+jX7/+huVr160nKnofbm45l4KrVq00hEbPnh+xectWduzcRZ8+n6HT6diyeTN//LEqV112796Fp4cHEZu3sDtyD0OHDUOv13P16lUmjB/3yHbUru2U75d94sUwOTjMzMxwuzs+cW+ANDMzk5iYGAB86/oaBlHj4+O5ePEicH98w9HRkTJlyj5yH3Z2dlSqXNnwKlKkCHNmzwbgzTff5KuvhxrKli1blk1h4SwMXsSIkaMoUqQIer2eRo0aGy5Rztzt/j9Ip9MxY+YsvL29KV++PKVLl2bbtq3cuHEDgM8/70uLFi0oU6YMPr6+jP7mW1MPEdevXycpKSnX68FLuYeZ+sM0w/HbtGkjn3/Wh3p1fenapTNBCxZw9epVk+sBELJkCQB+fv582qsXdnZ2WFpa0q17d5o2bQbAH6v+yLWevb09I0eNxt7enoIFC9K6dRuaNW8OwN69e7l8+bKmeohXk6aPB18fX3Zs387FixdJTEwkMTGRW7duUahQITw8PLGysqJkyVIkJV0icvdumrdowaGDh3LWrVv3MVs3lpWVxRdfDCE5ORlLS0smTppsGB+5p0iRIlhZWXHkyBHi4s5w4cIFTp44QVJSEgCZmbdzbbdo0aKUL1/eaF7sqfvdaj9/f6Nlbm5u2NjYmPStxbQfprJixYpc821sbNi6bfsj1y1WrBg/TJvG8ePH2LRpE1F793L8+HEOHz7M4cOHCQpawIiRo2jQoMFj65GRkcGJEycA2Lw5gj69exstT0g4D8CpUydzrevi4mroWd7j7e3N6j/+QClFbGys0diReD1pC466voy721uNiorifHw8AM4uLlhZWeWU8fVh+fLlRO6JpHyFCmRmZuTM99E2vjHthx8MvZmvvv6aihUr5iqzYP58goMXGp3Udvb2WFhYGMZV/q5AgQK55l2/cd3wvkiRIkbLdDod9vaFX9jXnW+9VY233qoGwM2bN9m+bRvz5s3l7NmzDBv6NeXLl6dq1aqP3MbVq1eMpnfvzvur0bzaZGdnm2uevd39r8uvX7+ea7l4/WgKjpIlS1G5chViY08RHR3FmTNnAKj7wH0evr51Wb58OXv37sWxgiOQ84lbq3Ztk/ezadNGfvnlfwC0bNXKMBD7oBUrVvDf//4E5IxxNGvWnCpVq+DgUJI2bVpz7uxZk/dnZ2tneJ+SkmL0iZqdnc2Vv52IDzN8xEiGjxhp8n7vOX36NBcu5Nzg5e3tYxiwtLGxoWmzZlSvXp3WrVtx+/ZtwsPCHhscdg+c6P37D+DfH35ocl3yuqx6cJ69vV2u5eL1o/mWc5+7A5xbt27l5N3usG/d+70J9zp1sLCw4Pq1a4bBSQ9PT5MHzeLi4vhm9GgAqlatyhdffJlnub17cgZlKzg6MnbceHx8fSlZshRZWVn8lZKiqU1VqlQxvN+8OcJoWWRkJGnP+a7MXTt30q9vX/r17cveB+6Juedy8gPjCrpci4GcS7t7LC0tcXR0BGDPntz3Uuzdu5fNmyM4depUrmUxMTFcuWIclBs3bczZtU5HpUqVH9cc8RrQHBy+d79STUtNRSlFxYoVjQY9zczMDCP79wYcTb1MSUtNZdDAAaSlpVGgQAE+/uQTzsfHczo21vC611W2scnpUl9OSjKcAOnp6YwcMdywX5PbVLcutrY52/tx+nRWr15NYmIi27dvY/Qo7T0IrfwD/A2XUP379+enn35ky5YtbN26lTmzZzP4gXtJvLy8De+tbe7fCLbi9985duyY4SvawMCceyh27drF9GnTSElJIS01lfXr19Ov7+cMGjiQRcHBueqSnp7OwAH9+fPPw8THxzN1yhR27tgBgLu7u4xvCEDjpQrAO+/Uws7enuvXrgF5D3r61vVl+/ZtQM6nlJe3d64yeVkQtICzdy8xsrKyGDRwYK4yw4ePoGWrVrz73nusWPE76enpdOzQnqJFi3Ljxg3s7OxwdHQ0bMcUNjY2fPnlVwwfPswQPvfU8fDAwsKChIQEk7enVZkyZfnqq68ZO3YMmZkZBC1YkGe57j16UKtWLcO0t7c35ubmZGRkMH/+PObPn8cvixfz1lvVaN+hAzExMUREhBMcvJDg4IVG2ypdujSfff55rn14eHpy6uRJunTubDTf3t6eL7786ukbK14Jmnscer0eL09Pw/SDf8eS17zqNWpQtGhRk7adetP0S4KaNWvy40//pXZtJ8zNzcnOzsbLy4s5c+dRrFgxk7dzT5OmTfnxx59wdnbGysoKW1tb2rQJZPLk7ynwAu5NaNW6NUtCQmjZqhXlypXDwsICMzNzSpcuTZMmTZg7bz69e/cxWqdkyVLMmDnTcAysra25dDHnxja9Xs/ESZMYOWoUtWrXxs7ODjMzMypUqEDnLl343y+L8+w9FClShAVBC6lTpw7m5uYULlyYRo0aE7zo50fe/CVeLzp5kpuA+7ecN23WjO++G5Pf1REvOfkhHyGEZhIcQgjNJDiEEJrJGIcQQjPpcQghNJPgEEJoJsEhhNBMgkMIoZkEhxBCMwkOIYRmEhxCCM0kOIQQmklwCCE0k+AQQmgmwSGE0EyCQwihmQSHEEIzCQ4hhGYSHEIIzSQ4hBCaSXAIITST4BBCaCbBIYTQTIJDCKGZBIcQQjMJDiGEZhIcQgjNTAqOCePH8+UXXxjNOx0bi4uzU66noK9YsYKW778HwJDBg5g9e9azqelDBAcvpGuXzo8vKEy2ZPFimjdripenB716fUpiYmJ+V0m8ZEwKDlc3N/bvjzGaFxMTY/Tfew4c2I+rm9szqh40bNiAPXv2PHR5zZrv0LBRo2e2v9ddWFgYP/30IwMGDiJ06TIK29szeNDA/K6WeMmYFhyurqSkpJCQkGCYFxMTQ40aNTh44ADZ2dmG+ftjYnB1fXbB8TjOzs588MG/X9j+XnWnTp0ksG1bAgICKFeuHH0++5wTJ06QlJSU31UTLxGTgsPe3p5KlSqz/4Hexf79MXTv0ZPMzExiY2MB+L//+z8SEhJwdXU1lMvMzGTE8GF4e3nSuFFDli1darTt33/7jbaBbfD08KBdu7aEh4cDcOPGDVycnfgrJYVen/6Hpk0a51m30NAQPv6op2F6T2QkbVq3wtOjDm0D27B7964819uwYQONGjYwCr2LFy/i6uLMuXPnADh8+DDdu3fDy9ODd1s0Z8nixUbb8Perz77oaMN0UlISLs5O3Lhxw7B86dJQ2rRuRbOmTfOsx5DBg5g1ayaDBw3Cy9ODZk2bsnbtGpOO0b31Z/z3v3zWpzeeHh506tiBuLg4pk37Ab/69WjYIICQkBCj7R3580+6d++Gt5cnLd9/j9DQ+8s//bQX/fsPMEwnX74MgK2NTZ71F68pZaKJEyeo0aNGKaWUio+PV+5uriotLU3955OP1ZIlS5RSSm3cuEG1atXSsM7gQQNVgL+fCglZos6dO6d++eV/ysXZScWeOqWUUiosLEzVq+urIiLCVXJyslqx4nflUcddJScnK6WUysjIUHV9fdS2bVtVRkZGnvUKCVmiPurZQyml1IULF5S7m6tat26dSklJUatX/6Hq+vqoGzdu5FovPT1deXt5qn379hnm/bxokfr3B52UUkolJJxXPt5easH8+Soh4bzauXOnatSwgVr8yy+G8n7166noqCjD9KVLl5SzU211/fp1w/LANq3V/v0x6sqVK3nWf/Cggcrfr76KiAhXqTdvqmXLlil3N1d16dIlk47R4EEDVcMGASpy92517do1NXDAAFXX10fNnTNHpaamqoiIcOXu5qoSEs4bjpGPj7eaP2+eSkxMVDt37lQB/n4qNDQkV93OnTunWrV8X40YPizPuovXl8nfqri5unHgwH4AYmL2UaNGDSwtLY3GPw7s34/bA70NAFdXN9q370D58uXp1OkDqlSpwv4DBwAICAjg9xUr8fPzp3jx4rz/fkusra05duwoAGZmZpiZm2NmZo6Zmdlj63j58mUKFSqEj48PRYsWpXnzFmzYuAmbPD4tLSwsqFe/PuFhmwzzwsI20eRuz2Bp6FJcXd3o1r07ZcqUxcvLi/79BxAcvBCl4Tnd3bp3p3ZtJwoXLvzQMp5eXvj5+WNlbU1gYCAODg4cPnzYpGME4OvrSx0PD+zs7GjVujUZGRl079EDKysr/Pz8KVWqFKdO5fQKQ0ND8Pfzo3uPHrzxxhs57RowgJUrVhrVKSUlhS6dP6RGjbcZPmKkye0Vr4eCphZ0dnHh/Pnz/JWSQkxMDG5u7kBOMITe7Qrv37+fbt27G63nWNHRaLpYseKkp6UZpi9dukRoaAhxcXGcjTvLlStXyMjIfKLG1KxZkxpvv02rlu/j61sXD08P6tf3e2j5Jk2aMOa77xg0eAiXL1/myJEjTP5+CgAnT57A3b2OUflatWuTnJzMlb/+omixYibVqaRDyceWKVeunNG0vb29pmPkUPL+PgoWLIi5uTl6/f3PBHNzczIyMgA4cfw4e/fuZcuWLYblWVlZmJubG9Vh+fJllHBw4Jtvv0Wn05nUVvH6MDk47OzsDL2F/TExjLj7KVSjRg3S09M5evQop06dwsXFuMfxqP/pfvvtV6ZPm0Zg27Y0atSYihUr0r9f3ydsCuj1embNms2BA/uJ3B3J/HnzmT1rFsGLfs6z1+Hp6UVGZiaHDh7kyNEjuLq6Urx4cQCUenTd82Z6T8RUz/oYAXTu0oW2bdsZzXswaADS09OpV6+ehIbIk8nBATm9i/Xr1pGc/H+8U6tWzgYKFqR27dosmD8fR0dHihYtavL21q9bR5cuXQ29lMzMTJKTk43K6CDnLDZBWloaSUlJODk54+TkzMeffELjRg3Zs2cPAQEBucoXLFiQBgEN2BS2iaNHjtCyVSvDsn/9619ER0fTtVs3w7zoqChKlChBkbtttLS05MrVq4blCQnP/n4HU46RFlWqVOXy5cu88cYbhnlxcXG5gqNfv/5PvA/x6tN056irmysREeG8U+sdozEHVzc3Nm+O0Pw1bPkKFdi5cyenY2OJi4tj+LChucYPipcoQcTmCM6ePfvY7e3bF033bl3ZExnJ5cuXWbNmNdevX8exQoWHrtOkSRPWrlnD8ePH8fe/Hy7t2rfjwIH9zJk9m8TERHbt2sWUqVPo2rWb4VO4du3aBC1YQFxcHIcOHWLaD1M1td8UphwjLdq1b8+2rVtZuDCIxMQEoqOi6Pv556xfv86o3KRJE5k6ZcrTVl+8ojQFh7OzC3q9Hre/3eB1LzBc/jYw+jgD+g/AwaEEnTt/yGd9euPh4YmDg4NRmaFfDyU6KsroK9eH8fWtS4+ePfn22294790WLAoOZuzYcVSqXPmh6zg5O2Nubo6Pj4/R5UyZMmWZNXs2kZG7aRvYhnFjx/DxRx/ToWNHQ5m+/fpjbW1Fp44dGDd2DD0/+khT+01hyjHSomzZssyaNZsd23fQrm1bRo8eRdOmTenRw/j4no+PlztGxUPp1NN8fL0ClFK0fP89+vXvj5+ff35XR4h/BE1jHK+ac+fOEREezp07d/Dx8c3v6gjxj/FaB8en//kP5uZmjB07jkKFCuV3dYT4x3jtL1WEENrJ73EIITST4BBCaCbBIYTQTIJDCKGZBIcQQjMJDiGEZhIcQgjNJDiEEJpJcAghNJPgEEJoJsEhhNBMgkMIoZkEhxBCMwkOIYRmEhxCCM0kOIQQmklwCCE0k+AQQmgmwSGE0EyCQwihmQSHBnsiI9m4cUN+V0OIfGdycLg4O+Hi7MT/fv45z+Xdu3XFxdmJgQNe3WeODh36NV99+SXXr1/P76oIka80P1dl1aqV/PvDD43mxcfHc/DgwWdWqZfVyFGjuHb1GnZ2dvldFSHylebgOH36NEeOHKFGjRqGeatWrXymlXpZ+frWze8qCPFS0DTGUaJECfR6vVFQZGdns2b1akqWLGlU9t6ly4MPLp40cQIuzk6Eh4fn2na7toE0bdKYsE2beLdFc7y9PBkyeBA3b940lDl8+DAff9STur4+NGzYgLFjxnDr1i0AwsLCcHF2YuHCIHr37oWnhwf//qAT8fHxzJwxA3+/+jQI8OeXX/5ntN99+/bRrWsXvDw9eO/dFsyaNZPMzMw829+ubSCeHnUM03+sWkVgm9Z41HGnWdMmzJw546meJC/EP4Wm4ChZshRu7u5sWL/ecHJFRkZy+fJl3n3vPaOyjRo3AWDnzh2GeTt27MDKygofH588t3/9+nVmzpxBQIMGODpWJDw8nJkzZwCQlJTEJx9/RGJiIt26dcfL05Nff13OxAkTjLYRHBxM2TJl8PL24tixY/Ts0Z19+/bRqnVrsrKymDplCqdjYwE4ceIEvXt9SlLSZbp07Uq1atWYO2cO48aOfeyxiImJYdSokegLFKBXr95Uq16deXPnEhoSYuLRFOKfS/Olyrst3mVPZCSbN2+mcePGrFq5kkKFCtG4cRPmzZ1rKNegQQO+nzyJHTt20K5de86dPUtCQgJNmjbF3Nw8z23funWLiZMmU6lSJa5evUrDBgFE7d0LgIWFBZMmTcaxoiNlypQlOzubiIgI9uyJNNpGvXr1+OrroWRnZ9O4cSOuXbvG9B9/xMrKClsbW378cTrHjh+nUuXKLAwK4vbt2/wwbRqOjo4A3L59m9Wr/2DgoEHY2Ng89DicOXMGgEYNG9G5SxeysrLYunULld6spPWQCvGPozk4/Pz9sbK2ZtWqlXh6erJ16xbq1q2Lvb29UbnixYvj5OxMdFQUmZmZbN+xHYDGjRs/dNuFChWiUqWcE69w4cLY2tqSlpYGgL29PcWKF+O3X3/jzJkznDlzmrS0NCwsLY224VjBEQC9Xo+trS1Zd+5gZWVl2CZguLzZu3cPAB07tM9VlwsXLlC1atWH1tXb2xs7e3tmzpzBxo0bcHJyws/Pnwp3A0iIV5nm4LCwsKBhg4b88ccqghcuJDMzM9dlyj2NGjVmX3Q0UVFR7NyxA1tbWzw9vR66bZ1O99Bl27ZtZeCAAZQpUwZ//wAaNGzAD1Onaq2+ESsrK65evcrC4EW5lpUrV+6R65YuXZrly39l3bq1xOzbx4YNG1i+fDk9evSkV+/eT1UvIV52T3QDWIt33yU7O5uFC4MoWrQoXl7eeZYLCAhAr9ezceMG9u/fj5+fP4UKFXqiioaHhZGdnc2MmbP4vG9f/Or7GQ2cPom33qoGgJWlJTVr1qRmzZqcPx/PiePHH1vPE8ePs33bNpo3b8GUqT+w/NffANiyZTMASimOHz9GdnZ2ntMAZ8+eJTU19anaIER+eKLgcHJyokyZsgA0bdqMAgUK5FmuSJEiuLm7s2b1am7fvk2jxo2euKLFi5cA4Mfp0wkNDaFXr0+Bh/dQTNG5Sxf0ej29e/di2rQfGDVqJCNHjGDdunUULPjoztjpM6f59ttvGNC/H0sWL2bK95MBqPnOOwAsXvwLH3TqxNy5c/KcPn78GIFtWtO/X9+naoMQ+eGJgkOn09G8RXMgp/fxKI0aNUYpReHChXF3r/PIso/S86OPaN68OZF7IglasIAmTZtRrlzZJ94eQM2aNfnpvzMoXbo0oSEhbN26lWbNmjHFhEugZs2aM3DQIK5evcr06dOIiYmhU6cPGDLkCwDKvFEGGxsbKtwdc/n7tL19YYoWLUrlylWeqg1C5Aedes43Hmzfvo1+ffvSpk0gXw8d+jx3JYR4QTQPjpoqPT2dyZMnsXvXLvR6PR06dnxeuxJCvGDP7a9jT544wdo1aylYsBDffPMtb7755vPalRDiBXvulypCiFeP/B6HEEIzCQ4hhGYSHEIIzSQ4hBCamfR17I7t21gaGsKNGzeed32EEPnI1taWdu074POYH60yKTiWhobQf+AgKlaUr1SFeJXFxZ1h6veTHxscJl2q3LhxQ0JDiNdAxYpvmnRlIWMcQgjNJDiEEJpJcAghNJPgEEJoJsEhhNBMgkMIoZkEhxBCMwkOIYRmzzw4rl27xoTx42nUsAGeHnX48N8fsHv3rme9m1wOHz6Mj/fDH73wd/5+9dkXHW2Y/vPPw7Rv1w5vL0+OHTv2PKooxCvjmQZHWmoqPbp349ChQwwZ8gUzZs7E09OL/v36vfQPph7z3XfUrl2L4EWL+Ne//pXf1RHipfZMf3N03rx56HQ65i9YgIWFBQBOTs6UKl2K8ePG4efnj62t7bPc5TOTkpKCv3+A/Oq4ECZ4pj2ONWtW0617d0No3PP++y1xdnbh+PH7lwC///YbbQPb4OnhQbt2bY2eYD9k8CBmzZrJ4EGD8PL0oFnTpqxdu8Zom1FRe+nUqSOeHnXo1rULSUlJRstv3brF9GnTaNa0CV6eHnzyyceGh00/6Pz587g4O5GSkkKvXp8aPY1eCPEQygRdO//7sWWSk5OVs1NtdfHixceWDQsLU/Xq+qqIiHCVnJysVqz4XXnUcVfJyclKKaUGDxqo/P3qq4iIcJV686ZatmyZcndzVZcuXVJKKRUXF6c86tRRi4KDVUJCggoPD1PvvdtCeXt5GvYxYfx41b5dW3X48CGVlJSkxo75TrVr29aw3K9+PRUdFaWys7NVRkaGquvro7Zt26oyMjJMOSRCvLJMOd+fWY8j9e7jGO1MuBQJCAjg9xUr8fPzp3jx4rz/fkusra05duyooYynlxd+fjkPuA4MDMTBwYHDhw8DsGzZUnx9ffiwc2fDs2T//vzagYMGMXfefN5+uyYODg6079CR2NhThodY36PT6TAzM8PM3BwzM3PMzMye9lAI8cp7ZmMcdnefVn/9xg2srK0BWL9+PaNHjTSU6dy5C5/26gXApUuXCA0NIS4ujrNxZ7ly5QoZGZmGsn9/6LO9vT3pd0/607Gn8fTyNFpevXoNo2mdTseBA/uJjo4m/lw8J0+eACAzM9Pw9HohxJN5Zj2OwoULU6JECfbHxBjm+fr6siQklCUhoVSpUsUw9vHbb7/y6X8+4c6dOzRq1Jhx48dTtqy2xzlm3ckyms7OMp4ePmwoU77/nmJFixEYGMiEiROfsGVCiL97ZsGh0+lo2qwZQUELuHXrFgDW1tY4OjpiaWlBbGwsNWvWBGD9unV06dKVPn0+IyAggLJly5KcnGzyvipXqcy+mH1G844cPWJ4n52dzYYNGxj9zbd07tIFbx8fMjNvP4NWY+polwAABZBJREFUCiHgGX+r8lHPj8jOzqZnj+5s2rSRI3/+yapVK+nZowd16njg6uYGQPkKFdi5cyenY2OJi4tj+LChKA3PhWob2JaYffuYP38eiYmJhIWFsWHDhvuN0uspV64c69auJTExgUOHDvH95MnPsqlCvNaeaXBYWVuzYEEQtWrVYuqUqfTs2YOFQUG0bNWKSQ+cuAP6D8DBoQSdO3/IZ3164+HhiYODg8n7qeDoyA/TphO2aROBbVoTsmQJQwYPMSrzw7TpHDl6hMA2gYwfN5Zu3bo9s3YK8boz6RGQ3bp8SFDwzy+iPkKIfGbK+S5/5CaE0EyCQwihmQSHEEIzCQ4hhGYSHEIIzSQ4hBCaSXAIITQzKThsbW2JizvzvOsihMhncXFnTPqxLZP+OrZd+w5M/X6ySQ+jFUL8c9na2tKufYfHljPpzlEhhHiQjHEIITST4BBCaCbBIYTQTIJDCKGZBIcQQjMJDiGEZhIcQgjNJDiEEJpJcAghNJPgEEJoJsEhhNBMgkMIoZkEhxBCMwkOIYRmEhxCCM0kOIQQmklwCCE0k+AQQmgmwSGE0Myk4AgKCsLW1hadTicvDS9bW1uCgoKe97+hEC+cST9WbGtry82bN19EfV45NjY28uvw4pVjUnDodLoXUZdXlvyQvHjVyBiHEEIzCQ4hhGYSHEIIzSQ4hBCaSXAIITST4BBCaCbBIYTQ7KUJji1btpCdnY23t7fRfA8PD5RSLFy4MH8qJoTI5aUJDsi50Wzu3LmYmZk9t30ULlwYpRRhYWHPbR9CvOpequAAqFatGkOHDs3vagghHuGlC46zZ8/y5ZdfUr169YeWqVevHrt27SItLY0zZ84wevRozM3NARg2bBhKKT7++GMAihYtyrVr1zh+/Dhvv/02V65cASAgIAClFD4+Ps+/UUK8Yl664OjVqxd6vZ558+ah1+euXu3atdm4cSNly5Zl4sSJ7Nu3jxEjRjBz5kwAvv/+e86fP8+IESOwsLDgq6++ws7OjgEDBnDhwgXGjBlj2NbgwYOJi4t7YW0T4pWhTAA899eWLVuUUkqVKlVKTZgwQSmlVJ8+fZSHh4dSSqmFCxcqQIWEhCillKpVq5aysLBQFhYWauXKlerOnTvK3t5eAapTp05KKaWmTJmi0tPT1fr16w37KVy4sFJKqbCwsBfSLhMPsRD/KC9lcFhaWqpTp06p69evq7Zt2yql7gdHcnLyQ+tZq1YtBSidTqd2796tlFLq9u3bqlq1ahIcQjxDBfPqheS39PR0PvnkE8LDw5k8ebLRsps3b1K8eHE8PT1zrRcbG2t4/+BljvwsgBDP1ks3xnFPREQEQUFBlC9f3mh+TEwMkBMgkZGRREZGUrlyZZycnMjMzASgS5cuuLu7M2fOHLKyspg+fbphfXX3tzEKFSr0gloixCvIlG4JL/hS5d68IkWKqEuXLiml7l+qeHh4qDt37qjExEQ1ceJEFRQUpLKystT27dsVoGxtbdXFixfV+fPnlaWlpZo0aZJSSqnWrVsrQOn1enX16lWVkZGh5s6dq0qWLCmXKkJo9FIHB6DatWunlLofHIBq0KCB2rVrl0pLS1MpKSkqODhYFStWTAFq4sSJSimlOnfubBjTSE5OVnFxccrCwkIBqnXr1urYsWMqPT1d+fv7S3AIoZH8dOALYMIhFuIf5aUd4xBCvLwkOIQQmklwCCE0k+AQQmgmwSGE0EyCQwihmQSHEEIzCQ4hhGYmBYeNjc3zrscrS46deBWZFBzTp0+XE+AJ2NjYGP2BnRCvCpNuORdCiAfJGIcQQjMJDiGEZhIcQgjNJDiEEJpJcAghNJPgEEJoJsEhhNBMgkMIoZkEhxBCMwkOIYRmEhxCCM0kOIQQmklwCCE0k+AQQmj2/7qkBOwu7AsrAAAAAElFTkSuQmCC"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),c=(t(0),t(305)),i=t(307),o={title:"Wizard",keywords:["form","wizard"]},l={unversionedId:"examples/wizard",id:"examples/wizard",isDocsHomePage:!1,title:"Wizard",description:"Create a multi-step wizard using form cards.",source:"@site/docs/examples/wizard.md",slug:"/examples/wizard",permalink:"/wave/docs/examples/wizard",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/wizard.md",version:"current",sidebar:"someSidebar",previous:{title:"To-do List App",permalink:"/wave/docs/examples/todo"},next:{title:"Issue Tracker",permalink:"/wave/docs/examples/issue-tracker"}},s=[],u={rightToc:s};function d(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Create a multi-step wizard using form cards."),Object(c.b)("div",{className:"cover",style:{backgroundImage:"url("+t(334).default+")"}}),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, ui, main, app, cypress, Cypress\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if (\n            not q.client.initialized\n    ):  # First visit, create an empty form card for our wizard\n        q.page['wizard'] = ui.form_card(box='1 1 2 4', items=[])\n        q.client.initialized = True\n\n    wizard = q.page['wizard']  # Get a reference to the wizard form\n    if q.args.step1:\n        wizard.items = [\n            ui.text_xl('Wizard - Step 1'),\n            ui.text('What is your name?', name='text'),\n            ui.textbox(name='nickname', label='My name is...', value='Gandalf'),\n            ui.buttons([ui.button(name='step2', label='Next', primary=True)]),\n        ]\n    elif q.args.step2:\n        q.client.nickname = q.args.nickname\n        wizard.items = [\n            ui.text_xl('Wizard - Step 2'),\n            ui.text(f'Hi {q.args.nickname}! How do you feel right now?', name='text'),\n            ui.textbox(name='feeling', label='I feel...', value='magical'),\n            ui.buttons([ui.button(name='step3', label='Next', primary=True)]),\n        ]\n    elif q.args.step3:\n        wizard.items = [\n            ui.text_xl('Wizard - Done'),\n            ui.text(\n                f'What a coincidence, {q.client.nickname}! I feel {q.args.feeling} too!',\n                name='text',\n            ),\n            ui.buttons([ui.button(name='step1', label='Try Again', primary=True)]),\n        ]\n    else:\n        wizard.items = [\n            ui.text_xl('Wizard Example'),\n            ui.text(\"Let's have a conversation, shall we?\"),\n            ui.buttons([ui.button(name='step1', label='Of course!', primary=True)]),\n        ]\n\n    await q.page.save()\n\n\n@cypress('Walk through the wizard')\ndef try_walk_through(cy: Cypress):\n    cy.visit('/demo')\n    cy.locate('step1').click()\n    cy.locate('text').should('contain.text', 'What is your name?')\n    cy.locate('nickname').clear().type('Fred')\n    cy.locate('step2').click()\n    cy.locate('text').should('contain.text', 'Hi Fred! How do you feel right now?')\n    cy.locate('feeling').clear().type('quirky')\n    cy.locate('step3').click()\n    cy.locate('text').should(\n        'contain.text', 'What a coincidence, Fred! I feel quirky too!'\n    )\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(c.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(c.b)("a",{href:Object(i.a)("docs/examples/tags#wizard")},"wizard")))}d.isMDXComponent=!0}}]);