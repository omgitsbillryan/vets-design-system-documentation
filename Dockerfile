FROM jekyll/builder:3.8

RUN groupadd --gid 504 jenkins \
  && useradd --uid 504 --gid jenkins --shell /bin/bash --create-home jenkins

RUN npm config set unsafe-perm true && npm install -g s3-cli

RUN mkdir -p /application

WORKDIR /application

USER jenkins