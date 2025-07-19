import { add } from './add.js';

try {
  console.assert(add("") === 0, `Failed: Input :"" should return 0`);
  console.assert(add('1') === 1, `Failed: Input :"1" should return 1`);
  console.assert(add('1,2') === 3, `Failed: Input :"1,2" should return 3`);
  console.assert(add('1,2,3') === 6, `Failed: Input :"1,2,3" should return 6`);
  console.assert(add('1\n2,3') === 6, `Failed: Input :"1\n2,3" should return 6`);
  console.assert(add('//;\n1;2') === 3, `Failed: Input :"//;\n1;2" should return 3`);
  
  try {
    add("1,-2");
  } catch (e) {
    console.assert(e.message === 'negative numbers not allowed -2', "Negative test for -2 failed");
  }
  
} catch (error) {
  console.error(" Error: ", error.message);
}