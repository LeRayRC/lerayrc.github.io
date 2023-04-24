function validateForm() {
    var checkbox = document.getElementById("accept_policy");
    if (!checkbox.checked) {
        alert("Por favor, acepte las politicas de privacidad para continuar");
        return false;
    }
    return true;
}