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



(lib.epson_logo = function() {
	this.initialize(img.epson_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,42);


(lib.printerScreen = function() {
	this.initialize(img.printerScreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);


(lib.receiptImage_03 = function() {
	this.initialize(img.receiptImage_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);


(lib.receiptImage_04 = function() {
	this.initialize(img.receiptImage_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);


(lib.receiptPaper_01 = function() {
	this.initialize(img.receiptPaper_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,357);


(lib.receiptPaper_02 = function() {
	this.initialize(img.receiptPaper_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,182);


(lib.receiptPaper_03 = function() {
	this.initialize(img.receiptPaper_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,158);


(lib.receiptPaper_04 = function() {
	this.initialize(img.receiptPaper_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,329);


(lib.receiptPaper_05 = function() {
	this.initialize(img.receiptPaper_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,233);


(lib.receiptPrinter_01 = function() {
	this.initialize(img.receiptPrinter_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,341);


(lib.receiptPrinter_02 = function() {
	this.initialize(img.receiptPrinter_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,171);


(lib.shaq_endFrame = function() {
	this.initialize(img.shaq_endFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,260);


(lib.shaq_image_01 = function() {
	this.initialize(img.shaq_image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);


(lib.shaq_image_02 = function() {
	this.initialize(img.shaq_image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);


(lib.shaq_image_03 = function() {
	this.initialize(img.shaq_image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,90);// helper functions:

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


(lib.txt_cake = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(334.2305,-294.1583,0.4991,0.4991);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cake, new cjs.Rectangle(-309,-310,681.2,386), null);


(lib.receipt_05 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPaper_05();
	this.instance.setTransform(-132,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_05, new cjs.Rectangle(-132,0,132,233), null);


(lib.receipt_04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPaper_04();
	this.instance.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_04, new cjs.Rectangle(-150,0,150,329), null);


(lib.receipt_03 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPaper_03();
	this.instance.setTransform(-206,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_03, new cjs.Rectangle(-206,0,206,158), null);


(lib.receipt_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPaper_02();
	this.instance.setTransform(-192,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_02, new cjs.Rectangle(-192,0,192,182), null);


(lib.receipt_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPaper_01();
	this.instance.setTransform(-141,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_01, new cjs.Rectangle(-141,0,141,357), null);


(lib.txt_RRScanners = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#25317E").s().p("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");
	this.shape.setTransform(222.725,-87.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AHXBxQgMgEgHgHQgGgHgEgKQgCgKAAgMIAAgGIAnAAIAAAGQgBAMAHAGQAFAHALAAQALAAAFgFQAHgFAAgLQgBgIgEgEQgFgEgHgDIgegLQgSgGgJgLQgIgMAAgSQgBgJAEgKQADgIAIgHQAGgIANgEQAMgEARAAQAdAAAOAMQAOANAAAXIAAAHIgmAAQgBgNgEgGQgEgGgLAAQgIAAgGAFQgHADAAAJQABAHAEAFQADAEALADIAaAJQAVAIAJAKQAIAMAAATQAAAOgFAJQgFALgHAGQgKAGgLADQgLADgOABQgSAAgNgEgADhBtQgNgJgGgMQgHgNgBgRIgCgfQAAgSADgOQACgPAHgNQAHgMANgIQAOgHAWAAQATAAAMAGQANAHAGAKQAHALADAQQABAQAAASIAAAKIhVAAIABAdIAEAMQACAGAEADQAFAEAFAAQALAAAGgJQAEgHACgQIAoAAQgCAegOAPQgPAQgfAAQgYgBgNgHgAD7gbQgEADgCAEIgEALIgBASIAsAAIgBgRIgDgMQgCgFgFgDQgEgCgHAAQgGAAgFADgAjuBwQgHgEgEgGQgFgHgDgJQgCgIAAgKQAAgLADgJQADgJAEgGQAGgGAHgEQAIgFAMgCIAYgHQAKgCAEgFQAEgDgBgJQAAgJgDgGQgFgFgMAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQgBgOAFgKQAGgLAGgFQAJgHALgCQAKgDAMAAQAVAAALADQANAFAGAGQAHAIACAJQACAKAAALIABBrIAFAOIgqAAIgGgSIAAAAQgIAOgKADQgJAEgRABQgKgBgJgEgAi4AhIgKAEQgMACgGAIQgGAFAAAMQAAAKAEAHQAEAHAIAAIAKgCQAEgBAEgDQAEgEADgEQACgFAAgIIAAghgAlvBwQgLgEgIgJQgIgLgFgRQgEgRAAgaQABgaAFgQQAEgRAKgLQAJgJAMgFQANgEAPAAQAeAAAQASQAPARAAAdIgpAAIgBgLIgEgKQgCgFgDgDQgEgEgGAAQgIAAgGAEQgEADgDAIQgCAGgBALIAAA0QABAMACAHQACAHAFADQAFAEAHAAQALAAAFgKQAFgJABgVIApAAQAAAigPARQgPARgjABQgRgBgMgEgAojBkQgRgRAAggIAAgJIAtAAIABAVQABAHAEAFQADAEAHADQAFACAJAAQALAAAHgHQAJgHAAgOQAAgHgCgHQgCgFgFgEQgEgFgIgDIgTgHQgPgGgLgGQgLgGgIgGQgHgJgDgKQgEgLAAgOQAAggASgRQAUgQAfAAQAPgBANAEQANADAKAHQAJAIAFALQAFAMABAQIAAAGIgsAAQgBgQgFgJQgGgIgNAAQgIAAgEACQgFADgDADQgDADgBAFIgCAKQAAALAFAGQAEAIAOAGIAkAOQANAGAHAGQAJAGAFAGQAFAIABAJQADAIAAAKQgBAkgUAQQgVAQglABQglAAgRgRgAFZBxIAAipIAqAAIAAAXIABAAQAGgNAKgGQAKgIANAAIAEAAIAEABIAAApIgNgBIgMADQgGABgFADQgEAEgEAFQgCAGAAAIIAABmgACGBxIAAh0QAAgNgFgGQgFgEgJAAQgYAAAAAaIAABxIgrAAIAAipIAqAAIAAAUIAAAAQAHgMAMgGQALgGAOAAQAUAAALALQAMAMAAAZIAAB9gAgUBxIAAh0QAAgNgEgGQgFgEgKAAQgXAAAAAaIAABxIgrAAIAAipIApAAIAAAUIABAAQAGgMAMgGQALgGAOAAQAUAAALALQALAMAAAZIAAB9g");
	this.shape_1.setTransform(366.15,-89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RRScanners, new cjs.Rectangle(142.5,-101.5,280.2,28.299999999999997), null);


(lib.txt_RR_endFrame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#25317E").s().p("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");
	this.shape.setTransform(-51.1891,-80.7951,1.1817,1.1817);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AGDBdQgJgDgGgGQgGgGgCgIQgCgIAAgKIAAgFIAfAAIAAAFQAAAJAGAFQAEAGAJAAQAJAAAFgEQAEgEAAgJQAAgGgDgEQgFgDgEgCIgagKQgOgEgIgKQgHgKAAgNQAAgJACgHQADgIAHgGQAFgFALgEQAJgDAOAAQAYAAALAKQANALAAATIAAAFIghAAQAAgLgDgFQgEgFgJAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADADAJADIAWAHQARAFAGAKQAIAJAAAPQAAAMgEAIQgFAIgGAGQgHAFgJACQgKADgMAAQgOAAgLgDgAC5BZQgKgGgGgLQgFgKgCgOIgBgaQAAgOADgMQABgNAGgKQAGgKALgGQALgGASAAQAQAAAJAFQAKAFAGAJQAFAJADAOQACAMAAAPIAAAJIhHAAIABAXIADAKQACAEADADQAEADAEAAQAKAAAEgHQAEgGACgNIAgAAQgCAYgLANQgMANgaAAQgTAAgLgHgADOgWQgDACgCAEIgDAJIgBAOIAlAAIgCgNQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgEADgAjDBcQgGgDgFgGQgDgFgCgHQgCgHAAgIQAAgJADgHQABgIAFgEQAEgGAGgDIARgGIAUgGQAHgBADgEQADgDAAgHQABgIgEgEQgDgFgKAAQgIAAgEAFQgFAFABAIIAAAEIghAAIAAgDQABgMADgJQAEgIAHgFQAHgFAIgCQAJgCAKAAQAQAAAKADQAKADAFAGQAGAGACAHQACAIAAAKIABBXIAEAMIgiAAIgGgPIAAAAQgGALgIADQgJAEgNAAQgIAAgHgEgAiXAcIgIACQgKACgFAGQgFAFAAAJQAAAJAEAFQACAGAIAAIAHgBQAEgBAEgDIAEgGQACgFAAgFIAAgcgAktBcQgKgDgHgIQgGgJgDgOQgEgOAAgVQAAgVAEgOQAEgOAIgIQAHgIAKgEQALgDANAAQAZAAAMAOQAMAPAAAYIghAAIgCgJIgCgJQgBgEgDgDQgEgCgFAAQgGAAgEADQgFADgBAFQgCAGgBAIIAAArQABAKACAGQACAFADADQAEADAGAAQAJAAAEgIQAFgIAAgQIAhAAQAAAbgMAOQgMAPgdAAQgNAAgKgEgAnDBSQgNgOABgaIAAgHIAlAAIAAARQABAFADAEQADAEAFACQAFACAHAAQAJAAAGgFQAHgGAAgMIgBgLQgCgEgEgEQgEgDgGgDIgQgGQgNgFgIgEQgJgFgHgGQgFgHgEgIQgDgJAAgLQAAgcAQgNQAPgOAbAAQAMAAALADQALADAHAGQAHAGAFAJQAEAKABANIAAAFIgkAAQgBgNgEgHQgFgHgLAAQgGAAgEACIgGAEQgDADgBAEIgBAIQAAAJAEAGQADAFAMAFIAdANQALAEAGAFQAHAFAFAFQADAGABAHQACAHAAAJQAAAdgRANQgQAOgfAAQggAAgOgOgAEcBdIAAiLIAiAAIAAATIABAAQAFgKAIgGQAIgGALAAIADAAIADAAIAAAiIgKAAIgKABQgFACgDADQgEADgDAEQgDAEABAHIAABUgABuBdIAAhfQAAgLgEgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAiAAIAAARIAAAAQAGgLAJgEQAJgFAMAAQARAAAJAJQAJAKAAAVIAABmgAgRBdIAAhfQAAgLgDgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAhAAIAAARIABAAQAGgLAJgEQAJgFALAAQARAAAJAJQAJAKAAAVIAABmg");
	this.shape_1.setTransform(89.1621,-83.3356,1.1817,1.1817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RR_endFrame, new cjs.Rectangle(-129.2,-94.6,273.29999999999995,27.5), null);


(lib.txt_relief = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgUAZIAAgxIApAAIAAAxg");
	this.shape.setTransform(356.6,-72.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgWBzIAAiLIgXAAIAAgeIAXAAIAAgUQgBgLAEgIQADgIAGgEQAFgFAJgDQAIgBALAAIAWABIAAAeIgEAAIgEAAQgJAAgEAEQgDADAAAHIAAAPIAYAAIAAAeIgYAAIAACLg");
	this.shape_1.setTransform(349,-81.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgjBRQgNgIgHgNQgGgNgCgQIgBgfQAAgRACgQQADgQAHgMQAHgNANgHQAOgHAVAAQATAAAMAGQAMAGAHALQAHAMADAQQACAQAAATIAAAJIhVAAIAAAOIABAOIAEANQACAGAEADQAEADAFAAQALAAAGgIQAFgHACgRIAnAAQgCAegOAQQgPAPgfAAQgXAAgNgIgAgJg4QgEAEgCAEIgEALIgBAMIAAAHIAsAAIgCgRQgBgIgCgFQgCgFgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_2.setTransform(337.625,-78.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVByIAAipIArAAIAACpgAgVhMIAAgmIArAAIAAAmg");
	this.shape_3.setTransform(327.3,-81.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgVBxIAAjhIArAAIAADhg");
	this.shape_4.setTransform(320.5,-81.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgjBRQgNgIgHgNQgGgNgCgQIgBgfQAAgRACgQQADgQAHgMQAHgNANgHQAOgHAVAAQATAAAMAGQAMAGAHALQAHAMADAQQACAQAAATIAAAJIhVAAIAAAOIABAOIAEANQACAGAEADQAEADAFAAQALAAAGgIQAFgHACgRIAnAAQgCAegOAQQgPAPgfAAQgXAAgNgIgAgJg4QgEAEgCAEIgEALIgBAMIAAAHIAsAAIgCgRQgBgIgCgFQgCgFgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_5.setTransform(310.125,-78.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgsBXIAAipIAqAAIAAAXIAAAAQAHgMAJgIQAJgHAOgBIAEAAIAEABIAAAqIgHAAIgHAAIgLABQgGABgEAEQgGADgCAGQgCAHAAAIIAABlg");
	this.shape_6.setTransform(299,-78.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgCBsQgJgBgEgFQgEgGgCgIQgBgJAAgNIAAhhIgXAAIAAgdIAXAAIAAgxIArAAIAAAxIAYAAIAAAdIgYAAIAABcQAAAKADAEQACAEAKAAIAFAAIAEAAIAAAeIgNABIgPAAQgNAAgGgCg");
	this.shape_7.setTransform(282.4,-80.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AhCBzIAAjhIAqAAIAAASIABAAQAHgMAJgFQAIgFANAAQAcAAAMAVQANAVAAAvQAAAvgNAVQgMAUgcAAQgMABgIgFQgIgFgHgKIgBAAIAABHgAgShCQgEAOAAAbQAAAcAEANQAFAPANAAQAOAAAFgPQAEgNAAgcQAAgbgEgOQgFgOgOgBQgNABgFAOg");
	this.shape_8.setTransform(270.675,-75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgVByIAAipIArAAIAACpgAgVhMIAAgmIArAAIAAAmg");
	this.shape_9.setTransform(259.55,-81.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgjBRQgNgIgHgNQgGgNgCgQIgBgfQAAgRACgQQADgQAHgMQAHgNANgHQAOgHAVAAQATAAAMAGQAMAGAHALQAHAMADAQQACAQAAATIAAAJIhVAAIAAAOIABAOIAEANQACAGAEADQAEADAFAAQALAAAGgIQAFgHACgRIAnAAQgCAegOAQQgPAPgfAAQgXAAgNgIgAgJg4QgEAEgCAEIgEALIgBAMIAAAHIAsAAIgCgRQgBgIgCgFQgCgFgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_10.setTransform(249.125,-78.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgbBVQgNgEgIgKQgIgKgEgSQgEgRAAgaQAAgZAFgRQAFgRAJgLQAKgKAMgEQANgEAOAAQAfAAAPARQAPASAAAfIgpAAIgBgNIgDgLQgCgFgEgDQgEgDgGAAQgHAAgFAEQgFAEgDAHQgCAHgBALIgBAZIABAbQABALACAHQADAIAEADQAFADAGAAQALAAAFgJQAGgKAAgVIApAAQAAAigPASQgPARgjAAQgPAAgMgEg");
	this.shape_11.setTransform(235.225,-78.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgjBRQgNgIgHgNQgGgNgCgQIgBgfQAAgRACgQQADgQAHgMQAHgNANgHQAOgHAVAAQATAAAMAGQAMAGAHALQAHAMADAQQACAQAAATIAAAJIhVAAIAAAOIABAOIAEANQACAGAEADQAEADAFAAQALAAAGgIQAFgHACgRIAnAAQgCAegOAQQgPAPgfAAQgXAAgNgIgAgJg4QgEAEgCAEIgEALIgBAMIAAAHIAsAAIgCgRQgBgIgCgFQgCgFgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_12.setTransform(221.275,-78.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgsBXIAAipIAqAAIAAAXIAAAAQAHgMAJgIQAJgHAOgBIAEAAIAEABIAAAqIgHAAIgGAAIgMABQgGABgEAEQgGADgCAGQgCAHAAAIIAABlg");
	this.shape_13.setTransform(210.15,-78.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUAcQAIgBAFgIQAEgHgBgJIAAgDIgQAAIAAgyIApAAIAAAqIgBAVQgCALgFAIQgFAHgIAFQgHAFgNACg");
	this.shape_14.setTransform(194.4,-69.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AAVBxIAAh0QAAgOgFgFQgEgFgKAAQgWAAAAAbIAABxIgsAAIAAjhIAsAAIAABJIABAAQAMgWAcAAQAVAAALAMQAMALAAAaIAAB9g");
	this.shape_15.setTransform(183.425,-81.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AAVBxIAAh0QAAgOgFgFQgEgFgKAAQgWAAAAAbIAABxIgsAAIAAjhIAsAAIAABJIABAAQAMgWAcAAQAVAAALAMQAMALAAAaIAAB9g");
	this.shape_16.setTransform(168.325,-81.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAoBxIgKgwIg7AAIgLAwIgvAAIA8jhIA3AAIA8DhgAAWAcIgWhlIAAAAIgVBlIArAAg");
	this.shape_17.setTransform(152.375,-81.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_relief, new cjs.Rectangle(70.1,-102.6,363,42.099999999999994), null);


(lib.txt_overwhelmed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AghCdIAAg6IA7AAIAAA6gAgeBGIAAgQQAAgWAGgPQAGgPAPgPIAPgTQAJgKAEgMQAEgLAAgNQAAgQgIgLQgHgJgOgBQgQAAgHAOQgHANAAAVIAAALIg6AAIAAgKQAAgUAGgQQAFgRALgLQAKgMARgHQAQgGAVAAQAtAAAXAWQAXAXAAAmQAAASgGAQQgGAPgQATIgRATQgLAMgFAKQgFALAAAQIAAAGg");
	this.shape.setTransform(365.425,-161.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgpB1QgRgFgKgKQgJgJgEgNQgEgOAAgRIAAgIIA1AAIAAAHQAAAQAIAJQAJAJAPAAQANABAIgIQAIgGAAgPQAAgKgHgHQgGgFgJgEIgpgPQgYgJgNgOQgNgQAAgZQAAgOAFgNQAFgNAKgJQALgKAQgGQAQgFAWAAQApAAATARQAUARAAAgIAAAKIg2AAQAAgSgGgJQgGgIgOgBQgKABgJAGQgIAGAAANQAAAIAFAIQAGAGAPAFIAjAMQAcAJAMAPQALAQAAAaQAAASgGAOQgHAOgLAJQgMAJgQAEQgPAEgTAAQgZAAgQgFg");
	this.shape_1.setTransform(344.975,-157.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgECUQgLgCgGgHQgGgIgCgLQgCgMAAgSIAAiEIgfAAIAAgpIAfAAIAAhDIA6AAIAABDIAjAAIAAApIgjAAIAAB9QABAOAEAGQAEAFANAAIAHAAIAGAAIAAApIgTABIgTABQgSAAgKgDg");
	this.shape_2.setTransform(328.55,-161.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AhaCdIAAkzIA5AAIAAAZIABAAQAKgRAMgHQALgHATAAQAlAAARAdQARAcAABBQAABAgRAcQgRAdglAAQgRAAgLgGQgMgHgKgNIAAAAIAABggAgZhbQgFAUAAAlQAAAmAFASQAGAUATAAQAUAAAFgUQAGgSAAgmQAAglgGgUQgFgTgUAAQgTAAgGATg");
	this.shape_3.setTransform(311.025,-154.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgdCdIAAjoIA7AAIAADogAgdhpIAAgyIA7AAIAAAyg");
	this.shape_4.setTransform(294.3,-161.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgwBvQgTgLgIgSQgJgSgCgVIgCgrQAAgYADgWQAEgVAJgRQAKgSASgJQASgKAeAAQAaAAAQAIQARAIAKAQQAJAQAEAVQADAXAAAaIAAAMIh1AAIAAATIABAUIAFARQAEAIAGAFQAFAFAHgBQAQABAHgMQAGgLADgWIA2AAQgCAqgUAUQgUAWgrAAQgfAAgSgLgAgMhNQgGAFgEAHIgFAOIgBARIAAAJIA8AAIgCgXQgBgLgDgHQgDgHgGgEQgGgDgJgBQgJAAgFAEg");
	this.shape_5.setTransform(278.575,-157.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgmB0QgRgFgLgOQgLgOgFgYQgGgYAAgjQAAgjAHgYQAHgXAMgOQANgOARgGQASgFAUAAQApAAAVAYQAVAYAAAqIg5AAIgBgRIgEgPQgDgGgFgFQgFgEgJAAQgKAAgHAFQgHAFgDAJQgEAKgBAPIgBAjIABAlQABAPAEAKQADAKAHAFQAGAFAJgBQAPABAHgNQAHgOAAgdIA5AAQAAAvgUAYQgVAYgwAAQgVAAgRgGg");
	this.shape_6.setTransform(258.075,-157.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgwBvQgTgLgIgSQgJgSgCgVIgCgrQAAgYADgWQAEgVAJgRQAKgSASgJQASgKAeAAQAaAAAQAIQARAIAKAQQAJAQAEAVQADAXAAAaIAAAMIh1AAIAAATIABAUIAFARQAEAIAGAFQAFAFAHgBQAQABAHgMQAGgLADgWIA2AAQgCAqgUAUQgUAWgrAAQgfAAgSgLgAgMhNQgGAFgEAHIgFAOIgBARIAAAJIA8AAIgCgXQgBgLgDgHQgDgHgGgEQgGgDgJgBQgJAAgFAEg");
	this.shape_7.setTransform(237.525,-157.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("Ag8B4IAAjoIA5AAIAAAeIABAAQAIgQANgLQANgKATAAIAFAAIAFABIAAA5IgJgBIgJAAIgQADQgIABgGAGQgHAEgEAJQgCAHAAAMIAACMg");
	this.shape_8.setTransform(220.725,-158.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AhLCaIAAgtIAPACQARAAAHgJQAHgJABgOIhBjoIA+AAIAiCgIABAAIAeigIA8AAIg4DYQgIAdgHATQgIARgJALQgJAJgOADQgNADgVAAg");
	this.shape_9.setTransform(191.725,-154.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgKCXQgMgHgKgRIgBAAIAAAZIg5AAIAAk0IA8AAIAABiIAAAAQAKgOAMgHQALgHARAAQAlAAARAdQARAdAABAQAABBgRAcQgRAcglAAQgTAAgLgGgAgZgVQgFAUAAAlQAAAmAFATQAGATATAAQAUAAAFgTQAGgTAAgmQAAglgGgUQgFgTgUAAQgTAAgGATg");
	this.shape_10.setTransform(171.075,-161.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AhJCBQgRgcAAhBQAAhAARgdQARgdAlAAQARAAALAHQAMAHAJAOIABAAIAAhiIA8AAIAAE0Ig5AAIAAgZIgBAAQgKARgMAHQgMAGgSAAQglAAgRgcgAgZgVQgGAUAAAlQAAAmAGATQAGATATAAQAUAAAFgTQAGgTAAgmQAAglgGgUQgFgTgUAAQgTAAgGATg");
	this.shape_11.setTransform(137.575,-161.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgwBvQgTgLgIgSQgJgSgCgVIgCgrQAAgYADgWQAEgVAJgRQAKgSASgJQASgKAeAAQAaAAAQAIQARAIAKAQQAJAQAEAVQADAXAAAaIAAAMIh1AAIAAATIABAUIAFARQAEAIAGAFQAFAFAHgBQAQABAHgMQAGgLADgWIA2AAQgCAqgUAUQgUAWgrAAQgfAAgSgLgAgMhNQgGAFgEAHIgFAOIgBARIAAAJIA8AAIgCgXQgBgLgDgHQgDgHgGgEQgGgDgJgBQgJAAgFAEg");
	this.shape_12.setTransform(116.475,-157.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("ABVB4IAAijQAAgPgGgHQgFgHgNgBQgOAAgJAKQgIAJAAAVIAACZIg7AAIAAijQAAgPgFgHQgGgHgMgBQgPAAgIAKQgIAJAAAVIAACZIg8AAIAAjoIA5AAIAAAXIABAAQALgQAOgHQAOgGAUgBQAUAAAOAKQAOAJAEASIABAAQAHgSAQgKQAPgJAVAAQAeAAAOASQAOATAAAhIAACpg");
	this.shape_13.setTransform(89.625,-158.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgdCbIAAk1IA7AAIAAE1g");
	this.shape_14.setTransform(67.55,-161.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgwBvQgTgLgIgSQgJgSgCgVIgCgrQAAgYADgWQAEgVAJgRQAKgSASgJQASgKAeAAQAaAAAQAIQARAIAKAQQAJAQAEAVQADAXAAAaIAAAMIh1AAIAAATIABAUIAFARQAEAIAGAFQAFAFAHgBQAQABAHgMQAGgLADgWIA2AAQgCAqgUAUQgUAWgrAAQgfAAgSgLgAgMhNQgGAFgEAHIgFAOIgBARIAAAJIA8AAIgCgXQgBgLgDgHQgDgHgGgEQgGgDgJgBQgJAAgFAEg");
	this.shape_15.setTransform(51.825,-157.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AAcCbIAAigQABgSgHgHQgFgHgOAAQgfAAABAlIAACbIg9AAIAAk1IA9AAIAABkIAAAAQASgdAmAAQAcAAAQAPQAQAQAAAjIAACsg");
	this.shape_16.setTransform(30.55,-161.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAfB1IgfilIAAAAIgcClIhGAAIgzjoIA8AAIAbCkIABAAIAdikIBBAAIAeCkIABAAIAcikIA6AAIgzDog");
	this.shape_17.setTransform(4,-157.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("Ag8B4IAAjoIA5AAIAAAeIABAAQAIgQANgLQANgKATAAIAFAAIAFABIAAA5IgJgBIgJAAIgQADQgIABgGAGQgHAEgEAJQgCAHAAAMIAACMg");
	this.shape_18.setTransform(-18.025,-158.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgwBvQgTgLgIgSQgJgSgCgVIgCgrQAAgYADgWQAEgVAJgRQAKgSASgJQASgKAeAAQAaAAAQAIQARAIAKAQQAJAQAEAVQADAXAAAaIAAAMIh1AAIAAATIABAUIAFARQAEAIAGAFQAFAFAHgBQAQABAHgMQAGgLADgWIA2AAQgCAqgUAUQgUAWgrAAQgfAAgSgLgAgMhNQgGAFgEAHIgFAOIgBARIAAAJIA8AAIgCgXQgBgLgDgHQgDgHgGgEQgGgDgJgBQgJAAgFAEg");
	this.shape_19.setTransform(-36.625,-157.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AghB1Ig8joIA+AAIAhClIABAAIAfilIA8AAIg6Dog");
	this.shape_20.setTransform(-56.725,-157.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("Ag3CVQgVgMgKgVQgMgVgDgdQgEgeABgjQgBgjAEgdQADgeAMgVQAKgVAVgMQAVgMAiAAQAjAAAVAMQAVAMALAVQALAVADAeQADAdAAAjQAAAjgDAeQgDAdgLAVQgLAVgVAMQgVALgjAAQgiAAgVgLgAgVhrQgJAGgFAOQgEAOgBAWIgCA0IACA1QABAVAEAOQAFAOAJAGQAIAGANAAQAOAAAJgGQAIgGAEgOQAFgOABgVIACg1IgCg0QgBgWgFgOQgEgOgIgGQgJgGgOAAQgNAAgIAGg");
	this.shape_21.setTransform(-78.85,-161.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_overwhelmed, new cjs.Rectangle(-137.2,-189.7,559.8,54.89999999999998), null);


(lib.txt_organize = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape.setTransform(295,-71.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AghBNQgNgIgGgMQgGgNgBgPIgBgdQAAgRACgPQACgOAHgMQAHgLAMgIQAMgGAVAAQASAAALAFQAMAGAGALQAHAKACAQQADAPgBATIAAAIIhRAAIAAAMIABAPIAEALQACAFAEAEQAEADAFAAQALAAAEgIQAFgHACgPIAlAAQgBAcgOAPQgNAOgfAAQgVABgMgIgAgJg1QgEADgCAFIgEAKIgBAMIAAAGIAqAAIgBgQQgBgHgDgFQgCgFgDgDQgFgCgGAAQgGAAgEACg");
	this.shape_1.setTransform(284.75,-77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("Ag4BRIAAggIBAhfIg9AAIAAgiIBuAAIAAAgIhABfIBAAAIAAAig");
	this.shape_2.setTransform(271.725,-76.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBsIAAigIApAAIAACggAgUhIIAAgjIApAAIAAAjg");
	this.shape_3.setTransform(262.025,-79.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AATBTIAAhuQAAgNgDgFQgEgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAoAAIAAATIAAAAQAGgMALgFQAKgGANAAQATAAAMALQAKALAAAYIAAB3g");
	this.shape_4.setTransform(251.25,-77.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgpBRQgIgEgEgHQgFgGgCgJQgCgIAAgIQABgLACgJQACgIAFgFQAFgGAIgEQAHgEALgCIAWgHQAKgCAEgEQADgFAAgHQAAgKgEgFQgFgGgJABQgJAAgGAFQgEAGAAAJIAAAFIglAAIAAgEQgBgOAFgJQAEgKAIgFQAIgGAKgDQALgCALAAQASAAALADQALAEAHAGQAGAHACAJQACAKAAAKIAABUIACARIAEAOIgoAAIgDgIIgCgJIAAAAQgIANgKAEQgHADgQAAQgKAAgIgDgAAJAGIgJADQgMACgFAHQgFAGAAALQAAAJAEAHQADAGAIAAIAIgCQAFgBADgCQAEgEADgEQACgGAAgGIAAggg");
	this.shape_5.setTransform(236.75,-77);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgtBiQgOgLAAgUIAnAAQABAHAGAFIAHADIAGACQANgBAEgHQAGgJAAgMIAAgVIgBAAQgGAJgKAGQgIAEgKAAQgYAAgMgSQgNgTAAgrIACgdQACgOAEgMQAGgMAJgHQALgIAQAAQAJAAAIAFQAKAEAGANIABAAIAAgSIAnAAIAACZQAAAegPAQQgQAQgjAAQgbAAgOgMgAgJhKQgFADgBAGQgDAIgBAKIgBAcIABAQIADAMQACAGAEADQAFAEAFAAQAGAAAFgEQAEgDADgGQADgGABgHIABgTQgBgegEgMQgEgMgNAAQgGAAgEADg");
	this.shape_6.setTransform(222.2,-74.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgpBTIAAihIAnAAIAAAWIABAAQAFgMAJgHQAJgHANAAIAEABIADAAIAAAnIgGAAIgGAAIgLABQgGACgEADQgFAEgCAFQgCAGAAAIIAABgg");
	this.shape_7.setTransform(210.875,-77.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgmBnQgOgIgIgPQgHgOgDgVQgCgUAAgZQAAgXACgVQADgUAHgPQAIgOAOgJQAPgIAXAAQAYAAAPAIQAOAJAIAOQAHAPADAUQACAVAAAXQAAAZgCAUQgDAVgHAOQgIAPgOAIQgPAIgYAAQgXAAgPgIgAgOhKQgGAFgDAJQgDAKgCAPIgBAjIABAlQACAPADAKQADAJAGAEQAGAFAIAAQAKAAAGgFQAFgEADgJQAEgKABgPIABglIgBgjQgBgPgEgKQgDgJgFgFQgGgEgKAAQgIAAgGAEg");
	this.shape_8.setTransform(197.225,-79.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_organize, new cjs.Rectangle(72.1,-99.9,343,39.800000000000004), null);


(lib.txt_notForLong = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape.setTransform(399.525,-71.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgtBiQgOgLAAgUIAoAAQAAAHAGAFIAGADIAHABQAMAAAFgIQAFgIAAgMIAAgVIAAAAQgGAJgJAGQgJAEgJAAQgZAAgMgSQgNgTAAgrIACgdQABgOAGgMQAFgMAKgHQAKgHARgBQAIAAAJAGQAJAEAGANIAAAAIAAgSIAoAAIAACYQAAAegPAQQgQAPgjAAQgaAAgPgLgAgJhKQgEAEgDAGQgCAGgBAMIgBAbIABAQQABAHACAFQACAGAEADQAFAEAFAAQAHAAAEgEQAEgDADgGQACgGABgHIABgTQAAgdgEgNQgFgLgMAAQgGAAgEACg");
	this.shape_1.setTransform(388.275,-74.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAUBSIAAhuQAAgMgEgFQgFgFgJABQgVAAABAaIAABpIgqAAIAAifIAoAAIAAATIABAAQAGgMALgGQAJgFANgBQAUABALAKQAKALAAAYIAAB2g");
	this.shape_2.setTransform(373.55,-77.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgeBPQgMgFgHgKQgHgLgDgQQgDgQAAgVQAAgTADgQQADgQAIgLQAHgKAMgGQAMgFARAAQASgBANAGQAMAFAHALQAHALADAPQADAQAAAUQAAAVgDAQQgDAQgIAKQgHALgMAFQgMAFgSAAQgSAAgMgFgAgLgzQgEAEgDAIIgDASIAAAVIAAAXIADASQADAIAEAEQAEAEAHAAQANAAAEgNQAFgNAAgfQAAgdgFgNQgEgNgNAAQgHAAgEAEg");
	this.shape_3.setTransform(358.925,-77.4271);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_4.setTransform(348.175,-80.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBSIAAifIAoAAIAAAVIABAAQAFgMAJgGQAJgIANAAIADABIAEAAIAAAoIgGgBIgHAAIgKACQgFABgFADQgEAEgDAFQgCAGAAAIIAABfg");
	this.shape_5.setTransform(333.2,-77.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgeBPQgMgFgHgKQgHgLgDgQQgDgQAAgVQAAgTADgQQADgQAIgLQAHgKAMgGQAMgFARAAQASgBANAGQAMAFAHALQAHALADAPQADAQAAAUQAAAVgDAQQgDAQgIAKQgHALgMAFQgMAFgSAAQgSAAgMgFgAgLgzQgEAEgDAIIgDASIAAAVIAAAXIADASQADAIAEAEQAEAEAHAAQANAAAEgNQAFgNAAgfQAAgdgFgNQgEgNgNAAQgHAAgEAEg");
	this.shape_6.setTransform(320.425,-77.4271);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgVBtIAAiEIgVAAIAAgcIAVAAIAAgSQAAgLACgHQADgIAGgEQAFgFAIgCQAIgCAKAAIAWABIAAAdIgEAAIgEAAQgJAAgDADQgEADAAAHIAAAOIAYAAIAAAcIgYAAIAACEg");
	this.shape_7.setTransform(308.95,-80.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgCBmQgJgCgDgFQgEgFgCgIIgBgUIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQACAEAKAAIAEgBIAFAAIAAAdIgOAAIgNABQgMAAgGgCg");
	this.shape_8.setTransform(293,-79.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgeBPQgMgFgHgKQgHgLgDgQQgDgQAAgVQAAgTADgQQADgQAIgLQAHgKAMgGQAMgFARAAQASgBANAGQAMAFAHALQAHALADAPQADAQAAAUQAAAVgDAQQgDAQgIAKQgHALgMAFQgMAFgSAAQgSAAgMgFgAgLgzQgEAEgDAIIgDASIAAAVIAAAXIADASQADAIAEAEQAEAEAHAAQANAAAEgNQAFgNAAgfQAAgdgFgNQgEgNgNAAQgHAAgEAEg");
	this.shape_9.setTransform(281.375,-77.4271);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AAWBrIg0iVIAAAAIAACVIgoAAIAAjVIAyAAIAzCRIAAAAIAAiRIAoAAIAADVg");
	this.shape_10.setTransform(265.675,-80.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_notForLong, new cjs.Rectangle(254.8,-100.3,150.7,39.699999999999996), null);


(lib.txt_monetized = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AipETQgLgFgFgMQgFgLABgQQABgRAGgVQAFgVAIgRQAHgQALgLQAKgLAOgGQAOgFATAAQASgBALAGQAMAFAEALQAFALgBARQgBAQgFAWQgGAVgIARQgHAQgKALQgLALgNAFQgPAFgSAAIgGAAQgPAAgJgEgAhzCLQgGAEgFAIQgEAIgDALIgMAvQgCAKAAAIQABAIADAEQADAEAJAAQANAAAIgNQAIgOAIgfQAIgfgCgOQgCgNgMAAQgIAAgFAEgAKnEDQgIgUAMguQAMguARgVQARgUAaAAQANAAAHAEQAIAFAEALIAAAAIAShGIAqAAIg4DcIgoAAIAEgSIAAAAQgLAMgKAFQgKAEgMAAQgbAAgGgUgALkCYQgIAOgHAbQgHAbABAOQABANAOAAQAOAAAHgNQAJgOAGgbQAIgbgCgOQgBgOgOAAQgNAAgIAOgAIkEPQgKgHgDgNQgDgMACgQIAHggQAEgQAGgQQAGgPALgMQAJgMAPgIQAPgGAVAAQATAAALAFQAKAHADALQAFAKgCAQQgBAQgFATIgCAJIhVAAIgGAcIABAMQABAGADADQAEADAFAAQALAAAHgIQAHgHAGgQIAnAAQgKAdgRAPQgTAPgfAAQgWAAgMgIgAJgCKQgFADgDAEIgHALIgFASIAsAAIACgRIAAgMQgBgFgDgDQgEgCgHAAQgGAAgFADgAB5EPQgLgHgDgNQgDgMACgQIAHggIAKggQAGgPALgMQAJgMAQgIQAPgGAVAAQATAAAKAFQAKAHAEALQAEAKgBAQQgCAQgFATIgCAJIhUAAIgGAcIAAAMQABAGADADQAEADAFAAQAMAAAGgIQAHgHAHgQIAlAAQgJAdgRAPQgTAPgeAAQgXAAgLgIgAC1CKQgFADgDAEIgHALIgGASIAsAAIACgRQACgHgCgFQAAgFgEgDQgEgCgGAAQgHAAgEADgApcEPQgNgHgGgNQgHgMgBgQIgBggQAAgQACgQQADgPAGgMQAHgMAOgIQAMgGAWAAQASAAANAFQAMAHAGALQAHAKADAQQACAQAAATIAAAJIhUAAIAAAcIAEAMQADAGADADQAEADAGAAQALAAAFgIQAFgHACgQIAnAAQgCAdgOAPQgOAPgfAAQgXAAgNgIgApDCKQgDADgDAEIgEALIAAASIArAAIgBgRQgBgHgDgFQgCgFgDgDQgGgCgGAAQgHAAgEADgArQETQgJgFgHgMIgBAAIAAASIgpAAIAAjcIArAAIAABGIABAAQAGgLAJgFQAJgEAMAAQAaAAAMAUQAMAVAAAuQAAAugMAUQgMAUgaAAQgNAAgJgEgArbCYQgEAOAAAbQAAAbAEAOQAFANAOAAQAOAAADgNQAFgOAAgbQAAgbgFgOQgDgOgOAAQgOAAgFAOgAEKETQgGgBgDgFQgEgGABgIQAAgIAEgNIAYhfIgWAAIAHgdIAWAAIAMgwIArAAIgNAwIAZAAIgHAdIgYAAIgXBaQgDAKADAEQACAEAIAAIAKgBIgHAeIgdABQgMAAgIgCgAM0EUIAMgwIAoAAIgMAwgAGGEUIAIghIBchiIhAAAIAJgjIBxAAIgHAhIhcBjIBDAAIgJAigAFIEUIApimIArAAIgqCmgAAeEUIAchyQAEgNgDgGQgDgFgJAAQgXAAgHAcIgbBuIgqAAIApimIAoAAIgFATIABAAQAJgMANgGQAMgFAOAAQAVAAAIAKQAHAMgGAZIgeB7gAkJEUIAch0QADgKgDgGQgCgGgIAAQgLAAgHAHQgIAHgEAPIgbBtIgrAAIAch0QADgKgCgGQgCgGgJAAQgKAAgIAHQgIAHgEAPIgcBtIgpAAIApimIApAAIgFARIACAAQAKgMAMgFQALgEAOAAQAOAAAIAGQAJAHAAANIABAAQAIgNANgHQANgGAPAAQAUAAAIAMQAGANgGAYIgeB5gAF2BaIAJglIArAAIgJAlgAlQAAIAAjcIAqAAIAAASIAAAAQAHgMAJgFQAJgFANAAQAaAAAMAVQANAUAAAvQAAAugNAUQgMAUgaAAQgMAAgJgFQgJgEgGgKIgBAAIAABFgAkhiyQgEAOAAAcQAAAbAEANQAFAOAOAAQAOAAADgOQAFgNAAgbQAAgcgFgOQgDgNgOAAQgOAAgFANgAsjg3QgMgFgIgLQgHgLgDgRQgEgQAAgVQAAgVAEgRQADgRAIgLQAHgKANgGQANgGASAAQATAAAMAFQANAFAHAMQAIALAEAQQACAQAAAXQAAAVgDAQQgEAQgHALQgIAMgNAFQgMAFgSAAIgGAAQgPAAgLgFgAsQi/QgEAFgCAHQgDAIAAALIAAAvQAAALADAHQACAIAEAEQAFAFAIAAQANAAAFgOQAFgNAAgfQAAgggFgOQgFgNgNAAQgIAAgFAEgALlg2QgIgEgEgHQgFgGgCgJQgDgIAAgJQABgLADgJQACgIAFgGQAFgGAIgEQAIgEALgDIAYgHQAJgCAEgFQAEgEAAgJQAAgJgFgGQgEgFgLAAQgKAAgEAGQgGAGAAAJIAAAGIgmAAIAAgFQAAgOAFgKQAFgKAHgFQAIgHALgCQAKgDAMAAQAUAAALAEQAMAEAHAGQAGAHADAJQABAKAAALIACBqIAEAOIgpAAIgFgSIgBAAQgHANgKAEQgKAEgPAAQgLAAgIgEgAMaiDIgJADQgNADgGAGQgFAHgBALQABAJADAHQAEAHAJAAIAJgCQAEgBAEgDQAEgDACgFQADgFAAgHIAAgggAJng2QgMgEgIgKQgIgKgEgRQgEgRAAgYQAAgaAFgRQAFgRAJgKQAJgKAMgEQANgEAOAAQAeAAAPARQAPARAAAeIgpAAIgDgWQgCgFgFgDQgDgDgGAAQgIAAgEADQgGAEgCAHQgDAHAAAKIAAA0QAAALADAHQACAHAFAEQAFADAGAAQALAAAFgJQAGgKgBgUIApAAQAAAhgPARQgOARgiAAQgQAAgMgEgAGUg1QgLgEgHgHQgHgHgDgJQgDgKAAgMIAAgGIAmAAIAAAGQABALAFAGQAGAHALAAQAKAAAGgFQAFgFAAgKQAAgIgEgEQgFgEgGgDIgegLQgRgFgKgMQgIgLAAgSQAAgKAEgJQACgJAIgHQAHgHAMgEQALgEARAAQAdAAAOAMQAOANgBAXIAAAGIgmAAQAAgNgDgGQgFgGgKAAQgJAAgFAFQgHAEABAJQAAAGADAFQAEAFALAEIAaAIQAUAHAIALQAIALAAATQAAANgFAJQgEALgIAGQgJAGgKADQgMADgNAAQgTAAgMgDgAEHg6QgNgHgGgNQgHgNgBgQIgBgfQAAgRACgPQACgQAHgMQAGgMANgHQAOgHAWAAQASAAAMAGQAMAGAGALQAHALADAQQACAPAAATIAAAKIhUAAIABAbIAEANQACAFAEAEQAEADAGAAQAKAAAGgIQAEgHACgQIAnAAQgCAdgNAPQgPAPgeAAQgXAAgNgIgAEgjAQgEADgCAFIgEAKIgBATIArAAIgBgRQgBgHgCgFQgCgGgEgCQgFgDgGAAQgHAAgEADgACDg1QgMgEgHgHQgHgHgDgJQgCgKAAgMIAAgGIAmAAIAAAGQAAALAFAGQAGAHALAAQALAAAFgFQAGgFAAgKQAAgIgFgEQgFgEgFgDIgegLQgSgFgJgMQgJgLAAgSQAAgKADgJQAEgJAHgHQAHgHAMgEQALgEASAAQAcAAANAMQAPANAAAXIAAAGIgmAAQgBgNgEgGQgEgGgLAAQgHAAgGAFQgGAEgBAJQAAAGAFAFQADAFALAEIAZAIQAVAHAIALQAJALgBATQAAANgEAJQgFALgIAGQgJAGgLADQgLADgOAAQgRAAgMgDgAiig6QgNgHgGgNQgGgNgCgQIgBgfQAAgRACgPQACgQAIgMQAGgMAOgHQANgHAWAAQARAAAMAGQAMAGAHALQAGALADAQQADAPAAATIAAAKIhUAAIAAAbIAFANQACAFADAEQAFADAFAAQAMAAAEgIQAFgHADgQIAlAAQgBAdgOAPQgOAPgfAAQgXAAgNgIgAiJjAQgDADgCAFIgFAKIAAATIAsAAIgCgRQgBgHgDgFQgCgGgDgCQgFgDgHAAQgGAAgFADgApRg6QgNgHgGgNQgHgNgBgQIgBgfQAAgRACgPQACgQAIgMQAGgMAOgHQANgHAVAAQATAAALAGQAMAGAHALQAGALADAQQADAPAAATIAAAKIhVAAIABAbIAFANQACAFADAEQAFADAFAAQALAAAFgIQAFgHACgQIAmAAQgBAdgOAPQgOAPgfAAQgXAAgNgIgAo4jAQgDADgCAFIgFAKIgBATIAsAAIgBgRQgBgHgDgFQgCgGgDgCQgFgDgGAAQgHAAgFADgAvThDQgRgQABgeIAAgJIAsAAIABAUQABAGADAFQAEAEAGADQAFACAJAAQAKAAAIgGQAJgHAAgOQAAgHgCgGQgCgFgFgFQgEgEgIgDIgTgIQgPgFgKgFQgLgGgHgIQgIgIgEgLQgDgKAAgOQABggARgQQATgQAgAAQAOAAANADQAMADAJAIQAJAHAGALQAFALAAAQIAAAGIgrAAQAAgPgFgJQgGgJgNAAQgIAAgEADQgFACgDADQgDAEgBAEIgBAKQAAAKAFAHQAEAHAOAGIAiAPQAMAFAJAHQAHAGAGAGQAEAHACAJQACAIAAAKQAAAjgUAQQgVAQgkAAQglAAgQgRgAO6g1IAAhzQAAgNgFgFQgDgFgKAAQgXAAAAAbIAABvIgrAAIAAinIApAAIAAAUIABAAQAHgMALgGQALgGANAAQAVAAAKALQAMALgBAaIAAB7gAAng1IAAhzQAAgNgFgFQgEgFgJAAQgXAAAAAbIAABvIgpAAIAAinIAoAAIAAAUIAAAAQAHgMAKgGQALgGAOAAQAVAAAKALQALALAAAaIAAB7gAmJg1IgYg3IgaA3IgsAAIAthWIgrhRIAsAAIAYAyIAXgyIAsAAIgrBRIAtBWg");
	this.shape.setTransform(246.6,-67.9673);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_monetized, new cjs.Rectangle(147,-95.9,199.3,55.900000000000006), null);


(lib.txt_digitize = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(375.075,-73.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgiBOQgNgHgGgNQgGgMgCgQIgBgeQAAgRACgPQACgQAHgLQAIgMAMgHQANgHAUAAQATAAAMAFQALAGAIALQAGALADAQQACAPAAATIAAAJIhSAAIAAANIABAOIADAMQADAGAEADQADADAFAAQALAAAFgHQAEgIADgQIAmAAQgBAdgPAPQgOAPgfAAQgVAAgNgIgAgIg2QgEADgDAFIgDAKIgBAMIAAAHIAqAAIgCgRQAAgHgDgFQgCgFgFgDQgEgDgGAAQgGAAgDADg");
	this.shape_1.setTransform(364.55,-78.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("Ag5BSIAAggIBBhhIg+AAIAAgiIBwAAIAAAgIhBBhIBBAAIAAAig");
	this.shape_2.setTransform(351.225,-78.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBvIAAikIApAAIAACkgAgUhJIAAglIApAAIAAAlg");
	this.shape_3.setTransform(341.325,-81.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgCBpQgIgCgFgFQgEgFgBgIQgBgJAAgNIAAhcIgWAAIAAgdIAWAAIAAgwIAoAAIAAAwIAZAAIAAAdIgZAAIAABYQAAAKAEADQACAFAKAAIAEAAIAFgBIAAAdIgOABIgNAAQgNABgGgCg");
	this.shape_4.setTransform(333.5,-81.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgUBvIAAikIApAAIAACkgAgUhJIAAglIApAAIAAAlg");
	this.shape_5.setTransform(325.525,-81.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AguBlQgPgMAAgVIApAAQAAAIAHAFIAGADIAHABQANAAAEgIQAFgIABgNIAAgVIgBAAQgGAJgJAFQgJAGgKAAQgaAAgMgTQgNgTAAgsIACgeQABgPAGgMQAFgMALgIQAKgHARAAQAJAAAJAEQAJAFAGANIABAAIAAgSIAoAAIAACcQABAfgRAQQgQAQgjAAQgbAAgPgLgAgKhMQgEADgDAHQgCAHAAALIgBAcIABARQAAAGACAGQACAGAFAEQAEADAGAAQAHAAAEgDQAEgEADgGQACgGACgIIABgTQAAgegFgMQgFgNgNAAQgFAAgFADg");
	this.shape_6.setTransform(314.25,-76.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgUBvIAAikIApAAIAACkgAgUhJIAAglIApAAIAAAlg");
	this.shape_7.setTransform(303.425,-81.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBbQgNgUAAguQAAgtANgUQAMgUAaAAQAMAAAHAEQAJAFAHAKIAAAAIAAhFIArAAIAADaIgpAAIAAgSIgBAAQgHAMgIAFQgIAEgNAAQgaAAgMgUgAgRgOQgEANAAAaQAAAbAEAOQAEAOANAAQAOAAAEgOQAEgOAAgbQAAgagEgNQgEgOgOAAQgNAAgEAOg");
	this.shape_8.setTransform(292.175,-81.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag1BtIAAgfIALAAQAMABAFgHQAFgGABgKIguikIAsAAIAXBxIABAAIAVhxIArAAIgoCZQgGAVgFAMQgFANgHAHQgFAHgKACQgKACgPAAg");
	this.shape_9.setTransform(271.15,-76.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgUBtIAAjZIApAAIAADZg");
	this.shape_10.setTransform(261.025,-81.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgUBtIAAjZIApAAIAADZg");
	this.shape_11.setTransform(253.975,-81.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgpBSQgJgEgEgGQgEgHgCgIQgDgJAAgIQAAgMADgIQACgJAFgGQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgIQAAgKgFgFQgFgGgJAAQgKAAgEAGQgFAGgBAKIAAAEIgmAAIAAgEQABgOAEgKQAEgJAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAGAHQAHAGACAKQACAJAAALIAABWIABASIAEAOIgoAAIgDgJIgCgIIgBAAQgHAMgKAEQgIAEgQAAQgLAAgHgEgAAKAGIgJACQgMADgGAHQgFAGAAALQAAAKADAGQAEAHAJAAIAIgBQAEgCAEgDQADgDADgFQADgFAAgGIAAghg");
	this.shape_12.setTransform(243.1,-78.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgbBSQgLgEgIgJQgIgLgEgQQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKAMgEQAMgDAOAAQAdAAAPARQAPARAAAdIgoAAIgBgMIgDgKQgCgFgEgDQgEgDgFAAQgHAAgFAEQgFADgCAHQgDAHgBALIgBAYIABAaQABALADAHQACAHAEADQAFADAGAAQALAAAEgJQAGgJAAgUIAoAAQAAAggOARQgPARgiAAQgPAAgMgEg");
	this.shape_13.setTransform(229.05,-78.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBvIAAikIApAAIAACkgAgUhJIAAglIApAAIAAAlg");
	this.shape_14.setTransform(218.575,-81.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgCBpQgIgCgFgFQgEgFgBgIQgBgJAAgNIAAhcIgWAAIAAgdIAWAAIAAgwIAoAAIAAAwIAZAAIAAAdIgZAAIAABYQAAAKAEADQACAFAJAAIAGAAIAEgBIAAAdIgNABIgPAAQgMABgGgCg");
	this.shape_15.setTransform(210.75,-81.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgpBSQgJgEgEgGQgEgHgCgIQgDgJAAgIQAAgMADgIQACgJAFgGQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgIQAAgKgFgFQgFgGgJAAQgKAAgEAGQgFAGgBAKIAAAEIgmAAIAAgEQABgOAEgKQAEgJAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAGAHQAHAGACAKQACAJAAALIAABWIABASIAEAOIgoAAIgDgJIgCgIIgBAAQgHAMgKAEQgIAEgQAAQgLAAgHgEgAAKAGIgJACQgMADgGAHQgFAGgBALQABAKADAGQAEAHAJAAIAIgBQAEgCAEgDQADgDADgFQADgFAAgGIAAghg");
	this.shape_16.setTransform(199,-78.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA8BUIAAhyQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAGAAAPIAABrIgpAAIAAhyQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAGAAAPIAABrIgqAAIAAijIAoAAIAAARIABAAQAIgMAKgFQAKgEAOgBQAOABAJAGQAKAHAEAMIAAAAQAFgMALgHQALgGAPgBQAVAAAKANQAKAMAAAZIAAB2g");
	this.shape_17.setTransform(180.425,-79.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgeBRQgNgFgIgLQgHgKgDgRQgDgQAAgWQAAgUADgQQAEgQAIgLQAHgLANgGQAMgFARAAQATgBANAFQAMAGAIALQAHALADAQQADARAAAUQAAAVgEARQgDAQgHALQgIALgMAFQgNAFgSAAQgSAAgMgFgAgLg0QgEAEgDAIQgDAHAAALIAAAWIAAAYQAAAKADAIQADAIAEAEQAFAEAGAAQANAAAFgNQAFgOAAgfQAAgegFgNQgFgOgNAAQgGAAgFAFg");
	this.shape_18.setTransform(161.7,-78.9273);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgDBpQgIgCgDgFQgFgFgBgIQgCgJABgNIAAhcIgWAAIAAgdIAWAAIAAgwIApAAIAAAwIAYAAIAAAdIgYAAIAABYQAAAKADADQADAFAIAAIAGAAIAEgBIAAAdIgNABIgPAAQgLABgIgCg");
	this.shape_19.setTransform(150.2,-81.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgzBKQgLgLAAgZIAAh5IArAAIAABxQAAAMAEAGQAEAFAKAAQAVAAAAgcIAAhsIArAAIAACkIgpAAIAAgUIgBAAQgGANgLAFQgKAFgOAAQgUAAgLgKg");
	this.shape_20.setTransform(138.225,-78.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAnBtIgKguIg5AAIgKAuIguAAIA6jZIA1AAIA6DZgAAWAbIgWhhIAAAAIgUBhIAqAAg");
	this.shape_21.setTransform(122.325,-81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_digitize, new cjs.Rectangle(70.6,-102.4,351.1,40.800000000000004), null);


(lib.txt_categorize = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(392.025,-72.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgdBTQgLgEgHgGQgHgHgDgKQgDgJAAgMIAAgGIAmAAIAAAFQAAALAFAHQAHAGAKAAQAJAAAGgFQAFgFABgJQAAgIgFgEQgFgFgGgCIgcgLQgSgGgJgKQgJgLAAgSQAAgKADgJQAEgJAHgHQAIgGALgEQAMgEAPAAQAcAAAOAMQAPAMAAAXIAAAGIgnAAQABgNgFgGQgEgGgLAAQgGAAgGAFQgGAEAAAJQAAAGAEAFQADAFALAEIAYAIQAVAHAHAKQAJALAAASQAAANgEAKQgFAKgJAGQgIAHgLACQgLADgNAAQgRAAgMgDg");
	this.shape_1.setTransform(381.85,-78.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDBpQgHgCgEgFQgEgFgCgJQgBgIgBgMIAAhdIgVAAIAAgeIAVAAIAAgvIAqAAIAAAvIAYAAIAAAeIgYAAIAABXQAAALACADQAEAEAIAAIAGAAIAEAAIAAAeIgOAAIgOABQgLgBgIgBg");
	this.shape_2.setTransform(370.9,-80.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("Ag/BvIAAjZIAoAAIAAASIAAAAQAIgMAIgFQAIgFANAAQAaAAAMAVQAMAUAAAtQAAAtgMAUQgMAVgaAAQgMAAgIgFQgIgFgGgKIgBAAIAABFgAgRhAQgEANAAAbQAAAaAEAOQAEAOANAAQAOAAAEgOQAFgOAAgaQAAgbgFgNQgEgOgOAAQgNAAgEAOg");
	this.shape_3.setTransform(359.15,-75.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgUBvIAAilIApAAIAAClgAgUhKIAAgkIApAAIAAAkg");
	this.shape_4.setTransform(347.925,-81.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgiBOQgNgHgGgNQgGgMgCgQIgBgeQAAgRACgPQADgPAGgMQAIgMAMgHQANgHAUAAQATAAAMAGQALAGAHAKQAHALADAQQACAPAAATIAAAJIhSAAIAAANIABAOIADAMQADAGAEADQADADAFAAQALAAAFgHQAEgIACgQIAnAAQgCAdgOAPQgOAPgeAAQgWAAgNgIgAgIg2QgEADgDAFIgDALIgBALIAAAHIApAAIgBgRQgBgHgCgFQgCgFgFgDQgEgDgGAAQgGAAgDADg");
	this.shape_5.setTransform(337.45,-78.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgbBSQgLgEgIgJQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgQAJgKQAIgKANgEQAMgEAOAAQAdAAAPARQAPARAAAdIgpAAIAAgMIgDgKQgCgFgEgDQgEgDgFAAQgIAAgEAEQgFADgCAHQgDAHgBALIgBAYIABAaQABALADAHQACAHAEADQAFADAGAAQALAAAEgJQAGgJgBgUIApAAQAAAggOARQgQARghAAQgPAAgMgEg");
	this.shape_6.setTransform(323.55,-78.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgiBOQgNgHgGgNQgGgMgCgQIgBgeQAAgRACgPQACgPAHgMQAIgMAMgHQANgHAUAAQATAAAMAGQAMAGAGAKQAHALADAQQACAPAAATIAAAJIhSAAIAAANIABAOIADAMQADAGADADQAEADAFAAQALAAAFgHQAEgIADgQIAmAAQgCAdgOAPQgOAPgfAAQgVAAgNgIgAgJg2QgDADgDAFIgDALIgBALIAAAHIAqAAIgCgRQgBgHgCgFQgDgFgEgDQgEgDgGAAQgGAAgEADg");
	this.shape_7.setTransform(309.65,-78.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgqBVIAAilIAoAAIAAAXIAAAAQAGgMAJgHQAJgIAOABIADAAIAEAAIAAAoIgGAAIgHAAIgLACQgGABgEADQgEAEgDAFQgCAHAAAIIAABig");
	this.shape_8.setTransform(298.45,-78.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgiBOQgNgHgGgNQgGgMgCgQIgBgeQAAgRACgPQADgPAGgMQAIgMAMgHQANgHAUAAQATAAALAGQANAGAGAKQAHALADAQQACAPAAATIAAAJIhSAAIAAANIABAOIADAMQACAGAFADQADADAFAAQALAAAFgHQAEgIACgQIAnAAQgCAdgOAPQgOAPgeAAQgWAAgNgIgAgIg2QgFADgCAFIgDALIgBALIAAAHIApAAIgBgRQgBgHgCgFQgDgFgEgDQgDgDgHAAQgFAAgEADg");
	this.shape_9.setTransform(278.85,-78.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("Ag5BTIAAghIBBhhIg+AAIAAgjIBwAAIAAAhIhBBhIBBAAIAAAjg");
	this.shape_10.setTransform(265.525,-78.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgUBvIAAilIApAAIAAClgAgUhKIAAgkIApAAIAAAkg");
	this.shape_11.setTransform(255.625,-81.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgqBVIAAilIAoAAIAAAXIAAAAQAGgMAJgHQAJgIANABIAFAAIADAAIAAAoIgHAAIgGAAIgLACQgFABgFADQgEAEgDAFQgCAHAAAIIAABig");
	this.shape_12.setTransform(247.85,-78.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgeBRQgNgFgIgLQgHgKgDgRQgDgQAAgWQAAgUADgQQAEgQAIgLQAHgLANgGQAMgFARAAQATgBANAGQAMAFAIALQAHALADAQQADARAAAUQAAAVgEARQgDAQgHALQgIALgMAFQgNAFgSAAQgSAAgMgFgAgLg0QgFAEgCAIQgDAHAAALIAAAWIAAAYQAAAKADAIQACAIAFAEQAFAEAGAAQANAAAEgNQAFgOABgfQgBgegFgNQgEgOgNAAQgGAAgFAFg");
	this.shape_13.setTransform(235.05,-78.3271);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AguBlQgOgMAAgVIAoAAQAAAIAGAFIAHADIAHABQAMAAAGgIQAFgIAAgNIAAgVIgBAAQgGAJgJAFQgJAGgKAAQgZAAgNgTQgMgTAAgsIABgeQACgPAFgMQAGgMAKgIQAKgHARAAQAJAAAJAFQAJAEAGANIABAAIAAgSIAoAAIAACcQAAAfgQAQQgPAQgkAAQgbAAgPgLgAgKhMQgEADgCAHQgDAHgBAMIAAAcIAAAQQABAHADAFQACAGAEAEQAEADAGAAQAHAAAEgDQAEgEADgGQADgGABgIIABgTQAAgegFgMQgFgNgMAAQgGAAgFADg");
	this.shape_14.setTransform(220.075,-75.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgiBOQgNgHgGgNQgGgMgBgQIgCgeQAAgRADgPQABgPAHgMQAIgMAMgHQANgHAUAAQATAAALAGQAMAGAHAKQAHALACAQQADAPAAATIAAAJIhTAAIAAANIACAOIADAMQADAGAEADQADADAFAAQALAAAEgHQAGgIABgQIAmAAQgBAdgOAPQgOAPgeAAQgWAAgNgIgAgIg2QgEADgDAFIgDALIgCALIAAAHIAqAAIgBgRQgBgHgCgFQgDgFgEgDQgDgDgHAAQgFAAgEADg");
	this.shape_15.setTransform(205.85,-78.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgDBpQgHgCgEgFQgEgFgCgJQgBgIgBgMIAAhdIgVAAIAAgeIAVAAIAAgvIAqAAIAAAvIAYAAIAAAeIgYAAIAABXQAAALACADQADAEAKAAIAEAAIAFAAIAAAeIgOAAIgNABQgMgBgIgBg");
	this.shape_16.setTransform(194.6,-80.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBSQgHgEgFgGQgFgHgCgIQgCgJAAgIQAAgMACgIQADgJAFgGQAFgFAIgEIATgHIAWgGQAKgCAEgFQAEgEgBgIQABgKgFgFQgFgGgJAAQgKAAgFAGQgEAGAAAKIAAAEIgmAAIAAgEQgBgOAFgJQAEgKAJgGQAHgGALgDQAKgCAMAAQASAAAMADQAMAEAGAHQAGAHACAJQADAJAAALIAABWIABASIAEAOIgoAAIgEgJIgCgIIAAAAQgIAMgJAEQgJAEgPAAQgLAAgIgEgAAJAGIgJADQgMACgFAHQgGAGABALQAAAKADAGQAEAHAIAAIAIgBQAFgBAEgEQADgDADgFQADgEgBgHIAAghg");
	this.shape_17.setTransform(182.85,-78.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgaBSQgMgEgIgJQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgQAIgKQAKgKALgEQANgEAOAAQAdAAAPARQAPARAAAdIgoAAIgCgMIgCgKQgCgFgEgDQgDgDgHAAQgGAAgFAEQgFADgDAHQgCAHgBALIAAAYIAAAaQABALACAHQADAHAEADQAFADAGAAQALAAAFgJQAEgJABgUIAoAAQAAAggPARQgPARghAAQgPAAgLgEg");
	this.shape_18.setTransform(168.8,-78.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgzBbQgMgUAAguQAAgtAMgUQAMgVAaABQAMAAAIAEQAIAFAGAKIABAAIAAhFIAqAAIAADaIgoAAIAAgSIAAAAQgIALgIAGQgIAEgNAAQgaAAgMgUgAgRgPQgEAOAAAaQAAAbAEANQAEAPANAAQAOAAAEgPQAFgNgBgbQABgagFgOQgEgNgOAAQgNAAgEANg");
	this.shape_19.setTransform(147.1,-80.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAUBVIAAhxQABgNgFgFQgFgFgJAAQgVAAAAAbIAABtIgrAAIAAilIApAAIAAAUIABAAQAGgNALgFQAKgFANAAQAVgBALALQAKALABAZIAAB6g");
	this.shape_20.setTransform(132.25,-78.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAnBtIgKguIg5AAIgKAuIguAAIA6jZIA1AAIA6DZgAAVAbIgVhhIAAAAIgVBhIAqAAg");
	this.shape_21.setTransform(116.425,-80.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_categorize, new cjs.Rectangle(76.4,-101.7,350.6,40.7), null);


(lib.shaq_endFrame_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_endFrame();
	this.instance.setTransform(363.2,-338.05,0.7155,0.7155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_endFrame_1, new cjs.Rectangle(363.2,-338,65.90000000000003,186), null);


(lib.printer_endFrame = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptPrinter_02();
	this.instance.setTransform(144.15,-151.8,0.5596,0.5596);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_endFrame, new cjs.Rectangle(144.2,-151.8,111.90000000000003,95.70000000000002), null);


(lib.image_05 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_image_03();
	this.instance.setTransform(-142.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_05, new cjs.Rectangle(-142.9,-199,232,90), null);


(lib.image_04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_image_02();
	this.instance.setTransform(-162.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_04, new cjs.Rectangle(-162.9,-199,232,90), null);


(lib.image_03 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptImage_04();
	this.instance.setTransform(-155.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03, new cjs.Rectangle(-155.9,-199,232,90), null);


(lib.image_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.receiptImage_03();
	this.instance.setTransform(-153.45,-198.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02, new cjs.Rectangle(-153.4,-198.5,232,90), null);


(lib.image_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_image_01();
	this.instance.setTransform(-160.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01, new cjs.Rectangle(-160.9,-199,232,90), null);


(lib.epson_logo_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ApQCoIAAlPIShAAIAAFPg");
	mask.setTransform(-71.725,3.275);

	// Layer_1
	this.instance = new lib.epson_logo();
	this.instance.setTransform(-128.45,-8.8,0.9208,0.9208);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo_1, new cjs.Rectangle(-128.4,-8.8,114.2,28.900000000000002), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHlA8QgRgRAAgXIAAhYQAAgFAEAAIAUAAQAEAAAAAFIAABWQAAAOAIAIQAIAJAOAAQAOAAAJgJQAIgIAAgOIAAhWQAAgFAEAAIAUAAQAEAAAAAFIAABYQAAAXgRARQgRAPgZABQgZgBgQgPgAE3A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAgABAWAVQAWAXABAeQgBAggWAVQgWAXggAAQgfAAgWgXgAFLghQgOAOgBATQABAUAOAOQAOAPATAAQAVAAANgPQAPgOAAgUQAAgTgPgOQgNgPgVAAQgTAAgOAPgAj/A1QgWgVAAggQAAgeAWgXQAXgVAfgBQAdAAAWAUQADADgDADIgMANQgDADgDgDQgOgMgTAAQgTAAgOAOQgNAPAAATQAAAUAOANQANAPAUAAQARAAAPgMQADgCADACIAMAOQADACgDADQgVAVgeAAQgfAAgXgXgAqtA1QgXgVAAggQAAgeAXgXQAWgVAggBQAdAAAVAUQADADgDADIgMANQgDADgDgDQgOgMgSAAQgTAAgOAOQgOAPAAATQAAAUAOANQANAPAVAAQARAAAOgMQADgCADACIANAOQACACgDADQgUAVgeAAQggAAgWgXgAKJBKQgEgBAAgEIAAh1IggAAQgEAAAAgDIAAgRQAAgFAEAAIBbAAQAEAAABAFIAAARQgBADgEAAIgfAAIAAB1QgBAEgEABgACgBKQgEgBAAgEIAAh1IggAAQgEAAAAgDIAAgRQAAgFAEAAIBcAAQADAAAAAFIAAARQAAADgDAAIghAAIAAB1QAAAEgDABgABHBKQgEgBAAgEIAAiJQAAgFAEAAIAUAAQADAAAAAFIAACJQAAAEgDABgAgiBKQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIg2hDIAABAQAAAEgFABIgSAAQgGgBAAgEIAAiIQAAgGAGAAIASAAQAFAAAAAGIAAA4IA1g8QAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAVAAQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQABACgCADIg3A+IA7BFQACACgBADQgBABAAAAQAAABgBAAQAAAAgBAAQgBABgBAAgAmDBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAFAAAAAFIAAARQAAADgFAAIg+AAIAAAjIA0AAQAEAAAAAEIAAAQQAAAFgEAAIg0AAIAAAlIA+AAQAFAAAAADIAAARQAAAEgFABgAnEBKQgEgBAAgEIAAg5IhFAAIAAA5QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAA3IBFAAIAAg3QAAgFAEAAIATAAQAEAAAAAFIAACJQAAAEgEABg");
	this.shape.setTransform(0.75,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,191,51.5), null);


(lib.computer_screen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printerScreen();
	this.instance.setTransform(-157.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.computer_screen, new cjs.Rectangle(-157.9,-199,232,90), null);


(lib.receipt_noShdw = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AC1PdQh9gBgfgDIibgMQiggJgTAFQgIhCgChWQgFiqAZhiQAKhmAFiNQAKkagZjCQgIi7gCjCQgFmGAZgmQAYACAjgBQBHgBA8gKIGZAzQgIB0gFCLQgKEWANBzIAPFGQAMFWgMBRIgTDmQgPDxATA7Ih3AAg");
	mask.setTransform(-46.4292,110.5);

	// receipt_01
	this.instance = new lib.receipt_01();
	this.instance.setTransform(-44.5,112.65,0.6312,0.6312,0,0,0,-70.5,178.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.receipt_noShdw, new cjs.Rectangle(-78.5,11.6,64.2,197.9), null);


(lib.paper_receipts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// receipt_05
	this.instance = new lib.receipt_05();
	this.instance.setTransform(-724.3,492.2,1.2747,1.2747,-15.4722,0,0,-66.1,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-66,scaleX:1,scaleY:1,rotation:0,x:-486.15,y:396.1},8,cjs.Ease.quadInOut).wait(38).to({regX:-66.1,scaleX:1.2747,scaleY:1.2747,rotation:-15.4722,x:-724.3,y:492.2},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_04
	this.instance_1 = new lib.receipt_04();
	this.instance_1.setTransform(166.15,302.3,1,1,-15.7278,0,0,-75,164.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:164.6,rotation:-2.7506,x:18.1,y:366.2},8,cjs.Ease.quadInOut).wait(36).to({rotation:-2.7506},0).to({regY:164.7,rotation:-15.7278,x:166.15,y:302.3},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_03
	this.instance_2 = new lib.receipt_03();
	this.instance_2.setTransform(-332.1,568.15,1.431,1.431,0,0,0,-103,79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:-286,y:362.1},8,cjs.Ease.quadInOut).wait(36).to({scaleX:1.431,scaleY:1.431,x:-332.1,y:568.15},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_02
	this.instance_3 = new lib.receipt_02();
	this.instance_3.setTransform(-104.15,566.1,1.1692,1.1692,31.9376,0,0,-96,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-146.05,y:360.05},8,cjs.Ease.quadInOut).wait(38).to({scaleX:1.1692,scaleY:1.1692,x:-104.15,y:566.1},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_01
	this.instance_4 = new lib.receipt_01();
	this.instance_4.setTransform(-63.95,142.25,0.9999,0.9999,-64.1841,0,0,-70.7,178.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:-70.6,rotation:-23.6896,x:-45.95,y:358.2},8,cjs.Ease.quadInOut).wait(37).to({regX:-70.7,rotation:-64.1841,x:-63.95,y:142.25},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_04
	this.instance_5 = new lib.receipt_04();
	this.instance_5.setTransform(0,584.4,1.0668,1.0668,33.4891,0,0,-75,164.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({regX:-75.1,scaleX:1,scaleY:1,rotation:8.749,x:-98,y:370.35},8,cjs.Ease.quadInOut).wait(37).to({rotation:8.749},0).to({regX:-75,scaleX:1.0668,scaleY:1.0668,rotation:33.4891,x:0,y:584.4},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_04
	this.instance_6 = new lib.receipt_04();
	this.instance_6.setTransform(-520.2,160.25,0.9999,0.9999,43.9588,0,0,-75.1,164.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({regX:-75,rotation:22.9662,x:-404.05,y:380.45},8,cjs.Ease.quadInOut).wait(34).to({regX:-75.1,rotation:43.9588,x:-520.2,y:160.25},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_01
	this.instance_7 = new lib.receipt_01();
	this.instance_7.setTransform(-332.2,140.1,1,1,18.1922,0,0,-70.7,178.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regX:-70.5,rotation:-0.9959,x:-324.05,y:356.15},8,cjs.Ease.quadInOut).wait(37).to({rotation:-0.9959},0).to({regX:-70.7,rotation:18.1922,x:-332.2,y:140.1},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	// receipt_05
	this.instance_8 = new lib.receipt_05();
	this.instance_8.setTransform(-205.9,148.1,1.2293,1.2293,-52.4195,0,0,-66.1,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-66,scaleX:1,scaleY:1,rotation:-16.7234,x:-228,y:346.1},8,cjs.Ease.quadInOut).wait(38).to({rotation:-16.7234},0).to({regX:-66.1,scaleX:1.2293,scaleY:1.2293,rotation:-52.4195,x:-205.9,y:148.1},7,cjs.Ease.quadInOut).wait(7).to({_off:true},1).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-844.8,-51.5,1127.6999999999998,826.2);


(lib.printer_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paper_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvOLpIAA3RIedAAIAAXRg");
	mask.setTransform(-134.5,326.45);

	// Layer_4
	this.instance = new lib.receipt_noShdw();
	this.instance.setTransform(-175.1,145,1,1,5.7256,0,0,-44.6,112.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7255,x:-178.1,y:215},24,cjs.Ease.quadInOut).wait(7));

	// Layer_3
	this.instance_1 = new lib.receipt_noShdw();
	this.instance_1.setTransform(-135,155,1,1,0,0,0,-44.5,112.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-138,y:225},24,cjs.Ease.quadInOut).wait(7));

	// Layer_6
	this.instance_2 = new lib.receipt_noShdw();
	this.instance_2.setTransform(-79.05,133.1,1,1,-2.7358,0,0,-44.6,112.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-82.05,y:203.1},24,cjs.Ease.quadInOut).wait(7));

	// Layer_5
	this.instance_3 = new lib.receipt_noShdw();
	this.instance_3.setTransform(-110.1,142,1,1,-0.2649,0,0,-44.6,112.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-113.1,y:212},24,cjs.Ease.quadInOut).wait(7));

	// Layer_1
	this.instance_4 = new lib.receiptPrinter_01();
	this.instance_4.setTransform(-270,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,0,270,341);


// stage content:
(lib.Epson_rapidReceipt_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo_1();
	this.instance.setTransform(80,41.05,1,1,0,0,0,-62,21);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(352));

	// Layer_55
	this.instance_1 = new lib.txt_cake();
	this.instance_1.setTransform(115.5,357.15,1,1,0,0,0,-154.6,38);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350).to({_off:false},0).to({alpha:1},6).wait(4));

	// txt_RR_endFrame
	this.instance_2 = new lib.txt_RR_endFrame();
	this.instance_2.setTransform(150,117.55,1,1,0,0,0,-115.7,11.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(343).to({_off:false},0).to({y:139.55,alpha:1},6).wait(11));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_350 = new cjs.Graphics().p("AoMC0QgqAAAAgqIAAAAIAAkTQAAgqAqAAIAAAAIQZAAQAqAAAAAqIAAAAIAAETQAAAqgqAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_graphics_350,x:605.9673,y:65.4673}).wait(10));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUZg");
	this.shape_1.setTransform(527.625,42.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_2.setTransform(531.275,44.5);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_3.setTransform(542.125,49.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_4.setTransform(641.975,91.15);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},350).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:542.125,y:49.05}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:616.575,y:80.45}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:670.975,y:103.4}}]},1).to({state:[{t:this.shape_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(351).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:560.275,y:56.75},0).wait(1).to({x:585.675,y:67.45},0).to({_off:true},1).wait(2).to({_off:false,x:660.125,y:98.85},0).to({_off:true},1).wait(1).to({_off:false,x:674.625,y:104.95},0).wait(1));

	// ctaBtn
	this.instance_3 = new lib.ctaBtn();
	this.instance_3.setTransform(606.7,66.2,0.6972,0.6972,0,0,0,1.1,1.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(352).to({_off:false},0).to({alpha:1},7).wait(1));

	// printer_endFrame
	this.instance_4 = new lib.printer_endFrame();
	this.instance_4.setTransform(245.9,192.65,0.7625,0.7625,0,0,0,-100,85.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(343).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:150.95,y:252.1,alpha:1},7,cjs.Ease.quadOut).wait(10));

	// shaq_endFrame
	this.instance_5 = new lib.shaq_endFrame_1();
	this.instance_5.setTransform(346,471,1,1,0,0,0,-46,130);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(346).to({_off:false},0).to({x:254},7,cjs.Ease.quadOut).wait(7));

	// txt_relief
	this.instance_6 = new lib.txt_relief();
	this.instance_6.setTransform(148.95,162.95,1,1,0,0,0,-154.6,17.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(302).to({_off:false},0).to({y:140.95,alpha:1},7,cjs.Ease.quadOut).wait(27).to({alpha:0},6).to({_off:true},1).wait(17));

	// image_05
	this.instance_7 = new lib.image_05();
	this.instance_7.setTransform(139,311.1,1,1,0,0,0,-160,112);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(302).to({_off:false},0).to({alpha:1},7).wait(27).to({alpha:0},6).to({_off:true},1).wait(17));

	// txt_monetized
	this.instance_8 = new lib.txt_monetized();
	this.instance_8.setTransform(149.95,169.9,1,1,0,0,0,-154.6,32.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(262).to({_off:false},0).to({y:143.9,alpha:1},7,cjs.Ease.quadOut).wait(29).to({y:107.9,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(54));

	// image_04
	this.instance_9 = new lib.image_04();
	this.instance_9.setTransform(159,311,1,1,0,0,0,-160,112);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(264).to({_off:false},0).to({alpha:1},7).to({_off:true},38).wait(51));

	// txt_categorize
	this.instance_10 = new lib.txt_categorize();
	this.instance_10.setTransform(149.95,153.95,1,1,0,0,0,-154.6,17.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(221).to({_off:false},0).to({y:143.95,alpha:1},7,cjs.Ease.quadOut).wait(31).to({y:117.95,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(93));

	// computer_screen
	this.instance_11 = new lib.computer_screen();
	this.instance_11.setTransform(154,285.05,1,1,0,0,0,-160,86);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(221).to({_off:false},0).to({alpha:1},7).wait(31).to({alpha:0},7).to({_off:true},1).wait(93));

	// txt_organize
	this.instance_12 = new lib.txt_organize();
	this.instance_12.setTransform(149.95,157.95,1,1,0,0,0,-154.6,17.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(181).to({_off:false},0).to({y:143.95,alpha:1},7,cjs.Ease.quadOut).wait(29).to({y:127.95,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(135));

	// image_03
	this.instance_13 = new lib.image_03();
	this.instance_13.setTransform(152,311.05,1,1,0,0,0,-160,112);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(177).to({_off:false},0).to({alpha:1},7).wait(33).to({alpha:0},7).to({_off:true},1).wait(135));

	// txt_digitize
	this.instance_14 = new lib.txt_digitize();
	this.instance_14.setTransform(150.5,157.5,1,1,0,0,0,-154.6,17.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(144).to({_off:false},0).to({y:145.5,alpha:1},5,cjs.Ease.quadOut).wait(28).to({y:117.5,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(175));

	// image_02
	this.instance_15 = new lib.image_02();
	this.instance_15.setTransform(150,311,1,1,0,0,0,-160,112);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(144).to({_off:false},0).to({alpha:1},5).to({_off:true},36).wait(175));

	// txt_RRScanners
	this.instance_16 = new lib.txt_RRScanners();
	this.instance_16.setTransform(149.5,132.1,1,1,0,0,0,-120.6,12.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(96).to({_off:false},0).to({y:148.1,alpha:1},7,cjs.Ease.quadOut).wait(35).to({alpha:0},6).to({_off:true},1).wait(215));

	// printer_01
	this.instance_17 = new lib.printer_01("single",0);
	this.instance_17.setTransform(324,25.85,0.4894,0.4894,0,0,0,-134.9,170.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({x:274,alpha:1,mode:"synched",loop:false},7,cjs.Ease.quadOut).wait(35).to({mode:"single",startPosition:30},0).to({alpha:0},6).to({_off:true},1).wait(215));

	// txt_notForLong
	this.instance_18 = new lib.txt_notForLong();
	this.instance_18.setTransform(150.2,153.75,1,1,0,0,0,-68,17.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50).to({_off:false},0).to({y:143.75,alpha:1},7,cjs.Ease.quadOut).wait(32).to({alpha:0},6).to({_off:true},1).wait(264));

	// txt_overwhelmed
	this.instance_19 = new lib.txt_overwhelmed();
	this.instance_19.setTransform(151.2,260.6,1,1,0,0,0,-129.4,54.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).to({alpha:1},8).wait(32).to({alpha:0},7).to({_off:true},1).wait(308));

	// paper_receipts
	this.instance_20 = new lib.paper_receipts("synched",0,false);
	this.instance_20.setTransform(459.6,39.25,1,1,0,0,0,-214.3,349.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},61).wait(299));

	// image_01
	this.instance_21 = new lib.image_01();
	this.instance_21.setTransform(157,311.05,1,1,0,0,0,-160,112);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(48).to({_off:false},0).wait(41).to({alpha:0},6).to({_off:true},1).wait(264));

	// background_color
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_5.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(193.1,-316.6,763.6999999999999,781.2);
// library properties:
lib.properties = {
	id: '8E5913087FB946AB926391FBB5EDFA33',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"epson_logo.png", id:"epson_logo"},
		{src:"printerScreen.jpg", id:"printerScreen"},
		{src:"receiptImage_03.jpg", id:"receiptImage_03"},
		{src:"receiptImage_04.jpg", id:"receiptImage_04"},
		{src:"receiptPaper_01.png", id:"receiptPaper_01"},
		{src:"receiptPaper_02.png", id:"receiptPaper_02"},
		{src:"receiptPaper_03.png", id:"receiptPaper_03"},
		{src:"receiptPaper_04.png", id:"receiptPaper_04"},
		{src:"receiptPaper_05.png", id:"receiptPaper_05"},
		{src:"receiptPrinter_01.jpg", id:"receiptPrinter_01"},
		{src:"receiptPrinter_02.jpg", id:"receiptPrinter_02"},
		{src:"shaq_endFrame.jpg", id:"shaq_endFrame"},
		{src:"shaq_image_01.jpg", id:"shaq_image_01"},
		{src:"shaq_image_02.jpg", id:"shaq_image_02"},
		{src:"shaq_image_03.jpg", id:"shaq_image_03"}
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
an.compositions['8E5913087FB946AB926391FBB5EDFA33'] = {
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