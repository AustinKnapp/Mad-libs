$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var address1Input = $("input#address1").val();

    $(".person1").text(person1Input);
    $(".address1").text(address1Input);


    $("#story").show();

    event.preventDefault();
  });
});
