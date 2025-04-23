class Usuario {
  constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
  }

  exibirPerfil() {
      return `Nome: ${this.nome}<br>Email: ${this.email}`;
  }
}

class Aluno extends Usuario {
  constructor(nome, email, senha, turma) {
      super(nome, email, senha);
      this.turma = turma;
  }

  exibirPerfil() {
      return `${super.exibirPerfil()}<br>Turma: ${this.turma}`;
  }
}

class Professor extends Usuario {
  constructor(nome, email, senha, materias) {
      super(nome, email, senha);
      this.materias = materias;
  }

  exibirPerfil() {
      return `${super.exibirPerfil()}<br>Matérias: ${this.materias.join(', ')}`;
  }
}

const usuariosCadastrados = [
  new Aluno('João Silva', 'joao@escola.com', '123456', 'A1'),
  new Professor('Maria Souza', 'maria@escola.com', '654321', ['Matemática', 'Física'])
];

const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const errorDiv = document.getElementById('erroLogin');
const loginContainer = document.getElementById('login-container');
const profileContainer = document.getElementById('profile-container');
const perfilInfo = document.getElementById('perfil-info');

// event lister
loginBtn.addEventListener('click', fazerLogin);
logoutBtn.addEventListener('click', sair);

function fazerLogin() {
  const email = emailInput.value;
  const senha = senhaInput.value;
  
  const usuarioEncontrado = usuariosCadastrados.find(
      usuario => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
      mostrarPerfil(usuarioEncontrado);
      errorDiv.textContent = '';
  } else {
      errorDiv.textContent = 'Email ou senha incorretos!';
  }
}

function mostrarPerfil(usuario) {
  loginContainer.style.display = 'none';
  profileContainer.style.display = 'block';
  perfilInfo.innerHTML = usuario.exibirPerfil();
}

function sair() {
  loginContainer.style.display = 'block';
  profileContainer.style.display = 'none';
  emailInput.value = '';
  senhaInput.value = '';
}

// verifica se já está logado ao carregar a pagina
window.onload = function() {
};