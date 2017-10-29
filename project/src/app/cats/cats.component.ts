import {Component, OnInit} from "@angular/core";
import {CatData, CatDetailData} from "./catdata/CatData";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  providers: [HttpClient],
  styleUrls: ["./cats.component.scss"]
})
export class CatsComponent implements OnInit {
  public currentData: CatDetailData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<CatData>("./data/cat1/cat1.json")
      .subscribe(
        catData => {
          this.currentData = catData.data;
        }
      );
  }
  
  /**
   * サムネイルクリック時の処理
   */
  public onClickThumb(detailData: CatDetailData) {
    this.currentData = detailData;
  }
}
