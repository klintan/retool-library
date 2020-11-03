# retool-library
A repository including a bunch of recipes (queries and transformers) for Retool

## Background
Retool is a great tool for building internal tools and Dashboards. We wanted all our important business KPI:s in one place: MAU, MRR, weekly growth, monthly growth, total number of customers etc. 

Stripe has a great dashboard with most of these, however we also wanted to include usage data exported from Segment and connect to our application MySQL database for MAU etc. This is exactly what Retool enables!

To build these in Retool you connect to your datastore or API and then you use their visual editor to add queries and transformers for your data. Included here are some transformers that you can use to add some of the KPI we added immediately.

If you have any improvements or want to add some KPI:s that would be super useful and awesome! Feel free to add a PR or create an issue. Many of these KPI:s are in their first version and some limitations etc that could def benefit from some improvements.

## Available KPI:s
Many transformers will of course be unique to your data, but the Stripe API is the same for everyone that is why most are for Stripe :)

#### Stripe

- MRR - current montly recurring revenue
- MRR growth - MRR over time to be plotted in line chart
- Monthly MRR growth - Percentage of monthly growth of MRR
- Weekly MRR growth - Percentage of weekly growth of MRR



## Future and additions
Some KPI:s that we will add are 
- Gross churn
- LTV

Some additional KPI:s not related to Stripe might come up as well, but might be of less interest to the public since they might be coupled to your schema and particular data.