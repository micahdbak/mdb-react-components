"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = Email;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Email icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
function Email(props) {
  const {
    className,
    style
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    style: style
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "4",
    y: "8",
    width: "24",
    height: "16"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "4,8 16,20 28,8 "
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "4",
    y2: "24"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "16",
    x2: "28",
    y2: "24"
  }));
}