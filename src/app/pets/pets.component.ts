import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet-interface';
import { InMemoryDataServiceService } from '../services/in-memory-data-service.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];

  constructor ( private inMemoryDataServiceService: InMemoryDataServiceService) {
  }

  ngOnInit(): void {
    this.getPets()
  }

  getPets(): void {
    this.pets = this.inMemoryDataServiceService.getPets()
  }

}
