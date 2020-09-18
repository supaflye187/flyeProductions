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
	this.shape.graphics.f("#FFFFFF").s().p("AcKEdIgriDIAth4Ig4AAIgUBDIgShDIg6AAIAqB+IgtB9IgJAAIAAguIg4AAIAAg5IAlAAIAAgxIglAAIAAg2IA4AAIAAgtIhyAAIAAD7IgRAAIAAgvIg5AAIAAjMIg6AAIAAD7IhfAAIAAhZIAQAAQAYAAAPgLQATgNgBgWIAAhGQABgWgTgNQgPgLgYAAIhJAAIAAD7IgXAAIAAj7IhUAAIgYBzIgZhzIhSAAIAAD7Ig6AAQAJgFAIgGQAVgSgBgUIAAiWQABgVgVgRQgVgSgdAAQgeAAgUASQgVARAAAVIAACWQAAAUAVASQAIAGAJAFIhYAAQAIgEAIgGQASgQABgUIAAgxIg6AAIAAApQAAALgMAAQgNAAAAgLIAAiNQAAgLANAAQAMAAAAALIAAApIA6AAIAAgxQgBgUgSgQQgVgQgeAAQgfAAgVAQQgUAQAAAUIAACdQAAAUAUAQQAHAGAJAEIiRAAIAAjOIAmAAIAAgtIiIAAIAAAtIAoAAIAADOIg6AAIAAj7Ig0AAIAAB8Igsh8Ig0AAIAAD7IgTAAIAAguIg5AAIAAg5IAmAAIAAgxIgmAAIAAg2IA5AAIAAgtIhyAAIAAD7IgXAAIAAj7IhUAAIgYBzIgZhzIhRAAIAAD7IgMAAIgnj7IhFAAIgmD7IgLAAIAAj7Ig0AAIAAB8Igsh8Ig1AAIAAD7IgOAAQgGgYAAgQIAAgzQAAgTgZgKQAXgLAAgSIAAg4QAAgWgRgNQgQgLgYAAIhRAAIAAD7Ig4AAQAJgEAHgGQATgQAAgUIAAjNIg4AAIAADFQAAALgMAAQgMAAAAgLIAAjFIg6AAIAADNQgBAUAVAQQAHAGAJAEIhfAAQAKgFAIgGQAUgSAAgUIAAiWQAAgVgUgRQgWgSgcAAQgeAAgUASQgVARAAAVIAACWQAAAUAVASQAHAGAKAFIhcAAIAAjOIAnAAIAAgtIiJAAIAAAtIAoAAIAADOIhlAAIgoj7IhFAAIgmD7IwiAAIAAo5MBHHAAAIAAI5gAapEdIAVhBIASBBgARlEdIAkifIAACfgAQgEdIAAifIAfCfgAFrEdIAAh4IAuB4gAA+EdIAkifIAACfgAgGEdIAAifIAeCfgAikEdIADgjIAcAAIADAjgAlEEdIAAh4IAuB4gAndEdIAAhjIAOAAQAMAAAAAKIAAA0QAAAUAGARgAyOEdIAFgjIAcAAIACAjgAOFDnIAAiNQgBgLANAAQAMAAAAALIAACNQAAALgMAAQgNAAABgLgAsfDnIAAiNQAAgLANAAQAMAAAAALIAACNQAAALgMAAQgNAAAAgLgAiaDIIAKhQIAHBQgAyDDIIAKhQIAGBQgAUTCUIAAhCIAJAAQAKAAAAAKIAAAuQAAAKgKAAgAndCNIAAg7IAOAAQALAAAAAKIAAAnQAAALgLgBg");
	this.shape.setTransform(-33.35,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tournamentWht, new cjs.Rectangle(-260.9,-28.5,455.2,57), null);


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
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-300,-250,600,500), null);


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
	this.instance.setTransform(-231,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-231,-65,463,134), null);


