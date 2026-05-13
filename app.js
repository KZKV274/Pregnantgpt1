document.addEventListener("DOMContentLoaded", () => {
  console.log("Baby Journey loaded 🌸");

  const splash = document.getElementById("splash");

  if (splash) {
    setTimeout(() => {
      splash.style.opacity = "0";

      setTimeout(() => {
        splash.remove();
      }, 500);

    }, 1500);
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {

    try {
      await navigator.serviceWorker.register("./sw.js");
      console.log("Service Worker registered");

    } catch (err) {
      console.error("SW registration failed:", err);
    }

  });
}
