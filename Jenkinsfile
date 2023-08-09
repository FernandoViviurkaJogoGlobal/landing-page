pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                branch 'develop'
            }
            steps {
                sh 'git clean -fdx'
                sh 'chmod +x build && bash build'
            }
        }
    }
}
