FROM ubuntu
RUN apt-get update -y \
    && apt-get install -y nginx
COPY s24cicd-MattM1234/website/index.html /var/www/html
EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]
