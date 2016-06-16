/**
 * Created by Administrator on 2016/2/25.
 */
$(document).ready(function(){
    var iNow = 0, index = 1, nStartX = 0;
    var oBanner = document.getElementById('banner-box');
    bannerShow();
    $(window).resize(function(){
        bannerShow();
    });

    oBanner.addEventListener('touchstart', function(event) {
        event.preventDefault();
        nStartX = event.targetTouches[0].pageX ;
    }, false);

    oBanner.addEventListener('touchend', function(event) {
        event.preventDefault();
        var mw = $('.banner-show li').width(); // 获取可视区域宽度
        var _l = mw + $('.banner-show').position().left%mw, _w = mw/2, _m = $('.banner-show li').length - 1;
        var ml = $('.banner-show').position().left; //这里要重新获取left值
        if(_l <= _w){ //中点判断
            ml = ml - _l
        }else{
            ml = ml + (mw - _l)
        }
        if(ml >= 0){
            ml = 0;
        }else if (ml <= -mw * _m){
            ml = -mw * _m;
        }
        $('.banner-show').animate({'left': ml}, 200);
        var _now = parseInt(-ml/mw);
        $('.banner-tab li').eq(_now).addClass('active').siblings('li').removeClass('active');
        $('.banner-tab p').html($('.banner-show li').eq(_now).attr('data-t'));
    }, false);

    oBanner.addEventListener('touchmove', function(event) {
        event.preventDefault();
        var touch = event.targetTouches[0];
        var _l = $('.banner-show').position().left + touch.pageX - nStartX;
        nStartX = touch.pageX;
        $('.banner-show').css('left', _l);
    }, false);
});

//自动切换
function tabBanner(n){
    $('.banner-show').animate({'left': -n * $(window).width()});
    $('.banner-tab li').eq(n).addClass('active').siblings('li').removeClass('active');
    $('.banner-tab p').html($('.banner-tab li').eq(n).attr('data-title'));
}

//自适应
function bannerShow(){
    var _w = $(window).width();
    var _h = _w * 0.5
    $('.banner-box').height(_h);
    $('.banner-show').width(_w * 5);
    $('.banner-show li').width(_w);
};
