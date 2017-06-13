/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let testHand1 = ["5", "7", "9"];
let testHand2 = ["A", "J", "A"];
let testHand3 = ["7", "A", "5"]

function handValue(hand) {
  let handTotal = 0;
  // let aceBucket = [];
  // for (x = 0; x < hand.length; x++) {
  //   if (hand[x] === "A")  {
  //     aceBucket.push(hand[x]);
  //     console.log(aceBucket);
  //     hand.splice(hand[x], 1);
  //   }
  // }
  // hand = hand.concat(aceBucket);
  // console.log(hand);
  for (x = 0; x < hand.length; x++) {
    if (hand[x] === "J" || hand[x] === "Q" || hand[x] ===  "K") {
      handTotal += 10;
    // } else if (hand[x] === "A") {
    //   if (handTotal + 11 <= 21) {
    //     handTotal += 11;
    //   }
    // else {
    //     handTotal += 1;
    //   }
  } else if (hand[x] === "A") {

  } else {
      handTotal += Number(hand[x]);
    }
  }

  for (x = 0; x < hand.length; x++) {
    if (hand[x] === "A" && handTotal <= 10) {
      handTotal += 11;
    } else if (hand[x] ==="A" && handTotal > 10) {
      handTotal += 1;
    }
  }

  // if (handTotal > 21) {
  //   handTotal -= 10;
  // }
  return handTotal;
}

console.log(handValue(testHand1));
console.log(handValue(testHand2));
console.log(handValue(testHand3));







/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

// take a hand as an array
// traverse the array, one element at a time
// check to see if it's already a number
// if it is, add it to the hand total
// if it is J, Q, or K, add 10 to the hand total
// if it's and A, look at hand total.  If hand total + 11 is <= 21, add 11 to hand total.  If it's > 21, add 1.
