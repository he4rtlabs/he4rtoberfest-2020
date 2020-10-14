#!/usr/bin/env bash

AVERAGE="$(echo "scale=1; $1 + $2 / 2" | bc -l)"

echo "Média -> $AVERAGE"
