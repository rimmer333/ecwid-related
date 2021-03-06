/*Useful General Functons for Ecwid*/

/*http://www.bennadel.com/index.cfm?dax=blog:1520.view
Let's me look for changes to the hash easily.
*/
(function($){
	// Default to the current location.
        //var strLocation = window.location.href;
	//var strHash = window.location.hash;
	var strPrevLocation = "";
	var strPrevHash = "";
        var strLocation = "";
	var strHash = "";

	// This is how often we will be checkint for
	// changes on the location.
	var intIntervalTime = 100;

	// This method removes the pound from the hash.
	var fnCleanHash = function( strHash ){
		return(
		strHash.substring( 1, strHash.length )
		);
	}

	// This will be the method that we use to check
	// changes in the window location.
	var fnCheckLocation = function(){
		// Check to see if the location has changed.
		if (strLocation != window.location.href){

			// Store the new and previous locations.
			strPrevLocation = strLocation;
			strPrevHash = strHash;
			strLocation = window.location.href;
			strHash = window.location.hash;

			// The location has changed. Trigger a
			// change event on the location object,
			// passing in the current and previous
			// location values.
			$( window.location ).trigger(
				"change",
				{
					currentHref: strLocation,
					currentHash: fnCleanHash( strHash ),
					previousHref: strPrevLocation,
					previousHash: fnCleanHash( strPrevHash )
				}
				);

		}
	}

	// Set an interval to check the location changes.
	setInterval( fnCheckLocation, intIntervalTime );
	}
)( jQuery );


function getElementsByClassName(clsName) {
    var elem, cls;
    var arr = [];
    var elems = document.getElementsByTagName("*");

    for (var i = 0; (elem = elems[i]); i++) {
        if (elem.className == clsName)
            arr[arr.length] = elem;
    }
    return arr;
}

/*
 * jQuery BBQ: Back Button & Query Library - v1.0.3 - 12/2/2009
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,c){var g,m=c.location,i=Array.prototype.slice,F=decodeURIComponent,a=$.param,o,d,r,p=$.bbq=$.bbq||{},q,e,A,b="hashchange",w="querystring",z="fragment",y="elemUrlAttr",h="href",E="src",D=$.browser,n=D.msie&&D.version<8,l="on"+b in c&&!n,s=/^.*\?|#.*$/g,B=/^.*\#/,u={};function t(G){return typeof G==="string"}function x(H){var G=i.call(arguments,1);return function(){return H.apply(this,G.concat(i.call(arguments)))}}function j(G){return G.replace(/^[^#]*#?(.*)$/,"$1")}function k(G){return G.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,O,G,I,L){var N,M,K,P,J;if(I!==g){K=G.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(L===2&&t(I)){M=I.replace(H?B:s,"")}else{P=d(K[2]);I=t(I)?d[H?z:w](I):I;M=L===2?I:L===1?$.extend({},I,P):$.extend({},P,I);M=a(M)}N=K[1]+(H?"#":M||!K[1]?"?":"")+M+J}else{N=O(G!==g?G:m[h])}return N}a[w]=x(f,0,k);a[z]=o=x(f,1,j);$.deparam=d=function(J,H){var I={},G={"true":!0,"false":!1,"null":null};$.each(J.replace(/\+/g," ").split("&"),function(N,P){var M=P.split("="),Q=F(M[0]),L,R=I,O=0,S=Q.split("]["),K=S.length-1;if(/\[/.test(S[0])&&/\]$/.test(S[K])){S[K]=S[K].replace(/\]$/,"");S=S.shift().split("[").concat(S);K=S.length-1}else{K=0}if(M.length===2){L=F(M[1]);if(H){L=L&&!isNaN(L)?+L:L==="undefined"?g:G[L]!==g?G[L]:L}if(K){for(;O<=K;O++){Q=S[O]===""?R.length:S[O];R=R[Q]=O<K?R[Q]||(S[O+1]&&isNaN(S[O+1])?{}:[]):L}}else{if($.isArray(I[Q])){I[Q].push(L)}else{if(I[Q]!==g){I[Q]=[I[Q],L]}else{I[Q]=L}}}}else{if(Q){I[Q]=H?g:""}}});return I};function v(I,H,G){if(H===g||typeof H==="boolean"){G=H;H=a[I?z:w]()}else{H=t(H)?H.replace(I?B:s,""):H}return d(H,G)}d[w]=x(v,0);d[z]=r=x(v,1);$[y]||($[y]=function(G){return $.extend(u,G)})({a:h,base:h,iframe:E,img:E,input:E,form:"action",link:h,script:E});e=$[y];function C(J,G,I,H){if(!t(I)&&typeof I!=="object"){H=I;I=G;G=g}return this.each(function(){var M=$(this),K=G||e()[(this.nodeName||"").toLowerCase()]||"",L=K&&M.attr(K)||"";M.attr(K,a[J](L,I,H))})}$.fn[w]=x(C,w);$.fn[z]=x(C,z);p.pushState=q=function(J,I){if(t(J)&&/^#/.test(J)&&I===g){I=2}var H=J!==g,G=o(m[h],H?J:{},H?I:2);m[h]=G+(/#/.test(G)?"":"#")};p.getState=function(H,G){return H===g||typeof H==="boolean"?r(H):r(G)[H]};p.pollDelay=100;$.event.special[b]={setup:function(){if(l){return false}A.start()},teardown:function(){if(l){return false}A.stop()},add:function(G,I,H){return function(K){var J=K[z]=o();K.getState=function(M,L){return M===g||typeof M==="boolean"?d(J,M):d(J,L)[M]};G.apply(this,arguments)}}};A=(function(){var H={},L,G,I,K;function J(){I=K=function(M){return M};if(n){G=$('<iframe src="javascript:0"/>').hide().appendTo("body")[0].contentWindow;K=function(){return j(G.document.location[h])};I=function(O,M){if(O!==M){var N=G.document;N.open().close();N.location.hash="#"+O}};I(o())}}H.start=function(){if(L){return}var N=o();I||J();(function M(){var P=o(),O=K(N);if(P!==N){I(N=P,O);$(c).trigger(b)}else{if(O!==N){q("#"+O)}}L=setTimeout(M,p.pollDelay)})()};H.stop=function(){if(!G){L&&clearTimeout(L);L=0}};return H})()})(jQuery,this);

/*ecwid:category=0&mode=category&offset=0&sort=normal*/

function getPageType(hash) {
   var hashObj = $j.deparam.fragment(hash);
   if (hashObj.mode) { return hashObj.mode; } else { return false; }
} 

function getCategory(hash) {
   var hashObj = $j.deparam.fragment(hash);
   if (hashObj.category) { return hashObj.category; } else { return false; }
}

function getProduct(hash) {
   var hashObj = $j.deparam.fragment(hash);
   if (hashObj.product) { return hashObj.product; } else { return false; }
}
