(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),m=t.n(c),o=t(7),i=t(6),d=(t(28),t(18)),l=function(e){var a=e.children,t=e.header,n=Object(d.a)(e,["children","header"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",n,t),r.a.createElement("main",n,a))},u=t(14),_=t(21),g=(t(29),t(22));function p(e){for(var a=Object(g.a)(e).slice(0),t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[a[n],a[t]];a[t]=r[0],a[n]=r[1]}return a}var s=[{name:"The Fool",unicode:"\ud83c\udce0",image:"/media/RWS_Tarot_00_Fool.jpg"},{name:"The Magician",unicode:"\ud83c\udce1",image:"/media/RWS_Tarot_01_Magician.jpg"},{name:"The High Priestess",unicode:"\ud83c\udce2",image:"/media/RWS_Tarot_02_High_Priestess.jpg"},{name:"The Empress",unicode:"\ud83c\udce3",image:"/media/RWS_Tarot_03_Empress.jpg"},{name:"The Emperor",unicode:"\ud83c\udce4",image:"/media/RWS_Tarot_04_Emperor.jpg"},{name:"The Hierophant",unicode:"\ud83c\udce5",image:"/media/RWS_Tarot_05_Hierophant.jpg"},{name:"The Lovers",unicode:"\ud83c\udce6",image:"/media/RWS_Tarot_06_Lovers.jpg"},{name:"The Chariot",unicode:"\ud83c\udce7",image:"/media/RWS_Tarot_07_Chariot.jpg"},{name:"Strength",unicode:"\ud83c\udce8",image:"/media/RWS_Tarot_08_Strength.jpg"},{name:"The Hermit",unicode:"\ud83c\udce9",image:"/media/RWS_Tarot_09_Hermit.jpg"},{name:"Wheel of Fortune",unicode:"\ud83c\udcea",image:"/media/RWS_Tarot_10_Wheel_of_Fortune.jpg"},{name:"Justice",unicode:"\ud83c\udceb",image:"/media/RWS_Tarot_11_Justice.jpg"},{name:"The Hanged Man",unicode:"\ud83c\udcec",image:"/media/RWS_Tarot_12_Hanged_Man.jpg"},{name:"Death",unicode:"\ud83c\udced",image:"/media/RWS_Tarot_13_Death.jpg"},{name:"Temperance",unicode:"\ud83c\udcee",image:"/media/RWS_Tarot_14_Temperance.jpg"},{name:"The Devil",unicode:"\ud83c\udcef",image:"/media/RWS_Tarot_15_Devil.jpg"},{name:"The Tower",unicode:"\ud83c\udcf0",image:"/media/RWS_Tarot_16_Tower.jpg"},{name:"The Star",unicode:"\ud83c\udcf1",image:"/media/RWS_Tarot_17_Star.jpg"},{name:"The Moon",unicode:"\ud83c\udcf2",image:"/media/RWS_Tarot_18_Moon.jpg"},{name:"The Sun",unicode:"\ud83c\udcf3",image:"/media/RWS_Tarot_19_Sun.jpg"},{name:"Judgement",unicode:"\ud83c\udcf4",image:"/media/RWS_Tarot_20_Judgement.jpg"},{name:"The World",unicode:"\ud83c\udcf5",image:"/media/RWS_Tarot_21_World.jpg"}],h={one:1,daily:1,three:3,standard:3,five:5,cross:5,"celtic-cross":10};function T(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/spread/:spreadId",component:E}),r.a.createElement(i.a,{default:!0,render:function(){return r.a.createElement(l,{header:"Spread"})}}))}function E(e){var a=e.match.params.spreadId,t=Object(n.useState)({}),c=Object(_.a)(t,2),m=c[0],i=m.deck,d=void 0===i?[]:i,g=m.count,T=void 0===g?0:g,E=c[1];return Object(n.useEffect)((function(){return E((function(e){return Object(u.a)({},e,{deck:p(s)})}))}),[E]),r.a.createElement(l,{className:"spread",header:r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a),r.a.createElement("menu",null,r.a.createElement(o.b,{to:"/"},"Home")))},r.a.createElement("ol",{className:"spread ".concat(a),onClick:function(){return T<h[a]&&E((function(e){return Object(u.a)({},e,{count:T+1})}))}},r.a.createElement("li",{className:"back"},r.a.createElement("img",{src:"".concat(".","/media/RWS_Tarot.jpg"),alt:"Card Back"})),d.map((function(e,a){return r.a.createElement("li",{key:e.name,className:"".concat(T>a?"dealt":"")},r.a.createElement("img",{src:"".concat(".").concat(e.image),alt:e.name}))}))))}t.d(a,"AppContext",(function(){return S}));var S=Object(n.createContext)({}),j=function(){return r.a.createElement(l,{header:r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Cart: A Shitty Tarot App"),r.a.createElement("menu",null,r.a.createElement(o.b,{to:"/spread/daily"},"Daily"),r.a.createElement(o.b,{to:"/spread/standard"},"Standard"),r.a.createElement(o.b,{to:"/spread/cross"},"Cross"),r.a.createElement(o.b,{to:"/spread/celtic-cross"},"Celtic Cross")))})};m.a.render(r.a.createElement((function(){return r.a.createElement(S.Provider,{value:Object(n.useState)(S)},r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{path:"/spread",component:T}))))}),null),window.app)}},[[23,1,2]]]);
//# sourceMappingURL=main.c3d58535.chunk.js.map