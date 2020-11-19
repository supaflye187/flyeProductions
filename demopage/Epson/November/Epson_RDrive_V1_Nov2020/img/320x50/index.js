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



(lib.Epson_Logo = function() {
	this.initialize(img.Epson_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,48);


(lib.hallway = function() {
	this.initialize(img.hallway);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,276);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.Printer = function() {
	this.initialize(img.Printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,174);


(lib.printer_full_image = function() {
	this.initialize(img.printer_full_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,291);


(lib.printer_light = function() {
	this.initialize(img.printer_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,22);


(lib.printerRolls = function() {
	this.initialize(img.printerRolls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,172);// helper functions:

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


(lib.txt_onARoll = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("ACNA/IAAgOIAEAAQAGAAACgCQADgEAAgEIgWhLIAVAAIALA0IABAAIAJg0IAUAAIgSBGIgGAPQgCAGgDADQgDAEgEAAIgLABgAIOAnQgGgDgDgFQgDgFgCgHQgBgIAAgJQAAgJABgIQACgHAEgFQADgFAGgCQAGgDAHAAQAJAAAGACQAGACADAFQAEAGABAHQACAIAAAJQgBAJgCAIQgBAHgDAFQgEAFgFACQgGACgJAAQgIAAgGgBgAIXgWQgCACgBAEIgCAHIAAAVIACAJQABADACACQACACADAAQAHAAABgGQADgHAAgNQAAgOgDgGQgBgGgHAAQgDAAgCACgAGEAnQgDgCgCgDIgDgHIgBgHIABgKQABgDADgDIAFgEIAJgDIALgDQAEgBACgCQABgCAAgEQAAgEgCgDQgBgCgGAAQgEAAgCACQgDADAAAFIAAACIgQAAIAAgCQAAgHACgEQACgEADgDQADgDAFgBIAKgBQAJAAAGABQAFACADADQADADABAFIABAJIABAuIACAHIgTAAIgDgIQgDAGgEACQgFABgHAAQgFAAgEgBgAGcAEIgDABQgHABgCAEQgDADAAAEQAAAFACACQACAEADAAIAFgBIADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgGIAAgOgADvAnQgGgDgDgFQgEgFgBgHQgBgIgBgJQABgJABgIQACgHADgFQADgFAGgCQAGgDAIAAQAIAAAHACQAFACAEAFQADAGABAHQACAIAAAJQAAAJgCAIQgBAHgEAFQgDAFgGACQgGACgIAAQgJAAgFgBgAD4gWQgCACgCAEIgBAHIAAAVIABAJQACADACACQACACADAAQAGAAACgGQACgHAAgNQAAgOgCgGQgCgGgGAAQgDAAgCACgAA+AlQgFgDgEgGQgCgGgBgHIAAgOIABgOQABgHADgFQADgGAGgDQAGgDAJAAQAJAAAGADQAFACADAFQADAFABAHIABAPIAAAEIgmAAIABANIABAFIADAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAFAAACgEQACgDAAgIIASAAQgBAOgGAGQgHAIgNgBQgKAAgHgDgABKgXIgDADIgBAGIgBAIIATAAIAAgIIgBgGIgEgDIgEgBIgFABgAi+AlQgGgDgDgGQgCgGgBgHIgBgOIABgOQABgHADgFQAEgGAFgDQAHgDAJAAQAIAAAGADQAFACADAFQAEAFABAHIABAPIAAAEIgmAAIAAANIACAFIACAEQABABABAAQAAAAABABQAAAAABAAQAAAAABAAQAFAAACgEQACgDABgIIASAAQgBAOgHAGQgGAIgOgBQgKAAgGgDgAizgXIgCADIgCAGIAAAIIATAAIAAgIIgCgGIgDgDIgEgBIgGABgAkFAfQgGgJAAgUQAAgUAGgKQAFgJAMAAQAFAAAEACQAFACADAEIAAgfIATAAIAABjIgSAAIAAgIQgEAGgEACQgEABgGAAQgMABgFgKgAj1gQQgCAGAAAMQAAAMACAGQABAGAHAAQAGAAACgGQABgGABgMQgBgMgBgGQgCgGgGAAQgHAAgBAGgAlXAlQgGgDgDgGQgCgGgBgHIgBgOIABgOQABgHADgFQAEgGAFgDQAHgDAJAAQAIAAAGADQAFACADAFQAEAFABAHIABAPIAAAEIgmAAIAAANIACAFIACAEQABABABAAQAAAAABABQAAAAABAAQAAAAABAAQAFAAACgEQACgDABgIIASAAQgBAOgHAGQgGAIgOgBQgKAAgGgDgAlMgXIgCADIgCAGIAAAIIATAAIAAgIIgCgGIgDgDIgEgBIgGABgAnCAnQgDgCgCgDIgDgHIgBgHIABgKQABgDADgDIAFgEIAJgDIALgDQAEgBACgCQACgCgBgEQAAgEgCgDQgBgCgGAAQgEAAgCACQgCADgBAFIAAACIgRAAIAAgCQAAgHADgEQABgEAEgDQAEgDAEgBIAKgBQAKAAAFABQAFACADADQADADABAFIABAJIAAAuIADAHIgTAAIgDgIQgDAGgFACQgEABgHAAQgFAAgEgBgAmpAEIgFABQgFABgDAEQgCADgBAEQABAFABACQACAEAEAAIAEgBIAEgCQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgGIAAgOgAoWAlQgHgDgCgGQgDgGgBgHIgBgOIABgOQABgHAEgFQADgGAGgDQAGgDAKAAQAIAAAFADQAGACADAFQADAFABAHIABAPIAAAEIgmAAIAAANIACAFIADAEQAAABABAAQABAAAAABQABAAAAAAQABAAAAAAQAGAAABgEQADgDABgIIARAAQAAAOgHAGQgHAIgOgBQgJAAgGgDgAoLgXIgDADIgCAGIAAAIIAUAAIgBgIIgCgGIgDgDIgEgBIgFABgAAdAnQgDgBgCgDQgCgCAAgDIgCgKIAAgqIgJAAIAAgOIAJAAIAAgVIAUAAIAAAVIALAAIAAAOIgLAAIAAAnQAAAFACACQABACAEAAIACgBIACAAIAAAOIgNABIgJgBgAJ6AnIAAgWIASAAIAAAWgAJcAnIAAhjIAUAAIAABjgAJAAnIAAhjIATAAIAABjgAHYAnIAAhLIATAAIAAALQADgGAEgDQAEgDAGAAIADAAIAAASIgCAAIgEAAIgEABIgFACIgDAEIgBAHIAAAsgAFFAnIAAgzQAAgGgCgCQgBgCgFAAQgJAAgBAMIAAAxIgTAAIAAhLIASAAIAAAJQAEgFAEgCQAFgDAHAAQAJAAAFAFQAFAFAAALIAAA3gABxAnIAAhjIATAAIAABjgAgKAnIAAhLIASAAIAABLgAgmAnIAAgzQAAgGgCgCQgCgCgEAAQgLAAABAMIAAAxIgUAAIAAhLIATAAIAAAJQADgFAFgCQAFgDAGAAQAJAAAFAFQAFAFAAALIAAA3gAhoAnIAAhLIAUAAIAABLgAiIAnIAAg9IgKAAIAAgOIAKAAIAAgIQgBgFACgDQACgEACgCQACgCAEgBIAJgBIAKABIAAANIgDAAQgEAAgDABQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAGIALAAIAAAOIgLAAIAAA9gAmLAnIAAhLIATAAIAAALQADgGAEgDQAEgDAGAAIAEAAIAAASIgDAAIgDAAIgFABIgEACIgEAEIgBAHIAAAsgApLAnIgLhHIgBAAIgLBHIgWAAIgThjIAUAAIAKBJIABAAIALhJIAUAAIAMBJIAAAAIALhJIATAAIgSBjgAgKgtIAAgQIASAAIAAAQgAhogtIAAgQIAUAAIAAAQg");
	this.shape.setTransform(-68.25,-504.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-133.4,-511,130.4,12.600000000000023), null);


(lib.txt_inchRoll = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AF2A8IAGgPIAFgOQACgHAAgHIABgQIgBgPQAAgIgCgHQgBgHgEgHIgGgPIANAAQAKAQAFAPQAEAPAAANQAAAOgEAPQgFAOgKAQgAmDA8QgKgQgDgOQgFgPAAgOQAAgNAFgPQADgPAKgQIAPAAIgHAPQgDAHgCAHIgDAPIgBAPIABAQIADAOIAFAOIAHAPgADoAjQgGgCgDgFQgDgEgCgHQgBgIAAgJQAAgIABgHQACgHADgFQADgFAGgCQAGgDAHAAQAJAAAFADQAGACADAFQADAFABAHIACAPQAAAJgCAHQgBAIgDAEQgEAFgFACQgFACgJAAIgCAAQgHAAgEgCgADwgWQgCACgBADIgCAIIAAATIACAIQABAEACABQACACADAAQAGAAACgGQADgFAAgOQAAgMgDgGQgCgGgGAAQgDAAgCACgAAbAkQgEgCgEgEQgDgFgCgHQgCgHAAgLQAAgKADgHQABgHAEgFQAEgEAFgCQAFgCAIAAQAMAAAHAIQAGAHAAANIgRAAIgBgFIgCgFIgCgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEAAgCABQgBACgBADIgCAHIAAAWIACAHQABAEABABIAGABQAEAAACgEQADgEAAgIIARAAQAAAOgGAHQgHAHgOAAQgHAAgGgBgAj7AiQgGgDgDgHQgCgGgBgIIgBgPIAAgUQAAgJADgHQADgIAHgEQAGgEAMAAIAKABIAIAEQAEADADAEQABAFAAAHIgSAAQAAgGgBgDQgDgDgFAAQgDAAgDACQgCACgCADIgBAIIAAAOIAAAAQADgEAEgCQAEgCAHAAQAGAAAEACQAFACADAEQACAEABAFIABALQAAARgGAIQgIAIgQAAQgJAAgHgDgAjygGQgDAEABAJIAAAHIABAGIADAEIAGABIAGgBIADgEIABgGIAAgHQAAgJgCgEQgDgEgFAAQgFAAgDAEgAFdAkIAAgVIARAAIAAAVgAE8AkIAAheIASAAIAABegAEcAkIAAheIATAAIAABegACvAkIAAhHIASAAIAAAKIAAAAQACgFAEgDQAFgEAFAAIADAAIABABIAAARIgGAAIgEABQgDAAgCACQgCABgBADIgBAGIAAAqgABxAkIAAgwQAAgGgDgCQgCgCgDAAQgKAAAAALIAAAvIgSAAIAAheIASAAIAAAfQAGgKAMAAQAIAAAFAFQAFAFAAALIAAA0gAgPAkIAAgwQAAgGgCgCQgCgCgDAAQgLAAAAALIAAAvIgSAAIAAhHIARAAIAAAJIABAAQADgGAEgCQAGgDAFAAQAJAAAFAFQADAFAAALIAAA0gAhSAkIAAhHIASAAIAABHgAinAkIAAgUIghAAIAAgPIAfg6IATAAIAAA6IAJAAIAAAPIgJAAIAAAUgAi6ABIATAAIAAgigAk+AkIgFgUIgZAAIgEAUIgUAAIAZheIAXAAIAaBegAlYAAIASAAIgJgqIAAAAgAiFAFIAAgOIAmAAIAAAOgAhSgsIAAgPIASAAIAAAPg");
	this.shape.setTransform(-70.5,-475.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-111.1,-481.7,81.19999999999999,12.099999999999966), null);


(lib.txt_Immediatelamination = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AItA4QgGgDgFgFQgEgGgBgJQgCgIAAgLQABgLACgIQABgIAEgGQAEgGAGgDQAHgDAJAAQAKAAAHADQAGADAEAGQAEAFACAJQACAHAAAMQAAALgCAIQgCAJgEAFQgEAGgGADQgHADgKAAQgKAAgGgDgAI3gNQgCACgCAEQgBAEAAAFIAAAYQAAAFABAFQACADACADQACACAEAAQAHAAACgHQADgHAAgQQAAgPgDgHQgCgIgHAAQgEAAgCADgAF+A5QgEgDgDgDQgDgEAAgEIgBgJQAAgGABgEQABgFACgDIAIgFIAJgEIANgDQAEgBACgCQACgCAAgEQAAgFgCgDQgCgDgGAAQgFAAgDAEQgCADAAAFIAAACIgUAAIAAgCQAAgIACgFQADgFAEgDQAEgDAFgBQAGgCAGAAQALAAAFACQAGACAEAEQAEADABAFIABALIAAA2IACAHIgVAAIgDgJIAAAAQgDAGgGADQgEACgJAAQgFAAgEgCgAGZARIgFABQgGABgEAEQgDADAAAGQABAFABADQACAEAFAAIAEgBQADAAACgCIADgEIABgGIAAgRgAA4A5QgEgDgDgDQgCgEgBgEIgBgJQAAgGACgEQAAgFADgDIAHgFIAKgEIAMgDQAFgBACgCQACgCAAgEQAAgFgDgDQgCgDgFAAQgGAAgCAEQgCADgBAFIAAACIgTAAIAAgCQgBgIADgFQACgFAFgDQAEgDAFgBQAGgCAGAAQAKAAAGACQAGACAEAEQADADABAFIABALIABA2IACAHIgVAAIgDgJIgBAAQgDAGgFADQgFACgIAAQgGAAgEgCgABTARIgFABQgGABgDAEQgDADAAAGQAAAFACADQACAEAFAAIAEgBQADAAACgCIADgEIABgGIAAgRgAhhA2QgHgDgDgHQgDgHgBgIIgBgQQAAgJABgHQACgIADgGQAEgGAHgEQAGgEAMAAQAJAAAGAEQAGADAEAFQADAGABAIQACAHAAAKIAAAFIgsAAIABAOIACAHIADAEQACACADAAQAGAAADgEQACgEABgIIATAAQAAAPgIAIQgGAIgQAAQgMAAgHgFgAhUgOIgDAEIgCAFIgBAJIAXAAIgBgIIgBgGQgBgDgDgBQgCgCgDAAQgEAAgCACgAjlA5QgEgDgDgDQgCgEgBgEIgBgJQAAgGACgEQABgFACgDIAHgFIAKgEIANgDQAEgBACgCQACgCAAgEQAAgFgDgDQgCgDgFAAQgGAAgCAEQgCADgBAFIAAACIgUAAIAAgCQABgIACgFQADgFADgDQAEgDAGgBQAFgCAHAAQAKAAAGACQAGACADAEQAEADABAFIABALIABA2IACAHIgVAAIgDgJIgBAAQgDAGgFADQgFACgIAAQgGAAgEgCgAjKARIgFABQgGABgDAEQgDADAAAGQAAAFACADQACAEAEAAIAFgBQACAAACgCIAEgEIABgGIAAgRgAlkAwQgGgKAAgYQAAgXAGgLQAHgLANAAQAGAAAFADQAEADADAFIABAAIAAgkIAWAAIAABxIgVAAIAAgJIgBAAQgDAGgFACQgEADgHAAQgNAAgHgLgAlSgGQgCAGAAAOQAAAOACAHQACAHAIAAQAHAAACgHQACgHAAgOQAAgOgCgGQgCgIgHAAQgIAAgCAIgAmpA2QgHgDgDgHQgEgHAAgIIgBgQQAAgJACgHQAAgIAEgGQAEgGAGgEQAHgEALAAQAKAAAGAEQAGADAEAFQAEAGABAIQABAHAAAKIAAAFIgsAAIABAOIABAHIAEAEQACACADAAQAFAAADgEQADgEABgIIAUAAQgBAPgHAIQgIAIgQAAQgMAAgGgFgAmcgOIgEAEIgBAFIgBAJIAXAAIgBgIIgCgGQAAgDgDgBQgCgCgEAAQgDAAgCACgAHTA4QgEAAgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgZIAWAAIAAAZIANAAIAAAPIgNAAIAAAtQAAAFACADQACACAEAAIADAAIACgBIAAAQIgOAAIgLgBgAiQA4QgEAAgBgDQgCgDgCgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgZIAXAAIAAAZIAMAAIAAAPIgMAAIAAAtQAAAFABADQACACAFAAIACAAIACgBIAAAQIgOAAIgLgBgALBA5IAAgZIAVAAIAAAZgAKYA5IAAg7QAAgGgCgDQgCgDgFAAQgMAAAAAOIAAA5IgVAAIAAhVIAVAAIAAAKIAAAAQAEgHAFgDQAGgDAGAAQALAAAGAGQAFAGABANIAAA/gAH2A5IAAhVIAXAAIAABVgAFOA5IAAg7QAAgGgCgDQgCgDgFAAQgMAAAAAOIAAA5IgWAAIAAhVIAVAAIAAAKIAAAAQAEgHAFgDQAGgDAHAAQALAAAFAGQAGAGAAANIAAA/gAD7A5IAAhVIAWAAIAABVgADTA5IAAg7QAAgGgBgDQgDgDgEAAQgFAAgEAEQgDADAAAHIAAA5IgWAAIAAg7QAAgGgCgDQgCgDgFAAQgFAAgDAEQgDADAAAHIAAA5IgWAAIAAhVIAVAAIAAAIIAAAAQAFgFAFgDQAFgDAHAAQAHAAAGAEQAFAEACAGQADgHAGgDQAFgEAIAAQALAAAGAHQAEAHAAAMIAAA+gAAIA5IAAhxIAWAAIAABxgAkVA5IAAhVIAWAAIAABVgAnbA5IAAg7QgBgGgCgDQgCgDgEAAQgGAAgCAEQgEADAAAHIAAA5IgWAAIAAg7QAAgGgCgDQgCgDgEAAQgGAAgDAEQgDADAAAHIAAA5IgWAAIAAhVIAVAAIAAAIIABAAQADgFAGgDQAFgDAHAAQAHAAAGAEQAFAEACAGQADgHAFgDQAGgEAIAAQALAAAFAHQAGAHgBAMIAAA+gApXA5IAAg7QAAgGgCgDQgCgDgFAAQgFAAgDAEQgDADAAAHIAAA5IgXAAIAAg7QAAgGgBgDQgCgDgFAAQgGAAgDAEQgCADAAAHIAAA5IgXAAIAAhVIAWAAIAAAIIAAAAQAEgFAFgDQAGgDAGAAQAIAAAGAEQAEAEACAGQADgHAGgDQAFgEAJAAQALAAAFAHQAFAHAAAMIAAA+gArVA5IAAhxIAWAAIAABxgAH2gnIAAgTIAXAAIAAATgAD7gnIAAgTIAWAAIAAATgAkVgnIAAgTIAWAAIAAATg");
	this.shape.setTransform(-9,-150.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-81.6,-156.2,145.3,11.699999999999989), null);


(lib.txt_consistentQuality = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AJ8BEIAAgQIAGAAQAGAAACgCQACgEABgEIgXhQIAWAAIAMA2IAKg2IAWAAIgUBKIgFAQQgDAGgDAEQgDADgGACIgLABgAFNBEIAAgiIgBAAQgDAFgEACQgEACgGAAQgMAAgHgJQgFgLAAgWQAAgWAFgJQAHgKAMAAQAGAAAFACQAEADADAGIABAAIAAgJIAUAAIAABqgAE5gSQgCAHAAAMQAAAOACAGQACAGAHAAQAHAAACgGQACgGAAgOQAAgMgCgHQgCgGgHgBQgHABgCAGgACSApQgHgCgDgGQgEgFgBgJQgCgHAAgLQAAgJACgIQACgIAEgFQADgGAGgCQAGgDAJAAQAJAAAGACQAGADAEAFQAEAGACAHQABAJAAAJQAAALgCAHQgCAIgDAGQgEAFgGADQgGACgJAAIgDAAQgIAAgEgCgACbgYIgEAGIgBAIIAAAXIABAJIAEAFQACACAEAAQAGABACgHQADgGAAgQQAAgOgDgGQgCgHgGAAQgEAAgCACgAAjApQgFgCgEgGQgEgFgBgJQgCgHAAgLQAAgJACgIQABgIAEgFQAEgGAGgCQAGgDAJAAQAJAAAHACQAFADAEAFQAEAGABAHQACAJAAAJQAAALgCAHQgBAIgEAGQgEAFgGADQgGACgJAAIgDAAQgHAAgGgCgAAtgYIgEAGIgBAIIAAAXIABAJIAEAFQACACAEAAQAGABACgHQADgGAAgQQAAgOgDgGQgCgHgGAAQgEAAgCACgApzApQgHgCgDgGQgEgFgBgJQgCgHAAgLQAAgJACgIQACgIAEgFQADgGAGgCQAGgDAJAAQAJAAAGACQAGADAEAFQAEAGACAHQABAJAAAJQAAALgCAHQgCAIgEAGQgDAFgGADQgGACgJAAIgDAAQgIAAgEgCgApqgYIgEAGIgBAIIAAAXIABAJIAEAFQACACAEAAQAGABACgHQADgGAAgQQAAgOgDgGQgCgHgGAAQgEAAgCACgAHEAqQgDgCgDgEIgDgIIgCgIQAAgFACgFQABgDACgDQADgEAEgBIAJgCIAMgEQAFgBACgCQABgCAAgFQAAgEgCgDQgDgCgEAAQgFAAgDACQgCAEAAAEIAAADIgTAAIAAgDQAAgGACgFQADgFAEgDQADgDAGgBQAEgBAHAAQAJAAAGACQAFABAEADQADAEAAAEQACAFAAAF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");
	this.shape.setTransform(-7.7707,-148.8076,1.0414,1.0414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-83.2,-155.8,151,14), null);


(lib.txt_AmazingProductivity = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgKAMIAAgYIAVAAIAAAYg");
	this.shape.setTransform(61.575,-145.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgbA5IAAgRIAGABQAFAAAEgDQACgDABgGIgZhVIAYAAIALA7IAAAAIALg7IAXAAIgVBPIgFASQgDAGgEAEQgCAEgGABIgMABg");
	this.shape_1.setTransform(55.85,-146.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgBA3QgEgBgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgZIAVAAIAAAZIANAAIAAAPIgNAAIAAAuQAAAEACADQABACAFAAIADAAIACAAIAAAPIgHAAIgIABIgJgBg");
	this.shape_2.setTransform(49.75,-149.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_3.setTransform(45.2,-149.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgMArIgVhVIAWAAIALA9IABAAIAMg9IAVAAIgVBVg");
	this.shape_4.setTransform(39.5,-148.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_5.setTransform(33.8,-149.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgBA3QgEgBgCgDQgCgDgBgEIgBgLIAAgwIgLAAIAAgPIALAAIAAgZIAVAAIAAAZIANAAIAAAPIgNAAIAAAuQAAAEACADQACACAEAAIADAAIACAAIAAAPIgHAAIgHABIgKgBg");
	this.shape_6.setTransform(29.35,-149.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgOArQgFgCgFgFQgDgFgCgJQgDgJAAgNQAAgMADgJQADgIAEgGQAEgFAHgCQAHgCAGAAQAQAAAHAJQAIAJAAAPIgVAAIgBgGIgBgGIgDgEQgCgBgDAAQgDAAgCACQgDACgCADIgBAJIAAAMIAAAOIABAJQACAEACACQACABADAAQAFAAADgEQADgFAAgLIAVAAQAAARgHAJQgJAJgRAAQgHAAgHgCg");
	this.shape_7.setTransform(23,-148.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgaAmQgFgFgBgOIAAg+IAXAAIAAA7QAAAGACADQACACAFAAQALAAAAgOIAAg4IAVAAIAABVIgVAAIAAgKIAAAAQgDAGgGADQgFADgGAAQgLAAgGgGg");
	this.shape_8.setTransform(15.05,-148.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgaAwQgHgLAAgYQAAgXAHgLQAGgLANABQAHgBADADQAEADAEAFIAAAAIAAgkIAXAAIAABxIgWAAIAAgJIAAAAQgDAGgFADQgEACgHAAQgNAAgGgKgAgIgHQgCAHAAANQAAAOACAHQACAHAGAAQAIAAACgHQABgHAAgOQAAgNgBgHQgCgIgIABQgGgBgCAIg");
	this.shape_9.setTransform(6.7,-149.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgPArQgHgDgEgGQgEgFgCgJQgBgJAAgLQAAgKACgIQABgJAFgFQAEgGAGgDQAGgDAJAAQAKAAAGADQAHACAEAGQADAGACAIQACAJAAAKQAAALgCAJQgBAIgEAGQgFAGgGACQgHADgJAAQgJAAgGgCgAgFgbQgDACgBAEQgCAEAAAGIAAALIAAAMQAAAGACAEQABAEADACQACACADAAQAHAAACgHQACgHABgQQgBgPgCgHQgCgHgHAAQgDAAgCACg");
	this.shape_10.setTransform(-1.25,-148.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgWAsIAAhVIAVAAIAAAMIABAAQACgHAFgDQAFgEAHAAIACAAIABAAIAAAVIgDAAIgDAAIgGABIgGADIgDAEQgBADAAAFIAAAyg");
	this.shape_11.setTransform(-7.65,-148.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AghA6IAAhwIAWAAIAAAJIAAAAQADgHAFgCQADgDAIAAQANAAAGALQAHALAAAXQAAAXgHALQgGAKgNAAQgHAAgDgCQgEgDgEgFIAAAAIAAAkgAgJghQgBAIAAANQAAANABAIQADAHAGAAQAHAAACgHQACgIAAgNQAAgNgCgIQgCgHgHAAQgGAAgDAHg");
	this.shape_12.setTransform(-14.8,-146.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgXA1QgIgGAAgLIAVAAQAAAEADACIAEACIADABQAHAAACgFQADgEAAgGIAAgMQgEAFgFADQgDADgGAAQgNAAgGgKQgHgKAAgXIABgPQABgIACgGQADgHAGgEQAFgEAJAAQAFAAAEADQAEADAEAGIAAgJIAVAAIAABQQAAARgIAIQgIAJgTAAQgOAAgHgGgAgEgnQgDACgBADIgCAKIAAAOIAAAJIACAGIADAFQACACADAAQAEAAACgCQACgCABgDIACgHIABgKQAAgPgDgHQgCgHgHAAQgCAAgCACg");
	this.shape_13.setTransform(-27.325,-146.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AALAsIAAg6QAAgHgCgCQgDgDgFAAQgLAAAAAOIAAA4IgWAAIAAhVIAVAAIAAAKIABAAQADgGAGgDQAEgDAIAAQALAAAFAGQAGAFgBANIAAA/g");
	this.shape_14.setTransform(-35.45,-148.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgKA6IAAhVIAVAAIAABVgAgKgmIAAgTIAVAAIAAATg");
	this.shape_15.setTransform(-41.6,-149.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgdArIAAgRIAhgyIggAAIAAgSIA6AAIAAARIghAyIAhAAIAAASg");
	this.shape_16.setTransform(-47.125,-148.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgVArQgFgCgCgEQgDgDAAgEIgBgJQAAgGABgFQABgEACgDIAIgEIAJgEIAMgDQAEgCACgCQACgCAAgEQAAgFgCgDQgCgDgFAAQgFAAgDADQgCADAAAFIAAADIgUAAIAAgDQAAgHACgFQADgFAEgDQAEgDAGgCQAFgBAGAAQAKAAAFACQAGACAEADQADAEACAFIABAKIAAAtIAAAJIACAHIgVAAIgCgEIgBgFIAAAAQgDAHgGACQgEACgHAAQgHAAgDgCgAAFADIgFACQgGABgDADQgCAEAAAFQAAAFABAEQACADAFAAIADAAQADgBACgCIADgEIABgGIAAgRg");
	this.shape_17.setTransform(-54.65,-148.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AAfAsIAAg7QAAgFgCgDQgCgDgFAAQgFAAgDADQgDAEAAAIIAAA3IgVAAIAAg7QAAgFgCgDQgCgDgFAAQgFAAgDADQgDAEAAAIIAAA3IgWAAIAAhVIAVAAIAAAJIAAAAQAEgGAFgDQAGgCAHAAQAHAAAFADQAFAEACAHQADgHAFgEQAGgDAIAAQALAAAFAHQAFAGAAANIAAA9g");
	this.shape_18.setTransform(-64.725,-148.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAfhxIAcAAIAdBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_19.setTransform(-75.45,-149.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-207.3,-161.3,398.4,23), null);


(lib.SureColor_lockup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AEACCQgGgEgDgGQgDgGgBgIIAAgPIABgQQABgIADgGQAEgGAGgDQAHgDAKAAQAJAAAGACQAGADADAGQAEAFABAIIABARIAAAFIgpAAIAAANIACAGIADAEQACACADAAQAFAAADgEQACgEABgHIATAAQgBAOgHAHQgHAIgPAAQgLAAgHgEgAENBAIgDAEIgCAFIAAAJIAVAAIgBgIIgBgGIgDgEIgGgBQgDAAgCABgAjCCEQgGgCgDgDQgDgDgCgFQgBgFAAgGIAAgDIATAAIAAADQAAAGACADQADADAGAAQAFAAACgDQADgCAAgFQAAgEgCgCIgFgDIgPgFQgJgDgEgGQgFgFAAgJQAAgFACgEQACgFAEgDQADgEAGgCQAFgBAJAAQAOAAAHAFQAHAGAAAMIAAADIgTAAQAAgHgCgCQgDgDgFAAQgDAAgDACQgEACAAAFQAAADACACQACACAGACIAMAEQAKAEAEAFQAEAFAAAKQAAAGgCAFQgCAFgEADQgEADgGABQgFACgHAAQgJAAgGgCgAkDCCQgHgEgDgGQgDgGgBgIIAAgPIABgQQABgIADgGQAEgGAGgDQAGgDALAAQAJAAAGACQAGADADAGQAEAFABAIIABARIAAAFIgpAAIAAANIACAGIADAEQABABAAAAQABAAAAAAQABABABAAQAAAAABAAQAFAAADgEQACgEABgHIATAAQgBAOgHAHQgHAIgPAAQgLAAgGgEgAj3BAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABIgCAFIAAAJIAVAAIgBgIIgBgGIgDgEIgGgBQgDAAgCABgAE2CEIAAhRIAUAAIAAAKIABAAQADgFAEgEQAFgDAGAAIAEAAIAAAUIgGgBIgGABIgFADQgCABgCADIgBAHIAAAxgADmCEIgKAAQgEgBgCgDQgCgCAAgEIgBgLIAAguIgLAAIAAgOIALAAIAAgYIAVAAIAAAYIAMAAIAAAOIgMAAIAAAsQAAAFABACQACACAEAAIAFgBIAAAPgACxCEIAAg4QAAgHgCgCQgCgDgFAAQgLAAAAAOIAAA2IgVAAIAAhRIAUAAIAAAJQAEgGAFgDQAFgCAHAAQAKAAAFAFQAGAFAAANIAAA8gABqCEIAAhRIAVAAIAABRgAA8CEIAAhRIAUAAIAAAKQAEgFAEgEQAFgDAGAAIAE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gIgIAAgQIAAgEIAWAAIAAAKIACAFIAFAEIAHABQAFAAAEgDQAEgEAAgGIgBgHIgDgEQgCgDgEgBIgJgEIgNgFQgFgDgEgEQgDgEgCgFQgCgFAAgHQAAgQAJgIQAJgIAQAAQAHAAAGACQAGACAFADQAEAEADAFQACAGAAAIIAAADIgVAAQAAgIgCgEQgDgEgGAAIgGABIgEACIgCAEIgBAFQAAAFACAEQACADAHADIARAHQAHADAEADIAGAGIADAIIABAJQAAARgKAIQgKAHgSAAQgSAAgIgHgAFrgWIADgVIAHgVQAEgLAGgMQAFgLAIgLIgtAAIAAgSIBCAAIAAAQIgMAUIgJAXIgGAXIgEAXgADCgWIgCgFIgBgbQAAgGgDgEQgDgEgHAAIgMAAIAAAuIgVAAIAAhsIAoAAQAOAAAHAHQAIAHAAAOQAAAKgFAHQgEAHgJACIAAABQAIABAEAEQAEAEABAJIABAcQABAEADACIAAABgACmhTIAKAAQAHAAAFgEQAEgEAAgIQAAgPgPAAIgLAAgAAIgWIAAhSIAVAAIAAALQADgFAFgEQAEgEAHAAIADAAIAAAVIgGgBIgGABIgFACIgDAFIgBAHIAAAxgAhWgWIAAhsIAVAAIAABsgAlSgWIAAhSIAUAAIAAALQAEgFAEgEQAFgEAGAAIAEAAIAAAVIgHgBIgFABIgFACIgEAFIgBAHIAAAxgABHhDQgEgCgEgDQgDgEgCgEQgCgFAAgFQAAgFACgFQACgFADgDQAEgEAEgCQAFgCAFAAQAGAAAEACQAFACAEAEIAFAIQACAFAAAFQAAAFgCAFIgFAIQgEADgFACQgEACgGAAIgKgCgABKhrQgDABgCADIgEAGIgBAHIABAHQABADADACIAFAEIAHACQAEAAADgCQAEgBACgDQACgCACgDIABgHIgBgHIgEgGQgCgDgEgBQgDgBgEAAIgHABgABWhNIgGgLIgDAAIAAALIgGAAIAAgbIALAAQAGAAACACQADADAAAEQAAADgCACQgCACgDAAIAHALgABNhcIAFAAIADgBQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIgBgCIgBAAIgEgBIgEAAg");
	this.shape.setTransform(-135.875,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-184.3,-11.7,96.9,26.7), null);


(lib.printer_rolls = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printerRolls();
	this.instance.setTransform(-42,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_rolls, new cjs.Rectangle(-42,-86,84,172), null);


(lib.printer_light_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_light();
	this.instance.setTransform(-81.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_light_1, new cjs.Rectangle(-81.5,-11,163,22), null);


(lib.image_strip_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(87.525,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-134,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_03, new cjs.Rectangle(41,-148.5,92,291), null);


(lib.image_strip_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-0.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-133.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_02, new cjs.Rectangle(-47.5,-148.5,93.1,291), null);


(lib.image_strip_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-89.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-130.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_01, new cjs.Rectangle(-130.5,-148.5,87.1,291), null);


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
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(-179.5,-72,359,144), null);


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
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(-179.5,-72,359,144), null);


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
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.epson_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Epson_Logo();
	this.instance.setTransform(-73,-37,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-73,-37,58.6,21.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape.setTransform(61.025,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_1.setTransform(47.475,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAfABAWAVQAXAXAAAeQAAAggXAVQgWAXgfAAQgfAAgWgXgAghghQgOAOAAATQAAAUAOAOQAOAPATAAQAUAAAOgPQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_2.setTransform(31.275,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIglhSIgBAAIgMBOQAAADgEABIgSAAQgFgBABgEIAZiNQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAEAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIAuBiIAAAAIAuhiQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAZCNQABAEgFABIgTAAQgDgBgBgDIgMhOIgBAAIglBSQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_3.setTransform(13.1508,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BMQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIhUheIgBAAIAABZQAAAEgEABIgTAAQgEgBAAgEIAAiMQAAgDAEgBIADAAQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAIBUBaIAAAAIAAhVQAAgFAFAAIATAAQAEAAAAAFIAACMQAAADgEABg");
	this.shape_4.setTransform(-10,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_5.setTransform(-25.075,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBLQgEgBgCgEIgLgWIg+AAIgKAWQgBAEgFABIgSAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIBBiNQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIACAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIBACNQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAVAYIgVgtIAAAAIgUAtIApAAg");
	this.shape_6.setTransform(-39.85,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_7.setTransform(-52.925,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBKQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAB1IA0AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_8.setTransform(-64.475,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_9.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,162.5,51.5), null);


(lib.printer_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_light
	this.instance = new lib.printer_light_1();
	this.instance.setTransform(-15.3,-47.6,0.9639,0.9639,0,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},129).wait(203));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(162).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(146));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_171 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_181 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_194 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(162).to({graphics:mask_graphics_171,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_181,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_194,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(146));

	// image_03
	this.instance_1 = new lib.image_03_1();
	this.instance_1.setTransform(-100.6,-59.15,0.4808,0.4808,0,0,0,-179.7,-71.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({y:13.05},43).wait(33).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(146));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-57.3,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({y:10.3},43).to({regX:-180,regY:-71.5,scaleX:0.4799,scaleY:0.4799,x:-100.7,y:50.5},26).to({regX:-180.2,x:-100.8,y:62.85,alpha:0},8).to({regX:-179.9,regY:-71.7,scaleX:0.48,scaleY:0.48,x:-100.65,y:76.65},9).wait(33).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(146));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42).to({regX:-0.1,regY:0.1,x:-14.3,y:87.4},26).to({regX:-0.2,regY:0.2,y:100.05,alpha:0},8).to({regX:0,regY:0,x:-14.25,y:114.2},9).wait(76).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(146));

	// printer
	this.instance_4 = new lib.Printer();
	this.instance_4.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(162).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


(lib.hallway_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aq5L6IAA3yIV0AAIAAXyg");
	var mask_graphics_90 = new cjs.Graphics().p("Aq5L6IAA3yIV0AAIAAXyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:34.55,y:-161.85}).wait(90).to({graphics:mask_graphics_90,x:34.55,y:-161.85}).wait(1).to({graphics:null,x:0,y:0}).wait(269));

	// image_strip_01
	this.instance = new lib.image_strip_01();
	this.instance.setTransform(33.3,-322.9,0.545,0.545,0,0,0,0.3,0.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:-159.7},18,cjs.Ease.quadOut).wait(62).to({_off:true},1).wait(269));

	// image_strip_02
	this.instance_1 = new lib.image_strip_02();
	this.instance_1.setTransform(35,-322.9,0.545,0.545,0,0,0,0.4,0.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({y:-159.7},19,cjs.Ease.quadOut).wait(43).to({_off:true},1).wait(269));

	// image_strip_03
	this.instance_2 = new lib.image_strip_03();
	this.instance_2.setTransform(35.2,-322.9,0.545,0.545,0,0,0,0.3,0.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).to({y:-159.7},22,cjs.Ease.quadOut).wait(21).to({_off:true},1).wait(269));

	// Layer_1
	this.instance_3 = new lib.hallway();
	this.instance_3.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:true},1).wait(269));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,370,276);


// stage content:
(lib.Epson_RDrive_320x50_V1 = function(mode,startPosition,loop,reversed) {
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

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(165).to({alpha:0},11).wait(143).to({alpha:1},9).wait(23));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(251.05,23.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// printer_rolls
	this.instance_2 = new lib.printer_rolls();
	this.instance_2.setTransform(248.95,26.1,0.2775,0.2775,0,0,0,0.6,0.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({x:240.95,alpha:1},11,cjs.Ease.quadOut).wait(21));

	// printer_mc
	this.instance_3 = new lib.printer_mc("single",57);
	this.instance_3.setTransform(197.85,23.35,0.1654,0.1654,0,0,0,0.6,0.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({regX:0.5,regY:0.8,scaleX:0.1997,scaleY:0.1997,y:26.85,alpha:1},11,cjs.Ease.quadOut).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("AkZBgQgWAAAAgWIAAAAIAAiTQAAgWAWAAIAAAAIIzAAQAWAAAAAWIAAAAIAACTQAAAWgWAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:285.4093,y:24.8094}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-8.4,-6.5,8.5,6.4).s().p("Ak4DqIHIpUICpCBInIJUg");
	this.shape_1.setTransform(250.375,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-8.4,-6.5,8.5,6.4).s().p("Ak4DpIHIpTICpCBInIJUg");
	this.shape_2.setTransform(251.375,4.55);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-8.4,-6.5,8.5,6.4).s().p("Ak4DpIHIpTICpCCInIJTg");
	this.shape_3.setTransform(259.275,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-8.4,-6.5,8.5,6.4).s().p("Ak4DqIHIpUICpCCInIJTg");
	this.shape_4.setTransform(266.225,12.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:250.375,y:4}}]},347).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:259.275,y:9}}]},1).to({state:[{t:this.shape_4,p:{x:266.225,y:12.9}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{x:296.875,y:30.1}}]},1).to({state:[{t:this.shape_3,p:{x:305.775,y:35.1}}]},1).to({state:[{t:this.shape_4,p:{x:312.725,y:39}}]},1).to({state:[{t:this.shape_1,p:{x:317.675,y:41.8}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(348).to({_off:false},0).wait(1).to({x:254.325,y:6.2},0).to({_off:true},1).wait(2).to({_off:false,x:275.125,y:17.9},0).wait(1).to({x:286.025,y:24},0).to({_off:true},1).wait(4).to({_off:false,x:320.625,y:43.45},0).wait(1).to({x:321.625,y:44},0).wait(1));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(285.45,24.8,0.3741,0.3741,0,0,0,0.1,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

	// BG
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.11)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_6.setTransform(160,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.224)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_7.setTransform(160,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.333)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_8.setTransform(160,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.443)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_9.setTransform(160,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.557)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_10.setTransform(160,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.776)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.89)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_13.setTransform(160,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_14.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},319).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(32));

	// txt_onARoll
	this.instance_5 = new lib.txt_inchRoll();
	this.instance_5.setTransform(146.05,509.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(279).to({_off:false},0).to({alpha:1},9).wait(31).to({alpha:0},9).wait(32));

	// txt_onARoll
	this.instance_6 = new lib.txt_onARoll();
	this.instance_6.setTransform(144.05,528.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).to({alpha:1},10).wait(81).to({y:523.4},9,cjs.Ease.quadOut).wait(40).to({alpha:0},9).wait(32));

	// hallway_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_179 = new cjs.Graphics().p("Ar1ERIAAohIXrAAIAAIhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_1_graphics_179,x:230.85,y:25.275}).wait(181));

	// hallway_mc
	this.instance_7 = new lib.hallway_mc("synched",0,false);
	this.instance_7.setTransform(238,31.55,0.7268,0.7268,0,0,0,42.3,-161.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({regX:42.4,scaleX:0.6652,scaleY:0.6652,x:237.25,y:32.55,alpha:1,startPosition:10},10).to({regX:42.1,regY:-161.8,scaleX:0.4065,scaleY:0.4065,x:233.85,y:36.6,mode:"single",startPosition:69},81).to({_off:true},54).wait(36));

	// txt_AmazingProductivity
	this.instance_8 = new lib.txt_AmazingProductivity();
	this.instance_8.setTransform(153.3,188.55);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(45).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_Immediatelamination
	this.instance_9 = new lib.txt_Immediatelamination();
	this.instance_9.setTransform(153.3,190.55);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(61).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(39).to({alpha:0},10).to({_off:true},1).wait(240));

	// txt_consistentQuality
	this.instance_10 = new lib.txt_consistentQuality();
	this.instance_10.setTransform(153.3,186.55);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(41).to({alpha:0},10).to({_off:true},1).wait(299));

	// printer_mc
	this.instance_11 = new lib.printer_mc("single",0);
	this.instance_11.setTransform(271.75,21.2,0.2524,0.2524,0,0,0,0.8,0.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.7,regY:0.1,scaleX:0.2982,scaleY:0.2982,y:23.45,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).wait(163).to({mode:"single",startPosition:181},0).to({x:367.75,alpha:0,startPosition:194},13,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(106,22.5,309.2,30.1);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"hallway.jpg", id:"hallway"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"},
		{src:"Printer.jpg", id:"Printer"},
		{src:"printer_full_image.jpg", id:"printer_full_image"},
		{src:"printer_light.png", id:"printer_light"},
		{src:"printerRolls.png", id:"printerRolls"}
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
an.compositions['A4BDA2797E5D4A2296AB1960FDA0E060'] = {
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