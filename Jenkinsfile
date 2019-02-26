pipeline {

  agent {
    dockerfile {
      // clever hack'ish way to give 'jekyll' user proper permissions
      args '-v /etc/passwd:/etc/passwd -v /etc/group:/etc/group'
    }
  }

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
        sh 'jekyll build'
      }
    }

    stage('Tar assets and upload to S3') {
      steps {
        sh 'tar -cf _site.tar.bz2 _site/'

      }
    }
  }
}