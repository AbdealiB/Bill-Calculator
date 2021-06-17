(this["webpackJsonpbill-calc"]=this["webpackJsonpbill-calc"]||[]).push([[0],{48:function(t,e,n){},70:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(10),r=n.n(o),l=(n(70),n(48),n(40)),s=n(41),u=n(117),c=n(111),d=n(57),b=n.n(d),m=n(58),p=n.n(m),j=n(8);var h=function(t){var e=t.index,n=t.inputField,a=t.handleChangeInput,i=t.handleAdd,o=t.handleRemove;return Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{autoFocus:!0,type:"number",name:"fromUnits",variant:"outlined",label:"From Units",value:n.fromUnits,placeholder:"0",onChange:function(t){a(t,e)}}),Object(j.jsx)(u.a,{type:"number",name:"toUnits",variant:"outlined",label:"To Units",value:n.toUnits,placeholder:"0",onChange:function(t){a(t,e)}}),Object(j.jsx)(u.a,{name:"unitAmount",variant:"outlined",label:"Amount per Unit",value:n.unitAmount,placeholder:"0.00",onChange:function(t){a(t,e)}}),Object(j.jsx)(c.a,{className:"plus",tabIndex:"-1",onClick:i,color:"primary",children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(c.a,{className:"minus",tabIndex:"-1",onClick:o,color:"secondary",variant:"contained",children:Object(j.jsx)(p.a,{})})]},e)},x=n(114),v=n(112),O=n(113);var f=function(){var t=Object(a.useState)([{fromUnits:"",toUnits:"",unitAmount:""}]),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)("0.00"),r=Object(s.a)(o,2),c=r[0],d=r[1],b=Object(a.useState)(""),m=Object(s.a)(b,2),p=m[0],f=m[1],U=function(t,e){var a=t.target.value,o=Object(l.a)(n);o[e][t.target.name]=a,i(o)},g=function(t){t.preventDefault();for(var e=0,a=0;a<n.length;a++){var i=parseInt(n[a].fromUnits),o=parseInt(n[a].toUnits),r=parseFloat(n[a].unitAmount);if(!F(i,o,p,r,a))return;e+=p>=i&&p<o?(p-i)*r:(o-i)*r}d((Math.round(100*e)/100).toFixed(2))},F=function(t,e,a,i,o){return"NaN"===String(t)||t<=0?(alert("From Units should be a positive number"),!1):"NaN"===String(e)||e<=0?(alert("To Units should be a positive number"),!1):"NaN"===String(i)||i<=0?(alert("Amount per Unit should be a positive number"),!1):"NaN"===String(a)||a<=0?(alert("Total Units should be a positive number"),!1):t>e?(alert("To Units should be greater than From Units"),!1):n.length-1!==o||!(a<t||a>e)||(alert("Total Units should be between From and To Units"),!1)},y=function(){i([].concat(Object(l.a)(n),[{fromUnits:"",toUnits:"",unitAmount:""}]))},A=function(t){var e=Object(l.a)(n);1!==e.length&&(e.splice(t,1),i(e))};return Object(j.jsxs)("form",{onSubmit:g,children:[n.map((function(t,e){return Object(j.jsx)(h,{index:e,inputField:t,handleChangeInput:U,handleAdd:y,handleRemove:A},e)})),Object(j.jsx)(u.a,{placeholder:"0",type:"number",name:"totUnits",variant:"outlined",label:"Total Units",onChange:function(t){f(t.target.value)},value:p}),Object(j.jsx)(v.a,{variant:"contained",type:"submit",endIcon:Object(j.jsx)(O.a,{children:"send"}),onClick:g,children:"Calculate"}),Object(j.jsxs)(x.a,{tabIndex:"-1",className:"total-bill-amt",variant:"h6",name:"unitAmount",placeholder:"0",gutterBottom:!0,children:["Total Bill Amount: ",c]})]})},U=n(115),g=n(59),F=Object(g.a)({palette:{primary:{main:"#F4A261"},secondary:{main:"#F00"}},typography:{fontFamily:["Calibri","sans-serif"]},shape:{borderRadius:20},overrides:{MuiButtonBase:{root:{margin:"10px"}},MuiTextField:{root:{margin:"10px"}},MuiButton:{root:{margin:"10px",textTransform:"none",fontSize:"20px"}}},props:{MuiButton:{disableRipple:!0,color:"primary"},MuiTextField:{InputLabelProps:{shrink:!0}},MuiButtonBase:{disableRipple:!0}}}),y=n(116);var A=function(){return Object(j.jsxs)(U.a,{children:[Object(j.jsx)("header",{className:"head",children:"Units Calculator App"}),Object(j.jsx)(y.a,{theme:F,children:Object(j.jsx)(f,{})})]})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5fc0afaa.chunk.js.map