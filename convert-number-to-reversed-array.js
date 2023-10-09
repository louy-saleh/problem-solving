/*
    Convert number to reversed array of digits

    Given a random non-negative number, you have to return
    the digits of this number within an array in reverse order.

    Example:
    348597 => [ 7, 9, 5, 8, 4, 3 ]
    0 => [ 0 ]
*/

function revArr(number) {
  return Array.from(String(number), Number).reverse();

  /*
    another way to solve:
    return number.toString().split("")
    .map((m)=>Number(m)).reverse();
  */
}

console.log(revArr(123456789));
