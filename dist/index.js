"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var path=_interopDefault(require("path")),child_process=require("child_process");function createCommonjsModule(e,r){return e(r={exports:{}},r.exports),r.exports}var semver=createCommonjsModule(function(e,r){r=e.exports=L;var t;t="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var n=256,o=Number.MAX_SAFE_INTEGER||9007199254740991,i=r.re=[],s=r.src=[],a=0,c=a++;s[c]="0|[1-9]\\d*";var p=a++;s[p]="[0-9]+";var u=a++;s[u]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var l=a++;s[l]="("+s[c]+")\\.("+s[c]+")\\.("+s[c]+")";var h=a++;s[h]="("+s[p]+")\\.("+s[p]+")\\.("+s[p]+")";var f=a++;s[f]="(?:"+s[c]+"|"+s[u]+")";var v=a++;s[v]="(?:"+s[p]+"|"+s[u]+")";var m=a++;s[m]="(?:-("+s[f]+"(?:\\."+s[f]+")*))";var g=a++;s[g]="(?:-?("+s[v]+"(?:\\."+s[v]+")*))";var w=a++;s[w]="[0-9A-Za-z-]+";var y=a++;s[y]="(?:\\+("+s[w]+"(?:\\."+s[w]+")*))";var d=a++,j="v?"+s[l]+s[m]+"?"+s[y]+"?";s[d]="^"+j+"$";var E="[v=\\s]*"+s[h]+s[g]+"?"+s[y]+"?",b=a++;s[b]="^"+E+"$";var $=a++;s[$]="((?:<|>)?=?)";var k=a++;s[k]=s[p]+"|x|X|\\*";var x=a++;s[x]=s[c]+"|x|X|\\*";var S=a++;s[S]="[v=\\s]*("+s[x]+")(?:\\.("+s[x]+")(?:\\.("+s[x]+")(?:"+s[m]+")?"+s[y]+"?)?)?";var R=a++;s[R]="[v=\\s]*("+s[k]+")(?:\\.("+s[k]+")(?:\\.("+s[k]+")(?:"+s[g]+")?"+s[y]+"?)?)?";var T=a++;s[T]="^"+s[$]+"\\s*"+s[S]+"$";var I=a++;s[I]="^"+s[$]+"\\s*"+s[R]+"$";var V=a++;s[V]="(?:~>?)";var _=a++;s[_]="(\\s*)"+s[V]+"\\s+",i[_]=new RegExp(s[_],"g");var A=a++;s[A]="^"+s[V]+s[S]+"$";var C=a++;s[C]="^"+s[V]+s[R]+"$";var M=a++;s[M]="(?:\\^)";var q=a++;s[q]="(\\s*)"+s[M]+"\\s+",i[q]=new RegExp(s[q],"g");var D=a++;s[D]="^"+s[M]+s[S]+"$";var N=a++;s[N]="^"+s[M]+s[R]+"$";var P=a++;s[P]="^"+s[$]+"\\s*("+E+")$|^$";var U=a++;s[U]="^"+s[$]+"\\s*("+j+")$|^$";var X=a++;s[X]="(\\s*)"+s[$]+"\\s*("+E+"|"+s[S]+")",i[X]=new RegExp(s[X],"g");var z=a++;s[z]="^\\s*("+s[S]+")\\s+-\\s+("+s[S]+")\\s*$";var G=a++;s[G]="^\\s*("+s[R]+")\\s+-\\s+("+s[R]+")\\s*$";var O=a++;s[O]="(<|>)?=?\\s*\\*";for(var Z=0;Z<a;Z++)t(Z,s[Z]),i[Z]||(i[Z]=new RegExp(s[Z]));r.parse=B;function B(e,r){if(e instanceof L)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(r?i[b]:i[d]).test(e))return null;try{return new L(e,r)}catch(e){return null}}r.valid=function(e,r){var t=B(e,r);return t?t.version:null};r.clean=function(e,r){var t=B(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null};r.SemVer=L;function L(e,r){if(e instanceof L){if(e.loose===r)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>n)throw new TypeError("version is longer than "+n+" characters");if(!(this instanceof L))return new L(e,r);t("SemVer",e,r),this.loose=r;var s=e.trim().match(r?i[b]:i[d]);if(!s)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<o)return r}return e}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}L.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},L.prototype.toString=function(){return this.version},L.prototype.compare=function(e){return t("SemVer.compare",this.version,this.loose,e),e instanceof L||(e=new L(e,this.loose)),this.compareMain(e)||this.comparePre(e)},L.prototype.compareMain=function(e){return e instanceof L||(e=new L(e,this.loose)),H(this.major,e.major)||H(this.minor,e.minor)||H(this.patch,e.patch)},L.prototype.comparePre=function(e){if(e instanceof L||(e=new L(e,this.loose)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var n=this.prerelease[r],o=e.prerelease[r];if(t("prerelease compare",r,n,o),void 0===n&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===n)return-1;if(n!==o)return H(n,o)}while(++r)},L.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new L(e,t).inc(r,n).version}catch(e){return null}};r.diff=function(e,r){if(W(e,r))return null;var t=B(e),n=B(r);if(t.prerelease.length||n.prerelease.length){for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return"pre"+o;return"prerelease"}for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return o};r.compareIdentifiers=H;var F=/^[0-9]+$/;function H(e,r){var t=F.test(e),n=F.test(r);return t&&n&&(e=+e,r=+r),t&&!n?-1:n&&!t?1:e<r?-1:e>r?1:0}r.rcompareIdentifiers=function(e,r){return H(r,e)};r.major=function(e,r){return new L(e,r).major};r.minor=function(e,r){return new L(e,r).minor};r.patch=function(e,r){return new L(e,r).patch};r.compare=J;function J(e,r,t){return new L(e,t).compare(new L(r,t))}r.compareLoose=function(e,r){return J(e,r,!0)};r.rcompare=function(e,r,t){return J(r,e,t)};r.sort=function(e,t){return e.sort(function(e,n){return r.compare(e,n,t)})};r.rsort=function(e,t){return e.sort(function(e,n){return r.rcompare(e,n,t)})};r.gt=K;function K(e,r,t){return J(e,r,t)>0}r.lt=Q;function Q(e,r,t){return J(e,r,t)<0}r.eq=W;function W(e,r,t){return 0===J(e,r,t)}r.neq=Y;function Y(e,r,t){return 0!==J(e,r,t)}r.gte=ee;function ee(e,r,t){return J(e,r,t)>=0}r.lte=re;function re(e,r,t){return J(e,r,t)<=0}r.cmp=te;function te(e,r,t,n){var o;switch(r){case"===":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e===t;break;case"!==":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e!==t;break;case"":case"=":case"==":o=W(e,t,n);break;case"!=":o=Y(e,t,n);break;case">":o=K(e,t,n);break;case">=":o=ee(e,t,n);break;case"<":o=Q(e,t,n);break;case"<=":o=re(e,t,n);break;default:throw new TypeError("Invalid operator: "+r)}return o}r.Comparator=ne;function ne(e,r){if(e instanceof ne){if(e.loose===r)return e;e=e.value}if(!(this instanceof ne))return new ne(e,r);t("comparator",e,r),this.loose=r,this.parse(e),this.semver===oe?this.value="":this.value=this.operator+this.semver.version,t("comp",this)}var oe={};ne.prototype.parse=function(e){var r=this.loose?i[P]:i[U],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new L(t[2],this.loose):this.semver=oe},ne.prototype.toString=function(){return this.value},ne.prototype.test=function(e){return t("Comparator.test",e,this.loose),this.semver===oe||("string"==typeof e&&(e=new L(e,this.loose)),te(e,this.operator,this.semver,this.loose))},ne.prototype.intersects=function(e,r){if(!(e instanceof ne))throw new TypeError("a Comparator is required");var t;if(""===this.operator)return t=new ie(e.value,r),pe(this.value,t,r);if(""===e.operator)return t=new ie(this.value,r),pe(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=te(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=te(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||c},r.Range=ie;function ie(e,r){if(e instanceof ie)return e.loose===r?e:new ie(e.raw,r);if(e instanceof ne)return new ie(e.value,r);if(!(this instanceof ie))return new ie(e,r);if(this.loose=r,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}ie.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},ie.prototype.toString=function(){return this.range},ie.prototype.parseRange=function(e){var r=this.loose;e=e.trim(),t("range",e,r);var n=r?i[G]:i[z];e=e.replace(n,ae),t("hyphen replace",e),e=e.replace(i[X],"$1$2$3"),t("comparator trim",e,i[X]),e=(e=(e=e.replace(i[_],"$1~")).replace(i[q],"$1^")).split(/\s+/).join(" ");var o=r?i[P]:i[U],s=e.split(" ").map(function(e){return function(e,r){return t("comp",e),u=e,l=r,e=u.trim().split(/\s+/).map(function(e){return function(e,r){t("caret",e,r);var n=r?i[N]:i[D];return e.replace(n,function(r,n,o,i,s){t("caret",e,r,n,o,i,s);var a;return se(n)?a="":se(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":se(i)?a="0"===n?">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":">="+n+"."+o+".0 <"+(+n+1)+".0.0":s?(t("replaceCaret pr",s),"-"!==s.charAt(0)&&(s="-"+s),a="0"===n?"0"===o?">="+n+"."+o+"."+i+s+" <"+n+"."+o+"."+(+i+1):">="+n+"."+o+"."+i+s+" <"+n+"."+(+o+1)+".0":">="+n+"."+o+"."+i+s+" <"+(+n+1)+".0.0"):(t("no pr"),a="0"===n?"0"===o?">="+n+"."+o+"."+i+" <"+n+"."+o+"."+(+i+1):">="+n+"."+o+"."+i+" <"+n+"."+(+o+1)+".0":">="+n+"."+o+"."+i+" <"+(+n+1)+".0.0"),t("caret return",a),a})}(e,l)}).join(" "),t("caret",e),c=e,p=r,e=c.trim().split(/\s+/).map(function(e){return function(e,r){var n=r?i[C]:i[A];return e.replace(n,function(r,n,o,i,s){t("tilde",e,r,n,o,i,s);var a;return se(n)?a="":se(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":se(i)?a=">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":s?(t("replaceTilde pr",s),"-"!==s.charAt(0)&&(s="-"+s),a=">="+n+"."+o+"."+i+s+" <"+n+"."+(+o+1)+".0"):a=">="+n+"."+o+"."+i+" <"+n+"."+(+o+1)+".0",t("tilde return",a),a})}(e,p)}).join(" "),t("tildes",e),s=e,a=r,t("replaceXRanges",s,a),e=s.split(/\s+/).map(function(e){return function(e,r){e=e.trim();var n=r?i[I]:i[T];return e.replace(n,function(r,n,o,i,s,a){t("xRange",e,r,n,o,i,s,a);var c=se(o),p=c||se(i),u=p||se(s),l=u;return"="===n&&l&&(n=""),c?r=">"===n||"<"===n?"<0.0.0":"*":n&&l?(p&&(i=0),u&&(s=0),">"===n?(n=">=",p?(o=+o+1,i=0,s=0):u&&(i=+i+1,s=0)):"<="===n&&(n="<",p?o=+o+1:i=+i+1),r=n+o+"."+i+"."+s):p?r=">="+o+".0.0 <"+(+o+1)+".0.0":u&&(r=">="+o+"."+i+".0 <"+o+"."+(+i+1)+".0"),t("xRange return",r),r})}(e,a)}).join(" "),t("xrange",e),n=e,o=r,t("replaceStars",n,o),e=n.trim().replace(i[O],""),t("stars",e),e;var n,o;var s,a;var c,p;var u,l}(e,r)}).join(" ").split(/\s+/);return this.loose&&(s=s.filter(function(e){return!!e.match(o)})),s=s.map(function(e){return new ne(e,r)})},ie.prototype.intersects=function(e,r){if(!(e instanceof ie))throw new TypeError("a Range is required");return this.set.some(function(t){return t.every(function(t){return e.set.some(function(e){return e.every(function(e){return t.intersects(e,r)})})})})},r.toComparators=function(e,r){return new ie(e,r).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})};function se(e){return!e||"x"===e.toLowerCase()||"*"===e}function ae(e,r,t,n,o,i,s,a,c,p,u,l,h){return((r=se(t)?"":se(n)?">="+t+".0.0":se(o)?">="+t+"."+n+".0":">="+r)+" "+(a=se(c)?"":se(p)?"<"+(+c+1)+".0.0":se(u)?"<"+c+"."+(+p+1)+".0":l?"<="+c+"."+p+"."+u+"-"+l:"<="+a)).trim()}ie.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new L(e,this.loose));for(var r=0;r<this.set.length;r++)if(ce(this.set[r],e))return!0;return!1};function ce(e,r){for(var n=0;n<e.length;n++)if(!e[n].test(r))return!1;if(r.prerelease.length){for(n=0;n<e.length;n++)if(t(e[n].semver),e[n].semver!==oe&&e[n].semver.prerelease.length>0){var o=e[n].semver;if(o.major===r.major&&o.minor===r.minor&&o.patch===r.patch)return!0}return!1}return!0}r.satisfies=pe;function pe(e,r,t){try{r=new ie(r,t)}catch(e){return!1}return r.test(e)}r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ie(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new L(n=e,t)))}),n};r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ie(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new L(n=e,t)))}),n};r.validRange=function(e,r){try{return new ie(e,r).range||"*"}catch(e){return null}};r.ltr=function(e,r,t){return ue(e,r,"<",t)};r.gtr=function(e,r,t){return ue(e,r,">",t)};r.outside=ue;function ue(e,r,t,n){e=new L(e,n),r=new ie(r,n);var o,i,s,a,c;switch(t){case">":o=K,i=re,s=Q,a=">",c=">=";break;case"<":o=Q,i=ee,s=K,a="<",c="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(pe(e,r,n))return!1;for(var p=0;p<r.set.length;++p){var u=null,l=null;if(r.set[p].forEach(function(e){e.semver===oe&&(e=new ne(">=0.0.0")),u=u||e,l=l||e,o(e.semver,u.semver,n)?u=e:s(e.semver,l.semver,n)&&(l=e)}),u.operator===a||u.operator===c)return!1;if((!l.operator||l.operator===a)&&i(e,l.semver))return!1;if(l.operator===c&&s(e,l.semver))return!1}return!0}r.prerelease=function(e,r){var t=B(e,r);return t&&t.prerelease.length?t.prerelease:null};r.intersects=function(e,r,t){return e=new ie(e,t),r=new ie(r,t),e.intersects(r)}});const checkVersion=(e,r)=>{let t=null;const n=path.join(process.cwd(),"package.json");try{t=require(n)}catch(e){console.log(`Unable to find ${n}!  😱`),console.log(""),console.log("Please ensure that this script is executed in the same directory."),console.log(""),process.exit(1)}let o=null;try{o=t.engines[e]}catch(r){console.log(`There is no engine named ${e} specified in package.json!  😱`),console.log(""),process.exit(1)}let i=null;try{i=child_process.execSync(r).toString().replace("v","").trim()}catch(r){console.log(`Unable to get ${e} version!  😱`),console.log(""),process.exit(1)}if(!semver.satisfies(i,o)){console.log(`Expected ${e} version to match ${o}, but got ${i}.  😱`),console.log(""),console.log("Please follow Skyscanner's node environment guide (see https://github.com/Skyscanner/ensure-node-env/blob/master/README.md#guide)."),console.log(""),process.exit(1)}};console.log("Checking node & npm versions..."),console.log(""),checkVersion("node","node --version"),checkVersion("npm","npm -g --version"),console.log("All good.  👍"),console.log("");
