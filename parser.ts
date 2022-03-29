const charGrid: string[][] = [
  ['m', 'm', 'x', 'x', 'i', 'b'],
  ['m', 'm', 'a', 'x', 'n', 'i'],
  ['a', 'm', 'x', 'n', 'x', 'x'],
  ['x', 'm', 'i', 'm', 'u', 't'],
  ['a', 'o', 'o', 'o', 's', 'a'],
  ['o', 'a', 'a', 'a', 'o', 'o'],
  ['k', 'a', 'i', 'm', 'k', 'i']
];
const grid2: string[][] = [['z']];
const wordA: string = "a";
const wordZ: string = "z";
const word1: string = "maximus";

let count: number = 0;     

const resetCount = () => {
  count = 0;
}

const search = (cGrid: string[][], keyword: string) => {
  console.log(keyword);

  let rows: number = cGrid.length;
  let col: number = cGrid[0].length;
  let visited: boolean[][] = [];

  for (let i = 0; i < rows; i++) {
    visited[i] = [];
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      if (cGrid[i][j] == keyword.charAt(0)) {
        findWord(visited, cGrid, i, j, 0, keyword, "", rows, col, []);
        visited[i][j] = false;
      }
    }
  }
}

const findWord = (
  visited: boolean[][], 
  cGrid: string[][], 
  i: number, 
  j: number, 
  index: number, 
  keyword: string, 
  result: string, 
  yMax: number, 
  xMax: number, 
  stack: string[]) => {

  stack.push("(" + i + "," + j + ")");
  result += cGrid[i][j];
  if (index == keyword.length - 1 && result.toString() === keyword) {
    //console.log(JSON.stringify(stack, null, 2));
    console.log(stack);
    count++;
    return;
  }

  visited[i][j] = true; 
  let nextIndex = index + 1; 
  let nextY, nextX;

  const peek = (y:number, x:number):boolean =>{
    return !visited[y][x] && (cGrid[y][x] == keyword.charAt(nextIndex));
  }

  const goDown = () => {
    if (i + 1 >= 0 && j >= 0 && i + 1 < yMax && j < xMax && peek(i + 1, j)) {
      nextY = i + 1;
      nextX = j;
      findWord(visited, cGrid, nextY, nextX, nextIndex, keyword, result, yMax, xMax, stack);
      visited[nextY][nextX] = false;
    }
  };
  
  const goRight = () => {
    if (i >= 0 && j + 1 >= 0 && i < yMax && j + 1 < xMax && peek(i, j + 1)) {
      nextY = i;
      nextX = j + 1;
      findWord(visited, cGrid, nextY, nextX, nextIndex, keyword, result, yMax, xMax, stack);
      visited[nextY][nextX] = false;
    }
  };

  goDown();
  goRight();
  
  const goLeft = () => {
    if (i >= 0 && j - 1 >= 0 && i < yMax && j - 1 < xMax && peek(i, j - 1)) {
      nextY = i;
      nextX = j - 1;
      findWord(visited, cGrid, nextY, nextX, nextIndex, keyword, result, yMax, xMax, stack);
      visited[nextY][nextX] = false;
    }
  };
  const goUp = () => {
    if (i - 1 >= 0 && j >= 0 && i - 1 < yMax && j < xMax && peek(i - 1, j)) {
      nextY = i - 1;
      nextX = j;
      findWord(visited, cGrid, nextY, nextX, nextIndex, keyword, result, yMax, xMax, stack);
      visited[nextY][nextX] = false;
    }
  };

  goLeft();
  goUp();
}

const getCount = (): number => {
  return count;
}

function test1() {
  const toFind: string = word1;
  search(charGrid, toFind);
  console.log(getCount());
  resetCount();
  console.log('\n');
}

function test2() {
  const toFind: string = wordZ;
  search(grid2, toFind);
  console.log(getCount());
  resetCount();
  console.log('\n');
}

function test3() {
  const toFind: string = wordZ;
  search(charGrid, toFind);
  console.log(getCount());
  resetCount();
  console.log('\n');
}

function test4() {
  const toFind: string = wordA;
  search(grid2, toFind);
  console.log(getCount());
  resetCount();
  console.log('\n');
}

function test5() {
  const toFind: string = wordA;
  search(charGrid, toFind);
  console.log(getCount());
  resetCount();
  console.log('\n');
}
function main() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

main();
