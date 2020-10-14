#!/usr/bin/env bash

for i in $(seq 1 $1); do
  echo "==========================="
  echo "A tabuada do numero $i é:"

  for j in $(seq 1 10); do
    echo "$1*$j = $(($1 * $j))"
  done
done
