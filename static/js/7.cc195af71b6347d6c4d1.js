webpackJsonp([7],{"+fwG":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];e.default=n},"0On2":function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i("5szV"),o=n(a),s=i("+fwG"),c=n(s),r=i("My32"),l=n(r);e.default={name:"tinymce",components:{editorImage:o.default},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date,fullscreen:!1}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t)})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:l.default,menubar:this.menubar,plugins:c.default,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}},destroyed:function(){this.destroyTinymce()}}},"5aCZ":function(t,e,i){"use strict";function n(t){i("c48H")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("0On2"),o=i.n(a),s=i("L8Hg"),c=i("VU/8"),r=n,l=c(o.a,s.a,!1,r,"data-v-59dc8f14",null);e.default=l.exports},"5szV":function(t,e,i){"use strict";function n(t){i("Fj9w")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("bau3"),o=i.n(a),s=i("bUFy"),c=i("VU/8"),r=n,l=c(o.a,s.a,!1,r,"data-v-43e20ca4",null);e.default=l.exports},Fj9w:function(t,e,i){var n=i("rZkf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("a611fc1e",n,!0)},I7x1:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".editor-content[data-v-168f9d26]{margin-top:20px}",""])},L8Hg:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:t.fullscreen}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},a=[],o={render:n,staticRenderFns:a};e.a=o},LkOT:function(t,e,i){"use strict";function n(t){i("O36q")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("aNNw"),o=i.n(a),s=i("UfCy"),c=i("VU/8"),r=n,l=c(o.a,s.a,!1,r,"data-v-168f9d26",null);e.default=l.exports},My32:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap\t preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"];e.default=n},O36q:function(t,e,i){var n=i("I7x1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("bad080ca",n,!0)},UfCy:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[t._m(0,!1,!1),t._v(" "),i("div",[i("tinymce",{attrs:{height:200},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("code",[t._v("公司做的后台主要是一个cms系统，公司也是以自媒体为核心的，所以富文本是后台很核心的功能。在选择富文本的过程中也走了不少的弯路，市面上常见的富文本都基本用过了，最终选择了Tinymce"),i("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000009762198#articleHeader13"}},[t._v(" 相关文章 ")]),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://www.tinymce.com/"}},[t._v(" 官网 ")])])}],o={render:n,staticRenderFns:a};e.a=o},XXZr:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".tinymce-container[data-v-59dc8f14]{position:relative}.tinymce-container[data-v-59dc8f14] .mce-fullscreen{z-index:10000}.tinymce-textarea[data-v-59dc8f14]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-59dc8f14]{position:absolute;right:4px;top:4px}.fullscreen .editor-custom-btn-container[data-v-59dc8f14]{z-index:10000;position:fixed}.editor-upload-btn[data-v-59dc8f14]{display:inline-block}",""])},aNNw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("5aCZ"),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{Tinymce:a.default},data:function(){return{content:"Tinymce"}}}},bUFy:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),i("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"https://httpbin.org/post",multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},bau3:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),o=n(a),s=i("fZjL"),c=n(s);e.default={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return(0,c.default)(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=(0,c.default)(this.listObj).map(function(e){return t.listObj[e]});if(!this.checkAllSuccess())return void this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！");console.log(e),this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1},handleSuccess:function(t,e){for(var i=e.uid,n=(0,c.default)(this.listObj),a=0,o=n.length;a<o;a++)if(this.listObj[n[a]].uid===i)return this.listObj[n[a]].url=t.files.file,void(this.listObj[n[a]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=(0,c.default)(this.listObj),n=0,a=i.length;n<a;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new o.default(function(a,o){var s=new Image;s.src=i.createObjectURL(t),s.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)})}}}},c48H:function(t,e,i){var n=i("XXZr");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4c9ad3e6",n,!0)},rZkf:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".upload-container .editor-slide-upload[data-v-43e20ca4]{margin-bottom:20px}",""])}});