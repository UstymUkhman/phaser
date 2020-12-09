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
        _this.gameOver = false;
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
        this.stars = this.createStars();
        this.bombs = this.createBombs();
        this.player = this.createPlayer();
        this.physics.add.collider(this.stars, platforms);
        this.physics.add.collider(this.bombs, platforms);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.overlap(this.player, this.stars, this.pickStar, undefined, this);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, undefined, this);
        this.gameOverText = this.add.text(225, 275, 'Game Over', {
            strokeThickness: 1.0,
            stroke: '#000000',
            fontSize: '64px',
            fill: '#ff0000'
        });
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#ffffff'
        });
        this.gameOverText.visible = false;
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
    Main.prototype.createBombs = function () {
        return this.physics.add.group();
    };
    Main.prototype.pickStar = function (player, star) {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
        !this.stars.countActive(true) && this.releaseBomb();
    };
    Main.prototype.releaseBomb = function () {
        this.stars.children.iterate(function (child) {
            var star = child;
            star.enableBody(true, star.x, 0, true, true);
        });
        var x = this.player.x > 400
            ? Phaser.Math.Between(0, 400)
            : Phaser.Math.Between(400, 800);
        var bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.setCollideWorldBounds(true);
        bomb.setBounce(0.5);
    };
    Main.prototype.hitBomb = function (player, bomb) {
        this.gameOverText.visible = true;
        this.player.anims.play('turn');
        this.player.setTint(0xff0000);
        this.gameOver = true;
        this.physics.pause();
    };
    Main.prototype.update = function (time, delta) {
        if (this.gameOver || !this.keys.left || !this.keys.right || !this.keys.up)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyxpQ0FBa0IsR0FBMUIsVUFBNEIsS0FBYTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQzVDLENBQUM7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FoTWlDLDRDQUFLLEdBZ010Qzs7QUFBQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9ycy5waGFzZXJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBNYWluIGZyb20gJy4vc2NlbmVzL01haW4nO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgdGl0bGU6ICdGaXJzdCBnYW1lIHR1dG9yaWFsJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG5cbiAgcGFyZW50OiAnY29udGFpbmVyJyxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjZW5lOiBNYWluLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcblxuICAgIGFyY2FkZToge1xuICAgICAgZ3Jhdml0eTogeyB5OiAzMDAgfSxcbiAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBzY2FsZToge1xuICAgIGhlaWdodDogNjAwLFxuICAgIHdpZHRoOiA4MDBcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xufSk7XG4iLCJpbXBvcnQgeyBTY2VuZSwgUGh5c2ljcywgR2FtZU9iamVjdHMsIFR5cGVzIH0gZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFNjZW5lIHtcbiAgcHJpdmF0ZSBrZXlzITogVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcbiAgcHJpdmF0ZSBwbGF5ZXIhOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG5cbiAgcHJpdmF0ZSBzdGFycyE6IFBoeXNpY3MuQXJjYWRlLkdyb3VwO1xuICBwcml2YXRlIGJvbWJzITogUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlclRleHQhOiBHYW1lT2JqZWN0cy5UZXh0O1xuICBwcml2YXRlIHNjb3JlVGV4dCE6IEdhbWVPYmplY3RzLlRleHQ7XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlciA9IGZhbHNlO1xuICBwcml2YXRlIHNjb3JlID0gMDtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHsga2V5OiAnTWFpbicgfSk7XG5cdH1cblxuXHRwcml2YXRlIHByZWxvYWQgKCk6IHZvaWQge1xuXHRcdHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za3kucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJ2Fzc2V0cy9zdGFyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYm9tYicsICdhc3NldHMvYm9tYi5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dyb3VuZCcsICdhc3NldHMvcGxhdGZvcm0ucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1ZGUnLCAnYXNzZXRzL2R1ZGUucG5nJywge1xuICAgICAgZnJhbWVIZWlnaHQ6IDQ4LFxuICAgICAgZnJhbWVXaWR0aDogMzJcbiAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlICgpOiB2b2lkIHtcbiAgICBjb25zdCBwbGF0Zm9ybXMgPSB0aGlzLmNyZWF0ZVBsYXRmb3JtcygpO1xuICAgIHRoaXMua2V5cyA9IHRoaXMuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgdGhpcy5zdGFycyA9IHRoaXMuY3JlYXRlU3RhcnMoKTtcbiAgICB0aGlzLmJvbWJzID0gdGhpcy5jcmVhdGVCb21icygpO1xuICAgIHRoaXMucGxheWVyID0gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5zdGFycywgcGxhdGZvcm1zKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgcGxhdGZvcm1zKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5zdGFycywgdGhpcy5waWNrU3RhciwgdW5kZWZpbmVkLCB0aGlzKTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLmJvbWJzLCB0aGlzLmhpdEJvbWIsIHVuZGVmaW5lZCwgdGhpcyk7XG5cbiAgICB0aGlzLmdhbWVPdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQoMjI1LCAyNzUsICdHYW1lIE92ZXInLCB7XG4gICAgICBzdHJva2VUaGlja25lc3M6IDEuMCxcbiAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgZm9udFNpemU6ICc2NHB4JyxcbiAgICAgIGZpbGw6ICcjZmYwMDAwJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KDE2LCAxNiwgJ1Njb3JlOiAwJywge1xuICAgICAgZm9udFNpemU6ICczMnB4JyxcbiAgICAgIGZpbGw6ICcjZmZmZmZmJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5nYW1lT3ZlclRleHQudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDdXJzb3JLZXlzICgpOiBUeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBsYXRmb3JtcyAoKTogUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXAge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zY2FsZTtcblxuICAgIHRoaXMuYWRkLmltYWdlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgJ3NreScpO1xuICAgIGNvbnN0IHBsYXRmb3JtcyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcblxuICAgIHBsYXRmb3Jtcy5jcmVhdGUoNDAwLCA1NjgsICdncm91bmQnKVxuICAgICAgLnNldFNjYWxlKDIpLnJlZnJlc2hCb2R5KCk7XG5cbiAgICBwbGF0Zm9ybXMuY3JlYXRlKDUwLCAyNTAsICdncm91bmQnKTtcbiAgICBwbGF0Zm9ybXMuY3JlYXRlKDYwMCwgNDAwLCAnZ3JvdW5kJyk7XG4gICAgcGxhdGZvcm1zLmNyZWF0ZSg3NTAsIDIyMCwgJ2dyb3VuZCcpO1xuXG4gICAgcmV0dXJuIHBsYXRmb3JtcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUGxheWVyICgpOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKDEwMCwgNDUwLCAnZHVkZScpO1xuICAgIHBsYXllci5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgcGxheWVyLnNldEJvdW5jZSgwLjIpO1xuXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdkdWRlJywgeyBzdGFydDogMCwgZW5kOiAzIH0pLFxuICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgIGtleTogJ2xlZnQnLFxuICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgZnJhbWVzOiBbeyBrZXk6ICdkdWRlJywgZnJhbWU6IDQgfV0sXG4gICAgICBmcmFtZVJhdGU6IDIwLFxuICAgICAga2V5OiAndHVybidcbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZHVkZScsIHsgc3RhcnQ6IDUsIGVuZDogOCB9KSxcbiAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICBrZXk6ICdyaWdodCcsXG4gICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTdGFycyAoKTogUGh5c2ljcy5BcmNhZGUuR3JvdXAge1xuICAgIGNvbnN0IHN0YXJzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7XG4gICAgICBzZXRYWTogeyB4OiAxMiwgeTogMCwgc3RlcFg6IDcwLjUgfSxcbiAgICAgIGtleTogJ3N0YXInLFxuICAgICAgcmVwZWF0OiAxMVxuICAgIH0pO1xuXG4gICAgc3RhcnMuY2hpbGRyZW4uaXRlcmF0ZShjaGlsZCA9PlxuICAgICAgKGNoaWxkIGFzIFBoeXNpY3MuQXJjYWRlLlNwcml0ZSkuc2V0Qm91bmNlWShcbiAgICAgICAgUGhhc2VyLk1hdGguRmxvYXRCZXR3ZWVuKDAuMjUsIDAuNSlcbiAgICAgICkpO1xuXG4gICAgcmV0dXJuIHN0YXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCb21icyAoKTogUGh5c2ljcy5BcmNhZGUuR3JvdXAge1xuICAgIHJldHVybiB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XG4gIH1cblxuICBwcml2YXRlIHBpY2tTdGFyIChwbGF5ZXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHN0YXI6IEdhbWVPYmplY3RzLkdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICAoc3RhciBhcyBQaHlzaWNzLkFyY2FkZS5TcHJpdGUpLmRpc2FibGVCb2R5KHRydWUsIHRydWUpO1xuXG4gICAgdGhpcy5zY29yZSArPSAxMDtcbiAgICB0aGlzLnNjb3JlVGV4dC5zZXRUZXh0KCdTY29yZTogJyArIHRoaXMuc2NvcmUpO1xuICAgICF0aGlzLnN0YXJzLmNvdW50QWN0aXZlKHRydWUpICYmIHRoaXMucmVsZWFzZUJvbWIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZUJvbWIgKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnMuY2hpbGRyZW4uaXRlcmF0ZShjaGlsZCA9PiB7XG4gICAgICBjb25zdCBzdGFyID0gY2hpbGQgYXMgUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgICAgc3Rhci5lbmFibGVCb2R5KHRydWUsIHN0YXIueCwgMCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB4ID0gdGhpcy5wbGF5ZXIueCA+IDQwMFxuICAgICAgPyBQaGFzZXIuTWF0aC5CZXR3ZWVuKDAsIDQwMClcbiAgICAgIDogUGhhc2VyLk1hdGguQmV0d2Vlbig0MDAsIDgwMCk7XG5cbiAgICBjb25zdCBib21iID0gdGhpcy5ib21icy5jcmVhdGUoeCwgMTYsICdib21iJyk7XG5cbiAgICBib21iLnNldFZlbG9jaXR5KFBoYXNlci5NYXRoLkJldHdlZW4oLTIwMCwgMjAwKSwgMjApO1xuICAgIGJvbWIuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgIGJvbWIuc2V0Qm91bmNlKDAuNSk7XG4gIH1cblxuICBwcml2YXRlIGhpdEJvbWIgKHBsYXllcjogR2FtZU9iamVjdHMuR2FtZU9iamVjdCwgYm9tYjogR2FtZU9iamVjdHMuR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMucGxheWVyLmFuaW1zLnBsYXkoJ3R1cm4nKTtcbiAgICB0aGlzLnBsYXllci5zZXRUaW50KDB4ZmYwMDAwKTtcblxuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMucGh5c2ljcy5wYXVzZSgpO1xuICB9XG5cblx0cHVibGljIHVwZGF0ZSAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgfHwgIXRoaXMua2V5cy5sZWZ0IHx8ICF0aGlzLmtleXMucmlnaHQgfHwgIXRoaXMua2V5cy51cCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGxheWVySW5BaXIgPSAhdGhpcy5wbGF5ZXIuYm9keS50b3VjaGluZy5kb3duO1xuXG4gICAgaWYgKHRoaXMua2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKC0xNTApO1xuICAgICAgdGhpcy5wbGF5ZXIuYW5pbXMucGxheSgnbGVmdCcsIHRydWUpO1xuICAgICAgcGxheWVySW5BaXIgJiYgdGhpcy5wYXVzZUFpckFuaW1hdGlvbnMoMyk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5rZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKDE1MCk7XG4gICAgICB0aGlzLnBsYXllci5hbmltcy5wbGF5KCdyaWdodCcsIHRydWUpO1xuICAgICAgcGxheWVySW5BaXIgJiYgdGhpcy5wYXVzZUFpckFuaW1hdGlvbnMoMSk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVgoMCk7XG4gICAgICB0aGlzLnBsYXllci5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMua2V5cy51cC5pc0Rvd24gJiYgIXBsYXllckluQWlyKSB7XG4gICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVkoLTM1MCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwYXVzZUFpckFuaW1hdGlvbnMgKGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5hbmltcy5wYXVzZShcbiAgICAgIHRoaXMucGxheWVyLmFuaW1zLmN1cnJlbnRBbmltLmZyYW1lc1tmcmFtZV1cbiAgICApO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==