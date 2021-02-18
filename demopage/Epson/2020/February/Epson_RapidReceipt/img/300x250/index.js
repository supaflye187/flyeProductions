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
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


(lib.receiptImage_03 = function() {
	this.initialize(img.receiptImage_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


(lib.receiptImage_04 = function() {
	this.initialize(img.receiptImage_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


(lib.shaq_image_02 = function() {
	this.initialize(img.shaq_image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


(lib.shaq_image_03 = function() {
	this.initialize(img.shaq_image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,171);// helper functions:

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
	this.shape.graphics.f("#353535").s().p("AGcByIAAgbIAJABQAKAAAEgFQAFgFAAgJIgniJIAlAAIAVBfIAShfIAkAAIghCAQgFARgEALQgFAKgFAGQgGAGgIACQgJACgMAAgAhOBdQAHgCADgFQADgGAAgHIAAgEIgNAAIAAgoIAiAAIgCA0QgBAJgDAGQgFAGgGAEQgHAEgKABgAFNBEQgHgEgGgJIAAAAIAAAOIgjAAIAAi2IAkAAIAAA6IAAAAQAGgIAHgEQAIgEAJAAQAXAAAJARQALARgBAlQABAngLAQQgJARgXAAQgLAAgHgEgAFEghQgDAMAAAVQAAAXADALQAEAMAMAAQALAAAEgMQADgLAAgXQAAgVgDgMQgEgLgLAAQgMAAgEALgACxBFQgGgDgEgGQgEgFgCgHQgCgHAAgHQAAgLACgHQACgHAFgFQAEgEAHgDQAGgDAJgDIAUgFQAJgCACgEQAEgDAAgHQgBgIgDgFQgEgEgJAAQgIAAgEAFQgEAFAAAIIAAAEIggAAIAAgEQAAgMAEgIQAEgIAGgFQAGgFAKgCQAJgCAJAAQAQAAAKADQAKADAFAFQAFAGACAIQACAIABAJIABBXIACALIghAAIgDgHIgBgHIgBAAQgGALgIADQgJADgMAAQgJAAgHgDgADdAFIgIACQgKACgFAGQgEAFAAAKQAAAHACAGQADAGAIAAIAHgBIAHgEQADgDADgEQACgEAAgGIAAgbgABWBEQgIgEgGgJIAAAAIAAAOIgiAAIAAi2IAjAAIAAA6IABAAQAGgIAGgEQAIgEAKAAQAWAAAJARQALARAAAlQAAAngLAQQgJARgWAAQgMAAgGgEgABNghQgEAMAAAVQAAAXAEALQADAMAMAAQAMAAADgMQAEgLAAgXQAAgVgEgMQgDgLgMAAQgMAAgDALgAizBCQgKgHgFgKQgFgLgCgNIgBgZQAAgOACgNQACgNAGgJQAFgLALgFQALgGASAAQAQAAAJAEQAKAFAFAKQAHAJABANQACANABAQIAAAHIhGAAIABAWIACALQACAEAEADQADADAFAAQAJAAAEgHQAEgGACgNIAfAAQAAAYgMANQgMAMgZAAQgUAAgLgGgAidgtQgEADgCAEIgCAIIgBAKIAAAGIAkAAIgBgOIgDgLQgCgEgDgCQgEgCgFAAQgGAAgDACgAmwBFQgGgDgEgGQgDgFgCgHQgDgHAAgHQAAgLADgHQACgHAEgFQAFgEAGgDQAHgDAIgDIAVgFQAIgCADgEQADgDAAgHQAAgIgDgFQgFgEgJAAQgHAAgFAFQgEAFAAAIIAAAEIgfAAIAAgEQAAgMADgIQAEgIAGgFQAHgFAJgCQAJgCAJAAQAQAAAKADQAKADAGAFQAFAGACAIQABAIABAJIAABHIABAQIADALIgiAAIgDgHIgBgHIgBAAQgFALgJADQgIADgNAAQgJAAgHgDgAmEAFIgHACQgLACgEAGQgFAFAAAKQAAAHACAGQAEAGAHAAIAHgBIAHgEIAGgHQACgEAAgGIAAgbgAoZBFQgKgDgGgJQgHgIgDgOQgEgOAAgVQAAgUAFgOQAEgOAHgIQAIgJAKgDQAKgDANAAQAYAAANAOQAMAPAAAYIgiAAIAAgKIgDgJIgFgGQgDgDgEAAQgHAAgEADQgEADgCAGQgCAGgBAIIAAAqQABAKACAFQACAGADADQAEADAGAAQAJAAAFgIQADgHAAgSIAiAAQAAAcgMAOQgMAOgdAAQgNAAgKgDgAIVBFIAAgiIAiAAIAAAigAj1BFIgdg4IgNAQIAAAoIgjAAIAAi2IAjAAIAABhIABAAIAkg0IAnAAIgoA3IAtBSgAIZASIgEiDIAiAAIgECDg");
	this.shape.setTransform(-111.75,-126.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("ADnBbQgLgFgGgJQgGgJgDgOQgDgNAAgSQAAgSAEgMQACgOAHgJQAGgJALgFQAKgFAPAAQAQAAAKAEQALAFAGAJQAGAKADANQACANAAASQAAASgCANQgDAOgHAJQgGAJgKAEQgLAFgPAAQgQAAgKgEgAD3gVQgEADgCAHQgCAGAAAIIAAAnQAAAJACAHQACAGAEAEQAEADAGAAQALAAAEgLQAEgLAAgaQAAgZgEgLQgEgMgLAAQgGAAgEAEgAAxBYQgKgGgGgLQgFgKgBgNIgBgbQAAgOACgLQACgNAGgKQAFgKALgGQALgGASAAQAPAAAKAFQAKAFAGAJQAFAJACAOQACALAAAQIAAAIIhGAAIABAXIADAKQACAFAEACQADADAFAAQAJAAAEgGQAEgHABgNIAgAAQgBAZgMAMQgLANgaAAQgTAAgLgHgABHgWQgEACgCAEIgDAJIgBAJIAAAFIAkAAIAAgNIgDgKQgCgEgDgDQgEgCgFAAQgGAAgDADgAg8BbQgKgDgHgIQgGgIgDgOQgEgOAAgVQAAgVAFgNQADgOAIgJQAIgIAKgEQAKgDAMAAQAZAAAMAPQAMAOAAAYIghAAIgBgKIgCgIQgCgEgDgDQgDgCgFAAQgGAAgFADQgEADgBAGQgDAFgBAIIAAArQABAJADAGQABAGAEACQAEADAGAAQAJAAAEgIQAEgHAAgRIAhAAQAAAbgMAPQgLAOgdAAQgNAAgKgEgAi3BYQgLgGgFgLQgFgKgBgNIgBgbQAAgOACgLQABgNAGgKQAGgKALgGQALgGASAAQAPAAAKAFQAKAFAFAJQAGAJACAOQACALAAAQIAAAIIhGAAIABAXIADAKQACAFADACQAEADAEAAQAJAAAFgGQAEgHABgNIAgAAQgBAZgMAMQgLANgaAAQgTAAgLgHgAiigWQgDACgCAEIgDAJIgBAJIAAAFIAkAAIgBgNQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgEADgAFQBcIAAhxIgSAAIAAgYIASAAIAAgQQAAgJADgHQACgGAFgEQAFgEAHgBQAGgCAJAAIATABIAAAZIgHAAQgIAAgDACQgDADAAAGIAAAMIAVAAIAAAYIgVAAIAABxgAkDBcIAAiJIAjAAIAACJgAmHBcIAAi2IBBAAQAOAAAKAEQAJAFAGAIQAGAIADAJQACAKAAALQAAAOgEAKQgEALgIAGQgHAGgLADQgLAEgNAAIgUAAIAABJgAligHIARAAQALAAAGgHQAHgHAAgOQAAgOgGgHQgGgHgNAAIgQAAgAkDg+IAAgfIAjAAIAAAfg");
	this.shape_1.setTransform(-215.725,-129.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cake, new cjs.Rectangle(-309,-139,309,215), null);


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
	this.shape.graphics.f("#353535").s().p("AGUBhQgKgDgGgGQgGgGgDgJQgCgIAAgLIAAgFIAiAAIAAAFQAAAKAEAFQAGAGAJAAQAJAAAFgEQAFgEAAgJQAAgHgEgEQgEgDgFgDIgagJQgQgFgIgKQgIgKAAgPQAAgIAEgIQACgIAHgGQAGgGALgEQAJgDAPAAQAZAAAMAKQANALAAAUIAAAGIgiAAQAAgLgDgGQgFgFgJAAQgGAAgFAEQgGAEAAAIQAAAFAEAFQADADAJADIAXAHQARAGAHAKQAIAJgBARQAAAMgDAIQgFAJgHAFQgHAGgJACQgKADgNAAQgPAAgLgDgADBBdQgLgHgFgLQgGgLgCgOIgBgbQAAgPACgMQADgOAFgKQAHgLALgGQALgGATAAQARAAAKAFQAKAFAGAKQAGAJACAOQACANAAAQIAAAJIhJAAIAAAYIAEALQACAEADADQAEADAFAAQAJAAAFgHQAEgGACgOIAhAAQgBAZgMANQgNAOgbAAQgTAAgMgHgADXgXQgDACgCAEIgEAKIAAAPIAmAAIgCgOQAAgGgCgFQgCgEgEgDQgEgCgFAAQgGAAgEADgAjLBgQgHgDgEgGQgEgGgCgHQgCgIAAgHQAAgKADgIQACgHAEgFQAEgGAHgDQAHgEAKgCIAVgGQAIgCADgEQADgDABgHQAAgIgEgFQgEgFgJAAQgJAAgFAFQgEAFAAAJIAAAEIgiAAIAAgEQAAgMAEgJQAFgIAHgFQAGgGAKgCQAJgCALAAQAQAAALADQAKADAFAGQAHAGABAIQACAJABAJIABBcIADAMIgkAAIgEgPIgBAAQgGALgJADQgIAEgOAAQgKAAgGgEgAidAdIgIACQgMADgFAGQgEAFgBAKQAAAIAEAGQADAGAHAAIAJgBQADgBAEgDQADgDACgEQACgEABgGIAAgdgAk6BgQgKgDgHgJQgHgJgEgOQgDgPAAgWQAAgWAEgOQAFgPAIgJQAHgIALgEQALgDANAAQAaAAANAPQANAPAAAZIgkAAIgBgKIgCgJQgCgEgDgDQgDgCgGAAQgGAAgFADQgEADgCAGQgCAGgBAIIAAAtQABAKACAGQACAGAEADQAEADAGAAQAJAAAFgIQAFgIgBgSIAkAAQAAAdgNAPQgNAPgeAAQgNAAgLgEgAnWBVQgOgOAAgbIAAgHIAoAAIABARQAAAGADAEQAEAEAEACQAGACAHAAQAJAAAHgGQAHgGAAgMQAAgGgCgFQgBgFgFgEQgEgDgGgDIgRgHQgMgEgJgFQgKgFgHgGQgGgHgDgJQgDgJAAgMQAAgdAQgOQAQgOAcAAQAMAAALADQAMADAHAGQAJAHAEAJQAEAKAAAOIAAAFIglAAQAAgNgFgIQgEgHgMAAQgGAAgFACQgEACgCADQgDADgBAEIgBAIQAAAJAEAGQADAGANAFIAeANQALAFAHAFQAHAFAFAGQADAGACAHQACAIAAAIQAAAfgSAOQgRAOghAAQggAAgPgPgAEoBhIAAiRIAkAAIAAAUIAAAAQAHgLAIgGQAIgGALAAIADAAIAEAAIAAAkIgMgBIgKACQgEABgFADQgEADgCAFQgDAEAAAHIAABYgAByBhIAAhjQAAgMgDgEQgEgFgJAAQgTAAgBAXIAABhIgkAAIAAiRIAjAAIAAARIABAAQAFgKAKgFQAKgFALAAQASAAAKAJQAJAKAAAWIAABrgAgRBhIAAhjQAAgMgEgEQgDgFgJAAQgUAAAAAXIAABhIglAAIAAiRIAjAAIAAARIABAAQAGgKAKgFQAJgFAMAAQARAAAJAJQAKAKAAAWIAABrg");
	this.shape.setTransform(-51.45,-77.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25317E").s().p("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");
	this.shape_1.setTransform(-175.3,-75.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RRScanners, new cjs.Rectangle(-244.1,-87.5,241.1,24.299999999999997), null);


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
	this.shape.setTransform(-70.9614,-107.5576,0.575,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AGDBdQgJgDgGgGQgGgGgCgIQgCgIAAgKIAAgFIAfAAIAAAFQAAAJAGAFQAEAGAJAAQAJAAAFgEQAEgEAAgJQAAgGgDgEQgFgDgEgCIgagKQgOgEgIgKQgHgKAAgNQAAgJACgHQADgIAHgGQAFgFALgEQAJgDAOAAQAYAAALAKQANALAAATIAAAFIghAAQAAgLgDgFQgEgFgJAAQgGAAgFAEQgFAEAAAHQAAAFADAFQADADAJADIAWAHQARAFAGAKQAIAJAAAPQAAAMgEAIQgFAIgGAGQgHAFgJACQgKADgMAAQgOAAgLgDgAC5BZQgKgGgGgLQgFgKgCgOIgBgaQAAgOADgMQABgNAGgKQAGgKALgGQALgGASAAQAQAAAJAFQAKAFAGAJQAFAJADAOQACAMAAAPIAAAJIhHAAIABAXIADAKQACAEADADQAEADAEAAQAKAAAEgHQAEgGACgNIAgAAQgCAYgLANQgMANgaAAQgTAAgLgHgADOgWQgDACgCAEIgDAJIgBAOIAlAAIgCgNQAAgGgCgEQgCgEgEgDQgDgCgGAAQgFAAgEADgAjDBcQgGgDgFgGQgDgFgCgHQgCgHAAgIQAAgJADgHQABgIAFgEQAEgGAGgDIARgGIAUgGQAHgBADgEQADgDAAgHQABgIgEgEQgDgFgKAAQgIAAgEAFQgFAFABAIIAAAEIghAAIAAgDQABgMADgJQAEgIAHgFQAHgFAIgCQAJgCAKAAQAQAAAKADQAKADAFAGQAGAGACAHQACAIAAAKIABBXIAEAMIgiAAIgGgPIAAAAQgGALgIADQgJAEgNAAQgIAAgHgEgAiXAcIgIACQgKACgFAGQgFAFAAAJQAAAJAEAFQACAGAIAAIAHgBQAEgBAEgDIAEgGQACgFAAgFIAAgcgAktBcQgKgDgHgIQgGgJgDgOQgEgOAAgVQAAgVAEgOQAEgOAIgIQAHgIAKgEQALgDANAAQAZAAAMAOQAMAPAAAYIghAAIgCgJIgCgJQgBgEgDgDQgEgCgFAAQgGAAgEADQgFADgBAFQgCAGgBAIIAAArQABAKACAGQACAFADADQAEADAGAAQAJAAAEgIQAFgIAAgQIAhAAQAAAbgMAOQgMAPgdAAQgNAAgKgEgAnDBSQgNgOABgaIAAgHIAlAAIAAARQABAFADAEQADAEAFACQAFACAHAAQAJAAAGgFQAHgGAAgMIgBgLQgCgEgEgEQgEgDgGgDIgQgGQgNgFgIgEQgJgFgHgGQgFgHgEgIQgDgJAAgLQAAgcAQgNQAPgOAbAAQAMAAALADQALADAHAGQAHAGAFAJQAEAKABANIAAAFIgkAAQgBgNgEgHQgFgHgLAAQgGAAgEACIgGAEQgDADgBAEIgBAIQAAAJAEAGQADAFAMAFIAdANQALAEAGAFQAHAFAFAFQADAGABAHQACAHAAAJQAAAdgRANQgQAOgfAAQggAAgOgOgAEcBdIAAiLIAiAAIAAATIABAAQAFgKAIgGQAIgGALAAIADAAIADAAIAAAiIgKAAIgKABQgFACgDADQgEADgDAEQgDAEABAHIAABUgABuBdIAAhfQAAgLgEgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAiAAIAAARIAAAAQAGgLAJgEQAJgFAMAAQARAAAJAJQAJAKAAAVIAABmgAgRBdIAAhfQAAgLgDgEQgEgFgHAAQgUAAAAAWIAABdIgjAAIAAiLIAhAAIAAARIABAAQAGgLAJgEQAJgFALAAQARAAAJAJQAJAKAAAVIAABmg");
	this.shape_1.setTransform(-2.6607,-108.794,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RR_endFrame, new cjs.Rectangle(-108.9,-114.3,133,13.399999999999991), null);


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
	this.shape.graphics.f("#353535").s().p("AgRAVIAAgpIAjAAIAAApg");
	this.shape.setTransform(-64.025,-60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgTBiIAAh3IgTAAIAAgZIATAAIAAgRQAAgJADgHQACgHAGgEQAEgEAGgCQAIgBAJAAIAUAAIAAAbIgEAAIgEAAQgHAAgEACQgDADAAAGIAAANIAWAAIAAAZIgWAAIAAB3g");
	this.shape_1.setTransform(-70.9,-68.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgeBFQgLgGgFgMQgGgLgCgOIAAgaQAAgOABgOQADgNAFgLQAHgLALgGQAMgGARAAQARAAAKAFQALAFAFAKQAGAJACAPQACANAAAQIAAAIIhIAAIAAALIAAANIAEALQACAEADAEQAEACAEAAQAJABAFgIQAEgGACgOIAhAAQgBAZgMANQgNAOgbAAQgSAAgMgHgAgIgvQgDADgCAEIgEAJIAAAKIAAAGIAlAAIgCgPQAAgGgCgEQgCgFgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_2.setTransform(-80.95,-65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgSBiIAAiRIAlAAIAACRgAgShAIAAghIAlAAIAAAhg");
	this.shape_3.setTransform(-90.175,-68.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgSBgIAAi/IAlAAIAAC/g");
	this.shape_4.setTransform(-96.375,-68.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgeBFQgLgGgFgMQgGgLgCgOIgBgaQAAgOACgOQADgNAFgLQAHgLALgGQALgGASAAQARAAAKAFQAKAFAGAKQAGAJACAPQACANAAAQIAAAIIhIAAIAAALIAAANIAEALQACAEADAEQAEACAEAAQAJABAFgIQAEgGACgOIAhAAQgBAZgMANQgNAOgbAAQgSAAgMgHgAgIgvQgDADgCAEIgEAJIAAAKIAAAGIAlAAIgCgPQAAgGgCgEQgCgFgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_5.setTransform(-105.6,-65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AglBLIAAiRIAjAAIAAAUIABAAQAFgLAIgGQAIgHALAAIAEAAIADABIAAAjIgGAAIgFAAIgKABQgFACgEADQgEADgDAFQgBAFAAAHIAABXg");
	this.shape_6.setTransform(-115.475,-66.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgCBcQgHgBgEgEQgDgFgBgIQgCgGAAgMIAAhSIgTAAIAAgaIATAAIAAgpIAkAAIAAApIAWAAIAAAaIgWAAIAABOQAAAIADAEQADAEAHAAIAFAAIAEgBIAAAaIgMAAIgNABQgKAAgGgCg");
	this.shape_7.setTransform(-130.4,-67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("Ag4BiIAAi/IAkAAIAAAPIAAAAQAHgKAHgEQAHgFALAAQAXAAALASQALASAAApQAAAngLASQgLARgXAAQgKAAgHgEQgHgEgGgIIgBAAIAAA8gAgPg4QgEAMAAAYQAAAWAEAMQAEAMALAAQAMAAAEgMQAEgMAAgWQAAgYgEgMQgEgMgMAAQgLAAgEAMg");
	this.shape_8.setTransform(-140.775,-63.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgSBiIAAiRIAlAAIAACRgAgShAIAAghIAlAAIAAAhg");
	this.shape_9.setTransform(-150.675,-68.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgeBFQgLgGgFgMQgGgLgBgOIgBgaQAAgOACgOQABgNAHgLQAFgLAMgGQAMgGARAAQAQAAALAFQAKAFAGAKQAGAJADAPQABANAAAQIAAAIIhIAAIAAALIABANIADALQACAEAEAEQADACAEAAQAKABAEgIQAEgGACgOIAiAAQgCAZgMANQgMAOgbAAQgUAAgLgHgAgHgvQgEADgCAEIgDAJIgBAKIAAAGIAlAAIgBgPQgBgGgCgEQgCgFgEgCQgDgCgGAAQgFAAgDACg");
	this.shape_10.setTransform(-159.9,-65.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgYBIQgJgDgIgJQgGgJgEgOQgDgPAAgWQgBgVAFgPQAEgPAIgIQAIgJAKgEQALgDAMAAQAaAAANAPQANAPABAaIgkAAIgBgKIgCgJQgCgFgEgDQgCgCgGAAQgFAAgFADQgFADgCAGQgBAGgBAKIgBAUIABAYQABAJABAHQACAFAFAEQADACAGAAQAJABAEgJQAFgIAAgSIAkAAQgBAdgNAPQgMAPgeAAQgNAAgLgEg");
	this.shape_11.setTransform(-172.15,-65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgeBFQgLgGgGgMQgFgLgBgOIgCgaQABgOACgOQABgNAHgLQAFgLAMgGQALgGATAAQAQAAAKAFQALAFAFAKQAGAJADAPQACANAAAQIAAAIIhJAAIAAALIABANIADALQACAEAEAEQADACAEAAQAJABAFgIQAEgGACgOIAiAAQgCAZgMANQgMAOgbAAQgTAAgMgHgAgHgvQgEADgCAEIgDAJIgBAKIAAAGIAlAAIgBgPQgBgGgCgEQgCgFgDgCQgFgCgFAAQgFAAgDACg");
	this.shape_12.setTransform(-184.4,-65.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AglBLIAAiRIAjAAIAAAUIABAAQAFgLAIgGQAIgHALAAIAEAAIADABIAAAjIgGAAIgFAAIgKABQgFACgEADQgEADgDAFQgBAFAAAHIAABXg");
	this.shape_13.setTransform(-194.275,-66.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgRAYQAHgBAEgHQADgGAAgHIAAgDIgOAAIAAgqIAjAAIAAAjIgBASQgCAJgEAGQgEAHgHAFQgGAEgLABg");
	this.shape_14.setTransform(-208.525,-58.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AASBgIAAhjQAAgLgEgFQgEgEgIAAQgTAAAAAXIAABgIglAAIAAi/IAlAAIAAA+IABAAQAKgTAYAAQASAAAKAKQAJAKAAAWIAABqg");
	this.shape_15.setTransform(-218.25,-68.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AASBgIAAhjQAAgLgEgFQgDgEgJAAQgTAAAAAXIAABgIglAAIAAi/IAlAAIAAA+IAAAAQALgTAYAAQASAAAJAKQAKAKAAAWIAABqg");
	this.shape_16.setTransform(-231.5,-68.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAjBgIgJgoIgyAAIgJAoIgpAAIAzi/IAvAAIAzC/gAATAYIgShWIgBAAIgSBWIAlAAg");
	this.shape_17.setTransform(-245.5,-68.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_relief, new cjs.Rectangle(-311.5,-86.5,309,35.9), null);


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
	this.shape.graphics.f("#353535").s().p("AgfCUIAAg2IA3AAIAAA2gAgdBDIAAgQQAAgVAGgOQAGgOAOgOIAPgSQAIgKAEgKQADgLAAgNQAAgPgHgKQgHgJgNgBQgPAAgHANQgHANAAATIAAALIg2AAIAAgKQAAgSAFgPQAFgQAKgLQAKgLAQgGQAPgHAUAAQArAAAVAVQAWAWAAAlQAAARgGAOQgFAPgPARIgRASQgKAMgFAJQgFAKAAAQIAAAGg");
	this.shape.setTransform(-46.525,-64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgnBvQgQgFgJgJQgJgJgEgNQgEgNABgQIAAgHIAyAAIAAAHQAAAOAIAJQAHAJAPAAQAMAAAIgHQAHgGABgNQAAgLgHgFQgFgGgJgDIgngPQgXgIgMgOQgMgPAAgXQAAgOAEgMQAFgMAKgJQAKgJAPgFQAPgFAWAAQAlAAATAQQASAQAAAeIAAAJIgyAAQAAgRgGgIQgFgIgOAAQgKAAgIAGQgIAGAAAMQAAAIAFAHQAFAGAPAFIAgALQAbAJAMAOQAKAOABAZQAAASgHANQgFANgMAIQgLAJgPAEQgPADgRAAQgXAAgQgEg");
	this.shape_1.setTransform(-65.5,-61.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgECMQgKgCgGgHQgGgHgCgLQgCgLAAgRIAAh9IgcAAIAAgmIAcAAIAAg/IA4AAIAAA/IAhAAIAAAmIghAAIAAB3QAAANAEAFQAEAGANAAIAGgBIAGAAIAAAnIgSABIgTAAQgQAAgKgCg");
	this.shape_2.setTransform(-80.55,-64.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AhVCUIAAkiIA2AAIAAAXIABAAQAJgPAMgHQAKgGARgBQAjAAARAbQAQAcAAA9QAAA8gQAcQgRAagjAAQgPAAgLgGQgLgGgJgNIgBAAIAABbgAgXhWQgGASAAAkQAAAjAGASQAFATASAAQASAAAGgTQAGgSAAgjQAAgkgGgSQgGgSgSAAQgSAAgFASg");
	this.shape_3.setTransform(-96.675,-57.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgbCUIAAjcIA3AAIAADcgAgbhjIAAgwIA3AAIAAAwg");
	this.shape_4.setTransform(-112.075,-64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhvAAIAAASIACATIAFAQQADAHAFAFQAFAEAHAAQAPAAAGgKQAHgKACgVIAzAAQgCAmgSAUQgTAUgpAAQgeAAgRgKgAgMhIQgFAEgDAGIgFAOIgCAQIAAAIIA5AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgGAEg");
	this.shape_5.setTransform(-126.475,-61.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgkBuQgQgFgKgNQgLgOgFgWQgFgWAAgiQAAghAGgWQAHgWAMgOQAMgNAQgFQAQgFATAAQAoAAAUAWQATAXAAAoIg2AAIgBgQIgDgOQgDgHgFgEQgFgEgIAAQgKAAgGAFQgHAFgDAJQgDAJgBAOIgCAhIACAjQABAPADAJQADAJAGAFQAGAEAJAAQAOAAAHgMQAGgNAAgbIA2AAQAAAsgTAXQgUAWgtAAQgUAAgQgFg");
	this.shape_6.setTransform(-145.475,-61.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhvAAIAAASIACATIAFAQQADAHAFAFQAFAEAHAAQAPAAAGgKQAHgKACgVIAzAAQgCAmgSAUQgTAUgpAAQgeAAgRgKgAgMhIQgFAEgDAGIgFAOIgCAQIAAAIIA5AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgGAEg");
	this.shape_7.setTransform(-164.425,-61.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("Ag5BxIAAjcIA2AAIAAAeIABAAQAHgQAMgJQANgKARAAIAFAAIAGABIAAA2IgJgBIgIAAIgQACQgHACgGAFQgGAEgEAIQgCAHgBALIAACEg");
	this.shape_8.setTransform(-179.85,-61.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AhHCSIAAgrIAOACQAQAAAHgIQAHgJABgNIg+jcIA7AAIAgCYIAAAAIAdiYIA5AAIg1DNQgHAbgIARQgHARgJAKQgIAJgMADQgOADgTAAg");
	this.shape_9.setTransform(-206.45,-57.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgJCPQgMgHgJgQIgBAAIAAAYIg2AAIAAkkIA4AAIAABdIABAAQAJgNALgHQALgGAPAAQAjAAARAbQAQAbAAA9QAAA9gQAbQgRAagjAAQgRAAgKgFgAgXgTQgGARAAAkQAAAkAGASQAFASASABQASgBAGgSQAGgSAAgkQAAgkgGgRQgGgTgSABQgSgBgFATg");
	this.shape_10.setTransform(-225.525,-64.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AhFB6QgQgbAAg+QAAg8AQgbQAQgbAjAAQAQAAALAHQALAGAJANIABAAIAAhcIA4AAIAAEjIg2AAIAAgXIgBAAQgJAPgMAGQgKAHgSAAQgjgBgQgagAgXgUQgGASAAAjQAAAlAGASQAFASASAAQATAAAFgSQAGgSAAglQAAgjgGgSQgFgRgTgBQgSABgFARg");
	this.shape_11.setTransform(-35.825,-107.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhvAAIAAASIACATIAFAQQADAHAFAFQAFAEAHAAQAPAAAGgKQAHgKACgVIAzAAQgCAmgSAUQgTAUgpAAQgeAAgRgKgAgMhIQgFAEgDAGIgFAOIgCAQIAAAIIA5AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgGAEg");
	this.shape_12.setTransform(-55.325,-104.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("ABQBxIAAiZQAAgOgGgHQgEgIgNAAQgNAAgIAJQgIAJAAAUIAACQIg3AAIAAiZQgBgOgFgHQgEgIgNAAQgNAAgIAJQgIAJAAAUIAACQIg4AAIAAjbIA2AAIAAAWIABAAQAKgPANgGQAOgHASAAQAUAAAMAJQAOAJAEARIABAAQAGgSAPgJQAOgIAVAAQAbAAAOAQQANASAAAfIAACgg");
	this.shape_13.setTransform(-80.25,-104.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgbCSIAAkjIA3AAIAAEjg");
	this.shape_14.setTransform(-100.725,-107.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhvAAIAAASIACATIAFAQQADAHAFAFQAFAEAHAAQAPAAAGgKQAHgKACgVIAzAAQgCAmgSAUQgTAUgpAAQgeAAgRgKgAgMhIQgFAEgDAGIgFAOIgCAQIAAAIIA5AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgGAEg");
	this.shape_15.setTransform(-115.125,-104.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AAbCSIAAiXQAAgRgGgHQgFgGgNAAQgdAAAAAjIAACSIg4AAIAAkjIA4AAIAABeIAAAAQARgcAkAAQAbAAAPAPQAOAPAAAhIAACig");
	this.shape_16.setTransform(-134.85,-107.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAdBuIgdibIAAAAIgbCbIhBAAIgwjbIA4AAIAaCbIABAAIAbibIA9AAIAdCbIABAAIAaibIA2AAIgvDbg");
	this.shape_17.setTransform(-159.475,-104.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("Ag5BxIAAjbIA2AAIAAAdIABAAQAHgQAMgKQANgJARAAIAFAAIAGAAIAAA2IgJAAIgIAAIgQACQgHACgGAEQgGAFgEAIQgCAIgBALIAACDg");
	this.shape_18.setTransform(-179.85,-104.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AguBpQgRgKgIgRQgIgRgCgVIgCgpQAAgWADgUQADgVAJgQQAJgQASgJQARgJAcAAQAYAAAQAHQAQAIAJAPQAJAPADAUQADAVAAAZIAAAMIhvAAIAAASIACATIAFAQQADAHAFAFQAFAEAHAAQAPAAAGgKQAHgKACgVIAzAAQgCAmgSAUQgTAUgpAAQgeAAgRgKgAgMhIQgFAEgDAGIgFAOIgCAQIAAAIIA5AAIgBgWQgCgKgDgGQgDgHgFgEQgGgDgIAAQgIAAgGAEg");
	this.shape_19.setTransform(-197.025,-104.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgfBuIg5jbIA7AAIAeCdIABAAIAfidIA4AAIg3Dbg");
	this.shape_20.setTransform(-215.6,-104.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("Ag0CNQgTgLgLgUQgLgUgDgcQgCgbAAgjQAAgfACgdQADgcALgTQALgVATgLQAUgMAgAAQAhAAAUAMQAUALAKAVQAKATADAcQAEAdAAAfQAAAjgEAbQgDAcgKAUQgKAUgUALQgUALghAAQggAAgUgLgAgUhlQgIAGgFANQgEAOgBATIgCAxIACAzQABAVAEAMQAFANAIAGQAIAHAMgBQANABAIgHQAIgGAEgNQAEgMACgVIABgzIgBgxQgCgTgEgOQgEgNgIgGQgIgGgNAAQgMAAgIAGg");
	this.shape_21.setTransform(-236.05,-108.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_overwhelmed, new cjs.Rectangle(-249.2,-134.5,225.7,95.2), null);


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
	this.shape.graphics.f("#353535").s().p("AgRAVIAAgpIAjAAIAAApg");
	this.shape.setTransform(-109.225,-63.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgLgCgOIgBgaQAAgOACgOQADgNAFgLQAHgKALgHQALgGATAAQAPAAALAFQAKAFAGAKQAGAJACAPQACANABAQIAAAIIhJAAIAAALIAAANIAEALQACAFADADQAEACAEAAQAKABAEgIQAEgGACgOIAhAAQgBAZgMANQgNAOgbAAQgSAAgMgHgAgIgvQgDACgCAFIgEAJIAAAKIAAAGIAlAAIgCgPQAAgGgCgEQgCgFgDgDQgFgBgFAAQgFgBgEADg");
	this.shape_1.setTransform(-118.45,-68.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgyBJIAAgdIA5hVIg3AAIAAgfIBjAAIAAAdIg5BWIA5AAIAAAeg");
	this.shape_2.setTransform(-130.2,-68.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShAIAAghIAlAAIAAAhg");
	this.shape_3.setTransform(-138.925,-71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AASBKIAAhiQAAgMgEgFQgEgEgIAAQgTAAAAAYIAABfIglAAIAAiQIAkAAIAAARIAAAAQAGgLAJgFQAJgEAMgBQASAAAKAKQAJAKAAAWIAABqg");
	this.shape_4.setTransform(-148.65,-69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AglBIQgGgDgFgGQgEgGgBgHQgCgIAAgHQAAgKACgIQACgHAFgFQAEgFAHgDQAGgEALgCIATgGQAJgCADgEQADgDAAgIQAAgIgEgFQgDgFgJABQgIAAgFAEQgFAGABAIIAAAEIgiAAIAAgDQAAgNAEgIQAEgJAHgFQAHgGAKgCQAIgCALAAQAQAAAKADQALAEAFAFQAGAGACAJQACAIAAAKIAABLIABAQIADAMIgjAAIgDgHIgCgIIAAAAQgHALgIADQgIAEgOAAQgJAAgHgEgAAIAFIgIACQgKADgFAGQgFAGAAAJQAAAJAEAFQACAHAIgBIAHgBQAEgBAEgDQADgCACgEQACgFAAgGIAAgdg");
	this.shape_5.setTransform(-161.7,-68.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgoBZQgNgKAAgTIAjAAQABAHAFAEIAGADIAGABQALAAAEgHQAFgIAAgLIAAgTIgBAAQgFAIgIAGQgIAEgJAAQgWABgLgSQgLgQAAgnIABgaQACgNAFgLQAFgLAIgGQAKgHAOAAQAJAAAHAEQAIAEAFAMIABAAIAAgRIAkAAIAACKQAAAcgOAOQgOAOgfAAQgYAAgNgKgAgJhDQgDADgCAGQgDAGAAAKIgBAZIABAOQAAAGADAGQACAFADADQAEADAFAAQAGAAADgDQAEgDADgGQACgFABgHIABgRQAAgagEgMQgEgKgMgBQgEAAgFADg");
	this.shape_6.setTransform(-174.8,-66.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AglBKIAAiQIAjAAIAAATIABAAQAFgKAIgGQAIgHALAAIAEAAIADABIAAAjIgGAAIgFAAIgKACQgFABgEADQgEADgDAFQgBAFAAAHIAABWg");
	this.shape_7.setTransform(-184.975,-69.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgiBdQgMgHgIgOQgGgNgDgSQgCgSAAgXQAAgVACgSQADgTAGgNQAIgNAMgHQANgIAVAAQAWAAANAIQANAHAGANQAIANABATQACASABAVQgBAXgCASQgBASgIANQgGAOgNAHQgNAHgWAAQgVAAgNgHgAgNhCQgFAEgDAIQgDAJgBANIgBAgIABAhQABAOADAJQADAIAFAEQAGAEAHAAQAIAAAGgEQAGgEACgIQADgJABgOIABghIgBggQgBgNgDgJQgCgIgGgEQgGgEgIAAQgHAAgGAEg");
	this.shape_8.setTransform(-197.3,-71.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_organize, new cjs.Rectangle(-310,-89.6,309,35.89999999999999), null);


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
	this.shape.graphics.f("#353535").s().p("AgRAVIAAgpIAjAAIAAApg");
	this.shape.setTransform(-13.325,-64.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgoBZQgNgLAAgSIAjAAQAAAHAGAEIAGADIAGABQALAAAEgHQAFgHAAgMIAAgSIAAAAQgGAHgJAFQgHAGgJAAQgWgBgLgRQgLgQAAgnIABgaQACgNAEgLQAFgKAKgIQAIgGAPAAQAJAAAHAEQAIAFAGALIAAAAIAAgQIAkAAIAACIQAAAdgOAOQgOAOgfAAQgYAAgNgKgAgJhDQgDADgCAGQgCAGgBALIgBAYIABAOQABAGACAFQACAGADACQAEAEAFAAQAGAAADgEQAEgDADgFQACgFABgHIABgRQAAgagEgLQgEgLgMAAQgEAAgFACg");
	this.shape_1.setTransform(-23.5,-67.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AASBLIAAhkQAAgLgEgEQgEgFgIAAQgTAAAAAYIAABgIglAAIAAiRIAjAAIAAARIABAAQAGgLAJgEQAJgGAMAAQASAAAKAKQAJAKAAAWIAABrg");
	this.shape_2.setTransform(-36.8,-69.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgbBIQgLgFgGgKQgHgJgCgOQgDgPAAgTQAAgRADgPQADgOAHgJQAGgKALgFQALgFAPAAQARAAALAEQALAFAGAKQAHAKADAOQACAOAAASQAAATgDAPQgDANgGAKQgHAKgLAEQgLAFgQAAIgCAAQgPAAgKgEgAgKguQgEAEgCAGQgCAHAAAKIgBATIABAVQAAAJACAHQACAHAEADQAEAFAGAAQALgBAFgMQAEgMAAgbQAAgagEgMQgFgMgLAAQgGAAgEAEg");
	this.shape_3.setTransform(-50.025,-69.3498);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgSBgIAAi/IAlAAIAAC/g");
	this.shape_4.setTransform(-59.725,-71.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AglBLIAAiRIAjAAIAAAUIABAAQAFgLAIgGQAIgGALgBIAEAAIADABIAAAjIgGAAIgFAAIgKABQgFACgEADQgEADgDAFQgBAFAAAHIAABXg");
	this.shape_5.setTransform(-73.275,-69.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgbBIQgLgFgGgKQgHgJgCgOQgDgPAAgTQAAgRADgPQADgOAHgJQAGgKALgFQALgFAPAAQARAAALAEQALAFAGAKQAHAKADAOQACAOAAASQAAATgDAPQgDANgGAKQgHAKgLAEQgLAFgQAAIgCAAQgPAAgKgEgAgKguQgEAEgCAGQgCAHAAAKIgBATIABAVQAAAJACAHQACAHAEADQAEAFAGAAQALgBAFgMQAEgMAAgbQAAgagEgMQgFgMgLAAQgGAAgEAEg");
	this.shape_6.setTransform(-84.825,-69.3498);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgTBiIAAh3IgTAAIAAgZIATAAIAAgRQAAgJADgHQACgHAGgEQAEgEAGgCQAIgBAJAAIAUAAIAAAbIgEAAIgEAAQgHAAgEACQgDADAAAGIAAANIAWAAIAAAZIgWAAIAAB3g");
	this.shape_7.setTransform(-95.2,-71.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgCBcQgHgBgEgFQgDgEgBgIQgCgHAAgLIAAhSIgTAAIAAgZIATAAIAAgqIAkAAIAAAqIAWAAIAAAZIgWAAIAABNQAAAKADADQADAEAHgBIAFAAIAEAAIAAAaIgMAAIgNABQgKAAgGgCg");
	this.shape_8.setTransform(-109.6,-71.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgbBIQgLgFgGgKQgHgJgCgOQgDgPAAgTQAAgRADgPQADgOAHgJQAGgKALgFQALgFAPAAQARAAALAEQALAFAGAKQAHAKADAOQACAOAAASQAAATgDAPQgDANgGAKQgHAKgLAEQgLAFgQAAIgCAAQgPAAgKgEgAgKguQgEAEgCAGQgCAHAAAKIgBATIABAVQAAAJACAHQACAHAEADQAEAFAGAAQALgBAFgMQAEgMAAgbQAAgagEgMQgFgMgLAAQgGAAgEAEg");
	this.shape_9.setTransform(-120.125,-69.3498);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AATBgIguiGIgBAAIAACGIgjAAIAAi/IAtAAIAuCCIAAAAIAAiCIAkAAIAAC/g");
	this.shape_10.setTransform(-134.3,-71.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_notForLong, new cjs.Rectangle(-144.1,-90,136.1,35.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-157.15,-55.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_monetized, new cjs.Rectangle(-280.5,-64.2,246.7,18.400000000000006), null);


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
	this.shape.graphics.f("#353535").s().p("AgRAVIAAgpIAjAAIAAApg");
	this.shape.setTransform(-46.025,-63.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgLgBgOIgCgaQABgOACgOQABgNAHgLQAFgKAMgHQALgGATAAQAQAAAKAFQALAFAFAKQAGAJADAPQACANAAAQIAAAIIhJAAIAAALIABANIADALQACAFAEADQADACAEAAQAJABAFgIQAEgGACgOIAiAAQgCAZgMANQgMAOgbAAQgTAAgMgHgAgHgvQgEACgCAFIgDAJIgBAKIAAAGIAlAAIgBgPQgBgGgCgEQgCgFgDgDQgFgBgFAAQgFgBgDADg");
	this.shape_1.setTransform(-55.25,-68.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgyBJIAAgdIA5hVIg2AAIAAgfIBiAAIAAAdIg5BWIA5AAIAAAeg");
	this.shape_2.setTransform(-67,-68.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShAIAAghIAlAAIAAAhg");
	this.shape_3.setTransform(-75.725,-71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgCBcQgHgBgEgEQgDgFgBgIQgCgGAAgMIAAhSIgTAAIAAgaIATAAIAAgpIAkAAIAAApIAWAAIAAAaIgWAAIAABOQAAAJADADQADAEAHAAIAFAAIAEgBIAAAaIgMABIgNAAQgKAAgGgCg");
	this.shape_4.setTransform(-82.6,-70.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShAIAAghIAlAAIAAAhg");
	this.shape_5.setTransform(-89.625,-71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgoBZQgNgKAAgTIAjAAQAAAHAGAEIAGADIAGABQALAAAEgHQAFgIAAgLIAAgTIAAAAQgGAIgJAGQgHAEgJAAQgWABgLgSQgLgQAAgnIABgaQACgNAEgLQAFgLAKgGQAIgHAPAAQAJAAAHAEQAIAEAGAMIAAAAIAAgRIAkAAIAACKQAAAcgOAOQgOAOgfAAQgYAAgNgKgAgJhDQgDADgCAGQgCAGgBAKIgBAZIABAOQABAGACAGQACAFADADQAEADAFAAQAGAAADgDQAEgDADgGQACgFABgHIABgRQAAgagEgMQgEgKgMgBQgEAAgFADg");
	this.shape_6.setTransform(-99.55,-66.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShAIAAghIAlAAIAAAhg");
	this.shape_7.setTransform(-109.075,-71.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgtBQQgLgRAAgpQAAgnALgSQALgSAXAAQAKAAAHAEQAHAEAGAJIABAAIAAg9IAlAAIAADAIgkAAIAAgQIAAAAQgHALgHAEQgHAEgLAAQgXAAgLgSgAgPgNQgEAMAAAXQAAAYAEAMQAEAMALAAQAMAAAEgMQAEgMAAgYQAAgXgEgMQgEgMgMAAQgLAAgEAMg");
	this.shape_8.setTransform(-118.975,-71.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgvBgIAAgcIAKABQAKABAFgGQAFgFAAgKIgoiQIAmAAIAVBjIABAAIAShjIAmAAIgjCHQgFASgFALQgFALgFAGQgGAHgIABQgIACgNAAg");
	this.shape_9.setTransform(-137.45,-66.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgSBgIAAi/IAlAAIAAC/g");
	this.shape_10.setTransform(-146.425,-71.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgSBgIAAi/IAlAAIAAC/g");
	this.shape_11.setTransform(-152.625,-71.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AglBIQgGgDgFgGQgEgGgBgHQgCgIAAgHQAAgKACgIQACgHAFgFQAEgFAHgDQAGgEALgCIATgGQAJgCADgEQADgDAAgIQAAgIgEgFQgDgFgJABQgIAAgFAEQgFAGABAIIAAAEIgiAAIAAgDQAAgNAEgIQAEgJAHgFQAHgGAKgCQAIgCALAAQAQAAAKADQALAEAFAFQAGAGACAJQACAIAAAKIAABLIABAQIADAMIgjAAIgDgHIgCgIIAAAAQgHALgIADQgIAEgOAAQgJAAgHgEgAAIAFIgIACQgKADgFAGQgFAGAAAJQAAAJAEAFQACAHAIgBIAHgBQAEgBAEgDQADgCACgEQACgFAAgGIAAgdg");
	this.shape_12.setTransform(-162.15,-68.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgYBIQgJgDgIgJQgGgJgEgOQgDgPAAgWQAAgVAEgPQAEgPAIgIQAIgJALgEQAKgDAMAAQAaAAAOAPQANAPgBAaIgjAAIgBgLIgCgJQgCgEgEgDQgDgCgFAAQgGAAgEADQgEADgDAGQgCAGgBAJIAAAVIAAAXQABAKACAHQADAGADADQAEACAFAAQAKABAFgJQAEgIAAgSIAjAAQABAdgNAPQgNAPgeAAQgNAAgLgEg");
	this.shape_13.setTransform(-174.55,-68.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShAIAAghIAlAAIAAAhg");
	this.shape_14.setTransform(-183.775,-71.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgCBcQgHgBgDgEQgFgFgBgIQgBgGAAgMIAAhSIgTAAIAAgaIATAAIAAgpIAkAAIAAApIAWAAIAAAaIgWAAIAABOQAAAJADADQACAEAJAAIAEAAIAEgBIAAAaIgMABIgMAAQgLAAgGgCg");
	this.shape_15.setTransform(-190.65,-70.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AglBIQgGgDgEgGQgFgGgCgHQgBgIAAgHQgBgKADgIQACgHAFgFQAEgFAGgDQAIgEAJgCIAUgGQAJgCADgEQADgDAAgIQAAgIgDgFQgFgFgIABQgJAAgEAEQgEAGgBAIIAAAEIghAAIAAgDQAAgNAEgIQAFgJAGgFQAHgGAKgCQAJgCAKAAQAQAAAKADQAKAEAGAFQAGAGACAJQACAIAAAKIAABLIABAQIADAMIgjAAIgDgHIgCgIIAAAAQgHALgJADQgHAEgNAAQgKAAgHgEgAAIAFIgIACQgKADgFAGQgFAGAAAJQAAAJADAFQADAHAIgBIAHgBQAEgBADgDQAEgCACgEQACgFAAgGIAAgdg");
	this.shape_16.setTransform(-201,-68.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA1BKIAAhkQAAgJgEgFQgDgFgIAAQgJAAgFAGQgFAGAAANIAABeIglAAIAAhkQAAgJgDgFQgDgFgIAAQgJAAgFAGQgGAGAAANIAABeIglAAIAAiQIAkAAIAAAPIAAAAQAHgKAJgEQAJgEAMgBQANABAIAFQAJAHADAKIAAAAQAEgLAKgGQAKgFANgBQASAAAJAMQAJALAAAVIAABog");
	this.shape_17.setTransform(-217.375,-69.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgbBIQgLgEgGgLQgHgJgCgPQgDgOAAgTQAAgRADgPQADgOAHgKQAGgJALgFQALgFAPAAQARgBALAFQALAFAGAKQAHAJADAPQACAOAAASQAAATgDAOQgDAPgGAJQgHAKgLAEQgLAFgQAAIgCAAQgPAAgKgEgAgKguQgEAEgCAGQgCAHAAAKIgBATIABAVQAAAKACAGQACAHAEAEQAEADAGAAQALAAAFgMQAEgMAAgbQAAgagEgMQgFgMgLAAQgGAAgEAEg");
	this.shape_18.setTransform(-233.825,-68.9498);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgCBcQgHgBgEgEQgEgFAAgIQgCgGAAgMIAAhSIgTAAIAAgaIATAAIAAgpIAkAAIAAApIAWAAIAAAaIgWAAIAABOQAAAJADADQADAEAHAAIAFAAIAEgBIAAAaIgMABIgMAAQgLAAgGgCg");
	this.shape_19.setTransform(-243.95,-70.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgsBBQgKgJAAgWIAAhrIAlAAIAABjQAAAMAEAEQADAEAJAAQATAAAAgYIAAhfIAlAAIAACQIgjAAIAAgRIgBAAQgGALgKAFQgIAEgMAAQgSAAgJgJg");
	this.shape_20.setTransform(-254.5,-68.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAiBgIgJgoIgyAAIgJAoIgoAAIAzi/IAvAAIAzC/gAATAYIgThWIAAAAIgSBWIAlAAg");
	this.shape_21.setTransform(-268.5,-71.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_digitize, new cjs.Rectangle(-314,-89.6,309,35.89999999999999), null);


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
	this.shape.graphics.f("#353535").s().p("AgRAVIAAgpIAjAAIAAApg");
	this.shape.setTransform(-33.825,-65.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgZBJQgLgDgGgGQgGgGgCgJQgDgIAAgLIAAgEIAiAAIAAAEQAAAKAFAGQAFAFAJAAQAIABAFgFQAFgEAAgJQAAgHgEgEQgEgDgFgCIgZgKQgQgFgIgJQgHgKAAgQQAAgIADgIQACgIAHgGQAGgGALgDQAKgEANAAQAZAAAMAKQANALAAAVIAAAFIgiAAQAAgLgDgFQgEgGgJAAQgGAAgFAFQgGADAAAIQAAAGAEAEQADAEAJADIAWAIQARAFAIAJQAHAJAAARQAAAMgEAIQgEAJgHAFQgIAGgJADQgKACgMAAQgPAAgKgDg");
	this.shape_1.setTransform(-42.775,-70.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgCBdQgHgCgDgFQgFgEgBgHQgBgIAAgLIAAhSIgTAAIAAgZIATAAIAAgqIAkAAIAAAqIAWAAIAAAZIgWAAIAABNQAAAKADADQACADAJAAIAEAAIAEAAIAAAaIgMABIgMAAQgLAAgGgBg");
	this.shape_2.setTransform(-52.4,-72.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("Ag4BiIAAi/IAkAAIAAAPIAAAAQAHgKAHgEQAHgFALAAQAXAAALASQALASAAApQAAAngLASQgLARgXAAQgKAAgHgEQgHgEgGgIIgBAAIAAA8gAgPg4QgEAMAAAYQAAAWAEAMQAEAMALAAQAMAAAEgMQAEgMAAgWQAAgYgEgMQgEgMgMAAQgLAAgEAMg");
	this.shape_3.setTransform(-62.775,-68.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShBIAAgfIAlAAIAAAfg");
	this.shape_4.setTransform(-72.675,-72.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgKgCgOIgBgbQAAgPADgNQACgOAFgKQAHgKALgHQALgGATAAQAPAAALAFQALAGAFAJQAGAKACANQADAOAAAQIAAAIIhJAAIAAAMIABAMIADALQACAEAEADQADADAEAAQAJAAAFgGQAEgHACgOIAhAAQgBAagMANQgMANgbAAQgUAAgLgHgAgHgvQgEADgCADIgDAKIgBAKIAAAGIAlAAIgBgPQgBgGgCgFQgCgEgDgDQgEgCgGAAQgFABgDACg");
	this.shape_5.setTransform(-81.9,-70.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgXBJQgLgEgGgJQgIgIgDgPQgDgPgBgVQABgWAEgPQAEgOAIgKQAIgIAKgDQAMgEAMAAQAaAAAMAPQAOAPAAAaIgkAAIgBgLIgDgJQgBgEgDgCQgEgDgFAAQgGAAgEADQgEADgCAGQgCAGgCAJIAAAWIAAAWQACALACAFQABAHAEACQAFADAFAAQAJAAAEgHQAFgJAAgRIAkAAQAAAcgOAPQgMAPgeAAQgNAAgKgDg");
	this.shape_6.setTransform(-94.15,-70.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgKgCgOIgBgbQAAgPACgNQACgOAGgKQAHgKALgHQAMgGASAAQAPAAALAFQAKAGAGAJQAGAKACANQACAOAAAQIAAAIIhIAAIAAAMIAAAMIAEALQACAEADADQAEADAEAAQAJAAAFgGQAEgHACgOIAhAAQgBAagMANQgNANgbAAQgSAAgMgHgAgIgvQgDADgCADIgEAKIAAAKIAAAGIAlAAIgCgPQAAgGgCgFQgCgEgEgDQgEgCgFAAQgFABgEACg");
	this.shape_7.setTransform(-106.4,-70.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AglBKIAAiQIAjAAIAAATIABAAQAFgKAIgGQAIgGALAAIAEAAIADAAIAAAkIgGAAIgFgBIgKACQgFABgEADQgEADgDAFQgBAFAAAHIAABWg");
	this.shape_8.setTransform(-116.275,-70.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgKgBgOIgCgbQABgPACgNQABgOAHgKQAFgKAMgHQALgGATAAQAQAAAKAFQALAGAFAJQAGAKADANQACAOAAAQIAAAIIhJAAIAAAMIABAMIADALQACAEAEADQADADAEAAQAJAAAFgGQAEgHACgOIAiAAQgCAagMANQgMANgbAAQgTAAgMgHgAgHgvQgEADgCADIgDAKIgBAKIAAAGIAlAAIgBgPQgBgGgCgFQgCgEgDgDQgFgCgFAAQgFABgDACg");
	this.shape_9.setTransform(-133.55,-70.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgyBJIAAgdIA5hVIg2AAIAAgfIBiAAIAAAdIg5BWIA5AAIAAAeg");
	this.shape_10.setTransform(-145.3,-70.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgSBhIAAiQIAlAAIAACQgAgShBIAAgfIAlAAIAAAfg");
	this.shape_11.setTransform(-154.025,-72.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AglBKIAAiQIAjAAIAAATIABAAQAFgKAIgGQAIgGALAAIAEAAIADAAIAAAkIgGAAIgFgBIgKACQgFABgEADQgEADgDAFQgBAFAAAHIAABWg");
	this.shape_12.setTransform(-160.875,-70.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgbBIQgLgEgGgLQgHgJgCgPQgDgOAAgTQAAgRADgPQADgOAHgKQAGgJALgFQALgFAPAAQARgBALAFQALAFAGAKQAHAJADAPQACAOAAASQAAATgDAOQgDAOgGAKQgHAKgLAFQgLAEgQAAIgCAAQgPAAgKgEgAgKguQgEAEgCAHQgCAGAAAKIgBATIABAVQAAAJACAHQACAHAEADQAEAEAGAAQALAAAFgMQAEgMAAgbQAAgagEgMQgFgMgLAAQgGAAgEAEg");
	this.shape_13.setTransform(-172.175,-70.4498);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgpBZQgMgKAAgTIAjAAQABAHAFAEIAGADIAGABQALAAAFgHQAEgHAAgLIAAgTIgBAAQgFAHgIAFQgIAFgIABQgXAAgLgRQgLgRAAgnIABgaQACgNAFgLQAFgKAIgIQAKgGAPAAQAHAAAIAEQAIAFAFALIABAAIAAgQIAkAAIAACIQAAAdgOAOQgOAOgfAAQgZAAgNgKgAgJhCQgDACgDAGQgBAGgBALIgBAYIABAOQABAGABAFQACAGAEACQAEAEAFAAQAGAAADgEQAEgDADgFQACgFABgHIABgRQAAgagEgLQgEgMgMAAQgEABgFADg");
	this.shape_14.setTransform(-185.35,-68.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgeBFQgLgHgGgLQgFgKgBgOIgCgbQABgPACgNQABgOAHgKQAFgKAMgHQALgGATAAQAQAAAKAFQALAGAFAJQAGAKADANQACAOAAAQIAAAIIhJAAIAAAMIABAMIADALQACAEAEADQADADAEAAQAJAAAFgGQAEgHACgOIAiAAQgCAagMANQgMANgbAAQgTAAgMgHgAgHgvQgEADgCADIgDAKIgBAKIAAAGIAlAAIgBgPQgBgGgCgFQgCgEgDgDQgFgCgFAAQgFABgDACg");
	this.shape_15.setTransform(-197.9,-70.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgCBdQgHgCgEgFQgDgEgBgHQgCgIAAgLIAAhSIgTAAIAAgZIATAAIAAgqIAkAAIAAAqIAWAAIAAAZIgWAAIAABNQAAAKADADQADADAHAAIAFAAIAEAAIAAAaIgMABIgNAAQgKAAgGgBg");
	this.shape_16.setTransform(-207.8,-72.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AglBJQgGgEgFgGQgDgGgCgHQgDgHAAgIQAAgKADgHQACgIAEgFQAFgFAHgDQAHgDAJgDIAVgGQAHgCAEgEQADgDAAgIQAAgIgEgFQgDgEgJgBQgJAAgEAGQgFAEABAJIAAAFIgiAAIAAgFQAAgMAEgIQAFgJAGgFQAHgGAJgBQAJgDALAAQAQAAAKADQAKADAGAHQAGAGACAHQACAJAAAJIAABMIABAQIAEAMIgkAAIgDgIIgCgHIgBAAQgGALgIAEQgIADgOAAQgJAAgHgDgAAIAFIgIADQgKACgFAGQgFAFAAAKQAAAIAEAHQADAFAHAAIAHgBQAEgBAEgDQADgDACgEQACgEAAgGIAAgcg");
	this.shape_17.setTransform(-218.15,-70.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgYBJQgKgEgHgJQgGgIgEgPQgEgPABgVQgBgWAFgPQAEgOAIgKQAIgIALgDQAKgEAMAAQAbAAANAPQANAPgBAaIgjAAIgBgLIgCgJQgCgEgEgCQgDgDgFAAQgFAAgFADQgFADgCAGQgCAGAAAJIgBAWIABAWQAAALACAFQADAHAEACQAEADAEAAQAKAAAFgHQAEgJAAgRIAjAAQABAcgNAPQgNAPgeAAQgNAAgLgDg");
	this.shape_18.setTransform(-230.55,-70.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgtBQQgLgRAAgpQAAgnALgSQALgSAXAAQAKAAAHAEQAHAEAGAJIABAAIAAg9IAlAAIAADAIgkAAIAAgQIAAAAQgHALgHAEQgHAEgLAAQgXAAgLgSgAgPgNQgEAMAAAXQAAAYAEAMQAEAMALAAQAMAAAEgMQAEgMAAgYQAAgXgEgMQgEgMgMAAQgLAAgEAMg");
	this.shape_19.setTransform(-249.675,-72.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AASBKIAAhjQAAgLgEgFQgEgEgIAAQgTAAAAAYIAABfIglAAIAAiQIAkAAIAAARIAAAAQAGgKAKgGQAIgEAMAAQASAAAJAJQAKAKAAAWIAABqg");
	this.shape_20.setTransform(-262.75,-70.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAiBgIgJgoIgxAAIgJAoIgpAAIAzi/IAvAAIAzC/gAATAYIgShWIgBAAIgSBWIAlAAg");
	this.shape_21.setTransform(-276.75,-72.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_categorize, new cjs.Rectangle(-312,-91.1,309,35.89999999999999), null);


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
	this.instance.setTransform(-92,-291.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_endFrame_1, new cjs.Rectangle(-92,-291.1,92,260), null);


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
	this.instance.setTransform(-211.4,-116.95,0.7797,0.7797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_endFrame, new cjs.Rectangle(-211.4,-116.9,156,133.3), null);


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
	this.instance.setTransform(-300,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_05, new cjs.Rectangle(-300,-119,300,171), null);


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
	this.instance.setTransform(-320,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_04, new cjs.Rectangle(-320,-119,300,171), null);


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
	this.instance.setTransform(-312,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03, new cjs.Rectangle(-312,-119,300,171), null);


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
	this.instance.setTransform(-309,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02, new cjs.Rectangle(-309,-119,300,171), null);


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
	this.instance.setTransform(-317.25,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01, new cjs.Rectangle(-317.2,-120.2,300,171), null);


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
	mask.graphics.p("AlWBaIAAizIKtAAIAACzg");
	mask.setTransform(-101.275,-3.75);

	// Layer_1
	this.instance = new lib.epson_logo();
	this.instance.setTransform(-133.7,-11.2,0.5376,0.5376);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo_1, new cjs.Rectangle(-133.7,-11.2,66.69999999999999,16.5), null);


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
	this.instance.setTransform(-315,-119.5);

	this.instance_1 = new lib.printerScreen();
	this.instance_1.setTransform(-314,-111.85,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.computer_screen, new cjs.Rectangle(-315,-119.5,300,171), null);


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

	// receipt_04
	this.instance = new lib.receipt_04();
	this.instance.setTransform(16.1,104.25,1,1,-14.4932,0,0,-75,164.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.7461,x:-111.9,y:162.2},7,cjs.Ease.quadInOut).wait(40).to({rotation:-7.7453},0).to({rotation:-14.4926,x:16.1,y:104.25},7,cjs.Ease.quadInOut).wait(1));

	// receipt_01
	this.instance_1 = new lib.receipt_01();
	this.instance_1.setTransform(-492.15,252.15,1,1,-8.1966,0,0,-70.6,178.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:-70.5,rotation:-0.9959,x:-310.05,y:244.15},7,cjs.Ease.quadInOut).wait(38).to({rotation:-0.9959},0).to({regX:-70.6,rotation:-8.1966,x:-492.15,y:252.15},7,cjs.Ease.quadInOut).wait(1));

	// receipt_03
	this.instance_2 = new lib.receipt_03();
	this.instance_2.setTransform(-502.3,510.15,1.1847,1.1847,8.2111,0,0,-103.2,79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:-103,scaleX:1,scaleY:1,rotation:8.2113,x:-288.05,y:472.15},7,cjs.Ease.quadInOut).wait(39).to({regX:-103.2,scaleX:1.1847,scaleY:1.1847,rotation:8.2111,x:-502.3,y:510.15},7,cjs.Ease.quadInOut).wait(1));

	// receipt_04
	this.instance_3 = new lib.receipt_04();
	this.instance_3.setTransform(87.95,544.3,1.06,1.06,18.7007,0,0,-75,164.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:164.6,scaleX:1,scaleY:1,rotation:-2.7506,x:-99.95,y:416.2},7,cjs.Ease.quadInOut).wait(40).to({rotation:-2.7506},0).to({regY:164.7,scaleX:1.0599,scaleY:1.0599,rotation:18.701,x:87.95,y:544.3},7,cjs.Ease.quadInOut).wait(1));

	// receipt_03
	this.instance_4 = new lib.receipt_03();
	this.instance_4.setTransform(-366.05,-94,1.2136,1.2136,0,0,0,-103,79);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:-294,y:156.05},7,cjs.Ease.quadInOut).wait(38).to({scaleX:1.2136,scaleY:1.2136,x:-366.05,y:-94},7,cjs.Ease.quadInOut).wait(1));

	// receipt_02
	this.instance_5 = new lib.receipt_02();
	this.instance_5.setTransform(50,318.1,1,1,31.9376,0,0,-96,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-138.05,y:246.05},7,cjs.Ease.quadInOut).wait(40).to({x:50,y:318.1},7,cjs.Ease.quadInOut).wait(1));

	// receipt_01
	this.instance_6 = new lib.receipt_01();
	this.instance_6.setTransform(-466.05,632.25,1.2766,1.2766,-17.4846,0,0,-70.5,178.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({regY:178.5,scaleX:1,scaleY:1,rotation:-17.4844,x:-280.05,y:560.15},7,cjs.Ease.quadInOut).wait(37).to({regY:178.6,scaleX:1.2766,scaleY:1.2766,rotation:-17.4846,x:-466.05,y:632.25},7,cjs.Ease.quadInOut).wait(1));

	// receipt_01
	this.instance_7 = new lib.receipt_01();
	this.instance_7.setTransform(-174.15,846.4,1.2409,1.2409,-23.6894,0,0,-70.7,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-70.6,regY:178.6,scaleX:0.9999,scaleY:0.9999,rotation:-23.6896,x:-204.05,y:498.2},7,cjs.Ease.quadInOut).wait(40).to({regX:-70.7,regY:178.7,scaleX:1.2409,scaleY:1.2409,rotation:-23.6894,x:-174.15,y:846.4},7,cjs.Ease.quadInOut).wait(1));

	// receipt_04
	this.instance_8 = new lib.receipt_04();
	this.instance_8.setTransform(-482.2,522.4,1,1,-6.9433,0,0,-75.2,164.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({regX:-75.1,rotation:8.749,x:-348.05,y:494.4},7,cjs.Ease.quadInOut).wait(39).to({rotation:8.749},0).to({regX:-75.2,rotation:-6.9433,x:-482.2,y:522.4},7,cjs.Ease.quadInOut).wait(1));

	// receipt_04
	this.instance_9 = new lib.receipt_04();
	this.instance_9.setTransform(-496.1,178.4,1,1,23.1809,0,0,-75,164.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-75.1,regY:164.6,rotation:13.487,x:-374.1,y:248.25},7,cjs.Ease.quadInOut).wait(40).to({regX:-75,regY:164.7,rotation:23.1809,x:-496.1,y:178.4},7,cjs.Ease.quadInOut).wait(1));

	// receipt_01
	this.instance_10 = new lib.receipt_01();
	this.instance_10.setTransform(-332.15,-121.95,0.9999,0.9999,43.1994,0,0,-70.6,178.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:-70.5,scaleX:1,scaleY:1,rotation:-0.9959,x:-230.05,y:272.15},7,cjs.Ease.quadInOut).wait(40).to({rotation:-0.9959},0).to({regX:-70.6,scaleX:0.9999,scaleY:0.9999,rotation:43.1994,x:-332.15,y:-121.95},7,cjs.Ease.quadInOut).wait(1));

	// receipt_05
	this.instance_11 = new lib.receipt_05();
	this.instance_11.setTransform(-2,246.1,1,1,0,0,0,-66,116.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({x:-156,y:358.1},7,cjs.Ease.quadInOut).wait(39).to({x:-2,y:246.1},7,cjs.Ease.quadInOut).wait(1));

	// receipt_05
	this.instance_12 = new lib.receipt_05();
	this.instance_12.setTransform(-44.05,698.25,1.1269,1.1269,49.1861,0,0,-65.9,116.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({regX:-66,scaleX:1,scaleY:1,rotation:0,x:-88,y:562.15},7,cjs.Ease.quadInOut).wait(39).to({regX:-65.9,scaleX:1.1269,scaleY:1.1269,rotation:49.1861,x:-44.05,y:698.25},7,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-636.2,-300.3,855.4000000000001,1384.3999999999999);


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
	mask.setTransform(-126.5,260.45);

	// Layer_4
	this.instance = new lib.receipt_noShdw();
	this.instance.setTransform(-169.1,73,1,1,5.7256,0,0,-44.6,112.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-170.1,y:149},24,cjs.Ease.quadInOut).wait(7));

	// Layer_3
	this.instance_1 = new lib.receipt_noShdw();
	this.instance_1.setTransform(-129,83,1,1,0,0,0,-44.5,112.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-130,y:159},24,cjs.Ease.quadInOut).wait(7));

	// Layer_6
	this.instance_2 = new lib.receipt_noShdw();
	this.instance_2.setTransform(-73.05,61.1,1,1,-2.7358,0,0,-44.6,112.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-74.05,y:137.1},24,cjs.Ease.quadInOut).wait(7));

	// Layer_5
	this.instance_3 = new lib.receipt_noShdw();
	this.instance_3.setTransform(-104.1,70,1,1,-0.2649,0,0,-44.6,112.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-105.1,y:146},24,cjs.Ease.quadInOut).wait(7));

	// Layer_1
	this.instance_4 = new lib.receiptPrinter_01();
	this.instance_4.setTransform(-262,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-66,270,341);


// stage content:
(lib.Epson_rapidReceipt_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo_1();
	this.instance.setTransform(80,41.05,1,1,0,0,0,-62,21);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(351));

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
	var mask_graphics_350 = new cjs.Graphics().p("Am4CXQgjAAAAgjIAAAAIAAjnQAAgjAjAAIAAAAINxAAQAjAAAAAjIAAAAIAADnQAAAjgjAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_graphics_350,x:115.5145,y:223.6149}).wait(10));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_1.setTransform(48.525,207.95);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_2.setTransform(51.775,208.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUZg");
	this.shape_3.setTransform(179.525,249);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},350).to({state:[{t:this.shape_2,p:{x:51.775,y:208.95}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:77.625,y:217.05}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:127.775,y:232.8}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:166.575,y:244.95}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(350).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:61.475,y:212},0).to({_off:true},1).wait(1).to({_off:false,x:100.275,y:224.15},0).to({_off:true},1).wait(1).to({_off:false,x:150.425,y:239.9},0).to({_off:true},1).wait(1).to({_off:false,x:176.275,y:248},0).to({_off:true},1).wait(1));

	// ctaBtn
	this.instance_3 = new lib.ctaBtn();
	this.instance_3.setTransform(116.15,224.25,0.5863,0.5863,0,0,0,1.1,1.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(352).to({_off:false},0).to({alpha:1},7).wait(1));

	// printer_endFrame
	this.instance_4 = new lib.printer_endFrame();
	this.instance_4.setTransform(142.9,211.15,0.7625,0.7625,0,0,0,-100,85.5);
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
	this.instance_14.setTransform(305.1,137.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(144).to({_off:false},0).to({y:127.6,alpha:1},5,cjs.Ease.quadOut).wait(28).to({regX:-154.6,regY:17.9,x:150.5,y:145.5},0).to({y:117.5,alpha:0},7,cjs.Ease.quadOut).to({_off:true},1).wait(175));

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
	this.instance_17 = new lib.printer_01("synched",0,false);
	this.instance_17.setTransform(373,217.05,0.5862,0.5862,0,0,0,-134.7,170.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({x:141},7,cjs.Ease.quadOut).wait(35).to({mode:"single",startPosition:28},0).to({alpha:0,startPosition:30},6).to({_off:true},1).wait(215));

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
	this.instance_20.setTransform(163.55,131.35,1,1,0,0,0,-214.3,349.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},61).wait(299));

	// image_01
	this.instance_21 = new lib.image_01();
	this.instance_21.setTransform(157,311.05,1,1,0,0,0,-160,112);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(48).to({_off:false},0).wait(41).to({alpha:0},6).to({_off:true},1).wait(264));

	// background_color
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-108.4,-393.3,705.5,1259.3);
// library properties:
lib.properties = {
	id: '8E5913087FB946AB926391FBB5EDFA33',
	width: 300,
	height: 250,
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