function validate(){
    function validatefname(field)
        {
            if(field==''){
                document.getElementById('error').innerHTML=' enter your first name.';
                document.getElementById('inputfname').style.borderColor = "red";
                return false;
            }
            
        }
        function validatelname(field)
        {
            if(field==''){
                document.getElementById('error').innerHTML=' enter your last name.';
                document.getElementById('inputlname').style.borderColor = "red";
                return false;
            }
            
        }
        
        function validatepass (field)
        { 
             var pn = /^\d{11}$/;
             if(field.match(pn))
             {
                 return true;
             }
            
        }
    
        function validateeemail(input){
            var validRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(input.value.match(validRegex)){
                return true;
            }
            else{
                document.getElementById('error').innerHTML="enter a valid email";
                return false;
            }
    
        }
       function validatepass(field1,field2){
        let valid=true;
        if(field==''){
            document.getElementById('error').innerHTML=' enter your password';
            valid=false;
    
        }
        
        if(field1!=field2 || field2==''){
            document.getElementById('error').innerHTML=' enter ya matching password';
            valid=false;
        }
        
       }
       return true;
    }
    
    
       function validateform(form){
        let fail='';
        fail&= validatefName(form.inputfname.value);
        fail&= validatelName(form.lname.value);
        fail&= validatepn(form.pn.value);
        fail&= validatepass(form.pass.value,form.inputcp.value);
        
        if(fail){
            return true;
        }
        else{
            return false;
        }
    
       }
       function validate1(form){
        let fail='';
        fail&= validatepass(form.pass.value,form.cp.value);
        if(fail){
            return true;
        }
       }
    