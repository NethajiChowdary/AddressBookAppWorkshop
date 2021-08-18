window.addEventListener('DOMContentLoaded', (event) => 
{

    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
      let names = document.querySelector('#name').value.split(" ");
      if (names[0].length == 0) {
        textError.textContent = "";
        return;
      }
      if (names.length == 2) {
          let nameRegex = RegExp('^[A-Z][a-z]{2,}$')
          if(!nameRegex.test(names[0]))
          textError.textContent = 'First Name Invalid';
          if(!nameRegex.test(names[1]))
          textError.textContent = 'Last Name Invalid';
          if(nameRegex.test(names[0])&&nameRegex.test(names[1]))
          textError.textContent = "";
      }
      else {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if(!nameRegex.test(names[0]))
        textError.textContent = 'First Name Invalid';
        else
        textError.textContent = "";
      }
    });
  
    const addressElement = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    addressElement.addEventListener('input', function() {
      let address = document.querySelector('#address').value;
      let addressRegex = RegExp("^[a-zA-Z0-9]{3,}\\s[a-zA-Z0-9]{3,}([ ]|[a-zA-Z0-9]{3,})*?$");
      if(addressRegex.test(address)){
        addressError.textContent = ""
      }
        else{
          addressError.textContent = "Invalid";
        }
      
    });
  
    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function() {
      let phone = document.querySelector('#phone').value;
      let phoneRegex1 = RegExp("^[0-9]{2}[ ][0-9]{10}$");
      let phoneRegex2 = RegExp("^[0-9]{2}[1-9][0-9]{9}$");
      let phoneRegex3 = RegExp("^[+][0-9]{2}[1-9][0-9]{9}$");
      if(phoneRegex1.test(phone) || phoneRegex2.test(phone) || phoneRegex3.test(phone))
      phoneError.textContent = "";
    
      else{
      phoneError.textContent = "Phone Number Invalid";
      }
  
    });
});    
const save = (event) => {
    event.preventDefault();
    alert("The details are submitted");
  }
  
  const resetForm = () => {
    
  }