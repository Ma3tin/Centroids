import { Component } from '@angular/core';
import {CentroidService} from "./services/Centroid.service";
import {VectorModel} from "./models/Vector.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Centorids';
  x: number = 0;
  y: number = 0;
  centroidService: CentroidService = new CentroidService();
  isCLicked: boolean = false;
  centroid: VectorModel = new VectorModel()


  public addVector() {
    this.centroidService.addVector(this.x, this.y);
  }

  public calculateCentroid() {
    this.isCLicked = true;
    this.centroid = this.centroidService.calculateCentroid();
  }

  public hasAtLeastOneVector(): boolean {
    return this.centroidService.hasAtLeastOneVector();
  }
}
