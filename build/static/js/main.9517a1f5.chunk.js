(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),o=(a(14),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),p=(a(16),a(17),a(8)),d=a.n(p),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={rating:1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderImage",value:function(){return c.a.createElement("div",null,c.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982"}))}},{key:"onStarClick",value:function(e,t,a){this.setState({rating:e})}},{key:"render",value:function(){var e=this,t=this.props.products;return console.log(t),c.a.createElement("div",{className:"product"},t.map(function(t,a){return c.a.createElement("div",{key:a,className:"productGrid"},c.a.createElement("img",{src:t.image,key:a}),c.a.createElement("p",{className:"text"},t.title),c.a.createElement("div",{className:"context-wrap"},c.a.createElement("div",{className:"left"},c.a.createElement("p",{className:"price"},"$",t.price)),c.a.createElement("div",{className:"right"},c.a.createElement(d.a,{name:"rate",starCount:5,onStarClick:e.onStarClick.bind(e)})),c.a.createElement("button",{className:"addToCart"},"Add to Cart")))}))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"productGrid"},c.a.createElement(f,{products:this.props.products})))}}]),t}(n.Component),v=h;h.defaultProps={products:[{image:"https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982",title:"Product1",price:200},{image:"https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982",title:"Product2",price:100}]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Hi")}}])}(c.a.Component);i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.9517a1f5.chunk.js.map