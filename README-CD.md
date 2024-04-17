# Project Overview

This project will generate tags using semantic versioning and push docker images to Docker Hub. 

## How to Generate a tag in git / GitHub

To generate a tag in git:
- Use the command `git tag vX.X.X` with X being the major, minor, and patch numbers respectively.
- Once the tag is created, push it to the repository using `git push origin v[tag]`
- This will add the tag to your repository and the github workflow will add the new tag to Docker Hub

## How to Install Docker to an Instance

To install docker on an instance, follow the instructions on the Docker documentation: [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## Container Restart Script

