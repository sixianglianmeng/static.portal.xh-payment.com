webpackJsonp([71],{"4Ngk":function(e,t,a){"use strict";function l(e){a("iaqK")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("zMHO"),n=a.n(i),r=a("N5jL"),s=a("VU/8"),o=l,c=s(n.a,r.a,!1,o,"data-v-3147262a",null);t.default=c.exports},Bp4j:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},N5jL:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"date",placeholder:"开始日期",size:"small","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"date",size:"small",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"商户ID",prop:"user_id"}}),e._v(" "),a("el-table-column",{attrs:{label:"商户名",prop:"username"}}),e._v(" "),a("el-table-column",{attrs:{label:"上级代理",prop:"parent_agent_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"status_str"}}),e._v(" "),a("el-table-column",{attrs:{label:"开户费金额",prop:"fee"}}),e._v(" "),a("el-table-column",{attrs:{label:"实际缴纳金额",prop:"fee_paid"}}),e._v(" "),a("el-table-column",{attrs:{label:"缴纳时间",prop:"paid_at"}}),e._v(" "),a("el-table-column",{attrs:{label:"缴纳订单号",prop:"order_no"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单生成时间",prop:"order_created_at"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"created_at"}})],1),e._v(" "),a("el-row",e._l(e.openFeeTotal,function(t,l){return a("el-tag",{key:l,attrs:{type:"warning"}},[a("span",{staticStyle:{color:"blue","font-weight":"bold"}},[e._v(e._s(t.name))]),e._v(":\n            "),a("span",{staticStyle:{color:"red","font-weight":"bold"}},[e._v(e._s(t.open_fee))])])})),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[20,30,50,100],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],n={render:l,staticRenderFns:i};t.a=n},iaqK:function(e,t,a){var l=a("Bp4j");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("7f44ff3c",l,!0)},zMHO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("3pLw"),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={name:"vue_account_open_fee",data:function(){return{list:null,tableKey:0,total:null,listLoading:!0,listQuery:{page:1,limit:20,dateStart:new Date((new Date).setDate((new Date).getDate()-30)),dateEnd:new Date},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},openFeeTotal:null}},created:function(){this.getList()},methods:{getList:function(){var e=this;e.listLoading=!0,i.default.post("/admin/report/account-open-fee",e.listQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.list=t.data.list,e.openFeeTotal=t.data.parentTotal,e.total=t.data.total)})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()}}}}});