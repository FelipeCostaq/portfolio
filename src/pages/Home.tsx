import { useEffect, useState } from 'react'
import './index.css'
import darkModeIcon from '../assets/images/dark-mode-icon.svg'
import mainImage from '../assets/images/main-img.svg'

/* Import Cards Web Images */
import weatherForecastImage from '../assets/images/Cards/weather-forecast-image.png'
import quickonvertImage from '../assets/images/Cards/quickonvert-logo.png'
import generatorPassowordImage from '../assets/images/Cards/generator-password-image.png'

/* Import Cards Games Images */
import trinitroImage from '../assets/images/Cards/trinitro-image.png'
import avarusRexImage from '../assets/images/Cards/avarus-rex-image.png'


import unityLightIcon from '../assets/images/icons/unity-light-mode.png'
import mudblazorIcon from '../assets/images/icons/mudblazor.png'
import csIcon from '../assets/images/icons/cs.png'





function App() {
   const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
      document.documentElement.setAttribute("data-bs-theme", theme)
    }, [theme])

    const toggleTheme = () => {
      setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo here!</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about-me">SOBRE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects-web">PROJETOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTATO</a>
                </li>
                <li>
                  <button className='button-dark-mode' onClick={toggleTheme}><img src={darkModeIcon} alt="Icon Dark Mode" /></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='main-content'>
        <div className="container py-5 mt-5"> 
          <div className="row align-items-center g-5">
            <div className="col-md-7 pe-md-5">
              <h1 className='display-3 blue-text font-electrolize fw-bold mb-3'>Desenvolvedor Web e Unity<span className='text-black'>.</span></h1>
              <p className='h5 font-source-sans-3 fw-normal'>Olá, meu nome é Felipe. Sou um estudante, estou focado em aprender <span className='blue-text fw-bold'>C#</span>,<br /> <span className='blue-text fw-bold'>Unity</span> e o ecossistema <span className='blue-text fw-bold'>.NET</span></p>
              <p className='h5 blue-text font-orbitron fw-bold mt-4'>Estou sempre<br></br> buscando aprender.</p>
            </div>
            <div className="col-md-5 text-center">
              <img src={mainImage} alt="Ilustração Principal" className="img-fluid p-4 " id='main-image'/>
            </div>
          </div>
        </div>
      </main>
        <section className="container-fluid py-4" style={{ minHeight: '43rem', width: '100%' }}>
          <div className="container">
            <h1 id='about-me' className='fw-bold'>SOBRE MIM</h1>
            <hr 
              style={{ 
                width: '60px', 
                height: '9px',
                margin: '-2rem auto 8rem auto', 
                border: '0', 
                borderTop: '9px solid #407BFF', 
                borderRadius: '10px',
                opacity: 1,
              }} 
            />
            <div className="row d-flex align-items-start mt-5">
              <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
                <h1 className="mb-3 fw-bold">ME CONHEÇA</h1>
                <p className='h5 mt-3'>
                  Olá! Meu nome é <strong>Felipe</strong>. Tenho 17 anos e moro em São Paulo. Desde cedo, sempre fui engajado por <strong>tecnologia</strong> e <strong>programação</strong>. <br /> <br />

                  Atualmente, estou focado no estudo do ecossistema <strong>.NET</strong>, explorando as possibilidades que ele oferece para o desenvolvimento de inúmeras aplicações. <br /> <br />

                  Meu objetivo é me especializar como desenvolvedor <strong>Web</strong> e <strong>Unity</strong>, contribuindo para projetos. Estou em busca de mais aprendizado e aprimoramento das minhas habilidades.
                </p>
              </div>
              <div className="col-md-6 ps-md-5">
                <h1 className="mb-3 fw-bold">TECNOLOGIAS</h1>
                <div className="d-flex flex-wrap gap-3" id='tech'>
                    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" width="40"/>
                    <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" width="40"/>
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="40" />
                    <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" width="40" />
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="40" />
                    <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt=".NET" width="40" /> 
                    <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" alt="Blazor" width="40" />
                    <img src={mudblazorIcon} alt="MudBlazor" width="40" />
                    <img src={theme === 'dark' ? unityLightIcon : 'https://cdn.simpleicons.org/unity/000000'} alt="Unity" width={40} />
                    <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="40"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <h1 id="projects-web" className="fw-bold text-center mb-5">PROJETOS WEB</h1>
            <hr 
              style={{ 
                width: '60px', 
                height: '9px',
                margin: '-2rem auto 8rem auto', 
                border: '0', 
                borderTop: '9px solid #407BFF', 
                borderRadius: '10px',
                opacity: 1,
              }} 
            />
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={weatherForecastImage} 
                  className="card-img-top" 
                  alt="Previsão do Tempo" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Weather Forecast</h5>
                  <p className="card-text">Consulte o clima do sua cidade usando a API Open Weather Map.</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/css3/1572B6" width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="16" alt="JavaScript" />
                      JavaScript
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      API Open Weather Map
                    </span>
                  </div>
                  <a href="https://felipecostaq.github.io/WeatherForecast/" target='_blank' rel='noopener noreferrer' className="btn btn-primary mt-auto">Ver Projeto</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={quickonvertImage} 
                  className="card-img-top" 
                  alt="Conversor de Unidades" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">QuicKonvert</h5>
                  <p className="card-text">Várias conversões em um só lugar. Simples, rápido e útil no dia a dia.</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML5" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                    <img src="https://cdn.simpleicons.org/css3/1572B6" width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/dotnet/512BD4" width="16" alt="C#" />
                      .NET
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" width="16" alt="Blazor" />
                      Blazor
                    </span>
                      <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={mudblazorIcon} width="16" alt="MudBlazor" />
                      MudBlazor
                    </span>
                  </div>
                  <a href="https://quickonvert.netlify.app/" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={generatorPassowordImage}
                  className="card-img-top" 
                  alt="Projeto Exemplo" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Gerador de Senha</h5>
                  <p className="card-text">Um gerador de senha prático desenvolvido com Blazor Server.</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML5" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/css3/1572B6" width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/dotnet/512BD4" width="16" alt="C#" />
                      .NET
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="16" alt="JavaScript" />
                      JavaScript
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" width="16" alt="Blazor" />
                      Blazor
                    </span>
                  </div>
                  <a href="https://github.com/FelipeCostaq/gerador-senha" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <h1 id="projects-web" className="fw-bold text-center mb-5">PROJETOS UNITY</h1>
            <hr 
              style={{ 
                width: '60px', 
                height: '9px',
                margin: '-2rem auto 8rem auto', 
                border: '0', 
                borderTop: '9px solid #407BFF', 
                borderRadius: '10px',
                opacity: 1,
              }} 
            />
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img 
                  src={trinitroImage} 
                  className="card-img-top" 
                  alt="Previsão do Tempo" 
                  style={{ height: '350px', objectFit: 'cover'}} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Trinitro</h5>
                  <p className="card-text">Jogo arcade com três minigames rápidos e diversos, alinhados com a identidade da marca TNT.</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/unity/FFFFFF" width="16" alt="Unity" />
                      Unity
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={csIcon} width="16" alt="C#" />
                      C#
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/itchdotio/FA5C5C" width="16" alt="Itch.io" />
                      Itch.io
                    </span>
                  </div>
                  <a href="https://game-soulcode.web.app/Trinitro/#home" target='_blank' rel='noopener noreferrer' className="btn btn-primary mt-auto">Jogar</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img 
                  src={avarusRexImage} 
                  className="card-img-top" 
                  alt="Conversor de Unidades" 
                  style={{ height: '350px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Avarus Rex</h5>
                  <p className="card-text">Avarus Rex é um jogo 2D no estilo Boss Rush que coloca você frente a frente com o Rei da Avareza, uma caveira corrompida pela ganância. </p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/unity/FFFFFF" width="16" alt="Unity" />
                      Unity
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={csIcon} width="16" alt="C#" />
                      C#
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/itchdotio/FA5C5C" width="16" alt="Itch.io" />
                      Itch.io
                    </span>
                  </div>
                  <a href="https://aragamestudio.itch.io/avarus-rex" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>Jogar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default App
