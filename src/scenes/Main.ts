export default class Main extends Phaser.Scene {
	constructor () {
    super({ key: 'Main' });
	}

	preload () {
		this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('ground', 'assets/platform.png');

    this.load.spritesheet('dude', 'assets/dude.png', {
      frameHeight: 48,
      frameWidth: 32
    });
	}

	create () {
    let { width, height } = this.scale;
    width /= 2, height /= 2;

    this.add.image(width, height, 'sky');
    this.add.image(width, height, 'star');
	}

	update (time: number, delta: number) {
	}
};
