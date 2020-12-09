import { Scene, Physics, GameObjects, Types } from 'phaser';

export default class Main extends Scene {
  private keys!: Types.Input.Keyboard.CursorKeys;
  private player!: Physics.Arcade.Sprite;

  private stars!: Physics.Arcade.Group;
  private bombs!: Physics.Arcade.Group;

  private gameOverText!: GameObjects.Text;
  private scoreText!: GameObjects.Text;

  private gameOver = false;
  private score = 0;

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

  private createStars (): Physics.Arcade.Group {
    const stars = this.physics.add.group({
      setXY: { x: 12, y: 0, stepX: 70.5 },
      key: 'star',
      repeat: 11
    });

    stars.children.iterate(child =>
      (child as Physics.Arcade.Sprite).setBounceY(
        Phaser.Math.FloatBetween(0.25, 0.5)
      ));

    return stars;
  }

  private createBombs (): Physics.Arcade.Group {
    return this.physics.add.group();
  }

  private pickStar (player: GameObjects.GameObject, star: GameObjects.GameObject): void {
    (star as Physics.Arcade.Sprite).disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
    !this.stars.countActive(true) && this.releaseBomb();
  }

  private releaseBomb (): void {
    this.stars.children.iterate(child => {
      const star = child as Physics.Arcade.Sprite;
      star.enableBody(true, star.x, 0, true, true);
    });

    const x = this.player.x > 400
      ? Phaser.Math.Between(0, 400)
      : Phaser.Math.Between(400, 800);

    const bomb = this.bombs.create(x, 16, 'bomb');

    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.setCollideWorldBounds(true);
    bomb.setBounce(0.5);
  }

  private hitBomb (player: GameObjects.GameObject, bomb: GameObjects.GameObject): void {
    this.gameOverText.visible = true;
    this.player.anims.play('turn');
    this.player.setTint(0xff0000);

    this.gameOver = true;
    this.physics.pause();
  }

	public update (time: number, delta: number): void {
    if (this.gameOver || !this.keys.left || !this.keys.right || !this.keys.up) return;

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
