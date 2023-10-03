import React from 'react';
import { convertIntegerInArray } from '../../utils/format/format';
export default function Buttons({
  currentPage,
  pages,
  length,
  setCurrentPage
}) {
  return /*#__PURE__*/React.createElement("div", null, length > 1 && currentPage > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentPage(currentPage - 1),
    "aria-label": "previous page",
    "aria-controls": "table",
    tabIndex: "0",
    "data-testid": "previous-button",
    className: "previous-next-button"
  }, "Previous"), pages > 1 && convertIntegerInArray(pages).map((integer, index) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentPage(integer),
    "data-testid": "page-button",
    className: currentPage === index + 1 ? 'active-page' : '',
    key: `${integer}-${index}`,
    "aria-controls": "table",
    tabIndex: "0",
    "aria-current": currentPage === index + 1 && 'page'
  }, integer)), currentPage < pages && /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentPage(currentPage + 1),
    "aria-label": "next page",
    "aria-controls": "table",
    tabIndex: "0",
    "data-testid": "next-button",
    className: "previous-next-button"
  }, "Next"));
}