import{r as q,e as S,o as a,f as I,w as z,g as E,h as f,u as l,i as R,t as C,l as c,p as N,c as o,a as L,n as p,F as x,m as w,q as h,s as V,x as j,y as F,j as B}from"./index-10fd3ce4.js";const O={alt:"",class:"list-content__img"},U={class:"list-content__name"},A={__name:"ListItem",props:{type:String,item:Object},setup(s){return(P,i)=>{const r=q("router-link"),_=S("lazy");return a(),I(r,{to:`/${s.type}/${s.item.id}`,class:"list-content__item"},{default:z(()=>[E(f("img",O,null,512),[[_,l(R)+s.item.poster_path]]),f("h2",U,C(s.item.title||s.item.name),1)]),_:1},8,["to"])}}},G=["onClick"],H=["onClick"],J=["onClick"],D={__name:"Pagination",props:{top:Boolean,currentPage:Number,allPages:Number},emits:["emitPage"],setup(s,{emit:P}){const i=s;let r=c(null),_=c(null),v=c(null),g=c(null),d=c(null),k=c(null),y=c(null);function m(e){let t=i.allPages;r.value=e>1?e-1:null,_.value=t>e?e+1:null,v.value=e-3>1?e-3:null,g.value=t>e+3?e+3:null,d.value=v.value?[1,2]:e==4?[1,2,3,4,5]:[1,2,3,4],k.value=g.value?[t-1,t]:t-3==e?[t--,t--,t--,t--,t].reverse():[t--,t--,t--,t].reverse(),y=g.value&&v.value?[e-1,e,e+1]:null}m(i.currentPage);function u(e){m(e),P("emitPage",e)}return N(()=>i.allPages,e=>{e>1&&m(i.currentPage)}),N(()=>i.currentPage,(e,t)=>{e!=t&&m(i.currentPage)}),(e,t)=>{const $=q("font-awesome-icon");return a(),o("nav",{class:h(["pagin",{pagin_top:s.top}])},[f("ul",{class:h(["pagin__menu",{pagin__menu_top:s.top}])},[l(r)?(a(),o("li",{key:0,class:"pagin__btn",onClick:t[0]||(t[0]=n=>u(l(r)))},[L($,{icon:["fas","angle-left"]})])):p("",!0),l(d)?(a(!0),o(x,{key:1},w(l(d),n=>(a(),o("li",{class:h(["pagin__num",{pagin__num_active:n==s.currentPage}]),key:n,onClick:b=>u(n)},C(n),11,G))),128)):p("",!0),l(v)?(a(),o("li",{key:2,class:"pagin__num",onClick:t[1]||(t[1]=n=>u(l(v)))}," ... ")):p("",!0),l(y)?(a(!0),o(x,{key:3},w(l(y),n=>(a(),o("li",{class:h(["pagin__num",{pagin__num_active:n==s.currentPage}]),key:n,onClick:b=>u(n)},C(n),11,H))),128)):p("",!0),l(g)?(a(),o("li",{key:4,class:"pagin__num",onClick:t[2]||(t[2]=n=>u(l(g)))}," ... ")):p("",!0),l(k)?(a(!0),o(x,{key:5},w(l(k),n=>(a(),o("li",{class:h(["pagin__num",{pagin__num_active:n==s.currentPage}]),key:n,onClick:b=>u(n)},C(n),11,J))),128)):p("",!0),l(_)?(a(),o("li",{key:6,class:"pagin__btn",onClick:t[3]||(t[3]=n=>u(l(_)))},[L($,{icon:["fas","angle-right"]})])):p("",!0)],2)],2)}}},K={class:"container"},M={class:"list-content"},Q={class:"list-content__title"},T={key:0,class:"loading loading_rel"},W=f("div",{class:"loading__spiner"},null,-1),X=[W],Y={key:1,class:"list-content__wrapper"},ee={__name:"ListContent",props:{type:String},setup(s){const P=s;let i=V();const r=c(1),_=c(!1),v=j(),g=F();let d=c([]),k=B(()=>i.maxPages);async function y(e=1){_.value=!0,r.value=e,await i.getPopular(P.type,r.value);let t=P.type=="movie"?i.moviesList:i.tvsList;d.value=t,_.value=!1}let m=B(()=>parseInt(g.query.page)?parseInt(g.query.page):1);N(()=>m.value,(e,t)=>{e!=t&&y(e)});function u(e){v.push({path:`/${P.type}`,query:{page:e}}),y(e)}return u(m.value),(e,t)=>(a(),o("div",K,[f("div",M,[f("h2",Q,C(s.type=="movie"?"Все фильмы":"Все сериалы"),1),L(D,{top:!0,currentPage:r.value,onEmitPage:u,allPages:l(k)},null,8,["currentPage","allPages"]),_.value?(a(),o("div",T,X)):(a(),o("div",Y,[(a(!0),o(x,null,w(l(d),($,n)=>(a(),I(A,{key:n,item:$,type:s.type},null,8,["item","type"]))),128))])),L(D,{currentPage:r.value,onEmitPage:u,allPages:l(k)},null,8,["currentPage","allPages"])])]))}};export{ee as _};
