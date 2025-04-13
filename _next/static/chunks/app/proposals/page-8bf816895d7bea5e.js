(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{6095:function(e,t,a){Promise.resolve().then(a.bind(a,8845))},8845:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),n=a(2265),s=a(6905),i=a(7415),o=JSON.parse('[{"inputs":[],"name":"getProposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProposal","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}]');let u="0xCfdb368F89A8BF37639023f3313567Eef4B9518d";function l(){let[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(!0),[c,d]=(0,n.useState)(!1),p=async()=>{try{let e=new s.Q(window.ethereum),a=new i.CH(u,o,e),r=await a.getProposalCount(),n=await Promise.all(Array.from({length:Number(r)},async(e,t)=>{let[r,n,s,i,o,u]=await a.getProposal(t);return{id:r,author:n,text:s,timestamp:i,votesFor:o,votesAgainst:u}}));t(n)}catch(e){console.error("Failed to load proposals:",e)}finally{l(!1)}};(0,n.useEffect)(()=>{p()},[c]);let h=async(e,t)=>{try{let a=new s.Q(window.ethereum),r=await a.getSigner(),n=new i.CH(u,o,r),l=await n.vote(e,t);await l.wait(),d(!c)}catch(e){console.error("Vote failed:",e),alert("Vote failed: maybe you already voted?")}};return(0,r.jsxs)("div",{className:"max-w-3xl mx-auto mt-10 px-4",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"\uD83D\uDDF3 Governance Proposals"}),a&&(0,r.jsx)("p",{className:"text-white/60",children:"Loading proposals..."}),0===e.length&&!a&&(0,r.jsx)("p",{className:"text-white/60",children:"No proposals yet."}),e.map(e=>(0,r.jsxs)("div",{className:"bg-black border border-white/10 p-4 mb-4 rounded-lg",children:[(0,r.jsxs)("p",{className:"text-sm text-white/40 mb-1",children:["#",e.id," \xb7 by ",e.author]}),(0,r.jsx)("p",{className:"text-lg text-white mb-2",children:e.text}),(0,r.jsx)("p",{className:"text-xs text-white/30",children:new Date(1e3*e.timestamp).toLocaleString()}),(0,r.jsxs)("div",{className:"mt-2 flex items-center gap-4",children:[(0,r.jsxs)("button",{onClick:()=>h(e.id,!0),className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:["\uD83D\uDC4D For (",e.votesFor,")"]}),(0,r.jsxs)("button",{onClick:()=>h(e.id,!1),className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:["\uD83D\uDC4E Against (",e.votesAgainst,")"]})]})]},e.id))]})}},6905:function(e,t,a){"use strict";a.d(t,{Q:function(){return s}});var r=a(2261),n=a(8180);class s extends n.JU{#e;constructor(e,t,a){let n=Object.assign({},null!=a?a:{},{batchMaxCount:1});(0,r.en)(e&&e.request,"invalid EIP-1193 provider","ethereum",e),super(t,n),this.#e=async(t,a)=>{let r={method:t,params:a};this.emit("debug",{action:"sendEip1193Request",payload:r});try{let t=await e.request(r);return this.emit("debug",{action:"receiveEip1193Result",result:t}),t}catch(t){let e=Error(t.message);throw e.code=t.code,e.data=t.data,e.payload=r,this.emit("debug",{action:"receiveEip1193Error",error:e}),e}}}async send(e,t){return await this._start(),await super.send(e,t)}async _send(e){(0,r.en)(!Array.isArray(e),"EIP-1193 does not support batch request","payload",e);try{let t=await this.#e(e.method,e.params||[]);return[{id:e.id,result:t}]}catch(t){return[{id:e.id,error:{code:t.code,data:t.data,message:t.message}}]}}getRpcError(e,t){switch((t=JSON.parse(JSON.stringify(t))).error.code||-1){case 4001:t.error.message=`ethers-user-denied: ${t.error.message}`;break;case 4200:t.error.message=`ethers-unsupported: ${t.error.message}`}return super.getRpcError(e,t)}async hasSigner(e){null==e&&(e=0);let t=await this.send("eth_accounts",[]);return"number"==typeof e?t.length>e:(e=e.toLowerCase(),0!==t.filter(t=>t.toLowerCase()===e).length)}async getSigner(e){if(null==e&&(e=0),!await this.hasSigner(e))try{await this.#e("eth_requestAccounts",[])}catch(t){let e=t.payload;throw this.getRpcError(e,{id:e.id,error:t})}return await super.getSigner(e)}}}},function(e){e.O(0,[891,971,938,744],function(){return e(e.s=6095)}),_N_E=e.O()}]);