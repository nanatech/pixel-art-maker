$(document).ready(function() {
  // Select color input
  var colorElement = $("#colorPicker");
  var color = colorElement.val();
  colorElement.on("change", function() {
    color = colorElement.val();
  });
  // Select size input
  var gridHeight = $("#input_height").val();
  var gridWidth = $("#input_width").val();

  // When size is submitted by the user, call makeGrid()
  $("#sizePicker").submit(function(env) {
    /*Since submit is called prior to the actual submission
    I used the preventDefault method to prevent this*/
    env.preventDefault();

    //get the updated height and width
    gridWidth = $("#input_width").val();
    gridHeight = $("#input_height").val();
    makeGrid(gridWidth, gridHeight);
    console.log(gridWidth + " " + gridHeight);
  });

  $("table").delegate("td", "click", function(env) {
    $(env.target).css("background-color", color);
  })

});

function makeGrid(width, height) {
  //remove existing table if table size is changed.
  $("#pixel_canvas tr").remove();

  var table = document.getElementById("pixel_canvas");
  for (i = 0; i < height; i++) {
    var row = table.insertRow(i);
    for (j = 0; j < width; j++) {
      row.insertCell(j);
    }
  }
}
