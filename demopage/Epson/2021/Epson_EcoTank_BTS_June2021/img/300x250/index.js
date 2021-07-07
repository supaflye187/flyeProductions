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



(lib.backpack = function() {
	this.initialize(img.backpack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,44);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,112);


(lib.kidSchool = function() {
	this.initialize(img.kidSchool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,325);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,139);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,184);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,130);


(lib.schoolPaper = function() {
	this.initialize(img.schoolPaper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,34);


(lib.shaq_img = function() {
	this.initialize(img.shaq_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,238);// helper functions:

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


(lib.whiteBar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A6jFeIAAq7MA1HAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteBar, new cjs.Rectangle(-170,-35,340,70), null);


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
	this.shape.graphics.f("#000000").s().p("AgQAQIAAgfIAgAAIAAAfg");
	this.shape.setTransform(29.4,19.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBLIgcgxIgMAMIAAAlIgeAAIAAiVIAeAAIAABPIAlglIAjAAIgpAmIAuBFg");
	this.shape_1.setTransform(22.075,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA4IAAhsIAcAAIAAAUIAAAAQACgFAEgEIAIgHIAJgFQAFgCAGAAIAHABIAAAcIgGgBIgFAAQgIAAgGADQgGACgDAFQgDAFgBAGQgCAGAAAHIAAAxg");
	this.shape_2.setTransform(12.65,15.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_3.setTransform(2.475,15.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUA2IgUhIIAAAAIgSBIIgfAAIgihrIAfAAIAUBIIABAAIAShIIAcAAIASBIIABAAIAUhIIAeAAIgiBrg");
	this.shape_4.setTransform(-11.625,15.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVA1QgKgEgHgIQgHgHgEgLQgEgKAAgNQAAgLAEgLQAEgKAHgIQAIgHAKgFQAKgEALAAQAOAAAKAFQALAFAGAJQAHAKADALQADAMgBALIhNAAQAAAPAHAGQAHAHALAAQAJAAAHgFQAGgEACgFIAaAAQgGATgNAJQgNAIgTAAQgMAAgKgEgAgKgfQgFACgDAEQgDADgBAEIgBAHIAvAAQgCgLgFgGQgGgGgLAAQgGAAgEADg");
	this.shape_5.setTransform(-25.3375,15.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA1A4IAAg9IAAgKQgBgFgBgDQgCgEgEgCQgEgCgGAAQgGAAgEACQgEADgDADIgCAJIgBAKIAAA8IgdAAIAAg8IAAgKQAAgEgCgEQgCgEgDgDQgEgCgHAAIgFABQgEABgDACQgDADgDAFQgCAFAAAIIAAA+IgeAAIAAhsIAcAAIAAAPQAGgIAJgFQAIgFALAAQAKAAAJAEQAHAEAEAKQAGgHAIgFQAIgGAMAAQAIAAAIACQAGACAGAFQAFAFADAHQADAIAAAKIAABIg");
	this.shape_6.setTransform(-40,15.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_7.setTransform(-55.025,15.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBLIAAhAIg7AAIAABAIghAAIAAiVIAhAAIAAA6IA7AAIAAg6IAhAAIAACVg");
	this.shape_8.setTransform(-68.375,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBLIAAhYIgSAAIAAgTIASAAIAAgJQAAgOAJgKQAIgJASAAIAIAAIAIABIAAAWIgLAAQgGAAgDADQgDACABAHIAAAHIAUAAIAAATIgUAAIAABYg");
	this.shape_9.setTransform(-83.7,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_10.setTransform(-92.725,15.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgRA3QgJgCgHgEQgHgFgEgHQgFgHAAgLIAcAAQAAAFACADQACAEADACQADACAFABIAHABIAHAAIAGgDQADgBACgDQACgDAAgEQAAgGgJgEQgJgDgPgDIgNgEQgGgCgFgCQgFgDgDgFQgDgFAAgHQAAgLAEgHQAFgGAGgEQAHgEAIgCQAJgBAIAAIARABQAIACAHAEQAGAEAEAHQAFAGABAKIgdAAQAAgIgGgDQgGgDgHAAIgGAAIgFABIgEADQgCACAAAEQAAAEADACQADADAFABIAKADIAMADIANAEQAGACAFADQAFADADAFQACAFAAAHQAAALgEAHQgEAIgHAEQgHAEgJACQgJACgJAAQgJAAgJgCg");
	this.shape_11.setTransform(-108.875,15.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AARBHIgMgBQgGgBgFgDQgEgDgDgEQgCgGgBgIIAAg/IgSAAIAAgTIASAAIAAghIAdAAIAAAhIAWAAIAAATIgWAAIAAA1QAAAHADADQACACAIAAIAEAAIAFAAIAAAXIgJABg");
	this.shape_12.setTransform(-117.4,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_13.setTransform(-126.525,15.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("Ag0BLIAAiVIAhAAIAAB6IBIAAIAAAbg");
	this.shape_14.setTransform(-137.8,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARBHIgMgBQgGgBgFgCQgEgEgDgFQgDgEAAgIIAAhAIgSAAIAAgUIASAAIAAggIAdAAIAAAgIAWAAIAAAUIgWAAIAAA1QAAAHADADQACACAIABIAFAAIAEgBIAAAXIgJABg");
	this.shape_15.setTransform(10.5,-11.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVA4IAAg9QAAgNgEgHQgEgGgLAAQgLAAgGAHQgFAHAAARIAAA4IgeAAIAAhsIAcAAIAAAPIABAAQAGgJAJgFQAIgEAJAAQAMAAAIADQAIAEAEAFQAEAGACAJQACAIAAAKIAABCg");
	this.shape_16.setTransform(1.375,-9.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBLIAAhsIAdAAIAABsgAgOgyIAAgYIAdAAIAAAYg");
	this.shape_17.setTransform(-6.85,-11.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiA4IAAhsIAcAAIAAAUIABAAQABgFAEgEIAHgHIAKgFQAGgCAFAAIAHABIAAAcIgFgBIgGAAQgIAAgGADQgGACgDAFQgDAFgBAGQgBAGAAAHIAAAxg");
	this.shape_18.setTransform(-12.35,-9.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BLIAAiVIBDAAQAOAAAKAEQAKAEAGAHQAGAGADAJQADAJAAAJQAAAJgDAJQgDAIgGAHQgGAGgKAEQgKAFgOgBIgiAAIAAA2gAgagEIAaAAIAKAAQAFgBAEgDQAEgCACgFQADgDAAgIQAAgHgDgEQgCgFgEgCQgEgCgFgBIgKgCIgaAAg");
	this.shape_19.setTransform(-22.875,-11.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_20.setTransform(-41.075,-9.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASBHIgOgBQgFgBgFgCQgEgEgDgFQgCgEgBgIIAAhAIgSAAIAAgUIASAAIAAggIAdAAIAAAgIAWAAIAAAUIgWAAIAAA1QAAAHADADQACACAIABIAEAAIAFgBIAAAXIgIABg");
	this.shape_21.setTransform(-50.55,-11.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVBLIAAg+QAAgNgEgGQgEgGgLAAQgLAAgGAHQgFAHAAAQIAAA5IgeAAIAAiVIAeAAIAAA5IABAAQAFgKAJgFQAIgDAIAAQAMAAAIACQAIAEAEAFQAEAHACAIQACAIAAAJIAABDg");
	this.shape_22.setTransform(-64.775,-11.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSBKQgIgCgHgEQgHgEgEgHQgFgGAAgKIAdAAQADAJAGADQAGADAHAAQAMAAAGgHQAGgIAAgLIAAgPIgBAAQgFAJgJAEQgIAEgJAAQgNAAgIgEQgJgFgGgHQgGgHgCgJQgDgKAAgLQAAgLADgKQADgKAGgHQAGgHAJgFQAJgEALAAQAKAAAIAEQAIAEAFAJIABAAIAAgOIAcAAIAABkIgCAPQgCAJgGAHQgFAHgMAFQgLAFgRAAQgIAAgJgCgAgKgyQgEACgDAFQgDAEgCAFIgBAMIABAMQABAGADAEQADAEAFADQAEADAGAAQAHAAAEgDQAFgCADgFQADgDACgFQACgFAAgGQAAgHgCgGQgBgGgDgFQgDgEgFgDQgEgDgIAAQgFAAgFADg");
	this.shape_23.setTransform(-76.925,-7.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeA0QgIgDgEgGQgEgFgCgJQgCgIAAgKIAAhCIAeAAIAAA8QAAAOAEAHQAEAGALAAQALAAAGgHQAFgHAAgRIAAg4IAeAAIAABsIgcAAIAAgPIgBAAQgGAJgJAEQgIAFgJAAQgMAAgIgEg");
	this.shape_24.setTransform(-88.625,-9.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEALAAAMQAAANgEALQgEAKgHAIQgIAHgKAEQgKAEgNAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGQABgGAAgHIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_25.setTransform(-100.525,-9.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAVA4IAAg9QAAgNgEgHQgEgGgLAAQgLAAgGAHQgFAHAAARIAAA4IgeAAIAAhsIAcAAIAAAPIABAAQAGgJAJgFQAIgEAJAAQAMAAAIADQAIAEAEAFQAEAGACAJQACAIAAAKIAABCg");
	this.shape_26.setTransform(-112.475,-9.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag4BLIAAiVIBvAAIAAAcIhOAAIAAAgIBHAAIAAAYIhHAAIAAAlIBQAAIAAAcg");
	this.shape_27.setTransform(-124.45,-11.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-146.5,-27.2,212.4,54.8), null);


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
	this.shape.graphics.f("#000000").s().p("AgWAcIAAg3IAtAAIAAA3g");
	this.shape.setTransform(81.45,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBkIAAjHIAxAAIAADHg");
	this.shape_1.setTransform(74.575,3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBkIAAjHIAxAAIAADHg");
	this.shape_2.setTransform(67.725,3.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYBkIAAiWIAxAAIAACWgAgYg9IAAgmIAxAAIAAAmg");
	this.shape_3.setTransform(60.875,3.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAMBkIAAhkQAAgJgCgEQgDgEgHAAQgGAAgCAEQgDAEAAAJIAABkIgzAAIAAjHIAzAAIAABCIAAAAQAHgMAIgFQAKgFAJAAQAIAAAHADQAHACAGAEQAFAFAEAIQADAIAAAMIAABxg");
	this.shape_4.setTransform(50.325,3.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXBNQgLgDgJgIQgJgIgFgPQgEgPAAgZQAAgaAFgQQAFgQAJgJQAKgJAMgCQAMgDANAAQARAAALAEQALAFAHAIQAGAJADALQACAMABAOIgtAAIgBgPIgDgJQgDgHgIAAQgDAAgEACQgDADgBAFIgCAPIgBAWIABAXIACAOQABAFADADQAEACADAAQAHAAADgGQAFgFAAgOIAAgKIAtAAQAAASgEAMQgCANgIAIQgOAPggAAQgNAAgNgCg");
	this.shape_5.setTransform(36.75,5.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBjQgLgDgJgHQgIgHgFgKQgFgKAAgPQAAgSAJgOQAJgPAUgKQgIgKgGgMQgFgMAAgLQAAgKAEgJQAEgIAHgHQAHgGALgEQAKgCANAAQAMAAALACQAKAEAIAGQAHAHAEAIQAEAJAAAKQAAAOgJAOQgJAMgQALIAWAeQADgFACgGIACgNIAsAAQgBARgGAQQgFAQgMALIAbAlIg4AAIgIgLIgLAGIgLAFIgLACIgPABQgMAAgLgDgAgiAgQgDAFAAAFQAAAEACAFQABAEAEADIAGAEIAIACQAFAAAFgCIAHgFIgagkQgGAFgDAGgAgVhFQgEAFAAAFQAAAFADAGIAKAOQAJgIADgGQADgGAAgFQAAgFgDgFQgEgDgHAAQgGAAgEADg");
	this.shape_6.setTransform(15.075,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYBkIAAjHIAxAAIAADHg");
	this.shape_7.setTransform(-3.825,3.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYBkIAAjHIAxAAIAADHg");
	this.shape_8.setTransform(-10.675,3.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYBkIAAiWIAxAAIAACWgAgYg9IAAgmIAxAAIAAAmg");
	this.shape_9.setTransform(-17.525,3.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBmIAAh0IgSAAIAAgiIASAAIAAgLQAAgMACgIQACgIAGgFQAFgEAJgDQAIgCANAAIAMAAIAMACIAAAgIgEgBIgEAAQgFAAgDACQgEADAAAFIAAAKIAUAAIAAAiIgUAAIAAB0g");
	this.shape_10.setTransform(-25.2,2.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCBhQgJgBgFgDQgFgFgDgHQgCgIAAgNIAAhPIgRAAIAAgiIARAAIAAgtIAyAAIAAAtIAUAAIAAAiIgUAAIAABHQAAAGADADQADADAGAAIAIAAIAAAhIgPABIgNAAg");
	this.shape_11.setTransform(-40.55,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguBDQgNgNAAgZIAsAAIABAJIADAGQAEAFAGAAQAFAAAEgDQAFgDAAgHQAAgGgGgEQgFgDgHgDIgRgGQgKgDgIgGQgIgFgGgIQgFgJAAgOQAAgKADgIQAEgJAHgGQAIgHALgEQAMgDAOAAQA5AAAAAwIgsAAQAAgKgEgEQgDgDgGAAQgFAAgEADQgDADAAAFQAAAHAFADIANAGIASAFQAJADAIAFQAIAFAFAIQAGAJAAAOQAAAMgFAJQgEAJgHAHQgIAHgMADQgLADgNAAQggAAgOgMg");
	this.shape_12.setTransform(-51.05,5.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmBMQgHgCgFgEQgFgFgEgIQgDgIAAgMIAAhxIAzAAIAABjQAAAJADAFQACAEAGAAQAHAAADgEQACgFAAgJIAAhjIAzAAIAACWIgxAAIAAgSIAAAAQgKAVgaAAQgJAAgHgBg");
	this.shape_13.setTransform(-64.475,5.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwBWQgOgRAAgfIAAgEIAvAAIAAAKQAAAOAEAEQADAFAGAAQAFAAAEgFQADgEAAgOIAAiQIA1AAIAACIQAAAkgRAPQgRAOgfAAQggAAgOgPg");
	this.shape_14.setTransform(-78.5,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-86.8,-16,173.7,37.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgMANIAAgZIAaAAIAAAZg");
	this.shape.setTransform(100.4,19.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOA9IgXgoIgKAJIAAAfIgXAAIAAh5IAXAAIAABAIAegeIAdAAIgiAfIAlA4g");
	this.shape_1.setTransform(93.5,15.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAtIAAgxQAAgLgDgFQgEgFgIAAQgJAAgEAFQgFAHAAANIAAAtIgYAAIAAhXIAXAAIAAAMIAAAAQAFgHAHgEQAHgDAHAAQAKAAAGADQAGACAEAFQADAFACAGQABAHAAAIIAAA1g");
	this.shape_2.setTransform(82.675,16.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMA9IAAh5IAaAAIAAB5g");
	this.shape_3.setTransform(74.85,15.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNA9IAAhHIgOAAIAAgQIAOAAIAAgHQAAgMAHgHQAHgIAPAAIAGABIAGAAIAAASIgJAAQgEAAgDACQgCACAAAGIAAAFIARAAIAAAQIgRAAIAABHg");
	this.shape_4.setTransform(64.225,15.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSArQgIgDgGgHQgGgFgEgJQgDgIAAgLQAAgJADgJQAEgJAGgFQAGgGAIgEQAIgDAKAAQAKAAAIADQAJAEAGAGQAGAFADAJQAEAJgBAJQABALgEAIQgDAJgGAFQgGAHgJADQgIADgKAAQgKAAgIgDgAgKgYQgDACgDADQgCAFgBAFIgBAJIABALQABAEACAFQADAEADACQAEACAGAAQAGAAAEgCQAEgCACgEQADgFABgEQACgFAAgGIgCgJQgBgFgDgFQgCgDgEgCQgEgDgGAAQgGAAgEADg");
	this.shape_5.setTransform(55.95,16.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADA4QgEAAgDgCQgEgCgCgEQgDgFAAgGIAAgzIgOAAIAAgRIAOAAIAAgaIAYAAIAAAaIARAAIAAARIgRAAIAAArQAAAFACADQACABAGABIAEAAIADgBIAAASIgHABIgHAAg");
	this.shape_6.setTransform(42.425,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAtIAAgxQAAgLgDgFQgEgFgIAAQgJAAgEAFQgFAHAAANIAAAtIgYAAIAAhXIAXAAIAAAMIAAAAQAFgHAHgEQAHgDAHAAQAKAAAGADQAGACAEAFQADAFACAGQABAHAAAIIAAA1g");
	this.shape_7.setTransform(34.175,16.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAqQgGgCgEgEQgDgGgCgGQgBgHAAgIIAAg1IAYAAIAAAwQAAALADAGQAEAGAJAAQAIgBAFgGQAEgFAAgOIAAgtIAYAAIAABXIgXAAIAAgMIAAAAQgFAHgHAEQgGADgIAAQgKAAgGgDg");
	this.shape_8.setTransform(23.825,16.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSArQgIgDgGgHQgGgFgEgJQgCgIAAgLQAAgJACgJQAEgJAGgFQAGgGAIgEQAJgDAJAAQAKAAAJADQAIAEAGAGQAGAFADAJQADAJABAJQgBALgDAIQgDAJgGAFQgGAHgIADQgJADgKAAQgJAAgJgDgAgJgYQgEACgDADQgCAFgBAFIgCAJIACALQABAEACAFQADAEAEACQAEACAFAAQAGAAAEgCQAFgCACgEQACgFABgEQACgFgBgGIgBgJQgBgFgCgFQgCgDgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_9.setTransform(13.35,16.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AArAtIAAgxIAAgIQgBgEgBgDQgCgDgDgBQgCgCgGAAQgFAAgDACQgDACgCADQgCADAAAEIgBAIIAAAwIgXAAIAAgxIAAgHIgBgHQgCgDgDgCQgDgCgGAAIgEABIgGACQgCACgCAFQgCAEAAAGIAAAyIgYAAIAAhXIAWAAIAAAMIABAAQAFgHAHgDQAGgEAJAAQAIAAAHADQAGADADAIQAEgFAHgFQAHgEAJAAQAHAAAGACQAGABAEAEQAEAEADAFQACAHAAAIIAAA6g");
	this.shape_10.setTransform(0.15,16.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgA9IgJgbIgtAAIgJAbIgbAAIAuh5IAaAAIAtB5gAgPAOIAfAAIgQgsIAAAAg");
	this.shape_11.setTransform(-13.725,15.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgNAtQgIgCgFgEQgGgDgEgGQgEgGAAgJIAXAAQAAAEACADQABADADACIAGADIAGAAIAFAAIAFgCIAEgEQACgCAAgDQAAgFgIgDQgHgDgMgDIgKgCIgJgEQgEgDgCgDQgDgEAAgGQAAgJAEgFQADgGAFgDQAGgDAHgBIANgBIANABQAHABAFADQAGAEADAFQAEAFAAAJIgXAAQAAgHgFgCQgFgDgFAAIgFAAIgEABIgDADQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADADIAGACIAIADIAKACIAKADQAFACAEACQAEADACADQADAFAAAGQAAAJgEAFQgDAGgGAEQgGADgHACIgPABQgGAAgHgBg");
	this.shape_12.setTransform(-29.575,16.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgYAqQgGgCgEgEQgDgGgCgGQgBgHAAgIIAAg1IAYAAIAAAwQAAALADAGQAEAGAJAAQAIgBAFgGQAEgFAAgOIAAgtIAYAAIAABXIgXAAIAAgMIAAAAQgFAHgHAEQgGADgIAAQgKAAgGgDg");
	this.shape_13.setTransform(-39.575,16.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgSArQgIgDgGgHQgGgFgDgJQgEgIAAgLQAAgJAEgJQADgJAGgFQAGgGAIgEQAIgDAKAAQALAAAHADQAJAEAGAGQAGAFADAJQAEAJgBAJQABALgEAIQgDAJgGAFQgGAHgJADQgIADgKAAQgKAAgIgDgAgKgYQgDACgDADQgCAFgCAFIAAAJIAAALQACAEACAFQADAEADACQAEACAGAAQAGAAAEgCQAEgCACgEQADgFABgEQACgFAAgGIgCgJQgBgFgDgFQgCgDgEgCQgEgDgGAAQgGAAgEADg");
	this.shape_14.setTransform(-50.15,16.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_15.setTransform(-57.9,15.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgYAqQgGgCgEgEQgDgGgCgGQgBgHAAgIIAAg1IAYAAIAAAwQAAALADAGQAEAGAJAAQAIgBAFgGQAEgFAAgOIAAgtIAYAAIAABXIgXAAIAAgMIAAAAQgFAHgHAEQgGADgIAAQgKAAgGgDg");
	this.shape_16.setTransform(-65.525,16.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgQArQgIgDgGgHQgGgGgDgHQgDgJAAgJQAAgKADgIQADgJAFgHQAGgGAJgDQAIgEAKAAQAHAAAIACQAHACAGAEQAFAEAEAHQADAFABAJIgYAAQgCgPgQAAQgEAAgEADQgEACgDAFQgCADgBAGIgBAJIABAJQABAFACAEQADAEADACQAEADAFAAQAJAAAEgFQAFgFABgHIAXAAQgCARgLAJQgLAJgSAAQgJAAgIgDg");
	this.shape_17.setTransform(-75.725,16.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgLA9IAAhXIAXAAIAABXgAgLgoIAAgUIAXAAIAAAUg");
	this.shape_18.setTransform(-83.25,15.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgWA6QgHgEgFgGQgFgHgCgIQgDgJAAgJQAAgJADgHQACgIAFgHQAFgGAHgEQAHgDAKAAQAHAAAHADQAHADAEAHIAAgtIAZAAIAAB5IgXAAIAAgLIgBAAQgEAHgHADQgHADgHAAQgKAAgIgEgAgIgJQgFACgCAEIgEAIIgBALQAAAFACAFQABAFACAEQADAEAEACQAEADAFAAQAGAAAEgCQADgDADgEQACgEABgFIABgKIgBgLQgBgFgCgDQgDgEgEgCQgDgCgGAAQgFAAgEACg");
	this.shape_19.setTransform(-91.175,15.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgLA9IAAhXIAXAAIAABXgAgLgoIAAgUIAXAAIAAAUg");
	this.shape_20.setTransform(-98.75,15.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAZA9QgCgGAAgIIgBgPQgCgKgFgEQgEgFgKAAIgZAAIAAAwIgbAAIAAh5IBAAAQAJAAAGADQAGADAFAEQAFAFACAGQACAGABAHQgBALgEAHQgFAIgJADIAAABQAEABAEADIAFAGIADAJIABAJIABAHIAAAIIACAIIACAGgAgYgFIAcAAQAJAAAEgEQAFgEAAgJQAAgJgFgEQgEgEgJAAIgcAAg");
	this.shape_21.setTransform(-107.2,15.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAvQgGgCgEgDQgFgDgCgGQgCgEAAgIQAAgIACgFQADgFAEgDQAFgCAGgCIALgCIALgBIAJgCQAFgBACgDQADgBgBgFIgBgGIgDgEIgGgCIgGAAQgHAAgEADQgEAEgBAHIgaAAQABgJAEgGQAEgGAGgDQAGgEAIgCQAHgBAHAAIAOABQAIABAFADQAGACAEAGQAEAFAAAIIAAAwIABAMQAAAGACADIgaAAIgBgFIgBgEQgGAGgIADQgHACgJAAQgGAAgGgCgAAMADIgFABIgGABIgFABIgFACIgFACIgEAEIgBAGIABAGIAEAEIAFABIAGABQAGAAAEgCQAFgDACgEQACgDAAgEIAAgFIAAgKg");
	this.shape_22.setTransform(46.325,-7.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASBAIAAg0QAAgMgEgFQgEgFgIAAQgKAAgEAGQgFAFgBAOIAAAxIgYAAIAAh/IAYAAIAAAwIABAAQAFgIAIgEQAHgDAGAAQALAAAGACQAHADADAFQAEAFACAHQACAHgBAIIAAA5g");
	this.shape_23.setTransform(31.4,-9.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAEA8QgFAAgDgDQgEgDgDgEQgCgEAAgHIAAg2IgQAAIAAgRIAQAAIAAgcIAYAAIAAAcIATAAIAAARIgTAAIAAAtQAAAHADACQACACAGAAIAEAAIAEgBIAAAUIgHAAIgIABg");
	this.shape_24.setTransform(23.1,-8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBAIAAhcIAZAAIAABcgAgMgqIAAgVIAZAAIAAAVg");
	this.shape_25.setTransform(17.975,-9.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AARAvIgRg+IAAAAIgPA+IgbAAIgdhdIAbAAIARA+IAAAAIAQg+IAYAAIAPA+IABAAIARg+IAaAAIgdBdg");
	this.shape_26.setTransform(8.575,-7.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAvQgIgCgGgDQgGgEgEgGQgEgHAAgJIAYAAQAAAFACACIAEAFIAHADIAGABIAGgBIAFgBIAEgFQACgBAAgEQAAgGgIgCIgUgHIgLgCQgGgCgEgCQgEgDgCgEQgDgEAAgGQAAgJAEgGQADgFAGgEQAGgEAHgBIAOgBQAHAAAHABQAHACAGADQAGAEADAGQAEAFABAIIgZAAQAAgGgFgEQgFgCgGAAIgFAAIgEABIgEADQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAAEACADIAHADIAIACIALADIALADIAJAEQAEADADADQACAFAAAGQAAAKgEAGQgDAGgGAEQgGAEgIACQgHABgIAAQgHAAgIgCg");
	this.shape_27.setTransform(-8.075,-7.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAuQgJgEgGgGQgGgHgDgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAGgGAJgEQAIgEAKAAQAMAAAJAFQAJAEAFAIQAGAHACAKQADALgBAJIhCAAQABAMAFAGQAGAGAKAAQAIAAAFgEQAGgEABgEIAXAAQgGARgLAGQgLAIgQAAQgKAAgJgDgAgJgbIgGAFQgDADgBAEIgBAGIApAAQgCgKgFgFQgEgFgKAAQgFAAgEACg");
	this.shape_28.setTransform(-17.7958,-7.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAuAwIAAg0IgBgJQAAgEgCgDQgCgDgDgCQgCgCgGAAQgGAAgDACQgDACgCAEQgCADgBAEIAAAJIAAAzIgZAAIAAgzIAAgJQAAgEgCgDQgBgEgDgCQgDgCgGAAIgFABQgDABgDACQgCACgCAFQgCAEAAAHIAAA1IgaAAIAAhcIAYAAIAAAMIABAAQAEgHAIgEQAHgEAJAAQAIAAAIAEQAGADAEAJQAEgGAHgFQAIgFAJAAQAHAAAHACQAGACAFAEQAEAEACAGQADAGAAAJIAAA+g");
	this.shape_29.setTransform(-30.85,-7.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAuQgJgEgGgGQgGgHgEgJQgDgIAAgMQAAgKADgJQAEgKAGgFQAGgHAJgDQAJgEAKAAQALAAAJAEQAIADAHAHQAGAFAEAKQADAJAAAKQAAAMgDAIQgEAJgGAHQgHAGgIAEQgJADgLAAQgKAAgJgDgAgKgaQgEACgDAEQgCAEgCAGIAAAKIAAALQACAGACAEIAHAHQAEACAGAAQAGAAAFgCIAHgHQADgEABgGIABgLIgBgKQgBgGgDgEQgDgEgEgCQgFgDgGAAQgGAAgEADg");
	this.shape_30.setTransform(-44.2,-7.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWA+QgMgFgIgJQgIgJgFgMQgEgMAAgOQAAgOAEgMQAFgMAIgKQAIgJAMgFQAMgFANAAQALAAAJADQAKADAHAGQAIAGAFAIQAEAJACALIgcAAQAAgFgDgEQgCgEgEgDQgEgDgFgCQgFgCgFAAQgIAAgHAEQgHAEgEAGQgEAGgCAIQgCAIAAAIQAAAIACAHQACAIAEAGQAEAGAHAEQAHAEAIAAQANAAAIgIQAHgIABgNIAcAAQgBAMgFAKQgEAJgIAHQgHAHgKAEQgKADgMAAQgNAAgMgFg");
	this.shape_31.setTransform(-56.075,-9.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-115.6,-22.9,221.8,49.8), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#123293").s().p("AgVA0QgKgEgIgHQgIgHgFgLQgEgKgBgNQABgMAEgKQAFgKAIgIQAIgHAKgEQAKgEALAAQAMAAAKAEQAKAEAIAHQAIAIAFAKQAEAKABAMQgBANgEAKQgFALgIAHQgIAHgKAEQgKAEgMAAQgLAAgKgEgAgPgoQgJAEgFAGQgGAFgDAIQgDAIAAAJQAAAKADAHQADAIAGAHQAFAFAJAEQAHADAIAAQAJAAAHgDQAIgEAGgFQAGgHADgIQAEgHgBgKQABgJgEgIQgDgIgGgFQgGgGgIgEQgHgDgJAAQgIAAgHADgAANAfIgOgaIgIAAIAAAaIgNAAIAAg9IAYAAQALAAAHADQAGAFAAAKQAAAEgCAEQAAACgDACIgFADIgGABIARAbgAgJgEIAKAAQAGgBADgBQADgBAAgGIAAgEIgEgDIgEgBIgEAAIgKAAg");
	this.shape.setTransform(71.65,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AATBPIgfg0IgMAMIAAAoIgfAAIAAidIAfAAIAABUIAngpIAlAAIgrAqIAvBIg");
	this.shape_1.setTransform(59.275,3.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#123293").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAARIABAAQAGgLAJgEQAJgFAKABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAKIAABGg");
	this.shape_2.setTransform(46.125,5.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#123293").s().p("AgfA6QgHgCgFgEQgFgFgDgGQgEgGAAgJQABgJADgHQADgGAGgEQAFgDAHgCIAOgDIAOgBIALgCQAFgCADgCQAEgDgBgFQAAgEgCgEQgBgCgDgCQgDgCgDAAIgIgBQgIAAgFAEQgGAEgBAKIgfAAQABgMAEgHQAGgHAHgFQAIgEAIgCQAKgCAJAAIARABQAJACAHADQAHAEAFAGQAEAGAAALIAAA5IABAPQABAIADADIggAAIgBgFIgBgGQgIAIgKADQgJADgKAAQgJAAgHgCgAAPAEIgGACIgHABIgHABIgHABIgGADIgDAGQgCACAAAFQAAAEACACQABAEACABIAGACIAIABQAIAAAFgDQAGgDABgFQADgDABgFIAAgHIAAgMg");
	this.shape_3.setTransform(33.65,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123293").s().p("AgQBPIAAh/IgvAAIAAgeIB/AAIAAAeIgvAAIAAB/g");
	this.shape_4.setTransform(21.125,3.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgMAEgMQAFgLAHgIQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAIAFALQAEAMAAAMQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAGAAAGIACANQABAHADAFQADAFAGAEQAFACAHAAQAIAAAFgCQAGgEADgFQADgFABgHQACgGAAgHQAAgGgCgGQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_5.setTransform(8.125,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AgVA3QgLgEgHgHQgIgIgEgLQgEgLAAgMQAAgMADgMQAFgLAHgJQAIgHALgFQAKgFANAAQAKAAAKADQAJADAHAFQAHAFAFAIQAFAJAAAKIgeAAQgDgTgVAAQgFAAgGADQgFADgDAGQgEAGAAAGIgCALQAAAHACAGQABAGACAGQADAFAGAEQAFACAGAAQAMABAFgHQAGgGACgLIAeAAQgDAXgPAMQgOAMgXAAQgLAAgLgFg");
	this.shape_6.setTransform(-4.35,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("Ag7BPIAAidIB1AAIAAAeIhSAAIAAAhIBLAAIAAAaIhLAAIAAAnIBUAAIAAAdg");
	this.shape_7.setTransform(-17.175,3.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWBPIAAhAQAAgPgEgGQgFgHgLABQgMgBgFAIQgGAGAAASIAAA8IgfAAIAAidIAfAAIAAA8IABAAQAFgLAKgEQAIgFAJABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAKIAABGg");
	this.shape_8.setTransform(-36.425,3.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASBLIgNgBQgGgBgFgEQgFgCgDgGQgDgEAAgJIAAhDIgTAAIAAgVIATAAIAAgiIAfAAIAAAiIAWAAIAAAVIgWAAIAAA4QgBAIADADQADACAHAAIAGAAIAEgBIAAAZIgJABg");
	this.shape_9.setTransform(-46.45,4.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_10.setTransform(-52.65,3.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbBPIgbhqIAAAAIgaBqIgjAAIgpidIAiAAIAZBqIABAAIAbhqIAfAAIAbBrIABAAIAZhrIAiAAIgqCdg");
	this.shape_11.setTransform(-65.475,3.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-77.8,-13.2,156.5,31.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(118.675,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTBOQgIgDgHgEQgIgEgEgHQgFgHgBgKIAfAAQADAJAGADQAGAEAIAAQANAAAGgIQAGgIAAgMIAAgPIgBAAQgFAJgJAEQgJAFgKAAQgMgBgKgEQgJgEgGgIQgGgIgDgJQgCgLAAgLQAAgLADgLQADgKAGgIQAGgHAJgFQAKgFALAAQALAAAIAFQAJAEAFAJIABAAIAAgPIAdAAIAABpIgBAQQgCAJgGAHQgHAJgLAEQgMAGgSAAQgJAAgJgCgAgKg1QgFADgDAEQgDAFgCAGQgBAGAAAGIABAMQABAGADAFQADAEAFADQAFADAGAAQAHAAAFgCQAFgDADgFIAFgJQACgFAAgGQAAgIgCgGQgBgGgDgFQgDgFgFgDQgFgCgIAAQgFAAgFACg");
	this.shape_1.setTransform(108.975,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAARIABAAQAGgLAJgEQAJgFAKABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAKIAABGg");
	this.shape_2.setTransform(96.275,5.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_3.setTransform(87.2,3.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASBLIgNgBQgGgBgFgEQgFgCgDgGQgDgEAAgJIAAhDIgTAAIAAgVIATAAIAAgiIAfAAIAAAiIAWAAIAAAVIgWAAIAAA4QAAAIACADQADACAHAAIAGAAIAEgBIAAAZIgJABg");
	this.shape_4.setTransform(80.7,4.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAARIABAAQAGgLAJgEQAJgFAKABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAKIAABGg");
	this.shape_5.setTransform(70.675,5.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPBPIAAhyIAfAAIAABygAgPg0IAAgaIAfAAIAAAag");
	this.shape_6.setTransform(61.6,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA7IAAhyIAdAAIAAAWIAAAAIAGgKQADgEAFgDQAFgEAFgCQAGgBAGAAIAHABIAAAdIgGgBIgFAAQgJAAgGACQgGAEgEAEQgCAGgCAGQgCAGAAAHIAAA0g");
	this.shape_7.setTransform(55.3,5.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag+BPIAAidIBGAAQAPAAAKAFQALAEAGAHQAHAHADAJQADAJAAAKQAAAJgDAKQgDAIgHAHQgGAGgLAFQgKAEgPAAIgjAAIAAA5gAgbgDIAbAAIAKgCQAGgBAEgCQAEgDADgEQACgFAAgHQAAgHgCgFQgDgFgEgCQgEgDgGgBIgKgBIgbAAg");
	this.shape_8.setTransform(43.825,3.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWA3QgLgEgHgHQgIgJgEgKQgEgLAAgOQAAgMAEgLQAEgKAIgJQAIgHALgFQAKgFAMAAQAPAAALAGQAKAFAHAKQAHAKADALQADANgBAMIhRAAQABAPAHAGQAHAIAMgBQAKAAAHgEQAGgFACgFIAbAAQgGAUgOAJQgNAJgUAAQgMAAgLgFgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgFgGgMAAQgGAAgFACg");
	this.shape_9.setTransform(24.1625,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWA3QgLgEgHgHQgIgJgEgKQgEgLAAgOQAAgMAEgLQAEgKAIgJQAIgHALgFQAKgFAMAAQAPAAALAGQAKAFAHAKQAHAKADALQADANgBAMIhRAAQABAPAHAGQAHAIAMgBQAKAAAHgEQAGgFACgFIAbAAQgGAUgOAJQgNAJgUAAQgMAAgLgFgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgFgGgMAAQgGAAgFACg");
	this.shape_10.setTransform(11.8125,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA7IAAhyIAeAAIAAAWIABAAIAFgKQADgEAFgDQAFgEAFgCQAGgBAGAAIAGABIAAAdIgEgBIgHAAQgIAAgGACQgGAEgEAEQgDAGgBAGQgBAGAAAHIAAA0g");
	this.shape_11.setTransform(2.05,5.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag2BPIAAidIBtAAIAAAeIhLAAIAAAkIBBAAIAAAaIhBAAIAABBg");
	this.shape_12.setTransform(-8.525,3.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggANIAAgaIBBAAIAAAag");
	this.shape_13.setTransform(-19.775,5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWA3QgLgEgHgHQgIgJgEgKQgEgLAAgOQAAgMAEgLQAEgKAIgJQAIgHALgFQAKgFAMAAQAPAAALAGQAKAFAHAKQAHAKADALQADANgBAMIhRAAQABAPAHAGQAHAIAMgBQAKAAAHgEQAGgFACgFIAbAAQgGAUgOAJQgNAJgUAAQgMAAgLgFgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgFgGgMAAQgGAAgFACg");
	this.shape_14.setTransform(-30.2875,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTBOQgIgDgHgEQgIgEgEgHQgFgHgBgKIAfAAQADAJAGADQAGAEAIAAQANAAAGgIQAGgIAAgMIAAgPIgBAAQgFAJgJAEQgJAFgKAAQgMgBgKgEQgJgEgGgIQgGgIgDgJQgCgLAAgLQAAgLADgLQADgKAGgIQAGgHAJgFQAKgFALAAQALAAAIAFQAJAEAFAJIABAAIAAgPIAdAAIAABpIgBAQQgCAJgGAHQgHAJgLAEQgMAGgSAAQgJAAgJgCgAgKg1QgFADgDAEQgDAFgCAGQgBAGAAAGIABAMQABAGADAFQADAEAFADQAFADAGAAQAHAAAFgCQAFgDADgFIAFgJQACgFAAgGQAAgIgCgGQgBgGgDgFQgDgFgFgDQgFgCgIAAQgFAAgFACg");
	this.shape_15.setTransform(-43.275,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBLQgKgFgGgIQgHgJgDgLQgDgLAAgMQAAgMADgJQADgLAHgIQAGgIAKgFQAJgFAMAAQAJAAAJAFQAKADAFAJIABAAIAAg5IAfAAIAACcIgeAAIAAgOIAAAAQgGAIgJAFQgJAEgKAAQgNAAgJgFgAgLgMQgFADgDAFQgEAEgCAGQgBAHAAAHQAAAGACAHQACAHADAFQADAFAGAEQAEACAHAAQAHAAAFgCQAGgEADgFQADgFACgHIABgNIgBgOQgCgGgDgEQgDgFgGgDQgFgDgHAAQgHAAgFADg");
	this.shape_16.setTransform(-56.4,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_17.setTransform(-65.45,3.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkA7IAAhyIAeAAIAAAWIABAAIAFgKQADgEAFgDQAFgEAFgCQAGgBAGAAIAGABIAAAdIgEgBIgHAAQgIAAgGACQgGAEgEAEQgDAGgBAGQgBAGAAAHIAAA0g");
	this.shape_18.setTransform(-71.75,5.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASBLIgOgBQgFgBgFgEQgFgCgDgGQgDgEAAgJIAAhDIgSAAIAAgVIASAAIAAgiIAeAAIAAAiIAYAAIAAAVIgYAAIAAA4QAAAIADADQACACAJAAIAEAAIAGgBIAAAZIgJABg");
	this.shape_19.setTransform(-80.25,4.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkA7IAAhyIAeAAIAAAWIABAAIAFgKQADgEAFgDQAFgEAFgCQAGgBAGAAIAGABIAAAdIgEgBIgHAAQgIAAgGACQgGAEgEAEQgDAGgBAGQgBAGAAAHIAAA0g");
	this.shape_20.setTransform(-87.5,5.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfA6QgHgCgFgEQgFgFgDgGQgDgGgBgJQAAgJAEgHQAEgGAFgEQAFgDAHgCIAOgDIAOgBIALgCQAGgCADgCQACgDAAgFQAAgEgBgEQgCgCgDgCQgDgCgDAAIgIgBQgIAAgGAEQgFAEgBAKIgfAAQAAgMAFgHQAGgHAHgFQAIgEAJgCQAJgCAJAAIARABQAIACAIADQAHAEAFAGQAFAGgBALIAAA5IABAPQABAIADADIggAAIgCgFIgBgGQgHAIgKADQgJADgKAAQgJAAgHgCgAAPAEIgGACIgHABIgHABIgHABIgFADIgFAGQgBACAAAFQAAAEABACQACAEADABIAFACIAIABQAIAAAGgDQAEgDACgFQADgDABgFIAAgHIAAgMg");
	this.shape_21.setTransform(-98.45,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBMQgOgGgJgLQgKgLgGgPQgFgPAAgRQAAgRAFgPQAGgPAKgLQAJgLAOgHQAPgGARAAQANAAAMAEQALADAKAIQAJAHAGAKQAGALABANIghAAQgCgFgDgFQgDgFgEgEQgFgEgGgCQgFgCgHAAQgLAAgIAEQgIAFgFAIQgFAHgDAKQgCAKAAAJQAAAKACAJQADAJAFAIQAFAHAIAFQAIAEALAAQAQAAAJgJQAJgKACgQIAhAAQgBAPgFAMQgGAMgJAIQgJAIgMAFQgNAEgOAAQgRAAgPgGg");
	this.shape_22.setTransform(-112.6,3.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-122.7,-11.9,246.4,30.200000000000003), null);


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
	this.shape.graphics.f("#000000").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(126.525,7.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBEQgOgFgJgKQgJgJgFgOQgFgNAAgRQAAgOAFgOQAFgNAKgKQAJgKANgFQANgHAPAAQASAAANAHQAOAIAIALQAJALADAPQAEAPgBAPIhkAAQABATAJAIQAIAJAQAAQALAAAJgGQAIgGACgGIAiAAQgIAZgRAKQgRAMgYAAQgPgBgNgFgAgOgoQgGADgEAFQgDAEgCAFIgCAJIA+AAQgDgPgHgHQgHgIgOAAQgIABgGADg");
	this.shape_1.setTransform(115.36,3.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABEBIIAAhOIAAgOQgBgGgCgEQgDgFgEgDQgFgCgIAAQgIAAgFADQgFADgDAFQgDAFgBAGIgBANIAABNIglAAIAAhOIAAgMQgBgGgCgFQgCgFgEgDQgFgDgJAAIgHABIgJAEQgEAEgDAGQgDAHAAAKIAABQIgnAAIAAiLIAlAAIAAATIAAAAQAIgLAKgGQALgGAOAAQANAAALAFQAKAGAGANQAGgKAKgHQALgHAPAAQALAAAJADQAKADAGAGQAHAGAEAJQAEAKAAANIAABdg");
	this.shape_2.setTransform(95.625,2.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmBHQgJgCgGgGQgHgEgDgJQgEgIAAgKQAAgMAEgHQAEgJAHgEQAGgDAJgDIARgEIARgCIAOgCQAHgCADgDQAEgDAAgGQAAgGgCgEQgCgDgEgDQgDgBgFgBIgJgBQgKABgHAEQgGAFgBALIgnAAQABgNAGgJQAGgJAJgGQAJgFAMgCQALgCALgBIAVACQALABAJAFQAJAEAFAIQAGAHAAAOIAABHIABASQABAIADAFIgnAAIgCgHIgBgGQgJAJgMADQgMAEgNABQgKAAgIgDgAATAFIgIACIgJABIgIACIgJACIgHADIgFAHQgCADAAAGQAAAEACAEQACADADACIAIAEIAJAAQAKAAAGgEQAHgDACgGQADgFABgGIABgIIAAgOg");
	this.shape_3.setTransform(75.875,3.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBdQgRgIgMgNQgNgOgGgSQgHgSAAgVQAAgVAHgSQAGgSANgPQAMgNARgIQASgIAVAAQAPAAAOAEQANAFAMAJQALAIAIANQAGAMADARIgpAAQgEgQgLgIQgLgJgPABQgNAAgKAFQgKAGgGAJQgGAJgEAMQgCANAAALQAAAMACAMQAEALAGAJQAGAKAKAFQAKAGANgBQAVAAALgKQAMgLACgUIgrAAIAAgfIBSAAIAABoIgbAAIgFgXQgMAPgNAGQgOAGgOAAQgVAAgSgIg");
	this.shape_4.setTransform(58,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgOBEIAAg2Ig1AAIAAgbIA1AAIAAg2IAcAAIAAA2IA2AAIAAAbIg2AAIAAA2g");
	this.shape_5.setTransform(32.925,3.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AAyBgIgOgrIhIAAIgPArIgqAAIBJi/IAqAAIBIC/gAgZAWIAxAAIgYhGIAAAAg");
	this.shape_6.setTransform(15.875,0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsBIIAAiLIAlAAIAAAaIAAAAQADgGAEgGQAEgFAGgEQAGgEAGgCQAIgDAHAAIAIACIAAAjIgGgBIgIAAQgKAAgIADQgHAEgEAGQgEAGgCAIQgBAIAAAJIAAA/g");
	this.shape_7.setTransform(-4.95,2.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmBDQgLgDgFgIQgGgHgCgLQgCgKgBgOIAAhUIAnAAIAABNQAAARAGAJQAEAIAOAAQAPABAHgKQAHgJAAgVIAAhIIAnAAIAACKIglAAIAAgUIgBAAQgHANgMAFQgKAGgMAAQgQgBgJgEg");
	this.shape_8.setTransform(-18.65,3.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdBEQgNgEgKgLQgJgJgFgNQgFgOAAgRQAAgPAFgOQAFgNAJgLQAKgJANgFQANgFAQgBQAQABANAFQAOAFAJAJQAKALAFANQAFAOAAAPQAAARgFAOQgFANgKAJQgJALgOAEQgNAFgQABQgQgBgNgFgAgQgnQgGAEgEAFQgEAGgCAJQgBAIAAAHIABAQQACAJAEAGQAEAHAGADQAHAEAJAAQAJAAAHgEQAHgDADgHQAEgGACgJQACgHAAgJQAAgHgCgIQgCgJgEgGQgDgFgHgEQgHgEgJgBQgJABgHAEg");
	this.shape_9.setTransform(-34.575,3.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBeIgLgBIAAggIALABIALABQAIgBAEgFQADgGAAgGQAAgEgBgEIgyiCIApAAIAfBeIABAAIAeheIAnAAIg5CcQgHARgKAHQgLAHgTAAg");
	this.shape_10.setTransform(-49.6,5.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXBfQgLgCgIgGQgJgFgGgIQgGgJgBgLIAmAAQADAKAIAEQAIAFAJAAQAQAAAHgKQAIgKAAgPIAAgSIgBAAQgGALgMAFQgLAGgMgBQgPABgMgGQgLgFgHgKQgIgKgDgMQgDgNAAgOQAAgOADgMQAEgNAIgJQAHgKAMgFQALgGAOAAQANAAALAFQAKAFAHAMIABAAIAAgSIAkAAIAACCQAAAIgCALQgCAKgIAKQgHAJgPAHQgOAGgXAAQgKAAgLgDgAgMhBQgHADgDAGQgFAFgBAIQgCAHAAAHIABAPQACAIAEAGQADAFAHAEQAFADAIABQAJgBAFgCQAGgEAFgFQADgFADgHQACgGAAgIQAAgJgCgHQgCgIgDgGQgEgGgGgEQgGgDgKAAQgHAAgFADg");
	this.shape_11.setTransform(-72.1,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbBIIAAhOQAAgRgFgJQgGgIgOAAQgOAAgHAJQgHAJAAAWIAABIIgmAAIAAiLIAkAAIAAAUIABAAQAHgNAMgFQALgGAMAAQAPAAAJAFQALAEAFAHQAGAIACAKQADALgBANIAABVg");
	this.shape_12.setTransform(-87.8,2.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSBgIAAiKIAlAAIAACKgAgShAIAAgfIAlAAIAAAfg");
	this.shape_13.setTransform(-99.025,0.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsBIIAAiLIAlAAIAAAaIAAAAQADgGAEgGQAEgFAGgEQAGgEAGgCQAHgDAIAAIAIACIAAAjIgHgBIgHAAQgKAAgIADQgHAEgFAGQgDAGgCAIQgCAIAAAJIAAA/g");
	this.shape_14.setTransform(-106.8,2.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhQBgIAAi/IBaAAQAOAAALACQAMACAIAGQAIAFAEAKQAFAJAAANQAAAPgHAKQgHAJgMAGQARAGAJAMQAJAMAAASQAAAPgGALQgFAKgKAHQgKAHgMADQgMADgNAAgAglA/IAsAAIAMgBIAKgEQAEgDADgFQACgFAAgHQAAgPgIgGQgIgHgOAAIgtAAgAglgRIAqAAQALAAAHgGQAIgFAAgMQAAgHgDgEQgCgFgEgCQgEgDgGgBIgLgBIgmAAg");
	this.shape_15.setTransform(-121.575,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-133.5,-18.3,265.8,36.2), null);


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
	mask.graphics.p("AnNR0IAUgtQALgIgDgYIgGgXQgigfgLgeIgFgYIADh4QgHgXgBhEIAAhWQAAgTAEgfIAEgcQgIgRgMhuQgfgfgYhTQgMgpgGgjIo/ACIgetHICWgFQAAgMAhgoIAggmIgMg5QgCgNAUgdQAUgcAJAAQAIAAAQgNIAOgMQALgTAUgCIATABQALABAPgEIAOgFQARgWAaAJIAWANQAGANAVAFIAUACQAVgDAKAOIAHAOIgDBuQAAAKgZAyIgZAwICbACIAZgFQAUgSCFgBQB+AAAYAJIAjANQADgLAJgCQAIgCACAKQACAIAMgEIALgEQgEgRAnABQAsADAEgFQAGgIAPABQAIAAAGACIARgPQgKgUADhcIgDh4QAAgNAMgHQAFgEAFgBIAMiCQA3hsBogpQA1gUApABQBJACBIBAQAXAUATAYIAPAUQAQAcAHAdIAFAXIAABYIAMAUQAOAGgDAxIgGAvQgHA6AAAMQAAAIgJAIIgJAHQgDAPgRA+IgRA6IAPACQARADAIAAQAMAAA3AWQAwAeAjAcIBDAyQAsAhAJAMQAPAUA0AtQAUAKAwAoIBDA+QANANARAlIAeA8QANAUgFAZQAMAKAcCuIAUBXQAWBcADAYIAJA7QAGAjAAAIIAFA3QAFAvAAALQAAAUAPAgIAGAbQAIAdAIAJQAIAJgGAdIgHAqQAAAUgRA1IgoBSQgoBBgXAhQgOAUgpgBIgvgEQgHAAgkgRQgngRgIgBIhOgPQgJgCgfgWIgegVIgFBBQAAAPgeAZIAFB/QgCADx9ACg");
	mask.setTransform(-0.0337,0.2476);

	// Layer_1
	this.instance = new lib.shaq_img();
	this.instance.setTransform(-118.5,-119);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_img_1, new cjs.Rectangle(-118.5,-118.2,237,237), null);


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
	mask.graphics.p("Ak+hlQAFABGZg7IDfDgInJBfgAk+hmIAAABIAAgBg");
	mask.setTransform(-0.3757,-0.25);

	// Layer_1
	this.instance = new lib.schoolPaper();
	this.instance.setTransform(-33.5,-17);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.schoolPaper_mc, new cjs.Rectangle(-32.2,-16.2,63.7,32), null);


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
	this.instance.setTransform(-95.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-95.5,-65,191,130), null);


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

	// Layer_1
	this.instance = new lib.paperStack();
	this.instance.setTransform(-35.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(-35.5,-92,71,184), null);


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
	mask.graphics.p("AokiZQgukjgejwQATANGOAZQDGAMDCAKQAsEDDLHFQBkDjBdCvQhXAinSBUQjnAqjXAjQhRkAhdpGg");
	mask.setTransform(0.05,-0.45);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-62.5,-69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-62.4,-68.9,124.9,137), null);


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
	this.instance.setTransform(-76,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-76,-56,152,112), null);


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
	this.shape.setTransform(3.9286,9.05,1.1429,1.1429);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-32.8,1.4,73.5,15.4), null);


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
	this.instance.setTransform(-56,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-56,-22,112,44), null);


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

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.4,-1,0,2.7).s().p("AjCAPIGBgyIAEARImAA2g");
	this.shape.setTransform(3.8,20.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnniAILXhhID4D7IsRDIg");
	var mask_graphics_36 = new cjs.Graphics().p("AnniAILXhhID4D7IsRDIg");
	var mask_graphics_110 = new cjs.Graphics().p("AnniAILXhhID4D7IsRDIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:24.75,y:35.875}).wait(36).to({graphics:mask_graphics_36,x:24.75,y:35.875}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:24.75,y:35.875}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(-3.25,9,0.8328,0.8328,0,0,0,0.1,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:12.4,y:30.6},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-169.1,-94.95,0.7755,0.7755);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-94.9,330.4,252);


// stage content:
(lib.Epson_EcoTank_BTS_300x250_v03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(82).to({alpha:0},7).wait(175));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(143).to({alpha:0},9).to({_off:true},1).wait(58).to({_off:false,x:47,y:59.25},0).to({alpha:1},9).wait(44));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(55.05,96.8);
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
	this.instance_4.setTransform(220.55,225.95,0.4643,0.4643);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// Shaq_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_221 = new cjs.Graphics().p("A4XTEMAAAgmHMAwvAAAMAAAAmHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(221).to({graphics:mask_1_graphics_221,x:156,y:122.05}).wait(51));

	// shaq_img
	this.instance_5 = new lib.shaq_img_1();
	this.instance_5.setTransform(438.15,133.05,1.0631,1.0631,-11.6438,0,0,0.1,0.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({x:244.15},13,cjs.Ease.quadOut).wait(38));

	// printer_mc
	this.instance_6 = new lib.printer_mc();
	this.instance_6.setTransform(132.55,210.55,0.6307,0.6307,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// backPack_img
	this.instance_7 = new lib.backPack_img();
	this.instance_7.setTransform(150,125.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// whiteBar (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_164 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_2_graphics_164,x:149,y:130}).wait(55).to({graphics:null,x:0,y:0}).wait(53));

	// txt_homework
	this.instance_8 = new lib.txt_homework();
	this.instance_8.setTransform(207.85,178);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(53));

	// whiteBar
	this.instance_9 = new lib.whiteBar();
	this.instance_9.setTransform(149,225);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).wait(59).to({alpha:0},9).to({_off:true},1).wait(43));

	// kid_img
	this.instance_10 = new lib.kid_img("single",0);
	this.instance_10.setTransform(150,65.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// whiteBar (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_98 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_3_graphics_98,x:149,y:130}).wait(174));

	// txt_enoughInk
	this.instance_11 = new lib.txt_enoughInk();
	this.instance_11.setTransform(188.25,176.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_mc
	this.instance_12 = new lib.paper_mc();
	this.instance_12.setTransform(35,-17.95,1.3191,1.3191);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({x:6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_stack_mc
	this.instance_13 = new lib.paper_stack_mc();
	this.instance_13.setTransform(-35.45,157.05);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(98).to({_off:false},0).to({x:35.55},9,cjs.Ease.quadOut).wait(44).to({x:-44.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// inkBottles_mc
	this.instance_14 = new lib.inkBottles_mc();
	this.instance_14.setTransform(223.15,135.35,0.5594,0.5594,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({regX:0,scaleX:0.7169,scaleY:0.7169,x:243,y:141.55},9,cjs.Ease.quadOut).wait(31).to({regX:0.1,regY:0.1,scaleX:1.0131,scaleY:1.0131,x:223.6,y:120.05},9).wait(54).to({x:323.6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_15 = new lib.printer_mc();
	this.instance_15.setTransform(113.85,110.75,0.7804,0.7804);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:103,y:110.05},9,cjs.Ease.quadOut).wait(31).to({x:13,alpha:0},9).to({_off:true},1).wait(174));

	// whiteBar (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_48 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_4_graphics_48,x:149,y:130}).wait(50).to({graphics:null,x:0,y:0}).wait(174));

	// txt_cartridgeFree
	this.instance_16 = new lib.txt_cartridgeFree();
	this.instance_16.setTransform(145.5,198.75);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({y:226.75,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:268.75,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_ecoTank
	this.instance_17 = new lib.txt_ecoTank();
	this.instance_17.setTransform(144.6,175.05);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:245.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_AGame
	this.instance_18 = new lib.txt_AGame();
	this.instance_18.setTransform(150.5,198.25);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// whiteBar
	this.instance_19 = new lib.whiteBar();
	this.instance_19.setTransform(149,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(208).to({alpha:0},10).to({_off:true},1).wait(53));

	// shaq_img
	this.instance_20 = new lib.shaq_img_1();
	this.instance_20.setTransform(148,182.05);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:128.05,alpha:1},8,cjs.Ease.quadInOut).wait(31).to({y:182.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAEDF4","#EFF1F5","#F5F5F7"],[0,0.502,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,126.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,15.3,333,286);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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