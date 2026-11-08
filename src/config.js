// ============================================================
// CONFIGURAÇÃO CENTRAL — edite aqui número, textos e imagens.
// Imagens: coloque os arquivos em /public/images e use o caminho
// (ex.: src: '/images/antes-depois-1.png'). Sem imagem, aparece um espaço reservado.
// ============================================================

// Somente números: 55 + DDD + número. Ex.: 5531999999999
export const WHATSAPP_NUMBER = '5531900000000'
export const INSTAGRAM_URL = 'https://instagram.com/limpaiestofados'
export const SERVICE_AREA = 'São José da Lapa, Vespasiano, Lagoa Santa e região de BH'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const MSG_DEFAULT =
  'Olá! Vim pelo site da Limpaí Estofados & Auto e gostaria de solicitar um orçamento.'

export const NAV = [
  ['Início', '#inicio'], ['Serviços', '#servicos'], ['Antes e Depois', '#antes-depois'],
  ['Como Funciona', '#como-funciona'], ['Avaliações', '#avaliacoes'], ['FAQ', '#faq'], ['Contato', '#contato'],
]

export const HERO_IMAGE = { src: '/images/higienizacao-sofa-extratora.png', alt: 'Profissional higienizando um estofado com extratora' }

export const INDICATORS = [
  'Higienização profissional', 'Atendimento residencial', 'Atendimento automotivo', 'Orçamento rápido',
]

export const SERVICES = [
  { icon: '🛋️', title: 'Sofás', text: 'Limpeza profunda, remoção de sujeiras, manchas e odores.' },
  { icon: '🪑', title: 'Poltronas', text: 'Higienização completa e cuidado com o tecido.' },
  { icon: '🛏️', title: 'Colchões', text: 'Higienização profunda para renovar o colchão.' },
  { icon: '🚗', title: 'Bancos automotivos', text: 'Limpeza e higienização de bancos de carros.' },
  { icon: '🧼', title: 'Estofados em geral', text: 'Cadeiras, puffs, cabeceiras e outros estofados.' },
  { icon: '🚘', title: 'Interior automotivo', text: 'Limpeza e higienização de partes internas do veículo.' },
]

export const BENEFITS = [
  ['🧼', 'Higienização profissional'], ['⚡', 'Atendimento rápido'], ['🧵', 'Cuidado com os tecidos'],
  ['🧴', 'Produtos adequados'], ['🏠', 'Atendimento residencial'], ['🚗', 'Atendimento automotivo'],
  ['💬', 'Orçamento rápido'], ['✨', 'Resultado visível'],
]

export const STEPS = [
  ['Você chama', 'Entre em contato pelo WhatsApp.'],
  ['Enviamos o orçamento', 'Você informa o que precisa limpar e recebe as orientações.'],
  ['Agendamos', 'Definimos o melhor dia e horário.'],
  ['Higienizamos', 'Realizamos o serviço com cuidado e profissionalismo.'],
]

export const REVIEWS = [
  { author: 'Peterson Pereira Monteiro', text: 'Serviço excelente, rápido e ficou como novo.' },
  { author: 'Leda Pereira Santos', text: 'Amei o trabalho, veio até aqui e deixou meu sofá muito bem limpo.' },
  { author: 'Maria dos Santos Miranda', text: 'Recomendo, amei o serviço.' },
]

export const SERVICE_OPTIONS = ['Sofá', 'Poltrona', 'Colchão', 'Banco automotivo', 'Cadeira', 'Estofado automotivo', 'Outro']

export const GALLERY_CATS = ['Todos', 'Sofás', 'Poltronas', 'Colchões', 'Automotivo', 'Estofados']
export const GALLERY = [
  { cat: 'Sofás', alt: 'Sofá — antes e depois', src: '/images/antes-depois-1.png' },
  { cat: 'Sofás', alt: 'Sofá retrátil — antes e depois', src: '/images/antes-depois-2.png' },
  { cat: 'Colchões', alt: 'Colchão — antes e depois', src: '/images/antes-depois-colchao.png' },
  { cat: 'Automotivo', alt: 'Banco automotivo — antes e depois', src: '/images/antes-depois-4.png' },
  { cat: 'Automotivo', alt: 'Banco de carro — antes e depois', src: '/images/antes-depois-5.png' },
  { cat: 'Sofás', alt: 'Sofá — antes e depois', src: '/images/antes-depois-6.png' },
]

// Respostas gerais: valores e prazos só pelo WhatsApp (nada inventado).
export const FAQ = [
  ['Quanto custa a limpeza de um sofá?', 'O valor depende do tamanho, do tecido e do estado do estofado. Envie fotos pelo WhatsApp e receba o orçamento.'],
  ['Quanto tempo demora o serviço?', 'O tempo varia conforme o tipo e a quantidade de peças. Informamos a previsão no orçamento pelo WhatsApp.'],
  ['A limpeza remove manchas?', 'Muitas manchas saem, mas o resultado depende do tipo de mancha, do tempo que ela está no tecido e do material. Avaliamos o seu caso pelo WhatsApp.'],
  ['O sofá fica molhado?', 'A higienização usa umidade controlada. Explicamos como funciona o processo ao combinar o atendimento.'],
  ['Quanto tempo demora para secar?', 'O tempo de secagem depende do tecido, da ventilação e do clima. Orientamos você no atendimento.'],
  ['Vocês atendem em domicílio?', 'Sim, atendemos em residências e também veículos. Consulte a sua região pelo WhatsApp.'],
  ['Fazem limpeza de bancos de carro?', 'Sim. Fazemos higienização de bancos e do interior automotivo. Peça o orçamento pelo WhatsApp.'],
  ['Quais tipos de tecido podem ser higienizados?', 'Atendemos vários tecidos. Alguns materiais pedem cuidados específicos, então envie uma foto da etiqueta ou do estofado pelo WhatsApp.'],
  ['Como faço para solicitar orçamento?', 'Clique em qualquer botão de WhatsApp, preencha o formulário ou digite seu nome na seção “Vamos começar?”.'],
]
