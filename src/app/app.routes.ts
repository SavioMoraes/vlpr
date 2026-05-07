import { Routes } from '@angular/router';
import { Home } from '../app/features/home/pages/home/home';
import { About } from '../app/features/about/pages/about/about';
import { Contact } from '../app/features/contact/pages/contact/contact';
import { Airbnb } from '../app/features/jobs/pages/airbnb/airbnb';
import { HouseCleaning } from '../app/features/jobs/pages/house-cleaning/house-cleaning';
import { ClosetOrganization } from './features/jobs/pages/personal-organizer/closet-organization/closet-organization';
import { InteriorOrganization } from './features/jobs/pages/personal-organizer/interior-organization/interior-organization';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact  
  },
  {
    path: 'jobs/airbnb',
    component: Airbnb
  },
  {
    path: 'jobs/house-cleaning',
    component: HouseCleaning
  },
  {
    path: 'jobs/personal-organizer/closet-organization',
    component: ClosetOrganization
  },
  {
    path: 'jobs/personal-organizer/interior-organization',
    component: InteriorOrganization
  },
  {
    path: '**',
    redirectTo: ''
  }
];