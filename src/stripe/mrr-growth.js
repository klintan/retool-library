/*
Transformer for MRR over time for Stripe. 

Stripe API
Operation: GET /v1/susbscriptions

*/


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var currentMonth = new Date().getMonth()
var mrr = new Array(12).fill(0);


for(var i = 0; i < data.response.data.data.length; i++) {
  var d = new Date(data.response.data.data[0].start_date * 1000); 
  mrr[d.getMonth()] += data.response.data.data[0].plan.amount / 100
}


return mrr.slice(0,currentMonth+1)