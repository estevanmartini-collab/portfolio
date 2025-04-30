angular.module('cadastroEscolar', [])

.service('UsuarioService', function () {
    const usuarios = [
        { nome: "Estevan Martini", tipo: "Aluno", dataCadastro: new Date(2025, 2, 13) },
        { nome: "Felipe Lima", tipo: "Professor", dataCadastro: new Date(2025, 2, 13) },
        { nome: "Matheus Leal", tipo: "Aluno", dataCadastro: new Date(2025, 2, 10) },
        { nome: "Cintia Oliveira", tipo: "Professora", dataCadastro: new Date(2025, 0, 5) },
        { nome: "Enzo Pelizaro", tipo: "Aluno", dataCadastro: new Date(2025, 4, 20) }
    ];

    this.listar = function () {
        return usuarios;
    };

    this.adicionar = function (usuario) {
        usuario.dataCadastro = new Date();
        usuarios.push(usuario);
    };

    this.remover = function (index) {
        usuarios.splice(index, 1);
    };
})

.controller('AppController', function (UsuarioService) {
    const vm = this;

    vm.filtroGeral = "";
    vm.filtroTipo = "";
    vm.novoUsuario = {};
    vm.usuarios = UsuarioService.listar();

    vm.adicionarUsuario = function () {
        if (vm.novoUsuario.nome && vm.novoUsuario.tipo) {
            UsuarioService.adicionar(angular.copy(vm.novoUsuario));
            vm.novoUsuario = {};
        }
    };

    vm.removerUsuario = function (index) {
        UsuarioService.remover(index);
    };
});
