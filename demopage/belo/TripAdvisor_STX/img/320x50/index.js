(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.bar_img = function() {
	this.initialize(img.bar_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,772);


(lib.ctaBtn = function() {
	this.initialize(img.ctaBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,38);


(lib.server = function() {
	this.initialize(img.server);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,280);


(lib.server_image = function() {
	this.initialize(img.server_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,403);


(lib.shoppingBG = function() {
	this.initialize(img.shoppingBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,664);


(lib.townsquare1 = function() {
	this.initialize(img.townsquare1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,480);


(lib.woman_px = function() {
	this.initialize(img.woman_px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,397);// helper functions:

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


(lib.txt_shortDrive = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgbCOIgVg/IgVA/IgHAAIgbhOIAJAAIAWBAIAVhAIAHAAIAVBAIAWhAIAIAAIgaBOgACvCNIAAgLIAKAAIAAALgAB/CNIAAgeIghgvIALAAIAaAnIAagnIAKAAIggAvIAAAegABSCNIgJgUIgqAAIgJAUIgJAAIAjhNIAIAAIAjBNgABFBxIgRgnIgSAnIAjAAgAh3CNIgJgUIgpAAIgKAUIgIAAIAihNIAIAAIAjBNgAiDBxIgRgnIgSAnIAjAAgAjQAQQgKgLgBgQQABgQAKgMQAMgMARAAQARAAALAMQALAMAAAQQAAAQgLALQgLAMgSAAQgRAAgLgMgAjJghQgJAJAAANQAAANAJAJQAJAJANAAQANAAAJgJQAIgJAAgNQAAgNgIgJQgKgKgNAAQgNAAgIAKgAluAQIAEgHQANALAOAAQAIAAAFgEQAEgDAAgGQAAgGgDgCQgFgDgMgDQgOgDgFgFQgHgFAAgJQAAgJAIgGQAGgGAMAAQAPAAAMAJIgGAHQgKgJgLAAQgIAAgFAEQgEAEAAAFQAAAGAEADQAEADANADQANADAGAFQAGAFAAAIQAAAKgIAGQgGAGgMAAQgSAAgNgMgAEDAbIghhMIAKAAIAbBBIAchBIAJAAIgiBMgAE3AbIAAhMIA4AAIAAAIIgvAAIAAAaIAqAAIAAAIIgqAAIAAAaIAvAAIAAAIgADNAbIAAhMIAJAAIAABMgAC2AbIgXgdIgWAAIAAAdIgIAAIAAhMIAgAAQANAAAIAGQAIAGAAALQgBAJgFAGQgGAGgKABIAYAfgACJgKIAXAAQAKAAAFgEQAGgFAAgHQgBgHgFgEQgFgEgJAAIgYAAgAAvAbIAAhMIAaAAQASAAAMALQALALAAAQQAAAQgLALQgMALgSAAgAA3ATIASAAQAPAAAIgJQAJgJAAgMQAAgNgJgIQgIgJgPAAIgSAAgAgeAbIAAhEIgZAAIAAgIIA7AAIAAAIIgZAAIAABEgAhIAbIgWgdIgXAAIAAAdIgIAAIAAhMIAhAAQANAAAHAGQAIAGAAALQAAAJgGAGQgFAGgKABIAYAfgAh1gKIAYAAQAJAAAGgEQAFgFAAgHQAAgHgFgEQgFgEgKAAIgYAAgAjyAbIAAgiIgsAAIAAAiIgJAAIAAhMIAJAAIAAAiIAsAAIAAgiIAIAAIAABMgAgkhcIAEgFQAJAIAKAAQAGAAADgCQAEgDAAgEQAAgFgDgCQgDgCgIgCQgLgCgEgEQgFgEABgHQgBgGAGgFQAFgEAIAAQAMAAAHAHIgEAFQgHgGgIAAQgGAAgDACQgDADAAAEQAAAEADACQADADAJACQAKACADAEQAEAEAAAGQAAAHgFAFQgEAEgJAAQgNAAgKgJgAhUhZQgHgHAAgLIAAghIAHAAIAAAgQAAAJAFAFQAEAFAIAAQAIAAAEgEQAFgFAAgJIAAghIAHAAIAAAgQAAAMgHAHQgGAGgLAAQgKAAgHgGgAiIhdIAFgEQAGAIAHAAQAFAAADgDQADgEAAgGIAAgmIAGAAIAAAmQAAAJgEAFQgFAFgIAAQgLAAgHgKgACChUIgHgPIgeAAIgIAPIgGAAIAag5IAGAAIAaA5gAB5hoIgNgdIgNAdIAaAAgAAehUIAAgyIgTAAIAAgGIAtAAIAAAGIgTAAIAAAyg");
	this.shape.setTransform(-14.4,-216.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shortDrive, new cjs.Rectangle(-51.1,-231,73.5,28.30000000000001), null);


(lib.txt_shopping = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(52.85,-52.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shopping, new cjs.Rectangle(-63.1,-76.7,231.9,49.300000000000004), null);


(lib.txt_highestStandard = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-8.925,-4.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highestStandard, new cjs.Rectangle(-206.1,-32.2,394.4,54.800000000000004), null);


(lib.txt_escape = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(36.05,-40.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_escape, new cjs.Rectangle(-66.6,-65.6,205.29999999999998,49.8), null);


(lib.STX_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AuiCaIimBKIBMilIirg/ICrhBIhLikICkBKIBBioIBCCnICjhIIhHCjIClBBIimBAIBHClIilhKIg6CaIAAABIgBAAIgFAOgAuYCWIAwCDIAAiYgAtdEYIAxiBIgxgWgAwmDKICBg5IgJgZIgkAAIAAgBgAseCSIB6A3IhPhRIgiAAgAqWDIIg5iFIgYAJIAAAnIgDAAgAwtDCIBUhTIAAgjIgZgKgAsoCOIAIgWIg3AAgAubCMIAtgUIg1AAgAsRBuIAUAAIgOgOgAu0hRIgaAKIAACMIAcAKIALAfICLAAIALgdIAggMIAAiMIgdgMIgLgbIiQAAgAvJBuIAXAAIgGgRgAsFBYIAUATIAAgbgAvOBlIAPgQIgPgGgArnBBIAUgHIgUgugAvtA5IAUAIIABg2gArKA2ICCgxIiWgBgAv3A1IAWgwIibgBgAregFICVABIiAgzgAx8gFICcABIgYgzgArngLIAVgwIgVgIgAvug7IAWAwIAAg5gArnhxIAAAjIAZAKIA1h5gAvzhEIAbgLIAAgfIhVhXgAsAhYIAPAGIABgVgAvOhSIANgFIgNgNgAu6heIAGgQIgVAAgAsIhfIAPgPIgVAAgAsciSIAKAaIAjAAIBXhVgAtXh4IA6AAIgJgWgAulh4IA3AAIgvgVgAvTh4IAjAAIAKgaIh+g4gAuZiXIAyAXIAAiZgAtdiBIA0gWIg0iDgAhqCvQgbgTAAglIAAhPQAAgPgCgHQgCgHgFgFIAtAAQgFAFgCAIQgCAHAAAOIAABPQAAAaAPAOQALALAQAEQAKACAGgBIAQgBQARgEALgLQAOgPABgZIAAhPQAAgOgCgHQgDgIgEgFIAtAAQgGAFgCAHQgBAHAAAPIAABPQgBAlgbATQgWAQgkAAQgjAAgXgQgAlRCkQghgcAAgnQAAgoAhgbQAfgcAuAAQAsAAAhAcQAgAbAAAoQAAAnggAcQghAbgsAAQguAAgfgbgAk7ApQgXAXAAAhQAAAgAXAXQAWAXAhAAQAgAAAXgXQAWgXAAggQAAghgWgXQgXgXggAAQghAAgWAXgAnkC9QgNgCgSgHIAAgfQAPAOAMAGQAOAGAPAAQAUAAAOgJQAOgJACgNQADgOgQgLQgIgFgdgMQgdgMgMgJQgPgNgBgTQABgVATgNQAUgNAhAAQAZAAAUAGIAAAaQgTgRgaAAQgTAAgMAIQgMAIABANQAAALAJAHQAIAIAdAMQAgANAMAKQAPANAAARQAAAZgWAPQgWAOgiAAQgPAAgLgCgAPMCyQgNgKghgiIgogpIA8g8IAIgKQACgDAAgEQAAgFgHgFIA2AAIhTBRIAHAHQA2A4AOAMQAPAMAZANIgcABQgWAAgNgKgAQPC7QAFgFADgHQABgHAAgPIAAg1QgJABgHADQAHgJAJgGIAAgxQAAgPgBgHQgDgHgFgFIB8AAIAKgBIAJAaQgOgJgnAAQgTAAgRACIgNABIAAAvQgSAGgLAJQAQgJArAGQAvAGAcgKQgRAVggABIg4gEIAABFIACABQAWADAaAAQAWAAANgDQAPgDAMgIIgMAegANIC7QAHgEACgIQADgHgBgPIAAhxQABgPgDgHQgCgHgHgFIAoAAIAACTQAAAPACAHQADAHAGAFgAMJC7QAGgEABgFQAAgEgZg3IhUAAQgZAyABAHQgBAHAHAEIgqAAQAHgFAFgHIAMgXIBJiSIAaAAIBECSQAHAQAGAHQAFAHAIAFgAKsBmIBCAAIgghHgAHLC7QAFgEACgIQADgHAAgPIAAhxQAAgPgDgHQgCgHgFgFIAwAAQgGAFgCAIQgCAGAAAPIAAB/IAOACQATACAbAAQARAAANgDQANgDAOgIIgPAegAGGC7QAGgFACgHQACgHAAgPIAAg3Ih9AAIAAA3QAAAPACAHQADAIAFAEIgwAAQAFgEACgIQACgHAAgPIAAhxQAAgPgCgHQgCgHgFgFIAwAAQgFAFgDAHQgCAHAAAPIAAApIB9AAIAAgpQAAgPgCgGQgCgIgGgFIAxAAQgGAFgBAIQgDAHAAAOIAABxQAAAOADAIQABAHAGAFgAB1C7QAGgFACgHQACgHAAgPIAAiAIgigCQgNAAgHACQgJACgIAEIAKgaIAQABIB2AAIAPgBIAKAaQgIgEgIgCQgIgCgNAAIghACIAACAQAAAPABAHQACAHAHAFgAtlBhQgKAAgJgCQgNgEgJgIQgGgGgGgKQgFgKgCgLIgBgKIAoAUIAAABIAAADQgDALAJAHQAEADAFABQAHACAGgCQAHgCAEgGQADgGgBgHIAAgEIgCgFIgGgGIgLgJIgQgJIgWgJIgFgCIgDAAIgBABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABAAIAAACIAAABIAAAAQgEgBgCgCQgBgDAAgCQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBIAAAAIAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgBIgBgBQgDgDgDgFIgCgJQAAgHADgIIAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIABABIABAEIABAGQAEAGAFAEIAGADIAGADIAEACQAFACACAGIABABIABAAQARAHAPAIIAPAKQAHAFADAEQAEADADAEIACAJQABAJgDAHIAAABQAJgGACgMQACgJgDgIQgDgEgEgDQgEgFgGgEIgQgKIgPgIQgOgFgKgHQgIgEgHgGIgJgKQgFgHgBgHIAAgHQgBgHAEgJQAGgPAPgJQAHgEAKgDIAQgBIABAAIAKAAQALABAJAEQAPAHAIAOQAHAJACAMIACAJIAAAEIgBABIgBAAIglgVIAAgBIAAgEQABgKgIgGQgEgDgFgBQgGgBgGABQgHACgFAHQgCADgBAGIABAHQABADACADIAFAGIALAHQAJAHAKAEIASAIIAFACIAEAAIACgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAQAEACABAEIAAAFIAAADIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABQAFACACAFQACAFAAADQABAHgDAIIAAACIAAABIgBAAIgBAAIAAgBQgBgGgCgEQgDgIgGgDIgLgGIgFgDQgEgCgCgEIgBgCIgBAAQgVgJgPgIIgPgKIgJgHQgEgGgBgEQgBgDgBgFQAAgHADgHIAAgBIAAAAQgKAGgCALQgCAIADAJIAFAHQACADAHAFIAOAJIAUAKQANAFAJAGIAPAKIAJAJQAFAHADAHIABALQAAAHgEAJQgHAPgOAIQgIAFgKACQgHABgIAAIgEAAgAmxg2IhVh9IAYAAIA/BeIA/heIAVAAIhUB9gAkfhJIAKgPQAaARApAAQAzAAAAgXQAAgJgIgEQgIgDgUgBIgmgCQgZgBgMgHQgNgIAAgPQAAgSASgKQARgJAfAAQAtAAAaAOIgIAPQgMgGgMgDQgQgFgXAAQguAAAAAUQAAAIAIAEQAHADASABIAmACQAbABAMAGQAOAIAAASQAAAUgUAKQgTAKggAAQgxAAgcgSgAgIg6IAAhoIhAAAIAAgRICSAAIAAARIg/AAIAABogAhyg6IAAh5IAUAAIAAB5gAlJg6IAAh5IAUAAIAAB5g");
	this.shape.setTransform(-52.55,-470.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STX_Logo, new cjs.Rectangle(-171.7,-502.9,238.39999999999998,64.69999999999999), null);


(lib.townSquare = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.townsquare1();
	this.instance.setTransform(-458.05,-305.35,1.2723,1.2723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.townSquare, new cjs.Rectangle(-458,-305.3,916.1,610.7), null);


(lib.woman_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woman_px();
	this.instance.setTransform(-115.6,-211.5,1.0655,1.0655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_mc, new cjs.Rectangle(-115.6,-211.5,231.2,423), null);


(lib.shoppingBG_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shoppingBG();
	this.instance.setTransform(-215,-301.15,0.9072,0.9072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoppingBG_mc, new cjs.Rectangle(-215,-301.1,430,602.3), null);


(lib.server_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.server();
	this.instance.setTransform(-444.6,-276.05,1.9718,1.9718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.server_mc, new cjs.Rectangle(-444.6,-276,889.3,552.1), null);


(lib.server_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.server_image();
	this.instance.setTransform(-448,-298.95,1.4836,1.4836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448,-298.9,896.1,597.9);


(lib.ctaBtn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ctaBtn();
	this.instance.setTransform(-460,-5,0.4328,0.4328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-460,-5,109.10000000000002,16.5), null);


(lib.bar_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bar_img();
	this.instance.setTransform(-256.5,-386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_img_1, new cjs.Rectangle(-256.5,-386,513,772), null);


(lib.ShoppingWoman_PX = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woman_mc();
	this.instance.setTransform(122.6,330.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleX:1.4625,scaleY:1.4625,x:139.1,y:313.45},143).wait(1));

	// Layer_2
	this.instance_1 = new lib.shoppingBG_mc();
	this.instance_1.setTransform(128,300.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2456,scaleY:1.2456,x:152.05,y:286.2},143).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.7,-88.9,535.6,750.3);


(lib.server_PX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.server_mc();
	this.instance.setTransform(380.55,311.05,0.9431,0.9431);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0714,scaleY:1.0714,x:326.1,y:306.55},112).to({_off:true},1).wait(247));

	// Layer_8
	this.instance_1 = new lib.server_img();
	this.instance_1.setTransform(270.25,280.95,0.9465,0.9465);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:1.0758,scaleY:1.0758,x:224.7,y:290.45},112).to({_off:true},1).wait(247));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-39.3,1089.2,664.5999999999999);


// stage content:
(lib.STX_TripAdvisor_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [359];
	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A41jvMAxrAAAIAAHfMgxrAAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// ctaBtn
	this.instance = new lib.ctaBtn_1();
	this.instance.setTransform(276.3,41.7,0.8015,0.8015,0,0,0,-405.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Logo
	this.instance_1 = new lib.STX_Logo();
	this.instance_1.setTransform(150.05,300,0.5837,0.5837,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(332).to({_off:false},0).to({alpha:1},13).wait(15));

	// txt_shortDrive
	this.instance_2 = new lib.txt_shortDrive();
	this.instance_2.setTransform(150,300,1.264,1.264);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({alpha:1},14).wait(36).to({alpha:0},13).wait(22));

	// multiply_layer
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(263).to({_off:false},0).wait(97));

	// town_square
	this.instance_3 = new lib.townSquare();
	this.instance_3.setTransform(171.75,26.2,0.3895,0.3895,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({regX:0.2,scaleX:0.3852,scaleY:0.3852,x:170.6,y:29.4,alpha:1},11).to({regX:0.1,scaleX:0.3519,scaleY:0.3519,x:161.25,y:54.2},85).wait(1));

	// white_Box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqkjJIAXAAIUyAAIAAGTI0yAAIgXAAg");
	this.shape_2.setTransform(-69.55,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqkjJIVJAAIAAGTI0yAAg");
	this.shape_3.setTransform(-53.9,26.1);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{x:-69.55}}]},182).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:67.45}}]},1).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(183).to({_off:false},0).wait(1).to({x:-39.2},0).wait(1).to({x:-25.45},0).wait(1).to({x:-12.65},0).wait(1).to({x:-0.8},0).wait(1).to({x:10.1},0).wait(1).to({x:20.05},0).wait(1).to({x:29.05},0).wait(1).to({x:37.1},0).wait(1).to({x:44.2},0).wait(1).to({x:50.4},0).wait(1).to({x:55.6},0).wait(1).to({x:59.85},0).wait(1).to({x:63.2},0).wait(1).to({x:65.55},0).wait(1).to({x:67},0).to({_off:true},1).wait(161));

	// txt_shopping
	this.instance_4 = new lib.txt_escape();
	this.instance_4.setTransform(-92.75,48.05,0.5184,0.5184,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({x:44.25,alpha:1},17,cjs.Ease.quadOut).wait(153));

	// bar
	this.instance_5 = new lib.bar_img_1("synched",0,false);
	this.instance_5.setTransform(160.4,-79.95,0.6238,0.6238,0,0,0,0.5,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).to({regX:0.6,scaleX:0.6274,scaleY:0.6274,x:159.5,y:-77.05,alpha:1},9).to({regY:0,scaleX:0.6351,scaleY:0.6351,x:157.5,y:-71},19).to({regX:0.4,regY:0.2,scaleX:0.6745,scaleY:0.6745,x:147.35,y:-39.9},97).wait(54));

	// white_Box
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxrjGIQfAAIS9AAIAAGNIy9AAIwfAAAxwDHIAAmN");
	this.shape_4.setTransform(436,25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ax4DHMAj2AAAIAAmNMgj2AAAAx9jGIAAGN");
	this.shape_5.setTransform(411.225,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyDDHMAkNAAAIAAmNMgkNAAAAyIjGIAAGN");
	this.shape_6.setTransform(387.8,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyPDHMAkkAAAIAAmNMgkkAAAAyUjGIAAGN");
	this.shape_7.setTransform(365.675,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyZDHMAk4AAAIAAmNMgk4AAAAyejGIAAGN");
	this.shape_8.setTransform(344.925,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyjDHMAlMAAAIAAmNMglMAAAAyojGIAAGN");
	this.shape_9.setTransform(325.5,25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AysDHMAleAAAIAAmNMgleAAAAyxjGIAAGN");
	this.shape_10.setTransform(307.425,25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ay1DHMAlwAAAIAAmNMglwAAAAy6jGIAAGN");
	this.shape_11.setTransform(290.675,25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ay8DHMAl/AAAIAAmNMgl/AAAAzBjGIAAGN");
	this.shape_12.setTransform(275.3,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzEDHMAmOAAAIAAmNMgmOAAAAzJjGIAAGN");
	this.shape_13.setTransform(261.225,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzKDHMAmaAAAIAAmNMgmaAAAAzPjGIAAGN");
	this.shape_14.setTransform(248.5,25.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzQDHMAmmAAAIAAmNMgmmAAAAzVjGIAAGN");
	this.shape_15.setTransform(237.125,25.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzVDHMAmwAAAIAAmNMgmwAAAAzajGIAAGN");
	this.shape_16.setTransform(227.075,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzZDHMAm4AAAIAAmNMgm4AAAAzejGIAAGN");
	this.shape_17.setTransform(218.375,25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzdDHMAnAAAAIAAmNMgnAAAAAzijGIAAGN");
	this.shape_18.setTransform(211,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzgDHMAnGAAAIAAmNMgnGAAAAzljGIAAGN");
	this.shape_19.setTransform(204.95,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AziDHMAnKAAAIAAmNMgnKAAAAznjGIAAGN");
	this.shape_20.setTransform(200.275,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzkDHMAnOAAAIAAmNMgnOAAAAzpjGIAAGN");
	this.shape_21.setTransform(196.925,25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzlDHMAnQAAAIAAmNMgnQAAAAzqjGIAAGN");
	this.shape_22.setTransform(194.925,25.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzmjGIUUAAIS+AAIAAGNIy+AAI0UAAAzrDHIAAmN");
	this.shape_23.setTransform(194.25,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},87).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(254));

	// txt_shopping
	this.instance_6 = new lib.txt_highestStandard();
	this.instance_6.setTransform(436,28.05,0.4375,0.4375,0,0,0,0.4,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({_off:false},0).to({x:171,alpha:1},19,cjs.Ease.quadOut).wait(245));

	// multiply_layer
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.2)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_24.setTransform(364,45);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(87).to({_off:false},0).wait(273));

	// server
	this.instance_7 = new lib.server_PX("synched",0);
	this.instance_7.setTransform(179.85,78.7,0.3876,0.3876,0,0,0,320.4,302.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(87).to({_off:false},0).to({regX:320.7,regY:302.4,scaleX:0.3979,scaleY:0.3979,x:181.85,y:67.1,alpha:1,startPosition:19},19).to({regX:320.6,scaleX:0.442,scaleY:0.442,x:189.95,y:17.65,startPosition:100},81).to({_off:true},13).wait(160));

	// white_Box
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArzjHIXnAAIAAGPI3nAAg");
	this.shape_25.setTransform(-79.95,25.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({x:-62.25},0).wait(1).to({x:-45.65},0).wait(1).to({x:-30.05},0).wait(1).to({x:-15.6},0).wait(1).to({x:-2.2},0).wait(1).to({x:10.15},0).wait(1).to({x:21.4},0).wait(1).to({x:31.6},0).wait(1).to({x:40.7},0).wait(1).to({x:48.75},0).wait(1).to({x:55.75},0).wait(1).to({x:61.65},0).wait(1).to({x:66.45},0).wait(1).to({x:70.2},0).wait(1).to({x:72.9},0).wait(1).to({x:74.5},0).wait(1).to({x:75.05},0).wait(343));

	// txt_shopping
	this.instance_8 = new lib.txt_shopping();
	this.instance_8.setTransform(-112.4,51.7,0.5201,0.5201,0,0,0,0.2,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({x:42.6,alpha:1},17,cjs.Ease.quadOut).wait(335));

	// multiply_layer
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.2)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_26.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(360));

	// shopping_woman
	this.instance_9 = new lib.ShoppingWoman_PX("synched",0,false);
	this.instance_9.setTransform(161.2,125.3,0.7594,0.7594,0,0,0,128.4,299.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:178.2,y:-8.2,startPosition:97},97).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-295.7,724.6,649.9);
// library properties:
lib.properties = {
	id: 'A995C96434FB4299A346847C54808D17',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bar_img.jpg", id:"bar_img"},
		{src:"ctaBtn.png", id:"ctaBtn"},
		{src:"server.png", id:"server"},
		{src:"server_image.jpg", id:"server_image"},
		{src:"shoppingBG.jpg", id:"shoppingBG"},
		{src:"townsquare1.jpg", id:"townsquare1"},
		{src:"woman_px.png", id:"woman_px"}
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
an.compositions['A995C96434FB4299A346847C54808D17'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;