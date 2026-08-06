#!/bin/bash
set -e

git pull
npm install
npm run build
pm2 restart battery-store || pm2 start npm --name "battery-store" -- start
