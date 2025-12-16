/* Put code for the task below */
//Checks box to see if it is blank or not
function checkBox1(){
    string1=document.getElementById("fullName").value;
    blank= "";
    if (string1 === blank) {
        document.getElementById("fullName").style.backgroundColor="red"
    } else
        document.getElementById("fullName").style.backgroundColor="white"
}
function checkBox2(){
    string2=document.getElementById("address").value;
    blank= "";
    if (string2 === blank) {
        document.getElementById("address").style.backgroundColor="red"
    } else
        document.getElementById("address").style.backgroundColor="white"
}
function checkBox3(){
    string3=document.getElementById("phone").value;
    blank= "";
    if (string3 === blank) {
        document.getElementById("phone").style.backgroundColor="red"
    } else
        document.getElementById("phone").style.backgroundColor="white"
}
function checkBox4(){
    string4=document.getElementById("email").value;
    blank= "";
    if (string4 === blank) {
        document.getElementById("email").style.backgroundColor="red"
    } else
        document.getElementById("email").style.backgroundColor="white"
}

