/**
Description
Add the mine counts to a completed Minesweeper board.
Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, vertically, diagonally) to a square.
In this exercise you have to create some code that counts the number of mines adjacent to a given empty square and replaces that square with the count.
The board is a rectangle composed of blank space (' ') characters. A mine is represented by an asterisk ('*') character.
If a given space has no adjacent mines at all, leave that square blank.

For example you may receive a 5 x 4 board like this (empty spaces are represented here with the '·' character for display on screen):
·*·*·
··*··
··*··
·····
And your code will transform it into this:
1*3*1
13*31
·2*2·
·111·
*/

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