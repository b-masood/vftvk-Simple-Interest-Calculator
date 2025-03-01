function compute()
{
    var principal = document.getElementById("principal").value;
    /* Validate principal and display alert if needed */
    if (principal <= 0)
    {
        alert("Please enter a positive number");
        principal.focus();
        return false;
    }
    else
    /* No need to execute this for failed validation */ 
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        /* Set innder text. Use mark element for highlighting numbers. */ 
        document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate+"%\</mark>\<br\>You will receive an amount of \<mark>"+interest+",\</mark>\<br\>in the year \<mark>"+year+"\</mark>\<br\>";
        return true;
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}
