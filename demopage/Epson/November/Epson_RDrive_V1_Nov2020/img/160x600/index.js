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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-66.1,-367.0481);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-130,-419.4,127.9,104.79999999999995), null);


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
	this.shape.graphics.f("#353535").s().p("AJCBfIALgXQAFgMADgLQACgLABgMQACgLAAgOQAAgMgCgMQgBgMgCgLQgDgMgFgLQgEgLgHgMIAWAAQAQAZAHAXQAHAYgBAVQABAWgHAYQgHAXgQAZgApXBfQgQgZgHgXQgGgYgBgWQABgVAGgYQAHgXAQgZIAWAAQgGAMgFALQgFALgDAMQgCALgBAMQgCAMAAAMQAAAOACALQABAMACALIAIAXIALAXgAFoA4QgIgEgFgHQgFgIgDgLQgBgLAAgPQAAgNABgLQADgLAFgIQAFgHAJgEQAJgEAMAAQANAAAIADQAJAEAFAIQAFAHADALQACALAAAOQgBAPgCALQgCALgFAHQgGAIgIAEQgJADgMAAQgNAAgJgDgAF2gjQgDACgCAGQgCAFAAAHIAAAfQAAAIACAFQACAFADADQADADAFAAQAJAAADgJQAEgKAAgVQAAgUgEgJQgDgJgJAAQgFAAgDADgAArA4QgHgCgFgHQgGgHgDgLQgCgMAAgRQAAgQADgMQADgLAGgHQAGgHAJgCQAIgDALAAQATAAAKAMQALALAAAUIgcAAIgBgIIgBgHQgBgDgEgCQgCgCgEAAQgFAAgDACQgEADgCAEQgCAFAAAHIAAAiQAAAIACAFQACAFADACQADACAFAAQAHAAAEgGQADgHAAgOIAcAAQAAAXgKALQgKAMgYAAQgKAAgJgDgAmFA2QgJgGgEgJQgGgKgBgNQgBgMAAgNIABgeQABgPAEgMQAFgLAKgHQAKgHASAAQAJAAAHACQAHACAGAEQAFAFAEAHQADAHABALIgdAAQAAgJgEgFQgDgEgHAAQgGAAgEADQgDACgCAGQgCAFgBAHIgBAWIABAAQAEgGAHgDQAHgEAKAAQAKAAAHAEQAGADAFAGQAEAGACAJQACAIAAAKQAAAZgLAOQgLANgaAAQgPAAgKgFgAl3gKQgEAGAAAPIABALIACAKQACAEADACQADACAGAAQAFAAADgCQADgCADgEIACgKIAAgLQAAgPgEgGQgEgHgIAAQgKAAgDAHgAIcA5IAAghIAcAAIAAAhgAHrA5IAAiVIAcAAIAACVgAG5A5IAAiVIAeAAIAACVgAERA5IAAhwIAcAAIAAAPIAAAAQAEgIAGgFQAHgFAJAAIACAAIADAAIAAAcIgJAAIgIABQgEABgCACQgEACgCAEQgBAEAAAGIAABDgACwA5IAAhNQAAgJgCgDQgEgEgGAAQgPAAAAATIAABKIgdAAIAAiVIAdAAIAAAwIAAAAQAJgOASAAQAOAAAIAHQAHAIAAARIAABTgAgWA5IAAhNQAAgJgEgDQgDgEgGAAQgPAAAAATIAABKIgeAAIAAhwIAdAAIAAANIAAAAQAEgIAIgEQAHgEAKAAQANAAAIAHQAGAIAAARIAABTgAiAA5IAAhwIAdAAIAABwgAkCA5IAAgfIg1AAIAAgZIAxhcIAgAAIAABdIAOAAIAAAYIgOAAIAAAfgAkgACIAeAAIAAg3IAAAAgAntA5IgGggIgpAAIgGAgIggAAIAniVIAmAAIAoCVgAoWAAIAdAAIgOhCIgBAAgAjOAIIAAgXIA8AAIAAAXgAiAhFIAAgZIAdAAIAAAZg");
	this.shape.setTransform(-66.7,-353.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-129.6,-363.2,125.89999999999999,18.899999999999977), null);


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
	this.shape.graphics.f("#353535").s().p("AFXBpQgMgFgHgLQgHgKgDgQQgDgRAAgUQAAgVADgPQADgPAIgMQAHgKAMgGQANgFARAAQATgBAMAGQAMAFAIALQAHALADAPQADAPAAAWQAAAUgDAQQgEARgHAKQgIALgMAEQgMAGgSAAQgSAAgNgFgAFqgaQgEAFgCAHQgDAHAAAKIAAAuQAAAKADAIQACAHAEAEQAFAFAHAAQANAAAFgOQAEgNAAgeQAAgdgEgOQgFgNgNAAQgHAAgFAEgAAbBqQgIgEgEgGQgFgHgCgIQgCgJAAgHQAAgMADgIQACgIAFgGQAFgGAIgEQAHgEALgDIAXgGQAKgDADgEQAEgDAAgIQAAgKgEgEQgFgGgKAAQgKAAgFAGQgFAGAAAJIAAAFIglAAIAAgFQAAgOAFgJQAEgJAIgGQAIgGAKgDQAKgCAMAAQATAAALADQALAEAHAGQAGAHACAJQADAKAAAKIABBmIADANIgnAAIgDgIIgCgJIgBAAQgHANgJAEQgKAEgPAAQgLAAgHgEgABOAfIgJADQgNACgFAHQgFAGAAALQAAAJADAHQAEAHAIAAIAJgCQAFgBADgDQAEgDACgFQADgFAAgGIAAgggAo1BqQgIgEgEgGQgFgHgCgIQgCgJAAgHQAAgMADgIQACgIAFgGQAFgGAIgEQAHgEALgDIAXgGQAKgDADgEQAEgDAAgIQAAgKgEgEQgFgGgKAAQgKAAgFAGQgFAGAAAJIAAAFIglAAIAAgFQAAgOAFgJQAEgJAIgGQAIgGAKgDQAKgCAMAAQATAAALADQALAEAHAGQAGAHACAJQADAKAAAKIABBmIADANIgnAAIgDgIIgCgJIgBAAQgHANgJAEQgKAEgPAAQgLAAgHgEgAoCAfIgJADQgNACgFAHQgFAGAAALQAAAJADAHQAEAHAIAAIAJgCQAFgBADgDQAEgDACgFQADgFAAgGIAAgggAC3BqQgHgCgEgFQgEgFgCgIQgBgIAAgMIAAhcIgVAAIAAgcIAVAAIAAguIApAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAFQADADAJAAIAJgBIAAAdIgbABQgMAAgIgBgAJlBqIAAguIAnAAIAAAugAIdBqIAAhuQAAgNgEgEQgEgFgKAAQgWAAAAAaIAABqIgpAAIAAigIAoAAIAAATIAAAAQAHgMAKgGQALgFANAAQAUAAALAKQAKAMAAAYIAAB2gAD1BqIAAigIAqAAIAACggAg4BqIAAhuQAAgNgFgEQgEgFgJAAQgWAAAAAaIAABqIgpAAIAAigIAnAAIAAATIABAAQAGgMALgGQAKgFAOAAQAUAAAKAKQALAMAAAYIAAB2gAjQBqIAAigIApAAIAACggAkWBqIAAhvQAAgKgEgGQgEgFgIAAQgKAAgGAGQgGAHAAANIAABqIgpAAIAAhvQAAgKgEgGQgEgFgIAAQgKAAgGAGQgGAHAAANIAABqIgpAAIAAigIAnAAIAAAQIABAAQAIgKAJgGQAKgEAOAAQAOAAAKAHQAKAGADANIAAAAQAFgNALgGQAKgHAPAAQAVAAAKAMQAJANAAAXIAAB0gAqLBqIAAjVIApAAIAADVgAD1hKIAAgjIAqAAIAAAjgAjQhKIAAgjIApAAIAAAjg");
	this.shape.setTransform(-70.975,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AILBmQgNgHgFgMQgGgNgCgPIgBgfQAAgQACgOQACgPAHgMQAHgLAMgHQANgHAVAAQASAAALAGQAMAFAGALQAIALACAPQACAOAAATIAAAJIhSAAIABAbIAEAMQACAFAEAEQAEADAGAAQAKgBAFgHQAEgIACgPIAmAAQgBAdgOAOQgOAPgeAAQgWAAgNgIgAIkgbQgEADgCAEIgEALIgBARIAqAAIgBgQQgBgHgCgFQgCgFgEgCQgEgDgGAAQgHAAgEADgAEcBqQgHgDgFgIQgEgGgCgIQgCgJAAgHQAAgMACgIQACgIAFgGQAFgGAJgEQAHgEALgDIAXgGQAJgCAEgFQADgDAAgIQAAgKgDgEQgFgGgKAAQgKAAgFAGQgFAFAAAKIAAAEIglAAIAAgDQAAgPAEgJQAFgKAHgFQAJgGAJgDQALgCAMAAQASAAALAEQAMADAGAHQAGAHADAIQACAKAAALIACBlIADAOIgnAAIgEgIIgCgJIAAAAQgHANgKADQgJAEgPAAQgLAAgIgEgAFPAfIgIADQgNADgFAGQgGAGAAALQAAAKAEAGQAEAGAIABIAJgCQAEgBAEgDQAEgDACgFQACgFAAgHIAAgfgAA4BaQgMgTAAgtQAAgsAMgUQAMgUAZAAQALAAAJAFQAIAEAHAKIAAAAIAAhDIAqAAIAADVIgoAAIAAgRIgBAAQgGALgJAEQgJAFgMAAQgZAAgMgUgABZgNQgEANAAAaQAAAaAEANQAEAOAOAAQANAAAFgOQADgNAAgaQAAgagDgNQgFgNgNAAQgOAAgEANgAhFBmQgMgHgGgMQgHgNgBgPIgBgfQAAgQACgOQACgPAHgMQAHgLAMgHQANgHAVAAQASAAALAGQALAFAGALQAIALACAPQACAOAAATIAAAJIhRAAIABAbIAEAMQACAFAEAEQAEADAGAAQAKgBAFgHQAEgIACgPIAlAAQgBAdgOAOQgNAPgeAAQgWAAgNgIgAgsgbQgEADgCAEIgEALIgBARIAqAAIgBgQQgBgHgCgFQgCgFgEgCQgEgDgGAAQgHAAgEADgAG5BqQgHgCgFgFQgEgFgBgIQgBgIAAgNIAAhaIgWAAIAAgdIAWAAIAAguIAoAAIAAAuIAZAAIAAAdIgZAAIAABVQAAAKAEAEQACAEAKAAIAJgBIAAAeIgbABQgMAAgIgCgADHBrIAAihIApAAIAAChgAifBrIAAhwQAAgLgDgFQgFgFgIAAQgKAAgGAGQgGAHABAOIAABqIgqAAIAAhwQAAgLgEgFQgDgFgJAAQgKAAgGAGQgGAHAAAOIAABqIgpAAIAAihIAoAAIAAAQIAAAAQAIgKAKgFQAKgFANAAQAOAAAKAHQAKAGADANIABAAQAEgNALgGQALgHAOAAQAVAAAKANQAKAMAAAXIAAB1gAmBBrIAAhwQAAgLgFgFQgDgFgJAAQgKAAgGAGQgGAHABAOIAABqIgqAAIAAhwQAAgLgEgFQgEgFgIAAQgKAAgGAGQgGAHAAAOIAABqIgpAAIAAihIAoAAIAAAQIAAAAQAIgKAKgFQAJgFAOAAQAOAAAKAHQAKAGADANIAAAAQAGgNAKgGQAKgHAQAAQAUAAAKANQAJAMAAAXIAAB1gApqBrIAAjVIAsAAIAADVgADHhKIAAgjIApAAIAAAjg");
	this.shape_1.setTransform(-74.05,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-136.2,-3.6,130.5,52.5), null);


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
	this.shape.setTransform(-74.375,24.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-147.5,-4.3,146.3,57.599999999999994), null);


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
	this.shape.graphics.f("#353535").s().p("AIrCGIAAgfIALABQAMAAAEgGQAGgGAAgKIgtigIArAAIAYBuIABAAIAVhuIApAAIgnCVQgFAUgFANQgFAMgHAHQgGAHgKACQgJACgPAAgArZCGIAAjUIAnAAIAAARIAAAAQAIgLAIgFQAJgFAMAAQAZAAAMAUQANAUAAAsQAAAtgNATQgMAUgZAAQgLAAgJgFQgIgEgHgKIgBAAIAABDgAqsglQgFANAAAaQAAAaAFANQAEAOAOAAQANAAAEgOQAEgNAAgaQAAgagEgNQgEgNgNAAQgOAAgEANgAgHBSQgMgEgHgKQgIgJgFgRQgDgQAAgYQAAgYAEgRQAGgQAIgKQAJgKALgDQAMgEAOAAQAdAAAOAQQAPARAAAdIgoAAIAAgMIgDgKQgCgFgEgCQgDgDgGAAQgIAAgEADQgFADgDAHQgCAHAAAKIAAAxQAAALACAHQADAHAEADQAFADAGAAQALAAAFgJQAEgJAAgUIAoAAQAAAggOARQgPARggAAQgQAAgKgEgAiwBLQgKgKAAgYIAAh3IApAAIAABuQAAANAEAFQAEAFAKAAQAWAAAAgbIAAhqIApAAIAACgIgoAAIAAgTIAAAAQgHAMgKAFQgLAGgNAAQgUAAgLgLgAlIBCQgMgTAAgtQAAgsAMgUQAMgUAZAAQAMAAAJAEQAHAFAHAKIABAAIAAhEIApAAIAADVIgoAAIAAgRIAAAAQgHAMgIAEQgJAFgNAAQgZAAgMgUgAkmglQgEANgBAaQABAaAEANQADAOAOAAQANAAAFgOQAEgNAAgaQAAgagEgNQgFgNgNAAQgOAAgDANgAnFBRQgMgFgIgLQgGgKgEgQQgCgRAAgUQAAgUACgQQAEgQAHgLQAIgKAMgGQANgFARAAQATgBAMAGQAMAFAHALQAIALACAPQAEAQAAAVQAAAUgEAQQgDAQgIALQgHAKgMAFQgMAGgSAAQgSAAgNgFgAmygyQgEAEgCAIQgDAHgBALIAAAsQABALADAHQACAIAEAEQAFAEAHAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgHAAgFAEgAHvBSQgIgCgEgFQgEgFgBgIQgCgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIApAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAJgBIAAAdIgbABQgMAAgHgBgACBBSQgIgCgDgFQgFgFgBgIQgBgIgBgNIAAhbIgUAAIAAgcIAUAAIAAguIAqAAIAAAuIAXAAIAAAcIgXAAIAABWQAAAKADAEQADAEAIAAIAJgBIAAAdIgbABQgMAAgHgBgAKzBSIAAguIAoAAIAAAugAGMBSIAAigIApAAIAACggAEjBSIgqigIArAAIAYByIABAAIAVhyIAqAAIgpCggAC/BSIAAigIAqAAIAACggApEBSIAAigIAoAAIAAAWIABAAQAGgMAJgHQAJgHANAAIADAAIAEAAIAAAoIgNgBIgLACQgFABgEAEQgFADgDAGQgCAFAAAIIAABggAGMhiIAAgjIApAAIAAAjgAC/hiIAAgjIAqAAIAAAjg");
	this.shape.setTransform(-73.6,40.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AGTB8QgPgLAAgVIAoAAQAAAIAGAFIAHACIAIACQAMAAAFgIQAFgJAAgLIAAgVIgBAAQgGAIgJAGQgJAFgKAAQgYAAgNgSQgMgUAAgqIABgdQACgPAFgLQAGgMAJgIQALgIAQABQAJgBAJAFQAKAFAFAMIABAAIAAgSIAoAAIAACZQAAAfgQAPQgPARglgBQgaAAgOgLgAG3gxQgFAEgCAGQgCAHgCALIAAAqQACAIACAGQACAFAEAEQAEAEAHgBQAGABAFgEQAEgEADgFQACgHABgIIABgTQAAgcgEgMQgFgMgMgBQgIABgDACgAhYBRQgHgEgEgHQgFgGgCgJQgCgIAAgIQAAgLACgJQACgIAGgFQAFgGAHgDQAIgFAKgCIAYgHQAKgCADgFQAEgDAAgJQAAgJgFgFQgEgGgKABQgKAAgFAFQgFAGAAAJIAAAFIglAAIAAgEQAAgOAFgJQAEgKAHgFQAIgGAKgDQALgCAMAAQASgBAMAEQALADAGAHQAFAHADAJQADAJgBALIABBmIAEANIgnAAIgCgIIgCgJIgBAAQgHANgJAEQgKADgPAAQgLAAgIgDgAgkAGIgJADQgNACgFAGQgFAGgBAMQABAJADAHQAEAGAIAAIAJgCQAFgBADgCQADgDADgFQADgFAAgHIAAgggAFBBRIAAhuQAAgNgFgFQgDgEgKgBQgWABAAAaIAABqIgpAAIAAihIAoAAIAAATIAAAAQAHgMAKgFQAKgGAOABQAUAAALAKQAKALAAAZIAAB2gACpBRIAAihIApAAIAAChgAAiBRIAAggIBAheIg9AAIAAgjIBuAAIAAAhIhBBeIBBAAIAAAigAirBRIAAhwQAAgKgEgFQgEgGgIAAQgKABgHAGQgFAHAAAOIAABpIgpAAIAAhwQAAgKgFgFQgDgGgJAAQgKABgGAGQgFAHAAAOIAABpIgqAAIAAihIAoAAIAAARIABAAQAHgLAKgFQAKgFANABQAOgBALAHQAKAGACAOIABAAQAFgOAKgGQALgHAPABQAUAAAKAMQAKAMAAAXIAAB1gAmEBRIgKgtIg5AAIgKAtIgtAAIA4jVIA2AAIA5DVgAnAAAIArAAIgWhfIAAAAgACphjIAAgkIApAAIAAAkg");
	this.shape_1.setTransform(-75.75,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-146.6,-3.6,146.1,57.9), null);


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
	this.shape.graphics.f("#353535").s().p("AHFFjQgLgHgFgKQgFgKgBgMIgBgaQAAgNACgNQACgMAFgKQAGgKAKgGQALgFARgBQAPABAKAFQAJAEAGAJQAFAJADANQACANAAAPIAAAIIhFAAIABAWIADAKIAFAHQADACAFAAQAJAAAEgFQAEgHACgNIAfAAQgCAYgLAMQgLAMgZAAQgTAAgKgGgAHZD2IgFAHIgDAIIgBAKIAAAFIAkAAIgCgOQAAgFgCgEQgCgEgDgDQgEgCgFAAQgFAAgEACgAleFnQgJgEgGgFQgFgGgDgHQgCgIAAgKIAAgEIAfAAIAAAEQAAAIAFAGQAEAGAJgBQAIAAAFgEQAFgEAAgHQAAgHgEgDIgJgGIgYgIQgPgFgHgKQgHgJAAgOQAAgIADgIQACgHAHgFQAGgGAJgDQAJgEAOAAQAXABALAJQAMALAAASIAAAFIgfAAQAAgKgEgFQgDgFgJAAQgGAAgFADQgFAEAAAIQAAAEADAFQADADAJADIAVAHQAQAFAHAKQAGAIAAAQQAAALgDAHQgEAJgHAFQgGAFgJACQgJACgLAAQgPAAgKgCgAnQFjQgLgHgFgKQgFgKgBgMIgBgaQAAgNACgNQACgMAFgKQAGgKAKgGQALgFARgBQAPABAKAFQAJAEAGAJQAFAJADANQACANAAAPIAAAIIhFAAIABAWIADAKIAFAHQADACAFAAQAJAAAEgFQAEgHACgNIAfAAQgCAYgLAMQgLAMgZAAQgTAAgKgGgAm8D2IgFAHIgDAIIgBAKIAAAFIAkAAIgCgOQAAgFgCgEQgCgEgDgDQgEgCgFAAQgFAAgEACgAGCFmQgGgCgDgDQgEgFgBgGQgBgHAAgKIAAhOIgSAAIAAgXIASAAIAAgnIAiAAIAAAnIAUAAIAAAXIgUAAIAABJQAAAIADAEQACADAIAAIADAAIAEgBIAAAZIgWAAIgRgBgAIkFnIAAiHIAhAAIAAASIAAAAQAGgJAHgHQAIgFAKgBIADAAIAEABIAAAhIgLAAIgJAAQgFACgEADQgDACgDAFQgCAFAAAHIAABRgAE0FnIAAheQAAgKgDgEQgEgEgIAAQgSAAAAAXIAABZIgiAAIAAiHIAhAAIAAAPIAAAAQAGgJAIgFQAJgFALAAQARABAJAIQAJAKAAAUIAABkgAC4FnIAAiHIAjAAIAACHgABnFnIAAiHIAhAAIAAASIAAAAQAGgJAHgHQAIgFAKgBIADAAIAEABIAAAhIgLAAIgJAAQgFACgEADQgDACgDAFQgCAFAAAHIAABRgAgWFnIAAizIA+AAQANAAAKAEQAJAGAGAHQAGAHACAKQADAKAAAKQAAAOgEAJQgFALgHAGQgHAHgLADQgKADgNAAIgTAAIAABIgAANEFIAQAAQAKAAAHgHQAHgGAAgOQAAgOgGgGQgGgIgNABIgPAAgAiIFnIAAheQAAgKgDgEQgEgEgIAAQgSAAAAAXIAABZIgiAAIAAiHIAhAAIAAAPIAAAAQAGgJAIgFQAJgFALAAQARABAJAIQAJAKAAAUIAABkgAkEFnIAAiHIAjAAIAACHgAoYFnQgCgEgBgFIgCgsQgBgLgFgGQgEgGgMAAIgTAAIAABMIgkAAIAAizIBDAAQAWAAANALQAMAMAAAXQAAASgHALQgHAMgPADIAAABQANABAGAIQAHAGABAPIADAuQABAHAFADIAAACgApGECIAPAAQANAAAHgGQAHgGAAgOQAAgZgZAAIgRAAgAC4DQIAAgeIAjAAIAAAegAkEDQIAAgeIAjAAIAAAegADOBZQgLgFgGgKQgGgKgDgRQgDgQAAgXIABgjQACgRAFgNQAGgOALgHQALgIAUAAQAQAAALAFQAKAFAHAJQAGALADAQQACAQAAAYIgBAjQgBAQgGANQgFAOgLAHQgMAIgTAAQgQAAgLgEgADfg8QgEADgCAHQgCAHgBALIAABLQABAKACAGQADAHADACQAEACAGAAQAGAAADgDQAEgDACgHQADgGAAgMIAAhKQAAgKgDgHQgCgGgEgCQgDgDgGABQgGAAgEACgAgcBZQgLgFgGgKQgGgKgDgRQgDgQAAgXIABgjQACgRAFgNQAGgOALgHQALgIAUAAQAPAAALAFQAKAFAHAJQAGALADAQQACAQAAAYIgBAjQgBAQgGANQgFAOgLAHQgMAIgSAAQgQAAgLgEgAgLg8QgEADgCAHQgCAHgBALIAABLQABAKACAGQADAHADACQAEACAGAAQAFAAADgDQAEgDACgHQADgGAAgMIAAhKQAAgKgDgHQgCgGgEgCQgDgDgFABQgGAAgEACgAiVBZQgKgFgGgIQgFgHgCgIQgCgJAAgIIAAgFIAiAAIABAKQAAAFACAEQACAFADACQAEADAGAAQALABAFgJQAFgJAAgRIgBgSQgBgHgDgFQgCgEgEgBQgEgCgGAAQgIAAgEAEQgEAFgBAGIggAAIAGheIBcAAIAAAcIhBAAIgEAoIABAAQAFgIAIgCQAIgDALAAQANAAAJAEQAIAFAFAJQAFAHACAKQACAJAAALQAAAPgDAMQgCAMgHAIQgGAJgLAFQgLAEgRAAQgRAAgKgEgABQBaQACgQAEgSQAEgSAHgSQAGgSAKgRQAJgTANgSIhKAAIAAgeIBtAAIAAAbQgLAPgJASQgJASgGARQgHAUgEATQgEATgCATgAjdBaQgCgEgBgEIgCgtQgBgKgFgHQgEgFgMgBIgTAAIAABMIgkAAIAAiyIBDAAQAWAAANAMQAMALAAAXQAAASgHAMQgHALgPACIAAABQANACAGAHQAHAGABAPIADAvQABAGAFAEIAAABgAkLgJIAPAAQANgBAHgFQAHgHAAgOQAAgZgZAAIgRAAgAEpiwQgKgEgGgJQgGgJgDgOQgCgNAAgRQAAgRADgOQACgNAHgJQAGgJAKgFQAKgEAPAAQAPAAAKAEQALAEAGAKQAGAJACAMQADAOAAASQAAARgDANQgDANgGAKQgGAIgKAEQgLAFgOAAQgQAAgKgEgAE5keQgEAEgCAGQgCAGAAAJIAAAmQAAAJACAGQACAGAEAEQADADAHAAQAKAAAEgLQAEgLAAgZQAAgZgEgLQgEgLgKAAQgHAAgDADgAB6iwQgKgEgGgJQgGgJgDgOQgCgNAAgRQAAgRADgOQACgNAHgJQAGgJAKgFQAKgEAPAAQAPAAAKAEQALAEAGAKQAGAJACAMQADAOAAASQAAARgDANQgDANgGAKQgGAIgKAEQgLAFgOAAQgQAAgKgEgACKkeQgEAEgCAGQgCAGAAAJIAAAmQAAAJACAGQACAGAEAEQADADAHAAQAKAAAEgLQAEgLAAgZQAAgZgEgLQgEgLgKAAQgHAAgDADgAgGizQgLgGgHgMQgGgNgCgRQgCgRAAgUQAAgVACgRQACgRAGgMQAHgMALgHQALgHAVAAQATAAALAGQALAHAGAJQAFAJACAMIABAUIgkAAQAAgSgFgKQgEgJgMAAQgHABgFADQgEAEgDAIQgCAIgBANIgBAgIABAhQACANADAGQACAIAFABQAEADAGAAQAFAAAEgBQAEgCADgFQADgFACgJQABgJAAgOIAkAAQAAAOgCANQgCANgGAKQgGAJgLAGQgLAGgSAAQgVAAgLgHgAh+iyQgLgHgFgKQgFgKgBgNIgBgZQAAgOACgMQACgNAFgKQAGgJAKgGQALgGARAAQAPAAAKAFQAJAEAGAKQAFAJADAMQACANAAAQIAAAHIhFAAIABAXIADAJIAFAIQADACAFAAQAJAAAEgGQAEgHACgNIAfAAQgCAYgLAMQgLANgZAAQgTAAgKgGgAhqkfIgFAGIgDAIIgBAKIAAAFIAkAAIgCgNQAAgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgEACgAlSi1QgJgJAAgUIAAhkIAiAAIAABeQAAAKAEAEQADAEAIAAQASAAAAgXIAAhZIAjAAIAACHIghAAIAAgPIgBAAQgFAJgJAEQgJAFgLAAQgQAAgJgJgAnTi6QgNgNAAgYIAAgIIAkAAIABARQABAFADAEQACADAFACQAEACAIAAQAIAAAGgGQAHgEAAgMQAAgGgCgFQgBgDgEgEQgEgEgGgCIgPgGQgMgEgJgFQgIgFgGgGQgGgHgDgIQgDgIAAgLQAAgbAPgNQAPgNAZAAQAMAAALACQAKADAHAGQAHAGAFAJQAEAJAAANIAAAFIgjAAQAAgMgEgHQgFgIgKAAQgGABgEABQgEACgDADIgDAGIgBAIQAAAIAEAGQADAGAMAEIAbAMQALAFAGAFQAHAFAEAGQADAFACAHQACAGAAAJQAAAcgRANQgQANgdAAQgfAAgNgOgAGIivIAAiHIAhAAIAAASIAAAAQAGgJAHgGQAIgGAKAAIADAAIAEAAIAAAiIgLgBIgJABQgFABgEADQgDADgDAFQgCAEAAAHIAABRgADaivIAAizIAiAAIAACzgAjhivIAAiHIAhAAIAAASIABAAQAFgJAHgGQAIgGALAAIADAAIADAAIAAAiIgLgBIgJABQgEABgEADQgEADgCAFQgCAEAAAHIAABRgAH7kMQgJgEgGgGQgHgHgEgJQgEgJAAgKQAAgKAEgIQAEgJAHgHQAGgGAJgEQAJgEAKABQAKgBAJAEQAIAEAHAGQAGAHAEAJQAEAIAAAKQAAAKgEAJQgEAJgGAHQgHAGgIAEQgJAEgKgBQgKABgJgEgAIAlYQgGACgEAFQgFAFgCAHQgDAFAAAHQAAAIADAGQACAGAFAFQAEAFAGADQAGACAIAAQAHAAAGgCQAGgDAFgFQAEgFADgGQACgGAAgIQAAgHgCgFQgDgHgEgFQgFgFgGgCQgGgDgHAAQgIAAgGADgAIXkeIgMgVIgFAAIAAAVIgLAAIAAg1IAUAAQAKABAFAEQAFAEAAAIQAAAGgDAEQgEAEgGAAIANAWgAIGk8IAJAAIAGgCQADgBAAgEIgBgEIgDgCIgGgBIgIAAg");
	this.shape.setTransform(-83.825,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-145.7,-5.2,123.79999999999998,72.3), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(310).to({alpha:0},0).to({alpha:1},9).wait(32));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(162.05,139.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// printer_rolls
	this.instance_2 = new lib.printer_rolls();
	this.instance_2.setTransform(187.3,271.45,0.5395,0.5395,0,0,0,0.2,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({x:137.3},11,cjs.Ease.quadOut).wait(21));

	// printer_mc
	this.instance_3 = new lib.printer_mc("single",57);
	this.instance_3.setTransform(-67.65,273.7,0.3783,0.3783,0,0,0,0.2,0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({x:62.35},11,cjs.Ease.quadOut).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("AmuCUQgiAAAAgjIAAAAIAAjhQAAgjAiAAIAAAAINdAAQAiAAAAAjIAAAAIAADhQAAAjgiAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:76.7641,y:354.8641}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoLGHIL8vmIEbDZIr8Pmg");
	this.shape_1.setTransform(9.375,338.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.8,14.2,10.9).s().p("AoLGHIL8vmIEbDZIr8Pmg");
	this.shape_2.setTransform(11.325,339.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.1,-10.9,14.2,10.8).s().p("AoMGIIL9voIEcDaIr9Png");
	this.shape_3.setTransform(17.15,340.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.2,10.9).s().p("AoNGIIL+voIEdDZIr+Pog");
	this.shape_4.setTransform(26.875,342.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.2,10.9).s().p("AoOGJIMAvrIEdDaIsAPrg");
	this.shape_5.setTransform(40.475,344.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.2,-10.9,14.3,10.9).s().p("AoPGKIMBvtIEeDbIsCPtg");
	this.shape_6.setTransform(57.975,348.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.3,-11,14.3,10.9).s().p("AoRGLIMEvxIEfDcIsEPxg");
	this.shape_7.setTransform(79.375,352.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.3,-11,14.4,11).s().p("AoSGMIMGvzIEfDbIsGP0g");
	this.shape_8.setTransform(100.725,356.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoUGNIMJv2IEgDcIsJP3g");
	this.shape_9.setTransform(118.25,360.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11,14.4,11).s().p("AoVGOIMKv4IEhDdIsLP4g");
	this.shape_10.setTransform(131.85,363.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.4,-11.1,14.5,11).s().p("AoVGOIMKv5IEhDeIsLP5g");
	this.shape_11.setTransform(141.575,365.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.5,-11.1,14.4,11).s().p("AoWGPIMMv6IEhDcIsMP7g");
	this.shape_12.setTransform(147.4,366.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-14.5,-11.1,14.4,11).s().p("AoWGPIMLv7IEiDeIsMP7g");
	this.shape_13.setTransform(149.35,366.675);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},347).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(76.8,354.9,0.5726,0.5726,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

	// Layer_3
	this.instance_5 = new lib.bottom_image();
	this.instance_5.setTransform(80.1,519.85);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(319).to({_off:false},0).to({alpha:1},9).wait(32));

	// BG
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_14.setTransform(80.0004,299.987,0.465,0.9256);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.11)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_15.setTransform(80,300);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.224)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_16.setTransform(80,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.333)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_17.setTransform(80,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.443)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_18.setTransform(80,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.557)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_19.setTransform(80,300);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.667)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_20.setTransform(80,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.776)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_21.setTransform(80,300);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.89)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_22.setTransform(80,300);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_23.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},319).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(32));

	// txt_onARoll
	this.instance_6 = new lib.txt_inchRoll();
	this.instance_6.setTransform(146.05,509.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(274).to({_off:false},0).to({alpha:1},9).wait(36).to({alpha:0},9).wait(32));

	// txt_onARoll
	this.instance_7 = new lib.txt_onARoll();
	this.instance_7.setTransform(144.05,528.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({alpha:1},10).wait(76).to({alpha:0},9).wait(86));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("ArPMbIAA41IWgAAIAAY1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:79.05,y:403.25}).wait(171));

	// image_strip_01
	this.instance_8 = new lib.image_strip_01();
	this.instance_8.setTransform(77.4,240.75,0.5542,0.5542,0,0,0,0.2,0.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(189).to({_off:false},0).to({y:405.25},25,cjs.Ease.quadOut).wait(146));

	// image_strip_02
	this.instance_9 = new lib.image_strip_02();
	this.instance_9.setTransform(79.1,240.25,0.5542,0.5542,0,0,0,0.2,0.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(214).to({_off:false},0).to({y:405.25},25,cjs.Ease.quadOut).wait(121));

	// image_strip_03
	this.instance_10 = new lib.image_strip_03();
	this.instance_10.setTransform(79.35,240.75,0.5542,0.5542,0,0,0,0.1,0.2);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(239).to({_off:false},0).to({y:405.25},25,cjs.Ease.quadOut).wait(96));

	// hallwayMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_179 = new cjs.Graphics().p("AuwbqMAAAg3TIdhAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_2_graphics_179,x:81.525,y:436.925}).wait(181));

	// hallway_mc
	this.instance_11 = new lib.hallway_mc();
	this.instance_11.setTransform(82.95,429.05,1.1065,1.1065,0,0,0,-67,-130.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(179).to({_off:false},0).to({scaleX:1,scaleY:1,x:83,y:429.1,alpha:1},10,cjs.Ease.quadOut).to({_off:true},140).wait(31));

	// txt_AmazingProductivity
	this.instance_12 = new lib.txt_AmazingProductivity();
	this.instance_12.setTransform(153.3,188.55);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(45).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_Immediatelamination
	this.instance_13 = new lib.txt_Immediatelamination();
	this.instance_13.setTransform(153.3,190.55);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(61).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(39).to({alpha:0},10).to({_off:true},1).wait(240));

	// txt_consistentQuality
	this.instance_14 = new lib.txt_consistentQuality();
	this.instance_14.setTransform(153.3,186.55);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(41).to({alpha:0},10).to({_off:true},1).wait(299));

	// wht_fade
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_24.setTransform(151.05,341.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.09)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_25.setTransform(151.05,341.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.18)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_26.setTransform(151.05,341.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.275)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_27.setTransform(151.05,341.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.365)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_28.setTransform(151.05,341.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.455)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_29.setTransform(151.05,341.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.545)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_30.setTransform(151.05,341.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.635)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_31.setTransform(151.05,341.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.725)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_32.setTransform(151.05,341.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.82)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_33.setTransform(151.05,341.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.91)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_34.setTransform(151.05,341.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_35.setTransform(151.05,341.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},179).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},1).wait(169));

	// printer_mc
	this.instance_15 = new lib.printer_mc("single",0);
	this.instance_15.setTransform(81.25,336,0.3934,0.3934,0,0,0,0.2,0);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.5314,scaleY:0.5314,x:81.2,y:339.5,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).to({_off:true},182).wait(169));

	// Layer_2
	this.instance_16 = new lib.bottom_image();
	this.instance_16.setTransform(80.1,699.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:551.85},12,cjs.Ease.quadOut).wait(348));

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