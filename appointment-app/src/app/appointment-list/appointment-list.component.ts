import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; `
`
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [
    {
      id: 1,
      title: 'Take dog for a walk',
      date: new Date('2023-07-30')
    },
    {
      id: 2,
      title: 'Buy groceries',
      date: new Date('2023-07-31')
    }
  ];

  addAppointment() {
    alert(this.newAppointmentTitle + ' ' + this.newAppointmentDate);
  }

}
