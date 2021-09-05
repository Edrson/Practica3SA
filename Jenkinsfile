pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/Edrson/Practica3SA'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}