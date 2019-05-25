const messagesElem = document.getElementById('messages');
const clearMessages = () => {
    messagesElem.innerHTML = '';
}
const showMessages = (type, messages) => {
    messagesElem.className = 'alert alert-' + type;
    messagesElem.innerHTML = messages;
}