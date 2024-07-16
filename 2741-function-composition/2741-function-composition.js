var compose = function (fns) {
    return function (n) {
        let res = n;

        for (let i = fns.length - 1; i >= 0; i--) {
            res = fns[i](res);
        }

        return res;
    };
};