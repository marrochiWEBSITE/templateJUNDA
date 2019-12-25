//----------------------------- index


$(document).ready(function(){
   $('.show-1').fadeIn(3500);
});

// ----------------------------- home
window.setTimeout("waktu()",1000);
    function waktu() {
        var tanggal = new Date();
        setTimeout("waktu()",1000);
        document.getElementById("jam").innerHTML = tanggal.getHours();
        document.getElementById("menit").innerHTML = tanggal.getMinutes();
        document.getElementById("detik").innerHTML = tanggal.getSeconds();
    }

 //----------------------------- form
 
 