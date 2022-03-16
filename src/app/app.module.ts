import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule} from "@angular/common/http";

import {MatTreeModule} from '@angular/material/tree';
import {TreeComponent} from './Tree/tree.component'


@NgModule({
    declarations: [
        AppComponent,
        TreeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatTreeModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}