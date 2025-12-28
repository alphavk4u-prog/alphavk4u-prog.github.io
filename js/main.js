function copyPrompt(id) {
  const text = document.getElementById(id);
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Prompt copied ✅");
}
