(this.webpackJsonpadoptadog=this.webpackJsonpadoptadog||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(17),n=c.n(s),i=(c(72),c(73),c(23)),r=c(5),o=c(35),l=c(9),d=c(93),j=c(91),h=c(94),b=(c(74),c(96)),m=c(90),u=c(67),x=c(92),O=c(1),p=Object(O.jsxs)(u.a,{id:"popover-basic",children:[Object(O.jsx)(u.a.Header,{as:"h3",children:"Doggo Info"}),Object(O.jsx)(u.a.Body,{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Fluffy"}),Object(O.jsx)("li",{children:"Sweet"}),Object(O.jsx)("li",{children:"Loves belly rubs"})]})})]}),f=function(){return Object(O.jsx)(x.a,{trigger:"click",placement:"top",overlay:p,children:Object(O.jsx)(m.a,{className:"button",variant:"primary",children:"Learn More About Me!"})})},g=function(e){var t=Object(a.useState)(),c=Object(r.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){fetch("https://api.thecatapi.com/v1/images/search?limit=100&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var i=s&&s.map((function(t,c){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{className:"card",style:{width:"23rem"},children:[Object(O.jsx)(b.a.Img,{className:"catPic",variant:"top",src:t.url}),Object(O.jsxs)(b.a.Body,{className:"cardButtons",children:[Object(O.jsx)(f,{}),Object(O.jsx)(m.a,{className:"adopt button",onClick:function(){return e.addMe(t)},variant:"primary",children:"Adopt Me!"})]})]})})}));return Object(O.jsx)("div",{className:"catSection",children:Object(O.jsx)("div",{className:"kitty",children:i})})},v=function(e){var t=Object(a.useState)(),c=Object(r.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){fetch("https://api.thedogapi.com/v1/images/search?limit=100&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),console.log(s);var i=s&&s.map((function(t,c){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{className:"card",style:{width:"23rem"},children:[Object(O.jsx)(b.a.Img,{className:"dogPic",variant:"top",src:t.url}),Object(O.jsxs)(b.a.Body,{className:"cardButtons",children:[Object(O.jsx)(f,{}),Object(O.jsx)(m.a,{className:"adopt button",onClick:function(){return e.addMe(t)},variant:"primary",children:"Adopt Me!"})]})]})})}));return Object(O.jsx)("div",{className:"dogSection",children:Object(O.jsx)("div",{className:"doggy",children:i})})},y=c(95);var N=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(O.jsxs)(y.a,{activeIndex:c,onSelect:function(e,t){s(e)},children:[Object(O.jsxs)(y.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://cdn2.thedogapi.com/images/SyXN-e9NX_1280.jpg",alt:"First slide"}),Object(O.jsxs)(y.a.Caption,{children:[Object(O.jsx)("h3",{class:"carouselText",children:"Danny"}),Object(O.jsx)("p",{class:"carouselText",children:"Danny decided to quit his job of being a good house dog, and has decided to venture off to find the love of his life. We found him sleeping in a pizza shop with several open packages of pepperoni. We're hoping to find him a forever home, and a forever love!"})]})]}),Object(O.jsxs)(y.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://cdn2.thecatapi.com/images/4if.gif",alt:"First slide"}),Object(O.jsxs)(y.a.Caption,{children:[Object(O.jsx)("h3",{class:"carouselText",children:"Tony"}),Object(O.jsx)("p",{class:"carouselText",children:"Tony loves to hide in boots. His family accidentally sold a pair of boots with Tony in them. Tony is looking for his family."})]})]}),Object(O.jsxs)(y.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://cdn2.thedogapi.com/images/rJFJVxc4m_1280.jpg",alt:"Second slide"}),Object(O.jsxs)(y.a.Caption,{children:[Object(O.jsx)("h3",{class:"carouselText",children:"Floofy"}),Object(O.jsx)("p",{class:"carouselText",children:'Floofy was found chasing a chicken delivery truck! We believe she has a family, as she knows her basic commands, like "Sit," "Stay," and "Shake". We are looking for her family, but also another family that could foster/adopt her! Warning: she loves chicken! '})]})]}),Object(O.jsxs)(y.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://cdn2.thedogapi.com/images/rJqd1ecV7_1280.jpg",alt:"Third slide"}),Object(O.jsxs)(y.a.Caption,{children:[Object(O.jsx)("h3",{class:"carouselText",children:"Rex"}),Object(O.jsx)("p",{class:"carouselText",children:"Rex has decided that his family doesn't give him enough treats. He has taken it upon himself to put himself up for adoption to find another family that gives him more treats on the daily. He's still living with his current family."})]})]})]})},k=function(){return Object(O.jsx)("div",{className:"homePage",children:Object(O.jsx)(N,{})})},T=function(){return Object(O.jsx)("h1",{children:"How to Best Care for Your New Pet"})},S=function(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),s=c[0],n=c[1],i=function(){n("5px solid lightpink")},o=e.takeMeHome.map((function(t,c){return Object(O.jsxs)("div",{className:"dogCard",children:[Object(O.jsx)("img",{style:{border:s},src:t.url,alt:"",className:"pics"}),Object(O.jsx)("button",{onClick:function(){return e.removeMe(c)},className:"button",children:"Not Quite the One"}),Object(O.jsx)("button",{onClick:i,className:"adopt button",children:"The One!"})]},c)}));return Object(O.jsxs)("div",{className:"adopted",children:[Object(O.jsx)("h1",{children:"Adopt Me!"}),Object(O.jsx)("div",{className:"adoptedSquad",children:o}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("div",{children:Object(O.jsx)("input",{className:"name form",placeHolder:"Name",type:"text"})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{className:"email form",placeHolder:"E-mail",type:"text"})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{className:"message form",placeHolder:"Message",type:"text"})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"submit"})})]})]})};var w=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=function(e){s([].concat(Object(i.a)(c),[e]))},b=function(e){var t=c.filter((function(t,c){return c!==e}));s(t)};return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(d.a,{className:"navBar",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(O.jsxs)(j.a,{className:"navBar",children:[Object(O.jsx)(d.a.Brand,{href:"/",className:"title",children:"Pet Buddies"}),Object(O.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(h.a,{className:"me-auto",children:[Object(O.jsx)(o.b,{className:"nav-link",to:"/dogs",children:"Dogs"}),Object(O.jsx)(o.b,{className:"nav-link",to:"/cats",children:"Cats"}),Object(O.jsx)(o.b,{className:"nav-link",to:"/petcare",children:"Pet Care"}),Object(O.jsx)(o.b,{className:"nav-link",to:"/takemehome",children:"Take Me Home"})]})})]})}),Object(O.jsx)("main",{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:k}),Object(O.jsx)(l.a,{path:"/dogs",exact:!0,render:function(){return Object(O.jsx)(v,{addMe:n})}}),Object(O.jsx)(l.a,{path:"/cats",exact:!0,render:function(){return Object(O.jsx)(g,{addMe:n})}}),Object(O.jsx)(l.a,{path:"/petcare",exact:!0,component:T}),Object(O.jsx)(l.a,{path:"/takemehome",exact:!0,render:function(){return Object(O.jsx)(S,{takeMeHome:c,removeMe:b})}})]})})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(o.a,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),C()}},[[85,1,2]]]);
//# sourceMappingURL=main.22a69528.chunk.js.map