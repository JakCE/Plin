function toggleFullScreen() {
    var element = document.getElementById("element-to-toggle");
 
    if (!document.fullscreenElement) {
       element.requestFullscreen().catch(err => {
          alert(`Error al intentar entrar en modo pantalla completa: ${err.message} (${err.name})`);
       });
    } else {
       document.exitFullscreen();
    }
 }
 