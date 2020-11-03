/*
Transformer for MRR or Monthly Recurring Revenue for Stripe. 

Stripe API
Operation: GET /v1/susbscriptions

*/

mrr = 0
for(var i = 0; i < data.response.data.data.length; i++) {
  mrr += data.response.data.data[0].plan.amount / 100
}
return mrr