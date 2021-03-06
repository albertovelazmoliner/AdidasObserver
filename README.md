# AdidasObserver
[![Build Status](https://travis-ci.com/albertovelazmoliner/AdidasObserver.svg?branch=master)](https://travis-ci.com/albertovelazmoliner/AdidasObserver)

API Doc is available with the document openapi.yaml

You can view it on: https://editor.swagger.io/

CI is connected with Travis CI

It's implemented with node.js and typescript


Prerequisites:
You need to get an API KEY for google maps, geocode API:
- https://developers.google.com/maps/documentation/geocoding/overview

You need to get an API KEY from NASA for your API:
- https://api.nasa.gov/

This API KEY from NASA will be the authentication api_key used in calls to the /image endpoint

Install docker and start docker
- https://www.docker.com/products/docker-desktop

Install minikube
- https://minikube.sigs.k8s.io/docs/start/

You need to create a certificate in order to have an https server. Then, you have to put the cert and key files on folder src/config:

src/config/cert.pem
src/config/key.pem

If you want to run the app on local you need to create an .env file with values for the GOOGLE_MAPS_API_KEY and NASA_API_KEY

------------------------------------------------
_**.env**_

_GOOGLE_MAPS_API_KEY=<GOOGLE_MAPS_API_KEY VALUE>_

_NASA_API_KEY=<NASA_API_KEY VALUE>_

-------------------------------------------------

**Steps**:

- Create docker image of the nodejs app:

    **docker build -t adidas-observer .** ⏎

- Start minikube

    **minikube start** ⏎

- Add adidas-observer image to minikube cache:

    **minikube cache add adidas-observer:latest** ⏎

- Check adidas-observer:latest has been added to minikube cache:

    **minikube cache list** ⏎

- Before deploying the pod it's neccessary to replace the placeholder for both env variables you got from https://developers.google.com/maps/documentation/geocoding/overview and https://api.nasa.gov/

    - name: GOOGLE_MAPS_API_KEY
     value: "<GOOGLE_MAPS_API_KEY VALUE>"
    - name: NASA_API_KEY
     value: "<NASA_API_KEY VALUE>"

- After replacing values you can continue with the deploy.

- Deploy adidas:observer:latest with a pod

    **kubectl apply -f pods/adidas-deployment.yaml** ⏎

    _deployment.apps/adidas-deployment created_

- Check pods are ok:

   **kubectl get pods** ⏎
 
   NAME | READY | STATUS | RESTARTS | AGE
   ---- | ----- | ------ | -------- | ---
   _adidas-deployment-9976d869d-bh549_ | _1/1_ | _Running_ | _0_ | _16s_
   _adidas-deployment-9976d869d-zhmt4_ | _1/1_ | _Running_ | _0_ | _16s_

- Expose adidas service
    **kubectl expose deployment adidas-deployment --type=LoadBalancer --port=3000** ⏎

    _service/adidas-deployment exposed_

- Open service
    **minikube tunnel** ⏎

- Service is available now

service endpoint: 
https://127.0.0.1:3000/image

status endpoint:
https://127.0.0.1:3000/api
