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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_01_LG = function() {
	this.initialize(img.image_01_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02_LG = function() {
	this.initialize(img.image_02_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03_LG = function() {
	this.initialize(img.image_03_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAjIAAhFIA6AAIAABFg");
	this.shape.setTransform(100.6,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOCgIAAgvIAQACQARAAAIgJQAHgJABgPIhEjxIBBAAIAjCmIABAAIAgimIA+AAIg7DhQgIAegHASQgIATgKAKQgJALgOADQgOADgWAAg");
	this.shape_1.setTransform(86.725,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnB5QgRgGgMgOQgMgPgFgYQgHgZAAgkQABglAHgYQAHgZANgOQAOgPARgGQASgGAVAAQArAAAWAaQAVAZABArIg8AAIgBgSIgEgPQgDgHgFgEQgGgFgIAAQgLAAgHAGQgIAFgDAKQgDAKgCAPIgBAkIABAnQACAQADAKQADAKAIAFQAFAFAKAAQAQAAAHgOQAHgNAAgeIA8AAQAAAwgWAZQgVAZgyAAQgWAAgRgGg");
	this.shape_2.setTransform(67.85,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeB8IAAimQAAgTgHgHQgGgHgOAAQgfAAgBAoIAACfIg+AAIAAjxIA8AAIAAAcIAAAAQALgSAPgIQAPgIAUAAQAeAAAQAQQAQAQAAAlIAACyg");
	this.shape_3.setTransform(47.7,20.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBzQgTgLgJgSQgJgTgCgXIgDgtQAAgYAEgWQADgXAKgRQALgSASgKQATgLAfAAQAbAAARAJQARAJAKAQQALAQADAXQADAWABAcIAAANIh6AAIAAATIABAVIAFASQAEAIAGAFQAGAFAIAAQAPAAAHgLQAIgMACgXIA4AAQgCArgUAWQgVAWgtAAQghAAgSgMgAgNhPQgGAEgEAHIgFAQIgBARIAAAJIA+AAIgCgYQgBgLgDgHQgEgIgFgEQgHgDgJAAQgJAAgGAEg");
	this.shape_4.setTransform(27.55,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgECaQgLgDgHgHQgGgIgCgMQgCgMAAgSIAAiKIggAAIAAgqIAgAAIAAhFIA8AAIAABFIAlAAIAAAqIglAAIAACCQABAPAEAFQAEAHAOAAIAHAAIAHgBIAAArIgUABIgUABQgTgBgKgCg");
	this.shape_5.setTransform(12.1,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrB6QgSgFgKgKQgKgKgDgOQgFgOAAgSIAAgIIA4AAIAAAIQAAAPAIAKQAJAKAQAAQANAAAIgIQAJgHAAgOQAAgMgGgGQgHgGgJgEIgrgPQgagJgMgQQgOgQAAgaQAAgPAFgNQAFgNALgKQAKgKASgGQAQgGAXAAQArAAATASQAVASAAAhIAAAKIg4AAQAAgTgGgJQgGgIgPAAQgLAAgIAGQgKAHABANQAAAJAFAHQAGAHAQAFIAkANQAdAKANAPQAMAQgBAbQABATgIAOQgGAPgMAJQgMAKgRAEQgQAEgTAAQgaAAgRgFg");
	this.shape_6.setTransform(-3.1,20.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeCiIAAjxIA9AAIAADxgAgehsIAAg2IA9AAIAAA2g");
	this.shape_7.setTransform(-17,16.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrB6QgRgFgKgKQgKgKgFgOQgDgOAAgSIAAgIIA3AAIAAAIQAAAPAJAKQAIAKAQAAQANAAAIgIQAJgHAAgOQAAgMgHgGQgHgGgIgEIgrgPQgagJgNgQQgNgQAAgaQAAgPAFgNQAFgNALgKQALgKAQgGQASgGAXAAQApAAAVASQAUASAAAhIAAAKIg3AAQgBgTgGgJQgGgIgPAAQgLAAgIAGQgJAHAAANQgBAJAGAHQAGAHAQAFIAkANQAdAKAMAPQANAQAAAbQgBATgGAOQgHAPgMAJQgMAKgQAEQgRAEgTAAQgZAAgSgFg");
	this.shape_8.setTransform(-30.85,20.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeB8IAAimQgBgTgFgHQgHgHgOAAQgfAAgBAoIAACfIg+AAIAAjxIA8AAIAAAcIABAAQAKgSAPgIQAPgIAUAAQAeAAAQAQQAQAQAAAlIAACyg");
	this.shape_9.setTransform(-50.6,20.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtB4QgTgIgKgQQgLgQgFgYQgFgYAAgfQABgeAFgYQAEgYAMgQQALgQASgIQASgJAaAAQAcAAASAIQATAIAKAQQALAQAFAYQAFAYAAAfQgBAfgFAYQgEAYgMAPQgLAQgSAIQgSAIgbAAIgCAAQgaAAgRgHgAgRhNQgGAGgEAMQgEALgBAPIgBAiIABAiQABAQAEALQAEALAGAGQAHAHAKAAQATAAAHgUQAIgUAAgtQAAgtgIgUQgHgTgTAAQgKAAgHAGg");
	this.shape_10.setTransform(-71.15,20.3251);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnB5QgSgGgLgOQgLgPgHgYQgFgZAAgkQAAglAHgYQAHgZANgOQANgPASgGQASgGAVAAQArAAAWAaQAVAZAAArIg6AAIgCgSIgEgPQgDgHgGgEQgFgFgIAAQgLAAgHAGQgHAFgEAKQgEAKgBAPIgBAkIABAnQABAQAEAKQADAKAIAFQAFAFAKAAQAQAAAHgOQAIgNAAgeIA6AAQABAwgWAZQgVAZgyAAQgWAAgRgGg");
	this.shape_11.setTransform(-90.85,20.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag/B8IAAjxIA8AAIAAAhIABAAQAIgSAOgKQANgLAUAAIAFAAIAGABIAAA7IgKAAIgJgBIgRACQgIADgHAFQgGAFgEAIQgDAJAAAMIAACQg");
	this.shape_12.setTransform(100.675,-24.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBzQgTgLgJgSQgJgTgCgXIgDgtQAAgYAEgWQADgXAKgRQALgSASgKQATgLAfAAQAbAAARAJQARAJALAQQAKAQADAXQADAWABAcIAAANIh6AAIAAATIABAVIAGASQADAIAGAFQAGAFAIAAQAPAAAHgLQAIgMACgXIA4AAQgCArgUAWQgVAWgtAAQghAAgSgMgAgNhPQgGAEgDAHIgGAQIgBARIAAAJIA+AAIgCgYQgBgLgDgHQgEgIgFgEQgHgDgJAAQgJAAgGAEg");
	this.shape_13.setTransform(83.35,-23.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABYB8IAAioQAAgPgGgIQgGgIgNAAQgOAAgJAKQgJAJAAAWIAACeIg9AAIAAioQAAgPgGgIQgFgIgOAAQgOAAgJAKQgJAJABAWIAACeIg/AAIAAjxIA7AAIAAAZIABAAQAMgRAOgHQAQgHATAAQAWAAAOAKQAPAKAEATIABAAQAIgUAPgJQARgKAVAAQAgAAAOASQAPATAAAjIAACvg");
	this.shape_14.setTransform(57.4,-24.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguB4QgRgIgMgQQgLgQgEgYQgEgYAAgfQAAgeAEgYQAGgYALgQQALgQATgIQARgJAaAAQAcAAASAIQASAIAMAQQALAQAEAYQAEAYAAAfQAAAfgEAYQgGAYgLAPQgLAQgTAIQgRAIgbAAIgCAAQgaAAgSgHgAgRhNQgGAGgEAMQgDALgBAPIgBAiIABAiQABAQADALQAEALAGAGQAGAHALAAQATAAAHgUQAHgUAAgtQAAgtgHgUQgHgTgTAAQgLAAgGAGg");
	this.shape_15.setTransform(31.05,-23.8749);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgECaQgMgDgFgHQgHgIgCgMQgCgMAAgSIAAiKIggAAIAAgqIAgAAIAAhFIA9AAIAABFIAkAAIAAAqIgkAAIAACCQgBAPAFAFQAFAHANAAIAHAAIAHgBIAAArIgUABIgVABQgRAAgLgDg");
	this.shape_16.setTransform(15.2,-27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrB6QgSgFgJgKQgLgKgEgOQgDgOAAgSIAAgIIA3AAIAAAIQAAAPAJAKQAIAKAPAAQAOAAAJgIQAIgHAAgOQAAgMgHgGQgGgGgKgEIgqgPQgagJgNgQQgNgQAAgaQAAgPAFgNQAFgNALgKQAKgKARgGQARgGAYAAQApAAAVASQAUASAAAhIAAAKIg3AAQAAgTgHgJQgGgIgPAAQgLAAgJAGQgIAHgBANQAAAJAGAHQAGAHAPAFIAlANQAdAKAMAPQAMAQAAAbQAAATgGAOQgHAPgMAJQgMAKgRAEQgPAEgUAAQgZAAgSgFg");
	this.shape_17.setTransform(0,-23.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhLBsQgQgQAAgkIAAizIA/AAIAACnQAAASAFAIQAHAHAOAAQAgAAgBgoIAAigIA/AAIAADxIg7AAIAAgcIgBAAQgLASgPAIQgPAIgUAAQgegBgQgPg");
	this.shape_18.setTransform(-19.75,-23.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnB5QgSgGgLgOQgMgPgFgYQgHgZABgkQAAglAHgYQAHgZANgOQAOgPARgGQASgGAVAAQArAAAWAaQAVAZAAArIg6AAIgCgSIgEgPQgDgHgGgEQgFgFgIAAQgLAAgHAGQgHAFgEAKQgDAKgCAPIgBAkIABAnQACAQADAKQADAKAIAFQAFAFAKAAQAQAAAHgOQAHgNABgeIA6AAQABAwgWAZQgVAZgyAAQgWAAgRgGg");
	this.shape_19.setTransform(-39.9,-23.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyBzQgTgLgJgSQgJgTgDgXIgCgtQABgYADgWQADgXAKgRQALgSASgKQAUgLAeAAQAbAAASAJQAQAJALAQQAKAQADAXQAEAWAAAcIAAANIh6AAIAAATIABAVIAGASQADAIAGAFQAGAFAHAAQAQAAAHgLQAIgMACgXIA4AAQgCArgUAWQgVAWgtAAQggAAgTgMgAgMhPQgHAEgDAHIgGAQIgBARIAAAJIA+AAIgBgYQgCgLgEgHQgCgIgHgEQgGgDgJAAQgJAAgFAEg");
	this.shape_20.setTransform(-68.5,-23.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAeCgIAAimQAAgSgHgIQgGgHgOAAQgfAAgBAnIAACgIg+AAIAAlAIA+AAIAABoIABAAQASgfAoAAQAeAAAQAQQAQAQAAAlIAACyg");
	this.shape_21.setTransform(-88.65,-27.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgECaQgMgDgFgHQgHgIgCgMQgCgMAAgSIAAiKIggAAIAAgqIAgAAIAAhFIA9AAIAABFIAkAAIAAAqIgkAAIAACCQgBAPAFAFQAFAHANAAIAHAAIAHgBIAAArIgUABIgVABQgRAAgLgDg");
	this.shape_22.setTransform(-104.95,-27.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/B8IAAjxIA8AAIAAAhIABAAQAIgSAOgKQANgLAUAAIAFAAIAGABIAAA7IgKAAIgJgBIgRACQgIADgHAFQgGAFgEAIQgDAJAAAMIAACQg");
	this.shape_23.setTransform(86.025,-68.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzBzQgSgLgJgSQgJgTgCgXIgCgtQAAgYADgWQAEgXAJgRQAKgSAUgKQASgLAfAAQAbAAARAJQARAJAKAQQALAQADAXQADAWAAAcIAAANIh5AAIAAATIACAVIAEASQAEAIAGAFQAGAFAIAAQAPAAAHgLQAHgMAEgXIA3AAQgCArgVAWQgUAWgtAAQggAAgUgMgAgNhPQgGAEgEAHIgEAQIgCARIAAAJIA/AAIgDgYQgBgLgDgHQgDgIgGgEQgHgDgKAAQgIAAgGAEg");
	this.shape_24.setTransform(68.7,-68.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgECaQgMgDgFgHQgHgIgCgMQgCgMAAgSIAAiKIggAAIAAgqIAgAAIAAhFIA8AAIAABFIAlAAIAAAqIglAAIAACCQAAAPAFAFQAFAGANABIAHAAIAHgBIAAArIgUAAIgUACQgSAAgLgDg");
	this.shape_25.setTransform(53.25,-71.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag+B5QgLgGgHgKQgHgJgDgNQgDgMAAgMQAAgRAEgNQAEgMAGgJQAIgIALgGQAMgFARgFIAhgJQAOgEAGgGQAFgHAAgMQAAgOgHgHQgGgIgPAAQgOAAgHAIQgHAJAAAOIAAAHIg4AAIAAgGQAAgVAGgOQAIgOALgJQALgJAQgEQAPgEARAAQAbAAASAGQARAFAJAKQAKAKADAOQADANABARIAAB+IABAbIAGAUIg7AAIgFgNIgDgNIgBAAQgKATgPAGQgNAGgXAAQgPAAgMgGgAAOAJIgOAEQgRAEgJAJQgHAKgBAQQAAAOAGAKQAGAKAMAAIAMgCQAGgCAHgFQAFgEAEgHQADgIAAgKIAAgvg");
	this.shape_26.setTransform(37.05,-68.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzBzQgSgLgJgSQgJgTgCgXIgCgtQgBgYAEgWQAEgXAKgRQAJgSAUgKQATgLAeAAQAbAAARAJQASAJAJAQQALAQADAXQAEAWgBAcIAAANIh5AAIAAATIACAVIAEASQAEAIAGAFQAGAFAHAAQAQAAAIgLQAGgMAEgXIA3AAQgCArgVAWQgUAWgtAAQggAAgUgMgAgNhPQgGAEgEAHIgEAQIgCARIAAAJIA/AAIgDgYQgBgLgDgHQgEgIgFgEQgHgDgKAAQgIAAgGAEg");
	this.shape_27.setTransform(17.5,-68.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/B8IAAjxIA8AAIAAAhIABAAQAIgSAOgKQANgLAUAAIAFAAIAGABIAAA7IgKAAIgJgBIgRACQgIADgHAFQgGAFgEAIQgDAJAAAMIAACQg");
	this.shape_28.setTransform(2.075,-68.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhECUQgVgRAAgfIA7AAQAAAMAJAHIAKAEIALACQATAAAHgMQAIgMgBgSIAAggIgBAAQgIANgOAJQgNAIgPAAQglAAgTgdQgSgcAAhBIACgrQACgWAJgRQAHgTAPgKQAPgMAaAAQANAAANAHQAOAIAIASIABAAIAAgbIA8AAIAADmQAAAugXAXQgXAYg1AAQgpAAgVgRgAgPhwQgGAFgDAKQgEAKgBARIgBApIABAYQABAKAEAJQADAJAGAFQAGAFAJAAQAKAAAGgFQAHgFAEgJQAEgJABgMIABgcQAAgsgGgSQgHgTgSAAQgKAAgHAEg");
	this.shape_29.setTransform(-16.45,-64.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgyBzQgTgLgJgSQgJgTgDgXIgCgtQABgYADgWQADgXAKgRQALgSASgKQAUgLAeAAQAbAAASAJQAQAJALAQQAKAQADAXQAEAWAAAcIAAANIh6AAIAAATIABAVIAGASQADAIAGAFQAGAFAHAAQAQAAAHgLQAIgMACgXIA4AAQgCArgUAWQgVAWgtAAQggAAgTgMgAgMhPQgHAEgDAHIgGAQIgBARIAAAJIA+AAIgBgYQgCgLgEgHQgCgIgHgEQgGgDgJAAQgJAAgFAEg");
	this.shape_30.setTransform(-45.55,-68.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeChIAAinQAAgTgHgHQgGgHgOAAQgfAAgBAnIAAChIg+AAIAAlBIA+AAIAABoIABAAQASgfAoAAQAeAAAQAQQAQARAAAkIAACzg");
	this.shape_31.setTransform(-65.7,-71.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfChIAAkMIhGAAIAAg1IDMAAIAAA1IhGAAIAAEMg");
	this.shape_32.setTransform(-86.25,-71.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-138,-101.1,270.1,145.6), null);


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
	this.shape.setTransform(118.675,9.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAVBWIAAhzQgBgNgEgFQgEgEgKgBQgVAAgBAcIAABuIgqAAIAAinIAoAAIAAAUIABAAQAHgMALgGQAKgGAOABQAUgBALALQAMAMAAAZIAAB7g");
	this.shape_1.setTransform(108.2,2.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_2.setTransform(94.025,3.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(83.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_4.setTransform(76.7,0.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(65.475,3.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAVBWIAAhzQgBgNgEgFQgEgEgKgBQgVAAgBAcIAABuIgqAAIAAinIAoAAIAAAUIABAAQAHgMALgGQAKgGAOABQAUgBALALQAMAMAAAZIAAB7g");
	this.shape_6.setTransform(51.4,2.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgVBwIAAimIArAAIAACmgAgVhKIAAglIArAAIAAAlg");
	this.shape_7.setTransform(40.95,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_8.setTransform(26.525,2.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_9.setTransform(8.225,3.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIArAAIAADdg");
	this.shape_10.setTransform(-1.8,0.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_11.setTransform(-18.075,3.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgCBqQgIgCgFgFQgEgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgHgCg");
	this.shape_12.setTransform(-28.75,0.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_13.setTransform(-39.975,3.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_14.setTransform(-50,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgUQAMgVAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhGIArAAIAADcIgpAAIAAgSIgBAAQgHAMgIAFQgIAFgNAAQgbgBgMgUgAgSgPQgEAOAAAaQAAAcAEAOQAFAOANgBQAOABAEgOQAEgOAAgcQAAgagEgOQgEgNgOAAQgNAAgFANg");
	this.shape_15.setTransform(-60.625,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_16.setTransform(-74.375,3.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_17.setTransform(-92.275,2.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_18.setTransform(-114.725,2.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgWBvIAAjdIAsAAIAADdg");
	this.shape_19.setTransform(-129.4,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-145.8,-20.3,279.6,40.7), null);


(lib.txt_greaterConsistency = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AhLCZIAAgtIAQACQAQAAAHgIQAHgJABgPIhAjmIA+AAIAhCfIABAAIAeifIA8AAIg4DXQgJAcgGATQgIARgJALQgJAJgOADQgNADgUAAg");
	this.shape.setTransform(76.85,50.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgmB0QgQgGgLgOQgLgOgGgXQgFgYgBgiQABgjAGgYQAIgXAMgOQAMgOASgGQAQgFAVAAQAoAAAWAYQAUAYAAApIg4AAIgBgQIgFgPQgCgHgGgEQgEgEgJAAQgKAAgGAFQgIAFgDAJQgEAKgBAPIgBAiIABAlQABAPAEAKQADAKAHAEQAGAFAJAAQAPAAAHgNQAGgNABgcIA4AAQABAtgVAYQgVAYgvAAQgVAAgRgFg");
	this.shape_1.setTransform(57.85,46.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAcB3IAAifQABgSgHgHQgFgHgOAAQgfAAABAmIAACZIg8AAIAAjnIA5AAIAAAbIABAAQAKgRAOgIQAOgIAUAAQAcAAAQAQQAPAPAAAjIAACrg");
	this.shape_2.setTransform(37.65,46.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgwBuQgSgLgJgRQgIgSgCgWIgCgrQAAgXADgVQADgWAKgQQAKgRARgKQATgKAdAAQAaAAAQAIQAQAJAKAPQAKAPADAWQAEAWgBAaIAAANIh0AAIAAASIABAUIAGARQADAIAGAEQAFAFAHAAQAPAAAIgLQAGgLADgWIA1AAQgCApgUAVQgTAVgrAAQgfAAgSgLgAgMhMQgGAEgDAHIgGAPIgBAQIAAAJIA8AAIgCgXQgCgKgDgHQgCgHgHgEQgGgEgIAAQgIAAgGAEg");
	this.shape_3.setTransform(17.45,46.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgECTQgLgCgFgIQgHgGgBgMQgCgMgBgSIAAiDIgeAAIAAgoIAeAAIAAhCIA7AAIAABCIAiAAIAAAoIgiAAIAAB8QgBAOAEAGQAFAFAMAAIAHAAIAHAAIAAApIgTABIgTABQgSgBgKgCg");
	this.shape_4.setTransform(1.75,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgpB0QgQgFgKgJQgKgJgEgOQgDgOAAgQIAAgIIA1AAIAAAHQAAAPAIAKQAIAJAPAAQANAAAIgHQAIgHAAgOQAAgLgGgGQgHgFgJgEIgpgPQgYgIgNgPQgMgQAAgZQAAgOAFgMQAEgNALgJQAKgKAQgGQARgFAVAAQAoAAAUARQATARAAAgIAAAJIg1AAQAAgSgGgIQgFgJgPAAQgKAAgJAHQgIAGAAAMQAAAJAFAHQAGAHAPAEIAiAMQAcAKAMAOQAMAPAAAbQgBASgGAOQgHANgLAJQgLAJgQAEQgQAEgSAAQgZAAgQgFg");
	this.shape_5.setTransform(-13.7,46.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgdCbIAAjmIA7AAIAADmgAgdhnIAAgzIA7AAIAAAzg");
	this.shape_6.setTransform(-27.875,43.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgpB0QgQgFgKgJQgKgJgEgOQgDgOAAgQIAAgIIA1AAIAAAHQAAAPAIAKQAIAJAPAAQANAAAIgHQAIgHAAgOQAAgLgGgGQgHgFgJgEIgpgPQgYgIgNgPQgMgQAAgZQAAgOAFgMQAEgNALgJQAKgKAQgGQARgFAVAAQAoAAAUARQATARAAAgIAAAJIg1AAQAAgSgGgIQgFgJgPAAQgKAAgJAHQgIAGAAAMQAAAJAFAHQAGAHAPAEIAiAMQAcAKAMAOQAMAPAAAbQgBASgGAOQgHANgLAJQgLAJgQAEQgQAEgSAAQgZAAgQgFg");
	this.shape_7.setTransform(-42.05,46.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AAcB3IAAifQAAgSgFgHQgHgHgNAAQgeAAgBAmIAACZIg7AAIAAjnIA5AAIAAAbIABAAQAKgRAPgIQAOgIATAAQAcAAAPAQQAQAPAAAjIAACrg");
	this.shape_8.setTransform(-61.85,46.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgrByQgSgHgKgPQgLgPgEgXQgEgXAAgeQAAgdAFgXQAEgXALgPQALgPARgIQASgIAYAAQAbgBARAIQASAHAKAQQALAQAEAWQAEAXAAAeQAAAdgFAXQgEAXgLAPQgLAPgRAIQgSAHgZAAQgaAAgRgHgAgQhKQgHAGgDALQgDALgBAPIgBAgIABAgQABAPADALQADALAHAGQAGAGAKAAQASAAAHgTQAHgTAAgrQAAgrgHgTQgHgTgSAAQgKAAgGAGg");
	this.shape_9.setTransform(-82.375,46.9734);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgmB0QgQgGgLgOQgLgOgGgXQgFgYAAgiQAAgjAGgYQAIgXAMgOQANgOARgGQARgFATAAQApAAAVAYQAWAYgBApIg5AAIAAgQIgFgPQgCgHgFgEQgGgEgIAAQgKAAgHAFQgGAFgEAJQgDAKgCAPIgBAiIABAlQACAPADAKQAEAKAGAEQAGAFAJAAQAPAAAHgNQAGgNAAgcIA5AAQAAAtgUAYQgUAYgwAAQgVAAgRgFg");
	this.shape_10.setTransform(-102.15,46.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("Ag8B3IAAjnIA5AAIAAAfIABAAQAIgQANgKQANgLASAAIAGABIAFAAIAAA5IgJgBIgKAAIgPACQgIACgGAFQgHAFgDAIQgEAIAAAMIAACKg");
	this.shape_11.setTransform(49.05,1.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgrByQgSgHgKgPQgLgPgEgXQgEgXAAgeQAAgdAFgXQAEgXALgPQALgPARgIQASgIAYAAQAbgBARAIQASAHAKAQQALAQAEAWQAEAXAAAeQAAAdgFAXQgEAXgLAPQgLAPgRAIQgSAHgZAAQgaAAgRgHgAgQhKQgHAGgDALQgDALgBAPIgBAgIABAgQABAPADALQADALAHAGQAGAGAKAAQASAAAHgTQAHgTAAgrQAAgrgHgTQgHgTgSAAQgKAAgGAGg");
	this.shape_12.setTransform(31.225,2.1734);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgdCZIAAkyIA7AAIAAEyg");
	this.shape_13.setTransform(16.275,-1.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgrByQgSgHgKgPQgLgPgEgXQgEgXAAgeQAAgdAFgXQAEgXALgPQALgPARgIQASgIAYAAQAbgBARAIQASAHAKAQQALAQAEAWQAEAXAAAeQAAAdgFAXQgEAXgLAPQgLAPgRAIQgSAHgZAAQgaAAgRgHgAgQhKQgHAGgDALQgDALgBAPIgBAgIABAgQABAPADALQADALAHAGQAGAGAKAAQASAAAHgTQAHgTAAgrQAAgrgHgTQgHgTgSAAQgKAAgGAGg");
	this.shape_14.setTransform(1.325,2.1734);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgmB0QgQgGgLgOQgLgOgGgXQgFgYAAgiQAAgjAGgYQAIgXAMgOQANgOARgGQARgFATAAQApAAAVAYQAWAYgBApIg5AAIAAgQIgFgPQgCgHgFgEQgGgEgIAAQgKAAgHAFQgGAFgEAJQgDAKgCAPIgBAiIABAlQACAPADAKQAEAKAGAEQAGAFAJAAQAPAAAHgNQAGgNAAgcIA5AAQAAAtgUAYQgUAYgwAAQgVAAgRgFg");
	this.shape_15.setTransform(-18.45,2.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgwBuQgSgLgJgRQgIgSgDgWIgCgrQABgXADgVQADgWAKgQQAJgRASgKQASgKAeAAQAZAAARAIQAQAJAKAPQAJAPAEAWQADAWABAaIAAANIh1AAIAAASIABAUIAGARQADAIAGAEQAFAFAHAAQAPAAAIgLQAGgLADgWIA1AAQgCApgUAVQgTAVgrAAQgfAAgSgLgAgMhMQgGAEgDAHIgGAPIgBAQIAAAJIA8AAIgCgXQgBgKgDgHQgEgHgFgEQgHgEgJAAQgHAAgGAEg");
	this.shape_16.setTransform(-47.65,2.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAdCZIAAieQAAgSgHgHQgFgHgOAAQgfAAAAAlIAACZIg7AAIAAkyIA7AAIAABkIACAAQAQgeAnAAQAcAAAQAQQAPAPAAAjIAACqg");
	this.shape_17.setTransform(-67.85,-1.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgECTQgLgDgFgGQgHgIgCgLQgBgLAAgTIAAiDIgfAAIAAgpIAfAAIAAhBIA5AAIAABBIAjAAIAAApIgjAAIAAB9QAAANAFAGQAEAGANgBIAGAAIAHgBIAAAqIgTABIgTAAQgSAAgKgCg");
	this.shape_18.setTransform(-84.35,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("Ag8B3IAAjnIA5AAIAAAfIABAAQAIgQANgKQANgLATAAIAEABIAGAAIAAA5IgJgBIgJAAIgQACQgIACgGAFQgGAFgFAIQgCAIgBAMIAACKg");
	this.shape_19.setTransform(71.25,-42.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgwBuQgSgLgJgRQgJgSgCgWIgBgrQAAgXADgVQADgWAKgQQAJgRATgKQARgKAeAAQAaAAAQAIQARAJAJAPQAJAPAEAWQAEAWAAAaIAAANIh1AAIAAASIACAUIAEARQAEAIAFAEQAGAFAHAAQAQAAAGgLQAHgLACgWIA2AAQgCApgTAVQgVAVgqAAQgfAAgSgLgAgMhMQgGAEgEAHIgEAPIgCAQIAAAJIA7AAIgBgXQgCgKgCgHQgEgHgFgEQgGgEgJAAQgJAAgFAEg");
	this.shape_20.setTransform(53.75,-42.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgECTQgLgDgFgGQgHgIgCgLQgBgMAAgRIAAiEIgfAAIAAgpIAfAAIAAhCIA5AAIAABCIAjAAIAAApIgjAAIAAB9QAAANAFAGQAEAGANAAIAGAAIAHgCIAAAqIgTAAIgTABQgSABgKgDg");
	this.shape_21.setTransform(38.05,-45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("Ag7B0QgLgGgGgJQgHgKgDgLQgDgMAAgMQAAgQAEgMQADgMAHgIQAHgIALgFQALgGAQgEIAggJQAOgEAFgGQAFgGAAgLQAAgOgGgHQgGgIgPAAQgNAAgHAIQgHAJAAANIAAAHIg1AAIAAgGQAAgUAGgNQAHgOALgIQAKgJAPgDQAPgEARAAQAZAAARAFQAQAFAJAKQAJAJADANQAEANAAAQIAAB5IABAZIAGATIg5AAIgEgMIgDgMIgBAAQgKASgOAGQgMAFgWAAQgPAAgLgFgAANAIIgMAEQgSAEgHAJQgIAJAAAQQAAANAFAJQAFAKAMAAIAMgCQAGgCAGgEQAFgFAEgGQADgHAAgKIAAgtg");
	this.shape_22.setTransform(21.625,-42.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AgwBuQgSgLgJgRQgJgSgCgWIgBgrQAAgXADgVQADgWAKgQQAJgRATgKQARgKAeAAQAaAAAQAIQARAJAJAPQAJAPAEAWQAEAWAAAaIAAANIh1AAIAAASIACAUIAEARQAEAIAFAEQAGAFAHAAQAQAAAGgLQAHgLACgWIA2AAQgCApgTAVQgVAVgqAAQgfAAgSgLgAgMhMQgGAEgEAHIgEAPIgCAQIAAAJIA7AAIgBgXQgCgKgCgHQgEgHgFgEQgGgEgJAAQgJAAgFAEg");
	this.shape_23.setTransform(2,-42.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("Ag8B3IAAjnIA5AAIAAAfIABAAQAIgQANgKQANgLATAAIAEABIAGAAIAAA5IgJgBIgKAAIgPACQgIACgGAFQgHAFgDAIQgEAIAAAMIAACKg");
	this.shape_24.setTransform(-13.7,-42.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AhACNQgVgQAAgdIA5AAQAAALAJAGIAJAFIAKACQASAAAHgMQAIgLAAgSIAAgeIgBAAQgKANgNAHQgMAIgOAAQgjAAgSgbQgSgbAAg+IACgpQADgVAIgRQAHgRAOgLQAPgLAYAAQAMAAAMAHQAOAHAJASIABAAIAAgaIA4AAIAADbQAAAtgWAWQgWAXgzAAQgmAAgUgRgAgOhrQgGAFgDAJQgDAKgBAQIgBAnIABAXQABAKADAIQADAJAGAFQAFAFAJAAQAJAAAHgFQAGgFAEgJQADgIACgMIACgbQgBgqgGgRQgHgSgSAAQgJAAgGAEg");
	this.shape_25.setTransform(-32.35,-38.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AgwBuQgSgLgJgRQgJgSgCgWIgBgrQgBgXAEgVQADgWAKgQQAJgRATgKQARgKAeAAQAZAAARAIQAQAJAKAPQAJAPAEAWQADAWAAAaIAAANIh0AAIAAASIACAUIAEARQAEAIAFAEQAGAFAHAAQAQAAAGgLQAHgLACgWIA2AAQgCApgTAVQgVAVgqAAQgfAAgSgLgAgMhMQgGAEgEAHIgEAPIgCAQIAAAJIA7AAIgBgXQgBgKgEgHQgCgHgHgEQgGgEgIAAQgJAAgFAEg");
	this.shape_26.setTransform(-62,-42.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AAcCaIAAifQAAgSgFgIQgHgGgNAAQgeAAgBAlIAACaIg7AAIAAkzIA7AAIAABkIABAAQARgeAnAAQAcAAAPAQQAQAPAAAjIAACrg");
	this.shape_27.setTransform(-82.2,-46.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgeCaIAAkAIhDAAIAAgzIDDAAIAAAzIhDAAIAAEAg");
	this.shape_28.setTransform(-102.75,-46.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_greaterConsistency, new cjs.Rectangle(-157.8,-74.3,279.6,144.39999999999998), null);


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
	this.shape.setTransform(118.075,9.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(108.475,5.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_2.setTransform(98.1,0.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(90.75,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXBUIgrinIAsAAIAXB3IABAAIAWh3IArAAIgpCng");
	this.shape_4.setTransform(81.175,3.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_5.setTransform(71.6,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgCBqQgIgCgFgFQgEgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgHgCg");
	this.shape_6.setTransform(64.4,0.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_7.setTransform(53.575,3.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IAsAAIAAByQgBANAFAFQAEAFAKAAQAVAAAAgbIAAhuIArAAIAACmIgoAAIAAgUIgCAAQgGANgLAFQgKAFgNAAQgVAAgLgLg");
	this.shape_8.setTransform(39.65,3.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgUQAMgVAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhGIArAAIAADcIgpAAIAAgSIgBAAQgHAMgIAFQgIAFgNAAQgbgBgMgUgAgSgPQgEAOAAAaQAAAcAEAOQAFAOANgBQAOABAEgOQAEgOAAgcQAAgagEgOQgEgNgOAAQgNAAgFANg");
	this.shape_9.setTransform(24.975,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_10.setTransform(10.975,3.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAJgHQAJgIANABIAEAAIAEAAIAAApIgHgBIgHAAIgLACQgFABgFAEQgFADgCAGQgCAGAAAJIAABjg");
	this.shape_11.setTransform(0.05,2.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhABwIAAjbIApAAIAAASIABAAQAHgMAIgFQAIgFANAAQAbAAAMAUQAMAVAAAuQAAAugMAUQgMAUgbAAQgMAAgHgEQgJgFgHgKIAAAAIAABFgAgRhBQgEAOAAAbQAAAbAEANQAEAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgEANg");
	this.shape_12.setTransform(-12.325,5.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgvBmQgOgMAAgVIApAAQAAAIAGAEIAHAEIAHABQANAAAFgIQAFgJAAgMIAAgWIgBAAQgGAJgKAGQgIAGgKAAQgaAAgMgUQgNgTAAgtIABgdQACgPAFgNQAGgMAKgIQALgHARAAQAJAAAJAEQAJAGAGAMIABAAIAAgTIApAAIAACeQAAAhgQAPQgQAQgkABQgcgBgPgLgAgKhMQgEACgDAIQgCAHgBALIgBAcIABARQABAGACAGQADAHAEADQAEAEAGAAQAHAAAEgEQAFgDACgHQADgGABgHIABgUQAAgegFgNQgFgNgMAAQgGABgFADg");
	this.shape_13.setTransform(-33.625,5.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAVBWIAAhzQAAgNgFgFQgEgEgKgBQgWAAAAAcIAABuIgrAAIAAinIAqAAIAAAUIABAAQAGgMALgGQAKgGAOABQAUgBALALQALAMAAAZIAAB7g");
	this.shape_14.setTransform(-47.9,2.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_15.setTransform(-58.35,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("Ag6BUIAAgiIBChiIg+AAIAAgjIBwAAIAAAiIhBBiIBBAAIAAAjg");
	this.shape_16.setTransform(-67.65,3.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_17.setTransform(-80.825,3.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_18.setTransform(-98.875,2.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAoBvIgLgvIg5AAIgLAvIguAAIA6jdIA3AAIA6DdgAAWAbIgWhiIAAAAIgVBiIArAAg");
	this.shape_19.setTransform(-118.175,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-142.8,-20.3,279.6,40.7), null);


(lib.SureColor_lockup_intro = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-12.4,27.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup_intro, new cjs.Rectangle(-140.1,-2.6,255.39999999999998,60.4), null);


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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-18.45,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-144.1,-15.5,251.39999999999998,74), null);


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


(lib.image_03_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_03_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_slices, new cjs.Rectangle(-141,-203,282,406), null);


(lib.image_02_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_02_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_slices, new cjs.Rectangle(-141,-203,282,406), null);


(lib.image_01_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_01_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_slices, new cjs.Rectangle(-141,-203,282,406), null);


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

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,300,600), null);


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
	this.instance.setTransform(-65.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-65.5,-24,131,48), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},42).wait(289));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_53 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(44).to({graphics:mask_graphics_53,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// image_01
	this.instance_1 = new lib.image_01_1();
	this.instance_1.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(1).to({_off:true},1).wait(287));

	// printer
	this.instance_2 = new lib.Printer();
	this.instance_2.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


(lib.image_03_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_43 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(43).to({graphics:mask_graphics_43,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance = new lib.image_03_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(17).to({_off:true},1).wait(316));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(43).to({graphics:mask_1_graphics_43,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance_1 = new lib.image_03_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(25).to({_off:true},1).wait(316));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(43).to({graphics:mask_2_graphics_43,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance_2 = new lib.image_03_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(33).to({_off:true},1).wait(316));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


(lib.image_02_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_71 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(71).to({graphics:mask_graphics_71,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(288));

	// Layer_1
	this.instance = new lib.image_02_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(45).to({_off:true},1).wait(288));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(71).to({graphics:mask_1_graphics_71,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(288));

	// Layer_1
	this.instance_1 = new lib.image_02_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(53).to({_off:true},1).wait(288));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(71).to({graphics:mask_2_graphics_71,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(288));

	// Layer_1
	this.instance_2 = new lib.image_02_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(61).to({_off:true},1).wait(288));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


(lib.image_01_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_102 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(102).to({graphics:mask_graphics_102,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance = new lib.image_01_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(76).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(102).to({graphics:mask_1_graphics_102,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_1 = new lib.image_01_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(84).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_102 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(102).to({graphics:mask_2_graphics_102,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_2 = new lib.image_01_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(92).to({_off:true},1).wait(257));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


// stage content:
(lib.Epson_RDrive_300x600_V3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(34).to({alpha:0},11).wait(169).to({alpha:1},9).wait(128));

	// Layer_4
	this.instance_1 = new lib.txt_AmazingProductivity();
	this.instance_1.setTransform(147.05,185,1,1,0,0,0,-3,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({y:172,alpha:1},8,cjs.Ease.quadOut).wait(31).to({alpha:0},8).wait(32));

	// txt_Immediatelamination
	this.instance_2 = new lib.txt_Immediatelamination();
	this.instance_2.setTransform(148.05,185.05,1,1,0,0,0,-6,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(232).to({_off:false},0).to({y:172.05,alpha:1},9,cjs.Ease.quadOut).wait(32).to({alpha:0},8).wait(79));

	// SureColor_lockup
	this.instance_3 = new lib.SureColor_lockup();
	this.instance_3.setTransform(162.05,139.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(326).to({_off:false},0).to({alpha:1},15).wait(19));

	// printer_rolls
	this.instance_4 = new lib.printer_rolls();
	this.instance_4.setTransform(356,321);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(320).to({_off:false},0).to({x:258},15,cjs.Ease.quadOut).wait(25));

	// printer_mc
	this.instance_5 = new lib.printer_mc("single",0);
	this.instance_5.setTransform(151.15,308,0.8042,0.8042,0,0,0,0.2,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(232).to({_off:false},0).to({scaleX:0.9423,scaleY:0.9423,x:149.2,y:304,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).wait(44).to({mode:"single",startPosition:53},0).wait(35).to({startPosition:53},0).to({regX:0.4,regY:0.1,scaleX:0.6981,scaleY:0.6981,x:119.3,y:326.05},15,cjs.Ease.quadOut).wait(25));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_345 = new cjs.Graphics().p("ArwECQg8AAAAg8IAAAAIAAmLQAAg8A8AAIAAAAIXhAAQA8AAAAA8IAAAAIAAGLQAAA8g8AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(345).to({graphics:mask_graphics_345,x:147.825,y:485.8749}).wait(15));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-31.7,-24.3,31.8,24.3).s().p("AyWNsMAaygi+IJ7HnMgayAi+g");
	this.shape_1.setTransform(5.875,465.175);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(345).to({_off:false},0).wait(1).to({x:8.675,y:465.725},0).wait(1).to({x:17.075,y:467.275},0).wait(1).to({x:31.025,y:469.975},0).wait(1).to({x:50.625,y:473.675},0).wait(1).to({x:75.775,y:478.425},0).wait(1).to({x:106.525,y:484.275},0).wait(1).to({x:142.925,y:491.175},0).wait(1).to({x:179.275,y:498.075},0).wait(1).to({x:210.025,y:503.925},0).wait(1).to({x:235.175,y:508.675},0).wait(1).to({x:254.775,y:512.375},0).wait(1).to({x:268.725,y:515.075},0).wait(1).to({x:277.125,y:516.625},0).wait(1).to({x:279.925,y:517.175},0).wait(1));

	// ctaBtn
	this.instance_6 = new lib.ctaBtn();
	this.instance_6.setTransform(147.8,485.85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(335).to({_off:false},0).to({alpha:1},10).wait(15));

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_2.setTransform(152.05,302.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.11)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_3.setTransform(152.05,302.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.224)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_4.setTransform(152.05,302.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_5.setTransform(152.05,302.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.443)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_6.setTransform(152.05,302.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.557)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_7.setTransform(152.05,302.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.667)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_8.setTransform(152.05,302.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.776)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_9.setTransform(152.05,302.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.89)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_10.setTransform(152.05,302.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_11.setTransform(152.05,302.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},223).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(128));

	// txt_onARoll
	this.instance_7 = new lib.txt_onARoll();
	this.instance_7.setTransform(144.05,528.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).to({alpha:1},11).wait(30).to({alpha:0},11).wait(128));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_155 = new cjs.Graphics().p("A8cXSMAAAgujMA45AAAMAAAAujg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_1_graphics_155,x:157.05,y:244.25}).wait(205));

	// image_strip_01
	this.instance_8 = new lib.image_strip_01();
	this.instance_8.setTransform(145.5,-50.45);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({y:243.55},14,cjs.Ease.quadOut).wait(191));

	// image_strip_02
	this.instance_9 = new lib.image_strip_02();
	this.instance_9.setTransform(148.5,-50.45);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169).to({_off:false},0).to({y:243.55},14,cjs.Ease.quadOut).wait(177));

	// image_strip_03
	this.instance_10 = new lib.image_strip_03();
	this.instance_10.setTransform(149,-50.45);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(183).to({_off:false},0).to({y:243.55},14,cjs.Ease.quadOut).wait(163));

	// hallway_mc
	this.instance_11 = new lib.hallway_mc();
	this.instance_11.setTransform(150.1,300.1,1.1468,1.1468,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(145).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:300,alpha:1},10,cjs.Ease.quadOut).to({_off:true},78).wait(127));

	// txt_Immediatelamination
	this.instance_12 = new lib.txt_greaterConsistency();
	this.instance_12.setTransform(157.3,509.65);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({alpha:1},9).wait(82).to({alpha:0},11).to({_off:true},1).wait(203));

	// Image_Strip_Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("AHxfvMAAAg+nIAAg1IOSAAMAAAA/cgAnBfvMAAAg/cIOVAAIAAA1MAAAA+ngA2CfvMAAAg/cIOjAAMAAAA/cg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:151.05,y:210.05}).wait(103).to({graphics:null,x:0,y:0}).wait(203));

	// image_03_LG
	this.instance_13 = new lib.image_03_LG_1("synched",0,false);
	this.instance_13.setTransform(151,210);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(113).to({_off:false},0).to({_off:true},44).wait(203));

	// image_02_LG
	this.instance_14 = new lib.image_02_LG_1("synched",0,false);
	this.instance_14.setTransform(151,210);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(85).to({_off:false},0).to({_off:true},72).wait(203));

	// image_01_LG
	this.instance_15 = new lib.image_01_LG_1("synched",0,false);
	this.instance_15.setTransform(151,210);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({_off:true},103).wait(203));

	// logo_Lockup
	this.instance_16 = new lib.SureColor_lockup_intro();
	this.instance_16.setTransform(163.3,163.55);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:154.55,alpha:1},9).wait(34).to({alpha:0},10).to({_off:true},1).wait(306));

	// wht_fade
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_12.setTransform(151.05,341.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.102)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_13.setTransform(151.05,341.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.2)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_14.setTransform(151.05,341.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.302)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_15.setTransform(151.05,341.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.4)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_16.setTransform(151.05,341.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.502)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_17.setTransform(151.05,341.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.6)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_18.setTransform(151.05,341.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.698)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_19.setTransform(151.05,341.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.8)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_20.setTransform(151.05,341.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.898)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_21.setTransform(151.05,341.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_22.setTransform(151.05,341.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},43).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).wait(306));

	// printer_mc
	this.instance_17 = new lib.printer_mc("single",9);
	this.instance_17.setTransform(151.2,334,0.9423,0.9423,0,0,0,0.2,0);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},9).to({_off:true},45).wait(306));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(114,256,284,388.1);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"hallway.jpg", id:"hallway"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_01_LG.jpg", id:"image_01_LG"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_02_LG.jpg", id:"image_02_LG"},
		{src:"image_03.jpg", id:"image_03"},
		{src:"image_03_LG.jpg", id:"image_03_LG"},
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