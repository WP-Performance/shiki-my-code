(()=>{"use strict";var e,a={210:(e,a,t)=>{const l=window.wp.domReady;var r=t.n(l);const i=window.wp.element,o=window.wp.components,n=window.wp.i18n,h=window.wp.data,d=window.wp.notices,s=window.wp.apiFetch;var u=t.n(s);const p=window.ReactJSXRuntime,c=()=>{const{removeNotice:e}=(0,h.useDispatch)(d.store),a=(0,h.useSelect)((e=>e(d.store).getNotices()));return 0===a.length?null:(0,p.jsx)(o.NoticeList,{notices:a,onRemove:e})},k={dark:[{value:"andromeeda",label:"Andromeeda",type:"dark"},{value:"aurora-x",label:"Aurora X",type:"dark"},{value:"ayu-dark",label:"Ayu Dark",type:"dark"},{value:"catppuccin-frappe",label:"Catppuccin Frappé",type:"dark"},{value:"catppuccin-macchiato",label:"Catppuccin Macchiato",type:"dark"},{value:"catppuccin-mocha",label:"Catppuccin Mocha",type:"dark"},{value:"dark-plus",label:"Dark Plus",type:"dark"},{value:"dracula-soft",label:"Dracula Theme Soft",type:"dark"},{value:"dracula",label:"Dracula Theme",type:"dark"},{value:"everforest-dark",label:"Everforest Dark",type:"dark"},{value:"github-dark-default",label:"GitHub Dark Default",type:"dark"},{value:"github-dark-dimmed",label:"GitHub Dark Dimmed",type:"dark"},{value:"github-dark-high-contrast",label:"GitHub Dark High Contrast",type:"dark"},{value:"github-dark",label:"GitHub Dark",type:"dark"},{value:"houston",label:"Houston",type:"dark"},{value:"laserwave",label:"LaserWave",type:"dark"},{value:"material-theme-darker",label:"Material Theme Darker",type:"dark"},{value:"material-theme-ocean",label:"Material Theme Ocean",type:"dark"},{value:"material-theme-palenight",label:"Material Theme Palenight",type:"dark"},{value:"material-theme",label:"Material Theme",type:"dark"},{value:"min-dark",label:"Min Dark",type:"dark"},{value:"monokai",label:"Monokai",type:"dark"},{value:"night-owl",label:"Night Owl",type:"dark"},{value:"nord",label:"Nord",type:"dark"},{value:"one-dark-pro",label:"One Dark Pro",type:"dark"},{value:"poimandres",label:"Poimandres",type:"dark"},{value:"red",label:"Red",type:"dark"},{value:"rose-pine-moon",label:"Rosé Pine Moon",type:"dark"},{value:"rose-pine",label:"Rosé Pine",type:"dark"},{value:"slack-dark",label:"Slack Dark",type:"dark"},{value:"solarized-dark",label:"Solarized Dark",type:"dark"},{value:"synthwave-84",label:"Synthwave '84",type:"dark"},{value:"tokyo-night",label:"Tokyo Night",type:"dark"},{value:"vesper",label:"Vesper",type:"dark"},{value:"vitesse-black",label:"Vitesse Black",type:"dark"},{value:"vitesse-dark",label:"Vitesse Dark",type:"dark"}],light:[{value:"catppuccin-latte",label:"Catppuccin Latte",type:"light"},{value:"everforest-light",label:"Everforest Light",type:"light"},{value:"github-light-default",label:"GitHub Light Default",type:"light"},{value:"github-light-high-contrast",label:"GitHub Light High Contrast",type:"light"},{value:"github-light",label:"GitHub Light",type:"light"},{value:"light-plus",label:"Light Plus",type:"light"},{value:"material-theme-lighter",label:"Material Theme Lighter",type:"light"},{value:"min-light",label:"Min Light",type:"light"},{value:"one-light",label:"One Light",type:"light"},{value:"rose-pine-dawn",label:"Rosé Pine Dawn",type:"light"},{value:"slack-ochin",label:"Slack Ochin",type:"light"},{value:"snazzy-light",label:"Snazzy Light",type:"light"},{value:"solarized-light",label:"Solarized Light",type:"light"},{value:"vitesse-light",label:"Vitesse Light",type:"light"}]},v=()=>{const{createSuccessNotice:e}=(0,h.useDispatch)(d.store),[a,t]=(0,i.useState)(),[l,r]=(0,i.useState)();return(0,i.useEffect)((()=>{u()({path:"/wp/v2/settings"}).then((e=>{var a,l;t(null!==(a=e.wpperformance_shiki_my_code.theme_light)&&void 0!==a?a:"github-light-default"),r(null!==(l=e.wpperformance_shiki_my_code.theme_dark)&&void 0!==l?l:"github-dark-default")}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{}),(0,p.jsxs)(o.Panel,{children:[(0,p.jsxs)(o.PanelBody,{children:[(0,p.jsx)(o.PanelRow,{children:(0,p.jsx)("h2",{children:(0,n.__)("Default themes for Shiki block","shiki-my-code")})}),(0,p.jsx)(o.PanelRow,{children:(0,p.jsx)("p",{children:(0,n.__)("This settings don't change the default theme for blocks already in content. It's just for the themes selected by default when you add a block in content","shiki-my-code")})}),(0,p.jsx)(o.PanelRow,{children:(0,p.jsx)(o.SelectControl,{label:(0,n.__)("Theme Light","shiki-my-code"),value:a,options:k.light,onChange:e=>t(e)})}),(0,p.jsx)(o.PanelRow,{children:(0,p.jsx)(o.SelectControl,{label:(0,n.__)("Theme Dark","shiki-my-code"),value:l,options:k.dark,onChange:e=>r(e)})})]}),(0,p.jsx)(o.Button,{variant:"primary",onClick:()=>{u()({path:"/wp/v2/settings",method:"POST",data:{wpperformance_shiki_my_code:{theme_light:a,theme_dark:l}}}).then((()=>{e((0,n.__)("Settings saved.","shiki-my-code"))}))},__next40pxDefaultSize:!0,children:(0,n.__)("Save","shiki-my-code")})]})]})};r()((()=>{(0,i.createRoot)(document.getElementById("wpperformance_shiki_my_code_settings")).render((0,p.jsx)(v,{}))}))}},t={};function l(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,l),i.exports}l.m=a,e=[],l.O=(a,t,r,i)=>{if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var n=!0,h=0;h<t.length;h++)(!1&i||o>=i)&&Object.keys(l.O).every((e=>l.O[e](t[h])))?t.splice(h--,1):(n=!1,i<o&&(o=i));if(n){e.splice(s--,1);var d=r();void 0!==d&&(a=d)}}return a}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]},l.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return l.d(a,{a}),a},l.d=(e,a)=>{for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={6952:0,8880:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var r,i,o=t[0],n=t[1],h=t[2],d=0;if(o.some((a=>0!==e[a]))){for(r in n)l.o(n,r)&&(l.m[r]=n[r]);if(h)var s=h(l)}for(a&&a(t);d<o.length;d++)i=o[d],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(s)},t=self.webpackChunkshiki_my_code=self.webpackChunkshiki_my_code||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var r=l.O(void 0,[8880],(()=>l(210)));r=l.O(r)})();