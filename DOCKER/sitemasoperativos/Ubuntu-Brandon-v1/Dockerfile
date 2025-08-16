FROM ubuntu:latest
LABEL maintainer="brandonalexpesantez@gmail.com"
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y curl
RUN apt-get install -y iputils-ping
RUN apt-get install -y telnet
CMD ["tail", "-f", "/dev/null"]