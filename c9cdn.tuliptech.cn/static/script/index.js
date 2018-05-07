window.mouseWheelFlag = null;
window.curIndex = 1;

var pageInit = function () {

    /*---第一屏logo动画---*/
    var controller = new ScrollMagic.Controller();
    var twLogo1 = TweenMax.to('.panel-logo-1', 1, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene1 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-1 .t-center',
        duration: $(window).height()
    }).setTween(twLogo1).addTo(controller);


    /*---第二屏logo动画---*/
    var twLogo2 = TweenMax.fromTo('.panel-logo-2', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene2 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-1 .t-center',
        duration: $(window).height() * 2
    }).setTween(twLogo2).addTo(controller);


    /*---第3屏logo动画---*/
    var twLogo3 = TweenMax.fromTo('.panel-logo-3', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene3 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-2 .t-center',
        duration: $(window).height() * 2
    }).setTween(twLogo3).addTo(controller);


    /*---第4屏logo动画---*/
    var twLogo4 = TweenMax.fromTo('.panel-logo-4', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene4 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-3 .t-center',
        duration: $(window).height() * 2
    }).setTween(twLogo4).addTo(controller);


    /*---第5屏logo动画---*/
    var twLogo5 = TweenMax.fromTo('.panel-logo-5', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene5 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-4 .t-center',
        duration: $(window).height() * 2
    }).setTween(twLogo5).addTo(controller);

    /*---第5屏logo动画---*/
    var twLogo6 = TweenMax.fromTo('.panel-logo-6', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {
        y: $(window).height(),
        ease: Linear.easeNone
    });

    var logoScene6 = new ScrollMagic.Scene({
        triggerElement: '.m-section-panel-5 .t-center',
        duration: $(window).height() * 2
    }).setTween(twLogo6).addTo(controller);


    //屏幕缩放，重置高度
    var screenHei = document.body.clientHeight;
    var screenWid = document.body.clientWidth;

    window.resizeTimeOut = null;
    $(window).on('resize', function (e) {
        logoScene1.duration($(window).height());
        logoScene3.duration($(window).height() * 2);
        logoScene4.duration($(window).height() * 2);
        logoScene5.duration($(window).height() * 2);
        logoScene6.duration($(window).height() * 2);
        logoScene2.duration($(window).height() * 2);

        if (resizeTimeOut != null) clearTimeout(resizeTimeOut);
        resizeTimeOut = setTimeout(function () {
            if (document.body.clientWidth <= 768) {
                document.addEventListener("mousemove", disableEvent, true);
                document.addEventListener("mousewheel", disableEvent, true);
                twLogo1.pause();
                twLogo2.pause();
                twLogo3.pause();
                twLogo4.pause();
                twLogo5.pause();
                twLogo6.pause();

            } else {
                document.removeEventListener("mousemove", disableEvent, true);
                document.removeEventListener("mousewheel", disableEvent, true);
            }
        }, 200)
    });

    //鼠标移动当前屏幕移动
    var $page = $("#fullpage");
    var mouseTimeOut = null;
    var baseNum = 60;
    window.disableScreenMove = true;
    window.curTop = 0;
    function aniMousemove(time) {
        requestAnimationFrame(aniMousemove);
        var $active = $page.find(".active");
        TweenMax.to($active.get(0), 1, {
            y: curTop
        });

    }

    requestAnimationFrame(aniMousemove);
    window.onmousemove = function (e) {

        var y = e.clientY;
        var screenHei = $(window).height();
        var by = screenHei - baseNum;
        var $active = $page.find(".active");
        if (!disableScreenMove) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
        if (curIndex == 1) {
            TweenMax.to($("#vedio"), 0, {
                opacity: 1
            });

        }
        else {
            TweenMax.to($("#vedio"), 0, {
                opacity: 0
            });
        }

        switch (curIndex) {
            case 1:
            case 3:
            case 5:
                $("body").css("backgroundColor", "#1f1f1f");
                break;
            case 2:
            case 4:
            case 6:
                $("body").css("backgroundColor", "#f5f5f5");
                break;
        }

        if (y <= baseNum) {
            curTop = baseNum - y;
            twLogo1.play();
        }
        else if (y > screenHei - baseNum) {
            if (curIndex == 6) return false;
            curTop = -(baseNum - (screenHei - y));
            twLogo1.pause();
        }
        else {
            curTop = 0;
            twLogo1.play();
        }
    };


    //全屏切换&加载完成的动画
    var mDirection = false;
    window.moveEnd = false;
    $page.fullpage({
        scrollBar: true,
        autoScrolling: true,
        fitToSection: true,
        scrollingSpeed: 800,
        continuousVertical: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        afterLoad: function (anchorLink, index, b, c) {
            var $dom = $page.find(".active"),
                $title = $dom.find(".panel-title"),
                $sloganImg = $dom.find(".slogan-img"),
                $sloganTxt = $dom.find(".slogan-txt"),
                $line = $dom.find(".panel-line"),
                lens = "100px",
                sOpacity = 1,
                eOpacity = 0,
                a, b, c;

            //全局设置当前的屏幕的位置
            curIndex = index;


            /*--修改菜单的颜色--*/
            switch (index) {
                case 1:
                case 3:
                case 5:
                    if (disc) {
                        disc.forEach(function (item, index) {
                            item.attr({
                                fill: "#6e6e6e"
                            });
                        })
                    }
                    break;

                case 2:
                case 4:
                case 6:
                    if (disc) {
                        disc.forEach(function (item, index) {
                            item.attr({
                                fill: "#cccccc"
                            });
                        })
                    }
                    break;

            }


            if (!mDirection) {
                lens = "200px";
                a = 0.2;
                b = 0.5;
                c = 0.6;
            }
            else {
                lens = "-200px";
                c = 0.6;
                b = 0.5;
                a = 0.2;
            }


            TweenMax.fromTo($title, 0.8, {
                z: 0, opacity: eOpacity, y: lens
            }, {
                z: 0, opacity: sOpacity, y: 0, yoyo: true, ease: Expo.easeOut, delay: a
            });
            TweenMax.staggerFromTo($sloganImg, 0.7, {
                z: 0, opacity: eOpacity, y: lens
            }, {
                z: 0, opacity: sOpacity, y: 0, yoyo: true, ease: Expo.easeOut, delay: b
            });
            TweenMax.staggerFromTo($sloganTxt, 0.7, {
                z: 0, opacity: eOpacity, y: lens
            }, {
                z: 0, opacity: sOpacity, y: 0, yoyo: true, ease: Expo.easeOut, delay: c
            });
        },
        onLeave: function (index, nextIndex, direction) {

            var $dom = $page.find(".section"),
                $title = $dom.find(".panel-title"),
                $sloganImg = $dom.find(".slogan-img"),
                $sloganTxt = $dom.find(".slogan-txt"),
                lens = "100px",
                sOpacity = 1,
                eOpacity = 0;


            curIndex = Math.min(index, nextIndex);

            if (direction == "up") {
                mDirection = true;
                lens = "200px";
            }
            else {
                mDirection = false;
                lens = "-200px";
            }

            TweenMax.fromTo($sloganImg, 0.1, {
                z: 0, opacity: sOpacity, y: 0
            }, {
                z: 0, opacity: eOpacity, y: lens
            });

            TweenMax.fromTo($sloganTxt, 0.1, {
                z: 0, opacity: sOpacity, y: 0
            }, {
                z: 0, opacity: eOpacity, y: lens
            });

            TweenMax.fromTo($title, 0.1, {
                opacity: sOpacity, z: 0, y: 0
            }, {
                opacity: eOpacity, z: 0, y: lens
            });

        }
    });

    window.canvasVideo = false;
    window.$video = document.getElementById("video");

    //最后一屏幕鼠标hover事件
    var $endItem = $(".end-item");
    $endItem.hover(function () {
        var $this = $(this);
        if (document.body.clientWidth > 768) {
            $endItem.find(".hover-circel-1").hide();
            $endItem.find(".hover-circel-2").hide();
            $endItem.removeClass("active");

            $this.find(".hover-circel-1").show();
            $this.find(".hover-circel-2").show();
            $this.addClass("active");
        }
    }, function () {
        $endItem.find(".hover-circel-1").hide();
        $endItem.find(".hover-circel-2").hide();
        $endItem.removeClass("active");
    });

    //鼠标点击出现视频
    $("#vedio").on("click", function (e) {
        if (curIndex == 1) {
            $("#vedio").addClass("videoActive");
            TweenMax.to($("#vedio"), 0.8, {
                zIndex: 9999, y: '0%', marginTop: '0px'
            });
            videoFlag = true;
            if ($video) {
                $video.play();
            }
            e.stopPropagation();
            e.preventDefault();
        }
    });


    //视频关闭事件
    $("#videoClose").click(function (e) {
        document.getElementById("video").pause();
        $("#vedio").removeClass("videoActive");
        TweenMax.to($("#vedio"), 0.8, {
            y: '-100%', zIndex: 100
        });
        TweenMax.to($("#vedio"), 1, {
            marginTop: '100px', delay: 1
        });

        if ($video) {
            $video.pause();
        }
        setTimeout(function () {
            videoFlag = false;
        }, 1000);


        e.stopPropagation();
        e.preventDefault();
    });

    if (document.body.clientWidth <= 1024) {
        $(".end-item").addClass("active");
    }

    //移动端取消掉logo固定
    if (document.body.clientWidth < 768) {
        twLogo1.kill();
        twLogo2.kill();
        twLogo3.kill();
        twLogo4.kill();
        twLogo5.kill();
        twLogo6.kill();
        logoScene1.remove();
        logoScene2.remove();
        logoScene3.remove();
        logoScene4.remove();
        logoScene5.remove();
        logoScene6.remove();
        $("#vedio").hide();
        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.setFitToSection(false);

        $(".end-item").removeClass("active");
    }


};


