webpackJsonp([59],{"4KNx":function(e,t,a){"use strict";function r(e){a("Amz1")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("JByi"),i=a.n(s),o=a("cBKF"),n=a("VU/8"),l=r,m=n(i.a,o.a,!1,l,"data-v-c59d2344",null);t.default=m.exports},Amz1:function(e,t,a){var r=a("WYL/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("5e8e9590",r,!0)},JByi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("3pLw"),s=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"vue_merchant_detail",data:function(){return{userInfo:{},methods:{},listLoading:!0,merchantId:null,rateVisible:!1,statusVisible:!1,quotaVisible:!1,emailVisible:!1,ipVisible:!1,agentVisible:!1,methodStatus:{},payMethodsOptions:{},agentOptions:[],company:{type:0},rateForm:{channel_id:null,remit_channel_id:null,parent_agent_id:null,remit_fee:0,pay_methods:{}},quotaForm:{remit_quota_perday:0,recharge_quota_perday:0,remit_quota_pertime:0,recharge_quota_pertime:0},userStatusOptions:{},statusForm:{oldStatus:null,newStatus:null},emailForm:{oldEmail:null,newEmail:null},ipForm:{app_server_ips:null,app_server_domains:null},apiVisible:!1,apiForm:{allow_api_fast_remit:"1",allow_api_recharge:"1",allow_api_remit:"1",allow_manual_recharge:"1",allow_manual_remit:"1"},agentId:null,channelOptions:{}}},created:function(){this.getInitData()},filters:{numberFormat:function(e){return e||(e=0),e=Number(e).toFixed(6)}},methods:{getInitData:function(){var e=this;e.listLoading=!0,e.merchantId=this.$route.query.merchantId,s.default.post("/admin/user/detail",{merchantId:e.merchantId}).then(function(t){if(e.listLoading=!1,0!=t.code)e.$message.error({message:t.message});else{e.userInfo=t.data.userInfo,e.methods=t.data.methods,e.channelOptions=t.data.channelOptions,e.userStatusOptions=t.data.userStatusOptions,e.agentOptions=t.data.agentOptions,e.payMethodsOptions=t.data.payMethodsOptions;var a={};for(var r in t.data.methods.status)a[r]=t.data.methods.status[r].toString();e.methodStatus=a,e.apiForm.user_id=e.userInfo.id,e.apiForm.allow_api_fast_remit=e.userInfo.allow_api_fast_remit+"",e.apiForm.allow_api_recharge=e.userInfo.allow_api_recharge+"",e.apiForm.allow_api_remit=e.userInfo.allow_api_remit+"",e.apiForm.allow_manual_recharge=e.userInfo.allow_manual_recharge+"",e.apiForm.allow_manual_remit=e.userInfo.allow_manual_remit+""}})},handleResetLoginPass:function(){var e=this,t=this;t.$confirm("此操作将重置用户密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={merchantId:e.userInfo.id,type:5};s.default.post("/admin/user/clear-unbind-update",a).then(function(e){0==e.code?t.$message.success({message:"登录密码重置成功"}):(t.$message.error({message:e.message}),t.getInitData())})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},handleClearPass:function(){var e=this;if(this.userInfo.financial_password_hash_len<=0)return void this.$message.error({message:"该商户还没有设置资金密码"});var t=this;t.$confirm("此操作将清除资金密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={merchantId:e.userInfo.id,type:1};s.default.post("/admin/user/clear-unbind-update",a).then(function(e){0==e.code?t.$message.success({message:"资金密码已清除"}):(t.$message.error({message:e.message}),t.getInitData())})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},handleUnbind:function(){var e=this;if(this.userInfo.key_2fa_len<=0)return void this.$message.error({message:"该商户还没有绑定安全令牌"});var t=this;t.$confirm("此操作将清解绑安全令牌, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={merchantId:e.userInfo.id,type:2};s.default.post("/admin/user/clear-unbind-update",t).then(function(t){0==t.code?e.$message.success({message:"安全令牌已解绑"}):(e.$message.error({message:t.message}),e.getInitData())})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},handleSetRate:function(){this.rateForm.remit_fee=this.userInfo.remit_fee,this.rateForm.channel_id=this.userInfo.channel_account_id,this.rateForm.remit_channel_id=this.userInfo.remit_channel_account_id,this.rateForm.parent_agent_id=this.userInfo.parent_agent_id;for(var e in this.methods.rate)this.rateForm.pay_methods[e]=this.methods.rate[e];this.rateVisible=!0},updateRate:function(){var e=this;if(e.rateForm.remit_fee<e.userInfo.parent_remit_fee)return void this.$message.error({message:"出款费率不能小于上级"});if(e.userInfo.lower_remit_fee>0&&e.rateForm.remit_fee>e.userInfo.lower_remit_fee)return void this.$message.error({message:"出款费率不能大于下级"});var t=[],a=0;for(var r in e.rateForm.pay_methods){var i=e.rateForm.pay_methods[r];"1"!=e.methodStatus[r]||e.checkRate(i,r)||(a=1),t.push({id:r,rate:i,status:e.methodStatus[r]})}if(1==a)return void e.$message.error({message:"有收款费率错误！请检查"});if(0==t.length)return void e.$message.error({message:"请填写收款费率！"});var o={merchantId:e.userInfo.id,channelId:e.rateForm.channel_id,remitChannelId:e.rateForm.remit_channel_account_id,parent_agent_id:e.rateForm.parent_agent_id,remit_fee:e.rateForm.remit_fee,appSecrets:e.rateForm.app_secrets,pay_methods:t,remitQuotaPerday:e.rateForm.remit_quota_perday,rechargeQuotaPerday:e.rateForm.recharge_quota_perday,rechargeQuotaPertime:e.rateForm.recharge_quota_pertime,remitQuotaPertime:e.rateForm.remit_quota_pertime};s.default.post("/admin/user/update-rate",o).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.getInitData(),e.$message.success({message:"编辑成功"}),e.rateVisible=!1)})},updateApi:function(){var e=this;s.default.post("/admin/user/update-api",e.apiForm).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"更新成功"}),e.rateVisible=!1)})},handleBindIp:function(){this.ipVisible=!0,this.ipForm.app_server_ips=this.userInfo.app_server_ips,this.ipForm.app_server_domains=this.userInfo.app_server_domains},updateIps:function(){var e=this;if(e.ipForm.app_server_ips.length<1||e.ipForm.app_server_domains.length<1)return e.$message.error({message:"ip,或者域名不能为空"}),!1;if(e.ipForm.app_server_ips.length>0)for(var t=e.ipForm.app_server_ips.split(";"),a=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,r=0;r<t.length;r++)if(!a.test(t[r]))return e.$message.error({message:"有IP地址格式不正确，请检查"}),!1;if(e.ipForm.app_server_domains.length>0)for(var i=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,o=e.ipForm.app_server_domains.split(";"),n=0;n<o.length;n++)if(!i.test(o[n]))return e.$message.error({message:"有域名格式不正确，请检查"}),!1;var l={merchantId:e.userInfo.id,channelId:e.userInfo.channel_account_id,app_server_ips:t,app_server_domains:o};s.default.post("/admin/user/bind-ips",l).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"修改状态成功"}),e.getInitData(),e.ipVisible=!1)})},handleAgent:function(){var e=this;if(0==e.agentOptions.length)return void e.$message.error({message:"没有上级代理可切换"});e.agentVisible=!0},handleCheangeAgent:function(){var e=this;if(null==e.agentId)return void e.$message.error({message:"没有选择代理"});var t=[];for(var a in e.methods.rate)t.push({id:a,rate:e.methods.rate[a],status:e.methodStatus[a]});var r={merchantId:e.userInfo.id,agentId:e.agentId,pay_methods:t,remit_fee:e.userInfo.remit_fee,channelId:e.userInfo.channel_account_id};s.default.post("/admin/user/change-agent",r).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"切换成功"}),e.getInitData(),e.agentId=null,e.agentVisible=!1)})},handleUserStatus:function(){this.statusVisible=!0,this.statusForm.oldStatus=this.statusForm.newStatus=this.userInfo.status.toString()},updateUserStatus:function(){var e=this;if(e.statusForm.newStatus==e.statusForm.oldStatus)return e.statusVisible=!1;var t={status:e.statusForm.newStatus,merchantId:e.userInfo.id,type:3};s.default.post("/admin/user/clear-unbind-update",t).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"修改状态成功"}),e.getInitData(),e.statusVisible=!1)})},handleQuota:function(){var e=this;e.quotaForm.remit_quota_perday=e.userInfo.remit_quota_perday,e.quotaForm.recharge_quota_perday=e.userInfo.recharge_quota_perday,e.quotaForm.remit_quota_pertime=e.userInfo.remit_quota_pertime,e.quotaForm.recharge_quota_pertime=e.userInfo.recharge_quota_pertime,e.quotaVisible=!0},updateQuota:function(){var e=this;if(e.quotaForm.remit_quota_pertime>e.quotaForm.remit_quota_perday)return void e.$message.error({message:"单次提款额度不能大于单日提款额度"});if(e.quotaForm.recharge_quota_pertime>e.quotaForm.recharge_quota_perday)return void e.$message.error({message:"单次充值额度不能大于单日充值额度"});var t={merchantId:e.userInfo.id,remit_quota_perday:e.quotaForm.remit_quota_perday,recharge_quota_perday:e.quotaForm.recharge_quota_perday,remit_quota_pertime:e.quotaForm.remit_quota_pertime,recharge_quota_pertime:e.quotaForm.recharge_quota_pertime,channel_account_id:e.userInfo.channel_account_id};s.default.post("/admin/user/update-quota",t).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"修改额度成功"}),e.getInitData(),e.quotaVisible=!1)})},handleUpdateUserEmail:function(){this.emailVisible=!0,this.emailForm.oldEmail=this.emailForm.newEmail=this.userInfo.email},updateEmail:function(){var e=this,t=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;if(null!=e.emailForm.newEmail&&!t.test(e.emailForm.newEmail))return e.$message.error({message:"邮箱格式错误"}),!1;if(e.emailForm.oldEmail==e.emailForm.newEmail)return e.emailVisible=!1;var a={email:e.emailForm.newEmail,merchantId:e.userInfo.id,type:4};s.default.post("/admin/user/clear-unbind-update",a).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.$message.success({message:"修改状态成功"}),e.getInitData(),e.statusVisible=!1)})},onMethodStatusChange:function(e){},checkRate:function(e,t){var a=this;return this.methodStatus[t]=e>0?"1":"0",e<a.methods.min_rate[t]&&"1"==a.methodStatus[t]?void a.$message.error({message:a.methods.name[t]+"费率小于上级"}):!(a.methods.max_rate[t]>0&&e>a.methods.max_rate[t]&&"1"==a.methodStatus[t])||void a.$message.error({message:a.methods.name[t]+"费率大于下级"})}}}},"WYL/":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".dashboard-editor-container[data-v-c59d2344]{padding:32px}.dashboard-editor-container .chart-wrapper[data-v-c59d2344]{background:#fff;padding:16px 16px 0;margin-bottom:32px}.dashboard-editor-container .authorised_amount[data-v-c59d2344]{padding:5px 10px;background-color:#ecf8ff;border-radius:4px;border-left:5px solid #50bfff}.dashboard-editor-container .authorised_amount b[data-v-c59d2344],.dashboard-editor-container .authorised_amount span[data-v-c59d2344]{display:inline-block;padding-left:5px}.dashboard-editor-container .authorised_amount b[data-v-c59d2344]{color:#f56c6c}.dashboard-editor-container .el-row[data-v-c59d2344]{margin-bottom:20px}.dashboard-editor-container .el-row[data-v-c59d2344]:last-child{margin-bottom:0}.dashboard-editor-container .el-col[data-v-c59d2344]{border-radius:4px}",""])},cBKF:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"dashboard-editor-container",staticStyle:{"margin-left":"50px","font-size":"12px"},attrs:{"element-loading-text":"数据加载中，请稍候..."}},[e._m(0,!1,!1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("商户编号：")]),a("span",[e._v(e._s(e.userInfo.id))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("登陆名：")]),a("span",[e._v(e._s(e.userInfo.username))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("商户类型：")]),a("span",[e._v(e._s(e.userInfo.group_name))])])])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("邮箱：")]),a("span",[e._v(e._s(e.userInfo.email))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("创建时间：")]),a("span",[e._v(e._s(e.userInfo.created_at))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("状态：")]),a("span",[e._v(e._s(e.userInfo.status_name))])])])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("支持API下发：")]),a("span",[e._v(e._s(e.userInfo.allow_api_remit))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("支持后台下发：")]),a("span",[e._v(e._s(e.userInfo.allow_manual_remit))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("出款费率(元/笔)：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.remit_fee)))])])])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("下发总额度：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.remit_quota_perday)))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("收款总额度：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.recharge_quota_perday)))])])])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("总资产：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.asset)))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("冻结资产：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.frozen_balance)))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("可用余额：")]),a("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.balance)))])])])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("资金密码设置：")]),a("span",[e._v(e._s(e.userInfo.is_financial))])])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v("安全令牌绑定：")]),a("span",[e._v(e._s(e.userInfo.is_key_2fa))])])])],1),e._v(" "),e.userInfo.agent?a("span",[a("h4",[e._v("代理")]),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24},domProps:{textContent:e._s(e.userInfo.agent)}})],1)],1):e._e(),e._v(" "),e._m(1,!1,!1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2,align:"right"}},[a("span",[e._v("支付类型")])]),e._v(" "),e._l(e.methods.name,function(t,r){return a("el-col",{key:r,attrs:{span:1,align:"center"},domProps:{textContent:e._s(t)}})})],2),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2,align:"right"}},[a("span",[e._v("收款费率")])]),e._v(" "),e._l(e.methods.rate,function(t,r){return a("el-col",{key:r,attrs:{span:1,align:"center"}},[e._v("\n            "+e._s(e._f("numberFormat")(t))+"\n        ")])})],2),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2,align:"right"}},[a("span",[e._v("类型状态")])]),e._v(" "),e._l(e.methods.status_name,function(t,r){return a("el-col",{key:r,attrs:{span:1,align:"center"}},[e._v("\n            "+e._s(t)+"\n        ")])})],2),e._v(" "),e._m(2,!1,!1),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleResetLoginPass}},[e._v("重置登录密码")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClearPass}},[e._v("清除资金密码")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleUnbind}},[e._v("解绑安全令牌")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSetRate}},[e._v("设置费率")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleBindIp}},[e._v("绑定API接口IP")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.apiVisible=!0}}},[e._v("收款出款接口开关")])],1),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleUserStatus}},[e._v("修改商户状态")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAgent}},[e._v("切换上级代理")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleUpdateUserEmail}},[e._v("修改商户邮箱")])],1),e._v(" "),a("el-dialog",{attrs:{title:"设置费率",visible:e.rateVisible,width:"53%"},on:{"update:visible":function(t){e.rateVisible=t}}},[a("el-form",{attrs:{model:e.rateForm}},[a("el-form-item",{attrs:{label:"出款手续费(元/每笔)：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.rateForm.remit_fee,callback:function(t){e.$set(e.rateForm,"remit_fee",t)},expression:"rateForm.remit_fee"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("可填区间")]),e._v(" "),a("span",{domProps:{textContent:e._s(e.userInfo.parent_remit_fee)}}),e._v(" ~\n                "),e.userInfo.lower_remit_fee>0?a("span",{domProps:{textContent:e._s(e.userInfo.lower_remit_fee)}}):a("span")],1),e._v(" "),e._l(e.payMethodsOptions,function(t,r){return a("el-form-item",{key:r,attrs:{"label-width":"180px",label:t+"："}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},on:{change:function(t){e.checkRate(e.rateForm.pay_methods[r],r)}},model:{value:e.rateForm.pay_methods[r],callback:function(t){e.$set(e.rateForm.pay_methods,r,t)},expression:"rateForm.pay_methods[key]"}}),e._v(" "),a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},on:{change:function(t){e.onMethodStatusChange(r)}},model:{value:e.methodStatus[r],callback:function(t){e.$set(e.methodStatus,r,t)},expression:"methodStatus[key]"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("可填区间")]),e._v(" "),a("span",{domProps:{textContent:e._s(e.methods.min_rate[r])}}),e._v(" ~\n                "),e.methods.max_rate[r]>0?a("span",{domProps:{textContent:e._s(e.methods.max_rate[r])}}):a("span")],1)})],2),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.rateVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.updateRate}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改商户状态",visible:e.statusVisible,width:"40%"},on:{"update:visible":function(t){e.statusVisible=t}}},[e._l(e.userStatusOptions,function(t,r){return a("el-radio",{key:r,attrs:{label:r},model:{value:e.statusForm.newStatus,callback:function(t){e.$set(e.statusForm,"newStatus",t)},expression:"statusForm.newStatus"}},[e._v(e._s(t))])}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.statusVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateUserStatus}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"修改商户额度",visible:e.quotaVisible,width:"40%"},on:{"update:visible":function(t){e.quotaVisible=t}}},[[a("el-form",{attrs:{model:e.quotaForm}},[a("el-form-item",{attrs:{label:"单日提款限额：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.quotaForm.remit_quota_perday,callback:function(t){e.$set(e.quotaForm,"remit_quota_perday",t)},expression:"quotaForm.remit_quota_perday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单日充值限额：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.quotaForm.recharge_quota_perday,callback:function(t){e.$set(e.quotaForm,"recharge_quota_perday",t)},expression:"quotaForm.recharge_quota_perday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单次提款限额：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.quotaForm.remit_quota_pertime,callback:function(t){e.$set(e.quotaForm,"remit_quota_pertime",t)},expression:"quotaForm.remit_quota_pertime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单次充值限额：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.quotaForm.recharge_quota_pertime,callback:function(t){e.$set(e.quotaForm,"recharge_quota_pertime",t)},expression:"quotaForm.recharge_quota_pertime"}})],1)],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.quotaVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateQuota}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"修改API开关",visible:e.apiVisible,width:"40%"},on:{"update:visible":function(t){e.apiVisible=t}}},[[a("el-form",{attrs:{model:e.apiForm}},[a("el-form-item",{attrs:{label:"支持api接口不审核快速出款：","label-width":"180px"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.apiForm.allow_api_fast_remit,callback:function(t){e.$set(e.apiForm,"allow_api_fast_remit",t)},expression:"apiForm.allow_api_fast_remit"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"支持接口充值：","label-width":"180px"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.apiForm.allow_api_recharge,callback:function(t){e.$set(e.apiForm,"allow_api_recharge",t)},expression:"apiForm.allow_api_recharge"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"支持接口提款：","label-width":"180px"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.apiForm.allow_api_remit,callback:function(t){e.$set(e.apiForm,"allow_api_remit",t)},expression:"apiForm.allow_api_remit"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"支持手工充值：","label-width":"180px"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.apiForm.allow_manual_recharge,callback:function(t){e.$set(e.apiForm,"allow_manual_recharge",t)},expression:"apiForm.allow_manual_recharge"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"支持手工提款：","label-width":"180px"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.apiForm.allow_manual_remit,callback:function(t){e.$set(e.apiForm,"allow_manual_remit",t)},expression:"apiForm.allow_manual_remit"}})],1)],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.apiVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateApi}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"修改商户邮箱",visible:e.emailVisible,width:"40%"},on:{"update:visible":function(t){e.emailVisible=t}}},[[a("el-form",{attrs:{model:e.quotaForm}},[a("el-form-item",{attrs:{label:"邮箱：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",type:"email"},model:{value:e.emailForm.newEmail,callback:function(t){e.$set(e.emailForm,"newEmail",t)},expression:"emailForm.newEmail"}})],1)],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.emailVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateEmail}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"修改商户邮箱",visible:e.ipVisible,width:"40%"},on:{"update:visible":function(t){e.ipVisible=t}}},[[a("el-form",{attrs:{model:e.ipForm}},[a("p",{staticStyle:{color:"red"}},[e._v("提示：IP，域名有多个 以英文符号分号(;) 分隔")]),e._v(" "),a("el-form-item",{attrs:{label:"API接口IP地址：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",type:"textarea",rows:3},model:{value:e.ipForm.app_server_ips,callback:function(t){e.$set(e.ipForm,"app_server_ips",t)},expression:"ipForm.app_server_ips"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"API接口域名：","label-width":"180px"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",type:"textarea",rows:3},model:{value:e.ipForm.app_server_domains,callback:function(t){e.$set(e.ipForm,"app_server_domains",t)},expression:"ipForm.app_server_domains"}})],1)],1)],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.ipVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateIps}},[e._v("确 定")])],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"切换上级代理",visible:e.agentVisible,width:"25%"},on:{"update:visible":function(t){e.agentVisible=t}}},[[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.agentId,callback:function(t){e.agentId=t},expression:"agentId"}},e._l(e.agentOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})}))],e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.agentVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleCheangeAgent}},[e._v("确 定")])],1)],2)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("h4",[e._v("商户基本信息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("h4",[e._v("支付类型--费率")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("h4",[e._v("基本信息相关权限")])])}],i={render:r,staticRenderFns:s};t.a=i}});