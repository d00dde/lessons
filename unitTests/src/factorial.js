export function factorial(num) {
  if (typeof num !== "number") return -1;
  if (num < 0) return -1;
  // if (Math.floor(num) !== num) return -1;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}


