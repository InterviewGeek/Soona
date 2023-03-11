let input = ['***', '* *', '***'];
parse(input);

function parse (input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
          if(input[i][j] != '*') {
            let count = 0;
            let res = (i>0 && input[i-1][j] == '*') ? 1 : 0;
            count += res;
            res = (i<input.length-1 && input[i+1][j] == '*') ? 1 : 0;
            count += res;
            res = (j>0 && input[i][j-1] == '*') ? 1 : 0;
            count += res;
            res = (j<input[i].length-1 && input[i][j+1] == '*') ? 1 : 0;
            count += res;
            res = (i>0 && j>0 && input[i-1][j-1] == '*') ? 1 : 0;
            count += res;
            res = (i>0 && j<input[i].length-1 && input[i-1][j+1] == '*') ? 1 : 0;
            count += res;
            res = (i<input.length-1 && j<input[i].length-1 && input[i+1][j+1] == '*') ? 1 : 0;
            count += res;
            res = (i<input.length-1 && j>0 && input[i+1][j-1] == '*') ? 1 : 0;
            count+=res;
            if(count > 0) {
              let currentStr = input[i];
              let subStr = currentStr.substring(0, j);
              let newStr = currentStr.substring(0, j) + count + currentStr.substring(j+1); // what is the req if the mines turn out to be >9?
              input[i] = newStr;
            }
          }
        }
      }
      return input;
  };