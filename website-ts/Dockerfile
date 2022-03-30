FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
COPY . ./next
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]

