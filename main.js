/* ============================================================
   MD FLOWERS — main.js   (v3 – animation overhaul)
   ============================================================ */

/* ── 1. CANVAS PARTICLE SYSTEM ────────────────────────────── */
;(function heroCanvas() {
  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize, { passive: true })

  // Particle pool
  const particles = []
  const COLORS = ['#e8c87a', '#c8a96e', '#e8506a', '#ff7c5e', '#f4ede0']

  class Particle {
    constructor() { this.reset() }
    reset() {
      this.x    = Math.random() * canvas.width
      this.y    = canvas.height + 10
      this.r    = 1.2 + Math.random() * 2.8
      this.vx   = (Math.random() - .5) * .6
      this.vy   = -(0.5 + Math.random() * 1.4)
      this.life = 0
      this.maxLife = 120 + Math.random() * 160
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      this.twinkle = Math.random() * Math.PI * 2
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      this.life++
      this.twinkle += 0.06
      if (this.life > this.maxLife) this.reset()
    }
    draw() {
      const progress = this.life / this.maxLife
      const alpha    = progress < .15
        ? progress / .15
        : progress > .8
          ? 1 - (progress - .8) / .2
          : 1
      const flicker  = 0.6 + .4 * Math.sin(this.twinkle)
      ctx.save()
      ctx.globalAlpha = alpha * flicker * .7
      ctx.fillStyle   = this.color
      ctx.shadowBlur  = 6
      ctx.shadowColor = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  // Initialise particles
  for (let i = 0; i < 80; i++) {
    const p = new Particle()
    p.life = Math.random() * p.maxLife   // stagger start
    particles.push(p)
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => { p.update(); p.draw() })
    requestAnimationFrame(loop)
  }
  loop()
})()


/* ── 2. PETAL RAIN ────────────────────────────────────────── */
;(function petalRain() {
  const container = document.getElementById('petal-rain')
  if (!container) return

  const palette = [
    'radial-gradient(circle at 35% 35%, #f9a8b8, #fce4ec)',
    'radial-gradient(circle at 35% 35%, #fde68a, #fef3c7)',
    'radial-gradient(circle at 35% 35%, #c8a96e, #f4e4bc)',
    'radial-gradient(circle at 35% 35%, #fbcfe8, #fdf2f8)',
  ]

  function makePetal() {
    const el   = document.createElement('div')
    el.className = 'petal-drop'
    const size = 10 + Math.random() * 10
    el.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `width: ${size}px`,
      `height: ${size}px`,
      `background: ${palette[Math.floor(Math.random() * palette.length)]}`,
      `animation-duration: ${7 + Math.random() * 9}s`,
      `animation-delay: ${Math.random() * 10}s`,
      `opacity: ${.2 + Math.random() * .5}`,
    ].join(';')
    container.appendChild(el)
    setTimeout(() => el.remove(), 22000)
  }

  for (let i = 0; i < 20; i++) makePetal()
  setInterval(makePetal, 1000)
})()


/* ── 3. SPARKLE EMITTER ───────────────────────────────────── */
;(function sparkleEmitter() {
  const container = document.getElementById('sparkle-container')
  if (!container) return

  const colors = ['#e8c87a', '#c8a96e', '#e8506a', '#f4ede0', '#fde68a']

  function emit() {
    const sp    = document.createElement('div')
    sp.className = 'sparkle'
    const x    = 20 + Math.random() * 60   // % within container
    const y    = 20 + Math.random() * 60
    const size = 4 + Math.random() * 6
    sp.style.cssText = [
      `left: ${x}%`,
      `top: ${y}%`,
      `width: ${size}px`,
      `height: ${size}px`,
      `background: ${colors[Math.floor(Math.random() * colors.length)]}`,
      `box-shadow: 0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]}`,
      `animation-duration: ${0.6 + Math.random() * .6}s`,
    ].join(';')
    container.appendChild(sp)
    setTimeout(() => sp.remove(), 1000)
  }

  setInterval(emit, 200)
})()


/* ── 4. MORPHING BLOB CAROUSEL ────────────────────────────── */
;(function blobCarousel() {
  const slides  = document.querySelectorAll('.sc-slide')
  const dots    = document.querySelectorAll('.sc-dot')
  if (!slides.length) return

  let current = 0
  let timer

  function goTo(idx) {
    // Exit current
    slides[current].classList.remove('active')
    slides[current].classList.add('exit')
    setTimeout(() => slides[current < slides.length ? current : 0].classList.remove('exit'), 700)

    dots[current].classList.remove('active')

    current = (idx + slides.length) % slides.length

    slides[current].classList.add('active')
    dots[current].classList.add('active')
  }

  function next() { goTo(current + 1) }

  // Auto-advance
  function startTimer() { timer = setInterval(next, 4000) }
  function resetTimer()  { clearInterval(timer); startTimer() }

  startTimer()

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetTimer() })
  })

  // Touch / drag support
  let startX = 0
  const carousel = document.getElementById('showcase-carousel')
  if (carousel) {
    carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX }, { passive: true })
    carousel.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); resetTimer() }
    }, { passive: true })
  }
})()


