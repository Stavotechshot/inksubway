/* Content remains visible if JavaScript or motion support is unavailable. */
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function setupMotion(){
  revealObserver?.disconnect();
  document.querySelectorAll('.motion-pending').forEach(el=>el.classList.remove('motion-pending'));
  if(motionPreference.matches||!('IntersectionObserver' in window))return;
  const targets=document.querySelectorAll('.section-heading,.artist-copy,.process-grid article,.quote-card,.policy-group,.care-grid article,.booking-copy,.ideas-note');
  revealObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.remove('motion-pending');entry.target.classList.add('motion-arrived');revealObserver.unobserve(entry.target)}}},{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
  targets.forEach((el,i)=>{if(el.getBoundingClientRect().top>innerHeight){el.style.setProperty('--motion-delay',(i%3)*65+'ms');el.classList.add('motion-pending');revealObserver.observe(el)}});
}
setupMotion();motionPreference.addEventListener('change',setupMotion);
document.addEventListener('focusin',event=>{const pending=event.target.closest('.motion-pending');if(pending){pending.classList.remove('motion-pending');revealObserver?.unobserve(pending)}});
window.addEventListener('beforeprint',()=>document.querySelectorAll('.motion-pending').forEach(el=>el.classList.remove('motion-pending')));

