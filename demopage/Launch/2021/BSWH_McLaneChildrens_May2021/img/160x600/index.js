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
// helper functions:

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


(lib.window_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhCgdQgGgaAHgLIAHgFIBRgeIAOAGIAgCtIhjAYg");
	this.shape.setTransform(0.006,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.window_mc, new cjs.Rectangle(-6.9,-10.2,13.9,20.4), null);


(lib.txt_rightHere = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AEiBtQgHgGAAgKQAAgJAHgHQAHgHAJAAQAJAAAIAHQAGAHAAAJQAAAKgGAGQgIAIgJgBQgJABgHgIgACBBdQgWgXABgkQgBghAWgYQAWgZAhAAQAhAAAXAZQAVAXAAAcQAAAUgTAAIhbAAQACAPALAIQAMAIAPAAQANAAAQgIQAQgKAEABQAHgBAGAHQAEAFAAAHQABANgXAMQgXALgYAAQgkABgXgYgADaATQgCgOgIgIQgKgKgOABQgOgBgJAKQgJAIgCAOIBEAAIAAAAgAiQBdQgVgXgBgkQAAghAWgYQAWgZAhAAQAhAAAXAZQAVAXAAAcQAAAUgTAAIhbAAQACAPAMAIQAKAIARAAQAMAAAQgIQAPgKAFABQAHgBAFAHQAFAFAAAHQAAANgXAMQgWALgZAAQgjABgXgYgAg3ATQgBgOgKgIQgIgKgPABQgOgBgKAKQgIAIgCAOIBEAAIAAAAgAAMBsQgGgHAAgKIAAh0QAAgKAHgGQAGgGAJABQAVgBAAATIAAAAQANgTASABQAIAAAGAFQAGAHAAALQABAJgJAEIgRAIQgNAEgFAFQgIAHAAALIAABCQAAAKgGAHQgGAGgKABQgJgBgGgGgAjgBsQgHgHAAgKIAAhLQAAgOgIgIQgIgGgMAAQgMgBgHAJQgIAIAAAMIAABLQAAAKgGAHQgGAGgJABQgKgBgFgGQgHgHAAgKIAAi2QAAgLAHgHQAFgGAKgBQAJABAGAGQAGAHAAALIAAA5QANgOAaAAQAbAAAPAPQARAQABAZIAABTQgBAKgGAHQgGAGgJABQgKgBgFgGg");
	this.shape.setTransform(-89.7,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB71B").s().p("AiYE1QgbgJAAgQQAAgGAFgGQAGgGAGAAQAGAAARAGQARAHAOAAQAQAAAKgJQAKgJAAgQIAAgKIgBAAQgNAUgeAAQgfAAgTgZQgQgXAAgiQABgiASgYQAVgZAfAAQAbAAAMATQAEgSASAAQAJAAAGAHQAGAGAAALIAAB8QAAAmgXAUQgWATglAAQgUAAgVgHgAiDCPQgHANAAAQQAAATAHAMQAJANARAAQAPAAAKgNQAJgMgBgRQABgSgJgNQgJgOgQAAQgQAAgKAOgAC7D3QgGgHABgKIAAhjIgLAAQgSAAAAgTQAAgIAFgGQAGgFAHAAIALAAIAAgZQgBgLAGgHQAGgGAKAAQAJAAAGAGQAGAHAAALIAAAZIANAAQATAAABATQgBATgTAAIgNAAIAABjQAAAKgGAHQgGAGgJAAQgKAAgGgGgABlD3QgHgHABgKIAAhLQAAgPgJgIQgHgHgMAAQgNAAgHAJQgIAIABANIAABLQAAAKgHAHQgGAGgJAAQgKAAgFgGQgGgHAAgKIAAi4QAAgKAGgHQAFgHAKAAQAJAAAGAHQAHAHAAAKIAAA6IAAAAQAMgOAbAAQAaAAAQAPQARAQAAAaIAABTQgBAKgGAHQgGAGgJAAQgJAAgGgGgAjzD3QgFgHAAgKIAAhzQAAgLAFgGQAHgHAJAAQAJAAAHAHQAGAGAAALIAABzQAAAKgGAHQgHAGgJAAQgJAAgHgGgAltD3QgGgHAAgKIAAh1QAAgKAHgGQAGgGAJAAQAVAAAAASQAMgSASAAQAIAAAHAGQAGAHAAALQAAAIgIAFIgRAHQgNAGgFAEQgIAIAAALIAABCQAAAKgHAHQgFAGgKAAQgKAAgFgGgAj0BEQgHgIAAgJQAAgKAHgHQAIgHAJAAQAJAAAIAHQAHAHAAAKQAAAKgHAHQgHAIgKAAQgJAAgIgIgAD6h4QgWgXAAgkQAAghAVgYQAXgaAgAAQAiAAAXAaQAVAXAAAdQAAATgTAAIhbAAQACAPALAJQALAHAQAAQAMAAAQgIQAQgJAFAAQAHAAAFAGQAGAFgBAHQABAOgXALQgXAMgZAAQgjAAgXgYgAFTjBQgCgPgIgJQgKgJgPAAQgOAAgIAJQgJAJgCAPIBEAAIAAAAgAhVh4QgXgXAAgkQABghAVgYQAWgaAhAAQAhAAAWAaQAVAXAAAdQAAATgTAAIhaAAQACAPAMAJQAKAHARAAQAMAAAPgIQAPgJAFAAQAHAAAFAGQAGAFgBAHQABAOgXALQgWAMgZAAQgjAAgWgYgAACjBQgBgPgJgJQgIgJgPAAQgOAAgJAJQgJAJgCAPIBDAAIAAAAgACNhpQgFgGgBgLIAAh1QABgKAGgGQAHgFAJAAQAUAAAAASIABAAQAMgSATAAQAHAAAGAGQAHAGAAALQAAAJgIAEIgSAIQgNAGgFAEQgHAHgBALIAABCQAAALgFAGQgHAHgJAAQgJAAgHgHgAjKhoQgJgGgCgKIgihzIgBAAIgiBzQgDAKgIAGQgIAGgLAAQgYAAgGgXIgmijIgBgKQAAgIAGgFQAGgHAJAAQAUAAAEAWIAaB+IAAAAIAniCQAFgSATAAQARAAAFASIAnCCIABAAIAZh+QAEgWAUAAQAJAAAHAHQAFAFAAAIIgCAKIglCjQgGAXgXAAQgMAAgHgGgAA7jrQgGgGAAgIQAAgEAEgIIAYgsQAGgKALAAQAJAAAGAFQAGAGAAAIQAAAEgEAIIgZAtQgFAKgMAAQgIAAgGgGg");
	this.shape_1.setTransform(-86.05,-2.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rightHere, new cjs.Rectangle(-124.2,-39,226,98), null);


(lib.txt_neverFear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACUEbQgIgHAAgKQAAgKAIgGQAGgHAJAAQAKAAAGAHQAIAGAAAKQAAAKgIAHQgGAGgKAAQgJAAgGgGgAhhEKQgUgXAAgkQAAgjAVgYQAUgYAeAAQAbAAANATQACgHAEgFQAHgFAHAAQANAAAFAKQADAFAAAMIAABqQAAANgDAFQgFAKgNAAQgOAAgGgSQgQAUgYAAQgeAAgVgXgAhCCxQgIAMAAASQAAARAIAMQAJAOARAAQAPAAAKgOQAIgMAAgRQAAgRgIgNQgKgOgPAAQgRAAgJAOgAkNEKQgVgXAAgkQgBgiAWgYQAWgZAhAAQAhAAAYAZQAUAYAAAdQAAATgTAAIhbAAQACAPAMAIQAKAIAQAAQANAAAQgJQAQgJAFAAQAGAAAFAGQAGAGgBAHQAAANgWAMQgXALgYAAQgkAAgXgXgAi0DAQgCgOgIgJQgKgJgOAAQgOAAgJAJQgJAJgBAOIBDAAIAAAAgAA+EZQgGgHAAgKIAAh1QAAgKAHgGQAHgFAIAAQAVAAAAARIAAAAQANgRASAAQAIAAAFAFQAIAHAAALQAAAIgJAFIgRAHIgSAKQgIAIAAALIAABCQAAAKgFAHQgHAGgJAAQgKAAgGgGgAloEZQgHgHAAgKIAAhjIgIAAQgUAAAAgTQABgIAFgFQAGgGAIAAIAIAAIAAgVQAAgYAOgNQAMgNAUAAQAeAAAAAUQAAASgSAAQgHAAgDACQgEADgBALIAAARIAPAAQAUAAAAATQAAATgUAAIgPAAIAABjQABAKgHAHQgGAGgIAAQgKAAgGgGgACVheQgXgXAAgjQABgiAVgZQAWgZAiAAQAhAAAWAaQAVAXAAAdQABATgUAAIhbAAQACAPAMAJQALAHAQAAQALAAARgIQAPgJAFAAQAHAAAFAGQAGAGAAAGQAAAOgYALQgWALgYAAQgkAAgWgXgADuinQgDgPgJgJQgIgJgOAAQgPAAgJAJQgJAKgCAOIBFAAIAAAAgAihheQgWgXAAgjQAAgiAWgZQAWgZAhAAQAhAAAXAaQAVAXAAAdQAAATgSAAIhcAAQACAPALAJQAMAHAPAAQANAAAPgIQAQgJAFAAQAHAAAFAGQAGAGgBAGQABAOgXALQgXALgYAAQgkAAgXgXgAhIinQgCgPgIgJQgKgJgOAAQgOAAgJAJQgJAKgCAOIBEAAIAAAAgAEzhPQgFgGAAgLIAAh1QAAgJAGgHQAHgFAIAAQAWAAgBASIABAAQAMgSASAAQAIAAAGAGQAGAGAAALQAAAJgHAEIgSAIQgNAGgFAEQgHAHgBALIAABCQAAALgFAGQgHAHgKAAQgJAAgGgHgAAhhNQgEgDgEgKIgqhvQgDgGAAgGQAAgKAIgGQAGgFAHAAQAPAAAFAQIAbBUIABAAIAbhUQAEgQAPAAQAJAAAGAFQAHAGAAAKQAAAGgCAGIgsBvQgDAKgEADQgGAFgKAAQgKAAgFgFgAj1hSIheh8IgBAAIAABvQABALgHAGQgGAGgKAAQgJAAgHgGQgGgGAAgLIAAipQAAgLAGgGQAHgHAJAAQAEAAAGADQAGADADAEIBeB+IAAAAIAAhwQAAgLAHgGQAHgHAJAAQAKAAAGAHQAHAGgBALIAACpQABALgHAGQgGAGgKAAQgLAAgIgKg");
	this.shape.setTransform(-70.05,-16.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_neverFear, new cjs.Rectangle(-109.6,-45.4,211.39999999999998,64.4), null);


(lib.txt_learnMore = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgZAcQgKgLAAgRQAAgPAKgLQAKgMAPAAQAPAAALAMQAKALAAAOQAAAIgJAAIgqAAQABAHAGAEQAFADAGAAQAGAAAIgEQAHgEACAAQADAAADADQACADAAADQAAAGgKAGQgLAFgMAAQgPAAgLgLgAAQgGQgBgHgEgEQgEgEgHAAQgGAAgEAEQgEAFgBAGIAfAAIAAAAg");
	this.shape.setTransform(33.075,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAjQgDgDAAgFIAAg2QAAgFADgDQADgCAEAAQAKAAAAAIIAAAAQAFgIAIAAQAEAAADADQADADAAAFQAAAEgEACIgIADIgIAFQgDAEAAAFIAAAeQAAAFgDADQgDADgEAAQgFAAgCgDg");
	this.shape_1.setTransform(26.875,0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAbQgJgLAAgQQAAgPAKgLQALgMAOAAQAPAAALAMQAKALAAAPQAAAQgKALQgKAMgQAAQgPAAgLgMgAgLgNQgEAGAAAHQAAAIAEAGQAEAGAHAAQAHAAAFgGQAEgGAAgIQAAgHgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_2.setTransform(19.7,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlAjQgDgDAAgFIAAgiQAAgGgEgEQgDgEgFAAQgFAAgEAEQgDAEAAAGIAAAiQAAAFgCADQgEAEgEgBQgDABgDgEQgDgDAAgFIAAgiQAAgGgDgEQgDgEgGAAQgLAAgBAOIAAAiQAAAFgCADQgDAEgFgBQgEABgDgEQgDgDAAgFIAAg1QAAgEADgEQADgDAEAAQAJAAAAAIQAJgIAKAAQANgBAHALQAEgFAHgDQAFgDAGABQAMgBAHAIQAIAGAAAOIAAAlQAAAFgDADQgCAEgFgBQgEABgDgEg");
	this.shape_3.setTransform(9.3,0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAjQgDgDAAgFIAAgiQAAgHgEgEQgDgDgGAAQgFAAgDAEQgEAEAAAGIAAAiQAAAFgDADQgDAEgEgBQgEABgDgEQgDgDAAgFIAAg1QAAgEADgEQADgDAEAAQAIAAABAIQAGgJANABQAMgBAIAIQAHAHAAANIAAAlQAAAFgDADQgCAEgFgBQgEABgDgEg");
	this.shape_4.setTransform(-5.375,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAjQgDgDAAgFIAAg2QAAgFADgDQADgCAEAAQAKAAAAAIIAAAAQAFgIAIAAQAEAAADADQADADAAAFQAAAEgEACIgIADIgIAFQgDAEAAAFIAAAeQAAAFgDADQgDADgEAAQgFAAgCgDg");
	this.shape_5.setTransform(-11.675,0.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAcQgKgLAAgRQAAgPAKgMQAJgLAOAAQAMAAAHAJQAAgDADgDQADgCADAAQAHAAACAFIABAIIAAAxIgBAIQgCAFgHAAQgHAAgCgIQgIAJgLAAQgOAAgJgLgAgLgNQgEAGAAAHQAAAIAEAGQAFAGAGAAQAIAAAEgGQAEgGAAgIQAAgHgEgGQgEgGgIAAQgHAAgEAGg");
	this.shape_6.setTransform(-19.125,0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAcQgKgLAAgRQAAgPAKgLQAKgMAPAAQAPAAALAMQAKALAAAOQAAAIgJAAIgqAAQABAHAGAEQAFADAGAAQAGAAAIgEQAHgEACAAQADAAADADQACADAAADQAAAGgKAGQgLAFgMAAQgPAAgLgLgAAQgGQgBgHgEgEQgEgEgHAAQgGAAgEAEQgEAFgBAGIAfAAIAAAAg");
	this.shape_7.setTransform(-27.275,0.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAyQgGAAgCgDQgDgDAAgFIAAhNQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFIAABFIAYAAQAEAAADADQADADAAAEQgBAEgCACQgDADgEAAg");
	this.shape_8.setTransform(-34.1,-1.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_learnMore, new cjs.Rectangle(-39.5,-9,79.1,18), null);


(lib.train_main = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#47BFAF").s().p("AAFCxQgfgmgygFQgSgCgYADQgvAFgbAaQgYipgWg6IgQg0QgEgKABgMQABgYAYgKIBwgoIAPgEQAPAAAEASIAoDDIEPgvIAiDxIjoAUQgGgSgQgTg");
	this.shape.setTransform(-0.01,-0.0007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.train_main, new cjs.Rectangle(-25.8,-21.4,51.7,42.8), null);


(lib.tealWheel_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#47BFAF").s().p("AgiAjQgPgOAAgVQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tealWheel_02, new cjs.Rectangle(-5,-5,10,10), null);


(lib.tealWheel_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#47BFAF").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tealWheel_01, new cjs.Rectangle(-4.2,-4.2,8.4,8.4), null);


(lib.star_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB71B").s().p("AgsCGQgSgeAKg2QgRgFgSgIQglgQgKgOIgCgDIABgEQAEgHANgKQAbgTAvgIQgBgUACgVQAEgrAOgGIACgBQAEgBADABQAQAGA2A7IAjgLQAkgIAJAIIABADQABADAAAEQgFAcggAwIATAeQATAiAAATQgBACgFABQgRAAgUgEQgcgGgWgOIgYAhQgdAggeAFQgEgBgBgCg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_mc, new cjs.Rectangle(-13.7,-13.6,27.5,27.299999999999997), null);


(lib.purple_wheel_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5F277E").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAQQgQAPgVAAQgVAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple_wheel_02, new cjs.Rectangle(-5.2,-5.2,10.4,10.4), null);


(lib.mclane_logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003DA6").s().p("AnwCIQAAgFAGAAIACAAQADAAACgDIAGgLIAAgGIgBgJIgLgbIgCgHQgCgDgDAAIgCgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgCIAWAAIACACIgBABIgDABQgBAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgBADAFAKIAEALIADAJQACAAADgJIAEgKIAFgNQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgEgBIAAgBIAAgCIAUAAIABACIAAABIgCABQgDAAgDADIgEAKIgIAPIgTAqQgDAGgGAAQgFAAgBgFgABFBxIgIgTIgHgRIgQAkIgCABIgCgBIgJgUIgXg1IgEgHQgBgCgFAAIgCgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAaAAIABABIAAACIgDABQgEAAgBACIAHARIAXAvIAKgUIABgGIAAgDIgPgeQgCgHgGAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAcAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgDABIgEABIACAGIAKAWIAGgRQAEgIAAgCQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAYAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgEABQgEAAgCADIgFAIQgGAKgEAKIgBADIABADIANAdIAMgaIANgmQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgFgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIATAAIAFgCIAHgFIABAAIAAABIAAArIAAACQAJgGAIAAQARAAAAAQIAAAWQAAAHABABQAAAAAAABQABAAAAABQAAAAABAAQABAAAAAAIAEABIABACIgBABIgZAAIgBgBIABgCIACgBQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgHIAAgTQAAgOgMAAQgGAAgEAEIgCADIAAAEIAAAWIAAAIQABACADAAIADABIABABIgBACIgZAAIAAgBIAAgCIADgBQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAgHIAAg6IAAgIIgCgBQgDABgCADIgIASIgJAVIgQAnIgCABgAk6BtIgCgIIgBgKIABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAHATAQAAQAHAAAFgEQAEgFAAgGQAAgLgLgHIgMgIQgOgJAAgNQAAgJAHgGQAHgHAMAAIANACIAEABQACAGAAAKIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgEgOgNAAQgPAAAAAOQgBAIALAHIALAGQAQAKAAAPQgBALgGAGQgIAHgNAAQgLAAgJgFgADvBpQgGgHAAgKQAAgLAHgJQAIgIALAAQAHAAAHAEQAEAFAAAGIgBADIgHABIgXAAIgEAAIAAAEQAAAJAGAHQAFAHAKAAQAHAAAFgGQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQgDAFgGAEQgGACgFAAQgMAAgGgIgAD4BEQgEADgBAEIACAAIAIAAQAMAAABgBIABgCQAAgEgBgCQgEgCgFAAQgEAAgFAEgADOBuQgCgEAAgHIAAgcIgBgEIgBAAIgEAAIgBgCIAAgBQAGgBACgDIAGgHQAAgBABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAGIABACIACAAIAOAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgOAAIgCAAIgBADIAAAYQABAGABAEQACAEAGAAIADgBIAEgBIABAAIAAABQgGAGgHAAQgIAAgEgDgAhoBuQgCgEgBgHIAAgcIAAgEIgDAAIgDAAIAAgCIAAgBQAFgBADgDIAFgHQABgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAGIABACIACAAIAOAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgBADIgOAAIgCAAIgBADIAAAYQAAAGACAEQACAEAGAAIAEgBIACgBIABAAIABABQgEAGgJAAQgJAAgCgDgAiPBuQgCgEAAgHIAAgcIgBgEIgCAAIgEAAIAAgCIAAgBQAFgBADgDQAEgCACgFQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAAGIAAACIADAAIAOAAIABADIgBADIgPAAIgCAAIAAADIAAAYQAAAGACAEQACAEAFAAIAEgBIADgBIABAAIAAABQgFAGgIAAQgHAAgEgDgAjLBqQgIgHAAgMQAAgMAIgHQAIgIAMAAQAKAAAIAHQAHAIAAALQAAAMgHAIQgIAHgMAAQgLAAgHgHgAjDBFQgFAGAAAKQABAKADAHQAEAIAJAAQAHAAAEgHQADgGAAgJQAAgJgDgHQgFgIgIAAQgHAAgDAFgAj7BrQgIgIABgLQgBgLAIgIQAJgJAOAAQAHAAAEACQACACAAADIgBADIgBACIgCgBQgGgHgHAAQgHAAgFAFQgGAGABAKQAAAIAEAGQAHAHAKAAQAJAAAEgHIACAAIABABQgEAHgGAEQgFACgHAAQgKAAgHgGgAmZBqQgHgHgBgMQABgMAHgHQAIgIALAAQAMAAAHAHQAHAIABALQgBAMgHAIQgHAHgMAAQgMAAgHgHgAmRBFQgFAGAAAKQAAAKAFAHQAEAIAIAAQAHAAAEgHQADgGAAgJQAAgJgDgHQgFgIgIAAQgGAAgEAFgAoDBuIgBgCIgGACQgFADgEAAQgFAAgEgCQgEgEAAgFQAAgEACgCQADgDAGgCIAQgGQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgGQABgLgKAAIgFABQgCACgBADIgBAEQgEACgEAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgEAIgGQAIgFAIAAQAOAAgBAPIgBAWQgBALAHAAIADgBIABgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgEAFgGAAQgFAAgEgDgAoLBbQgFABgDACQgCADgBADQABADABACQACADAFAAIADgCIAFgBIABgGIAAgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAgAgMBvIgIgFQgMAHgJAAQgMAAgHgHQgIgHAAgJQAAgOAOgGQgFgGAAgGQAAgGAFgFQAEgEAHAAQAFAAADACQAEADAAAEQAAAFgEACQgCACgCAAQgBAAgBAAQAAAAAAAAQgBgBABAAQAAAAAAgBQACgDAAgCQgDgFgFAAQgDgBgDADQgCABAAADQAAADACADQADADAGADQALAGAFAFQAIAGAGAMQAEgFAAgHQAAgFgDgEQgBgDgEAAQgDAAgCACIgDABQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBgBAAAAQABgEADgCQADgCAFAAIAMABIACAAIABgBIAAABQAAAHgIACQADAEAAAEQAAAJgHAIQADAFADACQADADADAAIAGgBIABAAQAAACgEACIgHABQgGAAgCgCgAg6BTQgBAJAIAHQAHAIAIAAQAGAAAIgDIgGgIIgCgEQgIgKgKgIIgDgCQgHACAAAJgACoBwIgBgBIABgCIADgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIABgIIAAgXIAAgFQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgBIAAgBIAAgBIAOgGIAAAAIAAAoIABAIQAAAAAAABQABAAAAABQABAAAAAAQABAAABAAIADABIAAACIgBABgAlkBwIgBgBQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBQAEAAAAgCIABgIIAAgXIgBgFIgDgDIAAgBIgBgBIABgBIAMgGIABAAIAAAIIABABQAJgHAFAAQAGAAAAAFQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEACIgCgBQgDgCgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQgCACgBAIIAAASIABAIQABACAEAAIAEABIABACIgBABgAm+BwIAAgBIAAgCIADgBQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAgHIAAg6QAAgGgBgCIgEgDIAAgBIgBgBIABgBIAOgGIABABIgBBNIABAIQAAACAEAAIADABIABACIgCABgApnBwIgBgBIAAgCIACgBQAFgBACgCQABgCAAgLIAAgwQAAgHgBgCQgBgDgFAAIgEgBIAAgBIAAgCQAMgBAQAAQAOAAAHAEQAKAEAAAMQAAALgNAGQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQAGABAFAFQAGAGAAAJQAAAMgIAHQgJAGgRAAgApTBFIgBADIAAATQAAAKACAEQAEADAGAAQAKAAAEgEQAGgFABgJQgBgJgFgFQgGgIgOAAIgGABgApTAgQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAAaIAAADIAHABQAKgBAEgDQAGgEgBgJQAAgIgFgFQgGgEgHAAIgHABgACvAwQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQACgCADAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgHAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgLgaQgKgEgGgHQgHgHgEgLQgDgJAAgNQgBgNAFgLQAEgKAGgHQAIgHAJgFQAKgDAJAAIAOABIAJAEQAFACACADQACADAAADQAAAFgDADQgDAEgEAAIgPgEIgHgBQgFAAgEACQgFADgDAEQgDAEgCAGQgCAHAAAHQgBAPAIAIQAHAJALAAIAHgBIAMgDIADgBQAFAAADACQACAEAAAEQABAEgDADQgDADgEACQgEADgGACIgOABQgKAAgKgEgAI/gYQgFgCgEgCQgDgCgCgEQgCgCgBgEQAAgEADgEQACgCAEAAIAFABIALAEIAGABQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAIADgEQgBgCgDgCIgTgJIgHgFIgEgGQgBgDAAgFQAAgGACgEQACgEAEgEQAEgDAFgCQAFgCAHAAQAGAAAFABIAIAEIAGAFQACADAAADQAAAEgCADQgEADgDAAIgFgBIgKgEIgEgBQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABIgBACIABADIAEACIALAFQAKAEAFAFQAEAGAAAIQABAGgCAEQgCAFgFADQgEAEgGACQgGADgGAAQgGAAgHgCgAGBgaQgHgDgFgGQgGgFgDgIQgDgIAAgIQAAgJADgIQADgHAFgGQAFgGAHgDQAIgDAIAAQAIAAAIADQAHADAFAFQAFAGADAHQACAGAAAJIgBAEIgBADIgFACIgEAAIgrAAQABAHAFADQAFAEAHAAQAGAAACgBIAHgDIAFgCIAFgBQAFAAACACQACACABAFQAAADgDAEIgHAGIgLAEQgHACgIAAQgIAAgIgDgAGGhTQgEAEgCAGIAgAAQgBgGgFgEQgEgEgFAAQgGAAgFAEgAiVgaQgHgDgGgGQgFgFgEgIQgCgIAAgIQAAgJACgIQAEgHAFgGQAEgGAJgDQAHgDAIAAQAIAAAHADQAIADAEAFQAGAGACAHQADAGAAAJIAAAEIgDADIgDACIgGAAIgpAAQAAAHAFADQAEAEAJAAQAEAAAEgBIAGgDIAGgCIAEgBQAEAAADACQACACAAAFQAAADgCAEIgIAGIgLAEQgGACgIAAQgIAAgIgDgAiQhTQgFAEAAAGIAeAAQAAgGgEgEQgFgEgGAAQgGAAgEAEgAlIgaQgGgDgFgGQgGgFgCgIQgDgIAAgIQAAgKADgHQADgIAFgFQAFgGAGgDQAHgDAHAAQAMAAAIAJQADgIAIAAQAFAAADAEQACAFAAAIIAAAvQABARgLAAQgIAAgDgIQgIAJgNAAQgGAAgHgDgAlBhPQgEAFgBAJQABAJAEAGQAEAFAHAAQAGAAAEgGQAFgFgBgJQABgJgFgEQgEgGgGAAQgHAAgEAFgAnRgaQgIgDgFgGQgGgFgCgIQgDgHAAgJQAAgKADgHQACgIAGgFQAFgFAIgEQAIgDAIAAQANAAAHAEQAGAEAAAHQAAAEgCADQgDADgEAAIgDgBIgJgCIgFAAQgHAAgEAFQgFAFABAJQgBAJAFAGQAEAFAJAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIAIgDIADAAQAEAAADADQACADAAAEQAAAEgCACQgCADgDACQgDACgFACIgMABQgJAAgGgDgADugbQgHgCgFgGQgFgGgDgIQgDgHAAgJQAAgJADgIQADgHAFgGQAEgFAIgDQAFgDAIAAQALAAAHAGIAAgVQAAgRAMAAQAMAAAAARIAABQQAAAJgDADQgDAFgGAAQgHAAgEgIQgIAIgLAAQgIAAgFgDgADzhPQgEAFAAAJQAAAJAEAGQAFAFAHAAQAGAAAFgFQADgGAAgJQAAgJgDgGQgFgFgGAAQgHAAgFAGgAoGglIgIhAIgLAzIgIAWQgDADgCAAIgFABQgHAAgCgCQgEgDgCgGIgPhCIgIA+QgBAIgDADQgDAEgGAAQgFAAgDgDQgEgDABgGIAAgHIANhJQABgHAFgFQADgEAHAAQAOAAADAPIAQA+IAPg/QADgOANAAQAJAAADAFQAEAEABAIIAMBPQAAAGgDADQgDADgFAAQgLAAgBgNgAHxgpIAAgaQAAgKgDgEQgDgEgHAAQgHAAgCAEQgDAFAAAIIAAAbQAAARgMAAQgMAAAAgRIAAgvQAAgRAMAAQAIAAADAIQAEgFAFgBQAGgCAGAAQANAAAIAIQAHAHAAAPIAAAiQABARgMAAQgMAAAAgRgAE1gpIAAgvQAAgRAMAAQAGAAAFAIQAHgIAJAAQAFAAADADQAEADAAAFQAAAEgDACIgDADIgHADQgEABgDACIgEACIgCADIgCAEIAAAdQAAARgLAAQgMAAAAgRgACzgpIAAhQQAAgRANAAQALAAAAARIAABQQAAAJgDADQgDAFgFAAQgNAAAAgRgACLgpIAAgvQgBgRAMAAQAMAAAAARIAAAvQAAAJgDAEQgDAEgGAAQgMAAABgRgABjgpIAAgaQAAgKgDgEQgCgEgIAAQgGAAgDAEQgDAFAAAIIAAAbQAAARgMAAQgMAAAAgRIAAhQQAAgRAMAAQAMAAAAARIAAAXQADgEAGgCQAEgBAHAAQAOAAAHAIQAIAHgBAPIAAAiQAAARgLAAQgMAAAAgRgAjQgpIAAgaQABgKgDgEQgDgEgHAAQgHAAgDAEQgDAFAAAIIAAAbQAAARgMAAQgLAAAAgRIAAgvQAAgRALAAQAIAAAEAIQADgFAFgBQAGgCAGAAQAOAAAHAIQAIAHAAAPIAAAiQAAARgMAAQgMAAAAgRgAmMgZIgIgBIgFgDQgCgBAAgDIgBgHIAAhLQAAgRAMAAQAMAAgBARIAABEIAVAAQARAAAAALQAAALgRAAgAIThfQgIgHAKgOIALgPQAJgNAKAHQAJAGgJAOIgMAPQgFAHgEACIgEABQgDAAgEgDgACNhzQgEgEAAgGQAAgFAEgEQAEgEAFAAQAHAAACAEQAFAEAAAFIgBAGQgBACgDACQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgGABQgFAAgEgEg");
	this.shape.setTransform(-136,11.0805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mclane_logo, new cjs.Rectangle(-201.9,-6.9,132.8,34.6), null);


(lib.front_grill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5F277E").s().p("Ag/A+QgFgBgEgDQgJgGAAgMQgBgTACgVQAGgsAVgTQAPgBgBgBIBxBbIAHAIQAFAKgLAIQgUAGgbAEQgcAEgWAAQgXAAgSgEgAg2AlIAfAEIAHABIglg1QgHAZAGAXgAgtgeIA4BGQATgDARgGIhXhHg");
	this.shape.setTransform(0.0282,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSApIgegEQgHgXAHgZIAmA0IgIAAgAgngfIAEgJIBXBHQgRAGgSACg");
	this.shape_1.setTransform(-0.5234,0.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.front_grill, new cjs.Rectangle(-8.2,-6.5,16.5,13.1), null);


(lib.caboose_purple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5F277E").s().p("Ai1hjQFBguACACIAoD/IlBAgg");
	this.shape.setTransform(0,-0.0042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.caboose_purple, new cjs.Rectangle(-18.2,-14.4,36.4,28.8), null);


(lib.caboose_orange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F26924").s().p("AikhLQEhgyACACIAmDnIkpAQg");
	this.shape.setTransform(0,-0.0038);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.caboose_orange, new cjs.Rectangle(-16.5,-12.4,33,24.8), null);


(lib.blueWheel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003DA6").s().p("AhPBPQghgfAAgwQAAguAhgiQAiggAtAAQAvAAAgAgQAiAiAAAuQAAAwgiAfQggAigvAAQgtAAgigig");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueWheel, new cjs.Rectangle(-11.3,-11.3,22.700000000000003,22.700000000000003), null);


(lib.steam_engine_Loop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// steam_01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("AhGh7IBfgUIAuEJQACAChNAUg");
	this.shape.setTransform(193.7025,303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003DA6").s().p("AhGh5IBhgUIAsEFQACAChNAUg");
	this.shape_1.setTransform(193.7275,303.2);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003DA6").s().p("AhFhyIBkgWIAnD6QACAChNAVg");
	this.shape_2.setTransform(193.8025,303.75);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003DA6").s().p("AhEhoIBrgWIAeDnQACAChNAUg");
	this.shape_3.setTransform(193.9025,304.7);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003DA6").s().p("AhDhaIB0gYIASDPQACAChNAUg");
	this.shape_4.setTransform(194.0525,305.9);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003DA6").s().p("AhChQIB7gZIAJC8QACAChNAVg");
	this.shape_5.setTransform(194.1525,306.85);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003DA6").s().p("AhBhJIB/gaIAECxQACAChNAUg");
	this.shape_6.setTransform(194.2275,307.4);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003DA6").s().p("AhBhHICAgaIACCtQACAChNAUg");
	this.shape_7.setTransform(194.2525,307.6);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003DA6").s().p("AhDhaIB0gYIASDOQACAChNAVg");
	this.shape_8.setTransform(194.0525,305.95);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003DA6").s().p("AhEhoIBrgXIAeDoQACAChNAVg");
	this.shape_9.setTransform(193.9025,304.65);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003DA6").s().p("AhFhzIBkgVIAnD7QACAChNAUg");
	this.shape_10.setTransform(193.8025,303.725);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003DA6").s().p("AhGh6IBggUIAtEGQACAChNAVg");
	this.shape_11.setTransform(193.7275,303.15);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003DA6").s().p("AhFh0IBjgVIAoD9QACAChNAUg");
	this.shape_12.setTransform(193.7775,303.575);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003DA6").s().p("AhFhtIBpgVIAhDvQACAChNAUg");
	this.shape_13.setTransform(193.8525,304.3);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003DA6").s().p("AhDhhIBvgXIAYDbQACAChNAUg");
	this.shape_14.setTransform(193.9775,305.3);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003DA6").s().p("AhChWIB2gYIAPDHQACAChNAUg");
	this.shape_15.setTransform(194.1025,306.3);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003DA6").s().p("AhBhNIB8gaIAHC5QACAChNAUg");
	this.shape_16.setTransform(194.1775,307.025);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003DA6").s().p("AhBhJIB/gZIAECvQACAChNAVg");
	this.shape_17.setTransform(194.2275,307.45);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003DA6").s().p("AhDheIBygXIAVDVQACAChNAUg");
	this.shape_18.setTransform(194.0025,305.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003DA6").s().p("AhFhuIBngWIAjDyQACAChNAVg");
	this.shape_19.setTransform(193.8525,304.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003DA6").s().p("AhGh4IBigUIArEDQACAChNAUg");
	this.shape_20.setTransform(193.7275,303.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(12).to({_off:false},0).wait(2).to({_off:true},1).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(12).to({_off:false},0).wait(2).to({_off:true},1).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(12).to({_off:false},0).wait(2).to({_off:true},1).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(12).to({_off:false},0).wait(3).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,y:303.175},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:303.2},0).to({_off:true},1).wait(9).to({_off:false,y:303.175},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:303.2},0).to({_off:true},1).wait(9).to({_off:false,y:303.175},0).to({_off:true},1).wait(3).to({_off:false,y:303.2},0).to({_off:true},1).wait(9).to({_off:false,y:303.175},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:303.2},0).to({_off:true},1).wait(9).to({_off:false,y:303.175},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(16).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(17).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(18).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(19).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(20).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(21).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(22).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(109));

	// steam_02
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003DA6").s().p("AgigyQArgNAAgBIAaB0IgoANg");
	this.shape_21.setTransform(186.9,312.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(4).to({y:312.2},0).wait(1).to({x:187,y:312.4},0).wait(1).to({x:187.05,y:312.8},0).wait(1).to({x:187.2,y:313.3},0).wait(1).to({x:187.35,y:313.85},0).wait(1).to({x:187.45,y:314.2},0).wait(1).to({x:187.5,y:314.45},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.4},0).wait(1).to({x:187.05,y:312.8},0).wait(1).to({x:187.2,y:313.3},0).wait(1).to({x:187.35,y:313.85},0).wait(1).to({x:187.45,y:314.2},0).wait(1).to({x:187.5,y:314.45},0).wait(1).to({y:314.5},0).wait(1).to({x:187.25,y:313.45},0).wait(1).to({x:187.05,y:312.7},0).wait(1).to({x:186.95,y:312.25},0).wait(1).to({x:186.9,y:312.1},0).wait(4).to({y:312.2},0).wait(1).to({x:187,y:312.4},0).wait(1).to({x:187.05,y:312.8},0).wait(1).to({x:187.2,y:313.3},0).wait(1).to({x:187.35,y:313.85},0).wait(1).to({x:187.45,y:314.2},0).wait(1).to({x:187.5,y:314.45},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.4},0).wait(1).to({x:187.05,y:312.8},0).wait(1).to({x:187.2,y:313.3},0).wait(1).to({x:187.35,y:313.85},0).wait(1).to({x:187.45,y:314.2},0).wait(1).to({x:187.5,y:314.45},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(3).to({y:312.2},0).wait(1).to({x:187,y:312.4},0).wait(1).to({x:187.05,y:312.8},0).wait(1).to({x:187.2,y:313.3},0).wait(1).to({x:187.35,y:313.85},0).wait(1).to({x:187.45,y:314.2},0).wait(1).to({x:187.5,y:314.45},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(4).to({x:187,y:312.5},0).to({_off:true},1).wait(99));

	// steam_03
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003DA6").s().p("AgigyQArgNAAgBIAaB0IgoANg");
	this.shape_22.setTransform(180.1,315.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(4).to({x:180.05,y:315.3},0).wait(1).to({x:180.25,y:315.9},0).wait(1).to({x:180.4,y:316.45},0).wait(1).to({x:180.55,y:317.05},0).wait(1).to({x:180.7,y:317.65},0).wait(1).to({x:180.9,y:318.25},0).wait(1).to({x:181.05,y:318.8},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.8,y:317.9},0).wait(1).to({x:180.5,y:316.7},0).wait(1).to({x:180.3,y:315.85},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.1,y:315.2},0).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.8,y:317.9},0).wait(1).to({x:180.5,y:316.7},0).wait(1).to({x:180.3,y:315.85},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.1,y:315.2},0).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(4).to({x:180.05,y:315.3},0).wait(1).to({x:180.25,y:315.9},0).wait(1).to({x:180.4,y:316.45},0).wait(1).to({x:180.55,y:317.05},0).wait(1).to({x:180.7,y:317.65},0).wait(1).to({x:180.9,y:318.25},0).wait(1).to({x:181.05,y:318.8},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.8,y:317.9},0).wait(1).to({x:180.5,y:316.7},0).wait(1).to({x:180.3,y:315.85},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.1,y:315.2},0).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(2).to({x:180.1,y:315.2},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(3).to({x:180.05,y:315.3},0).wait(1).to({x:180.25,y:315.9},0).wait(1).to({x:180.4,y:316.45},0).wait(1).to({x:180.55,y:317.05},0).wait(1).to({x:180.7,y:317.65},0).wait(1).to({x:180.9,y:318.25},0).wait(1).to({x:181.05,y:318.8},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.8,y:317.9},0).wait(1).to({x:180.5,y:316.7},0).wait(1).to({x:180.3,y:315.85},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.1,y:315.2},0).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(3).to({x:180.05,y:315.3},0).wait(1).to({x:180.25,y:315.9},0).wait(1).to({x:180.4,y:316.45},0).wait(1).to({x:180.55,y:317.05},0).wait(1).to({x:180.7,y:317.65},0).wait(1).to({x:180.9,y:318.25},0).wait(1).to({x:181.05,y:318.8},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.8,y:317.9},0).wait(1).to({x:180.5,y:316.7},0).wait(1).to({x:180.3,y:315.85},0).wait(1).to({x:180.15,y:315.35},0).wait(1).to({x:180.1,y:315.2},0).wait(2).to({_off:true},1).wait(99));

	// star_mc
	this.instance = new lib.star_mc();
	this.instance.setTransform(127.9,253.9,0.4455,0.4455,-46.1379,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.3,regY:4.2,scaleX:0.0255,scaleY:0.0255,rotation:-46.1375,x:127.95},7).to({_off:true},1).wait(240));

	// star_mc
	this.instance_1 = new lib.star_mc();
	this.instance_1.setTransform(154.7,254.7,0.7501,0.7501,-20.8878,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:0.431,scaleY:0.431,rotation:-45.8851,x:128.1,y:253.35},7).to({regX:-1.2,regY:1.2,scaleX:0.0301,scaleY:0.0299,rotation:-45.8693},8).to({_off:true},1).wait(232));

	// star_mc
	this.instance_2 = new lib.star_mc();
	this.instance_2.setTransform(184.75,269.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.6703,scaleY:0.6703,rotation:-26.4647,x:155.6,y:255.15},7).to({regY:0.2,scaleX:0.3802,scaleY:0.3802,rotation:-46.161,x:126.85,y:253.55},8).to({regX:-0.1,regY:2.1,scaleX:0.0339,scaleY:0.0339,rotation:-46.1476},8).to({_off:true},1).wait(224));

	// star_mc
	this.instance_3 = new lib.star_mc();
	this.instance_3.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},7).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(224));

	// star_mc
	this.instance_4 = new lib.star_mc();
	this.instance_4.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(216));

	// star_mc
	this.instance_5 = new lib.star_mc();
	this.instance_5.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(208));

	// star_mc
	this.instance_6 = new lib.star_mc();
	this.instance_6.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(200));

	// star_mc
	this.instance_7 = new lib.star_mc();
	this.instance_7.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(192));

	// star_mc
	this.instance_8 = new lib.star_mc();
	this.instance_8.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(184));

	// star_mc
	this.instance_9 = new lib.star_mc();
	this.instance_9.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(176));

	// star_mc
	this.instance_10 = new lib.star_mc();
	this.instance_10.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(168));

	// star_mc
	this.instance_11 = new lib.star_mc();
	this.instance_11.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(63).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(160));

	// star_mc
	this.instance_12 = new lib.star_mc();
	this.instance_12.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(152));

	// star_mc
	this.instance_13 = new lib.star_mc();
	this.instance_13.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(144));

	// star_mc
	this.instance_14 = new lib.star_mc();
	this.instance_14.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(87).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(136));

	// star_mc
	this.instance_15 = new lib.star_mc();
	this.instance_15.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(128));

	// star_mc
	this.instance_16 = new lib.star_mc();
	this.instance_16.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(103).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(120));

	// star_mc
	this.instance_17 = new lib.star_mc();
	this.instance_17.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(111).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(112));

	// star_mc
	this.instance_18 = new lib.star_mc();
	this.instance_18.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(119).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(104));

	// star_mc
	this.instance_19 = new lib.star_mc();
	this.instance_19.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(127).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({scaleX:0.4997,scaleY:0.4997,rotation:-40.1447,x:137.85,y:254},5).to({_off:true},1).wait(99));

	// star_mc
	this.instance_20 = new lib.star_mc();
	this.instance_20.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(135).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.8,scaleX:0.8221,scaleY:0.8221,rotation:-12.3132,x:165.3,y:258.55},5).to({_off:true},1).wait(99));

	// star_mc
	this.instance_21 = new lib.star_mc();
	this.instance_21.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(143).to({_off:false},0).to({regY:1.1,scaleX:0.7232,scaleY:0.7232,rotation:14.2371,x:187.15,y:278.95},5).to({_off:true},1).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.8,325.9);


