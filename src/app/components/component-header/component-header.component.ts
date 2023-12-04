import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-component-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './component-header.component.html',
  styleUrl: './component-header.component.css'
})
export class ComponentHeaderComponent {

}
