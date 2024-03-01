exports.id=433,exports.ids=[433],exports.modules={4664:(e,t,r)=>{"use strict";r.d(t,{Pxu:()=>o});var i=r(3729),n=["color"],o=(0,i.forwardRef)(function(e,t){var r=e.color,o=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,n);return(0,i.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),(0,i.createElement)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))})},48869:e=>{"use strict";e.exports=function(){var e="millisecond",t="second",r="minute",i="hour",n="week",o="month",a="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},p="en",f={};f[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",m=function(e){return e instanceof v||!(!e||!e[g])},b=function e(t,r,i){var n;if(!t)return p;if("string"==typeof t){var o=t.toLowerCase();f[o]&&(n=o),r&&(f[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;f[s]=t,n=s}return!i&&n&&(p=n),n||!i&&p},w=function(e,t){if(m(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},y={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,o),a=r-n<0,s=t.clone().add(i+(a?-1:1),o);return+(-(i+(r-n)/(a?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:o,y:s,w:n,d:"day",D:l,h:i,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=b,y.i=m,y.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return w(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<w(e)},p.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,a){var c=this,u=!!y.u(a)||a,d=y.p(e),h=function(e,t){var r=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},p=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},f=this.$W,g=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case o:return u?h(1,g):h(0,g+1);case n:var w=this.$locale().weekStart||0,v=(f<w?f+7:f)-w;return h(u?m-v:m+(6-v),g);case"day":case l:return p(b+"Hours",0);case i:return p(b+"Minutes",1);case r:return p(b+"Seconds",2);case t:return p(b+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(n,a){var c,u=y.p(n),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[o]=d+"Month",c[s]=d+"FullYear",c[i]=d+"Hours",c[r]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],p="day"===u?this.$D+(a-this.$W):a;if(u===o||u===s){var f=this.clone().set(l,1);f.$d[h](p),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[y.p(e)]()},p.add=function(e,a){var l,c=this;e=Number(e);var u=y.p(a),d=function(t){var r=w(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===o)return this.set(o,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((l={})[r]=6e4,l[i]=36e5,l[t]=1e3,l)[u]||1,p=this.$d.getTime()+e*h;return y.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,h=r.meridiem,p=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},f=function(e){return y.s(o%12||12,e,"0")},g=h||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,u,3);case"MMMM":return p(u,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,l,2);case"ddd":return p(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return y.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,l,c){var u,d=this,h=y.p(l),p=w(e),f=(p.utcOffset()-this.utcOffset())*6e4,g=this-p,m=function(){return y.m(d,p)};switch(h){case s:u=m()/12;break;case o:u=m();break;case a:u=m()/3;break;case n:u=(g-f)/6048e5;break;case"day":u=(g-f)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:y.a(u)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=b(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),x=v.prototype;return w.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",o],["$y",s],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),w.extend=function(e,t){return e.$i||(e(t,v,w),e.$i=!0),w},w.locale=b,w.isDayjs=m,w.unix=function(e){return w(1e3*e)},w.en=f[p],w.Ls=f,w.p={},w}()},38464:e=>{"use strict";e.exports=function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=g.r||!g.r){m<=1&&f>0&&(g=h[f-1]);var b=d[g.l];s&&(m=s(""+m)),c="string"==typeof b?b.replace("%d",m):b(m,i,g.l,u);break}}if(i)return c;var w=u?d.future:d.past;return"function"==typeof w?w(c):w.replace("%s",c)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},50962:e=>{"use strict";e.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},17354:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(a in o=(n=p.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,p.push(a,c),d[a]=o));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},56209:e=>{"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},14149:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},6256:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var i=r(3729),n=r.n(i);let o=["light","dark"],a="(prefers-color-scheme: dark)",s=(0,i.createContext)(void 0),l=e=>(0,i.useContext)(s)?n().createElement(i.Fragment,null,e.children):n().createElement(u,e),c=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:g=c,defaultTheme:m=r?"system":"light",attribute:b="data-theme",value:w,children:y,nonce:v})=>{let[x,C]=(0,i.useState)(()=>h(u,m)),[_,E]=(0,i.useState)(()=>h(u)),P=w?Object.values(w):g,S=(0,i.useCallback)(e=>{let i=e;if(!i)return;"system"===e&&r&&(i=f());let n=w?w[i]:i,a=t?p():null,s=document.documentElement;if("class"===b?(s.classList.remove(...P),n&&s.classList.add(n)):n?s.setAttribute(b,n):s.removeAttribute(b),l){let e=o.includes(m)?m:null,t=o.includes(i)?i:e;s.style.colorScheme=t}null==a||a()},[]),R=(0,i.useCallback)(e=>{C(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),O=(0,i.useCallback)(t=>{E(f(t)),"system"===x&&r&&!e&&S("system")},[x,e]);(0,i.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,i.useEffect)(()=>{let e=e=>{e.key===u&&R(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),(0,i.useEffect)(()=>{S(null!=e?e:x)},[e,x]);let A=(0,i.useMemo)(()=>({theme:x,setTheme:R,forcedTheme:e,resolvedTheme:"system"===x?_:x,themes:r?[...g,"system"]:g,systemTheme:r?_:void 0}),[x,R,e,_,r,g]);return n().createElement(s.Provider,{value:A},n().createElement(d,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:l,storageKey:u,themes:g,defaultTheme:m,attribute:b,value:w,children:y,attrs:P,nonce:v}),y)},d=(0,i.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:s,defaultTheme:l,value:c,attrs:u,nonce:d})=>{let h="system"===l,p="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=s?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,i=!0)=>{let n=c?c[e]:e,a=t?e+"|| ''":`'${n}'`,l="";return s&&i&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===r?l+=t||n?`c.add(${a})`:"null":n&&(l+=`d[s](n,${a})`),l},m=e?`!function(){${p}${g(e)}}()`:i?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${g(c?"x[e]":"e",!0)}}${h?"":"else{"+g(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${g(c?"x[e]":"e",!0)}}else{${g(l,!1,!1)};}${f}}catch(t){}}();`;return n().createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:m}})},()=>!0),h=(e,t)=>{},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},88928:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return o}});let i=r(71870),n=r(19847);function o(e,t){return(0,n.normalizePathTrailingSlash)((0,i.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41314:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return i}}),r(19847);let i=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13664:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"callServer",{enumerable:!0,get:function(){return n}});let i=r(2583);async function n(e,t){let r=(0,i.getServerActionDispatcher)();if(!r)throw Error("Invariant: missing action dispatcher.");return new Promise((i,n)=>{r({actionId:e,actionArgs:t,resolve:i,reject:n})})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23371:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AppRouterAnnouncer",{enumerable:!0,get:function(){return a}});let i=r(3729),n=r(81202),o="next-route-announcer";function a(e){let{tree:t}=e,[r,a]=(0,i.useState)(null);(0,i.useEffect)(()=>(a(function(){var e;let t=document.getElementsByName(o)[0];if(null==t?void 0:null==(e=t.shadowRoot)?void 0:e.childNodes[0])return t.shadowRoot.childNodes[0];{let e=document.createElement(o);e.style.cssText="position:absolute";let t=document.createElement("div");return t.ariaLive="assertive",t.id="__next-route-announcer__",t.role="alert",t.style.cssText="position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal",e.attachShadow({mode:"open"}).appendChild(t),document.body.appendChild(e),t}}()),()=>{let e=document.getElementsByTagName(o)[0];(null==e?void 0:e.isConnected)&&document.body.removeChild(e)}),[]);let[s,l]=(0,i.useState)(""),c=(0,i.useRef)();return(0,i.useEffect)(()=>{let e="";if(document.title)e=document.title;else{let t=document.querySelector("h1");t&&(e=t.innerText||t.textContent||"")}void 0!==c.current&&c.current!==e&&l(e),c.current=e},[t]),r?(0,n.createPortal)(s,r):null}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},15048:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RSC_HEADER:function(){return r},ACTION:function(){return i},NEXT_ROUTER_STATE_TREE:function(){return n},NEXT_ROUTER_PREFETCH_HEADER:function(){return o},NEXT_URL:function(){return a},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_VARY_HEADER:function(){return l},FLIGHT_PARAMETERS:function(){return c},NEXT_RSC_UNION_QUERY:function(){return u},NEXT_DID_POSTPONE_HEADER:function(){return d}});let r="RSC",i="Next-Action",n="Next-Router-State-Tree",o="Next-Router-Prefetch",a="Next-Url",s="text/x-component",l=r+", "+n+", "+o+", "+a,c=[[r],[n],[o]],u="_rsc",d="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2583:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getServerActionDispatcher:function(){return E},urlToUrlWithoutFlightMarker:function(){return S},createEmptyCacheNode:function(){return A},default:function(){return j}});let i=r(17824),n=r(95344),o=i._(r(3729)),a=r(46860),s=r(8085),l=r(47475),c=r(78486),u=r(14954),d=r(26840),h=r(87995),p=r(56338),f=r(88928),g=r(23371),m=r(87046),b=r(7550),w=r(63664),y=r(15048),v=r(22874),x=r(96411),C=null,_=null;function E(){return _}let P={};function S(e){let t=new URL(e,location.origin);return t.searchParams.delete(y.NEXT_RSC_UNION_QUERY),t}function R(e){return e.origin!==window.location.origin}function O(e){let{appRouterState:t,sync:r}=e;return(0,o.useInsertionEffect)(()=>{let{tree:e,pushRef:i,canonicalUrl:n}=t,o={...i.preserveCustomHistoryState?window.history.state:{},__NA:!0,__PRIVATE_NEXTJS_INTERNALS_TREE:e};i.pendingPush&&(0,l.createHrefFromUrl)(new URL(window.location.href))!==n?(i.pendingPush=!1,window.history.pushState(o,"",n)):window.history.replaceState(o,"",n),r(t)},[t,r]),null}function A(){return{lazyData:null,rsc:null,prefetchRsc:null,parallelRoutes:new Map}}function T(e){null==e&&(e={});let t=window.history.state,r=null==t?void 0:t.__NA;r&&(e.__NA=r);let i=null==t?void 0:t.__PRIVATE_NEXTJS_INTERNALS_TREE;return i&&(e.__PRIVATE_NEXTJS_INTERNALS_TREE=i),e}function k(e){let{headCacheNode:t}=e,r=null!==t?t.head:null,i=null!==t?t.prefetchHead:null,n=null!==i?i:r;return(0,o.useDeferredValue)(r,n)}function I(e){let t,{buildId:r,initialHead:i,initialTree:l,initialCanonicalUrl:d,initialSeedData:y,assetPrefix:E,missingSlots:S}=e,A=(0,o.useMemo)(()=>(0,h.createInitialRouterState)({buildId:r,initialSeedData:y,initialCanonicalUrl:d,initialTree:l,initialParallelRoutes:C,isServer:!0,location:null,initialHead:i}),[r,y,d,l,i]),[I,j,$]=(0,u.useReducerWithReduxDevtools)(A);(0,o.useEffect)(()=>{C=null},[]);let{canonicalUrl:M}=(0,u.useUnwrapState)(I),{searchParams:N,pathname:L}=(0,o.useMemo)(()=>{let e=new URL(M,"http://n");return{searchParams:e.searchParams,pathname:(0,x.hasBasePath)(e.pathname)?(0,v.removeBasePath)(e.pathname):e.pathname}},[M]),D=(0,o.useCallback)((e,t,r)=>{(0,o.startTransition)(()=>{j({type:s.ACTION_SERVER_PATCH,flightData:t,previousTree:e,overrideCanonicalUrl:r})})},[j]),U=(0,o.useCallback)((e,t,r)=>{let i=new URL((0,f.addBasePath)(e),location.href);return j({type:s.ACTION_NAVIGATE,url:i,isExternalUrl:R(i),locationSearch:location.search,shouldScroll:null==r||r,navigateType:t})},[j]);_=(0,o.useCallback)(e=>{(0,o.startTransition)(()=>{j({...e,type:s.ACTION_SERVER_ACTION})})},[j]);let z=(0,o.useMemo)(()=>({back:()=>window.history.back(),forward:()=>window.history.forward(),prefetch:(e,t)=>{if((0,p.isBot)(window.navigator.userAgent))return;let r=new URL((0,f.addBasePath)(e),window.location.href);R(r)||(0,o.startTransition)(()=>{var e;j({type:s.ACTION_PREFETCH,url:r,kind:null!=(e=null==t?void 0:t.kind)?e:s.PrefetchKind.FULL})})},replace:(e,t)=>{void 0===t&&(t={}),(0,o.startTransition)(()=>{var r;U(e,"replace",null==(r=t.scroll)||r)})},push:(e,t)=>{void 0===t&&(t={}),(0,o.startTransition)(()=>{var r;U(e,"push",null==(r=t.scroll)||r)})},refresh:()=>{(0,o.startTransition)(()=>{j({type:s.ACTION_REFRESH,origin:window.location.origin})})},fastRefresh:()=>{throw Error("fastRefresh can only be used in development mode. Please use refresh instead.")}}),[j,U]);(0,o.useEffect)(()=>{window.next&&(window.next.router=z)},[z]),(0,o.useEffect)(()=>{function e(e){var t;e.persisted&&(null==(t=window.history.state)?void 0:t.__PRIVATE_NEXTJS_INTERNALS_TREE)&&j({type:s.ACTION_RESTORE,url:new URL(window.location.href),tree:window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE})}return window.addEventListener("pageshow",e),()=>{window.removeEventListener("pageshow",e)}},[j]);let{pushRef:B}=(0,u.useUnwrapState)(I);if(B.mpaNavigation){if(P.pendingMpaPath!==M){let e=window.location;B.pendingPush?e.assign(M):e.replace(M),P.pendingMpaPath=M}(0,o.use)((0,w.createInfinitePromise)())}(0,o.useEffect)(()=>{let e=window.history.pushState.bind(window.history),t=window.history.replaceState.bind(window.history),r=e=>{let t=window.location.href;(0,o.startTransition)(()=>{j({type:s.ACTION_RESTORE,url:new URL(null!=e?e:t,t),tree:window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE})})};window.history.pushState=function(t,i,n){return(null==t?void 0:t.__NA)||(null==t?void 0:t._N)||(t=T(t),n&&r(n)),e(t,i,n)},window.history.replaceState=function(e,i,n){return(null==e?void 0:e.__NA)||(null==e?void 0:e._N)||(e=T(e),n&&r(n)),t(e,i,n)};let i=e=>{let{state:t}=e;if(t){if(!t.__NA){window.location.reload();return}(0,o.startTransition)(()=>{j({type:s.ACTION_RESTORE,url:new URL(window.location.href),tree:t.__PRIVATE_NEXTJS_INTERNALS_TREE})})}};return window.addEventListener("popstate",i),()=>{window.history.pushState=e,window.history.replaceState=t,window.removeEventListener("popstate",i)}},[j]);let{cache:F,tree:W,nextUrl:H,focusAndScrollRef:Z}=(0,u.useUnwrapState)(I),V=(0,o.useMemo)(()=>(0,b.findHeadInCache)(F,W[1]),[F,W]);if(null!==V){let[e,r]=V;t=(0,n.jsx)(k,{headCacheNode:e},r)}else t=null;let G=(0,n.jsxs)(m.RedirectBoundary,{children:[t,F.rsc,(0,n.jsx)(g.AppRouterAnnouncer,{tree:W})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{appRouterState:(0,u.useUnwrapState)(I),sync:$}),(0,n.jsx)(c.PathnameContext.Provider,{value:L,children:(0,n.jsx)(c.SearchParamsContext.Provider,{value:N,children:(0,n.jsx)(a.GlobalLayoutRouterContext.Provider,{value:{buildId:r,changeByServerResponse:D,tree:W,focusAndScrollRef:Z,nextUrl:H},children:(0,n.jsx)(a.AppRouterContext.Provider,{value:z,children:(0,n.jsx)(a.LayoutRouterContext.Provider,{value:{childNodes:F.parallelRoutes,tree:W,url:M},children:G})})})})})]})}function j(e){let{globalErrorComponent:t,...r}=e;return(0,n.jsx)(d.ErrorBoundary,{errorComponent:t,children:(0,n.jsx)(I,{...r})})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},64586:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return o}});let i=r(63689),n=r(94749);function o(e){let t=n.staticGenerationAsyncStorage.getStore();if((null==t||!t.forceStatic)&&(null==t?void 0:t.isStaticGeneration))throw new i.BailoutToCSRError(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},18446:(e,t,r)=>{"use strict";function i(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return i}}),r(39694),r(3729),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26840:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ErrorBoundaryHandler:function(){return u},GlobalError:function(){return d},default:function(){return h},ErrorBoundary:function(){return p}});let i=r(39694),n=r(95344),o=i._(r(3729)),a=r(14767),s=r(47796),l={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{fontSize:"14px",fontWeight:400,lineHeight:"28px",margin:"0 8px"}};function c(e){let{error:t}=e;if("function"==typeof fetch.__nextGetStaticStore){var r;let e=null==(r=fetch.__nextGetStaticStore())?void 0:r.getStore();if((null==e?void 0:e.isRevalidate)||(null==e?void 0:e.isStaticGeneration))throw console.error(t),t}return null}class u extends o.default.Component{static getDerivedStateFromError(e){if((0,s.isNextRouterError)(e))throw e;return{error:e}}static getDerivedStateFromProps(e,t){return e.pathname!==t.previousPathname&&t.error?{error:null,previousPathname:e.pathname}:{error:t.error,previousPathname:e.pathname}}render(){return this.state.error?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{error:this.state.error}),this.props.errorStyles,this.props.errorScripts,(0,n.jsx)(this.props.errorComponent,{error:this.state.error,reset:this.reset})]}):this.props.children}constructor(e){super(e),this.reset=()=>{this.setState({error:null})},this.state={error:null,previousPathname:this.props.pathname}}}function d(e){let{error:t}=e,r=null==t?void 0:t.digest;return(0,n.jsxs)("html",{id:"__next_error__",children:[(0,n.jsx)("head",{}),(0,n.jsxs)("body",{children:[(0,n.jsx)(c,{error:t}),(0,n.jsx)("div",{style:l.error,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{style:l.text,children:"Application error: a "+(r?"server":"client")+"-side exception has occurred (see the "+(r?"server logs":"browser console")+" for more information)."}),r?(0,n.jsx)("p",{style:l.text,children:"Digest: "+r}):null]})})]})]})}let h=d;function p(e){let{errorComponent:t,errorStyles:r,errorScripts:i,children:o}=e,s=(0,a.usePathname)();return t?(0,n.jsx)(u,{pathname:s,errorComponent:t,errorStyles:r,errorScripts:i,children:o}):(0,n.jsx)(n.Fragment,{children:o})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3082:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return i},isDynamicServerError:function(){return n}});let r="DYNAMIC_SERVER_USAGE";class i extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63664:(e,t)=>{"use strict";let r;function i(){return r||(r=new Promise(()=>{})),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createInfinitePromise",{enumerable:!0,get:function(){return i}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},47796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return o}});let i=r(70226),n=r(72792);function o(e){return e&&e.digest&&((0,n.isRedirectError)(e)||(0,i.isNotFoundError)(e))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38771:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}}),r(39694);let i=r(17824),n=r(95344),o=i._(r(3729));r(81202);let a=r(46860),s=r(47013),l=r(63664),c=r(26840),u=r(24287),d=r(51586),h=r(87046),p=r(13225),f=r(13717),g=r(75325),m=["bottom","height","left","right","top","width","x","y"];function b(e,t){let r=e.getBoundingClientRect();return r.top>=0&&r.top<=t}class w extends o.default.Component{componentDidMount(){this.handlePotentialScroll()}componentDidUpdate(){this.props.focusAndScrollRef.apply&&this.handlePotentialScroll()}render(){return this.props.children}constructor(...e){super(...e),this.handlePotentialScroll=()=>{let{focusAndScrollRef:e,segmentPath:t}=this.props;if(e.apply){if(0!==e.segmentPaths.length&&!e.segmentPaths.some(e=>t.every((t,r)=>(0,u.matchSegment)(t,e[r]))))return;let r=null,i=e.hashFragment;if(i&&(r=function(e){var t;return"top"===e?document.body:null!=(t=document.getElementById(e))?t:document.getElementsByName(e)[0]}(i)),!r&&(r=null),!(r instanceof Element))return;for(;!(r instanceof HTMLElement)||function(e){if(["sticky","fixed"].includes(getComputedStyle(e).position))return!0;let t=e.getBoundingClientRect();return m.every(e=>0===t[e])}(r);){if(null===r.nextElementSibling)return;r=r.nextElementSibling}e.apply=!1,e.hashFragment=null,e.segmentPaths=[],(0,d.handleSmoothScroll)(()=>{if(i){r.scrollIntoView();return}let e=document.documentElement,t=e.clientHeight;!b(r,t)&&(e.scrollTop=0,b(r,t)||r.scrollIntoView())},{dontForceLayout:!0,onlyHashChange:e.onlyHashChange}),e.onlyHashChange=!1,r.focus()}}}}function y(e){let{segmentPath:t,children:r}=e,i=(0,o.useContext)(a.GlobalLayoutRouterContext);if(!i)throw Error("invariant global layout router not mounted");return(0,n.jsx)(w,{segmentPath:t,focusAndScrollRef:i.focusAndScrollRef,children:r})}function v(e){let{parallelRouterKey:t,url:r,childNodes:i,segmentPath:c,tree:d,cacheKey:h}=e,p=(0,o.useContext)(a.GlobalLayoutRouterContext);if(!p)throw Error("invariant global layout router not mounted");let{buildId:f,changeByServerResponse:g,tree:m}=p,b=i.get(h);if(void 0===b){let e={lazyData:null,rsc:null,prefetchRsc:null,head:null,parallelRoutes:new Map};b=e,i.set(h,e)}let w=null!==b.prefetchRsc?b.prefetchRsc:b.rsc,y=(0,o.useDeferredValue)(b.rsc,w),v="object"==typeof y&&null!==y&&"function"==typeof y.then?(0,o.use)(y):y;if(!v){let e=b.lazyData;if(null===e){let t=function e(t,r){if(t){let[i,n]=t,o=2===t.length;if((0,u.matchSegment)(r[0],i)&&r[1].hasOwnProperty(n)){if(o){let t=e(void 0,r[1][n]);return[r[0],{...r[1],[n]:[t[0],t[1],t[2],"refetch"]}]}return[r[0],{...r[1],[n]:e(t.slice(2),r[1][n])}]}}return r}(["",...c],m);b.lazyData=e=(0,s.fetchServerResponse)(new URL(r,location.origin),t,p.nextUrl,f)}let[t,i]=(0,o.use)(e);b.lazyData=null,setTimeout(()=>{(0,o.startTransition)(()=>{g(m,t,i)})}),(0,o.use)((0,l.createInfinitePromise)())}return(0,n.jsx)(a.LayoutRouterContext.Provider,{value:{tree:d[1][t],childNodes:b.parallelRoutes,url:r},children:v})}function x(e){let{children:t,loading:r,loadingStyles:i,loadingScripts:a,hasLoading:s}=e;return s?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsxs)(n.Fragment,{children:[i,a,r]}),children:t}):(0,n.jsx)(n.Fragment,{children:t})}function C(e){let{parallelRouterKey:t,segmentPath:r,error:i,errorStyles:s,errorScripts:l,templateStyles:u,templateScripts:d,loading:m,loadingStyles:b,loadingScripts:w,hasLoading:C,template:_,notFound:E,notFoundStyles:P,styles:S}=e,R=(0,o.useContext)(a.LayoutRouterContext);if(!R)throw Error("invariant expected layout router to be mounted");let{childNodes:O,tree:A,url:T}=R,k=O.get(t);k||(k=new Map,O.set(t,k));let I=A[1][t][0],j=(0,f.getSegmentValue)(I),$=[I];return(0,n.jsxs)(n.Fragment,{children:[S,$.map(e=>{let o=(0,f.getSegmentValue)(e),S=(0,g.createRouterCacheKey)(e);return(0,n.jsxs)(a.TemplateContext.Provider,{value:(0,n.jsx)(y,{segmentPath:r,children:(0,n.jsx)(c.ErrorBoundary,{errorComponent:i,errorStyles:s,errorScripts:l,children:(0,n.jsx)(x,{hasLoading:C,loading:m,loadingStyles:b,loadingScripts:w,children:(0,n.jsx)(p.NotFoundBoundary,{notFound:E,notFoundStyles:P,children:(0,n.jsx)(h.RedirectBoundary,{children:(0,n.jsx)(v,{parallelRouterKey:t,url:T,tree:A,childNodes:k,segmentPath:r,cacheKey:S,isActive:j===o})})})})})}),children:[u,d,_]},(0,g.createRouterCacheKey)(e,!0))})]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},24287:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchSegment:function(){return n},canSegmentBeOverridden:function(){return o}});let i=r(54269),n=(e,t)=>"string"==typeof e?"string"==typeof t&&e===t:"string"!=typeof t&&e[0]===t[0]&&e[1]===t[1],o=(e,t)=>{var r;return!Array.isArray(e)&&!!Array.isArray(t)&&(null==(r=(0,i.getSegmentParam)(e))?void 0:r.param)===t[0]};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return f},useSearchParams:function(){return g},usePathname:function(){return m},ServerInsertedHTMLContext:function(){return c.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return c.useServerInsertedHTML},useRouter:function(){return b},useParams:function(){return w},useSelectedLayoutSegments:function(){return y},useSelectedLayoutSegment:function(){return v},redirect:function(){return u.redirect},permanentRedirect:function(){return u.permanentRedirect},RedirectType:function(){return u.RedirectType},notFound:function(){return d.notFound}});let i=r(3729),n=r(46860),o=r(78486),a=r(18446),s=r(13717),l=r(19457),c=r(69505),u=r(72792),d=r(70226),h=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class f{[Symbol.iterator](){return this[h][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[h]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function g(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,i.useContext)(o.SearchParamsContext),t=(0,i.useMemo)(()=>e?new f(e):null,[e]);{let{bailoutToClientRendering:e}=r(64586);e("useSearchParams()")}return t}function m(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,i.useContext)(o.PathnameContext)}function b(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,i.useContext)(n.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function w(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,i.useContext)(n.GlobalLayoutRouterContext),t=(0,i.useContext)(o.PathParamsContext);return(0,i.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let i of(void 0===r&&(r={}),Object.values(t[1]))){let t=i[0],n=Array.isArray(t),o=n?t[1]:t;!o||o.startsWith(l.PAGE_SEGMENT_KEY)||(n&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):n&&(r[t[0]]=t[1]),r=e(i,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function y(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,i.useContext)(n.LayoutRouterContext);return function e(t,r,i,n){let o;if(void 0===i&&(i=!0),void 0===n&&(n=[]),i)o=t[1][r];else{var a;let e=t[1];o=null!=(a=e.children)?a:Object.values(e)[0]}if(!o)return n;let c=o[0],u=(0,s.getSegmentValue)(c);return!u||u.startsWith(l.PAGE_SEGMENT_KEY)?n:(n.push(u),e(o,r,!1,n))}(t,e)}function v(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=y(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13225:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NotFoundBoundary",{enumerable:!0,get:function(){return u}});let i=r(17824),n=r(95344),o=i._(r(3729)),a=r(14767),s=r(70226);r(70837);let l=r(46860);class c extends o.default.Component{componentDidCatch(){}static getDerivedStateFromError(e){if((0,s.isNotFoundError)(e))return{notFoundTriggered:!0};throw e}static getDerivedStateFromProps(e,t){return e.pathname!==t.previousPathname&&t.notFoundTriggered?{notFoundTriggered:!1,previousPathname:e.pathname}:{notFoundTriggered:t.notFoundTriggered,previousPathname:e.pathname}}render(){return this.state.notFoundTriggered?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"robots",content:"noindex"}),!1,this.props.notFoundStyles,this.props.notFound]}):this.props.children}constructor(e){super(e),this.state={notFoundTriggered:!!e.asNotFound,previousPathname:e.pathname}}}function u(e){let{notFound:t,notFoundStyles:r,asNotFound:i,children:s}=e,u=(0,a.usePathname)(),d=(0,o.useContext)(l.MissingSlotContext);return t?(0,n.jsx)(c,{pathname:u,notFound:t,notFoundStyles:r,asNotFound:i,missingSlots:d,children:s}):(0,n.jsx)(n.Fragment,{children:s})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70226:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return i},isNotFoundError:function(){return n}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92051:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PromiseQueue",{enumerable:!0,get:function(){return c}});let i=r(69996),n=r(67074);var o=n._("_maxConcurrency"),a=n._("_runningCount"),s=n._("_queue"),l=n._("_processNext");class c{enqueue(e){let t,r;let n=new Promise((e,i)=>{t=e,r=i}),o=async()=>{try{i._(this,a)[a]++;let r=await e();t(r)}catch(e){r(e)}finally{i._(this,a)[a]--,i._(this,l)[l]()}};return i._(this,s)[s].push({promiseFn:n,task:o}),i._(this,l)[l](),n}bump(e){let t=i._(this,s)[s].findIndex(t=>t.promiseFn===e);if(t>-1){let e=i._(this,s)[s].splice(t,1)[0];i._(this,s)[s].unshift(e),i._(this,l)[l](!0)}}constructor(e=5){Object.defineProperty(this,l,{value:u}),Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,s,{writable:!0,value:void 0}),i._(this,o)[o]=e,i._(this,a)[a]=0,i._(this,s)[s]=[]}}function u(e){if(void 0===e&&(e=!1),(i._(this,a)[a]<i._(this,o)[o]||e)&&i._(this,s)[s].length>0){var t;null==(t=i._(this,s)[s].shift())||t.task()}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87046:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectErrorBoundary:function(){return c},RedirectBoundary:function(){return u}});let i=r(17824),n=r(95344),o=i._(r(3729)),a=r(14767),s=r(72792);function l(e){let{redirect:t,reset:r,redirectType:i}=e,n=(0,a.useRouter)();return(0,o.useEffect)(()=>{o.default.startTransition(()=>{i===s.RedirectType.push?n.push(t,{}):n.replace(t,{}),r()})},[t,i,r,n]),null}class c extends o.default.Component{static getDerivedStateFromError(e){if((0,s.isRedirectError)(e))return{redirect:(0,s.getURLFromRedirectError)(e),redirectType:(0,s.getRedirectTypeFromError)(e)};throw e}render(){let{redirect:e,redirectType:t}=this.state;return null!==e&&null!==t?(0,n.jsx)(l,{redirect:e,redirectType:t,reset:()=>this.setState({redirect:null})}):this.props.children}constructor(e){super(e),this.state={redirect:null,redirectType:null}}}function u(e){let{children:t}=e,r=(0,a.useRouter)();return(0,n.jsx)(c,{router:r,children:t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},17761:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72792:(e,t,r)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return l},redirect:function(){return c},permanentRedirect:function(){return u},isRedirectError:function(){return d},getURLFromRedirectError:function(){return h},getRedirectTypeFromError:function(){return p},getRedirectStatusCodeFromError:function(){return f}});let n=r(55403),o=r(47849),a=r(17761),s="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let i=Error(s);i.digest=s+";"+t+";"+e+";"+r+";";let o=n.requestAsyncStorage.getStore();return o&&(i.mutableCookies=o.mutableCookies),i}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function u(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,i,n]=e.digest.split(";",4),o=Number(n);return t===s&&("replace"===r||"push"===r)&&"string"==typeof i&&!isNaN(o)&&o in a.RedirectStatusCode}function h(e){return d(e)?e.digest.split(";",3)[2]:null}function p(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function f(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9295:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=r(17824),n=r(95344),o=i._(r(3729)),a=r(46860);function s(){let e=(0,o.useContext)(a.TemplateContext);return(0,n.jsx)(n.Fragment,{children:e})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69543:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"applyFlightData",{enumerable:!0,get:function(){return o}});let i=r(67234),n=r(56408);function o(e,t,r,o){void 0===o&&(o=!1);let[a,s,l]=r.slice(-3);if(null===s)return!1;if(3===r.length){let r=s[2];t.rsc=r,t.prefetchRsc=null,(0,i.fillLazyItemsTillLeafWithHead)(t,e,a,s,l,o)}else t.rsc=e.rsc,t.prefetchRsc=e.prefetchRsc,t.parallelRoutes=new Map(e.parallelRoutes),(0,n.fillCacheWithNewSubTreeData)(t,e,r,o);return!0}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71697:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{applyRouterStatePatchToFullTree:function(){return s},applyRouterStatePatchToTreeSkipDefault:function(){return l}});let i=r(19457),n=r(24287);function o(e,t,r){void 0===r&&(r=!1);let[a,s]=e,[l,c]=t;if(!r&&l===i.DEFAULT_SEGMENT_KEY&&a!==i.DEFAULT_SEGMENT_KEY)return e;if((0,n.matchSegment)(a,l)){let t={};for(let e in s)void 0!==c[e]?t[e]=o(s[e],c[e],r):t[e]=s[e];for(let e in c)t[e]||(t[e]=c[e]);let i=[a,t];return e[2]&&(i[2]=e[2]),e[3]&&(i[3]=e[3]),e[4]&&(i[4]=e[4]),i}return t}function a(e,t,r,i){let s;void 0===i&&(i=!1);let[l,c,,,u]=t;if(1===e.length)return o(t,r,i);let[d,h]=e;if(!(0,n.matchSegment)(d,l))return null;if(2===e.length)s=o(c[h],r,i);else if(null===(s=a(e.slice(2),c[h],r,i)))return null;let p=[e[0],{...c,[h]:s}];return u&&(p[4]=!0),p}function s(e,t,r){return a(e,t,r,!0)}function l(e,t,r){return a(e,t,r,!1)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95684:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{extractPathFromFlightRouterState:function(){return c},computeChangedPath:function(){return u}});let i=r(45767),n=r(19457),o=r(24287),a=e=>"/"===e[0]?e.slice(1):e,s=e=>"string"==typeof e?e:e[1];function l(e){return e.reduce((e,t)=>""===(t=a(t))||(0,n.isGroupSegment)(t)?e:e+"/"+t,"")||"/"}function c(e){var t;let r=Array.isArray(e[0])?e[0][1]:e[0];if(r===n.DEFAULT_SEGMENT_KEY||i.INTERCEPTION_ROUTE_MARKERS.some(e=>r.startsWith(e)))return;if(r.startsWith(n.PAGE_SEGMENT_KEY))return"";let o=[r],a=null!=(t=e[1])?t:{},s=a.children?c(a.children):void 0;if(void 0!==s)o.push(s);else for(let[e,t]of Object.entries(a)){if("children"===e)continue;let r=c(t);void 0!==r&&o.push(r)}return l(o)}function u(e,t){let r=function e(t,r){let[n,a]=t,[l,u]=r,d=s(n),h=s(l);if(i.INTERCEPTION_ROUTE_MARKERS.some(e=>d.startsWith(e)||h.startsWith(e)))return"";if(!(0,o.matchSegment)(n,l)){var p;return null!=(p=c(r))?p:""}for(let t in a)if(u[t]){let r=e(a[t],u[t]);if(null!==r)return s(l)+"/"+r}return null}(e,t);return null==r||"/"===r?r:l(r.split("/"))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},47475:(e,t)=>{"use strict";function r(e,t){return void 0===t&&(t=!0),e.pathname+e.search+(t?e.hash:"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createHrefFromUrl",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87995:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createInitialRouterState",{enumerable:!0,get:function(){return a}});let i=r(47475),n=r(67234),o=r(95684);function a(e){var t;let{buildId:r,initialTree:a,initialSeedData:s,initialCanonicalUrl:l,initialParallelRoutes:c,isServer:u,location:d,initialHead:h}=e,p={lazyData:null,rsc:s[2],prefetchRsc:null,parallelRoutes:u?new Map:c};return(null===c||0===c.size)&&(0,n.fillLazyItemsTillLeafWithHead)(p,void 0,a,s,h),{buildId:r,tree:a,cache:p,prefetchCache:new Map,pushRef:{pendingPush:!1,mpaNavigation:!1,preserveCustomHistoryState:!0},focusAndScrollRef:{apply:!1,onlyHashChange:!1,hashFragment:null,segmentPaths:[]},canonicalUrl:d?(0,i.createHrefFromUrl)(d):l,nextUrl:null!=(t=(0,o.extractPathFromFlightRouterState)(a)||(null==d?void 0:d.pathname))?t:null}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},75325:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createRouterCacheKey",{enumerable:!0,get:function(){return n}});let i=r(19457);function n(e,t){return(void 0===t&&(t=!1),Array.isArray(e))?(e[0]+"|"+e[1]+"|"+e[2]).toLowerCase():t&&e.startsWith(i.PAGE_SEGMENT_KEY)?i.PAGE_SEGMENT_KEY:e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},47013:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fetchServerResponse",{enumerable:!0,get:function(){return u}});let i=r(15048),n=r(2583),o=r(13664),a=r(8085),s=r(65344),{createFromFetch:l}=r(82228);function c(e){return[(0,n.urlToUrlWithoutFlightMarker)(e).toString(),void 0]}async function u(e,t,r,u,d){let h={[i.RSC_HEADER]:"1",[i.NEXT_ROUTER_STATE_TREE]:encodeURIComponent(JSON.stringify(t))};d===a.PrefetchKind.AUTO&&(h[i.NEXT_ROUTER_PREFETCH_HEADER]="1"),r&&(h[i.NEXT_URL]=r);let p=(0,s.hexHash)([h[i.NEXT_ROUTER_PREFETCH_HEADER]||"0",h[i.NEXT_ROUTER_STATE_TREE],h[i.NEXT_URL]].join(","));try{let t=new URL(e);t.searchParams.set(i.NEXT_RSC_UNION_QUERY,p);let r=await fetch(t,{credentials:"same-origin",headers:h}),a=(0,n.urlToUrlWithoutFlightMarker)(r.url),s=r.redirected?a:void 0,d=r.headers.get("content-type")||"",f=!!r.headers.get(i.NEXT_DID_POSTPONE_HEADER);if(d!==i.RSC_CONTENT_TYPE_HEADER||!r.ok)return e.hash&&(a.hash=e.hash),c(a.toString());let[g,m]=await l(Promise.resolve(r),{callServer:o.callServer});if(u!==g)return c(r.url);return[m,s,f]}catch(t){return console.error("Failed to fetch RSC payload for "+e+". Falling back to browser navigation.",t),[e.toString(),void 0]}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77676:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fillCacheWithDataProperty",{enumerable:!0,get:function(){return function e(t,r,n,o){let a=n.length<=2,[s,l]=n,c=(0,i.createRouterCacheKey)(l),u=r.parallelRoutes.get(s),d=t.parallelRoutes.get(s);d&&d!==u||(d=new Map(u),t.parallelRoutes.set(s,d));let h=null==u?void 0:u.get(c),p=d.get(c);if(a){p&&p.lazyData&&p!==h||d.set(c,{lazyData:o(),rsc:null,prefetchRsc:null,parallelRoutes:new Map});return}if(!p||!h){p||d.set(c,{lazyData:o(),rsc:null,prefetchRsc:null,parallelRoutes:new Map});return}return p===h&&(p={lazyData:p.lazyData,rsc:p.rsc,prefetchRsc:p.prefetchRsc,parallelRoutes:new Map(p.parallelRoutes)},d.set(c,p)),e(p,h,n.slice(2),o)}}});let i=r(75325);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},56408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fillCacheWithNewSubTreeData",{enumerable:!0,get:function(){return function e(t,r,a,s){let l=a.length<=5,[c,u]=a,d=(0,o.createRouterCacheKey)(u),h=r.parallelRoutes.get(c);if(!h)return;let p=t.parallelRoutes.get(c);p&&p!==h||(p=new Map(h),t.parallelRoutes.set(c,p));let f=h.get(d),g=p.get(d);if(l){if(!g||!g.lazyData||g===f){let e=a[3];g={lazyData:null,rsc:e[2],prefetchRsc:null,parallelRoutes:f?new Map(f.parallelRoutes):new Map},f&&(0,i.invalidateCacheByRouterState)(g,f,a[2]),(0,n.fillLazyItemsTillLeafWithHead)(g,f,a[2],e,a[4],s),p.set(d,g)}return}g&&f&&(g===f&&(g={lazyData:g.lazyData,rsc:g.rsc,prefetchRsc:g.prefetchRsc,parallelRoutes:new Map(g.parallelRoutes)},p.set(d,g)),e(g,f,a.slice(2),s))}}});let i=r(20250),n=r(67234),o=r(75325);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67234:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fillLazyItemsTillLeafWithHead",{enumerable:!0,get:function(){return function e(t,r,n,o,a,s){if(0===Object.keys(n[1]).length){t.head=a;return}for(let l in n[1]){let c;let u=n[1][l],d=u[0],h=(0,i.createRouterCacheKey)(d),p=null!==o&&void 0!==o[1][l]?o[1][l]:null;if(r){let i=r.parallelRoutes.get(l);if(i){let r,n=new Map(i),o=n.get(h);r=null!==p?{lazyData:null,rsc:p[2],prefetchRsc:null,parallelRoutes:new Map(null==o?void 0:o.parallelRoutes)}:s&&o?{lazyData:o.lazyData,rsc:o.rsc,prefetchRsc:o.prefetchRsc,parallelRoutes:new Map(o.parallelRoutes)}:{lazyData:null,rsc:null,prefetchRsc:null,parallelRoutes:new Map(null==o?void 0:o.parallelRoutes)},n.set(h,r),e(r,o,u,p||null,a,s),t.parallelRoutes.set(l,n);continue}}c=null!==p?{lazyData:null,rsc:p[2],prefetchRsc:null,parallelRoutes:new Map}:{lazyData:null,rsc:null,prefetchRsc:null,parallelRoutes:new Map};let f=t.parallelRoutes.get(l);f?f.set(h,c):t.parallelRoutes.set(l,new Map([[h,c]])),e(c,void 0,u,p,a,s)}}}});let i=r(75325);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80696:(e,t)=>{"use strict";var r;function i(e){let{kind:t,prefetchTime:r,lastUsedTime:i}=e;return Date.now()<(null!=i?i:r)+3e4?i?"reusable":"fresh":"auto"===t&&Date.now()<r+3e5?"stale":"full"===t&&Date.now()<r+3e5?"reusable":"expired"}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchCacheEntryStatus:function(){return r},getPrefetchEntryCacheStatus:function(){return i}}),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},44080:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleMutable",{enumerable:!0,get:function(){return o}});let i=r(95684);function n(e){return void 0!==e}function o(e,t){var r,o,a;let s=null==(o=t.shouldScroll)||o,l=e.nextUrl;if(n(t.patchedTree)){let r=(0,i.computeChangedPath)(e.tree,t.patchedTree);r?l=r:l||(l=e.canonicalUrl)}return{buildId:e.buildId,canonicalUrl:n(t.canonicalUrl)?t.canonicalUrl===e.canonicalUrl?e.canonicalUrl:t.canonicalUrl:e.canonicalUrl,pushRef:{pendingPush:n(t.pendingPush)?t.pendingPush:e.pushRef.pendingPush,mpaNavigation:n(t.mpaNavigation)?t.mpaNavigation:e.pushRef.mpaNavigation,preserveCustomHistoryState:n(t.preserveCustomHistoryState)?t.preserveCustomHistoryState:e.pushRef.preserveCustomHistoryState},focusAndScrollRef:{apply:!!s&&(!!n(null==t?void 0:t.scrollableSegments)||e.focusAndScrollRef.apply),onlyHashChange:!!t.hashFragment&&e.canonicalUrl.split("#",1)[0]===(null==(r=t.canonicalUrl)?void 0:r.split("#",1)[0]),hashFragment:s?t.hashFragment&&""!==t.hashFragment?decodeURIComponent(t.hashFragment.slice(1)):e.focusAndScrollRef.hashFragment:null,segmentPaths:s?null!=(a=null==t?void 0:t.scrollableSegments)?a:e.focusAndScrollRef.segmentPaths:[]},cache:t.cache?t.cache:e.cache,prefetchCache:t.prefetchCache?t.prefetchCache:e.prefetchCache,tree:n(t.patchedTree)?t.patchedTree:e.tree,nextUrl:l}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71418:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleSegmentMismatch",{enumerable:!0,get:function(){return n}});let i=r(69643);function n(e,t,r){return(0,i.handleExternalUrl)(e,{},e.canonicalUrl,!0)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},32293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"invalidateCacheBelowFlightSegmentPath",{enumerable:!0,get:function(){return function e(t,r,n){let o=n.length<=2,[a,s]=n,l=(0,i.createRouterCacheKey)(s),c=r.parallelRoutes.get(a);if(!c)return;let u=t.parallelRoutes.get(a);if(u&&u!==c||(u=new Map(c),t.parallelRoutes.set(a,u)),o){u.delete(l);return}let d=c.get(l),h=u.get(l);h&&d&&(h===d&&(h={lazyData:h.lazyData,rsc:h.rsc,prefetchRsc:h.prefetchRsc,parallelRoutes:new Map(h.parallelRoutes)},u.set(l,h)),e(h,d,n.slice(2)))}}});let i=r(75325);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20250:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"invalidateCacheByRouterState",{enumerable:!0,get:function(){return n}});let i=r(75325);function n(e,t,r){for(let n in r[1]){let o=r[1][n][0],a=(0,i.createRouterCacheKey)(o),s=t.parallelRoutes.get(n);if(s){let t=new Map(s);t.delete(a),e.parallelRoutes.set(n,t)}}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53694:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNavigatingToNewRootLayout",{enumerable:!0,get:function(){return function e(t,r){let i=t[0],n=r[0];if(Array.isArray(i)&&Array.isArray(n)){if(i[0]!==n[0]||i[2]!==n[2])return!0}else if(i!==n)return!0;if(t[4])return!r[4];if(r[4])return!0;let o=Object.values(t[1])[0],a=Object.values(r[1])[0];return!o||!a||e(o,a)}}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{updateCacheNodeOnNavigation:function(){return function e(t,r,s,c,u,d){let h=r[1],p=s[1],f=c[1],g=t.parallelRoutes,m=new Map(g),b={},w=null;for(let t in p){let r;let s=p[t],c=h[t],y=g.get(t),v=f[t],x=s[0],C=(0,o.createRouterCacheKey)(x),_=void 0!==c?c[0]:void 0,E=void 0!==y?y.get(C):void 0;if(null!==(r=x===i.PAGE_SEGMENT_KEY?a(s,void 0!==v?v:null,u,d):x===i.DEFAULT_SEGMENT_KEY?void 0!==c?{route:c,node:null,children:null}:a(s,void 0!==v?v:null,u,d):void 0!==_&&(0,n.matchSegment)(x,_)&&void 0!==E&&void 0!==c?null!=v?e(E,c,s,v,u,d):function(e){let t=l(e,null,null,!1);return{route:e,node:t,children:null}}(s):a(s,void 0!==v?v:null,u,d))){null===w&&(w=new Map),w.set(t,r);let e=r.node;if(null!==e){let r=new Map(y);r.set(C,e),m.set(t,r)}b[t]=r.route}else b[t]=s}if(null===w)return null;let y={lazyData:null,rsc:t.rsc,prefetchRsc:t.prefetchRsc,head:t.head,prefetchHead:t.prefetchHead,parallelRoutes:m};return{route:function(e,t){let r=[e[0],t];return 2 in e&&(r[2]=e[2]),3 in e&&(r[3]=e[3]),4 in e&&(r[4]=e[4]),r}(s,b),node:y,children:w}}},listenForDynamicRequest:function(){return s},abortTask:function(){return c},updateCacheNodeOnPopstateRestoration:function(){return function e(t,r){let i=r[1],n=t.parallelRoutes,a=new Map(n);for(let t in i){let r=i[t],s=r[0],l=(0,o.createRouterCacheKey)(s),c=n.get(t);if(void 0!==c){let i=c.get(l);if(void 0!==i){let n=e(i,r),o=new Map(c);o.set(l,n),a.set(t,o)}}}let s=t.rsc,l=h(s)&&"pending"===s.status;return{lazyData:null,rsc:s,head:t.head,prefetchHead:l?t.prefetchHead:null,prefetchRsc:l?t.prefetchRsc:null,parallelRoutes:a}}}});let i=r(19457),n=r(24287),o=r(75325);function a(e,t,r,i){let n=l(e,t,r,i);return{route:e,node:n,children:null}}function s(e,t){t.then(t=>{for(let r of t[0]){let t=r.slice(0,-3),i=r[r.length-3],a=r[r.length-2],s=r[r.length-1];"string"!=typeof t&&function(e,t,r,i,a){let s=e;for(let e=0;e<t.length;e+=2){let r=t[e],i=t[e+1],o=s.children;if(null!==o){let e=o.get(r);if(void 0!==e){let t=e.route[0];if((0,n.matchSegment)(i,t)){s=e;continue}}}return}(function e(t,r,i,a){let s=t.children,l=t.node;if(null===s){null!==l&&(function e(t,r,i,a,s){let l=r[1],c=i[1],d=a[1],p=t.parallelRoutes;for(let t in l){let r=l[t],i=c[t],a=d[t],h=p.get(t),f=r[0],g=(0,o.createRouterCacheKey)(f),m=void 0!==h?h.get(g):void 0;void 0!==m&&(void 0!==i&&(0,n.matchSegment)(f,i[0])&&null!=a?e(m,r,i,a,s):u(r,m,null))}let f=t.rsc,g=a[2];null===f?t.rsc=g:h(f)&&f.resolve(g);let m=t.head;h(m)&&m.resolve(s)}(l,t.route,r,i,a),t.node=null);return}let c=r[1],d=i[1];for(let t in r){let r=c[t],i=d[t],o=s.get(t);if(void 0!==o){let t=o.route[0];if((0,n.matchSegment)(r[0],t)&&null!=i)return e(o,r,i,a)}}})(s,r,i,a)}(e,t,i,a,s)}c(e,null)},t=>{c(e,t)})}function l(e,t,r,i){let n=e[1],a=null!==t?t[1]:null,s=new Map;for(let e in n){let t=n[e],c=null!==a?a[e]:null,u=t[0],d=(0,o.createRouterCacheKey)(u),h=l(t,void 0===c?null:c,r,i),p=new Map;p.set(d,h),s.set(e,p)}let c=0===s.size,u=null!==t?t[2]:null;return{lazyData:null,parallelRoutes:s,prefetchRsc:i||void 0===u?null:u,prefetchHead:!i&&c?r:null,rsc:p(),head:c?p():null}}function c(e,t){let r=e.node;if(null===r)return;let i=e.children;if(null===i)u(e.route,r,t);else for(let e of i.values())c(e,t);e.node=null}function u(e,t,r){let i=e[1],n=t.parallelRoutes;for(let e in i){let t=i[e],a=n.get(e);if(void 0===a)continue;let s=t[0],l=(0,o.createRouterCacheKey)(s),c=a.get(l);void 0!==c&&u(t,c,r)}let a=t.rsc;h(a)&&(null===r?a.resolve(null):a.reject(r));let s=t.head;h(s)&&s.resolve(null)}let d=Symbol();function h(e){return e&&e.tag===d}function p(){let e,t;let r=new Promise((r,i)=>{e=r,t=i});return r.status="pending",r.resolve=t=>{"pending"===r.status&&(r.status="fulfilled",r.value=t,e(t))},r.reject=e=>{"pending"===r.status&&(r.status="rejected",r.reason=e,t(e))},r.tag=d,r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94813:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createPrefetchCacheKey",{enumerable:!0,get:function(){return a}});let i=r(71870),n=r(86050),o=r(47475);function a(e,t){let r=(0,o.createHrefFromUrl)(e,!1);return t&&!(0,n.pathHasPrefix)(r,t)?(0,i.addPathPrefix)(r,""+t+"%"):r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52298:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fastRefreshReducer",{enumerable:!0,get:function(){return i}}),r(47013),r(47475),r(71697),r(53694),r(69643),r(44080),r(69543),r(2583),r(71418);let i=function(e,t){return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7550:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"findHeadInCache",{enumerable:!0,get:function(){return n}});let i=r(75325);function n(e,t){return function e(t,r,n){if(0===Object.keys(r).length)return[t,n];for(let o in r){let[a,s]=r[o],l=t.parallelRoutes.get(o);if(!l)continue;let c=(0,i.createRouterCacheKey)(a),u=l.get(c);if(!u)continue;let d=e(u,s,n+"/"+c);if(d)return d}return null}(e,t,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13717:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69643:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleExternalUrl:function(){return y},navigateReducer:function(){return x}});let i=r(47013),n=r(47475),o=r(32293),a=r(77676),s=r(71697),l=r(37528),c=r(53694),u=r(8085),d=r(44080),h=r(69543),p=r(80696),f=r(22574),g=r(7772),m=r(2583),b=r(19457),w=(r(13026),r(94813));function y(e,t,r,i){return t.mpaNavigation=!0,t.canonicalUrl=r,t.pendingPush=i,t.scrollableSegments=void 0,(0,d.handleMutable)(e,t)}function v(e){let t=[],[r,i]=e;if(0===Object.keys(i).length)return[[r]];for(let[e,n]of Object.entries(i))for(let i of v(n))""===r?t.push([e,...i]):t.push([r,e,...i]);return t}let x=function(e,t){let{url:r,isExternalUrl:x,navigateType:C,shouldScroll:_}=t,E={},{hash:P}=r,S=(0,n.createHrefFromUrl)(r),R="push"===C;if((0,f.prunePrefetchCache)(e.prefetchCache),E.preserveCustomHistoryState=!1,x)return y(e,E,r.toString(),R);let O=(0,w.createPrefetchCacheKey)(r,e.nextUrl),A=e.prefetchCache.get(O);if(!A){let t={data:(0,i.fetchServerResponse)(r,e.tree,e.nextUrl,e.buildId,void 0),kind:u.PrefetchKind.TEMPORARY,prefetchTime:Date.now(),treeAtTimeOfPrefetch:e.tree,lastUsedTime:null};e.prefetchCache.set(O,t),A=t}let T=(0,p.getPrefetchEntryCacheStatus)(A),{treeAtTimeOfPrefetch:k,data:I}=A;return g.prefetchQueue.bump(I),I.then(t=>{let[u,f,g]=t;if(A&&!A.lastUsedTime&&(A.lastUsedTime=Date.now()),"string"==typeof u)return y(e,E,u,R);let w=e.tree,x=e.cache,C=[];for(let t of u){let n=t.slice(0,-4),u=t.slice(-3)[0],d=["",...n],f=(0,s.applyRouterStatePatchToTreeSkipDefault)(d,w,u);if(null===f&&(f=(0,s.applyRouterStatePatchToTreeSkipDefault)(d,k,u)),null!==f){if((0,c.isNavigatingToNewRootLayout)(w,f))return y(e,E,S,R);let s=(0,m.createEmptyCacheNode)(),_=(0,h.applyFlightData)(x,s,t,(null==A?void 0:A.kind)==="auto"&&T===p.PrefetchCacheEntryStatus.reusable);for(let t of((!_&&T===p.PrefetchCacheEntryStatus.stale||g)&&(_=function(e,t,r,i,n){let o=!1;for(let s of(e.rsc=t.rsc,e.prefetchRsc=t.prefetchRsc,e.parallelRoutes=new Map(t.parallelRoutes),v(i).map(e=>[...r,...e])))(0,a.fillCacheWithDataProperty)(e,t,s,n),o=!0;return o}(s,x,n,u,()=>(0,i.fetchServerResponse)(r,w,e.nextUrl,e.buildId))),(0,l.shouldHardNavigate)(d,w)?(s.rsc=x.rsc,s.prefetchRsc=x.prefetchRsc,(0,o.invalidateCacheBelowFlightSegmentPath)(s,x,n),E.cache=s):_&&(E.cache=s),x=s,w=f,v(u))){let e=[...n,...t];e[e.length-1]!==b.DEFAULT_SEGMENT_KEY&&C.push(e)}}}return E.patchedTree=w,E.canonicalUrl=f?(0,n.createHrefFromUrl)(f):S,E.pendingPush=R,E.scrollableSegments=C,E.hashFragment=P,E.shouldScroll=_,(0,d.handleMutable)(e,E)},()=>e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7772:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{prefetchQueue:function(){return c},prefetchReducer:function(){return u}});let i=r(47013),n=r(8085),o=r(22574),a=r(15048),s=r(92051),l=r(94813),c=new s.PromiseQueue(5);function u(e,t){(0,o.prunePrefetchCache)(e.prefetchCache);let{url:r}=t;r.searchParams.delete(a.NEXT_RSC_UNION_QUERY);let s=(0,l.createPrefetchCacheKey)(r,e.nextUrl),u=e.prefetchCache.get(s);if(u&&(u.kind===n.PrefetchKind.TEMPORARY&&e.prefetchCache.set(s,{...u,kind:t.kind}),!(u.kind===n.PrefetchKind.AUTO&&t.kind===n.PrefetchKind.FULL)))return e;let d=c.enqueue(()=>(0,i.fetchServerResponse)(r,e.tree,e.nextUrl,e.buildId,t.kind));return e.prefetchCache.set(s,{treeAtTimeOfPrefetch:e.tree,data:d,kind:t.kind,prefetchTime:Date.now(),lastUsedTime:null}),e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22574:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"prunePrefetchCache",{enumerable:!0,get:function(){return n}});let i=r(80696);function n(e){for(let[t,r]of e)(0,i.getPrefetchEntryCacheStatus)(r)===i.PrefetchCacheEntryStatus.expired&&e.delete(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},17787:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"refreshReducer",{enumerable:!0,get:function(){return h}});let i=r(47013),n=r(47475),o=r(71697),a=r(53694),s=r(69643),l=r(44080),c=r(67234),u=r(2583),d=r(71418);function h(e,t){let{origin:r}=t,h={},p=e.canonicalUrl,f=e.tree;h.preserveCustomHistoryState=!1;let g=(0,u.createEmptyCacheNode)();return g.lazyData=(0,i.fetchServerResponse)(new URL(p,r),[f[0],f[1],f[2],"refetch"],e.nextUrl,e.buildId),g.lazyData.then(r=>{let[i,u]=r;if("string"==typeof i)return(0,s.handleExternalUrl)(e,h,i,e.pushRef.pendingPush);for(let r of(g.lazyData=null,i)){if(3!==r.length)return console.log("REFRESH FAILED"),e;let[i]=r,l=(0,o.applyRouterStatePatchToFullTree)([""],f,i);if(null===l)return(0,d.handleSegmentMismatch)(e,t,i);if((0,a.isNavigatingToNewRootLayout)(f,l))return(0,s.handleExternalUrl)(e,h,p,e.pushRef.pendingPush);let m=u?(0,n.createHrefFromUrl)(u):void 0;u&&(h.canonicalUrl=m);let[b,w]=r.slice(-2);if(null!==b){let e=b[2];g.rsc=e,g.prefetchRsc=null,(0,c.fillLazyItemsTillLeafWithHead)(g,void 0,i,b,w),h.cache=g,h.prefetchCache=new Map}h.patchedTree=l,h.canonicalUrl=p,f=l}return(0,l.handleMutable)(e,h)},()=>e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25206:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"restoreReducer",{enumerable:!0,get:function(){return o}});let i=r(47475),n=r(95684);function o(e,t){var r;let{url:o,tree:a}=t,s=(0,i.createHrefFromUrl)(o),l=e.cache;return{buildId:e.buildId,canonicalUrl:s,pushRef:{pendingPush:!1,mpaNavigation:!1,preserveCustomHistoryState:!0},focusAndScrollRef:e.focusAndScrollRef,cache:l,prefetchCache:e.prefetchCache,tree:a,nextUrl:null!=(r=(0,n.extractPathFromFlightRouterState)(a))?r:o.pathname}}r(13026),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9501:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"serverActionReducer",{enumerable:!0,get:function(){return w}});let i=r(13664),n=r(15048),o=r(88928),a=r(47475),s=r(69643),l=r(71697),c=r(53694),u=r(44080),d=r(67234),h=r(2583),p=r(95684),f=r(71418),{createFromFetch:g,encodeReply:m}=r(82228);async function b(e,t){let r,{actionId:a,actionArgs:s}=t,l=await m(s),c=(0,p.extractPathFromFlightRouterState)(e.tree),u=e.nextUrl&&e.nextUrl!==c,d=await fetch("",{method:"POST",headers:{Accept:n.RSC_CONTENT_TYPE_HEADER,[n.ACTION]:a,[n.NEXT_ROUTER_STATE_TREE]:encodeURIComponent(JSON.stringify(e.tree)),...u?{[n.NEXT_URL]:e.nextUrl}:{}},body:l}),h=d.headers.get("x-action-redirect");try{let e=JSON.parse(d.headers.get("x-action-revalidated")||"[[],0,0]");r={paths:e[0]||[],tag:!!e[1],cookie:e[2]}}catch(e){r={paths:[],tag:!1,cookie:!1}}let f=h?new URL((0,o.addBasePath)(h),new URL(e.canonicalUrl,window.location.href)):void 0;if(d.headers.get("content-type")===n.RSC_CONTENT_TYPE_HEADER){let e=await g(Promise.resolve(d),{callServer:i.callServer});if(h){let[,t]=null!=e?e:[];return{actionFlightData:t,redirectLocation:f,revalidatedParts:r}}let[t,[,n]]=null!=e?e:[];return{actionResult:t,actionFlightData:n,redirectLocation:f,revalidatedParts:r}}return{redirectLocation:f,revalidatedParts:r}}function w(e,t){let{resolve:r,reject:i}=t,n={},o=e.canonicalUrl,p=e.tree;return n.preserveCustomHistoryState=!1,n.inFlightServerAction=b(e,t),n.inFlightServerAction.then(i=>{let{actionResult:g,actionFlightData:m,redirectLocation:b}=i;if(b&&(e.pushRef.pendingPush=!0,n.pendingPush=!0),!m)return(n.actionResultResolved||(r(g),n.actionResultResolved=!0),b)?(0,s.handleExternalUrl)(e,n,b.href,e.pushRef.pendingPush):e;if("string"==typeof m)return(0,s.handleExternalUrl)(e,n,m,e.pushRef.pendingPush);for(let r of(n.inFlightServerAction=null,m)){if(3!==r.length)return console.log("SERVER ACTION APPLY FAILED"),e;let[i]=r,a=(0,l.applyRouterStatePatchToFullTree)([""],p,i);if(null===a)return(0,f.handleSegmentMismatch)(e,t,i);if((0,c.isNavigatingToNewRootLayout)(p,a))return(0,s.handleExternalUrl)(e,n,o,e.pushRef.pendingPush);let[u,g]=r.slice(-2),m=null!==u?u[2]:null;if(null!==m){let e=(0,h.createEmptyCacheNode)();e.rsc=m,e.prefetchRsc=null,(0,d.fillLazyItemsTillLeafWithHead)(e,void 0,i,u,g),n.cache=e,n.prefetchCache=new Map}n.patchedTree=a,n.canonicalUrl=o,p=a}if(b){let e=(0,a.createHrefFromUrl)(b,!1);n.canonicalUrl=e}return n.actionResultResolved||(r(g),n.actionResultResolved=!0),(0,u.handleMutable)(e,n)},t=>{if("rejected"===t.status)return n.actionResultResolved||(i(t.reason),n.actionResultResolved=!0),e;throw t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57910:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"serverPatchReducer",{enumerable:!0,get:function(){return d}});let i=r(47475),n=r(71697),o=r(53694),a=r(69643),s=r(69543),l=r(44080),c=r(2583),u=r(71418);function d(e,t){let{flightData:r,overrideCanonicalUrl:d}=t,h={};if(h.preserveCustomHistoryState=!1,"string"==typeof r)return(0,a.handleExternalUrl)(e,h,r,e.pushRef.pendingPush);let p=e.tree,f=e.cache;for(let l of r){let r=l.slice(0,-4),[g]=l.slice(-3,-2),m=(0,n.applyRouterStatePatchToTreeSkipDefault)(["",...r],p,g);if(null===m)return(0,u.handleSegmentMismatch)(e,t,g);if((0,o.isNavigatingToNewRootLayout)(p,m))return(0,a.handleExternalUrl)(e,h,e.canonicalUrl,e.pushRef.pendingPush);let b=d?(0,i.createHrefFromUrl)(d):void 0;b&&(h.canonicalUrl=b);let w=(0,c.createEmptyCacheNode)();(0,s.applyFlightData)(f,w,l),h.patchedTree=m,h.cache=w,f=w,p=m}return(0,l.handleMutable)(e,h)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8085:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return n},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return u}});let i="refresh",n="navigate",o="restore",a="server-patch",s="prefetch",l="fast-refresh",c="server-action";function u(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},73479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return i}}),r(8085),r(69643),r(57910),r(25206),r(17787),r(7772),r(52298),r(9501);let i=function(e,t){return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37528:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"shouldHardNavigate",{enumerable:!0,get:function(){return function e(t,r){let[n,o]=r,[a,s]=t;return(0,i.matchSegment)(a,n)?!(t.length<=2)&&e(t.slice(2),o[s]):!!Array.isArray(a)}}});let i=r(24287);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25517:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createSearchParamsBailoutProxy",{enumerable:!0,get:function(){return n}});let i=r(1396);function n(){return new Proxy({},{get(e,t){"string"==typeof t&&(0,i.staticGenerationBailout)("searchParams."+t)}})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1396:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isStaticGenBailoutError:function(){return s},staticGenerationBailout:function(){return c}});let i=r(3082),n=r(94749),o="NEXT_STATIC_GEN_BAILOUT";class a extends Error{constructor(...e){super(...e),this.code=o}}function s(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===o}function l(e,t){let{dynamic:r,link:i}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(i?" See more info here: "+i:"")}let c=(e,t)=>{let{dynamic:r,link:o}=void 0===t?{}:t,s=n.staticGenerationAsyncStorage.getStore();if(!s)return!1;if(s.forceStatic)return!0;if(s.dynamicShouldError)throw new a(l(e,{link:o,dynamic:null!=r?r:"error"}));let c=l(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==s.postpone||s.postpone.call(s,e),s.revalidate=0,s.isStaticGeneration){let t=new i.DynamicServerError(c);throw s.dynamicUsageDescription=e,s.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43982:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r(39694);let i=r(95344);r(3729);let n=r(25517);function o(e){let{Component:t,propsForComponent:r,isStaticGeneration:o}=e;if(o){let e=(0,n.createSearchParamsBailoutProxy)();return(0,i.jsx)(t,{searchParams:e,...r})}return(0,i.jsx)(t,{...r})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14954:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{useUnwrapState:function(){return a},useReducerWithReduxDevtools:function(){return s}});let i=r(17824)._(r(3729)),n=r(8085);function o(e){if(e instanceof Map){let t={};for(let[r,i]of e.entries()){if("function"==typeof i){t[r]="fn()";continue}if("object"==typeof i&&null!==i){if(i.$$typeof){t[r]=i.$$typeof.toString();continue}if(i._bundlerConfig){t[r]="FlightData";continue}}t[r]=o(i)}return t}if("object"==typeof e&&null!==e){let t={};for(let r in e){let i=e[r];if("function"==typeof i){t[r]="fn()";continue}if("object"==typeof i&&null!==i){if(i.$$typeof){t[r]=i.$$typeof.toString();continue}if(i.hasOwnProperty("_bundlerConfig")){t[r]="FlightData";continue}}t[r]=o(i)}return t}return Array.isArray(e)?e.map(o):e}function a(e){return(0,n.isThenable)(e)?(0,i.use)(e):e}r(34087);let s=function(e){return[e,()=>{},()=>{}]};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},73055:(e,t,r)=>{"use strict";function i(e,t,r,i){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return i}}),r(19847),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96411:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return n}});let i=r(86050);function n(e){return(0,i.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(39694),n=r(17824),o=r(95344),a=n._(r(3729)),s=i._(r(81202)),l=i._(r(1758)),c=r(83855),u=r(73053),d=r(74187);r(70837);let h=r(66150),p=i._(r(74931)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,n,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){let[t,r]=a.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:l,decoding:c,className:u,style:d,fetchPriority:h,placeholder:p,loading:f,unoptimized:b,fill:w,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:x,setShowAltText:C,onLoad:_,onError:E,...P}=e;return(0,o.jsx)("img",{...P,...m(h),loading:f,width:l,height:s,decoding:c,"data-nimg":w?"fill":"1",className:u,style:d,sizes:n,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,p,y,v,x,b))},[r,p,y,v,x,E,b,t]),onLoad:e=>{g(e.currentTarget,p,y,v,x,b)},onError:e=>{C(!0),"empty"!==p&&x(!0),E&&E(e)}})});function w(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(h.RouterContext),i=(0,a.useContext)(d.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=f||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let[y,v]=(0,a.useState)(!1),[x,C]=(0,a.useState)(!1),{props:_,meta:E}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:y,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{..._,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:v,setShowAltText:C,ref:t}),E.priority?(0,o.jsx)(w,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61476:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let i=r(39694),n=r(95344),o=i._(r(3729)),a=r(26656),s=r(76737),l=r(92421),c=r(10853),u=r(41314),d=r(66150),h=r(46860),p=r(3470),f=r(73055),g=r(88928),m=r(8085);function b(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let w=o.default.forwardRef(function(e,t){let r,i;let{href:l,as:w,children:y,prefetch:v=null,passHref:x,replace:C,shallow:_,scroll:E,locale:P,onClick:S,onMouseEnter:R,onTouchStart:O,legacyBehavior:A=!1,...T}=e;r=y,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let k=o.default.useContext(d.RouterContext),I=o.default.useContext(h.AppRouterContext),j=null!=k?k:I,$=!k,M=!1!==v,N=null===v?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:D}=o.default.useMemo(()=>{if(!k){let e=b(l);return{href:e,as:w?b(w):e}}let[e,t]=(0,a.resolveHref)(k,l,!0);return{href:e,as:w?(0,a.resolveHref)(k,w):t||e}},[k,l,w]),U=o.default.useRef(L),z=o.default.useRef(D);A&&(i=o.default.Children.only(r));let B=A?i&&"object"==typeof i&&i.ref:t,[F,W,H]=(0,p.useIntersection)({rootMargin:"200px"}),Z=o.default.useCallback(e=>{(z.current!==D||U.current!==L)&&(H(),z.current=D,U.current=L),F(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,L,H,F]);o.default.useEffect(()=>{},[D,L,W,P,M,null==k?void 0:k.locale,j,$,N]);let V={ref:Z,onClick(e){A||"function"!=typeof S||S(e),A&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),j&&!e.defaultPrevented&&function(e,t,r,i,n,a,l,c,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==l||l;"beforePopState"in t?t[n?"replace":"push"](r,i,{shallow:a,locale:c,scroll:e}):t[n?"replace":"push"](i||r,{scroll:e})};u?o.default.startTransition(h):h()}(e,j,L,D,C,_,E,P,$)},onMouseEnter(e){A||"function"!=typeof R||R(e),A&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e)},onTouchStart(e){A||"function"!=typeof O||O(e),A&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e)}};if((0,c.isAbsoluteUrl)(D))V.href=D;else if(!A||x||"a"===i.type&&!("href"in i.props)){let e=void 0!==P?P:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,f.getDomainLocale)(D,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);V.href=t||(0,g.addBasePath)((0,u.addLocale)(D,e,null==k?void 0:k.defaultLocale))}return A?o.default.cloneElement(i,V):(0,n.jsx)("a",{...T,...V,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19847:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return o}});let i=r(74310),n=r(12244),o=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:o}=(0,n.parsePath)(e);return""+(0,i.removeTrailingSlash)(t)+r+o};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22874:(e,t,r)=>{"use strict";function i(e){return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeBasePath",{enumerable:!0,get:function(){return i}}),r(96411),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},66252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return i}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},i="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26656:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return d}});let i=r(77043),n=r(92421),o=r(60663),a=r(10853),s=r(19847),l=r(76737),c=r(44831),u=r(78729);function d(e,t,r){let d;let h="string"==typeof t?t:(0,n.formatWithValidation)(t),p=h.match(/^[a-zA-Z]{1,}:\/\//),f=p?h.slice(p[0].length):h;if((f.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+h+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(f);h=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(h))return r?[h]:h;try{d=new URL(h.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(h,d);e.pathname=(0,s.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,i.searchParamsToUrlQuery)(e.searchParams),{result:a,params:s}=(0,u.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,n.formatWithValidation)({pathname:a,hash:e.hash,query:(0,o.omit)(r,s)}))}let a=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[h]:h}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let i=r(3729),n=r(66252),o="function"==typeof IntersectionObserver,a=new Map,s=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!o,[u,d]=(0,i.useState)(!1),h=(0,i.useRef)(null),p=(0,i.useCallback)(e=>{h.current=e},[]);return(0,i.useEffect)(()=>{if(o){if(c||u)return;let e=h.current;if(e&&e.tagName)return function(e,t,r){let{id:i,observer:n,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},i=s.find(e=>e.root===r.root&&e.margin===r.margin);if(i&&(t=a.get(i)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},s.push(r),a.set(r,t),t}(r);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),a.delete(i);let e=s.findIndex(e=>e.root===i.root&&e.margin===i.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,u,h.current]),[p,u,(0,i.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54269:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentParam",{enumerable:!0,get:function(){return n}});let i=r(45767);function n(e){let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t));return(t&&(e=e.slice(t.length)),e.startsWith("[[...")&&e.endsWith("]]"))?{type:"optional-catchall",param:e.slice(5,-2)}:e.startsWith("[...")&&e.endsWith("]")?{type:"catchall",param:e.slice(4,-1)}:e.startsWith("[")&&e.endsWith("]")?{type:"dynamic",param:e.slice(1,-1)}:null}},45767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return n},isInterceptionRouteAppPath:function(){return o},extractInterceptionRouteInformation:function(){return a}});let i=r(77655),n=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>n.find(t=>e.startsWith(t)))}function a(e){let t,r,o;for(let i of e.split("/"))if(r=n.find(e=>i.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,i.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let a=t.split("/");if(a.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=a.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},16372:(e,t,r)=>{"use strict";e.exports=r(20399)},7637:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.AmpContext},46860:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.AppRouterContext},32158:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.HeadManagerContext},78486:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.HooksClientContext},74187:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.ImageConfigContext},66150:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.RouterContext},69505:(e,t,r)=>{"use strict";e.exports=r(16372).vendored.contexts.ServerInsertedHtml},81202:(e,t,r)=>{"use strict";e.exports=r(16372).vendored["react-ssr"].ReactDOM},95344:(e,t,r)=>{"use strict";e.exports=r(16372).vendored["react-ssr"].ReactJsxRuntime},82228:(e,t,r)=>{"use strict";e.exports=r(16372).vendored["react-ssr"].ReactServerDOMWebpackClientEdge},3729:(e,t,r)=>{"use strict";e.exports=r(16372).vendored["react-ssr"].React},13126:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},77866:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return n}});let r=/[|\\{}()[\]^$+*?.-]/,i=/[|\\{}()[\]^$+*?.-]/g;function n(e){return r.test(e)?e.replace(i,"\\$&"):e}},83855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(70837);let i=r(86358),n=r(73053);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,c,{src:u,sizes:d,unoptimized:h=!1,priority:p=!1,loading:f,className:g,quality:m,width:b,height:w,fill:y=!1,style:v,onLoad:x,onLoadingComplete:C,placeholder:_="empty",blurDataURL:E,fetchPriority:P,layout:S,objectFit:R,objectPosition:O,lazyBoundary:A,lazyRoot:T,...k}=e,{imgConf:I,showAltText:j,blurComplete:$,defaultLoader:M}=t,N=I||n.imageConfigDefault;if("allSizes"in N)s=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);s={...N,allSizes:e,deviceSizes:t}}let L=k.loader||M;delete k.loader,delete k.srcSet;let D="__next_img_default"in L;if(D){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!d&&(d=t)}let U="",z=a(b),B=a(w);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,U=e.src,!y){if(z||B){if(z&&!B){let t=z/e.width;B=Math.round(e.height*t)}else if(!z&&B){let t=B/e.height;z=Math.round(e.width*t)}}else z=e.width,B=e.height}}let F=!p&&("lazy"===f||void 0===f);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(h=!0,F=!1),s.unoptimized&&(h=!0),D&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(h=!0),p&&(P="high");let W=a(m),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:O}:{},j?{}:{color:"transparent"},v),Z=$||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:z,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+_+'")',V=Z?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},G=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:s,src:u,unoptimized:h,width:z,quality:W,sizes:d,loader:L});return{props:{...k,loading:F?"lazy":f,fetchPriority:P,width:z,height:B,decoding:"async",className:g,style:{...H,...V},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:h,priority:p,placeholder:_,fill:y}}}},65344:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function i(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return i}})},1758:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return g}});let i=r(39694),n=r(17824),o=r(95344),a=n._(r(3729)),s=i._(r(27984)),l=r(7637),c=r(32158),u=r(13126);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(70837);let p=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(h,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,a=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){a=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),i=(0,a.useContext)(c.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86358:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i?40*i:t,l=n?40*n:r,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},73053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},74931:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},63689:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return n}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},8092:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},34087:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ActionQueueContext:function(){return s},createMutableActionQueue:function(){return u}});let i=r(17824),n=r(8085),o=r(73479),a=i._(r(3729)),s=a.default.createContext(null);function l(e,t){null!==e.pending&&(e.pending=e.pending.next,null!==e.pending&&c({actionQueue:e,action:e.pending,setState:t}))}async function c(e){let{actionQueue:t,action:r,setState:i}=e,o=t.state;if(!o)throw Error("Invariant: Router state not initialized");t.pending=r;let a=r.payload,s=t.action(o,a);function c(e){if(r.discarded){t.needsRefresh&&null===t.pending&&(t.needsRefresh=!1,t.dispatch({type:n.ACTION_REFRESH,origin:window.location.origin},i));return}t.state=e,t.devToolsInstance&&t.devToolsInstance.send(a,e),l(t,i),r.resolve(e)}(0,n.isThenable)(s)?s.then(c,e=>{l(t,i),r.reject(e)}):c(s)}function u(){let e={state:null,dispatch:(t,r)=>(function(e,t,r){let i={resolve:r,reject:()=>{}};if(t.type!==n.ACTION_RESTORE){let e=new Promise((e,t)=>{i={resolve:e,reject:t}});(0,a.startTransition)(()=>{r(e)})}let o={payload:t,next:null,resolve:i.resolve,reject:i.reject};null===e.pending?(e.last=o,c({actionQueue:e,action:o,setState:r})):t.type===n.ACTION_NAVIGATE?(e.pending.discarded=!0,e.last=o,e.pending.payload.type===n.ACTION_SERVER_ACTION&&(e.needsRefresh=!0),c({actionQueue:e,action:o,setState:r})):(null!==e.last&&(e.last.next=o),e.last=o)})(e,t,r),action:async(e,t)=>{if(null===e)throw Error("Invariant: Router state not initialized");return(0,o.reducer)(e,t)},pending:null,last:null};return e}},71870:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return n}});let i=r(12244);function n(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:n,hash:o}=(0,i.parsePath)(e);return""+t+r+n+o}},77655:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return a}});let i=r(8092),n=r(19457);function o(e){return(0,i.ensureLeadingSlash)(e.split("/").reduce((e,t,r,i)=>!t||(0,n.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===i.length-1?e:e+"/"+t,""))}function a(e){return e.replace(/\.rsc($|\?)/,"$1")}},92421:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return o},urlObjectKeys:function(){return a},formatWithValidation:function(){return s}});let i=r(17824)._(r(77043)),n=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,o=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let u=e.search||l&&"?"+l||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||n.test(o))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),""+o+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return o(e)}},51586:(e,t)=>{"use strict";function r(e,t){if(void 0===t&&(t={}),t.onlyHashChange){e();return}let r=document.documentElement,i=r.style.scrollBehavior;r.style.scrollBehavior="auto",t.dontForceLayout||r.getClientRects(),e(),r.style.scrollBehavior=i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"handleSmoothScroll",{enumerable:!0,get:function(){return r}})},44831:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return i.getSortedRoutes},isDynamicRoute:function(){return n.isDynamicRoute}});let i=r(46177),n=r(25508)},78729:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return o}});let i=r(82694),n=r(76603);function o(e,t,r){let o="",a=(0,n.getRouteRegex)(e),s=a.groups,l=(t!==e?(0,i.getRouteMatcher)(a)(t):"")||r;o=e;let c=Object.keys(s);return c.every(e=>{let t=l[e]||"",{repeat:r,optional:i}=s[e],n="["+(r?"...":"")+e+"]";return i&&(n=(t?"":"/")+"["+n+"]"),r&&!Array.isArray(t)&&(t=[t]),(i||e in l)&&(o=o.replace(n,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(o=""),{params:c,result:o}}},56338:(e,t)=>{"use strict";function r(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isBot",{enumerable:!0,get:function(){return r}})},25508:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return o}});let i=r(45767),n=/\/\[[^/]+?\](?=\/|$)/;function o(e){return(0,i.isInterceptionRouteAppPath)(e)&&(e=(0,i.extractInterceptionRouteInformation)(e).interceptedRoute),n.test(e)}},76737:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=r(10853),n=r(96411);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},60663:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(i=>{t.includes(i)||(r[i]=e[i])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},12244:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),i=r>-1&&(t<0||r<t);return i||t>-1?{pathname:e.substring(0,i?r:t),query:i?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},86050:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return n}});let i=r(12244);function n(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,i.parsePath)(e);return r===t||r.startsWith(t+"/")}},77043:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function i(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,i(e))):t.set(r,i(n))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return n},assign:function(){return o}})},74310:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},82694:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return n}});let i=r(10853);function n(e){let{re:t,groups:r}=e;return e=>{let n=t.exec(e);if(!n)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new i.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],i=n[t.pos];void 0!==i&&(a[e]=~i.indexOf("/")?i.split("/").map(e=>o(e)):t.repeat?[o(i)]:o(i))}),a}}},76603:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return d},getNamedMiddlewareRegex:function(){return h}});let i=r(45767),n=r(77866),o=r(74310);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:i,repeat:l}=a(o[1]);return r[e]={pos:s++,repeat:l,optional:i},"/"+(0,n.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,n.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=a(o[1]);return r[e]={pos:s++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:i,routeKeys:o,keyPrefix:s}=e,{key:l,optional:c,repeat:u}=a(i),d=l.replace(/\W/g,"");s&&(d=""+s+d);let h=!1;(0===d.length||d.length>30)&&(h=!0),isNaN(parseInt(d.slice(0,1)))||(h=!0),h&&(d=r()),s?o[d]=""+s+l:o[d]=l;let p=t?(0,n.escapeStringRegexp)(t):"";return u?c?"(?:/"+p+"(?<"+d+">.+?))?":"/"+p+"(?<"+d+">.+?)":"/"+p+"(?<"+d+">[^/]+?)"}function u(e,t){let r;let a=(0,o.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return c({getSafeRouteKey:s,interceptionMarker:r,segment:o[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return o?c({getSafeRouteKey:s,segment:o[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,n.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function d(e,t){let r=u(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=s(e),{catchAll:i=!0}=t;if("/"===r)return{namedRegex:"^/"+(i?".*":"")+"$"};let{namedParameterizedRoute:n}=u(e,!1);return{namedRegex:"^"+n+(i?"(?:(/.*)?)":"")+"$"}}},46177:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return i}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,i){if(0===e.length){this.placeholder=!1;return}if(i)throw Error("Catch-all must be the last part of the URL.");let n=e[0];if(n.startsWith("[")&&n.endsWith("]")){let r=n.slice(1,-1),a=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),a=!0),r.startsWith("...")&&(r=r.substring(3),i=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function o(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===n.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(i){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');o(this.optionalRestSlugName,r),this.optionalRestSlugName=r,n="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');o(this.restSlugName,r),this.restSlugName=r,n="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');o(this.slugName,r),this.slugName=r,n="[]"}}this.children.has(n)||this.children.set(n,new r),this.children.get(n)._insert(e.slice(1),t,i)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function i(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},19457:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return i},DEFAULT_SEGMENT_KEY:function(){return n}});let i="__PAGE__",n="__DEFAULT__"},27984:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let i=r(3729),n=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function s(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},10853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return i},isAbsoluteUrl:function(){return o},getLocationOrigin:function(){return a},getURL:function(){return s},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return u},loadGetInitialProps:function(){return d},SP:function(){return h},ST:function(){return p},DecodeError:function(){return f},NormalizeError:function(){return g},PageNotFoundError:function(){return m},MissingStaticPage:function(){return b},MiddlewareNotFoundError:function(){return w},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return function(){for(var i=arguments.length,n=Array(i),o=0;o<i;o++)n[o]=arguments[o];return r||(r=!0,t=e(...n)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>n.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&c(r))return i;if(!i)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+i+'" instead.');return i}let h="undefined"!=typeof performance,p=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class f extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},70837:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},73852:(e,t,r)=>{"use strict";let i=r(32899),n=[function(){},function(e,t,r,i){if(i===t.length)throw Error("Ran out of data");let n=t[i];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=255},function(e,t,r,i){if(i+1>=t.length)throw Error("Ran out of data");let n=t[i];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=t[i+1]},function(e,t,r,i){if(i+2>=t.length)throw Error("Ran out of data");e[r]=t[i],e[r+1]=t[i+1],e[r+2]=t[i+2],e[r+3]=255},function(e,t,r,i){if(i+3>=t.length)throw Error("Ran out of data");e[r]=t[i],e[r+1]=t[i+1],e[r+2]=t[i+2],e[r+3]=t[i+3]}],o=[function(){},function(e,t,r,i){let n=t[0];e[r]=n,e[r+1]=n,e[r+2]=n,e[r+3]=i},function(e,t,r){let i=t[0];e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=t[1]},function(e,t,r,i){e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2],e[r+3]=i},function(e,t,r){e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2],e[r+3]=t[3]}];t.dataToBitMap=function(e,t){let r,a,s,l,c=t.width,u=t.height,d=t.depth,h=t.bpp,p=t.interlace;if(8!==d){let t,i;t=[],i=0,r={get:function(r){for(;t.length<r;)!function(){let r,n,o,a;if(i===e.length)throw Error("Ran out of data");let s=e[i];switch(i++,d){default:throw Error("unrecognised depth");case 16:o=e[i],i++,t.push((s<<8)+o);break;case 4:o=15&s,a=s>>4,t.push(a,o);break;case 2:r=3&s,n=s>>2&3,o=s>>4&3,a=s>>6&3,t.push(a,o,n,r);break;case 1:r=s>>4&1,n=s>>5&1,o=s>>6&1,a=s>>7&1,t.push(a,o,n,r,s>>3&1,s>>2&1,s>>1&1,1&s)}}();let n=t.slice(0,r);return t=t.slice(r),n},resetAfterLine:function(){t.length=0},end:function(){if(i!==e.length)throw Error("extra data found")}}}a=d<=8?Buffer.alloc(c*u*4):new Uint16Array(c*u*4);let f=Math.pow(2,d)-1,g=0;if(p)s=i.getImagePasses(c,u),l=i.getInterlaceIterator(c,u);else{let e=0;l=function(){let t=e;return e+=4,t},s=[{width:c,height:u}]}for(let t=0;t<s.length;t++)8===d?g=function(e,t,r,i,o,a){let s=e.width,l=e.height,c=e.index;for(let e=0;e<l;e++)for(let l=0;l<s;l++){let s=r(l,e,c);n[i](t,o,s,a),a+=i}return a}(s[t],a,l,h,e,g):function(e,t,r,i,n,a){let s=e.width,l=e.height,c=e.index;for(let e=0;e<l;e++){for(let l=0;l<s;l++){let s=n.get(i),u=r(l,e,c);o[i](t,s,u,a)}n.resetAfterLine()}}(s[t],a,l,h,r,f);if(8===d){if(g!==e.length)throw Error("extra data found")}else r.end();return a}},24646:(e,t,r)=>{"use strict";let i=r(74014);e.exports=function(e,t,r,n){let o=-1!==[i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(n.colorType);if(n.colorType===n.inputColorType){let t;let r=(t=new ArrayBuffer(2),new DataView(t).setInt16(0,256,!0),256!==new Int16Array(t)[0]);if(8===n.bitDepth||16===n.bitDepth&&r)return e}let a=16!==n.bitDepth?e:new Uint16Array(e.buffer),s=255,l=i.COLORTYPE_TO_BPP_MAP[n.inputColorType];4!==l||n.inputHasAlpha||(l=3);let c=i.COLORTYPE_TO_BPP_MAP[n.colorType];16===n.bitDepth&&(s=65535,c*=2);let u=Buffer.alloc(t*r*c),d=0,h=0,p=n.bgColor||{};void 0===p.red&&(p.red=s),void 0===p.green&&(p.green=s),void 0===p.blue&&(p.blue=s);for(let e=0;e<r;e++)for(let e=0;e<t;e++){let e=function(){let e,t,r;let l=s;switch(n.inputColorType){case i.COLORTYPE_COLOR_ALPHA:l=a[d+3],e=a[d],t=a[d+1],r=a[d+2];break;case i.COLORTYPE_COLOR:e=a[d],t=a[d+1],r=a[d+2];break;case i.COLORTYPE_ALPHA:l=a[d+1],t=e=a[d],r=e;break;case i.COLORTYPE_GRAYSCALE:t=e=a[d],r=e;break;default:throw Error("input color type:"+n.inputColorType+" is not supported at present")}return n.inputHasAlpha&&!o&&(l/=s,e=Math.min(Math.max(Math.round((1-l)*p.red+l*e),0),s),t=Math.min(Math.max(Math.round((1-l)*p.green+l*t),0),s),r=Math.min(Math.max(Math.round((1-l)*p.blue+l*r),0),s)),{red:e,green:t,blue:r,alpha:l}}(a,d);switch(n.colorType){case i.COLORTYPE_COLOR_ALPHA:case i.COLORTYPE_COLOR:8===n.bitDepth?(u[h]=e.red,u[h+1]=e.green,u[h+2]=e.blue,o&&(u[h+3]=e.alpha)):(u.writeUInt16BE(e.red,h),u.writeUInt16BE(e.green,h+2),u.writeUInt16BE(e.blue,h+4),o&&u.writeUInt16BE(e.alpha,h+6));break;case i.COLORTYPE_ALPHA:case i.COLORTYPE_GRAYSCALE:{let t=(e.red+e.green+e.blue)/3;8===n.bitDepth?(u[h]=t,o&&(u[h+1]=e.alpha)):(u.writeUInt16BE(t,h),o&&u.writeUInt16BE(e.alpha,h+2));break}default:throw Error("unrecognised color Type "+n.colorType)}d+=l,h+=c}return u}},96150:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=e.exports=function(){n.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};i.inherits(o,n),o.prototype.read=function(e,t){this._reads.push({length:Math.abs(e),allowLess:e<0,func:t}),process.nextTick((function(){this._process(),this._paused&&this._reads&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}).bind(this))},o.prototype.write=function(e,t){let r;return this.writable?(r=Buffer.isBuffer(e)?e:Buffer.from(e,t||this._encoding),this._buffers.push(r),this._buffered+=r.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused):(this.emit("error",Error("Stream not writable")),!1)},o.prototype.end=function(e,t){e&&this.write(e,t),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},o.prototype.destroySoon=o.prototype.end,o.prototype._end=function(){this._reads.length>0&&this.emit("error",Error("Unexpected end of input")),this.destroy()},o.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},o.prototype._processReadAllowingLess=function(e){this._reads.shift();let t=this._buffers[0];t.length>e.length?(this._buffered-=e.length,this._buffers[0]=t.slice(e.length),e.func.call(this,t.slice(0,e.length))):(this._buffered-=t.length,this._buffers.shift(),e.func.call(this,t))},o.prototype._processRead=function(e){this._reads.shift();let t=0,r=0,i=Buffer.alloc(e.length);for(;t<e.length;){let n=this._buffers[r++],o=Math.min(n.length,e.length-t);n.copy(i,t,0,o),t+=o,o!==n.length&&(this._buffers[--r]=n.slice(o))}r>0&&this._buffers.splice(0,r),this._buffered-=e.length,e.func.call(this,i)},o.prototype._process=function(){try{for(;this._buffered>0&&this._reads&&this._reads.length>0;){let e=this._reads[0];if(e.allowLess)this._processReadAllowingLess(e);else if(this._buffered>=e.length)this._processRead(e);else break}this._buffers&&!this.writable&&this._end()}catch(e){this.emit("error",e)}}},74014:e=>{"use strict";e.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}},28750:e=>{"use strict";let t=[];!function(){for(let e=0;e<256;e++){let r=e;for(let e=0;e<8;e++)1&r?r=3988292384^r>>>1:r>>>=1;t[e]=r}}();let r=e.exports=function(){this._crc=-1};r.prototype.write=function(e){for(let r=0;r<e.length;r++)this._crc=t[(this._crc^e[r])&255]^this._crc>>>8;return!0},r.prototype.crc32=function(){return -1^this._crc},r.crc32=function(e){let r=-1;for(let i=0;i<e.length;i++)r=t[(r^e[i])&255]^r>>>8;return -1^r}},94194:(e,t,r)=>{"use strict";let i=r(67215),n={0:function(e,t,r,i,n){for(let o=0;o<r;o++)i[n+o]=e[t+o]},1:function(e,t,r,i,n,o){for(let a=0;a<r;a++){let r=a>=o?e[t+a-o]:0,s=e[t+a]-r;i[n+a]=s}},2:function(e,t,r,i,n){for(let o=0;o<r;o++){let a=t>0?e[t+o-r]:0,s=e[t+o]-a;i[n+o]=s}},3:function(e,t,r,i,n,o){for(let a=0;a<r;a++){let s=a>=o?e[t+a-o]:0,l=t>0?e[t+a-r]:0,c=e[t+a]-(s+l>>1);i[n+a]=c}},4:function(e,t,r,n,o,a){for(let s=0;s<r;s++){let l=s>=a?e[t+s-a]:0,c=t>0?e[t+s-r]:0,u=t>0&&s>=a?e[t+s-(r+a)]:0,d=e[t+s]-i(l,c,u);n[o+s]=d}}},o={0:function(e,t,r){let i=0,n=t+r;for(let r=t;r<n;r++)i+=Math.abs(e[r]);return i},1:function(e,t,r,i){let n=0;for(let o=0;o<r;o++){let r=o>=i?e[t+o-i]:0;n+=Math.abs(e[t+o]-r)}return n},2:function(e,t,r){let i=0,n=t+r;for(let o=t;o<n;o++){let n=t>0?e[o-r]:0;i+=Math.abs(e[o]-n)}return i},3:function(e,t,r,i){let n=0;for(let o=0;o<r;o++){let a=o>=i?e[t+o-i]:0,s=t>0?e[t+o-r]:0;n+=Math.abs(e[t+o]-(a+s>>1))}return n},4:function(e,t,r,n){let o=0;for(let a=0;a<r;a++){let s=a>=n?e[t+a-n]:0,l=t>0?e[t+a-r]:0,c=t>0&&a>=n?e[t+a-(r+n)]:0;o+=Math.abs(e[t+a]-i(s,l,c))}return o}};e.exports=function(e,t,r,i,a){let s;if("filterType"in i&&-1!==i.filterType){if("number"==typeof i.filterType)s=[i.filterType];else throw Error("unrecognised filter types")}else s=[0,1,2,3,4];16===i.bitDepth&&(a*=2);let l=t*a,c=0,u=0,d=Buffer.alloc((l+1)*r),h=s[0];for(let t=0;t<r;t++){if(s.length>1){let t=1/0;for(let r=0;r<s.length;r++){let i=o[s[r]](e,u,l,a);i<t&&(h=s[r],t=i)}}d[c]=h,c++,n[h](e,u,l,d,c,a),c+=l,u+=l}return d}},14375:(e,t,r)=>{"use strict";let i=r(73837),n=r(96150),o=r(9284),a=e.exports=function(e){n.call(this);let t=[],r=this;this._filter=new o(e,{read:this.read.bind(this),write:function(e){t.push(e)},complete:function(){r.emit("complete",Buffer.concat(t))}}),this._filter.start()};i.inherits(a,n)},8672:(e,t,r)=>{"use strict";let i=r(40643),n=r(9284);t.process=function(e,t){let r=[],o=new i(e);return new n(t,{read:o.read.bind(o),write:function(e){r.push(e)},complete:function(){}}).start(),o.process(),Buffer.concat(r)}},9284:(e,t,r)=>{"use strict";let i=r(32899),n=r(67215);function o(e,t,r){let i=e*t;return 8!==r&&(i=Math.ceil(i/(8/r))),i}let a=e.exports=function(e,t){let r=e.width,n=e.height,a=e.interlace,s=e.bpp,l=e.depth;if(this.read=t.read,this.write=t.write,this.complete=t.complete,this._imageIndex=0,this._images=[],a){let e=i.getImagePasses(r,n);for(let t=0;t<e.length;t++)this._images.push({byteWidth:o(e[t].width,s,l),height:e[t].height,lineIndex:0})}else this._images.push({byteWidth:o(r,s,l),height:n,lineIndex:0});8===l?this._xComparison=s:16===l?this._xComparison=2*s:this._xComparison=1};a.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},a.prototype._unFilterType1=function(e,t,r){let i=this._xComparison,n=i-1;for(let o=0;o<r;o++){let r=e[1+o],a=o>n?t[o-i]:0;t[o]=r+a}},a.prototype._unFilterType2=function(e,t,r){let i=this._lastLine;for(let n=0;n<r;n++){let r=e[1+n],o=i?i[n]:0;t[n]=r+o}},a.prototype._unFilterType3=function(e,t,r){let i=this._xComparison,n=i-1,o=this._lastLine;for(let a=0;a<r;a++){let r=e[1+a],s=o?o[a]:0,l=Math.floor(((a>n?t[a-i]:0)+s)/2);t[a]=r+l}},a.prototype._unFilterType4=function(e,t,r){let i=this._xComparison,o=i-1,a=this._lastLine;for(let s=0;s<r;s++){let r=e[1+s],l=a?a[s]:0,c=n(s>o?t[s-i]:0,l,s>o&&a?a[s-i]:0);t[s]=r+c}},a.prototype._reverseFilterLine=function(e){let t,r=e[0],i=this._images[this._imageIndex],n=i.byteWidth;if(0===r)t=e.slice(1,n+1);else switch(t=Buffer.alloc(n),r){case 1:this._unFilterType1(e,t,n);break;case 2:this._unFilterType2(e,t,n);break;case 3:this._unFilterType3(e,t,n);break;case 4:this._unFilterType4(e,t,n);break;default:throw Error("Unrecognised filter type - "+r)}this.write(t),i.lineIndex++,i.lineIndex>=i.height?(this._lastLine=null,this._imageIndex++,i=this._images[this._imageIndex]):this._lastLine=t,i?this.read(i.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}},43529:e=>{"use strict";e.exports=function(e,t){let r=t.depth,i=t.width,n=t.height,o=t.colorType,a=t.transColor,s=t.palette,l=e;return 3===o?function(e,t,r,i,n){let o=0;for(let a=0;a<i;a++)for(let i=0;i<r;i++){let r=n[e[o]];if(!r)throw Error("index "+e[o]+" not in palette");for(let e=0;e<4;e++)t[o+e]=r[e];o+=4}}(e,l,i,n,s):(a&&function(e,t,r,i,n){let o=0;for(let a=0;a<i;a++)for(let i=0;i<r;i++){let r=!1;if(1===n.length?n[0]===e[o]&&(r=!0):n[0]===e[o]&&n[1]===e[o+1]&&n[2]===e[o+2]&&(r=!0),r)for(let e=0;e<4;e++)t[o+e]=0;o+=4}}(e,l,i,n,a),8!==r&&(16===r&&(l=Buffer.alloc(i*n*4)),function(e,t,r,i,n){let o=Math.pow(2,n)-1,a=0;for(let n=0;n<i;n++)for(let i=0;i<r;i++){for(let r=0;r<4;r++)t[a+r]=Math.floor(255*e[a+r]/o+.5);a+=4}}(e,l,i,n,r))),l}},32899:(e,t)=>{"use strict";let r=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];t.getImagePasses=function(e,t){let i=[],n=e%8,o=t%8,a=(e-n)/8,s=(t-o)/8;for(let e=0;e<r.length;e++){let t=r[e],l=a*t.x.length,c=s*t.y.length;for(let e=0;e<t.x.length;e++)if(t.x[e]<n)l++;else break;for(let e=0;e<t.y.length;e++)if(t.y[e]<o)c++;else break;l>0&&c>0&&i.push({width:l,height:c,index:e})}return i},t.getInterlaceIterator=function(e){return function(t,i,n){let o=t%r[n].x.length,a=(t-o)/r[n].x.length*8+r[n].x[o],s=i%r[n].y.length;return 4*a+((i-s)/r[n].y.length*8+r[n].y[s])*e*4}}},91867:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=r(74014),a=r(59826),s=e.exports=function(e){n.call(this),this._packer=new a(e||{}),this._deflate=this._packer.createDeflate(),this.readable=!0};i.inherits(s,n),s.prototype.pack=function(e,t,r,i){this.emit("data",Buffer.from(o.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(t,r)),i&&this.emit("data",this._packer.packGAMA(i));let n=this._packer.filterData(e,t,r);this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",(function(e){this.emit("data",this._packer.packIDAT(e))}).bind(this)),this._deflate.on("end",(function(){this.emit("data",this._packer.packIEND()),this.emit("end")}).bind(this)),this._deflate.end(n)}},88975:(e,t,r)=>{"use strict";let i=!0,n=r(59796);n.deflateSync||(i=!1);let o=r(74014),a=r(59826);e.exports=function(e,t){if(!i)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let r=new a(t||{}),s=[];s.push(Buffer.from(o.PNG_SIGNATURE)),s.push(r.packIHDR(e.width,e.height)),e.gamma&&s.push(r.packGAMA(e.gamma));let l=r.filterData(e.data,e.width,e.height),c=n.deflateSync(l,r.getDeflateOptions());if(l=null,!c||!c.length)throw Error("bad png - invalid compressed data response");return s.push(r.packIDAT(c)),s.push(r.packIEND()),Buffer.concat(s)}},59826:(e,t,r)=>{"use strict";let i=r(74014),n=r(28750),o=r(24646),a=r(94194),s=r(59796),l=e.exports=function(e){if(this._options=e,e.deflateChunkSize=e.deflateChunkSize||32768,e.deflateLevel=null!=e.deflateLevel?e.deflateLevel:9,e.deflateStrategy=null!=e.deflateStrategy?e.deflateStrategy:3,e.inputHasAlpha=null==e.inputHasAlpha||e.inputHasAlpha,e.deflateFactory=e.deflateFactory||s.createDeflate,e.bitDepth=e.bitDepth||8,e.colorType="number"==typeof e.colorType?e.colorType:i.COLORTYPE_COLOR_ALPHA,e.inputColorType="number"==typeof e.inputColorType?e.inputColorType:i.COLORTYPE_COLOR_ALPHA,-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(e.colorType))throw Error("option color type:"+e.colorType+" is not supported at present");if(-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(e.inputColorType))throw Error("option input color type:"+e.inputColorType+" is not supported at present");if(8!==e.bitDepth&&16!==e.bitDepth)throw Error("option bit depth:"+e.bitDepth+" is not supported at present")};l.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},l.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},l.prototype.filterData=function(e,t,r){let n=o(e,t,r,this._options),s=i.COLORTYPE_TO_BPP_MAP[this._options.colorType];return a(n,t,r,this._options,s)},l.prototype._packChunk=function(e,t){let r=t?t.length:0,i=Buffer.alloc(r+12);return i.writeUInt32BE(r,0),i.writeUInt32BE(e,4),t&&t.copy(i,8),i.writeInt32BE(n.crc32(i.slice(4,i.length-4)),i.length-4),i},l.prototype.packGAMA=function(e){let t=Buffer.alloc(4);return t.writeUInt32BE(Math.floor(e*i.GAMMA_DIVISION),0),this._packChunk(i.TYPE_gAMA,t)},l.prototype.packIHDR=function(e,t){let r=Buffer.alloc(13);return r.writeUInt32BE(e,0),r.writeUInt32BE(t,4),r[8]=this._options.bitDepth,r[9]=this._options.colorType,r[10]=0,r[11]=0,r[12]=0,this._packChunk(i.TYPE_IHDR,r)},l.prototype.packIDAT=function(e){return this._packChunk(i.TYPE_IDAT,e)},l.prototype.packIEND=function(){return this._packChunk(i.TYPE_IEND,null)}},67215:e=>{"use strict";e.exports=function(e,t,r){let i=e+t-r,n=Math.abs(i-e),o=Math.abs(i-t),a=Math.abs(i-r);return n<=o&&n<=a?e:o<=a?t:r}},15487:(e,t,r)=>{"use strict";let i=r(73837),n=r(59796),o=r(96150),a=r(14375),s=r(68836),l=r(73852),c=r(43529),u=e.exports=function(e){o.call(this),this._parser=new s(e,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this),simpleTransparency:this._simpleTransparency.bind(this),headersFinished:this._headersFinished.bind(this)}),this._options=e,this.writable=!0,this._parser.start()};i.inherits(u,o),u.prototype._handleError=function(e){this.emit("error",e),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this._filter&&(this._filter.destroy(),this._filter.on("error",function(){})),this.errord=!0},u.prototype._inflateData=function(e){if(!this._inflate){if(this._bitmapInfo.interlace)this._inflate=n.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter);else{let e=((this._bitmapInfo.width*this._bitmapInfo.bpp*this._bitmapInfo.depth+7>>3)+1)*this._bitmapInfo.height,t=Math.max(e,n.Z_MIN_CHUNK);this._inflate=n.createInflate({chunkSize:t});let r=e,i=this.emit.bind(this,"error");this._inflate.on("error",function(e){r&&i(e)}),this._filter.on("complete",this._complete.bind(this));let o=this._filter.write.bind(this._filter);this._inflate.on("data",function(e){r&&(e.length>r&&(e=e.slice(0,r)),r-=e.length,o(e))}),this._inflate.on("end",this._filter.end.bind(this._filter))}}this._inflate.write(e)},u.prototype._handleMetaData=function(e){this._metaData=e,this._bitmapInfo=Object.create(e),this._filter=new a(this._bitmapInfo)},u.prototype._handleTransColor=function(e){this._bitmapInfo.transColor=e},u.prototype._handlePalette=function(e){this._bitmapInfo.palette=e},u.prototype._simpleTransparency=function(){this._metaData.alpha=!0},u.prototype._headersFinished=function(){this.emit("metadata",this._metaData)},u.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"))},u.prototype._complete=function(e){let t;if(!this.errord){try{let r=l.dataToBitMap(e,this._bitmapInfo);t=c(r,this._bitmapInfo),r=null}catch(e){this._handleError(e);return}this.emit("parsed",t)}}},65100:(e,t,r)=>{"use strict";let i=!0,n=r(59796),o=r(56934);n.deflateSync||(i=!1);let a=r(40643),s=r(8672),l=r(68836),c=r(73852),u=r(43529);e.exports=function(e,t){let r,d,h,p;if(!i)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let f=[],g=new a(e);if(new l(t,{read:g.read.bind(g),error:function(e){r=e},metadata:function(e){d=e},gamma:function(e){h=e},palette:function(e){d.palette=e},transColor:function(e){d.transColor=e},inflateData:function(e){f.push(e)},simpleTransparency:function(){d.alpha=!0}}).start(),g.process(),r)throw r;let m=Buffer.concat(f);if(f.length=0,d.interlace)p=n.inflateSync(m);else{let e=((d.width*d.bpp*d.depth+7>>3)+1)*d.height;p=o(m,{chunkSize:e,maxLength:e})}if(m=null,!p||!p.length)throw Error("bad png - invalid inflate data response");let b=s.process(p,d);m=null;let w=c.dataToBitMap(b,d);b=null;let y=u(w,d);return d.data=y,d.gamma=h||0,d}},68836:(e,t,r)=>{"use strict";let i=r(74014),n=r(28750),o=e.exports=function(e,t){this._options=e,e.checkCRC=!1!==e.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._emittedHeadersFinished=!1,this._palette=[],this._colorType=0,this._chunks={},this._chunks[i.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[i.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[i.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[i.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[i.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[i.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=t.read,this.error=t.error,this.metadata=t.metadata,this.gamma=t.gamma,this.transColor=t.transColor,this.palette=t.palette,this.parsed=t.parsed,this.inflateData=t.inflateData,this.finished=t.finished,this.simpleTransparency=t.simpleTransparency,this.headersFinished=t.headersFinished||function(){}};o.prototype.start=function(){this.read(i.PNG_SIGNATURE.length,this._parseSignature.bind(this))},o.prototype._parseSignature=function(e){let t=i.PNG_SIGNATURE;for(let r=0;r<t.length;r++)if(e[r]!==t[r]){this.error(Error("Invalid file signature"));return}this.read(8,this._parseChunkBegin.bind(this))},o.prototype._parseChunkBegin=function(e){let t=e.readUInt32BE(0),r=e.readUInt32BE(4),o="";for(let t=4;t<8;t++)o+=String.fromCharCode(e[t]);let a=!!(32&e[4]);if(!this._hasIHDR&&r!==i.TYPE_IHDR){this.error(Error("Expected IHDR on beggining"));return}if(this._crc=new n,this._crc.write(Buffer.from(o)),this._chunks[r])return this._chunks[r](t);if(!a){this.error(Error("Unsupported critical chunk type "+o));return}this.read(t+4,this._skipChunk.bind(this))},o.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},o.prototype._parseChunkEnd=function(e){let t=e.readInt32BE(0),r=this._crc.crc32();if(this._options.checkCRC&&r!==t){this.error(Error("Crc error - "+t+" - "+r));return}this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleIHDR=function(e){this.read(e,this._parseIHDR.bind(this))},o.prototype._parseIHDR=function(e){this._crc.write(e);let t=e.readUInt32BE(0),r=e.readUInt32BE(4),n=e[8],o=e[9],a=e[10],s=e[11],l=e[12];if(8!==n&&4!==n&&2!==n&&1!==n&&16!==n){this.error(Error("Unsupported bit depth "+n));return}if(!(o in i.COLORTYPE_TO_BPP_MAP)){this.error(Error("Unsupported color type"));return}if(0!==a){this.error(Error("Unsupported compression method"));return}if(0!==s){this.error(Error("Unsupported filter method"));return}if(0!==l&&1!==l){this.error(Error("Unsupported interlace method"));return}this._colorType=o;let c=i.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:t,height:r,depth:n,interlace:!!l,palette:!!(o&i.COLORTYPE_PALETTE),color:!!(o&i.COLORTYPE_COLOR),alpha:!!(o&i.COLORTYPE_ALPHA),bpp:c,colorType:o}),this._handleChunkEnd()},o.prototype._handlePLTE=function(e){this.read(e,this._parsePLTE.bind(this))},o.prototype._parsePLTE=function(e){this._crc.write(e);let t=Math.floor(e.length/3);for(let r=0;r<t;r++)this._palette.push([e[3*r],e[3*r+1],e[3*r+2],255]);this.palette(this._palette),this._handleChunkEnd()},o.prototype._handleTRNS=function(e){this.simpleTransparency(),this.read(e,this._parseTRNS.bind(this))},o.prototype._parseTRNS=function(e){if(this._crc.write(e),this._colorType===i.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length){this.error(Error("Transparency chunk must be after palette"));return}if(e.length>this._palette.length){this.error(Error("More transparent colors than palette size"));return}for(let t=0;t<e.length;t++)this._palette[t][3]=e[t];this.palette(this._palette)}this._colorType===i.COLORTYPE_GRAYSCALE&&this.transColor([e.readUInt16BE(0)]),this._colorType===i.COLORTYPE_COLOR&&this.transColor([e.readUInt16BE(0),e.readUInt16BE(2),e.readUInt16BE(4)]),this._handleChunkEnd()},o.prototype._handleGAMA=function(e){this.read(e,this._parseGAMA.bind(this))},o.prototype._parseGAMA=function(e){this._crc.write(e),this.gamma(e.readUInt32BE(0)/i.GAMMA_DIVISION),this._handleChunkEnd()},o.prototype._handleIDAT=function(e){this._emittedHeadersFinished||(this._emittedHeadersFinished=!0,this.headersFinished()),this.read(-e,this._parseIDAT.bind(this,e))},o.prototype._parseIDAT=function(e,t){if(this._crc.write(t),this._colorType===i.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw Error("Expected palette not found");this.inflateData(t);let r=e-t.length;r>0?this._handleIDAT(r):this._handleChunkEnd()},o.prototype._handleIEND=function(e){this.read(e,this._parseIEND.bind(this))},o.prototype._parseIEND=function(e){this._crc.write(e),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}},39278:(e,t,r)=>{"use strict";let i=r(65100),n=r(88975);t.read=function(e,t){return i(e,t||{})},t.write=function(e,t){return n(e,t)}},83269:(e,t,r)=>{"use strict";let i=r(73837),n=r(12781),o=r(15487),a=r(91867),s=r(39278),l=t.y=function(e){n.call(this),e=e||{},this.width=0|e.width,this.height=0|e.height,this.data=this.width>0&&this.height>0?Buffer.alloc(4*this.width*this.height):null,e.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new o(e),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",(function(e){this.data=e,this.emit("parsed",e)}).bind(this)),this._packer=new a(e),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};i.inherits(l,n),l.sync=s,l.prototype.pack=function(){return this.data&&this.data.length?process.nextTick((function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}).bind(this)):this.emit("error","No data provided"),this},l.prototype.parse=function(e,t){if(t){let e,r;e=(function(e){this.removeListener("error",r),this.data=e,t(null,this)}).bind(this),r=(function(r){this.removeListener("parsed",e),t(r,null)}).bind(this),this.once("parsed",e),this.once("error",r)}return this.end(e),this},l.prototype.write=function(e){return this._parser.write(e),!0},l.prototype.end=function(e){this._parser.end(e)},l.prototype._metadata=function(e){this.width=e.width,this.height=e.height,this.emit("metadata",e)},l.prototype._gamma=function(e){this.gamma=e},l.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},l.bitblt=function(e,t,r,i,n,o,a,s){if(i|=0,n|=0,o|=0,a|=0,s|=0,(r|=0)>e.width||i>e.height||r+n>e.width||i+o>e.height)throw Error("bitblt reading outside image");if(a>t.width||s>t.height||a+n>t.width||s+o>t.height)throw Error("bitblt writing outside image");for(let l=0;l<o;l++)e.data.copy(t.data,(s+l)*t.width+a<<2,(i+l)*e.width+r<<2,(i+l)*e.width+r+n<<2)},l.prototype.bitblt=function(e,t,r,i,n,o,a){return l.bitblt(this,e,t,r,i,n,o,a),this},l.adjustGamma=function(e){if(e.gamma){for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++){let i=e.width*t+r<<2;for(let t=0;t<3;t++){let r=e.data[i+t]/255;r=Math.pow(r,1/2.2/e.gamma),e.data[i+t]=Math.round(255*r)}}e.gamma=0}},l.prototype.adjustGamma=function(){l.adjustGamma(this)}},56934:(e,t,r)=>{"use strict";let i=r(39491).ok,n=r(59796),o=r(73837),a=r(14300).kMaxLength;function s(e){if(!(this instanceof s))return new s(e);e&&e.chunkSize<n.Z_MIN_CHUNK&&(e.chunkSize=n.Z_MIN_CHUNK),n.Inflate.call(this,e),this._offset=void 0===this._offset?this._outOffset:this._offset,this._buffer=this._buffer||this._outBuffer,e&&null!=e.maxLength&&(this._maxLength=e.maxLength)}function l(e,t){t&&process.nextTick(t),e._handle&&(e._handle.close(),e._handle=null)}function c(e,t){return function(e,t){if("string"==typeof t&&(t=Buffer.from(t)),!(t instanceof Buffer))throw TypeError("Not a string or buffer");let r=e._finishFlushFlag;return null==r&&(r=n.Z_FINISH),e._processChunk(t,r)}(new s(t),e)}s.prototype._processChunk=function(e,t,r){let o,s;if("function"==typeof r)return n.Inflate._processChunk.call(this,e,t,r);let c=this,u=e&&e.length,d=this._chunkSize-this._offset,h=this._maxLength,p=0,f=[],g=0;this.on("error",function(e){o=e}),i(this._handle,"zlib binding closed");do s=(s=this._handle.writeSync(t,e,p,u,this._buffer,this._offset,d))||this._writeState;while(!this._hadError&&function(e,t){if(c._hadError)return;let r=d-t;if(i(r>=0,"have should not go down"),r>0){let e=c._buffer.slice(c._offset,c._offset+r);if(c._offset+=r,e.length>h&&(e=e.slice(0,h)),f.push(e),g+=e.length,0==(h-=e.length))return!1}return(0===t||c._offset>=c._chunkSize)&&(d=c._chunkSize,c._offset=0,c._buffer=Buffer.allocUnsafe(c._chunkSize)),0===t&&(p+=u-e,u=e,!0)}(s[0],s[1]));if(this._hadError)throw o;if(g>=a)throw l(this),RangeError("Cannot create final Buffer. It would be larger than 0x"+a.toString(16)+" bytes");let m=Buffer.concat(f,g);return l(this),m},o.inherits(s,n.Inflate),e.exports=t=c,t.Inflate=s,t.createInflate=function(e){return new s(e)},t.inflateSync=c},40643:e=>{"use strict";let t=e.exports=function(e){this._buffer=e,this._reads=[]};t.prototype.read=function(e,t){this._reads.push({length:Math.abs(e),allowLess:e<0,func:t})},t.prototype.process=function(){for(;this._reads.length>0&&this._buffer.length;){let e=this._reads[0];if(this._buffer.length&&(this._buffer.length>=e.length||e.allowLess)){this._reads.shift();let t=this._buffer;this._buffer=t.slice(e.length),e.func.call(this,t.slice(0,e.length))}else break}return this._reads.length>0?Error("There are some read requests waitng on finished stream"):this._buffer.length>0?Error("unrecognised content at end of stream"):void 0}},5131:(e,t,r)=>{let i=r(22665),n=r(70394),o=r(2438),a=r(40935);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}n.create,t.toCanvas=s.bind(null,o.render),s.bind(null,o.renderToDataURL),s.bind(null,function(e,t,r){return a.render(e,r)})},22665:e=>{"use strict";e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},62332:(e,t,r)=>{let i=r(36096).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},84152:(e,t,r)=>{"use strict";let i=r(73758),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},33060:e=>{"use strict";function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},19934:e=>{"use strict";function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},27327:(e,t,r)=>{"use strict";let i=r(56209),n=r(73758);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},59797:(e,t,r)=>{let i=r(13862),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},13862:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},42708:(e,t,r)=>{let i=r(36096).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},84248:(e,t,r)=>{let i=r(36096),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},52143:(e,t)=>{let r=new Uint8Array(512),i=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]})(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},88330:(e,t,r)=>{"use strict";let i=r(73758),n=r(36096);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},85126:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},73758:(e,t,r)=>{let i=r(3517),n=r(85917);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},11986:(e,t,r)=>{"use strict";let i=r(73758);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},39322:(e,t,r)=>{let i=r(52143);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},70394:(e,t,r)=>{let i=r(36096),n=r(13862),o=r(33060),a=r(19934),s=r(62332),l=r(42708),c=r(85126),u=r(59797),d=r(59574),h=r(50814),p=r(84248),f=r(73758),g=r(29105);function m(e,t,r){let i,n;let o=e.size,a=p.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let b=n.M;return void 0!==t&&(b=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let p;if(Array.isArray(e))p=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=h.getBestVersionForData(t,r)}p=g.fromString(e,i||40)}else throw Error("Invalid data");let b=h.getBestVersionForData(p,r);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;let w=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=a-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=a%l,h=l-c,p=Math.floor(a/l),f=Math.floor(s/l),g=f+1,m=p-f,b=new d(m),w=0,y=Array(l),v=Array(l),x=0,C=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:g;y[e]=C.slice(w,w+t),v[e]=b.encode(y[e]),w+=t,x=Math.max(x,t)}let _=new Uint8Array(a),E=0;for(n=0;n<x;n++)for(o=0;o<l;o++)n<y[o].length&&(_[E++]=y[o][n]);for(n=0;n<m;n++)for(o=0;o<l;o++)_[E++]=v[o][n];return _}(n,e,t)}(t,r,p),y=new a(i.getSymbolSize(t));return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(y,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(y),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(y,t),m(y,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(y,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(y,w),isNaN(n)&&(n=c.getBestMask(y,m.bind(null,y,r))),c.applyMask(n,y),m(y,r,n),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:n,segments:p}}(e,r,b,p)}},59574:(e,t,r)=>{"use strict";let i=r(39322);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},85917:(e,t)=>{let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},29105:(e,t,r)=>{let i=r(73758),n=r(11986),o=r(84152),a=r(27327),s=r(88330),l=r(85917),c=r(36096),u=r(17354);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){let t,r;let n=h(l.NUMERIC,i.NUMERIC,e),o=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=f(r[a].lastCount+c.length,c.mode)-f(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=f(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r),o=u.find_path(n.map,"start","end"),a=[];for(let e=1;e<o.length-1;e++)a.push(n.table[o[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},36096:(e,t)=>{let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},3517:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},50814:(e,t,r)=>{let i=r(36096),n=r(59797),o=r(13862),a=r(73758),s=r(3517),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return o;let l=o-c(r,e);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,a.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},8035:(e,t,r)=>{"use strict";e.exports=r(28541)},2438:(e,t,r)=>{let i=r(78564);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},19644:(e,t,r)=>{let i=r(57147),n=r(83269).y,o=r(78564);t.render=function(e,t){let r=o.getOptions(t),i=r.rendererOpts,a=o.getImageWidth(e.modules.size,r);i.width=a,i.height=a;let s=new n(i);return o.qrToImageData(s.data,e,r),s},t.renderToDataURL=function(e,r,i){void 0===i&&(i=r,r=void 0),t.renderToBuffer(e,r,function(e,t){e&&i(e);let r="data:image/png;base64,";r+=t.toString("base64"),i(null,r)})},t.renderToBuffer=function(e,r,i){void 0===i&&(i=r,r=void 0);let n=t.render(e,r),o=[];n.on("error",i),n.on("data",function(e){o.push(e)}),n.on("end",function(){i(null,Buffer.concat(o))}),n.pack()},t.renderToFile=function(e,r,n,o){void 0===o&&(o=n,n=void 0);let a=!1,s=(...e)=>{a||(a=!0,o.apply(null,e))},l=i.createWriteStream(e);l.on("error",s),l.on("close",s),t.renderToFileStream(l,r,n)},t.renderToFileStream=function(e,r,i){t.render(r,i).pack().pipe(e)}},40935:(e,t,r)=>{let i=r(78564);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,h),h}},134:(e,t,r)=>{let i=r(40935);t.render=i.render,t.renderToFile=function(e,i,n,o){void 0===o&&(o=n,n=void 0);let a=r(57147),s=t.render(i,n);a.writeFile(e,'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+s,o)}},51224:(e,t,r)=>{let i=r(53537),n=r(27570);t.render=function(e,t,r){return t&&t.small?n.render(e,t,r):i.render(e,t,r)}},27570:(e,t)=>{let r="\x1b[37m",i="\x1b[30m",n="\x1b[0m",o="\x1b[47m"+i,a="\x1b[40m"+r,s=function(e,t,r,i){let n=t+1;return r>=n||i>=n||i<-1||r<-1?"0":r>=t||i>=t||i<0||r<0?"1":e[i*t+r]?"2":"1"},l=function(e,t,r,i){return s(e,t,r,i)+s(e,t,r,i+1)};t.render=function(e,t,s){var c,u;let d=e.modules.size,h=e.modules.data,p=!!(t&&t.inverse),f=t&&t.inverse?a:o,g={"00":n+" "+f,"01":n+(c=p?i:r)+"▄"+f,"02":n+(u=p?r:i)+"▄"+f,10:n+c+"▀"+f,11:" ",12:"▄",20:n+u+"▀"+f,21:"▀",22:"█"},m=n+"\n"+f,b=f;for(let e=-1;e<d+1;e+=2){for(let t=-1;t<d;t++)b+=g[l(h,d,t,e)];b+=g[l(h,d,d,e)]+m}return b+=n,"function"==typeof s&&s(null,b),b}},53537:(e,t)=>{t.render=function(e,t,r){let i=e.modules.size,n=e.modules.data,o="\x1b[47m  \x1b[0m",a="",s=Array(i+3).join(o),l=[,,].join(o);a+=s+"\n";for(let e=0;e<i;++e){a+=o;for(let t=0;t<i;t++)a+=n[e*i+t]?"\x1b[40m  \x1b[0m":o;a+=l+"\n"}return a+=s+"\n","function"==typeof r&&r(null,a),a}},51850:(e,t,r)=>{let i=r(78564),n={WW:" ",WB:"▄",BB:"█",BW:"▀"},o={BB:" ",BW:"▄",WW:"█",WB:"▀"};t.render=function(e,t,r){let a=i.getOptions(t),s=n;("#ffffff"===a.color.dark.hex||"#000000"===a.color.light.hex)&&(s=o);let l=e.modules.size,c=e.modules.data,u="",d=Array(l+2*a.margin+1).join(s.WW);d=Array(a.margin/2+1).join(d+"\n");let h=Array(a.margin+1).join(s.WW);u+=d;for(let e=0;e<l;e+=2){u+=h;for(let t=0;t<l;t++){var p;let r=c[e*l+t],i=c[(e+1)*l+t];u+=(p=s,r&&i?p.BB:r&&!i?p.BW:!r&&i?p.WB:p.WW)}u+=h+"\n"}return u+=d.slice(0,-1),"function"==typeof r&&r(null,u),u},t.renderToFile=function(e,i,n,o){void 0===o&&(o=n,n=void 0);let a=r(57147),s=t.render(i,n);a.writeFile(e,s,o)}},78564:(e,t)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(d=c[o[Math.floor((t-l)/a)*n+Math.floor((r-l)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},28541:(e,t,r)=>{let i=r(22665),n=r(70394),o=r(19644),a=r(51850),s=r(51224),l=r(134);function c(e,t,r){if(void 0===e)throw Error("String required as first argument");if(void 0===r&&(r=t,t={}),"function"!=typeof r){if(i())t=r||{},r=null;else throw Error("Callback required as last argument")}return{opts:t,cb:r}}function u(e){switch(e){case"svg":return l;case"txt":case"utf8":return a;default:return o}}function d(e,t,r){if(!r.cb)return new Promise(function(i,o){try{let a=n.create(t,r.opts);return e(a,r.opts,function(e,t){return e?o(e):i(t)})}catch(e){o(e)}});try{let i=n.create(t,r.opts);return e(i,r.opts,r.cb)}catch(e){r.cb(e)}}t.create=n.create,t.toCanvas=r(5131).toCanvas,t.toString=function(e,t,r){let i=c(e,t,r);return d(function(e){switch(e){case"svg":return l;case"terminal":return s;default:return a}}(i.opts?i.opts.type:void 0).render,e,i)},t.toDataURL=function(e,t,r){let i=c(e,t,r);return d(u(i.opts.type).renderToDataURL,e,i)},t.toBuffer=function(e,t,r){let i=c(e,t,r);return d(u(i.opts.type).renderToBuffer,e,i)},t.toFile=function(e,t,r,n){if("string"!=typeof e||!("string"==typeof t||"object"==typeof t))throw Error("Invalid argument");if(arguments.length<3&&!i())throw Error("Too few arguments provided");let o=c(t,r,n);return d(u(o.opts.type||e.slice((e.lastIndexOf(".")-1>>>0)+2).toLowerCase()).renderToFile.bind(null,e),t,o)},t.toFileStream=function(e,t,r){if(arguments.length<2)throw Error("Too few arguments provided");let i=c(t,r,e.emit.bind(e,"error"));d(u("png").renderToFileStream.bind(null,e),t,i)}},2813:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(37751),n=r.n(i)},16274:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(48026),n=r.n(i)},86843:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createProxy",{enumerable:!0,get:function(){return i}});let i=r(18195).createClientModuleProxy},14409:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RSC_HEADER:function(){return r},ACTION:function(){return i},NEXT_ROUTER_STATE_TREE:function(){return n},NEXT_ROUTER_PREFETCH_HEADER:function(){return o},NEXT_URL:function(){return a},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_VARY_HEADER:function(){return l},FLIGHT_PARAMETERS:function(){return c},NEXT_RSC_UNION_QUERY:function(){return u},NEXT_DID_POSTPONE_HEADER:function(){return d}});let r="RSC",i="Next-Action",n="Next-Router-State-Tree",o="Next-Router-Prefetch",a="Next-Url",s="text/x-component",l=r+", "+n+", "+o+", "+a,c=[[r],[n],[o]],u="_rsc",d="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77519:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/app-router.js")},62563:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/error-boundary.js")},48096:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return i},isDynamicServerError:function(){return n}});let r="DYNAMIC_SERVER_USAGE";class i extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72517:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/layout-router.js")},31150:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/not-found-boundary.js")},80571:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/render-from-template-context.js")},88650:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createSearchParamsBailoutProxy",{enumerable:!0,get:function(){return n}});let i=r(72973);function n(){return new Proxy({},{get(e,t){"string"==typeof t&&(0,i.staticGenerationBailout)("searchParams."+t)}})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72973:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isStaticGenBailoutError:function(){return s},staticGenerationBailout:function(){return c}});let i=r(48096),n=r(45869),o="NEXT_STATIC_GEN_BAILOUT";class a extends Error{constructor(...e){super(...e),this.code=o}}function s(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===o}function l(e,t){let{dynamic:r,link:i}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(i?" See more info here: "+i:"")}let c=(e,t)=>{let{dynamic:r,link:o}=void 0===t?{}:t,s=n.staticGenerationAsyncStorage.getStore();if(!s)return!1;if(s.forceStatic)return!0;if(s.dynamicShouldError)throw new a(l(e,{link:o,dynamic:null!=r?r:"error"}));let c=l(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==s.postpone||s.postpone.call(s,e),s.revalidate=0,s.isStaticGeneration){let t=new i.DynamicServerError(c);throw s.dynamicUsageDescription=e,s.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2336:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js")},96987:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/image-component.js")},48026:(e,t,r)=>{"use strict";let{createProxy:i}=r(86843);e.exports=i("/Users/waliba/Downloads/Builds/obol-challenge/node_modules/next/dist/client/link.js")},37363:e=>{"use strict";(()=>{"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var n={},o=t.split(i),a=(r||{}).decode||e,s=0;s<o.length;s++){var l=o[s],c=l.indexOf("=");if(!(c<0)){var u=l.substr(0,c).trim(),d=l.substr(++c,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==n[u]&&(n[u]=function(e,t){try{return t(e)}catch(t){return e}}(d,a))}}return n},t.serialize=function(e,t,i){var o=i||{},a=o.encode||r;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var s=a(t);if(s&&!n.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(c)}if(o.domain){if(!n.test(o.domain))throw TypeError("option domain is invalid");l+="; Domain="+o.domain}if(o.path){if(!n.test(o.path))throw TypeError("option path is invalid");l+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(l+="; HttpOnly"),o.secure&&(l+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var e=decodeURIComponent,r=encodeURIComponent,i=/; */,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},76358:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var i=e[r];if("*"===i||"+"===i||"?"===i){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===i){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===i){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===i){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===i){for(var n="",o=r+1;o<e.length;){var a=e.charCodeAt(o);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a){n+=e[o++];continue}break}if(!n)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:n}),r=o;continue}if("("===i){var s=1,l="",o=r+1;if("?"===e[o])throw TypeError('Pattern cannot start with "?" at '+o);for(;o<e.length;){if("\\"===e[o]){l+=e[o++]+e[o++];continue}if(")"===e[o]){if(0==--s){o++;break}}else if("("===e[o]&&(s++,"?"!==e[o+1]))throw TypeError("Capturing groups are not allowed at "+o);l+=e[o++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!l)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=o;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),i=t.prefixes,n=void 0===i?"./":i,a="[^"+o(t.delimiter||"/#?")+"]+?",s=[],l=0,c=0,u="",d=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},h=function(e){var t=d(e);if(void 0!==t)return t;var i=r[c];throw TypeError("Unexpected "+i.type+" at "+i.index+", expected "+e)},p=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var f=d("CHAR"),g=d("NAME"),m=d("PATTERN");if(g||m){var b=f||"";-1===n.indexOf(b)&&(u+=b,b=""),u&&(s.push(u),u=""),s.push({name:g||l++,prefix:b,suffix:"",pattern:m||a,modifier:d("MODIFIER")||""});continue}var w=f||d("ESCAPED_CHAR");if(w){u+=w;continue}if(u&&(s.push(u),u=""),d("OPEN")){var b=p(),y=d("NAME")||"",v=d("PATTERN")||"",x=p();h("CLOSE"),s.push({name:y||(v?l++:""),pattern:y&&!v?a:v,prefix:b,suffix:x,modifier:d("MODIFIER")||""});continue}h("END")}return s}function i(e,t){void 0===t&&(t={});var r=a(t),i=t.encode,n=void 0===i?function(e){return e}:i,o=t.validate,s=void 0===o||o,l=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",i=0;i<e.length;i++){var o=e[i];if("string"==typeof o){r+=o;continue}var a=t?t[o.name]:void 0,c="?"===o.modifier||"*"===o.modifier,u="*"===o.modifier||"+"===o.modifier;if(Array.isArray(a)){if(!u)throw TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===a.length){if(c)continue;throw TypeError('Expected "'+o.name+'" to not be empty')}for(var d=0;d<a.length;d++){var h=n(a[d],o);if(s&&!l[i].test(h))throw TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+h+'"');r+=o.prefix+h+o.suffix}continue}if("string"==typeof a||"number"==typeof a){var h=n(String(a),o);if(s&&!l[i].test(h))throw TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+h+'"');r+=o.prefix+h+o.suffix;continue}if(!c){var p=u?"an array":"a string";throw TypeError('Expected "'+o.name+'" to be '+p)}}return r}}function n(e,t,r){void 0===r&&(r={});var i=r.decode,n=void 0===i?function(e){return e}:i;return function(r){var i=e.exec(r);if(!i)return!1;for(var o=i[0],a=i.index,s=Object.create(null),l=1;l<i.length;l++)!function(e){if(void 0!==i[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=i[e].split(r.prefix+r.suffix).map(function(e){return n(e,r)}):s[r.name]=n(i[e],r)}}(l);return{path:o,index:a,params:s}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var i=r.strict,n=void 0!==i&&i,s=r.start,l=r.end,c=r.encode,u=void 0===c?function(e){return e}:c,d="["+o(r.endsWith||"")+"]|$",h="["+o(r.delimiter||"/#?")+"]",p=void 0===s||s?"^":"",f=0;f<e.length;f++){var g=e[f];if("string"==typeof g)p+=o(u(g));else{var m=o(u(g.prefix)),b=o(u(g.suffix));if(g.pattern){if(t&&t.push(g),m||b){if("+"===g.modifier||"*"===g.modifier){var w="*"===g.modifier?"?":"";p+="(?:"+m+"((?:"+g.pattern+")(?:"+b+m+"(?:"+g.pattern+"))*)"+b+")"+w}else p+="(?:"+m+"("+g.pattern+")"+b+")"+g.modifier}else p+="("+g.pattern+")"+g.modifier}else p+="(?:"+m+b+")"+g.modifier}}if(void 0===l||l)n||(p+=h+"?"),p+=r.endsWith?"(?="+d+")":"$";else{var y=e[e.length-1],v="string"==typeof y?h.indexOf(y[y.length-1])>-1:void 0===y;n||(p+="(?:"+h+"(?="+d+"))?"),v||(p+="(?="+h+"|"+d+")")}return new RegExp(p,a(r))}function l(e,t,i){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return l(e,t,i).source}).join("|")+")",a(i)):s(r(e,i),t,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return i(r(e,t),t)},t.tokensToFunction=i,t.match=function(e,t){var r=[];return n(l(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=s,t.pathToRegexp=l},70337:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return d},normalizeMetadataRoute:function(){return h}});let i=r(48488),n=function(e){return e&&e.__esModule?e:{default:e}}(r(24084)),o=r(99017),a=r(4654),s=r(16325),l=r(29393),c=r(69716);function u(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function d(e,t,r){let i=(0,l.normalizeAppPath)(e),s=(0,a.getNamedRouteRegex)(i,!1),d=(0,o.interpolateDynamicPath)(i,t,s),h=u(e),p=h?`-${h}`:"",{name:f,ext:g}=n.default.parse(r);return(0,c.normalizePathSep)(n.default.join(d,`${f}${p}${g}`))}function h(e){if(!(0,i.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":e.endsWith("/sitemap")?t+=".xml":r=u(e.slice(0,-(n.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:o,name:a,ext:s}=n.default.parse(t),l=(0,i.isStaticMetadataRoute)(e);t=n.default.posix.join(o,`${a}${r?`-${r}`:""}${s}`,l?"":"[[...__metadata_id__]]","route")}return t}},48488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return n},isMetadataRouteFile:function(){return s},isStaticMetadataRouteFile:function(){return l},isStaticMetadataRoute:function(){return c},isMetadataRoute:function(){return u}});let i=r(69716),n={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},o=["js","jsx","ts","tsx"],a=e=>`(?:${e.join("|")})`;function s(e,t,r){let o=[RegExp(`^[\\\\/]robots${r?`\\.${a(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${a(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${a(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${n.icon.filename}\\d?${r?`\\.${a(t.concat(n.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${n.apple.filename}\\d?${r?`\\.${a(t.concat(n.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${n.openGraph.filename}\\d?${r?`\\.${a(t.concat(n.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${n.twitter.filename}\\d?${r?`\\.${a(t.concat(n.twitter.extensions))}$`:""}`)],s=(0,i.normalizePathSep)(e);return o.some(e=>e.test(s))}function l(e){return s(e,[],!0)}function c(e){return"/robots"===e||"/manifest"===e||l(e)}function u(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,o,!1)}},10892:(e,t,r)=>{"use strict";function i(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:i}=r(37363);return i(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return i}})},68300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{renderToReadableStream:function(){return i.renderToReadableStream},decodeReply:function(){return i.decodeReply},decodeAction:function(){return i.decodeAction},decodeFormState:function(){return i.decodeFormState},AppRouter:function(){return n.default},LayoutRouter:function(){return o.default},RenderFromTemplateContext:function(){return a.default},staticGenerationAsyncStorage:function(){return s.staticGenerationAsyncStorage},requestAsyncStorage:function(){return l.requestAsyncStorage},actionAsyncStorage:function(){return c.actionAsyncStorage},staticGenerationBailout:function(){return u.staticGenerationBailout},createSearchParamsBailoutProxy:function(){return h.createSearchParamsBailoutProxy},serverHooks:function(){return p},preloadStyle:function(){return m.preloadStyle},preloadFont:function(){return m.preloadFont},preconnect:function(){return m.preconnect},taintObjectReference:function(){return b.taintObjectReference},StaticGenerationSearchParamsBailoutProvider:function(){return d.default},NotFoundBoundary:function(){return f.NotFoundBoundary},patchFetch:function(){return v}});let i=r(18195),n=w(r(77519)),o=w(r(72517)),a=w(r(80571)),s=r(45869),l=r(54580),c=r(72934),u=r(72973),d=w(r(2336)),h=r(88650),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}(r(48096)),f=r(31150),g=r(99678);r(62563);let m=r(31806),b=r(22730);function w(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function v(){return(0,g.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:s.staticGenerationAsyncStorage})}},31806:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{preloadStyle:function(){return n},preloadFont:function(){return o},preconnect:function(){return a}});let i=function(e){return e&&e.__esModule?e:{default:e}}(r(25091));function n(e,t){let r={as:"style"};"string"==typeof t&&(r.crossOrigin=t),i.default.preload(e,r)}function o(e,t,r){let n={as:"font",type:t};"string"==typeof r&&(n.crossOrigin=r),i.default.preload(e,n)}function a(e,t){i.default.preconnect(e,"string"==typeof t?{crossOrigin:t}:void 0)}},22730:(e,t,r)=>{"use strict";function i(){throw Error("Taint can only be used with the taint flag.")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{taintObjectReference:function(){return n},taintUniqueValue:function(){return o}}),r(40002);let n=i,o=i},68988:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return n},isInterceptionRouteAppPath:function(){return o},extractInterceptionRouteInformation:function(){return a}});let i=r(29393),n=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>n.find(t=>e.startsWith(t)))}function a(e){let t,r,o;for(let i of e.split("/"))if(r=n.find(e=>i.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,i.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let a=t.split("/");if(a.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=a.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},50482:(e,t,r)=>{"use strict";e.exports=r(20399)},25091:(e,t,r)=>{"use strict";e.exports=r(50482).vendored["react-rsc"].ReactDOM},25036:(e,t,r)=>{"use strict";e.exports=r(50482).vendored["react-rsc"].ReactJsxRuntime},18195:(e,t,r)=>{"use strict";e.exports=r(50482).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},40002:(e,t,r)=>{"use strict";e.exports=r(50482).vendored["react-rsc"].React},99017:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeVercelUrl:function(){return h},interpolateDynamicPath:function(){return p},normalizeDynamicRouteParams:function(){return f},getUtils:function(){return g}});let i=r(57310),n=r(73935),o=r(48237),a=r(4654),s=r(87158),l=r(62762),c=r(5545),u=r(29393),d=r(82740);function h(e,t,r,n,o){if(n&&t&&o){let t=(0,i.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==d.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(d.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(o.groups)).includes(e))&&delete t.query[e];e.url=(0,i.format)(t)}}function p(e,t,r){if(!r)return e;for(let i of Object.keys(r.groups)){let{optional:n,repeat:o}=r.groups[i],a=`[${o?"...":""}${i}]`;n&&(a=`[${a}]`);let s=e.indexOf(a);if(s>-1){let r;let n=t[i];r=Array.isArray(n)?n.map(e=>e&&encodeURIComponent(e)).join("/"):n?encodeURIComponent(n):"",e=e.slice(0,s)+r+e.slice(s+a.length)}}return e}function f(e,t,r,i){let n=!0;return r?{params:e=Object.keys(r.groups).reduce((o,a)=>{let s=e[a];"string"==typeof s&&(s=(0,u.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,u.normalizeRscURL)(e)),e)));let l=i[a],c=r.groups[a].optional;return((Array.isArray(l)?l.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(l))||void 0===s&&!(c&&t))&&(n=!1),c&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${a}]]`))&&(s=void 0,delete e[a]),s&&"string"==typeof s&&r.groups[a].repeat&&(s=s.split("/")),s&&(o[a]=s),o},{}),hasValidParams:n}:{params:e,hasValidParams:!1}}function g({page:e,i18n:t,basePath:r,rewrites:i,pageIsDynamic:u,trailingSlash:g,caseSensitive:m}){let b,w,y;return u&&(b=(0,a.getNamedRouteRegex)(e,!1),y=(w=(0,s.getRouteMatcher)(b))(e)),{handleRewrites:function(a,s){let d={},h=s.pathname,p=i=>{let c=(0,o.getPathMatch)(i.source+(g?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!m})(s.pathname);if((i.has||i.missing)&&c){let e=(0,l.matchHas)(a,s.query,i.has,i.missing);e?Object.assign(c,e):c=!1}if(c){let{parsedDestination:o,destQuery:a}=(0,l.prepareDestination)({appendParamsToQuery:!0,destination:i.destination,params:c,query:s.query});if(o.protocol)return!0;if(Object.assign(d,a,c),Object.assign(s.query,o.query),delete o.query,Object.assign(s,o),h=s.pathname,r&&(h=h.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,n.normalizeLocalePath)(h,t.locales);h=e.pathname,s.query.nextInternalLocale=e.detectedLocale||c.nextInternalLocale}if(h===e)return!0;if(u&&w){let e=w(h);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of i.beforeFiles||[])p(e);if(h!==e){let t=!1;for(let e of i.afterFiles||[])if(t=p(e))break;if(!t&&!(()=>{let t=(0,c.removeTrailingSlash)(h||"");return t===(0,c.removeTrailingSlash)(e)||(null==w?void 0:w(t))})()){for(let e of i.fallback||[])if(t=p(e))break}}return d},defaultRouteRegex:b,dynamicRouteMatcher:w,defaultRouteMatches:y,getParamsFromRouteMatches:function(e,r,i){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:n}=b;return{re:{exec:o=>{let a=Object.fromEntries(new URLSearchParams(o)),s=t&&i&&a["1"]===i;for(let e of Object.keys(a)){let t=a[e];e!==d.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(d.NEXT_QUERY_PARAM_PREFIX)&&(a[e.substring(d.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete a[e])}let l=Object.keys(n||{}),c=e=>{if(t){let n=Array.isArray(e),o=n?e[0]:e;if("string"==typeof o&&t.locales.some(e=>e.toLowerCase()===o.toLowerCase()&&(i=e,r.locale=i,!0)))return n&&e.splice(0,1),!n||0===e.length}return!1};return l.every(e=>a[e])?l.reduce((t,r)=>{let i=null==n?void 0:n[r];return i&&!c(a[r])&&(t[e[i].pos]=a[r]),t},{}):Object.keys(a).reduce((e,t)=>{if(!c(a[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:a[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>f(e,t,b,y),normalizeVercelUrl:(e,t,r)=>h(e,t,r,u,b),interpolateDynamicPath:(e,t)=>p(e,t,b)}}},7436:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return n}});let r=/[|\\{}()[\]^$+*?.-]/,i=/[|\\{}()[\]^$+*?.-]/g;function n(e){return r.test(e)?e.replace(i,"\\$&"):e}},34470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(46031);let i=r(76184),n=r(64180);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,c,{src:u,sizes:d,unoptimized:h=!1,priority:p=!1,loading:f,className:g,quality:m,width:b,height:w,fill:y=!1,style:v,onLoad:x,onLoadingComplete:C,placeholder:_="empty",blurDataURL:E,fetchPriority:P,layout:S,objectFit:R,objectPosition:O,lazyBoundary:A,lazyRoot:T,...k}=e,{imgConf:I,showAltText:j,blurComplete:$,defaultLoader:M}=t,N=I||n.imageConfigDefault;if("allSizes"in N)s=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);s={...N,allSizes:e,deviceSizes:t}}let L=k.loader||M;delete k.loader,delete k.srcSet;let D="__next_img_default"in L;if(D){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!d&&(d=t)}let U="",z=a(b),B=a(w);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,U=e.src,!y){if(z||B){if(z&&!B){let t=z/e.width;B=Math.round(e.height*t)}else if(!z&&B){let t=B/e.height;z=Math.round(e.width*t)}}else z=e.width,B=e.height}}let F=!p&&("lazy"===f||void 0===f);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(h=!0,F=!1),s.unoptimized&&(h=!0),D&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(h=!0),p&&(P="high");let W=a(m),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:O}:{},j?{}:{color:"transparent"},v),Z=$||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:z,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+_+'")',V=Z?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},G=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:s,src:u,unoptimized:h,width:z,quality:W,sizes:d,loader:L});return{props:{...k,loading:F?"lazy":f,fetchPriority:P,width:z,height:B,decoding:"async",className:g,style:{...H,...V},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:h,priority:p,placeholder:_,fill:y}}}},16325:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function i(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return i}})},73935:(e,t)=>{"use strict";function r(e,t){let r;let i=e.split("/");return(t||[]).some(t=>!!i[1]&&i[1].toLowerCase()===t.toLowerCase()&&(r=t,i.splice(1,1),e=i.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},76184:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i?40*i:t,l=n?40*n:r,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},64180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},37751:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return l}});let i=r(46783),n=r(34470),o=r(96987),a=i._(r(94534)),s=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=o.Image},94534:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},24084:(e,t,r)=>{"use strict";let i;i=r(71017),e.exports=i},75940:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},69716:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},29393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return a}});let i=r(75940),n=r(65458);function o(e){return(0,i.ensureLeadingSlash)(e.split("/").reduce((e,t,r,i)=>!t||(0,n.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===i.length-1?e:e+"/"+t,""))}function a(e){return e.replace(/\.rsc($|\?)/,"$1")}},60713:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return n}}),r(22881);let i=r(61662);function n(e,t){let r=new URL("http://n"),n=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:o,searchParams:a,search:s,hash:l,href:c,origin:u}=new URL(e,n);if(u!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:(0,i.searchParamsToUrlQuery)(a),search:s,hash:l,href:c.slice(r.origin.length)}}},48223:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return o}});let i=r(61662),n=r(60713);function o(e){if(e.startsWith("/"))return(0,n.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,i.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},48237:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return n}});let i=r(76358);function n(e,t){let r=[],n=(0,i.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),o=(0,i.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(n.source),n.flags):n,r);return(e,i)=>{if("string"!=typeof e)return!1;let n=o(e);if(!n)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete n.params[e.name];return{...i,...n.params}}}},62762:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchHas:function(){return u},compileNonPath:function(){return d},prepareDestination:function(){return h}});let i=r(76358),n=r(7436),o=r(48223),a=r(68988),s=r(14409),l=r(10892);function c(e){return e.replace(/__ESC_COLON_/gi,":")}function u(e,t,r,i){void 0===r&&(r=[]),void 0===i&&(i=[]);let n={},o=r=>{let i;let o=r.key;switch(r.type){case"header":o=o.toLowerCase(),i=e.headers[o];break;case"cookie":i="cookies"in e?e.cookies[r.key]:(0,l.getCookieParser)(e.headers)()[r.key];break;case"query":i=t[o];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};i=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&i)return n[function(e){let t="";for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);(i>64&&i<91||i>96&&i<123)&&(t+=e[r])}return t}(o)]=i,!0;if(i){let e=RegExp("^"+r.value+"$"),t=Array.isArray(i)?i.slice(-1)[0].match(e):i.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{n[e]=t.groups[e]}):"host"===r.type&&t[0]&&(n.host=t[0])),!0}return!1};return!!r.every(e=>o(e))&&!i.some(e=>o(e))&&n}function d(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,i.compile)("/"+e,{validate:!1})(t).slice(1)}function h(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let l=e.destination;for(let t of Object.keys({...e.params,...r}))l=l.replace(RegExp(":"+(0,n.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let u=(0,o.parseUrl)(l),h=u.query,p=c(""+u.pathname+(u.hash||"")),f=c(u.hostname||""),g=[],m=[];(0,i.pathToRegexp)(p,g),(0,i.pathToRegexp)(f,m);let b=[];g.forEach(e=>b.push(e.name)),m.forEach(e=>b.push(e.name));let w=(0,i.compile)(p,{validate:!1}),y=(0,i.compile)(f,{validate:!1});for(let[t,r]of Object.entries(h))Array.isArray(r)?h[t]=r.map(t=>d(c(t),e.params)):"string"==typeof r&&(h[t]=d(c(r),e.params));let v=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!v.some(e=>b.includes(e)))for(let t of v)t in h||(h[t]=e.params[t]);if((0,a.isInterceptionRouteAppPath)(p))for(let t of p.split("/")){let r=a.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{let[r,i]=(t=w(e.params)).split("#",2);u.hostname=y(e.params),u.pathname=r,u.hash=(i?"#":"")+(i||""),delete u.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return u.query={...r,...u.query},{newUrl:t,destQuery:h,parsedDestination:u}}},61662:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function i(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,i(e))):t.set(r,i(n))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return n},assign:function(){return o}})},5545:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},87158:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return n}});let i=r(22881);function n(e){let{re:t,groups:r}=e;return e=>{let n=t.exec(e);if(!n)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new i.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],i=n[t.pos];void 0!==i&&(a[e]=~i.indexOf("/")?i.split("/").map(e=>o(e)):t.repeat?[o(i)]:o(i))}),a}}},4654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return d},getNamedMiddlewareRegex:function(){return h}});let i=r(68988),n=r(7436),o=r(5545);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:i,repeat:l}=a(o[1]);return r[e]={pos:s++,repeat:l,optional:i},"/"+(0,n.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,n.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=a(o[1]);return r[e]={pos:s++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:i,routeKeys:o,keyPrefix:s}=e,{key:l,optional:c,repeat:u}=a(i),d=l.replace(/\W/g,"");s&&(d=""+s+d);let h=!1;(0===d.length||d.length>30)&&(h=!0),isNaN(parseInt(d.slice(0,1)))||(h=!0),h&&(d=r()),s?o[d]=""+s+l:o[d]=l;let p=t?(0,n.escapeStringRegexp)(t):"";return u?c?"(?:/"+p+"(?<"+d+">.+?))?":"/"+p+"(?<"+d+">.+?)":"/"+p+"(?<"+d+">[^/]+?)"}function u(e,t){let r;let a=(0,o.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return c({getSafeRouteKey:s,interceptionMarker:r,segment:o[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return o?c({getSafeRouteKey:s,segment:o[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,n.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function d(e,t){let r=u(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=s(e),{catchAll:i=!0}=t;if("/"===r)return{namedRegex:"^/"+(i?".*":"")+"$"};let{namedParameterizedRoute:n}=u(e,!1);return{namedRegex:"^"+n+(i?"(?:(/.*)?)":"")+"$"}}},65458:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return i},DEFAULT_SEGMENT_KEY:function(){return n}});let i="__PAGE__",n="__DEFAULT__"},22881:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return i},isAbsoluteUrl:function(){return o},getLocationOrigin:function(){return a},getURL:function(){return s},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return u},loadGetInitialProps:function(){return d},SP:function(){return h},ST:function(){return p},DecodeError:function(){return f},NormalizeError:function(){return g},PageNotFoundError:function(){return m},MissingStaticPage:function(){return b},MiddlewareNotFoundError:function(){return w},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return function(){for(var i=arguments.length,n=Array(i),o=0;o<i;o++)n[o]=arguments[o];return r||(r=!0,t=e(...n)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>n.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&c(r))return i;if(!i)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+i+'" instead.');return i}let h="undefined"!=typeof performance,p=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class f extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},46031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},65651:(e,t,r)=>{"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}r.d(t,{Z:()=>i})},68366:(e,t,r)=>{"use strict";r.d(t,{mv:()=>s,iN:()=>l});let i=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBraileLabel="",this.ariaBraileRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}},n=new WeakMap,o=e=>{let t=n.get(e);return void 0===t&&n.set(e,t=new Map),t},a=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(o(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return"closed"===this.__shadowRootMode?null:this.__shadowRoot}setAttribute(e,t){o(this).set(e,String(t))}removeAttribute(e){o(this).delete(e)}toggleAttribute(e,t){if(this.hasAttribute(e)){if(void 0===t||!t)return this.removeAttribute(e),!1}else{if(void 0!==t&&!t)return!1;this.setAttribute(e,"")}return!0}hasAttribute(e){return o(this).has(e)}attachShadow(e){let t={host:this};return this.__shadowRootMode=e.mode,e&&"open"===e.mode&&(this.__shadowRoot=t),t}attachInternals(){if(null!==this.__internals)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let e=new i(this);return this.__internals=e,e}getAttribute(e){return o(this).get(e)??null}},s=class extends a{},l=new class{constructor(){this.__definitions=new Map}define(e,t){if(this.__definitions.has(e))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){let t=this.__definitions.get(e);return t?.ctor}}},85222:(e,t,r)=>{"use strict";function i(e,t,{checkForDefaultPrevented:r=!0}={}){return function(i){if(null==e||e(i),!1===r||!i.defaultPrevented)return null==t?void 0:t(i)}}r.d(t,{M:()=>i})},33320:(e,t,r)=>{"use strict";r.d(t,{Ee:()=>w,NY:()=>y,fC:()=>b});var i=r(65651),n=r(3729),o=r(98462),a=r(2256),s=r(16069),l=r(62409);let c="Avatar",[u,d]=(0,o.b)(c),[h,p]=u(c),f=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,...o}=e,[a,s]=(0,n.useState)("idle");return(0,n.createElement)(h,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:s},(0,n.createElement)(l.WV.span,(0,i.Z)({},o,{ref:t})))}),g=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:c=()=>{},...u}=e,d=p("AvatarImage",r),h=function(e){let[t,r]=(0,n.useState)("idle");return(0,s.b)(()=>{if(!e){r("error");return}let t=!0,i=new window.Image,n=e=>()=>{t&&r(e)};return r("loading"),i.onload=n("loaded"),i.onerror=n("error"),i.src=e,()=>{t=!1}},[e]),t}(o),f=(0,a.W)(e=>{c(e),d.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==h&&f(h)},[h,f]),"loaded"===h?(0,n.createElement)(l.WV.img,(0,i.Z)({},u,{ref:t,src:o})):null}),m=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:o,...a}=e,s=p("AvatarFallback",r),[c,u]=(0,n.useState)(void 0===o);return(0,n.useEffect)(()=>{if(void 0!==o){let e=window.setTimeout(()=>u(!0),o);return()=>window.clearTimeout(e)}},[o]),c&&"loaded"!==s.imageLoadingStatus?(0,n.createElement)(l.WV.span,(0,i.Z)({},a,{ref:t})):null}),b=f,w=g,y=m},31405:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,e:()=>o});var i=r(3729);function n(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,i.useCallback)(n(...e),e)}},98462:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var i=r(3729);function n(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,i.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,i.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let o=(0,i.createContext)(n),a=r.length;function s(t){let{scope:r,children:n,...s}=t,l=(null==r?void 0:r[e][a])||o,c=(0,i.useMemo)(()=>s,Object.values(s));return(0,i.createElement)(l.Provider,{value:c},n)}return r=[...r,n],s.displayName=t+"Provider",[s,function(r,s){let l=(null==s?void 0:s[e][a])||o,c=(0,i.useContext)(l);if(c)return c;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:i})=>{let n=r(e)[`__scope${i}`];return{...t,...n}},{});return(0,i.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}},44155:(e,t,r)=>{"use strict";let i;r.d(t,{I0:()=>b,XB:()=>h,fC:()=>m});var n=r(65651),o=r(3729),a=r(85222),s=r(62409),l=r(31405),c=r(2256);let u="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=(0,o.forwardRef)((e,t)=>{var r;let{disableOutsidePointerEvents:h=!1,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:b,onInteractOutside:w,onDismiss:y,...v}=e,x=(0,o.useContext)(d),[C,_]=(0,o.useState)(null),E=null!==(r=null==C?void 0:C.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),S=(0,l.e)(t,e=>_(e)),R=Array.from(x.layers),[O]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),A=R.indexOf(O),T=C?R.indexOf(C):-1,k=x.layersWithOutsidePointerEventsDisabled.size>0,I=T>=A,j=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e),i=(0,o.useRef)(!1),n=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!i.current){let i={originalEvent:e};function o(){g("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",n.current),n.current=o,t.addEventListener("click",n.current,{once:!0})):o()}else t.removeEventListener("click",n.current);i.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",n.current)}},[t,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...x.branches].some(e=>e.contains(t));!I||r||(null==m||m(e),null==w||w(e),e.defaultPrevented||null==y||y())},E),$=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e),i=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!i.current&&g("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==b||b(e),null==w||w(e),e.defaultPrevented||null==y||y())},E);return function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[r,t])}(e=>{T!==x.layers.size-1||(null==p||p(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},E),(0,o.useEffect)(()=>{if(C)return h&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(i=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(C)),x.layers.add(C),f(),()=>{h&&1===x.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=i)}},[C,E,h,x]),(0,o.useEffect)(()=>()=>{C&&(x.layers.delete(C),x.layersWithOutsidePointerEventsDisabled.delete(C),f())},[C,x]),(0,o.useEffect)(()=>{let e=()=>P({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,o.createElement)(s.WV.div,(0,n.Z)({},v,{ref:S,style:{pointerEvents:k?I?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,$.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,$.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,j.onPointerDownCapture)}))}),p=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(d),i=(0,o.useRef)(null),a=(0,l.e)(t,i);return(0,o.useEffect)(()=>{let e=i.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,o.createElement)(s.WV.div,(0,n.Z)({},e,{ref:a}))});function f(){let e=new CustomEvent(u);document.dispatchEvent(e)}function g(e,t,r,{discrete:i}){let n=r.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),i?(0,s.jH)(n,o):n.dispatchEvent(o)}let m=h,b=p},31179:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});var i=r(65651),n=r(3729),o=r(81202),a=r(62409);let s=(0,n.forwardRef)((e,t)=>{var r;let{container:s=null==globalThis?void 0:null===(r=globalThis.document)||void 0===r?void 0:r.body,...l}=e;return s?o.createPortal((0,n.createElement)(a.WV.div,(0,i.Z)({},l,{ref:t})),s):null})},43234:(e,t,r)=>{"use strict";r.d(t,{z:()=>s});var i=r(3729),n=r(81202),o=r(31405),a=r(16069);let s=e=>{let{present:t,children:r}=e,s=function(e){var t,r;let[o,s]=(0,i.useState)(),c=(0,i.useRef)({}),u=(0,i.useRef)(e),d=(0,i.useRef)("none"),[h,p]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,i.useReducer)((e,t)=>{let i=r[e][t];return null!=i?i:e},t));return(0,i.useEffect)(()=>{let e=l(c.current);d.current="mounted"===h?e:"none"},[h]),(0,a.b)(()=>{let t=c.current,r=u.current;if(r!==e){let i=d.current,n=l(t);e?p("MOUNT"):"none"===n||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):r&&i!==n?p("ANIMATION_OUT"):p("UNMOUNT"),u.current=e}},[e,p]),(0,a.b)(()=>{if(o){let e=e=>{let t=l(c.current).includes(e.animationName);e.target===o&&t&&(0,n.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===o&&(d.current=l(c.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:(0,i.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),s(e)},[])}}(t),c="function"==typeof r?r({present:s.isPresent}):i.Children.only(r),u=(0,o.e)(s.ref,c.ref);return"function"==typeof r||s.isPresent?(0,i.cloneElement)(c,{ref:u}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},62409:(e,t,r)=>{"use strict";r.d(t,{WV:()=>s,jH:()=>l});var i=r(65651),n=r(3729),o=r(81202),a=r(32751);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,n.forwardRef)((e,r)=>{let{asChild:o,...s}=e,l=o?a.g7:t;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(l,(0,i.Z)({},s,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},32751:(e,t,r)=>{"use strict";r.d(t,{A4:()=>l,g7:()=>a});var i=r(65651),n=r(3729),o=r(31405);let a=(0,n.forwardRef)((e,t)=>{let{children:r,...o}=e,a=n.Children.toArray(r),l=a.find(c);if(l){let e=l.props.children,r=a.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(s,(0,i.Z)({},o,{ref:t}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,r):null)}return(0,n.createElement)(s,(0,i.Z)({},o,{ref:t}),r)});a.displayName="Slot";let s=(0,n.forwardRef)((e,t)=>{let{children:r,...i}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...function(e,t){let r={...t};for(let i in t){let n=e[i],o=t[i];/^on[A-Z]/.test(i)?n&&o?r[i]=(...e)=>{o(...e),n(...e)}:n&&(r[i]=n):"style"===i?r[i]={...n,...o}:"className"===i&&(r[i]=[n,o].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,o.F)(t,r.ref):r.ref}):n.Children.count(r)>1?n.Children.only(null):null});s.displayName="SlotClone";let l=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function c(e){return(0,n.isValidElement)(e)&&e.type===l}},48332:(e,t,r)=>{"use strict";r.d(t,{aU:()=>X,x8:()=>Q,dk:()=>K,zt:()=>V,fC:()=>Y,Dx:()=>q,l_:()=>G});var i=r(65651),n=r(3729),o=r(81202),a=r(85222),s=r(31405),l=r(98462),c=r(32751),u=r(44155),d=r(31179),h=r(43234),p=r(62409),f=r(2256),g=r(33183),m=r(16069),b=r(87298);let w="ToastProvider",[y,v,x]=function(e){let t=e+"CollectionProvider",[r,i]=(0,l.b)(t),[o,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:i}=e,o=a(u,r),l=(0,s.e)(t,o.collectionRef);return n.createElement(c.g7,{ref:l},i)}),h=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,i=n.useRef(null),a=n.useRef(new Map).current;return n.createElement(o,{scope:t,itemMap:a,collectionRef:i},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:i,...o}=e,l=n.useRef(null),u=(0,s.e)(t,l),d=a(h,r);return n.useEffect(()=>(d.itemMap.set(l,{ref:l,...o}),()=>void d.itemMap.delete(l))),n.createElement(c.g7,{[p]:"",ref:u},i)})},function(t){let r=a(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}("Toast"),[C,_]=(0,l.b)("Toast",[x]),[E,P]=C(w),S=e=>{let{__scopeToast:t,label:r="Notification",duration:i=5e3,swipeDirection:o="right",swipeThreshold:a=50,children:s}=e,[l,c]=(0,n.useState)(null),[u,d]=(0,n.useState)(0),h=(0,n.useRef)(!1),p=(0,n.useRef)(!1);return(0,n.createElement)(y.Provider,{scope:t},(0,n.createElement)(E,{scope:t,label:r,duration:i,swipeDirection:o,swipeThreshold:a,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:(0,n.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,n.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p},s))};S.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${w}\`. Expected non-empty \`string\`.`):null};let R=["F8"],O="toast.viewportPause",A="toast.viewportResume",T=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:o=R,label:a="Notifications ({hotkey})",...l}=e,c=P("ToastViewport",r),d=v(r),h=(0,n.useRef)(null),f=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(0,n.useRef)(null),b=(0,s.e)(t,m,c.onViewportChange),w=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=c.toastCount>0;(0,n.useEffect)(()=>{let e=e=>{var t;o.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),(0,n.useEffect)(()=>{let e=h.current,t=m.current;if(x&&e&&t){let r=()=>{if(!c.isClosePausedRef.current){let e=new CustomEvent(O);t.dispatchEvent(e),c.isClosePausedRef.current=!0}},i=()=>{if(c.isClosePausedRef.current){let e=new CustomEvent(A);t.dispatchEvent(e),c.isClosePausedRef.current=!1}},n=t=>{e.contains(t.relatedTarget)||i()},o=()=>{e.contains(document.activeElement)||i()};return e.addEventListener("focusin",r),e.addEventListener("focusout",n),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",o),window.addEventListener("blur",r),window.addEventListener("focus",i),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",n),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",r),window.removeEventListener("focus",i)}}},[x,c.isClosePausedRef]);let C=(0,n.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,i=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?i:i.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,n.useEffect)(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var i,n,o;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(i=f.current)||void 0===i||i.focus();return}let s=C({tabbingDirection:a?"backwards":"forwards"}),l=s.findIndex(e=>e===r);Z(s.slice(l+1))?t.preventDefault():a?null===(n=f.current)||void 0===n||n.focus():null===(o=g.current)||void 0===o||o.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,C]),(0,n.createElement)(u.I0,{ref:h,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:x?void 0:"none"}},x&&(0,n.createElement)(k,{ref:f,onFocusFromOutsideViewport:()=>{Z(C({tabbingDirection:"forwards"}))}}),(0,n.createElement)(y.Slot,{scope:r},(0,n.createElement)(p.WV.ol,(0,i.Z)({tabIndex:-1},l,{ref:b}))),x&&(0,n.createElement)(k,{ref:g,onFocusFromOutsideViewport:()=>{Z(C({tabbingDirection:"backwards"}))}}))}),k=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:o,...a}=e,s=P("ToastFocusProxy",r);return(0,n.createElement)(b.T,(0,i.Z)({"aria-hidden":!0,tabIndex:0},a,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=s.viewport)&&void 0!==t&&t.contains(r)||o()}}))}),I="Toast",j=(0,n.forwardRef)((e,t)=>{let{forceMount:r,open:o,defaultOpen:s,onOpenChange:l,...c}=e,[u=!0,d]=(0,g.T)({prop:o,defaultProp:s,onChange:l});return(0,n.createElement)(h.z,{present:r||u},(0,n.createElement)(N,(0,i.Z)({open:u},c,{ref:t,onClose:()=>d(!1),onPause:(0,f.W)(e.onPause),onResume:(0,f.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[$,M]=C(I,{onClose(){}}),N=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,type:l="foreground",duration:c,open:d,onClose:h,onEscapeKeyDown:g,onPause:m,onResume:b,onSwipeStart:w,onSwipeMove:v,onSwipeCancel:x,onSwipeEnd:C,..._}=e,E=P(I,r),[S,R]=(0,n.useState)(null),T=(0,s.e)(t,e=>R(e)),k=(0,n.useRef)(null),j=(0,n.useRef)(null),M=c||E.duration,N=(0,n.useRef)(0),D=(0,n.useRef)(M),U=(0,n.useRef)(0),{onToastAdd:z,onToastRemove:B}=E,F=(0,f.W)(()=>{var e;(null==S?void 0:S.contains(document.activeElement))&&(null===(e=E.viewport)||void 0===e||e.focus()),h()}),Z=(0,n.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(U.current),N.current=new Date().getTime(),U.current=window.setTimeout(F,e))},[F]);(0,n.useEffect)(()=>{let e=E.viewport;if(e){let t=()=>{Z(D.current),null==b||b()},r=()=>{let e=new Date().getTime()-N.current;D.current=D.current-e,window.clearTimeout(U.current),null==m||m()};return e.addEventListener(O,r),e.addEventListener(A,t),()=>{e.removeEventListener(O,r),e.removeEventListener(A,t)}}},[E.viewport,M,m,b,Z]),(0,n.useEffect)(()=>{d&&!E.isClosePausedRef.current&&Z(M)},[d,M,E.isClosePausedRef,Z]),(0,n.useEffect)(()=>(z(),()=>B()),[z,B]);let V=(0,n.useMemo)(()=>S?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let i=t.ariaHidden||t.hidden||"none"===t.style.display,n=""===t.dataset.radixToastAnnounceExclude;if(!i){if(n){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(S):null,[S]);return E.viewport?(0,n.createElement)(n.Fragment,null,V&&(0,n.createElement)(L,{__scopeToast:r,role:"status","aria-live":"foreground"===l?"assertive":"polite","aria-atomic":!0},V),(0,n.createElement)($,{scope:r,onClose:F},(0,o.createPortal)((0,n.createElement)(y.ItemSlot,{scope:r},(0,n.createElement)(u.fC,{asChild:!0,onEscapeKeyDown:(0,a.M)(g,()=>{E.isFocusedToastEscapeKeyDownRef.current||F(),E.isFocusedToastEscapeKeyDownRef.current=!1})},(0,n.createElement)(p.WV.li,(0,i.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":E.swipeDirection},_,{ref:T,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==g||g(e.nativeEvent),e.nativeEvent.defaultPrevented||(E.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(k.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!k.current)return;let t=e.clientX-k.current.x,r=e.clientY-k.current.y,i=!!j.current,n=["left","right"].includes(E.swipeDirection),o=["left","up"].includes(E.swipeDirection)?Math.min:Math.max,a=n?o(0,t):0,s=n?0:o(0,r),l="touch"===e.pointerType?10:2,c={x:a,y:s},u={originalEvent:e,delta:c};i?(j.current=c,W("toast.swipeMove",v,u,{discrete:!1})):H(c,E.swipeDirection,l)?(j.current=c,W("toast.swipeStart",w,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(k.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=j.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),j.current=null,k.current=null,t){let r=e.currentTarget,i={originalEvent:e,delta:t};H(t,E.swipeDirection,E.swipeThreshold)?W("toast.swipeEnd",C,i,{discrete:!0}):W("toast.swipeCancel",x,i,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),E.viewport))):null});N.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${I}\`. Expected \`foreground | background\`.`):null};let L=e=>{let{__scopeToast:t,children:r,...i}=e,o=P(I,t),[a,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1);return function(e=()=>{}){let t=(0,f.W)(e);(0,m.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),(0,n.useEffect)(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,n.createElement)(d.h,{asChild:!0},(0,n.createElement)(b.T,i,a&&(0,n.createElement)(n.Fragment,null,o.label," ",r)))},D=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({},o,{ref:t}))}),U=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({},o,{ref:t}))}),z=(0,n.forwardRef)((e,t)=>{let{altText:r,...o}=e;return r?(0,n.createElement)(F,{altText:r,asChild:!0},(0,n.createElement)(B,(0,i.Z)({},o,{ref:t}))):null});z.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let B=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...o}=e,s=M("ToastClose",r);return(0,n.createElement)(F,{asChild:!0},(0,n.createElement)(p.WV.button,(0,i.Z)({type:"button"},o,{ref:t,onClick:(0,a.M)(e.onClick,s.onClose)})))}),F=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,altText:o,...a}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0},a,{ref:t}))});function W(e,t,r,{discrete:i}){let n=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),i?(0,p.jH)(n,o):n.dispatchEvent(o)}let H=(e,t,r=0)=>{let i=Math.abs(e.x),n=Math.abs(e.y),o=i>n;return"left"===t||"right"===t?o&&i>r:!o&&n>r};function Z(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let V=S,G=T,Y=j,q=D,K=U,X=z,Q=B},59042:(e,t,r)=>{"use strict";r.d(t,{VY:()=>te,zt:()=>e8,fC:()=>e7,xz:()=>e9});var i=r(65651),n=r(3729),o=r.t(n,2),a=r(85222),s=r(31405),l=r(98462),c=r(44155),u=r(16069);let d=o["useId".toString()]||(()=>void 0),h=0,p=["top","right","bottom","left"],f=Math.min,g=Math.max,m=Math.round,b=Math.floor,w=e=>({x:e,y:e}),y={left:"right",right:"left",bottom:"top",top:"bottom"},v={start:"end",end:"start"};function x(e,t){return"function"==typeof e?e(t):e}function C(e){return e.split("-")[0]}function _(e){return e.split("-")[1]}function E(e){return"x"===e?"y":"x"}function P(e){return"y"===e?"height":"width"}function S(e){return["top","bottom"].includes(C(e))?"y":"x"}function R(e){return e.replace(/start|end/g,e=>v[e])}function O(e){return e.replace(/left|right|bottom|top/g,e=>y[e])}function A(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function T(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function k(e,t,r){let i,{reference:n,floating:o}=e,a=S(t),s=E(S(t)),l=P(s),c=C(t),u="y"===a,d=n.x+n.width/2-o.width/2,h=n.y+n.height/2-o.height/2,p=n[l]/2-o[l]/2;switch(c){case"top":i={x:d,y:n.y-o.height};break;case"bottom":i={x:d,y:n.y+n.height};break;case"right":i={x:n.x+n.width,y:h};break;case"left":i={x:n.x-o.width,y:h};break;default:i={x:n.x,y:n.y}}switch(_(t)){case"start":i[s]-=p*(r&&u?-1:1);break;case"end":i[s]+=p*(r&&u?-1:1)}return i}let I=async(e,t,r)=>{let{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:a}=r,s=o.filter(Boolean),l=await (null==a.isRTL?void 0:a.isRTL(t)),c=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=k(c,i,l),h=i,p={},f=0;for(let r=0;r<s.length;r++){let{name:o,fn:g}=s[r],{x:m,y:b,data:w,reset:y}=await g({x:u,y:d,initialPlacement:i,placement:h,strategy:n,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=b?b:d,p={...p,[o]:{...p[o],...w}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(h=y.placement),y.rects&&(c=!0===y.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):y.rects),{x:u,y:d}=k(c,h,l)),r=-1)}return{x:u,y:d,placement:h,strategy:n,middlewareData:p}};async function j(e,t){var r;void 0===t&&(t={});let{x:i,y:n,platform:o,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=x(t,e),f=A(p),g=s[h?"floating"===d?"reference":"floating":d],m=T(await o.getClippingRect({element:null==(r=await (null==o.isElement?void 0:o.isElement(g)))||r?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),b="floating"===d?{...a.floating,x:i,y:n}:a.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(s.floating)),y=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},v=T(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:w,strategy:l}):b);return{top:(m.top-v.top+f.top)/y.y,bottom:(v.bottom-m.bottom+f.bottom)/y.y,left:(m.left-v.left+f.left)/y.x,right:(v.right-m.right+f.right)/y.x}}function $(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function M(e){return p.some(t=>e[t]>=0)}async function N(e,t){let{placement:r,platform:i,elements:n}=e,o=await (null==i.isRTL?void 0:i.isRTL(n.floating)),a=C(r),s=_(r),l="y"===S(r),c=["left","top"].includes(a)?-1:1,u=o&&l?-1:1,d=x(t,e),{mainAxis:h,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof f&&(p="end"===s?-1*f:f),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}function L(e){return z(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function U(e){var t;return null==(t=(z(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function z(e){return e instanceof Node||e instanceof D(e).Node}function B(e){return e instanceof Element||e instanceof D(e).Element}function F(e){return e instanceof HTMLElement||e instanceof D(e).HTMLElement}function W(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof D(e).ShadowRoot)}function H(e){let{overflow:t,overflowX:r,overflowY:i,display:n}=Y(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(n)}function Z(e){let t=V(),r=Y(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(L(e))}function Y(e){return D(e).getComputedStyle(e)}function q(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function K(e){if("html"===L(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||U(e);return W(t)?t.host:t}function X(e,t,r){var i;void 0===t&&(t=[]),void 0===r&&(r=!0);let n=function e(t){let r=K(t);return G(r)?t.ownerDocument?t.ownerDocument.body:t.body:F(r)&&H(r)?r:e(r)}(e),o=n===(null==(i=e.ownerDocument)?void 0:i.body),a=D(n);return o?t.concat(a,a.visualViewport||[],H(n)?n:[],a.frameElement&&r?X(a.frameElement):[]):t.concat(n,X(n,[],r))}function Q(e){let t=Y(e),r=parseFloat(t.width)||0,i=parseFloat(t.height)||0,n=F(e),o=n?e.offsetWidth:r,a=n?e.offsetHeight:i,s=m(r)!==o||m(i)!==a;return s&&(r=o,i=a),{width:r,height:i,$:s}}function J(e){return B(e)?e:e.contextElement}function ee(e){let t=J(e);if(!F(t))return w(1);let r=t.getBoundingClientRect(),{width:i,height:n,$:o}=Q(t),a=(o?m(r.width):r.width)/i,s=(o?m(r.height):r.height)/n;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}let et=w(0);function er(e){let t=D(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:et}function ei(e,t,r,i){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let o=e.getBoundingClientRect(),a=J(e),s=w(1);t&&(i?B(i)&&(s=ee(i)):s=ee(e));let l=(void 0===(n=r)&&(n=!1),i&&(!n||i===D(a))&&n)?er(a):w(0),c=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,d=o.width/s.x,h=o.height/s.y;if(a){let e=D(a),t=i&&B(i)?D(i):i,r=e,n=r.frameElement;for(;n&&i&&t!==r;){let e=ee(n),t=n.getBoundingClientRect(),i=Y(n),o=t.left+(n.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,u*=e.y,d*=e.x,h*=e.y,c+=o,u+=a,n=(r=D(n)).frameElement}}return T({width:d,height:h,x:c,y:u})}let en=[":popover-open",":modal"];function eo(e){return en.some(t=>{try{return e.matches(t)}catch(e){return!1}})}function ea(e){return ei(U(e)).left+q(e).scrollLeft}function es(e,t,r){let i;if("viewport"===t)i=function(e,t){let r=D(e),i=U(e),n=r.visualViewport,o=i.clientWidth,a=i.clientHeight,s=0,l=0;if(n){o=n.width,a=n.height;let e=V();(!e||e&&"fixed"===t)&&(s=n.offsetLeft,l=n.offsetTop)}return{width:o,height:a,x:s,y:l}}(e,r);else if("document"===t)i=function(e){let t=U(e),r=q(e),i=e.ownerDocument.body,n=g(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=g(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),a=-r.scrollLeft+ea(e),s=-r.scrollTop;return"rtl"===Y(i).direction&&(a+=g(t.clientWidth,i.clientWidth)-n),{width:n,height:o,x:a,y:s}}(U(e));else if(B(t))i=function(e,t){let r=ei(e,!0,"fixed"===t),i=r.top+e.clientTop,n=r.left+e.clientLeft,o=F(e)?ee(e):w(1),a=e.clientWidth*o.x;return{width:a,height:e.clientHeight*o.y,x:n*o.x,y:i*o.y}}(t,r);else{let r=er(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return T(i)}function el(e,t){return F(e)&&"fixed"!==Y(e).position?t?t(e):e.offsetParent:null}function ec(e,t){let r=D(e);if(!F(e)||eo(e))return r;let i=el(e,t);for(;i&&["table","td","th"].includes(L(i))&&"static"===Y(i).position;)i=el(i,t);return i&&("html"===L(i)||"body"===L(i)&&"static"===Y(i).position&&!Z(i))?r:i||function(e){let t=K(e);for(;F(t)&&!G(t);){if(Z(t))return t;t=K(t)}return null}(e)||r}let eu=async function(e){let t=this.getOffsetParent||ec,r=this.getDimensions;return{reference:function(e,t,r){let i=F(t),n=U(t),o="fixed"===r,a=ei(e,!0,o,t),s={scrollLeft:0,scrollTop:0},l=w(0);if(i||!i&&!o){if(("body"!==L(t)||H(n))&&(s=q(t)),i){let e=ei(t,!0,o,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else n&&(l.x=ea(n))}return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}},ed={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:i,strategy:n}=e,o="fixed"===n,a=U(i),s=!!t&&eo(t.floating);if(i===a||s&&o)return r;let l={scrollLeft:0,scrollTop:0},c=w(1),u=w(0),d=F(i);if((d||!d&&!o)&&(("body"!==L(i)||H(a))&&(l=q(i)),F(i))){let e=ei(i);c=ee(i),u.x=e.x+i.clientLeft,u.y=e.y+i.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+u.x,y:r.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:U,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e,o=[..."clippingAncestors"===r?function(e,t){let r=t.get(e);if(r)return r;let i=X(e,[],!1).filter(e=>B(e)&&"body"!==L(e)),n=null,o="fixed"===Y(e).position,a=o?K(e):e;for(;B(a)&&!G(a);){let t=Y(a),r=Z(a);r||"fixed"!==t.position||(n=null),(o?!r&&!n:!r&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||H(a)&&!r&&function e(t,r){let i=K(t);return!(i===r||!B(i)||G(i))&&("fixed"===Y(i).position||e(i,r))}(e,a))?i=i.filter(e=>e!==a):n=t,a=K(a)}return t.set(e,i),i}(t,this._c):[].concat(r),i],a=o[0],s=o.reduce((e,r)=>{let i=es(t,r,n);return e.top=g(i.top,e.top),e.right=f(i.right,e.right),e.bottom=f(i.bottom,e.bottom),e.left=g(i.left,e.left),e},es(t,a,n));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:ec,getElementRects:eu,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=Q(e);return{width:t,height:r}},getScale:ee,isElement:B,isRTL:function(e){return"rtl"===Y(e).direction}},eh=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:i,placement:n,rects:o,platform:a,elements:s,middlewareData:l}=t,{element:c,padding:u=0}=x(e,t)||{};if(null==c)return{};let d=A(u),h={x:r,y:i},p=E(S(n)),m=P(p),b=await a.getDimensions(c),w="y"===p,y=w?"clientHeight":"clientWidth",v=o.reference[m]+o.reference[p]-h[p]-o.floating[m],C=h[p]-o.reference[p],R=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c)),O=R?R[y]:0;O&&await (null==a.isElement?void 0:a.isElement(R))||(O=s.floating[y]||o.floating[m]);let T=O/2-b[m]/2-1,k=f(d[w?"top":"left"],T),I=f(d[w?"bottom":"right"],T),j=O-b[m]-I,$=O/2-b[m]/2+(v/2-C/2),M=g(k,f($,j)),N=!l.arrow&&null!=_(n)&&$!==M&&o.reference[m]/2-($<k?k:I)-b[m]/2<0,L=N?$<k?$-k:$-j:0;return{[p]:h[p]+L,data:{[p]:M,centerOffset:$-M-L,...N&&{alignmentOffset:L}},reset:N}}}),ep=(e,t,r)=>{let i=new Map,n={platform:ed,...r},o={...n.platform,_c:i};return I(e,t,{...n,platform:o})};var ef=r(81202);let eg=e=>({name:"arrow",options:e,fn(t){let{element:r,padding:i}="function"==typeof e?e(t):e;return r&&({}).hasOwnProperty.call(r,"current")?null!=r.current?eh({element:r.current,padding:i}).fn(t):{}:r?eh({element:r,padding:i}).fn(t):{}}});var em="undefined"!=typeof document?n.useLayoutEffect:n.useEffect;function eb(e,t){let r,i,n;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((r=e.length)!==t.length)return!1;for(i=r;0!=i--;)if(!eb(e[i],t[i]))return!1;return!0}if((r=(n=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(i=r;0!=i--;)if(!({}).hasOwnProperty.call(t,n[i]))return!1;for(i=r;0!=i--;){let r=n[i];if(("_owner"!==r||!e.$$typeof)&&!eb(e[r],t[r]))return!1}return!0}return e!=e&&t!=t}function ew(e,t){return Math.round(1*t)/1}function ey(e){let t=n.useRef(e);return em(()=>{t.current=e}),t}var ev=r(62409);let ex=(0,n.forwardRef)((e,t)=>{let{children:r,width:o=10,height:a=5,...s}=e;return(0,n.createElement)(ev.WV.svg,(0,i.Z)({},s,{ref:t,width:o,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?r:(0,n.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var eC=r(2256);let e_="Popper",[eE,eP]=(0,l.b)(e_),[eS,eR]=eE(e_),eO=(0,n.forwardRef)((e,t)=>{let{__scopePopper:r,virtualRef:o,...a}=e,l=eR("PopperAnchor",r),c=(0,n.useRef)(null),u=(0,s.e)(t,c);return(0,n.useEffect)(()=>{l.onAnchorChange((null==o?void 0:o.current)||c.current)}),o?null:(0,n.createElement)(ev.WV.div,(0,i.Z)({},a,{ref:u}))}),eA="PopperContent",[eT,ek]=eE(eA),eI=(0,n.forwardRef)((e,t)=>{var r,o,a,l,c,d,h,p;let{__scopePopper:m,side:w="bottom",sideOffset:y=0,align:v="center",alignOffset:A=0,arrowPadding:T=0,avoidCollisions:k=!0,collisionBoundary:I=[],collisionPadding:L=0,sticky:D="partial",hideWhenDetached:z=!1,updatePositionStrategy:B="optimized",onPlaced:F,...W}=e,H=eR(eA,m),[Z,V]=(0,n.useState)(null),G=(0,s.e)(t,e=>V(e)),[Y,q]=(0,n.useState)(null),K=function(e){let[t,r]=(0,n.useState)(void 0);return(0,u.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let i,n;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,n=t.blockSize}else i=e.offsetWidth,n=e.offsetHeight;r({width:i,height:n})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(Y),Q=null!==(r=null==K?void 0:K.width)&&void 0!==r?r:0,ee=null!==(o=null==K?void 0:K.height)&&void 0!==o?o:0,et="number"==typeof L?L:{top:0,right:0,bottom:0,left:0,...L},er=Array.isArray(I)?I:[I],en=er.length>0,eo={padding:et,boundary:er.filter(e$),altBoundary:en},{refs:ea,floatingStyles:es,placement:el,isPositioned:ec,middlewareData:eu}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:r="absolute",middleware:i=[],platform:o,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,h]=n.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,f]=n.useState(i);eb(p,i)||f(i);let[g,m]=n.useState(null),[b,w]=n.useState(null),y=n.useCallback(e=>{e!==_.current&&(_.current=e,m(e))},[]),v=n.useCallback(e=>{e!==E.current&&(E.current=e,w(e))},[]),x=a||g,C=s||b,_=n.useRef(null),E=n.useRef(null),P=n.useRef(d),S=null!=c,R=ey(c),O=ey(o),A=n.useCallback(()=>{if(!_.current||!E.current)return;let e={placement:t,strategy:r,middleware:p};O.current&&(e.platform=O.current),ep(_.current,E.current,e).then(e=>{let t={...e,isPositioned:!0};T.current&&!eb(P.current,t)&&(P.current=t,ef.flushSync(()=>{h(t)}))})},[p,t,r,O]);em(()=>{!1===u&&P.current.isPositioned&&(P.current.isPositioned=!1,h(e=>({...e,isPositioned:!1})))},[u]);let T=n.useRef(!1);em(()=>(T.current=!0,()=>{T.current=!1}),[]),em(()=>{if(x&&(_.current=x),C&&(E.current=C),x&&C){if(R.current)return R.current(x,C,A);A()}},[x,C,A,R,S]);let k=n.useMemo(()=>({reference:_,floating:E,setReference:y,setFloating:v}),[y,v]),I=n.useMemo(()=>({reference:x,floating:C}),[x,C]),j=n.useMemo(()=>{let e={position:r,left:0,top:0};if(!I.floating)return e;let t=ew(I.floating,d.x),i=ew(I.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+i+"px)",...(I.floating,!1)}:{position:r,left:t,top:i}},[r,l,I.floating,d.x,d.y]);return n.useMemo(()=>({...d,update:A,refs:k,elements:I,floatingStyles:j}),[d,A,k,I,j])}({strategy:"fixed",placement:w+("center"!==v?"-"+v:""),whileElementsMounted:(...e)=>(function(e,t,r,i){let n;void 0===i&&(i={});let{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,u=J(e),d=o||a?[...u?X(u):[],...X(t)]:[];d.forEach(e=>{o&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let h=u&&l?function(e,t){let r,i=null,n=U(e);function o(){var e;clearTimeout(r),null==(e=i)||e.disconnect(),i=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),o();let{left:c,top:u,width:d,height:h}=e.getBoundingClientRect();if(s||t(),!d||!h)return;let p=b(u),m=b(n.clientWidth-(c+d)),w={rootMargin:-p+"px "+-m+"px "+-b(n.clientHeight-(u+h))+"px "+-b(c)+"px",threshold:g(0,f(1,l))||1},y=!0;function v(e){let t=e[0].intersectionRatio;if(t!==l){if(!y)return a();t?a(!1,t):r=setTimeout(()=>{a(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(v,{...w,root:n.ownerDocument})}catch(e){i=new IntersectionObserver(v,w)}i.observe(e)}(!0),o}(u,r):null,p=-1,m=null;s&&(m=new ResizeObserver(e=>{let[i]=e;i&&i.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),r()}),u&&!c&&m.observe(u),m.observe(t));let w=c?ei(e):null;return c&&function t(){let i=ei(e);w&&(i.x!==w.x||i.y!==w.y||i.width!==w.width||i.height!==w.height)&&r(),w=i,n=requestAnimationFrame(t)}(),r(),()=>{var e;d.forEach(e=>{o&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==h||h(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(n)}})(...e,{animationFrame:"always"===B}),elements:{reference:H.anchor},middleware:[function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,i;let{x:n,y:o,placement:a,middlewareData:s}=t,l=await N(t,e);return a===(null==(r=s.offset)?void 0:r.placement)&&null!=(i=s.arrow)&&i.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:a}}}}}({mainAxis:y+ee,alignmentAxis:A}),k&&function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:r,y:i,placement:n}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...l}=x(e,t),c={x:r,y:i},u=await j(t,l),d=S(C(n)),h=E(d),p=c[h],m=c[d];if(o){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",r=p+u[e],i=p-u[t];p=g(r,f(p,i))}if(a){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",r=m+u[e],i=m-u[t];m=g(r,f(m,i))}let b=s.fn({...t,[h]:p,[d]:m});return{...b,data:{x:b.x-r,y:b.y-i}}}}}({mainAxis:!0,crossAxis:!1,limiter:"partial"===D?function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:r,y:i,placement:n,rects:o,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=x(e,t),u={x:r,y:i},d=S(n),h=E(d),p=u[h],f=u[d],g=x(s,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){let e="y"===h?"height":"width",t=o.reference[h]-o.floating[e]+m.mainAxis,r=o.reference[h]+o.reference[e]-m.mainAxis;p<t?p=t:p>r&&(p=r)}if(c){var b,w;let e="y"===h?"width":"height",t=["top","left"].includes(C(n)),r=o.reference[d]-o.floating[e]+(t&&(null==(b=a.offset)?void 0:b[d])||0)+(t?0:m.crossAxis),i=o.reference[d]+o.reference[e]+(t?0:(null==(w=a.offset)?void 0:w[d])||0)-(t?m.crossAxis:0);f<r?f=r:f>i&&(f=i)}return{[h]:p,[d]:f}}}}():void 0,...eo}),k&&function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,i,n,o,a;let{placement:s,middlewareData:l,rects:c,initialPlacement:u,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0,...y}=x(e,t);if(null!=(r=l.arrow)&&r.alignmentOffset)return{};let v=C(s),A=C(u)===u,T=await (null==d.isRTL?void 0:d.isRTL(h.floating)),k=g||(A||!w?[O(u)]:function(e){let t=O(e);return[R(e),t,R(t)]}(u));g||"none"===b||k.push(...function(e,t,r,i){let n=_(e),o=function(e,t,r){let i=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(r)return t?n:i;return t?i:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(C(e),"start"===r,i);return n&&(o=o.map(e=>e+"-"+n),t&&(o=o.concat(o.map(R)))),o}(u,w,b,T));let I=[u,...k],$=await j(t,y),M=[],N=(null==(i=l.flip)?void 0:i.overflows)||[];if(p&&M.push($[v]),f){let e=function(e,t,r){void 0===r&&(r=!1);let i=_(e),n=E(S(e)),o=P(n),a="x"===n?i===(r?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=O(a)),[a,O(a)]}(s,c,T);M.push($[e[0]],$[e[1]])}if(N=[...N,{placement:s,overflows:M}],!M.every(e=>e<=0)){let e=((null==(n=l.flip)?void 0:n.index)||0)+1,t=I[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let r=null==(o=N.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!r)switch(m){case"bestFit":{let e=null==(a=N.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(r=e);break}case"initialPlacement":r=u}if(s!==r)return{reset:{placement:r}}}return{}}}}({...eo}),function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){let r,i;let{placement:n,rects:o,platform:a,elements:s}=t,{apply:l=()=>{},...c}=x(e,t),u=await j(t,c),d=C(n),h=_(n),p="y"===S(n),{width:m,height:b}=o.floating;"top"===d||"bottom"===d?(r=d,i=h===(await (null==a.isRTL?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(i=d,r="end"===h?"top":"bottom");let w=b-u[r],y=m-u[i],v=!t.middlewareData.shift,E=w,P=y;if(p){let e=m-u.left-u.right;P=h||v?f(y,e):e}else{let e=b-u.top-u.bottom;E=h||v?f(w,e):e}if(v&&!h){let e=g(u.left,0),t=g(u.right,0),r=g(u.top,0),i=g(u.bottom,0);p?P=m-2*(0!==e||0!==t?e+t:g(u.left,u.right)):E=b-2*(0!==r||0!==i?r+i:g(u.top,u.bottom))}await l({...t,availableWidth:P,availableHeight:E});let R=await a.getDimensions(s.floating);return m!==R.width||b!==R.height?{reset:{rects:!0}}:{}}}}({...eo,apply:({elements:e,rects:t,availableWidth:r,availableHeight:i})=>{let{width:n,height:o}=t.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width",`${r}px`),a.setProperty("--radix-popper-available-height",`${i}px`),a.setProperty("--radix-popper-anchor-width",`${n}px`),a.setProperty("--radix-popper-anchor-height",`${o}px`)}}),Y&&eg({element:Y,padding:T}),eM({arrowWidth:Q,arrowHeight:ee}),z&&function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:r}=t,{strategy:i="referenceHidden",...n}=x(e,t);switch(i){case"referenceHidden":{let e=$(await j(t,{...n,elementContext:"reference"}),r.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:M(e)}}}case"escaped":{let e=$(await j(t,{...n,altBoundary:!0}),r.floating);return{data:{escapedOffsets:e,escaped:M(e)}}}default:return{}}}}}({strategy:"referenceHidden",...eo})]}),[ed,eh]=eN(el),ex=(0,eC.W)(F);(0,u.b)(()=>{ec&&(null==ex||ex())},[ec,ex]);let e_=null===(a=eu.arrow)||void 0===a?void 0:a.x,eE=null===(l=eu.arrow)||void 0===l?void 0:l.y,eP=(null===(c=eu.arrow)||void 0===c?void 0:c.centerOffset)!==0,[eS,eO]=(0,n.useState)();return(0,u.b)(()=>{Z&&eO(window.getComputedStyle(Z).zIndex)},[Z]),(0,n.createElement)("div",{ref:ea.setFloating,"data-radix-popper-content-wrapper":"",style:{...es,transform:ec?es.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eS,"--radix-popper-transform-origin":[null===(d=eu.transformOrigin)||void 0===d?void 0:d.x,null===(h=eu.transformOrigin)||void 0===h?void 0:h.y].join(" ")},dir:e.dir},(0,n.createElement)(eT,{scope:m,placedSide:ed,onArrowChange:q,arrowX:e_,arrowY:eE,shouldHideArrow:eP},(0,n.createElement)(ev.WV.div,(0,i.Z)({"data-side":ed,"data-align":eh},W,{ref:G,style:{...W.style,animation:ec?void 0:"none",opacity:null!==(p=eu.hide)&&void 0!==p&&p.referenceHidden?0:void 0}}))))}),ej={top:"bottom",right:"left",bottom:"top",left:"right"};function e$(e){return null!==e}let eM=e=>({name:"transformOrigin",options:e,fn(t){var r,i,n,o,a;let{placement:s,rects:l,middlewareData:c}=t,u=(null===(r=c.arrow)||void 0===r?void 0:r.centerOffset)!==0,d=u?0:e.arrowWidth,h=u?0:e.arrowHeight,[p,f]=eN(s),g={start:"0%",center:"50%",end:"100%"}[f],m=(null!==(i=null===(n=c.arrow)||void 0===n?void 0:n.x)&&void 0!==i?i:0)+d/2,b=(null!==(o=null===(a=c.arrow)||void 0===a?void 0:a.y)&&void 0!==o?o:0)+h/2,w="",y="";return"bottom"===p?(w=u?g:`${m}px`,y=`${-h}px`):"top"===p?(w=u?g:`${m}px`,y=`${l.floating.height+h}px`):"right"===p?(w=`${-h}px`,y=u?g:`${b}px`):"left"===p&&(w=`${l.floating.width+h}px`,y=u?g:`${b}px`),{data:{x:w,y:y}}}});function eN(e){let[t,r="center"]=e.split("-");return[t,r]}let eL=e=>{let{__scopePopper:t,children:r}=e,[i,o]=(0,n.useState)(null);return(0,n.createElement)(eS,{scope:t,anchor:i,onAnchorChange:o},r)};r(31179);var eD=r(43234),eU=r(32751),ez=r(33183),eB=r(87298);let[eF,eW]=(0,l.b)("Tooltip",[eP]),eH=eP(),eZ="tooltip.open",[eV,eG]=eF("TooltipProvider"),eY="Tooltip",[eq,eK]=eF(eY),eX="TooltipTrigger",eQ=(0,n.forwardRef)((e,t)=>{let{__scopeTooltip:r,...o}=e,l=eK(eX,r),c=eG(eX,r),u=eH(r),d=(0,n.useRef)(null),h=(0,s.e)(t,d,l.onTriggerChange),p=(0,n.useRef)(!1),f=(0,n.useRef)(!1),g=(0,n.useCallback)(()=>p.current=!1,[]);return(0,n.useEffect)(()=>()=>document.removeEventListener("pointerup",g),[g]),(0,n.createElement)(eO,(0,i.Z)({asChild:!0},u),(0,n.createElement)(ev.WV.button,(0,i.Z)({"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute},o,{ref:h,onPointerMove:(0,a.M)(e.onPointerMove,e=>{"touch"===e.pointerType||f.current||c.isPointerInTransitRef.current||(l.onTriggerEnter(),f.current=!0)}),onPointerLeave:(0,a.M)(e.onPointerLeave,()=>{l.onTriggerLeave(),f.current=!1}),onPointerDown:(0,a.M)(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:(0,a.M)(e.onFocus,()=>{p.current||l.onOpen()}),onBlur:(0,a.M)(e.onBlur,l.onClose),onClick:(0,a.M)(e.onClick,l.onClose)})))}),[eJ,e0]=eF("TooltipPortal",{forceMount:void 0}),e1="TooltipContent",e2=(0,n.forwardRef)((e,t)=>{let r=e0(e1,e.__scopeTooltip),{forceMount:o=r.forceMount,side:a="top",...s}=e,l=eK(e1,e.__scopeTooltip);return(0,n.createElement)(eD.z,{present:o||l.open},l.disableHoverableContent?(0,n.createElement)(e6,(0,i.Z)({side:a},s,{ref:t})):(0,n.createElement)(e3,(0,i.Z)({side:a},s,{ref:t})))}),e3=(0,n.forwardRef)((e,t)=>{let r=eK(e1,e.__scopeTooltip),o=eG(e1,e.__scopeTooltip),a=(0,n.useRef)(null),l=(0,s.e)(t,a),[c,u]=(0,n.useState)(null),{trigger:d,onClose:h}=r,p=a.current,{onPointerInTransitChange:f}=o,g=(0,n.useCallback)(()=>{u(null),f(!1)},[f]),m=(0,n.useCallback)((e,t)=>{let r=e.currentTarget,i={x:e.clientX,y:e.clientY},n=function(e,t){let r=Math.abs(t.top-e.y),i=Math.abs(t.bottom-e.y),n=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(r,i,n,o)){case o:return"left";case n:return"right";case r:return"top";case i:return"bottom";default:throw Error("unreachable")}}(i,r.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let i=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(i.y-r.y)>=(e.y-r.y)*(i.x-r.x))t.pop();else break}t.push(i)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let i=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(i.y-t.y)>=(e.y-t.y)*(i.x-t.x))r.pop();else break}r.push(i)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...function(e,t,r=5){let i=[];switch(t){case"top":i.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":i.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":i.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":i.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return i}(i,n),...function(e){let{top:t,right:r,bottom:i,left:n}=e;return[{x:n,y:t},{x:r,y:t},{x:r,y:i},{x:n,y:i}]}(t.getBoundingClientRect())])),f(!0)},[f]);return(0,n.useEffect)(()=>()=>g(),[g]),(0,n.useEffect)(()=>{if(d&&p){let e=e=>m(e,p),t=e=>m(e,d);return d.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{d.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[d,p,m,g]),(0,n.useEffect)(()=>{if(c){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},i=(null==d?void 0:d.contains(t))||(null==p?void 0:p.contains(t)),n=!function(e,t){let{x:r,y:i}=e,n=!1;for(let e=0,o=t.length-1;e<t.length;o=e++){let a=t[e].x,s=t[e].y,l=t[o].x,c=t[o].y;s>i!=c>i&&r<(l-a)*(i-s)/(c-s)+a&&(n=!n)}return n}(r,c);i?g():n&&(g(),h())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[d,p,c,h,g]),(0,n.createElement)(e6,(0,i.Z)({},e,{ref:l}))}),[e5,e4]=eF(eY,{isInside:!1}),e6=(0,n.forwardRef)((e,t)=>{let{__scopeTooltip:r,children:o,"aria-label":a,onEscapeKeyDown:s,onPointerDownOutside:l,...u}=e,d=eK(e1,r),h=eH(r),{onClose:p}=d;return(0,n.useEffect)(()=>(document.addEventListener(eZ,p),()=>document.removeEventListener(eZ,p)),[p]),(0,n.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&p()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,p]),(0,n.createElement)(c.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:p},(0,n.createElement)(eI,(0,i.Z)({"data-state":d.stateAttribute},h,u,{ref:t,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,n.createElement)(eU.A4,null,o),(0,n.createElement)(e5,{scope:r,isInside:!0},(0,n.createElement)(eB.f,{id:d.contentId,role:"tooltip"},a||o))))}),e8=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:i=300,disableHoverableContent:o=!1,children:a}=e,[s,l]=(0,n.useState)(!0),c=(0,n.useRef)(!1),u=(0,n.useRef)(0);return(0,n.useEffect)(()=>{let e=u.current;return()=>window.clearTimeout(e)},[]),(0,n.createElement)(eV,{scope:t,isOpenDelayed:s,delayDuration:r,onOpen:(0,n.useCallback)(()=>{window.clearTimeout(u.current),l(!1)},[]),onClose:(0,n.useCallback)(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>l(!0),i)},[i]),isPointerInTransitRef:c,onPointerInTransitChange:(0,n.useCallback)(e=>{c.current=e},[]),disableHoverableContent:o},a)},e7=e=>{let{__scopeTooltip:t,children:r,open:i,defaultOpen:o=!1,onOpenChange:a,disableHoverableContent:s,delayDuration:l}=e,c=eG(eY,e.__scopeTooltip),p=eH(t),[f,g]=(0,n.useState)(null),m=function(e){let[t,r]=n.useState(d());return(0,u.b)(()=>{e||r(e=>null!=e?e:String(h++))},[e]),e||(t?`radix-${t}`:"")}(),b=(0,n.useRef)(0),w=null!=s?s:c.disableHoverableContent,y=null!=l?l:c.delayDuration,v=(0,n.useRef)(!1),[x=!1,C]=(0,ez.T)({prop:i,defaultProp:o,onChange:e=>{e?(c.onOpen(),document.dispatchEvent(new CustomEvent(eZ))):c.onClose(),null==a||a(e)}}),_=(0,n.useMemo)(()=>x?v.current?"delayed-open":"instant-open":"closed",[x]),E=(0,n.useCallback)(()=>{window.clearTimeout(b.current),v.current=!1,C(!0)},[C]),P=(0,n.useCallback)(()=>{window.clearTimeout(b.current),C(!1)},[C]),S=(0,n.useCallback)(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{v.current=!0,C(!0)},y)},[y,C]);return(0,n.useEffect)(()=>()=>window.clearTimeout(b.current),[]),(0,n.createElement)(eL,p,(0,n.createElement)(eq,{scope:t,contentId:m,open:x,stateAttribute:_,trigger:f,onTriggerChange:g,onTriggerEnter:(0,n.useCallback)(()=>{c.isOpenDelayed?S():E()},[c.isOpenDelayed,S,E]),onTriggerLeave:(0,n.useCallback)(()=>{w?P():window.clearTimeout(b.current)},[P,w]),onOpen:E,onClose:P,disableHoverableContent:w},r))},e9=eQ,te=e2},2256:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});var i=r(3729);function n(e){let t=(0,i.useRef)(e);return(0,i.useEffect)(()=>{t.current=e}),(0,i.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}},33183:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});var i=r(3729),n=r(2256);function o({prop:e,defaultProp:t,onChange:r=()=>{}}){let[o,a]=function({defaultProp:e,onChange:t}){let r=(0,i.useState)(e),[o]=r,a=(0,i.useRef)(o),s=(0,n.W)(t);return(0,i.useEffect)(()=>{a.current!==o&&(s(o),a.current=o)},[o,a,s]),r}({defaultProp:t,onChange:r}),s=void 0!==e,l=s?e:o,c=(0,n.W)(r);return[l,(0,i.useCallback)(t=>{if(s){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else a(t)},[s,e,a,c])]}},16069:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var i=r(3729);let n=(null==globalThis?void 0:globalThis.document)?i.useLayoutEffect:()=>{}},87298:(e,t,r)=>{"use strict";r.d(t,{T:()=>a,f:()=>s});var i=r(65651),n=r(3729),o=r(62409);let a=(0,n.forwardRef)((e,t)=>(0,n.createElement)(o.WV.span,(0,i.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),s=a},69996:(e,t,r)=>{"use strict";function i(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw TypeError("attempted to use private field on non-instance");return e}r.r(t),r.d(t,{_:()=>i,_class_private_field_loose_base:()=>i})},67074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{_:()=>n,_class_private_field_loose_key:()=>n});var i=0;function n(e){return"__private_"+i+++"_"+e}},39694:(e,t,r)=>{"use strict";function i(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>i,_interop_require_default:()=>i})},17824:(e,t,r)=>{"use strict";function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function n(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}r.r(t),r.d(t,{_:()=>n,_interop_require_wildcard:()=>n})},98441:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});var i=r(80057),n=r(28651),o=new class extends i.l{#e;#t;#r;constructor(){super(),this.#r=e=>{if(!n.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.#e?this.#e:globalThis.document?.visibilityState!=="hidden"}}},99896:(e,t,r)=>{"use strict";r.d(t,{R:()=>s,m:()=>a});var i=r(41466),n=r(53028),o=r(50256),a=class extends n.F{#i;#n;#o;#a;constructor(e){super(),this.mutationId=e.mutationId,this.#n=e.defaultOptions,this.#o=e.mutationCache,this.#i=[],this.state=e.state||s(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#n,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#i.includes(e)||(this.#i.push(e),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#i=this.#i.filter(t=>t!==e),this.scheduleGc(),this.#o.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#i.length||("pending"===this.state.status?this.scheduleGc():this.#o.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#s({type:"pending",variables:e}),await this.#o.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#s({type:"pending",context:t,variables:e})}let r=await (this.#a=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#s({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#a.promise);return await this.#o.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#o.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#s({type:"success",data:r}),r}catch(t){try{throw await this.#o.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#o.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#s({type:"error",error:t})}}}#s(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#i.forEach(t=>{t.onMutationUpdate(e)}),this.#o.notify({mutation:this,type:"updated",action:e})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},41466:(e,t,r)=>{"use strict";r.d(t,{V:()=>i});var i=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=e=>setTimeout(e,0),o=i=>{t?e.push(i):n(()=>{r(i)})},a=()=>{let t=e;e=[],t.length&&n(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||a()}return r},batchCalls:e=>(...t)=>{o(()=>{e(...t)})},schedule:o,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e},setScheduler:e=>{n=e}}}()},55658:(e,t,r)=>{"use strict";r.d(t,{N:()=>o});var i=r(80057),n=r(28651),o=new class extends i.l{#l;#t;#r;constructor(){super(),this.#l=!0,this.#r=e=>{if(!n.sk&&window.addEventListener){let t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#l!==e&&(this.#l=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#l}}},3952:(e,t,r)=>{"use strict";r.d(t,{S:()=>g});var i=r(28651),n=r(41466),o=r(50256),a=r(53028),s=class extends a.F{#c;#u;#d;#h;#a;#i;#n;#p;constructor(e){super(),this.#p=!1,this.#n=e.defaultOptions,this.#f(e.options),this.#i=[],this.#d=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#c=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#c,this.scheduleGc()}get meta(){return this.options.meta}#f(e){this.options={...this.#n,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#i.length||"idle"!==this.state.fetchStatus||this.#d.remove(this)}setData(e,t){let r=(0,i.oE)(this.state.data,e,this.options);return this.#s({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#s({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#h;return this.#a?.cancel(e),t?t.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#c)}isActive(){return this.#i.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#i.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,i.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.#i.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){let e=this.#i.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.#i.includes(e)||(this.#i.push(e),this.clearGcTimeout(),this.#d.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.#i.includes(e)&&(this.#i=this.#i.filter(t=>t!==e),this.#i.length||(this.#a&&(this.#p?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#d.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.#i.length}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#h)return this.#a?.continueRetry(),this.#h}if(e&&this.#f(e),!this.options.queryFn){let e=this.#i.find(e=>e.options.queryFn);e&&this.#f(e.options)}let r=new AbortController,i={queryKey:this.queryKey,meta:this.meta},n=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#p=!0,r.signal)})};n(i);let a={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#p=!1,this.options.persister)?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};n(a),this.options.behavior?.onFetch(a,this),this.#u=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#s({type:"fetch",meta:a.fetchOptions?.meta});let s=e=>{(0,o.DV)(e)&&e.silent||this.#s({type:"error",error:e}),(0,o.DV)(e)||(this.#d.config.onError?.(e,this),this.#d.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#a=(0,o.Mz)({fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){s(Error(`${this.queryHash} data is undefined`));return}this.setData(e),this.#d.config.onSuccess?.(e,this),this.#d.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:s,onFail:(e,t)=>{this.#s({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode}),this.#h=this.#a.promise,this.#h}#s(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:e.meta??null,fetchStatus:(0,o.Kw)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,o.DV)(r)&&r.revert&&this.#u)return{...this.#u,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),n.V.batch(()=>{this.#i.forEach(e=>{e.onQueryUpdate()}),this.#d.notify({query:this,type:"updated",action:e})})}},l=r(80057),c=class extends l.l{constructor(e={}){super(),this.config=e,this.#g=new Map}#g;build(e,t,r){let n=t.queryKey,o=t.queryHash??(0,i.Rm)(n,t),a=this.get(o);return a||(a=new s({cache:this,queryKey:n,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(a)),a}add(e){this.#g.has(e.queryHash)||(this.#g.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#g.get(e.queryHash);t&&(e.destroy(),t===e&&this.#g.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){n.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#g.get(e)}getAll(){return[...this.#g.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,i._x)(e,t)):t}notify(e){n.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(99896),d=class extends l.l{constructor(e={}){super(),this.config=e,this.#m=[],this.#b=0}#m;#b;#w;build(e,t,r){let i=new u.m({mutationCache:this,mutationId:++this.#b,options:e.defaultMutationOptions(t),state:r});return this.add(i),i}add(e){this.#m.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#m=this.#m.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){n.V.batch(()=>{this.#m.forEach(e=>{this.remove(e)})})}getAll(){return this.#m}find(e){let t={exact:!0,...e};return this.#m.find(e=>(0,i.X7)(t,e))}findAll(e={}){return this.#m.filter(t=>(0,i.X7)(e,t))}notify(e){n.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#w=(this.#w??Promise.resolve()).then(()=>{let e=this.#m.filter(e=>e.state.isPaused);return n.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(i.ZT)),Promise.resolve()))}).then(()=>{this.#w=void 0}),this.#w}},h=r(98441),p=r(55658);function f(e,{pages:t,pageParams:r}){let i=t.length-1;return e.getNextPageParam(t[i],t,r[i],r)}var g=class{#y;#o;#n;#v;#x;#C;#_;#E;constructor(e={}){this.#y=e.queryCache||new c,this.#o=e.mutationCache||new d,this.#n=e.defaultOptions||{},this.#v=new Map,this.#x=new Map,this.#C=0}mount(){this.#C++,1===this.#C&&(this.#_=h.j.subscribe(()=>{h.j.isFocused()&&(this.resumePausedMutations(),this.#y.onFocus())}),this.#E=p.N.subscribe(()=>{p.N.isOnline()&&(this.resumePausedMutations(),this.#y.onOnline())}))}unmount(){this.#C--,0===this.#C&&(this.#_?.(),this.#_=void 0,this.#E?.(),this.#E=void 0)}isFetching(e){return this.#y.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#o.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#y.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);return void 0!==t?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let n=this.defaultQueryOptions({queryKey:e}),o=this.#y.get(n.queryHash),a=o?.state.data,s=(0,i.SE)(t,a);if(void 0!==s)return this.#y.build(this,n).setData(s,{...r,manual:!0})}setQueriesData(e,t,r){return n.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#y.get(t.queryHash)?.state}removeQueries(e){let t=this.#y;n.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#y,i={type:"active",...e};return n.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(n.V.batch(()=>this.#y.findAll(e).map(e=>e.cancel(r)))).then(i.ZT).catch(i.ZT)}invalidateQueries(e={},t={}){return n.V.batch(()=>{if(this.#y.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#y.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(i.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(i.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#y.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let n=async()=>{let r;let n=e.options,o=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],s=e.state.data?.pageParams||[],l=!1,c=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?l=!0:e.signal.addEventListener("abort",()=>{l=!0}),e.signal)})},u=e.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`))),d=async(t,r,n)=>{if(l)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta};c(o);let a=await u(o),{maxPages:s}=e.options,d=n?i.Ht:i.VX;return{pages:d(t.pages,a,s),pageParams:d(t.pageParams,r,s)}};if(o&&a.length){let e="backward"===o,t={pages:a,pageParams:s},i=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:f)(n,t);r=await d(t,i,e)}else{r=await d({pages:[],pageParams:[]},s[0]??n.initialPageParam);let e=t??a.length;for(let t=1;t<e;t++){let e=f(n,r);r=await d(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(n,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=n}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return this.#o.resumePausedMutations()}getQueryCache(){return this.#y}getMutationCache(){return this.#o}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#v.set((0,i.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#v.values()],r={};return t.forEach(t=>{(0,i.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#x.set((0,i.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#x.values()],r={};return t.forEach(t=>{(0,i.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,i.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),void 0===t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#y.clear(),this.#o.clear()}}},53028:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});var i=r(28651),n=class{#P;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#P=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(i.sk?1/0:3e5))}clearGcTimeout(){this.#P&&(clearTimeout(this.#P),this.#P=void 0)}}},50256:(e,t,r)=>{"use strict";r.d(t,{DV:()=>c,Kw:()=>s,Mz:()=>u});var i=r(98441),n=r(55658),o=r(28651);function a(e){return Math.min(1e3*2**e,3e4)}function s(e){return(e??"online")!=="online"||n.N.isOnline()}var l=class{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function c(e){return e instanceof l}function u(e){let t,r,c,u=!1,d=0,h=!1,p=new Promise((e,t)=>{r=e,c=t}),f=()=>!i.j.isFocused()||"always"!==e.networkMode&&!n.N.isOnline(),g=i=>{h||(h=!0,e.onSuccess?.(i),t?.(),r(i))},m=r=>{h||(h=!0,e.onError?.(r),t?.(),c(r))},b=()=>new Promise(r=>{t=e=>{let t=h||!f();return t&&r(e),t},e.onPause?.()}).then(()=>{t=void 0,h||e.onContinue?.()}),w=()=>{let t;if(!h){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(g).catch(t=>{if(h)return;let r=e.retry??(o.sk?0:3),i=e.retryDelay??a,n="function"==typeof i?i(d,t):i,s=!0===r||"number"==typeof r&&d<r||"function"==typeof r&&r(d,t);if(u||!s){m(t);return}d++,e.onFail?.(d,t),(0,o._v)(n).then(()=>{if(f())return b()}).then(()=>{u?m(t):w()})})}};return s(e.networkMode)?w():b().then(w),{promise:p,cancel:t=>{h||(m(new l(t)),e.abort?.())},continue:()=>t?.()?p:Promise.resolve(),cancelRetry:()=>{u=!0},continueRetry:()=>{u=!1}}}},80057:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},28651:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>v,Kp:()=>s,PN:()=>a,Rm:()=>u,SE:()=>o,VS:()=>p,VX:()=>y,X7:()=>c,Ym:()=>d,ZT:()=>n,_v:()=>b,_x:()=>l,oE:()=>w,sk:()=>i,to:()=>h});var i=!0;function n(){}function o(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(a){if(i){if(t.queryHash!==u(a,t.options))return!1}else if(!h(t.queryKey,a))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===n||n===t.state.fetchStatus)&&(!o||!!o(t))}function c(e,t){let{exact:r,status:i,predicate:n,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(d(t.options.mutationKey)!==d(o))return!1}else if(!h(t.options.mutationKey,o))return!1}return(!i||t.state.status===i)&&(!n||!!n(t))}function u(e,t){return(t?.queryKeyHashFn||d)(e)}function d(e){return JSON.stringify(e,(e,t)=>g(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function p(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function f(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function g(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function b(e){return new Promise(t=>{setTimeout(t,e)})}function w(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?function e(t,r){if(t===r)return t;let i=f(t)&&f(r);if(i||g(t)&&g(r)){let n=i?t:Object.keys(t),o=n.length,a=i?r:Object.keys(r),s=a.length,l=i?[]:{},c=0;for(let o=0;o<s;o++){let s=i?o:a[o];!i&&void 0===t[s]&&void 0===r[s]&&n.includes(s)?(l[s]=void 0,c++):(l[s]=e(t[s],r[s]),l[s]===t[s]&&void 0!==t[s]&&c++)}return o===s&&c===o?t:l}return r}(e,t):t}function y(e,t,r=0){let i=[...e,t];return r&&i.length>r?i.slice(1):i}function v(e,t,r=0){let i=[t,...e];return r&&i.length>r?i.slice(0,-1):i}},26274:(e,t,r)=>{"use strict";r.d(t,{NL:()=>a,aH:()=>s});var i=r(3729),n=r(95344),o=i.createContext(void 0),a=e=>{let t=i.useContext(o);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},s=({client:e,children:t})=>(i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,n.jsx)(o.Provider,{value:e,children:t}))},56908:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var i=r(21356);async function n(e,t){let r;if((r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new i.wi;try{e.setState(e=>({...e,status:"connecting"})),r.emitter.emit("message",{type:"connecting"});let i=await r.connect({chainId:t.chainId}),n=i.accounts;return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",r.id),e.setState(e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:n,chainId:i.chainId,connector:r}),current:r.uid,status:"connected"})),{accounts:n,chainId:i.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}},49770:(e,t,r)=>{"use strict";function i(e){let t=e.state.current,r=e.state.connections.get(t),i=r?.accounts,n=i?.[0],o=e.chains.find(e=>e.id===r?.chainId),a=e.state.status;switch(a){case"connected":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}r.d(t,{D:()=>i})},9626:(e,t,r)=>{"use strict";r.d(t,{e:()=>s});var i=r(42628),n=r(36370),o=r(29317),a=r(21356);async function s(e,t={}){let r;if(t.connector){let{connector:e}=t,[i,n]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:i,chainId:n,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new a.aH;let s=t.chainId??r.chainId,l=r.connector;if(l.getClient)return l.getClient({chainId:s});let c=(0,o.T)(t.account??r.accounts[0]),u=e.chains.find(e=>e.id===s),d=await r.connector.getProvider({chainId:s});if(t.account&&!r.accounts.includes(c.address))throw new a.JK({address:c.address,connector:l});return(0,i.e)({account:c,chain:u,name:"Connector Client",transport:e=>(function(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})})(d)({...e,retryCount:0})})}},15121:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var i=r(91649),n=r(79254),o=r(14418),a=r(47401),s=r(12982),l=r(63101),c=r(9710),u=r(95164),d=r(59106),h=r(71844);async function p(e,t){let{allowFailure:r=!0,batchSize:p,blockNumber:f,blockTag:g,multicallAddress:m,stateOverride:b}=t,w=t.contracts,y=p??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),v=m;if(!v){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");v=(0,c.L)({blockNumber:f,chain:e.chain,contract:"multicall3"})}let x=[[]],C=0,_=0;for(let e=0;e<w.length;e++){let{abi:t,address:i,args:n,functionName:o}=w[e];try{let e=(0,l.R)({abi:t,args:n,functionName:o});_+=(e.length-2)/2,y>0&&_>y&&x[C].length>0&&(C++,_=(e.length-2)/2,x[C]=[]),x[C]=[...x[C],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=(0,u.S)(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;x[C]=[...x[C],{allowFailure:!0,callData:"0x",target:i}]}}let E=await Promise.allSettled(x.map(t=>(0,d.s)(e,h.L,"readContract")({abi:i.F8,address:v,args:[t],blockNumber:f,blockTag:g,functionName:"aggregate3",stateOverride:b}))),P=[];for(let e=0;e<E.length;e++){let t=E[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<x[e].length;r++)P.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:o,success:l}=i[t],{callData:c}=x[e][t],{abi:d,address:h,functionName:p,args:f}=w[P.length];try{if("0x"===c)throw new n.wb;if(!l)throw new a.VQ({data:o});let e=(0,s.k)({abi:d,args:f,data:o,functionName:p});P.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,u.S)(t,{abi:d,address:h,args:f,docsPath:"/docs/contract/multicall",functionName:p});if(!r)throw e;P.push({error:e,result:void 0,status:"failure"})}}}if(P.length!==w.length)throw new o.G("multicall results mismatch");return P}var f=r(56779);async function g(e,t){let{allowFailure:r=!0,chainId:i,contracts:n,...o}=t,a=e.getClient({chainId:i});return(0,f.s)(a,p,"multicall")({allowFailure:r,contracts:n,...o})}},7312:(e,t,r)=>{"use strict";r.d(t,{u:()=>o});var i=r(1829),n=r(49770);function o(e,t){let{onChange:r}=t;return e.subscribe(()=>(0,n.D)(e),r,{equalityFn(e,t){let{connector:r,...n}=e,{connector:o,...a}=t;return(0,i.v)(n,a)&&r?.id===o?.id&&r?.uid===o?.uid}})}},69163:(e,t,r)=>{"use strict";function i(e,t){let{onChange:r}=t;return e._internal.connectors.subscribe((e,t)=>{r(Object.values(e),t)})}r.d(t,{f:()=>i})},84658:(e,t,r)=>{"use strict";function i(e,t){return JSON.parse(e,(e,r)=>{let i=r;return i?.__type==="bigint"&&(i=BigInt(i.value)),i?.__type==="Map"&&(i=new Map(i.value)),t?.(e,i)??i})}function n(e,t){return e.slice(0,t).join(".")||"."}function o(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function a(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,a=[],s=[];return function(l,c){if("object"==typeof c){if(a.length){let e=o(a,this);0===e?a[a.length]=this:(a.splice(e),s.splice(e)),s[s.length]=l;let r=o(a,c);if(0!==r)return i?t.call(this,l,c,n(s,r)):`[ref=${n(s,r)}]`}else a[0]=c,s[0]=l}return r?e.call(this,l,c):c}}((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i},i),r??void 0)}function s(e){let{deserialize:t=i,key:r="wagmi",serialize:n=a,storage:o=l}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...o,key:r,async getItem(e,i){let n=o.getItem(`${r}.${e}`),a=await s(n);return a?t(a)??null:i??null},async setItem(e,t){let i=`${r}.${e}`;null===t?await s(o.removeItem(i)):await s(o.setItem(i,n(t)))},async removeItem(e){await s(o.removeItem(`${r}.${e}`))}}}r.d(t,{o:()=>s,w:()=>l});let l={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},86120:(e,t,r)=>{"use strict";r.d(t,{G:()=>l});var i,n,o=r(40695);let a=()=>`@wagmi/core@${o.i}`;var s=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class l extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return a()}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof l?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof l&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,i,"m",n).call(this,this,e)}}i=new WeakSet,n=function e(t,r){return r?.(t)?t:t.cause?s(this,i,"m",e).call(this,t.cause,r):t}},21356:(e,t,r)=>{"use strict";r.d(t,{JK:()=>s,X4:()=>n,aH:()=>a,wi:()=>o});var i=r(86120);class n extends i.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class o extends i.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends i.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends i.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}},88364:(e,t,r)=>{"use strict";r.d(t,{M:()=>n,O:()=>o});var i=r(86120);class n extends i.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class o extends i.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},54193:(e,t,r)=>{"use strict";r.d(t,{Dr:()=>i});let i={getItem:e=>null,setItem(e,t){},removeItem(e){}}},1829:(e,t,r)=>{"use strict";r.d(t,{v:()=>function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!==r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}})},56779:(e,t,r)=>{"use strict";function i(e,t,r){let i=e[t.name??r];return"function"==typeof i?i:r=>t(e,r)}r.d(t,{s:()=>i})},40695:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});let i="2.6.5"},6640:(e,t,r)=>{"use strict";r.d(t,{E:()=>a});var i=r(48869),n=r(50962),o=r(38464);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0)}},15306:(e,t,r)=>{"use strict";r.d(t,{AccountController:()=>u,ApiController:()=>A,fz:()=>q,Lr:()=>D,ConnectionController:()=>H,ConnectorController:()=>C,bq:()=>s,j1:()=>l,Xs:()=>I,IN:()=>N,NetworkController:()=>S,OptionsController:()=>v,Ie:()=>E,RouterController:()=>$,_4:()=>K,yD:()=>V,SnackController:()=>z,MO:()=>m,ThemeController:()=>Y,sl:()=>F});var i=r(82506);function n(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}Symbol();let o=new WeakMap,a="https://secure.web3modal.com",s={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:a,SECURE_SITE_DASHBOARD:`${a}/dashboard`,SECURE_SITE_FAVICON:`${a}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},l={isMobile:()=>!1,isAndroid(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>!1,isPairingExpired:e=>!e||e-Date.now()<=s.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=s.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+s.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}),l.wait(2e3)]),formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return s.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>l.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>l.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>l.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},c=(0,i.sj)({isConnected:!1}),u={state:c,subscribe:e=>(0,i.Ld)(c,()=>e(c)),subscribeKey:(e,t)=>n(c,e,t),setIsConnected(e){c.isConnected=e},setCaipAddress(e){c.caipAddress=e,c.address=e?l.getPlainAddress(e):void 0},setBalance(e,t){c.balance=e,c.balanceSymbol=t},setProfileName(e){c.profileName=e},setProfileImage(e){c.profileImage=e},setAddressExplorerUrl(e){c.addressExplorerUrl=e},resetAccount(){c.isConnected=!1,c.caipAddress=void 0,c.address=void 0,c.balance=void 0,c.balanceSymbol=void 0,c.profileName=void 0,c.profileImage=void 0,c.addressExplorerUrl=void 0}};class d{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let h="WALLETCONNECT_DEEPLINK_CHOICE",p="@w3m/recent",f="@w3m/connected_wallet_image_url",g="@w3m/connected_connector",m={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(h,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(h)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=m.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(p,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(p);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(g,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(g)}catch{console.info("Unable to get Connected Connector")}}},b=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),w={state:b,subscribeNetworkImages:e=>(0,i.Ld)(b.networkImages,()=>e(b.networkImages)),subscribeKey:(e,t)=>n(b,e,t),setWalletImage(e,t){b.walletImages[e]=t},setNetworkImage(e,t){b.networkImages[e]=t},setConnectorImage(e,t){b.connectorImages[e]=t},setTokenImage(e,t){b.tokenImages[e]=t}},y=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),v={state:y,subscribeKey:(e,t)=>n(y,e,t),setProjectId(e){y.projectId=e},setAllWallets(e){y.allWallets=e},setIncludeWalletIds(e){y.includeWalletIds=e},setExcludeWalletIds(e){y.excludeWalletIds=e},setFeaturedWalletIds(e){y.featuredWalletIds=e},setTokens(e){y.tokens=e},setTermsConditionsUrl(e){y.termsConditionsUrl=e},setPrivacyPolicyUrl(e){y.privacyPolicyUrl=e},setCustomWallets(e){y.customWallets=e},setEnableAnalytics(e){y.enableAnalytics=e},setSdkVersion(e){y.sdkVersion=e},setMetadata(e){y.metadata=e}},x=(0,i.sj)({connectors:[]}),C={state:x,subscribeKey:(e,t)=>n(x,e,t),setConnectors(e){x.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){if(x.connectors.push((0,i.iH)(e)),"w3mEmail"===e.id){let t=(0,i.CO)(v.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId})}},getEmailConnector:()=>x.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>x.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>x.connectors},_=(0,i.sj)({open:!1,selectedNetworkId:void 0}),E={state:_,subscribe:e=>(0,i.Ld)(_,()=>e(_)),set(e){Object.assign(_,{..._,...e})}},P=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),S={state:P,subscribeKey:(e,t)=>n(P,e,t),_getClient(){if(!P._client)throw Error("NetworkController client not set");return P._client},setClient(e){P._client=(0,i.iH)(e)},setCaipNetwork(e){P.caipNetwork=e,E.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){P.caipNetwork=e,E.set({selectedNetworkId:e?.id}),P.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){P.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();P.supportsAllNetworks=e.supportsAllNetworks,P.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),P.caipNetwork=e},resetNetwork(){P.isDefaultCaipNetwork||(P.caipNetwork=void 0),P.approvedCaipNetworkIds=void 0,P.supportsAllNetworks=!0}},R=new d({baseUrl:l.getApiUrl()}),O=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),A={state:O,subscribeKey:(e,t)=>n(O,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${R.baseUrl}/getWalletImage/${e}`,r=await R.getBlob({path:t,headers:A._getApiHeaders()});w.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${R.baseUrl}/public/getAssetImage/${e}`,r=await R.getBlob({path:t,headers:A._getApiHeaders()});w.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${R.baseUrl}/public/getAssetImage/${e}`,r=await R.getBlob({path:t,headers:A._getApiHeaders()});w.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=S.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>A._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=C.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>A._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=v.state;if(e?.length){let{data:t}=await R.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>A._fetchWalletImage(e))),O.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=v.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await R.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=m.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>A._fetchWalletImage(e))),O.recommended=n,O.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=v.state,n=[...O.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await R.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:n.join(",")}}),s=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>A._fetchWalletImage(e)),l.wait(300)]),O.wallets=[...O.wallets,...o],O.count=a>O.count?a:O.count,O.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=v.state;O.search=[];let{data:i}=await R.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>A._fetchWalletImage(e)),l.wait(300)]),O.search=i},prefetch(){O.prefetchPromise=Promise.race([Promise.allSettled([A.fetchFeaturedWallets(),A.fetchRecommendedWallets(),A.fetchNetworkImages(),A.fetchConnectorImages()]),l.wait(3e3)])}};new d({baseUrl:l.getAnalyticsUrl()});let T=["MODAL_CREATED"],k=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),I={state:k,subscribe:e=>(0,i.Ld)(k,()=>e(k)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{T.includes(e.data.event);return}catch{}},sendEvent(e){k.timestamp=Date.now(),k.data=e,v.state.enableAnalytics&&I._sendAnalyticsEvent(k)}},j=(0,i.sj)({view:"Connect",history:["Connect"]}),$={state:j,subscribeKey:(e,t)=>n(j,e,t),push(e,t){e!==j.view&&(j.view=e,j.history.push(e),j.data=t)},reset(e){j.view=e,j.history=[e]},replace(e,t){j.history.length>1&&j.history.at(-1)!==e&&(j.view=e,j.history[j.history.length-1]=e,j.data=t)},goBack(){if(j.history.length>1){j.history.pop();let[e]=j.history.slice(-1);e&&(j.view=e)}},goBackToIndex(e){if(j.history.length>1){j.history=j.history.slice(0,e+1);let[t]=j.history.slice(-1);t&&(j.view=t)}}},M=(0,i.sj)({loading:!1,open:!1}),N={state:M,subscribe:e=>(0,i.Ld)(M,()=>e(M)),subscribeKey:(e,t)=>n(M,e,t),async open(e){await A.state.prefetchPromise,e?.view?$.reset(e.view):u.state.isConnected?$.reset("Account"):$.reset("Connect"),M.open=!0,E.set({open:!0}),I.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){M.open=!1,E.set({open:!1}),I.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){M.loading=e}},L=new d({baseUrl:l.getBlockchainApiUrl()}),D={fetchIdentity:({caipChainId:e,address:t})=>L.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:v.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r})=>L.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r?{cursor:r}:{}})},U=(0,i.sj)({message:"",variant:"success",open:!1}),z={state:U,subscribeKey:(e,t)=>n(U,e,t),showSuccess(e){U.message=e,U.variant="success",U.open=!0},showError(e){let t=l.parseError(e);U.message=t,U.variant="error",U.open=!0},hide(){U.open=!1}},B=(0,i.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),F={state:B,subscribe:e=>(0,i.Ld)(B,()=>e(B)),async fetchTransactions(e){let{projectId:t}=v.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");B.loading=!0;try{let r=await D.fetchTransactions({account:e,projectId:t,cursor:B.next}),i=this.filterSpamTransactions(r.data),n=[...B.transactions,...i];B.loading=!1,B.transactions=n,B.transactionsByYear=this.groupTransactionsByYear(B.transactionsByYear,i),B.empty=0===n.length,B.next=r.next?r.next:void 0}catch(r){I.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:B.next}}),z.showError("Failed to fetch transactions"),B.loading=!1,B.empty=!0}},groupTransactionsByYear:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear();e[r]||(e[r]=[]),e[r]?.push(t)}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),resetTransactions(){B.transactions=[],B.transactionsByYear={},B.loading=!1,B.empty=!1,B.next=void 0}},W=(0,i.sj)({wcError:!1,buffering:!1}),H={state:W,subscribeKey:(e,t)=>n(W,e,t),_getClient(){if(!W._client)throw Error("ConnectionController client not set");return W._client},setClient(e){W._client=(0,i.iH)(e)},connectWalletConnect(){W.wcPromise=this._getClient().connectWalletConnect(e=>{W.wcUri=e,W.wcPairingExpiry=l.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e),m.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){W.wcUri=void 0,W.wcPairingExpiry=void 0,W.wcPromise=void 0,W.wcLinking=void 0,W.recentWallet=void 0,F.resetTransactions(),m.deleteWalletConnectDeepLink()},setWcLinking(e){W.wcLinking=e},setWcError(e){W.wcError=e,W.buffering=!1},setRecentWallet(e){W.recentWallet=e},setBuffering(e){W.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Z=(0,i.sj)({status:"uninitialized",isSiweEnabled:!1}),V={state:Z,subscribeKey:(e,t)=>n(Z,e,t),subscribe:e=>(0,i.Ld)(Z,()=>e(Z)),_getClient(){if(!Z._client)throw Error("SIWEController client not set");return Z._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){Z._client=(0,i.iH)(e),Z.status="ready",Z.isSiweEnabled=e.options.enabled},setNonce(e){Z.nonce=e},setStatus(e){Z.status=e},setMessage(e){Z.message=e},setSession(e){Z.session=e}},G=(0,i.sj)({themeMode:"dark",themeVariables:{}}),Y={state:G,subscribe:e=>(0,i.Ld)(G,()=>e(G)),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}},getSnapshot:()=>(0,i.CO)(G)},q={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?w.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?w.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?w.state.connectorImages[e.imageId]:void 0},K={goBackOrCloseModal(){$.state.history.length>1?$.goBack():N.close()},navigateAfterNetworkSwitch(){let{history:e}=$.state,t=e.findIndex(e=>"Networks"===e);t>=1?$.goBackToIndex(t-1):N.close()}}},79452:(e,t,r)=>{"use strict";r.d(t,{bq:()=>i,gk:()=>o,CK:()=>n});let i={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"4.0.0-alpha.2"},n={ConnectorExplorerIds:{[i.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[i.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[i.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[i.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[i.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[i.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[i.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[i.INJECTED_CONNECTOR_ID]:"Browser Wallet",[i.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[i.COINBASE_CONNECTOR_ID]:"Coinbase",[i.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[i.LEDGER_CONNECTOR_ID]:"Ledger",[i.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[i.INJECTED_CONNECTOR_ID]:"INJECTED",[i.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[i.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[i.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},o={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${i.EIP155}:${e}`]=r}),t}}},34212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{W3mModal:()=>u});var i=r(15306),n=r(65199),o=r(73703),a=r(77807);let s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.address,this.isSiweEnabled=i.yD.state.isSiweEnabled,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.yD.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),i.AccountController.subscribe(e=>this.onNewAccountState(e))),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==i.yD.state.status&&await i.ConnectionController.disconnect(),i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await i.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{let e=await i.yD.getSession();e&&!t?await i.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},65199:(e,t,r)=>{"use strict";let i,n,o;r.r(t),r.d(t,{TransactionUtil:()=>it,UiHelperUtil:()=>e7,WuiAccountButton:()=>tu,WuiAllWalletsImage:()=>tm,WuiAvatar:()=>tn,WuiButton:()=>ty,WuiCard:()=>b,WuiCardSelect:()=>tT,WuiCardSelectLoader:()=>t_,WuiChip:()=>tj,WuiConnectButton:()=>tN,WuiCtaButton:()=>tU,WuiEmailInput:()=>tV,WuiFlex:()=>tt,WuiGrid:()=>r5,WuiIcon:()=>e_,WuiIconBox:()=>ts,WuiIconLink:()=>tq,WuiImage:()=>eS,WuiInputElement:()=>tQ,WuiInputNumeric:()=>t1,WuiInputText:()=>tW,WuiLink:()=>t5,WuiListAccordion:()=>rq,WuiListContent:()=>rQ,WuiListItem:()=>t8,WuiListWallet:()=>rd,WuiListWalletTransaction:()=>r1,WuiLoadingHexagon:()=>eO,WuiLoadingSpinner:()=>ek,WuiLoadingThumbnail:()=>e$,WuiLogo:()=>rf,WuiLogoSelect:()=>rb,WuiNetworkButton:()=>rv,WuiNetworkImage:()=>tR,WuiNoticeCard:()=>rV,WuiOtp:()=>r_,WuiQrCode:()=>rA,WuiSearchBar:()=>rk,WuiSeparator:()=>r8,WuiShimmer:()=>eL,WuiSnackbar:()=>r$,WuiTabs:()=>rL,WuiTag:()=>rl,WuiText:()=>eW,WuiTooltip:()=>rz,WuiTransactionListItem:()=>ri,WuiTransactionListItemLoader:()=>ro,WuiTransactionVisual:()=>re,WuiVisual:()=>e6,WuiVisualThumbnail:()=>rW,WuiWalletImage:()=>tp,customElement:()=>g,initializeTheming:()=>l,setColorTheme:()=>c,setThemeVariables:()=>u});var a,s=r(73703);function l(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=d(e).core.cssText,n.textContent=d(e).dark.cssText,o.textContent=d(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),c(t)}function c(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function u(e){i&&n&&o&&(i.textContent=d(e).core.cssText,n.textContent=d(e).dark.cssText,o.textContent=d(e).light.cssText)}function d(e){return{core:s.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,s.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,s.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,s.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,s.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,s.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:s.iv`
      :root {
        --w3m-color-mix: ${(0,s.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,s.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:s.iv`
      :root {
        --w3m-color-mix: ${(0,s.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,s.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let h=s.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,p=s.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,f=s.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function g(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}let m=s.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,b=class extends s.oi{render(){return s.dy`<slot></slot>`}};b.styles=[h,m],b=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([g("wui-card")],b);var w=r(77807);let y=s.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,v=s.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,x=s.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,C=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,E=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,P=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,R=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,O=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,A=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,T=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,k=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,I=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,j=s.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,$=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,M=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,N=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,L=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,D=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,U=s.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,z=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,B=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,F=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,W=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,H=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Z=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,V=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,G=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Y=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,q=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,X=s.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,J=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ee=s.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,et=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,er=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ei=s.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,en=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eo=s.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ea=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,es=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,el=s.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ec=s.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eu=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ed=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eh=s.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ep=s.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ef=s.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,eg=s.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,em=s.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,eb=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ew=s.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ey=s.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,ev=s.YP`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var ex=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eC={allWallets:v,alpha:ev,appStore:x,chromeStore:j,apple:C,arrowBottom:_,arrowLeft:E,arrowRight:P,arrowTop:S,browser:R,checkmark:O,chevronBottom:A,chevronLeft:T,chevronRight:k,chevronTop:I,clock:$,close:M,compass:L,coinPlaceholder:N,copy:D,cursor:U,desktop:z,disconnect:B,discord:F,etherscan:W,extension:H,externalLink:Z,facebook:V,filters:G,github:Y,google:q,helpCircle:K,infoCircle:X,mail:Q,mobile:J,networkPlaceholder:ee,nftPlaceholder:et,off:er,playStore:ei,qrCode:en,refresh:eo,search:ea,swapHorizontal:es,swapHorizontalBold:el,swapVertical:ec,telegram:eu,twitch:ed,twitter:eh,twitterIcon:ep,verify:ef,verifyFilled:eg,wallet:eb,walletConnect:ew,walletPlaceholder:em,warningCircle:ey},e_=class extends s.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,s.dy`${eC[this.name]}`}};e_.styles=[h,f,y],ex([(0,w.Cb)()],e_.prototype,"size",void 0),ex([(0,w.Cb)()],e_.prototype,"name",void 0),ex([(0,w.Cb)()],e_.prototype,"color",void 0),e_=ex([g("wui-icon")],e_);let eE=s.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var eP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eS=class extends s.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return s.dy`<img src=${this.src} alt=${this.alt} />`}};eS.styles=[h,f,eE],eP([(0,w.Cb)()],eS.prototype,"src",void 0),eP([(0,w.Cb)()],eS.prototype,"alt",void 0),eS=eP([g("wui-image")],eS);let eR=s.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eO=class extends s.oi{render(){return s.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eO.styles=[h,eR],eO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([g("wui-loading-hexagon")],eO);let eA=s.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var eT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ek=class extends s.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,s.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ek.styles=[h,eA],eT([(0,w.Cb)()],ek.prototype,"color",void 0),eT([(0,w.Cb)()],ek.prototype,"size",void 0),ek=eT([g("wui-loading-spinner")],ek);let eI=s.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ej=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends s.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return s.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};e$.styles=[h,eI],ej([(0,w.Cb)({type:Number})],e$.prototype,"radius",void 0),e$=ej([g("wui-loading-thumbnail")],e$);let eM=s.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var eN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eL=class extends s.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,s.dy`<slot></slot>`}};eL.styles=[eM],eN([(0,w.Cb)()],eL.prototype,"width",void 0),eN([(0,w.Cb)()],eL.prototype,"height",void 0),eN([(0,w.Cb)()],eL.prototype,"borderRadius",void 0),eL=eN([g("wui-shimmer")],eL);var eD=r(36503),eU=r(88769);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ez=(0,eU.XM)(class extends eU.Xe{constructor(e){if(super(e),e.type!==eU.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eD.Jb}}),eB=s.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var eF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eW=class extends s.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,s.dy`<slot class=${ez(e)}></slot>`}};eW.styles=[h,eB],eF([(0,w.Cb)()],eW.prototype,"variant",void 0),eF([(0,w.Cb)()],eW.prototype,"color",void 0),eF([(0,w.Cb)()],eW.prototype,"align",void 0),eW=eF([g("wui-text")],eW);let eH=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,eZ=s.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,eV=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,eG=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eY=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eq=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eK=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eX=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,eQ=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,eJ=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,e0=s.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e1=s.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,e2=s.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,e3=s.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var e5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e4={browser:eH,dao:eZ,defi:eV,defiAlt:eG,eth:eY,layers:eq,lock:eK,login:eX,network:eQ,nft:eJ,noun:e0,profile:e1,system:e2},e6=class extends s.oi{constructor(){super(...arguments),this.name="browser"}render(){return s.dy`${e4[this.name]}`}};e6.styles=[h,e3],e5([(0,w.Cb)()],e6.prototype,"name",void 0),e6=e5([g("wui-visual")],e6);var e8=r(43191);let e7={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,a=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);a.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${a[0]};
    --local-color-2: ${a[1]};
    --local-color-3: ${a[2]};
    --local-color-4: ${a[3]};
    --local-color-5: ${a[4]};
    --local-radial-circle: ${o}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||"dark"},e9=s.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var te=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tt=class extends s.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e7.getSpacingStyles(this.margin,3)};
    `,s.dy`<slot></slot>`}};tt.styles=[h,e9],te([(0,w.Cb)()],tt.prototype,"flexDirection",void 0),te([(0,w.Cb)()],tt.prototype,"flexWrap",void 0),te([(0,w.Cb)()],tt.prototype,"flexBasis",void 0),te([(0,w.Cb)()],tt.prototype,"flexGrow",void 0),te([(0,w.Cb)()],tt.prototype,"flexShrink",void 0),te([(0,w.Cb)()],tt.prototype,"alignItems",void 0),te([(0,w.Cb)()],tt.prototype,"justifyContent",void 0),te([(0,w.Cb)()],tt.prototype,"columnGap",void 0),te([(0,w.Cb)()],tt.prototype,"rowGap",void 0),te([(0,w.Cb)()],tt.prototype,"gap",void 0),te([(0,w.Cb)()],tt.prototype,"padding",void 0),te([(0,w.Cb)()],tt.prototype,"margin",void 0),tt=te([g("wui-flex")],tt);let tr=s.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ti=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tn=class extends s.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return s.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",s.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=e7.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};tn.styles=[h,tr],ti([(0,w.Cb)()],tn.prototype,"imageSrc",void 0),ti([(0,w.Cb)()],tn.prototype,"alt",void 0),ti([(0,w.Cb)()],tn.prototype,"address",void 0),tn=ti([g("wui-avatar")],tn);let to=s.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ta=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ts=class extends s.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,n="opaque"===this.background,o="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,a=`var(--wui-color-${this.backgroundColor})`;return o?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${o||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,s.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ts.styles=[h,p,to],ta([(0,w.Cb)()],ts.prototype,"size",void 0),ta([(0,w.Cb)()],ts.prototype,"backgroundColor",void 0),ta([(0,w.Cb)()],ts.prototype,"iconColor",void 0),ta([(0,w.Cb)()],ts.prototype,"iconSize",void 0),ta([(0,w.Cb)()],ts.prototype,"background",void 0),ta([(0,w.Cb)({type:Boolean})],ts.prototype,"border",void 0),ta([(0,w.Cb)()],ts.prototype,"borderColor",void 0),ta([(0,w.Cb)()],ts.prototype,"icon",void 0),ts=ta([g("wui-icon-box")],ts);let tl=s.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var tc=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tu=class extends s.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return s.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,e8.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${e7.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?s.dy`<wui-image src=${this.networkSrc}></wui-image>`:s.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return s.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tu.styles=[h,p,tl],tc([(0,w.Cb)()],tu.prototype,"networkSrc",void 0),tc([(0,w.Cb)()],tu.prototype,"avatarSrc",void 0),tc([(0,w.Cb)()],tu.prototype,"balance",void 0),tc([(0,w.Cb)({type:Boolean})],tu.prototype,"disabled",void 0),tc([(0,w.Cb)({type:Boolean})],tu.prototype,"isProfileName",void 0),tc([(0,w.Cb)()],tu.prototype,"address",void 0),tc([(0,w.Cb)()],tu.prototype,"charsStart",void 0),tc([(0,w.Cb)()],tu.prototype,"charsEnd",void 0),tu=tc([g("wui-account-button")],tu);let td=s.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var th=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tp=class extends s.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),s.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?s.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:s.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tp.styles=[h,td],th([(0,w.Cb)()],tp.prototype,"size",void 0),th([(0,w.Cb)()],tp.prototype,"name",void 0),th([(0,w.Cb)()],tp.prototype,"imageSrc",void 0),th([(0,w.Cb)()],tp.prototype,"walletIcon",void 0),th([(0,w.Cb)({type:Boolean})],tp.prototype,"installed",void 0),th([(0,w.Cb)()],tp.prototype,"badgeSize",void 0),tp=th([g("wui-wallet-image")],tp);let tf=s.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var tg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tm=class extends s.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return s.dy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>s.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,e8.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>s.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tm.styles=[h,tf],tg([(0,w.Cb)({type:Array})],tm.prototype,"walletImages",void 0),tm=tg([g("wui-all-wallets-image")],tm);let tb=s.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var tw=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ty=class extends s.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return s.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?s.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:s.dy``}};ty.styles=[h,p,tb],tw([(0,w.Cb)()],ty.prototype,"size",void 0),tw([(0,w.Cb)({type:Boolean})],ty.prototype,"disabled",void 0),tw([(0,w.Cb)({type:Boolean})],ty.prototype,"fullWidth",void 0),tw([(0,w.Cb)({type:Boolean})],ty.prototype,"loading",void 0),tw([(0,w.Cb)()],ty.prototype,"variant",void 0),tw([(0,w.Cb)({type:Boolean})],ty.prototype,"hasIconLeft",void 0),tw([(0,w.Cb)({type:Boolean})],ty.prototype,"hasIconRight",void 0),ty=tw([g("wui-button")],ty);let tv=s.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,tx=s.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var tC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t_=class extends s.oi{constructor(){super(...arguments),this.type="wallet"}render(){return s.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?s.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tv}`:s.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};t_.styles=[h,p,tx],tC([(0,w.Cb)()],t_.prototype,"type",void 0),t_=tC([g("wui-card-select-loader")],t_);let tE=s.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,tP=s.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var tS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tR=class extends s.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,s.dy`${this.templateVisual()} ${e?tE:tv}`}templateVisual(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:s.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tR.styles=[h,tP],tS([(0,w.Cb)()],tR.prototype,"size",void 0),tS([(0,w.Cb)()],tR.prototype,"name",void 0),tS([(0,w.Cb)()],tR.prototype,"imageSrc",void 0),tS([(0,w.Cb)({type:Boolean})],tR.prototype,"selected",void 0),tR=tS([g("wui-network-image")],tR);let tO=s.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tT=class extends s.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return s.dy`
      <button data-selected=${(0,e8.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?s.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,e8.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:s.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,e8.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};tT.styles=[h,p,tO],tA([(0,w.Cb)()],tT.prototype,"name",void 0),tA([(0,w.Cb)()],tT.prototype,"type",void 0),tA([(0,w.Cb)()],tT.prototype,"imageSrc",void 0),tA([(0,w.Cb)({type:Boolean})],tT.prototype,"disabled",void 0),tA([(0,w.Cb)({type:Boolean})],tT.prototype,"selected",void 0),tA([(0,w.Cb)({type:Boolean})],tT.prototype,"installed",void 0),tT=tA([g("wui-card-select")],tT);let tk=s.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tj=class extends s.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return s.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:e7.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tj.styles=[h,p,tk],tI([(0,w.Cb)()],tj.prototype,"variant",void 0),tI([(0,w.Cb)()],tj.prototype,"imageSrc",void 0),tI([(0,w.Cb)({type:Boolean})],tj.prototype,"disabled",void 0),tI([(0,w.Cb)()],tj.prototype,"icon",void 0),tI([(0,w.Cb)()],tj.prototype,"href",void 0),tI([(0,w.Cb)()],tj.prototype,"text",void 0),tj=tI([g("wui-chip")],tj);let t$=s.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var tM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tN=class extends s.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return s.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?s.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tN.styles=[h,p,t$],tM([(0,w.Cb)()],tN.prototype,"size",void 0),tM([(0,w.Cb)({type:Boolean})],tN.prototype,"loading",void 0),tN=tM([g("wui-connect-button")],tN);let tL=s.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var tD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tU=class extends s.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return s.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tU.styles=[h,p,tL],tD([(0,w.Cb)({type:Boolean})],tU.prototype,"disabled",void 0),tD([(0,w.Cb)()],tU.prototype,"label",void 0),tD([(0,w.Cb)()],tU.prototype,"buttonLabel",void 0),tU=tD([g("wui-cta-button")],tU);var tz=r(16118);let tB=s.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var tF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tW=class extends s.oi{constructor(){super(...arguments),this.inputElementRef=(0,tz.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return s.dy` ${this.templateIcon()}
      <input
        ${(0,tz.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,e8.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,e8.o)(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?s.dy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tW.styles=[h,p,tB],tF([(0,w.Cb)()],tW.prototype,"size",void 0),tF([(0,w.Cb)()],tW.prototype,"icon",void 0),tF([(0,w.Cb)({type:Boolean})],tW.prototype,"disabled",void 0),tF([(0,w.Cb)()],tW.prototype,"placeholder",void 0),tF([(0,w.Cb)()],tW.prototype,"type",void 0),tF([(0,w.Cb)()],tW.prototype,"keyHint",void 0),tF([(0,w.Cb)()],tW.prototype,"value",void 0),tW=tF([g("wui-input-text")],tW);let tH=s.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var tZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tV=class extends s.oi{constructor(){super(...arguments),this.disabled=!1}render(){return s.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?s.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};tV.styles=[h,tH],tZ([(0,w.Cb)()],tV.prototype,"errorMessage",void 0),tZ([(0,w.Cb)({type:Boolean})],tV.prototype,"disabled",void 0),tZ([(0,w.Cb)()],tV.prototype,"value",void 0),tV=tZ([g("wui-email-input")],tV);let tG=s.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var tY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tq=class extends s.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return s.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};tq.styles=[h,p,f,tG],tY([(0,w.Cb)()],tq.prototype,"size",void 0),tY([(0,w.Cb)({type:Boolean})],tq.prototype,"disabled",void 0),tY([(0,w.Cb)()],tq.prototype,"icon",void 0),tY([(0,w.Cb)()],tq.prototype,"iconColor",void 0),tq=tY([g("wui-icon-link")],tq);let tK=s.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var tX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tQ=class extends s.oi{constructor(){super(...arguments),this.icon="copy"}render(){return s.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};tQ.styles=[h,p,tK],tX([(0,w.Cb)()],tQ.prototype,"icon",void 0),tQ=tX([g("wui-input-element")],tQ);let tJ=s.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var t0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t1=class extends s.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return s.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};t1.styles=[h,p,tJ],t0([(0,w.Cb)({type:Boolean})],t1.prototype,"disabled",void 0),t0([(0,w.Cb)({type:String})],t1.prototype,"value",void 0),t1=t0([g("wui-input-numeric")],t1);let t2=s.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var t3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t5=class extends s.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return s.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};t5.styles=[h,p,t2],t3([(0,w.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),t3([(0,w.Cb)()],t5.prototype,"color",void 0),t5=t3([g("wui-link")],t5);let t4=s.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var t6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t8=class extends s.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return s.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,e8.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return s.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return s.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return s.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?s.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:s.dy``}chevronTemplate(){return this.chevron?s.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};t8.styles=[h,p,t4],t6([(0,w.Cb)()],t8.prototype,"icon",void 0),t6([(0,w.Cb)()],t8.prototype,"iconSize",void 0),t6([(0,w.Cb)()],t8.prototype,"variant",void 0),t6([(0,w.Cb)()],t8.prototype,"iconVariant",void 0),t6([(0,w.Cb)({type:Boolean})],t8.prototype,"disabled",void 0),t6([(0,w.Cb)()],t8.prototype,"imageSrc",void 0),t6([(0,w.Cb)()],t8.prototype,"alt",void 0),t6([(0,w.Cb)({type:Boolean})],t8.prototype,"chevron",void 0),t6([(0,w.Cb)({type:Boolean})],t8.prototype,"loading",void 0),t8=t6([g("wui-list-item")],t8),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(a||(a={}));let t7=s.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var t9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let re=class extends s.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,s.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?s.dy`<div class="swap-images-container">
        ${e?.url?s.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?s.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?s.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?s.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:s.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?s.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};re.styles=[t7],t9([(0,w.Cb)()],re.prototype,"type",void 0),t9([(0,w.Cb)()],re.prototype,"status",void 0),t9([(0,w.Cb)()],re.prototype,"direction",void 0),t9([(0,w.Cb)({type:Boolean})],re.prototype,"onlyDirectionIcon",void 0),t9([(0,w.Cb)({type:Array})],re.prototype,"images",void 0),t9([(0,w.Cb)({type:Object})],re.prototype,"secondImage",void 0),re=t9([g("wui-transaction-visual")],re);let rt=s.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var rr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends s.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return s.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,e8.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,e8.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${a[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?s.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?s.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};ri.styles=[h,rt],rr([(0,w.Cb)()],ri.prototype,"type",void 0),rr([(0,w.Cb)({type:Array})],ri.prototype,"descriptions",void 0),rr([(0,w.Cb)()],ri.prototype,"date",void 0),rr([(0,w.Cb)({type:Boolean})],ri.prototype,"onlyDirectionIcon",void 0),rr([(0,w.Cb)()],ri.prototype,"status",void 0),rr([(0,w.Cb)()],ri.prototype,"direction",void 0),rr([(0,w.Cb)({type:Array})],ri.prototype,"images",void 0),ri=rr([g("wui-transaction-list-item")],ri);let rn=s.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,ro=class extends s.oi{render(){return s.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ro.styles=[h,rn],ro=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([g("wui-transaction-list-item-loader")],ro);let ra=s.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var rs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rl=class extends s.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,s.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rl.styles=[h,ra],rs([(0,w.Cb)()],rl.prototype,"variant",void 0),rl=rs([g("wui-tag")],rl);let rc=s.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var ru=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rd=class extends s.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return s.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?s.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?s.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?s.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:s.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?s.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?s.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rd.styles=[h,p,rc],ru([(0,w.Cb)({type:Array})],rd.prototype,"walletImages",void 0),ru([(0,w.Cb)()],rd.prototype,"imageSrc",void 0),ru([(0,w.Cb)()],rd.prototype,"name",void 0),ru([(0,w.Cb)()],rd.prototype,"tagLabel",void 0),ru([(0,w.Cb)()],rd.prototype,"tagVariant",void 0),ru([(0,w.Cb)()],rd.prototype,"icon",void 0),ru([(0,w.Cb)()],rd.prototype,"walletIcon",void 0),ru([(0,w.Cb)({type:Boolean})],rd.prototype,"installed",void 0),ru([(0,w.Cb)({type:Boolean})],rd.prototype,"disabled",void 0),ru([(0,w.Cb)({type:Boolean})],rd.prototype,"showAllWallets",void 0),rd=ru([g("wui-list-wallet")],rd);let rh=s.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var rp=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rf=class extends s.oi{constructor(){super(...arguments),this.logo="google"}render(){return s.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rf.styles=[h,rh],rp([(0,w.Cb)()],rf.prototype,"logo",void 0),rf=rp([g("wui-logo")],rf);let rg=s.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var rm=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rb=class extends s.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return s.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rb.styles=[h,p,rg],rm([(0,w.Cb)()],rb.prototype,"logo",void 0),rm([(0,w.Cb)({type:Boolean})],rb.prototype,"disabled",void 0),rb=rm([g("wui-logo-select")],rb);let rw=s.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var ry=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rv=class extends s.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return s.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc}></wui-image>`:s.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rv.styles=[h,p,rw],ry([(0,w.Cb)()],rv.prototype,"imageSrc",void 0),ry([(0,w.Cb)({type:Boolean})],rv.prototype,"disabled",void 0),rv=ry([g("wui-network-button")],rv);let rx=s.iv`
  :host {
    position: relative;
    display: block;
  }
`;var rC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r_=class extends s.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return s.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>s.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):e7.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0];if(i&&e7.isNumber(i)){this.updateInput(e,r,i);let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};r_.styles=[h,rx],rC([(0,w.Cb)({type:Number})],r_.prototype,"length",void 0),rC([(0,w.Cb)({type:String})],r_.prototype,"otp",void 0),rC([(0,w.SB)()],r_.prototype,"values",void 0),r_=rC([g("wui-otp")],r_);var rE=r(8035);function rP(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let rS={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(rE.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,c=(o.length-7)*a*t;for(let e=0;e<l.length;e+=1){let t=a*(7-2*e);n.push(s.YP`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let c=Math.floor((r+25)/a),u=o.length/2-c/2,d=o.length/2+c/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>u&&t<d&&r>u&&r<d||h.push([t*a+a/2,r*a+a/2])})});let p={};return h.forEach(([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]}),Object.entries(p).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rP(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push(s.YP`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rP(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rP(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push(s.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}},rR=s.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var rO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rA=class extends s.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,s.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return s.YP`
      <svg height=${e} width=${e}>
        ${rS.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:s.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rA.styles=[h,rR],rO([(0,w.Cb)()],rA.prototype,"uri",void 0),rO([(0,w.Cb)({type:Number})],rA.prototype,"size",void 0),rO([(0,w.Cb)()],rA.prototype,"theme",void 0),rO([(0,w.Cb)()],rA.prototype,"imageSrc",void 0),rO([(0,w.Cb)()],rA.prototype,"alt",void 0),rA=rO([g("wui-qr-code")],rA);let rT=s.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,rk=class extends s.oi{constructor(){super(...arguments),this.inputComponentRef=(0,tz.V)()}render(){return s.dy`
      <wui-input-text
        ${(0,tz.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};rk.styles=[h,rT],rk=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([g("wui-search-bar")],rk);let rI=s.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var rj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r$=class extends s.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return s.dy`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};r$.styles=[h,rI],rj([(0,w.Cb)()],r$.prototype,"backgroundColor",void 0),rj([(0,w.Cb)()],r$.prototype,"iconColor",void 0),rj([(0,w.Cb)()],r$.prototype,"icon",void 0),rj([(0,w.Cb)()],r$.prototype,"message",void 0),r$=rj([g("wui-snackbar")],r$);let rM=s.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var rN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rL=class extends s.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return s.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};rL.styles=[h,p,rM],rN([(0,w.Cb)({type:Array})],rL.prototype,"tabs",void 0),rN([(0,w.Cb)()],rL.prototype,"onTabChange",void 0),rN([(0,w.Cb)({type:Array})],rL.prototype,"buttons",void 0),rN([(0,w.Cb)({type:Boolean})],rL.prototype,"disabled",void 0),rN([(0,w.SB)()],rL.prototype,"activeTab",void 0),rN([(0,w.SB)()],rL.prototype,"localTabWidth",void 0),rN([(0,w.SB)()],rL.prototype,"isDense",void 0),rL=rN([g("wui-tabs")],rL);let rD=s.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var rU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rz=class extends s.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return s.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rz.styles=[h,p,rD],rU([(0,w.Cb)()],rz.prototype,"placement",void 0),rU([(0,w.Cb)()],rz.prototype,"message",void 0),rz=rU([g("wui-tooltip")],rz);let rB=s.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var rF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rW=class extends s.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,s.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:s.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rW.styles=[h,rB],rF([(0,w.Cb)()],rW.prototype,"imageSrc",void 0),rF([(0,w.Cb)()],rW.prototype,"alt",void 0),rF([(0,w.Cb)({type:Boolean})],rW.prototype,"borderRadiusFull",void 0),rW=rF([g("wui-visual-thumbnail")],rW);let rH=s.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var rZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rV=class extends s.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return s.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};rV.styles=[h,p,rH],rZ([(0,w.Cb)()],rV.prototype,"label",void 0),rZ([(0,w.Cb)()],rV.prototype,"description",void 0),rZ([(0,w.Cb)()],rV.prototype,"icon",void 0),rV=rZ([g("wui-notice-card")],rV);let rG=s.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var rY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rq=class extends s.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{let e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;let t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}},0)}render(){return s.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?s.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};rq.styles=[h,p,rG],rY([(0,w.Cb)()],rq.prototype,"textTitle",void 0),rY([(0,w.Cb)()],rq.prototype,"overflowedContent",void 0),rq=rY([g("wui-list-accordion")],rq);let rK=s.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var rX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rQ=class extends s.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return s.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?s.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?s.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:s.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rQ.styles=[h,p,rK],rX([(0,w.Cb)()],rQ.prototype,"imageSrc",void 0),rX([(0,w.Cb)()],rQ.prototype,"textTitle",void 0),rX([(0,w.Cb)()],rQ.prototype,"textValue",void 0),rQ=rX([g("wui-list-content")],rQ);let rJ=s.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var r0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r1=class extends s.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return s.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?s.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:s.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r1.styles=[h,p,rJ],r0([(0,w.Cb)()],r1.prototype,"amount",void 0),r0([(0,w.Cb)()],r1.prototype,"networkCurreny",void 0),r0([(0,w.Cb)()],r1.prototype,"networkImageUrl",void 0),r0([(0,w.Cb)()],r1.prototype,"receiverAddress",void 0),r1=r0([g("wui-list-wallet-transaction")],r1);let r2=s.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var r3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r5=class extends s.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e7.getSpacingStyles(this.margin,3)};
    `,s.dy`<slot></slot>`}};r5.styles=[h,r2],r3([(0,w.Cb)()],r5.prototype,"gridTemplateRows",void 0),r3([(0,w.Cb)()],r5.prototype,"gridTemplateColumns",void 0),r3([(0,w.Cb)()],r5.prototype,"justifyItems",void 0),r3([(0,w.Cb)()],r5.prototype,"alignItems",void 0),r3([(0,w.Cb)()],r5.prototype,"justifyContent",void 0),r3([(0,w.Cb)()],r5.prototype,"alignContent",void 0),r3([(0,w.Cb)()],r5.prototype,"columnGap",void 0),r3([(0,w.Cb)()],r5.prototype,"rowGap",void 0),r3([(0,w.Cb)()],r5.prototype,"gap",void 0),r3([(0,w.Cb)()],r5.prototype,"padding",void 0),r3([(0,w.Cb)()],r5.prototype,"margin",void 0),r5=r3([g("wui-grid")],r5);let r4=s.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var r6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r8=class extends s.oi{constructor(){super(...arguments),this.text=""}render(){return s.dy`${this.template()}`}template(){return this.text?s.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};r8.styles=[h,r4],r6([(0,w.Cb)()],r8.prototype,"text",void 0),r8=r6([g("wui-separator")],r8);var r7=r(6640);let r9=["receive","deposit","borrow","claim"],ie=["withdraw","repay","burn"],it={getTransactionGroupTitle:e=>e===r7.E.getYear()?"This Year":e,getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||i?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:it.getTransactionTransferTokenType(e),url:it.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,r=e.transfers,i=e.transfers?.length>0,n=e.transfers?.length>1,o=i&&r?.every(e=>!!e.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i)return("send"===t||"receive"===t)&&o?[l=e7.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),e7.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return r.map(e=>this.getTransferDescription(e));let c="";return r9.includes(t)?c="+":ie.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},28667:(e,t,r)=>{"use strict";let i;r.d(t,{o:()=>M}),r(14300);var n,o=r(1564),a=r(42628);let s=e=>(t,r,i)=>{let n=i.subscribe;return i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)},e(t,r,i)},l=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>l(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>l(t)(e)}}},c=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,u=new Set,d=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=l(s.serialize),p=()=>{let e;let t=h({state:s.partialize({...i()}),version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=n.setState;n.setState=(e,t)=>{f(e,t),p()};let g=e((...e)=>{r(...e),p()},i,n),m=()=>{var e;if(!o)return;c=!1,u.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return l(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:g),!0),p()}).then(()=>{null==t||t(a,void 0),c=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},m(),a||g},u=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;let n=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(i=r.getItem(e))?i:null;return o instanceof Promise?o.then(n):n(o)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,c=new Set,u=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=()=>{let e=a.partialize({...i()});return d.setItem(a.name,{state:e,version:a.version})},p=n.setState;n.setState=(e,t)=>{p(e,t),h()};let f=e((...e)=>{r(...e),h()},i,n),g=()=>{var e,t;if(!d)return;s=!1,c.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:f))||void 0;return l(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=i())?t:f),!0),h()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,u.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},a.skipHydration||g(),o||f},d=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),c(e,t)):u(e,t),h=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},p=e=>e?h(e):h;var f=r(97542),g=r(25054),m=r(67843),b=r(51774),w=r(40033),y=r(21356),v=r(88364);function x(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}let C={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:E(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>E(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:E(e,"isPhantom")}};function _(e={}){let{shimDisconnect:t=!0,unstable_shimAsyncInject:r}=e;function i(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...C[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return n=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},type:_.type,async setup(){let t=await this.getProvider();t&&e.target&&t.on("connect",this.onConnect.bind(this))},async connect({chainId:r,isReconnecting:i}={}){let o=await this.getProvider();if(!o)throw new v.M;let a=null;if(!i&&(a=await this.getAccounts().catch(()=>null),a?.length))try{let e=await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});a=e[0]?.caveats?.[0]?.value?.map(e=>f.K(e))}catch(e){if(e.code===g.ab.code)throw new g.ab(e);if(e.code===g.pT.code)throw e}try{a?.length||(a=(await o.request({method:"eth_requestAccounts"})).map(e=>(0,f.K)(e))),o.removeListener("connect",this.onConnect.bind(this)),o.on("accountsChanged",this.onAccountsChanged.bind(this)),o.on("chainChanged",this.onChainChanged),o.on("disconnect",this.onDisconnect.bind(this));let i=await this.getChainId();if(r&&i!==r){let e=await this.switchChain({chainId:r}).catch(e=>{if(e.code===g.ab.code)throw e;return{id:i}});i=e?.id??i}return t&&(await n.storage?.removeItem(`${this.id}.disconnected`),e.target||await n.storage?.setItem("injected.connected",!0)),{accounts:a,chainId:i}}catch(e){if(e.code===g.ab.code)throw new g.ab(e);if(e.code===g.pT.code)throw new g.pT(e);throw e}},async disconnect(){let r=await this.getProvider();if(!r)throw new v.M;r.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),r.removeListener("chainChanged",this.onChainChanged),r.removeListener("disconnect",this.onDisconnect.bind(this)),r.on("connect",this.onConnect.bind(this)),t&&(await n.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await n.storage?.removeItem("injected.connected"))},async getAccounts(){let e=await this.getProvider();if(!e)throw new v.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,f.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new v.M;return x(await e.request({method:"eth_chainId"}))},async getProvider(){},async isAuthorized(){try{if(t&&await n.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await n.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==r&&!1!==r){let e=async()=>!!await this.getProvider(),t="number"==typeof r?r:1e3;if(await Promise.race([new Promise(r=>setTimeout(()=>r(e()),t))]))return!0}throw new v.M}return!!(await (0,m.J)(()=>(0,b.F)(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:e}){let t=await this.getProvider();if(!t)throw new v.M;let r=n.chains.find(t=>t.id===e);if(!r)throw new g.x3(new y.X4);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(e)}]}),new Promise(t=>n.emitter.once("change",({chainId:r})=>{r===e&&t()}))]),r}catch(i){if(4902===i.code||i?.data?.originalError?.code===4902)try{let{default:i,...n}=r.blockExplorers??{},o=[];if(i&&(o=[i.url,...Object.values(n).map(e=>e.url)]),await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,w.eC)(e),chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.default?.http[0]??""],blockExplorerUrls:o}]}),await this.getChainId()!==e)throw new g.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new g.ab(e)}if(i.code===g.ab.code)throw new g.ab(i);throw new g.x3(i)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(n.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),t&&await n.storage?.removeItem(`${this.id}.disconnected`)}else n.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=x(e);n.emitter.emit("change",{chainId:t})},async onConnect(e){let t=await this.getAccounts();if(0===t.length)return;let r=x(e.chainId);n.emitter.emit("connect",{accounts:t,chainId:r});let i=await this.getProvider();i&&(i.removeListener("connect",this.onConnect.bind(this)),i.on("accountsChanged",this.onAccountsChanged.bind(this)),i.on("chainChanged",this.onChainChanged),i.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(n.emitter.emit("disconnect"),t&&(t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.on("connect",this.onConnect.bind(this))))}})}function E(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let i=e.ethereum;return i?.providers?i.providers.find(e=>r(e)):i&&r(i)?i:void 0}_.type="injected";var P=r(14149),S=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class R{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),n.set(this,new P)}on(e,t){S(this,n,"f").on(e,t)}once(e,t){S(this,n,"f").once(e,t)}off(e,t){S(this,n,"f").off(e,t)}emit(e,...t){let r=t[0];S(this,n,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return S(this,n,"f").listenerCount(e)}}n=new WeakMap;var O=r(84658);let A=256;var T=r(40695);function k(e){let t,i;let n=e.isNewChainsStale??!0,o="eip155";return a=>({id:"walletConnect",name:"WalletConnect",type:k.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new v.M;r.on("display_uri",this.onDisplayUri);let i=e;if(!i){let e=await a.storage?.getItem("state")??{};i=a.chains.some(t=>t.id===e.chainId)?e.chainId:a.chains[0]?.id}if(!i)throw Error("No chains found on connector.");let n=await this.isChainsStale();if(r.session&&n&&await r.disconnect(),!r.session||n){let e=a.chains.filter(e=>e.id!==i).map(e=>e.id);await r.connect({optionalChains:[i,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(a.chains.map(e=>e.id))}let o=(await r.enable()).map(e=>(0,f.K)(e)),s=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:o,chainId:s}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new g.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,f.K)(e))},async getProvider({chainId:n}={}){async function o(){let t=a.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await r.e(97).then(r.bind(r,39097));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(a.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(i||(i=o()),t=await i,t?.events.setMaxListeners(1/0)),n&&await this.switchChain?.({chainId:n}),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({chainId:e}){let t=a.chains.find(t=>t.id===e);if(!t)throw new g.x3(new y.X4);try{let r=await this.getProvider(),i=this.getNamespaceChainsIds(),n=this.getNamespaceMethods();if(!i.includes(e)&&n.includes("wallet_addEthereumChain")){await r.request({method:"wallet_addEthereumChain",params:[{chainId:(0,w.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=await this.getRequestedChainsIds();this.setRequestedChainsIds([...i,e])}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new g.ab(t);throw new g.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():a.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=x(e);a.emitter.emit("change",{chainId:t})},async onConnect(e){let t=x(e.chainId),r=await this.getAccounts();a.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),a.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){a.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>t?t.session?.namespaces[o]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]:[],getNamespaceMethods:()=>t?t.session?.namespaces[o]?.methods??[]:[],async getRequestedChainsIds(){return await a.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!n)return!1;let e=a.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await a.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function I(e){let t,i;return n=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:I.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,f.K)(e));t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect.bind(this));let i=await this.getChainId();if(e&&i!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===g.ab.code)throw e;return{id:i}});i=t?.id??i}return{accounts:r,chainId:i}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new g.ab(e);throw e}},async disconnect(){let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect.bind(this)),e.disconnect(),e.close()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,f.K)(e))},async getChainId(){let e=await this.getProvider();return x(await e.request({method:"eth_chainId"}))},async getProvider(){if(!i){let{default:o}=await r.e(782).then(r.t.bind(r,88782,19));t=new("function"!=typeof o&&"function"==typeof o.default?o.default:o)({reloadOnDisconnect:!1,...e});let a=t.walletExtension?.getChainId(),s=n.chains.find(t=>e.chainId?t.id===e.chainId:t.id===a)||n.chains[0],l=e.chainId||s?.id,c=e.jsonRpcUrl||s?.rpcUrls.default.http[0];i=t.makeWeb3Provider(c,l)}return i},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:e}){let t=n.chains.find(t=>t.id===e);if(!t)throw new g.x3(new y.X4);let r=await this.getProvider(),i=(0,w.eC)(t.id);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),t}catch(e){if(4902===e.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[t.rpcUrls.default?.http[0]??""],blockExplorerUrls:[t.blockExplorers?.default.url]}]}),t}catch(e){throw new g.ab(e)}throw new g.x3(e)}},onAccountsChanged(e){0===e.length?n.emitter.emit("disconnect"):n.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=x(e);n.emitter.emit("change",{chainId:t})},async onDisconnect(e){n.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this))}})}k.type="walletConnect",I.type="coinbaseWallet";var j=r(90411),$=r(79452);function M({projectId:e,chains:t,metadata:r,enableInjected:n,enableCoinbase:l,enableEmail:c,enableWalletConnect:u,enableEIP6963:h,...m}){var b;let w=[],v=Object.fromEntries(t.map(e=>[e.id,(0,o.d)()]));return!1!==u&&w.push(k({projectId:e,metadata:r,showQrModal:!1})),!1!==n&&w.push(_({shimDisconnect:!0})),!1!==l&&w.push(I({appName:r?.name??"Unknown",appLogoUrl:r?.icons[0]??"Unknown"})),!0===c&&w.push((b={chains:[...t],options:{projectId:e}},e=>({id:$.bq.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(e={}){let t=await this.getProvider(),{address:r,chainId:i}=await t.connect({chainId:e.chainId});return{accounts:[r],account:r,chainId:i,chain:{id:i,unsuported:!1}}},async disconnect(){let e=await this.getProvider();await e.disconnect()},async getAccounts(){let e=await this.getProvider(),{address:t}=await e.connect();return[t]},async getProvider(){return this.provider||(this.provider=new j.Sd(b.options.projectId)),Promise.resolve(this.provider)},async getChainId(){let e=await this.getProvider(),{chainId:t}=await e.getChainId();return t},async isAuthorized(){let e=await this.getProvider(),{isConnected:t}=await e.isConnected();return t},async switchChain({chainId:t}){try{let r=e.chains.find(e=>e.id===t);if(!r)throw new g.x3(Error("chain not found on connector."));let i=await this.getProvider();return await i.switchNetwork(t),e.emitter.emit("change",{chainId:x(t)}),r}catch(e){if(e instanceof Error)throw new g.x3(e);throw e}},onAccountsChanged(t){0===t.length?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(f.K)})},onChainChanged(t){let r=x(t);e.emitter.emit("change",{chainId:r})},async onConnect(t){let r=x(t.chainId),i=await this.getAccounts();e.emitter.emit("connect",{accounts:i,chainId:r})},async onDisconnect(e){let t=await this.getProvider();await t.disconnect()}}))),function(e){let t;let{multiInjectedProviderDiscovery:r=!0,storage:n=(0,O.o)({storage:O.w}),syncConnectedChain:o=!0,ssr:l,...c}=e,u=void 0,h=p(()=>c.chains),f=p(()=>[...c.connectors??[],...l?[]:u?.getProviders().map(m)??[]].map(g));function g(e){let t=new R(function(e=11){if(!i||A+e>512){i="",A=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(A,A+++e)}()),r={...e({emitter:t,chains:h.getState(),storage:n}),emitter:t,uid:t.uid};return t.on("connect",E),r.setup?.(),r}function m(e){let{info:t}=e,r=e.provider;return _({target:{...t,id:t.rdns,provider:r}})}let b=new Map;function w(){return{chainId:h.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let v="0.0.0-canary-";t=T.i.startsWith(v)?parseInt(T.i.replace(v,"")):parseInt(T.i.split(".")[0]??"0");let x=p(s(n?d(w,{migrate(e,r){if(r===t)return e;let i=w(),n=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:i.chainId;return{...i,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:i,type:n,uid:o}=t.connector;return[e,{...t,connector:{id:r,name:i,type:n,uid:o}}]})},chainId:e.chainId,current:e.current}),skipHydration:l,storage:n,version:t}):w));function C(e){x.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function E(e){"connecting"!==x.getState().status&&"reconnecting"!==x.getState().status&&x.setState(t=>{let r=f.getState().find(t=>t.uid===e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}:t})}return o&&x.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(h.getState().some(t=>t.id===e))return x.setState(t=>({...t,chainId:e??t.chainId}))}),u?.subscribe(e=>{let t=new Map;for(let e of f.getState())t.set(e.id,!0);let r=[];for(let i of e){let e=g(m(i));t.has(e.id)||r.push(e)}f.setState(e=>[...e,...r],!0)}),{get chains(){return h.getState()},get connectors(){return f.getState()},storage:n,getClient:function(e={}){let t;let r=e.chainId??x.getState().chainId,i=h.getState().find(e=>e.id===r);if(e.chainId&&!i)throw new y.X4;{let e=b.get(x.getState().chainId);if(e&&!i)return e;if(!i)throw new y.X4}{let e=b.get(r);if(e)return e}if(c.client)t=c.client({chain:i});else{let e=i.id,r=h.getState().map(e=>e.id),n={};for(let[t,i]of Object.entries(c))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof i){if(e in i)n[t]=i[e];else{if(r.some(e=>e in i))continue;n[t]=i}}else n[t]=i}t=(0,a.e)({...n,chain:i,batch:n.batch??{multicall:!0},transport:t=>c.transports[e]({...t,connectors:f})})}return b.set(r,t),t},get state(){return x.getState()},setState(e){let t;t="function"==typeof e?e(x.getState()):e;let r=w();"object"!=typeof t&&(t=r),Object.keys(r).some(e=>!(e in t))&&(t=r),x.setState(t,!0)},subscribe:(e,t,r)=>x.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:u,store:x,ssr:!!l,syncConnectedChain:o,transports:c.transports,chains:{setState(e){let t="function"==typeof e?e(h.getState()):e;if(0!==t.length)return h.setState(t,!0)},subscribe:e=>h.subscribe(e)},connectors:{providerDetailToConnector:m,setup:g,setState:e=>f.setState("function"==typeof e?e(f.getState()):e,!0),subscribe:e=>f.subscribe(e)},events:{change:C,connect:E,disconnect:function e(t){x.setState(r=>{let i=r.connections.get(t.uid);if(i&&(i.connector.emitter.off("change",C),i.connector.emitter.off("disconnect",e),i.connector.emitter.on("connect",E)),r.connections.delete(t.uid),0===r.connections.size)return{...r,connections:new Map,current:void 0,status:"disconnected"};let n=r.connections.values().next().value;return{...r,connections:new Map(r.connections),current:n.connector.uid}})}}}}}({chains:t,multiInjectedProviderDiscovery:!1!==h,transports:v,...m,connectors:w})}},74770:(e,t,r)=>{"use strict";let i;r.d(t,{OY:()=>t6}),r(3729);var n=r(21356),o=r(88364);async function a(e,t){let{chainId:r}=t,i=e.state.connections.get(t.connector?.uid??e.state.current);if(i){let e=i.connector;if(!e.switchChain)throw new o.O({connector:e});return await e.switchChain({chainId:r})}let a=e.chains.find(e=>e.id===r);if(!a)throw new n.X4;return e.setState(e=>({...e,chainId:r})),a}var s=r(56908);async function l(e,t={}){let r;if(t.connector)r=t.connector;else{let{connections:t,current:i}=e.state,n=t.get(i);r=n?.connector}let i=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),i.delete(r.uid)),e.setState(e=>{if(0===i.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};let t=i.values().next().value;return{...e,connections:new Map(i),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let r=e.state.connections.get(t)?.connector;if(!r)return;await e.storage?.setItem("recentConnectorId",r.id)}}var c=r(29317),u=r(44705),d=r(40033);async function h(e,{account:t=e.account,message:r}){if(!t)throw new u.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,c.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,d.$G)(r):r.raw instanceof Uint8Array?(0,d.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}var p=r(56779),f=r(9626);async function g(e,t){let r;let{account:i,connector:n,...o}=t;return r="object"==typeof i&&"local"===i.type?e.getClient():await (0,f.e)(e,{account:i,connector:n}),(0,p.s)(r,h,"signMessage")({...o,...i?{account:i}:{}})}var m=r(69163),b=r(7312),w=r(49770),y=r(91649),v=r(9710),x=r(5969),C=r(14418),_=r(47401);function E(e,t){if(!(e instanceof C.G))return!1;let r=e.walk(e=>e instanceof _.Lu);return r instanceof _.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.data?.errorName==="ResolverNotContract"||r.data?.errorName==="ResolverError"||r.data?.errorName==="HttpError"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===x.$[50])}var P=r(47484),S=r(3554),R=r(46071);function O(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,R.v)(t)?t:null}function A(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,P.qX)(t).byteLength+2),i=0,n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,P.qX)(n[e]);if(t.byteLength>255){var o;t=(0,P.qX)((o=function(e){let t=new Uint8Array(32).fill(0);return e?O(e)||(0,S.w)((0,P.qX)(e)):(0,d.ci)(t)}(n[e]),`[${o.slice(2)}]`))}r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}var T=r(59106),k=r(71844);async function I(e,{address:t,blockNumber:r,blockTag:i,gatewayUrls:n,strict:o,universalResolverAddress:a}){let s=a;if(!s){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");s=(0,v.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let o={address:s,abi:y.du,functionName:"reverse",args:[(0,d.NC)(A(l))],blockNumber:r,blockTag:i},a=(0,T.s)(e,k.L,"readContract"),[c,u]=n?await a({...o,args:[...o.args,n]}):await a(o);if(t.toLowerCase()!==u.toLowerCase())return null;return c}catch(e){if(o)throw e;if(E(e,"reverse"))return null;throw e}}class j extends C.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class $ extends C.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class M extends C.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class N extends C.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let L=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,D=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,U=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,z=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function B(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function F(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function W({uri:e,gatewayUrls:t}){let r=U.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=F(t?.ipfs,"https://ipfs.io"),n=F(t?.arweave,"https://arweave.net"),o=e.match(L),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||D.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(z,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new M({uri:e})}function H(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new j({data:e});return e.image||e.image_url||e.image_data}async function Z({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await V({gatewayUrls:e,uri:H(r)})}catch{throw new M({uri:t})}}async function V({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=W({uri:t,gatewayUrls:e});if(i||await B(r))return r;throw new M({uri:t})}async function G(e,{nft:t}){if("erc721"===t.namespace)return(0,k.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,k.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new N({namespace:t.namespace})}async function Y(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?q(e,{gatewayUrls:t,record:r}):V({uri:r,gatewayUrls:t})}async function q(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,l]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new $({reason:"Only EIP-155 supported"});if(!a)throw new $({reason:"Chain ID not found"});if(!l)throw new $({reason:"Contract address not found"});if(!n)throw new $({reason:"Token ID not found"});if(!s)throw new $({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(r),{uri:n,isOnChain:o,isEncoded:a}=W({uri:await G(e,{nft:i}),gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{")))return V({uri:H(JSON.parse(a?atob(n.replace("data:application/json;base64,","")):n)),gatewayUrls:t});let s=i.tokenID;return"erc1155"===i.namespace&&(s=s.replace("0x","").padStart(64,"0")),Z({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,s)})}var K=r(12982),X=r(63101),Q=r(93385);async function J(e,{blockNumber:t,blockTag:r,name:i,key:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=s;if(!l){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");l=(0,v.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a={address:l,abi:y.k3,functionName:"resolve",args:[(0,d.NC)(A(i)),(0,X.R)({abi:y.nZ,functionName:"text",args:[function(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,d.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let i=O(r[e]),n=i?(0,P.O0)(i):(0,S.w)((0,P.qX)(r[e]),"bytes");t=(0,S.w)((0,Q.zo)([t,n]),"bytes")}return(0,d.ci)(t)}(i),n]})],blockNumber:t,blockTag:r},s=(0,T.s)(e,k.L,"readContract"),c=o?await s({...a,args:[...a.args,o]}):await s(a);if("0x"===c[0])return null;let u=(0,K.k)({abi:y.nZ,functionName:"text",data:c[0]});return""===u?null:u}catch(e){if(a)throw e;if(E(e,"resolve"))return null;throw e}}async function ee(e,{blockNumber:t,blockTag:r,assetGatewayUrls:i,name:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,T.s)(e,J,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await Y(e,{record:l,gatewayUrls:i})}catch{return null}}var et=r(5380),er=r(18274),ei=r(35078);async function en(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=r?(0,d.eC)(r):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,n||i]}))}var eo=r(5392);function ea(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(eo.Bd[e])}var es=r(15121);async function el(e,t){let{allowFailure:r=!0,blockNumber:i,blockTag:n,...o}=t,a=t.contracts;try{let t=a.reduce((t,r,i)=>{let n=r.chainId??e.state.chainId;return{...t,[n]:[...t[n]||[],{contract:r,index:i}]}},{}),s=(await Promise.all(Object.entries(t).map(([t,a])=>(0,es.A)(e,{...o,allowFailure:r,blockNumber:i,blockTag:n,chainId:parseInt(t),contracts:a.map(({contract:e})=>e)})))).flat(),l=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return s.reduce((e,t,r)=>(e&&(e[l[r]]=t),e),[])}catch(o){if(o instanceof _.uq)throw o;let t=()=>a.map(t=>(function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,p.s)(n,k.L,"readContract")(i)})(e,{...t,blockNumber:i,blockTag:n}));if(r)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}async function ec(e,t){let{address:r,blockNumber:i,blockTag:n,chainId:o,token:a,unit:s="ether"}=t;if(a)try{return eu(e,{balanceAddress:r,chainId:o,symbolType:"string",tokenAddress:a})}catch(t){if(t instanceof _.uq){let t=await eu(e,{balanceAddress:r,chainId:o,symbolType:"bytes32",tokenAddress:a}),i=(0,et.rR)((0,er.f)(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw t}let l=e.getClient({chainId:o}),c=(0,p.s)(l,en,"getBalance"),u=await c(i?{address:r,blockNumber:i}:{address:r,blockTag:n}),d=e.chains.find(e=>e.id===o)??l.chain;return{decimals:d.nativeCurrency.decimals,formatted:(0,ei.b)(u,ea(s)),symbol:d.nativeCurrency.symbol,value:u}}async function eu(e,t){let{balanceAddress:r,chainId:i,symbolType:n,tokenAddress:o,unit:a}=t,s={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:n}]}],address:o},[l,c,u]=await el(e,{allowFailure:!1,contracts:[{...s,functionName:"balanceOf",args:[r],chainId:i},{...s,functionName:"decimals",chainId:i},{...s,functionName:"symbol",chainId:i}]}),d=(0,ei.b)(l??"0",ea(a??c));return{decimals:c,formatted:d,symbol:u,value:l}}var ed=r(94148),eh=r(15306),ep=r(65199),ef=r(73703),eg=r(77807),em=r(43191),eb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ew=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=eh.AccountController.state.address,this.balanceVal=eh.AccountController.state.balance,this.balanceSymbol=eh.AccountController.state.balanceSymbol,this.profileName=eh.AccountController.state.profileName,this.profileImage=eh.AccountController.state.profileImage,this.network=eh.NetworkController.state.caipNetwork,this.unsubscribe.push(...[eh.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),eh.NetworkController.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=eh.fz.getNetworkImage(this.network),t="show"===this.balance;return ef.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,em.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,em.o)(e)}
        avatarSrc=${(0,em.o)(this.profileImage)}
        balance=${t?eh.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){eh.IN.open()}};eb([(0,eg.Cb)({type:Boolean})],ew.prototype,"disabled",void 0),eb([(0,eg.Cb)()],ew.prototype,"balance",void 0),eb([(0,eg.Cb)()],ew.prototype,"charsStart",void 0),eb([(0,eg.Cb)()],ew.prototype,"charsEnd",void 0),eb([(0,eg.SB)()],ew.prototype,"address",void 0),eb([(0,eg.SB)()],ew.prototype,"balanceVal",void 0),eb([(0,eg.SB)()],ew.prototype,"balanceSymbol",void 0),eb([(0,eg.SB)()],ew.prototype,"profileName",void 0),eb([(0,eg.SB)()],ew.prototype,"profileImage",void 0),eb([(0,eg.SB)()],ew.prototype,"network",void 0),ew=eb([(0,ep.customElement)("w3m-account-button")],ew);let ey=ef.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var ev=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ex=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=eh.AccountController.state.isConnected,this.unsubscribe.push(eh.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?ef.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,em.o)(this.balance)}
            .charsStart=${(0,em.o)(this.charsStart)}
            .charsEnd=${(0,em.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:ef.dy`
          <w3m-connect-button
            size=${(0,em.o)(this.size)}
            label=${(0,em.o)(this.label)}
            loadingLabel=${(0,em.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ex.styles=ey,ev([(0,eg.Cb)({type:Boolean})],ex.prototype,"disabled",void 0),ev([(0,eg.Cb)()],ex.prototype,"balance",void 0),ev([(0,eg.Cb)()],ex.prototype,"size",void 0),ev([(0,eg.Cb)()],ex.prototype,"label",void 0),ev([(0,eg.Cb)()],ex.prototype,"loadingLabel",void 0),ev([(0,eg.Cb)()],ex.prototype,"charsStart",void 0),ev([(0,eg.Cb)()],ex.prototype,"charsEnd",void 0),ev([(0,eg.SB)()],ex.prototype,"isAccount",void 0),ex=ev([(0,ep.customElement)("w3m-button")],ex);var eC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e_=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=eh.IN.state.open,this.loading=eh.IN.state.loading,this.unsubscribe.push(eh.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return ef.dy`
      <wui-connect-button
        size=${(0,em.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?eh.IN.close():this.loading||eh.IN.open()}};eC([(0,eg.Cb)()],e_.prototype,"size",void 0),eC([(0,eg.Cb)()],e_.prototype,"label",void 0),eC([(0,eg.Cb)()],e_.prototype,"loadingLabel",void 0),eC([(0,eg.SB)()],e_.prototype,"open",void 0),eC([(0,eg.SB)()],e_.prototype,"loading",void 0),e_=eC([(0,ep.customElement)("w3m-connect-button")],e_),r(34212);let eE=ef.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var eP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eS=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=eh.NetworkController.state.caipNetwork,this.connected=eh.AccountController.state.isConnected,this.loading=eh.IN.state.loading,this.unsubscribe.push(...[eh.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eh.AccountController.subscribeKey("isConnected",e=>this.connected=e),eh.IN.subscribeKey("loading",e=>this.loading=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ef.dy`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${(0,em.o)(eh.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||eh.IN.open({view:"Networks"})}};eS.styles=eE,eP([(0,eg.Cb)({type:Boolean})],eS.prototype,"disabled",void 0),eP([(0,eg.SB)()],eS.prototype,"network",void 0),eP([(0,eg.SB)()],eS.prototype,"connected",void 0),eP([(0,eg.SB)()],eS.prototype,"loading",void 0),eS=eP([(0,ep.customElement)("w3m-network-button")],eS);let eR=ef.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var eO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eA=class extends ef.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=eh.RouterController.state.view,this.unsubscribe.push(eh.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return ef.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return ef.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return ef.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return ef.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return ef.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return ef.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return ef.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return ef.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return ef.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return ef.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return ef.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return ef.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return ef.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return ef.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return ef.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return ef.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return ef.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return ef.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return ef.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return ef.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return ef.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`}}async onViewChange(e){let{history:t}=eh.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eA.styles=eR,eO([(0,eg.SB)()],eA.prototype,"view",void 0),eA=eO([(0,ep.customElement)("w3m-router")],eA);let eT=ef.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var ek=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eI=class extends ef.oi{constructor(){super(),this.usubscribe=[],this.address=eh.AccountController.state.address,this.profileImage=eh.AccountController.state.profileImage,this.profileName=eh.AccountController.state.profileName,this.balance=eh.AccountController.state.balance,this.balanceSymbol=eh.AccountController.state.balanceSymbol,this.network=eh.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[eh.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):eh.IN.close()})],eh.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=eh.fz.getNetworkImage(this.network);return ef.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,em.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ep.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ep.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${eh.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,em.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){let e=eh.MO.getConnectedConnector(),t=eh.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(eh.bq.SECURE_SITE)?null:ef.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){let e=eh.MO.getConnectedConnector(),t=eh.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return ef.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=eh.AccountController.state;return e?ef.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=eh.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(eh.j1.copyToClopboard(this.address),eh.SnackController.showSuccess("Address copied"))}catch{eh.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&eh.RouterController.push("Networks")}onTransactions(){eh.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),eh.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await eh.ConnectionController.disconnect(),eh.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eh.IN.close()}catch{eh.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eh.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=eh.AccountController.state;e&&eh.j1.openHref(e,"_blank")}onGoToUpgradeView(){eh.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),eh.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){eh.RouterController.push("UpdateEmailWallet",{email:e})}};eI.styles=eT,ek([(0,eg.SB)()],eI.prototype,"address",void 0),ek([(0,eg.SB)()],eI.prototype,"profileImage",void 0),ek([(0,eg.SB)()],eI.prototype,"profileName",void 0),ek([(0,eg.SB)()],eI.prototype,"balance",void 0),ek([(0,eg.SB)()],eI.prototype,"balanceSymbol",void 0),ek([(0,eg.SB)()],eI.prototype,"network",void 0),ek([(0,eg.SB)()],eI.prototype,"disconecting",void 0),eI=ek([(0,ep.customElement)("w3m-account-view")],eI);var ej=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends ef.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=eh.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return ef.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?ef.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:ef.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return eh.j1.isMobile()?ef.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eh.RouterController.push("ConnectingWalletConnect")}};ej([(0,eg.SB)()],e$.prototype,"search",void 0),e$=ej([(0,ep.customElement)("w3m-all-wallets-view")],e$);let eM=ef.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var eN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eL=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.connectors=eh.ConnectorController.state.connectors,this.unsubscribe.push(eh.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ef.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(eh.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?ef.dy`
      <wui-list-wallet
        imageSrc=${(0,em.o)(eh.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=eh.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=eh.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return eh.MO.getRecentWallets().map(e=>ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>"INJECTED"===e.type&&eh.ConnectionController.checkInstalled()?ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null)}externalTemplate(){let e=eh.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(eh.bq.CONNECTOR_RDNS_MAP[t.id])?null:ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=eh.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!eh.j1.isMobile())return null;let r=eh.ApiController.state.count+eh.ApiController.state.featured.length,i=r<10?r:10*Math.floor(r/10),n=i<r?`${i}+`:`${i}`;return ef.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${n}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=eh.ApiController.state,{customWallets:t,featuredWalletIds:r}=eh.OptionsController.state,{connectors:i}=eh.ConnectorController.state,n=eh.MO.getRecentWallets(),o=i.filter(e=>"INJECTED"===e.type),a=i.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let s=(a.length||Math.max(0,o.length-1))+n.length;return this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-s)).map(e=>ef.dy`
        <wui-list-wallet
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?eh.j1.isMobile()?eh.RouterController.push("AllWallets"):eh.RouterController.push("ConnectingWalletConnect"):eh.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=eh.ConnectorController.state,r=eh.MO.getRecentWallets().map(e=>e.id);return e.filter(e=>!r.includes(e.id)&&!t.find(t=>t.id===e.rdns||t?.info?.rdns===e.rdns))}onAllWallets(){eh.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eh.RouterController.push("AllWallets")}onConnectWallet(e){eh.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eL.styles=eM,eN([(0,eg.SB)()],eL.prototype,"connectors",void 0),eL=eN([(0,ep.customElement)("w3m-connect-view")],eL);let eD=ef.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var eU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class ez extends ef.oi{constructor(){super(),this.wallet=eh.RouterController.state.data?.wallet,this.connector=eh.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=eh.fz.getWalletImage(this.wallet)??eh.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=eh.ConnectionController.state.wcUri,this.error=eh.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[eh.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),eh.ConnectionController.subscribeKey("wcError",e=>this.error=e),eh.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),ef.dy`
      <wui-flex
        data-error=${(0,em.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,em.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?ef.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(eh.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=eh.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return ef.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(eh.j1.copyToClopboard(this.uri),eh.SnackController.showSuccess("Link copied"))}catch{eh.SnackController.showError("Failed to copy")}}}ez.styles=eD,eU([(0,eg.SB)()],ez.prototype,"uri",void 0),eU([(0,eg.SB)()],ez.prototype,"error",void 0),eU([(0,eg.SB)()],ez.prototype,"ready",void 0),eU([(0,eg.SB)()],ez.prototype,"showRetry",void 0),eU([(0,eg.SB)()],ez.prototype,"buffering",void 0),eU([(0,eg.Cb)({type:Boolean})],ez.prototype,"isMobile",void 0),eU([(0,eg.Cb)()],ez.prototype,"onRetry",void 0);let eB={INJECTED:"browser",ANNOUNCED:"browser"},eF=class extends ez{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eB[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&eh.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await eh.ConnectionController.connectExternal(this.connector),eh.yD.state.isSiweEnabled?eh.RouterController.push("ConnectingSiwe"):eh.IN.close(),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){eh.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-external-view")],eF);var eW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eH=class extends ef.oi{constructor(){super(...arguments),this.dappName=eh.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return ef.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,eh.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{eh.yD.setStatus("loading");let e=await eh.yD.signIn();return eh.yD.setStatus("success"),eh.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return eh.SnackController.showError("Signature declined"),eh.yD.setStatus("error"),eh.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=eh.AccountController.state;e?(await eh.ConnectionController.disconnect(),eh.IN.close()):eh.RouterController.push("Connect"),eh.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};eW([(0,eg.SB)()],eH.prototype,"isSigning",void 0),eH=eW([(0,ep.customElement)("w3m-connecting-siwe-view")],eH);var eZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eV=class extends ef.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=eh.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),eh.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),ef.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):ef.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=eh.ConnectionController.state;if(e||eh.j1.isPairingExpired(t)){if(eh.ConnectionController.connectWalletConnect(),this.wallet){let e=eh.fz.getWalletImage(this.wallet);e&&eh.MO.setConnectedWalletImageUrl(e)}else{let e=eh.ConnectorController.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=eh.fz.getConnectorImage(e);t&&eh.MO.setConnectedWalletImageUrl(t)}await eh.ConnectionController.state.wcPromise,this.finalizeConnection(),eh.yD.state.isSiweEnabled?eh.RouterController.push("ConnectingSiwe"):eh.IN.close()}}catch(e){eh.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),eh.ConnectionController.setWcError(!0),eh.j1.isAllowedRetry(this.lastRetry)&&(eh.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=eh.ConnectionController.state;e&&eh.MO.setWalletConnectDeepLink(e),t&&eh.MO.setWeb3ModalRecent(t),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=n?[n]:o??[],s=a.length,l=eh.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!eh.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(eh.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return ef.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return ef.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return ef.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return ef.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return ef.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return ef.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?ef.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eZ([(0,eg.SB)()],eV.prototype,"platform",void 0),eZ([(0,eg.SB)()],eV.prototype,"platforms",void 0),eV=eZ([(0,ep.customElement)("w3m-connecting-wc-view")],eV);let eG=class extends ef.oi{constructor(){super(...arguments),this.wallet=eh.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return ef.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?ef.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?ef.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?ef.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?ef.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&eh.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&eh.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eh.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eh.j1.openHref(this.wallet.homepage,"_blank")}};eG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-downloads-view")],eG);let eY=class extends ef.oi{render(){return ef.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{eh.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=eh.ApiController.state,{customWallets:r}=eh.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(e=>ef.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          @click=${()=>{eh.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-get-wallet-view")],eY);let eq=ef.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var eK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eX=class extends ef.oi{constructor(){super(),this.network=eh.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return ef.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,em.o)(eh.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:ef.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await eh.NetworkController.switchActiveNetwork(this.network),eh.yD.state.isSiweEnabled||eh._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};eX.styles=eq,eK([(0,eg.SB)()],eX.prototype,"showRetry",void 0),eK([(0,eg.SB)()],eX.prototype,"error",void 0),eX=eK([(0,ep.customElement)("w3m-network-switch-view")],eX);let eQ=ef.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var eJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e0=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=eh.NetworkController.state.caipNetwork,this.unsubscribe.push(eh.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ef.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){eh.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),eh.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=eh.NetworkController.state,i={};return t&&e&&(e.forEach((e,t)=>{i[e]=t}),t.sort((e,t)=>{let r=i[e.id],n=i[t.id];return void 0!==r&&void 0!==n?r-n:void 0!==r?-1:void 0!==n?1:0})),t?.map(t=>ef.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${em.o(eh.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=eh.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=eh.NetworkController.state,{data:o}=eh.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await eh.NetworkController.switchActiveNetwork(e),eh._4.navigateAfterNetworkSwitch()):i&&eh.RouterController.push("SwitchNetwork",{...o,network:e}):t||(eh.NetworkController.setCaipNetwork(e),eh.RouterController.push("Connect"))}};e0.styles=eQ,eJ([(0,eg.SB)()],e0.prototype,"caipNetwork",void 0),e0=eJ([(0,ep.customElement)("w3m-networks-view")],e0);var e1=r(6640);let e2=ef.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var e3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e5="last-transaction",e4=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=eh.AccountController.state.address,this.transactions=eh.sl.state.transactions,this.transactionsByYear=eh.sl.state.transactionsByYear,this.loading=eh.sl.state.loading,this.empty=eh.sl.state.empty,this.next=eh.sl.state.next,this.unsubscribe.push(...[eh.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,eh.sl.resetTransactions(),eh.sl.fetchTransactions(e.address))}),eh.sl.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){0===this.transactions.length&&eh.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ef.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,n=parseInt(t,10),o=ep.TransactionUtil.getTransactionGroupTitle(n),a=this.transactionsByYear[n];return a?ef.dy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||o?u?l.map((e,i)=>{let n=ep.TransactionUtil.getTransferDescription(e),o=t&&i===l.length-1;return ef.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?e5:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`}):ef.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?e5:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:ef.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?e5:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return ef.dy`${this.templateRenderTransaction(r,n)}`})}templateEmpty(){return ef.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(ef.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=eh.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(eh.sl.fetchTransactions(this.address),eh.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${e5}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=e1.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=ep.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,n=e?.transfers?.[0],o=!!n&&e?.transfers?.every(e=>!!e.nft_info),a=ep.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};e4.styles=e2,e3([(0,eg.SB)()],e4.prototype,"address",void 0),e3([(0,eg.SB)()],e4.prototype,"transactions",void 0),e3([(0,eg.SB)()],e4.prototype,"transactionsByYear",void 0),e3([(0,eg.SB)()],e4.prototype,"loading",void 0),e3([(0,eg.SB)()],e4.prototype,"empty",void 0),e3([(0,eg.SB)()],e4.prototype,"next",void 0),e4=e3([(0,ep.customElement)("w3m-transactions-view")],e4);let e6=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],e8=class extends ef.oi{render(){return ef.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${e6}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{eh.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};e8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-what-is-a-network-view")],e8);let e7=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],e9=class extends ef.oi{render(){return ef.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${e7}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){eh.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),eh.RouterController.push("GetWallet")}};e9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-what-is-a-wallet-view")],e9);let te=ef.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var tt=r(90411),tr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ti=class extends ef.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.email=eh.RouterController.state.data?.email,this.loading=!1,this.timeoutTimeLeft=tt.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.emailConnector=eh.ConnectorController.getEmailConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft;return ef.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?ef.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:ef.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?ef.dy`
                    <wui-text variant="small-400" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=tt.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=tt.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=eh.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!eh.ConnectorController.getEmailConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend?.(this.email),this.startOTPTimeout(),eh.SnackController.showSuccess("Code email resent")}}catch(e){eh.SnackController.showError(e)}finally{this.loading=!1}}};ti.styles=te,tr([(0,eg.SB)()],ti.prototype,"loading",void 0),tr([(0,eg.SB)()],ti.prototype,"timeoutTimeLeft",void 0),tr([(0,eg.SB)()],ti.prototype,"error",void 0),ti=tr([(0,ep.customElement)("w3m-email-otp-widget")],ti);let tn=class extends ti{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await eh.ConnectionController.connectExternal(this.emailConnector),eh.IN.close(),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(e){throw eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};tn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-email-verify-otp-view")],tn);let to=ef.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var ta=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ts=class extends ef.oi{constructor(){super(),this.email=eh.RouterController.state.data?.email,this.emailConnector=eh.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return ef.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),eh.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eh.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),eh.SnackController.showSuccess("Code email resent")}}catch(e){eh.SnackController.showError(e)}finally{this.loading=!1}}};ts.styles=to,ta([(0,eg.SB)()],ts.prototype,"loading",void 0),ts=ta([(0,ep.customElement)("w3m-email-verify-device-view")],ts);let tl=ef.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var tc=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tu=class extends ef.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(eh.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),ef.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};tu.styles=tl,tc([(0,eg.SB)()],tu.prototype,"ready",void 0),tu=tc([(0,ep.customElement)("w3m-approve-transaction-view")],tu);let td=class extends ef.oi{render(){return ef.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${eh.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${eh.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};td=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-upgrade-wallet-view")],td);var th=r(16118);let tp=ef.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var tf=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tg=class extends ef.oi{constructor(){super(...arguments),this.formRef=(0,th.V)(),this.initialValue=eh.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return ef.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,th.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${eh.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eh.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),eh.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"})}catch(e){eh.SnackController.showError(e),this.loading=!1}}};tg.styles=tp,tf([(0,eg.SB)()],tg.prototype,"email",void 0),tf([(0,eg.SB)()],tg.prototype,"loading",void 0),tg=tf([(0,ep.customElement)("w3m-update-email-wallet-view")],tg);let tm=class extends ti{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await eh.ConnectionController.connectExternal(this.emailConnector),eh.IN.close(),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(e){throw eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};tm=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-update-email-primary-otp-view")],tm);let tb=class extends ti{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await eh.ConnectionController.connectExternal(this.emailConnector),eh.IN.close(),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(e){throw eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};tb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-update-email-secondary-otp-view")],tb);let tw=ef.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function ty(e){let{connectors:t}=eh.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var tv=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tx="local-paginator",tC=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!eh.ApiController.state.wallets.length,this.wallets=eh.ApiController.state.wallets,this.recommended=eh.ApiController.state.recommended,this.featured=eh.ApiController.state.featured,this.unsubscribe.push(...[eh.ApiController.subscribeKey("wallets",e=>this.wallets=e),eh.ApiController.subscribeKey("recommended",e=>this.recommended=e),eh.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return ef.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await eh.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>ef.dy`
        <wui-card-select-loader type="wallet" id=${(0,em.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return ty([...this.featured,...this.recommended,...this.wallets]).map(e=>ef.dy`
        <wui-card-select
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=eh.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/n)*n-o+n;return(a-=e.length?r.length%n:0,0===i&&r.length>0)?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(a,tx):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tx}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=eh.ApiController.state;r.length<t&&eh.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=eh.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?eh.RouterController.push("ConnectingExternal",{connector:r}):eh.RouterController.push("ConnectingWalletConnect",{wallet:e})}};tC.styles=tw,tv([(0,eg.SB)()],tC.prototype,"initial",void 0),tv([(0,eg.SB)()],tC.prototype,"wallets",void 0),tv([(0,eg.SB)()],tC.prototype,"recommended",void 0),tv([(0,eg.SB)()],tC.prototype,"featured",void 0),tC=tv([(0,ep.customElement)("w3m-all-wallets-list")],tC);let t_=ef.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var tE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tP=class extends ef.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?ef.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await eh.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=eh.ApiController.state,t=ty(e);return e.length?ef.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>ef.dy`
            <wui-card-select
              imageSrc=${(0,em.o)(eh.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:ef.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=eh.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?eh.RouterController.push("ConnectingExternal",{connector:r}):eh.RouterController.push("ConnectingWalletConnect",{wallet:e})}};tP.styles=t_,tE([(0,eg.SB)()],tP.prototype,"loading",void 0),tE([(0,eg.Cb)()],tP.prototype,"query",void 0),tP=tE([(0,ep.customElement)("w3m-all-wallets-search")],tP);var tS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tR=class extends ef.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(eh.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return ef.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};tS([(0,eg.Cb)({type:Array})],tR.prototype,"platforms",void 0),tS([(0,eg.Cb)()],tR.prototype,"onSelectPlatfrom",void 0),tS([(0,eg.SB)()],tR.prototype,"buffering",void 0),tR=tS([(0,ep.customElement)("w3m-connecting-header")],tR);let tO=class extends ez{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=eh.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await eh.ConnectionController.connectExternal(t):r&&await eh.ConnectionController.connectExternal(r),eh.IN.close(),eh.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){eh.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};tO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-browser")],tO);let tA=class extends ez{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=eh.j1.formatNativeUrl(e,this.uri);eh.ConnectionController.setWcLinking({name:t,href:i}),eh.ConnectionController.setRecentWallet(this.wallet),eh.j1.openHref(r,"_blank")}catch{this.error=!0}}};tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-desktop")],tA);let tT=class extends ez{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=eh.j1.formatNativeUrl(e,this.uri);eh.ConnectionController.setWcLinking({name:t,href:i}),eh.ConnectionController.setRecentWallet(this.wallet),eh.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=eh.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(eh.ConnectionController.setBuffering(!0),setTimeout(()=>{eh.ConnectionController.setBuffering(!1)},5e3))}};tT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-mobile")],tT);let tk=ef.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,tI=class extends ez{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),ef.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return eh.ConnectionController.setWcLinking(void 0),eh.ConnectionController.setRecentWallet(this.wallet),ef.dy` <wui-qr-code
      size=${e}
      theme=${eh.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,em.o)(eh.fz.getWalletImage(this.wallet))}
      alt=${(0,em.o)(t)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return ef.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};tI.styles=tk,tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-qrcode")],tI);let tj=ef.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,t$=class extends ef.oi{constructor(){super(...arguments),this.dappImageUrl=eh.OptionsController.state.metadata?.icons,this.walletImageUrl=eh.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return ef.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};t$.styles=tj,t$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-siwe")],t$);let tM=class extends ef.oi{constructor(){if(super(),this.wallet=eh.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return ef.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,em.o)(eh.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};tM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-unsupported")],tM);let tN=class extends ez{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",eh.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=eh.j1.formatUniversalUrl(e,this.uri);eh.ConnectionController.setWcLinking({name:t,href:i}),eh.ConnectionController.setRecentWallet(this.wallet),eh.j1.openHref(r,"_blank")}catch{this.error=!0}}};tN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-connecting-wc-web")],tN);let tL=ef.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var tD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function tU(){let e=eh.RouterController.state.data?.connector?.name,t=eh.RouterController.state.data?.wallet?.name,r=eh.RouterController.state.data?.network?.name,i=t??e,n=eh.ConnectorController.getConnectors(),o=1===n.length&&n[0]?.id==="w3m-email";return{Connect:`Connect ${o?"Email":""} Wallet`,Account:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email"}}let tz=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.heading=tU()[eh.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(eh.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),eh.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return ef.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){eh.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),eh.RouterController.push("WhatIsAWallet")}async onClose(){eh.yD.state.isSiweEnabled&&"success"!==eh.yD.state.status&&await eh.ConnectionController.disconnect(),eh.IN.close()}titleTemplate(){return ef.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=eh.RouterController.state;return this.showBack&&"ApproveTransaction"!==e?ef.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:ef.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?ef.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=tU()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=eh.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===eh.RouterController.state.view?eh.RouterController.push("Connect"):eh.RouterController.goBack()}};tz.styles=[tL],tD([(0,eg.SB)()],tz.prototype,"heading",void 0),tD([(0,eg.SB)()],tz.prototype,"buffering",void 0),tD([(0,eg.SB)()],tz.prototype,"showBack",void 0),tz=tD([(0,ep.customElement)("w3m-header")],tz);var tB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tF=class extends ef.oi{constructor(){super(...arguments),this.data=[]}render(){return ef.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>ef.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>ef.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};tB([(0,eg.Cb)({type:Array})],tF.prototype,"data",void 0),tF=tB([(0,ep.customElement)("w3m-help-widget")],tF);let tW=ef.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`,tH=class extends ef.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eh.OptionsController.state;return e||t?ef.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eh.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=eh.OptionsController.state;return e?ef.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=eh.OptionsController.state;return e?ef.dy`<a href=${e}>Privacy Policy</a>`:null}};tH.styles=[tW],tH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ep.customElement)("w3m-legal-footer")],tH);let tZ=ef.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var tV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tG=class extends ef.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=eh.j1.isMobile(),a=eh.j1.isIos(),s=eh.j1.isAndroid(),l=[t,r,n,i].filter(Boolean).length>1,c=ep.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?ef.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>eh.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?ef.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?ef.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?ef.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&eh.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eh.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eh.j1.openHref(this.wallet.homepage,"_blank")}};tG.styles=[tZ],tV([(0,eg.Cb)({type:Object})],tG.prototype,"wallet",void 0),tG=tV([(0,ep.customElement)("w3m-mobile-download-links")],tG);let tY=ef.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var tq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tK={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},tX=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=eh.SnackController.state.open,this.unsubscribe.push(eh.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=eh.SnackController.state,r=tK[t];return ef.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>eh.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};tX.styles=tY,tq([(0,eg.SB)()],tX.prototype,"open",void 0),tX=tq([(0,ep.customElement)("w3m-snackbar")],tX);let tQ=ef.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var tJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t0=class extends ef.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,th.V)(),this.connectors=eh.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(eh.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1;return this.connectors.find(e=>"EMAIL"===e.type)?ef.dy`
      ${this.alphaWarningTemplate()}
      <form ${(0,th.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?ef.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return ef.dy`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">Email login is in alpha</wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?ef.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?ef.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eh.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});eh.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(eh.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eh.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&eh.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=eh.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":eh.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){eh.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};t0.styles=tQ,tJ([(0,eg.SB)()],t0.prototype,"connectors",void 0),tJ([(0,eg.SB)()],t0.prototype,"email",void 0),tJ([(0,eg.SB)()],t0.prototype,"loading",void 0),tJ([(0,eg.SB)()],t0.prototype,"error",void 0),t0=tJ([(0,ep.customElement)("w3m-email-login-widget")],t0);let t1=!1;class t2{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{eh.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{eh.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{eh.AccountController.setBalance(e,t)},this.setProfileName=e=>{eh.AccountController.setProfileName(e)},this.setProfileImage=e=>{eh.AccountController.setProfileImage(e)},this.resetAccount=()=>{eh.AccountController.resetAccount()},this.setCaipNetwork=e=>{eh.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>eh.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{eh.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>eh.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{eh.NetworkController.resetNetwork()},this.setConnectors=e=>{eh.ConnectorController.setConnectors(e)},this.addConnector=e=>{eh.ConnectorController.addConnector(e)},this.getConnectors=()=>eh.ConnectorController.getConnectors(),this.resetWcConnection=()=>{eh.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>eh.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{eh.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{eh.yD.setNonce(e)},this.setSIWESession=e=>{eh.yD.setSession(e)},this.setSIWEStatus=e=>{eh.yD.setStatus(e)},this.setSIWEMessage=e=>{eh.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),eh.IN.open(e)}async close(){await this.initOrContinue(),eh.IN.close()}setLoading(e){eh.IN.setLoading(e)}getThemeMode(){return eh.ThemeController.state.themeMode}getThemeVariables(){return eh.ThemeController.state.themeVariables}setThemeMode(e){eh.ThemeController.setThemeMode(e),(0,ep.setColorTheme)(eh.ThemeController.state.themeMode);try{let e=eh.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:eh.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){eh.ThemeController.setThemeVariables(e),(0,ep.setThemeVariables)(eh.ThemeController.state.themeVariables);try{let e=eh.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:eh.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return eh.ThemeController.subscribe(e)}getState(){return{...eh.Ie.state}}subscribeState(e){return eh.Ie.subscribe(e)}getEvent(){return{...eh.Xs.state}}subscribeEvents(e){return eh.Xs.subscribe(e)}subscribeSIWEState(e){return eh.yD.subscribe(e)}initControllers(e){if(eh.NetworkController.setClient(e.networkControllerClient),eh.NetworkController.setDefaultCaipNetwork(e.defaultChain),eh.OptionsController.setProjectId(e.projectId),eh.OptionsController.setAllWallets(e.allWallets),eh.OptionsController.setIncludeWalletIds(e.includeWalletIds),eh.OptionsController.setExcludeWalletIds(e.excludeWalletIds),eh.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),eh.OptionsController.setTokens(e.tokens),eh.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),eh.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),eh.OptionsController.setCustomWallets(e.customWallets),eh.OptionsController.setEnableAnalytics(e.enableAnalytics),eh.OptionsController.setSdkVersion(e._sdkVersion),eh.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let t=e.siweControllerClient;eh.yD.setSIWEClient(t)}e.metadata&&eh.OptionsController.setMetadata(e.metadata),e.themeMode&&eh.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&eh.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!t1&&eh.j1.isClient()&&(t1=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,65199)),Promise.resolve().then(r.bind(r,34212))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}var t3=r(79452);async function t5(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),r=t?.signer?.session?.namespaces,i=r?.[t3.bq.EIP155]?.methods,n=r?.[t3.bq.EIP155]?.chains;return{supportsAllNetworks:!!i?.includes(t3.bq.ADD_CHAIN_METHOD),approvedCaipNetworkIds:n}}class t4 extends t2{constructor(e){let{wagmiConfig:t,siweConfig:r,defaultChain:i,tokens:n,_sdkVersion:o,...c}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=t3.gk.caipNetworkIdToNumber(e?.id);t&&await a(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{let r=new Map(t.state.connections).get(t.state.current||"");r?.connector?.id===t3.bq.EMAIL_CONNECTOR_ID?e({supportsAllNetworks:!1,approvedCaipNetworkIds:t3.CK.WalletConnectRpcChainIds.map(e=>`${t3.bq.EIP155}:${e}`)}):r?.connector?.id===t3.bq.WALLET_CONNECT_CONNECTOR_ID&&e(t5(t.connectors.find(e=>e.id===t3.bq.WALLET_CONNECT_CONNECTOR_ID))),e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===t3.bq.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await r.getProvider()).on("display_uri",t=>{e(t)});let i=t3.gk.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,s.$)(this.wagmiConfig,{connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===t3.bq.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=t3.gk.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,s.$)(this.wagmiConfig,{connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!t&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await l(this.wagmiConfig),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>g(this.wagmiConfig,{message:e})},siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${t3.bq.EIP155}:${e.id}`,name:e.name,imageId:t3.CK.EIP155NetworkImageIds[e.id]}}(i),tokens:t3.gk.getCaipTokens(n),_sdkVersion:o??`html-wagmi-${t3.bq.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),(0,m.f)(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),(0,b.u)(this.wagmiConfig,{onChange:e=>this.syncAccount({...e,config:t})})}getState(){let e=super.getState();return{...e,selectedNetworkId:t3.gk.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:t3.gk.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${t3.bq.EIP155}:${e.id}`,name:e.name,imageId:t3.CK.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r}){if(this.resetAccount(),this.syncNetwork(),t&&e&&r){let i=`${t3.bq.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t,chainId:r}=(0,w.D)(this.wagmiConfig),i=this.wagmiConfig.chains.find(e=>e.id===r);if(i){let n=`${t3.bq.EIP155}:${r}`;if(this.setCaipNetwork({id:n,name:i.name,imageId:t3.CK.EIP155NetworkImageIds[i.id],imageUrl:this.options?.chainImages?.[i.id]}),t&&e&&r){let t=`${t3.bq.EIP155}:${r}:${e}`;if(this.setCaipAddress(t),i.blockExplorers?.default?.url){let t=`${i.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t!==ed.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${t3.bq.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{let r=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,p.s)(n,I,"getEnsName")(i)}(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);let e=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,p.s)(n,ee,"getEnsAvatar")(i)}(this.wagmiConfig,{name:r,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=this.wagmiConfig.chains.find(e=>e.id===t),i=r?.id||this.options?.defaultChain?.id||this.wagmiConfig?.chains?.[0]?.id,n=await ec(this.wagmiConfig,{address:e,chainId:i,token:this.options?.tokens?.[i]?.address});this.setBalance(n.formatted,n.symbol)}syncConnectors(e){let t=[],r=t3.bq.COINBASE_SDK_CONNECTOR_ID,i=e.find(e=>e.id===eh.bq.CONNECTOR_RDNS_MAP[r]);e.forEach(({id:e,name:n,type:o,icon:a})=>{i&&e===r||t3.bq.EMAIL_CONNECTOR_ID===e||t.push({id:e,explorerId:t3.CK.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??a,name:t3.CK.ConnectorNamesMap[e]??n,imageId:t3.CK.ConnectorImageIds[e],type:t3.CK.ConnectorTypesMap[o]??"EXTERNAL"})}),this.setConnectors(t),this.syncEmailConnector(e)}async syncEmailConnector(e){let t=e.find(({id:e})=>e===t3.bq.EMAIL_CONNECTOR_ID);if(t){let e=await t.getProvider();this.addConnector({id:t3.bq.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e}),this.listenEmailConnector(t)}}async listenEmailConnector(e){}}function t6(e){if(!i){var t;i=new t4({...e,_sdkVersion:`react-wagmi-${t3.bq.VERSION}`})}return i}},90411:(e,t,r)=>{"use strict";let i;r.d(t,{$D:()=>tO,Sd:()=>tT});let n={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};(function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw Error()},e.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},e.getValidEnumValues=t=>{let r=e.objectKeys(t).filter(e=>"number"!=typeof t[t[e]]),i={};for(let e of r)i[e]=t[e];return e.objectValues(i)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(let r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t})(e1||(e1={})),(e2||(e2={})).mergeShapes=(e,t)=>({...e,...t});let o=e1.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),a=e=>{switch(typeof e){case"undefined":return o.undefined;case"string":return o.string;case"number":return isNaN(e)?o.nan:o.number;case"boolean":return o.boolean;case"function":return o.function;case"bigint":return o.bigint;case"symbol":return o.symbol;case"object":if(Array.isArray(e))return o.array;if(null===e)return o.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return o.promise;if("undefined"!=typeof Map&&e instanceof Map)return o.map;if("undefined"!=typeof Set&&e instanceof Set)return o.set;if("undefined"!=typeof Date&&e instanceof Date)return o.date;return o.object;default:return o.unknown}},s=e1.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class l extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,e1.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}l.create=e=>new l(e);let c=(e,t)=>{let r;switch(e.code){case s.invalid_type:r=e.received===o.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case s.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,e1.jsonStringifyReplacer)}`;break;case s.unrecognized_keys:r=`Unrecognized key(s) in object: ${e1.joinValues(e.keys,", ")}`;break;case s.invalid_union:r="Invalid input";break;case s.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${e1.joinValues(e.options)}`;break;case s.invalid_enum_value:r=`Invalid enum value. Expected ${e1.joinValues(e.options)}, received '${e.received}'`;break;case s.invalid_arguments:r="Invalid function arguments";break;case s.invalid_return_type:r="Invalid function return type";break;case s.invalid_date:r="Invalid date";break;case s.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:e1.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case s.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case s.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case s.custom:r="Invalid input";break;case s.invalid_intersection_types:r="Intersection results could not be merged";break;case s.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case s.not_finite:r="Number must be finite";break;default:r=t.defaultError,e1.assertNever(e)}return{message:r}},u=c;function d(){return u}let h=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,o=[...r,...n.path||[]],a={...n,path:o},s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(a,{data:t,defaultError:s}).message;return{...n,path:o,message:n.message||s}};function p(e,t){let r=h({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,d(),c].filter(e=>!!e)});e.common.issues.push(r)}class f{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return g;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return f.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return g;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let g=Object.freeze({status:"aborted"}),m=e=>({status:"dirty",value:e}),b=e=>({status:"valid",value:e}),w=e=>"aborted"===e.status,y=e=>"dirty"===e.status,v=e=>"valid"===e.status,x=e=>"undefined"!=typeof Promise&&e instanceof Promise;!function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(e3||(e3={}));class C{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let _=(e,t)=>{if(v(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new l(e.common.issues);return this._error=t,this._error}}};function E(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class P{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return a(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:a(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new f,ctx:{common:e.parent.common,data:e.data,parsedType:a(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(x(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:a(e)},n=this._parseSync({data:e,path:i.path,parent:i});return _(i,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:a(e)},i=this._parse({data:e,path:r.path,parent:r});return _(r,await (x(i)?i:Promise.resolve(i)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let n=e(t),o=()=>i.addIssue({code:s.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(o(),!1)):!!n||(o(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new ec({schema:this,typeName:e5.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return eu.create(this,this._def)}nullable(){return ed.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return V.create(this,this._def)}promise(){return el.create(this,this._def)}or(e){return Y.create([this,e],this._def)}and(e){return X.create(this,e,this._def)}transform(e){return new ec({...E(this._def),schema:this,typeName:e5.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new eh({...E(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:e5.ZodDefault})}brand(){return new em({typeName:e5.ZodBranded,type:this,...E(this._def)})}catch(e){return new ep({...E(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:e5.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return eb.create(this,e)}readonly(){return ew.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let S=/^c[^\s-]{8,}$/i,R=/^[a-z][a-z0-9]*$/,O=/^[0-9A-HJKMNP-TV-Z]{26}$/,A=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,T=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,k=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,I=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,j=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class $ extends P{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==o.string){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.string,received:t.parsedType}),g}let r=new f;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("max"===o.kind)e.data.length>o.value&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if("length"===o.kind){let i=e.data.length>o.value,n=e.data.length<o.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?p(t,{code:s.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):n&&p(t,{code:s.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if("email"===o.kind)T.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"email",code:s.invalid_string,message:o.message}),r.dirty());else if("emoji"===o.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:s.invalid_string,message:o.message}),r.dirty());else if("uuid"===o.kind)A.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:s.invalid_string,message:o.message}),r.dirty());else if("cuid"===o.kind)S.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:s.invalid_string,message:o.message}),r.dirty());else if("cuid2"===o.kind)R.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:s.invalid_string,message:o.message}),r.dirty());else if("ulid"===o.kind)O.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:s.invalid_string,message:o.message}),r.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(i){p(t=this._getOrReturnCtx(e,t),{validation:"url",code:s.invalid_string,message:o.message}),r.dirty()}else if("regex"===o.kind)o.regex.lastIndex=0,o.regex.test(e.data)||(p(t=this._getOrReturnCtx(e,t),{validation:"regex",code:s.invalid_string,message:o.message}),r.dirty());else if("trim"===o.kind)e.data=e.data.trim();else if("includes"===o.kind)e.data.includes(o.value,o.position)||(p(t=this._getOrReturnCtx(e,t),{code:s.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty());else if("toLowerCase"===o.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===o.kind)e.data=e.data.toUpperCase();else if("startsWith"===o.kind)e.data.startsWith(o.value)||(p(t=this._getOrReturnCtx(e,t),{code:s.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty());else if("endsWith"===o.kind)e.data.endsWith(o.value)||(p(t=this._getOrReturnCtx(e,t),{code:s.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty());else if("datetime"===o.kind)j(o).test(e.data)||(p(t=this._getOrReturnCtx(e,t),{code:s.invalid_string,validation:"datetime",message:o.message}),r.dirty());else if("ip"===o.kind){var n,a;n=e.data,("v4"===(a=o.version)||!a)&&k.test(n)||("v6"===a||!a)&&I.test(n)||(p(t=this._getOrReturnCtx(e,t),{validation:"ip",code:s.invalid_string,message:o.message}),r.dirty())}else e1.assertNever(o);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:s.invalid_string,...e3.errToObj(r)})}_addCheck(e){return new $({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...e3.errToObj(e)})}url(e){return this._addCheck({kind:"url",...e3.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...e3.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...e3.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...e3.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...e3.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...e3.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...e3.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...e3.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...e3.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...e3.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...e3.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...e3.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...e3.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...e3.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...e3.errToObj(t)})}nonempty(e){return this.min(1,e3.errToObj(e))}trim(){return new $({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new $({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new $({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}$.create=e=>{var t;return new $({checks:[],typeName:e5.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...E(e)})};class M extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==o.number){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.number,received:t.parsedType}),g}let r=new f;for(let i of this._def.checks)"int"===i.kind?e1.isInteger(e.data)||(p(t=this._getOrReturnCtx(e,t),{code:s.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,i.value)&&(p(t=this._getOrReturnCtx(e,t),{code:s.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(p(t=this._getOrReturnCtx(e,t),{code:s.not_finite,message:i.message}),r.dirty()):e1.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,e3.toString(t))}gt(e,t){return this.setLimit("min",e,!1,e3.toString(t))}lte(e,t){return this.setLimit("max",e,!0,e3.toString(t))}lt(e,t){return this.setLimit("max",e,!1,e3.toString(t))}setLimit(e,t,r,i){return new M({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:e3.toString(i)}]})}_addCheck(e){return new M({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:e3.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:e3.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:e3.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:e3.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:e3.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:e3.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:e3.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:e3.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:e3.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&e1.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}M.create=e=>new M({checks:[],typeName:e5.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...E(e)});class N extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==o.bigint){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.bigint,received:t.parsedType}),g}let r=new f;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(p(t=this._getOrReturnCtx(e,t),{code:s.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):e1.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,e3.toString(t))}gt(e,t){return this.setLimit("min",e,!1,e3.toString(t))}lte(e,t){return this.setLimit("max",e,!0,e3.toString(t))}lt(e,t){return this.setLimit("max",e,!1,e3.toString(t))}setLimit(e,t,r,i){return new N({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:e3.toString(i)}]})}_addCheck(e){return new N({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:e3.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:e3.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:e3.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:e3.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:e3.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}N.create=e=>{var t;return new N({checks:[],typeName:e5.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...E(e)})};class L extends P{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==o.boolean){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.boolean,received:t.parsedType}),g}return b(e.data)}}L.create=e=>new L({typeName:e5.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...E(e)});class D extends P{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==o.date){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.date,received:t.parsedType}),g}if(isNaN(e.data.getTime()))return p(this._getOrReturnCtx(e),{code:s.invalid_date}),g;let r=new f;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(p(t=this._getOrReturnCtx(e,t),{code:s.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):e1.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new D({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:e3.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:e3.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}D.create=e=>new D({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:e5.ZodDate,...E(e)});class U extends P{_parse(e){if(this._getType(e)!==o.symbol){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.symbol,received:t.parsedType}),g}return b(e.data)}}U.create=e=>new U({typeName:e5.ZodSymbol,...E(e)});class z extends P{_parse(e){if(this._getType(e)!==o.undefined){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.undefined,received:t.parsedType}),g}return b(e.data)}}z.create=e=>new z({typeName:e5.ZodUndefined,...E(e)});class B extends P{_parse(e){if(this._getType(e)!==o.null){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.null,received:t.parsedType}),g}return b(e.data)}}B.create=e=>new B({typeName:e5.ZodNull,...E(e)});class F extends P{constructor(){super(...arguments),this._any=!0}_parse(e){return b(e.data)}}F.create=e=>new F({typeName:e5.ZodAny,...E(e)});class W extends P{constructor(){super(...arguments),this._unknown=!0}_parse(e){return b(e.data)}}W.create=e=>new W({typeName:e5.ZodUnknown,...E(e)});class H extends P{_parse(e){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.never,received:t.parsedType}),g}}H.create=e=>new H({typeName:e5.ZodNever,...E(e)});class Z extends P{_parse(e){if(this._getType(e)!==o.undefined){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.void,received:t.parsedType}),g}return b(e.data)}}Z.create=e=>new Z({typeName:e5.ZodVoid,...E(e)});class V extends P{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==o.array)return p(t,{code:s.invalid_type,expected:o.array,received:t.parsedType}),g;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(p(t,{code:e?s.too_big:s.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(p(t,{code:s.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(p(t,{code:s.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new C(t,e,t.path,r)))).then(e=>f.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new C(t,e,t.path,r)));return f.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new V({...this._def,minLength:{value:e,message:e3.toString(t)}})}max(e,t){return new V({...this._def,maxLength:{value:e,message:e3.toString(t)}})}length(e,t){return new V({...this._def,exactLength:{value:e,message:e3.toString(t)}})}nonempty(e){return this.min(1,e)}}V.create=(e,t)=>new V({type:e,minLength:null,maxLength:null,exactLength:null,typeName:e5.ZodArray,...E(t)});class G extends P{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=e1.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==o.object){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.object,received:t.parsedType}),g}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof H&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||a.push(e);let l=[];for(let e of n){let t=i[e],n=r.data[e];l.push({key:{status:"valid",value:e},value:t._parse(new C(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof H){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)l.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)a.length>0&&(p(r,{code:s.unrecognized_keys,keys:a}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let i=r.data[t];l.push({key:{status:"valid",value:t},value:e._parse(new C(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of l){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>f.mergeObjectSync(t,e)):f.mergeObjectSync(t,l)}get shape(){return this._def.shape()}strict(e){return e3.errToObj,new G({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,o,a;let s=null!==(o=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=e3.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new G({...this._def,unknownKeys:"strip"})}passthrough(){return new G({...this._def,unknownKeys:"passthrough"})}extend(e){return new G({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new G({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:e5.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new G({...this._def,catchall:e})}pick(e){let t={};return e1.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new G({...this._def,shape:()=>t})}omit(e){let t={};return e1.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new G({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof G){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=eu.create(e(n))}return new G({...t._def,shape:()=>r})}return t instanceof V?new V({...t._def,type:e(t.element)}):t instanceof eu?eu.create(e(t.unwrap())):t instanceof ed?ed.create(e(t.unwrap())):t instanceof Q?Q.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return e1.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new G({...this._def,shape:()=>t})}required(e){let t={};return e1.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof eu;)e=e._def.innerType;t[r]=e}}),new G({...this._def,shape:()=>t})}keyof(){return eo(e1.objectKeys(this.shape))}}G.create=(e,t)=>new G({shape:()=>e,unknownKeys:"strip",catchall:H.create(),typeName:e5.ZodObject,...E(t)}),G.strictCreate=(e,t)=>new G({shape:()=>e,unknownKeys:"strict",catchall:H.create(),typeName:e5.ZodObject,...E(t)}),G.lazycreate=(e,t)=>new G({shape:e,unknownKeys:"strip",catchall:H.create(),typeName:e5.ZodObject,...E(t)});class Y extends P{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new l(e.ctx.common.issues));return p(t,{code:s.invalid_union,unionErrors:r}),g});{let e;let i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},o=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new l(e));return p(t,{code:s.invalid_union,unionErrors:n}),g}}get options(){return this._def.options}}Y.create=(e,t)=>new Y({options:e,typeName:e5.ZodUnion,...E(t)});let q=e=>{if(e instanceof ei)return q(e.schema);if(e instanceof ec)return q(e.innerType());if(e instanceof en)return[e.value];if(e instanceof ea)return e.options;if(e instanceof es)return Object.keys(e.enum);if(e instanceof eh)return q(e._def.innerType);if(e instanceof z)return[void 0];else if(e instanceof B)return[null];else return null};class K extends P{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==o.object)return p(t,{code:s.invalid_type,expected:o.object,received:t.parsedType}),g;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(p(t,{code:s.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),g)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=q(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new K({typeName:e5.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...E(r)})}}class X extends P{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(w(e)||w(i))return g;let n=function e(t,r){let i=a(t),n=a(r);if(t===r)return{valid:!0,data:t};if(i===o.object&&n===o.object){let i=e1.objectKeys(r),n=e1.objectKeys(t).filter(e=>-1!==i.indexOf(e)),o={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};o[i]=n.data}return{valid:!0,data:o}}if(i===o.array&&n===o.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let o=e(t[n],r[n]);if(!o.valid)return{valid:!1};i.push(o.data)}return{valid:!0,data:i}}return i===o.date&&n===o.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?((y(e)||y(i))&&t.dirty(),{status:t.value,value:n.data}):(p(r,{code:s.invalid_intersection_types}),g)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}X.create=(e,t,r)=>new X({left:e,right:t,typeName:e5.ZodIntersection,...E(r)});class Q extends P{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==o.array)return p(r,{code:s.invalid_type,expected:o.array,received:r.parsedType}),g;if(r.data.length<this._def.items.length)return p(r,{code:s.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),g;!this._def.rest&&r.data.length>this._def.items.length&&(p(r,{code:s.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new C(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>f.mergeArray(t,e)):f.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Q({...this._def,rest:e})}}Q.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new Q({items:e,typeName:e5.ZodTuple,rest:null,...E(t)})};class J extends P{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==o.object)return p(r,{code:s.invalid_type,expected:o.object,received:r.parsedType}),g;let i=[],n=this._def.keyType,a=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new C(r,e,r.path,e)),value:a._parse(new C(r,r.data[e],r.path,e))});return r.common.async?f.mergeObjectAsync(t,i):f.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new J(t instanceof P?{keyType:e,valueType:t,typeName:e5.ZodRecord,...E(r)}:{keyType:$.create(),valueType:e,typeName:e5.ZodRecord,...E(t)})}}class ee extends P{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==o.map)return p(r,{code:s.invalid_type,expected:o.map,received:r.parsedType}),g;let i=this._def.keyType,n=this._def.valueType,a=[...r.data.entries()].map(([e,t],o)=>({key:i._parse(new C(r,e,r.path,[o,"key"])),value:n._parse(new C(r,t,r.path,[o,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of a){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return g;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of a){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return g;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}ee.create=(e,t,r)=>new ee({valueType:t,keyType:e,typeName:e5.ZodMap,...E(r)});class et extends P{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==o.set)return p(r,{code:s.invalid_type,expected:o.set,received:r.parsedType}),g;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(p(r,{code:s.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(p(r,{code:s.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function a(e){let r=new Set;for(let i of e){if("aborted"===i.status)return g;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let l=[...r.data.values()].map((e,t)=>n._parse(new C(r,e,r.path,t)));return r.common.async?Promise.all(l).then(e=>a(e)):a(l)}min(e,t){return new et({...this._def,minSize:{value:e,message:e3.toString(t)}})}max(e,t){return new et({...this._def,maxSize:{value:e,message:e3.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}et.create=(e,t)=>new et({valueType:e,minSize:null,maxSize:null,typeName:e5.ZodSet,...E(t)});class er extends P{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==o.function)return p(t,{code:s.invalid_type,expected:o.function,received:t.parsedType}),g;function r(e,r){return h({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,d(),c].filter(e=>!!e),issueData:{code:s.invalid_arguments,argumentsError:r}})}function i(e,r){return h({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,d(),c].filter(e=>!!e),issueData:{code:s.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof el){let e=this;return b(async function(...t){let o=new l([]),s=await e._def.args.parseAsync(t,n).catch(e=>{throw o.addIssue(r(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,n).catch(e=>{throw o.addIssue(i(c,e)),o})})}{let e=this;return b(function(...t){let o=e._def.args.safeParse(t,n);if(!o.success)throw new l([r(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,n);if(!c.success)throw new l([i(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new er({...this._def,args:Q.create(e).rest(W.create())})}returns(e){return new er({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new er({args:e||Q.create([]).rest(W.create()),returns:t||W.create(),typeName:e5.ZodFunction,...E(r)})}}class ei extends P{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ei.create=(e,t)=>new ei({getter:e,typeName:e5.ZodLazy,...E(t)});class en extends P{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return p(t,{received:t.data,code:s.invalid_literal,expected:this._def.value}),g}return{status:"valid",value:e.data}}get value(){return this._def.value}}function eo(e,t){return new ea({values:e,typeName:e5.ZodEnum,...E(t)})}en.create=(e,t)=>new en({value:e,typeName:e5.ZodLiteral,...E(t)});class ea extends P{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return p(t,{expected:e1.joinValues(r),received:t.parsedType,code:s.invalid_type}),g}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return p(t,{received:t.data,code:s.invalid_enum_value,options:r}),g}return b(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return ea.create(e)}exclude(e){return ea.create(this.options.filter(t=>!e.includes(t)))}}ea.create=eo;class es extends P{_parse(e){let t=e1.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==o.string&&r.parsedType!==o.number){let e=e1.objectValues(t);return p(r,{expected:e1.joinValues(e),received:r.parsedType,code:s.invalid_type}),g}if(-1===t.indexOf(e.data)){let e=e1.objectValues(t);return p(r,{received:r.data,code:s.invalid_enum_value,options:e}),g}return b(e.data)}get enum(){return this._def.values}}es.create=(e,t)=>new es({values:e,typeName:e5.ZodNativeEnum,...E(t)});class el extends P{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==o.promise&&!1===t.common.async?(p(t,{code:s.invalid_type,expected:o.promise,received:t.parsedType}),g):b((t.parsedType===o.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}el.create=(e,t)=>new el({type:e,typeName:e5.ZodPromise,...E(t)});class ec extends P{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===e5.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{p(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?g:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?g:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>v(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!v(e))return e;let o=i.transform(e.value,n);if(o instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}}e1.assertNever(i)}}ec.create=(e,t,r)=>new ec({schema:e,typeName:e5.ZodEffects,effect:t,...E(r)}),ec.createWithPreprocess=(e,t,r)=>new ec({schema:t,effect:{type:"preprocess",transform:e},typeName:e5.ZodEffects,...E(r)});class eu extends P{_parse(e){return this._getType(e)===o.undefined?b(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}eu.create=(e,t)=>new eu({innerType:e,typeName:e5.ZodOptional,...E(t)});class ed extends P{_parse(e){return this._getType(e)===o.null?b(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ed.create=(e,t)=>new ed({innerType:e,typeName:e5.ZodNullable,...E(t)});class eh extends P{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===o.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}eh.create=(e,t)=>new eh({innerType:e,typeName:e5.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...E(t)});class ep extends P{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return x(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new l(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new l(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ep.create=(e,t)=>new ep({innerType:e,typeName:e5.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...E(t)});class ef extends P{_parse(e){if(this._getType(e)!==o.nan){let t=this._getOrReturnCtx(e);return p(t,{code:s.invalid_type,expected:o.nan,received:t.parsedType}),g}return{status:"valid",value:e.data}}}ef.create=e=>new ef({typeName:e5.ZodNaN,...E(e)});let eg=Symbol("zod_brand");class em extends P{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class eb extends P{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?g:"dirty"===e.status?(t.dirty(),m(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?g:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new eb({in:e,out:t,typeName:e5.ZodPipeline})}}class ew extends P{_parse(e){let t=this._def.innerType._parse(e);return v(t)&&(t.value=Object.freeze(t.value)),t}}ew.create=(e,t)=>new ew({innerType:e,typeName:e5.ZodReadonly,...E(t)});let ey=(e,t={},r)=>e?F.create().superRefine((i,n)=>{var o,a;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):F.create(),ev={object:G.lazycreate};!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(e5||(e5={}));let ex=$.create,eC=M.create,e_=ef.create,eE=N.create,eP=L.create,eS=D.create,eR=U.create,eO=z.create,eA=B.create,eT=F.create,ek=W.create,eI=H.create,ej=Z.create,e$=V.create,eM=G.create,eN=G.strictCreate,eL=Y.create,eD=K.create,eU=X.create,ez=Q.create,eB=J.create,eF=ee.create,eW=et.create,eH=er.create,eZ=ei.create,eV=en.create,eG=ea.create,eY=es.create,eq=el.create,eK=ec.create,eX=eu.create,eQ=ed.create,eJ=ec.createWithPreprocess,e0=eb.create;var e1,e2,e3,e5,e4=Object.freeze({__proto__:null,defaultErrorMap:c,setErrorMap:function(e){u=e},getErrorMap:d,makeIssue:h,EMPTY_PATH:[],addIssueToContext:p,ParseStatus:f,INVALID:g,DIRTY:m,OK:b,isAborted:w,isDirty:y,isValid:v,isAsync:x,get util(){return e1},get objectUtil(){return e2},ZodParsedType:o,getParsedType:a,ZodType:P,ZodString:$,ZodNumber:M,ZodBigInt:N,ZodBoolean:L,ZodDate:D,ZodSymbol:U,ZodUndefined:z,ZodNull:B,ZodAny:F,ZodUnknown:W,ZodNever:H,ZodVoid:Z,ZodArray:V,ZodObject:G,ZodUnion:Y,ZodDiscriminatedUnion:K,ZodIntersection:X,ZodTuple:Q,ZodRecord:J,ZodMap:ee,ZodSet:et,ZodFunction:er,ZodLazy:ei,ZodLiteral:en,ZodEnum:ea,ZodNativeEnum:es,ZodPromise:el,ZodEffects:ec,ZodTransformer:ec,ZodOptional:eu,ZodNullable:ed,ZodDefault:eh,ZodCatch:ep,ZodNaN:ef,BRAND:eg,ZodBranded:em,ZodPipeline:eb,ZodReadonly:ew,custom:ey,Schema:P,ZodSchema:P,late:ev,get ZodFirstPartyTypeKind(){return e5},coerce:{string:e=>$.create({...e,coerce:!0}),number:e=>M.create({...e,coerce:!0}),boolean:e=>L.create({...e,coerce:!0}),bigint:e=>N.create({...e,coerce:!0}),date:e=>D.create({...e,coerce:!0})},any:eT,array:e$,bigint:eE,boolean:eP,date:eS,discriminatedUnion:eD,effect:eK,enum:eG,function:eH,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>ey(t=>t instanceof e,t),intersection:eU,lazy:eZ,literal:eV,map:eF,nan:e_,nativeEnum:eY,never:eI,null:eA,nullable:eQ,number:eC,object:eM,oboolean:()=>eP().optional(),onumber:()=>eC().optional(),optional:eX,ostring:()=>ex().optional(),pipeline:e0,preprocess:eJ,promise:eq,record:eB,set:eW,strictObject:eN,string:ex,symbol:eR,transformer:eK,tuple:ez,undefined:eO,union:eL,unknown:ek,void:ej,NEVER:g,ZodIssueCode:s,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:l});let e6=e4.object({message:e4.string()});function e8(e){return e4.literal(n[e])}e4.object({accessList:e4.array(e4.string()),blockHash:e4.string().nullable(),blockNumber:e4.string().nullable(),chainId:e4.string(),from:e4.string(),gas:e4.string(),hash:e4.string(),input:e4.string().nullable(),maxFeePerGas:e4.string(),maxPriorityFeePerGas:e4.string(),nonce:e4.string(),r:e4.string(),s:e4.string(),to:e4.string(),transactionIndex:e4.string().nullable(),type:e4.string(),v:e4.string(),value:e4.string()});let e7=e4.object({chainId:e4.number()}),e9=e4.object({email:e4.string().email()}),te=e4.object({otp:e4.string()}),tt=e4.object({chainId:e4.optional(e4.number())}),tr=e4.object({email:e4.string().email()}),ti=e4.object({otp:e4.string()}),tn=e4.object({otp:e4.string()}),to=e4.object({themeMode:e4.optional(e4.enum(["light","dark"])),themeVariables:e4.optional(e4.record(e4.string(),e4.string().or(e4.number())))}),ta=e4.object({metadata:e4.object({name:e4.string(),description:e4.string(),url:e4.string(),icons:e4.array(e4.string())}).optional(),sdkVersion:e4.string(),projectId:e4.string()}),ts=e4.object({action:e4.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),tl=e4.object({email:e4.string().email(),address:e4.string(),chainId:e4.number()}),tc=e4.object({isConnected:e4.boolean()}),tu=e4.object({chainId:e4.number()}),td=e4.object({chainId:e4.number()}),th=e4.object({newEmail:e4.string().email()}),tp=e4.any(),tf=e4.object({method:e4.literal("personal_sign"),params:e4.array(e4.any())}),tg=e4.object({method:e4.literal("eth_sendTransaction"),params:e4.array(e4.any())}),tm=e4.object({method:e4.literal("eth_accounts")}),tb=e4.object({method:e4.literal("eth_getBalance"),params:e4.array(e4.any())}),tw=e4.object({method:e4.literal("eth_estimateGas"),params:e4.array(e4.any())}),ty=e4.object({method:e4.literal("eth_gasPrice")}),tv=e4.object({method:e4.literal("eth_signTypedData_v4"),params:e4.array(e4.any())}),tx=e4.object({method:e4.literal("eth_getTransactionByHash"),params:e4.array(e4.any())}),tC=e4.object({method:e4.literal("eth_blockNumber")}),t_=e4.object({method:e4.literal("eth_chainId")}),tE=e4.object({token:e4.string()}),tP={appEvent:e4.object({type:e8("APP_SWITCH_NETWORK"),payload:e7}).or(e4.object({type:e8("APP_CONNECT_EMAIL"),payload:e9})).or(e4.object({type:e8("APP_CONNECT_DEVICE")})).or(e4.object({type:e8("APP_CONNECT_OTP"),payload:te})).or(e4.object({type:e8("APP_GET_USER"),payload:e4.optional(tt)})).or(e4.object({type:e8("APP_SIGN_OUT")})).or(e4.object({type:e8("APP_IS_CONNECTED"),payload:e4.optional(tE)})).or(e4.object({type:e8("APP_GET_CHAIN_ID")})).or(e4.object({type:e8("APP_RPC_REQUEST"),payload:tf.or(tg).or(tm).or(tb).or(tw).or(ty).or(tv).or(tC).or(t_).or(tx)})).or(e4.object({type:e8("APP_UPDATE_EMAIL"),payload:tr})).or(e4.object({type:e8("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:ti})).or(e4.object({type:e8("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:tn})).or(e4.object({type:e8("APP_SYNC_THEME"),payload:to})).or(e4.object({type:e8("APP_SYNC_DAPP_DATA"),payload:ta})),frameEvent:e4.object({type:e8("FRAME_SWITCH_NETWORK_ERROR"),payload:e6}).or(e4.object({type:e8("FRAME_SWITCH_NETWORK_SUCCESS"),payload:td})).or(e4.object({type:e8("FRAME_CONNECT_EMAIL_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_CONNECT_EMAIL_SUCCESS"),payload:ts})).or(e4.object({type:e8("FRAME_CONNECT_OTP_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_CONNECT_OTP_SUCCESS")})).or(e4.object({type:e8("FRAME_CONNECT_DEVICE_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_CONNECT_DEVICE_SUCCESS")})).or(e4.object({type:e8("FRAME_GET_USER_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_GET_USER_SUCCESS"),payload:tl})).or(e4.object({type:e8("FRAME_SIGN_OUT_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_SIGN_OUT_SUCCESS")})).or(e4.object({type:e8("FRAME_IS_CONNECTED_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_IS_CONNECTED_SUCCESS"),payload:tc})).or(e4.object({type:e8("FRAME_GET_CHAIN_ID_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_GET_CHAIN_ID_SUCCESS"),payload:tu})).or(e4.object({type:e8("FRAME_RPC_REQUEST_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_RPC_REQUEST_SUCCESS"),payload:tp})).or(e4.object({type:e8("FRAME_SESSION_UPDATE"),payload:tE})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_SUCCESS")})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:th})).or(e4.object({type:e8("FRAME_SYNC_THEME_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_SYNC_THEME_SUCCESS")})).or(e4.object({type:e8("FRAME_SYNC_DAPP_DATA_ERROR"),payload:e6})).or(e4.object({type:e8("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},tS={set(e,t){localStorage.setItem(`${n.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${n.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${n.STORAGE_KEY}${e}`)}},tR=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],tO={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return tR.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=tS.get(n.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=tS.get(n.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0}};class tA{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=tO.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(n.FRAME_EVENT_KEY)&&e(tP.frameEvent.parse(t))})},onAppEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(n.APP_EVENT_KEY)&&e(tP.appEvent.parse(t))})},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw Error("W3mFrame: iframe is not set");tP.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw Error("W3mFrame: parent is not set");tP.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t){this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}});let t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${n.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){return Object.assign({},...[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})))}}class tT{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new tA(e,!0),this.w3mFrame.events.onFrameEvent(e=>{switch(console.log("\uD83D\uDCBB received",e),e.type){case n.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case n.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case n.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case n.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case n.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case n.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case n.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case n.FRAME_GET_USER_ERROR:return this.onConnectError(e);case n.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case n.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case n.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case n.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case n.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case n.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case n.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case n.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case n.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case n.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case n.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case n.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case n.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case n.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case n.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(e);case n.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(e);case n.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(e);case n.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case n.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case n.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case n.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);default:return null}})}getLoginEmailUsed(){return!!tS.get(n.EMAIL_LOGIN_USED_KEY)}getEmail(){return tS.get(n.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,tO.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_EMAIL,payload:e}),new Promise((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_OTP,payload:e}),new Promise((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,tO.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL,payload:e}),new Promise((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailPrimaryOtpResolver={resolve:e,reject:t}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailSecondaryOtpResolver={resolve:e,reject:t}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SYNC_THEME,payload:e}),new Promise((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SYNC_DAPP_DATA,payload:e}),new Promise((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}})}async connect(e){let t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_GET_USER,payload:{chainId:t}}),new Promise((e,t)=>{this.connectResolver={resolve:e,reject:t}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((e,t)=>{this.switchChainResolver={resolve:e,reject:t}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return(await this.w3mFrame.frameLoadPromise,"eth_chainId"===e.method)?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:n.APP_RPC_REQUEST,payload:e}),new Promise((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(n.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(n.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===n.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){let{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){this.updateEmailPrimaryOtpResolver?.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){let{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),this.updateEmailSecondaryOtpResolver?.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){this.updateEmailSecondaryOtpResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){tS.set(n.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){tS.set(n.EMAIL,e),tS.set(n.EMAIL_LOGIN_USED_KEY,"true"),tS.delete(n.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){tS.delete(n.EMAIL_LOGIN_USED_KEY),tS.delete(n.EMAIL),tS.delete(n.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){tS.set(n.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(tS.get(n.LAST_USED_CHAIN_KEY))}}},88720:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(i=e(t[r]))&&(n&&(n+=" "),n+=i);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(i&&(i+=" "),i+=t);return i},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:s}=t,l=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],n=null==s?void 0:s[e];if(null===t)return null;let o=i(t)||i(n);return a[e][o]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,i]=t;return void 0===i||(e[r]=i),e},{});return n(e,l,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:i,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,i]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},56815:(e,t,r)=>{"use strict";function i(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(i=e(t[r]))&&(n&&(n+=" "),n+=i)}else for(i in t)t[i]&&(n&&(n+=" "),n+=i)}return n}(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{W:()=>i})},77807:(e,t,r)=>{"use strict";r.d(t,{Cb:()=>a,SB:()=>s});var i=r(17889);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},43191:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var i=r(36503);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>e??i.Ld},16118:(e,t,r)=>{"use strict";r.d(t,{V:()=>f,i:()=>b});var i=r(36503);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:n}=i._$LH,o=e=>void 0===e.strings;var a=r(88769);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)s(i[e],!1),l(i[e]);else null!=i&&(s(i,!1),l(i))}else s(this,e)}}let h=e=>{e.type==a.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class p extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=()=>new g;class g{}let m=new WeakMap,b=(0,a.XM)(class extends p{render(e){return i.Ld}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i.Ld}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,r=m.get(t);void 0===r&&(r=new WeakMap,m.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?m.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},73703:(e,t,r)=>{"use strict";r.d(t,{oi:()=>ef,iv:()=>u,dy:()=>q,YP:()=>K,$m:()=>c}),r(17889),r(36503);var i=r(68366);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,o=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class l{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}let c=e=>new l("string"==typeof e?e:e+"",void 0,a),u=(e,...t)=>new l(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,a),d=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},h=o||void 0===n.CSSStyleSheet?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:p,defineProperty:f,getOwnPropertyDescriptor:g,getOwnPropertyNames:m,getOwnPropertySymbols:b,getPrototypeOf:w}=Object,y=globalThis;y.customElements??=i.iN;let v=y.trustedTypes,x=v?v.emptyScript:"",C=y.reactiveElementPolyfillSupport,_=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},P=(e,t)=>!p(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:P};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class R extends(globalThis.HTMLElement??i.mv){static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&f(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let e=this.properties;for(let t of[...m(e),...b(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(h(r));else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??P)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[_("elementProperties")]=new Map,R[_("finalized")]=new Map,C?.({ReactiveElement:R}),(y.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=globalThis,A=O.trustedTypes,T=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,j="?"+I,$=`<${j}>`,M=void 0===O.document?{createTreeWalker:()=>({})}:document,N=()=>M.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,U=e=>D(e)||"function"==typeof e?.[Symbol.iterator],z="[ 	\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,W=/>/g,H=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,Y=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),q=Y(1),K=Y(2),X=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),J=new WeakMap,ee=M.createTreeWalker(M,129);function et(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(t):t}let er=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",a=B;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===B?"!--"===l[1]?a=F:void 0!==l[1]?a=W:void 0!==l[2]?(G.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=n??B,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?H:'"'===l[3]?V:Z):a===V||a===Z?a=H:a===F||a===W?a=B:(a=H,n=void 0);let d=a===H&&e[t+1].startsWith("/>")?" ":"";o+=a===B?r+$:c>=0?(i.push(s),r.slice(0,c)+k+r.slice(c)+I+d):r+I+(-2===c?t:d)}return[et(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class ei{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=er(e,t);if(this.el=ei.createElement(l,r),ee.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ee.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(k)){let t=c[o++],r=i.getAttribute(e).split(I),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?el:"?"===a[1]?ec:"@"===a[1]?eu:es}),i.removeAttribute(e)}else e.startsWith(I)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(G.test(i.tagName)){let e=i.textContent.split(I),t=e.length-1;if(t>0){i.textContent=A?A.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],N()),ee.nextNode(),s.push({type:2,index:++n});i.append(e[t],N())}}}else if(8===i.nodeType){if(i.data===j)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(I,e+1));)s.push({type:7,index:n}),e+=I.length-1}}n++}}static createElement(e,t){let r=M.createElement("template");return r.innerHTML=e,r}}function en(e,t,r=e,i){if(t===X)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=L(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=en(e,n._$AS(e,t.values),n,i)),t}class eo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??M).importNode(t,!0);ee.currentNode=i;let n=ee.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new ea(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ed(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=ee.nextNode(),o++)}return ee.currentNode=M,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ea{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){L(e=en(this,e,t))?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):U(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Q&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=ei.createElement(et(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new eo(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new ei(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new ea(this.S(N()),this.S(N()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Q}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!L(e=en(this,e,t,0))||e!==this._$AH&&e!==X)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=en(this,s[r+i],t,i))===X&&(a=this._$AH[i]),o||=!L(a)||a!==this._$AH[i],a===Q?e=Q:e!==Q&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class el extends es{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ec extends es{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class eu extends es{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??Q)===X)return;let r=this._$AH,i=e===Q&&r!==Q||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Q&&(r===Q||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ed{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}let eh=O.litHtmlPolyfillSupport;eh?.(ei,ea),(O.litHtmlVersions??=[]).push("3.1.2");let ep=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new ea(t.insertBefore(N(),e),e,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ef extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ep(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}ef._$litElement$=!0,ef.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ef});let eg=globalThis.litElementPolyfillSupport;eg?.({LitElement:ef}),(globalThis.litElementVersions??=[]).push("4.0.4")},17889:(e,t,r)=>{"use strict";r.d(t,{Ts:()=>_,Qu:()=>E});var i=r(68366);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,o=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class l{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}let c=e=>new l("string"==typeof e?e:e+"",void 0,a),u=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=o||void 0===n.CSSStyleSheet?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:b}=Object,w=globalThis;w.customElements??=i.iN;let y=w.trustedTypes,v=y?y.emptyScript:"",x=w.reactiveElementPolyfillSupport,C=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!h(e,t),P={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class S extends(globalThis.HTMLElement??i.mv){static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=P){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??P}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties;for(let t of[...g(e),...m(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,x?.({ReactiveElement:S}),(w.reactiveElementVersions??=[]).push("2.0.4")},88769:(e,t,r)=>{"use strict";r.d(t,{XM:()=>n,Xe:()=>o,pX:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},36503:(e,t,r)=>{"use strict";r.d(t,{Jb:()=>E,Ld:()=>P,_$LH:()=>U});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=void 0===i.document?{createTreeWalker:()=>({})}:document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,w=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,_=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=(_(1),_(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),S=new WeakMap,R=u.createTreeWalker(u,129);function O(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let A=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",l=m;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===m?"!--"===d[1]?l=b:void 0!==d[1]?l=w:void 0!==d[2]?(C.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=y):void 0!==d[3]&&(l=y):l===y?">"===d[0]?(l=n??m,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?y:'"'===d[3]?x:v):l===x||l===v?l=y:l===b||l===w?l=m:(l=y,n=void 0);let f=l===y&&e[t+1].startsWith("/>")?" ":"";o+=l===m?r+c:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+f):r+s+(-2===h?t:f)}return[O(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[p,f]=A(e,t);if(this.el=T.createElement(p,r),R.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=R.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=f[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?M:"?"===n[1]?N:"@"===n[1]?L:$}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),i.removeAttribute(e));if(C.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),R.nextNode(),h.push({type:2,index:++o});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function k(e,t,r=e,i){if(t===E)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=k(e,n._$AS(e,t.values),n,i)),t}class I{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);R.currentNode=i;let n=R.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new j(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new D(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=R.nextNode(),o++)}return R.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=k(this,e,t))?e===P||null==e||""===e?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==P&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement(O(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new I(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=S.get(e.strings);return void 0===t&&S.set(e.strings,t=new T(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new j(this.S(d()),this.S(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ${get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!h(e=k(this,e,t,0))||e!==this._$AH&&e!==E)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=k(this,s[r+i],t,i))===E&&(a=this._$AH[i]),o||=!h(a)||a!==this._$AH[i],a===P?e=P:e!==P&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends ${constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class N extends ${constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}class L extends ${constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??P)===E)return;let r=this._$AH,i=e===P&&r!==P||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==P&&(r===P||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class D{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}let U={P:a,A:s,C:l,M:1,L:A,R:I,D:f,V:k,I:j,H:$,N:N,U:L,B:M,F:D},z=i.litHtmlPolyfillSupport;z?.(T,j),(i.litHtmlVersions??=[]).push("3.1.2")},79377:(e,t,r)=>{"use strict";r.d(t,{m6:()=>N});let i=/^\[(.+)\]$/;function n(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let o=/\s+/;function a(){let e,t,r=0,i="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let i="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);return i}(e))&&(i&&(i+=" "),i+=t);return i}function s(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let l=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,h=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,g=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function m(e){return w(e)||u.has(e)||c.test(e)}function b(e){return k(e,"length",I)}function w(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return k(e,"number",w)}function v(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&w(e.slice(0,-1))}function C(e){return l.test(e)}function _(e){return d.test(e)}let E=new Set(["length","size","percentage"]);function P(e){return k(e,E,j)}function S(e){return k(e,"position",j)}let R=new Set(["image","url"]);function O(e){return k(e,R,M)}function A(e){return k(e,"",$)}function T(){return!0}function k(e,t,r){let i=l.exec(e);return!!i&&(i[1]?"string"==typeof t?i[1]===t:t.has(i[1]):r(i[2]))}function I(e){return h.test(e)&&!p.test(e)}function j(){return!1}function $(e){return f.test(e)}function M(e){return g.test(e)}Symbol.toStringTag;let N=function(e){let t,r,s;let l=function(o){var a;return r=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,i=new Map;function n(n,o){r.set(n,o),++t>e&&(t=0,i=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=i.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((a=[].reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,i=t[0],n=t.length;return function(e){let o;let a=[],s=0,l=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===i&&(r||e.slice(c,c+n)===t)){a.push(e.slice(l,c)),l=c+n;continue}if("/"===u){o=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===a.length?e:e.substring(l),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:a,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:o&&o>l?o-l:void 0}}}(a),...function(e){let t=function(e){var t;let{theme:r,prefix:i}=e,o={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),i?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?i+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[i+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,i,o){t.forEach(t=>{if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=i;return}if("function"==typeof t){if(t.isThemeGetter){e(t(o),r,i,o);return}r.validators.push({validator:t,classGroupId:i});return}Object.entries(t).forEach(([t,a])=>{e(a,n(r,t),i,o)})})})(t,o,e,r)}),o}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let i=t[0],n=r.nextPart.get(i),o=n?e(t.slice(1),n):void 0;if(o)return o;if(0===r.validators.length)return;let a=t.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId}(r,t)||function(e){if(i.test(e)){let t=i.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let i=r[e]||[];return t&&o[e]?[...i,...o[e]]:i}}}(a)}).cache.get,s=t.cache.set,l=c,c(o)};function c(e){let i=r(e);if(i)return i;let n=function(e,t){let{splitModifiers:r,getClassGroupId:i,getConflictingClassGroupIds:n}=t,a=new Set;return e.trim().split(o).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:o,maybePostfixModifierPosition:a}=r(e),s=i(a?o.substring(0,a):o),l=!!a;if(!s){if(!a||!(s=i(o)))return{isTailwindClass:!1,originalClassName:e};l=!1}let c=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:l}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:i}=e,o=t+r;return!a.has(o)&&(a.add(o),n(r,i).forEach(e=>a.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return s(e,n),n}return function(){return l(a.apply(null,arguments))}}(function(){let e=s("colors"),t=s("spacing"),r=s("blur"),i=s("brightness"),n=s("borderColor"),o=s("borderRadius"),a=s("borderSpacing"),l=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),h=s("invert"),p=s("gap"),f=s("gradientColorStops"),g=s("gradientColorStopPositions"),E=s("inset"),R=s("margin"),k=s("opacity"),I=s("padding"),j=s("saturate"),$=s("scale"),M=s("sepia"),N=s("skew"),L=s("space"),D=s("translate"),U=()=>["auto","contain","none"],z=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",C,t],F=()=>[C,t],W=()=>["",m,b],H=()=>["auto",w,C],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Y=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",C],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[w,y],Q=()=>[w,C];return{cacheSize:500,separator:":",theme:{colors:[T],spacing:[m,b],blur:["none","",_,C],brightness:X(),borderColor:[e],borderRadius:["none","","full",_,C],borderSpacing:F(),borderWidth:W(),contrast:X(),grayscale:q(),hueRotate:Q(),invert:q(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[x,b],inset:B(),margin:B(),opacity:X(),padding:F(),saturate:X(),scale:X(),sepia:q(),skew:Q(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),C]}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",v,C]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",v,C]}],"grid-cols":[{"grid-cols":[T]}],"col-start-end":[{col:["auto",{span:["full",v,C]},C]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[T]}],"row-start-end":[{row:["auto",{span:[v,C]},C]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",C,t]}],"min-w":[{"min-w":[C,t,"min","max","fit"]}],"max-w":[{"max-w":[C,t,"none","full","min","max","fit","prose",{screen:[_]},_]}],h:[{h:[C,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[C,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[C,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[C,t,"auto","min","max","fit"]}],"font-size":[{text:["base",_,b]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",w,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",m,C]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",m,b]}],"underline-offset":[{"underline-offset":["auto",m,C]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),S]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",P]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},O]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[m,C]}],"outline-w":[{outline:[m,b]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[m,b]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_,A]}],"shadow-color":[{shadow:[T]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":G()}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",_,C]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[j]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[v,C]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,b,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})},82506:(e,t,r)=>{"use strict";r.d(t,{sj:()=>p,iH:()=>m,CO:()=>g,Ld:()=>f}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[h]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(d.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],p=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=h[0],f=new Set,g=(e,t=++h[0])=>{l!==t&&(l=t,f.forEach(r=>r(e,t)))},m=h[1],b=(e=++h[1])=>(m===e||f.size||(m=e,y.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),w=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(f.size){let r=t[3](w(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{f.add(e),1===f.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](w(r));y.set(r,[e,i])});let t=()=>{f.delete(e),0===f.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},_=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),h=Reflect.get(t,i,o);if(l&&(e(h,n)||a.has(n)&&e(h,a.get(n))))return!0;x(i),c(n)&&(n=s(n)||n);let f=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(f=p(n));let e=!d.has(f)&&u.get(f);e&&v(i,e)}return Reflect.set(t,i,f,o),g(["set",[i],n,h]),!0}},P=t(_,E);a.set(i,P);let S=[_,b,o,C];return u.set(P,S),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(P[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(_,e,t)}),P})=>[p,u,d,e,t,r,i,n,o,a,h])();function p(e={}){return h(e)}function f(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function g(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function m(e){return d.add(e),e}},29317:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:()=>i})},60628:(e,t,r)=>{"use strict";r.d(t,{RE:()=>C});var i=r(29317),n=r(91649),o=r(81659),a=r(14418),s=r(43592),l=r(47401),c=r(84242),u=r(67856),d=r(12982),h=r(63101),p=r(28576),f=r(9710),g=r(40033),m=r(50465),b=r(43372),w=r(57109),y=r(85483),v=r(90501),x=r(21644);async function C(e,t){let{account:n=e.account,batch:c=!!e.batch?.multicall,blockNumber:d,blockTag:h="latest",accessList:f,data:v,gas:C,gasPrice:P,maxFeePerGas:S,maxPriorityFeePerGas:R,nonce:O,to:A,value:T,stateOverride:k,...I}=t,j=n?(0,i.T)(n):void 0;try{(0,x.F)(t);let r=(d?(0,g.eC)(d):void 0)||h,i=function(e){if(!e)return;let t={};for(let{address:r,...i}of e){if(!(0,p.U)(r,{strict:!1}))throw new o.b({address:r});if(t[r])throw new u.Nc({address:r});t[r]=function(e){let{balance:t,nonce:r,state:i,stateDiff:n,code:o}=e,a={};if(void 0!==o&&(a.code=o),void 0!==t&&(a.balance=(0,g.eC)(t,{size:32})),void 0!==r&&(a.nonce=(0,g.eC)(r,{size:8})),void 0!==i&&(a.state=E(i)),void 0!==n){if(a.state)throw new u.Z8;a.stateDiff=E(n)}return a}(i)}return t}(k),n=e.chain?.formatters?.transactionRequest?.format,a=(n||y.tG)({...(0,w.K)(I,{format:n}),from:j?.address,accessList:f,data:v,gas:C,gasPrice:P,maxFeePerGas:S,maxPriorityFeePerGas:R,nonce:O,to:A,value:T});if(c&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:a})&&!i)try{return await _(e,{...a,blockNumber:d,blockTag:h})}catch(e){if(!(e instanceof s.pZ)&&!(e instanceof s.mm))throw e}let l=await e.request({method:"eth_call",params:i?[a,r,i]:[a,r]});if("0x"===l)return{data:void 0};return{data:l}}catch(s){let i=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(s),{offchainLookup:n,offchainLookupSignature:o}=await r.e(935).then(r.bind(r,49935));if(i?.slice(0,10)===o&&A)return{data:await n(e,{data:i,to:A})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,b.k)(e,r);return t instanceof m.cj?e:t})();return new l.cg(i,{docsPath:t,...r})}(s,{...t,account:j,chain:e.chain})}}async function _(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:c,multicallAddress:u,to:p}=t,m=u;if(!m){if(!e.chain)throw new s.pZ;m=(0,f.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let b=(o?(0,g.eC)(o):void 0)||a,{schedule:w}=(0,v.S)({id:`${e.uid}.${b}`,wait:i,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,h.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:m},b]});return(0,d.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:y,success:x}]=await w({data:c,to:p});if(!x)throw new l.VQ({data:y});return"0x"===y?{data:void 0}:{data:y}}function E(e){if(e&&0!==e.length)return e.reduce((e,{slot:t,value:r})=>{if(66!==t.length)throw new c.W_({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new c.W_({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e},{})}},71844:(e,t,r)=>{"use strict";r.d(t,{L:()=>l});var i=r(12982),n=r(63101),o=r(95164),a=r(59106),s=r(60628);async function l(e,t){let{abi:r,address:l,args:c,functionName:u,...d}=t,h=(0,n.R)({abi:r,args:c,functionName:u});try{let{data:t}=await (0,a.s)(e,s.RE,"call")({...d,data:h,to:l});return(0,i.k)({abi:r,args:c,functionName:u,data:t||"0x"})}catch(e){throw(0,o.S)(e,{abi:r,address:l,args:c,docsPath:"/docs/contract/readContract",functionName:u})}}},36361:(e,t,r)=>{"use strict";r.d(t,{d:()=>i});let i=(0,r(67413).a)({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0})},94148:(e,t,r)=>{"use strict";r.d(t,{R:()=>i});let i=(0,r(67413).a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x8cab227b1162f03b8338331adaad7aadc83b895e",blockCreated:18958930},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},10307:(e,t,r)=>{"use strict";r.d(t,{F:()=>i});let i=(0,r(67413).a)({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xBaBC7678D7A63104f1658c11D6AE9A21cdA09725",blockCreated:5043334}},testnet:!0})},42628:(e,t,r)=>{"use strict";let i;r.d(t,{e:()=>a});var n=r(29317);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,n.T)(e.account):void 0,{config:h,request:p,value:f}=e.transport({chain:u,pollingInterval:l}),g={account:d,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:p,transport:{...h,...f},type:c,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(g,{extend:function e(t){return r=>{let i=r(t);for(let e in g)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(g)})}},36370:(e,t,r)=>{"use strict";r.d(t,{q:()=>s});var i=r(14418),n=r(37422),o=r(25054),a=r(67843);function s({key:e,name:t,request:r,retryCount:s=3,retryDelay:l=150,timeout:c,type:u},d){return{config:{key:e,name:t,request:r,retryCount:s,retryDelay:l,timeout:c,type:u},request:function(e,t={}){return async(r,s={})=>{let{retryDelay:l=150,retryCount:c=3}={...t,...s};return(0,a.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof n.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*l},retryCount:c,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===o.Pv.code||e.code===o.XS.code:!(e instanceof n.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status})}}(r,{retryCount:s,retryDelay:l}),value:d}}},1564:(e,t,r)=>{"use strict";r.d(t,{d:()=>d});var i=r(37422),n=r(14418);class o extends n.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var a=r(90501),s=r(51774),l=r(17779);let c={current:0,take(){return this.current++},reset(){this.current=0}};var u=r(36370);function d(e,t={}){let{batch:r,fetchOptions:n,key:d="http",name:h="HTTP JSON-RPC",retryDelay:p}=t;return({chain:f,retryCount:g,timeout:m})=>{let{batchSize:b=1e3,wait:w=0}="object"==typeof r?r:{},y=t.retryCount??g,v=m??t.timeout??1e4,x=e||f?.rpcUrls.default.http[0];if(!x)throw new o;let C=function(e,t={}){return{async request(r){let{body:n,fetchOptions:o={},timeout:a=t.timeout??1e4}=r,{headers:u,method:d,signal:h}={...t.fetchOptions,...o};try{let t;let r=await (0,s.F)(async({signal:t})=>await fetch(e,{...o,body:Array.isArray(n)?(0,l.P)(n.map(e=>({jsonrpc:"2.0",id:e.id??c.take(),...e}))):(0,l.P)({jsonrpc:"2.0",id:n.id??c.take(),...n}),headers:{...u,"Content-Type":"application/json"},method:d||"POST",signal:h||(a>0?t:void 0)}),{errorInstance:new i.W5({body:n,url:e}),timeout:a,signal:!0});if(t=r.headers.get("Content-Type")?.startsWith("application/json")?await r.json():await r.text(),!r.ok)throw new i.Gg({body:n,details:(0,l.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof i.Gg||t instanceof i.W5)throw t;throw new i.Gg({body:n,details:t.message,url:e})}}}}(x,{fetchOptions:n,timeout:v});return(0,u.q)({key:d,name:h,async request({method:t,params:n}){let o={method:t,params:n},{schedule:s}=(0,a.S)({id:`${e}`,wait:w,shouldSplitBatch:e=>e.length>b,fn:e=>C.request({body:e}),sort:(e,t)=>e.id-t.id}),l=async e=>r?s(e):[await C.request({body:e})],[{error:c,result:u}]=await l(o);if(c)throw new i.bs({body:o,error:c,url:x});return u},retryCount:y,retryDelay:p,timeout:v,type:"http"},{fetchOptions:n,url:x})}}},91649:(e,t,r)=>{"use strict";r.d(t,{F8:()=>i,du:()=>a,k3:()=>o,nZ:()=>s});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}]},5969:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,Up:()=>n,hZ:()=>o});let i={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},5392:(e,t,r)=>{"use strict";r.d(t,{Bd:()=>o,Zn:()=>n,ez:()=>i});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},79254:(e,t,r)=>{"use strict";r.d(t,{CI:()=>m,M4:()=>c,MX:()=>p,S4:()=>f,dh:()=>g,fs:()=>u,gr:()=>l,hn:()=>b,wM:()=>w,wb:()=>s,xB:()=>a,xL:()=>h,yP:()=>d});var i=r(62488),n=r(47119),o=r(14418);class a extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class s extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class l extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class c extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class d extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class h extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class p extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class f extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class m extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class b extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class w extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},44705:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var i=r(14418);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},81659:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var i=r(14418);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},14418:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var i=r(78700);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},43592:(e,t,r)=>{"use strict";r.d(t,{Bk:()=>a,Yl:()=>o,mm:()=>n,pZ:()=>s});var i=r(14418);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},47401:(e,t,r)=>{"use strict";r.d(t,{cg:()=>b,uq:()=>w,Lu:()=>y,Dk:()=>v,VQ:()=>x});var i=r(29317),n=r(5969),o=r(90771),a=r(62488),s=r(17779);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(99328),u=r(47352),d=r(60564),h=r(79254),p=r(14418),f=r(67856),g=r(2702),m=r(78700);class b extends p.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:p,value:m,stateOverride:b}){let w=t?(0,i.T)(t):void 0,y=(0,g.xr)({from:w?.address,to:p,value:void 0!==m&&`${(0,u.d)(m)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h});b&&(y+=`
${(0,f.Bj)(b)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class w extends p.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0;super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",(0,g.xr)({address:i&&(0,m.CR)(i),function:u?(0,a.t)(u,{includeName:!0}):void 0,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s})].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class y extends p.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,d,p;if(t&&"0x"!==t)try{let{abiItem:r,errorName:i,args:s}=p=(0,o.p)({abi:e,data:t});if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.reason=u,this.signature=d}}class v extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class x extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},84242:(e,t,r)=>{"use strict";r.d(t,{$s:()=>o,W_:()=>a,mV:()=>n});var i=r(14418);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},99383:(e,t,r)=>{"use strict";r.d(t,{J5:()=>n,M6:()=>a,yr:()=>o});var i=r(14418);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},50465:(e,t,r)=>{"use strict";r.d(t,{C_:()=>d,G$:()=>s,Hh:()=>a,M_:()=>o,WF:()=>h,ZI:()=>l,cj:()=>m,cs:()=>g,dR:()=>p,pZ:()=>f,se:()=>u,vU:()=>c});var i=r(60564),n=r(14418);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},37422:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>a,W5:()=>l,bs:()=>s});var i=r(17779),n=r(14418),o=r(78700);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},25054:(e,t,r)=>{"use strict";r.d(t,{B:()=>l,GD:()=>w,I0:()=>_,KB:()=>g,LX:()=>c,Og:()=>p,PE:()=>v,Pv:()=>b,Ts:()=>x,XS:()=>d,ab:()=>y,gS:()=>m,ir:()=>P,nY:()=>u,pT:()=>f,s7:()=>s,u5:()=>C,x3:()=>E,yR:()=>h});var i=r(14418),n=r(37422);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class _ extends a{constructor(e){super(e,{code:_.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class P extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},67856:(e,t,r)=>{"use strict";r.d(t,{Bj:()=>s,Nc:()=>n,Z8:()=>o});var i=r(14418);class n extends i.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class o extends i.G{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function a(e){return e.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function s(e){return e.reduce((e,{address:t,...r})=>{let i=`${e}    ${t}:
`;return r.nonce&&(i+=`      nonce: ${r.nonce}
`),r.balance&&(i+=`      balance: ${r.balance}
`),r.code&&(i+=`      code: ${r.code}
`),r.state&&(i+="      state:\n"+a(r.state)),r.stateDiff&&(i+="      stateDiff:\n"+a(r.stateDiff)),i},"  State Override:\n").slice(0,-1)}},2702:(e,t,r)=>{"use strict";r.d(t,{j3:()=>l,mk:()=>c,xY:()=>s,xr:()=>a});var i=r(47352),n=r(60564),o=r(14418);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,i.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}},78700:(e,t,r)=>{"use strict";r.d(t,{CR:()=>i,Gr:()=>n,bo:()=>o});let i=e=>e,n=e=>e,o=()=>"viem@2.7.16"},25304:(e,t,r)=>{"use strict";r.d(t,{r:()=>y});var i=r(79254),n=r(97542),o=r(14418);class a extends o.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class s extends o.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class l extends o.G{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}let c={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new l({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new s({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new a({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new a({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};var u=r(47119),d=r(1979),h=r(18274),p=r(99383),f=r(5380),g=r(40033);function m(e,t={}){void 0!==t.size&&(0,f.Yf)(e,{size:t.size});let r=(0,g.ci)(e,t);return(0,f.ly)(r,t)}var b=r(47484),w=r(75084);function y(e,t){let r="string"==typeof t?(0,b.nr)(t):t,o=function(e,{recursiveReadLimit:t=8192}={}){let r=Object.create(c);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}(r);if(0===(0,u.d)(r)&&e.length>0)throw new i.wb;if((0,u.d)(t)&&32>(0,u.d)(t))throw new i.xB({data:"string"==typeof t?t:(0,g.ci)(t),params:e,size:(0,u.d)(t)});let a=0,s=[];for(let t=0;t<e.length;++t){let r=e[t];o.setPosition(a);let[l,c]=function e(t,r,{staticPosition:o}){let a=(0,w.S)(r.type);if(a){let[i,n]=a;return function(t,r,{length:i,staticPosition:n}){if(!i){let i=n+m(t.readBytes(32)),o=i+32;t.setPosition(i);let a=m(t.readBytes(32)),s=v(r),l=0,c=[];for(let i=0;i<a;++i){t.setPosition(o+(s?32*i:l));let[n,a]=e(t,r,{staticPosition:o});l+=a,c.push(n)}return t.setPosition(n+32),[c,32]}if(v(r)){let o=n+m(t.readBytes(32)),a=[];for(let n=0;n<i;++n){t.setPosition(o+32*n);let[i]=e(t,r,{staticPosition:o});a.push(i)}return t.setPosition(n+32),[a,32]}let o=0,a=[];for(let s=0;s<i;++s){let[i,s]=e(t,r,{staticPosition:n+o});o+=s,a.push(i)}return[a,o]}(t,{...r,type:n},{length:i,staticPosition:o})}if("tuple"===r.type)return function(t,r,{staticPosition:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},a=0;if(v(r)){let s=i+m(t.readBytes(32));for(let i=0;i<r.components.length;++i){let l=r.components[i];t.setPosition(s+a);let[c,u]=e(t,l,{staticPosition:s});a+=u,o[n?i:l?.name]=c}return t.setPosition(i+32),[o,32]}for(let s=0;s<r.components.length;++s){let l=r.components[s],[c,u]=e(t,l,{staticPosition:i});o[n?s:l?.name]=c,a+=u}return[o,a]}(t,r,{staticPosition:o});if("address"===r.type)return function(e){let t=e.readBytes(32);return[(0,n.x)((0,g.ci)((0,d.T4)(t,-20))),32]}(t);if("bool"===r.type)return[function(e,t={}){let r=e;if(void 0!==t.size&&((0,f.Yf)(r,{size:t.size}),r=(0,h.f)(r)),r.length>1||r[0]>1)throw new p.yr(r);return!!r[0]}(t.readBytes(32),{size:32}),32];if(r.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){let[i,n]=t.type.split("bytes");if(!n){let t=m(e.readBytes(32));e.setPosition(r+t);let i=m(e.readBytes(32));if(0===i)return e.setPosition(r+32),["0x",32];let n=e.readBytes(i);return e.setPosition(r+32),[(0,g.ci)(n),32]}return[(0,g.ci)(e.readBytes(parseInt(n),32)),32]}(t,r,{staticPosition:o});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,t){let r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=e.readBytes(32);return[i>48?function(e,t={}){void 0!==t.size&&(0,f.Yf)(e,{size:t.size});let r=(0,g.ci)(e,t);return(0,f.y_)(r,t)}(n,{signed:r}):m(n,{signed:r}),32]}(t,r);if("string"===r.type)return function(e,{staticPosition:t}){let r=m(e.readBytes(32));e.setPosition(t+r);let i=m(e.readBytes(32));if(0===i)return e.setPosition(t+32),["",32];let n=e.readBytes(i,32),o=function(e,t={}){let r=e;return void 0!==t.size&&((0,f.Yf)(r,{size:t.size}),r=(0,h.f)(r,{dir:"right"})),new TextDecoder().decode(r)}((0,h.f)(n));return e.setPosition(t+32),[o,32]}(t,{staticPosition:o});throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}(o,r,{staticPosition:0});a+=c,s.push(l)}return s}function v(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(v);let r=(0,w.S)(e.type);return!!(r&&v({...e,type:r[1]}))}},90771:(e,t,r)=>{"use strict";r.d(t,{p:()=>c});var i=r(5969),n=r(79254),o=r(1979),a=r(33116),s=r(25304),l=r(62488);function c(e){let{abi:t,data:r}=e,c=(0,o.tP)(r,0,4);if("0x"===c)throw new n.wb;let u=[...t||[],i.Up,i.hZ].find(e=>"error"===e.type&&c===(0,a.C)((0,l.t)(e)));if(!u)throw new n.yP(c,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(r,4)):void 0,errorName:u.name}}},12982:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var i=r(79254),n=r(25304),o=r(99328);let a="/docs/contract/decodeFunctionResult";function s(e){let{abi:t,args:r,functionName:s,data:l}=e,c=t[0];if(s){let e=(0,o.mE)({abi:t,args:r,name:s});if(!e)throw new i.xL(s,{docsPath:a});c=e}if("function"!==c.type)throw new i.xL(void 0,{docsPath:a});if(!c.outputs)throw new i.MX(c.name,{docsPath:a});let u=(0,n.r)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},75084:(e,t,r)=>{"use strict";r.d(t,{E:()=>d,S:()=>p});var i=r(79254),n=r(81659),o=r(28576),a=r(93385),s=r(49316),l=r(47119),c=r(1979),u=r(40033);function d(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=h(function({params:e,values:t}){let r=[];for(let d=0;d<e.length;d++)r.push(function e({param:t,value:r}){let d=p(t.type);if(d){let[n,o]=d;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(s=!0),l.push(i)}if(o||s){let e=h(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?h(n):(0,a.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,l.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function h(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,l.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+n,{size:32})),i.push(s),n+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...i])}function p(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},63101:(e,t,r)=>{"use strict";r.d(t,{R:()=>u});var i=r(79254),n=r(93385),o=r(33116),a=r(75084),s=r(62488),l=r(99328);let c="/docs/contract/encodeFunctionData";function u(e){let{abi:t,args:r,functionName:u}=e,d=t[0];if(u){let e=(0,l.mE)({abi:t,args:r,name:u});if(!e)throw new i.xL(u,{docsPath:c});d=e}if("function"!==d.type)throw new i.xL(void 0,{docsPath:c});let h=(0,s.t)(d),p=(0,o.C)(h),f="inputs"in d&&d.inputs?(0,a.E)(d.inputs,r??[]):void 0;return(0,n.SM)([p,f??"0x"])}},62488:(e,t,r)=>{"use strict";r.d(t,{h:()=>o,t:()=>n});var i=r(79254);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},99328:(e,t,r)=>{"use strict";r.d(t,{mE:()=>l});var i=r(79254),n=r(46071),o=r(28576);let a=r(1193).r;var s=r(33116);function l(e){let t;let{abi:r,args:l=[],name:c}=e,u=(0,n.v)(c,{strict:!1}),d=r.filter(e=>u?"function"===e.type?(0,s.C)(e)===c:"event"===e.type&&a(e)===c:"name"in e&&e.name===c);if(0!==d.length){if(1===d.length)return d[0];for(let e of d)if("inputs"in e){if(!l||0===l.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===l.length&&l.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,o.U)(t,{strict:!1});case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)})){if(t&&"inputs"in t&&t.inputs){let r=function e(t,r,i){for(let n in t){let a=t[n],s=r[n];if("tuple"===a.type&&"tuple"===s.type&&"components"in a&&"components"in s)return e(a.components,s.components,i[n]);let l=[a.type,s.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,o.U)(i[n],{strict:!1}))return l}}(e.inputs,t.inputs,l);if(r)throw new i.S4({abiItem:e,type:r[0]},{abiItem:t,type:r[1]})}t=e}}return t||d[0]}}},97542:(e,t,r)=>{"use strict";r.d(t,{K:()=>l,x:()=>s});var i=r(81659),n=r(47484),o=r(3554),a=r(28576);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new i.b({address:e});return s(e,t)}},28576:(e,t,r)=>{"use strict";r.d(t,{U:()=>s});class i extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}var n=r(97542);let o=/^0x[a-fA-F0-9]{40}$/,a=new i(8192);function s(e,{strict:t=!0}={}){if(a.has(e))return a.get(e);let r=!!o.test(e)&&(e.toLowerCase()===e||!t||(0,n.x)(e)===e);return a.set(e,r),r}},67413:(e,t,r)=>{"use strict";function i(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}r.d(t,{a:()=>i})},9710:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var i=r(43592);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},93385:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:()=>n,zo:()=>i})},46071:(e,t,r)=>{"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:()=>i})},49316:(e,t,r)=>{"use strict";r.d(t,{gc:()=>o,vk:()=>n});var i=r(84242);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$s({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$s({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},47119:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});var i=r(46071);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},1979:(e,t,r)=>{"use strict";r.d(t,{T4:()=>c,tP:()=>a});var i=r(84242),n=r(46071),o=r(47119);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):c(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.mV({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.mV({offset:r,position:"end",size:(0,o.d)(e)})}function c(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}},18274:(e,t,r)=>{"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:()=>i})},5380:(e,t,r)=>{"use strict";r.d(t,{Yf:()=>s,ly:()=>c,rR:()=>u,y_:()=>l});var i=r(99383),n=r(47119),o=r(18274),a=r(47484);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2;return i<=(1n<<8n*BigInt(n)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){return Number(l(e,t))}function u(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},47484:(e,t,r)=>{"use strict";r.d(t,{O0:()=>c,nr:()=>h,qX:()=>p});var i=r(14418),n=r(46071),o=r(49316),a=r(5380),s=r(40033);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?h((0,s.eC)(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?h(e,t):p(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(n.charCodeAt(t++)),o=d(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function p(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},40033:(e,t,r)=>{"use strict";r.d(t,{$G:()=>h,C4:()=>l,NC:()=>s,ci:()=>c,eC:()=>u});var i=r(99383),n=r(49316),o=r(5380);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){return c(d.encode(e),t)}},95164:(e,t,r)=>{"use strict";r.d(t,{S:()=>s});var i=r(79254),n=r(14418),o=r(47401),a=r(25054);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:d,data:h,message:p,shortMessage:f}=e instanceof o.VQ?e:e instanceof n.G?e.walk(e=>"data"in e)||e.walk():{},g=e instanceof i.wb?new o.Dk({functionName:c}):[3,a.XS.code].includes(d)&&(h||p||f)?new o.Lu({abi:t,data:"object"==typeof h?h.data:h,functionName:c,message:f??p}):e;return new o.uq(g,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},43372:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(14418),n=r(50465);function o(e,t){let r=(e.details||"").toLowerCase(),o=e instanceof i.G?e.walk(e=>e.code===n.M_.code):e;return o instanceof i.G?new n.M_({cause:e,message:o.details}):n.M_.nodeMessage.test(r)?new n.M_({cause:e,message:e.details}):n.Hh.nodeMessage.test(r)?new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.G$.nodeMessage.test(r)?new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.ZI.nodeMessage.test(r)?new n.ZI({cause:e,nonce:t?.nonce}):n.vU.nodeMessage.test(r)?new n.vU({cause:e,nonce:t?.nonce}):n.se.nodeMessage.test(r)?new n.se({cause:e,nonce:t?.nonce}):n.C_.nodeMessage.test(r)?new n.C_({cause:e}):n.WF.nodeMessage.test(r)?new n.WF({cause:e,gas:t?.gas}):n.dR.nodeMessage.test(r)?new n.dR({cause:e,gas:t?.gas}):n.pZ.nodeMessage.test(r)?new n.pZ({cause:e}):n.cs.nodeMessage.test(r)?new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.cj({cause:e})}},57109:(e,t,r)=>{"use strict";function i(e,{format:t}){if(!t)return{};let r={};return function t(i){for(let n of Object.keys(i))n in e&&(r[n]=e[n]),i[n]&&"object"==typeof i[n]&&!Array.isArray(i[n])&&t(i[n])}(t(e||{})),r}r.d(t,{K:()=>i})},85483:(e,t,r)=>{"use strict";r.d(t,{tG:()=>o});var i=r(40033);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function o(e){return{...e,gas:void 0!==e.gas?(0,i.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,i.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,i.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,i.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,i.eC)(e.nonce):void 0,type:void 0!==e.type?n[e.type]:void 0,value:void 0!==e.value?(0,i.eC)(e.value):void 0}}},59106:(e,t,r)=>{"use strict";function i(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}r.d(t,{s:()=>i})},3554:(e,t,r)=>{"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:()=>$});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,p=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function f(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class g{clone(){return this._cloneInto()}}let[m,b,w]=[[],[],[]],y=BigInt(0),v=BigInt(1),x=BigInt(2),C=BigInt(7),_=BigInt(256),E=BigInt(113);for(let e=0,t=v,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],m.push(2*(5*i+r)),b.push((e+1)*(e+2)/2%64);let n=y;for(let e=0;e<7;e++)(t=(t<<v^(t>>C)*E)%_)&x&&(n^=v<<(v<<BigInt(e))-v);w.push(n)}let[P,S]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[n],t);[r[n],i[n]]=[o,l]}return[r,i]}(w,!0),R=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),O=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class A extends g{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=p(this.state)}keccak(){(function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=R(o,a,1)^r[i],l=O(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=b[r],o=R(t,n,i),a=O(t,n,i),s=m[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=P[i],e[1]^=S[i]}r.fill(0)})(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this,i=(e=f(e)).length;for(let n=0;n<i;){let o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new A(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let T=function(e){let t=t=>e().update(f(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new A(136,1,32));var k=r(46071),I=r(47484),j=r(40033);function $(e,t){let r=T((0,k.v)(e,{strict:!1})?(0,I.O0)(e):e);return"bytes"===(t||"hex")?r:(0,j.NC)(r)}},33116:(e,t,r)=>{"use strict";r.d(t,{C:()=>o});var i=r(1979),n=r(1193);let o=e=>(0,i.tP)((0,n.r)(e),0,4)},1193:(e,t,r)=>{"use strict";r.d(t,{r:()=>u});var i=r(47484),n=r(3554);let o=e=>(0,n.w)((0,i.O0)(e)),a=/^tuple(?<array>(\[(\d*)\])*)$/;function s(e){let t="",r=e.length;for(let i=0;i<r;i++)t+=function e(t){let r=t.type;if(a.test(t.type)&&"components"in t){r="(";let i=t.components.length;for(let n=0;n<i;n++)r+=e(t.components[n]),n<i-1&&(r+=", ");let n=function(e,t){let r=e.exec(t);return r?.groups}(a,t.type);return r+=`)${n?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(e[i]),i!==r-1&&(t+=", ");return t}var l=r(14418);let c=e=>(function(e){let t=!0,r="",i=0,n="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t){if(0===i){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}n+=s,r+=s}}if(!o)throw new l.G("Unable to normalize signature.");return n})("string"==typeof e?e:function(e){return"function"===e.type?`function ${e.name}(${s(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${s(e.outputs)})`:""}`:"event"===e.type?`event ${e.name}(${s(e.inputs)})`:"error"===e.type?`error ${e.name}(${s(e.inputs)})`:"constructor"===e.type?`constructor(${s(e.inputs)})${"payable"===e.stateMutability?" payable":""}`:"fallback"===e.type?"fallback()":"receive() external payable"}(e));function u(e){return o(c(e))}},90501:(e,t,r)=>{"use strict";r.d(t,{S:()=>n});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r});return(r?.([...l(),e])&&a(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},67843:(e,t,r)=>{"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await i(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}r.d(t,{J:()=>n})},51774:(e,t,r)=>{"use strict";function i(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}r.d(t,{F:()=>i})},17779:(e,t,r)=>{"use strict";r.d(t,{P:()=>i});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},21644:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var i=r(29317),n=r(81659),o=r(50465),a=r(2702),s=r(28576);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,i.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new n.b({address:d.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},47352:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var i=r(5392),n=r(35078);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},60564:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var i=r(5392),n=r(35078);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},35078:(e,t,r)=>{"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:()=>i})},58785:(e,t,r)=>{"use strict";r.d(t,{V:()=>s,F:()=>l});var i=r(3729);let n=!1;async function o(e,t={}){let r;if(n)return[];n=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let i=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,i.push(t)}else i.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let o={};for(let[,t]of e.state.connections)o[t.connector.id]=1;r&&(o[r]=0);let a=Object.keys(o).length>0?[...i].sort((e,t)=>(o[e.id]??10)-(o[t.id]??10)):i,s=!1,l=[],c=[];for(let t of a){let r=await t.getProvider();if(!r||c.some(e=>e===r)||!await t.isAuthorized())continue;let i=await t.connect({isReconnecting:!0}).catch(()=>null);i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),l.push({accounts:i.accounts,chainId:i.chainId,connector:t}),c.push(r),s=!0)}return s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:void 0,status:"disconnected"})),n=!1,l}function a(e){let{children:t,config:r,initialState:n,reconnectOnMount:a=!0}=e,{onMount:s}=function(e,t){let{initialState:r,reconnectOnMount:i}=t;return r&&e.setState({...r,connections:i?r.connections:new Map,status:i?"reconnecting":"disconnected"}),{async onMount(){if(e._internal.ssr){await e._internal.store.persist.rehydrate();let t=e._internal.mipd?.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(e=>[...e,...t??[]])}i?o(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(r,{initialState:n,reconnectOnMount:a});r._internal.ssr||s();let l=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{if(l.current&&r._internal.ssr)return s(),()=>{l.current=!1}},[]),t}let s=(0,i.createContext)(void 0);function l(e){let{children:t,config:r}=e;return(0,i.createElement)(a,e,(0,i.createElement)(s.Provider,{value:r},t))}},65303:(e,t,r)=>{"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}r.d(t,{g7:()=>o});var n=r(40002);let o=(0,n.forwardRef)((e,t)=>{let{children:r,...o}=e,s=n.Children.toArray(r),c=s.find(l);if(c){let e=c.props.children,r=s.map(t=>t!==c?t:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(a,i({},o,{ref:t}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,r):null)}return(0,n.createElement)(a,i({},o,{ref:t}),r)});o.displayName="Slot";let a=(0,n.forwardRef)((e,t)=>{let{children:r,...i}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...function(e,t){let r={...t};for(let i in t){let n=e[i],o=t[i];/^on[A-Z]/.test(i)?n&&o?r[i]=(...e)=>{o(...e),n(...e)}:n&&(r[i]=n):"style"===i?r[i]={...n,...o}:"className"===i&&(r[i]=[n,o].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,r.ref):r.ref}):n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function l(e){return(0,n.isValidElement)(e)&&e.type===s}},46783:(e,t,r)=>{"use strict";function i(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>i,_interop_require_default:()=>i})},78134:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(i=e(t[r]))&&(n&&(n+=" "),n+=i);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(i&&(i+=" "),i+=t);return i},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:s}=t,l=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],n=null==s?void 0:s[e];if(null===t)return null;let o=i(t)||i(n);return a[e][o]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,i]=t;return void 0===i||(e[r]=i),e},{});return n(e,l,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:i,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,i]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},70990:(e,t,r)=>{"use strict";function i(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(i=e(t[r]))&&(n&&(n+=" "),n+=i)}else for(i in t)t[i]&&(n&&(n+=" "),n+=i)}return n}(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{W:()=>i})},81774:(e,t,r)=>{"use strict";r.d(t,{m6:()=>N});let i=/^\[(.+)\]$/;function n(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let o=/\s+/;function a(){let e,t,r=0,i="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let i="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);return i}(e))&&(i&&(i+=" "),i+=t);return i}function s(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let l=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,h=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,g=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function m(e){return w(e)||u.has(e)||c.test(e)}function b(e){return k(e,"length",I)}function w(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return k(e,"number",w)}function v(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&w(e.slice(0,-1))}function C(e){return l.test(e)}function _(e){return d.test(e)}let E=new Set(["length","size","percentage"]);function P(e){return k(e,E,j)}function S(e){return k(e,"position",j)}let R=new Set(["image","url"]);function O(e){return k(e,R,M)}function A(e){return k(e,"",$)}function T(){return!0}function k(e,t,r){let i=l.exec(e);return!!i&&(i[1]?"string"==typeof t?i[1]===t:t.has(i[1]):r(i[2]))}function I(e){return h.test(e)&&!p.test(e)}function j(){return!1}function $(e){return f.test(e)}function M(e){return g.test(e)}Symbol.toStringTag;let N=function(e){let t,r,s;let l=function(o){var a;return r=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,i=new Map;function n(n,o){r.set(n,o),++t>e&&(t=0,i=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=i.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((a=[].reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,i=t[0],n=t.length;return function(e){let o;let a=[],s=0,l=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===i&&(r||e.slice(c,c+n)===t)){a.push(e.slice(l,c)),l=c+n;continue}if("/"===u){o=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===a.length?e:e.substring(l),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:a,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:o&&o>l?o-l:void 0}}}(a),...function(e){let t=function(e){var t;let{theme:r,prefix:i}=e,o={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),i?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?i+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[i+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,i,o){t.forEach(t=>{if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=i;return}if("function"==typeof t){if(t.isThemeGetter){e(t(o),r,i,o);return}r.validators.push({validator:t,classGroupId:i});return}Object.entries(t).forEach(([t,a])=>{e(a,n(r,t),i,o)})})})(t,o,e,r)}),o}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let i=t[0],n=r.nextPart.get(i),o=n?e(t.slice(1),n):void 0;if(o)return o;if(0===r.validators.length)return;let a=t.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId}(r,t)||function(e){if(i.test(e)){let t=i.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let i=r[e]||[];return t&&o[e]?[...i,...o[e]]:i}}}(a)}).cache.get,s=t.cache.set,l=c,c(o)};function c(e){let i=r(e);if(i)return i;let n=function(e,t){let{splitModifiers:r,getClassGroupId:i,getConflictingClassGroupIds:n}=t,a=new Set;return e.trim().split(o).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:o,maybePostfixModifierPosition:a}=r(e),s=i(a?o.substring(0,a):o),l=!!a;if(!s){if(!a||!(s=i(o)))return{isTailwindClass:!1,originalClassName:e};l=!1}let c=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:l}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:i}=e,o=t+r;return!a.has(o)&&(a.add(o),n(r,i).forEach(e=>a.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return s(e,n),n}return function(){return l(a.apply(null,arguments))}}(function(){let e=s("colors"),t=s("spacing"),r=s("blur"),i=s("brightness"),n=s("borderColor"),o=s("borderRadius"),a=s("borderSpacing"),l=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),h=s("invert"),p=s("gap"),f=s("gradientColorStops"),g=s("gradientColorStopPositions"),E=s("inset"),R=s("margin"),k=s("opacity"),I=s("padding"),j=s("saturate"),$=s("scale"),M=s("sepia"),N=s("skew"),L=s("space"),D=s("translate"),U=()=>["auto","contain","none"],z=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",C,t],F=()=>[C,t],W=()=>["",m,b],H=()=>["auto",w,C],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Y=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",C],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[w,y],Q=()=>[w,C];return{cacheSize:500,separator:":",theme:{colors:[T],spacing:[m,b],blur:["none","",_,C],brightness:X(),borderColor:[e],borderRadius:["none","","full",_,C],borderSpacing:F(),borderWidth:W(),contrast:X(),grayscale:q(),hueRotate:Q(),invert:q(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[x,b],inset:B(),margin:B(),opacity:X(),padding:F(),saturate:X(),scale:X(),sepia:q(),skew:Q(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),C]}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",v,C]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",v,C]}],"grid-cols":[{"grid-cols":[T]}],"col-start-end":[{col:["auto",{span:["full",v,C]},C]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[T]}],"row-start-end":[{row:["auto",{span:[v,C]},C]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",C,t]}],"min-w":[{"min-w":[C,t,"min","max","fit"]}],"max-w":[{"max-w":[C,t,"none","full","min","max","fit","prose",{screen:[_]},_]}],h:[{h:[C,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[C,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[C,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[C,t,"auto","min","max","fit"]}],"font-size":[{text:["base",_,b]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",w,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",m,C]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",m,b]}],"underline-offset":[{"underline-offset":["auto",m,C]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),S]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",P]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},O]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[m,C]}],"outline-w":[{outline:[m,b]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[m,b]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_,A]}],"shadow-color":[{shadow:[T]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":G()}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",_,C]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[j]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[v,C]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,b,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}};