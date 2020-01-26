(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),i=a(7),c=(a(25),a(19)),u=a(4),m=a(5),s=a(8),d=a(6),k=a(9),h=a(11),p=r.a.createContext({bookmarks:[],addBookmark:function(){},deleteBookmark:function(){},updateBookmark:function(){}}),E={API_ENDPOINT:"https://blooming-spire-89788.herokuapp.com/api",API_KEY:"910237e9-95fd-4ecf-b17b-4af6605a1f01"},f=(a(27),function(){return r.a.createElement("span",{className:"AddBookmark__required"},"*")}),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.handleSubmit=function(e){e.preventDefault();var t=e.target,n=t.title,r=t.url,o=t.description,l=t.rating,i={title:n.value,url:r.value,description:o.value,rating:l.value};a.setState({error:null}),fetch(E.API_ENDPOINT,{method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json",authorization:"bearer ".concat(E.API_KEY)}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.value="",r.value="",o.value="",l.value="",a.context.addBookmark(e),a.props.history.push("/")}).catch(function(e){console.error(e),a.setState({error:e})})},a.handleClickCancel=function(){a.props.history.push("/")},a}return Object(k.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("section",{className:"AddBookmark"},r.a.createElement("h2",null,"Create a bookmark"),r.a.createElement("form",{className:"AddBookmark__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"AddBookmark__error",role:"alert"},e&&r.a.createElement("p",null,e.message)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title"," ",r.a.createElement(f,null)),r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Great website!",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"url"},"URL"," ",r.a.createElement(f,null)),r.a.createElement("input",{type:"url",name:"url",id:"url",placeholder:"https://www.great-website.com/",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",id:"description"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},"Rating"," ",r.a.createElement(f,null)),r.a.createElement("input",{type:"number",name:"rating",id:"rating",defaultValue:"1",min:"1",max:"5",required:!0})),r.a.createElement("div",{className:"AddBookmark__buttons"},r.a.createElement("button",{type:"button",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(n.Component);b.contextType=p;var v=b,g=(a(29),function(){return r.a.createElement("span",{className:"EditBookmark__required"},"*")}),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,id:"",title:"",url:"",description:"",rating:1},a.handleChangeTitle=function(e){a.setState({title:e.target.value})},a.handleChangeUrl=function(e){a.setState({url:e.target.value})},a.handleChangeDescription=function(e){a.setState({description:e.target.value})},a.handleChangeRating=function(e){a.setState({rating:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.bookmarkId,n=a.state,r={id:n.id,title:n.title,url:n.url,description:n.description,rating:n.rating};fetch(E.API_ENDPOINT+"/".concat(t),{method:"PATCH",body:JSON.stringify(r),headers:{"content-type":"application/json",authorization:"Bearer ".concat(E.API_KEY)}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){a.resetFields(r),a.context.updateBookmark(r),a.props.history.push("/")}).catch(function(e){console.error(e),a.setState({error:e})})},a.resetFields=function(e){a.setState({id:e.id||"",title:e.title||"",url:e.url||"",description:e.description||"",rating:e.rating||""})},a.handleClickCancel=function(){a.props.history.push("/")},a}return Object(k.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.bookmarkId;fetch(E.API_ENDPOINT+"/".concat(t),{method:"GET",headers:{authorization:"Bearer ".concat(E.API_KEY)}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(t){e.setState({id:t.id,title:t.title,url:t.url,description:t.description,rating:t.rating})}).catch(function(t){console.error(t),e.setState({error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.title,n=e.url,o=e.description,l=e.rating;return r.a.createElement("section",{className:"EditBookmark"},r.a.createElement("h2",null,"Edit bookmark"),r.a.createElement("form",{className:"EditBookmark__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"EditBookmark__error",role:"alert"},t&&r.a.createElement("p",null,t.message)),r.a.createElement("input",{type:"hidden",name:"id"}),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title"," ",r.a.createElement(g,null)),r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Great website!",required:!0,value:a,onChange:this.handleChangeTitle})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"url"},"URL"," ",r.a.createElement(g,null)),r.a.createElement("input",{type:"url",name:"url",id:"url",placeholder:"https://www.great-website.com/",required:!0,value:n,onChange:this.handleChangeUrl})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",id:"description",value:o,onChange:this.handleChangeDescription})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},"Rating"," ",r.a.createElement(g,null)),r.a.createElement("input",{type:"number",name:"rating",id:"rating",min:"1",max:"5",required:!0,value:l,onChange:this.handleChangeRating})),r.a.createElement("div",{className:"EditBookmark__buttons"},r.a.createElement("button",{type:"button",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(n.Component);y.contextType=p;var B=y,_=a(3),j=a.n(_);a(33);function N(e){var t=[0,0,0,0,0].map(function(t,a){return a<e.value?r.a.createElement("span",{key:a},"\u2605 "):r.a.createElement("span",{key:a},"\u2606 ")});return r.a.createElement("div",{className:"rating"},t)}a(35);function C(e){return r.a.createElement(p.Consumer,null,function(t){return r.a.createElement("li",{className:"BookmarkItem"},r.a.createElement("div",{className:"BookmarkItem__row"},r.a.createElement("h3",{className:"BookmarkItem__title"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title)),r.a.createElement(N,{value:e.rating})),r.a.createElement("p",{className:"BookmarkItem__description"},e.description),r.a.createElement("div",{className:"BookmarkItem__buttons"},r.a.createElement(i.b,{to:"/edit/".concat(e.id)},"Edit")," ",r.a.createElement("button",{className:"BookmarkItem__description",onClick:function(){return a=e.id,n=t.deleteBookmark,void fetch(E.API_ENDPOINT+"/".concat(a),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(E.API_KEY)}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n(a)}).catch(function(e){console.error(e)});var a,n}},"Delete")))})}C.defaultProps={onClickDelete:function(){}};a(40);var O=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.context.bookmarks;return r.a.createElement("section",{className:"BookmarkList"},r.a.createElement("h2",null,"Your bookmarks"),r.a.createElement("ul",{className:"BookmarkList__list","aria-live":"polite"},e.map(function(e){return r.a.createElement(C,Object.assign({key:e.id},e))})))}}]),t}(n.Component);O.proptTypes={bookmarks:j.a.arrayOf(j.a.shape({id:j.a.string}))},O.defaultProps={bookmarks:[]},O.contextType=p;var I=O;function P(e){return r.a.createElement("nav",{className:"Nav"},r.a.createElement(i.b,{to:"/"},"Bookmark List")," ",r.a.createElement(i.b,{to:"/add-bookmark"},"Add Bookmark"))}a(42);var S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bookmarks:[],error:null},a.setBookmarks=function(e){a.setState({bookmarks:e,error:null})},a.addBookmark=function(e){a.setState({bookmarks:Object(c.a)(a.state.bookmarks).concat([e])})},a.deleteBookmark=function(e){var t=a.state.bookmarks.filter(function(t){return t.id!==e});a.setState({bookmarks:t})},a.updateBookmark=function(e){a.setState({bookmarks:a.state.bookmarks.map(function(t){return t.id!==e.id?t:e})})},a}return Object(k.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(E.API_ENDPOINT,{method:"GET",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(E.API_KEY)}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(this.setBookmarks).catch(function(t){console.error(t),e.setState({error:t})})}},{key:"render",value:function(){var e={bookmarks:this.state.bookmarks,addBookmark:this.addBookmark,deleteBookmark:this.deleteBookmark,updateBookmark:this.updateBookmark};return r.a.createElement("main",{className:"App"},r.a.createElement("h1",null,"Bookmarks!"),r.a.createElement(p.Provider,{value:e},r.a.createElement(P,null),r.a.createElement("div",{className:"content","aria-live":"polite"},r.a.createElement(h.a,{exact:!0,path:"/",component:I}),r.a.createElement(h.a,{path:"/add-bookmark",component:v}),r.a.createElement(h.a,{path:"/edit/:bookmarkId",component:B}))))}}]),t}(n.Component);l.a.render(r.a.createElement(i.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.80a0af92.chunk.js.map