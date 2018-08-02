/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {

    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small');
    } else {
        $('body').removeClass('body-small');
    }

    // MetsiMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarHeight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarHeight + "px");
        }

        if (navbarHeight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarHeight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }
    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });
});

// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small');
    } else {
        $('body').removeClass('body-small');
    }
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            $('#side-menu').fadeIn(400);
        }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(function () {
            $('#side-menu').fadeIn(400);
        }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './patterns/3.png' in 'D:\\laragon\\www\\cheques\\resources\\assets\\sass'\n    at factoryCallback (D:\\laragon\\www\\cheques\\node_modules\\webpack\\lib\\Compilation.js:282:40)\n    at factory (D:\\laragon\\www\\cheques\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\laragon\\www\\cheques\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\laragon\\www\\cheques\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\laragon\\www\\cheques\\node_modules\\async\\dist\\async.js:3888:9\n    at D:\\laragon\\www\\cheques\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\laragon\\www\\cheques\\node_modules\\async\\dist\\async.js:1062:13)\n    at D:\\laragon\\www\\cheques\\node_modules\\async\\dist\\async.js:969:16\n    at D:\\laragon\\www\\cheques\\node_modules\\async\\dist\\async.js:3885:13\n    at resolvers.normal.resolve (D:\\laragon\\www\\cheques\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\laragon\\www\\cheques\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\laragon\\www\\cheques\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\laragon\\www\\cheques\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\laragon\\www\\cheques\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\laragon\\www\\cheques\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ })
/******/ ]);