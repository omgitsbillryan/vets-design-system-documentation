FROM jekyll/builder:3.8

RUN npm install -g s3-cli

WORKDIR /srv/jekyll