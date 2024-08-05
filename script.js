document.addEventListener("DOMContentLoaded", function() {
    const btnRecomendados = document.getElementById('btnRecomendados');
    const btnNoRecomendados = document.getElementById('btnNoRecomendados');
    const btnOtros = document.getElementById('btnOtros');
    const sectionRecomendados = document.getElementById('recomendados');
    const sectionNoRecomendados = document.getElementById('no-recomendados');
    const sectionOtros = document.getElementById('otros');

    btnRecomendados.addEventListener('click', function() {
        sectionRecomendados.classList.add('active');
        sectionNoRecomendados.classList.remove('active');
        sectionOtros.classList.remove('active');
        btnRecomendados.classList.add('active');
        btnNoRecomendados.classList.remove('active');
        btnOtros.classList.remove('active');
    });

    btnNoRecomendados.addEventListener('click', function() {
        sectionRecomendados.classList.remove('active');
        sectionNoRecomendados.classList.add('active');
        sectionOtros.classList.remove('active');
        btnRecomendados.classList.remove('active');
        btnNoRecomendados.classList.add('active');
        btnOtros.classList.remove('active');
    });

    btnOtros.addEventListener('click', function() {
        sectionRecomendados.classList.remove('active');
        sectionNoRecomendados.classList.remove('active');
        sectionOtros.classList.add('active');
        btnRecomendados.classList.remove('active');
        btnNoRecomendados.classList.remove('active');
        btnOtros.classList.add('active');
    });
});



$(document).ready(function() {
    $('#btnRecomendados').click(function() {
        $('.section').fadeOut();
        $('#recomendados').fadeIn();
    });

    $('#btnNoRecomendados').click(function() {
        $('.section').fadeOut();
        $('#no-recomendados').fadeIn();
    });

    $('#btnOtros').click(function() {
        $('.section').fadeOut();
        $('#otros').fadeIn();
    });
});
