/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/counterClass.ts":
/*!*************************************!*\
  !*** ./src/classes/counterClass.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Counter: () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\n    constructor(container, user, index) {\n        this.container = container;\n        this.user = user;\n        this.index = index;\n    }\n    render() {\n        this.container.innerHTML += `\r\n      <div>\r\n        <span>${this.user.name}</span>\r\n\r\n        <button onclick=\"users[${this.index}].handleMinusClick(${this.index})\">-</button>\r\n\r\n        <span id=\"id_${this.index}\">${localStorage.getItem(this.user.name)}</span>\r\n\r\n        <button onclick=\"users[${this.index}].handlePlusClick(${this.index})\">+</button>\r\n      </div>\r\n    `;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9jb3VudGVyQ2xhc3MudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sT0FBTztJQUNsQixZQUNVLFNBQXlCLEVBQ3pCLElBQWEsRUFDYixLQUFhO1FBRmIsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDcEIsQ0FBQztJQUVKLE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSTs7Z0JBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7aUNBRUcsSUFBSSxDQUFDLEtBQUssc0JBQ3JDLElBQUksQ0FBQyxLQUNQOzt1QkFFbUIsSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsT0FBTyxDQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FDaEI7O2lDQUU0QixJQUFJLENBQUMsS0FBSyxxQkFDckMsSUFBSSxDQUFDLEtBQ1A7O0tBRUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZm9yLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9jb3VudGVyQ2xhc3MudHM/ODk4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VySW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICAgIHByaXZhdGUgdXNlcjogSGFzVXNlcixcclxuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlcixcclxuICApIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+JHt0aGlzLnVzZXIubmFtZX08L3NwYW4+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25jbGljaz1cInVzZXJzWyR7dGhpcy5pbmRleH1dLmhhbmRsZU1pbnVzQ2xpY2soJHtcclxuICAgICAgdGhpcy5pbmRleFxyXG4gICAgfSlcIj4tPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxzcGFuIGlkPVwiaWRfJHt0aGlzLmluZGV4fVwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgIHRoaXMudXNlci5uYW1lISxcclxuICAgICl9PC9zcGFuPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJ1c2Vyc1ske3RoaXMuaW5kZXh9XS5oYW5kbGVQbHVzQ2xpY2soJHtcclxuICAgICAgdGhpcy5pbmRleFxyXG4gICAgfSlcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/classes/counterClass.ts\n");

/***/ }),

