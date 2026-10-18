"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {projects} from "../data/projects";
export default function Experience(){
 const ref=useRef<HTMLElement>(null);
 const [selected,setSelected]=useState<number|null>(null);
 useEffect(()=>{if(!ref.current||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 gsap.registerPlugin(ScrollTrigger);
 const ctx=gsap.context(()=>{
 gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el=>gsap.fromTo(el,{opacity:0,y:65},{opacity:1,y:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 87%",once:true}}));
 gsap.to(".hero-photo",{scale:1.2,yPercent:12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
 gsap.utils.toArray<HTMLElement>(".project").forEach((el,i)=>gsap.fromTo(el,{rotateY:i%2?12:-12,y:70},{rotateY:0,y:0,ease:"none",scrollTrigger:{trigger:el,start:"top 95%",end:"center 55%",scrub:true}}));
 },ref);return()=>ctx.revert()},[]);
 useEffect(()=>{document.body.style.overflow=selected===null?"":"hidden";return()=>{document.body.style.overflow=""}},[selected]);
 return <main ref={ref}>
 <header className="nav"><a href="#inicio" className="logo">H—H <small>GRUPO HAYMOUR</small></a><nav><a href="#projetos">Projetos</a><a href="#estudio">Estúdio</a><a href="#contato">Contato</a></nav></header>
 <section className="hero" id="inicio"><div className="hero-photo" style={{backgroundImage:`url("${projects[0].image}")`}}/><div className="hero-overlay"/><div className="hero-copy"><span className="kicker">ARQUITETURA • ENGENHARIA • EXPERIÊNCIA</span><h1>Espaços que<br/><em>transcendem</em><br/>o olhar.</h1><div className="hero-foot"><span>Uma nova perspectiva sobre o construir.</span><a href="#projetos">EXPLORAR ↓</a></div></div></section>
 <section className="intro" id="estudio"><span className="kicker" data-reveal>01 — NOSSA ESSÊNCIA</span><h2 data-reveal>Não apenas espaços.<br/><em>Novas formas</em> de sentir.</h2><p data-reveal>Entre a precisão da engenharia e a sensibilidade da arquitetura, cada detalhe conta uma história.</p></section>
 <section className="gallery" id="projetos"><span className="kicker" data-reveal>02 — EXPOSIÇÃO ESPACIAL</span><h2 data-reveal>Arquitetura<br/><em>em perspectiva.</em></h2><p className="sub" data-reveal>Explore a matéria, a luz e a forma.</p><div className="projects">{projects.map((p,i)=><button className={`project project-${i}`} key={p.title} onClick={()=>setSelected(i)} aria-label={`Ampliar ${p.title}`}><img src={p.image} alt={`Imagem ilustrativa: ${p.category}`} loading="lazy"/><div className="project-label"><span>{String(i+1).padStart(2,"0")} / {p.category}</span><strong>{p.title} ↗</strong></div></button>)}</div></section>
 <section className="technical"><span className="kicker" data-reveal>03 — ALÉM DA SUPERFÍCIE</span><h2 data-reveal>O invisível<br/><em>sustenta o extraordinário.</em></h2><div className="wire" aria-hidden="true"><span/><span/><span/></div><p data-reveal>Uma futura experiência interativa revelará as camadas da engenharia — da estrutura ao espaço construído.</p><small>ESTUDO CONCEITUAL — NÃO REPRESENTA UMA OBRA EXECUTADA</small></section>
 <section className="end" id="contato"><span className="kicker" data-reveal>04 — PRÓXIMOS ESPAÇOS</span><h2 data-reveal>O próximo<br/><em>capítulo começa</em><br/>com uma ideia.</h2><p>Contato em preparação</p><footer>GRUPO HAYMOUR <span>PROTÓTIPO VISUAL · 2026</span></footer></section>
 {selected!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[selected].title} onClick={()=>setSelected(null)}><button className="dismiss" onClick={()=>setSelected(null)} aria-label="Fechar imagem">×</button><img src={projects[selected].image} alt={projects[selected].title}/><div className="lightbox-label">{projects[selected].title}<small>IMAGEM ILUSTRATIVA</small></div></div>}
 </main>
}