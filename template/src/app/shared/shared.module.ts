import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TitleComponent} from '../layout/admin/title/title.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { SpinnerLoadComponent } from './spinner-load/spinner-load.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    SpinnerComponent,
    SpinnerLoadComponent,

  ],
  declarations: [
    TitleComponent,
    SpinnerComponent,
    SpinnerLoadComponent,
    
  
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
