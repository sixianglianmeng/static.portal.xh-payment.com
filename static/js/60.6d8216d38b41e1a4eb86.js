webpackJsonp([60],{"8r3d":function(e,t,o){"use strict";function a(e){o("Pmq9")}Object.defineProperty(t,"__esModule",{value:!0});var s=o("YQUN"),r=o.n(s),n=o("x3cX"),i=o("VU/8"),l=a,m=i(r.a,n.a,!1,l,null,null);t.default=m.exports},E4LH:function(e,t,o){"use strict";function a(e,t,o){/^[0-9A-Za-z_-]{6,24}$/.test(t)?o():o(new Error("用户名为长度在6-24之间的数字字母"))}function s(e){return/^1[0-9]{10}$/.test(e)}function r(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function n(e){return/^[a-z]+$/.test(e)}function i(e){return/^[A-Z]+$/.test(e)}function l(e){return/^[A-Za-z]+$/.test(e)}function m(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=a,t.isMobile=s,t.validateURL=r,t.validateLowerCase=n,t.validateUpperCase=i,t.validateAlphabets=l,t.validateEmail=m},Pmq9:function(e,t,o){var a=o("Q15t");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("73a1a579",a,!0)},Q15t:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".grid-content{width:100%;padding-top:10px;padding-bottom:10px}.el-form-item-input{width:50%}.pay_type_radio .el-radio--small.is-bordered{margin-top:5px}",""])},YQUN:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=(o("NYxO"),o("3pLw")),r=a(s),n=o("X2Oc"),i=(a(n),o("E4LH"),o("M4fF"));a(i);t.default={name:"addRecharge",components:{},props:{type:{type:Number,default:1},amount:{default:0},amountDisabled:{default:1}},data:function(){return{commonForm:{type:this.type,amount:this.amount,method:"",amountDisabled:"1"==this.amountDisabled},dialogAvatarVisible:!1,showStepOneBtn:!0,cashierUrl:"",methodOptions:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1,showNotice:!1}},computed:{},methods:{getFormOptions:function(){self=this,r.default.post("/account/my-recharge-method-list",{all:0,type:self.type}).then(function(e){0!=e.code?self.$message.error({message:e.message}):self.methodOptions=e.data},function(e){self.$message.error({message:e.message})})},onSubmit:function(){self=this,self.showStepOneBtn=!0,this.$refs.commonForm.validate(function(e){if(!e)return self.$message.error("信息填写错误！"),self.showStepOneBtn=!1,!1;var t=self.commonForm;return t.method?t.method?(self.isLoading=!0,void r.default.post("/order/add",t).then(function(e){if(self.isLoading=!1,0==e.code&&void 0!==e.data.cashier_url&&""!=e.data.cashier_url)return self.cashierUrl=e.data.cashier_url,self.showStepOneBtn=!1,void(self.showNotice=!0);self.$message.error("失败:"+e.message)})):void self.$message.error("请填写充值金额！"):void self.$message.error("请选择充值方式！")})}},created:function(){this.getFormOptions()}}},x3cX:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"dashboard-container"},[o("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{model:e.commonForm,"label-width":"180px"}},[o("h4",{staticClass:"title"}),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:22,offset:1}},[o("div",{staticClass:"grid-content bg-purple"},[o("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"金额",prop:"amount"}},[o("el-input",{attrs:{disabled:e.commonForm.amountDisabled},model:{value:e.commonForm.amount,callback:function(t){e.$set(e.commonForm,"amount",t)},expression:"commonForm.amount"}})],1),e._v(" "),o("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"请选择支付类型",prop:"method"}},[o("el-select",{staticClass:"filter-item",attrs:{label:"支付类型",placeholder:"支付类型"},model:{value:e.commonForm.method,callback:function(t){e.$set(e.commonForm,"method",t)},expression:"commonForm.method"}},e._l(e.methodOptions,function(e,t){return o("el-option",{key:e.method_id,attrs:{label:e.method_name,value:e.method_id}})}))],1),e._v(" "),e.showNotice?o("el-alert",{attrs:{title:"请点击继续支付按钮,并在在弹出窗口进行支付.如果浏览器没有弹窗,请检查浏览器设置.",type:"error",center:"","show-icon":""}}):e._e()],1)])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:22,offset:1}},[o("div",{staticClass:"grid-content"},[o("el-form-item",[o("el-button",{directives:[{name:"show",rawName:"v-show",value:e.showStepOneBtn,expression:"showStepOneBtn"}],staticStyle:{margin:"0 auto"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("申请充值订单")]),e._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:""!=e.cashierUrl,expression:"cashierUrl!=''"}],staticStyle:{width:"250px"},attrs:{href:e.cashierUrl,target:"_blank"}},[o("el-button",{attrs:{type:"danger"}},[e._v("点击按钮进行支付")])],1)],1)],1)])],1)],1)],1)},s=[],r={render:a,staticRenderFns:s};t.a=r}});