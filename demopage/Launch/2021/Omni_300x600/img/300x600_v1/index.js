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



(lib.golf_img = function() {
	this.initialize(img.golf_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1081,722);


(lib.pool_img = function() {
	this.initialize(img.pool_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,842,568);// helper functions:

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


(lib.txt_youPaused = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A1006B").s().p("AGpBWIATgbQAaAVAnAAQAtAAAAgeQAAgNgKgHQgLgIgfgJQgogLgRgNQgSgPAAgYQAAgdAVgQQAWgRAnAAQA4AAAYAWIgUAdQgWgSgmAAQgrAAAAAbQAAALALAHQALAHAeAIQApALARAPQASAPAAAZQAAAdgUASQgXATgpAAQg6AAgbgbgADeBWQgZgbAAgrIAAh7IAjAAIAAB7QAAAcAPAQQAQATAcAAQAcAAAQgTQAOgQAAgcIAAh7IAjAAIAAB7QAAArgYAbQgZAbgsAAQgrAAgagbgAoaBWQgZgbAAgrIAAh7IAjAAIAAB7QAAAcAPAQQAQATAcAAQAcAAAQgTQAOgQAAgcIAAh7IAjAAIAAB7QAAArgYAbQgZAbgsAAQgrAAgagbgAslBQQgfggAAgwQAAgvAfggQAgghAyAAQA0AAAfAhQAfAgAAAvQAAAwgfAgQgfAhg0AAQgyAAggghgAsKg3QgVAWAAAhQAAAiAVAWQAWAWAhAAQAjAAAVgWQAVgWAAgiQAAghgVgWQgVgXgjAAQghAAgWAXgANZBsIAAjXIBQAAQA1AAAfAeQAfAdAAAwQAAAwgfAeQgfAeg1AAgAN8BMIArAAQAkAAAWgUQAXgUAAgkQAAgjgXgVQgWgUgkAAIgrAAgAKJBsIAAjXICkAAIAAAfIiAAAIAAA/IBtAAIAAAdIhtAAIAAA8ICAAAIAAAggACDBsIgQghIhwAAIgPAhIgpAAIBsjXIAHAAIBtDXgABkAuIgCgEIgmhTIgCAAIgnBTIgCAEIBTAAgAjvBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgYAVQgYATgpAAIg4AAIAABDgAjLAKIA5AAQA0AAAAgrQAAgVgOgLQgOgLgYAAIg5AAgAvJBsIAAhTIhSiEIApAAIAzBUIAGANIAEAAIAGgNIAzhUIApAAIhSCEIAABTg");
	this.shape.setTransform(-1.325,-2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_youPaused, new cjs.Rectangle(-106.5,-13.7,210.4,22.5), null);


(lib.txt_nowPlay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A1006B").s().p("ApBBQQgfggAAgwQAAgvAfggQAgghAyAAQA0AAAfAhQAfAgAAAvQAAAwgfAgQgfAhg0AAQgyAAggghgAomg3QgVAWAAAhQAAAiAVAWQAWAWAhAAQAjAAAVgWQAVgWAAgiQAAghgVgWQgVgXgjAAQghAAgWAXgALcBsIAAhTIhSiEIApAAIAzBUIAGANIAEAAIAGgNIAzhUIApAAIhSCEIAABTgAJ5BsIgQghIhwAAIgQAhIgoAAIAAgBIBtjWIAGAAIBuDXgAJbAuIgCgEIgnhTIgCAAIgnBTIgCAEIBUAAgAEYBsIAAjXIAjAAIAAC3IB4AAIAAAggAAzBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgYAVQgYATgpAAIg4AAIAABDgABXAKIA5AAQA0AAAAgrQAAgVgOgLQgOgLgYAAIg5AAgAikBsIgtiRIgCAAIguCRIgRAAIhSjXIAlAAIAzCRIADAAIAwiRIAPAAIAvCRIADAAIAyiRIAmAAIhSDXgAqYBsIiViQIAACQIgkAAIAAjXIAKAAICVCNIAAiNIAkAAIAADXg");
	this.shape.setTransform(1.675,27.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_nowPlay, new cjs.Rectangle(-83.3,16,170,22.6), null);


(lib.txt_15Off = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A1006B").s().p("AHsC8IAPgVQAUAQAeAAQAjAAAAgXQAAgKgJgGQgIgFgYgHQgfgJgNgLQgOgMAAgSQAAgWARgNQARgMAeAAQArgBASARIgOAWQgSgNgdAAQgiAAAAAUQAAAJAJAGQAIAFAXAGQAgAIAOAMQANAMAAAVQAAAWgPAOQgRAOghgBQgsABgVgVgArCC8QgTgVAAghIAAhhIAbAAIAABhQAAAWALANQAMANAXAAQAWAAALgNQALgNAAgWIAAhhIAcAAIAABhQAAAhgTAVQgUAUghAAQgiAAgUgUgAueC3QgXgYAAglQAAgmAXgYQAZgaAnABQAogBAZAaQAXAYAAAmQAAAlgXAYQgZAagogBQgnABgZgagAuJBOQgQASAAAaQAAAaAQAQQARASAaAAQAbAAAQgSQARgQAAgaQAAgagRgSQgQgRgbAAQgaAAgRARgAP/DNIAAhAIg/hoIAgAAIAnBCIAFAKIADAAIAEgKIAohCIAgAAIhABoIAABAgAOfDNIgMgaIhWAAIgNAaIgfAAIBUioIAFAAIBVCogAOICdIgfhEIgCAAIgeBBIgCADIBBAAgALHDNIAAiPIg4AAIAAgZICMAAIAAAZIg4AAIAACPgAFLDNIAAiPIg4AAIAAgZICMAAIAAAZIg4AAIAACPgADVDNIgkg6IgHgNIgrBHIghAAIA4hWIg2hSIAhAAIAjA3IAHAOIAFgOIAkg3IAhAAIg2BSIA4BWgAg8DNIAAioIB+AAIAAAZIhiAAIAAAwIBTAAIAAAYIhTAAIAAAuIBiAAIAAAZgAh6DNIh0hwIAABwIgbAAIAAioIAHAAIBzBvIAAhvIAcAAIAACogAmYDNIgpg1IgwAAIAAA1IgcAAIAAioIBJAAQAgABARAPQATAPAAAbQAAAlgjAOIAAABIApA2IAAAEgAnxCAIAuAAQAmAAAAggQAAgRgLgIQgKgJgTAAIgsAAgAwbDNIAAhAIg/hoIAgAAIAoBCIAEAKIADAAIAFgKIAnhCIAgAAIhABoIAABAgAE9g7QgXgYAAglQAAgmAXgYQAZgaAnABQAogBAZAaQAXAYAAAmQAAAlgXAYQgZAagoAAQgnAAgZgagAFTikQgRASAAAaQAAAaARAQQAQASAaAAQAbAAAQgSQARgQAAgaQAAgagRgSQgQgRgbAAQgaAAgQARgAiAg4IAOgWQAUATAbAAQARAAAKgJQAJgHAAgOQAAgNgKgHQgLgJgUABQgZAAgNAGIgDgDIAChaIBjAAIAAAYIhJAAIgBApQALgCAIAAQAhAAARAPQAPANAAAZQAAAZgQAPQgSAPgfAAQglAAgYgXgAsbg7QgXgYAAglQAAgmAXgYQAZgaAoABQArAAATAUIgQAWQgRgRgdABQgbAAgRARQgQASAAAaQAAAaAQAQQAQATAbgBQAXAAAOgNQANgOAAgUIAAgBIg2AAIAAgYIBTAAIAAAPQAAAmgUAXQgWAXglAAQgoAAgYgagACEgvQgKgMAAgSQAAgRAKgMQALgMASAAQARAAALAMQAKAMAAARQAAASgKAMQgLANgRgBQgSABgLgNgACPhNQAAAYASAAQARAAAAgYQAAgXgRAAQgSAAAAAXgAAqgxICCieIAPANIiCCegAKyglIAAinIB/AAIAAAYIhjAAIAAAwIBWAAIAAAYIhWAAIAABHgAILglIAAinIB+AAIAAAYIhiAAIAAAwIBVAAIAAAYIhVAAIAABHgAjHglIAAiPIgjAAIAAgYIA/AAIAACngAmQglIAAiPIg5AAIAAgYICNAAIAAAYIg5AAIAACPgApfglIAAinIB/AAIAAAYIhjAAIAAAwIBUAAIAAAYIhUAAIAAAuIBjAAIAAAZgAAoiJQgKgMAAgRQAAgRAKgNQALgMARABQASgBALAMQAKANAAARQAAARgKAMQgLAMgSAAQgRAAgLgMgAA0imQAAAYAQgBQASABAAgYQAAgYgSAAQgQAAAAAYg");
	this.shape.setTransform(-2.775,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_15Off, new cjs.Rectangle(-114.2,-22.1,222.9,41.7), null);


(lib.sideBars_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A1006B").s().p("Aj8GLIAAsVIH5AEIAAMLIAAAGg");
	this.shape.setTransform(-0.275,-39.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#934F9E").s().p("Aj/GLIAAsPIH5AAIAAgGIAGAAIAAMVg");
	this.shape_1.setTransform(0,39.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sideBars_mc, new cjs.Rectangle(-25.5,-78.7,51.1,157.4), null);


(lib.pool_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pool_img();
	this.instance.setTransform(-420.95,-284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pool_img_1, new cjs.Rectangle(-420.9,-284,842,568), null);


(lib.omni_logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AANAwQgNABgSgCIgBgBIgCAAIgBAAIAAgFQABgngDgaIAAgCIABgCIAOgVIgCBVIAWAAIgBhWIAOAWIABABIgDBDIABADIAAAFIgEAAIgGADg");
	this.shape.setTransform(-30.275,-21.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlQABglgDgeIAEgGIgBBIIAgAAIgBhKIAFAIIgCAlIAAAfIAAABIgLAAQgLAAgNgCg");
	this.shape_1.setTransform(-30.275,-21.2525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAUQgSAAgUgFIgEgBIAAgDIgBgQIAAgGIABgJIAGADIAUAEQAQADARgBIABAAQAKgBAJgDIAGAAIAAAIIABADIgBAPIgBADIgDABQgSAGgUgBgAggAGQAQAEAQABQASAAAPgFIABgKIgLACIAAACIgKAAIAAgBQgMAAgNgBIgBAKIgKAAIABgMIgLgCg");
	this.shape_2.setTransform(-30.275,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAJIgBgPIABgIIAUAFQARAEASgCIAUgDIABAFIgBAPQgSAFgUAAQgSAAgTgGg");
	this.shape_3.setTransform(-30.275,-16.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAqQgJgBgJgDIgEgCIABgKIAGABIAMADQABgagFgcIAAgBIABgCIACgEIAIgOIACAQQACAdgBAmIAAAGIgBgBIAAADg");
	this.shape_4.setTransform(-33.1107,-21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAdIAAgBQAMAEADgBIADACQACghgFgdIACgEQADAegBAlIgTgFg");
	this.shape_5.setTransform(-33.0857,-20.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAIIAAgFIgBgDIAIgEIACABIAOgDIAGgBIABAKIgFABIgUAEg");
	this.shape_6.setTransform(-27.475,-17.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJACIADgCQACABAOgCIAAABIgTACg");
	this.shape_7.setTransform(-27.475,-17.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAbIADg2IAKASIAAACIAAACQgDAOgBATg");
	this.shape_8.setTransform(-28.275,-23.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAgSIACAEQgCAPgBASg");
	this.shape_9.setTransform(-28.275,-22.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAPIgCgDIAAABIgFgJIgBgCIgCgDIAEgCIASgLIAPgHIgIAOIgLAVIgDAIg");
	this.shape_10.setTransform(-26.275,-29.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHACIgCgCIASgKIgKAVg");
	this.shape_11.setTransform(-26.6,-29.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAzQgkgHgcgXIgDgCIABgDQAJglAXgcIABgCIAPAAQASAAAVAFIADABIABAEIABARQAAAlgWAkIgBADgAgGgpQgVAZgHAfQAYATAdAHQASggAAghIgBgNQgQgEgRAAIgJAAg");
	this.shape_12.setTransform(-20,-26.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoARQAIgjAXgbIAMgBQASAAATAFIABARQAAAkgUAjQghgIgcgWg");
	this.shape_13.setTransform(-19.975,-26.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAEIAHgEIATgJIAPgHIgVAdIgCAEg");
	this.shape_14.setTransform(-18.975,-21.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJACIATgJIgLAPg");
	this.shape_15.setTransform(-19.175,-20.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAUIAAgCQADgkAHgLIADgHIAMATIgBACQgJASgDAUIgCAOg");
	this.shape_16.setTransform(-27.525,-26.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAVQACgiAGgLIAGAJQgIAQgEAYg");
	this.shape_17.setTransform(-27.55,-26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAkIgBgDIgFgCIAFgCQgFgcAHgiIACgIIAGAGQAaAWAhAGIAHACIgHALIgBABIgBABIgTAJIgDABIgCgBIgXANIAEACIgWAKgAgaAZIAfgSIADgCIADACIAMgHQgagGgWgRQgEAZADAXg");
	this.shape_18.setTransform(-21.175,-21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggAMQgBgWAFgXQAcAXAhAHIgDAEIgUAKIgCgCIgXAOIgMAGIADACIgFADQgCgHgBgPg");
	this.shape_19.setTransform(-21.1673,-21.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAAIAAgDIAAgHIAEgBQAHAAALgFIAGgDIAEgBIACAAQAJAEAJAFIAHAEIgHAFQgVAPgaAGIgHADgAAEgIIgWAHIAAAIQASgFAMgHIgIgFIAAAAg");
	this.shape_20.setTransform(-24.025,-17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAAIgBgFIATgFIADgBIAFgDIASAJQgVAOgYAGg");
	this.shape_21.setTransform(-24.175,-17.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMgCIAWgFIADAIIgTAGIgFABg");
	this.shape_22.setTransform(-25.675,-17.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAPIgBgBIAAgkIASgNIACAFIAEAFIgCACQgGALgDAgIgBAQg");
	this.shape_23.setTransform(-28.05,-26.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFARIgBggIALgJIACAEQgHALgBAig");
	this.shape_24.setTransform(-28.1,-26.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAALQgDgHgFgIIgIgOIAOAHQAIAEAHAEIADADIgNATg");
	this.shape_25.setTransform(-34.25,-29.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGgHIANAHIgGAIg");
	this.shape_26.setTransform(-34,-29.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAuQgRgiABgjIABgQIAAgDIADgBQAUgFAUAAIAOABIACAAIABABQAVAcAHAfIABADIgDACQgdAYgkAHIgEAAgAgigjIAAAMQAAAhAOAcQAegHAYgTQgGgbgRgXIgLAAIgEAAQgOAAgQADg");
	this.shape_27.setTransform(-40.4507,-27.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgngWIABgRQASgEAUAAIANABQATAZAIAfQgcAXgjAHQgRghABghg");
	this.shape_28.setTransform(-40.4757,-27.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZAWQgcgJgWgQIgGgFIAGgDQANgHAKgEIACgBIAIAFIATAIIAEABIgBAKIABAQIABAHgAgNgHQAPALASAGIAAgMIgWgJg");
	this.shape_29.setTransform(-36.675,-17.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXgGIAVgLIADADIAEABIATAIIAAAGIAAARQgbgIgUgQg");
	this.shape_30.setTransform(-36.5,-17.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAMIgSgbIArASIgTAKIgDADg");
	this.shape_31.setTransform(-41.4,-21.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJgGIATAIIgKAFQgFgGgEgHg");
	this.shape_32.setTransform(-41.375,-21.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPAgIAEgBQgOgKgIgDIgCAAIgCACIgXgKIgBgBIgBgBIgIgOIAHgBQAigGAagXIAHgFIABAIQAIAhgFAfIADACIgFACIAAABIgBAGgAgDAIQAFABAbAQQACgagEgWQgYASgbAFIAAABIARAHIABAAIACgBg");
	this.shape_33.setTransform(-39.55,-22.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAbAgIACgBQgagRgIgCIgDABIgUgJIgFgHQAjgHAcgXQAIAjgHAgg");
	this.shape_34.setTransform(-39.4685,-22.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAZQgEgYgKgVIgBgCIACgDIAIgNIAFADIAOALIACABIgBAmIgBABIgMAXg");
	this.shape_35.setTransform(-32.85,-26.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJgSIAFgJQAIAFAGAFIAAAiIgHALQgDgagJgUg");
	this.shape_36.setTransform(-32.825,-26.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAHAIIgTgIIAEgIIAVAIIAAAJg");
	this.shape_37.setTransform(-34.925,-18.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJgDIASAGIAAABIgSgHg");
	this.shape_38.setTransform(-35.05,-18.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAuA3Qg6gIglgvIgDgCIADgEQAjgnAwgJIAEAAIABACQAKASAEATIgBBGgAgmgCQAgAlAwAJIABg6QgEgPgGgPQgrAKgcAgg");
	this.shape_39.setTransform(-36.35,-38.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgugCQAhgmAvgJQAIAPAFAUIgBBAQg4gIgkgsg");
	this.shape_40.setTransform(-36.275,-38.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghAVQADgXAJgTIADgGIAEAEQAaARAQAUIAHAKIgagCQgRgBgSAFIgIACgAgWAPQAQgDAPAAIADAAQgKgMgQgMQgGAMgCAPg");
	this.shape_41.setTransform(-41.5,-33.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOgUQAYARAQAUIgOgBQgTAAgSAFQACgVAJgUg");
	this.shape_42.setTransform(-41.775,-33.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVAsIgCgBIgBgBQgXgqgvgbIgFgDIADgEIAPgTIAEAEQAjAsA2AHIAEAAIAAAJQgFAUgMASIgCAFgAgqghQAsAbAYAqIAJAEQAHgNAFgQQgzgJgjgog");
	this.shape_43.setTransform(-36.975,-34.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAWAnQgYgrgxgcIALgOQAkAuA4AGIAAADQgGAUgKASIgOgIg");
	this.shape_44.setTransform(-36.875,-34.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag3gKQAGgXALgSIACgEIADABQA1ALAhAqIADADIgDADQgpAug9AEIgFABgAgtgJIABA2QAzgFAkgnQgegigsgKQgJAQgFASg");
	this.shape_45.setTransform(-23.875,-38.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgxgKQAGgUAKgTQAyAKAhAoQgnAtg7AEg");
	this.shape_46.setTransform(-23.95,-38.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAXIgBguIAdAEIgEAGQgLASgDATgAgEgEIAEgIIgEAAg");
	this.shape_47.setTransform(-28.025,-41.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHgUIAPACQgJASgGAVg");
	this.shape_48.setTransform(-28.175,-41.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJgLIgDgGIAGgBIATgDIgBAqIgKABQgCgSgJgPg");
	this.shape_49.setTransform(-32.3,-42.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGgPIANgCIgBAkQgFgUgHgOg");
	this.shape_50.setTransform(-32.175,-41.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgtAwQgIgQgGgRIAAgPIAFAAQA4gDAmgsIAFgFIADAFIALAQIgEADQgvAYgZAqIgBABIgBABIgTAKIgFADgAgxAIIAAAFQAFANAFANIAOgHQAQgZATgQQgaAOghADgAAmgeIAIgEIgCgCg");
	this.shape_51.setTransform(-23.4,-33.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag0AOIAAgKQA6gEAogtIAIAMQgxAagaAqIgTAKQgIgPgEgQg");
	this.shape_52.setTransform(-23.5,-33.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbAZQgVgFgPAAIgYABIAIgJQAQgSAYgRIAFgDIACAGQAIATADAVIABAHgAgKAKIABAAQAMAAATAEQgBgLgGgOQgNAJgMAMg");
	this.shape_53.setTransform(-18.75,-33.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAOIgNABQAQgTAXgPQAIATACAUQgTgFgRgBg");
	this.shape_54.setTransform(-18.475,-33);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAFAYIgOgLIgEgDIADgDQAKgQAEgUIAKACIgBA5gAAAAIIADABIAAgJg");
	this.shape_55.setTransform(-32.575,-30.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgHAOQAKgRAFgUIgBAvQgGgGgIgEg");
	this.shape_56.setTransform(-32.5,-30.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLgYIAKgCQAEASAHAMIACAFIgEACIgLAJIgIAHgAgBAGIABAAIgBgDg");
	this.shape_57.setTransform(-28.125,-30);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFgTQAEAQAHAOIgLAJg");
	this.shape_58.setTransform(-28.2,-30.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgDAsQghgjgGgwIgBgIIAHACQAUAFAQABQASgBASgEIAHgCIAAAHQgGAwghAjIgEAEgAAAAhQAZgdAHglQgQADgQAAQgNAAgRgDQAFAlAZAdg");
	this.shape_59.setTransform(-30.3,-11.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AglgoQATAGASgBQAUAAASgEQgGAtggAjQgggkgFgtg");
	this.shape_60.setTransform(-30.275,-11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgrAyIgCAAIgQgDIAGgCIABgEQAUghAAgjIgBgQIgBgHIAIACQAcAIAXASQAXATAOAZIACADIgDADQglAYgqgBgAgTAqQAXAAAZgKQgZABgXAJgAgYgbQAAAhgRAhQApgRAkAAIAAAHIANgGQgagrgwgRg");
	this.shape_61.setTransform(-12.85,-26.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgZAtIgbgCQAUgjAAgkIgBgRQAcAIAWASQAWASAOAYQgjAXgpAAIgCgBg");
	this.shape_62.setTransform(-12.575,-26.4495);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCBfQABg4gbgrQgRgdgZgSIgEgEIAOgSIABgBIABgBIAKgFIACAAIABAAIAUACQAnABAkgXIAEgCIADAEQASAhAAAoQAAAmgTAgQgTAiggAUIgHAFgAg0hCIgIAKQAZAVARAbQAXApACA1QAbgUAQgeQAPgdAAggQAAgigPgeQgjAWgogBIgUgCg");
	this.shape_63.setTransform(-12.525,-14.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYgFQgSgdgagUIALgQIAKgDIAVABQApAAAkgXQASAiAAAlQAAAlgTAgQgSAfgfAUQABg6gagrg");
	this.shape_64.setTransform(-12.425,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKgCIAEgJIAEABIAXAEIgpASg");
	this.shape_65.setTransform(-17.45,-21.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAgBIAFABIgJACg");
	this.shape_66.setTransform(-17.7,-21.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAbBQQg/gBgsgvIgDgDIADgDQAgghAFgtIAAgEIAEAAQAagHASgPIACgBIADABQAwAcASA1QAKAggCAfIgBADIgDACQgbAJgZAAgAghgwQgGAsgeAhQAoAoA4ABQAZAAAWgIQABgegKgdQgQgtgpgaQgSAOgXAGg");
	this.shape_67.setTransform(-22.6083,-10.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhNAcQAggiAGguQAZgHAVgPQAuAbARA0QAKAegCAeQgaAKgaAAQg9gBgqgug");
	this.shape_68.setTransform(-22.5326,-10.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag0AbIgFgDIADgEQAfgyA5gQIAHgCIgCAXQAAAiAQAeIADAGIgHABIgMACIgBAAIgPABQgogBgjgVgAgNAWQAZAGAbAKIAEgBQgOgeAAggIABgJQguAPgbAoIAGADIABgHQAEAAATAFg");
	this.shape_69.setTransform(-47.925,-26.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgyAWQAfgwA3gQIgBAQQgBAiARAhIgcACQgnAAgigVg");
	this.shape_70.setTransform(-47.95,-26.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgaBRQgbABgcgLIgDgBIAAgEQAAgiAKggQATg0AtgbIADgBIADABQAVASAZAHIADABIABADQAEAtAgAhIADADIgDAEQgsAvg/gBgAg/ABQgLAdAAAhQAYAJAYAAQA4ABApgqQgdghgGgrQgZgIgTgQQgnAZgQAtg");
	this.shape_71.setTransform(-38.1261,-10.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgZBMQgbAAgagLQgBggALgfQARgzAtgaQAUARAcAIQAEAuAhAjQgrAtg7AAIgCAAg");
	this.shape_72.setTransform(-38.2293,-10.5989);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFBlQgggVgSghQgTgiABglQAAgoAVgkIADgEIAEACQAgAUAmABIAPgBIABAAIAUAHIABACIAKAOIADAFIgFADQgWAPgRAcQgaAqgDA+IAAAJgAg/gYQgBAgAPAeQAPAeAcATQAEg6AXgoQARgcAXgSIgHgKIgOgEIgPAAQgngBgggSQgRAeAAAkg");
	this.shape_73.setTransform(-48.1007,-14.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgxAuQgTghABglQAAgnAUghQAiAUAnABIAPgBIARAGQAFAJAGAGQgZARgRAdQgaArgCA/QgfgUgRgfg");
	this.shape_74.setTransform(-48.2007,-14.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOAAIABgJIAOgCIACADIAMAUg");
	this.shape_75.setTransform(-42.725,-22.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIgBIAMgCIAEAHg");
	this.shape_76.setTransform(-43.25,-22.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdA/QghgpABgzQgBgQAFgSIABgEIAFABQAjAEAdAWQAeAUAQAfIAEAGIgHABQguAJggAkIgDAFgAgzgdQgBAtAbAkQAeggAqgKQgPgagagRQgYgSgfgFQgCAOAAANg");
	this.shape_77.setTransform(-38.35,-44.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag3gcQAAgNAEgTQAjAFAcAUQAcAUAQAeQgwAJggAlQgfgnAAgyg");
	this.shape_78.setTransform(-38.475,-45.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgRBQQghgVgTgiQgTggAAgoQAAgPADgPIABgEIAFAAQBpAIA7AnIAEACIgCAEQgJAVgCASIgBAEIgDABQg2APgcAvIgDAEgAhOgvQAAAkAQAdQARAfAdAUQAegwA0gOQACgRAIgSQg3gjhhgIQgCALAAANg");
	this.shape_79.setTransform(-51.4756,-32.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag/AYQgTggAAgmQAAgPADgOQBnAHA7AnQgJAUgCAUQg4AQgdAxQgggTgSghg");
	this.shape_80.setTransform(-51.5506,-32.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ABNBIQhEgmhigCIgHAAIACgGQAQgtAngbQAngcAvABIASABIAFABIgCAFQgDARAAAOQAAAwAdAmIADAEIgPAUgAgggnQgiAXgQAmQBfAEBBAjIAGgHQgdgoAAgxQAAgNACgPIgMAAQgqAAgjAYg");
	this.shape_81.setTransform(-50.05,-44.3004);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhZAcQAPgqAkgbQAmgbAvAAIARABQgFATAAAOQAAAyAgAnIgLAOQhFgohkgBg");
	this.shape_82.setTransform(-50.05,-44.3754);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAWA/QgfgpgxgKIgHgBIAEgFQATggAggTQAfgTAlgCIAEAAIABAEQADAPAAAOQAAA2glAqIgDAEgAgEglQgcAQgRAaQAtALAeAkQAegmAAgvQAAgHgCgQQggACgaARg");
	this.shape_83.setTransform(-21.5214,-44.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag7AJQATgdAegTQAegTAlgBQADAOgBAOQAAAzgjAoQgggpgzgKg");
	this.shape_84.setTransform(-21.3964,-44.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAqBfQgQgegagTQgcgUgigFIgFAAIABgGQALgsAkggQAjgfAvgEIAFgBIgDDAIgVADgAgNg1QgeAbgMAnQAiAFAaAUQAcAUAQAdIAGgBIADisQgoAFgfAcg");
	this.shape_85.setTransform(-37.475,-52.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AABAqQgbgVgkgFQALgrAigeQAigeAtgFIgDC3IgOACQgPgfgdgUg");
	this.shape_86.setTransform(-37.4,-52.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgxBhIgVgCIgCjAIAFAAQA0ACAmAhQAoAiAJAyIABAFIgFABQgjABgeASQgdASgSAeIgCADgAg8BWIAJABQATgeAegSQAcgSAjgDQgKgrgjgdQghgdgtgEg");
	this.shape_87.setTransform(-22.425,-52.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhABbIgDi3QAzACAlAhQAlAgAKAwQglACgfASQgdATgTAfIgQgCg");
	this.shape_88.setTransform(-22.475,-52.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AALBNQgMgYgWgSQgVgRgbgIIgDAAIAAgDQgDgVgHgRIgCgEIAEgCQA8glBlgHIADAAIABAFQAEAPAAARQgBAmgRAfQgTAhgfAVIgEACgAhJgfQAFAOADATQA2AQAdAyQAbgUAQgeQAPgdABghQAAgPgDgLQhbAFg4Aig");
	this.shape_89.setTransform(-8.9,-31.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgUAhQgWgSgcgIQgCgUgIgTQA7glBjgFQADANAAASQAAAlgSAfQgSAfgeATQgNgYgWgSg");
	this.shape_90.setTransform(-8.825,-31.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AhTBEIgKgOIACgDQAjgmgBgyQABgNgDgPIgBgGIAOAAQAuAAAmAcQAmAbAQArIACAHIgHAAQhfAAhEAkIgEACgAgvglQAAAyghAqIADAEQBBghBbgCQgPgmgigXQgjgYgpAAIgCAAQACAQgBAIg");
	this.shape_91.setTransform(-10.2,-43.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhWA3QAjgoAAg0QAAgOgDgOIAIgBQAuABAkAbQAkAbAPApQhggBhFAmg");
	this.shape_92.setTransform(-10.225,-43.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AANAWIgNgUIgMAAIAAAUIgEAAIAAgsIAQAAQAQAAAAANQAAAJgMACIANAUgAgMgBIAKAAQAOAAAAgIQAAgJgMAAIgMAAg");
	this.shape_93.setTransform(-70.125,-42.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAbQgMgLAAgQQAAgPAMgLQAMgLAPAAQAQAAAMALQALALAAAPQAAAQgLALQgMALgQAAQgPAAgMgLgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQALgKAAgPQAAgNgLgLQgJgKgQAAQgOAAgKAKg");
	this.shape_94.setTransform(-70.4,-42.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgJIgPhNQgDgSAJAAQAGAAACAFIAEAPQAHAeAbAZQAjAiA1AAQAtAAAfgYQAigaAAgsQAAgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AogeQAkgcA1AAQArAAAeALQAOAFALAFQADAAADgDQAEgDADAAQAGAAABAIIAIBRQABAJgHAAQgHAAgFgSQgNglgegVQgegTgmAAQgnAAgaASQgfAVAAAmQAAAlAlAVQAQAIBBAUQA5ASAZAUQAlAfAAA4QAAAwgiAhQgsAshYAAQgfAAgigMg");
	this.shape_95.setTransform(224.389,-25.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAADSQgpgCgZABQgwADgXgBQgJABAAgHQABgEAFgCIAUgJQAKgFAEgNQACgKAAgYIAAkuQAAgSgYgJQgZgIAAgEQAAgHAMgBIA7ACQAhAAAXgCQAGABADABQACACAAAEQAAADgVAJQgVAJAAAfIAAEhQAAAgADAGQAIAMAhgBQBTAAAtgeQAXgQALgPQAFAAAAAHQAAAageAgQgMAPgOAEQgIABgXAAIhDgBg");
	this.shape_96.setTransform(193.375,-25.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AABDSQgqgCgYABQgwADgYgBQgIABAAgHQAAgEAGgCIATgJQALgFADgNQADgKAAgYIAAkPQAAgcgEgLQgHgSgVgEIgLgCQgHgDAAgEQAAgIAVAAQBvAAA2ACIBTgCQAGABAAANQAABGgLAAQgIAAgBgPQgCgVgDgGQgKgNglgDQgKAAgqAAQgrAAgGADQgGAEAAAeIAABvQAAAQACACQADADARAAIA+AAQAlAAALgZIAFgQQADgIAEAAQAGAAAAAMIgBA7IABAwQAAAHgGAAQgGAAgHgZQgGgbgdAAIhWAAQgIAAgBAGQgBACAAALIAABuQAAAgAEAGQAHAMAhgBQBTAAAugeQAXgQAKgPQAFAAAAAHQAAAagdAgQgNAPgNAEQgIABgYAAIhCgBg");
	this.shape_97.setTransform(162.075,-25.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAsDSIgZgBQgoAAgXABIgRABQgHABAAgJQAAgEAYgJQAXgKAAgVIAAk1IAAgQQgBgMgFAAIhgAAQgZAAgIAJQgGAFgJAcIgCAJQgDAEgFABQgFAAAAgIIAGg5IACgPQACgJAHAAICmACQBpAABBgCQAKABAEADQADADAAAKIADAwIAAAJQgBAFgFAAQgHAAgCgHIgCgQQgEgXgjAAIhUAAQgTAAgCADQgCACAAAYIAAEwQAAAeAYAHQAXAHAAAFQAAAHgFAAIgWgBg");
	this.shape_98.setTransform(125.8375,-25.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AidCbQg3g9AAhfQAAhcA+g+QA+g8BaAAQBaAAA8A7QA9A8AABcQAABjg+A9Qg9A8hhAAQheAAg4g9gAiBiOQgoAxAABLQAABWAyA/QA1BDBSAAQBCAAArgxQAtgyAAhRQAAhVgyg+Qg2hDhRAAQhHAAgrA2g");
	this.shape_99.setTransform(87.225,-25.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ADwEYIgogCQgdAAgbACIgeABIgMAAQgHgCABgIQAAgGAbgLQAbgMAAgdIAAi/IABgPQgCgFgFAAIkfAAQgGAAgCAEQgBACAAAIIAADGQAAAeAlALQAlALAAAJQAAAGgMAAQhEgDgpAAQgiAAgTACIgOABQgJAAAAgMQAAgHAKgDIAVgGQAegNAAguIAAmWQAAgigigLIgXgGQgLgDABgGQgBgIANAAIArABIAqACIAlgCIAkgBQAPAAAAAHQAAAFgJADQgMADgHADQgcAMAAAjIAACsQAAAJABACQADADAHAAIEdAAQAEAAACgKIAAgNIAAijQAAgggdgLQgdgMgBgFQABgIANAAQAZAAA4ADQAcAAAcgDQAWAAgBAMQAAADgaAKQgaALAAAgIAAGkQAAAiAkAMQAkANgBAFQAAACgCADQgDAEgEAAIghgBg");
	this.shape_100.setTransform(38.8,-32.725);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgCDRQgVAAgRABIgSABQgHAAgDgBQgCgDAAgFQAAgDAXgJQAWgJAAgjIAAkxQAAgagXgIQgYgIAAgDIABgGQABAAAAAAQAAAAABAAQAAAAABAAQABgBABAAIBAACIA2gCQAHAAACABQACABAAAFQAAACgVAIQgVAJAAAaIAAE/QAAAXAaAJQAaAHAAAGQAAABAAABQgBABAAAAQAAABAAAAQgBABAAAAQgDACgHgBQgngCgYAAg");
	this.shape_101.setTransform(-84.125,-25.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("ACXDEIj7kgIgFgGQgFgGgCAAQgEAAAAAOIAAD0QAAAgAaAGQAZAIAAACQAAAJgGgBIgYgBIgjgBIg3ACQgIAAAAgGQAAgGAIgEIASgGQAagNAAgxIAAjcQAAhLgkgTQgjgGAAgLQAAgDADgCQADgBADgBIAbACIAbgCQAEABAFAFIAGAIIEXE9QAFAGACAAQABAAAAgGIAAj6QAAgugggNIgXgGQgKgDAAgGQAAgHAHAAIA1ACIA7gCQAGAAAAAGQAAAEgRAJQgSAKAAAZIAAFZQAAAZgFAAQgHAAgPgQg");
	this.shape_102.setTransform(-113.775,-25.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ACsDRIgbACIgZABQgGAAAAgGQAAgFASgJQATgJgBgaIgGjnQAAgXgGAAQgHAAgIASIh5D7IgHARQgHANgEAAQgDAAgEgHIgEgKIh9kKQgCgGgFAAQgDAAgBAJIgHDQQgCAvAbANQAHADAMADQAJADAAAGQAAAHgPAAQgigDgSAAQgRAAgQACIgSABQgFAAAAgIQAAgFATgIQAUgIACglIAKh8QAEg7AAgoQAAhVgbgXQgcgJAAgKQAAgGAKAAIAgACIAfgCQAGAAADAGIAEAKICLEvQAJASAEAAQACAAAPghICLkcIAHgNQAEgIAFABIAbACQAOAAAOgCQAGAAAAAHQAAAGgHACIgQAFQgXAJACAqIAIEoQABAcAXAHQAWAHAAAHQAAAGgOAAQgggDgXAAg");
	this.shape_103.setTransform(-158.625,-25.8016);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AjSDOQhIhQAAh/QAAh7BShSQBThRB4AAQB4AABQBPQBRBQAAB7QAACEhSBRQhSBQiCAAQh9AAhLhSgAisi9Qg1BCgBBjQAABzBDBUQBHBZBuAAQBYAAA5hBQA8hDAAhsQAAhxhDhTQhIhYhsAAQheAAg6BHg");
	this.shape_104.setTransform(-210.1,-32.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ai7CpQgugtAAhEQAAgvAYgeQAYgfAwgNQgPgUgFgPQgHgPAAgRQAAgjAagXQAagWAoAAQAbAAAdAMIAKACIAGgCQAEgDACAAQADAAABADIACAMIADA1QAAAEgCAEQgBACgEAAQgFAAgEgLQgEgKgFgJQgOgUgSgLQgSgLgVAAQgWAAgNAOQgNAMAAAWQAAAbAvA3QAuA2B5BzQAJgOAEgNQAEgOAAgRQAAgXgFgOQgGgKgNgIIgIgCIgKgCIgBAAQgOgCAAgGQAAgEAEgCQADgBAJAAIASABIAeABIAmgBQAGgBACACQADADAAACQAAACgMAIQgMAHgDANIgCATQgDA1gYAlQAsAoAbASQAWAPAMAAQAGAAAGgCIAJgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgPAHQgPAHgSAAQgXAAgYgNQgYgLgrgkQggAhghANQgiAPgpAAQhJAAgugsgAi0gYQgUAYAAAgQAAAbALAXQAMAaAVAVQAXAXAdAMQAcANAhAAQAcAAAYgKQAagJAWgTQgmghgngnQgggfgbggIgKgLQgjgpgNAAQgYAAgTAYg");
	this.shape_105.setTransform(-121.275,40.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgIIgPhNQgDgTAJAAQAGAAACAFIADAPQAIAeAaAZQAkAiA0AAQAuAAAfgXQAigbAAgsQAAgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AngeQAkgcA2AAQArAAAdALQAPAFALAFQADAAADgDQADgDADAAQAHAAAAAIIAJBRQABAJgHAAQgHAAgFgSQgNglgfgVQgdgTgmAAQgnAAgaASQgfAVAAAmQAAAlAlAVQAQAIBBAVQA4ARAaAUQAlAfAAA4QAAAwgiAhQgsAshZAAQgeAAgigMg");
	this.shape_106.setTransform(154.764,40.975);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AArDTIgYgCQgoAAgXACIgRABQgHgBAAgHQAAgFAYgJQAXgKAAgVIAAlEQgBgMgFAAIhgAAQgZgBgIAJQgGAFgJAcIgDAJQgCAFgFAAQgCAAgCgDIgCgEIAHg6IABgOQADgKAGABIBIABIBfABQBpAABBgCQAKAAAEADQADAEAAAKIADAvQABAOgHAAQgHAAgCgHIgCgQQgEgXgjABIhUAAQgTAAgCACQgCADAAAYIAAEwQAAAdAYAHQAXAHAAAFQAAAIgFAAIgXgBg");
	this.shape_107.setTransform(120.1559,41.05);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ABlDAQgQgNgVggIhAhpQgQgZgGgDQgHgDgwAAQgMAAgDAGIgBAKIAAB+QAAAeAfAJQAeAJAAAFQAAAFgDABIgHAAQgTgDgwAAQgtACgWABQgGgBAAgGQAAgEAWgKQAVgLAAgbIAAkvQAAghgZgIQgZgHAAgFQAAgDADgDQADgBAFAAIAMABIAaABQAiAABAgCIAZAAQAaABAVAHQBBAXAABIQAAAigVAdQgUAbggANIBhCXQAZAmAbAKQATAHAAACQAAAIgmAAQgdAAgWgUgAhUi9QgJAEAAARIAACXQAAAHAWABQANABAdgBQAdAAAUgOQAfgWAAgwQAAg0gigZQgcgVgwAAQgUAAgFACg");
	this.shape_108.setTransform(89.475,41.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AieCbQg2g9AAhfQAAhcA+g9QA+g9BZAAQBbAAA8A7QA9A8AABcQAABjg9A9Qg+A8hiAAQhdAAg5g9gAiBiOQgpAyAABKQAABXAzA+QA1BEBTAAQBBAAAsgxQAsgzABhRQAAhVgzg+Qg1hChSAAQhHAAgrA1g");
	this.shape_109.setTransform(49.25,40.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgIIgPhNQgCgJACgFQACgFAEAAQAGAAACAFIADAPQAIAeAbAZQAjAiA1AAQAsAAAfgXQAjgbgBgsQABgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AogeQAkgcA1AAQArAAAdALQAPAFALAFQADAAADgDQADgDADAAQAHAAAAAIIAJBRQABAJgIAAQgHAAgFgSQgNglgegVQgdgTgmAAQgnAAgbASQgeAVAAAmQAAAlAlAVQAQAIBBAVQA5ARAZAUQAlAfAAA4QAAAwgiAhQgsAshYAAQgfAAgigMg");
	this.shape_110.setTransform(11.15,40.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AABDSQgqgCgYABQgwACgYABQgJAAAAgHQABgEAGgDIATgIQALgFADgNQADgKAAgYIAAkQQAAgbgEgLQgHgTgVgDIgLgDQgHgCAAgEQAAgIAVABQBvgBA2ADIBTgCQAGgBAAANQAABIgMgBQgHABgBgRQgCgUgEgFQgJgNglgDQgKgBgqAAQgrAAgGADQgGAEAAAeIAABvQAAAPACADQADACARAAIA+AAQAlAAAKgXIAGgRQACgHAEAAQAHAAAAALIAABrQAAAHgHAAQgFAAgHgaQgGgagdAAIhWAAQgIAAgBAGQgBACAAALIAABuQAAAgAEAGQAHALAhAAQBTABAugfQAXgQAKgPQAFAAAAAHQAAAagdAgQgNAOgOAFQgHACgYAAIhCgCg");
	this.shape_111.setTransform(-19.775,41.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("ACGD/QgVgRgbgrIhWiLQgVgigIgDQgLgFg/AAQgQAAgEAIQgBACAAANIAACnQAAAoApALIAcAHQAMAFAAAIQAAAFgEABIgJAAIgXgBQgbgCgoAAIgsACIgsABQgIABAAgKQAAgEAcgPQAdgOAAgkIAAmTQAAgsgigKIgXgFQgKgDAAgJQAAgEAEgCQAEgDAHgBIAQACQALABAXABQAtAABVgEIAiAAQAiACAcAKQBYAeAABgQAAAtgdAnQgbAkgqARICCDIQAhA0AjANQAIADALACQAHACAAAGQAAAJgyAAQgnAAgegagAhwj7QgMAFAAAVIAADKQAAAJAdACQARABAngBQAnAAAbgUQAqgcAAhAQAAhEgugiQgmgdhAAAQgaAAgHAEg");
	this.shape_112.setTransform(-60.375,34.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.omni_logo, new cjs.Rectangle(-238.4,-62.6,476.9,125.2), null);


(lib.golf_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.golf_img();
	this.instance.setTransform(-542.5,-361.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.golf_img_1, new cjs.Rectangle(-542.5,-361.9,1081,722), null);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A1006B").s().p("AEOAlQgOgOAAgXQAAgVAOgPQAPgQAXAAQAZAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgZAAQgXAAgPgQgAEbgZQgKALAAAOQAAAQAKAKQAKALAPAAQAQAAALgLQAKgKAAgQQAAgOgKgLQgLgKgQAAQgPAAgKAKgAhcAlQgOgOAAgXQAAgVAOgPQAQgQAXAAQAYAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgYAAQgXAAgQgQgAhPgZQgJALAAAOQAAAQAJAKQAKALAQAAQAQAAAKgLQAKgKAAgQQAAgOgKgLQgKgKgQAAQgQAAgKAKgAjPAlQgOgOAAgXQAAgVAOgPQAPgQAYAAQAYAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgYAAQgYAAgPgQgAjCgZQgJALAAAOQAAAQAJAKQAKALAQAAQAQAAAKgLQAKgKAAgQQAAgOgKgLQgKgKgQAAQgQAAgKAKgAG/AzIgVhDIAAAAIgWBDIgIAAIgmhkIARAAIAYBDIABAAIAXhDIAHAAIAWBDIABAAIAXhDIASAAIgmBkgADrAzIhGhDIAABDIgQAAIAAhkIAEAAIBGBBIAAhBIARAAIAABkgABQAzIgfgvIgUAUIAAAbIgQAAIAAhkIAQAAIAAAyIAzgyIAUAAIAAACIgoAoIAoA4IAAACgAlCAzIAAhkIAuAAQASAAAKAHQAJAHAAANQAAAPgOAGIAAABQARAFAAARQAAAOgKAIQgKAHgSAAgAkyAkIAhAAQAIAAAGgEQAGgEAAgHQAAgHgGgEQgFgEgIAAIgiAAgAkygGIAeAAQAJAAAFgEQAGgEAAgGQAAgPgUAAIgeAAgAntgoQA1ApACAAIg3AtgAm2ABIAAAAIAAAAIAAAAg");
	this.shape.setTransform(2.525,30.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A1006B").ss(1,1,1).p("AsIilIYRAAIAAFLI4RAAg");
	this.shape_1.setTransform(1.65,31.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsHCmIAAlLIYPAAIAAFLg");
	this.shape_2.setTransform(1.65,31.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_btn, new cjs.Rectangle(-77,14,157.3,35.3), null);


// stage content:
(lib.Launch_Omni_Version_01_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [176];
	// timeline functions:
	this.frame_176 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(176).call(this.frame_176).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(177));

	// sideBars_mc
	this.instance = new lib.sideBars_mc();
	this.instance.setTransform(318.65,521.45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(164));

	// beige_top
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93509E").s().p("A52EiIAApDMAztAAAIAAJDg");
	this.shape_1.setTransform(152.575,-22.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(177));

	// omni_logo
	this.instance_1 = new lib.omni_logo();
	this.instance_1.setTransform(150.4,37.85,0.2829,0.2829);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177));

	// Green_BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A1006B").s().p("AuIE+IAFp7IcMAFIAAJ2g");
	this.shape_2.setTransform(149.575,36.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(177));

	// cta_btn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_131 = new cjs.Graphics().p("AsJCqIAAlTIYTAAIAAFTg");
	var mask_graphics_134 = new cjs.Graphics().p("AsJCqIAAlTIYTAAIAAFTg");
	var mask_graphics_135 = new cjs.Graphics().p("AsOCrIAAlVIYdAAIAAFVg");
	var mask_graphics_136 = new cjs.Graphics().p("AsTCsIAAlXIYnAAIAAFXg");
	var mask_graphics_137 = new cjs.Graphics().p("AsYCtIAAlZIYwAAIAAFZg");
	var mask_graphics_138 = new cjs.Graphics().p("AsbCuIAAlbIY4AAIAAFbg");
	var mask_graphics_139 = new cjs.Graphics().p("AsgCvIAAldIZAAAIAAFdg");
	var mask_graphics_140 = new cjs.Graphics().p("AsjCvIAAldIZHAAIAAFdg");
	var mask_graphics_141 = new cjs.Graphics().p("AsmCwIAAlfIZNAAIAAFfg");
	var mask_graphics_142 = new cjs.Graphics().p("AspCwIAAlgIZTAAIAAFgg");
	var mask_graphics_143 = new cjs.Graphics().p("AssCxIAAlhIZZAAIAAFhg");
	var mask_graphics_144 = new cjs.Graphics().p("AsuCyIAAliIZdAAIAAFig");
	var mask_graphics_145 = new cjs.Graphics().p("AswCyIAAljIZhAAIAAFjg");
	var mask_graphics_146 = new cjs.Graphics().p("AsxCyIAAljIZjAAIAAFjg");
	var mask_graphics_147 = new cjs.Graphics().p("AsyCyIAAlkIZlAAIAAFkg");
	var mask_graphics_148 = new cjs.Graphics().p("AszCzIAAllIZnAAIAAFlg");
	var mask_graphics_149 = new cjs.Graphics().p("As0CzIAAllIZpAAIAAFlg");
	var mask_graphics_150 = new cjs.Graphics().p("Anff8IAAlmIZoAAIAAFmg");
	var mask_graphics_151 = new cjs.Graphics().p("AsuCyIAAliIZdAAIAAFig");
	var mask_graphics_152 = new cjs.Graphics().p("AsoCwIAAlgIZRAAIAAFgg");
	var mask_graphics_153 = new cjs.Graphics().p("AsjCvIAAleIZHAAIAAFeg");
	var mask_graphics_154 = new cjs.Graphics().p("AsfCvIAAlcIY+AAIAAFcg");
	var mask_graphics_155 = new cjs.Graphics().p("AsaCuIAAlbIY2AAIAAFbg");
	var mask_graphics_156 = new cjs.Graphics().p("AsXCtIAAlZIYvAAIAAFZg");
	var mask_graphics_157 = new cjs.Graphics().p("AsTCsIAAlXIYoAAIAAFXg");
	var mask_graphics_158 = new cjs.Graphics().p("AsRCrIAAlVIYjAAIAAFVg");
	var mask_graphics_159 = new cjs.Graphics().p("AsOCrIAAlVIYdAAIAAFVg");
	var mask_graphics_160 = new cjs.Graphics().p("AsMCrIAAlVIYZAAIAAFVg");
	var mask_graphics_161 = new cjs.Graphics().p("AsLCqIAAlTIYXAAIAAFTg");
	var mask_graphics_162 = new cjs.Graphics().p("AsKCqIAAlTIYVAAIAAFTg");
	var mask_graphics_163 = new cjs.Graphics().p("AsJCqIAAlTIYTAAIAAFTg");
	var mask_graphics_164 = new cjs.Graphics().p("AsJCqIAAlTIYTAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(131).to({graphics:mask_graphics_131,x:150.075,y:391.05}).wait(3).to({graphics:mask_graphics_134,x:150.075,y:391.05}).wait(1).to({graphics:mask_graphics_135,x:150.1,y:391.025}).wait(1).to({graphics:mask_graphics_136,x:150.075,y:391}).wait(1).to({graphics:mask_graphics_137,x:150.1,y:390.975}).wait(1).to({graphics:mask_graphics_138,x:150.1,y:390.95}).wait(1).to({graphics:mask_graphics_139,x:150.1,y:390.925}).wait(1).to({graphics:mask_graphics_140,x:150.1,y:390.925}).wait(1).to({graphics:mask_graphics_141,x:150.1,y:390.9}).wait(1).to({graphics:mask_graphics_142,x:150.1,y:390.9}).wait(1).to({graphics:mask_graphics_143,x:150.1,y:390.875}).wait(1).to({graphics:mask_graphics_144,x:150.125,y:390.85}).wait(1).to({graphics:mask_graphics_145,x:150.125,y:390.85}).wait(1).to({graphics:mask_graphics_146,x:150.125,y:390.825}).wait(1).to({graphics:mask_graphics_147,x:150.125,y:390.85}).wait(1).to({graphics:mask_graphics_148,x:150.125,y:390.825}).wait(1).to({graphics:mask_graphics_149,x:150.125,y:390.825}).wait(1).to({graphics:mask_graphics_150,x:116.0915,y:204.3602}).wait(1).to({graphics:mask_graphics_151,x:150.125,y:390.85}).wait(1).to({graphics:mask_graphics_152,x:150.125,y:390.9}).wait(1).to({graphics:mask_graphics_153,x:150.125,y:390.9}).wait(1).to({graphics:mask_graphics_154,x:150.1,y:390.95}).wait(1).to({graphics:mask_graphics_155,x:150.1,y:390.95}).wait(1).to({graphics:mask_graphics_156,x:150.075,y:390.975}).wait(1).to({graphics:mask_graphics_157,x:150.1,y:391}).wait(1).to({graphics:mask_graphics_158,x:150.075,y:391}).wait(1).to({graphics:mask_graphics_159,x:150.075,y:391.025}).wait(1).to({graphics:mask_graphics_160,x:150.075,y:391.025}).wait(1).to({graphics:mask_graphics_161,x:150.075,y:391.05}).wait(1).to({graphics:mask_graphics_162,x:150.075,y:391.05}).wait(1).to({graphics:mask_graphics_163,x:150.075,y:391.05}).wait(1).to({graphics:mask_graphics_164,x:150.075,y:391.05}).wait(13));

	// Layer_20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1LIGGC9IslVKg");
	this.shape_3.setTransform(53,362.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1LIGFC9IsjVKg");
	this.shape_4.setTransform(53.3,362.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.4,19.4,9.4).s().p("ApUJIIMk1LIGGC9IslVKg");
	this.shape_5.setTransform(54.15,362.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.4,19.4,9.4).s().p("ApVJIIMl1LIGFC9IsjVKg");
	this.shape_6.setTransform(55.55,362.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApUJIIMk1MIGFC+IsjVKg");
	this.shape_7.setTransform(57.55,363.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1MIGGC9IslVMg");
	this.shape_8.setTransform(60.125,364.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJJIMl1NIGGC9IslVNg");
	this.shape_9.setTransform(66.95,366.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJJIMl1OIGGC+IslVNg");
	this.shape_10.setTransform(71.25,367.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApVJJIMl1OIGGC9IslVOg");
	this.shape_11.setTransform(76.075,368.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.4,-9.5,19.5,9.4).s().p("ApVJKIMl1QIGGC+IslVPg");
	this.shape_12.setTransform(81.475,370.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApVJKIMl1QIGGC9IslVQg");
	this.shape_13.setTransform(87.475,372.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApWJLIMm1SIGGC+IskVRg");
	this.shape_14.setTransform(94,373.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJLIMn1TIGGC/IsmVSg");
	this.shape_15.setTransform(101.125,376.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.5,19.4,9.5).s().p("ApWJMIMm1VIGHC/IsmVUg");
	this.shape_16.setTransform(108.85,378.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJMIMn1WIGGC/IsmVWg");
	this.shape_17.setTransform(117.1,380.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJNIMn1YIGGC/IsmVXg");
	this.shape_18.setTransform(125.925,383.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApXJOIMo1aIGHC/IsnVag");
	this.shape_19.setTransform(135.325,385.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.5).s().p("ApXJPIMn1cIGIDAIsnVbg");
	this.shape_20.setTransform(145.3,388.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.5).s().p("ApXJPIMo1dIGHDAIsoVcg");
	this.shape_21.setTransform(155.7,391.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.5).s().p("ApXJQIMo1eIGHDAIsoVeg");
	this.shape_22.setTransform(165.675,394.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.5).s().p("ApYJRIMp1hIGIDBIspVgg");
	this.shape_23.setTransform(175.075,397.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.6).s().p("ApYJSIMp1iIGIDAIspVhg");
	this.shape_24.setTransform(183.9,400.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.5).s().p("ApYJSIMp1jIGIDAIspVjg");
	this.shape_25.setTransform(192.15,402.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.5,9.5).s().p("ApYJTIMp1lIGIDBIspVkg");
	this.shape_26.setTransform(199.875,404.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApYJTIMp1mIGIDBIspVmg");
	this.shape_27.setTransform(206.975,406.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJUIMq1nIGJDBIsqVmg");
	this.shape_28.setTransform(213.525,408.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.5,9.6).s().p("ApZJUIMq1oIGJDBIsqVog");
	this.shape_29.setTransform(219.525,410.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJVIMq1qIGJDCIsqVpg");
	this.shape_30.setTransform(224.925,411.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.5,9.6).s().p("ApZJVIMr1qIGIDBIsqVqg");
	this.shape_31.setTransform(229.75,413.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJVIMr1qIGIDBIsqVqg");
	this.shape_32.setTransform(234.025,414.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJWIMr1sIGIDCIsqVrg");
	this.shape_33.setTransform(237.725,415.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJWIMq1sIGJDCIsqVrg");
	this.shape_34.setTransform(240.875,416.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJWIMr1tIGIDCIsrVsg");
	this.shape_35.setTransform(243.45,417.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJWIMq1tIGKDCIssVtg");
	this.shape_36.setTransform(245.45,417.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApaJWIMs1tIGIDCIsrVtg");
	this.shape_37.setTransform(246.85,418.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJXIMq1uIGKDCIssVtg");
	this.shape_38.setTransform(247.7,418.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJXIMr1uIGIDCIsrVtg");
	this.shape_39.setTransform(248,418.6);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},131).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{x:60.125,y:364.175}}]},1).to({state:[{t:this.shape_8,p:{x:63.275,y:365.075}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(9));

	// cta_btn
	this.instance_2 = new lib.cta_btn();
	this.instance_2.setTransform(148.3,390.3,1,1,0,0,0,0,31);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({alpha:1},20).wait(78).to({regY:31.1,scaleX:1.0546,scaleY:1.0546,x:148.55,y:390.45},16,cjs.Ease.quadOut).to({regY:31,scaleX:1,scaleY:1,x:148.3,y:390.3},14,cjs.Ease.quadOut).wait(13));

	// Layer_18
	this.instance_3 = new lib.txt_15Off();
	this.instance_3.setTransform(151,314.05,1,1,0,0,0,-0.8,1.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111).to({_off:false},0).to({alpha:1},20).wait(46));

	// txt_youPaused
	this.instance_4 = new lib.txt_youPaused();
	this.instance_4.setTransform(149.3,304.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:1},20).wait(57).to({alpha:0},20).to({_off:true},1).wait(66));

	// txt_youPaused
	this.instance_5 = new lib.txt_nowPlay();
	this.instance_5.setTransform(149.3,304.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({alpha:1},20).wait(57).to({alpha:0},20).to({_off:true},1).wait(66));

	// Image_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3hUBMAAAgoBMAvDAAAMAAAAoBg");
	mask_1.setTransform(150.55,128.05);

	// Image_top
	this.instance_6 = new lib.pool_img_1();
	this.instance_6.setTransform(155.2,142.15,0.61,0.61,0,0,0,0.4,0.5);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.5,regY:0.6,scaleX:0.6129,scaleY:0.6129,y:142.2,alpha:1},13).to({regX:0.2,scaleX:0.65,scaleY:0.65,x:155.15,y:142.1},163).wait(1));

	// Image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");
	var mask_2_graphics_176 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:150.55,y:521.55}).wait(176).to({graphics:mask_2_graphics_176,x:150.55,y:521.55}).wait(1));

	// Layer_14
	this.instance_7 = new lib.golf_img_1();
	this.instance_7.setTransform(155.25,480.15,0.51,0.51,0,0,0,0.1,0.3);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.2,regY:0.4,scaleX:0.5129,scaleY:0.5129,x:155.3,y:480.2,alpha:1},13).to({regX:0.4,regY:0.5,scaleX:0.55,scaleY:0.55,x:155.25},163).wait(1));

	// Background
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_40.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(177));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(137.1,248.5,207.1,352.5);
// library properties:
lib.properties = {
	id: '8859C8DD51594D4288446DA309E3911B',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"golf_img.jpg", id:"golf_img"},
		{src:"pool_img.jpg", id:"pool_img"}
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
an.compositions['8859C8DD51594D4288446DA309E3911B'] = {
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