# todo_app_vue_express

backend/ 直下に .env ファイルを作成してください.
内容は, postgres の ユーザ名, パスワード, DB名 を設定してください.
```
DB_USER=""
DB_PASS=""
DB_NAME=""
```

動作確認
```
$ postgres -D /usr/local/var/postgres
$ cd backend
$ npm i
$ node npm_scripts/create_db.js
$ sequelzie db:migrate
$ npm start
```
access http://localhost:3000
