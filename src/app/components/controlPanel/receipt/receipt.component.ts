import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
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

    constructor(private router: Router) {}

    ngOnInit() {}

    routeImportQuote() {
        this.router.navigate(['/import-quote']);
    }
}
