import { Component, AfterViewChecked, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
    ) {}

  ngAfterViewInit(): void {
    if( !this.placesService.useLocation ) throw Error('No hay placesServic.useLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.useLocation,
      zoom: 10,
      });



    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

      new Marker({ color: 'red'})
        .setLngLat( this.placesService.useLocation)
        .setPopup(popup)
        .addTo(map)

      this.mapService.setMap(map);








  }


}
