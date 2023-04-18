import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisesRoutingModule } from './crises-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from '../compose-message/compose-message/compose-message.component';


@NgModule({
  declarations: [CrisisListComponent
    , CrisisDetailComponent, CrisisCenterComponent, CrisisCenterHomeComponent, ComposeMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
   CrisesRoutingModule,
  ]
})
export class CrisesCenterModule { }
