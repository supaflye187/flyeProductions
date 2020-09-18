(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.ctaBtn = function() {
	this.initialize(img.ctaBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,134);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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


(lib.txt_yourEvent = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAhIAIghQgKgCAAgMQAAgHAEgGQAFgEAHAAQAHAAAFAEQAFAGAAAHQAAAGgFALIgKAeg");
	this.shape.setTransform(71.1,7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBKIAAh8IgwAAIAAgWIB7AAIAAAWIgwAAIAAB8g");
	this.shape_1.setTransform(62.225,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBKIhQhjIAABjIgbAAIAAiSIAWAAIBQBiIAAhiIAbAAIAACSg");
	this.shape_2.setTransform(47.425,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BKIAAiSIBqAAIAAAWIhPAAIAAAmIBGAAIAAAWIhGAAIAAAoIBSAAIAAAYg");
	this.shape_3.setTransform(32.35,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBKIhAiSIAeAAIAwBwIAxhwIAbAAIhACSg");
	this.shape_4.setTransform(17.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BKIAAiSIBqAAIAAAWIhPAAIAAAmIBGAAIAAAWIhGAAIAAAoIBSAAIAAAYg");
	this.shape_5.setTransform(3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBKIgegsIgFAAIghAAIAAAsIgbAAIAAiSIA8AAQAcAAARANQARAOAAAZQAAAhgfAMIAiAxgAgjAIIAgAAQAkAAAAgcQAAgdgkgBIggAAg");
	this.shape_6.setTransform(-17.325,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA5QgRgRAAgfIAAhSIAbAAIAABRQAAAqAkAAQAmAAAAgqIAAhRIAaAAIAABSQAAAfgRARQgQARgfAAQgdAAgRgRg");
	this.shape_7.setTransform(-33.875,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3A2QgXgVAAghQAAgfAXgWQAWgVAhgBQAiABAXAVQAWAWAAAfQAAAhgWAVQgXAWgigBQghABgWgWgAgkgkQgPAPAAAVQAAAXAPAOQAPAOAVAAQAWAAAPgOQAPgOAAgXQAAgVgPgPQgPgPgWAAQgVAAgPAPg");
	this.shape_8.setTransform(-50.975,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBKIAAg0Ig6heIAdAAIAqBHIAshHIAaAAIg5BdIAAA1g");
	this.shape_9.setTransform(-66.725,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_yourEvent, new cjs.Rectangle(-78.6,-14.8,157.2,29.6), null);


(lib.txt_YourBigEvent = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(139.1,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBaIAAiRIggAAIAAgiIBjAAIAAAiIghAAIAACRg");
	this.shape_1.setTransform(130.525,-4.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMBaIghhsIgCAAIAFAfIAABNIgiAAIAAizIApAAIAhBsIABAAIgFgfIAAhNIAkAAIAACzg");
	this.shape_2.setTransform(118.75,-4.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_3.setTransform(106.775,-4.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBaIghizIAkAAIAPBXIADAnIAEgnIAPhXIAkAAIgiCzg");
	this.shape_4.setTransform(94.925,-4.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_5.setTransform(83.375,-4.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAiHQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAABvIAdAAIAAgmIgPAAIAAgiIAyAAIAABUQAAAJgHAHQgGAGgKAAg");
	this.shape_6.setTransform(64.775,-4.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_7.setTransform(56.075,-4.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBMAAQAKAAAGAGQAHAHAAAJIAAAwQAAAHgEAFQgDAFgFACQAFADADAFQAEAFAAAHIAAAwQAAAJgHAHQgGAGgKAAgAgOA4IAdAAIAAgnIgdAAgAgOgQIAdAAIAAgnIgdAAg");
	this.shape_8.setTransform(47.425,-4.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANBaIgSgwIgKAAIAAAwIgiAAIAAizIAiAAIAiAAQAHAAAFACQAFACAEAFQAEADADAGQACAFAAAGIAABJQAAAJgGAIQgEAHgIADIATAygAgPAIIAdAAIAAg/IgdAAg");
	this.shape_9.setTransform(28.9,-4.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBaQgGAAgFgCQgGgCgDgEQgEgEgDgFQgCgFgBgGIAAgBIAAiWIAjAAIAACRIAdAAIAAiRIAjAAIAACWIAAABQgBAGgCAFQgCAFgFAEQgDAEgGACQgFACgGAAg");
	this.shape_10.setTransform(16.925,-4.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBaQgNAAgIgIQgJgJAAgMIAAh5QAAgGADgFQACgGAEgDQAEgFAFgCQAGgCAGAAIAnAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_11.setTransform(5.025,-4.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBaIAAg4Ighh7IAlAAIALA1IACAZIABAAIACgZIAKg1IAlAAIggB7IAAA4g");
	this.shape_12.setTransform(-6.45,-4.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANBaIgSgwIgKAAIAAAwIgiAAIAAizIAiAAIAiAAQAGAAAGACQAFACAEAFQAEADACAGQADAFAAAGIAABJQAAAJgGAIQgFAHgHADIAUAygAgPAIIAdAAIAAg/IgdAAg");
	this.shape_13.setTransform(-24.5,-4.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBaQgNAAgIgIQgJgJAAgMIAAh5QAAgGADgFQACgGAEgDQAEgFAFgCQAGgCAGAAIAnAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_14.setTransform(-36.475,-4.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAABIg");
	this.shape_15.setTransform(-47.825,-4.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBFAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_16.setTransform(-66.425,-4.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_17.setTransform(-78.025,-4.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMBaIghhsIgCAAIAFAfIAABNIgiAAIAAizIAoAAIAiBsIABAAIgEgfIAAhNIAjAAIAACzg");
	this.shape_18.setTransform(-90.35,-4.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAiHQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAABvIAdAAIAAgmIgPAAIAAgiIAyAAIAABUQAAAJgHAHQgGAGgKAAg");
	this.shape_19.setTransform(-102.625,-4.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_20.setTransform(-111.325,-4.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAgkIAjAAIAAAYIAdAAIAAgdIg3gcQgFgDgCgFQgCgEAAgGIAAgwQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAAAdIA3AcQAFADACAEQACAFAAAFIAAAxQAAAJgHAHQgGAGgKAAg");
	this.shape_21.setTransform(-119.975,-4.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_22.setTransform(-131.575,-4.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBFAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_23.setTransform(-143.475,-4.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_YourBigEvent, new cjs.Rectangle(-150.4,-15.4,306.9,27.6), null);


(lib.txt_tournamentWht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AW9EdIgriDIAth4Ig4AAIgVBDIgShDIg6AAIArB+IgtB9IgJAAIAAguIg5AAIAAg5IAmAAIAAgxIgmAAIAAg2IA5AAIAAgtIhzAAIAAD7IgRAAIAAgvIg5AAIAAjMIg6AAIAAD7IheAAIAAhZIAQAAQAXAAAQgLQASgNAAgWIAAhGQAAgWgSgNQgQgLgXAAIhKAAIAAD7IgXAAIAAj7IhTAAIgZBzIgZhzIhSAAIAAD7Ig6AAQAJgFAIgGQAVgSAAgUIAAiWQAAgVgVgRQgVgSgdAAQgdAAgVASQgVARAAAVIAACWQAAAUAVASQAIAGAJAFIhYAAQAIgEAIgGQATgQAAgUIAAgxIg6AAIAAApQAAALgMAAQgNAAAAgLIAAiNQAAgLANAAQAMAAAAALIAAApIA6AAIAAgxQAAgUgTgQQgVgQgeAAQgeAAgWAQQgTAQAAAUIAACdQAAAUATAQQAIAGAJAEIiSAAIAAjOIAnAAIAAgtIiJAAIAAAtIAoAAIAADOIg6AAIAAj7IgzAAIAAB8Igsh8Ig0AAIAAD7IgTAAIAAguIg4AAIAAg5IAlAAIAAgxIglAAIAAg2IA4AAIAAgtIhyAAIAAD7IgXAAIAAj7IhTAAIgZBzIgZhzIhSAAIAAD7IgLAAIgoj7IhFAAIgmD7IgLAAIAAj7Ig0AAIAAB8Igsh8Ig1AAIAAD7IgOAAQgGgYAAgQIAAgzQAAgTgYgKQAWgLAAgSIAAg4QAAgWgRgNQgQgLgXAAIhRAAIAAD7Ig4AAQAIgEAHgGQATgQAAgUIAAjNIg4AAIAADFQAAALgMAAQgLAAAAgLIAAjFIg7AAIAADNQAAAUAUAQQAHAGAJAEIheAAQAJgFAIgGQAVgSAAgUIAAiWQAAgVgVgRQgVgSgdAAQgdAAgVASQgVARAAAVIAACWQAAAUAVASQAIAGAJAFIhcAAIAAjOIAnAAIAAgtIiJAAIAAAtIAoAAIAADOIhlAAIgoj7IhFAAIgmD7IieAAIAAo5MA1bAAAIAAI5gAVcEdIAUhBIASBBgAMXEdIAkifIAACfgALSEdIAAifIAfCfgAAeEdIAAh4IAtB4gAkPEdIAkifIAACfgAlUEdIAAifIAfCfgAnyEdIAEgjIAcAAIADAjgAqSEdIAAh4IAuB4gAsrEdIAAhjIAOAAQAMAAAAAKIAAA0QAAAUAHARgA3bEdIAEgjIAcAAIADAjgAI3DnIAAiNQAAgLAMAAQAMAAAAALIAACNQAAALgMAAQgMAAAAgLgAxsDnIAAiNQAAgLAMAAQAMAAAAALIAACNQAAALgMAAQgMAAAAgLgAnoDIIAKhQIAHBQgA3RDIIAKhQIAHBQgAPGCUIAAhCIAIAAQAKAAAAAKIAAAuQAAAKgKAAgAsrCNIAAg7IAPAAQAKAAAAAKIAAAnQAAALgKgBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tournamentWht, new cjs.Rectangle(-170.9,-28.5,341.9,57), null);


(lib.txt_inspired = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgFgGAAgJQAAgIAFgGQAHgFAHAAQAIAAAHAFQAFAGAAAIQAAAJgFAGQgHAFgIAAQgHAAgHgFg");
	this.shape.setTransform(53.05,5.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBKIAAiSIBCAAQAkgBAWAVQAXAUAAAgQAAAhgXAVQgWATgkABgAgnAuIAfAAQAVgBANgMQANgMAAgVQAAgUgNgNQgNgLgVAAIgfAAg");
	this.shape_1.setTransform(42.15,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BKIAAiSIBuAAIAAAbIhMAAIAAAfIBDAAIAAAaIhDAAIAAAiIBPAAIAAAcg");
	this.shape_2.setTransform(26.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBKIgdgqIgBAAIgdAAIAAAqIgiAAIAAiSIA/AAQAdAAARAOQARAOABAZQAAAggfANIAhAwgAgeAFIAbAAQAfAAAAgYQAAgagfAAIgbAAg");
	this.shape_3.setTransform(11.8,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBKIAAiSIAhAAIAACSg");
	this.shape_4.setTransform(0.15,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BKIAAiSIA/AAQAdAAARAOQASAOAAAZQAAAYgSAOQgRAOgdAAIgdAAIAAApgAgdAFIAcAAQAeAAAAgYQAAgageAAIgcAAg");
	this.shape_5.setTransform(-10.525,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBHQgQgFgKgHIAMgaQAUAQAcgBQAbAAAAgPQAAgJgNgFIgcgHQgUgFgKgHQgNgKAAgUQAAgTAPgMQARgOAdAAQAeAAAVANIgLAaQgUgMgUAAQgbAAAAARQAAAJANAFIAcAHQAUAFAKAHQANAKAAASQAAAUgQANQgQANgeAAQgRAAgQgFg");
	this.shape_6.setTransform(-25.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBKIhIhZIAABZIghAAIAAiSIAcAAIBIBYIAAhYIAiAAIAACSg");
	this.shape_7.setTransform(-40.45,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQBKIAAiSIAhAAIAACSg");
	this.shape_8.setTransform(-52.35,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inspired, new cjs.Rectangle(-57.9,-14.8,115.8,29.6), null);


(lib.txt_HamptonRoads = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWAmIgSgYIgFAAIgVAAIAAAYIgIAAIAAhLIAdAAQAOgBAIAIQAJAGAAANQAAASgSAFIATAagAgWAHIAVAAQAKAAAGgFQAGgEAAgJQAAgJgGgGQgGgEgKAAIgVAAg");
	this.shape.setTransform(113.975,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA0AAIAAAHIgsAAIAAAbIAnAAIAAAGIgnAAIAAAdIAtAAIAAAGg");
	this.shape_1.setTransform(106.275,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAmIAAhEIgbAAIAAgHIA9AAIAAAHIgbAAIAABEg");
	this.shape_2.setTransform(99.15,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_3.setTransform(91.575,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA0AAIAAAHIgsAAIAAAbIAnAAIAAAGIgnAAIAAAdIAtAAIAAAGg");
	this.shape_4.setTransform(83.725,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAcQgLgLAAgRQAAgQALgLQAMgLAQAAQASAAAKALIgFAFQgJgJgNAAQgNAAgKAJQgJAKAAAMQAAAOAJAJQAKAJANAAQANAAAJgJIAFAFQgKALgSAAQgQAAgMgLg");
	this.shape_5.setTransform(75.825,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_6.setTransform(64.575,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAcQgLgLAAgRQAAgQALgLQALgLARAAQARAAAMALQAMALAAAQQAAARgMALQgMALgRAAQgRAAgLgLgAgWgWQgJAJAAANQAAAOAJAJQAJAJANAAQAOAAAJgJQAKgJAAgOQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_7.setTransform(55.5,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_8.setTransform(49.25,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAmIAAhEIgbAAIAAgHIA9AAIAAAHIgbAAIAABEg");
	this.shape_9.setTransform(44.45,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_10.setTransform(36.875,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA0AAIAAAHIgsAAIAAAbIAnAAIAAAGIgnAAIAAAdIAtAAIAAAGg");
	this.shape_11.setTransform(29.025,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAmIgihLIAIAAIAdBBIAehBIAIAAIgiBLg");
	this.shape_12.setTransform(21.25,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_13.setTransform(12.975,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQALALAAAQQAAARgLALQgLALgSAAQgQAAgMgLgAgWgWQgJAJAAANQAAAOAJAJQAJAJANAAQAOAAAJgJQAKgJgBgOQABgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_14.setTransform(3.9,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAcQgLgLAAgRQAAgQALgLQAMgLAQAAQASAAAKALIgFAFQgJgJgNAAQgNAAgKAJQgJAKAAAMQAAAOAJAJQAKAJANAAQANAAAJgJIAFAFQgKALgSAAQgQAAgMgLg");
	this.shape_15.setTransform(-4.625,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAkQgIgDgFgEIAEgGQAEAEAHACQAHADAGAAQAKAAAGgEQAFgDAAgHQAAgGgIgEQgDgCgMgDQgLgDgFgCQgIgGAAgJQAAgJAHgGQAIgGANAAQAOAAAKAHIgDAGQgKgGgLAAQgJAAgGAEQgFAEAAAFQAAAIAIADIAPAGQALABAFAEQAIAEAAAKQAAAJgHAGQgIAGgOAAQgIAAgHgDg");
	this.shape_16.setTransform(-14.825,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjAmIAAhLIAfAAQASgBALALQALALAAAQQAAARgLALQgLALgSgBgAgbAgIAXAAQAOgBAJgIQAJgJAAgOQAAgNgJgIQgJgJgOAAIgXAAg");
	this.shape_17.setTransform(-22.375,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfAmIgJgUIgqAAIgKAUIgIAAIAjhLIAHAAIAjBLgAATALIgTgoIgRAoIAkAAg");
	this.shape_18.setTransform(-31.175,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAcQgLgLAAgRQAAgQALgLQAMgLAQAAQARAAAMALQAMALAAAQQAAARgMALQgMALgRAAQgQAAgMgLgAgWgWQgJAJAAANQAAAOAJAJQAJAJANAAQAOAAAJgJQAJgJAAgOQAAgNgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape_19.setTransform(-39.7,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWAmIgSgYIgFAAIgVAAIAAAYIgIAAIAAhLIAdAAQAOgBAIAIQAJAGAAANQAAASgSAFIATAagAgWAHIAVAAQAKAAAGgFQAGgEAAgJQAAgJgGgGQgGgEgKAAIgVAAg");
	this.shape_20.setTransform(-47.925,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_21.setTransform(-59.525,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAcQgLgLAAgRQAAgQALgLQALgLARAAQARAAAMALQAMALAAAQQAAARgMALQgMALgRAAQgRAAgLgLgAgWgWQgJAJAAANQAAAOAJAJQAJAJANAAQAOAAAJgJQAKgJAAgOQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_22.setTransform(-68.6,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAmIAAhEIgbAAIAAgHIA9AAIAAAHIgbAAIAABEg");
	this.shape_23.setTransform(-76.35,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAmIAAhLIAdAAQANgBAJAIQAIAGAAANQAAALgIAHQgJAHgNAAIgVAAIAAAYgAgVAHIAUAAQALAAAGgFQAGgEAAgJQAAgJgGgGQgGgEgLAAIgUAAg");
	this.shape_24.setTransform(-83.075,0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgAmIAAg8IgeAyIgDAAIgegyIAAA8IgIAAIAAhLIAHAAIAgA3IAhg3IAHAAIAABLg");
	this.shape_25.setTransform(-92.6,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAfAmIgJgUIgqAAIgKAUIgIAAIAjhLIAHAAIAjBLgAATALIgTgoIgRAoIAkAAg");
	this.shape_26.setTransform(-101.775,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAYAmIAAgjIgvAAIAAAjIgIAAIAAhLIAIAAIAAAiIAvAAIAAgiIAIAAIAABLg");
	this.shape_27.setTransform(-110.125,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_HamptonRoads, new cjs.Rectangle(-149.7,-8.2,302.5,17.4), null);


(lib.txt_HamptonColiseum = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAgAmIAAg8IgeAyIgDAAIgegyIAAA8IgIAAIAAhLIAHAAIAgA3IAhg3IAHAAIAABLg");
	this.shape.setTransform(60.75,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAeQgJgIAAgRIAAgrIAIAAIAAArQABAbAWAAQAXAAAAgbIAAgrIAIAAIAAArQABARgJAIQgIAJgPAAQgOAAgIgJg");
	this.shape_1.setTransform(51.15,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA0AAIAAAHIgsAAIAAAbIAnAAIAAAGIgnAAIAAAdIAtAAIAAAGg");
	this.shape_2.setTransform(43.425,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAkQgIgDgFgEIAEgGQAEAEAHACQAHADAGAAQAKAAAGgEQAFgEAAgGQAAgGgIgEQgDgCgMgDQgLgDgFgCQgIgGAAgJQAAgJAHgGQAIgGANAAQAOAAAKAGIgDAHQgKgGgLAAQgJAAgGAEQgFAEAAAFQAAAIAIADIAPAGQALABAFADQAIAGAAAJQAAAJgHAGQgIAGgOAAQgIAAgHgDg");
	this.shape_3.setTransform(36.075,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_4.setTransform(31.05,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAmIAAhLIAIAAIAABFIArAAIAAAGg");
	this.shape_5.setTransform(26.775,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAcQgLgLAAgRQAAgQALgLQAMgLAQAAQARAAAMALQAMALAAAQQAAARgMALQgMALgRAAQgQAAgMgLgAgWgWQgJAJAAANQAAANAJAKQAJAJANAAQAOAAAJgJQAJgKABgNQgBgNgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape_6.setTransform(18.35,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAcQgLgLAAgRQAAgQALgLQAMgLAQAAQASAAAKALIgFAFQgJgJgNAAQgNAAgKAJQgJAKAAAMQAAANAJAKQAKAJANAAQANAAAJgJIAFAFQgKALgSAAQgQAAgMgLg");
	this.shape_7.setTransform(9.825,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAmIgwg9IAAA9IgIAAIAAhLIAGAAIAxA9IAAg9IAIAAIAABLg");
	this.shape_8.setTransform(-1.425,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQALALAAAQQAAARgLALQgLALgSAAQgQAAgMgLgAgWgWQgJAJAAANQAAANAJAKQAJAJANAAQAOAAAJgJQAKgKgBgNQABgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_9.setTransform(-10.5,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAmIAAhEIgbAAIAAgHIA9AAIAAAHIgbAAIAABEg");
	this.shape_10.setTransform(-18.25,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAmIAAhLIAdAAQANgBAJAIQAIAGAAANQAAALgIAHQgJAHgNAAIgVAAIAAAYgAgVAHIAUAAQALAAAGgFQAGgEAAgJQAAgJgGgGQgGgEgLAAIgUAAg");
	this.shape_11.setTransform(-24.975,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgAmIAAg8IgeAyIgDAAIgegyIAAA8IgIAAIAAhLIAGAAIAhA3IAig3IAGAAIAABLg");
	this.shape_12.setTransform(-34.5,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfAmIgJgUIgqAAIgKAUIgIAAIAjhLIAHAAIAjBLgAATALIgTgoIgRAoIAkAAg");
	this.shape_13.setTransform(-43.675,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYAmIAAgjIgvAAIAAAjIgIAAIAAhLIAIAAIAAAiIAvAAIAAgiIAIAAIAABLg");
	this.shape_14.setTransform(-52.025,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_HamptonColiseum, new cjs.Rectangle(-95,-9.2,199.5,17.4), null);


(lib.txt_forMultiple = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape.setTransform(143.925,5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglB+QgNAAgJgJQgJgKAAgMIAAgzIAwAAIAAAhIAoAAIAAgnIhNgoQgGgEgDgGQgCgHAAgHIAAhEQAAgNAJgJQAJgJANAAIBLAAQANAAAJAJQAJAJAAANIAAAzIgxAAIAAghIgoAAIAAAoIBNAnQAHAEADAGQACAHAAAHIAABEQAAAMgJAKQgJAJgNAAg");
	this.shape_1.setTransform(131.175,-3.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXB+IAAjKIgtAAIAAgxICJAAIAAAxIgtAAIAADKg");
	this.shape_2.setTransform(115.325,-3.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASB+IgahDIgNAAIAABDIgwAAIAAj7IAwAAIAwAAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAABlQAAANgHAKQgHALgMAEIAcBGgAgVALIAoAAIAAhXIgoAAg");
	this.shape_3.setTransform(99.625,-3.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbB+QgRAAgMgMQgMgMAAgSIAAinQAAgJADgHQADgIAGgFQAFgGAIgEQAIgDAIAAIA3AAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAACnQAAAJgDAIQgDAHgGAGQgGAFgHAEQgIADgIAAgAgUBNIAoAAIAAiZIgoAAg");
	this.shape_4.setTransform(82.925,-3.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEB+IAAj7IAwAAIAwAAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAABlQAAAIgDAIQgDAIgGAFQgGAFgHAEQgIADgIAAIgwAAIAABDgAgUALIAoAAIAAhXIgoAAg");
	this.shape_5.setTransform(66.725,-3.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglB+QgNAAgJgJQgJgKAAgMIAAgzIAwAAIAAAhIAoAAIAAgnIhNgoQgGgEgDgGQgCgHAAgHIAAhEQAAgNAJgJQAJgJANAAIBLAAQANAAAJAJQAJAJAAANIAAAzIgxAAIAAghIgoAAIAAAoIBNAnQAHAEADAGQACAHAAAHIAABEQAAAMgJAKQgJAJgNAAg");
	this.shape_6.setTransform(50.125,-3.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEB+IAAj7ICJAAIAAAxIhZAAIAAA1IBBAAIAAAvIhBAAIAAA1IBZAAIAAAxg");
	this.shape_7.setTransform(24.575,-3.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEB+IAAj7IAwAAIAADKIBZAAIAAAxg");
	this.shape_8.setTransform(7.975,-3.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEB+IAAj7IAwAAIAwAAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAABlQAAAIgDAIQgDAIgGAFQgGAFgHAEQgIADgIAAIgwAAIAABDgAgUALIAoAAIAAhXIgoAAg");
	this.shape_9.setTransform(-8.225,-3.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXB+IAAj7IAvAAIAAD7g");
	this.shape_10.setTransform(-20.325,-3.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXB+IAAjKIgtAAIAAgxICJAAIAAAxIgtAAIAADKg");
	this.shape_11.setTransform(-31.675,-3.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhEB+IAAj7IAwAAIAADKIBZAAIAAAxg");
	this.shape_12.setTransform(-47.475,-3.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbB+QgIAAgIgDQgHgEgFgFQgGgFgDgHQgEgIAAgIIAAgCIAAjRIAwAAIAADKIApAAIAAjKIAwAAIAADRIAAACQAAAIgDAIQgEAHgGAFQgFAFgIAEQgHADgIAAg");
	this.shape_13.setTransform(-64.075,-3.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAwB+IAAiHIACglIgBAAIgdCsIgUAAIgTAAIgdisIgBAAIACAlIAACHIgxAAIAAj7IBHAAIAWB3IADAqIAAAAIABAAIACgqIAXh3IBHAAIAAD7g");
	this.shape_14.setTransform(-83.425,-3.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASB+IgahDIgNAAIAABDIgwAAIAAj7IAwAAIAwAAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAABlQAAANgHAKQgHALgMAEIAcBGgAgVALIAoAAIAAhXIgoAAg");
	this.shape_15.setTransform(-112.025,-3.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbB+QgRAAgMgMQgMgMAAgSIAAinQAAgJADgHQADgIAGgFQAFgGAIgEQAIgDAIAAIA3AAQAIAAAIADQAHAEAGAGQAGAFADAIQADAHAAAJIAACnQAAAJgDAIQgDAHgGAGQgGAFgHAEQgIADgIAAgAgUBNIAoAAIAAiZIgoAAg");
	this.shape_16.setTransform(-128.725,-3.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhEB+IAAj7ICJAAIAAAxIhZAAIAAA1IBBAAIAAAvIhBAAIAABmg");
	this.shape_17.setTransform(-144.525,-3.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_forMultiple, new cjs.Rectangle(-153.4,-18.4,306.9,36.9), null);


(lib.txt_Exibitions = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(136.95,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAgkIAjAAIAAAYIAdAAIAAgdIg3gcQgFgDgCgFQgCgEAAgGIAAgwQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAAAdIA3AcQAFADACAEQACAFAAAFIAAAxQAAAJgHAHQgGAGgKAAg");
	this.shape_1.setTransform(126.825,-2.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_2.setTransform(114.225,-2.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAiHQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAABvIAdAAIAAgYIAjAAIAAAkQAAAJgHAHQgGAGgKAAg");
	this.shape_3.setTransform(101.325,-2.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBaIgihsIgBAAIAEAfIAABNIgjAAIAAizIAqAAIAiBsIAAAAIgFgfIAAhNIAjAAIAACzg");
	this.shape_4.setTransform(88,-2.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_5.setTransform(75.025,-2.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANBaIgSgwIgKAAIAAAwIgjAAIAAizIAjAAIAiAAQAHAAAEACQAGACAEAFQAEADADAGQACAFAAAGIAABJQAAAJgGAIQgEAHgJADIAUAygAgPAIIAdAAIAAg/IgdAAg");
	this.shape_6.setTransform(62.2,-2.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_7.setTransform(49.525,-2.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAABIg");
	this.shape_8.setTransform(37.175,-2.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANBaIgihsIgBAAIAEAfIAABNIgiAAIAAizIAoAAIAjBsIAAAAIgEgfIAAhNIAiAAIAACzg");
	this.shape_9.setTransform(23.85,-2.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBaQgNAAgIgIQgJgJAAgMIAAh5QAAgGADgFQACgGAEgDQAEgFAFgCQAGgCAGAAIAnAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_10.setTransform(10.575,-2.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAiHQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAABvIAdAAIAAgYIAjAAIAAAkQAAAJgHAHQgGAGgKAAg");
	this.shape_11.setTransform(-2.325,-2.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape_12.setTransform(-20.15,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBaQgJAAgGgGQgHgHAAgJIAAgkIAjAAIAAAYIAdAAIAAgdIg3gcQgFgDgCgFQgCgEAAgGIAAgwQAAgJAHgHQAGgGAJAAIA2AAQAKAAAGAGQAHAHAAAJIAAAkIgjAAIAAgYIgdAAIAAAdIA3AcQAFADACAEQACAFAAAFIAAAxQAAAJgHAHQgGAGgKAAg");
	this.shape_13.setTransform(-30.275,-2.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMBaIghhsIgCAAIAFAfIAABNIgjAAIAAizIAqAAIAiBsIAAAAIgFgfIAAhNIAjAAIAACzg");
	this.shape_14.setTransform(-43.6,-2.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBaQgNAAgIgIQgJgJAAgMIAAh5QAAgGADgFQACgGAEgDQAEgFAFgCQAGgCAGAAIAnAAQAGAAAFACQAGACAEAFQAEADACAGQADAFAAAGIAAB5QAAAGgDAFQgCAGgEAEQgEADgGADQgFACgGAAgAgOA4IAdAAIAAhvIgdAAg");
	this.shape_15.setTransform(-56.875,-2.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_16.setTransform(-66.575,-2.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBaIAAiRIggAAIAAgiIBjAAIAAAiIghAAIAACRg");
	this.shape_17.setTransform(-75.675,-2.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_18.setTransform(-84.825,-2.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBMAAQAKAAAGAGQAHAHAAAJIAAAwQAAAHgEAFQgDAFgFACQAFADADAFQAEAFAAAHIAAAwQAAAJgHAHQgGAGgKAAgAgOA4IAdAAIAAgnIgdAAgAgOgQIAdAAIAAgnIgdAAg");
	this.shape_19.setTransform(-94.475,-2.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_20.setTransform(-104.175,-2.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPBaIAAhIIgdAAIAABIIgjAAIAAizIAjAAIAABJIAdAAIAAhJIAjAAIAACzg");
	this.shape_21.setTransform(-113.825,-2.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANBaIgIgcIgBgJIgCgKIgCgJIAAAAIgBAJIgCAKIgCAJIgHAcIgkAAIAXhaIgXhZIAkAAIAHAcIACAJIACAJIABAHIAAADIADgPIACgNIAIgcIAkAAIgXBZIAXBag");
	this.shape_22.setTransform(-126.1,-2.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBaIAAizIBjAAIAAAiIhAAAIAAAnIAuAAIAAAiIguAAIAAAmIBAAAIAAAig");
	this.shape_23.setTransform(-138.075,-2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Exibitions, new cjs.Rectangle(-203.7,-13.1,406.5,27.6), null);


(lib.txt_ConventionsWht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ARTEsIAHgGQAYgYAAgmQAAgzg8g3QgigdgJgMQgKgOAAgUQAAgIAHgHQAGgFAIAAQAIAAAFAFQAFAGAAAJIAAAeIBGAAIAAgpQAAgdgZgVQgagaglAAQguABgaAaQgZAXAAAmQAAA1A1AxIAsApQAQARAAATQAAAWgVAAQgZAAAAgXIAAgbIhFAAIAAApQAAAgAaAWIACACIg1AAIAAlJIhGAAIAACoIg8ioIhIAAIAAFJIg+AAIAGgEQAbgYAAgcIAAjMQAAgcgbgWQgdgagoAAQgnAAgdAaQgcAWAAAcIAADMQAAAcAcAYIAFAEIhAAAIAAlJIhPAAIAAFJIhPAAIAAkNIA1AAIAAg8Ii7AAIAAA8IA3AAIAAENIhOAAIAAlJIhHAAIAACoIg7ioIhIAAIAAFJIgZAAIAAgzIhNAAIAAhPIAzAAIAAhBIgzAAIAAhKIBNAAIAAg8IicAAIAAFJIhNAAIA+lJIhMAAIgYC/IgUi/IhSAAIA+FJIhNAAIAAlJIhHAAIAACoIg7ioIhJAAIAAFJIg9AAIAFgEQAcgYAAgcIAAjMQAAgcgcgWQgdgagnAAQgoAAgdAaQgbAWAAAcIAADMQAAAcAbAYIAGAEIhUAAIAEgDQAZgVAAgbIAAhDIhOAAIAAA5QAAAOgQAAQgRAAAAgOIAAjCQAAgOARAAQAQAAAAAOIAAA4IBOAAIAAhCQAAgcgZgTQgcgYgpAAQgqAAgdAYQgaAUAAAbIAADWQAAAbAaAVIAEADIqIAAIAApXMA1pAAAIAAJXgAMWEsIAAiYIA6CYgAAVEsIAAiYIA5CYgApSEsIAAiYIA6CYgAJDDvIAAjCQAAgOAQAAQAQAAAAAOIAADCQAAAOgQAAQgQAAAAgOgAslDvIAAjCQAAgOAQAAQAQAAAAAOIAADCQAAAOgQAAQgQAAAAgOg");
	this.shape.setTransform(-4.725,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ConventionsWht, new cjs.Rectangle(-176.4,-28.9,343.4,60), null);


(lib.txt_booWilliams = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAZAnIgZgjIgYAjIgJAAIAdgnIgbgmIAJAAIAWAgIAXggIAJAAIgbAlIAdAog");
	this.shape.setTransform(77.825,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIA0AAIAAAHIgsAAIAAAcIAnAAIAAAGIgnAAIAAAcIAtAAIAAAIg");
	this.shape_1.setTransform(70.825,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAIAAIAABFIArAAIAAAIg");
	this.shape_2.setTransform(64.225,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIAdAAQANABAJAGQAIAIAAAMQAAALgIAHQgJAHgNAAIgVAAIAAAZgAgVAHIAUAAQALAAAGgFQAGgEAAgJQAAgKgGgEQgGgGgLAAIgUAAg");
	this.shape_3.setTransform(56.825,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgFgEIAEgGQAEAEAHADQAHACAGAAQAKAAAGgEQAFgEAAgFQAAgIgIgDQgDgCgMgDQgLgDgFgDQgIgEAAgKQAAgJAHgGQAIgGANAAQAOAAAKAGIgDAHQgKgGgLAAQgJAAgGAEQgFADAAAHQAAAGAIAFIAPAEQALACAFADQAIAFAAAKQAAAJgHAGQgIAGgOAAQgIAAgHgCg");
	this.shape_4.setTransform(49.175,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAnIAAhGIgbAAIAAgHIA9AAIAAAHIgbAAIAABGg");
	this.shape_5.setTransform(42.65,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAnIgSgaIgFABIgVAAIAAAZIgIAAIAAhNIAdAAQAOABAIAGQAJAIAAAMQAAARgSAGIATAbgAgWAHIAVAAQAKAAAGgFQAGgEAAgJQAAgKgGgEQgGgGgKAAIgVAAg");
	this.shape_6.setTransform(35.875,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQALgLARAAQASAAALALQAMALgBAQQABARgMALQgLALgSAAQgRAAgLgLgAgWgWQgJAJAAANQAAANAJAKQAJAJANAAQAOAAAJgJQAKgKAAgNQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_7.setTransform(26.95,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIAdAAQANABAJAGQAIAIAAAMQAAALgIAHQgJAHgNAAIgVAAIAAAZgAgVAHIAUAAQALAAAGgFQAGgEAAgJQAAgKgGgEQgGgGgLAAIgUAAg");
	this.shape_8.setTransform(18.775,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgFgEIAEgGQAEAEAHADQAHACAGAAQAKAAAGgEQAFgEAAgFQAAgIgIgDQgDgCgMgDQgLgDgFgDQgIgEAAgKQAAgJAHgGQAIgGANAAQAOAAAKAGIgDAHQgKgGgLAAQgJAAgGAEQgFADAAAHQAAAGAIAFIAPAEQALACAFADQAIAFAAAKQAAAJgHAGQgIAGgOAAQgIAAgHgCg");
	this.shape_9.setTransform(11.125,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgFgEIAEgGQAEAEAHADQAHACAGAAQAKAAAGgEQAFgEAAgFQAAgIgIgDQgDgCgMgDQgLgDgFgDQgIgEAAgKQAAgJAHgGQAIgGANAAQAOAAAKAGIgDAHQgKgGgLAAQgJAAgGAEQgFADAAAHQAAAGAIAFIAPAEQALACAFADQAIAFAAAKQAAAJgHAGQgIAGgOAAQgIAAgHgCg");
	this.shape_10.setTransform(1.525,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgAnIAAg9IgeAzIgDAAIgegzIAAA9IgIAAIAAhNIAHAAIAgA5IAhg5IAHAAIAABNg");
	this.shape_11.setTransform(-7.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfAnIgJgVIgqAAIgKAVIgIAAIAjhNIAHAAIAjBNgAATAMIgTgpIgRApIAkAAg");
	this.shape_12.setTransform(-16.275,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAHAAIAABNg");
	this.shape_13.setTransform(-21.85,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAIAAIAABFIArAAIAAAIg");
	this.shape_14.setTransform(-26.125,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAIAAIAABFIArAAIAAAIg");
	this.shape_15.setTransform(-32.575,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAHAAIAABNg");
	this.shape_16.setTransform(-38.05,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWAnIgWhBIgWBBIgIAAIgahNIAIAAIAWBCIAXhCIAHAAIAXBCIAWhCIAIAAIgaBNg");
	this.shape_17.setTransform(-45.775,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAcQgMgLABgRQgBgQAMgLQALgLARAAQARAAAMALQAMALAAAQQAAARgMALQgMALgRAAQgRAAgLgLgAgWgWQgJAJAAANQAAANAJAKQAJAJANAAQAOAAAJgJQAKgKAAgNQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_18.setTransform(-59.35,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQALALAAAQQAAARgLALQgLALgSAAQgQAAgMgLgAgWgWQgJAJAAANQAAANAJAKQAJAJANAAQAOAAAJgJQAKgKgBgNQABgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_19.setTransform(-68.55,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIAgAAQANABAHAFQAHAFAAAKQAAAMgMAFQAQACAAAQQAAAVgdAAgAgXAgIAaAAQAVAAAAgOQAAgPgVAAIgaAAgAgXgDIAXAAQAUAAAAgOQAAgOgUAAIgXAAg");
	this.shape_20.setTransform(-76.925,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_booWilliams, new cjs.Rectangle(-99.7,-8.7,199.5,17.4), null);


(lib.txt_AColiseumWht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AOME2IAAlCIhvAAIggCYIghiYIhuAAIAAFCIg5AAIAEgDQAZgVAAgbIAAkPIhLAAIAAEFQAAAPgPAAQgQAAAAgPIAAkFIhOAAIAAEPQAAAbAbAVIAEADIg3AAIAAgzIhKAAIAAhMIAxAAIAAhAIgxAAIAAhIIBKAAIAAg7IiYAAIAAFCIg2AAIAHgHQAXgYAAgkQAAgyg7g1QghgegIgKQgKgOAAgUQAAgIAGgGQAGgGAIABQAIgBAFAGQAGAGAAAIIAAAeIBDAAIAAgpQAAgcgYgWQgZgYglAAQgsAAgaAZQgYAZAAAkQAAAzA0AxIAqAnQAQASAAARQAAAXgVAAQgXgBAAgWIAAgbIhFAAIAAApQAAAfAaAVIAEADIg3AAIAAlCIhOAAIAAFCIgaAAIAAg1IhKAAIAAkNIhOAAIAAFCIg8AAIAGgFQAbgXAAgbIAAjIQAAgbgbgXQgcgYgnAAQgmAAgdAYQgbAXAAAbIAADIQAAAbAbAXIAHAFIhTAAIADgDQAagVAAgbIAAhBIhNAAIAAA3QAAAPgQAAQgRAAAAgPIAAi8QAAgOARAAQAQAAAAAOIAAA2IBNAAIAAhAQAAgbgagVQgbgVgogBQgoABgcAVQgbAVAAAbIAADQQAAAbAbAVIAEADIh3AAIgylCIhcAAIgxFCIscAAIAAprMA25AAAIAAJrgAMRE2IAujIIAADIgAK0E2IAAjJIAnDJgAt8E2IAEgkIAmAAIADAkgAmLD5IAAi8QAAgOAQAAQAQAAAAAOIAAC8QAAAPgQAAQgQAAAAgPgAtvDOIAOhpIAIBpg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AColiseumWht, new cjs.Rectangle(-175.7,-31,351.5,62), null);


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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.hamptonLogo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#69BCAB").s().p("AkIANIgEgEQgEgGAHgCIAEAAQBMAbB2gkQBfgeAzgIQBWgQBlA3IADAEQAEADgHAEIgEAAQg6gQhDAIQgxAGhJAWQhMAag6ABQhIgBhJglg");
	this.shape.setTransform(-84.2116,32.671);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BD1E3").s().p("ACfBDQgigDg6gYQgUgHgugXQgpgTgYgJQhrgpiDA1IgjAOQgEACgDgFQgCgEACgBIABgBQBUgxBOgNQAQgDAhgBIABAAQAmAAAqALQAcAHAxASQBRAfApAKQBQAUBhgnIANgFIACAAQADgBACADQACADgCADIgBADQgxAlgkARQgoARgnAAIgVgBg");
	this.shape_1.setTransform(-56.8181,28.1893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7B446").s().p("AkhA3IgBgBQgCgCABgDQAAgDAEgBIADAAQBfAiBghAIBWg7QAzgkArgFQAtgHAuAXQAzAWA9A+IADAGQACAIgVgIQhSgeg4ABQgrAAhBAZIiAA5QghAOgkAAQg4AAhAghg");
	this.shape_2.setTransform(-17.4556,32.5196);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBB9C").s().p("ARkGIIACgPIgDgKIgCgCIgdAAIgCACIgDAKIADAPIgrAAIAIgPIAZhlIgDgMIA+AAIgCAMIAZBlIAHAPgARJFQIACABIAQAAIACgBIgKgoIgBgHgAPGGIIAEgPIAAhiIgEgPIAtAAIgFAPIAABiIAFAPgAN2GIIgphEIgEgJIABAJIAAA1IAFAPIgoAAIAEgPIAAhiIgFgPIAnAAIAgA2IADAJIgBgJIAAgnIgEgPIAnAAIgEAPIAABxgALGGIIAFgPIAAhiIgFgPIAtAAIgEAPIAABiIAEAPgAJKGIIgXgYIAAhPIAZgZIA6AAIANAmIgWgIIgWAAIgLAGIgFAJIAAAqIAEAHIAHAEIAMAAIAFgGIAAgUIgIgRIAxAAIgHANIAAAbIABAJIgXAYgAHeGIIgOgpIgDgCIgLAAIgCACIAAAaIAFAPIgrAAIAFgPIAAhiIgFgPIBPAAIAXAXIAAAkIgPARIAMAiIAKASgAHAEnIAAAXIACABIAQAAIAIgDIACgHIAAgFIgCgHIgIgEIgQAAgAE5GIIAFgPIAAhiIgFgPIAsAAIgEAPIAABiIAEAPgADKGIIgihxIgHgPIAtAAIgCAPIAPA5IABAGIABgGIAQg5IgCgPIAqAAIgGAPIgkBxgAsZgHIgVAKIADgUIABgCIAAgBIgCgDIgDgDIgHgIIgFgFIAXgDIAKgYIAKAYIAYADIAAACIgQAPIgBACIAAABIABACIADAUgAr7glIABAAIgBgBgAtoi6IgfASIAGgiIABgBIAAgDIgBgCIgYgZIAigFIAPgiIAPAiIAiAFIgBACIgUAWIgCABIgBACIgBADIABABIAGAigAp+juIgGgFIgPAIIACgPIABgBIAAgBIgBAAIgBgBIgCgDIgGgGIgCgDIAQgDIAIgPIAHAPIAPADIAAABIgLAMIgBAAIAAABIABABIACAPgAqLjwIAAAAIAAgBgAqGkVIABgBIgBAAgAvCkHIgOAJIADgPIAAgEIgBgBIgFgEIgDgEIgDgDIARgCIADgIIADgIIAIAQIAQACIgLAMIAAAAIAAAEIACAPgAxvlOIgVANIADgXIABgBIAAgCIgBgBIgBgCIgDgDIgLgMIAWgEIAKgWIAMAWIAWAEIgRASIAAACIABABIAEAXgAyNlsIABgBIgBAAg");
	this.shape_3.setTransform(0,-2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(19.4,0.0861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hamptonLogo, new cjs.Rectangle(-116.9,-41.2,233.9,82.5), null);


(lib.ctaBtn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ctaBtn();
	this.instance.setTransform(-64.8,-18.75,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-64.8,-18.7,129.7,37.5), null);


// stage content:
(lib.BELO_HamptonVA_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [335];
	// timeline functions:
	this.frame_335 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(335).call(this.frame_335).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(336));

	// cta_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AjjOBIUPAAIAAF4I0PAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:106.8127,y:127.2579}).wait(324));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/TIg");
	this.shape_1.setTransform(63.95,204.45);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zIIEyDRIs/THg");
	this.shape_2.setTransform(64.35,204.5);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/THg");
	this.shape_3.setTransform(65.55,204.65);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zIIEyDRIs/TIg");
	this.shape_4.setTransform(104.55,209.65);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).wait(230).to({_off:true},1).wait(2).to({_off:false,x:67.6,y:204.9},0).to({_off:true},1).wait(7).to({_off:false,x:113.05,y:210.75},0).to({_off:true},1).wait(3).to({_off:false,x:155.25,y:216.15},0).to({_off:true},1).wait(2).to({_off:false,x:190.35,y:220.65},0).to({_off:true},1).wait(2).to({_off:false,x:218.35,y:224.25},0).wait(1).to({x:226.1,y:225.25},0).to({_off:true},1).wait(2).to({_off:false,x:244.35,y:227.6},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(243).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:70.45,y:205.3},0).wait(1).to({x:74.1,y:205.75},0).wait(1).to({x:78.55,y:206.3},0).to({_off:true},1).wait(2).to({_off:false,x:96.8,y:208.65},0).to({_off:true},1).wait(7).to({_off:false,x:179.4,y:219.25},0).to({_off:true},1).wait(5).to({_off:false,x:232.95,y:226.1},0).wait(1).to({x:239.05,y:226.9},0).to({_off:true},1).wait(4).to({_off:false,x:257.35,y:229.25},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(244).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:83.85,y:207},0).wait(1).to({x:89.9,y:207.8},0).to({_off:true},1).wait(3).to({_off:false,x:122.4,y:211.95},0).to({_off:true},1).wait(1).to({_off:false,x:143.5,y:214.65},0).to({_off:true},1).wait(4).to({_off:false,x:200.5,y:221.95},0).to({_off:true},1).wait(6).to({_off:false,x:248.8,y:228.15},0).wait(1).to({x:252.45,y:228.6},0).to({_off:true},1).wait(2).to({_off:false,x:258.55,y:229.4},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(252).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:132.55,y:213.25},0).to({_off:true},1).wait(2).to({_off:false,x:167.65,y:217.75},0).to({_off:true},1).wait(3).to({_off:false,x:209.85,y:223.15},0).to({_off:true},1).wait(7).to({_off:false,x:255.3,y:229},0).to({_off:true},1).wait(2).to({_off:false,x:258.95,y:229.45},0).wait(63));

	// ctaBtn
	this.instance = new lib.ctaBtn_1();
	this.instance.setTransform(148.8,273.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:232.25},8,cjs.Ease.quadOut).to({y:235.75},4).wait(324));

	// txt_yourEvent
	this.instance_1 = new lib.txt_yourEvent();
	this.instance_1.setTransform(91.6,74.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({y:60.35,alpha:1},13,cjs.Ease.quadOut).wait(99));

	// txt_inspired
	this.instance_2 = new lib.txt_inspired();
	this.instance_2.setTransform(229.6,74.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({y:60.35,alpha:1},13,cjs.Ease.quadOut).wait(95));

	// hampton_logo (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:142.5497,y:118.0265}).wait(99));

	// Layer_36
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zIIEyDRIs/THg");
	this.shape_5.setTransform(-2.0699,71.4656,1.2512,1.2512);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.1,-13,19.2,13).s().p("ArHJ8IQR38IF+EFIwQX8g");
	this.shape_6.setTransform(-1.45,71.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.1,-13.1,19.2,13).s().p("ArIJ9IQS3+IF/EFIwSX+g");
	this.shape_7.setTransform(0.425,72.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.3,13.1).s().p("ArKJ+IQV4BIGAEGIwVYBg");
	this.shape_8.setTransform(3.575,73.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.3,-13.1,19.3,13.1).s().p("ArNKAIQZ4FIGCEHIwaYEg");
	this.shape_9.setTransform(8,74.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.4,-13.2,19.4,13.1).s().p("ArRKCIQe4KIGEEHIweYKg");
	this.shape_10.setTransform(13.65,75.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.5,-13.2,19.5,13.2).s().p("ArVKFIQk4RIGHEIIwlYRg");
	this.shape_11.setTransform(20.575,77.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.6,-13.3,19.7,13.3).s().p("AraKIIQs4ZIGJEKIwsYZg");
	this.shape_12.setTransform(28.725,80.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-13.3,19.8,13.4).s().p("ArfKMIQ04iIGLEMIwzYhg");
	this.shape_13.setTransform(38.15,83.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-20,-13.4,20,13.4).s().p("ArmKQIQ+4sIGPENIw+Ysg");
	this.shape_14.setTransform(48.825,86.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-20.2,-13.6,20.2,13.5).s().p("AruKVIRJ44IGUEPIxJY4g");
	this.shape_15.setTransform(60.775,89.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-20.4,-13.7,20.4,13.6).s().p("Ar2KbIRV5GIGYESIxVZEg");
	this.shape_16.setTransform(73.975,93.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-20.6,-13.8,20.7,13.7).s().p("Ar/KgIRi5TIGdEUIxiZTg");
	this.shape_17.setTransform(88.425,97.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-20.9,-13.9,20.9,13.9).s().p("AsJKnIRx5jIGhEXIxvZig");
	this.shape_18.setTransform(104.15,102.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-21.2,-14.1,21.2,14).s().p("AsTKtIR/5yIGoEZIx/Zyg");
	this.shape_19.setTransform(121.125,106.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-21.5,-14.2,21.5,14.2).s().p("AsfK1ISR6EIGuEcIyQaDg");
	this.shape_20.setTransform(139.35,112.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-21.8,-14.3,21.8,14.3).s().p("AsqK8ISh6WIG0EfIyhaWg");
	this.shape_21.setTransform(158.525,117.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-22.1,-14.5,22.1,14.5).s().p("As2LDISz6nIG6EiIyzang");
	this.shape_22.setTransform(176.75,122.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-22.4,-14.7,22.4,14.5).s().p("AtALKITB64IHAElIzBa4g");
	this.shape_23.setTransform(193.725,127.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-22.7,-14.8,22.6,14.7).s().p("AtKLQITQ7HIHFEoIzQbHg");
	this.shape_24.setTransform(209.425,132.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23,-14.9,22.8,14.8).s().p("AtTLWITc7VIHLEqIzdbVg");
	this.shape_25.setTransform(223.9,136.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.2,-15,23.1,14.9).s().p("AtbLbITo7iIHPEtIzobig");
	this.shape_26.setTransform(237.1,140.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.4,-15.1,23.3,15.1).s().p("AtjLgIT07tIHSEuIzzbtg");
	this.shape_27.setTransform(249.05,143.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.5,-15.2,23.5,15.1).s().p("AtpLkIT973IHWEvIz9b4g");
	this.shape_28.setTransform(259.7,146.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.7,-15.3,23.6,15.2).s().p("AtvLoIUF8BIHaEyI0FcBg");
	this.shape_29.setTransform(269.15,149.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.9,-15.3,23.7,15.3).s().p("At0LsIUN8JIHcEzI0NcIg");
	this.shape_30.setTransform(277.3,151.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-23.9,-15.4,23.9,15.4).s().p("At4LuIUT8PIHeE0I0TcPg");
	this.shape_31.setTransform(284.225,153.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-24,-15.5,24,15.3).s().p("At8LwIUZ8UIHgE0I0YcWg");
	this.shape_32.setTransform(289.875,155.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-24.2,-15.5,24,15.4).s().p("At/LyIUd8ZIHiE2I0dcZg");
	this.shape_33.setTransform(294.3,156.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-24.2,-15.5,24.1,15.5).s().p("AuALzIUf8cIHiE3I0fccg");
	this.shape_34.setTransform(297.45,157.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-24.2,-15.6,24.1,15.4).s().p("AuCL0IUh8eIHkE3I0hceg");
	this.shape_35.setTransform(299.325,158.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/TIg");
	this.shape_36.setTransform(299.9585,158.45,1.58,1.4892);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},242).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(63));

	// hampton_logo
	this.instance_3 = new lib.hamptonLogo();
	this.instance_3.setTransform(142.55,118);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(237).to({_off:false},0).to({alpha:1},15).wait(84));

	// white_BG
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_37.setTransform(150.05,121.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.859)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_38.setTransform(150.05,121.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.714)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_39.setTransform(150.05,121.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.573)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_40.setTransform(150.05,121.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.427)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_41.setTransform(150.05,121.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.286)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_42.setTransform(150.05,121.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.141)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_43.setTransform(150.05,121.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_44.setTransform(150.05,121.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(226,233,237,0.141)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_45.setTransform(150.05,121.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(197,211,218,0.286)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_46.setTransform(150.05,121.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(168,189,200,0.427)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_47.setTransform(150.05,121.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(138,166,181,0.573)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_48.setTransform(150.05,121.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(109,144,163,0.714)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_49.setTransform(150.05,121.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(80,122,144,0.859)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_50.setTransform(150.05,121.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33647E").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_51.setTransform(150.05,121.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},147).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},63).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(112));

	// txt_ConventionsWht
	this.instance_4 = new lib.txt_ConventionsWht();
	this.instance_4.setTransform(151.05,7.05);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).wait(189));

	// txt_exhibitions
	this.instance_5 = new lib.txt_Exibitions();
	this.instance_5.setTransform(-162.9,54.15,0.9742,0.9742,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).to({x:151.1},16,cjs.Ease.quadInOut).wait(173));

	// txt_HamptonRoads
	this.instance_6 = new lib.txt_HamptonRoads();
	this.instance_6.setTransform(-164,76.05,1.0267,1.0267);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(148).to({_off:false},0).to({x:150},16,cjs.Ease.quadInOut).wait(172));

	// image_03
	this.instance_7 = new lib.image_03_1();
	this.instance_7.setTransform(151,125,1,1,0,0,0,151,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({_off:false},0).to({regX:150.9,scaleX:1.128,scaleY:1.128,x:150.9},84).wait(105));

	// txt_Coliseum_Wht
	this.instance_8 = new lib.txt_AColiseumWht();
	this.instance_8.setTransform(154.75,7.55);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72).to({_off:false},0).wait(264));

	// txt_yourBigEvent
	this.instance_9 = new lib.txt_YourBigEvent();
	this.instance_9.setTransform(-153,58.05);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).to({x:153},16,cjs.Ease.quadInOut).wait(248));

	// txt_hamptonColiseum
	this.instance_10 = new lib.txt_HamptonColiseum();
	this.instance_10.setTransform(-160,77.05);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({_off:false},0).to({x:146},16,cjs.Ease.quadInOut).wait(247));

	// white_BG
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_52.setTransform(150.05,121.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.859)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_53.setTransform(150.05,121.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.714)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_54.setTransform(150.05,121.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.573)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_55.setTransform(150.05,121.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.427)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_56.setTransform(150.05,121.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.286)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_57.setTransform(150.05,121.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.141)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_58.setTransform(150.05,121.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_59.setTransform(150.05,121.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52}]},72).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},61).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).wait(189));

	// image_02
	this.instance_11 = new lib.image_02_1();
	this.instance_11.setTransform(148.95,125,1.16,1.16);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1},82).wait(182));

	// txt_tournament_White
	this.instance_12 = new lib.txt_tournamentWht();
	this.instance_12.setTransform(152.5,9.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(336));

	// txt_forMultiple
	this.instance_13 = new lib.txt_forMultiple();
	this.instance_13.setTransform(-157.5,58.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:152.5,alpha:1},14,cjs.Ease.quadInOut).wait(322));

	// txt_booWilliams
	this.instance_14 = new lib.txt_booWilliams();
	this.instance_14.setTransform(-158.7,76.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({x:151.3,alpha:1},14,cjs.Ease.quadInOut).wait(321));

	// white_BG
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_60.setTransform(150.05,121.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.875)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_61.setTransform(150.05,121.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.749)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_62.setTransform(150.05,121.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.624)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_63.setTransform(150.05,121.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.502)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_64.setTransform(150.05,121.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.376)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_65.setTransform(150.05,121.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.251)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_66.setTransform(150.05,121.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.125)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_67.setTransform(150.05,121.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_68.setTransform(150.05,121.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.141)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_69.setTransform(150.05,121.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.286)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_70.setTransform(150.05,121.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.427)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_71.setTransform(150.05,121.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.573)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_72.setTransform(150.05,121.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.714)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_73.setTransform(150.05,121.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.859)").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_74.setTransform(150.05,121.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},59).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_60}]},1).wait(262));

	// image_01
	this.instance_15 = new lib.image_01_1();
	this.instance_15.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.184,scaleY:1.184},82).wait(254));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-211.4,101.6,560,190.9);
// library properties:
lib.properties = {
	id: '3572E287AFEF4441B6AC3A271EED90D7',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ctaBtn.png", id:"ctaBtn"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"}
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
an.compositions['3572E287AFEF4441B6AC3A271EED90D7'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;