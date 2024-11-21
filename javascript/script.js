// Aguarde o conteúdo do site ser carregado
window.addEventListener('load', function() {
    // Oculte a loading screen
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Exiba o conteúdo do site
    var content = document.getElementById('content');
    content.style.display = 'block';
});
