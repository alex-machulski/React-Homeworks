(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={myAffairs:"Affairs_myAffairs__31lWi",deleteButton:"Affairs_deleteButton__2GDxf",priorityButton:"Affairs_priorityButton__1EZvq",highPriority:"Affairs_highPriority__3AuRf",middlePriority:"Affairs_middlePriority__3BrJc",lowPriority:"Affairs_lowPriority__1pcXL"}},function(e,a,t){e.exports={back:"Message_back__2MIXA",avatar:"Message_avatar__3Vu0M","speech-wrapper":"Message_speech-wrapper__mPeH_",imgavatar:"Message_imgavatar__2f6AO",bubble:"Message_bubble__10fbH",txt:"Message_txt__2vdLx",name:"Message_name__1JSmb",message:"Message_message__2tozn",timestamp:"Message_timestamp__2iVap"}},function(e,a,t){e.exports={item:"Header_item__1Z83l",activeLink:"Header_activeLink__2V_qs",navbar:"Header_navbar__4gw90",closed:"Header_closed__7VmKI",buttonMenu:"Header_buttonMenu__CeJhh"}},,,,function(e,a,t){e.exports={errorBlock:"Error404_errorBlock__3T03w",number:"Error404_number__2DYn0",message:"Error404_message__1k5DE",cat:"Error404_cat__1NRm8"}},function(e,a,t){e.exports={error:"Greeting_error__2areR",noError:"Greeting_noError__GHxw7",errorMessage:"Greeting_errorMessage__3u1c6",buttonAdd:"Greeting_buttonAdd__2LcJr"}},function(e,a,t){e.exports={container:"Clock_container__1LXL0",buttons:"Clock_buttons__2eMV_",date:"Clock_date__3lT9j",time:"Clock_time__1qrCz"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2nR33",errorInput:"SuperInputText_errorInput__2qyiK",error:"SuperInputText_error__XuhCg"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3WddL",red:"SuperButton_red__68-L6"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1Js-2",spanClassName:"SuperCheckbox_spanClassName__32vYw"}},,,,,,,function(e,a,t){e.exports={App:"App_App__1tACm"}},function(e,a,t){e.exports={blue:"HW4_blue__2hUI6",column:"HW4_column__1xCfb"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__3GvIt"}},,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(37),t(27)),i=t.n(o),u=t(1),s=t(9),m=t(2),d=t(12),E=t.n(d);var p=function(){return r.a.createElement("div",{className:E.a.errorBlock},r.a.createElement("div",{className:E.a.number},"404"),r.a.createElement("div",{className:E.a.message},"Page not found!"),r.a.createElement("div",{className:E.a.cat},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},f=t(7),_=t.n(f);var v=function(e){return r.a.createElement("div",{className:_.a.back},r.a.createElement("div",{className:_.a.speechWrapper},r.a.createElement("div",{className:_.a.imgavatar},r.a.createElement("img",{className:_.a.avatar,src:e.avatar})),r.a.createElement("div",{className:_.a.bubble},r.a.createElement("div",{className:_.a.txt},r.a.createElement("p",{className:_.a.name},e.name),r.a.createElement("p",{className:_.a.message},e.message),r.a.createElement("span",{className:_.a.timestamp},e.time)))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Tom",g="How are you?",k="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:b,message:g,time:k}),r.a.createElement("hr",null))},N=t(6),y=t.n(N);var O=function(e){var a=y.a.highPriority;return"middle"===e.affair.priority&&(a=y.a.middlePriority),"low"===e.affair.priority&&(a=y.a.lowPriority),r.a.createElement("div",{className:a},e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.deleteButton},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("div",{className:y.a.myAffairs},a),r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:y.a.priorityButton},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:y.a.priorityButton},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:y.a.priorityButton},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:y.a.priorityButton},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(w),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,a){var t=w;return"all"===a?e:("high"===a?t=e.filter((function(e){return"high"===e.priority})):"middle"===a?t=e.filter((function(e){return"middle"===e.priority})):"low"===a&&(t=e.filter((function(e){return"low"===e.priority}))),t)}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(31),A=t(13),M=t.n(A),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l.length>0?M.a.error:M.a.noError;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{className:M.a.buttonAdd,onClick:n},"add"),r.a.createElement("span",null," Total users: ",c),r.a.createElement("span",{className:M.a.errorMessage}," ",l," "))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),d=m[0],E=m[1],p=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){E(""),o.length>0?(alert("Hello, ".concat(o,"!")),t(o),i("")):E(" Error! Name cannot be empty! ")},error:d,totalUsers:p})},T=t(47);var I=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){l([{_id:Object(T.a)(),name:e}].concat(Object(S.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=t(3),F=t(16),H=t.n(F),J=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(L.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(H.a.error," ").concat(i||""),m="".concat(c?H.a.errorInput:H.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},W=t(28),D=t.n(W),G=t(19),U=t.n(G),X=function(e){var a=e.red,t=e.className,n=Object(L.a)(e,["red","className"]),l="".concat(a?U.a.red:U.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(20),K=t.n(q),R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(L.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o,id:"supercheckbox"},c)),r.a.createElement("label",{htmlFor:"supercheckbox"},l&&r.a.createElement("span",{className:K.a.spanClassName},l)))};var V=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(X,{red:!!c,onClick:o},"delete "),r.a.createElement(R,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(R,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=t(29),Y=t.n(z),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(L.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],d=l||{},E=d.children,p=d.onDoubleClick,f=d.className,_=Object(L.a)(d,["children","onDoubleClick","className"]),v="".concat(Y.a.editableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:v},_),E||c.value,r.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/45/45706.png",width:"20px"})))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Q(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}$("test",{x:"A",y:1});Q("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(X,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(X,{onClick:function(){var e=Q("editable-span-value","");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(x,null),r.a.createElement(I,null),r.a.createElement(V,null),r.a.createElement(ee,null))},te=(t(38),function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(L.a)(e,["options","onChange","onChangeOption"]),c=null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)}),ne=(t(39),function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(L.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),i=t?t.map((function(e,t){return r.a.createElement("div",{className:"form_radio",key:a+"-"+t},r.a.createElement("input",{id:"hw7-radio"+t,className:"radio",type:"radio",name:a,checked:n===e,value:e,onChange:o}),r.a.createElement("label",{htmlFor:"hw7-radio"+t},r.a.createElement("span",null),e))})):[];return r.a.createElement(r.a.Fragment,null,i)}),re=["x","y","z"];var le=function(){var e=Object(n.useState)(re[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:re,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ne,{name:"radio",options:re,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=t(17),oe=function(e,a){switch(a.type){case"sort":switch(a.payload){case"up":return e.map((function(e){return Object(ce.a)({},e)})).sort((function(e,a){return e.name<a.name?-1:1}));case"down":return e.map((function(e){return Object(ce.a)({},e)})).sort((function(e,a){return e.name>a.name?-1:1}))}break;case"check":return e.map((function(e){return Object(ce.a)({},e)})).filter((function(e){return e.age>=a.payload}));default:return e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(n.useState)(ie),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(oe(ie,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(X,{onClick:function(){return l(oe(ie,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(X,{onClick:function(){return l(oe(ie,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=t(14),me=t.n(se);var de=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],p=d[1],f=function(){clearInterval(t)},_=i?i.toLocaleTimeString():"Press 'start' to show the time",v=null===i||void 0===i?void 0:i.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{className:me.a.container},r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},className:me.a.time},_),E&&r.a.createElement("div",{className:me.a.date},"Today is: ",v)),r.a.createElement("div",{className:me.a.buttons},r.a.createElement(X,{onClick:function(){f();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(X,{onClick:f},"stop")))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(de,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var pe=function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(ue,null),r.a.createElement(Ee,null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"JuniorPlus Tasks")},_e="/pre-junior",ve="/junior",he="/junior-plus";var be=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:_e})}}),r.a.createElement(m.b,{path:_e,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(m.b,{path:ve,render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(m.b,{path:he,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(p,null)}})))},ge=t(8),ke=t.n(ge);var Ce=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c="".concat(ke.a.navbar," ").concat(t?"":ke.a.closed);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:ke.a.buttonMenu,onClick:function(){return l(!t)}},"Menu")),r.a.createElement("nav",{className:c},r.a.createElement("div",{className:ke.a.item},r.a.createElement(s.b,{to:_e,activeClassName:ke.a.activeLink},"Pre-Junior")),r.a.createElement("div",{className:ke.a.item},r.a.createElement(s.b,{to:ve,activeClassName:ke.a.activeLink},"Junior")),r.a.createElement("div",{className:ke.a.item},r.a.createElement(s.b,{to:he,activeClassName:ke.a.activeLink},"Junior-Plus"))))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Ce,null),r.a.createElement(be,null)))};var ye=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.111da563.chunk.js.map