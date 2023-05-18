( function($) {
$(".single-ccarousel .owl-carousel").each(function(){
    $(this).owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
    });

});
$('#Programs .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

 $('#open-menu').on('click',function(){
$('#side-menu,.js-off-canvas-exit').addClass('active');
 });
 $('.js-off-canvas-exit').on('click',function(){
    $('#side-menu,.js-off-canvas-exit').removeClass('active')
     });
 $('.group-mobile .input-group-text').on('click',function(){
    $('#input-slide').slideToggle()
     });
    })( jQuery );



    
function editPages(id,type)
{
   // http://localhost/mansoura-un/admin-dashboard/pages/3/edit
   var url=currentUrl+'/admin-dashboard/'+type+'/'+id+'/edit'
   $('#edit').attr('href',url)
}

function editSection(id,type,index)
{
   // http://localhost/mansoura-un/admin-dashboard/pages/3/edit
   var url=currentUrl+'/admin-dashboard/'+type+'/'+id+'/edit#section'+index
   $('#editSection_'+index).attr('href',url)
}