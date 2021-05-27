
function getAge() 
{
    var dateString = document.getElementById("dob").value;
    if(dateString !="")
    {
        var today = new Date();
        var birthDate = new Date(dateString); //format is mm.dd.yyyy
        var age = today.getFullYear() - birthDate.getFullYear();

        if(age > 18 || age > 44)
        {
          alert("OK, you can register."),
          redirectTo("register.html");


        } 
        else 
        {
          stop = true,
          alert("Sorry, you are too young!")
        }
    } 
    else 
    {
        alert("please provide your date of birth");
    }
}
