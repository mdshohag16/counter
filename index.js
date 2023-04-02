const count = document.getElementById("count");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
const add = document.getElementById("add");

add.addEventListener("click", () => {
  count.innerHTML++;
});
sub.addEventListener("click", () => {
  count.innerHTML--;
});
reset.addEventListener("click", () => {
  count.innerHTML = 0;
});
