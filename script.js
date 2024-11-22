document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Verifica se o link é interno (com ID) ou externo
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Impede a navegação padrão somente para links internos

            // Rola suavemente até o destino da âncora
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
