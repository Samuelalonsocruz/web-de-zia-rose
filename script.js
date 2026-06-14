const copyButton = document.querySelector("#copyButton");
const copyStatus = document.querySelector("#copyStatus");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyStatus.textContent = "Enlace copiado.";
  } catch {
    copyStatus.textContent = "No se pudo copiar automaticamente. Copia la URL del navegador.";
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 3000);
});
