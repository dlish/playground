#!groovy

def version          = "0.0.${env.BUILD_NUMBER}"
def image            = "dlish27/playground"
def nodeVersion      = '9.5.0'

node('docker') {
    def dockerRunNodeCmd = "docker run --rm --user=node -v ${env.WORKSPACE}:/usr/src -w /usr/src/ node:${nodeVersion}"
    def dockerComposeE2e = "docker-compose -f docker-compose-e2e.yml"

    stage('checkout') {
        checkout scm
    }

    stage('yarn install') {
        sh "$dockerRunNodeCmd bash -c 'yarn install && yarn build --production'"
    }

    stage('unit tests') {
        sh "$dockerRunNodeCmd yarn unit"
    }

    stage('e2e tests') {
        def dcCmd = "docker-compose -f docker-compose-e2e.yml"
        try {
            sh "$dockerComposeE2e run --rm e2e"
        } catch(e) {
            throw(e)
        } finally {
            sh "$dockerComposeE2e down"
        }
    }

    stage('build docker image') {
        sh "docker build -t $image:$version ."
    }

    stage('docker publish') {
        sh "docker tag $image:$version $image:latest"

        sh "docker push $image:$version"
        sh "docker push $image:latest"

        sh "docker rmi $image:$version"
    }

}