(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1153:function(e,t){},1199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(58),l=a(320),i=a(1204),c=a(1154),d=a.n(c);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){m(e,t,a[t])})}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var h=[{title:"Name",dataIndex:"name",sorter:!0,render:function(e){return"".concat(e.first," ").concat(e.last)},width:"20%"},{title:"Gender",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],width:"20%"},{title:"Email",dataIndex:"email"}],g=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return p(n,(a=n=p(this,(e=k(t)).call.apply(e,[this].concat(o))),n.state={data:[],pagination:{},loading:!1},n.handleTableChange=function(e,t,a){var r=u({},n.state.pagination);r.current=e.current,n.setState({pagination:r}),n.fetch(u({results:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},n.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),n.setState({loading:!0}),d()({url:"https://randomuser.me/api",method:"get",data:u({results:10},e),type:"json"}).then(function(e){var t=u({},n.state.pagination);t.total=200,n.setState({loading:!1,data:e.results,pagination:t})})},a))}var a,n,o;return a=t,(n=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){return r.a.createElement(i.a,{columns:h,rowKey:function(e){return e.login.uuid},dataSource:this.state.data,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange})}}])&&y(a.prototype,n),o&&y(a,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");f(e.prototype,t&&t.prototype),t&&f(e,t)}(t,e),t}(r.a.Component),b=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Ajax"),r.a.createElement("div",{className:"box box-default box-ant-table-v1"},r.a.createElement(g,null)))},E=a(49),N=a(13),v=a(57),x=a(1215),w=a(18);function S(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");L(e.prototype,t&&t.prototype),t&&L(e,t)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,a){return t&&_(e.prototype,t),a&&_(e,a),e}function O(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var j=function(e){function t(){var e,a,n;P(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return O(n,(a=n=O(this,(e=J(t)).call.apply(e,[this].concat(o))),n.state={value:n.props.value,editable:!1},n.handleChange=function(e){var t=e.target.value;n.setState({value:t})},n.check=function(){n.setState({editable:!1}),n.props.onChange&&n.props.onChange(n.state.value)},n.edit=function(){n.setState({editable:!0})},a))}return A(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.editable;return r.a.createElement("div",{className:"editable-cell"},a?r.a.createElement(v.a,{value:t,onChange:this.handleChange,onPressEnter:this.check,suffix:r.a.createElement(N.a,{type:"check",className:"editable-cell-icon-check",onClick:this.check})}):r.a.createElement("div",{style:{paddingRight:24}},t||" ",r.a.createElement(N.a,{type:"edit",className:"editable-cell-icon",onClick:this.edit})))}}]),C(t,e),t}(r.a.Component),B=function(e){function t(e){var a;return P(this,t),(a=O(this,J(t).call(this,e))).onCellChange=function(e,t){return function(n){var r=S(a.state.dataSource),o=r.find(function(t){return t.key===e});o&&(o[t]=n,a.setState({dataSource:r}))}},a.onDelete=function(e){var t=S(a.state.dataSource);a.setState({dataSource:t.filter(function(t){return t.key!==e})})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.dataSource,r={key:t,name:"Edward King ".concat(t),age:32,address:"London, Park Lane no. ".concat(t)};a.setState({dataSource:S(n).concat([r]),count:t+1})},a.columns=[{title:"name",dataIndex:"name",width:"30%",render:function(e,t){return r.a.createElement(j,{value:e,onChange:a.onCellChange(t.key,"name")})}},{title:"age",dataIndex:"age"},{title:"address",dataIndex:"address"},{title:"operation",dataIndex:"operation",render:function(e,t){return a.state.dataSource.length>1?r.a.createElement(x.a,{title:"Sure to delete?",onConfirm:function(){return a.onDelete(t.key)}},r.a.createElement("a",{href:w.a.link},"Delete")):null}}],a.state={dataSource:[{key:"0",name:"Edward King 0",age:"32",address:"London, Park Lane no. 0"},{key:"1",name:"Edward King 1",age:"32",address:"London, Park Lane no. 1"}],count:2},a}return A(t,[{key:"render",value:function(){var e=this.state.dataSource,t=this.columns;return r.a.createElement("div",null,r.a.createElement(E.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16}},"Add a row"),r.a.createElement(i.a,{bordered:!0,dataSource:e,columns:t}))}}]),C(t,e),t}(r.a.Component),R=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Editable Cells"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body py-5"},r.a.createElement(B,null))))},T=a(52),K=a(1161);function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){G(e,t,a[t])})}return e}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Y(e){return(Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");U(e.prototype,t&&t.prototype),t&&U(e,t)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t,a){return t&&V(e.prototype,t),a&&V(e,a),e}function q(e,t){return!t||"object"!==Y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function Q(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}for(var X=[],Z=0;Z<100;Z++)X.push({key:Z.toString(),name:"Edrward ".concat(Z),age:32,address:"London Park no. ".concat(Z)});for(var $=T.a.Item,ee=r.a.createContext(),te=T.a.create()(function(e){var t=e.form,a=(e.index,Q(e,["form","index"]));return r.a.createElement(ee.Provider,{value:t},r.a.createElement("tr",a))}),ae=function(e){function t(){var e,a,n;M(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return q(n,(a=n=q(this,(e=W(t)).call.apply(e,[this].concat(l))),n.getInput=function(){return"number"===n.props.inputType?r.a.createElement(K.a,null):r.a.createElement(v.a,null)},a))}return H(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.editing,n=t.dataIndex,o=t.title,l=(t.inputType,t.record),i=(t.index,Q(t,["editing","dataIndex","title","inputType","record","index"]));return r.a.createElement(ee.Consumer,null,function(t){var c=t.getFieldDecorator;return r.a.createElement("td",i,a?r.a.createElement($,{style:{margin:0}},c(n,{rules:[{required:!0,message:"Please Input ".concat(o,"!")}],initialValue:l[n]})(e.getInput())):i.children)})}}]),z(t,e),t}(r.a.Component),ne=function(e){function t(e){var a;return M(this,t),(a=q(this,W(t).call(this,e))).isEditing=function(e){return e.key===a.state.editingKey},a.cancel=function(){a.setState({editingKey:""})},a.state={data:X,editingKey:""},a.columns=[{title:"name",dataIndex:"name",width:"25%",editable:!0},{title:"age",dataIndex:"age",width:"15%",editable:!0},{title:"address",dataIndex:"address",width:"40%",editable:!0},{title:"operation",dataIndex:"operation",render:function(e,t){var n=a.isEditing(t);return r.a.createElement("div",null,n?r.a.createElement("span",null,r.a.createElement(ee.Consumer,null,function(e){return r.a.createElement("a",{href:w.a.link,onClick:function(){return a.save(e,t.key)},style:{marginRight:8}},"Save")}),r.a.createElement(x.a,{title:"Sure to cancel?",onConfirm:function(){return a.cancel(t.key)}},r.a.createElement("a",{href:w.a.link},"Cancel"))):r.a.createElement("a",{href:w.a.link,onClick:function(){return a.edit(t.key)}},"Edit"))}}],a}return H(t,[{key:"edit",value:function(e){this.setState({editingKey:e})}},{key:"save",value:function(e,t){var a=this;e.validateFields(function(e,n){if(!e){var r=D(a.state.data),o=r.findIndex(function(e){return t===e.key});if(o>-1){var l=r[o];r.splice(o,1,F({},l,n)),a.setState({data:r,editingKey:""})}else r.push(X),a.setState({data:r,editingKey:""})}})}},{key:"render",value:function(){var e=this,t={body:{row:te,cell:ae}},a=this.columns.map(function(t){return t.editable?F({},t,{onCell:function(a){return{record:a,inputType:"age"===t.dataIndex?"number":"text",dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(a)}}}):t});return r.a.createElement(i.a,{components:t,bordered:!0,dataSource:this.state.data,columns:a,rowClassName:"editable-row",className:"ant-table-v1"})}}]),z(t,e),t}(r.a.Component),re=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Editable Cells"),r.a.createElement(ne,null))},oe=function(){return r.a.createElement("div",{className:"container-fluid container-mw-xxl chapter"},r.a.createElement(l.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(b,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(R,null)," "),r.a.createElement("div",{className:"article__section",key:"3"}," ",r.a.createElement(re,null)," ")))},le=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",{href:w.a.link},e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",key:"action",render:function(e,t){return r.a.createElement("span",null,r.a.createElement("a",{href:w.a.link},"Action \u4e00 ",t.name),r.a.createElement("span",{className:"ant-divider"}),r.a.createElement("a",{href:w.a.link},"Delete"),r.a.createElement("span",{className:"ant-divider"}),r.a.createElement("a",{href:w.a.link,className:"ant-dropdown-link"},"More actions ",r.a.createElement(N.a,{type:"down"})))}}],ie=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],ce=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Basic Usage"),r.a.createElement(i.a,{columns:le,dataSource:ie,className:"ant-table-v1"}))},de=[{title:"Name",dataIndex:"name",render:function(e){return r.a.createElement("a",{href:w.a.link},e)}},{title:"Cash Assets",className:"column-money",dataIndex:"money"},{title:"Address",dataIndex:"address"}],se=[{key:"1",name:"John Brown",money:"\uffe5300,000.00",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",money:"\uffe51,256,000.00",address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",money:"\uffe5120,000.00",address:"Sidney No. 1 Lake Park"}],ue=function(){return r.a.createElement("article",{className:"article demo-style-table"},r.a.createElement("h2",{className:"article-title"},"Border, title and footer"),r.a.createElement(i.a,{columns:de,dataSource:se,bordered:!0,title:function(){return"Header"},footer:function(){return"Footer"},className:"ant-table-v1"}))},me=function(e,t,a){var n={children:e,props:{}};return 4===a&&(n.props.colSpan=0),n},fe=[{title:"Name",dataIndex:"name",render:function(e,t,a){return a<4?r.a.createElement("a",{href:w.a.link},e):{children:r.a.createElement("a",{href:w.a.link},e),props:{colSpan:5}}}},{title:"Age",dataIndex:"age",render:me},{title:"Home phone",colSpan:2,dataIndex:"tel",render:function(e,t,a){var n={children:e,props:{}};return 2===a&&(n.props.rowSpan=2),3===a&&(n.props.rowSpan=0),4===a&&(n.props.colSpan=0),n}},{title:"Phone",colSpan:0,dataIndex:"phone",render:me},{title:"Address",dataIndex:"address",render:me}],ye=[{key:"1",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park"},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park"}],pe=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"colSpan and rowSpan"),r.a.createElement(i.a,{columns:fe,dataSource:ye,bordered:!0,className:"ant-table-v1"}))},ke=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",dataIndex:"",key:"x",render:function(){return r.a.createElement("a",{href:w.a.link},"Delete")}}],he=[{key:1,name:"John Brown",age:32,address:"New York No. 1 Lake Park",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:2,name:"Jim Green",age:42,address:"London No. 1 Lake Park",description:"My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."},{key:3,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",description:"My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."}],ge=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Expandable Row"),r.a.createElement(i.a,{columns:ke,expandedRowRender:function(e){return r.a.createElement("p",null,e.description)},dataSource:he,className:"ant-table-v1"}))},be=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1"},{title:"Column 2",dataIndex:"address",key:"2"},{title:"Column 3",dataIndex:"address",key:"3"},{title:"Column 4",dataIndex:"address",key:"4"},{title:"Column 5",dataIndex:"address",key:"5"},{title:"Column 6",dataIndex:"address",key:"6"},{title:"Column 7",dataIndex:"address",key:"7"},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:function(){return r.a.createElement("a",{href:w.a.link},"action")}}],Ee=[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}],Ne=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Fixed Columns"),r.a.createElement(i.a,{columns:be,dataSource:Ee,scroll:{x:1300},className:"ant-table-v1"}))},ve=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:function(){return r.a.createElement("a",{href:w.a.link},"action")}}],xe=[],we=0;we<100;we++)xe.push({key:we,name:"Edrward ".concat(we),age:32,address:"London Park no. ".concat(we)});for(var Se=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Fixed Columns and Header"),r.a.createElement(i.a,{columns:ve,dataSource:xe,scroll:{x:1500,y:300},className:"ant-table-v1"}))},Ie=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],Pe=[],Ce=0;Ce<100;Ce++)Pe.push({key:Ce,name:"Edward King ".concat(Ce),age:32,address:"London, Park Lane no. ".concat(Ce)});for(var Le=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Fixed Header"),r.a.createElement(i.a,{columns:Ie,dataSource:Pe,pagination:{pageSize:50},scroll:{y:240},className:"ant-table-v1"}))},_e=[{title:"Name",dataIndex:"name",key:"name",width:100,fixed:"left",filters:[{text:"Joe",value:"Joe"},{text:"John",value:"John"}],onFilter:function(e,t){return 0===t.name.indexOf(e)}},{title:"Other",children:[{title:"Age",dataIndex:"age",key:"age",width:200,sorter:function(e,t){return e.age-t.age}},{title:"Address",children:[{title:"Street",dataIndex:"street",key:"street",width:200},{title:"Block",children:[{title:"Building",dataIndex:"building",key:"building",width:100},{title:"Door No.",dataIndex:"number",key:"number",width:100}]}]}]},{title:"Company",children:[{title:"Company Address",dataIndex:"companyAddress",key:"companyAddress"},{title:"Company Name",dataIndex:"companyName",key:"companyName"}]},{title:"Gender",dataIndex:"gender",key:"gender",width:60,fixed:"right"}],Ae=[],Oe=0;Oe<100;Oe++)Ae.push({key:Oe,name:"John Brown",age:Oe+1,street:"Lake Park",building:"C",number:2035,companyAddress:"Lake Street 42",companyName:"SoftLake Co",gender:"M"});var Je=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Grouping table head"),r.a.createElement(i.a,{columns:_e,dataSource:Ae,bordered:!0,size:"middle",scroll:{x:"130%",y:240},className:"ant-table-v1"}))},je=a(315),Be=a(1136),Re=a(39),Te=r.a.createElement(Re.a,null,r.a.createElement(Re.a.Item,null,"Action 1"),r.a.createElement(Re.a.Item,null,"Action 2"));function Ke(){for(var e=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",render:function(){return r.a.createElement("a",{href:w.a.link},"Publish")}}],t=[],a=0;a<3;++a)t.push({key:a,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"});return r.a.createElement(i.a,{className:"components-table-demo-nested",columns:e,expandedRowRender:function(){for(var e=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",render:function(){return r.a.createElement("span",null,r.a.createElement(Be.a,{status:"success"}),"Finished")}},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",render:function(){return r.a.createElement("span",{className:"table-operation"},r.a.createElement("a",{href:w.a.link},"Pause"),r.a.createElement("a",{href:w.a.link},"Stop"),r.a.createElement(je.a,{overlay:Te},r.a.createElement("a",{href:w.a.link},"More ",r.a.createElement(N.a,{type:"down"}))))}}],t=[],a=0;a<3;++a)t.push({key:a,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"});return r.a.createElement(i.a,{columns:e,dataSource:t,pagination:!1})},dataSource:t})}var Fe=function(){return r.a.createElement("article",{className:"article demo-style-box"},r.a.createElement("h2",{className:"article-title"},"Nested tables"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(Ke,null))))};function Ge(e){return(Ge="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(e,t){return(De=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ye(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Me(e,t){return!t||"object"!==Ge(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ze(e){return(ze=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Ue=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],Ve=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return Me(n,(a=n=Me(this,(e=ze(t)).call.apply(e,[this].concat(o))),n.state={filteredInfo:null,sortedInfo:null},n.handleChange=function(e,t,a){console.log("Various parameters",e,t,a),n.setState({filteredInfo:t,sortedInfo:a})},n.clearFilters=function(){n.setState({filteredInfo:null})},n.clearAll=function(){n.setState({filteredInfo:null,sortedInfo:null})},n.setAgeSort=function(){n.setState({sortedInfo:{order:"descend",columnKey:"age"}})},a))}var a,n,o;return a=t,(n=[{key:"render",value:function(){var e=this.state,t=e.sortedInfo,a=e.filteredInfo;t=t||{};var n=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:(a=a||{}).name||null,onFilter:function(e,t){return t.name.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"name"===t.columnKey&&t.order},{title:"Age",dataIndex:"age",key:"age",sorter:function(e,t){return e.age-t.age},sortOrder:"age"===t.columnKey&&t.order},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:a.address||null,onFilter:function(e,t){return t.address.includes(e)},sorter:function(e,t){return e.address.length-t.address.length},sortOrder:"address"===t.columnKey&&t.order}];return r.a.createElement("div",null,r.a.createElement("div",{className:"table-operations"},r.a.createElement(E.a,{onClick:this.setAgeSort},"Sort age"),r.a.createElement(E.a,{onClick:this.clearFilters},"Clear filters"),r.a.createElement(E.a,{onClick:this.clearAll},"Clear filters and sorters")),r.a.createElement(i.a,{columns:n,dataSource:Ue,onChange:this.handleChange}))}}])&&Ye(a.prototype,n),o&&Ye(a,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");De(e.prototype,t&&t.prototype),t&&De(e,t)}(t,e),t}(r.a.Component),He=function(){return r.a.createElement("article",{className:"article demo-style-table"},r.a.createElement("h2",{className:"article-title"},"Reset filters and sorters"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(Ve,null))))},qe=[{title:"Name",dataIndex:"name",render:function(e){return r.a.createElement("a",{href:w.a.link},e)}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],We=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"}],Qe={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},onSelect:function(e,t,a){console.log(e,t,a)},onSelectAll:function(e,t,a){console.log(e,t,a)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name}}},Xe=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Selection"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(i.a,{rowSelection:Qe,columns:qe,dataSource:We}))))},Ze=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],$e=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],et=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Size"),r.a.createElement("div",{className:"box box-default mb-4"},r.a.createElement("div",{className:"box-header"},"Middle size table"),r.a.createElement("div",{className:"box-body"},r.a.createElement(i.a,{columns:Ze,dataSource:$e,size:"middle"}))),r.a.createElement("div",{className:"box box-default mb-4"},r.a.createElement("div",{className:"box-header"},"Small size table"),r.a.createElement("div",{className:"box-body"},r.a.createElement(i.a,{columns:Ze,dataSource:$e,size:"small"}))))},tt=[{title:"Name",dataIndex:"name",key:"name",width:"40%"},{title:"Age",dataIndex:"age",key:"age",width:"30%"},{title:"Address",dataIndex:"address",key:"address"}],at=[{key:1,name:"John Brown sr.",age:60,address:"New York No. 1 Lake Park",children:[{key:11,name:"John Brown",age:42,address:"New York No. 2 Lake Park"},{key:12,name:"John Brown jr.",age:30,address:"New York No. 3 Lake Park",children:[{key:121,name:"Jimmy Brown",age:16,address:"New York No. 3 Lake Park"}]},{key:13,name:"Jim Green sr.",age:72,address:"London No. 1 Lake Park",children:[{key:131,name:"Jim Green",age:42,address:"London No. 2 Lake Park",children:[{key:1311,name:"Jim Green jr.",age:25,address:"London No. 3 Lake Park"},{key:1312,name:"Jimmy Green sr.",age:18,address:"London No. 4 Lake Park"}]}]}]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],nt={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},onSelect:function(e,t,a){console.log(e,t,a)},onSelectAll:function(e,t,a){console.log(e,t,a)}},rt=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Tree data"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(i.a,{columns:tt,rowSelection:nt,dataSource:at}))))},ot=function(){return r.a.createElement("div",{className:"container-fluid container-mw-xl chapter"},r.a.createElement(l.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(ce,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(ue,null)," "),r.a.createElement("div",{className:"article__section",key:"3"}," ",r.a.createElement(pe,null)," "),r.a.createElement("div",{className:"article__section",key:"4"}," ",r.a.createElement(ge,null)," "),r.a.createElement("div",{className:"article__section",key:"5"}," ",r.a.createElement(Ne,null)," "),r.a.createElement("div",{className:"article__section",key:"6"}," ",r.a.createElement(Se,null)," "),r.a.createElement("div",{className:"article__section",key:"7"}," ",r.a.createElement(Le,null)," "),r.a.createElement("div",{className:"article__section",key:"8"}," ",r.a.createElement(Je,null)," "),r.a.createElement("div",{className:"article__section",key:"9"}," ",r.a.createElement(Fe,null)," "),r.a.createElement("div",{className:"article__section",key:"10"}," ",r.a.createElement(He,null)," "),r.a.createElement("div",{className:"article__section",key:"11"}," ",r.a.createElement(Xe,null)," "),r.a.createElement("div",{className:"article__section",key:"12"}," ",r.a.createElement(et,null)," "),r.a.createElement("div",{className:"article__section",key:"13"}," ",r.a.createElement(rt,null)," ")))};t.default=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(o.a,{path:"".concat(t.url,"/data-table"),component:oe}),r.a.createElement(o.a,{path:"".concat(t.url,"/tables"),component:ot}))}}}]);
//# sourceMappingURL=4.20868269.chunk.js.map