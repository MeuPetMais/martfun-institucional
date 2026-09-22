import {
  BadgeDollarSign, Users, Cpu, RefreshCw, LockKeyhole, MessageCircle,
  Gift, ShieldCheck, ScanFace, Scale, Flag, Mail, ArrowRight
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const proposal = [
  {icon: BadgeDollarSign, title: "Monetização", text: "Diferentes formas de transformar conteúdo e relacionamento em receita."},
  {icon: Users, title: "Comunidade", text: "Ferramentas para aproximar creators das pessoas que realmente acompanham seu trabalho."},
  {icon: Cpu, title: "Tecnologia", text: "Uma plataforma projetada para unir conteúdo, relacionamento, pagamentos e gestão."},
];
const monetization = [
  {icon: RefreshCw, title: "Assinaturas", text: "Planos recorrentes para conteúdos e experiências exclusivas."},
  {icon: LockKeyhole, title: "PPV", text: "Conteúdos individuais que poderão ser adquiridos separadamente."},
  {icon: MessageCircle, title: "Chat pago", text: "Conteúdos exclusivos disponibilizados diretamente nas conversas."},
  {icon: Gift, title: "Mimos", text: "Uma forma para fãs apoiarem seus creators favoritos."},
];
const safety = [
  {icon: ScanFace, title: "Verificação de identidade", text: "Creators deverão passar por processos de identificação e KYC antes de utilizar recursos financeiros."},
  {icon: ShieldCheck, title: "Verificação de idade", text: "Áreas e conteúdos adultos serão destinados exclusivamente a maiores de 18 anos."},
  {icon: Scale, title: "Moderação", text: "Conteúdos deverão respeitar as regras da plataforma e a legislação aplicável."},
  {icon: Flag, title: "Proteção da comunidade", text: "A plataforma contará com mecanismos de denúncia, análise e combate a abusos."},
];
const categories = ["Lifestyle","Influencers","Modelos","Fitness","Beleza & Moda","Entretenimento","Música","Games","Educação","Sensual"];

export default function Home(){
  return <>
    <Header/>
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">● PLATAFORMA EM DESENVOLVIMENTO</span>
            <h1>Transforme audiência em comunidade.<br/><span>E comunidade em receita sustentável.</span></h1>
            <p>A MartFun está desenvolvendo uma plataforma brasileira de monetização e relacionamento para creators, reunindo conteúdo exclusivo, comunidade e diferentes formas de gerar receita em um só ambiente.</p>
            <div className="hero-actions">
              <button className="primary" onClick={()=>document.getElementById("sobre")?.scrollIntoView({behavior:"smooth"})}>Conhecer a MartFun <ArrowRight size={16}/></button>
              <button className="secondary" onClick={()=>document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}>Falar com a gente</button>
            </div>
          </div>

          <div className="product-mock">
            <div className="mock-head"><span>● ● ● &nbsp; PRÉVIA CONCEITUAL</span><b>EM DESENVOLVIMENTO</b></div>
            <div className="mock-body">
              <aside>
                <div className="creator-chip"><div className="avatar"></div><div><b>Creator</b><span>Perfil do creator</span></div></div>
                <span>Início</span><span>Conteúdo</span><span>Assinaturas</span><span>Mensagens</span><span>Comunidade</span><span>Receita</span>
              </aside>
              <div className="mock-main">
                <div className="mock-top"><div></div><div className="gradient-pill"></div></div>
                <div className="mock-grid">
                  <div className="mock-card"><b>Conteúdo</b><small>Publicações exclusivas para assinantes</small><div className="thumb-row"><i></i><i></i></div></div>
                  <div className="mock-card"><b>Assinaturas</b><small>Planos recorrentes por nível de acesso</small><div className="lines"></div></div>
                  <div className="mock-card"><b>Mensagens</b><small>Conversas diretas com a comunidade</small><div className="lines"></div></div>
                  <div className="mock-card"><b>Comunidade</b><small>Espaços de interação e fãs</small><div className="dots"></div></div>
                  <div className="mock-card full"><b>Receita</b><small>Visão geral das formas de monetização</small><div className="pills"><span>Assinaturas</span><span>PPV</span><span>Chat pago</span><span>Mimos</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section light">
        <div className="container">
          <span className="eyebrow">PROPOSTA</span>
          <h2>Sua comunidade. Seu conteúdo. Seu negócio.</h2>
          <p className="lead">A MartFun nasce para ajudar creators a construírem relações mais próximas com suas comunidades e desenvolverem fontes sustentáveis de receita a partir do próprio conteúdo.</p>
          <div className="cards three">{proposal.map(({icon:Icon,title,text})=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="monetizacao" className="section light alt">
        <div className="container">
          <span className="eyebrow">FORMAS DE MONETIZAÇÃO</span>
          <h2>Mais de uma maneira de transformar conteúdo em receita.</h2>
          <div className="cards four">{monetization.map(({icon:Icon,title,text})=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="creators" className="section light categories">
        <div className="container center">
          <span className="eyebrow">CATEGORIAS</span>
          <h2>Uma plataforma criada para diferentes comunidades.</h2>
          <div className="tag-list">{categories.map(c=><span key={c}>{c}</span>)}<span className="adult">18+</span></div>
          <div className="info-box">A MartFun será uma plataforma generalista. Categorias sensuais ou destinadas a maiores de 18 anos estarão sujeitas a regras específicas de acesso, verificação, segurança e moderação.</div>
        </div>
      </section>

      <section id="seguranca" className="section dark">
        <div className="container">
          <span className="eyebrow">SEGURANÇA E CONFIANÇA</span>
          <h2>Uma plataforma responsável começa pela segurança.</h2>
          <div className="cards four dark-cards">{safety.map(({icon:Icon,title,text})=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="warning"><ShieldCheck/><strong>A MartFun terá tolerância zero para exploração de menores, conteúdo não consensual e materiais ilegais.</strong></div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <h2>Construindo a MartFun</h2>
          <p className="subtitle">Estruturando tecnologia, segurança, políticas e integrações para o lançamento.</p>
          <p className="lead">A MartFun é um projeto brasileiro de tecnologia voltado à creator economy. Estamos atualmente estruturando a plataforma, infraestrutura tecnológica, segurança, políticas e integrações necessárias para o lançamento.</p>
          <div className="status-grid">
            <div><b>Plataforma</b><span>Em desenvolvimento</span></div>
            <div><b>Cadastro de creators</b><span>Em breve</span></div>
            <div><b>Pagamentos</b><span>Em integração</span></div>
            <div><b>Lançamento</b><span>Em preparação</span></div>
          </div>
        </div>
      </section>

      <section id="contato" className="section dark contact">
        <div className="container contact-grid">
          <div>
            <h2>Quer conversar com a MartFun?</h2>
            <p>Estamos abertos ao contato com gateways de pagamento, empresas de tecnologia, fornecedores, futuros creators e parceiros comerciais.</p>
            <p className="contact-email"><Mail size={16}/> Contato comercial: <a href="mailto:comercial@rngdigital.com.br">comercial@rngdigital.com.br</a></p>
          </div>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <h3>Entrar em contato</h3>
            <div className="form-grid">
              <label>Nome<input required/></label>
              <label>Empresa (opcional)<input/></label>
              <label>E-mail<input type="email" required/></label>
              <label>Telefone (opcional)<input/></label>
            </div>
            <label>Assunto<select defaultValue=""><option value="" disabled>Selecione um assunto</option><option>Comercial</option><option>Gateway de Pagamento</option><option>Parceiro Tecnológico</option><option>Fornecedor</option><option>Futuro Creator</option><option>Outro</option></select></label>
            <label>Mensagem<textarea rows={5} required></textarea></label>
            <div className="form-actions"><button className="primary" type="submit">Entrar em contato</button><small>Se preferir, entre em contato diretamente pelo nosso e-mail institucional.</small></div>
          </form>
        </div>
      </section>
    </main>
    <Footer/>
  </>
}
