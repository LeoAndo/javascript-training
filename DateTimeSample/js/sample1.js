const now = new Date(); // 現在の日付でDateオブジェクトを生成
// 年の情報を取得する
document.write('getFullYear: ' + now.getFullYear() + '<br>');
document.write('getMonth: ' +  (now.getMonth()+1) + '<br>'); // getMonthは 0-11を返す
document.write('getDate: ' +  now.getDate() + '<br>');
// 曜日の情報を取得する
const currentDoW = now.getDay(); // 曜日を 0-6で取得
const DAY_ARRAY = ['日', '月', '火', '水', '木', '金', '土'];
const currentDoWStr = DAY_ARRAY[currentDoW];
document.write('getDay: ' + currentDoWStr + '<br>')


