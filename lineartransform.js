// Trevor John 14th August 2016
// Linear transform object

var linearTransform = function ( _x0, _x1, _y0, _y1) {
	//load scaling parameters into object parameters
    this.x0 = _x0;
    this.x1 = _x1;
    this.y0 = _y0;
    this.y1 = _y1;
	//precalculate gradients and constants for each transform
    this._m1 = (this.y1 - this.y0)/(this.x1 - this.x0);
    this._m2 = (this.x1 - this.x0)/(this.y1 - this.y0);
	this._c1 = this.y0 - (this._m1 * this.x0);
	this._c2 = this.x0 - (this._m2 * this.y0);
};

// transforms are just y = mx + c etc.
// for conerting x to y use y = _m1*x + _c1
linearTransform.prototype.y = function(x) {
    return this._m1 * x + this._c1;
}
// for conerting y to x use x = _m2*y + _c2
linearTransform.prototype.x = function(y) {
    return this._m2 * y + this._c2;
}