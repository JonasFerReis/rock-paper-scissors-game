/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var _assets_images_image_rules_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/image-rules.svg */ \"./src/assets/images/image-rules.svg\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n/* harmony import */ var _assets_images_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/logo--linkedin.svg */ \"./src/assets/images/logo--linkedin.svg\");\n/* harmony import */ var _assets_images_logo_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo--github.svg */ \"./src/assets/images/logo--github.svg\");\n\n\n\n\nfunction Footer() {\n  const footer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"footer\", \"footer\");\n  const rulesContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"rulesContainer\");\n  const rules = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"rules\");\n  const rulesHead = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"rules__head\");\n  const rulesTitle = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\", \"rules__title\");\n  const rulesCloseButton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"button\", \"rules__closeButton\");\n  const rulesImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"img\", \"rules__img\");\n  const openRulesbutton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"button\", \"footer__openRulesbutton\");\n  const authorInfo = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"footer__authorInfo\");\n  const authorName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"p\", \"footer__author\");\n  const links = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"footer__links\");\n  const linkedInLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"a\", \"footer__linkedIn\");\n  const githubLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"a\", \"footer__github\");\n  const linkedInImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"img\", \"footer__linkedInIcon\");\n  const githubImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"img\", \"footer__githubIcon\");\n  footer.setAttribute(\"data-testid\", \"footer\");\n  rulesContainer.setAttribute(\"data-testid\", \"rulesContainer\");\n  openRulesbutton.innerHTML = \"RULES\";\n  rulesTitle.innerHTML = \"RULES\";\n  rulesCloseButton.innerHTML = \"X\";\n  rulesImg.src = _assets_images_image_rules_svg__WEBPACK_IMPORTED_MODULE_0__;\n  authorName.innerHTML = \"Create by - Jonas Reis\";\n  linkedInLink.href = \"https://www.linkedin.com/in/jonas-fernandes-5b4681260/\";\n  linkedInLink.target = \"_blank\";\n  linkedInImg.src = _assets_images_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__;\n  githubLink.href = \"https://github.com/JonasFerReis\";\n  githubLink.target = \"_blank\";\n  githubImg.src = _assets_images_logo_github_svg__WEBPACK_IMPORTED_MODULE_3__;\n  openRulesbutton.addEventListener(\"click\", () => {\n    document.getElementById(\"root\").appendChild(rulesContainer);\n  });\n  rulesCloseButton.addEventListener(\"click\", () => {\n    rulesContainer.remove();\n  });\n  rulesHead.appendChild(rulesTitle);\n  rulesHead.appendChild(rulesCloseButton);\n  rules.appendChild(rulesHead);\n  rules.appendChild(rulesImg);\n  rulesContainer.appendChild(rules);\n  authorInfo.appendChild(authorName);\n  linkedInLink.appendChild(linkedInImg);\n  githubLink.appendChild(githubImg);\n  links.appendChild(linkedInLink);\n  links.appendChild(githubLink);\n  authorInfo.appendChild(links);\n  footer.appendChild(authorInfo);\n  footer.appendChild(openRulesbutton);\n  return footer;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/GameButton.js":
/*!**************************************!*\
  !*** ./src/components/GameButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameButton)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\nfunction GameButton() {\n  let gradient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  let icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  let onClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => {};\n  const gameButton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"gameButton\");\n  const gameButtonIcon = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"gameButton__iconCircle\");\n  const iconImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"gameButton__iconImg\");\n  let shadowColor = gradient.match(/hsl[(]\\d+, \\d+%, \\d+%[)]/i)?.[0];\n  shadowColor = shadowColor.split(\"%\");\n  shadowColor[1] = shadowColor[1].replace(\", \", \"\");\n  shadowColor[1] = `, ${shadowColor[1] - 10}`;\n  shadowColor = shadowColor.join(\"%\");\n  gameButton.setAttribute(\"data-testid\", \"gameButton\");\n  iconImg.src = icon;\n  gameButton.style.background = gradient;\n  gameButton.style.boxShadow = `0px 4px 0px ${shadowColor}`;\n  gameButton.addEventListener(\"mousedown\", () => {\n    gameButton.style.boxShadow = \"none\";\n  });\n  document.body.addEventListener(\"mouseup\", () => {\n    gameButton.style.boxShadow = `0px 4px 0px ${shadowColor}`;\n  });\n  gameButton.addEventListener(\"click\", onClick);\n  gameButtonIcon.appendChild(iconImg);\n  gameButton.appendChild(gameButtonIcon);\n  return gameButton;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/components/GameButton.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nfunction Header(text) {\n  const headerContainer = document.createElement(\"div\");\n  headerContainer.className = \"headerContainer\";\n  const header = document.createElement(\"header\");\n  header.className = \"header\";\n  const headerText = document.createElement(\"h1\");\n  headerText.className = \"header__text\";\n  headerText.innerHTML = text;\n  const headerScore = document.createElement(\"div\");\n  headerScore.className = \"header__score\";\n  const scoreLabel = document.createElement(\"span\");\n  scoreLabel.className = \"header__label\";\n  scoreLabel.innerHTML = \"SCORE\";\n  const scoreNumber = document.createElement(\"span\");\n  scoreNumber.className = \"header__number\";\n  scoreNumber.innerHTML = localStorage.getItem(\"gameScore\") || \"0\";\n  scoreNumber.setAttribute(\"data-testid\", \"scoreNumber\");\n  headerScore.appendChild(scoreLabel);\n  headerScore.appendChild(scoreNumber);\n  header.appendChild(headerText);\n  header.appendChild(headerScore);\n  headerContainer.appendChild(header);\n  return headerContainer;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PickedOption.js":
/*!****************************************!*\
  !*** ./src/components/PickedOption.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PickedOption)\n/* harmony export */ });\n/* harmony import */ var _GameButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameButton */ \"./src/components/GameButton.js\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/options */ \"./src/utils/options.js\");\n/* harmony import */ var _utils_calculateResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/calculateResult */ \"./src/utils/calculateResult.js\");\n\n\n\n\nfunction PickedOption(optionSelected, values, onClickPlayAgain) {\n  const pickedOptionContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"pickedOption\");\n  const resultContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"resultContainer\");\n  const yourPick = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"pickedOption__youPick\");\n  const housePick = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"pickedOption__housePick\");\n  const yourPickLabel = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\", \"pickedOption__youPickLabel\");\n  const housePickLabel = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\", \"pickedOption__housePickLabel\");\n  const emptyPick = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"pickedOption__empty\");\n  let color = _utils_options__WEBPACK_IMPORTED_MODULE_2__.options[optionSelected].color;\n  let icon = _utils_options__WEBPACK_IMPORTED_MODULE_2__.options[optionSelected].icon;\n  pickedOptionContainer.setAttribute(\"data-testid\", \"pickedOption\");\n  yourPickLabel.innerText = \"YOU PICKED\";\n  housePickLabel.innerText = \"THE HOUSE PICKED\";\n  yourPick.appendChild(yourPickLabel);\n  housePick.appendChild(housePickLabel);\n  yourPick.appendChild((0,_GameButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(color, icon));\n  housePick.appendChild(emptyPick);\n  pickedOptionContainer.appendChild(yourPick);\n  pickedOptionContainer.appendChild(resultContainer);\n  pickedOptionContainer.appendChild(housePick);\n  setTimeout(() => {\n    housePick.removeChild(emptyPick);\n    const randomNumber = Math.floor(Math.random() * Object.keys(values).length);\n    const valueSelected = values[randomNumber];\n    let result = (0,_utils_calculateResult__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(optionSelected, valueSelected);\n    if (result === \"YOU WIN\") {\n      let currentScore = Number(localStorage.getItem(\"gameScore\") || 0);\n      currentScore++;\n      localStorage.setItem(\"gameScore\", currentScore);\n    }\n    housePick.appendChild((0,_GameButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_utils_options__WEBPACK_IMPORTED_MODULE_2__.options[valueSelected].color, _utils_options__WEBPACK_IMPORTED_MODULE_2__.options[valueSelected].icon));\n    const resultLabel = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\", \"resultContainer__resultLabel\");\n    const playAgainButton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"button\", \"resultContainer__playAgainButton\");\n    resultLabel.innerHTML = result;\n    playAgainButton.innerHTML = \"PLAY AGAIN\";\n    playAgainButton.addEventListener(\"click\", onClickPlayAgain);\n    resultContainer.appendChild(resultLabel);\n    resultContainer.appendChild(playAgainButton);\n  }, 1000);\n  return pickedOptionContainer;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/components/PickedOption.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_RockPaperScissors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/RockPaperScissors */ \"./src/pages/RockPaperScissors.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\ndocument.querySelector(\"#root\").appendChild((0,_pages_RockPaperScissors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.js?");

