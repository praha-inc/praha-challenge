#!/bin/bash
set -e

initialize() {
  yarn
}

mkcdir ()
{
  # mkdir -p: ディレクトリがなければ作成する
  # cd -P: シンボリックリンクによる論理的なパスではなく実際のパスをたどる
  # 引数を "" で囲っておかないと、仮に$1の中に"hoge fuga"といったスペースが含まれていたら、複数の引数としてパースされてしまう
  # -- をつけておかないと、例えば$1が "-a" だった時に、ディレクトリ名ではなくコマンドオプションとして渡されてしまう
  mkdir -p -- "$1" && cd -P -- "$1"
}

CURRENT_DIR=$PWD
DIR=$1

if [ $DIR ]
then
  echo "initializing project at $DIR"
  echo "current directory: $CURRENT_DIR"

  mkcdir $DIR
  mkdir src
  cp "$CURRENT_DIR/src/index.ts" "src/index.ts"
  cp "$CURRENT_DIR/package.json" "package.json"
  cp "$CURRENT_DIR/.eslintrc.json" ".eslintrc.json"
  cp "$CURRENT_DIR/tsconfig.json" "tsconfig.json"
  cp "$CURRENT_DIR/jest.config.js" "jest.config.js"
  cp "$CURRENT_DIR/ormconfig.js" "ormconfig.js"
  initialize
else
  echo "please specify target directory"
fi
