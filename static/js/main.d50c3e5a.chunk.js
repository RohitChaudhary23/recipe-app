(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{50:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){"use strict";t.r(c);var a=t(1),i=t.n(a),s=t(22),l=t.n(s),n=(t(28),t(29),t(50),t(5)),r=t(2),o=t(0),d=function(e){var c=e.label,t=e.image,a=(e.ingredients,e.uri),i=a.slice(a.indexOf("#")+1);return Object(o.jsx)("div",{className:"col-12 col-md-6 mt-5 d-flex justify-content-center",children:Object(o.jsxs)("div",{className:"get-recipe-box",children:[Object(o.jsx)("h1",{className:"fw-bolder text-center",children:c}),Object(o.jsx)(r.b,{to:"/finder/".concat(i),children:Object(o.jsx)("img",{src:t,className:"img-fluid"})})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(n.a)(e,2),t=c[0],i=c[1],s=Object(a.useState)(""),l=Object(n.a)(s,2),r=l[0],m=l[1],j=Object(a.useState)("chicken"),b=Object(n.a)(j,2),u=b[0],h=b[1],x=Object(a.useState)(0),p=Object(n.a)(x,2),O=p[0],f=p[1],N=0;return Object(a.useEffect)((function(){fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(u,"&app_id=").concat("f18eb926","&app_key=").concat("20f72656dd38718aa592c4f61a07932a")).then((function(e){e.json().then((function(e){0===e.hits.length&&(alert("We couldn't get anything for ".concat(u)),m("")),console.log(e.hits),i(e.hits)}))})).catch((function(e){console.log(e)}))}),[u]),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 col-lg-10 mx-auto",children:Object(o.jsxs)("div",{className:"recipeBox",children:[Object(o.jsx)("h1",{className:O<=0?"text-primary fs-2 text-center mt-4":"d-none",children:"We have got you the recipes of Chicken!"}),Object(o.jsx)("div",{className:"search-bar",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(r),f(O+1)},className:"search-form",children:[Object(o.jsx)("div",{className:"form-group w-100",children:Object(o.jsx)("input",{type:"text",className:"form-control border-0 border-bottom",placeholder:"Enter food",value:r,onChange:function(e){m(e.target.value)}})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success",children:"Search"})]})}),Object(o.jsx)("div",{className:"dishes",children:t.map((function(e){return Object(o.jsx)(d,{label:e.recipe.label,uri:e.recipe.uri,image:e.recipe.image,ingredients:e.recipe.ingredients},++N)}))})]})})})})},j=t.p+"static/media/video-1.59083558.mp4",b=t.p+"static/media/pexels-cottonbro-5674144.486026b3.jpg",u=t.p+"static/media/pexels-dapurmelodi-1109197.63d10a06.jpg";var h=function(){return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 col-md-10 mx-auto",children:Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("video",{className:"video-fluid",autoPlay:!0,loop:!0,muted:!0,children:Object(o.jsx)("source",{src:j})}),Object(o.jsxs)("div",{className:"home-content",children:[Object(o.jsxs)("h1",{children:["Welcome to ",Object(o.jsx)("span",{className:"home-title",children:"Recipe"})," ."]}),Object(o.jsx)("p",{children:"Follow our recipe and make lip-smacking food"}),Object(o.jsx)(r.b,{to:"/finder",children:Object(o.jsx)("button",{className:"btn btn-outline-success",children:"Let's Get Started"})})]})]})})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-md-10 mx-auto",children:[Object(o.jsxs)("div",{className:"home-box-1 d-flex align-items-center justify-content-between",children:[Object(o.jsx)("img",{className:"img-thumbnail rounded-img-fluid image1 col-12 col-md-4",src:b,alt:"Image1"}),Object(o.jsxs)("div",{className:"col-12 col-md-7",children:[Object(o.jsx)("h2",{className:"home-box-title",children:"Editor's Pick"}),Object(o.jsxs)("p",{children:["Sint cupidatat sunt labore Lorem nostrud anim cillum. Nisi cupidatat ut eiusmod sunt laboris excepteur anim adipisicing velit fugiat aliquip incididunt occaecat. Anim excepteur aliqua nisi esse fugiat mollit ea veniam ullamco. Velit ullamco exercitation occaecat laboris culpa aliquip consectetur in aliqua dolore.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Culpa minim eiusmod mollit eiusmod incididunt veniam ad mollit dolor officia cupidatat. Est nulla deserunt veniam in ea consectetur do dolor do laborum ex proident quis. Officia in sunt duis deserunt nulla anim.Nostrud velit occaecat in non incididunt fugiat. Anim culpa elit proident officia laborum reprehenderit aute."]})]})]}),Object(o.jsxs)("div",{className:"home-box-2 d-flex align-items-center justify-content-between",children:[Object(o.jsx)("img",{className:"img-thumbnail rounded-img-fluid image1 col-12 col-md-4 mx-2",src:u,alt:"Image1"}),Object(o.jsxs)("div",{className:"col-12 col-md-7",children:[Object(o.jsx)("h2",{className:"home-box-title",children:"Recent Stories"}),Object(o.jsxs)("p",{children:["Sint cupidatat sunt labore Lorem nostrud anim cillum. Nisi cupidatat ut eiusmod sunt laboris excepteur anim adipisicing velit fugiat aliquip incididunt occaecat. Anim excepteur aliqua nisi esse fugiat mollit ea veniam ullamco. Velit ullamco exercitation occaecat laboris culpa aliquip consectetur in aliqua dolore.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Culpa minim eiusmod mollit eiusmod incididunt veniam ad mollit dolor officia cupidatat. Est nulla deserunt veniam in ea consectetur do dolor do laborum ex proident quis. Officia in sunt duis deserunt nulla anim.Nostrud velit occaecat in non incididunt fugiat. Anim culpa elit proident officia laborum reprehenderit aute."]})]})]})]})})]})},x=(t(57),t(3));var p=function(){var e=Object(a.useState)(!1),c=Object(n.a)(e,2),t=c[0],i=c[1];return Object(o.jsx)("div",{className:"container-fluid border-bottom bg-white",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 col-md-10 mx-auto",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-white",children:Object(o.jsxs)("div",{className:"container-fluid nav-container",children:[Object(o.jsx)(r.c,{className:"navbar-brand",to:"/",children:"Recipe"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{onClick:function(e){i(!t),console.log(t)},children:Object(o.jsx)("i",{className:t?"fas fa-times fa-1.5x":"fas fa-bars fa-1.5x"})})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{activeClassName:"nav-active",exact:!0,className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{activeClassName:"nav-active",className:"nav-link",to:"/finder",children:"Explore"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{activeClassName:"nav-active",className:"nav-link",to:"/about",children:"About Us"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{activeClassName:"nav-active",className:"nav-link",to:"/service",children:"Service"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{activeClassName:"nav-active",className:"nav-link",to:"/contact",children:"Contact Us"})})]})})]})})})})})};var O=function(e){var c=e.responses,t=Object(a.useState)(1),i=Object(n.a)(t,2),s=i[0],l=i[1],r=c.length;return Object(o.jsxs)("div",{className:"people-carousel-item",children:[Object(o.jsx)("i",{className:"fas fa-arrow-circle-left fa-2x",onClick:function(){l(1===s?r:s-1)}}),Object(o.jsx)("i",{className:"fas fa-arrow-circle-right fa-2x",onClick:function(){l(s===r?1:s+1)}}),c.map((function(e){return Object(o.jsx)("div",{className:e.id===s?"slide-active carousel-item":"slide",children:e.id===s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"text-center text-white",children:e.message}),Object(o.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(o.jsx)("img",{className:"img-fluid people-carousel-item-image",src:e.personImage,alt:e.personName}),Object(o.jsx)("h6",{className:"fw-bold text-white mt-2",children:e.personName})]})]})},e.id)}))]})},f=[{id:1,personImage:t.p+"static/media/ian-dooley-d1UPkiFd04A-unsplash.07c256bc.jpg",personName:"Eddy Powell",message:"Amet laboris qui in cupidatat. Non mollit ullamco nostrud ad fugiat minim labore laboris laboris ex laborum veniam pariatur. Fugiat officia esse do proident ex esse ipsum quis est. Culpa eu nostrud tempor labore cillum eu aliqua et. Officia aute sunt velit deserunt minim pariatur aliquip excepteur. Cillum cillum voluptate ullamco sit dolore.",rating:5},{id:2,personImage:t.p+"static/media/toa-heftiba-O3ymvT7Wf9U-unsplash.c368d18a.jpg",personName:"Allison Argent",message:"Irure tempor labore commodo enim enim fugiat Lorem et velit in eiusmod non mollit. Mollit voluptate voluptate quis voluptate aliqua aliquip eiusmod consectetur id pariatur laboris magna officia deserunt. Culpa eiusmod adipisicing ut Lorem fugiat officia nostrud officia ipsum do. Dolore nulla dolor sit qui duis qui excepteur. Veniam velit irure proident deserunt. Eu incididunt ut laborum minim. Do commodo eu aliquip Lorem aute velit cupidatat ut eiusmod.",rating:5},{id:3,personImage:t.p+"static/media/rayul-_M6gy9oHgII-unsplash.090736a8.jpg",personName:"Steph McCall",message:"Fugiat reprehenderit voluptate magna tempor adipisicing excepteur. Sint enim quis sit sint et magna enim aute proident elit proident. Qui do dolore dolor ea ea est esse sunt cillum dolore aliquip ut. Commodo mollit non deserunt id do consectetur amet proident eiusmod. Cupidatat pariatur ut quis incididunt ad cillum dolore laborum culpa. Id ea et reprehenderit et consectetur culpa tempor.",rating:5}],N=t.p+"static/media/pexels-sarah-chai-7262906.b0ccfe11.jpg";var v=function(){return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"row border-bottom",children:Object(o.jsxs)("div",{className:"col-12 col-lg-10 mx-auto d-flex align-items-center justify-content-center about-container mb-5",children:[Object(o.jsx)("h1",{className:"text-white text-uppercase about-title",children:"About Us"}),Object(o.jsx)("p",{className:"p-3 text-white",children:"Qui reprehenderit ad Lorem non labore veniam proident sint enim. Consequat ex exercitation sint anim qui pariatur mollit. Non cillum est ullamco incididunt amet id amet reprehenderit et reprehenderit occaecat. Dolore esse commodo ex et dolore incididunt nostrud sit qui ullamco dolor. Elit occaecat occaecat in mollit non ad adipisicing non ipsum. Sunt exercitation magna dolore adipisicing tempor laborum."}),Object(o.jsx)("img",{className:"img-fluid about-image",src:N,alt:"about-image"})]})}),Object(o.jsx)("div",{className:"row border-bottom",children:Object(o.jsxs)("div",{className:"col-12 col-lg-10 mx-auto about-container-2 text-center mb-5",children:[Object(o.jsxs)("div",{className:"about-box",children:[Object(o.jsx)("i",{className:"fas fa-thumbs-up fa-3x"}),Object(o.jsx)("p",{children:"Ex deserunt reprehenderit consequat amet adipisicing magna."})]}),Object(o.jsxs)("div",{className:"about-box",children:[Object(o.jsx)("i",{className:"fas fa-heart fa-3x"}),Object(o.jsx)("p",{children:"Pariatur fugiat anim laborum anim voluptate."})]}),Object(o.jsxs)("div",{className:"about-box",children:[Object(o.jsx)("i",{className:"fas fa-check fa-3x"}),Object(o.jsx)("p",{children:"Ex eiusmod laborum irure ad proident aute sint nisi minim sint irure reprehenderit sit commodo."})]})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 col-lg-10 mx-auto",children:Object(o.jsxs)("div",{className:"people-carousel py-5",children:[Object(o.jsx)("h1",{className:"text-center mb-4",children:"Beautiful Feedbacks from users"}),Object(o.jsx)(O,{responses:f})]})})})]})},g=t.p+"static/media/service.afa54ea7.jpg";var w=function(){return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"row border-bottom",children:Object(o.jsxs)("div",{className:"col-12 col-md-10 mx-auto service-container mb-5",children:[Object(o.jsx)("img",{src:g,className:"img-fluid",alt:"Service-image"}),Object(o.jsx)("h1",{className:"text-white p-2 fw-bolder",children:"Service"}),Object(o.jsx)("p",{className:"text-white p-2",children:"Proident ad commodo excepteur velit ex. Non do quis ex fugiat anim dolore tempor tempor amet ut. Pariatur reprehenderit sunt quis dolor laboris ullamco Lorem eu. Ex reprehenderit et ea consequat anim aute esse elit velit exercitation anim cupidatat culpa. Culpa tempor mollit anim proident nulla ea aliquip incididunt aliqua nostrud. Incididunt ex cupidatat tempor eu qui veniam velit. Veniam sunt laboris ullamco do deserunt et commodo aute deserunt."})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-md-10 mx-auto mt-5",children:[Object(o.jsx)("div",{className:"pricingTitle-box",children:Object(o.jsx)("h1",{className:"text-center text-white w-50",children:"Pricing"})}),Object(o.jsxs)("div",{className:"card-box text-center",children:[Object(o.jsxs)("div",{className:"card col-12 col-md-4 m-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h3",{className:"card-title",children:"Free"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h1",{className:"card-price",children:["\u20b90",Object(o.jsx)("span",{className:"period",children:"/month"})]}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{children:"Single User"}),Object(o.jsx)("li",{children:"10 requests per minute"}),Object(o.jsx)("li",{children:"Email support"}),Object(o.jsx)("li",{children:"Help centre access"})]}),Object(o.jsx)("button",{className:"btn btn-outline-primary w-100",children:"Sign up for FREE"})]})]}),Object(o.jsxs)("div",{className:"card col-12 col-md-4 m-2 card-big",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h3",{className:"card-title",children:"Pro"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h1",{className:"card-price",children:["\u20b9100",Object(o.jsx)("span",{className:"period",children:"/month"})]}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{children:"5 Users"}),Object(o.jsx)("li",{children:"100 requests per minute"}),Object(o.jsx)("li",{children:"Priority email support"}),Object(o.jsx)("li",{children:"Help centre access"})]}),Object(o.jsx)("button",{className:"btn btn-primary w-100",children:"Get Started with PRO"})]})]}),Object(o.jsxs)("div",{className:"card col-12 col-md-4 m-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h3",{className:"card-title",children:"Enterprise"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h1",{className:"card-price",children:["\u20b9199",Object(o.jsx)("span",{className:"period",children:"/month"})]}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{children:"Unlimited User"}),Object(o.jsx)("li",{children:"Unlimited requests per minute"}),Object(o.jsx)("li",{children:"Phone and email support"}),Object(o.jsx)("li",{children:"Help centre access"})]}),Object(o.jsx)("button",{className:"btn btn-primary w-100",children:"Sign up for ENTERPRISE"})]})]})]})]})})]})},y=t(11),q=t(17),k=t.p+"static/media/contact.6179dbc3.jpg";var S=function(){var e=Object(a.useState)({name:"",email:"",phone:"",message:""}),c=Object(n.a)(e,2),t=c[0],i=c[1],s=function(e){i(Object(q.a)(Object(q.a)({},t),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(o.jsx)("div",{className:"container p-5 mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-md-10 mx-auto d-flex align-items-center justify-content-between",children:[Object(o.jsx)("div",{className:"col-lg-6 d-none d-lg-block",children:Object(o.jsx)("img",{src:k,alt:"contact-image",className:"contact-image"})}),Object(o.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(o.jsx)("h1",{className:"text-center mb-3 contact-title",children:"Get in touch"}),Object(o.jsxs)("form",{className:"col-12 col-md-8 mx-auto",onSubmit:function(e){e.preventDefault(),alert("Your response: \n Name: ".concat(t.name," \n Email: ").concat(t.email," \n Phone no.: ").concat(t.phone," \n Message: ").concat(t.message)),i({name:"",email:"",phone:"",message:""})},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name: "}),Object(o.jsx)("input",{type:"text",className:"form-control mb-3 bg-light",placeholder:"Enter Your Name",name:"name",value:t.name,onChange:s})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",className:"form-label",children:"E-mail: "}),Object(o.jsx)("input",{type:"text",className:"form-control mb-3 bg-light",placeholder:"Email",name:"email",value:t.email,onChange:s})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Phone No.: "}),Object(o.jsx)("input",{type:"number",className:"form-control mb-3 bg-light",placeholder:"Phone number",name:"phone",value:t.phone,onChange:s})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"message",className:"form-label",children:"Your Message: "}),Object(o.jsx)("textarea",{className:"form-control mb-3 bg-light",placeholder:"Your Message",rows:"3",name:"message",value:t.message,onChange:s})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-primary w-100",children:"Submit"})]})]})]})})})};var C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container-fluid bg-light mt-5 border-top",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("footer",{className:"footer d-flex align-items-center justify-content-around text-center",children:Object(o.jsx)("section",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-12 col-md-4 mb-4",children:[Object(o.jsx)("h2",{className:"footer-brand fw-bolder mb-4",children:"Recipe"}),Object(o.jsx)("p",{children:"Et Lorem esse cillum nulla proident et irure fugiat deserunt cupidatat. Aute elit sit aliqua magna exercitation dolor qui officia cupidatat dolore. Id deserunt nulla anim incididunt nulla exercitation magna duis in officia consequat. Est culpa culpa aliqua sit quis laboris labore nostrud anim enim. Aliquip ea velit reprehenderit ex ut commodo eu occaecat ullamco. Excepteur nulla anim ullamco sit. Mollit labore eu id adipisicing in aliquip ipsum ipsum."})]}),Object(o.jsx)("div",{className:"col-12 col-md-8",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h6",{className:"fw-bold mb-4",children:"Links"}),Object(o.jsx)("p",{children:Object(o.jsx)(r.b,{to:"/",className:"footer-link",children:"Home"})}),Object(o.jsx)("p",{children:Object(o.jsx)(r.b,{to:"/finder",className:"footer-link",children:"Explore"})}),Object(o.jsx)("p",{children:Object(o.jsx)(r.b,{to:"/about",className:"footer-link",children:"About"})}),Object(o.jsx)("p",{children:Object(o.jsx)(r.b,{to:"/service",className:"footer-link",children:"Service"})}),Object(o.jsx)("p",{children:Object(o.jsx)(r.b,{to:"/contact",className:"footer-link",children:"Contact"})})]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h6",{className:"fw-bold mb-4",children:"Contact"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-home"})," New Delhi"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-envelope"})," info@recipe.com"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-phone"})," +91 123456789"]})]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h6",{className:"fw-bold mb-4",children:"Follow us"}),Object(o.jsxs)("ul",{className:"list-unstyled",children:[Object(o.jsx)("li",{className:"my-2",children:Object(o.jsx)(r.b,{to:"www.facebook.com",children:Object(o.jsx)("i",{className:"fab fa-facebook fa-lg"})})}),Object(o.jsx)("li",{className:"my-2",children:Object(o.jsx)(r.b,{to:"www.twitter.com",children:Object(o.jsx)("i",{className:"fab fa-twitter fa-lg twitter-color"})})}),Object(o.jsx)("li",{className:"my-2",children:Object(o.jsx)(r.b,{to:"www.instagram.com",children:Object(o.jsx)("i",{className:"fab fa-instagram fa-lg insta-color"})})}),Object(o.jsx)("li",{className:"my-2",children:Object(o.jsx)(r.b,{to:"www.linkedin.com",children:Object(o.jsx)("i",{className:"fab fa-linkedin fa-lg linkedin-color"})})}),Object(o.jsx)("li",{className:"my-2",children:Object(o.jsx)(r.b,{className:"text-dark",to:"www.github.com",children:Object(o.jsx)("i",{className:"fab fa-github fa-lg"})})})]})]})]})})]})})})})}),Object(o.jsx)("div",{className:"row text-center text-white p-4 footer-box",children:Object(o.jsxs)("p",{children:["@ 2021 Copyright: ",Object(o.jsx)("strong",{children:Object(o.jsx)(r.b,{className:"footer-link text-white",children:"Recipe.com"})})]})})]})})};var E=function(e){var c=e.match,t=Object(a.useState)(""),i=Object(n.a)(t,2),s=i[0],l=i[1],r=Object(a.useState)(""),d=Object(n.a)(r,2),m=d[0],j=d[1],b=Object(a.useState)(!1),u=Object(n.a)(b,2),h=u[0],x=u[1];return Object(a.useEffect)((function(){fetch("https://api.edamam.com/api/recipes/v2/".concat(c.params.id,"?type=public&app_id=").concat("f18eb926","&app_key=").concat("20f72656dd38718aa592c4f61a07932a")).then((function(e){e.json().then((function(e){console.log(e.recipe),l(e.recipe),x(!0)}))})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){if(h){var e="how to make ".concat(s.label);console.log(e),fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyD1G-EFETyQC7mydRhE7dulcstxYqsRFq4","&part=snippet&q=").concat(e)).then((function(e){e.json().then((function(e){console.log(e.items),j(e.items)}))})).catch((function(e){console.log(e)}))}}),[h]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-md-10 mx-auto",children:[Object(o.jsxs)("div",{className:"row border-bottom d-flex align-items-center",children:[Object(o.jsxs)("div",{className:"recipeItem-container col-12 col-md-6 text-center mt-4",children:[Object(o.jsxs)("h1",{className:"fw-bolder contact-title mb-4",children:[s.label,s.dishType&&Object(o.jsx)("span",{className:"badge rounded-pill bg-danger",children:s.dishType[0]})]}),Object(o.jsx)("img",{src:s.image,alt:s.label,className:"img-thumbnail img-fluid"})]}),Object(o.jsxs)("div",{className:"recipeItem-container col-12 col-md-6 recipeItem-recipe-box my-4 px-3",children:[Object(o.jsx)("h5",{className:"text-center ",children:"Ingredients - "}),s.ingredients&&Object(o.jsx)("ul",{className:"recipeList",children:s.ingredients.map((function(e){return Object(o.jsx)("li",{className:"",children:e.text})}))})]})]}),Object(o.jsx)("div",{className:"row border-bottom",children:Object(o.jsxs)("div",{className:"col-12 recipeItem-container px-5 my-5",children:[Object(o.jsx)("h3",{className:"contact-title",children:"Health Label -"}),s.healthLabels&&s.healthLabels.map((function(e){return Object(o.jsx)("span",{className:"bg-primary text-white rounded text-wrap d-inline-block health-span",children:e})})),Object(o.jsx)("h3",{className:"contact-title mt-5",children:"Nutrients -"}),s.digest&&s.digest.map((function(e){return Object(o.jsx)("span",{className:"bg-primary text-white rounded text-wrap d-inline-block health-span",children:e.label})}))]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 video-box",children:[Object(o.jsxs)("h3",{className:"contact-title mb-4",children:["You can also watch ",Object(o.jsx)("span",{className:"text-uppercase fw-bold",children:"Video !"})]}),Object(o.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:m&&Object(o.jsx)("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(m[0].id.videoId),allowFullScreen:!0})})]})})]})})})})};var F=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(p,{}),Object(o.jsxs)(x.d,{children:[Object(o.jsx)(x.b,{exact:!0,path:"/",component:h}),Object(o.jsx)(x.b,{exact:!0,path:"/finder",component:m}),Object(o.jsx)(x.b,{exact:!0,path:"/about",component:v}),Object(o.jsx)(x.b,{exact:!0,path:"/service",component:w}),Object(o.jsx)(x.b,{exact:!0,path:"/contact",component:S}),Object(o.jsx)(x.b,{path:"/finder/:id",component:E}),Object(o.jsx)(x.a,{to:"/"})]}),Object(o.jsx)(C,{})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(c){var t=c.getCLS,a=c.getFID,i=c.getFCP,s=c.getLCP,l=c.getTTFB;t(e),a(e),i(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(F,{})})}),document.getElementById("root")),I()}},[[58,1,2]]]);
//# sourceMappingURL=main.d50c3e5a.chunk.js.map