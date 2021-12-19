#! /bin/sh

if [ $NODE_ENV == "production" ] 
then 
    npm run migrate:latest
    npm run start
else
    npm run migrate:latest
    npm run dev
fi