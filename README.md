# NodeJS/Hapi Back End - Full Stack Classified Listings Site

## Project - Compare Angular to React
This is the NodeJS/Hapi back end of a full stack classifieds listing site, which I built to compare to a similar React app. All of it was hand coded by me, while following a LinkedIn Learning course, instructed by Shaun Wassell. The site was deployed as a Google Cloud App, using Firebase for Google Authentication, and utilizes a GCP hosted MySQL instance.

## Technology Overview
* Front End
  * Angular 16.1.3
    * `npm install -g @angular/cli`
  * Firebase 9.23.0 - Authentication (Google Auth)
    * `npm install @angular/fire firebase`
  * RxJS - Observables and Async to call APIs
    * `npm install rxjs`
* Back End
  * NodeJS
  * hapi - API server
    * `npm install @hapi/hapi`
  * babel - ES6 JS support
    * `npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/plugin-transform-runtime`
    * `npm install --save-dev @babel/preset-present-env`
    * `npm install @babel/runtime`
    * `npm install --save-dev @babel/cli`
  * Firebase 9.23.0 - Authentication (Google Auth)
    * `npm install firebase-admin`
  * nodemon - Hot Deploy
    * `npm install --save-dev nodemon`
  * Boom - Error handling
    * `npm install @hapi/boom`
  * Inert - Host Static Front End Content
    * `npm install @hapi/inert`
  * MySQL - DB
    * `npm install mysql`
  * UUID - PK for Inserts
    * `npm install uuid`
  * DotEnv - Environment Variables Support
    * `npm install dotenv`
* Database
  * MySQL - Started with a local instance, then moved to GCP
    * Connection params need to either use host or socketPath, but both cannot be set or it will hang on startup
      * local DB - use `host`
      * GCP DB - use `socketPath`

## DDL
This project has only one simple table.
```sql
CREATE TABLE `listings` (
  `id` varchar(36) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
)
 ```

## Resources
* LinkedIn Learning Instructor - Shaun Wassell
  * https://www.linkedin.com/learning/instructors/shaun-wassell
* LinkedIn Learning Course - Angular: Creating and Hosting a Full Stack Site
  * https://www.linkedin.com/learning/angular-creating-and-hosting-a-full-stack-site/front-end-to-back-end-creating-and-hosting-a-full-stack-site
    * Thorough course, but a bit outdated
    * It may take some research to work around some issues, but that what developers do, right?
    * The Q/A section offered some help and also some bad advice (like turning off strict compile enforcement).


