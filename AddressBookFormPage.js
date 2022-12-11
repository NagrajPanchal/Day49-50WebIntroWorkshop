window.addEventListener('DOMContentLoaded',(event) => {
    const fullName = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');
    fullName.addEventListener('input',function(){
        if(fullName.value.length == 0)
        {
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).fullName = fullName.value;
            textError.textContent = "";
        }
        catch (e) {
            textError.textContent = e;           
            }
    });

    const addressElement = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    addressElement.addEventListener('input', function () {
        let address = document.querySelector('#address').value;
        if (addressElement.value.length == 0) {
            addressError.textContent = '';
            return;
        }
        try {
            (new Contact()).address = address;
            addressError.textContent = '';
            return;
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.text-error');
    phoneElement.addEventListener('input',function(){
        if(phone.value.length == 0)
        {
            phoneError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).phone = phone.value;
            phoneError.textContent = "";
        }
        catch (e) {
            phoneError.textContent = e;           
            }
    });
});