(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(11),n(2)),u=n.n(i),o=n(5),l=n(3),j=(n(13),n(0)),p=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("Mumbai"),s=Object(l.a)(r,2),i=s[0],p=s[1],b=Object(c.useState)(null),d=Object(l.a)(b,2),h=d[0],f=d[1],x=Object(c.useState)(""),O=Object(l.a)(x,2);O[0],O[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=8;break}return e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=c30bdedeeb747d8a16adecb6c7f575b1"));case 3:return t=e.sent,e.next=6,t.json();case 6:"404"==(n=e.sent).cod?a(null):a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),n)&&function(){var e=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(n.sys.country));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,f(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),console.log(h),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Weather App"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("input",{type:"search",className:"inp",value:i,placeholder:"Type a city name",onChange:function(e){p(e.target.value)}}),n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"box cityName",children:[i.toUpperCase(),", ",h.name]}),Object(j.jsxs)("div",{className:"box currtemp",children:[" ","Actual :",n.main.temp.toFixed(0),"\xb0C"]}),Object(j.jsxs)("div",{className:"box realfeel",children:["Feels Like :",n.main.feels_like.toFixed(0),"\xb0C"]})]}):Object(j.jsx)("p",{children:"No Data"})]})]})};n(15);var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.f01e8065.chunk.js.map