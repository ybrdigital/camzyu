/**
 * Camzyu - PC Plugin | Modern Web Engine
 * Developer: Yash Rayjada (YBR Digital)
 * Repository: https://github.com/ybrdigital/camzyu
 * License: Freeware / Proprietary (Closed-Source)
 */

// ============================================================================
// 1. Central Version Configuration & Fallback Definition
// ============================================================================
const DEFAULT_VERSION_CONFIG = {
  product: "Camzyu PC Plugin",
  version: "1.0.0",
  tag: "v1.0.0",
  windowsCompatibility: "Windows 10 / 11 (64-bit), macOS & Linux coming soon",
  appCompatibility: "Zoom, Google Meet, Microsoft Teams, Discord, OBS Studio",
  architecture: "x64",
  installerFilename: "Camzyu-Windows-v1.0.0-Setup.exe",
  installerPath: "assets/downloads/v1.0.0/Camzyu-Windows-v1.0.0-Setup.exe",
  downloadUrl: "assets/downloads/v1.0.0/Camzyu-Windows-v1.0.0-Setup.exe",
  githubReleaseUrl: "https://github.com/ybrdigital/camzyu/releases",
  fileSize: "12.4 MB"
};

let activeVersionConfig = { ...DEFAULT_VERSION_CONFIG };

// ============================================================================
// 2. DOM Ready Initialization
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initVersionData();
  initSmoothScroll();
  initNavbarScroll();
  setDynamicYear();
});

// ============================================================================
// 3. Central Version Data Loader (Local JSON + GitHub API Fallback)
// ============================================================================
async function initVersionData() {
  try {
    const res = await fetch("assets/version.json", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      activeVersionConfig = { ...DEFAULT_VERSION_CONFIG, ...data };
    }
  } catch (err) {
    console.warn("[Camzyu] Using local fallback version config:", err);
  }

  // Optionally query GitHub API for releases
  try {
    const ghRes = await fetch("https://api.github.com/repos/ybrdigital/camzyu/releases/latest", {
      headers: { Accept: "application/vnd.github.v3+json" }
    });
    if (ghRes.ok) {
      const ghData = await ghRes.json();
      if (ghData && ghData.assets && ghData.assets.length > 0) {
        const setupAsset = ghData.assets.find(a => a.name.endsWith(".exe") || a.name.includes("Setup"));
        if (setupAsset) {
          activeVersionConfig.downloadUrl = setupAsset.browser_download_url;
          activeVersionConfig.installerFilename = setupAsset.name;
          activeVersionConfig.fileSize = `${(setupAsset.size / (1024 * 1024)).toFixed(1)} MB`;
        }
      }
      if (ghData.tag_name) {
        activeVersionConfig.version = ghData.tag_name.replace(/^v/, "");
        activeVersionConfig.tag = ghData.tag_name;
      }
    }
  } catch (ghErr) {
    console.debug("[Camzyu] GitHub Releases API query skipped or rate-limited:", ghErr);
  }

  applyVersionDataToUI(activeVersionConfig);
}

function applyVersionDataToUI(cfg) {
  // Update all download buttons
  const downloadBtns = document.querySelectorAll(".primary-download-btn");
  downloadBtns.forEach(btn => {
    btn.setAttribute("href", cfg.downloadUrl);
    btn.setAttribute("download", cfg.installerFilename);
  });

  // Update dynamic text elements
  const elVer = document.querySelectorAll(".dynamic-version-tag");
  elVer.forEach(el => el.textContent = `v${cfg.version}`);

  const elSize = document.querySelectorAll(".dynamic-file-size");
  elSize.forEach(el => el.textContent = cfg.fileSize);
}

// ============================================================================
// 4. Smooth Scroll Navigation
// ============================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length <= 1) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = document.querySelector("#mainNav")?.offsetHeight || 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // Close mobile navbar if open
        const navCollapse = document.querySelector(".navbar-collapse");
        if (navCollapse && navCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
}

// ============================================================================
// 5. Sticky Navbar Background Blur & Scroll State
// ============================================================================
function initNavbarScroll() {
  const navbar = document.querySelector("#mainNav");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// ============================================================================
// 6. Dynamic Copyright Year
// ============================================================================
function setDynamicYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
