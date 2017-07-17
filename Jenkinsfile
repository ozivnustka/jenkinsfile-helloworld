pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                echo 'Initializing...'
                def node = tool name: 'Node-8.1.4', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                env.PATH = "${node}/bin:${env.PATH}"
            }
        }

        stage('Checkout') {
            steps {
                echo 'Getting source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building dependencies...'
                sh 'npm i'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}