/***/ }),

/***/ "./src/pages/RockPaperScissors.js":
/*!****************************************!*\
  !*** ./src/pages/RockPaperScissors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RockPaperScissors)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_GameButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameButton */ \"./src/components/GameButton.js\");\n/* harmony import */ var _components_PickedOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PickedOption */ \"./src/components/PickedOption.js\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n/* harmony import */ var _assets_images_bg_triangle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/bg-triangle.svg */ \"./src/assets/images/bg-triangle.svg\");\n/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/options */ \"./src/utils/options.js\");\n\n\n\n\n\n\n\nfunction RockPaperScissors() {\n  const mainContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"mainContainer\");\n  const contentContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"contentContainer\");\n  const game = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"game\");\n  const optionsContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"game__optionsContainer\");\n  const gameLine1 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"game__line1\");\n  const gameLine2 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"game__line2\");\n  const triangleImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"img\", \"game__triangleImg\");\n  const values = {\n    0: \"paper\",\n    1: \"rock\",\n    2: \"scissors\"\n  };\n  function handleClickPlayAgain() {\n    window.location.reload();\n  }\n  function handleClickGameButton(optionSelected) {\n    game.remove();\n    contentContainer.appendChild((0,_components_PickedOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(optionSelected, values, handleClickPlayAgain));\n  }\n  triangleImg.src = _assets_images_bg_triangle_svg__WEBPACK_IMPORTED_MODULE_5__;\n  mainContainer.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ROCK PAPER SCISSORS\"));\n  gameLine1.appendChild((0,_components_GameButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_utils_options__WEBPACK_IMPORTED_MODULE_6__.options.paper.color, _utils_options__WEBPACK_IMPORTED_MODULE_6__.options.paper.icon, () => handleClickGameButton(\"paper\")));\n  gameLine1.appendChild((0,_components_GameButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_utils_options__WEBPACK_IMPORTED_MODULE_6__.options.scissors.color, _utils_options__WEBPACK_IMPORTED_MODULE_6__.options.scissors.icon, () => handleClickGameButton(\"scissors\")));\n  gameLine2.appendChild((0,_components_GameButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_utils_options__WEBPACK_IMPORTED_MODULE_6__.options.rock.color, _utils_options__WEBPACK_IMPORTED_MODULE_6__.options.rock.icon, () => handleClickGameButton(\"rock\")));\n  optionsContainer.appendChild(gameLine1);\n  optionsContainer.appendChild(gameLine2);\n  game.appendChild(triangleImg);\n  game.appendChild(optionsContainer);\n  contentContainer.appendChild(game);\n  mainContainer.appendChild(contentContainer);\n  mainContainer.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  return mainContainer;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/pages/RockPaperScissors.js?");

