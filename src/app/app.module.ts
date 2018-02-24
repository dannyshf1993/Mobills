import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotificationPage } from '../pages/notification/notification';
import { PopoverPage } from '../pages/popover/popover';
import { NewbudgetPage } from '../pages/newbudget/newbudget';
import { MorePage } from '../pages/more/more';
import { InputsService } from '../pages/service/inputs.services';
import { ExpensesPage } from '../pages/expenses/expenses';
import { IncomePage } from '../pages/income/income';
import { NewincomePage } from '../pages/newincome/newincome';
import { NewIncomesService } from '../pages/service/newincome.services';
import { CreditcardPage } from '../pages/creditcard/creditcard';
import { ChartsPage } from '../pages/charts/charts';
import { NewexpensePage } from '../pages/newexpense/newexpense';
import { NewExpensesService } from '../pages/service/newexpenses.services';
import { BudgetPage } from '../pages/budget/budget';
import { BudgetsService } from '../pages/service/budgets.services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NotificationPage,
    PopoverPage,
    NewbudgetPage,
    MorePage,
    IncomePage,
    ExpensesPage,
    NewincomePage,
    CreditcardPage,
    ChartsPage,
    NewexpensePage,
    BudgetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NotificationPage,
    PopoverPage,
    NewbudgetPage,
    MorePage,
    IncomePage,
    ExpensesPage,
    NewincomePage,
    CreditcardPage,
    ChartsPage,
    NewexpensePage,
    BudgetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InputsService,
    NewIncomesService,
    NewExpensesService,
    BudgetsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
