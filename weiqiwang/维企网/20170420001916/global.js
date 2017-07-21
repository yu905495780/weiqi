$(document).ready(function() {

   // $('body, body').iealert({support: "ie7"});

    //根据浏览器宽度给相应的组件加上class
    //isbrowserSize('start');

    //系统选择
    var isSystemMenu = false;
    $(".b-select-system .bss-btn").click(function() {
        var bssmenu = $(this).next();
        var bss = $(this).parent();
        if (bssmenu.is(":visible")) {
            bss.removeClass("open");
            bssmenu.slideUp(200);
            isSystemMenu = false;
        }else{
            bss.addClass("open");
            bssmenu.slideDown(200);
            isSystemMenu = true;
        }
        return false;
        //event.stopPropagation();
    });

    //导航 (二级菜单的显示与隐藏)
    $(".b-sidebar-menu .bsm-item > a.bsmi-btn").click(function() {
        //关闭所有已打开的下级菜单
        $(".b-sidebar-menu .bsm-item.open").removeClass("open");
        $(".b-sidebar-menu .bsm-item .bsmi-sub").slideUp(200);
        //打开已点击栏目的下级菜单
        var sub = $(this).next();
        if (sub.is(":visible")) {
            $(this).parent().removeClass("open");
            sub.slideUp(200);
        }else{
            $(this).parent().addClass("open");
            sub.slideDown(500);
        }
        return false;
    });

    //点击空白处执行
    $(document).click(function() {
        //收起系统选择菜单
        if (isSystemMenu){
            $(".b-select-system").removeClass("open");
            $(".b-select-system .bss-menu").slideUp(100);
            //alert("2") 
        }
    });

    //m-cbox缩放内容
    $(".m-cbox .mcht-zoom-btn").click(function() {
        //var mczoombtn = $(this);
        var mczoomicon = $(this).find("i");
        var mcbody = $(this).parent().parent().next();
        if (mcbody.is(":visible")) {
            mcbody.slideUp(200);
            mczoomicon.attr("class","fa fa-chevron-up");
        }else{
            mcbody.slideDown(200);
            mczoomicon.attr("class","fa fa-chevron-down");
        }
        return false;
    });

    //m-cbox 删除
    $(".m-cbox .mcht-del-cbox-btn").click(function() {
        var cbox = $(this).parent().parent().parent();
        var isurl = $(this).attr("href");
        if (isurl=== "" || isurl === "#") {
            cbox.fadeOut("fast",function() {
                cbox.remove();
            });
            //cbox.remove();
        }else{
            alert("ajax 访问url地址，处理返回数据,删除href里的URL地址,再点击删除会直接删除这个CBox");
            /*$.ajax({
                url: isurl,
                type: 'GET',
                //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                //data: {param1: 'value1'},
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });*/
        }
        return false;
    });


    // custom scrollbar {, autohidemode: false}
	/*
    $(".b-sidebar-scroll, .b-select-system .bss-menu").niceScroll({styler:"fb",cursorcolor:"#0066cc", cursorwidth: '0', background: '#f0f0f0', cursorborderradius: '5', cursorborder: ''});

    $("html, .js-scrooll").niceScroll({styler:"fb",cursorcolor:"#FC4C03", cursorwidth: '10', cursorborderradius: '0', background: '#f0f0f0', cursorborder: '', zindex: '1031'});
	*/

    //star rating 
    $(".m-rating .star").click(function() {
        var numstar = $(this).attr("data-star");
        var srurl = $(this).parent().attr("data-geturl")+numstar;
        alert(srurl);
        /*$.ajax({
            url: srurl,
            type: 'GET',
            //dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            //data: {param1: 'value1'},
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });*/
    });

    //tool tips
    $('.m-element').tooltip();
    $('.m-tooltips').tooltip();

    //popovers
    $('.m-popovers').popover();


    //checkbox all select
    $('.js-all-select').on("click", function() {
        var rangeName = $(this).attr("data-range-name");
        if (rangeName) {
            $(rangeName+" input[type='checkbox']:not(:disabled)").prop("checked",this.checked);
        }else{
            $("input[type='checkbox']:not(:disabled)").prop("checked",this.checked);
        }
    });


    //raty
    if ($('.js-raty').length > 0){
        $('.js-raty').raty({
            path:'stylelib/plugins/raty/img/',
            score: function() {
                return $(this).attr('data-score');
            },
            click: function(score, evt) {
                alert($(this).attr('date-url') + "\nscore: " + score);
            }
        });
    }


    //Open and hidden main-menu


    //Custom iFrame modal
    if ($('[data-atype=modal]').length > 0){
        var modalgroup = [];
        $('[data-atype=modal]').each(function(index) {
            modalgroup[index] = {
                'url' : $(this).attr('href'),
                'title' : $(this).attr('data-title'), 
                'width' : $(this).attr('data-width')? $(this).attr('data-width'): '',
                'height' : $(this).attr('data-height')? 'style="height:'+ $(this).attr('data-height') +';"' : ''
            };
            if ($(this).attr('data-height') == 'auto') {
                modalgroup[index]['height'] = $(window).height() - ($(window).height()*0.1*3);
                modalgroup[index]['height'] = 'style="height:'+ modalgroup[index]['height'] +'px;"';
            }

            $(this).on('click',function() {
                if ( $('#iframe-modal-'+index).length <=0 ){
                    $('body').append('<div id=\"iframe-modal-'+ index + '\" class="modal fade '+modalgroup[index]['width']+'" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ modalgroup[index]['title'] +'</h4></div><iframe frameborder="0" scrolling="no" src="'+ modalgroup[index]['url'] + '" name="modal_iframe_' + index + '" id="modal_iframe_' + index + '" class="m-modal-iframe" '+ modalgroup[index]['height'] +'></iframe></div></div></div>');
                }

                $('#iframe-modal-'+ index + ' iframe').attr('src', modalgroup[index]['url']);
                $('#iframe-modal-'+index).modal('show');
                return false;
            });
        });
    }

    //open senior search
    $('.mcb-senior-search .mcbsc-showmore').click(function(event) {
        var ssobj = $(this).closest('.mcb-senior-search');
        if (ssobj.hasClass('open')){
            ssobj.removeClass('open');
            $(this).html('高级 <i class="icon-angle-down"></i>');
        }else{
            ssobj.addClass('open');
            $(this).html('收缩 <i class="icon-angle-up"></i>');
        }
        return false;
    });


    //table col float
    if ($('.m-swtable').length > 0) {
        pratable = [];
        $('.m-swtable').each(function(index) {
            pratable[index] = $(this).find('.ms-pratable');
            pratable[index].width('auto');
            $(this).scroll(function(){
                if ($(this).scrollLeft() <= 0) {
                    pratable[index].css('left', '-9999px');
                }else{
                    pratable[index].css('left', $(this).scrollLeft());
                }
            })

        });
    }

});


/*-------------------------------------------------------0
* Resize Action
*/
$(window).on("resize", function(){
       //function
       //isbrowserSize("size");
});

/*-------------------------------------------------------0
* loading alert
*/

var la_open = function() {
    var la = $("#loading-alert");
    if (la.length <= 0){
        $("body").append('<div id="loading-alert">请稍等...</div>');
    }
}

var la_msg = function(str) {
    $("#loading-alert").html(str).fadeOut(2500,function(){ la_close(); });
}

var la_close = function() {
    $("#loading-alert").remove();
}

/*-------------------------------------------------------
* Modal Action
*/

/*
* sMname string  // windos.name
* iAction int // 取消还是删除，0以上整数为[取消]。0及负数为[删除]。区别在于是否删除html里的生成的代码。
* bIsReload boolean  // 关闭后是否刷新父框架页面, true 刷新，false 不刷新(默认)
*/
var IframeModalCC = function(sMname,iAction,bIsReload) {
    var iModalId = sMname.split('_')[2];
    if (iAction){
        var ifmbox = $('#iframe-modal-' + iModalId);
        ifmbox.modal('hide');
        setTimeout(function() {
            ifmbox.remove();
        },800);
    }else{
        $('#iframe-modal-' + iModalId).modal('hide');
    }

    if (bIsReload){
        location.reload();
    }
}


/* Scroll to top */
$(document).ready(function() {
	var ScrolltoTop = $("#totop");
	$(ScrolltoTop).hide();//默认隐藏
	$(window).scroll(function() {
		if ($(window).scrollTop() == "0") {//滚动条距浏览器顶部距离为0
			$(ScrolltoTop).fadeOut("slow")//渐隐
		} else {
			$(ScrolltoTop).fadeIn("slow")//渐显
		}
	});
	
	$('#totop').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');//滑动到顶部
	});
});

