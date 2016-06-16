$(document).ready(function() {
  $("#blankYell form").submit(function(event) {
    var yellingInput = $("input#yelling").val().toUpperCase();
    $(".yelling").text(yellingInput);
    event.preventDefault();
  });

  $("#blankWhisper form").submit(function(event) {
    var whisperOutput = $("input#whisper").val().toLowerCase();
    $(".whisper").text(whisperOutput)
    event.preventDefault();
  });
});
