const botaoMenu = document.getElementById('botao-menu');
const listaMenu = document.getElementById('lista-menu');
const botaoTema = document.getElementById('botao-tema');
const formulario = document.getElementById('formulario-contato');
const mensagemRetorno = document.getElementById('mensagem-retorno');

botaoMenu.addEventListener('click', () => {
  listaMenu.classList.toggle('ativo');
  const menuAberto = listaMenu.classList.contains('ativo');
  botaoMenu.setAttribute('aria-expanded', menuAberto);
  botaoMenu.textContent = menuAberto ? '×' : '☰';
});

listaMenu.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'A') {
    listaMenu.classList.remove('ativo');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.textContent = '☰';
  }
});

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('claro');
});

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    mensagemRetorno.textContent = 'Erro: preencha todos os campos antes de enviar.';
    mensagemRetorno.style.color = '#ff6b6b';
    return;
  }

  if (!emailValido(email)) {
    mensagemRetorno.textContent = 'Erro: informe um e-mail válido.';
    mensagemRetorno.style.color = '#ff6b6b';
    return;
  }

  mensagemRetorno.textContent = 'Mensagem enviada com sucesso!';
  mensagemRetorno.style.color = '#4ade80';
  formulario.reset();
});
