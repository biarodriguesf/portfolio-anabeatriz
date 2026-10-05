import { useState } from "react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "MG Depósito de Bebidas",
    category: "Aplicação Mobile",
    description:
      "Uma aplicação mobile pensada para transformar a experiência de compra, facilitar pedidos e organizar produtos de forma simples e intuitiva.",
    tech: ["React Native", "Expo", "JavaScript"],
    image: "/mg-project.jpg",
    link: "#",
    github: "https://github.com/biarodriguesf/mg-deposito-bebidas",
    details:
      "Aplicação mobile desenvolvida para facilitar a experiência de compra no MG Depósito de Bebidas, com foco em organização de produtos, pedidos e uma navegação simples e intuitiva.",
    objective:
      "Criar uma experiência mobile mais prática para facilitar a visualização dos produtos, organizar pedidos e tornar o processo de compra mais simples e intuitivo para o cliente.",
    development:
      "O projeto foi pensado e desenvolvido como uma aplicação mobile utilizando React Native e Expo. A estrutura foi organizada para oferecer uma navegação clara, apresentação dos produtos e uma experiência de compra próxima à realidade de um aplicativo comercial.",
    highlight:
      "O destaque está na transformação de uma necessidade real de negócio em uma experiência digital, unindo interface, organização de produtos e praticidade para o usuário.",
  },
  {
    number: "02",
    title: "Álbum Rosangela & Lucas",
    category: "Experiência Digital",
    description:
      "Uma experiência digital criada para um momento especial, permitindo que convidados compartilhem fotos e recados e construam juntos uma memória do casamento.",
    tech: ["React", "Vite", "Supabase"],
    image: "/album-project.jpg",
    link: "https://album-rosangela-lucas.vercel.app/",
    github: "https://github.com/biarodriguesf/album-rosangela-lucas",
    details:
      "Álbum colaborativo desenvolvido para o casamento de Rosangela & Lucas. A experiência permite que convidados compartilhem fotos e recados, criando uma memória digital colaborativa e especial.",
    objective:
      "Criar um espaço digital onde os convidados pudessem registrar fotos e recados durante o casamento, transformando diferentes momentos compartilhados em uma memória digital colaborativa.",
    development:
      "O projeto foi desenvolvido com React e Vite, utilizando Supabase para estruturar a persistência dos dados. A aplicação foi pensada para funcionar de maneira simples para os convidados, permitindo o envio de fotos, legendas e mensagens através de uma interface personalizada para o casamento.",
    highlight:
      "O grande destaque foi transformar uma ideia afetiva em uma experiência digital real e personalizada, conectando tecnologia, design e uma ocasião especial.",
  },
  {
    number: "03",
    title: "MARRY-SE",
    category: "Ecossistema Digital",
    description:
      "Uma iniciativa digital para o universo dos casamentos, conectando tecnologia, identidade e experiências personalizadas em diferentes soluções.",
    tech: ["React", "Vite", "CSS"],
    image: "/marry-project.jpg",
    link: "https://marry-se-three.vercel.app/",
    github: "https://github.com/biarodriguesf/marry-se",
    details:
      "Um ecossistema digital pensado para o universo dos casamentos, reunindo tecnologia, identidade e experiências personalizadas em diferentes soluções para noivos.",
    objective:
      "Criar uma proposta digital voltada exclusivamente para o universo dos casamentos, reunindo diferentes soluções em um ecossistema com identidade própria e experiência personalizada.",
    development:
      "O projeto foi desenvolvido com React, Vite e CSS, estruturando uma experiência visual para apresentar a proposta da MARRY-SE, seus conceitos e soluções digitais. A interface foi construída com foco em identidade visual, navegação e apresentação dos serviços.",
    highlight:
      "O destaque está na criação de uma ideia de produto digital completa, unindo desenvolvimento, identidade de marca, experiência do usuário e soluções pensadas para um nicho específico.",
  },
];

const technologies = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Vite", icon: "vite" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Supabase", icon: "supabase" },
  { name: "Vercel", icon: "vercel" },
];

