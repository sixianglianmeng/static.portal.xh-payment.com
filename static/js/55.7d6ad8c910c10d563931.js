webpackJsonp([55],{"1K2K":function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=(a("NYxO"),a("3pLw")),r=o(i),s=a("X2Oc"),l=(o(s),a("E4LH")),n=a("M4fF");o(n);t.default={name:"vue_merchant_add",components:{},data:function(){return{commonForm:{id:0,username:"",nickname:"",email:"",status:"10",group_id:"20",recharge_rate:{},remit_fee:"",parentMerchantAccount:"",recharge_quota_pertime:"",remit_quota_pertime:"",channel:"",remit_channel:"",pay_method:[],allow_api_recharge:"1",allow_manual_recharge:"1",allow_api_remit:"1",allow_manual_remit:"1",allow_api_fast_remit:"1"},rules:{username:[{required:!0,trigger:"blur",validator:l.isvalidUsername}],status:[{required:!0,trigger:"blur",message:"请选择账户状态"}],remit_fee:[{required:!0,trigger:"blur",message:"请输入结算手续费"}],recharge_rate:[{required:!0,trigger:"blur",message:"请输入收款手续费率"}],pay_method:[{required:!0,trigger:"blur",message:"请输入结算手续费"}]},saveBtnTitle:"",dialogAvatarVisible:!1,submitBtnDisableStatus:!1,checkAll:!1,channelList:[],statusOptions:[],typeOptions:[],methodStatus:{},payTypeOptions:[],payMethods:[],payMethodNames:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1}},computed:{},methods:{handleCheckAllMethodChange:function(e){this.commonForm.pay_method=e?this.payMethodNames:[],this.isIndeterminate=!1},handleCheckedMethodChange:function(e){var t=e.length;this.checkAll=t===this.payMethods.length,this.isIndeterminate=t>0&&t<this.payMethods.length},onRechargeRateChange:function(e){this.commonForm.recharge_rate[e]>0?this.methodStatus[e]="1":this.methodStatus[e]="0"},selectRemit:function(e){},selectPayType:function(e){this.getChannelList()},selectChannel:function(e){return},getAccountDetail:function(e){self=this,r.default.post("/user/detail",{id:e}).then(function(e){if(0!=e.code)self.$message.error({message:e.message});else{var t={};for(var a in e.data)t[a]=e.data[a];var o=[];for(var i in self.privsListInit)if(t.privs.indexOf(self.privsListInit[i].id)>=0){var r=self.privsListInit[i];r.checked=!0,self.privsList.push(r)}else self.privsList.push(self.privsListInit[i]);t.privs=o,t.status=t.status+"",self.commonForm=t,console.log(self.commonForm.status)}},function(e){self.$message.error({message:e.message})})},getFormOptions:function(){self=this,r.default.post("/admin/user/form-option-list",{all:0}).then(function(e){if(0!=e.code)self.$message.error({message:e.message});else{self.statusOptions=e.data.user_status,self.typeOptions=e.data.user_type;var t={};for(var a in e.data.pay_method)t[a]="0",self.commonForm.recharge_rate[a]=0;self.methodStatus=t,self.payTypeOptions=e.data.pay_method}},function(e){self.$message.error({message:e.message})})},getChannelList:function(){self=this,self.isLoading=!0,r.default.post("/admin/channel/get-account-list",{pay_type:self.commonForm.pay_method}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.channelList=e.data,self.isLoading=!1},function(e){self.$message.error({message:e.message}),self.isLoading=!1})},onSubmit:function(){var e=this;self=this,this.$refs.commonForm.validate(function(t){if(!t)return self.$message.error("信息填写错误！"),self.submitBtnDisableStatus=!1,!1;var a=self.commonForm,o=[];for(var i in a.recharge_rate){var s=a.recharge_rate[i];o.push({id:i,rate:s,status:self.methodStatus[i]})}return 0==o.length?void self.$message.error("请填写收款费率！"):30==a.group_id&&""==a.parentMerchantAccount?void self.$message.error("商户帐号必须指定上级代理！"):(a.pay_method=o,self.submitBtnDisableStatus=!0,r.default.post("/admin/user/edit",a).then(function(t){0==t.code?(self.$message.success(self.saveBtnTitle+"成功！"),e.$router.push({name:"vue_merchant_list"})):(self.$message.error(self.saveBtnTitle+"失败:"+t.message),self.submitBtnDisableStatus=!1)}),void 0)})}},created:function(){this.getFormOptions(),this.getChannelList(),void 0!==this.$route.params.id&&(this.commonForm.id=this.$route.params.id),void 0===this.$route.query.id||this.commonForm.id||(this.commonForm.id=this.$route.query.id),this.commonForm.id>0?(this.isNewRecord=!1,this.saveBtnTitle="编辑帐号",this.getAccountDetail(this.commonForm.id)):(this.isNewRecord=!0,this.saveBtnTitle="添加帐号")}}},"4ErP":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{rules:e.rules,model:e.commonForm,"label-width":"180px"}},[a("h4",{staticClass:"title"}),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",{attrs:{label:"账户类型",prop:"group_id"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.group_id,callback:function(t){e.$set(e.commonForm,"group_id",t)},expression:"commonForm.group_id"}},e._l(e.typeOptions,function(t,o){return a("el-radio",{key:o,attrs:{label:o,value:o,border:""}},[e._v(e._s(t))])})),e._v(" "),a("div",{staticClass:"el_item_tips"},[e._v("账户类型为商户时必须指定上级代理")])],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"上级商户帐号",prop:"parentMerchantAccount"}},[a("el-input",{model:{value:e.commonForm.parentMerchantAccount,callback:function(t){e.$set(e.commonForm,"parentMerchantAccount",t)},expression:"commonForm.parentMerchantAccount"}})],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"登录名",prop:"username"}},[a("el-input",{model:{value:e.commonForm.username,callback:function(t){e.$set(e.commonForm,"username",t)},expression:"commonForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账户状态",prop:"status"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.status,callback:function(t){e.$set(e.commonForm,"status",t)},expression:"commonForm.status"}},e._l(e.statusOptions,function(t,o){return a("el-radio",{key:o,attrs:{label:o,value:o,border:""}},[e._v(e._s(t))])}))],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"结算手续费(元/笔)",prop:"remit_fee"}},[a("el-input",{model:{value:e.commonForm.remit_fee,callback:function(t){e.$set(e.commonForm,"remit_fee",t)},expression:"commonForm.remit_fee"}})],1),e._v(" "),a("el-row",{staticClass:"bg-purple"},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el-form-item-input el_item_2col",attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{model:{value:e.commonForm.nickname,callback:function(t){e.$set(e.commonForm,"nickname",t)},expression:"commonForm.nickname"}})],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input el_item_2col",attrs:{label:"邮件地址",prop:"email"}},[a("el-input",{model:{value:e.commonForm.email,callback:function(t){e.$set(e.commonForm,"email",t)},expression:"commonForm.email"}})],1),e._v(" "),a("el-form-item",{staticClass:"el_item_2col el-form-item-input",attrs:{label:"收款单笔限额",prop:"remit_quota_pertime"}},[a("el-input",{attrs:{placeholder:"0或不填表示以渠道为准"},model:{value:e.commonForm.remit_quota_pertime,callback:function(t){e.$set(e.commonForm,"remit_quota_pertime",t)},expression:"commonForm.remit_quota_pertime"}})],1),e._v(" "),a("el-form-item",{staticClass:"el_item_2col el-form-item-input",attrs:{label:"结算单笔限额",prop:"recharge_quota_pertime"}},[a("el-input",{attrs:{placeholder:"0或不填表示以渠道为准"},model:{value:e.commonForm.recharge_quota_pertime,callback:function(t){e.$set(e.commonForm,"recharge_quota_pertime",t)},expression:"commonForm.recharge_quota_pertime"}})],1)],1)],1),e._v(" "),a("el-row",{staticClass:"bg-purple"},[a("el-col",{attrs:{span:24}},e._l(e.payTypeOptions,function(t,o){return a("el-form-item",{key:o,staticClass:"el_item_2col",attrs:{label:t}},[a("el-input",{staticStyle:{width:"150px"},attrs:{prop:"pay_method",placeholder:"请输入手续费率"},on:{change:function(t){e.onRechargeRateChange(o)}},model:{value:e.commonForm.recharge_rate[o],callback:function(t){e.$set(e.commonForm.recharge_rate,o,t)},expression:"commonForm.recharge_rate[key]"}}),e._v(" "),a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.methodStatus[o],callback:function(t){e.$set(e.methodStatus,o,t)},expression:"methodStatus[key]"}})],1)}))],1),e._v(" "),a("el-row",{staticClass:"bg-purple"},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el_item_2col",attrs:{label:"允许接口收款",prop:"allow_api_recharge"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"允许","inactive-text":"不允许","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.commonForm.allow_api_recharge,callback:function(t){e.$set(e.commonForm,"allow_api_recharge",t)},expression:"commonForm.allow_api_recharge"}})],1),e._v(" "),a("el-form-item",{staticClass:"el_item_2col",attrs:{label:"允许接口结算",prop:"allow_api_remit"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"允许","inactive-text":"不允许","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.commonForm.allow_api_remit,callback:function(t){e.$set(e.commonForm,"allow_api_remit",t)},expression:"commonForm.allow_api_remit"}})],1),e._v(" "),a("el-form-item",{staticClass:"el_item_2col",attrs:{label:"允许后台手工充值",prop:"allow_manual_recharge"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"允许","inactive-text":"不允许","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.commonForm.allow_manual_recharge,callback:function(t){e.$set(e.commonForm,"allow_manual_recharge",t)},expression:"commonForm.allow_manual_recharge"}})],1),e._v(" "),a("el-form-item",{staticClass:"el_item_2col",attrs:{label:"允许后台手工出款",prop:"allow_manual_remit"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"允许","inactive-text":"不允许","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.commonForm.allow_manual_remit,callback:function(t){e.$set(e.commonForm,"allow_manual_remit",t)},expression:"commonForm.allow_manual_remit"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接口结算不需审核",prop:"allow_api_fast_remit"}},[a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"允许","inactive-text":"不允许","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.commonForm.allow_api_fast_remit,callback:function(t){e.$set(e.commonForm,"allow_api_fast_remit",t)},expression:"commonForm.allow_api_fast_remit"}})],1)],1)],1)],1)])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",[a("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",disabled:e.submitBtnDisableStatus},on:{click:e.onSubmit}},[e._v(e._s(e.saveBtnTitle))])],1)],1)])],1)],1)],1)},i=[],r={render:o,staticRenderFns:i};t.a=r},E4LH:function(e,t,a){"use strict";function o(e,t,a){/^[0-9A-Za-z_-]{6,24}$/.test(t)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function i(e){return/^1[0-9]{10}$/.test(e)}function r(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function s(e){return/^[a-z]+$/.test(e)}function l(e){return/^[A-Z]+$/.test(e)}function n(e){return/^[A-Za-z]+$/.test(e)}function m(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=o,t.isMobile=i,t.validateURL=r,t.validateLowerCase=s,t.validateUpperCase=l,t.validateAlphabets=n,t.validateEmail=m},eqvM:function(e,t,a){var o=a("l9iR");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("0d2bc153",o,!0)},l9iR:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".grid-content{width:100%;padding-top:20px;padding-bottom:20px}.bg-purple{border-radius:6px;min-height:36px;background:#f8f8ff;padding:15px 0;margin-top:10px}.input-tips{font-size:12px;color:#5e6d82;line-height:1.5em;padding-top:8px;padding-left:10px}.el-form-item-input{width:50%}.pay_type_radio .el-radio--small.is-bordered{margin-top:5px}.el_item_2col{width:45%;display:inline-block}.el_item_tips{display:inline-block;margin-left:20px;color:#909399;font-size:12px}.el-form-item__content{margin-bottom:5px}",""])},vAd6:function(e,t,a){"use strict";function o(e){a("eqvM")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("1K2K"),r=a.n(i),s=a("4ErP"),l=a("VU/8"),n=o,m=l(r.a,s.a,!1,n,null,null);t.default=m.exports}});