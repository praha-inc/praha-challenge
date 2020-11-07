#!/bin/bash
echo '変数に値を代入してみましょう'
DIRECTORY='hoge'

echo '---------シェルスクリプトでよく使われる予約語をおさらいしてみましょう-------'
echo '現在のファイル名を出力します'
echo $0
echo 'スクリプト実行時に渡された最初の引数を出力します'
echo $1
echo '渡された引数の数を出力します'
echo $#
echo '渡された引数を、スペース区切りの一つの値として出力します'
echo $*
echo '渡された引数を、それぞれ独立した値として出力します'
echo $@
echo '現在のプロセスのPIDを出力します'
echo $$
echo '最後にバックグランドで実行されたプロセスのPIDを出力します'
echo $!

echo '---------シェルスクリプトで配列を作成してみましょう-------------'
HOGE[0]="1つ目の要素"
HOGE[1]="2つ目の要素"
echo "1つ目の要素: ${HOGE[0]}"
echo "2つ目の要素: ${HOGE[1]}"
# echo "3つ目の要素: ${HOGE[2]}"

echo '全ての配列要素を処理してみよう'

for ITEM in ${HOGE[*]}
do
  echo $ITEM
done

for ITEM in ${HOGE[@]}
do
  echo $ITEM
done

echo "forループはスペースで区切られて文字列と、配列で、同じような動きをします"

echo "空白で区切られた値の場合"
SPLIT_WITH_SPACE="hoge fuga piyo"
for ITEM in $SPLIT_WITH_SPACE
do
  echo $ITEM
done

echo "配列の場合"
SPLIT_WITH_SPACE[0]=hoge1
SPLIT_WITH_SPACE[1]=fuga2
SPLIT_WITH_SPACE[2]=piyo3
for ITEM in ${SPLIT_WITH_SPACE[*]}
do
  echo $ITEM
done

echo '----------------シェルスクリプトで計算をしてみよう---------------'
echo 'bashではなくsh（古い方）では、exprを使って計算を行う必要がある'
KEISAN=`expr 1 + 1`
echo "keisanの値: $KEISAN"

echo "以下を実行すると、1というコマンドは存在しない、というエラーになる"
KEISAN=`1 + 1`
echo "keisanの値: $KEISAN"

echo '----------------シェルスクリプトで条件分岐をしてみよう---------------'
echo 'booleanの判定にはexprを使う必要はない.[ $a == $b ]といった形で比較可能'
TRUEORFALSE=[ 1 == 1 ]
if [ TRUEORFALSE ]
then
  echo "TRUE!"
else
  echo "FALSE!"
fi

echo 'ちなみに数字の比較の場合はeqなどの特別な演算子を利用することも可能'
TRUEORFALSE=[ 1 -eq 1 ]
if [ TRUEORFALSE ]
then
  echo "TRUE!"
else
  echo "FALSE!"
fi


echo '他にもたくさんの比較演算子が存在する'

echo '1は2より小さい: [ 1 -lt 2 ]'
if [ 1 -lt 2 ]
then
  echo 'true! 1 < 2'
else
  echo 'false! 1 >= 2'
fi

echo '2は２より小さい: [ 2 -lt 2 ]'
if [ 2 -lt 2 ]
then
  echo 'true! 2 < 2'
else
  echo 'false! 2 >= 2'
fi

echo '2は2以下: [ 2 -le 2 ]'
if [ 2 -lt 2 ]
then
  echo 'true! 2 < 2'
else
  echo 'false! 2 >= 2'
fi

echo 'シェルスクリプトでもswitch文が書ける'

SOMETEXT='hoge'

case "$SOMETEXT" in
  "hoge") echo 'hogeだよ'
  ;;
  "fuga") echo 'fugaだよ'
  ;;
  "piyo") echo 'piyoだよ'
  ;;
esac

echo 'コマンドラインから渡された引数オプションによって何かを判定する時に便利'

OPTION=$1
echo "OPTION: $OPTION"

case $OPTION in
  "-a") echo '-aのオプションが指定されました'
  echo 'なので-aに即して処理しました'
  ;;
  "-b") echo '-bのオプションが指定されました'
  echo 'なので-bに即して処理しました'
  ;;
  *) echo 'よくわからんオプションが渡されました'
esac

echo '------------シェルスクリプトでループ処理を書いてみよう------------'
