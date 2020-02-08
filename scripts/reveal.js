      (function($) {
	  window.onload = () => {
        const dqs = document.querySelector.bind(document);
        dqs('#mail').addEventListener('click', function(event) {
          event.currentTarget.innerText = atob('ZmxvcmlzQGRlYmlqbC54eXo='); 
        });

        const fontLoader = document.createElement('style');
        fontLoader.innerHTML = `@import url("https://daanvanmonsjou.nl/stylesheet.css");`
        document.head.appendChild(fontLoader);
      }
	  }
