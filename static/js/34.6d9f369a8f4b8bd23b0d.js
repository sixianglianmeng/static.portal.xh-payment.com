webpackJsonp([34],{"0xDb":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(0===arguments.length)return null;var i=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var i=s[t];return"a"===t?["一","二","三","四","五","六","日"][i-1]:(e.length>0&&i<10&&(i="0"+i),i||0)})}function a(e,t){e=1e3*+e;var i=new Date(e),n=Date.now(),a=(n-i)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?s(e,t):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"}function o(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),i={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var s=decodeURIComponent(t),a=decodeURIComponent(n);return a=String(a),i[s]=a,e}),i}function r(e){for(var t=0,i=0;i<e.length;i++)null!=e[i].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t}function c(e){return e?l((0,_.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,_.default)(t).forEach(function(i){var n=t[i];"object"===(void 0===n?"undefined":(0,k.default)(n))?e[i]=p(e[i],n):e[i]=n}),e)}function m(e,t,i){if(!(i<=0)){var n=t-e.scrollTop,s=n/i*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+s,e.scrollTop!==t&&m(e,t,i-10)},10)}}function f(e,t){if(e&&t){var i=e.className,n=i.indexOf(t);-1===n?i+=""+t:i=i.substr(0,n)+i.substr(n+t.length),e.className=i}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,i){var n=void 0,s=void 0,a=void 0,o=void 0,r=void 0,l=function l(){var c=+new Date-o;c<t&&c>0?n=setTimeout(l,t-c):(n=null,i||(r=e.apply(a,s),n||(a=s=null)))};return function(){for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];a=this,o=+new Date;var d=i&&!n;return n||(n=setTimeout(l,t)),d&&(r=e.apply(a,c),a=c=null),r}}function b(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,_.default)(e).forEach(function(i){e[i]&&"object"===(0,k.default)(e[i])?(t[i]=e[i].constructor===Array?[]:{},t[i]=b(e[i])):t[i]=e[i]}),t}function h(e){return i("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var w=i("fZjL"),_=n(w),y=i("pFYg"),k=n(y);t.parseTime=s,t.formatTime=a,t.getQueryObject=o,t.getByteLen=r,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=g,t.debounce=v,t.deepClone=b,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,i=new Date((new Date).toDateString());t.setTime(i.getTime()),e.$emit("pick",[i,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(t.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"90oU":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","font-size":"12px"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"",stripe:""}},[i("el-table-column",{attrs:{align:"center",prop:"id",label:"编号"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"nickname",label:"昵称"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"is_key_2fa",label:"安全令牌"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"is_financial",label:"资金密码"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"last_login_ip",label:"上次登陆IP"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"last_login_time",label:"上次登陆时间"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"status_name",label:"状态"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间"}}),e._v(" "),i("el-table-column",{staticClass:"action-btns",attrs:{align:"center",label:"操作","class-name":"op-column",width:"220px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handlePermission(t.row)}}},[e._v("授权")]),e._v(" "),i("el-dropdown",{attrs:{size:"mini"}},[i("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("更多操作"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown",size:"mini"},slot:"dropdown"},[i("el-dropdown-item",[t.row.key_2fa?i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleclear(t.row,1)}}},[e._v("\n                                清空安全令牌\n                            ")]):e._e()],1),e._v(" "),i("el-dropdown-item",[t.row.financial_password_hash?i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleclear(t.row,2)}}},[e._v("\n                                清空资金密码\n                            ")]):e._e()],1),e._v(" "),i("el-dropdown-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleclear(t.row,3)}}},[e._v("\n                                重置登录密码\n                            ")])],1),e._v(" "),i("el-dropdown-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleStatus(t.row)}}},[e._v("\n                                状态\n                            ")])],1),e._v(" "),i("el-dropdown-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleclear(t.row,4)}}},[e._v("\n                                清空登陆IP\n                            ")])],1),e._v(" "),i("el-dropdown-item",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary"},on:{click:function(i){e.handleBindLoginIp(t.row,4)}}},[e._v("\n                                编辑登陆IP\n                            ")])],1)],1)],1)]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:"修改状态",visible:e.statusVisible,width:"40%","append-to-body":""},on:{"update:visible":function(t){e.statusVisible=t}}},[[i("el-form",{attrs:{model:e.statusForm}},[i("el-form-item",{attrs:{label:"状态：","label-width":"120px"}},e._l(e.statusOptions,function(t,n){return i("el-radio",{key:n,attrs:{size:"small",label:n},model:{value:e.statusForm.status,callback:function(t){e.$set(e.statusForm,"status",t)},expression:"statusForm.status"}},[e._v(e._s(t))])}))],1)],e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.statusVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.updateStatus}},[e._v("确 定")])],1)],2),e._v(" "),i("el-dialog",{attrs:{title:"子账户授权-"+e.currentAccount.username,visible:e.permissionVisible,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.permissionVisible=t}}},[[i("el-checkbox-group",{staticClass:"permission-list",attrs:{size:"small"},model:{value:e.userRole,callback:function(t){e.userRole=t},expression:"userRole"}},e._l(e.allRoles,function(t,n){return i("el-checkbox",{key:n,attrs:{border:"",label:t.name}},[e._v(e._s(t.description))])}))],e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.permissionVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.updatePermission}},[e._v("确 定")])],1)],2),e._v(" "),i("el-dialog",{attrs:{title:"添加/编辑子账户登录IP",visible:e.loginIpFormVisible,width:"40%","append-to-body":""},on:{"update:visible":function(t){e.loginIpFormVisible=t}}},[[i("el-form",[i("p",{staticStyle:{color:"red","padding-left":"180px"}},[e._v("提示：IP有多个 以英文符号分号(;) 分隔")]),e._v(" "),i("el-form-item",{attrs:{label:"登录IP地址：","label-width":"180px"}},[i("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",type:"textarea",rows:3},model:{value:e.bind_login_ip,callback:function(t){e.bind_login_ip=t},expression:"bind_login_ip"}})],1)],1)],e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.loginIpFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleclear(e.loginRow,e.loginType)}}},[e._v("确 定")])],1)],2)],1)},s=[],a={render:n,staticRenderFns:s};t.a=a},N309:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i("cAgV"),a=n(s),o=(i("0xDb"),i("3pLw")),r=n(o);t.default={name:"vue_child_list",directives:{waves:a.default},props:{merchantId:{type:Number,default:1}},watch:{merchantId:function(e,t){null!=e&&this.getList()}},data:function(){return{list:null,listLoading:!1,listQuery:{merchant_id:null},dialogVisible:!1,statusVisible:!1,statusOptions:null,tableKey:0,statusForm:{id:null,status:null},currentAccount:{username:""},permissionVisible:!1,userRole:[],allRoles:[],loginIpFormVisible:!1,bind_login_ip:null,loginRow:null,loginType:null}},created:function(){this.getList()},methods:{updatePermission:function(){var e=this;e.listLoading=!0;var t={uid:e.currentAccount.id,roles:e.userRole,master_merchant_id:e.merchantId};r.default.post("/account/update-user-permission",t).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:t.message}),e.permissionVisible=!1)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},getPermissionList:function(e){var t=this;t.currentAccount=e,t.listLoading=!0;var i={uid:e.id,master_merchant_id:t.merchantId};r.default.post("/account/user-permission-list",i).then(function(e){t.listLoading=!1,0!=e.code?t.$message.error({message:e.message}):(t.permissionVisible=!0,t.role=e.data.role,t.userRole=e.data.userRoles,t.allRoles=e.data.allRoles)},function(e){t.listLoading=!1,t.$message.error({message:e.message})})},getList:function(){var e=this;e.listLoading=!0,1!=e.merchantId&&(e.listQuery.merchant_id=e.merchantId),r.default.post("/user/child-list",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.list,e.statusOptions=t.data.statusOptions,e.$emit("initMerchantIdEvent"))})},handleStatus:function(e){this.statusForm.id=e.id,this.statusForm.status=e.status,this.statusVisible=!0},handlePermission:function(e){this.getPermissionList(e)},updateStatus:function(){var e=this,t={childId:e.statusForm.id,status:e.statusForm.status,master_merchant_id:e.merchantId};r.default.post("/user/edit-child-status",t).then(function(t){0==t.code?(e.$message.success({message:"操作成功"}),e.getList(),e.statusVisible=!1):e.$message.error({message:t.message})})},handleBindLoginIp:function(e,t){this.loginIpFormVisible=!0,this.loginRow=e,this.loginType=t,this.bind_login_ip=""==e.bind_login_ip||null==e.bind_login_ip?"":JSON.parse(e.bind_login_ip).join(";")},handleclear:function(e,t){var i=this;i.loginIpFormVisible=!1;var n=[];if(4==t&&null!=i.bind_login_ip&&i.bind_login_ip.length>0){n=i.bind_login_ip.split(";");for(var s=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,a=0;a<n.length;a++)if(!s.test(n[a]))return i.$message.error({message:n[a]+" IP地址格式不正确，请检查"}),!1}var o={childId:e.id,type:t,ip:n.length>0?n:"",master_merchant_id:i.merchantId};i.bind_login_ip=null,r.default.post("/user/clear-child-pass-key",o).then(function(e){if(0==e.code){var n="操作成功";3==t&&(n="操作成功，默认密码："+e.data),i.$message.success({message:n}),i.getList(),i.statusVisible=!1}else i.$message.error({message:e.message})})}}}},PB1J:function(e,t,i){"use strict";function n(e){i("pD3N")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("N309"),a=i.n(s),o=i("90oU"),r=i("VU/8"),l=n,c=r(a.a,o.a,!1,l,"data-v-659ff997",null);t.default=c.exports},XZlg:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("jdeu"),s=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){e.directive("waves",s.default)};window.Vue&&(window.waves=s.default,Vue.use(a)),s.default.install=a,t.default=s.default},cIYM:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".action-btns a[data-v-659ff997]{margin-left:5px}.op-column .el-button[data-v-659ff997],.permission-list .el-checkbox[data-v-659ff997]{margin:5px}.op-column .cell[data-v-659ff997]{padding-left:0;text-align:left}.el-dropdown-menu--mini .el-dropdown-menu__item[data-v-659ff997]{line-height:36px!important;font-size:14px!important}",""])},ctMr:function(e,t,i){var n=i("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("81d72750",n,!0)},jdeu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("woOf"),s=function(e){return e&&e.__esModule?e:{default:e}}(n);i("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(i){var n=(0,s.default)({},t.value),a=(0,s.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=a.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),a.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=i.pageY-r.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=i.pageX-r.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}},!1)}}},pD3N:function(e,t,i){var n=i("cIYM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("21865975",n,!0)}});