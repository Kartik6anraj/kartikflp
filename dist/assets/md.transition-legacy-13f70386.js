System.register(["./index-legacy-136b9df5.js"],function(e,n){"use strict";var t,i;return{setters:[e=>{t=e.m,i=e.l}],execute:function(){e("mdTransitionAnimation",(e,n)=>{var o,r,a;const l="back"===n.direction,s=n.enteringEl,d=n.leavingEl,c=t(s),u=c.querySelector("ion-toolbar"),m=i();if(m.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),l?m.duration((null!==(o=n.duration)&&void 0!==o?o:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):m.duration((null!==(r=n.duration)&&void 0!==r?r:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),u){const e=i();e.addElement(u),m.addAnimation(e)}if(d&&l){m.duration((null!==(a=n.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=i();e.addElement(t(d)).onFinish(n=>{1===n&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),m.addAnimation(e)}return m})}}});