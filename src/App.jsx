import { useState } from 'react'
import {
  waLink, MSG_DEFAULT, NAV, HERO_IMAGE, INDICATORS, SERVICES, BENEFITS, STEPS, REVIEWS,
  SERVICE_OPTIONS, GALLERY_CATS, GALLERY, FAQ, INSTAGRAM_URL, SERVICE_AREA,
} from './config'

const NAME = 'Limpaí Estofados & Auto'
const open = (url) => window.open(url, '_blank', 'noopener,noreferrer')

/* Imagem com espaço reservado quando src está vazio ou indisponível */
function Img({ src, alt, className = '', tone = '' }) {
  const [failedSrc, setFailedSrc] = useState('')
  return src && failedSrc !== src
    ? <img className={`img ${className}`} src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} />
    : <div className={`img ph ${tone} ${className}`} role="img" aria-label={alt}><span>{alt}</span></div>
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21z" />
      <path d="M9 9.5c0 3 2.5 5.500 5.500 5.500l1.200-1.300-2-1-.9.800c-.9-.4-1.600-1.100-2-2l.8-.9-1-2L9 9.500z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a href="#inicio" className="brand" onClick={() => setMenu(false)}>Limpaí <small>Estofados & Auto</small></a>
        <nav className={`nav ${menu ? 'on' : ''}`} aria-label="Principal">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>)}
        </nav>
        <button className="btn btn-p hdr-wa" onClick={() => open(waLink(MSG_DEFAULT))}><WaIcon /> WhatsApp</button>
        <button className="burger" aria-label="Abrir menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-in">
        <div className="hero-txt">
          <p className="pill">Atendimento rápido • Orçamento pelo WhatsApp • Serviço profissional</p>
          <h1>Seu estofado limpo, renovado e com cara de novo.</h1>
          <p className="lead">Higienização profissional de sofás, poltronas, colchões, bancos automotivos e muito mais.</p>
          <div className="row">
            <button className="btn btn-p" onClick={() => open(waLink(MSG_DEFAULT))}><WaIcon /> SOLICITAR ORÇAMENTO</button>
            <a className="btn btn-g" href="#antes-depois">VER ANTES E DEPOIS</a>
          </div>
        </div>
        <Img {...HERO_IMAGE} className="hero-img" tone="ph-a" />
      </div>
      <ul className="wrap ind">{INDICATORS.map((i) => <li key={i}>{i}</li>)}</ul>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos">
      <div className="wrap">
        <h2>O que podemos limpar?</h2>
        <div className="grid g3">
          {SERVICES.map((s) => (
            <article className="card" key={s.title}>
              <div className="card-b">
                <h3><span aria-hidden="true">{s.icon}</span> {s.title}</h3>
                <p>{s.text}</p>
                <button className="btn btn-g sm" onClick={() => open(waLink(`Olá! Vim pelo site da ${NAME} e gostaria de solicitar um orçamento para ${s.title.toLowerCase()}.`))}>Solicitar orçamento</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section>
      <div className="wrap">
        <h2>Por que escolher a Limpaí?</h2>
        <div className="grid g4">
          {BENEFITS.map(([i, t]) => <div className="card ben" key={t}><span aria-hidden="true">{i}</span><h3>{t}</h3></div>)}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section id="como-funciona" className="alt">
      <div className="wrap">
        <h2>Como funciona</h2>
        <ol className="steps">
          {STEPS.map(([t, d], i) => (
            <li key={t}><b className="num">{String(i + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="avaliacoes">
      <div className="wrap">
        <h2>Quem já contratou, recomenda</h2>
        <div className="grid g3">
          {REVIEWS.map((r, i) => (
            <blockquote className="card rev" key={i}>
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <p>“{r.text}”</p>
              <footer>— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  const [f, setF] = useState({ nome: '', fone: '', tipo: SERVICE_OPTIONS[0], msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const extra = f.msg.trim() ? ` ${f.msg.trim()}` : ''
    const fone = f.fone.trim() ? ` Meu WhatsApp: ${f.fone.trim()}.` : ''
    open(waLink(`Olá, Limpaí! Meu nome é ${f.nome.trim()}. Gostaria de solicitar um orçamento para ${f.tipo.toLowerCase()}.${extra}${fone}`))
  }
  return (
    <section id="contato" className="alt">
      <div className="wrap split">
        <div>
          <h2>Quer deixar seu estofado novo de novo?</h2>
          <p className="lead">Preencha e continue a conversa direto no WhatsApp. Sem cadastro e sem espera.</p>
        </div>
        <form className="card form" onSubmit={submit}>
          <label>Nome<input required value={f.nome} onChange={set('nome')} autoComplete="name" /></label>
          <label>WhatsApp<input type="tel" value={f.fone} onChange={set('fone')} autoComplete="tel" placeholder="(31) 90000-0000" /></label>
          <label>Tipo de serviço
            <select value={f.tipo} onChange={set('tipo')}>{SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select>
          </label>
          <label>Mensagem<textarea rows="3" value={f.msg} onChange={set('msg')} placeholder="Conte o que você quer limpar" /></label>
          <button className="btn btn-p" type="submit"><WaIcon /> SOLICITAR ORÇAMENTO</button>
        </form>
      </div>
    </section>
  )
}

function NameCapture() {
  const [nome, setNome] = useState('')
  const go = (e) => {
    e.preventDefault()
    open(waLink(`Olá! Meu nome é ${nome.trim()}. Vim pelo site da ${NAME} e gostaria de saber mais sobre os serviços.`))
  }
  return (
    <section className="cap">
      <form className="wrap cap-in" onSubmit={go}>
        <div><h2>Vamos começar?</h2><p className="lead">Digite seu nome e fale diretamente com a Limpaí.</p></div>
        <input required placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} aria-label="Seu nome" />
        <button className="btn btn-p" type="submit">Falar pelo WhatsApp</button>
      </form>
    </section>
  )
}

function Gallery() {
  const [cat, setCat] = useState('Todos')
  const [zoom, setZoom] = useState(null)
  const items = GALLERY.filter((g) => cat === 'Todos' || g.cat === cat)
  return (
    <section id="antes-depois" className="alt">
      <div className="wrap">
        <h2>Antes e Depois</h2>
        <p className="lead">Confira os resultados da higienização. Clique em uma foto para ampliar.</p>
        <div className="chips" role="group" aria-label="Filtrar galeria">
          {GALLERY_CATS.map((c) => <button key={c} className={`chip ${c === cat ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="grid g3">
          {items.map((g, i) => (
            <button key={g.alt + i} className="thumb" onClick={() => setZoom(g)} aria-label={`Ampliar: ${g.alt}`}><Img {...g} className="fill" /></button>
          ))}
        </div>
      </div>
      {zoom && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setZoom(null)}>
          <button className="lb-x" aria-label="Fechar">×</button>
          <Img {...zoom} className="lb-img" />
        </div>
      )}
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="alt">
      <div className="wrap narrow">
        <h2>Perguntas frequentes</h2>
        {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <h2>Seu sofá merece uma nova aparência.</h2>
        <p className="lead">Não deixe a sujeira, manchas e odores acumularem. Fale com a Limpaí e descubra a melhor solução para o seu estofado.</p>
        <button className="btn btn-p" onClick={() => open(waLink(MSG_DEFAULT))}><WaIcon /> QUERO SOLICITAR UM ORÇAMENTO</button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div><strong>{NAME}</strong><p>Higienização profissional de estofados e interiores automotivos.</p></div>
        <nav aria-label="Rodapé">{NAV.filter(([l]) => l !== 'Como Funciona').map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <div>
          <a href={waLink(MSG_DEFAULT)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          <p>{SERVICE_AREA}</p>
        </div>
      </div>
      <p className="wrap copy">© 2026 {NAME}. Todos os direitos reservados.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero /><Services /><Gallery /><Benefits /><Steps /><Reviews />
        <QuoteForm /><NameCapture /><Faq /><FinalCta />
      </main>
      <Footer />
      <a className="fab" href={waLink(MSG_DEFAULT)} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><WaIcon /></a>
    </>
  )
}
