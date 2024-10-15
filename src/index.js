import users from './users.js';
import template from './template.hbs';

const html = template(users);

document.getElementById('app').innerHTML = html;
