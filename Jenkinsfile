pipeline {

  agent {
    //label 'vetsgov-general-purpose'
    dockerfile true
  }

  // $HOME defaults to '/' when not set, which results in:
  //   Error: EACCES: permission denied, mkdir '/.npm'
  // jenkins runs docker using '-w <WORKSPACE>', so '.' points
  // to that WORKSPACE
  environment { HOME = '.' }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install npm dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build static site') {
      steps {
        sh 'bundle install && jekyll build'
      }
    }

    stage('Tar assets and upload to S3') {
      steps {
        sh 'tar -cf _site.tar.bz2 _site/'
        // TODO: perform upload to S3
      }
    }
  }
}