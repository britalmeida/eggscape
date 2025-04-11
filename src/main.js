import './style.css'
import { UIRenderer } from 'uirenderer-canvas';

function draw() {
  const ui = uiRenderer;
  ui.beginFrame();

  ui.addImage(0, 0, 800, 600, bgTextureID);
  ui.addImage(400-16, 300-16, 32, 32, eggTextureID);

  ui.addImage(400, 300, 14 * 7, 14, coinTextureID);

  ui.draw();
}


let canvas = document.querySelector<HTMLCanvasElement>('#canvas-view');
console.log(canvas);
let uiRenderer = new UIRenderer(canvas, draw);
let bgTextureID = uiRenderer.loadImage('/plates/background.png');
let eggTextureID = uiRenderer.loadImage('/sprites/egg.png');

let coinTextureID = uiRenderer.loadImage('/sprites/coin_spinning.png');
