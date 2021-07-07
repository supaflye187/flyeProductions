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
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
p.nominalBounds = new cjs.Rectangle(0,0,320,418);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,175);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,251);


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
	this.shape.setTransform(62.65,252.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVBZIgig5IgPANIAAAsIgjAAIAAixIAjAAIAABeIAsgtIArAAIgyAuIA3BSg");
	this.shape_1.setTransform(53.25,245.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_2.setTransform(41.375,248.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgIgJgFgNQgFgMAAgQQAAgPAFgMQAFgMAIgJQAJgKAMgFQANgEAOAAQAPAAAMAEQAMAFAKAKQAIAJAFAMQAFAMAAAPQAAAQgFAMQgFANgIAJQgKAIgMAFQgMAFgPAAQgOAAgNgFgAgOglQgGAEgEAGQgDAFgCAIQgCAHABAHIABAPQACAIADAFQAEAGAGAEQAGAEAIAAQAIAAAHgEQAGgEADgGQAEgFACgIQACgHAAgIQAAgHgCgHQgCgIgEgFQgDgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_3.setTransform(28.6,248.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBBIgXhWIAAAAIgWBWIgkAAIgpiBIAlAAIAYBXIAAAAIAWhXIAiAAIAVBXIABAAIAYhXIAkAAIgoCBg");
	this.shape_4.setTransform(11.125,248.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgIQAJgKAMgFQAMgFANAAQARAAAMAGQANAGAHALQAIALAEAOQADANgBAPIhcAAQABARAIAIQAIAHAOABQAKAAAIgGQAIgGACgFIAfAAQgIAXgPAKQgQAKgWAAQgOAAgMgFgAgNglQgFACgEAFQgDADgBAGIgCAIIA5AAQgDgNgGgIQgHgGgMgBQgIABgGADg");
	this.shape_5.setTransform(-5.8889,248.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA/BCIAAhIIAAgMQgBgGgCgEQgCgEgFgDQgEgCgHAAQgIAAgFACQgEADgDAFQgDAFAAAFIgBAMIAABHIgjAAIAAhHIAAgMQAAgFgCgFQgCgFgEgDQgFgCgIAAIgHABQgEABgEADQgEADgDAGQgCAGAAAJIAABKIgkAAIAAiAIAiAAIAAASIAAAAQAHgKAKgGQAKgFANAAQAMAAAKAEQAJAFAFAMQAGgJAKgGQAKgGAOAAQAKAAAIACQAJACAGAGQAHAGADAIQAEAJAAANIAABVg");
	this.shape_6.setTransform(-24.025,248.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgIgJgFgNQgFgMAAgQQAAgPAFgMQAFgMAIgJQAJgKAMgFQAMgEAPAAQAPAAAMAEQAMAFAKAKQAIAJAFAMQAFAMAAAPQAAAQgFAMQgFANgIAJQgKAIgMAFQgMAFgPAAQgPAAgMgFgAgOglQgGAEgEAGQgEAFgBAIQgBAHAAAHIABAPQABAIAEAFQAEAGAGAEQAGAEAIAAQAIAAAHgEQAGgEAEgGQADgFABgIQADgHAAgIQAAgHgDgHQgBgIgDgFQgEgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_7.setTransform(-42.6,248.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBZIAAhNIhHAAIAABNIgnAAIAAixIAnAAIAABEIBHAAIAAhEIAoAAIAACxg");
	this.shape_8.setTransform(-59.15,245.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBZIAAhoIgVAAIAAgYIAVAAIAAgKQAAgRALgLQAKgLAWAAIAJAAIAKABIAAAaIgOAAQgHAAgDADQgDADAAAIIAAAIIAZAAIAAAYIgZAAIAABog");
	this.shape_9.setTransform(-78.775,245.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbA/QgMgFgJgIQgIgJgFgNQgFgMAAgQQAAgPAFgMQAFgMAIgJQAJgKAMgFQANgEAOAAQAPAAAMAEQAMAFAKAKQAIAJAFAMQAFAMAAAPQAAAQgFAMQgFANgIAJQgKAIgMAFQgMAFgPAAQgOAAgNgFgAgOglQgGAEgEAGQgDAFgCAIQgCAHABAHIABAPQACAIADAFQAEAGAGAEQAGAEAIAAQAIAAAHgEQAGgEADgGQAEgFACgIQACgHAAgIQAAgHgCgHQgCgIgEgFQgDgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_10.setTransform(-90.2,248.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgUBBQgKgCgJgFQgJgFgFgJQgGgIAAgNIAiAAQAAAFADAFQACAEADACQAEADAFABIAJABIAIAAIAHgDQAEgDACgCQADgDgBgFQAAgIgKgEQgLgEgRgEIgQgFQgHgCgGgCQgGgFgDgFQgDgHgBgIQABgMAEgIQAFgIAIgFQAIgEAKgCQAKgCAKAAQAKAAAKACQAKABAIAFQAIAFAEAIQAFAIACAMIgiAAQgBgKgHgEQgHgDgJgBIgGABIgGABIgGAEQgBACAAAEQAAAFADADQADADAGACIANADIAOAEIAPAEQAHACAHAFQAFADAEAGQADAGAAAJQAAAMgFAJQgFAJgJAGQgIAEgKACQgLADgLAAQgKAAgLgDg");
	this.shape_11.setTransform(-110.8,248.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AAUBUIgPgBQgGgBgGgDQgFgDgEgGQgDgGAAgKIAAhLIgWAAIAAgYIAWAAIAAgmIAjAAIAAAmIAZAAIAAAYIgZAAIAAA/QAAAJADADQADADAIAAIAGAAIAFgBIAAAbIgKABg");
	this.shape_12.setTransform(-121.65,246.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgbA/QgMgFgJgIQgJgJgEgNQgFgMAAgQQAAgPAFgMQAEgMAJgJQAJgKAMgFQANgEAOAAQAPAAANAEQALAFAKAKQAJAJAEAMQAFAMAAAPQAAAQgFAMQgEANgJAJQgKAIgLAFQgNAFgPAAQgOAAgNgFgAgOglQgGAEgEAGQgDAFgCAIQgBAHgBAHIACAPQACAIADAFQAEAGAGAEQAGAEAIAAQAJAAAGgEQAGgEADgGQAEgFACgIQABgHAAgIQAAgHgBgHQgCgIgEgFQgDgGgGgEQgGgEgJAAQgIAAgGAEg");
	this.shape_13.setTransform(-133.2,248.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("Ag+BZIAAixIAnAAIAACQIBWAAIAAAhg");
	this.shape_14.setTransform(-147.275,245.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVBVIgQgBQgGgBgGgEQgGgDgDgGQgDgGAAgKIAAhLIgVAAIAAgYIAVAAIAAgnIAiAAIAAAnIAbAAIAAAYIgbAAIAAA/QAAAJADADQAEADAJAAIAFAAIAGgBIAAAcIgKABg");
	this.shape_15.setTransform(42.55,217.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZBCIAAhIQAAgQgFgIQgFgHgNAAQgNAAgHAIQgGAJAAAUIAABCIgkAAIAAiAIAiAAIAAASIABAAQAHgLAKgFQAKgFALAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAAMIAABOg");
	this.shape_16.setTransform(31.075,219.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBZIAAiAIAjAAIAACAgAgRg7IAAgdIAjAAIAAAdg");
	this.shape_17.setTransform(20.625,217.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpBCIAAiAIAiAAIAAAYIAAAAIAHgLQADgFAGgEQAFgEAHgBQAGgCAHAAIAIABIAAAhIgHgBIgGAAQgKAAgHADQgGADgFAGQgDAFgBAIQgCAHAAAIIAAA6g");
	this.shape_18.setTransform(13.425,219.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhGBZIAAixIBQAAQAQAAAMAFQAMAFAHAHQAHAJAEAKQADAKAAALQAAALgDAKQgEAKgHAHQgHAJgMAEQgMAFgQAAIgpAAIAABAgAgfgEIAfAAIAMgBQAGgBAFgDQAEgDADgFQADgGAAgIQAAgJgDgFQgDgFgEgDQgFgDgGgBIgMgBIgfAAg");
	this.shape_19.setTransform(0.275,217.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbA/QgMgEgJgKQgIgJgFgMQgFgNAAgPQAAgOAFgNQAFgMAIgKQAJgJAMgEQANgFAOAAQAPAAAMAFQAMAEAKAJQAIAKAFAMQAFANAAAOQAAAPgFANQgFAMgIAJQgKAKgMAEQgMAFgPAAQgOAAgNgFgAgOglQgGADgEAGQgDAGgCAIQgCAHABAHIABAPQACAHADAHQAEAFAGAEQAGAEAIgBQAIABAHgEQAGgEADgFQAEgHACgHQACgHAAgIQAAgHgCgHQgCgIgEgGQgDgGgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_20.setTransform(-22.7,219.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAVBVIgQgBQgGgBgGgEQgGgDgDgGQgDgGAAgKIAAhLIgVAAIAAgYIAVAAIAAgnIAiAAIAAAnIAaAAIAAAYIgaAAIAAA/QAAAJAEADQACADAKAAIAFAAIAFgBIAAAcIgKABg");
	this.shape_21.setTransform(-34.65,217.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAZBZIAAhJQAAgQgFgHQgFgHgNAAQgNAAgHAIQgGAIAAAUIAABDIgkAAIAAixIAkAAIAABDIABAAQAGgLALgFQAJgFAKAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAALIAABPg");
	this.shape_22.setTransform(-52.875,217.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVBYQgKgCgIgFQgIgFgGgIQgFgIgBgLIAjAAQADAKAHAEQAHAEAJAAQAPAAAHgJQAHgJgBgNIAAgSIAAAAQgGALgLAEQgKAFgLAAQgOAAgLgFQgKgFgHgJQgHgIgDgMQgDgLAAgNQAAgNADgMQAEgLAHgJQAIgJAJgGQALgEANAAQAMgBAKAFQAJAEAHAMIAAAAIAAgRIAiAAIAAB3QAAAJgCAJQgCAKgHAJQgHAJgNAFQgOAGgUABQgKAAgKgDgAgLg8QgGADgDAFQgEAGgCAGQgCAHABAHIABANQABAIADAFQAEAEAFAEQAGADAHABQAIAAAFgDQAHgEADgEQADgFACgGQACgGAAgHIgBgQQgCgGgDgGQgDgFgGgEQgGgDgJAAQgGAAgFADg");
	this.shape_23.setTransform(-68,221.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA+QgJgEgFgGQgGgHgCgKQgCgKAAgMIAAhOIAkAAIAABIQAAAPAFAJQAFAHANABQANAAAHgJQAGgJAAgUIAAhCIAkAAIAACAIgiAAIAAgSIgBAAQgHAMgKAEQgKAFgLABQgPAAgJgFg");
	this.shape_24.setTransform(-82.525,219.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbA/QgMgEgJgKQgIgJgFgMQgFgNAAgPQAAgOAFgNQAFgMAIgKQAJgJAMgEQAMgFAPAAQAPAAANAFQAMAEAIAJQAKAKAEAMQAFANAAAOQAAAPgFANQgEAMgKAJQgIAKgMAEQgNAFgPAAQgPAAgMgFgAgOglQgGADgEAGQgEAGgBAIQgCAHAAAHIACAPQABAHAEAHQAEAFAGAEQAGAEAIgBQAJABAGgEQAGgEAEgFQADgHABgHQACgHAAgIQAAgHgCgHQgBgIgDgGQgEgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_25.setTransform(-97.35,219.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAZBCIAAhIQAAgQgFgIQgFgHgNAAQgNAAgHAIQgGAJAAAUIAABCIgkAAIAAiAIAiAAIAAASIABAAQAHgLAKgFQAKgFALAAQAOAAAKADQAJAEAFAHQAFAHACAKQADAKAAAMIAABOg");
	this.shape_26.setTransform(-112.175,219.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhDBZIAAixICFAAIAAAhIhdAAIAAAmIBVAAIAAAdIhVAAIAAAsIBfAAIAAAhg");
	this.shape_27.setTransform(-127.125,217.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-157.3,-27.2,225.3,289.5), null);


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
	this.shape.setTransform(197,67.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_1.setTransform(185.725,55.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_2.setTransform(174.525,55.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoCkIAAj4IBRAAIAAD4gAgohlIAAg+IBRAAIAAA+g");
	this.shape_3.setTransform(163.275,55.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUCkIAAikQAAgPgEgGQgFgHgLAAQgKAAgEAHQgFAGAAAPIAACkIhTAAIAAlHIBTAAIAABrIABAAQAKgUAPgHQAQgHAPAAQANAAAMADQALADAJAIQAJAIAGANQAFANAAATIAAC7g");
	this.shape_4.setTransform(146.025,55.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmB+QgUgEgOgOQgNgOgJgYQgIgZAAgoQAAgrAJgbQAJgaAPgOQAPgOAUgFQAVgFAWAAQAbAAATAIQARAIALANQALANAEAUQAFASAAAYIhKAAIgCgYIgEgQQgFgKgOAAQgFAAgFADQgFADgCAKIgFAXIgBAlIABAmIAFAXQACAJAFAEQAFADAFAAQAMAAAHgJQAFgJABgWIAAgRIBKAAQgBAdgEAVQgGAVgLANQgYAZg1AAQgWAAgUgEg");
	this.shape_5.setTransform(123.75,59.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhQCjQgSgFgOgMQgNgLgJgRQgHgRgBgYQABgcAPgZQAOgYAggRQgMgRgKgTQgKgTABgTQAAgRAGgOQAHgOAMgKQAMgKASgGQAQgFAWAAQAUAAARAFQASAGALAKQAMAKAIAOQAGAOAAARQAAAYgPAVQgPAWgbARIAlAxQAFgIADgKIADgVIBIAAQgBAcgKAaQgIAagUATIAtA9IhbAAIgPgTIgSAKIgSAIIgSAEIgYACQgVAAgSgFgAg4A0QgGAJAAAHQAAAIADAHQADAHAFAFIAMAIQAFACAHAAQAIAAAIgDIAMgIIgrg7QgJAIgFAJgAgkhxQgHAHAAAKQAAAHAGAJIAQAYQAPgOAGgJQAFgKAAgHQAAgKgFgHQgIgGgKAAQgKAAgIAGg");
	this.shape_6.setTransform(88.25,55.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_7.setTransform(57.225,55.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoCkIAAlHIBRAAIAAFHg");
	this.shape_8.setTransform(46.025,55.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoCkIAAj4IBRAAIAAD4gAgohlIAAg+IBRAAIAAA+g");
	this.shape_9.setTransform(34.775,55.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrCnIAAi/IgcAAIAAg4IAcAAIAAgSQAAgTAEgNQAEgNAJgHQAJgJAPgDQANgEAWAAIATAAIAUACIAAA0IgGgBIgHAAQgIAAgGAFQgGADAAAKIAAAPIAhAAIAAA4IghAAIAAC/g");
	this.shape_10.setTransform(22.225,55.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFCgQgNgCgIgHQgJgGgEgNQgEgMAAgUIAAiDIgbAAIAAg4IAbAAIAAhJIBSAAIAABJIAgAAIAAA4IggAAIAAB0QAAALAFAFQAFAEAKAAIAMAAIAAA3IgWAAIgXABg");
	this.shape_11.setTransform(-2.925,55.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBuQgWgWAAgoIBIAAIACANIAEALQAGAJAMAAQAIAAAHgFQAHgGAAgKQAAgLgJgGQgJgGgMgFIgdgJQgPgFgNgJQgNgJgJgNQgJgOAAgYQAAgRAFgOQAGgNANgLQAMgLASgFQATgHAYAAQBdAAAABPIhHAAQAAgRgGgGQgGgFgKAAQgIAAgGAFQgGAFAAAJQAAALAJAFQAJAFAMAEIAdAJQAPAEANAJQAOAJAIANQAJAOAAAZQAAARgGAQQgHAPgNALQgNALgSAFQgTAGgWAAQg0AAgXgUg");
	this.shape_12.setTransform(-20.175,59.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag+B8QgMgCgJgIQgJgHgFgNQgFgNAAgUIAAi7IBTAAIAACjQAAAQAFAHQAEAHAKAAQALAAAFgHQAEgHAAgQIAAijIBTAAIAAD4IhQAAIAAgfIgBAAQgQAkgrAAQgOAAgLgDg");
	this.shape_13.setTransform(-42.175,59.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhPCMQgXgbAAgzIAAgHIBNAAIAAAQQAAAXAGAIQAGAIAKAAQAIAAAHgIQAGgIAAgXIAAjsIBVAAIAADgQAAA7gbAYQgbAYg0AAQg1AAgXgag");
	this.shape_14.setTransform(-65.175,55.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-78.8,24,284.8,61.5), null);


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
	this.shape.setTransform(108.075,248.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATBPIgfg0IgMANIAAAnIgfAAIAAidIAfAAIAABUIAngpIAlAAIgrAqIAvBIg");
	this.shape_1.setTransform(99.625,242.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAARIABAAQAGgLAJgEQAJgEAKAAQAMAAAIADQAIAEAFAFQAFAHABAIQACAJAAAKIAABGg");
	this.shape_2.setTransform(86.175,244.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape_3.setTransform(76.525,242.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRBPIAAhcIgTAAIAAgWIATAAIAAgIQAAgPAJgKQAJgKATAAIAIABIAJABIAAAWIgMAAQgGAAgDADQgDADAAAHIAAAGIAWAAIAAAWIgWAAIAABcg");
	this.shape_4.setTransform(63.775,242.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFQAAAHACAHQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_5.setTransform(53.525,244.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASBKIgOAAQgFgBgFgEQgFgCgDgFQgDgGAAgIIAAhCIgSAAIAAgWIASAAIAAgiIAeAAIAAAiIAYAAIAAAWIgYAAIAAA3QABAIACADQACACAJAAIAEAAIAGgBIAAAZIgJAAg");
	this.shape_6.setTransform(37,242.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWA7IAAg/QAAgPgEgHQgFgHgLABQgMgBgFAIQgGAHAAASIAAA7IgfAAIAAhyIAdAAIAAARIABAAQAGgLAJgEQAJgEAKAAQAMAAAIADQAIAEAFAFQAFAHABAIQACAJAAAKIAABGg");
	this.shape_7.setTransform(26.825,244.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_8.setTransform(13.925,244.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFIACAOQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_9.setTransform(0.825,244.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA4A7IAAhAIgBgKQAAgGgCgDQgCgFgEgBQgEgCgHAAQgGAAgEACQgEADgDAEIgDAJIAAAKIAAA/IgfAAIAAg/IAAgKIgCgJQgBgEgEgDQgEgCgIAAIgFABQgEAAgEADQgDADgCAFQgDAFAAAJIAABBIgfAAIAAhyIAdAAIAAAQIABAAQAGgIAJgGQAIgEAMAAQAKAAAJAEQAIAEAFALQAFgIAJgFQAIgHAMABQAJgBAIADQAIACAFAFQAGAFADAHQADAJAAAKIAABMg");
	this.shape_10.setTransform(-15.725,244.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AApBPIgMgkIg5AAIgNAkIgjAAIA8idIAiAAIA7CdgAgTASIAnAAIgUg5IAAAAg");
	this.shape_11.setTransform(-33.225,242.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgSA6QgJgCgIgEQgHgGgFgHQgEgIAAgLIAdAAQAAAFACADQACAFAEACQADACAEABIAIABIAHgBIAGgCQADgCADgCQACgDAAgEQAAgIgKgDQgJgDgQgEIgNgEQgHgBgFgDQgFgEgDgEQgDgGAAgIQAAgKAEgIQAFgGAHgFQAHgEAIgBQAKgCAIAAQAJAAAIACQAJABAHAFQAHAEAEAHQAFAHABAKIgeAAQAAgIgHgEQgGgDgIAAIgFABIgGABIgEADQgCACAAAEQAAAEAEADIAIAEIAKACIAMAEIAOADQAHACAEAEQAFADAEAFQACAGAAAHQABAMgFAHQgEAIgIAFQgHAEgJACQgKACgJAAQgJAAgKgCg");
	this.shape_12.setTransform(-52.75,244.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_13.setTransform(-65.125,244.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgNAEgLQAFgKAHgJQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAJAFAKQAEALAAANQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAHAAAFQAAAHACAHQABAGADAFQADAGAGADQAFACAHAAQAIAAAFgCQAGgDADgGQADgFABgGIACgOQAAgFgCgHQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_14.setTransform(-78.325,244.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_15.setTransform(-87.85,242.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgfA3QgIgEgFgFQgFgHgBgIQgCgIAAgMIAAhFIAfAAIAABAQAAAOAEAHQAFAHALAAQAMAAAFgHQAGgIAAgRIAAg8IAfAAIAAByIgdAAIAAgRIgBAAQgGALgJAEQgJAFgKgBQgMABgIgEg");
	this.shape_16.setTransform(-97.175,244.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgVA3QgLgEgIgHQgGgIgFgLQgEgKAAgNQAAgNADgKQAEgMAIgJQAIgHAKgFQALgFANAAQAKAAAJADQAKACAHAGQAHAFAFAIQAEAIABALIgeAAQgDgTgVAAQgFAAgGADQgFADgDAGQgEAFgBAHIgBALQAAAHABAGQACAGADAGQADAFAFAEQAFACAGAAQALABAGgHQAGgGACgKIAeAAQgDAWgPAMQgOAMgXAAQgLAAgLgFg");
	this.shape_17.setTransform(-109.85,244.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgPBPIAAhyIAfAAIAABygAgPg0IAAgaIAfAAIAAAag");
	this.shape_18.setTransform(-119.1,242.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgcBLQgKgFgGgIQgHgJgDgLQgDgLAAgMQAAgLADgKQADgKAHgJQAGgIAKgFQAJgFAMAAQAJAAAJAFQAKADAFAJIABAAIAAg5IAfAAIAACcIgeAAIAAgOIAAAAQgGAIgJAFQgJAEgKAAQgNAAgJgFgAgLgMQgFADgDAFQgEAEgCAHQgBAGAAAHQAAAHACAGQACAHADAFQADAFAGAEQAEACAHAAQAHAAAFgCQAGgDADgGQADgFACgGIABgOIgBgNQgCgHgDgEQgDgFgGgDQgFgDgHAAQgHAAgFADg");
	this.shape_19.setTransform(-128.85,242.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgOBPIAAhyIAdAAIAABygAgOg0IAAgaIAdAAIAAAag");
	this.shape_20.setTransform(-138.15,242.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAhBPQgDgIAAgKIgCgUQgCgMgGgGQgGgGgNAAIghAAIAAA+IgjAAIAAidIBUAAQALAAAIAEQAJADAGAGQAGAGADAIQADAIAAAIQAAAOgGALQgGAKgNAEIAAABQAHACAEADQAEAEADAEQACAGABAFIACANIABAIIAAALIACAKQABAEADAEgAgggHIAlAAQAMABAGgGQAGgFAAgMQAAgMgGgFQgGgEgMgBIglAAg");
	this.shape_21.setTransform(-148.575,242.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfA6QgHgCgFgEQgFgFgDgGQgEgGAAgJQABgJADgHQADgGAGgEQAFgDAHgCIAOgCIAOgCIALgCQAFgCADgCQAEgDgBgFQAAgEgCgEQgBgCgDgCQgDgCgDAAIgIgBQgIAAgFAEQgGAEgBAKIgfAAQABgMAEgHQAGgHAHgFQAIgEAIgCQAKgCAJAAIARABQAJACAHADQAHAEAFAGQAEAGAAALIAAA5IABAPQABAIADADIggAAIgBgFIgBgGQgIAIgKADQgJADgKAAQgJAAgHgCgAAPAEIgGACIgHABIgHABIgGABIgHADIgDAGQgCACAAAFQAAAEACACQABAEACABIAHACIAHABQAIAAAFgDQAGgDABgFQADgDABgFIAAgHIAAgMg");
	this.shape_22.setTransform(39.95,220.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWBPIAAhAQAAgPgEgGQgFgHgLABQgMgBgFAIQgGAGAAASIAAA8IgfAAIAAidIAfAAIAAA8IABAAQAFgLAKgEQAIgFAJABQAMgBAIAEQAIAEAFAFQAFAHABAJQACAIAAAJIAABHg");
	this.shape_23.setTransform(21.125,218.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASBLIgNgBQgGgBgFgEQgFgCgDgGQgDgEAAgJIAAhDIgTAAIAAgVIATAAIAAgiIAfAAIAAAiIAWAAIAAAVIgWAAIAAA4QgBAIADADQADACAHAAIAGAAIAEgBIAAAZIgJABg");
	this.shape_24.setTransform(10.7,219.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPBPIAAhyIAfAAIAABygAgPg0IAAgaIAfAAIAAAag");
	this.shape_25.setTransform(4.1,218.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA5IgUhLIAAAAIgTBLIggAAIgkhxIAhAAIAUBMIABAAIAThMIAdAAIAUBMIAVhMIAgAAIgkBxg");
	this.shape_26.setTransform(-7.675,220.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSA6QgJgCgIgEQgGgGgFgHQgFgHgBgMIAeAAQAAAFACADQADAEACADQAEACAEABIAIABIAHgBIAHgCQACgBACgEQACgCABgEQAAgIgKgDQgJgEgQgDIgNgEQgGgCgGgCQgFgEgDgEQgDgGAAgIQAAgKAEgIQAEgHAHgEQAHgDAJgCQAJgCAJAAQAJAAAIACQAJABAHAFQAHAEAEAHQAEAHACAKIgeAAQAAgIgHgEQgGgDgIAAIgFABIgFABIgFADQgBACgBAEQAAAEADADIAIAEIALACIAMAEIAOADQAGACAGAEQAEADAEAFQACAGAAAHQAAAMgEAHQgEAIgIAFQgHAEgJACQgKACgJAAQgJAAgKgCg");
	this.shape_27.setTransform(-28.65,220.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWA3QgLgEgHgHQgIgJgEgKQgEgLAAgOQAAgMAEgLQAEgKAIgJQAIgHALgFQAKgFAMAAQAPAAALAGQAKAFAHAKQAHAKADALQADANgBAMIhRAAQABAPAHAGQAHAIAMAAQAKgBAHgEQAGgFACgFIAbAAQgGAUgOAJQgNAJgUAAQgMAAgLgFgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgFgGgMAAQgGAAgFACg");
	this.shape_28.setTransform(-40.8375,220.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AA4A7IAAhAIgBgLQAAgFgCgEQgCgEgEgBQgEgCgHAAQgGAAgEACQgEADgDAEIgDAJIAAAKIAAA/IgfAAIAAg/IAAgKIgCgJQgBgEgEgDQgEgCgIAAIgFABQgEAAgEADQgDADgCAFQgDAFAAAIIAABCIgfAAIAAhyIAdAAIAAAQIABAAQAGgIAJgGQAIgEAMAAQAKgBAJAFQAIAEAFALQAFgIAJgGQAIgFAMAAQAJgBAIADQAIACAFAFQAGAFADAHQADAJAAAKIAABMg");
	this.shape_29.setTransform(-57.075,220.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXA3QgLgEgIgHQgHgIgFgLQgEgLAAgOQAAgMAEgMQAFgLAHgIQAIgHALgEQAKgFANAAQANAAALAFQALAEAIAHQAHAIAFALQAEAMAAAMQAAAOgEALQgFALgHAIQgIAHgLAEQgLAFgNAAQgNAAgKgFgAgMggQgGADgDAFQgDAFgBAHQgCAGAAAGIACANQABAHADAFQADAFAGAEQAFADAHAAQAIAAAFgDQAGgEADgFQADgFABgHIACgNQAAgGgCgGQgBgHgDgFQgDgFgGgDQgFgDgIAAQgHAAgFADg");
	this.shape_30.setTransform(-73.725,220.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbBMQgPgGgKgLQgKgLgFgPQgFgPAAgRQAAgRAFgPQAFgPAKgLQAKgLAPgHQAOgGARAAQANAAALAEQAMADAKAIQAIAHAGAKQAGALACANIgiAAQgBgFgCgFQgDgFgFgEQgFgEgFgCQgHgCgGAAQgLAAgIAEQgIAFgFAIQgFAHgDAKQgBAKAAAJQAAAKABAJQADAJAFAIQAFAHAIAFQAIAEALAAQAQAAAJgJQAIgKACgQIAiAAQgBAPgGAMQgFAMgJAIQgJAIgNAFQgLAEgPAAQgRAAgOgGg");
	this.shape_31.setTransform(-88.6,218.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-158.8,-22.9,272.1,279.79999999999995), null);


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
	this.shape.setTransform(86.025,227.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AATBSIgfg1IgNAMIAAApIghAAIAAijIAhAAIAABXIAogqIAnAAIgtArIAyBLg");
	this.shape_1.setTransform(74.425,232.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#123293").s().p("AAXA9IAAhCQAAgPgFgHQgEgHgMAAQgMgBgGAJQgGAHAAATIAAA9IghAAIAAh2IAfAAIAAAQIABAAQAGgKAKgEQAJgFAKAAQANAAAJAEQAIADAFAHQAFAFACAKQACAJAAALIAABIg");
	this.shape_2.setTransform(60.475,234.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#123293").s().p("AggA8QgIgCgGgEQgFgFgDgGQgDgHAAgJQAAgKADgGQAEgHAFgEQAGgDAIgCIAOgDIAOgCIANgCQAFgCADgCQADgDAAgEQAAgGgBgDIgGgFIgGgCIgIgBQgJAAgFAFQgGADgBAKIghAAQABgLAFgIQAFgIAIgEQAIgFAKgBQAKgCAJAAIASABQAJABAIADQAHAFAFAGQAFAGgBALIAAA9IACAPQABAIACADIgiAAIgBgFIAAgGQgJAIgKADQgKADgKABQgJgBgHgCgAAQAEIgHACIgHABIgHABIgIACIgGADQgDACgBADQgBADAAAEQAAAFABADQABADADACIAHACIAIABQAIAAAGgDQAFgDACgFQADgEABgFIAAgIIAAgLg");
	this.shape_3.setTransform(47.25,235);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123293").s().p("AgRBSIAAiFIgxAAIAAgeICFAAIAAAeIgxAAIAACFg");
	this.shape_4.setTransform(33.925,232.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgYA6QgMgEgIgIQgIgJgFgLQgDgMAAgOQAAgNADgLQAFgNAIgHQAIgJAMgEQAKgFAOABQANgBAMAFQAMAEAHAJQAJAHAEANQAFALgBANQABAOgFAMQgEALgJAJQgHAIgMAEQgMAFgNAAQgOAAgKgFgAgNghQgFADgEAFQgEAFgBAHIgBANQAAAIABAGQABAHAEAGQAEAFAFADQAGADAHAAQAIAAAGgDQAFgDAEgFQADgGABgHQACgGAAgIIgCgNQgBgHgDgFQgEgFgFgDQgGgEgIAAQgHAAgGAEg");
	this.shape_5.setTransform(20.15,235);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AgWA6QgLgFgIgHQgIgJgFgKQgDgMAAgNQAAgNADgMQAEgLAIgJQAIgJALgFQAMgEANAAQALAAAKACQAJADAIAGQAIAFAEAIQAFAJABAMIggAAQgEgVgVAAQgGAAgFAEQgFADgEAGQgDAFgCAHIgBANIABAMQACAIADAFQADAFAFADQAGAEAGAAQAMAAAGgHQAGgGACgLIAgAAQgEAXgPANQgPANgYAAQgMAAgLgFg");
	this.shape_6.setTransform(6.9,235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("Ag9BSIAAijIB5AAIAAAeIhVAAIAAAkIBOAAIAAAbIhOAAIAAAnIBXAAIAAAfg");
	this.shape_7.setTransform(-6.675,232.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXBSIAAhDQAAgPgFgGQgEgHgMAAQgMgBgGAJQgGAGAAATIAAA+IghAAIAAijIAhAAIAAA9IABAAQAGgKAJgEQAJgFAJAAQANAAAJAEQAIADAFAHQAFAFACAKQACAJAAAKIAABJg");
	this.shape_8.setTransform(-27.125,232.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATBOIgPgBQgFgBgFgDQgFgDgDgGQgDgFgBgJIAAhFIgTAAIAAgWIATAAIAAgkIAgAAIAAAkIAYAAIAAAWIgYAAIAAA6QABAIACADQADACAIAAIAFAAIAFgBIAAAaIgJABg");
	this.shape_9.setTransform(-37.8,233.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg3IAAgaIAfAAIAAAag");
	this.shape_10.setTransform(-44.425,232.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcBSIgchvIAAAAIgbBvIgkAAIgsijIAkAAIAaBvIAdhvIAhAAIAcBwIAAAAIAbhwIAkAAIgsCjg");
	this.shape_11.setTransform(-58,232.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-70.8,216.5,163.5,31.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(139.375,241.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUBVQgKgDgIgEQgHgFgGgIQgEgHgCgLIAiAAQADAKAHAEQAHADAIAAQAPAAAGgIQAGgJAAgNIAAgRIAAAAQgGAKgKAFQgKAFgKAAQgOAAgLgFQgKgFgGgJQgHgIgDgLQgCgLAAgNQAAgMADgLQAEgLAGgJQAHgIAKgFQAKgFANAAQALAAAJAEQAKAFAGALIAAAAIAAgRIAhAAIAABzQgBAIgCAJQgCAKgGAIQgHAJgNAFQgMAGgVAAQgIAAgKgCgAgLg6QgFADgEAFQgDAFgBAGQgCAHAAAHIABANQABAHADAFQAEAEAFAEQAFADAIAAQAGAAAGgDQAFgDAEgFQAEgDACgGQABgHAAgGQAAgIgBgHQgCgHgDgFQgDgFgGgDQgGgDgHAAQgHAAgFACg");
	this.shape_1.setTransform(128.9,239.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_2.setTransform(115.225,236.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_3.setTransform(105.5,234.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgFAAgKIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADADQADACAIAAIAGAAIAFgBIAAAbIgKABg");
	this.shape_4.setTransform(98.575,235.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYBAIAAhFQAAgQgFgHQgFgIgMAAQgNAAgGAJQgGAIAAATIAABAIgiAAIAAh7IAgAAIAAARIABAAQAGgLALgFQAJgFALAAQANAAAJAEQAJAEAFAGQAFAHACAJQACAKAAALIAABMg");
	this.shape_5.setTransform(87.825,236.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_6.setTransform(78.1,234.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBAIAAh7IAhAAIAAAXIAAAAQACgGAEgFQAEgFAEgDQAGgEAGgCQAGgCAGAAIAIACIAAAfIgGgBIgHAAQgIAAgHADQgGADgEAGQgDAFgCAHQgCAHAAAIIAAA4g");
	this.shape_7.setTransform(71.45,236.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBWIAAirIBMAAQAQAAALAFQAMAFAHAHQAHAIADAKQADAKAAAKQAAALgDAKQgDAJgHAHQgHAIgMAFQgLAEgQAAIgmAAIAAA+gAgdgEIAdAAIALgBQAGgBAFgDQAEgCADgFQADgGAAgIQAAgIgDgFQgDgFgEgDQgFgCgGgBIgLgBIgdAAg");
	this.shape_8.setTransform(59.075,234.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_9.setTransform(37.9861,236.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_10.setTransform(24.6861,236.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBAIAAh7IAgAAIAAAXIABAAQACgGAEgFQADgFAGgDQAFgEAGgCQAGgCAGAAIAIACIAAAfIgGgBIgGAAQgKAAgGADQgHADgEAGQgCAFgCAHQgCAHAAAIIAAA4g");
	this.shape_11.setTransform(14.25,236.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BWIAAirIB3AAIAAAgIhRAAIAAAoIBGAAIAAAcIhGAAIAABHg");
	this.shape_12.setTransform(2.875,234.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjAPIAAgcIBHAAIAAAcg");
	this.shape_13.setTransform(-9.2,236.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA9QgMgFgIgJQgIgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAJgIQAIgJAMgFQALgFAOAAQAPAAAMAGQAMAGAHAKQAIALADANQAEANgBANIhZAAQABARAIAHQAHAIAOAAQAKAAAIgFQAHgFACgGIAeAAQgIAWgOAKQgPAJgVAAQgOAAgMgEgAgMgkQgFADgEAEQgDAEgBAFIgCAIIA3AAQgDgNgGgHQgGgGgMAAQgIAAgFACg");
	this.shape_14.setTransform(-20.5139,236.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUBVQgJgDgJgEQgHgFgFgIQgFgHgCgLIAiAAQADAKAHAEQAHADAIAAQAOAAAHgIQAGgJABgNIAAgRIgBAAQgGAKgKAFQgKAFgKAAQgOAAgLgFQgKgFgGgJQgHgIgDgLQgCgLAAgNQgBgMAEgLQAEgLAGgJQAHgIAKgFQAKgFANAAQALAAAJAEQAKAFAGALIABAAIAAgRIAfAAIAABzQAAAIgCAJQgCAKgGAIQgHAJgNAFQgMAGgVAAQgJAAgJgCgAgLg6QgFADgEAFQgDAFgBAGQgCAHAAAHIABANQABAHADAFQAEAEAFAEQAFADAIAAQAGAAAGgDQAFgDAEgFQAEgDACgGQACgHAAgGQgBgIgBgHQgCgHgDgFQgEgFgFgDQgGgDgHAAQgHAAgFACg");
	this.shape_15.setTransform(-34.55,239.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBSQgKgFgHgKQgHgJgEgMQgDgMAAgNQAAgMADgLQAEgMAHgJQAHgIAKgGQAKgFAOAAQAKAAAKAEQAKAFAGAJIAAAAIAAg+IAiAAIAACqIggAAIAAgQIgBAAQgGALgJAEQgKAEgLAAQgOAAgLgFgAgMgNQgGADgDAGQgEAEgBAHQgCAHAAAIQAAAHACAHQABAIAEAFQAEAGAFADQAGAEAHAAQAIAAAGgDQAGgEADgFQADgGACgHQABgHAAgIQAAgIgBgHQgCgHgDgEQgEgGgFgDQgGgDgIAAQgHAAgGADg");
	this.shape_16.setTransform(-48.725,234.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg5IAAgcIAhAAIAAAcg");
	this.shape_17.setTransform(-58.4,234.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBAIAAh7IAhAAIAAAXIAAAAQADgGADgFQADgFAGgDQAFgEAGgCQAGgCAGAAIAIACIAAAfIgGgBIgGAAQgKAAgGADQgHADgDAGQgDAFgCAHQgCAHAAAIIAAA4g");
	this.shape_18.setTransform(-65.05,236.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAUBRIgPgBQgGgBgFgDQgGgDgDgGQgDgFAAgKIAAhIIgVAAIAAgXIAVAAIAAglIAhAAIAAAlIAZAAIAAAXIgZAAIAAA8QAAAJADADQADACAIAAIAGAAIAFgBIAAAbIgKABg");
	this.shape_19.setTransform(-74.175,235.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnBAIAAh7IAgAAIAAAXIABAAQADgGADgFQAEgFAEgDQAGgEAGgCQAGgCAHAAIAHACIAAAfIgGgBIgHAAQgJAAgGADQgGADgFAGQgDAFgBAHQgCAHAAAIIAAA4g");
	this.shape_20.setTransform(-81.85,236.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiA/QgHgCgGgEQgGgFgDgHQgDgHgBgKQAAgKAFgHQADgHAGgEQAGgDAHgCIAQgDIAPgCIAMgCQAGgCADgDQAEgCgBgGQAAgFgCgDQgCgEgCgBQgEgCgDgBIgJAAQgJAAgGAEQgFAEgCAKIghAAQAAgMAFgIQAGgIAIgEQAIgFALgCQAKgCAJAAIATABQAJABAIAEQAIAEAGAHQAEAHAAALIAABAIABAQQABAHADAEIgjAAIgBgGIgBgGQgJAJgLADQgJADgMAAQgJAAgIgCgAARAEIgHACIgIACIgHABIgIACIgGADQgDACgCADQgCADAAAFQAAAFACADQACADADACIAGACIAIABQAKAAAFgEQAGgDACgFQADgEAAgFIABgIIAAgMg");
	this.shape_21.setTransform(-93.65,236.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBTQgQgHgKgMQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgNQAKgMAQgHQAPgHAUAAQAOAAAMAEQANAFAJAHQALAIAGAMQAHALABAPIgkAAQgBgGgEgGQgDgFgFgEQgFgEgHgDQgFgCgHAAQgMAAgKAFQgIAFgFAIQgGAIgCALQgDALAAAKQAAALADAKQACAKAGAIQAFAIAIAFQAKAFAMAAQARAAAKgKQAJgLACgRIAlAAQgCAQgGANQgFANgLAJQgJAJgNAFQgOAFgPAAQgUAAgPgHg");
	this.shape_22.setTransform(-108.85,234.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-119.7,217.7,264.2,32.60000000000002), null);


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
	this.shape.setTransform(151.475,234.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBJQgOgFgKgLQgKgLgGgOQgFgOAAgSQAAgQAGgOQAFgPAKgKQALgKAOgHQAOgGAQAAQATAAAOAIQAOAHAJAMQAKAMAEAQQAEARgCAQIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgJAbgSAMQgSAMgZAAQgRAAgOgGgAgPgrQgGADgEAFQgEAEgCAGIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHAEg");
	this.shape_1.setTransform(138.9204,229.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABJBNIAAhUIgBgOQAAgHgDgFQgCgEgFgEQgGgCgIAAQgJgBgFAEQgGADgDAFQgCAGgBAGIgBAOIAABTIgpAAIAAhTIAAgOQgBgGgBgGQgCgFgFgDQgGgEgKABIgIABQgEABgFADQgEAFgEAGQgDAHAAALIAABWIgoAAIAAiVIAmAAIAAAVIABAAQAIgMALgGQAMgHAOAAQAPAAAMAGQAKAFAHAOQAGgKAMgHQALgIAQAAQAMAAAJADQALACAHAIQAHAFAFALQAEAKgBAOIAABkg");
	this.shape_2.setTransform(117.25,229.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBMQgJgDgIgFQgGgFgEgJQgEgIAAgMQAAgMAEgJQAFgIAHgFQAHgEAJgDIASgDIATgDIAPgDQAHgBADgDQAFgEAAgGQgBgHgCgEQgCgEgDgCQgEgCgFgBIgKgBQgLABgIAFQgGAFgBAMIgpAAQAAgPAHgJQAGgJAKgHQAKgFAMgDQAMgCAMAAIAXABQAMACAJAFQAKAEAFAJQAHAIgBAOIAABNIACATQABAJADAFIgqAAIgBgHIgCgHQgJAJgOAEQgMAFgOAAQgLAAgJgDgAAUAFIgIADIgKABIgIABIgKACIgHAFQgEACgCADQgCAFAAAGQAAAFACAEQACADAEACIAIAEIAKABQALAAAGgFQAGgEAEgFQADgGABgFIABgKIAAgQg");
	this.shape_3.setTransform(95.5,229.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBkQgTgIgNgPQgNgOgHgUQgHgTAAgXQAAgWAHgUQAHgUANgPQANgOATgJQATgIAXAAQAPAAAPAFQAPAEAMAKQAMAJAIAOQAIANACASIgsAAQgEgSgLgIQgMgJgQAAQgPAAgLAGQgKAGgHAKQgHAKgDANQgDAMAAANQAAANADAMQADANAHAKQAHAKAKAFQALAGAPAAQAWAAAMgLQANgLACgWIguAAIAAghIBXAAIAABvIgdAAIgFgYQgMAQgPAGQgOAGgPAAQgXAAgTgIg");
	this.shape_4.setTransform(75.725,226.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgPBJIAAg6Ig5AAIAAgeIA5AAIAAg5IAeAAIAAA5IA6AAIAAAeIg6AAIAAA6g");
	this.shape_5.setTransform(47.775,229.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AA2BoIgPguIhNAAIgRAuIgtAAIBOjOIAtAAIBODOgAgaAYIA1AAIgahMIgBAAg");
	this.shape_6.setTransform(28.9,226.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBNIAAiVIAnAAIAAAcIAAAAQADgHAFgGQAEgGAGgEQAHgEAHgDQAHgCAIAAIAKABIAAAnIgIgCIgHAAQgMAAgHAEQgIAEgGAHQgDAGgCAJQgCAIAAAKIAABDg");
	this.shape_7.setTransform(5.55,229.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpBIQgMgEgFgIQgHgIgCgLQgDgMAAgOIAAhbIAqAAIAABTQAAATAGAJQAFAKAPgBQAQABAIgLQAHgKAAgXIAAhNIApAAIAACVIgnAAIAAgVIAAAAQgJANgMAGQgLAGgNAAQgRAAgKgFg");
	this.shape_8.setTransform(-9.65,229.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBJQgOgFgLgLQgJgKgGgOQgFgPgBgSQABgRAFgPQAGgOAJgKQALgLAOgFQAPgGAQAAQARAAAPAGQAOAFALALQAKAKAFAOQAGAPgBARQABASgGAPQgFAOgKAKQgLALgOAFQgPAGgRAAQgQAAgPgGgAgQgrQgHAEgFAHQgEAHgBAIQgCAJAAAIIACASQABAJAEAGQAFAHAHAEQAGAEAKAAQAKAAAIgEQAGgEAFgHQAEgGABgJQADgJAAgJQAAgIgDgJQgBgIgEgHQgFgHgGgEQgIgEgKAAQgKAAgGAEg");
	this.shape_9.setTransform(-27.35,229.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxBlIgNgBIAAgiIAMABIANAAQAIgBAEgFQAEgGAAgGQAAgFgCgFIg1iLIAsAAIAhBlIABAAIAghlIArAAIg/CnQgGATgLAHQgMAIgVAAg");
	this.shape_10.setTransform(-43.975,232.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZBnQgLgDgKgGQgJgGgGgJQgGgJgBgNIApAAQADAMAIAEQAIAFAKAAQASAAAIgLQAIgKgBgQIAAgUIAAAAQgHAMgMAGQgMAFgNAAQgRAAgMgGQgMgGgIgKQgIgKgEgNQgDgOAAgPQAAgPAEgNQAEgNAIgLQAIgKAMgGQANgGAPAAQAOAAALAFQALAGAIANIAAAAIAAgUIAnAAIAACLQAAAJgCAMQgCALgJAKQgIAKgPAHQgPAHgZAAQgLAAgMgCgAgOhGQgGAEgEAGQgEAGgCAHQgCAIAAAIIACAQQABAJAEAGQAEAFAGAEQAHAEAIAAQAJAAAHgDQAGgEAFgFQAEgFACgIQACgHAAgIQAAgJgBgJQgCgIgEgGQgEgHgHgDQgHgEgKAAQgHAAgHADg");
	this.shape_11.setTransform(-69.225,232.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBNIAAhTQAAgTgGgJQgFgKgPABQgQgBgIALQgHAKAAAXIAABNIgqAAIAAiVIAoAAIAAAVIAAAAQAIgNANgGQAMgGANAAQAQAAALAFQAKAEAGAIQAHAIACALQADAMAAAOIAABbg");
	this.shape_12.setTransform(-86.55,229.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBoIAAiWIApAAIAACWgAgUhEIAAgiIApAAIAAAig");
	this.shape_13.setTransform(-99.1,226.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBNIAAiVIAnAAIAAAcIAAAAQADgHAFgGQAEgGAGgEQAHgEAHgDQAHgCAIAAIAJABIAAAnIgHgCIgHAAQgMAAgHAEQgIAEgGAHQgDAGgCAJQgCAIAAAKIAABDg");
	this.shape_14.setTransform(-107.95,229.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhWBoIAAjOIBhAAQAPgBAMADQAMADAIAFQAJAGAFALQAFAKAAANQAAARgHAKQgHAKgOAHQATAFAJANQAKAOAAATQAAAQgGALQgGAMgLAHQgKAIgNADQgOADgNABgAgoBEIAwAAIAMgBQAGgCAFgDQAFgDACgFQADgFAAgIQAAgQgJgHQgJgHgPABIgwAAgAgogTIAtAAQAMABAIgHQAIgGAAgNQAAgGgDgFQgDgFgEgDQgEgCgGgBIgMgBIgpAAg");
	this.shape_15.setTransform(-124.325,226.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-137,206.7,295,38.60000000000002), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmMTEIjrh8MAAKgkuIGPgKIDXA3IJDAAIA8AjIgZBaIAGA8IgeBkIAACWIAZBpIgKBGIAeBVIgKClIgeBaIgPCMIgFBaIAKEcIAeBVIgPBLIAPBBIgeGLIgPCWIgjBVItWCbg");
	mask.setTransform(23.25,139.525);

	// Layer_1
	this.instance = new lib.paperStack();
	this.instance.setTransform(-37.45,12.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(-37.4,13,123.9,250.60000000000002), null);


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
	mask.graphics.p("Aq2iMQg6laggkMQATANIAAoQD/AUD9ARQAsE/D3I8QB8EeBzDeQhXAjpJBbQkkAukTAmQh9mJhzq0g");
	mask.setTransform(53.525,94.525);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-25.5,16.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-25,19.1,157.1,170), null);


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
	this.shape.setTransform(3.6703,6.309,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-36.8,-2.2,81,17), null);


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
	this.instance.setTransform(-24.15,-32.95,1.0893,1.0893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-24.1,-32.9,122,47.9), null);


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

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,320,480), null);


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
	this.shape.setTransform(31.4369,190.5597,0.8096,0.8096);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.5,-1.3,0,3.5).s().p("Aj+AUIH4hDIAFAYIn3BHg");
	this.shape_1.setTransform(31.45,190.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},36).to({state:[]},1).to({state:[{t:this.shape_1}]},73).to({state:[]},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ap9LhIO3h/IFEFKIwCEGg");
	var mask_graphics_36 = new cjs.Graphics().p("Ap9ioIO3h/IFEFJIwDEGg");
	var mask_graphics_110 = new cjs.Graphics().p("Ap9ioIO3h/IFEFJIwDEGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:58.843,y:120.1962}).wait(36).to({graphics:mask_graphics_36,x:58.85,y:210.775}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:58.85,y:210.775}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(13.65,174.25,0.7642,0.7642,0,0,0,0.4,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.4,scaleX:0.8622,scaleY:0.8622,x:36.05,y:200.7},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-149.75,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-65.2,320,418);


// stage content:
(lib.Epson_EcoTank_BTS_320x480_v01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

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
	this.instance_2.setTransform(158.55,133.45,1.4564,1.4564,0,0,0,0.1,0.1);
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
	this.instance_4.setTransform(256.15,486.6,0.5449,0.5449,0,0,0,-4,306.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(147.3,468.4,0.7549,0.7549,0,0,0,-3.9,221.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// Shaq_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_221 = new cjs.Graphics().p("EAYYAkaIgKAAMgvpAAAMAAAg1vMAvzAAAIA8AAMAAAA1vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(221).to({graphics:mask_graphics_221,x:162,y:233.025}).wait(51));

	// shaq_img
	this.instance_6 = new lib.shaq_img_1();
	this.instance_6.setTransform(506.3,323.1,0.8703,0.8703,-11.6403,0,0,51.5,222.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).to({x:255.3},13,cjs.Ease.quadOut).wait(38));

	// backPack_img
	this.instance_7 = new lib.backPack_img();
	this.instance_7.setTransform(150,125.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// whiteBar (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_164 = new cjs.Graphics().p("EgajAl+IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_1_graphics_164,x:159,y:243}).wait(55).to({graphics:null,x:0,y:0}).wait(53));

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
	this.instance_9.setTransform(159,451);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).wait(59).to({x:160,alpha:0},9).to({_off:true},1).wait(43));

	// kid_img
	this.instance_10 = new lib.kid_img("single",0);
	this.instance_10.setTransform(150,65.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// whiteBar (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_98 = new cjs.Graphics().p("EgajAl+IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_2_graphics_98,x:160,y:243}).wait(174));

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
	this.instance_12.setTransform(160,451);
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
	this.instance_14.setTransform(-88.45,157.05);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(98).to({_off:false},0).to({x:35.55},9,cjs.Ease.quadOut).wait(44).to({x:-44.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// inkBottles_mc
	this.instance_15 = new lib.inkBottles_mc();
	this.instance_15.setTransform(242.15,174.35,0.5594,0.5594,0,0,0,0.1,0);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({regX:0,scaleX:0.7169,scaleY:0.7169,x:243,y:141.55,alpha:1},9,cjs.Ease.quadOut).wait(31).to({regX:0.1,regY:0.1,scaleX:1.0837,scaleY:1.0837,x:184.6,y:103.1},9,cjs.Ease.quadOut).wait(54).to({x:284.6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_16 = new lib.printer_mc();
	this.instance_16.setTransform(103.85,147.75,0.7804,0.7804);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:103,y:110.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({x:13,alpha:0},9).to({_off:true},1).wait(174));

	// whiteBar (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_48 = new cjs.Graphics().p("EgajAl+IAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_3_graphics_48,x:159,y:243}).wait(50).to({graphics:null,x:0,y:0}).wait(174));

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
	this.instance_20.setTransform(160,451);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(208).to({x:149,y:225},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// shaq_img
	this.instance_21 = new lib.shaq_img_1();
	this.instance_21.setTransform(158,72.05);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:39,alpha:1},8,cjs.Ease.quadInOut).wait(31).to({y:39.05},0).to({y:182.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// background
	this.instance_22 = new lib.background_img();
	this.instance_22.setTransform(160,241.1,1.1067,0.8033);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(31.6,239,399.29999999999995,357.1);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 320,
	height: 480,
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