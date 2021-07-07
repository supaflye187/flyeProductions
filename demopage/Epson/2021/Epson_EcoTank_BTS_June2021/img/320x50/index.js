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



(lib.background_gradient = function() {
	this.initialize(img.background_gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.backpack = function() {
	this.initialize(img.backpack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,44);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,136);


(lib.kidSchool = function() {
	this.initialize(img.kidSchool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,175);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,61);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,147);


(lib.schoolPaper = function() {
	this.initialize(img.schoolPaper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,41);


(lib.shaq_img = function() {
	this.initialize(img.shaq_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,386);// helper functions:

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


(lib.txt_homework = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(-57.75,-179.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAtIgRgdIgHAHIAAAWIgSAAIAAhZIASAAIAAAvIAVgWIAWAAIgZAXIAbApg");
	this.shape_1.setTransform(-62.725,-182.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAhIAAhAIARAAIAAAMIADgFIAFgFIAGgDIAGAAIAEAAIAAARIgDgBIgEAAQgEAAgEACIgGAEIgCAHIAAAHIAAAdg");
	this.shape_2.setTransform(-68.95,-181.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_3.setTransform(-75.625,-181.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAMAhIgMgrIAAAAIgLArIgSAAIgVhBIATAAIAMAsIALgsIARAAIALAsIABAAIALgsIATAAIgVBBg");
	this.shape_4.setTransform(-84.7,-181.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAgQgGgDgFgEQgEgFgCgGQgDgGAAgIQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAHAAQAIAAAGADQAHADAEAFQAEAGABAHQACAHAAAGIgvAAQABAJAEAEQAEAEAGAAQAGAAAEgDQAEgCABgEIAQAAQgEAMgIAFQgIAFgLAAQgHAAgGgCgAgGgSQgDABgBACQgCACgBADIgBAEIAdAAQgCgHgDgDQgDgEgHAAQgDAAgDACg");
	this.shape_5.setTransform(-93.52,-181.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgAhIAAgkIgBgGIgBgFIgDgDIgGgCQgEAAgDACIgDADQgCADABADIgBAGIAAAjIgRAAIAAgjIAAgGIgBgFIgEgEQgCgCgEAAIgEABIgDACIgEAFIgBAHIAAAlIgSAAIAAhAIARAAIAAAJQAEgFAEgDQAFgDAHABQAGAAAGABQAEADACAGQADgEAFgEQAFgCAHAAIAKAAQAEACADACQADADACAFQACAEAAAGIAAArg");
	this.shape_6.setTransform(-102.85,-181.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_7.setTransform(-112.475,-181.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAtIAAgnIgjAAIAAAnIgUAAIAAhZIAUAAIAAAjIAjAAIAAgjIAUAAIAABZg");
	this.shape_8.setTransform(-121.075,-182.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAtIAAg0IgLAAIAAgMIALAAIAAgFQAAgJAFgGQAEgFALAAIAGAAIAEAAIAAAOIgGgBQgEAAgCACQgBACAAAEIAAAEIAMAAIAAAMIgMAAIAAA0g");
	this.shape_9.setTransform(-131.45,-182.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_10.setTransform(-137.425,-181.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgKAhQgFgBgFgDQgEgCgDgFQgCgEAAgHIARAAIABAFQAAABABAAQAAABAAAAQABABAAAAQABABAAAAIAFACIADAAIAFAAIADgBIADgDQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgEgGgCIgOgEIgHgCIgHgCQgDgCgCgDQgCgDAAgEQAAgHACgEQADgEAEgCQAEgDAFgBIAKAAIAKABIAJADQAEACACAEQADAEAAAGIgQAAQgBgFgEgCQgDgBgEAAIgDAAIgEABIgCABIgBAEQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIAFACIAFACIAHABIAIADIAHADQADABABADQADADAAAFQAAAGgEAFQgCAEgEADQgEACgFABIgMABIgKgBg");
	this.shape_11.setTransform(-148.25,-181.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AALArIgIgBIgGgCQgDgCgBgDQgCgDAAgFIAAglIgLAAIAAgMIALAAIAAgUIARAAIAAAUIANAAIAAAMIgNAAIAAAfQAAAFABABQACACAEAAIADAAIADgBIAAAOIgFABg");
	this.shape_12.setTransform(-153.975,-182.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_13.setTransform(-160.025,-181.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgfAtIAAhZIAUAAIAABJIArAAIAAAQg");
	this.shape_14.setTransform(-167.35,-182.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALArIgIgBIgGgCQgDgCgBgDQgCgDAAgFIAAglIgLAAIAAgMIALAAIAAgUIARAAIAAAUIANAAIAAAMIgNAAIAAAfQAAAFABABQACACAEAAIADAAIADgBIAAAOIgFABg");
	this.shape_15.setTransform(-68.325,-200.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AANAhIAAgkQAAgIgDgDQgDgFgGAAQgGABgEAEQgDAEAAAKIAAAhIgSAAIAAhAIARAAIAAAJIABAAQADgFAFgDQAFgCAGAAQAHAAAEABQAFACADADQACAEABAFQACAFAAAHIAAAmg");
	this.shape_16.setTransform(-74.275,-199.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAtIAAhAIARAAIAABAgAgIgdIAAgPIARAAIAAAPg");
	this.shape_17.setTransform(-79.75,-200.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAhIAAhAIARAAIAAAMIADgFIAFgFIAFgCIAHgBIAEAAIAAARIgDgBIgDAAQgFAAgEACIgGAEIgBAHIgBAHIAAAdg");
	this.shape_18.setTransform(-83.55,-199.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjAtIAAhZIAoAAQAIAAAGACQAGADAEAEQAEAEABAFQACAFAAAGQAAAFgCAGQgBAEgEAEQgEAEgGACQgGADgIAAIgUAAIAAAggAgPgCIAPAAIAGAAIAFgCIAEgEQACgDAAgEQAAgEgCgDIgEgEIgFgCIgGgBIgPAAg");
	this.shape_19.setTransform(-90.375,-200.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_20.setTransform(-102.325,-199.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALArIgIgBIgGgCQgDgCgBgDQgCgDAAgFIAAglIgLAAIAAgMIALAAIAAgUIARAAIAAAUIANAAIAAAMIgNAAIAAAfQAAAFABABQACACAEAAIADAAIADgBIAAAOIgFABg");
	this.shape_21.setTransform(-108.525,-200.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AANAtIAAglQAAgIgDgDQgDgEgGAAQgGAAgEAFQgDADAAAKIAAAiIgSAAIAAhZIASAAIAAAiQAEgGAFgCQAFgDAFAAQAHAAAEACQAFACADADQACAEABAFQACAFAAAFIAAAog");
	this.shape_22.setTransform(-118.025,-200.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAtQgFgBgEgDQgEgDgDgEQgDgDAAgGIASAAQABAFADACQAEACAEAAQAIAAADgFQAEgEgBgHIAAgJQgDAFgFADQgFACgFAAQgIAAgFgCQgFgDgEgEQgDgFgCgFQgBgGAAgHIABgMQACgGAEgEQADgFAGgCQAFgDAHAAQAFAAAFACQAFADADAFIAAgIIARAAIAAA8IgBAJQgBAFgDAEQgEAFgGADQgHADgKAAIgKgBgAgFgeQgDACgCACIgDAGIAAAHIAAAHQABAEACACQABACADACQADACADAAQAEAAADgCIAFgEQACgBAAgEIABgGIAAgIIgDgGQgCgDgDgCQgCgBgFAAQgDAAgCABg");
	this.shape_23.setTransform(-125.875,-198.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAgQgEgCgDgEQgDgDgBgFIgBgLIAAgoIASAAIAAAkQAAAIADAFQACADAHAAQAGABADgFQAEgEAAgKIAAgiIASAAIAABBIgSAAIAAgJQgDAGgGACQgEACgGABQgHgBgFgBg");
	this.shape_24.setTransform(-133.325,-199.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAgQgGgCgFgFQgEgEgDgHQgCgGAAgIQAAgHACgGQADgHAEgEQAFgFAGgCQAGgCAHAAQAIAAAGACQAGACAFAFQAEAEACAHQADAGAAAHQAAAIgDAGQgCAHgEAEQgFAFgGACQgGACgIAAQgHAAgGgCgAgHgSIgFAFIgCAGIgBAHIABAIIACAGIAFAFQADACAEAAQAEAAAEgCQADgCABgDIADgGIABgIIgBgHIgDgGQgBgDgDgCQgEgCgEAAQgEAAgDACg");
	this.shape_25.setTransform(-141.025,-199.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AANAhIAAgkQAAgIgDgDQgDgFgGAAQgGABgEAEQgDAEAAAKIAAAhIgSAAIAAhAIARAAIAAAJIABAAQADgFAFgDQAFgCAGAAQAHAAAEABQAFACADADQACAEABAFQACAFAAAHIAAAmg");
	this.shape_26.setTransform(-148.675,-199.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghAtIAAhZIBCAAIAAARIgvAAIAAATIArAAIAAAOIgrAAIAAAXIAxAAIAAAQg");
	this.shape_27.setTransform(-156.4,-200.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-172.4,-209.5,238.3,236.8), null);


(lib.txt_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape.setTransform(74.875,-1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBFIAAiJIAiAAIAACJg");
	this.shape_1.setTransform(69.95,-6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBFIAAiJIAiAAIAACJg");
	this.shape_2.setTransform(65,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBFIAAhoIAiAAIAABogAgRgqIAAgaIAiAAIAAAag");
	this.shape_3.setTransform(60.1,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJBFIAAhFQAAgGgCgDQgCgCgFAAQgEAAgCACQgCADAAAGIAABFIgiAAIAAiJIAiAAIAAAtIABAAQAEgJAGgDQAHgCAGAAQAGgBAEACQAFABAEAEQAEADACAGQACAFAAAIIAABOg");
	this.shape_4.setTransform(52.625,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA1QgIgCgGgFQgGgGgDgKQgDgLAAgRQAAgRADgMQAEgLAGgGQAHgGAIgCQAJgCAIAAQAMAAAIAEQAHADAFAFQAEAGACAIQACAIAAAKIgfAAIgBgKIgCgHQgCgEgFAAQgCAAgCABQgCACgBAEIgCAKIgBAPIABAPIACAKQABAEACACQACABACAAQAEAAADgEQADgDAAgKIAAgHIAfAAQAAAMgCAJQgCAJgFAFQgKALgWAAQgJAAgJgCg");
	this.shape_5.setTransform(43.075,-4.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBFQgIgDgGgEQgFgFgEgHQgDgIAAgJQAAgNAGgKQAHgKANgGQgFgIgEgIQgEgIAAgIQAAgHACgGQAEgGAEgEQAGgEAHgDQAHgCAJAAQAIAAAHACQAHADAGAEQAEAEADAGQAEAGAAAHQgBAKgGAJQgGAJgMAIIAQAUIADgIIABgJIAfAAQAAAMgFALQgDALgIAIIASAaIgmAAIgGgIIgIAEIgIADIgHACIgKABQgIAAgIgCgAgXAWQgDAEAAADQAAADACADQABADADACIAEADIAFABIAHgBIAEgDIgRgZQgEADgCAEgAgOgvQgDADAAAEQAAADACAEIAHAKQAGgGACgEQADgEAAgDQgBgEgCgDQgDgDgEAAQgEAAgDADg");
	this.shape_6.setTransform(27.7,-6.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBFIAAiJIAiAAIAACJg");
	this.shape_7.setTransform(14.25,-6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBFIAAiJIAiAAIAACJg");
	this.shape_8.setTransform(9.3,-6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBFIAAhoIAiAAIAABogAgQgqIAAgaIAiAAIAAAag");
	this.shape_9.setTransform(4.35,-6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSBGIAAhQIgLAAIAAgXIALAAIAAgHQABgJABgFQACgGADgDQAFgDAFgCQAGgBAJAAIAIAAIAJABIAAAVIgDAAIgDAAQgDAAgDACQgCACgBADIAAAHIAPAAIAAAXIgPAAIAABQg");
	this.shape_10.setTransform(-1.1,-6.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALBEIgMgBQgGAAgDgDQgEgDgCgFQgBgFgBgJIAAg3IgLAAIAAgXIALAAIAAgfIAjAAIAAAfIANAAIAAAXIgNAAIAAAxQAAAEABADQACACAFAAIAFAAIAAAWIgKABg");
	this.shape_11.setTransform(-12.1,-6.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAuQgJgJAAgRIAeAAIABAGIACAEQACAEAFAAQADAAADgCQADgCAAgFQAAgEgEgDIgIgEIgMgEQgHgCgFgEQgGgEgEgFQgDgGAAgKQAAgHACgGQADgGAFgEQAFgFAIgCQAIgDAJAAQAnAAAAAhIgeAAQAAgGgCgDQgDgCgEAAQgDAAgCACQgDACAAAEQAAAEAEACQAEADAEABIAMAEQAHACAFAEQAGADAEAFQADAGAAAKQAAAIgCAHQgDAGgGAFQgFAEgIADQgIACgJAAQgVAAgKgJg");
	this.shape_12.setTransform(-19.575,-4.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaA0QgFgBgDgDQgEgDgCgGQgCgFAAgIIAAhOIAiAAIAABEQAAAGACADQACADAEAAQAFAAACgDQACgDAAgGIAAhEIAiAAIAABnIghAAIAAgMIgBAAQgGAOgSAAIgLgBg");
	this.shape_13.setTransform(-29.025,-4.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghA7QgKgMAAgVIAAgDIAhAAIAAAHQAAAKADADQACADAEAAQADAAADgDQADgDAAgKIAAhjIAkAAIAABeQAAAZgMAKQgLAKgWAAQgWAAgKgLg");
	this.shape_14.setTransform(-38.925,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-45.1,-20.3,124.5,26.9), null);


(lib.txt_enoughInk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(30.625,-179.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAxIgTggIgHAIIAAAYIgUAAIAAhhIAUAAIAAA0IAXgZIAXAAIgbAZIAeAtg");
	this.shape_1.setTransform(25.325,-182.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAlIAAgoQAAgIgDgFQgDgEgHAAQgHAAgDAFQgEAEAAALIAAAlIgTAAIAAhGIASAAIAAAKIABAAQADgHAGgDQAFgCAGAAQAIAAAFACQAFABADAEQADAFABAEIABANIAAArg");
	this.shape_2.setTransform(16.925,-181.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAxIAAhhIAVAAIAABhg");
	this.shape_3.setTransform(10.875,-182.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAxIAAg5IgLAAIAAgNIALAAIAAgFQABgKAFgGQAGgGALAAIAGAAIAFABIAAAOIgIAAQgEAAgBACQgBABAAAFIAAAEIANAAIAAANIgNAAIAAA5g");
	this.shape_4.setTransform(2.9,-182.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgEgEgDgIQgDgGAAgJQAAgHADgIQADgHAEgEQAFgFAHgDQAGgCAIAAQAIAAAHACQAHADAFAFQAFAEADAHQACAIAAAHQAAAJgCAGQgDAIgFAEQgFAFgHADQgHADgIAAQgIAAgGgDgAgIgUQgCACgCADIgEAIIAAAHIAAAJIAEAGQACAEACACQAEACAEgBQAFABADgCQADgCADgEIADgGIAAgJIAAgHIgDgIQgDgDgDgCQgDgCgFAAQgEAAgEACg");
	this.shape_5.setTransform(-3.55,-181.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAuIgIAAQgDAAgDgCQgDgCgCgEQgCgDAAgFIAAgpIgMAAIAAgNIAMAAIAAgVIASAAIAAAVIAPAAIAAANIgPAAIAAAiQAAAFACABQACACAFABIADAAIADgBIAAAPIgGAAg");
	this.shape_6.setTransform(-13.875,-182.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAlIAAgoQAAgIgDgFQgDgEgHAAQgHAAgDAFQgEAEAAALIAAAlIgTAAIAAhGIASAAIAAAKIABAAQADgHAGgDQAFgCAGAAQAIAAAFACQAFABADAEQADAFABAEIABANIAAArg");
	this.shape_7.setTransform(-20.225,-181.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAiQgFgCgDgEQgDgDgBgGIgBgMIAAgqIATAAIAAAmQAAAJADAFQADAEAHAAQAHAAADgEQAEgGAAgKIAAgkIATAAIAABGIgSAAIAAgKIgBAAQgDAGgGADQgFADgGAAQgIgBgFgCg");
	this.shape_8.setTransform(-28.325,-181.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgEgEgDgIQgDgGAAgJQAAgHADgIQADgHAEgEQAFgFAHgDQAGgCAIAAQAJAAAGACQAHADAFAFQAFAEADAHQACAIAAAHQAAAJgCAGQgDAIgFAEQgFAFgHADQgGADgJAAQgIAAgGgDgAgIgUQgCACgDADIgDAIIAAAHIAAAJIADAGQADAEACACQAEACAEgBQAFABAEgCQACgCACgEIAEgGIABgJIgBgHIgEgIQgCgDgCgCQgEgCgFAAQgEAAgEACg");
	this.shape_9.setTransform(-36.5,-181.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjAlIAAgoIAAgHIgCgFIgEgEIgGgBQgEAAgDABIgEAFIgCAGIAAAGIAAAnIgTAAIAAgoIAAgFIgBgGQgBgDgCgCQgDgBgFAAIgDAAIgFADQgCABgBAEQgCADAAAFIAAApIgTAAIAAhGIASAAIAAAJQAEgFAGgDQAFgDAHAAQAHAAAGACQAEADADAHQADgFAGgEQAFgDAHAAQAGAAAFABQAFABADADQAEADACAFQABAFAAAHIAAAvg");
	this.shape_10.setTransform(-46.875,-181.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaAxIgIgWIgkAAIgHAWIgWAAIAlhhIAWAAIAkBhgAgLALIAYAAIgNgjIAAAAg");
	this.shape_11.setTransform(-57.8,-182.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgLAkQgGgBgEgDQgFgDgDgFQgDgEAAgIIASAAQABADABADIAEADIAEACIAFABIAEAAIAEgCIADgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgEgFgCIgQgFIgIgCIgIgCQgCgDgDgDQgCgDAAgFQAAgGAEgFQACgEAEgDQAFgDAFAAIALgBIALABQAGAAADADQAFADADAEQADAFAAAGIgTAAQAAgGgEgCQgDgCgFAAIgEAAIgDABIgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAFADIAGACIAJACIAIACIAHAEIAFAEQACADAAAFQAAAIgDAEQgDAFgFADQgEADgGABIgLACIgMgCg");
	this.shape_12.setTransform(-70,-181.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgTAiQgFgCgDgEQgDgDgBgGIgBgMIAAgqIATAAIAAAmQAAAJADAFQADAEAHAAQAHAAADgEQAEgGAAgKIAAgkIATAAIAABGIgSAAIAAgKIgBAAQgDAGgGADQgFADgGAAQgIgBgFgCg");
	this.shape_13.setTransform(-77.775,-181.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgOAjQgHgDgFgFQgEgEgDgIQgDgGAAgJQAAgHADgIQADgHAEgEQAFgFAHgDQAGgCAIAAQAJAAAGACQAHADAFAFQAFAEADAHQACAIAAAHQAAAJgCAGQgDAIgFAEQgFAFgHADQgGADgJAAQgIAAgGgDgAgIgUQgCACgDADIgDAIIAAAHIAAAJIADAGQADAEACACQAEACAEgBQAFABAEgCQACgCACgEIAEgGIABgJIgBgHIgEgIQgCgDgCgCQgEgCgFAAQgEAAgEACg");
	this.shape_14.setTransform(-86,-181.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgJAxIAAhhIATAAIAABhg");
	this.shape_15.setTransform(-91.975,-182.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgTAiQgFgCgDgEQgDgDgBgGIgBgMIAAgqIATAAIAAAmQAAAJADAFQADAEAHAAQAHAAADgEQAEgGAAgKIAAgkIATAAIAABGIgSAAIAAgKIgBAAQgDAGgGADQgFADgGAAQgIgBgFgCg");
	this.shape_16.setTransform(-97.825,-181.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgNAjQgGgDgFgFQgFgEgCgIQgDgGAAgIQAAgHACgIQADgGAEgFQAFgGAHgCQAHgDAHAAQAHAAAGABQAFACAFADQAFAEACAEQADAGABAHIgTAAQgCgNgNAAQgDAAgEACIgFAGIgDAHIAAAIIAAAHIADAHQACAEADABQADACAEAAQAHABAEgEQADgEABgHIATAAQgCAOgJAIQgJAHgOABQgHAAgHgDg");
	this.shape_17.setTransform(-105.775,-181.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_18.setTransform(-111.525,-182.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgRAvQgGgDgEgFQgEgGgCgHQgCgHAAgHQAAgHACgGQACgGAEgGQAEgFAFgDQAGgDAIAAQAGAAAFADQAGADADAFIABAAIAAgkIATAAIAABhIgTAAIAAgJQgDAGgGADQgFACgGAAQgIAAgGgDgAgHgHQgDACgCADQgCACgBAEIgBAJIABAIIADAHQACADAEACQADACADAAQAFAAADgBQAEgCACgEQACgDAAgEIABgJIgBgIQAAgEgCgCQgCgDgEgCQgDgCgFAAQgDAAgEACg");
	this.shape_19.setTransform(-117.625,-182.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_20.setTransform(-123.475,-182.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAVAxIgCgLIgCgMQgBgIgDgEQgEgDgIAAIgVAAIAAAmIgVAAIAAhhIA0AAQAGAAAGACQAFACAEAEIAGAJQACAEAAAGQAAAJgEAGQgEAGgIADIAAAAIAHADIAEAGIACAHIABAHIABAGIAAAGIABAGIACAFgAgUgEIAXAAQAHAAAEgDQAEgDAAgIQAAgHgEgDQgEgDgHAAIgXAAg");
	this.shape_21.setTransform(-129.975,-182.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAkQgFgBgDgDQgDgDgCgEQgCgDAAgGQAAgGACgEQACgEAEgCQADgCAFAAIAIgCIAJgCIAHgBQADAAACgDQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgFIgCgDIgEgBIgFgBQgFAAgDADQgEACAAAGIgUAAQABgGADgFQADgFAEgCQAFgEAGgBIALgBIALABIAKADQAEADADADQADAEAAAGIAAAkIABAKQAAAEACACIgUAAIgBgDIgBgEQgEAGgHABQgFACgHAAQgFAAgEgBgAAJACIgEACIgEAAIgEABIgEABIgEABIgCADIgBAGIABADIACAEIAEABIAFABQAEAAAEgCIAEgFIACgFIAAgFIAAgIg");
	this.shape_22.setTransform(-10.175,-198.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAOAxIAAgoQAAgJgDgDQgDgEgHAAQgHAAgDAEQgEAEAAALIAAAlIgTAAIAAhhIATAAIAAAlIABAAQADgGAGgDQAFgDAFAAQAIAAAFACQAFACADAEQADAEABAFIABALIAAAsg");
	this.shape_23.setTransform(-21.975,-199.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALAvIgIgBQgDgBgDgCQgDgBgCgDQgCgEAAgFIAAgpIgMAAIAAgNIAMAAIAAgWIASAAIAAAWIAPAAIAAANIgPAAIAAAiQAAAFACACQACABAFAAIADAAIADAAIAAAPIgGABg");
	this.shape_24.setTransform(-28.475,-199.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_25.setTransform(-32.625,-199.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAMAjIgMguIAAAAIgLAuIgVAAIgWhGIAUAAIAOAwIAAAAIALgwIASAAIANAwIANgwIAUAAIgWBGg");
	this.shape_26.setTransform(-40,-198.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLAkQgFgBgFgDQgFgDgDgEQgDgFAAgHIATAAQgBACACADIADAEIAFACIAFABIAEgBIAEgBIADgEQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgFgHgDIgPgEIgIgCIgHgDQgDgCgDgDQgCgDAAgFQAAgGADgFQADgFAEgCQAFgCAFgCIALgBIALABQAFACAFACQAEADADAEQACAFABAGIgSAAQgBgFgEgCQgEgCgEgBIgEAAIgDACIgDACQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAABIAFACIAGACIAJABIAIADIAHADIAFAGQACACAAAGQAAAHgDAFQgDAEgFADQgEADgFABIgMABIgMgBg");
	this.shape_27.setTransform(-53.1,-198.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOAiQgGgCgFgFQgFgFgCgHQgDgHAAgIQAAgHADgHQACgHAFgFQAFgFAHgDQAGgDAIAAQAJABAGADQAHADAEAGQAFAHACAHQACAHgBAIIgyAAQAAAJAFAEQAEAFAHAAQAGAAAEgDQAFgDABgDIARAAQgEANgJAFQgIAGgMgBQgIAAgHgDgAgHgUIgFADIgCAGIgBAEIAfAAQgCgHgDgEQgEgEgHAAQgEAAgDACg");
	this.shape_28.setTransform(-60.695,-198.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAjAkIAAgnIAAgGIgCgGIgEgEIgGgBQgEAAgDACIgEADIgCAGIAAAHIAAAmIgTAAIAAgmIAAgHIgBgGQgBgCgCgBQgDgCgFAAIgDABIgFACQgCACgBADQgCADAAAFIAAAoIgTAAIAAhGIASAAIAAAKQAEgFAGgEQAFgDAHAAQAHABAGACQAEADADAGQADgFAGgDQAFgDAHgBQAGABAFABQAFABADADQAEADACAFQABAFAAAHIAAAug");
	this.shape_29.setTransform(-70.875,-198.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOAiQgHgCgFgFQgEgFgDgGQgDgIAAgIQAAgHADgIQADgHAEgFQAFgEAHgDQAGgCAIgBQAIABAHACQAHADAFAEQAFAFACAHQADAIAAAHQAAAIgDAIQgCAGgFAFQgFAFgHACQgHADgIAAQgIAAgGgDgAgIgUQgCACgCADIgEAHIAAAIIAAAIIAEAIQACADACACQAEACAEAAQAFAAADgCQAEgCACgDIACgIIABgIIgBgIIgCgHQgCgDgEgCQgDgCgFAAQgEAAgEACg");
	this.shape_30.setTransform(-81.3,-198.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAwQgKgEgGgHQgGgHgEgJQgDgKAAgKQAAgKADgKQAEgJAGgHQAGgHAKgEQAJgEAJAAQAJAAAHACQAHACAGAFQAFAEAEAHQAEAGABAJIgVAAQgBgEgCgDIgEgFQgDgDgEgBQgEgBgEAAQgGAAgFADQgFACgDAFQgEAFgBAGQgBAGAAAGIABAMQABAFAEAFQADAFAFADQAFACAGAAQALAAAFgGQAGgGABgKIAVAAQgBAKgEAHQgDAHgGAGQgFAFgIADQgHACgKAAQgJAAgJgDg");
	this.shape_31.setTransform(-90.6,-199.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-136.4,-209.4,242.60000000000002,235), null);


(lib.txt_ecoTank = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABlBpQgJgBgGgDQgHgFgEgHQgDgGAAgNIAAhZIgbAAIAAgdIAbAAIAAgtIAqAAIAAAtIAeAAIAAAdIgeAAIAABLQAAALADADQAEAEALAAIAMgBIAAAgIgYACgAEHBpIAAhXQAAgSgGgJQgGgJgPAAQgRAAgIAKQgIAKABAXIAABQIgrAAIAAjTIArAAIAABQIABAAQAIgNAMgHQAMgFAMAAQARgBALAFQALAEAGAJQAHAIACAMQACALABAOIAABegAgKBpIAAiZIAoAAIAACZgAiBBpIgkiPIgBAAIgjCPIgwAAIg4jTIAvAAIAiCQIAAAAIAliQIAsAAIAkCSIABAAIAjiSIAtAAIg4DTgAgKhHIAAgjIAoAAIAAAjg");
	this.shape.setTransform(-46.0102,-185.5521,0.465,0.465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AAyB3QgJgDgIgFQgHgGgEgJQgEgIAAgMQAAgNAFgJQAEgIAIgFQAHgFAJgDIA3gJQAHgCAEgDQAEgEAAgGQAAgHgDgDQgCgEgEgCQgDgDgFAAIgLgBQgMAAgHAFQgIAGgBALIgqAAQABgOAHgJQAGgKAKgGQAKgGANgDQANgCAMAAIAYABQAMACAKAFQAJAFAHAIQAGAIAAAOIABBkQABAJADAFIgrAAIgDgPQgKAKgNAEQgOAFgOAAQgLAAgKgDgAByAuIgdAFIgJADIgIAEQgDACgCAEQgDAEAAAGQAAAGADADQACAEADADIAJADIAJABQANAAAHgFQAHgEADgFQADgGABgGIABgKIAAgQgAkNB0QgPgGgKgKQgLgLgFgPQgGgPAAgSQAAgSAGgQQAFgNALgLQAKgLAPgFQAOgGATAAQASAAAOAGQAPAFALALQAKALAGANQAFAQAAASQAAASgFAPQgGAPgKALQgLAKgPAGQgOAGgSAAQgTAAgOgGgAj+gDQgHADgFAHQgEAHgCAJQgCAJAAAJQAAAJACAJQACAJAEAHQAFAHAHAEQAHAEALAAQAKAAAIgEQAHgEAEgHQAEgHACgJQACgJAAgJQAAgJgCgJQgCgJgEgHQgEgHgHgDQgIgEgKAAQgLAAgHAEgAm2B0QgOgGgKgKQgKgLgGgOQgFgPAAgRQAAgSAFgPQAFgOAKgMQAKgLAPgGQAOgGATAAQAOAAAMADQANAEAKAHQAKAHAGALQAHAKAAAPIgpAAQgEgZgbAAQgKAAgHAEQgHAEgEAHQgFAHgBAJQgCAJAAAJQAAAIACAIQABAJAEAHQAEAHAHAFQAHAEAKAAQAPAAAIgIQAIgJADgOIAoAAQgEAegUARQgTAQgfAAQgRAAgPgGgAHWB2IgqhFIgRAQIAAA1IgqAAIAAjUIAqAAIAABxIA2g2IAyAAIg6A3IBABigAEmB2IAAhXQAAgTgGgKQgGgIgPAAQgRAAgIAJQgHALAAAXIAABRIgrAAIAAiZIAoAAIAAAVIABAAQAIgNANgGQANgGANAAQARAAALAEQALAFAGAIQAHAIACAMQADALAAAOIAABfgAhRB2IAAisIhAAAIAAgoICtAAIAAAoIg/AAIAACsgAqYB2IAAjUICfAAIAAAoIhwAAIAAAtIBnAAIAAAjIhnAAIAAA1IByAAIAAAngAI5AJQgNgFgJgIQgKgIgGgNQgFgNAAgPQAAgPAFgNQAGgMAKgJQAJgJANgFQAMgFAOAAQAOAAANAFQAMAFAKAJQAJAJAGAMQAGANAAAPQAAAPgGANQgGANgJAIQgKAIgMAFQgNAFgOAAQgOAAgMgFgAI/hmQgJAEgHAHQgHAHgEAKQgEAJAAAMQAAAMAEAJQAEAKAHAHQAHAHAJAEQAJAEALAAQALAAAJgEQAJgEAHgHQAHgHAEgKQAEgJAAgMQAAgMgEgJQgEgKgHgHQgHgHgJgEQgJgEgLAAQgLAAgJAEgAJjgPIgSghIgKAAIAAAhIgPAAIAAhMIAdAAQAOAAAIAFQAHAFABAMQAAAGgCADQgCAEgCACIgHAEIgHACIAUAhgAJHg7IAOAAQAGAAAEgCQAFgCAAgHQAAgDgCgCIgEgDIgKgBIgNAAg");
	this.shape_1.setTransform(4.5283,-186.1218,0.465,0.465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-60.2,-195.7,328.9,40.69999999999999), null);


(lib.txt_cartridgeFree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(61.475,-190.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAxQgGgBgEgDQgFgDgDgEQgDgFAAgGIATAAQACAGAEACQAEACAEAAQAIAAAEgFQAEgFAAgHIAAgKIgBAAQgDAGgGACQgFADgGAAQgIAAgGgDQgGgDgDgEQgEgFgCgGQgBgGAAgIQAAgHACgGQABgHAEgEQAEgFAGgDQAGgDAHAAQAGAAAGACQAFADADAGIABAAIAAgJIASAAIAABCIgBAKQgBAFgEAFQgEAFgHADQgHADgMAAIgKgBgAgGghQgDACgCADQgCADgBADIgBAIIABAIIADAGQABADADABQADACAEAAQAEAAADgBQAEgCACgDIADgFIABgHIgBgJQgBgEgCgDIgFgFQgDgBgFAAQgDAAgDABg");
	this.shape_1.setTransform(55.275,-191.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAlIAAgoQAAgIgDgFQgDgEgHAAQgGAAgEAFQgEAEAAALIAAAlIgUAAIAAhHIATAAIAAAKIAAAAQAFgGAFgDQAFgDAHAAQAHAAAFACQAGADACADIAFAKIABAMIAAArg");
	this.shape_2.setTransform(47.2,-192.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_3.setTransform(41.425,-193.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAvIgIgBQgDAAgDgCQgDgCgCgDQgCgEAAgFIAAgpIgMAAIAAgNIAMAAIAAgWIATAAIAAAWIAOAAIAAANIgOAAIAAAiQAAAFABACQACACAFAAIADgBIADAAIAAAPIgGABg");
	this.shape_4.setTransform(37.275,-193.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAlIAAgoQAAgIgDgFQgDgEgHAAQgHAAgDAFQgEAEAAALIAAAlIgUAAIAAhHIATAAIAAAKIAAAAQAFgGAFgDQAFgDAHAAQAHAAAFACQAFADAEADQACAEABAGIACAMIAAArg");
	this.shape_5.setTransform(30.9,-192.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_6.setTransform(25.125,-193.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAlIAAhHIASAAIAAAOIABAAIADgHIAFgEIAGgEIAHgBIAFABIAAASIgEAAIgDAAQgGAAgDABQgEACgCADQgCADAAAFIgBAIIAAAgg");
	this.shape_7.setTransform(21.1,-192.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAxIAAhhIArAAQAKAAAGACQAHADAEAEQAEAFACAFIABAMQAAAGgBAGQgCAFgEAEQgEAEgHADQgGADgKAAIgVAAIAAAjgAgQgCIAQAAIAHgBIAGgCQACgBACgDQABgDAAgFQAAgFgBgCQgCgDgCgCIgGgCIgHgBIgQAAg");
	this.shape_8.setTransform(13.825,-193.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAjQgHgDgFgFQgFgFgCgHQgDgHAAgIQAAgHADgHQACgHAFgFQAFgFAHgDQAHgDAHAAQAJAAAHAEQAGADAFAGQAEAGACAIQACAHgBAIIgyAAQAAAJAFAFQAEAEAHAAQAGAAAFgDQAEgDABgDIARAAQgEANgJAFQgIAGgMAAQgIAAgGgDgAgHgUIgFAEIgCAFIgBAEIAfAAQgCgHgDgEQgEgEgHAAQgEAAgDACg");
	this.shape_9.setTransform(1.3063,-192.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAjQgHgDgFgFQgFgFgCgHQgDgHAAgIQAAgHADgHQACgHAFgFQAFgFAHgDQAHgDAHAAQAJAAAHAEQAGADAFAGQAEAGACAIQACAHgBAIIgyAAQAAAJAFAFQAEAEAHAAQAGAAAFgDQAEgDABgDIARAAQgEANgJAFQgIAGgMAAQgIAAgGgDgAgHgUIgFAEIgCAFIgBAEIAfAAQgCgHgDgEQgEgEgHAAQgEAAgDACg");
	this.shape_10.setTransform(-6.5437,-192.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAlIAAhHIATAAIAAAOIAAAAIADgHIAFgEIAHgEIAGgBIAFABIAAASIgDAAIgEAAQgGAAgDABQgEACgCADQgBADgCAFIgBAIIAAAgg");
	this.shape_11.setTransform(-12.7,-192.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAxIAAhhIBFAAIAAASIgvAAIAAAXIAoAAIAAAPIgoAAIAAApg");
	this.shape_12.setTransform(-19.425,-193.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAIIAAgPIApAAIAAAPg");
	this.shape_13.setTransform(-26.575,-192.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNAjQgHgDgFgFQgFgFgCgHQgDgHAAgIQAAgHADgHQACgHAFgFQAFgFAHgDQAHgDAHAAQAJAAAHAEQAGADAFAGQAEAGACAIQACAHgBAIIgyAAQAAAJAFAFQAEAEAHAAQAGAAAFgDQAEgDABgDIARAAQgEANgJAFQgIAGgMAAQgIAAgGgDgAgHgUIgFAEIgCAFIgBAEIAfAAQgCgHgDgEQgEgEgHAAQgEAAgDACg");
	this.shape_14.setTransform(-33.2437,-192.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAxQgGgBgEgDQgFgDgDgEQgDgFAAgGIATAAQACAGAEACQAEACAEAAQAIAAAEgFQAEgFAAgHIAAgKIgBAAQgDAGgGACQgFADgGAAQgIAAgGgDQgGgDgDgEQgEgFgCgGQgBgGAAgIQAAgHACgGQABgHAEgEQAEgFAGgDQAGgDAHAAQAGAAAGACQAFADADAGIABAAIAAgJIASAAIAABCIgBAKQgBAFgEAFQgEAFgHADQgHADgMAAIgKgBgAgGghQgDACgCADQgCADgBADIgBAIIABAIIADAGQABADADABQADACAEAAQAEAAADgBQAEgCACgDIADgFIABgHIgBgJQgBgEgCgDIgFgFQgDgBgFAAQgDAAgDABg");
	this.shape_15.setTransform(-41.475,-191.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAvQgGgDgEgFQgEgGgCgHQgCgHAAgHQAAgHACgGQACgHAEgFQAEgFAGgDQAFgDAIAAQAGAAAFADQAGACADAFIABAAIAAgjIATAAIAABhIgSAAIAAgJIgBAAQgDAGgGADQgFACgGAAQgIAAgGgDgAgHgHIgFAFIgDAGIgBAIIABAJIADAHQACADAEACQADACAEAAQAEAAAEgCQADgBACgEIADgHIAAgJIAAgIIgDgGIgFgFQgEgCgEAAQgEAAgEACg");
	this.shape_16.setTransform(-49.825,-193.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAxIAAhGIATAAIAABGgAgJggIAAgQIATAAIAAAQg");
	this.shape_17.setTransform(-55.625,-193.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAlIAAhHIATAAIAAAOIAAAAIADgHIAFgEIAHgEIAGgBIAFABIAAASIgEAAIgDAAQgGAAgDABQgEACgCADQgBADgCAFIAAAIIAAAgg");
	this.shape_18.setTransform(-59.6,-192.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AALAvIgIgBQgDAAgDgCQgDgCgCgDQgCgEAAgFIAAgpIgMAAIAAgNIAMAAIAAgWIATAAIAAAWIAOAAIAAANIgOAAIAAAiQAAAFABACQACACAFAAIADgBIADAAIAAAPIgGABg");
	this.shape_19.setTransform(-65.025,-193.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWAlIAAhHIASAAIAAAOIABAAIADgHIAFgEIAHgEIAHgBIAEABIAAASIgDAAIgEAAQgGAAgDABQgEACgCADQgCADgBAFIgBAIIAAAgg");
	this.shape_20.setTransform(-69.65,-192.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAkQgEgBgEgDQgDgCgCgEQgCgEAAgGQAAgGACgEQACgEAEgCIAIgDIAIgBIAJgCIAHgBIAFgCQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBIgBgFIgDgDIgEgBIgFgBQgFAAgDADQgDACgBAGIgUAAQABgHADgEQADgFAFgDQAEgCAGgBIALgCIALABQAFABAFACQAFACACAEQADAEAAAHIAAAkIABAJQAAAFACACIgUAAIgBgEIAAgDQgFAFgHACQgFACgGAAQgGAAgEgCgAAKACIgEACIgFAAIgEABIgEABIgEACIgCADIgBAEIABAFIACADIAEABIAFABQAFAAADgCQADgCACgDIABgFIABgFIAAgHg");
	this.shape_21.setTransform(-76.575,-192.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAwQgJgEgGgHQgGgHgEgJQgDgKAAgKQAAgLADgJQAEgJAGgIQAGgGAJgFQAJgDALAAQAIgBAHADQAHACAGAFQAGAEADAHQAEAHABAIIgVAAQAAgEgCgDIgFgGIgHgDQgDgCgEABQgHAAgFACQgFADgDAFQgDAFgCAGQgBAGAAAGQAAAGABAGQACAFADAFQADAFAFADQAFACAHAAQAJAAAGgFQAGgGABgKIAVAAQgBAIgDAIQgEAIgFAFQgGAFgIADQgHADgJgBQgLAAgJgDg");
	this.shape_22.setTransform(-85.525,-193.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-91.8,-203.6,156.39999999999998,18.799999999999983), null);


(lib.txt_AGame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(80,-186.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAuQgJgEgGgGQgGgHgDgJQgEgJAAgLQAAgJAEgJQADgJAHgHQAGgHAJgDQAIgEAKAAQAMAAAJAEQAJAFAFAIQAGAIADAKQACAJAAAKIhDAAQABANAFAFQAGAGAKAAQAIAAAFgEQAGgEABgEIAXAAQgGARgLAHQgLAHgQAAQgKAAgJgDgAgJgbQgEACgCADQgDADgBAEIgBAGIApAAQgCgKgFgFQgEgFgKAAQgFAAgEACg");
	this.shape_1.setTransform(72.4792,-189.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuAwIAAg0IgBgIQAAgFgCgDQgBgDgDgCQgEgCgFAAQgFAAgEADQgDABgCAEQgCADAAAEIgBAJIAAAzIgZAAIAAgzIAAgJIgBgHQgCgEgDgBQgDgDgGAAIgFABIgGADQgDACgCAEQgCAFAAAHIAAA1IgZAAIAAhdIAYAAIAAAOIAAAAQAFgIAIgEQAHgEAJAAQAJAAAHADQAGAEAEAJQAEgHAHgEQAIgFAJAAQAIAAAGACQAGACAFAEQAEADADAHQACAGAAAKIAAA9g");
	this.shape_2.setTransform(59.275,-190);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAvQgGgBgEgEQgFgDgCgFQgCgGAAgHQAAgIACgFQADgFAFgDQADgCAHgCIALgCIALgCIAJgBQAFgBACgCQADgCAAgEQAAgFgCgCIgDgEIgGgCIgGAAQgHAAgEADQgEAEgBAHIgaAAQAAgJAEgGQAFgGAGgEQAGgDAHgCIAPgBIAOABQAHABAHADQAFADAFAFQADAFAAAIIAAAwIABAMQABAGACADIgaAAIgCgFIAAgEQgHAGgIADQgIACgIAAQgHAAgFgCgAAMADIgFACIgGABIgFAAIgFACIgGACIgDAEIgBAGIABAGIADAEIAGACIAFAAQAHAAAFgCQAEgDABgDQACgEABgEIABgFIAAgKg");
	this.shape_3.setTransform(46.1,-189.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWA+QgMgFgIgJQgIgJgFgMQgEgMAAgPQAAgNAEgNQAFgMAIgJQAIgJAMgGQAMgEAOAAQAJAAAKADQAJADAIAFQAHAGAFAIQAFAJABALIgbAAQgDgLgHgFQgHgFgKgBQgJABgHADQgGADgFAHQgEAGgCAIQgCAIAAAHQAAAIACAJQACAHAEAGQAFAGAGAEQAHADAJABQAOAAAHgIQAIgGABgOIgcAAIAAgVIA2AAIAABFIgSAAIgDgOQgIAKgJADQgJAEgJABQgOAAgMgGg");
	this.shape_4.setTransform(34.075,-191.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgJAtIAAgkIgkAAIAAgSIAkAAIAAgkIATAAIAAAkIAkAAIAAASIgkAAIAAAkg");
	this.shape_5.setTransform(17.325,-189.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AAiBAIgKgdIgwAAIgKAdIgcAAIAwh/IAdAAIAwB/gAgQAPIAhAAIgRgvIAAAAg");
	this.shape_6.setTransform(5.9,-191.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAwIAAhdIAYAAIAAASIAAAAIAFgIQADgEADgCIAJgFQAEgBAFAAIAGABIAAAYIgFgBIgEAAQgIAAgEACQgFADgDAEQgCAEgCAFIgBALIAAAqg");
	this.shape_7.setTransform(-8,-190);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAtQgGgDgEgFQgEgEgBgIQgCgHAAgJIAAg4IAaAAIAAA0QAAAMADAFQAEAGAJAAQAKAAAEgGQAFgHAAgOIAAgwIAaAAIAABcIgZAAIAAgMIAAAAQgFAHgIAEQgHAEgIAAQgKAAgHgDg");
	this.shape_8.setTransform(-17.125,-189.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAuQgJgEgGgGQgGgHgEgJQgDgJAAgLQAAgKADgJQAEgJAGgHQAGgGAJgEQAJgDAKAAQALAAAJADQAJAEAGAGQAGAHAEAJQADAJAAAKQAAALgDAJQgEAJgGAHQgGAGgJAEQgJADgLAAQgKAAgJgDgAgKgaQgEACgDAFQgDAEgBAFIgBAKIABALQABAFADAFQADAEAEACQAEADAGAAQAGAAAFgDQAEgCADgEQACgFABgFQACgFAAgGQAAgEgCgGQgBgFgCgEQgDgFgEgCQgFgDgGAAQgGAAgEADg");
	this.shape_9.setTransform(-27.825,-189.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA/IgIAAIAAgWIAHABIAIAAQAFAAACgEQADgDAAgFIgBgFIghhXIAcAAIATA/IABAAIAUg/IAbAAIgnBoQgFAMgFAEQgIAFgOAAg");
	this.shape_10.setTransform(-37.85,-188.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPBAQgHgBgGgFQgGgDgEgGQgEgGAAgHIAZAAQACAHAFADQAFADAGgBQALAAAFgGQAFgHAAgJIAAgNQgFAIgHADQgIAEgIAAQgKAAgHgEQgIgEgFgGQgFgHgCgHQgCgIAAgKQAAgJACgIQADgJAFgHQAFgGAHgEQAIgDAKAAQAIAAAHADQAHAEAFAHIAAgMIAYAAIAABXIgBAMQgCAIgFAGQgFAGgKAFQgJADgPAAIgOgBgAgIgrQgEADgDADQgCADgCAGIgBAKIABAKQABAEADAEQACAEAEACQAEACAFABQAFAAAFgCIAHgGIAEgIIABgJIgBgLQgBgGgDgDQgCgEgEgDQgFgCgGAAQgEAAgEACg");
	this.shape_11.setTransform(-52.925,-188.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAwIAAgzQAAgMgEgGQgDgGgJAAQgKABgFAFQgEAHAAAOIAAAwIgaAAIAAhdIAYAAIAAAOIABAAQAFgIAIgFQAGgDAIAAQALAAAGADQAHADAEAEQAEAGABAHQACAHAAAIIAAA5g");
	this.shape_12.setTransform(-63.425,-190);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMBAIAAhcIAZAAIAABcgAgMgrIAAgUIAZAAIAAAUg");
	this.shape_13.setTransform(-70.925,-191.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAwIAAhdIAYAAIAAASIAAAAIAFgIQACgEAFgCIAIgFQAEgBAGAAIAFABIAAAYIgEgBIgGAAQgGAAgFACQgFADgDAEQgCAEgBAFIgCALIAAAqg");
	this.shape_14.setTransform(-76.1,-190);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1BAIAAh/IA8AAQAJgBAIACQAHACAFAEQAGADADAHQADAGAAAIQAAAKgEAHQgFAGgJAEQAMAEAGAIQAGAIAAAMQAAAKgEAHQgEAHgGAEQgHAFgHACQgJACgIAAgAgZArIAdAAIAIgBQAFgBACgCIAFgFQABgEABgEQgBgKgFgFQgGgEgJAAIgeAAgAgZgLIAcAAQAHAAAGgEQAEgDAAgJQABgEgCgDIgEgEIgHgDIgHgBIgaAAg");
	this.shape_15.setTransform(-86,-191.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-93.3,-203.5,176.5,22.900000000000006), null);


(lib.shaq_img_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ArnfBIAghJQASgNgFgmIgJglQg3gygSgwIgHgnIAEjBQgLgmgBhtIAAiLQAAgeAGgyIAGgsQgMgdgUixQgygygniEQgThDgJg4IudAEIgw1HIDxgIQAAgUA0hAIA0g9IgUhcQgDgVAgguQAgguAQAAQANAAAZgUIAWgUQASgeAhgEIAeACQARACAZgHIAWgHQAbgkAqAPIAkAVQAKAUAiAIIAgAEQAhgFARAWIAKAXIgECxQAAAPgoBRIgoBNID5AEIAogIQAhgeDWgBQDKAAAmAPIA5AUQAFgSAOgDQANgCAEAPQACANATgGIATgHQgHgbA+ACQBIAEAGgHQAKgNAYABQAMAAAKAEIAcgYQgQghAEiUIgEjCQAAgUATgMQAIgFAIgDIAUjRQBYiuCohBQBVggBCACQB2ACB0BoQAkAgAfAnIAZAgQAYAtANAuIAHAlIAACNIAUAgQAWALgEBOIgKBMQgMBdAAAUQAAANgOANIgOAKQgFAZgcBjIgcBdIAZAEQAbAEANAAQAUAABYAlQBNAwA4AsQAcAXBRA6QBGA1AOATQAYAgBVBJQAgAQBMBAIBtBlQAUAUAcA8IAxBgQAUAggIAoQAUAQAsEaIAhCMQAjCUAEAmIAQBfQAJA4AAANQAAAMAIBMQAIBNAAARQAAAgAYA0IAKArQANAuANAQQAMAOgJAvIgLBDQAAAggcBVIhBCFQhABogkA1QgXAhhCgCQhCgHgKAAQgLAAg6gbQg+gbgOgDIh9gYQgPgCgygkIgvgiIgIBoQAAAZgxAoIAIDNQgEAE85AEg");
	mask.setTransform(46.5634,205.725);

	// Layer_1
	this.instance = new lib.shaq_img();
	this.instance.setTransform(-144.5,28);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_img_1, new cjs.Rectangle(-144,30.1,381.2,381.4), null);


(lib.schoolPaper_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AmMiGQAFACH6hBIEaESIo6B4gAmMiGIAAAAIAAAAg");
	mask.setTransform(8.2744,3.3);

	// Layer_1
	this.instance = new lib.schoolPaper();
	this.instance.setTransform(-33.5,-17);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.schoolPaper_mc, new cjs.Rectangle(-31.4,-16.4,77.9,39.5), null);


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

	// Layer_1
	this.instance = new lib.printer();
	this.instance.setTransform(-103.45,82.25,1.1063,1.1063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-103.4,82.3,229,162.60000000000002), null);


(lib.paper_stack_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paperStack();
	this.instance.setTransform(195.25,-144.45,0.6461,0.6461);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(195.3,-144.4,42,39.400000000000006), null);


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
	mask.graphics.p("AiCgrQgLhCgGgyQAEACBgAIIBfAHQAIA8AvBrQAYA2AVAqQgQAGhvASIhqAPQgXhKgWiBg");
	mask.setTransform(183.875,-71.625);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(168.9,-88.1,0.1887,0.1887);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(169.1,-87.6,29.599999999999994,31.999999999999993), null);


(lib.inkBottles_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.inkBottles();
	this.instance.setTransform(-70.35,171.8,0.9297,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-70.3,171.8,205.39999999999998,126.5), null);


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
	this.shape.graphics.f("#2A3283").s().p("ABLBHQgOgGgJgKQgJgLgFgNQgFgOAAgQQAAgQAFgOQAFgNAJgMQAJgKAOgGQAOgGAQAAQASAAANAGQAOAGAJAKQAJAMAFANQAEAOAAAQQAAAQgEAOQgFANgJALQgJAKgOAGQgNAGgSAAQgQAAgOgGgABXgsQgIADgFAJQgEAGgCAJQgDAJAAAJQAAAJADAJQACAJAEAHQAFAGAIAEQAIAGAKAAQALAAAIgGQAIgEAFgGQAEgHACgJQACgJAAgJQAAgJgCgJQgCgJgEgGQgFgJgIgDQgIgGgLABQgKgBgIAGgAg9BLQgLgEgJgHQgJgFgFgLQgFgKAAgNIAfAAQAAAHADAFQADAGAFACQADAEAHACIAMABIAJgBQAFAAAEgDQAEgBADgEQAEgEAAgFQAAgGgEgEIgKgHIgugMQgIgDgHgEQgFgFgEgHQgEgIAAgJQAAgMAFgJQAEgHAIgGQAIgFAKgEQAKgCAKAAQAMAAAKACQALAEAHAFQAIAGAFAJQAEAIAAAOIgdAAQgBgHgCgFIgGgGQgFgEgFAAIgLgBIgIABQgEABgCACIgGAFQgCADAAAFQAAAEACACQACADAEADIAwANIANAHQAHADAFAIQAGAIAAAOQAAAJgEAIQgEAJgIAHQgHAFgLAEQgLAEgQAAQgMAAgLgCgAEaBJIg9hhIAABhIgeAAIAAiRIAgAAIA9BhIABAAIAAhhIAeAAIAACRgAjrBJIAAiRIBDAAQANAAAJAEQAKADAGAHQAGAHADAIQADAJAAAIQAAAKgDAIQgDAIgGAHQgGAGgKAEQgJAEgNAAIgjAAIAAA0gAjLgDIAkAAQAFgBAEgDQAEgCADgFQABgEAAgIQAAgGgBgFQgDgDgEgDQgEgCgFgCIgkAAgAlvBJIAAiRIBuAAIAAAaIhNAAIAAAgIBHAAIAAAXIhHAAIAAAmIBPAAIAAAagAFagsIgGgDIgDgFIgBgGIABgHIADgGQADgDADAAIAGgBIAGABQADAAACADIAEAGIABAHIgBAGIgEAFIgFADIgGABIgGgBgAFbhHIgEAEQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAGIAAAEIADAEQACACACABIAFABIAFgBQACgBACgCIACgEIABgEIgBgGIgCgDIgEgEIgFAAIgFAAgAFjgyIgEgHIgCAAIAAAHIgEAAIAAgRIAHAAIAFABQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAIgBADIgBACIgBAAIgCABIAFAHgAFdg8IADAAIADAAIAAgDIAAgBIAAgBIgGAAg");
	this.shape.setTransform(-19.6732,-9.0386,0.6153,0.6153);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-42.3,-13.8,45.3,9.5), null);


(lib.ecoTank_Logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ecoTank();
	this.instance.setTransform(-415.7,5.35,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-415.7,5.4,71,27.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AARAnIgQg6IgSA6IgNAAIgYhNIANAAIASA+IAUg+IAJAAIASA+IATg+IAMAAIgYBNg");
	this.shape.setTransform(26.975,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgGgGQgFgFgDgHQgCgIgBgIIAAgBQABgIACgIQADgHAFgFQAGgGAHgDQAGgDAIAAQAIAAAHADQAIADAEAGQAGAFACAHQADAHABAJIAAABQgBAIgDAIQgCAHgGAGQgEAFgIADQgHACgIABQgIAAgGgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQACgGgBgGIAAgBQABgGgCgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(17.35,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA2Ig1hcIAABcIgNAAIAAhqIARAAIAzBXIAAhXIANAAIAABqg");
	this.shape_2.setTransform(8.25,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIAMAAIAAANIAEgFIAHgFIAHgDQAEgCAEAAQAHAAAHADQAGADAFAFQAFAFADAHQACAIAAAJIAAABQAAAJgCAGQgDAIgEAFQgFAGgHADQgGACgIABQgJAAgHgFQgGgEgEgGIAAApgAgJgoQgFABgDAEQgEAEgCAFQgBAGAAAHIAAACQAAAHABAFQACAFAEAEQADAEAFABQAFACAEAAQAMAAAGgHQAGgIAAgNIAAgCQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(-3.775,2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgCgIAAgIIAAgBQAAgIACgIQADgHAFgFQAFgGAHgDQAIgDAHAAQAIAAAIADQAGADAFAGQAGAFACAHQADAHAAAJIAAABQAAAIgDAIQgCAHgGAGQgFAFgGADQgIACgIABQgHAAgIgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQABgGAAgGIAAgBQAAgGgBgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(-12.45,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA3IAAgxQAAgJgEgFQgFgFgKAAIgHACQgEABgCACQgEADgCAEQgBADAAAGIAAAvIgMAAIAAhtIAMAAIAAAsQADgFAGgEQAGgFAJAAQAGAAAFACQAFACAEADQADAFADAFQACAHAAAHIAAAwg");
	this.shape_5.setTransform(-20.55,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPA0QgHgCgFgFQgGgFgBgGQgDgGgBgHIANAAIACAJQABAEAEAEQADACAEACIANADQAFAAAEgCIAJgEQADgDABgEQADgEAAgEIgBgIIgFgFQgCgDgGgCIgMgDIgPgDQgGgBgFgEQgEgDgDgFQgCgFAAgHQAAgGACgGQADgEAFgFQAEgEAGgCQAHgCAHAAQAPAAAKAHQAKAIABAPIgMAAQgCgLgFgEQgHgFgKABQgLgBgFAFQgGAFAAAIIABAGQAAAEAEACQACADAGABIALADIARADQAGADAFADQAEADADAGQACAEAAAIQAAAHgCAGQgDAFgFAFQgFAEgHACQgGADgJAAQgJAAgIgDg");
	this.shape_6.setTransform(-29.05,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AmoCFIAAkJINRAAIAAEJg");
	this.shape_7.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-42.5,-13.7,85,27.5), null);


(lib.backPack_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.backpack();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,320,50), null);


(lib.background_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.background_gradient();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_img, new cjs.Rectangle(-150,-300,300,600), null);


(lib.kid_img = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.2,-0.4,-0.1,1.3).s().p("AhXAHICugXIABAIIivAZg");
	this.shape.setTransform(141.425,-38.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ajfg6IFNgtIByBzIlnBcg");
	var mask_graphics_36 = new cjs.Graphics().p("Ajfg6IFNgtIByBzIlnBcg");
	var mask_graphics_110 = new cjs.Graphics().p("Ajfg6IFNgtIByBzIlnBcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150.95,y:-31.575}).wait(36).to({graphics:mask_graphics_36,x:150.95,y:-31.575}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:150.95,y:-31.575}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(135,-44.45,0.2581,0.2581,0,0,0,0.6,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.5,regY:0.1,scaleX:0.3025,scaleY:0.3025,x:143,y:-35.2},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-149.75,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-65.2,320,50);


// stage content:
(lib.Epson_EcoTank_BTS_320x50_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [271];
	// timeline functions:
	this.frame_271 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(271).call(this.frame_271).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(147).to({alpha:0},9).wait(59).to({alpha:1},9).wait(40));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(147).to({alpha:0},9).wait(59).to({alpha:1},9).wait(40));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(118.15,37.45,0.5235,0.5235,0,0,0,0.4,0.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({alpha:1},9).wait(35));

	// txt_fill
	this.instance_3 = new lib.txt_fill();
	this.instance_3.setTransform(100.6,23.65);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// inkBottles_mc
	this.instance_4 = new lib.inkBottles_mc();
	this.instance_4.setTransform(304.8,39.55,0.1847,0.1847,0,0,0,33,234.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(265.1,32.5,0.2611,0.2611,0,0,0,10,164.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// backPack_img
	this.instance_6 = new lib.backPack_img();
	this.instance_6.setTransform(150,125.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// txt_homework
	this.instance_7 = new lib.txt_homework();
	this.instance_7.setTransform(207.85,178);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(53));

	// kid_img
	this.instance_8 = new lib.kid_img("single",0);
	this.instance_8.setTransform(150,65.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// inkBottles_mc
	this.instance_9 = new lib.inkBottles_mc();
	this.instance_9.setTransform(266.05,38.1,0.235,0.235,0,0,0,33.9,239.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({x:238.55,alpha:1},9,cjs.Ease.quadOut).wait(31).to({regY:239.5,scaleX:0.2566,scaleY:0.2566,x:299.55,y:35.35},9,cjs.Ease.quadOut).wait(54).to({alpha:0},9).to({_off:true},1).wait(111));

	// txt_enoughInk
	this.instance_10 = new lib.txt_enoughInk();
	this.instance_10.setTransform(188.25,176.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_mc
	this.instance_11 = new lib.paper_mc();
	this.instance_11.setTransform(-0.55,108.6,1.3191,1.3191);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({alpha:0},9).to({_off:true},1).wait(111));

	// paper_stack_mc
	this.instance_12 = new lib.paper_stack_mc();
	this.instance_12.setTransform(562.65,122.05,1,1,0,0,0,527.1,-98);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({y:59.05},9,cjs.Ease.quadOut).wait(44).to({alpha:0},9).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_13 = new lib.printer_mc();
	this.instance_13.setTransform(309.3,28,0.3256,0.3256,0,0,0,11.8,165.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48).to({_off:false},0).to({x:281.8,alpha:1},9,cjs.Ease.quadOut).wait(31).to({x:356.8},9,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_cartridgeFree
	this.instance_14 = new lib.txt_cartridgeFree();
	this.instance_14.setTransform(145.5,184.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({y:226.75,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:266,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_ecoTank
	this.instance_15 = new lib.txt_ecoTank();
	this.instance_15.setTransform(144.6,160.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:242.3,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_AGame
	this.instance_16 = new lib.txt_AGame();
	this.instance_16.setTransform(150.5,198.25);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// shaq_img
	this.instance_17 = new lib.shaq_img_1();
	this.instance_17.setTransform(282.3,56.3,0.2156,0.2156,0,0,0,49.4,216.8);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:36.3,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:53.8,alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(224));

	// background
	this.instance_18 = new lib.background_img();
	this.instance_18.setTransform(160.4,25.05,1.1019,0.0964,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(154.9,-8.2,238.99999999999997,123.2);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background_gradient.jpg", id:"background_gradient"},
		{src:"backpack.jpg", id:"backpack"},
		{src:"ecoTank.png", id:"ecoTank"},
		{src:"inkBottles.png", id:"inkBottles"},
		{src:"kidSchool.jpg", id:"kidSchool"},
		{src:"paper.jpg", id:"paper"},
		{src:"paperStack.png", id:"paperStack"},
		{src:"printer.png", id:"printer"},
		{src:"schoolPaper.jpg", id:"schoolPaper"},
		{src:"shaq_img.jpg", id:"shaq_img"}
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
an.compositions['DB8868308261408A88177DE9F03467FE'] = {
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