/* ── 5. MOUSE PARALLAX ON HERO ────────────────────────────── */
;(function heroParallax() {
  const textEl = document.getElementById('hero-parallax-text')
  const imgEl  = document.getElementById('hero-parallax-img')
  const hero   = document.querySelector('.hero-section')
  if (!textEl || !imgEl || !hero) return

  let tX = 0, tY = 0, cX = 0, cY = 0

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect()
    tX = (e.clientX - rect.left - rect.width  / 2) / rect.width
    tY = (e.clientY - rect.top  - rect.height / 2) / rect.height
  })

  function tick() {
    cX += (tX - cX) * .06
    cY += (tY - cY) * .06
    textEl.style.transform = `translate(${cX * -12}px, ${cY * -8}px)`
    imgEl.style.transform  = `translate(${cX *  16}px, ${cY * 10}px)`
    requestAnimationFrame(tick)
  }
  tick()
})()


/* ── 6. COUNT-UP ANIMATION ────────────────────────────────── */
;(function countUp() {
  const els = document.querySelectorAll('.count-up')
  if (!els.length) return

  const obs = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return
      obs.unobserve(target)

      const raw    = parseInt(target.dataset.target, 10)
      const suffix = target.dataset.suffix || ''
      const dur    = 1800   // ms
      const step   = 16     // ~60fps

      // For 10000 → display as "10K"
      const display = raw >= 1000
        ? (val) => Math.round(val / 1000) + suffix
        : (val) => Math.round(val) + suffix

      let start   = null
      function frame(ts) {
        if (!start) start = ts
        const progress = Math.min((ts - start) / dur, 1)
        const ease     = 1 - Math.pow(1 - progress, 3)   // ease-out cubic
        target.textContent = display(ease * raw)
        if (progress < 1) requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    })
  }, { threshold: .5 })

  els.forEach(el => obs.observe(el))
})()


/* ── 7. HEADER SCROLL ─────────────────────────────────────── */
;(function headerScroll() {
  const header = document.getElementById('main-header')
  if (!header) return

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled')
      header.classList.remove('at-top')
    } else {
      header.classList.add('at-top')
      header.classList.remove('scrolled')
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})()


/* ── 8. HAMBURGER / MOBILE MENU ───────────────────────────── */
;(function mobileMenu() {
  const hamburger  = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobile-menu')
  const links      = document.querySelectorAll('.mobile-link')
  if (!hamburger || !mobileMenu) return

  function close() {
    mobileMenu.classList.remove('open')
    document.body.style.overflow = ''
  }

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open')
    document.body.style.overflow = open ? 'hidden' : ''
  })

  links.forEach(l => l.addEventListener('click', close))
  mobileMenu.addEventListener('click', e => { if (e.target === mobileMenu) close() })
})()


/* ── 9. SCROLL REVEAL ─────────────────────────────────────── */
;(function scrollReveal() {
  const items = document.querySelectorAll('.reveal')
  if (!items.length) return

  const obs = new IntersectionObserver(
    entries => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('active'); obs.unobserve(target) }
    }),
    { threshold: .12, rootMargin: '0px 0px -40px 0px' }
  )
  items.forEach(el => obs.observe(el))
})()


/* ── 10. GALLERY LIGHTBOX ─────────────────────────────────── */
;(function lightbox() {
  const lb      = document.getElementById('lightbox')
  const lbImg   = document.getElementById('lb-img')
  const lbClose = document.getElementById('lb-close')
  if (!lb) return

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img')
      if (!img) return
      lbImg.src = img.src
      lb.classList.add('open')
      document.body.style.overflow = 'hidden'
    })
  })

  function closeLB() { lb.classList.remove('open'); document.body.style.overflow = '' }
  lbClose.addEventListener('click', closeLB)
  lb.addEventListener('click', e => { if (e.target === lb) closeLB() })
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB() })
})()


/* ── 11. WISHLIST TOGGLE ──────────────────────────────────── */
;(function wishlist() {
  document.querySelectorAll('.product-wish').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const on = btn.classList.toggle('active')
      btn.style.background = on ? '#e8506a' : 'rgba(255,255,255,.9)'
      btn.style.color      = on ? '#fff'     : '#e8506a'
    })
  })
})()


/* ── 12. ADD-TO-ENQUIRY ───────────────────────────────────── */
;(function addBtn() {
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const orig = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-check"></i>'
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)'
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = '' }, 1800)
    })
  })
})()


/* ── 13. CONTACT FORM ─────────────────────────────────────── */
;(function contactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return
  form.addEventListener('submit', e => {
    e.preventDefault()
    const btn  = form.querySelector('button[type="submit"]')
    const orig = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    btn.disabled  = true
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!'
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)'
      form.reset()
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false }, 3000)
    }, 1800)
  })
})()


/* ── 14. NEWSLETTER ───────────────────────────────────────── */
;(function newsletter() {
  const btn   = document.getElementById('nl-btn')
  const input = document.getElementById('nl-email')
  if (!btn || !input) return
  btn.addEventListener('click', () => {
    if (!input.value.includes('@')) { input.style.outline = '2px solid #e8506a'; return }
    btn.textContent  = '✓ Done'
    btn.style.background = '#22c55e'
    input.value      = ''
    input.style.outline = ''
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = '' }, 3000)
  })
})()


/* ── 15. SMOOTH SCROLL ────────────────────────────────────── */
;(function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href')
      if (id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
})()
