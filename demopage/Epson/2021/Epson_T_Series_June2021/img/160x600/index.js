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



(lib.endFrame = function() {
	this.initialize(img.endFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,183);


(lib.frame_01 = function() {
	this.initialize(img.frame_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.frame_06 = function() {
	this.initialize(img.frame_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,211);


(lib.printer_01 = function() {
	this.initialize(img.printer_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.zoomIn = function() {
	this.initialize(img.zoomIn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);// helper functions:

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


(lib.zoomIn_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AG2AAQAAC1iBCAQiACBi1AAQi0AAiAiBQiBiAAAi1QAAi0CBiBQCAiAC0AAQC1AACACAQCBCBAAC0g");
	this.shape.setTransform(-11.45,-12.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak5E6QiCiCAAi4QAAi3CCiCQCCiCC3AAQC4AACCCCQCCCCAAC3QAAC4iCCCQiCCCi4AAQi3AAiCiCg");
	mask.setTransform(-11.6675,-12.9175);

	// Layer_1
	this.instance = new lib.zoomIn();
	this.instance.setTransform(-56.5,-58);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomIn_1, new cjs.Rectangle(-56.2,-57.5,89.5,89.5), null);


(lib.txt_work = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgQAQIAAgfIAhAAIAAAfg");
	this.shape.setTransform(56.975,179.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AAYBWIgkg8IgRAPIAAAtIgbAAIAAirIAbAAIAABhIAwgxIAiAAIgvAsIA0BPg");
	this.shape_1.setTransform(47.95,172.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgjBAIAAh7IAZAAIAAAYIABAAQABgFADgFIAIgJQAFgEAGgCQAGgDAGAAIAHABIADAAIAAAaIgGAAIgFgBQgHAAgHADQgGADgEAFQgEAGgCAIQgDAHAAAKIAAA7g");
	this.shape_2.setTransform(37.275,175.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgZA8QgMgEgIgJQgIgJgEgLQgFgNAAgOQAAgNAFgMQAEgMAIgJQAIgJAMgFQALgEAOgBQAPABAMAEQALAFAIAJQAIAJAEAMQAFAMAAANQAAAOgFANQgEALgIAJQgIAJgLAEQgMAGgPAAQgOAAgLgGgAgPgnQgGAEgFAGQgEAGgCAIQgCAIAAAHQAAAIACAIQACAIAEAGQAFAGAGAEQAHAEAIAAQAJAAAHgEQAHgEAEgGQAEgGACgIQACgIAAgIQAAgHgCgIQgCgIgEgGQgEgGgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_3.setTransform(25.025,175.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAXA+IgXhbIAAAAIgWBbIgdAAIgmh7IAdAAIAYBbIABAAIAXhbIAbAAIAWBbIAAAAIAZhbIAcAAIgnB7g");
	this.shape_4.setTransform(8.475,175.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgrAzQgLgMABgYIAAhOIAbAAIAABLQAAARAGAGQAHAHAKAAQAIAAAGgDQAGgCADgFQAEgEACgGQABgHAAgHIAAhHIAcAAIAAB7IgbAAIAAgRIgBAAQgFAJgKAGQgKAGgJAAQgZAAgLgNg");
	this.shape_5.setTransform(-14.55,175.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgZA8QgMgEgIgJQgIgJgEgLQgFgNAAgOQAAgNAFgMQAEgMAIgJQAIgJAMgFQALgEAOgBQAPABAMAEQALAFAIAJQAIAJAEAMQAFAMAAANQAAAOgFANQgEALgIAJQgIAJgLAEQgMAGgPAAQgOAAgLgGgAgPgnQgGAEgFAGQgEAGgCAIQgCAIAAAHQAAAIACAIQACAIAEAGQAFAGAGAEQAHAEAIAAQAJAAAHgEQAHgEAEgGQAEgGACgIQACgIAAgIQAAgHgCgIQgCgIgEgGQgEgGgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_6.setTransform(-28.625,175.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgxBVIAAgXIAHACIAHAAQAEAAAEgBQADgCABgCIAEgFIADgIIADgJIgvh7IAdAAIAgBcIABAAIAfhcIAdAAIgxCCIgGARQgEAHgDAGQgFAFgHAEQgHAEgLAAIgTgCg");
	this.shape_7.setTransform(-42.1,177.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_work, new cjs.Rectangle(-50.3,156.1,112.9,32.599999999999994), null);


(lib.txt_theWay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgoBTIgLgBIAAgcIAKABIAKABQAGgBAEgFQADgEAAgGQAAgEgCgDIgrh0IAkAAIAcBUIAAAAIAbhUIAkAAIg0CLQgGAPgJAGQgKAHgRAAg");
	this.shape.setTransform(43.2,5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgiA/QgHgCgGgEQgGgFgDgHQgEgHAAgKQABgKAEgHQADgHAGgEQAGgDAHgCIAPgDIAQgCIAMgCQAGgCADgDQADgCAAgGQAAgFgCgDQgCgEgCgBQgEgCgEgBIgIAAQgJAAgGAEQgFAEgBAKIgiAAQAAgMAGgIQAEgIAJgEQAIgFAKgCQALgCAJAAIATABQAKABAHAEQAJAEAFAHQAEAHAAALIAABAIACAQQAAAHADAEIgjAAIgBgGIgBgGQgJAJgKADQgKADgMAAQgJAAgIgCgAARAEIgHACIgIACIgHABIgHACIgHADQgDACgCADQgCADAAAFQAAAFACADQACADADACIAHACIAIABQAJAAAFgEQAGgDACgFQADgEABgFIAAgIIAAgMg");
	this.shape_1.setTransform(29.4,2.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AAWA+IgWhTIAAAAIgVBTIgjAAIgnh7IAkAAIAWBTIABAAIAVhTIAgAAIAVBTIAAAAIAXhTIAjAAIgnB7g");
	this.shape_2.setTransform(12.275,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_3.setTransform(-12.2139,2.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAYBWIAAhGQAAgQgFgGQgFgIgMAAQgNAAgGAJQgGAHAAATIAABBIgiAAIAAirIAiAAIAABBIABAAQAGgLAKgFQAJgFAKAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAAKIAABNg");
	this.shape_4.setTransform(-26.775,0.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgGAAgJIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADACQADAEAIAAIAGAAIAFgBIAAAaIgKABg");
	this.shape_5.setTransform(-38.775,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_theWay, new cjs.Rectangle(-52.1,-16.3,104.30000000000001,32.6), null);


(lib.txt_precisionCore = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgJAZQgFgCgEgEQgEgDgCgFQgCgFAAgGQAAgFACgFQACgFAEgDQAEgEAFgCIAJgBQAFAAAFABQAFACAEAEQAEADACAFQACAFAAAFQAAAGgCAFQgCAFgEADQgEAEgFACQgFABgFAAIgJgBgAgHgSQgDABgDADQgDADgBAEQgCADAAAEQAAAEACAEQABAEADADQADADADABQAEACADAAQAEAAAEgCQADgBADgDQADgDABgEQACgEAAgEQAAgEgCgDQgBgEgDgDQgDgDgDgBQgEgCgEAAQgDAAgEACgAAGAPIgGgNIgEAAIAAANIgGAAIAAgdIALAAQAFAAADACQADACAAAFIAAADIgCACIgDABIgDABIAIANgAgEgCIAFAAIAEAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgCIgCgBIgCAAIgCAAIgEAAg");
	this.shape.setTransform(1.975,146.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgXBEQgJgFgGgHQgFgIgEgJQgDgKAAgMQABgOADgIQAEgKAGgHQAHgHAHgDQAIgDAIAAIAJABIAKADIAIAFQAEADADAEIAAAAIAAg0IAWAAIAACMIgVAAIAAgOQgFAJgJAEQgIAEgJAAQgMAAgJgEgAgMgNQgFACgEAGQgDAFgBAGQgCAGAAAHIACANQABAGADAFQAEAFAFADQAGADAGAAQAHAAAGgDQAFgEAEgFQADgEACgHQACgHAAgGQAAgRgIgJQgHgJgNAAQgIAAgFAEg");
	this.shape_1.setTransform(-28.6,172.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AAZAzQgEgDgCgGQgGAGgKADQgJADgJAAQgHAAgGgCQgHgCgEgEQgFgEgDgFQgDgGAAgHQAAgJADgHQAEgFAGgDQAFgDAHgBIAOgDIALgCIAKgBQAEgCACgCQADgCAAgFQAAgFgCgCIgFgEIgHgDIgGAAQgKAAgGAEQgGAEgBAIIgWAAQAAgKAFgGQAEgHAGgEQAHgDAIgCQAIgCAIAAQAHAAAHACQAHABAGAEQAGADAEAGQADAFAAAJIAAAzIABAGQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIADAAIADgBIAAAQIgDABIgEABIgEAAIgDABQgHAAgFgDgAAFAEIgOACIgHABIgGADIgEAGQgBACAAAFQAAAEACADIAFAEIAHABIAGABIAHgBQAFgBAEgCQADgDADgEQADgDAAgGIAAgQQgGADgHABg");
	this.shape_2.setTransform(-40.175,173.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgUAyQgJgEgGgHQgHgHgDgKQgDgKAAgMQAAgKADgKQAEgKAGgHQAGgHAKgEQAJgFAKAAQANAAAJAGQAKAFAGAHQAGAJADAKQADAMgBAKIhLAAQAAAGACAFQACAGADAEQAEAEAEADQAFACAHAAQAJAAAHgEQAFgFADgIIAWAAQgBAJgFAGQgFAGgFAEQgHAGgHABQgIADgIAAQgLAAgKgEgAAagIQAAgGgDgFQgBgEgEgEIgHgGQgFgCgGAAQgEAAgGACQgEACgEAEQgDAEgCAEQgCAFgBAGIA0AAIAAAAg");
	this.shape_3.setTransform(-51.85,173.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAWBGIAAhAQAAgLgFgFQgFgGgKABQgEAAgFACQgFABgDAFQgDADgCAEQgBAFAAAGIAAA7IgXAAIAAiLIAXAAIAAA0QAEgHAIgFQAIgEAKAAQAQgBAKAKQAKAIAAARIAABFg");
	this.shape_4.setTransform(-63.675,172);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AABBBQgFgCgDgDQgCgDgBgFIgCgLIAAg8IgRAAIAAgQIARAAIAAgfIAVAAIAAAfIAVAAIAAAQIgVAAIAAA2IABAGIABAEIAEADIAFABIAFAAIAFgBIAAASIgIAAIgHABQgJAAgFgCg");
	this.shape_5.setTransform(-73.4,172.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAWA0IAAg/QAAgMgFgFQgFgGgKABQgEAAgFACQgFABgDAFQgDADgCAFQgBAFAAAGIAAA6IgXAAIAAhlIAVAAIAAAQIABAAQAFgIAIgGQAIgEAKAAQAQgBAKAKQAKAIAAASIAABEg");
	this.shape_6.setTransform(-82.775,173.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgKBGIAAhlIAVAAIAABlgAgKgwIAAgVIAVAAIAAAVg");
	this.shape_7.setTransform(-91.425,172);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgdA0IAAhlIAVAAIAAAUIABAAIADgIIAGgHQAEgDAFgDQAFgBAFAAIAGAAIADABIAAAVIgFgBIgFAAQgFAAgGACQgFADgDAEQgDAEgCAHQgCAGAAAIIAAAwg");
	this.shape_8.setTransform(-97.125,173.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgxBHIAAiKIAUAAIAAAOIABAAQAFgJAJgEQAIgEAJAAQAMAAAIAEQAJAEAHAIQAFAHAEAKQACAKAAALQAAAKgCAJQgDAKgFAHQgGAIgIAEQgIAFgMAAIgJgBIgJgDIgJgFIgGgHIAAAAIAAAygAgVgqQgHAJAAARQAAAIACAGQACAGADAEQAFAFAEADQAGADAGAAQAIAAAFgDQAFgEAEgFQADgFABgFQACgGAAgHQAAgHgCgHQgCgGgDgFQgDgFgGgDQgFgDgHAAQgNAAgIAKg");
	this.shape_9.setTransform(-107.65,175.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgUAyQgJgEgHgHQgHgHgDgKQgEgKAAgMQAAgKAEgKQADgKAHgHQAHgHAKgEQAJgFALAAQANAAAKAGQAJAFAHAIQAGAIADALQACALAAALIhJAAQABAOAGAGQAGAGALAAQAJAAAGgEQAGgFABgEIAZAAQgGASgMAIQgNAIgRAAQgLAAgKgEgAgKgdIgHAFQgDAEgBAEIgBAGIAtAAQgCgKgFgGQgFgFgLAAQgFAAgFACg");
	this.shape_10.setTransform(-6.1458,150.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AggA1IAAhmIAbAAIAAATQACgEADgFIAHgGIAKgFQAFgCAFAAIAGABIAAAaIgFAAIgFAAQgIAAgFACQgFADgEAEQgCAFgCAFQgBAGAAAHIAAAug");
	this.shape_11.setTransform(-15.1,150.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgVAyQgJgEgHgHQgHgHgEgKQgEgJAAgNQAAgLAEgKQAEgKAHgHQAHgHAJgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAHAHAEAKQAEAKAAALQAAANgEAJQgEAKgHAHQgHAHgJAEQgKAEgMAAQgLAAgKgEgAgLgdQgFADgCAFQgDAEgCAGIgBALIABAMQACAGADAFQACAEAFADQAFADAGAAQAHAAAFgDQAFgDADgEIAEgLIABgMIgBgLIgEgKQgDgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_12.setTransform(-25.475,150.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgZBEQgNgFgIgKQgJgKgFgNQgFgOAAgPQAAgPAFgNQAFgOAJgKQAIgKANgGQANgGAQAAQALAAALAEQAKADAIAHQAIAGAGAJQAFAKABAMIgeAAQAAgFgDgFQgDgEgEgDQgEgEgGgCQgFgCgFAAQgKAAgHAFQgHAEgFAGQgFAHgCAJQgCAJAAAIQAAAJACAIQACAJAFAGQAFAHAHAEQAHAEAKAAQAOAAAIgJQAIgIABgPIAfAAQgCAOgFAKQgFALgIAIQgIAHgLAEQgKAEgNAAQgQAAgNgGg");
	this.shape_13.setTransform(-38.725,148.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AAUA1IAAg5QAAgNgEgGQgEgGgKAAQgKAAgGAGQgFAIAAAPIAAA1IgcAAIAAhmIAbAAIAAAPIABAAQAFgJAIgFQAHgDAJgBQAMAAAHADQAHAEAEAFQAFAFABAJQACAIAAAJIAAA+g");
	this.shape_14.setTransform(-51.9,150.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AgVAyQgJgEgHgHQgHgHgEgKQgEgJAAgNQAAgLAEgKQAEgKAHgHQAHgHAJgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAHAHAEAKQAEAKAAALQAAANgEAJQgEAKgHAHQgHAHgJAEQgKAEgMAAQgLAAgKgEgAgLgdQgFADgCAFQgDAEgCAGIgBALIABAMQACAGADAFQACAEAFADQAFADAGAAQAHAAAFgDQAFgDADgEIAEgLIABgMIgBgLIgEgKQgDgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_15.setTransform(-63.775,150.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3283").s().p("AgNBHIAAhmIAbAAIAABmgAgNguIAAgXIAbAAIAAAXg");
	this.shape_16.setTransform(-72.3,148.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AgPA0QgJgCgHgEQgGgEgEgHQgFgHAAgKIAbAAQAAAFABADQACADADACIAHADIAHABIAGAAIAGgDIAFgEQACgCAAgEQAAgGgJgDIgWgHIgMgDQgGgCgFgCQgEgDgDgEQgDgFAAgHQAAgKAEgGQAEgGAGgEQAHgEAIgBQAHgCAIAAQAIAAAIACQAIACAGADQAGAEAEAGQAEAHABAJIgbAAQAAgIgGgDQgGgDgGAAIgFAAIgFACIgEADQgCACAAADQAAADADADQADACAEACIAKACIALADIAMADIAKAFQAFADADAFQACAEAAAHQAAALgEAGQgEAHgGAEQgHAEgIACQgIACgJAAIgQgCg");
	this.shape_17.setTransform(-80.175,150.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3283").s().p("AgNBHIAAhmIAbAAIAABmgAgNguIAAgXIAbAAIAAAXg");
	this.shape_18.setTransform(-88,148.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("AgTAyQgJgEgHgHQgHgHgDgJQgEgKAAgLQAAgLADgKQAEgKAGgIQAHgHAKgEQAJgFAMAAQAJAAAIADQAJACAGAFQAHAFAEAHQAEAHABAKIgcAAQgCgRgSAAQgGAAgFADQgEADgDAEQgDAFgBAGIgBALIABALIAEAKQADAFAEADQAFADAFAAQAKAAAGgGQAFgFABgKIAbAAQgCAUgNALQgNALgVAAQgKAAgKgEg");
	this.shape_19.setTransform(-96.075,150.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AgUAyQgJgEgHgHQgHgHgDgKQgEgKAAgMQAAgKAEgKQADgKAHgHQAHgHAKgEQAJgFALAAQANAAAKAGQAJAFAHAIQAGAIADALQACALAAALIhJAAQABAOAGAGQAGAGALAAQAJAAAGgEQAGgFABgEIAZAAQgGASgMAIQgNAIgRAAQgLAAgKgEgAgKgdIgHAFQgDAEgBAEIgBAGIAtAAQgCgKgFgGQgFgFgLAAQgFAAgFACg");
	this.shape_20.setTransform(-107.5458,150.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("AggA1IAAhmIAbAAIAAATQACgEADgFIAHgGIAJgFQAGgCAFAAIAGABIAAAaIgFAAIgFAAQgIAAgFACQgGADgDAEQgCAFgCAFQgBAGAAAHIAAAug");
	this.shape_21.setTransform(-116.45,150.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("Ag3BHIAAiMIA+AAQAOgBAJAEQAJAFAGAGQAGAGADAIQACAIAAAJQAAAIgCAJQgDAHgGAGQgGAGgJAEQgJAEgOAAIgfAAIAAAzgAgYgDIAYAAIAJgBQAFAAAEgDQAEgCACgFQACgEAAgGQAAgHgCgEQgCgEgEgDQgEgCgFAAIgJgBIgYAAg");
	this.shape_22.setTransform(-126.975,148.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_precisionCore, new cjs.Rectangle(-135.6,134.5,142.2,50.599999999999994), null);


(lib.txt_inkCartridges = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AFxBaQgJgCgGgEQgHgEgEgGQgEgGgBgJIAdAAQACAIAFADQAGADAIAAQAMAAAGgHQAFgIAAgLIAAgOIAAAAQgFAJgIAEQgJAEgKAAQgLAAgJgEQgIgFgGgHQgFgHgDgKQgDgJAAgKQAAgKADgKQADgJAGgHQAGgIAIgEQAJgEALAAQAKAAAIAEQAIAEAFAJIAAAAIAAgOIAcAAIAABhQAAAGgCAIQgCAJgFAHQgGAHgLAEQgLAFgSAAQgHAAgIgCgAF4geQgEADgDAEQgDAEgBAFQgCAGAAAGIABAKIAEAKQADAEAFADQAEADAHAAQAGAAAEgCQAFgDADgEQADgEACgFQABgFAAgFIgBgMIgEgLQgDgEgFgDQgEgCgHAAQgGAAgFACgAJjA2QgJgCgHgFQgHgEgEgHQgFgHAAgKIAcAAQAAAEABAEQACADAEACIAGADIAJABIAGAAIAGgDIAFgEQACgCAAgEQAAgHgJgDQgJgDgPgDIgMgEIgLgEQgFgDgDgFQgCgFAAgGQAAgLAEgGQAEgHAGgDQAHgEAIgCQAIgBAIAAQAJAAAIACQAIABAGAEQAHAEAEAGQAEAHABAJIgcAAQAAgIgGgDQgGgDgHAAIgGAAIgFACIgEADQgCACAAADQAAAEADACQADADAFABIAiAJIALAFQAFADADAFQACAFAAAHQAAAKgEAHQgEAHgHAFQgGAEgJACIgRABQgKAAgIgBgAHrAzQgKgEgHgHQgHgHgEgKQgDgKAAgNQAAgKADgLQAEgKAHgHQAIgIAJgEQAKgEAMAAQAOAAAKAFQAKAFAGAJQAGAJADALQADALgBALIhMAAQABAOAHAHQAGAGAMAAQAJAAAGgEQAHgFABgFIAZAAQgGATgMAIQgNAIgSAAQgMAAgKgEgAH1geQgFACgCAEQgDADgBAEIgCAHIAvAAQgCgLgFgGQgFgFgLAAQgGAAgFACgADrAzQgJgFgGgIQgFgHgDgLQgDgKAAgKQAAgKADgKQADgKAFgIQAGgHAJgFQAJgEALAAQAKAAAIAEQAJAEAEAHIABAAIAAg0IAdAAIAACQIgcAAIAAgOIAAAAQgFAJgJAEQgIADgKAAQgMAAgJgEgAD7geQgFADgDAFQgDAFgBAGIgBALIABAMQABAGAEAFQADAFAFADQAEADAHAAQAHAAAFgDQAFgDADgFQACgEACgHIABgMIgBgMQgCgGgDgEQgDgFgEgDQgFgCgHAAQgHAAgFACgAi3A2QgHgCgEgEQgFgEgDgGQgDgGAAgIQAAgJADgGQAEgFAFgEQAEgCAHgCIAlgGQAFgBACgDQADgCAAgFQAAgEgBgDQgCgDgCgBIgGgCIgIgBQgIAAgFAEQgFAEgBAIIgdAAQABgKAFgHQAEgHAHgEQAHgEAJgBQAIgCAJAAIAQABQAIABAHADQAGAEAFAFQAEAGAAAKIABBDQABAGACAEIgeAAIgCgKQgHAHgJADQgJACgKAAQgIAAgGgBgAiLAEIgUADIgGACIgGADIgDAEQgCADAAAEQAAAEACACQABADACACIAGACIAHAAQAIAAAFgDQAFgCACgEQACgEABgEIAAgSgAkkAzQgJgEgHgHQgHgHgEgKQgEgJAAgMQAAgLAEgLQADgKAHgIQAHgIAKgEQAKgEANAAQAJAAAJACQAIADAHAFQAHAFAEAHQAEAIABAKIgcAAQgDgSgTAAQgGAAgFADQgFADgDAFQgDAFgBAGQgBAGAAAFIABALQABAGADAFQADAFAEADQAFADAHAAQAKAAAGgGQAFgGACgKIAcAAQgDAVgOALQgNALgVAAQgMAAgKgEgAAgA1QgGgBgEgDQgFgCgCgFQgDgFAAgIIAAg9IgRAAIAAgTIARAAIAAggIAdAAIAAAgIAVAAIAAATIgVAAIAAAzQAAAHACADQADACAHAAIAFAAIAEgBIAAAXIgIABgACfA1IAAhoIAdAAIAABogABOA1IAAhoIAcAAIAAATIAAAAIAFgJIAIgHQAFgDAFgBQAFgCAGAAIAGABIAAAbIgLgBQgHAAgGACQgFADgEAFQgDAEgBAGQgCAGAAAGIAAAwgAhTA1IAAhoIAcAAIAAATIAAAAIAFgJIAIgHQAFgDAFgBQAFgCAGAAIAGABIAAAbIgLgBQgHAAgGACQgFADgEAFQgDAEgBAGQgCAGAAAGIAAAwgAmrA1IgdgvIgLALIAAAkIgdAAIAAiQIAdAAIAABNIAlglIAiAAIgoAmIAsBCgAooA1IAAg7QAAgNgEgGQgEgGgKAAQgMAAgFAHQgFAHAAAQIAAA2IgdAAIAAhoIAbAAIAAAOIABAAQAFgJAJgEQAJgEAJAAQALAAAIADQAHADAFAGQAEAFABAIQACAIAAAKIAABAgAqjA1IAAhoIAcAAIAABogACfhEIAAgXIAdAAIAAAXgAqjhEIAAgXIAcAAIAAAXg");
	this.shape.setTransform(-97.925,147.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inkCartridges, new cjs.Rectangle(-169.1,129.9,202.2,29), null);


(lib.txt_highCapacity = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgpBIIAAgUIAGABIAFABIAHgCIAEgDIADgEIACgGIADgIIgohnIAaAAIAaBNIAAAAIAbhNIAYAAIgpBtIgFANQgDAHgDAFQgEAFgGADQgGADgJAAIgQgBg");
	this.shape.setTransform(-36.225,142.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AABBDQgFgCgDgDQgCgEgBgFIgCgLIAAg9IgRAAIAAgRIARAAIAAgfIAWAAIAAAfIAUAAIAAARIgUAAIAAA3IAAAGIABAEIAEADIAGABIAFAAIAEgBIAAASIgHABIgHAAQgJAAgGgBg");
	this.shape_1.setTransform(-45.05,139.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgKBIIAAhoIAVAAIAABogAgKgxIAAgWIAVAAIAAAWg");
	this.shape_2.setTransform(-50.7,138.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgTAyQgKgDgGgIQgHgHgDgKQgDgJAAgMQAAgKADgLQADgKAHgIQAGgHAKgFQAJgEAMAAQAJAAAIACQAJADAGAEQAGAFAEAHQAEAHABAKIgXAAQgBgKgHgFQgGgFgKAAIgIACQgFABgEAFQgFADgCAIQgDAHAAALIABANQACAGADAGQADAEAGAEQAFADAGAAQAKAAAHgHQAHgGABgLIAXAAQgDAUgMALQgMALgVAAQgLAAgJgFg");
	this.shape_3.setTransform(-58.725,140.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAaA0QgFgDgBgHQgHAHgKADQgJADgKAAQgGAAgHgCQgGgCgGgEQgEgDgDgGQgDgGAAgHQAAgLAEgFQADgHAGgCIAMgFIAPgCIALgCIAKgBQAEgCADgDQADgCgBgFQABgFgDgCQgCgDgDgBIgHgCIgGgBQgKAAgGAEQgGAEgBAJIgXAAQABgKADgHQAFgHAGgEQAHgEAIgBQAJgCAIAAQAHAAAIACQAGABAHAEQAGAEADAFQAEAGAAAIIAAA1IABAGQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADAAIADgBIAAAQIgDABIgEABIgEABIgEAAQgGAAgFgDgAAFAEIgOACIgIACIgGADQgCACgBADQgCADAAAEQAAAEACADIAGAEIAGACIAHABIAHgBQAFgBAEgDQADgCAEgEQACgDAAgGIAAgRQgFADgIABg");
	this.shape_4.setTransform(-69.8,140.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgzBJIAAiOIAWAAIAAAOIABAAQAEgJAJgEQAJgEAJAAQAMAAAJAFQAKAEAGAHQAGAIADAKQADAKAAAMQAAAKgDAJQgDAKgFAHQgGAIgIAFQgJAEgLAAIgJgBIgKgDIgJgFIgGgHIgBAAIAAA0gAgVgsQgHALAAAQQAAAIACAHQABAGAEAEQAEAFAFADQAGADAGAAQAIAAAFgDQAGgEADgFQAEgFABgFQACgHAAgHQAAgHgCgHQgCgGgEgFQgDgFgGgEQgFgDgHAAQgOAAgHAKg");
	this.shape_5.setTransform(-81.525,142.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAaA0QgFgDgBgHQgHAHgKADQgJADgJAAQgIAAgGgCQgHgCgFgEQgEgDgDgGQgDgGAAgHQAAgLADgFQAEgHAGgCIANgFIAOgCIALgCIAKgBQAFgCACgDQACgCABgFQgBgFgCgCQgCgDgDgBIgHgCIgHgBQgJAAgGAEQgHAEAAAJIgYAAQACgKAEgHQAEgHAGgEQAHgEAJgBQAHgCAJAAQAHAAAHACQAIABAGAEQAGAEAEAFQADAGAAAIIAAA1IABAGQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIACAAIADgBIAAAQIgDABIgEABIgEABIgDAAQgIAAgEgDgAAFAEIgOACIgHACIgHADQgCACgBADQgCADAAAEQAAAEACADIAFAEIAHACIAHABIAIgBQAEgBAEgDQADgCADgEQADgDAAgGIAAgRQgGADgHABg");
	this.shape_6.setTransform(-93.4,140.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgTAyQgKgDgGgIQgHgHgDgKQgDgJAAgMQAAgKADgLQADgKAHgIQAGgHAKgFQAJgEAMAAQAJAAAIACQAJADAGAEQAGAFAEAHQAEAHABAKIgXAAQgBgKgHgFQgGgFgKAAIgIACQgFABgEAFQgFADgCAIQgDAHAAALIABANQACAGADAGQADAEAGAEQAFADAGAAQAKAAAHgHQAHgGABgLIAXAAQgDAUgMALQgMALgVAAQgLAAgJgFg");
	this.shape_7.setTransform(-104.875,140.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgcALIAAgVIA5AAIAAAVg");
	this.shape_8.setTransform(-114.475,140.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AAXBIIAAhCQgBgLgEgGQgFgFgKAAQgFAAgFACQgFADgDADQgDAEgCAEQgCAFAAAGIAAA9IgXAAIAAiPIAXAAIAAA2IABAAQAEgHAIgGQAJgEAJAAQARAAAKAJQAKAIAAASIAABHg");
	this.shape_9.setTransform(-124.225,138.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgPBIQgIgBgHgEQgGgEgFgGQgEgGgBgJIAXAAQABAEACADQADAEADABIAHACIAIABQAOAAAGgHQAHgHAAgNIAAgQIgBAAQgFAJgIAFQgIAFgJAAQgMAAgJgFQgJgEgGgHQgFgIgDgJQgDgKAAgLQAAgLADgJQAEgKAGgHQAGgHAJgEQAIgEAMAAQAIAAAJAEQAIAEAEAJIABAAIAAgPIAXAAIAABiQAAAYgNALQgOAMgYAAQgHAAgIgCgAgMg0QgFADgEAFQgDAGgBAGIgCANQAAAHACAGIAFAKQADAFAFADQAFADAHAAQAHAAAGgEQAFgDADgFQAEgEABgHIACgNIgCgNQgBgGgEgFQgDgFgFgCQgGgDgHAAQgHAAgFADg");
	this.shape_10.setTransform(-136.225,142.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgLBIIAAhoIAXAAIAABogAgLgxIAAgWIAXAAIAAAWg");
	this.shape_11.setTransform(-144.45,138.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AAhBIIAAhBIhBAAIAABBIgZAAIAAiPIAZAAIAAA6IBBAAIAAg6IAZAAIAACPg");
	this.shape_12.setTransform(-154.175,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highCapacity, new cjs.Rectangle(-163.8,123.9,135.5,28.799999999999983), null);


(lib.txt_fastPrintSpeed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgVA+QgKgCgHgFQgIgGgDgIQgEgIgBgLIAbAAQACAMAHAFQAJAFAKAAIAIgBIAJgCQAEgCADgDQADgDAAgGQgBgFgDgDQgEgEgFgCIgNgDIgOgDIgPgEQgGgDgGgDQgGgEgDgGQgDgGAAgKQAAgKAEgHQAGgGAHgFQAIgEAJgBQAJgCAIAAQAJAAAIACQAKACAGAEQAIAFAEAHQAFAIABAKIgdAAQgBgKgIgDQgHgEgIAAIgHABIgHACQgDABgDADQgCACAAAEQAAAFADADQAEADAFACIANAEIAOADIAPAEQAHACAFAEQAGADADAHQAEAGAAAJQAAALgFAIQgFAHgIAFQgIAFgKACQgKACgJAAQgLAAgKgDg");
	this.shape.setTransform(-36.9,174.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgcBSQgKgFgIgJQgHgJgEgMQgDgMAAgOQAAgRAFgLQAEgMAIgIQAHgIAKgDQAKgFAJAAIALACIAMADQAFACAFAEQAEAEAEAFIAAAAIAAg/IAbAAIAACpIgZAAIAAgQIgBAAQgFAKgLAFQgKAFgMAAQgOAAgLgFgAgPgRQgGAEgEAGQgEAHgCAHQgCAHAAAJQAAAIACAHQACAJAEAFQAEAGAHAEQAHAEAHgBQAKAAAGgDQAGgFAFgFQAEgHACgIQACgHAAgJQAAgUgJgKQgKgMgPAAQgJAAgHAEg");
	this.shape_1.setTransform(-51,172.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgYA8QgLgEgIgJQgIgJgEgMQgDgMAAgOQAAgMAEgMQAEgMAIgJQAHgJAMgFQAKgFANAAQAPAAALAGQAMAGAIAKQAHAKAEANQADANgBANIhaAAQAAAHACAHQACAHAEAFQAEAFAGADQAGADAIAAQAMAAAHgGQAIgFADgKIAaAAQgCAKgFAIQgGAIgHAFQgIAGgJACQgJADgKAAQgOAAgLgFgAAfgKQAAgGgCgGQgDgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgGADQgGACgEAFQgEAEgCAGQgDAGAAAHIA+AAIAAAAg");
	this.shape_2.setTransform(-64.6775,174.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgYA8QgLgEgIgJQgIgJgEgMQgDgMAAgOQAAgMAEgMQAEgMAIgJQAHgJAMgFQAKgFANAAQAPAAALAGQAMAGAIAKQAHAKAEANQADANgBANIhaAAQAAAHACAHQACAHAEAFQAEAFAGADQAGADAIAAQAMAAAHgGQAIgFADgKIAaAAQgCAKgFAIQgGAIgHAFQgIAGgJACQgJADgKAAQgOAAgLgFgAAfgKQAAgGgCgGQgDgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgGADQgGACgEAFQgEAEgCAGQgDAGAAAHIA+AAIAAAAg");
	this.shape_3.setTransform(-78.1775,174.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("Ag8BWIAAioIAaAAIAAARIAAAAQAGgLAKgEQAKgFALAAQAPAAALAFQALAFAHAJQAHAJAEAMQADAMAAAOQAAAMgDALQgDALgHAJQgGAJgKAGQgLAFgNAAIgLgBIgMgDIgKgGQgEgEgDgFIgBAAIAAA9gAgZg0QgJAMAAAUQAAAKACAHQADAHAEAGQAFAGAGADQAGAEAIAAQAJAAAGgEQAHgEAEgGQAEgGACgHIACgQQAAgIgCgIQgCgIgFgGQgEgGgHgEQgGgEgIAAQgQAAgJAMg");
	this.shape_4.setTransform(-92.125,177.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgZBWQgNgEgKgHQgJgIgFgLQgHgMAAgQIAeAAQABAKADAHQADAHAGAEQAGAFAHACQAJACAHAAQAKAAAHgCQAHgDAEgDQAFgEABgEQACgFAAgFQABgKgFgEQgEgFgFgCIgWgGIgdgIQgKgDgIgEQgHgEgEgGQgFgGgCgGIgBgNQAAgNAFgJQAFgKAJgGQAJgGALgDQALgDAMAAQANAAAMADQALAEAJAHQAJAGAFALQAGAKgBANIgdAAQgCgQgKgHQgJgHgPAAIgLABQgGABgEADQgFACgDAEQgDAFAAAGQAAAJAHAFQAFAGAJACIAHACIAOAEIAQAEIALADQAJADAGAEQAGAEAEAGQAEAGACAGQACAHABAHQgBAOgFAKQgHAKgJAHQgJAGgMADQgNADgNAAQgNAAgNgDg");
	this.shape_5.setTransform(-107.7,172.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AABBPQgFgCgEgEQgEgEgBgGIgCgOIAAhHIgUAAIAAgVIAUAAIAAglIAaAAIAAAlIAZAAIAAAVIgZAAIAABBIABAHIABAFIAEADIAIABIAFAAIAGAAIAAAVIgJAAIgJABQgKAAgHgCg");
	this.shape_6.setTransform(-126.675,173.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AAbA/IAAhMQgBgOgFgIQgGgGgMAAQgGAAgGADQgFACgEAFQgEAEgCAGQgCAGAAAGIAABIIgbAAIAAh6IAZAAIAAASIABABQAGgLAKgFQAKgHALAAQAVAAALALQAMALAAAVIAABTg");
	this.shape_7.setTransform(-137.525,174.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgMBVIAAh6IAaAAIAAB6gAgMg6IAAgaIAaAAIAAAag");
	this.shape_8.setTransform(-147.55,172.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgjA/IAAh6IAaAAIAAAYIAAAAQABgFADgFIAIgJQAFgDAGgDQAFgCAHgBIAHABIADAAIAAAaIgGAAIgFgBQgHABgHACQgFADgFAFQgEAGgDAIQgCAHAAAKIAAA6g");
	this.shape_9.setTransform(-153.95,174.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AhCBVIAAipIBLAAQASAAALAFQAMAFAGAIQAGAIACAJQADAKAAAHQAAAIgDAKQgCAJgGAHQgGAIgMAFQgLAFgSAAIgtAAIAABBgAgkgEIArAAIAKgBQAGgBAEgEQAEgDADgFQADgGAAgIQAAgIgDgGQgCgFgEgDQgEgEgFgBIgMgBIgrAAg");
	this.shape_10.setTransform(-166.625,172.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AAVBVIgQgBQgGgBgFgEQgHgDgCgGQgEgGAAgKIAAhLIgWAAIAAgYIAWAAIAAgnIAiAAIAAAnIAaAAIAAAYIgaAAIAAA/QAAAJAEADQACADAJAAIAHAAIAEgBIAAAcIgKABg");
	this.shape_11.setTransform(-82.25,143.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgUBCQgLgCgIgGQgJgFgFgJQgGgIAAgNIAiAAQAAAFACAFQADAEADACIAJAEIAJABIAIAAIAIgDQADgCACgDQADgDAAgFQAAgIgLgEQgLgEgSgEIgPgEQgHgDgGgDQgGgEgDgFQgEgGAAgJQAAgMAFgIQAFgIAIgFQAIgFAKgCQAKgBAKAAQAKAAAKACQAKACAIAEQAHAFAGAIQAFAIABAMIgiAAQgBgKgHgEQgHgEgIAAIgHABIgGABIgFAEQgCACAAAEQAAAFADADQAEADAFACIAMADIAPAEIAPAEQAIACAFAFQAGADAEAGQADAGAAAJQAAANgFAJQgFAIgIAGQgJAFgKACQgLACgLAAQgKAAgLgCg");
	this.shape_12.setTransform(-93.075,145.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgjBCQgIgCgGgFQgGgFgEgHQgDgIAAgKQAAgLAEgHQAEgHAGgEQAGgDAIgDIAQgDIAPgCIANgCQAGgCAEgDQADgCAAgGQAAgGgCgDQgCgEgDgBQgDgCgEgBIgJgBQgKAAgGAFQgGAEgBALIgjAAQAAgNAGgIQAGgIAIgFQAJgFAKgCQALgCAKAAIAUABQAKABAIAEQAIAEAFAIQAGAHAAALIAABDIABARQABAIACAEIgkAAIgCgGIAAgHQgJAJgMAEQgKADgMAAQgJAAgIgCgAARAEIgHACIgIACIgIABIgHACIgHADQgDACgCAEQgCADAAAFQAAAFACADQACADADACIAHADIAIAAQAKAAAGgDQAFgEADgEQADgFAAgFIABgIIAAgOg");
	this.shape_13.setTransform(-106.875,145.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("Ag+BZIAAixIB9AAIAAAgIhWAAIAAAqIBKAAIAAAdIhKAAIAABKg");
	this.shape_14.setTransform(-120.675,143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fastPrintSpeed, new cjs.Rectangle(-177.5,125.2,149.6,63.499999999999986), null);


(lib.txt_enhance = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape.setTransform(39.7861,135.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgXA9QgMgFgIgIQgIgJgFgLQgEgMAAgOQAAgNAEgNQAEgMAIgJQAJgJALgFQAMgFAOAAQALAAALADQAKADAIAFQAIAGAFAJQAFAJABAMIgiAAQgDgVgWAAQgHAAgGADQgFAEgEAGQgDAGgCAHQgBAHAAAGQAAAHABAGQACAHADAGQADAGAGADQAFAEAHAAQANAAAGgHQAHgHABgLIAhAAQgDAYgQANQgQANgZAAQgMAAgMgEg");
	this.shape_1.setTransform(25.575,135.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_2.setTransform(10.875,135.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgiA/QgHgCgGgEQgGgFgDgHQgDgHAAgKQAAgKADgHQAEgHAGgEQAGgDAIgCIAOgDIAQgCIAMgCQAGgCADgDQADgCAAgGQAAgFgBgDQgDgEgDgBQgCgCgFgBIgIAAQgJAAgFAEQgHAEAAAKIgjAAQABgMAGgIQAEgIAJgEQAIgFAKgCQAKgCAKAAIATABQAKABAIAEQAIAEAFAHQAEAHABALIAABAIABAQQAAAHADAEIgjAAIgCgGIAAgGQgJAJgKADQgKADgMAAQgJAAgIgCgAARAEIgHACIgIACIgHABIgHACIgHADQgDACgBADQgDADAAAFQAAAFADADQABADADACIAHACIAIABQAJAAAFgEQAGgDACgFQADgEABgFIAAgIIAAgMg");
	this.shape_3.setTransform(-3.8,135.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAYBWIAAhGQAAgQgFgGQgFgIgMAAQgNAAgGAJQgGAHAAATIAABBIgiAAIAAirIAiAAIAABBIABAAQAGgLAKgFQAJgFAKAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAAKIAABNg");
	this.shape_4.setTransform(-18.275,133.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_5.setTransform(-33.075,135.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_6.setTransform(-47.6639,135.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgZA8QgLgFgIgJQgHgIgEgMQgEgMAAgOQAAgMAEgMQAEgMAHgJQAIgJALgFQAMgFANAAQAPAAALAFQALAFAIAJQAIAJAEAMQADAMAAAMQAAAOgDAMQgEAMgIAIQgIAJgLAFQgLAFgPAAQgNAAgMgFgAgOgrQgHADgFAHQgGAGgCAIQgEAJAAAKQAAAMAEAIQACAJAGAGQAFAGAHADQAHADAHAAQAIAAAHgDQAHgDAFgGQAGgGADgJQADgIAAgMQAAgKgDgJQgDgIgGgGQgFgHgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(-69.275,135.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AASBQIgOgBQgFgBgDgCQgEgEgBgEQgCgGAAgJIAAhOIgVAAIAAgSIAVAAIAAglIATAAIAAAlIAZAAIAAASIgZAAIAABNIABAFQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIAFACIAIAAIAJAAIAAASg");
	this.shape_8.setTransform(-80.775,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enhance, new cjs.Rectangle(-86.3,116.6,135.8,32.599999999999994), null);


(lib.txt_engineered = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgcBSQgLgFgHgJQgHgIgEgNQgEgMAAgOQAAgQAFgMQAFgMAHgIQAHgIAKgDQAKgFAKAAIALABIALAEQAGADAEAEQAFADADAFIABAAIAAhAIAbAAIAACrIgaAAIAAgRIAAAAQgGALgKAEQgKAGgLAAQgPgBgLgFgAgOgRQgHAEgFAGQgDAHgCAHQgCAIgBAJQAAAHADAIQACAIAEAFQAEAGAHAEQAGADAIAAQAJAAAHgDQAGgEAEgGQAFgHACgHQACgIAAgIQAAgVgKgKQgIgMgRAAQgIAAgGAEg");
	this.shape.setTransform(49.75,123.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgYA8QgLgEgIgJQgHgJgEgLQgEgMAAgPQAAgMAEgMQAEgMAIgJQAIgJALgFQALgGANAAQAOABAMAFQAMAHAHAKQAIAKADANQAEANgCANIhaAAQAAAHACAHQACAHAEAEQAEAFAHAEQAGACAHAAQAMAAAIgEQAHgGAEgKIAaAAQgDAKgFAIQgFAIgIAGQgHAFgJADQgKADgKAAQgNAAgMgGgAAggKQgBgHgCgGQgCgFgEgFQgEgEgGgDQgFgDgHAAQgHAAgFADQgGACgFAFQgEAEgCAGQgDAGAAAHIA/AAIAAAAg");
	this.shape_1.setTransform(36.2475,125.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgjBAIAAh7IAZAAIAAAYIABAAQABgFADgFIAIgJQAFgEAGgCQAGgDAGAAIAHABIADAAIAAAaIgGAAIgFgBQgHAAgHADQgGADgEAFQgEAGgCAIQgDAHAAAKIAAA7g");
	this.shape_2.setTransform(26.125,125.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgYA8QgLgEgIgJQgHgJgEgLQgEgMAAgPQAAgMAEgMQAEgMAIgJQAIgJALgFQALgGANAAQAOABAMAFQAMAHAHAKQAIAKADANQAEANgCANIhaAAQAAAHACAHQACAHAEAEQAEAFAHAEQAGACAHAAQAMAAAIgEQAHgGAEgKIAaAAQgDAKgFAIQgFAIgIAGQgHAFgJADQgKADgKAAQgNAAgMgGgAAggKQgBgHgCgGQgCgFgEgFQgEgEgGgDQgFgDgHAAQgHAAgFADQgGACgFAFQgEAEgCAGQgDAGAAAHIA/AAIAAAAg");
	this.shape_3.setTransform(14.5475,125.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgYA8QgLgEgIgJQgHgJgEgLQgEgMAAgPQAAgMAEgMQAEgMAIgJQAIgJALgFQALgGANAAQAOABAMAFQAMAHAHAKQAIAKADANQAEANgCANIhaAAQAAAHACAHQACAHAEAEQAEAFAHAEQAGACAHAAQAMAAAIgEQAHgGAEgKIAaAAQgDAKgFAIQgFAIgIAGQgHAFgJADQgKADgKAAQgNAAgMgGgAAggKQgBgHgCgGQgCgFgEgFQgEgEgGgDQgFgDgHAAQgHAAgFADQgGACgFAFQgEAEgCAGQgDAGAAAHIA/AAIAAAAg");
	this.shape_4.setTransform(1.2475,125.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AAbBAIAAhNQgBgPgFgHQgGgGgNAAQgFAAgFACQgGADgEAEQgEAFgCAGQgCAGAAAHIAABIIgbAAIAAh7IAaAAIAAASIAAAAQAGgKAKgGQAKgGAMAAQAUAAALALQAMAKABAWIAABUg");
	this.shape_5.setTransform(-12.4,125.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgNBWIAAh7IAbAAIAAB7gAgNg7IAAgaIAbAAIAAAag");
	this.shape_6.setTransform(-22.175,123.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgSBWQgKgBgIgFQgHgFgGgHQgFgHgBgLIAbAAQACAGACADQADAEAEACQAEACAFAAIAJABQARAAAHgIQAIgIAAgQIAAgTQgGALgKAGQgKAFgLAAQgPAAgKgFQgKgFgHgJQgHgJgDgLQgDgMAAgNQAAgNADgLQAEgLAIgJQAHgIAKgFQALgFANAAQALAAAJAFQAKAFAGAKIAAgRIAbAAIAAB1QAAAcgPAOQgQANgdAAQgJAAgJgCgAgPg+QgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAHACAIQACAHAEAFQAEAFAGAEQAGAEAIAAQAJAAAGgEQAGgEAEgGQAEgFACgIIACgQQAAgIgCgHQgCgHgEgGQgEgGgGgDQgHgEgIAAQgIAAgHAEg");
	this.shape_7.setTransform(-32.375,127.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AAbBAIAAhNQAAgPgGgHQgGgGgMAAQgGAAgGACQgFADgEAEQgEAFgCAGQgCAGgBAHIAABIIgbAAIAAh7IAaAAIAAASIABAAQAGgKAKgGQAKgGALAAQAVAAALALQAMAKAAAWIAABUg");
	this.shape_8.setTransform(-46.1,125.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("Ag9BWIAAirIB6AAIAAAaIhdAAIAAAtIBWAAIAAAYIhWAAIAAAyIBfAAIAAAag");
	this.shape_9.setTransform(-60,123.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_engineered, new cjs.Rectangle(-70.1,106.5,129.7,32.599999999999994), null);


(lib.TSeries_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("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");
	this.shape.setTransform(-65.8266,160.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TSeries_Logo, new cjs.Rectangle(-139.3,126.9,146.3,74.5), null);


(lib.speedometer_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(3,1,1).p("AigDHIE/AAQAdgcAVgvQAqhegqhiQgSghghghQhEhBhRABQgpAAgwARQhgAhggBTQgpBsAoBZQAVAsAcAXg");
	this.shape.setTransform(3.4843,0.8684,0.7869,0.7869);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("ACaBpQgEAAgDgEQgDgCAAgFIAAgBQAAgEADgDQADgDAEAAIAiAAQAEAAADADQADADAAAEIAAABQAAAFgDACQgDAEgEAAgAi7BpQgEAAgDgEQgDgCAAgFIAAgBQAAgEADgDQADgDAEAAIAiAAQAEAAADADQADADAAAEIAAABQAAAFgDACQgDAEgEAAgABugDQgDAAgDgDIgBgBQgDgDAAgEQgBgEADgDIAYgZQADgCAFAAQADAAADADIABABQADADAAAEQABAFgDACIgZAZQgCACgDAAIgCAAgAh1gHIgYgYQgDgDAAgFQABgDADgDIABgBQADgDADAAQAFgBADADIAYAZQADADgBAEQAAADgDADIgBABQgDADgEAAIgCAAQgDAAgCgCgAgBgyQgEAAgDgDQgDgDAAgEIAAgiQAAgEADgDQADgDAEAAIABAAQAEAAACADQAEADAAAEIAAAiQAAAEgEADQgCADgEAAg");
	this.shape_1.setTransform(3.509,-4.0484,0.7869,0.7869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedometer_mc, new cjs.Rectangle(-16.1,-16.2,39.2,34.2), null);


(lib.printer_shdw = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.314,1],0,-2.9,0,3).s().p("ApmAeIAAg7ITNAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_shdw, new cjs.Rectangle(-61.5,-2.9,123,5.9), null);


(lib.printer_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_01();
	this.instance.setTransform(-122.45,-68.35,0.7375,0.7375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_01_1, new cjs.Rectangle(-122.4,-68.3,236,236), null);


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

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-66.3,-74.95,0.7544,0.7544);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-66.3,-74.9,123,159.2), null);


(lib.needle_body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(2,1,1).p("AAhAAQAAAOgKAJQgKAKgNAAQgNAAgJgKQgKgJAAgOQAAgMAKgKQAJgKANAAQANAAAKAKQAKAKAAAMg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.needle_body, new cjs.Rectangle(-4.3,-4.3,8.7,8.7), null);


(lib.needle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("Ag+AvIBvhnIAGgEQAFgEACACQADADgKALIhkBwg");
	this.shape.setTransform(-0.0654,-0.0583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.needle, new cjs.Rectangle(-6.3,-6.4,12.5,12.8), null);


(lib.learnMore_CTA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape.setTransform(34.225,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_1.setTransform(26.625,-0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgHADgIQADgIAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFADAIQADAIAAAHQAAAJgDAHQgDAIgFAFQgFAGgHADQgHADgJAAQgIAAgHgDgAgJgXQgEACgCAEQgDADgBAFIgBAJIABAKQABAFADADQACAEAEACQAEADAFAAQAGAAAEgDQAEgCADgEQACgDABgFIABgKIgBgJQgBgFgCgDQgDgEgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(18.125,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAnIAAg2IgTA2IgNAAIgTg2IAAAAIAAA2IgQAAIAAhNIAYAAIASA1IARg1IAYAAIAABNg");
	this.shape_3.setTransform(8.775,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAnIgggzIAAAAIAAAzIgQAAIAAhNIARAAIAgAzIAAgzIAQAAIAABNg");
	this.shape_4.setTransform(-3.525,-0.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_5.setTransform(-11.475,-0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIgFgRIgdAAIgGARIgRAAIAdhNIARAAIAdBNgAgJAJIATAAIgKgcIAAAAg");
	this.shape_6.setTransform(-19.425,-0.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape_7.setTransform(-26.675,-0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAnIAAhNIASAAIAAA/IAlAAIAAAOg");
	this.shape_8.setTransform(-33.475,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0044F0").s().p("AmTCUQg8AAAAg9IAAitQAAg9A8AAIMnAAQA8AAAAA9IAACtQAAA9g8AAg");
	this.shape_9.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.learnMore_CTA, new cjs.Rectangle(-46.3,-14.7,92.69999999999999,29.5), null);


(lib.ink_drop = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(2,1,1).p("AAAjLQAMANAMANQAPAQAPARQAYAbAUAgQAOAYANAYQARAfAEAgQACAPAAAOQAAANgCAOQgGAlgXAfQgWAegkANQgkAOgogDQgngDgggVQghgVgNghQgPgjACgoQACgdAKgaQAOgmAVgfQARgaASgYQAUgbAWgaQAMgOALgNg");
	this.shape.setTransform(-19.7321,-0.9727);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ink_drop, new cjs.Rectangle(-35.5,-22.4,31.6,42.9), null);


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
	this.shape.graphics.f("#2A3283").s().p("AA7A3QgLgEgHgIQgHgIgEgLQgEgKAAgNQAAgMAEgLQAEgLAHgIQAHgJALgFQAKgEANAAQAOAAALAEQAKAFAHAJQAHAIAFALQADALAAAMQAAANgDAKQgFALgHAIQgHAIgKAEQgLAGgOgBQgNABgKgGgABEgjQgGAEgEAFQgDAGgCAHQgCAHAAAHIACAOIAFAMQAEAGAGADQAGAEAIAAQAJAAAGgEQAGgDAEgGQADgGACgGQACgIAAgGQAAgHgCgHQgCgHgDgGQgEgFgGgEQgGgDgJAAQgIAAgGADgAgwA6QgIgDgHgEQgHgFgEgJQgEgHAAgLIAYAAQAAAGACAFQADAEAEACQACACAFACIAKABIAHgBQAEAAADgDQAEgBACgDQACgCAAgFQAAgEgDgEIgHgEIgkgKQgHgCgFgEQgEgDgDgGQgDgFAAgIQAAgJAEgHQADgGAHgFQAGgEAHgCQAIgCAIAAQAJAAAIACQAIACAGAEQAGAFAEAHQAEAHAAAKIgYAAQAAgFgCgEIgEgFQgEgDgEAAIgIAAIgHAAQgDAAgCACQgDACgBADQgCACAAADQAAAFACABQABACAEACIAlAKIAKAFQAGADAEAGQAEAHAAAKQAAAHgEAGQgCAIgGAFQgGAEgJAEQgIACgMAAQgKAAgJgCgADdA6IgwhNIAABNIgYAAIAAhyIAZAAIAwBLIABAAIAAhLIAXAAIAABygAi4A6IAAhyIA0AAQALAAAHADQAIACAFAGQAEAFADAHQACAGAAAHQAAAHgCAIQgDAFgEAFQgFAGgIADQgHACgLAAIgaAAIAAAqgAiegCIAcAAIAHgDQADgCACgEQABgCAAgHQAAgFgBgEQgCgCgDgDIgHgCIgcgBgAkfA6IAAhyIBWAAIAAAVIg8AAIAAAYIA4AAIAAASIg4AAIAAAdIA+AAIAAAWgAEPgiIgFgCIgDgEIAAgGIAAgFIADgEQACgCADAAIAEgBIAFABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIADAEIABAFIgBAGIgDAEIgEACIgFABIgEgBgAEPg3IgDACIgCADIAAAEIAAAFIACACIADADIAEAAIAEAAIADgDIACgCIAAgFIAAgEIgCgDIgDgCIgEgBIgEABgAEWgnIgDgGIgCAAIAAAGIgDAAIAAgOIAFAAIAEABQABABAAAAQAAAAABAAQAAABAAAAQAAABAAABIAAABIgBABIgBABIgCAAIAEAGgAERgvIACAAIACAAIABgCIAAgBIgBAAIgEAAg");
	this.shape.setTransform(-8.525,-6.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-37.3,-12.6,57.599999999999994,12.1), null);


(lib.frame_06_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_06();
	this.instance.setTransform(-149.85,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_06_1, new cjs.Rectangle(-149.8,-124.3,160,600), null);


(lib.frame_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_01();
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_01_1, new cjs.Rectangle(-150,-124.5,300,600), null);


(lib.endFrame_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.endFrame();
	this.instance.setTransform(-158.95,173.55,0.5274,0.5274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endFrame_mc, new cjs.Rectangle(-158.9,173.6,168.70000000000002,96.50000000000003), null);


(lib.speedometer_Needle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.needle();
	this.instance.setTransform(4.6,-2.4,0.7523,0.7523,0,0,0,0.2,-0.1);

	this.instance_1 = new lib.needle_body();
	this.instance_1.setTransform(-1.3,3.5,0.7523,0.7523,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedometer_Needle, new cjs.Rectangle(-4.5,-7.1,13.6,13.8), null);


(lib.Speedometer_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// speedometer_Needle
	this.instance = new lib.speedometer_Needle();
	this.instance.setTransform(45.5,56.4,1,1,-98.526,0,0,-1.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:-1.3,regY:3.3,rotation:10.5663,x:45.45,y:56.35},17,cjs.Ease.quartInOut).wait(12).to({rotation:10.5663},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(209));

	// speedometer_mc
	this.instance_1 = new lib.speedometer_mc();
	this.instance_1.setTransform(41.85,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(209));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,30.9,39.10000000000001,34.199999999999996);


(lib.printer_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paper_shdw
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-4.1,0,3.9).s().p("Ap3AoIAAhQITvAAIAABQg");
	this.shape.setTransform(140.55,168.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(88).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(211));

	// paper_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");
	var mask_graphics_88 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");
	var mask_graphics_91 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:147.275,y:249.45}).wait(88).to({graphics:mask_graphics_88,x:147.275,y:249.45}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_91,x:147.275,y:249.45}).wait(1).to({graphics:null,x:0,y:0}).wait(211));

	// paper
	this.instance = new lib.paper_mc();
	this.instance.setTransform(146,79.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:242.2},33,cjs.Ease.quadInOut).wait(55).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(211));

	// Layer_2
	this.instance_1 = new lib.printer_shdw();
	this.instance_1.setTransform(141.15,164.3,1,0.4068);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:327.5,alpha:0.5781},33,cjs.Ease.quadInOut).wait(55).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(211));

	// printer_01
	this.instance_2 = new lib.printer_01_1();
	this.instance_2.setTransform(153.55,168.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(211));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,99.7,236.00000000000003,236);


(lib.inkDrip_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ink_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("ABGFEQhHgnAAhhQABgjAUgxQAphiBdhFIBJBdQBJBpgCA1QgBAmgUAmQgoBNhfADQgkAAgkgUg");
	var mask_graphics_44 = new cjs.Graphics().p("ABGFEQhHgnAAhhQABgjAUgxQAphiBdhFIBJBdQBJBpgCA1QgBAmgUAmQgoBNhfADQgkAAgkgUg");
	var mask_graphics_112 = new cjs.Graphics().p("ABGFEQhHgnAAhhQABgjAUgxQAphiBdhFIBJBdQBJBpgCA1QgBAmgUAmQgoBNhfADQgkAAgkgUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:29.7791,y:34.375}).wait(38).to({graphics:mask_graphics_44,x:29.7791,y:34.375}).wait(1).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_graphics_112,x:29.7791,y:34.375}).wait(1).to({graphics:null,x:0,y:0}).wait(190));

	// Layer_27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjUIAZgJQAggKAigEQBrgNBSA0QBWA4BdgcQBFgUAngwIgMHHIoLAUQgHhwgIhwQgPjggCgDg");
	this.shape.setTransform(44.15,94.896);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AkKAPQgPjggCgDIAZgJQAggKAigEQBqgNBTA0QBWA4BdgcQBFgUAngwIgMHHIoLAUIgPjgg");
	this.shape_1.setTransform(44.15,94.896);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjUIAZgKQAlgKAdgDQAMgCANAAQBbgFBJAuQARALASAIQBGAeBKgWQAegJAYgOQAegRAVgXQADAPgBASIgLGiIoLAUQgHh3gHhqQAAgDAAgEQgPjZgDgCg");
	this.shape_2.setTransform(44.1042,94.7298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjZgDgCIAZgKQAlgKAdgDIAZgCQBbgFBJAuQARALASAIQBGAeBKgWQAegJAYgOQAegRAVgXQADAPgBASIgLGiIoLAUIgOjhg");
	this.shape_3.setTransform(44.1042,94.7298);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIAZgJQAkgKAdgDQANgBAMAAQBbgEBJArQARALASAHQBGAcBKgWQAegIAYgOQAegQAVgXQAEAPgBASIgLGiIoKAVQgIh3gHhqQAAgDAAgEQgPjZgDgCg");
	this.shape_4.setTransform(44.1031,94.2368);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjZgDgCIAZgJQAkgKAdgDIAZgBQBbgEBJArQARALASAHQBGAcBKgWQAegIAYgOQAegQAVgXQAEAPgBASIgLGiIoKAVIgPjhg");
	this.shape_5.setTransform(44.1031,94.2368);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjXIAZgHQAkgIAcgDQANgBAMAAQBcgCBJAnQAQAKASAHQBFAXBKgVQAegIAZgNQAdgPAWgVQAFAPAAARIgMGiIoKAVQgIh2gHhqQAAgDAAgEQgPjZgDgDg");
	this.shape_6.setTransform(44.1,93.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AkJAMIAAgHQgPjZgDgDIAZgHQAkgIAdgDIAZgBQBbgCBJAnQAQAKASAHQBFAXBKgVQAegIAZgNQAdgPAXgVQADAPAAARIgKGiIoKAVIgQjgg");
	this.shape_7.setTransform(44.1,93.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjXIAZgGQAjgGAcgCQANAAAMAAQBbAABKAiQAPAJASAFQBGASBIgUQAfgIAZgLQAcgOAXgTQAGAPABAPIgMGiIgXAEInyATQgJh1gHhqQAAgEAAgDQgPjagDgDg");
	this.shape_8.setTransform(44.1,91.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjagDgDIAZgGQAkgGAcgCIAYAAQBbAABKAiQAQAJARAFQBFASBJgUQAfgIAZgLQAdgOAWgTQAGAPAAAPIgKGiIgYAEInyATIgQjfg");
	this.shape_9.setTransform(44.1,91.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAYgFQAjgDAcgBQAMAAAMABQBbADBJAaQAQAHASAEQBEALBJgSQAegIAZgKQAdgMAYgRQAHAPACAOIgLGjIgWAGInzATQgKh1gHhrQAAgDAAgDQgPjagDgDg");
	this.shape_10.setTransform(44.125,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjZgDgDIAYgFQAjgEAcAAIAYABQBbADBJAaQAQAHASADQBEANBJgUQAegHAZgKQAdgNAYgQQAHAPACAOIgLGjIgWAGInzATIgRjgg");
	this.shape_11.setTransform(44.125,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAXgCQAjgBAbABQAMAAAMABQBbAHBJASQAQAFARABQBEAEBHgSQAegHAbgIQAcgKAZgNQAKAPACALIgLGkIgUAIIn0ATQgLh0gHhrQAAgDAAgEQgPjagDgDg");
	this.shape_12.setTransform(44.15,87.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjagCgDIAWgCQAjgBAbABIAZABQBaAHBJASQAQAFARABQBDAEBIgSIA4gPQAcgKAagNQAJAPADALIgMGkIgTAIIn1ATQgKh0gHhrg");
	this.shape_13.setTransform(44.15,87.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAXABQAhACAbACQAMACAMACQBbALBIAHQAQADARgBQBCgHBHgQQAegHAbgFQAcgIAbgIQAMAOADAJIgLGlIgSAKIn1ATQgMhzgHhrQAAgEAAgDQgPjagDgEg");
	this.shape_14.setTransform(44.15,85.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjZgCgEIAWABIA8AEIAYAEQBbALBJAHQAPADARgBQBCgHBHgQIA5gMIA3gQQALAPAEAIIgMGlIgRAKIn1ATQgMhzgHhsg");
	this.shape_15.setTransform(44.15,85.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAWAEQAhAGAaAFQALACAMACQBaARBKgGQAPABAQgEQBBgRBGgPQAegGAbgDQAcgFAdgDQAOAOAFAFIgLGmIgPANIn3ATQgNhygHhrQAAgEAAgDQgPjagDgFg");
	this.shape_16.setTransform(44.175,81.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AkJAQIAAgHQgPjagDgFIAWAEIA7ALIAXAEQBaARBKgGQAPABAQgEQBBgRBGgPQAegGAbgDQAcgFAdgDIATATIgLGmIgPANIn3ATQgNhygHhrg");
	this.shape_17.setTransform(44.175,81.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIAVAHQAgAMAZAGQAMADALADQBaAWBJgTQAQgDAPgGQBAgeBEgNQAegGAdABQAbgCAfACQARAOAGACIgLGnIgMAQIn4ATQgPhxgHhrQAAgEAAgDQgPjbgDgFg");
	this.shape_18.setTransform(44.175,78.3306);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("AkJASIAAgHQgPjbgDgFIAVAHQAgAMAZAGIAXAGQBaAWBJgTQAQgDAPgGQBAgeBEgNQAegGAdABQAbgCAfACQARAOAGACIgLGnIgMAQIn4ATQgPhxgHhrg");
	this.shape_19.setTransform(44.175,78.3306);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjPIAVALQAeAQAYAJQALAEAMAEQBZAcBKgiQAPgGAOgKQA+gsBEgLQAegFAdAEQAbABAhAJQAVAOAHgDIgLGpIgJATIn6AUQgQhwgHhsQAAgDAAgEQgPjbgDgFg");
	this.shape_20.setTransform(44.2,73.8611);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("AkKAYIAAgHQgOjbgDgFIAUALQAfAQAYAJIAXAIQBZAcBJgiQAQgGAOgKQA+gsBEgLQAegFAdAEQAbABAhAJQAVAOAHgDIgLGpIgJATIn6AUQgQhwgIhsg");
	this.shape_21.setTransform(44.2,73.8611);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjIIATAPQAeAWAXALQALAGALAFQBZAjBJgzQAPgKAOgOQA8g7BCgJQAegEAfAIQAZAFAkAPQAaAOAIgHIgLGqIgFAXIn8AUQgShugHhtQAAgDAAgEQgPjbgDgGg");
	this.shape_22.setTransform(44.225,68.8083);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A3283").s().p("AkJAgIAAgHQgPjbgDgGIATAPQAeAWAXALIAWALQBZAjBJgzQAPgKAOgOQA8g7BCgJQAegEAfAIQAZAFAkAPQAaAOAIgHIgLGqIgFAXIn8AUQgShugHhtg");
	this.shape_23.setTransform(44.225,68.8083);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2A3283").ss(2,1,1).p("Akbi/IAZAbQAfAfAhAQQBqA0BVhuQBUhwBjAmQAZAJAnAXQAdAPALgNIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_24.setTransform(44.25,63.2187);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A3283").s().p("AkJAjQgQjggCgCIAZAbQAfAfAiAQQBpA0BVhuQBVhwBiAmQAZAJAnAXQAdAPALgNIgMHHIoLAUIgOjhg");
	this.shape_25.setTransform(44.25,63.2187);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjRIAWAQQAcATAfAKQBmAhBhg+QBmg+BbATQAYADAiAKQAYAGAMgQIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_26.setTransform(44.25,59.8861);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A3283").s().p("AkJARQgQjggCgCIAWAQQAcATAgAKQBkAhBig+QBlg+BbATQAZADAiAKQAXAGANgQIgMHHIoLAUIgOjhg");
	this.shape_27.setTransform(44.25,59.8861);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIATAIQAZAIAfAGQBgAQBtgWQB0gSBUABQAYgBAdgCQAUAAAOgUIgMHHIoLAUQgHhwgIhwQgPjhgCgCg");
	this.shape_28.setTransform(44.25,55.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A3283").s().p("AkJAOQgQjhgCgCIAUAIQAZAIAeAGQBhAQBsgWQB0gSBUABIA1gCQAUgBAOgUIgMHHIoLAUIgOjgg");
	this.shape_29.setTransform(44.25,55.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIASAAQAXABAdABQBeAEB0AKQCBAQBOgLQAYgFAZgMQARgFAOgXIgMHHIoLAUQgHhwgHhwQgPjhgDgCg");
	this.shape_30.setTransform(44.2,52.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A3283").s().p("AkKANQgOjfgDgDIASAAIA0ACQBdADB1ALQCAARBPgMQAYgFAZgMQAQgGAPgWIgMHHIoLAUIgPjhg");
	this.shape_31.setTransform(44.2,52.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIAQgGQAWgGAcgCQBbgGB7AkQCKAsBKgXQAXgIAXgTQAOgKAPgYIgMHHIoLAUQgHhwgHhwQgPjhgDgCg");
	this.shape_32.setTransform(44.2,49.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A3283").s().p("AkKANQgOjggDgCIAQgGQAWgFAcgDQBbgGB7AkQCKAsBKgWQAXgJAXgSQAOgLAPgYIgMHHIoLAUIgPjhg");
	this.shape_33.setTransform(44.2,49.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjTIAPgKQAVgLAbgEQBZgOCAA3QCQA/BHgeQAYgKAUgYQAMgOAQgZIgMHHIoLAUQgHhwgHhxQgPjggDgCg");
	this.shape_34.setTransform(44.2,47.358);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A3283").s().p("AkKAPQgOjggDgCIAPgKQAVgLAbgEQBYgOCBA3QCQA/BHgeQAXgKAVgYQAMgOAQgZIgMHHIoLAUIgPjhg");
	this.shape_35.setTransform(44.2,47.358);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjPIAOgMQAUgOAbgGQBYgSCDBCQCUBLBGgjQAXgLATgcQALgPAQgaIgMHHIoLAUQgHhwgHhxQgPjggDgCg");
	this.shape_36.setTransform(44.2,45.7725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A3283").s().p("AkKATQgOjggDgCIAOgMQAUgOAbgGQBYgSCDBCQCUBLBFgjQAYgLASgcQALgPARgaIgMHHIoLAUIgPjhg");
	this.shape_37.setTransform(44.2,45.7725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBXgUCEBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgHhxQgPjggDgCg");
	this.shape_38.setTransform(44.2,45.2515);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2A3283").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_39.setTransform(44.2,45.2515);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},19).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},67).to({state:[]},1).wait(190));

	// inkDrop
	this.instance = new lib.ink_drop();
	this.instance.setTransform(63.6,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(190));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.1,26.8,31.6,42.900000000000006);


// stage content:
(lib.Epson_TSeries_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(303));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(40.45,18.35,0.9135,0.9135,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9609},7).wait(245).to({alpha:0},0).to({alpha:1},6).wait(45));

	// T_Series_Logo
	this.instance_1 = new lib.TSeries_Logo();
	this.instance_1.setTransform(146.65,188.05,0.9868,0.9868,0,0,0,-1.2,166.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).to({alpha:1},6).wait(45));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_266 = new cjs.Graphics().p("AmTCTQg8AAAAg7IAAAAIAAivQAAg7A8AAIAAAAIMnAAQA8AAAAA7IAAAAIAACvQAAA7g8AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(266).to({graphics:mask_graphics_266,x:81.3748,y:441.0499}).wait(37));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.5,-6.9,10.4,6.8).s().p("AmaGPIJjumIDSCJIpjOmg");
	this.shape_1.setTransform(21.125,423.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.3,6.8).s().p("AmaGPIJiumIDTCJIpkOmg");
	this.shape_2.setTransform(22.25,423.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.5,-6.9,10.4,6.8).s().p("AmbGPIJkunIDTCJIplOog");
	this.shape_3.setTransform(25.575,424.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.4,6.8).s().p("AmbGRIJkuqIDTCKIplOpg");
	this.shape_4.setTransform(31.15,425.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.5,6.9).s().p("AmdGSIJnutIDUCKIpoOtg");
	this.shape_5.setTransform(38.925,427.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.5,6.9).s().p("AmfGUIJquxIDVCLIpqOwg");
	this.shape_6.setTransform(48.95,430.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.7,-7,10.6,6.9).s().p("AmhGWIJtu2IDWCMIptO1g");
	this.shape_7.setTransform(61.2,433.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7,10.6,7).s().p("AmjGYIJxu7IDWCMIpxO7g");
	this.shape_8.setTransform(75.65,437.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7.1,10.8,7).s().p("AmmGaIJ1vAIDYCMIp1PBg");
	this.shape_9.setTransform(91.775,441.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7.1,10.8,7.1).s().p("AmoGdIJ4vHIDZCOIp4PHg");
	this.shape_10.setTransform(106.225,444.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.1,10.9,7.1).s().p("AmqGfIJ7vLIDaCOIp7PLg");
	this.shape_11.setTransform(118.475,448.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.2,10.9,7.1).s().p("AmsGhIJ+vQIDbCQIp+PPg");
	this.shape_12.setTransform(128.5,450.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.2,11,7.1).s().p("AmtGiIKAvTIDbCRIqAPSg");
	this.shape_13.setTransform(136.275,452.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmuGjIKBvVIDcCRIqBPTg");
	this.shape_14.setTransform(141.825,454);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGjIKDvVIDcCQIqCPVg");
	this.shape_15.setTransform(145.175,454.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGjIKCvWIDdCRIqDPVg");
	this.shape_16.setTransform(146.3,455.15);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},266).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(22));

	// learnMore_CTA
	this.instance_2 = new lib.learnMore_CTA();
	this.instance_2.setTransform(81.35,441.05);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({alpha:1},8).wait(37));

	// endFrame_mc
	this.instance_3 = new lib.endFrame_mc();
	this.instance_3.setTransform(140.8,160.8,0.8265,0.8265);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({scaleX:0.9518,scaleY:0.9518,x:150.4,y:133.8,alpha:1},6,cjs.Ease.quadOut).wait(45));

	// Layer_35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_211 = new cjs.Graphics().p("AILXmQgFgEAAgHQAAgGAFgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AggAhQgNgNAAgUQAAgSANgOQAOgOASAAQATAAAOAOQANAOAAASQAAAUgNANQgOANgTAAQgSAAgOgNg");
	var mask_1_graphics_213 = new cjs.Graphics().p("Ag0A1QgWgWAAgfQAAgeAWgXQAWgVAeAAQAfAAAWAVQAWAXAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AhHBHQgdgdAAgqQAAgpAdgeQAegeApABQAqgBAeAeQAdAeAAApQAAAqgdAdQgeAegqAAQgpAAgegeg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AhXBZQglglAAg0QAAgyAlgmQAkglAzAAQA0AAAlAlQAkAmAAAyQAAA0gkAlQglAlg0AAQgzAAgkglg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AhnBoQgrgrAAg9QAAg8ArgrQArgrA8AAQA9AAAqArQAsArAAA8QAAA9gsArQgqArg9AAQg8AAgrgrg");
	var mask_1_graphics_217 = new cjs.Graphics().p("Ah1B1QgwgwAAhFQAAhEAwgxQAxgxBEABQBFgBAwAxQAyAxAABEQAABFgyAwQgwAyhFAAQhEAAgxgyg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AiBCCQg1g2AAhMQAAhLA1g2QA2g2BLAAQBMAAA1A2QA2A2AABLQAABMg2A2Qg1A2hMAAQhLAAg2g2g");
	var mask_1_graphics_219 = new cjs.Graphics().p("AiLCMQg6g6gBhSQABhRA6g7QA5g6BSAAQBSAAA6A6QA7A7AABRQAABSg7A6Qg6A7hSAAQhSAAg5g7g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AiUCVQg+g9AAhYQAAhWA+g+QA9g+BXAAQBXAAA+A+QA+A+AABWQAABYg+A9Qg+A+hXAAQhXAAg9g+g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AibCcQhBhAAAhcQAAhbBBhBQBAhBBbAAQBbAABBBBQBBBBAABbQAABchBBAQhBBChbAAQhbAAhAhCg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AihCiQhDhDAAhfQAAheBDhEQBDhDBeAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBDhfAAQheAAhDhDg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AimCmQhEhEAAhiQAAhgBEhFQBFhFBhAAQBhAABFBFQBFBFAABgQAABihFBEQhFBFhhAAQhhAAhFhFg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AinCoQhGhFgBhjQABhiBGhGQBFhGBiAAQBiAABGBGQBGBGAABiQAABjhGBFQhGBHhiAAQhiAAhFhHg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AEAYQQhGhGAAhjQAAhjBGhGQBGhGBjAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAQhjAAhGhHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_1_graphics_211,x:54.9871,y:151.5015}).wait(1).to({graphics:mask_1_graphics_212,x:108.475,y:301.3}).wait(1).to({graphics:mask_1_graphics_213,x:108.55,y:301.2}).wait(1).to({graphics:mask_1_graphics_214,x:108.625,y:301.1}).wait(1).to({graphics:mask_1_graphics_215,x:108.675,y:301}).wait(1).to({graphics:mask_1_graphics_216,x:108.75,y:300.925}).wait(1).to({graphics:mask_1_graphics_217,x:108.8,y:300.85}).wait(1).to({graphics:mask_1_graphics_218,x:108.85,y:300.775}).wait(1).to({graphics:mask_1_graphics_219,x:108.9,y:300.725}).wait(1).to({graphics:mask_1_graphics_220,x:108.925,y:300.675}).wait(1).to({graphics:mask_1_graphics_221,x:108.95,y:300.65}).wait(1).to({graphics:mask_1_graphics_222,x:108.975,y:300.6}).wait(1).to({graphics:mask_1_graphics_223,x:109,y:300.575}).wait(1).to({graphics:mask_1_graphics_224,x:109,y:300.575}).wait(1).to({graphics:mask_1_graphics_225,x:66.4683,y:162.2631}).wait(27).to({graphics:null,x:0,y:0}).wait(51));

	// zoomIn
	this.instance_4 = new lib.zoomIn_1();
	this.instance_4.setTransform(108.7,301,0.5202,0.5202,0,0,0,-11.8,-12.6);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).wait(34).to({alpha:0},6).to({_off:true},1).wait(51));

	// txt_precisionCore
	this.instance_5 = new lib.txt_precisionCore();
	this.instance_5.setTransform(145.65,216.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(204).to({_off:false},0).to({alpha:1},7).wait(34).to({alpha:0},6).to({_off:true},1).wait(51));

	// Frame_06
	this.instance_6 = new lib.frame_06_1();
	this.instance_6.setTransform(150.4,100.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({y:124.8,alpha:1},12,cjs.Ease.quadOut).wait(38).to({alpha:0},6).to({_off:true},1).wait(51));

	// inkDrip_Anim
	this.instance_7 = new lib.inkDrip_Anim("single",0);
	this.instance_7.setTransform(79.9,97.45,1.4068,1.4068,0,0,0,43.9,49.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({y:119.85,alpha:1,mode:"synched",loop:false},5,cjs.Ease.quadOut).wait(45).to({mode:"single",startPosition:112},0).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_inkCartridges
	this.instance_8 = new lib.txt_inkCartridges();
	this.instance_8.setTransform(172.6,61.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:176.2,alpha:1},5,cjs.Ease.quadOut).wait(34).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_highCapacity
	this.instance_9 = new lib.txt_highCapacity();
	this.instance_9.setTransform(162.55,34.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(139).to({_off:false},0).to({x:174.55,alpha:1},5,cjs.Ease.quadOut).wait(45).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_fastPrintSpeed
	this.instance_10 = new lib.txt_fastPrintSpeed();
	this.instance_10.setTransform(166.25,48.55);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:182.25,alpha:1},6,cjs.Ease.quadOut).wait(34).to({x:246.25,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// Speedometer_Anim
	this.instance_11 = new lib.Speedometer_Anim("single",0);
	this.instance_11.setTransform(67.5,131.2,1.7192,1.7192,0,0,0,45.4,48);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({x:79.5,alpha:1,mode:"synched",loop:false},6,cjs.Ease.quadOut).wait(34).to({mode:"single",startPosition:83},0).to({x:135.5,alpha:0,startPosition:93},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// Printer_Animation
	this.instance_12 = new lib.printer_animation("single",0);
	this.instance_12.setTransform(43.45,435.35,0.7144,0.7144,0,0,0,133.7,217.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({x:67.45,alpha:1,mode:"synched",loop:false},6,cjs.Ease.quadOut).wait(89).to({mode:"single",startPosition:91},0).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_engineered
	this.instance_13 = new lib.txt_engineered();
	this.instance_13.setTransform(74.4,70.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(42).to({_off:false},0).to({x:78.4,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:81.4,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(219));

	// txt_enhance
	this.instance_14 = new lib.txt_enhance();
	this.instance_14.setTransform(90,90.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).to({x:94,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:97,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(217));

	// Layer_7
	this.instance_15 = new lib.txt_theWay();
	this.instance_15.setTransform(48.8,253);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46).to({_off:false},0).to({x:52.8,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:55.6,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(215));

	// txt_work
	this.instance_16 = new lib.txt_work();
	this.instance_16.setTransform(54.75,110.7);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({x:58.75,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:61.75,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(213));

	// T_Series_Logo
	this.instance_17 = new lib.TSeries_Logo();
	this.instance_17.setTransform(150.4,63.55);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({_off:false},0).to({y:68.05,alpha:1},6,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(263));

	// frame_01
	this.instance_18 = new lib.frame_01_1();
	this.instance_18.setTransform(150,125.05);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},6,cjs.Ease.quadOut).wait(27).to({x:10.8},17,cjs.Ease.quadOut).wait(39).to({alpha:0},5).to({_off:true},1).wait(208));

	// background
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_17.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,276.5,359.2,324.5);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"endFrame.jpg", id:"endFrame"},
		{src:"frame_01.jpg", id:"frame_01"},
		{src:"frame_06.jpg", id:"frame_06"},
		{src:"paper.jpg", id:"paper"},
		{src:"printer_01.jpg", id:"printer_01"},
		{src:"zoomIn.jpg", id:"zoomIn"}
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
an.compositions['B61A9D64C8DF436F89671266C87EE568'] = {
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