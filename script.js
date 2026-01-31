gsap.registerPlugin(ScrollTrigger);

gsap.from(".reveal",{ y:80, opacity:0, duration:1.5, stagger:0.3, ease:"power4.out" });

gsap.utils.toArray(".card, .project-card").forEach((el)=>{ gsap.from(el,{ scrollTrigger:{ trigger:el, start:"top 80%" }, y:100, opacity:0, duration:1 }); });