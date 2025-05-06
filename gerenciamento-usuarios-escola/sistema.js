angular.module('cadastroEscolar', [])

.service('UsuarioService', function ($q, $timeout) {
    const usuarios = [
        { nome: "Estevan Martini", tipo: "Aluno", dataCadastro: new Date(2025, 2, 13), email: "estevan@email.com" },
        { nome: "Felipe Lima", tipo: "Professor", dataCadastro: new Date(2025, 2, 13), email: "felipe@email.com" },
        { nome: "Matheus Leal", tipo: "Aluno", dataCadastro: new Date(2025, 2, 10), email: "matheus@email.com" },
        { nome: "Cintia Oliveira", tipo: "Professora", dataCadastro: new Date(2025, 0, 5), email: "cintia@email.com" },
        { nome: "Enzo Pelizaro", tipo: "Aluno", dataCadastro: new Date(2025, 4, 20), email: "enzo@email.com" }
    ];

    this.listar = function () {
        return usuarios;
    };

    this.salvar = function (usuario) {
        return $q(function (resolve) {
            $timeout(function () {
                usuario.dataCadastro = new Date();
                usuarios.push(usuario);
                resolve(usuario);
            }, 2000); // simula 2 segundos de atraso
        });
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
    vm.carregando = false;
    vm.mensagemSucesso = "";

    vm.adicionarUsuario = function () {
        if (!vm.novoUsuario.nome || !vm.novoUsuario.tipo || !vm.novoUsuario.email) return;

        vm.carregando = true;
        vm.mensagemSucesso = "";

        UsuarioService.salvar(angular.copy(vm.novoUsuario)).then(function (usuarioSalvo) {
            vm.mensagemSucesso = "Usuário cadastrado com sucesso!";
            vm.novoUsuario = {};
        }).finally(function () {
            vm.carregando = false;
        });
    };

    vm.removerUsuario = function (index) {
        UsuarioService.remover(index);
    };
});
