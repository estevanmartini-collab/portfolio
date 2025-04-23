document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
    });

    // envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // simulação de envio
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.classList.remove('was-validated');
            }, 3000);
        }
        
        form.classList.add('was-validated');
    });

    function validateField(field) {
        if (field.checkValidity()) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
        }
    }

    function validateForm() {
        let isValid = true;
        form.querySelectorAll('.form-control').forEach(field => {
            if (!field.checkValidity()) {
                field.classList.add('is-invalid');
                isValid = false;
            }
        });
        return isValid;
    }
});