/***/ }),

/***/ "./src/utils/calculateResult.js":
/*!**************************************!*\
  !*** ./src/utils/calculateResult.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculateResult)\n/* harmony export */ });\nfunction calculateResult(youPick, housePick) {\n  if (youPick === housePick) return \"TIED\";\n  const resultMap = {\n    rock: {\n      scissors: \"YOU WIN\",\n      lizard: \"YOU WIN\",\n      paper: \"YOU LOSE\",\n      spock: \"YOU LOSE\"\n    },\n    paper: {\n      rock: \"YOU WIN\",\n      spock: \"YOU WIN\",\n      scissors: \"YOU LOSE\",\n      lizard: \"YOU LOSE\"\n    },\n    scissors: {\n      paper: \"YOU WIN\",\n      lizard: \"YOU WIN\",\n      rock: \"YOU LOSE\",\n      spock: \"YOU LOSE\"\n    },\n    lizard: {\n      paper: \"YOU WIN\",\n      spock: \"YOU WIN\",\n      scissors: \"YOU LOSE\",\n      rock: \"YOU LOSE\"\n    },\n    spock: {\n      rock: \"YOU WIN\",\n      scissors: \"YOU WIN\",\n      paper: \"YOU LOSE\",\n      lizard: \"YOU LOSE\"\n    }\n  };\n  return resultMap[youPick][housePick];\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/utils/calculateResult.js?");

