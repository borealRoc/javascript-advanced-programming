export let a = 10;
setTimeout(() => {
  a += 10;
}, 1000);

export default function foo() {
  console.log("默认导出");
}
