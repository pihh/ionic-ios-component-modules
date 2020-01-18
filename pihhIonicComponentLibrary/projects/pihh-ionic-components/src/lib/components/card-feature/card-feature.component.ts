import { Component, OnInit, Input } from "@angular/core";
import { ImageDarknessDetectionService } from "../../services/image-darkness-detection.service";
@Component({
  selector: "pic-card-feature",
  templateUrl: "./card-feature.component.html",
  styleUrls: ["./card-feature.component.css"]
})
export class CardFeatureComponent implements OnInit {
  @Input() subtitle: string = "subtitle";
  @Input() title: string = "title";
  @Input() content: string = "content placed at the footer";
  @Input() src: string =
    "https://bordalo.observador.pt/500x,q85/https://s3.observador.pt/wp-content/uploads/2017/05/25151334/thumb-1920-790802_770x433_acf_cropped.jpg";

  darkness: string = "DARK";
  constructor(private imageDarkness: ImageDarknessDetectionService) {}

  ngOnInit() {
    this.imageDarkness
      .run(this.src)
      .then((darkness: string) => (this.darkness = darkness));
  }
}
