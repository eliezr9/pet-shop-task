import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../pet-interface';
import { InMemoryDataServiceService } from '../services/in-memory-data-service.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  types = ["dog", "cat", "horse", "other"]

  pet: Pet = {
    id: 0,
    name: '',
    age: 0,
    type: this.types[3],
    color: true
  };

  newPetForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
    age: new FormControl("", [Validators.required, Validators.min(1)]),
    type: new FormControl(""),
    color: new FormControl("", [Validators.required])
  });

  constructor( private inMemoryDataServiceService: InMemoryDataServiceService) {
  }

  ngOnInit(): void {
  }

  saveForm() {
    let newPetName = this.newPetForm.controls["name"].value;
    let newPetAge = this.newPetForm.controls["age"].value;
    let newPetType = this.newPetForm.controls["type"].value;
    let newPetColor = this.newPetForm.controls["color"].value;

    this.pet.name = newPetName;
    this.pet.age = newPetAge;
    this.pet.type = newPetType;
    this.pet.color = newPetColor;

    if (this.newPetForm.valid) {
      this.addNewPet();
    }
  }

  addNewPet() {
    this.inMemoryDataServiceService.postPet(this.pet);
  }

}
