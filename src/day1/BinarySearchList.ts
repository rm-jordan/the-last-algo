export default function bs_list(haystack: number[], needle: number): boolean {

  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) /2);
    const v = haystack[m];

    if (v === needle) {
      return true;
} else if (v > needle) {
  // reduce the high side to this point and exclude the midpoint
  hi = m;
} else {
  // at this point value is less than needle and we need to search on the higher side
  lo = m + 1;
}


  } while (lo < hi );

  return false;
}

//https://frontendmasters.com/courses/algorithms/pseudo-code-binary-search/
//https://frontendmasters.com/courses/algorithms/implementing-binary-search/

//this only works for ordered arrays <-----
