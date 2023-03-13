// get input value using a function
const getInputValue = id => {
    return document.getElementById(id).value;
}
// Send info in local storage
const sendInfo = (key) => {
    console.log(key)
    const inputValue = getInputValue(key);
    if(key == 'name'){
        localStorage.setItem('name', inputValue);
    }else if(key == 'email'){
        localStorage.setItem('email', inputValue);
    }else{
        localStorage.setItem('message', inputValue);
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