/***/ "./src/classes/userClass.ts":
/*!**********************************!*\
  !*** ./src/classes/userClass.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _states_userState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/userState */ \"./src/states/userState.ts\");\n/* harmony import */ var _data_reply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/reply */ \"./src/data/reply.ts\");\n\n\nlet total = (0,_states_userState__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nclass User {\n    constructor(name) {\n        this.name = name;\n        const getCount = Number(localStorage.getItem(this.name));\n        this.count = getCount;\n    }\n    handlePlusClick(id) {\n        this.count++;\n        total += 7;\n        this.calTotal(id);\n        this.copyReply();\n    }\n    handleMinusClick(id) {\n        this.count--;\n        total -= 7;\n        this.calTotal(id);\n        this.copyReply();\n    }\n    calTotal(id) {\n        // Update individual count\n        const countContent = document.querySelector(`#id_${id}`);\n        countContent.textContent = this.count.toString();\n        localStorage.setItem(this.name, countContent.textContent);\n        // Update total amount\n        const totalContainer = document.querySelector('#totalContainer');\n        totalContainer.textContent = `Total: HK$${total.toString()}`;\n        localStorage.setItem('total', total.toString());\n    }\n    reset(users) {\n        // Reset all counts\n        users.forEach((user, index) => {\n            const countContent = document.querySelector(`#id_${index}`);\n            countContent.textContent = '0';\n            localStorage.setItem(user.name, '0');\n            user.count = 0;\n        });\n        // Reset total\n        const totalContainer = document.querySelector('#totalContainer');\n        totalContainer.textContent = 'Total: HK$0';\n        localStorage.setItem('total', '0');\n        total = 0;\n    }\n    copyReply() {\n        const replies = (0,_data_reply__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const copyContent = this.name + replies[this.count];\n        navigator.clipboard.writeText(copyContent);\n        console.log('copied: ' + copyContent);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1mb3ItdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL3VzZXJDbGFzcy50cz8zMDY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc1VzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXJJbnRlcmZhY2UnO1xyXG5pbXBvcnQgdXNlclN0YXRlIGZyb20gJy4uL3N0YXRlcy91c2VyU3RhdGUnO1xyXG5pbXBvcnQgcmVwbHkgZnJvbSAnLi4vZGF0YS9yZXBseSc7XHJcblxyXG5sZXQgdG90YWw6IG51bWJlciA9IHVzZXJTdGF0ZSgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgaW1wbGVtZW50cyBIYXNVc2VyIHtcclxuICBwdWJsaWMgY291bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGdldENvdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSEpKTtcclxuICAgIHRoaXMuY291bnQgPSBnZXRDb3VudDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsdXNDbGljayhpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB0b3RhbCArPSA3O1xyXG4gICAgdGhpcy5jYWxUb3RhbChpZCk7XHJcbiAgICB0aGlzLmNvcHlSZXBseSgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTWludXNDbGljayhpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvdW50LS07XHJcbiAgICB0b3RhbCAtPSA3O1xyXG4gICAgdGhpcy5jYWxUb3RhbChpZCk7XHJcbiAgICB0aGlzLmNvcHlSZXBseSgpO1xyXG4gIH1cclxuXHJcbiAgY2FsVG90YWwoaWQ6IG51bWJlcikge1xyXG4gICAgLy8gVXBkYXRlIGluZGl2aWR1YWwgY291bnRcclxuICAgIGNvbnN0IGNvdW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpZF8ke2lkfWApITtcclxuICAgIGNvdW50Q29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuY291bnQudG9TdHJpbmcoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSEsIGNvdW50Q29udGVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRvdGFsIGFtb3VudFxyXG4gICAgY29uc3QgdG90YWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxDb250YWluZXInKSE7XHJcbiAgICB0b3RhbENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUb3RhbDogSEskJHt0b3RhbC50b1N0cmluZygpfWA7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLCB0b3RhbC50b1N0cmluZygpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHVzZXJzOiBIYXNVc2VyW10pIHtcclxuICAgIC8vIFJlc2V0IGFsbCBjb3VudHNcclxuICAgIHVzZXJzLmZvckVhY2goKHVzZXI6IEhhc1VzZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgY291bnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2lkXyR7aW5kZXh9YCkhO1xyXG4gICAgICBjb3VudENvbnRlbnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXIubmFtZSEsICcwJyk7XHJcbiAgICAgIHVzZXIuY291bnQgPSAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVzZXQgdG90YWxcclxuICAgIGNvbnN0IHRvdGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsQ29udGFpbmVyJykhO1xyXG4gICAgdG90YWxDb250YWluZXIudGV4dENvbnRlbnQgPSAnVG90YWw6IEhLJDAnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsJywgJzAnKTtcclxuICAgIHRvdGFsID0gMDtcclxuICB9XHJcblxyXG4gIGNvcHlSZXBseSgpIHtcclxuICAgIGNvbnN0IHJlcGxpZXM6IGFueSA9IHJlcGx5KCk7XHJcbiAgICBjb25zdCBjb3B5Q29udGVudCA9IHRoaXMubmFtZSArIHJlcGxpZXNbdGhpcy5jb3VudF07XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5Q29udGVudCk7XHJcbiAgICBjb25zb2xlLmxvZygnY29waWVkOiAnICsgY29weUNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/userClass.ts\n");

/***/ }),

