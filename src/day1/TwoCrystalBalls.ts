export default function two_crystal_balls(breaks: boolean[]): number {

  // we want to jump by the sqrt of N

  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  // use first crystal ball to see where it breaks
let i = jumpAmount
for(; i < breaks.length; i += jumpAmount) {
  if (breaks[i]) {
    break;
  }
}
  i-= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; ++j,++i){
    if (breaks[i]) {
      return i;
    }
  }
return -1;
}

// https://frontendmasters.com/courses/algorithms/two-crystal-balls-problem/
// https://frontendmasters.com/courses/algorithms/implementing-two-crystal-balls/