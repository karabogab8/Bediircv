document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("animate")
  })
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

document.querySelectorAll(".card, .section-header, .hero-content").forEach((el) => {
  el.classList.add("scroll-animate")
  observer.observe(el)
})

// Progress bar animations
const progressBars = document.querySelectorAll(".progress-fill")
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bar = entry.target
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => { bar.style.width = width }, 200)
    }
  })
}, { threshold: 0.5 })
progressBars.forEach((bar) => progressObserver.observe(bar))

// CV Download Function
function downloadCV() {
  const cvContent = `BEDIRHAN KARABOGA
Student & Service Worker

KONTAKTINFORMASJON
E-post: bedirhankaraboga9@gmail.com
Adresse: Elverum liljevegen 04, 2409

OM MEG
Hei! Jeg heter Bedirhan, er 18 år gammel og studerer for tiden på Elektro linjen ved Hamar Katedralskole. Jeg søker deltidsjobb ved siden av studiene, hvor jeg kan bruke mine ferdigheter og samtidig lære mer.

Jeg har over ett års erfaring fra restaurant- og servicenæringen, hvor jeg har jobbet både som kokk og servitør. Jeg er ryddig, strukturert og engasjert, og jeg jobber godt både selvstendig og i team. Jeg har en positiv innstilling, håndterer stress på en god måte og er løsningsorientert.

Som person er jeg sosial, lærevillig og tilpasningsdyktig, og jeg kommuniserer godt med kolleger og kunder. Jeg er en god lytter og tar til meg kritikk og tilbakemeldinger med et åpent sinn noe jeg mener er viktig for personlig og profesjonell utvikling.

ARBEIDSERFARING

Butikkmedarbeider | OBS Marked | 2025 - Nåværende
• Ansvar for kundebehandling, varepåfylling og orden i butikken
• Bidrar til et hyggelig handlemiljø og yter god service til kunder

Servitør | Punktet Pub | 2025 - Nåværende
• Ansvar for både servering, bar og enkel kjøkkenhjelp
• Sørger for et hyggelig miljø og god opplevelse for gjestene

Kokk/Servitør | Lokket Spiseri | 2023 - 2025
• Samarbeid med servitører for rask og effektiv servering
• Sørget for god hygiene og renhold i tråd med Mattilsynets krav

Baker/Servitør | Kosu Bakeriet | 2021 - 2022
• Effektiv ordrebehandling og kundeservice
• Lærte verdien av punktlighet, hygiene og ansvarlighet

SPRÅKFERDIGHETER
• Norsk: 70% - Godt nivå
• Tyrkisk: Morsmål
• Engelsk: 75% - Godt nivå

UTDANNING
Elektro og datateknologi | Hamar Katedralskole | 2024 - Pågående

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

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  document.querySelectorAll(".float-element").forEach((element, index) => {
    element.style.transform = `translateY(${scrolled * (0.5 + index * 0.1)}px)`
  })
})

// Hover effects on cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => { card.style.transform = "translateY(-8px) rotate(1deg)" })
  card.addEventListener("mouseleave", () => { card.style.transform = "translateY(0) rotate(0deg)" })
})

window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
