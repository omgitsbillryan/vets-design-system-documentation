FROM jekyll/builder:3.8

RUN npm config set unsafe-perm true && npm install -g s3-cli

WORKDIR /srv/jekyll