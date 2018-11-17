"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function loadSources() {
  return _loadSources.apply(this, arguments);
}

function _loadSources() {
  _loadSources = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, _ref, sources;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(SOURCES_URL);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            _ref = _context.sent;
            sources = _ref.sources;
            sources.map(renderSourceElement);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadSources.apply(this, arguments);
}