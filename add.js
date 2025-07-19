export function add(numbers) {
  if(numbers === "") return 0;

  let delimiter = /,|\n/;

  if(numbers.startsWith('//')){
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numList = numbers.split(delimiter).map(Number);
  const negativeNum = numList.filter((n) => n < 0);

  if(negativeNum.length > 0) {
    throw new Error("negative numbers not allowed " + negativeNum.join(","));
  }

  return numList.reduce((a ,b) => a + b);
}