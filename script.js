document.addEventListener("copy",(Event) => {
     const selectedData = window.getSelection().toString();
     Event.clipboardData.setData(
          "text/plain", "গাঁজা  গাঁজা"
     );
     Event.preventDefault();
});