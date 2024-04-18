// Author: Adib Bazli

$.fn.setCursorPosition = function (pos) {
  this.each(function (index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  });
  return this;
};

function insertTextAtCursor(inputElement, textToInsert) {
  const text_temp = inputElement.val();
  const selectionEnd = inputElement[0].selectionEnd;
  const temp1 = text_temp.substring(0, selectionEnd);
  const temp2 = text_temp.substring(selectionEnd);
  const new_text = String(temp1) + String(textToInsert) + String(temp2);

  inputElement
    .val(new_text)
    .focus()
    .setCursorPosition(temp1.length + 11);
}

$(function () {
  let lastActiveInputElement = null;

  $("#input_area").on("click keyup", function () {
    lastActiveInputElement = $(this);
  });

  $(".insertTextAtCursor").on("click", function () {
    if (lastActiveInputElement) {
      insertTextAtCursor(lastActiveInputElement, "[MMMM YYYY]");
    }
  });
});
