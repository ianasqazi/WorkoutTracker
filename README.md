# **WorkoutTracker**

Manage your workout with dashboards using EXPRESS.js.

> AS A user
>
> I WANT to be able to view, create and track daily workouts.
>
> SO THAT I can track the name, type, weight, sets, reps and duration of exercise.

## HEROKU DEPLOYED LINK

Click the link below to check the APP :
[HOROKU LINK](https://intense-shore-05475.herokuapp.com/)

## Repository

Click the link below to check the repository :
[GitHub URL](https://github.com/ianasqazi/WorkoutTracker)

## Preview

![HOME_PAGE](/screenshots/homepage.png)

![STATS_PAGE](/screenshots/statspage.png)

## Requirements

For testing, you will need Node.js and node global package, and also the following dependency packages installed in your environement.

### NPM Packages

- EXPRESS
- DOTENV
- MONGOOSE
- MORGAN

## Running the Application

1. Run the following commands in your terminal window

```bash
git clone https://github.com/ianasqazi/WorkoutTracker.git

cd WorkoutTracker

npm install
```

2. Run the seeder file if running on local machine or app connected on HEROKU - JAWS DB

```bash
node seeders/seed.js
```

All packages will be installed and now run the application with the command below :

```bash
node start
```
