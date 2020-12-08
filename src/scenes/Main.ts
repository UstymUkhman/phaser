import { Scene, Physics, Types } from 'phaser';

export default class Main extends Scene {
  private keys!: Types.Input.Keyboard.CursorKeys;
  private player!: Physics.Arcade.Sprite;

	public constructor () {
    super({ key: 'Main' });
	}

	private preload (): void {
		this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('ground', 'assets/platform.png');

    this.load.spritesheet('dude', 'assets/dude.png', {
      frameHeight: 48,
      frameWidth: 32
    });
	}

	private create (): void {
    const platforms = this.createPlatforms();
    this.player = this.createPlayer();

    this.keys = this.createCursorKeys();
    this.physics.add.collider(this.player, platforms);
  }

  private createCursorKeys (): Types.Input.Keyboard.CursorKeys {
    return this.input.keyboard.createCursorKeys();
  }

  private createPlatforms (): Physics.Arcade.StaticGroup {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, 'sky');
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground')
      .setScale(2).refreshBody();

    platforms.create(50, 250, 'ground');
    platforms.create(600, 400, 'ground');
    platforms.create(750, 220, 'ground');

    return platforms;
  }

  private createPlayer (): Physics.Arcade.Sprite {
    const player = this.physics.add.sprite(100, 450, 'dude');
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
  }

	public update (time: number, delta: number): void {
    if (!this.keys.left || !this.keys.right || !this.keys.up) return;

    const playerInAir = !this.player.body.touching.down;

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
  }

  private pauseAirAnimations (frame: number): void {
    this.player.anims.pause(
      this.player.anims.currentAnim.frames[frame]
    );
  }
};
