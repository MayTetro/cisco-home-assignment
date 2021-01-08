# Project-web
web app that integrate with Reddit's Api.
The project built on Angular + nodejs Express 


## Running locally
- git clone https://github.com/MayTetro/cisco-home-assignment.git

### Running the server locally
- npm install
- add .env file that contain  the following(Credentials Config
  for reddit)- 
  USER_AGENT= ?
  CLIENT_ID= ? 
  CLIENT_SECRET= ?
  REFRESH_TOKEN= ?
- npm run start-dev

### Running the client locally
- cd client-side
- npm install
- npm run start-dev

## How the application works
The application ask for subreddit name from the user,
once the user search for the subreddit client side perform http 
request with the subreddit name as parameter.
the server side get the requested subreddit, retrieve the top
articles from Reddit's api and return them to the client side
where they are displayed.

### heroKu
- https://newappmyapp.herokuapp.com/


