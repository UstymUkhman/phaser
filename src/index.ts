import { Game } from 'phaser';
import Main from './scenes/Main';

export const game = new Game({
  title: 'First game tutorial',
  backgroundColor: '#000000',

  parent: 'container',
  type: Phaser.AUTO,
  scene: Main,

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

window.addEventListener('resize', () => {
  game.scale.refresh();
});
