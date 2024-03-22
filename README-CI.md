# Project 4

## Overview

This project will create a container image from a Dockerfile that will use nginx to host a website on the users local machine.

## How To

- First, Docker must be installed
- To install Docker, download the required file from their website depending on your computers OS
- Any requried dependencies will need to be downloaded as well. I use Windows so I have installed Docker Desktop for Windows and WSL
- To build an image, first setup a Dockerfile
- Run the command `docker build -t [name]:[tag]` where [name] is the image name and [tag] is its version
- To run the container, use the command `docker run` followed by the container name.
- To view the website, open a browser and enter the localhost IP. 
