webpackJsonp([47],{"0xDb":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",s=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?s=e:(10===(""+e).length&&(e=1e3*parseInt(e)),s=new Date(e));var i={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=i[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function n(e,t){e=1e3*+e;var a=new Date(e),s=Date.now(),n=(s-a)/1e3;return n<30?"刚刚":n<3600?Math.ceil(n/60)+"分钟前":n<86400?Math.ceil(n/3600)+"小时前":n<172800?"1天前":t?i(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function r(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},s=/([^?&=]+)=([^?&=]*)/g;return t.replace(s,function(e,t,s){var i=decodeURIComponent(t),n=decodeURIComponent(s);return n=String(n),a[i]=n,e}),a}function o(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?l((0,_.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function m(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,_.default)(t).forEach(function(a){var s=t[a];"object"===(void 0===s?"undefined":(0,k.default)(s))?e[a]=m(e[a],s):e[a]=s}),e)}function p(e,t,a){if(!(a<=0)){var s=t-e.scrollTop,i=s/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&p(e,t,a-10)},10)}}function f(e,t){if(e&&t){var a=e.className,s=a.indexOf(t);-1===s?a+=""+t:a=a.substr(0,s)+a.substr(s+t.length),e.className=a}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,a){var s=void 0,i=void 0,n=void 0,r=void 0,o=void 0,l=function l(){var c=+new Date-r;c<t&&c>0?s=setTimeout(l,t-c):(s=null,a||(o=e.apply(n,i),s||(n=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];n=this,r=+new Date;var d=a&&!s;return s||(s=setTimeout(l,t)),d&&(o=e.apply(n,c),n=c=null),o}}function b(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,_.default)(e).forEach(function(a){e[a]&&"object"===(0,k.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=b(e[a])):t[a]=e[a]}),t}function h(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var w=a("fZjL"),_=s(w),y=a("pFYg"),k=s(y);t.parseTime=i,t.formatTime=n,t.getQueryObject=r,t.getByteLen=o,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=m,t.scrollTo=p,t.toggleClass=f,t.getTime=v,t.debounce=g,t.deepClone=b,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"7gr5":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("cAgV"),n=s(i),r=(a("0xDb"),a("X2Oc")),o=(s(r),a("3pLw")),l=s(o);t.default={name:"vue_account_index",directives:{waves:n.default},data:function(){return{list:null,listLoading:!1,dialogVisible:!1,statusVisible:!1,statusOptions:null,tableKey:0,addForm:{username:null,nickname:null,email:null,status:"0"},statusForm:{id:null,status:null},currentAccount:{username:""},permissionVisible:!1,userRole:[],allRoles:[]}},created:function(){this.getList()},methods:{updatePermission:function(){var e=this;e.listLoading=!0,l.default.post("/account/update-user-permission",{uid:e.currentAccount.id,roles:e.userRole}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:t.message}),e.permissionVisible=!1)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},getPermissionList:function(e){var t=this;t.currentAccount=e,t.listLoading=!0,l.default.post("/account/user-permission-list",{uid:e.id}).then(function(e){t.listLoading=!1,0!=e.code?t.$message.error({message:e.message}):(t.permissionVisible=!0,t.role=e.data.role,t.userRole=e.data.userRoles,t.allRoles=e.data.allRoles)},function(e){t.listLoading=!1,t.$message.error({message:e.message})})},getList:function(){var e=this;e.listLoading=!0,l.default.post("/user/child-list",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.list,e.statusOptions=t.data.statusOptions)})},addHandle:function(){var e=this;if(!/^[a-zA-Z0-9_-]{6,16}$/.test(e.addForm.username))return void e.$message.error({message:"用户名格式不正确"});var t=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;if(null!=e.addForm.email&&!t.test(e.addForm.email))return e.$message.error({message:"邮箱格式错误"}),!1;var a={username:e.addForm.username,nickname:e.addForm.nickname,email:e.addForm.email};l.default.post("/user/add-child",a).then(function(t){0==t.code?(e.$message.success({message:"添加成功,子账号默认密码："+t.data}),e.addForm.username=null,e.addForm.nickname=null,e.addForm.email=null,e.getList(),e.dialogVisible=!1):e.$message.error({message:t.message})})},handleStatus:function(e){this.statusForm.id=e.id,this.statusForm.status=e.status,this.statusVisible=!0},handlePermission:function(e){this.getPermissionList(e)},updateStatus:function(){var e=this,t={childId:e.statusForm.id,status:e.statusForm.status};l.default.post("/user/edit-child-status",t).then(function(t){0==t.code?(e.$message.success({message:"操作成功"}),e.getList(),e.statusVisible=!1):e.$message.error({message:t.message})})},handleclear:function(e,t){var a=this,s={childId:e.id,type:t};l.default.post("/user/clear-child-pass-key",s).then(function(e){if(0==e.code){var s="操作成功";3==t&&(s="操作成功，默认密码："+e.data),a.$message.success({message:s}),a.getList(),a.statusVisible=!1}else a.$message.error({message:e.message})})}}}},XZlg:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(s),n=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(n)),i.default.install=n,t.default=i.default},cXiF:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".el-dialog__body[data-v-44ab4f31],.el-dialog__header[data-v-44ab4f31]{padding-top:10px!important}.permission_group_title[data-v-44ab4f31]{display:block;color:#3a8ee6;font-size:16px}.el-button--mini.is-round[data-v-44ab4f31],.el-button--mini[data-v-44ab4f31]{margin-top:5px}.permission-list .el-checkbox[data-v-44ab4f31]{margin:5px}",""])},ctMr:function(e,t,a){var s=a("XZlg");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("81d72750",s,!0)},jdeu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(s);a("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(a){var s=(0,i.default)({},t.value),n=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),r=n.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",r.appendChild(l)),n.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=a.pageY-o.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=a.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=n.color,l.className="waves-ripple z-active",!1}},!1)}}},nET1:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",plain:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加子账号")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","font-size":"12px"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"",stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nickname",label:"昵称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"is_key_2fa",label:"是否设置安全令牌"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"is_financial",label:"是否设置资金密码"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"last_login_ip",label:"上次登陆IP"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"last_login_time",label:"上次登陆时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"status_name",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间"}}),e._v(" "),a("el-table-column",{staticClass:"action-btns",attrs:{align:"center",label:"操作",width:"180px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.key_2fa?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handleclear(t.row,1)}}},[e._v("清空安全令牌")]):e._e(),e._v(" "),t.row.financial_password_hash?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handleclear(t.row,2)}}},[e._v("清空资金密码")]):e._e(),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handleclear(t.row,3)}}},[e._v("重置登录密码")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handlePermission(t.row)}}},[e._v("授权")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handleStatus(t.row)}}},[e._v("状态")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加子账号",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[[a("el-form",{attrs:{model:e.addForm}},[a("dd",{staticStyle:{color:"red"}},[e._v("提示：用户名 6到16位（字母，数字，下划线，减号）")]),e._v(" "),a("el-form-item",{attrs:{label:"用户名：","label-width":"120px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称：","label-width":"120px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.addForm.nickname,callback:function(t){e.$set(e.addForm,"nickname",t)},expression:"addForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱：","label-width":"120px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",type:"email"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态：","label-width":"120px"}},e._l(e.statusOptions,function(t,s){return a("el-radio",{key:s,attrs:{size:"small",label:s},model:{value:e.addForm.status,callback:function(t){e.$set(e.addForm,"status",t)},expression:"addForm.status"}},[e._v(e._s(t))])}))],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addHandle}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"修改状态",visible:e.statusVisible,width:"40%"},on:{"update:visible":function(t){e.statusVisible=t}}},[[a("el-form",{attrs:{model:e.statusForm}},[a("el-form-item",{attrs:{label:"状态：","label-width":"120px"}},e._l(e.statusOptions,function(t,s){return a("el-radio",{key:s,attrs:{size:"small",label:s},model:{value:e.statusForm.status,callback:function(t){e.$set(e.statusForm,"status",t)},expression:"statusForm.status"}},[e._v(e._s(t))])}))],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.statusVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateStatus}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"子账户授权-"+e.currentAccount.username,visible:e.permissionVisible,width:"60%"},on:{"update:visible":function(t){e.permissionVisible=t}}},[[a("el-checkbox-group",{staticClass:"permission-list",attrs:{size:"small"},model:{value:e.userRole,callback:function(t){e.userRole=t},expression:"userRole"}},e._l(e.allRoles,function(t,s){return a("el-checkbox",{key:s,attrs:{border:"",label:t.name}},[e._v(e._s(t.description))])}))],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.permissionVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updatePermission}},[e._v("确 定")])],1)],2)],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},"t3m/":function(e,t,a){"use strict";function s(e){a("w3Vm")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("7gr5"),n=a.n(i),r=a("nET1"),o=a("VU/8"),l=s,c=o(n.a,r.a,!1,l,"data-v-44ab4f31",null);t.default=c.exports},w3Vm:function(e,t,a){var s=a("cXiF");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("4da5c5f2",s,!0)}});