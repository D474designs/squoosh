
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var v="",w;v=self.location.href;_scriptDir&&(v=_scriptDir);0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+1):v="";w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)};var ba=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);
for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ca=!1,da=new TextDecoder("utf8");
function ea(a,b,c){var d=D;if(0<c){c=b+c-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0}}var fa=new TextDecoder("utf-16le");
function ha(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&E[c];)++c;return fa.decode(D.subarray(a,c<<1))}function ia(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var g=0;g<c;++g)F[b>>1]=a.charCodeAt(g),b+=2;F[b>>1]=0;return b-d}function ja(a){return 2*a.length}function ka(a,b){for(var c=0,d="";!(c>=b/4);){var g=G[a+4*c>>2];if(0==g)break;++c;65536<=g?(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023)):d+=String.fromCharCode(g)}return d}
function la(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}G[b>>2]=f;b+=4;if(b+4>c)break}G[b>>2]=0;return b-d}function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var I,na,D,F,E,G,J,oa,pa;
function qa(){var a=C.buffer;I=a;e.HEAP8=na=new Int8Array(a);e.HEAP16=F=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=E=new Uint16Array(a);e.HEAPU32=J=new Uint32Array(a);e.HEAPF32=oa=new Float32Array(a);e.HEAPF64=pa=new Float64Array(a)}var L,ra=[],sa=[],ta=[];function ua(){var a=e.preRun.shift();ra.unshift(a)}var M=0,va=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);y(a);ca=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a;}var O=(new URL("imagequant.wasm",import.meta.url)).toString();function wa(){try{if(O==O&&z)return new Uint8Array(z);if(w)return w(O);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}
function xa(){return z||"function"!==typeof fetch?Promise.resolve().then(function(){return wa()}):fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return wa()})}function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.L;"number"===typeof c?void 0===b.H?L.get(c)():L.get(c)(b.H):c(void 0===b.H?null:b.H)}}}
function za(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Aa=void 0;function P(a){for(var b="";D[a];)b+=Aa[D[a++]];return b}var Q={},R={},S={};function Ba(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ca(a,b){a=Ba(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Da(a){var b=Error,c=Ca(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Ea=void 0;function T(a){throw new Ea(a);}var Fa=void 0;function Ga(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Fa("Mismatched type converter count");for(var p=0;p<d.length;++p)U(d[p],h[p])}var d=[];d.forEach(function(h){S[h]=a});var g=Array(a.length),f=[],l=0;a.forEach(function(h,p){R.hasOwnProperty(h)?g[p]=R[h]:(f.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){g[p]=R[h];++l;l===f.length&&c(g)}))});0===f.length&&c(g)}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.K)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(g){g()}))}var Ja=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ka(a){4<a&&0===--V[a].I&&(V[a]=void 0,Ja.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ja.length?Ja.pop():V.length;V[b]={I:1,value:a};return b}}function La(a){return this.fromWireType(J[a>>2])}function Ma(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Na(a,b){switch(b){case 2:return function(c){return this.fromWireType(oa[c>>2])};case 3:return function(c){return this.fromWireType(pa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Oa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ca(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Pa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Qa(a,b){var c=e;if(void 0===c[a].F){var d=c[a];c[a]=function(){c[a].F.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].F+")!");return c[a].F[arguments.length].apply(this,arguments)};c[a].F=[];c[a].F[d.J]=d}}
function Ra(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].F&&void 0!==e[a].F[c])&&T("Cannot register public name '"+a+"' twice"),Qa(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].F[c]=b):(e[a]=b,void 0!==c&&(e[a].N=c))}function Sa(a,b){for(var c=[],d=0;d<a;d++)c.push(G[(b>>2)+d]);return c}
function Ta(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=e["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=L.get(b).apply(null,c);return d}}function Ua(a,b){a=P(a);var c=a.includes("j")?Ta(a,b):L.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var Va=void 0;function Wa(a){a=Xa(a);var b=P(a);X(a);return b}
function Ya(a,b){function c(f){g[f]||R[f]||(S[f]?S[f].forEach(c):(d.push(f),g[f]=!0))}var d=[],g={};b.forEach(c);throw new Va(a+": "+d.map(Wa).join([", "]));}function Za(a,b,c){switch(b){case 0:return c?function(d){return na[d]}:function(d){return D[d]};case 1:return c?function(d){return F[d>>1]}:function(d){return E[d>>1]};case 2:return c?function(d){return G[d>>2]}:function(d){return J[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var $a={};
function ab(){return"object"===typeof globalThis?globalThis:Function("return this")()}function bb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+Wa(a));return c}for(var cb={},db=[null,[],[]],eb=Array(256),Y=0;256>Y;++Y)eb[Y]=String.fromCharCode(Y);Aa=eb;Ea=e.BindingError=Da("BindingError");Fa=e.InternalError=Da("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};
e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};Va=e.UnboundTypeError=Da("UnboundTypeError");
var gb={m:function(){},q:function(){},n:function(a,b,c,d,g){var f=za(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:g},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=na;else if(2===c)h=F;else if(4===c)h=G;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>f])},G:null})},v:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Ka(c);return d},toWireType:function(c,d){return W(d)},
argPackAdvance:8,readValueFromPointer:La,G:null})},l:function(a,b,c){c=za(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,g){if("number"!==typeof g&&"boolean"!==typeof g)throw new TypeError('Cannot convert "'+Ma(g)+'" to '+this.name);return g},argPackAdvance:8,readValueFromPointer:Na(b,c),G:null})},c:function(a,b,c,d,g,f){var l=Sa(b,c);a=P(a);g=Ua(d,g);Ra(a,function(){Ya("Cannot call "+a+" due to unbound types",l)},b-1);Ga(l,function(h){var p=a,k=a;h=[h[0],null].concat(h.slice(1));
var m=g,q=h.length;2>q&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==h[1]&&!1,B=!1,n=1;n<h.length;++n)if(null!==h[n]&&void 0===h[n].G){B=!0;break}var Ha="void"!==h[0].name,H="",K="";for(n=0;n<q-2;++n)H+=(0!==n?", ":"")+"arg"+n,K+=(0!==n?", ":"")+"arg"+n+"Wired";k="return function "+Ba(k)+"("+H+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+k+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";
B&&(k+="var destructors = [];\n");var Ia=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[T,m,f,Pa,h[0],h[1]];x&&(k+="var thisWired = classParam.toWireType("+Ia+", this);\n");for(n=0;n<q-2;++n)k+="var arg"+n+"Wired = argType"+n+".toWireType("+Ia+", arg"+n+"); // "+h[n+2].name+"\n",H.push("argType"+n),m.push(h[n+2]);x&&(K="thisWired"+(0<K.length?", ":"")+K);k+=(Ha?"var rv = ":"")+"invoker(fn"+(0<K.length?", ":"")+K+");\n";if(B)k+="runDestructors(destructors);\n";
else for(n=x?1:2;n<h.length;++n)q=1===n?"thisWired":"arg"+(n-2)+"Wired",null!==h[n].G&&(k+=q+"_dtor("+q+"); // "+h[n].name+"\n",H.push(q+"_dtor"),m.push(h[n].G));Ha&&(k+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(k+"}\n");h=Oa(H).apply(null,m);n=b-1;if(!e.hasOwnProperty(p))throw new Fa("Replacing nonexistant public symbol");void 0!==e[p].F&&void 0!==n?e[p].F[n]=h:(e[p]=h,e[p].J=n);return[]})},b:function(a,b,c,d,g){function f(k){return k}b=P(b);-1===g&&(g=4294967295);var l=za(c);
if(0===d){var h=32-8*c;f=function(k){return k<<h>>>h}}var p=b.includes("unsigned");U(a,{name:b,fromWireType:f,toWireType:function(k,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+Ma(m)+'" to '+this.name);if(m<d||m>g)throw new TypeError('Passing a number "'+Ma(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+g+"]!");return p?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Za(b,l,0!==d),G:null})},a:function(a,
b,c){function d(f){f>>=2;var l=J;return new g(I,l[f+1],l[f])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{K:!0})},h:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var g=J[d>>2];if(c)for(var f=d+4,l=0;l<=g;++l){var h=d+4+l;if(l==g||0==D[h]){if(f){for(var p=f+(h-f),k=f;!(k>=p)&&D[k];)++k;f=da.decode(D.subarray(f,k))}else f="";if(void 0===
m)var m=f;else m+=String.fromCharCode(0),m+=f;f=h+1}}else{m=Array(g);for(l=0;l<g;++l)m[l]=String.fromCharCode(D[d+4+l]);m=m.join("")}X(d);return m},toWireType:function(d,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var f="string"===typeof g;f||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&f?function(){for(var k=0,m=0;m<g.length;++m){var q=g.charCodeAt(m);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|g.charCodeAt(++m)&
1023);127>=q?++k:k=2047>=q?k+2:65535>=q?k+3:k+4}return k}:function(){return g.length})(),h=fb(4+l+1);J[h>>2]=l;if(c&&f)ea(g,h+4,l+1);else if(f)for(f=0;f<l;++f){var p=g.charCodeAt(f);255<p&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));D[h+4+f]=p}else for(f=0;f<l;++f)D[h+4+f]=g[f];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:La,G:function(d){X(d)}})},f:function(a,b,c){c=P(c);if(2===b){var d=ha;var g=ia;var f=ja;var l=function(){return E};var h=1}else 4===
b&&(d=ka,g=la,f=ma,l=function(){return J},h=2);U(a,{name:c,fromWireType:function(p){for(var k=J[p>>2],m=l(),q,x=p+4,B=0;B<=k;++B){var n=p+4+B*b;if(B==k||0==m[n>>h])x=d(x,n-x),void 0===q?q=x:(q+=String.fromCharCode(0),q+=x),x=n+b}X(p);return q},toWireType:function(p,k){"string"!==typeof k&&T("Cannot pass non-string to C++ string type "+c);var m=f(k),q=fb(4+m+b);J[q>>2]=m>>h;g(k,q+4,m+b);null!==p&&p.push(X,q);return q},argPackAdvance:8,readValueFromPointer:La,G:function(p){X(p)}})},o:function(a,b){b=
P(b);U(a,{M:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:Ka,k:function(a){if(0===a)return W(ab());var b=$a[a];a=void 0===b?P(a):b;return W(ab()[a])},i:function(a){4<a&&(V[a].I+=1)},j:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var g=cb[b];if(!g){g="";for(var f=0;f<b;++f)g+=(0!==f?", ":"")+"arg"+f;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(f=0;f<b;++f)l+="var argType"+f+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+
f+'], "parameter '+f+'");\nvar arg'+f+" = argType"+f+".readValueFromPointer(args);\nargs += argType"+f+"['argPackAdvance'];\n";g=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+g+");\nreturn __emval_register(obj);\n}\n")))(bb,e,W);cb[b]=g}return g(a,c,d)},g:function(){A()},s:function(a,b,c){D.copyWithin(a,b,b+c)},e:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,
d);0<d%65536&&(d+=65536-d%65536);a:{try{C.grow(Math.min(2147483648,d)-I.byteLength+65535>>>16);qa();var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},u:function(){return 0},p:function(){},t:function(a,b,c,d){for(var g=0,f=0;f<c;f++){for(var l=G[b+8*f>>2],h=G[b+(8*f+4)>>2],p=0;p<h;p++){var k=D[l+p],m=db[a];if(0===k||10===k){for(k=0;m[k]&&!(NaN<=k);)++k;k=da.decode(m.subarray?m.subarray(0,k):new Uint8Array(m.slice(0,k)));(1===a?ba:y)(k);m.length=0}else m.push(k)}g+=h}G[d>>2]=g;return 0},r:function(){}};
(function(){function a(g){e.asm=g.exports;C=e.asm.w;qa();L=e.asm.C;sa.unshift(e.asm.x);M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==va&&(clearInterval(va),va=null),N&&(g=N,N=null,g()))}function b(g){a(g.instance)}function c(g){return xa().then(function(f){return WebAssembly.instantiate(f,d)}).then(g,function(f){y("failed to asynchronously prepare wasm: "+f);A(f)})}var d={a:gb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||O.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,d).then(b,function(f){y("wasm streaming compile failed: "+f);y("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.x).apply(null,arguments)};var fb=e._malloc=function(){return(fb=e._malloc=e.asm.y).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.z).apply(null,arguments)},Xa=e.___getTypeName=function(){return(Xa=e.___getTypeName=e.asm.A).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.B).apply(null,arguments)};
e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.D).apply(null,arguments)};var Z;N=function hb(){Z||ib();Z||(N=hb)};
function ib(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!ca)){ya(sa);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();ta.unshift(b)}ya(ta)}}if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ua();ya(ra);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=ib;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();ib();


  return Module.ready
}
);
})();
export default Module;