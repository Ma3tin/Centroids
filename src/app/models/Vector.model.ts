export class VectorModel {
  private _x: number = 0;
  private _y: number = 0;


  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }


  set x(value: number) {
    this._x = value;
  }

  set y(value: number) {
    this._y = value;
  }
}
