# Project Overview

This project will generate tags using semantic versioning and push docker images to DockerHub. The project will also start a webhook which will update the docker image to its latest version and message the listener of its success.

## How to Generate a tag in git / GitHub

To generate a tag in git:
- Use the command `git tag vX.X.X` with X being the major, minor, and patch numbers respectively.
- Once the tag is created, push it to the repository using `git push origin v[tag]`
- This will add the tag to your repository and the github workflow will add the new tag to Docker Hub

## How to Install Docker to an Instance

To install docker on an instance, follow the instructions on the Docker documentation: [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## Container Restart Script

- This is needed so that the system is always running the current version of the container
- The container restart script is used to stop and remove the running container, then pull and run its latest version
- On the instance, the script should be kept in the home directory so another user can easily access it

## Setting up a Webhook

- To install adnanh's webhook to the instance, run the command based on your operating system listed on the [website](https://github.com/adnanh/webhook).
- I used Ubuntu on my instance so I ran the command `sudo apt-get install -y webhook`

## Webhook Task Definition File

- The task definition file is used to detail what the webhook will do while it is running
- In my file the webhook runs `deploy.sh`
- On the instance, I stored it under the current user for easy access

## How to Start the Webhook

- To start the webhook, run the command `webhook -hooks [file path] -verbose`
- The file path on my instance was just the file name due to it being located under the user
- This command will start the webhook and it will being listening

## Modify a Webhook Service so that it is Listening as Soon as the System is Started

- To setup the webhook so that it is listening on start, modify the `webhook.service` file
- I changed it within this project to start if `hooks.json` exists and then running the `hooks.json` file
- The service will need to be restarted after the change
- First, use the command `sudo systemctl daemon-reload`
- Then use the command `sudo systemctl restart webhook.service` to restart the service

## How to Configure GitHub and DockerHub to message the listener

- To configure DockerHub, under your repository, add a webhook using the URL address of your website with the webhook attached
- If your webhook is working, updates on success or fail will be displayed
- To configure GitHub, add a webhook under your repository settings using the same format as above for DockerHub
- Github also requires a secret and event specification
- Deliveries can be viewed under the manage webhook tab
