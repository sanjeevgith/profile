import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'profile-info';



  dataSource: any;
  data :any












  btn() {
    let link = document.createElement("a");
        link.download = "Resume_Sanjiv_Prajapati";
        link.href = "assets/Resume_Sanjiv_Prajapati.pdf";
        link.click()
  }


  graph(){
    var revenueChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-graph',
      width: '100%',
      height: '350',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Website Code Analysis",
          "subCaption": "",
          "numberPrefix": "%",
          "showPercentInTooltip": "0",
          "decimals": "1",
          "animateClockwise": "1",
          //Theme
          "theme": "fusion",
          "bgColor": "#33ccff",
        },
        "data": [{
            "label": "Html",
            "value": "40"
          },
          {
            "label": "Java Script",
            "value": "10"
          },
          {
            "label": "Type Script",
            "value": "10"
          },
          {
            "label": "css",
            "value": "35"
          },
          {
            "label": "Bootstrap",
            "value": "5"
          }
        ]
      }
    }).render();
  
  }


  ngOnInit(): void {
    this.graph();
   }
}
