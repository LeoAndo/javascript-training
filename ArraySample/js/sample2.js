const season = ['bb', 'eeee', 'aaa', 'dddd', 'cc'];
const result = season.sort(); // default 文字コード順でソート
alert(result);

// custom sort.
var sortFunc = function (a, b) {
    return a.length - b.length;
}
const result2 = season.sort(sortFunc); // カスタムソート: 文字列長を優先したソート
alert(result2);