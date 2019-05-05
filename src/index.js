const initialize = (from, to) => {
  ((open) => {
    XMLHttpRequest.prototype.open = function xhrIntercept(method, url, async, user, password) {
      if (url.indexOf(from) >= 0) {
        url = url.replace(from, to);
      }

      open.call(this, method, url, async, user, password);
    };
  })(XMLHttpRequest.prototype.open);
};

export default initialize;
