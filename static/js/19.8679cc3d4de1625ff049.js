webpackJsonp([19],{"0xDb":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",s=void 0;"object"===(void 0===e?"undefined":(0,_.default)(e))?s=e:(10===(""+e).length&&(e=1e3*parseInt(e)),s=new Date(e));var i={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=i[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function n(e,t){e=1e3*+e;var a=new Date(e),s=Date.now(),n=(s-a)/1e3;return n<30?"刚刚":n<3600?Math.ceil(n/60)+"分钟前":n<86400?Math.ceil(n/3600)+"小时前":n<172800?"1天前":t?i(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function l(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},s=/([^?&=]+)=([^?&=]*)/g;return t.replace(s,function(e,t,s){var i=decodeURIComponent(t),n=decodeURIComponent(s);return n=String(n),a[i]=n,e}),a}function r(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function o(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?o((0,k.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function m(e,t){return"object"!==(void 0===e?"undefined":(0,_.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,k.default)(t).forEach(function(a){var s=t[a];"object"===(void 0===s?"undefined":(0,_.default)(s))?e[a]=m(e[a],s):e[a]=s}),e)}function p(e,t,a){if(!(a<=0)){var s=t-e.scrollTop,i=s/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&p(e,t,a-10)},10)}}function f(e,t){if(e&&t){var a=e.className,s=a.indexOf(t);-1===s?a+=""+t:a=a.substr(0,s)+a.substr(s+t.length),e.className=a}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function h(e,t,a){var s=void 0,i=void 0,n=void 0,l=void 0,r=void 0,o=function o(){var c=+new Date-l;c<t&&c>0?s=setTimeout(o,t-c):(s=null,a||(r=e.apply(n,i),s||(n=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];n=this,l=+new Date;var d=a&&!s;return s||(s=setTimeout(o,t)),d&&(r=e.apply(n,c),n=c=null),r}}function g(e){if(!e&&"object"!==(void 0===e?"undefined":(0,_.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,k.default)(e).forEach(function(a){e[a]&&"object"===(0,_.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=g(e[a])):t[a]=e[a]}),t}function y(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var b=a("fZjL"),k=s(b),w=a("pFYg"),_=s(w);t.parseTime=i,t.formatTime=n,t.getQueryObject=l,t.getByteLen=r,t.cleanArray=o,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=m,t.scrollTo=p,t.toggleClass=f,t.getTime=v,t.debounce=h,t.deepClone=g,t.getVersion=y;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"2jeF":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=s(i),l=a("cAgV"),r=s(l),o=(a("0xDb"),a("X2Oc")),c=s(o),u=a("3pLw"),d=s(u),m=a("NYxO");t.default={name:"remitList",directives:{waves:r.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,uploadUrl:c.default.pageMap.baseDomain+"/upload/upload",listQuery:{page:1,limit:20,importance:void 0,dateStart:c.default.getDateStr(-3),dateEnd:null,orderNo:null,merchantOrderNo:null,status:null,bankAccount:null,bankNo:null,minMoney:null,maxMoney:null,merchantNo:null,merchantAccount:null,channelAccount:null,idList:[],sort:""},summery:{amount:0},trackVisible:!1,trackForm:{id:void 0,type:"2",upload:[],note:"",upload_url:[]},tableKey:0,constFalse:!1,constTrue:!0,channelAccountOptions:[],statusOptions:[],pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},filters:{},created:function(){this.getList()},mounted:function(){},updated:function(){},computed:(0,n.default)({},(0,m.mapGetters)(["roles","uid","user"])),methods:{getList:function(){var e=this;e.listLoading=!0,d.default.post("/remit/list",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.data,e.summery=t.data.summery,e.total=t.data.pagination.total,e.statusOptions=t.data.condition.statusOptions,e.channelAccountOptions=t.data.condition.channelAccountOptions)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},showDetail:function(e,t){},showNotifyRet:function(e){this.$alert(e.notify_ret,"商户服务器响应内容",{confirmButtonText:"确定",callback:function(e){}})},getSummaries:function(e){var t=e.columns,a=(e.data,[]);return t.forEach(function(e,t){if(0===t)return void(a[t]="总计");a[t]="N/A"}),a[3]=this.summery.amount+"元",a},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)},handleSelectionChange:function(e){var t=this;t.multipleSelection=e,t.listQuery.idList=[],t.multipleSelection.forEach(function(e){t.listQuery.idList.push(e.id)})},checkNumber:function(){var e=/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;e.test(this.listQuery.minMoney)||(this.listQuery.minMoney=""),e.test(this.listQuery.maxMoney)||(this.listQuery.maxMoney="")},handleTrack:function(e){this.trackVisible=!0,this.trackForm.id=e.id},createTrack:function(){self=this,d.default.post("/admin/track/add",{parentId:self.trackForm.id,parentType:"remit",type:self.trackForm.type,upload:self.trackForm.upload,note:self.trackForm.note}).then(function(e){0!=e.code?self.$message.error({message:e.message}):(self.trackVisible=!1,self.trackForm={id:void 0,type:"1",upload:[],note:"",upload_url:[]},self.$refs.track_upload.clearFiles())})},handleUpload:function(e,t,a){this.trackForm.upload.push(e.data.url.filepath),this.trackForm.upload_url.push(e.data.url.host+e.data.url.filepath)},handleStatus:function(e){e.id},setSuccess:function(e){self=this,d.default.post("/admin/remit/set-success",{id:e.id}).then(function(t){0!=t.code?self.$message.error({message:t.message}):(self.$message.success({message:t.message}),e.status=20,self.getList())},function(e){self.$message.error({message:e.message})})},setFail:function(e){self=this,d.default.post("/admin/remit/set-fail",{id:e.id}).then(function(t){0!=t.code?self.$message.error({message:t.message}):(self.$message.success({message:t.message}),e.status=20,self.getList())},function(e){self.$message.error({message:e.message})})},setChecked:function(e){self=this;var t=self.listQuery.idList;e&&(t=[e]),d.default.post("/admin/remit/set-checked",{idList:t}).then(function(e){0!=e.code?self.$message.error({message:e.message}):(self.$message.success({message:e.message}),self.getList())},function(e){self.$message.error({message:e.message})})},syncStatus:function(){self=this,d.default.post("/remit/sync-status",{idList:self.listQuery.idList}).then(function(e){0!=e.code?self.$message.error({message:e.message}):(self.$message.success({message:e.message}),self.getList())},function(e){self.$message.error({message:e.message})})}}}},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mockjs:"1.0.1-beta3","normalize.css":"7.0.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.7.13",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.2.9","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{commander:"^2.15.1",autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.0.8","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},PNOF:function(e,t,a){var s=a("pz6c");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("311d5641",s,!0)},QUGS:function(e,t,a){"use strict";function s(e){a("PNOF")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("2jeF"),n=a.n(i),l=a("kt8N"),r=a("VU/8"),o=s,c=r(n.a,l.a,!1,o,null,null);t.default=c.exports},XZlg:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(s),n=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(n)),i.default.install=n,t.default=i.default},ctMr:function(e,t,a){var s=a("XZlg");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("81d72750",s,!0)},jdeu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(s);a("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(a){var s=(0,i.default)({},t.value),n=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),n.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=a.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=a.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}},!1)}}},kt8N:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:"small",align:"right",type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{size:"small",align:"right",type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"金额"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.minMoney,callback:function(t){e.$set(e.listQuery,"minMoney",t)},expression:"listQuery.minMoney"}}),e._v(" -\n            "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.maxMoney,callback:function(t){e.$set(e.listQuery,"maxMoney",t)},expression:"listQuery.maxMoney"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户编号"},model:{value:e.listQuery.merchantNo,callback:function(t){e.$set(e.listQuery,"merchantNo",t)},expression:"listQuery.merchantNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户账号"},model:{value:e.listQuery.merchantAccount,callback:function(t){e.$set(e.listQuery,"merchantAccount",t)},expression:"listQuery.merchantAccount"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"结算订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.orderNo,callback:function(t){e.$set(e.listQuery,"orderNo",t)},expression:"listQuery.orderNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantOrderNo,callback:function(t){e.$set(e.listQuery,"merchantOrderNo",t)},expression:"listQuery.merchantOrderNo"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"通道号"},model:{value:e.listQuery.channelAccount,callback:function(t){e.$set(e.listQuery,"channelAccount",t)},expression:"listQuery.channelAccount"}},e._l(e.channelAccountOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"卡号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.bankNo,callback:function(t){e.$set(e.listQuery,"bankNo",t)},expression:"listQuery.bankNo"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"状态"},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:function(t){e.syncStatus()}}},[e._v("批量同步状态")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:function(t){e.setChecked()}}},[e._v("批量审核")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","font-size":"12px"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"","summary-method":e.getSummaries,"show-summary":"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",fixed:"",type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"merchant_id",label:"商户编号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"merchant_account",label:"商户账号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_no",label:"结算订单号",width:"165"}}),e._v(" "),a("el-table-column",{attrs:{prop:"merchant_order_no",label:"商户订单号",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_account",label:"持卡人",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_no",label:"卡号",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"channel_account_name",label:"通道",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额（元）",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_name",label:"银行",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status_str",label:"订单状态",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.row.bank_ret,placement:"top"}},[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.status_str))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"channel_order_no",label:"凭证",width:"165"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bak",label:"备注",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"建立时间",width:"160"}}),e._v(" "),a("el-table-column",{staticClass:"action-btns",attrs:{align:"center",label:"操作",fixed:"right",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[-1!==[20,30,60].indexOf(t.row.status)?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",icon:"el-icon-warning",type:"warning"},on:{click:function(a){e.setFail(t.row)}}},[e._v("退款")]):e._e(),e._v(" "),-1!==[30,20,60].indexOf(t.row.status)?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-check"},on:{click:function(a){e.setSuccess(t.row)}}},[e._v("成功")]):e._e(),e._v(" "),-1!==[0].indexOf(t.row.status)?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",icon:"el-icon-zoom-in\n"},on:{click:function(a){e.setChecked(t.row.id)}}},[e._v("审核")]):e._e(),e._v(" "),0==t.row.track?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",icon:"el-icon-edit",type:"danger"},on:{click:function(a){e.handleTrack(t.row)}}},[e._v("录入")]):e._e(),e._v(" "),-1!==[30].indexOf(t.row.status)?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:function(t){e.syncStatus()}}},[e._v("同步")]):e._e()]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"调单录入",visible:e.trackVisible,width:"30%"},on:{"update:visible":function(t){e.trackVisible=t}}},[a("el-form",{attrs:{model:e.trackForm}},[a("el-form-item",{attrs:{label:"调单类型："}},[a("el-radio",{attrs:{label:"1"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("投诉")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("协查")]),e._v(" "),a("el-radio",{attrs:{label:"3"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("其他")])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传："}},[a("el-upload",{ref:"track_upload",staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,multiple:"",limit:3,"on-success":e.handleUpload}},[e._l(e.trackForm.upload_url,function(t){return e.trackForm.upload_url.length>0?a("img",{staticClass:"avatar",attrs:{src:t}}):e._e()}),e._v(" "),a("i",{staticClass:"el-icon-plus"})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("el-input",{staticStyle:{width:"280px"},attrs:{type:"textarea",rows:3},model:{value:e.trackForm.note,callback:function(t){e.$set(e.trackForm,"note",t)},expression:"trackForm.note"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.trackVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createTrack}},[e._v("提交")])],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},pz6c:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".action-btns a{margin-left:5px}.el-table td,.el-table th{padding:5px 0!important}",""])}});