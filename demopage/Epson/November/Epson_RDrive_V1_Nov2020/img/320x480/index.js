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
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgaAgIAAg/IA1AAIAAA/g");
	this.shape.setTransform(77.975,-74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_1.setTransform(69.425,-85.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_2.setTransform(60.875,-85.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBtQgRgHgKgOQgKgPgEgWQgEgWAAgdQAAgbAEgWQAFgVALgPQAJgOARgIQARgHAXAAQAZgBARAHQARAHAKAPQAKAPADAWQAFAVAAAcQAAAdgFAVQgEAWgKAPQgLAOgQAHQgRAHgYAAIgCAAQgYAAgPgGgAgQhGQgFAFgEALQgDAKAAAOIgBAeIABAgQAAAOADAKQAEALAFAFQAHAGAJAAQARAAAHgSQAGgSAAgqQAAgogGgSQgHgSgRAAQgJAAgHAGg");
	this.shape_3.setTransform(47.4,-82.3792);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BxIAAjbIA2AAIAAAdIABAAQAIgQALgKQANgJASAAIAEAAIAGAAIAAA2IgJAAIgJAAIgPACQgHACgGAEQgGAFgEAIQgDAIAAALIAACDg");
	this.shape_4.setTransform(32.85,-82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BuQgLgFgGgJQgGgJgDgLQgDgLAAgMQAAgPAEgMQADgLAHgIQAGgHALgFQAKgFAPgFIAfgIQANgDAFgGQAEgGAAgLQAAgNgFgHQgGgHgOAAQgNAAgGAIQgHAIAAANIAAAGIgzAAIAAgGQAAgTAGgNQAHgNAKgIQAKgIAPgDQAOgDAQAAQAYAAAQAEQAPAFAJAJQAJAJADANQADAMAAAPIAABzIABAYIAGATIg3AAIgEgLIgDgMIAAAAQgKARgNAFQgMAFgUAAQgPAAgKgFgAAMAIIgMADQgQAEgHAJQgIAIAAAPQAAANAFAJQAFAJAMAAIALgCQAGgCAFgEQAFgEADgGQADgHAAgJIAAgsg");
	this.shape_5.setTransform(7.875,-82.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBxIAAiXQAAgRgGgHQgGgHgMAAQgdAAAAAkIAACSIg4AAIAAjbIA2AAIAAAZIABAAQAIgQAOgIQAOgHASAAQAbAAAPAPQAOAOAAAhIAACjg");
	this.shape_6.setTransform(-19.4,-82.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBtQgRgHgKgOQgKgPgEgWQgEgWAAgdQAAgbAFgWQAEgVALgPQAJgOARgIQARgHAXAAQAZgBARAHQARAHAKAPQAKAPADAWQAFAVAAAcQAAAdgFAVQgEAWgKAPQgKAOgRAHQgRAHgYAAIgCAAQgYAAgPgGgAgQhGQgGAFgDALQgDAKAAAOIgBAeIABAgQAAAOADAKQADALAGAFQAHAGAJAAQARAAAHgSQAGgSAAgqQAAgogGgSQgHgSgRAAQgJAAgHAGg");
	this.shape_7.setTransform(-38.2,-82.3792);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHCSIAAgrIAOACQAQAAAHgIQAHgJABgNIg+jcIA7AAIAgCYIAAAAIAdiYIA5AAIg1DNQgIAbgHARQgGARgKAKQgHAJgOADQgNADgTAAg");
	this.shape_8.setTransform(130.35,-116.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_9.setTransform(117.625,-123.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhuAAIAAASIABATIAFAQQADAHAFAFQAGAEAGAAQAPAAAGgKQAHgLACgVIAzAAQgCAngSAUQgTAUgpAAQgdAAgSgKgAgLhIQgGAEgDAGIgFAOIgBAQIAAAIIA4AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgFAEg");
	this.shape_10.setTransform(104.475,-119.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgECMQgKgCgFgHQgHgHgBgLQgCgLgBgRIAAh9IgcAAIAAgmIAcAAIAAg/IA4AAIAAA/IAhAAIAAAmIghAAIAAB3QAAANAEAFQAEAGAMAAIAHgBIAGAAIAAAnIgSABIgTAAQgQAAgKgCg");
	this.shape_11.setTransform(90.3,-122.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbCUIAAjbIA3AAIAADbgAgbhiIAAgxIA3AAIAAAxg");
	this.shape_12.setTransform(80.525,-123.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBxIAAiXQAAgSgGgGQgFgHgNAAQgdAAAAAlIAACRIg5AAIAAjbIA2AAIAAAZIABAAQAKgQAOgIQANgHATAAQAbAAAOAPQAPAOAAAhIAACjg");
	this.shape_13.setTransform(66.6,-120.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbCUIAAjbIA3AAIAADbgAgbhiIAAgxIA3AAIAAAxg");
	this.shape_14.setTransform(52.725,-123.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeCVIAAi1IgcAAIAAgmIAcAAIAAgZQABgPADgKQAFgLAIgGQAHgGAKgDQALgCAOAAIAeABIAAAoIgGAAIgFAAQgMAAgFAEQgFAEAAAJIAAAUIAhAAIAAAmIghAAIAAC1g");
	this.shape_15.setTransform(43.1,-123.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhuAAIAAASIABATIAFAQQADAHAFAFQAGAEAGAAQAPAAAGgKQAHgLACgVIAzAAQgCAngSAUQgTAUgpAAQgdAAgSgKgAgLhIQgGAEgDAGIgFAOIgBAQIAAAIIA4AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgFAEg");
	this.shape_16.setTransform(28.725,-119.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhFB6QgQgbAAg9QAAg9AQgbQAQgbAkAAQAPAAALAGQALAHAJANIABAAIAAhcIA4AAIAAEjIg2AAIAAgXIgBAAQgJAPgMAGQgKAGgRABQgkAAgQgbgAgXgTQgGARAAAkQAAAkAGASQAGATARgBQATABAFgTQAGgSAAgkQAAgkgGgRQgFgTgTAAQgRAAgGATg");
	this.shape_17.setTransform(9.975,-123.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhuAAIAAASIABATIAFAQQADAHAFAFQAGAEAGAAQAPAAAGgKQAHgLACgVIAzAAQgCAngSAUQgTAUgpAAQgdAAgSgKgAgLhIQgGAEgDAGIgFAOIgBAQIAAAIIA4AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgFAEg");
	this.shape_18.setTransform(-16.775,-119.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BxIAAjbIA2AAIAAAdIABAAQAHgQANgKQAMgJASAAIAEAAIAGAAIAAA2IgJAAIgJAAIgPACQgHACgGAEQgGAFgEAIQgDAIAAAKIAACEg");
	this.shape_19.setTransform(-30.95,-120.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4BuQgLgFgGgJQgGgJgDgLQgDgLAAgMQAAgPAEgMQADgLAHgIQAGgHALgFQAKgFAPgFIAfgIQANgDAFgGQAEgGAAgLQAAgNgFgHQgGgHgOAAQgNAAgGAIQgHAIAAANIAAAGIgzAAIAAgGQAAgTAGgNQAHgNAKgIQAKgIAPgDQAOgDAQAAQAYAAAQAEQAPAFAJAJQAJAJADANQADAMAAAPIAABzIABAYIAGATIg3AAIgEgLIgDgMIAAAAQgKARgNAFQgMAFgUAAQgPAAgKgFgAAMAIIgMADQgQAEgHAJQgIAIAAAPQAAANAFAJQAFAJAMAAIALgCQAGgCAFgEQAFgEADgGQADgHAAgJIAAgsg");
	this.shape_20.setTransform(-47.375,-119.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhuAAIAAASIABATIAFAQQADAHAFAFQAGAEAGAAQAPAAAGgKQAHgLACgVIAzAAQgCAngSAUQgTAUgpAAQgdAAgSgKgAgLhIQgGAEgDAGIgFAOIgBAQIAAAIIA4AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgFAEg");
	this.shape_21.setTransform(-73.875,-119.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhCSIghjTIAAAAIggDTIhCAAIg2kjIA5AAIAhDXIAAAAIAjjXIA3AAIAjDXIABAAIAgjXIA5AAIg2Ejg");
	this.shape_22.setTransform(-97.675,-123.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-122.5,-150.1,270.1,89.89999999999999), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQWC5QAMgXAKgWQAJgWAFgWQAGgVACgYQADgXgBgaQABgZgDgXQgCgXgGgXQgFgWgJgWQgKgWgMgXIAsAAQAfAwANAvQANAuAAAqQAAArgNAuQgNAugfAwgAxAC5QgggwgMguQgOguAAgrQAAgqAOguQAMguAggxIArAAQgNAXgJAWQgJAWgGAWQgFAXgCAXQgDAXAAAZQAAAaADAXQACAYAFAVQAGAWAJAWQAJAWANAXgAKgBtQgRgHgKgOQgKgPgEgWQgEgWAAgdQAAgbAFgWQAEgVALgPQAJgOARgIQARgHAYAAQAZgBARAHQARAHAKAPQAKAPADAWQAFAVAAAcQAAAdgFAVQgEAWgKAPQgKAOgRAHQgRAHgYAAIgDAAQgYAAgPgGgAK5hGQgGAFgDALQgDAKAAAOIAAA+QAAAOADAKQADALAGAFQAHAGAKAAQARAAAHgSQAGgSAAgqQAAgogGgSQgHgSgRAAQgKAAgHAGgABoBuQgQgFgKgNQgKgOgFgWQgGgWAAgiQAAghAHgWQAGgWAMgOQAMgNAQgFQARgFATAAQAoAAAUAWQAUAXAAAoIg2AAIgBgQIgEgOQgDgHgFgEQgEgEgJAAQgKAAgHAFQgGAFgEAJQgDAJgBAOIAABEQABAOADAKQAEAJAGAFQAGAEAJAAQAOAAAHgMQAGgNABgbIA2AAQgBAsgSAXQgUAWguAAQgUAAgRgFgArMBpQgSgLgKgTQgJgSgDgZQgDgZAAgZIABg8QADgdAJgWQAJgXAUgNQATgOAkAAQAQAAAOAEQAPAEALAIQALAJAHAOQAHAOAAAVIg4AAQAAgRgHgJQgFgJgPAAQgMAAgGAGQgIAFgEAKQgDAKgCANIgBAsIABAAQAHgLANgHQAOgHAUAAQAUAAANAHQANAHAJAMQAIAMAEAQQAEARAAATQAAAygWAaQgWAagyAAQgeAAgSgKgAqygVQgHANgBAcIACAXQABALAEAIQADAHAHAFQAFAEALAAQALAAAGgEQAGgFAEgHQADgIABgLIABgXQAAgcgIgNQgGgMgSAAQgRAAgIAMgAPZBvIAAhAIA2AAIAABAgAOFBvIAAkkIA4AAIAAEkgAMyBvIAAkkIA5AAIAAEkgAIBBvIAAjcIA2AAIAAAeIABAAQAIgQAMgKQANgJARAAIALAAIAAA2IgRAAIgPACQgIACgGAEQgGAFgEAIQgDAHgBALIAACEgAFfBvIAAiXQgBgSgFgGQgGgHgNAAQgdAAAAAkIAACSIg5AAIAAkkIA5AAIAABfIABAAQAPgcAmAAQAbAAAOAOQAPAPAAAhIAACjgAgNBvIAAiXQAAgSgGgGQgFgHgNAAQgeAAAAAkIAACSIg4AAIAAjcIA2AAIAAAaIAAAAQAKgQAOgIQAOgHASAAQAaAAAPAOQAOAPAAAhIAACjgAjMBvIAAjcIA4AAIAADcgAnHBvIAAg9IhmAAIAAgwIBfi1IA9AAIAAC4IAcAAIAAAtIgcAAIAAA9gAoAAFIA5AAIAAhuIAAAAgAt+BvIgNg+IhPAAIgNA+Ig9AAIBNkkIBJAAIBNEkgAvPAAIA5AAIgciCIgBAAgAlYAQIAAgvIBzAAIAAAvgAjMiIIAAgwIA4AAIAAAwg");
	this.shape.setTransform(13.25,-100.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-101.4,-119.5,229.4,37.099999999999994), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AP/BtQgMgFgIgLQgHgLgDgRQgEgRAAgVQAAgVAEgQQADgQAIgLQAIgLAMgGQANgGASAAQATAAANAFQANAGAHALQAIALADAQQADAQAAAWQAAAVgEARQgDAQgIALQgHALgNAFQgNAGgSAAIgDAAQgRAAgMgFgAQTgaQgFAEgCAIQgDAHAAAKIAAAvQAAALADAIQACAIAFAEQAEAEAIAAQANAAAFgNQAFgOAAgfQAAgegFgOQgFgOgNAAQgIAAgEAFgALABuQgIgEgFgHQgEgHgCgIQgDgJAAgIQAAgMADgIQACgJAGgGQAFgGAIgEQAHgEAMgDIAYgHQAJgCAEgFQAEgDAAgIQAAgKgFgFQgEgGgLAAQgKAAgFAGQgFAGAAAKIAAAFIgmAAIAAgEQAAgPAEgKQAFgKAIgGQAIgGALgCQAKgDAMAAQATAAAMAEQAMAEAHAGQAGAHACAKQADAJAAALIABBpIAEAOIgpAAIgDgIIgCgJIgBAAQgHANgKAEQgKAEgPAAQgLAAgIgEgAL1AgIgKADQgNADgFAHQgGAGAAALQAAAKAEAHQAEAGAIAAIAKgBQAEgBAEgDIAGgIQADgFAAgHIAAghgABlBuQgHgEgFgHQgFgHgCgIQgCgJAAgIQAAgMACgIQADgJAFgGQAFgGAIgEQAIgEALgDIAYgHQAKgCAEgFQADgDAAgIQAAgKgEgFQgFgGgLAAQgJAAgFAGQgFAGAAAKIAAAFIgnAAIAAgEQAAgPAFgKQAFgKAHgGQAIgGALgCQALgDAMAAQATAAAMAEQAMAEAGAGQAHAHACAKQACAJAAALIABBpIAEAOIgoAAIgEgIIgCgJIAAAAQgIANgKAEQgJAEgQAAQgLAAgIgEgACaAgIgJADQgNADgGAHQgFAGAAALQAAAKAEAHQADAGAJAAIAJgBQAFgBAEgDIAGgIQACgFAAgHIAAghgAivBqQgNgIgHgNQgGgMgBgQIgCggQAAgQADgPQACgPAHgMQAHgNANgHQANgHAWAAQASAAAMAGQAMAGAHALQAHALACAQQADAPAAATIAAAJIhVAAIABAcIAEAMQACAGAEADQAEADAGAAQALAAAFgHQAFgIACgQIAmAAQgBAdgOAPQgPAQgeAAQgXAAgNgIgAiWgcQgEADgCAFIgEALIgBARIAsAAIgCgQQAAgHgDgFQgCgFgEgDQgEgDgHAAQgGAAgFADgAmhBuQgIgEgFgHQgEgHgCgIQgDgJAAgIQAAgMADgIQACgJAGgGQAFgGAIgEQAHgEAMgDIAYgHQAJgCAEgFQAEgDAAgIQAAgKgFgFQgEgGgLAAQgKAAgFAGQgFAGAAAKIAAAFIgmAAIAAgEQAAgPAEgKQAFgKAIgGQAIgGALgCQAKgDAMAAQATAAAMAEQAMAEAHAGQAGAHACAKQADAJAAALIABBpIAEAOIgpAAIgDgIIgCgJIgBAAQgHANgKAEQgKAEgPAAQgLAAgIgEgAlsAgIgKADQgNADgFAHQgGAGAAALQAAAKAEAHQAEAGAIAAIAKgBQAEgBAEgDIAGgIQADgFAAgHIAAghgAqJBdQgMgUAAguQAAguAMgUQANgVAaAAQAMAAAJAFQAIAFAHAKIABAAIAAhGIArAAIAADcIgpAAIAAgRIgBAAQgHALgJAFQgJAFgNAAQgaAAgNgVgApmgNQgEANAAAbQAAAbAEAOQAEAOAOAAQAOAAAFgOQAEgOAAgbQAAgbgEgNQgFgOgOAAQgOAAgEAOgAsIBqQgNgIgGgNQgGgMgCgQIgBggQAAgQACgPQACgPAHgMQAHgNANgHQANgHAWAAQATAAAMAGQAMAGAGALQAHALADAQQACAPAAATIAAAJIhUAAIABAcIADAMQADAGAEADQAEADAGAAQALAAAFgHQAEgIACgQIAnAAQgCAdgOAPQgOAQgfAAQgXAAgNgIgArugcQgEADgDAFIgDALIgBARIArAAIgBgQQgBgHgCgFQgCgFgFgDQgEgDgGAAQgHAAgEADgANfBtQgIgBgEgFQgEgFgCgJQgBgIAAgNIAAheIgWAAIAAgeIAWAAIAAgvIArAAIAAAvIAYAAIAAAeIgYAAIAABZQAAAKADAEQACAEAKAAIAJgBIAAAeIgbABQgNAAgIgCgAkCBtQgIgBgEgFQgEgFgCgJQgBgIAAgNIAAheIgWAAIAAgeIAWAAIAAgvIArAAIAAAvIAYAAIAAAeIgYAAIAABZQAAAKADAEQACAEAKAAIAJgBIAAAeIgbABQgNAAgIgCgAUQBuIAAgwIApAAIAAAwgATJBuIAAhyQAAgNgFgFQgEgFgKAAQgWAAAAAbIAABuIgrAAIAAimIApAAIAAAUIABAAQAGgMALgGQALgGAOAAQAUAAALALQAMALAAAaIAAB6gAOdBuIAAimIArAAIAACmgAJrBuIAAhyQAAgNgEgFQgEgFgKAAQgXAAAAAbIAABuIgrAAIAAimIApAAIAAAUIABAAQAHgMALgGQALgGANAAQAVAAALALQALALAAAaIAAB6gAHRBuIAAimIArAAIAACmgAGMBuIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAimIApAAIAAASIABAAQAIgMAKgFQAKgFAOAAQAPAAAKAHQAKAHADANIABAAQAFgNALgHQALgHAPAAQAVAAAKANQAKANAAAYIAAB4gAAPBuIAAjcIArAAIAADcgAn3BuIAAimIArAAIAACmgAtiBuIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAimIApAAIAAASIABAAQAIgMAKgFQAKgFAOAAQAPAAAKAHQAKAHADANIABAAQAFgNALgHQALgHAPAAQAVAAAKANQAKANAAAYIAAB4gAxKBuIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAhzQAAgLgEgFQgEgGgJAAQgKAAgGAHQgGAHAAAOIAABtIgrAAIAAimIApAAIAAASIABAAQAIgMAKgFQAKgFAOAAQAPAAAKAHQAKAHADANIABAAQAFgNALgHQALgHAPAAQAVAAAKANQAKANAAAYIAAB4gA04BuIAAjcIAtAAIAADcgAOdhMIAAglIArAAIAAAlgAHRhMIAAglIArAAIAAAlgAn3hMIAAglIArAAIAAAlg");
	this.shape.setTransform(4.675,-20.0229);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-129,-31.4,267.4,22.799999999999997), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(6.7,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-128.7,-31,270.79999999999995,27.9), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("Al8CAQgOgLAAgWIApAAQAAAJAGAEIAHADIAIACQANAAAFgJQAFgIAAgNIAAgVIgBAAQgGAJgKAFQgJAGgKAAQgaAAgMgTQgNgUAAgsIACgeQABgPAGgNQAFgLAKgJQALgHARAAQAJAAAKAFQAKAFAFANIABAAIAAgTIAqAAIAACdQAAAhgRAQQgQAQglAAQgbAAgQgMgAlWgyQgFADgCAHQgDAHgBALIAAAsQABAIADAGQACAGAEAEQAEADAHAAQAHAAAEgDQAFgEADgGQACgGABgJIABgUQAAgdgEgNQgGgMgMAAQgHAAgEADgARrCJIAAgfIAMABQALgBAGgGQAEgGABgKIguikIAAAcIgZAAIAABZQAAAKAEADQACAFAKAAIAJgBIAAAeIgcABQgMAAgIgCQgIgCgEgFQgEgEgCgJQgBgIAAgNIAAheIgWAAIAAgeIAWAAIAAgwIAqAAIAAAwIBFAAIAZByIABAAIAVhyIArAAIgoCbIgLAiQgFAMgHAIQgHAGgKADQgKABgPAAgAipCJIAAjbIApAAIAAASIABAAQAHgMAIgFQAKgFANAAQAaAAAMAUQAMAVAAAuQAAAugMAUQgMAUgaABQgMAAgJgFQgJgFgGgKIgBAAIAABFgAh6goQgEAOAAAbQAAAbAEANQAEAOAOAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgOAAgEANgABvBSQgMgEgHgMQgIgLgDgQQgEgRAAgVQAAgVAEgQQADgRAJgKQAHgMAMgFQANgGATAAQASAAANAFQANAGAHALQAIALADAQQADAQAAAWQAAAVgDAQQgEARgIALQgHALgNAFQgMAGgSAAIgEAAQgRAAgMgGgACDg0QgFAEgCAHQgCAIgBALIAAAuQABALACAIQACAIAFAEQAEAEAJAAQAMAAAGgNQAEgOAAgfQAAgegEgOQgGgOgMAAQgJAAgEAFgAI0BTQgMgEgIgJQgIgKgEgRQgEgSAAgYQAAgZAFgRQAFgRAJgKQAJgKANgEQAMgEAPAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgKQgCgFgEgDQgEgDgFAAQgJAAgFADQgFAEgCAHQgCAHgBAKIAAA0QABAKACAIQADAGAEAEQAEADAIAAQAKAAAFgJQAGgKAAgUIApAAQAAAhgPARQgPARgiABQgQgBgMgEgAGJBMQgMgKAAgZIAAh7IAsAAIAAByQAAAOAEAEQAEAGAKgBQAWAAAAgbIAAhuIArAAIAACmIgoAAIAAgUIgBAAQgHANgLAFQgLAGgNAAQgVAAgLgMgADtBDQgMgUABguQgBguAMgVQANgUAaAAQANAAAIAFQAJAFAGAKIABAAIAAhGIArAAIAADcIgpAAIAAgSIgBAAQgHAMgIAFQgKAFgNAAQgagBgNgUgAEQgoQgEAOAAAbQAAAbAEANQAFAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgFANgAttBTQgIgDgEgHQgFgHgCgJQgDgIABgJQgBgLADgJQADgIAFgHQAFgFAIgEQAHgDAMgDIAYgHQAJgDAFgEQADgEAAgIQAAgKgEgGQgFgFgLAAQgJAAgGAGQgEAGAAAKIAAAEIgnAAIAAgDQAAgQAFgJQAEgKAIgGQAIgGALgDQALgCAMAAQASAAAMAEQAMAEAHAGQAGAHACAKQADAJAAALIABBpIAEAOIgoAAIgEgJIgCgJIgBAAQgHAOgKADQgKAEgPABQgLgBgIgEgAs4AGIgKADQgMADgGAHQgGAGAAALQAAAJAFAIQADAGAIAAIAKgBQAFgBADgDIAHgIQACgFAAgHIAAghgALABTQgIgCgEgFQgEgEgCgJQgCgIABgNIAAheIgWAAIAAgeIAWAAIAAgwIArAAIAAAwIAYAAIAAAeIgYAAIAABZQAAAKADADQACAFAJAAIAKgBIAAAeIgcABQgMAAgIgCgAT1BUIAAgwIAoAAIAAAwgAPMBUIAAimIArAAIAACmgANiBUIgrimIAsAAIAZB3IAAAAIAWh3IArAAIgpCmgAL+BUIAAimIArAAIAACmgAgQBUIAAimIAnAAIAAAWIABAAQAHgMAJgHQAJgHAOAAIADAAIAFAAIAAAqIgOgBIgLACQgFABgFADQgFAEgCAFQgDAHAAAIIAABjgAnOBUIAAhyQABgNgFgFQgEgFgKAAQgXAAABAcIAABtIgsAAIAAimIAqAAIAAAUIABAAQAGgNALgFQALgGANAAQAVAAALALQALALAAAZIAAB7gApoBUIAAimIArAAIAACmgArxBUIAAghIBChiIg/AAIAAgjIByAAIAAAhIhCBiIBCAAIAAAjgAvBBUIAAh0QAAgKgEgGQgEgFgJAAQgKAAgGAHQgGAGAAAPIAABtIgrAAIAAh0QAAgKgEgGQgDgFgJAAQgLAAgGAHQgGAGAAAPIAABtIgrAAIAAimIApAAIAAASIABAAQAIgMAKgFQAKgFAOAAQAPAAAKAHQAKAHADAMIABAAQAFgNALgGQALgHAPAAQAWAAAJANQALAMAAAZIAAB4gAyfBUIgKgvIg6AAIgLAvIgvAAIA7jcIA4AAIA6DcgAzcABIArAAIgVhjIAAAAgAPMhmIAAglIArAAIAAAlgAL+hmIAAglIArAAIAAAlgApohmIAAglIArAAIAAAlg");
	this.shape.setTransform(3.8,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-127.1,-30.4,261.9,28), null);


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
	this.shape.setTransform(-14.95,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-149.1,-15.5,268.4,74), null);


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

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,320,480), null);


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
	this.instance.setTransform(-69,-29,0.8125,0.8125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-69,-29,106.5,39), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},129).wait(203));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(181).to({_off:true},1).wait(150));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_190 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(181).to({graphics:mask_graphics_190,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(150));

	// image_03
	this.instance_1 = new lib.image_03_1();
	this.instance_1.setTransform(-100.6,-59.15,0.4808,0.4808,0,0,0,-179.7,-71.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({y:13.05},43).wait(52).to({_off:true},1).wait(150));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-57.3,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({y:10.3},43).to({regX:-180,regY:-71.5,scaleX:0.4799,scaleY:0.4799,x:-100.7,y:50.5},26).to({regX:-180.2,x:-100.8,y:62.85,alpha:0},8).to({regX:-179.9,regY:-71.7,scaleX:0.48,scaleY:0.48,x:-100.65,y:76.65},9).wait(52).to({_off:true},1).wait(150));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42).to({regX:-0.1,regY:0.1,x:-14.3,y:87.4},26).to({regX:-0.2,regY:0.2,y:100.05,alpha:0},8).to({regX:0,regY:0,x:-14.25,y:114.2},9).wait(95).to({_off:true},1).wait(150));

	// printer
	this.instance_4 = new lib.Printer();
	this.instance_4.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(181).to({_off:true},1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


// stage content:
(lib.Epson_RDrive_320x480_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(165).to({alpha:0},11).wait(134).to({alpha:1},9).wait(32));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(171.05,117.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// printer_rolls
	this.instance_2 = new lib.printer_rolls();
	this.instance_2.setTransform(363,290);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({x:273},11,cjs.Ease.quadOut).wait(21));

	// printer_mc
	this.instance_3 = new lib.printer_mc("single",57);
	this.instance_3.setTransform(-134.85,286.2,0.7775,0.7775,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({x:125.15},11,cjs.Ease.quadOut).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("AqnDpQg2AAAAg2IAAAAIAAllQAAg2A2AAIAAAAIVPAAQA2AAAAA2IAAAAIAAFlQAAA2g2AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:147.8227,y:424.3725}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.5,-14.2,18.5,14.2).s().p("AqsH/IPn0ZIFyEcIvnUZg");
	this.shape_1.setTransform(49.375,397.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.5,-14.2,18.5,14.1).s().p("AqsH/IPn0ZIFyEcIvnUZg");
	this.shape_2.setTransform(52.05,398.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.5,-14.3,18.5,14.1).s().p("AqtH/IPo0ZIFzEbIvoUbg");
	this.shape_3.setTransform(60.05,400.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.5,-14.3,18.6,14.1).s().p("AquIAIPq0bIFzEcIvpUbg");
	this.shape_4.setTransform(73.375,405);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.6,-14.2,18.6,14.2).s().p("AqvIBIPr0eIF0EdIvrUeg");
	this.shape_5.setTransform(92.075,411.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.6,-14.3,18.7,14.2).s().p("AqwICIPt0gIF0EdIvsUgg");
	this.shape_6.setTransform(116.075,418.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.7,-14.4,18.6,14.2).s().p("AqyIDIPw0kIF1EfIvwUjg");
	this.shape_7.setTransform(145.45,428.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.7,-14.3,18.7,14.3).s().p("Aq0IFIPy0oIF3EgIvyUng");
	this.shape_8.setTransform(174.775,437.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.7,-14.4,18.8,14.3).s().p("Aq1IGIP00qIF3EgIv0Upg");
	this.shape_9.setTransform(198.775,445.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.8,-14.4,18.8,14.4).s().p("Aq2IHIP10tIF4EhIv1Usg");
	this.shape_10.setTransform(217.475,451.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.8,-14.4,18.8,14.4).s().p("Aq3IHIP30tIF4EgIv3Utg");
	this.shape_11.setTransform(230.8,456.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.8,-14.4,18.9,14.4).s().p("Aq4IHIP40uIF4EhIv3Uug");
	this.shape_12.setTransform(238.8,458.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-18.8,-14.4,18.9,14.4).s().p("Aq4IIIP40vIF5EhIv4Uug");
	this.shape_13.setTransform(241.475,459.675);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},347).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(147.8,424.35,0.9029,0.9029);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

	// BG
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_14.setTransform(152.05,302.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.11)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_15.setTransform(152.05,302.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.224)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_16.setTransform(152.05,302.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.333)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_17.setTransform(152.05,302.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.443)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_18.setTransform(152.05,302.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.557)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_19.setTransform(152.05,302.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.667)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_20.setTransform(152.05,302.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.776)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_21.setTransform(152.05,302.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.89)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_22.setTransform(152.05,302.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_23.setTransform(152.05,302.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},319).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(32));

	// txt_onARoll
	this.instance_5 = new lib.txt_inchRoll();
	this.instance_5.setTransform(146.05,509.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(278).to({_off:false},0).to({alpha:1},9).wait(32).to({alpha:0},9).wait(32));

	// txt_onARoll
	this.instance_6 = new lib.txt_onARoll();
	this.instance_6.setTransform(144.05,528.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},9).wait(82));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("A1QXSMAAAgujMAqgAAAMAAAAujg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:163.05,y:215.25}).wait(171));

	// image_strip_01
	this.instance_7 = new lib.image_strip_01();
	this.instance_7.setTransform(160.4,-90.35,1.03,1.03);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({y:218.65},27,cjs.Ease.quadOut).wait(144));

	// image_strip_02
	this.instance_8 = new lib.image_strip_02();
	this.instance_8.setTransform(163.5,-85.35,1.03,1.03);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(216).to({_off:false},0).to({y:218.65},27,cjs.Ease.quadOut).wait(117));

	// image_strip_03
	this.instance_9 = new lib.image_strip_03();
	this.instance_9.setTransform(164,-85.35,1.03,1.03);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(243).to({_off:false},0).to({y:218.65},26,cjs.Ease.quadOut).wait(91));

	// hallway_mc
	this.instance_10 = new lib.hallway_mc();
	this.instance_10.setTransform(150.1,300.1,1.1468,1.1468,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(179).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:300,alpha:1},10,cjs.Ease.quadOut).to({_off:true},140).wait(31));

	// txt_AmazingProductivity
	this.instance_11 = new lib.txt_AmazingProductivity();
	this.instance_11.setTransform(153.3,188.55);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(45).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_Immediatelamination
	this.instance_12 = new lib.txt_Immediatelamination();
	this.instance_12.setTransform(153.3,190.55);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(61).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(39).to({alpha:0},10).to({_off:true},1).wait(240));

	// txt_consistentQuality
	this.instance_13 = new lib.txt_consistentQuality();
	this.instance_13.setTransform(153.3,186.55);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(41).to({alpha:0},10).to({_off:true},1).wait(299));

	// printer_mc
	this.instance_14 = new lib.printer_mc("single",0);
	this.instance_14.setTransform(159.35,314.15,0.6762,0.6762,0,0,0,0.3,0.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.2,scaleX:0.9859,scaleY:0.9859,x:159.3,y:323.2,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).to({_off:true},182).wait(169));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,196,504.3,430.20000000000005);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 320,
	height: 480,
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