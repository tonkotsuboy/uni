import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

import {CatData, CatDetailData} from "./catdata/CatData";

class Main {

  private catData: CatData;
  private mainVisual: HTMLDivElement;
  private mainTitle: HTMLHeadElement;
  private mainLead: HTMLHeadElement;
  private mainImage: HTMLImageElement;
  private mainNum: HTMLDivElement;
  private mainText: HTMLParagraphElement;

  private nextButtonList: NodeListOf<Element>;


  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    this.setDoms();
    await this.fetchData();
    this.addEvents();

    this.changeMainVisual(this.catData.data[0]);
  }

  private setDoms(): void {
    this.mainVisual = document.getElementById("js-main-visual") as HTMLDivElement;
    this.mainTitle = document.getElementById("js-main-title") as HTMLHeadElement;
    this.mainLead = document.getElementById("js-main-lead") as HTMLHeadElement;
    this.mainImage = document.getElementById("js-main-image") as HTMLImageElement;
    this.mainNum = document.getElementById("js-main-num") as HTMLDivElement;
    this.mainText = document.getElementById("js-main-text") as HTMLParagraphElement;
    this.nextButtonList = document.querySelectorAll(".js-next-button");
  }


  /**
   * データのフェッチ
   *
   * @returns {Promise<void>}
   */
  async fetchData() {
    const responseJson = await fetch("./data/cat-data.json")
      .then(response => response.json())
      .then(json => json as CatData);

    this.catData = responseJson as CatData;
  }

  private addEvents() {
    const buttonNum = this.nextButtonList.length;
    for (let i = 0; i < buttonNum; i++) {
      const targetButton = <HTMLDivElement> this.nextButtonList[i];
      targetButton.addEventListener("click", () => {
        const targetData = this.catData.data[i];
        this.changeMainVisual(targetData);
      });
    }
  }

  private changeMainVisual(data: CatDetailData): void {
    this.mainTitle.innerText = data.title;
    this.mainLead.innerText = data.lead;
    this.mainImage.src = `data/${data.image}`;
    this.mainText.innerHTML = data.text;

    const dataNum = data.num < 10 ? "0" + data.num : data.num;
    this.mainNum.innerText = String(dataNum);
  }

}

window.addEventListener("DOMContentLoaded", () => new Main());

