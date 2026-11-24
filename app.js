(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const CAT = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const BY_ID = Object.fromEntries(CARDS.map((c, i) => [c.id, Object.assign(c, { n: i + 1 })]));
  const TOTAL = CARDS.length;

  /* ---------- storage (best-effort) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };
  let mastered = new Set(store.get(DECK.storageKey + ".mastered", []));
  const saveMastered = () => store.set(DECK.storageKey + ".mastered", [...mastered]);
  const savedTheme = store.get(DECK.storageKey + ".theme", null);
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  /* ---------- helpers ---------- */
  const icon = (cat, cls = "") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[cat]}</svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const links = html => html.replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, (_, id, label) => {
    const c = BY_ID[id]; const col = c ? CAT[c.cat].color : "inherit";
    return `<a class="clink" role="button" tabindex="0" data-go="${id}" style="--lc:${col}">${label}</a>`;
  });
  const strip = html => html.replace(/\[\[[\w-]+\|([^\]]+)\]\]/g, "$1").replace(/<[^>]+>/g, "");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800); };

  /* ---------- deck chrome ---------- */
  document.title = DECK.name;
  $("#deckName").innerHTML = `<span class="hide-sm">${DECK.name}</span><span class="show-sm">${DECK.short}</span>`;
  $("#q").placeholder = `Search ${DECK.searchNoun || "cards"}…`;
  $("#deckSub").textContent = DECK.subtitle;
  $("#about").innerHTML = DECK.about + " Tap a card to flip it, swipe or use ← → to move, Space to flip, Esc to close.";
  document.querySelector(".ways").innerHTML = DECK.ways.map(([k, t, d]) => `<button class="way" data-way="${k}"><b>${t}</b><span>${d}</span></button>`).join("");

  /* ---------- home ---------- */
  let filter = "all", query = "";
  const chipsEl = $("#chips");
  chipsEl.innerHTML = [`<button class="chip" data-cat="all" aria-pressed="true">All</button>`]
    .concat(CATEGORIES.map(c => `<button class="chip" data-cat="${c.id}" aria-pressed="false"><i style="background:${c.color}"></i>${c.name}</button>`)).join("");
  chipsEl.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    setFilter(b.dataset.cat);
  });
  function setFilter(cat) {
    filter = cat;
    chipsEl.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.cat === cat)));
    renderList();
  }
  $("#q").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); renderList(); });

  function matches(c) {
    if (filter !== "all" && c.cat !== filter) return false;
    if (!query) return true;
    const hay = [c.title, c.tagline, c.desc, ...(c.steps || []), ...(c.stepText || []), CAT[c.cat].name].map(strip).join(" ").toLowerCase();
    return query.split(/\s+/).every(w => hay.includes(w));
  }
  function visible() { return CARDS.filter(matches); }

  function miniHTML(c) {
    const cat = CAT[c.cat];
    const art = c.art === "pillars" ? `<img src="pillars.svg" alt="">` : icon(c.cat);
    return `<button class="mini" data-open="${c.id}" style="--c:${cat.color}" aria-label="${esc(c.title)}">
      <span class="in">
        <span class="cat">${icon(c.cat)}${cat.name}</span>
        <span class="art">${art}</span>
        <h3>${esc(c.title)}</h3><p>${esc(c.tagline)}</p>
      </span>${mastered.has(c.id) ? `<span class="done"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>` : ""}</button>`;
  }
  function renderList() {
    const list = $("#list");
    const vis = visible();
    if (!vis.length) { list.innerHTML = `<p class="empty">No cards match “${esc(query)}”.</p>`; return; }
    const groups = CATEGORIES.map(cat => ({ cat, cards: vis.filter(c => c.cat === cat.id) })).filter(g => g.cards.length);
    list.innerHTML = groups.map(g => `
      <h2 class="section-title" style="color:${g.cat.color}">${icon(g.cat.id)}<span style="color:var(--ink)">${g.cat.name}</span></h2>
      <p class="section-sub">${g.cat.blurb}</p>
      <div class="grid">${g.cards.map(miniHTML).join("")}</div>`).join("");
    updateProgress();
  }
  $("#list").addEventListener("click", e => {
    const b = e.target.closest("[data-open]"); if (!b) return;
    openViewer(visible(), b.dataset.open, "browse");
  });
  function updateProgress() {
    const n = CARDS.filter(c => mastered.has(c.id)).length;
    $("#progText").textContent = `${n} of ${TOTAL} mastered`;
    $("#progBar").style.width = (n / TOTAL * 100) + "%";
  }

  document.querySelector(".ways").addEventListener("click", e => {
    const w = e.target.closest("[data-way]"); if (!w) return;
    const way = w.dataset.way;
    if (way === "contents") { setFilter("all"); openViewer(CARDS, DECK.featured, "browse"); }
    if (way === "shortcuts") openViewer(CARDS, "shortcuts", "browse");
    if (way === "recipes") { setFilter("recipe"); $("#chips").scrollIntoView({ behavior: "smooth", block: "start" }); }
    if (way === "random") randomCard();
  });
  function randomCard() {
    const pool = CARDS.filter(c => !["start"].includes(c.cat));
    const c = pool[Math.floor(Math.random() * pool.length)];
    openViewer(CARDS, c.id, "browse");
  }

  /* ---------- card faces ---------- */
  function frontHTML(c) {
    const cat = CAT[c.cat];
    let art;
    if (c.art === "pillars") art = `<div class="f-art tall"><img src="pillars.svg" alt="The 8 leadership pillars wheel"></div>`;
    else art = `<div class="f-art"><span class="ring" style="width:62%;aspect-ratio:1"></span><span class="ring" style="width:84%;aspect-ratio:1"></span>${icon(c.cat, "big")}</div>`;
    let extra = "";
    if (c.cat === "recipe") {
      extra = `<div class="box"><h4>Combine these ${DECK.combineNoun || "tactics"}</h4><ul class="combo">${c.combine.map(id => {
        const t = BY_ID[id], col = CAT[t.cat].color;
        return `<li style="--lc:${col}">${icon(t.cat)}<a class="clink" role="button" tabindex="0" data-go="${id}" style="--lc:${col}">${esc(t.title)}</a></li>`;
      }).join("")}</ul></div>`;
    }
    return `<div class="paper">
      <div class="f-cat">${icon(c.cat)}${cat.name}</div>
      <div class="scroll">
        ${art}
        <h2 class="f-title">${esc(c.title)}</h2>
        <p class="f-tag">${esc(c.tagline)}</p>
        <p class="f-desc">${links(c.desc)}</p>
        ${c.question ? `<div class="box q"><h4>${DECK.questionLabel || "Ask yourself"}</h4>${esc(c.question)}</div>` : ""}
        ${extra}
      </div>
      <div class="foot"><span>${DECK.short}</span><span class="flip-hint">Tap to flip ↻</span><span>${c.n} / ${TOTAL}</span></div>
    </div>`;
  }
  function backHTML(c) {
    let body;
    if (c.cat === "recipe") {
      body = c.combine.map((id, i) => {
        const t = BY_ID[id], col = CAT[t.cat].color;
        return `<div class="rstep"><div><b style="color:${CAT.recipe.color}">Step ${i + 1}</b><p>${esc(c.stepText[i])} Use <a class="clink" role="button" tabindex="0" data-go="${id}" style="--lc:${col}">${esc(t.title)}</a>.</p></div>
          <button class="tile" data-go="${id}" style="--lc:${col}" aria-label="Open ${esc(t.title)}"><span><em>${CAT[t.cat].name}</em>${icon(t.cat)}<strong>${esc(t.title)}</strong></span></button></div>`;
      }).join("") + `<div class="box"><h4 style="color:${CAT.recipe.color}">End result</h4>${esc(c.result)}</div>`;
    } else {
      body = (DECK.stepsHeading && c.cat !== "start" ? `<h4 class="sh">${DECK.stepsHeading}</h4>` : "") + `<ol class="steps">${c.steps.map(s => `<li>${links(s)}</li>`).join("")}</ol>`;
      if (c.example) body += `<div class="box ex"><h4>Example</h4>${esc(c.example)}</div>`;
      if (c.insight) body += `<div class="box ins"><h4>${DECK.insightLabel || "Insight"}</h4>${links(esc(c.insight).replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, "[[$1|$2]]"))}</div>`;
      if (c.related && c.related.length) body += `<div class="rel">${c.related.map(id => {
        const t = BY_ID[id]; if (!t) return ""; const col = CAT[t.cat].color;
        return `<button data-go="${id}" style="--lc:${col}">${icon(t.cat)}${esc(t.title)}</button>`;
      }).join("")}</div>`;
    }
    return `<div class="paper">
      <h2 class="b-title">${esc(c.title)}</h2>
      <div class="scroll">${body}</div>
      <div class="foot"><span>${DECK.short}</span><span class="flip-hint">Tap to flip ↻</span><span>${CAT[c.cat].name}</span></div>
    </div>`;
  }

  /* ---------- viewer ---------- */
  const viewer = $("#viewer"), inner = $("#inner"), drag = $("#drag"), stage = $("#stage");
  let deck = [], idx = 0, mode = "browse", flipped = false, studyTotal = 0;

  function openViewer(list, id, m) {
    mode = m; deck = list.slice();
    idx = Math.max(0, deck.findIndex(c => c.id === id));
    viewer.classList.add("open");
    viewer.classList.toggle("study", mode === "study");
    viewer.classList.remove("finished");
    document.body.style.overflow = "hidden";
    if (!history.state || !history.state.viewer) history.pushState({ viewer: true }, "");
    show();
  }
  function closeViewer(fromPop) {
    viewer.classList.remove("open", "study", "finished");
    document.body.style.overflow = "";
    renderList();
    if (!fromPop && history.state && history.state.viewer) history.back();
  }
  window.addEventListener("popstate", () => { if (viewer.classList.contains("open")) closeViewer(true); });

  function show(dir = 0) {
    const c = deck[idx]; if (!c) return;
    flipped = false;
    const col = CAT[c.cat].color;
    inner.classList.remove("flipped");
    inner.innerHTML = `<div class="face front" style="--c:${col}">${frontHTML(c)}</div><div class="face back" style="--c:${col}">${backHTML(c)}</div>`;
    if (mode === "study") {
      $("#vCount").textContent = `${studyTotal - deck.length + 1} of ${studyTotal} · ${deck.length} left`;
      $("#hint").textContent = "Recall the steps, then flip to check.";
    } else {
      $("#vCount").textContent = `${idx + 1} / ${deck.length}`;
      $("#hint").textContent = "";
    }
    const isM = mastered.has(c.id);
    $("#starBtn").setAttribute("aria-pressed", String(isM));
    $("#starBtn").title = isM ? "Mastered (tap to unmark)" : "Mark as mastered";
    if (dir) {
      drag.classList.add("dragging");
      drag.style.transform = `translateX(${dir * 40}px)`; drag.style.opacity = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        drag.classList.remove("dragging"); drag.style.transform = ""; drag.style.opacity = "";
      }));
    }
  }
  function flip() { flipped = !flipped; inner.classList.toggle("flipped", flipped); }
  function go(d) {
    if (mode === "study" || deck.length < 2) return;
    idx = (idx + d + deck.length) % deck.length; show(d);
  }
  function jumpTo(id) {
    const c = BY_ID[id]; if (!c) return;
    if (mode === "study") { toast("Finish or close study mode to follow links"); return; }
    let i = deck.findIndex(x => x.id === id);
    if (i < 0) { deck = CARDS.slice(); i = deck.findIndex(x => x.id === id); }
    idx = i; show(1);
  }

  $("#prevBtn").onclick = () => go(-1);
  $("#nextBtn").onclick = () => go(1);
  $("#flipBtn").onclick = flip;
  $("#sFlipBtn").onclick = flip;
  $("#randBtn").onclick = () => { const i = Math.floor(Math.random() * deck.length); idx = i === idx ? (i + 1) % deck.length : i; show(1); };
  $("#closeBtn").onclick = () => closeViewer();
  $("#doneClose").onclick = () => closeViewer();
  $("#starBtn").onclick = () => {
    const c = deck[idx]; if (!c) return;
    if (mastered.has(c.id)) mastered.delete(c.id); else mastered.add(c.id);
    saveMastered(); show(); toast(mastered.has(c.id) ? "Marked as mastered" : "Unmarked");
  };

  /* links inside cards */
  inner.addEventListener("click", e => {
    const l = e.target.closest("[data-go]");
    if (l) { e.stopPropagation(); jumpTo(l.dataset.go); }
  });
  inner.addEventListener("keydown", e => {
    const l = e.target.closest("[data-go]");
    if (l && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); e.stopPropagation(); jumpTo(l.dataset.go); }
  });

  /* drag / swipe / tap-to-flip */
  let sx = 0, sy = 0, dx = 0, active = false, moved = false, downTarget = null;
  stage.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    active = true; moved = false; sx = e.clientX; sy = e.clientY; dx = 0; downTarget = e.target;
  });
  stage.addEventListener("pointermove", e => {
    if (!active) return;
    dx = e.clientX - sx; const dy = e.clientY - sy;
    if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { moved = true; drag.classList.add("dragging"); try { stage.setPointerCapture(e.pointerId); } catch {} }
    if (moved && mode !== "study") drag.style.transform = `translateX(${dx}px) rotate(${dx / 30}deg)`;
    if (moved && mode === "study") drag.style.transform = `translateX(${dx * 0.6}px) rotate(${dx / 40}deg)`;
  });
  const end = e => {
    if (!active) return; active = false;
    drag.classList.remove("dragging");
    if (moved) {
      drag.style.transform = "";
      if (mode === "study") { if (dx > 90) answer(true); else if (dx < -90) answer(false); }
      else if (dx < -70) go(1); else if (dx > 70) go(-1);
      return;
    }
    if (e.type === "pointerup" && !(downTarget && downTarget.closest("[data-go], a, button"))) {
      const sel = window.getSelection && String(window.getSelection());
      if (!sel) flip();
    }
  };
  stage.addEventListener("pointerup", end);
  stage.addEventListener("pointercancel", () => { active = false; moved = false; drag.classList.remove("dragging"); drag.style.transform = ""; });

  document.addEventListener("keydown", e => {
    if (!viewer.classList.contains("open")) { if (e.key === "/" && document.activeElement !== $("#q")) { e.preventDefault(); $("#q").focus(); } return; }
    if (e.target.closest && e.target.closest("[data-go]") && (e.key === "Enter" || e.key === " ")) return;
    if (e.key === "Escape") closeViewer();
    else if (e.key === "ArrowRight") mode === "study" ? answer(true) : go(1);
    else if (e.key === "ArrowLeft") mode === "study" ? answer(false) : go(-1);
    else if (e.key === " " || e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown") { e.preventDefault(); flip(); }
  });

  /* ---------- study mode ---------- */
  function startStudy() {
    const pool = visible().filter(c => c.cat !== "start");
    if (!pool.length) { toast("No cards to study in this view"); return; }
    let q = pool.filter(c => !mastered.has(c.id));
    if (!q.length) q = pool;
    q = shuffle(q); studyTotal = q.length;
    openViewer(q, q[0].id, "study");
    const label = filter === "all" ? "all pillars" : CAT[filter].name;
    toast(`Studying ${q.length} cards · ${label}`);
  }
  function answer(got) {
    if (mode !== "study" || !deck.length) return;
    const c = deck.splice(idx, 1)[0];
    if (got) { mastered.add(c.id); saveMastered(); }
    else { deck.push(c); }
    if (!deck.length) { viewer.classList.add("finished"); $("#vCount").textContent = ""; return; }
    idx = Math.min(idx, deck.length - 1);
    if (!got && deck.length === 1) idx = 0;
    show(got ? 1 : -1);
  }
  $("#studyBtn").onclick = startStudy;
  $("#gotBtn").onclick = () => answer(true);
  $("#againBtn").onclick = () => answer(false);
  $("#restartBtn").onclick = () => { closeViewer(); setTimeout(startStudy, 50); };

  /* ---------- menu ---------- */
  const menu = $("#menu");
  $("#moreBtn").onclick = e => { e.stopPropagation(); menu.classList.toggle("open"); };
  document.addEventListener("click", e => { if (!e.target.closest("#menu")) menu.classList.remove("open"); });
  menu.addEventListener("click", e => {
    const a = e.target.closest("[data-act]"); if (!a) return;
    menu.classList.remove("open");
    if (a.dataset.act === "theme") {
      const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next; store.set(DECK.storageKey + ".theme", next);
    }
    if (a.dataset.act === "reset") { mastered = new Set(); saveMastered(); renderList(); toast("Study progress reset"); }
  });

  /* ---------- install (PWA) ---------- */
  let deferred = null;
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; $("#installBtn").style.display = "inline-flex"; });
  $("#installBtn").onclick = async () => {
    if (!deferred) return;
    deferred.prompt(); await deferred.userChoice.catch(() => {}); deferred = null;
    $("#installBtn").style.display = "none";
  };
  window.addEventListener("appinstalled", () => { $("#installBtn").style.display = "none"; toast("Installed"); });
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  /* ---------- boot ---------- */
  renderList();
  const startId = location.hash.slice(1);
  if (BY_ID[startId]) openViewer(CARDS, startId, "browse");
})();
