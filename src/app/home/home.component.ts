import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data : {
        labels: [
          'Restante',
          'Extras',
          'Essencial'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }]
      },
      options: {
          scales: {
          }
      }
  });

  var myChart = new Chart("myChart2", {
    type: 'line',
    data : {
      labels: [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ],
      datasets: [{
        label: 'Gastos',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(215, 132, 142)',
      },
    {
      label: 'Economias',
        data: [25, 69, 10, 42, 36, 15, 0],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
    }],
    },
});

  }
}
