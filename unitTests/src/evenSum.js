export function evenSum(num) {
  if (Math.floor(num) !== num) return -1;
  let result = 0;
  for (let i = 2; i <= num; i +=2) {
    result += i;
  }
  return result;
}
