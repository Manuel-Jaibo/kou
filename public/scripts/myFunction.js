// function myFunction() {
//     for (var i=document.getElementById("myInput").value; i<=6; i++){
//         document.write(i);
//         }
//     }

    function myFunction() {
        var x = document.getElementById("myInput").value;
        document.getElementById("valormyInput").innerHTML = "Tu presupuesto es de: $" + x;
        }