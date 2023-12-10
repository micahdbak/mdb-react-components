"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../../helpers");
require("./Container.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A grid container.
 * @param {object} props
 * @param {string} props.columns
 * - Template for grid columns. White-space separated values, with optional
 *   names.
 * @param {string} props.rows
 * - Template for grid rows. White-space separated values, with optional names.
 * @param {array} props.areas
 * - Template for grid areas. Array of strings for each row. Each string should
 *   be white-space separated names for areas, '.' for empty cells, and 'none'
 *   for default settings.
 * @param {string} props.rowGap - Vertical gap between items
 * @param {string} props.columnGap - Horizontal gap between items
 * @param {string} props.gap - Shorthand for row and column; '2px 4px'
 * @param {string} props.justifyItems
 * @param {string} props.alignItems
 * @param {string} props.justifyContent
 * @param {string} props.alignContent
 * - See https://css-tricks.com/snippets/css/complete-guide-grid/
 * @param {string} props.flex - Flex item grow, shrink, and basis shorthand
 * @param {string} props.area - Grid area name
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {array} props.children - Child elements of Container
 */
function Container(props) {
  const {
    columns,
    rows,
    areas,
    rowGap,
    columnGap,
    gap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    flex,
    area,
    style,
    className,
    children
  } = props;
  let areasString = '';

  // compute areas string
  areas.forEach((area, index) => {
    areasString += `"${area}"${index < areas.length - 1 ? ' ' : ''}`;
  });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gridTemplateAreas: areasString,
    rowGap,
    columnGap,
    gap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    flex,
    gridArea: area,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: gridStyle,
    className: (0, _helpers.classList)(['mdb-grid-container', className])
  }, children);
}