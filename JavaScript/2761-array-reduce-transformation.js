var reduce = function(nums, fn, init) {
    let res = init;

    for (const n of nums) {
        res = fn(res, n);
    }

    return res;
};
