webpackJsonp([17],{"0xDb":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",r=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?r=e:(10===(""+e).length&&(e=1e3*parseInt(e)),r=new Date(e));var o={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=o[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function a(e,t){e=1e3*+e;var n=new Date(e),r=Date.now(),a=(r-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?o(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function s(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},r=/([^?&=]+)=([^?&=]*)/g;return t.replace(r,function(e,t,r){var o=decodeURIComponent(t),a=decodeURIComponent(r);return a=String(a),n[o]=a,e}),n}function i(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function c(e){return e?l((0,y.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function m(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function d(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,y.default)(t).forEach(function(n){var r=t[n];"object"===(void 0===r?"undefined":(0,k.default)(r))?e[n]=d(e[n],r):e[n]=r}),e)}function f(e,t,n){if(!(n<=0)){var r=t-e.scrollTop,o=r/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+o,e.scrollTop!==t&&f(e,t,n-10)},10)}}function p(e,t){if(e&&t){var n=e.className,r=n.indexOf(t);-1===r?n+=""+t:n=n.substr(0,r)+n.substr(r+t.length),e.className=n}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,n){var r=void 0,o=void 0,a=void 0,s=void 0,i=void 0,l=function l(){var c=+new Date-s;c<t&&c>0?r=setTimeout(l,t-c):(r=null,n||(i=e.apply(a,o),r||(a=o=null)))};return function(){for(var o=arguments.length,c=Array(o),u=0;u<o;u++)c[u]=arguments[u];a=this,s=+new Date;var m=n&&!r;return r||(r=setTimeout(l,t)),m&&(i=e.apply(a,c),a=c=null),i}}function b(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,y.default)(e).forEach(function(n){e[n]&&"object"===(0,k.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=b(e[n])):t[n]=e[n]}),t}function h(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var w=n("fZjL"),y=r(w),_=n("pFYg"),k=r(_);t.parseTime=o,t.formatTime=a,t.getQueryObject=s,t.getByteLen=i,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=m,t.objectMerge=d,t.scrollTo=f,t.toggleClass=p,t.getTime=g,t.debounce=v,t.deepClone=b,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"4YBg":function(e,t,n){var r=n("k8j/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("7a6d7866",r,!0)},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},CpRM:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("cAgV"),a=r(o),s=(n("0xDb"),n("X2Oc")),i=(r(s),n("3pLw")),l=r(i);n("vMJZ");t.default={name:"vue_transfer",directives:{waves:a.default},data:function(){return{commonForm:{transferIn:null,transferInUid:null,amount:null,financial_password_hash:null,key_2fa:null,bak:null},formVisible:!0,confirmVisible:!1,bankOptions:{},financial_password_hash:null,key_2fa:null,isLoading:!1,submitBtnDisableStatus:!1,rules:{transferIn:[{required:!0,message:"请输入转入账户名",trigger:"blur"},{min:6,max:21,message:"用户名不合法",trigger:"blur"}],transferInUid:[{required:!0,message:"请输入转入商户号",trigger:"blur"},{min:5,max:21,message:"商户号不合法",trigger:"blur"}],amount:[{required:!0,message:"请输入金额",trigger:"change"}],financial_password_hash:[{required:!0,message:"请输入资金密码",trigger:"change"}],key_2fa:[{required:!0,message:"请输入令牌",trigger:"change"}]}}},created:function(){},methods:{onSubmit:function(){var e=this;self=this,self.submitBtnDisableStatus=!0,this.$refs.commonForm.validate(function(t){if(!t)return self.$message.error("信息填写错误！"),self.submitBtnDisableStatus=!1,!1;var n=self.commonForm;self.$confirm("确认转账"+n.amount+"元给"+n.transferIn+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){self.isLoading=!0,l.default.post("/user/transfer",n).then(function(t){self.isLoading=!1,self.commonForm.key_2fa="",0==t.code?(self.$message.success(t.message),e.$router.push({name:"vue_financial_my_list"})):(self.$message.error("失败:"+t.message),self.submitBtnDisableStatus=!1)}),self.submitBtnDisableStatus=!1})})}}}},Uq92:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.formVisible,expression:"formVisible"}]},[n("h4",{staticStyle:{color:"red"},attrs:{align:"center"}},[e._v("请仔细核对转入账户名,防止出现意外")]),e._v(" "),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"commonForm",staticClass:"el-form",attrs:{rules:e.rules,model:e.commonForm,"label-width":"180px"}},[n("h4",{staticClass:"title"}),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:22,offset:1}},[n("div",{staticClass:"grid-content bg-purple"},[n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"转入账户名",prop:"transferIn"}},[n("el-input",{model:{value:e.commonForm.transferIn,callback:function(t){e.$set(e.commonForm,"transferIn",t)},expression:"commonForm.transferIn"}})],1),e._v(" "),n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"转入商户号",prop:"transferInUid"}},[n("el-input",{model:{value:e.commonForm.transferInUid,callback:function(t){e.$set(e.commonForm,"transferInUid",t)},expression:"commonForm.transferInUid"}})],1),e._v(" "),n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"金额",prop:"amount"}},[n("el-input",{model:{value:e.commonForm.amount,callback:function(t){e.$set(e.commonForm,"amount",t)},expression:"commonForm.amount"}})],1),e._v(" "),n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"资金密码",prop:"financial_password_hash"}},[n("el-input",{attrs:{type:"password"},model:{value:e.commonForm.financial_password_hash,callback:function(t){e.$set(e.commonForm,"financial_password_hash",t)},expression:"commonForm.financial_password_hash"}})],1),e._v(" "),n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"安全令牌",prop:"key_2fa"}},[n("el-input",{model:{value:e.commonForm.key_2fa,callback:function(t){e.$set(e.commonForm,"key_2fa",t)},expression:"commonForm.key_2fa"}})],1),e._v(" "),n("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"备注",prop:"bak"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.commonForm.bak,callback:function(t){e.$set(e.commonForm,"bak",t)},expression:"commonForm.bak"}})],1)],1)])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:22,offset:1}},[n("div",{staticClass:"grid-content"},[n("el-form-item",[n("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",disabled:e.submitBtnDisableStatus},on:{click:e.onSubmit}},[e._v("\n                确认转账\n              ")])],1)],1)])],1)],1)],1)])},o=[],a={render:r,staticRenderFns:o};t.a=a},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("jdeu"),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(e){e.directive("waves",o.default)};window.Vue&&(window.waves=o.default,Vue.use(a)),o.default.install=a,t.default=o.default},ctMr:function(e,t,n){var r=n("XZlg");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("81d72750",r,!0)},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("woOf"),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var r=(0,o.default)({},t.value),a=(0,o.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var i=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(i.width,i.height)+"px",s.appendChild(l)),a.type){case"center":l.style.top=i.height/2-l.offsetHeight/2+"px",l.style.left=i.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-i.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-i.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}},!1)}}},"k8j/":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".el-form-item[data-v-00115707]{width:40%;margin-left:30%;margin-bottom:20px!important}",""])},vMJZ:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return new s.default(function(t,n){l.default.post("/user/check-can-remit",e).then(function(e){0==e.code?t(e):n(e.message)},function(e){n(e)}).catch(function(e){n(e)})})}Object.defineProperty(t,"__esModule",{value:!0});var a=n("//Fk"),s=r(a);t.checkCanRemit=o;var i=n("3pLw"),l=r(i),c=n("X2Oc");r(c)},x55o:function(e,t,n){"use strict";function r(e){n("4YBg")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("CpRM"),a=n.n(o),s=n("Uq92"),i=n("VU/8"),l=r,c=i(a.a,s.a,!1,l,"data-v-00115707",null);t.default=c.exports}});