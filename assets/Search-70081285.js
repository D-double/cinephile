import{d as k,b as x,r as $,e as A,o,f as g,w as P,g as v,h as r,u as B,i as C,t as V,j as d,k as b,l as m,c as h,v as D,F as p,m as j,n as N,a as T}from"./index-d45b9201.js";const U=k("searching",{state:()=>({searchArray:[],search:"",totalPages:1}),actions:{async getSearch(t=1){try{const c=await(await fetch(`https://api.themoviedb.org/3/search/multi?query=${this.search}&include_adult=false&language=ru&page=${t}`,x)).json();this.totalPages=c.total_pages;const s=c.results.filter(e=>e.poster_path!=null);t>1?this.searchArray.push(...s):this.searchArray=s}catch(a){console.log(a)}}}}),z={alt:"",class:"search__img"},E={class:"search__name"},F={__name:"SearchItem",props:{item:Object},setup(t){return(a,c)=>{const s=$("router-link"),e=A("lazy");return o(),g(s,{to:"",class:"search__item"},{default:P(()=>[v(r("img",z,null,512),[[e,B(C)+t.item.poster_path]]),r("h2",E,V(t.item.title||t.item.name),1)]),_:1})}}},H={class:"container"},L={class:"search"},q=["placeholder"],I={class:"search__wrapper"},M={key:0,class:"loading"},O=r("div",{class:"loading__spiner"},null,-1),W=[O],Y={__name:"SearchContent",props:{placeholder:String},setup(t){let a=null;function c(l,i){a&&clearTimeout(a),a=setTimeout(()=>{l()},i)}const s=d({get:()=>e.search,set:l=>{e.search=l,c(e.getSearch,500)}}),e=U(),f=d(()=>e.searchArray);b(()=>{e.searchArray=null,e.search=""});const u=m(1),n=m(!1);let y=d(()=>e.totalPages);async function w(){!n.value&&u.value<y.value&&(n.value=!0,u.value++,await e.getSearch(u.value),n.value=!1)}return window.addEventListener("scroll",()=>{document.body.clientHeight<=window.scrollY+window.innerHeight&&w()}),(l,i)=>(o(),h(p,null,[r("div",H,[r("div",L,[v(r("input",{"onUpdate:modelValue":i[0]||(i[0]=_=>s.value=_),type:"text",class:"search__input",placeholder:t.placeholder},null,8,q),[[D,s.value]]),r("div",I,[(o(!0),h(p,null,j(f.value,(_,S)=>(o(),g(F,{key:S,item:_},null,8,["item"]))),128))])])]),n.value?(o(),h("div",M,W)):N("",!0)],64))}},G={class:"main"},K={__name:"Search",setup(t){return(a,c)=>(o(),h("main",G,[T(Y,{placeholder:"Найти фильм, сериал..."})]))}};export{K as default};
