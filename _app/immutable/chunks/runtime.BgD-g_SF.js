const Ne=()=>{};function te(e){for(var t=0;t<e.length;t++)e[t]()}function Re(e){return e()}var ne=Array.isArray,Fe=Array.from,Le=Object.isFrozen,Me=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyDescriptors,Be=Object.prototype,Ke=Array.prototype,Ye=Object.getPrototypeOf;const Ue=1,oe=2,re=4,R=8,Z=16,z=64,j=128,E=256,v=512,A=1024,V=2048,B=4096,He=0,Ee=1,be=2,ge=3,ze=6,Ve=7,Oe=Symbol(),ee=Symbol("$state");let M=!1,G=[];function se(){M=!1;const e=G.slice();G=[],te(e)}function Ge(e){M||(M=!0,setTimeout(se,0)),G.push(e)}function ke(){M&&se()}const K=re|R|Z,ce=0,ve=1;let F=ce,P=!1,w=!1,l=[],S=[],C=0,k=null,d=null,_=null,u=0,x=null;function We(e){x=e}let T=!1,we=!1;function Ze(e){we=e}let I=!1,L=null,m=null,g=!1;function fe(e){const t=e||m;return t!==null&&t.r}function $(e){const t=e.f;if(t&v||e.v===Oe)return!0;if(t&A){const n=e.d;if(n!==null){const o=n.length;let r;for(r=0;r<o;r++){const s=n[r];if(s.f&A&&!$(s)){b(s,E);continue}if(s.f&v)if(s.f&oe){if(ae(s,!0),e.f&v)return!0}else return!0;const i=(t&j)!==0,c=e.w,f=s.w;if(i&&f>c)return e.w=f,!0}}}return!1}function ue(e){const t=e.i,n=e.f,o=_,r=u,s=x,i=k,c=L,f=m,h=I,y=(n&Z)!==0,ye=T;_=null,u=0,x=null,k=e,L=e.b,m=e.x,I=!w&&(n&j)!==0,T=!1;try{let U;y?U=t(e.b,e):U=t();let p=e.d;if(_!==null){let a;if(p!==null){const q=p.length,O=u===0?_:p.slice(0,u).concat(_),X=O.length>16&&q-u>1?new Set(O):null;for(a=u;a<q;a++){const H=p[a];(X!==null?!X.has(H):!O.includes(H))&&le(e,H)}}if(p!==null&&u>0)for(p.length=u+_.length,a=0;a<_.length;a++)p[u+a]=_[a];else e.d=p=_;if(!I)for(a=u;a<p.length;a++){const q=p[a],O=q.c;O===null?q.c=[e]:O[O.length-1]!==e&&O.push(e)}}else p!==null&&u<p.length&&(J(e,u),p.length=u);return U}finally{_=o,u=r,x=s,k=i,L=c,m=f,I=h,T=ye}}function le(e,t){const n=t.c;let o=0;if(n!==null){o=n.length-1;const r=n.indexOf(e);r!==-1&&(o===0?t.c=null:(n[r]=n[o],n.pop()))}o===0&&t.f&j&&(b(t,v),J(t,0))}function J(e,t){const n=e.d;if(n!==null){const o=t===0?null:n.slice(0,t);let r;for(r=t;r<n.length;r++){const s=n[r];(o===null||!o.includes(s))&&le(e,s)}}}function Q(e){const t=e.r;if(e.r=null,t!==null){let n;for(n=0;n<t.length;n++)De(t[n])}}function Te(e,t){if(e!==null)throw t}function ie(e){if(e.f&B)return;const t=e.v,n=d;d=e;try{Q(e),t!==null&&t();const r=ue(e);typeof r=="function"&&(e.v=r)}catch(r){const s=e.b;if(s!==null)Te(s,r);else throw r}finally{d=n}const o=e.x;fe(o)&&e.f&R&&l.length>0&&Se(o)}function _e(){if(C>100)throw C=0,new Error("ERR_SVELTE_TOO_MANY_UPDATES");C++}function D(e){const t=e.length;if(t>0){_e();const n=w;w=!0;try{let o;for(o=0;o<t;o++){const r=e[o],s=r.f;s&(B|V)||($(r)?(b(r,E),ie(r)):s&A&&b(r,E))}}finally{w=n}e.length=0}}function Ae(){if(P=!1,C>101)return;const e=l,t=S;l=[],S=[],D(e),D(t),P||(C=0)}function Y(e,t){const n=e.f;if(t){const o=w;try{w=!0,ie(e),b(e,E)}finally{w=o}}else if(F===ce&&(P||(P=!0,queueMicrotask(Ae))),n&re)S.push(e),n&z||de(e,!0);else{const o=l.length;let r=o===0;if(!r){const s=e.l,i=e.b,c=(n&R)!==0;let f,h,y=o;for(;;){if(f=l[--y],f.l<=s){y+1===o?r=!0:(h=(f.f&R)!==0,(f.b!==i||h&&!c)&&y++,l.splice(y,0,e));break}if(y===0){l.unshift(e);break}}}r&&l.push(e)}}function $e(){const e=[];for(let t=0;t<l.length;t++){const n=l[t];n.f&Z&&n.x===m&&(e.push(n),l.splice(t,1),t--)}D(e)}function Se(e){const t=[];for(let n=0;n<l.length;n++){const o=l[n];o.f&R&&o.x===e&&(t.push(o),l.splice(n,1),n--)}D(t)}function pe(e){Ce(e)}function Ce(e,t=!0){const n=F,o=l,r=S;let s;try{_e();const i=[],c=[];F=ve,l=i,S=c,t&&(D(o),D(r)),e!==void 0&&(s=e()),(l.length>0||c.length>0)&&pe(),ke(),C=0}finally{F=n,l=o,S=r}return s}async function Je(){await Promise.resolve(),pe()}function ae(e,t){const n=g;g=!0,Q(e);const o=ue(e);g=n;const r=(I||e.f&j)&&e.d!==null?A:E;b(e,r);const s=e.e;s(o,e.v)||(e.v=o,he(e,v,t))}function xe(e){const t=e.f;if(t&B)return e.v;if(k!==null&&!(k.f&z)&&!T){const n=(k.f&j)!==0,o=k.d;_===null&&o!==null&&o[u]===e&&!(n&&d!==null)?u++:(o===null||u===0||o[u-1]!==e)&&(_===null?_=[e]:_.push(e)),x!==null&&d!==null&&d.f&E&&!(d.f&z)&&x.includes(e)&&(b(d,v),Y(d,!1))}return t&oe&&$(e)&&ae(e,!1),e.v}function de(e,t,n){const o=e.r;if(o!==null){let r;for(r=0;r<o.length;r++){const s=o[r];s.f&K&&N(s,t,n)}}}function N(e,t,n=new Set){const o=e.f;if((o&V)!==0!==t){e.f^=V,!t&&o&K&&!(o&E)&&Y(e,!1);const s=e.b;if(s!==null&&!n.has(s)){n.add(s);const i=s.t;if(i===Ee){const c=s.e;c!==null&&s!==L&&N(c,t,n);const f=s.ce;f!==null&&s.v&&N(f,t,n);const h=s.ae;h!==null&&!s.v&&N(h,t,n)}else if(i===be){const c=s.v;for(let{e:f}of c)f!==null&&N(f,t,n)}}}de(e,t,n)}function he(e,t,n){const o=fe(null),r=e.c;if(r!==null){const s=r.length;let i;for(i=0;i<s;i++){const c=r[i],f=c.f,h=(f&j)!==0;if((!n||!o)&&c===d)continue;b(c,t);const y=(f&A)!==0;(f&E||y&&h)&&(c.f&K?Y(c,!1):he(c,A,n))}}}function De(e){const t=e.v,n=e.y,o=e.f;Q(e),J(e,0),e.i=e.r=e.y=e.x=e.b=e.d=e.c=null,b(e,B),n!==null&&(ne(n)?te(n):n()),t!==null&&o&K&&t()}function Qe(e){const t=T;try{return T=!0,e()}finally{T=t}}function Xe(e,t){let n=e.y;n===null?e.y=t:ne(n)?n.push(t):e.y=[n,t]}const je=~(v|A|E);function b(e,t){e.f=e.f&je|t}function qe(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function et(e,t=!1,n){m={x:null,c:null,e:null,m:!1,p:m,d:null,s:e,r:t,u:null}}function tt(e){const t=m;if(t!==null){e!==void 0&&(t.x=e);const n=t.e;if(n!==null){t.e=null;for(let o=0;o<n.length;o++)Y(n[o],!1)}m=t.p,t.m=!0}return e||{}}function nt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ee in e)W(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ee in n&&W(n)}}}function W(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e);for(let o in e)try{W(e[o],t)}catch{}const n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const o=me(n);for(let r in o){const s=o[r].get;if(s)try{s.call(e)}catch{}}}}}function ot(e){return qe(e)?xe(e):e}export{Ce as $,T as A,we as B,k as C,v as D,be as E,fe as F,oe as G,Ue as H,Ee as I,E as J,he as K,_ as L,z as M,b as N,x as O,R as P,We as Q,Z as R,ee as S,Ge as T,Oe as U,N as V,te as W,j as X,He as Y,ze as Z,Ve as _,et as a,Fe as a0,Re as a1,nt as a2,Xe as b,L as c,De as d,ie as e,ge as f,Le as g,xe as h,ne as i,ot as j,Ke as k,Me as l,g as m,Ne as n,Be as o,tt as p,Pe as q,Ye as r,Ze as s,m as t,Qe as u,Je as v,Y as w,d as x,re as y,$e as z};
