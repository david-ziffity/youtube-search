(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=(a(24),a(6)),i=a.n(l),o=a(17),m=a(2),u=a(3),d=a(5),h=a(4),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:"",valid:!0},e.helpTextClass="text-muted form-text",e.onSearchSubmit=function(t){t.preventDefault(),e.state.term.length>2?e.setState({valid:!0}):e.setState({valid:!1}),e.state.term.length>2&&e.props.onChange(e.state.term)},e.onSearchChange=function(t){e.setState({term:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card youtube-search-form mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSearchSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},this.props.label),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.term,onChange:this.onSearchChange}),r.a.createElement("small",{className:this.state.valid?"text-muted":"text-danger"},"Enter minimun 3 Charector")))))}}]),a}(n.Component),v=function(e){var t=e.item,a=e.onClickItem;return r.a.createElement("div",{className:"card list-item mb-2 shadow-sm",onClick:function(){return a(t)}},r.a.createElement("div",{className:"card-body media"},r.a.createElement("img",{className:"mr-3",src:t.snippet.thumbnails.medium.url,alt:t.snippet.description}),r.a.createElement("div",{className:"media-body"},r.a.createElement("strong",{className:"mt-0"},t.snippet.title))))},f=function(e){var t=e.list,a=e.onSelectItem;if(!t)return null;var n=t.map((function(e,t){return r.a.createElement(v,{item:e,key:e.id.videoId,onClickItem:a})}));return r.a.createElement("div",{className:"lister"},n)},b=function(e){var t=e.item;if(!t)return null;var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",{className:"item-detail card mb-4"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"Video player",className:"embed-responsive-item",src:a,frameBorder:"0"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},E=a(18),g=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyCsPiJ10WoKLAbKue9ZJ48x4d1NjzwsYvo",part:"snippet",type:"video",maxResults:5}}),y=(a(43),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={list:[],selectedItem:null},e.onSearchFormChange=function(){var t=Object(o.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({list:n.data.items,selectedItem:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onSelectItem=function(t){e.setState({selectedItem:t})},e.render=function(){return e.renderContent()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onSearchFormChange("seven wonders")}},{key:"renderContent",value:function(){return this.state.list.length?r.a.createElement("div",{className:"youtube-app container mt-4"},r.a.createElement(p,{label:"Enter search Term:",onChange:this.onSearchFormChange}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-7"},r.a.createElement(b,{item:this.state.selectedItem})),r.a.createElement("div",{className:"col-lg-5"},r.a.createElement(f,{list:this.state.list,onSelectItem:this.onSelectItem})))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-danger text-center m-5"},"Loading !"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7fd72dad.chunk.js.map