## React Test App
A simple app for practicing testing stuff in React.

### Development
```bash
$ docker-compose up -d
```
The above command creates a couple of containers, one for displaying the app in the browser and the other for running the tests.
```bash
$ docker ps
$ docker logs {CONTAINER ID}
```
You can visit [http://localhost:3000](http://localhost:3000) to see the app.

### Tests
In order to run the tests you can execute the test commands directly in the container:
```bash
$ docker exec -ti {TEST CONTAINER ID} npm run test
$ docker exec -ti {TEST CONTAINER ID} npm run test:integration
```

