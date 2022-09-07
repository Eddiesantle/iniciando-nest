FROM node:16.16.0-slim

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh" ]

