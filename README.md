# smart-garage

This is the frontend service for [smart-garage-backend](https://github.com/husain3/smart-garage-backend) and is dependent on that service for live garage data.

With this service, you will be able to:

* Open and close the garage door remotely
* View the live open/close status of the garage door
* View the usage history of garage door (both from app and other sources)
* View the temperature and relative humidity of the garage
* View a live camera feed of the garage area [In Development]

PLEASE NOTE: Project is implemented using a [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Docker

To run a development server using Docker, run the following:

```
docker build -t smart-garage:latest .
```

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    smart-garage:latest
```

To run the production server:

```
docker build -f Dockerfile.prod -t smart-garage:prod .
docker run -d --restart always -it -p 5000:80 smart-garage:prod
```
IMPORTANT NOTE: In order to build and run new changes on production server, follow this:

https://javahowtos.com/guides/124-docker/414-solved-cannot-kill-docker-container-permission-denied.html

IMPORTANT NOTE: In order to build and run new changes on production server, follow this:

https://javahowtos.com/guides/124-docker/414-solved-cannot-kill-docker-container-permission-denied.html

## Available Scripts

Once you clone the repository, in the smart-garage directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run the production build:
yarn build
serve -p 5000 build

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
