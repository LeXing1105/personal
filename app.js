(function () {
  const state = {
    lang: localStorage.getItem("cv-language") || "en",
  };

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  function t(path) {
    const uiValue = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), CV_DATA.ui[state.lang]);
    if (uiValue) return uiValue;

    const dataValue = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), CV_DATA);
    return text(dataValue);
  }

  function text(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.lang] || value.en || "";
  }

  function slugify(input) {
    return input
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content != null) node.textContent = content;
    return node;
  }

  function link(label, href, className) {
    const node = document.createElement("a");
    node.textContent = label;
    node.href = href;
    node.className = className || "";
    if (/^https?:\/\//.test(href)) {
      node.target = "_blank";
      node.rel = "noreferrer";
    }
    return node;
  }

  function renderLocalizedText() {
    $$("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });

    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = state.lang === "zh" ? "邢乐 | 简历" : "Le Xing | CV";
  }

  function renderContact() {
    const strip = $("#contactStrip");
    strip.replaceChildren();

    CV_DATA.profile.contacts.forEach((item) => {
      const href = item.href || (item.type === "email" ? `mailto:${item.value}` : item.value);
      const label = item.type === "email" ? `${item.label}: ${item.value}` : item.label;
      strip.append(link(label, href, "contact-link"));
    });
  }

  function renderQuickFacts() {
    const root = $("#quickFacts");
    root.replaceChildren();

    CV_DATA.profile.facts.forEach((fact) => {
      const item = el("article", "fact-card");
      item.append(el("p", "fact-label", text(fact.label)));
      item.append(el("p", "fact-value", text(fact.value)));
      root.append(item);
    });
  }

  function renderSectionNav(sections) {
    const root = $("#sectionNav");
    root.replaceChildren();

    sections.forEach((section) => {
      const anchor = link(text(section.title), `#${section.id}`, "section-nav-link");
      root.append(anchor);
    });
  }

  function renderBullets(items) {
    if (!items || !items.length) return null;
    const list = el("ul", "bullet-list");
    items.forEach((item) => list.append(el("li", "", text(item))));
    return list;
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return null;
    const wrap = el("div", "tag-list");
    tags.forEach((tag) => wrap.append(el("span", "tag", text(tag))));
    return wrap;
  }

  function renderEntry(entry) {
    const card = el("article", "entry-card");
    const header = el("div", "entry-header");
    const titleWrap = el("div");
    titleWrap.append(el("h3", "entry-title", text(entry.title)));
    if (entry.organization) titleWrap.append(el("p", "entry-meta", text(entry.organization)));
    if (entry.detail) titleWrap.append(el("p", "entry-detail", text(entry.detail)));
    header.append(titleWrap);
    if (entry.period) header.append(el("p", "entry-period", text(entry.period)));
    card.append(header);

    if (entry.description) card.append(el("p", "entry-description", text(entry.description)));
    const tags = renderTags(entry.tags);
    if (tags) card.append(tags);

    if (entry.projects && entry.projects.length) {
      const projects = el("div", "project-stack");
      entry.projects.forEach((project) => {
        const projectNode = el("section", "project");
        projectNode.append(el("h4", "project-title", text(project.title)));
        if (project.url) {
          const productLink = el("p", "project-context");
          productLink.append(link(text({ en: "Official product page", zh: "产品官网" }), project.url));
          projectNode.append(productLink);
        }
        if (project.context) projectNode.append(el("p", "project-context", text(project.context)));
        const bullets = renderBullets(project.bullets);
        if (bullets) projectNode.append(bullets);
        projects.append(projectNode);
      });
      card.append(projects);
    }

    const bullets = renderBullets(entry.bullets);
    if (bullets) card.append(bullets);
    return card;
  }

  function renderTimeline(section) {
    const wrap = el("div", "timeline");
    section.items.forEach((entry) => wrap.append(renderEntry(entry)));
    return wrap;
  }

  function renderPublications(section) {
    const wrap = el("div", "publication-years");
    section.years.forEach((group) => {
      const yearBlock = el("section", "year-block");
      yearBlock.append(el("h3", "year-heading", group.year));
      const list = el("ol", "publication-list");
      group.items.forEach((publication) => list.append(el("li", "", text(publication))));
      yearBlock.append(list);
      wrap.append(yearBlock);
    });
    return wrap;
  }

  function renderSimpleList(section, ordered) {
    const list = el(ordered ? "ol" : "ul", ordered ? "numbered-list" : "clean-list");
    section.items.forEach((item) => {
      const li = el("li");
      if (typeof item === "string" || item.en || item.zh) {
        li.textContent = text(item);
      } else {
        if (item.period) li.append(el("span", "list-period", text(item.period)));
        li.append(el("span", "list-text", text(item.text || item.title)));
        if (item.detail) li.append(el("span", "list-detail", text(item.detail)));
      }
      list.append(li);
    });
    return list;
  }

  function renderReferenceGroups(section) {
    const wrap = el("div", "reference-grid");
    section.groups.forEach((group) => {
      const card = el("article", "reference-card");
      card.append(el("h3", "reference-org", text(group.organization)));
      group.people.forEach((person) => {
        const item = el("div", "reference-person");
        item.append(el("p", "reference-name", text(person.name)));
        item.append(el("p", "reference-role", text(person.role)));
        if (person.email) item.append(link(person.email, `mailto:${person.email}`, "reference-link"));
        if (person.phone) item.append(el("p", "reference-phone", person.phone));
        card.append(item);
      });
      wrap.append(card);
    });
    return wrap;
  }

  function renderSection(section) {
    const node = el("section", "cv-section");
    node.id = section.id;
    const header = el("div", "section-heading");
    header.append(el("p", "section-kicker", text(section.kicker || "")));
    header.append(el("h2", "", text(section.title)));
    if (section.note) header.append(el("p", "section-note", text(section.note)));
    node.append(header);

    if (section.type === "timeline") node.append(renderTimeline(section));
    if (section.type === "publications") node.append(renderPublications(section));
    if (section.type === "list") node.append(renderSimpleList(section));
    if (section.type === "ordered-list") node.append(renderSimpleList(section, true));
    if (section.type === "references") node.append(renderReferenceGroups(section));

    return node;
  }

  function renderSections() {
    const root = $("#cvContent");
    root.replaceChildren();

    const sections = CV_DATA.sections.map((section) => ({
      ...section,
      id: section.id || slugify(text(section.title)),
    }));

    renderSectionNav(sections);
    sections.forEach((section) => root.append(renderSection(section)));
  }

  function renderAll() {
    renderLocalizedText();
    renderContact();
    renderQuickFacts();
    renderSections();

    $$("[data-lang-button]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langButton === state.lang);
      button.setAttribute("aria-pressed", String(button.dataset.langButton === state.lang));
    });
  }

  $$("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.langButton;
      localStorage.setItem("cv-language", state.lang);
      renderAll();
    });
  });

  const exportStatus = $("#exportStatus");

  function exportPdf() {
    document.body.classList.add("pdf-exporting");
    exportStatus.textContent = t("actions.exporting");
    window.print();
  }

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("pdf-exporting");
    exportStatus.textContent = "";
  });

  $("#exportPdfButton").addEventListener("click", exportPdf);

  renderAll();
})();