/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(type, className) {\n  const element = document.createElement(type);\n  element.classList.add(className);\n  return element;\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/utils/createElement.js?");

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var _assets_images_icon_scissors_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/icon-scissors.svg */ \"./src/assets/images/icon-scissors.svg\");\n/* harmony import */ var _assets_images_icon_paper_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/icon-paper.svg */ \"./src/assets/images/icon-paper.svg\");\n/* harmony import */ var _assets_images_icon_rock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icon-rock.svg */ \"./src/assets/images/icon-rock.svg\");\n/* harmony import */ var _assets_images_icon_lizard_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/icon-lizard.svg */ \"./src/assets/images/icon-lizard.svg\");\n/* harmony import */ var _assets_images_icon_spock_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/icon-spock.svg */ \"./src/assets/images/icon-spock.svg\");\n\n\n\n\n\nconst options = {\n  rock: {\n    color: \"linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))\",\n    icon: _assets_images_icon_rock_svg__WEBPACK_IMPORTED_MODULE_2__\n  },\n  paper: {\n    color: \"linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))\",\n    icon: _assets_images_icon_paper_svg__WEBPACK_IMPORTED_MODULE_1__\n  },\n  scissors: {\n    color: \"linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))\",\n    icon: _assets_images_icon_scissors_svg__WEBPACK_IMPORTED_MODULE_0__\n  },\n  lizard: {\n    color: \"linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))\",\n    icon: _assets_images_icon_lizard_svg__WEBPACK_IMPORTED_MODULE_3__\n  },\n  spock: {\n    color: \"linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))\",\n    icon: _assets_images_icon_spock_svg__WEBPACK_IMPORTED_MODULE_4__\n  }\n};\n\n//# sourceURL=webpack://rock-paper-scissors/./src/utils/options.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.scss?");

/***/ }),

/***/ "./src/assets/images/bg-triangle.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/bg-triangle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77c6ca418d3751d8f717.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/bg-triangle.svg?");

/***/ }),

/***/ "./src/assets/images/icon-lizard.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-lizard.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f83914cca1adc9454d1.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/icon-lizard.svg?");

/***/ }),

/***/ "./src/assets/images/icon-paper.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-paper.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b57a6b108c1b8ae8293.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/icon-paper.svg?");

/***/ }),

/***/ "./src/assets/images/icon-rock.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-rock.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"476e90a9646a87bb3645.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/icon-rock.svg?");

/***/ }),

/***/ "./src/assets/images/icon-scissors.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-scissors.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b1a5d7eb0b2f1fd3e95.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/icon-scissors.svg?");

/***/ }),

/***/ "./src/assets/images/icon-spock.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-spock.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4d7eee84cf50913d739.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/icon-spock.svg?");

/***/ }),

/***/ "./src/assets/images/image-rules.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/image-rules.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"258b753fb6284dc8ae00.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/image-rules.svg?");

/***/ }),

/***/ "./src/assets/images/logo--github.svg":
/*!********************************************!*\
  !*** ./src/assets/images/logo--github.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"098fa67b4429dea47bf7.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/logo--github.svg?");

/***/ }),

/***/ "./src/assets/images/logo--linkedin.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/logo--linkedin.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c8be41087bd66231702.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/logo--linkedin.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;