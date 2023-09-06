(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const d=[{id:"1",marca:"Zara",nome:"Camisa Larga com Bolsos",preco:70,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Zara",nome:"Casaco Reto com Lã",preco:85,imagem:"product-2.jpg",feminino:!0},{id:"3",marca:"Zara",nome:"Jaqueta com Efeito Camurça",preco:60,imagem:"product-3.jpg",feminino:!1},{id:"4",marca:"Zara",nome:"Sobretudo em Mescla de Lã",preco:160,imagem:"product-4.jpg",feminino:!1},{id:"5",marca:"Zara",nome:"Camisa Larga Acolchoada de Veludo Cotelê",preco:110,imagem:"product-5.jpg",feminino:!1},{id:"6",marca:"Zara",nome:"Casaco de Lã com Botões",preco:170,imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Zara",nome:"Casaco com Botões",preco:75,imagem:"product-7.jpg",feminino:!0},{id:"8",marca:"Zara",nome:"Colete Comprido com Cinto",preco:88,imagem:"product-8.jpg",feminino:!0}];function l(e,o){localStorage.setItem(e,JSON.stringify(o))}function C(e){return JSON.parse(localStorage.getItem(e))}const r=C("carrinho")??{};function E(){document.getElementById("carrinho").classList.add("right-[0]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function L(){document.getElementById("carrinho").classList.remove("right-[0]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function b(){Object.keys(r).length!==0&&(window.location.href=window.location.origin+"./checkout.html")}function x(){const e=document.getElementById("fechar-carrinho"),o=document.getElementById("abrir-carrinho"),a=document.getElementById("finalizar-compra");e.addEventListener("click",L),o.addEventListener("click",E),a.addEventListener("click",b)}function f(e){delete r[e],l("carrinho",r),s(),y()}function p(e){r[e]++,l("carrinho",r),s(),g(e)}function v(e){if(r[e]===1){f(e);return}r[e]--,l("carrinho",r),s(),g(e)}function g(e){document.getElementById(`quantidade-${e}`).innerText=r[e]}function h(e){const o=d.find(c=>c.id===e),a=document.getElementById("produtos-carrinho"),i=document.createElement("article"),t=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const c of t)i.classList.add(c);const n=`<button id="remover-item-${o.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${o.imagem}"
      alt="Carrinho: ${o.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${o.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${o.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${o.id}'>-</button>
        <p id='quantidade-${o.id}' class='ml-2'>${r[o.id]}</p>
        <button class='ml-2' id='incrementar-produto-${o.id}'>+</button>
    </div>`;i.innerHTML=n,a.appendChild(i),document.getElementById(`decrementar-produto-${o.id}`).addEventListener("click",()=>v(o.id)),document.getElementById(`incrementar-produto-${o.id}`).addEventListener("click",()=>p(o.id)),document.getElementById(`remover-item-${o.id}`).addEventListener("click",()=>f(o.id))}function y(){const e=document.getElementById("produtos-carrinho");e.innerHTML="";for(const o in r)h(o)}function B(e){if(e in r){p(e);return}r[e]=1,l("carrinho",r),h(e),s()}function s(){const e=document.getElementById("preco-total");let o=0;for(const a in r)o+=d.find(i=>i.id===a).preco*r[a];e.innerText=`Total: $${o}`}function I(){for(const e of d){const o=`<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${e.feminino?"feminino":"masculino"}" id="card-produto${e.id}">
    <img 
        src="assets/img/${e.imagem}"
        alt="Produto 1 da Magazine Hashtag." class='group-hover:scale-110 duration-300 my-3'>
    <p class='texto-sm'>${e.marca}</p>
    <p class='texto-sm'>${e.nome}</p>
    <p class='texto-sm'>$${e.preco}</p>
    <button id='adicionar-${e.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;document.getElementById("container-produto").innerHTML+=o}for(const e of d)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>B(e.id))}const m=document.getElementById("container-produto");function u(){const e=Array.from(m.getElementsByClassName("hidden"));for(const o of e)o.classList.remove("hidden")}function $(){u();const e=Array.from(m.getElementsByClassName("masculino"));for(const o of e)o.classList.add("hidden")}function P(){u();const e=Array.from(m.getElementsByClassName("feminino"));for(const o of e)o.classList.add("hidden")}function j(){document.getElementById("exibir-todos").addEventListener("click",u),document.getElementById("exibir-masculinos").addEventListener("click",P),document.getElementById("exibir-femininos").addEventListener("click",$)}I();x();y();s();j();
