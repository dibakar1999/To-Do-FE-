import {Component} from '@angular/core';
import {faMobileAndroidAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  android = faMobileAndroidAlt;
}
