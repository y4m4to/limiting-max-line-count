(function ($) {
  /**
   * This fucntion limits max line count.
   * @param {number} lineCount
   */
  $.fn.limitMaxLineCount = function (lineCount) {
    for (var i = 0; i < this.length; i++) {
      var targetHeight       = this[i].scrollHeight;
      var targetFontSize     = parseFloat($(this[i]).css('font-size'));
      var targetLineHeight   = parseFloat($(this[i]).css('line-height')) / targetFontSize;
      var DECIMAL_PLACE      = 2;
      targetLineHeight       = targetLineHeight.toFixed(DECIMAL_PLACE);
      var sentenceBodyHeight = targetLineHeight * lineCount;
      var viewingArea        = Math.round(targetLineHeight * lineCount * targetFontSize);

      var styleOptions = {
        'position'   : 'relative',
        'overflow'   : 'hidden',
        'max-height' : sentenceBodyHeight +'em',
        'word-break' : 'break-all'
      }
      $(this[i]).css(styleOptions);

      if (targetHeight > viewingArea) {
        $(this[i]).addClass('limit-target');
      } else {
        $(this[i]).removeClass('limit-target');
      }
    }
  }

$('.container').limitMaxLineCount(4);
}(jQuery));
