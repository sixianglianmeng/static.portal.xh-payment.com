webpackJsonp([16],{"0xDb":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var s=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;"object"===(void 0===e?"undefined":(0,_.default)(e))?a=e:(10===(""+e).length&&(e=1e3*parseInt(e)),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return s.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var s=i[t];return"a"===t?["一","二","三","四","五","六","日"][s-1]:(e.length>0&&s<10&&(s="0"+s),s||0)})}function n(e,t){e=1e3*+e;var s=new Date(e),a=Date.now(),n=(a-s)/1e3;return n<30?"刚刚":n<3600?Math.ceil(n/60)+"分钟前":n<86400?Math.ceil(n/3600)+"小时前":n<172800?"1天前":t?i(e,t):s.getMonth()+1+"月"+s.getDate()+"日"+s.getHours()+"时"+s.getMinutes()+"分"}function l(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),s={},a=/([^?&=]+)=([^?&=]*)/g;return t.replace(a,function(e,t,a){var i=decodeURIComponent(t),n=decodeURIComponent(a);return n=String(n),s[i]=n,e}),s}function o(e){for(var t=0,s=0;s<e.length;s++)null!=e[s].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function r(e){for(var t=[],s=0;s<e.length;s++)e[s]&&t.push(e[s]);return t}function c(e){return e?r((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function m(e,t){return"object"!==(void 0===e?"undefined":(0,_.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(s){var a=t[s];"object"===(void 0===a?"undefined":(0,_.default)(a))?e[s]=m(e[s],a):e[s]=a}),e)}function p(e,t,s){if(!(s<=0)){var a=t-e.scrollTop,i=a/s*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&p(e,t,s-10)},10)}}function f(e,t){if(e&&t){var s=e.className,a=s.indexOf(t);-1===a?s+=""+t:s=s.substr(0,a)+s.substr(a+t.length),e.className=s}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,s){var a=void 0,i=void 0,n=void 0,l=void 0,o=void 0,r=function r(){var c=+new Date-l;c<t&&c>0?a=setTimeout(r,t-c):(a=null,s||(o=e.apply(n,i),a||(n=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];n=this,l=+new Date;var d=s&&!a;return a||(a=setTimeout(r,t)),d&&(o=e.apply(n,c),n=c=null),o}}function h(e){if(!e&&"object"!==(void 0===e?"undefined":(0,_.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(s){e[s]&&"object"===(0,_.default)(e[s])?(t[s]=e[s].constructor===Array?[]:{},t[s]=h(e[s])):t[s]=e[s]}),t}function y(e){return s("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var b=s("fZjL"),w=a(b),k=s("pFYg"),_=a(k);t.parseTime=i,t.formatTime=n,t.getQueryObject=l,t.getByteLen=o,t.cleanArray=r,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=m,t.scrollTo=p,t.toggleClass=f,t.getTime=v,t.debounce=g,t.deepClone=h,t.getVersion=y;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,s=new Date((new Date).toDateString());t.setTime(s.getTime()),e.$emit("pick",[s,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),s=new Date;s.setTime(t.getTime()-6048e5),e.$emit("pick",[s,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),s=new Date;s.setTime(s.getTime()-2592e6),e.$emit("pick",[s,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),s=new Date;s.setTime(s.getTime()-7776e6),e.$emit("pick",[s,t])}}]},"2jeF":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),n=a(i),l=s("Dd8w"),o=a(l),r=s("cAgV"),c=a(r),u=(s("0xDb"),s("X2Oc")),d=a(u),m=s("3pLw"),p=a(m),f=s("NYxO");t.default={name:"vue_admin_remit_list",directives:{waves:c.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,uploadUrl:d.default.pageMap.baseDomain+"/upload/upload",listQuery:{page:1,limit:10,importance:void 0,dateStart:new Date((new Date).setHours(0,0,0,0)),dateEnd:new Date((new Date).setHours(23,59,59,0)),orderNo:null,merchantOrderNo:null,channelOrderNo:null,status:null,bankAccount:null,bankNo:null,minMoney:null,maxMoney:null,merchantNo:null,merchantAccount:null,channelAccount:null,idList:[],sort:"",type:"",export:0,exportType:""},summery:{amount:0},trackVisible:!1,trackForm:{id:void 0,type:"2",upload:[],note:"",upload_url:[]},tableKey:0,constFalse:!1,constTrue:!0,channelAccountOptions:[],statusOptions:[],currentRemit:{},dialogSwitchRemitVisible:!1,remitIdSwitchTo:"",bankCardTodayStatisticList:[],bankCardTodayStatisticLoading:!1,canCheckRemitStatus:0,autoCommitStatus:{id:null,title:null,content:null},orderTypes:{0:"全部",1:"API",2:"后台"},autoCommitStatusVisible:!1,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},filters:{},created:function(){this.getList()},mounted:function(){},updated:function(){},computed:(0,o.default)({},(0,f.mapGetters)(["roles","uid","user"])),methods:{getList:function(){var e=this;e.listLoading=!0;for(var t in e.listQuery)"__ALL__"==e.listQuery[t]&&(e.listQuery[t]="");p.default.post("/remit/list",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.data,e.summery=t.data.summery,e.autoCommitStatus=t.data.remitAutoCommitStatus,e.total=t.data.pagination.total,e.statusOptions=t.data.condition.statusOptions,e.channelAccountOptions=t.data.condition.channelAccountOptions)},function(t){e.listLoading=!1,e.$message.error({message:t.message})})},showDetail:function(e,t){},getBankCardTodayStatistic:function(e){self=this,self.bankCardTodayStatisticList=[],self.bankCardTodayStatisticLoading=!0,p.default.post("/admin/remit/bank-card-today-statistic",{cardNo:e.bank_no}).then(function(e){self.bankCardTodayStatisticLoading=!1,0!=e.code?self.$message.error({message:e.message}):self.bankCardTodayStatisticList=e.data},function(e){self.$message.error({message:e.message})})},exportResult:function(e){self=this,self.listQuery.export=1,self.listQuery.exportType=e;var t=d.default.pageMap.baseDomain+"/remit/list?access-token="+d.default.getToken(),s=JSON.parse((0,n.default)(self.listQuery));d.default.downloadFile(t,s),self.$message.success({message:"文件已导出"}),self.listQuery.export=0,self.listQuery.exportType=""},showNotifyRet:function(e){this.$alert(e.notify_ret,"商户服务器响应内容",{confirmButtonText:"确定",callback:function(e){}})},getSummaries:function(e){var t=e.columns,s=(e.data,[]);return t.forEach(function(e,t){if(0===t)return void(s[t]="总计");s[t]="N/A"}),s[3]=this.summery.amount+"元",s},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)},handleSelectionChange:function(e){var t=this;t.multipleSelection=e,t.listQuery.idList=[],t.multipleSelection.forEach(function(e){t.listQuery.idList.push(e.id)})},checkNumber:function(){var e=/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;e.test(this.listQuery.minMoney)||(this.listQuery.minMoney=""),e.test(this.listQuery.maxMoney)||(this.listQuery.maxMoney="")},handleTrack:function(e){this.trackVisible=!0,this.trackForm.id=e.id},createTrack:function(){self=this,p.default.post("/admin/track/add",{parentId:self.trackForm.id,parentType:"remit",type:self.trackForm.type,upload:self.trackForm.upload,note:self.trackForm.note}).then(function(e){0!=e.code?self.$message.error({message:e.message}):(self.trackVisible=!1,self.trackForm={id:void 0,type:"1",upload:[],note:"",upload_url:[]},self.$refs.track_upload.clearFiles())})},handleUpload:function(e,t,s){this.trackForm.upload.push(e.data.url.filepath),this.trackForm.upload_url.push(e.data.url.host+e.data.url.filepath)},handleStatus:function(e){e.id},setSuccess:function(e){self=this,self.$confirm("此操作将设置订单成功, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){p.default.post("/admin/remit/set-success",{id:e.id}).then(function(t){0!=t.code?self.$message.error({message:t.message}):(self.$message.success({message:t.message}),e.status=20,self.getList())},function(e){self.$message.error({message:e.message})})})},setAutoCommitStatus:function(){return self=this,null==self.autoCommitStatus.title?void self.$message.error({message:"配置项名称不能为空"}):null==self.autoCommitStatus.content?void self.$message.error({message:"配置内容不能为空"}):void p.default.post("/admin/site-config/add",self.autoCommitStatus).then(function(e){0==e.code?(self.$message.success({message:"操作成功"}),self.getList(),self.autoCommitStatusVisible=!1):self.$message.error({message:e.message})})},setFail:function(e){self=this,self.$confirm("此操作将设置订单为失败并退款, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){p.default.post("/admin/remit/set-fail",{id:e.id}).then(function(t){0!=t.code?self.$message.error({message:t.message}):(self.$message.success({message:t.message}),e.status=20,self.getList())},function(e){self.$message.error({message:e.message})})})},setChecked:function(e){self=this;var t=self.listQuery.idList;e&&(t=[e]),p.default.post("/admin/remit/set-checked",{idList:t}).then(function(e){0!=e.code?self.$message.error({message:e.message}):(self.$message.success({message:e.message}),self.getList())},function(e){self.$message.error({message:e.message})})},reSubmit:function(e){self=this;var t="此操作将重新提交订单到上游, 是否继续?";e||(t="此操作将把搜索出的所有订单批量重新提交到上游, 是否继续?"),self.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=JSON.parse((0,n.default)(self.listQuery));e&&(t.idList=[e]),self.listLoading=!0,p.default.post("/admin/remit/re-submit-to-bank",t).then(function(e){self.listLoading=!1,0!=e.code?self.$message.error({message:e.message}):(self.$message.success({message:e.message}),self.getList())},function(e){self.$message.error({message:e.message})})})},syncStatus:function(e){self=this,self.$confirm("此操作将到上游实时同步状态并根据状态处理订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){p.default.post("/admin/remit/sync-status",{id:e}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.$message.success({message:e.message})},function(e){self.$message.error({message:e.message})})})},syncStatusRealtime:function(e){self=this,p.default.post("/admin/remit/sync-status-realtime",{id:e}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.$alert(e.message,"提示",{dangerouslyUseHTMLString:!0,customClass:"remit-sync-alert"}).then(function(){self.getList()})},function(e){self.$message.error({message:e.message})})},switchRemit:function(e){self=this;var t=self.listQuery.idList;if(e&&(t=[e]),!t)return void self.$message.error({message:"请选择出款渠道"});p.default.post("/admin/remit/switch-channel-account",{id:t,channelAccountId:self.remitIdSwitchTo}).then(function(e){0!=e.code?self.$alert(e.message,"错误提示",{confirmButtonText:"确定",type:"error"}):(self.$message.success({message:"通道切换成功"}),self.dialogSwitchRemitVisible=!1,self.currentRemit={},self.remitIdSwitchTo="",self.getList())},function(e){self.$message.error({message:e.message})})},addToBlackList:function(e){var t=this;t.$confirm("此此订单的银行卡加入黑名单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var s=[];s=e?[e.id]:t.listQuery.idList,t.listLoading=!0,p.default.post("/admin/remit/add-blacklist",{idList:s}).then(function(s){t.listLoading=!1,0!=s.code?t.$message.error({message:s.message}):(t.$message.success({message:s.message}),e.status=30,t.getList())},function(e){t.listLoading=!1,t.$message.error({message:e.message})})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})}}}},"4dwi":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container calendar-list-container"},[s("div",{staticClass:"filter-container"},[s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"结算订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.orderNo,callback:function(t){e.$set(e.listQuery,"orderNo",t)},expression:"listQuery.orderNo"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantOrderNo,callback:function(t){e.$set(e.listQuery,"merchantOrderNo",t)},expression:"listQuery.merchantOrderNo"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"凭证"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.channelOrderNo,callback:function(t){e.$set(e.listQuery,"channelOrderNo",t)},expression:"listQuery.channelOrderNo"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户编号"},model:{value:e.listQuery.merchantNo,callback:function(t){e.$set(e.listQuery,"merchantNo",t)},expression:"listQuery.merchantNo"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户账号"},model:{value:e.listQuery.merchantAccount,callback:function(t){e.$set(e.listQuery,"merchantAccount",t)},expression:"listQuery.merchantAccount"}}),e._v(" "),s("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"通道号",multiple:""},model:{value:e.listQuery.channelAccount,callback:function(t){e.$set(e.listQuery,"channelAccount",t)},expression:"listQuery.channelAccount"}},e._l(e.channelAccountOptions,function(e,t){return s("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"卡号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.bankNo,callback:function(t){e.$set(e.listQuery,"bankNo",t)},expression:"listQuery.bankNo"}}),e._v(" "),s("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"状态",multiple:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e,t){return s("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),s("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"类型"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.orderTypes,function(e,t){return s("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),s("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",align:"right",type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v(" "),s("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",align:"right",type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"金额"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.minMoney,callback:function(t){e.$set(e.listQuery,"minMoney",t)},expression:"listQuery.minMoney"}}),e._v("\n      -\n      "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small"},nativeOn:{change:function(t){e.checkNumber()}},model:{value:e.listQuery.maxMoney,callback:function(t){e.$set(e.listQuery,"maxMoney",t)},expression:"listQuery.maxMoney"}}),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索\n      ")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"search"},on:{click:function(t){e.exportResult("csv")}}},[e._v("\n        导出CSV\n      ")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:function(t){e.setChecked()}}},[e._v("批量审核")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:function(t){e.dialogSwitchRemitVisible=!0}}},[e._v("批量切通道")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"warning"},on:{click:function(t){e.reSubmit()}}},[e._v("批量重提")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"danger"},on:{click:function(t){e.autoCommitStatusVisible=!0}}},[e._v("自动提交开关")])],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","font-size":"12px"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"","summary-method":e.getSummaries,"show-summary":"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{align:"center",fixed:"",type:"selection",width:"55"}}),e._v(" "),s("el-table-column",{attrs:{prop:"merchant_id",label:"商户编号",width:"80"}}),e._v(" "),s("el-table-column",{attrs:{prop:"merchant_account",label:"商户账号",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"order_no",label:"结算订单号",width:"165"}}),e._v(" "),s("el-table-column",{attrs:{prop:"merchant_order_no",label:"商户订单号",width:"160"}}),e._v(" "),s("el-table-column",{attrs:{prop:"bank_account",label:"持卡人",width:"80"}}),e._v(" "),s("el-table-column",{attrs:{prop:"bank_no",label:"卡号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-popover",{directives:[{name:"loading",rawName:"v-loading",value:e.bankCardTodayStatisticLoading,expression:"bankCardTodayStatisticLoading"}],attrs:{placement:"right",title:"该卡今日出款统计",width:"400",trigger:"click"}},[s("el-table",{attrs:{data:e.bankCardTodayStatisticList}},[s("el-table-column",{attrs:{width:"150",property:"status_str",label:"状态"}}),e._v(" "),s("el-table-column",{attrs:{width:"100",property:"nums",label:"数量"}}),e._v(" "),s("el-table-column",{attrs:{width:"100",property:"amount",label:"金额"}})],1),e._v(" "),s("span",{staticClass:"link-type",attrs:{slot:"reference"},on:{click:function(s){e.getBankCardTodayStatistic(t.row)}},slot:"reference"},[e._v(e._s(t.row.bank_no))])],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"channel_account_name",label:"通道",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"amount",label:"金额",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"bank_name",label:"银行",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.bank_code)+"/"+e._s(t.row.bank_name))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"status_str",label:"订单状态",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.bank_ret?s("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[s("span",{staticClass:"link-type"},[e._v(e._s(t.row.status_str))]),e._v(" "),s("span",{attrs:{slot:"content"},domProps:{innerHTML:e._s(t.row.bank_ret)},slot:"content"})]):e._e(),e._v(" "),""==t.row.bank_ret?s("span",[e._v(e._s(t.row.status_str))]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"channel_order_no",label:"凭证",width:"165"}}),e._v(" "),s("el-table-column",{attrs:{prop:"bak",label:"备注",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.bak?s("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[s("span",{staticClass:"link-type"},[e._v("详情")]),e._v(" "),s("span",{attrs:{slot:"content"},domProps:{innerHTML:e._s(t.row.bak)},slot:"content"})]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"type_str",label:"类型",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"merchant_check_status_str",label:"商户审核",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"created_at",label:"建立时间",width:"160"}}),e._v(" "),s("el-table-column",{staticClass:"action-btns",attrs:{align:"center",label:"操作",fixed:"right",width:"220px","class-name":"op-column"},scopedSlots:e._u([{key:"default",fn:function(t){return["未审核"!=t.row.merchant_check_status_str?s("div",[s("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(s){e.syncStatusRealtime(t.row.id)}}},[e._v("同步")]),e._v(" "),-1!==[0,20].indexOf(t.row.status)?s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"mini",icon:"el-icon-zoom-in\n",type:"success"},on:{click:function(s){e.setChecked(t.row.id)}}},[e._v("审核")]):e._e(),e._v(" "),s("el-dropdown",{attrs:{size:"mini"}},[s("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n                更多操作"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"mini"},slot:"dropdown"},[s("el-dropdown-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"success",size:"mini"},nativeOn:{click:function(s){e.setSuccess(t.row)}}},[e._v("成功")])],1),e._v(" "),s("el-dropdown-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"danger",size:"mini"},nativeOn:{click:function(s){e.reSubmit(t.row.id)}}},[e._v("重提")])],1),e._v(" "),s("el-dropdown-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"mini"},nativeOn:{click:function(s){e.handleTrack(t.row)}}},[e._v("录入")])],1),e._v(" "),s("el-dropdown-item",[-1!==[-10,-20,10,20,30,40,60].indexOf(t.row.status)?s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{size:"mini",type:"warning"},on:{click:function(s){e.setFail(t.row)}}},[e._v("退款\n                  ")]):e._e()],1),e._v(" "),s("el-dropdown-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"info",size:"mini"},nativeOn:{click:function(s){e.addToBlackList(t.row)}}},[e._v("拉黑")])],1),e._v(" "),s("el-dropdown-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"danger",size:"mini"},nativeOn:{click:function(s){e.syncStatus(t.row.id)}}},[e._v("强制同步")])],1)],1)],1)],1):e._e()]}}])})],1),e._v(" "),s("el-row",{staticClass:"summary-list"},e._l(e.summery.all_status_list,function(t,a){return s("el-tag",{key:t.status,attrs:{type:"warning"}},[s("span",[e._v(e._s(t.status_str)+":"+e._s(t.amount))])])})),e._v(" "),s("el-dialog",{attrs:{title:"调单录入",visible:e.trackVisible,width:"30%"},on:{"update:visible":function(t){e.trackVisible=t}}},[s("el-form",{attrs:{model:e.trackForm}},[s("el-form-item",{attrs:{label:"调单类型："}},[s("el-radio",{attrs:{label:"1"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("投诉")]),e._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("协查")]),e._v(" "),s("el-radio",{attrs:{label:"3"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("其他")])],1),e._v(" "),s("el-form-item",{attrs:{label:"上传："}},[s("el-upload",{ref:"track_upload",staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,multiple:"",limit:3,"on-success":e.handleUpload}},[e._l(e.trackForm.upload_url,function(t){return e.trackForm.upload_url.length>0?s("img",{staticClass:"avatar",attrs:{src:t}}):e._e()}),e._v(" "),s("i",{staticClass:"el-icon-plus"})],2)],1),e._v(" "),s("el-form-item",{attrs:{label:"备注："}},[s("el-input",{staticStyle:{width:"280px"},attrs:{type:"textarea",rows:3},model:{value:e.trackForm.note,callback:function(t){e.$set(e.trackForm,"note",t)},expression:"trackForm.note"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.trackVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.createTrack}},[e._v("提交")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"切换出款通道",visible:e.dialogSwitchRemitVisible,width:"500px"},on:{"update:visible":function(t){e.dialogSwitchRemitVisible=t}}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"出款通道",width:"200"}},[s("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"请选择出款通道"},model:{value:e.remitIdSwitchTo,callback:function(t){e.remitIdSwitchTo=t},expression:"remitIdSwitchTo"}},e._l(e.channelAccountOptions,function(e,t){return s("el-option",{key:t,attrs:{label:e,value:t}})}))],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogSwitchRemitVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.switchRemit()}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"切换自动提交到上游",visible:e.autoCommitStatusVisible,width:"500px"},on:{"update:visible":function(t){e.autoCommitStatusVisible=t}}},[s("el-form",{attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"提交到上游",width:"200"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启提交","inactive-text":"关闭提交","active-value":"1","inactive-value":"0"},model:{value:e.autoCommitStatus.content,callback:function(t){e.$set(e.autoCommitStatus,"content",t)},expression:"autoCommitStatus.content"}},[e._v("\n          >\n          ")])],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.autoCommitStatusVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.setAutoCommitStatus()}}},[e._v("确 定")])],1)],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[s("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},BFIg:function(e,t,s){var a=s("aAx5");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("1c39a5fe",a,!0)},QUGS:function(e,t,s){"use strict";function a(e){s("BFIg"),s("k8QG")}Object.defineProperty(t,"__esModule",{value:!0});var i=s("2jeF"),n=s.n(i),l=s("4dwi"),o=s("VU/8"),r=a,c=o(n.a,l.a,!1,r,"data-v-16ad6fb8",null);t.default=c.exports},XZlg:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},aAx5:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".remit-sync-alert{width:50%;word-break:break-all}",""])},cAgV:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(n)),i.default.install=n,t.default=i.default},ctMr:function(e,t,s){var a=s("XZlg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("81d72750",a,!0)},jdeu:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(a);s("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(s){var a=(0,i.default)({},t.value),n=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),n.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=s.pageY-o.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=s.pageX-o.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}},!1)}}},k8QG:function(e,t,s){var a=s("kyG+");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("cc7bce78",a,!0)},"kyG+":function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".action-btns a[data-v-16ad6fb8]{margin-left:5px}.el-table td[data-v-16ad6fb8],.el-table th[data-v-16ad6fb8]{padding:0!important}.el-table__row button[data-v-16ad6fb8]{margin-top:5px}.op-column .el-button[data-v-16ad6fb8]{margin:5px}.op-column .cell[data-v-16ad6fb8]{padding-left:0;text-align:left}.summary-list[data-v-16ad6fb8]{margin-top:10px}.summary-list .el-tag+.el-tag[data-v-16ad6fb8]{margin-left:10px}.el-dropdown-menu--mini .el-dropdown-menu__item[data-v-16ad6fb8]{line-height:36px!important;font-size:14px!important}",""])}});