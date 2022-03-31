rm -r dist
npm run build
cp .env dist
cd dist
pm2 del API
pm2 start server.js --name=API