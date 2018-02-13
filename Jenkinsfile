#!groovy

def version   = "0.0.${env.BUILD_NUMBER}"
def imageName = "dlish/playground"

node('docker') {
    checkout scm

    def image = docker.build("$imageName:$version")
}
