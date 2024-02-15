# employee-creator

## Description
This application is used to manage employee's information.
### Purpose
* The purpose of this project was:
    * to build a full-stack application to apply my knowledges in Spring and Next.js
    * to practise RESTfull API  
### Tech Stack
#### FRONTEND
* Next.js
* TypeScript
* Tailwind CSS
#### BACKEND
* Spring Boot
#### DATABASE
* MySQL

## Preview
### Landing page <br>
<img width="500" alt="Screenshot 2023-11-29 at 19 32 18" src="https://github.com/samuel-santos91/employee-creator/assets/107240729/a68a79c4-078f-4d3b-9baf-1009e9cb004b">

### List of employees <br>
<img width="500" alt="Screenshot 2023-11-29 at 19 33 21" src="https://github.com/samuel-santos91/employee-creator/assets/107240729/1543ba8a-16e4-4d54-94ef-52a178a91e64">

### Form to add or edit employees informations <br>
<img width="500" alt="Screenshot 2023-11-29 at 19 34 34" src="https://github.com/samuel-santos91/employee-creator/assets/107240729/75133636-c3a1-416f-a18c-d85b975a69bb">

## About
### Sections
* There are 3 different sections in this app:
  * Landing page
  * Employee's list page
  * Edit/create employee page
### Features
* On the listing page you will have 3 options:
  * Add
  * Edit
  * Remove
* When adding or editing an employee's information, you can fill out all the forms than click on the save button
* All the employee are saved in a <strong>MySQL</strong> database

## React-Hook-Form
This application uses <strong>react-hook-form</strong>
* All data from the form fields are saved and sent to the server via <strong>react-hook-form</strong>
* It also uses <strong>Yup</strong> to handle all the form's validation
  
## Backend repository
Refer to [https://github.com/samuel-santos91/pet-sitting-services-app-backend](https://github.com/samuel-santos91/employee-creator-server)

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/

### Install MySQL
Refer to https://dev.mysql.com/downloads/installer/

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```

The frontend runs on **localhost:3000** <br>
The backend runs on **localhost:8080** 

## Change Logs
### 20/11/2023 to 22/11/2023 - {Creation of the backend with Spring Boot}
* Creates service, repository and controller layers
* Creates entity and DTO

### 23/11/2023 to 25/11/2023 - {Creation of the frontend with Next.js}
* Adds service file with all the API functions
* Creates form with react-hook-form

### 26/11/2023 to 29/11/2023 - {Form validation and styling}
* Edit createDTO file in the backend
* Creates Yup validation schema
* Sets up form error messages

## Future Goals
* Modals to inform when employee was added/edited
* Method to check if employee added already exists in database
* Write tests for both frontend and backend
* Deploy the application using AWS

