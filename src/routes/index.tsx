import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  HeartPulse,
  Check,
  Snowflake,
  ShieldCheck,
  Stethoscope,
  Star,
  Users,
  Cpu,
  HandHeart,
  Sofa,
  Phone,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { site, waLink, waMessages } from "@/lib/site";

import heroImg from "@/assets/hero.jpg";
import ambienteImg from "@/assets/ambiente.jpg";
import cabelosImg from "@/assets/service-cabelos.jpg";
import facialImg from "@/assets/service-facial.jpg";
import corporalImg from "@/assets/service-corporal.jpg";
import crioImg from "@/assets/criolipolise.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChicJov Studio | Beleza, Estética e Bem-estar em Santa Efigênia" },
      {
        name: "description",
        content:
          "Salão de beleza e estética premium. Cabelos, estética facial e corporal, criolipólise. Atendimento exclusivo. Agende agora pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  "Profissionais Especializados",
  "Atendimento Personalizado",
  "Ambiente Sofisticado",
  "Resultados Reais",
];

const services = [
  {
    id: "cabelos",
    icon: Scissors,
    title: "Cabelos",
    image: cabelosImg,
    items: [
      "Corte Feminino",
      "Escova",
      "Mechas",
      "Coloração",
      "Hidratação",
      "Cronograma Capilar",
      "Hidratação com Ozônio",
    ],
    cta: "Agendar Serviço",
    msg: waMessages.cabelos,
  },
  {
    id: "facial",
    icon: Sparkles,
    title: "Estética Facial",
    image: facialImg,
    items: [
      "Limpeza de Pele",
      "Peeling Químico",
      "Microagulhamento",
      "Tratamento de Manchas",
      "Botox",
    ],
    cta: "Quero Saber Mais",
    msg: waMessages.facial,
  },
  {
    id: "corporal",
    icon: HeartPulse,
    title: "Estética Corporal",
    image: corporalImg,
    items: [
      "Massagem Relaxante",
      "Drenagem Linfática",
      "Criolipólise",
      "Tratamentos de Emagrecimento",
      "Depilação a Laser",
    ],
    cta: "Agendar Avaliação",
    msg: waMessages.corporal,
  },
];

const crioBenefits = [
  "Não invasivo",
  "Sem cirurgia",
  "Sem internação",
  "Resultados progressivos",
  "Procedimento seguro",
];

const results = [
  { label: "Mechas", image: cabelosImg },
  { label: "Coloração", image: cabelosImg },
  { label: "Tratamentos Faciais", image: facialImg },
  { label: "Criolipólise", image: crioImg },
  { label: "Hidratação Capilar", image: cabelosImg },
  { label: "Estética Corporal", image: corporalImg },
];

const differentials = [
  {
    icon: HandHeart,
    title: "Atendimento Humanizado",
    text: "Cada cliente é recebida com cuidado, escuta e dedicação do início ao fim.",
  },
  {
    icon: Cpu,
    title: "Equipamentos Modernos",
    text: "Tecnologia de ponta para resultados seguros e mais eficazes.",
  },
  {
    icon: Users,
    title: "Profissionais Especializados",
    text: "Equipe qualificada e constantemente atualizada nas melhores técnicas.",
  },
  {
    icon: Sofa,
    title: "Ambiente Confortável",
    text: "Um espaço sofisticado e acolhedor pensado para o seu bem-estar.",
  },
];

const testimonials = [
  {
    name: "Marina Ribeiro",
    text: "Atendimento impecável! Saí do ChicJov me sentindo renovada. O cuidado com cada detalhe faz toda a diferença.",
  },
  {
    name: "Camila Andrade",
    text: "Fiz criolipólise e os resultados superaram minhas expectativas. Profissionais super atenciosas e seguras.",
  },
  {
    name: "Júlia Fernandes",
    text: "Minhas mechas ficaram perfeitas! Ambiente lindo, acolhedor e uma equipe que entende exatamente o que você quer.",
  },
  {
    name: "Patrícia Lopes",
    text: "A limpeza de pele e o tratamento de manchas transformaram minha autoestima. Recomendo de olhos fechados!",
  },
  {
    name: "Beatriz Souza",
    text: "Lugar maravilhoso, atendimento humanizado de verdade. Me sinto cuidada em cada visita.",
  },
  {
    name: "Larissa Martins",
    text: "Cronograma capilar mudou meu cabelo completamente. Equipe nota mil e ambiente sofisticado.",
  },
];

const team = [
  { name: "Especialistas Capilares", role: "Cabelos & Coloração", initials: "EC" },
  { name: "Biomédica Esteta", role: "Estética Avançada", initials: "BE" },
  { name: "Equipe de Atendimento", role: "Experiência & Cuidado", initials: "EA" },
];

