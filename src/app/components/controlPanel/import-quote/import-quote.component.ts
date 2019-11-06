import { Component, OnInit } from '@angular/core';

import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridDataResult,
    DataStateChangeEvent,
} from '@progress/kendo-angular-grid';

import { Router } from '@angular/router';

@Component({
    selector: 'app-import-quote',
    templateUrl: './import-quote.component.html',
    styleUrls: ['./import-quote.component.css'],
})
export class ImportQuoteComponent implements OnInit {
    public listItems: Array<string> = [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball',
    ];

    public state: State = {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
            logic: 'and',
            filters: [
                { field: 'ProductName', operator: 'contains', value: 'Chef' },
            ],
        },
    };

    public gridData: GridDataResult = process(sampleProducts, this.state);

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(sampleProducts, this.state);
    }

    constructor(private router: Router) {}

    ngOnInit() {}

    routeLastMenu() {
        this.router.navigate(['/last-menu']);
    }
}
