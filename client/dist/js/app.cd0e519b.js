(function(t){function e(e){for(var s,i,a=e[0],u=e[1],c=e[2],h=0,p=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0217":function(t,e,n){"use strict";var s=n("82cd"),r=n.n(s);r.a},"1cab":function(t,e,n){"use strict";var s=n("38a6"),r=n.n(s);r.a},"38a6":function(t,e,n){},"45d9":function(t,e,n){"use strict";var s=n("cdc7"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[-1==this.currentQuestion?n("div",{staticClass:"intro"},[n("intro"),n("button",{attrs:{type:"button",name:"button"},on:{click:t.summary}},[t._v("Summary")])],1):t._e(),this.currentQuestion>=0&&this.currentQuestion<this.questions.length?n("div",{staticClass:"QA"},[1==this.show?n("div",{staticClass:"question"},[n("question",{attrs:{currentQuestion:this.currentQuestion,questions:this.questions}})],1):t._e(),0==this.show?n("div",{staticClass:"answer"},[n("answer",{attrs:{questions:t.questions,currentQuestion:this.currentQuestion}})],1):t._e()]):t._e(),7==this.currentQuestion?n("div",{staticClass:"summary"},[n("summary-list",{attrs:{questions:this.questions,responses:this.responses}})],1):t._e()])},o=[],i=(n("d3b7"),"http://localhost:3000/api"),a={getQuestions:function(){return fetch(i+"/questions").then((function(t){return t.json()}))},updateQuestionResponses:function(t){var e=t._id,n={totalResponses1:t.totalResponses1,totalResponses2:t.totalResponses2};return fetch(i+"/questions/"+e,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))},getUsers:function(){return fetch(i+"/users").then((function(t){return t.json()}))},postUser:function(t){return fetch(i+"/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))},deleteUser:function(t){return fetch(i+"/users/"+t,{method:"DELETE"})},updateUser:function(t){var e=t._id;return fetch(i+"/users/"+e,{method:"UPDATE",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("div",{staticClass:"title"},[n("h1",[t._v("Question: "+t._s(t.currentQuestion+1)+" ")])]),t._m(0),t._m(1),n("div",{staticClass:"option1"},[n("img",{attrs:{src:this.questions[t.currentQuestion].url1},on:{click:t.handleClick1}}),n("h3",{staticClass:"option-text"},[t._v(t._s(this.questions[t.currentQuestion].option1))])]),n("div",{staticClass:"option2"},[n("img",{attrs:{src:this.questions[t.currentQuestion].url2},on:{click:t.handleClick2}}),n("h3",{staticClass:"option-text"},[t._v(t._s(this.questions[t.currentQuestion].option2))])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"would-you-rather"},[n("h2",[t._v("Would you rather eat...?")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"or"},[n("p",{staticClass:"or-text"},[t._v("OR")])])}],l={name:"question",props:["currentQuestion","questions"],data:function(){return{}},methods:{handleClick1:function(){this.questions[this.currentQuestion].totalResponses1+=1,a.updateQuestionResponses(this.questions[this.currentQuestion]),H.$emit("selected-option",1)},handleClick2:function(){this.questions[this.currentQuestion].totalResponses2+=1,a.updateQuestionResponses(this.questions[this.currentQuestion]),H.$emit("selected-option",2)}}},h=l,p=(n("0217"),n("2877")),d=Object(p["a"])(h,u,c,!1,null,"ccec9b0e",null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:""}},[n("ul",t._l(this.questions,(function(e,s){return n("response-list-item",{attrs:{question:e,responses:t.responses,counter:s}})})),1),t.displayShare?t._e():n("button",{attrs:{type:"button",name:"share"},on:{click:function(e){t.displayShare=!t.displayShare}}},[t._v("Share")]),n("transition",{attrs:{name:"fade"}},[t.displayShare?n("share-button"):t._e()],1),n("button",{attrs:{type:"button"},on:{click:t.handleScreenshot}},[t._v("Screenshot")])],1)},_=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.question.totalResponses1)+" people chose "+t._s(t.question.option1)+" and "+t._s(t.question.totalResponses2)+" chose "+t._s(t.question.option2)+". You chose option "+t._s(t.responses[t.counter])+" ")])},b=[],g={name:"response-list-item",props:["question","responses","counter"]},y=g,w=Object(p["a"])(y,m,b,!1,null,"14163fa4",null),C=w.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:""}},[n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solidcircle",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z"}})])]),t._v("Facebook")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://twitter.com/intent/tweet/?text=Take%20the%20healthy%20quiz%20and%20see%20how%20you%20score&url=http%3A%2F%2Flocalhost%3A8080",target:"_blank",rel:"noopener","aria-label":"Twitter"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solidcircle",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"}})])]),t._v("Twitter")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"mailto:?subject=Take%20the%20healthy%20quiz%20and%20see%20how%20you%20score&body=http%3A%2F%2Flocalhost%3A8080",target:"_self",rel:"noopener","aria-label":"E-Mail"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--email resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solidcircle",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z"}}),n("path",{attrs:{d:"M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z"}})])]),t._v("E-Mail")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Flocalhost%3A8080&title=Take%20the%20healthy%20quiz%20and%20see%20how%20you%20score&summary=Take%20the%20healthy%20quiz%20and%20see%20how%20you%20score&source=http%3A%2F%2Flocalhost%3A8080",target:"_blank",rel:"noopener","aria-label":"LinkedIn"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solidcircle",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{version:"1.1",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24","enable-background":"new 0 0 24 24","xml:space":"preserve"}},[n("path",{attrs:{d:"M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z"}})])]),t._v("LinkedIn")])]),t._m(0)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"",target:"_blank",rel:"noopener","aria-label":"Instagram"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--instagram resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solidcircle",attrs:{"aria-hidden":"true"}}),t._v("Instagram")])])}],x={name:"share-button"},Q=x,S=(n("45d9"),Object(p["a"])(Q,q,k,!1,null,"f344ba38",null)),O=S.exports,j=n("c0e9"),R=n.n(j),T={takeScreenshot:function(){function t(t,e){var n=document.createElement("a");"string"===typeof n.download?(n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(t)}R()(document.querySelector(".summary")).then((function(e){t(e.toDataURL(),"screenshot.jpg")}))}},E={name:"summary-list",data:function(){return{displayShare:!1}},props:["questions","responses"],components:{"response-list-item":C,"share-button":O,"canvas-function":T},methods:{handleScreenshot:function(){T.takeScreenshot()}}},z=E,$=(n("1cab"),Object(p["a"])(z,v,_,!1,null,"3bdcaed6",null)),M=$.exports,A=n("cf4c"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Title!")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.handleStartButtonClick()}}},[t._v("Start")])])},F=[],B={name:"intro",methods:{handleStartButtonClick:function(){H.$emit("next-question")}}},U=B,D=Object(p["a"])(U,P,F,!1,null,"4029aac4",null),L=D.exports,V={name:"app",data:function(){return{users:[],questions:[],show:!1,currentQuestion:-1,responses:[]}},mounted:function(){var t=this;a.getQuestions().then((function(e){return t.questions=e})),a.getUsers().then((function(e){return t.users=e})),H.$on("selected-option",(function(e){t.responses.push(e),t.nextDisplay()})),H.$on("next-question",(function(e){t.nextQuestion()}))},components:{question:f,"summary-list":M,answer:A["default"],intro:L},methods:{nextQuestion:function(){this.currentQuestion+=1,this.nextDisplay()},nextDisplay:function(){this.show=!this.show},summary:function(){this.currentQuestion=7}}},I=V,J=(n("c29b"),Object(p["a"])(I,r,o,!1,null,"0f98c5c2",null)),N=J.exports;n.d(e,"eventBus",(function(){return H}));var H=new s["a"];s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(N)}}).$mount("#app")},"82cd":function(t,e,n){},"9d68":function(t,e,n){},ad4f:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-frame"},[n("h1",[t._v("ResponseText: "+t._s(this.questions[t.currentQuestion].responseText))]),n("p",[t._v("this many people chose option1: "+t._s(this.questions[t.currentQuestion].totalResponses1))]),n("p",[t._v("this many people chose option2: "+t._s(this.questions[t.currentQuestion].totalResponses2))]),n("p",[t._v(" Percentage1: "+t._s(t.percentage1))]),n("p",[t._v(" Percentage2: "+t._s(t.percentage2))]),n("button",{staticClass:"next-btn",attrs:{type:"button"},on:{click:t.handleNextClick}},[t._v("Next")]),n("div",{attrs:{id:"chart_div"}})])},r=[];n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}))},c29b:function(t,e,n){"use strict";var s=n("9d68"),r=n.n(s);r.a},cdc7:function(t,e,n){},cf4c:function(t,e,n){"use strict";var s=n("ad4f"),r=n("fdca"),o=n("2877"),i=Object(o["a"])(r["default"],s["a"],s["b"],!1,null,"5cedec2f",null);e["default"]=i.exports},e077:function(t,e){function n(){var t=new google.visualization.DataTable;t.addColumn("string","Option"),t.addColumn("number","Responses"),t.addRows([["Option 1",this.questions[this.currentQuestion].totalResponses1],["Option 2",this.questions[this.currentQuestion].totalResponses2]]);var e={title:"How many people choose which option",width:400,height:300},n=new google.visualization.PieChart(document.getElementById("chart_div"));n.draw(t,e)}google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(n)},fdca:function(t,e,n){"use strict";var s=n("e077"),r=n.n(s);e["default"]=r.a}});
//# sourceMappingURL=app.cd0e519b.js.map