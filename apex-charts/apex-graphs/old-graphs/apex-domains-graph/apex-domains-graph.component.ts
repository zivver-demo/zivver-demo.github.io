import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {DataService} from '../../../../data.service';

@Component({
  selector: 'app-apex-domains-graph',
  templateUrl: './apex-domains-graph.component.html',
  styleUrls: ['./apex-domains-graph.component.scss']
})
export class ApexDomainsGraphComponent implements OnInit {

  @ViewChild('chart', {static: false}) chart: ChartComponent;

  public chartOptions = {
    chartDetails: {
      height: 450,
      stacked: true,
      type: 'bar',
      width: 600
    },
    colors: ['#0B74E7', '#003668', '#00A9E0', '#E6F7FC'],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    legend: {
      position: 'top',
      onItemHover: {
        highlightDataSeries: true
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };

  public data: ApexOptions;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    /*this.data = this.dataService.apexDomainData();
    this.data = {
      ...this.data,
      xaxis: {
        ...this.data.xaxis,
        title: {
          text: 'Number of messages'
        }
      }
    };*/
  }

}
