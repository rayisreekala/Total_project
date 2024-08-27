import { Component, OnInit } from '@angular/core';
import { Chart , ChartOptions, ChartType } from 'chart.js';
type BarChartOptions = ChartOptions<'bar'>;
interface CustomBarChartOptions extends ChartOptions<'bar'> {
  tooltips?: {
    enabled?: boolean;
  };
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public rangeDates: Date[] | undefined;

  constructor() { }

  public chart: any;
  public chart1: any;
  public chart2: any;
  public show:boolean = true;

  ngOnInit(): void {

    this.chart = new Chart('canvas', {
      type: 'bar',

      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Violet', 'Orange', 'Pink'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100, 160, 40, 200],
            backgroundColor: [
              // 'rgba(0,81,255,255)',
              'rgba(47,134,255,255)',
              'rgba(81,172,255,255)',
              'rgba(139,195,246,255)',
              'rgba(161,224,255,255)',
              'rgba(68,126,185,255)',
              // 'rgba(32,166,199,255)',
              'rgba(115,175,246,255)'

            ],
            // hoverOffset: 4,
          },
        ],
      },

      options: {
        // borderRadius: 10,
      },
    });

    const options: CustomBarChartOptions = {
      tooltips: {
        enabled: false,
      },
      // other options here
    };
    

    this.chart1 = new Chart('canvas1', {
      type: 'bar',

      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Violet', 'Orange', 'Pink'],
        datasets: [
          {
            data: [500, 80, 200, 360, 140, 290],
            backgroundColor: [
              'rgba(47,134,255,255)',
              'rgba(81,172,255,255)',
              'rgba(139,195,246,255)',
              'rgba(161,224,255,255)',
              'rgba(68,126,185,255)',
              'rgba(115,175,246,255)'
            ],
          },
        ],
      },

      options: {
        tooltips: {
          enabled: false,
        },
        // other options here
      } as unknown as BarChartOptions, 
      
    });

    
    this.chart2 = new Chart('canvas2', {
      type: 'line',

      data: {
        labels: ['10-10-2023', '11-10-2023', '12-10-2023', '13-10-2023', '14-10-2023', '15-10-2023', '16-10-2023', '17-10-2023', '18-10-2023', '19-10-2023', '20-10-2023'],
        datasets: [
          {
            // labels: labels,
            // datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40, 38, 70, 60, 77],
              fill: false,
              borderColor:'rgba(47,134,255,255)',
              tension: 0.1
            // }]
          },
        ],
      },
      
    });
    
    // var myPieChart = new Chart("myPieChart", {
    //   type: 'pie',
    //   data: {
    //     labels: [''],
    //     datasets: [{
    //       label: 'Claims Status',
    //       data: [''],
    //       backgroundColor: [
    //         '#3e969f',
    //         'rgba(255, 99, 132, 0.3)',
    //         'rgba(54, 162, 235, 0.3)',
    //         'rgba(255, 206, 86, 0.3)',
    //         'rgba(75, 192, 192, 0.3)',
    //         'rgba(153, 102, 255, 0.3)',
    //         'rgba(255, 159, 64, 0.3)',
    //         'rgba(211, 211, 211, 0.5)',
    //         'rgba(144, 238, 144, 0.5)',
    //         'rgba(255, 218, 185, 0.5)',
    //         'rgba(221, 160, 221, 0.5)',
    //         'rgba(255, 204, 153, 0.5)'
    //       ],
    //       borderColor: [
    //         '#3e969f',
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 230)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //         'rgba(211, 211, 211, 230)',
    //         'rgba(144, 238, 144, 230)',
    //         'rgba(255, 218, 185, 230)',
    //         'rgba(221, 160, 221, 1)',
    //         'rgba(255, 204, 153, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },

    //   options: {
    //     plugins: {
    //       legend: {
    //       }
    //     },

    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       x: {
    //         title: {
    //           display: true,
    //           text: 'Claim status type',
    //           color: '#3e969f'
    //         }
    //       },
    //       y: {
    //         title: {
    //           display: true,
    //           text: 'Total count',
    //           color: '#3e969f'
    //         },
    //       }
    //     }
    //   }
    // });
    
  }



}
