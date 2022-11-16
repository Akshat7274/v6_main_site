document.getElementById("my_form").reset(); 
var final_cost = 0;
var final_cost_t = 0;
var day1 = document.querySelector('.t_day1');
var day2 = document.querySelector('.t_day2');
var day3 = document.querySelector('.t_day3');
var transport = document.querySelector('.i_transport')
var trans_count = 0;
var day1_count =0;
var day2_count = 0;
var day3_count = 0;
var person = document.getElementById("person").value;


var cost_display = document.querySelector('#cost_value')

day1.addEventListener('change', function() {
    if (this.checked) {
        final_cost = 150 + (trans_count*350)
      
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
      
      
     
    } else {
        final_cost = 0
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
      day1_count =0;
  }
  document.getElementById("cost_value").value = final_cost * document.getElementById("person").value;
  });

  day2.addEventListener('change', function() {
    if (this.checked) {
        final_cost = 300 + (trans_count*350)
      
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
        day2_count = 1;
      
     
    } else {
        final_cost = 0
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
      day2_count = 0;
      
  }
  document.getElementById("cost_value").value = final_cost * document.getElementById("person").value;
  });

  day3.addEventListener('change', function() {
    if (this.checked) {
      final_cost = 450 + (trans_count*350)
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
     
    } else {
      final_cost = 0
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
  }
  document.getElementById("cost_value").value = final_cost * document.getElementById("person").value;

  });

  transport.addEventListener('change', function() {
    if (this.checked) {
      trans_count = 1;
      final_cost = 350 + final_cost
      console.log(final_cost);
      cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    } else {
      trans_count = 0;
        final_cost = final_cost - 350
        console.log(final_cost);
        cost_display.placeholder='Your Total Cost of Registration is: ' + String(final_cost);
    }
    document.getElementById("cost_value").value = final_cost * document.getElementById("person").value;

  });