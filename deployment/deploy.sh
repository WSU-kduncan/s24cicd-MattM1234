#! /bin/bash

# kill the old container process - stopped & then removed
docker stop project5
docker remove project5
# pull fresh image
docker pull mangan21/project4:latest
# run new container by name, with restart automagic
docker run -d -p 80:80 --name project5 --restart always mangan21/project4:latest
