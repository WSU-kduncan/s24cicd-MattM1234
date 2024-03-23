# Project 4

## Overview

This project will create a container image from a Dockerfile that will use nginx to host a website on the users local machine.

## How To

- First, Docker must be installed
- To install Docker, download the required file from their website depending on your computers OS
- Any requried dependencies will need to be downloaded as well. I use Windows so I have installed Docker Desktop and WSL
- To build an image, first setup a Dockerfile
- Run the command `docker build -t [name]:[tag]` where [name] is the image name and [tag] is its version
- To run the container, use the command `docker run` followed by any options, then the port number, and the name of the image.
- I used the command `docker run -d -p 80:80 [name]` to run my container
- To view the website, open a browser and enter the localhost IP. If a specific port was specified it should be entered as well.
