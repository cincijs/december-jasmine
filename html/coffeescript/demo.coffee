$(document).ready ->
  document.title = [document.title, "Hello JavaScript"].join(": ")
  console.info("document is now ready for action.")
  $('body').css({backgroundColor: 'red'})