function Index() {
  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <Navbar />
      <WhatsAppFloat />
      <main>
        {/* SEÇÃO 1 - HERO */}
        <section className="relative flex min-h-screen items-center">
          <img
            src={heroImg}
            alt="Mulher elegante com cabelo impecável e pele saudável"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8">
            <div className="max-w-2xl text-primary-foreground">
              <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Beleza & Estética Premium
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
                Sua Beleza Merece um Atendimento{" "}
                <span className="italic text-accent">Exclusivo</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
                Transformamos autoestima em confiança através da beleza, estética e bem-estar.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <CTAButton
                  href={waLink(waMessages.agendar)}
                  target="_blank"
                  rel="noopener"
                  variant="orange"
                  size="lg"
                >
                  Agendar Agora
                </CTAButton>
                <CTAButton href="#servicos" variant="light" size="lg">
                  Conheça Nossos Serviços
                </CTAButton>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-primary-foreground/90">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                      <Check className="h-3 w-3 text-accent-foreground" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 - SOBRE */}
        <section id="sobre" className="bg-gradient-soft py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="relative">
                <img
                  src={ambienteImg}
                  alt="Ambiente elegante do ChicJov Studio"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="rounded-3xl object-cover shadow-card"
                />
                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-brand px-7 py-5 text-primary-foreground shadow-orange sm:block">
                  <p className="font-display text-3xl font-semibold">+10</p>
                  <p className="text-xs uppercase tracking-widest opacity-90">anos de cuidado</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Sobre o ChicJov Studio
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
                Mais do que Beleza, uma <span className="text-gradient">Experiência</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                No ChicJov Studio acreditamos que cada cliente é única. Nosso espaço foi criado para
                oferecer tratamentos de beleza, cabelo e estética com excelência, conforto e
                tecnologia.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-soft"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {h}
                  </div>
                ))}
              </div>
              <CTAButton
                href={waLink(waMessages.especialista)}
                target="_blank"
                rel="noopener"
                className="mt-9"
                variant="lilac"
              >
                Falar com Especialista
              </CTAButton>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 3 - SERVIÇOS */}
        <section id="servicos" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Nossos Serviços
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground lg:text-5xl">
                Tratamentos pensados para realçar a sua melhor versão
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.id} delay={i * 120}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        width={1000}
                        height={1200}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/55 to-transparent" />
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-background/90 text-primary shadow-soft backdrop-blur">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <h3 className="absolute bottom-4 left-5 font-display text-2xl font-semibold text-primary-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <ul className="flex-1 space-y-2.5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <CTAButton
                        href={waLink(s.msg)}
                        target="_blank"
                        rel="noopener"
                        className="mt-6 w-full"
                        size="sm"
                      >
                        {s.cta} <ArrowRight className="h-4 w-4" />
                      </CTAButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 - CRIOLIPÓLISE */}
        <section id="criolipolise" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <img
                src={crioImg}
                alt="Procedimento de Criolipólise"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-3xl object-cover shadow-card"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                <Snowflake className="h-4 w-4" /> Procedimento em Destaque
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight lg:text-5xl">
                Reduza Gordura Localizada Sem Cirurgia
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
                A Criolipólise é um dos tratamentos mais procurados para redução de gordura
                localizada através do resfriamento controlado das células de gordura.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {crioBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                      <Check className="h-3 w-3 text-accent-foreground" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <CTAButton
                href={waLink(waMessages.criolipolise)}
                target="_blank"
                rel="noopener"
                variant="orange"
                size="lg"
                className="mt-9"
              >
                Solicitar Avaliação
              </CTAButton>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 5 - RESULTADOS */}
        <section id="resultados" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Resultados & Transformações
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground lg:text-5xl">
                Beleza real, autoestima transformada
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {results.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <article className="group relative h-80 w-72 shrink-0 snap-start overflow-hidden rounded-3xl shadow-soft sm:w-80">
                  <img
                    src={r.image}
                    alt={`Resultado de ${r.label}`}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                    Antes & Depois
                  </span>
                  <h3 className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-primary-foreground">
                    {r.label}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SEÇÃO 6 - DIFERENCIAIS */}
        <section className="bg-gradient-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Nossos Diferenciais
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground lg:text-5xl">
                Por que escolher o ChicJov Studio
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentials.map((d, i) => (
                <Reveal key={d.title} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-orange">
                      <d.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 - DEPOIMENTOS */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Depoimentos
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground lg:text-5xl">
                O que nossas clientes dizem
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 100}>
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      "{t.text}"
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-base font-semibold text-primary-foreground">
                        {t.name.charAt(0)}
                      </span>
                      <span className="font-medium text-foreground">{t.name}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 - EQUIPE */}
        <section id="equipe" className="bg-gradient-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Nossa Equipe
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground lg:text-5xl">
                Profissionais que cuidam de você
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 120}>
                  <div className="flex flex-col items-center text-center">
                    <span className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-brand font-display text-4xl font-semibold text-primary-foreground shadow-card ring-8 ring-card">
                      {m.initials}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">
                      {m.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 9 - CHAMADA FINAL */}
        <section className="px-5 py-16 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand px-6 py-16 text-center text-primary-foreground shadow-card sm:px-12 lg:py-24">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Chegou a Hora de Cuidar de Você
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/90">
                  Agende seu horário e descubra uma nova experiência em beleza e bem-estar.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <CTAButton
                    href={waLink(waMessages.agendar)}
                    target="_blank"
                    rel="noopener"
                    variant="orange"
                    size="lg"
                  >
                    Agendar pelo WhatsApp
                  </CTAButton>
                  <CTAButton
                    href={waLink(waMessages.avaliacao)}
                    target="_blank"
                    rel="noopener"
                    variant="light"
                    size="lg"
                  >
                    Solicitar Avaliação
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* SEÇÃO 10 - RODAPÉ */}
      <footer id="contato" className="border-t border-border bg-card pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Transformamos autoestima em confiança através da beleza, estética e bem-estar.
              {" "}{site.unit}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" /> {site.address}
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" /> {site.hours}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">Links rápidos</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
              <li><a href="#servicos" className="hover:text-accent">Estética</a></li>
              <li><a href="#servicos" className="hover:text-accent">Cabelos</a></li>
              <li><a href="#contato" className="hover:text-accent">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`tel:+${site.whatsappNumber}`} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink(waMessages.agendar)} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-accent">
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-accent">
                  <Instagram className="h-4 w-4 text-accent" /> @{site.instagram}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-accent">
                  <MapPin className="h-4 w-4 text-accent" /> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

function MessageIcon() {
  return <HeartPulse className="hidden" />;
}
