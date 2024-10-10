import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import {icon,Map,marker,tileLayer} from 'leaflet'
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  constructor(private placeService:PlacesService){

  }

  geo:any;
  map:any
  ngOnInit(){
    setTimeout(() => {
      console.log(this.placeService.useLocation)
      this.geo=this.placeService.useLocation
    }, 2000);
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.map=new  Map('map').setView(this.geo,13)
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }, 2000);
  }

  ubicar(){
    setTimeout(() => {
      marker(this.geo).addTo(this.map).bindPopup("<b>Ubicacion Actual</b>").openPopup()
    }, 2000);

  }
  recargar(){
    location.reload()
  }
}
