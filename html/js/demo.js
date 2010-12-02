(function() {
  $(document).ready(function() {
    document.title = [document.title, "Hello JavaScript"].join(": ");
    console.info("document is now ready for action.");
    return $('body').css({
      backgroundColor: 'red'
    });
  });
}).call(this);
