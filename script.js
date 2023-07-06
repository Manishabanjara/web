
console.log("script running...") 
document.querySelector('.fa-close').style.display = 'none';
document.querySelector('.hammburger').addEventListener("click",()=>{
 document.querySelector('.sidebar').classList.toggle('sidebarGo');
 if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.fa-bars').style.display = 'inline'
    document.querySelector('.fa-close').style.display = 'none'


 }
 else{
    document.querySelector('.fa-bars').style.display = 'none'
    setTimeout(() => {
    document.querySelector('.fa-close').style.display = 'inline'
 },300);


 }





 /*if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
     document.querySelector('.fa-bars').style.display = 'inline'
     document.querySelector('.fa-times').style.display = 'none'
 }
 else{
     document.querySelector('.fa-bars').style.display = 'none'
     setTimeout(() => {
     document.querySelector('.fa-times').style.display = 'inline'
     }, 350);


 }*/




 

})


/*console.log("Script running...")
document.querySelector('.fa-close').style.display = 'none';
document.querySelector('.hammburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    
    
    

})*/

