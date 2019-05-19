$("#survey").show();
$("#results").hide();

$("#submit").on("click", function (event) {
  event.preventDefault();

  function validForm() {
    var valid = true;
    $(".questions").each(function () {
      if ($(this).val() === "0") {
        return valid = false;
      }
    });
    return valid;
  }

  if (validForm()) {
    var user = {
      name: $("#name").val(),
      pic: $("#pic").val(),
      answers: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
    $.post("/api/friends", user, function (data) {
      $("#friendName").text(data.name);
      $("#friendPic").attr("src", data.pic);
      $("#results").show();
      $("#survey").hide();
    });
  } else {
    alert("Please complete all fields!");
  }
});

$("#reset").on("click", function (event) {
  event.preventDefault();

  $.post("/api/friends", user, function () {
    $("#results").hide();
    $("#survey").show();
  });
});
