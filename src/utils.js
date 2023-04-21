export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%;*(){}_+^&])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])){8,32}$/;
    const result = regex.exec(password) !== null ? true : false;
    return result;
}

export const validateName = (name) => {
    const regex = /^(?=.*[ ])(?:([a-zA-Z\u00C0-\u00FF ])){5,100}$/;
    const result = regex.exec(name) !== null ? true : false;
    return result;
}

export const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@(ifsp\.edu\.br|aluno\.ifsp\.edu\.br)$/;
    const result = regex.exec(email) !== null ? true : false;
    return result;
}

export const validateRegistration = (registration) => {
    const regex = /^(sp|SP|Sp|sP)+(?:[A-Z a-z 0-9]){6,7}$/;
    const result = regex.exec(registration) !== null ? true : false;
    return result;
}