// stage content:
(lib.BELO_HamptonVA_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(336));

	// ctaBtnMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_263 = new cjs.Graphics().p("Ad8iAIZnAAIAAHaI5nAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(263).to({graphics:mask_graphics_263,x:355.4705,y:34.5575}).wait(73));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zIIEyDRIs/TIg");
	this.shape_1.setTransform(515.95,14.45);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zIIEyDRIs/THg");
	this.shape_2.setTransform(516.4,14.6);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/TIg");
	this.shape_3.setTransform(517.75,15);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/THg");
	this.shape_4.setTransform(520.05,15.65);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(263).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:523.25,y:16.6},0).to({_off:true},1).wait(1).to({_off:false,x:532.35,y:19.3},0).wait(1).to({x:538.3,y:21.1},0).to({_off:true},1).wait(5).to({_off:false,x:593,y:37.3},0).to({_off:true},1).wait(2).to({_off:false,x:632.4,y:49},0).to({_off:true},1).wait(11).to({_off:false,x:730.85,y:78.25},0).to({_off:true},1).wait(2).to({_off:false,x:734.95,y:79.45},0).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(264).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:527.35,y:17.85},0).to({_off:true},1).wait(3).to({_off:false,x:552.85,y:25.4},0).wait(1).to({x:561.55,y:28},0).wait(1).to({x:571.1,y:30.8},0).wait(1).to({x:581.6,y:33.95},0).to({_off:true},1).wait(4).to({_off:false,x:645.6,y:52.95},0).to({_off:true},1).wait(1).to({_off:false,x:669.3,y:59.95},0).wait(1).to({x:679.8,y:63.1},0).wait(1).to({x:689.35,y:65.9},0).wait(1).to({x:698.05,y:68.5},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(265).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:545.1,y:23.1},0).to({_off:true},1).wait(9).to({_off:false,x:657.9,y:56.6},0).to({_off:true},1).wait(4).to({_off:false,x:705.8,y:70.8},0).to({_off:true},1).wait(1).to({_off:false,x:718.55,y:74.6},0).to({_off:true},1).wait(3).to({_off:false,x:733.15,y:78.9},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(266).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,x:605.3,y:40.95},0).wait(1).to({x:618.5,y:44.9},0).to({_off:true},1).wait(8).to({_off:false,x:712.6,y:72.8},0).to({_off:true},1).wait(1).to({_off:false,x:723.55,y:76.05},0).wait(1).to({x:727.65,y:77.3},0).to({_off:true},1).wait(2).to({_off:false,x:734.5,y:79.3},0).to({_off:true},1).wait(42));

	// ctaBtn
	this.instance = new lib.ctaBtn_1();
	this.instance.setTransform(827.85,44.7,0.3539,0.3539);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:625.85},10,cjs.Ease.quadOut).to({x:628.85},4).wait(322));

	// txt_yourEvent
	this.instance_1 = new lib.txt_yourEvent();
	this.instance_1.setTransform(91.6,44.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadInOut).wait(99));

	// txt_inspired
	this.instance_2 = new lib.txt_inspired();
	this.instance_2.setTransform(229.6,44.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadInOut).wait(95));

	// hampton_logo (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("Al7E3IAAgBQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBIAAAAQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABAAIAAAAIACAAQBOAcBOg0IAAAAIBGgxIAAAAQArgdAjgFIAAAAQAlgGAkATIAAAAQAqATAyAzIAAAAIACAFQACAGgRgGIAAAAQhDgZgsAAIAAAAQgkAAg1AWIAAAAIhpAuIAAAAQgbALgeAAIAAAAQgtAAg1gagAuIEWIgDgEQgEgFAHgCIAAAAIACAAQA/AXBggeIAAAAQBOgZAqgHIAAAAQBGgNBTAtIAAAAIADAEQADADgGADIAAAAIgDAAQgvgOg3AHIAAAAQgoAFg8ATIAAAAQg/AUgvABIAAAAQg7gBg8gdgAOXEwIABgMIgCgJIgBgCIgZAAIgBACIgCAJIABAMIgiAAIAGgMIAVhTIgDgKIAzAAIgCAKIAVBTIAGAMgAOBECIABABIANAAIABgBIgHghIgBgFgAMVEwIAEgMIAAhRIgEgMIAlAAIgEAMIAABRIAEAMgALUEwIghg4IgEgIIABAIIAAAsIAEAMIggAAIADgMIAAhRIgEgMIAgAAIAaAsIADAIIgBgIIAAggIgEgMIAgAAIgDAMIAABdgAJEEwIAEgMIAAhRIgEgMIAlAAIgEAMIAABRIAEAMgAHfEwIgTgUIAAhAIAVgVIAvAAIALAfIgSgHIgTAAIgIAFIgEAIIAAAiIADAGIAGADIAJAAIAFgFIAAgQIgHgOIAoAAIgGAKIAAAXIABAHIgTAUgAGGEwIgKgiIgEgCIgIAAIgBACIAAAWIADAMIgjAAIAEgMIAAhRIgEgMIBBAAIATATIAAAdIgNAOIAKAcIAIAPgAFvDgIAAATIABABIANAAIAGgDIACgFIAAgEIgCgGIgGgDIgNAAgAEAEwIAEgMIAAhRIgEgMIAkAAIgEAMIAABRIAEAMgAClEwIgchdIgFgMIAkAAIgBAMIAMAvIABAFIABgFIANgvIgCgMIAjAAIgGAMIgdBdgAlOEdQgbgDgvgTIAAAAQgRgGgmgTIAAAAQgigQgUgIIAAAAQhXghhrArIAAAAIgcANQgEABgCgEIAAAAQgCgDACgCIAAAAIABgBQBEgoBAgKIAAAAQANgDAbgBIAAAAIABAAQAfAAAiAJIAAAAQAXAGApAPIAAAAQBCAZAiAJIAAAAQBBAQBPggIAAAAIALgEIABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIAAAAQABAAAAABQAAAAAAABQABABgBAAQAAABAAAAIAAAAIgBADQgoAfgeAOIAAAAQggAOggAAIAAAAIgSgBgAOPCgIhnhkQgEgEgDACIAAAAQgDABAAAEIAAAAIAABaQAAAEgEAAIAAAAIgqAAQgEAAAAgEIAAAAIAAjCQAAgEAHgCIAAAAQAHgCAFAFIAAAAIBqBjQAEACAAgFIAAAAIAAhbQAAgEAEAAIAAAAIAqAAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIAAAAIAADCQAAAGgHABIAAAAIgCABIAAAAQgEAAgDgDgAIJCDQgggdAAgsIAAAAQAAgsAggdIAAAAQAfgcAsAAIAAAAQAsAAAfAcIAAAAQAgAdAAAsIAAAAQAAAsggAdIAAAAQgfAdgsAAIAAAAQgsAAgfgdgAIuASQgOAPAAAZIAAAAQAAAYAOAPIAAAAQAOAQAYAAIAAAAQAYAAAPgQIAAAAQANgPAAgYIAAAAQAAgZgNgPIAAAAQgPgQgYAAIAAAAQgYAAgOAQgAFvCdQgBAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAAAIAAiUQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAAAIgyAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAAAIAAgmQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAAAAICkAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAAAIAAAmQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIAAAAIg2AAQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIAAAAIAACUQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIAAAAgACACdQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAAAIAAjFQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAAAAIBJAAQAoAAAWAVIAAAAQAWATAAAhIAAAAQAAAigWAWIAAAAQgXAWgnAAIAAAAIgUAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAAIAAAuQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIAAAAgACzgCIAAA8QAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAAAAIARAAQAgAAAAghIAAAAQAAggggAAIAAAAIgRAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAgAATCdQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIAChLIgCgDIAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAAAIgtAtQgEAGgHgGIAAAAIgnguQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIAAAAIgBADIAAAAIgCBMQAAABAAAAQAAABAAAAQgBABgBAAQAAAAgBAAIAAAAIgxAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAAAIACjDQACgIAIABIAAAAQAGABACACIAAAAIBUBjQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAIAAAAIBThhQADgDAGgBIAAAAQAIgCADAIIAAAAIgBDDQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIAAAAgAjpCdQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIgHgNQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAAAIhFAAQgFAAAAACIAAAAIgGANIgCACIguAAQgBAAgBAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAAAIBYjGQABgCAIAAIAAAAQAHAAACACIAAAAIBXDGQACAEgEAAIAAAAgAkbA7IgPAlQgBABAAABQAAABABAAQAAAAAAABQABAAABAAIAAAAIAgAAQAEAAgBgEIAAAAIgRglIgDgBIAAAAIgCABgAnWCdQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIAAg2QAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIAAAAIhEAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAAAIAAA2QAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIAAAAIgwAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAAAIAAjAQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAIAwAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAAIAABZQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIBEAAIACgCIAAhZQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAAAAIAwAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAAAAIAADAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIAAAAgAqIgXIgRAKIACgSIABgBIAAgBIgBgDIgDgCIgGgHIgEgEIATgCIAIgTIAJATIATACIAAACIgNAMIgBACIAAABIABABIACASgApwgvIABAAIgBgBgAnGhUIARgNQAIAKALAAIAAAAQAMAAAAgIIAAAAQAAgEgJgEIAAAAIgLgDQgXgHAAgVIAAAAQAAgMAKgIIAAAAQAIgHANAAIAAAAQAVAAAJANIAAAAIgNAOQgGgGgJAAIAAAAQgJAAAAAGIAAAAQAAAEAGADIAAAAIANAEQAYAIAAATIAAAAQAAAdgjAAIAAAAQgZAAgMgRgAo2hEIgrhbIAaAAIASAqIASgqIAZAAIgrBbIgBABIAAAAIAAgBgAkehFIAAhGIgYAAIAAgUIBJAAIAAAUIgYAAIAABGgAlnhFIAAhaIAZAAIAABagAn0hFIAAhaIAYAAIAABagArIipIgZAPIAEgbIABgCIAAgCIgBgCIgTgUIAbgEIANgcIAMAcIAcAEIgBACIgRARIgBABIgBACIAAACIAAACIAFAbgAoJjTIgGgEIgLAHIABgNIABgBIAAgBIgBAAIgBgBIgBgCIgFgEIgBgDIAMgCIAGgNIAHANIAMACIAAABIgJAJIgBAAIAAABIABABIACANgAoUjVIABAAIAAgBgAoQjzIABgBIgBAAgAsSjnIgLAHIACgNIAAgDIgBgBIgEgDIgCgDIgCgCIANgCIADgGIACgHIAHANIANACIgJAJIgBAAIAAADIADANgAufkhIgRAKIACgTIABAAIAAgCIgBgBIAAgBIgDgDIgKgKIATgDIAIgSIAKASIASADIgOAPIAAACIABAAIACATgAu3k6IAAgBIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:396.6998,y:39.8713}).wait(99));

	// Layer_36
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.1,-13,19.2,13).s().p("ArHJ8IQQ37IF/EFIwQX6g");
	this.shape_5.setTransform(257.925,21.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.1,-13,19.2,13).s().p("ArHJ8IQQ38IF/EFIwQX8g");
	this.shape_6.setTransform(258.475,21.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.1,13).s().p("ArHJ8IQR37IF+EFIwRX6g");
	this.shape_7.setTransform(260.15,21.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.1,-13,19.2,13).s().p("ArHJ7IQR36IF+EFIwQX6g");
	this.shape_8.setTransform(262.925,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.1,13).s().p("ArIJ7IQR35IGAEEIwSX6g");
	this.shape_9.setTransform(266.85,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.2,13).s().p("ArIJ7IQS35IF/EFIwSX4g");
	this.shape_10.setTransform(271.85,24.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.2,13).s().p("ArJJ6IQT33IGAEEIwTX3g");
	this.shape_11.setTransform(285.2,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.3,12.9).s().p("ArKJ5IQV31IGAEEIwUX1g");
	this.shape_12.setTransform(293.525,28.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.3,-13,19.2,12.9).s().p("ArKJ5IQV30IGBEDIwWX0g");
	this.shape_13.setTransform(303,30.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.2,-13,19.3,12.9).s().p("ArMJ4IQX3yIGCEDIwXXyg");
	this.shape_14.setTransform(313.575,33.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.3,-13,19.3,12.9).s().p("ArMJ4IQY3yIGBEEIwYXwg");
	this.shape_15.setTransform(325.25,35.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.4,-12.9,19.3,12.9).s().p("ArNJ2IQa3uIGBECIwZXvg");
	this.shape_16.setTransform(338.05,38.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.4,-12.9,19.3,12.9).s().p("ArPJ1IQc3sIGDECIwcXtg");
	this.shape_17.setTransform(351.975,41);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.4,-12.9,19.4,12.8).s().p("ArQJ1IQd3qIGEEBIweXrg");
	this.shape_18.setTransform(367,44.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.5,-12.9,19.4,12.8).s().p("ArSJ0IQg3oIGEECIwfXng");
	this.shape_19.setTransform(383.15,47.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.5,-12.8,19.4,12.8).s().p("ArTJzIQi3mIGFECIwiXkg");
	this.shape_20.setTransform(400.1,51);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.6,-12.8,19.4,12.8).s().p("ArUJyIQk3jIGFEBIwkXig");
	this.shape_21.setTransform(416.25,54.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.6,-12.8,19.5,12.7).s().p("ArWJxIQm3gIGHD/IwmXgg");
	this.shape_22.setTransform(431.275,57.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.6,-12.8,19.6,12.7).s().p("ArXJwIQo3eIGHEAIwnXdg");
	this.shape_23.setTransform(445.175,60.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.7,-12.8,19.5,12.7).s().p("ArYJuIQp3bIGID/IwpXcg");
	this.shape_24.setTransform(458,63.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.7,-12.7,19.6,12.7).s().p("ArZJuIQr3aIGID/IwrXag");
	this.shape_25.setTransform(469.65,65.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.7,-12.7,19.6,12.7).s().p("AraJtIQs3YIGJD/IwsXYg");
	this.shape_26.setTransform(480.25,67.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.7,-12.7,19.6,12.7).s().p("ArbJtIQt3XIGKD+IwtXXg");
	this.shape_27.setTransform(489.7,69.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.8,19.6,12.6).s().p("ArcJsIQu3VIGLD+IwuXVg");
	this.shape_28.setTransform(498.05,71.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.7,19.6,12.7).s().p("ArcJrIQv3UIGKD+IwvXVg");
	this.shape_29.setTransform(505.3,72.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.8,19.6,12.6).s().p("ArdJrIQw3TIGKD9IwvXUg");
	this.shape_30.setTransform(511.4,74.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.7,19.7,12.6).s().p("ArdJrIQw3TIGLD+IwwXTg");
	this.shape_31.setTransform(516.4,75.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.7,19.7,12.6).s().p("ArdJrIQw3TIGLD+IwxXTg");
	this.shape_32.setTransform(520.325,76);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.9,-12.7,19.6,12.6).s().p("AreJqIQx3RIGLD9IwxXSg");
	this.shape_33.setTransform(523.1,76.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-19.8,-12.7,19.7,12.6).s().p("AreJqIQy3RIGLD+IwyXRg");
	this.shape_34.setTransform(524.775,76.95);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},242).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:271.85,y:24.325}}]},1).to({state:[{t:this.shape_10,p:{x:277.95,y:25.625}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:524.775,y:76.95}}]},1).to({state:[{t:this.shape_34,p:{x:525.325,y:77.05}}]},1).wait(63));

	// hampton_logo
	this.instance_3 = new lib.hamptonLogo();
	this.instance_3.setTransform(396.8,39.95,0.8172,0.8172,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(237).to({_off:false},0).to({alpha:1},15).wait(84));

	// white_BG
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_35.setTransform(364,45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.831)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_36.setTransform(364,45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.667)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_37.setTransform(364,45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.502)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_38.setTransform(364,45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.333)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_39.setTransform(364,45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.169)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_40.setTransform(364,45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_41.setTransform(364,45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(226,233,237,0.141)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_42.setTransform(364,45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(197,211,218,0.286)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_43.setTransform(364,45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(168,189,200,0.427)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_44.setTransform(364,45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(138,166,181,0.573)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_45.setTransform(364,45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(109,144,163,0.714)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_46.setTransform(364,45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(80,122,144,0.859)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_47.setTransform(364,45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33647E").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_48.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},147).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},64).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(112));

	// image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_147 = new cjs.Graphics().p("A0QYsMAAAgxXMAohAAAMAAAAxXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_2_graphics_147,x:399.425,y:58.05}).wait(189));

	// image_03
	this.instance_4 = new lib.image_03_1();
	this.instance_4.setTransform(397.5,50,0.896,0.896,0,0,0,150.9,125);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).to({regX:151,regY:124.9,scaleX:0.9499,scaleY:0.9499,x:395.95,y:45.9},84).wait(105));

	// txt_ConventionsWht
	this.instance_5 = new lib.txt_ConventionsWht();
	this.instance_5.setTransform(141.3,19.8,0.8124,0.8124,0,0,0,0.2,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).wait(189));

	// txt_exhibitions
	this.instance_6 = new lib.txt_Exibitions();
	this.instance_6.setTransform(-121.75,59.55,0.8521,0.8521,0,0,0,0.4,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(147).to({_off:false},0).to({x:138.25},16,cjs.Ease.quadInOut).wait(173));

	// txt_HamptonRoads
	this.instance_7 = new lib.txt_HamptonRoads();
	this.instance_7.setTransform(-122.55,72.25,0.7483,0.7483,0,0,0,1.4,0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({x:137.45},16,cjs.Ease.quadInOut).wait(171));

	// background_image
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#33647E").s().p("AcOI1IAAxpMAi2AAAIAARpgEg/DAG9IAAuJMBB4AAAIAAOJg");
	this.shape_49.setTransform(334.6,45.55);
	this.shape_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(147).to({_off:false},0).wait(189));

	// white_BG
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_50.setTransform(364,45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.831)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_51.setTransform(364,45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.667)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_52.setTransform(364,45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.502)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_53.setTransform(364,45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.333)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_54.setTransform(364,45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.169)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_55.setTransform(364,45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_56.setTransform(364,45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.2)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_57.setTransform(364,45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.4)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_58.setTransform(364,45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.6)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_59.setTransform(364,45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.8)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_60.setTransform(364,45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A5oVuMAAAgrbMAzRAAAMAAAArbg");
	this.shape_61.setTransform(363.9872,45.0239,2.2188,0.3237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50}]},72).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},64).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(189));

	// image_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_72 = new cjs.Graphics().p("A0QYsMAAAgxXMAohAAAMAAAAxXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_3_graphics_72,x:399.425,y:58.05}).wait(264));

	// image_02
	this.instance_8 = new lib.image_02_1();
	this.instance_8.setTransform(406.95,37,1.0237,1.0237);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72).to({_off:false},0).to({scaleX:0.9196,scaleY:0.9196},82).wait(182));

	// txt_Coliseum_Wht
	this.instance_9 = new lib.txt_AColiseumWht();
	this.instance_9.setTransform(143.45,19.15,0.8372,0.8372,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).wait(264));

	// txt_yourBigEvent
	this.instance_10 = new lib.txt_YourBigEvent();
	this.instance_10.setTransform(-127.2,59.1,0.858,0.858,0,0,0,3,-2.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({x:140.8},16,cjs.Ease.quadInOut).wait(248));

	// txt_hamptonColiseum
	this.instance_11 = new lib.txt_HamptonColiseum();
	this.instance_11.setTransform(-127.15,71.9,0.7862,0.7862,0,0,0,4.8,-0.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).to({x:140.85},16,cjs.Ease.quadInOut).wait(246));

	// background_image
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#33647E").s().p("AcOI1IAAxpMAi2AAAIAARpgEg/DAG9IAAuJMBB4AAAIAAOJg");
	this.shape_62.setTransform(334.6,45.55);
	this.shape_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(72).to({_off:false},0).wait(264));

	// white_BG
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_63.setTransform(364,45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.831)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_64.setTransform(364,45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.667)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_65.setTransform(364,45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.502)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_66.setTransform(364,45);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.333)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_67.setTransform(364,45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.169)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_68.setTransform(364,45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_69.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},64).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).wait(260));

	// image_mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("A0QYsMAAAgxXMAohAAAMAAAAxXg");
	mask_4.setTransform(399.425,58.05);

	// image_01
	this.instance_12 = new lib.image_01_1();
	this.instance_12.setTransform(392.3,48.2,0.4858,0.4858,0,0,0,0.3,0.2);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.1,regY:0.1,scaleX:0.5737,scaleY:0.5737,x:358.2,y:48.15},82).wait(254));

	// txt_tournament_White
	this.instance_13 = new lib.txt_tournamentWht();
	this.instance_13.setTransform(138.65,21.9,0.8136,0.8136,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(336));

	// txt_forMultiple
	this.instance_14 = new lib.txt_forMultiple();
	this.instance_14.setTransform(-109.3,61.3,0.728,0.728,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:138.7},17,cjs.Ease.quadInOut).wait(319));

	// txt_booWilliams
	this.instance_15 = new lib.txt_booWilliams();
	this.instance_15.setTransform(-110.3,75.25,0.7676,0.7676,0,0,0,0.2,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({x:137.7},17,cjs.Ease.quadInOut).wait(317));

	// background_image
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33647E").s().p("AcOI1IAAxpMAi2AAAIAARpgEg/DAG9IAAuJMBB4AAAIAAOJg");
	this.shape_70.setTransform(334.6,45.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(336));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(68.4,-50.3,841.6,241.8);
// library properties:
lib.properties = {
	id: '3572E287AFEF4441B6AC3A271EED90D7',
	width: 728,
	height: 90,
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