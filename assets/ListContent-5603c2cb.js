import{r as y,e as f,o as a,f as d,w,g as L,h as s,u as p,i as k,t as v,p as C,l,j as x,c,F as m,m as B,n as P}from"./index-0492f859.js";const S={alt:"",class:"list-content__img"},D={class:"list-content__name"},$={__name:"ListItem",props:{type:String,item:Object},setup(t){return(i,e)=>{const o=y("router-link"),n=f("lazy");return a(),d(o,{to:"",class:"list-content__item"},{default:w(()=>[L(s("img",S,null,512),[[n,p(k)+t.item.poster_path]]),s("h2",D,v(t.item.title||t.item.name),1)]),_:1})}}},b={class:"container"},j={class:"list-content"},z={class:"list-content__title"},E={class:"list-content__wrapper"},F={key:0,class:"loading"},H=s("div",{class:"loading__spiner"},null,-1),N=[H],O={__name:"ListContent",props:{type:String},setup(t){const i=t;let e=C();const o=l(1),n=l(!1);e.getPopular(i.type,o.value),x(()=>i.type=="movie"?e.moviesList:e.tvsList);let r=l([]);async function _(){if(!n.value){n.value=!0,await e.getPopular(i.type,o.value);let u=i.type=="movie"?e.moviesList:e.tvsList;r.value.push(...u),n.value=!1,o.value++}}return _(),window.addEventListener("scroll",()=>{document.body.clientHeight<=window.scrollY+window.innerHeight&&_()}),(u,V)=>(a(),c(m,null,[s("div",b,[s("div",j,[s("h2",z,v(t.type=="movie"?"Все фильмы":"Все сериалы"),1),s("div",E,[(a(!0),c(m,null,B(p(r),(h,g)=>(a(),d($,{key:g,item:h,type:t.type},null,8,["item","type"]))),128))])])]),n.value?(a(),c("div",F,N)):P("",!0)],64))}};export{O as _};