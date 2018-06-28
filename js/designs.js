
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  // Select size input
  const height = $('#inputHeight').val();
  const width = $('#inputWeight').val();
  // When size is submitted by the user, call makeGrid()
  makeGrid(height, width);
});

function makeGrid(x, y) {
  // Clear table before running again
  $('tr').remove();
  // Create table based on user input
  for (let i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (let j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  }


  $('td').click(function() {
    // Select color input
    const color = $('#colorPicker').val();
    // Add/remove color if the cell is empty/filled
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
}
