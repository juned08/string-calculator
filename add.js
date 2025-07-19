export function add(numbers) {
  if(numbers === "") return 0;

  let delimiter = /,|\n/;

  const numList = numbers.split(delimiter).map(Number);
  
  return numList.reduce((a ,b) => a + b);
}