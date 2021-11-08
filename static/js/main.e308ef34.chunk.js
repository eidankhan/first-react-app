(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.setMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},id:"text",rows:"7",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"}})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Text changed to upper case ","success")},disabled:0===n.length,children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Text changed to lower case ","success")},disabled:0===n.length,children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text coppied to clipboard","success")},disabled:0===n.length,children:"Copy to Clipboard"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){s("")},disabled:0===n.length,children:"Clear Text"}),Object(o.jsxs)("div",{className:"my-3",children:[Object(o.jsx)("h2",{children:"Your text summary "}),Object(o.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","words, ",n.replace(/\s/g,"").length," charachers"]}),Object(o.jsxs)("p",{children:[" ",.008*n.split(" ").length," Minutes Read"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter some text in above box to preview"})]})]})})}function d(e){var t;return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",(t=e.alert.type,t.charAt(0).toUpperCase()+t.slice(1))," ! "]})," ",e.alert.message]})})}i.defaultProps={title:"My App",aboutText:"About"};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],m=function(e,t){j({message:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{setMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled ","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",document.title="TextUtils - Light Mode")},mode:a}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)(b,{heading:"Enter text to analyze",mode:a,showAlert:m})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e308ef34.chunk.js.map