#!/bin/bash
echo "Starting ... "
set x

REPO="`pwd`/repo"

function enterDir {
  echo "Entering $1"
  pushd $1 > /dev/null
}

function leaveDir {
  echo "Exiting"
  popd > /dev/null
}

function complieProto {
    for dir in */; do
        if [ -f $dir/.protolangs ]; then
            while read lang; do
                target=${dir%/*}
                mkdir -p $REPO/$lang
                rm -rf $REPO/$lang/$target
                mkdir -p $REPO/$lang/$target
                mkdir -p $REPO/$lang/$target/doc

                echo "  Compiling for $lang"
                docker run -v `pwd`:/defs namely/protoc-all -f $target/service.proto -l $lang --with-docs --lint $([ $lang == 'node' ] && echo "--with-typescript" || echo "--with-validator")

                cp -R gen/pb-$lang/$target/* $REPO/$lang/$target
                cp -R gen/pb-$lang/doc/* $REPO/$lang/$target/doc
                sudo rm -rf gen

            done < $dir/.protolangs
        fi
    done
}

function complie {
  echo "Starting the Build"
  mkdir -p $REPO
  for dir in services/; do
    enterDir $dir
    complieProto $dir
    leaveDir
  done
}

complie
