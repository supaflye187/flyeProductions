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



(lib.back_image = function() {
	this.initialize(img.back_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,250);


(lib.drip_01 = function() {
	this.initialize(img.drip_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,250);


(lib.drip_01a = function() {
	this.initialize(img.drip_01a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,250);


(lib.drip_02 = function() {
	this.initialize(img.drip_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,250);


(lib.drip_03 = function() {
	this.initialize(img.drip_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,250);


(lib.learnMore = function() {
	this.initialize(img.learnMore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,88);


(lib.sprayBottle = function() {
	this.initialize(img.sprayBottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,313);


(lib.text_sheet = function() {
	this.initialize(img.text_sheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,264);// helper functions:

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


(lib.txt_theyAgreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00B0FF").s().p("AHxB4QgKgLAAgVIAAg2IAXAAIAAAzQAAAKADAGQAEAGAKAAQAJAAADgFQAEgFAAgJIAAgtIgCgHIgCgFIgEgFQgKgMgLgLQgMgKgGgJIgFgHIgDgHIgBgIIAAgxQAAgqApAAQAVAAAIAKQAIALAAAVIAAAvIgVAAIAAgsQAAgJgEgGQgDgGgKAAQgQAAAAASIAAAmIABAMIAFAIIAmAoIAGAIIADAIIACALIABAyQAAAVgKALQgIAKgWAAQgVAAgJgKgAhCCAQgHgCgFgFQgFgFgDgIQgDgJAAgMIAAisQAAgWAKgLQAKgLAUAAQAVAAAJALQAJALAAAWIAAAtIgVAAIAAgtQAAgKgEgFQgEgFgKAAQgJAAgEAFQgEAFAAAKIAACsQAAAKAFAFQAFAFAHAAQARAAABgSIAAg6IgTAAIAAgWIAqAAIAAB4IgEAAIgIgOQgDAIgJAEQgIADgLAAQgIAAgHgCgAJGCAIAAgnIAWAAIAAAngAGCCAIAAjnIgcAAIAAgXIBQAAIAAAXIgdAAIAADngAFACAIAAj+IAYAAIAAD+gADDCAIAAj+IBDAAIAAAXIgsAAIAABaIAfAAIAAAXIgfAAIAABeIAuAAIAAAYgABuCAIAAj+IBDAAIAAAXIgsAAIAABaIAfAAIAAAXIgfAAIAABeIAuAAIAAAYgABFCAIgSh0IgDAAIgPAAIAAB0IgYAAIAAj+IAnAAQAWAAALAKQALAKAAAaIAAAyQAAAcgTAJIAWB5gAAhgIIAPAAQALAAAFgFQAEgGAAgKIAAgwQAAgOgEgGQgEgGgMAAIgPAAgAh4CAIgFgrIgnAAIgFArIgXAAIAjj+IAcAAIAhD+gAiAA/IgQiCIgRCCIAhAAgAkpCAIAAhzIgliLIAZAAIAZBpIAZhpIAXAAIgmCLIAABzgAmaCAIAAj+IBEAAIAAAXIgsAAIAABaIAfAAIAAAXIgfAAIAABeIAtAAIAAAYgAnGCAIAAh2IghAAIAAB2IgXAAIAAj+IAXAAIAABxIAhAAIAAhxIAYAAIAAD+gAo/CAIAAjnIgcAAIAAgXIBQAAIAAAXIgdAAIAADngAJGAOIAAglIAWAAIAAAlgAHEhFIAAgKIACAAQAFAAAAgGIAAgKIgKAAIAAgfIAWAAIAAAoQAAAIgEAEQgEAFgJAAg");
	this.shape.setTransform(-0.825,-0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_theyAgreen, new cjs.Rectangle(-63.4,-22.3,160.6,41.2), null);


(lib.txt_trademark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgdBMIAAgbIgIAAIAAgEIAIgEIADgKIAHAAIAAALIAOAAIAAAHIgOAAIAAAaQAAAEABACQADACADAAIAHgBIAAAHIgFACIgFAAQgOAAAAgPgAhmBXQgEgEAAgHQAAgHAFgEQAGgEAMAAIAIAAIAAgDQAAgFgCgCQgCgCgFAAIgHABIgHACIgDgHIAJgDIAJgBQAJAAAEAEQAFAEAAAJIAAAgIgHAAIgCgHQgEAFgEACQgDABgGAAQgHAAgEgEgAhcBGQgDACAAAEQAAAEACABQABACAEAAQAGAAADgDQAEgDAAgGIAAgEIgHAAQgGABgEACgAiUBVQgGgHAAgMQgBgMAHgGQAGgHAJAAQAKAAAGAGQAFAFABALIAAAFIghAAQABAHADAEQADAEAHAAIAIgBIAIgDIAAAJQgDACgEAAIgJABQgLAAgHgGgAh5A9QAAgGgEgDQgCgDgGAAQgEAAgDADQgDADgBAGIAXAAIAAAAgAkaBVQgHgHAAgMQAAgMAGgGQAGgHAKAAQAKAAAFAGQAGAFAAALIAAAFIghAAQABAHAEAEQADAEAHAAIAIgBIAIgDIAAAJQgEACgEAAIgJABQgLAAgGgGgAkAA9QAAgGgDgDQgDgDgFAAQgEAAgDADQgEADAAAGIAWAAIAAAAgAlGBVQgFgHAAgMQAAgMAGgHQAGgGALAAQAIAAAGADIgDAIQgGgDgFAAQgNAAABARQAAAIADAEQADAFAGAAQAHAAAGgEIAAAJIgGACIgHABQgMAAgGgGgAmwBXQgDgEAAgHQgBgHAGgEQAFgEAMAAIAIAAIAAgDQAAgFgCgCQgCgCgFAAIgHABIgGACIgEgHIAJgDIAJgBQAJAAAFAEQAFAEgBAJIAAAgIgGAAIgDgHQgDAFgEACQgEABgGAAQgGAAgFgEgAmmBGQgDACAAAEQAAAEACABQACACAEAAQAGAAADgDQAEgDgBgGIAAgEIgGAAQgHABgEACgApTBYQgGgDgDgGQgCgGAAgHQAAgMAFgHQAGgGALAAQALAAAGAHQAHAGAAAMQAAAMgHAGQgFAHgMAAQgHAAgEgDgApRA2QgDAEAAAIQAAARAMAAQANAAAAgRQAAgRgNAAQgGAAgDAFgArLBVQgGgHgBgMQAAgMAHgGQAGgHAJAAQAKAAAGAGQAFAFABALIAAAFIghAAQABAHADAEQADAEAHAAIAIgBIAIgDIAAAJQgDACgEAAIgJABQgLAAgHgGgAqwA9QAAgGgEgDQgCgDgGAAQgEAAgDADQgDADgBAGIAXAAIAAAAgAAhBaIAAgeQAAgFgCgDQgCgDgFAAQgGAAgDAEQgEAEAAAJIAAAYIgKAAIAAhEIAKAAIgBAaIACAAQABgDAEgCQAEgCAFAAQARAAAAASIAAAfgAg1BaIAAhEIAKAAIAABEgAivBaIAAgdIgeAAIAAAdIgLAAIAAhAIALAAIAAAaIAeAAIAAgaIAKAAIAABAgAleBaIAAgeQAAgFgDgDQgCgDgFAAQgGAAgEAEQgCAEAAAJIAAAYIgKAAIAAgwIAIAAIABAGIABAAQABgDAEgCQAFgCAEAAQASAAAAASIAAAfgAnGBaIAAgeQAAgFgDgDQgBgDgFAAQgGAAgDAEQgDAEAAAHIAAAaIgKAAIAAgeQAAgFgCgDQgCgDgFAAQgFAAgEAEQgDAEABAJIAAAYIgKAAIAAgwIAIAAIABAGIABAAQABgDAFgCQADgCAFAAQALAAADAHIABAAQACgDAFgCQAEgCAFAAQAIAAAEAEQAEAFAAAJIAAAfgAonBaIAAgwIAIAAIABAIIAAAAQADgEAEgDQAEgCAEAAIAFAAIgBAKIgEgBQgGAAgFAEQgDAEgBAHIAAAZgAp4BaIAAgpIgIAAIAAgEIAIgEIAAgDQABgIADgEQAFgFAIAAQAGAAAEACIgCAIIgHgBQgEAAgCACQgBACAAAEIAAAEIAMAAIAAAHIgMAAIAAApgAqdBaIAAgwIAIAAIABAIIABAAQACgEAEgDQAEgCAEAAIAFAAIgBAKIgFgBQgFAAgFAEQgDAEAAAHIAAAZgAsCBaIAAhAIATAAQALAAAHAFQAFAFAAAJQABAKgHAGQgGAFgNAAIgGAAIAAAYgAr3A5IAFAAQAIAAAEgCQADgDAAgGQAAgGgCgCQgEgDgHAAIgHAAgAA9A2QgFgDgDgFQgCgEAAgGQAAgGACgFQADgFAFgDQAFgDAGAAQAGAAAFADQAFADADAFQADAFAAAGQAAAFgDAFQgCAFgFADQgGADgGAAQgGAAgFgDgAA/AUQgEADgCAEQgDAEAAAFQAAAFADAEQACAEAEACQAFADAEAAQAFAAAEgDQAEgCADgEQACgEAAgFQAAgFgCgEQgDgEgEgDQgEgCgFAAQgEAAgFACgABOAxIgGgKIgCAAIAAAKIgGAAIAAgaIAHAAQAGAAABACQADACAAAEQAAAFgEABIAHAMgABGAjIABAAIAEgBIABgDIgBgDIgEgBIgBAAgAh2gDQgEgEAAgGQAAgFADgDQACgDAGgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgCgEQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEQgEgCgDgEQgCgDAAgFQAAgIAFgEQAFgFAJAAIAIABIARAAIAAAGIgIABIABAEIABAFQABAHgGAFQgFAEgJAAIgEAAQgEACAAACQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFABIAJAAQAIAAAEADQAEAEABAGQAAAIgIAFQgGAEgNAAQgKAAgGgDgAhugTQgDACAAADQAAAEADABQADACAFAAQAIAAAFgCQAEgDAAgEQAAgDgDgBQgCgBgGAAIgHAAQgFAAgCACgAhrg+QgCADAAAFQAAAEACADQADACAEAAQAJAAAAgJQAAgFgCgDQgCgCgFAAQgEAAgDACgAK6gXQgFgEgDgFQgDgGAAgIQAAgLAGgHQAGgHALAAQAKAAAHAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgHAAgFgDgAK8g6QgCAEAAAIQAAARAMAAQANAAAAgRQAAgQgNAAQgHAAgDAEgAIYgYQgEgEAAgHQAAgIAGgEQAFgDAMgBIAIAAIAAgDQAAgEgCgCQgCgDgFAAIgHABIgHADIgDgIIAJgDIAJgBQAJAAAEAEQAFAEAAAJIAAAhIgHAAIgCgHQgEAEgEACQgDACgGAAQgHAAgEgEgAIigqQgDACAAAFQAAADACACQABACAEAAQAGAAADgDQAEgEAAgFIAAgEIgHAAQgGAAgEACgAGWgbQgGgHAAgLQAAgMAGgHQAGgHAKAAQAKAAAGAGQAFAGAAAKIAAAGIggAAQAAAHADAEQAEADAGAAIAIAAIAIgDIAAAIQgDACgEABIgJABQgLAAgHgHgAGxgzQAAgGgDgDQgDgDgFAAQgEAAgEADQgDADAAAGIAWAAIAAAAgAFfgbQgEgHAAgLQAAgMAEgHQAGgHAJAAQAJAAAGAHIAAAAIAAgIIAAgSIAKAAIAABFIgIAAIgCgHIAAAAQgGAIgJAAQgJAAgGgHgAFog6QgDAFAAAIQAAAIADAEQADAEAFAAQAHAAADgDQACgEABgIIAAgBQAAgKgDgDQgDgEgHAAQgFAAgDAEgAEtgYQgFgEAAgHQAAgIAGgEQAGgDALgBIAJAAIAAgDQAAgEgDgCQgCgDgEAAIgHABIgHADIgDgIIAIgDIAJgBQAJAAAFAEQAEAEABAJIAAAhIgIAAIgCgHQgDAEgEACQgEACgFAAQgIAAgDgEgAE3gqQgEACAAAFQAAADACACQACACAEAAQAGAAADgDQAEgEAAgFIAAgEIgHAAQgHAAgDACgADqgkIAAgaIgHAAIAAgFIAHgDIAEgLIAGAAIAAALIAOAAIAAAIIgOAAIAAAaQAAAEACACQACABADAAIAHgBIAAAIIgEABIgFABQgPAAAAgQgAChgbQgFgHAAgLQAAgMAFgHQAFgHAKAAQAJAAAFAHIAAAAIAAgIIAAgSIAKAAIAABFIgIAAIgCgHIAAAAQgFAIgJAAQgKAAgFgHgACpg6QgCAFAAAIQAAAIACAEQADAEAGAAQAGAAADgDQADgEAAgIIAAgBQAAgKgDgDQgDgEgGAAQgGAAgDAEgABygbQgHgHAAgLQAAgMAGgHQAGgHAKAAQAKAAAFAGQAGAGAAAKIAAAGIghAAQABAHAEAEQADADAHAAIAIAAIAIgDIAAAIQgEACgEABIgJABQgLAAgGgHgACMgzQAAgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAWAAIAAAAgAAegbQgGgHAAgLQgBgMAHgHQAGgHAJAAQAKAAAGAGQAGAGAAAKIAAAGIghAAQABAHADAEQAEADAGAAIAIAAIAIgDIAAAIQgDACgEABIgJABQgLAAgHgHgAA5gzQgBgGgDgDQgCgDgGAAQgEAAgDADQgDADgBAGIAXAAIAAAAgAgEgkIAAgaIgHAAIAAgFIAIgDIADgLIAFAAIAAALIAOAAIAAAIIgOAAIAAAaQAAAEACACQACABADAAIAHgBIAAAIIgEABIgGABQgNAAAAgQgAgxgXIAAgJQAIAEAIAAQAKAAAAgGIgCgDIgDgDIgHgDQgJgDgCgDQgDgDAAgGQAAgGAFgDQAFgEAJAAQAIAAAIAEIgEAIQgHgEgGAAQgIAAAAAFQAAAAAAABQAAAAAAABQABABAAAAQABAAAAABIAJAEIAJAEQADACABADQACACAAAEQgBAHgFAEQgFAEgKAAQgJAAgGgDgAiigbQgGgHAAgLQAAgMAGgHQAGgHAKAAQAKAAAGAGQAFAGAAAKIAAAGIggAAQAAAHADAEQAEADAGAAIAIAAIAIgDIAAAIQgDACgEABIgJABQgLAAgHgHgAiHgzQAAgGgDgDQgDgDgFAAQgFAAgDADQgDADAAAGIAWAAIAAAAgAkNgYQgEgEAAgHQAAgIAFgEQAGgDALgBIAJAAIAAgDQAAgEgCgCQgDgDgEAAIgHABIgGADIgEgIIAIgDIAJgBQAKAAAFAEQAEAEAAAJIAAAhIgHAAIgDgHQgDAEgDACQgFACgFAAQgHAAgEgEgAkDgqQgDACgBAFQAAADACACQADACAEAAQAFAAAEgDQADgEAAgFIAAgEIgGAAQgIAAgDACgAlOgXIAAgJQAIAEAIAAQAKAAAAgGIgBgDIgEgDIgHgDQgJgDgCgDQgDgDAAgGQAAgGAFgDQAFgEAIAAQAJAAAIAEIgDAIQgJgEgFAAQgIAAAAAFQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABIAJAEIAJAEQADACABADQABACAAAEQABAHgGAEQgFAEgJAAQgKAAgGgDgAmjgbQgHgHAAgLQAAgMAGgHQAGgHAKAAQAKAAAFAGQAGAGAAAKIAAAGIghAAQABAHADAEQAEADAHAAIAHAAIAIgDIAAAIQgDACgEABIgJABQgLAAgGgHgAmJgzQAAgGgDgDQgDgDgFAAQgFAAgDADQgCADgBAGIAWAAIAAAAgAn8gbQgGgHAAgLQgBgMAHgHQAGgHAJAAQAKAAAGAGQAFAGABAKIAAAGIghAAQABAHADAEQADADAHAAIAIAAIAIgDIAAAIQgDACgEABIgJABQgLAAgHgHgAnhgzQAAgGgEgDQgCgDgGAAQgEAAgDADQgDADgBAGIAXAAIAAAAgAotgbQgHgHABgLQAAgMAFgHQAHgHAJAAQALAAAFAGQAGAGgBAKIAAAGIggAAQAAAHAEAEQADADAHAAIAIAAIAIgDIAAAIQgDACgFABIgJABQgLAAgGgHgAoTgzQAAgGgCgDQgEgDgFAAQgEAAgDADQgDADAAAGIAVAAIAAAAgAqsgXQgGgEgCgFQgDgGAAgIQAAgLAGgHQAGgHALAAQAKAAAHAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgHAAgFgDgAqqg6QgDAEAAAIQAAARANAAQANAAAAgRQAAgQgNAAQgGAAgEAEgALogVIAAgpIgIAAIAAgFIAIgDIAAgDQAAgJAEgEQAEgEAJAAQAFAAAFACIgCAIIgIgCQgDAAgCACQgBADgBAEIAAADIAMAAIAAAIIgMAAIAAApgAKNgVIgQgWIgGAFIAAARIgKAAIAAhFIAKAAIgBArIABAAIAFgHIAQgQIALAAIgTAVIAUAcgAJJgVIAAgxIAIAAIABAJIABAAQACgFAEgCQAEgDAFAAIAFABIgCAJIgEAAQgGAAgEAEQgEAEAAAGIAAAagAIBgVIAAgeQAAgGgCgDQgCgCgFAAQgFAAgEADQgCAEAAAIIAAAaIgKAAIAAgeQAAgGgCgDQgCgCgFAAQgGAAgDAEQgDADAAAKIAAAYIgKAAIAAgxIAIAAIACAHIAAAAQACgEAEgCQAEgCAEAAQAMAAADAIIABAAQACgEAEgCQAEgCAFAAQAJAAAEAFQADAEAAAJIAAAggAEKgVIAAgxIAIAAIABAJIABAAQACgFAEgCQAEgDAEAAIAFABIgBAJIgFAAQgFAAgFAEQgDAEAAAGIAAAagABMgVIAAgxIAIAAIABAJIABAAQACgFADgCQAFgDAEAAIAFABIgBAJIgFAAQgFAAgFAEQgDAEAAAGIAAAagAhEgVIAAgxIAKAAIAAAxgAjHgVIAAgxIAIAAIABAJIAAAAQADgFAEgCQAEgDAEAAIAFABIgBAJIgEAAQgHAAgDAEQgFAEAAAGIAAAagAlhgVIAAgxIAJAAIAAAxgAnUgVIAAgHIAZgiIgYAAIAAgIIAjAAIAAAHIgYAiIAZAAIAAAIgApTgVIAAgxIAIAAIABAJIABAAQADgFADgCQAEgDAFAAIAEABIgBAJIgEAAQgGAAgEAEQgEAEAAAGIAAAagAp/gVIAAhAIAkAAIAAAIIgaAAIAAAUIAYAAIAAAJIgYAAIAAAbgArKgVIAAgxIAKAAIAAAxgAsCgVIAAhAIATAAQANAAAHADQAFAEAAAJQAAAFgDAEQgDAEgFABIAAAAQAGABAEAEQADAEAAAGQAAAJgGAFQgGAFgLAAgAr3geIAKAAQAHAAADgDQAEgCAAgGQAAgFgEgCQgDgCgHAAIgKAAgAr3g7IAKAAQAGAAADgCQADgCAAgFQAAgFgDgCQgEgCgGAAIgJAAgAhDhPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAlhhPQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgArJhPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape.setTransform(556,-508.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_trademark, new cjs.Rectangle(478.9,-517.3,154.20000000000005,18.199999999999932), null);


(lib.txt_rise = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAC2QgOgRAAgfIAAhTIAiAAIAABOQAAAPAFAKQAGAIAOABQAOAAAFgIQAGgHAAgOIAAhFIgCgKIgEgIIgGgIQgPgSgRgRQgRgPgKgNIgHgLIgEgLIgChWQAAhAA9AAQAgAAAMAPQANAQAAAhIAABGIghAAIAAhCQAAgPgFgIQgFgJgOAAQgZAAAAAcIAAA4IABASIAHANIA7A+IAIAMIAFAMIADAQIABBNQAAAfgOARQgNAPghAAQggAAgOgPgACKDBIAAmCIBmAAIAAAlIhDAAIAACHIAvAAIAAAjIgvAAIAACQIBFAAIAAAjgAhSDBIAAmCIAjAAIAAGCgAiXDBIgbiwIgcABIAACvIgjAAIAAmCIA6AAQAiABARAQQARAPAAAnIAABMQAAAqgdAOIAgC3gAjOgNIAYAAQAQAAAHgIQAHgIAAgQIAAhJQAAgVgGgJQgGgIgTAAIgXAAg");
	this.shape.setTransform(180.025,-37.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rise, new cjs.Rectangle(155.8,-57.1,48.5,39.5), null);


(lib.txt_peoplePrefer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQLBoIAAjPQgBg0AxAAQAwAAAAA0IAADPQAAA0gwAAQgxAAABg0gAQnhnIAADPQAAAYAUAAQAUAAAAgYIAAjPQAAgYgUAAQgUAAAAAYgAv4BoIAAjPQgBg0AxAAQAvAAAAA0IAADPQAAA0gvAAQgxAAABg0gAvchnIAADPQAAAYAUAAQAUAAAAgYIAAjPQAAgYgUAAQgUAAAAAYgASDCYIAAkwIBTAAIAAAdIg2AAIAABtIAmAAIAAAbIgmAAIAACLgAN3CYIAAkwIAdAAIAAEUIA2AAIAAAcgAMPCYIAAkwIBRAAIAAAdIg1AAIAABrIAlAAIAAAbIglAAIAABxIA3AAIAAAcgAKnCYIAAkwIBRAAIAAAdIg1AAIAABrIAmAAIAAAbIgmAAIAABxIA2AAIAAAcgAJDCYIAAkwIBTAAIAAAdIg3AAIAABtIAmAAIAAAbIgmAAIAACLgAGpCYIAAkwIBRAAIAAAdIg1AAIAABrIAlAAIAAAbIglAAIAABxIA3AAIAAAcgAFzCYIAAiNIgoAAIAACNIgdAAIAAkwIAdAAIAACIIAoAAIAAiIIAbAAIAAEwgADfCYIAAkTIghAAIAAgdIBfAAIAAAdIgiAAIAAETgABiCYIgWiKIgWAAIAACKIgcAAIAAkwIAuAAQAbABANAMQANAMAAAeIAAA9QAAAhgXAKIAaCRgAA2gLIATAAQANAAAFgFQAGgHAAgMIAAg6QgBgRgFgGQgEgHgPAAIgSAAgAhNCYIAAkwIBQAAIAAAdIg0AAIAABrIAlAAIAAAbIglAAIAABxIA1AAIAAAcgAixCYIAAkwIBSAAIAAAdIg2AAIAABtIAlAAIAAAbIglAAIAACLgAkZCYIAAkwIBRAAIAAAdIg0AAIAABrIAlAAIAAAbIglAAIAABxIA2AAIAAAcgAlMCYIgWiKIgWAAIAACKIgbAAIAAkwIAtAAQAbABANAMQANAMABAeIAAA9QAAAhgXAKIAZCRgAl4gLIATAAQANAAAFgFQAGgHAAgMIAAg6QAAgRgFgGQgFgHgPAAIgSAAgAoKCYIAAkwIAvAAQAbAAAMANQAOAOAAAdIAAAxQgBAegNAMQgMAMgbAAIgTAAIAACRgAnugTIATAAQAMAAAGgGQAHgHAAgOIAAgyQgBgOgGgHQgEgGgOAAIgTAAgAqkCYIAAkwIBQAAIAAAdIg0AAIAABrIAlAAIAAAbIglAAIAABxIA2AAIAAAcgAsJCYIAAkwIAdAAIAAEUIA2AAIAAAcgAuACYIAAkwIAvAAQAbAAANANQANAOAAAdIAAAxQAAAegMAMQgNAMgbAAIgUAAIAACRgAtkgTIAUAAQANAAAFgGQAGgHAAgOIAAgyQAAgOgFgHQgGgGgOAAIgTAAgAxeCYIAAkwIBRAAIAAAdIg0AAIAABrIAlAAIAAAbIglAAIAABxIA2AAIAAAcgAzVCYIAAkwIAwAAQAbAAAMANQANAOAAAdIAAAxQAAAegNAMQgMAMgbAAIgUAAIAACRgAy5gTIAUAAQAMAAAGgGQAHgHgBgOIAAgyQAAgOgFgHQgGgGgNAAIgUAAg");
	this.shape.setTransform(28.2,-109.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_peoplePrefer, new cjs.Rectangle(-95.6,-124.6,247.6,31.099999999999994), null);


(lib.txt_over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjkBrIAAjVQAAg1AyAAQAwAAAAA1IAADVQAAA1gwAAQgyAAAAg1gAjHhqIAADVQAAAYAVAAQAUAAAAgYIAAjVQAAgYgUAAQgVAAAAAYgADGCcIgXiOIgWAAIAACOIgdAAIAAk4IAwAAQAbABANAMQAOANAAAfIAAA+QAAAigXALIAaCUgACZgLIATAAQANAAAGgGQAGgGAAgNIAAg7QgBgSgFgGQgEgHgPAAIgTAAgAASCcIAAk4IBTAAIAAAeIg2AAIAABuIAlAAIAAAcIglAAIAAB0IA3AAIAAAcgAhQCcIgnk4IAeAAIAdEHIAfkHIAdAAIgpE4g");
	this.shape.setTransform(49.7,-191.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_over, new cjs.Rectangle(26.8,-207.5,45.8,31.900000000000006), null);


(lib.txt_onTheGo = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AwPD8IAAn4MAgfAAAIAAH4g");
	mask.setTransform(434.55,-137.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-36,-269);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onTheGo, new cjs.Rectangle(330.6,-162.4,192.39999999999998,50.5), null);


(lib.txt_lessMessy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGqC6QgPgRAAggIAAhUIAjAAIAABOQAAAQAGAKQAFAJAQAAQANAAAGgIQAGgHAAgOIgBhHIgCgKIgEgIIgFgIQgQgTgSgRQgRgPgLgOIgHgLIgEgLIgCgMIAAhMQAAhCA/AAQAgAAANARQAOAPAAAiIAABIIgiAAIAAhEQAAgOgFgJQgGgKgOAAQgaAAAAAdIAAA6IACASIAHANIBEBLIAFANIADAQIABBPQAAAfgOARQgOARghAAQghAAgOgQgAETC6QgOgRAAggIAAhUIAjAAIAABOQAAAQAFAKQAGAJAPAAQAOAAAFgIQAGgHAAgOIAAhHIgCgKIgEgIIgGgIQgPgTgSgRQgSgPgKgOIgHgLIgEgLIgCgMIAAhMQAAhCA/AAQAgAAANARQANAPAAAiIAABIIgiAAIAAhEQAAgOgFgJQgFgKgPAAQgZAAAAAdIAAA6IABASIAHANIBFBLIAFANIADAQIABBPQAAAfgOARQgOARghAAQghAAgPgQgAkoC6QgOgRAAggIAAhUIAjAAIAABOQAAAQAFAKQAGAJAPAAQAOAAAFgIQAGgHAAgOIAAhHIgCgKIgEgIIgGgIQgPgTgSgRQgSgPgKgOIgHgLIgEgLIgCgMIAAhMQAAhCA/AAQAgAAANARQANAPAAAiIAABIIgiAAIAAhEQAAgOgFgJQgFgKgPAAQgZAAAAAdIAAA6IABASIAHANIA8A/IAJAMIAFANIADAQIABBPQAAAfgOARQgOARghAAQghAAgPgQgAm+C6QgPgRAAggIAAhUIAjAAIAABOQAAAQAGAKQAFAJAQAAQANAAAGgIQAGgHAAgOIgBhHIgCgKIgEgIIgFgIQgQgTgSgRQgRgPgLgOIgHgLIgEgLIgCgMIAAhMQAAhCA/AAQAgAAANARQAOAPAAAiIAABIIgiAAIAAhEQAAgOgFgJQgGgKgOAAQgaAAAAAdIAAA6IACASIAHANIBEBLIAFANIADAQIABBPQAAAfgOARQgOARghAAQghAAgOgQgAKzDGIAAg8IAiAAIAAA8gAJXDGIAAixIg4jZIAnAAIAlCiIAniiIAkAAIg6DZIAACxgACBDGIAAmKIBpAAIAAAlIhFAAIAACKIAwAAIAAAkIgwAAIAACTIBHAAIAAAkgAA7DGIABkiIgrEiIgfAAIgqkiIABEiIgiAAIAAmKIAxAAIApEzIAqkzIAyAAIAAGKgApQDGIAAmKIBoAAIAAAlIhEAAIAACKIAwAAIAAAkIgwAAIAACTIBGAAIAAAkgArUDGIAAmKIAkAAIAAFmIBGAAIAAAkg");
	this.shape.setTransform(40.075,-123.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_lessMessy, new cjs.Rectangle(-32.4,-143.3,145,40.30000000000001), null);


(lib.txt_IcyHot_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AuhEEIAAoHIdDAAIAAIHg");
	mask.setTransform(446.05,-40);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(149,-230);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_IcyHot_02, new cjs.Rectangle(353.1,-66,186,52), null);


(lib.txt_fromPain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAhAAIAAA5g");
	this.shape.setTransform(341.425,-19.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfDBIhCkZIABBWIAABUIAABvIggAAIAAmCIArAAIA7EbIgBhPIAAhNIAAh/IAfAAIAAGCg");
	this.shape_1.setTransform(329.6,-36.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRDBIAAmCIAjAAIAAGCg");
	this.shape_2.setTransform(317.275,-36.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlDBIgJhBIg4AAIgJBBIgjAAIA2mCIAoAAIAzGCgAAYBfIgMhgIgMhlIgLBlIgNBgIAwAAg");
	this.shape_3.setTransform(305.375,-36.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+DBIAAmCIA8AAQAhAAAQARQAQARAAAlIAAA/QAAAlgQAQQgQAPghABIgZAAIAAC3gAgbgYIAZAAQAPAAAHgIQAIgIAAgSIAAhAQAAgSgHgIQgHgIgQAAIgZAAg");
	this.shape_4.setTransform(291.925,-36.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4DBIAAh1IAAhSIABhUIgqEbIgeAAIgqkbIABBUIAABSIAAB1IggAAIAAmCIAvAAIApEuIAokuIAyAAIAAGCg");
	this.shape_5.setTransform(266.15,-36.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8CEIAAkHQAAhCA8ABQA9gBAABCIAAEHQAABCg9AAQg8AAAAhCgAgYiDIAAEHQAAAeAYABQAZgBAAgeIAAkHQAAgdgZAAQgYAAAAAdg");
	this.shape_6.setTransform(247.65,-36.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaDBIgNhYIgNhXIgFAAIgEAAIgTAAIAACvIgkAAIAAmCIA7AAQAhABAQAPQARAQAAAmIAABNQAAAqgdAOIASBcIAPBbgAgcgNIAXAAQAQAAAHgIQAHgIAAgQIAAhJQAAgVgGgJQgGgIgSAAIgXAAg");
	this.shape_7.setTransform(232.325,-36.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzDBIAAmCIBnAAIAAAlIhEAAIAACKIAvAAIAAAjIgvAAIAACwg");
	this.shape_8.setTransform(217.975,-36.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fromPain, new cjs.Rectangle(209,-68.2,179.3,60.400000000000006), null);


(lib.txt_easyApply = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATCHIAAkMQAAhEA+AAQA+AAAABEIAAEMQAABDg+AAQg+AAAAhDgAA4iFIAAEMQAAAfAZAAQAaAAAAgfIAAkMQAAgfgaAAQgZAAAAAfgAqvC6QgOgRAAggIAAhUIAjAAIAABOQAAAQAFAKQAGAJAPAAQAOAAAFgIQAGgHAAgOIAAhHIgCgKIgEgIIgGgIQgPgTgSgRQgSgPgKgOIgHgLIgEgLIgCgMIAAhMQAAhCA/AAQAgAAANARQANAPAAAiIAABIIgiAAIAAhEQAAgOgFgJQgFgKgPAAQgZAAAAAdIAAA6IABASIAHANIA8A/IAJAMIAFANIADAQIABBPQAAAfgOARQgOARghAAQghAAgPgQgAPCDGIAAg8IAiAAIAAA8gANmDGIAAixIg4jZIAnAAIAlCiIAniiIAkAAIg6DZIAACxgALRDGIAAmKIAkAAIAAFmIBGAAIAAAkgAI0DGIAAmKIA9AAQAjAAARARQAQARAAAlIAABBQAAAmgQAQQgRAQgiAAIgaAAIAAC8gAJYgYIAaAAQAQAAAHgJQAIgIAAgSIAAhCQAAgRgHgJQgHgIgSAAIgZAAgAGYDGIAAmKIA9AAQAiAAARARQARARAAAlIAABBQAAAmgRAQQgQAQgjAAIgZAAIAAC8gAG8gYIAZAAQAQAAAIgJQAIgIAAgSIAAhCQAAgRgIgJQgHgIgRAAIgZAAgAFZDGIgJhDIg7AAIgIBDIgkAAIA2mKIArAAIAzGKgAFMBiIgZjKIgaDKIAzAAgAhKDGIAAllIgsAAIAAglIB7AAIAAAlIgrAAIAAFlgAjxDGIgci0IgEABIgYAAIAACzIgkAAIAAmKIA8AAQAiAAARAQQARAQAAAnIAABOQAAAsgdANIAhC8gAkpgNIAYAAQARAAAHgIQAHgIAAgRIAAhKQAAgWgGgJQgGgIgTAAIgYAAgAnWDGIAAmKIBpAAIAAAlIhFAAIAACKIAwAAIAAAkIgwAAIAACTIBHAAIAAAkgAohDGIAAmKIAlAAIAAGKgAr3DGIgJhDIg7AAIgIBDIgkAAIA2mKIArAAIAzGKgAsEBiIgZjKIgaDKIAzAAgAvjDGIAAmKIBoAAIAAAlIhEAAIAACKIAwAAIAAAkIgwAAIAACTIBGAAIAAAkg");
	this.shape.setTransform(221.875,-124.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_easyApply, new cjs.Rectangle(122.3,-144.2,199.2,40.39999999999999), null);


(lib.txt_disclaimer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AFoAlQgCgCAAgEQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgDAAgCgCgAEsAfQgFgHAAgOQAAgMAFgHQAGgIAKAAQALAAAGAIIAAAAIgBgJIAAgUIAMAAIAABLIgJAAIgCgHIgBAAQgFAIgLAAQgKAAgGgHgAE2gCQgDADAAAKQAAAJADAEQADAFAGAAQAHAAAEgEQADgEAAgJIAAgCQAAgKgDgDQgEgEgHAAQgGAAgDAFgAD0AfQgHgHAAgNQAAgNAHgHQAGgIAMAAQALAAAGAHQAGAGAAALIAAAGIgkAAQAAAIAEAEQAEAEAIAAIAJgBIAIgDIAAAKQgEACgEAAIgKABQgNAAgHgHgAESAFQAAgGgDgEQgEgDgFAAQgGAAgDADQgDAEgBAGIAZAAIAAAAgADLAVIAAgcIgIAAIAAgFIAIgEIAEgMIAHAAIAAAMIAPAAIAAAJIgPAAIAAAcQAAAEACACQACACAEAAIAIgBIAAAIIgFACIgGAAQgQAAAAgRgACbAfQgGgHAAgNQAAgNAGgHQAHgIANAAQAIAAAHADIgDAKQgIgDgEAAQgOAAAAARQAAAKADAEQAEAFAGAAQAIAAAHgEIAAAKQgDACgEAAIgIABQgNAAgGgHgABiAfQgHgHAAgNQAAgNAHgHQAGgIAMAAQALAAAGAHQAGAGAAALIAAAGIgkAAQAAAIAEAEQAEAEAIAAIAJgBIAIgDIAAAKQgEACgEAAIgKABQgNAAgHgHgACAAFQAAgGgDgEQgEgDgFAAQgGAAgDADQgDAEgBAGIAZAAIAAAAgAghAfQgFgHAAgOQAAgMAFgHQAGgIAKAAQALAAAGAIIAAAAIgBgJIAAgUIALAAIAABLIgJAAIgBgHIgBAAQgFAIgLAAQgKAAgGgHgAgXgCQgDADAAAKQAAAJADAEQADAFAGAAQAHAAAEgEQADgEAAgJIAAgCQAAgKgDgDQgEgEgHAAQgGAAgDAFgAhwAjIAAgKQAJAEAIAAQALAAAAgGIgBgDIgEgDIgIgEQgJgDgDgEQgDgDAAgFQAAgHAFgEQAGgEAJAAQAKAAAIAEIgDAJQgJgEgGAAQgJAAAAAFQAAADACABIALAEIAJAFQADACACADQABADAAAEQAAAIgGAEQgFAEgLAAQgLAAgGgDgAimAiQgFgEAAgIQAAgJAGgEQAHgEAMAAIAKgBIAAgDQAAgEgDgCQgCgDgFAAIgIABIgIADIgDgIIAJgEIAKgBQAKAAAGAFQAFAEAAAJIAAAkIgIAAIgDgHQgEAFgEABQgEACgGAAQgIAAgEgEgAiPAMQgJAAgDACQgEADAAAFQAAADACACQACACAFAAQAGAAAEgDQADgEAAgGIAAgFgAj2AfQgHgHAAgNQAAgNAGgHQAHgIALAAQALAAAGAHQAHAGAAALIAAAGIgkAAQAAAIAEAEQAEAEAHAAIAJgBIAJgDIAAAKQgEACgFAAIgJABQgNAAgHgHgAjZAFQAAgGgDgEQgDgDgGAAQgFAAgDADQgEAEAAAGIAYAAIAAAAgAkuAjIAAgKQAKAEAIAAQAKAAAAgGIgBgDIgEgDIgHgEQgJgDgEgEQgDgDAAgFQAAgHAGgEQAFgEAKAAQAJAAAJAEIgEAJQgJgEgGAAQgJAAAAAFQAAADADABIAKAEIAKAFQADACABADQACADAAAEQAAAIgGAEQgGAEgLAAQgKAAgHgDgAltAfQgHgHAAgMIAAgtIAMAAIAAAsQAAAJAEAEQAEAEAIAAQARAAAAgRIAAgsIAMAAIAAAtQAAAIgEAGQgDAGgHADQgGADgJAAQgNAAgIgHgAA1AlIAAg1IAJAAIACAKIABAAQACgFAFgDQAEgDAFAAIAGABIgCAKIgFAAQgHAAgEAEQgEAEAAAHIAAAcgAAaAlIAAg1IALAAIAAA1gAAbgZQgCgCAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgBADAAQADAAACABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgBACQgCABgDAAQgDAAgCgBg");
	this.shape.setTransform(340.975,-496.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_disclaimer, new cjs.Rectangle(303.7,-500.7,74.60000000000002,7.699999999999989), null);


(lib.txt_biofreeze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1B8B6").s().p("AklBrIAAjVQAAg1AyAAQAxAAAAA1IAADVQAAA1gxAAQgyAAAAg1gAkIhqIAADVQAAAYAVAAQAUAAAAgYIAAjVQAAgYgUAAQgVAAAAAYgAGECcIAAk4IBTAAIAAAeIg2AAIAABuIAmAAIAAAcIgmAAIAAB0IA4AAIAAAcgAELCcIAAgdIBFj+IhCAAIAAgdIBfAAIAAAbIhEEAIBEAAIAAAdgAClCcIAAk4IBTAAIAAAeIg2AAIAABuIAmAAIAAAcIgmAAIAAB0IA4AAIAAAcgAA7CcIAAk4IBTAAIAAAeIg2AAIAABuIAmAAIAAAcIgmAAIAAB0IA3AAIAAAcgAAGCcIgViOIgWAAIAACOIgdAAIAAk4IAvAAQAbABANAMQAOANAAAfIAAA+QAAAigXALIAaCUgAglgLIATAAQANAAAFgGQAFgGAAgNIAAg7QAAgSgFgGQgDgHgQAAIgSAAgAipCcIAAk4IBVAAIAAAeIg4AAIAABvIAnAAIAAAcIgnAAIAACPgAlcCcIAAk4IAdAAIAAE4gAnYCcIAAk4IAyAAQAZAAALANQAKANAAAcIAAA/QAAAdgSAFQAJACAGAHQAHAIAAARIAABKQAAAcgMANQgNAMgZAAgAm7CAIAVAAQAVAAAAgZIAAhFQAAgNgEgGQgEgGgNAAIgVAAgAm7gQIAVAAQALAAAEgFQAFgFAAgKIAAhCQAAgOgFgFQgEgFgLAAIgVAAg");
	this.shape.setTransform(128.975,-191.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_biofreeze, new cjs.Rectangle(81.7,-207.1,94.60000000000001,32), null);


(lib.spray_bottle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sprayBottle();
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spray_bottle, new cjs.Rectangle(0,-1,123,313), null);


(lib.Icy_hot_logo = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ArhDDIAAmFIXDAAIAAGFg");
	mask.setTransform(-53.7,-71.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-125,-136);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Icy_hot_logo, new cjs.Rectangle(-125,-91,145.1,39), null);


(lib.drip_03_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_03();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_03_1, new cjs.Rectangle(-150,-57.5,552,250), null);


(lib.drip_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_02();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_02_1, new cjs.Rectangle(-150,-57.5,552,250), null);


(lib.drip_01a_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_01a();
	this.instance.setTransform(-150,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01a_mc, new cjs.Rectangle(-150,-58,552,250), null);


(lib.drip_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_01();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01_1, new cjs.Rectangle(-150,-57.5,552,250), null);


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
	this.instance = new lib.learnMore();
	this.instance.setTransform(-53,-241,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-53,-241,194.1,63.30000000000001), null);


(lib.back_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.back_image();
	this.instance.setTransform(-351,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_mc, new cjs.Rectangle(-351,-137,552,250), null);


(lib.back_image_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_animation
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAACjIAAlF");
	this.shape.setTransform(-61,-158.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAkyIAAJl");
	this.shape_1.setTransform(-61,-143.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAm7IAAN3");
	this.shape_2.setTransform(-61,-130.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAo9IAAR7");
	this.shape_3.setTransform(-61,-117.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAq4IAAVx");
	this.shape_4.setTransform(-61,-104.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAssIAAZZ");
	this.shape_5.setTransform(-61,-93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAuZIAAcz");
	this.shape_6.setTransform(-61,-82.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAv/IAAf/");
	this.shape_7.setTransform(-61,-72.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAxeMAAAAi9");
	this.shape_8.setTransform(-61,-62.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAy2MAAAAlt");
	this.shape_9.setTransform(-61,-53.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA0HMAAAAoP");
	this.shape_10.setTransform(-61,-45.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA1QMAAAAqh");
	this.shape_11.setTransform(-61,-38.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA2TMAAAAsn");
	this.shape_12.setTransform(-61,-31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA3PMAAAAuf");
	this.shape_13.setTransform(-61,-25.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA4EMAAAAwJ");
	this.shape_14.setTransform(-61,-20.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA4xMAAAAxj");
	this.shape_15.setTransform(-61,-15.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA5YMAAAAyx");
	this.shape_16.setTransform(-61,-12.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA54MAAAAzx");
	this.shape_17.setTransform(-61,-8.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA6QMAAAA0h");
	this.shape_18.setTransform(-61,-6.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA6iMAAAA1F");
	this.shape_19.setTransform(-61,-4.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAA6sMAAAA1Z");
	this.shape_20.setTransform(-61,-3.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAaxMAAAg1h");
	this.shape_21.setTransform(-61,-3.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},13).to({state:[]},1).wait(2));

	// hotSpray_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("EgmCATkMgAKgnTQAFALQzAEQAKAVAJAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAXBLAGArQAEAogIAiIgsDNQArA0AlBOQBLCegZCDQglDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_17 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_18 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_19 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_20 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_21 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_22 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_23 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_24 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_25 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_26 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_27 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_28 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_29 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_30 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_31 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_32 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_33 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_34 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_35 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_36 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_37 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_38 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_39 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_40 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_41 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_42 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_43 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");
	var mask_graphics_56 = new cjs.Graphics().p("AqjTkMgAKgnTQAFALQyAEQALAVAIAaQAQA0gKAfQgFAQARACIAtgBQBLAAASA6QAYBLAFArQAFAogJAiIgrDNQAqA0AlBOQBLCegYCDQgmDSidMsQApAXAoAjQBRBIAABAQAABHg1A0QguAtg0AFQgkADgoAyQgUAZgMAYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:-244.55,y:-15.65}).wait(1).to({graphics:mask_graphics_17,x:-408.4076,y:-15.65}).wait(1).to({graphics:mask_graphics_18,x:-397.6576,y:-15.65}).wait(1).to({graphics:mask_graphics_19,x:-388.1576,y:-15.65}).wait(1).to({graphics:mask_graphics_20,x:-379.7576,y:-15.65}).wait(1).to({graphics:mask_graphics_21,x:-372.3576,y:-15.65}).wait(1).to({graphics:mask_graphics_22,x:-365.9076,y:-15.65}).wait(1).to({graphics:mask_graphics_23,x:-360.3576,y:-15.65}).wait(1).to({graphics:mask_graphics_24,x:-355.5576,y:-15.65}).wait(1).to({graphics:mask_graphics_25,x:-351.4576,y:-15.65}).wait(1).to({graphics:mask_graphics_26,x:-347.9576,y:-15.65}).wait(1).to({graphics:mask_graphics_27,x:-345.0576,y:-15.65}).wait(1).to({graphics:mask_graphics_28,x:-342.6576,y:-15.65}).wait(1).to({graphics:mask_graphics_29,x:-340.6576,y:-15.65}).wait(1).to({graphics:mask_graphics_30,x:-339.0576,y:-15.65}).wait(1).to({graphics:mask_graphics_31,x:-337.8076,y:-15.65}).wait(1).to({graphics:mask_graphics_32,x:-336.8076,y:-15.65}).wait(1).to({graphics:mask_graphics_33,x:-336.0576,y:-15.65}).wait(1).to({graphics:mask_graphics_34,x:-335.5076,y:-15.65}).wait(1).to({graphics:mask_graphics_35,x:-335.1076,y:-15.65}).wait(1).to({graphics:mask_graphics_36,x:-334.8576,y:-15.65}).wait(1).to({graphics:mask_graphics_37,x:-334.6576,y:-15.65}).wait(1).to({graphics:mask_graphics_38,x:-334.5576,y:-15.65}).wait(1).to({graphics:mask_graphics_39,x:-334.5076,y:-15.65}).wait(1).to({graphics:mask_graphics_40,x:-334.4576,y:-15.65}).wait(1).to({graphics:mask_graphics_41,x:-334.4576,y:-15.65}).wait(1).to({graphics:mask_graphics_42,x:-334.4576,y:-15.65}).wait(1).to({graphics:mask_graphics_43,x:-334.4576,y:-15.65}).wait(13).to({graphics:mask_graphics_56,x:-334.4576,y:-15.65}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// hotSpray_LT
	this.instance = new lib.drip_01a_mc();
	this.instance.setTransform(-287,-80.45);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-201},27,cjs.Ease.quartOut).wait(13).to({_off:true},1).wait(2));

	// hotSpray_RT_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_16 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEIABgIQACgKAHgRQAGgRgFgRQgCgIgEgGIA0gvQAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEQADgSAHgRQAGgRgFgRIAug9QAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEIABgIQACgKAHgRQAGgRgFgRQgCgIgEgGIA0gvQAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AkjSXQgKh2gMh2QgZjsgMAGQgrATg5gaQgrgThFg5QgogggPglQgSgtAHhHQAHg/Bpg+QA1gfAzgTQgWhtgYiKQgvkSgIiNQgGhqAxhyQAZg7Ajg2QACgFgbiEIABgIQACgKAHgRQAGgRgFgRQgCgIgEgGIA0gvQAugygcgSQg6gkAWgUQALgLAWgDQgWgVgOgZQgcgzAngZIBBgjQAOgCDWgNQDVgNAQgCQBlgQB7ALQBJAHDIAhMgA7AotItbAMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:267.9397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_17,x:257.8397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_18,x:248.8397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_19,x:240.8897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_20,x:233.8397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_21,x:227.6897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_22,x:222.2897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_23,x:217.6397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_24,x:213.5897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_25,x:210.1397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_26,x:207.2397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_27,x:204.8397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_28,x:202.7897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_29,x:201.1397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_30,x:199.7897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_31,x:198.7397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_32,x:197.9397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_33,x:197.2897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_34,x:196.8397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_35,x:196.4897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_36,x:196.2897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_37,x:196.1397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_38,x:196.0397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_39,x:195.9897,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_40,x:195.9397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_41,x:195.9397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_42,x:195.9397,y:-11.0905}).wait(1).to({graphics:mask_1_graphics_43,x:195.9397,y:-11.0905}).wait(13).to({graphics:mask_1_graphics_56,x:195.9397,y:-11.0905}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// hotSpray_RT
	this.instance_1 = new lib.drip_01a_mc();
	this.instance_1.setTransform(-129,-79.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:-201},27,cjs.Ease.quartOut).wait(13).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_2 = new lib.back_mc();
	this.instance_2.setTransform(2,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:3,y:0.5,alpha:1},16).wait(40).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437,-179.5,710,351.9);


(lib.drip_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(112).call(this.frame_112).wait(1));

	// Layer_6
	this.instance = new lib.back_image_1("synched",0);
	this.instance.setTransform(201.35,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({startPosition:47},0).to({x:202.35,alpha:0,startPosition:56},9).to({_off:true},1).wait(56));

	// drip_01
	this.instance_1 = new lib.drip_01_1();
	this.instance_1.setTransform(0,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).wait(24).to({alpha:0},18).wait(28));

	// drip_02
	this.instance_2 = new lib.drip_02_1();
	this.instance_2.setTransform(0,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(27).to({alpha:0},18).wait(1));

	// drip_03
	this.instance_3 = new lib.drip_03_1();
	this.instance_3.setTransform(0,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-100,710,351.9);


// stage content:
(lib.ICY_DrySpray_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [358];
	// timeline functions:
	this.frame_358 = function() {
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(358).call(this.frame_358).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AXAzXMA0oAAAMAAAAmvMiXPAAAMAAAgmvIUyAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// trademark
	this.instance = new lib.txt_trademark();
	this.instance.setTransform(275.05,442.85,1,1,0,0,0,2.8,-291.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// disclaimer
	this.instance_1 = new lib.txt_disclaimer();
	this.instance_1.setTransform(247.05,724.95,1,1,0,0,0,-37.7,-4.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},11).wait(109).to({alpha:0},10).wait(1).to({regX:-37.6,regY:-4.3,scaleX:1.3264,scaleY:1.3264,x:315.1,y:833.1},0).to({alpha:1},9).wait(219));

	// txt_people_prefer
	this.instance_2 = new lib.txt_peoplePrefer();
	this.instance_2.setTransform(171.9,219.4,1.2196,1.2196,0,0,0,-4,-7.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// icyHot_logo_01
	this.instance_3 = new lib.Icy_hot_logo();
	this.instance_3.setTransform(173.5,286.65,1.2196,1.2196,0,0,0,-3.1,47.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},11).wait(101).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_over
	this.instance_4 = new lib.txt_over();
	this.instance_4.setTransform(169.8,723.9,1.2196,1.2196,0,0,0,-5.1,283.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_biofreeze
	this.instance_5 = new lib.txt_biofreeze();
	this.instance_5.setTransform(170.5,575.15,1.2196,1.2196,0,0,0,-4.5,161.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// drip_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgrMATnMAAAgnNMBWZAAAMAAAAnNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:694.075,y:125.575}).wait(131).to({graphics:null,x:0,y:0}).wait(228));

	// Layer_2
	this.instance_6 = new lib.drip_animation("synched",0,false);
	this.instance_6.setTransform(566.3,57.4,1,1,0,0,0,0.2,-0.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({startPosition:112},0).to({alpha:0},10).to({_off:true},1).wait(228));

	// Layer_1
	this.instance_7 = new lib.txt_theyAgreen();
	this.instance_7.setTransform(314.45,95.05,1.8361,1.8361,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({_off:false},0).to({alpha:1},7).wait(61).to({alpha:0},7).to({_off:true},1).wait(136));

	// txt_lessMessy
	this.instance_8 = new lib.txt_lessMessy();
	this.instance_8.setTransform(245.4,314.85,1.3264,1.3264,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({_off:false},0).to({alpha:1},8).wait(57).to({alpha:0},10).to({_off:true},1).wait(132));

	// txt_easyApply
	this.instance_9 = new lib.txt_easyApply();
	this.instance_9.setTransform(245.4,316.15,1.3264,1.3264,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({_off:false},0).to({alpha:1},8).wait(52).to({alpha:0},10).to({_off:true},1).wait(130));

	// txt_onTheGo
	this.instance_10 = new lib.txt_onTheGo();
	this.instance_10.setTransform(244.75,315.45,1.3264,1.3264,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({alpha:1},8).wait(48).to({alpha:0},10).to({_off:true},1).wait(128));

	// spray_bottle
	this.instance_11 = new lib.spray_bottle();
	this.instance_11.setTransform(-49.3,-145.7,1,1,0,0,0,-87.9,-402);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(131).to({_off:false},0).to({y:-395.7},11).to({y:-389.7},5).wait(212));

	// txt_rise
	this.instance_12 = new lib.txt_rise();
	this.instance_12.setTransform(227.3,239.15,1.323,1.323);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(231).to({_off:false},0).to({y:188.15,alpha:1},9,cjs.Ease.quadInOut).wait(119));

	// txt_FromPain
	this.instance_13 = new lib.txt_fromPain();
	this.instance_13.setTransform(293.2,50.25,1.323,1.323,0,0,0,49.5,-103.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(240).to({_off:false},0).to({alpha:1},9).wait(110));

	// txt_icyHot_02
	this.instance_14 = new lib.txt_IcyHot_02();
	this.instance_14.setTransform(293.2,50.25,1.323,1.323,0,0,0,49.5,-103.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(249).to({_off:false},0).to({alpha:1},10).wait(100));

	// cta_btn_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_259 = new cjs.Graphics().p("AwrEDQg8AAAAg8IAAmNQAAg8A8AAMAhXAAAQA8AAAAA8IAAGNQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_1_graphics_259,x:289.025,y:138.35}).wait(100));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-29.5,-19.4,29.4,19.1).s().p("AyBRhMAa2gpCIJNGBMga2ApCg");
	this.shape_1.setTransform(129.55,72.05);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-29.5,-19.4,29.4,19.1).s().p("AyCRhMAa3gpCIJOGBMga2ApCg");
	this.shape_2.setTransform(129.6,72.05);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-29.5,-19.4,29.4,19.1).s().p("AyCRhMAa3gpCIJOGBMga3ApCg");
	this.shape_3.setTransform(129.8,72.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-29.5,-19.4,29.4,19.1).s().p("AyBRhMAa2gpCIJOGBMga2ApCg");
	this.shape_4.setTransform(163.15,83.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},268).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:129.8,y:72.15}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:143.3,y:76.9}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:447.5,y:184.25}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268).to({_off:false},0).wait(1).to({_off:true},1).wait(7).to({_off:false,x:151.6,y:79.8},0).to({_off:true},1).wait(1).to({_off:false,x:178.7,y:89.4},0).wait(1).to({x:199.2,y:96.6},0).to({_off:true},1).wait(2).to({_off:false,x:299.55,y:132.05},0).to({_off:true},1).wait(1).to({_off:false,x:373.65,y:158.2},0).wait(1).to({x:399.9,y:167.45},0).to({_off:true},1).wait(3).to({_off:false,x:455.8,y:187.2},0).to({_off:true},1).wait(4).to({_off:false,x:469.3,y:191.95},0).wait(1).to({x:469.5,y:192.05},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(270).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:130.4,y:72.35},0).wait(1).to({x:131.65,y:72.8},0).wait(1).to({x:133.9,y:73.6},0).wait(1).to({x:137.6,y:74.9},0).to({_off:true},1).wait(5).to({_off:false,x:225.45,y:105.9},0).wait(1).to({x:258.55,y:117.6},0).to({_off:true},1).wait(1).to({_off:false,x:340.55,y:146.5},0).to({_off:true},1).wait(2).to({_off:false,x:420.4,y:174.7},0).wait(1).to({x:435.95,y:180.2},0).to({_off:true},1).wait(2).to({_off:false,x:461.5,y:189.2},0).wait(1).to({x:465.2,y:190.5},0).wait(1).to({x:467.45,y:191.3},0).wait(1).to({x:468.7,y:191.75},0).to({_off:true},1).wait(2).to({_off:false,x:469.55,y:192.05},0).wait(62));

	// ctaBtn
	this.instance_15 = new lib.ctaBtn();
	this.instance_15.setTransform(231.9,416.05,1.323,1.323);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(259).to({_off:false},0).to({alpha:1},9).wait(91));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0707").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_5.setTransform(484.9982,124.9997,1.3324,2.7778);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(485,7.9,679.4000000000001,560.4);
// library properties:
lib.properties = {
	id: '772C3DE947D34FE6BD5A9DB7A0B9B804',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"back_image.jpg", id:"back_image"},
		{src:"drip_01.jpg", id:"drip_01"},
		{src:"drip_01a.jpg", id:"drip_01a"},
		{src:"drip_02.jpg", id:"drip_02"},
		{src:"drip_03.jpg", id:"drip_03"},
		{src:"learnMore.png", id:"learnMore"},
		{src:"sprayBottle.jpg", id:"sprayBottle"},
		{src:"text_sheet.png", id:"text_sheet"}
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
an.compositions['772C3DE947D34FE6BD5A9DB7A0B9B804'] = {
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