const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen){
    // Agregar la imagen seleccionada al Modal
    modalImagen.addEventListener('show.bs.modal', function(event){
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');

        // Construir la imagen
        const imagen = document.createElement('IMG');

        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'imagen galeria';

        // Agregar imagen al html seleccionado
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    });

    // eliminando el contenido del Modal
    modalImagen.addEventListener('hidden.bs.modal', function(){
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });

};

//Validacion de formulario con Bootstrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


