import {Component, Input, OnInit} from "@angular/core";
import {CatDetailData} from "../catdata/CatData";

@Component({
  selector: "app-cat-thumb",
  templateUrl: "./cat-thumb.component.html",
  styleUrls: ["./cat-thumb.component.scss"]
})
export class CatThumbComponent implements OnInit {

  @Input() detailData: CatDetailData;

  constructor() {
  }

  ngOnInit() {
  }

}
