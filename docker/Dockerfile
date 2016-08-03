FROM mhart/alpine-node
MAINTAINER Josh Souza [I.Write@CodeThat.Rocks]
RUN apk add --update make gcc g++ python git
RUN npm install -g deployd
WORKDIR /var/www/
RUN apk del make gcc g++ python && \
   rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp
# RUN dpd create tracker
WORKDIR /var/www/tracker/
EXPOSE 8000
CMD dpd -H app_mongo -P 27017 -p 8000 -d