(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),o=a.n(c),r=a(3),i=a(1),s=a(2),u=(a(11),function(e){var t=e.handleCreateNewNote,a=e.handleUpdateNote,n=e.handleInputNote,c=e.newNote,o=e.isEditing,r=e.resetPostNote,i=function(e){var t=e.target,a=t.name,l=t.value;n(a,l)};return l.a.createElement("section",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o?a():t()},onReset:function(e){e.preventDefault(),r()},className:"form"},l.a.createElement("h2",{className:"form__action"},o?"Edita tu nota:":"Crea tu nota:"),l.a.createElement("div",{className:"form__container"},l.a.createElement("label",{htmlFor:"title"},"T\xedtulo:"),l.a.createElement("input",{value:c.title,required:!0,type:"text",placeholder:"Tu t\xedtulo aqu\xed",maxLength:"15",name:"title",onChange:i,style:{textTransform:"uppercase"}}),l.a.createElement("label",{htmlFor:"content"},"Contenido:"),l.a.createElement("textarea",{value:c.content,rows:"5",cols:"28",placeholder:"Tu descripci\xf3n aqu\xed",name:"content",maxLength:"90",onChange:i,style:{textTransform:"uppercase"}})),l.a.createElement("div",{className:"form__buttons"},l.a.createElement("button",{type:"reset"},o?"Descartar cambios":"Descartar nota"),l.a.createElement("button",{type:"submit"},o?"Actualizar nota":"Publicar nota"))))}),m=(a(12),function(e){var t=e.id,a=e.title,n=e.content,c=e.index,o=e.handleDelete,r=e.handleEdit;return l.a.createElement("li",{className:"note__item"},l.a.createElement("div",{className:"note__item__container"},l.a.createElement("div",{className:"note__item__container__text"},l.a.createElement("h2",null,"#",t," ",a),l.a.createElement("p",null,n)),l.a.createElement("span",{className:"note__item__container__actions"},l.a.createElement("i",{className:"fas fa-pencil-alt",index:c,onClick:function(){r(c)}}),l.a.createElement("i",{className:"fas fa-eraser",index:c,onClick:function(){o(c)}}))))}),d=(a(13),function(e){var t=e.notes,a=e.handleDelete,n=e.handleEdit,c=e.newNote;console.log(0!==c.title.length);var o=t.map((function(e,t){return l.a.createElement(m,{key:e.id+e.title,title:e.title,content:e.content,id:e.id,handleDelete:a,handleEdit:n,index:t,newNote:c})}));return l.a.createElement("ul",{className:"note__list"},o)}),f=(a(14),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({title:"",content:"",id:0}),m=Object(s.a)(o,2),f=m[0],E=m[1],h=Object(n.useState)(1),p=Object(s.a)(h,2),N=p[0],b=p[1],_=Object(n.useState)(!1),v=Object(s.a)(_,2),O=v[0],j=v[1],g=Object(n.useState)(""),S=Object(s.a)(g,2),w=S[0],x=S[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notes"));e&&(c(e.allNotes),b(e.newId))}),[]),Object(n.useEffect)((function(){localStorage.setItem("notes",JSON.stringify({allNotes:a,newId:N}))}));var y=function(){E(Object(i.a)(Object(i.a)({},f),{},{title:"",content:""})),j(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"header__title"},"Tu lista de post-Its")),l.a.createElement("main",{className:"main"},l.a.createElement(u,{handleCreateNewNote:function(){c((function(e){return e.concat(f)})),b(N+1),y()},handleUpdateNote:function(){j(!1),y();var e=a;e[w].title=f.title,e[w].content=f.content,c(e)},handleInputNote:function(e,t){0===a.length&&b(1),E(Object(i.a)(Object(i.a)({},f),{},Object(r.a)({},e,t))),f.id!==N&&E(Object(i.a)(Object(i.a)({},f),{},{id:N}))},newNote:f,isEditing:O,resetPostNote:y}),l.a.createElement(d,{notes:a,handleDelete:function(e){c(a.filter((function(t,a){return a!==e})))},handleEdit:function(e){E(a[e]),j(!0),x(e)},newNote:f})),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"A CRUD project by"," ",l.a.createElement("a",{href:"https://sonia-sv.github.io/portfolio/#/",target:"_blank",rel:"noopener noreferrer"},"Sonia Sanz Vivas"))))});o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.4e2ab860.chunk.js.map