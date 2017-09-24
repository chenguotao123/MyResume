
$(function() {
	var header = $("#header");
	var footer = $("#footer");
	var w_width = $(document).width();
	var touchswiper = new Swiper('#container', {
		direction: 'vertical',
		onInit:function(swiper){
			swiperAnimateCache(swiper); 
    		swiperAnimate(swiper); 
		},
		onSlideChangeEnd:function(swiper){
			swiperAnimate(swiper);
		},
		onTouchEnd:function(){
			footer.stop().animate({opacity:1}, 800);
		},
		onTouchStart:function(){
			footer.stop().animate({opacity:0}, 400);
		},
		onSlideChangeStart: function(swiper) {
			if (swiper.activeIndex == 0) {
				header.addClass('home');
				footer.addClass('home');
			} else {
				header.removeClass('home');
				footer.removeClass('home');
			}
			if(swiper.activeIndex == 5) {
				$('#footer .next').css('display','none');
				$('#footer .consulting').animate({
					'width': '230px',
					'font-size': '14px',
					'height': '33px',
					'line-height': '33px'
				},400);
			}else {
				$('#footer .next').css('display','block');
				$('#footer .consulting').animate({
					'width': '160px',
					'font-size': '12px',
					'height': '30px',
					'line-height': '30px'
				},400);
			}
		}
	})

	/*初始化 项目经验page3*/
	var caseswiper= new Swiper('.page4 .itemlist',{
		nextButton : '.next',
		prevButton : '.prev',
		spaceBetween: 160,
		loop:true
	});

	/*初始化 联系我page6*/
	var tableswiper= new Swiper('.page6 .itemlist',{
		onInit:function(swiper){
			var lis=$(".page6 .bullets li");
				lis.on('click', function(event) {
					event.preventDefault();
					$(this).addClass('on').siblings().removeClass('on');
					swiper.slideTo($(this).index());
				}).eq(0).click();
		}
	});

	var nav = header.find(".nav");

	nav.height($(window).height());

	/*绑定菜单按钮*/
	nav.find(".btn_show").on("click", function(event) {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			nav.animate({
				right: -nav.width()
			}, 300);
		} else {
			$(this).addClass('on');
			nav.animate({
				right: 0
			}, 300);

		}
	})

	/*绑定导航*/
	nav.find(".navlist").find('li').on('click', function(event) {
		$(this).addClass('on').siblings().removeClass('on');
		touchswiper.slideTo($(this).attr('data-page-id'));
		nav.animate({
				right: -nav.width()
			}, 300);
	});
});