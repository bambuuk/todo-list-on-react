(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(8),i=a.n(c),r=(a(13),a(7)),o=a(2),l=a(3),d=a(5),u=a(4),b=(a(14),a(15),a(0)),j=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("h1",{className:"title title_margin",children:"Task List"})}}]),a}(n.Component),h=j,k=(a(17),a(18),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={edit:!1,task:""},t.changeTask=function(){t.setState((function(e){return{edit:!e.edit,task:t.props.task}}))},t.editValueTask=function(e){t.setState({task:e.target.value})},t.sendInfoTask=function(){var e=t.props,a=e.editTask,n=e.currentId;t.state.task&&(a(n,t.state),t.setState((function(t){return{edit:!t.edit}})))},t}return Object(l.a)(a,[{key:"render",value:function(){return this.state.edit?Object(b.jsxs)("li",{className:"list-item list-item_mrg",children:[Object(b.jsx)("input",{name:"task",type:"text",placeholder:"Change the value please",className:"list-item__input",value:this.state.task,onChange:this.editValueTask}),Object(b.jsx)("div",{className:"btns",children:Object(b.jsx)("button",{type:"button",className:"btn btn-dark btn_margin",onClick:this.sendInfoTask,children:"Edit"})})]}):Object(b.jsxs)("li",{className:"list-item list-item_mrg",children:[Object(b.jsx)("span",{className:"list-item__task",children:this.props.task}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-dark btn_margin",onClick:this.changeTask,children:"Edit"}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger btn_margin",onClick:this.props.deleteTask,children:"Delete"})]})]})}}]),a}(n.Component)),p=k,f=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.data,a=t.deleteTask,n=t.editTask,s=e.map((function(t){var e=t.task,s=t.id;return Object(b.jsx)(p,{task:e,deleteTask:function(){return a(s)},editTask:n,currentId:s},s)}));return e.length?Object(b.jsx)("ul",{className:"list",children:s}):Object(b.jsx)("p",{style:{fontSize:30,textAlign:"center"},children:"There are no tasks here yet"})}}]),a}(n.Component),m=f,O=(a(19),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={task:""},t.changeState=function(e){t.setState({task:e.target.value})},t.sendInfoTask=function(){t.state.task&&(t.props.addTaskToState(t.state),t.setState({task:""}))},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"add-item",children:[Object(b.jsx)("label",{htmlFor:"add-item-text",className:"add-item__label",children:"Add a task"}),Object(b.jsx)("input",{id:"add-item-text",name:"task",type:"text",placeholder:"Enter information please",className:"add-item__input",value:this.state.task,onChange:this.changeState}),Object(b.jsx)("button",{type:"button",className:"btn btn-success add-item__btn",onClick:this.sendInfoTask,children:"Send"})]})}}]),a}(n.Component)),v=O,T=(a(20),function(t){var e=t.counterTasks;return Object(b.jsxs)("p",{className:"task-info task-info_center",children:["All tasks: ",e]})}),x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={data:[]},t.addTaskToState=function(e){t.setState((function(t){var a=t.data,n=Object(r.a)(a),s=Date.now();return n.push({task:e.task,id:s}),{data:n}}))},t.deleteTask=function(e){t.setState((function(t){return{data:t.data.filter((function(t){return t.id!==e}))}}))},t.editTask=function(e,a){t.setState((function(t){var n=t.data,s=Object(r.a)(n);return s.forEach((function(t){t.id===e&&(t.task=a.task)})),{data:s}}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.data,e=this.state.data.length;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(T,{counterTasks:e}),Object(b.jsx)(m,{data:t,deleteTask:this.deleteTask,editTask:this.editTask}),Object(b.jsx)(v,{addTaskToState:this.addTaskToState})]})}}]),a}(n.Component),g=x;i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d1b8945f.chunk.js.map