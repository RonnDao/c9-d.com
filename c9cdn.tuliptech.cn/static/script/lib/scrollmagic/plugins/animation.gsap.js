!function(c,g){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],g):"object"==typeof exports?(require("gsap"),g(require("scrollmagic"),TweenMax,TimelineMax)):g(c.ScrollMagic||c.jQuery&&c.jQuery.ScrollMagic,c.TweenMax||c.TweenLite,c.TimelineMax||c.TimelineLite)}(this,function(c,g,w){"use strict";var h="animation.gsap",T=window.console||{},y=Function.prototype.bind.call(T.error||T.log||function(){},T);c||y("("+h+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),g||y("("+h+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),c.Scene.addOption("tweenChanges",!1,function(c){return!!c}),c.Scene.extend(function(){var c,T=this,y=function(){T._log&&(Array.prototype.splice.call(arguments,1,0,"("+h+")","->"),T._log.apply(this,arguments))};T.on("progress.plugin_gsap",function(){M()}),T.on("destroy.plugin_gsap",function(e){T.removeTween(e.reset)});var M=function(){if(c){var g=T.progress(),w=T.state();c.repeat&&-1===c.repeat()?"DURING"===w&&c.paused()?c.play():"DURING"===w||c.paused()||c.pause():g!=c.progress()&&(0===T.duration()?g>0?c.play():c.reverse():T.tweenChanges()&&c.tweenTo?c.tweenTo(g*c.duration()):c.progress(g).pause())}};T.setTween=function(h,R,b){var S;arguments.length>1&&(arguments.length<3&&(b=R,R=1),h=g.to(h,R,b));try{S=w?new w({smoothChildTiming:!0}).add(h):h,S.pause()}catch(e){return y(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),T}if(c&&T.removeTween(),c=S,h.repeat&&-1===h.repeat()&&(c.repeat(-1),c.yoyo(h.yoyo())),T.tweenChanges()&&!c.tweenTo&&y(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),c&&T.controller()&&T.triggerElement()&&T.loglevel()>=2){var N=g.getTweensOf(T.triggerElement()),j=T.controller().info("vertical");N.forEach(function(c){var g=c.vars.css||c.vars,w=j?void 0!==g.top||void 0!==g.bottom:void 0!==g.left||void 0!==g.right;return w?(y(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}if(parseFloat(TweenLite.version)>=1.14)for(var k,O,C=c.getChildren?c.getChildren(!0,!0,!1):[c],G=function(){y(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},i=0;i<C.length;i++)k=C[i],O!==G&&(O=k.vars.onOverwrite,k.vars.onOverwrite=function(){O&&O.apply(this,arguments),G.apply(this,arguments)});return y(3,"added tween"),M(),T},T.removeTween=function(g){return c&&(g&&c.progress(0).pause(),c.kill(),c=void 0,y(3,"removed tween (reset: "+(g?"true":"false")+")")),T}})});