$(document).ready(function() {	
	/* 主菜单下子导航*/ 
	$('.c-menu > li > .c-subnav').hide();
	
	$('.c-menu > li > a').mouseover(function(e) {
		$(this).next('.c-subnav').slideDown();
	});
	$('.c-menu > li').mouseleave(function(e) {
		$(this).children('.c-subnav').hide();
	});

	/* 产品服务导航 */
	$('.p-kinds > a').click(function(e) {
        $(this).addClass('active').siblings().removeClass('active')
    });
});

/*-------------------------------------------------------
* Custom Function
*/
// var isbrowserSize = function() {
//     var pageWidth = $("body").width();
//     if ( pageWidth <= 767 ) {
//         $(".b-top-nav .top-menu .dropdown-menu").addClass('m-max767');
//         //.niceScroll({styler:"fb",cursorcolor:"#0066cc", cursorwidth: '5', cursorborderradius: '0', cursorborder: ''});
//     }
//     if (pageWidth >= 980) {
//         var zoombtn = $(".mch-smenu-btn");
//         var sidebar = $("#main-menu");
//         var maincontent = $("#main-content");
//         var paggeactions = $(".b-page-actions")
//         zoombtn.on('click', function() {
            
//             if (sidebar.is(":visible")) {
//                 alert(1);
//                 sidebar.css("display","none");
//                 maincontent.css("margin-left","0");
//                 paggeactions.css("margin-left","0");
//             }else{
//                 alert(2);     
//                 sidebar.css("display","");
//                 maincontent.css("margin-left","");
//                 paggeactions.css("margin-left","");
//             }
//         });
//     }
// }




