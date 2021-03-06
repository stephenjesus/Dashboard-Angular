import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './DemoPages/Elements/icons/icons.component';



// Tables

import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

// Charts


import { TopupComponent } from './topup/topup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewAllTopupRequestsComponent } from './view-all-topup-requests/view-all-topup-requests.component';
import { ViewAllOrderRequestsComponent } from './view-all-order-requests/view-all-order-requests.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      { path: '', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'topup', component: TopupComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'profile', component: ProfileComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'request', component: RequestComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'Regform', component: SignupComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'userdashboard', component: UserdashboardComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'view-all-topup-requests', component: ViewAllTopupRequestsComponent,data: { extraParameter: 'dashboardsMenu' } },
      { path: 'view-all-order-requests', component: ViewAllOrderRequestsComponent,data: { extraParameter: 'dashboardsMenu' } },






      // Elements

      { path: 'elements/buttons-standard', component: StandardComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/dropdowns', component: DropdownsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/icons', component: IconsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/cards', component: CardsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/list-group', component: ListGroupsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/timeline', component: TimelineComponent, data: { extraParameter: 'elementsMenu' } },


      // Tables

      { path: 'tables/bootstrap', component: TablesMainComponent, data: { extraParameter: 'tablesMenu' } },

      // Widgets

      { path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: { extraParameter: 'pagesMenu3' } },

      // Forms Elements

      { path: 'forms/controls', component: ControlsComponent, data: { extraParameter: 'formElementsMenu' } },

      { path: 'forms/layouts', component: LayoutComponent, data: { extraParameter: 'formElementsMenu' } },

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      { path: 'pages/login-boxed', component: LoginBoxedComponent, data: { extraParameter: '' } },
      { path: 'register-boxed', component: RegisterBoxedComponent, data: { extraParameter: '' } },
      { path: 'forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: { extraParameter: '' } },

    ]
  },
  { path: '**', redirectTo: 'pages/login-boxed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