var host = 'http://c9cdn.tuliptech.cn/static/imgs/';
var baseWid = $(".loading-inner").width();
var loader = new resLoader({
    resources: [
        host + 'logo-1-bg.png',
        host + 'logo-2-bg.png',
        host + 'logo-3-bg.png',
        host + 'logo-4-bg.png',
        host + 'logo-5-bg.png',
        host + 'logo-6-bg.png',
        host + 'img-index-bg1.png',
        host + 'img-index-bg2.png',
        host + 'img-index-bg3.png',
        host + 'img-index-bg4.png',
        host + 'img-index-bg5.png',
        host + 'img-index-bg6.png',
        host + 'solgan-img-2.png',
        host + 'solgan-img-3.png',
        host + 'solgan-img-4.png',
        host + 'solgan-img-5.png',
        host + 'solgan-img-6.png'
    ],
    onStart: function (total) {
    },
    onProgress: function (current, total) {
        var percent = Math.ceil(current / total * 100);
        /*var baseWid = 584;*/
        //console.log(baseWid);
        var continueWid = percent / 100 * (baseWid / 2)+20;
        $(".loading-ani-right").css({
            '-webkit-transform': "skew(135deg) translate(" + continueWid + "px, 0)"
        });
        $(".loading-ani-left").css({
            '-webkit-transform': "skew(135deg) translate(" + -continueWid + "px, 0)"
        });

        //console.log(percent);
    },
    onComplete: function (total) {
          setTimeout(function () {
         $(".loading-box").remove();
         }, 200);
        $("#vedio").show();
        pageInit();
    }
});
loader.start();

/*
 host + 'about/about-logo.png',
 host + 'about/about-solgan.png',
 host + 'about/about-howdo-img.jpg',
 host + 'about/about-is-img.png',
 host + 'about/about-can-img.png',
 host + 'about/about-who-img.png',
 host + 'about/about-how-img.png',
 host + 'blog-img-header.jpg',
 host + 'case-img-1.jpg',
 host + 'case-img-2.jpg',
 host + 'case-img-3.jpg',
 host + 'case-img-4.jpg',
 host + 'case-img-m.jpg',
 host + 'case-tips-1.jpg',
 host + 'case-tips-2.jpg',
 host + 'case-tips-3.jpg',
 host + 'case-tips-4.jpg',
 host + 'case-tips-m.jpg'
 */





























