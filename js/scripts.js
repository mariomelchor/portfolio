$(document).ready(function() {

  // Smooth Scroll
  $(".smooth-scroll").click(function() {
    if ( location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname  ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var pos = target.offset();
            pos = pos.top;
        $("html,body").animate( { scrollTop: pos },  800 ); return false;
      }
    }
  });

});