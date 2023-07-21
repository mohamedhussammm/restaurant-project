
let current="ordd";
function change_view(target){
    document.getElementById(current).style.display='none';
    document.getElementById(target).style.display='block';
    current=target;
}