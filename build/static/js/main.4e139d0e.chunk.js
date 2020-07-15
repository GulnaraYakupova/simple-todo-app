(this["webpackJsonpmy-todo-list"]=this["webpackJsonpmy-todo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=(a(14),a(2)),c=a(1),u=a(3),s=a(4),m=a(6),d=a(5),p=(a(15),a(16),a(17),a(18),function(e){var t=e.label,a=e.onLabelClick,n="todo-item";return e.done&&(n+=" todo-item--done"),e.important&&(n+=" todo-item--important"),o.a.createElement("span",{className:n,onClick:a},t)}),f=function(e){var t=e.group,a=e.tasks,n=e.color,r=e.onLabelClick,l=e.onImportantBtnClick,i=e.onDeleteButtonClick,c={backgroundColor:n},u=a.map((function(e){var t=e.id,a=e.label,n=e.done,c=e.important;return o.a.createElement("li",{key:t},o.a.createElement(p,{label:a,onLabelClick:function(){return r(t)},done:n,important:c}),o.a.createElement("div",{className:"todo-group__buttons"},o.a.createElement("button",{className:"todo-group__button todo-group__button--important fa fa-exclamation",onClick:function(){return l(t)}}),o.a.createElement("button",{className:"todo-group__button todo-group__button--delete fa fa-trash",onClick:function(){return i(t)}})))}));return o.a.createElement("div",{className:"todo-group"},o.a.createElement("h3",{style:c},t),o.a.createElement("ul",{className:"todo-group__list"},u))},b=["rgb(0, 0, 0)","rgb(214, 24, 93)","rgb(226, 59, 53)"],h=function(e){var t=e.data,a=e.onLabelClick,n=e.onImportantBtnClick,r=e.onDeleteButtonClick,l=new Set(t.map((function(e){return e.group}))),i=Array.from(l).map((function(e,l){return o.a.createElement(f,{group:e,color:b[l],onLabelClick:a,tasks:t.filter((function(t){return t.group===e})),key:e,onImportantBtnClick:n,onDeleteButtonClick:r})}));return o.a.createElement("section",{className:"todo-list"},i)},g=(a(19),function(){return o.a.createElement("h1",{className:"app-header"},"Simple Todo app")}),k=(a(20),function(e){var t=e.onSearchingChange;return o.a.createElement("input",{type:"text",placeholder:"type to search",className:"search-panel",onChange:function(e){return t(e.target.value)}})}),v=(a(21),function(e){var t=e.activeFilter,a=e.onFilterClick,n=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(e){var n=e.name,r=e.label;return o.a.createElement("button",{className:"filter__button ".concat(n===t?"filter__button--active":""),type:"button",key:n,onClick:function(){return a(n)}},r)}));return o.a.createElement("div",{className:"filter"},n)}),C=(a(22),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={label:"",groupValue:"Todo"},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.label,o=a.groupValue;e.props.onNewItemSubmit(n,o),e.setState({label:""})},e.onGroupChange=function(t){e.setState({groupValue:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.groups,a=this.state.groupValue,n=t.map((function(t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement("input",{className:"new-item__checkbox",type:"radio",name:"group",value:t,id:t,onChange:e.onGroupChange,checked:a===t}),o.a.createElement("label",{className:"new-item__group",htmlFor:t},t))}));return o.a.createElement("form",{className:"new-item",onSubmit:this.onFormSubmit},o.a.createElement("input",{className:"new-item__label",type:"text",placeholder:"type your next task...",onChange:this.onLabelChange,value:this.state.label}),o.a.createElement("div",{className:"new-item__groups-block"},n),o.a.createElement("button",{className:"new-item__button",type:"submit"},"Add"))}}]),a}(n.Component)),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).maxId=100,e.state={todoData:[e.toFormData(1,"Reply email","Todo"),e.toFormData(2,"Meet Sarah","Todo"),e.toFormData(3,"Make Dinner","Todo"),e.toFormData(4,"Milk","To buy"),e.toFormData(5,"Chease","To buy"),e.toFormData(6,"Book","To buy"),e.toFormData(7,"To play with kids","Family")],searchingText:"",activeFilter:"all"},e.labelClickHandler=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(c.a)(a.slice(0,n)),[Object(i.a)(Object(i.a)({},a[n]),{},{done:!a[n].done})],Object(c.a)(a.slice(n+1)))}}))},e.importantClickHandler=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(c.a)(a.slice(0,n)),[Object(i.a)(Object(i.a)({},a[n]),{},{important:!a[n].important})],Object(c.a)(a.slice(n+1)))}}))},e.deleteClickHandler=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(c.a)(a.slice(0,n)),Object(c.a)(a.slice(n+1)))}}))},e.newItemAddHandler=function(t,a){e.setState((function(n){var o=n.todoData,r=Object(c.a)(o);return r.push(e.toFormData(e.maxId++,t,a)),{todoData:r}}))},e.searchingChangeHandler=function(t){e.setState({searchingText:t})},e.filterClickHandler=function(t){e.setState({activeFilter:t})},e}return Object(s.a)(a,[{key:"toFormData",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{id:e,label:t,group:a,important:n,done:o}}},{key:"searchItems",value:function(e,t){return e.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())}))}},{key:"filterItems",value:function(e,t){switch(t){case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.searchingText,n=e.activeFilter,r=this.filterItems(t,n),l=this.searchItems(r,a);return o.a.createElement("main",{className:"app"},o.a.createElement(g,null),o.a.createElement("div",{className:"app__search-filter"},o.a.createElement(k,{onSearchingChange:this.searchingChangeHandler}),o.a.createElement(v,{activeFilter:n,onFilterClick:this.filterClickHandler})),o.a.createElement(h,{data:l,onLabelClick:this.labelClickHandler,onImportantBtnClick:this.importantClickHandler,onDeleteButtonClick:this.deleteClickHandler}),o.a.createElement(C,{groups:["Todo","To buy","Family"],onNewItemSubmit:this.newItemAddHandler}))}}]),a}(n.Component);l.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4e139d0e.chunk.js.map