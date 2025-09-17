// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// form de compra
const form = document.getElementById('orderForm');
const summary = document.getElementById('orderSummary');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const comportas = Number(form.comportas.value);
  const cor = form.cor.value;
  const obs = form.obs.value.trim();

  if (!nome || !email || !comportas || !cor) {
    alert('Preencha os campos obrigatórios.');
    return;
  }

  // resumo amigável
  summary.innerHTML = `
    <strong>Resumo do pedido</strong><br>
    Cliente: ${nome}<br>
    E-mail: ${email}${telefone ? `<br>Telefone: ${telefone}` : ''}<br>
    Comportas: ${comportas}<br>
    Cor: ${cor}<br>
    ${obs ? `Observações: ${obs}<br>` : ''}
  `;
  summary.hidden = false;

  // simula envio (aqui você pode integrar com e-mail/WhatsApp/form backend)
  setTimeout(() => {
    alert('Pedido enviado com sucesso! Entraremos em contato em breve.');
    form.reset();
    summary.hidden = true;
  }, 300);
});
