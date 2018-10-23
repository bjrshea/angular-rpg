import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'questionOne',
    component: QuestionOneComponent
  },
  {
    path: 'questionTwo',
    component: QuestionTwoComponent
  },
  {
    path: 'questionThree',
    component: QuestionThreeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
