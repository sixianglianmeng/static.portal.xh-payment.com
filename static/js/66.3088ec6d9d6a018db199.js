webpackJsonp([66],{"8r3d":function(e,t,a){"use strict";function o(e){a("sFR0")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("YQUN"),r=a.n(s),n=a("l3Z5"),i=a("VU/8"),l=o,d=i(r.a,n.a,!1,l,"data-v-d7f9542c",null);t.default=d.exports},E4LH:function(e,t,a){"use strict";function o(e,t,a){/^[0-9A-Za-z_-]{6,24}$/.test(t)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function s(e){return/^1[0-9]{10}$/.test(e)}function r(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function n(e){return/^[a-z]+$/.test(e)}function i(e){return/^[A-Z]+$/.test(e)}function l(e){return/^[A-Za-z]+$/.test(e)}function d(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=o,t.isMobile=s,t.validateURL=r,t.validateLowerCase=n,t.validateUpperCase=i,t.validateAlphabets=l,t.validateEmail=d},IXrb:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".grid-content[data-v-d7f9542c]{width:100%;padding-top:10px;padding-bottom:10px}.el-form-item-input[data-v-d7f9542c]{width:50%}.pay_type_radio .el-radio--small.is-bordered[data-v-d7f9542c]{margin-top:5px}",""])},YQUN:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=(a("NYxO"),a("3pLw")),r=o(s),n=a("X2Oc"),i=(o(n),a("E4LH"),a("M4fF"));o(i);t.default={name:"addRecharge",components:{},props:{type:{type:Number,default:1},amount:{default:0},amountDisabled:{default:1}},data:function(){return{commonForm:{type:this.type,amount:this.amount,method:"WYNC",amountDisabled:"1"==this.amountDisabled},dialogAvatarVisible:!1,showStepOneBtn:!0,cashierUrl:"",methodOptions:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1,showNotice:!1}},computed:{},methods:{getFormOptions:function(){self=this,r.default.post("/account/my-recharge-method-list",{all:0,type:self.type}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.methodOptions=e.data},function(e){self.$message.error({message:e.message})})},onSubmit:function(){self=this,self.showStepOneBtn=!0,this.$refs.commonForm.validate(function(e){if(!e)return self.$message.error("信息填写错误！"),self.showStepOneBtn=!1,!1;var t=self.commonForm;return t.method?t.method?(self.isLoading=!0,void r.default.post("/order/add",t).then(function(e){if(self.isLoading=!1,0==e.code&&void 0!==e.data.cashier_url&&""!=e.data.cashier_url)return self.cashierUrl=e.data.cashier_url,self.showStepOneBtn=!1,void(self.showNotice=!0);self.$message.error("失败:"+e.message)})):void self.$message.error("请填写充值金额！"):void self.$message.error("请选择充值方式！")})}},created:function(){this.getFormOptions()}}},l3Z5:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"dashboard-container"},[a("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{model:e.commonForm,"label-width":"180px"}},[a("h4",{staticClass:"title"}),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"金额",prop:"amount"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{disabled:e.commonForm.amountDisabled},model:{value:e.commonForm.amount,callback:function(t){e.$set(e.commonForm,"amount",t)},expression:"commonForm.amount"}})],1),e._v(" "),e.showNotice?a("el-alert",{attrs:{title:"请点击继续支付按钮,并在在弹出窗口进行支付.如果浏览器没有弹窗,请检查浏览器设置.",type:"error",center:"","show-icon":""}}):e._e()],1)])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.showStepOneBtn,expression:"showStepOneBtn"}],staticStyle:{margin:"0 auto"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("申请充值订单")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:""!=e.cashierUrl,expression:"cashierUrl!=''"}],staticStyle:{width:"250px"},attrs:{href:e.cashierUrl,target:"_blank"}},[a("el-button",{attrs:{type:"danger"}},[e._v("点击按钮进行支付")])],1)],1)],1)])],1)],1)],1)},s=[],r={render:o,staticRenderFns:s};t.a=r},sFR0:function(e,t,a){var o=a("IXrb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("6e7a42ce",o,!0)}});