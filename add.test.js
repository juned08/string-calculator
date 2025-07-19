import { add } from './add.js';

function testCase(input, expected) {
  try {
    const actual = add(input);
    if(actual === expected){
      console.log(`Passed: Input ${input} => Output: ${actual}`);
    } else {
      console.error(`Failed: Input ${input} => Output: ${expected}, Got: ${actual}`);
    }
  } catch(error) {
    console.error(`Error thrown for Input ${input}: ${error.message}`)
  }

}

testCase("", 0);
testCase("1", 1);
testCase("1,2", 3);
testCase("1\n2,3", 6);
testCase("//;\n1;2", 3);
