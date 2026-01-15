// Import Lucide icons library via CDN
// Initialize Lucide icons (CDN'den yüklenen)
document.addEventListener("DOMContentLoaded", () => {
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Initialize mode buttons
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode")
      switchMode(mode)
    })
  })

  // Set default mode
  switchMode("utplassering")
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)

// Observe elements for scroll animations
document.querySelectorAll(".card, .section-header, .hero-content").forEach((el) => {
  el.classList.add("scroll-animate")
  observer.observe(el)
})

// Progress bar animations
const progressBars = document.querySelectorAll(".progress-fill")
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target
        const width = progressBar.style.width
        progressBar.style.width = "0%"
        setTimeout(() => {
          progressBar.style.width = width
        }, 200)
      }
    })
  },
  { threshold: 0.5 },
)

progressBars.forEach((bar) => {
  progressObserver.observe(bar)
})

// Mode switching functionality
function switchMode(mode) {
  // Remove existing theme classes
  document.body.classList.remove("theme-utplasering", "theme-deltidsjobb", "theme-heltidsjobb")

  // Add new theme class based on selected mode
  document.body.classList.add(`theme-${mode}`)

  // Update active button
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-mode="${mode}"]`).classList.add("active")

  // Update active mode content
  document.querySelectorAll(".mode-section").forEach((section) => {
    section.classList.remove("active")
  })
  document.querySelector(`.${mode}-mode`).classList.add("active")

  // Update hero description based on mode
  const heroDescription = document.getElementById("hero-description")
  const descriptions = {
    utplasering:
      "Jeg studerer på Elektro linjen ved Hamar Katedralskole og søker utplasering for å få praktisk erfaring.",
    deltidsjobb: "Jeg studerer på Elektro linjen ved Hamar Katedralskole og søker deltidsjobb ved siden av studiene.",
    heltidsjobb:
      "Jeg studerer på Elektro linjen ved Hamar Katedralskole og er klar for heltidsjobb med full dedikasjon.",
  }
  heroDescription.textContent = descriptions[mode]
}

// CV Download Function
function downloadCV() {
  const cvContent = `BEDIRHAN KARABOGA
Student & Service Worker

KONTAKTINFORMASJON
E-post: bedirhankaraboga9@gmail.com
Adresse: Elverum liljevegen 04, 2409

OM MEG
Hei! Jeg heter Bedirhan, er 18 år gammel og studerer for tiden på Elektro linjen ved Hamar Katedralskole. Jeg er på utkikk etter utplasering, deltidsjobb eller heltidsjobb ved siden av studiene, hvor jeg kan bruke mine ferdigheter og samtidig lære mer.

Jeg har over ett års erfaring fra restaurant- og servicenæringen, hvor jeg har jobbet både som kokk og servitør. Jeg er ryddig, strukturert og engasjert, og jeg jobber godt både selvstendig og i team. Jeg har en positiv innstilling, håndterer stress på en god måte og er løsningsorientert.

Som person er jeg sosial, lærevillig og tilpasningsdyktig, og jeg kommuniserer godt med kolleger og kunder. Jeg er en god lytter og tar til meg kritikk og tilbakemeldinger med et åpent sinn noe jeg mener er viktig for personlig og profesjonell utvikling.

ARBEIDSERFARING

Butikkmedarbeider | OBS Marked | 2025 - Nåværende
• Ansvar for kundebehandling, varepåfylling og orden i butikken
• Bidrar til et hyggelig handlemiljø og yter god service til kunder
• Har evne til rask tilpasning til ulike oppgaver og samarbeider godt med kollegaer

Servitør | Punktet Pub | 2025 - Nåværende
• Ansvar for både servering, bar og enkel kjøkkenhjelp
• Sørger for et hyggelig miljø og god opplevelse for gjestene
• Rask tilpasning til ulike oppgaver og samarbeider godt med kollegaer

Kokk/Servitør | Lokket Spiseri | 2023 - 2025
• Samarbeid med servitører for rask og effektiv servering
• Sørget for god hygiene og renhold i tråd med Mattilsynets krav
• Håndterte servitøroppgaver - bestillingsmottak og gjestebehandling

Baker/Servitør | Kosu Bakeriet | 2021 - 2022
• Effektiv ordrebehandling og kundeservice
• Bidro til høy kundetilfredshet og gjentatte besøk
• Lærte verdien av punktlighet, hygiene og ansvarlighet

SPRÅKFERDIGHETER
• Norsk: 70% - Godt nivå
• Tyrkisk: 70% - Morsmål
• Engelsk: B2 - Godt nivå

UTDANNING
Elektro og datateknologi | Hamar Katedralskole | 2024 - Pågående
Faglig fokus på teknisk innsikt, sikkerhet og praktiske ferdigheter. Lærer om elektriske systemer, datateknologi og moderne tekniske løsninger.

PERSONLIGE EGENSKAPER
Jeg har interessenter å jobbe med dere, liker gruppearbeidet og være aktiv på dagen. Jeg er en gut med godt humør, fleksibel, mye energi, engasjert, er rask og ryddig, liker å jobbe med mennesker og i høyt tempo, liker å spre glede, veldig ansvarsfull, kreativ, engasjert, selvstendig og jeg pleier alltid å sette meg egne mål og gjennomføre dem gjennom dagen og kommer meg gjennom lange og vanskelige dager med et smil og er alltid positiv.

Jeg lærer fort og liker å lære nye ting. Jeg er opptatt av å gjøre andre mennesker glade og jeg elsker å jobbe med mennesker. Jeg vil få bedre kompetanse om arbeidslivet og lære meg å stå på egne bein, jeg kan bidra til et godt arbeidsmiljø, jeg står alltid på og viser at jeg er engasjert, jeg er ganske flink til å kommunisere med mennesker og er alltid i godt humør, jeg er ryddig, selvstendig, samarbeidsvillig og ansvarsbevisst.

---
Generert: ${new Date().toLocaleDateString("no-NO")}
`

  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Bedirhan_Karaboga_CV.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// Header scroll effect
let lastScrollY = window.scrollY
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }

  lastScrollY = currentScrollY
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Mobile menu toggle (if needed)
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const nav = document.querySelector(".nav")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
}

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".float-element")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add hover effects to cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) rotate(1deg)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotate(0deg)"
  })
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Stagger animations for cards
  const cards = document.querySelectorAll(".card")
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  // Initialize progress bars
  setTimeout(() => {
    progressBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = width
      }, 100)
    })
  }, 1000)
})
