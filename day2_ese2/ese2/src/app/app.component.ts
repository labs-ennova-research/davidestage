import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ese2';

constructor(){
  
}
public events = [
  {
    name:'Academy day#1',
    date: '10/11/2021',
    time: '9am',
    location: {
      address: 'Via Giovanni Battista Pirelli, 30',
      città: 'Milano',
      nazione: 'IT'
    },
    durationInHours: 8,
},
{
name:'Academy day#2',
date: '11/11/2021',
time: '9am',
location: {
  address : 'Via Giovanni Battista Pirelli, 30',
  città: 'Milano',
  nazione: 'IT'
}, 
durationInHours: 8,
},
{
name:'Academy day#3',
date: '12/11/2021',
time: '9am', location: {
  address : 'Via Giovanni Battista Pirelli, 30',
  città: 'Milano',
  nazione: 'IT'
},
durationInHours: 8,
},
{
name:'Academy day#4',
date: '15/11/2021',
time: '9am',
location: {
  address : 'Via Giovanni Battista Pirelli, 30',
  città: 'Milano',
  nazione: 'IT'
},
durationInHours: 4,
}
]

}
