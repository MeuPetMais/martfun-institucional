import LegalLayout from "../components/LegalLayout";
export default function Reports(){
  return <LegalLayout title="Canal de Denúncias e Segurança" updated="22 de setembro de 2026">
    <p>A MartFun leva denúncias de segurança e conteúdo irregular a sério. Embora a plataforma ainda esteja em desenvolvimento, este canal representa a estrutura prevista para receber comunicações relacionadas a possíveis violações.</p>
    <h2>Você poderá denunciar</h2>
    <ul><li>exploração de menores;</li><li>conteúdo íntimo não consensual;</li><li>falsificação de identidade;</li><li>violação de direitos autorais;</li><li>uso indevido de imagem;</li><li>fraude;</li><li>assédio;</li><li>ameaça;</li><li>extorsão;</li><li>conteúdo ilegal;</li><li>possível violação das políticas da plataforma.</li></ul>
    <h2>Casos envolvendo menores</h2><p>Denúncias envolvendo possível exploração sexual de crianças ou adolescentes receberão tratamento prioritário. A MartFun poderá preservar evidências e comunicar fatos às autoridades competentes quando aplicável.</p>
    <h2>Conteúdo íntimo não consensual</h2><p>Pedidos envolvendo nudez, sexo ou conteúdo íntimo publicado sem autorização também deverão receber análise prioritária.</p>
    <h2>Como denunciar</h2>
    <form className="report-form" onSubmit={(e)=>e.preventDefault()}>
      <label>Nome (opcional)<input/></label>
      <label>E-mail para contato<input type="email" required/></label>
      <label>Tipo de denúncia<select defaultValue=""><option value="" disabled>Selecione</option><option>Menor de idade / exploração</option><option>Conteúdo íntimo não consensual</option><option>Direitos autorais</option><option>Uso indevido de imagem</option><option>Fraude</option><option>Assédio ou ameaça</option><option>Outro</option></select></label>
      <label>URL ou identificação do conteúdo<input/></label>
      <label>Descrição<textarea rows={7} required></textarea></label>
      <label>Anexos (quando aplicável)<input type="file"/></label>
      <button className="primary" type="submit">Enviar denúncia</button>
      <small>O formulário está preparado apenas para demonstração institucional. A integração de envio deverá ser configurada antes do lançamento.</small>
    </form>
    <h2>Emergências</h2><p>O canal da MartFun não substitui serviços de emergência ou autoridades policiais. Em situação de risco imediato, procure os serviços públicos competentes.</p>
    <h2>Privacidade da denúncia</h2><p>Os dados fornecidos serão tratados conforme a Política de Privacidade e poderão ser preservados ou compartilhados quando necessário para cumprimento da legislação ou proteção de direitos.</p>
  </LegalLayout>
}
