$(function(){{var c=$(".office-item");$(".office-item-mask"),$(".office-item img")}c.hover(function(){var c=$(this),g=c.find(".office-item-mask"),w=c.find("img");TweenMax.to(g,1,{opacity:0}),TweenMax.to(w,.6,{filter:"grayscale(0)"})},function(){var c=$(this),g=c.find(".office-item-mask"),w=c.find("img");TweenMax.to(g,1,{opacity:.85}),TweenMax.to(w,.6,{filter:"grayscale(100%)"})})});