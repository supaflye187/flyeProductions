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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},42).wait(7).to({_off:false},0).to({_off:true},43).wait(8).to({_off:false},0).to({_off:true},43).wait(188));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({y:13.05},43,cjs.Ease.quadInOut).wait(37).to({_off:true},1).wait(150));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},110).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},37).to({state:[]},1).wait(150));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-59.1,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:12.1},43,cjs.Ease.quadInOut).wait(15).to({alpha:0},10).wait(63).to({_off:true},1).wait(150));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},59).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},88).to({state:[]},1).wait(150));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(13).to({alpha:0},10).wait(115).to({_off:true},1).wait(150));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(268).to({_off:false},0).to({alpha:1},9).wait(42).to({alpha:0},9).wait(32));

	// txt_DefinitelyOnARoll
	this.instance_6 = new lib.txt_onARoll();
	this.instance_6.setTransform(144.05,528.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).to({alpha:1},10).wait(70).to({alpha:0},9).wait(92));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({y:104.6},23,cjs.Ease.quadOut).wait(148));

	// image_strip_02
	this.instance_8 = new lib.image_strip_02();
	this.instance_8.setTransform(149.6,-95.4,0.6588,0.6588,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(212).to({_off:false},0).to({y:104.6},23,cjs.Ease.quadOut).wait(125));

	// image_strip_03
	this.instance_9 = new lib.image_strip_03();
	this.instance_9.setTransform(150,-95.4,0.6588,0.6588,0,0,0,0.2,0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(235).to({_off:false},0).to({y:104.6},24,cjs.Ease.quadOut).wait(101));

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