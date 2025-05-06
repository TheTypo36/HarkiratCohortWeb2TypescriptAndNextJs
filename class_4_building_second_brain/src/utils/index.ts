export function random(len: number) {
  let options = "equriouwoqeiuroi2390qwoieru239";

  let ans = "";
  for (let i = 0; i < len; i++) {
    ans += options[Math.floor(Math.random() * options.length)];
  }

  return ans;
}
