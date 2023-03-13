// get input value using a function
const getInputValue = key => {
    const value = document.getElementById(key).value;
    const inputData = {key, value};
    return inputData;
}
// Send info in local storage
const sendInfo = (key) => {
    const inputValue = getInputValue(key);
    if(inputValue.key == 'name'){
        localStorage.setItem('name', inputValue.value);
    }else if(inputValue.key == 'email'){
        localStorage.setItem('email', inputValue.value);
    }else{
        localStorage.setItem('message', inputValue.value);
    }
}
// delete info from local storage
const deleteInfo = (key) => {
    localStorage.removeItem(key)
}
// clear all local storage info
const restAllInfo = () => {
    localStorage.clear();
}
// get obj if available or return an empty obj
const formDataObj = () => {
    const formObj = localStorage.getItem('formData');
    const formData = {};
    if(formObj){
        formData = JSON.parse(formObj);
    }
    return formData;
}
// send all info to local storage in a object
const sendAllInfo = () => {
    const formData = formDataObj(); // calling obj
    const nameData = getInputValue('name');
    const emailData = getInputValue('email');
    const messageData = getInputValue('message');
    const allInfo = [nameData, emailData, messageData];
    allInfo.forEach(info => {
        formData[info.key] = info.value;
    });
    const formDataStringified = JSON.stringify(formData);
    localStorage.setItem('formData', formDataStringified);
}