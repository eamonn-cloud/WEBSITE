/* ─── COREX Operations - Shared Site JS ─────────────── */
(function () {
  'use strict';

  /* ── Nav HTML ─────────────────────────────────────────── */
  const NAV_HTML = `
  <nav class="nav" id="nav">
    <div class="container nav-inner">
      <a href="/" class="nav-logo">
        <img
          src="/assets/COREX-21.svg"
          alt="COREX Operations"
          class="nav-logo-img"
        />
      </a>
      <ul class="nav-links">
        <li class="nav-item">
          <a href="/how-we-work/" class="nav-link">
            How We Work
            <svg viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <div class="nav-dropdown">
            <a href="/how-we-work/">Our Approach</a>
            <a href="/how-we-work/ai-in-operations/">AI in Operations</a>
          </div>
        </li>
        <li class="nav-item"><a href="/what-we-fix/" class="nav-link">What We Fix</a></li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Industries
            <svg viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <div class="nav-dropdown">
            <a href="/industries/professional-services/">Professional Services</a>
            <a href="/industries/recruitment/">Recruitment</a>
            <a href="/industries/lending-finance/">Lending &amp; Finance</a>
            <a href="/industries/property/">Property</a>
            <a href="/industries/agencies/">Agencies</a>
          </div>
        </li>
        <li class="nav-item"><a href="/insights/" class="nav-link">Insights</a></li>
        <li class="nav-item"><a href="/partnerships/" class="nav-link">Partnerships</a></li>
      </ul>
      <div class="nav-right">
        <a href="/contact/" class="btn-nav-ghost">Contact</a>
        <a href="/assessment/" class="btn-nav-cta">Free Assessment</a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav-mobile-drawer" id="nav-mobile-drawer">
      <a href="/">Home</a>
      <a href="/how-we-work/">How We Work</a>
      <a href="/how-we-work/ai-in-operations/" class="mob-sub">AI in Operations</a>
      <a href="/what-we-fix/">What We Fix</a>
      <a href="/insights/">Insights</a>
      <a href="/partnerships/">Partnerships</a>
      <span style="font-family:var(--font-head);font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:var(--white-35);padding:20px 0 6px;display:block;">Industries</span>
      <a href="/industries/professional-services/" class="mob-sub">Professional Services</a>
      <a href="/industries/recruitment/" class="mob-sub">Recruitment</a>
      <a href="/industries/lending-finance/" class="mob-sub">Lending &amp; Finance</a>
      <a href="/industries/property/" class="mob-sub">Property</a>
      <a href="/industries/agencies/" class="mob-sub">Agencies</a>
      <div class="nav-mobile-ctas">
        <a href="/contact/" class="btn-nav-ghost">Contact</a>
        <a href="/assessment/" class="btn-nav-cta">Free Assessment</a>
      </div>
    </div>
  </nav>`;

  /* ── Footer HTML ──────────────────────────────────────── */
  const FOOTER_HTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <div class="footer-brand-logo">
            <img src="/assets/COREX-21.svg" alt="COREX Operations" class="footer-logo-img" />
          </div>
          <p>We build the automation and AI systems that let ambitious businesses run without manual work.</p>
          <span class="footer-tagline">corexoperations.com</span>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Useful Links</p>
          <ul>
            <li><a href="/how-we-work/">How We Work</a></li>
            <li><a href="/what-we-fix/">What We Fix</a></li>
            <li><a href="/how-we-work/ai-in-operations/">AI in Operations</a></li>
            <li><a href="/insights/">Insights</a></li>
            <li><a href="/partnerships/">Partnerships</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/assessment/">Free Assessment</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Follow Us</p>
          <ul class="footer-social-list">
            <li>
              <a href="https://www.linkedin.com/company/corex-operations" target="_blank" rel="noopener">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="X / Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>Twitter (X)</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-newsletter">
          <p class="footer-col-title">Stay in the Loop</p>
          <div class="footer-newsletter-form">
            <input type="email" class="footer-newsletter-input" id="footer-email-input" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="button" class="footer-newsletter-btn" id="footer-subscribe-btn">Subscribe</button>
          </div>
          <p class="footer-newsletter-status" id="footer-newsletter-status"></p>
        </div>

      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          &copy; 2026 COREX Operations Ltd. All rights reserved. &middot;
          <a href="/privacy/">Privacy Policy</a> &middot;
          <a href="/terms/">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>`;

  /* ── Inject nav + footer ──────────────────────────────── */
  function injectShell() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    } else if (!document.querySelector('.nav')) {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    } else if (!document.querySelector('.footer')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }

    // Highlight active nav link
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link, .nav-dropdown a').forEach(link => {
      if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace('', '').replace(/\/$/, ''))) {
        link.style.color = 'var(--white)';
      }
    });
  }

  /* ── Dropdown hover with close delay ─────────────────── */
  function initDropdowns() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
      if (!item.querySelector('.nav-dropdown')) return;
      var timer = null;
      item.addEventListener('mouseenter', function() {
        clearTimeout(timer);
        item.classList.add('open');
      });
      item.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
          item.classList.remove('open');
        }, 150);
      });
    });
    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item.open').forEach(function(item) {
          item.classList.remove('open');
        });
      }
    });
  }

  /* ── Mobile Nav ───────────────────────────────────────── */
  function initMobileNav() {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('nav-hamburger');
    if (!hamburger || !nav) return;
    function openMenu() {
      nav.classList.add('nav-open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      nav.classList.remove('nav-open');
      document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.contains('nav-open') ? closeMenu() : openMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    const drawer = document.getElementById('nav-mobile-drawer');
    if (drawer) {
      drawer.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') closeMenu();
      });
    }
  }

  /* ── Nav scroll state ─────────────────────────────────── */
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll Reveal ────────────────────────────────────── */
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 200px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ── Hero entrance ────────────────────────────────────── */
  function initHeroEntrance() {
    const heroContent = document.getElementById('hero-content');
    if (!heroContent) return;
    heroContent.style.cssText = 'opacity:0; transform:translateY(36px); transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1);';
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 80);
    });
  }

  /* ── Shooting Stars ───────────────────────────────────── */
  function initShootingStars() {
    const svg = document.getElementById('shooting-stars-svg');
    if (!svg) return;

    const layers = [
      { starColor: '#B9FAF8', trailColor: '#005eb7', minSpeed: 14, maxSpeed: 30, minDelay: 800,  maxDelay: 2800, starWidth: 120, starHeight: 1.5 },
      { starColor: '#BBE3F7', trailColor: '#B9FAF8', minSpeed: 8,  maxSpeed: 20, minDelay: 2000, maxDelay: 4800, starWidth: 100, starHeight: 1   },
      { starColor: '#ffffff', trailColor: '#005eb7', minSpeed: 18, maxSpeed: 38, minDelay: 1400, maxDelay: 3800, starWidth: 80,  starHeight: 1   },
    ];

    const stars = layers.map((cfg, i) => {
      const gradId = `sg-grad-${i}`;
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.setAttribute('id', gradId);
      grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
      grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '100%');
      const s0 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      s0.setAttribute('offset', '0%');
      s0.setAttribute('style', `stop-color:${cfg.trailColor};stop-opacity:0`);
      const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      s1.setAttribute('offset', '100%');
      s1.setAttribute('style', `stop-color:${cfg.starColor};stop-opacity:1`);
      grad.appendChild(s0); grad.appendChild(s1);
      defs.appendChild(grad);
      svg.appendChild(defs);

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('fill', `url(#${gradId})`);
      rect.setAttribute('height', cfg.starHeight);
      rect.setAttribute('width', '0');
      rect.setAttribute('opacity', '0');
      svg.appendChild(rect);

      return { rect, cfg, active: false, x: 0, y: 0, angle: 0, speed: 0, scale: 1, distance: 0, raf: null };
    });

    function getRandStart() {
      const W = window.innerWidth, H = window.innerHeight;
      const side = Math.floor(Math.random() * 4);
      const off  = Math.random();
      switch (side) {
        case 0: return { x: off * W, y: 0,  angle: 45  };
        case 1: return { x: W,       y: off * H, angle: 135 };
        case 2: return { x: off * W, y: H,  angle: 225 };
        default:return { x: 0,       y: off * H, angle: 315 };
      }
    }

    function launchStar(star) {
      const { cfg } = star;
      const { x, y, angle } = getRandStart();
      star.x = x; star.y = y; star.angle = angle;
      star.speed = Math.random() * (cfg.maxSpeed - cfg.minSpeed) + cfg.minSpeed;
      star.scale = 1; star.distance = 0; star.active = true;
      star.rect.setAttribute('opacity', '1');
      animateStar(star);
    }

    function animateStar(star) {
      const { cfg, rect } = star;
      const W = window.innerWidth, H = window.innerHeight;

      star.x += star.speed * Math.cos(star.angle * Math.PI / 180);
      star.y += star.speed * Math.sin(star.angle * Math.PI / 180);
      star.distance += star.speed;
      star.scale = 1 + star.distance / 100;

      const w = cfg.starWidth * star.scale;
      const cx = star.x + w / 2, cy = star.y + cfg.starHeight / 2;

      rect.setAttribute('x', star.x);
      rect.setAttribute('y', star.y);
      rect.setAttribute('width', w);
      rect.setAttribute('transform', `rotate(${star.angle},${cx},${cy})`);

      if (star.x < -40 || star.x > W + 40 || star.y < -40 || star.y > H + 40) {
        star.active = false;
        rect.setAttribute('opacity', '0');
        rect.setAttribute('width', '0');
        scheduleStar(star);
        return;
      }
      star.raf = requestAnimationFrame(() => animateStar(star));
    }

    function scheduleStar(star) {
      const { cfg } = star;
      const delay = Math.random() * (cfg.maxDelay - cfg.minDelay) + cfg.minDelay;
      setTimeout(() => launchStar(star), delay);
    }

    stars.forEach((star, i) => {
      setTimeout(() => scheduleStar(star), i * 600);
    });
  }

  /* ── Calendly ─────────────────────────────────────────── */
  const CALENDLY_URL = 'https://calendly.com/eamonn-corexoperations/30min?hide_event_type_details=1&hide_gdpr_banner=1';

  function initCalendly() {
    // Inject Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Inject Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Global click handler - intercept booking-related CTAs
    document.body.addEventListener('click', function (e) {
      const el = e.target.closest('a, button');
      if (!el) return;
      // Don't intercept links inside an inline Calendly widget
      if (el.closest('.calendly-inline-widget')) return;
      const text = el.textContent.trim();
      const isBookingCTA =
        el.classList.contains('open-calendly') ||
        text === 'Book a Discovery Call' ||
        text === 'Book a Call' ||
        text === 'Talk to an Expert' ||
        el.dataset.calendly === 'popup';

      if (isBookingCTA) {
        e.preventDefault();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
          window.open(CALENDLY_URL, '_blank');
        }
      }
    });
  }

  /* ── WebGL Shader (all pages) ────────────────────────── */
  function startPageShader(canvas, hero) {
    var THREE = window.THREE;
    var scene    = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: false, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color(0x000000), 1);
    var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    var uniforms = {
      resolution: { value: [hero.offsetWidth, hero.offsetHeight] },
      time:       { value: 0.0 },
      xScale:     { value: 1.0 },
      yScale:     { value: 0.42 },
      distortion: { value: 0.07 },
    };

    var vert = [
      'attribute vec3 position;',
      'void main() { gl_Position = vec4(position, 1.0); }',
    ].join('\n');

    var frag = [
      'precision highp float;',
      'uniform vec2  resolution;',
      'uniform float time;',
      'uniform float xScale;',
      'uniform float yScale;',
      'uniform float distortion;',
      'void main() {',
      '  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);',
      '  float d  = length(p) * distortion;',
      '  float rx = p.x * (1.0 + d);',
      '  float gx = p.x;',
      '  float bx = p.x * (1.0 - d);',
      '  float ri = 0.038 / abs(p.y + sin((rx + time) * xScale) * yScale);',
      '  float gi = 0.038 / abs(p.y + sin((gx + time) * xScale) * yScale);',
      '  float bi = 0.038 / abs(p.y + sin((bx + time) * xScale) * yScale);',
      '  vec3 col = ri * vec3(0.000, 0.369, 0.718)',
      '           + gi * vec3(0.725, 0.980, 0.973)',
      '           + bi * vec3(0.200, 0.510, 0.800);',
      '  gl_FragColor = vec4(col, 1.0);',
      '}',
    ].join('\n');

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
      -1,-1,0, 1,-1,0, -1,1,0, 1,-1,0, -1,1,0, 1,1,0,
    ]), 3));
    var mat = new THREE.RawShaderMaterial({
      vertexShader: vert, fragmentShader: frag,
      uniforms: uniforms, side: THREE.DoubleSide,
    });
    scene.add(new THREE.Mesh(geo, mat));

    function resize() {
      var w = hero.offsetWidth, h = hero.offsetHeight;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [w, h];
    }
    resize();

    function tick() {
      uniforms.time.value += 0.007;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    tick();
    window.addEventListener('resize', resize);
  }

  function initWebGLShader() {
    var hero = document.querySelector('.hero, .page-hero');
    if (!hero) return;
    var canvas = document.createElement('canvas');
    canvas.id = 'page-webgl';
    canvas.setAttribute('aria-hidden', 'true');
    hero.insertBefore(canvas, hero.firstChild);

    if (window.THREE) {
      startPageShader(canvas, hero);
    } else {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js';
      script.onload = function () { startPageShader(canvas, hero); };
      document.head.appendChild(script);
    }
  }

  /* ── Interactive Hover Buttons ────────────────────────── */
  const BTN_ARROW = '<svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const BTN_TARGETS = [
    'btn-hero-primary', 'btn-hero-secondary',
    'btn-gate', 'btn-assess', 'btn-report',
    'btn-transmit', 'btn-apply', 'btn-contact',
    'btn-nav-cta',
  ];

  function initInteractiveButtons() {
    BTN_TARGETS.forEach(function (cls) {
      document.querySelectorAll('.' + cls).forEach(function (btn) {
        if (btn.dataset.btnInit) return;
        btn.dataset.btnInit = '1';
        // Extract plain text only (ignore SVG/img children)
        var text = '';
        btn.childNodes.forEach(function (node) {
          if (node.nodeType === 3) text += node.textContent;
        });
        text = text.trim();
        if (!text) return;
        btn.classList.add('btn-interactive');
        btn.innerHTML =
          '<span class="btn-label">' + text + '</span>' +
          '<span class="btn-hover-label">' + text + BTN_ARROW + '</span>' +
          '<span class="btn-bubble"></span>';
      });
    });
  }

  /* ── EmailJS ──────────────────────────────────────────── */
  // Exposed on window so inline page scripts can access them
  window.EMAILJS_SERVICE_ID          = 'service_dophbfm';
  window.EMAILJS_TEMPLATE_CONTACT    = 'template_8dbzh3v';
  window.EMAILJS_TEMPLATE_ASSESSMENT = 'template_ey3aipy';
  var EMAILJS_PUBLIC_KEY             = '02Dg2NNa2p5mbLu2a';

  window.loadEmailJS = function (cb) {
    if (window.emailjs) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function () { window.emailjs.init(EMAILJS_PUBLIC_KEY); cb(); };
    document.head.appendChild(s);
  };

  /* ── Newsletter Form ──────────────────────────────────── */
  function initNewsletter() {
    var btn = document.getElementById('footer-subscribe-btn');
    var input = document.getElementById('footer-email-input');
    var status = document.getElementById('footer-newsletter-status');
    if (!btn || !input || !status) return;
    btn.addEventListener('click', function () {
      var email = input.value.trim();
      if (!email || !email.includes('@')) {
        status.textContent = 'Please enter a valid email.';
        status.className = 'footer-newsletter-status error';
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Subscribing...';
      status.textContent = '';
      status.className = 'footer-newsletter-status';
      fetch('https://hooks.zapier.com/hooks/catch/26044199/upkshqt/', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
      })
      .then(function () {
        input.value = '';
        btn.disabled = false;
        btn.textContent = 'Subscribe';
        status.textContent = 'Subscribed! Talk soon.';
        status.className = 'footer-newsletter-status success';
        setTimeout(function () {
          status.textContent = '';
          status.className = 'footer-newsletter-status';
        }, 4000);
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
        status.textContent = 'Something went wrong. Try again.';
        status.className = 'footer-newsletter-status error';
      });
    });
  }

  /* ── Init ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    injectShell();
    initDropdowns();
    initMobileNav();
    initNavScroll();
    initReveal();
    initHeroEntrance();
    initShootingStars();
    initCalendly();
    initInteractiveButtons();
    initWebGLShader();
    initNewsletter();
  });

})();
