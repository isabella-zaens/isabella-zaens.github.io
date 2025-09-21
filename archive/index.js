const toggleButton = document.getElementById("toggle-button");
const moreProjects = document.getElementById("more-projects");
let expanded = false;

toggleButton.addEventListener("click", () => {
    expanded = !expanded;
    moreProjects.style.maxHeight = expanded ? moreProjects.scrollHeight + "px" : "0px";
    moreProjects.style.opacity = expanded ? "1" : "0";
    toggleButton.textContent = expanded ? "Show Less" : "Show More";
});

window.addEventListener("DOMContentLoaded", () => {
    moreProjects.style.maxHeight = "0px";
    moreProjects.style.overflow = "hidden";
    moreProjects.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
    moreProjects.style.opacity = "0";
});

document.addEventListener('DOMContentLoaded', () => {

  const navContainer = document.querySelector('.nav-container');
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const highlight = document.querySelector('.nav-highlight');

  // Only links that point to sections (href starts with '#')
  const sectionLinks = links.filter(l => l.getAttribute('href')?.startsWith('#'));
  const sections = sectionLinks
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  function moveHighlightToLink(link) {
    if (!link) return;

    const linkRect = link.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    const x = Math.round(linkRect.left - containerRect.left);

    // set width & height to match link (pill effect)
    highlight.style.width = `${Math.round(linkRect.width)}px`;
    highlight.style.height = `${Math.round(linkRect.height)}px`;
    // set CSS var that controls translateX (keeps translateY(-50%) intact)
    highlight.style.setProperty('--x', `${x}px`);
  }

  function setActiveLink(link) {
    links.forEach(l => l.classList.remove('active'));
    if (link) link.classList.add('active');
    moveHighlightToLink(link);
  }

  // IntersectionObserver tracks most visible section
  const sectionRatios = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => sectionRatios.set(entry.target.id, entry.intersectionRatio));
    let bestId = null;
    let bestRatio = 0;
    for (const [id, ratio] of sectionRatios.entries()) {
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestId = id;
      }
    }
    if (bestId) {
      const active = document.querySelector(`.nav-links a[href="#${bestId}"]`);
      if (active) setActiveLink(active);
    }
  }, {
    threshold: Array.from({length: 101}, (_, i) => i / 100)
  });

  sections.forEach(s => observer.observe(s));

  // clicking anchors: set active immediately
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        setActiveLink(link);
      } else {
        links.forEach(l => l.classList.remove('active'));
      }
    });
  });

  // reposition highlight on resize
  window.addEventListener('resize', () => {
    const active = document.querySelector('.nav-links a.active') || sectionLinks[0];
    if (active) moveHighlightToLink(active);
  });

  // initial positioning
  requestAnimationFrame(() => {
    let initialSet = false;
    if (sections.length) {
      let best = null;
      let bestDist = Infinity;
      const viewportCenter = window.innerHeight / 2;
      sections.forEach(sec => {
        const r = sec.getBoundingClientRect();
        const secCenter = r.top + r.height / 2;
        const dist = Math.abs(secCenter - viewportCenter);
        if (dist < bestDist) { bestDist = dist; best = sec; }
      });
      if (best) {
        const link = document.querySelector(`.nav-links a[href="#${best.id}"]`);
        if (link) { setActiveLink(link); initialSet = true; }
      }
    }
    if (!initialSet) {
      const first = sectionLinks[0] || links[0];
      if (first) setActiveLink(first);
    }
  });

  // ✅ Fix: ensure Coursework highlights when scrolled to bottom
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      const lastLink = document.querySelector('.nav-links a[href="#coursework"]');
      if (lastLink) setActiveLink(lastLink);
    }
  });

});

