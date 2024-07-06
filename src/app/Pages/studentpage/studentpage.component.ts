import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { StudentRegisterComponent, StudentResponse } from 'src/app/student-register/student-register.component';
// declare var Chart: any;
// declare var google: any;

@Component({
  selector: 'app-studentpage',
  templateUrl: './studentpage.component.html',
  styleUrls: ['./studentpage.component.css']
})
export class StudentpageComponent{
  // constructor(
  //   private StudentRegisterComponent: StudentRegisterComponent,
  // ) {}
  // student!: StudentResponse;
  // ngOnInit(){
  //   this.getStudent();
  // }
  // getStudent(){

  // }
  // @ViewChild('barChart', { static: false }) barChart!: ElementRef;
  // @ViewChild('pieChart', { static: false }) pieChart!: ElementRef;

  // initialValues: number[] = [12, 19, 3, 17, 28, 24, 7, 24, 24, 24, 24];
  // values: number[] = [230, 308, 520, 7.5, 200];
  // barChartRef: any;
  // pieChartRef: any;

  // ngAfterViewInit() {
  //   this.drawBarChart();
  //   this.drawPieChart();
  // }

  // drawBarChart() {
  //   this.barChartRef = new Chart(this.barChart.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ["JAN", "FEB", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  //       datasets: [{
  //         label: 'data-1',
  //         data: this.initialValues,
  //         backgroundColor: "rgba(255,0,0,1)"
  //       }, {
  //         label: 'data-2',
  //         data: [30, 29, 5, 5, 20, 3, 10, 24, 24, 24, 24],
  //         backgroundColor: "rgba(0,0,255,1)"
  //       }]
  //     },
  //     options: {
  //       // Your options for the bar chart
  //     }
  //   });
  // }

  // drawPieChart() {
  //   google.charts.load('current', { packages: ['corechart'] });
  //   google.charts.setOnLoadCallback(() => this.drawGooglePieChart());

  //   // Optional: If you want to use Chart.js for pie chart, uncomment below
  //   // this.pieChartRef = new Chart(this.pieChart.nativeElement, {
  //   //   type: 'pie',
  //   //   data: {
  //   //     labels: ["USA", "Canada", "Mexico", "Sweden", "Germany"],
  //   //     datasets: [{
  //   //       data: [7242, 4563, 1345, 946, 2150],
  //   //       backgroundColor: ['blue', 'green', 'red', 'purple', 'orange']
  //   //     }]
  //   //   },
  //   //   options: {
  //   //     // Your options for the pie chart
  //   //   }
  //   // });
  // }

  // drawGooglePieChart() {
  //   const data = google.visualization.arrayToDataTable([
  //     ['Country', 'Page Hits'],
  //     ['USA', 7242],
  //     ['Canada', 4563],
  //     ['Mexico', 1345],
  //     ['Sweden', 946],
  //     ['Germany', 2150]
  //   ]);

  //   const options = {
  //     backgroundColor: 'transparent',
  //     pieHole: 0.4,
  //     pieSliceText: 'value',
  //     tooltip: {
  //       text: 'percentage',
  //       color: 'white'
  //     },
  //     fontName: 'Open Sans',
  //     chartArea: {
  //       width: '100%',
  //       height: '94%'
  //     },
  //     legend: {
  //       textStyle: {
  //         fontSize: 13,
  //         color: 'white'
  //       }
  //     }
  //   };

  //   const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
  //   chart.draw(data, options);
  // }

}
