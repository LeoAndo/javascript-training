const array1 = [1, 2, 3, 4, 5];
const array2 = array1.filter(function (value) {
    return value % 2 === 0;
});
alert(array2);