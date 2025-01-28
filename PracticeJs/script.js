let large = 123456789012345678901234567897777777777777777777777n;
console.log(typeof (large + 1n)); // bigint
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = "";

for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + " ";
  if (j % 3 == 0) {
    console.log(s);
    s = "";
  }
}
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(i, j);
}
