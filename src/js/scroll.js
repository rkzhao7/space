

    let backgr = document.getElementById("backgr");
    let ast = document.getElementById("ast");
    let earth = document.getElementById("earth");
    let text = document.getElementById("text");

window.addEventListener('scroll',function(){
    var value = window.scrollY;

   backgr.style.top = value * 0.5 + 'px'; 
   ast.style.left = -value * 0.15 + 'px'; 
   earth.style.top = value * 0.15 + 'px'; 
   text.style.top = value * 1 + px; 
})