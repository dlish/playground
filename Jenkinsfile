#!groovy

def version  = "0.0.${env.BUILD_NUMBER}"
def image    = "dlish/playground"

node('docker') {
    checkout scm

    def image = docker.build("$image:$version")
}
