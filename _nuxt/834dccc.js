(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("6dcb0a4e",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var r={name:"DefaultLayout"},o=(n(276),n(47)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"hero is-fullheight has-background-light"},[t._m(0),t._v(" "),e("Nuxt")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"hero-head"},[t("h1",{staticClass:"title has-text-centered mt-6"},[this._v("TODO list")])])}],!1,null,null,null);e.a=component.exports},205:function(t,e,n){n(206),t.exports=n(207)},276:function(t,e,n){"use strict";n(190)},277:function(t,e,n){var r=n(85)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},278:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(279),n(14),n(40),n(46);var r=function(){return{tasks:[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]}},o={tasks:function(t){return t.tasks},currentTask:function(t){return function(e){return t.tasks.find((function(t){return t.id==e})).title}}},c={SET_TASKS:function(t,e){t.tasks=e},ADD_TASK:function(t,e){t.tasks.unshift({title:e[0],completed:!1,id:e[1]})},REMOVE_TASK:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e.id}))},TOGGLE_TASK:function(t,e){e.completed=!e.completed},EDIT_TASK:function(t,e){t.tasks.map((function(t){if(t.id==e.id)return t.title=e.title}))}}}},[[205,5,1,6]]]);