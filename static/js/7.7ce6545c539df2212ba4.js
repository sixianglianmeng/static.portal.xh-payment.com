webpackJsonp([7],{"+pOy":function(e,t,i){"use strict";function n(e){i("tdbp")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("/aj/"),o=i.n(a),s=i("NZ0F"),r=i("VU/8"),l=n,c=r(o.a,s.a,!1,l,"data-v-50630508",null);t.default=c.exports},"/aj/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tinymce",props:{id:{type:String,default:"tinymceEditor"},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["undo redo | bold italic underline strikethrough removeformat | forecolor backcolor | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | separator link joinfimage"]}},data:function(){return{hasChange:!1,hasInit:!1}},menubar:{default:""},height:{type:Number,required:!1,default:360}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(t.id).setContent(e)})}},mounted:function(){var e=this,t=this;tinymce.init({selector:"#"+this.id,language:"zh_CN",height:this.height,body_class:"panel-body",object_resizing:!0,toolbar:this.toolbar,menubar:!1,statusbar:!1,font_formats:"微软雅黑=微软雅黑,Microsoft YaHei;宋体=宋体,SimSun;黑体=黑体, SimHei;隶书=隶书, SimLi;楷体=楷体,楷体_GB2312, SimKai;andale mono=andale mono;arial=arial, helvetica,sans-serif;arial black=arial black,avant garde;comic sans ms=comic sans ms;impact=impact,chicago;Arial=Arial;Verdana=Verdana;Georgia=Georgia;Times New Roman=Times New Roman;Trebuchet MS=Trebuchet MS;Courier New=Courier New;Impact=Impact;Comic Sans MS=Comic Sans MS;Calibri=Calibri",images_upload_url:this.html_url+"/common/uploadFile",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],plugins:["advlist autolink lists link image preview anchor","searchreplace visualblocks code fullscreen","charmap colorpicker directionality emoticons nonbreaking","tabfocus textcolor "],fontsizeFormats:"8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt",default_link_target:"_blank",link_title:!1,init_instance_callback:function(i){t.value&&i.setContent(t.value),t.hasInit=!0,i.on("NodeChange Change KeyUp",function(){e.hasChange=!0,e.$emit("input",i.getContent({format:"raw"}))})},setup:function(e){e.addButton("h2",{title:"小标题",text:"小标题",onclick:function(){e.execCommand("mceToggleFormat",!1,"h2")},onPostRender:function(){var t=this;e.on("init",function(){e.formatter.formatChanged("h2",function(e){t.active(e)})})}}),e.addButton("p",{title:"正文",text:"正文",onclick:function(){e.execCommand("mceToggleFormat",!1,"p")},onPostRender:function(){var t=this;e.on("init",function(){e.formatter.formatChanged("p",function(e){t.active(e)})})}}),e.on("joinimageuploadstart",function(e){t.$message({duration:0,message:"正在上传图片..."})}),e.on("joinimageuploadend",function(e){t.$message.closeAll()}),e.on("joinimageuploaderror",function(e){t.$message({duration:0,message:e.errMsg}),setTimeout(function(){t.$message.closeAll()},3e3)})}})},destroyed:function(){tinymce.get(this.id).destroy()}}},"0xDb":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(0===arguments.length)return null;var i=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var i=a[t];return"a"===t?["一","二","三","四","五","六","日"][i-1]:(e.length>0&&i<10&&(i="0"+i),i||0)})}function o(e,t){e=1e3*+e;var i=new Date(e),n=Date.now(),o=(n-i)/1e3;return o<30?"刚刚":o<3600?Math.ceil(o/60)+"分钟前":o<86400?Math.ceil(o/3600)+"小时前":o<172800?"1天前":t?a(e,t):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"}function s(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),i={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var a=decodeURIComponent(t),o=decodeURIComponent(n);return o=String(o),i[a]=o,e}),i}function r(e){for(var t=0,i=0;i<e.length;i++)null!=e[i].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(i){var n=t[i];"object"===(void 0===n?"undefined":(0,k.default)(n))?e[i]=p(e[i],n):e[i]=n}),e)}function f(e,t,i){if(!(i<=0)){var n=t-e.scrollTop,a=n/i*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+a,e.scrollTop!==t&&f(e,t,i-10)},10)}}function m(e,t){if(e&&t){var i=e.className,n=i.indexOf(t);-1===n?i+=""+t:i=i.substr(0,n)+i.substr(n+t.length),e.className=i}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,i){var n=void 0,a=void 0,o=void 0,s=void 0,r=void 0,l=function l(){var c=+new Date-s;c<t&&c>0?n=setTimeout(l,t-c):(n=null,i||(r=e.apply(o,a),n||(o=a=null)))};return function(){for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];o=this,s=+new Date;var d=i&&!n;return n||(n=setTimeout(l,t)),d&&(r=e.apply(o,c),o=c=null),r}}function h(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(i){e[i]&&"object"===(0,k.default)(e[i])?(t[i]=e[i].constructor===Array?[]:{},t[i]=h(e[i])):t[i]=e[i]}),t}function b(e){return i("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var y=i("fZjL"),w=n(y),_=i("pFYg"),k=n(_);t.parseTime=a,t.formatTime=o,t.getQueryObject=s,t.getByteLen=r,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=f,t.toggleClass=m,t.getTime=g,t.debounce=v,t.deepClone=h,t.getVersion=b;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,i=new Date((new Date).toDateString());t.setTime(i.getTime()),e.$emit("pick",[i,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(t.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},NZ0F:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tinymce-container editor-container"},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.id}})])},a=[],o={render:n,staticRenderFns:a};t.a=o},TY2c:function(e,t,i){"use strict";function n(e){i("pRy+")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("V4rL"),o=i.n(a),s=i("XpbE"),r=i("VU/8"),l=n,c=r(o.a,s.a,!1,l,"data-v-9f6cf40c",null);t.default=c.exports},V4rL:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i("cAgV"),o=n(a),s=i("+pOy"),r=n(s),l=(i("0xDb"),i("3pLw")),c=n(l),u={id:null,title:null,content:null,data_type:{ui:"text"}};t.default={name:"vue_setting",components:{Tinymce:r.default,waves:o.default},directives:{waves:o.default},data:function(){return{editVisible:!1,viewModel:u,list:null,tableKey:0,total:null,listLoading:!0,statusOptions:[],listQuery:{page:1,limit:10,importance:void 0,title:null,sort:""}}},created:function(){this.getInitData()},methods:{getInitData:function(){var e=this;e.listLoading=!0,c.default.post("/admin/site-config/list",e.listQuery).then(function(t){e.listLoading=!1,0==t.code&&(e.list=t.data.data,e.total=t.data.pagination.total)})},edit:function(){var e=this;return null==this.viewModel.title?void this.$message.error({message:"配置项名称不能为空"}):null==this.viewModel.content?void this.$message.error({message:"配置内容不能为空"}):void c.default.post("/admin/site-config/add",this.viewModel).then(function(t){0==t.code?(e.$message.success({message:"操作成功"}),e.viewModel=u,e.getInitData(),e.editVisible=!1):e.$message.error({message:t.message})})},clearCache:function(){var e=this;c.default.post("/admin/site-config/flush-cache").then(function(t){0==t.code?e.$message.success({message:"操作成功"}):e.$message.error({message:t.message})})},showEditDialog:function(e){this.viewModel=e,this.editVisible=!0},handleFilter:function(){this.listQuery.page=1,this.getInitData()},handleSizeChange:function(e){this.listQuery.limit=e,this.getInitData()},handleCurrentChange:function(e){this.listQuery.page=e,this.getInitData()}}}},XZlg:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},XpbE:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-container"},[i("div",{staticClass:"filter-container"},[e._v("\n        搜索配置：\n        "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},model:{value:e.listQuery.desc,callback:function(t){e.$set(e.listQuery,"desc",t)},expression:"listQuery.desc"}}),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("刷新缓存")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),i("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type"},[e._v(e._s(t.row.title))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type"},[e._v(e._s(t.row.desc))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type"},[e._v(e._s(t.row.content))])]}}])}),e._v(" "),i("el-table-column",{staticClass:"action-btns",attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",type:"warning"},on:{click:function(i){e.showEditDialog(t.row)}}},[e._v("\n                编辑\n            ")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:"添加/编辑配置",visible:e.editVisible,width:"60%"},on:{"update:visible":function(t){e.editVisible=t}}},[[i("el-form",{attrs:{model:e.viewModel}},[i("el-form-item",{attrs:{label:"配置key："}},[i("span",{staticClass:"link-type"},[e._v(e._s(e.viewModel.title))])]),e._v(" "),i("el-form-item",{attrs:{label:"描述："}},[i("span",{staticClass:"link-type"},[e._v(e._s(e.viewModel.desc))])]),e._v(" "),"radio"==e.viewModel.data_type.ui?i("el-form-item",{attrs:{label:"配置内容"}},e._l(e.viewModel.data_type.uiExt.list,function(t,n){return i("el-radio",{key:n,attrs:{label:t.val,border:""},model:{value:e.viewModel.content,callback:function(t){e.$set(e.viewModel,"content",t)},expression:"viewModel.content"}},[e._v(e._s(t.label)+"\n                    ")])})):e._e(),e._v(" "),"text"==e.viewModel.data_type.ui?i("el-form-item",{attrs:{label:"配置内容"}},[i("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入配置内容"},model:{value:e.viewModel.content,callback:function(t){e.$set(e.viewModel,"content",t)},expression:"viewModel.content"}})],1):e._e()],1)],e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.edit}},[e._v("确 定")])],1)],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},cAgV:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("jdeu"),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){e.directive("waves",a.default)};window.Vue&&(window.waves=a.default,Vue.use(o)),a.default.install=o,t.default=a.default},ctMr:function(e,t,i){var n=i("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("81d72750",n,!0)},eiXJ:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".editor-content[data-v-9f6cf40c]{margin-top:20px}",""])},jdeu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("woOf"),a=function(e){return e&&e.__esModule?e:{default:e}}(n);i("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(i){var n=(0,a.default)({},t.value),o=(0,a.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=o.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var r=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",s.appendChild(l)),o.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=i.pageY-r.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=i.pageX-r.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}},!1)}}},"pRy+":function(e,t,i){var n=i("eiXJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("22036180",n,!0)},tdbp:function(e,t,i){var n=i("wcmo");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("1d6c2ae4",n,!0)},wcmo:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".tinymce-container[data-v-50630508]{position:relative}.tinymce-textarea[data-v-50630508]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-50630508]{position:absolute;right:15px;top:18px}.editor-upload-btn[data-v-50630508]{display:inline-block}",""])}});