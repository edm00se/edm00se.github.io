FROM node:alpine
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
COPY . .
RUN npm run build
RUN cp public/404.html dist/.
RUN npm run build:sw
RUN mv dist/ /public
