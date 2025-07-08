import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    resources: {
      en: {
        translation: {
          /* HEADER */

          headerAboutText: "ABOUT",
          headerProjectsText: "PROJECTS",
          headerContactText: "CONTACT",

          /* MAIN */

          mainTitleText: "Web and Unity Developer",
          mainAboutText: "Hello, my name is Felipe. I’m a web developer — I build interfaces with <1>React</1> and <3>Blazor</3> and APIs using C# and Node.js. I also develop games with <5>Unity</5>.",
          mainAsidePart1Text: "I'm always",
          mainAsidePart2Text: "looking to learn",

          /* SECTION ABOUT */

          sectionAboutTitleText: "ABOUT ME",
          sectionAboutKnowTitleText: "KNOW ME",
          sectionAboutTechTitleText: "TECHNOLOGIES",
          sectionAboutKnowText: "Hi! My name is Felipe, I’m 17 years old and I’m from São Paulo. Since an early age, I've been driven by curiosity and a passion for technology and programming.<0/><0/> I’m currently deepening my knowledge in web development, using <1>Blazor (C#)</1> and <3>JavaScript</3> on the frontend, and <5>Node.js</5> and <7>ASP.NET Web API</7> for creating APIs and backend integration.<0/><0/> I'm also developing skills in <9>Unity</9>, focusing on 2D game projects. My goal is to contribute to real and challenging projects.",

          /* SECTION PROJECTS WEB */

          sectionWebTitleText: "WEB PROJECTS",

          cardWeatherForecastDescription: "Check the weather in your city using the Open Weather Map API.",

          cardQuicKonvertDescription: "Several conversions in one place. Simple, fast and useful in everyday life.",

          cardGeneratorPasswordTitle: "Password Generator",

          cardGeneratorPasswordDescription: "A practical password generator developed with Blazor Server.",

          cardWebButton: "See Project",

          
          /* SECTION PROJECTS UNITY */ 

          sectionUnityTitleText: "UNITY PROJECTS",

          cardTrinitroDescription: "Arcade game with three quick and diverse minigames, in line with the TNT Energy Drink brand identity.",

          cardAvarusRexDescription: "Avarus Rex is a 2D Boss Rush-style game that brings you face to face with the King of Avarice, a skull corrupted by greed.",

          cardUnityButton: "Play",

          /* SECTION CONTACT */
          
          sectionContactTitleText: "Contact",

          sectionContactNameLabel: "Name",
          sectionContactNamePlaceholder: "Enter your name",

          sectionContactEmailPlaceholder: "example@email.com",

          sectionContactMessageLabel: "Message",
          sectionContactMessagePlaceholder: "Enter your message",

          contactSubmitButton: "Submit",
          
          sectionContactAsideText: "Or email me directly! ",

          /* FOOTER */
          footerMessage: "All rights reserved.",
        }
      },
      pt: {
        translation: {
          /* HEADER */

          headerAboutText: "SOBRE",
          headerProjectsText: "PROJETOS",
          headerContactText: "CONTATO",

          /* MAIN */

          mainTitleText: "Desenvolvedor Web e Unity",
          mainAboutText: "Olá, meu nome é Felipe. Sou desenvolvedor web, crio interfaces usando <1>React</1> e <3>Blazor</3> e APIs usando C# e Node.js. Também desenvolvo jogos na <5>Unity</5>.",
          mainAsidePart1Text: "Estou sempre",
          mainAsidePart2Text: "buscando aprender",

          /* SECTION ABOUT */

          sectionAboutTitleText: "SOBRE MIM",
          sectionAboutKnowTitleText: "ME CONHEÇA",
          sectionAboutTechTitleText: "TECNOLOGIAS",
          sectionAboutKnowText: "Olá! Me chamo Felipe, tenho 17 anos e sou de São Paulo. Desde cedo, sou movido por curiosidade e paixão por tecnologia e programação.<0/><0/> Atualmente, estou me aprofundando em desenvolvimento web, utilizando <1>Blazor (C#)</1> e <3>JavaScript</3> no front-end, além de <5>Node.js</5> e <7>ASP.NET Web API</7> para criação de APIs e integração com o back-end.<0/><0/> Também estou desenvolvendo habilidades em <9>Unity</9>, com foco em projetos de jogos 2D. Meu objetivo é contribuir para projetos reais e desafiadores.",

          /* SECTION PROJECTS WEB */

          sectionWebTitleText: "PROJETOS WEB",
          
          cardWeatherForecastDescription: "Consulte o clima da sua cidade usando a API Open Weather Map.",

          cardQuicKonvertDescription: "Várias conversões em um só lugar. Simples, rápido e útil no dia a dia.",

          cardGeneratorPasswordTitle: "Gerador de Senha",

          cardGeneratorPasswordDescription: "Um gerador de senha prático desenvolvido com Blazor Server.",

          cardWebButton: "Ver Projeto", 

          /* SECTION PROJECTS UNITY */ 

          sectionUnityTitleText: "PROJETOS UNITY",

          cardTrinitroDescription: "Jogo arcade com três minigames rápidos e diversos, alinhados com a identidade da marca TNT Energy Drink.",

          cardAvarusRexDescription: "Avarus Rex é um jogo 2D no estilo Boss Rush que coloca você frente a frente com o Rei da Avareza, uma caveira corrompida pela ganância.",

          cardUnityButton: "Jogar",

          /* SECTION CONTACT */
          
          sectionContactTitleText: "Contato",

          sectionContactNameLabel: "Nome",
          sectionContactNamePlaceholder: "Digite seu nome",

          sectionContactEmailPlaceholder: "exemplo@email.com",

          sectionContactMessageLabel: "Mensagem",
          sectionContactMessagePlaceholder: "Digite sua mensagem",

          contactSubmitButton: "Enviar",

          sectionContactAsideText: "Ou me mande um email diretamente! ",

          /* FOOTER */
          footerMessage: "Todos os direitos reservados.",

        }
      }
    }
  })

export default i18n
