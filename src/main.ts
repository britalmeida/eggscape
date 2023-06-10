import './style.css'
import { UIRenderer } from 'uirenderer-canvas';

function draw() {
  const ui = uiRenderer;
  ui.beginFrame();

  ui.addImage(0, 0, 800, 600, bgTextureID);
  ui.addImage(400-16, 300-16, 32, 32, eggTextureID);

  ui.draw();
}


let canvas = document.querySelector<HTMLCanvasElement>('#canvas-view');
let uiRenderer: UIRenderer = new UIRenderer(canvas, draw);
let bgTextureID: WebGLTexture = uiRenderer.loadImage('/plates/background.png');
let eggTextureID: WebGLTexture = uiRenderer.loadImage('/sprites/egg.png');
