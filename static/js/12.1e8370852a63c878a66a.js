webpackJsonp([12,68,77],{"0xDb":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,w.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=r[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function i(e,t){e=1e3*+e;var a=new Date(e),n=Date.now(),i=(n-a)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?r(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function s(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var r=decodeURIComponent(t),i=decodeURIComponent(n);return i=String(i),a[r]=i,e}),a}function o(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?l((0,x.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function d(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function p(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function u(e,t){return"object"!==(void 0===e?"undefined":(0,w.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,x.default)(t).forEach(function(a){var n=t[a];"object"===(void 0===n?"undefined":(0,w.default)(n))?e[a]=u(e[a],n):e[a]=n}),e)}function m(e,t,a){if(!(a<=0)){var n=t-e.scrollTop,r=n/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+r,e.scrollTop!==t&&m(e,t,a-10)},10)}}function g(e,t){if(e&&t){var a=e.className,n=a.indexOf(t);-1===n?a+=""+t:a=a.substr(0,n)+a.substr(n+t.length),e.className=a}}function f(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,a){var n=void 0,r=void 0,i=void 0,s=void 0,o=void 0,l=function l(){var c=+new Date-s;c<t&&c>0?n=setTimeout(l,t-c):(n=null,a||(o=e.apply(i,r),n||(i=r=null)))};return function(){for(var r=arguments.length,c=Array(r),d=0;d<r;d++)c[d]=arguments[d];i=this,s=+new Date;var p=a&&!n;return n||(n=setTimeout(l,t)),p&&(o=e.apply(i,c),i=c=null),o}}function h(e){if(!e&&"object"!==(void 0===e?"undefined":(0,w.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,x.default)(e).forEach(function(a){e[a]&&"object"===(0,w.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=h(e[a])):t[a]=e[a]}),t}function b(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var _=a("fZjL"),x=n(_),y=a("pFYg"),w=n(y);t.parseTime=r,t.formatTime=i,t.getQueryObject=s,t.getByteLen=o,t.cleanArray=l,t.param=c,t.param2Obj=d,t.html2Text=p,t.objectMerge=u,t.scrollTo=m,t.toggleClass=g,t.getTime=f,t.debounce=v,t.deepClone=h,t.getVersion=b;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"8r3d":function(e,t,a){"use strict";function n(e){a("sFR0")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("YQUN"),i=a.n(r),s=a("l3Z5"),o=a("VU/8"),l=n,c=o(i.a,s.a,!1,l,"data-v-d7f9542c",null);t.default=c.exports},ARoL:function(e,t,a){"use strict";function n(e){a("FsdM")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("bPRz"),i=a.n(r),s=a("Ci1v"),o=a("VU/8"),l=n,c=o(i.a,s.a,!1,l,"data-v-004ba0ae",null);t.default=c.exports},Bcg3:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".el-row[data-v-004ba0ae]{margin-bottom:20px}.el-row[data-v-004ba0ae]:last-child{margin-bottom:0}.el-col[data-v-004ba0ae]{border-radius:4px}.bg-purple-dark[data-v-004ba0ae]{background:#99a9bf}.bg-purple[data-v-004ba0ae]{background:#d3dce6}.bg-purple-light[data-v-004ba0ae]{background:#e5e9f2}.grid-content[data-v-004ba0ae]{border-radius:4px;min-height:36px}.row-bg[data-v-004ba0ae]{padding:10px 0;background-color:#f9fafc}.dashboard-editor-container[data-v-004ba0ae]{padding:32px;background-color:#f0f2f5}.dashboard-editor-container .chart-wrapper[data-v-004ba0ae]{background:#fff;padding:16px 16px 0;margin-bottom:32px}.dashboard-editor-container .authorised_amount[data-v-004ba0ae]{padding:5px 10px;background-color:#ecf8ff;border-radius:4px;border-left:5px solid #50bfff}.dashboard-editor-container .authorised_amount b[data-v-004ba0ae],.dashboard-editor-container .authorised_amount span[data-v-004ba0ae]{display:inline-block;padding-left:5px}.dashboard-editor-container .authorised_amount b[data-v-004ba0ae]{color:#f56c6c}.panel-group[data-v-004ba0ae]{margin-top:18px}.panel-group .card-panel-col[data-v-004ba0ae]{margin-bottom:32px}.panel-group .card-panel[data-v-004ba0ae]{height:108px;cursor:pointer;font-size:12px;position:relative;overflow:hidden;color:#666;background:#fff;box-shadow:4px 4px 40px rgba(0,0,0,.05);border-color:rgba(0,0,0,.05)}.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-004ba0ae]{color:#fff}.panel-group .card-panel:hover .icon-people[data-v-004ba0ae]{background:#40c9c6}.panel-group .card-panel:hover .icon-message[data-v-004ba0ae]{background:#36a3f7}.panel-group .card-panel:hover .icon-money[data-v-004ba0ae]{background:#f4516c}.panel-group .card-panel:hover .icon-shoppingCard[data-v-004ba0ae]{background:#34bfa3}.panel-group .card-panel .icon-people[data-v-004ba0ae]{color:#40c9c6}.panel-group .card-panel .icon-message[data-v-004ba0ae]{color:#36a3f7}.panel-group .card-panel .icon-money[data-v-004ba0ae]{color:#f4516c}.panel-group .card-panel .icon-shoppingCard[data-v-004ba0ae]{color:#34bfa3}.panel-group .card-panel .card-panel-icon-wrapper[data-v-004ba0ae]{float:left;margin:14px 0 0 14px;padding:16px;transition:all .38s ease-out;border-radius:6px}.panel-group .card-panel .card-panel-icon[data-v-004ba0ae]{float:left;font-size:48px}.panel-group .card-panel .card-panel-description[data-v-004ba0ae]{float:left;font-weight:700;margin:26px;margin-left:0;width:75%}.panel-group .card-panel .card-panel-description .card-panel-text[data-v-004ba0ae]{line-height:18px;color:rgba(0,0,0,.45);font-size:16px;margin-bottom:12px;margin-left:20px}.panel-group .card-panel .card-panel-description .card-panel-num[data-v-004ba0ae]{font-size:12px}.rate-list .el-alert__title[data-v-004ba0ae]{font-size:18px!important;font-weight:bolder}.rate-list .el-button--medium[data-v-004ba0ae]{padding:5px 10px;color:#ccc;margin-bottom:10px;margin-left:10px}.rate-list .rate-list-name[data-v-004ba0ae]{color:#fff}.rate-list .el-row .el-col-24[data-v-004ba0ae]{text-align:left}.notice-list .el-alert__content[data-v-004ba0ae],.notice-list .el-alert__title[data-v-004ba0ae]{font-size:18px!important;font-weight:bolder;line-height:25px!important}",""])},Ci1v:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"请支付开户费用",visible:e.needPayAccountOpenFeeVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%"},on:{"update:visible":function(t){e.needPayAccountOpenFeeVisible=t}}},[a("el-alert",{attrs:{title:"您需要先支付开户费用进行开户",type:"warning",center:"","show-icon":""}}),e._v(" "),a("add-recharge",{attrs:{type:3,amount:e.needPayAccountOpenAmount,"amount-disabled":1}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isMainAccount,expression:"isMainAccount"}],staticStyle:{width:"90%","margin-left":"50px"}},[a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-shoppingCard"},[a("svg-icon",{attrs:{"icon-class":"shoppingCard","class-name":"card-panel-icon"}})],1),e._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[e._v("今日充值")]),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[e._v(e._s(e.rechargeToday.amount))])]),e._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("成功笔数")]),a("p",[e._v(e._s(e.rechargeToday.total))])])])])])]),e._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),e._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[e._v("今日代付")]),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[e._v(e._s(e.remitToday.amount_success))])]),e._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("成功笔数")]),a("p",[e._v(e._s(e.remitToday.total_success))])]),e._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("失败笔数")]),a("p",[e._v(e._s(e.remitToday.total_fail))])]),e._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center"}},[a("p",[e._v("失败金额")]),a("p",[e._v(e._s(e.remitToday.amount_fail))])])])])])])],1),e._v(" "),a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-shoppingCard"},[a("svg-icon",{attrs:{"icon-class":"shoppingCard","class-name":"card-panel-icon"}})],1),e._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[e._v("昨日充值")]),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[e._v(e._s(e.rechargeYesterday.amount))])]),e._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("成功笔数")]),a("p",[e._v(e._s(e.rechargeYesterday.total))])])])])])]),e._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),e._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[e._v("昨日代付")]),e._v(" "),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[e._v(e._s(e.remitYesterday.amount_success))])]),e._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("成功笔数")]),a("p",[e._v(e._s(e.remitYesterday.total_success))])]),e._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[e._v("失败笔数")]),a("p",[e._v(e._s(e.remitYesterday.total_fail))])]),e._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center"}},[a("p",[e._v("失败金额")]),a("p",[e._v(e._s(e.remitYesterday.amount_fail))])])])])])])],1)],1),e._v(" "),10!=e.user.group_id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.isMainAccount,expression:"isMainAccount"}],staticClass:"rate-list",staticStyle:{width:"90%","margin-left":"50px","margin-bottom":"20px"}},[a("h4",{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px","line-height":"25px"},attrs:{title:"费率列表"}},[e._v("费率列表")]),e._v(" "),a("el-row",{staticStyle:{"text-align":"left"},attrs:{gutter:10}},[a("el-col",{attrs:{span:24,align:"center"}},[a("el-button",{attrs:{type:"success"}},[a("span",{staticClass:"rate-list-name"},[e._v("出款费率")]),e._v(":"+e._s(e.remit_fee))]),e._v(" "),e._l(e.rate,function(t,n){return t.rate>0?a("el-button",{key:n,attrs:{type:1==t.status?"success":"warning"}},[a("span",{staticClass:"rate-list-name"},[e._v(e._s(t.name))]),e._v(":"+e._s(t.rate))]):e._e()})],2)],1)],1):e._e(),e._v(" "),a("el-row",{staticStyle:{"margin-left":"50px","line-height":"60px",width:"90%"},attrs:{gutter:20}},[a("h4",{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px","line-height":"25px"},attrs:{title:"最新公告"}},[e._v("\n          最新公告\n      ")]),e._v(" "),a("el-tabs",{staticClass:"notice-list",staticStyle:{height:"300px"},attrs:{"tab-position":"left"}},e._l(e.notice,function(t,n){return a("el-tab-pane",{key:n,staticStyle:{height:"300px",overflow:"auto","line-height":"18px"},attrs:{label:t.title},domProps:{innerHTML:e._s(t.content)},on:{click:function(a){e.content=t.content}}})}))],1),e._v(" "),30==e.user.group_id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.isMainAccount,expression:"isMainAccount"}],staticStyle:{width:"90%","margin-left":"50px","margin-bottom":"20px"}},[a("h4",{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px","line-height":"25px"},attrs:{title:"费率列表"}},[e._v("充值/代付统计图")]),e._v(" "),a("el-row",{staticStyle:{"text-align":"left",background:"#fff","margin-bottom":"32px"},attrs:{gutter:10}},[a("el-col",{attrs:{span:12,align:"center"}},[a("charge-trend-hour-chart",{attrs:{"chart-data":e.lineChartData}})],1),e._v(" "),a("el-col",{attrs:{span:12,align:"center"}},[a("charge-trend-hour-chart",{attrs:{"chart-data":e.chargeRemitData}})],1)],1)],1):e._e(),e._v(" "),a("el-row",{staticStyle:{"margin-left":"50px","line-height":"60px",width:"90%","background-color":"#eee",color:"#333"},attrs:{gutter:20}},[a("el-col",{attrs:{span:6,align:"center"}},[e._v("最后登陆时间")]),e._v(" "),a("el-col",{attrs:{span:6}},[e._v(e._s(e.user.last_login_time))]),e._v(" "),a("el-col",{attrs:{span:6,align:"center"}},[e._v("最后登陆IP")]),e._v(" "),a("el-col",{attrs:{span:6}},[e._v(e._s(e.user.last_login_ip))])],1)],1)},r=[],i={render:n,staticRenderFns:r};t.a=i},E4LH:function(e,t,a){"use strict";function n(e,t,a){/^[0-9A-Za-z_-]{6,24}$/.test(t)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function r(e){return/^1[0-9]{10}$/.test(e)}function i(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function s(e){return/^[a-z]+$/.test(e)}function o(e){return/^[A-Z]+$/.test(e)}function l(e){return/^[A-Za-z]+$/.test(e)}function c(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=n,t.isMobile=r,t.validateURL=i,t.validateLowerCase=s,t.validateUpperCase=o,t.validateAlphabets=l,t.validateEmail=c},FsdM:function(e,t,a){var n=a("Bcg3");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("579cc82e",n,!0)},IXrb:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".grid-content[data-v-d7f9542c]{width:100%;padding-top:10px;padding-bottom:10px}.el-form-item-input[data-v-d7f9542c]{width:50%}.pay_type_radio .el-radio--small.is-bordered[data-v-d7f9542c]{margin-top:5px}",""])},KX1c:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("XLwt"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);a("0xDb");a("tcAE");var i={title:{text:""},xAxis:[{data:[],boundaryGap:!1,axisTick:{show:!1}},{name:"",type:"value"}],grid:{left:"3%",right:"4%",bottom:"3%",top:"20%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},padding:[20,10]},toolbox:{feature:{saveAsImage:{}}},yAxis:[{axisTick:{show:!1}},{name:"金额(元)",type:"value"}],legend:{data:[]},series:[]};t.default={props:{className:{type:String,default:"chart"},width:{type:String,default:"95%"},height:{type:String,default:"500px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){var t=i;t.legend.data=e.name,t.series=e.data,t.xAxis[0].data=e.x_data,t.title.text=e.title,this.chart.clear(),this.chart.setOption(t)}}},mounted:function(){this.initChart()},methods:{setOptions:function(e){var t=i;t.legend.data=e.name,t.series=e.data,t.xAxis[0].data=e.x_data,t.title.text=e.title,this.chart.setOption(t)},initChart:function(){this.chart=r.default.init(this.$el,"macarons"),this.setOptions(this.chartData)}}}},YQUN:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a("NYxO"),a("3pLw")),i=n(r),s=a("X2Oc"),o=(n(s),a("E4LH"),a("M4fF"));n(o);t.default={name:"addRecharge",components:{},props:{type:{type:Number,default:1},amount:{default:0},amountDisabled:{default:1}},data:function(){return{commonForm:{type:this.type,amount:this.amount,method:"WYNC",amountDisabled:"1"==this.amountDisabled},dialogAvatarVisible:!1,showStepOneBtn:!0,cashierUrl:"",methodOptions:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1,showNotice:!1}},computed:{},methods:{getFormOptions:function(){self=this,i.default.post("/account/my-recharge-method-list",{all:0,type:self.type}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.methodOptions=e.data},function(e){self.$message.error({message:e.message})})},onSubmit:function(){self=this,self.showStepOneBtn=!0,this.$refs.commonForm.validate(function(e){if(!e)return self.$message.error("信息填写错误！"),self.showStepOneBtn=!1,!1;var t=self.commonForm;return t.method?t.method?(self.isLoading=!0,void i.default.post("/order/add",t).then(function(e){if(self.isLoading=!1,0==e.code&&void 0!==e.data.cashier_url&&""!=e.data.cashier_url)return self.cashierUrl=e.data.cashier_url,self.showStepOneBtn=!1,void(self.showNotice=!0);self.$message.error("失败:"+e.message)})):void self.$message.error("请填写充值金额！"):void self.$message.error("请选择充值方式！")})}},created:function(){this.getFormOptions()}}},bPRz:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a("fZjL"),i=n(r),s=a("8r3d"),o=n(s),l=a("p7fR"),c=n(l),d=(a("NYxO"),a("3pLw")),p=n(d),u=a("X2Oc"),m=(n(u),{line:[],xAxis:[],legend:"近7天订单金额"}),g={line:[],xAxis:[],legend:"近7天订单数量"};t.default={name:"dashboardIndex",components:{addRecharge:o.default,ChargeTrendHourChart:c.default},computed:{},data:function(){return{groupPanel:{},listLoading:!1,lineChartOrderCountData:m,lineChartOrderMoneyData:g,notice:{},noticeVisible:!1,content:null,user:{},rate:{},remit_fee:null,payMethodOptions:{},needPayAccountOpenFeeVisible:!1,needPayAccountOpenFee:!1,needPayAccountOpenAmount:0,isMainAccount:!1,lineChartData:{name:[],chartsData:[],days:[],title:""},lineChartType:{charge:"充值",remit:"代付"},chargeRemitData:{name:[],chartsData:[],days:[],title:""},rechargeToday:{amount:null,total:null,fee_amount:null},rechargeYesterday:{amount:null,total:null,fee_amount:null},remitToday:{amount_success:null,total_success:null,total_fail:null,amount_fail:null},remitYesterday:{amount_success:null,total_success:null,total_fail:null,amount_fail:null}}},methods:{go:function(e){this.$router.push({path:e})},getInitData:function(){var e=this;e.listLoading=!0,p.default.post("/dashboard/index").then(function(t){if(e.listLoading=!1,0!=t.code)e.$message.error({message:t.message});else{e.groupPanel=t.data.groupPanel,e.isMainAccount=t.data.isMainAccount,e.user=t.data.user,e.notice=t.data.notice,e.notice.length>0&&(e.noticeVisible=!0,e.content=e.notice[0].content);for(var a in t.data.rate)0==t.data.rate[a].rate&&(t.data.rate[a].rate=0);e.rate=t.data.rate,e.remit_fee=t.data.remit_fee,e.payMethodOptions=t.data.payMethodOptions,e.needPayAccountOpenFee=t.data.needPayAccountOpenFee,e.needPayAccountOpenFee&&(e.noticeVisible=!1,e.needPayAccountOpenFeeVisible=!0,e.needPayAccountOpenAmount=parseInt(t.data.needPayAccountOpenAmount))}},function(t){e.$message.error({message:t.message})}),p.default.post("/dashboard/recharge-total",{times:"today"}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.rechargeToday=t.data},function(t){e.$message.error({message:t.message})}),p.default.post("/dashboard/recharge-total",{times:"yesterday"}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.rechargeYesterday=t.data},function(t){e.$message.error({message:t.message})}),p.default.post("/dashboard/remit-total",{times:"today"}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.remitToday=t.data},function(t){e.$message.error({message:t.message})}),p.default.post("/dashboard/remit-total",{times:"yesterday"}).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):e.remitYesterday=t.data},function(t){e.$message.error({message:t.message})})},getChartData:function(){var e=this;p.default.post("/admin/echarts/charge-remit-trend-merchant").then(function(t){e.lineChartData={name:[],data:[],x_data:[],title:""};var a={name:[],data:[],x_data:[],title:"当天充值、代付统计"};for(var n in t.data.charts){var r={name:e.lineChartType[n],type:"line",data:[],areaStyle:{normal:{}}};for(var s in t.data.hour)r.data.push(t.data.charts[n][t.data.hour[s]]);a.name.push(e.lineChartType[n]),a.data.push(r)}for(var o in t.data.hour)a.x_data.push(t.data.hour[o]+"时");e.$set(e,"lineChartData",a),e.chargeRemitData={name:[],data:[],x_data:[],title:""};var l={name:[],data:[],x_data:[],title:"近7天充值、代付统计"};for(var c in t.data.merchant){var d={name:e.lineChartType[c],type:"line",data:[],areaStyle:{normal:{}}};l.x_data=(0,i.default)(t.data.merchant[c]);for(var p in t.data.merchant[c])d.data.push(t.data.merchant[c][p]);l.name.push(e.lineChartType[c]),l.data.push(d)}e.$set(e,"chargeRemitData",l)})}},created:function(){this.getInitData(),this.getChartData()}}},l3Z5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"dashboard-container"},[a("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{model:e.commonForm,"label-width":"180px"}},[a("h4",{staticClass:"title"}),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"金额",prop:"amount"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{disabled:e.commonForm.amountDisabled},model:{value:e.commonForm.amount,callback:function(t){e.$set(e.commonForm,"amount",t)},expression:"commonForm.amount"}})],1),e._v(" "),e.showNotice?a("el-alert",{attrs:{title:"请点击继续支付按钮,并在在弹出窗口进行支付.如果浏览器没有弹窗,请检查浏览器设置.",type:"error",center:"","show-icon":""}}):e._e()],1)])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.showStepOneBtn,expression:"showStepOneBtn"}],staticStyle:{margin:"0 auto"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("申请充值订单")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:""!=e.cashierUrl,expression:"cashierUrl!=''"}],staticStyle:{width:"250px"},attrs:{href:e.cashierUrl,target:"_blank"}},[a("el-button",{attrs:{type:"danger"}},[e._v("点击按钮进行支付")])],1)],1)],1)])],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};t.a=i},p7fR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("KX1c"),r=a.n(n),i=a("urUa"),s=a("VU/8"),o=s(r.a,i.a,!1,null,null,null);t.default=o.exports},sFR0:function(e,t,a){var n=a("IXrb");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("6e7a42ce",n,!0)},urUa:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className,style:{height:e.height,width:e.width}})},r=[],i={render:n,staticRenderFns:r};t.a=i}});