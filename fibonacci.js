const fibs = (num) => {
  if (num < 0 || isNaN(num)) return 'Error';

  const result = [];

  for (let i = 0; i < num; i += 1) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
};

const fibsRec = (num) => {
  if (num < 0 || isNaN(num)) return 'Error';

  let result = [0, 1];

  if (num < 3) {
    result = result.slice(0, num);
  } else {
    result = fibsRec(num - 1);
    result.push(result[num - 2] + result[num - 3]);
  }

  return result;
};

console.log('Iterative', fibs(20));
console.log('Recursive', fibsRec(20));
