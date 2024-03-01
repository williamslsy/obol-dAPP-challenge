"use strict";exports.id=935,exports.ids=[935],exports.modules={49935:(e,t,a)=>{a.d(t,{offchainLookup:()=>g,offchainLookupSignature:()=>m});var r=a(60628),s=a(17779),n=a(14418),o=a(78700);class c extends n.G{constructor({callbackSelector:e,cause:t,data:a,extraData:r,sender:s,urls:n}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(e=>`    ${(0,o.Gr)(e)}`)],`  Sender: ${s}`,`  Data: ${a}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class i extends n.G{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(t)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.G{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var l=a(37422),u=a(90771),f=a(75084),p=a(81659),h=a(28576),w=a(93385),y=a(46071);let m="0x556f1830",b={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,{blockNumber:t,blockTag:a,data:s,to:n}){let{args:o}=(0,u.p)({data:s,abi:[b]}),[i,l,y,m,g]=o;try{if(!function(e,t){if(!(0,h.U)(e,{strict:!1}))throw new p.b({address:e});if(!(0,h.U)(t,{strict:!1}))throw new p.b({address:t});return e.toLowerCase()===t.toLowerCase()}(n,i))throw new d({sender:i,to:n});let s=await O({data:y,sender:i,urls:l}),{data:o}=await (0,r.RE)(e,{blockNumber:t,blockTag:a,data:(0,w.zo)([m,(0,f.E)([{type:"bytes"},{type:"bytes"}],[s,g])]),to:n});return o}catch(e){throw new c({callbackSelector:m,cause:e,data:s,extraData:g,sender:i,urls:l})}}async function O({data:e,sender:t,urls:a}){let r=Error("An unknown error occurred.");for(let n=0;n<a.length;n++){let o=a[n],c=o.includes("{data}")?"GET":"POST",d="POST"===c?{data:e,sender:t}:void 0;try{let a;let n=await fetch(o.replace("{sender}",t).replace("{data}",e),{body:JSON.stringify(d),method:c});if(a=n.headers.get("Content-Type")?.startsWith("application/json")?(await n.json()).data:await n.text(),!n.ok){r=new l.Gg({body:d,details:a?.error?(0,s.P)(a.error):n.statusText,headers:n.headers,status:n.status,url:o});continue}if(!(0,y.v)(a)){r=new i({result:a,url:o});continue}return a}catch(e){r=new l.Gg({body:d,details:e.message,url:o})}}throw r}}};