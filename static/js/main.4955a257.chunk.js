(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/MyPicCroped.a8d4af5c.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/linkedin.c0c32ea6.svg"},134:function(e,t,a){e.exports=a.p+"static/media/landingPage.45b47ca0.jpg"},146:function(e,t,a){e.exports=a(355)},151:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/media/react.7cf9d2e2.svg"},157:function(e,t,a){e.exports=a.p+"static/media/redux.e8d0a030.svg"},158:function(e,t,a){e.exports=a.p+"static/media/react-router.02419671.svg"},159:function(e,t,a){e.exports=a.p+"static/media/material-ui.c78ddbdc.svg"},160:function(e,t,a){e.exports=a.p+"static/media/html.08c7cc78.svg"},161:function(e,t,a){e.exports=a.p+"static/media/css.6b8e1d08.svg"},162:function(e,t,a){e.exports=a.p+"static/media/sass.3023657d.svg"},163:function(e,t,a){e.exports=a.p+"static/media/nodejs.b96a8d52.svg"},164:function(e,t,a){e.exports=a.p+"static/media/express.c6bab64b.svg"},165:function(e,t,a){e.exports=a.p+"static/media/javascript.86313836.svg"},166:function(e,t,a){e.exports=a.p+"static/media/typescript.2dcf8108.svg"},167:function(e,t,a){e.exports=a.p+"static/media/c++.f7782ed8.svg"},168:function(e,t,a){e.exports=a.p+"static/media/github.05306ca9.svg"},169:function(e,t,a){e.exports=a.p+"static/media/netlify.db389ab3.svg"},170:function(e,t,a){e.exports=a.p+"static/media/heroku.7df930e9.svg"},171:function(e,t,a){e.exports=a.p+"static/media/npm.e83e60b3.svg"},172:function(e,t,a){e.exports=a.p+"static/media/git.1f6e6786.svg"},173:function(e,t,a){e.exports=a.p+"static/media/linux.8033a355.svg"},174:function(e,t,a){e.exports=a.p+"static/media/faenero.b72930a7.png"},175:function(e,t,a){e.exports=a.p+"static/media/gifbf.d7b97e12.png"},176:function(e,t,a){e.exports=a.p+"static/media/photoSearchv2.e5bb4106.png"},177:function(e,t,a){e.exports=a.p+"static/media/cca.1b94503e.png"},178:function(e,t,a){e.exports=a.p+"static/media/plack.e2beff53.png"},179:function(e,t,a){e.exports=a.p+"static/media/supertube.f9bdad26.png"},180:function(e,t,a){e.exports=a.p+"static/media/blackjack.10256279.png"},181:function(e,t,a){e.exports=a.p+"static/media/colorgradient.3b1ddc3b.png"},182:function(e,t,a){e.exports=a.p+"static/media/adminsystem.6f166b79.png"},183:function(e,t,a){e.exports=a.p+"static/media/shop.3191d3ab.png"},184:function(e,t,a){e.exports=a.p+"static/media/movie.2be58ba3.png"},355:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),s=(a(151),a(52)),c=a(51),l=a(377),m=a(5),d=a(378),p=a(398),u=a(381),g=a(402),h=a(53),b=a(397),f=a(382),y=a(383),E=a(399),x=a(385),v=a(404),w=a(37),k=Object(l.a)({root:{color:"white"},toolbar:{width:"80%",margin:"auto",height:"70px"},selectedButton:{borderBottom:"#b03030 solid 3px"}}),j=Object(m.a)({root:{height:"100%",borderRadius:"2px 2px 0px 0px",margin:"0 10px",width:"100px",color:"inherit","&:hover":{backgroundColor:"rgba(255, 255, 255,0.2)"}}})(d.a),I=Object(m.a)({paper:{backgroundColor:"#4f4a4a",width:"200px"}})(p.a),N=["home","about","projects","contact"],S=function(e){var t=e.selected,a=e.handleMenuNavigation;return i.a.createElement(u.a,null,N.map((function(e,n){return i.a.createElement(g.a,{selected:t==="/".concat(e),button:!0,key:n,alignItems:"center",onClick:function(){return a("/".concat(e))}},i.a.createElement(h.a,null,e.toUpperCase()))})))},C=function(e){var t=e.classes,a=e.selected,n=e.handleMenuNavigation;return i.a.createElement(b.a,{position:"relative",height:"100%",display:"flex",alignItems:"center"},N.map((function(e,o){return i.a.createElement(j,{key:o,className:a==="/".concat(e)?t.selectedButton:void 0,name:e,onClick:function(){return n("/".concat(e))}},e.toUpperCase())})))},O=function(){var e=k(),t=Object(n.useState)({selected:"/",openDrawer:!1,appBarColor:"transparent"}),a=Object(c.a)(t,2),o=a[0],r=a[1],l=Object(w.g)(),m=Object(w.f)();Object(n.useEffect)((function(){u(l.pathname),d()}),[l]);var d=function(){window.addEventListener("scroll",p)},p=function(){window.scrollY>10?r((function(e){return Object(s.a)({},e,{appBarColor:"black"})})):r((function(e){return Object(s.a)({},e,{appBarColor:"transparent"})}))},u=function(e){var t=N(e)?"/home":e;r(Object(s.a)({},o,{selected:t}))},g=function(){return r((function(e){return Object(s.a)({},e,{openDrawer:!o.openDrawer})}))},j=function(e){var t="/home"===e?"/":e;m.push(t)},N=function(e){return"/"===e};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{className:e.root,elevation:0,style:{backgroundColor:o.appBarColor}},i.a.createElement(y.a,{className:e.toolbar},i.a.createElement(b.a,{style:{cursor:"pointer"},onClick:function(){return j("/")}},i.a.createElement("span",{style:{borderRight:"2px solid white",paddingRight:"8px"}},i.a.createElement(h.a,{style:{display:"inline-block"}},"Matas")),i.a.createElement("span",{style:{paddingLeft:"8px"}},i.a.createElement(h.a,{variant:"h4",style:{display:"inline-block"}},"DEV"))),i.a.createElement(b.a,{ml:"auto",height:"100%"},i.a.createElement(E.a,{smDown:!0},i.a.createElement(C,{classes:e,selected:o.selected,handleMenuNavigation:function(e){j(e)}})),i.a.createElement(E.a,{mdUp:!0},i.a.createElement(x.a,{color:"inherit",onClick:g},i.a.createElement(v.a,{fontSize:"large"}))),i.a.createElement(I,{anchor:"right",open:o.openDrawer,onOpen:g,onClose:g,disableSwipeToOpen:!0},i.a.createElement(S,{selected:o.selected,handleMenuNavigation:function(e){j(e),g()}}))))),i.a.createElement(y.a,{style:{marginBottom:"10px"}}))},M=a(384),R=a(13),B=a(88),T=a.n(B),F=a(129),L=a.n(F),H=Object(l.a)({root:{minHeight:"91vh"},border:{borderBottom:"1px solid white"},borderIcon:{position:"absolute",top:"-15px",transform:"rotate(45deg)",backgroundColor:"#b03030",borderColor:"white",left:"0",right:"0",marginLeft:"auto",marginRight:"auto"}}),A=function(){var e=H(),t=Object(M.a)(Object(R.a)().breakpoints.up("sm"));return i.a.createElement(b.a,{display:"flex",alignItems:"center",className:e.root},i.a.createElement(b.a,{width:"80%",m:"auto"},i.a.createElement(b.a,{mb:"120px",m:"auto",display:"flex",justifyContent:"flex-start"},i.a.createElement(b.a,{borderLeft:t?1:0},i.a.createElement(b.a,{ml:t?"50px":"0px"},i.a.createElement(h.a,{variant:"h2"},i.a.createElement(T.a,{cursor:{hideWhenDone:!0,hideWhenDoneDelay:0}},"Hi,",i.a.createElement("br",null),"I'm Matas",i.a.createElement("br",null)),i.a.createElement(L.a,{interval:500},["A Front - End Developer","Software Engineering Student"].map((function(e){return i.a.createElement(T.a,{key:e},e)}))))))),i.a.createElement(b.a,{position:"relative",className:e.border},i.a.createElement(b.a,{className:e.borderIcon,m:"auto",width:"30px",height:"30px"}))))},D=a(401),P=a(400),G=a(386),J=a(387),U=a(130),q=a.n(U),z=[{name:"Front - End",items:[{name:"React.js",img:a(156),description:"React.js. Awesome framework to build websites fast with desired functionality. It uses Virtual DOM what gives big advantage in performance. My favorite technology to work with!"},{name:"Redux",img:a(157),description:"Redux. Library which gives big advantage managing 'State' data in React application."},{name:"React-router",img:a(158),description:"React - router. A tool that allows you to handle routes in a web app, using dynamic routing."},{name:"Material-ui",img:a(159),description:"Material-ui. Fantastic React UI framework to build responsive and beautiful websites fast."},{name:"HTML",img:a(160),description:"HTML. It's the standard markup language for documents designed to be displayed in a web browser."},{name:"CSS",img:a(161),description:"CSS. Describes how HTML elements are to be displayed"},{name:"SCSS",img:a(162),description:"SASS. It's the most mature, stable, and powerful professional grade CSS extension language in the world."}]},{name:"Back - End",items:[{name:"Node.js",img:a(163),description:"Node.js. It's an open source server environment which uses JavaScript."},{name:"Express",img:a(164),description:"Express. It's a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.."}]},{name:"Programming Languages",items:[{name:"JavaScript",img:a(165),description:"JavaScript. One of the most popular programming languages today."},{name:"TypeScript",img:a(166),description:"TypeScript extends JavaScript by adding types to the language."},{name:"C++",img:a(167),description:"C++. My first programming language!"}]},{name:"Hosting Platforms",items:[{name:"GitHub",img:a(168),description:"GitHub pages. Websites for you and your projects, hosted directly from your GitHub repository."},{name:"Netlify",img:a(169),description:"Netlify. Gives opportunity to deploy modern static websites."},{name:"Heroku",img:a(170),description:"Heroku. It's a platform as a service that enables developers to build, run, and operate applications entirely in the cloud."}]},{name:"Other Tools",items:[{name:"NPM",img:a(171),description:"Npm. It's the world's largest Software Library and a software Package Manager and Installer"},{name:"Git",img:a(172),description:"Git. It's a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency"},{name:"Linux",img:a(173),description:"Linux OS. It's the best-known and most-used open source operating system."}]}],W=Object(l.a)({root:{minHeight:"91vh",width:"100%"},divider:{padding:"1px",margin:"0 5px",backgroundColor:"white",borderRadius:"50px"},gridItem:{margin:"0 10px"},aboutMeNamings:{color:"#b03030"},ulList:{margin:0},listText:{textAlign:"justify"},skillImage:{"&:hover":{transition:"5s all",transform:"rotate(360deg)"}}}),Y=Object(m.a)({root:{overflow:"hidden","&:hover":{backgroundColor:"rgba(176, 48, 48, 0.5)"}}})(x.a),Q=Object(m.a)({root:{height:"80px",width:"80px"}})(D.a),V=function(){var e=W(),t=Object(M.a)(Object(R.a)().breakpoints.up("md")),a=function(){return i.a.createElement(b.a,null,i.a.createElement(b.a,{display:"flex",justifyContent:"center"},i.a.createElement(Q,{alt:"Matas Photo",src:q.a})),i.a.createElement(h.a,{variant:"h4",align:"center"},"About me"),i.a.createElement(b.a,{height:"100%",mt:"15px"},i.a.createElement(h.a,{className:e.aboutMeNamings,variant:"h6",style:{display:"inline-block"}},i.a.createElement("li",null,"Full Name:\xa0")),i.a.createElement(h.a,{variant:"body2",style:{display:"inline-block"}},"Matas Jarilinas"),i.a.createElement(h.a,{variant:"h6",className:e.aboutMeNamings},i.a.createElement("li",null,"Education:")),i.a.createElement("ul",{className:e.ulList},i.a.createElement(h.a,{variant:"body2"},i.a.createElement("li",null,"Vilnius Gediminas Technical University (3rd year student)"),i.a.createElement("li",null,"Udemy Online Courses"))),i.a.createElement(h.a,{variant:"h6",className:e.aboutMeNamings},i.a.createElement("li",null,"Experience:")),i.a.createElement("ul",{className:e.ulList},i.a.createElement(h.a,{variant:"body2"},i.a.createElement("li",{className:e.listText},"NFQ Academy - one of the most popular IT academies in Lithuania. I was attending as a Front - End Developer on this academy for 3 months with focus on React.js and it's related technologies/frameworks. During this period I gained knowledge about Front/Back - End developing process. I worked on a project with my collegues - they were Back - End Developers and then there was me who was responsible for Front - End alone. It was a rough 3 month learning and developing journey, but I learned to work with a team, manage develop a project dealing with stress, because I had other responsibilities besides academy and of course most importantly I improved my knowledge working with famous JavaScript framework - React.js."))),i.a.createElement(h.a,{className:e.aboutMeNamings,variant:"h6"},i.a.createElement("li",null,"More about me:")),i.a.createElement("ul",{className:e.ulList},i.a.createElement(h.a,{variant:"body2"},i.a.createElement("li",{className:e.listText},"I'm always excited to make something new - especially create a website. It's been a long time since I decided to become a programmer and It's over than a year since I decided to become a Front - End Developer. Why Front - End you may ask? It's not a difficult question and there is a simple answer - I just love it, to create something new, solve problems and most importantly see the results in the web browser as a beautiful website."),i.a.createElement("li",{className:e.listText},"It's easy to tell people what you can do, but it's just a words, It's harder to actually do it. Im trying to improve my knowledge and skills simply just by creating something and when I start something else I do it better, because I learn from my mistakes and gain knowledge by searching for information. Check out my projects to see what I can do now and if interested contact me to see what I can do in the future."),i.a.createElement("li",{className:e.listText},"People can't be perfect in all areas covering programming, but they can master one thing perfectly. That's why I'm focusing on Front - End Development, because there is so much to learn for me. Don't get me wrong I have some experience in Back - End Development, but It's more like doing some simple tasks. But still - that's something!.")))))},n=function(){return i.a.createElement(b.a,null,z.map((function(t,a){return i.a.createElement(b.a,{key:a},i.a.createElement(h.a,{variant:"h4",align:"center"},t.name),i.a.createElement(b.a,{height:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center"},t.items.map((function(t,a){return i.a.createElement(b.a,{key:a,m:"0 20px"},i.a.createElement(P.a,{arrow:!0,title:t.description},i.a.createElement(Y,{size:"medium"},i.a.createElement(b.a,{height:"80px",width:"80px",display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement("img",{className:e.skillImage,height:"100%",width:"100%",alt:t.name,src:t.img})))))}))))})))};return i.a.createElement(G.a,{className:e.root,container:!0,wrap:"wrap",justify:"center"},i.a.createElement(G.a,{className:e.gridItem,item:!0,md:5,xs:12},i.a.createElement(a,null)),i.a.createElement(J.a,{style:{display:t?"block":"none"},className:e.divider,variant:"fullWidth",light:!0,flexItem:!0,orientation:"horizontal"}),i.a.createElement(G.a,{className:e.gridItem,item:!0,md:5,xs:12},i.a.createElement(n,null)))},_=a(137),K=a(388),X=a(389),Z=a(390),$=a(391),ee=a(392),te=a(393),ae=a(394),ne=a(395),ie=a(132),oe=a.n(ie),re=[{name:"FaENERO",img:a(174),technology:"Front - End tools",description:"A website I made for my client.",demo:"https://faenero.lt/",code:"#"},{name:"GifBf",img:a(175),technology:" React.js, Redux, Material-UI, Giphy API",description:"GIF search application. It uses Giphy API to search for GIFs by entered keyword or selected category.",demo:"https://matasj98.github.io/GifBF/",code:"https://github.com/Matasj98/GifBF"},{name:"Photo Search .V2",img:a(176),technology:" React.js, Redux, Unsplash API",description:"It's a photo search application. It gives you option to search photos by entered keyword and also you can save your searched term. The list of saved terms will be displayed, you just need to click on term and photos will load again.",demo:"https://serene-fermi-fc21d7.netlify.app/",code:"https://github.com/Matasj98/PhotoSearchApi2"},{name:"CCA",img:a(177),technology:" React.js, Redux, Symfony",description:"3 month project in NFQ Academy. I was responsible for all of the Front - End development. The system helps team-leads, HRs, employees to manage their profiles, skills, members of team, give feedback and create profiles, criterias for them.",demo:"http://career.projektai.nfqakademija.lt/",code:"#"},{name:"Plack - a slack copy",img:a(178),technology:" React.js, Redux, Semantic-UI, FireBase as Back - End",description:"I'm sure you are familiar with Slack. It's something similar, you can register, login, chat in public channels, send private messages.",demo:"https://matasj98.github.io/Plack/#/",code:"https://github.com/Matasj98/Plack"},{name:"SuperTube",img:a(179),technology:" React.js, Redux, YouTube API",description:"Simple website with possibilty to search for videos located in YouTube.",demo:"https://relaxed-turing-51a01d.netlify.app/",code:"https://github.com/Matasj98/SuperTube"},{name:"Black Jack game",img:a(180),technology:" React.js, Redux",description:"Black Jack game",demo:"https://matasj98.github.io/blackJack/",code:"https://github.com/Matasj98/blackJack"},{name:"Background Generator",img:a(181),technology:"Just pure HTML, JS and CSS",description:"It's one of the first websites I made when started learning at Udemy.",demo:"https://matasj98.github.io/backgroundGenerator/",code:"https://github.com/Matasj98/backgroundGenerator"},{name:"Administration system",img:a(182),technology:"Just pure HTML, JS and CSS",description:"System that has 4 pages. 1 - administration page: You can register to a specialist by entering your name and selecting specialist. 2 - view all people in queque who are waiting. 3 - specialist page. Specialist can service a client and that client is removed from queque. 4 - client page. Client can enter his queque number, select specialist and data about him apears. You need to register clients in first page and save all data to localStorage for this to work.",demo:"https://matasj98.github.io/taskNFQ/index.html",code:"https://github.com/Matasj98/taskNFQ"},{name:"Shop application",img:a(183),technology:"React.js",description:"Shop application. Still in progress",demo:"https://matasj98.github.io/shopApp/",code:"https://github.com/Matasj98/shopApp"},{name:"Movies",img:a(184),technology:"React.js",description:"You can search for movies!",demo:"https://matasj98.github.io/nfqFront-end-2/",code:"#"}],se=Object(l.a)({card:{minHeight:"350px",width:"400px",margin:"10px",zIndex:999},cardContent:{height:"35px"},expandButton:{marginLeft:"auto"},isExpandedNo:{transition:"0.5s all",transform:"rotate(0deg)"},isExpandedYes:{transition:"0.5s all",transform:"rotate(180deg)"}}),ce=function(){var e=se(),t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],r=a[1],s=Object(n.useState)([]),l=Object(c.a)(s,2),m=l[0],p=l[1];return i.a.createElement(b.a,{minHeight:"91vh"},i.a.createElement(b.a,{width:"100%",display:"inline-flex",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"},re.map((function(t,a){return i.a.createElement(K.a,{key:a,className:e.card},i.a.createElement(X.a,{title:t.name}),i.a.createElement(Z.a,{style:m.includes(a)?{display:"block"}:{display:"none"},component:"img",height:"150px",title:t.name,onLoad:function(){return function(e){p(m.concat(e))}(a)},image:t.img}),i.a.createElement(b.a,{height:"150px",display:m.includes(a)?"none":"flex",justifyContent:"center",alignItems:"center"},i.a.createElement($.a,null)),i.a.createElement(ee.a,{className:e.cardContent},i.a.createElement(h.a,{variant:"body2",component:"p"},"Technologies used: ",t.technology)),i.a.createElement(te.a,{disableSpacing:!0},i.a.createElement(ae.a,{underline:"none",href:t.demo},i.a.createElement(d.a,{style:{color:"#b03030"}},"Website")),i.a.createElement(ae.a,{underline:"none",href:t.code},i.a.createElement(d.a,{style:{color:"#b03030"}},"#"===t.code?"Code not available":"Code")),i.a.createElement(x.a,{className:e.expandButton,style:{color:"#b03030"},onClick:function(){return o.includes(a)?function(e){var t=Object(_.a)(o),a=t.indexOf(e);t.splice(a,1),r(t)}(a):function(e){r(o.concat(e))}(a)}},i.a.createElement(oe.a,{className:o.includes(a)?e.isExpandedYes:e.isExpandedNo,fontSize:"large"}))),i.a.createElement(ne.a,{in:o.includes(a),timeout:"auto"},i.a.createElement(ee.a,null,i.a.createElement(h.a,{variant:"h6"},"About:"),i.a.createElement(h.a,{align:"justify",variant:"body2"},t.description))))}))),console.log(m))},le=a(133),me=a.n(le),de=Object(l.a)({root:{},iconButton:{overflow:"hidden","&:hover":{backgroundColor:"rgba(176, 48, 48, 0.5)"}}}),pe=function(){var e=de();return i.a.createElement(b.a,{minHeight:"85vh"},i.a.createElement(h.a,{style:{margin:"60px 0 10px 0"},align:"center",variant:"h4"},"Hey! I'm happy to see you decided to contact me."),i.a.createElement(h.a,{align:"center",variant:"h5"},"I believe you will find all the needed information to contact me on my linkedin profile:)"),i.a.createElement(b.a,{height:"400px",display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(ae.a,{underline:"none",href:"https://www.linkedin.com/in/matas-jarilinas-565949184/"},i.a.createElement(x.a,{size:"medium",className:e.iconButton},i.a.createElement(b.a,{height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement("img",{alt:"linkedin logo",height:"80%",width:"80%",src:me.a}))))))},ue=Object(l.a)({root:{minHeight:"80px",backgroundColor:"rgba(43, 43, 43, 0.4)",marginTop:"10px"},footerText:{border:"solid 1px white"}}),ge=function(){var e=ue();return i.a.createElement(b.a,{style:{},display:"flex",alignItems:"center",justifyContent:"center",className:e.root},i.a.createElement(b.a,{p:"10px",className:e.footerText},i.a.createElement(h.a,{variant:"body1"},"Portfolio website created by Matas")))},he=a(134),be=a.n(he),fe=a(135),ye=a.n(fe),Ee=function(){return i.a.createElement(ye.a,{style:{position:"absolute"},params:{particles:{number:{value:200,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.05},move:{speed:2},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}}}})},xe=Object(l.a)({root:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(".concat(be.a,")"),backgroundSize:"cover",backgroundPosition:"center",color:"white"}}),ve=function(){var e=xe();return i.a.createElement(b.a,{className:e.root},i.a.createElement(Ee,null),i.a.createElement(O,null),i.a.createElement(w.c,null,i.a.createElement(w.a,{exact:!0,path:"/",component:A}),i.a.createElement(w.a,{path:"/about",component:V}),i.a.createElement(w.a,{path:"/projects",component:ce}),i.a.createElement(w.a,{path:"/contact",component:pe})),i.a.createElement(ge,null))},we=a(136),ke=a(396),je=a(403),Ie=a(66),Ne=Object(we.a)({typography:{fontFamily:'"Sen", sans-serif'}});r.a.render(i.a.createElement(Ie.a,null,i.a.createElement(ke.a,{theme:Object(je.a)(Ne)},i.a.createElement(ve,null))),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.4955a257.chunk.js.map