/* Put code for the task below */
function checkBox1(){
    string1=document.getElementById("fullName").value;
    blank= "";
    if (string1 === blank) {
        document.getElementById("fullName").style.backgroundColor="red"
    } else
        document.getElementById("fullName").style.backgroundColor="white"
}
function checkBox2(){
    string1=document.getElementById("address").value;
    blank= "";
    if (string1 === blank) {
        document.getElementById("address").style.backgroundColor="red"
    } else
        document.getElementById("address").style.backgroundColor="white"
}
function checkBox3(){
    string1=document.getElementById("phone").value;
    blank= "";
    if (string1 === blank) {
        document.getElementById("phone").style.backgroundColor="red"
    } else
        document.getElementById("phone").style.backgroundColor="white"
}
function checkBox4(){
    string1=document.getElementById("email").value;
    blank= "";
    if (string1 === blank) {
        document.getElementById("email").style.backgroundColor="red"
    } else
        document.getElementById("email").style.backgroundColor="white"
}

