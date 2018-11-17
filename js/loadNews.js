"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function loadNews() {
  return _loadNews.apply(this, arguments);
}

function _loadNews() {
  _loadNews = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var url, source, response, _ref, articles;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cleanElement(NEWS_LIST);
            url = TOP_NEWS_TOGGLE_BUTTON.checked ? TOP_NEWS_URL : NEWS_URL;
            source = SOURCE_SELECTOR.value;
            _context.next = 5;
            return fetch("".concat(url, "&sources=").concat(source));

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            _ref = _context.sent;
            articles = _ref.articles;
            articles.map(renderArticleElement);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadNews.apply(this, arguments);
}