window.navClickFlag = null, window.colorWhite = !1, window.disc = [], function() {
	var c = $("#navBox"),
		w = $("#navMask");
	if (c) {
		for (var h = Snap("#svg"), b = $("#svg"), g = !1, l = 1, y = !1, k = 150, i = 0; 3 > i; i++) for (var E = 0; 3 > E; E++)!
		function(i, c) {
			var x = 6 * i,
				w = 6 * c;
			disc[l] = h.rect(x, w, 2, 2, 2, 2).attr(6 == w ? {
				fill: "#6e6e6e",
				"class": "rect-mid",
				click: function() {
					console.log(this)
				}
			} : {
				fill: "#6e6e6e"
			}), l++
		}(i, E); {
			$(".rect-mid")
		}
		b.hover(function() {
			y || (disc.forEach(function(c, w) {
				switch (w) {
				case 2:
					c.animate({
						x: -4
					}, k);
					break;
				case 5:
					c.animate({
						x: 2
					}, k);
					break;
				case 8:
					c.animate({
						x: 8
					}, k)
				}
			}), window.disableScreenMove = !1)
		}, function() {
			window.disableScreenMove = !0, y || disc.forEach(function(c, w) {
				switch (w) {
				case 2:
					c.animate({
						x: 0
					}, k);
					break;
				case 5:
					c.animate({
						x: 6
					}, k);
					break;
				case 8:
					c.animate({
						x: 12
					}, k)
				}
			})
		}), window.disableEvent = function(e) {
			e.stopPropagation(), e.preventDefault()
		}, window.anyClickFlag = !0; {
			$("#fullpage")
		}
		b.click(function(e) {
			return anyClickFlag ? (anyClickFlag = !1, g ? (y = !1, g = !1, disc.forEach(function(c, w) {
				switch (c.attr(colorWhite ? {
					fill: "#cfcfcf"
				} : {
					fill: "#6e6e6e"
				}), w) {
				case 2:
					c.animate({
						x: 0,
						y: 6
					}, k);
					break;
				case 4:
					c.animate({
						x: 6,
						y: 0
					}, k);
					break;
				case 5:
					c.animate({
						x: 6,
						y: 6
					}, k);
					break;
				case 6:
					c.animate({
						x: 6,
						y: 12
					}, k);
					break;
				case 8:
					c.animate({
						x: 12,
						y: 6
					}, k)
				}
			}), document.removeEventListener("mousemove", disableEvent, !0), document.removeEventListener("mousewheel", disableEvent, !0), window.disableScreenMove = !0, $("html,body").css({
				overflow: "visible"
			}), $(".main").animate({
				left: "0"
			}, 200), $.fn.fullpage && $.fn.fullpage.setAllowScrolling(!0), w.fadeOut(500), c.removeClass("slideInRight"), c.addClass("animated slideOutRight")) : (y = !0, g = !0, disc.forEach(function(c, w) {
				switch (window.setTimeout(function() {
					c.attr({
						fill: "#cfcfcf"
					})
				}, 300), w) {
				case 2:
					c.animate({
						x: 3,
						y: 9
					}, k);
					break;
				case 4:
					c.animate({
						x: 3,
						y: 3
					}, k);
					break;
				case 5:
					c.animate({
						x: 6,
						y: 6
					}, k);
					break;
				case 6:
					c.animate({
						x: 9,
						y: 9
					}, k);
					break;
				case 8:
					c.animate({
						x: 9,
						y: 3
					}, k)
				}
			}), document.addEventListener("mousemove", disableEvent, !0), document.addEventListener("mousewheel", disableEvent, !0), window.disableScreenMove = !1, $("html,body").css({
				overflow: "hidden"
			}), $(".main").animate({
				left: "-6em"
			}, 700), $.fn.fullpage && $.fn.fullpage.setAllowScrolling(!1), w.fadeIn(500), c.removeClass("slideOutRight"), c.show().addClass("animated slideInRight")), setTimeout(function() {
				anyClickFlag = !0
			}, 500), e.stopPropagation(), void e.preventDefault()) : !1
		}), document.documentElement.clientWidth > 768 && c.find("li").hover(function() {
			var w = $(this),
				h = (c.find(".nav-line"), c.find(".nav-intro"), w.find(".nav-line")),
				b = w.find(".nav-intro");
			w.hasClass("active") || (TweenMax.fromTo(h, .2, {
				width: "0%"
			}, {
				width: "100%"
			}), TweenMax.staggerFromTo(b, .2, {
				opacity: 0
			}, {
				opacity: 1,
				delay: .1,
				onComplete: function() {}
			}), c.find("li").removeClass("hover"), w.addClass("hover"))
		}, function() {
			var w = ($(this), c.find("li").not(".active").find(".nav-line")),
				h = c.find("li").not(".active").find(".nav-intro");
			c.find("li").removeClass("hover"), TweenMax.to(w, 0, {
				width: "0%"
			}), TweenMax.to(h, 0, {
				opacity: 0
			})
		})
	}
}(), function() {
	$.fn.extend({
		returnTop: function() {
			return this.each(function() {
				var c = $(this);
				c.bind("click", function() {
					$("body,html").animate({
						scrollTop: 0
					}, 1e3)
				})
			}), this
		}
	})
}(), function() {
	var lk = 'http://'+window.location.host+'/static/imgs/logo-6-bg.png';
	
	navType && $("#navBox").find("li").eq(navType).addClass("active"), $("#scrollTop").returnTop(), $(".nav-share-w,.f-s-w,.share-weixin").click(function(e) {
		$(".img-weixin-box").show(), $("html,body").css({
			overflow: "hidden"
		}), document.addEventListener("mousemove", disableEvent, !0), document.addEventListener("mousewheel", disableEvent, !0), window.disableScreenMove = !1, e.stopPropagation(), e.preventDefault()
	}), $(".img-weixin-close,.img-weixin-box").click(function(e) {
		$(".img-weixin-box").hide(), $("html,body").css({
			overflow: "auto"
		}), document.removeEventListener("mousemove", disableEvent, !0), document.removeEventListener("mousewheel", disableEvent, !0), window.disableScreenMove = !0, e.stopPropagation(), e.preventDefault()
	})
	
	//QQ好友
	$(".nav-share-b").click(function(){
		//window.location.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=407314270";
		window.open('tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=407314270');
	})
	
	//分享QQ空间
	$(".nav-share-d").click(function(){
		window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+document.location.href+'?sharesource=qzone&title='+document.title+'&pics='+lk+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content'));
		//window.location.href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&sharesource=qzone&title="+document.title+"&summary="+document.querySelector('meta[name="description"]').getAttribute('content'));
	})
	
	//分享新浪微博
	$(".nav-share-x").click(function(){
		window.open('http://service.weibo.com/share/share.php?url='+document.location.href+'&sharesource=weibo&title='+document.title+'&pic='+lk+'&appkey=3435404115');
		//window.open('http://service.weibo.com/share/share.php?url='+document.location.href+'?sharesource=weibo&title='+ftit+'&pic='+lk+'&appkey=2706825840');
	})
}();