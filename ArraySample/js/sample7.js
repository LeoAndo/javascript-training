const array1 = [1, 2, 3, 4, 5];
// 合計値を求めるならreduceメソッドを使う方が良い
const sum = array1.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
alert(sum);