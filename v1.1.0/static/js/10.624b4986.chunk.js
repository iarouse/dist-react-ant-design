(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1182:function(e,a,t){e.exports={page_dashboard:"style_page_dashboard__1UVUE",project_table:"style_project_table__nsJfx"}},1187:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(320),s=t(1145),c=t.n(s),o=(t(1144),"rgba(139,195,74,.7)"),m="rgba(1,188,212,.7)",i="#EDF0F1",d={};d.option={legend:{show:!0,x:"right",y:"top",data:["WOM","Viral","Paid"]},grid:{x:40,y:60,x2:40,y2:30,borderWidth:0},tooltip:{show:!0,trigger:"axis",axisPointer:{lineStyle:{color:i}}},xAxis:[{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#607685"}},splitLine:{show:!1,lineStyle:{color:"#f3f3f3"}},data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}],yAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#607685"}},splitLine:{show:!0,lineStyle:{color:"#f3f3f3"}}}],series:[{name:"WOM",type:"bar",clickable:!1,itemStyle:{normal:{color:i},emphasis:{color:"rgba(237,240,241,.7)"}},barCategoryGap:"50%",data:[75,62,45,60,73,50,31,56,70,63,49,72,76,67,46,51,69,59,85,67,56],legendHoverLink:!1,z:2},{name:"Viral",type:"line",animation:!1,smooth:!0,itemStyle:{normal:{color:o,areaStyle:{color:o,type:"default"}}},data:[0,0,0,5,20,15,30,28,25,40,60,40,43,32,36,23,12,15,2,0,0],symbol:"none",legendHoverLink:!1,z:3},{name:"Paid",type:"line",animation:!1,smooth:!0,itemStyle:{normal:{color:m,areaStyle:{color:m,type:"default"}}},data:[0,0,0,0,1,6,15,8,16,9,25,12,50,20,25,12,2,1,0,0,0],symbol:"none",legendHoverLink:!1,z:4}]};var p=function(){return n.a.createElement("div",{className:"box box-default mb-4"},n.a.createElement("div",{className:"box-body"},n.a.createElement(c.a,{option:d.option,theme:"macarons",style:{height:"450px"}})))},u=t(13),y=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-3 mb-4"},n.a.createElement("div",{className:"number-card-v1"},n.a.createElement("div",{className:"card-top"},n.a.createElement(u.a,{type:"line-chart",className:"color-primary"})),n.a.createElement("div",{className:"card-info"},n.a.createElement("span",null,"Profit")),n.a.createElement("div",{className:"card-bottom"},n.a.createElement("span",null,"35",n.a.createElement("span",{className:"h5"},"%"))))),n.a.createElement("div",{className:"col-xl-3 mb-4"},n.a.createElement("div",{className:"number-card-v1"},n.a.createElement("div",{className:"card-top"},n.a.createElement("span",null,"42",n.a.createElement("span",{className:"h5"},"%"))),n.a.createElement("div",{className:"card-info"},n.a.createElement("span",null,"New Users")),n.a.createElement("div",{className:"card-bottom"},n.a.createElement(u.a,{type:"usergroup-add",className:"color-success"})))),n.a.createElement("div",{className:"col-xl-3 mb-4"},n.a.createElement("div",{className:"number-card-v1"},n.a.createElement("div",{className:"card-top"},n.a.createElement(u.a,{type:"shopping-cart",className:"color-info"})),n.a.createElement("div",{className:"card-info"},n.a.createElement("span",null,"Sales")),n.a.createElement("div",{className:"card-bottom"},n.a.createElement("span",null,"25",n.a.createElement("span",{className:"h5"},"k"))))),n.a.createElement("div",{className:"col-xl-3 mb-4"},n.a.createElement("div",{className:"number-card-v1"},n.a.createElement("div",{className:"card-top"},n.a.createElement("span",null,"55",n.a.createElement("span",{className:"h5"},"%"))),n.a.createElement("div",{className:"card-info"},n.a.createElement("span",null,"Growth")),n.a.createElement("div",{className:"card-bottom"},n.a.createElement(u.a,{type:"rocket",className:"color-warning"})))))},E=t(1204),g=t(1182),b=t.n(g),v=[{title:"#",dataIndex:"number"},{title:"Project",dataIndex:"project"},{title:"Status",dataIndex:"status",render:function(e,a,t){var r=e.split("-"),l=r[0],s="ant-tag ant-tag-has-color "+(r[1]?"ant-tag-type-"+r[1]:"ant-tag-type-primary");return n.a.createElement("div",{"data-show":"true",className:s},n.a.createElement("span",{className:"ant-tag-text"},l))}},{title:"Manager",dataIndex:"manager"},{title:"Progress",dataIndex:"progress",render:function(e,a,t){var r=e.split("-"),l=r[0],s="ant-progress ant-progress-line "+(r[1]?"ant-progress-type-"+r[1]:"ant-progress-type-primary");return n.a.createElement("div",{className:s},n.a.createElement("div",null,n.a.createElement("div",{className:"ant-progress-outer"},n.a.createElement("div",{className:"ant-progress-inner"},n.a.createElement("div",{className:"ant-progress-bg",style:{width:l,height:"10px"}})))))}}],N=[{key:"1",number:"1",project:" TWLT",status:"Pending-info",manager:"Amery Lee",progress:"55%"},{key:"2",number:"2",project:"A16Z",status:"Due",manager:"Romayne Carlyn",progress:"35%-success"},{key:"3",number:"3",project:"DARK",status:"Due-success",manager:"Jane Swift",progress:"68%-info"},{key:"4",number:"4",project:"Q300",status:"Blocked-danger",manager:"Marybeth Joanna",progress:"52%-warning"},{key:"5",number:"5",project:"RVNG",status:"Suspended-warning",manager:"Jonah Benny",progress:"77%-danger"},{key:"6",number:"6",project:"FDSA",status:"Suspended-info",manager:"Daly Royle",progress:"55%-success"}],h=function(){return n.a.createElement(E.a,{className:"".concat(b.a.project_table," mb-4"),columns:v,dataSource:N,pagination:!1,bordered:!1})},x=function(){return n.a.createElement("div",{className:"container-fluid no-breadcrumb page-dashboard"},n.a.createElement(l.a,{type:"bottom",className:"ui-animate"},n.a.createElement("div",{key:"1"}," ",n.a.createElement(p,null)," "),n.a.createElement("div",{key:"2"}," ",n.a.createElement(y,null)," "),n.a.createElement("div",{key:"3"}," ",n.a.createElement(h,null)," ")))};a.default=x}}]);
//# sourceMappingURL=10.624b4986.chunk.js.map