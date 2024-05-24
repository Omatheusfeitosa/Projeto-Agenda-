export default class Cadastro {
    constructor(nome, sobrenome, email, telefone) {
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.email = document.querySelector('.email');
        this.telefone = document.querySelector('.telefone')
    }

    init() {
        this.events()
    }

    events() {
        if(!this.nome) return
        this.nome.addEventListener('submit', e => {
            e.preventDefault()
            document.querySelector(this.nome).innerHTML = 'É necessário enviar o nome'
        })
    }
}