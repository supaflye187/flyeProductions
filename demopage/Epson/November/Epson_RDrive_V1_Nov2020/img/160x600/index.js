(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Epson_Logo = function() {
	this.initialize(img.Epson_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,48);


(lib.hallway = function() {
	this.initialize(img.hallway);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,340);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.Printer = function() {
	this.initialize(img.Printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,174);


(lib.printer_full_image = function() {
	this.initialize(img.printer_full_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,291);


(lib.printer_light = function() {
	this.initialize(img.printer_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,22);


(lib.printerRolls = function() {
	this.initialize(img.printerRolls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,172);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_onARoll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgYAdIAAg5IAxAAIAAA5g");
	this.shape.setTransform(-7.25,-313.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgZCIIAAkPIAzAAIAAEPg");
	this.shape_1.setTransform(-15.075,-323.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgZCIIAAkPIAzAAIAAEPg");
	this.shape_2.setTransform(-22.925,-323.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgmBlQgQgGgJgOQgJgNgEgVQgEgUAAgaQAAgaAFgUQAEgUAJgNQAKgOAPgHQAQgHAVAAQAXAAAQAGQAQAHAJAOQAJANAEAUQAEAVAAAaQAAAagFAUQgEAUgJANQgKAOgPAHQgQAGgWAAQgXAAgPgGgAgOhBQgGAFgDAKQgDAJAAAOIgBAcIABAcQAAAOADAJQADAKAGAFQAFAFAJAAQAQAAAGgQQAGgRAAgmQAAgmgGgRQgGgQgQAAQgJAAgFAFg");
	this.shape_3.setTransform(-35.325,-320.5518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("Ag1BpIAAjMIAyAAIAAAcIABAAQAHgPAMgJQALgJAQAAIAFAAIAFABIAAAyIgIgBIgJAAIgNACQgHACgGAEQgFAFgEAHQgCAHAAAKIAAB6g");
	this.shape_4.setTransform(-48.725,-320.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("Ag0BmQgJgFgHgIQgFgIgDgLQgDgKAAgLQAAgOADgKQAEgLAGgHQAGgHAKgFQAJgEAPgFIAcgIQALgDAGgFQAEgGAAgJQAAgMgFgHQgGgGgMAAQgNgBgFAIQgHAHAAAMIAAAFIgvAAIAAgEQAAgSAGgMQAFgMAKgIQAKgHANgDQANgDAPAAQAWAAAPAEQAPAFAHAJQAJAHACAMQADAMAAAOIAABqIABAWIAGARIgzAAIgDgKIgDgLIgBAAQgJAQgMAFQgLAFgTAAQgOAAgJgFgAALAHIgKADQgPAEgIAIQgGAIAAAOQAAALAEAJQAFAIALAAIAJgBQAGgCAFgEQAEgEAEgGQADgGAAgJIAAgng");
	this.shape_5.setTransform(-71.7,-320.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAZBpIAAiMQAAgQgGgHQgEgGgNAAQgaAAAAAiIAACHIg1AAIAAjMIAzAAIAAAYIAAAAQAJgPANgHQANgHARAAQAZAAANAOQAOANAAAfIAACXg");
	this.shape_6.setTransform(-96.8,-320.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgmBlQgQgGgJgOQgJgNgEgVQgEgUAAgaQAAgaAFgUQAEgUAJgNQAKgOAPgHQAQgHAVAAQAXAAAQAGQAQAHAJAOQAJANAEAUQAEAVAAAaQAAAagFAUQgEAUgJANQgKAOgPAHQgQAGgWAAQgXAAgPgGgAgOhBQgGAFgDAKQgDAJAAAOIgBAcIABAcQAAAOADAJQADAKAGAFQAFAFAJAAQAQAAAGgQQAGgRAAgmQAAgmgGgRQgGgQgQAAQgJAAgFAFg");
	this.shape_7.setTransform(-114.125,-320.5518);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AhCCHIAAgnIANACQAPgBAHgHQAFgIABgMIg5jMIA3AAIAdCNIACAAIAaiNIA0AAIgxC+QgHAZgGAQQgHAQgIAIQgHAJgNADQgLACgTAAg");
	this.shape_8.setTransform(-11.1,-360.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgZCIIAAkPIAzAAIAAEPg");
	this.shape_9.setTransform(-22.825,-366.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgqBhQgRgJgHgQQgIgPgCgUIgBgmQAAgUADgTQACgTAJgPQAJgPAPgJQARgIAZAAQAXAAAOAHQAPAHAJAOQAIAOADASQADAUAAAYIAAAKIhmAAIAAARIAAARIAFAQQADAGAFAEQAFAEAGAAQANAAAHgKQAFgJADgTIAvAAQgCAkgRASQgSATglAAQgcAAgPgKgAgLhDQgFADgDAHIgFAMIAAAPIAAAIIA0AAIgBgVQgCgIgDgGQgCgHgGgDQgFgEgIAAQgGABgGADg");
	this.shape_10.setTransform(-34.9,-363.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgDCCQgKgCgFgHQgFgGgCgKQgCgKAAgQIAAh0IgbAAIAAgkIAbAAIAAg6IA0AAIAAA6IAeAAIAAAkIgeAAIAABuQAAAMADAFQAEAFALAAIAGAAIAGgBIAAAlIgRAAIgRABQgPAAgJgCg");
	this.shape_11.setTransform(-47.975,-366.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgZCJIAAjLIAzAAIAADLgAgZhbIAAgtIAzAAIAAAtg");
	this.shape_12.setTransform(-56.925,-366.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AAZBpIAAiMQAAgQgFgHQgGgGgLAAQgbAAAAAiIAACHIg0AAIAAjMIAxAAIAAAYIACAAQAIgPANgHQAMgHARAAQAZAAAOAOQANANAAAfIAACXg");
	this.shape_13.setTransform(-69.75,-363.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgZCJIAAjLIAzAAIAADLgAgZhbIAAgtIAzAAIAAAtg");
	this.shape_14.setTransform(-82.525,-366.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgbCKIAAinIgbAAIAAgkIAbAAIAAgXQAAgOAEgKQAEgJAHgGQAHgFAJgDQAKgCANAAIAcABIAAAlIgFAAIgFAAQgLAAgFADQgEAEAAAJIAAASIAeAAIAAAkIgeAAIAACng");
	this.shape_15.setTransform(-91.375,-367.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgrBhQgQgJgHgQQgIgPgCgUIgBgmQAAgUADgTQADgTAIgPQAJgPAPgJQARgIAZAAQAXAAAOAHQAPAHAJAOQAIAOADASQADAUAAAYIAAAKIhnAAIAAARIABARIAFAQQADAGAFAEQAFAEAGAAQAOAAAFgKQAGgJADgTIAvAAQgBAkgSASQgSATglAAQgcAAgQgKgAgKhDQgGADgDAHIgFAMIgBAPIAAAIIA1AAIgBgVQgCgIgDgGQgCgHgGgDQgFgEgIAAQgGABgFADg");
	this.shape_16.setTransform(-104.55,-363.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AhABxQgPgZAAg5QAAg4APgZQAQgZAgAAQAOAAAKAGQAKAGAJAMIABAAIAAhWIA0AAIAAEPIgyAAIAAgWIgBAAQgJAOgKAGQgKAGgQAAQggAAgQgZgAgWgSQgEARAAAgQAAAiAEARQAGARAQAAQARAAAFgRQAFgRABgiQgBgggFgRQgFgRgRAAQgQAAgGARg");
	this.shape_17.setTransform(-121.85,-366.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgqBhQgRgKgHgPQgIgPgCgUIgBgmQAAgUADgTQACgTAJgPQAJgPAPgIQARgJAZAAQAXAAAOAHQAPAHAJAOQAIANADATQADAUAAAXIAAALIhmAAIAAAQIAAASIAFAQQADAGAFAEQAFAEAGAAQANAAAHgKQAFgJADgUIAvAAQgCAkgRATQgSATglAAQgcAAgPgKgAgLhDQgFAEgDAFIgFANIAAAPIAAAIIA0AAIgBgUQgCgKgDgGQgCgGgGgDQgFgDgIAAQgGAAgGADg");
	this.shape_18.setTransform(-26.8,-406.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("Ag1BpIAAjMIAyAAIAAAcIABAAQAHgPAMgJQALgJAQAAIAFAAIAFABIAAAyIgIgBIgJAAIgNACQgHACgGAEQgFAFgEAHQgCAHAAAKIAAB6g");
	this.shape_19.setTransform(-39.875,-406.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("Ag0BmQgKgFgFgIQgGgIgCgLQgDgLAAgKQAAgOADgLQADgKAGgIQAHgGAJgFQAJgFAOgDIAdgJQAMgCAEgGQAFgGAAgKQAAgLgGgHQgFgHgNABQgLAAgHAGQgGAIAAAMIAAAFIgvAAIAAgEQAAgSAGgMQAFgMAKgIQAKgHANgDQANgDAPAAQAXAAAOAEQAOAFAIAJQAIAHADAMQADAMAAAOIAABqIACAWIAEASIgxAAIgFgLIgCgLIgBAAQgJAQgMAFQgLAFgTAAQgNAAgKgFgAAMAHIgMAEQgPADgGAIQgHAIAAANQAAAMAFAJQAEAIAKAAIALgCQAFgCAFgDQAFgEADgGQADgGAAgJIAAgng");
	this.shape_20.setTransform(-55,-406.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgrBhQgQgKgHgPQgIgPgCgUIgBgmQAAgUADgTQADgTAIgPQAJgPAPgIQARgJAZAAQAXAAAOAHQAPAHAJAOQAIANADATQADAUAAAXIAAALIhnAAIAAAQIABASIAFAQQADAGAFAEQAFAEAGAAQAOAAAFgKQAGgJADgUIAvAAQgBAkgSATQgSATglAAQgcAAgQgKgAgKhDQgGAEgDAFIgFANIgBAPIAAAIIA1AAIgBgUQgCgKgDgGQgCgGgGgDQgFgDgIAAQgGAAgFADg");
	this.shape_21.setTransform(-79.35,-406.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AAfCIIgfjEIAAAAIgeDEIg9AAIgxkPIA0AAIAeDIIABAAIAgjIIAzAAIAgDIIABAAIAejIIA0AAIgxEPg");
	this.shape_22.setTransform(-101.325,-409.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-202.5,-434.6,270.1,134.70000000000005), null);


(lib.txt_inchRoll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape.setTransform(-3.575,-376.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgZBeIALgXQAFgLADgLQADgMABgMQABgLAAgNQAAgNgBgMQgBgMgDgLQgDgMgFgKQgEgMgHgMIAXAAQAOAZAHAXQAHAYAAAWQAAAVgHAYQgHAXgOAZg");
	this.shape_1.setTransform(-9.475,-380.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgOBLIAAiVIAcAAIAACVg");
	this.shape_2.setTransform(-14.3,-382.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgOBLIAAiVIAcAAIAACVg");
	this.shape_3.setTransform(-19.05,-382.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgUA4QgJgEgGgHQgEgIgCgLQgDgLAAgPQAAgNADgLQACgLAFgIQAGgHAIgEQAJgEALAAQANAAAJADQAIAEAFAIQAFAHACALQACALAAAOQABAPgDALQgCALgGAHQgEAIgJAEQgJADgMAAQgMAAgIgDgAgIgjQgDACgBAGQgCAFAAAHIAAAPIAAAQQAAAIACAFQABAFADADQAEADAEAAQAJAAADgJQADgKAAgVQAAgUgDgJQgDgJgJAAQgEAAgEADg");
	this.shape_4.setTransform(-26.3,-380.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgdA6IAAhwIAcAAIAAAPIABAAQADgIAGgFQAHgFAJAAIACAAIADABIAAAbIgFAAIgEAAIgIABQgEABgDACQgDADgCADQgBAEAAAGIAABDg");
	this.shape_5.setTransform(-34.125,-380.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAOBLIAAhNQAAgJgDgDQgDgEgGAAQgPABAAARIAABLIgdAAIAAiVIAdAAIAAAwIABAAQAIgOASAAQAOAAAHAIQAIAHAAARIAABTg");
	this.shape_6.setTransform(-47.8,-382.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgSA4QgIgCgFgHQgGgHgDgLQgCgMAAgRQAAgQADgMQADgLAHgHQAGgHAIgCQAIgDAKAAQAUAAAKAMQAKALAAAUIgcAAIAAgIIgCgHQgBgDgDgCQgCgCgFAAQgEAAgDACQgEADgBAEQgCAFgBAHIAAAQIAAASQABAIACAFQABAFADACQADACAEAAQAIAAADgGQADgHAAgOIAcAAQAAAXgKALQgKAMgXAAQgKAAgIgDg");
	this.shape_7.setTransform(-57.625,-380.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AAOA6IAAhNQAAgJgDgDQgDgEgGAAQgPABAAASIAABKIgdAAIAAhwIAcAAIAAANIABAAQAEgIAHgEQAGgEAKAAQAOAAAHAIQAIAHAAARIAABTg");
	this.shape_8.setTransform(-67.5,-380.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgNBMIAAhwIAcAAIAABwgAgNgyIAAgZIAcAAIAAAZg");
	this.shape_9.setTransform(-75,-382.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgdAMIAAgXIA7AAIAAAXg");
	this.shape_10.setTransform(-81.125,-381.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AAGBKIAAgfIg1AAIAAgYIAxhcIAfAAIAABdIAPAAIAAAXIgPAAIAAAfgAgXAUIAdAAIAAg4IgBAAg");
	this.shape_11.setTransform(-89.75,-382.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgYBGQgKgGgFgJQgEgJgCgOQgBgMgBgOIABgdQABgPAFgMQAFgLAKgHQAKgHASAAQAHABAIABQAHACAGAEQAGAFADAHQAEAHAAALIgdAAQAAgJgDgEQgEgFgHAAQgFAAgEADQgDACgCAGQgCAFAAAHIgCAPIAAAHIABAAQAEgGAHgDQAGgDAKgBQAKABAHADQAGADAFAGQAFAHABAHQADAIAAALQAAAagMANQgLANgZAAQgQAAgIgFgAgLAFQgEAGAAAQIABAMIACAJQACAEAEACQADACAEAAQAFAAADgCQAEgCABgEIACgJIABgMQAAgQgDgGQgEgGgJAAQgJAAgDAGg");
	this.shape_12.setTransform(-99.55,-382.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AAbBLIgHggIgnAAIgHAgIggAAIAoiVIAlAAIAnCVgAAOASIgOhCIAAAAIgOBCIAcAAg");
	this.shape_13.setTransform(-114.9,-382.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAEBeQgPgZgHgXQgHgYAAgVQAAgWAHgYQAHgXAPgZIAWAAQgHAMgEAMQgFAKgDAMQgDALgBAMQgBAMAAANQAAANABALQABAMADAMIAIAWIALAXg");
	this.shape_14.setTransform(-123.075,-380.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-199,-397.3,270.1,28.900000000000034), null);


(lib.txt_Immediatelamination = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(-8.075,45.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAUBVIAAhxQAAgNgEgFQgEgGgKAAQgVABAAAbIAABtIgrAAIAAilIAoAAIAAATIABAAQAHgMALgGQAKgGANAAQAVAAALAMQAMAKAAAaIAAB6g");
	this.shape_1.setTransform(-19.05,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_2.setTransform(-33.725,39.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(-44.35,36.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgCBqQgIgCgFgFQgEgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgNAAgGgCg");
	this.shape_4.setTransform(-52.05,36.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(-63.775,39.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAUBVIAAhxQABgNgFgFQgEgGgKAAQgVABAAAbIAABtIgrAAIAAilIAoAAIAAATIACAAQAGgMALgGQAKgGANAAQAVAAALAMQALAKAAAaIAAB6g");
	this.shape_6.setTransform(-78.35,39.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_7.setTransform(-89.3,36.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AA9BVIAAhzQAAgKgEgGQgEgFgJgBQgKABgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgKgEgGQgEgFgJgBQgKABgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgFQAKgEAOgBQAPABAJAGQAKAHADANIABAAQAFgNALgHQALgHAPAAQAVAAAKANQAKANAAAYIAAB4g");
	this.shape_8.setTransform(-104.225,39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_9.setTransform(-123.025,39.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIAqAAIAADdg");
	this.shape_10.setTransform(-133.55,36.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_11.setTransform(-18.175,0.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgDBqQgIgCgDgFQgFgFgCgIQgBgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_12.setTransform(-29.35,-1.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_13.setTransform(-41.075,0.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_14.setTransform(-51.6,-2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgUQAMgVAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhGIArAAIAADcIgpAAIAAgRIgBAAQgHALgIAFQgIAEgNABQgbAAgMgVgAgSgOQgEAOAAAZQAAAcAEAOQAFANANAAQAOAAAEgNQAEgOAAgcQAAgZgEgOQgEgOgOAAQgNAAgFAOg");
	this.shape_15.setTransform(-62.725,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_16.setTransform(-76.975,0.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA9BWIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAIQAKAGADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB4g");
	this.shape_17.setTransform(-95.375,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAIQAKAGADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB4g");
	this.shape_18.setTransform(-118.325,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgVBvIAAjdIAsAAIAADdg");
	this.shape_19.setTransform(-133.5,-2.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-214.3,-22.8,279.6,79.3), null);


(lib.txt_consistentQuality = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(-4.425,49.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(-14.025,45.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBqQgIgCgDgFQgFgFgCgIQgBgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_2.setTransform(-24.4,40.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(-31.75,40.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgVBvIAAjdIAqAAIAADdg");
	this.shape_4.setTransform(-38.15,40.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(-48.425,43.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IAsAAIAAByQgBANAFAFQAEAFAKAAQAVAAAAgbIAAhuIArAAIAACmIgoAAIAAgUIgCAAQgGANgLAFQgKAFgNAAQgVAAgLgLg");
	this.shape_6.setTransform(-62.5,43.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AAWBwIAAhFIAAAAQgHAKgJAFQgHAEgMAAQgbAAgMgUQgMgUAAguQAAguAMgVQAMgUAbAAQANAAAIAFQAIAFAHAMIABAAIAAgSIApAAIAADbgAgShBQgEAOAAAbQAAAbAEANQAFAOANAAQAOAAAEgOQAEgNAAgbQAAgbgEgOQgEgNgOAAQgNAAgFANg");
	this.shape_7.setTransform(-77.175,45.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAIgHQAKgIAOABIADAAIAEAAIAAApIgHgBIgHAAIgLACQgFABgFAEQgEADgDAGQgCAGAAAJIAABjg");
	this.shape_8.setTransform(-94.65,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_9.setTransform(-106.875,43.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIArAAIAADdg");
	this.shape_10.setTransform(-117,40.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_11.setTransform(-127.125,43.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_12.setTransform(-140.725,43.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_13.setTransform(-18.35,2.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBVIAAhxQABgNgFgFQgEgGgKAAQgVABAAAbIAABtIgrAAIAAilIAoAAIAAATIACAAQAGgMALgGQAKgGANAAQAVAAALAMQALAKAAAaIAAB6g");
	this.shape_14.setTransform(-29.75,4.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_15.setTransform(-43.675,4.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_16.setTransform(-54.35,2.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgdBUQgMgEgHgHQgHgGgDgKQgDgKAAgMIAAgGIAnAAIAAAGQAAALAGAGQAFAHALAAQAJAAAGgFQAGgFAAgKQAAgIgFgEQgEgEgHgDIgdgLQgRgGgJgKQgJgLAAgSQAAgKADgKQADgJAIgGQAHgHAMgEQAMgEAPAAQAdAAAOAMQAOAMAAAXIAAAHIgmAAQAAgNgFgGQgEgGgKAAQgHAAgGAEQgGAFAAAJQAAAGADAFQAEAFALADIAZAJQAUAHAIAKQAJALAAATQAAANgFAKQgFAKgIAGQgIAHgLACQgMADgNAAQgRAAgMgDg");
	this.shape_17.setTransform(-64.875,4.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_18.setTransform(-74.45,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgdBUQgMgEgHgHQgHgGgDgKQgDgKAAgMIAAgGIAnAAIAAAGQAAALAGAGQAFAHALAAQAJAAAGgFQAGgFAAgKQAAgIgFgEQgEgEgHgDIgdgLQgRgGgJgKQgJgLAAgSQAAgKADgKQADgJAIgGQAHgHAMgEQAMgEAPAAQAdAAAOAMQAOAMAAAXIAAAHIgmAAQAAgNgFgGQgEgGgKAAQgHAAgGAEQgGAFAAAJQAAAGADAFQAEAFALADIAZAJQAUAHAIAKQAJALAAATQAAANgFAKQgFAKgIAGQgIAHgLACQgMADgNAAQgRAAgMgDg");
	this.shape_19.setTransform(-84.025,4.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAVBVIAAhxQgBgNgEgFQgEgGgKAAQgVABgBAbIAABtIgrAAIAAilIApAAIAAATIABAAQAHgMALgGQAKgGAOAAQAUAAALAMQAMAKAAAaIAAB6g");
	this.shape_20.setTransform(-97.65,4.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_21.setTransform(-111.825,4.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AglBqQgOgIgIgPQgIgPgDgVQgCgVAAgZQAAgZACgVQADgVAIgQQAIgPAOgIQAPgIAYAAQAYAAAOAHQAOAIAHAMQAGAMACAOIACAaIgtAAQAAgZgFgLQgGgLgPAAQgIAAgFAEQgGAFgDAKQgDAKgBARIgBAnQAAAZABAPQACAPAEAJQADAIAGADQAFAEAGAAQAGAAAFgCQAFgDAEgFQAEgHACgKQACgMAAgRIAtAAQAAARgDAQQgDARgHALQgIAMgOAIQgOAGgWAAQgYAAgPgIg");
	this.shape_22.setTransform(-126.475,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-151.9,-18.8,154.20000000000002,79.3), null);


(lib.txt_AmazingProductivity = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(-3.925,40.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(-14.025,37.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBqQgIgCgEgFQgEgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQADAFAJAAIAFgBIAFAAIAAAeIgOAAIgOABQgNAAgHgCg");
	this.shape_2.setTransform(-24.9,32.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(-32.75,31.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXBTIgrilIAsAAIAXB2IABAAIAWh2IArAAIgpClg");
	this.shape_4.setTransform(-42.825,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_5.setTransform(-52.9,31.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgCBqQgIgCgFgFQgEgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgNAAgGgCg");
	this.shape_6.setTransform(-60.6,32.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_7.setTransform(-71.925,34.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IAsAAIAAByQgBANAFAFQAEAFAKAAQAVAAAAgbIAAhuIArAAIAACmIgoAAIAAgUIgCAAQgGANgLAFQgKAFgNAAQgVAAgLgLg");
	this.shape_8.setTransform(-86.35,34.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag0BcQgMgUAAguQAAguAMgVQAMgUAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhHIArAAIAADdIgpAAIAAgSIgBAAQgHAMgIAFQgIAFgNgBQgbAAgMgUgAgSgPQgEAPAAAaQAAAbAEANQAFAOANABQAOgBAEgOQAEgNAAgbQAAgagEgPQgEgNgOAAQgNAAgFANg");
	this.shape_9.setTransform(-101.525,32.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_10.setTransform(-116.025,34.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgrBVIAAilIApAAIAAAWIABAAQAFgMAKgIQAJgGANgBIAEAAIAEABIAAApIgGgBIgHAAIgLACQgGACgFADQgEADgDAGQgCAGAAAIIAABjg");
	this.shape_11.setTransform(-127.45,34.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhABwIAAjbIApAAIAAASIABAAQAHgMAIgFQAIgFANAAQAbAAAMAUQAMAVAAAuQAAAugMAUQgMAUgbAAQgMAAgHgEQgJgFgHgKIAAAAIAABFgAgRhBQgEAOAAAbQAAAbAEANQAEAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgEANg");
	this.shape_12.setTransform(-140.325,37.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgvBmQgOgLAAgWIApAAQAAAIAGAFIAHADIAHABQANAAAFgIQAFgJAAgMIAAgWIgBAAQgGAJgKAGQgIAFgKABQgagBgMgSQgNgUAAgtIABgeQACgPAFgMQAGgMAKgIQALgHARgBQAJAAAJAGQAJAFAGANIABAAIAAgUIApAAIAACeQAAAggQAQQgQARgkgBQgcAAgPgLgAgKhNQgEAEgDAGQgCAIgBALIgBAcIABAQQABAHACAHQADAFAEAEQAEAEAGAAQAHAAAEgEQAFgEACgFQADgHABgIIABgTQAAgfgFgMQgFgMgMAAQgGAAgFACg");
	this.shape_13.setTransform(-30.175,-1.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBWIAAhzQABgMgFgGQgEgEgKAAQgWAAABAbIAABuIgsAAIAAinIAqAAIAAAUIABAAQAGgMALgGQAKgFANgBQAVAAALALQALAMAAAZIAAB7g");
	this.shape_14.setTransform(-44.95,-4.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgVBwIAAimIArAAIAACmgAgVhKIAAglIArAAIAAAlg");
	this.shape_15.setTransform(-55.9,-6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("Ag6BUIAAgiIBChiIg/AAIAAgjIBxAAIAAAhIhBBjIBBAAIAAAjg");
	this.shape_16.setTransform(-65.7,-3.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_17.setTransform(-79.375,-3.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgLgEgFQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAIQAKAGADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB4g");
	this.shape_18.setTransform(-97.925,-4.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAoBvIgLgvIg5AAIgLAvIguAAIA6jdIA3AAIA6DdgAAWAbIgWhiIAAAAIgVBiIArAAg");
	this.shape_19.setTransform(-117.725,-6.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-214.3,-27.3,279.6,79.3), null);


(lib.SureColor_lockup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape.setTransform(-21.725,60.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgdBDQgKgHgFgLQgGgKgBgNIgBgaQAAgOACgNQACgNAGgKQAFgKAMgGQAKgGASAAQAPAAAKAFQAKAFAFAJQAHAJABANQACAOABAQIAAAHIhGAAIAAALIABAMIACAKQACAFAEADQADACAFAAQAIAAAEgGQAEgHADgNIAfAAQAAAZgMAMQgNANgZAAQgSAAgMgGgAgHgtQgEACgCAEIgCAJIgBAKIAAAFIAkAAIgCgOQgBgGgCgEQgCgEgDgDQgDgCgGAAQgFAAgDADg");
	this.shape_1.setTransform(-31.85,60.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgCBZQgHgBgDgFQgEgEgBgHIgBgSIAAhPIgTAAIAAgYIATAAIAAgpIAiAAIAAApIAWAAIAAAYIgWAAIAABLQAAAIADADQACAEAJAAIADAAIAFgBIAAAZIgMABIgMAAQgLAAgFgBg");
	this.shape_2.setTransform(-40.85,58.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AARBIIAAhgQAAgLgDgEQgEgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAJgFQAIgFAMAAQASAAAJAKQAJAJAAAVIAABng");
	this.shape_3.setTransform(-50.5,60.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_4.setTransform(-59.35,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgkBIIAAiLIAjAAIAAATIAAAAQAFgLAHgGQAIgGALAAIAEAAIADABIAAAiIgGAAIgFAAIgKABQgEABgEADQgEADgDAFQgBAFAAAHIAABTg");
	this.shape_5.setTransform(-65.475,60.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("Ag5BdIAAi5IBAAAQAPAAAJAFQAKAFAGAIQAGAHADAKQACAKAAALQAAAOgEALQgEAKgIAGQgIAHgLADQgLAEgMAAIgUAAIAABKgAgUgIIARAAQAKAAAHgHQAHgGAAgPQAAgOgGgHQgGgHgNAAIgQAAg");
	this.shape_6.setTransform(-75.925,58.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AARBIIAAhgQAAgLgDgEQgEgEgIAAQgSAAAAAXIAABcIgkAAIAAiLIAiAAIAAAQIABAAQAFgKAKgFQAIgFALAAQARAAAKAKQAJAJAAAVIAABng");
	this.shape_7.setTransform(-94.25,60.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgRBeIAAiLIAjAAIAACLgAgRg+IAAgfIAjAAIAAAfg");
	this.shape_8.setTransform(-103.1,58.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgYBGQgKgDgGgFQgGgGgCgIQgDgIAAgLIAAgEIAgAAIAAAEQAAAJAFAGQAFAFAJAAQAIAAAEgEQAFgEAAgIQAAgHgEgDQgDgEgGgCIgYgJQgPgFgHgJQgIgJAAgPQAAgJADgHQADgIAGgGQAHgFAJgEQAKgDANAAQAYAAAMAKQAMAKAAAUIAAAFIghAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADAEAJADIAVAHQARAGAHAIQAHAJAAAQQAAALgEAIQgEAJgHAFQgHAFgJADQgKACgLAAQgOAAgKgDg");
	this.shape_9.setTransform(-111.175,60.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgdBDQgKgHgFgLQgGgKgBgNIgBgaQgBgOADgNQABgNAHgKQAFgKAMgGQAKgGARAAQAQAAAKAFQAKAFAGAJQAFAJACANQADAOAAAQIAAAHIhGAAIAAALIABAMIACAKQACAFAEADQAEACAEAAQAIAAAEgGQAFgHACgNIAfAAQgBAZgMAMQgMANgZAAQgSAAgMgGgAgHgtQgEACgCAEIgCAJIgBAKIAAAFIAkAAIgCgOQAAgGgDgEQgBgEgEgDQgDgCgGAAQgEAAgEADg");
	this.shape_10.setTransform(-122.2,60.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AAXBdQgDgEgCgFIgBgLIgBgjQAAgLgFgGQgFgHgKAAIgVAAIAABPIglAAIAAi5IBEAAQAXAAANAMQANAMAAAYQABATgIALQgHAMgRADIAAAAQAOACAHAHQAGAHACAQIABALIAAAOIACAXQABAHAGADIAAACgAgZgLIAQAAQAMAAAIgGQAHgHAAgPQAAgZgZAAIgSAAg");
	this.shape_11.setTransform(-134.3,58.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgSAtQgIgEgHgHQgGgHgEgIQgEgJAAgKQAAgJAEgJQAEgJAGgGQAHgHAIgEQAJgDAJAAQAKAAAJADQAJAEAGAHQAHAGAEAJQADAJAAAJQAAAKgDAJQgEAIgHAHQgGAHgJAEQgJADgKAAQgJAAgJgDgAgMgeQgGACgFAFQgEAFgDAGQgCAGAAAGQAAAHACAHQADAFAEAGQAFAEAGADQAGACAGABQAIgBAGgCQAGgDAEgEQAFgGACgFQADgHAAgHQAAgGgDgGQgCgGgFgFQgEgFgGgCQgGgEgIAAQgGAAgGAEgAAJAaIgLgVIgEAAIAAAVIgMAAIAAgzIAUAAQAKAAAFAFQAFAEAAAHQAAAHgEACQgEAEgFABIANAVgAgGgDIAIAAIAGgBQACgCAAgDIgBgEIgCgCIgDgBIgEAAIgGAAg");
	this.shape_12.setTransform(-35.275,0.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgZBSQgKgEgGgKQgGgJgDgQQgCgQAAgWIABgiQABgQAFgMQAFgNALgIQALgHASAAQAPAAALAEQAKAFAGAKQAGAJADAQQACAQAAAWIgBAhQgBARgGAMQgFANgLAHQgKAHgTAAQgPAAgKgEgAgIg8QgEADgCAHQgCAGgBALIgBAcIAAARIABAaQABAKACAGQACAGAEACQADADAFAAQAGAAADgDQAEgDACgHQACgGABgLIABgcIAAgRIgBgaQgBgKgCgGQgCgGgEgCQgEgDgFAAQgFAAgDADg");
	this.shape_13.setTransform(-58.475,31.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AghBTQACgPAEgRQAEgRAGgRQAGgRAJgSQAJgSAMgRIhGAAIAAgdIBnAAIAAAaQgKAPgJARQgIARgGARQgGASgFATQgEASgCASg");
	this.shape_14.setTransform(-70.225,31.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgZBSQgKgEgGgKQgGgJgDgQQgCgQAAgWIABgiQABgQAFgMQAFgNALgIQALgHASAAQAPAAALAEQAKAFAGAKQAGAJADAQQACAQAAAWIgBAhQgBARgGAMQgFANgLAHQgKAHgTAAQgPAAgKgEgAgIg8QgEADgCAHQgCAGgBALIgBAcIAAARIABAaQABAKACAGQACAGAEACQADADAFAAQAGAAADgDQAEgDACgHQACgGABgLIABgcIAAgRIgBgaQgBgKgCgGQgCgGgEgCQgEgDgFAAQgFAAgDADg");
	this.shape_15.setTransform(-81.975,31.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgbBRQgKgFgGgHQgFgHgCgIIgBgQIAAgEIAhAAIAAAJIACAJQACAEAEACQADAEAGAAQAJAAAFgJQAFgIAAgRIgBgRQgBgIgDgDQgCgDgEgCQgEgCgEAAQgIAAgEAFQgEADgBAHIgfAAIAHhbIBXAAIAAAbIg9AAIgEAmIAAAAQAFgHAIgCQAHgEALAAQAMAAAIAFQAIAFAFAHQAEAIACAIQACALAAAJQAAAOgCAMQgDALgGAJQgGAJgKAEQgLADgPAAQgQAAgKgDg");
	this.shape_16.setTransform(-93.825,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAUBWQgCgEgBgFIgBgJIAAghQgBgKgFgGQgEgGgKAAIgSAAIAABJIgjAAIAAirIA/AAQAWAAAMALQALALABAXQAAARgIALQgGALgPACIAAAAQANACAGAHQAGAGACAPIAAAKIABANIABAVQACAHAEACIAAACgAgWgKIAOAAQALAAAHgGQAHgGAAgNQAAgYgXAAIgQAAg");
	this.shape_17.setTransform(-106.05,31.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AghBCIAAiAIAgAAIAAARQAFgJAGgGQAIgFAKAAIADAAIADAAIAAAgIgFAAIgFgBIgJACQgEABgEADQgEACgCAFQgBAEAAAHIAABMg");
	this.shape_18.setTransform(-44.85,6.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgXBAQgLgEgGgIQgFgJgDgNQgCgNAAgRQAAgPADgNQADgNAFgIQAHgJAKgEQAJgFANAAQAPAAAKAEQAJAEAGAJQAGAJADANQACANAAAPQAAARgCAMQgEANgFAJQgHAJgJADQgKAEgOAAIgCABQgNAAgIgEgAgJgpQgDAEgCAGIgCAOIAAARIAAASIACAPQACAGADAEQAEADAFAAQAKAAAEgLQAEgKAAgZQAAgXgEgLQgEgKgKAAQgFAAgEADg");
	this.shape_19.setTransform(-55.35,6.2503);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_20.setTransform(-64.225,4.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgXBAQgLgEgFgIQgGgJgCgNQgDgNAAgRQAAgPADgNQADgNAGgIQAFgJALgEQAJgFANAAQAPAAAKAEQAJAEAHAJQAFAJADANQACANAAAPQAAARgCAMQgEANgFAJQgHAJgJADQgKAEgOAAIgCABQgNAAgIgEgAgJgpQgDAEgCAGIgCAOIgBARIABASIACAPQACAGADAEQAEADAFAAQAKAAAEgLQAEgKAAgZQAAgXgEgLQgEgKgKAAQgFAAgEADg");
	this.shape_21.setTransform(-73.1,6.2503);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgcBTQgLgHgHgLQgGgMgCgQQgBgRAAgTQAAgTABgQQACgRAGgMQAHgMALgGQALgGATAAQASAAALAFQALAGAFAJQAFAKACAKIABAVIgjAAQAAgTgEgIQgEgJgMAAQgGAAgEADQgEAEgDAHQgCAJgBAMIgBAeQAAATACAMQABAMADAGQACAIAFABQAEADAEAAQAFAAAEgBQAEgCADgFQADgEABgJQACgJAAgNIAiAAQAAANgCANQgCAMgGAKQgGAJgKAGQgLAEgRAAQgTAAgLgFg");
	this.shape_22.setTransform(-85.475,4.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AgbA+QgJgHgFgJQgFgKgBgMIgBgYQAAgMABgNQADgMAFgJQAFgJAKgGQALgGAPAAQAPAAAIAFQAKAFAFAIQAGAJACAMQACAMAAAPIAAAHIhBAAIAAAKIABALIACAJIAGAIQADACADAAQAIAAAFgGQADgGABgNIAfAAQgBAXgMAMQgKAMgZgBQgQAAgLgFgAgGgqQgEADgCAEIgCAIIgBAJIAAAFIAgAAIgBgNQAAgGgCgEQgCgEgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_23.setTransform(-97.75,6.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AghBCIAAiAIAgAAIAAARQAEgJAIgGQAGgFALAAIADAAIADAAIAAAgIgFAAIgGgBIgIACQgFABgDADQgDACgCAFQgCAEAAAHIAABMg");
	this.shape_24.setTransform(-107,6.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AgnA6QgJgJAAgTIAAhfIAhAAIAABYQAAAKAEAEQADAEAHAAQARAAAAgVIAAhVIAhAAIAACAIggAAIAAgPQgFAKgJAEQgIAEgKAAQgQAAgIgIg");
	this.shape_25.setTransform(-117.75,6.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AgrBMQgNgNAAgYIAAgHIAiAAIAAAGIABALQABAEADAEQADADAEACQAEACAGAAQAIAAAGgFQAHgGAAgKQAAgGgCgEQgCgFgDgDQgDgDgHgDIgNgGQgLgDgJgFQgIgFgGgFQgFgFgDgJQgDgIAAgLQAAgZAOgMQAOgMAZAAQAKgBAKADQAKADAIAFQAGAGAEAJQAEAIABANIAAAEIgiAAQAAgMgEgHQgEgGgKAAQgGAAgDACQgEABgDADIgCAGIgBAIQAAAHADAGQAEAGALAEIAZAMQAKAEAGAEQAHAEADAGQAEAFABAGQACAHAAAIQAAAbgQAMQgPAMgbAAQgeAAgMgMg");
	this.shape_26.setTransform(-130.2,4.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-159.5,-12.3,158.5,87.8), null);


(lib.printer_rolls = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.printerRolls();
	this.instance.setTransform(-42,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_rolls, new cjs.Rectangle(-42,-86,84,172), null);


(lib.printer_light_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.printer_light();
	this.instance.setTransform(-81.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_light_1, new cjs.Rectangle(-81.5,-11,163,22), null);


(lib.image_strip_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(87.525,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-134,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_03, new cjs.Rectangle(41,-148.5,92,291), null);


(lib.image_strip_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-0.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-133.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_02, new cjs.Rectangle(-47.5,-148.5,93.1,291), null);


(lib.image_strip_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-89.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-130.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_01, new cjs.Rectangle(-130.5,-148.5,87.1,291), null);


(lib.image_03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_03();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.image_02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_02();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.image_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_01();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.hallway_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hallway();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,160,340), null);


(lib.epson_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Epson_Logo();
	this.instance.setTransform(-67,-29,0.7958,0.7958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-67,-29,104.3,38.2), null);


(lib.ctaBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape.setTransform(61.025,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_1.setTransform(47.475,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAfABAWAVQAXAXAAAeQAAAggXAVQgWAXgfAAQgfAAgWgXgAghghQgOAOAAATQAAAUAOAOQAOAPATAAQAUAAAOgPQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_2.setTransform(31.275,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIglhSIgBAAIgMBOQAAADgEABIgSAAQgFgBABgEIAZiNQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAEAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIAuBiIAAAAIAuhiQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAZCNQABAEgFABIgTAAQgDgBgBgDIgMhOIgBAAIglBSQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_3.setTransform(13.1508,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BMQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIhUheIgBAAIAABZQAAAEgEABIgTAAQgEgBAAgEIAAiMQAAgDAEgBIADAAQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAIBUBaIAAAAIAAhVQAAgFAFAAIATAAQAEAAAAAFIAACMQAAADgEABg");
	this.shape_4.setTransform(-10,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_5.setTransform(-25.075,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBLQgEgBgCgEIgLgWIg+AAIgKAWQgBAEgFABIgSAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIBBiNQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIACAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIBACNQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAVAYIgVgtIAAAAIgUAtIApAAg");
	this.shape_6.setTransform(-39.85,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_7.setTransform(-52.925,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBKQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAB1IA0AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_8.setTransform(-64.475,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_9.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,162.5,51.5), null);


(lib.bottom_image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-86.1,-93.85,0.6452,0.6452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_image, new cjs.Rectangle(-86.1,-93.8,172.3,187.7), null);


(lib.printer_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_light
	this.instance = new lib.printer_light_1();
	this.instance.setTransform(-15.3,-47.6,0.9639,0.9639,0,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},42).wait(14).to({_off:false},0).to({_off:true},43).wait(15).to({_off:false},0).to({_off:true},43).wait(174));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(185).to({_off:true},1).wait(146));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_194 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(185).to({graphics:mask_graphics_194,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(146));

	// image_03
	this.instance_1 = new lib.image_03_1();
	this.instance_1.setTransform(-100.6,-59.15,0.4808,0.4808,0,0,0,-179.7,-71.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({y:13.05},43,cjs.Ease.quadInOut).wait(27).to({_off:true},1).wait(146));

	// Layer_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-35.2,0,35.1).s().p("AtgFfIAAq9IbBAAIAAK9g");
	this.shape_1.setTransform(-14.225,-26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_2.setTransform(-14.225,-26.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.004,1],0,-35.2,0,35.1).s().p("AtgFfIAAq9IbBAAIAAK9g");
	this.shape_3.setTransform(-14.225,-25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.008,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_4.setTransform(-14.225,-25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.012,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_5.setTransform(-14.225,-24.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.02,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_6.setTransform(-14.225,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.027,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_7.setTransform(-14.225,-22.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.035,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_8.setTransform(-14.225,-20.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.047,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_9.setTransform(-14.225,-19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.055,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_10.setTransform(-14.225,-17.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.071,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_11.setTransform(-14.225,-15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.082,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_12.setTransform(-14.225,-13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.098,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_13.setTransform(-14.225,-11.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.118,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_14.setTransform(-14.225,-8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.133,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_15.setTransform(-14.225,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.157,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_16.setTransform(-14.225,-2.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.176,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_17.setTransform(-14.225,1.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.2,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_18.setTransform(-14.225,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.227,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_19.setTransform(-14.225,8.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.251,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_20.setTransform(-14.225,12.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.282,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_21.setTransform(-14.225,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.31,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_22.setTransform(-14.225,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.341,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_23.setTransform(-14.225,26.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.373,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_24.setTransform(-14.225,31.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.404,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_25.setTransform(-14.225,36.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.435,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_26.setTransform(-14.225,41.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_27.setTransform(-14.225,46.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-33.5,0,36.8).s().p("AtgFPIAAqdIbBAAIAAKdg");
	this.shape_28.setTransform(-14.225,47.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-31.9,0,38.4).s().p("AtgE+IAAp7IbBAAIAAJ7g");
	this.shape_29.setTransform(-14.225,49.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-30.3,0,40).s().p("AtgEuIAApcIbBAAIAAJcg");
	this.shape_30.setTransform(-14.225,50.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-28.8,0,41.5).s().p("AtgEfIAAo9IbBAAIAAI9g");
	this.shape_31.setTransform(-14.225,52.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-27.3,0,43).s().p("AtgERIAAohIbBAAIAAIhg");
	this.shape_32.setTransform(-14.225,53.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-26,0,44.3).s().p("AtgEEIAAoHIbBAAIAAIHg");
	this.shape_33.setTransform(-14.225,54.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-24.9,0,45.4).s().p("AtgD4IAAnvIbBAAIAAHvg");
	this.shape_34.setTransform(-14.225,56.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-23.8,0,46.5).s().p("AtgDuIAAnbIbBAAIAAHbg");
	this.shape_35.setTransform(-14.225,57.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-22.8,0,47.5).s().p("AtgDkIAAnHIbBAAIAAHHg");
	this.shape_36.setTransform(-14.225,57.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-22,0,48.3).s().p("AtgDcIAAm3IbBAAIAAG3g");
	this.shape_37.setTransform(-14.225,58.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-21.4,0,48.9).s().p("AtgDVIAAmpIbBAAIAAGpg");
	this.shape_38.setTransform(-14.225,59.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-20.8,0,49.5).s().p("AtgDPIAAmdIbBAAIAAGdg");
	this.shape_39.setTransform(-14.225,59.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-20.3,0,50).s().p("AtgDKIAAmUIbBAAIAAGUg");
	this.shape_40.setTransform(-14.225,60.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.9,0,50.4).s().p("AtgDHIAAmNIbBAAIAAGNg");
	this.shape_41.setTransform(-14.225,60.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.6,0,50.7).s().p("AtgDEIAAmHIbBAAIAAGHg");
	this.shape_42.setTransform(-14.225,60.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.4,0,50.9).s().p("AtgDCIAAmDIbBAAIAAGDg");
	this.shape_43.setTransform(-14.225,61.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.3,0,51).s().p("AtgDAIAAl/IbBAAIAAF/g");
	this.shape_44.setTransform(-14.225,61.25);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},124).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},27).to({state:[]},1).wait(146));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-59.1,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({y:12.1},43,cjs.Ease.quadInOut).wait(85).to({_off:true},1).wait(146));

	// Layer_12
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-35.2,0,35.1).s().p("AtgFfIAAq9IbBAAIAAK9g");
	this.shape_45.setTransform(-14.225,-26.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_46.setTransform(-14.225,-26.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.004,1],0,-35.2,0,35.1).s().p("AtgFfIAAq9IbBAAIAAK9g");
	this.shape_47.setTransform(-14.225,-25.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.008,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_48.setTransform(-14.225,-25.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.012,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_49.setTransform(-14.225,-24.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.02,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_50.setTransform(-14.225,-23.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.027,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_51.setTransform(-14.225,-22.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.035,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_52.setTransform(-14.225,-20.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.047,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_53.setTransform(-14.225,-19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.055,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_54.setTransform(-14.225,-17.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.071,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_55.setTransform(-14.225,-15.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.082,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_56.setTransform(-14.225,-13.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.098,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_57.setTransform(-14.225,-11.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.118,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_58.setTransform(-14.225,-8.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.133,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_59.setTransform(-14.225,-5.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.157,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_60.setTransform(-14.225,-2.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.176,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_61.setTransform(-14.225,1.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.2,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_62.setTransform(-14.225,4.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.227,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_63.setTransform(-14.225,8.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.251,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_64.setTransform(-14.225,12.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.282,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_65.setTransform(-14.225,17);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.31,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_66.setTransform(-14.225,21.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.341,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_67.setTransform(-14.225,26.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.373,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_68.setTransform(-14.225,31.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.404,1],0,-35.2,0,35.1).s().p("AtgFgIAAq+IbBAAIAAK+g");
	this.shape_69.setTransform(-14.225,36.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.435,1],0,-35.2,0,35.1).s().p("AtgFfIAAq+IbBAAIAAK+g");
	this.shape_70.setTransform(-14.225,41.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-35.2,0,35.1).s().p("AtgFgIAAq/IbBAAIAAK/g");
	this.shape_71.setTransform(-14.225,46.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-33.5,0,36.8).s().p("AtgFPIAAqdIbBAAIAAKdg");
	this.shape_72.setTransform(-14.225,47.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.471,1],0,-31.9,0,38.4).s().p("AtgE+IAAp7IbBAAIAAJ7g");
	this.shape_73.setTransform(-14.225,49.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-30.3,0,40).s().p("AtgEuIAApcIbBAAIAAJcg");
	this.shape_74.setTransform(-14.225,50.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-28.8,0,41.5).s().p("AtgEfIAAo9IbBAAIAAI9g");
	this.shape_75.setTransform(-14.225,52.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-27.3,0,43).s().p("AtgERIAAohIbBAAIAAIhg");
	this.shape_76.setTransform(-14.225,53.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-26,0,44.3).s().p("AtgEEIAAoHIbBAAIAAIHg");
	this.shape_77.setTransform(-14.225,54.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-24.9,0,45.4).s().p("AtgD4IAAnvIbBAAIAAHvg");
	this.shape_78.setTransform(-14.225,56.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.475,1],0,-23.8,0,46.5).s().p("AtgDuIAAnbIbBAAIAAHbg");
	this.shape_79.setTransform(-14.225,57.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-22.8,0,47.5).s().p("AtgDkIAAnHIbBAAIAAHHg");
	this.shape_80.setTransform(-14.225,57.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-22,0,48.3).s().p("AtgDcIAAm3IbBAAIAAG3g");
	this.shape_81.setTransform(-14.225,58.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-21.4,0,48.9).s().p("AtgDVIAAmpIbBAAIAAGpg");
	this.shape_82.setTransform(-14.225,59.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-20.8,0,49.5).s().p("AtgDPIAAmdIbBAAIAAGdg");
	this.shape_83.setTransform(-14.225,59.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-20.3,0,50).s().p("AtgDKIAAmUIbBAAIAAGUg");
	this.shape_84.setTransform(-14.225,60.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.9,0,50.4).s().p("AtgDHIAAmNIbBAAIAAGNg");
	this.shape_85.setTransform(-14.225,60.675);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.6,0,50.7).s().p("AtgDEIAAmHIbBAAIAAGHg");
	this.shape_86.setTransform(-14.225,60.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.4,0,50.9).s().p("AtgDCIAAmDIbBAAIAAGDg");
	this.shape_87.setTransform(-14.225,61.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.478,1],0,-19.3,0,51).s().p("AtgDAIAAl/IbBAAIAAF/g");
	this.shape_88.setTransform(-14.225,61.25);

	var maskedShapeInstanceList = [this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},66).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},85).to({state:[]},1).wait(146));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(142).to({_off:true},1).wait(146));

	// printer
	this.instance_4 = new lib.Printer();
	this.instance_4.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(185).to({_off:true},1).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


// stage content:
(lib.Epson_RDrive_160x600_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(344));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(267).to({alpha:0},0).to({alpha:1},9).wait(59));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(162.05,139.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).to({alpha:1},15).wait(44));

	// printer_rolls
	this.instance_2 = new lib.printer_rolls();
	this.instance_2.setTransform(187.3,271.45,0.5395,0.5395,0,0,0,0.2,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).to({x:137.3},15,cjs.Ease.quadOut).wait(44));

	// printer_mc
	this.instance_3 = new lib.printer_mc("single",64);
	this.instance_3.setTransform(-67.65,273.7,0.3783,0.3783,0,0,0,0.2,0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(285).to({_off:false},0).to({x:62.35},15,cjs.Ease.quadOut).wait(44));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_310 = new cjs.Graphics().p("AmuCUQgiAAAAgjIAAAAIAAjhQAAgjAiAAIAAAAINdAAQAiAAAAAjIAAAAIAADhQAAAjgiAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(310).to({graphics:mask_graphics_310,x:76.7641,y:354.8641}).wait(34));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoLGHIL8vmIEbDZIr8Pmg");
	this.shape_1.setTransform(-1.625,332.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.8,14.2,10.9).s().p("AoLGHIL8vmIEbDZIr8Pmg");
	this.shape_2.setTransform(0.05,333.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoMGHIL9vmIEcDZIr9Pmg");
	this.shape_3.setTransform(5.075,334.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.2,10.9).s().p("AoMGIIL9voIEcDZIr9Pog");
	this.shape_4.setTransform(13.425,337.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.2,10.9).s().p("AoNGIIL/vpIEcDZIr/Pqg");
	this.shape_5.setTransform(25.15,341.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.3,10.9).s().p("AoOGJIMAvrIEdDaIsAPrg");
	this.shape_6.setTransform(40.2,345.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.3,10.9).s().p("AoPGKIMBvuIEeDbIsCPug");
	this.shape_7.setTransform(58.625,351.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.3,-11,14.3,10.9).s().p("AoRGLIMEvwIEfDbIsEPwg");
	this.shape_8.setTransform(80.375,358.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.3,-11.1,14.4,10.9).s().p("AoSGMIMGvzIEfDcIsGPzg");
	this.shape_9.setTransform(102.1,365.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoTGNIMHv1IEgDcIsIP2g");
	this.shape_10.setTransform(120.525,371.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoUGOIMJv4IEgDdIsJP4g");
	this.shape_11.setTransform(135.575,376.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoVGOIMKv4IEhDcIsKP5g");
	this.shape_12.setTransform(147.3,379.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.5,-11.1,14.4,11).s().p("AoVGOIMKv5IEhDdIsKP6g");
	this.shape_13.setTransform(155.65,382.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11.1,14.5,11).s().p("AoWGOIMLv5IEiDdIsMP7g");
	this.shape_14.setTransform(160.675,384.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.5,-11.1,14.4,11).s().p("AoWGPIMMv7IEhDeIsMP7g");
	this.shape_15.setTransform(162.35,384.675);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},310).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(20));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(76.8,354.9,0.5726,0.5726,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300).to({_off:false},0).to({alpha:1},10).wait(34));

	// Layer_3
	this.instance_5 = new lib.bottom_image();
	this.instance_5.setTransform(80.1,519.85);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(276).to({_off:false},0).to({alpha:1},9).wait(59));

	// BG
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_16.setTransform(80.0004,299.987,0.465,0.9256);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.11)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_17.setTransform(80,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.224)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_18.setTransform(80,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.333)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_19.setTransform(80,300);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.443)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_20.setTransform(80,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.557)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_21.setTransform(80,300);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.667)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_22.setTransform(80,300);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.776)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_23.setTransform(80,300);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.89)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_24.setTransform(80,300);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_25.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},276).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(59));

	// txt_onARoll
	this.instance_6 = new lib.txt_inchRoll();
	this.instance_6.setTransform(146.05,509.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(236).to({_off:false},0).to({alpha:1},11).wait(29).to({alpha:0},9).wait(59));

	// txt_onARoll
	this.instance_7 = new lib.txt_onARoll();
	this.instance_7.setTransform(144.05,528.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(193).to({_off:false},0).to({alpha:1},11).wait(21).to({alpha:0},11).wait(108));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_193 = new cjs.Graphics().p("ArPMbIAA41IWgAAIAAY1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(193).to({graphics:mask_1_graphics_193,x:79.05,y:403.25}).wait(151));

	// image_strip_01
	this.instance_8 = new lib.image_strip_01();
	this.instance_8.setTransform(77.4,240.75,0.5542,0.5542,0,0,0,0.2,0.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).to({y:405.25},18,cjs.Ease.quadOut).wait(133));

	// image_strip_02
	this.instance_9 = new lib.image_strip_02();
	this.instance_9.setTransform(79.1,240.25,0.5542,0.5542,0,0,0,0.2,0.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({_off:false},0).to({y:405.25},18,cjs.Ease.quadOut).wait(115));

	// image_strip_03
	this.instance_10 = new lib.image_strip_03();
	this.instance_10.setTransform(79.35,240.75,0.5542,0.5542,0,0,0,0.1,0.2);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(229).to({_off:false},0).to({y:405.25},18,cjs.Ease.quadOut).wait(97));

	// hallwayMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_183 = new cjs.Graphics().p("AuwbqMAAAg3TIdhAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(183).to({graphics:mask_2_graphics_183,x:81.525,y:436.925}).wait(161));

	// hallway_mc
	this.instance_11 = new lib.hallway_mc();
	this.instance_11.setTransform(82.95,429.05,1.1065,1.1065,0,0,0,-67,-130.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(183).to({_off:false},0).to({scaleX:1,scaleY:1,x:83,y:429.1,alpha:1},10,cjs.Ease.quadOut).to({_off:true},93).wait(58));

	// txt_AmazingProductivity
	this.instance_12 = new lib.txt_AmazingProductivity();
	this.instance_12.setTransform(153.3,188.55);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(124).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(45).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(154));

	// txt_Immediatelamination
	this.instance_13 = new lib.txt_Immediatelamination();
	this.instance_13.setTransform(153.3,190.55);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(41).to({alpha:0},10).to({_off:true},1).wait(220));

	// txt_consistentQuality
	this.instance_14 = new lib.txt_consistentQuality();
	this.instance_14.setTransform(153.3,186.55);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(43).to({alpha:0},10).to({_off:true},1).wait(281));

	// wht_fade
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_26.setTransform(151.05,341.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.09)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_27.setTransform(151.05,341.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_28.setTransform(151.05,341.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.275)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_29.setTransform(151.05,341.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.365)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_30.setTransform(151.05,341.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.455)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_31.setTransform(151.05,341.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.545)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_32.setTransform(151.05,341.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.635)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_33.setTransform(151.05,341.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.725)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_34.setTransform(151.05,341.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.82)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_35.setTransform(151.05,341.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.91)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_36.setTransform(151.05,341.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_37.setTransform(151.05,341.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},183).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).wait(149));

	// printer_mc
	this.instance_15 = new lib.printer_mc("single",0);
	this.instance_15.setTransform(81.25,336,0.3934,0.3934,0,0,0,0.2,0);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.5314,scaleY:0.5314,x:81.2,y:339.5,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).to({_off:true},186).wait(149));

	// Layer_2
	this.instance_16 = new lib.bottom_image();
	this.instance_16.setTransform(80.1,699.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:551.85},12,cjs.Ease.quadOut).wait(332));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,299,386.3,494.79999999999995);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"hallway.jpg", id:"hallway"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"},
		{src:"Printer.jpg", id:"Printer"},
		{src:"printer_full_image.jpg", id:"printer_full_image"},
		{src:"printer_light.png", id:"printer_light"},
		{src:"printerRolls.png", id:"printerRolls"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A4BDA2797E5D4A2296AB1960FDA0E060'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;