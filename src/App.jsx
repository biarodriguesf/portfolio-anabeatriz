
import { useEffect, useState } from "react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "MG Depósito de Bebidas",
    category: "Aplicação Mobile",
    description:
      "Uma aplicação mobile pensada para transformar a experiência de compra, facilitar pedidos e organizar produtos de forma simples e intuitiva.",
    tech: ["React Native", "Expo", "JavaScript"],
    link: "#",
    github: "https://github.com/biarodriguesf/mg-deposito-bebidas",
    objective:
      "Criar uma experiência digital para facilitar a visualização de produtos e tornar o processo de compra mais simples.",
    development:
      "Desenvolvimento de uma interface mobile com foco na organização das informações, navegação intuitiva e experiência do usuário.",
    highlight:
      "Um projeto que conecta necessidades reais de um negócio à construção de uma solução digital.",
  },
  {
    number: "02",
    title: "Álbum Rosangela & Lucas",
    category: "Experiência Digital",
    description:
      "Uma experiência digital para reunir fotos e recados de um momento especial, conectando convidados e memórias em um único lugar.",
    tech: ["React", "Vite", "Supabase"],
    link: "https://album-rosangela-lucas.vercel.app/",
    github: "https://github.com/biarodriguesf/album-rosangela-lucas",
    objective:
      "Desenvolver um álbum colaborativo em que os convidados possam compartilhar fotografias e mensagens do casamento.",
    development:
      "Interface responsiva em React e Vite, com integração ao Supabase para armazenamento e consulta de fotos e recados.",
    highlight:
      "Uma solução personalizada que transforma registros de um evento em uma experiência digital compartilhada.",
  },
  {
    number: "03",
    title: "MARRY-SE",
    category: "Ecossistema Digital",
    description:
      "Uma marca digital dedicada ao universo dos casamentos, com soluções que aproximam tecnologia, identidade e experiências personalizadas.",
    tech: ["React", "Vite", "CSS"],
    link: "https://marry-se-three.vercel.app/",
    github: "https://github.com/biarodriguesf/marry-se",
    objective:
      "Criar uma identidade digital para reunir soluções tecnológicas pensadas especialmente para casamentos.",
    development:
      "Construção de uma interface web com identidade visual própria, componentes reutilizáveis e apresentação dos serviços digitais.",
    highlight:
      "Um projeto que une desenvolvimento front-end, identidade visual e visão de produto.",
  },
  {
    number: "04",
    title: "ABG Engenharia",
    category: "Site Institucional",
    description:
      "Um site profissional desenvolvido para apresentar os serviços da empresa, fortalecer sua presença digital e facilitar o contato com clientes.",
    tech: ["React", "Vite", "CSS"],
    link: "https://abg-engenharia.vercel.app/",
    github: "https://github.com/biarodriguesf/abg-engenharia",
    objective:
      "Construir uma presença digital profissional, alinhada à identidade da ABG Engenharia e à apresentação dos seus serviços.",
    development:
      "Desenvolvimento de um site institucional responsivo, com identidade visual em azul e branco, apresentação de serviços e caminhos de contato.",
    highlight:
      "Projeto publicado, desenvolvido para um negócio real e pensado para comunicar profissionalismo, confiança e clareza.",
  },
];

const technologies = [
  { name: "HTML5", icon: "html5", level: "Estrutura web" },
  { name: "CSS3", icon: "css3", level: "Estilização" },
  { name: "JavaScript", icon: "javascript", level: "Lógica e interação" },
  { name: "React", icon: "react", level: "Interfaces" },
  { name: "Vite", icon: "vite", level: "Desenvolvimento web" },
  { name: "Git", icon: "git", level: "Versionamento" },
  { name: "GitHub", icon: "github", level: "Projetos e código" },
  { name: "Supabase", icon: "supabase", level: "Banco de dados" },
  { name: "Vercel", icon: "vercel", level: "Deploy" },
];

