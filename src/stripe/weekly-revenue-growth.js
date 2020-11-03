/*
Transformer for Weekly revenue growth in percent for Stripe. 

Stripe API
Operation: GET /v1/susbscriptions

*/


var today = new Date()
var currentWeekEnd = today.getDay()
var currentWeekStart = currentWeekEnd - 7
var previousWeekStart = previousWeekStart - 7

var mrrCurrent = 0.01
var mrrPrevious = 0.01

for(var i = 0; i < data.response.data.data.length; i++) {
  var d = new Date(data.response.data.data[0].start_date * 1000);
  var subscriptionDay = d.getDay()
  if (subscriptionDay >= currentWeekStart) {
      mrrCurrent += data.response.data.data[0].plan.amount / 100
  } else if (subscriptionDay >= previousWeekStart && subscriptionDay <= currentWeekStart) {
      mrrPrevious += data.response.data.data[0].plan.amount / 100
  }
}
return ( mrrCurrent - mrrPrevious ) / mrrCurrent * 100 