var final_cost = 0;

var day1 = document.querySelector('.t_day1');
var day2 = document.querySelector('.t_day2');
var day3 = document.querySelector('.t_day3');
var transport = document.querySelector('.i_transport')

var cost_display = document.querySelector('#cost_value')

day1.addEventListener('change', function() {
    if (this.checked) {
      final_cost = final_cost + 400
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
     
    } else {
        final_cost = final_cost - 400
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    }
  });

  day2.addEventListener('change', function() {
    if (this.checked) {
      final_cost = final_cost + 400
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    } else {
        final_cost = final_cost - 400
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    }
  });

  day3.addEventListener('change', function() {
    if (this.checked) {
      final_cost = final_cost + 400
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is:' + String(final_cost);
    } else {
        final_cost = final_cost - 400
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    }
  });

  transport.addEventListener('change', function() {
    if (this.checked) {
      final_cost = final_cost + 800
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    } else {
        final_cost = final_cost - 800
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    }
  });