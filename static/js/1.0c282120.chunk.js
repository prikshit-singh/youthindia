(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{73:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(1),l=n.n(i),c=n(42),s=(n(68),n(70),n(72));t.default=function(e){var t=Object(i.useState)(),n=Object(a.a)(t,2),o=n[0],r=n[1],f=Object(i.useState)(0),u=Object(a.a)(f,2),d=u[0],m=u[1];Object(i.useEffect)(function(){fetch("https://dummyjson.com/posts?skip=".concat(d,"&limit=20")).then(function(e){return e.json()}).then(function(e){return r(e)})},[d]);var p=Object(i.useState)([{field:"id"},{field:"title"},{field:"body"},{field:"userId"}]),h=Object(a.a)(p,1)[0];return console.log(o),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},o?l.a.createElement("div",{className:"ag-theme-alpine",style:{height:700,width:"54%",marginTop:"10px"}},l.a.createElement(c.AgGridReact,{rowData:o.posts,columnDefs:h}),l.a.createElement("div",{className:"pagination",style:{display:"flex",flexDirection:"row",width:"100%",border:"2px solid black",alignItems:"center",justifyContent:"flex-end"}},l.a.createElement("div",{className:"totalItems",style:{paddingRight:"20px"}},l.a.createElement("h3",null,"Total  ",o.total," ")),l.a.createElement("div",{className:"totalItems",style:{display:"flex",flexDirection:"row",paddingRight:"20px",alignItems:"center",justifyContent:"flex-end"}},l.a.createElement("h3",null,"  ",o.skip,"  "),l.a.createElement("h3",null,"  - ",o.skip+20)),l.a.createElement("div",{className:"icons"},l.a.createElement(s.b,{style:{fontSize:"30px",cursor:"pointer"},onClick:function(){!function(){if(0==d)return 0;m(d-20)}()}}),l.a.createElement(s.a,{style:{fontSize:"30px",cursor:"pointer"},onClick:function(){!function(){if(d>130)return 0;m(d+20)}()}})))):"")}}}]);
//# sourceMappingURL=1.0c282120.chunk.js.map