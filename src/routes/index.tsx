import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, ShieldCheck, Truck, Smartphone, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: SayCell,
  head: () => ({
    meta: [
      { title: "SayCell — Smartphones e acessórios" },
      { name: "description", content: "SayCell — smartphones, acessórios e ofertas." },
      { property: "og:title", content: "SayCell — Smartphones e acessórios" },
      { property: "og:description", content: "Confira ofertas, novidades e conteúdos da SayCell." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const products = [
  { name: "iPhone", description: "Modelos selecionados e prontos para você.", image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=85" },
  { name: "Smartphones", description: "Tecnologia para todos os estilos.", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85" },
  { name: "Acessórios", description: "Complete seu setup com estilo.", image: "https://images.unsplash.com/photo-1609592424146-2a6f6f5e5d9e?auto=format&fit=crop&w=900&q=85" },
];

const reels = [
  { label: "Novidades", caption: "Veja as novidades da SayCell", emoji: "📱" },
  { label: "Ofertas", caption: "Ofertas e oportunidades", emoji: "🔥" },
  { label: "Bastidores", caption: "Acompanhe a SayCell", emoji: "✨" },
];

const whatsapp = "https://wa.me/?text=Olá! Vim pelo site da SayCell e gostaria de saber mais sobre os produtos.";

function SayCell() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08070b] text-white">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,102,.24),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(131,58,180,.2),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(252,175,69,.12),transparent_28%)]" />
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-2xl font-black tracking-tight">SAY<span className="bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] bg-clip-text text-transparent">CELL</span></a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#produtos" className="transition hover:text-white">Produtos</a>
            <a href="#reels" className="transition hover:text-white">Reels</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105">Falar no WhatsApp</a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff0066] to-[#833ab4]" />
              Tecnologia • Estilo • Confiança
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-.04em] md:text-7xl">
              Seu próximo <span className="bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] bg-clip-text text-transparent">smartphone</span> está aqui.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
              Conheça a SayCell, confira nossos produtos e acompanhe as novidades diretamente pelo Instagram.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produtos" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff0066] via-[#d62976] to-[#833ab4] px-6 py-3.5 text-sm font-bold shadow-[0_0_35px_rgba(214,41,118,.25)] transition hover:scale-105">Ver produtos <ArrowRight size={17} /></a>
              <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold backdrop-blur transition hover:bg-white/10"><Instagram size={17} /> @saycell_</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-[#ff0066]/20 via-[#833ab4]/20 to-[#4f5bd5]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[.06] p-3 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[2rem] bg-black">
                <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=90" alt="Smartphone" className="h-[520px] w-full object-cover" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs text-white/50">SAYCELL</p><p className="font-bold">Tecnologia que combina com você.</p></div>
                  <Instagram size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[.02]">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 sm:grid-cols-3">
          {[
            [ShieldCheck, "Compra com confiança", "Atendimento próximo"],
            [Truck, "Entrega", "Consulte nossa disponibilidade"],
            [MessageCircle, "Atendimento", "Fale pelo WhatsApp"],
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[.03] p-4">
              <div className="rounded-xl bg-gradient-to-br from-[#ff0066] to-[#833ab4] p-3"><Icon size={20} /></div>
              <div><p className="font-bold">{String(title)}</p><p className="text-xs text-white/45">{String(text)}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[.25em] text-[#ff4f9a]">Destaques</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">Escolha seu próximo aparelho.</h2></div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="text-sm font-bold text-white/70 transition hover:text-white">Consultar disponibilidade →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="aspect-[4/3] overflow-hidden bg-black"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between"><h3 className="text-2xl font-black">{product.name}</h3><Smartphone size={20} className="text-[#ff4f9a]" /></div>
                <p className="mb-5 text-sm text-white/50">{product.description}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white">Consultar <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reels" className="relative border-y border-white/5 bg-gradient-to-b from-[#120810] to-[#08070b] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"><Instagram size={24} /></div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#ff4f9a]">Instagram</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Veja a SayCell em ação.</h2>
            <p className="mt-4 text-white/50">Acompanhe os Reels e as novidades no perfil oficial.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reels.map((reel) => (
              <a key={reel.label} href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="group relative aspect-[9/12] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a0c16] via-[#140b18] to-[#090812] p-6 transition hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,102,.3),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(79,91,213,.25),transparent_40%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between"><span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold">{reel.label}</span><div className="rounded-full bg-white p-3 text-black"><Play size={16} fill="currentColor" /></div></div>
                  <div><div className="mb-4 text-6xl">{reel.emoji}</div><h3 className="text-2xl font-black">{reel.caption}</h3><p className="mt-2 text-sm text-white/50">@saycell_ • Instagram</p></div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center"><a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:scale-105"><Instagram size={17} /> Ver Reels no Instagram</a></div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#ff0066]/20 via-[#833ab4]/15 to-[#4f5bd5]/20 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="text-sm font-bold text-[#ff75ad]">FALE COM A SAYCELL</p><h2 className="mt-2 max-w-xl text-3xl font-black md:text-4xl">Gostou de algum produto?</h2><p className="mt-3 text-white/55">Chame a gente e consulte modelos, cores, disponibilidade e condições.</p></div>
            <div className="flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-black"><MessageCircle size={18} /> WhatsApp</a><a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-6 py-3.5 text-sm font-black"><Instagram size={18} /> Instagram</a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 text-sm text-white/40 md:flex-row"><p>© {new Date().getFullYear()} SayCell. Todos os direitos reservados.</p><a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="hover:text-white">@saycell_</a></div>
      </footer>
    </main>
  );
}
