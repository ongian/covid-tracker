(this["webpackJsonpncov-tracker"]=this["webpackJsonpncov-tracker"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=(a(36),a(37),a(8)),s=a(9),u=a(12),i=a(11),d=a(6),m=a(10),p=function(e){return r.a.createElement("header",null,r.a.createElement("section",null,r.a.createElement("h1",null,"#StayAtHome"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:{pathname:"/worldwide"}},"Worlwide"))))))},h=function(){return r.a.createElement("footer",null,r.a.createElement("section",null,r.a.createElement("p",null,"Created by Christian Ong")))},E=function(e){return e.children},v=a(14),y=a.n(v),f=function(e){return r.a.createElement("div",{className:["updates",e.addClass].join(" ")},r.a.createElement("p",{className:"quantity"},e.quantity),r.a.createElement("p",{className:"record"},e.record))},g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={updates:{},updatedTimeString:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries/ph").then((function(t){var a=new Date(t.data.updated).toDateString();e.setState({updates:t.data}),e.setState({updatedTimeString:a})}))}},{key:"render",value:function(){var e="Loading Time...";return this.state.updatedTimeString.length&&(e=this.state.updatedTimeString),r.a.createElement(E,null,r.a.createElement("h1",null,"Daily updates"),r.a.createElement("p",{className:"last-updates"},"Last updated: ",e),r.a.createElement("div",{className:"total-updates"},r.a.createElement("h2",null,"Total updates"),r.a.createElement("div",{className:"totals-container"},r.a.createElement(f,{addClass:"totals",quantity:this.state.updates.cases,record:"Total case"}),r.a.createElement(f,{addClass:"admitted",quantity:this.state.updates.active,record:"Active cases"}),r.a.createElement(f,{addClass:"recover",quantity:this.state.updates.recovered,record:"Total recoveries"}),r.a.createElement(f,{addClass:"deaths",quantity:this.state.updates.deaths,record:"Total deaths"}))),r.a.createElement("div",{className:"daily-updates"},r.a.createElement("h2",null,"Daily updates"),r.a.createElement("div",{className:"daily-container"},r.a.createElement(f,{addClass:"totals",quantity:this.state.updates.todayCases,record:"New case"}),r.a.createElement(f,{addClass:"recover",quantity:this.state.updates.critical,record:"New recoveries"}),r.a.createElement(f,{addClass:"deaths",quantity:this.state.updates.todayDeaths,record:"Deaths today"}))))}}]),a}(n.Component),w=function(e){return r.a.createElement("div",{className:"country"},r.a.createElement("div",{className:"flag-and-country"},r.a.createElement("img",{src:e.flag,alt:e.country}),r.a.createElement("p",null,e.country)),r.a.createElement("div",{className:"countryInfo"},r.a.createElement("p",null,"Total case: ",e.totalcase),r.a.createElement("p",null,"Total deaths: ",e.totaldeaths),r.a.createElement("p",null,"Total recovery: ",e.totalrecovered),r.a.createElement("p",null,"Active case: ",e.totalactive),r.a.createElement("p",null,"Case today: ",e.casetoday),r.a.createElement("p",null,"Death today: ",e.deathtoday),r.a.createElement("p",{className:"updated"},"Last updates: ",e.update)))},b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={countries:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries/").then((function(t){e.setState({countries:t.data})}))}},{key:"render",value:function(){var e=r.a.createElement("p",null,"Loading records.....",r.a.createElement("br",null),"Please wait....");return this.state.countries.length&&(e=this.state.countries.map((function(e,t){return r.a.createElement(w,{key:t,flag:e.countryInfo.flag,country:e.country,totalcase:e.cases,totaldeaths:e.deaths,totalrecovered:e.recovered,totalactive:e.active,casetoday:e.todayCases,deathtoday:e.todayDeaths,update:new Date(e.updated).toDateString()})}))),r.a.createElement(E,null,r.a.createElement("h1",null,"Worlwide case"),r.a.createElement("div",{className:"world-case"},e))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(p,null),r.a.createElement("section",null,r.a.createElement(d.a,{path:"/",exact:!0,component:g}),r.a.createElement(d.a,{path:"/worldwide",component:b})),r.a.createElement(h,null))}}]),a}(n.Component);var N=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.dacffb33.chunk.js.map