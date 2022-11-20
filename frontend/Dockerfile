FROM node:19-alpine3.15

# ENV NODE_VERSION 19.1.0

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i  expo

RUN mkdir /opt/react_native_app && chown node:node /opt/react_native_app
WORKDIR /opt/react_native_app
ENV PATH /opt/react_native_app/.bin:$PATH
USER node
COPY ./package.json ./package-lock.json ./
RUN npm update
RUN npm install

WORKDIR /opt/react_native_app/app

COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["web"]