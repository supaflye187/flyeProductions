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
	this.shape.graphics.f("#FFFFFF").s().p("AWbEdIgriDIAth4Ig4AAIgVBDIgShDIg6AAIArB+IgtB9IgJAAIAAguIg5AAIAAg5IAmAAIAAgxIgmAAIAAg2IA5AAIAAgtIhyAAIAAD7IgSAAIAAgvIg4AAIAAjMIg7AAIAAD7IheAAIAAhZIAQAAQAYAAAPgLQASgNAAgWIAAhGQAAgWgSgNQgPgLgYAAIhKAAIAAD7IgWAAIAAj7IhUAAIgYBzIgahzIhSAAIAAD7Ig6AAQAJgFAIgGQAVgSAAgUIAAiWQAAgVgVgRQgVgSgcAAQgeAAgVASQgVARAAAVIAACWQAAAUAVASQAIAGAJAFIhYAAQAJgEAHgGQATgQAAgUIAAgxIg5AAIAAApQgBALgLAAQgNAAgBgLIAAiNQABgLANAAQALAAABALIAAApIA5AAIAAgxQAAgUgTgQQgVgQgdAAQgfAAgVAQQgUAQAAAUIAACdQAAAUAUAQQAHAGAJAEIiSAAIAAjOIAnAAIAAgtIiIAAIAAAtIAnAAIAADOIg5AAIAAj7Ig0AAIAAB8Igrh8Ig1AAIAAD7IgTAAIAAguIg4AAIAAg5IAmAAIAAgxIgmAAIAAg2IA4AAIAAgtIhyAAIAAD7IgWAAIAAj7IhUAAIgYBzIgahzIhRAAIAAD7IgMAAIgoj7IhEAAIgnD7IgLAAIAAj7Ig0AAIAAB8Igsh8Ig0AAIAAD7IgPAAQgGgYAAgQIAAgzQAAgTgYgKQAXgLgBgSIAAg4QAAgWgRgNQgPgLgYAAIhRAAIAAD7Ig4AAQAJgEAGgGQAUgQgBgUIAAjNIg4AAIAADFQABALgMAAQgMAAAAgLIAAjFIg7AAIAADNQAAAUAUAQQAHAGAJAEIheAAQAJgFAJgGQAUgSAAgUIAAiWQAAgVgUgRQgWgSgdAAQgdAAgVASQgVARAAAVIAACWQAAAUAVASQAIAGAJAFIhcAAIAAjOIAnAAIAAgtIiJAAIAAAtIApAAIAADOIhmAAIgoj7IhFAAIgmD7IwhAAIAAo5MBSmAAAIAAI5gAU6EdIAUhBIASBBgAL1EdIAkifIAACfgAKxEdIAAifIAeCfgAgDEdIAAh4IAtB4gAkxEdIAkifIAACfgAl1EdIAAifIAeCfgAoUEdIAEgjIAcAAIADAjgAq0EdIAAh4IAuB4gAtNEdIAAhjIAPAAQAMAAgBAKIAAA0QABAUAGARgA39EdIAEgjIAcAAIADAjgAIVDnIAAiNQAAgLANAAQALAAAAALIAACNQAAALgLAAQgNAAAAgLgAyODnIAAiNQAAgLAMAAQAMAAAAALIAACNQAAALgMAAQgMAAAAgLgAoKDIIAKhQIAHBQgA3zDIIAKhQIAHBQgAOkCUIAAhCIAJAAQAKAAAAAKIAAAuQAAAKgKAAgAtNCNIAAg7IAPAAQAKAAAAAKIAAAnQAAALgKgBg");
	this.shape.setTransform(3.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_tournamentWht, new cjs.Rectangle(-260.9,-28.5,528.7,57), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AARAmIgPgWIgCAAIgSAAIAAAWIgOAAIAAhLIAgAAQAOAAAJAHQAJAHAAANQAAARgRAGIASAZgAgSAFIARAAQASAAAAgPQAAgQgSAAIgRAAg");
	this.shape.setTransform(115.525,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA3AAIAAALIgpAAIAAAUIAlAAIAAAMIglAAIAAAUIArAAIAAAMg");
	this.shape_1.setTransform(107.775,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAmIAAhAIgaAAIAAgLIBBAAIAAALIgaAAIAABAg");
	this.shape_2.setTransform(100.575,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAmIgpgyIAAAyIgOAAIAAhLIALAAIAqAzIAAgzIAOAAIAABLg");
	this.shape_3.setTransform(92.8,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA3AAIAAALIgpAAIAAAUIAlAAIAAAMIglAAIAAAUIArAAIAAAMg");
	this.shape_4.setTransform(84.925,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAcQgMgLAAgRQAAgQAMgMQAMgLAQABQAUgBALANIgJAJQgJgJgMAAQgLAAgIAHQgIAIAAALQAAAMAIAHQAIAIALAAQAMAAAJgJIAJAIQgLAOgUAAQgQAAgMgMg");
	this.shape_5.setTransform(77.125,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXAmIgqgyIAAAyIgOAAIAAhLIAMAAIApAzIAAgzIAOAAIAABLg");
	this.shape_6.setTransform(65.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAcQgMgLAAgRQAAgQAMgMQAMgLARABQASgBALALQAMAMAAAQQAAARgMALQgLAMgSAAQgRAAgMgMgAgSgTQgJAIABALQgBAMAJAHQAHAIALAAQAMAAAHgIQAIgHAAgMQAAgLgIgIQgHgHgMAAQgLAAgHAHg");
	this.shape_7.setTransform(56.55,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAmIAAhLIANAAIAABLg");
	this.shape_8.setTransform(50.15,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAmIAAhAIgaAAIAAgLIBBAAIAAALIgaAAIAABAg");
	this.shape_9.setTransform(45.125,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWAmIgpgyIAAAyIgOAAIAAhLIALAAIAqAzIAAgzIAOAAIAABLg");
	this.shape_10.setTransform(37.35,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA3AAIAAALIgpAAIAAAUIAlAAIAAAMIglAAIAAAUIArAAIAAAMg");
	this.shape_11.setTransform(29.475,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAmIgihLIAQAAIAZA6IAag6IANAAIghBLg");
	this.shape_12.setTransform(21.55,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAmIgqgyIAAAyIgOAAIAAhLIAMAAIApAzIAAgzIAOAAIAABLg");
	this.shape_13.setTransform(13.1,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAcQgLgLAAgRQAAgQALgMQAMgLARABQARgBANALQAMAMgBAQQABARgMALQgNAMgRAAQgRAAgMgMgAgTgTQgHAIgBALQABAMAHAHQAIAIALAAQAMAAAHgIQAIgHAAgMQAAgLgIgIQgHgHgMAAQgLAAgIAHg");
	this.shape_14.setTransform(4.05,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAcQgMgLAAgRQAAgQAMgMQAMgLAQABQAUgBALANIgJAJQgJgJgMAAQgLAAgIAHQgIAIAAALQAAAMAIAHQAIAIALAAQAMAAAJgJIAJAIQgLAOgUAAQgQAAgMgMg");
	this.shape_15.setTransform(-4.475,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAlQgIgCgFgEIAFgMQALAJAOgBQAQABAAgLQAAgFgHgDIgOgEQgLgDgFgDQgHgFAAgKQAAgJAHgHQAJgGAOAAQAPAAAKAGIgEAMQgKgHgLAAQgQAAAAAKQAAAGAHADIAPAFQAKACAFADQAIAFAAAKQAAAKgIAGQgIAHgPAAQgJAAgIgDg");
	this.shape_16.setTransform(-14.975,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglAmIAAhLIAiAAQASAAALAKQAMAKAAARQAAARgMALQgLALgSgBgAgXAaIATAAQAMAAAIgHQAHgHAAgMQAAgLgHgHQgIgIgMAAIgTAAg");
	this.shape_17.setTransform(-22.675,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAbAmIgIgSIglAAIgIASIgPAAIAjhLIANAAIAjBLgAAOAJIgOggIgOAgIAcAAg");
	this.shape_18.setTransform(-31.575,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAcQgMgLAAgRQAAgQAMgMQAMgLARABQASgBALALQAMAMAAAQQAAARgMALQgLAMgSAAQgRAAgMgMgAgSgTQgIAIAAALQAAAMAIAHQAHAIALAAQAMAAAHgIQAIgHAAgMQAAgLgIgIQgHgHgMAAQgLAAgHAHg");
	this.shape_19.setTransform(-40.3,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARAmIgPgWIgCAAIgSAAIAAAWIgOAAIAAhLIAgAAQAOAAAJAHQAJAHAAANQAAARgRAGIASAZgAgSAFIARAAQASAAAAgPQAAgQgSAAIgRAAg");
	this.shape_20.setTransform(-48.625,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAXAmIgqgyIAAAyIgOAAIAAhLIAMAAIApAzIAAgzIAOAAIAABLg");
	this.shape_21.setTransform(-60.4,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAcQgMgLAAgRQAAgQAMgMQAMgLARABQASgBALALQAMAMAAAQQAAARgMALQgLAMgSAAQgRAAgMgMgAgSgTQgJAIABALQgBAMAJAHQAHAIALAAQAMAAAHgIQAIgHAAgMQAAgLgIgIQgHgHgMAAQgLAAgHAHg");
	this.shape_22.setTransform(-69.45,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAmIAAhAIgaAAIAAgLIBBAAIAAALIgaAAIAABAg");
	this.shape_23.setTransform(-77.375,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAmIAAhLIAfAAQAOAAAJAHQAJAHAAANQAAALgJAIQgJAHgOABIgRAAIAAAVgAgRAEIARAAQASAAAAgOQAAgQgSAAIgRAAg");
	this.shape_24.setTransform(-84.375,0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcAmIAAgxIgZAoIgFAAIgagoIAAAxIgNAAIAAhLIAMAAIAdAyIAegyIAMAAIAABLg");
	this.shape_25.setTransform(-93.9,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbAmIgIgSIglAAIgIASIgPAAIAjhLIANAAIAjBLgAAOAJIgOggIgOAgIAcAAg");
	this.shape_26.setTransform(-103.225,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAmIAAggIgnAAIAAAgIgOAAIAAhLIAOAAIAAAfIAnAAIAAgfIAOAAIAABLg");
	this.shape_27.setTransform(-111.8,0.6);

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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAmIAAgxIgZAoIgFAAIgagoIAAAxIgNAAIAAhLIAMAAIAdAxIAegxIAMAAIAABLg");
	this.shape.setTransform(61.45,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAeQgJgJAAgRIAAgqIAPAAIAAAqQAAAWASABQAUgBAAgWIAAgqIAOAAIAAAqQAAARgJAJQgJAJgQAAQgPAAgJgJg");
	this.shape_1.setTransform(51.875,-0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA3AAIAAALIgpAAIAAAUIAlAAIAAAMIglAAIAAAVIArAAIAAALg");
	this.shape_2.setTransform(44.125,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgEIAFgLQALAJAOgBQAQABAAgKQAAgFgHgEIgOgEQgLgDgFgCQgHgGAAgKQAAgKAHgGQAJgHAOABQAPgBAKAHIgEAMQgKgHgLAAQgQAAAAAKQAAAGAHADIAPAFQAKACAFADQAIAFAAAKQAAAKgIAGQgIAHgPgBQgJAAgIgCg");
	this.shape_3.setTransform(36.775,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAmIAAhLIANAAIAABLg");
	this.shape_4.setTransform(31.55,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIAOAAIAABAIAnAAIAAALg");
	this.shape_5.setTransform(27.025,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAcQgMgLAAgRQAAgQAMgLQAMgLARAAQASAAAMALQALALAAAQQAAARgLALQgMALgSAAQgRAAgMgLgAgSgSQgIAHAAALQAAAMAIAHQAHAIALAAQAMAAAHgIQAIgHAAgMQAAgLgIgHQgHgIgMAAQgLAAgHAIg");
	this.shape_6.setTransform(18.65,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQAUAAALAMIgJAJQgJgJgMAAQgLAAgIAIQgIAHAAALQAAAMAIAHQAIAIALAAQAMAAAJgJIAJAJQgLAMgUAAQgQAAgMgLg");
	this.shape_7.setTransform(10.125,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWAmIgpgyIAAAyIgOAAIAAhLIALAAIAqAzIAAgzIAOAAIAABLg");
	this.shape_8.setTransform(-1.4,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAcQgLgLAAgRQAAgQALgLQAMgLARAAQARAAANALQAMALgBAQQABARgMALQgNALgRAAQgRAAgMgLgAgTgSQgHAHgBALQABAMAHAHQAIAIALAAQALAAAIgIQAIgHAAgMQAAgLgIgHQgIgIgLAAQgLAAgIAIg");
	this.shape_9.setTransform(-10.45,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAmIAAhAIgaAAIAAgLIBBAAIAAALIgaAAIAABAg");
	this.shape_10.setTransform(-18.375,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAmIAAhLIAfAAQAOAAAJAHQAJAHAAANQAAALgJAIQgJAHgOABIgRAAIAAAVgAgRAEIARAAQASAAAAgOQAAgQgSAAIgRAAg");
	this.shape_11.setTransform(-25.375,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdAmIAAgxIgaAoIgFAAIgZgoIAAAxIgOAAIAAhLIALAAIAeAxIAegxIAMAAIAABLg");
	this.shape_12.setTransform(-34.9,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbAmIgIgSIglAAIgIASIgPAAIAjhLIANAAIAjBLgAAOAJIgOggIgOAgIAcAAg");
	this.shape_13.setTransform(-44.225,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUAmIAAggIgnAAIAAAgIgOAAIAAhLIAOAAIAAAfIAnAAIAAgfIAOAAIAABLg");
	this.shape_14.setTransform(-52.8,-0.4);

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
	this.shape.graphics.f("#FFFFFF").s().p("AAVAnIgVgeIgUAeIgQAAIAcgnIgbgmIAQAAIATAcIAUgcIAPAAIgbAlIAdAog");
	this.shape.setTransform(79.275,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA3AAIAAANIgpAAIAAAUIAlAAIAAAKIglAAIAAAWIArAAIAAAMg");
	this.shape_1.setTransform(72.025,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAOAAIAABBIAnAAIAAAMg");
	this.shape_2.setTransform(65.325,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIAfAAQAOAAAJAIQAJAHAAANQAAAMgJAHQgJAIgOgBIgRAAIAAAXgAgRAEIARAAQASAAAAgOQAAgPgSAAIgRAAg");
	this.shape_3.setTransform(57.875,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgEIAFgKQALAHAOABQAQgBAAgJQAAgGgHgCIgOgFQgLgDgFgDQgHgFAAgJQAAgKAHgHQAJgGAOgBQAPABAKAGIgEALQgKgFgLAAQgQAAAAAKQAAAFAHADIAPAEQAKADAFADQAIAFAAAJQAAAKgIAHQgIAGgPAAQgJAAgIgCg");
	this.shape_4.setTransform(50.175,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAnIAAhAIgaAAIAAgNIBBAAIAAANIgaAAIAABAg");
	this.shape_5.setTransform(43.425,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAnIgPgXIgCAAIgSAAIAAAXIgOAAIAAhNIAgAAQAOAAAJAIQAJAHAAANQAAARgRAGIASAagAgSAEIARAAQASAAAAgOQAAgPgSAAIgRAAg");
	this.shape_6.setTransform(36.425,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgKARgBQARABAMAKQANAMAAAQQAAARgNAMQgMALgRgBQgRABgMgLgAgSgTQgJAIAAALQAAAMAJAIQAHAHALAAQALAAAIgHQAIgIAAgMQAAgLgIgIQgIgHgLAAQgLAAgHAHg");
	this.shape_7.setTransform(27.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAnIAAhNIAfAAQAOAAAJAIQAJAHAAANQAAAMgJAHQgJAIgOgBIgRAAIAAAXgAgRAEIARAAQASAAAAgOQAAgPgSAAIgRAAg");
	this.shape_8.setTransform(19.175,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgEIAFgKQALAHAOABQAQgBAAgJQAAgGgHgCIgOgFQgLgDgFgDQgHgFAAgJQAAgKAHgHQAJgGAOgBQAPABAKAGIgEALQgKgFgLAAQgQAAAAAKQAAAFAHADIAPAEQAKADAFADQAIAFAAAJQAAAKgIAHQgIAGgPAAQgJAAgIgCg");
	this.shape_9.setTransform(11.475,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgEIAFgKQALAHAOABQAQgBAAgJQAAgGgHgCIgOgFQgLgDgFgDQgHgFAAgJQAAgKAHgHQAJgGAOgBQAPABAKAGIgEALQgKgFgLAAQgQAAAAAKQAAAFAHADIAPAEQAKADAFADQAIAFAAAJQAAAKgIAHQgIAGgPAAQgJAAgIgCg");
	this.shape_10.setTransform(1.575,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAnIAAgzIgZAqIgFAAIgZgpIAAAyIgOAAIAAhNIAMAAIAdAzIAegzIAMAAIAABNg");
	this.shape_11.setTransform(-7.15,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbAnIgIgSIglAAIgIASIgPAAIAjhNIANAAIAjBNgAAOAKIgOghIgOAhIAcAAg");
	this.shape_12.setTransform(-16.475,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAnIAAhNIANAAIAABNg");
	this.shape_13.setTransform(-22.35,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAOAAIAABBIAnAAIAAAMg");
	this.shape_14.setTransform(-26.875,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAOAAIAABBIAnAAIAAAMg");
	this.shape_15.setTransform(-33.425,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAnIAAhNIANAAIAABNg");
	this.shape_16.setTransform(-38.95,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATAnIgTg4IgSA4IgQAAIgZhNIAPAAIATA6IAUg6IAMAAIAUA7IATg7IAOAAIgZBNg");
	this.shape_17.setTransform(-46.95,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAdQgLgMAAgRQAAgQALgMQAMgKARgBQARABANAKQAMAMgBAQQABARgMAMQgNALgRgBQgRABgMgLgAgTgTQgHAIgBALQABAMAHAIQAIAHALAAQALAAAIgHQAIgIAAgMQAAgLgIgIQgIgHgLAAQgLAAgIAHg");
	this.shape_18.setTransform(-60.85,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgKARgBQARABANAKQAMAMgBAQQABARgMAMQgNALgRgBQgRABgMgLgAgTgTQgHAIAAALQAAAMAHAIQAIAHALAAQAMAAAHgHQAIgIAAgMQAAgLgIgIQgHgHgMAAQgLAAgIAHg");
	this.shape_19.setTransform(-70.1,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAjAAQANAAAIAGQAHAFAAAKQABALgKAFQANAEAAAPQAAAJgHAGQgIAFgPABgAgTAcIAWAAQARAAAAgMQAAgLgRAAIgWAAgAgTgFIAUAAQAPAAAAgKQAAgLgPAAIgUAAg");
	this.shape_20.setTransform(-78.65,0.1);

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
	this.shape.graphics.f("#FFFFFF").s().p("AQiE2IAAlCIhvAAIggCYIghiYIhuAAIAAFCIg5AAIAEgDQAZgVAAgbIAAkPIhLAAIAAEFQAAAPgPAAQgQAAAAgPIAAkFIhOAAIAAEPQAAAbAbAVIAEADIg3AAIAAgzIhKAAIAAhMIAxAAIAAhAIgxAAIAAhIIBKAAIAAg7IiYAAIAAFCIg2AAIAHgHQAXgYAAgkQAAgyg7g1QghgegIgKQgKgOAAgUQAAgIAGgGQAGgGAIABQAIgBAFAGQAGAGAAAIIAAAeIBDAAIAAgpQAAgcgYgWQgZgYglAAQgsAAgaAZQgYAZAAAkQAAAzA0AxIAqAnQAQASAAARQAAAXgVAAQgXgBAAgWIAAgbIhFAAIAAApQAAAfAaAVIAEADIg4AAIAAlCIhOAAIAAFCIgaAAIAAg1IhJAAIAAkNIhOAAIAAFCIg8AAIAGgFQAbgXAAgbIAAjIQAAgbgbgXQgcgYgnAAQgmAAgdAYQgbAXAAAbIAADIQAAAbAbAXIAHAFIhTAAIADgDQAagVAAgbIAAhBIhNAAIAAA3QAAAPgQAAQgRAAAAgPIAAi8QAAgOARAAQAQAAAAAOIAAA2IBNAAIAAhAQAAgbgagVQgbgVgogBQgoABgcAVQgbAVAAAbIAADQQAAAbAbAVIAEADIh3AAIgylCIhcAAIgxFCI8EAAIAAprMBRdAAAIAAJrgAOnE2IAujIIAADIgANKE2IAAjJIAnDJgArmE2IAEgkIAmAAIADAkgAj1D5IAAi8QAAgOAQAAQAQAAAAAOIAAC8QAAAPgQAAQgQAAAAgPgArZDOIAOhpIAIBpg");
	this.shape.setTransform(-14.975,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AColiseumWht, new cjs.Rectangle(-275.7,-31,521.5,62), null);


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
(lib.BELO_HamptonVA_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(336));

	// ctaBtnMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_263 = new cjs.Graphics().p("AOpgGIJfAAIAACvIpfAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(263).to({graphics:mask_graphics_263,x:154.3613,y:16.8916}).wait(73));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-7.6,-5.2,7.6,5.2).s().p("AkbD9IGepiICZBoImeJjg");
	this.shape_1.setTransform(238.35,10.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-7.7,-5.2,7.6,5.2).s().p("AkcD+IGgpjICZBoImgJjg");
	this.shape_2.setTransform(238.55,11.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-7.7,-5.2,7.7,5.2).s().p("AkeD/IGjpmICaBoImiJog");
	this.shape_3.setTransform(239.1,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-7.8,-5.3,7.8,5.3).s().p("AkgECIGmptICbBqImmJtg");
	this.shape_4.setTransform(240.075,11.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-7.9,-5.4,7.9,5.3).s().p("AklEGIGtp3ICdBsImrJ2g");
	this.shape_5.setTransform(241.4,11.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.1,-5.4,8,5.5).s().p("AkqELIG0qCIChBtIm0KCg");
	this.shape_6.setTransform(243.125,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.2,-5.6,8.2,5.5).s().p("AkxEQIG/qQICkBxIm+KQg");
	this.shape_7.setTransform(245.2,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.4,-5.7,8.5,5.7).s().p("Ak4EXIHJqgICoByInIKhg");
	this.shape_8.setTransform(247.675,13.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.7,-5.9,8.6,5.9).s().p("AlBEfIHWqzICtB1InVK0g");
	this.shape_9.setTransform(250.55,14.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.9,-6.1,8.9,6).s().p("AlLEpIHlrKICyB6InkLJg");
	this.shape_10.setTransform(253.775,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-9.2,-6.3,9.3,6.2).s().p("AlWEyIH1rhIC4B+In0Lhg");
	this.shape_11.setTransform(257.375,16.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-9.5,-6.5,9.6,6.5).s().p("AljE+IIIr9IC/CCIoHL9g");
	this.shape_12.setTransform(261.375,17.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-9.9,-6.8,9.9,6.7).s().p("AlwFJIIbsZIDGCHIobMag");
	this.shape_13.setTransform(265.775,19.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-10.3,-7,10.4,7).s().p("Al/FXIIxs6IDOCNIowM6g");
	this.shape_14.setTransform(270.525,20.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-10.8,-7.3,10.7,7.3).s().p("AmPFlIJItcIDXCTIpINcg");
	this.shape_15.setTransform(275.675,22.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-11.2,-7.6,11.2,7.7).s().p("AmgF1IJhuCIDgCZIphOCg");
	this.shape_16.setTransform(281.2,23.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-11.7,-8,11.7,7.9).s().p("AmzGFIJ9uoIDqCfIp8Oog");
	this.shape_17.setTransform(287,25.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-12.1,-8.3,12.2,8.2).s().p("AnEGUIKVvNID0ClIqVPOg");
	this.shape_18.setTransform(292.525,27.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-12.6,-8.5,12.6,8.6).s().p("AnUGjIKtvwID8CsIqtPvg");
	this.shape_19.setTransform(297.675,28.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-13,-8.9,13,8.8).s().p("AnjGwILDwQIEECxIrCQQg");
	this.shape_20.setTransform(302.425,30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-13.4,-9.1,13.3,9.1).s().p("AnwG8ILWwtIELC2IrWQtg");
	this.shape_21.setTransform(306.825,31.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-13.7,-9.3,13.7,9.4).s().p("An9HHILpxIIERC7IrnRIg");
	this.shape_22.setTransform(310.8,32.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-14,-9.5,14,9.5).s().p("AoIHRIL5xgIEYC/Ir5Rgg");
	this.shape_23.setTransform(314.425,33.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-14.3,-9.7,14.3,9.7).s().p("AoSHaIMHx2IEeDDIsHR2g");
	this.shape_24.setTransform(317.65,34.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-14.5,-9.9,14.5,9.8).s().p("AobHiIMVyJIEiDGIsUSJg");
	this.shape_25.setTransform(320.5,35.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-14.7,-10,14.7,10).s().p("AoiHpIMfyaIEmDJIsfSag");
	this.shape_26.setTransform(323,36.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-14.9,-10.2,14.9,10.1).s().p("AopHvIMpyoIEqDLIspSog");
	this.shape_27.setTransform(325.075,37.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.1,-10.2,15,10.2).s().p("AovHzIMxyzIEuDNIsxS0g");
	this.shape_28.setTransform(326.8,37.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.1,-10.3,15.2,10.3).s().p("AozH3IM4y8IEvDPIs3S8g");
	this.shape_29.setTransform(328.125,37.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.2,10.4).s().p("Ao2H6IM8zCIEwDQIs7TBg");
	this.shape_30.setTransform(329.1,38.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIExDRIs+TGg");
	this.shape_31.setTransform(329.65,38.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-15.3,-10.4,15.3,10.4).s().p("Ao4H8IM/zHIEyDQIs/TIg");
	this.shape_32.setTransform(329.85,38.45);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},263).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(42));

	// ctaBtn
	this.instance = new lib.ctaBtn_1();
	this.instance.setTransform(358.35,24.75,0.1309,0.1309);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:276.85},10,cjs.Ease.quadOut).to({x:278.35},4).wait(322));

	// txt_yourEvent
	this.instance_1 = new lib.txt_yourEvent();
	this.instance_1.setTransform(44.05,25.05,0.4257,0.4257,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({alpha:1},13).wait(99));

	// txt_inspired
	this.instance_2 = new lib.txt_inspired();
	this.instance_2.setTransform(102.8,25.05,0.4257,0.4257,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({alpha:1},13).wait(95));

	// hampton_logo (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("AjEChIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAAAAIABAAQAoAOApgbIAAAAIAkgZIAAAAQAXgPASgDIAAAAQATgDASAKIAAAAQAWAKAaAaIAAAAIABADQABADgJgDIAAAAQgjgNgWAAIAAAAQgTAAgbALIAAAAIg3AZIAAAAQgOAFgPAAIAAAAQgYAAgbgOgAnVCQIgCgBQAAgBAAgBQgBAAABgBQAAAAAAAAQABgBAAAAIAAAAIACAAQAgAMAzgQIAAAAQAogNAWgDIAAAAQAkgHArAXIAAAAIACACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABgBAAIAAAAIgCAAQgYgHgcAEIAAAAQgVACgfAKIAAAAQghALgZAAIAAAAQgeAAgfgQgAHdCeIABgHIgBgEIgBgBIgMAAIgBABIgBAEIABAHIgSAAIADgHIALgqIgCgGIAbAAIgBAGIAKAqIAEAHgAHSCGIABABIAHAAIAAgBIgEgRIAAgDgAGaCeIACgHIAAgpIgCgHIATAAIgCAHIAAApIACAHgAF4CeIgRgdIgCgEIABAEIAAAWIABAHIgQAAIABgHIAAgpIgCgHIARAAIANAXIACAEIAAgEIAAgQIgCgHIAQAAIgCAHIAAAwgAEuCeIABgHIAAgpIgBgHIATAAIgCAHIAAApIACAHgAD5CeIgKgLIAAghIALgLIAZAAIAFAQIgJgDIgKAAIgEADIgCAEIAAARIABADIADACIAFAAIACgCIAAgJIgDgHIAUAAIgCAFIAAAMIAAADIgKALgADLCeIgGgSIgBgBIgFAAIgBABIAAALIACAHIgSAAIACgHIAAgpIgCgHIAiAAIAKAKIAAAQIgHAHIAFAOIAEAIgAC+B0IAAAKIABABIAHAAIADgCIABgCIAAgCIgBgEIgDgBIgHAAgACFCeIACgHIAAgpIgCgHIATAAIgCAHIAAApIACAHgABWCeIgPgwIgCgHIASAAIAAAHIAGAYIAAADIABgDIAHgYIgBgHIASAAIgDAHIgPAwgAitCUQgOgBgZgKIAAAAIgcgNIAAAAIgcgNIAAAAQgtgRg4AWIAAAAIgPAHQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIABAAQAjgVAhgGIAAAAIAVgBIAAAAIABAAQAQAAASAEIAAAAIAhALIAAAAQAiANASAFIAAAAQAiAIApgRIAAAAIAFgCIABAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBAAIAAAAIAAACQgVAQgPAHIAAAAQgRAIgRAAIAAAAIgJgBgAHaBTIg2g0QgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAIAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAAIAAAvQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAAIgWAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAAAIAAhlQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAAAAQAEgBACADIAAAAIA4AyQAAABABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAAAIAAgvQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAAAAIAWAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAAIAABkQAAAEgEAAIAAAAIgBAAIAAAAIgDgBgAEPBEQgRgPAAgXIAAAAQAAgXARgOIAAAAQAQgPAXAAIAAAAQAXAAAQAPIAAAAQAQAOAAAXIAAAAQAAAXgQAPIAAAAQgQAPgXAAIAAAAQgXAAgQgPgAEiAJQgHAIAAANIAAAAQAAAMAHAIIAAAAQAHAJANAAIAAAAQAMAAAIgJIAAAAQAHgIAAgMIAAAAQAAgNgHgIIAAAAQgIgIgMAAIAAAAQgNAAgHAIgAC+BSQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAhNQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAIgaAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAAAIAAgTQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAAAAIBWAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAAIAAATQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAIgdAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQA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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:182.0502,y:22.1112}).wait(99));

	// Layer_36
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.525,1],-8.9,-5.7,8.7,5.6).s().p("AlHETIHfqXICwBwIneKZg");
	this.shape_33.setTransform(114.975,7.925);
	this.shape_33._off = true;

	var maskedShapeInstanceList = [this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(242).to({_off:false},0).wait(1).to({x:115.225,y:7.975},0).wait(1).to({x:116.075,y:8.175},0).wait(1).to({x:117.425,y:8.475},0).wait(1).to({x:119.375,y:8.875},0).wait(1).to({x:121.825,y:9.425},0).wait(1).to({x:124.875,y:10.075},0).wait(1).to({x:128.425,y:10.875},0).wait(1).to({x:132.575,y:11.775},0).wait(1).to({x:137.225,y:12.825},0).wait(1).to({x:142.425,y:13.975},0).wait(1).to({x:148.225,y:15.225},0).wait(1).to({x:154.525,y:16.625},0).wait(1).to({x:161.425,y:18.125},0).wait(1).to({x:168.825,y:19.775},0).wait(1).to({x:176.775,y:21.525},0).wait(1).to({x:185.175,y:23.325},0).wait(1).to({x:193.125,y:25.075},0).wait(1).to({x:200.525,y:26.725},0).wait(1).to({x:207.425,y:28.225},0).wait(1).to({x:213.725,y:29.625},0).wait(1).to({x:219.525,y:30.875},0).wait(1).to({x:224.725,y:32.025},0).wait(1).to({x:229.375,y:33.075},0).wait(1).to({x:233.525,y:33.975},0).wait(1).to({x:237.075,y:34.775},0).wait(1).to({x:240.125,y:35.425},0).wait(1).to({x:242.575,y:35.975},0).wait(1).to({x:244.525,y:36.375},0).wait(1).to({x:245.875,y:36.675},0).wait(1).to({x:246.675,y:36.875},0).wait(1).to({x:246.975,y:36.925},0).wait(63));

	// hampton_logo
	this.instance_3 = new lib.hamptonLogo();
	this.instance_3.setTransform(182.15,22.2,0.4247,0.4247,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(237).to({_off:false},0).to({alpha:1},15).wait(84));

	// white_BG
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_34.setTransform(160,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.831)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_35.setTransform(160,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_36.setTransform(160,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.502)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_37.setTransform(160,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.333)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_38.setTransform(160,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.169)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_39.setTransform(160,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_40.setTransform(160,25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(226,233,237,0.141)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_41.setTransform(160,25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(197,211,218,0.286)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_42.setTransform(160,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(168,189,200,0.427)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_43.setTransform(160,25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(138,166,181,0.573)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_44.setTransform(160,25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(109,144,163,0.714)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_45.setTransform(160,25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(80,122,144,0.859)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_46.setTransform(160,25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33647E").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_47.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},147).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},64).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(112));

	// image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_147 = new cjs.Graphics().p("AnoEyIAApiIPRAAIAAJig");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_2_graphics_147,x:188.95,y:23.05}).wait(189));

	// image_03
	this.instance_4 = new lib.image_03_1();
	this.instance_4.setTransform(189.75,26.45,0.3298,0.3298,0,0,0,151.5,124.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).to({regX:151,scaleX:0.3537,scaleY:0.3537,x:188.9,y:16.2},84).wait(105));

	// txt_ConventionsWht
	this.instance_5 = new lib.txt_ConventionsWht();
	this.instance_5.setTransform(72.05,12.6,0.4125,0.4125,0,0,0,0.5,0.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).wait(189));

	// txt_exhibitions
	this.instance_6 = new lib.txt_Exibitions();
	this.instance_6.setTransform(-59.95,33.75,0.4214,0.4214,0,0,0,0.5,0.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(147).to({_off:false},0).to({x:72.05},16,cjs.Ease.quadInOut).wait(173));

	// txt_HamptonRoads
	this.instance_7 = new lib.txt_HamptonRoads();
	this.instance_7.setTransform(-61.25,40.65,0.404,0.404,0,0,0,0.2,0.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({regX:0.5,x:70.75},16,cjs.Ease.quadInOut).wait(171));

	// background_image
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33647E").s().p("A5BD6IAAnzMAyDAAAIAAHzg");
	this.shape_48.setTransform(159.8,25);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(147).to({_off:false},0).wait(189));

	// white_BG
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_49.setTransform(159.9998,25.0001,0.4396,0.5556);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.831)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_50.setTransform(160,25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_51.setTransform(160,25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.502)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_52.setTransform(160,25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.333)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_53.setTransform(160,25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.169)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_54.setTransform(160,25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_55.setTransform(160,25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.2)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_56.setTransform(160,25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.4)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_57.setTransform(160,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.6)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_58.setTransform(160,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.8)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_59.setTransform(160,25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_60.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},72).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},64).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(189));

	// image_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_72 = new cjs.Graphics().p("AnoEyIAApiIPRAAIAAJig");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_3_graphics_72,x:188.95,y:23.05}).wait(264));

	// image_02
	this.instance_8 = new lib.image_02_1();
	this.instance_8.setTransform(191.9,17.35,0.4353,0.4353,0,0,0,0.6,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72).to({_off:false},0).to({regX:0.5,scaleX:0.3974,scaleY:0.3974,x:191.85},82).wait(182));

	// txt_Coliseum_Wht
	this.instance_9 = new lib.txt_AColiseumWht();
	this.instance_9.setTransform(73.35,12.2,0.432,0.432,0,0,0,1.1,1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).wait(264));

	// txt_yourBigEvent
	this.instance_10 = new lib.txt_YourBigEvent();
	this.instance_10.setTransform(-63,34.85,0.432,0.432,0,0,0,0.6,1.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({x:72.5},16,cjs.Ease.quadInOut).wait(248));

	// txt_hamptonColiseum
	this.instance_11 = new lib.txt_HamptonColiseum();
	this.instance_11.setTransform(-65.9,41.6,0.4598,0.4598,0,0,0,1.2,1.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).to({x:69.6},16,cjs.Ease.quadInOut).wait(246));

	// background_image
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#33647E").s().p("A5BD6IAAnzMAyDAAAIAAHzg");
	this.shape_61.setTransform(159.8,25);
	this.shape_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(72).to({_off:false},0).wait(264));

	// white_BG
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_62.setTransform(160,25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.831)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_63.setTransform(160,25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_64.setTransform(160,25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.502)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_65.setTransform(160,25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.333)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_66.setTransform(160,25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.169)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_67.setTransform(160,25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_68.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},64).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).wait(260));

	// image_mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AnkEyIAApiIPJAAIAAJig");
	mask_4.setTransform(188.575,23.05);

	// image_01
	this.instance_12 = new lib.image_01_1();
	this.instance_12.setTransform(181.35,31.2,0.2041,0.2041,0,0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.6,regY:0.6,scaleX:0.26,scaleY:0.26,x:170.35,y:25.2},84).wait(252));

	// txt_tournament_White
	this.instance_13 = new lib.txt_tournamentWht();
	this.instance_13.setTransform(72.3,13.35,0.4106,0.4106,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(336));

	// txt_forMultiple
	this.instance_14 = new lib.txt_forMultiple();
	this.instance_14.setTransform(-52.7,33.65,0.3496,0.3496,0,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:72.3},15,cjs.Ease.quadInOut).wait(321));

	// txt_booWilliams
	this.instance_15 = new lib.txt_booWilliams();
	this.instance_15.setTransform(-53.05,41.05,0.4412,0.4412,0,0,0,0.5,0.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({x:71.95},15,cjs.Ease.quadInOut).wait(319));

	// background_image
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#33647E").s().p("A5ED6IAAnzMAyJAAAIAAHzg");
	this.shape_69.setTransform(159.55,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(336));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(14,17.5,374.7,36.1);
// library properties:
lib.properties = {
	id: '3572E287AFEF4441B6AC3A271EED90D7',
	width: 320,
	height: 50,
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