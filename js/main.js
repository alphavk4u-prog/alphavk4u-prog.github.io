function copyPrompt(id) {
  const textarea = document.getElementById(id);

  if (!textarea) {
    alert("Prompt not found ❌");
    return;
  }

  const text = textarea.value;

  navigator.clipboard.writeText(text).then(() => {
    alert("Prompt copied ✅");
  }).catch(() => {
    alert("Copy failed ❌");
  });
}
