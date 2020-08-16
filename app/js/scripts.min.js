$(document).ready(function () {
    $('.JS-Open').click(function(){
        $('.openProposal_Light').addClass('open').siblings().removeClass('open')
    })
    $('.JS-Open-Basic').click(function(){
        $('.openProposal_Basic').addClass('open').siblings().removeClass('open')
    })
    $('.JS-Open-Full').click(function(){
        $('.openProposal_Full').addClass('open').siblings().removeClass('open')
    })
    $('.JS-Open-Premium').click(function(){
        $('.openProposal_Premium').addClass('open').siblings().removeClass('open')
    })
    
    $('.closeClass').click(function(){
        $(this).parents('.JS-close').find('.open').removeClass('open');
    })

});
