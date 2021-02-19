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
p.nominalBounds = new cjs.Rectangle(0,0,117,50);


(lib.receiptImage_03 = function() {
	this.initialize(img.receiptImage_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,50);


(lib.receiptImage_04 = function() {
	this.initialize(img.receiptImage_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,50);


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
p.nominalBounds = new cjs.Rectangle(0,0,117,50);


(lib.shaq_image_02 = function() {
	this.initialize(img.shaq_image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,50);


(lib.shaq_image_03 = function() {
	this.initialize(img.shaq_image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,50);// helper functions:

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
	this.shape.setTransform(-18.9416,-305.5831,0.2524,0.2524);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cake, new cjs.Rectangle(-309,-313.6,309.3,389.6), null);


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
	this.shape.graphics.f("#353535").s().p("AHXBxQgMgEgHgHQgGgHgEgKQgCgKAAgMIAAgGIAnAAIAAAGQgBAMAHAGQAFAHALAAQALAAAFgFQAHgFAAgLQgBgIgEgEQgFgEgHgDIgegLQgSgGgJgLQgIgMAAgSQgBgJAEgKQADgIAIgHQAGgIANgEQAMgEARAAQAdAAAOAMQAOANAAAXIAAAHIgmAAQgBgNgEgGQgEgGgLAAQgIAAgGAFQgHADAAAJQABAHAEAFQADAEALADIAaAJQAVAIAJAKQAIAMAAATQAAAOgFAJQgFALgHAGQgKAGgLADQgLADgOABQgSAAgNgEgADhBtQgNgJgGgMQgHgNgBgRIgCgfQAAgSADgOQACgPAHgNQAHgMANgIQAOgHAWAAQATAAAMAGQANAHAGAKQAHALADAQQABAQAAASIAAAKIhVAAIABAdIAEAMQACAGAEADQAFAEAFAAQALAAAGgJQAEgHACgQIAoAAQgCAegOAPQgPAQgfAAQgYgBgNgHgAD7gbQgEADgCAEIgEALIgBASIAsAAIgBgRIgDgMQgCgFgFgDQgEgCgHAAQgGAAgFADgAjuBwQgHgEgEgGQgFgHgDgJQgCgIAAgKQAAgLADgJQADgJAEgGQAGgGAHgEQAIgFAMgCIAYgHQAKgCAEgFQAEgDgBgJQAAgJgDgGQgFgFgMAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQgBgOAFgKQAGgLAGgFQAJgHALgCQAKgDAMAAQAVAAALADQANAFAGAGQAHAIACAJQACAKAAALIABBrIAFAOIgqAAIgGgSIAAAAQgIAOgKADQgJAEgRABQgKgBgJgEgAi4AhIgKAEQgMACgGAIQgGAFAAAMQAAAKAEAHQAEAHAIAAIAKgCQAEgBAEgDQAEgEADgEQACgFAAgIIAAghgAlvBwQgLgEgIgJQgIgLgFgRQgEgRAAgaQABgaAFgQQAEgRAKgLQAJgJAMgFQANgEAPAAQAeAAAQASQAPARAAAdIgpAAIgBgLIgEgKQgCgFgDgDQgEgEgGAAQgIAAgGAEQgEADgDAIQgCAGgBALIAAA0QABAMACAHQACAHAFADQAFAEAHAAQALAAAFgKQAFgJABgVIApAAQAAAigPARQgPARgjABQgRgBgMgEgAojBkQgRgRAAggIAAgJIAtAAIABAVQABAHAEAFQADAEAHADQAFACAJAAQALAAAHgHQAJgHAAgOQAAgHgCgHQgCgFgFgEQgEgFgIgDIgTgHQgPgGgLgGQgLgGgIgGQgHgJgDgKQgEgLAAgOQAAggASgRQAUgQAfAAQAPgBANAEQANADAKAHQAJAIAFALQAFAMABAQIAAAGIgsAAQgBgQgFgJQgGgIgNAAQgIAAgEACQgFADgDADQgDADgBAFIgCAKQAAALAFAGQAEAIAOAGIAkAOQANAGAHAGQAJAGAFAGQAFAIABAJQADAIAAAKQgBAkgUAQQgVAQglABQglAAgRgRgAFZBxIAAipIAqAAIAAAXIABAAQAGgNAKgGQAKgIANAAIAEAAIAEABIAAApIgNgBIgMADQgGABgFADQgEAEgEAFQgCAGAAAIIAABmgACGBxIAAh0QAAgNgFgGQgFgEgJAAQgYAAAAAaIAABxIgrAAIAAipIAqAAIAAAUIAAAAQAHgMAMgGQALgGAOAAQAUAAALALQAMAMAAAZIAAB9gAgUBxIAAh0QAAgNgEgGQgFgEgKAAQgXAAAAAaIAABxIgrAAIAAipIApAAIAAAUIABAAQAGgMAMgGQALgGAOAAQAUAAALALQALAMAAAZIAAB9g");
	this.shape.setTransform(-64.3104,-111.1509,0.5017,0.5017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25317E").s().p("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");
	this.shape_1.setTransform(-136.2637,-109.834,0.5017,0.5017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RRScanners, new cjs.Rectangle(-176.5,-117,140.6,14.299999999999997), null);


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
	this.shape.graphics.f("#25317E").s().p("AHVB0IAAi3IAiAAIAAAPIAAAAQAHgKAHgEQAHgFALAAQAWAAAKASQALARAAAmQAAAngLAQQgKARgWAAQgKAAgHgEQgHgEgGgIIgBAAIAAA6gAH8ggQgEAMAAAWQAAAWAEAMQAEALAMAAQALAAADgLQAEgMAAgWQAAgWgEgMQgDgLgLAAQgMAAgEALgAmNB0IAAi3IAiAAIAAAPIABAAQAGgKAHgEQAHgFALAAQAWAAAKASQALARAAAmQAAAngLAQQgKARgWAAQgKAAgHgEQgHgEgGgIIAAAAIAAA6gAlmggQgDAMAAAWQAAAWADAMQAEALAMAAQALAAAEgLQAEgMAAgWQAAgWgEgMQgEgLgLAAQgMAAgEALgAE2BDQgKgGgGgKQgFgLgBgNIgBgbQAAgNACgNQACgMAFgLQAGgKALgGQALgGASAAQAQAAAKAFQAKAFAFAKQAGAJACANQACANAAAQIAAAHIhGAAIAAAXIAEALQABAEAEADQADADAFAAQAJAAAEgHQAEgGACgOIAgAAQgBAZgMAMQgMANgaAAQgTAAgLgHgAFMgsQgEADgBADIgEAKIAAAPIAkAAIgBgOQgBgGgCgFQgCgEgDgCQgEgCgFAAQgGAAgDACgADHBHQgKgEgGgIQgHgIgDgOQgEgPAAgUQAAgVAFgOQADgOAIgJQAIgIAKgDQAKgEANAAQAZAAAMAPQANAOAAAZIgiAAIgBgKIgDgJQgBgEgDgCQgDgDgGAAQgGAAgEADQgEADgCAGQgCAGgBAJIAAAqQABAJACAGQACAGADADQAEADAGAAQAJAAAEgIQAFgIAAgRIAiAAQAAAbgNAPQgMAOgcAAQgOAAgKgDgABLBDQgKgGgFgKQgGgLgBgNIgBgbQAAgNACgNQACgMAFgLQAGgKALgGQALgGASAAQAQAAAKAFQAKAFAFAKQAGAJACANQACANAAAQIAAAHIhGAAIAAAXIAEALIAFAHQADADAFAAQAJAAAEgHQAEgGACgOIAgAAQgBAZgMAMQgMANgZAAQgUAAgLgHgABhgsIgFAGIgEAKIAAAPIAkAAIgBgOQgBgGgCgFQgCgEgDgCQgEgCgFAAQgGAAgDACgAjLA5QgLgQAAgnQAAgmALgRQAKgSAWAAQAKAAAHAEQAHAFAGAIIABAAIAAg6IAjAAIAAC3IgiAAIAAgPIAAAAQgHAKgHAEQgHAEgLAAQgWAAgKgRgAiuggQgEAMAAAWQAAAWAEAMQADALALAAQAMAAAEgLQAEgMAAgWQAAgWgEgMQgEgLgMAAQgLAAgDALgAn6BHQgGgEgEgFQgEgGgCgHQgBgHAAgHQAAgKACgHQACgHAEgFQAFgFAGgDQAGgDAKgCIAUgGQAIgCADgEQADgDAAgHQAAgIgDgFQgEgEgJAAQgIAAgFAFQgEAEAAAJIAAAEIggAAIAAgEQAAgMAEgIQAEgIAGgFQAHgFAJgCQAJgDAKAAQAQAAAKADQAKAEAFAFQAGAGACAIQACAIAAAJIABBYIADALIgiAAIgFgOIAAAAQgHAKgIAEQgIADgNAAQgJAAgHgDgAnOAGIgHACQgLADgFAGQgEAFAAAJQAAAIADAGQADAGAHAAIAIgCQAEgBADgDQADgCACgEQACgEAAgGIAAgbgAJsBHQgHgCgDgEQgEgEgBgHQgBgHAAgLIAAhPIgTAAIAAgYIATAAIAAgoIAjAAIAAAoIAVAAIAAAYIgVAAIAABKQAAAJADADQACAEAIAAIAEAAIAEgBIAAAZIgXABQgKAAgHgBgAGaBHIAAiKIAkAAIAACKgAACBHQgCgEgBgFIgCgtQgBgLgFgGQgEgGgMAAIgUAAIAABNIglAAIAAi3IBFAAQAWAAANALQANAMAAAYQAAATgIALQgHAMgQAEIAAAAQAOACAHAHQAGAHABAPIADAvQACAIAFADIAAABgAgtggIAPAAQAOAAAHgGQAHgHAAgPQAAgZgZAAIgSAAgAkNBHIAAiKIAkAAIAACKgAo+BHQgDgEgBgFIgCgtQAAgLgFgGQgFgGgMAAIgUAAIAABNIglAAIAAi3IBFAAQAXAAANALQANAMAAAYQAAATgHALQgIAMgQAEIAAAAQAOACAHAHQAGAHABAPIADAvQACAIAFADIAAABgApuggIAQAAQANAAAHgGQAHgHAAgPQAAgZgZAAIgSAAgAGahUIAAgfIAkAAIAAAfgAkNhUIAAgfIAkAAIAAAfg");
	this.shape.setTransform(-216.1717,-90.7514,0.5969,0.5969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AGDBdQgJgDgGgGQgGgGgCgIQgCgIAAgKIAAgFIAfAAIAAAFQAAAJAGAFQAEAGAJAAQAJAAAFgEQAEgEAAgJQAAgGgDgEQgFgDgEgCIgagKQgOgEgIgKQgHgKAAgNQAAgJACgHQADgIAHgGQAFgFALgEQAJgDAOAAQAYAAALAKQANALAAATIAAAFIghAAQAAgLgDgFQgEgFgJAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADADAJADIAWAHQARAFAGAKQAIAJAAAPQAAAMgEAIQgFAIgGAGQgHAFgJACQgKADgMAAQgOAAgLgDgAC5BZQgKgGgGgLQgFgKgCgOIgBgaQAAgOADgMQABgNAGgKQAGgKALgGQALgGASAAQAQAAAJAFQAKAFAGAJQAFAJADAOQACAMAAAPIAAAJIhHAAIABAXIADAKQACAEADADQAEADAEAAQAKAAAEgHQAEgGACgNIAgAAQgCAYgLANQgMANgaAAQgTAAgLgHgADOgWQgDACgCAEIgDAJIgBAOIAlAAIgCgNQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgEADgAjDBcQgGgDgFgGQgDgFgCgHQgCgHAAgIQAAgJADgHQABgIAFgEQAEgGAGgDIARgGIAUgGQAHgBADgEQADgDAAgHQABgIgEgEQgDgFgKAAQgIAAgEAFQgFAFABAIIAAAEIghAAIAAgDQABgMADgJQAEgIAHgFQAHgFAIgCQAJgCAKAAQAQAAAKADQAKADAFAGQAGAGACAHQACAIAAAKIABBXIAEAMIgiAAIgGgPIAAAAQgGALgIADQgJAEgNAAQgIAAgHgEgAiXAcIgIACQgKACgFAGQgFAFAAAJQAAAJAEAFQACAGAIAAIAHgBQAEgBAEgDIAEgGQACgFAAgFIAAgcgAktBcQgKgDgHgIQgGgJgDgOQgEgOAAgVQAAgVAEgOQAEgOAIgIQAHgIAKgEQALgDANAAQAZAAAMAOQAMAPAAAYIghAAIgCgJIgCgJQgBgEgDgDQgEgCgFAAQgGAAgEADQgFADgBAFQgCAGgBAIIAAArQABAKACAGQACAFADADQAEADAGAAQAJAAAEgIQAFgIAAgQIAhAAQAAAbgMAOQgMAPgdAAQgNAAgKgEgAnDBSQgNgOABgaIAAgHIAlAAIAAARQABAFADAEQADAEAFACQAFACAHAAQAJAAAGgFQAHgGAAgMIgBgLQgCgEgEgEQgEgDgGgDIgQgGQgNgFgIgEQgJgFgHgGQgFgHgEgIQgDgJAAgLQAAgcAQgNQAPgOAbAAQAMAAALADQALADAHAGQAHAGAFAJQAEAKABANIAAAFIgkAAQgBgNgEgHQgFgHgLAAQgGAAgEACIgGAEQgDADgBAEIgBAIQAAAJAEAGQADAFAMAFIAdANQALAEAGAFQAHAFAFAFQADAGABAHQACAHAAAJQAAAdgRANQgQAOgfAAQggAAgOgOgAEcBdIAAiLIAiAAIAAATIABAAQAFgKAIgGQAIgGALAAIADAAIADAAIAAAiIgKAAIgKABQgFACgDADQgEADgDAEQgDAEABAHIAABUgABuBdIAAhfQAAgLgEgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAiAAIAAARIAAAAQAGgLAJgEQAJgFAMAAQARAAAJAJQAJAKAAAVIAABmgAgRBdIAAhfQAAgLgDgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAhAAIAAARIABAAQAGgLAJgEQAJgFALAAQARAAAJAJQAJAKAAAVIAABmg");
	this.shape_1.setTransform(-145.2757,-92.0347,0.5969,0.5969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RR_endFrame, new cjs.Rectangle(-255.6,-97.7,138.1,13.900000000000006), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AByA4QADgBACgDQACgEAAgEIAAgCIgHAAIAAgYIAUAAIgBAfIgDAJQgDAEgDACQgEACgGABgABMAqIAAg3QAAgHgCgCQgCgDgFAAQgLAAAAANIAAA2IgVAAIAAhsIAVAAIAAAkIABAAQAGgLAOAAQAKgBAFAGQAGAFAAANIAAA8gAAAAqIAAg3QAAgHgCgCQgCgDgFAAQgLAAAAANIAAA2IgVAAIAAhsIAVAAIAAAkIABAAQAGgLANAAQAKgBAFAGQAGAFAAANIAAA8gAhHAqIgFgXIgdAAIgFAXIgXAAIAdhsIAbAAIAdBsgAhlABIAVAAIgKgwg");
	this.shape.setTransform(-161.675,-108.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AhfBFIAAhsIAUAAIAAAJIABAAQADgGAFgDQAEgCAGAAQANAAAGAKQAHAKAAAWQAAAXgHAKQgGAKgNAAQgGAAgEgCQgEgDgDgEIgBAAIAAAigAhIgSQgCAHAAAMQAAAOACAGQACAHAHAAQAHAAACgHQADgGAAgOQAAgMgDgHQgCgHgHAAQgHAAgCAHgAEPAoQgHgEgDgGQgDgGgBgIIAAgQIABgOQABgIADgGQAEgGAGgEQAHgDAKAAQAKAAAFADQAGADAEAFQADAGABAHIABARIAAAEIgpAAIAAAOIACAGIADAEQACACADAAQAGAAACgEQACgEABgHIATAAQAAAOgHAHQgHAIgQAAQgLAAgGgEgAEbgZIgDAEIgCAFIAAAJIAVAAIAAgIIgCgHIgDgDQgCgCgDAAQgEAAgCACgAB9AoQgGgEgDgGQgDgGgBgIIgBgQIABgOQACgIADgGQADgGAHgEQAGgDALAAQAJAAAGADQAGADADAFQAEAGABAHIABARIAAAEIgqAAIABAOIACAGIADAEQACACADAAQAFAAACgEQADgEABgHIATAAQgBAOgHAHQgHAIgPAAQgLAAgHgEgACKgZIgDAEIgCAFIgBAJIAWAAIgBgIIgBgHIgEgDQgCgCgDAAQgDAAgCACgAjAAoQgGgEgDgGQgDgGgBgIIgBgQIABgOQACgIADgGQADgGAHgEQAGgDALAAQAJAAAGADQAGADADAFQAEAGABAHIABARIAAAEIgqAAIABAOIACAGIADAEQACACADAAQAFAAACgEQADgEABgHIATAAQgBAOgHAHQgHAIgPAAQgLAAgHgEgAizgZIgDAEIgCAFIgBAJIAWAAIgBgIIgBgHIgEgDQgCgCgDAAQgDAAgCACgAkDAqQgGgCgEgFQgEgFgCgIQgCgIAAgNQAAgMADgIQACgIAFgFQAEgFAGgCQAGgCAIAAQAOAAAIAIQAHAJAAAPIgUAAIgCgMIgDgDQgCgCgDAAQgDAAgDACQgCACgCADIgBAJIAAAYIABAJQACAEACABQACACAEAAQAFAAACgFQADgEAAgKIAUAAQAAAQgHAIQgIAJgQAAQgIAAgGgCgAlOAoQgHgEgDgGQgDgGgBgIIAAgQIABgOQABgIADgGQAEgGAGgEQAHgDAKAAQAKAAAFADQAGADAEAFQADAGABAHIABARIAAAEIgpAAIAAAOIACAGIADAEQACACADAAQAGAAACgEQACgEABgHIATAAQAAAOgHAHQgHAIgQAAQgLAAgGgEgAlCgZIgDAEIgCAFIAAAJIAVAAIAAgIIgCgHIgDgDQgCgCgDAAQgEAAgCACgAgEAqQgEgBgCgCQgCgDAAgEIgBgLIAAguIgLAAIAAgOIALAAIAAgXIAUAAIAAAXIAMAAIAAAOIgMAAIAAAsQAAAFABACQACACAEAAIAFAAIAAAOIgOABIgJgBgAF5AqIAAgYIAUAAIAAAYgAFPAqIAAhDIgKAAIAAgOIAKAAIAAgJQAAgGACgEQABgDADgDIAHgDIAJgBIAMABIAAAPIgDgBIgBAAQgFAAgCACQgCABAAAEIAAAHIANAAIAAAOIgNAAIAABDgADgAqIAAhRIAVAAIAABRgAC7AqIAAhsIAVAAIAABsgAA/AqIAAhRIAUAAIAAALIABAAQADgGAFgDQAEgEAHAAIACAAIACAAIAAAUIgNABIgFACIgDAFQgCADAAAEIAAAwgAiDAqIAAhRIAVAAIAABRgAmMAqIAAhRIAUAAIAAALIAAAAQADgGAFgDQAFgEAGAAIACAAIACAAIAAAUIgMABIgFACIgEAFQgBADAAAEIAAAwgADggxIAAgSIAVAAIAAASgAiDgxIAAgSIAVAAIAAASg");
	this.shape_1.setTransform(-159.475,-90.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_relief, new cjs.Rectangle(-342.7,-121.4,363,39.60000000000001), null);


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
	this.shape.graphics.f("#353535").s().p("AgTBbIAAghIAiAAIAAAhgAgRApIAAgJQAAgNADgJQAEgJAIgJIAJgLQAFgFACgHQADgHAAgHQAAgKgFgGQgEgGgIAAQgJAAgEAIQgFAIABAMIAAAHIgiAAIAAgGQAAgMADgJQAEgKAFgHQAHgGAJgEQAKgFANAAQAZABAOANQANANAAAXQAAAKgEAJQgDAJgJALIgKAKQgHAIgCAGQgEAGAAAJIAAAEg");
	this.shape.setTransform(3.8,-178.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgYBEQgJgDgHgFQgFgFgCgJQgDgIAAgKIAAgEIAgAAIAAAEQAAAJAEAGQAFAFAJAAQAHAAAFgEQAFgEAAgIQAAgHgEgDQgEgDgFgCIgXgJQgPgGgIgIQgGgJgBgPQAAgIADgHQADgHAGgHQAGgFAJgDQAKgDAMAAQAZgBALAKQALALAAASIAAAGIgfAAQAAgLgEgFQgDgEgJAAQgFAAgFADQgFAEAAAHQAAAFADAEQADAEAJADIAUAHQAQAGAIAHQAGAKABAPQgBALgEAIQgDAIgHAGQgHAFgJACQgJACgLABQgOAAgKgEg");
	this.shape_1.setTransform(-7.7,-176.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAOBYIgQgBQgGgBgDgEQgEgFgCgGIgBgSIAAhNIgSAAIAAgYIASAAIAAgnIAiAAIAAAnIAUAAIAAAYIgUAAIAABIQAAAJACADQADAEAIAAIAEAAIADgBIAAAYIgLABg");
	this.shape_2.setTransform(-16.85,-178.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("Ag1BcIAAizIAiAAIAAAOIABAAQAGgJAGgFQAHgEAKAAQAWAAAKARQALAQAAAnQAAAlgLAQQgKARgWAAQgJAAgHgEQgGgEgGgHIAAAAIAAA4gAgOg1QgDALAAAXQAAAVADALQAEALAKAAQAMAAADgLQADgLAAgVQAAgXgDgLQgDgLgMAAQgKAAgEALg");
	this.shape_3.setTransform(-26.6,-174.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgQBbIAAiHIAiAAIAACHgAgQg9IAAgeIAiAAIAAAeg");
	this.shape_4.setTransform(-35.9,-178.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgcBBQgLgHgFgKQgFgKgBgNIgBgZQAAgNACgNQACgNAFgKQAGgKALgFQAKgHARABQAPAAAKAEQAKAFAFAJQAGAKACAMQACANAAAQIAAAGIhEAAIAAAMIABALIADAKQACAFADADQADACAEAAQAJAAAEgGQAEgGACgOIAfAAQgBAYgMANQgLANgZAAQgSgBgLgGgAgHgsQgDACgCAEIgDAJIgBAKIAAAFIAjAAIgBgOQgBgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_5.setTransform(-44.625,-176.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgWBEQgKgDgGgJQgHgHgDgOQgDgOAAgUQAAgVAEgOQAEgOAHgHQAIgJAKgDQAKgDALAAQAYgBANAOQAMAPAAAYIghAAIgBgJIgCgJQgCgFgDgCQgDgCgFAAQgGAAgDADQgFADgCAFQgCAGAAAJIgBAUIABAVQAAAJACAGQACAGAEADQAEACAFAAQAIAAAFgIQAEgHAAgRIAhAAQAAAbgMAOQgMAPgcAAQgMgBgKgDg");
	this.shape_6.setTransform(-56.125,-176.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgcBBQgLgHgFgKQgFgKgBgNIgBgZQAAgNACgNQACgNAFgKQAGgKALgFQAKgHARABQAPAAAKAEQAKAFAFAJQAGAKACAMQACANAAAQIAAAGIhEAAIAAAMIABALIADAKQACAFADADQADACAEAAQAJAAAEgGQAEgGACgOIAfAAQgBAYgMANQgLANgZAAQgSgBgLgGgAgHgsQgDACgCAEIgDAJIgBAKIAAAFIAjAAIgBgOQgBgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_7.setTransform(-67.675,-176.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgjBGIAAiHIAiAAIAAASIAAAAQAFgKAHgGQAIgGAKAAIAEAAIADAAIAAAiIgGgBIgFAAIgJABQgEACgEADQgEADgDAFQgBAEAAAHIAABRg");
	this.shape_8.setTransform(-77,-176.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgsBaIAAgaIAKABQAJAAAEgFQAFgFAAgJIgmiHIAlAAIATBdIAAAAIAShdIAjAAIghB+QgEARgFALQgEAKgGAGQgEAGgIABQgIACgMAAg");
	this.shape_9.setTransform(-93.025,-174.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgFBYQgHgEgHgKIAAAAIAAAPIgiAAIAAi0IAjAAIAAA5IABAAQAGgIAHgEQAGgEAKAAQAVAAAKARQAKAQAAAmQAAAmgKAQQgKARgVAAQgLAAgGgEgAgOgMQgDALgBAWQABAWADALQADALALAAQAMAAADgLQAEgLgBgWQABgWgEgLQgDgLgMAAQgLAAgDALg");
	this.shape_10.setTransform(-104.6,-178.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgqBLQgKgQAAgmQAAgmAKgQQAKgRAWAAQAJAAAGAEQAHAEAGAIIAAAAIAAg5IAjAAIAAC0IghAAIAAgPIgBAAQgFAKgIAEQgGAEgKAAQgWAAgKgRgAgOgMQgDALAAAWQAAAWADALQAEALAKAAQAMAAADgLQADgLAAgWQAAgWgDgLQgDgLgMAAQgKAAgEALg");
	this.shape_11.setTransform(-123.275,-178.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgcBBQgLgHgFgKQgFgKgBgNIgBgZQAAgNACgNQACgNAFgKQAGgKALgFQAKgHARABQAPAAAKAEQAKAFAFAJQAGAKACAMQACANAAAQIAAAGIhEAAIAAAMIABALIADAKQACAFADADQADACAEAAQAJAAAEgGQAEgGACgOIAfAAQgBAYgMANQgLANgZAAQgSgBgLgGgAgHgsQgDACgCAEIgDAJIgBAKIAAAFIAjAAIgBgOQgBgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_12.setTransform(-135.075,-176.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AAxBGIAAhfQAAgIgDgEQgDgFgHAAQgIAAgGAFQgEAGAAAMIAABZIgjAAIAAhfQAAgIgCgEQgEgFgHAAQgJAAgFAFQgEAGgBAMIAABZIgiAAIAAiHIAhAAIAAANIAAAAQAHgJAIgEQAJgEALAAQANAAAGAFQAJAGADALIAAAAQAEgLAJgGQAJgFANAAQARAAAIALQAIAKAAAUIAABig");
	this.shape_13.setTransform(-150.35,-176.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgRBaIAAi0IAiAAIAAC0g");
	this.shape_14.setTransform(-162.75,-178.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgcBBQgLgHgFgKQgFgKgBgNIgBgZQAAgNACgNQACgNAFgKQAGgKALgFQAKgHARABQAPAAAKAEQAKAFAFAJQAGAKACAMQACANAAAQIAAAGIhEAAIAAAMIABALIADAKQACAFADADQADACAEAAQAJAAAEgGQAEgGACgOIAfAAQgBAYgMANQgLANgZAAQgSgBgLgGgAgHgsQgDACgCAEIgDAJIgBAKIAAAFIAjAAIgBgOQgBgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_15.setTransform(-171.475,-176.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AARBaIAAhdQAAgKgEgFQgDgDgIAAQgSgBAAAWIAABaIgjAAIAAi0IAjAAIAAA7IABAAQAKgRAWAAQARgBAJAKQAJAJAAAUIAABkg");
	this.shape_16.setTransform(-183.475,-178.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AASBEIgShgIAAAAIgQBgIgpAAIgdiHIAjAAIAQBgIAAAAIARhgIAlAAIATBgIAAAAIAQhgIAhAAIgcCHg");
	this.shape_17.setTransform(-198.55,-176.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgjBGIAAiHIAiAAIAAASIAAAAQAEgKAIgGQAIgGAKAAIAEAAIADAAIAAAiIgFgBIgGAAIgJABQgFACgEADQgDADgDAFQgBAEAAAHIAABRg");
	this.shape_18.setTransform(-210.9,-176.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgcBBQgLgHgFgKQgFgKgBgNIgBgZQAAgNACgNQACgNAFgKQAGgKALgFQAKgHARABQAPAAAKAEQAKAFAFAJQAGAKACAMQACANAAAQIAAAGIhEAAIAAAMIABALIADAKQACAFADADQADACAEAAQAJAAAEgGQAEgGACgOIAfAAQgBAYgMANQgLANgZAAQgSgBgLgGgAgHgsQgDACgCAEIgDAJIgBAKIAAAFIAjAAIgBgOQgBgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_19.setTransform(-221.325,-176.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgTBEIgjiHIAlAAIASBgIABAAIAShgIAjAAIgiCHg");
	this.shape_20.setTransform(-232.575,-176.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AggBXQgMgHgHgMQgGgNgCgRQgBgRAAgVQAAgTABgSQACgRAGgNQAHgMAMgHQANgHATAAQAVAAAMAHQAMAHAGAMQAHANACARQACASAAATQAAAVgCARQgCARgHANQgGAMgMAHQgMAHgVAAQgTAAgNgHgAgMg+QgFADgDAIQgCAJgBAMIgBAeIABAfQABANACAIQADAIAFAEQAFADAHAAQAIAAAFgDQAFgEACgIQADgIABgNIABgfIgBgeQgBgMgDgJQgCgIgFgDQgFgEgIAAQgHAAgFAEg");
	this.shape_21.setTransform(-245.05,-178.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_overwhelmed, new cjs.Rectangle(-285,-195.2,327.6,32.19999999999999), null);


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
	this.shape.graphics.f("#353535").s().p("AgJAMIAAgXIATAAIAAAXg");
	this.shape.setTransform(-132.325,-98.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgRAoQgGgEgDgHQgEgGgBgHIAAgQIABgQQACgHADgGQAEgHAGgDQAHgDAKgBQAJABAGACQAGADADAGQADAFABAIQACAIAAAKIAAADIgpAAIAAAHIAAAIIACAGQABACACACQACACACgBQAGAAACgDQACgEABgIIATAAQAAAPgHAHQgIAIgOAAQgLgBgHgDgAgEgaIgDADIgCAGIAAAGIAAADIAUAAIAAgJQgBgDgBgDIgDgEIgFgBQgDAAgCACg");
	this.shape_1.setTransform(-137.5,-101.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgcAqIAAgRIAggwIgeAAIAAgSIA3AAIAAARIggAwIAgAAIAAASg");
	this.shape_2.setTransform(-144.15,-101.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgKA4IAAhTIAVAAIAABTgAgKglIAAgSIAVAAIAAASg");
	this.shape_3.setTransform(-148.975,-102.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AAKArIAAg5QAAgGgCgDQgCgDgFAAQgKAAAAAOIAAA3IgWAAIAAhTIAVAAIAAAKIAAAAQAEgGAFgDQAFgDAGAAQALAAAFAGQAGAFAAANIAAA9g");
	this.shape_4.setTransform(-154.475,-101.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgVAqQgEgCgCgEQgDgDgBgFIgBgIIABgKIAFgHQACgDAEgBIAJgEIAMgDQAEgCADgBQABgDAAgEQAAgFgCgDQgCgCgFAAQgEAAgDADQgCADAAAFIAAACIgUAAIAAgCQAAgIADgEQACgFADgDQAEgDAGgCIALgBQAJABAGABQAGACADAEQADADACAFIAAAKIAAArIABAJIACAHIgUAAIgCgEIgBgEQgEAGgFACQgDABgJABQgFgBgEgBgAAEADIgEABQgFACgDADQgDAEAAAFQAAAFACADQABAEAFgBIAEAAIADgCIAEgFIABgFIAAgRg");
	this.shape_5.setTransform(-161.8,-101.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgXAzQgHgGAAgKIAUAAQAAAEAEACIADACIADAAQAGAAADgEQACgEAAgGIAAgLQgDAEgFADQgEADgFAAQgMAAgHgKQgGgKAAgVIABgPQAAgIADgGQADgGAFgEQAFgEAJAAQAEAAAEACQAFADADAGIAAgJIAVAAIAABPQAAAQgIAIQgIAIgSAAQgNAAgIgGgAgEgmQgDACgBADIgCAJIAAAPIAAAIIACAGIADAFQACABADAAQADAAACgBIAEgFIACgHIAAgKQAAgPgCgGQgCgHgHAAQgCAAgCACg");
	this.shape_6.setTransform(-169.225,-99.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgVArIAAhTIAVAAIAAALIAAAAQADgGAEgDQAFgEAGAAIACAAIACAAIAAAVIgDAAIgDgBIgGABIgFADIgEAEQgBADAAAFIAAAxg");
	this.shape_7.setTransform(-175,-101.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgTA1QgIgEgDgHQgFgIgBgKIgBgYIABgWQABgLAFgHQADgIAIgEQAHgEAMAAQANAAAHAEQAHAEAEAIQAEAHACALIABAWIgBAYQgCAKgEAIQgEAHgHAEQgHAEgNAAQgMAAgHgEgAgHgmQgDADgCAFIgCAMIAAASIAAATIACANQACAFADACQADACAEAAQAFAAADgCQADgCACgFIACgNIAAgTIAAgSIgCgMQgCgFgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_8.setTransform(-181.925,-102.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_organize, new cjs.Rectangle(-330,-114.2,343,22.799999999999997), null);


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
	this.shape.graphics.f("#353535").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape.setTransform(-33.925,-98.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgZA3QgIgGAAgLIAWAAQAAAEAEACIADACIAEABQAHAAADgFQACgEAAgHIAAgMIAAAAQgEAFgFADQgDADgGAAQgOAAgHgKQgHgLAAgYIABgQQAAgIADgHQAEgGAFgFQAGgEAJAAQAFAAAEADQAGADADAHIAAAAIAAgLIAXAAIAABWQAAARgJAJQgJAJgTAAQgPAAgIgHgAgFgpQgDABAAAEQgCAEgBAGIAAAQIAAAJIADAGQAAAEADABQACACADAAQADAAADgCQACgBACgEIACgHIAAgLQABgQgDgHQgDgHgGAAQgEAAgCACg");
	this.shape_1.setTransform(-40.3,-100.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AALAvIAAg+QABgHgDgDQgDgCgFgBQgLABAAAPIAAA7IgYAAIAAhbIAXAAIAAAMIABAAQADgIAGgCQAFgEAHAAQAMAAAFAHQAHAFAAAOIAABDg");
	this.shape_2.setTransform(-48.65,-102.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgRAtQgHgDgEgGQgDgGgCgJQgCgJAAgMQAAgKACgJQACgJAEgGQAEgGAHgDQAHgDAJAAQALgBAGADQAIADADAGQAEAHACAIQACAJAAALQAAAMgCAJQgCAJgEAGQgEAGgHADQgHADgKAAQgJAAgIgDgAgFgcQgEACgBAEQgBAFAAAGIAAALIAAANQAAAGABAEQABAFAEACQABACAEAAQAHAAADgHQADgIAAgRQAAgQgDgHQgDgIgHAAQgEAAgBADg");
	this.shape_3.setTransform(-56.9,-102.1536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgLA8IAAh3IAXAAIAAB3g");
	this.shape_4.setTransform(-62.925,-103.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgXAvIAAhbIAWAAIAAANIABAAQACgGAFgEQAGgFAHAAIACAAIACAAIAAAXIgDAAIgEAAIgGABIgGACQgDACgBAEQgBADAAAEIAAA2g");
	this.shape_5.setTransform(-71.45,-102.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgQAtQgHgDgFgGQgEgGgBgJQgCgJAAgMQAAgKACgJQACgJAEgGQAEgGAHgDQAHgDAJAAQAKgBAIADQAGADAFAGQAEAHABAIQACAJAAALQAAAMgCAJQgCAJgEAGQgFAGgGADQgHADgKAAQgKAAgGgDgAgFgcQgDACgCAEQgBAFAAAGIgBALIABANQAAAGABAEQACAFADACQACACADAAQAHAAADgHQACgIAAgRQAAgQgCgHQgDgIgHAAQgDAAgCADg");
	this.shape_6.setTransform(-78.65,-102.1536);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgLA+IAAhLIgMAAIAAgQIAMAAIAAgKQAAgFABgFQACgEADgDQADgCAEgCIAKAAIAMAAIAAARIgCAAIgCAAQgFgBgCACQgCACAAAEIAAAHIANAAIAAAQIgNAAIAABLg");
	this.shape_7.setTransform(-85.125,-103.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgBA5QgEgBgCgCQgDgDgBgEIAAgMIAAgzIgMAAIAAgQIAMAAIAAgaIAWAAIAAAaIANAAIAAAQIgNAAIAAAwQAAAFABADQACACAFAAIADAAIACAAIAAAQIgHAAIgIAAIgKgBg");
	this.shape_8.setTransform(-94.125,-103.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgQAtQgHgDgFgGQgEgGgBgJQgCgJAAgMQAAgKACgJQACgJAEgGQAEgGAHgDQAHgDAJAAQAKgBAIADQAGADAFAGQAEAHABAIQACAJAAALQAAAMgCAJQgCAJgEAGQgFAGgGADQgHADgKAAQgKAAgGgDgAgFgcQgDACgCAEQgBAFAAAGIgBALIABANQAAAGABAEQACAFADACQACACADAAQAHAAADgHQACgIAAgRQAAgQgCgHQgDgIgHAAQgDAAgCADg");
	this.shape_9.setTransform(-100.7,-102.1536);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AAMA8IgdhTIAAAAIAABTIgWAAIAAh3IAcAAIAcBRIAAhRIAXAAIAAB3g");
	this.shape_10.setTransform(-109.55,-103.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_notForLong, new cjs.Rectangle(-115.7,-115.1,85.1,22.5), null);


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
	this.shape.graphics.f("#353535").s().p("AinBFIAAhsIAVAAIAAAJIAAAAQAEgGAEgDQAEgCAHAAQANAAAGAKQAGAKAAAWQAAAXgGAKQgGAKgNAAQgGAAgEgCQgFgCgDgFIAAAigAiPgSQgCAHAAAMQAAAOACAHQACAGAHAAQAHAAACgGQACgHAAgOQAAgMgCgHQgCgHgHAAQgHAAgCAHgAmQAqQgGgCgEgGQgDgGgCgIQgBgIAAgLQAAgJABgJQACgIAEgFQAEgFAGgDQAGgDAJAAQAKAAAGACQAGADAEAGQAEAFABAIQACAIAAAKQAAALgCAIQgCAIgDAGQgEAFgGADQgHACgJAAIgDAAQgHAAgGgCgAmGgZQgCADgBADIgCAKIAAAWIACAJQABAEACACQACACAEAAQAHAAACgGQADgHAAgQQAAgOgDgHQgCgHgHAAQgEAAgCACgAFyAqQgEgCgCgDQgDgDgBgEIgBgJQAAgGABgEQACgEACgDIAGgEIAKgEIAMgDQAFgBACgDQABgCAAgEQAAgEgCgDQgCgDgFAAQgFAAgDADQgCADAAAFIAAACIgTAAIAAgCQAAgHACgFQACgFAEgCQAEgEAGgBQAFgBAGAAQAJAAAGACQAGACADADQADADACAFIABAKIAAA0IACAHIgUAAIgDgJQgEAGgEACQgFACgIAAQgFAAgEgCgAGMAEIgFABQgGACgDADQgDADAAAGQAAAFACADQACADAEAAIAFAAQACgBACgCIADgDIABgGIAAgRgAEzAqQgGgCgEgEQgEgGgCgIQgCgIAAgNQAAgMACgIQADgIAEgFQAFgFAGgCQAGgCAHAAQAPAAAIAIQAHAJAAAPIgUAAIgCgLIgDgEQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQgEAAgCACQgDACgBADIgBAJIAAAYIABAKQABADADACQACABADAAQAGAAACgEQADgFAAgKIAUAAQAAAQgHAJQgHAIgSAAQgHAAgGgCgADKArQgGgCgDgDQgEgEgBgFQgCgFAAgGIAAgCIATAAIAAACQAAAGADADQADADAGAAQAFAAADgCQACgCAAgGQAAgEgCgCIgFgDIgPgFQgJgDgFgFQgEgGAAgJIACgJQABgEAEgEQAEgDAGgCQAFgCAJAAQAOAAAHAGQAHAGAAALIAAADIgTAAQAAgGgCgDQgCgDgGAAQgEAAgCADQgEACAAAEQAAADACADQACACAGACIAMAEQAKADAEAFQAEAFAAAKQAAAHgCAEQgCAFgEADQgEAEgGABIgMABQgJAAgGgBgACDAoQgGgDgDgHQgEgGAAgIIgBgQIABgPQABgHAEgGQADgGAHgEQAGgDALAAQAJAAAGADQAGADADAFQAEAGABAHIABARIAAAEIgqAAIABAOIACAGQABADACACQACABADAAQAFAAADgEQACgDABgIIATAAQgBAOgHAIQgHAHgPAAQgLAAgHgEgACQgZIgDAEIgCAFIgBAJIAWAAIgBgJIgBgFQgBgDgCgBQgDgCgDAAQgDAAgCACgABBArQgFgCgEgDQgDgEgCgFQgBgFAAgGIAAgCIATAAIAAACQAAAGADADQACADAGAAQAFAAADgCQADgCAAgGQAAgEgDgCIgFgDIgPgFQgIgDgFgFQgEgGAAgJIABgJQACgEAEgEQADgDAGgCQAGgCAIAAQAOAAAHAGQAHAGAAALIAAADIgTAAQAAgGgCgDQgCgDgFAAQgEAAgDADQgDACAAAEQAAADACADQABACAGACIANAEQAKADAEAFQAEAFAAAKQAAAHgCAEQgDAFgEADQgEAEgFABIgNABQgJAAgGgBgAhQAoQgGgDgEgHQgDgGgBgIIAAgQIABgPQABgHAEgGQADgGAHgEQAGgDALAAQAJAAAGADQAGADADAFQAEAGABAHIABARIAAAEIgqAAIABAOIACAGQABADACACQACABADAAQAFAAADgEQACgDABgIIATAAQgBAOgHAIQgHAHgPAAQgMAAgGgEgAhDgZIgDAEIgCAFIgBAJIAWAAIgBgJIgBgFQgBgDgCgBQgDgCgDAAQgDAAgCACgAknAoQgGgDgDgHQgEgGAAgIIgBgQIABgPQABgHAEgGQADgGAHgEQAGgDALAAQAJAAAGADQAGADADAFQAEAGABAHIABARIAAAEIgqAAIABAOIACAGQABADACACQACABADAAQAFAAADgEQACgDABgIIATAAQgBAOgHAIQgHAHgPAAQgLAAgHgEgAkagZIgDAEIgCAFIgBAJIAWAAIgBgJIgBgFQgBgDgCgBQgDgCgDAAQgDAAgCACgAnoAkQgIgIAAgPIAAgFIAXAAIAAAKIACAGQACACADABIAHABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgJgDIgNgFQgFgDgEgEQgEgEgCgFQgBgFAAgHQAAgQAJgIQAJgIAQAAIANABQAHACAEAEQAFADACAGQADAFAAAIIAAADIgWAAQAAgHgCgFQgDgEgGAAQgEAAgCABIgEADIgCAEIgBAFQAAAFACADQACAEAHADIARAHIALAGIAGAGQADAEAAADIABAJQAAARgKAIQgKAIgSAAQgSAAgJgIgAHcArIAAg4QAAgHgCgCQgCgDgFAAQgMAAAAAOIAAA2IgVAAIAAhSIAUAAIAAAKIABAAQADgGAGgDQAFgDAHAAQAKAAAFAFQAGAGAAAMIAAA9gAAUArIAAg4QAAgHgDgCQgCgDgFAAQgKAAAAAOIAAA2IgVAAIAAhSIAUAAIAAAKQADgGAFgDQAGgDAHAAQAKAAAFAFQAGAGAAAMIAAA9gAjDArIgMgbIgNAbIgWAAIAXgrIgWgnIAWAAIAMAZIALgZIAWAAIgWAnIAXArg");
	this.shape.setTransform(-159.725,-95.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AhrA2QgGgDgCgFQgCgGAAgIQAAgIADgLQADgLAEgHQAEgIAFgFQAFgGAHgDQAHgCAJAAQAJgBAGADQAGADACAFQACAGAAAIIgDASIgHATQgEAIgFAFQgFAGgHADQgHACgJAAIgDABQgIAAgEgDgAhQgNQgDACgCAEIgEAIIgGAYIgBAJQAAAEACACQACACAEAAQAGAAAEgHQAFgHAEgPQADgOgBgHQAAgHgHAAQgEAAgCACgAE7AuQgEgKAGgXQAGgWAJgKQAIgKANAAQAGAAAEACQAEACACAGIAAAAIAJgjIAVAAIgcBtIgUAAIACgJQgFAGgFACQgFACgHAAQgNAAgDgKgAFagGQgEAGgEANQgDANAAAHQABAHAHAAQAHAAADgHQAEgHAEgNQADgNAAgGQgBgHgHAAQgHAAgDAHgAD6A0QgFgEgCgGQgBgGABgIIADgQIAFgPQADgHAGgGQAEgGAIgEQAHgDALAAQAJAAAGACQAFAEABAFQACAFAAAIIgDAQIgBAFIgqAAIgDAOIAAAGIACAEQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQAGAAADgEQAEgEADgIIATAAQgFAPgIAHQgKAIgPAAQgLAAgGgEgAEYgNIgEADIgEAGIgCAIIAWAAIABgIIAAgGIgCgEIgFgBQgEAAgCACgAAlA0QgFgEgCgGQgBgGABgIIADgQIAFgPQADgHAFgGQAFgGAIgEQAHgDALAAQAJAAAFACQAGAEABAFQACAFAAAIIgDAQIgCAFIgqAAIgDAOIABAGIACAEQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQAGAAADgEIAHgMIATAAQgFAPgJAHQgJAIgPAAQgMAAgFgEgABDgNIgEADIgEAGIgCAIIAVAAIABgIIABgGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgFgBQgDAAgCACgAlEA0QgGgEgDgGQgEgGAAgIIgBgQIABgPQABgHAEgGQADgGAHgEQAGgDALAAQAJAAAGACQAGAEADAFQAEAFABAIIABAQIAAAFIgqAAIABAOIACAGIADAEQACACADAAQAFAAADgEQACgEABgIIATAAQgBAPgHAHQgHAIgPAAQgLAAgHgEgAk3gNIgDADIgCAGIgBAIIAWAAIgBgIIgBgGIgDgEIgGgBQgDAAgCACgAl+A2QgEgCgEgGIAAAAIAAAJIgUAAIAAhtIAVAAIAAAjQADgGAFgCQAEgCAGAAQANAAAGAKQAGAKAAAWQAAAXgGAKQgGAKgNAAQgHAAgEgCgAmDgGQgCAGAAANQAAANACAHQACAHAHAAQAHAAACgHQACgHAAgNQAAgNgCgGQgCgHgHAAQgHAAgCAHgABuA2QgEgBgBgCQgCgDAAgEIACgLIAMguIgKAAIADgOIALAAIAGgYIAVAAIgGAYIAMAAIgDAOIgNAAIgLAsQgCAFACACQABACAEAAIAFAAIgDAPIgPAAIgJgBgAGBA3IAGgZIAUAAIgGAZgACrA3IAEgRIAugwIggAAIAFgRIA4AAIgEAQIgtAwIAhAAIgFASgACMA3IAVhSIAVAAIgVBSgAgHA3IANg4QACgHgCgDQgBgCgFAAQgKAAgEANIgOA3IgVAAIAVhSIAUAAIgCAJIAAAAQAFgGAFgDQAGgCAHAAQAKAAAEAFQAEAGgDAMIgPA9gAibA3IAOg5QACgFgCgDQgBgDgEAAQgFAAgEADQgEAEgCAGIgOA3IgVAAIAOg5QACgFgBgDQgBgDgFAAQgFAAgEADQgEAEgCAGIgOA3IgUAAIAUhSIAUAAIgCAIIABAAQAFgGAGgCQAFgCAHAAQAIAAAEADQAEADAAAHIABAAQAEgHAGgDQAGgDAIAAQAKAAAEAGQADAGgDAMIgPA8gACjglIAFgTIAVAAIgEATg");
	this.shape_1.setTransform(-159.375,-79.4964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_monetized, new cjs.Rectangle(-209.4,-101.9,99.4,28.10000000000001), null);


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
	this.shape.graphics.f("#353535").s().p("AgJANIAAgZIATAAIAAAZg");
	this.shape.setTransform(-137.2,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgRAoQgHgDgDgHQgDgHgBgIIgBgPQAAgIACgIQABgIADgGQAEgHAHgDQAGgEAKAAQAKAAAGADQAGADAEAGQADAFABAIQACAJAAAJIAAAEIgrAAIAAAHIABAIIACAGQABADACABQACACACAAQAGAAACgEQADgEABgIIATAAQAAAPgHAIQgIAIgQAAQgKAAgHgFgAgEgcQgCACgBACIgCAGIgBAGIAAADIAWAAIgBgIIgCgHIgDgEQgCgBgDAAQgDAAgCABg");
	this.shape_1.setTransform(-142.475,-93.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgdArIAAgRIAhgyIgfAAIAAgSIA5AAIAAARIgiAyIAiAAIAAASg");
	this.shape_2.setTransform(-149.2,-93.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_3.setTransform(-154.25,-94.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgBA2QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgYIAVAAIAAAYIANAAIAAAPIgNAAIAAAtQAAAFACADQABACAFAAIADAAIACgBIAAAQIgHAAIgHAAIgKgBg");
	this.shape_4.setTransform(-158.125,-94.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_5.setTransform(-162.1,-94.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgXA0QgIgGAAgLIAVAAQAAAEAEADIADABIADABQAGAAADgEQADgFAAgGIAAgLIAAAAQgEAFgEACQgEADgFAAQgOAAgGgKQgHgKAAgWIABgPQABgIACgGQAEgHAEgEQAGgDAJAAQAFAAAEACQAFADADAGIAAAAIAAgJIAVAAIAABQQAAARgJAIQgHAIgTAAQgOAAgHgGgAgEgnIgEAFIgCAKIAAAOIAAAJIACAGQABADADACQACABACAAQADAAADgBIAEgFIACgHIAAgKQAAgQgCgGQgDgHgGAAQgDAAgCACg");
	this.shape_6.setTransform(-167.85,-91.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_7.setTransform(-173.3,-94.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgaAvQgGgKAAgYQAAgXAGgKQAGgLAOAAQAGAAADACQAFADADAFIAAgkIAWAAIAABxIgVAAIAAgJQgEAGgEACQgEADgGAAQgOAAgGgLgAgIgHQgDAHAAANQAAAOADAHQACAHAGAAQAHAAACgHQACgHAAgOQAAgNgCgHQgCgHgHAAQgGAAgCAHg");
	this.shape_8.setTransform(-179.025,-94.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgbA4IAAgQIAGABQAFgBADgDQADgDAAgFIgYhUIAXAAIAMA5IAMg5IAVAAIgUBPQgDAKgDAHQgDAGgDAEQgCADgGABIgNABg");
	this.shape_9.setTransform(-122.7,-109.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_10.setTransform(-127.9,-112.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_11.setTransform(-131.4,-112.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgVArIgHgGQgCgDgBgFIgBgJIABgKQABgEADgDIAHgFIAJgDIAMgEQAFgBACgCQABgCAAgFQAAgEgCgDQgCgDgFAAQgFAAgCADQgDADAAAFIAAACIgUAAIAAgCQAAgHADgFQACgFAEgDQAEgDAGgCIALgBQAJAAAGACQAGACAEADQADAEABAFIABAKIAAAsIABAKIACAHIgVAAIgBgFIgCgEQgEAGgFADQgEACgIAAQgFAAgEgCgAAFADIgFABQgGACgCADQgDADAAAGQAAAFACAEQACADAEAAIAEgBIAEgCIADgEIABgGIAAgRg");
	this.shape_12.setTransform(-136.825,-110.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgNArQgGgDgEgFQgFgFgCgIQgCgJAAgNQAAgMADgJQACgJAFgFQAFgFAGgCQAGgCAHAAQAPAAAIAJQAIAJAAAPIgVAAIgBgGIgBgGIgDgEQgCgBgDAAQgDAAgDACQgCACgBADIgCAJIgBAMIABAOIACAJQABAEACABQACACADAAQAGAAACgFQADgFAAgKIAVAAQAAARgIAJQgHAJgSAAQgHAAgGgCg");
	this.shape_13.setTransform(-143.975,-110.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_14.setTransform(-149.3,-112.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgBA2QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgYIAVAAIAAAYIANAAIAAAPIgNAAIAAAtQAAAFACADQABACAFAAIADAAIACgBIAAAQIgHAAIgHAAIgKgBg");
	this.shape_15.setTransform(-153.175,-111.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgVArIgHgGQgCgDgBgFIgBgJIABgKQABgEADgDIAHgFIAJgDIAMgEQAFgBACgCQABgCAAgFQAAgEgCgDQgCgDgFAAQgFAAgCADQgDADAAAFIAAACIgUAAIAAgCQAAgHADgFQACgFAEgDQAEgDAGgCIALgBQAJAAAGACQAGACAEADQADAEABAFIABAKIAAAsIABAKIACAHIgVAAIgBgFIgCgEQgEAGgFADQgEACgIAAQgFAAgEgCgAAFADIgFABQgGACgCADQgDADAAAGQAAAFACAEQACADAEAAIAEgBIAEgCIADgEIABgGIAAgRg");
	this.shape_16.setTransform(-159.125,-110.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAfAsIAAg7QAAgFgCgDQgCgDgFAAQgFAAgDADQgDAEAAAHIAAA4IgVAAIAAg7QAAgFgCgDQgCgDgFAAQgFAAgDADQgDAEAAAHIAAA4IgWAAIAAhVIAVAAIAAAJQAFgGAFgDQAFgCAHAAQAIAAAEAEQAFADACAHIAAAAQADgHAFgEQAGgDAIAAQALAAAFAHQAFAGAAANIAAA9g");
	this.shape_17.setTransform(-168.625,-110.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgPAqQgHgDgEgFQgEgGgBgIQgCgJAAgLQAAgKACgIQACgJAEgFQAEgGAGgDQAHgDAIAAQAKAAAGADQAHACAEAGQADAGACAIQACAJAAAKQAAALgCAIQgCAJgEAFQgEAGgGADQgHADgJAAQgJAAgGgDgAgFgbQgDACgBAEIgCAKIAAALIAAAMIACAKQABAEADACQACACADAAQAHAAACgHQADgHAAgQQAAgPgDgHQgCgHgHAAQgDAAgCACg");
	this.shape_18.setTransform(-178.125,-110.6786);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgBA2QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgYIAVAAIAAAYIANAAIAAAPIgNAAIAAAtQAAAFACADQABACAFAAIADAAIACgBIAAAQIgHAAIgHAAIgKgBg");
	this.shape_19.setTransform(-183.975,-111.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgaAmQgFgFAAgNIAAg/IAWAAIAAA6QAAAHACADQACACAFAAQAKAAAAgOIAAg4IAWAAIAABVIgVAAIAAgKQgDAGgGADQgEADgIAAQgKAAgGgGg");
	this.shape_20.setTransform(-190.025,-110.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAUA5IgFgYIgdAAIgFAYIgYAAIAehxIAbAAIAeBxgAALAOIgLgyIAAAAIgKAyIAVAAg");
	this.shape_21.setTransform(-198.125,-112.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_digitize, new cjs.Rectangle(-336.5,-123.9,351.1,41), null);


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
	this.shape.graphics.f("#353535").s().p("AgJAMIAAgXIATAAIAAAXg");
	this.shape.setTransform(-135.4,-88.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgOArQgHgCgDgEQgEgDgBgFQgCgFAAgGIAAgDIAUAAIAAADQAAAFADAEQADADAFAAQAFAAADgDQADgCAAgFQAAgEgDgCQgCgDgDgBIgPgFQgJgEgEgEQgFgGAAgJIACgKQACgFADgDQAEgEAGgCQAGgCAIAAQAOAAAIAGQAHAHAAALIAAAEIgUAAQAAgHgCgDQgCgDgGAAQgDAAgDACQgDADAAAEQAAADACADQACACAFACIANAFQAKADAEAFQAFAFAAAKQAAAHgDAFQgCAFgEADQgFAEgFABQgGACgHAAQgIAAgGgCg");
	this.shape_1.setTransform(-140.625,-91.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgBA2QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgYIAVAAIAAAYIANAAIAAAPIgNAAIAAAtQAAAGACACQABACAFAAIADAAIACgBIAAAQIgHAAIgHAAIgKgBg");
	this.shape_2.setTransform(-146.275,-93.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AggA5IAAhvIAVAAIAAAJQAEgHAEgCQAEgDAGAAQAOAAAGALQAGALAAAXQAAAXgGAKQgGALgOAAQgGAAgDgDQgFgCgDgFIgBAAIAAAjgAgIghQgDAIAAANQAAANADAIQACAGAGABQAHgBACgGQADgIAAgNQAAgNgDgIQgCgHgHAAQgGAAgCAHg");
	this.shape_3.setTransform(-152.325,-90.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgKA5IAAhUIAVAAIAABUgAgKgmIAAgSIAVAAIAAASg");
	this.shape_4.setTransform(-158.15,-93.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgRApQgHgEgDgHQgDgGgBgJIgBgPQAAgIACgIQABgIADgGQAEgHAHgDQAGgEAKAAQAKAAAGADQAGADAEAGQADAGABAIQACAIAAAJIAAAEIgrAAIAAAHIABAIIACAGQABADACABQACACACAAQAGAAACgEQADgEABgIIATAAQAAAPgIAIQgHAIgQAAQgKAAgHgEgAgEgcIgDAFIgCAFIgBAGIAAADIAWAAIgBgIIgCgHIgDgEIgFgBIgFABg");
	this.shape_5.setTransform(-163.525,-91.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgNArQgGgCgEgGQgFgFgCgIQgCgJAAgNQAAgMADgJQACgIAFgGQAFgFAGgCQAGgCAHAAQAPAAAIAJQAIAJAAAPIgVAAIgBgGIgBgGIgDgEQgCgBgDAAQgDAAgDACQgCACgBADIgCAJIgBAMIABAOIACAJQABAEACABQACACADAAQAGAAACgFQADgFAAgKIAVAAQAAARgIAJQgHAJgSAAQgHAAgGgCg");
	this.shape_6.setTransform(-170.675,-91.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgRApQgHgEgDgHQgDgGgBgJIgBgPQAAgIACgIQABgIADgGQAEgHAHgDQAGgEAKAAQAKAAAGADQAGADAEAGQADAGABAIQACAIAAAJIAAAEIgrAAIAAAHIABAIIACAGQABADACABQACACACAAQAGAAACgEQADgEABgIIATAAQAAAPgIAIQgHAIgQAAQgKAAgHgEgAgEgcIgDAFIgCAFIgBAGIAAADIAWAAIgBgIIgCgHIgDgEIgFgBIgFABg");
	this.shape_7.setTransform(-177.825,-91.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgWAsIAAhVIAVAAIAAAMQADgGAEgEQAGgEAHAAIACAAIABAAIAAAVIgDAAIgEAAIgFABIgGACIgDAFQgBADAAAEIAAAzg");
	this.shape_8.setTransform(-183.6,-91.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgRApQgHgEgDgHQgDgGgBgJIgBgPQAAgIACgIQABgIADgGQAEgHAHgDQAGgEAKAAQAKAAAGADQAGADAEAGQADAGABAIQACAIAAAJIAAAEIgrAAIAAAHIABAIIACAGQABADACABQACACACAAQAGAAACgEQADgEABgIIATAAQAAAPgIAIQgHAIgQAAQgKAAgHgEgAgEgcQgCACgBADIgCAFIgBAGIAAADIAWAAIgBgIIgCgHIgDgEIgFgBIgFABg");
	this.shape_9.setTransform(-119.625,-107.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgdArIAAgRIAhgyIggAAIAAgSIA6AAIAAARIgiAyIAiAAIAAASg");
	this.shape_10.setTransform(-126.45,-107.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgKA5IAAhUIAVAAIAABUgAgKgmIAAgSIAVAAIAAASg");
	this.shape_11.setTransform(-131.6,-108.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgWAsIAAhVIAWAAIAAAMQACgGAFgEQAEgEAIAAIABAAIACAAIAAAVIgDAAIgDAAIgGABIgGACIgDAFQgBADAAAEIAAAzg");
	this.shape_12.setTransform(-135.6,-107.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgPAqQgHgDgEgFQgEgGgBgIQgCgJAAgLQAAgKACgIQACgJAEgFQAEgGAGgDQAHgDAIAAQAKAAAGADQAHACAEAGQADAGACAIQACAJAAAKQAAALgCAIQgCAJgEAFQgEAGgGADQgHADgJAAQgJAAgGgDgAgFgbQgDACgBAEIgCAKIAAALIAAAMIACAKQABAEADACQACACADAAQAHAAACgHQADgHAAgQQAAgPgDgHQgCgHgHAAQgDAAgCACg");
	this.shape_13.setTransform(-142.225,-107.2786);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgXA0QgIgGAAgLIAVAAQAAAEAEADIADABIADABQAGAAADgEQADgFAAgGIAAgLIAAAAQgEAFgEACQgFADgEAAQgNAAgIgKQgGgKAAgWIABgPQABgIACgGQADgGAFgEQAGgEAJAAQAFAAAEACQAEADAEAGIAAAAIAAgJIAVAAIAABQQAAARgJAIQgHAIgTAAQgOAAgHgGgAgEgnIgEAFIgCAKIAAAOIAAAJQABADABADQABADADACQACABACAAQADAAACgBIAEgFIADgHIAAgKQAAgQgDgGQgCgHgHAAQgCAAgCACg");
	this.shape_14.setTransform(-149.95,-105.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgRApQgHgEgDgHQgDgGgBgJIgBgPQAAgIACgIQABgIADgGQAEgHAHgDQAGgEAKAAQAKAAAGADQAGADAEAGQADAGABAIQACAIAAAJIAAAEIgrAAIAAAHIABAIIACAGQABADACABQACACACAAQAGAAACgEQADgEABgIIATAAQAAAPgIAIQgHAIgQAAQgKAAgHgEgAgEgcIgDAFIgCAFIgBAGIAAADIAWAAIgBgIIgCgHIgDgEIgFgBIgFABg");
	this.shape_15.setTransform(-157.275,-107.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgBA2QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgYIAVAAIAAAYIANAAIAAAPIgNAAIAAAtQAAAGACACQABACAFAAIADAAIACgBIAAAQIgHAAIgHAAIgKgBg");
	this.shape_16.setTransform(-163.075,-108.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgVArQgEgCgDgEQgCgDgBgFIgBgJIABgKQABgEADgDIAHgFIAJgDIAMgEQAFgBACgCQABgCAAgFQAAgEgCgDQgCgDgFAAQgFAAgCADQgDADAAAFIAAACIgUAAIAAgCQAAgHADgFQACgFAEgDQAEgDAGgCIALgBQAJAAAGACQAGACAEADQADAEABAFIABAKIAAAsIABAKIACAHIgVAAIgCgFIgBgEQgEAHgFACQgEACgIAAQgFAAgEgCgAAFADIgFABQgGACgCADQgDADAAAGQAAAFACAEQABADAFAAIAEgBIAEgCIADgEIABgGIAAgRg");
	this.shape_17.setTransform(-169.075,-107.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgNArQgGgCgEgGQgFgFgCgIQgCgJAAgNQAAgMADgJQACgIAFgGQAFgFAGgCQAGgCAHAAQAPAAAIAJQAIAJAAAPIgVAAIgBgGIgBgGIgDgEQgCgBgDAAQgDAAgDACQgCACgBADIgCAJIgBAMIABAOIACAJQABAEACABQACACADAAQAGAAACgFQADgFAAgKIAVAAQAAARgIAJQgHAJgSAAQgHAAgGgCg");
	this.shape_18.setTransform(-176.325,-107.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgaAvQgGgKAAgYQAAgXAGgKQAGgLAOAAQAGAAADADQAFACADAFIAAgkIAWAAIAABxIgVAAIAAgJQgEAGgEACQgEADgGAAQgOAAgGgLgAgIgHQgDAHAAANQAAAOADAHQACAHAGAAQAHAAACgHQACgHAAgOQAAgNgCgHQgCgHgHAAQgGAAgCAHg");
	this.shape_19.setTransform(-187.525,-108.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAKAsIAAg6QAAgHgCgCQgCgDgFAAQgLAAAAAOIAAA4IgVAAIAAhVIAVAAIAAAKQADgGAGgDQAEgDAIAAQAKAAAGAGQAFAGAAAMIAAA/g");
	this.shape_20.setTransform(-195.225,-107.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAUA5IgFgYIgdAAIgFAYIgYAAIAehxIAbAAIAeBxgAALAOIgLgyIAAAAIgKAyIAVAAg");
	this.shape_21.setTransform(-203.375,-108.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_categorize, new cjs.Rectangle(-337.2,-120.5,350.59999999999997,38.599999999999994), null);


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
	this.instance.setTransform(-10.7,-338.7,0.3406,0.3406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_endFrame_1, new cjs.Rectangle(-10.7,-338.7,31.4,88.6), null);


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
	this.instance.setTransform(-95.8,-148.7,0.2866,0.2866);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_endFrame, new cjs.Rectangle(-95.8,-148.7,57.3,48.999999999999986), null);


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
	this.instance.setTransform(-95.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_05, new cjs.Rectangle(-95.9,-199,117,50), null);


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
	this.instance.setTransform(-115.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_04, new cjs.Rectangle(-115.9,-199,117,50), null);


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
	this.instance.setTransform(-108.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03, new cjs.Rectangle(-108.9,-199,117,50), null);


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
	this.instance.setTransform(-106.95,-198.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02, new cjs.Rectangle(-106.9,-198.5,117,50), null);


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
	this.instance.setTransform(-113.45,-198.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01, new cjs.Rectangle(-113.4,-198.9,117,50), null);


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
	mask.graphics.p("AsBCoIAAlPISgAAIAAFPg");
	mask.setTransform(-77,-11.725);

	// Layer_1
	this.instance = new lib.epson_logo();
	this.instance.setTransform(-134.35,-14.5,0.6463,0.6463);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo_1, new cjs.Rectangle(-134.3,-14.5,80.10000000000001,19.6), null);


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
	this.instance.setTransform(-110.95,-199.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.computer_screen, new cjs.Rectangle(-110.9,-199,117,50), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-66,scaleX:1,scaleY:1,rotation:0,x:-486.15,y:396.1},8,cjs.Ease.quadInOut).wait(39).to({scaleX:1.0119,scaleY:1.0119,rotation:-0.6719,x:-496.45,y:400.3},0).wait(1).to({scaleX:1.0466,scaleY:1.0466,rotation:-2.6271,x:-526.55,y:412.4},0).wait(1).to({scaleX:1.1063,scaleY:1.1063,rotation:-5.9873,x:-578.3,y:433.3},0).wait(1).to({scaleX:1.1763,scaleY:1.1763,rotation:-9.9294,x:-639,y:457.85},0).wait(1).to({scaleX:1.2316,scaleY:1.2316,rotation:-13.049,x:-687.1,y:477.2},0).wait(1).to({scaleX:1.2634,scaleY:1.2634,rotation:-14.8397,x:-714.6,y:488.35},0).to({_off:true},1).wait(44));

	// receipt_04
	this.instance_1 = new lib.receipt_04();
	this.instance_1.setTransform(166.15,302.3,1,1,-15.7278,0,0,-75,164.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:164.6,rotation:-2.7506,x:18.1,y:366.2},8,cjs.Ease.quadInOut).wait(36).to({rotation:-2.7506},0).wait(1).to({regY:164.5,rotation:-3.3142,x:24.5,y:363.3},0).wait(1).to({rotation:-4.9544,x:43.2,y:355.25},0).wait(1).to({rotation:-7.7731,x:75.35,y:341.35},0).wait(1).to({rotation:-11.0799,x:113.05,y:325},0).wait(1).to({rotation:-13.6967,x:142.95,y:312.05},0).wait(1).to({regY:164.6,scaleX:0.9999,scaleY:0.9999,rotation:-15.1988,x:160.15,y:304.8},0).to({_off:true},1).wait(44));

	// receipt_03
	this.instance_2 = new lib.receipt_03();
	this.instance_2.setTransform(-332.1,568.15,1.431,1.431,0,0,0,-103,79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:-286,y:362.1},8,cjs.Ease.quadInOut).wait(37).to({scaleX:1.0187,scaleY:1.0187,x:-288,y:371.05},0).wait(1).to({scaleX:1.0732,scaleY:1.0732,x:-293.85,y:397.1},0).wait(1).to({scaleX:1.1668,scaleY:1.1668,x:-303.85,y:441.9},0).wait(1).to({scaleX:1.2766,scaleY:1.2766,x:-315.6,y:494.4},0).wait(1).to({scaleX:1.3635,scaleY:1.3635,x:-324.9,y:535.95},0).wait(1).to({scaleX:1.4134,scaleY:1.4134,x:-330.3,y:559.75},0).to({_off:true},1).wait(44));

	// receipt_02
	this.instance_3 = new lib.receipt_02();
	this.instance_3.setTransform(-104.15,566.1,1.1692,1.1692,31.9376,0,0,-96,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-146.05,y:360.05},8,cjs.Ease.quadInOut).wait(39).to({scaleX:1.0073,scaleY:1.0073,x:-144.2,y:369.05},0).wait(1).to({scaleX:1.0287,scaleY:1.0287,x:-138.9,y:395.1},0).wait(1).to({scaleX:1.0655,scaleY:1.0655,x:-129.9,y:439.9},0).wait(1).to({scaleX:1.1086,scaleY:1.1086,x:-119.15,y:492.4},0).wait(1).to({scaleX:1.1427,scaleY:1.1427,rotation:31.9375,x:-110.75,y:533.95},0).wait(1).to({scaleX:1.1622,scaleY:1.1622,x:-105.9,y:557.8},0).to({_off:true},1).wait(44));

	// receipt_01
	this.instance_4 = new lib.receipt_01();
	this.instance_4.setTransform(-63.95,142.25,0.9999,0.9999,-64.1841,0,0,-70.7,178.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:-70.6,rotation:-23.6896,x:-45.95,y:358.2},8,cjs.Ease.quadInOut).wait(38).to({regX:-70.5,regY:178.5,scaleX:1,scaleY:1,rotation:-25.4482,x:-46.65,y:348.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-30.5659,x:-48.95,y:321.4},0).wait(1).to({rotation:-39.361,x:-52.85,y:274.45},0).wait(1).to({rotation:-49.6791,x:-57.45,y:219.45},0).wait(1).to({rotation:-57.8442,x:-61.1,y:175.9},0).wait(1).to({regX:-70.7,regY:178.6,rotation:-62.5312,x:-63.2,y:151.05},0).to({_off:true},1).wait(44));

	// receipt_04
	this.instance_5 = new lib.receipt_04();
	this.instance_5.setTransform(0,584.4,1.0668,1.0668,33.4891,0,0,-75,164.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({regX:-75.1,scaleX:1,scaleY:1,rotation:8.749,x:-98,y:370.35},8,cjs.Ease.quadInOut).wait(37).to({rotation:8.749},0).wait(1).to({regX:-75,regY:164.5,scaleX:1.0029,scaleY:1.0029,rotation:9.8234,x:-93.65,y:379.4},0).wait(1).to({scaleX:1.0113,scaleY:1.0113,rotation:12.9501,x:-81.25,y:406.5},0).wait(1).to({scaleX:1.0258,scaleY:1.0258,rotation:18.3236,x:-60,y:453},0).wait(1).to({scaleX:1.0428,scaleY:1.0428,rotation:24.6276,x:-35,y:507.55},0).wait(1).to({scaleX:1.0563,scaleY:1.0563,rotation:29.6163,x:-15.2,y:550.75},0).wait(1).to({regY:164.7,scaleX:1.064,scaleY:1.064,rotation:32.4799,x:-4,y:575.75},0).to({_off:true},1).wait(44));

	// receipt_04
	this.instance_6 = new lib.receipt_04();
	this.instance_6.setTransform(-520.2,160.25,0.9999,0.9999,43.9588,0,0,-75.1,164.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({regX:-75,rotation:22.9662,x:-404.05,y:380.45},8,cjs.Ease.quadInOut).wait(35).to({regY:164.5,scaleX:1,scaleY:1,rotation:23.8779,x:-409.05,y:370.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:26.5309,x:-423.65,y:342.85},0).wait(1).to({rotation:31.0902,x:-448.9,y:295.05},0).wait(1).to({rotation:36.439,x:-478.5,y:239},0).wait(1).to({rotation:40.6718,x:-501.9,y:194.65},0).wait(1).to({regX:-75.1,regY:164.7,rotation:43.1016,x:-515.5,y:169.3},0).to({_off:true},1).wait(44));

	// receipt_01
	this.instance_7 = new lib.receipt_01();
	this.instance_7.setTransform(-332.2,140.1,1,1,18.1922,0,0,-70.7,178.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regX:-70.5,rotation:-0.9959,x:-324.05,y:356.15},8,cjs.Ease.quadInOut).wait(37).to({rotation:-0.9959},0).wait(1).to({regY:178.5,rotation:-0.1627,x:-324.45,y:345.9},0).wait(1).to({rotation:2.262,x:-325.65,y:316.2},0).wait(1).to({rotation:6.429,x:-327.8,y:265.2},0).wait(1).to({rotation:11.3175,x:-330.3,y:205.4},0).wait(1).to({rotation:15.186,x:-332.2,y:158.1},0).wait(1).to({regX:-70.6,regY:178.6,scaleX:0.9999,scaleY:0.9999,rotation:17.4067,x:-333.4,y:131.05},0).to({_off:true},1).wait(44));

	// receipt_05
	this.instance_8 = new lib.receipt_05();
	this.instance_8.setTransform(-205.9,148.1,1.2293,1.2293,-52.4195,0,0,-66.1,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-66,scaleX:1,scaleY:1,rotation:-16.7234,x:-228,y:346.1},8,cjs.Ease.quadInOut).wait(38).to({rotation:-16.7234},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-18.2736,x:-227,y:337.5},0).wait(1).to({scaleX:1.0389,scaleY:1.0389,rotation:-22.785,x:-224.2,y:312.5},0).wait(1).to({scaleX:1.0888,scaleY:1.0888,rotation:-30.5382,x:-219.4,y:269.5},0).wait(1).to({scaleX:1.1472,scaleY:1.1472,rotation:-39.6339,x:-213.8,y:219.05},0).wait(1).to({scaleX:1.1934,scaleY:1.1934,rotation:-46.8317,x:-209.35,y:179.15},0).wait(1).to({scaleX:1.2199,scaleY:1.2199,rotation:-50.9635,x:-206.7,y:156.25},0).to({_off:true},1).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-844.8,-70.2,1127.6999999999998,844.9000000000001);


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
	var mask_graphics_0 = new cjs.Graphics().p("AvOLpIAA3RIedAAIAAXRg");
	var mask_graphics_34 = new cjs.Graphics().p("AvOLpIAA3RIedAAIAAXRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-134.5,y:326.45}).wait(34).to({graphics:mask_graphics_34,x:-134.5,y:326.45}).wait(1).to({graphics:null,x:0,y:0}).wait(23));

	// Layer_4
	this.instance = new lib.receipt_noShdw();
	this.instance.setTransform(-130.5,141.95,1.0587,1.0587,-0.2403,0,0,-44.6,112.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:264.7},29,cjs.Ease.quadInOut).wait(5).to({_off:true},1).wait(23));

	// Layer_1
	this.instance_1 = new lib.receiptPrinter_01();
	this.instance_1.setTransform(-270,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,0,270,383.9);


// stage content:
(lib.Epson_rapidReceipt_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// txt_overwhelmed
	this.instance = new lib.txt_overwhelmed();
	this.instance.setTransform(151.2,260.6,1,1,0,0,0,-129.4,54.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},8).wait(32).to({alpha:0},7).to({_off:true},1).wait(308));

	// paper_receipts
	this.instance_1 = new lib.paper_receipts("synched",0,false);
	this.instance_1.setTransform(211.5,31.3,0.6394,0.6394,0,0,0,-214.3,349.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},53).wait(307));

	// epson_logo
	this.instance_2 = new lib.epson_logo_1();
	this.instance_2.setTransform(80,41.05,1,1,0,0,0,-62,21);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},8).wait(352));

	// Layer_55
	this.instance_3 = new lib.txt_cake();
	this.instance_3.setTransform(115.5,357.15,1,1,0,0,0,-154.6,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(350).to({_off:false},0).to({alpha:1},6).wait(4));

	// txt_RR_endFrame
	this.instance_4 = new lib.txt_RR_endFrame();
	this.instance_4.setTransform(150,159.55,1,1,0,0,0,-115.7,11.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(343).to({_off:false},0).to({y:139.55,alpha:1},6,cjs.Ease.quadOut).wait(11));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_350 = new cjs.Graphics().p("AkPBdQgWAAAAgVIAAAAIAAiPQAAgVAWAAIAAAAIIfAAQAWAAAAAVIAAAAIAACPQAAAVgWAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_graphics_350,x:251.959,y:35.059}).wait(10));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.3,-5.5,8.4,5.5).s().p("AlIE/IHprrICoBuInpLrg");
	this.shape_1.setTransform(212.525,19.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.3,-5.5,8.3,5.4).s().p("AlGE9IHmrmICnBtInmLmg");
	this.shape_2.setTransform(214.45,19.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.2,-5.4,8.2,5.3).s().p("AlBE4IHeraIClBrIneLag");
	this.shape_3.setTransform(220.225,21.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-7.9,-5.3,8,5.1).s().p("Ak3EvIHQrFICfBnInQLGg");
	this.shape_4.setTransform(229.85,25.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-7.6,-5,7.6,5).s().p("AkrEjIG+qpICZBkIm+Kpg");
	this.shape_5.setTransform(243.35,30.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-7.2,-4.7,7.3,4.7).s().p("AkcEUIGoqGICRBfImnKGg");
	this.shape_6.setTransform(259.7,36.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-6.9,-4.5,6.9,4.6).s().p("AkPEIIGUpqICLBbImUJqg");
	this.shape_7.setTransform(273.2,41.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-6.7,-4.4,6.7,4.4).s().p("AkGD/IGHpVICGBYImHJVg");
	this.shape_8.setTransform(282.8,44.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-6.6,-4.3,6.5,4.3).s().p("AkAD6IF+pJICEBWIl/JJg");
	this.shape_9.setTransform(288.6,46.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_10.setTransform(290.5336,47.4612,0.4456,0.4456);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},350).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// ctaBtn
	this.instance_5 = new lib.ctaBtn();
	this.instance_5.setTransform(252.35,35.45,0.3616,0.3616,0,0,0,1.1,1.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(352).to({_off:false},0).to({alpha:1},7).wait(1));

	// printer_endFrame
	this.instance_6 = new lib.printer_endFrame();
	this.instance_6.setTransform(245.9,192.65,0.7625,0.7625,0,0,0,-100,85.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(343).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:150.95,y:252.1,alpha:1},7,cjs.Ease.quadOut).wait(10));

	// shaq_endFrame
	this.instance_7 = new lib.shaq_endFrame_1();
	this.instance_7.setTransform(346,471,1,1,0,0,0,-46,130);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(346).to({_off:false},0).to({x:254},7,cjs.Ease.quadOut).wait(7));

	// txt_relief
	this.instance_8 = new lib.txt_relief();
	this.instance_8.setTransform(148.95,162.95,1,1,0,0,0,-154.6,17.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(302).to({_off:false},0).to({y:140.95,alpha:1},7,cjs.Ease.quadOut).wait(27).to({alpha:0},6).to({_off:true},1).wait(17));

	// image_05
	this.instance_9 = new lib.image_05();
	this.instance_9.setTransform(139,311.1,1,1,0,0,0,-160,112);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(302).to({_off:false},0).to({alpha:1},7).wait(27).to({alpha:0},6).to({_off:true},1).wait(17));

	// txt_monetized
	this.instance_10 = new lib.txt_monetized();
	this.instance_10.setTransform(149.95,169.9,1,1,0,0,0,-154.6,32.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(262).to({_off:false},0).to({y:143.9,alpha:1},7,cjs.Ease.quadOut).wait(29).to({y:107.9,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(54));

	// image_04
	this.instance_11 = new lib.image_04();
	this.instance_11.setTransform(159,311,1,1,0,0,0,-160,112);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(264).to({_off:false},0).to({alpha:1},7).to({_off:true},38).wait(51));

	// txt_categorize
	this.instance_12 = new lib.txt_categorize();
	this.instance_12.setTransform(149.95,153.95,1,1,0,0,0,-154.6,17.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(221).to({_off:false},0).to({y:143.95,alpha:1},7,cjs.Ease.quadOut).wait(31).to({y:117.95,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(93));

	// computer_screen
	this.instance_13 = new lib.computer_screen();
	this.instance_13.setTransform(154,285.05,1,1,0,0,0,-160,86);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(221).to({_off:false},0).to({alpha:1},7).wait(31).to({alpha:0},7).to({_off:true},1).wait(93));

	// txt_organize
	this.instance_14 = new lib.txt_organize();
	this.instance_14.setTransform(149.95,157.95,1,1,0,0,0,-154.6,17.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(181).to({_off:false},0).to({y:143.95,alpha:1},7,cjs.Ease.quadOut).wait(29).to({y:127.95,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(135));

	// image_03
	this.instance_15 = new lib.image_03();
	this.instance_15.setTransform(152,311.05,1,1,0,0,0,-160,112);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(177).to({_off:false},0).to({alpha:1},7).wait(33).to({alpha:0},7).to({_off:true},1).wait(135));

	// txt_digitize
	this.instance_16 = new lib.txt_digitize();
	this.instance_16.setTransform(150.5,157.5,1,1,0,0,0,-154.6,17.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(144).to({_off:false},0).to({y:145.5,alpha:1},5,cjs.Ease.quadOut).wait(28).to({y:117.5,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(175));

	// image_02
	this.instance_17 = new lib.image_02();
	this.instance_17.setTransform(150,311,1,1,0,0,0,-160,112);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(144).to({_off:false},0).to({alpha:1},5).to({_off:true},36).wait(175));

	// txt_RRScanners
	this.instance_18 = new lib.txt_RRScanners();
	this.instance_18.setTransform(149.5,132.1,1,1,0,0,0,-120.6,12.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(96).to({_off:false},0).to({y:148.1,alpha:1},7,cjs.Ease.quadOut).wait(35).to({alpha:0},6).to({_off:true},1).wait(215));

	// printer_01
	this.instance_19 = new lib.printer_01("single",0);
	this.instance_19.setTransform(304.5,15.35,0.2524,0.2524,0,0,0,-134.7,170.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(96).to({_off:false},0).to({x:279,alpha:1,mode:"synched",loop:false},7,cjs.Ease.quadOut).wait(35).to({mode:"single",startPosition:30},0).to({alpha:0},6).to({_off:true},1).wait(215));

	// txt_notForLong
	this.instance_20 = new lib.txt_notForLong();
	this.instance_20.setTransform(150.2,153.75,1,1,0,0,0,-68,17.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50).to({_off:false},0).to({y:143.75,alpha:1},7,cjs.Ease.quadOut).wait(32).to({alpha:0},6).to({_off:true},1).wait(264));

	// image_01
	this.instance_21 = new lib.image_01();
	this.instance_21.setTransform(157,311.05,1,1,0,0,0,-160,112);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(48).to({_off:false},0).wait(41).to({alpha:0},6).to({_off:true},1).wait(264));

	// background_color
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-205.7,561,508.9);
// library properties:
lib.properties = {
	id: '8E5913087FB946AB926391FBB5EDFA33',
	width: 320,
	height: 50,
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