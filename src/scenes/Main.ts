import { Scene, Physics } from 'phaser';

export default class Main extends Scene {
  private platforms?: Physics.Arcade.StaticGroup;
  private player?: Physics.Arcade.Sprite;

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
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, 'sky');
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground')
      .setScale(2).refreshBody();

    this.platforms.create(50, 250, 'ground');
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.2);

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
	}

	update (time: number, delta: number) {
	}
};
