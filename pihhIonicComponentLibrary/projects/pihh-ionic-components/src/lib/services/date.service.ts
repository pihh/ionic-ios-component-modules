import { Injectable } from "@angular/core";
import moment from "moment";

@Injectable({
  providedIn: "root"
})
export class PihhIonicComponentsDateService {
  constructor() {}

  headerTitleDate() {
    const today = moment();
    const weekDay = today.format("dddd");
    const month = today.format("MMMM");
    const day = today.date();

    return `${weekDay}, ${month} ${day}`;
  }
}
