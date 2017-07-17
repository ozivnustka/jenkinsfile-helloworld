pipeline {
    agent any

    stages {
        stage('Initialize') {
            echo 'Initializing...'
            def node = tool name: 'Node-8.1.4', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            env.PATH = "${node}/bin:${env.PATH}"
        }

        stage('Checkout') {
            echo 'Getting source code...'
            checkout scm
        }

        stage('Build') {
            echo 'Building dependencies...'
            sh 'npm i'
        }

        stage('Test') {
            echo 'Testing...'
            sh 'npm test'
        }
    }
}