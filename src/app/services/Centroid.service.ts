import {VectorModel} from "../models/Vector.model";

export class CentroidService {
  private listOfVectors: VectorModel[] = []

  public calculateCentroid():VectorModel {
    let centroid: VectorModel = new VectorModel()
    let x: number = 0;
    let y: number = 0;
    for (let i = 0; i < this.listOfVectors.length; i++) {
      x += this.listOfVectors[i].x
      y += this.listOfVectors[i].y
    }
    centroid.x = x / this.listOfVectors.length
    centroid.y = y / this.listOfVectors.length
    return centroid;
  }


  public addVector(x: number, y: number) {
    let newVector: VectorModel = new VectorModel()
    newVector.x = x
    newVector.y = y
    this.listOfVectors.push(newVector)
  }

  public hasAtLeastOneVector(): boolean {
    return this.listOfVectors.length > 0;
  }
}
