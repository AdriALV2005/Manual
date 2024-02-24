"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[299],{8672:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=a(4848),s=a(8453);const i={sidebar_position:4},t="Docker | Linux | SSL externo",c={id:"InstalacionFac/Pasos",title:"Docker | Linux | SSL externo",description:"1. Instalaci\xf3n del software sin SSL",source:"@site/docs/InstalacionFac/Pasos.md",sourceDirName:"InstalacionFac",slug:"/InstalacionFac/Pasos",permalink:"/Manual/docs/InstalacionFac/Pasos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n del Facturador",permalink:"/Manual/docs/category/instalaci\xf3n-del-facturador"}},l={},o=[{value:"Importante",id:"importante",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker--linux--ssl-externo",children:"Docker | Linux | SSL externo"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Instalaci\xf3n del software sin SSL"})}),"\n",(0,r.jsx)(n.p,{children:'Ejecute el script de instalaci\xf3n, evitando la instalaci\xf3n del SSL. Cuando se le consulte en el proceso, deber\xe1 ingresar "n".'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Navegaci\xf3n a la ruta de instalaci\xf3n"})}),"\n",(0,r.jsx)(n.p,{children:"Una vez finalizada la instalaci\xf3n, dir\xedjase a la ruta de instalaci\xf3n ejecutando el siguiente comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /root/facturadorpro31/   \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Edici\xf3n del archivo .env"})}),"\n",(0,r.jsxs)(n.p,{children:["Edite el archivo ",(0,r.jsx)(n.code,{children:".env"})," utilizando el editor ",(0,r.jsx)(n.code,{children:"nano"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano .env  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Dentro del editor ubicar los par\xe1metros y cambiarlos:\r\nDentro del editor ubicar los par\xe1metros y cambiarlos:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Antes"}),(0,r.jsx)(n.th,{children:"Despu\xe9s"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"APP_URL=http://${APP_URL_BASE}  FORCE_HTTPS=false"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"APP_URL=https://${APP_URL_BASE}FORCE_HTTPS=true"})})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Modificaci\xf3n de par\xe1metros"})}),"\n",(0,r.jsx)(n.p,{children:"Dentro del editor, ubique los par\xe1metros que necesita cambiar y modif\xedquelos seg\xfan sea necesario."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Guardado y cierre del editor"})}),"\n",(0,r.jsx)(n.p,{children:"Una vez que haya realizado los cambios, guarde y salga del editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Eliminaci\xf3n de la cach\xe9 de la aplicaci\xf3n"})}),"\n",(0,r.jsx)(n.p,{children:"Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"php artisan config:cache\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Finalizaci\xf3n de la configuraci\xf3n y nota sobre la necesidad de SSL"})}),"\n",(0,r.jsx)(n.p,{children:"Una vez completados estos pasos, habr\xe1 terminado de configurar la herramienta. Sin embargo, en este momento no podr\xe1 acceder a la herramienta hasta que tenga un SSL configurado."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"importante",children:"Importante"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var r=a(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);