<a href="https://snyk.io/test/github/BoringBears/test-pipeline?targetFile=package.json"><img src="https://snyk.io/test/github/BoringBears/test-pipeline/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/BoringBears/test-pipeline?targetFile=package.json" style="max-width:100%;"></a>

# test-pipeline
##Tech Stack:
AWS EC2, security group, load balancer, nodejs

## Create an EC2 instance - ubuntu 18.04

## setup nodejs:
sudo apt update \
sudo apt -y install nodejs \
sudo apt -y install npm \
nodejs -v \
## git clone demo app to VM
git clone https://github.com/BoringBears/test-pipeline.git

## start node app
nodejs app &

Repeat step 1-4 to create another ec2 instance

## setup an ALB, listen to http 80 and forward to port 8081

## visit ALB DNS hostName
