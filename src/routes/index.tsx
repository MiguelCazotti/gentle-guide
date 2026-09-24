import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, ShieldCheck, MapPin, Play, type LucideIcon } from "lucide-react";
import ios27IntroAsset from "@/assets/ios27/ios-27-introducao.png.asset.json";
import ios27PerformanceAsset from "@/assets/ios27/ios-27-desempenho.png.asset.json";
import ios27GlassAsset from "@/assets/ios27/ios-27-liquid-glass.png.asset.json";
import ios27SiriAsset from "@/assets/ios27/ios-27-siri-ai.png.asset.json";
import ios27AppsAsset from "@/assets/ios27/ios-27-apps.png.asset.json";
import ios27CameraAsset from "@/assets/ios27/ios-27-camera.png.asset.json";
import sayCellLogoAsset from "@/assets/brand/saycell-logo.jpg.asset.json";
import storeWheelAsset from "@/assets/store/loja-roleta.png.asset.json";
import storeShowcaseAsset from "@/assets/store/loja-vitrine-logo.png.asset.json";
import feedShowcaseOneAsset from "@/assets/store/feed-vitrine-1.png.asset.json";
import feedIphonesAsset from "@/assets/store/feed-iphones-mesa.png.asset.json";
import feedShowcaseTwoAsset from "@/assets/store/feed-vitrine-2.png.asset.json";
import feedEnvironmentAsset from "@/assets/store/feed-ambiente.png.asset.json";
import feedServiceAsset from "@/assets/store/feed-atendimento.png.asset.json";
import feedLaunchesAsset from "@/assets/store/feed-lancamentos.png.asset.json";