function TechnologyIcon({ type }) {
  const icons = {
    html: {
      src: "https://cdn.simpleicons.org/html5",
      alt: "HTML5",
    },
    css: {
      src: "https://cdn.simpleicons.org/css",
      alt: "CSS3",
    },
    javascript: {
      src: "https://cdn.simpleicons.org/javascript",
      alt: "JavaScript",
    },
    react: {
      src: "https://cdn.simpleicons.org/react",
      alt: "React",
    },
    vite: {
      src: "https://cdn.simpleicons.org/vite",
      alt: "Vite",
    },
    git: {
      src: "https://cdn.simpleicons.org/git",
      alt: "Git",
    },
    github: {
      src: "https://cdn.simpleicons.org/github",
      alt: "GitHub",
    },
    supabase: {
      src: "https://cdn.simpleicons.org/supabase",
      alt: "Supabase",
    },
    vercel: {
      src: "https://cdn.simpleicons.org/vercel",
      alt: "Vercel",
    },
  };

  const icon = icons[type];

  if (!icon) return null;

  return (
    <img
      className={`technology-svg technology-${type}`}
      src={icon.src}
      alt={icon.alt}
      aria-hidden="true"
    />
  );
}

function GitHubIcon() {
  return (
    <svg
      className="social-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.02c-3.19.69-3.86-1.34-3.86-1.34-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="social-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.16 3.27A2.27 2.27 0 1 1 .62 3.27a2.27 2.27 0 0 1 4.54 0ZM.85 8.13h4.17V21.5H.85V8.13ZM7.64 8.13h4v1.83h.06c.56-1.06 1.93-2.18 3.97-2.18 4.25 0 5.03 2.8 5.03 6.45v7.27h-4.17v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41v6.56H7.64V8.13Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="social-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="social-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05.01C5.49.01.16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 23.99l6.27-1.64a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.43-8.44Zm-8.47 18.31a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.93 9.92h-.03Zm5.44-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="social-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="17.4"
        cy="6.7"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10.2c0 5.1-8 11.3-8 11.3S4 15.3 4 10.2a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ProjectVisual({ number }) {
  if (number === "01") {
    return (
      <div className="project-cover project-cover-mg">
        <div className="mg-glow" />

        <div className="mg-brand">
          <span>MG</span>
          <small>DEPÓSITO</small>
        </div>

        <div className="mg-phone">
          <div className="mg-phone-top">
            <span>MG DEPÓSITO</span>
            <span>☰</span>
          </div>

          <div className="mg-phone-banner">
            <small>BEBIDAS GELADAS</small>
            <strong>
              Seu pedido
              <br />
              do seu jeito.
            </strong>
          </div>

          <div className="mg-products">
            <div className="mg-product">
              <span className="mg-bottle bottle-one" />
              <small>Refrigerante</small>
            </div>

            <div className="mg-product">
              <span className="mg-bottle bottle-two" />
              <small>Bebidas</small>
            </div>

            <div className="mg-product">
              <span className="mg-bottle bottle-three" />
              <small>Ofertas</small>
            </div>
          </div>

          <div className="mg-cart">
            <span>Ver carrinho</span>
            <b>R$ 89,90</b>
          </div>
        </div>

        <div className="mg-label">
          <span>REACT NATIVE</span>
          <span>EXPO</span>
        </div>
      </div>
    );
  }

  if (number === "02") {
    return (
      <div className="project-cover project-cover-album">
        <div className="album-glow" />

        <div className="album-frame">
          <div className="album-top">
            <span>UM CAPÍTULO DE AMOR</span>
          </div>

          <div className="album-main">
            <div className="album-monogram">
              R <i>&</i> L
            </div>

            <p>Rosangela & Lucas</p>

            <div className="album-divider">
              <span />
              <b>♡</b>
              <span />
            </div>

            <small>Um dia para guardar no coração</small>
          </div>

          <div className="album-bottom">
            <span>FOTOS</span>
            <span>RECADOS</span>
            <span>MEMÓRIAS</span>
          </div>
        </div>

        <div className="album-photo photo-one" />
        <div className="album-photo photo-two" />

        <div className="album-card-note">
          <span>ÁLBUM DIGITAL</span>
          <strong>+</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-cover project-cover-marry">
      <div className="marry-orbit orbit-one" />
      <div className="marry-orbit orbit-two" />

      <div className="marry-header">
        <span className="marry-logo">ms.</span>
        <span>DIGITAL</span>
      </div>

      <div className="marry-center">
        <small>TECNOLOGIA PARA</small>

        <h4>
          MARRY<span>-</span>SE
        </h4>

        <p>O universo do seu casamento.</p>
      </div>

      <div className="marry-panels">
        <div>
          <span>01</span>
          <strong>Convite</strong>
        </div>

        <div>
          <span>02</span>
          <strong>RSVP</strong>
        </div>

        <div>
          <span>03</span>
          <strong>Álbum</strong>
        </div>
      </div>

      <div className="marry-line" />
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="logo" aria-label="Bia Rodrigues">
            BR<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#formacao">Formação</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-content">
            <div className="hero-copy">
              <p className="hero-small">OLÁ, EU SOU</p>

              <h1>
                Ana Beatriz
                <strong>Rodrigues Fulgêncio</strong>
              </h1>

              <p className="hero-description">
                Estudante de Sistemas de Informação, construindo minha
                trajetória em tecnologia com foco em{" "}
                <strong>Cibersegurança</strong>.
              </p>

              <div className="hero-location">
                <span>
                  <LocationIcon />
                </span>
                Rio de Janeiro, RJ
              </div>

              <div className="hero-actions">
                <a href="#projetos" className="primary-button">
                  Ver meus projetos
                </a>

                <a href="#contato" className="secondary-button">
                  Entrar em contato
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

                <a
                  href="https://wa.me/5521993051380"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            <div className="hero-card-area">
              <div className="hero-card">
                <div className="hero-card-top">
                  <span className="code-dot" />
                  <span className="code-dot" />
                  <span className="code-dot" />
                </div>

                <div className="code-content">
                  <span className="code-line">
                    <i>const</i> <b>bia</b> = {"{"}
                  </span>

                  <span className="code-line indent">
                    <i>foco</i>: <em>"Cyber Security"</em>,
                  </span>

                  <span className="code-line indent">
                    <i>estudos</i>: <em>"Sistemas de Informação"</em>,
                  </span>

                  <span className="code-line indent">
                    <i>paixão</i>: <em>"Tecnologia"</em>,
                  </span>

                  <span className="code-line indent">
                    <i>status</i>: <em>"Construindo e evoluindo"</em>
                  </span>

                  <span className="code-line">{"};"}</span>
                </div>

                <div className="hero-card-bottom">
                  <span>portfolio.jsx</span>
                  <span>● online</span>
                </div>
              </div>

              <div className="floating-badge badge-one">
                <span>✦</span>
                Tecnologia
              </div>

              <div className="floating-badge badge-two">
                <span>⌁</span>
                Cyber Security
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section about-section" id="sobre">
          <div className="container">
            <div className="section-heading">
              <div>
                <p style={{ color: "var(--pink)" }}>MINHA TRAJETÓRIA</p>

                <h2>
                  Uma trajetória <span>em evolução.</span>
                </h2>
              </div>

              <p className="heading-description"></p>
            </div>

            <div className="about-grid">
              <div className="about-highlight">
                <span className="quote-mark">“</span>

                <h3>
                  Eu decidi mudar minha história
                  <br />
                  e comecei pelos estudos.
                </h3>

                <div className="about-line" />

                <p>
                  Uma escolha que abriu caminho para novos objetivos e
                  possibilidades.
                </p>
              </div>

              <div className="about-text">
                <p>
                  Sem nunca ter tentado o ENEM, decidi me dedicar aos estudos e
                  conquistei uma <strong>bolsa ProUni 100%</strong>, sendo
                  aprovada para <strong>Engenharia Ambiental na UFRJ</strong>.
                  Ao longo dessa jornada, percebi que meus interesses estavam
                  em outro caminho.
                </p>

                <p>
                  Foi então que decidi mudar de direção e construir uma nova
                  trajetória profissional.
                </p>

                <p>
                  Hoje, sigo evoluindo através do aprendizado, da tecnologia e
                  dos desafios que encontro pelo caminho, transformando cada
                  conquista em um novo passo para o futuro.
                </p>

                <div className="about-stats">
                  <div>
                    <strong>30</strong>
                    <span>anos</span>
                  </div>

                  <div>
                    <strong>6º</strong>
                    <span>período de SI</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>ProUni</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section projects-section" id="projetos">
          <div className="container">
            <div className="section-heading centered">
              <div>
                <p style={{ color: "var(--pink)" }}>PROJETOS</p>

                <h2>
                  O que estou <span>construindo.</span>
                </h2>
              </div>

              <p className="heading-description">
                Projetos que nasceram de ideias reais e se transformaram em
                experiências digitais, unindo tecnologia, criatividade e
                resolução de problemas.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-image">
                    <ProjectVisual number={project.number} />

                    <span className="project-number">{project.number}</span>
                  </div>

                  <div className="project-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.tech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action project-action-primary"
                        >
                          Ver projeto
                        </a>
                      ) : (
                        <span className="project-action project-action-disabled">
                          Ver projeto
                        </span>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action"
                      >
                        <GitHubIcon />
                        Ver código
                      </a>

                      <button
                        type="button"
                        className="project-action"
                        onClick={() => setSelectedProject(project)}
                      >
                        Mais detalhes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section className="section technologies-section" id="tecnologias">
          <div className="container">
            <div className="section-heading centered">
              <p>STACK</p>

              <h2>
                Tecnologias que <span>utilizo.</span>
              </h2>
            </div>

            <div className="technology-grid">
              {technologies.map((technology) => (
                <div className="technology-card" key={technology.name}>
                  <div className="technology-icon">
                    <TechnologyIcon type={technology.icon} />
                  </div>

                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMAÇÃO */}
        <section className="section formation-section" id="formacao">
          <div className="container">
            <div className="section-heading centered">
              <p>FORMAÇÃO E EXPERIÊNCIA</p>

              <h2>
                Estudos & <span>experiência.</span>
              </h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-marker" />

                <div className="timeline-content">
                  <span>ATUALMENTE</span>

                  <h3>Sistemas de Informação</h3>

                  <p>
                    6º período, construindo uma base sólida em tecnologia,
                    desenvolvimento e sistemas.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-marker" />

                <div className="timeline-content">
                  <span>FORMAÇÃO EM ANDAMENTO</span>

                  <h3>Cibersegurança</h3>

                  <p>
                    Santander | Cibersegurança do Zero à Prática, através da
                    Santander Open Academy e DIO.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-marker" />

                <div className="timeline-content">
                  <span>EXPERIÊNCIA PROFISSIONAL</span>

                  <h3>Administrativo & Comercial</h3>

                  <p>
                    Experiência com atendimento, organização, negociação,
                    acompanhamento de clientes e demandas comerciais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="contact-card">
              <div className="contact-content">
                <p className="contact-label">CONTATO</p>

                <h2>
                  Vamos transformar ideias em <span>projetos?</span>
                </h2>

                <p className="contact-description">
                  Tem uma ideia, oportunidade ou projeto em mente? Vamos
                  conversar e transformar possibilidades em algo real.
                </p>

                <a
                  href="https://wa.me/5521993051380"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Fale comigo
                </a>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:anabeatrizrf.tech@gmail.com"
                  className="contact-link"
                >
                  <MailIcon />

                  <div>
                    <span>E-mail</span>
                    <strong>anabeatrizrf.tech@gmail.com</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/5521993051380"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <WhatsAppIcon />

                  <div>
                    <span>WhatsApp</span>
                    <strong>(21) 99305-1380</strong>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/biarodriguess.f/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <InstagramIcon />

                  <div>
                    <span>Instagram</span>
                    <strong>@biarodriguess.f</strong>
                  </div>
                </a>

                <a
                  href="https://github.com/biarodriguesf"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <GitHubIcon />

                  <div>
                    <span>GitHub</span>
                    <strong>github.com/biarodriguesf</strong>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/anabeatrizrodriguesfulgencio"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <LinkedInIcon />

                  <div>
                    <span>LinkedIn</span>
                    <strong>
                      linkedin.com/in/anabeatrizrodriguesfulgencio
                    </strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL - MAIS DETALHES */}
      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar detalhes"
            >
              ×
            </button>

            <div className="project-modal-header">
              <div>
                <span className="project-category">
                  {selectedProject.category}
                </span>

                <h3>{selectedProject.title}</h3>
              </div>

              <span className="project-modal-number">
                {selectedProject.number}
              </span>
            </div>

            <div className="project-modal-line" />

            <div className="project-detail-grid">
              <div className="project-detail-card">
                <span className="project-detail-icon">◎</span>
                <div>
                  <small>OBJETIVO</small>
                  <p>{selectedProject.objective}</p>
                </div>
              </div>

              <div className="project-detail-card">
                <span className="project-detail-icon">⌁</span>
                <div>
                  <small>COMO FOI FEITO</small>
                  <p>{selectedProject.development}</p>
                </div>
              </div>

              <div className="project-detail-card project-detail-full">
                <span className="project-detail-icon">✦</span>
                <div>
                  <small>DESTAQUE DO PROJETO</small>
                  <p>{selectedProject.highlight}</p>
                </div>
              </div>
            </div>

            <div className="project-modal-tech-section">
              <div className="project-modal-tech-title">
                <span>STACK UTILIZADA</span>
                <div />
              </div>

              <div className="project-modal-tech">
                {selectedProject.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            BR<span>.</span>
          </div>

          <p>Desenvolvido por Bia Rodrigues</p>

          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;