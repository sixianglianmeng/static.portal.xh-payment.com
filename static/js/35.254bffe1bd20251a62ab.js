webpackJsonp([35],{"0xDb":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===e?"undefined":(0,x.default)(e))?i=e:(10===(""+e).length&&(e=1e3*parseInt(e)),i=new Date(e));var s={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=s[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function r(e,t){e=1e3*+e;var n=new Date(e),i=Date.now(),r=(i-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?s(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function o(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},i=/([^?&=]+)=([^?&=]*)/g;return t.replace(i,function(e,t,i){var s=decodeURIComponent(t),r=decodeURIComponent(i);return r=String(r),n[s]=r,e}),n}function a(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,x.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(n){var i=t[n];"object"===(void 0===i?"undefined":(0,x.default)(i))?e[n]=p(e[n],i):e[n]=i}),e)}function m(e,t,n){if(!(n<=0)){var i=t-e.scrollTop,s=i/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+s,e.scrollTop!==t&&m(e,t,n-10)},10)}}function f(e,t){if(e&&t){var n=e.className,i=n.indexOf(t);-1===i?n+=""+t:n=n.substr(0,i)+n.substr(i+t.length),e.className=n}}function h(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,n){var i=void 0,s=void 0,r=void 0,o=void 0,a=void 0,l=function l(){var c=+new Date-o;c<t&&c>0?i=setTimeout(l,t-c):(i=null,n||(a=e.apply(r,s),i||(r=s=null)))};return function(){for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];r=this,o=+new Date;var d=n&&!i;return i||(i=setTimeout(l,t)),d&&(a=e.apply(r,c),r=c=null),a}}function v(e){if(!e&&"object"!==(void 0===e?"undefined":(0,x.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(n){e[n]&&"object"===(0,x.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=v(e[n])):t[n]=e[n]}),t}function b(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var y=n("fZjL"),w=i(y),k=n("pFYg"),x=i(k);t.parseTime=s,t.formatTime=r,t.getQueryObject=o,t.getByteLen=a,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=h,t.debounce=g,t.deepClone=v,t.getVersion=b;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"5T2p":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-input",{staticClass:"filter-item",attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索角色")])],1)],1)],1),e._v(" "),n("h3",[n("el-checkbox",{staticStyle:{width:"80px !important"},attrs:{label:"全选",indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:e.selectReverse}},[e._v("反选")]),e._v(" "),n("el-button",{attrs:{type:"success",size:"small",plain:""},on:{click:e.updatePermission}},[e._v("确认提交")])],1),e._v(" "),n("el-checkbox-group",{model:{value:e.rolePermissions,callback:function(t){e.rolePermissions=t},expression:"rolePermissions"}},e._l(e.allPermissions,function(t,i){return n("div",{staticClass:"permission-container"},[n("h4",{staticClass:"permission_group_title"},[e._v(e._s(t.name)+"-"+e._s(t.description))]),e._v(" "),e._l(t.children,function(t){return n("el-checkbox",{key:t.name,attrs:{label:t.name},on:{change:e.handleCheckedPermissionChange}},[e._v(e._s(t.description))])})],2)}))],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.1.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.7.13",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.2.9","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{commander:"^2.15.1",autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.0.8","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},HEyb:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".action-btns a{margin-left:5px}.el-tag,.pagination-container{margin-top:10px}.el-tag{margin-left:10px}.el-table td,.el-table th{padding:5px 0!important}.filter-container .filter-item{margin-bottom:5px;width:120px}.small-padding-btn{padding:12px 5px!important}.el-button+.el-button{margin-left:5px}.el-checkbox{line-height:30px;width:14%}.permission_group_title{display:block;color:#3a8ee6;font-size:16px}",""])},HJ3G:function(e,t,n){"use strict";function i(e){n("TkZF")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("lX9B"),r=n.n(s),o=n("5T2p"),a=n("VU/8"),l=i,c=a(r.a,o.a,!1,l,null,null);t.default=c.exports},TkZF:function(e,t,n){var i=n("HEyb");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("577e0388",i,!0)},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("jdeu"),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(e){e.directive("waves",s.default)};window.Vue&&(window.waves=s.default,Vue.use(r)),s.default.install=r,t.default=s.default},ctMr:function(e,t,n){var i=n("XZlg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("81d72750",i,!0)},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("woOf"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var i=(0,s.default)({},t.value),r=(0,s.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=r.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var a=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(a.width,a.height)+"px",o.appendChild(l)),r.type){case"center":l.style.top=a.height/2-l.offsetHeight/2+"px",l.style.left=a.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-a.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-a.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}},!1)}}},lX9B:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),r=i(s),o=n("cAgV"),a=i(o),l=(n("0xDb"),n("X2Oc")),c=(i(l),n("3pLw")),u=i(c),d=n("NYxO");t.default={name:"vue_auth_assign",directives:{waves:a.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:10,importance:void 0,description:"",name:"",sort:""},currentRoleDesc:"",role:{},rolePermissions:[],allPermissions:[],multipleSelection:[],tableKey:0,constFalse:!1,constTrue:!0,checkAll:!1,isIndeterminate:!1}},filters:{},created:function(){console.log(this.$route.params.role),this.listQuery.name=this.$route.params.role,this.getList()},computed:(0,r.default)({},(0,d.mapGetters)(["roles","uid","user"])),methods:{handleSelectionChange:function(e){this.multipleSelection=e},handleCheckAllChange:function(e){this.rolePermissions=[];for(var t=0;t<this.allPermissions.length;t++){if(console.log(this.allPermissions[t].name),void 0!==this.allPermissions[t].children)for(var n=0;n<this.allPermissions[t].children.length;n++)this.rolePermissions.push(this.allPermissions[t].children[n].name);this.rolePermissions.push(this.allPermissions[t].name)}this.isIndeterminate=!1},selectReverse:function(){for(var e=[],t=0;t<this.allPermissions.length;t++){if(_.indexOf(this.rolePermissions,this.allPermissions[t].name)<0&&e.push(this.allPermissions[t].name),void 0!==this.allPermissions[t].children)for(var n=0;n<this.allPermissions[t].children.length;n++){var i=_.indexOf(this.rolePermissions,this.allPermissions[t].children[n].name);i<0&&e.push(this.allPermissions[t].children[n].name)}}this.rolePermissions=e},handleCheckedPermissionChange:function(){var e=this.rolePermissions.length;this.checkAll=e===this.allPermissions.length,this.isIndeterminate=e>0&&e<this.allPermissions.length},getList:function(){var e=this;e.listLoading=!0,e.listQuery.name&&u.default.post("/admin/role/permissions",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.role=t.data.role,e.rolePermissions=t.data.rolePermissions,e.allPermissions=t.data.allPermissions)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},updatePermission:function(){var e=this;e.listLoading=!0,e.listQuery.name&&u.default.post("/admin/role/update-permissions",{name:e.listQuery.name,permissions:e.rolePermissions}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.$message.success({message:t.message})},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},goAssign:function(e){this.$router.push({name:"vue_auth_assign",params:{role:e.name}})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)}}}}});