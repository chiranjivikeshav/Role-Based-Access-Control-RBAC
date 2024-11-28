document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerButton = document.getElementById('register-button');
    const passwordHints = {
        length: document.getElementById('length-hint'),
        uppercase: document.getElementById('uppercase-hint'),
        lowercase: document.getElementById('lowercase-hint'),
        number: document.getElementById('number-hint'),
    };
    const passwordMatchError = document.getElementById('password-match-error');

    function validatePassword(password) {
        const validations = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
        };

        // Update hints dynamically
        for (const [key, hint] of Object.entries(passwordHints)) {
            if (validations[key]) {
                hint.style.color = 'green';
                hint.style.textDecoration = 'line-through';
            } else {
                hint.style.color = 'red';
                hint.style.textDecoration = 'none';
            }
        }

        return Object.values(validations).every((value) => value);
    }

    function checkPasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchError.textContent = 'Passwords do not match!';
            passwordMatchError.style.color = 'red';
            return false;
        } else {
            passwordMatchError.textContent = '';
            return true;
        }
    }

    function toggleRegisterButton() {
        const isPasswordValid = validatePassword(passwordInput.value);
        const isMatch = checkPasswordMatch();

        registerButton.disabled = !(isPasswordValid && isMatch);
    }

    // Event listeners
    passwordInput.addEventListener('input', toggleRegisterButton);
    confirmPasswordInput.addEventListener('input', toggleRegisterButton);
});
