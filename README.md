# Image Resizing app

## Overview
Express based simple http app for uploading images and resizing them

### Config
All configuration is stored in `.env` file which is used both by docker-compose and the app.

### Start
To deploy for local development do:

```
docker-compose up
```

### Test

Preferably inside the container

```
npm test
```
or

```
docker exec {app_container_name} npm test
```
Where `{app_container_name}` is the name of the container (found in `docker ps` for example).

### Todo
* full test coverage
* caching images
* Jenkinsfile for following pipeline `build docker image for production => test & coverage check => push up to dockerhub/ecr`

