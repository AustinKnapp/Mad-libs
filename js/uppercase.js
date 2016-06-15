$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var yellingInput = $("input#yelling").val().toUpperCase();
    $(".yelling").text(yellingInput);




    $("#story").show();

    event.preventDefault();
  });
});
