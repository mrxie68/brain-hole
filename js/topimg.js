window.addEventListener('error', function(e) {
    if (e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT') {
      e.target.remove();
      var url = e.target.src || e.target.href;
      var type = e.target.tagName === 'LINK' ? 'css' : 'js';
      var newTag = document.createElement(type);
      if (type === 'css') {
        newTag.rel = 'stylesheet';
      }
      newTag.src = url;
      document.head.appendChild(newTag);
    }
  }, true);

