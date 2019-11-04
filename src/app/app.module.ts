import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Kendo
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';

// Routes
import { AppRoutingModule } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { SinginLoginComponent } from './components/singin-login/singin-login.component';
import { MenuComponent } from './components/controlPanel/menu/menu.component';
import { NavbarComponent } from './components/controlPanel/navbar/navbar.component';
import { ReceiptComponent } from './components/controlPanel/receipt/receipt.component';
import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
    declarations: [
        AppComponent,
        SinginLoginComponent,
        MenuComponent,
        NavbarComponent,
        ReceiptComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        DropDownsModule,
        InputsModule,
        GridModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
