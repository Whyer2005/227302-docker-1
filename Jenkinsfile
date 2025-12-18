pipeline {
    agent any

    stages {
        stage('Pull Docker Image') {
            steps {
                echo 'Waiting for service to initialize...' 
                sleep time: 180, unit: 'SECONDS'
                script {
                    sh '''docker pull whyer2005/my-image-12112025:main'''
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh '''
        
                    if [ "$(docker ps -aq -f name=^/67024964$)" ]; then
                        echo "Found container '67024964'. Restarting..."
                        docker restart 67024964
                    else
                        echo "Container '67024964' not found."
                        docker run --rm -p 4964:3000 --name 67024964 -d whyer2005/my-image-12112025:main
                    fi
                    '''
                }
            }
        }
    }

}

