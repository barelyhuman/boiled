FROM node:16-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x "./scripts/docker_start.sh"

CMD [ "sh","./scripts/docker_start.sh" ]
