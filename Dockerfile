# FROM node:16.16.0-slim

# RUN npm install -g @nestjs/cli && npm update -g

# USER node

# WORKDIR /home/node/app

# COPY . .

# CMD [ "/home/node/app/start.sh" ]




###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /home/node/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=build /home/node/app/dist ./dist
# CONEXÃO COM BUCKET
COPY --chown=node:node --from=build /home/node/app/apis-backend-880b0b1f87c7.json ./dist



CMD [ "node", "dist/main.js" ]
