$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;
$('.card').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);



// when the modal is opened autoplay it
$('#myModal').on('shown.bs.modal', function (e) {

$("#video").attr('src',$videoSrc ); 
})




// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc);
})






// document ready
});
