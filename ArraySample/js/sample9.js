const array1 = [1, 2, 3, 4, 5];

// every sample
alert(
    array1.every(function (value) {
        return value >= 3;
    })
);
alert(
    array1.every(function (value) {
        return value >= 0;
    })
);

// some sample
alert(
    array1.some(function (value) {
        return value >= 3;
    })
);
alert(
    array1.some(function (value) {
        return value >= 0;
    })
);