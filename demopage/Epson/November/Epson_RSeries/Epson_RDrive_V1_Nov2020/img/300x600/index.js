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
p.nominalBounds = new cjs.Rectangle(0,0,163,22);// helper functions:

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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(5.225,-46.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-137.4,-60.9,285.3,27.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ALiCFQAKgRAGgQQAGgPAEgQQAFgPABgRQACgRAAgSQAAgSgCgRQgBgQgFgQQgEgQgGgQQgGgQgKgQIAgAAQAWAiAJAhQAKAhAAAfQAAAfgKAhQgJAggWAjgAsACFQgXgjgJggQgKghAAgfQAAgfAKghQAJggAXgjIAfAAQgJAQgHAQQgGAQgFAQQgDAQgCAQQgCARAAASQAAASACARQACARADAPIALAfQAHAQAJARgAHcBOQgMgFgIgKQgHgKgDgQQgDgQAAgUQAAgUAEgQQADgPAHgKQAIgLAMgFQALgFASAAQASgBAMAFQAMAFAHALQAHALADAPQADAQAAAUQAAAUgDAQQgDAPgIAKQgHALgMAFQgMAFgRAAIgEAAQgQAAgKgFgAHugyQgEAEgDAIQgCAHAAAKIAAAsQAAAKACAHQADAIAEAEQAEAEAIAAQAMAAAFgNQAFgNAAgdQAAgdgFgNQgFgNgMAAQgIAAgEAEgABLBPQgLgEgIgJQgIgJgDgRQgEgQAAgXQAAgYAFgQQAEgQAJgKQAJgJALgEQAMgDAOAAQAcAAAOAQQAPAQAAAcIgnAAIgBgLIgCgKQgCgFgEgDQgDgCgGAAQgIAAgEADQgFADgCAHQgDAHgBAKIAAAwQABALADAGQACAHAEADQAEADAHAAQAKAAAFgJQAFgJAAgTIAnAAQAAAfgOARQgOAQggAAQgQAAgLgEgAn6BLQgNgHgHgOQgHgNgBgSQgCgSAAgRIABgrQABgVAHgQQAGgQAPgKQAOgKAaAAQALAAAKADQALADAIAGQAIAGAFAKQAEAKAAAQIgoAAQAAgNgEgGQgFgHgKAAQgJAAgEAEQgGAEgCAHQgDAHgBAKIgBAfIABAAQAFgIAKgFQAKgFAOAAQANAAAKAFQAKAFAGAJQAGAIADAMQACAMAAANQAAAkgPATQgRATgjAAQgWAAgNgIgAnngPQgFAKAAAUIABAQQABAIACAGQADAFAEADQAFADAHAAQAIAAAEgDQAFgDACgGQADgFAAgIIABgQQAAgUgFgKQgGgIgMAAQgMAAgGAIgAK4BQIAAguIAnAAIAAAugAJ9BQIAAjRIApAAIAADRgAJDBQIAAjRIApAAIAADRgAFrBQIAAieIAnAAIAAAWIABAAQAGgMAJgHQAIgGANAAIAHAAIAAAnIgMgBIgLABQgFACgEADQgFAEgCAFQgDAGAAAHIAABfgAD6BQIAAhtQAAgMgFgFQgDgEgJAAQgWAAAAAaIAABoIgoAAIAAjRIAoAAIAABDIABAAQALgTAbAAQAUAAAKAKQAKALAAAXIAAB1gAgIBQIAAhtQAAgMgEgFQgEgEgJAAQgVAAAAAaIAABoIgpAAIAAieIAnAAIAAATQAHgMAKgFQAKgFAOAAQASAAALAKQAKALAAAXIAAB1gAiQBQIAAieIApAAIAACegAk/BQIAAgrIhLAAIAAgjIBFiCIAsAAIAACEIAUAAIAAAhIgUAAIAAArgAlpAEIAqAAIAAhOIgBAAgAp3BQIgJgtIg4AAIgKAtIgsAAIA4jRIA0AAIA4DRgAqxABIApAAIgUhegAjyAMIAAgiIBTAAIAAAigAiQhhIAAgjIApAAIAAAjg");
	this.shape.setTransform(0.925,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-80.1,-6.4,162.1,26.5), null);


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
	this.shape.setTransform(129.075,9.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(119.475,5.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBqQgHgCgFgFQgEgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_2.setTransform(109.1,0.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_3.setTransform(101.75,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgUBvIAAjdIApAAIAADdg");
	this.shape_4.setTransform(95.35,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(85.075,3.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IArAAIAAByQABANAEAFQAEAFAKAAQAVAAABgbIAAhuIAqAAIAACmIgoAAIAAgUIgBAAQgHANgLAFQgKAFgOAAQgUAAgLgLg");
	this.shape_6.setTransform(71,3.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AAWBwIAAhFIAAAAQgHAKgJAFQgHAEgMAAQgbAAgMgUQgMgUAAguQAAguAMgVQAMgUAbAAQANAAAIAFQAIAFAHAMIABAAIAAgSIApAAIAADbgAgShBQgEAOAAAbQAAAbAEANQAFAOANAAQAOAAAEgOQAEgNAAgbQAAgbgEgOQgEgNgOAAQgNAAgFANg");
	this.shape_7.setTransform(56.325,5.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAJgHQAJgIANABIAEAAIAEAAIAAApIgHgBIgGAAIgMACQgFABgFAEQgFADgCAGQgCAGAAAJIAABjg");
	this.shape_8.setTransform(38.85,2.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_9.setTransform(26.625,3.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIAqAAIAADdg");
	this.shape_10.setTransform(16.5,0.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_11.setTransform(6.375,3.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_12.setTransform(-7.225,3.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_13.setTransform(-24.3,0.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBWIAAhzQAAgNgEgFQgEgEgKgBQgVAAAAAcIAABuIgrAAIAAinIAoAAIAAAUIABAAQAHgMALgGQAKgGANABQAVgBALALQAMAMAAAZIAAB7g");
	this.shape_14.setTransform(-35.7,2.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_15.setTransform(-49.625,3.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_16.setTransform(-60.3,0.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgdBUQgMgEgHgHQgHgGgDgKQgDgKAAgMIAAgGIAnAAIAAAGQAAALAGAGQAFAHALAAQAJAAAGgFQAGgFAAgKQAAgIgFgEQgEgEgHgDIgdgLQgRgGgJgKQgJgLAAgSQAAgKADgKQADgJAIgGQAHgHAMgEQAMgEAPAAQAdAAAOAMQAOAMAAAXIAAAHIgmAAQAAgNgFgGQgEgGgKAAQgHAAgGAEQgGAFAAAJQAAAGADAFQAEAFALADIAZAJQAUAHAIAKQAJALAAATQAAANgFAKQgFAKgIAGQgIAHgLACQgMADgNAAQgRAAgMgDg");
	this.shape_17.setTransform(-70.825,3.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_18.setTransform(-80.4,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgdBUQgMgEgHgHQgHgGgDgKQgDgKAAgMIAAgGIAnAAIAAAGQAAALAGAGQAFAHALAAQAJAAAGgFQAGgFAAgKQAAgIgFgEQgEgEgHgDIgdgLQgRgGgJgKQgJgLAAgSQAAgKADgKQADgJAIgGQAHgHAMgEQAMgEAPAAQAdAAAOAMQAOAMAAAXIAAAHIgmAAQAAgNgFgGQgEgGgKAAQgHAAgGAEQgGAFAAAJQAAAGADAFQAEAFALADIAZAJQAUAHAIAKQAJALAAATQAAANgFAKQgFAKgIAGQgIAHgLACQgMADgNAAQgRAAgMgDg");
	this.shape_19.setTransform(-89.975,3.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAVBWIAAhzQAAgNgFgFQgEgEgKgBQgWAAAAAcIAABuIgrAAIAAinIAqAAIAAAUIAAAAQAHgMALgGQAKgGAOABQAUgBALALQAMAMgBAZIAAB7g");
	this.shape_20.setTransform(-103.6,2.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_21.setTransform(-117.775,3.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AglBrQgOgJgIgPQgIgPgDgVQgCgVAAgaQAAgYACgVQADgVAIgPQAIgQAOgIQAPgJAYAAQAYAAAOAIQAOAIAHALQAGAMACAOIACAaIgtAAQAAgYgFgLQgGgLgPAAQgIAAgFAEQgGAFgDAKQgDALgBAQIgBAmQAAAZABAQQACAPAEAJQADAJAGADQAFACAGAAQAGAAAFgBQAFgDAEgFQAEgGACgMQACgLAAgRIAtAAQAAARgDARQgDAQgHAMQgIALgOAIQgOAGgWABQgYgBgPgHg");
	this.shape_22.setTransform(-132.425,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-142.8,-20.3,279.6,40.7), null);


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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-5.35,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-128.8,-10.9,246.9,28), null);


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
(lib.Epson_RDrive_300x600_V1 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(165).to({alpha:0},11).wait(134).to({alpha:1},9).wait(32));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(162.05,139.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// printer_mc
	this.instance_2 = new lib.printer_mc("single",57);
	this.instance_2.setTransform(150,325.1,0.7012,0.7012);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.9385,scaleY:0.9385,x:150.1,y:325.2,alpha:1},11,cjs.Ease.quadOut).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("ArwECQg8AAAAg8IAAAAIAAmLQAAg8A8AAIAAAAIXhAAQA8AAAAA8IAAAAIAAGLQAAA8g8AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:147.825,y:485.8749}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-31.7,-24.3,31.8,24.3).s().p("AyWNsMAaygi+IJ7HnMgayAi+g");
	this.shape_1.setTransform(11.875,465.175);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(347).to({_off:false},0).wait(1).to({x:15.525,y:465.875},0).wait(1).to({x:26.475,y:468.075},0).wait(1).to({x:44.775,y:471.675},0).wait(1).to({x:70.325,y:476.725},0).wait(1).to({x:103.225,y:483.225},0).wait(1).to({x:143.425,y:491.175},0).wait(1).to({x:183.575,y:499.125},0).wait(1).to({x:216.475,y:505.625},0).wait(1).to({x:242.025,y:510.675},0).wait(1).to({x:260.325,y:514.275},0).wait(1).to({x:271.275,y:516.475},0).wait(1).to({x:274.925,y:517.175},0).wait(1));

	// ctaBtn
	this.instance_3 = new lib.ctaBtn();
	this.instance_3.setTransform(147.8,485.85);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},319).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(32));

	// txt_onARoll
	this.instance_4 = new lib.txt_inchRoll();
	this.instance_4.setTransform(146.05,509.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(273).to({_off:false},0).to({alpha:1},9).wait(37).to({alpha:0},9).wait(32));

	// txt_onARoll
	this.instance_5 = new lib.txt_onARoll();
	this.instance_5.setTransform(144.05,528.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(179).to({_off:false},0).to({alpha:1},10).wait(130).to({alpha:0},9).wait(32));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("A8cXSMAAAgujMA45AAAMAAAAujg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:157.05,y:244.25}).wait(171));

	// image_strip_01
	this.instance_6 = new lib.image_strip_01();
	this.instance_6.setTransform(145.5,-50.45);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(189).to({_off:false},0).to({y:243.55},25,cjs.Ease.quadOut).wait(146));

	// image_strip_02
	this.instance_7 = new lib.image_strip_02();
	this.instance_7.setTransform(148.5,-50.45);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).to({y:243.55},25,cjs.Ease.quadOut).wait(121));

	// image_strip_03
	this.instance_8 = new lib.image_strip_03();
	this.instance_8.setTransform(149,-50.45);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({y:243.55},25,cjs.Ease.quadOut).wait(96));

	// hallway_mc
	this.instance_9 = new lib.hallway_mc();
	this.instance_9.setTransform(150.1,300.1,1.1468,1.1468,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(179).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:300,alpha:1},10,cjs.Ease.quadOut).to({_off:true},140).wait(31));

	// txt_AmazingProductivity
	this.instance_10 = new lib.txt_AmazingProductivity();
	this.instance_10.setTransform(153.3,188.55);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(45).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_Immediatelamination
	this.instance_11 = new lib.txt_Immediatelamination();
	this.instance_11.setTransform(153.3,190.55);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(61).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(39).to({alpha:0},10).to({_off:true},1).wait(240));

	// txt_consistentQuality
	this.instance_12 = new lib.txt_consistentQuality();
	this.instance_12.setTransform(153.3,186.55);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(41).to({alpha:0},10).to({_off:true},1).wait(299));

	// wht_fade
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_12.setTransform(151.05,341.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.09)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_13.setTransform(151.05,341.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.18)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_14.setTransform(151.05,341.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.275)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_15.setTransform(151.05,341.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.365)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_16.setTransform(151.05,341.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.455)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_17.setTransform(151.05,341.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.545)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_18.setTransform(151.05,341.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.635)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_19.setTransform(151.05,341.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.725)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_20.setTransform(151.05,341.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.82)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_21.setTransform(151.05,341.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.91)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_22.setTransform(151.05,341.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_23.setTransform(151.05,341.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},179).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(169));

	// printer_mc
	this.instance_13 = new lib.printer_mc("single",0);
	this.instance_13.setTransform(151.2,328,0.6781,0.6781,0,0,0,0.2,0);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0.1,scaleX:0.9883,scaleY:0.9883,x:151.1,y:338,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).to({_off:true},182).wait(169));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(114,256,224.10000000000002,388.1);
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
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"},
		{src:"Printer.jpg", id:"Printer"},
		{src:"printer_full_image.jpg", id:"printer_full_image"},
		{src:"printer_light.png", id:"printer_light"}
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