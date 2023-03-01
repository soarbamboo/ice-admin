FROM node:16-alpine

RUN  mkdir -p /home/ice-admin

WORKDIR /home/ice-admin

COPY  . /home/ice-admin
COPY package.json /home/ice-admin/

RUN npm install -g yarn  --force && yarn config set registry https://registry.npm.taobao.org && yarn  && yarn build

EXPOSE 8092

CMD [ "yarn", "serve" ]