(lib.purpleWheel_03 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.purple_wheel_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleWheel_03, new cjs.Rectangle(-5.2,-5.2,10.4,10.4), null);


(lib.Train_mc_static = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// purpleWheel_03
	this.instance = new lib.purpleWheel_03();
	this.instance.setTransform(194,342.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:true},1).wait(26));

	// blueWheel
	this.instance_1 = new lib.blueWheel();
	this.instance_1.setTransform(170.8,341.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:true},1).wait(26));

	// caboose_purple
	this.instance_2 = new lib.caboose_purple();
	this.instance_2.setTransform(136.6,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:true},1).wait(26));

	// tealWheel_02
	this.instance_3 = new lib.tealWheel_02();
	this.instance_3.setTransform(147.65,348.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:true},1).wait(26));

	// tealWheel_01
	this.instance_4 = new lib.tealWheel_01();
	this.instance_4.setTransform(126.25,350.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:true},1).wait(26));

	// caboose_orange
	this.instance_5 = new lib.caboose_orange();
	this.instance_5.setTransform(100.3,330.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:true},1).wait(26));

	// purple_wheel_02
	this.instance_6 = new lib.purple_wheel_02();
	this.instance_6.setTransform(90,349.9,0.8462,0.8462);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:true},1).wait(26));

	// purple_wheel_02
	this.instance_7 = new lib.purple_wheel_02();
	this.instance_7.setTransform(110.4,349);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:true},1).wait(26));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F277E").s().p("AgYBaQgUgigGgxQgHgyAKgmQALglAVgDQAVgDATAiQAUAiAHAyQAGAxgKAmQgLAmgVADIgEAAQgSAAgSggg");
	this.shape.setTransform(204.3345,323.0747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33).to({_off:true},1).wait(26));

	// front_grill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F277E").s().p("Ag/A+QgFgBgEgDQgJgGAAgMQgBgTACgVQAGgsAVgTQAPgBgBgBIBxBbIAHAIQAFAKgLAIQgUAGgbAEQgcAEgWAAQgXAAgSgEgAg2AlIAfAEIAIABIgmg1QgHAZAGAXgAgtgeIA5BGQASgDARgGIhXhHg");
	this.shape_1.setTransform(211.1282,340.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSApIgegEQgHgYAIgYIAlA0IgIAAgAgngeIAEgKIBXBHQgRAGgSADg");
	this.shape_2.setTransform(210.5741,340.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},33).to({state:[]},1).wait(26));

	// window_mc
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCgdQgGgaAHgKIAHgGIBRgeIAOAGIAgCtIhjAYg");
	this.shape_3.setTransform(165.256,308.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(33).to({_off:true},1).wait(26));

	// train_main
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47BFAF").s().p("AAFCxQgfgmgygFQgSgCgYADQgvAFgbAaQgYipgWg6IgQg0QgEgKABgMQABgYAYgKIBwgoIAPgEQAPAAAEASIAoDDIEPgvIAiDxIjoAUQgGgSgQgTg");
	this.shape_4.setTransform(180.34,315.5993);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(33).to({_off:true},1).wait(26));

	// steam_01
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003DA6").s().p("AhGh7IBfgUIAuEJQACAChNAUg");
	this.shape_5.setTransform(193.7025,303);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003DA6").s().p("AhGh5IBhgUIAsEFQACAChNAUg");
	this.shape_6.setTransform(193.7275,303.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003DA6").s().p("AhFhyIBkgWIAnD6QACAChNAVg");
	this.shape_7.setTransform(193.8025,303.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003DA6").s().p("AhEhoIBrgWIAeDnQACAChNAUg");
	this.shape_8.setTransform(193.9025,304.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003DA6").s().p("AhDhaIB0gYIASDPQACAChNAUg");
	this.shape_9.setTransform(194.0525,305.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003DA6").s().p("AhChQIB7gZIAJC8QACAChNAVg");
	this.shape_10.setTransform(194.1525,306.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003DA6").s().p("AhBhJIB/gaIAECxQACAChNAUg");
	this.shape_11.setTransform(194.2275,307.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003DA6").s().p("AhBhHICAgaIACCtQACAChNAUg");
	this.shape_12.setTransform(194.2525,307.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003DA6").s().p("AhDhaIB0gYIASDOQACAChNAVg");
	this.shape_13.setTransform(194.0525,305.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003DA6").s().p("AhEhoIBrgXIAeDoQACAChNAVg");
	this.shape_14.setTransform(193.9025,304.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003DA6").s().p("AhFhzIBkgVIAnD7QACAChNAUg");
	this.shape_15.setTransform(193.8025,303.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6,p:{y:303.2}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_6,p:{y:303.175}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6,p:{y:303.2}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_6,p:{y:303.175}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},6).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(11).to({_off:false},0).wait(6).to({_off:true},1).wait(26));

	// steam_02
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003DA6").s().p("AgigyQArgNAAgBIAaB0IgoANg");
	this.shape_16.setTransform(186.9,312.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(4).to({y:312.2},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:187.1,y:313},0).wait(1).to({x:187.3,y:313.6},0).wait(1).to({x:187.4,y:314.1},0).wait(1).to({x:187.5,y:314.4},0).wait(1).to({y:314.5},0).wait(1).to({x:187.3,y:313.65},0).wait(1).to({x:187.1,y:312.95},0).wait(1).to({x:187,y:312.5},0).wait(1).to({x:186.9,y:312.2},0).wait(1).to({y:312.1},0).wait(6).to({_off:true},1).wait(26));

	// steam_03
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003DA6").s().p("AgigyQArgNAAgBIAaB0IgoANg");
	this.shape_17.setTransform(180.1,315.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(1).to({x:180.1,y:315.2},0).wait(3).to({x:180.15,y:315.35},0).wait(1).to({x:180.3,y:315.9},0).wait(1).to({x:180.5,y:316.75},0).wait(1).to({x:180.8,y:317.85},0).wait(1).to({x:181,y:318.7},0).wait(1).to({x:181.15,y:319.25},0).wait(1).to({x:181.2,y:319.4},0).wait(1).to({x:180.75,y:317.7},0).wait(1).to({x:180.35,y:316.4},0).wait(1).to({x:180.1,y:315.45},0).wait(1).to({x:179.95,y:314.9},0).wait(1).to({x:179.9,y:314.7},0).wait(4).to({_off:true},1).wait(26));

	// star_mc
	this.instance_8 = new lib.star_mc();
	this.instance_8.setTransform(127.9,253.9,0.4455,0.4455,-46.1379,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:1.3,regY:4.2,scaleX:0.0255,scaleY:0.0255,rotation:-46.1375,x:127.95},7).to({_off:true},1).wait(52));

	// star_mc
	this.instance_9 = new lib.star_mc();
	this.instance_9.setTransform(154.7,254.7,0.7501,0.7501,-20.8878,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0,scaleX:0.431,scaleY:0.431,rotation:-45.8851,x:128.1,y:253.35},7).to({regX:-1.2,regY:1.2,scaleX:0.0301,scaleY:0.0299,rotation:-45.8693},8).to({_off:true},1).wait(44));

	// star_mc
	this.instance_10 = new lib.star_mc();
	this.instance_10.setTransform(184.75,269.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.6703,scaleY:0.6703,rotation:-26.4647,x:155.6,y:255.15},7).to({regY:0.2,scaleX:0.3802,scaleY:0.3802,rotation:-46.161,x:126.85,y:253.55},8).to({regX:-0.1,regY:2.1,scaleX:0.0339,scaleY:0.0339,rotation:-46.1476},8).to({_off:true},1).wait(36));

	// star_mc
	this.instance_11 = new lib.star_mc();
	this.instance_11.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},7).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).to({_off:true},1).wait(36));

	// star_mc
	this.instance_12 = new lib.star_mc();
	this.instance_12.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).to({regY:0.3,scaleX:0.3704,scaleY:0.3704,rotation:-52.4121,x:127.9,y:253.9},8).wait(2).to({_off:true},1).wait(26));

	// star_mc
	this.instance_13 = new lib.star_mc();
	this.instance_13.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).to({regX:0.1,regY:0.2,scaleX:0.7153,scaleY:0.7153,rotation:-19.7027,x:154.25,y:254.1},8).wait(2).to({_off:true},1).wait(26));

	// star_mc
	this.instance_14 = new lib.star_mc();
	this.instance_14.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({_off:false},0).to({regX:0.7,regY:1.1,scaleX:1,scaleY:1,rotation:0,x:183.25,y:265.95},8).wait(2).to({_off:true},1).wait(26));

	// star_mc
	this.instance_15 = new lib.star_mc();
	this.instance_15.setTransform(193.8,300.45,0.2619,0.2619,37.9669,0,0,1,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).wait(2).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.8,241.5,135.60000000000002,113.19999999999999);


