webpackJsonp([42],{"0xDb":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(0===arguments.length)return null;var i=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,x.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var i=s[t];return"a"===t?["一","二","三","四","五","六","日"][i-1]:(e.length>0&&i<10&&(i="0"+i),i||0)})}function r(e,t){e=1e3*+e;var i=new Date(e),n=Date.now(),r=(n-i)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?s(e,t):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"}function o(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),i={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var s=decodeURIComponent(t),r=decodeURIComponent(n);return r=String(r),i[s]=r,e}),i}function a(e){for(var t=0,i=0;i<e.length;i++)null!=e[i].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,x.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(i){var n=t[i];"object"===(void 0===n?"undefined":(0,x.default)(n))?e[i]=p(e[i],n):e[i]=n}),e)}function m(e,t,i){if(!(i<=0)){var n=t-e.scrollTop,s=n/i*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+s,e.scrollTop!==t&&m(e,t,i-10)},10)}}function f(e,t){if(e&&t){var i=e.className,n=i.indexOf(t);-1===n?i+=""+t:i=i.substr(0,n)+i.substr(n+t.length),e.className=i}}function h(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,i){var n=void 0,s=void 0,r=void 0,o=void 0,a=void 0,l=function l(){var c=+new Date-o;c<t&&c>0?n=setTimeout(l,t-c):(n=null,i||(a=e.apply(r,s),n||(r=s=null)))};return function(){for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];r=this,o=+new Date;var d=i&&!n;return n||(n=setTimeout(l,t)),d&&(a=e.apply(r,c),r=c=null),a}}function v(e){if(!e&&"object"!==(void 0===e?"undefined":(0,x.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(i){e[i]&&"object"===(0,x.default)(e[i])?(t[i]=e[i].constructor===Array?[]:{},t[i]=v(e[i])):t[i]=e[i]}),t}function b(e){return i("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var y=i("fZjL"),w=n(y),k=i("pFYg"),x=n(k);t.parseTime=s,t.formatTime=r,t.getQueryObject=o,t.getByteLen=a,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=h,t.debounce=g,t.deepClone=v,t.getVersion=b;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,i=new Date((new Date).toDateString());t.setTime(i.getTime()),e.$emit("pick",[i,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(t.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},HJ3G:function(e,t,i){"use strict";function n(e){i("LhMr")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("lX9B"),r=i.n(s),o=i("rGEM"),a=i("VU/8"),l=n,c=a(r.a,o.a,!1,l,null,null);t.default=c.exports},LhMr:function(e,t,i){var n=i("VTwa");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("0da9a9f3",n,!0)},VTwa:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".action-btns a{margin-left:5px}.el-tag,.pagination-container{margin-top:10px}.el-tag{margin-left:10px}.el-table td,.el-table th{padding:5px 0!important}.filter-container .filter-item{margin-bottom:5px;width:120px}.small-padding-btn{padding:12px 5px!important}.el-button+.el-button{margin-left:5px}.el-checkbox{line-height:30px;width:14%;margin-left:0}.permission_group_title{display:block;color:#3a8ee6;font-size:16px}",""])},XZlg:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("jdeu"),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){e.directive("waves",s.default)};window.Vue&&(window.waves=s.default,Vue.use(r)),s.default.install=r,t.default=s.default},ctMr:function(e,t,i){var n=i("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("81d72750",n,!0)},jdeu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("woOf"),s=function(e){return e&&e.__esModule?e:{default:e}}(n);i("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(i){var n=(0,s.default)({},t.value),r=(0,s.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=r.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var a=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(a.width,a.height)+"px",o.appendChild(l)),r.type){case"center":l.style.top=a.height/2-l.offsetHeight/2+"px",l.style.left=a.width/2-l.offsetWidth/2+"px";break;default:l.style.top=i.pageY-a.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=i.pageX-a.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}},!1)}}},lX9B:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),r=n(s),o=i("cAgV"),a=n(o),l=(i("0xDb"),i("X2Oc")),c=(n(l),i("3pLw")),u=n(c),d=i("NYxO");t.default={name:"vue_auth_assign",directives:{waves:a.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:10,importance:void 0,description:"",name:"",sort:""},currentRoleDesc:"",role:{},rolePermissions:[],allPermissions:[],multipleSelection:[],tableKey:0,constFalse:!1,constTrue:!0,checkAll:!1,isIndeterminate:!1}},filters:{},created:function(){console.log(this.$route.params.role),this.listQuery.name=this.$route.params.role,this.getList()},watch:{$route:function(e,t){var i="";console.log(e.query,t.query,e.role==t.role),e.name==t.name?e.query.role!=t.query.role?i=e.query.role:e.params.role!=t.params.role&&(i=e.params.role):i=e.query.role?e.query.role:e.params.role,i&&(this.listQuery.name=i,this.getList())}},computed:(0,r.default)({},(0,d.mapGetters)(["roles","uid","user"])),methods:{handleSelectionChange:function(e){this.multipleSelection=e},handleCheckAllChange:function(e){this.rolePermissions=[];for(var t=0;t<this.allPermissions.length;t++){if(console.log(this.allPermissions[t].name),void 0!==this.allPermissions[t].children)for(var i=0;i<this.allPermissions[t].children.length;i++)this.rolePermissions.push(this.allPermissions[t].children[i].name);this.rolePermissions.push(this.allPermissions[t].name)}this.isIndeterminate=!1},selectReverse:function(){for(var e=[],t=0;t<this.allPermissions.length;t++){if(_.indexOf(this.rolePermissions,this.allPermissions[t].name)<0&&e.push(this.allPermissions[t].name),void 0!==this.allPermissions[t].children)for(var i=0;i<this.allPermissions[t].children.length;i++){var n=_.indexOf(this.rolePermissions,this.allPermissions[t].children[i].name);n<0&&e.push(this.allPermissions[t].children[i].name)}}this.rolePermissions=e},handleCheckedPermissionChange:function(){var e=this.rolePermissions.length;this.checkAll=e===this.allPermissions.length,this.isIndeterminate=e>0&&e<this.allPermissions.length},getList:function(){var e=this;e.listLoading=!0,e.listQuery.name&&u.default.post("/admin/role/permissions",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.role=t.data.role,e.rolePermissions=t.data.rolePermissions,e.allPermissions=t.data.allPermissions)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},updatePermission:function(){var e=this;e.listLoading=!0,e.listQuery.name&&u.default.post("/admin/role/update-permissions",{name:e.listQuery.name,permissions:e.rolePermissions}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.$message.success({message:t.message})},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},goAssign:function(e){this.$router.push({name:"vue_auth_assign",params:{role:e.name}})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)}}}},rGEM:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索角色")])],1)],1)],1),e._v(" "),i("h3",[i("el-checkbox",{staticStyle:{width:"80px !important"},attrs:{label:"全选",indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),i("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:e.selectReverse}},[e._v("反选")]),e._v(" "),i("el-button",{attrs:{type:"success",size:"small",plain:""},on:{click:e.updatePermission}},[e._v("确认提交")])],1),e._v(" "),i("el-checkbox-group",{model:{value:e.rolePermissions,callback:function(t){e.rolePermissions=t},expression:"rolePermissions"}},e._l(e.allPermissions,function(t,n){return i("div",{staticClass:"permission-container"},[i("h4",{staticClass:"permission_group_title"},[e._v(e._s(t.name)+"-"+e._s(t.description))]),e._v(" "),e._l(t.children,function(t){return i("el-checkbox",{key:t.name,staticStyle:{"margin-left":"0"},attrs:{label:t.name},on:{change:e.handleCheckedPermissionChange}},[e._v(e._s(t.description))])})],2)}))],1)},s=[],r={render:n,staticRenderFns:s};t.a=r}});