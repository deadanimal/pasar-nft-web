window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
window.axios.defaults.headers.common['Content-Type'] = 'application/json'