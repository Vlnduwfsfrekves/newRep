"use strict";(self.webpackChunknewRep=self.webpackChunknewRep||[]).push([[451],{451:function(n,e,t){t.r(e);var r=t(861),i=t(439),c=t(757),o=t.n(c),u=t(791),a=t(87),s=t(184);e.default=function(){var n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzQxM2E4ZDIyNjUwYjU1MWRkOWEyZTAxNDAyMjA1MCIsInN1YiI6IjY2NTI0MmYyZjlhZDA0OGYyZmVjZDVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOhaNSvhcUxwYogMi-yliW1Jl5-8J7kz01gNdvdQ-I0"}},e=(0,u.useState)([]),t=(0,i.Z)(e,2),c=t[0],h=t[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc",n).then((function(n){return n.json()})).then((function(n){return h(n.results)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:c.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.original_title})},n.id)}))})]})}},861:function(n,e,t){function r(n,e,t,r,i,c,o){try{var u=n[c](o),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,c){var o=n.apply(e,t);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=451.2ea3c493.chunk.js.map