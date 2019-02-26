pipeline {

  agent {
    //label 'vetsgov-general-purpose'
    dockerfile {
      args '-u 0:0'
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
        sh 'mkdir -p _site_build/'
        sh 'touch _site_build/404.html'
        sh 'jekyll build --destination _site_build/'
      }
    }

    stage('Tar assets and upload to S3') {
      steps {
        sh 'tar -cf _site.tar.bz2 _site_build/'

      }
    }
  }
}