$(document).ready(function() {
		
	//右下角浮动部件	 
	 $('.widgets > .close').click(function(){ //点击部件关闭按钮
	 	$(this).parent().hide()//隐藏部件
	 });
	 
	$(".float-widgets .feedback").click(function() {//鼠标点击反馈信息图标
        $(this).siblings('.widgets').css('display','block');//显示反馈信息框
    });
	/*
	$(".float-widgets .code").mouseover(function() {//鼠标移至二维码图标
        $(this).siblings('.widgets').css('display','block');//显示二维码
		$(this).parent().siblings().children('.widgets').css('display','none');//父级的同级下子部件隐藏
    });
	$(".float-widgets .code").mouseleave(function() {//鼠标离开二维码图标
        $(this).siblings('.widgets').css('display','none');//隐藏二维码
    });
	*/
	$(".hf-code").hover(function() {//鼠标移至二维码图标
        $(this).siblings('.hf-codebox').css('display','block');//显示二维码
		//$(this).parent().siblings().children('.widgets').css('display','none');//父级的同级下子部件隐藏
    },function(){//鼠标离开二维码图标
        $(this).siblings('.hf-codebox').css('display','none');//隐藏二维码
    });
	
	//添加律师专长	
	var skill = '<div class="input-group">' + 
                '<input type="text" class="form-control" name="speciality" />' + 
                '<a class="input-group-addon btn btn-default"><i class="fa fa-close"></i></a>' + 
				'</div>';
	$(".skills-addbtn").on('click', function() {
            var skillInputbox = $(this).parent();
			skillInputbox.append(skill).find(".input-group-addon").on('click' ,function() {$(this).parent().remove();});
			return false; 
	});	
	$(".skills-input-box .input-group-addon").click(function(){
		$(this).parent().remove();
	});
	
	//下单页价格选择
	$('#price-select-box [checked="checked"]').next().css('border-color','#f0ad4e');//默认选中价格框是红边
	$('#price-select-box label').click(function(e) {
		$(this).children('.box-select').css('border-color','#f0ad4e')
		.parent('label').parent().siblings().children('label').children('.box-select').css('border-color','#ddd');        
    });
	
	//合同范本收藏/分享效果
	$('.post-meta .btn-link').click(function(){
		$(this).addClass('active');
		$(this).children('.share').removeClass('fa-heart-o').addClass('fa-heart');
		$(this).children('.collect').removeClass('fa-star-o').addClass('fa-star');		
	});
	
	//合同范本中合同类型选择
	$('.contract-type ul > li > a').click(function() {
        $(this).addClass('on');
		$(this).parent('li').siblings('li').children('a').removeClass('on');
    });
	//合同类型展开收缩效果
	$('.contract-type .close-type').hide();//默认隐藏收缩按钮
	$('.contract-type .open-type').click(function() {
		$(this).hide().next('.close-type').show();
		$(this).siblings('.contract-type-list').css({height:'auto',overflow:'hidden'});
	
	});
	$('.contract-type .close-type').click(function() {
		$(this).hide().prev('.open-type').show();
		$(this).siblings('.contract-type-list').css({height:'40',overflow:'hidden'});
	});
	
	$('#contract_iframe').find('html').css('height','550px');
	
	//浮动显示隐藏
	$('.hfloat > .hfcontrol > .hfhide').click(function(e) {
        $(this).hide().siblings('.hfshow').show();
		$('.hfloat').css({
			'right':'-100px',
			'transition':'all 0.15s ease-in-out'
			})
		
    });
	$('.hfloat > .hfcontrol > .hfshow').click(function(e) {
        $(this).hide().siblings('.hfhide').show();
		$('.hfloat').css({
			'right':'20px'
			})
		
    });
		
	


/*--------------------------
Carousels
-------------------------------------------------------------*/

var hpmenu_li=$('.hproduct > .hpmenu > li');
	hpcont_li=$('.hproduct > .hpcont > li');
	$('.hproduct > .hpmenu > li:first-child,.hproduct > .hpcont > li:first-child').addClass('on');
	$('.hproduct > .hpcont > li > .prod:even').addClass('even');//奇数样式
	hpmenu_li.each(function(hp){
		$(this).mouseover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$(hpcont_li[hp]).show().siblings().hide();
		});
});

//头部二维码
$('#qrcode').hover(function(){
	$(this).next('.qrcode').show();
	},function(){
	$(this).next('.qrcode').hide();
	});


});

/*-------------------
footer 文档小于等于窗口可视高度让Footer绝对定位
---------------------------*/

var winh = $(window).height();
	doch = $(document).height();
	if(doch<=winh){
		$(".footer").css({
			'position':'fixed',
			'bottom':'0'
			
			});
			//alert(doch);
	}
	else {
		$(".footer").css({
			'position':'relative'			
			});
			
	}



