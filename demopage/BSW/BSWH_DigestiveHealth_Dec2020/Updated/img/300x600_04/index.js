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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,40);


(lib.head_img = function() {
	this.initialize(img.head_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,126);


(lib.temp_01 = function() {
	this.initialize(img.temp_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.temp_02 = function() {
	this.initialize(img.temp_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.temp_03 = function() {
	this.initialize(img.temp_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.worry_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AIUBtQgHgIgBgNQABgNAHgIQAJgJANAAQANAAAIAJQAJAIAAANQAAANgJAIQgIAJgNAAQgNAAgJgJgAjMBiQgUgIgQgQQgPgPgIgUQgJgVAAgWQAAgYAJgUQAIgUAPgQQAQgPAUgJQAUgJAYAAQAXAAAUAJQAVAJAPAPQAPAQAKAUQAIAUAAAYQAAAWgIAVQgKAUgPAPQgPAQgUAIQgUAJgYAAQgYAAgUgJgAi3g9QgMAFgHAJQgJAIgEALQgFALABANQgBALAFALQAEALAJAJQAHAIALAFQALAFANAAQANAAALgFQAKgFAIgIQAJgJAEgLQAEgLABgLQgBgNgEgLQgEgLgJgIQgIgJgKgFQgLgEgNAAQgNAAgKAEgAGrBoIAAhcIhHh+IA4AAIArBPIAohPIA4AAIhHB/IAABbgAEpBoIgehCIgqAAIAABCIg0AAIAAjaIBfAAQATAAAQAGQAPAGAKALQALAKAFANQAFAOAAAQQAAAUgJARQgJAQgRAKIApBPgADhgIIAmAAQASAAAHgIQAIgJAAgMQAAgOgIgHQgIgIgRAAIgmAAgABiBoIgehCIgqAAIAABCIgzAAIAAjaIBeAAQATAAAQAGQAPAGAKALQALAKAFANQAFAOABAQQAAAUgKARQgJAQgRAKIApBPgAAagIIAmAAQASAAAHgIQAIgJAAgMQAAgOgIgHQgIgIgRAAIgmAAgAmKBoIgmiJIgmCJIg0AAIg9jaIA1AAIAjCGIAmiGIAyAAIAmCHIAjiHIA0AAIg9Dag");
	this.shape.setTransform(-58.35,11.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.worry_txt, new cjs.Rectangle(-116.7,0,116.7,23.6), null);


(lib.we_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("ABVBtIAAjaICXAAIAAAxIhjAAIAAAkIBjAAIAAAwIhjAAIAAAlIBjAAIAAAwgAguBtIgmiJIgmCJIg0AAIg9jaIA1AAIAjCHIAmiHIAyAAIAmCHIAhiHIA1AAIg9Dag");
	this.shape.setTransform(-23.575,10.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.we_txt, new cjs.Rectangle(-47.1,0,47.1,21.9), null);


(lib.txt_yourGut = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJA4QgIgIAAgSIAAgmIgRAAIAAgVIARAAIAAgTIAWgPIAAAiIAZAAIAAAVIgZAAIAAAkQAAAIADADQADACAEABQAFAAAEgDIALASIgKAFQgGABgGAAQgOABgIgIg");
	this.shape.setTransform(-8.825,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAkQgKgKAAgSIAAg2IAYAAIAAAzQAAAKAFAFQAEAGAJAAQAIAAAGgGQAFgGAAgKIAAgyIAYAAIAABbIgYAAIAAgLQgEAGgHADQgHAEgHAAQgRAAgJgLg");
	this.shape_1.setTransform(-17.325,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA+QgKgFgIgJIATgPQAFAGAGADQAFAEAJgBQAFAAAEgBQAFgCADgEQAEgDACgEQACgFAAgFIAAgHQgFAHgIAEQgHADgIAAQgJABgIgEQgIgDgGgGQgGgHgEgJQgDgHAAgLQAAgLADgJQAEgIAGgHQAGgGAIgEQAIgCAJAAQAIgBAIAEQAHAEAFAGIAAgMIAXAAIAABUQAAAKgDAIQgEAJgGAGQgHAGgJAEQgJAEgKAAQgPAAgLgFgAgJgqQgEACgEADQgDAEgCAFQgCAEAAAGQAAAFACAFQACAEADAEQAEADAEACQAFACAEAAQAGAAAEgCQAFgCAEgDIAFgIQACgFAAgFQAAgGgCgEIgFgJQgEgDgFgCQgEgCgGAAQgEAAgFACg");
	this.shape_2.setTransform(-27.675,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAvIAAhbIAXAAIAAAOQADgIAGgEQAHgEAIAAIAJABIAHADIgIAXIgGgCIgHgBQgIAAgFAFQgFAFgBALIAAAwg");
	this.shape_3.setTransform(-39.45,1.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAkQgKgKAAgSIAAg2IAYAAIAAAzQAAAKAFAFQAEAGAJAAQAIAAAGgGQAFgGAAgKIAAgyIAYAAIAABbIgYAAIAAgLQgEAGgHADQgHAEgHAAQgRAAgJgLg");
	this.shape_4.setTransform(-48.175,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAsQgJgEgGgGQgHgHgDgJQgDgIAAgKQAAgJADgJQADgJAHgGQAGgGAJgEQAJgEAKAAQAKAAAJAEQAJAEAGAGQAHAGADAJQAFAJAAAJQAAAKgFAIQgDAJgHAHQgGAGgJAEQgJAEgKAAQgKAAgJgEgAgJgXQgFACgDAEQgDADgCAFQgCAEgBAFQABAFACAFQACAEADAEQADADAFACQAEACAFAAQAFAAAEgCQAGgCADgDIAFgIQACgFAAgFQAAgFgCgEQgCgFgDgDQgDgEgGgCQgEgCgFAAQgFAAgEACg");
	this.shape_5.setTransform(-58.25,1.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA+QgHgDgFgDIANgTIAGAEQADABAEAAQAGAAAEgDQAEgDAEgIIABgEIglhXIAZAAIAXA7IAXg7IAYAAIgnBgQgEAJgEAGQgDAGgEADQgEAEgGACQgGABgHAAQgHAAgHgCg");
	this.shape_6.setTransform(-68.625,3.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAqQgKgGgGgLIAWgIQAGAMAPgBQAGAAAFgCQADgEAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgEgEIgHgBIgHgCIgMgDQgGgCgFgDQgEgBgDgGQgDgEAAgHQAAgGACgFQAEgGAEgDQAFgFAHgCQAHgCAHAAQAPAAAJAFQAKAFAGAKIgWAIQgDgEgDgDQgFgDgHABQgGgBgDADQgDACAAAFQAAADAFACIAPAFIALACQAHACAEAEQAFABADAGQADAEAAAHQAAAGgCAFQgDAGgEAEQgGAEgHADQgHADgLAAQgPAAgKgGg");
	this.shape_7.setTransform(-80.75,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLASQAHgFAEgFQADgFAAgFQgCAEgFAAQgFAAgDgDQgDgEAAgFQAAgHAEgEQAEgEAHAAQAHAAAFAFQAEAGAAAIQAAAJgGAIQgFAIgJAHg");
	this.shape_8.setTransform(-86.825,-3.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA4QgIgIAAgSIAAgmIgRAAIAAgVIARAAIAAgTIAWgPIAAAiIAZAAIAAAVIgZAAIAAAkQAAAIADADQADACAEABQAFAAAEgDIALASIgKAFQgGABgGAAQgOABgIgIg");
	this.shape_9.setTransform(-92.225,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAoQgIgIAAgMQAAgOALgHQALgJATAAIAXAAIAAgBQAAgHgEgFQgGgEgKAAQgGAAgFADQgGADgDAGIgWgLQAHgJAKgGQALgGAOAAQAVAAALAKQALAKAAARIAAA4IgXAAIAAgOQgFAHgIAEQgIAFgLAAQgPAAgJgIgAgOAKQgFADABAFQgBAKAOAAIAIgBIAHgDIAHgGQADgDABgDIAAgFIgVAAQgJAAgFADg");
	this.shape_10.setTransform(-100.85,1.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBDIAAg0QABgKgFgFQgFgFgJAAQgHAAgGAFQgFAGgBALIAAAyIgXAAIAAiFIAXAAIAAA1QAFgFAHgEQAGgEAIABQAIgBAHADQAHADAEAFQAFAFADAGQACAGAAAJIAAA4g");
	this.shape_11.setTransform(-110.45,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaA+IgahXIgZBXIgYAAIgjh7IAZAAIAXBVIAahVIAWAAIAZBWIAYhWIAYAAIgkB7g");
	this.shape_12.setTransform(-123.975,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_yourGut, new cjs.Rectangle(-134.9,-13.1,269.9,26.299999999999997), null);


(lib.txt_tellingYou = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AgMA8QgFgEAAgHQAAgGAFgFQAEgEAGAAQAGAAAEAEQAEAFAAAGQAAAHgEAEQgEAEgGAAQgGAAgEgEgAgMAYIAAgCQAAgJACgGQADgHADgDIAGgHIAHgFIAFgFQACgDAAgFQAAgGgEgEQgFgFgHAAQgHAAgEAEQgFAEgCAGIgVgJQAFgLAKgHQAKgHAOAAQAJAAAHACQAIADAFAFQAFAEADAHQADAGAAAIQAAAIgDAFQgCAFgEADIgHAGIgIAFQgEADgCAFQgCAEAAAGIAAACg");
	this.shape.setTransform(-46.625,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB71B").s().p("AggAkQgKgKAAgSIAAg2IAYAAIAAAzQAAAKAFAFQAEAGAJAAQAIAAAGgGQAFgGAAgKIAAgyIAYAAIAABbIgYAAIAAgLQgEAGgHADQgHAEgHAAQgRAAgJgLg");
	this.shape_1.setTransform(-55.975,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB71B").s().p("AgTAsQgIgEgHgGQgHgHgDgJQgDgIgBgKQABgJADgJQADgJAHgGQAHgGAIgEQAKgEAJAAQAKAAAJAEQAJAEAGAGQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAHQgGAGgJAEQgJAEgKAAQgJAAgKgEgAgJgXQgFACgDAEQgDADgDAFQgBAEAAAFQAAAFABAFQADAEADAEQADADAFACQAEACAFAAQAFAAAFgCQAFgCADgDIAFgIQACgFAAgFQAAgFgCgEQgCgFgDgDQgDgEgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_2.setTransform(-66.05,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB71B").s().p("AgnA+QgHgDgFgDIANgTIAGAEQADABAEAAQAGAAAEgDQAEgDAEgIIABgEIglhXIAZAAIAXA7IAXg7IAYAAIgnBgQgEAJgEAGQgDAGgEADQgEAEgGACQgGABgHAAQgHAAgHgCg");
	this.shape_3.setTransform(-76.425,3.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB71B").s().p("AgaA+QgKgFgIgJIATgPQAFAGAGADQAFAEAJgBQAFAAAEgBQAFgCADgEQAEgDACgEQACgFAAgFIAAgHQgFAHgIAEQgHADgIAAQgJABgIgEQgIgDgGgGQgGgHgEgJQgDgHAAgLQAAgLADgJQAEgIAGgHQAGgGAIgEQAIgCAJAAQAIgBAIAEQAHAEAFAGIAAgMIAXAAIAABUQAAAKgDAIQgEAJgGAGQgHAGgJAEQgJAEgKAAQgPAAgLgFgAgJgqQgEACgEADQgDAEgCAFQgCAEAAAGQAAAFACAFQACAEADAEQAEADAEACQAFACAEAAQAGAAAEgCQAFgCAEgDIAFgIQACgFAAgFQAAgGgCgEIgFgJQgEgDgFgCQgEgCgGAAQgEAAgFACg");
	this.shape_4.setTransform(-89.625,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB71B").s().p("AATAvIAAgzQAAgKgFgGQgFgFgIAAQgIAAgGAGQgFAFAAALIAAAyIgYAAIAAhbIAYAAIAAALQAEgGAHgDQAHgEAIAAQAQAAAJAKQAKAKAAASIAAA3g");
	this.shape_5.setTransform(-99.7,1.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB71B").s().p("AgLBDIAAhcIAXAAIAABcgAgJgnQgFgFAAgGQAAgHAFgEQAEgEAFAAQAHAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_6.setTransform(-106.45,-0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB71B").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_7.setTransform(-110.075,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB71B").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_8.setTransform(-113.675,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB71B").s().p("AgSAsQgJgEgHgGQgGgHgEgIQgDgJAAgKQAAgJAEgJQADgJAHgGQAGgGAJgEQAJgEAJAAQAKAAAJAEQAJADAGAGQAGAHAEAIQAEAJAAAKIAAAIIhIAAQACAJAHAFQAHAFAJAAQAIAAAGgDQAFgDAEgGIATALQgHAKgKAGQgKAGgPAAQgKAAgJgEgAAYgJQgCgJgGgFQgHgEgJAAQgIAAgGAFQgHAFgDAIIAwAAIAAAAg");
	this.shape_9.setTransform(-120.575,1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB71B").s().p("AgJA4QgIgIAAgSIAAgmIgRAAIAAgVIARAAIAAgTIAWgPIAAAiIAZAAIAAAVIgZAAIAAAkQAAAIADADQADACAEABQAFAAAEgDIALASIgKAFQgGABgGAAQgOABgIgIg");
	this.shape_10.setTransform(-129.025,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tellingYou, new cjs.Rectangle(-134.9,-13.1,269.9,26.299999999999997), null);


(lib.to_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AAzBoQgVgJgPgQQgPgPgIgUQgJgVAAgXQAAgWAJgVQAIgUAPgPQAPgQAVgJQAUgJAYAAQAWAAAVAJQAUAJAPAQQAQAPAJAUQAIAVABAWQgBAXgIAVQgJAUgPAPQgPAQgVAJQgUAJgXAAQgYAAgUgJgABHg4QgLAGgIAIQgIAIgFAMQgEALAAALQAAAMAEALQAFALAIAJQAIAIALAFQALAFANAAQAMAAALgFQALgFAIgIQAIgJAFgLQAEgLAAgMQAAgLgEgLQgFgMgIgIQgIgIgLgGQgLgEgMAAQgNAAgLAEgAiSBuIAAiqIg8AAIAAgxICqAAIAAAxIg7AAIAACqg");
	this.shape.setTransform(-20.65,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.to_txt, new cjs.Rectangle(-41.3,0,41.3,22.5), null);


(lib.to_02_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AAzBoQgVgJgPgQQgPgPgIgUQgJgVAAgXQAAgWAJgVQAIgUAPgPQAPgQAVgJQAUgJAYAAQAWAAAVAJQAUAJAPAQQAQAPAJAUQAIAVABAWQgBAXgIAVQgJAUgPAPQgPAQgVAJQgUAJgXAAQgYAAgUgJgABHg4QgLAGgIAIQgIAIgFAMQgEALAAALQAAAMAEALQAFALAIAJQAIAIALAFQALAFANAAQAMAAALgFQALgFAIgIQAIgJAFgLQAEgLAAgMQAAgLgEgLQgFgMgIgIQgIgIgLgGQgLgEgMAAQgNAAgLAEgAiSBuIAAiqIg8AAIAAgxICqAAIAAAxIg7AAIAACqg");
	this.shape.setTransform(-20.65,11.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.to_02_txt, new cjs.Rectangle(-41.3,0,41.3,22.5), null);


(lib.swallow_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AMWBpQgIgJAAgNQAAgNAIgIQAIgIANgBQANABAJAIQAIAIAAANQAAANgIAJQgJAIgNAAQgNAAgIgIgAEmBoQgUgJgPgPQgPgPgJgVQgJgVAAgXQAAgXAJgUQAJgUAPgQQAPgPAUgIQAVgJAXAAQAXAAAVAJQAUAIAPAPQAQAQAJAUQAIAUAAAXQAAAXgIAVQgJAVgPAPQgPAPgVAJQgUAIgYABQgXgBgVgIgAE7g3QgLAEgIAJQgIAIgFALQgEAMAAALQAAAMAEAMQAFAKAIAJQAIAIAKAFQALAFANAAQANAAALgFQALgFAIgIQAIgJAEgKQAFgMAAgMQAAgLgFgMQgEgLgIgIQgIgJgLgEQgLgFgNAAQgNAAgKAFgAsHBtQgPgDgLgGQgMgGgKgIQgJgIgIgJIAtgkQAKAPANAHQANAJATgBQANAAAHgFQAHgGAAgJQAAgFgDgEQgCgDgGgDIg7gRQgMgDgKgIQgKgGgGgLQgGgLAAgRQAAgPAGgMQAGgMAKgJQALgJAOgFQAPgFASAAQAPAAAMADQAMACALAFQAKAFAJAHIASARIgqAgQgIgLgLgIQgLgGgRAAQgNAAgGAGQgHAGAAAIQAAAEAEAEQADADAGACIA5APQAMAEALAIQAKAHAHAKQAGAMAAASQAAAPgGAOQgGANgLAJQgMAJgPAGQgPAGgSAAQgSAAgPgEgAKOBtIgmiIIgmCIIg0AAIg9jZIA1AAIAjCGIAmiGIAyAAIAmCGIAiiGIA1AAIg9DZgAA8BtIAAjZIA0AAIAACoIBfAAIAAAxgAhvBtIAAjZIA0AAIAACoIBfAAIAAAxgAizBtIgLggIhUAAIgLAgIg1AAIBRjZIAyAAIBRDZgAjOAfIgahJIgZBJIAzAAgAnIBtIgmiIIgmCIIg0AAIg8jZIA1AAIAiCGIAmiGIAyAAIAmCGIAjiGIA0AAIg9DZg");
	this.shape.setTransform(-84.075,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.swallow_txt, new cjs.Rectangle(-168.1,0,168.1,22.6), null);


(lib.starting_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AJMBoQgVgJgPgQQgPgPgIgVQgIgUAAgXQAAgWAJgVQAIgVAPgPQAPgPAUgJQAVgIAZAAQAgAAAXAMQAXAMAQAUIgsAfQgIgMgMgHQgNgHgRAAQgMAAgLAFQgMAFgIAIQgIAJgFALQgFAMAAAMQAAAOAFAMQAEALAJAJQAIAIALAEQAMAFANAAQATAAANgJQANgJAGgQIg9AAIAAgwIB1AAIAAAYQAAAWgHATQgIAUgOAPQgOAOgUAJQgTAJgYAAQgbAAgVgJgAqlBtQgOgDgMgGQgMgFgJgJQgKgIgHgJIAtgkQAJAPANAIQAOAIASAAQAOAAAHgGQAGgGAAgJQAAgFgCgEQgDgDgGgDIg6gRQgMgDgKgIQgKgGgHgLQgGgLAAgRQAAgOAGgMQAGgNALgJQAKgJAPgFQAPgFARAAQAPAAANADQAMACAKAFQALAFAJAIIASAQIgqAhQgIgMgLgHQgLgHgRAAQgNAAgHAGQgGAGAAAIQAAAFADADQADADAGACIA5AQQANAEAKAHQALAHAGALQAHALAAASQAAAQgHANQgGANgLAJQgLAKgPAFQgQAGgSAAQgSAAgPgEgAG/BuIhWiJIAACJIgyAAIAAjaIA3AAIBSCCIAAiCIAyAAIAADagADlBuIAAjaIA1AAIAADagABeBuIAAiqIg7AAIAAgwICpAAIAAAwIg7AAIAACqgAgjBuIgfhCIgpAAIAABCIg0AAIAAjaIBeAAQATAAAQAGQAPAGAKAKQAKAKAFAOQAGAOAAAPQAAAVgKAQQgIARgRAKIAoBPgAhrgCIAmAAQARAAAIgJQAHgIAAgNQAAgNgIgIQgIgHgQAAIgmAAgAjjBuIgLghIhUAAIgMAhIg0AAIBRjaIAyAAIBRDagAj+AfIgahIIgaBIIA0AAgAniBuIAAiqIg7AAIAAgwICpAAIAAAwIg7AAIAACqg");
	this.shape.setTransform(-74.225,11.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starting_txt, new cjs.Rectangle(-148.4,0,148.4,22.6), null);


(lib.someone_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("ALZBpQgIgJAAgNQAAgNAIgIQAIgIANgBQANABAJAIQAIAIAAANQAAANgIAJQgJAIgNAAQgNAAgIgIgACZBoQgVgJgPgPQgPgPgJgVQgIgVAAgXQAAgXAIgUQAJgUAPgQQAPgPAVgIQAUgJAYAAQAXAAAUAJQAVAIAPAPQAPAQAJAUQAJAUAAAXQAAAXgJAVQgJAVgPAPQgPAPgUAJQgVAIgXABQgYgBgUgIgACtg3QgLAEgIAJQgIAIgEALQgFAMAAALQAAAMAFAMQAEAKAIAJQAIAIALAFQALAFANAAQAMAAALgFQALgFAIgIQAIgJAFgKQAEgMAAgMQAAgLgEgMQgFgLgIgIQgIgJgLgEQgLgFgMAAQgNAAgLAFgAoABoQgUgJgPgPQgPgPgJgVQgJgVAAgXQAAgXAJgUQAJgUAPgQQAPgPAUgIQAVgJAXAAQAXAAAVAJQAUAIAPAPQAQAQAJAUQAIAUAAAXQAAAXgIAVQgJAVgPAPQgPAPgVAJQgUAIgYABQgXgBgVgIgAnrg3QgLAEgIAJQgIAIgFALQgEAMAAALQAAAMAEAMQAFAKAIAJQAIAIAKAFQALAFANAAQANAAALgFQALgFAIgIQAIgJAEgKQAFgMAAgMQAAgLgFgMQgEgLgIgIQgIgJgLgEQgLgFgNAAQgNAAgKAFgArKBtQgPgDgLgGQgMgGgKgIQgJgIgIgJIAtgkQAKAPANAHQANAJATgBQANAAAHgFQAHgGAAgJQAAgFgDgEQgCgDgGgDIg7gRQgMgDgKgIQgKgGgGgLQgGgLAAgRQAAgPAGgMQAGgMAKgJQALgJAOgFQAPgFASAAQAPAAAMADQAMACALAFQAKAFAJAHIASARIgqAgQgIgLgLgIQgLgGgRAAQgNAAgGAGQgHAGAAAIQAAAEAEAEQADADAGACIA5APQAMAEALAIQAKAHAHAKQAGAMAAASQAAAPgGAOQgGANgLAJQgMAJgPAGQgPAGgSAAQgSAAgPgEgAIjBtIAAjZICXAAIAAAwIhjAAIAAAkIBjAAIAAAwIhjAAIAAAlIBjAAIAAAwgAHUBtIhWiIIAACIIgyAAIAAjZIA3AAIBSCCIAAiCIAyAAIAADZgAhXBtIAAjZICWAAIAAAwIhiAAIAAAkIBiAAIAAAwIhiAAIAAAlIBiAAIAAAwgAimBtIAAiJIg6BMIg5hMIAACJIgzAAIAAjZIAxAAIA7BSIA9hSIAwAAIAADZg");
	this.shape.setTransform(-77.975,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.someone_txt, new cjs.Rectangle(-155.9,0,155.9,22.6), null);


(lib.should_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("ABiBrQgQgGgMgMQgLgLgGgRQgHgQAAgVIAAiEIA1AAIAACEQAAASAKAKQAJAKARAAQAPAAAKgKQAKgKAAgSIAAiEIA1AAIAACEQAAAVgGAQQgGARgMALQgLAMgRAGQgQAGgUAAQgVAAgQgGgAiDBoQgVgJgPgPQgPgPgJgVQgIgUAAgYQAAgWAIgVQAJgUAPgPQAPgQAVgIQAUgJAYAAQAXAAAUAJQAVAIAPAQQAOAPAJAUQAJAVAAAWQAAAYgJAUQgJAVgOAPQgPAPgUAJQgVAJgXAAQgYAAgUgJgAhvg3QgLAFgIAIQgIAIgEAMQgFALAAALQAAANAFALQAEALAIAIQAIAJALAEQALAFANAAQAMAAALgFQALgEAIgJQAIgIAFgLQAEgLAAgNQAAgLgEgLQgFgMgIgIQgIgIgLgFQgLgFgMAAQgNAAgLAFgAoqBtQgOgDgMgGQgMgFgJgJQgKgIgHgJIAtgkQAJAPANAIQAOAIASAAQAOAAAHgGQAGgGAAgJQAAgFgCgEQgDgDgGgDIg6gRQgMgDgKgIQgKgGgHgLQgGgLAAgRQAAgOAGgMQAGgNALgJQAKgJAPgFQAPgFARAAQAPAAANADQAMACAKAFQALAFAJAIIASAQIgqAhQgIgMgLgHQgLgHgRAAQgNAAgHAGQgGAGAAAIQAAAFADADQADADAGACIA5AQQANAEAKAHQALAHAGALQAHALAAASQAAAQgHANQgGANgLAJQgLAKgPAFQgQAGgSAAQgSAAgPgEgAGsBuIAAjaIBNAAQAaAAAVAIQAVAJAPAOQAPAPAIAUQAIAUAAAWQAAAYgIAUQgJAUgPAOQgPAPgVAIQgVAJgYAAgAHgA9IAYAAQAOAAAMgFQALgEAIgJQAJgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgIgIQgIgIgMgFQgMgFgPAAIgXAAgAD7BuIAAjaIA0AAIAACoIBgAAIAAAygAkdBuIAAhUIhIAAIAABUIg0AAIAAjaIA0AAIAABTIBIAAIAAhTIA0AAIAADag");
	this.shape.setTransform(-61.925,11.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.should_txt, new cjs.Rectangle(-123.8,0,123.8,22.6), null);


(lib.see_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AjJBtQgOgDgMgGQgMgFgJgJQgKgIgHgJIAtgkQAJAPANAIQAOAIASAAQAOAAAHgGQAGgGAAgJQAAgFgCgEQgDgDgGgDIg6gRQgMgDgKgIQgKgGgHgLQgGgLAAgRQAAgOAGgMQAGgNALgJQAKgJAPgFQAPgFARAAQAPAAANADQAMACAKAFQALAFAJAIIASAQIgqAhQgIgMgLgHQgLgHgRAAQgNAAgHAGQgGAGAAAIQAAAFADADQADADAGACIA5AQQANAEAKAHQALAHAGALQAHALAAASQAAAQgHANQgGANgLAJQgLAKgPAFQgQAGgSAAQgSAAgPgEgABzBuIAAjaICXAAIAAAwIhjAAIAAAkIBjAAIAAAwIhjAAIAAAlIBjAAIAAAxgAg9BuIAAjaICWAAIAAAwIhiAAIAAAkIBiAAIAAAwIhiAAIAAAlIBiAAIAAAxg");
	this.shape.setTransform(-26.625,11.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.see_txt, new cjs.Rectangle(-53.2,0,53.2,22.6), null);


(lib.it_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AAOBtIAAipIg7AAIAAgxICpAAIAAAxIg7AAIAACpgAh7BtIAAjaIA1AAIAADag");
	this.shape.setTransform(-12.375,10.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.it_txt, new cjs.Rectangle(-24.7,0,24.7,21.9), null);


(lib.im_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("ACMBvIAAiKIg6BNIg5hMIAACJIgyAAIAAjaIAxAAIA6BSIA9hSIAwAAIAADagAi+BvIAAjaIA1AAIAADagAhmgXQANgLAHgJQAGgKACgKQgEAIgKAAQgKAAgIgIQgGgHAAgLQAAgNAJgIQAIgIANAAQARAAAJAKQAHALABAQQgBAUgJAPQgLAPgRAOg");
	this.shape.setTransform(-19.1,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.im_txt, new cjs.Rectangle(-38.2,0,38.2,22.3), null);


(lib.hurts_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AFsBtQgOgDgMgGQgMgFgJgJQgKgIgHgJIAtgkQAJAPANAIQAOAIASAAQAOAAAHgGQAGgGAAgJQAAgFgCgEQgDgDgGgDIg6gRQgMgDgKgIQgKgGgHgLQgGgLAAgRQAAgOAGgMQAGgNALgJQAKgJAPgFQAPgFARAAQAPAAANADQAMACAKAFQALAFAJAIIASAQIgqAhQgIgMgLgHQgLgHgRAAQgNAAgHAGQgGAGAAAIQAAAFADADQADADAGACIA5AQQANAEAKAHQALAHAGALQAHALAAASQAAAQgHANQgGANgLAJQgLAKgPAFQgQAGgSAAQgSAAgPgEgAjgBrQgQgGgMgMQgLgLgGgRQgHgQAAgVIAAiEIA1AAIAACEQAAASAKAKQAJAKARAAQAPAAAKgKQAKgKAAgSIAAiEIA1AAIAACEQAAAVgGAQQgGARgMALQgLAMgRAGQgQAGgUAAQgVAAgQgGgAC3BuIAAiqIg8AAIAAgwICqAAIAAAwIg7AAIAACqgAA0BuIgfhCIgoAAIAABCIg0AAIAAjaIBdAAQAUAAAPAGQAQAGAKAKQALAKAFAOQAFAOAAAPQAAAVgJAQQgKARgQAKIApBPgAgTgCIAlAAQARAAAIgJQAIgIAAgNQAAgNgIgIQgIgHgRAAIglAAgAlkBuIAAhUIhIAAIAABUIg0AAIAAjaIA0AAIAABTIBIAAIAAhTIA1AAIAADag");
	this.shape.setTransform(-48.075,11.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hurts_txt, new cjs.Rectangle(-96.1,0,96.1,22.6), null);


(lib.safeCare_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A8A9A7").s().p("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");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.safeCare_Logo, new cjs.Rectangle(-550,-361.8,1100,723.7), null);


(lib.BSWH_Logo_Dallas = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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QAAAAAAABQAAAAAAAAIAAAMQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAABABAAQABAAABAAIAdAAQADABAAAFQAAAEgCABIgfAAIgEABIgBAFIAAAzQAAAOAEAHQAEAJAMAAIAHgBIAHgEQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADQgLANgSAAQgPAAgHgJgADgg0QgFgHAAgNIAAg+IgBgHQgBgBgDAAIgIAAIgBgDIAAgDQANgEAFgEQAGgHAFgJIADAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIAAAMQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAABABAAQABAAAAAAIAfAAQACABAAAFQAAAEgCABIgfAAIgEABQgBABAAAEIAAAzQAAAOADAHQAFAJAMAAIAIgBIAGgEQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIAAADQgLANgRAAQgRAAgHgJgACPg0QgGgHAAgNIAAg+IAAgHQgBgBgEAAIgIAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgDQANgEAEgEQAGgHAFgJIADAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIAAAMIABAFQAAAAAAAAQABAAAAAAQABABAAAAQABAAABAAIAeAAQACABAAAFQAAAEgCABIgfAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAEIAAAzQgBAOAEAHQAEAJANAAIAHgBIAGgEQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQgMANgRAAQgRAAgGgJgAAPg6QgPgQgBgZQABgZAQgRQAQgQAYAAQAYAAAPAPQAQAQAAAZQAAAZgPAQQgQARgaAAQgYAAgPgPgAAfiJQgJANAAAWQAAAUAJAOQAJARARAAQAQAAAIgPQAHgNAAgSQAAgUgIgPQgKgRgRAAQgNAAgJAMgAhWg5QgPgPAAgZQgBgYARgRQARgTAgAAQANAAALAEQAEAEAAAHQAAAEgCADQgCADgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgMgOgPAAQgPAAgLALQgLAMAAAVQAAARALANQAMAQAVAA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");
	this.shape.setTransform(-16.5,-8.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo_Dallas, new cjs.Rectangle(-148.6,-33.3,264.3,49.699999999999996), null);


(lib.head_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.head_img();
	this.instance.setTransform(-97.8,-74.55,0.9403,0.9403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_mc, new cjs.Rectangle(-97.8,-74.5,179.6,118.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjECBIECkBICHAAIAAEBg");
	mask.setTransform(19.65,12.925);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.004,0.608],-19.6,0,19.7,0).s().p("AjECBIECkBICHAAIAAEBg");
	this.shape.setTransform(19.65,12.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,39.3,25.9), null);


(lib.txt_deepBreath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// someone_txt
	this.instance = new lib.someone_txt();
	this.instance.setTransform(-63.25,204.8,1,1,0,0,0,-78,11.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({y:182.3,alpha:1},17,cjs.Ease.quadOut).wait(68).to({_off:true},1).wait(156));

	// see_txt
	this.instance_1 = new lib.see_txt();
	this.instance_1.setTransform(-115.65,174.25,1,1,0,0,0,-26.7,11.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({y:151.75,alpha:1},17,cjs.Ease.quadOut).wait(71).to({_off:true},1).wait(156));

	// should_txt
	this.instance_2 = new lib.should_txt();
	this.instance_2.setTransform(-25,144.8,1,1,0,0,0,-62,11.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({y:122.3,alpha:1},17,cjs.Ease.quadOut).wait(74).to({_off:true},1).wait(156));

	// we_txt
	this.instance_3 = new lib.we_txt();
	this.instance_3.setTransform(-117.75,144.95,1,1,0,0,0,-23.6,11);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({y:122.45,alpha:1},18,cjs.Ease.quadOut).wait(77).to({_off:true},1).wait(156));

	// worry_txt
	this.instance_4 = new lib.worry_txt();
	this.instance_4.setTransform(-33.85,113,1,1,0,0,0,-58.4,11.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({y:90.5,alpha:1},17,cjs.Ease.quadOut).wait(97).to({_off:true},1).wait(156));

	// to_02_txt
	this.instance_5 = new lib.to_02_txt();
	this.instance_5.setTransform(-120.75,112.4,1,1,0,0,0,-20.7,11.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({y:89.9,alpha:1},17,cjs.Ease.quadOut).wait(100).to({_off:true},1).wait(156));

	// starting_txt
	this.instance_6 = new lib.starting_txt();
	this.instance_6.setTransform(-20.95,82.9,1,1,0,0,0,-74.2,11.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({y:60.4,alpha:1},17,cjs.Ease.quadOut).wait(103).to({_off:true},1).wait(156));

	// im_txt
	this.instance_7 = new lib.im_txt();
	this.instance_7.setTransform(-121.8,82.8,1,1,0,0,0,-19.1,11.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({y:60.3,alpha:1},17,cjs.Ease.quadOut).wait(106).to({_off:true},1).wait(156));

	// swallow_txt
	this.instance_8 = new lib.swallow_txt();
	this.instance_8.setTransform(-58.65,51.55,1,1,0,0,0,-84.1,11.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({y:29.05,alpha:1},17,cjs.Ease.quadOut).wait(125).to({_off:true},1).wait(156));

	// to_txt
	this.instance_9 = new lib.to_txt();
	this.instance_9.setTransform(17.75,22.05,1,1,0,0,0,-20.7,11.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({y:-0.45,alpha:1},17,cjs.Ease.quadOut).wait(128).to({_off:true},1).wait(156));

	// hurts_txt
	this.instance_10 = new lib.hurts_txt();
	this.instance_10.setTransform(-59.25,22,1,1,0,0,0,-48.1,11.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({y:-0.5,alpha:1},17,cjs.Ease.quadOut).wait(131).to({_off:true},1).wait(156));

	// it_txt
	this.instance_11 = new lib.it_txt();
	this.instance_11.setTransform(-128.55,22.15,1,1,0,0,0,-12.4,11);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-0.35,alpha:1},17,cjs.Ease.quadOut).wait(134).to({_off:true},1).wait(156));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.7,-11.7,196,227.79999999999998);


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

	// TAKE_QUIZ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3EDE8").s().p("AgfArIAAgQIArg1IgpAAIAAgQIA8AAIAAAPIgqA2IAqAAIAAAQg");
	this.shape.setTransform(28.65,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3EDE8").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_1.setTransform(23,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3EDE8").s().p("AgNApQgGgCgFgFQgEgEgDgGQgCgHAAgIIAAgzIARAAIAAA0QAAAIAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgIIAAg0IARAAIAAAzQAAAIgDAHQgCAGgFAEQgEAFgHACQgGACgHAAQgHAAgGgCg");
	this.shape_2.setTransform(16.975,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3EDE8").s().p("AgRAoQgIgDgGgGQgGgGgDgIQgEgIAAgJQAAgIAEgIQADgIAGgGQAGgGAIgDQAIgEAJAAQAIAAAIAEQAIADAGAGQAGAGADAIQAEAIAAAIQAAAIgDAHQgDAHgEAFIAMAQIgTAAIgFgGIgLAFQgFACgFAAQgJAAgIgEgAgLgZQgFACgEAEQgDAEgCAFQgDAFAAAFQAAAGADAFQACAFADAEQAEAEAFACQAFACAGAAIAGgBIAGgCIgSgYIASAAIALANIACgGIABgIQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_3.setTransform(7.775,-0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3EDE8").s().p("AgcArIAAhVIA5AAIAAAQIgoAAIAAATIAoAAIAAAPIgoAAIAAATIAoAAIAAAQg");
	this.shape_4.setTransform(-4.025,-0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3EDE8").s().p("AAQArIgTgqIgOAQIAAAaIgRAAIAAhVIARAAIAAAoIAfgoIAUAAIgbAgIAbA1g");
	this.shape_5.setTransform(-11.55,-0.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3EDE8").s().p("AAXArIgFgQIgjAAIgGAQIgQAAIAghVIAPAAIAgBVgAAMAMIgMghIgLAhIAXAAg");
	this.shape_6.setTransform(-20.225,-0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3EDE8").s().p("AgHArIAAhFIgYAAIAAgQIA/AAIAAAQIgYAAIAABFg");
	this.shape_7.setTransform(-28.425,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmWCBIAAkBIMtAAIAAEBg");
	mask.setTransform(0,0.025);

	// _Clip_Group_
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(60.7,0,1,1,0,0,0,19.7,12.9);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:21.15,alpha:1},9,cjs.Ease.quadOut).wait(41));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01A882").s().p("AmWCBIAAkBIMtAAIAAEBg");
	this.shape_8.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(50));

	// _Path_
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-46.75,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,-18.9,96,40);


// stage content:
(lib.BSWH_DigestiveHealth_04_300x600 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

	// BSWH_Logo
	this.instance = new lib.BSWH_Logo_Dallas();
	this.instance.setTransform(166.6,61.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},9).wait(209));

	// topBlue
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003DA6").s().p("A4SIhIAAxBMAwlAAAIAARBg");
	this.shape_1.setTransform(150.5,-66.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({y:-46.9},0).wait(1).to({y:-28.75},0).wait(1).to({y:-12.55},0).wait(1).to({y:1.8},0).wait(1).to({y:14.2},0).wait(1).to({y:24.7},0).wait(1).to({y:33.3},0).wait(1).to({y:39.95},0).wait(1).to({y:44.75},0).wait(1).to({y:47.6},0).wait(1).to({y:48.55},0).wait(218));

	// txt_tellingYou
	this.instance_1 = new lib.txt_tellingYou();
	this.instance_1.setTransform(164.25,506.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},10).wait(208));

	// txt_yourGut
	this.instance_2 = new lib.txt_yourGut();
	this.instance_2.setTransform(164.25,488.95);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},10).wait(208));

	// safeCare_Logo
	this.instance_3 = new lib.safeCare_Logo();
	this.instance_3.setTransform(237,394.65,0.1629,0.1629,15.9609,0,0,0.1,0.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).to({regX:0.2,regY:0.7,scaleX:0.0741,scaleY:0.0741,rotation:15.9551,x:237.05,alpha:1},7,cjs.Ease.quadOut).to({regX:0.1,regY:0.6,scaleX:0.0856,scaleY:0.0856,rotation:15.9622},4,cjs.Ease.quadOut).wait(117));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn("single",0);
	this.instance_4.setTransform(88.35,577.45,1.3934,1.3934,0,0,0,0.1,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({regY:0.1,y:553.45,alpha:1,mode:"synched",loop:false},11,cjs.Ease.quadOut).wait(203));

	// txt_deepBreath
	this.instance_5 = new lib.txt_deepBreath("synched",0,false);
	this.instance_5.setTransform(173.8,168.65);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(151).to({mode:"single",startPosition:151},0).wait(58));

	// head_mc
	this.instance_6 = new lib.head_mc();
	this.instance_6.setTransform(243.25,701.2,1,1,0,0,0,0,43.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({y:600.2},14,cjs.Ease.quadOut).wait(204));

	// BlueBox
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003DA6").s().p("Ay5LpIAA1DIBHhGIBGhIMAjmAAAIAAXRg");
	this.shape_2.setTransform(361.05,676.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003DA6").s().p("Ay5LpIAA1EICNiNMAjmAAAIAAXRg");
	this.shape_3.setTransform(361.05,650.6);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003DA6").s().p("Ay5LpIAA1DICNiOMAjmAAAIAAXRg");
	this.shape_4.setTransform(361.05,606.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:676.3}}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:606.55}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:558.85}}]},1).to({state:[{t:this.shape_4,p:{y:547.85}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{y:528.25}}]},1).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(1).to({y:627.35},0).to({_off:true},1).wait(1).to({_off:false,y:588.2},0).wait(1).to({y:572.3},0).to({_off:true},1).wait(2).to({_off:false,y:539.25},0).wait(1).to({y:533.15},0).wait(1).to({y:529.45},0).to({_off:true},1).wait(218));

	// GreenBox
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A881").s().p("Ay5LpIAA3RMAjmAAAIBGBIIBHBGIAAVDg");
	this.shape_5.setTransform(119.05,676.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A881").s().p("Ay5LpIAA3RMAjmAAAICNCNIAAVEg");
	this.shape_6.setTransform(119.05,650.6);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A881").s().p("Ay5LpIAA3RMAjmAAAICNCOIAAVDg");
	this.shape_7.setTransform(119.05,606.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:676.3}}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:606.55}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:558.85}}]},1).to({state:[{t:this.shape_7,p:{y:547.85}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{y:528.25}}]},1).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).wait(1).to({y:627.35},0).to({_off:true},1).wait(1).to({_off:false,y:588.2},0).wait(1).to({y:572.3},0).to({_off:true},1).wait(2).to({_off:false,y:539.25},0).wait(1).to({y:533.15},0).wait(1).to({y:529.45},0).to({_off:true},1).wait(218));

	// Background_color
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4EDE7").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_8.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(229));

	// temp_03_jpg
	this.instance_7 = new lib.temp_03();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(229));

	// temp_02_jpg
	this.instance_8 = new lib.temp_02();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(229));

	// temp_01_jpg
	this.instance_9 = new lib.temp_01();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(229));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(145,178.6,337.1,572.1999999999999);
// library properties:
lib.properties = {
	id: 'BD94237A628B41D499830A95CE062363',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap1.png", id:"Bitmap1"},
		{src:"head_img.png", id:"head_img"},
		{src:"temp_01.jpg", id:"temp_01"},
		{src:"temp_02.jpg", id:"temp_02"},
		{src:"temp_03.jpg", id:"temp_03"}
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
an.compositions['BD94237A628B41D499830A95CE062363'] = {
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