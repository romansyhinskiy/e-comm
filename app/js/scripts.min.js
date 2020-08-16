$(document).ready(function () {
    $('.JS-Open').click(function(){
        $('.openProposal_Light').addClass('open')
    })
    $('.JS-Open-Basic').click(function(){
        $('.openProposal_Basic').addClass('open')
    })
    $('.JS-Open-Full').click(function(){
        $('.openProposal_Full').addClass('open')
    })
    $('.JS-Open-Premium').click(function(){
        $('.openProposal_Premium').addClass('open')
    })
    
    
    $('.closeClass').click(function(){
        $(this).parents('.JS-close').find('.open').removeClass('open');
    })

    $('.JS-compareId').click(function(){
        let id = $(this).data('id');
        let proposal = $('.openProposal').each(function(){
            $(this).data()
        });
        if(id == proposal){
            console.log('proposal')
        }
    })
    
});
