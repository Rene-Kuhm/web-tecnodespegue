const f={context:void 0,registry:void 0};function E(e){f.context=e}function le(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const oe=(e,n)=>e===n,m={equals:oe};let re=z;const A=1,$=2,K={owned:null,cleanups:null,context:null,owner:null};var c=null;let B=null,fe=null,p=null,g=null,b=null,O=0;function V(e,n){const t=p,s=c,i=e.length===0,o=n===void 0?s:n,r=i?K:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=i?e:()=>e(()=>N(()=>_(r)));c=r,p=null;try{return F(l,!0)}finally{p=t,c=s}}function M(e,n){n=n?Object.assign({},m,n):m;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),Q(t,i));return[J.bind(t),s]}function I(e,n,t){const s=X(e,n,!1,A);R(s)}function v(e,n,t){t=t?Object.assign({},m,t):m;const s=X(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,R(s),J.bind(s)}function N(e){if(p===null)return e();const n=p;p=null;try{return e()}finally{p=n}}function ue(e){return c===null||(c.cleanups===null?c.cleanups=[e]:c.cleanups.push(e)),e}function ce(){return c}function ae(e){b.push.apply(b,e),e.length=0}function G(e,n){const t=Symbol("context");return{id:t,Provider:be(t),defaultValue:e}}function de(e){return c&&c.context&&c.context[e.id]!==void 0?c.context[e.id]:e.defaultValue}function he(e){const n=v(e),t=v(()=>j(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let D;function pe(){return D||(D=G())}function J(){if(this.sources&&this.state)if(this.state===A)R(this);else{const e=g;g=null,F(()=>L(this),!1),g=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Q(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&F(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=B&&B.running;r&&B.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?g.push(o):b.push(o),o.observers&&ee(o)),r||(o.state=A)}if(g.length>1e6)throw g=[],new Error},!1)),n}function R(e){if(!e.fn)return;_(e);const n=O;ge(e,e.value,n)}function ge(e,n,t){let s;const i=c,o=p;p=c=e;try{s=e.fn(n)}catch(r){return e.pure&&(e.state=A,e.owned&&e.owned.forEach(_),e.owned=null),e.updatedAt=t+1,te(r)}finally{p=o,c=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Q(e,s):e.value=s,e.updatedAt=t)}function X(e,n,t,s=A,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:c,context:c?c.context:null,pure:t};return c===null||c!==K&&(c.owned?c.owned.push(o):c.owned=[o]),o}function Z(e){if(e.state===0)return;if(e.state===$)return L(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<O);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===A)R(e);else if(e.state===$){const s=g;g=null,F(()=>L(e,n[0]),!1),g=s}}function F(e,n){if(g)return e();let t=!1;n||(g=[]),b?t=!0:b=[],O++;try{const s=e();return ye(t),s}catch(s){t||(b=null),g=null,te(s)}}function ye(e){if(g&&(z(g),g=null),e)return;const n=b;b=null,n.length&&F(()=>re(n),!1)}function z(e){for(let n=0;n<e.length;n++)Z(e[n])}function L(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===A?s!==n&&(!s.updatedAt||s.updatedAt<O)&&Z(s):i===$&&L(s,n)}}}function ee(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=$,t.pure?g.push(t):b.push(t),t.observers&&ee(t))}}function _(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),r=t.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)_(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function xe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function te(e,n=c){throw xe(e)}function j(e){if(typeof e=="function"&&!e.length)return j(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=j(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function be(e,n){return function(s){let i;return I(()=>i=N(()=>(c.context={...c.context,[e]:s.value},he(()=>s.children))),void 0),i}}let ne=!1;function we(){ne=!0}function q(e,n){if(ne&&f.context){const t=f.context;E(le());const s=N(()=>e(n||{}));return E(t),s}return N(()=>e(n||{}))}const Ae=G();function Se(e){let n=0,t,s,i,o,r;const[l,u]=M(!1),a=pe(),d={increment:()=>{++n===1&&u(!0)},decrement:()=>{--n===0&&u(!1)},inFallback:l,effects:[],resolved:!1},x=ce();if(f.context&&f.load){const y=f.context.id+f.context.count;let S=f.load(y);if(S&&(typeof S!="object"||S.status!=="success"?i=S:f.gather(y)),i&&i!=="$$f"){const[k,T]=M(void 0,{equals:!1});o=k,i.then(()=>{if(f.done)return T();f.gather(y),E(s),T(),E()},P=>{r=P,T()})}}const w=de(Ae);w&&(t=w.register(d.inFallback));let h;return ue(()=>h&&h()),q(a.Provider,{value:d,get children(){return v(()=>{if(r)throw r;if(s=f.context,o)return o(),o=void 0;s&&i==="$$f"&&E();const y=v(()=>e.children);return v(S=>{const k=d.inFallback(),{showContent:T=!0,showFallback:P=!0}=t?t():{};if((!k||i&&i!=="$$f")&&T)return d.resolved=!0,h&&h(),h=s=i=void 0,ae(d.effects),y();if(P)return h?S:V(ie=>(h=ie,s&&(E({id:s.id+"f",count:0}),s=void 0),e.fallback),x)})})}})}function Ce(e,n,t){let s=t.length,i=n.length,o=s,r=0,l=0,u=n[i-1].nextSibling,a=null;for(;r<i||l<o;){if(n[r]===t[l]){r++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===r){const d=o<s?l?t[l-1].nextSibling:t[o-l]:u;for(;l<o;)e.insertBefore(t[l++],d)}else if(o===l)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[o-1]&&t[l]===n[i-1]){const d=n[--i].nextSibling;e.insertBefore(t[l++],n[r++].nextSibling),e.insertBefore(t[--o],d),n[i]=t[o]}else{if(!a){a=new Map;let x=l;for(;x<o;)a.set(t[x],x++)}const d=a.get(n[r]);if(d!=null)if(l<d&&d<o){let x=r,w=1,h;for(;++x<i&&x<o&&!((h=a.get(n[x]))==null||h!==d+w);)w++;if(w>d-l){const y=n[r];for(;l<d;)e.insertBefore(t[l++],y)}else e.replaceChild(t[l++],n[r++])}else r++;else n[r++].remove()}}}function se(e,n,t,s={}){let i;return V(o=>{i=o,n===document?e():Ee(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Ee(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return H(e,n,s,t);I(i=>H(e,n(),i,t),s)}function Te(e,n,t={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=i=>globalThis._$HY.r[i],f.has=i=>i in globalThis._$HY.r,f.gather=i=>Y(n,i),f.registry=new Map,f.context={id:t.renderId||"",count:0},Y(n,t.renderId);const s=se(e,n,[...n.childNodes],t);return f.context=null,s}function H(e,n,t,s,i){if(f.context){!t&&(t=[...e.childNodes]);let l=[];for(let u=0;u<t.length;u++){const a=t[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}t=l}for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(f.context)return t;if(o==="number"&&(n=n.toString()),r){let l=t[0];l&&l.nodeType===3?l.data!==n&&(l.data=n):l=document.createTextNode(n),t=C(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(f.context)return t;t=C(e,t,s)}else{if(o==="function")return I(()=>{let l=n();for(;typeof l=="function";)l=l();t=H(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],u=t&&Array.isArray(t);if(U(l,n,t,i))return I(()=>t=H(e,l,t,s,!0)),()=>t;if(f.context){if(!l.length)return t;if(s===void 0)return[...e.childNodes];let a=l[0],d=[a];for(;(a=a.nextSibling)!==s;)d.push(a);return t=d}if(l.length===0){if(t=C(e,t,s),r)return t}else u?t.length===0?W(e,l,s):Ce(e,t,l):(t&&C(e),W(e,l));t=l}else if(n.nodeType){if(f.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=C(e,t,s,n);C(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function U(e,n,t,s){let i=!1;for(let o=0,r=n.length;o<r;o++){let l=n[o],u=t&&t[e.length],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=U(e,l,u)||i;else if(a==="function")if(s){for(;typeof l=="function";)l=l();i=U(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const d=String(l);u&&u.nodeType===3&&u.data===d?e.push(u):e.push(document.createTextNode(d))}}return i}function W(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function C(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let r=n.length-1;r>=0;r--){const l=n[r];if(i!==l){const u=l.parentNode===e;!o&&!r?u?e.replaceChild(i,l):e.insertBefore(i,t):u&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function Y(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!f.registry.has(o)&&f.registry.set(o,i)}}const ve=(...e)=>(we(),Te(...e));var Ne=e=>(n,t,s,{client:i})=>{if(!e.hasAttribute("ssr"))return;const o=i!=="only",r=o?ve:se;let l,u={};if(Object.keys(s).length>0){if(i!=="only"){const h=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,y=>y===e?NodeFilter.FILTER_SKIP:y.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:y.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;l=h.nextNode();)u[l.getAttribute("name")||"default"]=l}for(const[h,y]of Object.entries(s))u[h]||(u[h]=document.createElement("astro-slot"),h!=="default"&&u[h].setAttribute("name",h),u[h].innerHTML=y)}const{default:a,...d}=u,x=e.dataset.solidRenderId,w=r(()=>{const h=()=>q(n,{...t,...d,children:a});return o?q(Se,{get children(){return h()}}):h()},e,{renderId:x});e.addEventListener("astro:unmount",()=>w(),{once:!0})};export{Ne as default};
