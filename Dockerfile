FROM ghcr.io/puppeteer/puppeteer:22.7.0

ARG NODE_ENV=production

WORKDIR /service

# Install backend dependencies first to leverage Docker layer cache.
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Install frontend dependencies separately so we can build the static bundle.
COPY client/package.json client/package-lock.json ./client/
WORKDIR /service/client
RUN npm install --unsafe-perm

# Copy the full source tree and build the frontend bundle.
WORKDIR /service
COPY . .
WORKDIR /service/client
RUN npm run build

# Final runtime configuration.
WORKDIR /service
ENV PORT 2305
EXPOSE 2305
CMD ["node", "src/index"]
