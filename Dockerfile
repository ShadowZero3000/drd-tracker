FROM mhart/alpine-node
MAINTAINER Josh Souza [I.Write@CodeThat.Rocks]
RUN apk add --update make gcc g++ python git
RUN npm install -g deployd
WORKDIR /var/www/
RUN apk del make gcc g++ python && \
   rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp
RUN mkdir /opt/node_modules -p && rm node_modules -rf
RUN ln -s /opt/node_modules node_modules
RUN npm link deployd
RUN npm install
# RUN dpd create tracker
# WORKDIR /var/www/
EXPOSE 8000
# The sleep lets you connect to it if it dies
CMD dpd -H app_mongo -P 27017 -p 8000 -d || sleep 3600