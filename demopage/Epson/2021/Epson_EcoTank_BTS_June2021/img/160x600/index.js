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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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
	this.shape.graphics.f("#000000").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape.setTransform(-58.85,-76.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVBdIgkg8IgOANIAAAvIglAAIAAi5IAlAAIAABjIAugwIArAAIgyAxIA4BVg");
	this.shape_1.setTransform(-69.1,-84.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBFIAAiGIAjAAIAAAaIAAAAIAHgMQAEgFAGgEQAFgEAHgCQAGgCAHAAIAIACIAAAiIgGgCIgHAAQgKABgHADQgHADgEAGQgEAGgBAHQgCAIAAAIIAAA9g");
	this.shape_2.setTransform(-82.025,-81.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcBCQgNgFgJgJQgIgKgFgNQgFgNgBgQQABgPAFgNQAFgNAIgJQAJgKANgFQANgFAPAAQAPAAANAFQANAFAKAKQAIAJAFANQAGANAAAPQAAAQgGANQgFANgIAKQgKAJgNAFQgNAFgPAAQgPAAgNgFgAgPgmQgGAEgEAGQgEAFgBAIIgCAPQAAAIACAIQABAIAEAGQAEAGAGADQAGAEAJAAQAJAAAHgEQAGgDAEgGQADgGACgIQACgIAAgIIgCgPQgCgIgDgFQgEgGgGgEQgHgEgJAAQgJAAgGAEg");
	this.shape_3.setTransform(-95.8,-81.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYBDIgYhZIAAAAIgWBZIgnAAIgqiFIAnAAIAZBaIAAAAIAWhaIAjAAIAXBaIABAAIAYhaIAmAAIgqCFg");
	this.shape_4.setTransform(-114.475,-81.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaBCQgNgFgJgKQgJgJgEgNQgFgNAAgQQAAgOAFgNQAFgNAJgJQAJgKAMgFQANgGAOAAQASAAAMAHQANAGAIAMQAIALAEAOQAEAOgBAPIhgAAQAAASAJAIQAIAIAPAAQALAAAIgFQAIgGACgGIAgAAQgHAYgRAKQgQALgXAAQgOAAgNgFgAgNgnQgGADgEAEQgDAFgCAFIgBAJIA7AAQgDgOgGgIQgHgHgOAAQgHAAgGADg");
	this.shape_5.setTransform(-132.6389,-81.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABCBFIAAhLIgBgNQAAgGgDgEQgCgEgEgEQgFgCgIAAQgIAAgEADQgFADgDAFQgDAEgBAHIgBAMIAABKIgjAAIAAhKIgBgMQAAgGgCgFQgCgFgEgDQgFgDgJAAIgHABIgIAEQgEAEgDAGQgDAGAAAKIAABNIglAAIAAiGIAjAAIAAATIABAAQAHgKAKgHQAKgFAOAAQAMAAALAFQAKAFAFAMQAGgJAKgHQALgGAOAAQAKAAAJADQAJACAHAGQAGAGAEAJQAEAJAAANIAABZg");
	this.shape_6.setTransform(-152.025,-81.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcBCQgNgFgJgJQgIgKgFgNQgFgNgBgQQABgPAFgNQAFgNAIgJQAJgKANgFQANgFAPAAQAPAAANAFQANAFAKAKQAIAJAFANQAGANAAAPQAAAQgGANQgFANgIAKQgKAJgNAFQgNAFgPAAQgPAAgNgFgAgPgmQgGAEgEAGQgEAFgBAIIgCAPQAAAIACAIQABAIAEAGQAEAGAGADQAGAEAJAAQAJAAAHgEQAGgDAEgGQADgGACgIQACgIAAgIIgCgPQgCgIgDgFQgEgGgGgEQgHgEgJAAQgJAAgGAEg");
	this.shape_7.setTransform(-171.85,-81.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAmBdIAAhQIhKAAIAABQIgpAAIAAi5IApAAIAABHIBKAAIAAhHIAoAAIAAC5g");
	this.shape_8.setTransform(-189.575,-84.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBdIAAhtIgWAAIAAgZIAWAAIAAgKQAAgSALgLQAKgMAXAAIAKABIAJAAIAAAcIgNgBQgIAAgDAEQgDADAAAIIAAAIIAZAAIAAAZIgZAAIAABtg");
	this.shape_9.setTransform(-88.075,-114.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBCQgNgFgIgJQgJgKgGgNQgEgNAAgQQAAgPAEgNQAGgNAJgJQAIgKANgFQANgFAPAAQAQAAANAFQAMAFAJAKQAJAJAGANQAEANAAAPQAAAQgEANQgGANgJAKQgJAJgMAFQgNAFgQAAQgPAAgNgFgAgPgmQgGAEgEAGQgDAFgCAIIgBAPQgBAIACAIQACAIADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDADgGQAFgGABgIQABgIAAgIIgBgPQgBgIgFgFQgDgGgHgEQgGgEgJAAQgIAAgHAEg");
	this.shape_10.setTransform(-100.45,-111.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgVBEQgLgCgJgFQgIgGgGgJQgGgJAAgNIAjAAQAAAGACAEQADAEAEADQAEADAFABIAJABIAIgBIAIgDIAGgFQACgDAAgFQAAgIgLgEQgLgFgSgEIgQgEQgIgDgGgDQgGgEgDgGQgEgGAAgJQAAgNAFgIQAFgIAIgFQAJgFAKgCQALgCAKAAQAKAAALACQAKACAIAFQAIAFAFAIQAGAJABAMIgjAAQgBgLgHgDQgIgEgJAAIgGAAIgHACIgFAEQgCACAAAEQAAAFADADIAKAGIAMADIAQADIAPAFQAIACAGAFQAGADAEAGQADAHAAAJQAAANgFAJQgFAJgJAGQgJAFgLACQgLADgLAAQgLAAgLgDg");
	this.shape_11.setTransform(-122.875,-111.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AAFBWQgGgBgGgDQgGgDgDgGQgEgHAAgKIAAhOIgWAAIAAgZIAWAAIAAgoIAkAAIAAAoIAbAAIAAAZIgbAAIAABBQAAAKADADQADADAKAAIAGgBIAFAAIAAAcIgKABIgLABg");
	this.shape_12.setTransform(-134.675,-113.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgcBCQgNgFgJgJQgIgKgFgNQgGgNAAgQQAAgPAGgNQAFgNAIgJQAJgKANgFQANgFAPAAQAQAAAMAFQANAFAKAKQAIAJAFANQAFANABAPQgBAQgFANQgFANgIAKQgKAJgNAFQgMAFgQAAQgPAAgNgFgAgPgmQgGAEgEAGQgEAFgBAIIgCAPQAAAIACAIQABAIAEAGQAEAGAGADQAHAEAIAAQAJAAAHgEQAGgDAEgGQAEgGABgIQACgIAAgIIgCgPQgBgIgEgFQgEgGgGgEQgHgEgJAAQgIAAgHAEg");
	this.shape_13.setTransform(-147.2,-111.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AhBBdIAAi5IApAAIAACWIBaAAIAAAjg");
	this.shape_14.setTransform(-162.325,-114.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFBXQgGgCgGgDQgGgDgDgHQgEgGAAgKIAAhOIgWAAIAAgZIAWAAIAAgoIAkAAIAAAoIAbAAIAAAZIgbAAIAABCQAAAIADAEQADADAKAAIAGgBIAFAAIAAAdIgKABIgLAAg");
	this.shape_15.setTransform(-86.275,-143.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaBFIAAhLQAAgQgFgJQgFgIgNAAQgPAAgGAJQgHAJAAAUIAABGIglAAIAAiGIAjAAIAAATIABAAQAHgMALgFQAKgFAMAAQAPAAAKAEQAJAEAFAHQAFAIADAJQACALAAANIAABRg");
	this.shape_16.setTransform(-98.75,-141.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSBdIAAiGIAkAAIAACGgAgSg+IAAgeIAkAAIAAAeg");
	this.shape_17.setTransform(-110.1,-143.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBFIAAiGIAjAAIAAAaIAAAAIAHgMQAEgGAGgDQAFgEAHgCQAGgCAHAAIAIACIAAAiIgGgBIgHAAQgKAAgHADQgHADgEAGQgEAGgBAHQgCAIAAAIIAAA9g");
	this.shape_18.setTransform(-118.125,-141.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhJBdIAAi5IBSAAQASAAAMAFQANAFAHAJQAIAIAEALQADAKAAAMQAAALgDALQgEAKgIAIQgHAIgNAFQgMAFgSAAIgpAAIAABDgAgggFIAgAAIAMgBQAGgBAGgDQAEgDAEgFQADgGAAgIQAAgJgDgGQgEgFgEgDQgGgDgGgBIgMgBIggAAg");
	this.shape_19.setTransform(-132.25,-143.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcBCQgNgFgIgJQgJgKgGgNQgEgNAAgQQAAgPAEgNQAGgNAJgJQAIgKANgFQANgFAPAAQAQAAANAFQAMAFAJAKQAJAJAGANQAEANAAAPQAAAQgEANQgGANgJAKQgJAJgMAFQgNAFgQAAQgPAAgNgFgAgPgmQgGAEgEAGQgDAFgCAIIgBAPQgBAIACAIQACAIADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDADgGQAFgGABgIQABgIAAgIIgBgPQgBgIgFgFQgDgGgHgEQgGgEgJAAQgIAAgHAEg");
	this.shape_20.setTransform(-157.15,-141.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFBXQgGgCgGgDQgGgDgDgHQgEgGAAgKIAAhOIgWAAIAAgZIAWAAIAAgoIAkAAIAAAoIAbAAIAAAZIgbAAIAABCQAAAIADAEQADADAKAAIAGgBIAFAAIAAAdIgKABIgLAAg");
	this.shape_21.setTransform(-170.075,-143.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaBdIAAhMQAAgRgFgHQgFgIgNAAQgPAAgGAJQgHAIAAAUIAABHIglAAIAAi5IAlAAIAABGIABAAQAHgMALgFQAJgFALAAQAPAAAKAEQAJAEAFAHQAFAHADAKQACALAAALIAABTg");
	this.shape_22.setTransform(-86.05,-173.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWBcQgKgDgJgFQgIgFgGgIQgGgIAAgMIAlAAQACALAIAEQAHAEAJAAQAPAAAIgKQAHgJAAgOIAAgSIgBAAQgGALgLAFQgLAFgLAAQgPAAgLgGQgLgFgHgJQgHgJgEgMQgDgMAAgOQABgNADgMQAEgMAIgJQAGgJAMgGQAKgFAOAAQAMAAAKAFQALAFAGALIABAAIAAgSIAjAAIAAB9QAAAIgCALQgDAKgHAJQgHAJgOAGQgOAGgWAAQgKAAgKgCgAgMg+QgGADgDAFQgEAFgCAHQgBAHgBAIIABAOQACAHAEAGQADAFAGADQAGAEAHAAQAIAAAGgDQAGgDAEgFIAGgLQABgHABgHQgBgIgBgIQgCgHgDgGQgEgGgGgDQgFgDgKAAQgHAAgFADg");
	this.shape_23.setTransform(-102.25,-168.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBBQgJgEgGgHQgFgHgCgLQgDgKAAgNIAAhRIAlAAIAABLQAAAQAFAJQAFAIANAAQAPAAAHgJQAGgJAAgVIAAhFIAlAAIAACFIgjAAIAAgSIgBAAQgHAMgLAEQgKAGgMAAQgPAAgJgEg");
	this.shape_24.setTransform(-117.9,-171.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcBCQgMgFgKgJQgIgKgFgNQgGgNAAgQQAAgPAGgNQAFgNAIgJQAKgKAMgFQANgFAPAAQAPAAANAFQAOAFAIAKQAKAJAEANQAFANABAPQgBAQgFANQgEANgKAKQgIAJgOAFQgNAFgPAAQgPAAgNgFgAgPgmQgGAEgEAGQgEAFgBAIIgCAPQABAIABAIQABAIAEAGQAEAGAGADQAHAEAIAAQAJAAAHgEQAGgDAEgGQAEgGABgIQABgIAAgIIgBgPQgBgIgEgFQgEgGgGgEQgHgEgJAAQgIAAgHAEg");
	this.shape_25.setTransform(-133.8,-171.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaBFIAAhLQAAgQgFgJQgFgIgNAAQgPAAgGAJQgHAJAAAVIAABFIglAAIAAiFIAjAAIAAATIABAAQAHgMALgGQALgFALAAQAPAAAKAEQAJAEAGAHQAFAHACAKQACALAAANIAABRg");
	this.shape_26.setTransform(-149.75,-171.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhFBdIAAi5ICJAAIAAAiIhhAAIAAAoIBZAAIAAAfIhZAAIAAAtIBjAAIAAAjg");
	this.shape_27.setTransform(-165.7,-173.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-201.3,-191.8,267.20000000000005,219.10000000000002), null);


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
	this.shape.graphics.f("#000000").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(50.225,152.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVBWIAAirIArAAIAACrg");
	this.shape_1.setTransform(44.325,146.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBWIAAirIArAAIAACrg");
	this.shape_2.setTransform(38.425,146.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVBWIAAiCIArAAIAACCgAgVg1IAAggIArAAIAAAgg");
	this.shape_3.setTransform(32.525,146.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALBWIAAhWQAAgIgDgDQgCgDgGgBQgFABgCADQgDADABAIIAABWIgsAAIAAirIAsAAIAAA4IAAAAQAFgLAIgDQAJgEAHAAQAHAAAGACQAHABAEAEQAFAFADAHQACAGAAALIAABhg");
	this.shape_4.setTransform(23.45,146.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUBCQgKgCgHgHQgIgHgEgNQgEgNAAgVQAAgWAFgOQAEgOAIgIQAIgHALgDQAKgCALAAQAPAAAJAEQAKAEAGAHQAFAHADAKQACAKAAAMIgnAAIgBgMIgCgJQgDgFgHAAQgCAAgDACQgCACgCAEIgCANIAAATIAAAUIACAMQACAEACACQADACACAAQAGAAAEgEQADgFAAgMIAAgJIAnAAQAAAQgDAKQgCALgHAHQgMANgcAAQgLAAgLgCg");
	this.shape_5.setTransform(11.775,148.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBWQgKgDgHgGQgHgGgFgJQgEgJAAgMQAAgQAIgNQAIgMARgIQgHgJgFgKQgFgKAAgKQAAgJADgIQAEgHAGgFQAHgGAJgCQAJgDALAAQAKAAAJADQAKACAFAGQAHAFADAHQAEAIAAAJQAAAMgHALQgJAMgOAJIATAZQAEgEABgGIABgKIAmAAQAAAOgFAOQgFANgKAKIAXAhIgwAAIgHgKIgKAFIgJAEIgKACIgMABQgKAAgKgCgAgdAbQgDAFAAAEQAAAEACAEIAEAGIAGAEQADABAEAAIAIgBIAFgEIgVgfQgFAEgDAEgAgSg7QgEADABAGQgBAEADAEIAIANQAJgHACgFQADgFAAgEQAAgGgDgDQgEgDgFAAQgGAAgDADg");
	this.shape_6.setTransform(-6.95,146.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVBWIAAirIArAAIAACrg");
	this.shape_7.setTransform(-23.175,146.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVBWIAAirIArAAIAACrg");
	this.shape_8.setTransform(-29.075,146.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVBWIAAiCIArAAIAACCgAgVg1IAAggIArAAIAAAgg");
	this.shape_9.setTransform(-35.025,146.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWBYIAAhlIgPAAIAAgdIAPAAIAAgJQAAgKACgHQACgGAFgFQAFgEAHgCQAHgCALAAIAKABIALABIAAAbIgEgBIgDAAQgEAAgDACQgDACAAAFIAAAIIARAAIAAAdIgRAAIAABlg");
	this.shape_10.setTransform(-41.6,146.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOBVIgQgBQgHgBgFgDQgEgEgCgGQgCgHAAgLIAAhEIgOAAIAAgdIAOAAIAAgnIAqAAIAAAnIARAAIAAAdIgRAAIAAA9QAAAGADACQADACAFAAIAGAAIAAAdIgLABg");
	this.shape_11.setTransform(-54.85,146.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnA6QgMgLAAgWIAmAAIABAHIADAGQADAFAGAAQAEAAAEgDQADgDAAgGQAAgFgEgDQgFgEgGgCIgPgFQgIgDgHgEQgHgFgFgHQgFgHAAgMQAAgJADgHQAEgIAGgFQAGgGAKgDQAKgDAMAAQAxAAAAApIgmAAQAAgJgCgDQgEgDgFAAQgEAAgDADQgDADAAAFQAAAFAFADQAEADAGACIAPAEQAIADAHAEQAHAFAFAGQAFAIAAAMQAAAKgEAIQgDAIgHAGQgHAGgJADQgKACgMAAQgbAAgMgKg");
	this.shape_12.setTransform(-63.925,148.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggBCQgGgCgFgEQgFgEgCgHQgDgGAAgLIAAhiIArAAIAABWQABAIACAEQACADAFAAQAGAAACgDQADgEAAgIIAAhWIArAAIAACCIgpAAIAAgQIgBAAQgJATgWAAIgNgBg");
	this.shape_13.setTransform(-75.45,148.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBJQgLgOAAgbIAAgDIAoAAIAAAIQAAANAEAEQADAEAFAAQAEAAADgEQADgEABgNIAAh7IAtAAIAAB1QAAAfgPANQgOAMgbAAQgcAAgNgOg");
	this.shape_14.setTransform(-87.55,146.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-94.7,130.2,149.7,32.30000000000001), null);


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
	this.shape.graphics.f("#000000").s().p("AgWAWIAAgrIAtAAIAAArg");
	this.shape.setTransform(-68.575,29.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYBoIgohEIgQAQIAAA0IgpAAIAAjOIApAAIAABuIAzg1IAxAAIg5A2IA/Bfg");
	this.shape_1.setTransform(-80,21.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdBNIAAhTQAAgTgFgJQgHgJgOAAQgQAAgHAKQgIAJAAAXIAABOIgqAAIAAiVIAoAAIAAAVIABAAQAIgNAMgGQALgGAOAAQAQAAALAEQAKAFAHAIQAFAIADALQACAMABAOIAABbg");
	this.shape_2.setTransform(-98.05,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBoIAAjOIAtAAIAADOg");
	this.shape_3.setTransform(-111.075,21.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBoIAAh6IgYAAIAAgbIAYAAIAAgMQAAgUANgNQALgMAaAAIALAAIAKABIAAAeIgPgBQgIABgEADQgDAFAAAJIAAAJIAcAAIAAAbIgcAAIAAB6g");
	this.shape_4.setTransform(-128.525,21.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfBKQgOgGgKgLQgKgKgGgPQgFgOgBgSQABgRAFgPQAGgOAKgLQAKgJAOgGQAPgGAQAAQASAAAOAGQAOAGAKAJQALALAFAOQAGAPgBARQABASgGAOQgFAPgLAKQgKALgOAGQgOAFgSAAQgQAAgPgFgAgQgrQgIAFgDAGQgFAHgCAJQgBAIAAAIIABASQACAIAFAHQADAHAIAEQAHAEAJAAQAKAAAIgEQAGgEAEgHQAFgHACgIQACgJAAgJQAAgIgCgIQgCgJgFgHQgEgGgGgFQgIgEgKAAQgJAAgHAEg");
	this.shape_5.setTransform(-142.35,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAGBhQgHgBgHgEQgGgEgEgHQgEgHAAgLIAAhYIgZAAIAAgbIAZAAIAAgtIAoAAIAAAtIAeAAIAAAbIgeAAIAABKQAAAKAEADQADAEAKAAIAHAAIAGgBIAAAgIgLABIgNAAg");
	this.shape_6.setTransform(-58.525,-12.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdBNIAAhUQAAgSgFgKQgHgJgOAAQgQAAgHAKQgIAKAAAYIAABNIgqAAIAAiVIAoAAIAAAVIABAAQAHgNANgGQAMgGAMAAQARAAAKAEQALAFAHAIQAFAIADAMQADALgBAOIAABbg");
	this.shape_7.setTransform(-72.2,-10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBJQgKgFgHgIQgGgIgCgMQgCgLgBgOIAAhbIAqAAIAABTQAAAUAFAIQAHAJAPAAQAPAAAHgKQAIgJAAgXIAAhOIAqAAIAACVIgoAAIAAgVIgBAAQgHANgNAGQgMAGgNAAQgQAAgLgEg");
	this.shape_8.setTransform(-89.5,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBJQgOgFgLgKQgKgLgFgOQgFgPAAgSQAAgRAFgOQAFgPAKgKQALgKAOgHQAPgFAQAAQARAAAPAFQAPAHAKAKQAKAKAFAPQAFAOAAARQAAASgFAPQgFAOgKALQgKAKgPAFQgPAGgRAAQgQAAgPgGgAgQgrQgHAFgFAGQgEAHgBAIQgCAJAAAIIACASQABAIAEAHQAFAHAHAEQAGAEAKAAQALAAAGgEQAHgEAFgHQAEgHABgIQACgJABgJQgBgIgCgJQgBgIgEgHQgFgGgHgFQgGgEgLAAQgKAAgGAEg");
	this.shape_9.setTransform(-107.1,-10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABJBNIAAhUIgBgOQAAgHgCgFQgDgEgFgEQgGgDgIAAQgIABgGADQgFADgDAFQgDAGgCAHIgBANIAABTIgoAAIAAhTIAAgNQgBgHgCgGQgCgFgEgDQgGgDgJgBIgJACQgEABgFAEQgEAEgEAGQgCAHAAALIAABWIgqAAIAAiVIAnAAIAAAUIABAAQAIgLAMgHQALgGAPAAQAOAAAMAFQAKAGAHAOQAGgKAMgIQALgHAQAAQALAAAKADQALADAHAHQAHAFAEALQAFAKAAAOIAABkg");
	this.shape_10.setTransform(-129.2,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA2BnIgQguIhMAAIgQAuIguAAIBOjOIAuAAIBNDOgAgbAXIA1AAIgahKIAAAAg");
	this.shape_11.setTransform(-152.5,-12.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgYBMQgMgCgKgHQgKgGgFgJQgHgKgBgPIAnAAQABAGADAFQACAFAFADQADADAHABIAKACIAJgCIAJgDQAEgCADgEQACgDAAgGQAAgJgMgEQgNgFgUgFIgSgFQgIgDgIgDQgGgFgEgGQgEgHAAgKQAAgPAFgIQAGgKAKgGQAJgEALgDQAMgCAMAAQALAAAMACQALACAJAGQAJAGAGAJQAGAJABAOIgnAAQgBgMgIgEQgIgEgKgBIgHABIgIACIgGAEQgCADAAAFQAAAFAEAEQAEADAHACIANAEIASAEIARAFQAJACAHAGQAGADAEAIQAEAHABAKQgBAOgFALQgHAJgJAHQgKAGgMACQgNADgMAAQgMAAgNgDg");
	this.shape_12.setTransform(-42,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgpBIQgMgEgFgIQgGgIgDgLQgCgMAAgOIAAhbIApAAIAABUQAAASAGAJQAFAKAPgBQAQABAIgKQAHgLAAgXIAAhNIApAAIAACVIgnAAIAAgVIAAAAQgJANgMAGQgLAGgNAAQgRAAgKgFg");
	this.shape_13.setTransform(-58.6,-44.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgfBJQgOgFgLgLQgJgKgGgPQgFgOgBgSQABgRAFgPQAGgOAJgLQALgJAOgGQAPgGAQAAQASAAAOAGQAOAGAKAJQALALAFAOQAGAPgBARQABASgGAOQgFAPgLAKQgKALgOAFQgOAGgSAAQgQAAgPgGgAgQgrQgIAFgDAGQgFAHgBAJQgCAIAAAIIACASQABAJAFAGQADAHAIAEQAGAEAKAAQAKAAAIgEQAHgEAEgHQAEgGACgJQACgJAAgJQAAgIgCgIQgCgJgEgHQgEgGgHgFQgIgEgKAAQgKAAgGAEg");
	this.shape_14.setTransform(-76.3,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#123293").s().p("AgUBoIAAjOIApAAIAADOg");
	this.shape_15.setTransform(-89.1,-47.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#123293").s().p("AgqBIQgKgEgHgIQgGgIgCgLQgCgMgBgOIAAhbIAqAAIAABUQAAASAFAJQAHAKAPgBQAPABAHgKQAIgLAAgXIAAhNIAqAAIAACVIgoAAIAAgVIgBAAQgHANgNAGQgMAGgNAAQgQAAgLgFg");
	this.shape_16.setTransform(-101.65,-44.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#123293").s().p("AgcBJQgOgFgKgLQgKgKgGgOQgFgOAAgRQAAgQAFgPQAFgPAKgLQAKgKAOgHQAOgGARAAQAOAAANADQAMAEAJAHQAKAHAGALQAGALABAOIgpAAQgEgagaAAQgIAAgHAEQgHAFgEAHQgEAHgCAJIgCAQIACAQQACAJAEAGQADAHAHAFQAHAEAJAAQAOAAAIgJQAIgHACgOIAoAAQgEAdgUAQQgSAQgeAAQgQAAgOgGg");
	this.shape_17.setTransform(-118.6,-44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#123293").s().p("AgUBoIAAiWIApAAIAACWgAgUhFIAAghIApAAIAAAhg");
	this.shape_18.setTransform(-131.05,-47.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#123293").s().p("AgmBjQgMgHgJgLQgIgLgEgOQgEgPAAgQQAAgPAEgNQAEgOAIgLQAJgLAMgGQAMgHARABQAMgBAMAGQAMAGAHALIABAAIAAhLIApAAIAADOIgnAAIAAgTIgBAAQgHALgMAGQgLAFgOAAQgRAAgNgGgAgPgRQgHAFgEAHQgFAFgBAIQgCAJAAAJQAAAJACAIQACAJAEAHQAFAHAHAEQAGAFAJAAQAKAAAHgFQAHgDAEgIQAEgGACgJQABgJAAgJQAAgJgBgJQgCgIgEgGQgFgGgGgFQgHgEgKAAQgJAAgHAEg");
	this.shape_19.setTransform(-144.175,-47.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#123293").s().p("AgUBoIAAiWIApAAIAACWgAgUhFIAAghIApAAIAAAhg");
	this.shape_20.setTransform(-156.7,-47.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#123293").s().p("AAsBoQgEgKgBgOIgDgaQgCgRgIgHQgHgIgRABIgtAAIAABRIgtAAIAAjOIBuAAQAOgBAMAFQALAEAIAJQAIAHAEALQAEAJAAAMQAAATgIANQgHANgSAHIAAAAQAJADAFAEQAGAFADAHQAEAGABAIIACAPIABAMIABANIACAOQACAGADAFgAgrgJIAxAAQAQAAAIgHQAHgHAAgPQAAgPgHgIQgIgGgQAAIgxAAg");
	this.shape_21.setTransform(-170.675,-47.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpBMQgJgDgIgFQgHgFgEgJQgDgJAAgLQAAgMAEgJQAFgIAHgFQAHgEAJgCIASgFIATgCIAPgCQAGgCAEgEQAFgDAAgGQAAgHgCgDQgDgEgDgDQgEgCgFAAIgKgBQgMgBgGAGQgIAFAAAMIgqAAQABgOAGgKQAHgKAKgFQAKgGAMgDQANgCALAAIAXACQAMABAJAFQAJAEAHAJQAFAIAAANIAABNIACAUQABAJADAFIgqAAIgCgHIgBgIQgJAKgOAFQgMAEgOAAQgLAAgJgDgAAUAFIgJACIgJACIgJACIgJACIgIADQgDADgCADQgCAFAAAFQAAAGACADQACAEADADIAIACIAKABQALAAAHgDQAHgFADgFQADgGABgGIABgJIAAgPg");
	this.shape_22.setTransform(-73.95,-80.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAdBnIAAhUQAAgSgFgJQgHgJgOAAQgQAAgHAKQgIAJAAAXIAABOIgqAAIAAjOIAqAAIAABOIABAAQAHgNAMgFQAMgHAMAAQAQABALAEQAKAFAHAHQAFAJADALQACAMAAAMIAABcg");
	this.shape_23.setTransform(-99.3,-82.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAGBhQgHgBgHgEQgGgEgEgHQgEgHAAgLIAAhYIgZAAIAAgbIAZAAIAAgtIAoAAIAAAtIAeAAIAAAbIgeAAIAABKQAAAKAEADQADAEAKAAIAHAAIAGgBIAAAgIgLABIgNAAg");
	this.shape_24.setTransform(-113.375,-82.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUBnIAAiUIApAAIAACUgAgUhFIAAgiIApAAIAAAig");
	this.shape_25.setTransform(-122.3,-82.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaBLIgahjIAAAAIgZBjIgrAAIgwiVIAsAAIAcBlIAAAAIAahlIAmAAIAaBkIAAAAIAchkIAqAAIgvCVg");
	this.shape_26.setTransform(-138.1,-80.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYBMQgMgCgKgGQgJgGgHgKQgGgLgBgPIAoAAQAAAHADAFQACAEAFADQADADAHACIAKACIAJgBIAJgEQAEgCADgDQACgEAAgFQAAgKgMgFQgMgEgVgFIgSgEQgIgDgIgEQgGgFgEgGQgEgHAAgKQAAgOAFgKQAGgJAKgGQAJgFALgCQAMgCAMAAQALAAAMADQAMABAIAGQAJAFAGAKQAGAJABAOIgnAAQgBgMgIgEQgIgFgKAAIgHABIgIACIgGAEQgCADAAAFQAAAFAEAEQAEADAHACIANAEIASAEIARAFQAJADAGAFQAHADAEAHQAFAIAAAKQgBAPgGAKQgGAKgJAGQgKAGgMADQgNACgMAAQgMAAgNgDg");
	this.shape_27.setTransform(-66.2,-114.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdBJQgOgGgKgKQgKgLgGgOQgFgPAAgRQAAgQAGgOQAFgOAKgLQALgKAOgHQAOgGAQAAQATAAAOAHQAOAIAJAMQAKAMAEAQQAEARgCAQIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgJAbgSAMQgSAMgZAAQgRAAgOgGgAgPgsQgGAEgEAEQgEAFgCAGIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHADg");
	this.shape_28.setTransform(-82.5295,-114.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABKBNIAAhUIgBgOQgBgHgDgFQgCgFgFgDQgGgCgIAAQgJAAgFADQgFADgDAFQgEAGgBAHIgBANIAABTIgoAAIAAhTIAAgNQgBgHgCgGQgBgFgGgDQgFgDgJAAIgIABQgFABgEAEQgFAEgDAGQgDAHAAALIAABWIgqAAIAAiVIAnAAIAAAUIAAAAQAJgLAMgHQAKgGAPAAQAPAAALAGQAMAFAFAOQAHgKALgIQAMgHAPAAQAMAAALADQAKACAHAIQAHAFAEALQAEAKAAAOIAABkg");
	this.shape_29.setTransform(-104.2,-114.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfBJQgOgFgLgLQgKgKgFgOQgFgPAAgSQAAgQAFgQQAFgOAKgKQALgLAOgFQAPgGAQAAQARAAAPAGQAPAFAKALQAKAKAFAOQAFAQAAAQQAAASgFAPQgFAOgKAKQgKALgPAFQgPAGgRAAQgQAAgPgGgAgQgrQgHAEgFAHQgEAHgBAIQgCAJAAAIIACASQABAIAEAHQAFAHAHAEQAGAEAKAAQALAAAGgEQAHgEAFgHQAEgHABgIQACgJABgJQgBgIgCgJQgBgIgEgHQgFgHgHgEQgGgEgLAAQgKAAgGAEg");
	this.shape_30.setTransform(-126.45,-114.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AglBkQgSgIgNgPQgOgOgGgUQgIgTABgXQgBgWAIgUQAGgUAOgPQANgOASgJQAUgIAWAAQARAAAQAFQAPAFAMAJQAMAKAIANQAIAOABASIgsAAQgBgIgDgGQgFgHgGgFQgGgEgHgDQgJgDgIAAQgOAAgLAGQgKAGgIAKQgGAKgDANQgDAMAAANQAAANADAMQADANAGAKQAIAKAKAFQALAGAOAAQAVAAAMgMQAMgNACgVIAsAAQgBATgIAQQgHAQgMALQgMALgQAGQgPAFgUAAQgWAAgUgIg");
	this.shape_31.setTransform(-146.25,-117.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-187.8,-137.5,294,177.8), null);


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
	this.shape.graphics.f("#123293").s().p("AAXBkIgmhBIgQAPIAAAyIgoAAIAAjHIAoAAIAABrIAxg0IAvAAIg2A1IA9Bbg");
	this.shape.setTransform(-22.775,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AAcBKIAAhRQAAgRgFgJQgGgJgPAAQgOAAgIAKQgHAJAAAWIAABLIgoAAIAAiQIAmAAIAAAVIABAAQAHgNAMgGQALgFANAAQAQAAAKAEQAKAEAHAIQAFAIACALQADALAAANIAABYg");
	this.shape_1.setTransform(-40.35,3.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#123293").s().p("AgnBKQgKgDgGgFQgHgFgEgJQgEgIAAgLQAAgNAFgHQAEgJAHgEQAHgDAJgDIASgEIARgCIAOgCQAIgCADgEQAEgDAAgGQAAgHgCgDQgCgEgEgCIgIgDIgKgBQgKAAgIAGQgGAFgCAMIgnAAQABgPAGgJQAGgJAJgGQAKgGAMgCQAMgCALAAIAWABQALACAJAEQAKAFAGAIQAFAIAAANIAABKIACATQABAJACAFIgnAAIgDgHIgBgIQgJALgNADQgMAEgNAAQgLAAgIgCgAATAFIgIACIgJACIgJABIgIADIgHADQgEACgCAEQgCAEAAAFQAAAFACAEQACAEAEACIAHADIAJABQAMAAAGgEQAGgEAEgFQACgGABgGIABgJIAAgOg");
	this.shape_2.setTransform(-57,3.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#123293").s().p("AgVBkIAAiiIg8AAIAAglICjAAIAAAlIg8AAIAACig");
	this.shape_3.setTransform(-73.75,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123293").s().p("AgeBHQgOgFgKgKQgJgLgFgOQgGgOAAgQQAAgRAGgPQAFgOAJgKQAKgJAOgGQAOgFAQAAQARAAAOAFQAOAGAJAJQALAKAEAOQAGAPAAARQAAAQgGAOQgEAOgLALQgJAKgOAFQgOAFgRAAQgQAAgOgFgAgQgpQgGAEgFAGQgEAHgBAIQgCAJAAAIQAAAIACAJQABAHAEAHQAFAGAGAEQAHAFAJAAQAKAAAHgFQAGgEAEgGQAFgHABgHIACgRQAAgIgCgJQgBgIgFgHQgEgGgGgEQgHgEgKAAQgJAAgHAEg");
	this.shape_4.setTransform(-91.1,3.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgbBGQgNgEgKgKQgKgKgFgOQgGgNAAgRQABgPAFgPQAEgOAKgLQAKgKANgGQAOgGARAAQAMAAAMADQAMADAKAIQAJAGAGALQAGAKAAANIgmAAQgEgYgaAAQgIAAgGAEQgHAFgEAGQgEAHgCAJQgCAHABAIIABAPQACAJAEAGQAEAHAGAEQAGAFAIAAQAPgBAIgHQAHgJACgNIAmAAQgDAdgTAPQgSAPgeAAQgOAAgOgGg");
	this.shape_5.setTransform(-107.75,3.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AhLBkIAAjHICVAAIAAAlIhpAAIAAArIBgAAIAAAhIhgAAIAAAxIBrAAIAAAlg");
	this.shape_6.setTransform(-124.775,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AgWA4QgLgFgJgHQgJgIgEgLQgFgLgBgOQABgNAFgLQAEgLAJgHQAJgIALgEQALgFALAAQAMAAAMAFQALAEAIAIQAJAHAEALQAGALgBANQABAOgGALQgEALgJAIQgIAHgLAFQgMAEgMAAQgLAAgLgEgAgRgqQgIADgGAGQgGAHgDAIQgEAJAAAJQAAAKAEAJQADAIAGAHQAGAGAIAEQAJADAIAAQAKAAAHgDQAJgEAGgGQAGgHAEgIQADgJAAgKQAAgJgDgJQgEgIgGgHQgGgGgJgDQgHgEgKAAQgIAAgJAEgAAOAhIgPgcIgJAAIAAAcIgNAAIAAhCIAYAAQANAAAHAFQAGAEAAALIgBAIIgDAFIgGADIgHABIASAdgAgKgFIALAAQAGAAADgBQAFgCAAgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgDIgEgBIgGAAIgKAAg");
	this.shape_7.setTransform(-7.95,-6.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcBkIAAhSQAAgSgGgIQgFgIgOgBQgQABgHAJQgHAJAAAWIAABMIgoAAIAAjHIAoAAIAABLIABAAQAIgNALgFQALgGALABQAQAAAKADQAKAFAHAIQAFAHADAMQACAKAAANIAABZg");
	this.shape_8.setTransform(-43.2,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGBdQgIgBgFgEQgHgDgDgHQgFgHAAgLIAAhUIgYAAIAAgbIAYAAIAAgrIAoAAIAAArIAdAAIAAAbIgdAAIAABHQAAAKADADQADAEAKAAIAGgBIAHgBIAAAfIgLABIgNABg");
	this.shape_9.setTransform(-57.05,-29.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_10.setTransform(-65.925,-30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBkIgiiHIAAAAIghCHIgtAAIg0jHIAsAAIAfCHIABAAIAiiHIApAAIAiCJIAAAAIAhiJIArAAIg2DHg");
	this.shape_11.setTransform(-83.225,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-136.4,-49.3,135.9,67.9), null);


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
	this.shape.graphics.f("#000000").s().p("AgWAXIAAgtIAuAAIAAAtg");
	this.shape.setTransform(-11.9,74.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBqQgLgDgKgGQgKgGgGgJQgHgKgBgNIAqAAQAEAMAIAFQAJAEAKAAQASAAAJgLQAIgKAAgRIAAgUIgBAAQgHAMgNAGQgMAGgOAAQgRAAgMgGQgNgHgIgKQgIgLgEgNQgEgOAAgQQAAgPAFgOQAEgOAIgLQAJgKAMgHQANgGAQAAQAOAAAMAGQALAFAIAOIABAAIAAgVIAoAAIAACQQAAAKgDAMQgCAMgIAKQgJAKgQAIQgQAHgZAAQgMAAgMgDgAgOhIQgHADgEAGQgEAHgCAHQgCAIAAAJIABARQACAIAEAHQAEAFAHAEQAGAFAJAAQAJAAAHgEQAHgEAFgGQAEgFACgHQADgIAAgIQAAgKgCgIQgCgJgEgHQgEgGgHgEQgHgEgLAAQgIAAgGAEg");
	this.shape_1.setTransform(-25.275,71.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBQIAAhXQAAgUgGgJQgGgJgPAAQgQAAgIAKQgIALAAAXIAABRIgrAAIAAiaIAoAAIAAAVIACAAQAIgOANgFQALgHAOAAQARABALAEQALAFAHAHQAFAJADAMQADAMgBAOIAABfg");
	this.shape_2.setTransform(-42.7,68.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBrIAAiaIApAAIAACagAgUhHIAAgjIApAAIAAAjg");
	this.shape_3.setTransform(-55.175,66.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGBkQgIgBgHgEQgGgEgEgHQgEgIAAgLIAAhbIgaAAIAAgcIAaAAIAAguIApAAIAAAuIAgAAIAAAcIggAAIAABMQAAALAEADQAEAEAKAAIAHAAIAHgBIAAAhIgMABIgNABg");
	this.shape_4.setTransform(-64.175,66.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeBQIAAhXQAAgUgGgJQgGgJgPAAQgRAAgHAKQgJALAAAXIAABRIgqAAIAAiaIApAAIAAAVIABAAQAIgOAMgFQANgHANAAQARABALAEQALAFAGAHQAGAJADAMQACAMAAAOIAABfg");
	this.shape_5.setTransform(-77.95,68.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUBrIAAiaIApAAIAACagAgUhHIAAgjIApAAIAAAjg");
	this.shape_6.setTransform(-90.425,66.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBQIAAiaIAoAAIAAAcIABAAQADgHAFgGQAEgGAHgFQAGgEAIgDQAHgCAJAAIAJABIAAApIgHgBIgIgBQgMAAgIADQgIAFgFAGQgEAHgCAJQgDAJAAAJIAABHg");
	this.shape_7.setTransform(-99.075,68.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhUBrIAAjVIBgAAQATAAAOAFQAOAHAJAJQAKAJADANQAFAMAAANQAAAOgFAMQgDAMgKAJQgJAKgOAFQgOAGgTAAIgxAAIAABNgAglgFIAkAAIAPgBQAHgBAGgEQAGgEADgGQAEgHAAgKQAAgKgEgGQgDgGgGgEQgGgDgHgBIgPgBIgkAAg");
	this.shape_8.setTransform(-114.85,66.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeBLQgPgFgKgLQgKgLgGgPQgFgPAAgSQAAgRAGgPQAFgOALgMQAKgKAPgHQAOgFARAAQAUgBAPAIQAOAIAKANQAJAMAFARQAEAQgCASIhuAAQAAAUAKAJQAKAKARgBQAMAAAKgGQAJgGACgIIAmAAQgJAdgTALQgSAMgbABQgRAAgPgHgAgPgtQgHADgEAGQgEAFgBAFIgCALIBEAAQgDgRgIgJQgIgHgPgBQgJAAgHAEg");
	this.shape_9.setTransform(-43.6545,39.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBLQgPgFgKgLQgKgLgGgPQgFgPAAgSQAAgRAGgPQAFgOALgMQAKgKAPgHQAOgFARAAQAUgBAPAIQAOAIAKANQAJAMAFARQAEAQgCASIhuAAQAAAUAKAJQAKAKARgBQAMAAAKgGQAJgGACgIIAmAAQgJAdgTALQgSAMgbABQgRAAgPgHgAgPgtQgHADgEAGQgEAFgBAFIgCALIBEAAQgDgRgIgJQgIgHgPgBQgJAAgHAEg");
	this.shape_10.setTransform(-60.6045,39.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxBPIAAiaIAoAAIAAAdIABAAQADgHAFgGQAEgGAHgEQAGgFAIgCQAHgCAJAAIAJABIAAAnIgHgBIgIAAQgMAAgIADQgIAFgFAHQgEAGgCAJQgDAJAAAKIAABFg");
	this.shape_11.setTransform(-73.975,39.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhKBrIAAjVICVAAIAAAnIhmAAIAAAyIBZAAIAAAkIhZAAIAABYg");
	this.shape_12.setTransform(-88.525,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgsASIAAgjIBZAAIAAAjg");
	this.shape_13.setTransform(-0.35,9.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBMQgPgHgKgKQgKgLgGgPQgFgPAAgSQAAgRAGgOQAFgQALgKQAKgLAPgGQAOgHARAAQAUABAPAHQAOAHAKANQAJAOAFAQQAEAQgCARIhuAAQAAAVAKAKQAKAIARABQAMAAAKgHQAJgGACgIIAmAAQgJAdgTAMQgSAMgbgBQgRAAgPgFgAgPguQgHAEgEAFQgEAFgBAGIgCAKIBEAAQgDgQgIgIQgIgIgPAAQgJAAgHACg");
	this.shape_14.setTransform(-14.8045,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaBqQgLgDgKgGQgKgGgGgJQgHgKgBgNIAqAAQAEAMAIAFQAJAEAKAAQASAAAJgLQAIgKAAgRIAAgUIgBAAQgHAMgNAGQgMAGgOAAQgRAAgMgGQgNgHgIgKQgIgLgEgNQgEgOAAgQQAAgPAFgOQAEgOAIgLQAJgKAMgHQANgGAQAAQAOAAAMAGQALAFAIAOIABAAIAAgVIAoAAIAACQQAAAKgDAMQgCAMgIAKQgJAKgQAIQgQAHgZAAQgMAAgMgDgAgOhIQgHADgEAGQgEAHgCAHQgCAIAAAJIABARQACAIAEAHQAEAFAHAEQAGAFAJAAQAJAAAHgEQAHgEAFgGQAEgFACgHQADgIAAgIQAAgKgCgIQgCgJgEgHQgEgGgHgEQgHgEgLAAQgIAAgGAEg");
	this.shape_15.setTransform(-32.625,12.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnBmQgNgGgIgMQgJgLgFgQQgEgPAAgQQAAgPAEgOQAFgOAJgMQAIgLANgHQANgGARAAQAMAAANAFQAMAHAIALIABAAIAAhOIAqAAIAADVIgpAAIAAgUIAAAAQgHANgNAFQgMAGgOAAQgSAAgNgHgAgPgRQgIAEgEAHQgEAGgCAJQgCAJAAAKQAAAIACAJQACAKAFAGQAEAIAHAEQAIAEAIAAQAKAAAIgEQAHgEAEgIQAEgHACgIQACgJAAgKQAAgKgCgIQgCgJgEgGQgFgHgGgEQgIgEgKAAQgJAAgHAEg");
	this.shape_16.setTransform(-50.65,6.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUBrIAAiaIApAAIAACagAgUhHIAAgjIApAAIAAAjg");
	this.shape_17.setTransform(-63.075,6.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgxBQIAAiaIAoAAIAAAcIABAAQADgHAFgGQAEgHAHgEQAGgEAIgDQAHgCAJAAIAJABIAAApIgHgBIgIgBQgMAAgIAEQgIAEgFAGQgEAHgCAJQgDAJAAAJIAABHg");
	this.shape_18.setTransform(-71.725,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAGBkQgIgBgHgEQgGgEgEgIQgEgGAAgMIAAhbIgaAAIAAgcIAaAAIAAguIApAAIAAAuIAgAAIAAAcIggAAIAABMQAAALAEADQAEAEAKAAIAHAAIAHgBIAAAhIgMABIgNAAg");
	this.shape_19.setTransform(-83.475,7.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxBQIAAiaIAoAAIAAAcIABAAQADgHAFgGQAEgHAHgEQAGgEAIgDQAHgCAJAAIAJABIAAApIgHgBIgIgBQgMAAgIAEQgIAEgFAGQgEAHgCAJQgDAJAAAJIAABHg");
	this.shape_20.setTransform(-93.425,9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgrBPQgJgDgHgGQgIgFgEgJQgEgJAAgMQAAgNAFgIQAFgJAHgFQAHgFAKgCIATgEIATgCIAPgDQAHgBAFgEQAEgEAAgGQAAgHgDgEQgCgEgEgCQgDgDgFgBIgLgBQgMABgHAFQgHAGgBAMIgrAAQABgPAHgKQAGgJAKgHQALgFAMgDQANgCAMgBIAYACQAMACAKAEQAKAFAGAIQAGAJAAAOIAABQIABAUQACAJADAGIgsAAIgCgIIgBgIQgKALgOAEQgMAFgPgBQgLAAgKgCgAAVAGIgJABIgKACIgJABIgJADIgIAEQgEACgCAFQgCADAAAHQAAAFACAEQACAEAEACIAIADIAKABQAMAAAHgEQAGgEAEgGQADgGABgGIABgKIAAgQg");
	this.shape_21.setTransform(-108.475,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmBnQgUgIgNgPQgNgPgIgUQgHgVAAgXQAAgXAHgUQAIgVANgPQANgQAUgIQAUgJAXAAQASAAAQAFQAQAFAMAKQANAKAIAOQAIAOACATIguAAQgBgIgEgHQgEgHgHgFQgGgFgIgDQgIgCgJAAQgOAAgMAGQgLAGgHAKQgHAKgDAOQgDANAAANQAAAOADAMQADANAHAKQAHALALAGQAMAGAOAAQAWAAAMgOQAMgNADgVIAuAAQgCAUgIAQQgHAQgMAMQgNALgQAGQgRAGgUAAQgXAAgUgJg");
	this.shape_22.setTransform(-127.825,6.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-141,-13.9,148.6,99.30000000000001), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#123293").s().p("ACbCrIAAhfIhfAAIAAg0IBfAAIAAheIA0AAIAABeIBfAAIAAA0IhfAAIAABfgAgsCrIgahMIiAAAIgbBMIhMAAICClVIBNAAIB/FVgAizAnIBZAAIgrh9IgBAAg");
	this.shape.setTransform(-68.975,27.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap6NIQgggOgVgYQgWgYgLghQgMggAAgmQAAgmAMggQALgiAWgYQAVgYAggOQAggPAnAAQAaABAZAHQAYAJAVAPQATAPANAXQANAWADAeIhIAAQgHgdgTgPQgTgOgbAAQgZAAgTAKQgRAKgMAQQgKARgGAVQgEAVAAAWQAAAWAEAUQAGAVAKAQQAMAQARAKQATAKAZAAQAlAAAUgTQAVgSADglIhLAAIAAg4ICQAAIAAC5IgxAAIgHgnQgVAbgXAKQgaAKgYAAQgnAAgggNgAGyNLQgYgKgRgSQgQgQgJgZQgJgXABgdQAAgcAJgYQAIgYASgSQAQgRAXgKQAYgLAcABQAgAAAYAMQAXAMAPAUQAPAWAHAaQAHAagDAdIizAAQACAhAPAPQAPAPAdAAQAVAAAPgLQAPgKADgLIA9AAQgPAsgeAUQgeATgqAAQgdAAgXgJgAHJKHQgLAGgGAJQgHAHgCAKIgEAQIBwAAQgGgagLgOQgNgNgYAAQgRAAgLAFgAk4NQQgPgFgMgJQgLgJgHgOQgGgOAAgTQAAgVAHgOQAHgOAMgHQAMgJAPgEIBYgOQALgDAHgGQAGgFAAgLQAAgMgEgFQgEgHgFgDQgGgFgIgBIgRgBQgUAAgMAJQgLAJgCATIhFAAQACgYAKgPQALgQAQgJQARgKAUgFQAVgEAUABIAmACQAUADAPAHQAQAIAKAOQAKANAAAYIACChQACAPAFAHIhGAAIgDgLIgBgMQgRAQgVAHQgXAHgWAAQgTAAgPgEgAjRLaIg8ANIgOAGQgGAEgDAGQgDAHAAAJQAAAJADAGQADAHAGADIAOAFIAQABQAUAAALgGQALgHAFgJQAGgJABgKIABgpgAKSNNIAAhKIBKAAIAABKgADzNNIAAiMIgBgYQgCgLgEgIQgEgIgIgFQgJgEgPgBQgOABgJAFQgIAGgFAIQgFAJgDALIgBChIhEAAIgBihQAAgKgDgKQgEgIgIgGQgJgFgQgBIgNACQgIADgHAFQgIAHgFALQgFALAAASIAACQIhEAAIAAj3IBAAAIAAAhIABAAQANgTATgLQATgLAZABQAXgBAUAJQATAKAKAXQALgQATgNQATgMAaAAQATgBARAGQARAEAMALQAMALAHAQQAGASAAAYIAAClgAoxAkIAAg3IApACQANgBAGgKQAHgIAAgMQAAgIgDgHIhXjpIBJAAIA4CqIABAAIA2iqIBGAAIhnEXQgLAdgUANQgTAOgkAAgAAugwQgRgIgKgNQgKgNgFgTQgDgTAAgXIAAiZIBDAAIAACMQAAAfAKAPQAKAPAYABQAcAAANgRQAMgQAAgmIAAiDIBFAAIAAD4IhCAAIAAgiIgBAAQgNAVgUAKQgVAKgWAAQgbAAgSgHgAjngyQgYgKgRgQQgRgRgIgZQgJgYAAgdQAAgeAJgZQAIgYARgQQARgSAYgJQAXgJAeAAQAdAAAYAJQAXAJARASQARAQAJAYQAJAZAAAeQAAAdgJAYQgJAZgRARQgRAQgXAKQgZAJgcAAQgeAAgXgJgAjPj0QgMAHgHALQgHALgDAOQgDAPAAAPQAAAPADAOQADAOAHALQAHALAMAHQALAHASAAQAQAAAMgHQAMgHAHgLQAHgLADgOQADgOAAgPQAAgPgDgPQgDgOgHgLQgHgLgMgHQgMgHgQAAQgSAAgLAHgAEkgwIAAj4IBBAAIAAAvIABAAQAFgMAIgKQAIgJALgIQAKgHANgEQALgDANAAIAPACIAAA/IgLgBIgNgBQgTAAgNAGQgNAGgIALQgHALgEAOQgEAPABARIAABvgAG2mkQgTgFgPgKQgQgKgKgPQgLgOgBgWIBEAAQAEAUAOAHQAPAHASAAQAcAAANgRQANgRAAgbIAAggIAAAAQgMAUgUAJQgVAJgXAAQgbAAgUgJQgUgLgOgQQgMgRgHgXQgFgXAAgaQAAgYAHgWQAGgWAOgRQAOgRATgKQAVgLAZAAQAZABASAIQATAKANAWIAAAAIAAgiIBBAAIAADpQAAAPgEATQgEATgOARQgNAQgaAMQgZALgqAAQgTAAgTgEgAHIrDQgKAGgHAJQgHAKgDANQgDAMAAAPIACAaQADANAGALQAHAKALAHQAKAHAQAAQAOAAALgFQAMgHAHgJQAHgKADgMQAEgMAAgOQAAgPgDgOQgDgNgGgLQgHgKgLgHQgLgGgRAAQgOAAgLAGgADun9IAAiNQAAgegKgQQgJgPgZAAQgcAAgMARQgNAQAAAmIAACDIhDAAIAAj5IBAAAIAAAjIABAAQANgWAVgKQAVgJAWgBQAaAAATAIQARAHAKANQAKAOAEATQAEATABAXIAACZgAg2n9IAAj5IBCAAIAAD5gAj6n9IAAj5IBAAAIAAAuIABAAQAFgLAIgKQAIgJALgIQAKgHAMgDQANgFANAAIAPADIAABAIgNgDIgMAAQgTAAgNAGQgNAHgIAKQgIALgDAPQgEAOAAAQIAABxgApNn9IAAlXICiAAQAYAAAUAEQAVAEAOALQAPAJAHARQAIAQAAAXQAAAbgMARQgLARgXALQAgAJAPAYQAPAWAAAgQABAagLATQgKATgRAMQgRAMgVAFQgXAGgWABgAoBo4IBRAAIAVgCQAKgDAIgFQAHgEAEgJQAFgJAAgNQAAgagPgMQgOgLgZAAIhSAAgAoBrKIBMAAQAUAAAOgJQANgJgBgWQABgNgFgHQgEgHgIgFQgGgEgKgCIhagCgAg2scIAAg4IBCAAIAAA4g");
	this.shape_1.setTransform(-68.2,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-145.4,-94.4,156.20000000000002,196.8), null);


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
	this.instance.setTransform(-103.65,306.7,0.7946,0.7946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-103.6,306.7,164.5,116.80000000000001), null);


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
	mask.graphics.p("An9f4MgAKgmWIC5geIDXA3IJDAAIA8AjIgZBaIAFA8IgeBkIAACVIAaBpIgKBGIAdBVIgJClIgeBaIgPCMIgGBaIAKEdIAfBVIgQBLIAQBBIgfGLIgOCWIgjBVItWCbg");
	mask.setTransform(-20.5,208.525);

	// Layer_1
	this.instance = new lib.paperStack();
	this.instance.setTransform(-72.45,163.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(-72.4,164,103.9,253.10000000000002), null);


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
	mask.graphics.p("ApNN5QgxkmgcjjQAQAKG0AiQDYARDWAPQAmEPDSHmQBpDzBiC9QhLAdnwBNQj4AnjqAhQhqlOhhpMg");
	mask.setTransform(-2.3362,181.1095);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-69.45,215.75,0.8491,0.8491);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-69,217.9,133.4,144.29999999999998), null);


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
	this.instance.setTransform(-239,525.25,0.6196,0.6196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-239,525.3,137,84.20000000000005), null);


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
	this.shape.setTransform(-10.5766,-4.15,0.9367,0.9367);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-40.7,-10.4,60.300000000000004,12.600000000000001), null);


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
	this.instance.setTransform(-254.65,-42.45,0.8114,0.8114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-254.6,-42.4,90.79999999999998,35.699999999999996), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0.467)","rgba(0,0,0,0)"],[0,0.702],-0.4,-1.3,0.1,3.4).s().p("Aj5ATIHuhBIAFAXIntBFg");
	this.shape.setTransform(-66.25,364.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApxilIOmh9IE+FEIvwEBg");
	var mask_graphics_36 = new cjs.Graphics().p("ApxilIOmh9IE+FEIvwEBg");
	var mask_graphics_110 = new cjs.Graphics().p("ApxilIOmh9IE+FEIvwEBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-39.35,y:384.025}).wait(36).to({graphics:mask_graphics_36,x:-39.35,y:384.025}).wait(1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_110,x:-39.35,y:384.025}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Layer_1
	this.instance = new lib.schoolPaper_mc();
	this.instance.setTransform(-82.95,346.65,0.7783,0.7783,0,0,0,0.1,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.4,scaleX:0.8423,scaleY:0.8423,x:-62,y:375.1},27,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	// Layer_2
	this.instance_1 = new lib.kidSchool();
	this.instance_1.setTransform(-149.75,-63.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-63.2,160,600);


// stage content:
(lib.Epson_EcoTank_BTS_160x600_v01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(143).to({alpha:0},9).wait(53).to({alpha:1},9).wait(50));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(143).to({alpha:0},9).wait(53).to({alpha:1},9).wait(50));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn();
	this.instance_2.setTransform(78.25,203.8,0.9822,0.9822,0,0,0,0.1,0);
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
	this.instance_4.setTransform(133.55,579.25,0.5123,0.5123,0,0,0,-168.7,567.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(58.7,562.25,0.7306,0.7306,0,0,0,-21.5,366.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// Shaq_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_221 = new cjs.Graphics().p("AXca4IgKAAMgvpAAAMAAAg1vMAvzAAAIA8AAMAAAA1vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(221).to({graphics:mask_graphics_221,x:156,y:414.05}).wait(51));

	// shaq_img
	this.instance_6 = new lib.shaq_img_1();
	this.instance_6.setTransform(294.3,473.15,0.629,0.629,-11.6422,0,0,51.5,222.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).to({x:128.3},13,cjs.Ease.quadOut).wait(38));

	// backPack_img
	this.instance_7 = new lib.backPack_img();
	this.instance_7.setTransform(11,125.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({alpha:1},9).wait(44));

	// txt_homework
	this.instance_8 = new lib.txt_homework();
	this.instance_8.setTransform(207.85,178);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(53));

	// kid_img
	this.instance_9 = new lib.kid_img("single",0);
	this.instance_9.setTransform(150,65.05);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).to({alpha:1,mode:"synched",loop:false},11).wait(37).to({mode:"single",startPosition:110},0).to({alpha:0},10).to({_off:true},1).wait(53));

	// txt_enoughInk
	this.instance_10 = new lib.txt_enoughInk();
	this.instance_10.setTransform(188.25,176.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_mc
	this.instance_11 = new lib.paper_mc();
	this.instance_11.setTransform(35,-17.95,1.3191,1.3191);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({x:6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// paper_stack_mc
	this.instance_12 = new lib.paper_stack_mc();
	this.instance_12.setTransform(-67.45,157.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({x:35.55},9,cjs.Ease.quadOut).wait(44).to({x:-44.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// inkBottles_mc
	this.instance_13 = new lib.inkBottles_mc();
	this.instance_13.setTransform(119.15,531.4,0.3665,0.3665,0,0,0,-170,568.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48).to({_off:false},0).to({regX:-170.1,regY:568.2,scaleX:0.7586,scaleY:0.7586,x:119.1,y:546.45,alpha:1},9).wait(31).to({regX:-170,regY:568.1,scaleX:1.2879,scaleY:1.2879,x:88.15,y:537.4},9,cjs.Ease.quadOut).wait(54).to({regX:0.1,regY:0.1,scaleX:1.0131,scaleY:1.0131,x:223.6,y:120.05},0).to({x:323.6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(111));

	// printer_mc
	this.instance_14 = new lib.printer_mc();
	this.instance_14.setTransform(79,468.9,0.7189,0.7189,0,0,0,-23.9,366.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({regY:366.2,scaleX:0.9994,scaleY:0.9994,y:475.7,alpha:1},9).wait(31).to({x:19,alpha:0},9,cjs.Ease.quadOut).to({_off:true},1).wait(174));

	// txt_cartridgeFree
	this.instance_15 = new lib.txt_cartridgeFree();
	this.instance_15.setTransform(145.5,164.75);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({y:226.75,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:268.75,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_ecoTank
	this.instance_16 = new lib.txt_ecoTank();
	this.instance_16.setTransform(144.6,141.05);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:245.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(174));

	// txt_AGame
	this.instance_17 = new lib.txt_AGame();
	this.instance_17.setTransform(150.5,198.25);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// shaq_img
	this.instance_18 = new lib.shaq_img_1();
	this.instance_18.setTransform(283.1,492.3,0.5839,0.5839,0,0,0,63.2,222.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:122.1,y:490.3},12,cjs.Ease.quadOut).wait(27).to({x:283.1},8,cjs.Ease.quadIn).to({_off:true},1).wait(224));

	// background
	this.instance_19 = new lib.background_img();
	this.instance_19.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,286.2,446,451.3);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 160,
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