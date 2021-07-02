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
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.frame_02 = function() {
	this.initialize(img.frame_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.frame_06 = function() {
	this.initialize(img.frame_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.shape.graphics.f("#2A3283").s().p("AgQARIAAghIAiAAIAAAhg");
	this.shape.setTransform(59.95,105.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AAZBZIgmg+IgRAQIAAAuIgdAAIAAixIAdAAIAABkIAygzIAjAAIgxAvIA2BRg");
	this.shape_1.setTransform(50.925,98.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AglBCIAAiAIAbAAIAAAZIAAAAQACgFADgFQAEgFAEgEQAFgEAGgDQAHgCAGAAIAHAAIAEABIAAAbIgGgBIgGAAQgIAAgGADQgGACgFAGQgEAGgDAIQgCAIAAAKIAAA9g");
	this.shape_2.setTransform(40.125,100.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgaA/QgMgFgJgJQgJgJgEgMQgEgNAAgPQAAgOAEgMQAEgNAJgJQAJgJAMgFQAMgFAOAAQAPAAANAFQAMAFAIAJQAIAJAFANQAEAMAAAOQAAAPgEANQgFAMgIAJQgIAJgMAFQgNAFgPAAQgOAAgMgFgAgPgpQgHAFgFAGQgEAGgDAIQgBAJAAAHQAAAIABAJQADAHAEAHQAFAGAHAFQAHADAIAAQAJAAAIgDQAGgFAFgGQAFgHACgHQACgJAAgIQAAgHgCgJQgCgIgFgGQgFgGgGgFQgIgDgJAAQgIAAgHADg");
	this.shape_3.setTransform(27.75,100.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAYBAIgYhfIAAAAIgXBfIgeAAIgoh/IAeAAIAZBfIABAAIAYhfIAcAAIAXBfIAAAAIAbhfIAdAAIgpB/g");
	this.shape_4.setTransform(10.925,100.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgsA2QgMgNAAgZIAAhRIAdAAIAABOQAAARAGAHQAHAHALAAQAIAAAGgDQAGgDAEgEQAEgFABgGQACgHAAgHIAAhKIAdAAIAACAIgcAAIAAgSIgBAAQgFAJgLAGQgKAGgKAAQgZAAgLgMg");
	this.shape_5.setTransform(-12.375,100.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgbA/QgMgFgIgJQgJgJgDgMQgFgNAAgPQAAgOAFgMQADgNAJgJQAIgJAMgFQANgFAOAAQAQAAALAFQANAFAIAJQAIAJAFANQAEAMAAAOQAAAPgEANQgFAMgIAJQgIAJgNAFQgLAFgQAAQgOAAgNgFgAgPgpQgIAFgEAGQgFAGgBAIQgDAJAAAHQAAAIADAJQABAHAFAHQAEAGAIAFQAGADAJAAQAKAAAGgDQAIgFAEgGQAEgHACgHQACgJAAgIQAAgHgCgJQgCgIgEgGQgEgGgIgFQgGgDgKAAQgJAAgGADg");
	this.shape_6.setTransform(-26.65,100.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgzBYIAAgYIAHACIAHABQAFAAADgCQADgBACgDIAEgFIADgHIADgKIgxiAIAfAAIAhBfIABAAIAhhfIAdAAIgyCHIgHARQgDAHgEAHQgFAGgIAEQgGADgMAAQgKAAgKgCg");
	this.shape_7.setTransform(-40.3,103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_work, new cjs.Rectangle(-48.3,81.3,113.3,33), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgRAqQgIgDgHgGQgGgGgEgIQgEgJABgKQgBgJAEgJQAEgIAGgGQAHgGAIgDQAJgDAIAAQAJAAAJADQAIADAHAGQAGAGAEAIQADAJAAAJQAAAKgDAJQgEAIgGAGQgHAGgIADQgJADgJAAQgIAAgJgDgAgNggQgGADgEAEQgFAFgDAHQgCAGAAAHQAAAIACAGQADAHAFAEQAEAFAGADQAHADAGAAQAHAAAGgDQAHgDAEgFQAFgEACgHQAEgGAAgIQAAgHgEgGQgCgHgFgFQgEgEgHgDQgGgDgHAAQgGAAgHADgAAKAZIgKgWIgHAAIAAAWIgKAAIAAgyIASAAQAJAAAGAEQAFADAAAIIgBAGIgDAEIgEACIgFABIANAWgAgHgDIAIAAQAEAAADgCQADgBAAgFIgBgDIgCgCIgEgBIgDAAIgIAAg");
	this.shape.setTransform(124.6,134.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgoB0QgPgIgKgMQgLgMgFgRQgFgRAAgUQAAgYAHgRQAGgQALgMQAKgLAOgGQAOgEAOAAIAQABIAQAFQAIAEAGAEQAHAGAEAHIABAAIAAhZIAnAAIAADxIglAAIAAgYIgBAAQgHAPgPAGQgPAIgQgBQgVAAgPgHgAgVgYQgJAFgGAJQgGAJgDAKQgCAMAAAMQAAALADALQADAKAGAJQAFAJAKAEQAJAFALABQANgBAJgFQAKgFAGgJQAGgJADgLQACgLAAgLQAAgegNgPQgNgQgWAAQgNAAgJAGg");
	this.shape_1.setTransform(72.375,172.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AArBYQgHgGgDgLQgMALgQAFQgQAFgPAAQgMAAgMgDQgKgDgJgGQgIgGgFgKQgEgKgBgNQABgQAFgLQAGgJAKgFQAKgGAMgCIAYgFIATgDIARgCQAHgCAEgEQAFgFgBgIQAAgIgDgFQgEgEgFgDIgLgDIgMgBQgQAAgLAHQgKAGgCAPIgmAAQABgSAHgKQAHgMALgGQALgHAOgDQAOgCAPAAQAMAAAMACQAMADAKAGQAKAGAHAKQAFAJAAAOIAABZQABAIACACQACAEAFAAIAEAAIAGgBIAAAbIgGACIgHABIgHABIgFAAQgMAAgIgEgAAJAHIgZADIgMADIgLAFQgEAEgCAFQgDAFAAAHQAAAHAEAEQAEAEAFADIALAEIALABIAOgCQAHgBAGgFQAHgEAFgGQAEgGAAgKIAAgcQgJAFgMACg");
	this.shape_2.setTransform(52.5,175.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgiBVQgQgGgLgNQgLgMgGgRQgFgQAAgVQAAgSAGgQQAFgRAMgNQAKgNAQgHQAQgIASABQAVgBARAJQAQAIALAPQALAOAFATQAFASgDATIiAAAQAAAKADAJQADAKAGAHQAGAHAIAEQAJAFALAAQARgBALgGQAKgIAFgPIAlAAQgDAPgIALQgHALgLAHQgKAIgNAFQgNADgPAAQgTABgQgIgAAsgPQAAgJgDgIQgEgJgFgGQgGgGgIgEQgIgEgKAAQgJAAgIADQgIAEgGAGQgGAHgEAIQgDAIgBAKIBZAAIAAAAg");
	this.shape_3.setTransform(32.4667,175.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAmB5IAAhuQAAgUgJgJQgIgKgRAAQgJAAgIAEQgHAEgGAGQgGAGgCAIQgDAIAAAKIAABnIgnAAIAAjxIAnAAIAABZIAAAAQAHgLAOgIQAPgIAQAAQAcAAARAPQARAPAAAdIAAB4g");
	this.shape_4.setTransform(12.1,172);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AACBwQgJgDgFgFQgFgGgCgIIgCgUIAAhmIgeAAIAAgdIAeAAIAAg1IAmAAIAAA1IAjAAIAAAdIgjAAIAABcIAAALIACAHQACADAEACIAKABIAJAAIAIgBIAAAeIgNABIgMABQgQAAgJgDg");
	this.shape_5.setTransform(-4.55,172.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAmBaIAAhtQgBgVgHgJQgJgKgRAAQgJAAgIAEQgIAEgFAGQgFAGgDAJQgEAIAAAKIAABmIgmAAIAAiuIAkAAIAAAZIABABQAJgOAOgJQAOgIARAAQAcAAARAPQARAPAAAeIAAB3g");
	this.shape_6.setTransform(-20.7,175.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgSB5IAAiuIAlAAIAACugAgShUIAAgkIAlAAIAAAkg");
	this.shape_7.setTransform(-35.525,172);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgyBaIAAiuIAkAAIAAAhIABAAQABgHAFgGQAFgHAGgGQAHgFAIgEQAJgDAJAAIAJAAIAFABIAAAlIgIgBIgIgBQgKAAgJAFQgIAEgHAHQgFAIgEALQgEALAAAOIAABTg");
	this.shape_8.setTransform(-45.325,175.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AhWB6IAAjvIAlAAIAAAYIAAAAQAIgPAPgHQAPgGAQAAQAUAAAQAHQAPAHAKANQALANAFARQAFARAAATQAAASgFAPQgEARgKANQgJAMgOAIQgOAIgUAAIgQgCIgQgFQgIgDgHgGQgGgFgEgHIgBAAIAABXgAgkhKQgNARAAAcQAAAOAEALQADAKAGAIQAHAIAJAFQAJAFALAAQANAAAJgFQAJgGAGgIQAGgJADgKQACgLAAgMQAAgMgDgLQgDgLgGgJQgGgIgJgFQgKgGgLAAQgYAAgMARg");
	this.shape_9.setTransform(-63.425,178.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgiBWQgRgHgLgMQgMgNgGgQQgGgRAAgVQAAgSAGgRQAGgRAMgNQAMgMARgHQAQgHATAAQAWAAARAIQARAJAKAPQALAOAFATQAFASgCAUIh9AAQABAXALALQAKAKAUAAQAOAAALgHQAKgHADgJIAqAAQgKAggVAOQgVANgeAAQgUAAgQgGgAgRgzQgIAEgFAGQgEAFgCAHIgCALIBNAAQgDgSgJgKQgJgJgRAAQgLAAgHAEg");
	this.shape_10.setTransform(110.4923,140.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("Ag3BaIAAivIAtAAIAAAiIAAAAQAEgJAGgHQAEgGAIgFQAIgGAIgCQAJgDAIAAIALACIAAAtIgIgCIgJgBQgNAAgJAFQgKAFgFAHQgFAHgCALQgCAKgBALIAABPg");
	this.shape_11.setTransform(95.1,140.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AglBWQgQgHgMgMQgMgMgGgRQgHgRAAgVQAAgUAHgRQAGgRAMgMQAMgMAQgHQARgGAUAAQAUAAARAGQARAHAMAMQAMAMAGARQAHARAAAUQAAAVgHARQgGARgMAMQgMAMgRAHQgRAGgUAAQgUAAgRgGgAgUgyQgIAFgFAIQgFAHgCALQgCAKAAAJQAAALACAKQACAKAFAIQAFAIAIAEQAIAFAMAAQAMAAAIgFQAJgEAEgIQAFgIACgKQACgKAAgLQAAgJgCgKQgCgLgFgHQgEgIgJgFQgIgFgMAAQgMAAgIAFg");
	this.shape_12.setTransform(77.275,140.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgrB1QgWgKgPgRQgQgRgIgWQgIgXAAgbQAAgaAIgXQAIgXAQgSQAPgRAWgKQAWgKAbAAQAUAAASAGQASAGAOALQAOALAJAQQAJAQADAVIg0AAQgBgJgFgHQgFgIgHgGQgHgFgJgEQgJgDgKAAQgRAAgMAHQgNAHgIAMQgIALgDAPQgEAPAAAPQAAAPAEAPQADAOAIAMQAIALANAHQAMAHARAAQAZAAANgPQAOgPADgYIA0AAQgCAXgJASQgIASgOANQgOANgTAHQgSAHgXAAQgbAAgWgKg");
	this.shape_13.setTransform(54.425,137.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AAiBaIAAhiQAAgWgHgKQgHgLgRAAQgTAAgIALQgJANAAAaIAABbIgwAAIAAivIAtAAIAAAZIABAAQAKgPAOgHQAOgHAPAAQATAAANAFQAMAFAHAKQAHAJADANQADAOAAAQIAABrg");
	this.shape_14.setTransform(31.825,140.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AglBWQgQgHgMgMQgMgMgGgRQgHgRAAgVQAAgUAHgRQAGgRAMgMQAMgMAQgHQARgGAUAAQAUAAARAGQARAHAMAMQAMAMAGARQAHARAAAUQAAAVgHARQgGARgMAMQgMAMgRAHQgRAGgUAAQgUAAgRgGgAgUgyQgIAFgFAIQgFAHgCALQgCAKAAAJQAAALACAKQACAKAFAIQAFAIAIAEQAIAFAMAAQAMAAAIgFQAJgEAEgIQAFgIACgKQACgKAAgLQAAgJgCgKQgCgLgFgHQgEgIgJgFQgIgFgMAAQgMAAgIAFg");
	this.shape_15.setTransform(11.425,140.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3283").s().p("AgXB5IAAivIAvAAIAACvgAgXhRIAAgnIAvAAIAAAng");
	this.shape_16.setTransform(-3.275,137.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AgcBZQgOgDgMgHQgLgHgHgMQgIgMAAgRIAtAAQAAAIAEAFQADAGAFADQAFAEAHACIANABIALgBIAKgEQAEgCADgEQADgFAAgGQAAgLgOgFQgPgGgZgFIgUgGQgKgDgIgEQgHgGgGgIQgEgIAAgLQAAgRAHgLQAGgLALgGQALgGANgDQAOgCAOAAQAOAAANACQANADAKAHQALAGAHALQAHAKACARIguAAQgCgOgIgFQgKgFgMAAIgJAAIgJADIgHAFQgCADAAAFQAAAHAFAEQAEAEAIACIAQAFIAUAEIAVAGQAKADAIAGQAIAFAFAIQAEAIAAAMQAAASgHALQgGAMgMAHQgLAHgOADQgPADgPAAQgOAAgPgDg");
	this.shape_17.setTransform(-16.75,140.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3283").s().p("AgXB5IAAivIAvAAIAACvgAgXhRIAAgnIAvAAIAAAng");
	this.shape_18.setTransform(-30.175,137.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("AgiBWQgPgHgMgMQgMgMgGgQQgHgRAAgTQABgUAFgRQAGgSAMgMQALgNARgHQAQgHAVAAQAPAAAPAEQAOAEAMAIQALAIAHANQAHAMACARIgwAAQgFgegfAAQgKAAgIAFQgHAFgFAJQgGAIgCAKQgBAKAAAJQAAAJABAKQADAKAEAIQAFAIAHAFQAIAFAKAAQASAAAJgJQAJgKADgQIAvAAQgGAigWATQgWASgjAAQgTAAgRgGg");
	this.shape_19.setTransform(-44.05,140.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AgiBWQgRgHgLgMQgMgNgGgQQgGgRAAgVQAAgSAGgRQAGgRAMgNQAMgMARgHQAQgHATAAQAWAAARAIQARAJAKAPQALAOAFATQAFASgCAUIh9AAQABAXALALQAKAKAUAAQAOAAALgHQAKgHADgJIAqAAQgKAggVAOQgVANgeAAQgUAAgQgGgAgRgzQgIAEgFAGQgEAFgCAHIgCALIBNAAQgDgSgJgKQgJgJgRAAQgLAAgHAEg");
	this.shape_20.setTransform(-63.7077,140.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("Ag4BaIAAivIAuAAIAAAiIAAAAQAEgJAGgHQAEgGAIgFQAIgGAIgCQAJgDAJAAIALACIAAAtIgJgCIgJgBQgOAAgJAFQgIAFgGAHQgFAHgCALQgCAKAAALIAABPg");
	this.shape_21.setTransform(-79.1,140.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("AhgB5IAAjxIBsAAQAXAAAQAGQAQAHAKALQAKALAFAOQAEAOABAOQgBAPgEAOQgFAOgKAKQgKALgQAGQgQAHgXAAIg3AAIAABXgAgrgGIAqAAIARgCQAIgBAGgEQAHgEAEgHQADgHAAgMQAAgLgDgHQgEgHgHgEQgGgEgIgCIgRgBIgqAAg");
	this.shape_22.setTransform(-97.15,137.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_precisionCore, new cjs.Rectangle(-112.1,113.4,244.6,81.1), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3283").s().p("AgYBOQgNgCgKgGQgKgHgGgKQgHgKAAgQIAoAAQAAAHADAFQACAFAFADQAEADAHACIAKABIAKgBIAJgDQAEgDADgDQACgEAAgGQABgJgNgFQgNgFgVgFIgTgFQgIgCgIgEQgHgFgDgHQgFgHAAgKQAAgPAGgJQAGgKAKgFQAJgGAMgCQAMgCAMAAQAMAAAMACQAMACAJAGQAJAGAHAJQAFAKABAOIgoAAQgBgMgIgFQgJgEgJAAIgIAAIgIACIgGAFQgCADgBAEQABAGAEAEQAEADAHACIAOAEIASAEIASAFQAJADAGAFQAIAEADAIQAFAHAAALQAAAPgHAKQgFALgLAGQgJAGgNADQgNACgNAAQgMAAgNgDg");
	this.shape.setTransform(72.3,79.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgeBLQgPgFgKgLQgKgLgGgPQgFgPAAgSQAAgQAGgPQAFgPALgLQAKgLAPgGQAOgGARAAQATAAAPAHQAPAIAJANQAKANAEAQQAEAQgBARIhvAAQABAVAKAJQAJAKARAAQANAAAJgHQAKgGACgIIAlAAQgJAcgSAMQgTAMgaAAQgRAAgPgGgAgPgtQgHADgEAGQgEAFgCAFIgCAKIBEAAQgDgQgHgIQgIgIgPAAQgKAAgGADg");
	this.shape_1.setTransform(55.76,79.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgaBqQgMgDgJgGQgKgGgGgKQgGgJgCgNIArAAQACAMAJAEQAJAFAKAAQASAAAIgLQAJgKgBgRIAAgUIgBAAQgGAMgNAGQgNAGgMAAQgSAAgMgGQgNgHgIgKQgIgLgEgNQgDgOAAgQQgBgPAFgOQAEgOAIgKQAJgLAMgGQANgGAQAAQAOAAAMAFQALAGAHANIABAAIAAgUIApAAIAACPQAAAKgDAMQgDAMgIAKQgIAKgQAHQgQAHgZAAQgMAAgMgCgAgOhIQgHAEgEAGQgEAGgDAIQgBAIAAAJIABAQQACAIAEAHQAEAFAHAFQAGAEAJAAQAJAAAHgEQAHgDAEgGQAFgFACgIQADgIgBgIQAAgJgBgJQgCgJgFgGQgDgHgIgEQgHgDgKAAQgIAAgGADg");
	this.shape_2.setTransform(37.85,81.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgnBmQgNgHgIgLQgJgMgEgPQgEgPgBgQQABgPAEgOQAEgOAJgLQAJgLAMgHQANgHARAAQANAAAMAGQAMAGAIALIABAAIAAhOIAqAAIAADVIgpAAIAAgUIgBAAQgHANgMAFQgMAGgOAAQgSAAgNgHgAgPgRQgHAEgFAHQgEAGgCAJQgCAJAAAJQAAAJACAJQACAJAFAHQAFAHAGAFQAIAEAIAAQALAAAHgEQAHgEAEgHQAEgHACgJQABgJAAgKQAAgJgBgJQgCgJgEgGQgFgHgGgEQgHgEgLAAQgJAAgHAEg");
	this.shape_3.setTransform(19.65,76.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgUBrIAAiaIApAAIAACagAgUhHIAAgjIApAAIAAAjg");
	this.shape_4.setTransform(7.075,76.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgxBPIAAiZIApAAIAAAdIAAAAQADgIAFgGQAEgGAHgEQAHgFAHgCQAIgCAIAAIAJABIAAAoIgHgBIgIgBQgMAAgIAEQgIAEgFAHQgEAGgCAJQgCAJAAAKIAABFg");
	this.shape_5.setTransform(-1.725,78.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAGBkQgIgCgGgDQgHgFgEgGQgEgIAAgLIAAhaIgaAAIAAgdIAaAAIAAguIAqAAIAAAuIAeAAIAAAdIgeAAIAABLQAAAKADAEQADAEAMAAIAGgBIAGAAIAAAhIgMABIgMAAg");
	this.shape_6.setTransform(-13.65,76.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgxBPIAAiZIApAAIAAAdIAAAAQADgIAFgGQAEgGAHgEQAHgFAHgCQAIgCAIAAIAJABIAAAoIgHgBIgIgBQgMAAgIAEQgIAEgFAHQgEAGgCAJQgCAJAAAKIAABFg");
	this.shape_7.setTransform(-23.725,78.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgqBOQgKgCgHgGQgHgGgEgIQgEgJAAgMQAAgNAEgJQAFgIAHgFQAIgEAJgDIATgEIATgCIAPgDQAIgCAEgDQAEgDAAgHQAAgHgDgEQgCgEgEgCQgDgDgFAAIgLgBQgLAAgIAFQgHAGgBAMIgqAAQAAgPAHgJQAHgKAKgGQAKgGANgDQAMgCAMAAIAYABQAMACAKAFQAJAFAHAIQAGAIAAAPIAABPIABAUQABAJADAFIgrAAIgCgHIgBgIQgKALgOAEQgMAEgPAAQgLAAgJgDgAAVAFIgJADIgKABIgJACIgJACIgIAEQgEADgCADQgCAEAAAGQAAAGACAEQACAEAEACIAIADIAKABQAMAAAHgEQAHgEADgGQADgGABgGIABgKIAAgPg");
	this.shape_8.setTransform(-38.925,79.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgdBLQgOgFgLgLQgJgKgHgPQgFgOAAgSQAAgRAFgPQAFgPALgMQAKgLAOgGQAPgGARAAQAOAAANADQANAEAKAHQAKAHAGALQAHALAAAPIgpAAQgFgagbAAQgIAAgIAEQgGAFgFAHQgEAIgCAIIgCARIACARQACAIAEAHQAEAHAHAFQAGAFAJAAQAQAAAIgJQAIgJACgOIApAAQgEAfgTAQQgVAQgeAAQgRAAgOgGg");
	this.shape_9.setTransform(-55.75,79.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AAZBrIgphFIgRAQIAAA1IgqAAIAAjVIAqAAIAAByIA1g3IAyAAIg6A4IBABig");
	this.shape_10.setTransform(-80.175,76.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AAeBPIAAhWQAAgTgGgKQgGgJgPAAQgRAAgHAKQgIALAAAXIAABQIgqAAIAAiZIAoAAIAAAVIABAAQAIgNANgGQALgGAOAAQARAAALAEQALAFAGAIQAHAIACAMQACAMAAAOIAABeg");
	this.shape_11.setTransform(-98.6,78.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgUBrIAAiaIApAAIAACagAgUhHIAAgjIApAAIAAAjg");
	this.shape_12.setTransform(-111.225,76.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inkCartridges, new cjs.Rectangle(-117.5,55.4,202.2,40.4), null);


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
	this.shape.graphics.f("#2A3283").s().p("Ag6BlIAAgbIAIABIAHABQAGAAAEgCQADgBADgDIAEgGIADgJIAEgLIg4iSIAkAAIAlBtIABAAIAlhtIAiAAIg5CaIgIATQgEAJgFAHQgFAHgIAEQgJAFgMAAQgMAAgLgCg");
	this.shape.setTransform(70.825,76.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AACBeQgHgDgFgEQgEgFgCgHIgBgQIAAhWIgZAAIAAgYIAZAAIAAgsIAfAAIAAAsIAdAAIAAAYIgdAAIAABNIAAAJIACAHQACACADABIAJACIAGgBIAHgBIAAAZIgKACIgLAAQgNABgHgDg");
	this.shape_1.setTransform(58.325,71.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgPBmIAAiTIAfAAIAACTgAgPhGIAAgfIAfAAIAAAfg");
	this.shape_2.setTransform(50.175,70.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgbBHQgOgFgJgKQgJgKgFgOQgEgOgBgQQABgQAEgPQAFgOAIgLQAKgKAOgHQANgFARAAQANAAALACQAMAEAJAGQAJAHAGAKQAFAKACAOIghAAQgCgOgJgHQgJgHgOAAQgFAAgHACQgHADgGAFQgGAGgEAKQgEAKAAARQAAAIACAKQACAIAFAIQAFAHAHAFQAHAEAKAAQAOAAAKgJQAIgJADgQIAhAAQgFAdgSAPQgQAQgdAAQgRAAgMgHg");
	this.shape_3.setTransform(38.65,73.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AA1BOQgKAAgGgEQgHgFgCgKQgJAKgPAEQgNAEgNABQgKgBgJgCQgJgDgHgFQgHgFgEgJQgFgHAAgMQABgNAFgIQAFgKAHgDQAJgFAKgCIAVgEIAPgCIAOgCQAGgCAEgEQAEgDAAgHQgBgGgDgEQgDgFgEgBIgKgDIgJgBQgOAAgIAFQgJAHgBALIghAAQABgOAGgJQAGgKAJgFQAKgGALgDQALgBANAAQAKAAAKABQALADAJAFQAHAFAGAIQAFAIAAAMIAABLQAAAFABAEQACACAFAAIADAAIAFgBIAAAXIgFABIgFACIgGABgAAHAFIgUADIgKADIgJAEQgDADgDAFQgCAEAAAGQAAAFADAEQAEAEAEACIAJADIAKABIALgCQAGgBAGgEQAFgDAEgFQAEgFgBgIIAAgYQgHAEgLABg");
	this.shape_4.setTransform(22.95,73.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AhIBnIAAjJIAfAAIAAAUIAAAAQAHgNANgFQAMgGANAAQARAAANAGQANAGAJALQAIALAFAOQAEAOAAAQQAAAPgEANQgEAOgIALQgIAKgLAHQgMAGgRAAIgNgBIgOgEIgMgHQgFgFgEgGIAAAAIAABKgAgeg+QgLAOAAAYQAAALADAJQADAJAFAHQAFAHAIAEQAIAEAJAAQALAAAHgFQAIgEAFgIQAFgHACgIQACgKAAgJQAAgKgCgKQgDgJgFgHQgFgIgIgEQgIgEgJAAQgUAAgKAOg");
	this.shape_5.setTransform(6.2,75.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AA1BOQgKAAgHgEQgGgFgCgKQgKAKgOAEQgNAEgNABQgKgBgJgCQgJgDgHgFQgHgFgFgJQgEgHAAgMQAAgNAGgIQAEgKAIgDQAJgFAKgCIAUgEIAQgCIAOgCQAGgCAEgEQAEgDgBgHQAAgGgCgEQgDgFgFgBIgKgDIgJgBQgOAAgJAFQgIAHgCALIggAAQABgOAGgJQAGgKAJgFQAJgGAMgDQAMgBAMAAQAKAAAKABQALADAJAFQAHAFAGAIQAFAIAAAMIAABLQAAAFACAEQABACAEAAIAEAAIAEgBIAAAXIgEABIgGACIgFABgAAHAFIgUADIgLADIgIAEQgDADgDAFQgCAEAAAGQAAAFADAEQADAEAFACIAKADIAJABIAKgCQAHgBAGgEQAFgDAEgFQADgFAAgIIAAgYQgHAEgLABg");
	this.shape_6.setTransform(-10.65,73.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgcBHQgNgFgJgKQgJgKgFgOQgFgOABgQQgBgQAFgPQAEgOAKgLQAJgKANgHQAOgFARAAQANAAAMACQALAEAJAGQAJAHAFAKQAHAKAAAOIggAAQgCgOgJgHQgJgHgNAAQgGAAgHACQgHADgGAFQgGAGgEAKQgEAKAAARQAAAIACAKQACAIAFAIQAFAHAHAFQAHAEAKAAQAOAAAJgJQAKgJACgQIAgAAQgEAdgRAPQgRAQgdAAQgRAAgNgHg");
	this.shape_7.setTransform(-27,73.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgoAQIAAgfIBRAAIAAAfg");
	this.shape_8.setTransform(-40.675,72.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AAgBmIAAhdQAAgRgHgHQgHgIgPAAQgHAAgGADQgHADgFAFQgEAGgDAGQgCAHAAAIIAABXIghAAIAAjLIAhAAIAABLIAAAAQAGgJAMgHQAMgGANAAQAZAAAOAMQAOAMAAAYIAABmg");
	this.shape_9.setTransform(-54.575,70.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgWBmQgLgCgKgFQgJgGgGgJQgGgIgCgNIAhAAQACAHADAEQADAEAFADQAEACAHABIAKAAQAUAAAJgJQAJgKAAgSIAAgXIgBAAQgGANgMAGQgMAHgNAAQgRAAgMgGQgNgGgIgLQgIgKgEgNQgDgOAAgQQAAgPAEgNQAFgOAIgKQAJgKAMgGQANgGAPAAQANAAALAGQANAGAFAMIABAAIAAgUIAhAAIAACLQAAAhgTAQQgTARgiAAQgKAAgMgDgAgRhKQgIAFgFAHQgEAHgCAKQgCAJAAAJQAAAJADAJQACAIAEAGQAFAHAHAEQAIAFAJAAQALAAAHgFQAIgEAEgHQAFgHACgJQACgJAAgKQAAgJgCgJQgDgJgEgHQgFgGgHgEQgIgEgKAAQgKAAgHAEg");
	this.shape_10.setTransform(-71.7,75.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgPBmIAAiTIAfAAIAACTgAgPhGIAAgfIAfAAIAAAfg");
	this.shape_11.setTransform(-83.475,70.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AAuBmIAAhcIhbAAIAABcIgkAAIAAjLIAkAAIAABRIBbAAIAAhRIAkAAIAADLg");
	this.shape_12.setTransform(-97.375,70.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highCapacity, new cjs.Rectangle(-110,50.5,191.1,38.7), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgaBOQgNgDgJgHQgJgHgFgKQgFgKgBgNIAiAAQACAPAKAGQAJAGANAAIALgBIAMgDQAFgCAEgEQADgEAAgHQgBgGgEgFQgFgEgHgCIgQgEIgRgEIgSgGQgJgCgHgFQgHgFgEgIQgEgHAAgMQAAgNAGgIQAGgJAJgFQAKgFALgCQAMgCAKAAQALAAALACQALADAJAFQAIAGAGAJQAGAJACANIgkAAQgCgMgJgEQgJgEgKAAIgJAAIgJACIgHAFQgDADAAAFQAAAHAEAEQAEADAHADIAPAEIATAEIASAFQAJADAHAFQAHAEAEAIQAFAIAAALQAAAOgHAKQgGAJgKAGQgKAGgMADQgMACgMAAQgOAAgMgDg");
	this.shape.setTransform(90.975,79.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgjBmQgOgGgJgLQgIgMgFgPQgFgPAAgRQAAgVAGgOQAFgPAKgKQAKgKAMgFQAMgEANAAIANACIAOADQAHADAGAFQAGAFADAGIACAAIAAhOIAhAAIAADTIggAAIAAgUIAAAAQgIANgNAGQgNAGgOAAQgSgBgNgGgAgSgVQgJAEgFAJQgFAHgCAKQgCAKgBAKQABAKACAJQACAKAGAIQAFAHAIAEQAIAFAKAAQALAAAIgFQAJgFAFgHQAFgJADgJQADgJAAgLQAAgagMgNQgLgOgUAAQgLAAgIAFg");
	this.shape_1.setTransform(74.1,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgeBMQgOgGgKgLQgJgLgFgPQgFgPAAgSQAAgPAFgPQAFgPAKgLQAJgLAOgHQAOgGAQAAQATAAAOAHQAOAIAKAMQAKANAEAQQAEARgCAQIhwAAQAAAJACAIQADAJAFAGQAFAGAIAEQAHAEAKAAQAPAAAJgHQAJgGAFgNIAgAAQgDAMgGAKQgHAKgJAHQgJAHgMADQgLADgNAAQgRAAgOgFgAAngNQAAgIgDgHQgDgHgFgGQgFgGgHgDQgHgDgJAAQgIAAgHADQgHADgFAFQgGAGgDAHQgDAIAAAIIBOAAIAAAAg");
	this.shape_2.setTransform(57.7058,79.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgeBMQgOgGgKgLQgJgLgFgPQgFgPAAgSQAAgPAFgPQAFgPAKgLQAJgLAOgHQAOgGAQAAQATAAAOAHQAOAIAKAMQAKANAEAQQAEARgCAQIhwAAQAAAJACAIQADAJAFAGQAFAGAIAEQAHAEAKAAQAPAAAJgHQAJgGAFgNIAgAAQgDAMgGAKQgHAKgJAHQgJAHgMADQgLADgNAAQgRAAgOgFgAAngNQAAgIgDgHQgDgHgFgGQgFgGgHgDQgHgDgJAAQgIAAgHADQgHADgFAFQgGAGgDAHQgDAIAAAIIBOAAIAAAAg");
	this.shape_3.setTransform(41.6058,79.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AhLBsIAAjTIAgAAIAAAVIAAAAQAIgNAMgGQANgGAOAAQASAAAOAHQAOAGAJALQAIALAFAPQAEAPAAARQAAAQgEAOQgEAOgIALQgIAMgNAGQgMAHgRAAIgOgBIgOgFQgHgDgGgEQgGgFgEgGIAAAAIAABNgAgghBQgLAPAAAZQAAALADAKQADAJAGAIQAFAHAIAEQAIAEAKAAQALAAAIgFQAIgEAGgIQAFgIACgIQACgKAAgKQAAgLgCgKQgDgJgFgIQgGgIgIgEQgIgFgKAAQgVAAgLAPg");
	this.shape_4.setTransform(24.925,81.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgfBrQgQgFgMgIQgMgKgHgPQgIgOAAgUIAlAAQAAAMAFAKQAEAIAHAFQAIAGAJACQAKADAKAAQANAAAIgDQAJgDAFgEQAGgFACgGQADgFAAgGQAAgMgGgGQgFgGgHgCIgbgJIgkgJQgNgEgJgEQgKgHgFgHQgFgHgDgHQgCgJAAgIQAAgQAHgMQAHgMALgHQALgJAOgDQAOgDAOgBQAQAAAPAEQAOAFAMAJQALAIAGANQAHAMAAASIglAAQgCgVgNgJQgMgJgSAAIgOACQgHACgFACQgGADgEAGQgDAGAAAHQAAAMAGAGQAHAGAMAEIAJADIASAEIAUAGIANADQALAEAIAFQAHAFAGAIQAFAGACAJQADAJAAAHQAAATgHANQgIAMgMAIQgMAIgPAEQgPADgQABQgRgBgQgEg");
	this.shape_5.setTransform(6.225,76.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AABBiQgHgCgEgFQgFgFgCgHIgCgRIAAhaIgZAAIAAgaIAZAAIAAguIAhAAIAAAuIAfAAIAAAaIgfAAIAABRIABAJIACAHQACADADABIAJABIAHAAIAHgBIAAAaIgLABIgLABQgNAAgJgDg");
	this.shape_6.setTransform(-15.925,77.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AAiBPIAAhgQgBgSgHgIQgHgIgQAAQgHAAgHADQgHADgFAFQgEAGgDAHQgDAIAAAIIAABaIgiAAIAAiZIAgAAIAAAXIABAAQAIgNAMgHQANgHAOAAQAZAAAPANQAPANAAAaIAABpg");
	this.shape_7.setTransform(-28.775,79.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgQBqIAAiZIAhAAIAACZgAgQhKIAAgfIAhAAIAAAfg");
	this.shape_8.setTransform(-40.45,76.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgsBPIAAiZIAgAAIAAAeIAAAAQACgHAEgFQAEgGAGgFQAGgFAHgDQAIgDAHAAIAJAAIAEABIAAAgIgHgBIgIAAQgIAAgIADQgHAEgGAHQgFAGgDAKQgDAKAAAMIAABJg");
	this.shape_9.setTransform(-47.775,79.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AhSBqIAAjTIBdAAQAXgBAOAHQAOAGAIAKQAIAKADAMQACALAAALQAAAJgCALQgDAMgIAJQgIAKgOAGQgOAHgXgBIg4AAIAABSgAgtgFIA2AAIANgBQAGgDAGgDQAFgEAEgHQADgHAAgKQAAgKgDgHQgDgHgFgEQgFgEgGgCIgOgBIg3AAg");
	this.shape_10.setTransform(-62.925,76.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AAGBkQgIgBgGgFQgHgDgEgIQgEgHAAgMIAAhZIgaAAIAAgdIAaAAIAAguIAqAAIAAAuIAfAAIAAAdIgfAAIAABLQAAALADADQAEAEALAAIAGgBIAHgBIAAAiIgMAAIgNABg");
	this.shape_11.setTransform(-86.875,77.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgYBOQgNgCgKgGQgKgHgGgKQgHgKgBgQIApAAQAAAHADAFQADAFAEADQAFADAGACIAKABIAKgBIAJgDQAEgDACgDQADgEAAgGQAAgJgMgFQgNgFgWgFIgSgEQgIgDgIgEQgGgFgFgHQgEgHAAgKQAAgPAGgJQAGgKAKgFQAJgGAMgCQAMgCAMAAQAMAAAMACQALACAKAGQAJAGAGAJQAGAKACAOIgpAAQgBgMgIgFQgIgEgKAAIgJABIgHABIgGAFQgCADgBAEQABAGAEAEQAEADAHADIAOADIASAEIASAFQAIADAHAFQAHAEAFAIQADAHAAALQABAPgHAKQgGALgJAGQgLAGgMADQgMACgOAAQgMAAgNgDg");
	this.shape_12.setTransform(-99.85,79.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgqBOQgKgCgHgGQgHgGgEgIQgEgJAAgMQAAgNAEgIQAFgJAHgFQAIgEAJgDIATgEIATgCIAPgDQAHgCAFgDQAEgDAAgHQAAgHgDgEQgCgEgEgCIgIgDIgLgBQgLAAgIAFQgHAGgBAMIgqAAQAAgPAHgJQAHgKAKgGQAKgGANgDQAMgCAMAAIAYABQAMACAJAFQAKAFAHAIQAGAJAAAOIAABPIABAUQABAJADAFIgrAAIgCgHIgBgIQgKALgOAEQgMAEgPAAQgLAAgJgDgAAVAFIgJADIgKABIgJACIgJACIgIAEQgEADgCADQgCAEAAAGQAAAGACAEQACAEAEACIAIADIAKABQAMAAAHgEQAGgEAEgGQADgGABgGIABgKIAAgPg");
	this.shape_13.setTransform(-116.325,79.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AhKBrIAAjVICVAAIAAAoIhmAAIAAAxIBYAAIAAAjIhYAAIAABZg");
	this.shape_14.setTransform(-132.75,76.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fastPrintSpeed, new cjs.Rectangle(-144.7,55.6,245.5,40.49999999999999), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgrBZIgMgBIAAgeIALABIALABQAHgBADgGQAEgEAAgGQAAgFgCgDIguh8IAnAAIAdBaIAAAAIAdhaIAmAAIg4CVQgGAQgJAGQgLAIgSgBg");
	this.shape.setTransform(113.725,92.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgkBDQgIgCgGgFQgHgFgDgHQgEgIAAgKQAAgLAFgHQAEgIAGgEQAGgDAIgDIAQgDIAQgCIAOgCQAGgCAEgDQADgDgBgFQABgGgCgEQgCgDgEgCQgDgCgEgBIgJAAQgJAAgHAEQgGAFgBALIgkAAQABgNAFgJQAFgIAJgFQAJgFALgCQALgDAKAAIAUACQAKABAJAEQAIAEAGAIQAFAHAAAMIAABEIABARQABAIADAEIglAAIgCgGIgBgGQgJAIgMAEQgKAEgNAAQgJAAgIgDgAASAFIgHACIgJABIgHABIgIACIgIAEQgDACgBADQgCAEAAAFQAAAFACADQABADADACIAIADIAJABQAJAAAGgEQAGgEADgFQADgFAAgFIAAgIIAAgNg");
	this.shape_1.setTransform(99.9,90.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AAXBCIgXhYIAAAAIgWBYIgmAAIgqiDIAnAAIAYBZIAAAAIAWhZIAjAAIAWBZIABAAIAYhZIAmAAIgqCDg");
	this.shape_2.setTransform(82.575,90.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgZBBQgNgFgJgKQgIgJgFgNQgFgMAAgQQAAgOAFgMQAFgNAJgKQAJgJAMgFQANgGAOAAQARAAAMAHQANAGAIALQAIALADAPQAEAOgBAOIhfAAQABASAIAIQAJAIAOAAQALAAAIgGQAIgGACgGIAgAAQgIAYgQAKQgQALgWAAQgPAAgMgFgAgNgmQgGADgDAEQgDAEgCAFIgCAJIA7AAQgDgOgGgHQgHgHgNAAQgIAAgGADg");
	this.shape_3.setTransform(58.2861,90.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAaBbIAAhKQAAgRgGgHQgFgIgNAAQgNAAgHAJQgHAIAAAUIAABFIgkAAIAAi1IAkAAIAABEIABAAQAHgLAKgFQALgGAKAAQAOAAAJAEQAKAEAFAHQAGAHACALQACAKAAALIAABRg");
	this.shape_4.setTransform(43.7,88.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AAVBXIgQgBQgHgCgFgDQgGgDgDgHQgDgFAAgLIAAhMIgXAAIAAgZIAXAAIAAgoIAjAAIAAAoIAbAAIAAAZIgbAAIAABAQAAAKADACQADADAJABIAGgBIAGgBIAAAdIgLABg");
	this.shape_5.setTransform(31.8,88.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgZBBQgNgFgJgKQgIgJgFgNQgFgMAAgQQAAgOAFgMQAFgNAJgKQAJgJAMgFQANgGAOAAQARAAAMAHQANAGAIALQAIALADAPQAEAOgBAOIhfAAQABASAIAIQAJAIAOAAQALAAAIgGQAIgGACgGIAgAAQgIAYgQAKQgQALgWAAQgPAAgMgFgAgNgmQgGADgDAEQgDAEgCAFIgCAJIA7AAQgDgOgGgHQgHgHgNAAQgIAAgGADg");
	this.shape_6.setTransform(13.5361,90.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgZBBQgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAEgNQAFgOAJgJQAIgKANgFQAMgGAPAAQAMAAALADQALAEAJAGQAIAGAGAJQAFAKABANIgkAAQgDgXgYAAQgHAAgGAEQgGAEgEAGQgEAGgBAIIgCAOIACAOQABAIAEAGQADAGAGAEQAGAEAHAAQAOAAAHgIQAHgHABgMIAjAAQgDAagRAOQgRAOgaAAQgOAAgNgFg");
	this.shape_7.setTransform(-0.725,90.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AAaBEIAAhJQgBgRgFgIQgEgIgOAAQgNAAgHAIQgHAKAAATIAABFIgkAAIAAiEIAjAAIAAATIAAAAQAHgMALgEQAKgGALAAQAPAAAJAEQAKAEAFAHQAGAHABALQADAJAAAMIAABRg");
	this.shape_8.setTransform(-15.45,90.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgkBDQgIgCgHgFQgFgFgEgHQgEgIABgKQAAgLADgHQAFgIAGgEQAGgDAIgDIARgDIAQgCIAMgCQAHgCADgDQAEgDAAgFQAAgGgCgEQgCgDgDgCQgDgCgFgBIgJAAQgJAAgHAEQgGAFgBALIglAAQABgNAGgJQAGgIAJgFQAIgFALgCQALgDAKAAIAUACQAKABAJAEQAJAEAEAIQAGAHAAAMIAABEIABARQABAIACAEIgkAAIgCgGIgBgGQgIAIgNAEQgKAEgMAAQgKAAgIgDgAASAFIgIACIgIABIgIABIgIACIgGAEQgEACgBADQgCAEAAAFQAAAFACADQABADAEACIAHADIAIABQAKAAAGgEQAGgEACgFQADgFABgFIABgIIAAgNg");
	this.shape_9.setTransform(-30.2,90.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AAaBbIAAhKQgBgRgFgHQgEgIgOAAQgNAAgHAJQgHAIAAAUIAABFIgkAAIAAi1IAkAAIAABEIABAAQAHgLAKgFQALgGAJAAQAPAAAJAEQAKAEAFAHQAGAHABALQADAKAAALIAABRg");
	this.shape_10.setTransform(-44.7,88.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AAaBEIAAhJQgBgRgFgIQgEgIgOAAQgNAAgHAIQgHAKAAATIAABFIgkAAIAAiEIAjAAIAAATIAAAAQAHgMALgEQAKgGALAAQAPAAAJAEQAKAEAFAHQAGAHABALQADAJAAAMIAABRg");
	this.shape_11.setTransform(-59.55,90.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgZBBQgNgFgJgKQgIgJgFgNQgFgMAAgQQAAgOAFgMQAFgNAJgKQAJgJAMgFQANgGAOAAQARAAAMAHQANAGAIALQAIALADAPQAEAOgBAOIhfAAQABASAIAIQAJAIAOAAQALAAAIgGQAIgGACgGIAgAAQgIAYgQAKQgQALgWAAQgPAAgMgFgAgNgmQgGADgDAEQgDAEgCAFIgCAJIA7AAQgDgOgGgHQgHgHgNAAQgIAAgGADg");
	this.shape_12.setTransform(-74.2139,90.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enhance, new cjs.Rectangle(-83,70.8,204.7,33.60000000000001), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgaA+QgMgGgIgIQgIgJgFgMQgDgNAAgOQAAgOADgMQAFgMAIgJQAIgJAMgEQAMgFAOgBQAPABAMAFQAMAEAIAJQAIAJAEAMQAFAMAAAOQAAAOgFANQgEAMgIAJQgIAIgMAGQgMAEgPAAQgOAAgMgEgAgPgoQgHAEgEAGQgFAGgCAJQgCAIAAAHQAAAIACAIQACAIAFAGQAEAHAHADQAHAFAIAAQAJAAAHgFQAHgDAFgHQADgGADgIQACgIAAgIQAAgHgCgIQgDgJgDgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape.setTransform(82.2,80.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AABBQQgFgBgEgFQgEgDgCgHIgBgNIAAhKIgVAAIAAgVIAVAAIAAglIAbAAIAAAlIAZAAIAAAVIgZAAIAABCIAAAIIACAFQABADADABIAHABIAGAAIAGgBIAAAVIgJABIgJAAQgLAAgHgCg");
	this.shape_1.setTransform(70.85,78.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgcBTQgLgFgIgJQgHgJgEgMQgDgNgBgOQABgRAEgLQAFgNAHgIQAIgIAKgEQAKgDAKAAIALABIAMADQAGADAEAEQAFADADAFIABAAIAAhAIAcAAIAACtIgbAAIAAgRIgBAAQgFALgLAFQgLAFgKAAQgPAAgLgGgAgPgRQgHAEgEAGQgEAHgCAHQgBAIgBAJQAAAIACAHQADAIAEAGQAEAGAGAEQAHAEAIAAQAJAAAHgEQAHgEAEgGQAFgHACgIQABgIAAgIQABgVgKgLQgJgLgRAAQgIAAgHAEg");
	this.shape_2.setTransform(52.7,78.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgYA+QgMgGgIgIQgIgJgEgMQgEgNAAgOQAAgMAFgMQAEgNAIgIQAIgKALgFQALgGANAAQAPABAMAFQAMAHAIAKQAHAKAEANQAEAOgCANIhcAAQAAAIACAGQACAHAEAFQAFAFAGADQAGAEAIAAQAMAAAIgGQAHgFAEgLIAaAAQgCAKgFAJQgGAIgHAGQgIAFgJADQgKACgKAAQgOAAgLgEgAAggKQAAgHgDgGQgCgGgEgEQgEgFgGgDQgGgDgHABQgGgBgGADQgGADgEAEQgFAFgCAFQgDAHAAAHIBAAAIAAAAg");
	this.shape_3.setTransform(39.1583,80.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgkBBIAAh9IAaAAIAAAYIAAAAQACgFAEgFQADgFAEgEQAFgEAGgCQAGgDAGAAIAIAAIADABIAAAbIgGgBIgGAAQgHAAgGACQgGADgFAGQgEAFgDAIQgCAIAAAKIAAA8g");
	this.shape_4.setTransform(28.95,80.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgYA+QgMgGgIgIQgIgJgEgMQgEgNAAgOQAAgMAFgMQAEgNAIgIQAIgKALgFQALgGANAAQAPABAMAFQAMAHAIAKQAHAKAEANQAEAOgCANIhcAAQAAAIACAGQACAHAEAFQAFAFAGADQAGAEAIAAQAMAAAIgGQAHgFAEgLIAaAAQgCAKgFAJQgGAIgHAGQgIAFgJADQgKACgKAAQgOAAgLgEgAAggKQAAgHgDgGQgCgGgEgEQgEgFgGgDQgGgDgHABQgGgBgGADQgGADgEAEQgFAFgCAFQgDAHAAAHIBAAAIAAAAg");
	this.shape_5.setTransform(17.3583,80.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgYA+QgMgGgIgIQgIgJgEgMQgEgNAAgOQAAgMAFgMQAEgNAIgIQAIgKALgFQALgGANAAQAPABAMAFQAMAHAIAKQAHAKAEANQAEAOgCANIhcAAQAAAIACAGQACAHAEAFQAFAFAGADQAGAEAIAAQAMAAAIgGQAHgFAEgLIAaAAQgCAKgFAJQgGAIgHAGQgIAFgJADQgKACgKAAQgOAAgLgEgAAggKQAAgHgDgGQgCgGgEgEQgEgFgGgDQgGgDgHABQgGgBgGADQgGADgEAEQgFAFgCAFQgDAHAAAHIBAAAIAAAAg");
	this.shape_6.setTransform(3.9583,80.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AAcBBIAAhPQgBgOgGgHQgFgHgNAAQgGAAgFADQgHACgDAFQgEAEgCAGQgCAHAAAGIAABKIgdAAIAAh9IAbAAIAAASIAAABQAHgLAKgGQALgGALAAQAVAAALALQAMALABAVIAABWg");
	this.shape_7.setTransform(-9.8,80.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgNBXIAAh9IAbAAIAAB9gAgNg8IAAgaIAbAAIAAAag");
	this.shape_8.setTransform(-19.575,78.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgTBYQgJgCgJgFQgHgEgFgIQgGgIgBgLIAbAAQACAGADAEQADAEAEACQAEACAFAAIAJABQARAAAHgIQAJgJgBgPIAAgTIAAAAQgGAKgKAGQgKAGgLAAQgPAAgLgFQgKgGgHgJQgHgJgDgLQgDgMAAgOQAAgMADgMQAFgLAGgJQAIgJAKgFQALgFAOAAQALAAAJAFQAKAFAGALIAAAAIAAgRIAcAAIAAB2QABAdgRAOQgPAOgeAAQgJAAgKgCgAgPg/QgGAEgFAGQgDAGgCAIIgBAQQAAAIACAHQABAIAFAFQADAFAHAEQAGAEAIAAQAJAAAGgEQAGgEAFgGQAEgFACgIQABgIAAgIQAAgIgBgIQgCgHgFgGQgEgGgGgDQgHgEgIAAQgIAAgHAEg");
	this.shape_9.setTransform(-29.8,83.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AAcBBIAAhPQgBgOgFgHQgHgHgMAAQgGAAgGADQgGACgDAFQgEAEgCAGQgCAHgBAGIAABKIgcAAIAAh9IAbAAIAAASIAAABQAHgLAKgGQAKgGAMAAQAUAAAMALQANALAAAVIAABWg");
	this.shape_10.setTransform(-43.65,80.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("Ag+BXIAAitIB8AAIAAAaIheAAIAAAuIBXAAIAAAXIhXAAIAAA0IBfAAIAAAag");
	this.shape_11.setTransform(-57.65,78.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_engineered, new cjs.Rectangle(-67.3,61.8,158.2,32.10000000000001), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3283").s().p("AgLAdQgFgCgFgEQgEgFgDgFQgDgGABgHQgBgGADgGQADgFAEgEQAFgFAFgCQAFgCAGAAQAGAAAGACQAGACAEAFQAFAEACAFQACAGABAGQgBAHgCAGQgCAFgFAFQgEAEgGACQgGACgGAAQgGAAgFgCgAgIgVQgFABgDAEIgEAHQgCAFAAAEQAAAFACAFIAEAHQADAEAFACQAEABAEAAQAFAAAEgBQAEgCADgEIAGgHQACgFAAgFQAAgEgCgFIgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACgAAHARIgHgOIgEAAIAAAOIgHAAIAAghIAMAAQAGAAADACQAEADABAFIgBAEIgCACIgEACIgDAAIAKAPgAgEgCIAEAAIAGgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAAgDIgCgBIgCgBIgDAAIgEAAg");
	this.shape.setTransform(19.15,108.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgYBNQgMgDgKgGQgKgGgGgKQgHgKAAgQIAnAAQAAAHADAFQADAFAEADQAFADAFACIALABIAKgBIAIgDQAEgCADgEQADgEAAgFQAAgKgNgEQgMgFgWgFIgRgFQgJgCgHgEQgHgFgEgGQgEgHAAgKQAAgPAGgJQAGgKAJgFQAJgGAMgCQAMgCAMAAQAMAAALACQAMADAJAFQAJAGAGAJQAGAJABAOIgoAAQAAgMgJgEQgIgEgKAAIgIAAIgHACIgGAEQgCADAAAFQAAAFAEAEQAEAEAHACIAOAEIARAEIASAFQAJACAGAFQAHAEAEAHQAEAHAAALQAAAPgGAKQgGAKgJAGQgKAHgNACQgMADgNAAQgMAAgNgDg");
	this.shape_1.setTransform(129.775,114.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgeBKQgOgGgKgKQgKgLgFgPQgGgOAAgSQAAgQAGgPQAFgOALgLQAKgLAOgGQAOgGARAAQATAAAOAIQAPAHAJANQAJAMAEAQQAEAQgBARIhsAAQABAUAJAJQAJAKARAAQANAAAJgHQAJgGACgHIAlAAQgJAbgSAMQgTAMgZAAQgRAAgPgGgAgPgsQgHADgEAFQgEAFgBAGIgCAKIBDAAQgDgQgIgIQgHgJgPAAQgKAAgGAEg");
	this.shape_2.setTransform(114.51,114.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgUBpIAAiXIApAAIAACXgAgUhFIAAgjIApAAIAAAjg");
	this.shape_3.setTransform(103.375,111.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgwBOIAAiXIAoAAIAAAcIAAAAQADgHAFgGQAEgGAHgEQAGgEAHgDQAIgCAIAAIAJACIAAAmIgHgBIgIAAQgMAAgIADQgHAEgFAHQgEAHgCAIQgCAJAAAJIAABFg");
	this.shape_4.setTransform(95.725,114.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgeBKQgOgGgKgKQgKgLgFgPQgGgOAAgSQAAgQAGgPQAFgOALgLQAKgLAOgGQAOgGARAAQATAAAOAIQAPAHAJANQAJAMAEAQQAEAQgBARIhsAAQABAUAJAJQAJAKARAAQANAAAJgHQAJgGACgHIAlAAQgJAbgSAMQgTAMgZAAQgRAAgPgGgAgPgsQgHADgEAFQgEAFgBAGIgCAKIBDAAQgDgQgIgIQgHgJgPAAQgKAAgGAEg");
	this.shape_5.setTransform(81.91,114.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AggBpQgQgEgMgJQgNgJgHgOQgIgOABgTIAsAAQAAAKAEAIQAEAHAGAEQAHAFAIACQAJACAIAAIANgBQAHgBAGgDQAGgDAEgFQAEgFAAgIQAAgJgFgEQgFgGgJgDIgUgGIgWgHIgXgHQgLgEgIgGQgJgGgGgLQgFgJAAgPQAAgQAHgMQAHgMALgIQALgIAOgEQAOgDAOAAQAQAAAPADQAPAEAMAIQALAIAHANQAHANAAASIgtAAQAAgJgEgHQgDgFgGgEQgFgDgHgCIgPgBIgLABQgGABgEACQgFADgDAFQgDAFAAAGQAAAHADADQACAEAHADIATAHIAfAIIAQAEQALADAKAHQAKAFAIAMQAHALAAASQAAAOgGAMQgFANgLAJQgLAJgQAEQgRAGgVAAQgQAAgRgFg");
	this.shape_6.setTransform(65.0734,111.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgrASIAAgjIBXAAIAAAjg");
	this.shape_7.setTransform(50.725,113.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgWBpIAAiqIg/AAIAAgnICrAAIAAAnIg/AAIAACqg");
	this.shape_8.setTransform(36.875,111.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgwBOIAAiXIAoAAIAAAcIAAAAQADgHAFgGQAEgGAHgEQAGgEAHgDQAIgCAIAAIAJACIAAAmIgHgBIgIAAQgMAAgIADQgHAEgFAHQgEAHgCAIQgCAJAAAJIAABFg");
	this.shape_9.setTransform(9.825,114.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AggBKQgNgGgLgKQgKgKgFgPQgHgPABgSQgBgRAHgPQAFgPAKgKQALgLANgFQAPgGARAAQASAAAOAGQAPAFAKALQALAKAFAPQAGAPgBARQABASgGAPQgFAPgLAKQgKAKgPAGQgPAGgRAAQgRAAgPgGgAgQgrQgIAEgEAHQgEAGgCAJQgBAJAAAIQAAAJABAJQACAIAEAHQAEAHAIAEQAGAFAKAAQAKAAAIgFQAHgEAEgHQAFgHABgIQACgJAAgJQAAgIgCgJQgBgJgFgGQgEgHgHgEQgIgFgKAAQgKAAgGAFg");
	this.shape_10.setTransform(-4.85,114.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_11.setTransform(-16.875,111.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgfBKQgPgGgKgKQgKgKgGgPQgFgPAAgSQAAgRAFgPQAGgPAKgKQAKgLAPgFQAOgGARAAQASAAAOAGQAPAFAKALQALAKAFAPQAFAPAAARQAAASgFAPQgFAPgLAKQgKAKgPAGQgPAGgRAAQgRAAgOgGgAgRgrQgGAEgFAHQgEAGgCAJQgCAJAAAIQAAAJACAJQACAIAEAHQAFAHAGAEQAIAFAJAAQALAAAGgFQAIgEAEgHQAEgHACgIQACgJAAgJQAAgIgCgJQgCgJgEgGQgEgHgIgEQgGgFgLAAQgJAAgIAFg");
	this.shape_12.setTransform(-28.9,114.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AglBlQgTgIgNgOQgNgQgIgTQgGgUgBgXQABgWAGgVQAIgTANgQQANgOATgJQATgJAYABQARAAAPAEQAQAGAMAJQAMAJAIAOQAIAPACASIgsAAQgCgIgEgHQgEgGgGgFQgGgFgIgDQgIgCgIAAQgPgBgLAHQgKAGgHAJQgHAKgDAOQgEAMAAANQAAANAEANQADANAHAJQAHAKAKAGQALAGAPAAQAVAAALgNQAMgNADgUIAsAAQgBATgIAQQgHAPgMAMQgMALgQAGQgQAFgTABQgYAAgTgJg");
	this.shape_13.setTransform(-48,111.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AgeBKQgOgGgKgKQgKgLgFgPQgGgOAAgSQAAgQAGgPQAFgOALgLQAKgLAOgGQAOgGARAAQATAAAOAIQAPAHAJANQAJAMAEAQQAEAQgBARIhsAAQABAUAJAJQAJAKARAAQANAAAJgHQAJgGACgHIAlAAQgJAbgSAMQgTAMgZAAQgRAAgPgGgAgPgsQgHADgEAFQgEAFgBAGIgCAKIBDAAQgDgQgIgIQgHgJgPAAQgKAAgGAEg");
	this.shape_14.setTransform(-66.59,114.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AgwBOIAAiXIAoAAIAAAcIAAAAQADgHAFgGQAEgGAHgEQAGgEAHgDQAIgCAIAAIAJACIAAAmIgHgBIgIAAQgMAAgIADQgHAEgFAHQgEAHgCAIQgCAJAAAJIAABFg");
	this.shape_15.setTransform(-79.175,114.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3283").s().p("AgqBJQgLgEgGgIQgGgIgDgMQgCgLAAgPIAAhcIAqAAIAABVQAAASAFAKQAGAJAPAAQAQAAAIgKQAHgKAAgXIAAhPIAqAAIAACXIgoAAIAAgVIgBAAQgIANgMAGQgLAGgOAAQgRAAgKgFg");
	this.shape_16.setTransform(-93.65,114.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AggBqQgQgFgMgJQgNgJgHgOQgIgOABgTIAsAAQAAAKAEAIQAEAHAGAEQAHAFAIACQAJACAIAAIANgBQAHgBAGgDQAGgCAEgGQAEgFAAgIQAAgJgFgEQgFgGgJgDIgUgGIgWgHIgXgGQgLgFgIgGQgJgGgGgLQgFgJAAgPQAAgQAHgMQAHgMALgIQALgIAOgEQAOgDAOAAQAQAAAPADQAPAEAMAIQALAJAHAMQAHANAAASIgtAAQAAgJgEgHQgDgGgGgDQgFgEgHgBIgPgBIgLABQgGABgEACQgFADgDAFQgDAEAAAHQAAAHADADQACAEAHADIATAHIAfAIIAQAEQALADAKAHQAKAFAIAMQAHALAAASQAAAOgGANQgFAMgLAJQgLAJgQAEQgRAGgVAAQgQAAgRgEg");
	this.shape_17.setTransform(-111.1266,111.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TSeries_Logo, new cjs.Rectangle(-123.4,90.5,263,40.599999999999994), null);


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
	this.shape.graphics.f("#2A3283").s().p("AA7A4QgLgFgHgIQgHgIgEgLQgEgLAAgMQAAgNAEgKQAEgLAHgIQAHgJALgFQAKgEANAAQAOAAALAEQAKAFAHAJQAHAIAFALQADAKAAANQAAAMgDALQgFALgHAIQgHAIgKAFQgLAEgOAAQgNAAgKgEgABEgiQgGACgEAHQgDAEgCAIIgCAOIACANIAFAOQAEAEAGAEQAGADAIAAQAJAAAGgDQAGgEAEgEQADgHACgHQACgGAAgHQAAgGgCgIQgCgIgDgEQgEgHgGgCQgGgFgJAAQgIAAgGAFgAgwA6QgIgDgHgFQgHgFgEgHQgEgIAAgKIAYAAQAAAGACAEQADADAEADQACACAFACIAKAAIAHAAQAEAAADgCQAEgBACgEQACgCAAgEQAAgFgDgDIgHgFIgkgLQgHgBgFgEQgEgEgDgFQgDgGAAgHQAAgJAEgHQADgGAHgFQAGgEAHgCQAIgDAIABQAJAAAIABQAIADAGAEQAGAFAEAHQAEAHAAAKIgYAAQAAgFgCgEIgEgEQgEgEgEAAIgIgBIgHABQgDABgCABIgEAFQgCABAAAFQAAADACABQABADAEACIAlALIAKAEQAGADAEAGQAEAHAAAJQAAAIgEAHQgCAHgGAFQgGAFgJACQgIADgMAAQgKAAgJgCgADdA5IgwhMIAABMIgYAAIAAhxIAZAAIAwBMIABAAIAAhMIAXAAIAABxgAi4A5IAAhxIA0AAQALAAAHADQAIADAFAFQAEAFADAHQACAGAAAHQAAAHgCAIQgDAFgEAFQgFAFgIADQgHADgLAAIgaAAIAAApgAiegCIAcgBIAHgCQADgCACgEQABgDAAgGQAAgFgBgEQgCgDgDgBIgHgDIgcgBgAkfA5IAAhxIBWAAIAAAVIg8AAIAAAYIA4AAIAAASIg4AAIAAAeIA+AAIAAAUgAEPgiQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDgFIAAgFIAAgFIADgEQACgCADgBIAEgBIAFABQAAABABAAQABAAAAAAQABABAAAAQABABAAAAIADAEIABAFIgBAFIgDAFQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgFABIgEgBgAEPg3IgDADIgCACIAAAEIAAAFIACACIADADIAEABIAEgBIADgDIACgCIAAgFIAAgEIgCgCIgDgDIgEgBIgEABgAEWgnIgDgFIgCAAIAAAFIgDAAIAAgNIAFAAIAEABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAACIgBABIgBABIgCABIAEAFgAERgvIACAAIACAAIABgCIAAgBIgBAAIgEAAg");
	this.shape.setTransform(-5.825,-6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-34.6,-12.7,57.6,12.1), null);


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
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_06_1, new cjs.Rectangle(-150,-124.5,320,480), null);


(lib.frame_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_02();
	this.instance.setTransform(-150,-124.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_02_1, new cjs.Rectangle(-150,-124.9,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.frame_01_1, new cjs.Rectangle(-150,-124.5,320,480), null);


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
	this.instance.setTransform(-158.25,47.35,1.0525,1.0525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endFrame_mc, new cjs.Rectangle(-158.2,47.4,336.79999999999995,192.6), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:-1.3,regY:3.3,rotation:10.5663,x:45.45,y:56.35},17,cjs.Ease.quartInOut).wait(12).to({rotation:10.5663},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(196));

	// speedometer_mc
	this.instance_1 = new lib.speedometer_mc();
	this.instance_1.setTransform(41.85,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(196));

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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(88).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(56).to({_off:false},0).to({_off:true},1).wait(139));

	// paper_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");
	var mask_graphics_88 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");
	var mask_graphics_106 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");
	var mask_graphics_163 = new cjs.Graphics().p("Aq9M0IAA5nIV7AAIAAZng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:147.275,y:249.45}).wait(88).to({graphics:mask_graphics_88,x:147.275,y:249.45}).wait(1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_106,x:147.275,y:249.45}).wait(1).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_graphics_163,x:147.275,y:249.45}).wait(1).to({graphics:null,x:0,y:0}).wait(139));

	// paper
	this.instance = new lib.paper_mc();
	this.instance.setTransform(146,79.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:242.2},33,cjs.Ease.quadInOut).wait(55).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(56).to({_off:false},0).to({_off:true},1).wait(139));

	// printer_01
	this.instance_1 = new lib.printer_01_1();
	this.instance_1.setTransform(153.55,168.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(56).to({_off:false},0).to({_off:true},1).wait(139));

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
	var mask_graphics_109 = new cjs.Graphics().p("ABGFEQhHgnAAhhQABgjAUgxQAphiBdhFIBJBdQBJBpgCA1QgBAmgUAmQgoBNhfADQgkAAgkgUg");
	var mask_graphics_111 = new cjs.Graphics().p("ABGFEQhHgnAAhhQABgjAUgxQAphiBdhFIBJBdQBJBpgCA1QgBAmgUAmQgoBNhfADQgkAAgkgUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:29.7791,y:34.375}).wait(38).to({graphics:mask_graphics_44,x:29.7791,y:34.375}).wait(1).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_109,x:29.7791,y:34.375}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_111,x:29.7791,y:34.375}).wait(1).to({graphics:null,x:0,y:0}).wait(191));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},19).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},64).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[]},1).wait(191));

	// inkDrop
	this.instance = new lib.ink_drop();
	this.instance.setTransform(63.6,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:true},1).wait(64).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(191));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.1,26.8,31.6,42.900000000000006);


// stage content:
(lib.Epson_TSeries_320x480 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(303));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(40.45,18.35,0.9135,0.9135,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9609},7).wait(31).to({alpha:0},6).wait(208).to({alpha:1},6).wait(45));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(266).to({graphics:mask_graphics_266,x:159.5749,y:395.05}).wait(37));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.5,-6.9,10.4,6.8).s().p("AmaGPIJjumIDSCJIpjOmg");
	this.shape_1.setTransform(95.225,382.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.5,-6.9,10.4,6.8).s().p("AmaGPIJjunIDSCJIpjOog");
	this.shape_2.setTransform(99.8,383.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.4,6.8).s().p("AmcGQIJmupIDSCJIplOqg");
	this.shape_3.setTransform(105.55,384.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.5,6.9).s().p("AmdGSIJnutIDUCKIpoOtg");
	this.shape_4.setTransform(113.575,386.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-6.9,10.5,6.9).s().p("AmfGUIJquxIDVCLIpqOwg");
	this.shape_5.setTransform(123.85,389.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.7,-7,10.6,6.9).s().p("AmhGWIJtu2IDVCMIpsO1g");
	this.shape_6.setTransform(136.45,392.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7,10.6,7).s().p("AmjGYIJwu7IDXCNIpxO6g");
	this.shape_7.setTransform(151.35,396.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7.1,10.8,7).s().p("AmmGbIJ1vBIDYCNIp1PAg");
	this.shape_8.setTransform(167.975,400.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7.1,10.8,7.1).s().p("AmoGdIJ4vHIDZCOIp4PHg");
	this.shape_9.setTransform(182.875,403.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.1,10.9,7.1).s().p("AmqGfIJ7vLIDaCOIp7PLg");
	this.shape_10.setTransform(195.475,406.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.2,10.9,7.1).s().p("AmsGhIJ+vQIDbCQIp+PPg");
	this.shape_11.setTransform(205.75,409.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.2,11,7.1).s().p("AmtGiIKAvTIDbCQIqAPSg");
	this.shape_12.setTransform(213.775,411.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmuGjIKBvUIDcCQIqBPUg");
	this.shape_13.setTransform(219.525,412.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGjIKCvVIDdCQIqDPVg");
	this.shape_14.setTransform(222.95,413.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGjIKCvWIDdCRIqDPVg");
	this.shape_15.setTransform(224.1,414.05);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:95.225,y:382.2}}]},266).to({state:[{t:this.shape_1,p:{x:96.375,y:382.475}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(22));

	// learnMore_CTA
	this.instance_2 = new lib.learnMore_CTA();
	this.instance_2.setTransform(159.55,395.05);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({alpha:1},8).wait(37));

	// endFrame_mc
	this.instance_3 = new lib.endFrame_mc();
	this.instance_3.setTransform(150.4,152,0.8265,0.8265);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({scaleX:0.9518,scaleY:0.9518,y:133.8,alpha:1},6,cjs.Ease.quadOut).wait(45));

	// Layer_35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_211 = new cjs.Graphics().p("APnR6QgFgEAAgHQAAgGAFgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Ag0A1QgWgWAAgfQAAgeAWgXQAWgVAeAAQAfAAAWAVQAWAXAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AhbBdQgmgnAAg2QAAg1AmgnQAmgmA1ABQA2gBAmAmQAmAnAAA1QAAA2gmAnQgmAlg2ABQg1gBgmglg");
	var mask_1_graphics_214 = new cjs.Graphics().p("Ah/CAQg1g1AAhLQAAhKA1g1QA1g1BKAAQBLAAA1A1QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AigChQhChCAAhfQAAhdBChDQBDhCBdAAQBeAABDBCQBCBDAABdQAABfhCBCQhDBCheAAQhdAAhDhCg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Ai+C/QhPhQABhvQgBhvBPhPQBQhOBuAAQBvAABQBOQBPBPgBBvQABBvhPBQQhQBPhvgBQhuABhQhPg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AjYDZQhahaAAh/QAAh+BahbQBahZB+AAQB/AABaBZQBaBbAAB+QAAB/haBaQhaBah/AAQh+AAhahag");
	var mask_1_graphics_218 = new cjs.Graphics().p("AjwDxQhjhkAAiNQAAiMBjhkQBkhjCMAAQCNAABjBjQBkBkAACMQAACNhkBkQhjBjiNAAQiMAAhkhjg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AkEEEQhshsAAiYQAAiYBshsQBshsCYAAQCZAABsBsQBsBsAACYQAACYhsBsQhsBsiZAAQiYAAhshsg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AkVEWQhzhzAAijQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AkjEkQh5h5AAirQAAiqB5h6QB5h4CqAAQCrAAB5B4QB5B6AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AkuEvQh9h+AAixQAAixB9h9QB+h9CwAAQCyAAB9B9QB+B9AACxQAACxh+B+Qh9B9iyAAQiwAAh+h9g");
	var mask_1_graphics_223 = new cjs.Graphics().p("Ak2E2QiAiAgBi2QABi1CAiBQCBiAC1AAQC2AACBCAQCACBAAC1QAAC2iACAQiBCBi2AAQi1AAiBiBg");
	var mask_1_graphics_224 = new cjs.Graphics().p("Ak7E7QiCiDAAi4QAAi4CCiDQCDiCC4AAQC5AACCCCQCDCDAAC4QAAC4iDCDQiCCDi5AAQi4AAiDiDg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AHfTQQiDiDAAi6QAAi6CDiDQCDiDC6AAQC6AACDCDQCDCDAAC6QAAC6iDCDQiDCDi6AAQi6AAiDiDg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AFWUMQimimAAjsQAAjrCminQCmilDsAAQDrAACnClQCmCnAADrQAADsimCmQinCmjrAAQjsAAimimg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AmRGRQimimAAjrQAAjqCminQCmimDrAAQDrAACnCmQCmCnAADqQAADrimCmQinCnjrAAQjrAAiming");
	var mask_1_graphics_247 = new cjs.Graphics().p("AmRGSQimimAAjsQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADsimCmQinCmjrAAQjrAAimimg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AFWTuQimimAAjsQAAjrCmimQCminDsAAQDrAACnCnQCmCmAADrQAADsimCmQinCnjrgBQjsABiming");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_1_graphics_211,x:102.5871,y:115.1015}).wait(1).to({graphics:mask_1_graphics_212,x:203.65,y:228.525}).wait(1).to({graphics:mask_1_graphics_213,x:203.725,y:228.4}).wait(1).to({graphics:mask_1_graphics_214,x:203.75,y:228.3}).wait(1).to({graphics:mask_1_graphics_215,x:203.8,y:228.2}).wait(1).to({graphics:mask_1_graphics_216,x:203.85,y:228.15}).wait(1).to({graphics:mask_1_graphics_217,x:203.9,y:228.075}).wait(1).to({graphics:mask_1_graphics_218,x:203.925,y:228}).wait(1).to({graphics:mask_1_graphics_219,x:203.925,y:227.95}).wait(1).to({graphics:mask_1_graphics_220,x:203.975,y:227.9}).wait(1).to({graphics:mask_1_graphics_221,x:204,y:227.875}).wait(1).to({graphics:mask_1_graphics_222,x:204,y:227.825}).wait(1).to({graphics:mask_1_graphics_223,x:204,y:227.825}).wait(1).to({graphics:mask_1_graphics_224,x:204.025,y:227.825}).wait(1).to({graphics:mask_1_graphics_225,x:124.4148,y:136.2991}).wait(20).to({graphics:mask_1_graphics_245,x:131.2,y:145.85}).wait(1).to({graphics:mask_1_graphics_246,x:205.6,y:233.9}).wait(1).to({graphics:mask_1_graphics_247,x:205.6,y:232.9}).wait(1).to({graphics:mask_1_graphics_248,x:205.6,y:231.9}).wait(1).to({graphics:mask_1_graphics_249,x:205.6,y:230.9}).wait(1).to({graphics:mask_1_graphics_250,x:205.6,y:229.9}).wait(1).to({graphics:mask_1_graphics_251,x:131.2,y:142.85}).wait(1).to({graphics:null,x:0,y:0}).wait(51));

	// zoomIn
	this.instance_4 = new lib.zoomIn_1();
	this.instance_4.setTransform(215.6,240.8);
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
	this.instance_6.setTransform(150.4,103.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({y:124.8,alpha:1},12,cjs.Ease.quadOut).wait(38).to({alpha:0},6).to({_off:true},1).wait(51));

	// inkDrip_Anim
	this.instance_7 = new lib.inkDrip_Anim("synched",0,false);
	this.instance_7.setTransform(160.1,28.55,1.4068,1.4068,0,0,0,43.9,49.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({y:53.55,alpha:1},5,cjs.Ease.quadOut).wait(45).to({mode:"single",startPosition:109},0).to({alpha:0,startPosition:111},6,cjs.Ease.quadIn).to({_off:true},1).wait(107));

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
	this.instance_11.setTransform(135.3,64.95,1.7192,1.7192,0,0,0,45.4,48);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({x:160.8,alpha:1,mode:"synched",loop:false},6,cjs.Ease.quadOut).wait(34).to({mode:"single",startPosition:106},0).to({x:200.3,alpha:0,startPosition:103},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// Printer_Animation
	this.instance_12 = new lib.printer_animation("single",0);
	this.instance_12.setTransform(108.55,320.05,1.3597,1.3597,0,0,0,133.4,217.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({x:138.55,alpha:1,mode:"synched",loop:false},6,cjs.Ease.quadOut).wait(89).to({mode:"single",startPosition:106},0).to({alpha:0,startPosition:163},6).to({_off:true},1).wait(107));

	// txt_engineered
	this.instance_13 = new lib.txt_engineered();
	this.instance_13.setTransform(74.4,70.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},0).to({x:78.4,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:81.4,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(217));

	// txt_enhance
	this.instance_14 = new lib.txt_enhance();
	this.instance_14.setTransform(90,90.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(46).to({_off:false},0).to({x:94,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:97,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(215));

	// txt_work
	this.instance_15 = new lib.txt_work();
	this.instance_15.setTransform(54.75,110.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({x:58.75,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:61.75,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(213));

	// frame_02
	this.instance_16 = new lib.frame_02_1();
	this.instance_16.setTransform(150.05,125.05);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(38).to({_off:false},0).to({alpha:1},6).wait(45).to({x:151.8,y:124.55,alpha:0},5).to({_off:true},1).wait(208));

	// T_Series_Logo
	this.instance_17 = new lib.TSeries_Logo();
	this.instance_17.setTransform(161.4,127.1,1.0824,1.0824,0,0,0,10,109);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({_off:false},0).to({y:137.1,alpha:1},6,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(263));

	// frame_01
	this.instance_18 = new lib.frame_01_1();
	this.instance_18.setTransform(150,125.05);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},6,cjs.Ease.quadOut).wait(76).to({alpha:0},5).to({_off:true},1).wait(215));

	// background
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_16.setTransform(159.9998,240.0009,1.0667,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(129.5,219.3,217.5,261.7);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"endFrame.jpg", id:"endFrame"},
		{src:"frame_01.jpg", id:"frame_01"},
		{src:"frame_02.jpg", id:"frame_02"},
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