export default function(str) {
  let array = str.split('\n'),
      end = array.pop(),
      begin = array.shift();
  return array.join('');
}
