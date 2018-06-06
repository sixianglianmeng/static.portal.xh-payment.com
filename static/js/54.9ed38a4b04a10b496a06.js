webpackJsonp([54],{"+jaw":function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a("NYxO"),a("3pLw")),s=o(r),i=a("X2Oc"),l=(o(i),a("E4LH")),m=a("M4fF");o(m);t.default={name:"editStaff",components:{},data:function(){return{commonForm:{id:0,username:"",password:"",group_id:"20",recharge_rate:{},remit_fee:"",parentMerchantAccount:"",recharge_quota_pertime:"",remit_quota_pertime:"",channel:"",remit_channel:"",pay_method:[],allow_api_recharge:"1",allow_manual_recharge:"1",allow_api_remit:"1",allow_manual_remit:"1",allow_api_fast_remit:"1"},rules:{username:[{required:!0,trigger:"blur",validator:l.isvalidUsername}],group_id:[{required:!0,trigger:"blur",message:"请选择账户类型"}],remit_fee:[{required:!0,trigger:"blur",message:"请输入结算手续费"}],recharge_rate:[{required:!0,trigger:"blur",message:"请输入收款手续费率"}],pay_method:[{required:!0,trigger:"blur",message:"请输入结算手续费"}]},saveBtnTitle:"",dialogAvatarVisible:!1,submitBtnDisableStatus:!1,checkAll:!1,channelList:[],typeOptions:[],methodStatus:{},payTypeOptions:[],payMethods:[],payMethodNames:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1}},computed:{},methods:{handleCheckAllMethodChange:function(e){this.commonForm.pay_method=e?this.payMethodNames:[],this.isIndeterminate=!1},handleCheckedMethodChange:function(e){var t=e.length;this.checkAll=t===this.payMethods.length,this.isIndeterminate=t>0&&t<this.payMethods.length},selectRemit:function(e){},selectPayType:function(e){this.getChannelList()},selectChannel:function(e){return},getAccountDetail:function(e){self=this,s.default.post("/user/detail",{id:e}).then(function(e){if(0!=e.code)self.$message.error({message:e.message});else{var t={};for(var a in e.data)t[a]=e.data[a];var o=[];for(var r in self.privsListInit)if(t.privs.indexOf(self.privsListInit[r].id)>=0){var s=self.privsListInit[r];s.checked=!0,self.privsList.push(s)}else self.privsList.push(self.privsListInit[r]);t.privs=o,t.status=t.status+"",self.commonForm=t,console.log(self.commonForm.status)}},function(e){self.$message.error({message:e.message})})},getFormOptions:function(){var e=this;s.default.post("/account/form-option-list",{all:0}).then(function(t){if(0!=t.code)e.$message.error({message:t.message});else{e.typeOptions=t.data.user_type;var a={};for(var o in t.data.pay_method)a[o]="1",e.commonForm.recharge_rate[o]=0;e.methodStatus=a,e.payTypeOptions=t.data.pay_method}},function(t){e.$message.error({message:t.message})})},getChannelList:function(){self=this,self.isLoading=!0,s.default.post("/admin/channel/get-account-list",{pay_type:self.commonForm.pay_method}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.channelList=e.data,self.isLoading=!1},function(e){self.$message.error({message:e.message}),self.isLoading=!1})},onSubmit:function(){var e=this;self=this,self.submitBtnDisableStatus=!0,this.$refs.commonForm.validate(function(t){if(!t)return self.$message.error("信息填写错误！"),self.submitBtnDisableStatus=!1,!1;var a=self.commonForm,o=[];for(var r in a.recharge_rate){var i=a.recharge_rate[r];o.push({id:r,rate:i,status:self.methodStatus[r]})}if(0==o.length)return void self.$message.error("请填写收款费率！");a.pay_method=o,s.default.post("/account/edit",a).then(function(t){0==t.code?(self.$message.success(self.saveBtnTitle+"成功！"),e.$router.push({name:"vue_sub_account_list"})):(self.$message.error(self.saveBtnTitle+"失败:"+t.message),self.submitBtnDisableStatus=!1)})})}},created:function(){this.getFormOptions(),void 0!==this.$route.params.id&&(this.commonForm.id=this.$route.params.id),void 0===this.$route.query.id||this.commonForm.id||(this.commonForm.id=this.$route.query.id),this.commonForm.id>0?(this.isNewRecord=!1,this.saveBtnTitle="编辑帐号",this.getAccountDetail(this.commonForm.id)):(this.isNewRecord=!0,this.saveBtnTitle="添加帐号")}}},"3Tmw":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{rules:e.rules,model:e.commonForm,"label-width":"180px"}},[a("h4",{staticClass:"title"}),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"登录名",prop:"username"}},[a("el-input",{model:{value:e.commonForm.username,callback:function(t){e.$set(e.commonForm,"username",t)},expression:"commonForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账户类型",prop:"group_id"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.group_id,callback:function(t){e.$set(e.commonForm,"group_id",t)},expression:"commonForm.group_id"}},e._l(e.typeOptions,function(t,o){return a("el-radio",{key:o,attrs:{label:o,value:o,border:""}},[e._v(e._s(t))])}))],1),e._v(" "),e._l(e.payTypeOptions,function(t,o){return a("el-form-item",{key:o,attrs:{label:t}},[a("el-input",{staticStyle:{width:"150px"},attrs:{prop:"pay_method",placeholder:"请输入手续费率‰"},model:{value:e.commonForm.recharge_rate[o],callback:function(t){e.$set(e.commonForm.recharge_rate,o,t)},expression:"commonForm.recharge_rate[key]"}}),e._v(" "),a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.methodStatus[o],callback:function(t){e.$set(e.methodStatus,o,t)},expression:"methodStatus[key]"}})],1)}),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"结算手续费(元/笔)",prop:"remit_fee"}},[a("el-input",{model:{value:e.commonForm.remit_fee,callback:function(t){e.$set(e.commonForm,"remit_fee",t)},expression:"commonForm.remit_fee"}})],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"收款单笔限额",prop:"remit_quota_pertime"}},[a("el-input",{attrs:{placeholder:"0或不填表示以渠道为准"},model:{value:e.commonForm.remit_quota_pertime,callback:function(t){e.$set(e.commonForm,"remit_quota_pertime",t)},expression:"commonForm.remit_quota_pertime"}})],1),e._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"结算单笔限额",prop:"recharge_quota_pertime"}},[a("el-input",{attrs:{placeholder:"0或不填表示以渠道为准"},model:{value:e.commonForm.recharge_quota_pertime,callback:function(t){e.$set(e.commonForm,"recharge_quota_pertime",t)},expression:"commonForm.recharge_quota_pertime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"允许接口收款",prop:"status"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.allow_api_recharge,callback:function(t){e.$set(e.commonForm,"allow_api_recharge",t)},expression:"commonForm.allow_api_recharge"}},[a("el-radio",{attrs:{label:"1"}},[e._v("允许")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不允许")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"允许接口结算",prop:"allow_api_remit"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.allow_api_remit,callback:function(t){e.$set(e.commonForm,"allow_api_remit",t)},expression:"commonForm.allow_api_remit"}},[a("el-radio",{attrs:{label:"1"}},[e._v("允许")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不允许")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"允许后台手工充值",prop:"allow_manual_recharge"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.allow_manual_recharge,callback:function(t){e.$set(e.commonForm,"allow_manual_recharge",t)},expression:"commonForm.allow_manual_recharge"}},[a("el-radio",{attrs:{label:"1"}},[e._v("允许")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不允许")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"允许后台手工出款",prop:"allow_manual_remit"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.allow_manual_remit,callback:function(t){e.$set(e.commonForm,"allow_manual_remit",t)},expression:"commonForm.allow_manual_remit"}},[a("el-radio",{attrs:{label:"1"}},[e._v("允许")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不允许")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"接口结算不需审核",prop:"allow_api_fast_remit"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.allow_api_fast_remit,callback:function(t){e.$set(e.commonForm,"allow_api_fast_remit",t)},expression:"commonForm.allow_api_fast_remit"}},[a("el-radio",{attrs:{label:"1"}},[e._v("允许")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不允许")])],1)],1)],2)])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",[a("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",disabled:e.submitBtnDisableStatus},on:{click:e.onSubmit}},[e._v(e._s(e.saveBtnTitle))])],1)],1)])],1)],1)],1)},r=[],s={render:o,staticRenderFns:r};t.a=s},A3Kr:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".grid-content{width:100%;padding-top:20px;padding-bottom:20px}.input-tips{font-size:12px;color:#5e6d82;line-height:1.5em;padding-top:8px;padding-left:10px}.el-form-item-input{width:50%}.pay_type_radio .el-radio--small.is-bordered{margin-top:5px}",""])},E4LH:function(e,t,a){"use strict";function o(e,t,a){/^[0-9A-Za-z_-]{6,24}$/.test(t)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function r(e){return/^1[0-9]{10}$/.test(e)}function s(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function i(e){return/^[a-z]+$/.test(e)}function l(e){return/^[A-Z]+$/.test(e)}function m(e){return/^[A-Za-z]+$/.test(e)}function n(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=o,t.isMobile=r,t.validateURL=s,t.validateLowerCase=i,t.validateUpperCase=l,t.validateAlphabets=m,t.validateEmail=n},"Xm/l":function(e,t,a){"use strict";function o(e){a("i9Ye")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("+jaw"),s=a.n(r),i=a("3Tmw"),l=a("VU/8"),m=o,n=l(s.a,i.a,!1,m,null,null);t.default=n.exports},i9Ye:function(e,t,a){var o=a("A3Kr");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("50cd6fca",o,!0)}});