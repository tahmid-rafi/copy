document.addEventListener("copy",(Event) => {
     const selectedData = window.getSelection().toString();
     Event.clipboardData.setData(
          "text/plain", "I Love You, 'Jan'💖"
     );
     Event.preventDefault();
});