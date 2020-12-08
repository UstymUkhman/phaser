/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors.phaser"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Main */ "./src/scenes/Main.ts");


var game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    title: 'First game tutorial',
    backgroundColor: '#000000',
    parent: 'container',
    type: Phaser.AUTO,
    scene: _scenes_Main__WEBPACK_IMPORTED_MODULE_1__["default"],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scale: {
        height: 600,
        width: 800
    }
});
window.addEventListener('resize', function () {
    game.scale.refresh();
});


/***/ }),

/***/ "./src/scenes/Main.ts":
/*!****************************!*\
  !*** ./src/scenes/Main.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var Main = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Main, _super);
    function Main() {
        var _this = _super.call(this, { key: 'Main' }) || this;
        _this.score = 0;
        return _this;
    }
    Main.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameHeight: 48,
            frameWidth: 32
        });
    };
    Main.prototype.create = function () {
        var platforms = this.createPlatforms();
        this.keys = this.createCursorKeys();
        var stars = this.createStars();
        this.player = this.createPlayer();
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.overlap(this.player, stars, this.pickStar, undefined, this);
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#ffffff'
        });
    };
    Main.prototype.createCursorKeys = function () {
        return this.input.keyboard.createCursorKeys();
    };
    Main.prototype.createPlatforms = function () {
        var _a = this.scale, width = _a.width, height = _a.height;
        this.add.image(width / 2, height / 2, 'sky');
        var platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground')
            .setScale(2).refreshBody();
        platforms.create(50, 250, 'ground');
        platforms.create(600, 400, 'ground');
        platforms.create(750, 220, 'ground');
        return platforms;
    };
    Main.prototype.createPlayer = function () {
        var player = this.physics.add.sprite(100, 450, 'dude');
        player.setCollideWorldBounds(true);
        player.setBounce(0.2);
        this.anims.create({
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            key: 'left',
            repeat: -1
        });
        this.anims.create({
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
            key: 'turn'
        });
        this.anims.create({
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            key: 'right',
            repeat: -1
        });
        return player;
    };
    Main.prototype.createStars = function () {
        var stars = this.physics.add.group({
            setXY: { x: 12, y: 0, stepX: 70.5 },
            key: 'star',
            repeat: 11
        });
        stars.children.iterate(function (child) {
            return child.setBounceY(Phaser.Math.FloatBetween(0.25, 0.5));
        });
        return stars;
    };
    Main.prototype.pickStar = function (player, star) {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    };
    Main.prototype.update = function (time, delta) {
        if (!this.keys.left || !this.keys.right || !this.keys.up)
            return;
        var playerInAir = !this.player.body.touching.down;
        if (this.keys.left.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);
            playerInAir && this.pauseAirAnimations(3);
        }
        else if (this.keys.right.isDown) {
            this.player.setVelocityX(150);
            this.player.anims.play('right', true);
            playerInAir && this.pauseAirAnimations(1);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.keys.up.isDown && !playerInAir) {
            this.player.setVelocityY(-350);
        }
    };
    Main.prototype.pauseAirAnimations = function (frame) {
        this.player.anims.pause(this.player.anims.currentAnim.frames[frame]);
    };
    return Main;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));
/* harmony default export */ __webpack_exports__["default"] = (Main);
;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBRUk7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVPLGlDQUFrQixHQUExQixVQUE0QixLQUFhO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQTVJaUMsNENBQUssR0E0SXRDOztBQUFBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzLnBoYXNlclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9zY2VuZXMvTWFpbic7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICB0aXRsZTogJ0ZpcnN0IGdhbWUgdHV0b3JpYWwnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcblxuICBwYXJlbnQ6ICdjb250YWluZXInLFxuICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgc2NlbmU6IE1haW4sXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDMwMCB9LFxuICAgICAgZGVidWc6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIHNjYWxlOiB7XG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2lkdGg6IDgwMFxuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XG59KTtcbiIsImltcG9ydCB7IFNjZW5lLCBQaHlzaWNzLCBHYW1lT2JqZWN0cywgVHlwZXMgfSBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgU2NlbmUge1xuICBwcml2YXRlIGtleXMhOiBUeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICBwcml2YXRlIHBsYXllciE6IFBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcblxuICBwcml2YXRlIHNjb3JlVGV4dCE6IEdhbWVPYmplY3RzLlRleHQ7XG4gIHByaXZhdGUgc2NvcmUgPSAwO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoeyBrZXk6ICdNYWluJyB9KTtcblx0fVxuXG5cdHByaXZhdGUgcHJlbG9hZCAoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NreS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YXInLCAnYXNzZXRzL3N0YXIucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdib21iJywgJ2Fzc2V0cy9ib21iLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcblxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsICdhc3NldHMvZHVkZS5wbmcnLCB7XG4gICAgICBmcmFtZUhlaWdodDogNDgsXG4gICAgICBmcmFtZVdpZHRoOiAzMlxuICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGUgKCk6IHZvaWQge1xuICAgIGNvbnN0IHBsYXRmb3JtcyA9IHRoaXMuY3JlYXRlUGxhdGZvcm1zKCk7XG4gICAgdGhpcy5rZXlzID0gdGhpcy5jcmVhdGVDdXJzb3JLZXlzKCk7XG5cbiAgICBjb25zdCBzdGFycyA9IHRoaXMuY3JlYXRlU3RhcnMoKTtcbiAgICB0aGlzLnBsYXllciA9IHRoaXMuY3JlYXRlUGxheWVyKCk7XG5cbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHN0YXJzLCBwbGF0Zm9ybXMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyLCBzdGFycywgdGhpcy5waWNrU3RhciwgdW5kZWZpbmVkLCB0aGlzKTtcblxuICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCgxNiwgMTYsICdTY29yZTogMCcsIHtcbiAgICAgIGZvbnRTaXplOiAnMzJweCcsXG4gICAgICBmaWxsOiAnI2ZmZmZmZidcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ3Vyc29yS2V5cyAoKTogVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQbGF0Zm9ybXMgKCk6IFBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc2NhbGU7XG5cbiAgICB0aGlzLmFkZC5pbWFnZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIsICdza3knKTtcbiAgICBjb25zdCBwbGF0Zm9ybXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG5cbiAgICBwbGF0Zm9ybXMuY3JlYXRlKDQwMCwgNTY4LCAnZ3JvdW5kJylcbiAgICAgIC5zZXRTY2FsZSgyKS5yZWZyZXNoQm9keSgpO1xuXG4gICAgcGxhdGZvcm1zLmNyZWF0ZSg1MCwgMjUwLCAnZ3JvdW5kJyk7XG4gICAgcGxhdGZvcm1zLmNyZWF0ZSg2MDAsIDQwMCwgJ2dyb3VuZCcpO1xuICAgIHBsYXRmb3Jtcy5jcmVhdGUoNzUwLCAyMjAsICdncm91bmQnKTtcblxuICAgIHJldHVybiBwbGF0Zm9ybXM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXllciAoKTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSgxMDAsIDQ1MCwgJ2R1ZGUnKTtcbiAgICBwbGF5ZXIuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgIHBsYXllci5zZXRCb3VuY2UoMC4yKTtcblxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZHVkZScsIHsgc3RhcnQ6IDAsIGVuZDogMyB9KSxcbiAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICBrZXk6ICdsZWZ0JyxcbiAgICAgIHJlcGVhdDogLTFcbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogW3sga2V5OiAnZHVkZScsIGZyYW1lOiA0IH1dLFxuICAgICAgZnJhbWVSYXRlOiAyMCxcbiAgICAgIGtleTogJ3R1cm4nXG4gICAgfSk7XG5cbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2R1ZGUnLCB7IHN0YXJ0OiA1LCBlbmQ6IDggfSksXG4gICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAga2V5OiAncmlnaHQnLFxuICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU3RhcnMgKCk6IFBoeXNpY3MuQXJjYWRlLkdyb3VwIHtcbiAgICBjb25zdCBzdGFycyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xuICAgICAgc2V0WFk6IHsgeDogMTIsIHk6IDAsIHN0ZXBYOiA3MC41IH0sXG4gICAgICBrZXk6ICdzdGFyJyxcbiAgICAgIHJlcGVhdDogMTFcbiAgICB9KTtcblxuICAgIHN0YXJzLmNoaWxkcmVuLml0ZXJhdGUoKGNoaWxkOiBhbnkpID0+XG4gICAgICBjaGlsZC5zZXRCb3VuY2VZKFBoYXNlci5NYXRoLkZsb2F0QmV0d2VlbigwLjI1LCAwLjUpKSk7XG5cbiAgICByZXR1cm4gc3RhcnM7XG4gIH1cblxuICBwcml2YXRlIHBpY2tTdGFyIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHN0YXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICAoc3RhciBhcyBQaHlzaWNzLkFyY2FkZS5TcHJpdGUpLmRpc2FibGVCb2R5KHRydWUsIHRydWUpO1xuXG4gICAgdGhpcy5zY29yZSArPSAxMDtcbiAgICB0aGlzLnNjb3JlVGV4dC5zZXRUZXh0KCdTY29yZTogJyArIHRoaXMuc2NvcmUpO1xuICB9XG5cblx0cHVibGljIHVwZGF0ZSAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmtleXMubGVmdCB8fCAhdGhpcy5rZXlzLnJpZ2h0IHx8ICF0aGlzLmtleXMudXApIHJldHVybjtcblxuICAgIGNvbnN0IHBsYXllckluQWlyID0gIXRoaXMucGxheWVyLmJvZHkudG91Y2hpbmcuZG93bjtcblxuICAgIGlmICh0aGlzLmtleXMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHRoaXMucGxheWVyLnNldFZlbG9jaXR5WCgtMTUwKTtcbiAgICAgIHRoaXMucGxheWVyLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcbiAgICAgIHBsYXllckluQWlyICYmIHRoaXMucGF1c2VBaXJBbmltYXRpb25zKDMpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMua2V5cy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHRoaXMucGxheWVyLnNldFZlbG9jaXR5WCgxNTApO1xuICAgICAgdGhpcy5wbGF5ZXIuYW5pbXMucGxheSgncmlnaHQnLCB0cnVlKTtcbiAgICAgIHBsYXllckluQWlyICYmIHRoaXMucGF1c2VBaXJBbmltYXRpb25zKDEpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgdGhpcy5wbGF5ZXIuYW5pbXMucGxheSgndHVybicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmtleXMudXAuaXNEb3duICYmICFwbGF5ZXJJbkFpcikge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlZKC0zNTApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGF1c2VBaXJBbmltYXRpb25zIChmcmFtZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuYW5pbXMucGF1c2UoXG4gICAgICB0aGlzLnBsYXllci5hbmltcy5jdXJyZW50QW5pbS5mcmFtZXNbZnJhbWVdXG4gICAgKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=