function TechnologyIcon({ name }) {
  const icons = {
    html5: "https://cdn.simpleicons.org/html5/E34F26",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    vite: "https://cdn.simpleicons.org/vite/8B7CFF",
    git: "https://cdn.simpleicons.org/git/F05032",
    github: "https://cdn.simpleicons.org/github/181717",
    supabase: "https://cdn.simpleicons.org/supabase/3FCF8E",
    vercel: "https://cdn.simpleicons.org/vercel/000000",
  };

  if (name === "css3") {
    return (
      <svg
        className="technology-icon technology-icon-css3"
        viewBox="0 0 24 24"
        role="img"
        aria-label="CSS3"
      >
        <path
          fill="currentColor"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.588-13.05-.003.698 7.958h9.086l-.304 3.34-2.994.83-3.003-.833-.192-2.15H6.128l.33 4.173 5.362 1.488 5.345-1.488.74-8.012H8.531z"
        />
      </svg>
    );
  }

  return (
    <img
      className="technology-icon"
      src={icons[name]}
      alt=""
      loading="lazy"
      decoding="async"
    />
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.61 1.22 3.25.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.98V9.18h2.95v9.52ZM6.45 7.88a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.7h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.71H9.8V9.18h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.56 1.96 3.56 4.51v5.24Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.49 0 .13 5.35.13 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.95 11.95 0 0 0 5.82 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.43ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.83 9.83 0 0 1-1.51-5.25c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.44 9.85-9.9 9.85Zm5.42-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ProjectVisual({ number }) {
  if (number === "01") {
    return (
      <div className="project-art art-mg">
        <span className="art-index">MOBILE EXPERIENCE / 01</span>
        <div className="mg-wordmark">
          <span className="mg-mark">MG</span>
          <span>DEPÓSITO<br />DE BEBIDAS</span>
        </div>
        <div className="mg-orbit orbit-one" />
        <div className="mg-orbit orbit-two" />
        <div className="phone-mockup">
          <div className="phone-top"><span /><span /></div>
          <div className="phone-brand">MG.</div>
          <div className="phone-search">Buscar produtos</div>
          <div className="phone-product">
            <span className="bottle-shape bottle-one" />
            <span className="bottle-shape bottle-two" />
            <span className="bottle-shape bottle-three" />
          </div>
          <div className="phone-lines"><i /><i /><i /></div>
          <div className="phone-nav"><i /><i /><i /><i /></div>
        </div>
        <span className="art-sticker">APP<br />DESIGN</span>
      </div>
    );
  }

  if (number === "02") {
    return (
      <div className="project-art art-album">
        <span className="art-index">MEMORIES / 02</span>
        <div className="album-sun" />
        <div className="album-heading">
          <span>UM DIA</span>
          <strong>INESQUECÍVEL</strong>
          <span>MEMÓRIAS PARA SEMPRE</span>
        </div>
        <div className="album-photo photo-back">
          <span>R & L</span>
        </div>
        <div className="album-photo photo-front">
          <div className="photo-placeholder">
            <span>ROSANGELA</span>
            <span>&</span>
            <span>LUCAS</span>
          </div>
        </div>
        <span className="album-caption">um álbum colaborativo</span>
      </div>
    );
  }

  if (number === "03") {
    return (
      <div className="project-art art-marry">
        <span className="art-index">WEDDING DIGITAL / 03</span>
        <div className="marry-orbit orbit-a" />
        <div className="marry-orbit orbit-b" />
        <div className="marry-monogram">ms</div>
        <div className="marry-heading">
          <span>O UNIVERSO DO</span>
          <strong>seu casamento.</strong>
        </div>
        <div className="marry-panels">
          <span>CONVITES</span>
          <span>RSVP</span>
          <span>ÁLBUNS</span>
        </div>
        <span className="marry-footer">TECNOLOGIA COM AFETO</span>
      </div>
    );
  }

  return (
    <div className="project-art art-abg">
      <span className="art-index">INSTITUTIONAL WEBSITE / 04</span>
      <div className="abg-blueprint blueprint-one" />
      <div className="abg-blueprint blueprint-two" />
      <div className="abg-grid" />
      <div className="abg-logo">
        <span className="abg-symbol">ABG<span>.</span></span>
        <span>ENGENHARIA</span>
      </div>
      <div className="abg-art-copy">
        <span>SOLUÇÕES COM</span>
        <strong>precisão<br />e confiança.</strong>
      </div>
      <div className="abg-art-line" />
      <span className="abg-art-tag">WEB DESIGN · 2026</span>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "main section[id]"
    );

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(selectedProject));

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Bia Rodrigues, início"
        >
          <span className="brand-mark">BR<span>.</span></span>
          <span className="brand-name">
            Bia Rodrigues
            <small>Digital Solutions</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          {[
            ["Início", "#inicio"],
            ["Sobre", "#sobre"],
            ["Serviços", "#servicos"],
            ["Projetos", "#projetos"],
            ["Tecnologias", "#tecnologias"],
            ["Formação", "#formacao"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className={activeSection === href.slice(1) ? "active" : ""}
              aria-current={activeSection === href.slice(1) ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-topline" data-reveal>
            <span className="eyebrow">
              <i /> PORTFÓLIO DIGITAL · 2026
            </span>
            <span className="hero-location">RIO DE JANEIRO, BR</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="hero-intro">Olá, eu sou a Bia.</p>
              <h1>
                Ideias que<br />
                ganham vida<br />
                <span>digital<span className="pink-dot">.</span></span>
              </h1>
              <p className="hero-description">
                Dev Front-End em formação, criando landing pages, sites e experiências digitais
                que unem design, funcionalidade e tecnologia para pessoas e negócios.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projetos">
                  Explorar projetos
                </a>
                <a className="text-link" href="#sobre">
                  Conheça meu trabalho
                </a>
              </div>
              <div className="hero-socials">
                <a
                  href="https://github.com/biarodriguesf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/anabeatrizrodriguesfulgencio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:anabeatrizrf.tech@gmail.com"
                  aria-label="E-mail"
                >
                  <MailIcon />
                </a>
                <span className="social-divider" />
                <span className="social-label">
                  CÓDIGO, IDEIAS & POSSIBILIDADES
                </span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="visual-outline" />
              <div className="visual-orbit orbit-outer" />
              <div className="visual-orbit orbit-inner" />
              <div className="visual-center">
                <span className="visual-br">BR<span>.</span></span>
                <span className="visual-center-caption">
                  DESIGNING<br />MY NEXT CHAPTER
                </span>
              </div>
              <div className="code-card">
                <div className="code-card-top">
                  <span /><span /><span />
                  <small>about-me.js</small>
                </div>
                <pre><span className="code-purple">const</span> bia = {"{"}<br />{"  "}área: <span className="code-green">"tecnologia"</span>,<br />{"  "}foco: <span className="code-green">"cibersegurança"</span>,<br />{"  "}status: <span className="code-green">"em evolução"</span><br />{"}"};</pre>
              </div>
              <div className="floating-label label-tech">
                <span>✳</span> Tecnologia
              </div>
              <div className="floating-label label-cyber">
                <span>✳</span> Front-End & Web
              </div>
              <span className="visual-index">01 / 04</span>
            </div>
          </div>

          <div className="hero-bottom" data-reveal>
            <span>UMA IDEIA DE CADA VEZ.</span>
            <a href="#sobre">ROLE PARA DESCOBRIR</a>
            <span>ESTUDANTE · CRIADORA · DESENVOLVEDORA</span>
          </div>
        </section>

        <div className="marquee" aria-label="Tecnologia, criatividade e evolução">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index}>
                TECNOLOGIA <i>✳</i> CRIATIVIDADE <i>✳</i> EVOLUÇÃO <i>✳</i>
                NOVAS POSSIBILIDADES <i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="about section-space" id="sobre">
          <div className="about-inner section-wrap">
          <div className="section-kicker" data-reveal>
            <span>01</span> / SOBRE MIM
          </div>
          <div className="about-layout">
            <div className="about-title" data-reveal>
              <p className="eyebrow">NEM SEMPRE FOI SOBRE TECNOLOGIA.</p>
              <h2>Uma trajetória<br />em <span>evolução.</span></h2>
              <div className="about-asterisk">✳</div>
            </div>
            <div className="about-content" data-reveal>
              <blockquote>
                “Eu decidi mudar minha história e comecei pelos estudos.”
              </blockquote>
              <p>
                Minha jornada na tecnologia começou com uma decisão: abrir espaço
                para novas possibilidades e construir um caminho profissional que
                fizesse sentido para mim.
              </p>
              <p>
                Nunca havia tentado o ENEM. Conquistei uma bolsa integral pelo
                ProUni e fui aprovada para Engenharia Ambiental na UFRJ, mas
                escolhi seguir em Sistemas de Informação. Hoje, estou no 6º período
                e continuo transformando curiosidade em aprendizado e projetos reais.
              </p>
              <a className="text-link" href="#formacao">
                Mais sobre minha jornada
              </a>
            </div>
          </div>
          <div className="stats-row" data-reveal>
            <div className="stat-item">
              <strong>30<span>+</span></strong>
              <span>anos de vida e novas escolhas</span>
            </div>
            <div className="stat-item">
              <strong>06</strong>
              <span>período de Sistemas de Informação</span>
            </div>
            <div className="stat-item">
              <strong>100<span>%</span></strong>
              <span>bolsa ProUni</span>
            </div>
            <div className="stat-note">
              O próximo capítulo<br />está em construção.
            </div>
          </div>
          </div>
        </section>

        <section className="services-section section-space" id="servicos">
          <div className="services-content section-wrap">
            <div className="section-heading-row services-heading" data-reveal>
              <div>
                <p className="section-kicker"><span>02</span> O QUE POSSO CRIAR</p>
                <h2>Soluções digitais para<br /><span>tirar ideias do papel.</span></h2>
              </div>
              <p className="section-intro">
                Cada projeto começa com uma necessidade e ganha forma por meio do design, do desenvolvimento e da tecnologia.
              </p>
            </div>

            <div className="services-timeline">
              <article className="service-step" data-reveal>
                <div className="service-step-marker" aria-hidden="true"><span>01</span></div>
                <div className="service-step-content">
                  <span className="service-index">PRESENÇA DIGITAL</span>
                  <h3>Landing Pages</h3>
                  <p>Páginas estratégicas para divulgar serviços, campanhas ou produtos e facilitar o contato com seu público.</p>
                  <span className="service-tags">Divulgação <i>·</i> Clareza <i>·</i> Responsividade</span>
                </div>
              </article>

              <article className="service-step" data-reveal>
                <div className="service-step-marker" aria-hidden="true"><span>02</span></div>
                <div className="service-step-content">
                  <span className="service-index">PRESENÇA PROFISSIONAL</span>
                  <h3>Sites Institucionais</h3>
                  <p>Sites para apresentar sua empresa, seus serviços e sua identidade com uma experiência organizada em diferentes telas.</p>
                  <span className="service-tags">Negócios <i>·</i> Serviços <i>·</i> Portfólios</span>
                </div>
              </article>

              <article className="service-step" data-reveal>
                <div className="service-step-marker" aria-hidden="true"><span>03</span></div>
                <div className="service-step-content">
                  <span className="service-index">SOLUÇÕES WEB</span>
                  <h3>Sistemas e Aplicações</h3>
                  <p>Interfaces e experiências web personalizadas para organizar informações, simplificar tarefas e apoiar processos.</p>
                  <span className="service-tags">Front-End <i>·</i> Interfaces <i>·</i> Funcionalidade</span>
                </div>
              </article>

              <article className="service-step service-step-last" data-reveal>
                <div className="service-step-marker" aria-hidden="true"><span>04</span></div>
                <div className="service-step-content">
                  <span className="service-index">EXPERIÊNCIA DIGITAL</span>
                  <h3>Projetos Personalizados</h3>
                  <p>Soluções digitais desenvolvidas a partir das necessidades de cada projeto, com recursos e experiências pensados sob medida.</p>
                  <span className="service-tags">Personalização <i>·</i> Experiência <i>·</i> Tecnologia</span>
                </div>
              </article>
            </div>

            <div className="services-cta" data-reveal>
              <div className="services-cta-copy">
                <h3>Uma boa ideia merece <span>sair do rascunho.</span></h3>
                <p>Me conte o que você quer construir. Vamos encontrar o caminho digital certo para transformar sua ideia em projeto.</p>
              </div>
              <a className="button button-dark services-cta-button" href="#contato">
                Vamos conversar
              </a>
            </div>
          </div>
        </section>

        <section className="projects-section section-space" id="projetos">
          <div className="section-wrap">
            <div className="section-kicker" data-reveal>
              <span>03</span> / PROJETOS SELECIONADOS
            </div>
            <div className="section-heading-row" data-reveal>
              <div>
                <p className="eyebrow">IDEIAS QUE GANHAM FORMA.</p>
                <h2>O que estou<br /><span>construindo.</span></h2>
              </div>
              <p className="section-intro">
                Projetos que nasceram de ideias reais e se transformaram em
                experiências digitais, unindo tecnologia, criatividade e
                resolução de problemas.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card project-card-${project.number}`}
                  key={project.number}
                  data-reveal
                  style={{ "--reveal-delay": `${(index % 2) * 100}ms` }}
                >
                  <div className="project-art-wrap">
                    <ProjectVisual number={project.number} />
                    <span className="project-number">
                      {project.number} / 04
                    </span>
                    {project.link !== "#" && (
                      <a
                        className="project-open"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir ${project.title}`}
                      >
                        Abrir projeto
                      </a>
                    )}
                  </div>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>2026</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.link !== "#" ? (
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver projeto
                        </a>
                      ) : (
                        <span className="project-link project-disabled">
                          Projeto em desenvolvimento
                        </span>
                      )}
                      {project.github && (
                        <a
                          className="project-github"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub de ${project.title}`}
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      <button
                        className="details-button"
                        onClick={() => setSelectedProject(project)}
                      >
                        Detalhes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-footnote" data-reveal>
              <span></span>
              <span className="projects-footnote-discover">
                <span className="pink-dot"></span>
              </span>
            </div>
          </div>
        </section>

        <section className="tech-section" id="tecnologias">
          <div className="tech-ambient" aria-hidden="true">
            <span className="tech-ambient-orbit tech-ambient-orbit-one" />
            <span className="tech-ambient-orbit tech-ambient-orbit-two" />
            <span className="tech-ambient-glow" />
            <span className="tech-ambient-cross tech-cross-one">✳</span>
            <span className="tech-ambient-cross tech-cross-two">✳</span>
          </div>

          <div className="tech-content-wrap">
          <div className="section-kicker" data-reveal>
            <span>04</span> / MINHA STACK
          </div>

          <div className="tech-heading" data-reveal>
            <div className="tech-heading-copy">
              <p className="eyebrow">APRENDER. CONSTRUIR. EVOLUIR.</p>
              <h2>Ferramentas que dão<br /><span>vida às ideias.</span></h2>
              <p>
                Tecnologias que utilizo nos meus projetos e continuo explorando para criar experiências digitais cada vez melhores.
              </p>
            </div>
            <div className="tech-stack-stamp" aria-label="Stack em evolução">
              <span className="tech-stamp-top">BR. / STACK</span>
              <span className="tech-stamp-symbol">✳</span>
              <span className="tech-stamp-bottom">BUILD · LEARN · REPEAT</span>
            </div>
          </div>

          <div className="tech-grid-label" data-reveal>
            <span><i></i> TECNOLOGIAS E FERRAMENTAS</span>
            <span>09 ITENS</span>
          </div>

          <div className="tech-grid">
            {technologies.map((technology, index) => (
              <article
                className="tech-card"
                key={technology.name}
                data-reveal
                style={{ "--reveal-delay": `${index * 55}ms` }}
              >
                <span className="tech-card-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="tech-icon-wrap">
                  <TechnologyIcon name={technology.icon} />
                </div>
                <div className="tech-card-copy">
                  <strong>{technology.name}</strong>
                  <span>{technology.level}</span>
                </div>
              </article>
            ))}
          </div>

          </div>
        </section>

        <section className="formation-section section-space" id="formacao">
          <div className="section-wrap">
            <div className="section-kicker" data-reveal>
              <span>05</span> / FORMAÇÃO & CAMINHO
            </div>
            <div className="formation-layout">
              <div className="formation-heading" data-reveal>
                <p className="eyebrow">PASSO A PASSO.</p>
                <h2>Aprender.<br /><span>Experimentar.</span><br />Evoluir.</h2>
                <p>
                  Uma trajetória construída com curiosidade, consistência e vontade de aprender.
                </p>
              </div>
              <div className="timeline">
                <article className="timeline-item" data-reveal>
                  <div className="timeline-marker">01</div>
                  <div className="timeline-content">
                    <span className="timeline-label">EM ANDAMENTO</span>
                    <h3>Sistemas de Informação</h3>
                    <p>Graduação · 6º período</p>
                    <span className="timeline-description">
                      Fundamentos de tecnologia, desenvolvimento de sistemas e construção de soluções digitais.
                    </span>
                  </div>
                </article>
                <article className="timeline-item" data-reveal>
                  <div className="timeline-marker">02</div>
                  <div className="timeline-content">
                    <span className="timeline-label">OUT. — DEZ. 2026</span>
                    <h3>Cibersegurança do Zero à Prática</h3>
                    <p>Santander Open Academy + DIO</p>
                    <span className="timeline-description">
                      Formação complementar para aprofundar conhecimentos em segurança da informação.
                    </span>
                  </div>
                </article>
                <article className="timeline-item" data-reveal>
                  <div className="timeline-marker">03</div>
                  <div className="timeline-content">
                    <span className="timeline-label">EXPERIÊNCIA PROFISSIONAL</span>
                    <h3>Administrativo & Comercial</h3>
                    <p>Atendimento, organização e negociação</p>
                    <span className="timeline-description">
                      Experiência com atendimento, acompanhamento de oportunidades, orçamentos e relacionamento com clientes.
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap section-space" id="contato">
          <div className="section-kicker" data-reveal>
            <span>06</span> / CONTATO
          </div>

          <div className="contact-shell" data-reveal>
            <div className="contact-intro">
              <span className="contact-eyebrow"><span className="contact-status-dot" /> VAMOS CONVERSAR</span>
              <h2>Seu próximo projeto começa com uma <span>mensagem.</span></h2>
              <p className="contact-description">
                Tem uma ideia, precisa de um site ou quer tirar um projeto digital do papel? Me conte um pouco sobre o que você imagina. Vamos encontrar o melhor caminho juntos.
              </p>

              <div className="contact-info-list">
                <a className="contact-info-card" href="mailto:anabeatrizrf.tech@gmail.com">
                  <span className="contact-info-icon"><MailIcon /></span>
                  <span className="contact-info-copy"><small>ME ESCREVA POR E-MAIL</small><strong>anabeatrizrf.tech@gmail.com</strong></span>
                  <span className="contact-info-mark">✳</span>
                </a>
                <a className="contact-info-card contact-info-whatsapp" href="https://wa.me/5521993051380" target="_blank" rel="noreferrer">
                  <span className="contact-info-icon"><WhatsAppIcon /></span>
                  <span className="contact-info-copy"><small>CONVERSA RÁPIDA</small><strong>Fale comigo pelo WhatsApp</strong></span>
                  <span className="contact-info-mark">✳</span>
                </a>
              </div>

              <div className="contact-social-area">
                <span className="contact-social-label">VOCÊ TAMBÉM ME ENCONTRA AQUI</span>
                <div className="contact-socials">
                  <a href="https://www.instagram.com/biarodriguess.f/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                  <a href="https://github.com/biarodriguesf" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                  <a href="https://www.linkedin.com/in/anabeatrizrodriguesfulgencio" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const nome = String(formData.get("nome") || "").trim();
                const email = String(formData.get("email") || "").trim();
                const assunto = String(formData.get("assunto") || "").trim();
                const mensagem = String(formData.get("mensagem") || "").trim();
                const texto = `Olá, Bia! Meu nome é ${nome}.\nE-mail para retorno: ${email}\nAssunto: ${assunto || "Novo projeto"}\n\nMensagem: ${mensagem}`;
                window.open(`https://wa.me/5521993051380?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="contact-form-heading">
                <span className="contact-form-index">01 / NOVO CONTATO</span>
                <h3>Conte comigo para tirar sua ideia do papel.</h3>
                <p>Preencha os campos e sua mensagem será preparada no WhatsApp.</p>
              </div>

              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Seu nome <i>*</i></span>
                  <input type="text" name="nome" placeholder="Como posso te chamar?" autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>Seu e-mail <i>*</i></span>
                  <input type="email" name="email" placeholder="voce@exemplo.com" autoComplete="email" required />
                </label>
              </div>

              <label className="contact-field">
                <span>Sobre o que vamos conversar?</span>
                <select name="assunto" defaultValue="">
                  <option value="" disabled>Selecione o assunto</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Site institucional">Site institucional</option>
                  <option value="Sistema ou aplicação">Sistema ou aplicação</option>
                  <option value="Melhoria em um projeto existente">Melhoria em um projeto existente</option>
                  <option value="Oportunidade profissional">Oportunidade profissional</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </label>

              <label className="contact-field">
                <span>Sua mensagem <i>*</i></span>
                <textarea name="mensagem" rows="5" placeholder="Me conte um pouco sobre sua ideia, objetivo ou necessidade..." required />
              </label>

              <button className="contact-submit" type="submit">
                Enviar mensagem
              </button>
              <p className="contact-form-note">Ao enviar, o WhatsApp será aberto com os dados preenchidos para você revisar e encaminhar.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#inicio">BR<span>.</span></a>
        <span>Desenvolvido por Bia Rodrigues</span>
        <span>© 2026 · TODOS OS DIREITOS RESERVADOS</span>
        <a className="back-top" href="#inicio">VOLTAR AO TOPO</a>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar detalhes"
            >
              ×
            </button>
            <div className="modal-topline">
              <span>PROJETO {selectedProject.number}</span>
              <span>{selectedProject.category}</span>
            </div>
            <h2 id="modal-title">{selectedProject.title}<span>.</span></h2>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-detail">
              <span>01 / OBJETIVO</span>
              <p>{selectedProject.objective}</p>
            </div>
            <div className="modal-detail">
              <span>02 / DESENVOLVIMENTO</span>
              <p>{selectedProject.development}</p>
            </div>
            <div className="modal-detail">
              <span>03 / DESTAQUE</span>
              <p>{selectedProject.highlight}</p>
            </div>
            <div className="modal-tech">
              {selectedProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="modal-actions">
              {selectedProject.link !== "#" && (
                <a
                  className="button button-dark"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar projeto
                </a>
              )}
              {selectedProject.github && (
                <a
                  className="text-link"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver código no GitHub
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
