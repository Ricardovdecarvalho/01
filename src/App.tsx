import React from 'react';
import './style.css';

const App: React.FC = () => {
  return (
    <body className="bg-[#1c1d21]">
      <main className="overflow-x-hidden bg-[#28292E]">
        <section className="relative z-10 px-6 pt-10 sm:flex sm:flex-col sm:items-center">
          <header className="flex w-full items-center justify-between px-[6.25rem]">
            <a href="">
              <img
                alt="Auto Roleta"
                loading="lazy"
                width="160"
                height="35"
                decoding="async"
                src="images/logo.svg"
              />
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <a
                className="rounded-lg border border-white px-10 py-[10px] text-sm leading-6 text-white transition-all hover:opacity-75"
                href="#LINK-DO_BOTÂO-DE-LOGIN"
              >
                Login
              </a>
              <a
                className="rounded-lg border border-[#E51E3E] bg-[#E51E3E] px-10 py-[10px] text-sm leading-6 text-white transition-all hover:opacity-75"
                href="#LINK-DO_BOTÂO-DE-REGISTAR"
              >
                Registrar
              </a>
            </div>
          </header>
          <h1 className="mx-auto mt-12 text-center text-[2rem] font-bold leading-tight text-white sm:max-w-[57.25rem] sm:text-[4rem]">
            Aposte na Roleta de forma <span className="text-[#E51E3E]">100% automatizada</span>
          </h1>
          <p className="mx-auto mt-8 text-center text-xs leading-5 text-[#969696] sm:max-w-[1000px] sm:text-lg sm:leading-8">
            Coloque a sua estratégia personalizada que a I.A vai trabalhar gerando lucros enquanto você dorme.
          </p>

          <iframe 
          src="https://scripts.converteai.net/89d619f4-a9d1-448b-b560-ef3ebb50914b/players/661ade34de47080007ed1435/embed.html" 
          id="ifr_661ade34de47080007ed1435" 
          style={{ border: '2px solid #ffc845', marginTop: '20px', borderRadius: '8px', aspectRatio: '16/9' }}
          title="Embedded Content"
        ></iframe>


          <footer className="mt-16 flex items-center justify-center gap-4 sm:gap-6">
            <a
              className="whitespace-nowrap rounded-lg border border-[#E51E3E] bg-[#E51E3E] px-8 py-3 text-sm leading-6 text-white transition-all hover:opacity-75 sm:px-11"
              href="#LINK-DO_BOTÂO-DE-REGISTRAR2"
            >
              Teste grátis
            </a>
            <a
              className="whitespace-nowrap rounded-lg border border-white px-11 py-3 text-sm leading-6 text-white transition-all hover:opacity-75"
              href="https://tecnologiamilionaria.com/login"
            >
              Fazer login
            </a>
          </footer>
          <div className="relative mt-16 aspect-video w-full lg:h-[585px] lg:w-[1041px]">
            <img
              alt="Auto Roleta Dashboard"
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              src="images/hero.webp"
            />
          </div>
          <div className="absolute left-0 top-0 -z-10 h-[900px] w-screen bg-[#1C1D22] sm:h-[1100px] sm:rounded-br-[25%]"></div>
        </section>
        <section className="flex flex-col items-center justify-between gap-16 px-8 pt-44 sm:flex-row sm:px-[7.5rem] sm:pt-48">
          <div className="max-w-[687px]">
            <h1 className="text-[2rem] font-bold leading-snug text-white sm:text-5xl">
              Você não precisa ter nenhuma estratégia!
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#969696] sm:text-base">
              Temos um ranking com as melhores estratégias de todo mundo que usa o bot! Já são mais de 10.000 pessoas, você só precisa copiar colar e ter o mesmo resultado!
            </p>
            <div className="mt-9 flex items-center gap-3">
              <div className="flex">
                <img
                  alt="Pessoa"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  className="-mr-2 rounded-full border border-[#1C1D21]"
                  srcSet="images/person-1-1.png 1x, images/person-1.png 2x"
                  src="images/person-1.png"
                />
                <img
                  alt="Pessoa"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  className="-mr-2 rounded-full border border-[#1C1D21]"
                  srcSet="images/person-2-1.png 1x, images/person-2.png 2x"
                  src="images/person-2.png"
                />
                <img
                  alt="Pessoa"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  className="-mr-2 rounded-full border border-[#1C1D21]"
                  srcSet="images/person-3-1.png 1x, images/person-3.png 2x"
                  src="images/person-3.png"
                />
                <img
                  alt="Pessoa"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  className="rounded-full border border-[#1C1D21]"
                  srcSet="images/person-4.png 1x, images/person-4-1.png 2x"
                  src="images/person-4-1.png"
                />
              </div>
              <span className="text-sm font-semibold leading-normal text-[#969696]">+10.000 usuários cadastrados</span>
            </div>
            <footer>
              <a
                className="mt-11 inline-block rounded-lg border border-[#E51E3E] bg-[#E51E3E] px-11 py-3 text-sm font-semibold leading-6 text-white transition-all hover:opacity-75"
                href="#"
              >
                Teste grátis
              </a>
            </footer>
          </div>
          <img alt="Telas em dispositivos móveis" loading="lazy" width="416" height="617" decoding="async" src="images/screens-mobile-version.webp" />
        </section>
        <section className="flex flex-col items-center bg-[#1C1D21] px-4 pb-36 pt-32">
          <h1 className="text-[2rem] font-bold text-white sm:text-[3.25rem]">Conquistas</h1>
          <p className="mt-10 px-8 text-center text-sm text-[#969696]">
            Com o bot automático, você nunca mais vai precisar se preocupar em pegar o sinal, com controle emocional nem meta, você vai configurar só uma vez e sempre que aparecer ele vai entrar pra você, você estando online ou não!
          </p>
          <div className="mt-16 flex flex-col justify-center gap-8 sm:flex-row">
            <article className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#17181D] px-9 py-11">
              <strong className="text-[2.625rem] font-bold text-white">+ 2.3m</strong>
              <p className="text-base text-[#8B8D97]">Apostas realizadas</p>
            </article>
            <article className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#17181D] px-9 py-11">
              <strong className="text-[2.625rem] font-bold text-white">+ 17.213 mil</strong>
              <p className="text-base text-[#8B8D97]">Usuários ativos</p>
            </article>
            <article className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#17181D] px-9 py-11">
              <strong className="text-[2.625rem] font-bold text-white">+ R$ 760.827</strong>
              <p className="text-base text-[#8B8D97]">Faturados através do nosso app</p>
            </article>
          </div>
        </section>
        <section className="flex flex-col items-center px-8 pb-40 pt-32 sm:px-60" id="plans">
          <h1 className="text-[2rem] font-bold text-white sm:text-[3.25rem]">O que você recebe?</h1>
          <p className="mt-10 text-center text-sm text-[#969696]">lembrando tudo isso 100% GRÁTIS</p>
          <div className="mt-36 flex flex-col items-center gap-10 px-4 sm:flex-row">
            <section className="flex flex-col rounded-xl bg-[#17181d] px-8 py-11 relative border border-[#e51e3e]">
              <span className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-full items-center justify-center rounded-t bg-[#e51e3e] px-[10px] py-1 text-xs font-bold uppercase text-white">
                Popular
              </span>
              <header>
                <span className="block text-center text-sm text-[#8b8d97]">Plano</span>
                <strong className="mt-1 block text-center text-[1.75rem] font-medium text-white">Mensal</strong>
                <strong className="mt-2 block text-center text-lg font-medium text-white">
                  R$ <span className="text-[1.75rem]">00,00</span>/ mês
                </strong>
              </header>
              <ul className="mt-10 flex flex-col gap-6">
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">100% em nuvem</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Análises em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático BACBO</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático MINES</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Utilização ilimitada</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Histórico de apostas</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Suporte</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Crie sua Estratégia</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Validador de Estratégias</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano não inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/uncheck.svg" />
                  <span className="font-medium leading-5 text-[#777a85] line-through">Grupo VIP de alavancagem</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano não inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/uncheck.svg" />
                  <span className="font-medium leading-5 text-[#777a85] line-through">Ranking de estratégias</span>
                </li>
              </ul>
              <footer className="mt-6 flex flex-col items-center gap-4">
                <a href="#LINK-DO_BOTÂO-DE-REGISTRAR3">
                  <button
                    className="flex h-[50px] items-center justify-center rounded-md bg-[#e51e3e] text-base font-semibold text-white transition-all hover:opacity-75 active:brightness-90 disabled:cursor-not-allowed disabled:opacity-50 w-56"
                    type="button"
                  >
                    Assinar
                  </button>
                </a>
              </footer>
            </section>
            <section className="flex flex-col rounded-xl bg-[#17181d] px-8 py-11">
              <header>
                <span className="block text-center text-sm text-[#8b8d97]">Plano</span>
                <strong className="mt-1 block text-center text-[1.75rem] font-medium text-white">Vitálicio</strong>
                <strong className="mt-2 block text-center text-lg font-medium text-white">
                  R$ <span className="text-[1.75rem]">9,99</span>
                </strong>
              </header>
              <ul className="mt-10 flex flex-col gap-6">
              <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">100% em nuvem</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Análises em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático BACBO</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático MINES</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Utilização ilimitada</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Histórico de apostas</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Suporte</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Crie sua Estratégia</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Validador de Estratégias</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Ranking de estratégias</span>
                </li>                
                <li className="flex items-center gap-3">
                  <img alt="Este plano não inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/uncheck.svg" />
                  <span className="font-medium leading-5 text-[#777a85] line-through">Grupo VIP de alavancagem</span>
                </li>
              </ul>
              <footer className="mt-6 flex flex-col items-center gap-4">
                <a href="#LINK-DO_BOTÂO-DE-REGISTAR4">
                  <button
                    className="flex h-[50px] items-center justify-center rounded-md bg-[#e51e3e] text-base font-semibold text-white transition-all hover:opacity-75 active:brightness-90 disabled:cursor-not-allowed disabled:opacity-50 w-56"
                    type="button"
                  >
                    Assinar
                  </button>
                </a>
              </footer>
            </section>
            <section className="flex flex-col rounded-xl bg-[#17181d] px-8 py-11">
              <header>
                <span className="block text-center text-sm text-[#8b8d97]">Plano</span>
                <strong className="mt-1 block text-center text-[1.75rem] font-medium text-white">Vitálicio</strong>
                <strong className="mt-2 block text-center text-lg font-medium text-white">
                  R$ <span className="text-[1.75rem]">47,00</span>
                </strong>
              </header>
              <ul className="mt-10 flex flex-col gap-6">
              <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">100% em nuvem</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Análises em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático BACBO</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Robô automático MINES</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Utilização ilimitada</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Histórico de apostas</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Suporte</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Crie sua Estratégia</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Validador de Estratégias</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Ranking de estratégias</span>
                </li>
                <li className="flex items-center gap-3">
                  <img alt="Este plano inclui este benefício" loading="lazy" width="20" height="20" decoding="async" src="images/check.svg" />
                  <span className="text-sm font-medium leading-5 text-white">Grupo VIP de alavancagem</span>
                </li>             
                
              </ul>
              <footer className="mt-6 flex flex-col items-center gap-4">
                <a href="#LINK-DO_BOTÂO-DE-REGISTRAR5">
                  <button
                    className="flex h-[50px] items-center justify-center rounded-md bg-[#e51e3e] text-base font-semibold text-white transition-all hover:opacity-75 active:brightness-90 disabled:cursor-not-allowed disabled:opacity-50 w-56"
                    type="button"
                  >
                    Assinar
                  </button>
                </a>
              </footer>
            </section>
          </div>
        </section>
        <section className="flex flex-col items-center bg-[#1C1D22] px-8 pb-64 pt-24 sm:px-80">
          <h1 className="text-center text-[2rem] font-bold text-white sm:text-[3.25rem]">FAQ</h1>
          <p className="mt-10 text-center text-sm text-[#969696]">Perguntas Frequentes</p>
          <dl className="mt-16 w-full max-w-3xl sm:mt-28">
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                Posso testar de graça?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">
                  Sim. Assim que fizer o cadastro já vai ter o acesso aos 3 robôs Roleta, BACBO e MINES totalmente GRÁTIS(Free).
                </p>
              </div>
            </details>
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                Posso utilizar no offline?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">
                  Sim, a Execução do robô é na nuvem. Seu celular ou computador pode ficar desligado e as entradas ficarão
                  acontecendo.
                </p>
              </div>
            </details>
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                Como criar uma conta?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">
                  Para criar uma conta, basta clicar aqui: <a className="text-[#E51E3E] underline" href="https://tecnologiamilionaria.com/registro">CLIQUE AQUI PARA SE CADASTRAR</a> ou clique no botão “Registrar” no
                  canto superior direito da tela.
                </p>
              </div>
            </details>
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                Funciona no celular?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">Sim, funciona em todos os dispositivos com acesso a internet.</p>
              </div>
            </details>
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                A plataforma é segura?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">
                  Valorizamos a privacidade dos nossos usuários. Todas as informações são tratadas com máxima
                  confidencialidade, garantindo uma experiência segura e tranquila ao utilizar nossa plataforma.
                </p>
              </div>
            </details>
            <details className="group border-b border-[#43454B] pb-8 pt-6 marker:content-['']">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                Preciso ter experiência?
                <img alt="Abrir" loading="lazy" width="24" height="24" decoding="async" className="group-open:hidden" src="images/plus-circle.svg" />
                <img alt="Fechar" loading="lazy" width="24" height="24" decoding="async" className="hidden group-open:block" src="images/minus-circle.svg" />
              </summary>
              <div className="pt-2">
                <p className="text-sm text-[#969696]">
                  Não, mesmo que você não tenha nenhuma estratégia, temos um ranking com as melhores estratégias de todos que estão usando o bot em tempo real, basta clicar uma vez e vai copiar a estratégia pra você lucrar também.
                </p>
              </div>
            </details>
          </dl>
        </section>
        <footer className="px-8 pt-16 sm:px-32">
          <ul className="grid md:grid-cols-4">
            <li>
              <img alt="Auto Roleta" loading="lazy" width="160" height="35" decoding="async" src="images/logo.svg" />
              <span className="mt-9 block text-lg leading-8 text-white">
                Você lucrando de forma <br />
                100% automática
              </span>
            </li>
          </ul>
          <div className="flex w-full items-center justify-center py-5">
            <span className="text-base leading-7 text-[#838489]">©2024 TecnologiaMilionária. Todos os direitos reservados</span>
          </div>
        </footer>
      </main>
    </body>
  );
};

export default App;
