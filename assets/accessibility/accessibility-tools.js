(function () {
  var STORAGE = {
    zoom: "a11y-zoom-step",
    hc: "a11y-hc",
    gray: "a11y-gray"
  };

  function ensureToolbar() {
    var existing = document.getElementById("a11yToolbar");
    if (existing) return existing;

    var toolbar = document.createElement("div");
    toolbar.className = "a11y-toolbar";
    toolbar.id = "a11yToolbar";
    toolbar.setAttribute("role", "toolbar");
    toolbar.setAttribute("aria-label", "סרגל נגישות");
    toolbar.innerHTML =
      '<button type="button" class="a11y-btn" id="a11yFontInc" aria-label="הגדל גופן"><span aria-hidden="true">A+</span><span class="a11y-btn-label">הגדל גופן</span></button>' +
      '<button type="button" class="a11y-btn" id="a11yFontDec" aria-label="הקטן גופן"><span aria-hidden="true">A-</span><span class="a11y-btn-label">הקטן גופן</span></button>' +
      '<button type="button" class="a11y-btn" id="a11yContrast" aria-label="ניגודיות גבוהה" aria-pressed="false"><span aria-hidden="true">⬛</span><span class="a11y-btn-label">ניגודיות גבוהה</span></button>' +
      '<button type="button" class="a11y-btn" id="a11yGrayscale" aria-label="מצב גווני אפור" aria-pressed="false"><span aria-hidden="true">◐</span><span class="a11y-btn-label">מצב גווני אפור</span></button>' +
      '<a class="a11y-btn" id="a11yStmtBtn" href="accessibility-statement.html" aria-label="הצהרת נגישות"><span aria-hidden="true">♿</span><span class="a11y-btn-label">נגישות</span></a>';

    document.body.appendChild(toolbar);
    return toolbar;
  }

  function init() {
    ensureToolbar();

    var zoomLevels = [1, 1.12, 1.25];
    var zoomStep = 0;
    var grayTargets = Array.from(document.querySelectorAll("header, main, footer")).filter(Boolean);

    function applyZoom(step) {
      zoomStep = Math.max(0, Math.min(step, zoomLevels.length - 1));
      document.body.style.zoom = String(zoomLevels[zoomStep]);
      try { localStorage.setItem(STORAGE.zoom, String(zoomStep)); } catch (e) {}
    }

    function applyContrast(on) {
      document.body.classList.toggle("hc-mode", on);
      var btn = document.getElementById("a11yContrast");
      if (btn) btn.setAttribute("aria-pressed", on ? "true" : "false");
      try { localStorage.setItem(STORAGE.hc, on ? "1" : ""); } catch (e) {}
    }

    function applyGray(on) {
      grayTargets.forEach(function (el) { el.classList.toggle("gray-mode-on", on); });
      var btn = document.getElementById("a11yGrayscale");
      if (btn) btn.setAttribute("aria-pressed", on ? "true" : "false");
      try { localStorage.setItem(STORAGE.gray, on ? "1" : ""); } catch (e) {}
    }

    var inc = document.getElementById("a11yFontInc");
    var dec = document.getElementById("a11yFontDec");
    var contrast = document.getElementById("a11yContrast");
    var gray = document.getElementById("a11yGrayscale");

    if (inc) inc.addEventListener("click", function () { applyZoom(zoomStep + 1); });
    if (dec) dec.addEventListener("click", function () { applyZoom(zoomStep - 1); });
    if (contrast) contrast.addEventListener("click", function () {
      applyContrast(this.getAttribute("aria-pressed") !== "true");
    });
    if (gray) gray.addEventListener("click", function () {
      applyGray(this.getAttribute("aria-pressed") !== "true");
    });

    try {
      var storedZoom = parseInt(localStorage.getItem(STORAGE.zoom) || "0", 10);
      applyZoom(isNaN(storedZoom) ? 0 : storedZoom);
      applyContrast(localStorage.getItem(STORAGE.hc) === "1");
      applyGray(localStorage.getItem(STORAGE.gray) === "1");
    } catch (e) {
      applyZoom(0);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
