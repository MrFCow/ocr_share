(this.webpackJsonpocr_share=this.webpackJsonpocr_share||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),l=n(2),s=n.n(l),i=n(14),u=n(16),d=n(4),m=n(30),h=n(9),g=n(29),b=Object(h.a)({root:{width:320,height:320,display:"flex",justifyContent:"center",alignItems:"center"},box:{backgroundColor:"rgba(0,155,0,0.5)"},resultSpan:{marginTop:5}}),f=Object(g.createWorker)({logger:function(e){return console.log(e)}});function p(e){var t=b(),n=Object(a.useState)({startX:0,startY:0,endX:0,endY:0}),c=Object(d.a)(n,2),o=c[0],l=c[1],h=Object(a.useState)(null),g=Object(d.a)(h,2),p=g[0],j=g[1],v=Object(m.a)((function(e){e.down;var t=Object(d.a)(e.movement,2),n=t[0],a=t[1],r=Object(d.a)(e.offset,2),c=(r[0],r[1],Object(d.a)(e.initial,2)),s=c[0],i=c[1];l(Object(u.a)(Object(u.a)({},o),{},{startX:s,startY:i,endX:s+n,endY:i+a})),j(null)}),{delay:!0}),O=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.load();case 2:return e.next=4,f.loadLanguage("eng");case 4:return e.next=6,f.initialize("eng");case 6:return e.next=8,f.recognize(t,{rectangle:{top:Math.min(n.startY,n.endY),left:Math.min(n.startX,n.endX),width:Math.abs(n.endX-n.startX),height:Math.abs(n.endY-n.startY)}});case 8:return a=e.sent,r=a.data.text,console.log("OCR text: ".concat(r)),j(r),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:t.root},v(),{style:{touchAction:"none"}}),(o.startX-o.endX)*(o.startY-o.endY)>0?r.a.createElement("div",{className:t.box,style:{position:"fixed",width:Math.abs(o.startX-o.endX),height:Math.abs(o.startY-o.endY),left:Math.min(o.startX,o.endX),top:Math.min(o.startY,o.endY)},onClick:function(t){e.img?O(e.img,o):console.log("image not available")}}):null),p?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:t.resultSpan},"Detected Text: ",p,r.a.createElement("button",{onClick:function(e){Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share({text:p});case 3:console.log("Data was shared successfully"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Share failed:",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},"Share"))):r.a.createElement("span",{className:t.resultSpan},"No Detected Text!"))}var j=n(31),v=n.n(j),O=Object(h.a)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},span:{marginTop:30}}),x={width:320,height:320,facingMode:"environment"};function E(e){var t=O(),n=Object(a.useState)(null),c=Object(d.a)(n,2),o=c[0],l=c[1],s=Object(a.useRef)(null),i=Object(a.useCallback)((function(){var e=s.current.getScreenshot();l(e)}),[s]);return r.a.createElement("div",{className:t.root},o?r.a.createElement("div",{style:{width:320,height:320,background:"url(".concat(o,")")}},r.a.cloneElement(e.children,{img:o})):r.a.createElement(v.a,{audio:!1,height:320,ref:s,screenshotFormat:"image/jpeg",width:320,videoConstraints:x}),r.a.createElement("span",{className:t.span},r.a.createElement("button",{onClick:i},"Capture photo"),r.a.createElement("button",{onClick:function(){return l(null)}},"Clear")))}var C=function(){return r.a.createElement(E,null,r.a.createElement(p,null))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),w()}},[[72,1,2]]]);
//# sourceMappingURL=main.d403b344.chunk.js.map