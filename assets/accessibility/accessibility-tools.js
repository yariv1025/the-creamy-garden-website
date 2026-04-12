(function () {
  var STORAGE = {
    zoom: "a11y-zoom-step",
    hc: "a11y-hc",
    gray: "a11y-gray"
  };

  function init() {
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
      if (btn) {
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        btn.setAttribute("aria-checked", on ? "true" : "false");
      }
      try { localStorage.setItem(STORAGE.hc, on ? "1" : ""); } catch (e) {}
    }

    function applyGray(on) {
      grayTargets.forEach(function (el) { el.classList.toggle("gray-mode-on", on); });
      var btn = document.getElementById("a11yGrayscale");
      if (btn) {
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        btn.setAttribute("aria-checked", on ? "true" : "false");
      }
      try { localStorage.setItem(STORAGE.gray, on ? "1" : ""); } catch (e) {}
    }

    var inc      = document.getElementById("a11yFontInc");
    var dec      = document.getElementById("a11yFontDec");
    var contrast = document.getElementById("a11yContrast");
    var gray     = document.getElementById("a11yGrayscale");

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
