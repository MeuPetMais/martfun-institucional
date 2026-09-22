import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function LegalLayout({title,updated,children}:{title:string;updated:string;children:ReactNode}){
  return <>
    <Header/>
    <main className="legal-page">
      <div className="legal-hero"><div className="container narrow">
        <span className="eyebrow">DOCUMENTO INSTITUCIONAL</span><h1>{title}</h1><p>Última atualização: {updated}</p>
      </div></div>
      <div className="container narrow legal-content">{children}</div>
    </main>
    <Footer/>
  </>
}
