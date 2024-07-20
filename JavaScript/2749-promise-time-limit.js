var timeLimit = function (fn, t) {

  return (...args) => {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    const fnPromise = fn(...args);

    return Promise.race([fnPromise, timeoutPromise]);
  };
};
