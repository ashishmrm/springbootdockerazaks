import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { CricBuzzService } from './service/cricbuzz.service';
import {CricBuzzResp} from './cricbuzzresp.model';
import {Observable} from 'rxjs/Observable';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IPL';
  teams: Team[] = [];
  positions = []
  teamAtGivenPosition: Team;
  order = true;

constructor(private cricBuzzService : CricBuzzService) {
  this.positions = Array(8).fill(0).map((x,i)=>i);
}

cricBuzzRespO: Observable<CricBuzzResp>;
cricBuzzResp: CricBuzzResp;

  ngOnInit() {
    this.teams = [
      {name: 'Chennai Super Kings', position: 2, 
       members: [{name: 'Saurabh Kumar', image: 'SK.png'}, {name: 'Varun Rastogi', image: 'VR.png'}, {name: 'Anand Dharmar', image: 'player.jpg'}, {name: 'Naveen', image: 'player.jpg'}, {name: 'Philip John', image: 'PJ.png'}],
       image: 'csk.png'},
      {name: 'Delhi Capitals', position: 5,
        members: [{name: 'Shilpi Jindal', image: 'SJ.png'}, {name: 'Monika Gupta', image: 'player.jpg'}, {name: 'Abhishek Seth', image: 'player.jpg'}, {name: 'Anurag Sinha', image: 'player.jpg'}, {name: 'Hiren Vaid', image: 'player.jpg'}],
        image: 'dc.jpg'},
      {name: 'Mumbai Indians', position: 6,
       members: [{name: 'Vivek Tiwari', image: 'VT.png'}, {name: 'Manish Gour', image: 'MG.png'}, {name: 'Ashish Agarwal', image: 'AA.png'}, {name: 'Colin Wilson', image: 'player.jpg'}, {name: 'Gaurav Pubreja', image: 'player.jpg'}],
       image: 'mi.jpg'},
      {name: 'Kolkata Knight Riders', position: 4, 
       members: [{name: 'Anoop Singh', image: 'AS.png'}, {name: 'Madhuri Korapati', image: 'MK.png'}, {name: 'Sudipta Das', image: 'player.jpg'}, {name: 'Debashree Biswas', image: 'player.jpg'}, {name: 'Jignesh Lad', image: 'player.jpg'}],
       image: 'kkr.png'},
      {name: 'Royal challengers Banglore', position: 8, 
       members: [{name: 'John Doran', image: 'JD.png'}, {name: 'Gautam Paul', image: 'GP.png'}, {name: 'Nikunj Patel', image: 'NP.png'}, {name: 'Vinod Devkar', image: 'player.jpg'}, {name: 'Basanth Renukarya', image: 'player.jpg'}],
       image: 'rcb.jpg'},
      {name: 'Kings XI Punjab', position: 1, 
       members: [{name: 'Dishant Sikka', image: 'player.jpg'}, {name: 'Shreya Gupta', image: 'SG.png'}, {name: 'Pratibha Sharma', image: 'player.jpg'}, {name: 'Nikita', image: 'player.jpg'}, {name: 'Vivek Basal', image: 'VB.png'}],
       image: 'kxip.png'},
      {name: 'Sun Risers Hyderabad', position: 3,
       members: [{name: 'Laura Morley', image: 'LM.png'}, {name: 'Nishant Kumar', image: 'player.jpg'}, {name: 'Gaurav Yadav', image: 'GY.png'}, {name: 'Bala Metikala', image: 'player.jpg'}, {name: 'Vishal Bhardwaj', image: 'player.jpg'}, {name: 'David Mitchell', image: 'player.jpg'}],
        image: 'srh.jpg'},
      {name: 'Rajasthan Royals', position: 7,
       members: [{name: 'Shilpi Jindal', image: 'SJ.png'}, {name: 'Amit Plawat', image: 'AP.png'}, {name: 'David Boast', image: 'DB.png'}, {name: 'Sadia Dibbens', image: 'SS.png'}, {name: 'Gaurav Rastogi', image: 'player.jpg'}],
       image: 'rr.jpg'}
    ];

    
    //this.cricBuzzRespO = this.cricBuzzService.getCurrentScore();
    /**interval(15000).pipe(
      startWith(0),
      switchMap((() => this.cricBuzzService.getCurrentScore()))
    ).subscribe(
      (scoreFromCricBuzz: CricBuzzResp) => {
        this.cricBuzzResp = scoreFromCricBuzz;
        console.log('Current Score is : ' + this.cricBuzzResp.matches[0].bat_team.innings[0].score);
        console.log(this.cricBuzzResp.matches[0].batsman.length);
      }
    );*/
  }

  getTeamAtPosition(position: number) {
    return this.teams.filter(team => team.position === position)[0];
  }

  reverseOrder() {
    this.order = !this.order;
if(this.order) {
  this.positions.sort((a,b) => a - b);
} else {
    this.positions.sort((a,b) => b - a);
  }
}
}
