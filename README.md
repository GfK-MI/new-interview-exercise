# Interview Exercise

## Details
This interview is designed to test your understanding of writing integration tests. There is boilerplate code to get started but you should apply your understanding of good framework structure, good test structures and good coding standards. Rememer this is an exercise designed for SDETs it is just as important to apply good testing practices as it is coding standards. 

An FAQ is provided at the bottom of this README for additional help.

<br>

# Getting Started
## 1. Install Dependencies
Install dependencies, run this from the root dir, it will install dependencies for both subprojects (backend and frontend)
```bash
npm install
npm run cypress-install
```

## 2. Serve the frontend and start the backend app
Open two terminal windows, one to serve the frontend and one for the backend:

### Terminal 1
```bash
cd backend
npm start
```

### Terminal 2
```bash
cd frontend
npm start
```

you now have the application running. You can test this by hitting the api:
```bash
curl http://localhost:8000 | jq
```

or by accessing the frontend at [https://localhost:3000](http://localhost:3000)

## 3. Run Example integration test

### Terminal 3
#### via CLI
```bash
cd test
npm test
```

#### via cypress interactive runner
```
npm run cypress-open
```
<br>


# The exercise
**Write one or more tests that satisfies the following test scenario**
```gherkin
Given I navigate to the Brand Table
When I sort by revenue descending 
Then the brands are correctly ordered by revenue
```
<br>

# FAQ 
> What is a 'Brand Table'?

This is a representative insight that we have built for our customers. It simply shows the performance of each brand that sells products within a specific market. In this case, Flat Panel TVs in GreatBritain within a specific time period.

Whilst this data is not 'real' it is representative.

-----

> Can I use the internet?

yes, but copying and pastng from StackOverflow and crossing your fingers will lose points.

-----

> What if I get stuck?

This is a pairing exercise; ask for help, talk through your thinking. We are looking for team members not test monkeys.

----

> I have never used Cypress, can I use another UI test tool?

No, we have included the example helper tests that Cypress provides out of the box. They are in `cypress/integration/examples/`. Again, use your pairing partner. 