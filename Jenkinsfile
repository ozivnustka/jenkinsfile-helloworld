pipeline {
    agent any
    tools {
        nodejs 'nodejs8'
    }
    stages {
        stage('Init') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}