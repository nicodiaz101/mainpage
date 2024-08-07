function FbotonOn() {
    var uno = document.getElementById('disablebotton');
    if (uno.innerHTML == 'Portfolio') 
        uno.innerHTML = 'No disponible';
    else 
        uno.innerHTML = 'Portfolio'; 
  }