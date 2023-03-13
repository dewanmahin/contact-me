// get input value using a function
const getInputValue = id => {
    return document.getElementById(id).value;
}
// Send info in local storage
const sendInfo = (key) => {
    const inputValue = getInputValue(key);

    localStorage.setItem('name', inputValue);
}
