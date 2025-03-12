// Modify api-mapping.component.ts


// Import ApiService -->  This allows api-mapping Component to use the getData() method for fetching data.
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-mapping',
  standalone: false,
  templateUrl: './api-mapping.component.html',
  styleUrl: './api-mapping.component.css'
})
export class ApiMappingComponent implements OnInit {
  posts: any[] = [];  // Declare an empty array to store API data
  constructor(private apiService: ApiService) { }// Inject ApiService
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.posts = data; // Assign API response to the `posts` array

    }, (error) => {
      console.error('Error Fetching data', error); // Handle errors
    });
  }
}


// Modify api-mapping.component.html
