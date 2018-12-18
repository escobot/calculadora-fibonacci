# calculadora-fibonacci [![Build Status](https://travis-ci.org/escobot/calculadora-fibonacci.svg?branch=master)](https://travis-ci.org/escobot/calculadora-fibonacci)

La secuencia de Fibonacci es una serie de números.

Fórmula:

``` bash
 F(0)=0; F(1)=1; F(n) = F(n-1) + F(n-2), n>1 
 ```

## Prerequisites
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/#install-compose)

## Docker Setup

``` bash
# start containers
docker-compose up

# (re)build images and start containers
docker-compose up --build

# start containers in background
docker-compose up -d

# stop containers
docker-compose down
```

## Architecture

![image](https://user-images.githubusercontent.com/20388583/50126694-f64bce80-023b-11e9-8b5d-78a9db6981e2.png)
