import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent {

    chartOption: EChartsOption = {
        grid: {
            top: 20,
            bottom: 22,
            left: 0,
            right: 10,
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params: any) => {
                const data = params[0];
                return `${data.name}: ₹${data.value}`;
            },
        },
        xAxis: {
            type: 'category',
            data: [
                'Rent',
                'Petrol',
                'Bills',
                'Groceries',
                'Shopping',
                'Home',
                'Travel',
                'Other',
            ],
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        series: [
            {
                name: 'Daily Expenses',
                data: [12000, 4000, 2100, 2000, 1000, 5000, 2000, 1000],
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: '#5470C6',
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: (params: any) => `₹${params.value}`,
                    fontSize: 12,
                    color: '#000',
                },
            },
        ],

    };

    chartOption1: EChartsOption = {
        tooltip: {
            trigger: 'item',
            formatter: (params: any) => `${params.name}: ₹${params.value} (${params.percent}%)`
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: 'middle',
            itemGap: 10,
            data: ['Personal Loan', 'Car Loan', 'Home Loan', 'Gold Loan']
        },
        series: [
            {
                name: 'Loan Breakdown',
                type: 'pie',
                radius: '100%',
                center: ['70%', '50%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 7,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'outside',
                    formatter: (params: any) => `${params.name}\n₹${params.value}`
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 300000, name: 'Personal Loan' },
                    { value: 500000, name: 'Car Loan' },
                    { value: 250000, name: 'Home Loan' },
                    { value: 200000, name: 'Gold Loan' }
                ]
            }
        ]
    };


}
