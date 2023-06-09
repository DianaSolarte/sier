import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PaginatePipe } from './pipes/paginate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { ModalComponent } from './modal/modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { FormsModule } from '@angular/forms';
import { PostModalComponent } from './post-modal/post-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@NgModule({

  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
    FooterComponent,
    PaginatePipe,
    ModalComponent,
    EditModalComponent,
    PostModalComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    DataTablesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
