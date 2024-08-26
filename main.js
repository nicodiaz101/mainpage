function FbotonOn() {
    var uno = document.getElementById('disablebotton');
    if (uno.innerHTML == 'Portfolio') 
        uno.innerHTML = 'No disponible';
    else 
        uno.innerHTML = 'Portfolio'; 
  }
function FbotonOn2() {
    var dos = document.getElementById('disablebotton2');
    if (dos.innerHTML == 'Blog') 
        dos.innerHTML = 'No disponible';
    else 
        dos.innerHTML = 'Blog'; 
}