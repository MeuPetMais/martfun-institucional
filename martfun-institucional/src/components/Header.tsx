import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header(){
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const home=location.pathname==="/";
  const go=(id:string)=>{
    setOpen(false);
    if(home) document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    else window.location.href=`/#${id}`;
  };
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" to="/">Mart<span>Fun</span></Link>
    <nav className={open?"nav-links open":"nav-links"}>
      <button onClick={()=>go("sobre")}>Sobre</button>
      <button onClick={()=>go("creators")}>Para Creators</button>
      <button onClick={()=>go("monetizacao")}>Monetização</button>
      <button onClick={()=>go("seguranca")}>Segurança</button>
      <button onClick={()=>go("contato")}>Contato</button>
    </nav>
    <button className="nav-cta" onClick={()=>go("contato")}>Falar com a MartFun</button>
    <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open?<X size={22}/>:<Menu size={22}/>}</button>
  </div></header>
}
