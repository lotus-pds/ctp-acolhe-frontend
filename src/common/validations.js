export const validateClass = class_ => {
    const regex = /^[a-zA-Z0-9]{2,10}$/;
    const result = regex.exec(class_) !== null ? true : false;
    return result;
}

export const validateEmail = email => {
    const regex = /^[a-zA-Z0-9].*[a-zA-Z0-9._]*[a-zA-Z][a-zA-Z0-9._]*@(ifsp\.edu\.br|aluno\.ifsp\.edu\.br)$/;
    const result = regex.exec(email) !== null ? true : false;
    return result;
}

export const validateName = name => {
    const regex = /^(?=.*[ ])(?:([a-zA-Z\u00C0-\u00FF ])){5,100}$/;
    const result = regex.exec(name) !== null ? true : false;
    return result;
}

export const validateNames = name => {
    const regex = /^(?:([a-zA-Z\u00C0-\u00FF, ])){5,100}$/;
    const result = regex.exec(name) !== null ? true : false;
    return result;
}

export const validatePassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?\.,;*(){}_+^&])(?:([0-9a-zA-Z!@#$%?\.,;*(){}_+^&])){8,32}$/;
    const result = regex.exec(password) !== null ? true : false;
    return result;
}

export const validatePhoneNumber = phoneNumber => {
    const regex = /^\d{10,11}$/;
    const result = regex.exec(phoneNumber) !== null ? true : false;
    return result; 
}

export const validateRegistration = registration => {
    const regex = /^[a-zA-Z]{2}\d{4}\d[X\d]|[a-zA-Z]{2}\d{5}[X\d]$/;
    const result = regex.exec(registration) !== null ? true : false;
    return result;
}