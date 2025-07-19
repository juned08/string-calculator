import { add } from './add.js';

try {
  console.assert(add("") === 0, `Failed: Input :"" should return 0`);
} catch (error) {
  console.error(" Error: ", error.message);
}