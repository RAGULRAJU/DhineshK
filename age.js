alert("Welcome to the Age Calculator")
function calculateAge() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
     var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [ 31, 28, 31, 30, 31, 30 , 31 , 31, 30 , 31 , 30 , 31 ];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("displayAge").innerHTML='Your Age is '+y+' years '+m+' months '+d+' day';
    
    if(d1==0 || m1==0|| y1==0 )
    {
        document.getElementById("displayAge").innerHTML=' Enter the date of birth properly';
    }
    if(y1>y2)
    {
        document.getElementById("displayAge").innerHTML='Date of Brith must be earlier than today`s date';
    }
    if(d1>31 || d1<0)
    {
          document.getElementById("displayAge").innerHTML=' Enter the date of birth properly';
    }
    if(m1>12 || m1<0)
    {
         document.getElementById("displayAge").innerHTML=' Enter the date of birth properly';
    }
}
