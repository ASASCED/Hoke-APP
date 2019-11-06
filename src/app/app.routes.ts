import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginLoginComponent } from './components/singin-login/singin-login.component';
import { MenuComponent } from './components/controlPanel/menu/menu.component';
import { ReceiptComponent } from './components/controlPanel/receipt/receipt.component';
import { ImportQuoteComponent } from './components/controlPanel/import-quote/import-quote.component';
import { LastMenuComponent } from './components/controlPanel/last-menu/last-menu.component';

const ROUTES: Routes = [
    { path: 'home', component: MenuComponent },
    { path: 'singin-login', component: SinginLoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'receipt', component: ReceiptComponent },
    { path: 'import-quote', component: ImportQuoteComponent },
    { path: 'last-menu', component: LastMenuComponent },
    { path: '**', component: MenuComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
