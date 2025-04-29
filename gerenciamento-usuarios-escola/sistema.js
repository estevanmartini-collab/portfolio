angular.module('cadastroEscolar', [])
.controller('AppController', function() {
    this.filtroGeral = "";
    this.filtroTipo = "";
})
.controller('ListaUsuariosController', function() {
    this.usuarios = [
        {
            nome: "Estevan Martini",
            tipo: "Aluno",
            dataCadastro: new Date(2025, 2, 13)
        },
        {
            nome: "Felipe Lima",
            tipo: "Professor",
            dataCadastro: new Date(2025, 2, 13)
        },
        {
            nome: "Matheus Leal",
            tipo: "Aluno",
            dataCadastro: new Date(2025, 2, 10)
        },
        {
            nome: "Cintia Oliveira",
            tipo: "Professor",
            dataCadastro: new Date(2025, 0, 5)
        },
        {
            nome: "Enzo Pelizaro",
            tipo: "Aluno",
            dataCadastro: new Date(2025, 4, 20)
        }
    ];
});