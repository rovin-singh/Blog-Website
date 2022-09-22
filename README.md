# Heruku With Backend 
### How To deploy 
     1. in the "start" script, in package.json, have - "node index.js"
     2. .gitignore file - node_modules/ .env
     3. git init
     4. git status
     5. heroku login -> browser opens -login -> come back to CLI
     6. git add .
     7. git status
     8. git commit 
     9. heroku create
     10. git push heroku master

     1. Go to heroku dashboard
     2. click on our app
     3. go to settings
     4. go to config vars
     5. add the env files
     6. restart your app
     7. MORE -> Restart all dynos
