function calc(){
    let a = document.getElementById("s1");
    let d = a.value;
    let b = document.getElementById("s2");
    let m = b.value;
    let c = document.getElementById("s3");
    let y = c.value;
    let currdate = new Date();
    let d1 = currdate.getDate();
    let m1 = currdate.getMonth();
    let y1 = currdate.getFullYear();
    let yr = (y1-y);
    if(m1>=m && d1>=d)
    document.getElementById('age').innerHTML = ('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+yr);
    else{
        yr=yr-1;
    document.getElementById('age').innerHTML = ('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+yr);
    }
} 
function clr(){
    document.getElementById('age').innerHTML = '';
    let a = document.getElementById('s1');
       a.selectedIndex = 0; 
    let b = document.getElementById('s2');
       b.selectedIndex = 0; 
    let c = document.getElementById('s3');
       c.selectedIndex = 0; 
}