## React Test App
A simple app for practicing testing stuff in React.

### Development
```bash
$ docker-compose up -d
```
The above command creates a three containers:
```bash
$ docker ps
```

### web container
Runs the React app on [http://localhost:3000](http://localhost:3000).

### tests container
Runs unit tests:
```
$ docker exec -ti {TEST CONTAINER ID} npm run test
```

### acceptance container
Runs browser tests:
```
$ docker exec -ti {TEST CONTAINER ID} npm run acceptance
```

