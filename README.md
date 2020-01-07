# Ipl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Create Docker image

`docker build -t iplangularapp:latest .`
and then tag it
`docker tag iplangularapp ashishmrm/iplangularapp:latest`
and then push it to the dockerhub
`docker push ashishmrm/iplangularapp`
you can try running it as well
`docker run -p 80:80 iplangularapp:latest`

## Run on AZ AKS

To get the cluster info : 
`az aks get-credentials --resource-group=Dev --name=iplangularappcluster`
View info on service, nodes, pods :
`kubectl get service | pods | nodes`
Aply the yaml file
`kubectl apply –f ipldoc.yaml`
This will create and start the service. 

