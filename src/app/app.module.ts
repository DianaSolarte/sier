import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PaginatePipe } from './pipes/paginate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { ModalComponent } from './modal/modal.component';



@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TableComponent,
    FooterComponent,
    NewsComponent,
    PaginatePipe,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
