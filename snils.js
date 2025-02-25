// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  // let regex = /([0-9]{3})[-]([0-9]{3})[-]([0-9]{3})[' ']([0-9]{2})/;
  // return regex.test(string)
  let regex = /(([0-9]{3}[-]){2})([0-9]{3})[' ']([0-9]{2})/;
  return regex.test(string);
}

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  let regex = /(([0-9]{3}[-]){2})([0-9]{3})[' ']([0-9]{2})/;
  return string.match(regex)[0];
}

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
  let regex = /(([0-9]{3}[-]){2})([0-9]{3})[' ']([0-9]{2})/g;
  return string.match(regex);
}

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
  let regex = /(([0-9]{3}[-]){2})([0-9]{3})/g;
  return string.replaceAll(regex, 'XXX-XXX-XXX');
}

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
  const regex =
    /(\d{3})(?:[.\s]|--)?(\d{3})(?:[.\s]|--)?(\d{3})(?:[.\s]|--)?(\d{2})/g;
  return string.replaceAll(regex, `$1-$2-$3 $4`);
}

console.log(
  formatSNILS(
    'The numbers are 35080207494, 234.600.142.22, and 013--605--876 94'
  )
);

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS,
};
