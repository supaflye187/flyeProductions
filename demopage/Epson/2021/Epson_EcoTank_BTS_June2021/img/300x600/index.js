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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(0,0,300,529);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,175);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,255);


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
	this.shape.graphics.f("#000000").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape.setTransform(51.65,367.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVBZIgjg5IgNANIAAAsIgkAAIAAixIAkAAIAABeIAsgtIApAAIgwAuIA2BSg");
	this.shape_1.setTransform(42.25,360.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_2.setTransform(30.375,362.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgJgKgEgMQgFgMAAgQQAAgOAFgNQAEgNAJgIQAJgJAMgGQAMgEAPAAQAPAAAMAEQANAGAIAJQAKAIAEANQAFANAAAOQAAAQgFAMQgEAMgKAKQgIAIgNAFQgMAFgPAAQgPAAgMgFgAgOglQgGAEgEAFQgDAGgCAIQgBAHAAAHIABAPQACAIADAFQAEAGAGAEQAGADAIABQAIgBAHgDQAGgEAEgGQADgFABgIQACgIABgHQgBgHgCgHQgBgIgDgGQgEgFgGgEQgHgEgIABQgIgBgGAEg");
	this.shape_3.setTransform(17.6,362.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBBIgXhWIAAAAIgWBWIgkAAIgpiBIAlAAIAYBXIAAAAIAWhXIAiAAIAVBXIABAAIAYhXIAkAAIgoCBg");
	this.shape_4.setTransform(0.125,362.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgNAFgNQAFgMAJgJQAJgKAMgFQAMgFANAAQARAAAMAGQANAGAHALQAIALAEAOQADAOgBANIhcAAQABASAIAIQAIAIAOAAQAKgBAIgFQAIgGACgGIAfAAQgIAYgPAKQgQAKgWAAQgOAAgMgFgAgNgmQgFADgEAFQgDADgBAGIgCAIIA5AAQgDgNgGgIQgHgGgMAAQgIAAgGACg");
	this.shape_5.setTransform(-16.8889,362.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA/BCIAAhIIAAgMQgBgGgCgEQgCgEgFgDQgEgCgHAAQgIAAgFACQgEADgDAFQgDAFAAAFIgBAMIAABHIgjAAIAAhHIAAgMQAAgFgCgFQgCgFgEgDQgFgCgIAAIgHABQgEABgEADQgEADgDAGQgCAGAAAJIAABKIgkAAIAAiAIAiAAIAAASIAAAAQAHgKAKgGQAKgFANAAQAMAAAKAEQAJAFAFAMQAGgJAKgGQAKgGAOAAQAKAAAIACQAJACAGAGQAHAGADAIQAEAJAAANIAABVg");
	this.shape_6.setTransform(-35.025,362.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgJgKgEgMQgFgMAAgQQAAgOAFgNQAEgNAJgIQAJgJAMgGQAMgEAPAAQAPAAAMAEQANAGAIAJQAKAIAEANQAFANAAAOQAAAQgFAMQgEAMgKAKQgIAIgNAFQgMAFgPAAQgPAAgMgFgAgOglQgGAEgEAFQgEAGgBAIQgCAHAAAHIACAPQABAIAEAFQAEAGAGAEQAGADAIABQAJgBAGgDQAGgEAEgGQADgFABgIQACgIAAgHQAAgHgCgHQgBgIgDgGQgEgFgGgEQgGgEgJABQgIgBgGAEg");
	this.shape_7.setTransform(-53.6,362.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBZIAAhNIhHAAIAABNIgnAAIAAixIAnAAIAABEIBHAAIAAhEIAnAAIAACxg");
	this.shape_8.setTransform(-70.15,360.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBZIAAhoIgVAAIAAgYIAVAAIAAgKQAAgRALgLQAKgLAWAAIAJAAIAKABIAAAaIgOAAQgHAAgDADQgDADAAAIIAAAIIAZAAIAAAYIgZAAIAABog");
	this.shape_9.setTransform(-89.775,360.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgJgKgEgMQgFgMAAgQQAAgOAFgNQAEgNAJgIQAJgJAMgGQAMgEAPAAQAPAAAMAEQANAGAIAJQAKAIAEANQAFANAAAOQAAAQgFAMQgEAMgKAKQgIAIgNAFQgMAFgPAAQgPAAgMgFgAgOglQgGAEgEAFQgDAGgCAIQgBAHAAAHIABAPQACAIADAFQAEAGAGAEQAGADAIABQAIgBAHgDQAGgEAEgGQADgFABgIQACgIABgHQgBgHgCgHQgBgIgDgGQgEgFgGgEQgHgEgIABQgIgBgGAEg");
	this.shape_10.setTransform(-101.2,362.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgUBCQgKgDgJgFQgIgFgGgJQgGgIAAgNIAiAAQAAAFADAFQACADADADQAEADAFABIAJABIAIgBIAHgCQAEgDACgDQACgDABgEQAAgJgLgDQgLgEgSgFIgPgDQgHgCgGgEQgGgEgDgFQgDgHAAgIQAAgNAEgHQAFgJAIgEQAIgEAKgCQAKgCAKAAQAKAAAKACQAKACAHAFQAIAEAGAIQAEAIABAMIghAAQgBgKgHgEQgHgEgJAAIgGABIgGACIgGADQgBADAAAEQAAAEADAEQAEACAFACIANADIAOAEIAPAEQAIADAFADQAGAEADAGQAEAGAAAJQAAANgFAIQgGAJgHAGQgJAEgKADQgLACgLAAQgKAAgLgCg");
	this.shape_11.setTransform(-121.8,362.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AAVBVIgQgCQgGAAgGgEQgGgDgDgGQgDgGAAgKIAAhLIgWAAIAAgYIAWAAIAAgmIAiAAIAAAmIAaAAIAAAYIgaAAIAAA/QAAAJAEADQACADAJAAIAGAAIAFgBIAAAbIgKACg");
	this.shape_12.setTransform(-132.65,360.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgbA/QgMgFgJgIQgIgKgFgMQgFgMAAgQQAAgOAFgNQAFgNAIgIQAJgJAMgGQANgEAOAAQAPAAAMAEQAMAGAKAJQAIAIAFANQAFANAAAOQAAAQgFAMQgFAMgIAKQgKAIgMAFQgMAFgPAAQgOAAgNgFgAgOglQgGAEgEAFQgDAGgCAIQgCAHABAHIABAPQACAIADAFQAEAGAGAEQAGADAIABQAIgBAHgDQAGgEADgGQAEgFACgIQACgIAAgHQAAgHgCgHQgCgIgEgGQgDgFgGgEQgHgEgIABQgIgBgGAEg");
	this.shape_13.setTransform(-144.2,362.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("Ag+BZIAAixIAnAAIAACQIBWAAIAAAhg");
	this.shape_14.setTransform(-158.275,360.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUBUIgPgBQgGgBgGgDQgGgDgDgGQgDgGAAgKIAAhLIgWAAIAAgYIAWAAIAAgmIAjAAIAAAmIAaAAIAAAYIgaAAIAAA/QAAAJACADQAEADAIAAIAGAAIAGgBIAAAbIgKABg");
	this.shape_15.setTransform(31.55,333.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZBCIAAhIQAAgQgFgIQgFgHgNAAQgNAAgHAIQgGAJAAAUIAABCIgkAAIAAiAIAiAAIAAASIABAAQAHgLAKgFQAKgFALAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAAMIAABOg");
	this.shape_16.setTransform(20.075,335.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBZIAAiAIAjAAIAACAgAgRg7IAAgdIAjAAIAAAdg");
	this.shape_17.setTransform(9.625,333.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_18.setTransform(2.425,335.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhGBZIAAixIBQAAQAQAAAMAFQAMAFAHAHQAHAJAEAKQADAKAAALQAAALgDAKQgEAKgHAHQgHAJgMAEQgMAFgQAAIgpAAIAABAgAgfgEIAfAAIAMgBQAGgBAFgDQAEgDADgFQADgGAAgIQAAgJgDgFQgDgFgEgDQgFgDgGgBIgMgBIgfAAg");
	this.shape_19.setTransform(-10.725,333.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgJgJgEgNQgFgMAAgQQAAgPAFgMQAEgMAJgJQAJgKAMgFQAMgEAPAAQAPAAAMAEQANAFAIAKQAKAJAEAMQAFAMAAAPQAAAQgFAMQgEANgKAJQgIAIgNAFQgMAFgPAAQgPAAgMgFgAgOglQgGAEgEAGQgDAFgCAIQgBAHAAAHIABAPQACAIADAFQAEAGAGAEQAGAEAIAAQAIAAAHgEQAGgEAEgGQADgFABgIQACgHABgIQgBgHgCgHQgBgIgDgFQgEgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_20.setTransform(-33.7,335.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAVBUIgQgBQgGgBgGgDQgGgDgDgGQgDgGAAgKIAAhLIgVAAIAAgYIAVAAIAAgmIAiAAIAAAmIAbAAIAAAYIgbAAIAAA/QAAAJADADQAEADAJAAIAFAAIAGgBIAAAbIgKABg");
	this.shape_21.setTransform(-45.65,333.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAZBZIAAhJQAAgQgFgHQgFgHgNAAQgNAAgHAIQgGAIAAAUIAABDIgkAAIAAixIAkAAIAABDIABAAQAGgLALgFQAJgFAKAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAALIAABPg");
	this.shape_22.setTransform(-63.875,333.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVBZQgKgDgIgFQgIgFgFgIQgGgHgBgMIAjAAQADAKAHAEQAIAEAIAAQAPAAAHgJQAGgJAAgOIAAgRIAAAAQgGAKgLAGQgKAEgLAAQgOAAgLgFQgKgFgHgJQgHgIgDgLQgDgNAAgNQAAgMADgMQAEgLAHgKQAHgIAKgFQALgGAOAAQAMABAJAEQAJAEAHAMIAAAAIAAgSIAiAAIAAB5QAAAHgCALQgCAJgHAJQgHAJgOAFQgNAHgVgBQgJAAgKgBgAgMg8QgFADgEAFQgEAGgBAGQgBAGAAAIIABAOQABAGADAGQAEAFAFADQAGAEAHgBQAIAAAFgCQAHgEADgFQAEgDACgHQABgGAAgIQABgHgCgHQgCgIgDgFQgEgGgFgDQgGgDgJAAQgGAAgGADg");
	this.shape_23.setTransform(-79,338);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA/QgJgFgFgGQgGgHgCgKQgCgKAAgMIAAhPIAkAAIAABIQAAARAFAHQAFAJANAAQANgBAHgIQAGgJAAgTIAAhEIAkAAIAACBIgiAAIAAgSIgBAAQgHALgKAGQgKAEgLAAQgPAAgJgDg");
	this.shape_24.setTransform(-93.525,335.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgIgJgFgNQgFgMAAgQQAAgPAFgMQAFgMAIgJQAJgKAMgFQANgEAOAAQAPAAANAEQALAFAJAKQAKAJAEAMQAFAMAAAPQAAAQgFAMQgEANgKAJQgJAIgLAFQgNAFgPAAQgOAAgNgFgAgOglQgGAEgEAGQgDAFgCAIQgBAHgBAHIACAPQACAIADAFQAEAGAGAEQAGAEAIAAQAIAAAHgEQAGgEADgGQAEgFACgIQABgHAAgIQAAgHgBgHQgCgIgEgFQgDgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_25.setTransform(-108.35,335.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAZBCIAAhIQAAgQgFgIQgFgHgNAAQgNAAgHAIQgGAJAAAUIAABCIgkAAIAAiAIAiAAIAAASIABAAQAHgLAKgFQAKgFALAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAAMIAABOg");
	this.shape_26.setTransform(-123.175,335.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhDBZIAAixICFAAIAAAhIhdAAIAAAmIBVAAIAAAdIhVAAIAAAsIBfAAIAAAhg");
	this.shape_27.setTransform(-138.125,333.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-168.3,-27.2,234.20000000000002,403.59999999999997), null);


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
	this.shape.graphics.f("#000000").s().p("AgmAuIAAhaIBNAAIAABag");
	this.shape.setTransform(182.5,86.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_1.setTransform(171.225,74.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_2.setTransform(160.025,74.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoCkIAAj4IBRAAIAAD4gAgohlIAAg+IBRAAIAAA+g");
	this.shape_3.setTransform(148.775,74.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUCkIAAikQAAgPgEgGQgFgHgLAAQgKAAgEAHQgFAGAAAPIAACkIhTAAIAAlHIBTAAIAABrIABAAQAKgUAPgHQAQgHAPAAQANAAAMADQALADAJAIQAJAIAGANQAFANAAATIAAC7g");
	this.shape_4.setTransform(131.525,74.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmB+QgUgEgOgOQgOgNgHgZQgJgYAAgpQAAgrAKgbQAIgaAPgOQAPgPAUgEQAVgFAWAAQAbAAASAIQATAIAKANQALANAEAUQAFASAAAYIhKAAIgCgYIgEgQQgFgKgNAAQgHAAgEADQgFADgCAKIgFAXIgBAlIABAmIAFAXQACAJAFAEQAEADAHAAQALAAAHgJQAFgIABgXIAAgRIBKAAQgBAegEAUQgGAVgLANQgYAZg0AAQgXAAgUgEg");
	this.shape_5.setTransform(109.25,78.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhQCjQgSgFgOgMQgNgLgJgRQgIgRAAgYQABgcAPgZQAOgYAggRQgMgRgKgTQgKgTAAgTQABgRAGgOQAHgOAMgKQAMgKASgGQAQgFAWAAQAUAAARAFQARAGAMAKQANAKAGAOQAHAOAAARQAAAYgPAVQgPAWgbARIAlAxQAFgIADgKIADgVIBIAAQgBAcgJAaQgJAagUATIAtA9IhbAAIgPgTIgSAKIgSAIIgSAEIgYACQgVAAgSgFgAg4A0QgGAJAAAHQAAAIADAHQADAHAFAFIALAIQAGACAIAAQAHAAAIgDIAMgIIgrg7QgKAIgEAJgAgjhxQgIAHAAAKQAAAHAGAJIAQAYQAPgOAGgJQAFgKAAgHQAAgKgFgHQgIgGgKAAQgKAAgHAGg");
	this.shape_6.setTransform(73.75,74.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_7.setTransform(42.725,74.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_8.setTransform(31.525,74.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoCkIAAj4IBRAAIAAD4gAgohlIAAg+IBRAAIAAA+g");
	this.shape_9.setTransform(20.275,74.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrCnIAAjAIgcAAIAAg3IAcAAIAAgSQAAgTAEgNQAEgMAJgIQAJgJAPgDQANgEAWAAIATAAIAUADIAAAzIgGgBIgHAAQgIAAgGAFQgGADAAAJIAAAQIAhAAIAAA3IghAAIAADAg");
	this.shape_10.setTransform(7.725,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFCgQgNgCgIgHQgJgGgEgNQgEgMAAgUIAAiEIgbAAIAAg3IAbAAIAAhJIBSAAIAABJIAgAAIAAA3IggAAIAAB1QAAALAFAFQAFAEAKAAIAMAAIAAA3IgWAAIgXACg");
	this.shape_11.setTransform(-17.425,74.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBuQgWgWAAgoIBIAAIACANIAEALQAGAJAMAAQAIAAAHgFQAHgGAAgKQAAgLgJgGQgJgGgMgFIgdgKQgPgEgNgJQgNgJgJgNQgJgOAAgYQAAgRAFgOQAGgOANgKQAMgLASgFQATgHAYAAQBdAAAABPIhHAAQAAgQgGgHQgGgFgKAAQgIAAgGAFQgGAFAAAJQAAALAJAFQAJAFAMAEIAdAJQAPAEANAJQAOAIAIAOQAJAOAAAZQAAARgGAQQgHAPgNALQgNALgSAFQgTAGgWAAQg0AAgXgUg");
	this.shape_12.setTransform(-34.675,78.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag+B8QgMgCgJgIQgJgHgFgNQgFgNAAgUIAAi7IBTAAIAACjQAAAQAFAHQAEAHAKAAQALAAAFgHQAEgHAAgQIAAijIBTAAIAAD4IhQAAIAAgfIgBAAQgQAkgrAAQgOAAgLgDg");
	this.shape_13.setTransform(-56.675,78.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhPCMQgXgbAAgzIAAgHIBNAAIAAAQQAAAXAGAIQAGAIAKAAQAIAAAHgIQAGgIAAgXIAAjsIBVAAIAADgQAAA7gbAYQgbAYg0AAQg1AAgXgag");
	this.shape_14.setTransform(-79.675,74.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-93.3,43,284.8,61.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(93.575,365.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATBPIgfg0IgMANIAAAnIgfAAIAAidIAfAAIAABUIAngpIAlAAIgrAqIAvBIg");
	this.shape_1.setTransform(84.875,359.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAAQIABAAQAGgKAJgEQAJgEAKAAQAMAAAIADQAIAEAFAFQAFAGABAJQACAJAAAKIAABGg");
	this.shape_2.setTransform(71.175,361.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape_3.setTransform(61.275,359.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRBPIAAhcIgTAAIAAgWIATAAIAAgIQAAgPAJgKQAJgKATAAIAIABIAJABIAAAWIgMAAQgGAAgDADQgDADAAAHIAAAGIAWAAIAAAWIgWAAIAABcg");
	this.shape_4.setTransform(48.025,359.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFIACAOQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_5.setTransform(37.525,361.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASBKIgNAAQgGgBgFgEQgFgCgDgFQgDgGAAgIIAAhCIgTAAIAAgWIATAAIAAgiIAfAAIAAAiIAWAAIAAAWIgWAAIAAA3QgBAIADADQADACAHAAIAGAAIAEgBIAAAZIgJAAg");
	this.shape_6.setTransform(20.5,359.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAAQIABAAQAGgKAJgEQAJgEAKAAQAMAAAIADQAIAEAFAFQAFAGABAJQACAJAAAKIAABGg");
	this.shape_7.setTransform(10.075,361.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_8.setTransform(-3.075,361.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFIACAOQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_9.setTransform(-16.425,361.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA4A7IAAhAIgBgKQAAgGgCgDQgCgFgEgBQgEgCgHAAQgGAAgEACQgEADgDAEIgDAJIAAAKIAAA/IgfAAIAAg/IAAgKIgCgJQgBgEgEgDQgEgCgIAAIgFABQgEAAgEADQgDADgCAFQgDAFAAAJIAABBIgfAAIAAhyIAdAAIAAAQIABAAQAGgIAJgGQAIgEAMAAQAKAAAJAEQAIAEAFAKQAFgHAJgFQAIgHAMABQAJgBAIADQAIACAFAFQAGAFADAHQADAJAAAKIAABMg");
	this.shape_10.setTransform(-33.225,361.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AApBPIgMgjIg5AAIgNAjIgjAAIA8idIAiAAIA7CdgAgTASIAnAAIgUg5IAAAAg");
	this.shape_11.setTransform(-50.975,359.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgRA6QgKgCgHgEQgHgGgGgHQgEgIAAgLIAdAAQAAAFACADQADAFADACQADACAEABIAIABIAHgBIAGgCQADgCADgCQABgDAAgEQAAgIgJgDQgJgDgQgEIgNgEQgGgBgGgDQgFgEgDgEQgDgGAAgIQAAgKAFgIQADgHAIgEQAGgEAKgBQAIgCAJAAQAJAAAJACQAIABAHAFQAHAEAFAHQADAHABAKIgdAAQgBgIgGgEQgGgDgIAAIgFABIgGABIgEADQgBACAAAEQAAAEADADIAIAEIAJACIANAEIAOADQAHACAEAEQAGADACAFQADAGAAAHQABAMgFAHQgFAIgGAFQgIAEgJACQgJACgKAAQgJAAgJgCg");
	this.shape_12.setTransform(-71,361.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_13.setTransform(-83.625,361.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFIACAOQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_14.setTransform(-97.075,361.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_15.setTransform(-106.85,359.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_16.setTransform(-116.425,361.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgVA3QgLgEgHgHQgIgIgEgLQgEgKAAgNQAAgNADgKQAFgMAHgJQAIgHALgFQAKgFANAAQAKAAAKADQAJADAHAFQAIAFAEAIQAFAJAAAKIgeAAQgDgTgVAAQgFAAgGADQgFADgDAGQgEAGAAAGIgCALQAAAHACAGQABAGACAGQADAFAGAEQAFACAGAAQAMABAFgHQAHgGABgKIAeAAQgDAWgOAMQgPAMgXAAQgMAAgKgFg");
	this.shape_17.setTransform(-129.35,361.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgPBPIAAhyIAeAAIAABygAgPg0IAAgaIAeAAIAAAag");
	this.shape_18.setTransform(-138.85,359.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgdBLQgJgFgGgIQgHgJgDgLQgDgLAAgMQAAgLADgKQADgKAHgJQAGgIAJgFQAKgFANAAQAJAAAJAFQAJADAFAJIABAAIAAg5IAfAAIAACcIgeAAIAAgOIAAAAQgGAIgJAFQgJAEgKAAQgNAAgKgFgAgLgMQgFADgEAFQgDAEgBAHQgCAGAAAHQAAAHACAGQABAHAEAFQADAFAFAEQAGACAGAAQAHAAAFgCQAGgDADgGQADgFACgGIABgOIgBgNQgCgHgDgEQgEgFgFgDQgFgDgHAAQgHAAgFADg");
	this.shape_19.setTransform(-148.85,359.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_20.setTransform(-158.4,359.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAhBPQgDgIAAgKIgCgUQgCgMgGgGQgGgGgNAAIghAAIAAA+IgjAAIAAidIBUAAQALAAAIAEQAJADAGAGQAGAGADAIQADAIAAAIQAAAOgGALQgGAKgNAEIAAABQAHACAEADQAEAEADAEQACAGABAFIACANIABAIIAAALIACAJQABAFADAEgAgggHIAlAAQAMABAGgGQAGgFAAgMQAAgMgGgEQgGgFgMgBIglAAg");
	this.shape_21.setTransform(-169.075,359.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfA6QgHgCgFgEQgGgFgDgGQgCgGAAgJQgBgJAEgHQAEgGAFgEQAFgDAHgCIAOgDIAOgBIALgCQAGgCADgCQADgDgBgFQAAgEgBgEQgCgCgDgCQgDgCgDAAIgIgBQgIAAgGAEQgFAEAAAKIggAAQAAgMAGgHQAEgHAIgFQAHgEAKgCQAJgCAJAAIARABQAJACAHADQAHAEAFAGQAFAGAAALIAAA5IABAPQAAAIADADIggAAIgCgFIgBgGQgHAIgKADQgJADgLAAQgIAAgHgCgAAQAEIgHACIgHABIgHABIgHACIgFACIgFAGQgCACAAAFQAAAEACACQACAEADABIAFACIAIABQAIAAAGgDQAFgDACgFQACgDAAgFIABgHIAAgMg");
	this.shape_22.setTransform(23.7,337.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWBPIAAhAQAAgPgEgGQgFgHgLABQgMgBgFAIQgGAGAAASIAAA8IgfAAIAAidIAfAAIAAA8IABAAQAFgLAKgEQAIgFAJABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAKIAABGg");
	this.shape_23.setTransform(4.375,335.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASBLIgOgBQgFgBgFgEQgFgCgDgGQgDgEAAgJIAAhDIgTAAIAAgVIATAAIAAgiIAeAAIAAAiIAYAAIAAAVIgYAAIAAA4QABAIACADQADACAHAAIAFAAIAGgBIAAAZIgJABg");
	this.shape_24.setTransform(-6.3,336.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_25.setTransform(-13.15,335.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA5IgUhLIAAAAIgTBLIggAAIgkhxIAhAAIAUBMIABAAIAThMIAdAAIAUBMIAVhMIAgAAIgkBxg");
	this.shape_26.setTransform(-25.175,337.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSA6QgJgCgIgEQgGgGgFgHQgFgIgBgLIAeAAQAAAFACADQADAEACADQAEACAEABIAIABIAHgBIAHgCQACgBACgEQACgCABgEQAAgIgKgDQgJgEgQgDIgNgEQgGgCgGgCQgFgEgDgEQgDgGAAgIQAAgLAEgHQAEgHAHgEQAHgDAJgCQAJgCAJAAQAJAAAIACQAJABAHAFQAHAEAEAHQAEAHACAKIgeAAQAAgIgHgDQgGgEgIAAIgFABIgFABIgFADQgBACgBAEQAAAEADADIAIAEIALACIAMAEIAOADQAGACAGAEQAEADAEAFQACAGAAAHQAAAMgEAHQgEAIgIAFQgHAEgJACQgKACgJAAQgJAAgKgCg");
	this.shape_27.setTransform(-46.65,337.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWA3QgLgEgHgHQgIgJgEgKQgEgLAAgOQAAgMAEgLQAEgLAIgIQAIgHALgFQAKgFAMAAQAPAAALAGQAKAFAHAKQAHAKADALQADANgBAMIhRAAQABAPAHAGQAHAIAMgBQAKAAAHgEQAGgFACgFIAbAAQgGAUgOAJQgNAJgUAAQgMAAgLgFgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgFgGgMAAQgGAAgFACg");
	this.shape_28.setTransform(-59.0875,337.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AA4A7IAAhAIgBgLQAAgFgCgEQgCgDgEgCQgEgCgHAAQgGAAgEACQgEACgDAFIgDAJIAAAKIAAA/IgfAAIAAg/IAAgKIgCgJQgBgEgEgDQgEgCgIAAIgFABQgEAAgEADQgDADgCAFQgDAFAAAIIAABCIgfAAIAAhyIAdAAIAAAQIABAAQAGgIAJgGQAIgEAMAAQAKgBAJAFQAIAEAFALQAFgIAJgGQAIgFAMAAQAJgBAIADQAIACAFAFQAGAFADAHQADAJAAAKIAABMg");
	this.shape_29.setTransform(-75.575,337.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgMAEgMQAFgLAHgIQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAIAFALQAEAMAAAMQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAGAAAGIACANQABAHADAFQADAFAGAEQAFACAHAAQAIAAAFgCQAGgEADgFQADgFABgHIACgNQAAgGgCgGQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_30.setTransform(-92.475,337.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbBMQgPgGgKgLQgKgLgFgPQgFgPAAgRQAAgRAFgPQAFgPAKgLQAKgLAPgHQAOgGARAAQANAAALAEQAMADAJAIQAKAHAFAKQAHALABANIgiAAQgBgFgCgFQgDgFgFgEQgFgEgFgCQgHgCgGAAQgLAAgIAEQgIAFgFAIQgFAHgCAKQgCAKAAAJQAAAKACAJQACAJAFAIQAFAHAIAFQAIAEALAAQAQAAAJgJQAIgKACgQIAiAAQgBAPgGAMQgFAMgJAIQgJAIgNAFQgMAEgOAAQgRAAgOgGg");
	this.shape_31.setTransform(-107.6,335.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-179.3,-22.9,285.5,396.79999999999995), null);


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
	this.shape.graphics.f("#123293").s().p("AgUAwQgJgDgIgHQgHgHgFgKQgEgJAAgMQAAgLAEgJQAFgKAHgHQAIgHAJgDQAKgFAKAAQAKAAAKAFQAKADAHAHQAIAHAEAKQAFAJAAALQAAAMgFAJQgEAKgIAHQgHAHgKADQgKAFgKAAQgKAAgKgFgAgPglQgHADgFAGQgGAFgDAHQgDAIAAAIQAAAJADAIQADAHAGAFQAFAGAHADQAHADAIAAQAIAAAHgDQAHgDAGgGQAFgFADgHQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgGgHgDQgHgDgIAAQgIAAgHADgAAMAdIgNgZIgHAAIAAAZIgMAAIAAg5IAVAAQALAAAGADQAGAEAAAKQAAAEgBADIgEAEIgEACIgGABIAPAagAgIgEIAJAAQAFAAADgCQADgBAAgFIgBgEIgDgCIgEgBIgEAAIgIAAg");
	this.shape.setTransform(83.775,344.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AAUBWIghg4IgOANIAAArIgiAAIAAirIAiAAIAABbIAqgrIApAAIgvAsIA0BPg");
	this.shape_1.setTransform(72.25,349.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#123293").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_2.setTransform(57.925,351.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#123293").s().p("AgiA/QgHgCgGgEQgGgFgDgHQgDgHAAgKQAAgKAEgHQADgHAGgEQAGgDAIgCIAOgDIAQgCIAMgCQAGgCADgDQADgCAAgGQAAgFgBgDQgDgEgDgBQgCgCgFgBIgIAAQgJAAgFAEQgHAEAAAKIgiAAQAAgMAGgIQAEgIAJgEQAIgFAKgCQAKgCAKAAIATABQAKABAIAEQAIAEAFAHQAEAHABALIAABAIABAQQAAAHACAEIgiAAIgCgGIAAgGQgIAJgLADQgKADgMAAQgJAAgIgCgAARAEIgHACIgIACIgHABIgHACIgHADQgDACgBADQgDADAAAFQAAAFADADQABADADACIAHACIAIABQAJAAAFgEQAGgDACgFQADgEABgFIAAgIIAAgMg");
	this.shape_3.setTransform(44.35,351.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123293").s().p("AgSBWIAAiLIgzAAIAAggICLAAIAAAgIgzAAIAACLg");
	this.shape_4.setTransform(30.725,349.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgZA9QgMgFgJgIQgIgJgFgMQgEgMAAgPQAAgOAEgMQAFgMAIgIQAJgJAMgFQALgEAOAAQAPAAALAEQAMAFAJAJQAIAIAFAMQAEAMAAAOQAAAPgEAMQgFAMgIAJQgJAIgMAFQgLAEgPAAQgOAAgLgEgAgNgjQgGADgEAGQgDAFgCAIQgBAHAAAGQAAAIABAHQACAHADAGQAEAFAGAEQAFADAIAAQAJAAAGgDQAFgEAEgFQADgGACgHQABgHAAgIQAAgGgBgHQgCgIgDgFQgEgGgFgDQgGgDgJAAQgIAAgFADg");
	this.shape_5.setTransform(16.575,351.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AgXA9QgMgFgIgIQgIgJgFgLQgEgMAAgOQAAgNAEgNQAEgMAIgJQAJgJALgFQAMgFAOAAQALAAALADQAKADAIAFQAIAGAFAJQAFAJABAMIgiAAQgDgVgWAAQgHAAgGADQgFAEgEAGQgDAGgCAHIgBANQAAAHABAGQACAHADAGQADAGAGADQAFAEAHAAQANAAAGgHQAHgHABgLIAhAAQgDAYgQANQgQANgZAAQgMAAgMgEg");
	this.shape_6.setTransform(3.025,351.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AhABWIAAirIB/AAIAAAgIhZAAIAAAlIBSAAIAAAcIhSAAIAAAqIBbAAIAAAgg");
	this.shape_7.setTransform(-10.9,349.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYBWIAAhGQAAgQgFgGQgFgIgMAAQgNAAgGAJQgGAHAAATIAABBIgiAAIAAirIAiAAIAABBIABAAQAGgLAKgFQAJgFAKAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAAKIAABNg");
	this.shape_8.setTransform(-31.775,349.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgFAAgKIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADACQADAEAIAAIAGAAIAFgBIAAAaIgKABg");
	this.shape_9.setTransform(-42.675,350.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_10.setTransform(-49.35,349.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdBWIgdh0IAAAAIgcB0IgmAAIguirIAmAAIAbB0IABAAIAdh0IAjAAIAdB1IABAAIAch1IAlAAIguCrg");
	this.shape_11.setTransform(-63.275,349.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-76.6,332.8,167,32.599999999999966), null);


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
	this.shape.graphics.f("#000000").s().p("AgSASIAAgkIAlAAIAAAkg");
	this.shape.setTransform(137.475,356.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUBVQgJgDgJgEQgHgFgFgIQgGgHgBgLIAjAAQACAKAHAEQAHADAIAAQAPAAAGgIQAHgJAAgNIAAgRIgBAAQgFAKgLAFQgKAFgLAAQgNAAgKgFQgKgFgHgJQgGgIgDgLQgDgLAAgNQAAgMADgLQAEgLAGgJQAHgIAKgFQAKgFANAAQALAAAKAEQAJAFAGALIABAAIAAgRIAfAAIAABzQAAAIgBAJQgDAKgGAIQgHAJgMAFQgNAGgVAAQgJAAgJgCgAgLg6QgFADgEAFQgDAFgBAGQgDAHAAAHIACANQACAHADAFQADAEAFAEQAGADAGAAQAIAAAFgDQAGgDADgFQAEgDABgGQADgHAAgGQAAgIgCgHQgBgHgEgFQgDgFgGgDQgFgDgJAAQgGAAgFACg");
	this.shape_1.setTransform(126.8,354.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_2.setTransform(112.925,351.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_3.setTransform(103,349.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgGAAgJIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADADQADACAIABIAGAAIAFgBIAAAaIgKABg");
	this.shape_4.setTransform(95.875,350.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_5.setTransform(84.925,351.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_6.setTransform(75,349.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBAIAAh7IAhAAIAAAXIAAAAQADgGADgFQADgFAGgDQAFgEAGgCQAGgCAGAAIAIACIAAAfIgGgBIgGAAQgKAAgGADQgHADgDAGQgDAFgCAHQgCAHAAAIIAAA4g");
	this.shape_7.setTransform(68.15,351.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBWIAAirIBMAAQAQAAALAFQAMAFAHAHQAHAIADAKQADAKAAAKQAAALgDAKQgDAJgHAHQgHAIgMAFQgLAEgQAAIgmAAIAAA+gAgdgEIAdAAIALgBQAGgBAFgDQAEgCADgFQADgGAAgIQAAgIgDgFQgDgFgEgDQgFgCgGgBIgLgBIgdAAg");
	this.shape_8.setTransform(55.575,349.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_9.setTransform(34.0861,351.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_10.setTransform(20.5861,351.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBAIAAh7IAgAAIAAAXIABAAQADgGADgFQAEgFAFgDQAFgEAGgCQAGgCAHAAIAHACIAAAfIgGgBIgHAAQgJAAgGADQgGADgFAGQgDAFgBAHQgCAHAAAIIAAA4g");
	this.shape_11.setTransform(9.95,351.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BWIAAirIB3AAIAAAgIhRAAIAAAoIBGAAIAAAcIhGAAIAABHg");
	this.shape_12.setTransform(-1.625,349.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjAPIAAgdIBHAAIAAAdg");
	this.shape_13.setTransform(-13.9,351.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_14.setTransform(-25.4139,351.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUBVQgKgDgHgEQgIgFgGgIQgEgHgBgLIAhAAQADAKAHAEQAHADAIAAQAPAAAGgIQAGgJAAgNIAAgRIAAAAQgGAKgKAFQgKAFgLAAQgNAAgLgFQgJgFgHgJQgGgIgEgLQgDgLAAgNQABgMADgLQADgLAIgJQAGgIAKgFQAKgFANAAQALAAAJAEQAJAFAHALIAAAAIAAgRIAhAAIAABzQAAAIgCAJQgDAKgGAIQgHAJgNAFQgMAGgUAAQgJAAgKgCgAgLg6QgFADgDAFQgEAFgCAGQgBAHAAAHIABANQABAHAEAFQADAEAFAEQAFADAHAAQAHAAAGgDQAFgDAEgFQADgDACgGQACgHAAgGQABgIgCgHQgCgHgDgFQgEgFgFgDQgFgDgJAAQgGAAgFACg");
	this.shape_15.setTransform(-39.65,354.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBSQgKgFgHgKQgHgJgEgMQgDgMAAgNQAAgMADgLQAEgMAHgJQAHgIAKgGQAKgFAOAAQAKAAAKAEQAKAFAGAJIAAAAIAAg+IAiAAIAACqIggAAIAAgQIgBAAQgGALgJAEQgKAEgLAAQgOAAgLgFgAgMgNQgGADgDAGQgEAEgBAHQgCAHAAAIQAAAHACAHQABAIAEAFQAEAGAFADQAGAEAHAAQAIAAAGgDQAGgEADgFQADgGACgHQABgHAAgIQAAgIgBgHQgCgHgDgEQgEgGgFgDQgGgDgIAAQgHAAgGADg");
	this.shape_16.setTransform(-54.025,349.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_17.setTransform(-63.9,349.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBAIAAh7IAhAAIAAAXIAAAAQACgGAEgFQAEgFAEgDQAGgEAGgCQAGgCAGAAIAIACIAAAfIgGgBIgHAAQgIAAgHADQgGADgEAGQgDAFgCAHQgCAHAAAIIAAA4g");
	this.shape_18.setTransform(-70.75,351.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgGAAgJIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADADQADACAIABIAGAAIAFgBIAAAaIgKABg");
	this.shape_19.setTransform(-80.075,350.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnBAIAAh7IAgAAIAAAXIABAAQACgGAEgFQAEgFAEgDQAGgEAGgCQAGgCAHAAIAHACIAAAfIgGgBIgHAAQgIAAgHADQgGADgFAGQgDAFgBAHQgCAHAAAIIAAA4g");
	this.shape_20.setTransform(-87.95,351.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiA/QgHgCgGgEQgGgFgDgHQgDgHgBgKQAAgKAFgHQADgHAGgEQAGgDAHgCIAQgDIAPgCIAMgCQAGgCADgDQAEgCgBgGQAAgFgCgDQgCgEgCgBQgEgCgDgBIgJAAQgJAAgGAEQgFAEgCAKIghAAQAAgMAFgIQAGgIAIgEQAIgFALgCQAKgCAJAAIATABQAJABAIAEQAIAEAGAHQAEAHAAALIAABAIABAQQABAHADAEIgjAAIgBgGIgBgGQgJAJgLADQgJADgMAAQgJAAgIgCgAARAEIgHACIgIACIgHABIgIACIgGADQgDACgCADQgCADAAAFQAAAFACADQACADADACIAGACIAIABQAKAAAFgEQAGgDACgFQADgEAAgFIABgIIAAgMg");
	this.shape_21.setTransform(-99.95,351.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBTQgQgHgLgMQgKgMgGgQQgGgQAAgTQAAgSAGgRQAGgQAKgNQALgMAQgHQAQgHASAAQAOAAANAEQANAFAKAHQAKAIAGAMQAHALABAPIgkAAQgBgGgEgGQgDgFgFgEQgFgEgGgDQgHgCgHAAQgLAAgJAFQgJAFgGAIQgFAIgDALQgCALAAAKQAAALACAKQADAKAFAIQAGAIAJAFQAJAFALAAQASAAAJgKQAKgLACgRIAlAAQgCAQgFANQgHANgKAJQgKAJgMAFQgOAFgQAAQgSAAgQgHg");
	this.shape_22.setTransform(-115.35,349.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-126.2,332.7,269,32.60000000000002), null);


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
	this.shape.graphics.f("#000000").s().p("AgWAWIAAgrIAtAAIAAArg");
	this.shape.setTransform(137.975,351.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBJQgOgFgKgLQgKgLgGgOQgFgOAAgSQAAgQAGgOQAFgPAKgKQALgKAOgHQAOgGAQAAQATAAAOAHQAOAIAJAMQAKAMAEAQQAEAQgCARIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgJAbgSAMQgSAMgZAAQgRAAgOgGgAgPgsQgGAEgEAFQgEAEgCAGIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHADg");
	this.shape_1.setTransform(125.9205,346.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABKBNIAAhUIgCgOQAAgHgDgFQgCgEgFgEQgGgCgIAAQgIgBgGAEQgGADgDAFQgCAGgBAGIgBAPIAABSIgpAAIAAhTIAAgOQAAgGgCgGQgDgFgFgDQgFgEgKABIgIABQgEABgFADQgEAFgDAGQgEAHAAALIAABWIgoAAIAAiVIAmAAIAAAVIAAAAQAJgMALgGQAMgHAOAAQAPAAAMAGQALAFAFAOQAHgKAMgIQALgHAPAAQANAAAJADQALACAHAIQAHAFAFALQADAKAAAOIAABkg");
	this.shape_2.setTransform(104.75,346.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBMQgKgDgGgFQgIgFgDgJQgEgIAAgMQAAgMAEgJQAFgIAHgFQAHgEAJgDIATgDIASgDIAPgDQAGgBAFgDQAEgEgBgGQAAgHgCgEQgCgEgEgCQgDgCgFgBIgKgBQgLABgIAFQgGAFgCAMIgoAAQAAgPAGgJQAHgJAKgHQAKgFAMgDQAMgCAMAAIAXABQALACAKAFQAKAEAFAJQAHAIAAAOIAABNIABATQABAJADAFIgqAAIgBgHIgCgHQgKAJgNAEQgNAFgNAAQgLAAgJgDgAAUAFIgIADIgKABIgJABIgJACIgHAFQgEACgCADQgCAFAAAGQAAAFACAEQACADAEACIAHAEIALABQAKAAAHgFQAHgEADgFQADgGABgFIAAgKIAAgQg");
	this.shape_3.setTransform(83.5,346.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBkQgTgIgNgPQgNgOgHgUQgHgTAAgXQAAgWAHgUQAHgUANgPQANgOATgJQATgIAXAAQAPAAAPAFQAPAEAMAKQAMAJAIAOQAIANACASIgsAAQgEgSgLgIQgMgJgQAAQgPAAgLAGQgKAGgHAKQgHAKgDANQgDAMAAANQAAANADAMQADANAHAKQAHAKAKAFQALAGAPAAQAWAAAMgLQANgLACgWIguAAIAAghIBXAAIAABvIgdAAIgFgYQgMAQgPAGQgOAGgPAAQgXAAgTgIg");
	this.shape_4.setTransform(64.225,343.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgPBJIAAg6Ig5AAIAAgeIA5AAIAAg5IAeAAIAAA5IA6AAIAAAeIg6AAIAAA6g");
	this.shape_5.setTransform(37.275,346.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AA2BoIgPguIhNAAIgRAuIgtAAIBOjOIAtAAIBODOgAgbAYIA1AAIgZhMIgBAAg");
	this.shape_6.setTransform(18.9,343.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBNIAAiVIAnAAIAAAcIAAAAQADgHAFgGQAEgGAGgEQAHgEAHgDQAHgCAIAAIAKABIAAAnIgIgCIgHAAQgMAAgHAEQgIAEgGAGQgDAHgCAJQgCAIAAAKIAABDg");
	this.shape_7.setTransform(-3.45,346.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBIQgKgEgHgIQgFgIgDgLQgCgMgBgOIAAhbIAqAAIAABTQAAATAFAJQAGAKAQgBQAPABAHgKQAIgLAAgXIAAhNIAqAAIAACVIgoAAIAAgVIgBAAQgHANgNAGQgLAGgOAAQgQAAgLgFg");
	this.shape_8.setTransform(-18.15,346.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBJQgOgFgLgLQgJgKgGgOQgFgPgBgSQABgRAFgPQAGgOAJgKQALgLAOgFQAPgGAQAAQASAAAOAGQAOAFAKALQALAKAFAOQAGAPgBARQABASgGAPQgFAOgLAKQgKALgOAFQgOAGgSAAQgQAAgPgGgAgQgrQgIAEgDAHQgFAHgBAIQgCAJAAAIIACASQABAJAFAGQADAHAIAEQAGAEAKAAQAKAAAIgEQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgJQgCgIgEgHQgEgHgHgEQgIgEgKAAQgKAAgGAEg");
	this.shape_9.setTransform(-35.35,346.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxBlIgNgBIAAgiIAMABIANAAQAIgBAEgFQAEgGAAgGQAAgFgCgFIg1iLIAsAAIAhBlIABAAIAghlIArAAIg/CnQgGATgLAHQgMAIgVAAg");
	this.shape_10.setTransform(-51.475,349.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZBnQgLgDgKgGQgJgGgGgJQgGgJgBgNIApAAQADAMAIAEQAIAFAKAAQASAAAIgLQAIgKgBgQIAAgUIAAAAQgHAMgMAGQgMAFgNAAQgRAAgMgGQgMgGgIgKQgIgKgEgNQgDgOAAgPQAAgPAEgNQAEgNAIgLQAIgKAMgGQANgGAPAAQAOAAALAFQALAGAIANIAAAAIAAgUIAnAAIAACLQAAAJgCAMQgCALgJAKQgIAKgPAHQgPAHgZAAQgLAAgMgCgAgOhGQgGAEgEAGQgEAGgCAHQgCAIAAAIIACAQQABAJAEAGQAEAFAGAEQAHAEAIAAQAJAAAHgDQAGgEAFgFQAEgFACgIQACgHAAgIQAAgJgBgJQgCgIgEgGQgEgHgHgDQgHgEgKAAQgHAAgHADg");
	this.shape_11.setTransform(-75.725,349.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBNIAAhTQAAgTgFgJQgHgKgOABQgQgBgHALQgIAKAAAXIAABNIgqAAIAAiVIAoAAIAAAVIABAAQAHgNANgGQALgGAOAAQAQAAALAFQAKAEAHAIQAFAIADALQACAMAAAOIAABbg");
	this.shape_12.setTransform(-92.55,346.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBoIAAiWIApAAIAACWgAgUhEIAAgiIApAAIAAAig");
	this.shape_13.setTransform(-104.6,343.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwBNIAAiVIAoAAIAAAcIABAAQADgHAEgGQAEgGAHgEQAGgEAHgDQAHgCAIAAIAKABIAAAnIgIgCIgIAAQgLAAgIAEQgHAEgFAGQgEAHgCAJQgCAIAAAKIAABDg");
	this.shape_14.setTransform(-112.95,346.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhWBoIAAjOIBhAAQAPgBAMADQAMADAIAGQAJAFAFALQAFAKAAANQAAARgHAKQgHAKgOAHQATAFAJANQAKAOAAATQAAAQgGALQgGAMgLAHQgKAIgNADQgOADgNABgAgoBEIAwAAIAMgBQAGgCAFgDQAFgDACgFQADgFAAgIQAAgQgJgHQgJgHgPABIgwAAgAgogTIAtAAQAMABAIgHQAIgGAAgNQAAgGgDgFQgDgFgEgDQgEgCgGgBIgMgBIgpAAg");
	this.shape_15.setTransform(-128.825,343.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-141.5,323.7,285.5,38.60000000000002), null);


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
	this.instance.setTransform(-102.5,147.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-102.5,147.1,207,147.00000000000003), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An9TEMgAKgmWIC5geIDXA3IJDAAIA8AjIgZBaIAFA8IgeBkIAACWIAaBpIgKBGIAdBVIgJClIgeBaIgPCMIgGBaIAKEcIAfBVIgQBLIAQBBIgfGLIgOCWIgjBVItWCbg");
	mask.setTransform(15.5,239.525);

	// Layer_1
	this.instance = new lib.paperStack();
	this.instance.setTransform(-36.45,112.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(-36.4,113,103.9,253.10000000000002), null);


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
	mask.graphics.p("Aq2jrQg6laggkMQATAMIAAoQD/AVD9ARQAsE/D3I8QB8EdBzDfQhXAipJBcQkkAtkTAnQh9mJhzq0g");
	mask.setTransform(34.525,206.05);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-44.5,118.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-44,121.1,157.1,170.00000000000003), null);


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
	this.instance.setTransform(-95.3,252.15,0.8352,0.8352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-95.3,252.2,184.6,113.60000000000002), null);


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
	this.shape.setTransform(1.4286,2.05,1.1429,1.1429);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-35.3,-5.6,73.5,15.4), null);


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
	this.instance.setTransform(-50.2,-36.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-50.2,-36.5,112,44), null);


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

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,300,600), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.6,-1.6,0.1,4.4).s().p("Ak6AYIJvhSIAGAdIptBXg");
	this.shape.setTransform(-10.7,245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsTjPISXieIGQGXIz0FEg");
	var mask_graphics_36 = new cjs.Graphics().p("AsTjPISXieIGQGXIz0FEg");
	var mask_graphics_110 = new cjs.Graphics().p("AsTjPISXieIGQGXIz0FEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:23.15,y:269.975}).wait(36).to({graphics:mask_graphics_36,x:23.15,y:269.975}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:23.15,y:269.975}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(-33.05,223,0.976,0.976,0,0,0,0.1,0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,scaleX:1.065,scaleY:1.065,x:-5.05,y:257.55},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-149.75,-63.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-63.2,300,529);


// stage content:
(lib.Epson_EcoTank_BTS_300x600_v01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(264));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(264));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(150.2,174.8,1.5647,1.5647,0,0,0,0.1,0);
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
	this.instance_4.setTransform(255.05,562.2,0.6071,0.6071,0,0,0,-4.1,306.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(138.25,541.4,0.841,0.841,0,0,0,-3.9,221.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// Shaq_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_221 = new cjs.Graphics().p("AXSa4MgvpAAAMAAAg1vMAwvAAAMAAAA1vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(221).to({graphics:mask_graphics_221,x:156,y:414.05}).wait(51));

	// shaq_img
	this.instance_6 = new lib.shaq_img_1();
	this.instance_6.setTransform(490.2,438.15,0.8856,0.8856,-11.6422,0,0,51.4,222.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).to({x:240.2},13,cjs.Ease.quadOut).wait(38));

	// backPack_img
	this.instance_7 = new lib.backPack_img();
	this.instance_7.setTransform(150,125.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// whiteBar (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_164 = new cjs.Graphics().p("EgajAu9IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_1_graphics_164,x:149,y:300.5}).wait(55).to({graphics:null,x:0,y:0}).wait(53));

	// txt_homework
	this.instance_8 = new lib.txt_homework();
	this.instance_8.setTransform(207.85,178);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(53));

	// whiteBar
	this.instance_9 = new lib.whiteBar();
	this.instance_9.setTransform(149,566);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).wait(59).to({alpha:0},9).to({_off:true},1).wait(43));

	// kid_img
	this.instance_10 = new lib.kid_img("single",0);
	this.instance_10.setTransform(150,65.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// whiteBar (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_98 = new cjs.Graphics().p("EgajAu4IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_2_graphics_98,x:149,y:300}).wait(174));

	// txt_enoughInk
	this.instance_11 = new lib.txt_enoughInk();
	this.instance_11.setTransform(188.25,176.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// whiteBar
	this.instance_12 = new lib.whiteBar();
	this.instance_12.setTransform(149,565);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({_off:true},63).wait(111));

	// paper_mc
	this.instance_13 = new lib.paper_mc();
	this.instance_13.setTransform(35,-17.95,1.3191,1.3191);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({x:6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_stack_mc
	this.instance_14 = new lib.paper_stack_mc();
	this.instance_14.setTransform(-67.45,157.05);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(98).to({_off:false},0).to({x:35.55},9,cjs.Ease.quadOut).wait(44).to({x:-44.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// inkBottles_mc
	this.instance_15 = new lib.inkBottles_mc();
	this.instance_15.setTransform(242.15,189.35,0.5594,0.5594,0,0,0,0.1,0);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({regX:0,scaleX:0.7169,scaleY:0.7169,x:243,y:141.55,alpha:1},9,cjs.Ease.quadOut).wait(31).to({regX:0.1,regY:0.1,scaleX:1.2265,scaleY:1.2265,x:206.55,y:69.05},9,cjs.Ease.quadOut).wait(54).to({scaleX:1.0131,scaleY:1.0131,x:223.6,y:120.05},0).to({x:323.6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_16 = new lib.printer_mc();
	this.instance_16.setTransform(103.85,162.75,0.7804,0.7804);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:103,y:110.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({x:13,alpha:0},9).to({_off:true},1).wait(174));

	// whiteBar (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_48 = new cjs.Graphics().p("EgajAu4IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_3_graphics_48,x:149,y:300}).wait(50).to({graphics:null,x:0,y:0}).wait(174));

	// txt_cartridgeFree
	this.instance_17 = new lib.txt_cartridgeFree();
	this.instance_17.setTransform(145.5,164.75);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(48).to({_off:false},0).to({y:226.75,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:268.75,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_ecoTank
	this.instance_18 = new lib.txt_ecoTank();
	this.instance_18.setTransform(144.6,141.05);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:245.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_AGame
	this.instance_19 = new lib.txt_AGame();
	this.instance_19.setTransform(150.5,198.25);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// whiteBar
	this.instance_20 = new lib.whiteBar();
	this.instance_20.setTransform(149,565);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(208).to({y:225},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// shaq_img
	this.instance_21 = new lib.shaq_img_1();
	this.instance_21.setTransform(148,182.05);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:128.05,alpha:1},8,cjs.Ease.quadInOut).wait(31).to({y:182.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// background
	this.instance_22 = new lib.background_img();
	this.instance_22.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(46.1,299,367.9,313.5);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 300,
	height: 600,
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
		{src:"paperStack.jpg", id:"paperStack"},
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