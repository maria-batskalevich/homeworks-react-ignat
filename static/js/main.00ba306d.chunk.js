(this["webpackJsonphomeworks-ignat-v3"]=this["webpackJsonphomeworks-ignat-v3"]||[]).push([[0],{12:function(e,t,n){e.exports={button:"Affairs_button__KipM7",active:"Affairs_active__2Fm_X",affair:"Affairs_affair__1F40t",item:"Affairs_item__3rQHU",high:"Affairs_high__20k-7",middle:"Affairs_middle__3IvBg",low:"Affairs_low__3y-Gt",all:"Affairs_all__3RN4E"}},13:function(e,t,n){e.exports={container:"Message_container__yjvQg",dialog:"Message_dialog__1GV2W",arrow:"Message_arrow__3bqdA",avatar:"Message_avatar__3wXNu",time:"Message_time__GMXcP",name:"Message_name__3tsvy"}},14:function(e,t,n){e.exports={menu:"header_menu__1aNIe",link:"header_link__2DPGp",active:"header_active__3g_qp",buttonMenu:"header_buttonMenu__2Vko7"}},17:function(e,t,n){e.exports={startValue:"SuperRange_startValue__eZKv-",range:"SuperRange_range__5qeKT",doubleRangeBlock:"SuperRange_doubleRangeBlock__1-2fv",doubleInput:"SuperRange_doubleInput__3Fu_L",backTone:"SuperRange_backTone__aSmY5"}},18:function(e,t,n){e.exports={greeting:"Greeting_greeting__25bfE",error:"Greeting_error__1GmXF",input:"Greeting_input__1gc9Y",errorInput:"Greeting_errorInput__3Hv2Q",button:"Greeting_button__Zwfye",count:"Greeting_count__2QldL"}},23:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__hUJqQ",errorInput:"SuperInputText_errorInput__15vEq",error:"SuperInputText_error__2NK_Y"}},24:function(e,t,n){e.exports={container:"SuperCheckbox_container__KIUVX",checkmark:"SuperCheckbox_checkmark__2smDY"}},31:function(e,t,n){e.exports={button:"SuperButton_button__U2bvu",default:"SuperButton_default__1rsaA",red:"SuperButton_red__13hTo",loadingButton:"SuperButton_loadingButton__3YKdC"}},34:function(e,t,n){e.exports={blue:"HW4_blue__2BEqs",column:"HW4_column__28jkC",testSpanError:"HW4_testSpanError__33MCa"}},35:function(e,t,n){e.exports={radio:"SuperRadio_radio__4_5sc",label:"SuperRadio_label__Jg_yZ"}},36:function(e,t,n){e.exports={dark:"HW12_dark__2Ze7k","dark-text":"HW12_dark-text__PF_5G",red:"HW12_red__2CLYT","red-text":"HW12_red-text__NonVr",orange:"HW12_orange__2Vwua","orange-text":"HW12_orange-text__2wz0P"}},48:function(e,t,n){e.exports={App:"App_App__1qZ2E"}},49:function(e,t,n){e.exports={error:"error_error__3fxWE"}},50:function(e,t,n){},51:function(e,t,n){e.exports={item:"HW8_item__2OlbE"}},53:function(e,t,n){e.exports={hw13:"H13_hw13__222ZA"}},60:function(e,t,n){},62:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),s=n.n(c),i=(n(60),n(48)),o=n.n(i),j=n(14),u=n.n(j),l=n(49),b=n.n(l),d=n(0);var O=function(){return Object(d.jsxs)("div",{className:b.a.error,children:[Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("p",{children:"We're sorry but it looks like that page doesn't exist anymore."})]})},h=n(5),x=n(13),p=n.n(x),m=function(e){return Object(d.jsxs)("div",{className:p.a.container,children:[Object(d.jsx)("img",{className:p.a.avatar,src:e.avatar,alt:""}),Object(d.jsxs)("div",{className:p.a.dialog,children:[Object(d.jsx)("div",{className:p.a.name,children:e.name}),Object(d.jsx)("div",{className:p.a.message,children:e.message}),Object(d.jsx)("div",{className:p.a.time,children:e.time}),Object(d.jsx)("div",{className:p.a.arrow})]})]})},v="https://i.postimg.cc/ydtzBx4p/B67-A3875-Web.jpg",f="Maria",_="Hi! What is your name?",g="23:00";var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:v,name:f,message:_,time:g}),Object(d.jsx)("hr",{})]})},C=n(2),N=n(12),y=n.n(N);var w=function(e){var t=y.a.item+" "+y.a[e.affair.priority];return Object(d.jsxs)("div",{className:y.a.affair,children:[Object(d.jsx)("div",{className:y.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.item+" "+y.a.button,children:"X"})]})},S=n(4),T=n(6),E=n(31),A=n.n(E),I=function(e){var t=e.red,n=e.className,a=Object(T.a)(e,["red","className"]),r="".concat(A.a.button," ").concat(t?A.a.red:A.a.default," ").concat(n);return Object(d.jsx)("button",Object(S.a)({className:r},a))};var H=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t.currentTarget.value)},a=function(t){return y.a.button+(e.filter===t?" "+y.a.active:"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(I,{onClick:n,className:a("all"),value:"all",children:"All"}),Object(d.jsx)(I,{onClick:n,className:a("high"),value:"high",children:"High"}),Object(d.jsx)(I,{onClick:n,className:a("middle"),value:"middle",children:"Middle"}),Object(d.jsx)(I,{onClick:n,className:a("low"),value:"low",children:"Low"})]})},M=[{_id:1,name:"React",priority:"high"},{_id:2,name:"JS",priority:"middle"},{_id:3,name:"HTML&CSS",priority:"low"},{_id:4,name:"Redux",priority:"high"},{_id:5,name:"TypeScript",priority:"middle"}];var R=function(){var e=Object(a.useState)(M),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:["homeworks 2",Object(d.jsx)(H,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{})]})},B=n(30),G=n(18),W=n.n(G),F=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,i=r?W.a.errorInput:W.a.input;return Object(d.jsxs)("div",{className:W.a.greeting,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{id:"input",value:t,onChange:n,className:i,onKeyDown:s,onBlur:n}),Object(d.jsx)("div",{className:W.a.error,children:r})]}),Object(d.jsx)(I,{onClick:a,className:W.a.button,disabled:!t,children:"ADD+"}),Object(d.jsx)("div",{className:W.a.count,children:c})]})},L=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),u=j[0],l=j[1],b=function(){n(s),alert("Hello,  ".concat(s,"!")),i("")},O=t.length;return Object(d.jsx)(F,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&l("")):(s&&i(""),l("name is require!"))},addUser:b,error:u,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&b()}})},D=n(90);var P=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:["homeworks 3",Object(d.jsx)(L,{users:n,addUserCallback:function(e){var t={_id:Object(D.a)(),name:e};r([].concat(Object(B.a)(n),[t]))}})]})},J=n(23),K=n.n(J),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(K.a.error," ").concat(i||""),u="".concat(K.a.input," ").concat(c?K.a.errorInput:K.a.superInput," ").concat(s," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},q=n(34),V=n.n(q),X=n(24),Y=n.n(X),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:Y.a.container,children:[Object(d.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),Object(d.jsx)("span",{className:Y.a.checkmark}),r&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:V.a.column,children:[Object(d.jsx)(U,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(U,{className:V.a.blue}),Object(d.jsx)(I,{children:"default"}),Object(d.jsx)(I,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(I,{disabled:!0,children:"disabled"}),Object(d.jsx)(Z,{checked:j,onChangeChecked:u,children:"One"})]}),Object(d.jsx)("hr",{})]})},z=(n(62),function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],u=r||{},l=u.children,b=u.onDoubleClick,O=u.className,h=Object(T.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O),p=String.fromCharCode(9998);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(U,Object(S.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(d.jsxs)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:[Object(d.jsx)("span",{children:p})," ",l||c.value]}))})});function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:["homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(z,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(I,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(d.jsx)(I,{onClick:function(){r(ee("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{})]})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(R,{}),Object(d.jsx)(P,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(te,{})]})},ae=n(50),re=n.n(ae),ce=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(T.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(d.jsx)("option",{className:re.a.option,value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(S.a)(Object(S.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},se=n(35),ie=n.n(se),oe=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=Object(T.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o=ie.a.radio,j=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:ie.a.label,children:[Object(d.jsx)("input",Object(S.a)({className:o,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:j})},je=["x","y","z"];var ue=function(){var e=Object(a.useState)(je[1]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ce,{options:je,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(oe,{name:"radio",options:je,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},le=function(e,t){switch(t.type){case"sort":var n=Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},be=n(51),de=n.n(be),Oe=[{_id:0,name:"Maria",age:31},{_id:1,name:"Emma",age:22},{_id:2,name:"Sophia",age:16},{_id:3,name:"Isabella",age:64},{_id:4,name:"Mia",age:35},{_id:5,name:"Olivia",age:45}];var he=function(){var e=Object(a.useState)(Oe),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(d.jsxs)("div",{className:de.a.item,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",c,Object(d.jsxs)("div",{children:[Object(d.jsx)(I,{onClick:function(){return r(le(Oe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(I,{onClick:function(){return r(le(Oe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(I,{onClick:function(){return r(le(Oe,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var xe=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(C.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(!1),u=Object(C.a)(j,2),l=u[0],b=u[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),l?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(I,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(d.jsx)(I,{onClick:O,children:"stop"})]})};var pe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(xe,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},me=n(15),ve={isLoading:!1},fe=function(e){return{type:"CHANGE_LOADING",isLoading:e}},_e=n.p+"static/media/loading.b98a8c76.svg",ge=n.p+"static/media/loading2.ddc8ef47.svg",ke=function(){var e=Object(me.c)((function(e){return e.loading.isLoading})),t=Object(me.b)();return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:_e,alt:"loading..."}),Object(d.jsx)("img",{src:ge,alt:"loading..."})]}):Object(d.jsx)("div",{children:Object(d.jsx)(I,{onClick:function(){t(fe(!0)),setTimeout((function(){t(fe(!1))}),2e3)},children:"set loading..."})})})};var Ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",Object(d.jsx)(ke,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Ne=n(17),ye=n.n(Ne),we=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,r=e.min,c=Object(T.a)(e,["type","onChange","onChangeRange","className","min"]),s="".concat(ye.a.range," ").concat(a||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(S.a)({type:"range",value:r,onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},c))})},Se=function(e){var t=e.onChangeRange,n=(e.value,e.min),a=e.onDoubleChangeRange,r=e.max,c="".concat(ye.a.range," ").concat(ye.a.doubleInput);return Object(d.jsxs)("div",{className:ye.a.doubleRangeBlock,children:[Object(d.jsx)("div",{className:ye.a.backTone}),Object(d.jsx)("input",{type:"range",onChange:function(e){+e.currentTarget.value<=r&&t(+e.currentTarget.value)},value:n,className:c}),Object(d.jsx)("input",{type:"range",onChange:function(e){+e.currentTarget.value>=n&&a(+e.currentTarget.value)},value:r,className:c})]})};var Te=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(100),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e){return r(e)};return Object(d.jsxs)("div",{children:["homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(we,{onChangeRange:j,min:n})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(Se,{onChangeRange:j,onDoubleChangeRange:function(e){return o(e)},max:i,min:n}),Object(d.jsx)("span",{children:i})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ue,{}),Object(d.jsx)(he,{}),Object(d.jsx)(pe,{}),Object(d.jsx)(Ce,{}),Object(d.jsx)(Te,{})]})},Ae=n(36),Ie=n.n(Ae),He={theme:"orange"},Me=["dark","red","orange"];var Re=function(){var e=Object(me.c)((function(e){return e.theme.theme})),t=Object(me.b)();return Object(d.jsxs)("div",{className:Ie.a[e],children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:Ie.a[e+"-text"],children:"homeworks 12"}),Object(d.jsx)(oe,{name:"radio",options:Me,value:e,onChangeOption:function(e){t({type:"CHANGE_THEME",newTheme:e})}}),Object(d.jsx)("hr",{})]})},Be=n(53),Ge=n.n(Be),We=n(20),Fe=n.n(We),Le=n(29),De=n(54),Pe=n.n(De),Je=function(){var e=Object(Le.a)(Fe.a.mark((function e(t){var n;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Pe.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:t});case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data.info);case 8:return e.prev=8,e.t0=e.catch(0),console.dir(Object(S.a)({},e.t0)),console.log(e.t0),console.log(e.t0.response?e.t0.response.data.errorText:e.t0.message),e.abrupt("return",e.t0.response?e.t0.response.data.errorText:e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(a.useState)(!1),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(C.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(!0),u=Object(C.a)(j,2),l=u[0],b=u[1],O=function(){var e=Object(Le.a)(Fe.a.mark((function e(){var t;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),e.next=3,Je(n);case 3:t=e.sent,o(t),b(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(Z,{checked:n,onChangeChecked:function(){return r(!n)},children:"checkbox"}),Object(d.jsx)(I,{onClick:O,disabled:!l,children:"Send request"}),Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:!!i&&i})})]})},Ue=function(){return Object(d.jsxs)("div",{className:Ge.a.hw13,children:[Object(d.jsx)("hr",{}),"homeworks 13",Object(d.jsx)(Ke,{}),Object(d.jsx)("hr",{})]})};var qe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(Re,{}),Object(d.jsx)(Ue,{})]})},Ve="/pre-junior",Xe="/junior",Ye="/junior-plus";var Ze=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:Ve})}}),Object(d.jsx)(h.b,{path:Ve,render:function(){return Object(d.jsx)(ne,{})}}),Object(d.jsx)(h.b,{path:Xe,render:function(){return Object(d.jsx)(Ee,{})}}),Object(d.jsx)(h.b,{path:Ye,render:function(){return Object(d.jsx)(qe,{})}}),Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(O,{})}})]})})},Qe=n(16);var ze=function(){return Object(d.jsxs)("div",{className:u.a.menu,children:[Object(d.jsx)(Qe.b,{to:Ve,className:u.a.link,activeClassName:u.a.active,children:"PreJunior"}),Object(d.jsx)(Qe.b,{to:Xe,className:u.a.link,activeClassName:u.a.active,children:"Junior"}),Object(d.jsx)(Qe.b,{to:Ye,className:u.a.link,activeClassName:u.a.active,children:"Junior+"}),Object(d.jsx)("div",{className:u.a.buttonMenu})]})};var $e=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(Qe.a,{children:[Object(d.jsx)(ze,{}),Object(d.jsx)(Ze,{})]})})};var et=function(){return Object(d.jsx)("div",{className:o.a.App,children:Object(d.jsx)($e,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=n(38),nt=Object(tt.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:t.isLoading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return Object(S.a)(Object(S.a)({},e),{},{theme:t.newTheme});default:return e}}}),at=Object(tt.b)(nt),rt=at;window.store=at,s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(me.a,{store:rt,children:Object(d.jsx)(et,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.00ba306d.chunk.js.map