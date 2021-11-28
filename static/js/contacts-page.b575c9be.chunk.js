(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{144:function(t,e,n){"use strict";var r,a,o,c=n(168),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){o=!1}function s(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function l(){return o||(o=function(){r||s(u);for(var t,e=r.split(""),n=[],a=c.nextValue();e.length>0;)a=c.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return s(t),r},seed:function(t){c.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},165:function(t,e,n){t.exports={button:"ContactsForm_button__3p41f"}},166:function(t,e,n){"use strict";t.exports=n(167)},167:function(t,e,n){"use strict";var r=n(144),a=n(169),o=n(173),c=n(174)||0;function u(){return a(c)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},168:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},169:function(t,e,n){"use strict";var r,a,o=n(170);n(144);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+=o(n)}},170:function(t,e,n){"use strict";var r=n(144),a=n(171),o=n(172);t.exports=function(t){for(var e,n=0,c="";!e;)c+=o(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},171:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},172:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),o="";;)for(var c=t(a),u=a;u--;)if((o+=e[c[u]&r]||"").length===+n)return o}},173:function(t,e,n){"use strict";var r=n(144);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},174:function(t,e,n){"use strict";t.exports=0},175:function(t,e,n){t.exports={contactList:"ContactsList_contactList__1zNvL"}},176:function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__1DzS7",buttonDel:"ContactsListItem_buttonDel__6M52R"}},177:function(t,e,n){t.exports={container:"Container_container__1p_lv"}},200:function(t,e,n){"use strict";n.r(e);var r=n(50),a=n(51),o=n(53),c=n(52),u=n(0),i=n(21),s=n(29),l=n(5),h=n(54),f=n(9),b=n.n(f),d=n(165),p=n.n(d),m=n(166),j=n.n(m),x=n(2),g=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).initialState={name:"",number:""},t.state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(l.a)({},r,a))},t.handleSubmit=function(e){e.preventDefault();t.props.items.some((function(e){return e.name===t.state.name||e.number===t.state.number}))?alert("Contact is already in contacts"):(t.props.onSubmit(Object(s.a)({},t.state)),t.reset())},t.reset=function(){t.setState(t.initialState)},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(x.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(x.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(u.Component);g.PropsType={onSubmit:b.a.func.isRequired};var v=Object(i.b)((function(t){return{items:h.d.getAllContacts(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,r=e.number;return t(h.b.addContact({name:n,number:r}))}}}))(g),O=n(175),C=n.n(O),y=function(t){var e=t.children;return Object(x.jsx)("ul",{className:C.a.contactList,children:e})};y.prototype={children:b.a.node};var w=y,I=n(176),_=n.n(I),k=function(t){var e=t.onDeleteContact,n=t.contacts;return Object(x.jsx)(x.Fragment,{children:n.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(x.jsxs)("li",{className:_.a.contactItem,children:[r,": ",a,Object(x.jsx)("button",{className:_.a.buttonDel,type:"submit",onClick:function(){return e(n)},children:"Delete"})]},n)}))})};k.prototype={contacts:b.a.arrayOf(b.a.shape({id:b.a.string.isRequired,name:b.a.string.isRequired,number:b.a.string.isRequired})),onDeleteContact:b.a.func};var D=Object(i.b)((function(t){return{contacts:h.d.getFilteredContact(t)}}),(function(t){return{onDeleteContact:function(e){return t(h.b.deleteContact(e))}}}))(k),S=n(177),M=n.n(S),q=function(t){var e=t.children;return Object(x.jsx)("div",{className:M.a.container,children:e})},A=Object(i.b)((function(t){return{value:h.d.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(h.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:"Find contacts by name"}),Object(x.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})})),N=n(57),F=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(x.jsxs)(q,{children:[Object(x.jsx)("h1",{children:"PhoneBook"}),Object(x.jsx)(v,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(A,{}),Object(x.jsx)(w,{children:Object(x.jsx)(D,{})})]})]})}}]),n}(u.Component);e.default=Object(i.b)(null,(function(t){return{fetchContacts:function(){return t(N.a.fetchContacts())}}}))(F)}}]);
//# sourceMappingURL=contacts-page.b575c9be.chunk.js.map