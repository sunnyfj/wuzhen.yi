/*
* @Author: admin
* @Date:   2017-04-20 17:55:49
* @Last Modified by:   admin
* @Last Modified time: 2017-04-21 13:31:17
*/

'use strict';
$(function(){
	//回到顶部
	
	window.onscroll=function(){
	    if($(window).scrollTop()>100){
	         $('#gotop').show();
	    }else{
	         $('#gotop').hide();
	    }
	} 
	$('#gotop').click(function(){
	    scroll('0px', 300);	
	});
	function scroll(scrollTo, time) {
	    var scrollFrom = parseInt($(window).scrollTop()),
	        i = 0,
	        runEvery = 5; // run every 5ms

	    scrollTo = parseInt(scrollTo);
	    time /= runEvery;

	    var interval = setInterval(function () {
	        i++;

	        $(window).scrollTop((scrollTo - scrollFrom) / time * i + scrollFrom)

	        if (i >= time) {
	            clearInterval(interval);
	        }
	    }, runEvery);
	}
	//侧边导航栏
	$('#header-btn').click(function(event) {
		$('body').addClass('sidenav-active');
		$('.sidenav').addClass('active');
		$('.pageContent').css('margin-left','85%');
		$('.sidenav-opa').fadeIn(400);
	});
	$('.sidenav-opa').click(function(event) {
		$('body').removeClass('sidenav-active');
		$('.sidenav').removeClass('active');
		$('.pageContent').css('margin-left',0);
		$('.sidenav-opa').fadeOut(400);
	});

	//list页删选
		//单页删选
		$('.M_PageSelection_content').find('li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

	//美食↓
		//组合形式
		$('#combination-form').click(function(event) {
			$('#cf_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#cf_content .determine').click(function(event) {
			$('#cf_content').hide();
			$('html').removeClass('popup_prohibit_html');
		});

		//适合人数
		$('#fit-number').click(function(event) {
			$('#fn_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#fn_content .determine').click(function(event) {
			$('#fn_content').hide();
			$('html').removeClass('popup_prohibit_html');
		});

		//综合排序
		$('#comprehensive').click(function(event) {
			$('#c_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('.M_select span').click(function(event) {
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#c_content .reset').click(function(){
			var re_length = $('.M_select').length;
			for(var i = 0; i < re_length; i++){
				$('.M_select').eq(i).find('span').eq(0).addClass('active').siblings().removeClass('active');
			}
		})
		$('#c_content .determine').click(function(){
			$('#c_content').hide();
			$('html').removeClass('popup_prohibit_html');
		})
	//会议
		//活动类型
		$('#activity_type_btn').click(function(event) {
			$('#activity_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#activity_type .determine').click(function(event) {
			$('#activity_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//参加人数
		$('#number_entries_btn').click(function(event) {
			$('#number_entries').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#number_entries .determine').click(function(event) {
			$('#number_entries').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//场地类型
		$('#site_type_btn').click(function(event) {
			$('#site_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#site_type .determine').click(function(event) {
			$('#site_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//地理位置
		$('#g_position_btn').click(function(event) {
			$('#g_position').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#g_position .determine').click(function(event) {
			$('#g_position').hide();
			$('html').removeClass('popup_prohibit_html');
		});


	//购物车  优惠卷选择
	$('.on-select').click(function(event) {
		$('.on-select').removeClass('on');
		$(this).addClass('on');
		$('#os_content').show();
		$('html').addClass('more_prohibit_html');
	});
	$('#os_content .determine').click(function(event) {
		//赋值选中的优惠卷
		var thisActiveText = $(this).parents('#os_content').find('li.active').find('p').text();
		for(var i=0;i<$('.on-select').length; i++){
			if ($('.on-select').eq(i).hasClass('on')) {
				$('.on-select').eq(i).find('span').text(thisActiveText);
			}
		}	
		$('#os_content1').hide();
		$('html').removeClass('more_prohibit_html');
	});


	//确认订单  优惠卷选择
	$('.on-selects').click(function(event) {
		$('.on-selects').removeClass('on');
		$(this).addClass('on');
		$('#on-selects-content').show();
		$('html').addClass('more_prohibit_html');
	});
	$('#on-selects-content .determine').click(function(event) {
		//赋值选中的优惠卷
		var thisActiveText = $(this).parents('#on-selects-content').find('li.active').find('p').text();
		for(var i=0;i<$('.on-selects').length; i++){
			if ($('.on-selects').eq(i).hasClass('on')) {
				$('.on-selects').eq(i).find('span').text(thisActiveText);
			}
		}	
		$('#on-selects-content').hide();
		$('html').removeClass('more_prohibit_html');
	});
	

	$('.modal .md-btn').on('click',function(){
		$(this).parents('.modal').hide();
		$('#modal-result').show();
	})
	$('#modal-result .back').on('click',function(){
		$(this).parents('#modal-result').hide();
	})
	$('.modal .close').on('click',function(){
		$(this).parents('.modal').hide();
	})
})