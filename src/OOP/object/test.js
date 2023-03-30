let obj1 = {
  name: "Alvin",
  age: 18,
  friends: {
    name: "张三",
    age: 18,
    friends2: {
      name: "李四",
      age: 20,
    },
  },
};

let obj2 = {
  name: "Yannis",
  age: 30,
  sex: "女",
  friends: {
    name: "Alvin",
    sex: "男",
    friends2: {
      sex: "女",
    },
  },
};

// import { shallowMerge } from "./shallow-merge";
// shallowMerge(obj1, obj2);
// console.log("浅合并", obj1);

// import { deepMerge } from "./deep-merge";
// deepMerge(obj1, obj2)
// console.log('深合并', obj1)

// import { shallowClone1, shallowClone2 } from "./shallow-clone";
// const obj = shallowClone2(obj1);
// console.log("浅克隆", obj, obj1);

import { deepClone } from "./deep-clone";
const obj = deepClone(obj2);
console.log("深克隆", obj, obj2);
