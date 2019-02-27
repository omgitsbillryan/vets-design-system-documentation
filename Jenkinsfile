pipeline {

  agent {
    //label 'vetsgov-general-purpose'
    dockerfile true
  }

  // npm creates the '.npm/' folder relative to $HOME which jenkins
  // does not set automatically which results in:
  //   Error: EACCES: permission denied, mkdir '/.npm'
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

      }
    }
  }
}