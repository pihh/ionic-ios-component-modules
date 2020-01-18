import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImageDarknessDetectionService {
  values: string[] = ["DARK", "LIGHT"];
  constructor() {}

  run(imageSrc: string) {
    return new Promise((res, rej) => {
      let colorSum = 0;
      let img = new Image();
      img.crossOrigin = "";
      img.src = imageSrc;
      img.style.display = "none";
      img.setAttribute("crossOrigin", "");

      document.body.appendChild(img);

      img.onerror = error => {
        console.warn(error);
        res(this.values[1]);
      };

      img.onload = () => {
        let canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        let r, g, b, avg;

        for (let x = 0, len = data.length; x < len; x += 4) {
          r = data[x];
          g = data[x + 1];
          b = data[x + 2];

          avg = Math.floor((r + g + b) / 3);
          colorSum += avg;
        }
        let brightness = Math.floor(colorSum / (img.width * img.height));
        res(brightness > 100 ? this.values[1] : this.values[0]);
      };
    });
  }
}
