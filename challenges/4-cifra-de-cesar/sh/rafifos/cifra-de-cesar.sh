#!/usr/bin/env bash

ALPHABET=$(echo {A..Z} | sed -r 's/ //g')
CYPHER=$(echo "$ALPHABET" | sed -r "s/^.{$2}//g")$(echo "$ALPHABET" | sed -r "s/.{$((26 - "$2"))}$//g")

tr '[:upper:]' "$ALPHABET" <<<"$1" | tr "$CYPHER" "$ALPHABET"
