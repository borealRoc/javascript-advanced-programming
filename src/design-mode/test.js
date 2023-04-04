import { Observer, Subject } from "./observer-mode";

const ob1 = new Observer("艾尔莎");
const ob2 = new Observer("纳兹");
const sub = new Subject();
sub.addObserver(ob1);
sub.notify();

import { PubSub } from "./publish-subscribe-mode";
const pubsub = new PubSub();
// 弟子一订阅战斗任务
pubsub.subscribe("warTask", function (task) {
  console.log(`执行战斗任务：${task}`);
});
// 弟子一订阅日常任务
pubsub.subscribe("routeTask", function (task) {
  console.log(`执行日常任务：${task}`);
});
//
pubsub.publish("routeTask", "找回丢失的猫");
