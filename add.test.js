import { add } from './add.js';

try {
  console.assert(add("") === 0, `Failed: Input :"" should return 0`);
  console.assert(add('1') === 1, `Failed: Input :"1" should return 1`);
  
} catch (error) {
  console.error(" Error: ", error.message);
}