(lib.train_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F277E").s().p("AgYBaQgUgigGgxQgHgyAKgmQALglAVgDQAVgDATAiQAUAiAHAyQAGAxgKAmQgLAmgVADIgEAAQgSAAgSggg");
	this.shape.setTransform(17.3845,2.3747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(149));

	// front_grill
	this.instance = new lib.front_grill();
	this.instance.setTransform(24.15,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149));

	// window_mc
	this.instance_1 = new lib.window_mc();
	this.instance_1.setTransform(-21.7,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149));

	// train_main
	this.instance_2 = new lib.train_main();
	this.instance_2.setTransform(-6.6,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149));

	// steam_engine_Loop
	this.steam_engine = new lib.steam_engine_Loop("synched",0);
	this.steam_engine.name = "steam_engine";
	this.steam_engine.setTransform(1.8,-15.55,1,1,0,0,0,188.7,305.2);

	this.timeline.addTween(cjs.Tween.get(this.steam_engine).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-75.6,97,102.1);


(lib.Train_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// purpleWheel_03
	this.instance = new lib.purpleWheel_03();
	this.instance.setTransform(194,342.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:342},6,cjs.Ease.quadOut).to({y:340.8},7,cjs.Ease.quadOut).to({y:342.6},8,cjs.Ease.quadOut).to({y:341.2},7,cjs.Ease.quadOut).to({y:342.2},8,cjs.Ease.quadOut).to({y:342.8},9,cjs.Ease.quadOut).wait(1));

	// blueWheel
	this.instance_1 = new lib.blueWheel();
	this.instance_1.setTransform(170.8,341.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:339.05},8,cjs.Ease.quadOut).to({y:341.65},7,cjs.Ease.quadOut).to({y:339.05},8,cjs.Ease.quadOut).to({y:341.65},7,cjs.Ease.quadOut).to({y:339.05},8,cjs.Ease.quadOut).to({y:341.65},7,cjs.Ease.quadOut).wait(1));

	// caboose_purple
	this.instance_2 = new lib.caboose_purple();
	this.instance_2.setTransform(136.6,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:325},8,cjs.Ease.quadOut).to({y:329},7,cjs.Ease.quadOut).to({y:325},8,cjs.Ease.quadOut).to({y:329},7,cjs.Ease.quadOut).to({y:325},8,cjs.Ease.quadOut).to({y:329},7,cjs.Ease.quadOut).wait(1));

	// tealWheel_02
	this.instance_3 = new lib.tealWheel_02();
	this.instance_3.setTransform(147.65,348.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:342.5},7,cjs.Ease.quadOut).to({y:348.3},8,cjs.Ease.quadOut).to({y:342.5},7,cjs.Ease.quadOut).to({y:348.3},7,cjs.Ease.quadOut).to({y:342.7},8,cjs.Ease.quadOut).to({y:348.3},8,cjs.Ease.quadOut).wait(1));

	// tealWheel_01
	this.instance_4 = new lib.tealWheel_01();
	this.instance_4.setTransform(126.25,350.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:348.25},8,cjs.Ease.quadOut).to({y:350.45},7,cjs.Ease.quadOut).to({y:345.25},8,cjs.Ease.quadOut).to({y:350.45},7,cjs.Ease.quadOut).to({y:345.25},8,cjs.Ease.quadOut).to({y:350.45},7,cjs.Ease.quadOut).wait(1));

	// caboose_orange
	this.instance_5 = new lib.caboose_orange();
	this.instance_5.setTransform(100.3,330.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:332.4},8,cjs.Ease.quadOut).to({y:329.2},7,cjs.Ease.quadOut).to({y:332.4},8,cjs.Ease.quadOut).to({y:329.2},7,cjs.Ease.quadOut).to({y:332.4},8,cjs.Ease.quadOut).to({y:330.8},7,cjs.Ease.quadOut).wait(1));

	// purple_wheel_02
	this.instance_6 = new lib.purple_wheel_02();
	this.instance_6.setTransform(90,348.7,0.8462,0.8462);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:352},6,cjs.Ease.quadOut).to({y:347.6},7,cjs.Ease.quadOut).to({y:352},8,cjs.Ease.quadOut).to({y:347.6},7,cjs.Ease.quadOut).to({y:351},8,cjs.Ease.quadOut).to({y:349.9},9,cjs.Ease.quadOut).wait(1));

	// purple_wheel_02
	this.instance_7 = new lib.purple_wheel_02();
	this.instance_7.setTransform(110.4,348.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:350.6},7,cjs.Ease.quadOut).to({y:346.6},7,cjs.Ease.quadOut).to({y:350.6},8,cjs.Ease.quadOut).to({y:346.6},7,cjs.Ease.quadOut).to({y:350.6},8,cjs.Ease.quadOut).to({y:349},8,cjs.Ease.quadOut).wait(1));

	// train_front
	this.train_front = new lib.train_front();
	this.train_front.name = "train_front";
	this.train_front.setTransform(187.25,320.7,1,1.0021,0,1.3079,0);

	this.timeline.addTween(cjs.Tween.get(this.train_front).to({scaleY:1.0075,skewX:6.989,x:188.25},8).to({scaleY:1,skewX:0,x:186.95},7).to({regX:0.1,scaleY:1.0043,skewX:5.3151,x:187.85},8).to({regX:0,scaleY:1,skewX:0,x:186.95},7).to({scaleY:1.0099,skewX:8.0399,x:188.25},8).to({scaleY:1,skewX:0,x:186.95},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.8,241.3,135.60000000000002,115.09999999999997);


// stage content:
(lib.BSWH_Mclane_Hospital_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [219];
	// timeline functions:
	this.frame_219 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// ctaBtn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_123 = new cjs.Graphics().p("AgmARIgWgdIB5gPIgoA3g");
	var mask_graphics_124 = new cjs.Graphics().p("AhwAnIgWhJIENgOIgoBhg");
	var mask_graphics_125 = new cjs.Graphics().p("AiyA6IgWhvIGSgOIgpCHg");
	var mask_graphics_126 = new cjs.Graphics().p("AjtBLIgWiRIIHgOIgoCpg");
	var mask_graphics_127 = new cjs.Graphics().p("AkgBaIgWivIJtgNIgoDFg");
	var mask_graphics_128 = new cjs.Graphics().p("AlKBmIgXjIILDgNIgoDfg");
	var mask_graphics_129 = new cjs.Graphics().p("AluBwIgWjcIMJgNIgoDzg");
	var mask_graphics_130 = new cjs.Graphics().p("AmIB4IgXjsIM/gNIgoEDg");
	var mask_graphics_131 = new cjs.Graphics().p("AmcB+IgXj4INngMIgpEOg");
	var mask_graphics_132 = new cjs.Graphics().p("AmoCBIgXj/IN/gMIgpEVg");
	var mask_graphics_133 = new cjs.Graphics().p("AmsCCIgWkBIOFgMIgoEXg");
	var mask_graphics_134 = new cjs.Graphics().p("AmjB7IgWjyINzgNIgoEJg");
	var mask_graphics_135 = new cjs.Graphics().p("AmbB0IgXjkINlgNIgoD7g");
	var mask_graphics_136 = new cjs.Graphics().p("AmVBvIgXjbINZgMIgoDxg");
	var mask_graphics_137 = new cjs.Graphics().p("AmRBsIgXjVINRgMIgoDrg");
	var mask_graphics_138 = new cjs.Graphics().p("AmPBqIgWjQINLgNIgoDmg");
	var mask_graphics_139 = new cjs.Graphics().p("AmOBpIgWjOINJgNIgoDlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(123).to({graphics:mask_graphics_123,x:78.2,y:548.1}).wait(1).to({graphics:mask_graphics_124,x:78.575,y:547.95}).wait(1).to({graphics:mask_graphics_125,x:78.9,y:547.85}).wait(1).to({graphics:mask_graphics_126,x:79.2,y:547.725}).wait(1).to({graphics:mask_graphics_127,x:79.475,y:547.6}).wait(1).to({graphics:mask_graphics_128,x:79.675,y:547.55}).wait(1).to({graphics:mask_graphics_129,x:79.875,y:547.45}).wait(1).to({graphics:mask_graphics_130,x:80,y:547.425}).wait(1).to({graphics:mask_graphics_131,x:80.1,y:547.4}).wait(1).to({graphics:mask_graphics_132,x:80.15,y:547.35}).wait(1).to({graphics:mask_graphics_133,x:80.175,y:547.35}).wait(1).to({graphics:mask_graphics_134,x:80.175,y:547.35}).wait(1).to({graphics:mask_graphics_135,x:80.175,y:547.35}).wait(1).to({graphics:mask_graphics_136,x:80.175,y:547.375}).wait(1).to({graphics:mask_graphics_137,x:80.175,y:547.35}).wait(1).to({graphics:mask_graphics_138,x:80.175,y:547.35}).wait(1).to({graphics:mask_graphics_139,x:80.175,y:547.35}).wait(81));

	// txt_learnMore
	this.instance = new lib.txt_learnMore();
	this.instance.setTransform(80.1,547.75,0.827,0.827,0,0,0,0,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).wait(97));

	// orange_BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003DA6").s().p("AuNG5IAAtxIcbAAIAANxg");
	this.shape_1.setTransform(81.05,558.075);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(123).to({_off:false},0).wait(97));

	// mclane_logo
	this.instance_1 = new lib.mclane_logo();
	this.instance_1.setTransform(196.05,492.65,0.8519,0.8519);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},10).wait(97));

	// Layer_51
	this.instance_2 = new lib.Train_mc_static("synched",0,false);
	this.instance_2.setTransform(66.1,451.5,0.571,0.571,0,0,0,151.5,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(122).to({_off:false},0).wait(33).to({mode:"single",startPosition:33},0).wait(65));

	// Train_mc
	this.train_mc = new lib.Train_mc("synched",0,false);
	this.train_mc.name = "train_mc";
	this.train_mc.setTransform(-43,455.1,0.5712,0.5712,0,0,0,151.5,306.1);
	this.train_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.train_mc).wait(75).to({_off:false},0).to({x:65.7,y:455.15,mode:"single",startPosition:45},46,cjs.Ease.quadOut).to({_off:true},1).wait(98));

	// Train_mc
	this.train_mc_1 = new lib.Train_mc();
	this.train_mc_1.name = "train_mc_1";
	this.train_mc_1.setTransform(260.9,197.95,1.3963,1.3963,0,0,180,151.6,306.1);

	this.timeline.addTween(cjs.Tween.get(this.train_mc_1).to({x:-97.4,y:195.95},70).to({_off:true},1).wait(149));

	// colorMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_57 = new cjs.Graphics().p("AiNBGQhMhZAAgUIGzgeIiHCLg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AiVBQQhMhkAAgeIHDgeIiIChg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AirBoQhKh+gBg7IHtgaIiJDXg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjRCTQhJiugBhrII3gVIiLE3g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AkLDVQhJj3gCi4IKtgMIiQHNg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AljE5QhFlmgEkoINZAAIiVKsg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AngHQQhDoDgGnMIRSATIidPsg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AqSKnQg+rjgJqzIWyAtIipWxg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AKlQrQqsgVq0hDIh4gMIhMg4Qg5vygLvIIAAgBIcTBMIB0BWIiud0Ig1BDIg8gCg");
	var mask_1_graphics_66 = new cjs.Graphics().p("ANhWgQuGgMuYhvIifgUIg5h0Qgx0tgR0QIAAAAMAlfAB1IBQC3MgC+AnhIhpA0IhQgBg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AQPb4QxRgExpiXIjDgbIgpirQgq5RgU49IAAgBMAt8ACcIAvEPMgDNAwgIiZAmIhhgBg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A1gdKIjeggIgcjUQgl8wgX8kMA0YAC6IAVFSMgDXA3WQheAOhfAMIhwABIgbAAQzdAAz7i1g");
	var mask_1_graphics_69 = new cjs.Graphics().p("A3ffxQh5gRh5gUIgSjxQgi/MgZ/EIAAgBMA45ADPIAEGCMgDfA8IIjXATIh5ABIhPAAQ0vAA1RjGg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgY7AhjIj+goIgMkFUgAggg2gAaggzMA7/ADdIgJGiMgDkA/ZQh0AIh0AGIiBABIh4AAQ1lAA2IjRg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgZ4AitIkHgpIgIkSUgAegh9gAbgh7MA+BADnIgRG2MgDnBBkIj0AKIiFABIiJABQ2NAA2yjag");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgaeAjbQiGgUiGgWIgGkaMgA4hFQMA/RADsIgWHEMgDpBC5Ij7AIIiIABIiaABQ2jAA3Ijfg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgaxAj0QiIgViIgWIgEkfMgA4hF+MA/7ADvMgEDBKxQh/AEiAACIiJACIilABQ2tAA3Sjhg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Ega4Aj7QiIgUiIgXMgA8hKsMBAJADwMgEEBLAQjEAGjFACIimABQ2yAA3Yjig");
	var mask_1_graphics_75 = new cjs.Graphics().p("EAV4AncQ4Hge4pjsQh9gRh9gUMgA8hKNMA/dADwMgEEBLRQi5gBi6gEg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EAV4AnYQ4LhG4ljoQhzgPh0gQMgA8hJzMA+3ADwMgEEBLhQiwgHiwgKg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EAV4AnVQ4Nhq4jjkIjXgbMgA7hJaMA+VADvMgEEBLvQiogNingOg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EAV4AnSQ4QiH4gjiIjIgYMgA8hJFMA95ADwMgEEBL5IlBgjg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EAV4AnPQ4Sih4ejfIi8gUMgA7hI0MA9fADwMgEEBMDIk0grg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EAV4AnNQ4Ui14cjeIixgRMgA8hInMA9LADwMgEEBMNIkqgyg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EAV4AnLQ4VjG4bjcIiqgPMgA7hIaMA87ADwMgEEBMRIkig2g");
	var mask_1_graphics_82 = new cjs.Graphics().p("EAV4AnKQ4WjR4ajcIikgNMgA8hITMA8xADwMgEEBMXIkdg6g");
	var mask_1_graphics_83 = new cjs.Graphics().p("EAV4AnJQ4YjY4YjbIihgMMgA7hIOMA8pADwMgEEBMZIkZg8g");
	var mask_1_graphics_84 = new cjs.Graphics().p("EAV4AnJMgwwgG1IifgMMgA8hINMA8nADxMgEEBMZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_1_graphics_57,x:79.825,y:111.025}).wait(1).to({graphics:mask_1_graphics_58,x:79.875,y:111.725}).wait(1).to({graphics:mask_1_graphics_59,x:80,y:113.575}).wait(1).to({graphics:mask_1_graphics_60,x:80.275,y:116.825}).wait(1).to({graphics:mask_1_graphics_61,x:80.625,y:121.925}).wait(1).to({graphics:mask_1_graphics_62,x:81.2,y:129.45}).wait(1).to({graphics:mask_1_graphics_63,x:82,y:139.4}).wait(1).to({graphics:mask_1_graphics_64,x:83.15,y:153.45}).wait(1).to({graphics:mask_1_graphics_65,x:97.8,y:156.175}).wait(1).to({graphics:mask_1_graphics_66,x:114.925,y:159.425}).wait(1).to({graphics:mask_1_graphics_67,x:130.775,y:162.4}).wait(1).to({graphics:mask_1_graphics_68,x:142.8,y:164.6761}).wait(1).to({graphics:mask_1_graphics_69,x:151.275,y:166.2836}).wait(1).to({graphics:mask_1_graphics_70,x:157.475,y:167.3948}).wait(1).to({graphics:mask_1_graphics_71,x:161.675,y:168.1253}).wait(1).to({graphics:mask_1_graphics_72,x:164.275,y:168.5816}).wait(1).to({graphics:mask_1_graphics_73,x:165.65,y:168.8113}).wait(1).to({graphics:mask_1_graphics_74,x:166.05,y:168.8862}).wait(1).to({graphics:mask_1_graphics_75,x:166.05,y:170}).wait(1).to({graphics:mask_1_graphics_76,x:166.05,y:171.375}).wait(1).to({graphics:mask_1_graphics_77,x:166.05,y:172.6}).wait(1).to({graphics:mask_1_graphics_78,x:166.05,y:173.625}).wait(1).to({graphics:mask_1_graphics_79,x:166.05,y:174.525}).wait(1).to({graphics:mask_1_graphics_80,x:166.05,y:175.25}).wait(1).to({graphics:mask_1_graphics_81,x:166.05,y:175.825}).wait(1).to({graphics:mask_1_graphics_82,x:166.05,y:176.225}).wait(1).to({graphics:mask_1_graphics_83,x:166.05,y:176.45}).wait(1).to({graphics:mask_1_graphics_84,x:166.05,y:176.55}).wait(136));

	// txt_neverFear
	this.instance_3 = new lib.txt_neverFear();
	this.instance_3.setTransform(148.3,142.95);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).wait(163));

	// txt_rightHere
	this.instance_4 = new lib.txt_rightHere();
	this.instance_4.setTransform(162.35,203.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({alpha:1},13).wait(123));

	// orange_BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003DA6").s().p("EgZJAwJMAAAhgRMAyUAAAMAAABgRg");
	this.shape_2.setTransform(151.05,302.075);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(57).to({_off:false},0).wait(163));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(80.0011,300,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(220));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-112,294,467.6,307);
// library properties:
lib.properties = {
	id: 'FFC37EC63EA749E9B46BB3CC62BBBEC2',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['FFC37EC63EA749E9B46BB3CC62BBBEC2'] = {
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