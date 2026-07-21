#!/usr/bin/env bash
set -e

cd /home/ubuntu/DTWebsite

git fetch origin
git reset --hard origin/main

npm install
npm run build

sudo rsync -a --delete dist/ /var/www/DTWebsite/dist/
sudo chown -R www-data:www-data /var/www/DTWebsite/dist
sudo systemctl reload nginx

echo "✅ DTWebsite Deploy OK"
