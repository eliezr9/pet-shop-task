import { Injectable } from '@angular/core';
import { Pet } from '../pet-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService {

  constructor() { }

  pets: Pet[] = [
    { id: 1, name: 'Nugget', age: 1, type: "Dog", color: true },
    { id: 2, name: 'Tzahi', age: 6, type: "Cat", color: false },
    { id: 3, name: 'Bruno', age: 12, type: "Horse", color: true },
    { id: 4, name: 'Fifa', age: 3, type: "Other", color: false },
  ];

  genId(pets: Pet[]): number {
    return pets.length > 0 ? Math.max(...pets.map(pet => pet.id)) + 1 : 1;
  }

  getPets(): Pet[] {
    return this.pets
  }

  postPet(pet: Pet): void {
    pet.id = this.genId(this.pets);
    this.pets.push(pet);
  }
  
}
