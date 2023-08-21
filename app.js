const baricon = document.querySelector('.bar-icon');
const sidebar = document.querySelector('.sidebar');
const cancel =document.querySelector('.cancel-icon');
baricon.addEventListener('click',function(){
 sidebar.classList.add('show-sidebar');
})
cancel.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
})