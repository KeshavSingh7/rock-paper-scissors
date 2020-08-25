$(document).ready(function () {
  $("#myModal").on("hidden.bs.modal", function () {
    if ($("#player").text() === "10" || $("#computer").text() === "10") {
      if ($("#player").text() === "10") {
        $("#player").text("0");
        $("#computer").text("0");
      } else {
        $("#player").text("0");
        $("#computer").text("0");
      }
    }
  });
});
