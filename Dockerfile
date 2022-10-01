FROM node:16.16.0-slim

RUN npm install -g @nestjs/cli && npm update -g

USER node

WORKDIR /home/node/app

COPY . .

CMD [ "/home/node/app/start.sh" ]

