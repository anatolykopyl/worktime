(function(e){function t(t){for(var a,n,r=t[0],i=t[1],l=t[2],u=0,b=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&b.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,r=1;r<s.length;r++){var i=s[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},o={app:0},c=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/worktime/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=i;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0f2f":function(e,t,s){},1038:function(e,t,s){e.exports=s.p+"img/stop.8a252492.svg"},1191:function(e,t,s){},1434:function(e,t,s){},"28f8":function(e,t,s){},"3a48":function(e,t,s){"use strict";s("9c24")},"54d8":function(e,t,s){"use strict";s("d3d9")},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("7a23");const o=Object(a["i"])("div",{class:"app-backdrop"},null,-1),c=Object(a["i"])("div",{id:"modalSpot"},null,-1);function n(e,t){const s=Object(a["E"])("router-view");return Object(a["w"])(),Object(a["h"])(a["a"],null,[o,Object(a["k"])(s),c],64)}s("8509");var r=s("6b0d"),i=s.n(r);const l={},d=i()(l,[["render",n]]);var u=d,b=s("9483");Object(b["a"])("/worktime/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=s("6605");const O={class:"home"};function j(e,t,s,o,c,n){const r=Object(a["E"])("TheCategoryBar"),i=Object(a["E"])("GlobalTaskControls"),l=Object(a["E"])("TheTaskList");return Object(a["w"])(),Object(a["h"])("div",O,[Object(a["k"])(r,{onSelect:n.select},null,8,["onSelect"]),Object(a["k"])(i),Object(a["k"])(l,{selectedCategory:c.selectedCategory},null,8,["selectedCategory"])])}var m=s("5502"),p=s("5cc9"),v=s.n(p),f=s("89fe"),k=s.n(f);const h=e=>(Object(a["z"])("data-v-2f56501c"),e=e(),Object(a["x"])(),e),y={class:"category-bar"},C={class:"categories"},w=["onClick"],T=["onClick"],A=h(()=>Object(a["i"])("img",{src:v.a},null,-1)),M=[A],F={class:"name"},_=["onClick"],E=h(()=>Object(a["i"])("img",{src:k.a},null,-1)),S=[E],x=h(()=>Object(a["i"])("img",{src:v.a},null,-1)),I=[x];function $(e,t,s,o,c,n){const r=Object(a["E"])("SettingsModal"),i=Object(a["E"])("CategorySettingsModal");return Object(a["w"])(),Object(a["h"])("div",y,[Object(a["M"])(Object(a["i"])("input",{class:"add-category","onUpdate:modelValue":t[0]||(t[0]=e=>c.newCategoryName=e),placeholder:"New category",onKeypress:t[1]||(t[1]=Object(a["N"])((...e)=>n.addCategory&&n.addCategory(...e),["enter"])),onClick:t[2]||(t[2]=(...e)=>n.hoverInput&&n.hoverInput(...e)),onMouseenter:t[3]||(t[3]=(...e)=>n.hoverInput&&n.hoverInput(...e)),onMouseleave:t[4]||(t[4]=(...e)=>n.blurInput&&n.blurInput(...e))},null,544),[[a["J"],c.newCategoryName]]),Object(a["i"])("div",C,[(Object(a["w"])(!0),Object(a["h"])(a["a"],null,Object(a["C"])(e.categories,e=>(Object(a["w"])(),Object(a["h"])("div",{class:Object(a["r"])(["category",{selected:c.selectedCategory===e}]),key:e,style:Object(a["s"])({background:e.color}),onClick:t=>n.selectCategory(e)},[c.selectedCategory===e?(Object(a["w"])(),Object(a["h"])("span",{key:0,class:"icon",onClick:Object(a["O"])(t=>n.openCategorySettings(e.id),["stop"])},M,8,T)):Object(a["g"])("",!0),Object(a["i"])("span",F,Object(a["G"])(e.name),1),Object(a["i"])("span",{onClick:Object(a["O"])(t=>n.removeCategory(e.id),["stop"]),class:"icon"},S,8,_)],14,w))),128))]),Object(a["i"])("div",{class:"settings",onClick:t[5]||(t[5]=(...e)=>n.openSettings&&n.openSettings(...e))},I),Object(a["k"])(r,{ref:"settingsModal"},null,512),Object(a["k"])(i,{ref:"categorySettingsModal"},null,512)])}function D(e){var t=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#3366E6","#99FF99","#B34D4D","#80B300","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#B366CC","#CC80CC","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#CC9999","#B3B31A","#00E680","#E6FF80","#1AFF33","#FF3380","#CCCC00","#66E64D","#4D80CC","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],s=0;if(0===e.length)return s;for(var a=0;a<e.length;a++)s=e.charCodeAt(a)+((s<<5)-s),s&=s;return s=(s%t.length+t.length)%t.length,t[s]}const R=e=>(Object(a["z"])("data-v-63a41676"),e=e(),Object(a["x"])(),e),B=R(()=>Object(a["i"])("div",{class:"title"},"Settings",-1)),N={class:"setting"},L=R(()=>Object(a["i"])("label",{for:"reset"},"Reset all tasks to 0 at midnight",-1));function H(e,t,s,o,c,n){const r=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(r,{ref:"modal"},{default:Object(a["L"])(()=>[B,Object(a["i"])("div",N,[Object(a["M"])(Object(a["i"])("input",{type:"checkbox",id:"reset","onUpdate:modelValue":t[0]||(t[0]=e=>c.resetAtMidnight=e)},null,512),[[a["I"],c.resetAtMidnight]]),L])]),_:1},512)}const P=e=>(Object(a["z"])("data-v-51bd45c2"),e=e(),Object(a["x"])(),e),z={class:"window"},G=P(()=>Object(a["i"])("img",{src:k.a},null,-1)),U=[G];function J(e,t,s,o,c,n){return Object(a["w"])(),Object(a["f"])(a["b"],{to:"#modalSpot"},[Object(a["i"])("div",{class:Object(a["r"])(["modal",{hidden:!c.active}])},[Object(a["i"])("div",{class:"bg",onClick:t[0]||(t[0]=(...e)=>n.close&&n.close(...e))}),Object(a["i"])("div",z,[Object(a["i"])("div",{class:"close",onClick:t[1]||(t[1]=(...e)=>n.close&&n.close(...e))},U),Object(a["D"])(e.$slots,"default",{},void 0,!0)])],2)])}var V={data(){return{active:!1}},methods:{open(){this.active=!0},close(){this.active=!1}}};s("eaac");const q=i()(V,[["render",J],["__scopeId","data-v-51bd45c2"]]);var K=q,Q={components:{Modal:K},data(){return{resetAtMidnight:void 0}},computed:{...Object(m["c"])(["midnightReset"])},watch:{resetAtMidnight(e){this.setMidnightReset(e)}},beforeMount(){this.resetAtMidnight=this.midnightReset},methods:{...Object(m["b"])(["setMidnightReset"]),open(){this.$refs.modal.open()}}};s("914f");const W=i()(Q,[["render",H],["__scopeId","data-v-63a41676"]]);var X=W,Y=s("d3c6");const Z=e=>(Object(a["z"])("data-v-9533b7e2"),e=e(),Object(a["x"])(),e),ee={class:"title"},te={class:"name"},se={class:"settings"},ae={class:"setting"},oe=Z(()=>Object(a["i"])("span",{class:"label"}," Color: ",-1)),ce={class:"setting"},ne=Z(()=>Object(a["i"])("span",{class:"label"}," Name: ",-1));var re={__name:"CategorySettingsModal",setup(e,{expose:t}){const s=Object(m["d"])(),o=Object(a["B"])(),c=Object(a["B"])(),n=e=>{c.value=e,o.value.open()},r=()=>{c.value=null,o.value.close()},i=Object(a["d"])(()=>s.state.categories.find(e=>e.id===c.value)),l=Object(a["d"])({set(e){s.commit("updateCategory",{...i.value,color:e})},get(){var e;return null===(e=i.value)||void 0===e?void 0:e.color}}),d=Object(a["d"])({set(e){s.commit("updateCategory",{...i.value,name:e})},get(){var e;return null===(e=i.value)||void 0===e?void 0:e.name}});return t({open:n,close:r}),(e,t)=>(Object(a["w"])(),Object(a["f"])(K,{ref_key:"modal",ref:o},{default:Object(a["L"])(()=>{var e,s;return[Object(a["i"])("div",ee,[Object(a["i"])("span",{class:"category",style:Object(a["s"])({background:null===(e=i.value)||void 0===e?void 0:e.color})},[Object(a["i"])("span",te,Object(a["G"])(null===(s=i.value)||void 0===s?void 0:s.name),1)],4),Object(a["j"])(" category settings ")]),Object(a["i"])("div",se,[Object(a["i"])("div",ae,[oe,Object(a["M"])(Object(a["i"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"data-maska":"!#HHHHHH","data-maska-tokens":"H:[0-9a-fA-F]"},null,512),[[a["J"],l.value],[Object(a["H"])(Y["a"])]])]),Object(a["i"])("div",ce,[ne,Object(a["M"])(Object(a["i"])("input",{type:"text",class:"input","onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e)},null,512),[[a["J"],d.value]])])])]}),_:1},512))}};s("a671");const ie=i()(re,[["__scopeId","data-v-9533b7e2"]]);var le=ie,de={components:{SettingsModal:X,CategorySettingsModal:le},data(){return{newCategoryName:"+",selectedCategory:void 0}},methods:{addCategory(e){const t=crypto.randomUUID(),s={id:t,name:this.newCategoryName,color:D(t)};this.$store.commit("addCategory",s),this.newCategoryName="",this.blurInput(e)},removeCategory(e){this.$store.commit("removeCategory",e),this.selectedCategory&&e===this.selectedCategory.id&&this.selectCategory()},hoverInput(e){this.newCategoryName="",e.target.classList.add("hover")},blurInput(e){this.newCategoryName="+",e.target.classList.remove("hover"),e.target.blur()},selectCategory(e){this.selectedCategory&&this.selectedCategory.id===e.id?this.selectedCategory=void 0:this.selectedCategory=e,this.$emit("select",this.selectedCategory)},openSettings(){this.$refs.settingsModal.open()},openCategorySettings(e){this.$refs.categorySettingsModal.open(e)}},computed:{...Object(m["c"])(["categories"])}};s("ae14");const ue=i()(de,[["render",$],["__scopeId","data-v-2f56501c"]]);var be=ue,ge=s("1038"),Oe=s.n(ge),je=s("c870"),me=s.n(je),pe=s("c637"),ve=s.n(pe);const fe=e=>(Object(a["z"])("data-v-66858698"),e=e(),Object(a["x"])(),e),ke={class:"global-controls"},he=fe(()=>Object(a["i"])("div",null," Total ",-1)),ye={class:"buttons"},Ce=fe(()=>Object(a["i"])("img",{src:Oe.a},null,-1)),we=[Ce],Te=fe(()=>Object(a["i"])("img",{src:me.a},null,-1)),Ae=[Te],Me=fe(()=>Object(a["i"])("img",{src:ve.a},null,-1)),Fe=[Me];function _e(e,t,s,o,c,n){const r=Object(a["E"])("Time"),i=Object(a["E"])("ResetAllModal"),l=Object(a["E"])("RemoveAllModal");return Object(a["w"])(),Object(a["h"])("div",ke,[Object(a["k"])(r,{time:c.totalTime,pulsing:n.atLeastOneRunning},null,8,["time","pulsing"]),he,Object(a["i"])("div",ye,[Object(a["k"])(a["c"],{name:"slide-up"},{default:Object(a["L"])(()=>[n.atLeastOneRunning?(Object(a["w"])(),Object(a["h"])("div",{key:0,class:"stop",onClick:t[0]||(t[0]=(...e)=>n.stop&&n.stop(...e))},we)):Object(a["g"])("",!0)]),_:1}),Object(a["i"])("div",{onClick:t[1]||(t[1]=t=>e.$refs.resetAllModal.open())},Ae),Object(a["i"])("div",{onClick:t[2]||(t[2]=t=>e.$refs.removeAllModal.open())},Fe)]),Object(a["k"])(i,{ref:"resetAllModal"},null,512),Object(a["k"])(l,{ref:"removeAllModal"},null,512)])}s("13d5");function Ee(e,t,s,o,c,n){return Object(a["w"])(),Object(a["h"])("div",{class:Object(a["r"])(["time",{pulsing:s.pulsing}])},Object(a["G"])(n.formattedTime),3)}var Se={props:{time:{type:Number,required:!0},pulsing:{type:Boolean,default:!1}},computed:{formattedTime(){let{time:e}=this;const t=1e3,s=60*t,a=60*s,o=24*a,c=Math.floor(e/o);e-=c*o;const n=Math.floor(e/a);e-=n*a;const r=Math.floor(e/s);return`${c}d ${n}h ${r}m`}}};s("54d8");const xe=i()(Se,[["render",Ee],["__scopeId","data-v-b0239664"]]);var Ie=xe;const $e=e=>(Object(a["z"])("data-v-386fd054"),e=e(),Object(a["x"])(),e),De=$e(()=>Object(a["i"])("div",{class:"title"},"Are you sure you want to delete all of your tasks?",-1)),Re={class:"buttons"};function Be(e,t,s,o,c,n){const r=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(r,{ref:"modal"},{default:Object(a["L"])(()=>[De,Object(a["i"])("div",Re,[Object(a["i"])("button",{onClick:t[0]||(t[0]=(...e)=>n.close&&n.close(...e))}," Cancel "),Object(a["i"])("button",{onClick:t[1]||(t[1]=(...e)=>n.removeAllTasksAndClose&&n.removeAllTasksAndClose(...e))}," Delete ")])]),_:1},512)}var Ne={components:{Modal:K},methods:{...Object(m["b"])(["removeAllTasks"]),removeAllTasksAndClose(){this.removeAllTasks(),this.close()},open(){this.$refs.modal.open()},close(){this.$refs.modal.close()}}};s("a140");const Le=i()(Ne,[["render",Be],["__scopeId","data-v-386fd054"]]);var He=Le;const Pe=e=>(Object(a["z"])("data-v-350f8564"),e=e(),Object(a["x"])(),e),ze=Pe(()=>Object(a["i"])("div",{class:"title"},"Are you sure you want to reset all of your tasks to 0?",-1)),Ge={class:"buttons"};function Ue(e,t,s,o,c,n){const r=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(r,{ref:"modal"},{default:Object(a["L"])(()=>[ze,Object(a["i"])("div",Ge,[Object(a["i"])("button",{onClick:t[0]||(t[0]=(...e)=>n.close&&n.close(...e))}," Cancel "),Object(a["i"])("button",{onClick:t[1]||(t[1]=(...e)=>n.resetTasksAndClose&&n.resetTasksAndClose(...e))}," Reset ")])]),_:1},512)}var Je={components:{Modal:K},methods:{...Object(m["b"])(["resetTasks"]),resetTasksAndClose(){this.resetTasks(),this.close()},open(){this.$refs.modal.open()},close(){this.$refs.modal.close()}}};s("aff0");const Ve=i()(Je,[["render",Ue],["__scopeId","data-v-350f8564"]]);var qe=Ve,Ke={components:{Time:Ie,RemoveAllModal:He,ResetAllModal:qe},data(){return{totalTime:0}},computed:{...Object(m["c"])(["tasks"]),atLeastOneRunning(){return this.tasks.reduce((e,t)=>t.running||e,!1)}},beforeMount(){setInterval(()=>{this.totalTime=this.getTotalTime()},1e3)},methods:{getTotalTime(){return this.tasks.reduce((e,t)=>{if(t.startedAt){const s=Date.now()-t.startedAt;return e+t.totalTime+s}return e+t.totalTime},0)},stop(){this.tasks.forEach(e=>{e.running&&this.$store.commit("stopTask",e.name)})}}};s("d091");const Qe=i()(Ke,[["render",_e],["__scopeId","data-v-66858698"]]);var We=Qe;const Xe={class:"task-list"};function Ye(e,t,s,o,c,n){const r=Object(a["E"])("Task");return Object(a["w"])(),Object(a["h"])("div",Xe,[Object(a["i"])("div",null,[Object(a["M"])(Object(a["i"])("input",{class:"add-task","onUpdate:modelValue":t[0]||(t[0]=e=>c.newTask=e),placeholder:"Add new task",onKeypress:t[1]||(t[1]=Object(a["N"])((...e)=>n.addTask&&n.addTask(...e),["enter"]))},null,544),[[a["J"],c.newTask]])]),(Object(a["w"])(!0),Object(a["h"])(a["a"],null,Object(a["C"])(n.filteredTasks,e=>(Object(a["w"])(),Object(a["f"])(r,{key:e.startedAt,task:e},null,8,["task"]))),128))])}var Ze=s("ec7e"),et=s.n(Ze),tt=s("5830"),st=s.n(tt);const at=e=>(Object(a["z"])("data-v-3dcc1ea4"),e=e(),Object(a["x"])(),e),ot={class:"task"},ct={class:"toggle-state"},nt=at(()=>Object(a["i"])("img",{src:et.a},null,-1)),rt=[nt],it=at(()=>Object(a["i"])("img",{src:st.a},null,-1)),lt=[it],dt={class:"optional-break"},ut={class:"name"},bt={class:"name"},gt=at(()=>Object(a["i"])("img",{src:k.a},null,-1)),Ot=[gt],jt=at(()=>Object(a["i"])("img",{src:ve.a},null,-1)),mt=[jt];function pt(e,t,s,o,c,n){const r=Object(a["E"])("Time"),i=Object(a["E"])("CategoryModal");return Object(a["w"])(),Object(a["h"])("div",ot,[Object(a["k"])(r,{time:n.time,pulsing:s.task.running},null,8,["time","pulsing"]),Object(a["i"])("div",ct,[s.task.running?(Object(a["w"])(),Object(a["h"])("div",{key:0,onClick:t[0]||(t[0]=(...e)=>n.stopTask&&n.stopTask(...e))},rt)):(Object(a["w"])(),Object(a["h"])("div",{key:1,onClick:t[1]||(t[1]=(...e)=>n.startTask&&n.startTask(...e))},lt))]),Object(a["i"])("div",dt,[Object(a["i"])("div",ut,Object(a["G"])(s.task.name),1),s.task.category?(Object(a["w"])(),Object(a["h"])("div",{key:0,class:"category",style:Object(a["s"])({background:s.task.category.color})},[Object(a["i"])("span",bt,Object(a["G"])(s.task.category.name),1),Object(a["i"])("span",{class:"icon",onClick:t[2]||(t[2]=(...e)=>n.removeCategory&&n.removeCategory(...e))},Ot)],4)):(Object(a["w"])(),Object(a["h"])("div",{key:1,class:"select-category",onClick:t[3]||(t[3]=(...t)=>e.$refs.categorySelect.open&&e.$refs.categorySelect.open(...t))}," Assign Category "))]),Object(a["k"])(i,{ref:"categorySelect",name:s.task.name},null,8,["name"]),Object(a["i"])("div",{class:"delete",onClick:t[4]||(t[4]=(...e)=>n.removeTask&&n.removeTask(...e))},mt)])}const vt=e=>(Object(a["z"])("data-v-5d8208bb"),e=e(),Object(a["x"])(),e),ft=vt(()=>Object(a["i"])("div",{class:"title"},"Assign Category",-1)),kt=["onClick"];function ht(e,t,s,o,c,n){const r=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(r,{ref:"modal"},{default:Object(a["L"])(()=>[ft,(Object(a["w"])(!0),Object(a["h"])(a["a"],null,Object(a["C"])(o.categories,e=>(Object(a["w"])(),Object(a["h"])("div",{key:e.id,class:"category",style:Object(a["s"])({background:e.color}),onClick:t=>o.assignCategory(e)},Object(a["G"])(e.name),13,kt))),128))]),_:1},512)}var yt={components:{Modal:K},props:{name:{type:String,required:!0}},setup(e){const t=Object(m["d"])(),s=Object(a["B"])(null),o=()=>{s.value.open()},c=()=>{s.value.close()},n=a=>{t.commit("assignCategory",{name:e.name,category:a}),s.value.close()};return{modal:s,open:o,close:c,assignCategory:n,categories:Object(a["d"])(()=>t.state.categories)}}};s("3a48");const Ct=i()(yt,[["render",ht],["__scopeId","data-v-5d8208bb"]]);var wt=Ct,Tt={components:{Time:Ie,CategoryModal:wt},props:{task:Object},data(){return{timePassed:0,openDropdown:!1}},methods:{startTask(){this.$store.commit("startTask",this.task.name)},stopTask(){this.$store.commit("stopTask",this.task.name)},removeCategory(){this.$store.commit("assignCategory",{name:this.task.name,category:void 0})},removeTask(){this.$store.commit("removeTask",this.task.name)}},computed:{time(){return this.task.startedAt?this.task.totalTime+this.timePassed:this.task.totalTime}},beforeMount(){setInterval(()=>{this.timePassed=Date.now()-this.task.startedAt},1e3)}};s("6b89");const At=i()(Tt,[["render",pt],["__scopeId","data-v-3dcc1ea4"]]);var Mt=At,Ft={components:{Task:Mt},props:{selectedCategory:String},data(){return{newTask:""}},methods:{addTask(){this.$store.commit("addTask",this.newTask),this.newTask=""}},computed:{...Object(m["c"])(["tasks"]),filteredTasks(){return this.selectedCategory?this.tasks.filter(e=>e.category&&e.category.id===this.selectedCategory.id):this.tasks}}};s("ff37");const _t=i()(Ft,[["render",Ye],["__scopeId","data-v-5cb20b47"]]);var Et=_t,St={name:"Home",components:{TheCategoryBar:be,GlobalTaskControls:We,TheTaskList:Et},data(){return{selectedCategory:void 0}},computed:{...Object(m["c"])(["midnightReset","lastReset"])},beforeMount(){const e=new Date;e.setHours(0,0,0,0);const t=new Date(this.lastReset);this.midnightReset&&t<e&&this.resetTasks()},methods:{...Object(m["b"])(["resetTasks"]),select(e){this.selectedCategory=e}}};const xt=i()(St,[["render",j]]);var It=xt;const $t=[{path:"/",name:"Home",component:It}],Dt=Object(g["a"])({history:Object(g["b"])(),routes:$t});var Rt=Dt,Bt=s("bfa9");const Nt=new Bt["a"]({storage:window.localStorage});var Lt=Object(m["a"])({state:{categories:[],tasks:[],midnightReset:!1,lastReset:new Date,darkTheme:!0},mutations:{addCategory(e,t){t&&!e.categories.includes(t)&&(e.categories=[...e.categories,t])},removeCategory(e,t){e.categories=e.categories.filter(e=>e.id!==t),e.tasks=e.tasks.map(e=>{const s=e;return s.category&&s.category.id===t&&(s.category=void 0),s})},assignCategory(e,{name:t,category:s}){e.tasks=e.tasks.map(e=>{const a=e;return a.name===t&&(a.category=s),a})},updateCategory(e,t){e.categories=e.categories.map(e=>e.id===t.id?t:e)},addTask(e,t){if(t){const s={name:t,startedAt:void 0,running:!1,totalTime:0,category:void 0};e.tasks=[...e.tasks,s]}},removeTask(e,t){e.tasks=e.tasks.filter(e=>e.name!==t)},removeAllTasks(e){e.tasks=[]},startTask(e,t){e.tasks=e.tasks.map(e=>{const s=e;return s.name===t?(s.running=!0,s.startedAt=Date.now()):s.running&&(s.running=!1,s.totalTime+=Date.now()-s.startedAt,s.startedAt=void 0),s})},stopTask(e,t){e.tasks=e.tasks.map(e=>{const s=e;return s.name===t&&(s.running=!1,s.totalTime+=Date.now()-s.startedAt,s.startedAt=void 0),s})},resetTasks(e){e.tasks=e.tasks.map(e=>{const t=e;return t.running=!1,t.totalTime=0,t.startedAt=void 0,t}),e.lastReset=new Date},setMidnightReset(e,t){e.midnightReset=!!t}},plugins:[Nt.plugin]});const Ht=Object(a["e"])(u);Ht.use(Lt),Ht.use(Rt),Ht.mount("#app")},5830:function(e,t,s){e.exports=s.p+"img/play.53d47113.svg"},"5cc9":function(e,t,s){e.exports=s.p+"img/gear.944f434b.svg"},"6b89":function(e,t,s){"use strict";s("28f8")},"6f6f":function(e,t,s){},8509:function(e,t,s){"use strict";s("e309")},"89fe":function(e,t,s){e.exports=s.p+"img/cross.df13156b.svg"},"8ae9":function(e,t,s){},"914f":function(e,t,s){"use strict";s("0f2f")},"9c24":function(e,t,s){},a140:function(e,t,s){"use strict";s("1434")},a671:function(e,t,s){"use strict";s("6f6f")},ae14:function(e,t,s){"use strict";s("1191")},aff0:function(e,t,s){"use strict";s("c246")},c246:function(e,t,s){},c637:function(e,t,s){e.exports=s.p+"img/trash.c93e9df1.svg"},c870:function(e,t,s){e.exports=s.p+"img/reset.2a2e9e9d.svg"},d091:function(e,t,s){"use strict";s("f193")},d328:function(e,t,s){},d3d9:function(e,t,s){},e309:function(e,t,s){},eaac:function(e,t,s){"use strict";s("8ae9")},ec7e:function(e,t,s){e.exports=s.p+"img/pause.70a06771.svg"},f193:function(e,t,s){},ff37:function(e,t,s){"use strict";s("d328")}});
//# sourceMappingURL=app.d67a7dd4.js.map