angular.module('cadastroEscolar', [])

.controller('AppController', ['$scope', function($scope) {
    // boas vindas
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    
    // dados do usuário
    $scope.usuario = {
        nome: "Felipe Lima",
        tipo: "Professor"  // ou "Aluno"
    };

    console.log("Controller carregado!");
}]);