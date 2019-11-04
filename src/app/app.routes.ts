import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginLoginComponent } from './components/singin-login/singin-login.component';
import { MenuComponent } from './components/controlPanel/menu/menu.component';
import { ReceiptComponent } from './components/controlPanel/receipt/receipt.component';

const ROUTES: Routes = [
    { path: 'home', component: MenuComponent },
    { path: 'singin-login', component: SinginLoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'receipt', component: ReceiptComponent },
    { path: '**', component: MenuComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
