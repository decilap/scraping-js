var ToC =
      "<nav role='navigation' class='table-of-contents'>" +
      /*"<h4 class='text-block-24'></h4>" +*/
        "<ul>";

    var newLine, el, title, link;

    $(".rte.w-richtext  h3").each(function() {
      $(this).attr('id', $(this).text());
      el = $(this);
      title = el.text();
      link = "#" + el.attr("id");

      newLine =
        "<li>" +
          "<a class='contents-link' href='" + link + "'>" +
           title +
          "</a>" +
        "</li>";

      ToC += newLine;

    });

    ToC +=
       "</ol>" +
      "</nav>";

    $(".contents-table").prepend(ToC);
    
  /*  var selectobject = document.getElementsByClassName("contents-link")
    for (var i=0; i<selectobject.length; i++) {
        if (selectobject[i].innerHTML == 'Résumé des points clés de cet article')
            selectobject.remove(i);
    }*/


( function() {

        var youtube = document.querySelectorAll( ".youtube" );

        for (var i = 0; i < youtube.length; i++) {

                var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

                var image = new Image();
                                image.src = source;
                                image.addEventListener( "load", function() {
                                        youtube[ i ].appendChild( image );
                                }( i ) );

                                youtube[i].addEventListener( "click", function() {

                                        var iframe = document.createElement( "iframe" );

                                                        iframe.setAttribute( "frameborder", "0" );
                                                        iframe.setAttribute( "allowfullscreen", "" );
                                                        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                                                        this.innerHTML = "";
                                                        this.appendChild( iframe );
                                } );
        };

} )();

var cookieName = 'cookieClosed';
if(typeof Cookies.get(cookieName) !== 'undefined') {
    $('.cookie').remove();
}

$('.close-btn').on('click', function(){
    Cookies.set(cookieName, 'ok', { expires: 14 });
})