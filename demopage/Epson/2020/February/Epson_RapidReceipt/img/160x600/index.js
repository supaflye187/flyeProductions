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
p.nominalBounds = new cjs.Rectangle(0,0,320,172);


(lib.receiptImage_03 = function() {
	this.initialize(img.receiptImage_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,224);


(lib.receiptImage_04 = function() {
	this.initialize(img.receiptImage_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,224);


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
p.nominalBounds = new cjs.Rectangle(0,0,301,224);


(lib.shaq_image_02 = function() {
	this.initialize(img.shaq_image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,224);


(lib.shaq_image_03 = function() {
	this.initialize(img.shaq_image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,224);// helper functions:

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
	this.shape.setTransform(-201.3595,172.88,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cake, new cjs.Rectangle(-309,0,309,194.8), null);


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
	this.shape.setTransform(-189.475,-25.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AFiBUQgJgCgFgFQgGgGgBgHQgDgHAAgJIAAgFIAeAAIAAAFQgBAIAFAEQAEAGAJAAQAIAAAEgEQAFgDgBgJQABgFgEgEQgEgDgFgCIgWgIQgOgFgHgJQgHgIAAgNQABgHADgHQABgHAHgFQAFgGAJgDQAJgDANAAQAVAAALAKQALAJAAASIAAAEIgeAAQAAgKgCgEQgEgEgIgBQgGABgFADQgEADAAAHQAAAFADAEQACADAJACIAUAGQAPAGAGAIQAHAIAAAPQgBAKgDAHQgDAJgHAEQgGAFgIACQgJACgLAAQgNAAgKgDgACpBRQgKgGgEgJQgFgKgCgMIgBgYQAAgNACgLQACgLAFgJQAFgKALgGQAKgFARAAQAOAAAIAEQAKAFAFAJQAFAIACAMQACALAAAPIAAAHIhAAAIAAAVIADAKQACADADADQADADAEAAQAIAAAFgHQADgFACgNIAdAAQgBAXgLALQgKAMgZAAQgRABgKgHgAC9gVIgFAHIgDAIIAAAMIAhAAIgCgMIgCgIQgBgEgEgDQgDgBgFgBQgFAAgDACgAiyBUQgGgDgDgFQgEgFgCgGQgBgHAAgHQgBgIADgHQABgHAFgEQAEgFAFgDQAGgDAJgCIATgGQAGgBAEgDQACgCAAgHQAAgHgDgEQgDgFgJAAQgHABgEAEQgEAEAAAIIAAADIgeAAIAAgDQAAgLAEgHQAEgIAGgEQAGgFAIgBQAIgDAJAAQAPAAAJADQAJADAFAFQAFAGACAGQABAIAAAIIACBQIADAKIggAAIgEgMIAAAAQgGAJgIADQgHADgMAAQgIAAgGgDgAiKAZIgHADQgJABgFAGQgFAEAAAJQAAAHAEAFQACAGAHAAIAHgBQADgCADgCQADgCADgDQABgEAAgGIAAgZgAkTBUQgJgDgGgHQgGgIgDgNQgDgNAAgTQAAgUAEgMQADgMAIgJQAHgHAIgDQAKgDAMAAQAXAAAKANQAMANAAAWIgfAAIgBgIIgCgIQgBgEgEgCQgCgCgFAAQgFAAgEADQgEACgCAFQgCAGgBAHIAAAnQABAJACAGQACAEADADQAEADAFAAQAIAAAEgHQAEgIAAgPIAfAAQAAAZgMANQgKANgbAAQgMAAgJgDgAmbBKQgNgLAAgYIAAgHIAiAAIABAQQABAEADAEQACADAFACQAEACAHAAQAIAAAGgFQAGgGAAgKIgBgKQgCgEgEgEIgJgFIgOgGQgMgEgIgEQgIgFgFgFQgGgFgDgIQgCgIAAgLQAAgZANgMQAOgNAaAAQAKABAKACQAJACAIAGQAHAGAEAIQADAJAAALIAAAGIggAAQAAgNgFgGQgEgGgKAAQgGgBgDACQgEACgCACQgDADAAADIgBAIQAAAIAEAFQADAGAKAEIAaAMQALADAFAFQAHAEADAFQAEAGACAGIABAOQgBAbgPAMQgPAMgcAAQgcAAgNgNgAEEBUIAAh+IAfAAIAAASIAAAAQAFgKAHgFQAHgGAKAAIAEAAIADABIAAAeIgKAAIgJABIgIAFQgEACgCAEQgCAEAAAGIAABMgABlBUIAAhWQgBgKgDgEQgDgEgIAAQgRAAAAAUIAABUIggAAIAAh+IAeAAIAAAPIABAAQAFgJAJgFQAIgEALAAQAPAAAIAJQAIAIAAAUIAABcgAgPBUIAAhWQAAgKgEgEQgDgEgHAAQgSAAAAAUIAABUIgfAAIAAh+IAeAAIAAAPIABAAQAFgJAJgFQAIgEAKAAQAPAAAJAJQAHAIAAAUIAABcg");
	this.shape_1.setTransform(-188,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RRScanners, new cjs.Rectangle(-249.8,-35.7,120.70000000000002,47.400000000000006), null);


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
	this.shape.graphics.f("#25317E").s().p("AGkBoIAAikIAfAAIAAANIAAAAQAGgIAHgEQAGgEALAAQATAAAJAPQAKAQAAAiQAAAjgKAOQgJAQgTAAQgKAAgGgEQgGgEgGgHIAAAAIAAA0gAHIgcQgDAKAAAUQAAAUADAKQADAKALAAQALAAACgKQAEgKgBgUQABgUgEgKQgCgLgLAAQgLAAgDALgAlkBoIAAikIAeAAIAAANIABAAQAFgIAHgEQAGgEAKAAQAUAAAJAPQAKAQgBAiQABAjgKAOQgJAQgUAAQgIAAgHgEQgGgEgGgHIAAAAIAAA0gAlBgcQgDAKAAAUQAAAUADAKQADAKALAAQAKAAAEgKQADgKAAgUQAAgUgDgKQgEgLgKAAQgLAAgDALgAEWA8QgJgFgFgKQgEgJgCgMIAAgYQgBgLACgMQACgLAFgKQAFgJAKgFQAKgFAQAAQAOAAAJAEQAJAFAFAIQAFAIACAMQACAMAAAOIAAAGIhAAAIABAVIADAKQABADADADQAEACAEAAQAIAAAEgGQADgFACgMIAdAAQgBAWgLALQgLAMgXAAQgQAAgLgHgAEpgnIgEAFIgDAJIgBANIAhAAIgBgMIgCgKIgFgGQgEgBgEAAQgFAAgEACgACzA/QgJgDgGgHQgGgIgDgMQgDgNAAgSQAAgTAEgNQADgMAHgIQAHgHAJgDQAKgDALAAQAWAAALANQAMANAAAWIgfAAIgDgRQgCgEgCgCQgDgCgFAAQgFAAgEADQgEACgCAFQgBAGgBAIIAAAlQABAJABAFQACAFAEADQADACAFAAQAJAAADgHQAEgHAAgPIAfAAQAAAZgMANQgLANgZAAQgMAAgJgEgABEA8QgKgFgFgKQgEgJgBgMIgCgYQABgLACgMQABgLAFgKQAFgJAKgFQAKgFAQAAQAOAAAJAEQAJAFAFAIQAFAIACAMQACAMAAAOIAAAGIg/AAIAAAVIADAKQACADADADQADACAFAAQAHAAAEgGQAEgFACgMIAcAAQgBAWgKALQgLAMgXAAQgRAAgKgHgABXgnIgFAFIgDAJIAAANIAhAAIgCgMIgCgKIgEgGQgEgBgEAAQgGAAgDACgAi2AzQgJgOAAgjQAAgiAJgQQAJgPATAAQAKAAAGADQAGAEAGAIIAAAAIAAg1IAgAAIAAClIgfAAIAAgOIAAAAQgGAJgGAEQgGAEgLAAQgTAAgJgQgAicgcQgEAKAAAUQAAAUAEAKQADAKAKAAQALAAADgKQADgKAAgUQAAgUgDgKQgDgLgLAAQgKAAgDALgAnFA/QgGgDgDgFQgEgFgCgGIgCgNQAAgIACgHQACgGAFgEQAEgFAFgDIAPgEIASgGQAGgBAEgEQACgDAAgGQAAgHgDgEQgEgEgIAAQgHAAgEAEQgEAEABAIIAAADIgeAAIAAgDQAAgLAEgHQAEgHAFgFQAGgEAIgCQAIgCAJAAQAPAAAJACQAJADAEAFQAGAGABAGQACAIAAAIIABBPIADAKIgfAAIgEgNIAAAAQgHAJgHADQgGAEgNAAQgHAAgGgEgAmeAGIgHABQgJADgFAFQgEAEAAAJQAAAHADAFQACAFAIAAIAGgBQADgBADgCIAFgGQACgEAAgFIAAgYgAIsA/QgGgBgDgEQgDgEgBgGQgCgGAAgKIAAhGIgQAAIAAgWIAQAAIAAgkIAgAAIAAAkIATAAIAAAWIgTAAIAABCQAAAIADADQACADAHAAIAEAAIADgBIAAAXIgUABQgKAAgGgCgAFwBAIAAh8IAhAAIAAB8gAABBAQgBgEgBgEIgCgpQAAgKgFgFQgEgFgKAAIgSAAIAABFIgiAAIAAilIA+AAQAUAAALALQAMAKAAAWQAAARgHAKQgHALgNADIAAAAQAMACAGAGQAGAGABANIADArQABAHAEADIAAABgAgogcIANAAQANAAAGgGQAHgGgBgOQAAgWgXAAIgPAAgAjxBAIAAh8IAgAAIAAB8gAoDBAQgDgEAAgEIgCgpQAAgKgFgFQgFgFgKAAIgSAAIAABFIgiAAIAAilIA+AAQAVAAAMALQALAKAAAWQAAARgGAKQgHALgOADIAAAAQANACAFAGQAHAGAAANIADArQACAHAEADIAAABgAougcIAOAAQAMAAAHgGQAGgGAAgOQAAgWgXAAIgQAAgAFwhMIAAgbIAhAAIAAAbgAjxhMIAAgbIAgAAIAAAbg");
	this.shape.setTransform(-185.6,-19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AFcBTQgJgDgFgFQgGgFgCgHQgCgHAAgJIAAgEIAdAAIAAAEQAAAIAFAEQAEAGAIAAQAIgBAEgDQAEgEAAgIQAAgFgDgEIgIgEIgXgJQgNgEgHgJQgGgIAAgNQAAgHACgHQACgHAGgFQAFgFAJgDQAJgDAMAAQAWAAAKAJQALAKAAARIAAAEIgdAAQAAgJgDgEQgDgFgIAAQgGAAgEAEQgFACAAAIQAAAEADAEQADACAIADIATAGQAPAFAGAJQAHAIAAAOQAAAKgEAIQgDAHgGAFQgHAEgIACQgJADgKAAQgNAAgJgDgACmBQQgJgGgFgJQgFgKgBgMIgBgXQAAgNACgLQABgLAFgKQAGgJAKgFQAKgFAQAAQAOAAAJAEQAJAFAEAJQAFAHADAMQABALAAAOIAAAIIg/AAIABAVIACAJIAFAGQADACAEABQAJAAAEgHQADgFACgMIAdAAQgCAWgKALQgLAMgXAAQgRAAgKgGgAC5gUIgFAFIgCAJIgBANIAhAAIgBgMQgBgGgCgEQgBgDgEgDQgDgBgFAAQgFAAgDACgAivBTQgGgEgDgFIgFgKQgCgHAAgHQAAgIACgGQACgHAEgEQAEgFAFgDIAPgFIASgFQAHgCADgDQACgCAAgHQAAgHgDgEQgDgEgIAAQgIAAgDAFQgEADAAAIIAAADIgdAAIAAgDQAAgLADgHQAEgHAGgEQAGgFAIgCQAIgCAJAAQAOAAAJACQAJAEAFAFQAFAFABAGQACAIAAAIIABBPIADAKIgeAAIgFgNIAAAAQgGAKgHADQgHADgMAAQgIAAgGgDgAiHAZIgIACQgJACgEAFQgFAEAAAJQAAAHAEAFQACAGAHAAIAGgBIAHgEIAFgFQABgEAAgFIAAgZgAkOBTQgJgEgGgGQgGgJgDgMQgDgNAAgSQAAgUAEgLQADgNAHgIQAHgHAJgDQAKgDALAAQAWAAALANQAMANAAAVIgfAAIgDgQQgBgDgDgCQgDgDgFAAQgFAAgEADQgEACgBAGQgCAFgBAHIAAAmQABAJACAGQABAEADADQAEACAFABQAJAAADgIQAEgGAAgPIAfAAQAAAYgMANQgKANgaAAQgMAAgJgDgAmUBJQgMgMAAgXIAAgHIAhAAIABAQQABAEADAEIAHAFQAEACAGAAQAIAAAGgFQAGgGAAgKIgBgKQgCgDgDgDQgEgEgFgCIgOgGQgMgEgHgEQgIgEgGgGQgGgFgCgIQgDgIAAgKQAAgZAOgMQAOgMAYAAQAKAAAKADQAKACAGAFQAHAGAEAIQAEAIAAAMIAAAFIggAAQAAgLgEgHQgFgGgKAAQgFgBgDACIgGAFQgDACAAAEIgBAHQAAAHADAGQADAFALAFIAaALQAJAEAGAEQAGAEAEAFQADAGACAFQABAHAAAIQAAAagPALQgPANgbAAQgdAAgMgNgAD/BTIAAh8IAeAAIAAAQIABAAQAFgJAHgFQAHgFAKAAIADAAIADABIAAAeIgKgBIgJABQgEACgDADIgGAHQgCADAAAGIAABLgABiBTIAAhVQAAgKgDgEQgDgDgHAAQgSAAAAATIAABTIggAAIAAh8IAfAAIAAAPIAAAAQAGgJAIgFQAIgEAKAAQAQAAAIAIQAIAJAAATIAABbgAgPBTIAAhVQAAgKgDgEQgDgDgHAAQgSAAAAATIAABTIggAAIAAh8IAfAAIAAAPIAAAAQAGgJAIgFQAIgEAKAAQAPAAAIAIQAIAJAAATIAABbg");
	this.shape_1.setTransform(-183.575,8.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_RR_endFrame, new cjs.Rectangle(-244.8,-29.6,118.50000000000001,47.1), null);


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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-223.475,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_relief, new cjs.Rectangle(-378,-33,309,61.4), null);


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
	this.shape.graphics.f("#353535").s().p("AgRBSIAAgeIAeAAIAAAegAgPAlIAAgJQgBgLAEgIQADgIAIgIIAHgKQAGgEABgHQACgGAAgGQAAgKgDgFQgFgFgHAAQgIAAgEAHQgEAHABALIAAAGIgfAAIAAgGQAAgKADgJQADgIAGgGQAFgHAIgDQAKgDAKgBQAXABANALQAMANAAATQAAAKgEAIQgCAJgJAJIgJAJQgGAHgDAFQgCAGAAAJIAAADg");
	this.shape.setTransform(-150.3,-58.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgVA+QgJgDgFgFQgFgFgCgHQgCgHAAgJIAAgEIAcAAIAAAEQAAAIAEAFQAFAEAHAAQAHAAAEgDQAFgEgBgHQAAgGgDgDQgDgDgFgCIgVgIQgNgFgGgHQgIgIABgNQgBgIADgHQADgGAFgFQAFgFAJgEQAJgCALAAQAWAAAJAJQALAJAAARIAAAFIgdAAQAAgKgDgFQgDgEgHAAQgFAAgEADQgFAEAAAGQAAAFACAEQAEADAHADIATAGQAPAFAFAHQAHAIAAAOQAAAKgEAHQgDAIgGAEQgGAFgIACQgJACgKAAQgMAAgJgCg");
	this.shape_1.setTransform(-160.9,-56.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAMBPIgOgBQgFgBgDgEQgEgEgBgGIgBgPIAAhGIgQAAIAAgVIAQAAIAAgjIAfAAIAAAjIASAAIAAAVIgSAAIAABCQAAAHACADQACADAHAAIAEAAIADAAIAAAWIgKAAg");
	this.shape_2.setTransform(-169.275,-57.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgvBTIAAiiIAeAAIAAANQAGgIAHgEQAFgEAKAAQATAAAJAPQAJAPAAAjQAAAhgJAPQgJAPgTAAQgKAAgEgEQgHgDgFgHIAAAAIAAAzgAgMgwQgDALAAAUQAAATADAKQACAKAKAAQALAAADgKQADgKAAgTQAAgUgDgLQgDgKgLAAQgKAAgCAKg");
	this.shape_3.setTransform(-178.3,-54.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgPBSIAAh5IAfAAIAAB5gAgPg3IAAgbIAfAAIAAAbg");
	this.shape_4.setTransform(-186.875,-58.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgZA7QgKgGgFgKQgEgJgBgMIgBgWQAAgMACgMQABgLAGgJQAFgJAJgFQAKgFAPAAQAOAAAJAEQAIAEAFAJQAFAIACALQACAMAAAOIAAAGIg+AAIAAAKIABAKIADAKQACAEADACQADACADAAQAIAAAEgFQADgGACgMIAcAAQgBAWgKALQgLALgXAAQgQAAgJgFgAgGgoQgDACgCAEIgDAIIgBAIIAAAFIAgAAIgBgMIgDgJQgBgEgDgCQgEgCgFAAQgDAAgDACg");
	this.shape_5.setTransform(-194.9,-56.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgTA9QgKgCgFgIQgGgHgDgNQgDgMAAgTQAAgSADgMQAFgNAGgHQAHgHAIgEQAKgCAKAAQAWAAALAMQALANAAAWIgeAAIgBgJIgCgIQgCgDgCgCQgDgDgFAAQgEAAgEADQgEADgBAFQgCAFgBAIIgBARIABAUQABAIACAFQABAGAEACQADACAEAAQAJAAADgGQAEgHAAgPIAeAAQAAAYgLANQgLAMgZAAQgLAAgIgDg");
	this.shape_6.setTransform(-205.5,-56.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgZA7QgKgGgFgKQgEgJgBgMIgBgWQAAgMACgMQABgLAGgJQAFgJAJgFQAKgFAPAAQAOAAAJAEQAIAEAFAJQAFAIACALQACAMAAAOIAAAGIg+AAIAAAKIABAKIADAKQACAEADACQADACADAAQAIAAAEgFQADgGACgMIAcAAQgBAWgKALQgLALgXAAQgQAAgJgFgAgGgoQgDACgCAEIgDAIIgBAIIAAAFIAgAAIgBgMIgDgJQgBgEgDgCQgEgCgFAAQgDAAgDACg");
	this.shape_7.setTransform(-216.05,-56.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AggA/IAAh6IAfAAIAAAQQAEgJAHgFQAHgFAKAAIACAAIADAAIAAAeIgEAAIgGAAIgIABQgEABgDADQgEADgCAEQgBAEAAAGIAABJg");
	this.shape_8.setTransform(-224.7,-56.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgnBRIAAgXIAIAAQAJAAAEgEQADgFABgHIgjh6IAhAAIASBUIAAAAIAQhUIAgAAIgeBxQgEAQgEAJQgEAKgFAFQgEAFgHACQgHABgLAAg");
	this.shape_9.setTransform(-239.525,-54.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgEBPQgHgDgFgJIAAANIgfAAIAAiiIAgAAIAAA0IAAAAQAFgIAGgDQAFgEAKAAQATAAAJAPQAJAPAAAiQAAAigJAPQgJAPgTAAQgKAAgFgEgAgNgLQgCALAAATQAAAUACAKQADAKAKAAQALAAACgKQAEgKAAgUQAAgTgEgLQgCgKgLAAQgKAAgDAKg");
	this.shape_10.setTransform(-250.2,-58.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgmBEQgJgPAAgiQAAgiAJgPQAJgPAUAAQAIAAAGAEQAGADAFAIIAAg0IAgAAIAACiIgeAAIAAgNIgBAAQgFAJgGADQgGAEgJAAQgUAAgJgPgAgNgLQgDALAAATQAAAUADAKQAEAKAJAAQAKAAADgKQADgKAAgUQAAgTgDgLQgDgKgKAAQgJAAgEAKg");
	this.shape_11.setTransform(-144.325,-86.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgZA7QgKgGgEgKQgFgJgBgMIgBgWQAAgMABgMQACgLAGgJQAFgJAJgFQAKgFAPAAQANAAAKAEQAIAEAFAJQAFAIACALQACAMAAAOIAAAGIg+AAIAAAKIABAKIADAKQACAEADACQACACAEAAQAIAAAEgFQADgGACgMIAcAAQgBAWgKALQgLALgXAAQgQAAgJgFgAgGgoQgDACgCAEIgDAIIgBAIIAAAFIAgAAIgBgMIgCgJQgCgEgEgCQgDgCgFAAQgDAAgDACg");
	this.shape_12.setTransform(-155.2,-84.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AAtA/IAAhVQAAgIgDgEQgDgEgHAAQgHAAgFAFQgEAFAAALIAABQIgfAAIAAhVQAAgIgDgEQgDgEgGAAQgIAAgEAFQgFAFAAALIAABQIgfAAIAAh6IAeAAIAAANQAGgJAIgEQAHgDAKAAQALAAAHAFQAHAFADAJIAAAAQAEgJAIgGQAIgEALAAQAQAAAIAJQAHAKAAASIAABYg");
	this.shape_13.setTransform(-169.125,-84.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgPBRIAAiiIAfAAIAACig");
	this.shape_14.setTransform(-180.525,-86.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgZA7QgKgGgFgKQgEgJgBgMIgBgWQAAgMABgMQADgLAEgJQAGgJAKgFQAJgFAPAAQAOAAAIAEQAJAEAFAJQAFAIACALQACAMAAAOIAAAGIg9AAIAAAKIABAKIACAKQACAEADACQACACAEAAQAIAAAEgFQAEgGABgMIAcAAQgBAWgLALQgKALgWAAQgRAAgJgFgAgGgoQgDACgCAEIgCAIIgBAIIAAAFIAfAAIgBgMIgDgJQgBgEgEgCQgDgCgEAAQgEAAgDACg");
	this.shape_15.setTransform(-188.55,-84.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AAPBRIAAhTQAAgKgDgEQgDgDgIgBQgPAAAAAUIAABRIggAAIAAiiIAgAAIAAA1IAAAAQAJgQAUAAQAPABAIAHQAJAJAAASIAABag");
	this.shape_16.setTransform(-199.575,-86.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAQA9IgQhWIgOBWIglAAIgbh5IAfAAIAPBWIABAAIAPhWIAhAAIAQBWIABAAIAPhWIAeAAIgbB5g");
	this.shape_17.setTransform(-213.3,-84.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AggA/IAAh6IAfAAIAAAQQAEgJAHgFQAHgFAKAAIACAAIADABIAAAdIgEAAIgGAAIgIABQgEABgDADQgEACgCAEQgBAFAAAGIAABJg");
	this.shape_18.setTransform(-224.7,-84.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgZA7QgKgGgFgKQgEgJgBgMIgBgWQAAgMACgMQACgLAEgJQAFgJAKgFQAKgFAPAAQAOAAAIAEQAJAEAFAJQAFAIACALQACAMAAAOIAAAGIg+AAIAAAKIABAKIADAKQACAEADACQADACADAAQAIAAAEgFQAEgGABgMIAcAAQgBAWgLALQgKALgWAAQgQAAgKgFgAgGgoQgDACgCAEIgDAIIgBAIIAAAFIAgAAIgBgMIgDgJQgBgEgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_19.setTransform(-234.25,-84.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgRA9Iggh5IAhAAIARBWIAAAAIARhWIAgAAIgfB5g");
	this.shape_20.setTransform(-244.625,-84.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgdBOQgLgGgFgKQgGgMgCgPQgCgQAAgSQAAgSACgQQACgPAGgMQAFgLALgGQAMgHARAAQASAAAMAHQAKAGAHALQAFAMACAPQACAQAAASQAAASgCAQQgCAPgFAMQgHAKgKAGQgMAHgSgBQgRABgMgHgAgLg4QgEADgDAIQgCAHgBAMIgBAbIABAcQABALACAHQADAIAEACQAFAEAGAAQAIAAAEgEQAEgCADgIQACgHABgLIAAgcIAAgbQgBgMgCgHQgDgIgEgDQgEgDgIAAQgGAAgFADg");
	this.shape_21.setTransform(-256.05,-86.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_overwhelmed, new cjs.Rectangle(-263.4,-100.9,125.99999999999997,56.900000000000006), null);


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
	this.shape.graphics.f("#353535").s().p("AgOASIAAgjIAdAAIAAAjg");
	this.shape.setTransform(-185.725,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgZA7QgKgGgFgJQgEgKgBgLIgBgXQAAgMABgMQACgLAFgJQAGgJAJgFQAKgGAPAAQAOAAAJAFQAIAEAGAIQAFAJABALQACAMAAAOIAAAGIg+AAIAAAKIABALIADAJQACAEADACQADADADAAQAIAAAEgGQADgGACgLIAcAAQgBAVgKALQgLAMgWAAQgRAAgJgGgAgGgoQgDACgCAEIgDAIIgBAJIAAAEIAgAAIgBgMIgCgJQgCgEgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_1.setTransform(-193.525,-6.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgrA+IAAgYIAxhJIguAAIAAgaIBUAAIAAAZIgxBJIAxAAIAAAZg");
	this.shape_2.setTransform(-203.45,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgPBTIAAh7IAfAAIAAB7gAgPg3IAAgbIAfAAIAAAbg");
	this.shape_3.setTransform(-210.85,-8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AAPA/IAAhUQAAgKgDgEQgDgDgIAAQgPAAAAAUIAABRIggAAIAAh7IAeAAIAAAPIABAAQAFgJAIgEQAHgEALgBQAPABAHAIQAJAIAAATIAABag");
	this.shape_4.setTransform(-219.1,-6.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgfA+QgGgDgEgFQgDgFgBgGIgCgNQAAgJACgGQABgGAEgFQAEgEAGgCIAOgGIARgEQAIgCACgDQADgEAAgGQAAgHgDgEQgEgEgHAAQgHAAgEAEQgDAFgBAHIAAADIgcAAIAAgDQAAgKADgIQAEgHAFgEQAHgFAIgCQAHgCAJAAQAOAAAIADQAJADAFAFQAFAFABAHQACAHAAAIIAABAIABAOIADAKIgeAAIgDgGIgBgHIgBAAQgFAKgHADQgHADgLAAQgIAAgGgDgAAHAEIgHADQgIACgFAFQgDAEAAAJQgBAHADAFQADAFAGAAIAGgBQAEgBADgDIAEgFQACgEAAgFIAAgZg");
	this.shape_5.setTransform(-230.2,-6.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgiBMQgLgJAAgQIAeAAQAAAGAFAEIAFACIAFABQAJAAAEgGQAEgGAAgJIAAgRIAAAAQgFAHgHAEQgGAEgIAAQgTAAgJgOQgKgOAAghIACgWQABgMAEgJQAEgJAIgFQAHgGANAAQAHAAAGADQAHAEAFAKIAAAAIAAgOIAfAAIAAB1QAAAXgMAMQgMAMgbAAQgUAAgLgIgAgHg5QgDADgCAFQgCAFAAAJIgBAVIABAMIACAJQACAFADACQADADAEAAQAFAAADgDQAEgCACgFQACgEAAgGIABgOQAAgXgDgJQgEgKgJAAQgFAAgDACg");
	this.shape_6.setTransform(-241.325,-4.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AggA/IAAh7IAfAAIAAARIABAAQAEgIAGgGQAHgFAKgBIADAAIACABIAAAeIgEAAIgFAAIgJABQgEABgDADQgDADgCAEQgCAEAAAGIAABJg");
	this.shape_7.setTransform(-250,-6.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgcBPQgMgGgGgLQgFgMgCgPQgCgQAAgTQAAgRACgQQACgQAFgLQAGgLAMgHQAKgGASAAQATAAAKAGQAMAHAFALQAHALABAQQACAQAAARQAAATgCAQQgBAPgHAMQgFALgMAGQgKAGgTAAQgSAAgKgGgAgLg4QgEADgDAIQgCAHgBAMIgBAaIABAcQABAMACAHQADAIAEADQAFADAGABQAHgBAFgDQAEgDACgIQADgHABgMIABgcIgBgaQgBgMgDgHQgCgIgEgDQgFgDgHgBQgGABgFADg");
	this.shape_8.setTransform(-260.4,-8.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_organize, new cjs.Rectangle(-379.5,-24,309,31.2), null);


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
	this.shape.graphics.f("#353535").s().p("AgOASIAAgjIAdAAIAAAjg");
	this.shape.setTransform(-84.025,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgiBMQgLgIAAgQIAeAAQAAAFAFAEIAFACIAFABQAKABADgHQAEgGAAgJIAAgQIAAAAQgFAGgHAEQgGAEgIABQgTAAgJgPQgKgPAAggIABgXQABgMAFgIQAEgJAHgHQAIgFANAAQAHAAAGAEQAHADAFAKIAAAAIAAgOIAfAAIAAB2QAAAYgMAMQgMAMgbAAQgUAAgLgJgAgHg6QgDADgCAFIgDAOIAAAVIAAANIADAJQACAFADADQADACAEAAQAFAAADgCQAEgDACgFQACgEABgHIAAgOQAAgXgDgJQgEgKgJAAQgFAAgDACg");
	this.shape_1.setTransform(-92.825,-2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAQBAIAAhVQgBgKgDgEQgDgDgIgBQgPAAAAAVIAABSIggAAIAAh8IAeAAIAAAOIABAAQAFgIAIgFQAHgEALAAQAPAAAIAIQAJAJgBASIAABcg");
	this.shape_2.setTransform(-104.25,-4.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgXA+QgJgEgGgIQgGgJgCgMQgCgNAAgQQAAgPACgMQADgMAGgJQAGgIAJgEQAJgEANAAQAOgBAKAEQAJAEAGAJQAGAIACAMQACANAAAPQAAAQgCANQgDAMgGAIQgFAIgKAEQgJAEgOAAIgCAAQgMAAgJgDgAgIgnQgEADgBAGQgCAFgBAJIAAAQIAAASQABAIACAGQABAGAEADQADADAFAAQAKAAADgKQAEgKAAgYQAAgWgEgKQgDgLgKAAQgFAAgDAEg");
	this.shape_3.setTransform(-115.625,-4.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_4.setTransform(-123.95,-6.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AggBAIAAh8IAfAAIAAARIAAAAQAEgKAHgFQAHgFAKAAIADAAIADAAIAAAfIgFAAIgFAAIgIAAQgEABgEADQgDADgDAEQgBAFAAAGIAABKg");
	this.shape_5.setTransform(-135.65,-4.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgXA+QgJgEgGgIQgGgJgCgMQgCgNAAgQQAAgPACgMQADgMAGgJQAGgIAJgEQAJgEANAAQAOgBAKAEQAJAEAGAJQAGAIACAMQACANAAAPQAAAQgCANQgDAMgGAIQgFAIgKAEQgJAEgOAAIgCAAQgMAAgJgDgAgIgnQgEADgBAGQgCAFgBAJIAAAQIAAASQABAIACAGQABAGAEADQADADAFAAQAKAAADgKQAEgKAAgYQAAgWgEgKQgDgLgKAAQgFAAgDAEg");
	this.shape_6.setTransform(-145.575,-4.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgQBUIAAhlIgRAAIAAgXIARAAIAAgNQgBgJADgGQADgGAEgDQAEgEAFgBQAHgCAHAAIASABIAAAXIgEgBIgDAAQgGABgDACQgDACgBAFIAAALIAUAAIAAAXIgUAAIAABlg");
	this.shape_7.setTransform(-154.5,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AAMBRIgOgBQgGgCgDgDQgDgEgBgHQgBgGgBgJIAAhHIgQAAIAAgWIAQAAIAAgkIAgAAIAAAkIATAAIAAAWIgTAAIAABDQAAAHACADQACADAHAAIAEAAIAEAAIAAAWIgLABg");
	this.shape_8.setTransform(-166.9,-6.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgXA+QgJgEgGgIQgGgJgCgMQgCgNAAgQQAAgPACgMQADgMAGgJQAGgIAJgEQAJgEANAAQAOgBAKAEQAJAEAGAJQAGAIACAMQACANAAAPQAAAQgCANQgDAMgGAIQgFAIgKAEQgJAEgOAAIgCAAQgMAAgJgDgAgIgnQgEADgBAGQgCAFgBAJIAAAQIAAASQABAIACAGQABAGAEADQADADAFAAQAKAAADgKQAEgKAAgYQAAgWgEgKQgDgLgKAAQgFAAgDAEg");
	this.shape_9.setTransform(-175.975,-4.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AARBTIgohzIAAAAIAABzIgfAAIAAilIAmAAIAoBxIAAAAIAAhxIAfAAIAAClg");
	this.shape_10.setTransform(-188.175,-6.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_notForLong, new cjs.Rectangle(-196.6,-22.4,117.19999999999999,30.9), null);


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
	this.shape.graphics.f("#353535").s().p("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CgGAAgHQAAgIACgGQACgGAEgFQAEgEAFgDQAGgDAIgCIASgFQAHgCACgDQADgDAAgGQAAgHgDgEQgDgEgIAAQgHAAgEAEQgEAEAAAHIAAAEIgcAAIAAgDQAAgLADgHQAEgHAGgEQAFgFAIgBQAIgCAJAAQAOAAAIACQAJADAFAFQAFAFABAHQACAHAAAIIABBNIADAKIgeAAIgEgMQgGAJgHADQgHADgLAAQgIAAgGgDgAJEhgIgGACQgKADgEAFQgEAEAAAIQAAAHADAFQACAFAHAAIAGgBQAEgBADgCQADgCABgEQACgEAAgFIAAgXgAHBgnQgIgDgGgHQgGgIgDgMQgCgMAAgSQAAgTADgNQAEgMAGgHQAHgHAJgDQAJgDALAAQAWAAAKAMQALANAAAWIgdAAIgBgJIgCgIQgCgEgCgCQgDgCgFAAQgFAAgEADQgEACgBAFIgDANIAAAmIADANQABAFAEADQADACAFAAQAIAAAEgGQAEgIAAgOIAdAAQAAAYgLAMQgKANgZAAQgMAAgJgDgAEognQgJgCgFgFQgFgFgCgHQgCgHAAgJIAAgEIAcAAIAAAEQAAAIAEAEQAEAFAIAAQAIAAAEgDQAEgEAAgHQAAgGgDgDQgDgDgFgCIgWgIQgNgEgGgJQgHgIAAgNQAAgHADgHQACgGAGgFQAFgFAJgDQAIgDAMAAQAVAAAKAIQAKAKAAAQIAAAFIgcAAQAAgJgDgFQgDgEgHAAQgGAAgEADQgFADAAAHQAAAFADADQACAEAIACIATAGQAPAFAGAIQAGAIAAAOQAAAKgDAHQgEAHgGAFQgGAFgIACQgIACgKAAQgNAAgJgDgADAgqQgJgGgFgJQgEgJgCgMIgBgXQAAgMACgLQACgLAFgJQAFgJAJgFQAKgFAQAAQANAAAJAEQAJAEAEAIQAFAIADAMQABALAAAOIAAAHIg9AAIAAAUIADAKQACADADADQADACAEAAQAIAAAEgGQADgFACgMIAcAAQgCAWgKAKQgKAMgXAAQgQAAgKgGgADTiMQgDACgCAEIgDAHIAAAOIAgAAIgCgNIgCgIQgBgEgDgCQgEgCgEAAQgFAAgDACgABggnQgJgCgFgFQgFgFgCgHQgCgHAAgJIAAgEIAcAAIAAAEQAAAIAEAEQAEAFAIAAQAIAAAEgDQAEgEAAgHQAAgGgDgDIgIgFIgWgIQgNgEgHgJQgGgIAAgNQAAgHADgHQACgGAFgFQAFgFAJgDQAJgDAMAAQAVAAAKAIQAKAKAAAQIAAAFIgcAAQAAgJgDgFQgDgEgIAAQgGAAgEADQgEADAAAHQAAAFADADQACAEAIACIATAGQAPAFAGAIQAGAIAAAOQAAAKgEAHQgDAHgGAFQgGAFgIACQgIACgKAAQgNAAgJgDgAh2gqQgJgGgFgJQgEgJgCgMIgBgXQAAgMACgLQACgLAFgJQAFgJAJgFQAKgFAQAAQANAAAJAEQAJAEAEAIQAFAIADAMQABALAAAOIAAAHIg9AAIAAAUIADAKQACADADADQADACAEAAQAIAAAEgGQADgFACgMIAcAAQgCAWgKAKQgKAMgXAAQgQAAgKgGgAhjiMQgDACgCAEIgDAHIAAAOIAgAAIgCgNIgCgIQgBgEgDgCQgEgCgEAAQgFAAgDACgAmxgqQgJgGgFgJQgFgJgBgMIgBgXQAAgMACgLQACgLAFgJQAFgJAJgFQAKgFAQAAQANAAAJAEQAJAEAEAIQAFAIACAMQACALAAAOIAAAHIg9AAIAAAUIADAKIAFAGQACACAFAAQAIAAADgGQAEgFABgMIAcAAQgBAWgKAKQgKAMgXAAQgRAAgJgGgAmeiMQgDACgCAEIgDAHIAAAOIAfAAIgBgNQAAgFgCgDQgCgEgDgCQgDgCgFAAQgFAAgCACgArMgwQgMgMAAgXIAAgGIAhAAIABAPQABAEACAEQADADAEACQAEABAGAAQAIAAAGgEQAGgFAAgKQAAgGgCgEQgBgEgEgDIgIgFIgOgGIgTgIQgIgEgFgGQgFgGgDgHQgCgIAAgKQAAgYANgLQANgMAYAAQAKAAAJACQAKADAGAFQAHAFAEAIQADAJAAALIAAAFIgfAAQAAgMgEgGQgEgGgJAAQgGAAgDABQgEACgCADIgDAGIgBAHQAAAHADAFQADAFALAEIAZALQAJAEAGAFQAGAEAEAFQADAFABAGIABAOQAAAZgOAMQgPAMgbAAQgbAAgMgMgAK6gnIAAhTQAAgKgEgEQgDgDgHAAQgQAAAAAUIAABQIgfAAIAAh5IAdAAIAAAOIABAAQAFgJAIgEQAIgEAKAAQAPAAAIAIQAIAIAAASIAABagAAcgnIAAhTQAAgKgDgEQgDgDgHAAQgQAAAAAUIAABQIgfAAIAAh5IAeAAIAAAOIABAAQAEgJAHgEQAIgEAKAAQAQAAAHAIQAIAIAAASIAABagAkfgnIgSgnIgSAnIghAAIAhg+Igfg7IAgAAIARAkIARgkIAgAAIgfA7IAhA+g");
	this.shape.setTransform(-224.075,10.5281);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_monetized, new cjs.Rectangle(-296.9,-9.9,145.7,40.9), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AiMD7QgMgJAAgQIAgAAQAAAGAFAEIAFACIAGABQAKAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAEQgIAEgIAAQgTAAgKgPQgKgPAAgjIABgXQABgMAEgJQAFgKAIgGQAIgGANAAQAHAAAIAEQAHAEAFAKIAAAAIAAgOIAgAAIAAB6QAAAZgMANQgNAMgdAAQgVAAgLgJgAhwBwQgDADgCAFIgDAOIAAAjQABAGACAFQACAEADADQADADAFAAQAGAAADgDQAEgDACgEQACgFAAgHIABgPQAAgYgDgJQgEgKgKAAQgFAAgEACgAD4DVQgKgGgFgJQgEgKgBgMIgCgZQAAgNACgMQACgMAFgJQAGgKAKgFQAKgGARAAQAOAAAJAFQAKAFAFAIQAFAJACAMQACAMAAAPIAAAHIhBAAIAAAWIADAJIAFAHQADADAFAAQAIAAAEgGQAEgGABgNIAeAAQgBAXgLAMQgLALgYAAQgSAAgKgGgAEMBtQgDACgCAEIgDAIIAAAPIAhAAIgBgNQAAgGgCgEQgCgEgDgCQgDgCgFAAQgFAAgEACgAk4DMQgJgQAAgkQAAgkAJgQQAKgQAUAAQAKAAAGAEQAHAEAFAIIABAAIAAg3IAhAAIAACsIggAAIAAgOQgGAJgHAEQgHADgKAAQgUAAgKgPgAkdB4QgDALAAAVQAAAVADALQADALALAAQALAAADgLQAEgLAAgVQAAgVgEgLQgDgKgLAAQgLAAgDAKgAAmDYQgGgBgDgEQgEgEgBgHIgBgQIAAhKIgRAAIAAgWIARAAIAAglIAhAAIAAAlIATAAIAAAWIgTAAIAABGQAAAIACADQADADAHAAIAEAAIADAAIAAAXIgVAAIgQgBgAFTDZIAAgmIAgAAIAAAmgACBDZIAAgaIA0hMIgyAAIAAgbIBZAAIAAAZIg0BNIA0AAIAAAbgABTDZIAAiBIAhAAIAACBgAgjDZIAAiBIAiAAIAACBgAjKDZIAAiBIAhAAIAACBgABTBIIAAgdIAhAAIAAAdgAgjBIIAAgdIAiAAIAAAdgAjKBIIAAgdIAhAAIAAAdgAITgsIAAgZIAIABQAKAAAEgFQADgFABgIIgkiBIAiAAIAUBZIAAAAIARhZIAhAAIgfB5QgEAQgEAKQgEAKgGAFQgFAFgIACQgHACgMAAgAkahXQgKgEgGgIQgGgJgCgNQgDgNAAgQQAAgRADgNQADgMAGgJQAGgIAKgFQAJgEAOAAQAPgBAKAFQAKAEAGAJQAFAIADANQACANAAARQAAAQgCANQgDANgGAIQgGAJgKAEQgKAEgOAAIgDAAQgNAAgIgEgAkLjAQgEADgCAGIgCAOIAAAlIACAOQACAGAEAEQADADAGAAQAKAAAEgLQAEgKAAgYQAAgZgEgKQgEgLgKAAQgGAAgDAEgAFIhWQgGgDgEgFQgDgGgCgGQgCgHAAgGQAAgKACgGQACgHAEgEQAEgFAGgDQAGgDAJgDIATgFQAHgCADgDQADgDAAgHQAAgHgDgEQgEgFgIAAQgIAAgEAFQgEAEAAAIIAAAEIgdAAIAAgDQAAgMADgHQAEgIAGgEQAGgFAIgCQAJgCAJAAQAPAAAJADQAJADAFAFQAFAFACAHQACAIAAAIIABBSIADALIggAAIgCgGIgCgHIAAAAQgGAKgIADQgHADgMAAQgJAAgGgDgAFxiSIgHACQgKACgEAFQgFAFAAAJQAAAHADAGQADAFAHAAIAHgBQADgBADgDQADgCACgEQACgEAAgFIAAgZgADphWQgKgDgGgIQgGgIgDgNQgDgNAAgTQAAgUAEgNQAEgNAHgIQAHgIAJgDQAKgDALAAQAXAAAMANQAMAOAAAXIggAAIgBgKIgCgIQgBgEgDgCQgDgCgFAAQgGAAgEADQgEACgBAGQgCAFgBAIIAAAoQABAJACAFQABAGAEADQADACAGAAQAIAAAEgHQAEgHAAgQIAgAAQAAAZgMAOQgLANgbAAQgMAAgJgDgAgFhWQgHgDgDgFQgEgGgBgGQgCgHAAgGQAAgKACgGQACgHAEgEQAEgFAGgDQAFgDAJgDIASgFQAIgCADgDQADgDAAgHQAAgHgEgEQgDgFgJAAQgHAAgEAFQgEAEAAAIIAAAEIgdAAIAAgDQAAgMAEgHQADgIAGgEQAFgFAJgCQAIgCAJAAQAPAAAJADQAKADAFAFQAFAFABAHQACAIAAAIIABBSIADALIgfAAIgDgGIgBgHIgBAAQgGAKgHADQgIADgMAAQgIAAgFgDgAAiiSIgHACQgKACgEAFQgEAFAAAJQAAAHADAGQACAFAHAAIAHgBQAEgBADgDQADgCACgEQACgEAAgFIAAgZgAndhbQgIgJAAgTIAAhgIAhAAIAABZQAAAKADAEQAEAEAHAAQASAAAAgVIAAhWIAhAAIAACBIggAAIAAgPQgGAKgIAEQgJAEgKAAQgQAAgJgIgAByhWQgHgCgDgEQgDgEgBgGIgBgQIAAhKIgRAAIAAgXIARAAIAAglIAhAAIAAAlIATAAIAAAXIgTAAIAABGQAAAHACADQACAEAHAAIAEAAIAEgBIAAAXIgWABIgPgBgAlchWQgGgCgDgEQgEgEgBgGIgBgQIAAhKIgRAAIAAgXIARAAIAAglIAhAAIAAAlIATAAIAAAXIgTAAIAABGQAAAHACADQADAEAHAAIAEAAIADgBIAAAXIgVABIgQgBgAHfhWIAAirIAiAAIAACrgAGrhWIAAirIAhAAIAACrgACehWIAAiBIAiAAIAACBgAhDhWIAAhaQAAgIgDgFQgEgEgGAAQgIAAgFAGQgFAFAAALIAABVIghAAIAAhaQAAgIgDgFQgDgEgHAAQgIAAgEAGQgFAFAAALIAABVIghAAIAAiBIAgAAIAAANQAGgJAIgDQAIgEALAAQALAAAIAFQAIAFACAKIABAAQAEgKAIgFQAJgFAMAAQAQAAAIAKQAIAKAAASIAABegAoPhWIgIgkIgtAAIgIAkIgkAAIAtirIArAAIAtCrgAo+iWIAhAAIgQhNIgBAAgACejnIAAgcIAiAAIAAAcg");
	this.shape.setTransform(-224.325,-2.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_digitize, new cjs.Rectangle(-379,-36,309,62.7), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-223.825,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_categorize, new cjs.Rectangle(-378,-30,309,61.4), null);


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
	this.instance.setTransform(-231.05,-33.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_endFrame_1, new cjs.Rectangle(-231,-33,92,260), null);


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
	this.instance.setTransform(-235.8,9,0.6994,0.6994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_endFrame, new cjs.Rectangle(-235.8,9,139.9,119.6), null);


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
	this.instance.setTransform(-393,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_05, new cjs.Rectangle(-393,-32,301,224), null);


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
	this.instance.setTransform(-455.05,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_04, new cjs.Rectangle(-455,-33,301,224), null);


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
	this.instance.setTransform(-407.05,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03, new cjs.Rectangle(-407,-33,301,224), null);


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
	this.instance.setTransform(-387,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02, new cjs.Rectangle(-387,-32,301,224), null);


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
	this.instance.setTransform(-429.05,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01, new cjs.Rectangle(-429,-33,301,224), null);


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

	// Layer_1
	this.instance = new lib.epson_logo();
	this.instance.setTransform(-116.1,-5.45,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo_1, new cjs.Rectangle(-116.1,-5.4,109.3,37), null);


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
	this.instance.setTransform(-320,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.computer_screen, new cjs.Rectangle(-320,-32,320,172), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.7461,x:-111.9,y:162.2},7,cjs.Ease.quadInOut).wait(40).to({rotation:-14.4932,x:16.1,y:104.25},7,cjs.Ease.quadInOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:164.6,scaleX:1,scaleY:1,rotation:-2.7506,x:-99.95,y:416.2},7,cjs.Ease.quadInOut).wait(40).to({rotation:-2.7506},0).to({regY:164.7,scaleX:1.06,scaleY:1.06,rotation:18.7007,x:87.95,y:544.3},7,cjs.Ease.quadInOut).wait(1));

	// receipt_03
	this.instance_4 = new lib.receipt_03();
	this.instance_4.setTransform(-380.1,-166,1.2136,1.2136,0,0,0,-103,79);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:-294,y:156.05},7,cjs.Ease.quadInOut).wait(38).to({scaleX:1.2136,scaleY:1.2136,x:-424.1,y:-146},7,cjs.Ease.quadInOut).wait(1));

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
	this.instance_9.setTransform(-532.1,178.3,1,1,23.1809,0,0,-95.3,173.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-75.1,regY:164.6,rotation:13.487,x:-374.1,y:248.25},7,cjs.Ease.quadInOut).wait(40).to({regX:-75,regY:164.7,rotation:23.1809,x:-512.1,y:174.35},7,cjs.Ease.quadInOut).wait(1));

	// receipt_01
	this.instance_10 = new lib.receipt_01();
	this.instance_10.setTransform(-402.2,-187.95,0.9999,0.9999,43.1994,0,0,-70.6,178.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:-70.5,scaleX:1,scaleY:1,rotation:-0.9959,x:-230.05,y:272.15},7,cjs.Ease.quadInOut).wait(40).to({rotation:-0.9959},0).to({regX:-70.6,scaleX:0.9999,scaleY:0.9999,rotation:43.1994,x:-396.15,y:-207.95},7,cjs.Ease.quadInOut).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-645.7,-386.3,864.9000000000001,1470.3999999999999);


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
(lib.Epson_rapidReceipt_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

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
	var mask_graphics_350 = new cjs.Graphics().p("AoaC5QgrAAAAgrIAAAAIAAkbQAAgrArAAIAAAAIQ1AAQArAAAAArIAAAAIAAEbQAAArgrAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_graphics_350,x:70.3678,y:549.1678}).wait(10));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_1.setTransform(-1.525,521.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_2.setTransform(2.175,522.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_3.setTransform(13.275,526.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUZg");
	this.shape_4.setTransform(115.175,564.6);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-1.525,y:521.1}}]},350).to({state:[{t:this.shape_2,p:{x:2.175,y:522.5}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:31.825,y:533.55}}]},1).to({state:[{t:this.shape_2,p:{x:57.775,y:543.2}}]},1).to({state:[{t:this.shape_1,p:{x:89.225,y:554.95}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1,p:{x:133.725,y:571.5}}]},1).to({state:[{t:this.shape_1,p:{x:144.825,y:575.65}}]},1).to({state:[{t:this.shape_2,p:{x:148.525,y:577.05}}]},1).wait(1));

	// ctaBtn
	this.instance_3 = new lib.ctaBtn();
	this.instance_3.setTransform(71.15,549.95,0.7158,0.7158,0,0,0,1.1,1.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(352).to({_off:false},0).to({alpha:1},7).wait(1));

	// printer_endFrame
	this.instance_4 = new lib.printer_endFrame();
	this.instance_4.setTransform(132.9,249.15,0.7625,0.7625,0,0,0,-100,85.5);
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
	this.instance_17.setTransform(252.95,328.15,0.6633,0.6633,0,0,0,-134.8,170.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({x:79.95,mode:"synched",loop:false},7,cjs.Ease.quadOut).wait(35).to({mode:"single",startPosition:27},0).to({alpha:0,startPosition:30},6).to({_off:true},1).wait(215));

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
	this.instance_20.setTransform(159.55,455.35,1,1,0,0,0,-214.3,349.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},61).wait(299));

	// image_01
	this.instance_21 = new lib.image_01();
	this.instance_21.setTransform(157,311.05,1,1,0,0,0,-160,112);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(48).to({_off:false},0).wait(41).to({alpha:0},6).to({_off:true},1).wait(264));

	// background_color
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_5.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-191.8,19.6,784.9000000000001,1170.4);
// library properties:
lib.properties = {
	id: '8E5913087FB946AB926391FBB5EDFA33',
	width: 160,
	height: 600,
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