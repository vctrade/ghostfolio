import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@ghostfolio/client/core/auth.guard';

import { HowDoIGetMyFinancesInOrderPageComponent } from './how-do-i-get-my-finances-in-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: HowDoIGetMyFinancesInOrderPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowDoIGetMyFinancesInOrderRoutingModule {}
