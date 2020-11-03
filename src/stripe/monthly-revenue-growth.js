/*
Transformer for Monthly revenue growth in percent for Stripe. 

Stripe API
Operation: GET /v1/susbscriptions

*/


var today = new Date()
var currentMonthEnd = today.getDay()
var currentMonthStart = currentMonthEnd - 30
var previousMonthStart = previousMonthStart - 30

var mrrCurrent = 0.01
var mrrPrevious = 0.01

for(var i = 0; i < data.response.data.data.length; i++) {
  var d = new Date(data.response.data.data[0].start_date * 1000);
  var subscriptionDay = d.getDay()
  if (subscriptionDay >= currentMonthStart) {
      mrrCurrent += data.response.data.data[0].plan.amount / 100
  } else if (subscriptionDay >= previousMonthStart && subscriptionDay <= currentMonthStart) {
      mrrPrevious += data.response.data.data[0].plan.amount / 100
  }
}
return ( mrrCurrent - mrrPrevious ) / mrrCurrent * 100 