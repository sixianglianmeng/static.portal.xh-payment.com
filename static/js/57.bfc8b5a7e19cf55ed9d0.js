webpackJsonp([57],{"+jaw":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(s("NYxO"),s("3pLw")),o=a(r),i=s("X2Oc"),n=(a(i),s("E4LH")),l=s("M4fF");a(l);t.default={name:"vue_sub_account_add",components:{},data:function(){return{commonForm:{id:0,username:"",password:"",group_id:"20",recharge_rate:{},remit_fee:"",parentMerchantAccount:"",recharge_quota_pertime:"",remit_quota_pertime:"",channel:"",remit_channel:"",pay_method:[],allow_api_recharge:"1",allow_manual_recharge:"1",allow_api_remit:"1",allow_manual_remit:"1",allow_api_fast_remit:"1"},rules:{username:[{required:!0,trigger:"blur",validator:n.isvalidUsername}],group_id:[{required:!0,trigger:"blur",message:"请选择账户类型"}],remit_fee:[{required:!0,trigger:"blur",message:"请输入结算手续费"}],recharge_rate:[{required:!0,trigger:"blur",message:"请输入收款手续费率"}],pay_method:[{required:!0,trigger:"blur",message:"请输入结算手续费"}]},saveBtnTitle:"",dialogAvatarVisible:!1,submitBtnDisableStatus:!1,checkAll:!1,channelList:[],typeOptions:[],methodStatus:{},payTypeOptions:[],payMethods:[],payMethodNames:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1}},computed:{},methods:{handleCheckAllMethodChange:function(e){this.commonForm.pay_method=e?this.payMethodNames:[],this.isIndeterminate=!1},handleCheckedMethodChange:function(e){var t=e.length;this.checkAll=t===this.payMethods.length,this.isIndeterminate=t>0&&t<this.payMethods.length},selectRemit:function(e){},selectPayType:function(e){this.getChannelList()},onRechargeRateChange:function(e){this.commonForm.recharge_rate[e]>0?this.methodStatus[e]="1":this.methodStatus[e]="0"},selectChannel:function(e){return},getAccountDetail:function(e){self=this,o.default.post("/user/detail",{id:e}).then(function(e){if(0!=e.code)self.$message.error({message:e.message});else{var t={};for(var s in e.data)t[s]=e.data[s];var a=[];for(var r in self.privsListInit)if(t.privs.indexOf(self.privsListInit[r].id)>=0){var o=self.privsListInit[r];o.checked=!0,self.privsList.push(o)}else self.privsList.push(self.privsListInit[r]);t.privs=a,t.status=t.status+"",self.commonForm=t,console.log(self.commonForm.status)}},function(e){self.$message.error({message:e.message})})},getFormOptions:function(){var e=this;o.default.post("/account/form-option-list",{all:0}).then(function(t){if(0!=t.code)e.$message.error({message:t.message});else{e.typeOptions=t.data.user_type;var s={};for(var a in t.data.pay_method)s[a]="0",e.commonForm.recharge_rate[a]=0;e.methodStatus=s,e.payTypeOptions=t.data.pay_method}},function(t){e.$message.error({message:t.message})})},getChannelList:function(){self=this,self.isLoading=!0,o.default.post("/admin/channel/get-account-list",{pay_type:self.commonForm.pay_method}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.channelList=e.data,self.isLoading=!1},function(e){self.$message.error({message:e.message}),self.isLoading=!1})},onSubmit:function(){var e=this;self=this,self.submitBtnDisableStatus=!0,this.$refs.commonForm.validate(function(t){if(!t)return self.$message.error("信息填写错误！"),self.submitBtnDisableStatus=!1,!1;var s=self.commonForm,a=[];for(var r in s.recharge_rate){var i=s.recharge_rate[r];a.push({id:r,rate:i,status:self.methodStatus[r]})}if(0==a.length)return void self.$message.error("请填写收款费率！");s.pay_method=a,o.default.post("/account/edit",s).then(function(t){0==t.code?(self.$message.success(self.saveBtnTitle+"成功！"),e.$router.push({name:"vue_sub_account_list"})):(self.$message.error(self.saveBtnTitle+"失败:"+t.message),self.submitBtnDisableStatus=!1)})})}},created:function(){this.getFormOptions(),void 0!==this.$route.params.id&&(this.commonForm.id=this.$route.params.id),void 0===this.$route.query.id||this.commonForm.id||(this.commonForm.id=this.$route.query.id),this.commonForm.id>0?(this.isNewRecord=!1,this.saveBtnTitle="编辑帐号",this.getAccountDetail(this.commonForm.id)):(this.isNewRecord=!0,this.saveBtnTitle="添加帐号")}}},"2fFc":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dashboard-container"},[s("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{rules:e.rules,model:e.commonForm,"label-width":"180px"}},[s("h4",{staticClass:"title"}),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:22,offset:1}},[s("div",{staticClass:"grid-content"},[s("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"登录名",prop:"username"}},[s("el-input",{model:{value:e.commonForm.username,callback:function(t){e.$set(e.commonForm,"username",t)},expression:"commonForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"账户类型",prop:"group_id"}},[s("el-radio-group",{attrs:{size:"small"},model:{value:e.commonForm.group_id,callback:function(t){e.$set(e.commonForm,"group_id",t)},expression:"commonForm.group_id"}},e._l(e.typeOptions,function(t,a){return s("el-radio",{key:a,attrs:{label:a,value:a,border:""}},[e._v(e._s(t)+"\n                            ")])}))],1),e._v(" "),s("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"结算手续费(元/笔)",prop:"remit_fee"}},[s("el-input",{model:{value:e.commonForm.remit_fee,callback:function(t){e.$set(e.commonForm,"remit_fee",t)},expression:"commonForm.remit_fee"}})],1),e._v(" "),s("el-row",{staticClass:"bg-purple"},[s("el-col",{attrs:{span:24}},e._l(e.payTypeOptions,function(t,a){return s("el-form-item",{key:a,staticClass:"el_item_2col",attrs:{label:t}},[s("el-input",{staticStyle:{width:"150px"},attrs:{prop:"pay_method",placeholder:"请输入手续费率‰"},on:{change:function(t){e.onRechargeRateChange(a)}},model:{value:e.commonForm.recharge_rate[a],callback:function(t){e.$set(e.commonForm.recharge_rate,a,t)},expression:"commonForm.recharge_rate[key]"}}),e._v(" "),s("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-text":"启用","inactive-text":"停用","active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.methodStatus[a],callback:function(t){e.$set(e.methodStatus,a,t)},expression:"methodStatus[key]"}})],1)}))],1)],1)])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:22,offset:1}},[s("div",{staticClass:"grid-content"},[s("el-form-item",[s("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",disabled:e.submitBtnDisableStatus},on:{click:e.onSubmit}},[e._v(e._s(e.saveBtnTitle))])],1)],1)])],1)],1)],1)},r=[],o={render:a,staticRenderFns:r};t.a=o},"7DgC":function(e,t,s){var a=s("MpW7");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("468161e1",a,!0)},E4LH:function(e,t,s){"use strict";function a(e,t,s){/^[0-9A-Za-z_-]{6,24}$/.test(t)?s():s(new Error("用户名为长度在6-24之间的数字字母"))}function r(e){return/^1[0-9]{10}$/.test(e)}function o(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function i(e){return/^[a-z]+$/.test(e)}function n(e){return/^[A-Z]+$/.test(e)}function l(e){return/^[A-Za-z]+$/.test(e)}function m(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=a,t.isMobile=r,t.validateURL=o,t.validateLowerCase=i,t.validateUpperCase=n,t.validateAlphabets=l,t.validateEmail=m},MpW7:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".grid-content{width:100%;padding-top:20px;padding-bottom:20px}.el-form-item-input{width:50%}.pay_type_radio .el-radio--small.is-bordered{margin-top:5px}.bg-purple{border-radius:6px;min-height:36px;background:#f8f8ff;padding:15px 0;margin-top:10px}.el_item_2col{width:45%;display:inline-block}.el_item_tips{display:inline-block;margin-left:20px;color:#909399;font-size:12px}.el-form-item__content{margin-bottom:5px}",""])},"Xm/l":function(e,t,s){"use strict";function a(e){s("7DgC")}Object.defineProperty(t,"__esModule",{value:!0});var r=s("+jaw"),o=s.n(r),i=s("2fFc"),n=s("VU/8"),l=a,m=n(o.a,i.a,!1,l,null,null);t.default=m.exports}});