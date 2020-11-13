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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape.setTransform(130.575,-300.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_1.setTransform(124.525,-307.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_2.setTransform(118.475,-307.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBAQgJgEgHgJQgFgIgDgNQgCgNAAgRQAAgPADgNQADgNAFgIQAGgJAKgEQAKgFANABQAPgBAKAEQAKAEAFAJQAGAJACAMQADANAAAQQAAARgDAMQgCANgHAJQgFAJgKADQgKAEgOABIgCAAQgNAAgJgEgAgIgpQgEAEgCAGIgCAOIAAARIAAASIACAPQACAGAEADQADAEAFAAQAKAAAEgLQAEgKAAgZQAAgXgEgLQgEgKgKAAQgFAAgDADg");
	this.shape_3.setTransform(109.55,-305.0497);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghBCIAAiAIAgAAIAAARQAFgJAGgGQAIgFAKAAIADAAIADAAIAAAgIgFAAIgFgBIgJACQgEABgEADQgEACgCAFQgBAEAAAHIAABMg");
	this.shape_4.setTransform(100.05,-305.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBAQgHgCgDgGQgEgFgBgHQgCgGAAgGQAAgKACgGQACgHAEgEQAEgFAGgCQAGgEAJgCIARgFQAIgCADgDQADgDAAgHQAAgHgEgEQgDgFgIAAQgHAAgEAFQgEAEAAAIIAAADIgeAAIAAgDQAAgLAEgHQADgIAGgEQAGgGAJgBQAIgCAJAAQAOAAAJADQAKACAFAGQAFAFABAHQACAHAAAJIAABDIABAOIADALIgfAAIgDgGIgBgHIgBAAQgGAKgHACQgHADgMABQgIgBgGgDgAAHAFIgHACQgJACgEAFQgEAFAAAJQAAAHADAGQACAFAHAAIAGgCQAEgBADgCQADgCACgEQACgEAAgFIAAgag");
	this.shape_5.setTransform(83.375,-305.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQBCIAAhYQAAgKgEgEQgDgEgHAAQgRAAAAAWIAABUIghAAIAAiAIAgAAIAAAPQAGgJAIgFQAHgEALAAQAQAAAIAIQAJAJAAAUIAABeg");
	this.shape_6.setTransform(65.35,-305.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBAQgJgEgHgJQgFgIgDgNQgCgNAAgRQAAgPADgNQADgNAFgIQAGgJAKgEQAKgFANABQAPgBAKAEQAKAEAFAJQAGAJACAMQADANAAAQQAAARgDAMQgCANgHAJQgFAJgKADQgKAEgOABIgCAAQgNAAgJgEgAgIgpQgEAEgCAGIgCAOIAAARIAAASIACAPQACAGAEADQADAEAFAAQAKAAAEgLQAEgKAAgZQAAgXgEgLQgEgKgKAAQgFAAgDADg");
	this.shape_7.setTransform(53.3,-305.0497);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBVIAAgYIAIAAQAKAAAEgEQADgFABgIIgkiAIAiAAIATBYIAAAAIARhYIAhAAIgfB3QgEAQgEAKQgEAKgGAGQgEAFgIACQgHABgMAAg");
	this.shape_8.setTransform(35.875,-302.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_9.setTransform(27.375,-307.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA+QgLgHgFgJQgEgKgBgMIgCgYQAAgNACgMQADgMAEgJQAGgJAKgGQAKgGAQABQAPgBAJAFQAJAFAFAJQAFAIACAMQACAMAAAPIAAAHIhAAAIAAAKIABALIACAJIAGAIQADACADAAQAJAAADgGQAEgGACgNIAdAAQgBAXgKAMQgLAMgYAAQgSgBgJgFgAgGgqQgEADgCADIgCAJIgBAJIAAAFIAhAAIgBgNQgBgGgCgEQgCgEgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_10.setTransform(18.65,-305.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANBTIgOgBQgHgBgDgEQgDgEgBgHIgBgQIAAhJIgSAAIAAgWIASAAIAAglIAgAAIAAAlIATAAIAAAWIgTAAIAABFQAAAIACADQACADAHAAIAEAAIAEAAIAAAXIgLAAg");
	this.shape_11.setTransform(9.3,-306.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBXIAAiAIAhAAIAACAgAgQg5IAAgdIAhAAIAAAdg");
	this.shape_12.setTransform(2.525,-307.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQBCIAAhYQAAgKgEgEQgDgEgHAAQgRAAAAAWIAABUIghAAIAAiAIAgAAIAAAPQAGgJAIgFQAHgEALAAQAQAAAIAIQAJAJAAAUIAABeg");
	this.shape_13.setTransform(-6.65,-305.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBXIAAiAIAhAAIAACAgAgQg5IAAgdIAhAAIAAAdg");
	this.shape_14.setTransform(-15.825,-307.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQBXIAAhpIgRAAIAAgXIARAAIAAgPQAAgIACgGQACgGAFgEQAEgDAGgCQAGgBAIAAIARAAIAAAYIgDAAIgDAAQgHAAgCACQgEACAAAGIAAALIATAAIAAAXIgTAAIAABpg");
	this.shape_15.setTransform(-22.5,-307.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbA+QgJgHgFgJQgFgKgBgMIgCgYQAAgNACgMQADgMAEgJQAGgJAKgGQALgGAPABQAPgBAIAFQAKAFAFAJQAGAIACAMQABAMAAAPIAAAHIhAAAIAAAKIABALIACAJIAGAIQADACADAAQAJAAAEgGQADgGABgNIAfAAQgBAXgMAMQgKAMgYAAQgSgBgKgFgAgGgqQgEADgCADIgCAJIgBAJIAAAFIAgAAIgBgNQAAgGgCgEQgCgEgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_16.setTransform(-31.95,-305.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoBHQgKgPABgkQgBgjAKgQQAKgQAUAAQAKAAAFAEQAHADAFAJIAAAAIAAg3IAiAAIAACrIghAAIAAgOQgFAJgHAEQgGADgKAAQgUAAgKgQgAgNgLQgDALgBAUQABAVADAKQADALAKAAQALAAADgLQADgKAAgVQAAgUgDgLQgDgKgLAAQgKAAgDAKg");
	this.shape_17.setTransform(-43.95,-307);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaA+QgKgHgGgJQgEgKgBgMIgCgYQABgNACgMQACgMAEgJQAGgJAKgGQAKgGAQABQAOgBAKAFQAJAFAFAJQAFAIACAMQACAMAAAPIAAAHIhAAAIAAAKIAAALIAEAJIAEAIQADACAEAAQAJAAADgGQAEgGACgNIAdAAQAAAXgLAMQgLAMgZAAQgQgBgKgFgAgHgqQgCADgCADIgEAJIAAAJIAAAFIAhAAIgBgNQgBgGgCgEQgBgEgEgCQgDgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(-61.7,-305.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghBCIAAiAIAgAAIAAARQAEgJAIgGQAGgFALAAIADAAIADAAIAAAgIgFAAIgGgBIgIACQgFABgDADQgDACgCAFQgCAEAAAHIAABMg");
	this.shape_19.setTransform(-71,-305.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBAQgHgCgDgGQgEgFgBgHQgCgGAAgGQAAgKACgGQACgHAEgEQAEgFAGgCQAGgEAJgCIARgFQAIgCADgDQADgDAAgHQAAgHgEgEQgDgFgIAAQgHAAgEAFQgEAEAAAIIAAADIgeAAIAAgDQAAgLAEgHQADgIAGgEQAGgGAJgBQAIgCAJAAQAOAAAJADQAKACAFAGQAFAFABAHQACAHAAAJIAABDIABAOIADALIgfAAIgDgGIgBgHIgBAAQgGAKgHACQgHADgMABQgIgBgGgDgAAHAFIgHACQgJACgEAFQgEAFAAAJQAAAHADAGQACAFAHAAIAGgCQAEgBADgCQADgCACgEQACgEAAgFIAAgag");
	this.shape_20.setTransform(-81.625,-305.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbA+QgKgHgEgJQgFgKgBgMIgBgYQAAgNABgMQACgMAGgJQAFgJAKgGQALgGAPABQAOgBAJAFQAKAFAFAJQAFAIADAMQACAMAAAPIAAAHIhBAAIAAAKIABALIADAJIAEAIQADACAEAAQAIAAAFgGQADgGABgNIAfAAQgCAXgLAMQgLAMgYAAQgQgBgLgFgAgHgqQgDADgBADIgDAJIgBAJIAAAFIAgAAIgBgNQAAgGgCgEQgCgEgDgCQgDgCgFAAQgEAAgEACg");
	this.shape_21.setTransform(-99.2,-305.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATBWIgTh8IAAAAIgTB8IgmAAIgfirIAhAAIATB+IAAAAIAUh+IAhAAIAUB+IAAAAIATh+IAhAAIgfCrg");
	this.shape_22.setTransform(-114.125,-307.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-247.4,-323.6,505.4,32.400000000000034), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AK6B2IAOgdQAGgOADgOQADgNACgPQABgPAAgQQAAgQgBgPQgCgOgDgPQgDgNgGgOQgGgPgIgOIAbAAQAUAeAIAeQAJAdAAAbQAAAbgJAdQgIAdgUAfgArUB2QgUgfgIgdQgJgdAAgbQAAgbAJgdQAIgeAUgeIAbAAQgIAOgGAPQgGAOgDANQgEAPgBAOQgBAPAAAQQAAAQABAPQABAPAEANQADAOAGAOIAOAdgAG/BFQgLgEgGgJQgGgJgDgPQgDgOAAgRQAAgSADgNQAEgOAGgJQAGgKALgEQALgFAPAAQAQAAAKAEQAMAFAFAJQAHAKADANQACAOAAASQAAARgDAOQgDAOgGAKQgHAIgKAFQgLAFgPAAQgRAAgKgFgAHPgsQgEADgCAIQgBAGgBAIIAAAoQABAIABAHQACAGAEAEQAEADAHAAQALABAEgLQAEgMAAgaQAAgZgEgMQgEgMgLAAQgHABgEADgABKBGQgKgDgHgJQgHgIgDgOQgEgPAAgUQAAgVAFgOQAEgPAHgIQAIgIAKgDQALgEANAAQAZAAAMAOQAMAPAAAZIgiAAIgDgTQgBgEgDgCQgDgDgGAAQgGAAgFADQgEADgBAGQgDAGgBAIIAAArQABAJADAHQACAFADADQAEACAGAAQAJAAAEgHQAFgIgBgRIAiAAQABAcgMAOQgNAPgdAAQgNAAgKgEgAneBDQgLgHgHgMQgGgMgCgPQgCgQAAgQIACgmQABgSAGgOQAFgOANgJQAMgIAXAAQALAAAIABQAKADAHAFQAHAGAEAJQAEAJABANIgkAAQAAgKgEgHQgDgFgKAAQgIAAgEADQgEAEgDAGQgDAHAAAIIgBAcIAAAAQAGgIAIgEQAJgEAMAAQAMAAAJAEQAIAEAGAIQAFAIACALQADAKAAALQAAAhgOAQQgOARgfAAQgUgBgLgGgAnOgNQgEAJAAARIABAPIACAMQADAEAEADQAEACAHAAQAGAAAEgCQAEgDADgEQACgFAAgHIAAgPQAAgRgEgJQgEgIgLAAQgMAAgFAIgAKQBGIAAgoIAiAAIAAAogAJXBGIAAi4IAkAAIAAC4gAIfBGIAAi4IAkAAIAAC4gAFXBGIAAiKIAiAAIAAATIABAAQAFgLAIgGQAIgGALAAIADAAIAEAAIAAAjIgLgBIgKABQgEACgEADQgEADgDAFQgCAFAAAGIAABTgADpBGIAAhfQAAgLgDgEQgEgFgIAAQgTAAAAAXIAABcIgkAAIAAi4IAkAAIAAA8IABAAQAKgSAXAAQASAAAJAJQAJAKAAAVIAABmgAgEBGIAAhfQAAgLgDgEQgEgFgIAAQgTAAAAAXIAABcIgkAAIAAiKIAiAAIAAAQIABAAQAFgLAKgEQAIgFANAAQAQAAAJAJQAJAKAAAVIAABmgAiBBGIAAiKIAkAAIAACKgAktBGIAAgmIhCAAIAAgeIA9hyIAnAAIAABzIASAAIAAAdIgSAAIAAAmgAlRADIAkAAIAAhFIgBAAgApWBGIgJgnIgxAAIgIAnIgoAAIAyi4IAuAAIAxC4gAqKABIAlAAIgShTIgBAAgAjcALIAAgeIBJAAIAAAegAiBhVIAAggIAkAAIAAAgg");
	this.shape.setTransform(1.8,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-74.4,-298.8,152.4,23.5), null);


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
	this.shape.graphics.f("#353535").s().p("AgUAZIAAgxIApAAIAAAxg");
	this.shape.setTransform(121.7,-96.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAVBYIAAh1QAAgOgEgFQgFgFgKAAQgWAAAAAcIAABxIgsAAIAAirIAqAAIAAAUIAAAAQAIgNALgGQAKgFAOAAQAWAAALALQALAMAAAaIAAB+g");
	this.shape_1.setTransform(111.1,-102.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AggBVQgNgFgIgMQgHgLgEgRQgDgRAAgXQAAgVAEgRQADgQAIgMQAIgLANgHQANgFASAAQAUAAANAFQANAGAIAMQAIALADAQQADASAAAVQAAAXgEARQgDARgIALQgIALgNAGQgNAFgTAAIgCAAQgSAAgMgFgAgMg3QgFAFgCAIQgCAIgBALIgBAXIABAZQABALACAIQACAIAFAFQAFAEAHAAQAOAAAFgOQAFgOAAghQAAgfgFgOQgFgOgOAAQgHAAgFAEg");
	this.shape_2.setTransform(96.675,-102.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBzIAAiqIArAAIAACqgAgVhNIAAgmIArAAIAAAmg");
	this.shape_3.setTransform(86.45,-105.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgDBtQgIgBgEgGQgEgFgCgIQgCgJABgNIAAhiIgXAAIAAgeIAXAAIAAgxIArAAIAAAxIAZAAIAAAeIgZAAIAABcQAAALACAEQADAEAKAAIAFAAIAFgBIAAAfIgOABIgPAAQgNAAgHgCg");
	this.shape_4.setTransform(79.2,-105.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgsBWQgIgEgEgHQgFgHgCgJQgDgIAAgKQAAgMADgIQACgJAGgHQAFgFAIgDQAIgFAMgDIAYgHQAKgDAEgEQADgFAAgIQAAgKgEgGQgFgFgKAAQgKAAgGAGQgFAGAAAKIAAAFIgnAAIAAgEQAAgPAEgKQAFgKAIgGQAJgHALgCQALgDAMAAQATAAAMAEQAMADAHAHQAHAIACAKQADAJAAALIAABaIABATIAEAOIgqAAIgEgIIgCgKIAAAAQgIAOgKAEQgJAEgQAAQgMAAgIgEgAAKAGIgKADQgMADgGAGQgFAIAAALQAAAKADAHQAEAHAJAAIAIgCQAFgBAEgDQAEgDADgFQACgGAAgHIAAgig");
	this.shape_5.setTransform(67.875,-102.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAVBYIAAh1QAAgOgFgFQgEgFgKAAQgWAAAAAcIAABxIgtAAIAAirIArAAIAAAUIAAAAQAIgNALgGQAKgFAPAAQAUAAAMALQAMAMAAAaIAAB+g");
	this.shape_6.setTransform(53.55,-102.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgVBzIAAiqIArAAIAACqgAgVhNIAAgmIArAAIAAAmg");
	this.shape_7.setTransform(43,-105.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AA/BYIAAh3QAAgLgFgGQgEgFgJAAQgKAAgHAHQgGAHAAAPIAABwIgrAAIAAh3QAAgLgEgGQgEgFgJAAQgLAAgGAHQgGAHAAAPIAABwIgtAAIAAirIArAAIAAASIAAAAQAJgMAKgFQAKgFAPAAQAPAAAKAHQAKAHAEANIAAAAQAFgOAMgGQALgHAQAAQAWAAAKANQALANAAAZIAAB8g");
	this.shape_8.setTransform(28.275,-102.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgsBWQgIgEgEgHQgFgHgCgJQgDgIAAgKQAAgMADgIQACgJAGgHQAFgFAIgDQAIgFAMgDIAYgHQAKgDAEgEQADgFAAgIQAAgKgEgGQgFgFgKAAQgKAAgGAGQgFAGAAAKIAAAFIgnAAIAAgEQAAgPAEgKQAFgKAIgGQAJgHALgCQALgDAMAAQATAAAMAEQAMADAHAHQAHAIACAKQADAJAAALIAABaIABATIAEAOIgqAAIgEgIIgCgKIAAAAQgIAOgKAEQgJAEgQAAQgMAAgIgEgAAKAGIgKADQgMADgGAGQgFAIAAALQAAAKADAHQAEAHAJAAIAIgCQAFgBAEgDQAEgDADgFQACgGAAgHIAAgig");
	this.shape_9.setTransform(9.625,-102.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVByIAAjjIArAAIAADjg");
	this.shape_10.setTransform(-0.5,-105.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgkBSQgNgIgHgNQgGgNgCgQIgBggQAAgSADgPQACgRAHgMQAHgMAOgIQANgHAWAAQATAAAMAGQAMAGAHALQAHAMADAQQADARAAATIAAAJIhXAAIAAAOIABAOIAEAOQADAFAEAEQAEADAFAAQALAAAFgIQAFgIACgQIAoAAQgBAdgPARQgPAPgfAAQgXAAgOgIgAgJg4QgEADgDAFIgEALIgBAMIAAAHIAsAAIgBgSQgBgHgCgFQgDgFgEgEQgEgCgHAAQgGAAgEADg");
	this.shape_11.setTransform(-16.875,-102.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgDBtQgIgBgEgGQgEgFgCgIQgBgJgBgNIAAhiIgWAAIAAgeIAWAAIAAgxIArAAIAAAxIAaAAIAAAeIgaAAIAABcQAAALADAEQAEAEAJAAIAFAAIAFgBIAAAfIgOABIgOAAQgNAAgIgCg");
	this.shape_12.setTransform(-27.7,-105.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgsBWQgIgEgEgHQgFgHgCgJQgDgIAAgKQAAgMADgIQACgJAGgHQAFgFAIgDQAIgFAMgDIAYgHQAKgDAEgEQADgFAAgIQAAgKgEgGQgFgFgKAAQgKAAgGAGQgFAGAAAKIAAAFIgnAAIAAgEQAAgPAEgKQAFgKAIgGQAJgHALgCQALgDAMAAQATAAAMAEQAMADAHAHQAHAIACAKQADAJAAALIAABaIABATIAEAOIgqAAIgEgIIgCgKIAAAAQgIAOgKAEQgJAEgQAAQgMAAgIgEgAAKAGIgKADQgMADgGAGQgFAIAAALQAAAKADAHQAEAHAJAAIAIgCQAFgBAEgDQAEgDADgFQACgGAAgHIAAgig");
	this.shape_13.setTransform(-39.025,-102.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgVBzIAAiqIArAAIAACqgAgVhNIAAgmIArAAIAAAmg");
	this.shape_14.setTransform(-49.15,-105.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag2BfQgNgVABgwQgBguANgWQANgVAcAAQAMAAAHAFQAJAFAIALIAAAAIAAhJIAtAAIAADjIgrAAIAAgSIgBAAQgHANgJAFQgIAEgNAAQgcAAgNgVgAgSgPQgFAOABAbQgBAdAFAOQAEAOAOAAQAPAAAEgOQAEgOAAgdQAAgbgEgOQgEgOgPAAQgOAAgEAOg");
	this.shape_15.setTransform(-59.95,-105.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgkBSQgNgIgHgNQgGgNgCgQIgBggQAAgSADgPQACgRAHgMQAHgMAOgIQANgHAWAAQATAAAMAGQAMAGAHALQAHAMADAQQADARAAATIAAAJIhXAAIAAAOIABAOIAEAOQADAFAEAEQAEADAFAAQALAAAFgIQAFgIACgQIAoAAQgBAdgPARQgPAPgfAAQgXAAgOgIgAgJg4QgEADgDAFIgEALIgBAMIAAAHIAsAAIgBgSQgBgHgCgFQgDgFgEgEQgEgCgHAAQgGAAgEADg");
	this.shape_16.setTransform(-73.875,-102.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA/BYIAAh3QAAgLgFgGQgEgFgJAAQgKAAgHAHQgGAHAAAPIAABwIgrAAIAAh3QAAgLgEgGQgEgFgJAAQgLAAgGAHQgGAHAAAPIAABwIgtAAIAAirIArAAIAAASIAAAAQAJgMAKgFQAKgFAPAAQAPAAAKAHQAKAHAEANIAAAAQAFgOAMgGQALgHAQAAQAWAAAKANQALANAAAZIAAB8g");
	this.shape_17.setTransform(-92.175,-102.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA/BYIAAh3QAAgLgFgGQgEgFgJAAQgKAAgHAHQgGAHAAAPIAABwIgrAAIAAh3QAAgLgEgGQgEgFgJAAQgLAAgGAHQgGAHAAAPIAABwIgtAAIAAirIArAAIAAASIAAAAQAJgMAKgFQAKgFAPAAQAPAAAKAHQAKAHAEANIAAAAQAFgOAMgGQALgHAQAAQAWAAAKANQALANAAAZIAAB8g");
	this.shape_18.setTransform(-115.175,-102.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgWByIAAjjIAtAAIAADjg");
	this.shape_19.setTransform(-130.15,-105.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-144.8,-126.8,279.6,41.8), null);


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
	this.shape.graphics.f("#353535").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape.setTransform(126.825,-99.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgzBrIAAgfIAKABQALAAAGgGQAEgGABgKIgtihIArAAIAXBvIABAAIAUhvIAqAAIgnCWQgFAUgFAMQgFANgHAHQgGAHgJACQgKACgOAAg");
	this.shape_1.setTransform(117.55,-102.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBnQgHgCgEgFQgEgFgCgIQgBgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAFAAIAEgBIAAAdIgNABIgOAAQgMAAgHgBg");
	this.shape_2.setTransform(107.55,-107.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBsIAAigIApAAIAACggAgUhIIAAgjIApAAIAAAjg");
	this.shape_3.setTransform(100.425,-107.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_4.setTransform(94.225,-107.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgpBQQgHgDgFgHQgEgHgDgIQgBgIAAgIQgBgMADgIQACgIAFgFQAFgGAIgDQAHgFALgDIAXgGQAJgCADgEQAEgFAAgIQAAgJgEgFQgFgFgJgBQgKAAgFAHQgEAFgBAJIAAAFIglAAIAAgEQAAgOAFgJQAFgKAHgGQAIgFAKgDQAKgDAMABQASAAALADQAMADAGAHQAGAHADAJQACAJAAALIAABUIABASIAEANIgoAAIgDgIIgCgJIAAAAQgIANgJADQgIAFgQAAQgLAAgHgFgAAJAGIgIACQgNADgEAGQgGAHAAAKQAAAKAEAHQADAGAJAAIAIgCQAEgBAEgDQADgDACgFQADgEAAgHIAAggg");
	this.shape_5.setTransform(84.35,-105.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgyBIQgKgLAAgXIAAh4IApAAIAABvQAAAMAFAGQADAEAKAAQAVAAAAgbIAAhqIApAAIAAChIgnAAIAAgTIgBAAQgHAMgKAFQgJAGgOAAQgUAAgLgLg");
	this.shape_6.setTransform(70.75,-104.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AAWBtIAAhDIgBAAQgHAJgHAFQgIAEgMAAQgZAAgMgUQgMgTAAgsQAAgtAMgUQAMgUAZAAQANAAAIAFQAIAFAHALIAAAAIAAgRIAoAAIAADVgAgQg/QgEAOgBAaQABAZAEAOQADANANAAQANAAAFgNQAEgOAAgZQAAgagEgOQgFgNgNAAQgNAAgDANg");
	this.shape_7.setTransform(56.55,-102.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgpBTIAAihIAnAAIAAAWIABAAQAFgMAJgHQAJgHANAAIAEAAIADABIAAAnIgGAAIgGAAIgLABQgGACgEADQgFAEgCAFQgCAGAAAIIAABgg");
	this.shape_8.setTransform(39.725,-105.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgeBQQgMgFgHgLQgIgKgCgQQgDgRgBgUQABgUADgQQADgQAHgLQAIgKAMgGQANgFAQAAQATgBAMAGQAMAFAHALQAIALACAPQADAQABAVQgBAUgDAQQgDAQgIALQgHAKgMAFQgNAGgRAAQgSAAgMgFgAgLgzQgEAEgDAIQgCAHgBALIAAAWIAAAWQABALACAHQADAIAEAEQAEAEAHAAQANAAAEgNQAFgNAAgeQAAgegFgNQgEgNgNAAQgHAAgEAEg");
	this.shape_9.setTransform(27.9,-105.0521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_10.setTransform(18.075,-107.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgeBQQgMgFgIgLQgGgKgEgQQgCgRAAgUQAAgUACgQQAEgQAHgLQAIgKAMgGQANgFAQAAQATgBAMAGQAMAFAHALQAIALACAPQAEAQAAAVQAAAUgEAQQgDAQgIALQgHAKgMAFQgMAGgSAAQgRAAgNgFgAgLgzQgEAEgCAIQgDAHgBALIAAAWIAAAWQABALADAHQACAIAEAEQAFAEAGAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgGAAgFAEg");
	this.shape_11.setTransform(8.3,-105.0521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgaBQQgMgDgHgKQgIgJgEgRQgEgRAAgYQAAgYAFgQQAFgQAIgKQAJgKAMgEQAMgDAOAAQAdAAAOAQQAPARAAAdIgoAAIAAgMIgEgKQgCgFgDgCQgDgEgGAAQgHABgFADQgFADgCAHQgCAHgCAKIAAAXIAAAaQACALACAHQADAHADADQAFADAGAAQAKAAAFgJQAFgJAAgUIAoAAQgBAggOARQgOARghAAQgOAAgMgFg");
	this.shape_12.setTransform(-4.8,-105.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgDBnQgHgCgEgFQgEgFgBgIQgCgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAEAAIAFgBIAAAdIgNABIgOAAQgMAAgHgBg");
	this.shape_13.setTransform(-21.3,-107.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgFgFQgDgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAGgMALgFQAJgGAOAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_14.setTransform(-32.3,-105.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AghBNQgNgHgGgNQgGgMgCgPIAAgeQAAgRABgOQADgPAGgMQAIgMAMgGQAMgIAUABQASAAAMAFQALAGAHAKQAHALACAPQACAQABASIAAAIIhSAAIAAANIACAOIADAMQACAGAFADQAEADAEAAQALAAAEgHQAFgIACgQIAlAAQgBAdgOAOQgOAQgdAAQgWAAgMgIgAgIg1QgFAEgCAEIgDAKIgCAMIAAAGIAqAAIgCgRQAAgHgCgFQgCgEgFgDQgDgCgHgBQgFAAgEADg");
	this.shape_15.setTransform(-45.7,-105.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgCBnQgIgCgEgFQgEgFgCgIQgBgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAFAAIAEgBIAAAdIgNABIgOAAQgMAAgGgBg");
	this.shape_16.setTransform(-56,-107.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgcBRQgMgDgHgHQgGgGgDgKQgDgKAAgLIAAgGIAlAAIAAAFQAAALAGAHQAFAGALAAQAJAAAFgFQAGgFAAgJQAAgIgFgEQgEgEgGgDIgcgKQgRgGgJgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAHgHAMgEQALgDAPAAQAcgBANAMQAOAMAAAWIAAAHIglAAQAAgNgEgFQgEgHgLAAQgGABgGAEQgGAEAAAJQAAAGAEAFQADAEALAEIAYAIQATAHAIAKQAJALAAARQAAANgFAKQgEAKgIAFQgIAHgLACQgLAEgNAAQgRAAgLgEg");
	this.shape_17.setTransform(-66.125,-105.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgUBsIAAigIApAAIAACggAgUhIIAAgjIApAAIAAAjg");
	this.shape_18.setTransform(-75.425,-107.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgcBRQgMgDgHgHQgGgGgDgKQgDgKAAgLIAAgGIAlAAIAAAFQAAALAGAHQAFAGALAAQAJAAAFgFQAGgFAAgJQAAgIgFgEQgEgEgGgDIgcgKQgRgGgJgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAHgHAMgEQALgDAPAAQAcgBANAMQAOAMAAAWIAAAHIglAAQAAgNgEgFQgEgHgLAAQgGABgGAEQgGAEAAAJQAAAGAEAFQADAEALAEIAYAIQATAHAIAKQAJALAAARQAAANgFAKQgEAKgIAFQgIAHgLACQgLAEgNAAQgRAAgLgEg");
	this.shape_19.setTransform(-84.625,-105.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgEgFQgFgFgJAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAGgMALgFQAKgGANAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_20.setTransform(-97.8,-105.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgeBQQgMgFgIgLQgHgKgCgQQgDgRAAgUQAAgUADgQQADgQAHgLQAIgKAMgGQANgFAQAAQASgBANAGQAMAFAHALQAIALACAPQAEAQAAAVQAAAUgEAQQgDAQgIALQgHAKgMAFQgMAGgSAAQgRAAgNgFgAgLgzQgFAEgBAIQgDAHgBALIAAAWIAAAWQABALADAHQABAIAFAEQAFAEAGAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgGAAgFAEg");
	this.shape_21.setTransform(-111.5,-105.0521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgjBnQgOgIgJgOQgHgPgDgUQgCgVAAgYQAAgYACgUQADgVAHgPQAJgOAOgJQAOgIAXAAQAYAAANAHQANAIAGALQAIAMABANIABAZIgqAAQAAgXgGgLQgGgKgOAAQgHAAgGAFQgFADgDAKQgDAKgBAQIgBAlQAAAZABAPQACAOAEAJQADAIAFADQAFADAHAAQAFAAAFgCQAFgCADgGQAEgFACgLQACgLABgRIArAAQAAARgDAPQgDAQgIAMQgGALgOAHQgNAHgWAAQgXAAgOgIg");
	this.shape_22.setTransform(-125.7,-107.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-135.8,-127.8,279.6,39.5), null);


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
	this.shape.setTransform(120.475,-97.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(110.625,-101.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_2.setTransform(100,-106.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(92.4,-106.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXBUIgrinIAsAAIAXB3IABAAIAWh3IArAAIgpCng");
	this.shape_4.setTransform(82.575,-103.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_5.setTransform(72.75,-106.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgCBqQgIgCgFgFQgEgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQADAFAJAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgHgCg");
	this.shape_6.setTransform(65.3,-106.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_7.setTransform(54.225,-103.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IArAAIAAByQABANAEAFQAEAFAKAAQAVAAABgbIAAhuIArAAIAACmIgqAAIAAgUIAAAAQgHANgLAFQgKAFgOAAQgUAAgLgLg");
	this.shape_8.setTransform(40.05,-103.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgUQAMgVAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhGIArAAIAADcIgpAAIAAgSIgBAAQgHAMgIAFQgIAEgNABQgbAAgMgVgAgSgOQgEAOAAAZQAAAcAEAOQAFAOANgBQAOABAEgOQAEgOAAgcQAAgZgEgOQgEgOgOAAQgNAAgFAOg");
	this.shape_9.setTransform(25.125,-106.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_10.setTransform(10.875,-103.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAJgHQAJgIANABIAEAAIAEAAIAAApIgHgBIgGAAIgMACQgFABgFAEQgFADgCAGQgCAGAAAJIAABjg");
	this.shape_11.setTransform(-0.3,-104.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhABwIAAjbIApAAIAAASIABAAQAHgMAIgFQAIgFANAAQAbAAAMAUQAMAVAAAuQAAAugMAUQgMAUgbAAQgMAAgHgEQgJgFgHgKIAAAAIAABFgAgRhBQgEAOAAAbQAAAbAEANQAEAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgEANg");
	this.shape_12.setTransform(-12.925,-101.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgvBmQgOgMAAgVIApAAQAAAIAGAFIAHADIAHABQANAAAFgIQAFgJAAgMIAAgWIgBAAQgGAKgKAFQgIAGgKAAQgaAAgMgTQgNgUAAgtIABgeQACgPAFgMQAGgMAKgIQALgHARAAQAJAAAJAEQAJAFAGANIABAAIAAgTIApAAIAACeQAAAhgQAPQgQARgkgBQgcAAgPgLgAgKhMQgEACgDAHQgCAIgBALIgBAcIABAQQABAIACAGQADAGAEADQAEAEAGAAQAHAAAEgEQAFgDACgGQADgGABgIIABgUQAAgfgFgMQgFgMgMAAQgGAAgFADg");
	this.shape_13.setTransform(-34.725,-101.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAVBWIAAhzQAAgNgFgFQgEgEgKAAQgWAAAAAbIAABuIgrAAIAAinIAqAAIAAAUIABAAQAGgMALgGQAKgFAOAAQAUgBALALQALAMAAAZIAAB7g");
	this.shape_14.setTransform(-49.25,-104.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgVBwIAAimIArAAIAACmgAgVhKIAAglIArAAIAAAlg");
	this.shape_15.setTransform(-59.95,-106.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("Ag5BUIAAgiIBBhiIg/AAIAAgjIByAAIAAAhIhCBjIBCAAIAAAjg");
	this.shape_16.setTransform(-69.5,-103.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_17.setTransform(-82.925,-103.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJABQgKgBgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_18.setTransform(-101.225,-104.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAoBvIgLgvIg5AAIgLAvIguAAIA6jdIA3AAIA6DdgAAWAbIgWhiIAAAAIgVBiIArAAg");
	this.shape_19.setTransform(-120.775,-106.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-142.8,-127.3,279.6,40.7), null);


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
	this.shape.graphics.f("#353535").s().p("ATbBWQgKgHgFgKQgFgKgCgMIgBgaQAAgOACgLQACgMAGgKQAFgKALgFQAKgHASAAQAPAAAJAGQAKAEAFAJQAGAJACANQACAMAAAPIAAAIIhEAAIABAWIADAKIAFAHQADACAFAAQAJAAAEgFQADgHACgNIAfAAQgBAYgMAMQgLANgZAAQgSgBgLgGgATwgWIgFAHIgDAIIgBAJIAAAFIAjAAIgBgMQgBgHgCgDQgBgFgEgCQgDgCgGAAQgFAAgDACgAH7BaQgJgDgGgGQgFgGgDgHQgCgIAAgKIAAgEIAfAAIAAAEQAAAIAFAGQAEAGAJgBQAIAAAFgDQAFgEAAgIQAAgHgEgEIgJgFIgYgIQgPgFgHgKQgHgJAAgNQAAgIADgIQACgHAHgFQAGgGAJgDQAJgEAOAAQAXABALAJQAMALAAASIAAAFIgfAAQAAgKgEgFQgDgFgJAAQgGAAgFADQgFAEAAAHQAAAGADADQADAEAJACIAVAHQAQAGAHAJQAGAIAAAQQAAALgDAHQgEAIgHAGQgGAFgJACQgJACgLABQgPAAgKgDgAGQBWQgKgHgFgKQgFgKgCgMIgBgaQAAgOACgLQACgMAGgKQAFgKALgFQAKgHASAAQAPAAAJAGQAKAEAFAJQAGAJACANQACAMAAAPIAAAIIhEAAIABAWIADAKIAFAHQADACAFAAQAJAAAEgFQADgHACgNIAfAAQgBAYgMAMQgLANgZAAQgSgBgLgGgAGlgWIgFAHIgDAIIgBAJIAAAFIAjAAIgBgMQgBgHgCgDQgBgFgEgCQgDgCgGAAQgFAAgDACgABzBYQgLgEgGgKQgGgKgDgRQgDgQAAgYIABgjQACgRAFgNQAGgNALgHQALgJAUABQAQAAALAEQAKAFAHAKQAGAKADAQQACARAAAXIgBAjQgBARgGANQgFANgLAHQgMAJgTAAQgQgBgLgEgACEg8QgEADgCAHQgCAHgBALIAABKQABALACAGQADAGADACQAEACAGAAQAGAAADgDQAEgCACgHQADgHAAgLIAAhKQAAgLgDgGQgCgHgEgBQgDgDgGAAQgGAAgEADgAhoBYQgLgEgGgKQgGgKgDgRQgDgQAAgYIABgjQACgRAFgNQAGgNALgHQALgJAUABQAQAAALAEQAKAFAHAKQAGAKADAQQACARAAAXIgBAjQgBARgGANQgFANgLAHQgMAJgTAAQgQgBgLgEgAhXg8QgEADgCAHQgCAHgBALIAABKQABALACAGQADAGADACQAEACAGAAQAGAAADgDQAEgCACgHQADgHAAgLIAAhKQAAgLgDgGQgCgHgEgBQgDgDgGAAQgGAAgEADgAjaBYQgKgEgFgIQgGgIgCgIQgCgJAAgIIAAgEIAjAAIAAAJQABAFACAFQABAEAEADQAEADAFAAQALAAAFgJQAFgIAAgSIgBgSQgBgHgCgEQgCgEgEgCQgFgBgFAAQgIAAgEAEQgEAEgBAHIghAAIAHhfIBcAAIAAAcIhBAAIgEApIAAAAQAFgIAJgDQAHgDAMAAQANAAAIAFQAIAFAFAIQAFAHACAKQACAKAAALQAAAOgCAMQgDANgGAIQgHAJgLAEQgLAEgQABQgRgBgLgEgAqjBYQgKgDgGgKQgGgJgDgNQgCgOAAgRQAAgRADgMQACgNAHgKQAGgIAKgFQAKgEAPgBQAPAAAKAFQALAEAGAJQAGAJACANQADAMAAASQAAARgDAOQgDANgGAJQgGAJgKAEQgLAEgOABQgQAAgKgFgAqTgVQgEAEgCAGQgCAHAAAHIAAAmQAAAJACAHQACAFAEAEQADAEAHgBQAKAAAEgLQAEgLAAgZQAAgYgEgLQgEgLgKAAQgHAAgDADgAtDBYQgKgDgGgKQgGgJgDgNQgCgOAAgRQAAgRADgMQACgNAHgKQAGgIAKgFQAKgEAPgBQAPAAAKAFQALAEAGAJQAGAJACANQADAMAAASQAAARgDAOQgDANgGAJQgGAJgKAEQgLAEgOABQgQAAgKgFgAszgVQgEAEgCAGQgCAHAAAHIAAAmQAAAJACAHQACAFAEAEQADAEAHgBQAKAAAEgLQAEgLAAgZQAAgYgEgLQgEgLgKAAQgHAAgDADgAu8BVQgMgGgGgMQgHgMgCgRQgBgRAAgUQAAgUABgRQACgRAHgNQAGgLAMgIQAMgGAUgBQATABAMAFQALAHAFAKQAGAJABALIACAVIglAAQAAgTgEgJQgFgJgMAAQgHAAgEAEQgEADgDAIQgCAJgBAMIgBAgIABAhQABAMADAHQADAHAEACQAFACAFAAQAFAAAEgBQAFgCACgFQAEgFABgIQACgJAAgPIAkAAQAAAPgCAMQgDAOgGAKQgGAJgLAFQgLAHgSAAQgUAAgMgIgAwtBWQgLgHgFgKQgFgKgBgMIgBgaQAAgOACgLQACgMAFgKQAGgKAKgFQALgHARAAQAPAAAKAGQAJAEAGAJQAFAJADANQACAMAAAPIAAAIIhFAAIABAWIADAKIAFAHQADACAFAAQAJAAAEgFQAEgHACgNIAfAAQgCAYgLAMQgLANgZAAQgTgBgKgGgAwZgWIgFAHIgDAIIgBAJIAAAFIAkAAIgCgMQAAgHgCgDQgCgFgDgCQgEgCgFAAQgFAAgEACgAzyBUQgJgJAAgUIAAhjIAiAAIAABcQAAAKAEAFQADADAIAAQASABAAgXIAAhYIAjAAIAACGIghAAIAAgQIgBAAQgFAKgJAEQgJAEgLABQgQAAgJgJgA1sBPQgNgOAAgYIAAgIIAkAAIABARQABAFADAEQADAEAEACQAFABAHAAQAIAAAHgFQAHgFAAgLQAAgHgCgEQgCgEgEgDQgDgEgGgDIgPgGQgNgEgIgFQgJgEgGgGQgGgGgDgJQgCgIAAgLQAAgaAOgNQAPgOAaAAQAMAAAKADQAKACAIAHQAHAGAEAIQAEAKAAANIAAAEIgiAAQAAgMgFgHQgEgHgLAAQgGAAgEABQgEADgCACIgDAHIgBAIQAAAIADAFQAEAGALAFIAcAMQAKAEAHAFQAGAFAEAFQAEAGACAGQABAHAAAIQAAAcgQANQgRANgdABQgfAAgNgOgASgBZQgGgCgDgDQgEgFgBgGQgBgHAAgKIAAhNIgSAAIAAgXIASAAIAAgnIAiAAIAAAnIAUAAIAAAXIgUAAIAABIQAAAIADAEQACADAIAAIADAAIAEAAIAAAYIgWAAIgRgBgAUzBaIAAiGIAhAAIAAASIAAAAQAGgKAHgFQAIgHAKAAIADAAIAEABIAAAhIgLAAIgJAAQgFACgEADQgDACgDAFQgCAEAAAHIAABRgARaBaIAAhdQAAgKgEgEQgDgEgIAAQgSAAAAAWIAABZIgjAAIAAiGIAhAAIAAAPIABAAQAFgJAJgFQAJgEALgBQAQABAJAIQAJAJAAAVIAABjgAPlBaIAAiGIAjAAIAACGgAObBaIAAiGIAhAAIAAASIABAAQAFgKAHgFQAIgHALAAIADAAIADABIAAAhIgLAAIgJAAQgEACgEADQgEACgCAFQgCAEAAAHIAABRgAMlBaIAAiyIA/AAQANAAAKAEQAJAGAGAHQAGAHACAKQADAKAAAKQAAAOgEAJQgFALgHAFQgHAHgLADQgKADgNAAIgTAAIAABIgANJgHIAQAAQAKgBAHgGQAHgGAAgOQAAgNgGgIQgGgGgNAAIgPAAgALCBaIAAhdQAAgKgDgEQgEgEgIAAQgSAAAAAWIAABZIgiAAIAAiGIAhAAIAAAPIAAAAQAGgJAIgFQAJgEALgBQARABAJAIQAJAJAAAVIAABjgAJOBaIAAiGIAiAAIAACGgAFQBaQgCgFgBgEIgCgsQgBgLgFgGQgEgGgMAAIgTAAIAABMIgkAAIAAiyIBDAAQAWAAANALQAMAMAAAXQAAASgHALQgHAMgPACIAAABQANABAGAIQAHAGABAPIADAuQABAHAFADIAAACgAEigKIAPAAQANAAAHgGQAHgHAAgOQAAgYgZAAIgRAAgAgCBaQABgRAEgRQAEgSAGgSQAHgTAJgQQAKgTANgSIhKAAIAAgfIBsAAIAAAbQgLAQgIARQgJASgHASQgGATgEATQgFAUgCATgAkaBaQgCgFgBgEIgCgsQgBgLgFgGQgEgGgMAAIgTAAIAABMIgkAAIAAiyIBDAAQAWAAANALQAMAMAAAXQAAASgHALQgHAMgPACIAAABQANABAGAIQAHAGABAPIADAuQABAHAFADIAAACgAlIgKIAPAAQANAAAHgGQAHgHAAgOQAAgYgZAAIgRAAgApMBaIAAiGIAhAAIAAASIABAAQAFgKAHgFQAIgHALAAIADAAIADABIAAAhIgLAAIgJAAQgEACgEADQgEACgCAFQgCAEAAAHIAABRgArrBaIAAiyIAjAAIAACygAyIBaIAAiGIAhAAIAAASIAAAAQAGgKAHgFQAIgHAKAAIADAAIAEABIAAAhIgLAAIgJAAQgFACgEADQgDACgDAFQgCAEAAAHIAABRgAnjAHQgIgEgHgGQgGgGgEgIQgEgKAAgKQAAgJAEgJQAEgJAGgGQAHgHAIgEQAJgDAKgBQAKABAJADQAJAEAGAHQAHAGAEAJQADAJAAAJQAAAKgDAKQgEAIgHAGQgGAGgJAEQgJADgKABQgKgBgJgDgAndhEQgGADgFAFQgEAEgDAGQgCAGAAAHQAAAIACAGQADAGAEAFQAFAFAGACQAGADAHAAQAIAAAGgDQAGgCAEgFQAFgFACgGQADgGAAgIQAAgHgDgGQgCgGgFgEQgEgFgGgDQgGgDgIAAQgHAAgGADgAnHgLIgMgVIgEAAIAAAVIgMAAIAAgzIAVAAQAKgBAFAFQAFAEAAAHQAAAIgEADQgEADgFABIANAVgAnXgpIAJAAIAGAAQACgCAAgEIgBgDIgCgCIgHgBIgHAAgAPlg8IAAgeIAjAAIAAAegAJOg8IAAgeIAiAAIAAAeg");
	this.shape.setTransform(-13.325,-64.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-153.5,-73.9,280.4,18.500000000000007), null);


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

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,300,250), null);


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
	this.instance.setTransform(-71,-29,0.5829,0.5829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-71,-29,76.4,28), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(84).to({_off:true},49).wait(198));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({y:13.05},43,cjs.Ease.quadInOut).wait(50).to({_off:true},1).wait(150));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-57.3,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({y:10.3},43,cjs.Ease.quadInOut).wait(2).to({regX:0,regY:0,x:-14.3003,y:44.8485},0).wait(1).to({x:-14.3008,y:45.1041},0).wait(1).to({x:-14.3016,y:45.4727},0).wait(1).to({x:-14.3026,y:45.9606},0).wait(1).to({x:-14.3039,y:46.5743},0).wait(1).to({x:-14.3054,y:47.3201},0).wait(1).to({x:-14.3072,y:48.2046},0).wait(1).to({x:-14.3093,y:49.234},0).wait(1).to({x:-14.3118,y:50.4141},0).wait(1).to({x:-14.3145,y:51.7499},0).wait(1).to({x:-14.3176,y:53.2452},0).wait(1).to({x:-14.321,y:54.9021},0).wait(1).to({x:-14.3248,y:56.7207},0).wait(1).to({x:-14.3288,y:58.6977},0).wait(1).to({x:-14.3332,y:60.8269},0).wait(1).to({x:-14.3379,y:63.0975},0).wait(1).to({x:-14.3428,y:65.4944},0).wait(1).to({regX:-180,regY:-71.5,scaleX:0.4799,scaleY:0.4799,x:-100.7,y:33.65},0).wait(1).to({regX:0,regY:0,x:-14.3,y:70.7458,alpha:0.9098},0).wait(1).to({y:73.601,alpha:0.8177},0).wait(1).to({y:76.4834,alpha:0.7247},0).wait(1).to({y:79.3594,alpha:0.632},0).wait(1).to({y:82.1964,alpha:0.5404},0).wait(1).to({y:84.9643,alpha:0.4512},0).wait(1).to({y:87.6365,alpha:0.365},0).wait(1).to({y:90.1907,alpha:0.2826},0).wait(1).to({y:92.6096,alpha:0.2045},0).wait(1).to({y:94.8807,alpha:0.1313},0).wait(1).to({y:96.9957,alpha:0.063},0).wait(1).to({regX:-180,regY:-71.5,x:-100.7,y:64.65,alpha:0},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:-14.2929,y:100.7329},0).wait(1).to({x:-14.2864,y:102.3556},0).wait(1).to({x:-14.2806,y:103.8209},0).wait(1).to({x:-14.2754,y:105.1332},0).wait(1).to({x:-14.2707,y:106.2975},0).wait(1).to({x:-14.2667,y:107.3196},0).wait(1).to({x:-14.2631,y:108.2056},0).wait(1).to({x:-14.2601,y:108.9615},0).wait(1).to({x:-14.2576,y:109.5936},0).wait(1).to({x:-14.2556,y:110.108},0).wait(1).to({x:-14.254,y:110.5105},0).wait(1).to({x:-14.2528,y:110.8067},0).wait(1).to({regX:-179.9,regY:-71.7,x:-100.65,y:76.65},0).wait(50).to({_off:true},1).wait(150));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(2).to({x:-14.2503,y:46.452},0).wait(1).to({x:-14.2508,y:46.7136},0).wait(1).to({x:-14.2516,y:47.0909},0).wait(1).to({x:-14.2526,y:47.5904},0).wait(1).to({x:-14.2539,y:48.2185},0).wait(1).to({x:-14.2554,y:48.982},0).wait(1).to({x:-14.2572,y:49.8874},0).wait(1).to({x:-14.2593,y:50.9411},0).wait(1).to({x:-14.2618,y:52.149},0).wait(1).to({x:-14.2645,y:53.5163},0).wait(1).to({x:-14.2676,y:55.0469},0).wait(1).to({x:-14.271,y:56.743},0).wait(1).to({x:-14.2748,y:58.6044},0).wait(1).to({x:-14.2789,y:60.6282},0).wait(1).to({x:-14.2832,y:62.8076},0).wait(1).to({x:-14.2879,y:65.1318},0).wait(1).to({x:-14.2929,y:67.5853},0).wait(1).to({regX:-0.1,regY:0.1,x:-14.3,y:70.15},0).wait(1).to({regX:0,regY:0,x:-14.2452,y:72.9588,alpha:0.9037},0).wait(1).to({x:-14.2403,y:75.8783,alpha:0.8054},0).wait(1).to({x:-14.2353,y:78.8256,alpha:0.7062},0).wait(1).to({x:-14.2304,y:81.7664,alpha:0.6072},0).wait(1).to({x:-14.2255,y:84.6674,alpha:0.5095},0).wait(1).to({x:-14.2207,y:87.4976,alpha:0.4142},0).wait(1).to({x:-14.2161,y:90.2299,alpha:0.3222},0).wait(1).to({x:-14.2117,y:92.8417,alpha:0.2343},0).wait(1).to({x:-14.2076,y:95.3151,alpha:0.151},0).wait(1).to({x:-14.2036,y:97.6374,alpha:0.0728},0).wait(1).to({regX:-0.1,regY:0.1,x:-14.25,y:99.85,alpha:0},0).wait(1).to({regX:0,regY:0,x:-14.2003,y:101.7935},0).wait(1).to({x:-14.2005,y:103.6218},0).wait(1).to({x:-14.2008,y:105.2857},0).wait(1).to({x:-14.201,y:106.7883},0).wait(1).to({x:-14.2011,y:108.134},0).wait(1).to({x:-14.2013,y:109.3279},0).wait(1).to({x:-14.2015,y:110.376},0).wait(1).to({x:-14.2016,y:111.2844},0).wait(1).to({x:-14.2017,y:112.0596},0).wait(1).to({x:-14.2018,y:112.7078},0).wait(1).to({x:-14.2019,y:113.2352},0).wait(1).to({y:113.6479},0).wait(1).to({y:113.9517},0).wait(1).to({x:-14.25,y:114.2},0).wait(94).to({_off:true},1).wait(150));

	// printer
	this.instance_4 = new lib.Printer();
	this.instance_4.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(181).to({_off:true},1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


// stage content:
(lib.Epson_RDrive_300x250_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(165).to({alpha:0},11).wait(134).to({alpha:1},9).wait(32));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(162.05,139.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("Am2CWQgjAAAAgjIAAAAIAAjlQAAgjAjAAIAAAAINtAAQAjAAAAAjIAAAAIAADlQAAAjgjAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:124.8147,y:119.3643}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEpIJGr3IDXClIpFL4g");
	this.shape_1.setTransform(65.95,96.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEpIJFr3IDYClIpFL4g");
	this.shape_2.setTransform(67.55,97.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEqIJFr4IDYClIpGL4g");
	this.shape_3.setTransform(72.3,99.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEqIJGr4IDXCmIpFL3g");
	this.shape_4.setTransform(80.25,102.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEqIJFr4IDYCmIpFL3g");
	this.shape_5.setTransform(91.4,107.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEpIJGr3IDXClIpGL4g");
	this.shape_6.setTransform(123.2,121.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEpIJFr3IDYClIpGL4g");
	this.shape_7.setTransform(140.7,129.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEqIJFr4IDYCmIpGL3g");
	this.shape_8.setTransform(155,135.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-10.8,-8.3,10.8,8.2).s().p("AmOEpIJFr3IDYCmIpGL3g");
	this.shape_9.setTransform(180.45,146.65);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},347).to({state:[{t:this.shape_2,p:{x:67.55,y:97.35}}]},1).to({state:[{t:this.shape_3,p:{x:72.3,y:99.45}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:91.4,y:107.75}}]},1).to({state:[{t:this.shape_2,p:{x:105.7,y:114}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{x:140.7,y:129.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_3,p:{x:166.15,y:140.4}}]},1).to({state:[{t:this.shape_5,p:{x:174.1,y:143.85}}]},1).to({state:[{t:this.shape_7,p:{x:178.85,y:145.95}}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(124.85,119.4,0.5836,0.5836,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

	// printer_rolls
	this.instance_3 = new lib.printer_rolls();
	this.instance_3.setTransform(341,183);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({x:256},11,cjs.Ease.quadOut).wait(21));

	// printer_mc
	this.instance_4 = new lib.printer_mc("single",57);
	this.instance_4.setTransform(-115.95,187.1,0.7012,0.7012);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(328).to({_off:false},0).to({x:119.05},11,cjs.Ease.quadOut).wait(21));

	// BG
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.11)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.224)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.333)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.443)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.557)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.776)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.89)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},319).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(32));

	// txt_onARoll
	this.instance_5 = new lib.txt_inchRoll();
	this.instance_5.setTransform(146.05,509.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(273).to({_off:false},0).to({alpha:1},9).wait(37).to({alpha:0},9).wait(32));

	// txt_DefinitelyOnARoll
	this.instance_6 = new lib.txt_onARoll();
	this.instance_6.setTransform(144.05,528.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).to({alpha:1},10).wait(75).to({alpha:0},9).wait(87));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("AtIOiIAA9DIaQAAIAAdDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:149.05,y:100.25}).wait(171));

	// image_strip_01
	this.instance_7 = new lib.image_strip_01();
	this.instance_7.setTransform(147.6,-93.4,0.6588,0.6588,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({y:104.6},25,cjs.Ease.quadOut).wait(146));

	// image_strip_02
	this.instance_8 = new lib.image_strip_02();
	this.instance_8.setTransform(149.6,-95.4,0.6588,0.6588,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(214).to({_off:false},0).to({y:104.6},25,cjs.Ease.quadOut).wait(121));

	// image_strip_03
	this.instance_9 = new lib.image_strip_03();
	this.instance_9.setTransform(150,-95.4,0.6588,0.6588,0,0,0,0.2,0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(239).to({_off:false},0).to({y:104.6},25,cjs.Ease.quadOut).wait(96));

	// hallway_mc
	this.instance_10 = new lib.hallway_mc();
	this.instance_10.setTransform(150.1,327.1,1.1468,1.1468,0,0,0,0.1,0.1);
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
	this.instance_14.setTransform(151.35,162.05,0.6957,0.6957,0,0,0,0.4,0.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.2,regY:0,scaleX:0.9259,scaleY:0.9259,x:151.2,y:167,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).to({_off:true},182).wait(169));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,108,480.20000000000005,161.7);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 300,
	height: 250,
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