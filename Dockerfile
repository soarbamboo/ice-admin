FROM node:16-alpine

RUN  mkdir -p /home/ice-admin

WORKDIR /home/ice-admin

COPY  . /home/ice-admin
COPY package.json /home/ice-admin/
# COPY yarn.lock /home/ice-admin/

# RUN apk update && apk upgrade && apk add --no-cache git 
# RUN apk install -y procps
# RUN apk add --update git
# - apk add --update nodejs npm

RUN npm install -g yarn  --force && yarn config set registry https://registry.npm.taobao.org && yarn  

EXPOSE 8092

CMD [ "yarn", "start:pre" ]
