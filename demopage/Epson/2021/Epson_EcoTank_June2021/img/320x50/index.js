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
p.nominalBounds = new cjs.Rectangle(0,0,92,71);


(lib.card_03 = function() {
	this.initialize(img.card_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,71);


(lib.cartridges = function() {
	this.initialize(img.cartridges);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,50);


(lib.cartridges_02 = function() {
	this.initialize(img.cartridges_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,50);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,72);


(lib.frame_01 = function() {
	this.initialize(img.frame_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,50);


(lib.frame_02 = function() {
	this.initialize(img.frame_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,50);


(lib.frame_03 = function() {
	this.initialize(img.frame_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,50);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,262);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,221);// helper functions:

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
	this.shape.graphics.f("#1F1F1F").s().p("AgQAsQgIgEgGgGQgFgGgDgJQgDgJAAgKQAAgJADgJQADgJAGgGQAGgGAHgEQAIgDAIAAQANAAAHAFQAIAFAFAHQAFAIACAJQACAJgBAIIhCAAIABALQACAFADAEQAEAEAFADQAGACAGAAQAJAAAGgEQAGgEACgJIAPAAQgDAPgKAHQgKAIgQAAQgJAAgIgDgAgKgfQgEACgEADQgDAEgCAFQgCAEAAAFIAzAAIgDgKQgCgEgDgEQgEgDgEgCQgFgCgFAAQgFAAgFACg");
	this.shape.setTransform(-25.245,-19.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAXA+IAAg9QgBgHgFgFQgEgFgJAAQgFAAgGACQgFACgDAEQgDAEgCAEQgBAFAAAGIAAAzIgQAAIAAh7IAQAAIAAAvIAAAAQACgEADgDIAHgFIAIgCIAIgBQAJAAAFACQAGADAEAEQADAEACAHQABAGAAAGIAAA7g");
	this.shape_1.setTransform(-34.5,-21.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AANA7IgKgBQgDgBgDgCIgEgGIgBgKIAAg4IgPAAIAAgOIAPAAIAAgbIAOAAIAAAbIASAAIAAAOIgSAAIAAA3IAAAEIACACIAEABIAFABIAHAAIAAANg");
	this.shape_2.setTransform(-41.875,-20.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgMA/QgHgCgFgDQgGgCgDgGQgEgEAAgIIAPAAQAAAEACADIAGAEIAIADIAGAAQAIAAAFgCQAFgDADgEQADgEACgHQABgGAAgHIAAgHQgEAJgIAEQgHAEgIAAQgKAAgIgEQgHgDgFgHQgFgGgDgIQgCgIAAgIQAAgJACgIQACgIAFgIQAFgGAIgFQAIgFAKAAQAJABAHAEQAHADAEAHIAAgMIAOAAIAABSQAAAWgKALQgKAKgVABIgMgCgAgKgwQgFADgEAEQgDAFgBAGQgCAGAAAHIABAMQACAFADAFQADAFAFADQAEADAHAAQAHAAAFgDQAFgDAEgFQADgFABgFQACgHAAgGQAAgGgCgGQgBgFgDgFQgDgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_3.setTransform(-53.775,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAWAuIAAg8QABgIgGgFQgEgFgJAAQgFAAgFACQgGACgDAEQgDAEgCAFQgBAFgBAGIAAAyIgPAAIAAhZIAPAAIAAAOIAAAAQAKgQASAAQAKAAAFACQAGADAEAEQAEAEABAHQACAGAAAHIAAA6g");
	this.shape_4.setTransform(-63,-19.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgHA+IAAhZIAPAAIAABZgAgHgrIAAgSIAPAAIAAASg");
	this.shape_5.setTransform(-69.35,-21.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAVA+IgegvIgOANIAAAiIgPAAIAAh7IAPAAIAABIIAogmIAUAAIgkAgIAmA5g");
	this.shape_6.setTransform(-74.875,-21.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AAXAsQgEgDAAgIQgGAIgIADQgHADgKAAQgGAAgFgBQgGgCgEgDQgEgDgCgEQgCgFAAgHQAAgIACgFQADgEAEgDQAEgDAGgBIALgDIALgCIAJgBQAFgBACgDQACgCAAgEQAAgFgBgDQgCgDgDgBIgHgDIgGAAQgJAAgGAEQgHADAAAKIgPAAQAAgIAEgGQADgGAFgDQAFgEAHgCQAHgBAHAAIALABQAGABAFACQAFADADAFQADAFAAAIIAAAtIABAIQAAAAAAABQAAAAABABQABAAAAAAQABAAABAAIAEgBIAAAMQgDACgHAAQgGAAgDgDgAALACIgKABIgJACQgFAAgEACQgEACgCADQgDADAAAGQAAAEACACIAEAEIAFACIAHABQAHAAAEgCQAGgCADgDQADgDACgEIABgGIAAgOQgCABgFABg");
	this.shape_7.setTransform(-84.075,-19.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AANA7IgKgBQgDgBgDgCIgEgGIgBgKIAAg4IgPAAIAAgOIAPAAIAAgbIAOAAIAAAbIASAAIAAAOIgSAAIAAA3IAAAEIACACIAEABIAFABIAHAAIAAANg");
	this.shape_8.setTransform(-91.475,-20.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgcA/IgFgBIAAgOIAFACIAEAAQAFAAADgCQADgCABgEIAGgPIgjhZIAQAAIAaBJIAAAAIAZhJIAQAAIgnBlIgEALQgDAFgDADQgDADgEABIgIABg");
	this.shape_9.setTransform(-102.475,-17.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgwA+IAAh7IAtAAIAIAAIAJAAIAIABIAHADQAGAEAEAGQAFAHAAAJQAAAKgFAHQgFAIgJADQAMADAGAHQAGAIAAALQAAAHgCAHQgDAGgFAFQgEAFgIADQgHADgJAAgAggAwIApAAQALAAAGgGQAGgGAAgKQAAgGgCgEQgCgEgEgDIgIgDIgLgBIglAAgAgggIIAhAAQAOAAAGgFQAGgFAAgKQAAgGgCgEQgCgEgEgCQgDgCgFgBIgKAAIghAAg");
	this.shape_10.setTransform(-112.125,-21.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takingThe, new cjs.Rectangle(-119.1,-32.4,98.8,21.7), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AFHBMQgKgFgHgIQgGgIgEgLQgDgLgBgNQAAgNAEgKQAEgLAHgHQAIgIAJgFQAKgFAMABQAPAAAKAGQAKAGAGAKQAHAJACALQACAMgBAKIhVAAQAAAHACAIQACAGAEAFQAFAGAHADQAGACAKAAQALABAIgGQAIgFACgLIATAAQgEATgNAJQgNAKgTAAQgOAAgKgEgAFQgTQgGACgFAFQgEAEgCAGQgDAFAAAHIBCAAQgBgHgCgFQgDgGgEgEQgEgFgGgCQgGgCgHAAQgIAAgFACgAgtBMQgKgFgHgIQgHgIgEgLQgDgLAAgNQAAgNAEgKQAEgLAHgHQAHgIAKgFQAKgFALABQAQAAAJAGQAKAGAGAKQAGAJACALQACAMAAAKIhVAAQAAAHACAIQACAGAFAFQAEAGAHADQAHACAJAAQAMABAHgGQAHgFADgLIATAAQgEATgNAJQgMAKgUAAQgNAAgKgEgAglgTQgGACgEAFQgEAEgDAGIgDAMIBBAAQAAgHgDgFQgCgGgEgEQgEgFgGgCQgGgCgHAAQgHAAgGACgAjWBMQgEgEAAgKQgIAKgKAEQgLAEgLAAQgIAAgHgBQgHgCgFgFQgFgDgDgGQgDgHAAgHQAAgLADgFQAEgHAFgEQAFgDAHgDIApgIQAGgBADgDQADgCAAgFQAAgGgCgDQgDgFgDgCQgEgCgFAAIgJAAQgLgBgIAFQgIAFgBAMIgTAAQABgLAEgHQAEgHAGgFQAHgEAIgDQAJgBAJAAIAQABQAIABAGADQAGAEAEAGQAEAGAAAKIAABDQABAEAFgBIAFgBIAAAPQgFADgJAAQgGAAgFgEgAjlAXIgYADQgHABgFACQgFADgDAEQgDAEAAAGQAAAGACACQABAEADACQADACAEAAIAJABQAJABAHgDQAGgCAEgFQAFgDACgFQACgEAAgEIAAgUQgEADgGACgAEHBOIAAhOQAAgJgGgHQgGgFgLAAQgJAAgGACQgGACgFAGQgEAEgCAHQgCAGAAAHIAABBIgTAAIAAidIATAAIAAA8IABAAQABgFAFgEQAEgEAEgCIALgDIAKgBQAMAAAHACQAIAEAFAFQAEAGACAIQACAIAAAHIAABMgACRBNQgFgBgDgDQgDgDgCgFQgBgEAAgJIAAhHIgUAAIAAgRIAUAAIAAgiIATAAIAAAiIAWAAIAAARIgWAAIAABLIACADIAEACIAQAAIAAARgAhlBOIgmg9IgSARIAAAsIgTAAIAAidIATAAIAABcIA0gxIAZAAIgtApIAxBJgAlcBOIAAiMIg0AAIAAgRIB+AAIAAARIg1AAIAACMg");
	this.shape.setTransform(-14.4107,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_takeThe, new cjs.Rectangle(-54.5,-51.5,267.2,110.6), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgIANIAFgDIADgEIAAgFIAAgDIgIAAIAAgSIARAAIAAARQAAAIgEAHQgFAGgIADg");
	this.shape.setTransform(22.65,-2.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgPAoQgHgCgFgHQgGgGgCgHQgDgJAAgJQAAgJADgIQADgIAFgGQAFgFAIgEQAHgDAIAAQALAAAHAFQAIAEAEAIQAFAGABAJIACAPIg+AAIABALIAFAJQADADAFACQAFADAGAAQAJAAAFgFQAGgEACgHIANAAQgCANgKAHQgJAIgPAAQgJAAgHgEgAgJgdQgEACgDADIgFAIIgCAJIAvAAQAAgFgCgFIgFgHQgDgDgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(16.075,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgPAoQgHgCgFgHQgGgGgCgHQgDgJAAgJQAAgJADgIQADgIAFgGQAFgFAIgEQAHgDAIAAQALAAAHAFQAIAEAEAIQAFAGABAJIACAPIg+AAIABALIAFAJQADADAFACQAFADAGAAQAJAAAFgFQAGgEACgHIANAAQgCANgKAHQgJAIgPAAQgJAAgHgEgAgJgdQgEACgDADIgFAIIgCAJIAvAAQAAgFgCgFIgFgHQgDgDgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_2.setTransform(7.325,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgVArIAAhTIANAAIAAASIAAAAQAGgKAGgFQAHgFALAAIAAAPQgIAAgGACQgGACgDAFQgDAEgCAHQgCAGAAAHIAAAlg");
	this.shape_3.setTransform(0.6,-6.9023);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgIA7IAAhHIgOAAIAAgMIAOAAIAAgNQAAgKAGgFQAFgGALAAIAFABIAEABIAAAMIgEgBIgEAAQgFAAgDACQgCABAAAGIAAAMIAQAAIAAAMIgQAAIAABHg");
	this.shape_4.setTransform(-4.925,-8.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgYAKIAAgTIAxAAIAAATg");
	this.shape_5.setTransform(-10.65,-7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgMArQgIgCgFgDQgGgDgDgGQgEgGAAgIIAWAAQAAAEABACIAFAFIAFACIAGABIAFAAIAFgCIAEgEQABgCAAgDQAAgFgHgCQgHgDgLgDIgKgCQgFgCgDgBQgEgDgDgEQgCgEAAgFQAAgIADgFQAEgGAEgDQAGgDAHgBQAGgBAGAAIANABQAGACAGADQAEADAEAFQADAFABAIIgWAAQgBgHgEgCQgFgDgFAAIgEABIgFABIgCACIgBAEQAAADACACIAFADIAIADIAJACIAKACIAJAFQADABADAEQACAEAAAGQAAAJgEAFQgCAGgGADQgFAEgHABQgHABgIAAIgMgBg");
	this.shape_6.setTransform(-18.4,-6.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgNArQgGgCgGgDQgFgDgEgGQgEgGAAgIIAWAAQAAAEABACIAFAFIAFACIAGABIAFAAIAFgCIADgEQACgCAAgDQAAgFgHgCQgHgDgLgDIgKgCQgFgCgDgBQgFgDgCgEQgCgEAAgFQAAgIADgFQAEgGAEgDQAGgDAGgBQAHgBAGAAIANABQAGACAGADQAFADADAFQADAFABAIIgWAAQAAgHgFgCQgFgDgFAAIgEABIgEABIgEACIgBAEQAAADADACIAFADIAIADIAJACIAKACIAJAFQADABADAEQACAEAAAGQAAAJgDAFQgDAGgGADQgGAEgGABQgHABgHAAIgOgBg");
	this.shape_7.setTransform(-27.15,-6.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgQApQgIgDgFgGQgGgGgDgIQgDgIAAgKQAAgIADgIQADgIAGgGQAGgGAHgEQAIgDAJAAQALAAAIAEQAIAEAFAHQAFAHACAJQACAJAAAJIg8AAQABALAFAFQAFAFAJAAQAHAAAFgDQAFgEABgEIAUAAQgFAPgKAHQgKAGgOAAQgJAAgIgDgAgIgYQgEACgCADIgDAGIgBAFIAlAAQgCgJgEgEQgEgFgJAAQgEAAgEACg");
	this.shape_8.setTransform(-36.245,-6.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgaArIAAhTIAWAAIAAAQIAAAAQACgEACgDIAFgGIAIgEQAEgBAFAAIAFABIAAAVIgEAAIgEgBQgHAAgEACQgEADgDADQgCAEgBAFIgBAJIAAAmg");
	this.shape_9.setTransform(-43.65,-6.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AAEA2QgFAAgDgDQgEgCgCgEQgCgEAAgGIAAgwIgOAAIAAgQIAOAAIAAgZIAWAAIAAAZIARAAIAAAQIgRAAIAAAoQAAAGACACQACACAGAAIAEgBIADAAIAAASIgHAAIgGABg");
	this.shape_10.setTransform(-50.25,-7.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgRA6QgJgCgHgFQgHgFgEgIQgEgIAAgKIAZAAQAAAGACAEQACAEAEACQADADAFABIAJABIAHAAQAEgBADgCQAEgBACgDQACgDAAgEQAAgFgDgDQgDgDgFgCIgLgDIgLgDIgNgEQgGgDgFgDQgFgDgDgGQgDgFAAgIQAAgJAEgHQAEgHAGgEQAGgEAIgCQAIgDAHAAQAJAAAIADQAIABAHAFQAGAFAEAHQAEAHAAAKIgZAAIgCgJQgCgDgDgCQgDgCgEgBIgIgBIgGABIgFACIgFAEQgBADAAADQAAAEABACQABACAEACIALADIAQAFIAJACQAGACAGAEQAGADAEAGQAEAGAAAKQAAAIgDAHQgDAGgGAFQgHAFgJADQgJADgLAAQgJAAgJgDg");
	this.shape_11.setTransform(-58.3775,-8.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_stressFree_02, new cjs.Rectangle(-64.5,-19.3,90.4,21.1), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgSA8QgKgCgHgFQgIgFgFgIQgFgIAAgLIAeAAQAAAFADAEQACADADADQAEACAEABIAIABIAHAAIAHgDIAFgEQACgDAAgFQAAgHgJgDQgKgEgQgEIgOgDQgHgDgFgCQgFgEgDgFQgDgFAAgIQAAgLAEgIQAEgHAIgEQAHgEAJgCQAJgCAJAAQAJAAAJACQAJACAHAEQAHAFAFAHQAEAHABALIgeAAQgBgJgGgEQgHgDgHAAIgGAAIgGACIgEADQgCACAAAEQAAAEADADIAIAEIALADIANADIAOAEQAHACAFAEQAFADADAFQADAGAAAIQAAAMgEAHQgFAIgHAFQgIAFgJACQgKACgKAAQgJAAgKgCg");
	this.shape.setTransform(89.625,-71.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgSA8QgKgCgHgFQgIgFgFgIQgFgIAAgLIAeAAQAAAFADAEQACADADADQAEACAEABIAIABIAHAAIAHgDIAFgEQACgDAAgFQAAgHgJgDQgKgEgQgEIgOgDQgHgDgFgCQgFgEgDgFQgDgFAAgIQAAgLAEgIQAEgHAIgEQAHgEAJgCQAJgCAJAAQAJAAAJACQAJACAHAEQAHAFAFAHQAEAHABALIgeAAQgBgJgGgEQgHgDgHAAIgGAAIgGACIgEADQgCACAAAEQAAAEADADIAIAEIALADIANADIAOAEQAHACAFAEQAFADADAFQADAGAAAIQAAAMgEAHQgFAIgHAFQgIAFgJACQgKACgKAAQgJAAgKgCg");
	this.shape_1.setTransform(77.975,-71.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgXA5QgLgEgIgIQgHgJgFgLQgEgLAAgOQAAgMAFgLQAEgMAIgIQAIgIALgFQALgFAMAAQAPAAALAGQALAGAHAKQAIAJADANQADAMgBANIhTAAQAAAQAHAHQAIAHAMAAQAKAAAHgFQAHgFACgGIAcAAQgHAWgOAJQgOAJgUAAQgNAAgLgFgAgMgiQgFADgDAEQgDADgBAFIgBAIIAzAAQgCgNgGgGQgGgGgMAAQgGAAgGACg");
	this.shape_2.setTransform(65.9036,-71.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AglA8IAAh0IAfAAIAAAWIAAAAQACgGAEgEIAIgIQAFgEAGgBQAFgCAGAAIAIABIAAAeIgGgBIgGAAQgJAAgGADQgGADgEAFQgDAFgBAHQgCAGAAAHIAAA1g");
	this.shape_3.setTransform(56.125,-71.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AATBNIgPgBQgFgBgFgDQgFgDgDgGQgDgFAAgJIAAhEIgTAAIAAgWIATAAIAAgjIAfAAIAAAjIAXAAIAAAWIgXAAIAAA5QAAAIADADQACADAJAAIAFAAIAEgBIAAAZIgJABg");
	this.shape_4.setTransform(47.55,-73.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgYBRQgMgDgKgHQgKgHgFgLQgGgLAAgPIAjAAQAAAJADAFQADAGAEADQAFAEAHABIAMACIALgBIAKgCQAFgDADgEQADgEAAgGQAAgHgEgDQgEgEgHgEIgQgEIgQgFIgSgGQgIgDgHgEQgHgFgEgIQgEgIAAgLQAAgMAFgJQAFgJAJgHQAJgGAKgDQALgCALAAQAMAAAMACQALADAJAGQAJAHAGAKQAFAJAAAOIgiAAQgBgHgCgFQgDgEgEgDQgFgDgFgBIgLgBIgJABQgEAAgEADQgDACgDAEQgCADAAAGQAAAEACADQACADAFACIAPAGIAXAGIANADQAIACAIAGQAIAEAGAIQAFAKAAANQAAALgEAKQgEAJgJAHQgIAHgNAEQgMAEgRgBQgMAAgNgDg");
	this.shape_5.setTransform(36.7981,-73.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_stress, new cjs.Rectangle(28.3,-89.1,68.3,29.499999999999993), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgMArQgHgCgFgEQgFgDgEgGQgCgGAAgHIASAAQAAAEABADIAFAFIAGACIAGABIAGAAIAFgCIAEgDQACgCAAgEQAAgDgCgCIgHgEIgIgCIgIgCIgJgEQgFgBgDgCQgEgCgCgFQgDgEAAgGQABgGADgFQADgFAEgDQAEgEAHgBQAFgCAGAAQAFAAAGACQAHABAFAEQAEADAEAFQACAGAAAHIgSAAIgBgHIgFgDIgEgCIgGgBIgFABIgEABIgDADIgBAFIABADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAJADIALADIAHACQAFACADADQAFABADAFQADAEAAAIQAAAFgCAFQgDAFgEAEQgFAEgGACQgHACgJAAQgFAAgHgCg");
	this.shape.setTransform(-10.2,-44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgaAjQgJgIAAgSIAAg0IASAAIAAA0IABAHQABAEABACIAGAEQADACAFAAQAKAAAEgFQADgEABgKIAAg0IASAAIAAA0QAAASgJAIQgKAJgRAAQgRAAgJgJg");
	this.shape_1.setTransform(-18.5,-44.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgRAqQgIgEgFgGQgFgGgDgIQgDgIAAgKQAAgIADgJQADgIAFgGQAFgGAIgEQAIgDAJAAQAKAAAIADQAIAEAFAGQAFAGADAIQADAJAAAIQAAAKgDAIQgDAIgFAGQgFAGgIAEQgIADgKAAQgJAAgIgDgAgKgaQgEADgDAEIgEAKIgBAJIABALIAEAJQADAFAEACQAFACAFAAQAGAAAFgCQAEgCADgFQADgEABgFQABgFAAgGIgBgJQgBgFgDgFQgDgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(-27.575,-44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgdArIAAhVIASAAIAABFIApAAIAAAQg");
	this.shape_3.setTransform(-35.475,-44.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgaAjQgKgIAAgSIAAg0IATAAIAAA0IABAHQABAEACACIAEAEQAEACAFAAQAKAAAEgFQAEgEgBgKIAAg0IATAAIAAA0QABASgKAIQgKAJgRAAQgQAAgKgJg");
	this.shape_4.setTransform(-43.75,-44.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgPAqQgHgEgGgGQgFgGgDgIQgDgIAAgKQAAgIADgJQADgIAFgGQAGgGAHgEQAJgDAIAAQAHAAAHACQAGACAFAEQAFAEADAGQAEAFAAAIIgSAAIgCgGIgEgFIgGgDIgHgBQgFAAgFACQgEADgDAEIgEAKIgBAJIABALIAEAJQADAFAEACQAFACAFAAQAJAAAFgFQAEgGABgIIATAAQgBAIgDAHQgDAGgFAFQgFAEgGADQgHACgIAAQgIAAgJgDg");
	this.shape_5.setTransform(-52.6,-44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_6.setTransform(-58.775,-44.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AglArIAAhVIAlAAQAHAAAHADQAIACAFAGQAFAFADAIQADAIAAAKQAAAJgCAIQgDAIgFAFQgFAGgHADQgHAEgJAAgAgSAbIARAAIAHgBQADgCADgDQADgDACgFQACgFAAgHQAAgFgBgFQgBgGgDgDQgDgEgFgCQgFgCgGAAIgNAAg");
	this.shape_7.setTransform(-64.775,-44.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_8.setTransform(-71.125,-44.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AASArQgCgEAAgGIgBgLQgBgHgDgDQgDgDgHAAIgSAAIAAAiIgTAAIAAhVIAtAAQAGAAAFACQAEACAEADQADADACAFQABAEAAAFQAAAHgDAGQgDAFgHACIAGADIADAFIACAGIABAGIAAAFIABAGIABAFIACAFgAgRgDIAUAAQAGAAADgDQADgDAAgGQAAgHgDgCQgDgDgGAAIgUAAg");
	this.shape_9.setTransform(-77.025,-44.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ridiculous, new cjs.Rectangle(-82.1,-52.6,76.5,15.5), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgNANIAAgaIAbAAIAAAag");
	this.shape.setTransform(-38.9,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgPA/QgGgCgGgEQgGgDgEgGQgDgFgBgIIAYAAQACAHAGADQAFACAFAAQALAAAFgGQAFgGgBgKIAAgMQgEAHgIAEQgHADgHAAQgLAAgHgEQgHgDgFgGQgFgHgCgHQgDgJABgJQAAgJACgIQADgIAFgHQAFgGAHgDQAHgEAKAAQAIAAAHADQAGADAFAIIAAgMIAYAAIAABVIgBAMQgCAIgFAGQgEAGgKAEQgJAEgPAAIgOgBgAgIgqQgEACgDAEQgCADgBAFIgBAKIABAKIADAIQADADAEADQADACAFAAQAGAAADgCIAIgGIADgHIABgJIgBgLQAAgFgDgEQgDgEgEgCQgDgCgHAAQgEAAgEACg");
	this.shape_1.setTransform(-46.85,-33.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AARAvIAAgzQABgLgEgGQgEgFgIAAQgJAAgFAGQgFAGAAAOIAAAvIgZAAIAAhaIAYAAIAAAMIAAAAQAGgHAHgEQAHgEAHAAQAKAAAHADQAGADAEAFQAEAEABAHQACAIAAAIIAAA3g");
	this.shape_2.setTransform(-57.25,-35.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgMA/IAAhaIAYAAIAABagAgMgpIAAgVIAYAAIAAAVg");
	this.shape_3.setTransform(-64.7,-36.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AADA7QgDgBgFgCQgDgDgDgDQgCgFgBgGIAAg1IgPAAIAAgRIAPAAIAAgcIAZAAIAAAcIATAAIAAARIgTAAIAAAsQAAAGACACQACACAGABIAEgBIAFAAIAAATIgIAAIgIABg");
	this.shape_4.setTransform(-70.1,-36.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AARAvIAAgzQAAgLgDgGQgEgFgIAAQgKAAgEAGQgFAGAAAOIAAAvIgZAAIAAhaIAYAAIAAAMIAAAAQAGgHAHgEQAHgEAIAAQAJAAAHADQAGADAEAFQAEAEABAHQACAIAAAIIAAA3g");
	this.shape_5.setTransform(-78.3,-35.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgMA/IAAhaIAYAAIAABagAgMgpIAAgVIAYAAIAAAVg");
	this.shape_6.setTransform(-85.75,-36.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgcAvIAAhaIAXAAIAAARIABAAIAEgIIAHgHIAIgDQAEgCAFAAIAFABIAAAXIgEgBIgFAAQgGAAgFACQgFADgDAEQgCAEgBAFQgCAFAAAGIAAApg");
	this.shape_7.setTransform(-90.95,-35.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgxA/IAAh9IA3AAQAMAAAJADQAIAEAFAFQAFAGADAHQADAIgBAHQABAIgDAHQgDAHgFAFQgFAGgIAEQgJADgMAAIgcAAIAAAtgAgWgDIAWAAIAIAAIAIgDQAEgCACgEQABgEAAgGQAAgGgBgDQgCgEgEgCQgDgCgFgBIgIAAIgWAAg");
	this.shape_8.setTransform(-100.35,-36.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Printing, new cjs.Rectangle(-107.9,-49.2,72.9,23.700000000000003), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgQA1QgIgCgGgEQgGgEgEgHQgDgHgBgKIASAAQAAAGACAEQADAEAEACQAEADAFABIAJABIAIgBIAJgCQAEgCACgDQACgDAAgFQAAgHgFgDQgFgEgHgCIgQgEQgJgBgIgDQgHgDgGgFQgFgGAAgKQAAgIAEgGQAEgGAFgDQAGgEAHgCIAOgBQAIAAAHABQAIACAGADQAGAEADAHQAEAGAAAKIgRAAQgBgFgCgEQgCgDgEgCIgHgDIgIgBIgIAAIgHADQgDABgCADQgCACAAAEQAAAFADADIAIAFIALADIALADIANADQAGACAFADQAFADADAFQADAFAAAIQAAAJgEAHQgEAGgHAEQgGAEgIABQgIACgIAAQgIAAgIgCg");
	this.shape.setTransform(34.675,-51.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgbA2IAAhpIARAAIAAAXIAAAAQAGgNAJgGQAJgGAOAAIAAASQgLAAgHADQgHADgEAGQgEAFgCAIQgCAIAAAJIAAAvg");
	this.shape_1.setTransform(27.575,-51.2519);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgTAzQgJgEgHgIQgGgHgDgKQgDgKgBgMQAAgLAEgLQADgKAHgHQAHgHAJgEQAJgEAKAAQAOAAAJAFQAKAGAFAJQAGAJACALQACALAAAIIhOAAQgBAHACAGQACAGAEAFQAEAFAGADQAHADAHAAQALAAAIgFQAHgFACgLIARAAQgDASgMAJQgMAJgSAAQgMAAgJgEgAgLglQgGADgEAEQgEAEgCAFQgCAGAAAGIA7AAQAAgGgCgGQgDgFgEgEQgEgEgFgDQgGgCgGAAQgGAAgFACg");
	this.shape_2.setTransform(18.9792,-51.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AAPBFIgMgBQgEgBgDgDQgDgCgBgFQgBgEAAgHIAAhDIgSAAIAAgPIASAAIAAggIAQAAIAAAgIAVAAIAAAPIgVAAIAABBIAAAFIACADIAEABIAHAAIAIAAIAAAQg");
	this.shape_3.setTransform(10.725,-52.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAbA2IAAhHQAAgKgGgFQgGgGgKAAQgHAAgGACQgGADgEAFQgDAEgCAGQgCAGAAAHIAAA7IgSAAIAAhpIARAAIAAARIAAAAQALgTAWAAQALAAAHACQAHAEAEAEQAEAGACAHQACAHAAAIIAABFg");
	this.shape_4.setTransform(2.775,-51.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgIBJIAAhpIARAAIAABpgAgIgzIAAgVIARAAIAAAVg");
	this.shape_5.setTransform(-4.375,-53.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgbA2IAAhpIARAAIAAAXIAAAAQAGgNAJgGQAJgGAOAAIAAASQgLAAgHADQgHADgEAGQgEAFgCAIQgCAIAAAJIAAAvg");
	this.shape_6.setTransform(-8.675,-51.2519);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("Ag1BJIAAiRIA/AAQAWAAALALQALAMAAAUQAAAVgLAKQgLAMgWgBIgsAAIAAA8gAgigCIAlAAQARAAAHgHQAIgHAAgNQAAgNgIgHQgHgHgRABIglAAg");
	this.shape_7.setTransform(-18.125,-53.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_printers, new cjs.Rectangle(-26.3,-66.5,66.6,26.1), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgTAyQgJgDgGgIQgHgHgDgKQgDgKAAgMQAAgLADgLQAEgJAGgIQAHgHAJgEQAJgEAKAAQAOAAAJAGQAJAFAGAKQAGAJACAKQACAKgBAJIhNAAQAAAHABAHQACAGAEAEQAEAFAHADQAGADAIgBQAKAAAIgEQAHgGACgKIARAAQgEASgLAJQgMAJgSAAQgMAAgJgFgAgLgkQgGACgDAEQgEAEgCAFQgDAGAAAGIA7AAQAAgGgDgGQgCgFgEgEQgEgEgFgCQgGgDgGAAQgGAAgFADg");
	this.shape.setTransform(35.28,-40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAaBJIAAhHQAAgJgFgGQgGgGgKAAQgHAAgGADQgFACgEAEQgFAFgBAFQgCAGAAAHIAAA8IgRAAIAAiRIARAAIAAA4IAAAAQACgFAEgDIAIgGIAJgDIAJgBQALAAAGADQAHADAFAFQAEAFABAHQACAHAAAIIAABFg");
	this.shape_1.setTransform(24.4,-42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAPBEIgMgBQgDgBgDgCQgDgCgCgFQgBgEgBgIIAAhCIgRAAIAAgPIARAAIAAgfIARAAIAAAfIAVAAIAAAPIgVAAIAABBIAAAFIACACIAFACIAGAAIAIAAIAAAPg");
	this.shape_2.setTransform(15.65,-41.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgLBJIAAhZIgRAAIAAgPIARAAIAAgPQABgNAHgHQAHgGANAAIAGAAIAGABIAAAPIgFgBIgFAAQgGAAgEACQgDADAAAHIAAAOIAUAAIAAAPIgUAAIAABZg");
	this.shape_3.setTransform(4.75,-42.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgVAyQgJgEgHgHQgGgHgEgLQgDgKAAgLQAAgLADgKQAEgJAGgIQAHgIAJgEQAKgEALAAQAMAAAKAEQAJAEAHAIQAGAIADAJQAEAKAAALQAAALgEAKQgDALgGAHQgHAHgJAEQgKAFgMAAQgLAAgKgFgAgMgkQgGACgEAFQgFAGgCAHQgDAIAAAIQAAAKADAHQACAIAFAEQAEAFAGADQAGADAGgBQAGABAHgDQAGgDAEgFQAFgEACgIQACgHABgKQgBgIgCgIQgCgHgFgGQgEgFgGgCQgHgDgGAAQgGAAgGADg");
	this.shape_4.setTransform(-3.9,-40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAOBEIgLgBQgDgBgEgCQgDgCgBgFQgBgEAAgIIAAhCIgSAAIAAgPIASAAIAAgfIAQAAIAAAfIAVAAIAAAPIgVAAIAABBIABAFIACACIADACIAHAAIAIAAIAAAPg");
	this.shape_5.setTransform(-18.15,-41.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgXAzQgIgDgEgFQgEgFgCgHQgCgHABgJIAAhEIARAAIAABGQAAAKAFAGQAGAFAKAAQAHAAAGgCQAGgCAEgFQAEgEABgGQACgGAAgHIAAg7IARAAIAABoIgQAAIAAgQQgFAJgKAFQgIAFgKAAQgLAAgGgDg");
	this.shape_6.setTransform(-26.45,-40.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgdBFQgNgFgJgLQgIgKgFgOQgFgOAAgPQAAgOAFgOQAFgNAIgLQAJgLANgFQANgHAQAAQARAAANAHQAOAFAIALQAJALAEANQAFAOAAAOQAAAPgFAOQgEAOgJAKQgIALgOAFQgNAHgRAAQgQAAgNgHgAgVg2QgKAGgGAIQgGAIgDALQgDALAAAKQAAALADALQADAKAGAJQAGAIAKAGQAJAEAMAAQANAAAKgEQAKgGAFgIQAHgIACgLQAEgLAAgLQAAgKgEgLQgCgLgHgIQgFgIgKgGQgKgEgNAAQgMAAgJAEg");
	this.shape_7.setTransform(-39.55,-42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_outOfThe, new cjs.Rectangle(-47.6,-54.8,88.4,24.499999999999996), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgIA8IAAhIIgPAAIAAgNIAPAAIAAgNQAAgKAGgGQAFgFAMAAIAEAAIAFABIAAANIgEgBIgEgBQgFAAgDACQgDACAAAGIAAAMIARAAIAAANIgRAAIAABIg");
	this.shape.setTransform(-50.575,-23.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgRApQgIgDgFgGQgFgGgDgJQgDgHAAgKQAAgJADgIQADgIAFgGQAFgGAIgDQAIgEAJAAQAKAAAIAEQAIADAFAGQAGAGACAIQADAIAAAJQAAAKgDAHQgCAJgGAGQgFAGgIADQgIAEgKAAQgJAAgIgEgAgJgeQgFADgEAEQgEAEgCAGQgCAGAAAHQAAAIACAGQACAGAEAEQAEAEAFADQAFABAEAAQAGAAAFgBQAEgDAEgEQAEgEACgGQACgGAAgIQAAgHgCgGQgCgGgEgEQgEgEgEgDQgFgBgGAAQgEAAgFABg");
	this.shape_1.setTransform(-57.925,-21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAMA4IgJgBQgDgBgDgBQgCgCgBgEQgBgEAAgGIAAg2IgPAAIAAgMIAPAAIAAgaIANAAIAAAaIARAAIAAAMIgRAAIAAA1IAAAEQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAAAIADABIAFABIAHAAIAAAMg");
	this.shape_2.setTransform(-70.1,-23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgTApQgGgCgDgEQgEgEgBgGQgCgGAAgGIAAg4IAPAAIAAA5QAAAIAEAFQAFAEAIAAQAGAAAEgBQAFgCADgEQADgEACgFQACgFAAgGIAAgvIAOAAIAABVIgOAAIAAgNQgEAHgHAEQgHAEgJAAQgIAAgGgDg");
	this.shape_3.setTransform(-77.225,-21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgYA5QgLgFgHgIQgHgJgEgLQgDgMAAgMQAAgLADgLQAEgLAHgJQAHgJALgFQAKgFAOAAQAOAAALAFQAKAFAIAJQAGAJAEALQAEALAAALQAAAMgEAMQgEALgGAJQgIAIgKAFQgLAFgOAAQgOAAgKgFgAgSgrQgHAEgFAHQgGAHgCAJQgDAIAAAIQAAAJADAJQACAJAGAHQAFAHAHAEQAIAEAKAAQALAAAHgEQAIgEAGgHQAEgHACgJQADgJAAgJQAAgIgDgIQgCgJgEgHQgGgHgIgEQgHgFgLAAQgKAAgIAFg");
	this.shape_4.setTransform(-88.15,-23.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_outOf, new cjs.Rectangle(-95.8,-34.6,49.099999999999994,22.1), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AAWANIAAgTIgIATIgDAAIgIgTIAAATIgDAAIAAgYIAGAAIAHARIAHgRIAHAAIAAAYgAgRANIAAgVIgIAAIAAgDIAUAAIAAADIgIAAIAAAVg");
	this.shape.setTransform(59.15,-35.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgMAMIAAgXIAZAAIAAAXg");
	this.shape_1.setTransform(57.075,-26.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_2.setTransform(52.725,-31.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_3.setTransform(48.525,-31.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgKA5IAAhSIAVAAIAABSgAgKgmIAAgSIAVAAIAAASg");
	this.shape_4.setTransform(44.325,-31.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAQA5IAAgvQAAgKgDgEQgDgFgJAAQgHAAgFAGQgEAEAAANIAAArIgXAAIAAhxIAXAAIAAArIAAAAQAFgHAHgEQAFgDAHAAQAJAAAGADQAFACAEAEQADAFABAGQACAHAAAGIAAAzg");
	this.shape_5.setTransform(37.4,-31.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgPApQgIgEgFgFQgGgGgDgIQgDgIAAgIQAAgKADgHQADgJAFgGQAGgGAHgDQAJgDAIAAQAIAAAHACQAGABAGAEQAFAEADAGQAEAGABAIIgXAAQgCgPgPAAQgEAAgEADQgDACgDAEIgDAJIgBAIIABAJIADAJQACAEAEACQADACAFAAQAIABAFgFQAEgEABgJIAWAAQgCARgLAJQgLAIgQAAQgJAAgHgCg");
	this.shape_6.setTransform(28.05,-29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgeA5QgGgCgFgFQgFgEgDgGQgDgHAAgIQAAgGACgFIAGgJIAIgGIAKgHQgFgFgDgGQgDgFAAgHQAAgGACgGQADgEAEgEQAEgDAFgCQAGgCAFAAQAHAAAFACQAFACAFADQAEADACAGQADAFAAAHQAAAKgGAHQgGAGgIAFIAOASIADgIIABgHIAUAAQgBAIgCAHQgDAIgFAGIAXAbIgcAAIgJgMQgHAIgIACQgGAEgKAAQgIAAgHgCgAgUAJIgFAFIgEAFIgBAGIABAGIAEAFIAFAEIAGABQAGAAAFgEQADgCAEgEIgSgYgAgOgnQgDACAAAEQAAAGADAEIAGAHIAIgGQADgDAAgGQAAgFgDgDQgCgEgEAAQgFAAgDAEg");
	this.shape_7.setTransform(13.575,-31.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_8.setTransform(1.075,-31.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_9.setTransform(-3.125,-31.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgKA5IAAhSIAVAAIAABSgAgKgmIAAgSIAVAAIAAASg");
	this.shape_10.setTransform(-7.325,-31.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgMA5IAAhCIgOAAIAAgQIAOAAIAAgGQAAgLAHgHQAGgHAOAAIAGAAIAGAAIAAARIgJAAQgEAAgCACQgCACAAAFIAAAFIAPAAIAAAQIgPAAIAABCg");
	this.shape_11.setTransform(-12.125,-31.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F1F1F").s().p("AAEA1QgFAAgDgCQgDgDgDgDQgCgEAAgHIAAgvIgOAAIAAgQIAOAAIAAgYIAWAAIAAAYIAQAAIAAAQIgQAAIAAAoQAAAFACACQACACAFAAIAFAAIACAAIAAARIgGABIgGAAg");
	this.shape_12.setTransform(-22.35,-30.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F1F1F").s().p("AgNAqQgGgCgGgCQgFgEgDgFQgEgGgBgJIAXAAQgBAEACADIAEAEQACACADAAIAGACIAFgBIAFgCQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgDQABgFgHgCQgHgDgLgDIgKgCIgIgEQgEgCgCgEQgCgEAAgFQAAgIACgFQAEgGAFgDQAFgCAGgBIANgBIAMABQAHABAFADQAFADADAFQAEAFAAAIIgWAAQAAgGgEgDQgFgCgFgBIgEABIgEABIgEACIgBAEQAAAEACACIAGACIAHACIAKACIAKAEIAIADIAGAGQACAEAAAGQAAAIgDAGQgDAFgFAEQgGADgHABIgNABIgOgBg");
	this.shape_13.setTransform(-29.5,-29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F1F1F").s().p("AgXAoQgFgCgEgFQgDgEgCgHQgBgFAAgJIAAgxIAXAAIAAAtQAAALADAFQAEAFAHAAQAJAAAEgFQAEgHAAgMIAAgqIAXAAIAABRIgWAAIAAgLQgEAHgIAEQgFACgHAAQgKABgGgDg");
	this.shape_14.setTransform(-38.6,-29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F1F1F").s().p("AgNA5QgHgDgFgDQgGgFgDgGQgDgHAAgJIAAgKIAXAAIAAAEIAAAIIADAGQABADADABQADABAEAAQAEAAADgBIAEgEQABgDAAgEIABgGIAAhMIAZAAIAABNIgBANQgBAGgEAGQgEAFgIAEQgHAFgNAAQgHAAgGgCg");
	this.shape_15.setTransform(-48.325,-31.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_justFill, new cjs.Rectangle(-53.2,-42.2,115.7,20.900000000000002), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgGAUQgEAAgCgCIgEgFQgBgCAAgEIAJAAQAAAEADACQACABADAAIADAAIADgBIADgBIAAgDIgBgDIgDgCIgFgBIgDgBIgFgBIgEgBIgDgEIgBgFQAAgDABgCIAFgEIAFgCIAFAAIAGAAIAFADIAEADQABADABADIgJAAQgBgDgDgBIgEgBIgCAAIgDAAIgCACIAAACIABADIADABIADABIAFABIAEACIAFABIADADIABAFQAAAEgBACIgFAEIgGADIgGAAIgGgBg");
	this.shape.setTransform(-3.65,-199.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAJAVIAAgZQAAgEgCgDQgCgCgEAAIgDABIgDACIgCAEIgBAEIAAAXIgJAAIAAgoIAJAAIAAAGIAAAAIAFgFQADgCAEAAQAGAAAEAEQAEADAAAHIAAAbg");
	this.shape_1.setTransform(-7.825,-199.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgIAUQgDgCgDgDIgEgGIgBgJIABgIIAEgGQADgDADgCQAEgBAEAAQAFAAAEABQADACADADIAEAGIABAIIgBAJIgEAGQgDADgDACQgEABgFAAQgEAAgEgBgAgEgMIgEADIgCAFIgBAEIABAFIACAFIAEADIAEABIAFgBIAEgDIACgFIAAgFIAAgEIgCgFIgEgDQgCgBgDAAQgCAAgCABg");
	this.shape_2.setTransform(-12.125,-199.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgEAcIAAgoIAIAAIAAAogAgEgTIAAgIIAIAAIAAAIg");
	this.shape_3.setTransform(-15.2,-200.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AABAaIgDgCIgCgEIAAgEIAAgXIgHAAIAAgHIAHAAIAAgLIAIAAIAAALIAIAAIAAAHIgIAAIAAAVIAAACIAAACIABABIADABIACAAIACgBIAAAHIgDAAIgDABIgFgBg");
	this.shape_4.setTransform(-17.35,-200.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAQAVIgCAAIgEgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgHAEIgGABIgGAAIgEgDIgDgDIgBgFQAAgEABgDIAEgDIAFgBIAFgBIAEgBIAEAAIACgCIABgDIAAgDIgCgBIgDgBIgCAAQgEAAgCABQgDACAAADIgJAAQAAgEACgCIAEgEQADgCADgBIAGAAIAFAAIAGACIADAEQACACAAADIAAAUIAAADIACAAIABAAIABAAIAAAGIgBABIgCAAgAACACIgFAAIgDABIgCABIgCACIAAADIABADIACABIACABIADAAIACAAIADgBIADgDIABgDIAAgHIgFACg");
	this.shape_5.setTransform(-20.475,-199.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAAAaIgCgCIgCgEIAAgEIAAgXIgHAAIAAgHIAHAAIAAgLIAIAAIAAALIAIAAIAAAHIgIAAIAAAVIAAACIAAACIACABIACABIACAAIACgBIAAAHIgDAAIgDABIgGgBg");
	this.shape_6.setTransform(-23.9,-200.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgEAcIAAgoIAIAAIAAAogAgEgTIAAgIIAIAAIAAAIg");
	this.shape_7.setTransform(-25.9,-200.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgEAUIgPgnIAKAAIAJAeIABAAIAJgeIAKAAIgPAng");
	this.shape_8.setTransform(-28.675,-199.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AAJAVIAAgZQAAgEgCgDQgCgCgEAAIgDABIgDACIgCAEIgBAEIAAAXIgJAAIAAgoIAJAAIAAAGIAAAAIAFgFQADgCAEAAQAGAAAEAEQAEADAAAHIAAAbg");
	this.shape_9.setTransform(-32.775,-199.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_10.setTransform(-35.925,-200.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_invitations, new cjs.Rectangle(-37.3,-205.4,35.8,10), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgPA0QgJgCgHgEQgGgEgFgHQgEgHgBgKIAbAAQABAFACADQACADACACQADACAEABIAHABIAHAAIAFgDIAFgEQACgCAAgEQAAgGgJgDQgIgEgPgDIgLgDQgGgCgFgCQgEgDgDgFQgDgEAAgHQAAgKAEgGQAEgHAGgDQAGgEAJgBIAPgCQAIAAAIACQAIABAGAEQAGAEAEAGQAEAGABAKIgbAAQgBgIgFgDQgFgDgHAAIgGAAIgFABIgDADQgCACABADQgBAEADADIAHADIAJADIAMADIAMADQAGACAFADQAEADADAEQACAFAAAHQAAAKgDAHQgFAHgGAEQgHAEgIACIgRACQgIAAgIgCg");
	this.shape.setTransform(115.85,-71.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AghBFIgJgBIAAgXIAIABIAIAAQAGgBADgDQADgEgBgFIgBgGIgkhfIAeAAIAWBFIABAAIAXhFIAdAAIgrByQgFAMgHAGQgIAFgPAAg");
	this.shape_1.setTransform(105.7,-69.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgcA0QgGgCgFgDQgFgEgCgGQgDgGAAgIQAAgIADgGQADgGAFgDQAFgCAGgCIANgDIAMgBIAKgCQAFgBADgDQACgCAAgEQAAgFgBgCQgCgDgCgCIgGgCIgHAAQgHAAgFADQgFAEgBAIIgcAAQABgKAEgGQAFgHAGgEQAHgEAIgBIAQgCIAQABQAIABAHADQAGAEAEAFQAEAGAAAJIAAA0IABAOQABAGACADIgdAAIgBgFIgBgFQgGAHgJADQgJADgJAAQgHAAgHgCgAAOAEIgGABIgGABIgGABIgGACIgGACIgDAFQgCACAAAEQAAAEACACQABADACABIAGADIAHAAQAHAAAEgDQAFgCACgEIADgIIAAgGIAAgLg");
	this.shape_2.setTransform(95.025,-71.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgaBDQgIgEgGgIQgFgHgDgKQgDgKAAgKQAAgLADgIQADgKAFgHQAGgIAIgEQAJgEALgBQAJABAHADQAJAEAFAIIAAAAIAAg0IAcAAIAACNIgbAAIAAgOIAAAAQgFAJgIAEQgIADgJAAQgLAAgKgFgAgKgLQgFADgDAEQgCAEgBAGIgCAMIACAMQABAGADAEQADAGAEACQAFADAFAAQAHAAAGgDQAEgDADgEQADgFABgGQABgGAAgGQAAgGgBgGQgBgGgEgEQgCgEgFgDQgEgDgIAAQgFAAgFADg");
	this.shape_3.setTransform(83.4,-72.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgNBHIAAhmIAbAAIAABmgAgNgvIAAgXIAbAAIAAAXg");
	this.shape_4.setTransform(75.25,-73.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_5.setTransform(70.4,-73.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgVAyQgKgEgGgHQgIgHgDgKQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgLgdQgEADgDAFQgDAEgCAGQgBAGAAAFIABAMQACAGADAFQADAEAEADQAFADAGAAQAHAAAFgDQAFgDACgEQADgFACgGIABgMQAAgFgBgGQgCgGgDgEQgCgFgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_6.setTransform(62.05,-71.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AAdBHIAAg9Ig4AAIAAA9IggAAIAAiNIAgAAIAAA3IA4AAIAAg3IAfAAIAACNg");
	this.shape_7.setTransform(48.925,-73.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Holidays, new cjs.Rectangle(41.2,-85.7,80.2,24.400000000000006), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgGAUQgDgBgCgCQgDgBgBgDQgBgCgBgEIAJAAQABAEACABQACACADAAIADAAIADgBIACgCIABgCIgBgDIgDgCIgFgBIgDgBIgFgBIgEgBIgDgEIgBgFQABgDABgCQABgCADgBIAFgCIAFgBIAGABIAEACIAFAEIACAFIgKAAQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAgBAAAAIgFgBIgCAAIgDABIgBABIgBACIABADIADABIADABIAFABIAEACIAFABIADADIAAAFQAAAEgBACIgEAEIgGACIgGABIgGgBg");
	this.shape.setTransform(-96.7,-197.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgIAaQgEgBgCgDQgCgDgBgEQgCgEAAgEQAAgGACgDIAEgGIAFgEIAHgBIACABIAEABIADACIADACIAAgUIAJAAIAAA2IgJAAIAAgGQgCAEgDABQgDACgDAAQgFAAgDgCgAgEgFIgDAEIgCADIgBAFIABAFIACAFIADADIAEABIAFgBIADgDIADgFIAAgFQAAgHgDgCQgDgEgFAAIgEABg");
	this.shape_1.setTransform(-101.125,-198.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgLAUIAAgmIAJAAIAAAHIABgDIACgDIADgCIAEAAIADAAIABAAIAAAIIgCAAIgCAAIgEABIgDACIgCAFIgBAEIAAATg");
	this.shape_2.setTransform(-104.4,-197.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AAOAVIgEgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCADgEABIgGABIgFgBIgFgCQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgFQAAgDACgDIADgDIAFgBIAFgBIAEgBIAEAAIACgCIABgDIgBgCIgCgCIgCgBIgCAAQgEAAgCACQgCABgBADIgIAAQAAgEABgCIAFgEIAFgCIAGgBIAFABIAFACIAEADIABAGIAAATIABACIABABIABAAIACAAIAAAGIgCAAIgBAAIgCABgAACACIgFAAIgDABIgCABIgCACIAAADIABACIACACIACABIADAAIACAAIADgCIADgCIABgEIAAgGIgFACg");
	this.shape_3.setTransform(-108.025,-197.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgJAaQgFgCgDgEQgDgEgCgFQgCgFAAgGIACgKQACgFADgEQADgEAFgCQAFgDAFAAQAFAAAEACQAEABADACIAFAGQACAEAAAEIgJAAIgCgEIgDgEIgDgCIgGgBQgDAAgDACIgFAFIgDAGIgBAHIABAIIADAGIAFAFQADACADAAIAGgBIAEgDIADgFIABgGIAKAAQgBAFgCAEQgBAEgDADQgDADgFACQgEACgFAAQgFAAgFgDg");
	this.shape_4.setTransform(-112.975,-198.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgPAbIAAgHIACAAIACABIADgBIACgBIABgCIAAgCIABgDIgPgmIAKAAIAJAcIABAAIAKgcIAJAAIgQAoIgCAGIgCADIgDAEIgGABIgGgBg");
	this.shape_5.setTransform(-119.775,-197);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAOAVIgEgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCADgEABIgGABIgFgBIgFgCQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgFQAAgDACgDIADgDIAFgBIAFgBIAEgBIAEAAIACgCIABgDIgBgCIgCgCIgCgBIgCAAQgEAAgCACQgCABgBADIgIAAQAAgEABgCIAFgEIAFgCIAGgBIAFABIAFACIAEADIABAGIAAATIABACIABABIABAAIACAAIAAAGIgCAAIgBAAIgCABgAACACIgFAAIgDABIgCABIgCACIAAADIABACIACACIACABIADAAIACAAIADgCIADgCIABgEIAAgGIgFACg");
	this.shape_6.setTransform(-123.775,-197.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgIAaQgEgBgCgDQgCgDgBgEQgCgEAAgEQAAgGACgDIAEgGIAFgEIAHgBIACABIAEABIADACIADACIAAgUIAJAAIAAA2IgJAAIAAgGQgCAEgDABQgDACgDAAQgFAAgDgCgAgEgFIgDAEIgCADIgBAFIABAFIACAFIADADIAEABIAFgBIADgDIADgFIAAgFQAAgHgDgCQgDgEgFAAIgEABg");
	this.shape_7.setTransform(-128.425,-198.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgDAbIAAgmIAHAAIAAAmgAgDgSIAAgIIAHAAIAAAIg");
	this.shape_8.setTransform(-131.525,-198.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_9.setTransform(-133.375,-198.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgHATQgEgBgDgDQgCgDgCgEIgBgIIABgHQACgEACgDQADgDAEgBQADgCAEAAQAFAAADACQAEABADADQACADACAEIABAHIgBAIQgCAEgCADQgDADgEABQgDACgFAAQgEAAgDgCgAgEgMIgEADIgCAFIAAAEIAAAFIACAFIAEADIAEABIAFgBIAEgDIACgFIAAgFIAAgEIgCgFIgEgDIgFgBIgEABg");
	this.shape_10.setTransform(-136.525,-197.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AAMAbIAAgYIgYAAIAAAYIgJAAIAAg1IAJAAIAAAVIAYAAIAAgVIAKAAIAAA1g");
	this.shape_11.setTransform(-141.55,-198.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_holidayCards, new cjs.Rectangle(-144.6,-203.6,50.3,9.799999999999983), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AARAhQgCgDAAgFQgFAFgGADQgFACgHAAIgJgBQgEgBgDgCQgDgCgCgEQgCgEAAgFQAAgFACgEQACgEAEgCQADgBAEgBIAIgCIAIgCIAHgBQADgBACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgBgCIgEgEIgFgBIgEgBQgHAAgFADQgEADgBAHIgLAAQAAgGADgEQACgFAEgCQAEgDAFgBIAKgBIAJAAQAEABAEACQAEACACAEQACADAAAGIAAAiIABAGQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAIADAAIAAAIQgDACgFAAQgEAAgDgCgAAIABIgHABIgGABIgHACQgDACgCACQgCACAAAFIABAEIADADIAEACIAFAAQAGAAADgBIAGgEIAEgFIABgFIAAgKIgGABg");
	this.shape.setTransform(-9.375,-32.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AARAvIAAguQAAgFgEgEQgEgEgGAAQgEAAgEACIgGAEIgEAGIgBAJIAAAmIgLAAIAAhdIALAAIAAAkIAEgFIAFgEIAHgCIAEAAQAHAAAEABQAFACADAEQADADABAEQABAFAAAEIAAAtg");
	this.shape_1.setTransform(-20.5,-33.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAKAsIgIgBIgEgCIgDgEIgBgHIAAgrIgLAAIAAgKIALAAIAAgUIALAAIAAAUIANAAIAAAKIgNAAIAAApIAAADIABACIADABIAEAAIAFAAIAAAKg");
	this.shape_2.setTransform(-26.425,-33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgFAvIAAhDIAKAAIAABDgAgFggIAAgOIAKAAIAAAOg");
	this.shape_3.setTransform(-29.95,-33.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AAOAiIgNg1IgBAAIgNA1IgLAAIgXhDIANAAIAPA2IAOg2IALAAIAPA2IAPg2IAMAAIgWBDg");
	this.shape_4.setTransform(-36.45,-32.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgMAhQgGgDgEgFQgEgEgCgHQgCgHAAgHQAAgHACgGQADgHAEgEQAEgFAGgDQAGgCAGAAQAJAAAGADQAGAEADAGQAEAGABAGQACAHgBAFIgxAAIABAJQABAEADADQACADAEACQAEACAFAAQAHAAAEgEQAFgDABgHIALAAQgCAMgIAFQgHAGgMAAQgHAAgGgCgAgHgXQgDABgDADIgEAGIgBAHIAmAAIgCgHIgEgGIgGgEQgEgCgEAAQgDAAgEACg");
	this.shape_5.setTransform(-48.6687,-32.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAkAiIAAgrIAAgGIgCgEIgEgDQgDgCgEAAQgIAAgFAFQgEAFAAAHIAAApIgLAAIAAgrIAAgGIgCgEIgEgDQgCgCgEAAQgFAAgEACQgDACgCADIgDAGIgBAEIAAApIgLAAIAAhCIAKAAIAAAKQAIgMAOAAQAGAAAGADQAEADACAGQADgFAGgDQAFgEAHAAIAJABQAEACADACQADADACADQABAEAAAFIAAAwg");
	this.shape_6.setTransform(-57.975,-32.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgNAhQgHgDgDgFQgEgFgDgGQgCgHAAgHQAAgGACgHQADgGAEgFQADgFAHgDQAGgCAHAAQAIAAAGACQAGADAEAFQAFAFABAGQADAHAAAGQAAAHgDAHQgBAGgFAFQgEAFgGADQgGACgIAAQgHAAgGgCgAgHgXQgEACgDADQgDADgCAFQgBAFAAAFQAAAGABAFQACAFADADQADADAEACQADACAEAAQAEAAAEgCQAEgCADgDQADgDACgFQABgFAAgGQAAgFgBgFQgCgFgDgDQgDgDgEgCQgEgCgEAAQgEAAgDACg");
	this.shape_7.setTransform(-67.4,-32.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgQAtQgJgEgFgGQgFgHgDgJQgDgIAAgLQAAgJADgJQADgJAGgGQAFgHAJgEQAIgEAKAAQAHAAAGACQAHACAFAEQAFAEAEAFQADAGABAIIgMAAQgDgKgHgFQgHgFgKAAQgHAAgGADQgGADgEAFQgEAGgBAGQgCAHAAAHQAAAHACAIQABAHAEAFQAEAFAGADQAGAEAIAAQAGAAAEgDQAFgCAEgDQADgEACgFQACgFAAgFIANAAQgCARgKAKQgLAKgSAAQgJAAgIgEg");
	this.shape_8.setTransform(-75.975,-33.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_comesWith, new cjs.Rectangle(-81.1,-41.6,79.39999999999999,16), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgQA0QgIgCgHgEQgGgEgEgHQgFgHAAgKIAbAAQAAAEACAEIAEAFQADACAEABIAHABIAGgBIAGgCIAFgEQABgCAAgEQAAgGgIgDQgIgEgOgDIgMgDQgGgCgFgCQgEgDgDgEQgDgFAAgHQAAgKAEgGQAEgGAHgEQAGgDAHgCIAQgBQAIAAAIABQAHACAGAEQAHADADAHQAFAGABAJIgbAAQgBgIgFgDQgGgDgGAAIgGABIgEABIgEADQgBACgBADQABADACADIAHAEIAJACIAMADIAMADQAFACAFADQAFADADAEQACAFAAAHQAAAKgEAHQgEAHgGAEQgHAEgIACQgJABgIAAQgIAAgJgBg");
	this.shape.setTransform(-26.6,-34.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgTAyQgKgEgHgHQgGgHgEgKQgEgKAAgMQAAgKAEgKQAEgKAHgHQAHgHAJgEQAKgEAKAAQANAAAKAFQAJAFAGAIQAHAJACAKQADALgBALIhIAAQABANAGAGQAGAHALAAQAIAAAHgFQAGgEABgFIAZAAQgGATgNAHQgMAIgRAAQgLAAgJgDgAgKgdQgEACgDAEQgCADgBAEIgCAGIAsAAQgBgKgFgGQgGgFgKAAQgFAAgFACg");
	this.shape_1.setTransform(-37.3875,-34.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgQBFQgIgCgHgDQgGgFgEgGQgEgGgBgIIAcAAQACAHAFADQAGADAGAAQAMAAAGgGQAFgIAAgKIAAgOIgBAAQgEAJgIADQgJAEgIAAQgLAAgJgEQgIgEgFgHQgFgHgDgIQgCgKAAgKQAAgKADgJQACgJAGgHQAFgHAIgEQAJgEAKAAQAJAAAIADQAHAEAFAJIABAAIAAgNIAaAAIAABdQAAAGgCAIQgBAJgGAGQgFAHgLAFQgKAEgQAAIgPgCgAgJgvQgEADgDAEQgDADgBAGIgBALIABAKQABAGACAEQADAEAEACQAEADAGAAQAGAAAEgCQAFgCADgEQADgEABgEQACgGAAgFIgBgMQgCgGgCgEQgDgEgFgDQgEgCgHAAQgFAAgEACg");
	this.shape_2.setTransform(-48.925,-32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgZBDQgJgFgGgHQgFgIgDgJQgCgKgBgLQABgKACgIQADgKAFgHQAGgHAJgFQAIgEALAAQAIAAAJAEQAHADAFAIIAAAAIAAgzIAcAAIAACLIgaAAIAAgNIgBAAQgEAIgJAEQgIADgJAAQgLAAgIgEgAgKgLQgEADgDAFQgEADgBAGQgBAGAAAGIABAMQACAGADAEQADAFAFADQAEADAGAAQAGAAAFgDQAFgDADgFIADgKIABgMIgBgMIgDgJQgDgFgFgDQgFgCgGAAQgHAAgEACg");
	this.shape_3.setTransform(-60.55,-35.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgNBGIAAhkIAbAAIAABkgAgNguIAAgXIAbAAIAAAXg");
	this.shape_4.setTransform(-68.625,-36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AggA0IAAhkIAbAAIAAASIAAAAIAFgIIAHgHQAEgDAFgBIAKgCIAHABIAAAaIgFgBIgFAAQgIAAgFADQgGACgDAFQgCADgBAHQgCAFAAAGIAAAug");
	this.shape_5.setTransform(-74.325,-34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAQBCIgMgBQgFgBgEgCQgEgDgDgEQgCgFAAgIIAAg6IgRAAIAAgTIARAAIAAgeIAbAAIAAAeIAUAAIAAATIgUAAIAAAxQAAAHACACQACADAHAAIAEgBIAFAAIAAAVIgIABg");
	this.shape_6.setTransform(-82.1,-35.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AggA0IAAhkIAbAAIAAASIAAAAIAFgIIAHgHQAEgDAFgBIAKgCIAHABIAAAaIgFgBIgFAAQgIAAgFADQgGACgDAFQgCADgBAHQgCAFAAAGIAAAug");
	this.shape_7.setTransform(-89.225,-34.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgcA0QgGgCgEgEQgFgEgDgFQgCgGAAgIQAAgIADgGQADgGAEgDQAFgCAGgCIANgDIAMgBIAKgCQAFgBACgCQADgDAAgEQAAgEgCgDIgDgEIgGgCIgHgBQgHAAgFAEQgFADgBAJIgbAAQAAgKAFgHQAEgGAGgEQAHgEAJgCQAIgBAHAAIAQABQAIABAGADQAGADAFAGQAEAFAAAKIAAAzIAAANQABAHACADIgcAAIgBgFIgBgFQgHAHgJADQgIACgJAAQgHAAgHgBgAANAEIgFABIgHABIgFABIgGACIgGACIgDAEQgCADAAAEQAAAEACACIADAEIAGACIAGABQAIAAAEgDQAFgDACgDIACgIIABgGIAAgLg");
	this.shape_8.setTransform(-98.875,-34.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgYBEQgNgGgJgKQgJgKgEgNQgFgNAAgQQAAgOAFgOQAEgNAJgKQAJgKANgFQANgGAPAAQALAAAKADQALADAIAHQAIAHAGAIQAEAKACAMIgeAAQAAgFgDgEQgDgFgEgDQgEgEgGgCQgFgCgFAAQgKAAgHAFQgHADgEAIQgFAGgCAJQgCAJAAAHQAAAJACAJQACAIAFAHQAEAGAHAEQAHAFAKAAQAOAAAHgJQAJgJABgOIAeAAQgBAOgFAKQgFALgIAHQgIAHgKAEQgLAEgNAAQgPAAgNgFg");
	this.shape_9.setTransform(-111.6,-36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridges, new cjs.Rectangle(-119.5,-48.9,98.8,24.7), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1F1F").s().p("AgQAsQgIgDgGgHQgFgGgDgJQgDgJAAgKQAAgKADgIQADgIAGgHQAGgGAIgEQAHgDAJgBQAMAAAIAGQAIAFAFAHQAFAIABAJQACAJAAAIIhDAAQAAAFABAGQACAFADAEQAEAFAFACQAGADAGgBQAKABAGgFQAGgEACgKIAOAAQgDAQgKAIQgKAHgPABQgKAAgIgEgAgKgfQgEACgEADIgFAIQgCAFAAAFIAzAAQAAgFgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgFACg");
	this.shape.setTransform(18.68,-24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgQAsQgIgDgGgHQgFgGgDgJQgDgJAAgKQAAgKADgIQADgIAGgHQAGgGAIgEQAHgDAJgBQAMAAAIAGQAIAFAFAHQAFAIABAJQACAJAAAIIhDAAQAAAFABAGQACAFADAEQAEAFAFACQAGADAGgBQAKABAGgFQAGgEACgKIAOAAQgDAQgKAIQgKAHgPABQgKAAgIgEgAgKgfQgEACgEADIgFAIQgCAFAAAFIAzAAQAAgFgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(9.58,-24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgXAuIAAhaIAOAAIAAAUQAGgLAHgFQAIgGAMAAIAAARQgJgBgHADQgFADgDAEQgEAFgCAGQgCAIAAAHIAAAog");
	this.shape_2.setTransform(2.75,-24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgIA/IAAhMIgQAAIAAgOIAQAAIAAgNQAAgLAGgGQAFgFANgBIAEABIAFABIAAANIgEgBIgEAAQgGAAgCACQgDACgBAGIAAAMIASAAIAAAOIgSAAIAABMg");
	this.shape_3.setTransform(-2.85,-26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgZALIAAgVIAzAAIAAAVg");
	this.shape_4.setTransform(-8.975,-24.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgRAsQgJgDgGgHQgGgGgDgJQgDgIAAgLQAAgJADgJQADgJAHgGQAGgHAIgDQAJgEAJAAQAMAAAIAFQAJAEAFAIQAGAHADAKQACAJgBAKIhAAAQAAAMAGAFQAGAGAJAAQAIAAAFgEQAFgEACgEIAWAAQgGARgKAHQgLAHgQAAQgKAAgIgEgAgIgaQgEACgDADQgCADgBADIgBAGIAnAAQgBgJgFgFQgEgFgJAAQgFAAgEACg");
	this.shape_5.setTransform(-17.62,-24.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgOA+QgIgCgFgDQgGgDgEgGQgEgGAAgHIAZAAQACAGAEAEQAGACAGAAQAKAAAFgHQAEgFABgKIAAgMIgBAAQgEAHgIAEQgGADgIAAQgKAAgHgEQgIgDgFgHQgEgGgCgHQgDgIAAgKQAAgIADgJQACgIAFgGQAFgHAIgDQAHgDAJAAQAIAAAHACQAGAEAFAIIABAAIAAgNIAXAAIAABVIgBAMQgBAHgFAGQgGAGgJAFQgJADgPAAIgNgBgAgIgqQgEADgCADQgDAEgBAEQgBAFAAAFIABAKQABAFADADQACADADADQAFACAEAAQAGAAADgCQAFgCACgEIAFgHIABgJIgBgKQgBgFgDgEQgCgEgEgDQgFgCgGAAQgEAAgEACg");
	this.shape_6.setTransform(-28,-23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgWA8QgIgEgFgHQgFgGgDgKQgCgIAAgKQAAgJACgIQADgIAFgHQAFgGAIgEQAHgDAKAAQAHAAAHACQAIAEAEAHIAAAAIAAguIAZAAIAAB8IgXAAIAAgLIgBAAQgEAIgHACQgHAEgIAAQgLAAgHgEgAgJgKQgEADgCAEIgEAIIgBALQAAAFABAFQABAGADAEQADAEAEACQAEADAFAAQAGAAAEgDQAEgCADgEQACgEABgGIABgKIgBgLQgBgFgCgDQgDgEgEgDQgEgCgGAAQgFAAgFACg");
	this.shape_7.setTransform(-38.675,-26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgLA/IAAhaIAYAAIAABagAgLgpIAAgVIAYAAIAAAVg");
	this.shape_8.setTransform(-46.1,-26.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgcAuIAAhaIAXAAIAAARIABAAIAEgHQACgEAEgDIAJgEIAJAAIAFAAIAAAYIgEgCIgFAAQgHABgEACQgFACgDAEQgCAEgBAFIgBALIAAAog");
	this.shape_9.setTransform(-51.225,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AAEA6QgFAAgEgCQgEgCgCgFQgCgEAAgHIAAg1IgPAAIAAgRIAPAAIAAgbIAYAAIAAAbIASAAIAAARIgSAAIAAAsQAAAGACADQACACAGAAIAEgBIAEAAIAAATIgHABIgHAAg");
	this.shape_10.setTransform(-58.325,-25.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgcAuIAAhaIAXAAIAAARIABAAIAEgHQACgEAEgDIAJgEIAJAAIAFAAIAAAYIgEgCIgFAAQgHABgEACQgFACgDAEQgCAEgBAFIgBALIAAAog");
	this.shape_11.setTransform(-64.875,-24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F1F1F").s().p("AgYAuQgGgCgEgDQgEgDgDgFQgCgFAAgIQAAgHADgFQACgFAFgDQAEgCAFgCIAMgCIALgCIAIgBQAFgBACgCQACgCAAgEQAAgEgBgCQgBgDgDgBIgFgCIgGAAQgGAAgFADQgEADAAAHIgZAAQAAgIAEgGQAEgGAGgEQAGgDAHgBQAIgCAGAAIAOABQAHABAGADQAGADAEAFQADAFAAAIIAAAuIABAMIACAIIgZAAIgBgEIgBgEQgGAGgIACQgHADgIAAQgHAAgFgCgAAMADIgFABIgFABIgFABIgGACIgFACIgDAEQgBACAAADQAAAEABACIADAEIAFACIAGAAQAGAAAFgCQAEgDABgDIADgHIAAgGIAAgJg");
	this.shape_12.setTransform(-73.975,-24.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F1F1F").s().p("AgWA9QgLgFgIgJQgIgJgEgMQgFgMAAgNQAAgNAFgMQAEgMAIgJQAIgJALgGQAMgFANAAQAKAAAKADQAJADAHAGQAHAGAGAIQAEAJABAKIgbAAQAAgEgDgEIgGgHQgEgDgEgCQgEgBgGAAQgIAAgGADQgHAEgEAGQgEAGgCAIQgCAHAAAIQAAAHACAIQACAHAEAGQAEAGAHAEQAGAEAIAAQANAAAHgIQAHgIABgNIAbAAQAAAMgFAKQgFAJgGAHQgIAHgJADQgKAEgMAAQgNAAgMgFg");
	this.shape_13.setTransform(-85.55,-26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-93,-38.1,117,22.900000000000002), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape.setTransform(98.3,-198.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgHAVQgDgBgCgCIgEgEQgCgDABgEIAJAAQAAAEADACQACACADAAIADgBIADAAIADgCIAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgDgCIgEgBIgEgBIgFgBIgFgBIgDgEIgBgFQABgDABgDQACgCADgBIAFgCIAFgBIAGABIAFACIAFAEQABACAAAEIgJAAQgBgDgDgCIgEgBIgCAAIgDABIgCABIAAADQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADACIADABIAFABIAFACIAFABIADADIAAAFQAAAEgBADIgFAEIgFACIgHABIgHgBg");
	this.shape_1.setTransform(95.35,-199.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgIAUQgEgBgCgDQgEgDgBgEQgBgEAAgFQAAgEABgEQABgEAEgDQACgDAEgBQAEgCAEAAQAFAAAEACQAEABACADIAEAHQACAEAAAEQAAAFgCAEIgEAHQgCADgEABQgEACgFAAQgEAAgEgCgAgEgMIgEADIgCAFIgBAEIABAFIACAFIAEADQACACACAAQADAAACgCQADgBABgCIACgFIABgFIgBgEIgCgFIgEgDQgCgCgDAAQgCAAgCACg");
	this.shape_2.setTransform(91.15,-199.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AAAAaIgCgCIgCgDIAAgEIAAgYIgHAAIAAgHIAHAAIAAgMIAIAAIAAAMIAIAAIAAAHIgIAAIAAAVIAAADIABABIABACIACAAIACAAIACAAIAAAHIgDAAIgDAAIgGgBg");
	this.shape_3.setTransform(87.575,-200.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgIAUQgEgBgDgDQgDgDAAgEQgCgEAAgFQAAgEACgEQAAgEADgDQADgDAEgBQAEgCAEAAQAFAAAEACQAEABADADIADAHQACAEAAAEQAAAFgCAEIgDAHQgDADgEABQgEACgFAAQgEAAgEgCgAgFgMIgDADIgCAFIgBAEIABAFIACAFIADADQADACACAAQADAAACgCQACgBACgCIACgFIAAgFIAAgEIgCgFIgEgDQgCgCgDAAQgCAAgDACg");
	this.shape_4.setTransform(84.2,-199.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AAJAdIAAgaQAAgEgCgDQgCgCgEAAIgDABIgEACIgCADIAAAEIAAAZIgJAAIAAg5IAJAAIAAAWIAFgFQADgCADAAQAHAAAEAEQAEADAAAGIAAAdg");
	this.shape_5.setTransform(79.725,-200.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgVAdIAAg5IAYAAQAGAAAEACQAEACACACIADAGIABAGIgBAGIgDAFQgCACgEACQgEACgGAAIgPAAIAAAWgAgMAAIAPAAIADgBIADgCIADgCIABgFIgBgFIgCgDIgEgBIgDAAIgPAAg");
	this.shape_6.setTransform(75.15,-200.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgIAbQgEgBgCgDIgEgHIgBgJIABgHQABgEADgDIAGgFQADgBAFAAIADAAIADABIAEACIADADIAAgVIAHAAIAAA4IgHAAIAAgFQgCADgEACQgDABgEAAQgFAAgDgCgAgFgGIgEAEIgCAEIgBAGIABAFIACAFIAEAEQADABACAAQAEAAACgBIAEgEIACgFIABgFIgBgGQAAgCgCgCQgCgDgCgBQgDgBgDAAQgDAAgCABg");
	this.shape_7.setTransform(68.075,-200.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AALAVIAAgbQAAgEgDgCQgCgCgEAAIgEABIgEACIgCAFIgBAFIAAAWIgHAAIAAgoIAGAAIAAAGQAFgHAIAAIAHABQADABABACIADAFIAAAGIAAAag");
	this.shape_8.setTransform(63.825,-199.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AALAUQgCgBAAgEQgDAEgEABQgCACgFAAIgFgBIgEgCQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIABgGIAEgDIAEgCIAGgBIAEgBIAFAAIACgCIABgDIgBgDIgCgDIgCgBIgDAAQgEAAgDACQgDACAAAEIgHAAQAAgEACgCQABgDACgCIAGgCIAGgBIAFABQADAAADABIADAEQACACgBAEIAAAUIAAADQABABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIADgBIAAAGIgFABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAAFABIgFAAIgDABIgEABIgDACQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBABIABACIACACIADABIADABIAFgBIADgDIACgDIABgDIAAgGIgDABg");
	this.shape_9.setTransform(59.75,-199.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AndPhotos, new cjs.Rectangle(57.2,-206,42.39999999999999,10.300000000000011), null);


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
	this.shape.graphics.f("#1F1F1F").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(-8.575,-53.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AAPAsIgWghIgKAJIAAAYIgKAAIAAhXIAKAAIAAAzIAdgbIAOAAIgaAXIAcAog");
	this.shape_1.setTransform(-12.9,-57.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AAQAhIAAgrQAAgGgEgDQgDgDgGAAQgEAAgEABQgDABgCADIgEAHIgBAIIAAAjIgLAAIAAg/IAKAAIAAAKQAHgMANAAQAHAAAEACQAEACACADQAEADABAEIABAKIAAApg");
	this.shape_2.setTransform(-19.85,-56.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_3.setTransform(-24.7,-57.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgGAtIAAg2IgLAAIAAgJIALAAIAAgKQAAgIAFgEQADgEAJAAIADABIAEAAIAAAKIgDgBIgDAAQgEAAgCABQgCACAAAEIAAAJIAMAAIAAAJIgMAAIAAA2g");
	this.shape_4.setTransform(-31.175,-57.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgNAfQgFgDgEgEQgEgFgCgGQgCgGAAgHQAAgGACgGQACgGAEgFQAEgEAFgDQAGgDAHABQAIgBAFADQAGADAEAEQAEAFACAGQACAGAAAGQAAAHgCAGQgCAGgEAFQgEAEgGADQgFADgIgBQgHABgGgDgAgGgWQgEACgDADQgDADgCAEQgBAFAAAFQAAAGABAFQACAEADADQADADAEABQADACADAAIAIgCQADgBADgDQADgDACgEQABgFAAgGQAAgFgBgFQgCgEgDgDQgDgDgDgCIgIgBQgDAAgDABg");
	this.shape_5.setTransform(-36.45,-56.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AAJAqIgHgBIgEgCQgCgBAAgDIgBgIIAAgnIgLAAIAAgKIALAAIAAgTIAJAAIAAATIANAAIAAAKIgNAAIAAAnIABACIABACIACABIAEAAIAFAAIAAAKg");
	this.shape_6.setTransform(-45.175,-57.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AAQAhIAAgrQAAgGgEgDQgDgDgGAAQgEAAgEABQgDABgDADIgDAHIgBAIIAAAjIgKAAIAAg/IAKAAIAAAKQAGgMANAAQAGAAAFACQAEACACADQADADABAEIACAKIAAApg");
	this.shape_7.setTransform(-50.3,-56.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgOAfQgFgCgCgDQgDgDgBgEIgBgKIAAgpIALAAIAAArQAAAGAEADQADADAGAAQAEAAAEgBQADgCACgCQADgDABgEQABgDAAgFIAAgjIAKAAIAAA/IgKAAIAAgKQgDAGgGADQgEADgGAAQgHAAgEgCg");
	this.shape_8.setTransform(-57,-56.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgMAfQgGgDgEgEQgEgFgCgGQgCgGAAgHQAAgGACgGQACgGAEgFQAEgEAGgDQAFgDAHABQAHgBAHADQAFADAEAEQAEAFACAGQACAGAAAGQAAAHgCAGQgCAGgEAFQgEAEgFADQgHADgHgBQgHABgFgDgAgHgWQgEACgCADQgDADgCAEQgBAFAAAFQAAAGABAFQACAEADADQACADAEABQAEACADAAIAIgCQAEgBACgDQADgDABgEQACgFAAgGQAAgFgCgFQgBgEgDgDQgCgDgEgCIgIgBQgDAAgEABg");
	this.shape_9.setTransform(-63.85,-56.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AAiAhIAAgpIAAgGIgCgEIgEgDIgGgBQgIAAgEAEQgFAEAAAIIAAAnIgJAAIAAgpIgBgGIgCgEIgDgDIgGgBQgFAAgDABIgFAFIgDAFIgBAFIAAAnIgLAAIAAg/IAKAAIAAAJQAIgLANAAQAGAAAFADQAEACACAGQADgFAFgDQAFgDAHAAIAIABQAEABADADQADACABADQACAEAAAFIAAAug");
	this.shape_10.setTransform(-72.475,-56.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AAQAfQgCgCgBgGQgDAGgHACQgEADgHgBIgIgBIgHgCIgEgGQgCgEAAgFQAAgFACgEQABgDADgCIAIgDIAIgBIAHgBIAGgBIAFgDQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIgBgFIgDgEIgFgBIgEAAQgHAAgEACQgEADgBAHIgKAAQAAgGACgEQACgEAEgDQADgDAGAAIAJgBIAIAAQAEAAAEACQADACACAEQACADAAAGIAAAgIABAFQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIADgBIAAAJQgDACgFgBQgEABgCgDgAAIABIgHABIgGABIgHACQgDABgBACQgCADAAADIABAFIADADIAEABIAEABQAFAAADgCIAHgDIADgFIABgEIAAgKIgFABg");
	this.shape_11.setTransform(-80.8,-56.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_amountOfInk, new cjs.Rectangle(-84.6,-65.2,78,15.200000000000003), null);


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
	this.instance.setTransform(95.2,-463.25,0.2202,0.2202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(95.2,-463.2,61.89999999999999,48.599999999999966), null);


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
	this.instance.setTransform(34.35,-195.9,0.3082,0.3082);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_1, new cjs.Rectangle(34.4,-195.9,98.6,80.80000000000001), null);


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
	this.instance.setTransform(14.7,-165.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_04, new cjs.Rectangle(14.7,-165.2,118.99999999999999,49.999999999999986), null);


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
	this.instance.setTransform(76.9,-124.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_02_1, new cjs.Rectangle(76.9,-124.9,93,50), null);


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
	this.instance.setTransform(39.75,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_01_1, new cjs.Rectangle(39.8,-124.5,130,50), null);


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
	this.shape.graphics.f("#2A3283").s().p("AAlAiQgHgCgEgGQgFgEgCgHQgCgHAAgIQAAgHACgHQACgHAFgFQAEgGAHgCQAHgDAIAAQAIAAAHADQAHACAEAGQAFAFADAHQABAHAAAHQAAAIgBAHQgDAHgFAEQgEAGgHACQgHAEgIAAQgIAAgHgEgAArgVQgEACgDADIgDAIIgBAIIABAJIADAIIAHAGQAEABAFAAQAFAAAEgBIAGgGIADgIIABgJIgBgIIgDgIQgCgDgEgCQgEgDgFAAQgFAAgEADgAgeAkIgKgEQgEgDgDgFQgCgFAAgHIAPAAQAAAEACACIAEAFIAFACIAFAAIAFAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgCgCIgFgEIgXgGIgHgDIgFgGQgCgEAAgEQAAgGADgEQACgEAEgCQAEgEAFgBIAKgBIAKABQAGABADAEQAEACACAEQACAFAAAHIgOAAQAAgEgBgDIgDgCIgFgDIgJAAIgDACQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgBADIABAEIADACIAXAHIAGADQAEABACAFQADADAAAHQAAAFgCAEQgCAEgDADQgEADgFACQgGACgHAAIgMgCgACLAkIgegvIAAAvIgPAAIAAhHIAQAAIAeAvIAAgvIAPAAIAABHgAh0AkIAAhHIAhAAQAHAAAFABQAEADAEADIAEAHQACAEAAAFQAAAEgCAFQgCADgCADIgIAFQgFACgHAAIgQAAIAAAagAhjgBIARgBIAFgBIADgEIABgFIgBgGIgDgDIgFgBIgRgBgAi0AkIAAhHIA2AAIAAANIgmAAIAAAPIAjAAIAAAMIgjAAIAAASIAnAAIAAANgACtgVIgCAAIgDgBIgCgEIgBgDIABgCIACgEQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIACgBIADABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIACAEIAAACIAAADIgCAEIgDABIgDAAgACrgjIgCACIgBACIgBACIABADIABABIACADIACAAIADAAIACgDIABgBIAAgDIAAgCIgBgCIgCgCIgDAAIgCAAgACvgZIgCgDIgBAAIAAADIgCAAIAAgIIADAAIADABIABACIAAABIgBAAIAAABIgBAAIACADgACsgdIABAAIACAAIAAgBIAAgBIgDAAg");
	this.shape.setTransform(-23.425,-11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-41.5,-14.8,36.2,7.6000000000000005), null);


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
	this.instance.setTransform(-35.55,-61.25,0.248,0.248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-35.5,-61.2,47.1,17.800000000000004), null);


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
	this.instance = new lib.cartridges_02();
	this.instance.setTransform(9.75,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cartridge_mc_02, new cjs.Rectangle(9.8,-175,161,50), null);


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
	this.instance.setTransform(9.65,-175.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cartridge_mc, new cjs.Rectangle(9.7,-175.2,161,49.999999999999986), null);


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
	this.instance.setTransform(107.3,-113.9,0.6309,0.6309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_03_1, new cjs.Rectangle(107.3,-113.9,57.39999999999999,44.80000000000001), null);


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
	this.instance.setTransform(1.5,-115.1,0.6229,0.6229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_02_1, new cjs.Rectangle(1.5,-115.1,57.3,44.3), null);


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
	this.instance.setTransform(-149.3,-41.5,0.5723,0.5723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card_01_1, new cjs.Rectangle(-149.3,-41.5,53.80000000000001,41.2), null);


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
	this.shape.graphics.f("#E61404").s().p("Al0CAQgXAAAAgYIAAjPQAAgYAXAAILoAAQAYAAAAAYIAADPQAAAYgYAAgADcAKQAAAOAHAGQAIAIAOgBQANABAJgIQAHgGAAgOIAAgqIgPAAIAAAqQAAAHgDAEQgDAEgIAAQgFAAgCgCQgDgBgBgCQgCgCAAgDIgBgvIgPAAgAChgfQgGADgFAFQgEAFgCAGQgCAHAAAHQAAAIACAGQACAGAEAFQAFAFAGADQAGACAIAAQAIAAAGgCQAGgDAFgFQAEgFACgGQADgGAAgIQAAgHgDgHQgCgGgEgFQgFgFgGgDQgGgDgIAAQgIAAgGADgAh9gfQgGADgEAFQgFAFgCAGQgDAHAAAHQAAAIADAGQACAGAFAFQAEAFAGADQAHACAIAAQAGAAAGgBQAFgCADgEQAFgEACgGQACgEABgGIgPAAQgBAGgDAEQgFAFgGAAQgGAAgDgCIgGgFIgDgIIgBgIIABgIIADgIQACgDAEgCQADgDAGAAIAFACIAEADIAEADIABAFIAPAAQgBgGgCgEQgCgFgFgDQgEgDgFgCQgFgCgFAAQgIAAgHADgAlMgfQgGADgFAFQgEAFgCAGQgDAHAAAHQAAAIADAGQACAGAEAFQAFAFAGADQAGACAIAAQAGAAAFgBQAGgCAEgEQAEgEACgGQADgEAAgGIgOAAQgBAGgEAEQgEAFgHAAQgFAAgDgCQgEgCgCgDQgDgEgBgEIgBgIIABgIQABgFADgDQACgDAEgCQADgDAFAAQADAAACACIAFADIAEADIABAFIAPAAQgBgGgDgEQgCgFgEgDQgEgDgGgCQgEgCgGAAQgIAAgGADgAEfgTIAVAAIAAA3IAOAAIAAg3IAVAAIAAgNIg4AAgAA0gTIAUAAIAAA3IAPAAIAAg3IAVAAIAAgNIg4AAgAAcAkIAPAAIAAhEIgPAAgAgGAkIgdgpIAbgbIgTAAIgbAcIAAgcIgPAAIAABEIAPAAIAAgWIAJgJIAUAfIATAAgAjMAkIA0AAIAAgNIgmAAIAAgQIAhAAIAAgMIghAAIAAgOIAlAAIAAgNIgzAAgAjpAHIAAAdIAOAAIAAhEIgOAAIAAAaIgcAAIAAgaIgPAAIAABEIAPAAIAAgdgACmAXIgFgFIgDgIIgBgIIABgIIADgIIAFgFQAEgDAFAAQAFAAAEADQADACACADQADADABAFIABAIIgBAIQgBAEgDAEIgFAFQgEACgFAAQgFAAgEgCg");
	this.shape.setTransform(362.025,-408.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlRBLIAAiVIKjAAIAACVg");
	this.shape_1.setTransform(361.6642,-408.6278,1.0991,1.255);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-88.9,-421.5,490.6,438.2), null);


// stage content:
(lib.Epson_EcoTank_Holiday_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).wait(354));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(107.2,225.8,0.4863,0.4863,0,0,0,1.1,1.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// ecoTank_Logo
	this.instance_2 = new lib.ecoTank_Logo();
	this.instance_2.setTransform(23.2,26.6,0.9375,0.9375,0,0,0,-14.2,-53.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// txt_justFill
	this.instance_3 = new lib.txt_justFill();
	this.instance_3.setTransform(113.55,61.55);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// printer_mc
	this.instance_4 = new lib.printer_mc();
	this.instance_4.setTransform(81.05,504.65,1.0828,1.0828,0,0,0,0.4,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319).to({_off:false},0).to({alpha:1},5).wait(36));

	// txt_AndPhotos
	this.instance_5 = new lib.txt_AndPhotos();
	this.instance_5.setTransform(156.95,217.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(276).to({_off:false},0).to({y:228.8,alpha:1},6,cjs.Ease.quadOut).wait(31).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_03
	this.instance_6 = new lib.card_03_1();
	this.instance_6.setTransform(152.4,127.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(276).to({_off:false},0).to({y:117.3,alpha:1},6,cjs.Ease.quadOut).wait(31).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_invitations
	this.instance_7 = new lib.txt_invitations();
	this.instance_7.setTransform(151.65,216.85);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(270).to({_off:false},0).to({y:228.85,alpha:1},6,cjs.Ease.quadOut).wait(37).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_02_jpg
	this.instance_8 = new lib.card_02_1();
	this.instance_8.setTransform(151.85,129.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(270).to({_off:false},0).to({y:118.2,alpha:1},6,cjs.Ease.quadOut).wait(37).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_holidayCards
	this.instance_9 = new lib.txt_holidayCards();
	this.instance_9.setTransform(148.1,216.35);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(264).to({_off:false},0).to({y:228.35,alpha:1},6,cjs.Ease.quadOut).wait(43).to({alpha:0},5).to({_off:true},1).wait(41));

	// card_01
	this.instance_10 = new lib.card_01_1();
	this.instance_10.setTransform(206.1,54.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(264).to({_off:false},0).to({y:45.8,alpha:1},6).wait(43).to({alpha:0},5).to({_off:true},1).wait(41));

	// txt_stressFree_02
	this.instance_11 = new lib.txt_stressFree_02();
	this.instance_11.setTransform(102.85,26.25);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(229).to({_off:false},0).to({x:112.85,alpha:1},7,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(92));

	// txt_cartridgeFree
	this.instance_12 = new lib.txt_cartridgeFree();
	this.instance_12.setTransform(128.5,61.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(232).to({_off:false},0).to({x:138.5,alpha:1},7,cjs.Ease.quadOut).wait(22).to({alpha:0},6).to({_off:true},1).wait(92));

	// frame_04
	this.instance_13 = new lib.frame_04();
	this.instance_13.setTransform(186.4,165.35);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(229).to({_off:false},0).to({alpha:1},7,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(92));

	// txt_comesWith
	this.instance_14 = new lib.txt_comesWith();
	this.instance_14.setTransform(149,45.35);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// txt_ridiculous
	this.instance_15 = new lib.txt_ridiculous();
	this.instance_15.setTransform(149.85,69.95);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// txt_amountOfInk
	this.instance_16 = new lib.txt_amountOfInk();
	this.instance_16.setTransform(151.3,94.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// inkBottles
	this.instance_17 = new lib.inkBottles_1();
	this.instance_17.setTransform(149.5,179.55);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(186).to({_off:false},0).to({alpha:1},6).wait(32).to({alpha:0},5).to({_off:true},1).wait(130));

	// Layer_30
	this.instance_18 = new lib.ecoTank_Logo();
	this.instance_18.setTransform(100.55,104,1.4922,1.4922);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// txt_printers
	this.instance_19 = new lib.txt_printers();
	this.instance_19.setTransform(144.3,85.15);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// printer_mc
	this.instance_20 = new lib.printer_mc();
	this.instance_20.setTransform(109.2,448.25,0.9552,0.9552,0,0,0,0.1,0.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(151).to({_off:false},0).to({alpha:1},6).wait(24).to({alpha:0},5).to({_off:true},1).wait(173));

	// txt_Printing
	this.instance_21 = new lib.txt_Printing();
	this.instance_21.setTransform(145,73.45);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(115).to({_off:false},0).to({x:150.5,alpha:1},10,cjs.Ease.quadOut).wait(20).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_outOf
	this.instance_22 = new lib.txt_outOf();
	this.instance_22.setTransform(143.1,40.7);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(110).to({_off:false},0).to({x:148.6,alpha:1},10,cjs.Ease.quadOut).wait(25).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_takingThe
	this.instance_23 = new lib.txt_takingThe();
	this.instance_23.setTransform(139.85,41.05);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(71).to({_off:false},0).to({x:148.35,alpha:1},7,cjs.Ease.quadOut).wait(24).to({x:153.85,alpha:0},6,cjs.Ease.quadOut).to({_off:true},3).wait(249));

	// txt_cartridges
	this.instance_24 = new lib.txt_cartridges();
	this.instance_24.setTransform(140,73.55);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(74).to({_off:false},0).to({x:148.5,alpha:1},7,cjs.Ease.quadOut).wait(23).to({x:154,alpha:0},6,cjs.Ease.quadOut).to({_off:true},1).wait(249));

	// cartridge_mc
	this.instance_25 = new lib.cartridge_mc();
	this.instance_25.setTransform(149.75,175.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(71).to({_off:false},0).to({alpha:1},9).wait(22).to({alpha:0},6).to({_off:true},3).wait(249));

	// cartridge_mc
	this.instance_26 = new lib.cartridge_mc_02();
	this.instance_26.setTransform(149.75,175.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(80).to({_off:false},0).wait(65).to({alpha:0},6).to({_off:true},1).wait(208));

	// txt_outOfThe
	this.instance_27 = new lib.txt_outOfThe();
	this.instance_27.setTransform(66.75,70.75);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(34).to({_off:false},0).to({x:76.75,alpha:1},7,cjs.Ease.quadOut).wait(24).to({alpha:0},6).to({_off:true},1).wait(288));

	// txt_Holidays
	this.instance_28 = new lib.txt_Holidays();
	this.instance_28.setTransform(75.1,101.75);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(38).to({_off:false},0).to({x:79.1,alpha:1},8,cjs.Ease.quadOut).wait(19).to({alpha:0},6).to({_off:true},1).wait(288));

	// frame_02
	this.instance_29 = new lib.frame_02_1();
	this.instance_29.setTransform(149.7,124.8);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(34).to({_off:false},0).to({alpha:1},7,cjs.Ease.quadOut).wait(24).to({alpha:0},6).to({_off:true},1).wait(288));

	// txt_takeThe
	this.instance_30 = new lib.txt_takeThe();
	this.instance_30.setTransform(59.15,72.35);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({x:74.15,alpha:1},6,cjs.Ease.quadOut).wait(22).to({alpha:0},5,cjs.Ease.quadOut).to({_off:true},1).wait(326));

	// txt_stress
	this.instance_31 = new lib.txt_stress();
	this.instance_31.setTransform(72.1,103.1);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4).to({_off:false},0).to({x:77.1,alpha:1},5,cjs.Ease.quadOut).wait(19).to({alpha:0},5,cjs.Ease.quadOut).to({_off:true},1).wait(326));

	// frame_01
	this.instance_32 = new lib.frame_01_1();
	this.instance_32.setTransform(150.2,124.8);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({alpha:1},5).wait(23).to({alpha:0},5).to({_off:true},1).wait(326));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,8.6,162,55.800000000000004);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"card_01.jpg", id:"card_01"},
		{src:"card_02.jpg", id:"card_02"},
		{src:"card_03.jpg", id:"card_03"},
		{src:"cartridges.jpg", id:"cartridges"},
		{src:"cartridges_02.jpg", id:"cartridges_02"},
		{src:"ecoTank.png", id:"ecoTank"},
		{src:"frame_01.jpg", id:"frame_01"},
		{src:"frame_02.jpg", id:"frame_02"},
		{src:"frame_03.jpg", id:"frame_03"},
		{src:"inkBottles.jpg", id:"inkBottles"},
		{src:"printer.jpg", id:"printer"}
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