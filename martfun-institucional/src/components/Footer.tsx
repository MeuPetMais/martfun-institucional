import { Link } from "react-router-dom";
export default function Footer(){
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div className="brand footer-brand">Mart<span>Fun</span></div>
        <p>Tecnologia para creators e comunidades.</p>
        <div className="institutional-card">
          <strong>Dados institucionais</strong>
          <span>Razão social: RNG DIGITAL LTDA</span>
          <span>CNPJ: 66.063.073/0001-30</span>
          <span>Cidade/UF: São Paulo/SP</span>
          <span>E-mail comercial: comercial@rngdigital.com.br</span>
          <span>Responsável: Alexandre</span>
        </div>
      </div>
      <div>
        <strong className="footer-title">Links institucionais</strong>
        <div className="footer-links">
          <Link to="/">Sobre</Link><a href="/#contato">Contato</a>
          <Link to="/termos">Termos de Uso</Link>
          <Link to="/privacidade">Política de Privacidade</Link>
          <Link to="/politica-de-conteudo">Política de Conteúdo</Link>
          <Link to="/denuncias">Canal de Denúncias</Link>
        </div>
      </div>
    </div>
    <div className="container legal-notices">
      <div>Determinadas áreas e categorias da futura plataforma poderão conter conteúdo destinado exclusivamente a maiores de 18 anos.</div>
      <div>MartFun é uma plataforma em desenvolvimento. Serviços de pagamento, assinatura e comercialização de conteúdo ainda não estão disponíveis.</div>
    </div>
    <div className="container copyright">© 2026 MartFun. Todos os direitos reservados.</div>
  </footer>
}
