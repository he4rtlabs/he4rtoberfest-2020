#!/usr/bin/env bash

AREA="$(echo "scale=1; ($1 + $2) * $3 / 2" | bc -l)"

echo "A área do trapézio é: $AREA"
