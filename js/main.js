function copyPrompt() {
  const text = document.getElementById("promptText");
  text.select();
  document.execCommand("copy");
  alert("Prompt copied ✅");
}
