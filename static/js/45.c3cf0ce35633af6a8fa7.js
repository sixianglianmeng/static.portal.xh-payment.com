webpackJsonp([45],{"3eVH":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".login-container{position:relative;background:url("+a("DobU")+') no-repeat;width:100%;height:100%;background-size:100% 100%;position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="../../assets/imgs/login-bg.jpg",sizingMethod="scale")}.login-container input:-webkit-autofill,.login-container input:-webkit-autofill:focus input:-webkit-autofill,.login-container input:-webkit-autofill:hover,.login-container select:-webkit-autofill,.login-container select:-webkit-autofill:focus,.login-container select:-webkit-autofill:hover,.login-container textarea:-webkit-autofill,.login-container textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus{-webkit-text-fill-color:#889aa4;-webkit-box-shadow:0 0 0 1000px snow inset;transition:background-color 5000s ease-in-out 0s}.login-container .el-input__inner{border:1px solid #eee}.login-container input{background-color:rgba(0,0,0,.1);border:0;-webkit-appearance:none;border-radius:0;padding:12px 5px 12px 15px;color:#2d3a4b;height:47px}.login-container .el-input{display:inline-block;height:47px;width:85%}.login-container .tips{font-size:14px;color:#fff;margin-bottom:10px}.login-container .svg-container{padding:6px 5px 6px 15px;color:#889aa4;vertical-align:middle;width:30px;display:inline-block}.login-container .svg-container_login{font-size:20px}.login-container .title{font-size:26px;font-weight:400;color:#1e70bf;margin:0 auto 40px;text-align:center;font-weight:700}.login-container .login-form{position:absolute;left:0;right:0;width:400px;padding:35px 35px 15px;margin:120px auto;margin-right:600px;background-color:#000;background-color:rgba(0,0,0,.2);border-radius:10px;-moz-border-radius:10px}.login-container .el-form-item{border:1px solid hsla(0,0%,100%,.1);border-radius:5px;color:#454545}.login-container .show-pwd{position:absolute;right:10px;top:7px;font-size:16px;color:#889aa4;cursor:pointer;user-select:none;right:20px!important}.login-container .el-form-ul{list-style:none;margin:0;padding:0}.login-container .item-captcha a{margin-left:10px;display:inline-block;color:orange}.login-container .item-captcha img{vertical-align:middle;display:inline-block;margin-top:-2px!important;margin-left:10px!important}.login-container .item-captcha .el-captcha{width:45%!important}.login-container .reg-btns{border:none;background-color:transparent;text-align:center;margin-left:20px}.login-container .reg-btns:first-child{margin-left:0}.login-container .key_2fa input{height:24px;color:#000}',""])},"63Jk":function(e,t,a){var o=a("3eVH");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("5c190ff4",o,!0)},DobU:function(e,t,a){e.exports=a.p+"static/img/login-bg.044bbdd.jpg"},E4LH:function(e,t,a){"use strict";function o(e,t,a){/^[0-9A-Za-z_-]{6,24}$/.test(t)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function i(e){return/^1[0-9]{10}$/.test(e)}function n(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)}function r(e){return/^[a-z]+$/.test(e)}function s(e){return/^[A-Z]+$/.test(e)}function l(e){return/^[A-Za-z]+$/.test(e)}function c(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isvalidUsername=o,t.isMobile=i,t.validateURL=n,t.validateLowerCase=r,t.validateUpperCase=s,t.validateAlphabets=l,t.validateEmail=c},"T+/8":function(e,t,a){"use strict";function o(e){a("63Jk")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("m1D0"),n=a.n(i),r=a("kCFZ"),s=a("VU/8"),l=o,c=s(n.a,r.a,!1,l,null,null);t.default=c.exports},kCFZ:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("h1"),e._v(" "),a("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:e.loginForm,rules:e.loginRules,"label-position":"left"}},[a("h3",{staticClass:"title"},[e._v(e._s(e.siteInfo.siteName)+"登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-container svg-container_login"},[a("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),a("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),a("el-input",{attrs:{name:"password",type:e.pwdType,autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"item-captcha",attrs:{prop:"captchaCode"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"documentation"}})],1),e._v(" "),a("el-input",{staticClass:"el-captcha",attrs:{label:"图片验证码"},model:{value:e.loginForm.captchaCode,callback:function(t){e.$set(e.loginForm,"captchaCode",t)},expression:"loginForm.captchaCode"}}),e._v(" "),e.captchaBase64?a("img",{staticStyle:{"margin-top":"2px","margin-left":"10px"},attrs:{src:e.captchaBase64},on:{click:e.refreshCaptcha}}):e._e(),e._v(" "),e.captchaBase64?a("a",{staticStyle:{color:"#1e70bf"},on:{click:e.refreshCaptcha}},[e._v("刷新")]):e._e()],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12,offset:6}},[a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"安全令牌",visible:e.keyVisible,width:"30%"},on:{"update:visible":function(t){e.keyVisible=t}}},[e._v("\n        令牌码：\n        "),a("el-input",{staticClass:"key_2fa",staticStyle:{border:"1px solid #5a5e66",height:"26px"},model:{value:e.key_2fa,callback:function(t){e.key_2fa=t},expression:"key_2fa"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.keyVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loadingKey},on:{click:e.handleKey}},[e._v("确 定")])],1)],1)],1)},i=[],n={render:o,staticRenderFns:i};t.a=n},m1D0:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("E4LH"),n=a("X2Oc"),r=o(n),s=a("3pLw"),l=o(s);t.default={components:{},name:"login",data:function(){var e=this,t=function(e,t,a){t.length<6?a(new Error("密码不能小于6位")):a()},a=function(t,a,o){/^(\w){4,6}$/.test(a)?(e.validateRet.captchaCode=1,o()):o(new Error("验证码错误:1"))};return{loginForm:{username:"",password:"",captchaCode:"",captchaSid:""},key_2fa:null,userId:null,loginRules:{username:[{required:!0,trigger:"blur",validator:i.isvalidUsername}],password:[{required:!0,trigger:"blur",validator:t}],captchaCode:[{required:!0,trigger:"blur",validator:a}]},pwdType:"password",captchaBase64:"",validateRet:{},loading:!1,loadingKey:!1,showDialog:!1,keyVisible:!1,siteInfo:{siteName:""}}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},refreshCaptcha:function(){var e=this;l.default.post("/captcha/index").then(function(t){0==t.code?(e.captchaBase64=t.data.base64Img,e.loginForm.captchaSid=t.data.sid,console.log("self.loginForm.captchaSid",e.loginForm.captchaSid)):e.$message.error("图片验证码获取失败")})},validateCaptchaCode:function(e,t,a,o){var i=this;if(t.length<4)return void a(new Error("验证码不能小于4位"));l.default.post("/captcha/verify",{captchaCode:t,captchaSid:this.loginForm.captchaSid}).then(function(e){0==e.code?(i.validateRet.captchaCode=1,a()):(i.refreshCaptcha(),a(new Error("验证码错误或已过期")))})},getSiteInfo:function(){var e=this;l.default.post("/util/site-info").then(function(t){0==t.code&&(r.default.setStorage("siteInfo",t.data),void 0!==t.data.siteName&&(document.title=t.data.siteName,e.siteInfo.siteName=t.data.siteName))})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return e.$message.error({message:"信息填写错误2，请检查"}),!1;e.loading=!0,e.$store.dispatch("LoginByUsername",e.loginForm).then(function(t){void 0!==t.data.key_2fa&&t.data.key_2fa.length>0?e.keyVisible=!0:(e.$message.success({message:t.message}),e.loading=!1,setTimeout(function(){window.location.reload()},50))},function(t){console.log("axios post err.",t),e.$message.error({message:t.message}),e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error({message:"信息填写错误1，请检查"})})})},handleKey:function(){var e=this;if(this.loadingKey=!0,6!=this.key_2fa.length)return void this.$message.error({message:"请填写6位安全码"});var t={key_2fa:this.key_2fa};l.default.post("/user/verify-key",t).then(function(t){0==t.code?(e.keyVisible=!1,e.$message.success({message:t.message}),setTimeout(function(){window.location.reload()},50)):(e.$message.error({message:t.message}),e.loadingKey=!1)})}},created:function(){r.default.setDeviceClientId(),this.getSiteInfo(),this.refreshCaptcha()},destroyed:function(){}}}});