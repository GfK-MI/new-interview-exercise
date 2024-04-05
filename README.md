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

## 2. Serve the frontend
Open a separate terminal

```bash
cd frontend
npm start
```

You can access the frontend at [https://localhost:3000](http://localhost:3000)

## 3. Run Example integration test

### Terminal 3
#### via CLI
```bash
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
Feature: Verify Sorting and Revenue Share Calculation in Brand Leaderboard Table

Background: The Brand Leaderboard table displays a list of brands, their revenue, units sold, average price, and revenue share. The revenue share is a crucial metric, calculated as the brand's revenue as a percentage of the total revenue across all brands. Users need to sort the table based on different columns to analyze the data effectively.

Requirement:

Scenario: Sorting the Brand Leaderboard table and verifying revenue share calculations

Given the Brand Leaderboard table is populated with multiple brands, each with respective revenues, units sold, and average prices

When the user sorts the table by the "Revenue" column in ascending order

Then the brands should be listed in the table in ascending order based on their revenue

And the revenue share for each brand should be correctly calculated as (brand's revenue / total revenue) * 100

And the sum of all revenue shares in the table should be approximately 100%
```
<br>

# FAQ 
> What is a 'Brand Table'?

This is what we call a Brand Leader Board. It represents the best performing Brands within a Market. 

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
