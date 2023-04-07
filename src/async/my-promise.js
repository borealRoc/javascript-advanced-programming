class MyPromise {
  static PENGING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(fn) {
    this.PromiseState = MyPromise.PENGING;
    this.PromiseResult = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.PromiseState === MyPromise.PENGING) {
      this.PromiseState = MyPromise.FULFILLED;
      this.PromiseResult = result;
      this.onFulfilledCallbacks.forEach((cb) => cb(result));
    }
  }

  reject(reason) {
    if (this.PromiseState === MyPromise.PENGING) {
      this.PromiseState = MyPromise.REJECTED;
      this.PromiseResult = reason;
      this.onRejectedCallbacks.forEach((cb) => cb(reason));
    }
  }

  then(onFulfilled, onRejected) {
    let p2 = new MyPromise((resolve, reject) => {
      if (this.PromiseState === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            if (typeof onFulfilled === "function") {
              const x = onFulfilled(this.PromiseResult);
              resolvePromise(p2, x, resolve, reject);
            } else {
              resolve(this.PromiseResult);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.PromiseState === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            if (typeof onRejected === "function") {
              const x = onRejected(this.PromiseResult);
              resolvePromise(p2, x, resolve, reject);
            } else {
              reject(this.PromiseResult);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.PromiseState === MyPromise.PENGING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onFulfilled === "function") {
                const x = onFulfilled(this.PromiseResult);
                resolvePromise(p2, x, resolve, reject);
              } else {
                resolve(this.PromiseResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onRejected === "function") {
                const x = onRejected(this.PromiseResult);
                resolvePromise(p2, x, resolve, reject);
              } else {
                reject(this.PromiseResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return p2;
  }
}

function resolvePromise(p2, x, resolve, reject) {
  if (p2 === x) {
    reject(new TypeError(``));
  }
  if (x instanceof MyPromise) {
    x.then((y) => resolvePromise(p2, y, resolve, reject), reject);
  } else if (x !== null && (typeof x === "function" || typeof x === "object")) {
    let then;
    try {
      then = x.then;
      if (typeof then === "function") {
        let called = false;
        try {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              resolvePromise(p2, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } catch (error) {
          if (called) return;
          called = true;
          reject(error);
        }
      } else {
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    resolve(x);
  }
}

MyPromise.deferred = function () {
  let result = {};
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};

module.exports = MyPromise;
