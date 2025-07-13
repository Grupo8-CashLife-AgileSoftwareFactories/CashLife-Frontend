import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {EducacionFinancieraComponent} from "./public/pages/educacion-financiera/educacion-financiera.component";
import {TasaCrediticiaComponent} from "./public/pages/tasa-crediticia/tasa-crediticia.component";
import {SignupComponent} from "./authentication/components/signup/signup.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {NgModule} from "@angular/core";
import {AddTransactionComponent} from "../cashlife/add-transaction/add-transaction.component";
import {RegisterDataComponent} from "../cashlife/register-data/register-data.component";
import {RegisterTransactionComponent} from "../cashlife/register-transaction/register-transaction.component";
import {AppRecomendationComponent} from "../cashlife/app-recomendation/app-recomendation.component";
import {ClientServiceComponent} from "../cashlife/client-service/client-service.component";
import {PlanSubscriptionComponent} from "../cashlife/plan-subscription/plan-subscription.component";
import {LandingPageComponent} from "../cashlife/landing-page/landing-page.component";
import {AboutUsComponent} from "../cashlife/landing-page/about-us/about-us.component";
import {PlansComponent} from "../cashlife/landing-page/plans/plans.component";
import {FaqComponent} from "../cashlife/landing-page/faq/faq.component";
import {HelpServiceComponent} from "../cashlife/landing-page/help-service/help-service.component";
import {FeaturesComponent} from "../cashlife/landing-page/features/features.component";
import {ContactsComponent} from "../cashlife/landing-page/contacts/contacts.component";

export const routes: Routes = [
  { path: 'landing', component: LandingPageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'help-service', component: HelpServiceComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '',redirectTo: 'landing', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'educacion-financiera', component: EducacionFinancieraComponent },
  { path: 'tasa-crediticia', component: TasaCrediticiaComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'register-data', component: RegisterDataComponent },
  { path: 'register-transaction', component: RegisterTransactionComponent },
  { path: 'app-recomendation', component: AppRecomendationComponent },
  { path: 'client-service', component: ClientServiceComponent },
  { path: 'suscription', component: PlanSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

