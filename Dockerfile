FROM ghcr.io/puppeteer/puppeteer:22.7.0

ARG NODE_ENV=production

WORKDIR /service

COPY package.json /service/package.json
COPY yarn.lock /service/yarn.lock

RUN yarn install --frozen-lockfile;

# Copy app source
COPY . .

# set your port
ENV PORT 2305

# expose the port to outside world
EXPOSE 2305

# start command as per package.json
CMD ["node", "src/index"]