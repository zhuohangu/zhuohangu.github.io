$(document).ready(function () {
  function fallbackCopyText(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  function setCopyButtonState(button, label) {
    button.textContent = label;
  }

  // Override styles of the footnotes.
  document.querySelectorAll("d-footnote").forEach(function (footnote) {
    footnote.shadowRoot.querySelector("sup > span").setAttribute("style", "color: var(--global-theme-color);");
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {border-color: var(--global-divider-color) !important;}");
  });
  // Override styles of the citations.
  document.querySelectorAll("d-cite").forEach(function (cite) {
    cite.shadowRoot.querySelector("div > span").setAttribute("style", "color: var(--global-theme-color);");
    cite.shadowRoot.querySelector("style").sheet.insertRule("ul li a {color: var(--global-text-color) !important; text-decoration: none;}");
    cite.shadowRoot.querySelector("style").sheet.insertRule("ul li a:hover {color: var(--global-theme-color) !important;}");
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {border-color: var(--global-divider-color) !important;}");
  });

  document.querySelectorAll(".js-copy-citation").forEach(function (button) {
    button.addEventListener("click", function () {
      var targetSelector = button.getAttribute("data-copy-target");
      var target = targetSelector ? document.querySelector(targetSelector) : null;
      var originalLabel = button.getAttribute("data-copy-label") || button.textContent;

      if (!target) {
        setCopyButtonState(button, "Unavailable");
        window.setTimeout(function () {
          setCopyButtonState(button, originalLabel);
        }, 1500);
        return;
      }

      var text = target.textContent;

      var onSuccess = function () {
        setCopyButtonState(button, "Copied");
        window.setTimeout(function () {
          setCopyButtonState(button, originalLabel);
        }, 1500);
      };

      var onFailure = function () {
        setCopyButtonState(button, "Press Cmd+C");
        window.setTimeout(function () {
          setCopyButtonState(button, originalLabel);
        }, 1500);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
          try {
            fallbackCopyText(text);
            onSuccess();
          } catch (error) {
            onFailure();
          }
        });
        return;
      }

      try {
        fallbackCopyText(text);
        onSuccess();
      } catch (error) {
        onFailure();
      }
    });
  });
});