export const Route = createFileRoute("/")({
  component: SayCell,
  head: () => ({
    meta: [
      { title: "SAY CELL — Loja de iPhone em Caxias" },
      { name: "description", content: "Conheça os iPhones da SAY CELL e confira as novas funções do iOS 27." },
      { property: "og:title", content: "SAY CELL — Loja de iPhone em Caxias" },
      { property: "og:description", content: "Conheça os iPhones da SAY CELL e confira as novas funções do iOS 27." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const products = [
  { name: "iPhone 18 Pro Max", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-18-pro-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMEhRUmlKNkhhdE80VTZIL1ZUdjd2eUpxQWhXdDZiUERGcnlNZW9hNkhxRmJPbDJJWDFrVGJEYlIxTitTcHhVWldHUUw4RnF3MmwyMUVGYm13ODRTWXlINUhveGhFc1lXWld4RkQ2dkFBMi8&fmt=png-alpha&hei=700&wid=550", color: "Preto" },
  { name: "iPhone 18 Pro", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-18-pro-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMEhRUmlKNkhhdE80VTZIL1ZUdjd2eUpxQWhXdDZiUERGcnlNZW9hNkhxRmJPbDJJWDFrVGJEYlIxTitTcHhVWldHUUw4RnF3MmwyMUVGYm13ODRTWXlINUhveGhFc1lXWld4RkQ2dkFBMi8&fmt=png-alpha&hei=700&wid=550", color: "Preto" },
  { name: "iPhone 17 Pro Max", image: "https://imgrosetta.webtekno.com/file/580950/1200xauto.jpg", color: "Prata" },
  { name: "iPhone 17 Pro", image: "https://imgrosetta.webtekno.com/file/580950/1200xauto.jpg", color: "Prata" },
  { name: "iPhone 17", image: "https://doc.smarty.cz/pic/FPMH000K01-600-600.webp", color: "Preto" },
  { name: "iPhone 16 Pro Max", image: "https://res.plaisio.gr/c_limit%2Cf_auto%2Cw_2048%2Cq_75/d_Shared%3ANotFound%3Aproduct-notfound.jpg/Shared/Product/Images/4620410.jpg", color: "Titânio preto" },
  { name: "iPhone 16 Pro", image: "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP516210__1.jpg?h=226757430", color: "Titânio preto" },
  { name: "iPhone 16", image: "https://media.studio7thailand.com/154874/iPhone_16_Black_PDP_Image_Position_1a_Black_Color__TH-TH.png", color: "Preto" },
  { name: "iPhone 15 Pro Max", image: "https://istore.co.bw/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__WWEN_de77cca3-8c84-46f9-acb5-a41652ca4fdb_2048x.jpg?v=1697795211", color: "Titânio preto" },
  { name: "iPhone 15 Pro", image: "https://istore.co.bw/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__WWEN_a427850f-454a-4736-97cc-4764eb382b3a_2048x.jpg?v=1763026647", color: "Titânio preto" },
  { name: "iPhone 15", image: "https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/i/p/ip-15-bl-1_2.jpeg", color: "Preto" },
  { name: "iPhone 14 Pro Max", image: "https://mobilemarketuk.com/cdn/shop/collections/iphone_14_pro_max.jpg?v=1706964907", color: "Preto espacial" },
  { name: "iPhone 14 Pro", image: "https://bludiode.com/img/p/3/8/6/2/4/38624.jpg", color: "Preto espacial" },
  { name: "iPhone 14", image: "https://media.ldlc.com/r1600/ld/products/00/05/97/72/LD0005977224_0005977256.jpg", color: "Meia-noite" },
  { name: "iPhone 13 Pro Max", image: "https://cdn.multitronic.fi/images/prod/6/0/xMLL63KG-A-1.jpg.pagespeed.ic.--IeAeQwJK.jpg", color: "Grafite" },
  { name: "iPhone 13 Pro", image: "https://media.education.studio7thailand.com/40349/iPhone_13_Pro_Graphite_1.jpg", color: "Grafite" },
  { name: "iPhone 13", image: "https://electronicparadise.in/cdn/shop/files/Apple13black.jpg?v=1702471683&width=1406", color: "Meia-noite" },
  { name: "iPhone 12 Pro Max", image: "https://static01.galaxus.com/productimages/3/8/9/1/7/5/1/8/iPhone_12_Pro_Max_Graphite_PDP_Image_Position-2__en-US.jpg_sea.jpeg", color: "Grafite" },
  { name: "iPhone 12 Pro", image: "https://static01.galaxus.com/productimages/3/8/9/1/7/5/1/8/iPhone_12_Pro_Max_Graphite_PDP_Image_Position-2__en-US.jpg_sea.jpeg", color: "Grafite" },
  { name: "iPhone 12", image: "https://lojae-s3-prd-files.radiopopular.pt/files/static/images/products/81129_0.jpg", color: "Preto" },
];

const reels = [
  { label: "Reel 01", url: "https://www.instagram.com/p/DdmVRwAR34J/" },
  { label: "Reel 02", url: "https://www.instagram.com/saycell_/" },
  { label: "Reel 03", url: "https://www.instagram.com/saycell_/" },
];

const ios27Updates = [
  { image: ios27IntroAsset.url, alt: "Apresentação das novas funções do iOS 27" },
  { image: ios27PerformanceAsset.url, alt: "Novidades de desempenho do iPhone no iOS 27" },
  { image: ios27GlassAsset.url, alt: "Personalização do Liquid Glass no iOS 27" },
  { image: ios27SiriAsset.url, alt: "Nova experiência da Siri com inteligência artificial" },
  { image: ios27AppsAsset.url, alt: "Melhorias nos aplicativos do iPhone com iOS 27" },
  { image: ios27CameraAsset.url, alt: "Novo modo da Siri na câmera do iPhone" },
];

const storePhotos = [
  { image: feedIphonesAsset.url, alt: "iPhones disponíveis na SAY CELL", tag: "IPHONES", title: "Escolha seu novo iPhone", position: "object-center" },
  { image: feedShowcaseOneAsset.url, alt: "Vitrine de produtos Apple da SAY CELL", tag: "PRONTA ENTREGA", title: "Tecnologia Apple em um só lugar", position: "object-center" },
  { image: feedShowcaseTwoAsset.url, alt: "Estantes com iPhones e acessórios Apple", tag: "NOSSA VITRINE", title: "Modelos para todos os estilos", position: "object-center" },
  { image: feedLaunchesAsset.url, alt: "Novos modelos de iPhone na loja", tag: "LANÇAMENTOS", title: "As novidades já chegaram", position: "object-center" },
  { image: feedServiceAsset.url, alt: "Área de atendimento da SAY CELL", tag: "ATENDIMENTO", title: "Um espaço feito para você", position: "object-center" },
  { image: feedEnvironmentAsset.url, alt: "Ambiente interno da loja SAY CELL", tag: "NOSSA LOJA", title: "Venha conhecer a SAY CELL", position: "object-center" },
  { image: storeWheelAsset.url, alt: "Espaço da SAY CELL com roleta de prêmios", tag: "EXPERIÊNCIA", title: "Sua visita pode valer prêmios", position: "object-center" },
  { image: storeShowcaseAsset.url, alt: "Vitrine de iPhones e logo da SAY CELL", tag: "SAY CELL", title: "Conectando você ao melhor da Apple", position: "object-center" },
];

const trustItems: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShieldCheck, title: "5 anos", text: "+ de 7.000 clientes" },
  { icon: ShieldCheck, title: "6 meses a 1 ano", text: "de garantia" },
  { icon: MapPin, title: "Loja física", text: "Duque de Caxias" },
];

const whatsapp = "https://wa.me/5521979529575?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20SAY%20CELL%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20iPhones.";

function SayCell() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-[#d6b35a]/15 bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3 text-xl font-black tracking-tight" aria-label="SAY CELL — início">
            <img src={sayCellLogoAsset.url} alt="Logo da SAY CELL" className="h-11 w-11 rounded-full border border-[#d6b35a]/40 object-cover" />
            <span className="hidden sm:inline">SAY<span className="text-[#e6c86e]">CELL</span></span>
          </a>
          <nav className="hidden gap-7 text-sm text-white/65 md:flex">
            <a href="#loja" className="hover:text-[#e6c86e]">A loja</a>
            <a href="#iphones" className="hover:text-[#e6c86e]">iPhones</a>
            <a href="#ios-27" className="hover:text-[#e6c86e]">iOS 27</a>
            <a href="#reels" className="hover:text-[#e6c86e]">Reels</a>
            <a href="#contato" className="hover:text-[#e6c86e]">Contato</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#e6c86e] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#f0d98b]">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-[640px] overflow-hidden border-b border-[#d6b35a]/10">
        <img src={storeShowcaseAsset.url} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-[#080808]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-transparent to-[#080808]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
          <img src={sayCellLogoAsset.url} alt="SAY CELL" className="mx-auto mb-7 h-32 w-32 rounded-full border border-[#e6c86e]/50 object-cover shadow-2xl md:h-40 md:w-40" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[.35em] text-[#e6c86e]">SAY CELL</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Conectando você ao melhor da Apple.</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">Loja de iPhone em Caxias.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#iphones" className="inline-flex items-center gap-2 rounded-full bg-[#e6c86e] px-6 py-3.5 text-sm font-bold text-black hover:bg-[#f0d98b]">Ver iPhones <ArrowRight size={17} /></a>
            <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e6c86e]/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-[#e6c86e]/10"><Instagram size={17} /> @saycell_</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6b35a]/10 bg-white/[.015]">
        <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center justify-center gap-3 px-5 py-7 text-center">
              <Icon size={21} className="text-[#e6c86e]" />
              <div><p className="font-bold">{title}</p><p className="text-xs text-white/45">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="loja" className="scroll-mt-20 border-b border-border/20 bg-[var(--brand-canvas)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-xl text-center md:mb-14">
            <img src={sayCellLogoAsset.url} alt="SAY CELL" className="mx-auto mb-4 h-14 w-14 rounded-full border border-[var(--brand-gold)]/40 object-cover" />
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[var(--brand-gold)]">SAY CELL por dentro</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Nosso feed</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/55">Produtos, novidades e o espaço que preparamos para você.</p>
          </div>

          <div className="mx-auto grid max-w-md gap-7 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {storePhotos.map((photo) => (
              <article key={photo.alt} className="group overflow-hidden rounded-2xl border border-[var(--brand-gold)]/20 bg-[var(--brand-surface)] shadow-2xl">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-foreground/10 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={sayCellLogoAsset.url} alt="" className="h-9 w-9 shrink-0 rounded-full border border-[var(--brand-gold)]/50 object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">saycell_</p>
                      <p className="truncate text-[11px] text-foreground/45">Duque de Caxias</p>
                    </div>
                  </div>
                  <Instagram size={18} className="shrink-0 text-[var(--brand-gold)]" aria-hidden="true" />
                </div>

                <div className="relative aspect-[9/16] overflow-hidden bg-background">
                  <img src={photo.image} alt={photo.alt} loading="lazy" className={`h-full w-full object-cover ${photo.position} transition duration-700 group-hover:scale-[1.02]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[.2em] text-[var(--brand-gold)]">{photo.tag}</p>
                    <h3 className="max-w-xs text-xl font-semibold leading-tight text-foreground">{photo.title}</h3>
                    <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-gold)] px-5 py-3.5 text-xs font-black uppercase text-background transition hover:bg-[var(--brand-cream)]">
                      Ver disponibilidade <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="iphones" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[.3em] text-[#e6c86e]">Apple</p><h2 className="text-3xl font-black md:text-4xl">Nossos iPhones</h2></div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden text-sm font-bold text-[#e6c86e] md:block">Consultar disponibilidade →</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-[#e6c86e]/40">
              <div className="aspect-[4/4.5] overflow-hidden bg-white">
                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="mt-1 text-xs text-white/45">Cor: {product.color}</p>
                  </div>
                  <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name}`} className="shrink-0 rounded-full border border-[#e6c86e]/35 p-2.5 text-[#e6c86e] hover:bg-[#e6c86e] hover:text-black"><ArrowRight size={16} /></a>
                </div>
                <div className="mt-4 flex items-center gap-2" aria-label={`Acabamento ${product.color}`}>
                  <span className="h-4 w-4 rounded-full border border-white/30 bg-[#111111]" />
                  <span className="h-4 w-4 rounded-full border border-black/20 bg-white" />
                  <span className="text-[11px] text-white/35">Preto • Branco</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center"><p className="text-xs text-white/40">Pague só na entrega.</p></div>
      </section>

      <section id="ios-27" className="scroll-mt-20 border-y border-[#d6b35a]/10 bg-[#f3f3f1] py-20 text-[#111111]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-[#8a681f]">Novidades Apple</p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">iOS 27: nova atualização do iPhone e suas novas funções.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#111111]/60">Veja os principais destaques da atualização, com melhorias de desempenho, personalização, aplicativos, câmera e uma nova experiência com a Siri.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ios27Updates.map((update, index) => (
              <figure key={update.alt} className="group overflow-hidden rounded-lg border border-[#111111]/10 bg-white shadow-sm">
                <img src={update.image} alt={update.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                <figcaption className="sr-only">Parte {index + 1}: {update.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#8a681f]">
              <Instagram size={17} /> Acompanhe mais novidades
            </a>
          </div>
        </div>
      </section>

      <section id="reels" className="border-y border-[#d6b35a]/10 bg-[#0b0b0b] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e6c86e]">Instagram</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Reels da SAY CELL</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reels.map((reel) => (
              <a key={reel.label} href={reel.url} target="_blank" rel="noreferrer" className="group relative aspect-[9/13] overflow-hidden rounded-2xl border border-[#e6c86e]/20 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(230,200,110,.18),transparent_40%)]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6c86e] text-black group-hover:scale-110"><Play size={24} fill="currentColor" /></div>
                  <div><p className="text-lg font-bold">{reel.label}</p><p className="mt-1 text-sm text-white/45">@saycell_</p></div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center"><a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#e6c86e]"><Instagram size={17} /> Ver Instagram</a></div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#e6c86e]/20 bg-[#0d0d0d] p-8 text-center md:p-12">
          <img src={sayCellLogoAsset.url} alt="Logo da SAY CELL" className="mx-auto h-28 w-28 rounded-full border border-[#e6c86e]/40 object-cover" />
          <h2 className="mt-4 text-3xl font-black">SAY CELL</h2>
          <p className="mt-2 text-sm text-white/50">Loja física em Duque de Caxias • Pague só na entrega</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e6c86e] px-6 py-3.5 text-sm font-black text-black"><MessageCircle size={18} /> WhatsApp</a>
            <a href="https://www.instagram.com/saycell_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e6c86e]/30 px-6 py-3.5 text-sm font-black"><Instagram size={18} /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d6b35a]/10 py-7 text-center text-xs text-white/35">
        <p>SAY CELL • Loja de iPhone em Caxias</p>
        <p className="mt-1">© {new Date().getFullYear()} SAY CELL</p>
      </footer>
    </main>
  );
}
