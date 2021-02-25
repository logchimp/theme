ARG NODE_VERSION=latest

# build
FROM node:${NODE_VERSION} as build-stage

RUN echo "Settings node v${NODE_VERSION}"

WORKDIR /logchimp
COPY package.json yarn.lock ./

RUN yarn
COPY ./ .

RUN yarn build

# production
FROM nginx as production-stage

RUN mkdir /logchimp

COPY --from=build-stage /logchimp/dist /logchimp
COPY nginx.conf.template /etc/nginx/nginx.conf.template

CMD ["/bin/sh", "-c", "envsubst '$VUE_APP_SERVER_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]
