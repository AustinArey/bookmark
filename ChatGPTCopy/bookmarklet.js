javascript: (function () {
  const highlightedDiv = document.querySelector(
    'li[data-projection-id="110"] a.bg-gray-900'
  );

  if (highlightedDiv) {
    const text = highlightedDiv.querySelector(".flex-1").textContent;
    console.log(text);
  }

  var prompts = Array.from(
    document.querySelectorAll(
      'div[class^="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800"]'
    )
  );
  var responses = Array.from(
    document.querySelectorAll(
      'div[class^="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]"]'
    )
  );

  var textToCopy = prompts
    .map((prompt, index) => {
      var promptText =
        prompt.querySelector('div[class^="min-h-"]')?.textContent.trim() || "";
      var responseText =
        responses[index]
          ?.querySelector('div[class^="min-h-"]')
          ?.textContent.trim() || "";
      return `## Prompt ${index + 1}:\n ${promptText}\n## Response ${
        index + 1
      }:\n ${responseText}\n\n`;
    })
    .join("");

  if (textToCopy) {
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Text copied to clipboard!");
  } else {
    alert("No matching elements found on the page.");
  }
})();
