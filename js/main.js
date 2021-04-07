/*搜索*/
$('.s-btn').click(function(){
    $('.search .s_ceng').stop(true,true).fadeIn(500);
});
$('.search .s_ceng .gb').click(function(){
    $('.search .s_ceng').stop(true,true).fadeOut(500);
});

//下拉二级菜单
$(".sort_btn").click(function () {
    $(".sort_nav").slideToggle();
    $(".sort_btn").toggleClass('navShow');

  /*if ($(".sort_nav").hasClass("navShow")) {
    $(".sort_nav").removeClass("navShow");
    $(".sort_nav").slideUp();
  } else {
    $(".sort_nav").addClass("navShow");
    $(".sort_nav").slideDown();
  }
  return false;*/
});
/*移动主导航*/
$('.mobnav').click(function() {
    $('.mobnav').css("display","none");
    $(".nav_xl_a").removeClass("a1");
})
$(".nav_xl_a").click(function() {
    if ($(".nav_xl_a").hasClass("a1")) {
        $(".nav_xl_a").removeClass("a1");
        $(".mobnav").slideUp();
        $(".mobnav").removeClass("ali");
    } else {
        $(".mobnav").slideDown();
        $(".nav_xl_a").addClass("a1");
        $(".mobnav").addClass("ali");
        $(".sort_nav").removeClass("navShow");//子菜单展开，主菜单出现时隐藏子菜单
    }
    return false;
});

// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/*自定义弹出框*/
function myalert(str, str3, str2, useCancel) {
    var overflow = "";
    var $hidder = null;
    if (str3 == '') {
        str3 = '关闭'
    }
    var myClickHandler = function () {
        $hidder.remove();
    };
    var init = function () {
        $hidder = $('<div class="tip-alert "></div>');
        $('<div class="tip-con"><p>' + str + "</p></div>").appendTo($hidder);
        var $myalert_btn_div = $('<div class="tip-btn clearfix"></div>').appendTo($hidder);
        if (str2) {
            var $failBtn = $('<div class="btn-cancel">' + str2 + '</div>').appendTo($myalert_btn_div).click(myClickHandler);
        }
        var $okBtn = $('<div class="btn-complete">' + str3 + '</div>').prependTo($myalert_btn_div).click(useCancel).click(myClickHandler);
        $("body").append($hidder);
    };
    init();
}

/*自定义消息气泡*/
function showTip(str) {
    $('.login-tip').html(str);
    $('.login-tip').fadeIn();
    setTimeout(function () {
        $('.login-tip').hide();
    }, 2000);
}
//showTip("消息提示！");

function tj(){
    $('.tip-alert').remove();
    myalert('确认提交？', '提交', '取消', function () {
        showTip("提交成功");
    })
}

$(function() {
    /*tap*/
    $(".tap_group .tap_btnlist li:first").addClass("on");
    $(".tap_group .tap_btnlist li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var Iindex = $(this).index();
        $(".tap_group .tap_box").eq(Iindex).fadeIn().siblings(".tap_group .tap_box").hide();
    });
 
    //返回顶部
    $('#myBtn').click(function () {
        $('body,html').animate({scrollTop:0},500);
    });
})

//锚点定位滚动
 $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - 100)
            }, 1000);
        }
    }
});

     //菜单当前项
    var str = window.location.href;
    var index = str.lastIndexOf("\/");  
    str = str.substring(index + 1, str.length);
    //alert(str);
    var menu=$('#MenuList_f1 .menu');
    var stmenu=$('#MenuList_f1 .stmenu');
    stmenu.each(function() {
        if($(this).find('li').length == 0){
            var hrefStr=$(this).find('a').attr('href');
            console.log(hrefStr);
            var T= hrefStr.lastIndexOf(str); 
            if(T != -1){
                $(this).addClass('cur');
                return false;
            }
        }else{
            $(this).find('a').each(function() {
                var hrefStr=$(this).attr('href');
                console.log(hrefStr);
                var T= hrefStr.lastIndexOf(str); 
                if(T != -1){
                    $(this).parents('.stmenu').addClass('cur');
                    return false;
                }
            })
        }
    })
