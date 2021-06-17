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



(lib.endFrame = function() {
	this.initialize(img.endFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,249);


(lib.frame_01 = function() {
	this.initialize(img.frame_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,249);


(lib.frame_02 = function() {
	this.initialize(img.frame_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,249);


(lib.frame_06 = function() {
	this.initialize(img.frame_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,249);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,203);


(lib.printer_01 = function() {
	this.initialize(img.printer_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,165);


(lib.zoomIn = function() {
	this.initialize(img.zoomIn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,116);// helper functions:

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


(lib.zoomIn_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AmLGMQikikAAjoQAAjnCkikQCkikDnAAQDoAACkCkQCkCkAADnQAADoikCkQikCkjoAAQjnAAikikg");
	mask.setTransform(-0.4,-0.4);

	// Layer_1
	this.instance = new lib.zoomIn();
	this.instance.setTransform(-56.5,-58);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomIn_1, new cjs.Rectangle(-56.4,-56.4,112,112), null);


(lib.txt_work = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(41.175,5.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AATBEIgdgwIgNANIAAAjIgWAAIAAiHIAWAAIAABMIAmgmIAbAAIglAjIApA+g");
	this.shape_1.setTransform(33.75,0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgcAzIAAhhIAUAAIAAATIABAAQABgFADgDQACgEADgEIAJgEQAFgDAFAAIAFABIADAAIAAAVIgFAAIgFgBQgFAAgFADQgFACgDAEQgDAEgCAHQgCAGAAAGIAAAwg");
	this.shape_2.setTransform(25.025,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgUAwQgJgEgGgHQgHgHgDgJQgEgKAAgLQAAgKAEgKQADgJAHgHQAGgHAJgEQAJgEALAAQALAAAKAEQAJAEAHAHQAGAHADAJQAEAKgBAKQABALgEAKQgDAJgGAHQgHAHgJAEQgKAEgLAAQgLAAgJgEgAgMgeQgFADgEAEQgDAFgBAGIgCAMIACANQABAGADAFQAEAFAFADQAGADAGAAQAHAAAFgDQAGgDADgFQAEgFACgGIABgNIgBgMQgCgGgEgFQgDgEgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_3.setTransform(15.05,2.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AASAxIgShIIgSBIIgWAAIgfhhIAXAAIATBIIABAAIAShIIAWAAIARBIIABAAIAUhIIAVAAIgeBhg");
	this.shape_4.setTransform(1.7,2.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AghApQgJgKAAgTIAAg9IAVAAIAAA7QAAANAGAFQAFAFAIAAQAGAAAFgCQAEgCADgDQADgEACgFIABgKIAAg4IAVAAIAABhIgVAAIAAgOIAAAAQgEAHgIAFQgJAEgGAAQgUAAgIgJg");
	this.shape_5.setTransform(-17.1,2.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgUAwQgJgEgGgHQgHgHgDgJQgEgKAAgLQAAgKAEgKQADgJAHgHQAGgHAJgEQAJgEALAAQALAAAKAEQAJAEAHAHQAGAHADAJQAEAKgBAKQABALgEAKQgDAJgGAHQgHAHgJAEQgKAEgLAAQgLAAgJgEgAgMgeQgFADgEAEQgDAFgBAGIgCAMIACANQABAGADAFQAEAFAFADQAGADAGAAQAHAAAFgDQAGgDADgFQAEgFACgGIABgNIgBgMQgCgGgEgFQgDgEgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_6.setTransform(-28.5,2.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgmBEIAAgTIAFABIAFABIAGgBIAEgEIADgDIACgHIADgHIgmhgIAYAAIAZBIIAAAAIAZhIIAXAAIgnBmIgFANQgCAFgDAGQgEAEgFADQgGADgIAAIgPgBg");
	this.shape_7.setTransform(-39.425,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_work, new cjs.Rectangle(-46.3,-13.3,92.69999999999999,26.700000000000003), null);


(lib.txt_precisionCore = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgLAdQgGgDgEgDQgFgEgCgGQgDgGAAgHQAAgGADgGQACgGAFgDQAEgEAGgDQAGgCAFAAQAGAAAGACQAGADAEAEQAEADADAGQADAGAAAGQAAAHgDAGQgDAGgEAEQgEADgGADQgGACgGAAQgFAAgGgCgAgIgVQgFABgDADQgDADgCAFQgBAEAAAFQAAAFABAEIAFAIQADAEAFACQAEABAEAAQAFAAAEgBQAEgCADgEQAEgDABgFQACgEAAgFQAAgFgCgEQgBgFgEgDQgDgDgEgBQgEgCgFAAQgEAAgEACgAAHARIgHgOIgFAAIAAAOIgGAAIAAgiIAMAAQAGAAAEADQADACAAAGIAAAEIgCACIgDACIgEAAIAJAPgAgFgCIAGAAIAEgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIgCgCIgCAAIgDAAIgFAAg");
	this.shape.setTransform(22.925,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgbBPQgKgFgHgJQgHgIgEgMQgDgLAAgOQAAgQAEgLQAFgMAHgHQAHgIAKgEQAJgDAKAAIAKABIALADIAKAGQAEAEAEAFIAAAAIAAg9IAaAAIAACkIgZAAIAAgQIAAAAQgFAKgLAFQgKAEgKAAQgOAAgLgFgAgOgQQgGADgEAGQgEAHgCAGQgCAIAAAIQAAAIACAHQACAIAEAFQAEAGAHAEQAGADAHAAQAJAAAGgDQAHgEAEgGQAEgGACgIQACgHAAgIQAAgUgJgKQgJgLgPAAQgIAAgHAEg");
	this.shape_1.setTransform(132.325,2.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AAdA8QgFgEgBgIQgIAIgMAEQgKADgLAAQgIAAgHgCQgIgCgFgFQgGgEgEgHQgDgGAAgJQAAgLAEgHQAEgHAHgDQAGgEAJgCIAQgCIANgCIALgCQAFgCADgCQADgDAAgGQAAgFgCgEQgDgDgDgBIgIgDIgIAAQgLAAgHAEQgHAFgBAKIgaAAQAAgMAFgIQAFgHAHgFQAIgEAKgCQAJgCAKAAQAIAAAIACQAJACAHAEQAHAEAEAGQAEAHAAAKIAAA8QAAAFABACQABACAEAAIADAAIAEAAIAAASIgEABIgEABIgFABIgEAAQgIAAgGgDgAAGAFIgRACIgIACIgHADIgFAGQgBAEAAAFQAAAEACADIAGAFIAIACIAIABIAIgBQAFgBAFgDIAIgHQACgEAAgGIAAgUQgGAEgIABg");
	this.shape_2.setTransform(119.475,4.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgXA6QgLgEgHgJQgIgIgDgLQgEgMAAgOQAAgMAEgLQAEgMAHgIQAIgJALgFQAKgFANAAQAOAAALAGQALAGAIAJQAHAKADANQAEAMgCANIhXAAQAAAHACAGQACAHAEAEQAEAFAGADQAGADAHAAQAMAAAHgFQAHgFAEgKIAZAAQgCAKgGAIQgFAHgHAFQgHAGgJACQgJADgKAAQgNAAgLgFgAAfgKIgDgMIgGgKQgEgEgFgDQgGgCgGAAQgGAAgGACQgGADgEAEQgEAEgCAGQgDAGAAAGIA9AAIAAAAg");
	this.shape_3.setTransform(106.4975,4.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAaBTIAAhMQgBgNgFgGQgGgHgMAAQgFAAgGADQgFACgEAEQgDAFgCAFQgCAGgBAGIAABHIgaAAIAAilIAaAAIAAA9IABAAQAFgHAKgGQAKgFAKgBQAUAAALALQALAKAAAUIAABSg");
	this.shape_4.setTransform(93.3,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AABBMQgFgCgEgDQgEgEgBgGIgBgNIAAhGIgUAAIAAgTIAUAAIAAgkIAZAAIAAAkIAYAAIAAATIgYAAIAAA/IABAHIABAFIAEAEIAHABIAFgBIAGAAIAAAUIgIABIgJAAQgLAAgGgCg");
	this.shape_5.setTransform(76.25,2.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAaA+IAAhLQgBgOgFgGQgGgHgLAAQgGAAgGADQgEACgFAEQgDAFgCAGQgDAGAAAGIAABGIgaAAIAAh3IAZAAIAAARIABABQAGgKAJgFQALgHAKAAQAUAAALALQALAKAAAVIAABRg");
	this.shape_6.setTransform(65.95,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgMBTIAAh3IAZAAIAAB3gAgMg5IAAgZIAZAAIAAAZg");
	this.shape_7.setTransform(56.525,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgiA+IAAh3IAZAAIAAAXIAAAAQABgFAEgFIAHgIQAEgEAHgCQAFgCAGgBIAHABIADAAIAAAaIgGgBIgFAAQgHgBgGADQgGADgFAFQgDAFgCAIQgDAIAAAIIAAA6g");
	this.shape_8.setTransform(50.55,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("Ag6BUIAAijIAZAAIAAAQIAAAAQAGgLAKgEQAKgEAKgBQAOAAALAGQAKAEAHAJQAHAJAEALQADAMAAANQAAAMgDALQgDALgGAJQgHAJgJAFQgKAFgNAAIgLgCIgLgCIgKgHQgEgDgDgFIgBAAIAAA8gAgYgyQgJALAAAUQAAAJADAHQACAIAEAFQAEAFAHADQAGAEAHAAQAJAAAGgEQAGgDAEgHQAEgFACgHIACgPQAAgJgCgHQgCgIgEgFQgEgGgHgEQgGgEgIAAQgQAAgIAMg");
	this.shape_9.setTransform(38.875,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgXA6QgLgEgIgIQgIgJgEgLQgFgMAAgNQAAgNAFgMQAEgMAIgIQAJgIALgFQALgFANAAQAPAAALAGQAMAGAHAKQAHAKADANQAEAMgBANIhWAAQABAQAHAHQAIAIANAAQAKAAAHgGQAHgFACgFIAdAAQgHAVgPAKQgOAJgUAAQgOAAgLgFgAgLgiQgGACgDAEQgDAEgBAEIgCAIIA1AAQgCgMgGgHQgGgGgMAAQgHAAgFADg");
	this.shape_10.setTransform(13.0361,4.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AglA+IAAh3IAeAAIAAAWIABAAQACgFAEgFQADgFAGgDIAKgGQAGgCAGAAIAHACIAAAfIgFgBIgGgBQgJAAgHADQgFADgEAGQgDAFgCAGQgBAHgBAIIAAA2g");
	this.shape_11.setTransform(2.55,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgZA6QgLgEgIgIQgIgIgFgMQgEgLAAgOQAAgOAEgMQAFgMAIgHQAIgJALgFQAMgEANAAQAOAAALAEQAMAFAIAJQAIAHAFAMQAEAMAAAOQAAAOgEALQgFAMgIAIQgIAIgMAEQgLAFgOAAQgNAAgMgFgAgNgiQgGADgDAGQgDAFgCAHQgBAHAAAHIABANQACAHADAGQADAFAGADQAGADAHABQAIgBAGgDQAGgDADgFQADgGACgHIABgNQAAgHgBgHQgCgHgDgFQgDgGgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_12.setTransform(-9.625,4.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgdBQQgPgHgLgLQgKgMgFgQQgGgPAAgSQAAgSAGgQQAFgPAKgMQALgMAPgHQAPgGASAAQANAAANAEQAMADAJAIQALAHAFAMQAGALADAOIgkAAQgBgGgDgFQgDgGgFgEQgFgEgGgCQgHgCgGAAQgLAAgJAFQgJAFgFAIQgFAIgDAKQgCAKAAAKQAAAKACAKQADAKAFAIQAFAIAJAEQAJAFALAAQARAAAJgKQAKgKABgRIAkAAQgCAQgGAMQgFANgJAIQgKAJgNAFQgMAEgQAAQgSAAgPgGg");
	this.shape_13.setTransform(-25.2,1.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AAXA+IAAhDQAAgPgEgHQgFgHgMgBQgMAAgGAJQgGAHAAATIAAA+IghAAIAAh3IAfAAIAAAQIABAAQAGgKAKgEQAJgGAKAAQANABAJADQAIAEAFAGQAFAHACAIQACAKAAALIAABJg");
	this.shape_14.setTransform(-40.625,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AgZA6QgLgEgIgIQgIgIgFgMQgEgLAAgOQAAgOAEgMQAFgMAIgHQAIgJALgFQAMgEANAAQAOAAALAEQAMAFAIAJQAIAHAFAMQAEAMAAAOQAAAOgEALQgFAMgIAIQgIAIgMAEQgLAFgOAAQgNAAgMgFgAgNgiQgGADgDAGQgDAFgCAHQgBAHAAAHIABANQACAHADAGQADAFAGADQAGADAHABQAIgBAGgDQAGgDADgFQADgGACgHIABgNQAAgHgBgHQgCgHgDgFQgDgGgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_15.setTransform(-54.525,4.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3283").s().p("AgQBTIAAh3IAgAAIAAB3gAgQg3IAAgbIAgAAIAAAbg");
	this.shape_16.setTransform(-64.55,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AgTA9QgJgCgIgFQgIgFgFgIQgFgIgBgMIAgAAQAAAGACADIAGAHQADACAFABIAIABIAHgBIAHgCIAGgFQACgDAAgEQAAgIgKgDQgKgEgQgEIgPgDQgGgDgGgCQgFgEgDgFQgEgGABgHQgBgMAFgHQAEgIAIgEQAIgFAIgBQAKgCAJAAQAJAAAKACQAIACAHAEQAIAEAFAIQAEAHABALIgfAAQgBgJgGgEQgHgDgIAAIgFAAIgHACIgEAEQgCACAAADQAAAEAEADIAIAFIALADIANADIAOAEQAHACAGAEQAFADADAFQAEAGAAAIQAAANgFAHQgFAJgHAEQgIAFgKACQgKACgKAAQgKAAgKgCg");
	this.shape_17.setTransform(-73.8,4.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3283").s().p("AgQBTIAAh3IAhAAIAAB3gAgQg3IAAgbIAhAAIAAAbg");
	this.shape_18.setTransform(-82.95,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("AgXA6QgLgEgIgIQgHgJgFgKQgEgMAAgNQAAgNAEgMQAEgMAIgIQAHgJAMgFQALgFAOAAQALAAAJADQAKADAIAGQAHAFAGAIQAFAJAAAMIggAAQgDgVgWAAQgGAAgFAEQgGADgDAGQgDAFgCAHQgCAHABAGIABANQABAHAEAFQADAFAFAEQAFADAHABQAMgBAGgGQAHgGABgMIAgAAQgEAYgPAMQgPANgYAAQgMAAgMgFg");
	this.shape_19.setTransform(-92.4,4.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AgXA6QgLgEgIgIQgIgJgEgLQgFgMAAgNQAAgNAFgMQAEgMAIgIQAJgIALgFQALgFANAAQAPAAALAGQAMAGAHAKQAHAKADANQAEAMgBANIhWAAQABAQAHAHQAIAIANAAQAKAAAHgGQAHgFACgFIAdAAQgHAVgPAKQgOAJgUAAQgOAAgLgFgAgLgiQgGACgDAEQgDAEgBAEIgCAIIA1AAQgCgMgGgHQgGgGgMAAQgHAAgFADg");
	this.shape_20.setTransform(-105.8639,4.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("AgmA+IAAh3IAgAAIAAAWIAAAAQADgFADgFQADgFAGgDIALgGQAFgCAGAAIAHACIAAAfIgFgBIgGgBQgJAAgHADQgFADgEAGQgDAFgCAGQgBAHgBAIIAAA2g");
	this.shape_21.setTransform(-116.35,4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("AhBBTIAAilIBKAAQAPAAALAFQALAFAHAGQAHAIADAJQADAKAAAKQAAAKgDAKQgDAJgHAHQgHAHgLAFQgLAFgPgBIglAAIAAA8gAgcgEIAcAAIALgBQAGgBAEgCQAEgDADgFQADgFAAgIQAAgHgDgFQgDgFgEgDQgEgDgGAAIgLgBIgcAAg");
	this.shape_22.setTransform(-128.675,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_precisionCore, new cjs.Rectangle(-138.8,-14.4,280.8,31.700000000000003), null);


(lib.txt_inkCartridges = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgUBCQgKgCgJgGQgIgFgGgJQgGgJAAgMIAiAAQAAAFADAEQACAEADADQAEADAFABIAJABIAIgBIAHgCQAEgCACgEQACgDAAgEQAAgJgKgDQgLgEgRgFIgQgDQgHgDgGgDQgGgEgDgGQgDgFgBgJQABgNAEgHQAFgIAIgFQAIgEAKgDQAKgBAKAAQAKAAAKACQAKABAHAGQAJAEAFAIQAEAIACAMIgiAAQgBgKgHgEQgHgEgJAAIgGABIgGACIgGADQgBACAAAFQAAAEADAEQAEACAFACIANAEIAOADIAPAEQAHADAHADQAFAEAEAGQADAGAAAJQAAANgFAIQgGAJgHAGQgJAFgKACQgLACgLAAQgKAAgLgCg");
	this.shape.setTransform(72.25,3.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgZA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgNAFgNQAFgMAJgKQAJgJAMgFQAMgFANAAQARAAAMAGQANAGAHALQAIALAEAOQADAOgBANIhcAAQABASAIAHQAIAJAOgBQAKAAAIgFQAIgGACgGIAfAAQgIAYgPAKQgQAKgWAAQgOAAgMgFgAgNgmQgFAEgEAEQgDAEgBAFIgCAIIA5AAQgDgOgGgGQgHgIgMABQgIAAgGACg");
	this.shape_1.setTransform(58.5611,3.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgVBYQgKgCgIgFQgIgFgGgIQgFgHgBgMIAjAAQADAKAHAEQAHAEAJAAQAPAAAHgJQAHgJgBgOIAAgRIAAAAQgGALgKAEQgLAFgLAAQgOAAgLgFQgKgFgHgJQgHgJgDgLQgDgMAAgNQAAgNADgLQAEgMAIgJQAHgIAJgFQALgFANgBQAMAAAKAFQAJAFAHALIAAAAIAAgRIAiAAIAAB3QAAAIgCAKQgCALgHAIQgHAIgNAHQgOAFgUAAQgKAAgKgCgAgLg8QgGADgDAFQgFAFgBAHQgCAGABAIIABAOQABAGAEAGQADAFAGADQAFAEAHAAQAIAAAGgEQAGgCADgGQADgEACgGQACgGAAgHIgBgPQgCgHgDgGQgDgGgGgDQgGgDgJAAQgGAAgFADg");
	this.shape_2.setTransform(43.7,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AggBVQgLgGgHgJQgHgKgEgNQgEgMAAgOQAAgMAEgMQAEgLAHgKQAHgJALgGQAKgFAPAAQAKAAAKAEQALAGAGAJIAAAAIAAhBIAkAAIAACyIgiAAIAAgRIgBAAQgGALgKAEQgKAFgMAAQgOAAgLgGgAgNgOQgGADgDAGQgEAFgCAIQgBAGAAAJQAAAHACAIQABAIAEAFQAEAGAGAEQAGAEAHgBQAJAAAGgDQAFgEAEgFQAEgHABgHIABgQIgBgPQgBgHgEgFQgEgGgGgDQgFgEgJABQgIgBgGAEg");
	this.shape_3.setTransform(28.675,0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgRBZIAAiAIAjAAIAACAgAgRg7IAAgdIAjAAIAAAdg");
	this.shape_4.setTransform(18.275,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_5.setTransform(11.075,2.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAVBVIgQgBQgGgCgGgDQgFgDgEgGQgDgGAAgKIAAhLIgVAAIAAgYIAVAAIAAgmIAiAAIAAAmIAbAAIAAAYIgbAAIAAA/QAAAJADADQAEADAJAAIAFAAIAGgBIAAAcIgKABg");
	this.shape_6.setTransform(1.25,1.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_7.setTransform(-7.025,2.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgjBCQgIgCgGgFQgGgFgEgHQgDgIAAgKQAAgLAEgHQADgHAHgEQAGgDAIgCIAQgEIAPgCIAOgCQAFgBAEgEQADgDAAgFQAAgGgCgDQgCgDgDgCQgDgCgEgBIgJgBQgKAAgFAFQgHAFgBAKIgjAAQAAgMAHgJQAEgIAJgFQAJgFALgCQAKgCAKAAIATABQALACAHAEQAJADAGAIQAEAGAAANIAABBIABARQABAIADAFIgkAAIgBgGIgCgHQgIAIgMAFQgKADgMAAQgKAAgHgCgAASAFIgIABIgIABIgIABIgIADIgGADIgEAGQgCADAAAFQAAAEACADQABAEADACIAHACIAIABQAKAAAGgDQAFgEADgFQADgEAAgFIABgIIAAgNg");
	this.shape_8.setTransform(-19.6,3.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgYA/QgMgFgJgJQgIgJgFgLQgFgMAAgPQAAgOAFgNQAEgNAIgKQAJgJAMgFQAMgFAPAAQAMAAAKACQALAEAIAGQAJAGAFAJQAFAKABAMIgjAAQgDgXgXABQgHAAgGADQgGAEgEAGQgDAHgCAHQgBAHAAAGIABAPQACAHADAGQAEAFAFAFQAGAEAHgBQANAAAHgHQAHgHACgMIAiAAQgEAZgQAOQgRAOgaAAQgNAAgMgFg");
	this.shape_9.setTransform(-33.525,3.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AAVBZIgjg5IgNANIAAAsIgkAAIAAixIAkAAIAABeIAsgtIApAAIgwAuIA2BSg");
	this.shape_10.setTransform(-53.7,0.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AAZBCIAAhIQAAgQgFgIQgFgHgNAAQgNAAgHAIQgGAJAAAUIAABCIgkAAIAAiAIAiAAIAAASIABAAQAHgLAKgFQAKgFALAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAAMIAABOg");
	this.shape_11.setTransform(-68.925,2.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgRBZIAAiAIAjAAIAACAgAgRg7IAAgdIAjAAIAAAdg");
	this.shape_12.setTransform(-79.375,0.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inkCartridges, new cjs.Rectangle(-84.6,-16.9,169.2,33.8), null);


(lib.txt_highCapacity = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgwBVIAAgXIAGABIAGABQAFAAADgBQADgCADgCIADgFIACgIIAEgJIgvh7IAeAAIAfBcIABAAIAfhcIAcAAIgvCCIgHARQgEAHgDAGQgFAFgHAEQgHAEgLAAIgSgCg");
	this.shape.setTransform(71.9,5.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AABBPQgFgCgEgEQgEgEgBgGIgCgOIAAhIIgUAAIAAgUIAUAAIAAglIAbAAIAAAlIAYAAIAAAUIgYAAIAABBIAAAIIACAGIAEACIAHABIAGAAIAFgBIAAAWIgJABIgIAAQgLAAgHgCg");
	this.shape_1.setTransform(61.375,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgNBWIAAh7IAbAAIAAB7gAgNg7IAAgaIAbAAIAAAag");
	this.shape_2.setTransform(54.475,0.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgXA8QgLgEgIgJQgHgIgFgMQgDgMAAgNQgBgOAEgMQAEgMAIgJQAIgJALgFQALgGAPAAQAKABAKADQAKACAIAGQAHAFAFAIQAFAJABALIgcAAQgBgLgIgGQgHgGgMAAQgEAAgHACQgGACgFAFQgEAFgEAIQgEAJABAOQAAAHABAIQACAIAFAFQADAGAHAEQAGAEAHAAQAMgBAJgGQAHgIACgOIAcAAQgFAZgOANQgPANgYgBQgNABgLgGg");
	this.shape_3.setTransform(44.8,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAfA+QgFgDgCgJQgJAIgMAEQgKADgLAAQgJAAgIgCQgHgCgGgEQgGgFgDgHQgEgHAAgJQAAgLAFgHQADgIAIgDQAGgEAJgCIARgCIANgDIAMgCQAFgBADgDQADgDAAgGQAAgFgDgDQgCgEgDgCIgJgCIgHgBQgMAAgHAFQgIAFgBAKIgbAAQABgMAEgIQAGgIAIgFQAHgEAKgCQAKgCAKgBQAJABAIACQAJACAHADQAHAFAEAHQAFAHAAAJIAABAIABAGQABACAEABIADAAIAEAAIAAASIgDACIgGABIgEAAIgEAAQgJAAgFgDgAAGAFIgRADIgIACIgIADQgDACgCAEQgCAEAAAFQABAEACAEIAGAEIAIADIAJABIAIgCQAGgBAEgCQAFgDADgFQADgFAAgGIAAgUQgGAEgJABg");
	this.shape_4.setTransform(31.55,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("Ag8BXIAAipIAaAAIAAARIAAAAQAFgLALgFQAKgFALAAQAPAAALAGQALAFAHAJQAIAJADAMQAEAMAAANQAAANgEALQgDALgHAJQgGAJgKAGQgLAFgNAAIgLgBIgMgDQgFgDgFgEQgFgDgDgFIAAAAIAAA+gAgZg0QgJAMAAAUQAAAJACAIQACAHAFAGQAFAGAGADQAHADAHAAQAJAAAHgDQAGgEAFgGQADgGACgHQACgIAAgIQAAgJgCgIQgCgHgEgGQgFgHgHgDQgGgEgIAAQgQAAgJAMg");
	this.shape_5.setTransform(17.4,5.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AAfA+QgFgDgCgJQgJAIgMAEQgKADgLAAQgJAAgIgCQgHgCgGgEQgGgFgDgHQgEgHAAgJQAAgLAFgHQADgIAIgDQAGgEAJgCIARgCIANgDIAMgCQAFgBADgDQADgDAAgGQAAgFgDgDQgCgEgDgCIgJgCIgHgBQgMAAgHAFQgIAFgBAKIgbAAQABgMAEgIQAGgIAIgFQAHgEAKgCQAKgCAKgBQAJABAIACQAJACAHADQAHAFAFAHQAEAHAAAJIAABAIABAGQABACAEABIADAAIAEAAIAAASIgDACIgFABIgFAAIgEAAQgJAAgFgDgAAGAFIgRADIgIACIgIADQgDACgCAEQgCAEAAAFQABAEACAEIAGAEIAIADIAIABIAJgCQAGgBAEgCQAFgDADgFQADgFAAgGIAAgUQgGAEgJABg");
	this.shape_6.setTransform(3.2,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgXA8QgLgEgIgJQgHgIgFgMQgDgMAAgNQgBgOAEgMQAEgMAIgJQAIgJALgFQALgGAPAAQAKABAKADQAKACAIAGQAHAFAFAIQAFAJABALIgcAAQgBgLgIgGQgHgGgMAAQgEAAgHACQgGACgFAFQgEAFgEAIQgEAJABAOQAAAHABAIQACAIAFAFQADAGAHAEQAGAEAHAAQAMgBAJgGQAHgIACgOIAcAAQgFAZgOANQgPANgYgBQgNABgLgGg");
	this.shape_7.setTransform(-10.55,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgiANIAAgZIBFAAIAAAZg");
	this.shape_8.setTransform(-22.1,2.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AAbBWIAAhOQgBgOgFgHQgGgGgNAAQgFAAgFACQgGADgEAEQgEAFgCAFQgDAGABAHIAABJIgbAAIAAirIAbAAIAABAIAAAAQAFgIAKgGQAKgGALAAQAVAAAMALQAMAKgBAVIAABVg");
	this.shape_9.setTransform(-33.8,0.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgSBWQgKgBgIgFQgHgFgGgHQgFgHgBgLIAbAAQACAGACADQADAEAEACQAEACAFAAIAJABQARAAAHgIQAIgIAAgQIAAgTQgGALgKAGQgKAFgLAAQgPAAgKgFQgKgFgHgJQgHgJgDgLQgDgMAAgNQAAgNADgLQAEgLAIgJQAHgIAKgFQALgFANAAQALAAAJAFQAKAFAGAKIAAgRIAbAAIAAB1QAAAcgPAOQgQANgdAAQgJAAgJgCgAgPg+QgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAHACAIQACAHAEAFQAEAFAGAEQAGAEAIAAQAJAAAGgEQAGgEAEgGQAEgFACgIIACgQQAAgIgCgHQgCgHgEgGQgEgGgGgDQgHgEgIAAQgIAAgHAEg");
	this.shape_10.setTransform(-48.225,5.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgNBWIAAh7IAbAAIAAB7gAgNg7IAAgaIAbAAIAAAag");
	this.shape_11.setTransform(-58.175,0.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AAnBWIAAhNIhNAAIAABNIgeAAIAAirIAeAAIAABFIBNAAIAAhFIAeAAIAACrg");
	this.shape_12.setTransform(-69.9,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highCapacity, new cjs.Rectangle(-80.5,-16.3,161.1,32.6), null);


(lib.txt_fastPrintSpeed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgTA6QgJgDgHgEQgHgFgEgIQgDgIgBgJIAZAAQABAKAIAFQAHAEAJAAIAIAAIAJgCQAEgCACgDQADgDgBgFQAAgEgDgEQgDgDgGgBIgLgEIgNgDIgNgDQgHgCgFgDQgFgEgDgGQgDgFAAgJQAAgJAEgHQAFgGAHgEQAHgEAIgBIAQgCQAIAAAIACQAIACAHAEQAGAEAEAHQAFAGABAKIgaAAQgCgJgHgDQgGgDgIAAIgGAAIgHACIgFAEQgCACAAADQAAAFADADQADADAFACIALADIAOADIANAEQAHACAFADQAFADADAGQAEAGAAAIQAAALgFAGQgFAIgHADQgIAFgJACQgJACgIAAQgKAAgJgCg");
	this.shape.setTransform(86.325,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgZBMQgKgGgHgIQgHgHgDgMQgEgLAAgNQAAgPAFgKQAEgLAHgIQAHgHAJgEQAJgDAJAAIAKABIAKADQAGACADAEQAFAEADAEIAAAAIAAg6IAaAAIAACcIgZAAIAAgPIAAAAQgFAKgJAEQgKAEgKAAQgOAAgJgEgAgNgQQgGAEgEAGQgEAGgCAHQgBAGAAAJIABANQACAIAEAFQAEAFAGAEQAGADAHAAQAJAAAFgDQAHgDADgHQAFgFACgIQABgHAAgHQAAgTgJgKQgIgKgOAAQgIAAgGADg");
	this.shape_1.setTransform(73.45,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgWA4QgKgFgHgIQgHgHgEgMQgEgLAAgNQAAgLAEgKQAEgLAHgJQAHgIALgFQAKgFALAAQAOAAALAGQAKAFAHAJQAHAKADAMQAEAMgCALIhSAAQAAAIABAGQACAGAEAEQAEAFAFADQAGACAHAAQALAAAHgFQAHgEADgJIAYAAQgCAIgFAIQgFAHgHAFQgHAFgIADQgJACgJAAQgMAAgLgEgAAdgJQAAgGgDgGQgCgFgDgEQgEgEgFgDQgFgCgHAAQgFAAgGACQgFADgEAEQgEAEgCAFQgCAFAAAHIA5AAIAAAAg");
	this.shape_2.setTransform(60.9725,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgWA4QgKgFgHgIQgHgHgEgMQgEgLAAgNQAAgLAEgKQAEgLAHgJQAHgIALgFQAKgFALAAQAOAAALAGQAKAFAHAJQAHAKADAMQAEAMgCALIhSAAQAAAIABAGQACAGAEAEQAEAFAFADQAGACAHAAQALAAAHgFQAHgEADgJIAYAAQgCAIgFAIQgFAHgHAFQgHAFgIADQgJACgJAAQgMAAgLgEgAAdgJQAAgGgDgGQgCgFgDgEQgEgEgFgDQgFgCgHAAQgFAAgGACQgFADgEAEQgEAEgCAFQgCAFAAAHIA5AAIAAAAg");
	this.shape_3.setTransform(48.6725,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("Ag3BQIAAibIAXAAIAAAPIABAAQAFgKAKgEQAJgEAKgBQANAAAKAGQAKAEAHAIQAHAJADAKQADAMAAAMQAAAMgDAJQgDALgGAJQgGAIgJAEQgJAFgNABIgKgCIgKgDIgKgFQgEgEgDgEIAAAAIAAA5gAgXgvQgIAKAAATQAAAIACAIQACAGAEAFQAEAFAGADQAGADAHAAQAIAAAGgDQAGgDAEgGQAEgGACgFIABgPQAAgIgCgIQgCgGgEgGQgEgFgGgEQgGgEgHAAQgPAAgIAMg");
	this.shape_4.setTransform(35.975,4.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgXBPQgMgDgJgHQgIgHgFgLQgGgLAAgOIAbAAQAAAJADAGQADAHAGAEQAFAEAIACQAGACAIAAQAJAAAGgCQAHgCAEgEQAEgDABgEQACgEAAgFQAAgJgDgEQgFgFgEgCIgUgFIgagHQgLgDgGgDQgHgFgEgFQgEgFgBgGQgCgGAAgGQAAgMAEgJQAGgIAIgGQAIgGAKgCQALgEAKAAQALAAAMAEQAKADAJAHQAHAGAFAJQAGAKAAAMIgcAAQgBgQgJgFQgJgHgOAAIgKABQgFABgEACQgEACgDAEQgDAFAAAFQAAAJAFAFQAGAFAIACIAHACIAMADIAPAEIAKADQAIACAFAEQAHAEADAFQAEAFACAHQACAGAAAGQAAANgFAKQgGAJgJAGQgJAGgLACQgLAEgMAAQgMAAgMgEg");
	this.shape_5.setTransform(21.75,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AABBIQgFgBgDgDQgEgFgBgFIgBgNIAAhBIgTAAIAAgTIATAAIAAgiIAYAAIAAAiIAWAAIAAATIgWAAIAAA7IAAAHIACAFIADADIAHABIAFgBIAFAAIAAATIgIABIgIAAQgKAAgGgCg");
	this.shape_6.setTransform(4.5,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AAZA6IAAhGQAAgNgFgHQgGgFgLgBQgGAAgEADQgGACgDAEQgEAFgCAFQgCAFAAAHIAABBIgZAAIAAhwIAYAAIAAAQIABABQAFgJAJgGQAJgFALgBQASABAMAJQAKAKAAAUIAABMg");
	this.shape_7.setTransform(-5.4,2.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgLBOIAAhwIAXAAIAABwgAgLg2IAAgXIAXAAIAAAXg");
	this.shape_8.setTransform(-14.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AggA6IAAhwIAXAAIAAAWIAAAAQACgFADgFIAHgIQAEgDAGgCQAFgCAGgBIAGABIADAAIAAAYIgFAAIgGAAQgGgBgFADQgGADgEAEQgDAFgDAHQgCAIAAAIIAAA2g");
	this.shape_9.setTransform(-20.25,2.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("Ag8BOIAAibIBEAAQAQAAALAEQALAFAFAIQAGAGACAJQACAJAAAHQAAAHgCAJQgCAIgGAHQgFAHgLAEQgLAFgQAAIgpAAIAAA8gAghgDIAnAAIAKgBQAFgCAEgDQAEgDACgEQADgGAAgHQAAgIgCgFQgDgFgDgDQgEgDgFgBIgKgBIgoAAg");
	this.shape_10.setTransform(-31.825,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AASBKIgNgBQgGgBgFgCQgFgDgDgGQgDgEAAgKIAAhCIgTAAIAAgUIATAAIAAgiIAfAAIAAAiIAWAAIAAAUIgWAAIAAA4QAAAIACACQADADAHAAIAGAAIAEAAIAAAXIgJABg");
	this.shape_11.setTransform(-50.7,1.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgSA6QgJgCgIgFQgHgEgFgIQgEgHgBgMIAeAAQAAAFACAEQADADADACQADADAEABIAIABIAHAAIAHgDQACgCACgDQADgCAAgFQAAgGgKgEQgJgEgQgDIgNgDQgHgCgFgDQgFgDgDgGQgDgFAAgHQAAgMAEgGQAFgIAGgDQAIgFAIgBQAKgCAIAAQAJAAAIACQAJACAHAEQAHAEAEAHQAFAHABALIgeAAQAAgKgHgCQgGgEgIAAIgFAAIgFACIgFADQgBACgBADQAAAFAEACIAHAFIALADIAMACIAOAFQAHACAFADQAFADADAFQACAFAAAJQAAAKgEAJQgEAHgIAEQgHAFgJACQgJACgKAAQgJAAgKgCg");
	this.shape_12.setTransform(-60.5,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgfA6QgHgCgFgFQgGgEgDgGQgCgGAAgJQAAgJADgHQAEgGAEgEQAGgCAHgCIAOgDIAOgDIALgCQAGgBACgCQADgDAAgEQAAgFgCgEQgBgCgDgCQgCgCgEgBIgIAAQgIAAgGAEQgFAEAAAJIggAAQABgLAFgHQAEgIAIgDQAHgFAJgCQAKgCAIAAIASABQAIACAIADQAHAEAFAGQAEAGABAKIAAA6IABAQQAAAGACAEIgfAAIgBgGIgCgFQgHAIgKADQgJADgLAAQgIAAgHgCgAAQAEIgHACIgIABIgGABIgGACIgHADIgDAEQgDAEAAADQAAAFADACQABADACACIAHADIAHAAQAIAAAFgDQAFgDADgEQACgEAAgFIABgHIAAgLg");
	this.shape_13.setTransform(-72.85,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("Ag2BOIAAibIBtAAIAAAcIhLAAIAAAlIBBAAIAAAZIhBAAIAABBg");
	this.shape_14.setTransform(-85.175,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fastPrintSpeed, new cjs.Rectangle(-94.2,-15.1,188.5,30.299999999999997), null);


(lib.txt_enhance = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AggBCIgIgBIAAgWIAIABIAIAAQAFgBADgDQACgEAAgEIgBgGIgihbIAcAAIAWBCIAAAAIAWhCIAbAAIgpBtQgEAMgHAFQgHAFgOAAg");
	this.shape.setTransform(73.675,4.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgbAyQgFgCgFgDQgFgEgDgFQgCgGAAgIQAAgIADgFQADgGAEgDQAFgCAGgCIANgCIALgCIAKgCQAEgBADgCQACgCAAgEQAAgFgBgCIgEgEIgGgCIgGgBQgHAAgFAEQgEADgBAIIgbAAQABgJAEgHQAEgGAGgEQAHgDAIgCQAIgCAIAAIAOABQAIABAGAEQAHADAEAFQADAFAAAJIAAAyIABANQABAGACADIgbAAIgBgEIgCgFQgGAGgIADQgJADgIAAQgHAAgHgCgAANAEIgGABIgFABIgGABIgGABIgFADIgEAEQgBADAAADQAAAEABACQABADADABIAFACIAHABQAGAAAFgDQAEgCACgEQADgEAAgEIAAgGIAAgKg");
	this.shape_1.setTransform(62.9,2.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AASAxIgShBIAAAAIgQBBIgcAAIgfhhIAcAAIASBCIABAAIAQhCIAZAAIARBCIAThCIAbAAIgfBhg");
	this.shape_2.setTransform(49.425,2.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgTAwQgJgEgHgHQgGgGgEgKQgDgJAAgMQAAgKADgJQAEgKAHgHQAGgHAKgEQAJgEAKAAQAMAAAKAFQAJAFAGAIQAGAIADALQACAKAAALIhGAAQAAANAGAGQAGAGALAAQAIAAAGgEQAGgFABgEIAYAAQgGASgMAHQgLAIgRAAQgLAAgJgEgAgKgcIgGAFQgDADgBAEIgBAHIArAAQgCgLgFgFQgFgFgKAAQgFAAgFACg");
	this.shape_3.setTransform(30.3042,2.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AATBEIAAg4QAAgMgEgFQgEgGgJAAQgLAAgEAHQgFAFgBAPIAAA0IgaAAIAAiHIAaAAIAAAzIABAAQAFgIAJgEQAGgEAIAAQALAAAHADQAGADAFAFQADAFACAIQACAHAAAIIAAA9g");
	this.shape_4.setTransform(18.9,0.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AAEA/QgEAAgFgDQgEgCgCgFQgDgFAAgHIAAg5IgQAAIAAgSIAQAAIAAgdIAaAAIAAAdIAUAAIAAASIgUAAIAAAwQAAAHADACQABACAIAAIADAAIAFgBIAAAVIgIABIgIAAg");
	this.shape_5.setTransform(9.5,0.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgTAwQgJgEgHgHQgGgGgEgKQgDgJAAgMQAAgKADgJQAEgKAHgHQAGgHAKgEQAJgEAKAAQAMAAAKAFQAJAFAGAIQAGAIADALQACAKAAALIhGAAQAAANAGAGQAGAGALAAQAIAAAGgEQAGgFABgEIAYAAQgGASgMAHQgLAIgRAAQgLAAgJgEgAgKgcIgGAFQgDADgBAEIgBAHIArAAQgCgLgFgFQgFgFgKAAQgFAAgFACg");
	this.shape_6.setTransform(-5.1458,2.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgSAwQgJgEgGgGQgHgHgEgJQgEgJAAgLQABgLADgKQAEgJAGgIQAHgHAIgEQAKgEALAAQAJAAAHADQAJACAGAFQAGAEAEAHQAFAHAAAKIgaAAQgDgRgRAAQgGAAgEADQgEADgDAEQgDAFgBAGIgCAKIACAKQABAGADAEQACAFAEADQAFADAFAAQAKAAAFgGQAFgFACgJIAaAAQgDATgNAKQgMALgTAAQgLAAgJgEg");
	this.shape_7.setTransform(-16.3,2.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AATAzIAAg3QAAgMgEgGQgDgGgKAAQgLAAgFAGQgEAHgBAPIAAAzIgaAAIAAhhIAZAAIAAANIABAAQAFgJAJgDQAGgFAJAAQALAAAHAEQAHACAEAGQADAFADAHQABAIAAAJIAAA8g");
	this.shape_8.setTransform(-27.8,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgaAyQgHgCgEgDQgFgEgCgFQgDgGAAgIQAAgIADgFQADgGAFgDQAEgCAHgCIALgCIANgCIAJgCQAFgBACgCQACgCABgEQgBgFgBgCIgEgEIgFgCIgHgBQgHAAgFAEQgEADgBAIIgbAAQABgJAEgHQAEgGAHgEQAGgDAIgCQAIgCAHAAIAQABQAHABAGAEQAGADAEAFQAFAFAAAJIAAAyIAAANQABAGACADIgcAAIgBgEIAAgFQgHAGgJADQgHADgKAAQgGAAgGgCgAANAEIgFABIgHABIgFABIgGABIgFADQgDACAAACQgCADAAADQAAAEACACQAAADADABIAGACIAFABQAIAAAEgDQAFgCABgEQADgEAAgEIABgGIAAgKg");
	this.shape_9.setTransform(-39.3,2.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AATBEIAAg4QAAgMgEgFQgDgGgKAAQgLAAgFAHQgEAFAAAPIAAA0IgbAAIAAiHIAbAAIAAAzIABAAQAFgIAHgEQAIgEAHAAQALAAAHADQAGADAEAFQAFAFACAIQABAHAAAIIAAA9g");
	this.shape_10.setTransform(-50.65,0.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AATAzIAAg3QAAgMgEgGQgDgGgLAAQgJAAgGAGQgEAHAAAPIAAAzIgbAAIAAhhIAaAAIAAANIAAAAQAFgJAIgDQAIgFAIAAQALAAAHAEQAGACAEAGQAEAFADAHQABAIAAAJIAAA8g");
	this.shape_11.setTransform(-62.25,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgTAwQgJgEgHgHQgGgGgEgKQgDgJAAgMQAAgKADgJQAEgKAHgHQAGgHAKgEQAJgEAKAAQAMAAAKAFQAJAFAGAIQAGAIADALQACAKAAALIhGAAQAAANAGAGQAGAGALAAQAIAAAGgEQAGgFABgEIAYAAQgGASgMAHQgLAIgRAAQgLAAgJgEgAgKgcIgGAFQgDADgBAEIgBAHIArAAQgCgLgFgFQgFgFgKAAQgFAAgFACg");
	this.shape_12.setTransform(-73.6958,2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enhance, new cjs.Rectangle(-81.1,-13.3,162.3,26.700000000000003), null);


(lib.txt_engineered = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgUAwQgJgEgGgHQgHgHgDgJQgEgKAAgLQAAgKAEgKQADgJAHgHQAGgHAJgEQAJgEALAAQALAAAKAEQAJAEAHAHQAGAHADAJQAEAKgBAKQABALgEAKQgDAJgGAHQgHAHgJAEQgKAEgLAAQgLAAgJgEgAgMgeQgFADgEAEQgDAFgBAGIgCAMIACANQABAGADAFQAEAFAFADQAGADAGAAQAHAAAFgDQAGgDADgFQAEgFACgGIABgNIgBgMQgCgGgEgFQgDgEgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape.setTransform(57.35,2.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AABA/QgEgCgDgDQgDgDgBgFIgBgLIAAg5IgRAAIAAgQIARAAIAAgdIAUAAIAAAdIAUAAIAAAQIgUAAIAAA0IABAGIABAEIADACIAGABIAEAAIAFgBIAAARIgHABIgHAAQgJAAgFgBg");
	this.shape_1.setTransform(48.075,0.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgWBBQgIgEgGgHQgGgHgDgKQgDgJAAgLQAAgNAEgJQAEgKAGgGQAGgGAHgDQAIgEAIAAIAIABIAJADIAIAFQAEADADAEIAAAAIAAgyIAWAAIAACHIgVAAIAAgOIAAAAQgFAJgIADQgIAEgJAAQgLAAgJgEgAgLgNQgFADgEAFQgDAFgBAGIgCAMIACANQABAGAEAFQADAEAFADQAFADAGAAQAHAAAGgDQAFgDADgFQAEgFABgGIACgNQAAgQgIgIQgHgKgMAAQgHABgFADg");
	this.shape_2.setTransform(33.025,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgTAwQgJgEgGgHQgGgGgDgKQgDgJAAgMQAAgJADgKQAEgJAGgHQAGgHAJgEQAIgFAKAAQAMAAAJAFQAJAFAHAIQAGAIACAKQADALgBAKIhHAAIABALQACAFADAEQADAEAFACQAFADAGAAQAJAAAGgEQAGgEADgJIAUAAQgBAIgEAHQgFAGgGAEQgFAFgIACQgHACgIAAQgLAAgJgEgAAZgIQAAgFgCgEQgCgFgDgEQgDgDgFgCQgEgDgGAAQgEAAgFACQgFACgDAEQgDAEgCAEQgCAFAAAFIAxAAIAAAAg");
	this.shape_3.setTransform(21.975,2.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgcAzIAAhhIAUAAIAAATIABAAQABgFADgDQACgEADgEIAJgEQAFgDAFAAIAFABIADAAIAAAVIgFAAIgFgBQgFAAgFADQgFACgDAEQgDAEgCAHQgCAGAAAGIAAAwg");
	this.shape_4.setTransform(13.625,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgTAwQgJgEgGgHQgGgGgDgKQgDgJAAgMQAAgJADgKQAEgJAGgHQAGgHAJgEQAIgFAKAAQAMAAAJAFQAJAFAHAIQAGAIACAKQADALgBAKIhHAAIABALQACAFADAEQADAEAFACQAFADAGAAQAJAAAGgEQAGgEADgJIAUAAQgBAIgEAHQgFAGgGAEQgFAFgIACQgHACgIAAQgLAAgJgEgAAZgIQAAgFgCgEQgCgFgDgEQgDgDgFgCQgEgDgGAAQgEAAgFACQgFACgDAEQgDAEgCAEQgCAFAAAFIAxAAIAAAAg");
	this.shape_5.setTransform(4.075,2.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgTAwQgJgEgGgHQgGgGgDgKQgDgJAAgMQAAgJADgKQAEgJAGgHQAGgHAJgEQAIgFAKAAQAMAAAJAFQAJAFAHAIQAGAIACAKQADALgBAKIhHAAIABALQACAFADAEQADAEAFACQAFADAGAAQAJAAAGgEQAGgEADgJIAUAAQgBAIgEAHQgFAGgGAEQgFAFgIACQgHACgIAAQgLAAgJgEgAAZgIQAAgFgCgEQgCgFgDgEQgDgDgFgCQgEgDgGAAQgEAAgFACQgFACgDAEQgDAEgCAEQgCAFAAAFIAxAAIAAAAg");
	this.shape_6.setTransform(-6.825,2.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AAWAzIAAg9QgBgMgFgFQgEgFgJgBQgFAAgEACQgFADgDADQgDAEgCAEQgCAFAAAFIAAA6IgVAAIAAhhIAUAAIAAANIABABQAFgIAHgEQAJgFAIgBQARAAAJAJQAJAIAAARIAABDg");
	this.shape_7.setTransform(-18,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgKBEIAAhhIAVAAIAABhgAgKguIAAgVIAVAAIAAAVg");
	this.shape_8.setTransform(-26.075,0.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgOBEQgIgBgGgDQgGgEgEgGQgEgGgBgJIAVAAQABAFADADQACADADABQADACAEABIAHAAQANAAAGgGQAGgHAAgMIAAgQIAAAAQgFAJgIAFQgHAEgJAAQgLAAgJgEQgIgEgFgIQgGgHgCgIQgDgJAAgLQAAgJADgKQADgIAGgHQAGgHAIgEQAIgEALAAQAIAAAIAEQAIAEAEAJIAAAAIAAgOIAWAAIAABcQAAAWgMALQgNALgXAAIgOgCgAgLgxQgFADgDAFQgDAFgCAGIgBANQAAAGACAFQABAGADADQADAFAFADQAFADAGAAQAHAAAFgDQAFgDADgFQADgDACgHQABgGAAgHIgBgMQgCgFgDgFQgDgEgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_9.setTransform(-34.525,4.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AAWAzIAAg9QgBgMgFgFQgEgFgKgBQgEAAgFACQgEADgDADQgDAEgCAEQgBAFAAAFIAAA6IgWAAIAAhhIAVAAIAAANIAAABQAFgIAHgEQAIgFAJgBQARAAAJAJQAJAIAAARIAABDg");
	this.shape_10.setTransform(-45.75,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgwBEIAAiHIBgAAIAAAVIhJAAIAAAjIBEAAIAAATIhEAAIAAAnIBLAAIAAAVg");
	this.shape_11.setTransform(-57.1,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_engineered, new cjs.Rectangle(-65.5,-13.3,131,26.700000000000003), null);


(lib.TSeries_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgJAYQgFgCgDgEQgEgDgCgFQgCgEAAgGQAAgFACgFIAGgIQADgDAFgCQAFgBAEAAQAFAAAFABQAFACADADQAEAEACAEQACAFAAAFQAAAGgCAEQgCAFgEADQgDAEgFACQgFABgFAAQgEAAgFgBgAgHgRQgDABgDADIgEAGIgBAHQAAAEABAEQACAEACACIAGAEQAEACADAAQAEAAADgCIAGgEQADgCACgEQABgEAAgEIgBgHQgCgEgDgCQgCgDgEgBQgDgCgEAAQgDAAgEACgAAGAOIgGgMIgEAAIAAAMIgFAAIAAgbIAKAAQAFAAADACQADABAAAFIgBADIgBACIgDABIgDABIAIAMgAgEgBIAEAAIAEgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIgCgBIgCgBIgCAAIgEAAg");
	this.shape.setTransform(3.775,9.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgTBAQgLgCgIgGQgIgFgFgIQgFgIgBgNIAhAAQAAAGACAEQACAEAEACQAEADAEABIAJABIAIgBIAHgCIAGgFQACgDAAgFQAAgIgLgDQgKgEgRgEIgPgEQgHgCgGgDQgFgEgDgGQgEgFAAgJQAAgMAFgHQAFgIAHgEQAIgFAKgCQAJgCAKAAQAKAAAJACQAKACAHAFQAIAEAFAIQAFAIABALIghAAQgBgKgGgDQgHgEgIAAIgHABIgGABIgFAEQgCACAAAEQAAAFAEACQADADAGACIALADIAOAEIAPAEQAHACAGAEQAFADAEAGQADAGAAAJQAAAMgFAIQgFAJgIAFQgIAFgKACQgKACgLAAQgKAAgKgCg");
	this.shape_1.setTransform(94.875,13.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgIQgIgJgFgMQgEgMAAgPQAAgNAEgMQAFgMAIgJQAJgIAMgFQALgGAOAAQAPAAAMAHQAMAGAIAKQAHALAEANQADANgBAOIhZAAQABAQAIAIQAHAHAOAAQAKAAAIgFQAHgFACgGIAeAAQgHAXgPAJQgPAKgVAAQgOAAgMgFgAgMgkQgGADgDAEQgDAEgBAFIgCAIIA3AAQgCgNgHgHQgGgHgMAAQgIAAgFADg");
	this.shape_2.setTransform(82.3361,13.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgQBWIAAh8IAhAAIAAB8gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_3.setTransform(73.175,11.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgnBAIAAh8IAgAAIAAAYIABAAQACgGAEgFIAJgJQAFgDAGgCQAGgCAHAAIAHABIAAAgIgGgBIgGAAQgKAAgGADQgGADgEAGQgEAFgBAHQgCAHAAAIIAAA4g");
	this.shape_4.setTransform(66.875,13.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgIQgIgJgFgMQgEgMAAgPQAAgNAEgMQAFgMAIgJQAJgIAMgFQALgGAOAAQAPAAAMAHQAMAGAIAKQAHALAEANQADANgBAOIhZAAQABAQAIAIQAHAHAOAAQAKAAAIgFQAHgFACgGIAeAAQgHAXgPAJQgPAKgVAAQgOAAgMgFgAgMgkQgGADgDAEQgDAEgBAFIgCAIIA3AAQgCgNgHgHQgGgHgMAAQgIAAgFADg");
	this.shape_5.setTransform(55.4361,13.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgaBXQgNgEgKgHQgLgIgGgLQgGgMABgQIAkAAQAAAJADAGQAEAGAFADQAFAEAHACIANACIALgBQAGgBAFgCQAFgDAEgEQADgEAAgHQAAgHgEgEQgFgEgHgDIgRgFIgRgFIgTgGQgJgEgHgEQgIgGgEgIQgFgIAAgMQAAgNAGgKQAGgKAJgHQAJgGAMgDQALgDAMAAQAMAAANADQAMADAKAGQAKAHAFALQAGAKAAAPIglAAQAAgIgDgFQgDgFgEgDQgFgDgGgBIgMgBIgJABQgFABgDACQgEADgDADQgCAEAAAGQAAAFACADQACADAGADIAPAFIAaAHIANADQAJADAIAFQAJAFAGAJQAGAKAAAOQAAAMgFAKQgEAKgKAIQgIAHgOAEQgNAEgSAAQgNAAgOgDg");
	this.shape_6.setTransform(41.5981,11.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgjAPIAAgdIBHAAIAAAdg");
	this.shape_7.setTransform(29.725,13.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgSBWIAAiLIg0AAIAAggICNAAIAAAgIg0AAIAACLg");
	this.shape_8.setTransform(18.325,11.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgnBAIAAh8IAgAAIAAAYIABAAQACgGAEgFIAJgJQAFgDAGgCQAGgCAHAAIAHABIAAAgIgGgBIgGAAQgKAAgGADQgGADgEAGQgEAFgBAHQgCAHAAAIIAAA4g");
	this.shape_9.setTransform(-4.175,13.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgaA9QgLgEgJgJQgIgIgFgNQgFgMAAgPQAAgOAFgMQAFgMAIgJQAJgIALgFQAMgFAOAAQAPAAAMAFQAMAFAIAIQAJAJAEAMQAFAMAAAOQAAAPgFAMQgEANgJAIQgIAJgMAEQgMAFgPAAQgOAAgMgFgAgOgjQgFADgEAGQgDAFgCAIQgBAHAAAGIABAPQACAHADAGQAEAFAFAEQAGADAIAAQAJAAAGgDQAGgEADgFQADgGACgHIABgPQAAgGgBgHQgCgIgDgFQgDgGgGgDQgGgEgJAAQgIAAgGAEg");
	this.shape_10.setTransform(-16.275,13.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_11.setTransform(-26.175,11.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgaA9QgLgEgJgJQgIgIgFgNQgFgMAAgPQAAgOAFgMQAFgMAIgJQAJgIALgFQAMgFAOAAQAPAAAMAFQAMAFAIAIQAJAJAEAMQAFAMAAAOQAAAPgFAMQgEANgJAIQgIAJgMAEQgMAFgPAAQgOAAgMgFgAgOgjQgFADgEAGQgDAFgCAIQgBAHAAAGIABAPQACAHADAGQAEAFAFAEQAGADAIAAQAJAAAGgDQAGgEADgFQADgGACgHIABgPQAAgGgBgHQgCgIgDgFQgDgGgGgDQgGgEgJAAQgIAAgGAEg");
	this.shape_12.setTransform(-36.075,13.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgeBTQgQgHgLgMQgKgMgHgQQgFgQgBgTQABgTAFgQQAHgRAKgMQALgMAQgHQAQgHATAAQAOAAANAEQAMAEAKAIQAKAIAGALQAHAMACAPIglAAQgBgHgDgFQgDgGgFgEQgGgEgGgCQgHgDgGAAQgMAAgKAFQgIAFgGAJQgFAIgDALQgCAKAAALQAAALACAKQADAKAFAIQAGAJAIAEQAKAFAMAAQARAAAKgKQAKgLABgRIAlAAQgBAQgGANQgGANgKAJQgKAJgOAFQgNAFgPAAQgTAAgQgHg");
	this.shape_13.setTransform(-51.85,11.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AgYA9QgMgFgIgIQgIgJgFgMQgEgMAAgPQAAgNAEgMQAFgMAIgJQAJgIAMgFQALgGAOAAQAPAAAMAHQAMAGAIAKQAHALAEANQADANgBAOIhZAAQABAQAIAIQAHAHAOAAQAKAAAIgFQAHgFACgGIAeAAQgHAXgPAJQgPAKgVAAQgOAAgMgFgAgMgkQgGADgDAEQgDAEgBAFIgCAIIA3AAQgCgNgHgHQgGgHgMAAQgIAAgFADg");
	this.shape_14.setTransform(-67.1139,13.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3283").s().p("AgnBAIAAh8IAgAAIAAAYIABAAQACgGAEgFIAJgJQAFgDAGgCQAGgCAHAAIAHABIAAAgIgGgBIgGAAQgKAAgGADQgGADgEAGQgEAFgBAHQgCAHAAAIIAAA4g");
	this.shape_15.setTransform(-77.525,13.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3283").s().p("AgjA8QgIgDgGgHQgFgGgCgKQgCgKAAgLIAAhMIAjAAIAABFQAAAQAEAIQAFAHANABQANAAAGgJQAGgIAAgTIAAhBIAjAAIAAB8IghAAIAAgSIgBAAQgGAMgLAEQgJAFgLAAQgOAAgJgEg");
	this.shape_16.setTransform(-89.425,14.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3283").s().p("AgaBXQgNgEgKgHQgLgIgGgLQgGgMABgQIAkAAQAAAJADAGQAEAGAFADQAFAEAHACIANACIALgBQAGgBAFgCQAFgDAEgEQADgEAAgHQAAgHgEgEQgFgEgHgDIgRgFIgRgFIgTgGQgJgEgHgEQgIgGgEgIQgFgIAAgMQAAgNAGgKQAGgKAJgHQAJgGAMgDQALgDAMAAQAMAAANADQAMADAKAGQAKAHAFALQAGAKAAAPIglAAQAAgIgDgFQgDgFgEgDQgFgDgGgBIgMgBIgJABQgFABgDACQgEADgDADQgCAEAAAGQAAAFACADQACADAGADIAPAFIAaAHIANADQAJADAIAFQAJAFAGAJQAGAKAAAOQAAAMgFAKQgEAKgKAIQgIAHgOAEQgNAEgSAAQgNAAgOgDg");
	this.shape_17.setTransform(-103.8519,11.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TSeries_Logo, new cjs.Rectangle(-114,-5.8,217,33.6), null);


(lib.speedometer_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(3,1,1).p("AigDHIE/AAQAdgcAVgvQAqhegqhiQgSghghghQhEhBhRABQgpAAgwARQhgAhggBTQgpBsAoBZQAVAsAcAXg");
	this.shape.setTransform(0.0436,0.0233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("ACaBpQgEAAgDgEQgDgCAAgFIAAgBQAAgEADgDQADgDAEAAIAiAAQAEAAADADQADADAAAEIAAABQAAAFgDACQgDAEgEAAgAi7BpQgEAAgDgEQgDgCAAgFIAAgBQAAgEADgDQADgDAEAAIAiAAQAEAAADADQADADAAAEIAAABQAAAFgDACQgDAEgEAAgABugDQgDAAgDgDIgBgBQgDgDAAgEQgBgEADgDIAYgZQADgCAFAAQADAAADADIABABQADADAAAEQABAFgDACIgZAZQgCACgDAAIgCAAgAh1gHIgYgYQgDgDAAgFQABgDADgDIABgBQADgDADAAQAFgBADADIAYAZQADADgBAEQAAADgDADIgBABQgDADgEAAIgCAAQgDAAgCgCgAgBgyQgEAAgDgDQgDgDAAgEIAAgiQAAgEADgDQADgDAEAAIABAAQAEAAACADQAEADAAAEIAAAiQAAAEgEADQgCADgEAAg");
	this.shape_1.setTransform(0.075,-6.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedometer_mc, new cjs.Rectangle(-24.4,-21.3,48.9,42.7), null);


(lib.printer_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_01();
	this.instance.setTransform(-137.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_01_1, new cjs.Rectangle(-137.5,-82.5,275,165), null);


(lib.paper_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AHoP0IAAABIAAgBgAiNOnIp7hJQgWm+A5pKQAckkAgjNQAyjRBOhZQAngsAcgCIT1BGQhqBFg8BrQgTAigMAhIgIAbQg4EDgWLhQgMFyAAE9QgDgDpyhKg");
	mask.setTransform(0.2417,-0.2);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-79,-101.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-78,-101.4,156.6,202.5), null);


(lib.needle_body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(2,1,1).p("AAhAAQAAAOgKAJQgKAKgNAAQgNAAgJgKQgKgJAAgOQAAgMAKgKQAJgKANAAQANAAAKAKQAKAKAAAMg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.needle_body, new cjs.Rectangle(-4.3,-4.3,8.7,8.7), null);


(lib.needle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("Ag9AyIBthrIAGgEQAFgEACACQADADgKALIhkByg");
	this.shape.setTransform(0.0346,0.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.needle, new cjs.Rectangle(-6.1,-6.4,12.3,12.9), null);


(lib.learnMore_CTA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape.setTransform(34.225,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_1.setTransform(26.625,-0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgHADgIQADgIAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFADAIQADAIAAAHQAAAJgDAHQgDAIgFAFQgFAGgHADQgHADgJAAQgIAAgHgDgAgJgXQgEACgCAEQgDADgBAFIgBAJIABAKQABAFADADQACAEAEACQAEADAFAAQAGAAAEgDQAEgCADgEQACgDABgFIABgKIgBgJQgBgFgCgDQgDgEgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(18.125,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAnIAAg2IgTA2IgNAAIgTg2IAAAAIAAA2IgQAAIAAhNIAYAAIASA1IARg1IAYAAIAABNg");
	this.shape_3.setTransform(8.775,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAnIgggzIAAAAIAAAzIgQAAIAAhNIARAAIAgAzIAAgzIAQAAIAABNg");
	this.shape_4.setTransform(-3.525,-0.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_5.setTransform(-11.475,-0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIgFgRIgdAAIgGARIgRAAIAdhNIARAAIAdBNgAgJAJIATAAIgKgcIAAAAg");
	this.shape_6.setTransform(-19.425,-0.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape_7.setTransform(-26.675,-0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAnIAAhNIASAAIAAA/IAlAAIAAAOg");
	this.shape_8.setTransform(-33.475,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0044F0").s().p("AmTCUQg8AAAAg9IAAitQAAg9A8AAIMnAAQA8AAAAA9IAACtQAAA9g8AAg");
	this.shape_9.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.learnMore_CTA, new cjs.Rectangle(-46.3,-14.7,92.69999999999999,29.5), null);


(lib.ink_drop = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2A3283").ss(2,1,1).p("AAAjLQAMANAMANQAPAQAPARQAYAbAUAgQAOAYANAYQARAfAEAgQACAPAAAOQAAANgCAOQgGAlgXAfQgWAegkANQgkAOgogDQgngDgggVQghgVgNghQgPgjACgoQACgdAKgaQAOgmAVgfQARgaASgYQAUgbAWgaQAMgOALgNg");
	this.shape.setTransform(0.0179,0.0273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ink_drop, new cjs.Rectangle(-15.7,-21.4,31.5,42.9), null);


(lib.epson_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("ABCA+QgNgFgHgJQgIgJgFgMQgEgMAAgOQAAgOAEgMQAFgMAIgKQAHgJANgFQAMgFAOgBQAPABAMAFQAMAFAIAJQAIAKAFAMQADAMAAAOQAAAOgDAMQgFAMgIAJQgIAJgMAFQgMAFgPABQgOgBgMgFgABMgnQgHAEgEAGQgEAGgCAJQgCAHAAAIQAAAIACAHQACAIAEAHQAEAFAHAEQAHAEAJAAQAKAAAHgEQAGgEAFgFQADgHACgIQACgHAAgIQAAgIgCgHQgCgJgDgGQgFgGgGgEQgHgEgKAAQgJAAgHAEgAg1BBQgKgDgIgFQgIgGgEgJQgFgJABgLIAbAAQAAAGACAFQADAEAEADQADADAGABIAKACIAIgBQAFAAAEgDQADgBADgDQADgEAAgEQAAgGgEgDIgIgGIgpgLQgHgDgFgDQgFgEgEgHQgDgFAAgJQAAgKAEgIQAEgHAHgFQAHgFAJgCQAIgCAJgBQAKAAAJACQAKADAGAFQAHAFAEAIQAEAIAAAMIgaAAQAAgHgCgEIgFgFQgEgDgFAAIgJgCIgHABIgGADIgFAEQgCADAAAEQAAAEACACQABACAEADIAqAMIALAFQAHADAEAHQAFAIAAAKQAAAJgEAHQgDAIgHAGQgGAFgKAEQgJACgOABQgKgBgKgCgAD3BBIg2hWIAABWIgaAAIAAiAIAcAAIA2BVIAAAAIAAhVIAaAAIAACAgAjOBBIAAiAIA7AAQAMAAAIAEQAIACAGAHQAFAFACAIQADAHAAAIQAAAIgDAIQgCAGgFAFQgGAGgIAEQgIAEgMAAIgeAAIAAAugAixgDIAfAAIAIgDQAEgCACgFQABgDAAgGQAAgGgBgEQgCgEgEgCIgIgCIgfgBgAlBBBIAAiAIBgAAIAAAXIhDAAIAAAbIA+AAIAAAVIg+AAIAAAhIBFAAIAAAYgAEvgmIgFgCIgDgGIgBgFIABgGIADgEQACgDADgBIAFgBIAFABQADABACADIADAEIABAGIgBAFIgDAGIgFACIgFABIgFgBgAEwg9IgEACIgCADIgBAFIABAEIACAEIAEADIAEAAIAEAAIAEgDIACgEIAAgEIAAgFIgCgDIgEgCIgEgBIgEABgAE3grIgEgHIgCAAIAAAHIgDAAIAAgQIAGAAIAFABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIgBADIgBABIgBABIgCAAIAFAHgAExg0IADAAIACAAIABgDIAAgBIgBgBIgFAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-32.1,-6.7,64.30000000000001,13.5), null);


(lib.frame_06_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_06();
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_06_1, new cjs.Rectangle(-150,-124.5,300,249), null);


(lib.frame_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_02();
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_02_1, new cjs.Rectangle(-150,-124.5,300,249), null);


(lib.frame_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_01();
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_01_1, new cjs.Rectangle(-150,-124.5,300,249), null);


(lib.endFrame_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.endFrame();
	this.instance.setTransform(-150,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endFrame_mc, new cjs.Rectangle(-150,-124.5,300,249), null);


(lib.speedometer_Needle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.needle();
	this.instance.setTransform(2.5,-2.35);

	this.instance_1 = new lib.needle_body();
	this.instance_1.setTransform(-5.35,5.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedometer_Needle, new cjs.Rectangle(-9.6,-8.8,18.299999999999997,18.6), null);


// stage content:
(lib.Epson_TSeries_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(303));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(40.45,18.35,0.9135,0.9135,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9609},7).wait(31).to({alpha:0},6).wait(208).to({alpha:1},6).wait(45));

	// T_Series_Logo
	this.instance_1 = new lib.TSeries_Logo();
	this.instance_1.setTransform(147.85,40.95,0.9106,0.9106);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).to({alpha:1},6).wait(45));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_266 = new cjs.Graphics().p("AmTCUQg8AAAAg9IAAAAIAAitQAAg9A8AAIAAAAIMnAAQA8AAAAA9IAAAAIAACtQAAA9g8AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(266).to({graphics:mask_graphics_266,x:150.1749,y:229.05}).wait(37));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.6,-5.7,8.6,5.6).s().p("AlSFJIH4sCICtBxIn4MCg");
	this.shape_1.setTransform(93.075,204.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.7,-5.7,8.6,5.6).s().p("AlSFKIH4sEICtBxIn5MEg");
	this.shape_2.setTransform(94.15,205.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.7,-5.7,8.7,5.7).s().p("AlVFMIH8sKICvBzIn8MJg");
	this.shape_3.setTransform(97.325,206.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.8,-5.7,8.8,5.8).s().p("AlZFQIIDsTICwB0IoCMTg");
	this.shape_4.setTransform(102.625,208.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9,-5.8,8.9,5.9).s().p("AlfFWIILsgIC0B1IoLMgg");
	this.shape_5.setTransform(110.1,211.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9.2,-6,9.1,6).s().p("AlnFdIIXsxIC4B4IoXMxg");
	this.shape_6.setTransform(119.65,214.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9.4,-6.2,9.4,6.1).s().p("AlvFmIIjtGIC9B7IokNGg");
	this.shape_7.setTransform(131.35,219.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9.7,-6.3,9.6,6.3).s().p("Al6FwII0teIDBB+Io0Nfg");
	this.shape_8.setTransform(145.175,224.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10,-6.5,9.9,6.5).s().p("AmHF8IJGt6IDICEIpFN5g");
	this.shape_9.setTransform(160.6,230);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.3,-6.7,10.2,6.7).s().p("AmRGGIJWuRIDNCGIpWORg");
	this.shape_10.setTransform(174.425,235.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.5,-6.9,10.5,6.8).s().p("AmaGPIJjunIDSCKIpjOmg");
	this.shape_11.setTransform(186.125,239.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.6,-7,10.7,6.9).s().p("AmiGXIJvu4IDWCMIpvO3g");
	this.shape_12.setTransform(195.675,243.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.8,-7.1,10.8,7).s().p("AmnGcIJ3vFIDZCOIp4PFg");
	this.shape_13.setTransform(203.15,245.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.2,10.9,7.1).s().p("AmsGhIJ+vPIDaCPIp9POg");
	this.shape_14.setTransform(208.45,247.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmuGiIKBvUIDcCRIqBPTg");
	this.shape_15.setTransform(211.625,249.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGkIKCvWIDdCQIqDPWg");
	this.shape_16.setTransform(212.7,249.55);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},266).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(22));

	// learnMore_CTA
	this.instance_2 = new lib.learnMore_CTA();
	this.instance_2.setTransform(150.15,229.05);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({alpha:1},8).wait(37));

	// endFrame_mc
	this.instance_3 = new lib.endFrame_mc();
	this.instance_3.setTransform(150.4,124.8,0.8265,0.8265);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({scaleX:0.9518,scaleY:0.9518,y:133.8,alpha:1},6,cjs.Ease.quadOut).wait(45));

	// Layer_35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_211 = new cjs.Graphics().p("APxKzQgFgEAAgHQAAgGAFgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AgTAVQgJgIAAgNQAAgLAJgJQAIgJALAAQAMAAAIAJQAJAJAAALQAAANgJAIQgIAJgMAAQgLAAgIgJg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AgxAyQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAVQgUAUgdAAQgcAAgVgUg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AhhBiQgogpAAg5QAAg4AogpQApgpA4AAQA6AAAoApQAoApAAA4QAAA5goApQgoAog6AAQg4AAgpgog");
	var mask_1_graphics_215 = new cjs.Graphics().p("AikCmQhFhFAAhhQAAhgBFhFQBEhEBgAAQBhAABEBEQBFBFAABgQAABhhFBFQhEBEhhAAQhgAAhEhEg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Aj3D3QhlhmgBiRQABiQBlhnQBnhmCQAAQCRAABmBmQBmBnABCQQgBCRhmBmQhmBniRAAQiQAAhnhng");
	var mask_1_graphics_217 = new cjs.Graphics().p("Ak6E7QiCiCAAi5QAAi4CCiCQCDiCC3AAQC4AACDCCQCCCCAAC4QAAC5iCCCQiDCCi4AAQi3AAiDiCg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AlqFrQiXiWABjVQgBjUCXiWQCWiWDUAAQDVAACWCWQCWCWAADUQAADViWCWQiWCWjVAAQjUAAiWiWg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AmIGIQiiiiAAjmQAAjlCiiiQCjiiDlAAQDmAACiCiQCjCiAADlQAADmijCiQiiCijmAAQjlAAijiig");
	var mask_1_graphics_220 = new cjs.Graphics().p("AFWMgQiminAAjrQAAjsCmilQCmimDsAAQDrAACnCmQCmClAADsQAADrimCnQinCmjrAAQjsAAimimg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AFWMgQiminAAjrQAAjsCmilQCmimDsAAQDrAACnCmQCmClAADsQAADrimCnQinCmjrAAQjsAAimimg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AmRGSQiminAAjrQAAjrCmimQCmimDrAAQDrAACnCmQCmCmAADrQAADrimCnQinCmjrAAQjrAAimimg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AFWMgQiminAAjrQAAjsCmilQCmimDsAAQDrAACnCmQCmClAADsQAADrimCnQinCmjrAAQjsAAimimg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_1_graphics_211,x:103.5871,y:69.6015}).wait(1).to({graphics:mask_1_graphics_212,x:205.6,y:137.6}).wait(1).to({graphics:mask_1_graphics_213,x:205.6,y:137.525}).wait(1).to({graphics:mask_1_graphics_214,x:205.6,y:137.35}).wait(1).to({graphics:mask_1_graphics_215,x:205.6,y:137.15}).wait(1).to({graphics:mask_1_graphics_216,x:205.6,y:136.875}).wait(1).to({graphics:mask_1_graphics_217,x:205.6,y:136.675}).wait(1).to({graphics:mask_1_graphics_218,x:205.6,y:136.525}).wait(1).to({graphics:mask_1_graphics_219,x:205.6,y:136.425}).wait(1).to({graphics:mask_1_graphics_220,x:131.2,y:96.6}).wait(25).to({graphics:mask_1_graphics_245,x:131.2,y:96.6}).wait(1).to({graphics:mask_1_graphics_246,x:205.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_247,x:205.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_248,x:205.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_249,x:205.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_250,x:205.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_251,x:131.2,y:96.6}).wait(1).to({graphics:null,x:0,y:0}).wait(51));

	// zoomIn
	this.instance_4 = new lib.zoomIn_1();
	this.instance_4.setTransform(205.6,136.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).wait(34).to({alpha:0},6).to({_off:true},1).wait(51));

	// txt_precisionCore
	this.instance_5 = new lib.txt_precisionCore();
	this.instance_5.setTransform(145.65,216.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(204).to({_off:false},0).to({alpha:1},7).wait(34).to({alpha:0},6).to({_off:true},1).wait(51));

	// Frame_06
	this.instance_6 = new lib.frame_06_1();
	this.instance_6.setTransform(150.4,28.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({y:124.8,alpha:1},12,cjs.Ease.quadOut).wait(38).to({alpha:0},6).to({_off:true},1).wait(51));

	// ink_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_150 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_189 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_190 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_191 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_192 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_193 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_194 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");
	var mask_2_graphics_195 = new cjs.Graphics().p("ACmFKQhIgmAAhiQACgjAUgxQAphiBdhFIBJBdQBJBqgCA0QgBAmgUAmQgoBOhfACQgkAAgkgUg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_2_graphics_150,x:39.4041,y:35}).wait(39).to({graphics:mask_2_graphics_189,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_190,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_191,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_192,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_193,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_194,x:39.4041,y:35}).wait(1).to({graphics:mask_2_graphics_195,x:39.4041,y:35}).wait(1).to({graphics:null,x:0,y:0}).wait(107));

	// Layer_27
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjUIAZgJQAggKAhgEQBrgNBTA0QBWA4BdgcQBFgUAngwIgMHHIoLAUQgHhwgIhwQgPjggCgDg");
	this.shape_17.setTransform(64.4,94.896);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3283").s().p("AkKAPQgPjggCgDIAZgJQAggKAigEQBqgNBTA0QBWA4BdgcQBFgUAngwIgMHHIoLAUIgPjgg");
	this.shape_18.setTransform(64.4,94.896);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjUIAZgKQAlgKAdgDQAMgCANAAQBbgFBJAuQARALARAIQBHAeBKgWQAegJAYgOQAegRAVgXQADAPgBASIgLGiIoLAUQgHh3gHhqQAAgDAAgEQgPjZgDgCg");
	this.shape_19.setTransform(64.3536,94.7298);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjZgDgCIAZgKQAlgKAdgDIAZgCQBbgFBJAuQARALARAIQBHAeBKgWQAegJAYgOQAegRAVgXQADAPgBASIgLGiIoLAUIgOjhg");
	this.shape_20.setTransform(64.3536,94.7298);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2A3283").ss(2,1,1).p("AkajVIAYgJQAlgKAdgDQAMgBAMAAQBcgEBJArQAQALASAHQBGAcBKgWQAegIAZgOQAdgQAWgXQADAPAAASIgLGiIoLAVQgIh3gHhqQAAgDAAgEQgPjZgCgCg");
	this.shape_21.setTransform(64.35,94.2368);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjZgCgCIAYgJQAlgKAdgDIAYgBQBcgEBJArQAQALASAHQBGAcBKgWQAegIAYgOQAegQAWgXQACAPAAASIgKGiIoLAVIgPjhg");
	this.shape_22.setTransform(64.35,94.2368);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2A3283").ss(2,1,1).p("AkajXIAYgHQAkgIAdgDQAMgBAMAAQBcgCBJAnQAQAKASAHQBGAXBJgVQAegIAZgNQAdgPAWgVQAEAPABARIgLGiIoLAVQgIh2gHhqQAAgDAAgEQgPjZgCgDg");
	this.shape_23.setTransform(64.35,93.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A3283").s().p("AkJAMIAAgHQgPjZgCgDIAYgHQAkgIAdgDIAYgBQBbgCBKAnQAQAKASAHQBFAXBKgVQAdgIAagNQAdgPAWgVQAEAPAAARIgKGiIoLAVIgPjgg");
	this.shape_24.setTransform(64.35,93.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjXIAZgGQAjgGAcgCQANAAAMAAQBbAABJAiQAQAJASAFQBFASBJgUQAegIAZgLQAdgOAXgTQAGAPAAAPIgLGiIgXAEInyATQgJh1gHhqQAAgEAAgDQgPjagDgDg");
	this.shape_25.setTransform(64.3,91.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjagDgDIAZgGQAjgGAcgCIAZAAQBcAABIAiQAQAJASAFQBGASBIgUQAegIAZgLQAdgOAYgTQAFAPAAAPIgLGiIgWAEInzATIgQjfg");
	this.shape_26.setTransform(64.3,91.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAYgFQAjgDAcgBQAMAAAMABQBbADBJAaQAQAHARAEQBFALBIgSQAegIAagKQAdgMAYgRQAHAPABAOIgLGjIgVAGIn0ATQgJh1gHhrQAAgDAAgDQgPjagDgDg");
	this.shape_27.setTransform(64.3,90);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A3283").s().p("AkJANIAAgHQgPjZgDgDIAYgFQAjgEAcAAIAZABQBbADBJAaQAQAHARADQBEANBIgUQAfgHAZgKQAdgNAYgQQAHAPABAOIgLGjIgVAGIn0ATQgJh1gHhrg");
	this.shape_28.setTransform(64.3,90);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAYgCQAigBAbABQAMAAAMABQBbAHBJASQAQAFARABQBDAEBIgSQAegHAagIQAdgKAZgNQAJAPADALIgLGkIgUAIIn0ATQgLh0gHhrQAAgDAAgEQgPjagDgDg");
	this.shape_29.setTransform(64.275,87.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjagDgDIAYgCQAigBAbABIAYABQBbAHBJASQAQAFARABQBDAEBIgSIA4gPQAdgKAZgNQAJAPADALIgLGkIgUAIIn0ATQgLh0gHhrg");
	this.shape_30.setTransform(64.275,87.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAXABQAiACAaACQAMACAMACQBbALBJAHQAPADARgBQBCgHBHgQQAegHAbgFQAcgIAbgIQAMAOADAJIgLGlIgSAKIn1ATQgMhzgHhrQAAgEAAgDQgPjagDgEg");
	this.shape_31.setTransform(64.225,85.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A3283").s().p("AkJAOIAAgHQgPjZgDgEIAXABIA8AEIAYAEQBbALBJAHQAPADARgBQBCgHBHgQIA5gMIA3gQQAMAPADAIIgLGlIgSAKIn1ATQgMhzgHhsg");
	this.shape_32.setTransform(64.225,85.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjWIAWAEQAhAGAaAFQAMACALACQBbARBJgGQAPABAQgEQBBgRBGgPQAegGAcgDQAbgFAdgDQAPAOAEAFIgLGmIgPANIn3ATQgNhygHhrQAAgEAAgDQgPjagDgFg");
	this.shape_33.setTransform(64.175,81.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A3283").s().p("AkJAQIAAgHQgPjagDgFIAWAEIA7ALIAXAEQBbARBJgGQAPABAQgEQBBgRBGgPQAegGAcgDQAbgFAdgDIATATIgLGmIgPANIn3ATQgNhygHhrg");
	this.shape_34.setTransform(64.175,81.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIAVAHQAgAMAZAGQALADAMADQBaAWBJgTQAQgDAPgGQA/geBFgNQAegGAcABQAbgCAfACQASAOAGACIgLGnIgMAQIn5ATQgOhxgHhrQAAgEAAgDQgPjbgDgFg");
	this.shape_35.setTransform(64.175,78.3306);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A3283").s().p("AkJASIAAgHQgPjbgDgFIAVAHQAgAMAZAGIAXAGQBaAWBJgTQAQgDAPgGQA/geBFgNQAegGAcABQAbgCAfACQASAOAGACIgLGnIgMAQIn5ATQgOhxgHhrg");
	this.shape_36.setTransform(64.175,78.3306);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjPIAVALQAeAQAYAJQALAEAMAEQBZAcBKgiQAPgGAOgKQA+gsBEgLQAegFAdAEQAbABAhAJQAVAOAHgDIgLGpIgIATIn7AUQgQhwgHhsQAAgDAAgEQgPjbgDgFg");
	this.shape_37.setTransform(64.1,73.8611);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A3283").s().p("AkKAYIAAgHQgOjbgDgFIAUALQAfAQAYAJIAXAIQBZAcBJgiQAQgGAOgKQA+gsBEgLQAegFAdAEQAbABAgAJQAWAOAHgDIgLGpIgJATIn6AUQgQhwgIhsg");
	this.shape_38.setTransform(64.1,73.8611);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjIIAUAPQAdAWAWALQALAGAMAFQBZAjBJgzQAPgKAOgOQA8g7BCgJQAegEAfAIQAaAFAjAPQAaAOAIgHIgLGqIgFAXIn8AUQgShugIhtQAAgDAAgEQgOjbgDgGg");
	this.shape_39.setTransform(64.05,68.8083);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2A3283").s().p("AkJAgIAAgHQgPjbgDgGIAUAPQAcAWAYALQAKAGAMAFQBZAjBJgzQAPgKAOgOQA8g7BCgJQAegEAeAIQAbAFAjAPQAaAOAIgHIgLGqIgFAXIn8AUQgShugHhtg");
	this.shape_40.setTransform(64.05,68.8083);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#2A3283").ss(2,1,1).p("Akbi/IAZAbQAfAfAhAQQBqA0BVhuQBVhwBiAmQAZAJAnAXQAdAPALgNIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_41.setTransform(64,63.2187);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2A3283").s().p("AkKAjQgOjggDgCIAZAbQAfAfAhAQQBqA0BVhuQBUhwBkAmQAZAJAmAXQAdAPALgNIgMHHIoLAUIgPjhg");
	this.shape_42.setTransform(64,63.2187);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjRIAWAQQAcATAfAKQBmAhBhg+QBmg+BbATQAYADAiAKQAYAGAMgQIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_43.setTransform(63.8,60.4861);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2A3283").s().p("AkJARQgPjggDgCIAWAQQAcATAgAKQBkAhBig+QBmg+BaATQAZADAiAKQAYAGAMgQIgMHHIoLAUIgOjhg");
	this.shape_44.setTransform(63.8,60.4861);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIATAHQAaAJAeAFQBhARBsgWQB1gTBTACQAZgBAdgCQAUgBANgTIgMHHIoLAUQgHhwgIhwQgPjhgCgCg");
	this.shape_45.setTransform(63.6,57);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A3283").s().p("AkJANQgQjfgCgDIAUAIQAZAIAeAFQBhARBsgWQB1gTBTACIA2gDQATgBAOgTIgMHHIoLAUIgOjhg");
	this.shape_46.setTransform(63.6,57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIARABQAYAAAdABQBeAEB0AKQCBARBOgMQAYgFAZgLQARgGAOgXIgMHHIoLAUQgHhwgIhwQgPjhgCgCg");
	this.shape_47.setTransform(63.45,53.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2A3283").s().p("AkJAOQgPjhgDgCIASABIA0ABQBdADB1ALQCAARBPgMQAXgFAagMQAQgFAPgXIgMHHIoLAUIgOjgg");
	this.shape_48.setTransform(63.45,53.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjVIAQgGQAVgGAdgCQBagHB8AlQCJAsBLgXQAXgIAWgTQAPgKAPgYIgMHHIoLAUQgHhwgIhwQgPjhgCgCg");
	this.shape_49.setTransform(63.35,51.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2A3283").s().p("AkJAOQgPjhgDgCIAQgFQAWgHAcgBQBagIB8AlQCKAsBKgXQAXgHAXgUQAOgJAPgZIgMHHIoLAUIgOjgg");
	this.shape_50.setTransform(63.35,51.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjTIAPgKQAUgLAcgEQBYgOCBA3QCRA/BHgeQAWgKAVgYQAMgNAQgaIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_51.setTransform(63.25,49.4237);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2A3283").s().p("AkJAPQgQjggCgCIAPgKQAUgLAcgEQBZgOCAA3QCRA/BHgeQAXgKAUgYQAMgNAQgaIgMHHIoLAUIgOjhg");
	this.shape_52.setTransform(63.25,49.4237);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjPIAPgMQATgOAcgGQBXgSCDBCQCVBLBFgjQAXgLATgcQALgPAQgaIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_53.setTransform(63.2,47.9725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2A3283").s().p("AkKATQgOjggDgCIAPgMQATgOAcgGQBWgSCEBCQCUBLBGgjQAWgLAUgcQALgPAQgaIgMHHIoLAUIgPjhg");
	this.shape_54.setTransform(63.2,47.9725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#2A3283").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_55.setTransform(63.2,47.5015);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2A3283").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_56.setTransform(63.2,47.5015);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(42,50,131,0.831)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_57.setTransform(63.2,47.5015);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(42,50,131,0.831)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_58.setTransform(63.2,47.5015);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(42,50,131,0.667)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_59.setTransform(63.2,47.5015);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(42,50,131,0.667)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_60.setTransform(63.2,47.5015);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(42,50,131,0.502)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_61.setTransform(63.2,47.5015);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(42,50,131,0.502)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_62.setTransform(63.2,47.5015);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(42,50,131,0.333)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_63.setTransform(63.2,47.5015);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(42,50,131,0.333)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_64.setTransform(63.2,47.5015);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(42,50,131,0.169)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_65.setTransform(63.2,47.5015);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(42,50,131,0.169)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_66.setTransform(63.2,47.5015);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(42,50,131,0)").ss(2,1,1).p("AkbjOIAOgNQAUgPAbgGQBWgUCFBGQCWBPBEgkQAXgMATgdQALgPAQgbIgMHHIoLAUQgHhwgIhxQgPjggCgCg");
	this.shape_67.setTransform(63.2,47.5015);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(42,50,131,0)").s().p("AkKAUQgOjggDgCIAOgNQAUgPAbgGQBWgUCFBGQCVBPBFgkQAXgMATgdIAbgqIgMHHIoLAUIgPjhg");
	this.shape_68.setTransform(63.2,47.5015);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17}]},150).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},20).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[]},1).wait(107));

	// inkDrop
	this.instance_7 = new lib.ink_drop();
	this.instance_7.setTransform(63.6,33.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({y:49.2,alpha:1},5,cjs.Ease.quadOut).wait(45).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_inkCartridges
	this.instance_8 = new lib.txt_inkCartridges();
	this.instance_8.setTransform(172.6,61.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:176.2,alpha:1},5,cjs.Ease.quadOut).wait(34).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_highCapacity
	this.instance_9 = new lib.txt_highCapacity();
	this.instance_9.setTransform(162.55,34.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(139).to({_off:false},0).to({x:174.55,alpha:1},5,cjs.Ease.quadOut).wait(45).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_fastPrintSpeed
	this.instance_10 = new lib.txt_fastPrintSpeed();
	this.instance_10.setTransform(166.25,48.55);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:182.25,alpha:1},6,cjs.Ease.quadOut).wait(34).to({x:246.25,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// speedometer_Needle
	this.instance_11 = new lib.speedometer_Needle();
	this.instance_11.setTransform(32.35,58.25,1,1,-112.006,0,0,-5.4,5.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({x:41.95,alpha:1},6,cjs.Ease.quadOut).wait(4).to({regY:5.4,rotation:0,x:41.85,y:58.3},17,cjs.Ease.quartInOut).wait(13).to({x:105.85,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// speedometer_mc
	this.instance_12 = new lib.speedometer_mc();
	this.instance_12.setTransform(32.25,47.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({x:41.85,alpha:1},6,cjs.Ease.quadOut).wait(34).to({x:105.85,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// Layer_4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_104 = new cjs.Graphics().p("AwFQaMABLgiXIfAAZMgC0Ajig");
	var mask_3_graphics_105 = new cjs.Graphics().p("AwFQaMABLgiXIfAAZMgC0Ajig");
	var mask_3_graphics_106 = new cjs.Graphics().p("AwFQaMABLgiXIfAAZMgC0Ajig");
	var mask_3_graphics_107 = new cjs.Graphics().p("AwEQaMABJgiXIfAAZMgCzAjig");
	var mask_3_graphics_108 = new cjs.Graphics().p("AwDQbMABHgiYIfAAZMgCyAjig");
	var mask_3_graphics_109 = new cjs.Graphics().p("AwCQbMABFgiZIfAAZMgCwAjjg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AwBQbMABDgiYIfAAYMgCuAjjg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Av/QdMAA/gibIfAAZMgCsAjkg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Av+QdMAA8gibIfBAZMgCpAjkg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Av8QeMAA4gidIfBAZMgCnAjlg");
	var mask_3_graphics_114 = new cjs.Graphics().p("Av5QfMAAzgieIfAAZMgCjAjlg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Av3QhMAAvgigIfAAZMgCgAjmg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Av0QhMAApgigIfAAZMgCbAjmg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AvxQjMAAjgijIfAAZMgCXAjog");
	var mask_3_graphics_118 = new cjs.Graphics().p("AvtQkMAAbgikIfBAZMgCTAjog");
	var mask_3_graphics_119 = new cjs.Graphics().p("AvqQmMAAVgimIfAAZMgCOAjog");
	var mask_3_graphics_120 = new cjs.Graphics().p("AvmQnMAANgioIfAAZMgCIAjqg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AviQpMAAFgirIfAAZMgCCAjsg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_3_graphics_104,x:127.025,y:54.05}).wait(1).to({graphics:mask_3_graphics_105,x:126.975,y:54.8}).wait(1).to({graphics:mask_3_graphics_106,x:126.775,y:57.05}).wait(1).to({graphics:mask_3_graphics_107,x:126.525,y:60.75}).wait(1).to({graphics:mask_3_graphics_108,x:126.125,y:65.975}).wait(1).to({graphics:mask_3_graphics_109,x:125.6,y:72.7}).wait(1).to({graphics:mask_3_graphics_110,x:124.975,y:80.9}).wait(1).to({graphics:mask_3_graphics_111,x:124.225,y:90.575}).wait(1).to({graphics:mask_3_graphics_112,x:123.35,y:101.75}).wait(1).to({graphics:mask_3_graphics_113,x:122.4,y:114.45}).wait(1).to({graphics:mask_3_graphics_114,x:121.325,y:128.6}).wait(1).to({graphics:mask_3_graphics_115,x:120.125,y:144.25}).wait(1).to({graphics:mask_3_graphics_116,x:118.8,y:161.425}).wait(1).to({graphics:mask_3_graphics_117,x:117.375,y:180.05}).wait(1).to({graphics:mask_3_graphics_118,x:115.85,y:200.175}).wait(1).to({graphics:mask_3_graphics_119,x:114.2,y:221.8}).wait(1).to({graphics:mask_3_graphics_120,x:112.425,y:244.925}).wait(1).to({graphics:mask_3_graphics_121,x:110.525,y:269.525}).wait(68).to({graphics:mask_3_graphics_189,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_190,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_191,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_192,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_193,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_194,x:110.525,y:269.525}).wait(1).to({graphics:mask_3_graphics_195,x:110.525,y:269.525}).wait(1).to({graphics:null,x:0,y:0}).wait(107));

	// Layer_3
	this.instance_13 = new lib.paper_mc();
	this.instance_13.setTransform(102,263);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(104).to({_off:false},0).wait(85).to({alpha:0},6).to({_off:true},1).wait(107));

	// printer_01
	this.instance_14 = new lib.printer_01_1();
	this.instance_14.setTransform(138.35,168.05);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(94).to({_off:false},0).to({x:153.55,alpha:1},6,cjs.Ease.quadOut).wait(89).to({alpha:0},6).to({_off:true},1).wait(107));

	// txt_engineered
	this.instance_15 = new lib.txt_engineered();
	this.instance_15.setTransform(74.4,70.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({_off:false},0).to({x:78.4,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:81.4,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(217));

	// txt_enhance
	this.instance_16 = new lib.txt_enhance();
	this.instance_16.setTransform(90,90.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(46).to({_off:false},0).to({x:94,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:97,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(215));

	// txt_work
	this.instance_17 = new lib.txt_work();
	this.instance_17.setTransform(54.75,110.7);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(48).to({_off:false},0).to({x:58.75,alpha:1},6,cjs.Ease.quadOut).wait(30).to({x:61.75,alpha:0},5,cjs.Ease.quadIn).to({_off:true},1).wait(213));

	// frame_02
	this.instance_18 = new lib.frame_02_1();
	this.instance_18.setTransform(150.05,125.05);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(38).to({_off:false},0).to({alpha:1},6).wait(45).to({x:151.8,y:124.55,alpha:0},5).to({_off:true},1).wait(208));

	// T_Series_Logo
	this.instance_19 = new lib.TSeries_Logo();
	this.instance_19.setTransform(150.4,63.55);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({_off:false},0).to({y:68.05,alpha:1},6,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(263));

	// frame_01
	this.instance_20 = new lib.frame_01_1();
	this.instance_20.setTransform(150,125.05);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},6,cjs.Ease.quadOut).wait(32).to({alpha:0},6).to({_off:true},1).wait(258));

	// background
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_69.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,29.3,191.5,335.3);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"endFrame.jpg", id:"endFrame"},
		{src:"frame_01.jpg", id:"frame_01"},
		{src:"frame_02.jpg", id:"frame_02"},
		{src:"frame_06.jpg", id:"frame_06"},
		{src:"paper.jpg", id:"paper"},
		{src:"printer_01.jpg", id:"printer_01"},
		{src:"zoomIn.jpg", id:"zoomIn"}
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
an.compositions['B61A9D64C8DF436F89671266C87EE568'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;