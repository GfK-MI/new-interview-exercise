# Interview Exercise

## 1. Run the applications
Install dependencies, run this from the root dir, it will install dependencies for both subprojects (backend and frontend)
```bash
npm install
```

Open two terminal windows:

Terminal 1
```bash
cd backend
npm start
```

Terminal 2
```bash
cd frontend
npm start
```

you now have the application running. You can test this by hitting the api:
```bash
curl http://localhost:8000 | jq
```

or by accessing the frontend at [https://localhost:3000](http://localhost:3000)

## 2. Run Example integration test

Terminal 3
```bash
cd test
npm test
```

## 3. Write new tests for:
TBD