(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($) {
  /**
   * This fucntion limits max line count.
   * @param {number} lineCount
   */
  $.fn.limitMaxLineCount = function (lineCount) {
    var style = '';
    style += '<style>';
    style += '.limit-target::after {';
    style +=    'display: inline-block;';
    style +=    "content: '...';";
    style +=    'position: absolute;';
    style +=    'bottom: 0;';
    style +=    'right: 0;';
    style +=    'width: 1.5em;';
    style +=    'text-align: right;';
    style +=    'background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);';
    style +=    'background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);';
    style +=    'background: linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);';
    style += '}';
    style += '</style>';
    $('head').append(style);

    this.each(function() {
      var targetHeight       = this.scrollHeight;
      var targetFontSize     = parseFloat($(this).css('font-size'));
      var targetLineHeight   = parseFloat($(this).css('line-height')) / targetFontSize;
      var DECIMAL_PLACE      = 2;
      targetLineHeight       = targetLineHeight.toFixed(DECIMAL_PLACE);
      var sentenceBodyHeight = targetLineHeight * lineCount;
      var viewingArea        = Math.round(targetLineHeight * lineCount * targetFontSize);

      var styleOptions = {
        'position'   : 'relative',
        'overflow'   : 'hidden',
        'max-height' : sentenceBodyHeight +'em',
        'word-break' : 'break-all'
      };
      $(this).css(styleOptions);

      if (targetHeight > viewingArea) {
        $(this).addClass('limit-target');
      } else {
        $(this).removeClass('limit-target');
      }
    });
  }
}));
