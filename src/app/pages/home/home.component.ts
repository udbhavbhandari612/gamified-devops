import { Component, OnInit } from '@angular/core';
import { multi, single, gauge } from '../../../assets/database/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mpConfig: any = {
    view: [650, 250],
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Timeline',
    yAxisLabel: 'Score',
    timeline: true,
    colorScheme: {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    }
  }

  mpConfig2: any = {
    view: [400, 250],
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Timeline',
    yAxisLabel: 'Score',
    timeline: true,
    colorScheme: {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    }
  }

  mtpConfig: any = {
    view: [600, 350],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showXAxisLabel: true,
    yAxisLabel: 'Criteria',
    showYAxisLabel: true,
    xAxisLabel: 'Score',

    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }
  }

  mtpConfig2: any = {
    view: [350, 250],
  }

  gaugeConfig: any = {
    view: [300, 200],
    angleSpan: 180,
    startAngle: -90,
    smallSegments: 0,
    bigSegments: 0,
    colorScheme: {
      domain: ['#5AA454']
    }
  }


  multi: any[] = multi;
  single: any[] = single;
  gauge: any[] = gauge;

  constructor() {
    document.title = "Home | Gamified DevOps"
  }

  ngOnInit(): void {
  }

}
