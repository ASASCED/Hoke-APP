import { Component, OnInit } from '@angular/core';

import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridDataResult,
    DataStateChangeEvent,
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-last-menu',
    templateUrl: './last-menu.component.html',
    styleUrls: ['./last-menu.component.css'],
})
export class LastMenuComponent implements OnInit {
    selector: number;

    constructor() {
        this.selector = 0;
    }

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

    ngOnInit() {}

    menuSelection(idx: number) {
        this.selector = idx;
    }
}
