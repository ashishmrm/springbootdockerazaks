import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
  @Input() team: Team;

  ngOnInit() {
    console.log(this.team.name);
  }

  teamBackgroundColor() {
    console.log('Got name : ' + this.team.name);
    switch (this.team.name) {
      case 'Delhi' :
        return {
          'teamDelhi': true
        };
      case 'Mumbai' :
        return {
          'teamMumbai': true
        };
        case 'Chennai' :
        return {
          'teamChennai': true
        };
      case 'Kolkata' :
        return {
          'teamKolkata': true
        };
        case 'Banglore' :
        return {
          'teamBanglore': true
        };
      case 'Punjab' :
        return {
          'teamPunjab': true
        };
      case 'Hyderabad' :
        return {
          'teamHyderabad': true
        };
    };
  }
}
