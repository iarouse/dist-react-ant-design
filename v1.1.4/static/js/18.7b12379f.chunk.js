(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1227:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(134),c=a(189),o=a.n(c),i=a(188),s=a(94),u=a(43),m=a(52),p=a(62),d=a(18),f=a(159),b=a(54),E=a(34);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var S=m.a.Item,x=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return N(n,(a=n=N(this,(e=g(t)).call.apply(e,[this].concat(l))),n.state={expand:!1},n.handleSearch=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){console.log("Received values of form: ",t)})},n.handleReset=function(){n.props.form.resetFields()},n.toggle=function(){var e=n.state.expand;n.setState({expand:!e})},a))}var a,n,l;return a=t,(n=[{key:"render",value:function(){for(var e=this.props.form.getFieldDecorator,t={labelCol:{span:5},wrapperCol:{span:19}},a=[],n=0;n<10;n++)a.push(r.a.createElement(p.a,{span:8,key:n},r.a.createElement(S,Object.assign({},t,{label:"Field ".concat(n)}),e("field-".concat(n))(r.a.createElement(b.a,{placeholder:"placeholder"})))));var l=this.state.expand,c=l?a.length:6;return r.a.createElement(m.a,{className:"ant-advanced-search-form",onSubmit:this.handleSearch},r.a.createElement(f.a,{gutter:40},a.slice(0,c)),r.a.createElement(f.a,null,r.a.createElement(p.a,{span:24,style:{textAlign:"right"}},r.a.createElement(u.a,{type:"primary",htmlType:"submit"},"Search"),r.a.createElement(u.a,{style:{marginLeft:8},onClick:this.handleReset},"Clear"),r.a.createElement("a",{href:E.a.link,style:{marginLeft:8,fontSize:12},onClick:this.toggle},"Collapse ",r.a.createElement(d.a,{type:l?"up":"down"})))))}}])&&v(a.prototype,n),l&&v(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");y(e.prototype,t&&t.prototype),t&&y(e,t)}(t,e),t}(r.a.Component),w=m.a.create()(x),k=function(){return r.a.createElement("article",{className:"article",id:"components-form-demo-advanced-search"},r.a.createElement("h2",{className:"article-title"},"Advanced search"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(w,null),r.a.createElement("div",{className:"search-result-list"},"Search Result List"))))},_=a(158);function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var T=m.a.Item;var L=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return F(n,(a=n=F(this,(e=P(t)).call.apply(e,[this].concat(l))),n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),n.props.history.push(E.a.home2))})},a))}var a,n,l;return a=t,(n=[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,l=t.getFieldError,c=t.isFieldTouched,o=c("userName")&&l("userName"),i=c("password")&&l("password");return r.a.createElement(m.a,{layout:"inline",onSubmit:this.handleSubmit},r.a.createElement(T,{validateStatus:o?"error":"",help:o||""},a("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(b.a,{prefix:r.a.createElement(d.a,{type:"user",style:{fontSize:13}}),placeholder:"Username"}))),r.a.createElement(T,{validateStatus:i?"error":"",help:i||""},a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(b.a,{prefix:r.a.createElement(d.a,{type:"lock",style:{fontSize:13}}),type:"password",placeholder:"Password"}))),r.a.createElement(T,null,r.a.createElement(u.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some(function(t){return e[t]}))},"Log in")))}}])&&j(a.prototype,n),l&&j(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");C(e.prototype,t&&t.prototype),t&&C(e,t)}(t,e),t}(r.a.Component),I=m.a.create()(Object(_.a)(L)),z=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Horizontal Login Form"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body"},r.a.createElement(I,null))))},W=a(451),D=a(319),R=a(444),A=a(1143),V=a(1141),M=a(1146),q=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Login"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(W.a,null))))},B=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Login"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(D.a,null))))},Y=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Sign Up"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(R.a,null))))},U=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Sign Up"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(A.a,null))))},H=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Reset Password"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(V.a,null))))},J=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Subscribe"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-5"},r.a.createElement(M.a,null))))},G=function(){return r.a.createElement("div",{className:"container-fluid container-mw-md chapter"},r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(q,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(B,null)," "),r.a.createElement("div",{className:"article__section",key:"3"}," ",r.a.createElement(Y,null)," "),r.a.createElement("div",{className:"article__section",key:"4"}," ",r.a.createElement(U,null)," "),r.a.createElement("div",{className:"article__section",key:"5"}," ",r.a.createElement(H,null)," "),r.a.createElement("div",{className:"article__section",key:"6"}," ",r.a.createElement(J,null)," "),r.a.createElement("div",{className:"article__section",key:"7"},r.a.createElement(z,null),r.a.createElement(k,null))))},K=a(507);function Q(e){return(Q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return!t||"object"!==Q(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var te=m.a.Item,ae=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=$(this,ee(t).call(this))).handleFormLayoutChange=function(t){e.setState({formLayout:t.target.value})},e.state={formLayout:"horizontal"},e}var a,n,l;return a=t,(n=[{key:"render",value:function(){var e=this.state.formLayout,t="horizontal"===e?{labelCol:{span:4},wrapperCol:{span:14}}:null,a="horizontal"===e?{wrapperCol:{span:14,offset:4}}:null;return r.a.createElement("div",null,r.a.createElement(m.a,{layout:e},r.a.createElement("div",{className:"callout callout-info mt-0 mb-5"},r.a.createElement(te,Object.assign({label:"Form Layout",className:"m-0"},t),r.a.createElement(K.a.Group,{defaultValue:"horizontal",onChange:this.handleFormLayoutChange},r.a.createElement(K.a.Button,{value:"horizontal"},"Horizontal"),r.a.createElement(K.a.Button,{value:"vertical"},"Vertical"),r.a.createElement(K.a.Button,{value:"inline"},"Inline")))),r.a.createElement(te,Object.assign({label:"Field A"},t),r.a.createElement(b.a,{placeholder:"input placeholder"})),r.a.createElement(te,Object.assign({label:"Field B"},t),r.a.createElement(b.a,{placeholder:"input placeholder"})),r.a.createElement(te,a,r.a.createElement(u.a,{type:"primary",className:"btn-cta"},"Submit"))))}}])&&Z(a.prototype,n),l&&Z(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");X(e.prototype,t&&t.prototype),t&&X(e,t)}(t,e),t}(r.a.Component),ne=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Form Layout"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body py-5"},r.a.createElement(ae,null))))},re=a(1165),le=a(1142),ce=a(1145),oe=a(1140);function ie(e){return(ie="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");me(e.prototype,t&&t.prototype),t&&me(e,t)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function pe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function de(e,t,a){return t&&pe(e.prototype,t),a&&pe(e,a),e}function fe(e,t){return!t||"object"!==ie(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function be(e){return(be=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Ee=function(e){function t(){var e,a,n;se(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return fe(n,(a=n=fe(this,(e=be(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){console.log(e),n.setState({visible:!1})},n.handleCancel=function(e){console.log(e),n.setState({visible:!1})},a))}return de(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{onClick:this.showModal},"Open a modal form v1"),r.a.createElement(re.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(le.a,null)))}}]),ue(t,e),t}(r.a.Component),he=function(e){function t(){var e,a,n;se(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return fe(n,(a=n=fe(this,(e=be(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){console.log(e),n.setState({visible:!1})},n.handleCancel=function(e){console.log(e),n.setState({visible:!1})},a))}return de(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{onClick:this.showModal},"Open a modal form v2"),r.a.createElement(re.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(ce.a,null)))}}]),ue(t,e),t}(r.a.Component),ye=function(e){function t(){var e,a,n;se(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return fe(n,(a=n=fe(this,(e=be(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){console.log(e),n.setState({visible:!1})},n.handleCancel=function(e){console.log(e),n.setState({visible:!1})},a))}return de(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{onClick:this.showModal},"Open a modal form v3"),r.a.createElement(re.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(oe.a,null)))}}]),ue(t,e),t}(r.a.Component),ve=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Modal Form"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body d-flex justify-content-around py-5"},r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(ye,null))))},Ne=function(){return r.a.createElement("div",{className:"container-fluid container-mw-lg chapter"},r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(ne,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(ve,null)," ")))},ge=a(1161),Se=ge.a.Step,xe=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Basic"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{current:1},r.a.createElement(Se,{title:"Finished",description:"This is a description."}),r.a.createElement(Se,{title:"In Progress",description:"This is a description."}),r.a.createElement(Se,{title:"Waiting",description:"This is a description."}))))},we=ge.a.Step,ke=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Mini version"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{size:"small",current:1},r.a.createElement(we,{title:"Finished"}),r.a.createElement(we,{title:"In Progress"}),r.a.createElement(we,{title:"Waiting"}))))},_e=ge.a.Step,Oe=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"With icon"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,null,r.a.createElement(_e,{status:"finish",title:"Login",icon:r.a.createElement(d.a,{type:"user"})}),r.a.createElement(_e,{status:"finish",title:"Verification",icon:r.a.createElement(d.a,{type:"solution"})}),r.a.createElement(_e,{status:"process",title:"Pay",icon:r.a.createElement(d.a,{type:"credit-card"})}),r.a.createElement(_e,{status:"wait",title:"Done",icon:r.a.createElement(d.a,{type:"smile-o"})}))))},Ce=a(1178);function je(e){return(je="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Te(e,t){return!t||"object"!==je(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Le(e){return(Le=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Ie=ge.a.Step,ze=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],We=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=Te(this,Le(t).call(this,e))).state={current:0},a}var a,n,l;return a=t,(n=[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state.current;return r.a.createElement("div",null,r.a.createElement(ge.a,{current:t},ze.map(function(e){return r.a.createElement(Ie,{key:e.title,title:e.title})})),r.a.createElement("div",{className:"steps-content"},ze[this.state.current].content),r.a.createElement("div",{className:"steps-action"},this.state.current<ze.length-1&&r.a.createElement(u.a,{type:"primary",onClick:function(){return e.next()}},"Next"),this.state.current===ze.length-1&&r.a.createElement(u.a,{type:"primary",onClick:function(){return Ce.a.success("Processing complete!")}},"Done"),this.state.current>0&&r.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Previous")))}}])&&Pe(a.prototype,n),l&&Pe(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Fe(e.prototype,t&&t.prototype),t&&Fe(e,t)}(t,e),t}(r.a.Component),De=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Switch Step"),r.a.createElement("div",{className:"box-body"},r.a.createElement(We,null)))},Re=ge.a.Step,Ae=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Vertical"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{direction:"vertical",current:1},r.a.createElement(Re,{title:"Finished",description:"This is a description."}),r.a.createElement(Re,{title:"In Progress",description:"This is a description."}),r.a.createElement(Re,{title:"Waiting",description:"This is a description."}))))},Ve=ge.a.Step,Me=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Vertical mini version"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{direction:"vertical",size:"small",current:1},r.a.createElement(Ve,{title:"Finished",description:"This is a description."}),r.a.createElement(Ve,{title:"In Progress",description:"This is a description."}),r.a.createElement(Ve,{title:"Waiting",description:"This is a description."}))))},qe=ge.a.Step,Be=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Error status"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{current:1,status:"error"},r.a.createElement(qe,{title:"Finished",description:"This is a description"}),r.a.createElement(qe,{title:"In Process",description:"This is a description"}),r.a.createElement(qe,{title:"Waiting",description:"This is a description"}))))},Ye=ge.a.Step,Ue=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Dot Style"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{progressDot:!0,current:1},r.a.createElement(Ye,{title:"Finished",description:"This is a description."}),r.a.createElement(Ye,{title:"In Progress",description:"This is a description."}),r.a.createElement(Ye,{title:"Waiting",description:"This is a description."}))))},He=a(1183),Je=ge.a.Step,Ge=function(e,t){var a=t.status,n=t.index;return r.a.createElement(He.a,{content:r.a.createElement("span",null,"step ",n," status: ",a)},e)},Ke=function(){return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Customized Dot Style"),r.a.createElement("div",{className:"box-body"},r.a.createElement(ge.a,{current:1,progressDot:Ge},r.a.createElement(Je,{title:"Finished",description:"You can hover on the dot."}),r.a.createElement(Je,{title:"In Progress",description:"You can hover on the dot."}),r.a.createElement(Je,{title:"Waiting",description:"You can hover on the dot."}),r.a.createElement(Je,{title:"Waiting",description:"You can hover on the dot."}))))},Qe=function(){return r.a.createElement("div",{className:"container-fluid container-mw-xl no-breadcrumb chapter"},r.a.createElement("article",{className:"article demo-style-steps"},r.a.createElement("h2",{className:"article-title"},"Steps"),r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{key:"1",className:"mb-3"},r.a.createElement(De,null)),r.a.createElement("div",{key:"2",className:"mb-3"},r.a.createElement(xe,null)),r.a.createElement("div",{key:"3",className:"mb-3"},r.a.createElement(ke,null)),r.a.createElement("div",{key:"4",className:"mb-3"},r.a.createElement(Oe,null)),r.a.createElement("div",{key:"5",className:"mb-3"},r.a.createElement(Ae,null)),r.a.createElement("div",{key:"6",className:"mb-3"},r.a.createElement(Me,null)),r.a.createElement("div",{key:"7",className:"mb-3"},r.a.createElement(Be,null)),r.a.createElement("div",{key:"8",className:"mb-3"},r.a.createElement(Ue,null)),r.a.createElement("div",{key:"9",className:"mb-3"},r.a.createElement(Ke,null)))))},Xe=a(110),Ze=a(1157),$e=a(1135),et=a(1169),tt=a(1158),at=m.a.Item,nt=Xe.a.Option,rt={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},lt=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Customized Validation"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body py-5"},r.a.createElement(m.a,null,r.a.createElement(at,Object.assign({},rt,{label:"Fail",validateStatus:"error",help:"Should be combination of numbers & alphabets"}),r.a.createElement(b.a,{placeholder:"unavailable choice",id:"error"})),r.a.createElement(at,Object.assign({},rt,{label:"Warning",validateStatus:"warning"}),r.a.createElement(b.a,{placeholder:"Warning",id:"warning"})),r.a.createElement(at,Object.assign({},rt,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),r.a.createElement(b.a,{placeholder:"I'm the content is being validated",id:"validating"})),r.a.createElement(at,Object.assign({},rt,{label:"Success",hasFeedback:!0,validateStatus:"success"}),r.a.createElement(b.a,{placeholder:"I'm the content",id:"success"})),r.a.createElement(at,Object.assign({},rt,{label:"Warning",hasFeedback:!0,validateStatus:"warning"}),r.a.createElement(b.a,{placeholder:"Warning",id:"warning"})),r.a.createElement(at,Object.assign({},rt,{label:"Fail",hasFeedback:!0,validateStatus:"error",help:"Should be combination of numbers & alphabets"}),r.a.createElement(b.a,{placeholder:"unavailable choice",id:"error"})),r.a.createElement(at,Object.assign({},rt,{label:"Success",hasFeedback:!0,validateStatus:"success"}),r.a.createElement(et.a,{style:{width:"100%"}})),r.a.createElement(at,Object.assign({},rt,{label:"Warning",hasFeedback:!0,validateStatus:"warning"}),r.a.createElement($e.a,{style:{width:"100%"}})),r.a.createElement(at,Object.assign({},rt,{label:"Error",hasFeedback:!0,validateStatus:"error"}),r.a.createElement(Xe.a,{defaultValue:"1"},r.a.createElement(nt,{value:"1"},"Option 1"),r.a.createElement(nt,{value:"2"},"Option 2"),r.a.createElement(nt,{value:"3"},"Option 3"))),r.a.createElement(at,Object.assign({},rt,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),r.a.createElement(Ze.a,{defaultValue:["1"],options:[]})),r.a.createElement(at,Object.assign({label:"inline"},rt),r.a.createElement(p.a,{span:11},r.a.createElement(at,{validateStatus:"error",help:"Please select the correct date"},r.a.createElement(et.a,null))),r.a.createElement(p.a,{span:2},r.a.createElement("span",{style:{display:"inline-block",width:"100%",textAlign:"center"}},"-")),r.a.createElement(p.a,{span:11},r.a.createElement(at,null,r.a.createElement(et.a,null)))),r.a.createElement(at,Object.assign({},rt,{label:"Success",hasFeedback:!0,validateStatus:"success"}),r.a.createElement(tt.a,{style:{width:"100%"}}))))))},ct=a(92);function ot(e){return(ot="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function it(e,t){return(it=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function st(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ut(e,t){return!t||"object"!==ot(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function mt(e){return(mt=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var pt=m.a.Item,dt={labelCol:{span:4},wrapperCol:{span:8}},ft={labelCol:{span:4},wrapperCol:{span:8,offset:4}},bt=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return ut(n,(a=n=ut(this,(e=mt(t)).call.apply(e,[this].concat(l))),n.state={checkNick:!1},n.check=function(){n.props.form.validateFields(function(e){e||console.info("success")})},n.handleChange=function(e){n.setState({checkNick:e.target.checked},function(){n.props.form.validateFields(["nickname"],{force:!0})})},a))}var a,n,l;return a=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(pt,Object.assign({},dt,{label:"Name"}),e("username",{rules:[{required:!0,message:"Please input your name"}]})(r.a.createElement(b.a,{placeholder:"Please input your name"}))),r.a.createElement(pt,Object.assign({},dt,{label:"Nickname"}),e("nickname",{rules:[{required:this.state.checkNick,message:"Please input your nickname"}]})(r.a.createElement(b.a,{placeholder:"Please input your nickname"}))),r.a.createElement(pt,ft,r.a.createElement(ct.a,{value:this.state.checkNick,onChange:this.handleChange},"Nickname is required")),r.a.createElement(pt,ft,r.a.createElement(u.a,{type:"primary",onClick:this.check},"Check")))}}])&&st(a.prototype,n),l&&st(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");it(e.prototype,t&&t.prototype),t&&it(e,t)}(t,e),t}(r.a.Component),Et=m.a.create()(bt),ht=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Dynamic Rules"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body py-5"},r.a.createElement(Et,null))))},yt=function(){return r.a.createElement("div",{className:"container-fluid container-mw-xl chapter"},r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(lt,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(ht,null)," ")))},vt=o()({loader:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,1235))},loading:i.a});t.default=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(l.a,{path:"".concat(t.url,"/form-control"),component:vt}),r.a.createElement(l.a,{path:"".concat(t.url,"/forms"),component:G}),r.a.createElement(l.a,{path:"".concat(t.url,"/layout"),component:Ne}),r.a.createElement(l.a,{path:"".concat(t.url,"/steps"),component:Qe}),r.a.createElement(l.a,{path:"".concat(t.url,"/validation"),component:yt}))}}}]);
//# sourceMappingURL=18.7b12379f.chunk.js.map