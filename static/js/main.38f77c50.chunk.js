(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.9f7e506d.svg"},31:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(6),i=(a(36),a(1)),m=a(2),s=a(4),u=a(3),d=a(13),p=a(20),v=a.n(p),f=(a(37),a(25),a(11)),b=a(12);function E(){var e=Object(f.a)(["\ntext-transform: capitalize;\nfont-size: 1.4res;\nbackground: transparent;\nborder:0.5rem solid\ncursor:pointer\ntransition:all 0.5s ease-in-out;\n&:hover{\n    background:var(--lightBlue);\n    color:var(--mainBlue);\n}\n"]);return E=function(){return e},e}function g(){var e=Object(f.a)(["\nbackground:var(--mainDark);\n.nav-link{\n    color:var(--lightBlue)!important;\n    font-size:1.3rem;\n    text-transform: capitalize;\n}\n\n.heading{\n    color:var(--mainYellow) !important;\n    font-size:2rem\n    text-transform:capitalize;\n    alignSelf:center;\n    margin-left:10;\n    text-align:center;\n}\n"]);return g=function(){return e},e}var h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(x,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"store",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(o.b,{to:"/",className:"nav-link"},r.a.createElement("span",{fontSize:"20px"},"Pizzas"))),r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement("h1",null,r.a.createElement("span",{className:"heading"},"The Yummi Pizza")))),"1q1",r.a.createElement(o.b,{to:"/cart",className:"ml-auto"},r.a.createElement(N,{cart:!0,style:{background:"white"}},"My cart")))}}]),a}(n.Component),x=b.a.nav(g()),N=b.a.button(E()),j=h,y=a(9),O=a(18),k=[{id:1,title:"Veg Margherita",img:"img/product-1.jpg",price:3,info:"A Simple cheese pizza served with red sauce and tomato toppings",inCart:!1,count:0,total:0},{id:2,title:"Pineapplemania",img:"img/product-2.jpg",price:4,info:"A classic carribean style made pizza for the pineapple lovers served with exotic spices and red sauce",inCart:!1,count:0,total:0},{id:3,title:"Cheese Burst Pizza",img:"img/product-3.jpg",price:5,info:"A special cheese loaded pizza for the cheesy ones. Enjoy the cheese burst in your mouth with every bite ",inCart:!1,count:0,total:0},{id:4,title:"Chicken Tandoori ",img:"img/product-4.jpg",price:6,info:"A tandoori style pizza loaded with finely cooked tandoori chicken",inCart:!1,count:0,total:0},{id:5,title:"Veg Farmhouse",img:"img/product-5.jpg",price:5,info:"The right pizza for the health conscious ones. A perfect combination of cheese, veges and our love",inCart:!1,count:0,total:0},{id:6,title:"Chicken BBQ ",img:"img/product-6.jpg",price:7,info:"A super delicious pizza for our chicken lovers with bbq gravy",inCart:!1,count:0,total:0},{id:7,title:"7 Heaven",img:"img/product-7.jpg",price:10,info:"This month's special. A heavy loaded mouth watering pizza containing cheese, sauces herbs and spices",inCart:!1,count:0,total:0},{id:8,title:"Chicken Exotica",img:"img/product-8.jpg",price:12,info:" For the extravagent ones. Finely tossed chicken and peices of pork cooked in exotic spices for the spicy flavor that accompanies it",inCart:!1,count:0,total:0}],C={id:1,title:"Veg Margherita",img:"img/product-1.jpg",price:3,info:"A Simple cheese pizza served with red sauce and tomato toppings",inCart:!1,count:0,total:0},w=r.a.createContext(),z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],detailProduct:C,cart:[],modalOpen:!1,modalProduct:C,cartSubTotal:0,cartTax:0,cartTotal:0},e.setProducts=function(){var t=[];k.forEach((function(e){var a=Object(O.a)({},e);t=[].concat(Object(y.a)(t),[a])})),e.setState((function(){return{products:t}}))},e.getItem=function(t){return e.state.products.find((function(e){return e.id===t}))},e.handleDetail=function(t){var a=e.getItem(t);e.setState((function(){return{detailProduct:a}}))},e.addToCart=function(t){var a=Object(y.a)(e.state.products),n=a.indexOf(e.getItem(t)),r=a[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,e.setState((function(){return{products:a,cart:[].concat(Object(y.a)(e.state.cart),[r])}}),(function(){e.addTotals()}))},e.openModal=function(t){var a=e.getItem(t);e.setState((function(){return{modalProduct:a,modalOpen:!0}}))},e.closeModal=function(){e.setState((function(){return{modalOpen:!1}}))},e.increment=function(t){var a=Object(y.a)(e.state.cart),n=a.find((function(e){return e.id===t})),r=a.indexOf(n),c=a[r];c.count=c.count+1,c.total=c.count*c.price,e.setState((function(){return{cart:Object(y.a)(a)}}),(function(){e.addTotals()}))},e.decrement=function(t){var a=Object(y.a)(e.state.cart),n=a.find((function(e){return e.id===t})),r=a.indexOf(n),c=a[r];c.count=c.count-1,0===c.count?e.removeItem(t):(c.total=c.count*c.price,e.setState((function(){return{cart:Object(y.a)(a)}}),(function(){e.addTotals()})))},e.removeItem=function(t){var a=Object(y.a)(e.state.products),n=Object(y.a)(e.state.cart);n=n.filter((function(e){return e.id!==t}));var r=a.indexOf(e.getItem(t)),c=a[r];c.inCart=!1,c.count=0,c.total=0,e.setState((function(){return{cart:Object(y.a)(n),products:Object(y.a)(a)}}),(function(){e.addTotals()}))},e.clearCart=function(){e.setState((function(){return{cart:[]}}),(function(){e.setProducts(),e.addTotals()}))},e.addTotals=function(){var t=0;e.state.cart.map((function(e){return t+=e.total}));var a=parseFloat((.1*t).toFixed(2)),n=t+a;e.setState((function(){return{cartSubTotal:t,cartTax:a,cartTotal:n}}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:Object(O.a)(Object(O.a)({},this.state),{},{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),a}(n.Component),T=w.Consumer;function P(){var e=Object(f.a)(["\n.card{\n    border-color:transparent;\n    transition:all 0.01s linear;\n}\n.card-footer{\n    background:transparent;\n    border-top:transparent;\n    transition: all 0.01s linear\n}\n&:hover{\n    .card{\n        border:0.0.4rem solid rgba(0,0,0,0.2);\n        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n    }\n    .card-footer{\n        background:rgba(247,247,247);\n    }\n}\n.img-container{\n    position:relative;\n    overflow: hidden;\n}\n.card-img-top{\n    transition:all 0.01s linear;\n}\n.img-container:hover .card-img-top{\n    transform:scale(1.2);\n}\n\n.cart-btn{\n    position:absolute;\n    bottom:0;\n    right:0;\n    padding:0.2rem 0.4 rem;\n    background:var(--lightBlue);\n    border:none\n    color:var(--mainWhite)\n    font-size:1.4rem;\n    border-radius:0.5 0 0 0;\n    transform:translate(100%,100%);\n\n}\n{/* make the cart icon disappear*/}\n.img-container:hover .cart-btn{\n    transform:translate(0,0);\n}\n.cart-btn:hover{\n    color: var(--mainBlue);\n    cursor:pointer;\n}\n\n"]);return P=function(){return e},e}var A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart;return r.a.createElement(S,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement(T,null,(function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(o.b,{to:"/details"},r.a.createElement("img",{src:n,alt:"product",className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"","in Cart"):r.a.createElement("p",{className:"text-capitalize mb-0"},"Add to Cart")))})),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),c))))}}]),a}(n.Component),S=b.a.div(P()),B=A;function I(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t,r.a.createElement("strong",{className:"text-blue"},a))))}function M(){var e=Object(f.a)(["\ntext-transform: capitalize;\nfont-size: 1.4rem;\nbackground: transparent;\nborder:0.05rem solid var(--lightBlue);\nborder-color:",";\ncolor:",";\nborder-radius:0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer\nmargin: 1rem 1rem 1rem 0;\ntransition:all 0.5s ease-in-out;\n&:hover{\n    background: ",";\n    color:var(--mainBlue);\n}\n&:focus{\n    outline:none;\n}\n"]);return M=function(){return e},e}var F=b.a.button(M(),(function(e){return e.cart?"var(--mainYellow)":"var(--lighBlue)"}),(function(e){return e.cart?"var(--mainYellow) ":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow) ":"var(--lightBlue)"})),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid text-center d-lg-block"},r.a.createElement("h5",{className:"text text-title text-blue mt-4"},"Help Us Deliver Your Pizza to You"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("input",{className:"k-textbox mt-3 ml-0",placeholder:"Name",style:{width:"300px"}})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("input",{className:"k-textbox mt-3",placeholder:"Delivery Address",style:{width:"370px"}})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("input",{className:"k-textbox mt-3 ml-5 ",placeholder:"Phone Number",style:{width:"320px"}})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-3"},r.a.createElement(F,null,"Submit"))))}}]),a}(n.Component),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(I,{name:"our",title:" Pizzas"}),r.a.createElement("div",{className:"row"},r.a.createElement(T,null,(function(e){return e.products.map((function(e){return r.a.createElement(B,{key:e.id,product:e})}))}))))))}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(T,null,(function(e){var t=e.detailProduct,a=t.id,n=t.company,c=t.img,l=t.info,i=t.price,m=t.title,s=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,m))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h2",null,"model:",m),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},r.a.createElement("span",{className:"text-uppercase"},n)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price:",r.a.createElement("span",null,"$"),i)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about product:"),r.a.createElement("p",{className:"text-muted lead"},l),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement(F,null,"back to products")),r.a.createElement(F,{cart:!0,disabled:!!s,onClick:function(){e.addToCart(a),e.openModal(a)}},s?"in Cart":"Add to Cart")))))}))}}]),a}(n.Component);function V(){return r.a.createElement("div",{className:"container-fluid text-center d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}function W(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))}function q(e){var t=e.item,a=e.value,n=t.id,c=t.title,l=t.img,o=t.price,i=t.total,m=t.count,s=a.increment,u=a.decrement,d=a.removeItem;return r.a.createElement("div",{className:"row my-2 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:l,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"product : "),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"price : "),o),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 y-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return u(n)}}," - "),r.a.createElement("span",{className:"btn btn-black mx-1"},m,'"'),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return s(n)}}," + ")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("button",{onClick:function(){return d(n)}},"Remove Item")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null," item total : $ ",i)))}function H(e){var t=e.value,a=t.cart;return console.log(t,a),r.a.createElement("div",{className:"container-fluid"},a.map((function(e){return r.a.createElement(q,{key:e.id,item:e,value:t})})))}function J(e){var t=e.value,a=t.cartSubTotal,n=t.cartTax,c=t.cartTotal,l=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){return l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal :"),r.a.createElement("strong",null,"$ ",a)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax :"),r.a.createElement("strong",null,"$ ",n)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total :"),r.a.createElement("strong",null,"$ ",c)),r.a.createElement(F,null,"Proceed to Payment")))))}var Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(T,null,(function(e){return e.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{name:"your",title:" cart"}),r.a.createElement(V,null),r.a.createElement(H,{value:e}),r.a.createElement(J,{value:e})):r.a.createElement(W,null)})))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Page not found"))}}]),a}(n.Component);function U(){var e=Object(f.a)(["\nposition:fixed;\ntop:0;\nright:0;\nbottom:0;\nleft:0;\nbackground:rgba(0,0,0,0.3);\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n#modal {\n    background:var(--mainWhite);\n}\n\n"]);return U=function(){return e},e}var G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(T,null,(function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,c=n.img,l=n.title,i=n.price;return t?r.a.createElement(K,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"modal",className:"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"},r.a.createElement("h5",null,"Item added to cart"),r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price : $ ",i),r.a.createElement(o.b,{to:"/"},r.a.createElement(F,{onClick:function(){return a()}},"Store")),r.a.createElement(o.b,{to:"/cart"},r.a.createElement(F,{cart:!0,onClick:function(){return a()}},"View Cart")))))):null}))}}]),a}(n.Component),K=b.a.div(U()),L=G,X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:$}),r.a.createElement(d.a,{path:"/details",component:Y}),r.a.createElement(d.a,{path:"/cart",component:Q}),r.a.createElement(d.a,{component:R})),r.a.createElement(L,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null,r.a.createElement(o.a,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.38f77c50.chunk.js.map