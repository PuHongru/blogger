/**
 * Created by puhongru on 2016/7/11.
 */
;$(function() {
    var sidebar_trigger = $('.sidebar-trigger'),
        mask = $('.mask'),
        sidebar = $('#sidebar'),
        sidebar_width = sidebar.width(),
        sidebar_list = $('.sidebar-list'),
        back_button = $('#back-button');

    //²àÀ¸
    function showSidebar() {
        sidebar.css('right',0);
        mask.fadeIn();
    }

    function hideSidebar() {
        sidebar.css('right',-sidebar_width);
        mask.fadeOut();
    }

    sidebar_trigger.on('click', showSidebar);
    mask.on('click', hideSidebar);
    sidebar_list.on('click',hideSidebar);

    //»Øµ½¶¥²¿
    back_button.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },800);
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop() > $(window).height()){
            back_button.fadeIn();
        }
        else{
            back_button.fadeOut();
        }
    });
    $(window).trigger('scroll');
});