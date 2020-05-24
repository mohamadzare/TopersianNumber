export function toFaDigitnum(digit) {

  var num = replace(/\d+/g, function (digit) {
    var ret = '';
    for (var i = 0, len = digit.length; i < len; i++) {
      ret += String.fromCharCode(digit.charCodeAt(i) + 1728);

      if ((digit.length - i) % 3 == 1 && (i + 1) < digit.length) {
        ret += '،';
      }
    }

    return ret;
  });

  return num;
};