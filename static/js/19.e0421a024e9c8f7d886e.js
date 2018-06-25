webpackJsonp([19],{"/VrM":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),a=s(i),r=n("cAgV"),o=s(r),l=(n("0xDb"),n("X2Oc")),u=(s(l),n("3pLw")),c=s(u),d=n("NYxO");t.default={name:"vue_my_order",directives:{waves:o.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,importance:void 0,dateStart:null,dateEnd:null,orderNo:null,merchantOrderNo:null,status:null,notifyStatus:null,sort:""},summery:[],tableKey:0,constFalse:!1,constTrue:!0,statusOptions:[],notifyStatusOptions:[],methodOptions:[],channelAccountOptions:[],pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},filters:{},created:function(){this.getList()},mounted:function(){},updated:function(){},computed:(0,a.default)({},(0,d.mapGetters)(["roles","uid","user"])),methods:{getList:function(){var e=this;e.listLoading=!0,c.default.post("/order/my-list",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.data,e.summery=t.data.summery,e.total=t.data.pagination.total,e.statusOptions=t.data.condition.statusOptions,e.notifyStatusOptions=t.data.condition.notifyStatusOptions,e.channelAccountOptions=t.data.condition.channelAccountOptions,e.methodOptions=t.data.condition.methodOptions)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},showDetail:function(e,t){self=this,c.default.post("/order/detail",{id:e.id}).then(function(e){},function(e){self.$message.error({message:e.message})})},sendNotify:function(e){self=this,c.default.post("/order/send-notify",{id:e.id}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.$message.success({message:e.message})},function(e){self.$message.error({message:e.message})})},frozen:function(e){self=this,c.default.post("/order/frozen",{id:e.id}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.$message.success({message:e.message})},function(e){self.$message.error({message:e.message})})},showNotifyRet:function(e){this.$alert(e.notify_ret,"商户服务器响应内容",{confirmButtonText:"确定",callback:function(e){}})},getSummaries:function(e){var t=e.columns,n=(e.data,[]);return t.forEach(function(e,t){if(0===t)return void(n[t]="当前查询条件总计");n[t]="N/A"}),n[2]=this.summery.amount+"元",n},objectSpanMethod:function(e){var t=(e.row,e.column,e.rowIndex);if(0===e.columnIndex)return t%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)},checkNumber:function(){var e=/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;e.test(this.listQuery.minMoney)||(this.listQuery.minMoney=""),e.test(this.listQuery.maxMoney)||(this.listQuery.maxMoney="")}}}},"0xDb":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",s=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?s=e:(10===(""+e).length&&(e=1e3*parseInt(e)),s=new Date(e));var i={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=i[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function a(e,t){e=1e3*+e;var n=new Date(e),s=Date.now(),a=(s-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?i(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function r(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},s=/([^?&=]+)=([^?&=]*)/g;return t.replace(s,function(e,t,s){var i=decodeURIComponent(t),a=decodeURIComponent(s);return a=String(a),n[i]=a,e}),n}function o(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function u(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function c(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(n){var s=t[n];"object"===(void 0===s?"undefined":(0,k.default)(s))?e[n]=p(e[n],s):e[n]=s}),e)}function f(e,t,n){if(!(n<=0)){var s=t-e.scrollTop,i=s/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&f(e,t,n-10)},10)}}function m(e,t){if(e&&t){var n=e.className,s=n.indexOf(t);-1===s?n+=""+t:n=n.substr(0,s)+n.substr(s+t.length),e.className=n}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,n){var s=void 0,i=void 0,a=void 0,r=void 0,o=void 0,l=function l(){var u=+new Date-r;u<t&&u>0?s=setTimeout(l,t-u):(s=null,n||(o=e.apply(a,i),s||(a=i=null)))};return function(){for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];a=this,r=+new Date;var d=n&&!s;return s||(s=setTimeout(l,t)),d&&(o=e.apply(a,u),a=u=null),o}}function y(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(n){e[n]&&"object"===(0,k.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=y(e[n])):t[n]=e[n]}),t}function h(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var b=n("fZjL"),w=s(b),_=n("pFYg"),k=s(_);t.parseTime=i,t.formatTime=a,t.getQueryObject=r,t.getByteLen=o,t.cleanArray=l,t.param=u,t.param2Obj=c,t.html2Text=d,t.objectMerge=p,t.scrollTo=f,t.toggleClass=m,t.getTime=g,t.debounce=v,t.deepClone=y,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"1sJi":function(e,t,n){var s=n("VSC9");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("69a75e82",s,!0)},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.pub-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.pub-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.1.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.7.13",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.2.9","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{commander:"^2.15.1",autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.0.8","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},ShCP:function(e,t,n){"use strict";function s(e){n("1sJi")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("/VrM"),a=n.n(i),r=n("nWNM"),o=n("VU/8"),l=s,u=o(a.a,r.a,!1,l,null,null);t.default=u.exports},VSC9:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".action-btns a{margin-left:5px}.el-table td,.el-table th{padding:5px 0!important}",""])},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(a)),i.default.install=a,t.default=i.default},ctMr:function(e,t,n){var s=n("XZlg");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("81d72750",s,!0)},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(s);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var s=(0,i.default)({},t.value),a=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",r.appendChild(l)),a.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-o.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}},!1)}}},nWNM:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[e._v("\n        开始时间：\n        "),n("el-date-picker",{staticClass:"filter-item",attrs:{align:"right",type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v("\n        结束时间\n        "),n("el-date-picker",{staticClass:"filter-item",attrs:{align:"right",type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v("\n\n\n        订单金额：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"最小金额"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.minMoney,callback:function(t){e.$set(e.listQuery,"minMoney",t)},expression:"listQuery.minMoney"}}),e._v("-\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"最大金额"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.maxMoney,callback:function(t){e.$set(e.listQuery,"maxMoney",t)},expression:"listQuery.maxMoney"}}),e._v("\n        代理账号：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"代理账号"},model:{value:e.listQuery.agentAccount,callback:function(t){e.$set(e.listQuery,"agentAccount",t)},expression:"listQuery.agentAccount"}}),e._v("\n        收款订单号：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"收款订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.orderNo,callback:function(t){e.$set(e.listQuery,"orderNo",t)},expression:"listQuery.orderNo"}}),e._v("\n        商户订单号：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商户订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantOrderNo,callback:function(t){e.$set(e.listQuery,"merchantOrderNo",t)},expression:"listQuery.merchantOrderNo"}}),e._v("\n        商户账号：\n        "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商户账号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantUserName,callback:function(t){e.$set(e.listQuery,"merchantUserName",t)},expression:"listQuery.merchantUserName"}}),e._v("\n        订单状态：\n        "),n("el-select",{staticClass:"filter-item",attrs:{placeholder:"订单状态"},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:t}})})),e._v("\n        通知状态：\n        "),n("el-select",{staticClass:"filter-item",attrs:{placeholder:"通知状态"},model:{value:e.listQuery.notifyStatus,callback:function(t){e.$set(e.listQuery,"notifyStatus",t)},expression:"listQuery.notifyStatus"}},e._l(e.notifyStatusOptions,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{stripe:"",data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"","summary-method":e.getSummaries,"show-summary":""}},[n("el-table-column",{attrs:{fixed:"left",align:"center",label:"商户编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.merchant_id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"",align:"center",label:"商户账号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.merchant_account))])]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"",label:"收款订单号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.order_no))])]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"",label:"商户订单号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.merchant_order_no))])]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"",label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("￥"+e._s(t.row.amount))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"通道",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.channel_account_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.pay_method_code_str))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"银行"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.bank_code)+"/"+e._s(t.row.bank_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.status_str))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"通知状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.row.notify_ret,placement:"top"}},[n("span",{staticClass:"link-type",on:{click:function(n){e.showNotifyRet(t.row)}}},[e._v(e._s(t.row.notify_status_str))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"180",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.created_at))])]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],a={render:s,staticRenderFns:i};t.a=a}});