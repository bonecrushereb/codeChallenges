// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
//
// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++)
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  return sig.slice(0, n);
}
