webpackJsonp([18],{"+pOy":function(e,t,a){"use strict";function n(e){a("tdbp")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("/aj/"),o=a.n(i),r=a("NZ0F"),s=a("VU/8"),l=n,c=s(o.a,r.a,!1,l,"data-v-50630508",null);t.default=c.exports},"/aj/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tinymce",props:{id:{type:String,default:"tinymceEditor"},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["undo redo | bold italic underline strikethrough removeformat | forecolor backcolor | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | separator link joinfimage"]}},data:function(){return{hasChange:!1,hasInit:!1}},menubar:{default:""},height:{type:Number,required:!1,default:360}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(t.id).setContent(e)})}},mounted:function(){var e=this,t=this;tinymce.init({selector:"#"+this.id,language:"zh_CN",height:this.height,body_class:"panel-body",object_resizing:!0,toolbar:this.toolbar,menubar:!1,statusbar:!1,font_formats:"微软雅黑=微软雅黑,Microsoft YaHei;宋体=宋体,SimSun;黑体=黑体, SimHei;隶书=隶书, SimLi;楷体=楷体,楷体_GB2312, SimKai;andale mono=andale mono;arial=arial, helvetica,sans-serif;arial black=arial black,avant garde;comic sans ms=comic sans ms;impact=impact,chicago;Arial=Arial;Verdana=Verdana;Georgia=Georgia;Times New Roman=Times New Roman;Trebuchet MS=Trebuchet MS;Courier New=Courier New;Impact=Impact;Comic Sans MS=Comic Sans MS;Calibri=Calibri",images_upload_url:this.html_url+"/common/uploadFile",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],plugins:["advlist autolink lists link image preview anchor","searchreplace visualblocks code fullscreen","charmap colorpicker directionality emoticons nonbreaking","tabfocus textcolor "],fontsizeFormats:"8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt",default_link_target:"_blank",link_title:!1,init_instance_callback:function(a){t.value&&a.setContent(t.value),t.hasInit=!0,a.on("NodeChange Change KeyUp",function(){e.hasChange=!0,e.$emit("input",a.getContent({format:"raw"}))})},setup:function(e){e.addButton("h2",{title:"小标题",text:"小标题",onclick:function(){e.execCommand("mceToggleFormat",!1,"h2")},onPostRender:function(){var t=this;e.on("init",function(){e.formatter.formatChanged("h2",function(e){t.active(e)})})}}),e.addButton("p",{title:"正文",text:"正文",onclick:function(){e.execCommand("mceToggleFormat",!1,"p")},onPostRender:function(){var t=this;e.on("init",function(){e.formatter.formatChanged("p",function(e){t.active(e)})})}}),e.on("joinimageuploadstart",function(e){t.$message({duration:0,message:"正在上传图片..."})}),e.on("joinimageuploadend",function(e){t.$message.closeAll()}),e.on("joinimageuploaderror",function(e){t.$message({duration:0,message:e.errMsg}),setTimeout(function(){t.$message.closeAll()},3e3)})}})},destroyed:function(){tinymce.get(this.id).destroy()}}},"0xDb":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=i[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function o(e,t){e=1e3*+e;var a=new Date(e),n=Date.now(),o=(n-a)/1e3;return o<30?"刚刚":o<3600?Math.ceil(o/60)+"分钟前":o<86400?Math.ceil(o/3600)+"小时前":o<172800?"1天前":t?i(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function r(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var i=decodeURIComponent(t),o=decodeURIComponent(n);return o=String(o),a[i]=o,e}),a}function s(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(a){var n=t[a];"object"===(void 0===n?"undefined":(0,k.default)(n))?e[a]=p(e[a],n):e[a]=n}),e)}function m(e,t,a){if(!(a<=0)){var n=t-e.scrollTop,i=n/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&m(e,t,a-10)},10)}}function f(e,t){if(e&&t){var a=e.className,n=a.indexOf(t);-1===n?a+=""+t:a=a.substr(0,n)+a.substr(n+t.length),e.className=a}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,a){var n=void 0,i=void 0,o=void 0,r=void 0,s=void 0,l=function l(){var c=+new Date-r;c<t&&c>0?n=setTimeout(l,t-c):(n=null,a||(s=e.apply(o,i),n||(o=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];o=this,r=+new Date;var d=a&&!n;return n||(n=setTimeout(l,t)),d&&(s=e.apply(o,c),o=c=null),s}}function h(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(a){e[a]&&"object"===(0,k.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=h(e[a])):t[a]=e[a]}),t}function b(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var y=a("fZjL"),w=n(y),_=a("pFYg"),k=n(_);t.parseTime=i,t.formatTime=o,t.getQueryObject=r,t.getByteLen=s,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=g,t.debounce=v,t.deepClone=h,t.getVersion=b;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},NZ0F:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tinymce-container editor-container"},[a("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.id}})])},i=[],o={render:n,staticRenderFns:i};t.a=o},UzBU:function(e,t,a){var n=a("mehb");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("4f7f107c",n,!0)},XZlg:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(o)),i.default.install=o,t.default=i.default},ctMr:function(e,t,a){var n=a("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("81d72750",n,!0)},gNHh:function(e,t,a){"use strict";function n(e){a("UzBU")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("vPz9"),o=a.n(i),r=a("wl7s"),s=a("VU/8"),l=n,c=s(o.a,r.a,!1,l,"data-v-2e25dc8a",null);t.default=c.exports},jdeu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(n);a("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(a){var n=(0,i.default)({},t.value),o=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=o.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",r.appendChild(l)),o.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=a.pageY-s.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=a.pageX-s.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}},!1)}}},mehb:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".action-btns a[data-v-2e25dc8a]{margin-left:5px}.el-table td[data-v-2e25dc8a],.el-table th[data-v-2e25dc8a]{padding:0!important}.el-table__row button[data-v-2e25dc8a]{margin-top:5px}.op-column .cell[data-v-2e25dc8a]{padding-left:0;text-align:left}.summary-list[data-v-2e25dc8a]{margin-top:10px}.summary-list .el-tag+.el-tag[data-v-2e25dc8a]{margin-left:10px}",""])},tdbp:function(e,t,a){var n=a("wcmo");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("1d6c2ae4",n,!0)},vPz9:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("cAgV"),o=n(i),r=a("+pOy"),s=(n(r),a("0xDb"),a("3pLw")),l=n(s);t.default={name:"vue_agent_trade_statistic",components:{waves:o.default},directives:{waves:o.default},data:function(){return{editVisible:!1,viewModel:{},viewModelTableData:[],list:null,tableKey:0,total:null,listLoading:!0,eventTypeOptions:[],listQuery:{page:1,limit:20,importance:void 0,event_type:"",event_id:"",merchant_name:"",sort:"",dateStart:new Date((new Date).setHours(0,0,0,0)),dateEnd:new Date((new Date).setHours(23,59,59,0))},summery:{all_status_list:[]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},created:function(){this.getInitData()},methods:{getInitData:function(){var e=this;e.listLoading=!0,l.default.post("/account/recharge-sum-statistic",e.listQuery).then(function(t){e.listLoading=!1,0==t.code&&(e.list=t.data.data,e.total=t.data.pagination.total,e.summery=t.data.summery)})},getSummaries:function(e){var t=e.columns,a=(e.data,[]);return t.forEach(function(e,t){if(0===t)return void(a[t]="总计");a[t]="N/A"}),a[2]=this.summery.all_status_list.length>0?this.summery.all_status_list[0].amount:0,a},showDetailDialog:function(e){this.viewModel=e;for(var t in this.viewModel)this.viewModelTableData.push({k:t,v:this.viewModel[t]});this.editVisible=!0},handleFilter:function(){this.listQuery.page=1,this.getInitData()},handleSizeChange:function(e){this.listQuery.limit=e,this.getInitData()},handleCurrentChange:function(e){this.listQuery.page=e,this.getInitData()}}}},wcmo:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".tinymce-container[data-v-50630508]{position:relative}.tinymce-textarea[data-v-50630508]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-50630508]{position:absolute;right:15px;top:18px}.editor-upload-btn[data-v-50630508]{display:inline-block}",""])},wl7s:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container"},[a("div",{staticClass:"filter-container"},[e._v("\n        商户账号 "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.listQuery.merchant_name,callback:function(t){e.$set(e.listQuery,"merchant_name",t)},expression:"listQuery.merchant_name"}}),e._v("\n        商户ID "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.listQuery.merchant_id,callback:function(t){e.$set(e.listQuery,"merchant_id",t)},expression:"listQuery.merchant_id"}}),e._v("\n        开始时间：\n        "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",align:"right",type:"datetime",placeholder:"开始日期",format:"yyyy-MM-dd 00:00:00","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v("\n        结束时间\n        "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",align:"right",type:"datetime",placeholder:"结束日期",format:"yyyy-MM-dd 23:59:59","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"","summary-method":e.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{label:"商户ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.merchant_id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商户名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.merchant_account))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收款总额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.amount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收款笔数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.num))])]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],o={render:n,staticRenderFns:i};t.a=o}});