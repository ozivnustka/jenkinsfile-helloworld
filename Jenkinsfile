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
        stage('Infra') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}