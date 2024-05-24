import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Cadastro from './modules/Cadastro'

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

const cadastro1 = new Cadastro('.nome .sobrenome .email .telefone')

login.init();
cadastro.init();

cadastro1.init()

// import './assets/css/style.css';

