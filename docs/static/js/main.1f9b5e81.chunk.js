(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),o=a.n(l),r=a(3),i=a(1),s=a(2),u=(a(11),function(e){var t=e.handleCreateNewNote,a=e.handleUpdateNote,n=e.handleInputNote,l=e.newNote,o=e.isEditing,r=e.resetPostNote,i=function(e){var t=e.target,a=t.name,c=t.value;n(a,c)};return c.a.createElement("section",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o?a():t()},onReset:function(e){e.preventDefault(),r()},className:"form"},c.a.createElement("h2",{className:"form__action"},o?"Edita tu nota:":"Crea tu nota:"),c.a.createElement("div",{className:"form__container"},c.a.createElement("label",{htmlFor:"title"},"T\xedtulo:"),c.a.createElement("input",{value:l.title,required:!0,type:"text",placeholder:"Tu t\xedtulo aqu\xed",maxLength:"15",name:"title",onChange:i,style:{textTransform:"uppercase"}}),c.a.createElement("label",{htmlFor:"content"},"Contenido:"),c.a.createElement("textarea",{value:l.content,rows:"5",cols:"28",placeholder:"Tu descripci\xf3n aqu\xed",name:"content",maxLength:"90",onChange:i,style:{textTransform:"uppercase"}})),c.a.createElement("div",{className:"form__buttons"},c.a.createElement("button",{type:"reset"},o?"Descartar cambios":"Descartar nota"),c.a.createElement("button",{type:"submit"},o?"Actualizar nota":"Publicar nota"))))}),m=(a(12),function(e){var t=e.id,a=e.title,n=e.content,l=e.index,o=e.handleDelete,r=e.handleEdit;return c.a.createElement("li",{className:"note__item"},c.a.createElement("div",{className:"note__item__container"},c.a.createElement("div",{className:"note__item__container__text"},c.a.createElement("h2",null,"#",t," ",a),c.a.createElement("p",null,n)),c.a.createElement("span",{className:"note__item__container__actions"},c.a.createElement("i",{className:"fas fa-pencil-alt",index:l,onClick:function(){r(l)}}),c.a.createElement("i",{className:"fas fa-eraser",index:l,onClick:function(){o(l)}}))))}),d=(a(13),function(e){var t=e.notes,a=e.handleDelete,n=e.handleEdit,l=e.newNote;console.log(0!==l.title.length);var o=t.map((function(e,t){return c.a.createElement(m,{key:e.id+e.title,title:e.title,content:e.content,id:e.id,handleDelete:a,handleEdit:n,index:t,newNote:l})}));return c.a.createElement("ul",{className:"note__list"},o)}),f=(a(14),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({title:"",content:"",id:0}),m=Object(s.a)(o,2),f=m[0],E=m[1],h=Object(n.useState)(1),N=Object(s.a)(h,2),p=N[0],b=N[1],_=Object(n.useState)(!1),v=Object(s.a)(_,2),O=v[0],j=v[1],g=Object(n.useState)(""),S=Object(s.a)(g,2),w=S[0],x=S[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notes"));e&&(l(e.allNotes),b(e.newId))}),[]),Object(n.useEffect)((function(){localStorage.setItem("notes",JSON.stringify({allNotes:a,newId:p}))}));var y=function(){E(Object(i.a)(Object(i.a)({},f),{},{title:"",content:""})),j(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__title"},"Tu lista de post-Its")),c.a.createElement("main",{className:"main"},c.a.createElement(u,{handleCreateNewNote:function(){l((function(e){return e.concat(f)})),b(p+1),y()},handleUpdateNote:function(){j(!1),y();var e=a;e[w].title=f.title,e[w].content=f.content,l(e)},handleInputNote:function(e,t){0===a.length&&b(1),E(Object(i.a)(Object(i.a)({},f),{},Object(r.a)({},e,t))),f.id!==p&&E(Object(i.a)(Object(i.a)({},f),{},{id:p}))},newNote:f,isEditing:O,resetPostNote:y}),c.a.createElement(d,{notes:a,handleDelete:function(e){l(a.filter((function(t,a){return a!==e})))},handleEdit:function(e){E(a[e]),j(!0),x(e)},newNote:f})),c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"A CRUD project by ",c.a.createElement("a",{href:"https://sonia-sv.github.io/portfolio/#/"},"Sonia Sanz Vivas"))))});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.1f9b5e81.chunk.js.map