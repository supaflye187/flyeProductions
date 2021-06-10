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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,155);// helper functions:

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


(lib.txt_your = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003DA6").s().p("ACQBXQgJgCgGgFIASgZIAGAFQADABAFAAQAGAAAEgCQAFgEABgHIADgDIgphgIAiAAIAWA4IAVg4IAgAAIgqBpIgIARQgEAHgGAFQgFAEgHACQgHACgIAAQgJAAgIgEgAF9AnQgKgKAAgTIAAg9IAhAAIAAA3QAAAJADAFQAEAEAIAAQAHAAAFgEQADgFAAgKIAAg2IAhAAIAABjIggAAIAAgLQgFAGgHAEQgGADgJAAQgQAAgLgLgAEcAuQgJgFgHgGQgHgIgFgJQgDgJAAgKQAAgLADgJQAFgKAHgHQAHgHAJgEQALgEAMAAQAKAAAKAEQALAEAHAHQAHAHAEAKQAEAJAAALQAAAKgEAJQgEAJgHAIQgHAGgKAFQgJAEgMAAQgMAAgLgEgAEqgWQgFABgDAEQgDADgCAEQgCAEAAAFQAAADACAFQACAEADADIAIAFQADABAGAAQAEAAAEgBQAFgCACgDQADgDACgEIACgIQAAgFgCgEQgCgEgDgDQgCgEgFgBQgEgCgEAAQgGAAgDACgAAbAuQgJgEgHgHQgIgHgDgKQgDgJAAgKQAAgLAEgJQADgKAHgHQAIgHAJgEQAKgEALAAQAMAAAJAEQAKAEAGAGQAIAHAEAKQADAJAAAMIAAAJIhKAAQACAIAHAEQAFAEAJAAQAHAAAFgDQAGgDADgEIAZAOQgIALgLAFQgLAGgRAAQgMAAgKgEgABHgOQgDgHgFgDQgGgDgIAAQgHAAgGADQgGAEgCAGIArAAIAAAAgAjFAwQgIgCgEgEQgEgEgCgFQgEgGAAgHQAAgIAEgGQADgGAHgEQAFgEAIgDQAJgCAKAAIAXAAIAAgBQAAgGgEgEQgEgEgJAAQgHAAgEADQgFACgDAGIgdgOQAIgKALgGQALgGASAAQAXAAAMAKQAMALAAAUIAAA8IgeAAIAAgNQgEAGgJAFQgJAEgMAAQgIAAgFgCgAi1AKQgEADAAAFQAAAHAMAAIAIgBIAGgDIAHgFIACgGIAAgCIgSAAQgJAAgEACgAkvArQgMgHgGgOIAfgIQADAGAFADQAGACAGAAQAGAAADgCQADgCAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgCIgdgHQgGgBgFgEQgFgCgDgFQgEgGAAgIQAAgHADgGQADgGAGgFQAGgEAHgCQAJgDAJAAQAJAAAHACQAHABAFAEQAGACAEAFIAIAKIgeAJQgEgJgMAAIgJABQgCACAAAEQAAADAGACIAcAHIAMAFQAFADAEAFQAEAGAAAIQgBAGgDAGQgCAGgGAFQgFAFgJADQgIADgMAAQgTAAgNgHgAm5AuQgKgFgHgGQgHgIgEgJQgEgJAAgKQAAgLAEgJQAEgKAHgHQAHgHAKgEQAJgEAMAAQAMAAAKAEQAKAEAHAHQAHAHAFAKQADAJAAALQAAAKgDAJQgFAJgHAIQgHAGgKAFQgJAEgNAAQgMAAgJgEgAmsgWQgEABgEAEQgDADgBAEQgCAEAAAFQAAADACAFQABAEADADIAIAFQAEABAEAAQAFAAAEgBQAFgCADgDQADgDACgEIABgIIgBgJQgCgEgDgDQgDgEgFgBQgEgCgFAAQgEAAgEACgAoGAwQgGgCgFgFQgFgFgCgHQgCgIAAgLIAAgiIgRAAIAAgbIARAAIAAgWIAfgRIAAAnIAYAAIAAAbIgYAAIAAAgQAAAIACACQACADAEAAQAGAAACgDIAPAXQgGAEgHACQgGADgIAAQgIAAgHgCgAHhAwIAAhjIAfAAIAAAOQADgJAIgEQAHgDAKAAIAJAAIAIAEIgLAfIgGgDIgIgBQgJAAgGAFQgFAFAAAMIAAAwgAhLAwIgmhjIAiAAIAUA6IAUg6IAgAAIglBjg");
	this.shape.setTransform(194.3,-301.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_your, new cjs.Rectangle(138.7,-310.4,111.30000000000001,18.099999999999966), null);


(lib.txt_sis = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("ABzBEQgFgEAAgJQAAgIAFgEQAFgGAIAAQAJAAAEAGQAGAEAAAIQAAAJgGAEQgEAFgJAAQgIAAgFgFgAAVBCQgMgHgFgOIAegIQACAGAGADQAFADAGAAQAGAAADgCQAEgCAAgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgDgCIgcgIQgIgBgFgDQgEgEgDgEQgEgGAAgJQABgFACgGQADgGAGgEQAFgEAJgDQAIgCAJAAQAJAAAHACQAHABAFADQAFACAEAFIAIAKIgdAIQgEgIgMAAQgGAAgDABQgCACAAADQAAADAFACIAcAGQAHADAFADQAGADAEAGQACAFAAAIQABAGgDAHQgDAFgFAGQgFAFgKADQgIACgLAAQgUAAgMgHgAiABCQgMgHgFgOIAegIQADAGAFADQAFADAHAAQAFAAAEgCQADgCAAgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgFgCIgcgIQgGgBgFgDQgFgEgDgEQgDgGAAgJQAAgFACgGQADgGAGgEQAGgEAHgDQAJgCAJAAQAIAAAIACQAGABAFADQAHACADAFIAIAKIgdAIQgEgIgMAAQgGAAgDABQgCACAAADQAAADAFACIAdAGIALAGQAGADADAGQAEAFAAAIQAAAGgDAHQgDAFgGAGQgEAFgJADQgJACgLAAQgTAAgNgHgAgmBIIAAhjIAfAAIAABjgAgkgoQgEgGAAgHQAAgJAEgFQAFgGAJABQAHgBAGAGQAFAFAAAJQAAAHgFAGQgGAFgHAAQgJAAgFgFg");
	this.shape.setTransform(200.95,-288.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sis, new cjs.Rectangle(6.9,-296.3,208.7,146.4), null);


(lib.txt_self = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("ACbBHQgEgFAAgJQAAgIAEgFQAGgGAIAAQAJAAAEAGQAFAFABAIQgBAJgFAFQgEAFgJAAQgJAAgFgFgAgyBIQgKgFgHgHQgGgHgEgKQgEgJAAgMQAAgLAEgJQAFgJAGgHQAIgIAJgEQAKgEAMAAQAMAAAJAEQAJAEAHAHQAIAHADAJQAFAJAAAMIAAALIhMAAQACAIAHAEQAGAEAJAAQAHAAAFgDQAFgDAEgFIAYAPQgIALgKAGQgKAGgSAAQgNAAgKgEgAgFAKQgDgHgFgDQgGgDgIAAQgHAAgGADQgGADgDAHIAsAAIAAAAgAipBFQgMgIgFgOIAggJQACAHAFADQAFADAHAAQAGAAAEgDQACgCAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgFgCIgdgHQgGgCgFgDQgGgEgDgFQgEgGAAgIQAAgGAEgGQACgGAHgFQAFgEAIgDQAJgCAJAAQAKAAAGABIANAFQAGADAFAFQAEAEAEAGIgfAJQgFgJgMAAQgGAAgCACQgDABAAADQAAADAGACIAdAHQAGACAGADQAFAEAEAGQADAFABAJQgBAGgCAGQgDAHgFAFQgHAFgIADQgJADgLAAQgVAAgNgHgABjBKIAAhKIgQAAIAAgcIAQAAIAAgBQgBgNADgJQADgJAFgFQAGgFAJgDQAIgCANAAIAJAAIAAAdIgPABIgFACIgDAEIgBALIAYAAIAAAcIgYAAIAABKgAAmBKIAAiVIAhAAIAACVg");
	this.shape.setTransform(200.55,-289.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_self, new cjs.Rectangle(166.3,-302.2,71.19999999999999,28.899999999999977), null);


(lib.txt_mom = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("ACjAjQgDgDAAgGQAAgHADgDQAEgEAGAAQAGAAAEAEQAEADAAAHQAAAGgEADQgEAEgGAAQgGAAgEgEgAgkAkQgHgDgFgFQgFgGgDgHQgDgHgBgIQABgHADgHQADgHAFgGQAFgFAHgDQAIgDAJAAQAJAAAHADQAGADAGAFQAFAGADAHQADAHAAAHQAAAIgDAHQgDAHgFAGQgFAFgGADQgIADgJAAQgJAAgIgDgAgagPQgDABgCADQgDACgBADQgBADAAADIABAHQABADADACIAFAEIAHABIAHgBQADgCACgCIAEgFIABgHIgBgGIgEgFQgCgDgDgBQgEgBgDAAQgEAAgDABgAB8AmIAAgqQgBgHgCgDQgDgEgFAAQgGAAgCAEQgDADgBAIIAAApIgXAAIAAgqQgBgHgCgDQgDgEgFAAQgGAAgCAEQgEADAAAIIAAApIgXAAIAAhLIAXAAIAAAJQADgFAGgDQAFgCAHAAQAHAAAGADQAFADAEAGQADgGAGgDQAGgDAIAAQAMAAAIAHQAGAIABAOIAAAvgAheAmIAAgqQAAgHgDgDQgCgEgGAAQgFAAgDAEQgDADAAAIIAAApIgYAAIAAgqQAAgHgDgDQgDgEgFAAQgFAAgDAEQgDADgBAIIAAApIgXAAIAAhLIAXAAIAAAJQAEgFAFgDQAFgCAHAAQAIAAAGADQAFADAEAGQADgGAGgDQAFgDAIAAQANAAAHAHQAHAIAAAOIAAAvg");
	this.shape.setTransform(192.8968,-287.1153,1.3289,1.3289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_mom, new cjs.Rectangle(-8.1,-292.3,225.9,141.8), null);


(lib.txt_mammogram = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("AhmCIQgJgDgGgHIASgOIAHAGQADACAFAAQAHAAAFgEQAFgFAAgHIAAgEQgEAEgFADQgFACgHAAQgFAAgHgCQgFgDgFgEQgEgFgDgGQgDgHAAgJQAAgIADgHQADgGAEgFQAFgFAFgCQAHgDAGAAQAGAAAGADQAEACAEAFIAAgIIAVAAIAABBQABAHgDAHQgDAGgFAFQgEAFgHADQgIACgIAAQgLAAgIgDgAhZA7QgDABgBACIgEAFIgBAGIABAGIAEAGIAEADIAGABQAEAAADgBIAFgDIAEgGIABgGIgBgGIgEgFQgCgCgDgBQgDgCgEAAIgGACgAJABrQgDgEAAgGQAAgFADgEQADgDAGAAQAGAAADADQAEAEAAAFQAAAGgEAEQgDADgGAAQgGAAgDgDgAH8BsQgGgDgEgFQgFgEgCgHQgDgHgBgIQABgJADgHQACgGAFgFQAEgFAGgCQAGgDAGAAQAHAAAFADQAFACADAEIAAgoIAWAAIAABnIgWAAIAAgJQgDAFgGADQgFACgGAAQgGAAgGgCgAIHA7IgFADIgEAFIAAAHIAAAGIAEAFIAFADIAGABIAGgBIAGgDIADgFIABgGIgBgHIgDgFIgGgDIgGgBIgGABgAFdBrQgGgDgFgEQgFgFgDgHQgCgHAAgHQAAgIADgHQADgGAFgFQAFgFAGgDQAHgDAIAAQAIAAAHADQAGADAGAEQAEAFADAHQACAGABAIIAAAIIg1AAQACAFAFADQADADAHAAQAFAAAEgCQADgCACgEIARALQgFAHgIAEQgHAEgMAAQgIAAgIgDgAF8BBQgCgFgDgCQgEgDgGAAQgFAAgEADQgEACgCAFIAeAAIAAAAgABYBtQgFgCgDgCIgEgHQgCgEAAgFQAAgFACgFQACgEAEgDQAFgDAGgCQAFgCAHAAIARAAIAAAAQAAgFgEgCQgDgDgFAAQgFAAgDACQgEACgCADIgUgJQAGgHAHgEQAJgFALAAQARAAAIAIQAJAHAAAOIAAArIgVAAIAAgKQgDAFgHADQgGADgIAAQgGAAgEgBgABjBSQgCACAAADQAAAGAIAAIAGgBIAEgCIAFgEIACgEIAAgBIgOAAQgFAAgEABgAgOBrQgHgDgFgEQgFgFgDgHQgCgHAAgHQAAgIADgHQADgGAEgFQAGgFAHgDQAGgDAHAAQAIAAAHADQ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CQAFACAFAAQAJAAAFgEQAGgEACgHIgaAAIAAgVIAyAAIAAAKQAAAKgCAIQgEAJgGAGQgGAHgJADQgIAEgLAAQgLAAgJgEgAJBgpIAAgoQAAgGgDgDQgCgEgFAAQgFAAgDAEQgDADAAAHIAAAnIgWAAIAAgoQAAgGgDgDQgCgEgFAAQgEAAgDAEQgEADAAAHIAAAnIgVAAIAAhGIAVAAIAAAIQAEgFAEgCQAGgDAFAAQAIAAAFADQAFADADAFQADgFAGgDQAGgDAGAAQAMAAAHAHQAGAIABAMIAAAtgAFggpIAAhGIAWAAIAAAJQADgGAFgCQAFgDAHAAIAGABIAFACIgHAWIgEgCIgGgBQgHAAgDADQgEAEAAAIIAAAjgACXgpIAAgoQAAgGgCgDQgCgEgGAAQgFAAgDAEQgCADAAAHIAAAnIgXAAIAAgoQAAgGgDgDQgCgEgFAAQgEAAgEAEQgDADAAAHIAAAnIgVAAIAAhGIAVAAIAAAIQAEgFAFgCQAFgDAFAAQAIAAAFADQAFADADAFQADgFAGgDQAFgDAHAAQANAAAGAHQAHAIAAAMIAAAtgAAggpIAAgoQgBgGgCgDQgCgEgFAAQgFAAgDAEQgDADAAAHIAAAnIgWAAIAAgoQAAgGgCgDQgCgEgFAAQgFAAgDAEQgDADAAAHIAAAnIgWAAIAAhGIAWAAIAAAIQADgFAFgCQAFgDAGAAQAIAAAEADQAFADACAFQAEgFAFgDQAGgDAGAAQANAAAHAHQAGAIAAAMIAAAtgAilgpIAAgoQgBgGgCgDQgCgEgFAAQgFAAgDAEQgDADAAAHIAAAnIgXAAIAAgoQAAgGgCgDQgCgEgFAAQgFAAgDAEQgDADAAAHIAAAnIgWAAIAAhGIAWAAIAAAIQADgFAFgCQAFgDAGAAQAIAAAEADQAGADACAFQAEgFAFgDQAGgDAGAAQANAAAHAHQAGAIAAAMIAAAtg");
	this.shape.setTransform(-193.25,-258.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_mammogram, new cjs.Rectangle(-499.4,-277.8,612.3,36.20000000000002), null);


(lib.Txt_carousel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003DA6").s().p("AEyBdIAAiLIAfAAIAAANQAEgHAIgEQAGgEALAAQAIAAAJAEQAIAEAHAGQAGAHAEAKQAEAJAAALQAAANgEAJQgEAKgGAHQgHAGgIAEQgJAEgIAAQgTAAgKgOIAAAzgAFdgQQgEABgDADIgFAHQgCAEAAAEQAAAFACAEIAFAHIAHAFQAEACAGAAQAEAAAEgCIAHgFIAFgHQACgEAAgFQAAgEgCgEIgFgHQgDgDgEgBQgEgCgEAAQgGAAgEACgALdA0QgJgEgIgIQgGgGgEgKQgEgKAAgLQAAgKAEgJQAEgJAIgHQAGgIAKgEQAJgEAMAAQAMAAAJAEQAKAEAHAHQAHAHADAKQAEAJAAAKIAAALIhKAAQADAIAFAEQAGAEAJAAQAHAAAFgEQAFgCAEgFIAZAPQgIAKgLAGQgLAGgRAAQgMAAgKgEgAMJgJQgDgGgFgDQgGgEgIAAQgIAAgFAEQgGAEgCAFIArAAIAAAAgAHFA0QgKgFgHgHQgHgHgEgJQgEgKAAgLQAAgKAEgJQAEgJAHgHQAHgIAKgEQAKgEAMAAQALAAAKAEQAKAEAHAIQAHAHAEAJQAEAJAAAKQAAALgEAKQgEAJgHAHQgGAHgKAFQgKAEgMAAQgMAAgKgEgAHSgQQgEABgDADQgEADgBAEQgCAEAAAEQAAAFACAEQABAEAEADIAHAFQAEACAFAAQAEAAAEgCQAFgCADgDIAFgHIABgJQAAgEgBgEIgFgHQgDgDgFgBQgEgCgEAAQgFAAgEACgAC1A0QgJgEgHgIQgHgGgEgKQgDgKAAgLQAAgKAEgJQAEgJAHgHQAHgIAKgEQAJgEALAAQAMAAAJAEQAKAEAHAHQAHAHAEAKQAEAJAAAKIAAALIhLAAQADAIAGAEQAFAEAKAAQAGAAAGgEQAFgCADgFIAZAPQgIAKgKAGQgLAGgRAAQgNAAgKgEgADhgJQgCgGgGgDQgGgEgHAAQgIAAgFAEQgGAEgDAFIArAAIAAAAgAgBA2QgGgCgFgGQgFgEgCgIQgCgIAAgKIAAgiIgSAAIAAgcIASAAIAAgWIAegQIAAAmIAYAAIAAAcIgYAAIAAAgQAAAHACADQACACAEAAQAFAAADgDIAPAXQgGAFgHACQgGADgIAAQgIAAgGgCgAifA0QgKgEgHgIQgHgGgEgKQgDgKAAgLQAAgKAEgJQAEgJAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAJAAAKIAAALIhKAAQACAIAGAEQAGAEAJAAQAGAAAGgEQAFgCADgFIAaAPQgIAKgLAGQgLAGgRAAQgMAAgKgEgAh0gJQgCgGgGgDQgGgEgHAAQgIAAgFAEQgGAEgDAFIArAAIAAAAgAmBA2QgHgCgEgEQgEgEgDgGQgDgGAAgGQAAgIAEgHQADgGAGgFQAGgDAIgCQAJgDAKAAIAXAAIAAgBQAAgFgEgEQgFgEgIAAQgHAAgFACQgEADgDAFIgdgNQAIgKALgHQALgGARAAQAYAAAMALQAMALAAATIAAA9IgeAAIAAgOQgFAHgJAFQgJAEgLAAQgIAAgGgCgAlwAQQgEACAAAFQAAAIALAAIAIgBIAHgEIAGgFIADgGIAAgCIgTAAQgJAAgDADgAqJAtQgKgKAAgTIAAg+IAgAAIAAA4QAAAIAEAFQAEAFAIAAQAGAAAFgFQAEgFAAgKIAAg2IAgAAIAABkIgfAAIAAgMQgGAGgGAEQgHAEgIAAQgRAAgKgLgArqA0QgKgFgHgHQgHgHgEgJQgEgKAAgLQAAgKAEgJQAEgJAHgHQAHgIAKgEQAKgEAMAAQALAAAKAEQAKAEAHAIQAIAHAEAJQAEAJAAAKQAAALgEAKQgEAJgIAHQgGAHgKAFQgKAEgMAAQgMAAgKgEgArdgQQgEABgDADQgDADgCAEQgCAEAAAEQAAAFACAEQACAEADADIAHAFQAEACAFAAQAEAAAEgCQAFgCADgDQADgDACgEIABgJIgBgIQgCgEgDgDQgDgDgFgBQgEgCgEAAQgFAAgEACgAMyA2IAAhkIAfAAIAAAOQAEgIAHgEQAIgEAKAAIAJABIAHADIgKAgIgGgEIgIAAQgKAAgFAEQgFAFAAALIAAAygAJ8A2IgVg5IgUA5IgdAAIgghkIAfAAIARA5IAVg5IAaAAIAUA5IASg5IAfAAIghBkgABrA2IAAg4QAAgJgEgFQgDgEgIAAQgHAAgFAEQgEAGAAAJIAAA3IgfAAIAAiSIAfAAIAAA6QAFgHAHgDQAGgEAJAAQAIAAAHADQAGADAGAEQAEAGADAHQADAHAAAJIAAA/gAkGA2IgmhkIAhAAIAVA6IAUg6IAfAAIgkBkgAnBA2IAAg4QAAgJgEgFQgDgEgIAAQgHAAgEAEQgFAGAAAJIAAA3IgfAAIAAiSIAfAAIAAA6QAFgHAHgDQAHgEAIAAQAIAAAHADQAGADAGAEQAEAGADAHQADAHAAAJIAAA/gAtRA2IAAg5IgshOIAjAAIAaAxIAagxIAiAAIgsBPIAAA4g");
	this.shape.setTransform(113.175,-247.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Txt_carousel, new cjs.Rectangle(-338.2,-256.4,540.8,166.39999999999998), null);


(lib.txt_bff = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#008FBE").s().p("ABcA0QgEgDAAgGQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAHQAAAGgEADQgEAEgGAAQgGAAgEgEgAhTA1QgFgDgEgFIAAAKIgXAAIAAhuIAXAAIAAAtQAEgGAFgCQAFgEAIAAQAHAAAGADQAGADAFAFQAFAFADAHQADAGAAAKQAAAJgDAHQgDAIgFAFQgFAFgGADQgGACgHAAQgHAAgGgDgAhSABQgDABgDACQgCADgBADQgCADAAAEIACAGQABAEACABIAGAEIAGACIAHgCIAGgEIADgFIABgGIgBgHIgDgGQgDgCgDgBIgHgBQgDAAgDABgAAnA3IAAg3IgLAAIAAgUIALAAIAAgBQAAgJACgHQACgGAEgFQAEgEAHgBQAGgCAKAAIAHAAIAAAVIgMABIgEABIgCAEIAAAIIASAAIAAAUIgSAAIAAA3gAgSA3IAAg3IgLAAIAAgUIALAAIAAgBQAAgJACgHQACgGAEgFQAEgEAGgBQAGgCAKAAIAHAAIAAAVIgMABIgEABIgCAEIAAAIIASAAIAAAUIgSAAIAAA3g");
	this.shape.setTransform(200.8875,-288.8262,1.2774,1.2774);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_bff, new cjs.Rectangle(5.6,-296,210.1,145.6), null);


(lib.BSWH_Icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blue_bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B449D").s().p("AgFAQIAAgUIALgLIAAAfg");
	this.shape.setTransform(-0.625,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B449D").s().p("AgWBBIAAhUIAtgtIAACBg");
	this.shape_1.setTransform(-2.525,6.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B449D").s().p("AgkBsIAAiMIBJhLIAADXg");
	this.shape_2.setTransform(-4.175,11.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B449D").s().p("AgxCQIAAi8IBihjIAAEfg");
	this.shape_3.setTransform(-5.55,15.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B449D").s().p("Ag7CtIAAjiIB3h3IAAFZg");
	this.shape_4.setTransform(-6.675,18.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B449D").s().p("AhDDEIAAkAICHiHIAAGHg");
	this.shape_5.setTransform(-7.575,20.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B449D").s().p("AhIDUIAAkVICRiTIAAGog");
	this.shape_6.setTransform(-8.225,22.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B449D").s().p("AhMDeIAAkiICYiZIAAG7g");
	this.shape_7.setTransform(-8.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B449D").s().p("AhNDiIAAknICbicIAAHDg");
	this.shape_8.setTransform(-8.725,23.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},37).to({state:[]},1).wait(321));

	// blue_Rt
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B449D").s().p("AgEAFIgLgKIAfAAIAAAKg");
	this.shape_9.setTransform(1.7,0.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B449D").s().p("AgTAWIgtgsICBAAIAAAsg");
	this.shape_10.setTransform(6.825,2.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B449D").s().p("AggAlIhLhJIDXAAIAABJg");
	this.shape_11.setTransform(11.275,4.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B449D").s().p("AgsAyIhjhiIEfAAIAABig");
	this.shape_12.setTransform(15.075,5.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B449D").s().p("Ag1A8Ih3h3IFZAAIAAB3g");
	this.shape_13.setTransform(18.15,6.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B449D").s().p("Ag8BEIiHiHIGHAAIAACHg");
	this.shape_14.setTransform(20.525,7.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B449D").s().p("AhBBJIiTiRIGoAAIAACRg");
	this.shape_15.setTransform(22.25,8.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B449D").s().p("AhEBNIiZiYIG7AAIAACYg");
	this.shape_16.setTransform(23.3,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B449D").s().p("AhFBOIicibIHDAAIAACbg");
	this.shape_17.setTransform(23.625,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},33).to({state:[]},1).wait(321));

	// lt_blue_lt
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1690BF").s().p("AgKAFIAAgKIAVAAIgLAKg");
	this.shape_18.setTransform(-1.15,0.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1690BF").s().p("AgsAWIAAgsIBZAAIgtAsg");
	this.shape_19.setTransform(-4.725,2.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1690BF").s().p("AhJAlIAAhJICTAAIhKBJg");
	this.shape_20.setTransform(-7.825,4.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1690BF").s().p("AhhAyIAAhiIDDAAIhiBig");
	this.shape_21.setTransform(-10.425,5.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1690BF").s().p("Ah1A8IAAh3IDrAAIh2B3g");
	this.shape_22.setTransform(-12.55,6.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1690BF").s().p("AiFBEIAAiHIELAAIiHCHg");
	this.shape_23.setTransform(-14.225,7.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1690BF").s().p("AiQBJIAAiRIEhAAIiSCRg");
	this.shape_24.setTransform(-15.425,8.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1690BF").s().p("AiXBNIAAiYIEvAAIiYCYg");
	this.shape_25.setTransform(-16.15,8.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1690BF").s().p("AiZBOIAAibIEzAAIibCbg");
	this.shape_26.setTransform(-16.375,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},42).to({state:[]},1).wait(321));

	// blue_lt
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B449D").s().p("AgPAGIAAgLIAUAAIALALg");
	this.shape_27.setTransform(-1.675,-0.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B449D").s().p("AhAAXIAAgtIBUAAIAtAtg");
	this.shape_28.setTransform(-6.8,-2.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B449D").s().p("AhrAlIAAhJICMAAIBLBJg");
	this.shape_29.setTransform(-11.25,-4.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B449D").s().p("AiPAyIAAhiIC8AAIBjBig");
	this.shape_30.setTransform(-15,-5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B449D").s().p("AitA8IAAh3IDjAAIB4B3g");
	this.shape_31.setTransform(-18.075,-6.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B449D").s().p("AjEBEIAAiHIEAAAICICHg");
	this.shape_32.setTransform(-20.45,-7.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B449D").s().p("AjUBJIAAiRIEWAAICTCRg");
	this.shape_33.setTransform(-22.175,-8.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1B449D").s().p("AjeBNIAAiYIEjAAICaCYg");
	this.shape_34.setTransform(-23.225,-8.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1B449D").s().p("AjhBOIAAibIEnAAICcCbg");
	this.shape_35.setTransform(-23.55,-8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},7).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},35).to({state:[]},1).wait(321));

	// yellow_top
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDB61B").s().p("AgFAAIAAgKIALAAIAAAVg");
	this.shape_36.setTransform(-0.625,-1.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDB61B").s().p("AgWAAIAAgsIAtAAIAABZg");
	this.shape_37.setTransform(-2.525,-4.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDB61B").s().p("AgkAAIAAhJIBJAAIAACTg");
	this.shape_38.setTransform(-4.175,-7.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDB61B").s().p("AgxAAIAAhhIBiAAIAADDg");
	this.shape_39.setTransform(-5.55,-10.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDB61B").s().p("Ag7AAIAAh1IB3AAIAADrg");
	this.shape_40.setTransform(-6.675,-12.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDB61B").s().p("AhDgBIAAiEICHAAIAAELg");
	this.shape_41.setTransform(-7.575,-14.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDB61B").s().p("AhIAAIAAiQICRAAIAAEhg");
	this.shape_42.setTransform(-8.225,-15.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDB61B").s().p("AhMAAIAAiXICYAAIAAEvg");
	this.shape_43.setTransform(-8.6,-16.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDB61B").s().p("AhNgBIAAiYICbAAIAAEzg");
	this.shape_44.setTransform(-8.725,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},42).to({state:[]},1).wait(321));

	// blue_top
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B449D").s().p("AgFgPIAKAAIAAAUIgKALg");
	this.shape_45.setTransform(0.65,-1.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1B449D").s().p("AgWhAIAsAAIAABUIgsAtg");
	this.shape_46.setTransform(2.55,-6.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B449D").s().p("AgkhrIBJAAIAACMIhJBLg");
	this.shape_47.setTransform(4.225,-11.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1B449D").s().p("AgwiPIBiAAIAAC8IhiBjg");
	this.shape_48.setTransform(5.65,-15.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B449D").s().p("Ag7itIB3AAIAADjIh3B4g");
	this.shape_49.setTransform(6.775,-18.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1B449D").s().p("AhDjDICHAAIAAEAIiHCHg");
	this.shape_50.setTransform(7.675,-20.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1B449D").s().p("AhIjUICRAAIAAEWIiRCSg");
	this.shape_51.setTransform(8.325,-22.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B449D").s().p("AhLjeICYAAIAAEkIiYCZg");
	this.shape_52.setTransform(8.7,-23.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1B449D").s().p("AhNjhICbAAIAAEnIibCcg");
	this.shape_53.setTransform(8.825,-23.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},5).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},37).to({state:[]},1).wait(321));

	// lt_blue_rt
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1690BF").s().p("AgKAGIAKgLIALAAIAAALg");
	this.shape_54.setTransform(1.2,-0.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1690BF").s().p("AgsAXIAsgtIAtAAIAAAtg");
	this.shape_55.setTransform(4.775,-2.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1690BF").s().p("AhJAlIBKhJIBJAAIAABJg");
	this.shape_56.setTransform(7.875,-4.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1690BF").s().p("AhhAyIBihiIBhAAIAABig");
	this.shape_57.setTransform(10.525,-5.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1690BF").s().p("Ah1A8IB2h3IB1AAIAAB3g");
	this.shape_58.setTransform(12.65,-6.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1690BF").s().p("AiFBEICGiHICFAAIAACHg");
	this.shape_59.setTransform(14.325,-7.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1690BF").s().p("AiQBJICRiRICQAAIAACRg");
	this.shape_60.setTransform(15.525,-8.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1690BF").s().p("AiXBNICYiYICXAAIAACYg");
	this.shape_61.setTransform(16.25,-8.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1690BF").s().p("AiZBOICaibICZAAIAACbg");
	this.shape_62.setTransform(16.475,-8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},3).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},39).to({state:[]},1).wait(321));

	// yellow_bottom
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FDB61B").s().p("AgFALIAAgVIAKAKIAAALg");
	this.shape_63.setTransform(0.65,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDB61B").s().p("AgWAtIAAhZIAsAsIAAAtg");
	this.shape_64.setTransform(2.55,4.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDB61B").s().p("AgkBKIAAiTIBJBKIAABJg");
	this.shape_65.setTransform(4.225,7.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDB61B").s().p("AgwBiIAAjDIBiBiIAABhg");
	this.shape_66.setTransform(5.65,10.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDB61B").s().p("Ag7B2IAAjrIB3B2IAAB1g");
	this.shape_67.setTransform(6.775,12.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDB61B").s().p("AhDCGIAAkLICHCHIAACEg");
	this.shape_68.setTransform(7.675,14.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FDB61B").s().p("AhICRIAAkhICRCSIAACPg");
	this.shape_69.setTransform(8.325,15.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FDB61B").s().p("AhLCYIAAkvICYCYIAACXg");
	this.shape_70.setTransform(8.7,16.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FDB61B").s().p("AhNCaIAAkzICbCaIAACZg");
	this.shape_71.setTransform(8.825,16.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},2).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},40).to({state:[]},1).wait(321));

	// Registration
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(27,68,157,0.667)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgEgSQgCgCgGAAQgFAAgKACgAAAABIgDAKIgEAAIAAgVIAIAAIAJAVg");
	this.shape_72.setTransform(3.075,35.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(27,68,157,0.722)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgDgTQgCgBgGAAIgPABgAgGALIgBgBIAAgUIAHAAIAAAAIgGAAIAAAQIAAAEIADAAIAAABIgDAAgAgDAKgAgCAFIACgCIAAgBIgBADIgCAFg");
	this.shape_73.setTransform(3.075,35.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(27,68,157,0.776)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgEgTQgBgBgGAAIgPABgAgGALIgBgBIAAgUIAIAAIAEAKIgFgJIgGAAIAAANIABADIADAAIgBADIgCABgAAGAJIgGgHIgBACIgBADIAAgCIABgBIACgDIAGADIACAHgAgCAHg");
	this.shape_74.setTransform(3.075,35.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(27,68,157,0.835)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQADgEgEgTQgBgCgGAAIgPACgAgFALIgCgBIAAgUIAIAAIADAHIgEgGIgFAAIAAAMIABACIACAAIgBAFIgCABgAAGAKIgGgIIAAAAIgBABIABgBIACgCIAEACIADAIg");
	this.shape_75.setTransform(3.075,35.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(27,68,157,0.89)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgFgTQgBgBgFAAQgFAAgLACgAgFALIgCAAIAAgVIAIAAIACAGIgDgEIgEAAIAAAJIABACIAAAAIAAAGIgBACgAAGAKIgGgHIAAgBIgBAAIABgBIACgBIADAAIAEAKg");
	this.shape_76.setTransform(3.075,35.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(27,68,157,0.945)").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFgFgTQgCgBgFAAQgFAAgKACgAgEALIgDAAIAAgVIAIAAIADAFIgEgDIgEAAIAAAIIACABIABAAIABgBIADAAIACAAIAEAKIgDABIgFgIIgBgBIgDAAIgBAJg");
	this.shape_77.setTransform(3.075,35.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B449D").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgFQgFgEgHAAQgGAAgFAEgAAGALIgGgKIgDAAIAAAKIgEAAIAAgVIAIAAQAIgBAAAHQAAAEgGABIAHAKgAgDAAIADAAQAGAAAAgEQAAgDgFAAIgEAAg");
	this.shape_78.setTransform(3.075,35.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},13).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},31).to({state:[]},1).wait(321));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-46.1,106.5,92.30000000000001);


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

	// TAKE_THE_CHALLENGE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C6").s().p("AhkCSIAAkjIDJAAIAABBIiDAAIAAAwICDAAIAABAIiDAAIAAAxICDAAIAABBg");
	this.shape.setTransform(-46.125,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C6").s().p("Ag5CKQgcgMgUgUQgUgVgLgcQgKgbgBgeQAAgeAMgdQALgbAUgUQAUgUAbgLQAcgMAgAAQArAAAeAQQAfAQAVAbIg7ApQgKgRgRgIQgQgJgXAAQgPAAgPAGQgPAHgLALQgLAMgGAOQgHAQAAARQAAATAHAPQAFAPAMAMQAKAKAPAHQAQAFAQAAQAaAAARgMQASgMAHgVIhQAAIAAhAICbAAIAAAhQABAcgKAbQgLAagSATQgTAUgaALQgbAMgfAAQgjAAgcgMg");
	this.shape_1.setTransform(-78.2,50.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9C9C6").s().p("AA5CSIhxi2IAAC2IhEAAIAAkjIBJAAIBtCuIAAiuIBDAAIAAEjg");
	this.shape_2.setTransform(-112.55,50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9C9C6").s().p("AhkCSIAAkjIDJAAIAABBIiDAAIAAAwICDAAIAABAIiDAAIAAAxICDAAIAABBg");
	this.shape_3.setTransform(-142.625,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9C9C6").s().p("AhiCSIAAkjIBGAAIAADgIB/AAIAABDg");
	this.shape_4.setTransform(-169.675,50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9C9C6").s().p("AhiCSIAAkjIBGAAIAADgIB/AAIAABDg");
	this.shape_5.setTransform(-196.525,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9C9C6").s().p("ABHCSIgPgsIhvAAIgPAsIhHAAIBskjIBDAAIBsEjgAAiAqIgihhIghBhIBDAAg");
	this.shape_6.setTransform(-226.525,50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9C9C6").s().p("AAwCSIAAhwIhfAAIAABwIhGAAIAAkjIBGAAIAABvIBfAAIAAhvIBGAAIAAEjg");
	this.shape_7.setTransform(-258.425,50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9C9C6").s().p("Ag1CKQgbgLgUgVQgUgUgKgbQgLgcAAgfQAAgfALgcQALgbAUgUQAUgUAcgLQAbgMAgAAQAVAAATAFQATAFARAKQARAJANANQAOAOAJAQIg9AnQgKgUgRgLQgRgMgYAAQgRAAgOAHQgOAGgLAMQgKAKgGAQQgGAOAAAQQAAARAGAPQAFAOALALQAKALAOAGQAPAHAQAAQAbAAARgNQASgOAJgVIBAAjQgJASgNAPQgOAPgRALQgRALgVAGQgUAGgXAAQghAAgcgMg");
	this.shape_8.setTransform(-290.925,50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9C9C6").s().p("AhkCSIAAkjIDJAAIAABBIiDAAIAAAwICDAAIAABAIiDAAIAAAxICDAAIAABBg");
	this.shape_9.setTransform(-334.675,50.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C9C9C6").s().p("AAwCSIAAhwIhfAAIAABwIhGAAIAAkjIBGAAIAABvIBfAAIAAhvIBGAAIAAEjg");
	this.shape_10.setTransform(-364.325,50.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9C9C6").s().p("AghCSIAAjiIhPAAIAAhBIDhAAIAABBIhPAAIAADig");
	this.shape_11.setTransform(-394.675,50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9C9C6").s().p("AhkCSIAAkjIDJAAIAABBIiDAAIAAAwICDAAIAABAIiDAAIAAAxICDAAIAABBg");
	this.shape_12.setTransform(-435.675,50.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9C9C6").s().p("AAwCSIg+iJIgmAwIAABZIhGAAIAAkjIBGAAIAAB3IBdh3IBRAAIhWBrIBXC4g");
	this.shape_13.setTransform(-463.775,50.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9C9C6").s().p("ABHCSIgPgsIhvAAIgPAsIhHAAIBskjIBDAAIBsEjgAAiAqIgihhIghBhIBDAAg");
	this.shape_14.setTransform(-496.175,50.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9C9C6").s().p("AghCSIAAjiIhPAAIAAhBIDhAAIAABBIhPAAIAADig");
	this.shape_15.setTransform(-527.075,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},50).to({state:[]},1).wait(120));

	// highlight_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4MKLIAA0VMAwZAAAIAAUVg");
	var mask_graphics_50 = new cjs.Graphics().p("A4MKLIAA0VMAwZAAAIAAUVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-154.875,y:53.425}).wait(50).to({graphics:mask_graphics_50,x:-154.875,y:53.425}).wait(1).to({graphics:null,x:0,y:0}).wait(120));

	// highlight
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(201,201,198,0.298)","rgba(201,201,198,0)"],[0,0.608],-151.6,0,151.7,0).s().p("A3sH1IPqvpIfuAAIAAPpg");
	this.shape_16.setTransform(152.6,50.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(201,201,198,0.298)","rgba(201,201,198,0)"],[0,0.608],-151.6,0,151.7,0).s().p("A3sH1IPpvpIfwAAIAAPpg");
	this.shape_17.setTransform(110.7,50.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(201,201,198,0.298)","rgba(201,201,198,0)"],[0,0.608],-151.6,0,151.7,0).s().p("A3rH1IPovpIfwAAIAAPpg");
	this.shape_18.setTransform(71.9,50.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(201,201,198,0.298)","rgba(201,201,198,0)"],[0,0.608],-151.6,0,151.7,0).s().p("A3sH1IPpvpIfvAAIAAPpg");
	this.shape_19.setTransform(36.2,50.075);
	this.shape_19._off = true;

	var maskedShapeInstanceList = [this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16,p:{x:152.6}}]}).to({state:[{t:this.shape_17,p:{x:110.7}}]},1).to({state:[{t:this.shape_18,p:{x:71.9}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_17,p:{x:3.6}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{x:-52.3}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{x:-145.45}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_16,p:{x:-151.65}}]},1).to({state:[{t:this.shape_16,p:{x:-151.65}}]},36).to({state:[]},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-25.9},0).to({_off:true},1).wait(1).to({_off:false,x:-75.6},0).wait(1).to({x:-95.75},0).wait(1).to({x:-112.85},0).wait(1).to({x:-126.8},0).wait(1).to({x:-137.7},0).to({_off:true},1).wait(1).to({_off:false,x:-150.1},0).to({_off:true},1).wait(157));

	// shadow_layer
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-596,-19.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-596,-19.8,632,155);


(lib.BSWH_txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003DA6").s().p("AmxD3IAAgqIgnAAIAAAqIgWAAIAAhhIAWAAIAAAlIAnAAIAAglIAVAAIAABhgApyD3IAAhPIgcAAIAAgSIBPAAIAAASIgdAAIAABPgAseD3IAAhhIAVAAIAABPIAvAAIAAASgAuED3IgHgWIgkAAIgHAWIgWAAIAlhhIAWAAIAkBhgAupDSIAZAAIgMgkIgBAAgAxgD3IAAhhIBIAAIAAASIgzAAIAAAVIAvAAIAAAQIgvAAIAAAYIA0AAIAAASgAzPD3IAAgqIgnAAIAAAqIgVAAIAAhhIAVAAIAAAlIAnAAIAAglIAVAAIAABhgAvABqQgEgEAAgIQAAgHAFgEQAEgEAGAAIAIAAQAIAAAEgHQANgTAGgPQAEgKAAgHQAAgHgHgSIgdhRQgGgQgDgEQgFgIgIgBIgKgCQgCgBABgEQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAIAkABIAhgBQACAAAAAEQAAAEgBABIgKACQgIABAAAEQAAAEALAfIAMAjIAGAQIAFALQACgCAMgaIANgeQANgfAAgHQAAgFgJgBIgMgCQgCgBAAgEQAAgEADAAIA+AAQACABAAADQAAADgBACIgHABQgJACgHAJQgGAIgKAVIgVArQgcA4gfBEQgIASgQAAQgIAAgFgEgALGAdQgIgWgPgiIgXgzQgjBHgMAkIgFABIgFgBQgLgcgPghIhJidQgGgOgEgEQgGgIgLgBIgJgBQgCgCABgDQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBIAnABIArgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAQABADgCACIgJABQgNABAAAFQAAAFAUAuIBCCNIAdg+IAGgPQAAgCgDgHQgWgxgUgqQgFgKgEgFQgGgFgJgBIgJgBIgCgFQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBIAoABIApgBQABAAAAABQABAAAAABQAAAAABABQAAABAAAAIgCAFIgJABQgLABgCADQgBAEAFANIAeBCQAMgZAKgZQAKgXAAgHQgBgHgKAAIgLgBIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAjABIAlgBQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAADgBACIgMABQgKABgIALIgNAVQgNAZgQAkQgDAGAAADQAAADACAGIAnBWIAihQQAVgyAJgZQALgfAAgDQAAgJgMAAIgLgBQgCgCAAgDQAAgDADgBIAkABIABAAIACAAQASAAALgHIATgOIACAAQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBAuIAABQQAAAGABABQAagTAZAAQAZAAANAOQALANAAAVIAAA/QAAAUACAFQACAGALABIAJABQADABgBAEQAAABAAABQAAABgBABQAAAAAAAAQgBABAAAAIgmgBIgjABQgCgBgBgEQAAgDACgCIAHgBQALgCACgFQACgFAAgUIAAg2QAAgTgJgKQgJgLgSAAQgRAAgNAKQgFAEgBAEQgBADAAAJIAABAQAAAUACAFQACAGAKABIAIABQABABAAAAQAAAAAAABQABABAAAAQAAABAAABQgBAEgCABIgkgBIgkABQgCgBgBgEQAAgEACgBIAJgBQALgBACgGQACgFAAgUIAAirQAAgQgCgGQgBgDgDAAQgIADgFAJQgFAIgTAsIgbA/QgZA6gWA6IgFABIgFgBgAmpAQQgDgHgEgPQgDgRgBgOQACgBADgBQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAQAHAVALAOQATAUAcAAQAXAAANgNQAMgLAAgSQAAgQgFgKQgHgPgTgMIgkgYQgpgbAAgmQAAgcAUgSQAWgTAjAAQASAAARAFIANACQADAIACANQACAOAAAMQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAAgBgBQgFgTgJgJQgNgPgZAAQgYAAgMAOQgJALAAARQAAAaAgAVIAeASQAwAdAAAsQAAAfgWASQgWAUgkAAQgjAAgYgOgATSAVQgNgGgJgLQgQgUAAgcQAAgkAVgYQAWgZAhAAQAXAAAQANQAOAOAAARQAAAIgBACQgBADgVAAIhGAAQgIAAgBABQgBACAAAHQAAAeAQAUQARAUAdAAQAKAAAIgEQAIgEAJgKQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACAEQgJARgSAKQgQAIgQAAQgSAAgPgIgATXhrQgNALAAAKQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAbAAQAjAAAEgDQADgCAAgFQAAgKgGgGQgIgIgPAAQgQAAgNALgARdARQgHgKAAgSIAAhWQAAgIgBgCQgCgCgGAAIgKAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAQgEAIgHQAJgIAHgOQAGgCACAEIAAAQQAAAGABABQABABAFAAIAqAAQADACAAAGQAAAGgDABIgrAAQgEAAgCACIAAAIIAABGQAAAUAEAJQAGAMARAAQAGAAAEgCIAKgFQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgGAHgJAFQgLAGgNAAQgXAAgJgMgADCARQgIgKAAgSIAAhWQAAgIgBgCQgBgCgGAAIgKAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIABgFQAQgEAIgHQAIgIAHgOQAGgCADAEIAAAQQAAAGABABQAAABAFAAIAqAAQAEACgBAGQAAAGgCABIgrAAQgFAAgBACQgBABAAAHIAABGQAAAUAFAJQAGAMARAAQAGAAAEgCIAJgFQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAAAEQgGAHgJAFQgLAGgOAAQgWAAgJgMgABQARQgIgKAAgSIAAhWQAAgIgBgCQgBgCgGAAIgLAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQARgEAHgHQAKgIAHgOQAFgCACAEIAAAQQAAAGABABQABABAGAAIApAAQADACAAAGQAAAGgDABIgqAAQgFAAgBACIgBAIIAABGQAAAUAEAJQAHAMAQAAQAGAAAFgCIAJgFQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgPASgYAAQgXAAgJgMgAhiAIQgXgVAAgjQAAgjAYgYQAWgWAjAAQAgAAAVAVQAWAWAAAjQAAAjgWAWQgVAXgjAAQgiAAgVgVgAhMhlQgMASAAAeQAAAdALATQAOAWAXAAQAXAAALgUQAIgQAAgaQAAgdgJgUQgNgYgZAAQgTAAgMARgAjwAKQgWgUAAgjQAAgiAWgXQAZgbAsAAQATAAAPAGQAFAFAAAKQAAAGgCAEQgDAEgDAAQgDAAgCgDQgHgIgJgGQgLgGgLAAQgWAAgOAQQgQ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");
	this.shape.setTransform(37.07,-35.2875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_txt, new cjs.Rectangle(-95.5,-60,265.2,49.4), null);


(lib.text_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Txt_carousel
	this.instance = new lib.Txt_carousel();
	this.instance.setTransform(149.5,340.25,1,1,0,0,0,-101.5,50.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:333.85,alpha:1},14).wait(99).to({alpha:0},6).to({_off:true},1).wait(98));

	// txt_your
	this.instance_1 = new lib.txt_your();
	this.instance_1.setTransform(116,376,1,1,0,0,0,-32.5,10.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:369.6,alpha:1},14).wait(24).to({x:109.6},6,cjs.Ease.quadOut).wait(21).to({x:119.7},6,cjs.Ease.quadInOut).wait(19).to({x:119.5},6,cjs.Ease.quadInOut).wait(17).to({alpha:0},6).to({_off:true},1).wait(98));

	// txt_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AF3BkImbAAIm0AAIAAjHINPAAIBiAAIAADHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:421.55,y:55.25}).wait(120).to({graphics:null,x:0,y:0}).wait(98));

	// txt_self
	this.instance_2 = new lib.txt_self();
	this.instance_2.setTransform(185.2,396.4,1,1,0,0,0,-35.6,20.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({alpha:1},5).to({y:364.2},9,cjs.Ease.quadInOut).wait(24).to({y:364.4},0).to({y:334},6,cjs.Ease.quadOut).to({_off:true},1).wait(173));

	// txt_mom
	this.instance_3 = new lib.txt_mom();
	this.instance_3.setTransform(186.4,397.2,1,1,0,0,0,-42.4,20.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({y:364.6},6,cjs.Ease.quadOut).wait(21).to({y:328.4},6,cjs.Ease.quadOut).to({_off:true},1).wait(146));

	// txt_sis
	this.instance_4 = new lib.txt_sis();
	this.instance_4.setTransform(184.8,401,1,1,0,0,0,-35.6,20.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({y:364.2},6,cjs.Ease.quadOut).wait(19).to({y:328.4},6,cjs.Ease.quadOut).to({_off:true},1).wait(121));

	// txt_bff
	this.instance_5 = new lib.txt_bff();
	this.instance_5.setTransform(185.4,396.4,1,1,0,0,0,-35.6,20.4);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({y:364.4},6,cjs.Ease.quadOut).wait(17).to({alpha:0},6).to({_off:true},1).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453.6,72.8);


(lib.bswh_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BSWH_Icon("synched",0,false);
	this.instance.setTransform(1.75,-36.75,0.6243,0.6243,-47.4736,0,0,0.2,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,rotation:0,y:-36.7,alpha:1,startPosition:9},9,cjs.Ease.quadOut).to({startPosition:23},14).wait(27).to({mode:"single",startPosition:50},0).wait(70));

	// Layer_3
	this.instance_1 = new lib.BSWH_txt();
	this.instance_1.setTransform(0.45,19.75,1,1,0,0,0,-130,24.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-65.5,327.20000000000005,57.6);


// stage content:
(lib.BAY_PowerOfTwo_300x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(150,25,0.9375,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(175));

	// BSWH_Logo
	this.instance = new lib.bswh_logo("synched",0,false);
	this.instance.setTransform(219.35,24.35,0.4313,0.4313,0,0,0,137.6,-35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175));

	// txt_mammogram
	this.instance_1 = new lib.txt_mammogram();
	this.instance_1.setTransform(149.55,341.35,1,1,0,0,0,-119,48.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({y:333.35,alpha:1},10,cjs.Ease.quadOut).wait(41));

	// ctaBtn
	this.instance_2 = new lib.ctaBtn("synched",0,false);
	this.instance_2.setTransform(255,34.3,0.1191,0.1191,0,0,0,-286.8,51.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(40).to({mode:"single",startPosition:50},0).wait(1));

	// text_animation
	this.instance_3 = new lib.text_animation("synched",0,false);
	this.instance_3.setTransform(74.8,26.05,0.7036,0.7036,0,0,0,364.4,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175));

	// background_Color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(150,25,0.9375,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,24,152,357.8);
// library properties:
lib.properties = {
	id: 'EF812760E3C644B78B4E2355CF606C8E',
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap1.png", id:"Bitmap1"}
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
an.compositions['EF812760E3C644B78B4E2355CF606C8E'] = {
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