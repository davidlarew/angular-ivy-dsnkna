import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  messages: string[] = [];

  constructor(private http: HttpService) {}

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  handleError() {}

  getHttpData() {
    this.http
      .getData()
      .then(response => {
        this.messages = response
      })
      .catch(this.handleError);
  }
}
