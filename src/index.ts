import * as Phaser from 'phaser';
import Main from './scenes/Main';

export const game = new Phaser.Game({
  title: 'First game tutorial',
  backgroundColor: '#000000',

  type: Phaser.AUTO,
  parent: 'game',
  scene: Main,

  scale: {
    height: 600,
    width: 800
  },

  physics: {
    arcade: { debug: true },
    default: 'arcade'
  }
});

window.addEventListener('resize', () => {
  game.scale.refresh();
});
