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



(lib.card_01 = function() {
	this.initialize(img.card_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,72);


(lib.card_02 = function() {
	this.initialize(img.card_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,213);


(lib.card_03 = function() {
	this.initialize(img.card_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,213);


(lib.cartridges = function() {
	this.initialize(img.cartridges);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,539,250);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,72);


(lib.frame_01 = function() {
	this.initialize(img.frame_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,245);


(lib.frame_02 = function() {
	this.initialize(img.frame_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,247);


(lib.frame_03 = function() {
	this.initialize(img.frame_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,264);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,262);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,221);


(lib.shaq_endFrame = function() {
	this.initialize(img.shaq_endFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,175);// helper functions:

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


(lib.txt_takingThe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgrBwQgVgJgOgQQgOgQgHgWQgHgXAAgaQAAgaAIgWQAIgXAOgPQAPgQAUgKQAUgJAXAAQAfAAAUANQAVANAMATQANAVAEAXQAFAXgBAVIitAAQAAAPADAOQAFANAJALQAJALAOAGQAOAGASAAQAYAAAPgLQAQgLAFgYIAmAAQgIAogaAUQgaATgoAAQgbABgUgKgAgahSQgMAGgJAJQgIAJgFALQgFANgBANICFAAQgBgNgFgNQgGgMgIgJQgJgIgMgGQgMgFgOAAQgOAAgMAFg");
	this.shape.setTransform(169.1833,90.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AA6ChIAAieQAAgUgNgNQgMgNgWAAQgRAAgNAGQgMAFgJAKQgJAKgEAMQgEANAAAQIAACEIgmAAIAAlBIAmAAIAAB7IABAAQAEgLAIgHQAIgIALgEIAVgHIAUgCQAXAAAPAGQAQAGAJALQAKAMADAPQAEAQAAASIAACZg");
	this.shape_1.setTransform(145.975,86.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAhCXIgagCQgJgCgHgFQgGgGgDgKQgDgJAAgRIAAiTIgoAAIAAgiIAoAAIAAhFIAlAAIAABFIAuAAIAAAiIguAAIAACQIABAKQABAFADACIAJADIAPAAIARAAIAAAig");
	this.shape_2.setTransform(127.525,86.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AghCjQgRgEgOgIQgOgIgJgOQgJgNAAgSIAmAAQAAAKAGAIQAGAGAJAFQAJAFAKACIATABQATAAANgGQANgHAJgLQAIgLAEgRQADgQAAgUIAAgOIAAAAQgLAVgTAKQgUAKgWAAQgaAAgTgKQgUgIgMgRQgOgQgHgVQgFgVAAgXQAAgVAEgWQAGgWAMgSQANgRAVgLQAUgMAeAAQAWAAASAKQATAJAKAUIAAgiIAkAAIAADUQAAA5gZAcQgaAdg4AAQgQAAgQgDgAgch9QgNAIgIALQgJAMgDAPQgFAPAAARQABAQADAQQADAPAIAMQAIANAMAIQAMAIATAAQASAAANgIQAOgIAIgNQAJgMADgQQAEgQgBgQQABgQgEgPQgDgOgIgMQgIgMgNgHQgNgIgRAAQgSAAgNAHg");
	this.shape_3.setTransform(98.2,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AA6B3IAAidQAAgVgNgMQgMgNgWgBQgRABgNAFQgMAGgJAJQgJAKgEANQgEANAAAQIAACDIgmAAIAAjoIAkAAIAAAlIAAAAQAYgqAzAAQAXAAAPAGQAQAGAJALQAKAMADAPQAEAQAAATIAACYg");
	this.shape_4.setTransform(75.025,90.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgSChIAAjoIAlAAIAADogAgShxIAAgvIAlAAIAAAvg");
	this.shape_5.setTransform(59.225,86.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AA1ChIhPh6IgkAiIAABYIgmAAIAAlBIAmAAIAAC+IBphlIA0AAIhdBUIBjCUg");
	this.shape_6.setTransform(45.675,86.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AA6BxQgJgIAAgTQgPATgVAIQgUAIgZAAQgPAAgOgDQgPgDgKgJQgKgHgHgNQgFgMAAgRQAAgUAGgNQAHgNALgHQALgHAOgEIAdgHIAegFIAYgEQALgDAGgGQAHgFAAgLQAAgNgFgHQgFgIgHgEQgIgEgJgBIgRgCQgZAAgQAJQgQAJgBAaIgmAAQAAgVAJgPQAIgQANgIQAOgJARgFQARgEAUAAIAeACQAQADANAHQAMAGAIANQAIANAAAUIAAB2IABAVQACAFAJAAIALgBIAAAdQgKAHgRgBQgPAAgJgIgAAcAEIgYAEIgZAEQgNACgKAEQgLAEgGAJQgHAIAAAOQAAAKAEAGQAEAHAGAEQAGAEAIACIARABQATAAAMgEQAOgGAJgIQAIgHAEgKQAEgIAAgJIAAgmQgHAEgMADg");
	this.shape_7.setTransform(22.525,90.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AAhCXIgagCQgJgCgHgFQgGgGgDgKQgDgJAAgRIAAiTIgoAAIAAgiIAoAAIAAhFIAlAAIAABFIAuAAIAAAiIguAAIAACQIABAKQABAFADACIAJADIAPAAIARAAIAAAig");
	this.shape_8.setTransform(4.075,86.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AhICiIgOgCIAAgkIAMAEIALACQALAAAIgGQAJgGAEgKIAPgnIhcjnIAsAAIBCC9IABAAIBCi9IAoAAIhlEHIgNAdQgGAMgIAHQgIAIgJADQgKADgNAAg");
	this.shape_9.setTransform(-23,95.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("Ah+ChIAAlBIB1AAIAVAAIAYACIAWADQAKADAHAEQAQAJALARQALARAAAYQAAAagMASQgNATgXAJIAAABQAeAGAQAUQAQAVAAAdQAAASgHARQgGAQgNANQgMANgSAIQgSAIgYAAgAhTB9IBqAAQAdAAAQgPQAQgQAAgbQAAgQgGgKQgGgKgKgHQgJgGgNgCIgagDIhhAAgAhTgWIBVAAQAkAAAQgMQAQgNAAgaQAAgRgFgKQgGgKgJgFQgJgGgNgBIgagCIhVAAg");
	this.shape_10.setTransform(-47.275,86.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takingThe, new cjs.Rectangle(-65.2,57.5,246.5,56), null);


(lib.txt_takeThe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("ALkCxQgYgKgQgTQgPgSgJgbQgIgagBgdQAAgfAJgZQAJgYARgTQASgTAWgKQAXgLAcAAQAkAAAXAOQAYAPAOAXQAPAXAFAaQAFAbgBAYIjIAAQgBASAFAPQAEAQALAMQAKANARAHQAPAHAWAAQAcAAASgNQASgNAFgaIAsAAQgJAtgeAXQgeAXgugBQgfAAgYgKgAL4gvQgOAHgKAKQgKAKgGAPQgFANgBAPICZAAQgBgPgFgOQgHgOgKgKQgJgKgOgHQgOgFgQAAQgSAAgNAFgAhRCxQgYgKgQgTQgQgSgIgbQgHgagCgdQAAgfAKgZQAJgYAQgTQARgTAYgKQAXgLAbAAQAiAAAYAOQAYAPAOAXQAOAXAFAaQAGAbgBAYIjIAAQAAASAFAPQAEAQALAMQALANAPAHQAQAHAWAAQAaAAASgNQASgNAGgaIAsAAQgJAtgeAXQgeAXgtgBQggAAgXgKgAg+gvQgOAHgKAKQgJAKgGAPQgFANgCAPICaAAQgCgPgGgOQgFgOgLgKQgKgKgNgHQgOgFgQAAQgRAAgOAFgAncCxQgKgIAAgWQgSAWgZAIQgYAKgcAAQgSAAgQgEQgQgEgNgIQgLgKgHgNQgHgPAAgUQAAgWAHgPQAJgPAMgJQANgJAQgEIBggSQANgEAHgHQAHgGAAgMQAAgOgFgJQgFgJgIgEQgJgFgLgCIgVgBQgcAAgTALQgSAKgCAdIgsAAQABgYAJgRQAKgRAPgLQAPgLAVgEQATgFAXAAIAlADQARADAPAHQAOAIAJAOQAJAPAAAXIACCfQACAIAKAAIANgCIAAAiQgLAHgVgBQgQAAgKgKgAn/A1Ig6AIQgOADgNAFQgMAFgHAKQgHAJAAAQQAAAMAEAHQAEAHAHAFQAHAFAJACIAUACQAWAAAPgHQAQgFAKgJQAJgJAFgKQAFgLAAgJIAAguQgJAGgNAEgAJOC2IAAi1QAAgYgPgPQgOgOgaAAQgUAAgPAFQgOAHgKALQgKAMgFAPQgFAPAAASIAACXIgsAAIAAlwIAsAAIAACMIABAAQAFgLAKgJQAJgJALgFIAZgIIAYgDQAbAAASAHQARAHALANQALANAEATQAEASAAATIAACxgAE6C0QgMgDgIgGQgHgHgEgKQgDgMAAgTIAAiqIguAAIAAgmIAuAAIAAhQIAsAAIAABQIA1AAIAAAmIg1AAIAACyQACAFADACIAKAEIAmAAIAAAogAjTC2IhbiNIgqAoIAABlIgsAAIAAlwIAsAAIAADZIB7h0IA6AAIhqBhIBzCqgAsWC2IAAlHIh7AAIAAgpIEnAAIAAApIh7AAIAAFHg");
	this.shape.setTransform(189.3161,52.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takeThe, new cjs.Rectangle(-43.2,-25.3,324,96.8), null);


(lib.txt_stressFree_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgUAdQAHgCAEgFIAHgJIADgKIABgJIgWAAIAAgpIApAAIAAAmQAAAUgKAPQgKAPgVAHg");
	this.shape.setTransform(263.15,117.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgkBdQgRgHgLgOQgMgNgFgTQgGgTgBgVQAAgVAHgTQAGgSANgNQAMgOAQgHQARgHASAAQAaAAARAKQARALAKAQQALAQADAUQAEATAAARIiPAAQgBAMAEAMQADALAHAJQAIAIALAGQAMAFAPAAQAUAAAMgJQANgKAEgTIAgAAQgHAhgVAQQgWAQghAAQgWAAgRgHgAgWhDQgJAEgHAHQgHAIgEAKQgFAKAAALIBtAAQgBgLgEgLQgEgKgHgHQgIgHgKgEQgJgFgMAAQgMAAgKAFg");
	this.shape_1.setTransform(249.2278,106.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgkBdQgRgHgLgOQgMgNgFgTQgGgTgBgVQAAgVAHgTQAGgSANgNQAMgOAQgHQARgHASAAQAaAAARAKQARALAKAQQALAQADAUQAEATAAARIiPAAQgBAMAEAMQADALAHAJQAIAIALAGQAMAFAPAAQAUAAAMgJQANgKAEgTIAgAAQgHAhgVAQQgWAQghAAQgWAAgRgHgAgWhDQgJAEgHAHQgHAIgEAKQgFAKAAALIBtAAQgBgLgEgLQgEgKgHgHQgIgHgKgEQgJgFgMAAQgMAAgKAFg");
	this.shape_2.setTransform(230.2278,106.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgyBiIAAi/IAeAAIAAAoIABAAQALgXAQgLQARgLAaABIAAAhQgTAAgOAFQgNAFgHAKQgIAKgEAPQgEAOAAASIAABVg");
	this.shape_3.setTransform(215.925,106.7208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgUCGIAAijIggAAIAAgcIAgAAIAAgdQAAgXAOgMQAMgMAaAAIALAAIAKADIAAAbIgJgCIgJAAQgLAAgHAEQgGAEAAANIAAAbIAlAAIAAAcIglAAIAACjg");
	this.shape_4.setTransform(204.3,103.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("Ag3AWIAAgsIBvAAIAAAsg");
	this.shape_5.setTransform(191.075,106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgeBiQgQgEgNgHQgMgIgIgNQgIgNgBgTIAyAAQAAAIAEAGQADAHAGADQAFAEAIACIAOACIAMgBIALgEQAFgDADgFQADgEAAgHQAAgMgPgGQgQgGgbgGIgXgGQgLgEgJgFQgIgFgFgJQgFgJAAgNQAAgSAHgMQAHgMAMgHQAMgHAPgCQAPgDAPAAQAPAAAPADQAOADAMAHQALAHAIAMQAHALACASIgyAAQgBgPgLgFQgKgGgNAAIgKABIgJACIgIAFQgDAEAAAGQAAAHAFAEQAGAFAIADIASAFIAWAFIAXAGQALAEAIAGQAJAFAFAJQAFAJAAANQAAATgHANQgIANgMAIQgNAIgPADQgQADgRAAQgPAAgQgDg");
	this.shape_6.setTransform(174.575,107.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgeBiQgQgEgNgHQgMgIgIgNQgIgNgBgTIAyAAQAAAIAEAGQADAHAGADQAFAEAIACIAOACIAMgBIALgEQAFgDADgFQADgEAAgHQAAgMgPgGQgQgGgbgGIgXgGQgLgEgJgFQgIgFgFgJQgFgJAAgNQAAgSAHgMQAHgMAMgHQAMgHAPgCQAPgDAPAAQAPAAAPADQAOADAMAHQALAHAIAMQAHALACASIgyAAQgBgPgLgFQgKgGgNAAIgKABIgJACIgIAFQgDAEAAAGQAAAHAFAEQAGAFAIADIASAFIAWAFIAXAGQALAEAIAGQAJAFAFAJQAFAJAAANQAAATgHANQgIANgMAIQgNAIgPADQgQADgRAAQgPAAgQgDg");
	this.shape_7.setTransform(155.675,107.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgmBeQgSgHgNgOQgMgNgHgTQgHgSAAgXQAAgUAHgTQAHgTANgNQANgOASgHQASgIAVAAQAZAAASAJQASAKAMAQQAMAQAFAUQAFAVgBAVIiKAAQABAaAMALQAMAMAVAAQAQAAAMgIQALgIADgJIAuAAQgLAigXAPQgXAPghAAQgVAAgTgHgAgTg4QgJAEgFAGQgFAHgCAHIgCAMIBVAAQgEgUgJgKQgKgKgTAAQgMAAgIAEg");
	this.shape_8.setTransform(136.1161,107.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("Ag9BjIAAjAIAzAAIAAAkIAAAAQAEgJAGgHQAFgIAJgFQAHgGAKgDQAKgDAKAAIALACIAAAxIgJgBIgKgBQgPAAgKAFQgKAFgGAIQgFAJgDALQgCALAAAMIAABXg");
	this.shape_9.setTransform(120.3,106.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AAIB8QgKgCgIgEQgJgFgFgJQgFgJAAgOIAAhxIggAAIAAgkIAgAAIAAg5IA0AAIAAA5IAnAAIAAAkIgnAAIAABeQAAAOAFAEQAEAFAOgBIAIAAIAIgBIAAApIgPACIgQAAg");
	this.shape_10.setTransform(106.425,104.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgoCGQgVgGgQgLQgQgMgJgSQgJgRAAgZIA5AAQAAANAFAJQAEAKAIAFQAIAGALADQALADAKAAIARgCQAJAAAIgEQAIgEAFgHQAFgGAAgKQAAgLgHgGQgHgIgLgEIgZgHIgcgIIgdgJQgOgGgLgHQgLgIgHgNQgHgNAAgTQAAgUAJgPQAJgPAOgKQAOgKASgFQASgFARAAQAUAAATAFQAUAFAPAKQAOAKAJARQAJAPAAAYIg5AAQgBgMgEgIQgEgIgHgFQgHgEgJgBIgTgDIgOACQgHABgGAEQgGAEgEAFQgDAGAAAJQAAAHADAFQADAFAIAEIAZAIIAnALIAUAFQAOAEANAIQANAIAJAPQAKAOAAAWQAAATgHAPQgHAPgOAMQgOALgVAHQgVAGgbAAQgVAAgUgFg");
	this.shape_11.setTransform(89.0738,103.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_stressFree_02, new cjs.Rectangle(75,78.4,194.60000000000002,48.39999999999999), null);


(lib.txt_stress = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgoCBQgWgEgQgKQgQgLgKgRQgLgRgCgaIBDAAQAAAMAEAIQAGAIAHAFQAHAGAKACIATACIAPgBIAOgGQAIgEADgGQAFgGAAgJQAAgQgUgHQgWgIgkgIIgdgJQgPgEgLgHQgMgHgGgMQgIgMAAgQQAAgZAKgPQAKgQAPgJQAQgJAUgEQATgEAVAAQATABAUAEQAUAEAPAIQAPAKAKAPQAKAQACAXIhDAAQgBgTgNgIQgOgHgSAAIgNABIgMADIgKAHQgDAFAAAHQAAAKAGAGQAHAGALADIAYAHIAeAGIAdAJQAPAEALAJQALAHAHAMQAHAMAAARQAAAagLAQQgJARgQALQgRAKgVAEQgUAEgWAAQgVAAgVgEg");
	this.shape.setTransform(420.3,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgoCBQgVgEgRgKQgQgLgKgRQgMgRgBgaIBDAAQAAAMAEAIQAGAIAHAFQAHAGAJACIAUACIAPgBIAOgGQAIgEADgGQAFgGAAgJQAAgQgVgHQgUgIglgIIgdgJQgPgEgLgHQgMgHgGgMQgIgMAAgQQAAgZAKgPQAKgQAQgJQAPgJAUgEQATgEAVAAQATABAUAEQATAEAQAIQAPAKAKAPQAKAQACAXIhDAAQgBgTgNgIQgOgHgSAAIgNABIgMADIgKAHQgEAFABAHQAAAKAGAGQAHAGALADIAYAHIAeAGIAdAJQAOAEAMAJQALAHAHAMQAHAMgBARQAAAagKAQQgJARgRALQgQAKgVAEQgUAEgWAAQgVAAgVgEg");
	this.shape_1.setTransform(394.55,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgyB8QgYgKgRgRQgQgSgKgZQgJgYAAgeQAAgbAKgZQAJgYARgSQASgSAXgKQAYgLAcAAQAgAAAZANQAXAMAQAWQAPAUAHAcQAHAagCAdIi2AAQACAiAPAPQAQAPAcAAQAVAAAQgKQAPgLADgLIA+AAQgPAtgeAUQgfAUgrgBQgdAAgYgJgAgahKQgLAFgGAIQgHAJgDAJIgDARIBwAAQgEgagNgOQgNgOgZAAQgQAAgLAGg");
	this.shape_2.setTransform(367.8722,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AhRCCIAAj8IBCAAIAAAvIABAAQAFgMAJgKQAHgKALgHQALgHAMgEQAMgEANAAIAQACIAABBIgMgCIgNAAQgUAAgNAGQgNAGgIALQgHALgEAPQgDAPAAAQIAAByg");
	this.shape_3.setTransform(346.175,26.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAKCkQgNgCgLgHQgLgGgHgMQgGgMgBgTIAAiUIgqAAIAAgvIAqAAIAAhMIBGAAIAABMIAzAAIAAAvIgzAAIAAB8QAAASAFAFQAGAHARgBIAMAAIALgBIAAA2IgVABIgVABg");
	this.shape_4.setTransform(327.15,23.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("Ag2CwQgagHgVgPQgVgQgNgXQgLgYAAggIBKAAQAAASAHAMQAGAMALAIQAKAHAOAEQAPAEAOAAIAWgCQALgCALgFQAKgEAHgJQAHgJAAgNQAAgOgJgJQgJgJgPgGIghgKIglgKIgmgMQgTgHgOgKQgPgMgKgRQgJgQAAgYQAAgbAMgUQAMgUASgOQATgNAXgGQAYgGAYAAQAaAAAZAGQAaAGATANQAUAOAMAWQALAVAAAeIhKAAQgCgPgGgLQgFgKgKgGQgIgGgNgCIgZgCIgTABQgJACgIAFQgHAFgFAIQgFAHAAALQAAALAEAGQAEAGALAGIAgAKIA1AOIAbAHQARAFASAMQARAKAMATQAMATAAAdQAAAYgJAVQgJAUgTAQQgRAOgcAJQgcAIgjAAQgcAAgcgHg");
	this.shape_5.setTransform(303.35,21.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_stress, new cjs.Rectangle(284.9,-10.9,150.90000000000003,63.699999999999996), null);


(lib.txt_ridiculous = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgrCQQgWgGgRgMQgRgNgLgTQgKgTABgbIA9AAQAAAPAFAKQAFAKAJAGQAJAGALADQAMADALAAIASgBQAKgCAIgEQAJgEAFgHQAGgHAAgKQAAgMgIgHQgHgHgMgFIgbgJIgegIIgfgKQgQgFgMgJQgMgJgHgOQgIgNAAgUQAAgWAKgQQAJgRAPgLQAQgKATgFQATgGATAAQAWAAAVAFQAUAFAQALQAQAMAKARQAJASAAAYIg9AAQgBgMgEgJQgFgIgHgFQgIgFgKgCIgUgCIgQACQgHABgGAEQgGAEgFAGQgDAGAAAKQAAAIADAFQADAFAJAFIAaAJIArALIAWAGQAOAEAOAJQAOAIALAQQAKAPAAAYQAAAUgIARQgHARgQAMQgOAMgXAHQgWAHgdAAQgXAAgWgGg");
	this.shape.setTransform(393.6488,-33.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AhZB2QgggcAAg6IAAixIA/AAIAACxIACAWQACAMAGAIQAHAJALAFQAMAGASAAQAiAAANgPQAMgPAAggIAAixIA/AAIAACxQAAA6ggAcQghAcg5AAQg6AAgfgcg");
	this.shape_1.setTransform(365.95,-32.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("Ag6CKQgagLgTgUQgRgUgKgbQgKgbAAggQAAgfAKgbQAKgcARgUQATgUAagMQAagMAgAAQAiAAAaAMQAZAMASAUQATAUAJAcQAKAbAAAfQAAAggKAbQgJAbgTAUQgSAUgZALQgaAMgiAAQggAAgagMgAgjhYQgPAJgKANQgIAOgEASQgFASAAARQAAASAFARQAEARAIAOQAKAOAPAIQAPAIAUAAQAVAAAPgIQAPgIAJgOQAKgOADgRQAEgRABgSQgBgRgEgSQgDgSgKgOQgJgNgPgJQgPgIgVAAQgUAAgPAIg");
	this.shape_2.setTransform(335.65,-33.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AhkCPIAAkdIA/AAIAADoICKAAIAAA1g");
	this.shape_3.setTransform(309.275,-33.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AhZB2QgggcAAg6IAAixIA/AAIAACxIACAWQACAMAGAIQAHAJALAFQALAGATAAQAhAAAOgPQAMgPAAggIAAixIA/AAIAACxQAAA6ghAcQggAcg5AAQg6AAgfgcg");
	this.shape_4.setTransform(281.7,-32.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgzCKQgagLgSgUQgSgUgKgbQgJgbAAggQAAgfAJgbQAKgcASgUQASgUAagMQAagMAgAAQAYAAAVAHQAVAHARANQAQANALATQALATADAZIg9AAQgCgLgGgJQgFgJgIgGQgJgHgLgEQgKgEgMAAQgUAAgPAIQgPAJgJANQgJAOgEASQgFASAAARQAAASAFARQAEARAJAOQAJAOAPAIQAPAIAUAAQAdAAAQgSQARgRADgdIA9AAQgCAbgKAWQgKAVgRAPQgQAQgWAIQgWAIgbAAQggAAgagMg");
	this.shape_5.setTransform(252.175,-33.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgfCPIAAkdIA+AAIAAEdg");
	this.shape_6.setTransform(231.5,-33.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("Ah+CPIAAkdIB8AAQAaAAAYAIQAYAJASASQARARAKAbQAKAaAAAlQAAAdgIAbQgIAbgQASQgRAUgYALQgYALggAAgAg/BaIA5AAQAMAAANgEQANgFAKgKQAKgKAGgRQAGgQAAgYQAAgVgEgRQgFgRgJgMQgKgNgQgGQgQgIgWAAIgtAAg");
	this.shape_7.setTransform(211.475,-33.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgeCPIAAkdIA+AAIAAEdg");
	this.shape_8.setTransform(190.25,-33.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AA8CPQgFgNgBgUIgEgkQgDgWgKgKQgLgLgXAAIg+AAIAABwIg/AAIAAkdICZAAQATAAAQAGQAPAGALALQALALAGAOQAGAPAAAQQAAAZgLATQgKASgYAJIAAAAQALADAIAHQAIAHAEAJQAFAJACAKIADAWIABAQIACATIADASQACAJAEAGgAg7gNIBEAAQAVAAALgKQALgJAAgWQAAgVgLgJQgLgJgVAAIhEAAg");
	this.shape_9.setTransform(170.575,-33.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ridiculous, new cjs.Rectangle(153.5,-60.1,255.3,51.900000000000006), null);


(lib.txt_Printing = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AghAiIAAhDIBDAAIAABDg");
	this.shape.setTransform(305.325,66.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgmCbQgRgEgPgJQgOgJgJgNQgKgOgBgUIA+AAQAEASANAHQANAHAPAAQAbAAAMgQQAMgQgBgYIAAgeIAAAAQgLASgSAJQgTAIgUAAQgZAAgSgJQgTgJgMgPQgMgQgFgUQgGgVAAgXQAAgWAHgUQAGgVANgPQAMgQASgJQASgJAYAAQAVAAARAIQARAIAMAUIAAAAIAAgeIA8AAIAADTQAAAOgEARQgEASgMAPQgMAPgYALQgXAKgmAAQgRAAgRgEgAgVhqQgKAFgGAJQgHAJgCAMQgDALAAANIACAYQADANAGAJQAFAJAKAGQAKAGANAAQAOAAAKgFQAKgFAGgJQAHgIADgLQADgLAAgNQAAgOgCgMQgDgNgGgJQgGgKgKgGQgKgFgQAAQgMAAgJAFg");
	this.shape_1.setTransform(285.675,62.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAsB1IAAiAQAAgcgJgNQgJgOgWgBQgYAAgMAQQgLAPAAAiIAAB3Ig+AAIAAjjIA7AAIAAAgIABAAQAMgUATgJQASgJATABQAZgBAQAHQARAHAJAMQAJAMAEASQADARAAAVIAACLg");
	this.shape_2.setTransform(260.125,58.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgeCdIAAjiIA9AAIAADigAgehoIAAg0IA9AAIAAA0g");
	this.shape_3.setTransform(241.775,54.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAJCTQgMgCgKgGQgKgFgFgLQgGgLAAgRIAAiFIgmAAIAAgqIAmAAIAAhDIA9AAIAABDIAuAAIAAAqIguAAIAABvQAAARAGAFQAFAFAQAAIAJgBIAKgBIAAAxIgSABIgTABg");
	this.shape_4.setTransform(228.55,55.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAsB1IAAiAQAAgcgJgNQgJgOgWgBQgYAAgMAQQgLAPAAAiIAAB3Ig+AAIAAjjIA7AAIAAAgIABAAQAMgUATgJQASgJATABQAZgBAQAHQARAHAJAMQAJAMAEASQADARAAAVIAACLg");
	this.shape_5.setTransform(208.325,58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgeCdIAAjiIA9AAIAADigAgehoIAAg0IA9AAIAAA0g");
	this.shape_6.setTransform(190.025,54.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AhIB1IAAjjIA7AAIAAAqIABAAQAFgKAGgJQAHgJAKgHQAJgFAMgEQAKgEAMABIAOACIAAA5IgLgBIgMgBQgQABgMAFQgMAGgHAJQgHAKgDANQgDAOAAAOIAABng");
	this.shape_7.setTransform(177.3,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("Ah8CdIAAk5ICMAAQAeAAAVAJQAUAIANAOQANAPAGASQAGASAAATQAAATgGASQgGASgNANQgNAOgUAJQgVAIgeAAIhHAAIAABxgAg3gIIA2AAIAWgCQAKgCAJgFQAJgFAEgJQAGgJAAgPQAAgPgGgJQgEgKgJgFQgJgFgKgBIgWgCIg2AAg");
	this.shape_8.setTransform(154.15,54.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Printing, new cjs.Rectangle(137.4,26.2,175.20000000000002,54.89999999999999), null);


(lib.txt_printers = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgiBvQgRgEgNgIQgMgJgIgOQgIgPgBgUIAlAAQAAAMAFAIQAFAIAJAFQAIAFAKACIAVACIASgBIARgFQAIgDAFgHQAFgGAAgKQAAgOgLgIQgKgHgQgEIgigIQgTgEgQgGQgQgGgKgMQgLgMAAgVQAAgRAIgMQAHgMAMgIQALgHAPgEQAPgDAOAAQASAAAQADQAQADAMAIQAMAIAHAOQAHANACAUIglAAQAAgLgFgHQgFgHgHgEQgHgEgJgCIgRgCIgQABIgPAFQgHADgEAFQgFAFAAAJQAAAJAHAGQAHAHAKAEIAXAHIAYAFIAbAIQANAEAKAGQAKAHAGALQAHAKAAAQQAAAUgJANQgIANgOAIQgNAJgRADQgRADgQAAQgSAAgQgEg");
	this.shape.setTransform(385.925,-40.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("Ag5BxIAAjcIAiAAIAAAvIABAAQANgbASgNQAUgMAdAAIAAAnQgVAAgQAGQgQAGgIALQgJAMgFAQQgEARAAAUIAABig");
	this.shape_1.setTransform(371.15,-41.026);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgpBrQgTgJgOgPQgNgQgGgVQgHgVgBgZQAAgZAIgVQAHgUAOgQQAOgPATgJQATgIAWAAQAdAAATAMQAUAMALATQAMATAFAWQAEAWgBATIikAAQAAAOAEANQAEANAIALQAJAKANAFQANAGARAAQAXAAAPgKQAPgLAEgWIAkAAQgHAlgZATQgZATglAAQgaAAgTgIgAgZhNQgLAFgIAIQgIAJgFALQgFALgBANIB+AAQgBgNgFgLQgFgMgIgIQgIgIgMgFQgLgFgNAAQgNAAgMAFg");
	this.shape_2.setTransform(353.2591,-40.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AAfCPIgYgCQgJgBgGgGQgGgFgDgJQgDgKAAgPIAAiLIgmAAIAAggIAmAAIAAhCIAjAAIAABCIAsAAIAAAgIgsAAIAACIIABAKQABAEADACIAIADIAPAAIAQAAIAAAgg");
	this.shape_3.setTransform(336.1,-44.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AA3BxIAAiUQAAgVgMgMQgMgMgVAAQgPAAgNAFQgMAFgIAKQgIAJgEANQgEAMAAAPIAAB8IgkAAIAAjcIAiAAIAAAjIABAAQAXgoAwAAQAVAAAPAGQAOAGAJALQAJALAEAOQADAPAAASIAACQg");
	this.shape_4.setTransform(319.65,-41.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgRCYIAAjcIAjAAIAADcgAgRhrIAAgsIAjAAIAAAsg");
	this.shape_5.setTransform(304.8,-44.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("Ag5BxIAAjcIAiAAIAAAvIABAAQANgbATgNQASgMAeAAIAAAnQgWAAgPAGQgPAGgJALQgKAMgDAQQgFARAAAUIAABig");
	this.shape_6.setTransform(295.95,-41.026);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AhwCYIAAkvICEAAQAuAAAYAYQAXAXAAAqQAAArgXAXQgYAYgugBIhcAAIAAB9gAhIgGIBOAAQAjABAQgOQAQgPAAgcQAAgbgQgOQgQgOgjAAIhOAAg");
	this.shape_7.setTransform(276.275,-44.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_printers, new cjs.Rectangle(260.5,-71.5,135.7,51.9), null);


(lib.txt_outOfThe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgvB6QgWgJgPgTQgQgRgHgYQgIgZgBgcQAAgcAJgYQAJgZAQgRQAQgSAWgKQAVgJAZAAQAiAAAWAOQAXAOANAVQAOAVAFAaQAFAagBAVIi9AAQAAARAEAPQAFAPAKAMQAJALAPAHQAQAHATgBQAaAAARgMQARgMAGgZIApAAQgJArgcAVQgcAWgrAAQgeAAgWgKgAgchZQgNAGgKAKQgJAJgFANQgGANgBAPICRAAQgBgPgGgNQgGgNgJgKQgKgJgNgGQgMgFgQgBQgPABgNAFg");
	this.shape.setTransform(265.9333,59.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AA/CvIAAisQAAgWgOgOQgNgNgZAAQgRAAgPAGQgNAFgKALQgJALgFANQgEAPAAARIAACPIgqAAIAAldIAqAAIAACGIABAAQAFgMAIgIQAJgIALgFIAXgIIAWgCQAZAAARAHQARAHAKAMQAKAMAEARQAFARAAATIAACng");
	this.shape_1.setTransform(239.075,54.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAjCkIgbgCQgKgCgHgGQgIgGgDgLQgEgKAAgSIAAigIgqAAIAAglIAqAAIAAhLIApAAIAABLIAzAAIAAAlIgzAAIAACcIABAMQACAEADADIAKADIAPAAIAUAAIAAAlg");
	this.shape_2.setTransform(217.4,55.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgaCxIAAjXIgrAAIAAglIArAAIAAgmQAAgfASgQQARgQAiAAIANABIAOADIAAAlIgMgDIgMgBQgPAAgIAGQgJAGABARIAAAjIAwAAIAAAlIgwAAIAADXg");
	this.shape_3.setTransform(189.95,54.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("Ag0B6QgXgKgPgSQgRgSgHgYQgIgYAAgbQAAgbAIgZQAHgYARgSQAPgRAXgLQAXgKAdAAQAeAAAXAKQAXALAQARQAPASAIAYQAIAZAAAbQAAAbgIAYQgIAYgPASQgQASgXAKQgXAKgeAAQgdAAgXgKgAgehYQgOAGgLANQgLAMgFARQgHASAAAXQAAAXAHARQAFASALAMQALAMAOAGQAOAHAQgBQAQABAOgHQAPgGALgMQAKgMAHgSQAFgRABgXQAAgXgGgSQgHgRgKgMQgLgNgPgGQgOgGgQgBQgQABgOAGg");
	this.shape_4.setTransform(168.5,59.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAjCkIgbgCQgKgCgIgGQgHgGgDgLQgEgKAAgSIAAigIgqAAIAAglIAqAAIAAhLIApAAIAABLIAzAAIAAAlIgzAAIAACcIABAMQABAEAEADIAKADIAQAAIATAAIAAAlg");
	this.shape_5.setTransform(132.9,55.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("Ag6B7QgRgHgKgMQgLgNgEgQQgEgRAAgVIAAilIAqAAIAACqQAAAXANAOQAOAOAYAAQASAAAOgGQAOgGAJgLQAKgKAEgPQAFgOAAgRIAAiOIAqAAIAAD8IgoAAIAAgoIgBAAQgNAXgVALQgUALgbAAQgZAAgQgGg");
	this.shape_6.setTransform(112.275,59.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AhICoQgggPgUgaQgWgZgKghQgLghABgkQgBgjALghQAKghAWgZQAUgaAggPQAfgPApAAQApAAAgAPQAfAPAWAaQAUAZALAhQAKAhAAAjQAAAkgKAhQgLAhgUAZQgWAagfAPQggAPgpAAQgpAAgfgPgAg2iCQgXAMgPAVQgOAUgHAaQgHAaAAAZQAAAbAHAZQAHAaAOAVQAPAUAXANQAXAMAfAAQAfAAAYgMQAXgNAPgUQAOgVAHgaQAGgaAAgaQAAgZgGgaQgHgagOgUQgPgVgXgMQgYgNgfAAQgfAAgXANg");
	this.shape_7.setTransform(80.2,54.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_outOfThe, new cjs.Rectangle(60.6,24.4,219.20000000000002,59.00000000000001), null);


(lib.txt_outOf = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgYCkIAAjIIgoAAIAAgiIAoAAIAAgjQAAgcAQgPQAQgPAgAAIAMABIANADIAAAiIgMgDIgKgBQgOAAgIAGQgHAFAAAQIAAAgIAtAAIAAAiIgtAAIAADIg");
	this.shape.setTransform(118.7,86.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgwBxQgVgJgPgRQgOgQgIgXQgHgWAAgaQAAgZAHgWQAIgWAOgRQAPgQAVgKQAVgJAbAAQAcAAAVAJQAVAKAPAQQAOARAHAWQAIAWAAAZQAAAagIAWQgHAXgOAQQgPARgVAJQgVAJgcAAQgbAAgVgJgAgbhSQgOAGgKAMQgKALgFARQgGAQAAAUQAAAWAGAQQAFARAKALQAKALAOAGQANAGAOAAQAPAAANgGQAOgGAJgLQAKgLAGgRQAGgQAAgWQAAgUgGgQQgGgRgKgLQgJgMgOgGQgNgGgPAAQgOAAgNAGg");
	this.shape_1.setTransform(100.425,91.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAhCYIgagCQgJgCgHgFQgHgGgDgKQgDgKAAgQIAAiUIgoAAIAAgiIAoAAIAAhGIAmAAIAABGIAvAAIAAAiIgvAAIAACQIABALQABAEADADIAJADIAPAAIASAAIAAAig");
	this.shape_2.setTransform(70.525,87.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("Ag2ByQgPgHgKgLQgJgLgEgQQgEgPAAgTIAAiaIAnAAIAACeQAAAWAMANQANAMAWAAQARAAAMgFQANgGAKgKQAIgKAEgNQAEgNABgQIAAiEIAmAAIAADqIgkAAIAAglIgBAAQgMAVgUAKQgSALgZAAQgYAAgPgGg");
	this.shape_3.setTransform(52.9,91.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AhDCbQgdgNgUgYQgTgYgJgeQgKgfAAghQAAggAKgfQAJgeATgYQAUgXAdgOQAdgPAmAAQAmAAAdAPQAdAOAUAXQAUAYAJAeQAKAfAAAgQAAAhgKAfQgJAegUAYQgUAYgdANQgdAOgmABQgmgBgdgOgAgyh4QgVALgOATQgOATgGAYQgHAYABAXQgBAZAHAYQAGAXAOATQAOAUAVALQAVAMAdAAQAdAAAWgMQAVgLAOgUQANgTAHgXQAFgZAAgYQAAgXgFgYQgHgYgNgTQgOgTgVgLQgWgMgdAAQgdAAgVAMg");
	this.shape_4.setTransform(24.8,86.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_outOf, new cjs.Rectangle(6.2,58.3,118.7,55.5), null);


(lib.txt_justFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AAsAZIAAgmIgPAmIgHAAIgPgmIAAAAIAAAmIgIAAIAAgxIANAAIANAiIAOgiIAOAAIAAAxgAgkAZIAAgpIgQAAIAAgIIApAAIAAAIIgQAAIAAApg");
	this.shape.setTransform(326.025,-34.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgZAaIAAgzIAzAAIAAAzg");
	this.shape_1.setTransform(321.675,-16.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_2.setTransform(312.625,-25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_3.setTransform(303.875,-25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgXB3IAAisIAvAAIAACsgAgXhPIAAgnIAvAAIAAAng");
	this.shape_4.setTransform(295.125,-25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAhB3IAAhhQABgVgIgLQgGgKgRABQgSAAgJALQgIAKAAAaIAABbIgwAAIAAjtIAwAAIAABaIABAAQAJgPANgIQANgGAOAAQATAAAMAFQAMAFAHAKQAHAJADANQADANAAAPIAABqg");
	this.shape_5.setTransform(280.8,-25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AghBUQgQgGgLgMQgLgMgHgQQgGgQAAgTQAAgTAGgSQAGgRALgMQALgNARgHQAQgHAUAAQAQAAAOAEQAOAEALAIQAMAIAGANQAIAMAAARIguAAQgFgegeAAQgLAAgHAFQgIAFgEAIQgGAJgBAJQgCAKAAAJQAAAJACAKQACAKAEAHQAEAIAIAFQAIAFAKAAQARAAAJgJQAJgKACgQIAuAAQgFAigWATQgVASgjAAQgSAAgRgHg");
	this.shape_6.setTransform(261.3,-22.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("Ag/B2QgOgFgKgJQgLgJgGgNQgGgNAAgSQAAgMAFgLQAEgKAIgJQAHgIAKgGIAUgMQgKgLgGgMQgHgMAAgPQAAgNAFgKQAFgJAJgIQAJgHALgEQALgEAMAAQAOAAALAEQALAEAJAHQAJAHAFALQAFALAAAOQAAAVgMAOQgMAOgSAKIAfAlIAFgOIAEgPIApAAQgCAQgGAPQgFAPgLANIAxA4Ig6AAIgUgXQgOAOgQAHQgPAHgUAAQgRAAgOgFgAgsAUIgKAIQgFAFgDAGQgDAGAAAIQAAAGADAGQADAGAFAEQAEAEAHACQAGADAGAAQANAAAKgGQAIgGAJgJIgogygAgehUQgGAGAAAJQAAAMAGAIIANAQQAKgHAHgHQAGgHAAgNQAAgKgGgGQgGgHgJAAQgIAAgHAGg");
	this.shape_7.setTransform(231.225,-25.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_8.setTransform(205.225,-25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_9.setTransform(196.425,-25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgXB3IAAisIAvAAIAACsgAgXhPIAAgnIAvAAIAAAng");
	this.shape_10.setTransform(187.675,-25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgaB3IAAiLIgdAAIAAghIAdAAIAAgNQAAgXAOgOQAOgPAdAAIAMAAIANABIAAAjIgSAAQgKAAgEAEQgEAEAAALIAAAKIAhAAIAAAhIghAAIAACLg");
	this.shape_11.setTransform(177.65,-25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F1F1F").s().p("AAcBxIgVgCQgJgBgHgEQgIgFgEgIQgFgIAAgNIAAhkIgcAAIAAggIAcAAIAAg0IAvAAIAAA0IAiAAIAAAgIgiAAIAABUQAAAMAEAEQAEAEAMAAIAHAAIAHgBIAAAkIgNACg");
	this.shape_12.setTransform(156.475,-24.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F1F1F").s().p("AgbBYQgOgDgMgHQgKgHgIgMQgHgMgBgRIAtAAQAAAIAEAFQACAGAGADQAEAEAHACIANABIAKgBIAKgEQAEgCAEgEQACgEAAgHQAAgLgOgFQgOgFgYgFIgUgGQgKgDgIgEQgIgGgEgHQgFgIAAgMQAAgQAHgLQAGgLALgGQALgGANgCQANgDAOAAQANAAANADQAOACAKAHQALAGAGALQAHAKACAQIguAAQgBgNgJgFQgKgFgLAAIgJAAIgJACIgGAFQgCAEgBAFQABAGAEAEQAFAEAHADIAQAEIAUAFIAUAFQAKADAIAGQAHAFAGAIQAEAIAAAMQAAARgHALQgHAMgKAHQgMAHgOADQgOADgPAAQgOAAgOgDg");
	this.shape_13.setTransform(141.65,-22.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F1F1F").s().p("AgwBTQgNgEgGgKQgIgJgCgNQgDgOAAgQIAAhpIAwAAIAABhQgBAVAHALQAGALASAAQASAAAJgMQAIgLAAgbIAAhaIAwAAIAACsIguAAIAAgYIgBAAQgJAPgNAGQgOAIgPAAQgTAAgMgGg");
	this.shape_14.setTransform(122.65,-22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F1F1F").s().p("AgdB1QgNgEgMgJQgLgIgGgOQgHgOAAgUIAAgVIAwAAIAAALIABAQQABAIADAFQAEAFAGADQAFADAKAAQAJAAAGgEQAGgEACgFQADgGAAgHIAAgNIAAigIA1AAIAACiQAAAMgCAOQgCAOgJAMQgIAMgQAIQgQAJgaAAQgPAAgOgFg");
	this.shape_15.setTransform(102.4,-25.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_justFill, new cjs.Rectangle(92.2,-48,240.5,43.5), null);


(lib.txt_invitations = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgbBQQgNgEgJgGQgJgIgGgJQgFgLAAgOIAiAAQACAPAKAHQAKAFANAAIALAAIAMgDQAGgCADgEQAEgFgBgGQAAgHgFgEQgEgEgHgDIgRgFIgRgEIgTgFQgJgDgHgEQgIgFgEgIQgEgIAAgMQAAgNAGgJQAGgIAKgGQAKgFAMgDQALgBALAAQALgBALADQAMADAJAFQAJAGAGAKQAGAJABANIgkAAQgDgMgJgFQgJgEgKAAIgJABIgKACQgEACgDADQgDADAAAFQAAAGAEAFQAFAEAHACIAPAEIATAEIATAGQAJADAHAFQAHAFAFAHQAEAIAAAMQAAAOgGAJQgGALgLAFQgKAHgNACQgMADgMAAQgOABgNgEg");
	this.shape.setTransform(374.075,-193);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAiBRIAAhiQAAgTgIgIQgHgJgPAAQgJAAgGADQgIAEgEAFQgGAGgCAIQgDAHAAAJIAABcIgiAAIAAidIAgAAIAAAXIABABQAIgNANgIQANgHAPAAQAaAAAOANQAPAOAAAbIAABrg");
	this.shape_1.setTransform(358,-193.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AghBNQgOgGgLgLQgLgLgFgPQgFgQAAgSQAAgSAFgPQAFgPALgLQALgLAOgHQAPgFASAAQATAAAPAFQAPAHAKALQAKALAGAPQAFAPAAASQAAASgFAQQgGAPgKALQgKALgPAGQgPAHgTgBQgSABgPgHgAgTgyQgJAFgGAIQgFAHgCALQgDAKAAAJQAAAKADAKQACAKAFAIQAGAIAJAFQAIAFALgBQALABAJgFQAJgFAFgIQAGgIACgKQADgKAAgKQAAgJgDgKQgCgLgGgHQgFgIgJgFQgJgFgLAAQgLAAgIAFg");
	this.shape_2.setTransform(340.9,-193);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgQBtIAAidIAhAAIAACdgAgQhLIAAghIAhAAIAAAhg");
	this.shape_3.setTransform(328.875,-196.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AACBlQgIgDgFgEQgEgFgCgJIgCgRIAAhcIgaAAIAAgaIAaAAIAAgwIAiAAIAAAwIAfAAIAAAaIgfAAIAABUIAAAJIACAGQACADAEACIAJABIAHAAIAHgBIAAAbIgLABIgLAAQgOAAgIgCg");
	this.shape_4.setTransform(320.625,-195.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAnBPQgHgFgCgKQgKAKgQAFQgOAEgOAAQgLAAgJgDQgKgCgIgGQgHgGgFgJQgEgIAAgMQAAgPAFgIQAGgKAJgEQAIgGALgCIAWgDIARgDIAPgDQAHgBAEgEQADgEAAgIQAAgGgDgFQgDgEgFgCIgKgDIgKgBQgPAAgJAGQgKAGgBANIgjAAQABgPAGgKQAHgKAKgHQAKgFAMgDQANgDANABQAKgBAMADQALADAJAFQAJAFAGAJQAFAJAAANIAABQQAAAGACADQABADAFgBIAEAAIAFAAIAAAZIgFAAIgGACIgGABIgFAAQgLABgHgFgAAIAGIgXADIgKADIgKAFQgDADgDAEQgCAFAAAGQAAAGADAEQAEAEAEADIALADIAKAAIAMgBQAGgCAGgDQAGgDAEgHQAEgFAAgIIAAgaQgIAFgLABg");
	this.shape_5.setTransform(308.375,-193);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AACBlQgIgDgFgEQgEgFgCgJIgCgRIAAhcIgaAAIAAgaIAaAAIAAgwIAiAAIAAAwIAfAAIAAAaIgfAAIAABUIAAAJIACAGQACADAEACIAJABIAHAAIAHgBIAAAbIgLABIgLAAQgOAAgIgCg");
	this.shape_6.setTransform(294.925,-195.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgQBtIAAidIAhAAIAACdgAgQhLIAAghIAhAAIAAAhg");
	this.shape_7.setTransform(287.075,-196.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgSBPIg6idIAmAAIAoB4IAAAAIAnh4IAkAAIg5Cdg");
	this.shape_8.setTransform(276.225,-193);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AAiBRIAAhiQAAgTgIgIQgHgJgPAAQgJAAgGADQgIAEgFAFQgFAGgCAIQgDAHAAAJIAABcIgjAAIAAidIAhAAIAAAXIABABQAIgNANgIQAMgHAQAAQAaAAAOANQAQAOAAAbIAABrg");
	this.shape_9.setTransform(260.25,-193.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgSBtIAAjZIAlAAIAADZg");
	this.shape_10.setTransform(247.95,-196.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_invitations, new cjs.Rectangle(242.4,-216.3,140.29999999999998,39.20000000000002), null);


(lib.txt_Holidays = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgpCEQgWgFgRgLQgQgKgLgSQgLgQgBgbIBEAAQAAAMAEAJQAFAIAIAEQAHAGAKADIATACIAQgBIAPgHQAHgDAEgHQAFgFAAgKQAAgQgVgIQgWgIglgIIgegJQgPgEgLgHQgMgIgHgLQgHgMAAgRQAAgZAKgQQAKgQAQgKQAQgJAUgDQAUgEAVAAQAUAAAUAEQATAEAQAJQAPAKALAQQAKAQACAXIhEAAQgBgUgOgIQgOgGgSgBIgNABIgNAEIgKAHQgEAFAAAHQAAAKAHAGQAHAGALAEIAZAHIAeAGIAeAIQAPAGALAIQAMAHAHAMQAHAMAAASQAAAagLARQgKARgQALQgRALgVAEQgVAEgWAAQgWAAgVgEg");
	this.shape.setTransform(475.625,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AhVCuIgWgCIAAg7IAVADIAVAAQAOgBAGgKQAHgJAAgMQAAgJgDgHIhajyIBLAAIA6CwIABAAIA4iwIBJAAIhsEiQgLAggTANQgVANglAAg");
	this.shape_1.setTransform(449.9,32.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AhICEQgPgFgMgKQgNgJgGgOQgHgPAAgUQAAgWAIgOQAHgPAMgIQANgHAQgFIAggHIAfgDIAagFQANgDAGgGQAIgGgBgLQAAgLgDgHQgFgGgFgEQgHgEgJgBIgRgCQgUABgMAIQgMAJgCAWIhHAAQACgaAKgQQALgRARgKQASgKAVgEQAVgEAUAAIAoACQAUAEARAIQAQAHALAOQAKAPAAAXIAACGIACAiQACAPAFAJIhIAAIgDgNIgCgMQgRARgXAHQgWAHgYAAQgTAAgQgEgAAjAJIgPAEIgQADIgQACIgPAEIgOAGQgGAFgEAHQgDAGAAAKQAAAJADAHQAEAGAGAEIAOAGIARABQATAAAMgHQALgHAGgJQAFgKACgLIABgPIAAgbg");
	this.shape_2.setTransform(423.05,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AhBCrQgXgMgOgTQgOgTgIgZQgGgZgBgbQABgaAGgXQAIgZAOgSQAOgTAWgLQAVgLAdAAQAWAAAVAJQAVAKAMATIABAAIAAiCIBHAAIAAFkIhEAAIAAghIgBAAQgNAVgUAKQgUAJgZAAQgdAAgVgLgAgagdQgNAHgGAMQgIAKgDAPQgDAPgBAQQABAPADAPQADAPAJALQAHAMAMAIQALAHAQAAQASAAALgHQAMgHAHgMQAHgMADgPQADgPAAgQQAAgQgDgOQgDgPgHgLQgIgLgLgHQgMgHgRAAQgRAAgLAHg");
	this.shape_3.setTransform(393.7,23.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgiCzIAAkCIBGAAIAAECgAgih3IAAg7IBGAAIAAA7g");
	this.shape_4.setTransform(373.15,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgiCzIAAllIBFAAIAAFlg");
	this.shape_5.setTransform(360.9,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("Ag2B+QgZgJgRgSQgSgSgJgYQgKgZAAggQAAgeAKgZQAJgZASgSQARgSAZgKQAYgJAeAAQAeAAAZAJQAZAKARASQASASAJAZQAKAZAAAeQAAAggKAZQgJAYgSASQgRASgZAJQgZAKgeAAQgeAAgYgKgAgdhKQgMAHgHALQgIAMgDAPQgDAPAAAOQAAAQADAPQADAOAIAMQAHAMAMAHQAMAHARAAQASAAAMgHQAMgHAHgMQAIgMADgOQADgPAAgQQAAgOgDgPQgDgPgIgMQgHgLgMgHQgMgIgSAAQgRAAgMAIg");
	this.shape_6.setTransform(339.825,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("ABICzIAAiaIiPAAIAACaIhPAAIAAllIBPAAIAACJICPAAIAAiJIBPAAIAAFlg");
	this.shape_7.setTransform(306.675,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Holidays, new cjs.Rectangle(287.1,-9.1,202.5,61.7), null);


(lib.txt_holidayCards = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgaBMQgMgDgJgHQgJgGgFgKQgFgKAAgNIAhAAQABAPAKAFQAKAGAMAAIALAAIALgDQAFgDAEgDQADgEAAgGQgBgHgEgEQgEgEgHgDIgQgEIgRgEIgSgFQgIgCgHgFQgHgFgEgHQgEgIAAgLQAAgMAGgJQAGgJAJgFQAJgEAMgDQALgCAKAAQALAAAKACQALADAJAFQAIAHAGAJQAGAIABAMIgjAAQgCgLgJgFQgIgDgKAAIgJAAIgJACQgEACgDADQgDADAAAFQAAAGAEAEQAFAEAHACIAOAFIASADIASAGQAJADAHAEQAHAEAEAIQAEAHAAALQAAAOgGAJQgGAKgKAFQgKAHgMACQgMADgLAAQgOAAgMgEg");
	this.shape.setTransform(121.625,-191.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgiBkQgOgGgIgLQgJgLgFgPQgEgOAAgRQAAgUAGgOQAFgQAJgJQAJgJAMgGQAMgEAMAAIAOABIAOAFQAHADAFAEQAGAFAEAGIAAAAIAAhOIAiAAIAADQIggAAIAAgUIAAAAQgHANgNAGQgNAGgNAAQgSgBgNgGgAgSgVQgIAFgFAIQgFAIgCAJQgDAKAAAJQAAAKADAJQACAKAFAHQAGAHAHAFQAIAEAKAAQALAAAIgFQAIgEAFgHQAGgJACgJQADgJAAgKQAAgagMgNQgLgOgTABQgLAAgIAEg");
	this.shape_1.setTransform(104.675,-194.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgrBNIAAiWIAfAAIAAAeIABAAQABgHAEgGQAFgFAFgFQAGgFAHgDQAHgCAIgBIAIAAIAEABIAAAhIgHgBIgHgBQgIAAgIADQgHAEgGAGQgEAHgEAKQgDAJAAALIAABIg");
	this.shape_2.setTransform(92.125,-191.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AA2BQQgKAAgHgFQgGgDgCgLQgKAKgPAEQgNAFgOAAQgKAAgJgDQgKgDgHgGQgHgFgEgIQgEgIAAgLQAAgOAFgKQAFgIAIgEQAJgFAKgCIAVgDIAQgDIAOgDQAHgCADgDQAEgEAAgHQAAgHgDgEQgDgDgFgDIgKgDIgJAAQgOgBgJAHQgJAGgBAMIgiAAQABgPAGgJQAGgKAKgHQAJgFAMgDQAMgCANAAQAKAAALACQALADAIAFQAJAFAFAJQAFAIAAAMIAABNQAAAGACACQACADAEAAIAEAAIAEAAIAAAXIgEABIgGACIgGABgAAHAGIgVADIgKACIgJAFQgEADgCAEQgCAFAAAGQAAAGADAEQADADAFACIAKAEIAKAAIALgBQAGgBAGgEQAFgEAEgFQAEgGAAgHIAAgZQgIAFgLABg");
	this.shape_3.setTransform(78.225,-191.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgkBlQgSgJgNgPQgNgPgGgUQgIgUABgWQgBgVAIgUQAGgUANgPQANgPASgJQATgIAWAAQASAAAQAEQAPAFAMAJQAMAKAHANQAIANACARIglAAQgDgJgEgIQgEgHgGgGQgHgGgJgDQgIgDgMAAQgPAAgMAHQgMAHgIALQgHALgEAPQgEAOAAAOQAAAPAEAOQAEAOAHAMQAIALAMAHQAMAGAPAAQANAAAJgEQAKgEAGgIQAHgHAEgKQADgKACgLIAkAAQgBASgIAQQgHAPgLAMQgLALgQAGQgRAGgTAAQgWAAgTgIg");
	this.shape_4.setTransform(59.3,-194.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("Ag8BoIAAgcIAIABIAIABQAGgBAEgBQAEgBACgDIAEgHIAEgJIAEgLIg6iWIAlAAIAmBwIABAAIAmhwIAjAAIg7CeIgIAUQgEAJgFAIQgFAHgJAEQgIAEgNABQgMgBgMgBg");
	this.shape_5.setTransform(33.175,-188.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AA2BQQgKAAgHgFQgGgDgCgLQgKAKgPAEQgNAFgOAAQgKAAgJgDQgKgDgHgGQgHgFgEgIQgEgIAAgLQAAgOAFgKQAFgIAIgEQAJgFAKgCIAVgDIAQgDIAOgDQAHgCADgDQAEgEAAgHQAAgHgDgEQgDgDgFgDIgKgDIgJAAQgOgBgJAHQgJAGgBAMIgiAAQABgPAGgJQAGgKAKgHQAJgFAMgDQAMgCANAAQAKAAALACQALADAIAFQAJAFAFAJQAFAIAAAMIAABNQAAAGACACQACADAEAAIAEAAIAEAAIAAAXIgEABIgGACIgGABgAAHAGIgVADIgKACIgJAFQgEADgCAEQgCAFAAAGQAAAGADAEQADADAFACIAKAEIAKAAIALgBQAGgBAGgEQAFgEAEgFQAEgGAAgHIAAgZQgIAFgLABg");
	this.shape_6.setTransform(17.875,-191.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgiBkQgOgGgIgLQgJgLgFgPQgEgOAAgRQAAgUAGgOQAFgQAJgJQAJgJAMgGQAMgEAMAAIAOABIAOAFQAHADAFAEQAGAFAEAGIAAAAIAAhOIAiAAIAADQIggAAIAAgUIAAAAQgHANgNAGQgNAGgNAAQgSgBgNgGgAgSgVQgIAFgFAIQgFAIgCAJQgDAKAAAJQAAAKADAJQACAKAFAHQAGAHAHAFQAIAEAKAAQALAAAIgFQAIgEAFgHQAGgJACgJQADgJAAgKQAAgagMgNQgLgOgTABQgLAAgIAEg");
	this.shape_7.setTransform(0.175,-194.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgQBoIAAiWIAhAAIAACWgAgQhHIAAghIAhAAIAAAhg");
	this.shape_8.setTransform(-11.85,-194.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgPBoIAAjQIAfAAIAADQg");
	this.shape_9.setTransform(-18.8,-194.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgfBJQgOgGgKgKQgKgLgFgOQgFgPAAgRQAAgQAFgPQAFgOAKgMQAKgKAOgGQAOgFARgBQASABAOAFQAPAGAJAKQAKAMAFAOQAFAPAAAQQAAARgFAPQgFAOgKALQgJAKgPAGQgOAGgSABQgRgBgOgGgAgSgwQgIAFgGAIQgFAHgCAKQgDAJAAAJQAAAKADAJQACAJAFAJQAGAHAIAEQAIAFAKAAQALAAAIgFQAJgEAFgHQAFgJADgJQACgJAAgKQAAgJgCgJQgDgKgFgHQgFgIgJgFQgIgEgLAAQgKAAgIAEg");
	this.shape_10.setTransform(-30.875,-191.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AAwBoIAAhdIhfAAIAABdIgkAAIAAjQIAkAAIAABTIBfAAIAAhTIAkAAIAADQg");
	this.shape_11.setTransform(-50.05,-194.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_holidayCards, new cjs.Rectangle(-61.9,-213.7,192.4,37.5), null);


(lib.txt_comesWith = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AArBUQgGgGAAgOQgMAOgPAGQgPAGgSAAQgMAAgKgDQgLgCgHgGQgIgGgEgJQgFgJAAgNQAAgPAFgJQAFgJAIgGQAJgFAKgDIAVgFIAWgDIASgEQAIgCAFgEQAEgEAAgIQAAgKgDgFQgEgGgFgDQgGgDgGgBIgNgBQgSAAgMAHQgMAHgBATIgcAAQABgQAGgLQAGgLAKgHQAJgHANgDQANgDAPAAIAWACQALACAKAFQAJAFAGAJQAFAJAAAPIAABYIACAOQABAFAGAAIAJgBIAAAWQgHAEgNAAQgLAAgHgGgAAVADIgSADIgSADQgKABgHAEQgIADgFAGQgFAGAAALQAAAHADAEQADAFAEADQAFADAGACIAMABQAOAAAJgEQAKgEAHgGQAGgFADgHQADgHAAgGIAAgcQgFADgJACg");
	this.shape.setTransform(132.875,-5.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AArB3IAAh1QAAgPgKgJQgJgJgQAAQgMAAgKAEQgJAEgHAHQgGAHgDAJQgDAKAAAMIAABhIgcAAIAAjtIAcAAIAABbIAAAAQAEgIAGgFQAGgGAHgDIAQgGIAPgBQARAAALAEQALAFAHAIQAHAJADALQADAMAAANIAABxg");
	this.shape_1.setTransform(104.525,-8.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAYBwIgSgCQgIgBgEgEQgFgEgCgIQgCgHgBgMIAAhsIgdAAIAAgZIAdAAIAAg0IAcAAIAAA0IAiAAIAAAZIgiAAIAABpIABAIQAAAEADABIAGACIALABIANAAIAAAZg");
	this.shape_2.setTransform(89.35,-7.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgNB3IAAirIAbAAIAACrgAgNhTIAAgjIAbAAIAAAjg");
	this.shape_3.setTransform(80.5,-8.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAjBWIgiiIIgBAAIghCIIgfAAIg4irIAgAAIAnCMIABAAIAiiMIAeAAIAkCMIAAAAIAoiMIAdAAIg3Crg");
	this.shape_4.setTransform(63.9,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AggBTQgPgGgKgMQgLgMgFgRQgFgRgBgTQAAgTAGgQQAGgRALgMQALgLAPgHQAOgHARAAQAXAAAPAKQAPAJAJAPQAKAPADARQAEARgBAPIiAAAQAAALADAKQADAKAHAIQAGAIAKAFQALAEANAAQASAAALgIQAMgIADgRIAcAAQgFAdgUAOQgTAPgdAAQgUAAgPgHgAgTg8QgJAEgHAGQgGAHgDAJQgEAJgBAKIBiAAQgBgKgDgJQgEgJgHgHQgGgGgJgEQgJgEgKAAQgKAAgJAEg");
	this.shape_5.setTransform(32.7531,-5.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("ABdBYIAAhwIgCgPQgCgGgDgGQgEgFgHgDQgGgDgKAAQgVAAgMAMQgMAMAAAUIAABqIgbAAIAAhwIgBgPQgCgHgEgFQgDgGgHgCQgGgDgKAAQgMAAgJAFQgJAFgFAHQgFAHgDAIQgDAHAAAFIAABqIgcAAIAAirIAbAAIAAAaIAAAAQAUgeAkAAQAQAAANAGQAMAIAGAQQAIgOAOgJQAOgHASAAQAMAAALADQALADAHAGQAHAFAFAKQAEAKgBANIAAB9g");
	this.shape_6.setTransform(9.1,-5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgjBTQgPgHgLgMQgLgMgFgQQgGgRAAgTQAAgSAGgQQAFgRALgMQALgMAPgHQAPgHAUAAQAUAAAQAHQAQAHAKAMQALAMAFARQAGAQAAASQAAATgGARQgFAQgLAMQgKAMgQAHQgQAHgUAAQgUAAgPgHgAgUg7QgKAEgHAIQgIAIgDANQgEAMgBAOQABAQAEAMQADAMAIAJQAHAIAKAEQAKAEAKAAQALAAAKgEQAKgEAHgIQAHgJAFgMQADgMAAgQQAAgOgDgMQgFgNgHgIQgHgIgKgEQgKgFgLAAQgKAAgKAFg");
	this.shape_7.setTransform(-14.95,-5.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgsBzQgVgKgNgQQgOgRgHgXQgGgWAAgaQAAgZAHgXQAHgXAOgRQAOgRAWgKQAVgJAaAAQATAAAQAFQARAEANAKQANAKAJAOQAIAPADATIggAAQgFgagSgMQgSgNgZAAQgVAAgPAIQgPAIgKAOQgKANgEARQgFASAAASQAAAUAFASQAEASAKANQAKAOAPAIQAQAIAUAAQAQAAAMgFQAMgFAJgKQAJgJAFgMQAFgNABgPIAfAAQgEAtgbAZQgaAZguAAQgaAAgVgJg");
	this.shape_8.setTransform(-36.725,-8.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_comesWith, new cjs.Rectangle(-49.8,-29.3,202.2,40.7), null);


(lib.txt_cartridges = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AG2DIQgSgEgOgJQgOgJgKgOQgJgNgBgUIA+AAQAEASANAHQANAGAQAAQAbAAAMgQQAMgPAAgZIAAgeIgBAAQgKASgTAJQgTAJgVAAQgZAAgTgJQgSgKgMgPQgMgQgGgVQgFgVAAgWQAAgWAHgVQAGgUAMgQQANgPASgKQASgJAYAAQAWAAARAIQARAJAMAUIABAAIAAgfIA7AAIAADVQAAANgDASQgEASgNAPQgMAPgXALQgYAKgnAAQgRAAgRgEgAHHg/QgKAGgGAJQgHAJgCAMQgDALAAANIACAXQACANAGAJQAGAKAKAGQAKAGAOAAQAOAAAKgFQAKgFAHgJQAGgJAEgLQADgLAAgNQAAgNgDgMQgDgNgGgKQgGgJgKgGQgKgGgQAAQgNAAgJAFgAvhBxQgdgNgUgWQgTgWgLgeQgKgcAAgjQAAgjAKgeQALgeATgXQAUgXAdgMQAdgNAkAAQAaAAAXAHQAYAIASAOQASAPAMAVQAMAVADAbIhDAAQgCgMgGgKQgGgKgJgHQgJgIgMgEQgMgEgNAAQgXAAgQAJQgRAJgKAPQgKAPgFAUQgEATAAAVQAAAUAEASQAFASAKAPQAKAQARAIQAQAJAXAAQAgAAASgTQASgTAEgfIBDAAQgDAdgLAXQgLAYgSARQgSARgYAJQgZAIgdAAQgkAAgdgMgAOsB4QgTgEgOgJQgPgJgJgQQgKgPgBgXIA8AAQAAAKAEAIQAEAHAHAEQAGAFAJACIASADIAOgCIANgFQAGgDAEgGQAEgFAAgJQAAgOgTgHQgTgHghgHIgbgHQgNgEgKgHQgKgGgGgKQgHgLAAgPQAAgWAJgOQAJgOAOgIQAOgIARgEQASgDATAAQASAAASAEQARADAOAIQANAJAJAOQAJAOACAVIg7AAQgCgSgMgHQgNgGgQAAIgMABIgLACIgJAHQgDAEAAAHQAAAIAGAGQAGAFAKADIBMAUQANAEAKAGQAKAIAGAKQAGALAAAQQAAAWgJAQQgJAPgOAJQgPAKgTADQgSAEgUAAQgUAAgTgEgAKyBzQgWgIgPgQQgPgQgIgWQgJgWAAgaQAAgZAJgWQAIgWAQgQQAPgQAWgKQAVgJAaAAQAdAAAWALQAVAMAOATQAOASAGAZQAGAYgBAZIilAAQABAfAPAOQAOANAaAAQATAAAOgJQANgKAEgKIA3AAQgOApgbARQgbASgnAAQgbAAgVgJgALHg/QgKAFgGAIQgFAHgDAJIgDAPIBmAAQgEgYgMgMQgLgNgXAAQgPAAgKAFgACYByQgTgKgNgRQgMgRgHgWQgGgWAAgYQAAgWAGgVQAHgWAMgQQANgQATgKQATgKAZAAQAUAAATAJQASAIAKARIABAAIAAhzIA/AAIAAE6Ig8AAIAAgdIgBAAQgLATgRAIQgSAIgXAAQgZAAgUgKgAC7g+QgLAHgGAKQgHAKgDANQgDANAAANQAAANAEANQADAOAHAKQAGAKALAHQAKAGAPAAQAPAAAKgGQALgGAGgKQAGgLADgNQACgNAAgOQAAgOgCgMQgDgOgGgJQgHgKgKgHQgKgGgPAAQgQAAgKAGgArKB4QgOgEgLgIQgKgJgGgMQgGgNAAgSQAAgTAHgNQAHgNAKgHQALgGAOgEIBQgOQALgCAGgFQAGgFAAgKQAAgKgEgGQgDgGgFgDQgGgEgHgBIgQgBQgSAAgLAIQgLAIgBASIg/AAQABgWAKgOQAKgPAPgJQAPgJASgDQATgEATAAIAjADQASACAOAHQAPAHAJANQAJAMAAAVIACCTQACAOAEAHIg/AAIgDgLIgCgLQgPAQgUAGQgUAGgWAAQgQAAgOgEgAprAMIg4ALIgMAGQgFAEgDAGQgEAGAAAIQAAAJAEAFQADAGAFADIAMAFIAPACQASAAALgHQAKgGAEgIQAFgJABgJIACgOIAAgXgAkFB2QgNgBgKgGQgKgGgFgLQgGgKAAgRIAAiGIgmAAIAAgqIAmAAIAAhEIA+AAIAABEIAuAAIAAAqIguAAIAABwQAAAQAGAFQAFAGAQAAIAKgBIAJgBIAAAwIgRACgAAAB2IAAjjIA/AAIAADjgAipB2IAAjjIA7AAIAAArIABAAQAEgLAIgJQAHgJAKgGQAKgHALgDQALgEAMAAIAOACIAAA6IgXgCQgRAAgMAGQgMAGgHAKQgIAKgDANQgDAMAAAQIAABmgAn1B2IAAjjIA8AAIAAArIAAAAQAFgLAHgJQAIgJAKgGQAJgHALgDQALgEAMAAIAOACIAAA6IgXgCQgRAAgMAGQgMAGgHAKQgHAKgDANQgDAMAAAQIAABmgAgJiQIAAg0IA+AAIAAA0g");
	this.shape.setTransform(301.925,57.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridges, new cjs.Rectangle(190.4,-68.9,222.49999999999997,147.2), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgjBaQgQgIgLgNQgLgMgFgSQgGgSgBgVQAAgVAHgRQAGgSAMgNQALgMAQgIQAQgHASAAQAZAAAQAKQARAKAJAQQAKAQAEATQAEASgBAQIiKAAQAAAMADALQAEALAHAJQAHAIALAFQALAFAOAAQATAAANgJQAMgJAEgSIAeAAQgGAfgVAQQgUAQggAAQgVAAgRgHgAgVhBQgJAEgHAHQgHAIgEAJQgEAKgBAKIBqAAQgBgKgEgKQgEgKgHgHQgHgHgKgEQgJgEgLAAQgLAAgKAEg");
	this.shape.setTransform(473.9031,73.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgjBaQgQgIgLgNQgLgMgFgSQgGgSgBgVQAAgVAHgRQAGgSAMgNQALgMAQgIQAQgHASAAQAZAAAQAKQARAKAJAQQAKAQAEATQAEASgBAQIiKAAQAAAMADALQAEALAHAJQAHAIALAFQALAFAOAAQATAAANgJQAMgJAEgSIAeAAQgGAfgVAQQgUAQggAAQgVAAgRgHgAgVhBQgJAEgHAHQgHAIgEAJQgEAKgBAKIBqAAQgBgKgEgKQgEgKgHgHQgHgHgKgEQgJgEgLAAQgLAAgKAEg");
	this.shape_1.setTransform(455.3531,73.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgwBfIAAi5IAdAAIAAAnIABAAQALgWAPgLQAQgLAZABIAAAgQgTAAgNAFQgMAFgHAKQgIAKgEAOQgDANAAARIAABTg");
	this.shape_2.setTransform(441.425,73.3708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgTCCIAAieIgfAAIAAgbIAfAAIAAgbQAAgXANgMQAMgMAaABIAJABIAKABIAAAbIgIgCIgJAAQgLgBgHAFQgFAEgBAMIAAAaIAkAAIAAAbIgkAAIAACeg");
	this.shape_3.setTransform(430,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("Ag1AWIAAgrIBrAAIAAArg");
	this.shape_4.setTransform(417.45,72.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgkBaQgSgGgMgNQgMgNgHgSQgGgSAAgWQAAgUAGgSQAHgRANgNQAMgNASgIQARgIAUAAQAYAAASAKQARAJALAPQAMAQAFATQAFAUgCAVIiEAAQABAZALALQAMAKAUABQAPgBAMgHQALgIACgJIAtAAQgLAigWAPQgWAOgggBQgVABgRgIgAgSg2QgIAFgFAFQgFAHgCAGIgCAMIBRAAQgDgTgJgKQgKgKgSAAQgLAAgIAEg");
	this.shape_5.setTransform(399.7423,73.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgfB/QgOgEgLgHQgNgHgHgLQgHgLgCgQIAyAAQAEAOALAGQAKAFAMAAQAWAAAKgNQAKgNAAgTIAAgZIgBAAQgIAPgQAHQgOAHgQAAQgWAAgOgIQgQgHgJgMQgKgNgFgQQgEgRAAgTQAAgSAFgRQAGgRAJgMQALgNAPgIQAOgHAUAAQARAAAOAHQAOAGAJARIABAAIAAgZIAwAAIAACsQAAAMgDAOQgDAOgKANQgKAMgTAJQgTAIgfAAQgNAAgPgDgAgRhWQgIAEgFAHQgFAIgCAJQgDAJAAALIACAUQACAKAFAIQAEAHAJAEQAIAFAKAAQALAAAIgEQAJgEAFgHQAFgGADgKQACgJABgKQAAgLgCgLQgDgKgEgIQgGgHgIgFQgIgFgNAAQgJAAgIAFg");
	this.shape_6.setTransform(377.95,76.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgvB6QgPgIgLgNQgKgOgFgSQgFgSAAgUQAAgSAFgQQAFgSAKgNQALgNAPgIQAPgJAVAAQAPAAAPAHQAPAHAJAOIAAAAIAAhdIAzAAIAAD/IgwAAIAAgYIgBAAQgJAPgOAHQgPAGgRAAQgVAAgQgIgAgTgUQgIAFgFAIQgGAHgCALQgCAKAAAMQAAALACAKQADALAFAJQAGAIAIAFQAJAFAKAAQANAAAIgFQAJgFAFgIQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgGgIgIgFQgIgFgNAAQgLAAgJAFg");
	this.shape_7.setTransform(355.925,69.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgYCAIAAi4IAxAAIAAC4gAgYhVIAAgqIAxAAIAAAqg");
	this.shape_8.setTransform(340.65,69.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("Ag7BfIAAi4IAwAAIAAAiIABAAQAEgIAGgIQAFgHAIgFQAIgFAJgDQAJgDAJAAIAMACIAAAvIgJgBIgKgBQgOAAgJAFQgKAFgGAIQgFAIgCAKQgDALAAAMIAABTg");
	this.shape_9.setTransform(329.875,72.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AAIB3QgKgBgIgFQgIgEgFgJQgFgJABgOIAAhsIggAAIAAgiIAgAAIAAg4IAxAAIAAA4IAmAAIAAAiIgmAAIAABbQABANAEAEQAEAEANABIAIgBIAIgBIAAAnIgPACIgPAAg");
	this.shape_10.setTransform(315.4,70.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("Ag7BfIAAi4IAwAAIAAAiIABAAQAEgIAGgIQAFgHAIgFQAIgFAJgDQAJgDAJAAIAMACIAAAvIgJgBIgKgBQgOAAgJAFQgKAFgGAIQgFAIgCAKQgDALAAAMIAABTg");
	this.shape_11.setTransform(303.125,72.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F1F1F").s().p("AgzBfQgLgEgJgGQgJgHgEgKQgFgLAAgOQAAgQAFgLQAGgKAJgGQAIgFAMgDIAWgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgEQgCgFgFgDQgEgDgGgBIgNgBQgOABgJAGQgIAHgCAOIgzAAQABgSAJgLQAHgMAMgHQANgHAPgDQAPgDAPgBIAcADQAOABAMAHQAMAFAHAKQAIALAAAQIAABfIABAZQACALADAGIgzAAIgCgJIgCgJQgMAMgRAGQgPAEgRAAQgNAAgMgCgAAZAGIgKADIgMACIgLACIgMADIgJAFQgEADgDAEQgCAFAAAIQAAAGACAEQADAFAEADIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgSg");
	this.shape_12.setTransform(284.675,73.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F1F1F").s().p("AgtB7QgYgKgQgSQgQgRgJgZQgIgYAAgcQAAgbAIgZQAJgYAQgTQAQgSAYgKQAXgLAdAAQAVAAATAGQATAGAOALQAPANAKAQQAKASACAWIg2AAQgCgJgFgIQgFgJgHgGQgIgGgJgEQgKgDgKAAQgSAAgOAIQgNAHgIANQgIAMgEAQQgEAQAAAPQAAAQAEAQQAEAPAIAMQAIAMANAHQAOAIASgBQAaAAAOgPQAPgQADgZIA2AAQgCAXgJAUQgJATgPAOQgOAOgUAGQgUAIgXAAQgdAAgXgLg");
	this.shape_13.setTransform(261.075,69.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(245.9,45.6,238.79999999999998,46.9), null);


(lib.txt_AndPhotos = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape.setTransform(651.175,-187.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgbBQQgNgEgJgHQgJgGgFgLQgGgKAAgOIAjAAQABAPAKAGQAKAGANABIALgBIAMgDQAGgCADgEQADgFAAgGQAAgHgFgFQgEgEgHgCIgRgFIgRgDIgTgGQgJgDgHgEQgHgFgEgIQgFgIAAgMQAAgMAHgKQAGgIAJgFQAKgGAMgCQALgCALAAQALAAALADQALACAJAGQAJAGAGAJQAGAKACANIgkAAQgDgNgJgFQgJgDgKAAIgJAAIgKACIgHAFQgDADAAAFQAAAHAEAEQAFAEAHACIAPAFIATADIATAGQAJADAHAFQAHAFAEAHQAFAIAAALQAAAOgGALQgHAJgKAGQgKAHgNACQgMADgMAAQgOAAgNgDg");
	this.shape_1.setTransform(639.825,-192.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AghBMQgOgFgKgMQgLgKgFgQQgFgPAAgSQAAgRAFgQQAFgOALgMQAKgLAOgGQAPgGASAAQATAAAPAGQAOAGALALQAKAMAFAOQAFAQAAARQAAASgFAPQgFAQgKAKQgLAMgOAFQgPAHgTAAQgSAAgPgHgAgTgyQgIAFgGAIQgFAIgDAJQgDAKAAAKQAAAKADAKQADAKAFAIQAGAIAIAEQAIAGALAAQAMAAAIgGQAJgEAFgIQAGgIACgKQADgKAAgKQAAgKgDgKQgCgJgGgIQgFgIgJgFQgIgEgMAAQgLAAgIAEg");
	this.shape_2.setTransform(623.525,-192.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AABBkQgHgCgEgFQgFgFgCgIIgCgRIAAhcIgaAAIAAgaIAaAAIAAgvIAiAAIAAAvIAfAAIAAAaIgfAAIAABTIAAAJIACAHQACADAEABIAJACIAHAAIAHgCIAAAbIgLACIgLAAQgOAAgJgDg");
	this.shape_3.setTransform(609.9,-195.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AghBMQgOgFgKgMQgLgKgFgQQgFgPAAgSQAAgRAFgQQAFgOALgMQAKgLAOgGQAPgGASAAQATAAAPAGQAOAGALALQAKAMAFAOQAFAQAAARQAAASgFAPQgFAQgKAKQgLAMgOAFQgPAHgTAAQgSAAgPgHgAgTgyQgIAFgGAIQgFAIgDAJQgDAKAAAKQAAAKADAKQADAKAFAIQAGAIAIAEQAIAGALAAQAMAAAIgGQAJgEAFgIQAGgIACgKQADgKAAgKQAAgKgDgKQgCgJgGgIQgFgIgJgFQgIgEgMAAQgLAAgIAEg");
	this.shape_4.setTransform(596.675,-192.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAiBsIAAhjQgBgRgHgJQgHgHgQAAQgHAAgHADQgIADgEAGQgFAFgDAHQgCAHgBAIIAABdIgiAAIAAjYIAiAAIAABRIABAAQAGgLANgHQANgHAOAAQAaAAAPANQAPAOAAAZIAABsg");
	this.shape_5.setTransform(579.65,-195.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AhUBsIAAjYIBfAAQAXAAAOAHQAPAHAIAKQAIAKADALQADAMAAALQAAAKgDALQgDAMgIAJQgIAKgPAGQgOAHgXAAIg5AAIAABTgAgugFIA3AAIANgBQAGgDAGgDQAGgEAEgHQACgIAAgKQABgLgDgGQgEgIgFgDQgEgEgHgCIgPgBIg3AAg");
	this.shape_6.setTransform(562.1,-195.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AghBnQgOgGgJgLQgIgMgFgPQgFgPAAgQQAAgRAFgOQAFgPAIgLQAJgLAOgHQANgGASAAIANABIANAEQAHADAHAFQAFAEAFAHIAAAAIAAhQIAbAAIAADYIgbAAIAAgVIAAAAQgGANgOAFQgOAGgPAAQgTAAgNgHgAgVgZQgKAFgFAJQgFAIgDAKQgCALAAAMQAAALADAKQACAKAHAJQAGAIAIAFQAKAFAMAAQANAAAIgGQAKgFAGgIQAFgIADgLQACgLAAgLQAAgLgCgLQgDgKgGgIQgGgIgJgFQgKgFgNAAQgMAAgJAFg");
	this.shape_7.setTransform(534.7,-195.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AAnBQIAAhpQAAgPgJgIQgHgJgPAAQgLABgJADQgJADgFAIQgGAGgDAJQgDAJAAALIAABXIgaAAIAAicIAYAAIAAAZIABAAQAQgcAiAAQAQgBAKAFQAKAEAHAHQAGAJADAKQACALAAAMIAABmg");
	this.shape_8.setTransform(518.35,-193.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AAoBNQgGgGAAgNQgLANgOAGQgNAFgRAAQgKAAgKgCQgKgDgHgFQgHgFgEgIQgEgJAAgMQAAgNAFgJQAEgIAIgFQAHgFAKgCIATgFIAUgDIARgDQAHgCAEgEQAEgEAAgHQAAgJgDgFQgDgFgFgDQgFgCgGgBIgMgBQgQAAgLAGQgLAGgBARIgaAAQABgOAFgKQAGgKAJgGQAJgHAMgCQALgDAOAAIAUABQAKACAJAFQAJAEAFAJQAFAIAAAOIAABQIABANQABAEAGAAIAIgBIAAAUQgHAEgMAAQgKAAgFgFgAATADIgQADIgRACQgJABgHADQgHADgEAGQgEAGAAAJQAAAHACAEQADAEAEADQAEADAFABIAMABQANAAAIgDQAJgEAGgFQAGgFACgGQADgHAAgFIAAgZQgFACgIACg");
	this.shape_9.setTransform(502.725,-192.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AndPhotos, new cjs.Rectangle(493,-216,163.20000000000005,38.900000000000006), null);


(lib.txt_amountOfInk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgRATIAAgkIAkAAIAAAkg");
	this.shape.setTransform(629.65,-47.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAoB4Ig7hbIgbAZIAABCIgdAAIAAjvIAdAAIAACNIBOhLIAmAAIhEA+IBJBvg");
	this.shape_1.setTransform(617.5,-57.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AArBZIAAh1QAAgQgJgJQgJgKgRAAQgMAAgKAFQgJADgHAIQgGAHgDAKQgDAKAAAMIAABhIgdAAIAAitIAbAAIAAAcIABAAQASggAlAAQARAAAMAFQALAFAHAIQAHAIADAMQADAMAAAOIAABxg");
	this.shape_2.setTransform(598.375,-54.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgPB4IAAjvIAfAAIAADvg");
	this.shape_3.setTransform(584.75,-57.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgSB5IAAiTIgdAAIAAgaIAdAAIAAgaQAAgVANgKQALgLAXAAIAKAAIAJADIAAAYIgIgCIgIAAQgLAAgFAEQgGAEAAALIAAAYIAiAAIAAAaIgiAAIAACTg");
	this.shape_4.setTransform(566.425,-57.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgjBUQgQgHgLgNQgKgMgGgQQgFgRAAgTQAAgSAFgQQAGgRAKgMQALgNAQgHQAQgHATAAQAVAAAPAHQAQAHALANQAKAMAGARQAFAQAAASQAAATgFARQgGAQgKAMQgLANgQAHQgPAHgVAAQgTAAgQgHgAgUg8QgKAEgHAJQgIAIgEAMQgEAMAAAPQAAAQAEAMQAEAMAIAJQAHAIAKAEQAKAFAKAAQALAAAKgFQAKgEAHgIQAIgJAEgMQAEgMAAgQQAAgPgEgMQgEgMgIgIQgHgJgKgEQgKgFgLAAQgKAAgKAFg");
	this.shape_5.setTransform(551.625,-53.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAZBxIgTgCQgHgBgFgEQgFgEgCgIQgDgHAAgMIAAhtIgdAAIAAgaIAdAAIAAg0IAcAAIAAA0IAiAAIAAAaIgiAAIAABqIABAIQAAADADACIAGACIALABIANAAIAAAZg");
	this.shape_6.setTransform(527.125,-56.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AArBZIAAh1QAAgQgJgJQgJgKgRAAQgMAAgKAFQgJADgHAIQgGAHgDAKQgDAKAAAMIAABhIgdAAIAAitIAbAAIAAAcIABAAQASggAlAAQARAAAMAFQALAFAHAIQAHAIADAMQADAMAAAOIAABxg");
	this.shape_7.setTransform(512.925,-54.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgoBUQgLgFgHgIQgHgIgDgMQgDgLAAgPIAAhxIAdAAIAAB1QAAAQAJAJQAKAKAQAAQAMAAAKgEQAJgEAHgIQAGgHADgKQADgKAAgMIAAhhIAdAAIAACtIgbAAIAAgcIgBAAQgJAQgOAIQgOAIgSAAQgRAAgMgFg");
	this.shape_8.setTransform(494.325,-53.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgjBUQgQgHgLgNQgKgMgGgQQgFgRAAgTQAAgSAFgQQAGgRAKgMQALgNAQgHQAQgHATAAQAVAAAPAHQAQAHALANQAKAMAGARQAFAQAAASQAAATgFARQgGAQgKAMQgLANgQAHQgPAHgVAAQgTAAgQgHgAgUg8QgKAEgHAJQgIAIgEAMQgEAMAAAPQAAAQAEAMQAEAMAIAJQAHAIAKAEQAKAFAKAAQALAAAKgFQAKgEAHgIQAIgJAEgMQAEgMAAgQQAAgPgEgMQgEgMgIgIQgHgJgKgEQgKgFgLAAQgKAAgKAFg");
	this.shape_9.setTransform(475.425,-53.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("ABdBZIAAhxIgBgPQgCgHgDgFQgEgGgHgCQgGgEgLAAQgUAAgMANQgNAMAAAUIAABrIgcAAIAAhxIAAgPQgCgHgEgGQgEgFgGgDQgGgDgJAAQgNAAgJAGQgJAFgFAHQgGAHgCAHQgDAIAAAFIAABrIgdAAIAAitIAbAAIAAAaIABAAQATgeAlAAQAQAAANAHQAMAHAGAQQAIgOAOgIQAPgIARAAQANAAAKADQALADAIAGQAHAGAFAKQADAJAAAOIAAB+g");
	this.shape_10.setTransform(451.55,-54.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AAsBUQgHgGAAgOQgMAOgPAGQgPAHgSAAQgMAAgKgDQgLgDgHgGQgJgFgEgKQgFgJABgNQAAgPAEgJQAGgJAIgGQAIgFALgDIAVgFIAWgEIASgDQAIgCAFgEQAFgFAAgIQAAgJgEgGQgDgGgGgCQgGgDgGgCIgNgBQgSAAgMAHQgMAHgBATIgdAAQABgQAGgLQAGgLAKgHQAKgHANgDQANgDAPAAIAWACQAMACAJAFQAJAFAGAJQAGAKAAAPIAABYIABAPQABAEAHAAIAJgBIAAAWQgIAFgNAAQgLAAgGgHgAAVADIgSADIgSADQgKABgIAEQgIADgEAGQgFAGAAALQAAAHACAFQAEAFAEADQAFADAFABIAOABQAOAAAIgDQAKgEAHgGQAGgGADgHQADgHAAgGIAAgcQgFADgJACg");
	this.shape_11.setTransform(428.6,-53.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_amountOfInk, new cjs.Rectangle(418.2,-78.2,217.3,41.2), null);


(lib.Shaq_EndFrame = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(626.65,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shaq_EndFrame, new cjs.Rectangle(626.7,-135,122,175), null);


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
	this.instance.setTransform(382.75,-538.6,0.9998,0.9998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(382.8,-538.6,280.90000000000003,221), null);


(lib.inkBottles_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(648.15,-198.25,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_1, new cjs.Rectangle(648.2,-198.2,128,104.79999999999998), null);


(lib.frame_04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame_03();
	this.instance.setTransform(468.55,-172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_04, new cjs.Rectangle(468.6,-172.2,320,264), null);


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
	this.instance.setTransform(496.25,-124.1,1.0323,1.0323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_02_1, new cjs.Rectangle(496.3,-124.1,330.3,255), null);


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
	this.instance.setTransform(519.1,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_01_1, new cjs.Rectangle(519.1,-120,301,245), null);


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
	this.shape.graphics.f("#2A3283").s().p("ABcBWQgSgGgKgOQgKgLgHgRQgFgRgBgUQABgUAFgQQAHgSAKgNQAKgMASgIQARgHAUgBQAVABAQAHQASAIAKAMQAMANAHASQAEAQAAAUQAAAUgEARQgHARgMALQgKAOgSAGQgQAJgVgBQgUABgRgJgABrg2QgKAEgGAJQgFAIgDAMQgCALAAALQAAALACALQADALAFAJQAGAIAKAFQAJAGANAAQAOAAAKgGQAIgFAGgIQAGgJACgLQADgLAAgLQAAgLgDgLQgCgMgGgIQgGgJgIgEQgKgHgOABQgNgBgJAHgAhLBbQgOgEgKgJQgLgGgHgOQgGgMABgPIAlAAQAAAJAFAHQACAEAHAFQADAFAIABQAIACAIAAIALgBQAGgBAGgEQAEAAADgHQAFgDAAgHQAAgGgGgGIgKgIIg6gQQgKgDgIgFQgFgGgHgJQgEgJAAgMQAAgOAHgKQAFgKAKgGQAKgIALgDQAMgDANgBQAPABALACQAOAEAJAIQALAGAFALQAFALAAARIgkAAQgBgJgCgGQgDgFgEgDQgHgDgGgBIgWgBQgFABgEADQgEADgCAEQgDADAAAGQAAAGACADQACACAFAEIA7AQQAIADAHAFQAKAFAGAJQAHAKAAAQQAAAMgFAJQgFANgJAHQgJAHgPAFQgNAFgRgBQgQABgOgEgAFaBaIhLh4IAAB4IglAAIAAiyIAnAAIBLB3IAAh3IAmAAIAACygAkgBaIAAiyIBSAAQAQgBALAFQANAFAHAIQAHAIADALQAFAKAAAKQAAAMgFAKQgDALgHAHQgHAIgNAEQgLAGgQABIgrAAIAAA/gAj5gEIAsgBQAGgBAFgDQAFgCAEgHQACgEAAgKQAAgHgCgGQgEgFgFgDQgFgDgGgBIgsgBgAnBBaIAAiyICHAAIAAAgIhgAAIAAAmIBZAAIAAAdIhZAAIAAAvIBiAAIAAAggAGpg1IgIgEIgEgHQgCgFAAgDQAAgFACgCQABgFADgDQADgDAFgBIAGgBIAHABQAGABABADQADADACAFIABAHIgBAIIgFAHQgBACgGACIgHABIgGgBgAGphXQgDACgBACQgDABgBAEIgBAGIABAGQABADADACQABADADABIAGAAIAGAAQADgBACgDQADgCAAgDIABgGIgBgGQAAgEgDgBQgCgCgDgCIgGAAIgGAAgAGzg9IgEgKIgEAAIAAAKIgDAAIAAgWIAHAAIAHABQADACAAADIgBACIgCADIgBABIgCAAIAGAKgAGrhLIAEAAIAEAAIAAgCIAAgBIAAgBIgIAAg");
	this.shape.setTransform(11,-1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-34,-10.6,90.1,18.9), null);


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
	this.instance.setTransform(105.95,-67.8,0.5023,0.5023);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(106,-67.8,95.4,36.199999999999996), null);


(lib.cartridge_mc_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cartridges_jpg
	this.instance = new lib.cartridges();
	this.instance.setTransform(429.7,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cartridge_mc_02, new cjs.Rectangle(429.7,-32.2,539,250), null);


(lib.cartridge_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cartridges_jpg
	this.instance = new lib.cartridges();
	this.instance.setTransform(426.75,-174.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cartridge_mc, new cjs.Rectangle(426.8,-174.7,539,250), null);


(lib.card_03_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_03();
	this.instance.setTransform(679.35,-115.2,0.8697,0.8697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_03_1, new cjs.Rectangle(679.4,-115.2,240.89999999999998,185.3), null);


(lib.card_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_02();
	this.instance.setTransform(401.85,-115.15,0.8526,0.8526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_02_1, new cjs.Rectangle(401.9,-115.1,236.10000000000002,181.6), null);


(lib.card_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_01();
	this.instance.setTransform(83.05,-48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_01_1, new cjs.Rectangle(83.1,-48.9,94,72), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E61404").s().p("AudE/Qg7gBAAg7IAAoFQAAg7A7gBIc6AAQA8ABAAA7IAAIFQAAA7g8ABgAIjAYQAAAjASARQATARAjAAQAiAAAUgRQATgRAAgjIAAhpIglAAIAABpQAAATgIAKQgIAIgUAAQgLABgHgEQgHgDgDgGQgFgEgBgHIgBh3IglAAgAGQhNQgPAGgLANQgLAMgFAQQgGARAAARQAAATAGARQAFAOALANQALAMAPAHQAQAHAUAAQAUAAAOgHQARgHAKgMQALgNAGgOQAFgRABgTQgBgRgFgRQgGgQgLgMQgKgNgRgGQgOgIgUAAQgUAAgQAIgAk3hNQgQAGgJANQgLAMgGAQQgGARgBARQABATAGARQAGAOALANQAJAMAQAHQAQAHAUAAQAPAAAOgFQAMgFAKgJQALgJAGgOQAFgLADgRIglAAQgDASgJAKQgLAKgQAAQgOAAgIgEQgJgGgFgIQgFgIgDgKQgDgKAAgLQAAgKADgLQADgKAFgIQAFgIAJgGQAIgFAOAAQAHAAAGADQAGACAFAEIAJAKQADAFABAGIAkAAQgCgOgGgLQgGgMgKgIQgKgHgNgFQgNgEgNAAQgUAAgQAIgAs6hNQgPAGgLANQgLAMgFAQQgHARABARQgBATAHARQAFAOALANQALAMAPAHQAQAHATAAQAPAAAOgFQANgFAKgJQAKgJAHgOQAFgLACgRIglAAQgCASgKAKQgKAKgRAAQgNAAgIgEQgIgGgGgIQgGgIgCgKQgDgKAAgLQAAgKADgLQACgKAGgIQAGgIAIgGQAIgFANAAQAHAAAGADQAHACAFAEQAFAEAEAGQADAFAAAGIAlAAQgCgOgGgLQgHgMgJgIQgKgHgOgFQgMgEgOAAQgTAAgQAIgALJgxIAzAAIAACJIAlAAIAAiJIA0AAIAAggIiMAAgACBgxIAzAAIAACJIAlAAIAAiJIAzAAIAAggIiLAAgABGBYIAlAAIAAipIglAAgAgQBYIhJhlIBEhEIgwAAIhCBGIAAhGIglAAIAACpIAlAAIAAg2IAVgWIA0BMIAuAAgAn8BYICBAAIAAgfIhcAAIAAgqIBSAAIAAgcIhSAAIAAgkIBaAAIAAggIh/AAgApGAPIAABJIAnAAIAAipIgnAAIAABCIhEAAIAAhCIgmAAIAACpIAmAAIAAhJgAGdA5QgIgGgGgIQgFgIgCgKQgDgKAAgLQAAgKADgLQACgKAFgIQAGgIAIgGQAKgFANAAQAMAAAJAFQAJAGAGAIQAFAIACAKQADALAAAKQAAALgDAKQgCAKgFAIQgGAIgJAGQgJAEgMAAQgNAAgKgEg");
	this.shape.setTransform(1117.5,-390.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuaDMIAAmXIc1AAIAAGXg");
	this.shape_1.setTransform(1119.4,-385.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-88.9,-422,1304.9,438.7), null);


// stage content:
(lib.Epson_EcoTank_Holiday_970x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).wait(354));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(686.35,134.5,0.6989,0.6989,0,0,0,1119.4,-387);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// ecoTank_Logo
	this.instance_2 = new lib.ecoTank_Logo();
	this.instance_2.setTransform(49.55,54.35,0.7693,0.7693,0,0,0,153.2,-46);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// txt_justFill
	this.instance_3 = new lib.txt_justFill();
	this.instance_3.setTransform(201.45,130.25,1.0956,1.0956,0,0,0,212.6,-25.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// Shaq_EndFrame
	this.instance_4 = new lib.Shaq_EndFrame();
	this.instance_4.setTransform(961.45,149.55,1.5131,1.5131,0,0,0,689.6,-35.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319).to({_off:false},0).to({x:881.45,alpha:1},5,cjs.Ease.quadOut).wait(36));

	// printer_mc
	this.instance_5 = new lib.printer_mc();
	this.instance_5.setTransform(473.3,133.8,0.8083,0.8083,0,0,0,521.2,-425.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// txt_AndPhotos
	this.instance_6 = new lib.txt_AndPhotos();
	this.instance_6.setTransform(105.45,323.45,1.086,1.086);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(276).to({_off:false},0).to({y:337.85,alpha:1},6,cjs.Ease.quadOut).wait(31).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_03
	this.instance_7 = new lib.card_03_1();
	this.instance_7.setTransform(882.85,136.45,0.4297,0.4297,0,0,0,805.1,-22.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(276).to({_off:false},0).to({y:123.65,alpha:1},6,cjs.Ease.quadOut).wait(31).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_invitations
	this.instance_8 = new lib.txt_invitations();
	this.instance_8.setTransform(99.7,326.7,1.086,1.086);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(270).to({_off:false},0).to({y:337.9,alpha:1},6,cjs.Ease.quadOut).wait(37).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_02_jpg
	this.instance_9 = new lib.card_02_1();
	this.instance_9.setTransform(577.8,142,0.4311,0.4311,0,0,0,523.4,-17.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(270).to({_off:false},0).to({y:127.6,alpha:1},6,cjs.Ease.quadOut).wait(37).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_holidayCards
	this.instance_10 = new lib.txt_holidayCards();
	this.instance_10.setTransform(95.85,324.6,1.086,1.086);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(264).to({_off:false},0).to({y:337.4,alpha:1},6,cjs.Ease.quadOut).wait(43).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_01
	this.instance_11 = new lib.card_01_1();
	this.instance_11.setTransform(158.85,151.9,1.086,1.086);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(264).to({_off:false},0).to({y:139.1,alpha:1},6,cjs.Ease.quadOut).wait(43).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_stressFree_02
	this.instance_12 = new lib.txt_stressFree_02();
	this.instance_12.setTransform(-49.9,-7.15,1.2941,1.2941);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(229).to({_off:false},0).to({x:-35.5,alpha:1},7,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(92));

	// txt_cartridgeFree
	this.instance_13 = new lib.txt_cartridgeFree();
	this.instance_13.setTransform(-16.65,38.4,1.2941,1.2941,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(232).to({_off:false},0).to({x:-2.25,alpha:1},7,cjs.Ease.quadOut).wait(22).to({alpha:0},6).to({_off:true},1).wait(92));

	// frame_04
	this.instance_14 = new lib.frame_04();
	this.instance_14.setTransform(186.4,165.35);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(229).to({_off:false},0).to({alpha:1},7,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(92));

	// txt_comesWith
	this.instance_15 = new lib.txt_comesWith();
	this.instance_15.setTransform(105.8,138.15);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// txt_ridiculous
	this.instance_16 = new lib.txt_ridiculous();
	this.instance_16.setTransform(106.65,162.75);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// txt_amountOfInk
	this.instance_17 = new lib.txt_amountOfInk();
	this.instance_17.setTransform(108.1,187.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// inkBottles
	this.instance_18 = new lib.inkBottles_1();
	this.instance_18.setTransform(820.9,126.35,1,1,0,0,0,713,-146);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// Layer_30
	this.instance_19 = new lib.ecoTank_Logo();
	this.instance_19.setTransform(-68.85,218.6,2.1407,2.1407);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// txt_printers
	this.instance_20 = new lib.txt_printers();
	this.instance_20.setTransform(-6.1,193.4,1.4346,1.4346);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// printer_mc
	this.instance_21 = new lib.printer_mc();
	this.instance_21.setTransform(702.15,129.1,0.7035,0.7035,0,0,0,524.3,-426.7);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// txt_Printing
	this.instance_22 = new lib.txt_Printing();
	this.instance_22.setTransform(145,73.45);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115).to({_off:false},0).to({x:150.5,alpha:1},10,cjs.Ease.quadOut).wait(20).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_outOf
	this.instance_23 = new lib.txt_outOf();
	this.instance_23.setTransform(143.1,40.7);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(110).to({_off:false},0).to({x:148.6,alpha:1},10,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_takingThe
	this.instance_24 = new lib.txt_takingThe();
	this.instance_24.setTransform(139.85,41.05);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(71).to({_off:false},0).to({x:148.35,alpha:1},7,cjs.Ease.quadOut).wait(24).to({x:153.85,alpha:0},6,cjs.Ease.quadOut).to({_off:true},3).wait(249));

	// txt_cartridges
	this.instance_25 = new lib.txt_cartridges();
	this.instance_25.setTransform(140,73.55);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(74).to({_off:false},0).to({x:148.5,alpha:1},7,cjs.Ease.quadOut).wait(23).to({x:154,alpha:0},6,cjs.Ease.quadOut).to({_off:true},1).wait(249));

	// cartridge_mc
	this.instance_26 = new lib.cartridge_mc();
	this.instance_26.setTransform(149.75,175.1);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(71).to({_off:false},0).to({alpha:1},9).wait(22).to({alpha:0},6).to({_off:true},3).wait(249));

	// cartridge_mc
	this.instance_27 = new lib.cartridge_mc_02();
	this.instance_27.setTransform(149.75,175.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(80).to({_off:false},0).wait(65).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_outOfThe
	this.instance_28 = new lib.txt_outOfThe();
	this.instance_28.setTransform(66.75,70.75);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(34).to({_off:false},0).to({x:76.75,alpha:1},7,cjs.Ease.quadOut).wait(24).to({alpha:0},6).to({_off:true},1).wait(288));

	// txt_Holidays
	this.instance_29 = new lib.txt_Holidays();
	this.instance_29.setTransform(69.1,101.75);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(38).to({_off:false},0).to({x:79.1,alpha:1},8,cjs.Ease.quadOut).wait(19).to({alpha:0},6).to({_off:true},1).wait(288));

	// frame_02
	this.instance_30 = new lib.frame_02_1();
	this.instance_30.setTransform(149.7,124.8);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(34).to({_off:false},0).to({alpha:1},7,cjs.Ease.quadOut).wait(24).to({alpha:0},6).to({_off:true},1).wait(288));

	// txt_takeThe
	this.instance_31 = new lib.txt_takeThe();
	this.instance_31.setTransform(59.15,72.35);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({x:74.15,alpha:1},6,cjs.Ease.quadOut).wait(22).to({alpha:0},5,cjs.Ease.quadOut).to({_off:true},1).wait(326));

	// txt_stress
	this.instance_32 = new lib.txt_stress();
	this.instance_32.setTransform(69.1,103.1);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(4).to({_off:false},0).to({x:77.1,alpha:1},5,cjs.Ease.quadOut).wait(19).to({alpha:0},5,cjs.Ease.quadOut).to({_off:true},1).wait(326));

	// frame_01
	this.instance_33 = new lib.frame_01_1();
	this.instance_33.setTransform(150.2,124.8);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({alpha:1},5).wait(23).to({alpha:0},5).to({_off:true},1).wait(326));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_1.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(484,118.2,634.5,274.7);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 970,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"card_01.jpg", id:"card_01"},
		{src:"card_02.jpg", id:"card_02"},
		{src:"card_03.jpg", id:"card_03"},
		{src:"cartridges.jpg", id:"cartridges"},
		{src:"ecoTank.png", id:"ecoTank"},
		{src:"frame_01.jpg", id:"frame_01"},
		{src:"frame_02.jpg", id:"frame_02"},
		{src:"frame_03.jpg", id:"frame_03"},
		{src:"inkBottles.jpg", id:"inkBottles"},
		{src:"printer.jpg", id:"printer"},
		{src:"shaq_endFrame.jpg", id:"shaq_endFrame"}
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