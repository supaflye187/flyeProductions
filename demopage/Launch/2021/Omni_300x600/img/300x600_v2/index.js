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



(lib.bike_img = function() {
	this.initialize(img.bike_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1008,672);


(lib.birthday_img = function() {
	this.initialize(img.birthday_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,339);


(lib.OutsideGolf_img = function() {
	this.initialize(img.OutsideGolf_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,395,317);


(lib.putt_img = function() {
	this.initialize(img.putt_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,339);// helper functions:

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
	this.shape.graphics.f("#40748E").s().p("AGpBWIATgbQAaAVAnAAQAtAAAAgeQAAgNgKgHQgLgIgfgJQgogLgRgNQgSgPAAgYQAAgdAVgQQAWgRAnAAQA4AAAYAWIgUAdQgWgSgmAAQgrAAAAAbQAAALALAHQALAHAeAIQApALARAPQASAPAAAZQAAAdgUASQgXATgpAAQg6AAgbgbgADeBWQgZgbAAgrIAAh7IAjAAIAAB7QAAAcAPAQQAQATAcAAQAcAAAQgTQAOgQAAgcIAAh7IAjAAIAAB7QAAArgYAbQgZAbgsAAQgrAAgagbgAoaBWQgZgbAAgrIAAh7IAjAAIAAB7QAAAcAPAQQAQATAcAAQAcAAAQgTQAOgQAAgcIAAh7IAjAAIAAB7QAAArgYAbQgZAbgsAAQgrAAgagbgAslBQQgfggAAgwQAAgvAfggQAgghAyAAQA0AAAfAhQAfAgAAAvQAAAwgfAgQgfAhg0AAQgyAAggghgAsKg3QgVAWAAAhQAAAiAVAWQAWAWAhAAQAjAAAVgWQAVgWAAgiQAAghgVgWQgVgXgjAAQghAAgWAXgANZBsIAAjXIBQAAQA1AAAfAeQAfAdAAAwQAAAwgfAeQgfAeg1AAgAN8BMIArAAQAkAAAWgUQAXgUAAgkQAAgjgXgVQgWgUgkAAIgrAAgAKJBsIAAjXICkAAIAAAfIiAAAIAAA/IBtAAIAAAdIhtAAIAAA8ICAAAIAAAggACDBsIgQghIhwAAIgPAhIgpAAIBsjXIAHAAIBtDXgABkAuIgCgEIgmhTIgCAAIgnBTIgCAEIBTAAgAjvBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgYAVQgYATgpAAIg4AAIAABDgAjLAKIA5AAQA0AAAAgrQAAgVgOgLQgOgLgYAAIg5AAgAvJBsIAAhTIhSiEIApAAIAzBUIAGANIAEAAIAGgNIAzhUIApAAIhSCEIAABTg");
	this.shape.setTransform(-0.925,-2.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_youPaused, new cjs.Rectangle(-106.1,-14.2,210.39999999999998,22.5), null);


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
	this.shape.graphics.f("#40748E").s().p("ApBBQQgfggAAgwQAAgvAfggQAgghAyAAQA0AAAfAhQAfAgAAAvQAAAwgfAgQgfAhg0AAQgyAAggghgAomg3QgVAWAAAhQAAAiAVAWQAWAWAhAAQAjAAAVgWQAVgWAAgiQAAghgVgWQgVgXgjAAQghAAgWAXgALcBsIAAhTIhSiEIApAAIAzBUIAGANIAEAAIAGgNIAzhUIApAAIhSCEIAABTgAJ5BsIgQghIhwAAIgQAhIgoAAIAAgBIBtjWIAGAAIBuDXgAJbAuIgCgEIgnhTIgCAAIgnBTIgCAEIBUAAgAEYBsIAAjXIAjAAIAAC3IB4AAIAAAggAAzBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgYAVQgYATgpAAIg4AAIAABDgABXAKIA5AAQA0AAAAgrQAAgVgOgLQgOgLgYAAIg5AAgAikBsIgtiRIgCAAIguCRIgRAAIhSjXIAlAAIAzCRIADAAIAwiRIAPAAIAvCRIADAAIAyiRIAmAAIhSDXgAqYBsIiViQIAACQIgkAAIAAjXIAKAAICVCNIAAiNIAkAAIAADXg");
	this.shape.setTransform(1.325,27.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_nowPlay, new cjs.Rectangle(-83.6,16.1,169.89999999999998,22.5), null);


(lib.putt_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.putt_img();
	this.instance.setTransform(-155.35,-103.45,0.6105,0.6105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.putt_img_1, new cjs.Rectangle(-155.3,-103.4,310.70000000000005,206.9), null);


(lib.pool_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bike_img();
	this.instance.setTransform(-339.65,-244.75,0.6733,0.6733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pool_img, new cjs.Rectangle(-339.6,-244.7,678.6,452.4), null);


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


(lib.golf_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.OutsideGolf_img();
	this.instance.setTransform(-309.75,-245.8,1.843,1.843);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.golf_img, new cjs.Rectangle(-309.7,-245.8,728,584.3), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#40748E").ss(1,1,1).p("AsIilIYRAAIAAFLI4RAAg");
	this.shape.setTransform(1.8,31.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#40748E").s().p("AEOAlQgOgOAAgXQAAgVAOgPQAPgQAXAAQAZAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgZAAQgXAAgPgQgAEbgZQgKALAAAOQAAAQAKAKQAKALAPAAQAQAAALgLQAKgKAAgQQAAgOgKgLQgLgKgQAAQgPAAgKAKgAhcAlQgOgOAAgXQAAgVAOgPQAQgQAXAAQAYAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgYAAQgXAAgQgQgAhPgZQgJALAAAOQAAAQAJAKQAKALAQAAQAQAAAKgLQAKgKAAgQQAAgOgKgLQgKgKgQAAQgQAAgKAKgAjPAlQgOgOAAgXQAAgVAOgPQAPgQAYAAQAYAAAPAQQAOAPAAAVQAAAXgOAOQgPAQgYAAQgYAAgPgQgAjCgZQgJALAAAOQAAAQAJAKQAKALAQAAQAQAAAKgLQAKgKAAgQQAAgOgKgLQgKgKgQAAQgQAAgKAKgAG/AzIgVhDIAAAAIgWBDIgIAAIgmhkIARAAIAYBDIABAAIAXhDIAHAAIAWBDIABAAIAXhDIASAAIgmBkgADrAzIhGhDIAABDIgQAAIAAhkIAEAAIBGBBIAAhBIARAAIAABkgABQAzIgfgvIgUAUIAAAbIgQAAIAAhkIAQAAIAAAyIAzgyIAUAAIAAACIgoAoIAoA4IAAACgAlCAzIAAhkIAuAAQASAAAKAHQAJAHAAANQAAAPgOAGIAAABQARAFAAARQAAAOgKAIQgKAHgSAAgAkyAkIAhAAQAIAAAGgEQAGgEAAgHQAAgHgGgEQgFgEgIAAIgiAAgAkygGIAeAAQAJAAAFgEQAGgEAAgGQAAgPgUAAIgeAAgAntgoQA1ApACAAIg3AtgAm2ABIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(2.675,30.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsICmIAAlLIYRAAIAAFLgAEWguQgOAPABAWQgBAWAOAOQAQAQAXAAQAZAAAOgQQAPgOAAgWQAAgWgPgPQgOgQgZAAQgXAAgQAQgAhTguQgOAPAAAWQAAAWAOAOQAQAQAWAAQAZAAAPgQQANgOAAgWQAAgWgNgPQgPgQgZAAQgWAAgQAQgAjGguQgOAPAAAWQAAAWAOAOQAPAQAYAAQAYAAAOgQQAPgOAAgWQAAgWgPgPQgOgQgYAAQgYAAgPAQgAGzgaIAVBDIAIAAIAnhkIgSAAIgXBDIgBAAIgXhDIgHAAIgWBDIgBAAIgYhDIgSAAIAnBkIAHAAIAXhDgAD0ApIAEAAIAAhkIgQAAIAABBIhGhBIgFAAIAABkIARAAIAAhDgABZApIAUAAIAAgCIgog4IAogoIAAgCIgUAAIgzAzIAAgzIgQAAIAABkIAQAAIAAgbIAUgTgAk5ApIAwAAQASAAAJgHQALgIAAgOQAAgQgSgGIAAgBQAOgGABgPQgBgNgIgHQgKgHgSAAIguAAgAnkAkIA3gsIAAAAIAAAAQgCAAg1gqgAEkAQQgKgKAAgPQAAgPAKgLQAKgKAPAAQAQAAALAKQAJALABAPQgBAPgJAKQgLALgQAAQgPAAgKgLgAhGAQQgKgKABgPQgBgPAKgLQAKgKAPAAQARAAAKAKQAKALAAAPQAAAPgKAKQgKALgRAAQgPAAgKgLgAi5AQQgJgKAAgPQAAgPAJgLQAKgKAQAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgQAAgKgLgAkpAaIAAgdIAhAAQAJAAAFADQAGAEgBAHQABAHgGAEQgGAEgIAAgAkpgQIAAgdIAeAAQAUAAAAAPQgBAGgFAEQgFAEgJAAg");
	this.shape_2.setTransform(1.8,31.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_btn, new cjs.Rectangle(-76.8,14.2,157.3,35.2), null);


(lib.birthday_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.birthday_img();
	this.instance.setTransform(-185.45,-123.5,0.7288,0.7288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birthday_img_1, new cjs.Rectangle(-185.4,-123.5,370.9,247.1), null);


// stage content:
(lib.Launch_Omni_Version_02_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [185];
	// timeline functions:
	this.frame_185 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(185).call(this.frame_185).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(186));

	// beige_top
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E9EBD").s().p("A52EiIAApDMAztAAAIAAJDg");
	this.shape_1.setTransform(152.575,-21.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(186));

	// omni_logo
	this.instance = new lib.omni_logo();
	this.instance.setTransform(150.4,37.85,0.2829,0.2829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186));

	// Green_BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40748E").s().p("AuIFAIAAp/IcRAEIAAJ7g");
	this.shape_2.setTransform(149.575,37.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(186));

	// Green_BG
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(64,116,142,0)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_3.setTransform(315.525,482.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(64,116,142,0.102)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_4.setTransform(315.525,482.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(64,116,142,0.2)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_5.setTransform(315.525,482.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(64,116,142,0.302)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_6.setTransform(315.525,482.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(64,116,142,0.4)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_7.setTransform(315.525,482.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(64,116,142,0.502)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_8.setTransform(315.525,482.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(64,116,142,0.6)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_9.setTransform(315.525,482.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(64,116,142,0.698)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_10.setTransform(315.525,482.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(64,116,142,0.8)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_11.setTransform(315.525,482.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(64,116,142,0.898)").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_12.setTransform(315.525,482.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40748E").s().p("AjgGLIAAsVIHBAEIAAMRg");
	this.shape_13.setTransform(315.525,482.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},75).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(101));

	// beige_bottom
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(94,158,189,0)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_14.setTransform(315.525,560.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(94,158,189,0.102)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_15.setTransform(315.525,560.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(94,158,189,0.2)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_16.setTransform(315.525,560.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(94,158,189,0.302)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_17.setTransform(315.525,560.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(94,158,189,0.4)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_18.setTransform(315.525,560.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(94,158,189,0.502)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_19.setTransform(315.525,560.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(94,158,189,0.6)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_20.setTransform(315.525,560.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(94,158,189,0.698)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_21.setTransform(315.525,560.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(94,158,189,0.8)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_22.setTransform(315.525,560.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(94,158,189,0.898)").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_23.setTransform(315.525,560.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E9EBD").s().p("AjgGLIAAsVIHBAAIAAMVg");
	this.shape_24.setTransform(315.525,560.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},75).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(101));

	// Green_BG
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(64,116,142,0)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_25.setTransform(-19.45,482.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(64,116,142,0.051)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_26.setTransform(-19.45,482.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(64,116,142,0.102)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_27.setTransform(-19.45,482.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(64,116,142,0.149)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_28.setTransform(-19.45,482.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(64,116,142,0.2)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_29.setTransform(-19.45,482.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(64,116,142,0.251)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_30.setTransform(-19.45,482.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(64,116,142,0.302)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_31.setTransform(-19.45,482.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(64,116,142,0.349)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_32.setTransform(-19.45,482.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(64,116,142,0.4)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_33.setTransform(-19.45,482.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(64,116,142,0.451)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_34.setTransform(-19.45,482.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(64,116,142,0.502)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_35.setTransform(-19.45,482.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(64,116,142,0.549)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_36.setTransform(-19.45,482.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(64,116,142,0.6)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_37.setTransform(-19.45,482.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(64,116,142,0.651)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_38.setTransform(-19.45,482.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(64,116,142,0.698)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_39.setTransform(-19.45,482.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(64,116,142,0.749)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_40.setTransform(-19.45,482.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(64,116,142,0.8)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_41.setTransform(-19.45,482.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(64,116,142,0.851)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_42.setTransform(-19.45,482.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(64,116,142,0.898)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_43.setTransform(-19.45,482.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(64,116,142,0.949)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_44.setTransform(-19.45,482.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#40748E").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_45.setTransform(-19.45,482.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(83,130,153,0.898)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_46.setTransform(-19.45,482.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(102,144,165,0.8)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_47.setTransform(-19.45,482.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(121,158,176,0.698)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_48.setTransform(-19.45,482.175);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(140,172,187,0.6)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_49.setTransform(-19.45,482.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(160,186,199,0.502)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_50.setTransform(-19.45,482.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(179,199,210,0.4)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_51.setTransform(-19.45,482.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(198,213,221,0.302)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_52.setTransform(-19.45,482.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(217,227,232,0.2)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_53.setTransform(-19.45,482.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(236,241,244,0.102)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_54.setTransform(-19.45,482.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0)").s().p("AkIGLIAAsVIIRAEIAAMRg");
	this.shape_55.setTransform(-19.45,482.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},55).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(101));

	// beige_bottom
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(64,116,142,0)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_56.setTransform(-19.425,560.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(66,118,144,0.051)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_57.setTransform(-19.425,560.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(67,120,147,0.102)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_58.setTransform(-19.425,560.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(68,122,149,0.149)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_59.setTransform(-19.425,560.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(70,124,151,0.2)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_60.setTransform(-19.425,560.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(72,127,154,0.251)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_61.setTransform(-19.425,560.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(73,129,156,0.302)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_62.setTransform(-19.425,560.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(75,131,158,0.349)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_63.setTransform(-19.425,560.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(76,133,161,0.4)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_64.setTransform(-19.425,560.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(77,135,163,0.451)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_65.setTransform(-19.425,560.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(79,137,166,0.502)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_66.setTransform(-19.425,560.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(81,139,168,0.549)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_67.setTransform(-19.425,560.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(82,141,170,0.6)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_68.setTransform(-19.425,560.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(83,143,173,0.651)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_69.setTransform(-19.425,560.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(85,145,175,0.698)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_70.setTransform(-19.425,560.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(87,148,177,0.749)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_71.setTransform(-19.425,560.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(88,150,180,0.8)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_72.setTransform(-19.425,560.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(90,152,182,0.851)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_73.setTransform(-19.425,560.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(91,154,184,0.898)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_74.setTransform(-19.425,560.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(92,156,187,0.949)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_75.setTransform(-19.425,560.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5E9EBD").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_76.setTransform(-19.425,560.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(110,168,196,0.898)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_77.setTransform(-19.425,560.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(126,177,202,0.8)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_78.setTransform(-19.425,560.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(142,187,209,0.698)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_79.setTransform(-19.425,560.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(158,197,215,0.6)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_80.setTransform(-19.425,560.625);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(175,207,222,0.502)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_81.setTransform(-19.425,560.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(191,216,229,0.4)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_82.setTransform(-19.425,560.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(207,226,235,0.302)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_83.setTransform(-19.425,560.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(223,236,242,0.2)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_84.setTransform(-19.425,560.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(239,245,248,0.102)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_85.setTransform(-19.425,560.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0)").s().p("AkHGLIAAsVIIPAAIAAMVg");
	this.shape_86.setTransform(-19.425,560.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_76}]},55).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).wait(101));

	// cta_btn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_139 = new cjs.Graphics().p("AsLCvIAAldIYXAAIAAFdg");
	var mask_graphics_142 = new cjs.Graphics().p("AsLCvIAAldIYXAAIAAFdg");
	var mask_graphics_143 = new cjs.Graphics().p("AsMCvIAAldIYZAAIAAFdg");
	var mask_graphics_144 = new cjs.Graphics().p("AsNCwIAAlfIYbAAIAAFfg");
	var mask_graphics_145 = new cjs.Graphics().p("AsQCwIAAlfIYhAAIAAFfg");
	var mask_graphics_146 = new cjs.Graphics().p("AsTCwIAAlfIYnAAIAAFfg");
	var mask_graphics_147 = new cjs.Graphics().p("AsYCxIAAlhIYxAAIAAFhg");
	var mask_graphics_148 = new cjs.Graphics().p("AseCyIAAljIY9AAIAAFjg");
	var mask_graphics_149 = new cjs.Graphics().p("AskCzIAAllIZJAAIAAFlg");
	var mask_graphics_150 = new cjs.Graphics().p("AssC0IAAlnIZZAAIAAFng");
	var mask_graphics_151 = new cjs.Graphics().p("As0C2IAAlrIZpAAIAAFrg");
	var mask_graphics_152 = new cjs.Graphics().p("As+C3IAAltIZ9AAIAAFtg");
	var mask_graphics_153 = new cjs.Graphics().p("AtIC5IAAlxIaSAAIAAFxg");
	var mask_graphics_154 = new cjs.Graphics().p("AtUC7IAAl1IapAAIAAF1g");
	var mask_graphics_155 = new cjs.Graphics().p("AthC9IAAl5IbDAAIAAF5g");
	var mask_graphics_156 = new cjs.Graphics().p("AtvC/IAAl9IbfAAIAAF9g");
	var mask_graphics_157 = new cjs.Graphics().p("At9DCIAAmDIb7AAIAAGDg");
	var mask_graphics_158 = new cjs.Graphics().p("AuNDEIAAmHIcbAAIAAGHg");
	var mask_graphics_159 = new cjs.Graphics().p("At7DBIAAmBIb3AAIAAGBg");
	var mask_graphics_160 = new cjs.Graphics().p("AtqC/IAAl9IbVAAIAAF9g");
	var mask_graphics_161 = new cjs.Graphics().p("AtcC8IAAl3Ia5AAIAAF3g");
	var mask_graphics_162 = new cjs.Graphics().p("AtOC6IAAlzIacAAIAAFzg");
	var mask_graphics_163 = new cjs.Graphics().p("AtBC4IAAlvIaDAAIAAFvg");
	var mask_graphics_164 = new cjs.Graphics().p("As2C2IAAlrIZtAAIAAFrg");
	var mask_graphics_165 = new cjs.Graphics().p("AssC0IAAlnIZZAAIAAFng");
	var mask_graphics_166 = new cjs.Graphics().p("AsjCzIAAllIZHAAIAAFlg");
	var mask_graphics_167 = new cjs.Graphics().p("AscCxIAAlhIY5AAIAAFhg");
	var mask_graphics_168 = new cjs.Graphics().p("AsWCxIAAlhIYtAAIAAFhg");
	var mask_graphics_169 = new cjs.Graphics().p("AsRCwIAAlfIYjAAIAAFfg");
	var mask_graphics_170 = new cjs.Graphics().p("AsOCwIAAlfIYdAAIAAFfg");
	var mask_graphics_171 = new cjs.Graphics().p("AsMCvIAAldIYZAAIAAFdg");
	var mask_graphics_172 = new cjs.Graphics().p("AsLCvIAAldIYXAAIAAFdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_graphics_139,x:150.325,y:391.05}).wait(3).to({graphics:mask_graphics_142,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_143,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_144,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_145,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_146,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_147,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_148,x:150.35,y:391.05}).wait(1).to({graphics:mask_graphics_149,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_150,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_151,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_152,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_153,x:150.35,y:391.05}).wait(1).to({graphics:mask_graphics_154,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_155,x:150.35,y:391.05}).wait(1).to({graphics:mask_graphics_156,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_157,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_158,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_159,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_160,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_161,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_162,x:150.35,y:391.075}).wait(1).to({graphics:mask_graphics_163,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_164,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_165,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_166,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_167,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_168,x:150.325,y:391.075}).wait(1).to({graphics:mask_graphics_169,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_170,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_171,x:150.325,y:391.05}).wait(1).to({graphics:mask_graphics_172,x:150.325,y:391.05}).wait(14));

	// Layer_20
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApUJHIMk1KIGGC9IslVKg");
	this.shape_87.setTransform(49.5,363.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1LIGFC9IsjVKg");
	this.shape_88.setTransform(49.8,363.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.5,19.3,9.3).s().p("ApVJHIMl1KIGFC9IsjVKg");
	this.shape_89.setTransform(50.7,363.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.9,-9.5,19,9.3).s().p("ApUJIIMk1LIGFC9IskVKg");
	this.shape_90.setTransform(52.25,363.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-20.1,-9.6,18.8,9.2).s().p("ApVJHIMl1LIGGC9IslVLg");
	this.shape_91.setTransform(54.375,364.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-20.5,-9.7,18.4,9.2).s().p("ApVJIIMl1MIGGC+IslVLg");
	this.shape_92.setTransform(57.125,364.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-21,-9.8,17.9,9.1).s().p("ApVJIIMl1MIGGC+IslVLg");
	this.shape_93.setTransform(60.475,365.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-21.5,-9.9,17.4,9).s().p("ApVJJIMl1NIGGC9IslVNg");
	this.shape_94.setTransform(64.425,366.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-22.2,-10.1,16.7,8.8).s().p("ApVJJIMl1OIGGC+IslVNg");
	this.shape_95.setTransform(69,367.825);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-22.8,-10.2,16.1,8.7).s().p("ApVJJIMl1OIGGC9IslVOg");
	this.shape_96.setTransform(74.175,369.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-23.6,-10.4,15.3,8.5).s().p("ApVJKIMl1QIGGC+IslVPg");
	this.shape_97.setTransform(79.975,370.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-24.5,-10.6,14.4,8.3).s().p("ApWJKIMm1RIGGC+IslVRg");
	this.shape_98.setTransform(86.35,372.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-25.5,-10.8,13.5,8.1).s().p("ApWJLIMn1SIGFC+IslVRg");
	this.shape_99.setTransform(93.35,373.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-26.5,-11,12.5,8).s().p("ApWJMIMm1UIGHC+IsmVTg");
	this.shape_100.setTransform(100.975,375.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-27.7,-11.3,11.3,7.7).s().p("ApWJMIMn1VIGGC/IsmVUg");
	this.shape_101.setTransform(109.2,377.575);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-28.9,-11.5,10.1,7.5).s().p("ApWJNIMn1WIGGC+IsmVWg");
	this.shape_102.setTransform(118.025,379.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-30.2,-11.8,8.9,7.2).s().p("ApWJNIMn1YIGGDAIsmVXg");
	this.shape_103.setTransform(127.475,382);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-31.6,-12.1,7.5,6.9).s().p("ApXJOIMo1ZIGHC/IsnVYg");
	this.shape_104.setTransform(137.525,384.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-33,-12.4,6,6.6).s().p("ApXJOIMn1aIGIC/IsoVag");
	this.shape_105.setTransform(148.2,387);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-34.6,-12.8,4.5,6.3).s().p("ApXJPIMo1cIGHC/IsoVcg");
	this.shape_106.setTransform(159.3,389.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-36.1,-13.1,3,6).s().p("ApXJQIMo1fIGHDAIsoVfg");
	this.shape_107.setTransform(169.975,392.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-37.4,-13.4,1.7,5.8).s().p("ApYJRIMp1gIGIC/IspVgg");
	this.shape_108.setTransform(180.025,394.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-38.7,-13.7,0.4,5.5).s().p("ApYJSIMp1jIGIDBIspVig");
	this.shape_109.setTransform(189.475,397);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-40,-13.9,-0.8,5.3).s().p("ApYJSIMp1jIGIDAIspVjg");
	this.shape_110.setTransform(198.3,399.125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-41.1,-14.2,-1.9,5).s().p("ApYJTIMp1lIGIDBIspVkg");
	this.shape_111.setTransform(206.525,401.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-42.1,-14.4,-3,4.9).s().p("ApZJTIMq1mIGJDBIsqVmg");
	this.shape_112.setTransform(214.15,402.975);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-43.1,-14.6,-3.9,4.7).s().p("ApYJUIMp1nIGJDBIsqVmg");
	this.shape_113.setTransform(221.15,404.675);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-44,-14.8,-4.8,4.5).s().p("ApZJUIMq1oIGJDBIsqVog");
	this.shape_114.setTransform(227.525,406.225);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-44.8,-15,-5.6,4.3).s().p("ApZJVIMq1qIGJDCIsqVpg");
	this.shape_115.setTransform(233.325,407.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-45.5,-15.1,-6.3,4.2).s().p("ApZJVIMr1qIGIDBIsrVqg");
	this.shape_116.setTransform(238.5,408.875);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-46.1,-15.3,-6.9,4).s().p("ApZJVIMq1rIGJDCIsqVrg");
	this.shape_117.setTransform(243.075,410);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-46.6,-15.4,-7.4,3.9).s().p("ApZJVIMr1rIGIDBIsqVsg");
	this.shape_118.setTransform(247.025,410.95);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-47.1,-15.5,-7.8,3.8).s().p("ApZJWIMr1sIGIDBIsqVsg");
	this.shape_119.setTransform(250.375,411.775);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-47.5,-15.6,-8.2,3.8).s().p("ApZJWIMq1sIGJDBIsqVtg");
	this.shape_120.setTransform(253.125,412.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-47.8,-15.6,-8.5,3.7).s().p("ApZJWIMr1tIGJDCIssVtg");
	this.shape_121.setTransform(255.25,412.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-48,-15.7,-8.8,3.7).s().p("ApZJWIMq1tIGKDCIsrVtg");
	this.shape_122.setTransform(256.8,413.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-48.1,-15.7,-8.9,3.7).s().p("ApZJWIMq1tIGKDCIsrVtg");
	this.shape_123.setTransform(257.7,413.525);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-48.2,-15.7,-8.9,3.6).s().p("ApaJXIMr1uIGJDCIsqVtg");
	this.shape_124.setTransform(258,413.6);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87}]},139).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).wait(10));

	// cta_btn
	this.instance_1 = new lib.cta_btn();
	this.instance_1.setTransform(148.3,390.3,1,1,0,0,0,0,31);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},20).wait(8).to({scaleX:1.1727,scaleY:1.1727,x:148.35},16,cjs.Ease.quadIn).to({scaleX:1,scaleY:1,x:148.3},14,cjs.Ease.quadOut).wait(14));

	// txt_youPaused
	this.instance_2 = new lib.txt_youPaused();
	this.instance_2.setTransform(149.3,304.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({alpha:1},20).wait(146));

	// Image_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3hUGMAAAgoKMAvDAAAMAAAAoKg");
	mask_1.setTransform(150.55,127.55);

	// Image_top
	this.instance_3 = new lib.birthday_img_1();
	this.instance_3.setTransform(145.1,134.05,1.0539,1.0539);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},20).wait(55).to({alpha:0},20).to({_off:true},1).wait(90));

	// Image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:150.55,y:521.55}).wait(75).to({graphics:mask_2_graphics_75,x:150.55,y:521.55}).wait(111));

	// Layer_14
	this.instance_4 = new lib.putt_img_1();
	this.instance_4.setTransform(151.25,538.15,1.1353,1.1353);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},20).wait(55).to({alpha:0},20).to({_off:true},1).wait(90));

	// Txt_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_55 = new cjs.Graphics().p("AzmDmIAAnLMAnOAAAIAAHLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_3_graphics_55,x:150.55,y:342.075}).wait(131));

	// txt_youPaused
	this.instance_5 = new lib.txt_nowPlay();
	this.instance_5.setTransform(149.3,268.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).wait(1).to({regX:1.3,regY:27.3,x:150.6,y:296.1},0).wait(1).to({y:296.3},0).wait(1).to({y:296.65},0).wait(1).to({y:297.15},0).wait(1).to({y:297.7},0).wait(1).to({y:298.45},0).wait(1).to({y:299.35},0).wait(1).to({y:300.35},0).wait(1).to({y:301.55},0).wait(1).to({y:302.9},0).wait(1).to({y:304.35},0).wait(1).to({y:306},0).wait(1).to({y:307.75},0).wait(1).to({y:309.65},0).wait(1).to({y:311.6},0).wait(1).to({y:313.55},0).wait(1).to({y:315.5},0).wait(1).to({y:317.45},0).wait(1).to({y:319.3},0).wait(1).to({regX:0,regY:0,x:149.3,y:293.75},0).wait(1).to({regX:1.3,regY:27.3,x:150.6,y:322.1,alpha:0.099},0).wait(1).to({y:323.15,alpha:0.1929},0).wait(1).to({y:324.1,alpha:0.2814},0).wait(1).to({y:325,alpha:0.3643},0).wait(1).to({y:325.85,alpha:0.4416},0).wait(1).to({y:326.65,alpha:0.5134},0).wait(1).to({y:327.35,alpha:0.5795},0).wait(1).to({y:328.05,alpha:0.6402},0).wait(1).to({y:328.65,alpha:0.6956},0).wait(1).to({y:329.2,alpha:0.7458},0).wait(1).to({y:329.7,alpha:0.7909},0).wait(1).to({y:330.15,alpha:0.8312},0).wait(1).to({y:330.5,alpha:0.8668},0).wait(1).to({y:330.85,alpha:0.8979},0).wait(1).to({y:331.15,alpha:0.9247},0).wait(1).to({y:331.4,alpha:0.9474},0).wait(1).to({y:331.6,alpha:0.9661},0).wait(1).to({y:331.75,alpha:0.981},0).wait(1).to({y:331.9,alpha:0.9922},0).wait(1).to({regX:0,regY:0,x:149.3,y:304.7,alpha:1},0).wait(91));

	// Image_mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_49 = new cjs.Graphics().p("A3hUBMAAAgoBMAvDAAAMAAAAoBg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_4_graphics_49,x:150.55,y:128.05}).wait(137));

	// Image_top
	this.instance_6 = new lib.pool_img();
	this.instance_6.setTransform(155.25,142.1,0.57,0.57,0,0,0,0.4,0.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({regX:0.2,regY:0.5,scaleX:0.67,scaleY:0.67,x:155.15,y:142.15},134).wait(3));

	// Image_mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_49 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_5_graphics_49,x:150.55,y:521.55}).wait(137));

	// Layer_14
	this.instance_7 = new lib.golf_img();
	this.instance_7.setTransform(155.25,480.15,0.46,0.46,0,0,0,0,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({regX:0.2,regY:0.4,scaleX:0.58,scaleY:0.58,x:155.2,y:480.25},134).wait(3));

	// Background
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_125.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(186));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(104.1,249,233.9,352);
// library properties:
lib.properties = {
	id: '8859C8DD51594D4288446DA309E3911B',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bike_img.jpg", id:"bike_img"},
		{src:"birthday_img.jpg", id:"birthday_img"},
		{src:"OutsideGolf_img.jpg", id:"OutsideGolf_img"},
		{src:"putt_img.jpg", id:"putt_img"}
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