/***/ "./src/data/reply.ts":
/*!***************************!*\
  !*** ./src/data/reply.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reply)\n/* harmony export */ });\nfunction reply() {\n    const replies = {\n        1: ', thanks <3',\n        2: ', thanks <3',\n        3: ', thanks <3',\n        4: ', love <3',\n        5: ', love love <3',\n        6: ', kiss <3',\n        7: ', kiss kiss <3',\n        8: ', love and kiss <3',\n        9: ', love love and kiss <3',\n        10: ', love love and kiss kiss <3',\n        11: ', love kiss and hug you <3',\n        12: ', love love you <3',\n        13: ', kiss kiss you <3',\n        14: ', hug hug you <3',\n        15: ', forever love you <3',\n        16: ', forever kiss you <3',\n        17: ', forever hug you <3',\n        18: ', forever in my heart <3',\n        19: ', you are forever in my heart <3',\n        20: ', with you <3',\n        21: ', with you forever <3',\n        22: ', issho <3',\n        23: ', issho forever <3',\n        24: ', by your side <3',\n        25: ', by your side forever <3',\n        26: ', one in a million <3',\n        27: ', you are my one in a million <3',\n        28: ', i hear you <3',\n        29: ', i hear you forever <3',\n    };\n    return replies;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9yZXBseS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBUyxLQUFLO0lBQzNCLE1BQU0sT0FBTyxHQUFHO1FBQ2QsQ0FBQyxFQUFFLGFBQWE7UUFDaEIsQ0FBQyxFQUFFLGFBQWE7UUFDaEIsQ0FBQyxFQUFFLGFBQWE7UUFDaEIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLENBQUMsRUFBRSxXQUFXO1FBQ2QsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixDQUFDLEVBQUUsb0JBQW9CO1FBQ3ZCLENBQUMsRUFBRSx5QkFBeUI7UUFDNUIsRUFBRSxFQUFFLDhCQUE4QjtRQUNsQyxFQUFFLEVBQUUsNEJBQTRCO1FBQ2hDLEVBQUUsRUFBRSxvQkFBb0I7UUFDeEIsRUFBRSxFQUFFLG9CQUFvQjtRQUN4QixFQUFFLEVBQUUsa0JBQWtCO1FBQ3RCLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLEVBQUUsRUFBRSwwQkFBMEI7UUFDOUIsRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEVBQUUsRUFBRSxvQkFBb0I7UUFDeEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixFQUFFLEVBQUUsMkJBQTJCO1FBQy9CLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRSx5QkFBeUI7S0FDOUIsQ0FBQztJQUVGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWZvci10eXBlc2NyaXB0Ly4vc3JjL2RhdGEvcmVwbHkudHM/MWVlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXBseSgpIHtcclxuICBjb25zdCByZXBsaWVzID0ge1xyXG4gICAgMTogJywgdGhhbmtzIDwzJyxcclxuICAgIDI6ICcsIHRoYW5rcyA8MycsXHJcbiAgICAzOiAnLCB0aGFua3MgPDMnLFxyXG4gICAgNDogJywgbG92ZSA8MycsXHJcbiAgICA1OiAnLCBsb3ZlIGxvdmUgPDMnLFxyXG4gICAgNjogJywga2lzcyA8MycsXHJcbiAgICA3OiAnLCBraXNzIGtpc3MgPDMnLFxyXG4gICAgODogJywgbG92ZSBhbmQga2lzcyA8MycsXHJcbiAgICA5OiAnLCBsb3ZlIGxvdmUgYW5kIGtpc3MgPDMnLFxyXG4gICAgMTA6ICcsIGxvdmUgbG92ZSBhbmQga2lzcyBraXNzIDwzJyxcclxuICAgIDExOiAnLCBsb3ZlIGtpc3MgYW5kIGh1ZyB5b3UgPDMnLFxyXG4gICAgMTI6ICcsIGxvdmUgbG92ZSB5b3UgPDMnLFxyXG4gICAgMTM6ICcsIGtpc3Mga2lzcyB5b3UgPDMnLFxyXG4gICAgMTQ6ICcsIGh1ZyBodWcgeW91IDwzJyxcclxuICAgIDE1OiAnLCBmb3JldmVyIGxvdmUgeW91IDwzJyxcclxuICAgIDE2OiAnLCBmb3JldmVyIGtpc3MgeW91IDwzJyxcclxuICAgIDE3OiAnLCBmb3JldmVyIGh1ZyB5b3UgPDMnLFxyXG4gICAgMTg6ICcsIGZvcmV2ZXIgaW4gbXkgaGVhcnQgPDMnLFxyXG4gICAgMTk6ICcsIHlvdSBhcmUgZm9yZXZlciBpbiBteSBoZWFydCA8MycsXHJcbiAgICAyMDogJywgd2l0aCB5b3UgPDMnLFxyXG4gICAgMjE6ICcsIHdpdGggeW91IGZvcmV2ZXIgPDMnLFxyXG4gICAgMjI6ICcsIGlzc2hvIDwzJyxcclxuICAgIDIzOiAnLCBpc3NobyBmb3JldmVyIDwzJyxcclxuICAgIDI0OiAnLCBieSB5b3VyIHNpZGUgPDMnLFxyXG4gICAgMjU6ICcsIGJ5IHlvdXIgc2lkZSBmb3JldmVyIDwzJyxcclxuICAgIDI2OiAnLCBvbmUgaW4gYSBtaWxsaW9uIDwzJyxcclxuICAgIDI3OiAnLCB5b3UgYXJlIG15IG9uZSBpbiBhIG1pbGxpb24gPDMnLFxyXG4gICAgMjg6ICcsIGkgaGVhciB5b3UgPDMnLFxyXG4gICAgMjk6ICcsIGkgaGVhciB5b3UgZm9yZXZlciA8MycsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlcGxpZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/reply.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_userClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/userClass */ \"./src/classes/userClass.ts\");\n/* harmony import */ var _classes_counterClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/counterClass */ \"./src/classes/counterClass.ts\");\n\n\n// User object\nconst users = [];\nwindow.users = users;\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('fumi'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('hayashi'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('chika'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('minako'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('jyunko'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('fumiko'));\nusers.push(new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User('kyoko'));\n// HTML DOM\nusers.forEach((user, index) => {\n    const container = document.querySelector('#container');\n    const counter = new _classes_counterClass__WEBPACK_IMPORTED_MODULE_1__.Counter(container, user, index);\n    counter.render();\n});\n// Reset all\nconst reset = document.querySelector('#reset');\nreset.addEventListener('click', () => {\n    const user = new _classes_userClass__WEBPACK_IMPORTED_MODULE_0__.User();\n    user.reset(users);\n});\nconst messages = [\n    { content: 'yes, great song <3' },\n    { content: 'I love you forever too <3' },\n];\nmessages.forEach((message, index) => {\n    const messageContainer = document.querySelector('#messageContainer');\n    messageContainer.innerHTML += `\r\n    <div>\r\n      <span id=\"messageContent_${index}\">${message.content}</span>\r\n      <button class=\"message-class\" id=\"messageBtn_${index}\">Copy</button>\r\n    </div>\r\n  `;\n});\nconst messageBtn = document.querySelectorAll('.message-class');\nmessageBtn.forEach((btn) => {\n    const individualMessageBtn = document.querySelector(`#${btn.id}`);\n    individualMessageBtn.addEventListener('click', () => {\n        const messageContent = document.querySelector(`#messageContent_${btn.id.slice(-1)}`);\n        // console.log(messageContent.textContent);\n        navigator.clipboard.readText().then((text) => {\n            console.log(text + ' ' + messageContent.textContent);\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWZvci10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vY2xhc3Nlcy91c2VyQ2xhc3MnO1xyXG5pbXBvcnQgeyBIYXNVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3VzZXJJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi9jbGFzc2VzL2NvdW50ZXJDbGFzcyc7XHJcblxyXG4vLyBVc2VyIG9iamVjdFxyXG5jb25zdCB1c2VyczogSGFzVXNlcltdID0gW107XHJcbih3aW5kb3cgYXMgYW55KS51c2VycyA9IHVzZXJzO1xyXG51c2Vycy5wdXNoKG5ldyBVc2VyKCdmdW1pJykpO1xyXG51c2Vycy5wdXNoKG5ldyBVc2VyKCdoYXlhc2hpJykpO1xyXG51c2Vycy5wdXNoKG5ldyBVc2VyKCdjaGlrYScpKTtcclxudXNlcnMucHVzaChuZXcgVXNlcignbWluYWtvJykpO1xyXG51c2Vycy5wdXNoKG5ldyBVc2VyKCdqeXVua28nKSk7XHJcbnVzZXJzLnB1c2gobmV3IFVzZXIoJ2Z1bWlrbycpKTtcclxudXNlcnMucHVzaChuZXcgVXNlcigna3lva28nKSk7XHJcblxyXG4vLyBIVE1MIERPTVxyXG51c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjb3VudGVyID0gbmV3IENvdW50ZXIoY29udGFpbmVyLCB1c2VyLCBpbmRleCk7XHJcbiAgY291bnRlci5yZW5kZXIoKTtcclxufSk7XHJcblxyXG4vLyBSZXNldCBhbGxcclxuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgdXNlci5yZXNldCh1c2Vycyk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSBbXHJcbiAgeyBjb250ZW50OiAneWVzLCBncmVhdCBzb25nIDwzJyB9LFxyXG4gIHsgY29udGVudDogJ0kgbG92ZSB5b3UgZm9yZXZlciB0b28gPDMnIH0sXHJcbl07XHJcblxyXG5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZUNvbnRhaW5lcicpITtcclxuICBtZXNzYWdlQ29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3BhbiBpZD1cIm1lc3NhZ2VDb250ZW50XyR7aW5kZXh9XCI+JHttZXNzYWdlLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibWVzc2FnZS1jbGFzc1wiIGlkPVwibWVzc2FnZUJ0bl8ke2luZGV4fVwiPkNvcHk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn0pO1xyXG5cclxuY29uc3QgbWVzc2FnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXNzYWdlLWNsYXNzJyk7XHJcbm1lc3NhZ2VCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgY29uc3QgaW5kaXZpZHVhbE1lc3NhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidG4uaWR9YCkhO1xyXG4gIGluZGl2aWR1YWxNZXNzYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI21lc3NhZ2VDb250ZW50XyR7YnRuLmlkLnNsaWNlKC0xKX1gLFxyXG4gICAgKSE7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlQ29udGVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4oKHRleHQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGV4dCArICcgJyArIG1lc3NhZ2VDb250ZW50LnRleHRDb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/states/userState.ts":
/*!*********************************!*\
  !*** ./src/states/userState.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userState)\n/* harmony export */ });\nfunction userState() {\n    let total = Number(localStorage.getItem('total'));\n    const totalContainer = document.querySelector('#totalContainer');\n    totalContainer.textContent = `Total: HK$${localStorage.getItem('total')}`;\n    return total;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGVzL3VzZXJTdGF0ZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBUyxTQUFTO0lBQy9CLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFMUQsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDO0lBQ2xFLGNBQWMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFFMUUsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1mb3ItdHlwZXNjcmlwdC8uL3NyYy9zdGF0ZXMvdXNlclN0YXRlLnRzPzUyNjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlclN0YXRlKCkge1xyXG4gIGxldCB0b3RhbDogbnVtYmVyID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b3RhbCcpKTtcclxuXHJcbiAgY29uc3QgdG90YWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxDb250YWluZXInKSE7XHJcbiAgdG90YWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgVG90YWw6IEhLJCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsJyl9YDtcclxuXHJcbiAgcmV0dXJuIHRvdGFsO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/states/userState.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;