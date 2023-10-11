/*
    Consider an array/list of sheep where may be missing
    from their place, We need a function that counst the
    number of sheep present in the array(true means present).

    ? Example:
    [
        true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true,
    ] => ANS: 17

    * Hint: Don't forget to check for bad values like:
    ! null / undefined...etc.


    function countSheeps(arrayOfSheeps) {
        return arrayOfSheeps.filter(Boolean).length;
    }

    or
    let counter = 0;
    arr.map((m)=>{
        if (m === true) counter++;
    });
    return counter;
*/

function countSheep(sheepArr) {
  if (sheepArr == null) return 0;
  return sheepArr.filter((element) => element === true).length;
}

console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
