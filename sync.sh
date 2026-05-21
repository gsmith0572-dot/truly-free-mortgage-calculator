#!/bin/bash
set -e
cd "$(dirname "$0")"
git add -A
git commit -m "$1"
git push origin main
