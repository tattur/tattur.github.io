/*アクセス数を調べる。まずファイルを使えるようにする。*/
var fs = WScript.CreateObject("Scripting.FileSystemObject");
/*ファイルを読み込む*/
var file_r = fs.OpenTextFile("tattur.github.io/count.txt",1);
var str_count_r = file_r.ReadLine();
file_r.Close();
/*ファイルの文字を数値化し、1増やす*/
m=Number(str_count);
/*onLoadが発動した時に起動する関数*/
function get_session(m){
m=m+1;
/*ファイルに書き込む*/
var file_w = fs.OpenTextFile("tattur.github.io/count.txt",2);
file_w.Write(String(m));
file_w.Close();
}
/*これで数を保存することが可能*/
onLoad=get_session
