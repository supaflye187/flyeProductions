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
	this.shape.graphics.f("#FFB71B").s().p("AD1BcQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgFgGgABtBOQgSgTAAgeQAAgdASgTQASgVAcAAQAcAAATAVQASATAAAYQAAAQgQAAIhNAAQADANAJAHQAJAHAOAAQAKAAAOgIQANgHADAAQAGAAAFAFQAEAEAAAGQAAAMgTAJQgTAKgVAAQgeAAgTgUgAC4AQQgBgMgIgGQgIgIgMAAQgMAAgHAIQgIAGgBAMIA5AAIAAAAgAh5BOQgSgTAAgeQAAgdARgTQATgVAcAAQAcAAATAVQASATAAAYQAAAQgQAAIhNAAQACANAKAHQAJAHAOAAQAKAAAOgIQANgHADAAQAGAAAFAFQAEAEAAAGQAAAMgTAJQgTAKgVAAQgeAAgTgUgAguAQQgBgMgIgGQgHgIgNAAQgMAAgIAIQgHAGgBAMIA5AAIAAAAgAAKBbQgFgFAAgJIAAhiQAAgIAGgFQAGgFAHAAQARAAAAAPIABAAQAKgPAQAAQAGAAAFAFQAGAFAAAKQAAAHgHAEQgKADgFADQgLAEgEADQgHAHAAAJIAAA4QAAAJgFAFQgFAFgIAAQgIAAgFgFgAi9BbQgFgFAAgJIAAhAQAAgMgHgGQgGgFgLAAQgKAAgGAHQgGAGAAAKIAABAQAAAJgGAFQgFAFgHAAQgJAAgFgFQgFgFAAgJIAAiaQAAgJAFgGQAFgFAJAAQAHAAAFAFQAGAGAAAJIAAAxQAKgMAXAAQAVAAAOAMQAOAOAAAVIAABGQAAAJgFAFQgFAFgIAAQgIAAgFgFg");
	this.shape.setTransform(37.575,-147.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB71B").s().p("AEeB2QgWgIAAgNQAAgFAEgFQAFgGAFAAQAFABAOAFQAPAGAMgBQANABAIgIQAJgIAAgOIAAgIIgBAAQgLARgZAAQgbAAgPgUQgNgUAAgdQAAgcAQgUQAQgVAbAAQAXAAAKARQAEgQAOAAQAIAAAFAFQAFAGAAAJIAABoQAAAfgTASQgTAQgfAAQgRAAgSgGgAEwgVQgGAKAAANQAAAQAGAKQAIALAOAAQANAAAIgLQAHgKAAgOQAAgOgHgLQgHgMgOAAQgNAAgJAMgAI9BBQgFgFAAgJIAAhSIgIAAQgQAAAAgQQAAgHAFgFQAFgEAGAAIAIAAIAAgVQAAgKAFgGQAFgEAIgBQAIABAFAEQAFAGAAAKIAAAVIALAAQARAAAAAQQAAAQgRAAIgLAAIAABSQAAAJgFAFQgFAGgIAAQgIAAgFgGgAH0BBQgFgFAAgJIAAg+QAAgMgHgHQgGgGgLAAQgKAAgGAHQgGAHAAALIAAA+QAAAJgFAFQgGAGgHAAQgIAAgFgGQgGgFAAgJIAAiZQAAgKAGgGQAFgFAIAAQAHAAAGAFQAFAGAAAKIAAAwIAAAAQAKgMAXAAQAVAAAOAMQAOAOAAAWIAABFQAAAJgFAFQgFAGgIAAQgHAAgGgGgADSBBQgEgFAAgJIAAhgQAAgJAEgGQAFgFAIAAQAIAAAFAFQAGAGAAAJIAABgQAAAJgGAFQgFAGgIAAQgIAAgFgGgABqBBQgEgFAAgJIAAhhQAAgJAGgFQAFgFAHAAQASAAAAAQQAKgQAQAAQAHAAAFAFQAFAGAAAJQAAAHgHAEIgOAGIgQAJQgGAGAAAKIAAA2QAAAJgFAFQgFAGgIAAQgIAAgGgGgAhiAzQgSgUAAgeQAAgcASgTQATgWAbAAQAcAAAUAWQAQATAAAZQAAAPgPAAIhMAAQABAMAKAIQAJAFANAAQALAAANgGQAOgIAEAAQAFAAAEAFQAEAEAAAHQAAALgSAKQgTAKgVgBQgdAAgUgTgAgXgKQgCgNgHgHQgIgIgMAAQgMAAgHAIQgHAHgCANIA5AAIAAAAgAl+AzQgSgUAAgeQAAgcASgTQATgWAbAAQAdAAATAWQARATAAAZQAAAPgPAAIhNAAQACAMAJAIQAJAFAOAAQAKAAAOgGQANgIAEAAQAGAAAEAFQAEAEAAAHQAAALgTAKQgTAKgVgBQgeAAgTgTgAkzgKQgBgNgIgHQgHgIgNAAQgLAAgIAIQgIAHgBANIA5AAIAAAAgAi9A/QgFgGAAgIIAAhiQAAgIAGgGQAFgEAHAAQASAAAAAPIAAAAQAKgPAQAAQAHAAAFAFQAFAGAAAJQAAAHgGAEIgPAGQgLAFgEAEQgHAGAAAJIAAA3QAAAIgFAGQgFAFgIABQgIgBgFgFgAngA/QgHgFgCgHIgdhhIgeBhQgCAHgGAFQgIAGgIAAQgVAAgEgUIgiiQQAAgHAFgFQAGgFAIAAQAQAAAEASIAVBpIAAAAIAhhtQAFgOAPAAQAPAAAEAOIAhBtIABAAIAVhpQADgSARAAQAIAAAFAFQAFAFAAAHIghCQQgFAUgUAAQgJAAgHgGgAkDguQgFgEAAgHQAAgEADgGIAVgmQAFgJAJAAQAIABAFAEQAFAFAAAGQAAAEgEAHIgVAmQgEAIgKAAQgGAAgGgFgADRhUQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAFQAFAHAAAIQAAAIgFAHQgGAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(-60.125,-145.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rightHere, new cjs.Rectangle(-123.3,-157.7,225.1,196.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ADTBcQgHgGAAgIQAAgIAHgGQAFgFAHgBQAJABAFAFQAGAGAAAIQAAAIgGAGQgFAFgJAAQgHAAgFgFgAAFBOQgPgTgBgeQAAgdARgTQARgVAZAAQAXAAAKAQQACgFAEgFQAFgEAHAAQAKAAAFAJQACAEAAAKIAABXQAAALgCAFQgFAIgKAAQgNAAgFgPQgNAQgUAAQgaAAgRgTgAAfAEQgGAKgBAPQABAOAGALQAIALANgBQAOABAIgLQAHgLgBgOQABgOgHgLQgIgLgOAAQgNAAgIALgAiJBOQgTgTAAgeQABgcARgUQATgUAbgBQAcAAAUAWQARASAAAZQAAAPgQAAIhMAAQACANAJAHQAJAGAOAAQAKAAANgHQAOgIAEABQAFAAAEAEQAFAFAAAGQAAAMgTAJQgTAJgVAAQgdAAgTgTgAg/ARQgCgMgHgHQgIgHgMAAQgLAAgIAHQgHAHgCAMIA5AAIAAAAgACLBaQgFgFAAgJIAAhgQABgJAFgFQAFgEAHAAQASAAAAAOQAKgOAPAAQAIAAAEAEQAGAGAAAJQAAAIgHADIgOAHIgQAHQgGAGAAAJIAAA3QAAAJgFAFQgFAGgIAAQgIAAgFgGgAjVBaQgGgFAAgJIAAhSIgHAAQgQABAAgRQAAgGAFgEQAEgFAHABIAHAAIAAgSQAAgVALgKQAKgLARAAQAZAAAAAQQAAAQgPAAQgFAAgDACQgEACAAAIIAAAQIAMAAQARgBAAAPQAAARgRgBIgMAAIAABSQAAAJgFAFQgFAGgIAAQgIAAgEgGg");
	this.shape.setTransform(-11.5,-112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB3BIQgSgUAAgeQAAgbASgUQATgVAbAAQAcAAATAVQASAUAAAXQAAAQgQAAIhMAAQABAMALAIQAIAFANAAQALAAANgGQANgIAEAAQAGAAAFAFQAEAFAAAFQAAAMgUAKQgTAIgTABQgegBgUgSgADCAKQgCgLgHgHQgIgIgMAAQgLAAgIAIQgHAHgCALIA5AAIAAAAgAiKBIQgTgUAAgeQAAgbATgUQASgVAcAAQAbAAATAVQASAUAAAXQAAAQgQAAIhMAAQACAMAJAIQAJAFANAAQAKAAAOgGQANgIAEAAQAGAAAEAFQAFAFgBAFQABAMgUAKQgSAIgVABQgegBgSgSgAhAAKQgCgLgHgHQgHgIgMAAQgMAAgIAIQgIAHgBALIA5AAIAAAAgAD8BUQgEgGAAgJIAAhgQgBgIAGgGQAFgDAIAAQASAAAAAOQAJgOAPAAQAIgBAFAFQAFAFAAAKQAAAHgGADIgPAHIgPAIQgHAGABAIIAAA3QAAAJgGAGQgFAGgIAAQgIAAgFgGgAAXBVQgDgCgDgJIgjhbQgDgFAAgFQAAgJAGgFQAGgDAHAAQALAAAEAMIAWBGIABAAIAXhGQAEgMAMAAQAHAAAGADQAFAFAAAJQAAAFgCAFIgkBbQgDAJgDACQgEAFgKAAQgIAAgEgFgAjRBSIhOhoIgBAAIAABcQAAAKgFAEQgFAFgIABQgJgBgFgFQgFgEAAgKIAAiMQAAgJAFgFQAFgGAJABQADAAAGACQAEADADADIBOBoIAAAAIAAhdQABgJAEgFQAGgGAIABQAJgBAEAGQAGAFAAAJIAACMQAAAKgGAEQgEAFgJABQgJgBgHgHg");
	this.shape_1.setTransform(-75.1,-111.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_neverFear, new cjs.Rectangle(-107.7,-122.1,209.5,141.1), null);


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
	this.shape.graphics.f("#003DA6").s().p("ArGDCQAAgHAIAAIACAAQAFAAACgDIAJgRIABgIQAAgEgCgJIgPgnIgDgKQgDgDgEgBIgFgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIABgDIAiAAIABADIgBACIgEABQgBAAgBAAQgBABgBAAQAAAAAAABQgBAAAAAAQABAEAFANIAFARIAGANIAHgNIAGgPQAGgPAAgDQAAgCgEgBIgGgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIABgDIAeAAQABABAAAAQAAAAAAAAQAAABAAAAQABAAAAABIgBACIgDAAQgFABgDAFQgDADgFALIgKAVIgcA8QgEAJgIAAQgIAAAAgIgAFWCWQgIgKAAgOQAAgQAKgMQALgNAPAAQAMAAAHAHQAIAHAAAIIgBAFQgBABgJAAIgjAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAPAIAJQAJAKAOAAQAJAAAIgJQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQgFAJgIAFQgIAEgIAAQgRAAgJgNgAFiBhQgFAFAAAFIABABIANAAQAQAAACgCIABgEQAAgEgDgDQgDgEgHAAQgIAAgHAGgAEoCdQgEgFAAgJIAAgqIgBgFIgCAAIgGAAIgBgCIAAgCQAIgCAFgEQADgDAEgIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAAALIADABIAVAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgVAAIgDAAIAAAEIAAAiQgBAKADAEQADAHAIAAIAFgBIAEgDIADABIAAACQgJAJgLAAQgLAAgEgGgABjCiQgDgKgIgRIgLgZQgPAfgIAVIgCABIgDgBIgNgdIgjhMQgBgHgCgCQgEgEgFAAIgEgBIgBgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIAnAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgFABQgGAAAAADIAKAYIAfBEIAOgdIADgIIgBgFIgUgrQgFgKgHAAIgEgBQgBAAAAgBQgBgBAAAAQAAgBABAAQAAgBABAAIAnAAQABAAAAABQABAAAAABQAAAAAAABQAAABgBAAIgFABQgFAAgBACQAAABACAHIAPAfQAFgKAFgOQAFgLAAgDQgBgDgEAAIgGgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAiAAQABAAAAABQABAAAAABQAAAAAAABQAAABgBAAIgFABQgFAAgEAFIgHALQgIAPgFAOIgCAEIABAFIATApIAQgmIAPgkIAFgRQAAgEgGAAIgFgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAZAAIAIgDIAJgHIABAAIABABIgBA9IABAEQANgKAMAAQAYAAAAAYIAAAfIABAMQABADAEAAIAFABIABACIgBACIgjAAIgBgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIADgBQAFAAABgDQABgCAAgKIAAgbQAAgTgRAAQgJAAgFAFIgEADIgBAHIAAAfQAAAKABACQACADAFAAIADABIACACIgCACIgjAAIgBgCIAAgCIAFgBQAFAAACgDQABgCAAgKIAAhTQAAgJgBgCQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEABgCAEIgMAZIgNAfQgNAggKAYIgCABgAiWCdQgEgFABgJIAAgqIAAgFIgFAAIgEAAIgBgCIAAgCQAHgCAFgEIAIgLQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIAAALIAEABIAUAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgVAAIgDAAIAAAEIAAAiQAAAKACAEQADAHAJAAIAEgBIAFgDIACABIAAACQgHAJgMAAQgMAAgEgGgAjNCdQgEgFABgJIAAgqIgBgFIgEAAIgEAAIgBgCIAAgCQAIgCAEgEQAEgEAEgHQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAAAIIAAADIAEABIAUAAIABAEIgBAEIgVAAIgDAAIAAAEIAAAiQAAAKACAEQADAHAIAAIAFgBIAFgDIACABIAAACQgIAJgLAAQgMAAgEgGgAkkCYQgKgKgBgRQAAgRAMgLQALgMARAAQAPAAAKALQAMALAAAQQAAARgLALQgLAMgSAAQgPAAgLgLgAkYBjQgHAJAAAOQAAAOAGAKQAHALALAAQALAAAFgKQAEgIABgNQAAgOgGgJQgGgMgMAAQgJAAgFAIgAloCZQgKgKAAgRQAAgQAKgMQAMgNAWAAQAJAAAGAEQADACAAAFIgBAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgBQgIgKgKAAQgLAAgHAIQgIAIAAAOQAAAMAIAJQAIAKAOAAQANAAAHgLIADABIAAACQgEAJgKAFQgHAFgJAAQgQAAgJgKgAnCCcIgDgLIgCgPIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAHAbAYAAQALAAAGgGQAGgGAAgJQAAgQgPgKIgSgLQgTgNgBgSQAAgNAKgJQAKgKASAAQAJAAAIADIAHABQACAIAAAOIgBABQgBABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgGgVgTAAQgXAAAAAUQABANAPAKIAPAJQAXAOAAAVQAAAPgLAKQgKAJgSAAQgRAAgMgHgApKCYQgLgKAAgRQAAgRALgLQAMgMAQAAQAPAAALALQALALAAAQQAAARgLALQgLAMgRAAQgQAAgKgLgAo/BjQgHAJAAAOQAAAOAHAKQAFALAMAAQALAAAGgKQAEgIAAgNQAAgOgFgJQgHgMgLAAQgKAAgFAIgArhCdQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgHAEQgJAFgEAAQgIAAgFgFQgGgFAAgIQAAgFADgDQADgEAJgDIAWgIQADgBABgEIAAgIQAAgRgOAAQgEAAgEACQgDADgBAEIgBAGQgFADgGAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgHANgIQALgIAKAAQAVAAgCAWIgBAfQAAARAIAAQADAAADgCIACgBQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgGAIgJAAQgHAAgFgGgArsCCQgKADgDACQgEADAAAFQAAAEACADQAEAEAFAAIAHgBIAFgDQABgCABgHIABgLQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAgAhYCYQgLgJABgOQgBgUAVgJQgHgJAAgHQAAgJAHgHQAGgHAKAAQAHAAAEAEQAGAEAAAGQAAAGgFAEQgDADgFAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQABAAAAgBQADgFgBgDQgDgHgHAAQgGgBgDADQgDADAAAEQAAAFADAEIANAIQAQAJAGAGQAMAJAIARQAGgHAAgKQABgIgFgFQgCgDgEAAQgFgBgFADIgCABQAAAAgBAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAgFAFgDQAEgDAHAAIAQACQADAAACgCIABgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAKgLADQADAFAAAHQAAAMgKAMQAEAHAFADQADADAGAAIAJgBIAAABQABADgGACQgEABgHAAQgHAAgEgCIgLgHQgRAKgOAAQgQAAgMgKgAhVB2QAAAOALALQAJAKAOAAQAIAAAKgFIgIgKIgDgGQgLgPgPgLIgDgDQgMACAAANgADxCgIgBgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIADgBQAFAAACgDQABgCAAgKIAAggIgBgIIgEgEIgCgBIgBgCIABgBQANgFAFgEQABAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgBA4IABAMQABADAFAAIAEABIABACIgBACgAn/CgQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIADgBQAGAAAAgDQABgCAAgKIAAggIgBgIIgDgEIgCgBIgBgCIABgBQAMgFAGgEQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAALIABABQANgLAHAAQAHAAABAIQgBAEgCACQgCACgDAAIgEgBQgEgDgEAAQgEAAgCADQgDAEAAALIAAAZQAAAKABACQABADAFAAIAGABIABACIgBACgAp/CgIgBgCIABgCIAEgBQAFAAABgDQABgCAAgKIAAhTQAAgIgBgDQgBgCgEgCIgCgCIAAgBIAAgCQAQgFAEgDIACABIAABuQAAAKABACQAAADAFAAIAFABIABACIgBACgAtyCgIgBgCIABgCIADgBQAHgBABgEQABgDAAgPIAAhFQAAgKgBgDQgBgEgGgBIgGAAIgBgCQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAQgBAWAAQAVAAAKAFQAOAGAAARQAAAQgSAJQAAAAAAABQAAAAAAABQABAAAAAAQABAAABAAQAJACAGAHQAKAJgBANQABAQgMAKQgOAJgXAAgAtVBjQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAbQAAAPADAFQAFAFAKAAQANAAAHgGQAIgHAAgNQAAgNgHgIQgJgKgUAAQgHAAgCABgAtUAtQgDABABAEIAAAlQAAABAAABQAAABAAABQAAAAAAAAQABABAAAAQABABAHgBQAPAAAGgFQAIgGAAgMQAAgMgJgHQgHgFgMAAIgIAAgAD7BEQgDgDAAgEQAAgEADgCQADgDAEAAQAEAAACADQADACAAAEQAAAKgKAAQgEAAgCgDgAgQgmQgOgGgKgKQgJgKgFgPQgGgNAAgUQAAgSAGgOQAGgPAKgLQAJgKAOgGQAOgGAOAAQAJAAAKADQAIABAGAEQAGADADAFQADAEAAAFQAAAGgEAEQgDAFgHAAIgWgFIgJgBQgHAAgGAEQgIADgEAGQgFAGgDAIQgDAKAAAKQAAAVALAMQAKANARAAQAFAAAFgCIAPgFIAGgBQAGAAAEAEQAFAFAAAGQAAAFgEAFQgEAFgGADQgFADgJADQgKACgKAAQgPAAgOgGgAM4gjQgIgCgFgDQgGgEgDgFQgCgEAAgFQAAgGADgFQAEgEAFAAIAIABIAQAHIAIACQAEAAACgCQADgDAAgCQAAgEgFgDIgbgMQgIgEgCgDQgFgFgCgEQgCgEAAgIQABgHADgHQACgGAGgFQAGgFAIgDQAHgDAKAAQAIAAAIACQAHADAFADQAFADADAEQADAEgBAFQAAAFgDAFQgFAEgFAAQgEAAgCgCIgOgFIgHgCQgDAAgDACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAIAEADIARAHQAOAGAIAIQAGAHAAAMQAAAIgDAGQgEAIgFAFQgGAFgJADQgJADgJAAQgIAAgJgCgAIngmQgKgEgIgIQgHgHgFgMQgFgLAAgNQAAgMAFgLQADgLAIgIQAIgIAKgFQALgFAMAAQAMAAAKAFQAKAEAHAIQAIAIADAKQAFAJAAAMIgBAHIgEAEIgFACIgHAAIg9AAQABAKAIAFQAGAFALAAQAHAAAFgBIAJgEIAIgEQADgBAEAAQAGAAADADQAEAEAAAGQAAAEgEAGQgEAEgGAFQgHADgKADQgJACgKAAQgMAAgMgEgAIvh4QgHAGgCAJIAsAAQAAgJgGgGQgHgFgIAAQgJAAgFAFgAjWgmQgKgEgIgIQgIgIgEgLQgFgLAAgNQAAgMAFgLQAEgLAHgIQAHgIALgFQALgFALAAQAMAAALAFQAKAEAHAIQAHAIAEAKQAEAJAAAMIgBAHQgBACgCACIgFACIgHAAIg9AAQABAKAIAFQAFAFAMAAQAHAAAEgBIAKgEIAIgEQACgBAFAAQAGAAAEADQACAEAAAGQABAEgEAGQgEAEgGAFQgIAEgIACQgLACgKAAQgMAAgLgEgAjPh4QgGAGgCAJIAtAAQgBgJgHgGQgFgFgJAAQgJAAgGAFgAnWgmQgJgEgHgIQgIgIgDgLQgEgLAAgNQAAgNAEgKQAEgLAHgIQAIgJAJgEQAJgEALAAQAQAAAKAMQAGgLAKAAQAJAAADAGQAEAGAAAMIAABEQAAAYgQAAQgKAAgGgMQgKANgSAAQgJAAgKgEgAnMhxQgHAHAAANQAAANAGAHQAHAIAIAAQAKAAAGgIQAGgHABgNQgBgNgGgHQgGgHgKAAQgIAAgGAHgAqbgmQgLgEgGgIQgJgIgDgLQgEgKAAgOQAAgNAEgLQADgKAJgIQAGgIAMgFQAKgEANAAQASAAAJAGQALAGAAAJQAAAGgEAEQgEAEgGAAIgFAAIgMgEIgHgBQgKAAgGAIQgHAIAAAMQAAANAHAIQAFAIANAAIAGgBIAQgFQAGAAAEAFQAEAEAAAGQgBAFgDADQgCAFgGADQgEADgIACIgQABQgNAAgJgEgAFUgnQgJgEgHgIQgIgIgEgLQgEgLAAgNQAAgNAEgKQADgLAJgIQAFgIALgFQAIgEAMAAQAQAAAKAJIAAgeQAAgZARAAQARAAAAAZIAABzQAAAMgFAGQgEAGgIAAQgKAAgGgLQgLAMgQAAQgLAAgJgFgAFdhyQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAGgHAAgOQAAgNgGgHQgHgIgJAAQgJAAgGAIgArng2IgLhbIgRBJQgHAZgDAHQgDADgEABQgCACgGAAQgIAAgFgEQgEgEgDgKIgWhdIgMBYQgCAMgEAFQgDAGgJAAQgHAAgFgFQgFgEAAgJIACgLIAShnQACgLAGgGQAEgGALAAQATAAAFAUIAXBaIAWhaQAFgUASAAQAMAAAEAGQAHAGABANIARBwQAAAJgEAEQgFAFgIAAQgOAAgDgUgALHg7IAAgmQAAgNgDgHQgFgGgJAAQgKAAgFAGQgDAHAAANIAAAmQAAAYgSAAQgQAAAAgYIAAhEQAAgYAQAAQALAAAGALQAFgGAHgDQAIgCAJAAQAUAAALALQAKALAAAWIAAAwQAAAYgRAAQgRAAAAgYgAG6g7IAAhEQABgYAQAAQAKAAAHALQAKgLAMAAQAHAAAFAEQAFAFAAAHQAAAGgDACQgCADgEACIgKAEIgKAEIgGADQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIAAAqQAAAYgRAAQgQAAgBgYgAEBg7IAAhzQAAgZAQAAQASAAgBAZIAABzQAAAMgDAGQgFAGgJAAQgQAAAAgYgADHg7IAAhEQAAgYARAAQAQAAAAAYIAABEQAAAMgEAGQgEAGgIAAQgRAAAAgYgACOg7IAAgmQAAgNgEgHQgEgGgKAAQgKAAgEAGQgEAIAAAMIAAAmQAAAYgRAAQgRAAAAgYIAAhzQAAgZARAAQARAAAAAZIAAAhQAFgGAHgCQAHgCAKAAQATAAALALQALALgBAWIAAAwQAAAYgQAAQgRAAAAgYgAkqg7IAAgmQAAgNgEgHQgDgGgKAAQgKAAgFAGQgDAIAAAMIAAAmQgBAYgQAAQgRAAAAgYIAAhEQAAgYARAAQAKAAAGALQAFgGAHgDQAIgCAJAAQAUAAAKALQAKALAAAWIAAAwQAAAYgQAAQgRAAAAgYgAo4gkQgHAAgEgCQgFgBgCgCQgDgCgBgFIgBgKIAAhrQAAgYARAAQARAAABAYIAABhIAcAAQAZAAAAAQQAAAQgZAAgAL5iIQgNgKAPgUIAPgWQAOgUAPAKQAMAKgOAUIgQAWQgHAKgHACIgFABQgEAAgFgDgADKilQgGgGAAgIQAAgIAGgGQAFgGAJAAQAHAAAFAGQAHAGgBAIIgBAIQgBADgEADQgCADgDABQgEABgDAAQgJAAgFgFg");
	this.shape.setTransform(518.35,-519.2417);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mclane_logo, new cjs.Rectangle(424.1,-544.7,189.29999999999995,49.400000000000034), null);


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
(lib.BSWH_Mclane_Hospital_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// ctaBtn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("AgmARIgWgdIB5gPIgoA3g");
	var mask_graphics_88 = new cjs.Graphics().p("Ah1AoIgXhKIEZgPIgpBjg");
	var mask_graphics_89 = new cjs.Graphics().p("Ai9A8IgWhzIGngOIgoCLg");
	var mask_graphics_90 = new cjs.Graphics().p("Aj8BNIgWiVIIlgOIgoCtg");
	var mask_graphics_91 = new cjs.Graphics().p("AkyBdIgWi1IKRgOIgoDNg");
	var mask_graphics_92 = new cjs.Graphics().p("AlgBqIgWjQILtgNIgoDng");
	var mask_graphics_93 = new cjs.Graphics().p("AmGB0IgWjkIM5gNIgoD7g");
	var mask_graphics_94 = new cjs.Graphics().p("AmjB9IgWj2INzgMIgoEMg");
	var mask_graphics_95 = new cjs.Graphics().p("Am4CCIgWkBIOdgMIgoEXg");
	var mask_graphics_96 = new cjs.Graphics().p("AnECGIgXkIIO3gNIgoEfg");
	var mask_graphics_97 = new cjs.Graphics().p("AnJCHIgWkKIO/gNIgoEhg");
	var mask_graphics_98 = new cjs.Graphics().p("AnAB/IgWj7IOtgMIgmERg");
	var mask_graphics_99 = new cjs.Graphics().p("Am5B5IgWjuIOfgNIglEFg");
	var mask_graphics_100 = new cjs.Graphics().p("AmzB0IgWjlIOTgMIgkD7g");
	var mask_graphics_101 = new cjs.Graphics().p("AmvBxIgXjeIOMgNIgjD1g");
	var mask_graphics_102 = new cjs.Graphics().p("AmtBvIgWjaIOHgMIgjDwg");
	var mask_graphics_103 = new cjs.Graphics().p("AmsBuIgWjZIOFgMIgjDvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:420.1,y:48.6}).wait(1).to({graphics:mask_graphics_88,x:420.25,y:48.175}).wait(1).to({graphics:mask_graphics_89,x:420.375,y:47.775}).wait(1).to({graphics:mask_graphics_90,x:420.525,y:47.45}).wait(1).to({graphics:mask_graphics_91,x:420.625,y:47.175}).wait(1).to({graphics:mask_graphics_92,x:420.725,y:46.925}).wait(1).to({graphics:mask_graphics_93,x:420.775,y:46.725}).wait(1).to({graphics:mask_graphics_94,x:420.825,y:46.55}).wait(1).to({graphics:mask_graphics_95,x:420.875,y:46.425}).wait(1).to({graphics:mask_graphics_96,x:420.875,y:46.375}).wait(1).to({graphics:mask_graphics_97,x:420.9,y:46.35}).wait(1).to({graphics:mask_graphics_98,x:420.825,y:46.325}).wait(1).to({graphics:mask_graphics_99,x:420.8,y:46.3}).wait(1).to({graphics:mask_graphics_100,x:420.775,y:46.275}).wait(1).to({graphics:mask_graphics_101,x:420.75,y:46.275}).wait(1).to({graphics:mask_graphics_102,x:420.725,y:46.25}).wait(1).to({graphics:mask_graphics_103,x:420.725,y:46.25}).wait(117));

	// txt_learnMore
	this.instance = new lib.txt_learnMore();
	this.instance.setTransform(420.5,47.4,0.8896,0.8896,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(133));

	// orange_BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F26924").s().p("AM1G5I5/AAIhDAAIAAtxIBDAAIZ/AAIBZAAIAANxg");
	this.shape_1.setTransform(421.6,57.475);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(87).to({_off:false},0).wait(133));

	// mclane_logo
	this.instance_1 = new lib.mclane_logo();
	this.instance_1.setTransform(196.05,492.65,0.8519,0.8519);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({alpha:1},10).wait(133));

	// Layer_51
	this.instance_2 = new lib.Train_mc_static("synched",0,false);
	this.instance_2.setTransform(518.25,40.4,0.554,0.554,0,0,0,151.6,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).wait(33).to({mode:"single",startPosition:33},0).wait(101));

	// Train_mc
	this.train_mc = new lib.Train_mc();
	this.train_mc.name = "train_mc";
	this.train_mc.setTransform(-43.6,43.95,0.5543,0.5543,0,0,0,151.5,306.1);

	this.timeline.addTween(cjs.Tween.get(this.train_mc).to({x:518.4},85).to({_off:true},1).wait(134));

	// colorMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_59 = new cjs.Graphics().p("AiBA5IAzh0ICEAOIBMBpg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Ah7hUIDUATQAwBHAlBIIlbAHg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Aj+ijIG/AiQBOB+AlCBIpnAmg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AnZkmINIA6QCADZAlDjIwnBXg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AsMneIVvBdQDFFYAlFqI6ZCeg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AwfqHIdcB9QEGHPAjHkMgjLADeg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A0ysvMAlJACcQFHJFAhJfMgr9AEfg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A5GvXMAs3AC7QGIK8AfLZMg0vAFfg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A9Zx/MA0kADbQHJMxAdNTMg9hAGhg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EghtgUoMA8SAD7QILOoAbPNMhGUAHhg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EghcgUoMA7wAD7QG/OuBnPHMhFzAHhg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EghOgUoMA7UAD7QGBOzClPCMhFXAHhg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EghDgUoMA6+AD7QFRO3DVO+MhFBAHhg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Egg8gUoMA6wAD7QEuO5D3O8MhExAHhg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Egg3gUoMA6mAD7QEaO7EMO6MhEpAHhg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Egg2gUoMA6kAD7IImd1MhEmAHhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_1_graphics_59,x:104.3,y:30.65}).wait(1).to({graphics:mask_1_graphics_60,x:105.7,y:30.95}).wait(1).to({graphics:mask_1_graphics_61,x:109.925,y:32.3}).wait(1).to({graphics:mask_1_graphics_62,x:116.925,y:34.525}).wait(1).to({graphics:mask_1_graphics_63,x:126.725,y:37.675}).wait(1).to({graphics:mask_1_graphics_64,x:135.2,y:40.55}).wait(1).to({graphics:mask_1_graphics_65,x:143.65,y:43.425}).wait(1).to({graphics:mask_1_graphics_66,x:152.125,y:46.275}).wait(1).to({graphics:mask_1_graphics_67,x:160.575,y:49.15}).wait(1).to({graphics:mask_1_graphics_68,x:169.05,y:52.025}).wait(1).to({graphics:mask_1_graphics_69,x:167.375,y:52.025}).wait(1).to({graphics:mask_1_graphics_70,x:166,y:52.025}).wait(1).to({graphics:mask_1_graphics_71,x:164.925,y:52.025}).wait(1).to({graphics:mask_1_graphics_72,x:164.15,y:52.025}).wait(1).to({graphics:mask_1_graphics_73,x:163.7,y:52.025}).wait(1).to({graphics:mask_1_graphics_74,x:163.55,y:52.025}).wait(146));

	// txt_neverFear
	this.instance_3 = new lib.txt_neverFear();
	this.instance_3.setTransform(148.3,142.95);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(161));

	// txt_rightHere
	this.instance_4 = new lib.txt_rightHere();
	this.instance_4.setTransform(162.35,203.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({alpha:1},13).wait(133));

	// orange_BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F26924").s().p("Eg7hAJFIAAyJMB3EAAAIAASJg");
	this.shape_2.setTransform(371.05,52.075);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(59).to({_off:false},0).wait(161));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_3.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(220));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(282.9,39,446.1,71.2);
// library properties:
lib.properties = {
	id: 'FFC37EC63EA749E9B46BB3CC62BBBEC2',
	width: 728,
	height: 90,
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