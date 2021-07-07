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



(lib.background_gradient = function() {
	this.initialize(img.background_gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.backpack = function() {
	this.initialize(img.backpack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,66);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,44);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,136);


(lib.kidSchool = function() {
	this.initialize(img.kidSchool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,66);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,175);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,61);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,147);


(lib.schoolPaper = function() {
	this.initialize(img.schoolPaper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,41);// helper functions:

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


(lib.txt_homework = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgWAXIAAgsIAtAAIAAAsg");
	this.shape.setTransform(342.1,-172.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYBoIgohDIgQAPIAAA0IgqAAIAAjPIAqAAIAABvIAzg2IAxAAIg5A3IBABfg");
	this.shape_1.setTransform(330.675,-181.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBOIAAiXIAnAAIAAAcIAAAAQADgGAFgGQAEgHAGgDQAHgFAIgCQAHgCAHAAIAJABIAAAmIgGgBIgIAAQgMAAgHADQgJAFgFAGQgDAHgCAIQgCAJgBAJIAABFg");
	this.shape_2.setTransform(316.3,-178.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgLAPgFQAOgGARABQASgBAOAGQAPAFAKALQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAJQgCAIAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgIQgCgJgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_3.setTransform(300.875,-178.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbBMIgbhlIAAAAIgZBlIgrAAIgwiXIAsAAIAcBmIAAAAIAZhmIAoAAIAZBlIABAAIAchlIAqAAIgvCXg");
	this.shape_4.setTransform(279.975,-178.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBKQgPgGgKgKQgJgLgGgPQgFgPAAgRQAAgQAFgPQAGgOAKgLQAKgLAOgGQAPgFAQAAQATgBAPAIQAOAIAJAMQAJANAEAQQAEAQgBAQIhsAAQABAVAJAJQAKAJAQAAQANgBAJgGQAJgHACgGIAlAAQgJAbgSALQgSAMgaAAQgRAAgOgFgAgPgsQgGADgEAFQgEAFgCAGIgCAKIBDAAQgDgQgIgIQgHgJgPAAQgJABgHADg");
	this.shape_5.setTransform(259.685,-178.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABKBOIAAhVIgBgOQAAgHgDgFQgCgFgGgDQgFgDgJAAQgIAAgGAEQgFADgDAFQgDAGgCAGIgBAPIAABTIgoAAIAAhUIAAgOQgBgGgCgFQgCgGgFgDQgFgEgKAAIgIABQgEACgFADQgEAEgEAHQgDAHAAALIAABXIgqAAIAAiXIAnAAIAAAVIABAAQAJgMALgGQAMgHAPABQAOgBAMAGQAKAFAHAOQAGgJAMgIQALgIAQABQAMAAAKACQAKADAHAGQAIAHAEALQAEAKABAPIAABkg");
	this.shape_6.setTransform(238,-178.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgLAPgFQAOgGARABQASgBAOAGQAPAFAKALQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAJQgCAIAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgIQgCgJgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_7.setTransform(215.825,-178.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqBoIAAhaIhTAAIAABaIguAAIAAjPIAuAAIAABQIBTAAIAAhQIAuAAIAADPg");
	this.shape_8.setTransform(196.025,-181.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBoIAAh6IgZAAIAAgcIAZAAIAAgMQAAgUANgMQALgNAaAAIALAAIALABIAAAfIgQgBQgIAAgEAEQgDAEAAAJIAAAJIAcAAIAAAcIgcAAIAAB6g");
	this.shape_9.setTransform(172.125,-181.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgLAPgFQAOgGARABQASgBAOAGQAPAFAKALQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAJQgCAIAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgIQgCgJgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_10.setTransform(158.325,-178.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgYBMQgNgCgJgGQgKgGgGgLQgHgJAAgQIAoAAQgBAHADAFQADAFAFADQAEADAGABIAKACIAJgBIAJgDQAEgDADgEQACgDAAgGQAAgJgMgEQgMgFgWgFIgSgFQgIgCgHgEQgGgFgFgGQgDgHAAgKQgBgPAGgJQAGgJAJgGQAKgFALgCQAMgCAMAAQALAAAMACQALACAJAGQAJAFAHAJQAFAKACANIgoAAQAAgLgJgFQgIgEgKAAIgIABIgHABIgFAEQgDADAAAFQAAAGAEADQAEADAHADIAOAEIARAEIASAEQAIAEAHAEQAHAEAEAIQAEAGAAALQAAAPgGAKQgGAKgJAGQgLAGgMADQgMACgNAAQgMAAgNgDg");
	this.shape_11.setTransform(133.35,-178.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AAGBiQgIgBgGgFQgGgDgFgIQgDgGAAgMIAAhYIgaAAIAAgcIAaAAIAAgtIApAAIAAAtIAeAAIAAAcIgeAAIAABKQAAAKADAEQAEADAKAAIAGAAIAHgBIAAAhIgMAAIgNABg");
	this.shape_12.setTransform(120.15,-180.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgLAPgFQAOgGARABQASgBAOAGQAPAFAKALQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAJQgCAIAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgIQgCgJgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_13.setTransform(106.175,-178.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AhJBoIAAjPIAuAAIAACpIBlAAIAAAmg");
	this.shape_14.setTransform(89.3,-181.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAGBiQgHgBgHgFQgHgDgDgIQgEgHAAgLIAAhYIgZAAIAAgcIAZAAIAAgtIAoAAIAAAtIAeAAIAAAcIgeAAIAABKQABALADADQADAEALgBIAHAAIAFgBIAAAhIgLABIgMAAg");
	this.shape_15.setTransform(66.2,-180.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdBOIAAhVQAAgTgGgJQgFgJgPAAQgQAAgIAKQgIAKAAAXIAABPIgpAAIAAiXIAnAAIAAAVIABAAQAIgMANgHQALgFAOAAQAQgBALAFQAKAFAHAHQAGAIACAMQADALAAAOIAABdg");
	this.shape_16.setTransform(52.425,-178.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUBoIAAiWIApAAIAACWgAgUhFIAAgiIApAAIAAAig");
	this.shape_17.setTransform(39.875,-181.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvBOIAAiXIAmAAIAAAcIABAAQADgGAFgGQAEgHAGgDQAHgFAIgCQAGgCAIAAIAJABIAAAmIgGAAIgIgBQgMAAgHADQgIAFgGAGQgDAGgCAJQgCAJgBAJIAABFg");
	this.shape_18.setTransform(31.1,-178.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhSBoIAAjPIBdAAQAUAAANAFQAOAGAJAJQAIAKAEAMQAEAMAAANQAAAMgEAMQgEAMgIAJQgJAJgOAGQgNAFgUAAIgvAAIAABLgAgkgFIAjAAIAPgBQAHgBAFgEQAGgDADgGQAEgHAAgJQAAgKgEgHQgDgGgGgDQgFgDgHgCIgPgBIgjAAg");
	this.shape_19.setTransform(15.425,-181.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgKAPgGQAOgGARABQASgBAOAGQAPAGAKAKQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAIQgCAJAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgJQgCgIgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_20.setTransform(-12.175,-178.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAGBiQgHgBgHgFQgHgDgDgIQgEgHAAgLIAAhYIgZAAIAAgcIAZAAIAAgtIAoAAIAAAtIAeAAIAAAcIgeAAIAABKQABALADADQADAEALgBIAHAAIAFgBIAAAhIgLABIgMAAg");
	this.shape_21.setTransform(-26.5,-180.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAdBoIAAhVQAAgTgGgIQgFgJgPAAQgQAAgIAKQgIAJAAAXIAABPIgpAAIAAjPIApAAIAABOIABAAQAIgNANgGQALgGAMAAQAQAAALAFQAKAEAHAIQAGAIACAMQADALAAANIAABdg");
	this.shape_22.setTransform(-48.475,-181.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBnQgLgCgKgHQgKgGgFgIQgHgKgBgNIApAAQADAMAJAEQAIAFAKAAQASAAAIgLQAIgKAAgQIAAgUIgBAAQgGAMgNAGQgNAFgNABQgQAAgNgHQgMgFgIgLQgHgKgEgNQgEgOAAgQQAAgOAFgOQADgNAJgKQAIgLAMgGQAMgGAQAAQAOAAALAGQALAFAIANIABAAIAAgUIAnAAIAACMQAAAKgCALQgDAMgIAKQgJAKgPAHQgQAHgZAAQgLAAgLgDgAgOhGQgGADgEAGQgFAGgCAIQgBAIAAAIIABAQQACAIAEAHQADAFAHAEQAGAFAJgBQAJABAGgEQAIgEAEgFQAEgGACgHQACgHABgIQAAgJgCgJQgCgIgEgHQgEgGgHgEQgGgEgLAAQgIAAgGAEg");
	this.shape_23.setTransform(-66.5,-175.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgqBJQgLgEgGgJQgGgHgCgMQgDgMAAgOIAAhcIApAAIAABUQAAAUAGAJQAGAJAPAAQAQAAAIgKQAHgLAAgWIAAhPIAqAAIAACXIgoAAIAAgWIgBAAQgHANgNAHQgMAFgNAAQgQABgLgFg");
	this.shape_24.setTransform(-83.825,-178.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgKAPgGQAOgGARABQASgBAOAGQAPAGAKAKQAKAKAGAPQAFAPAAARQAAASgFAPQgGAPgKAKQgKAKgPAGQgOAGgSgBQgRABgOgGgAgRgrQgHAEgEAHQgEAHgCAIQgCAJAAAIQAAAJACAJQACAJAEAGQAEAHAHAEQAHAFAKAAQAKAAAIgFQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgJQgCgIgEgHQgEgHgHgEQgIgEgKgBQgKABgHAEg");
	this.shape_25.setTransform(-101.525,-178.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdBOIAAhVQAAgTgGgJQgFgJgPAAQgQAAgIAKQgIAKAAAXIAABPIgpAAIAAiXIAnAAIAAAVIABAAQAIgMANgHQALgFAOAAQAQgBALAFQAKAFAHAHQAGAIACAMQADALAAAOIAABdg");
	this.shape_26.setTransform(-119.175,-178.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhOBoIAAjPICbAAIAAAmIhtAAIAAAtIBkAAIAAAjIhkAAIAAAzIBvAAIAAAmg");
	this.shape_27.setTransform(-136.975,-181.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-149.2,-201.6,498,228.9), null);


(lib.txt_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgkAsIAAhXIBJAAIAABXg");
	this.shape.setTransform(373.65,24.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnCeIAAk7IBPAAIAAE7g");
	this.shape_1.setTransform(362.375,12.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnCeIAAk7IBPAAIAAE7g");
	this.shape_2.setTransform(351.075,12.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnCeIAAjuIBPAAIAADugAgnhiIAAg7IBPAAIAAA7g");
	this.shape_3.setTransform(339.825,12.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUCeIAAieQgBgOgEgHQgFgGgKAAQgJAAgFAGQgFAHAAAOIAACeIhPAAIAAk7IBPAAIAABnIACAAQAJgTAPgHQAPgHAPAAQAMAAALADQALAEAJAHQAJAIAFAMQAFANAAASIAAC0g");
	this.shape_4.setTransform(322.75,12.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglB5QgTgEgNgNQgOgNgHgYQgIgXAAgnQAAgqAJgZQAIgaAOgOQAPgNATgFQAUgEAVAAQAbAAARAHQASAHAKANQAKAOAFASQAEASAAAXIhIAAIgBgYIgEgPQgFgKgNAAQgGAAgEADQgFAEgCAIIgEAXIgBAkIABAkIAEAXQACAIAFAEQAEADAGAAQALAAAGgIQAGgJAAgWIAAgQIBIAAQAAAdgFATQgFAVgLAMQgXAYgzAAQgWAAgTgEg");
	this.shape_5.setTransform(300.875,16.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhNCdQgRgFgOgLQgNgLgIgQQgHgRAAgWQAAgcAOgYQAOgXAfgQQgMgQgJgTQgJgSAAgTQAAgQAGgNQAHgOALgKQAMgKAQgFQARgFAUAAQAUAAAQAFQARAFAMAKQALAKAHAOQAGANAAAQQAAAXgOAVQgOAUgaARIAjAvQAFgIADgJIADgUIBFAAQgBAbgJAZQgIAZgTASIAqA7IhXAAIgOgSIgRAJIgSAIIgSAEIgXACQgTAAgSgFgAg3AyQgFAJAAAHQAAAHADAHQADAGAFAFIALAIQAGADAHAAQAHAAAHgEIAMgHIgpg5QgKAHgFAJgAgihtQgHAGAAAKQAAAHAFAJIAQAXQAOgNAGgJQAFgKAAgHQAAgKgGgGQgGgGgKAAQgLAAgGAGg");
	this.shape_6.setTransform(265.725,12.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnCeIAAk7IBPAAIAAE7g");
	this.shape_7.setTransform(234.925,12.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnCeIAAk7IBPAAIAAE7g");
	this.shape_8.setTransform(223.675,12.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnCeIAAjuIBPAAIAADugAgnhiIAAg7IBPAAIAAA7g");
	this.shape_9.setTransform(212.425,12.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgpChIAAi4IgcAAIAAg2IAcAAIAAgRQAAgTADgMQAEgNAJgHQAJgIAOgDQANgEAVAAIASAAIAUADIAAAxIgHgBIgHAAQgHAAgGAFQgGADAAAJIAAAPIAhAAIAAA2IghAAIAAC4g");
	this.shape_10.setTransform(199.875,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFCaQgMgBgJgHQgIgHgEgMQgDgMAAgTIAAh+IgbAAIAAg2IAbAAIAAhGIBOAAIAABGIAgAAIAAA2IggAAIAABwQAAALAFAEQAFAEAJAAIANAAIAAA1IgWAAIgWABg");
	this.shape_11.setTransform(174.725,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhIBpQgWgUAAgnIBGAAIACANIAEAKQAGAJALAAQAIAAAHgFQAHgGAAgKQAAgKgJgGQgJgGgLgEIgcgJQgPgFgNgJQgMgIgJgNQgJgOAAgXQAAgPAGgOQAGgNALgKQAMgLASgFQASgGAXAAQBaAAAABLIhFAAQAAgPgFgGQgGgFgKAAQgIAAgGAEQgFAFAAAJQAAAKAIAFQAJAFAMAEIAbAJQAPAEANAIQANAJAIAMQAJAOAAAXQAAASgHAPQgGAOgMALQgNAKgSAGQgSAFgVAAQgyAAgWgUg");
	this.shape_12.setTransform(157.625,16.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8B3QgMgCgIgIQgJgGgEgNQgFgNAAgSIAAi0IBPAAIAACcQABAPAEAIQAEAGAKAAQAKAAAFgGQAFgIgBgPIAAicIBQAAIAADuIhNAAIAAgdIAAAAQgQAigqAAQgNAAgLgDg");
	this.shape_13.setTransform(136.05,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhMCHQgXgaAAgyIAAgGIBLAAIAAAPQgBAXAHAHQAFAIAKAAQAIAAAGgIQAGgHAAgXIAAjjIBTAAIAADYQAAA5gaAXQgaAXgzAAQgzAAgWgZg");
	this.shape_14.setTransform(113.4,12.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(99.2,-18.6,284.7,61.300000000000004), null);


(lib.txt_enoughInk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape.setTransform(490.925,-173.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBqIgqhFIgQAQIAAA1IgqAAIAAjTIAqAAIAABxIA0g3IAyAAIg5A4IBABhg");
	this.shape_1.setTransform(479.5,-182.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBPIAAhWQAAgTgGgKQgGgIgPgBQgQABgIAJQgIALAAAXIAABQIgqAAIAAiZIAoAAIAAAVIABAAQAIgNANgGQAMgGANAAQARAAALAEQALAFAGAIQAGAJADAMQACALAAAPIAABdg");
	this.shape_2.setTransform(461.225,-179.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXBqIAAjTIAvAAIAADTg");
	this.shape_3.setTransform(448.25,-182.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBqIAAh8IgZAAIAAgdIAZAAIAAgMQAAgUANgNQAMgNAZAAIAMAAIALABIAAAfIgQAAQgJAAgDAEQgEAEAAAJIAAAJIAeAAIAAAdIgeAAIAAB8g");
	this.shape_4.setTransform(430.9,-182.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggBMQgPgHgKgKQgKgLgGgPQgGgPABgRQgBgSAGgPQAGgPAKgLQAKgKAPgHQAPgFARAAQASAAAOAFQAQAHAKAKQALALAFAPQAGAPgBASQABARgGAPQgFAPgLALQgKAKgQAHQgOAFgSAAQgSAAgOgFgAgRgsQgHAEgFAHQgEAHgCAJQgCAJAAAJQAAAIACAKQACAIAEAHQAFAHAHAEQAHAEAKAAQAKAAAIgEQAHgEAFgHQADgHACgIQACgKABgIQgBgJgCgJQgCgJgDgHQgFgHgHgEQgIgEgKAAQgKAAgHAEg");
	this.shape_5.setTransform(417.05,-179.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAGBjQgHgBgHgEQgHgEgEgHQgDgHAAgMIAAhZIgbAAIAAgdIAbAAIAAguIApAAIAAAuIAfAAIAAAdIgfAAIAABLQAAALADADQADAEAMAAIAGgBIAHAAIAAAgIgMABIgNABg");
	this.shape_6.setTransform(394.65,-181.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeBPIAAhWQAAgTgGgKQgGgIgPgBQgQABgIAJQgIALAAAXIAABQIgqAAIAAiZIAoAAIAAAVIABAAQAIgNANgGQAMgGANAAQARAAALAEQALAFAGAIQAGAJADAMQACALAAAPIAABdg");
	this.shape_7.setTransform(380.925,-179.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrBKQgLgEgGgIQgGgJgDgLQgCgMAAgPIAAhdIAqAAIAABWQAAATAGAKQAGAJAPAAQARAAAHgKQAIgKAAgYIAAhQIAqAAIAACZIgoAAIAAgVIgBAAQgIANgNAGQgLAGgOAAQgRAAgLgFg");
	this.shape_8.setTransform(363.475,-178.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggBMQgOgHgLgKQgLgLgFgPQgGgPAAgRQAAgSAGgPQAFgPALgLQALgKAOgHQAOgFASAAQASAAAPAFQAOAHALAKQAKALAGAPQAFAPAAASQAAARgFAPQgGAPgKALQgLAKgOAHQgPAFgSAAQgSAAgOgFgAgRgsQgHAEgEAHQgFAHgCAJQgCAJAAAJQAAAIACAKQACAIAFAHQAEAHAHAEQAHAEAKAAQAKAAAIgEQAHgEAEgHQAFgHABgIQACgKAAgIQAAgJgCgJQgBgJgFgHQgEgHgHgEQgIgEgKAAQgKAAgHAEg");
	this.shape_9.setTransform(345.75,-179.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABLBPIAAhWIAAgOQgBgIgDgFQgCgFgGgDQgFgCgIgBQgKAAgFAEQgGADgDAGQgDAFgBAHIgBAOIAABVIgpAAIAAhWIAAgNQgBgGgCgGQgDgGgEgDQgGgEgKAAIgIABQgFACgFAEQgEAEgDAGQgEAIABALIAABYIgrAAIAAiZIAoAAIAAAVIABAAQAIgMAMgHQALgGAQAAQAPAAAMAFQAKAGAHAOQAGgJAMgJQAMgHAQAAQAMAAALADQAKADAIAHQAHAGAFALQADAKAAAPIAABmg");
	this.shape_10.setTransform(323.35,-179.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA3BqIgQgvIhOAAIgRAvIgvAAIBQjTIAvAAIBQDTgAgbAYIA2AAIgbhNIAAAAg");
	this.shape_11.setTransform(299.725,-182.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgYBOQgNgDgKgGQgKgGgGgLQgHgJAAgQIAoAAQAAAHADAFQADAFAEADQAFADAFABIAMACIAJgBIAJgDQAEgCADgFQACgDAAgGQAAgKgMgEQgNgFgWgEIgSgGQgIgCgHgEQgHgFgEgGQgFgIAAgKQAAgPAGgJQAGgJAKgGQAJgGAMgCQAMgCAMAAQAMAAAMADQAMABAJAHQAJAFAGAJQAGAJABAPIgoAAQgBgMgIgFQgJgEgKAAIgIABIgHACIgGAEQgCADAAAEQAAAGAEADQAEAEAHADIAOADIASAFIASAEQAIAEAHAEQAHAFAEAHQAEAHAAALQAAAPgGAKQgGALgKAFQgJAHgNACQgNADgNAAQgMAAgNgDg");
	this.shape_12.setTransform(273.275,-179.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgrBKQgLgEgGgIQgGgJgDgLQgCgMAAgPIAAhdIAqAAIAABWQAAATAGAKQAGAJAPAAQARAAAHgKQAIgKAAgYIAAhQIAqAAIAACZIgoAAIAAgVIgBAAQgIANgNAGQgLAGgOAAQgRAAgLgFg");
	this.shape_13.setTransform(256.525,-178.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AggBMQgOgHgLgKQgLgLgFgPQgGgPAAgRQAAgSAGgPQAFgPALgLQALgKAOgHQAOgFASAAQASAAAPAFQAOAHALAKQAKALAGAPQAFAPAAASQAAARgFAPQgGAPgKALQgLAKgOAHQgPAFgSAAQgSAAgOgFgAgRgsQgHAEgEAHQgFAHgCAJQgCAJAAAJQAAAIACAKQACAIAFAHQAEAHAHAEQAHAEAKAAQAKAAAIgEQAHgEAEgHQAFgHABgIQACgKAAgIQAAgJgCgJQgBgJgFgHQgEgHgHgEQgIgEgKAAQgKAAgHAEg");
	this.shape_14.setTransform(238.65,-179.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgUBqIAAjTIApAAIAADTg");
	this.shape_15.setTransform(225.75,-182.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgrBKQgLgEgGgIQgGgJgDgLQgCgMAAgPIAAhdIAqAAIAABWQAAATAGAKQAGAJAPAAQARAAAHgKQAIgKAAgYIAAhQIAqAAIAACZIgoAAIAAgVIgBAAQgIANgNAGQgLAGgOAAQgRAAgLgFg");
	this.shape_16.setTransform(213.125,-178.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgdBLQgOgGgLgKQgKgKgFgPQgGgOAAgRQAAgSAFgPQAFgQALgLQAKgLAOgGQAPgGASAAQANAAANAEQANADAKAHQAKAIAGAKQAGAMABAOIgpAAQgFgagbAAQgJAAgHAFQgGAEgFAIQgEAGgCAKQgCAIAAAIQAAAIACAIQACAKAEAGQAEAIAHAEQAHAEAIAAQAQAAAIgIQAIgJACgOIApAAQgEAegUARQgUAQgeAAQgQAAgPgGg");
	this.shape_17.setTransform(195.975,-179.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgUBqIAAiZIApAAIAACZgAgUhHIAAgiIApAAIAAAig");
	this.shape_18.setTransform(183.5,-182.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgmBlQgOgGgIgMQgJgLgEgPQgEgPAAgQQAAgQAEgNQAEgOAJgLQAIgLANgHQANgHARAAQANAAAMAGQAMAGAIALIAAAAIAAhNIAqAAIAADTIgoAAIAAgTIAAAAQgIAMgMAGQgMAFgOAAQgRAAgNgHgAgPgRQgIAEgEAHQgEAGgCAJQgCAJAAAJQAAAJACAJQACAJAFAHQAEAHAHAEQAHAFAJAAQALAAAHgFQAHgEAEgHQAEgHACgJQACgJAAgJQAAgKgCgIQgCgJgEgGQgFgHgGgEQgHgEgLAAQgJAAgHAEg");
	this.shape_19.setTransform(170.275,-181.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgUBqIAAiZIApAAIAACZgAgUhHIAAgiIApAAIAAAig");
	this.shape_20.setTransform(157.7,-182.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAtBqQgEgKgBgOIgDgbQgCgQgIgIQgHgIgSAAIguAAIAABTIguAAIAAjTIBxAAQAOAAAMAEQALAFAJAIQAHAIAFALQAFAKAAAMQgBATgHAOQgJAOgRAGIAAAAQAIADAGAFQAFAEAEAHQAEAHABAIIACAQIABAMIABAOIADANQACAHACAEgAgsgJIAzAAQAQAAAHgHQAIgHAAgRQAAgPgIgHQgHgHgQAAIgzAAg");
	this.shape_21.setTransform(143.6,-182.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgqBOQgJgDgIgFQgHgGgEgIQgEgJAAgMQAAgNAFgJQAFgIAGgFQAIgEAJgCIATgFIATgCIAPgDQAIgCADgDQAFgDAAgHQAAgHgDgEQgCgEgDgCQgFgDgEAAIgLgBQgLAAgIAFQgHAGgBAMIgqAAQAAgPAIgJQAFgKALgGQAKgGAMgDQANgCAMAAIAXACQAMABALAFQAJAFAHAIQAFAIAAAPIAABOIACAVQABAJADAFIgrAAIgCgIIgBgHQgKALgOADQgNAFgOAAQgLAAgJgDgAAVAFIgJADIgJABIgKACIgJACIgIAEQgEACgCAEQgCAEAAAGQAAAGACADQACAEAEADIAJADIAKABQALAAAGgFQAIgDACgGQAEgGABgGIABgJIAAgQg");
	this.shape_22.setTransform(117.55,-178.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAeBqIAAhXQAAgTgGgIQgGgJgPAAQgQAAgIAKQgIAJAAAYIAABQIgqAAIAAjTIAqAAIAABQIABAAQAIgOANgGQALgGAMAAQARAAALAFQALAEAGAJQAGAIADAMQACALAAAOIAABeg");
	this.shape_23.setTransform(92.075,-181.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAGBjQgHgBgHgEQgHgEgEgHQgDgHgBgMIAAhZIgaAAIAAgdIAaAAIAAguIAqAAIAAAuIAeAAIAAAdIgeAAIAABLQAAALADADQADAEAMAAIAGgBIAGAAIAAAgIgLABIgNABg");
	this.shape_24.setTransform(77.95,-181.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUBqIAAiZIApAAIAACZgAgUhHIAAgiIApAAIAAAig");
	this.shape_25.setTransform(69.05,-181.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAcBNIgchmIAAAAIgZBmIgsAAIgyiZIAtAAIAcBoIABAAIAahoIAoAAIAaBoIABAAIAchoIAsAAIgxCZg");
	this.shape_26.setTransform(53.1,-178.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYBOQgNgCgKgHQgKgGgGgKQgHgLAAgPIAoAAQAAAHADAFQADAEAEAEQAFADAFABIAMACIAJgBIAJgEQAEgBADgFQACgDAAgGQAAgJgMgFQgNgFgWgEIgSgGQgIgDgHgDQgHgEgEgIQgFgGAAgLQAAgOAGgKQAGgJAKgGQAJgFAMgDQAMgCAMAAQAMAAAMACQAMACAJAHQAJAFAGAKQAGAIABAPIgoAAQgBgMgIgFQgJgEgKAAIgIABIgHABIgGAFQgCADAAAEQAAAGAEADQAEAEAHACIAOAFIASADIASAGQAIADAHAEQAHAEAEAIQAEAHAAALQAAAOgGALQgGALgKAFQgJAHgNACQgNADgNAAQgMAAgNgDg");
	this.shape_27.setTransform(24.725,-178.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeBLQgOgGgKgLQgLgKgFgPQgGgPAAgRQAAgRAGgPQAGgPAKgLQALgKAOgHQAOgGARAAQAUAAAOAIQAPAHAJANQAKAMAEARQAEARgBARIhuAAQAAAUAKAJQAKAJAQAAQANAAAKgGQAJgGACgIIAlAAQgJAcgSAMQgTAMgaAAQgRAAgPgGgAgPgtQgHADgEAGQgEAEgBAHIgCAKIBDAAQgDgRgHgIQgIgIgPAAQgJAAgHADg");
	this.shape_28.setTransform(8.235,-178.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABLBPIAAhWIAAgPQgBgHgDgEQgCgGgGgDQgFgDgIAAQgKABgFADQgGADgDAGQgDAFgBAHIgBAOIAABVIgpAAIAAhVIAAgOQgBgGgCgGQgDgGgEgDQgGgDgKgBIgIACQgFABgFADQgEAEgDAHQgDAIAAALIAABYIgrAAIAAiZIAoAAIAAAVIABAAQAIgMAMgHQALgGAQAAQAPAAAMAFQAKAGAHAPQAGgLAMgHQAMgIAQAAQAMAAALADQAKADAIAGQAHAHAFAKQADALAAAPIAABmg");
	this.shape_29.setTransform(-13.7,-179.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggBLQgPgFgKgLQgLgKgFgQQgFgPAAgRQAAgSAFgQQAFgPALgKQAKgKAPgHQAPgFARAAQASAAAOAFQAPAHALAKQAKAKAGAPQAGAQAAASQAAARgGAPQgGAQgKAKQgLALgPAFQgOAGgSAAQgRAAgPgGgAgRgsQgHAFgFAGQgEAHgBAJQgCAJAAAJQAAAIACAKQABAIAEAHQAFAHAHAEQAHAFAKgBQALABAHgFQAHgEAEgHQAFgHACgIQACgKAAgIQAAgJgCgJQgCgJgFgHQgEgGgHgFQgHgEgLAAQgKAAgHAEg");
	this.shape_30.setTransform(-36.25,-178.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmBmQgTgIgOgPQgNgPgHgUQgHgUAAgXQAAgXAHgUQAHgVANgPQAOgPATgJQAUgIAXAAQASAAAQAFQAPAFANAJQAMAKAIAOQAIAPACASIguAAQgBgIgDgHQgFgGgGgFQgGgFgIgDQgIgDgJAAQgOAAgMAGQgKAGgIAKQgHALgCANQgDANAAANQAAANADANQACANAHAKQAIAKAKAGQAMAGAOAAQAWAAAMgNQAMgNACgWIAuAAQgCAUgIAQQgHAQgMAMQgNALgQAGQgQAGgUAAQgXAAgUgJg");
	this.shape_31.setTransform(-56.35,-181.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-110.7,-203.1,608.6,228.7), null);


(lib.txt_ecoTank = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAaIAAgzIA1AAIAAAzg");
	this.shape.setTransform(607.475,-157.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdB5QgOgDgLgHQgLgHgHgKQgIgLgBgPIAwAAQAEANAKAGQAKAFAMAAQAUAAAKgMQAJgNAAgSIAAgYIgBAAQgIAOgOAHQgPAHgPAAQgUAAgOgHQgPgHgJgNQgJgMgFgPQgEgQAAgSQAAgSAFgPQAFgQAKgNQAJgMAPgHQAOgHASAAQARAAANAGQANAHAJAPIABAAIAAgXIAuAAIAACkQAAALgDAOQgDAOgKALQgJAMgSAIQgSAIgeAAQgNAAgNgDgAgQhSQgIAEgFAHQgFAHgCAJQgCAJAAAKIACATQACAJAEAIQAFAGAIAFQAHAFAKAAQALAAAHgEQAIgEAGgHQAFgGACgJQADgIAAgKQAAgLgCgKQgCgJgFgIQgFgIgIgEQgIgEgMAAQgJAAgHAEg");
	this.shape_1.setTransform(591.875,-160.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBbIAAhjQAAgWgGgLQgIgLgQAAQgUABgIAMQgKALABAbIAABcIgxAAIAAiwIAuAAIAAAYIABAAQAKgPAOgHQAOgHAQAAQATAAAMAGQANAFAHAJQAHAJADAOQADAOAAAQIAABsg");
	this.shape_2.setTransform(571.6,-163.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXB6IAAiwIAvAAIAACwgAgXhRIAAgoIAvAAIAAAog");
	this.shape_3.setTransform(556.975,-166.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdB0IgWgCQgJgBgIgFQgHgEgFgIQgEgJAAgNIAAhnIgeAAIAAghIAeAAIAAg1IAvAAIAAA1IAkAAIAAAhIgkAAIAABWQAAANAFAEQAEAEAMAAIAIAAIAHgBIAAAlIgOACg");
	this.shape_4.setTransform(546.325,-166.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBbIAAhjQAAgWgIgLQgGgLgRAAQgUABgJAMQgIALgBAbIAABcIgwAAIAAiwIAuAAIAAAYIABAAQAJgPAQgHQANgHAPAAQAUAAANAGQAMAFAHAJQAHAJADAOQADAOAAAQIAABsg");
	this.shape_5.setTransform(530.25,-163.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXB6IAAiwIAvAAIAACwgAgXhRIAAgoIAvAAIAAAog");
	this.shape_6.setTransform(515.625,-166.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag4BbIAAiwIAuAAIAAAhIABAAQAEgIAFgIQAFgHAIgFQAHgEAJgDQAIgDAKAAIAKACIAAAtIgJgBIgJgBQgNAAgJAEQgJAFgGAIQgEAIgDAKQgCAKAAALIAABQg");
	this.shape_7.setTransform(505.45,-163.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhgB6IAAjzIBtAAQAXAAAQAGQAQAHAKALQAKALAFAOQAFAOAAAPQAAAPgFAOQgFAOgKAKQgKALgQAHQgQAHgXAAIg3AAIAABXgAgqgGIApAAIARgCQAJgBAGgEQAGgEAEgHQAFgHAAgMQAAgLgFgIQgEgHgGgEQgGgEgJgBIgRgBIgpAAg");
	this.shape_8.setTransform(487.1,-166.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjBXQgQgHgMgMQgMgNgGgRQgGgRAAgVQAAgSAGgSQAHgRAMgMQAMgNAQgHQARgHATAAQAXAAARAJQAQAIALAPQALAPAFATQAEASgBAUIh/AAQABAYALAKQALALAUAAQAOAAALgHQALgIACgIIArAAQgKAggWAOQgVANgeAAQgUAAgRgGgAgSg0QgHAEgFAGQgFAGgBAHIgDALIBOAAQgDgSgJgKQgJgJgRAAQgLAAgIADg");
	this.shape_9.setTransform(455.6341,-163.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjBXQgQgHgMgMQgMgNgGgRQgGgRAAgVQAAgSAGgSQAHgRAMgMQAMgNAQgHQARgHATAAQAXAAARAJQAQAIALAPQALAPAFATQAEASgBAUIh/AAQABAYALAKQALALAUAAQAOAAALgHQALgIACgIIArAAQgKAggWAOQgVANgeAAQgUAAgRgGgAgSg0QgHAEgFAGQgFAGgBAHIgDALIBOAAQgDgSgJgKQgJgJgRAAQgLAAgIADg");
	this.shape_10.setTransform(435.9341,-163.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BbIAAiwIAuAAIAAAhIABAAQADgIAGgIQAFgHAIgFQAHgEAJgDQAIgDAKAAIAKACIAAAtIgIgBIgJgBQgOAAgJAEQgJAFgGAIQgEAIgDAKQgCAKAAALIAABQg");
	this.shape_11.setTransform(420.3,-163.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhVB6IAAjzICrAAIAAAtIh1AAIAAA4IBlAAIAAApIhlAAIAABlg");
	this.shape_12.setTransform(403.35,-166.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgyAVIAAgpIBlAAIAAApg");
	this.shape_13.setTransform(385.4,-164);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjBXQgQgHgMgMQgMgNgGgRQgGgRAAgVQAAgSAGgSQAHgRAMgMQAMgNAQgHQARgHATAAQAXAAARAJQAQAIALAPQALAPAFATQAEASgBAUIh/AAQABAYALAKQALALAUAAQAOAAALgHQALgIACgIIArAAQgKAggWAOQgVANgeAAQgUAAgRgGgAgSg0QgHAEgFAGQgFAGgBAHIgDALIBOAAQgDgSgJgKQgJgJgRAAQgLAAgIADg");
	this.shape_14.setTransform(368.5841,-163.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdB5QgOgDgLgHQgLgHgHgKQgIgLgBgPIAwAAQAEANAKAGQAKAFAMAAQAUAAAKgMQAJgNAAgSIAAgYIgBAAQgIAOgOAHQgPAHgPAAQgUAAgOgHQgPgHgJgNQgJgMgFgPQgEgQAAgSQAAgSAFgPQAFgQAKgNQAJgMAPgHQAOgHASAAQARAAANAGQANAHAJAPIABAAIAAgXIAuAAIAACkQAAALgDAOQgDAOgKALQgJAMgSAIQgSAIgeAAQgNAAgNgDgAgQhSQgIAEgFAHQgFAHgCAJQgCAJAAAKIACATQACAJAEAIQAFAGAIAFQAHAFAKAAQALAAAHgEQAIgEAGgHQAFgGACgJQADgIAAgKQAAgLgCgKQgCgJgFgIQgFgIgIgEQgIgEgMAAQgJAAgHAEg");
	this.shape_15.setTransform(347.875,-160.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsB1QgPgIgKgNQgKgOgFgRQgFgQAAgTQAAgSAFgQQAFgQAKgNQAKgMAOgIQAPgIATAAQAPAAAPAHQANAHAJANIAAAAIAAhaIAxAAIAAD0IguAAIAAgWIgBAAQgJAOgOAGQgNAHgQAAQgVAAgOgIgAgRgTQgJAFgFAHQgFAHgCAKQgCALgBAKQABAKACALQADAKAEAIQAGAIAIAFQAIAFALAAQAMAAAHgFQAIgFAGgHQAEgJACgKQACgKAAgLQAAgLgCgKQgCgKgFgHQgFgHgIgFQgHgFgMAAQgMAAgHAFg");
	this.shape_16.setTransform(326.9,-166.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXB6IAAiwIAvAAIAACwgAgXhRIAAgoIAvAAIAAAog");
	this.shape_17.setTransform(312.375,-166.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag4BbIAAiwIAuAAIAAAhIABAAQADgIAGgIQAFgHAHgFQAIgEAJgDQAIgDAKAAIAKACIAAAtIgJgBIgJgBQgNAAgJAEQgJAFgGAIQgEAIgDAKQgDAKABALIAABQg");
	this.shape_18.setTransform(302.15,-163.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAdB0IgWgCQgJgBgIgFQgHgEgFgIQgEgJAAgNIAAhnIgeAAIAAghIAeAAIAAg1IAvAAIAAA1IAkAAIAAAhIgkAAIAABWQAAANAFAEQAEAEAMAAIAIAAIAHgBIAAAlIgOACg");
	this.shape_19.setTransform(288.375,-166.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag4BbIAAiwIAuAAIAAAhIABAAQAEgIAFgIQAFgHAHgFQAIgEAIgDQAJgDAJAAIALACIAAAtIgJgBIgJgBQgNAAgJAEQgJAFgGAIQgFAIgCAKQgCAKAAALIAABQg");
	this.shape_20.setTransform(276.7,-163.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBaQgLgDgIgGQgIgHgFgKQgEgKAAgOQAAgPAFgJQAFgKAJgGQAIgFALgDIAWgEIAVgDIASgDQAIgCAFgEQAFgEAAgIQAAgIgDgEQgDgFgEgCQgEgDgGgBIgMgBQgNAAgJAHQgIAGgBAOIgxAAQABgRAIgLQAHgMAMgGQAMgHAOgDQAPgDANAAIAbACQAOACALAFQAMAGAHAJQAHAKAAAQIAABbIACAXQABALADAGIgxAAIgCgJIgBgIQgMAMgQAEQgPAFgQAAQgNAAgLgDgAAYAGIgKADIgLACIgLABIgLADIgJAFQgEADgCAEQgDAFAAAGQAAAHADAEQACAFAEACIAKAEIALABQAOAAAHgFQAIgFAEgGQAEgHABgHIABgLIAAgSg");
	this.shape_21.setTransform(259.225,-163.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgrB2QgXgKgPgRQgPgRgJgXQgIgXAAgbQAAgaAIgXQAJgYAPgSQAPgRAXgKQAWgKAbAAQAUAAATAGQARAGAOALQAPALAJAQQAKARABAVIg0AAQgBgJgEgIQgGgHgHgHQgGgFgKgEQgJgCgKAAQgRgBgMAIQgNAGgIAMQgIAMgEAPQgDAPAAAPQAAAPADAPQAEAPAIALQAIAMANAHQAMAHARAAQAZAAAOgPQAOgPACgZIA1AAQgDAYgIASQgIASgOANQgPAOgSAGQgTAHgXAAQgbAAgWgKg");
	this.shape_22.setTransform(236.8,-166.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB2B7QgKAAgIgGQgIgEgFgJQgDgIAAgNIAAhpIgfAAIAAgiIAfAAIAAg2IAwAAIAAA2IAlAAIAAAiIglAAIAABYQAAAMAEAFQAFADAMAAIAQAAIAAAlIgdACgAEzB7IAAhlQAAgWgGgLQgHgLgSABQgUgBgJAMQgJALAAAcIAABeIgyAAIAAj3IAyAAIAABeIABAAQAKgQAOgIQAOgGAOAAQAUgBANAGQANAFAHAKQAHAJAEAOQACAOAAAQIAABugAgMB7IAAizIAvAAIAACzgAiYB7IgpioIgBAAIgqCoIg3AAIhBj3IA2AAIAnCoIABAAIArioIA0AAIApCqIABAAIApiqIA2AAIhDD3gAgMhUIAAgoIAvAAIAAAog");
	this.shape_23.setTransform(14.65,-167.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#123293").s().p("AA7CLQgLgDgJgGQgIgIgFgJQgFgKAAgOQABgPAEgLQAGgJAJgGQAIgGALgDIBAgLQAIgCAEgEQAGgEAAgIQAAgIgEgDQgCgFgEgDQgFgDgFAAIgNAAQgPgBgHAGQgJAGgBAPIgzAAQACgRAIgLQAHgMAMgHQAMgHAOgDQAQgDAOAAIAcACQAOACALAFQAMAHAHAJQAIAKgBAQIACB1QABAKAEAGIgzAAIgDgRQgLALgQAGQgRAEgQAAQgNAAgLgDgACFA2IgiAGIgKADIgJAFQgFACgCAGQgCAEAAAHQAAAHACADQACAFAFADIAKADIALACQAOAAAJgFQAIgFADgGQAEgHABgIIACgKIAAgTgAk7CIQgRgHgMgMQgNgMgGgSQgGgSAAgUQAAgWAGgTQAGgQANgMQAMgMARgHQARgHAVAAQAWAAAQAHQASAHAMAMQAMAMAHAQQAHATAAAWQAAAUgHASQgHASgMAMQgMAMgSAHQgQAGgWAAQgVAAgRgGgAkpgEQgJAFgFAHQgGAIgBALQgDALAAALQAAAKADAKQABAKAGAIQAFAJAJAEQAHAGANAAQAMAAAKgGQAHgEAGgJQAEgIADgKQACgKAAgKQAAgLgCgLQgDgLgEgIQgGgHgHgFQgKgEgMgBQgNABgHAEgAoBCHQgQgGgMgMQgMgNgGgRQgGgQgBgUQABgVAFgSQAGgRANgOQALgNARgGQARgIAWAAQAQAAAPAEQAPAEALAJQAMAIAHANQAIAMABASIgxAAQgFgfggAAQgLABgJAFQgHAEgFAJQgGAIgBAKQgCAKAAALQAAAJACALQABAKAGAIQAEAIAIAFQAIAGALAAQASAAAKgKQAJgKADgRIAwAAQgFAjgXAUQgYASgjAAQgUABgSgIgAIlCKIgwhQIgUASIAAA+IgxAAIAAj4IAxAAIAACFIA/hAIA7AAIhFBBIBMBygAFYCKIAAhmQAAgWgGgLQgIgKgRAAQgUAAgJALQgJAMAAAbIAABfIgyAAIAAizIAuAAIAAAZIACAAQAKgQAOgHQAPgHAQAAQAUAAAMAGQAOAFAGAJQAIAKADAOQADAMAAARIAABvgAhgCKIAAjKIhKAAIAAguIDLAAIAAAuIhKAAIAADKgAsJCKIAAj4IC6AAIAAAuIiDAAIAAA1IB4AAIAAAqIh4AAIAAA+ICGAAIAAAtgAKZAKQgOgFgLgJQgLgLgIgOQgGgPAAgTQAAgRAGgPQAIgOALgKQALgLAOgGQAPgFAQgBQARABAPAFQAOAGAMALQAKAKAIAOQAGAPAAARQAAATgGAPQgIAOgKALQgMAJgOAFQgPAGgRAAQgQAAgPgGgAKhh3QgLAEgHAIQgJAIgFAMQgEALAAANQAAAOAEAMQAFALAJAIQAHAJALAFQAKAEANAAQANAAAKgEQAMgFAHgJQAJgIAFgLQAEgMAAgOQAAgNgEgLQgFgMgJgIQgHgIgMgEQgKgFgNgBQgNABgKAFgALLgSIgWgmIgKAAIAAAmIgSAAIAAhZIAiAAQAQAAAJAGQAJAGABAOQAAAHgDAEQgBAEgDADIgIAFIgJACIAYAmgAKrhGIAQAAQAHAAAEgCQAGgCAAgIQAAgDgCgDQgBgCgDgBIgNgCIgOAAg");
	this.shape_24.setTransform(141.8,-168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-21.1,-195.7,636.1,51), null);


(lib.txt_AGame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgrArIAAhVIBXAAIAABVg");
	this.shape.setTransform(612.45,-173.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5CNQgcgLgTgUQgTgUgKgcQgLgcAAgiQAAgfALgcQALgcATgVQAUgUAbgMQAbgLAgAAQAlAAAcAOQAbAOASAYQARAYAIAfQAIAfgCAgIjQAAQACAnASARQARASAhAAQAYAAASgMQARgNAEgNIBGAAQgRA0gjAXQgiAWgyAAQghAAgbgLgAgehVQgMAGgIAKQgHAJgDALIgEATICAAAQgFgegOgQQgPgQgdAAQgSAAgNAHg");
	this.shape_1.setTransform(589.6548,-183.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACOCUIAAijIgBgbQgCgNgFgJQgFgKgKgFQgJgGgRAAQgRAAgKAGQgKAHgHAKQgGAKgBANIgCAbIAACgIhPAAIAAihIAAgaQgBgMgEgKQgEgLgKgHQgKgGgTAAIgPADQgJACgJAHQgIAHgHANQgGANAAAWIAACmIhPAAIAAkgIBLAAIAAAoIABAAQAQgXAWgMQAWgNAcAAQAcABAWAJQAWAMAMAbQANgTAWgPQAWgPAeAAQAXABAUAFQATAFAOANQAOAMAIAUQAIATAAAdIAADAg");
	this.shape_2.setTransform(549.275,-184.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhQCTQgSgFgOgLQgNgKgHgQQgIgRAAgWQAAgZAIgQQAKgQANgJQAOgJASgFIAjgHIAjgFIAegFQAOgDAHgGQAIgHgBgMQAAgNgDgIQgFgHgHgEQgHgFgJgBIgUgBQgXAAgNAKQgOAKgBAXIhQAAQACgcAMgSQAMgTATgLQAUgLAXgFQAYgEAXAAIAsADQAXADASAJQASAJAMAPQAMAQAAAbIAACVIADAmQABASAGAJIhRAAIgDgOIgCgOQgTATgaAIQgZAIgaAAQgVAAgSgFgAAnAKIgQAEIgTADIgSADIgRAEIgPAIQgGAFgFAHQgDAHAAALQAAALADAHQAFAIAGAEIAPAGIATABQAXAAAMgIQANgHAGgLQAHgLABgLIABgSIAAgeg");
	this.shape_3.setTransform(508.7,-183.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGDBQgmgQgZgcQgZgcgNgmQgOglAAgsQAAgsAOgmQANgmAZgdQAZgdAmgQQAkgQAtAAQAfAAAdAJQAcAJAYASQAWASAQAbQAPAaAEAiIhUAAQgJgigWgQQgXgRgfAAQgdAAgUALQgVAMgNATQgNATgGAZQgGAZAAAZQAAAZAGAYQAGAYANATQANATAVALQAUAMAdAAQArAAAYgWQAYgWAEgqIhYAAIAAhBICoAAIAADXIg5AAIgJgtQgXAegcAMQgdAMgdAAQgtAAgkgQg");
	this.shape_4.setTransform(472,-189.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgdCNIAAhvIhvAAIAAg7IBvAAIAAhvIA7AAIAABvIBvAAIAAA7IhvAAIAABvg");
	this.shape_5.setTransform(421,-183.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("ABoDIIgehZIiVAAIgfBZIhYAAICXmPIBZAAICVGPgAgzAuIBmAAIgyiTIgBAAg");
	this.shape_6.setTransform(386,-189.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhcCUIAAkgIBLAAIAAA2IABAAQAGgNAJgMQAJgMAMgIQAMgIAPgEQAOgFAPAAIARADIAABKIgOgCIgPgBQgVAAgQAHQgPAHgJANQgIANgEARQgEARAAASIAACCg");
	this.shape_7.setTransform(343.875,-184.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSCMQgUgIgMgQQgMgQgEgVQgFgXAAgbIAAiwIBPAAIAACiQAAAkAMASQALARAdAAQAfAAAPgTQAOgTAAgtIAAiWIBQAAIAAEgIhMAAIAAgoIgCAAQgPAZgYALQgXAMgZAAQggAAgVgJg");
	this.shape_8.setTransform(315.925,-183.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag9CNQgbgKgUgUQgUgUgKgcQgLgcAAgjQAAghALgdQAKgcAUgUQAUgUAbgLQAbgKAiAAQAiAAAbAKQAcALAUAUQATAUALAcQALAdAAAhQAAAjgLAcQgLAcgTAUQgUAUgcAKQgbALgiAAQgiAAgbgLgAghhUQgNAJgJAMQgIANgDARQgDARAAAQQAAASADAQQADARAIANQAJANANAIQANAIAUAAQAUAAAOgIQANgIAIgNQAIgNAEgRQADgQAAgSQAAgQgDgRQgEgRgIgNQgIgMgNgJQgOgIgUAAQgUAAgNAIg");
	this.shape_9.setTransform(283.225,-183.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhgDCIgYgBIAAhCIAXADIAXAAQAQgCAIgLQAHgKAAgNQAAgJgDgJIhlkOIBUAAIBBDFIABAAIA/jFIBSAAIh5FEQgNAjgVAPQgXAPgpAAg");
	this.shape_10.setTransform(252.625,-178.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxDGQgWgGgTgLQgRgLgMgSQgNgRgBgZIBOAAQAGAWARAJQAQAJAUAAQAiAAAPgUQAPgUAAgfIAAgmIgBAAQgNAXgYALQgYAKgZABQghAAgXgMQgXgMgPgTQgQgUgHgaQgHgbAAgdQABgcAHgaQAJgaAQgUQAPgTAXgNQAXgLAeAAQAcAAAWAKQAWALAOAZIABAAIAAgmIBLAAIAAEOQABARgFAWQgFAXgQATQgQATgdANQgeAOgwAAQgVAAgXgFgAgciIQgMAHgIALQgIAMgDAPQgEAPAAAQIADAfQADAQAIAMQAHALANAHQALAJASgBQARAAANgGQANgHAIgLQAJgKAEgOQAEgOAAgRQAAgRgEgQQgDgQgIgNQgHgMgNgHQgNgIgUAAQgPAAgNAHg");
	this.shape_11.setTransform(206.8,-178.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA4CUIAAiiQAAgkgLgSQgLgRgdAAQgfAAgPATQgPAUAAArIAACXIhPAAIAAkgIBMAAIAAApIABAAQAQgaAYgLQAXgMAZAAQAgAAAUAJQAVAIALAQQAMAQAFAVQAFAXAAAbIAACwg");
	this.shape_12.setTransform(174.725,-184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnDIIAAkgIBPAAIAAEggAgniFIAAhCIBPAAIAABCg");
	this.shape_13.setTransform(151.925,-189.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhcCUIAAkgIBLAAIAAA2IABAAQAGgNAJgMQAJgMAMgIQAMgIAPgEQAOgFAPAAIARADIAABKIgOgCIgPgBQgVAAgQAHQgPAHgJANQgIANgEARQgEARAAASIAACCg");
	this.shape_14.setTransform(136.325,-184.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AinDIIAAmPIC7AAQAdAAAYAFQAXAFARAMQARALAJATQAJATAAAcQAAAegNAVQgOAUgbANQAlAKASAaQASAbABAlQAAAfgMAWQgMAVgUAPQgTANgaAHQgaAHgaAAgAhPCDIBeAAIAYgCQAMgDAJgGQAJgFAFgKQAGgLAAgPQAAgfgSgNQgRgNgcAAIhgAAgAhPglIBYAAQAZAAAOgLQAPgLAAgaQABgOgGgIQgFgKgIgFQgIgEgLgDIgXgCIhSAAg");
	this.shape_15.setTransform(106.15,-189.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(83.6,-225.9,537.9,70.70000000000002), null);


(lib.schoolPaper_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmMiGQAFACH6hBIEaESIo6B4gAmMiGIAAAAIAAAAg");
	mask.setTransform(8.2744,3.3);

	// Layer_1
	this.instance = new lib.schoolPaper();
	this.instance.setTransform(-33.5,-17);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.schoolPaper_mc, new cjs.Rectangle(-31.4,-16.4,77.9,39.5), null);


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

	// Layer_1
	this.instance = new lib.printer();
	this.instance.setTransform(326.45,80.8,0.8278,0.8278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(326.5,80.8,171.3,121.7), null);


(lib.paper_stack_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.paperStack();
	this.instance.setTransform(719.7,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(719.7,-133,65,61), null);


(lib.paper_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAzsgDHQgVh9gMhgQAHAFC4AOIC2AOQAQByBZDNQAsBmAqBQQggAMjSAhQhpAQhiAOQgtiNgpj3g");
	mask.setTransform(383.8654,-42.0525);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(711.2,-85,0.3587,0.3587);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(711.4,-84.1,56.39999999999998,60.99999999999999), null);


(lib.inkBottles_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.inkBottles();
	this.instance.setTransform(547,149.8,0.6774,0.6774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(547,149.8,149.70000000000005,92.19999999999999), null);


(lib.epson_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("ABDA/QgNgFgHgJQgIgJgFgNQgEgMAAgOQAAgOAEgNQAFgMAIgKQAHgJANgGQANgFAOAAQAQAAAMAFQANAGAHAJQAIAKAFAMQAEANAAAOQAAAOgEAMQgFANgIAJQgHAJgNAFQgMAGgQAAQgOAAgNgGgABOgnQgHADgEAHQgEAFgCAJQgCAJAAAHQAAAHACAJIAGAPQAEAFAHAEQAHAEAJAAQAKAAAHgEQAHgEAFgFQADgIACgHQACgJAAgHQAAgHgCgJQgCgJgDgFQgFgHgHgDQgHgGgKAAQgJAAgHAGgAg2BDQgLgEgHgFQgJgGgEgJQgFgIABgMIAbAAQAAAGADAFQACAEAFADQADADAGABIALABIAIAAQAFAAADgDQAEgBACgDQAEgDAAgGQAAgFgEgEIgIgGIgqgLQgHgDgGgDQgFgEgEgHQgDgHAAgIQAAgKAEgIQAEgHAHgFQAIgFAJgDQAIgCAJAAQALAAAJACQAKADAGAFQAHAFAEAHQAEAJAAAMIgaAAQAAgHgDgEIgEgFQgFgEgEAAIgRgBQgEACgCACIgFAEQgCADAAAFQAAADABACIAGAFIArAMIALAGQAHADAEAHQAFAHAAAMQAAAIgDAIQgDAIgHAHQgHAEgKAEQgKADgOAAQgKAAgKgCgAD9BCIg3hXIAABXIgbAAIAAiDIAdAAIA3BYIAAAAIAAhYIAbAAIAACDgAjTBCIAAiDIA8AAQAMABAIADQAJADAGAGQAFAGADAIQADAHAAAIQAAAIgDAIQgDAHgFAGQgGAFgJAEQgIAEgMgBIgfAAIAAAwgAi2gCIAhgBQAEgBADgDQAEgBADgFIABgKIgBgJQgDgFgEgBQgDgDgEAAIghgBgAlJBCIAAiDIBjAAIAAAYIhGAAIAAAcIBBAAIAAAVIhBAAIAAAiIBIAAIAAAYgAE2gnIgFgCIgDgGIgBgGIABgFIADgFQACgDADAAIAFgBIAGABQADAAACADIADAFIABAFIgBAGIgDAGIgFACIgGABIgFgBgAE3g/QAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIAAAEIAAAFQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIADAEIAEAAIAFAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgDIAAgFIAAgEIgDgEQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgFgBIgEABgAE/gtIgEgHIgCAAIAAAHIgDAAIAAgQIAFAAIAFACQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIgBACIgBABIgBABIgCAAIAFAHgAE5g2IACAAIADAAIABgCIAAgBIgBgBIgFAAg");
	this.shape.setTransform(-5.775,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-38.7,-11,65.9,13.8), null);


(lib.ecoTank_Logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ecoTank();
	this.instance.setTransform(-412.9,15.25,0.9754,0.9754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-412.9,15.3,109.29999999999995,42.900000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AARAnIgQg6IgSA6IgNAAIgYhNIANAAIASA+IAUg+IAJAAIASA+IATg+IAMAAIgYBNg");
	this.shape.setTransform(26.975,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgGgGQgFgFgDgHQgCgIgBgIIAAgBQABgIACgIQADgHAFgFQAGgGAHgDQAGgDAIAAQAIAAAHADQAIADAEAGQAGAFACAHQADAHABAJIAAABQgBAIgDAIQgCAHgGAGQgEAFgIADQgHACgIABQgIAAgGgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQACgGgBgGIAAgBQABgGgCgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(17.35,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA2Ig1hcIAABcIgNAAIAAhqIARAAIAzBXIAAhXIANAAIAABqg");
	this.shape_2.setTransform(8.25,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIAMAAIAAANIAEgFIAHgFIAHgDQAEgCAEAAQAHAAAHADQAGADAFAFQAFAFADAHQACAIAAAJIAAABQAAAJgCAGQgDAIgEAFQgFAGgHADQgGACgIABQgJAAgHgFQgGgEgEgGIAAApgAgJgoQgFABgDAEQgEAEgCAFQgBAGAAAHIAAACQAAAHABAFQACAFAEAEQADAEAFABQAFACAEAAQAMAAAGgHQAGgIAAgNIAAgCQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(-3.775,2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgCgIAAgIIAAgBQAAgIACgIQADgHAFgFQAFgGAHgDQAIgDAHAAQAIAAAIADQAGADAFAGQAGAFACAHQADAHAAAJIAAABQAAAIgDAIQgCAHgGAGQgFAFgGADQgIACgIABQgHAAgIgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQABgGAAgGIAAgBQAAgGgBgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(-12.45,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA3IAAgxQAAgJgEgFQgFgFgKAAIgHACQgEABgCACQgEADgCAEQgBADAAAGIAAAvIgMAAIAAhtIAMAAIAAAsQADgFAGgEQAGgFAJAAQAGAAAFACQAFACAEADQADAFADAFQACAHAAAHIAAAwg");
	this.shape_5.setTransform(-20.55,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPA0QgHgCgFgFQgGgFgBgGQgDgGgBgHIANAAIACAJQABAEAEAEQADACAEACIANADQAFAAAEgCIAJgEQADgDABgEQADgEAAgEIgBgIIgFgFQgCgDgGgCIgMgDIgPgDQgGgBgFgEQgEgDgDgFQgCgFAAgHQAAgGACgGQADgEAFgFQAEgEAGgCQAHgCAHAAQAPAAAKAHQAKAIABAPIgMAAQgCgLgFgEQgHgFgKABQgLgBgFAFQgGAFAAAIIABAGQAAAEAEACQACADAGABIALADIARADQAGADAFADQAEADADAGQACAEAAAIQAAAHgCAGQgDAFgFAFQgFAEgHACQgGADgJAAQgJAAgIgDg");
	this.shape_6.setTransform(-29.05,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AmoCFIAAkJINRAAIAAEJg");
	this.shape_7.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-42.5,-13.7,85,27.5), null);


(lib.backPack_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.backpack();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,970,66), null);


(lib.background_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.background_gradient();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_img, new cjs.Rectangle(-150,-300,300,600), null);


(lib.kid_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.5,-0.9,-0.2,2.6).s().p("Ai2AOIFsgwIABARIltA0g");
	this.shape.setTransform(659.85,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.5,-0.9,-0.2,2.6).s().p("Ai2AOIFsgvIABAQIltAzg");
	this.shape_1.setTransform(659.85,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},36).to({state:[]},1).to({state:[{t:this.shape_1}]},73).to({state:[]},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAqMgB7IK3hcIDsDwIruC/g");
	var mask_graphics_36 = new cjs.Graphics().p("AnRh7IK2hcIDtDwIrtC/g");
	var mask_graphics_110 = new cjs.Graphics().p("AnRh7IK2hcIDtDwIrtC/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:363.125,y:-7.6}).wait(36).to({graphics:mask_graphics_36,x:679.675,y:-7.6}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:679.675,y:-7.6}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(647.3,-34.85,0.539,0.539,0,0,0,0.3,0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6292,scaleY:0.6292,x:663.1,y:-15},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-149.75,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-65.2,970,66);


// stage content:
(lib.Epson_EcoTank_BTS_970x66_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [271];
	// timeline functions:
	this.frame_271 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(271).call(this.frame_271).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(484.9982,33.0002,1.3324,0.7333);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(147).to({alpha:0},9).wait(59).to({alpha:1},9).wait(40));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(147).to({alpha:0},9).wait(59).to({alpha:1},9).wait(40));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(545.3,34.45,1.1072,1.1072,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({alpha:1},9).wait(35));

	// txt_fill
	this.instance_3 = new lib.txt_fill();
	this.instance_3.setTransform(100.6,23.65);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// inkBottles_mc
	this.instance_4 = new lib.inkBottles_mc();
	this.instance_4.setTransform(924.35,49.2,0.45,0.45,0,0,0,623.2,195.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(855.15,38.9,0.6226,0.6226,0,0,0,413.6,144.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// backPack_img
	this.instance_6 = new lib.backPack_img();
	this.instance_6.setTransform(150,125.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// txt_homework
	this.instance_7 = new lib.txt_homework();
	this.instance_7.setTransform(207.85,178);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(53));

	// kid_img
	this.instance_8 = new lib.kid_img("single",0);
	this.instance_8.setTransform(150,65.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// txt_enoughInk
	this.instance_9 = new lib.txt_enoughInk();
	this.instance_9.setTransform(188.25,176.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_mc
	this.instance_10 = new lib.paper_mc();
	this.instance_10.setTransform(-183.05,77.65,1.3191,1.3191);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({alpha:0},9).to({_off:true},1).wait(111));

	// paper_stack_mc
	this.instance_11 = new lib.paper_stack_mc();
	this.instance_11.setTransform(562.65,102.05,1,1,0,0,0,527.1,-98);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({y:59.05},9,cjs.Ease.quadOut).wait(44).to({alpha:0},9).to({_off:true},1).wait(111));

	// inkBottles_mc
	this.instance_12 = new lib.inkBottles_mc();
	this.instance_12.setTransform(594.2,66.05,0.4304,0.4304,0,0,0,33.7,240);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(48).to({_off:false},0).to({x:564.2,alpha:1},9,cjs.Ease.quadOut).wait(31).to({regX:33.8,regY:239.8,scaleX:0.6328,scaleY:0.6328,x:515.75,y:67.05},9,cjs.Ease.quadOut).wait(54).to({alpha:0},9).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_13 = new lib.printer_mc();
	this.instance_13.setTransform(676.2,46.5,0.5875,0.5875,0,0,0,11.6,165.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48).to({_off:false},0).to({x:646.2,alpha:1},9,cjs.Ease.quadOut).wait(31).to({x:786.2,alpha:0},9,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_ecoTank
	this.instance_14 = new lib.txt_ecoTank();
	this.instance_14.setTransform(144.6,141.05);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:245.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_AGame
	this.instance_15 = new lib.txt_AGame();
	this.instance_15.setTransform(150.5,198.25);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// background
	this.instance_16 = new lib.background_img();
	this.instance_16.setTransform(486.3,32.05,3.2811,0.1331,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.8,-16.5,593.1000000000001,144.6);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 970,
	height: 66,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background_gradient.jpg", id:"background_gradient"},
		{src:"backpack.jpg", id:"backpack"},
		{src:"ecoTank.png", id:"ecoTank"},
		{src:"inkBottles.png", id:"inkBottles"},
		{src:"kidSchool.jpg", id:"kidSchool"},
		{src:"paper.jpg", id:"paper"},
		{src:"paperStack.png", id:"paperStack"},
		{src:"printer.png", id:"printer"},
		{src:"schoolPaper.jpg", id:"schoolPaper"}
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
an.compositions['DB8868308261408A88177DE9F03467FE'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;