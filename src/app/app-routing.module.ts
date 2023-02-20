import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPetComponent } from './new-pet/new-pet.component';

import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'newPet', component: NewPetComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
