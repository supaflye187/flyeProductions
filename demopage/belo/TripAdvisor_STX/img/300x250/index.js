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
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ElIgriBIgsCBIgPAAIg6igIAUAAIAuCFIAsiGIAOAAIAsCGIAuiFIASAAIg4CggAFrElIAAgZIAVAAIAAAZgAEHElIAAg/IhDhhIAWAAIA2BPIA2hPIAVAAIhCBgIAABAgACqElIgTgrIhXAAIgTArIgSAAIBIiiIARAAIBJCigACQDqIgkhRIglBRIBJAAgAj3ElIgTgrIhWAAIgTArIgTAAIBJiiIARAAIBJCigAkRDqIgkhRIgkBRIBIAAgAmvAgQgXgXAAghQAAgiAXgYQAXgZAkAAQAjAAAYAZQAWAXAAAjQAAAggWAYQgYAagkAAQgjAAgXgagAmhhHQgSASAAAdQAAAaASATQASAUAbAAQAbgBASgSQARgUAAgaQAAgcgRgTQgTgUgbAAQgbAAgRAUgAr5AfIALgNQAZAXAeAAQAQgBAKgHQAJgIAAgMQAAgMgIgFQgJgHgYgGQgdgGgMgJQgNgLAAgUQAAgTAPgMQAPgNAXAAQAfABAZATIgLAOQgVgSgZAAQgPABgKAHQgJAIAAALQAAAMAJAGQAJAIAaAFQAbAGAMAKQANALAAASQAAAUgQAMQgPANgYAAQglAAgcgagAIZA4IhEigIAUAAIA4CIIA6iIIATAAIhFCggAKGA2IAAieIBzAAIAAARIhhAAIAAA2IBXAAIAAAQIhXAAIAAA3IBiAAIAAAQgAGpA2IAAieIASAAIAACegAF5A2Igvg8IgtAAIAAA8IgSAAIAAieIBEAAQAbAAAQANQAPANAAAVQAAAUgMAMQgLALgUAEIAxBAgAEdgWIAxAAQASgBALgIQAMgKAAgPQAAgOgLgJQgLgJgTABIgxAAgABgA2IAAieIA4AAQAlAAAYAXQAYAWAAAjQAAAggYAYQgYAXglgBgAByAmIAmAAQAeAAASgSQASgSAAgaQAAgcgSgRQgTgSgdAAIgmAAgAg9A2IAAiNIg2AAIAAgRIB8AAIAAARIg0AAIAACNgAiXA2Igug8IguAAIAAA8IgSAAIAAieIBFAAQAaAAAQANQAQANAAAVQAAAUgNAMQgLALgUAEIAxBAgAjzgWIAxAAQATgBALgIQALgKAAgPQAAgOgKgJQgLgJgTABIgyAAgAn2A2IAAhHIhcAAIAABHIgSAAIAAieIASAAIAABHIBcAAIAAhHIASAAIAACegAiui5QgOgNAAgZIAAhEIAOAAIAABDQAAATAJALQAKAJAQABQARAAAJgKQAKgKAAgTIAAhEIANAAIAABDQAAAZgNAOQgNANgXAAQgWAAgNgNgAhKi/IAIgKQASARAWAAQAMAAAHgGQAHgGAAgIQAAgJgGgFQgHgFgRgEQgVgEgJgHQgKgJAAgOQAAgOALgIQALgKARABQAXgBARAOIgIALQgOgNgTAAQgLAAgHAGQgGAFAAAIQAAAJAGAFQAHAFASAEQAUAFAIAHQAJAIAAANQAAAQgLAIQgKAKgSgBQgaAAgVgSgAkajBIAJgIQAMAQAPABQALAAAGgIQAGgHAAgNIAAhPIANAAIAABOQAAAUgKAKQgKALgQgBQgXABgNgVgAEOiuIgOgfIhAAAIgOAfIgNAAIA1h2IANAAIA1B2gAD7jZIgbg7IgbA7IA2AAgAA+iuIAAhpIgnAAIAAgMIBcAAIAAAMIgnAAIAABpg");
	this.shape.setTransform(0.275,-135.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shortDrive, new cjs.Rectangle(-100.9,-170.7,201.8,70.29999999999998), null);


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
	this.shape.setTransform(-7.25,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_shopping, new cjs.Rectangle(-70.6,-62.7,141.3,125.4), null);


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
	this.shape.setTransform(-16.85,0.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highestStandard, new cjs.Rectangle(-124.9,-40.1,216.10000000000002,81.2), null);


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
	this.shape.setTransform(-14.475,-0.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_escape, new cjs.Rectangle(-67.9,-57.2,106.9,113.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("A8XEtIlFCQICVlCIlOh7IFNh/IiTlBIFCCRIB+lIICBFHIE9iNIiKE+IFCCAIlEB7ICLFCIlBiPIhzEsIAAACIgBAAIgKAbgA8EElIBeEAIAAkqgA6SIjIBhj8IhhgsgEggaAGKID8hwIgRgwIhIAAIAAgBgA4XEcIDwBsIibidIhCAAgA0MGGIhwkDIgvASIAABLIgGAAgEggoAF7ICmijIAAhEIgygSgA4qEUIAQgpIhsAAgA8LESIBZgnIhogBgA39DXIAnAAIgcgcgA87ifIgyATIgBESIA3AUIAWA8IEPABIAVg4IA+gYIABkTIg6gXIgUg0IkZgBgA9kDWIAtAAIgMgggA3lCrIAmAnIAAg1gA9uDEIAegdIgegMgA2rCAIAngPIgnhagA+rBvIApAQIABhqgA1xBqID8hgIkmgBgA++BoIArheIktgCgEgjCgALIExACIguhkgA2agKIEkABIj5hkgA+th0IAsBeIAAhvgA2qgWIAoheIgogQgA2qjeIAABFIAwATIBnjsgA+1iGIA0gUIAAg+IiniogA3bitIAdAMIAAgpgA9tiiIAYgJIgYgYgA9Hi5IAMgfIgqAAgA3ri5IAegeIgqAAgA4TkeIAUAzIBGAAICnilgA6FjrIBxAAIgRgrgA8ejsIBsABIhcgqgA95jsIBGAAIATgxIj2hugA8HknIBiAsIAAkrgA6Rj8IBkgsIhkj+gAjQFWQg1glAAhIIAAiaQAAgdgEgOQgEgPgKgIIBYAAQgKAJgEAOQgEAOAAAdIAACaQAAAxAeAdQAVAUAhAIQARAEAOgBIAfgDQAigIAVgUQAcgdAAgxIAAiaQAAgdgDgOQgEgOgLgJIBZAAQgLAIgDAPQgEAOAAAdIAACaQAABIg2AlQgsAghFAAQhFAAgtgggAqTFAQg/g2AAhNQAAhNA/g2QA+g2BYAAQBYAAA+A2QA/A2AABNQAABNg/A2Qg+A2hYAAQhYAAg+g2gApoBRQgtAtAAA/QAABAAtAsQAsAtA/AAQA/AAAsgtQAtgsAAhAQAAg/gtgtQgsgtg/AAQg/AAgsAtgAuzFyQgZgFghgNIAAg8QAcAaAYALQAaAMAeAAQAnAAAcgSQAbgRAFgZQAFgcghgVQgOgJg5gYQg5gXgWgSQgfgZAAgmQAAgpAngZQAngZBAAAQAvAAApALIAAAzQgngggyAAQglAAgXAPQgXAPAAAZQAAAWASAPQASAOA3AYQA9AaAYATQAfAZAAAiQAAAwgrAdQgrAdhEAAQgcAAgXgEgAdnFcQgYgThAhEIhNhPIBzh1IAQgUQAEgHAAgGQAAgKgNgJIBqAAIijCdIAOAOQBqBtAbAXQAdAYAwAZIg2ACQgrAAgbgTgAfqFsQALgIAFgPQADgNAAgdIAAhnQgRABgOAFQAOgRARgLIAAhfQAAgegEgOQgEgOgLgIIDyAAQAMAAAIgCIARAyQgagRhMAAQglAAghACIgbACIAABcQgiANgVARQAegRBVALQBcAMA3gUQgiAog+ADQgLABhkgJIAACHIAEABQAsAGA0AAQAoAAAcgGQAbgGAZgOIgZA5gAZnFsQANgIAEgOQAFgOAAgdIAAjcQAAgdgFgOQgEgPgNgIIBOAAIAAEeQAAAcAEAOQAFAPAMAIgAXtFsQALgGAAgLQAAgHgwhsIijAAQgwBhAAAPQAAANAMAHIhSAAQAPgJAKgNQAIgNAPggICNkcIAzAAICGEcQAOAfAKANQAKAOAPAJgAU2DGICCAAIg+iJgAN/FsQALgIAEgOQAEgPAAgcIAAjcQAAgdgEgOQgEgPgLgIIBeAAQgMAIgEAPQgDAOAAAdIAAD3IAbAEQAmADA0AAQAhAAAYgGQAZgGAcgPIgcA6gAL5FsQAMgIAEgPQADgOAAgcIAAhrIjzAAIAABrQAAAdAEAOQAEAOALAIIhfAAQALgIAEgOQAEgOAAgdIAAjcQAAgegEgNQgEgPgLgIIBfAAQgLAIgEAOQgEAPAAAdIAABPIDzAAIAAhPQAAgdgDgOQgEgPgMgIIBgAAQgMAJgEAOQgEAOAAAdIAADcQAAAcAEAOQAEAPAMAIgADkFsQALgIAEgPQAEgOAAgcIAAj5IhBgFQgZAAgQAEQgQADgQAJIAUgzQAQADAOAAIDmAAQAPAAAQgDIATAzQgQgJgQgDQgQgEgYAAIhBAFIAAD5QAAAcADAOQAEAPALAIgA6hC+QgUAAgRgFQgYgHgSgRQgNgLgLgSQgKgUgEgWIgBgOIAAgGIBMAoIABABIgBAHQgDAVAQANQAIAGAKADQANACALgDQANgEAJgMQAHgMgCgNIgBgHQgBgFgEgGIgKgLIgWgRQgMgIgSgJQgXgMgVgHIgJgDIgGAAIgEABQgDABABAEIACADIAAABIgCABQgFgCgEgEQgEgFAAgFQgBgFACgEIAAgBIgBAAQgFAAgEgEQgEgEABgFIAAgCIgCgCQgIgGgEgKQgEgJAAgIQAAgPAFgPIABgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIABACIACAJQABAEADAGQAGAOAMAHIAKAGIANAGIAHAEQAKAFADAKIABACIADACQAiANAdAQIAfATQAMAJAHAHQAHAIAEAIQAEAHABAKQACAQgGAPIgBACIABAAQASgNAFgWQADgSgHgPQgFgJgGgGQgJgJgMgJIgggTIgegPQgbgLgTgNQgOgIgPgMQgLgLgFgIQgKgNgDgPIgBgNQgBgPAHgQQANgfAdgQQAPgJATgEQAPgDAOAAIAEgBIASABQAWADASAHQAdAOARAaQAMASAFAYIADARIAAAIIgBACIgCAAIhKgpIAAgBIABgJQACgTgPgLQgHgGgLgDQgNgDgLAEQgOAEgIAMQgFAHgBALQAAAFACAJQABAHAEAEIALAMQAKAJAKAGQASAMAUAJIAjAPIAKAEIAHAAIADgBQAEgCgBgEIgBgCIgBgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIACABQAIADADAHQABAGAAAFIgBAFIACAAQAEAAADADQAEADAAAEIAAAFIABABQAIAGAFAKQADAIABAHQAAANgEAPIgBAFIgBABIgBAAIgBAAIAAgCQgCgMgEgIQgGgOgMgHIgVgKIgKgGQgIgFgEgJIgBgDIgDgBQgogQgdgRQgOgHgQgMQgIgGgIgJQgJgLgDgIQgCgFgBgKQAAgNAFgPIABgBIgBAAQgSAMgFAUQgDARAGAQQADAIAHAHQAEAGALAJQAOAKAPAIQASALAUAJQAaALASALIAcATQAMAKAHAIQAJANAFAOQADAKAAALQAAAPgHARQgOAdgcAQQgPAJgTAEQgPADgPAAIgIAAgAtNhqIinj1IAuAAIB7C4IB7i4IAqAAIikD1gAoxiQIAUgcQAxAgBRAAQBkAAAAgsQAAgSgRgHQgPgHgmgCIhLgDQgxgDgXgNQgZgPAAgfQAAgiAjgTQAigTA9AAQBWAAAzAcIgQAeQgXgNgXgGQgggIgrAAQhbAAAAAmQAAAQAPAHQAPAHAiABIBLAEQA0ACAXANQAdAPAAAiQAAAogpAUQgkASg/AAQhgAAg2gjgAgShxIAAjMIh8AAIAAgiIEeAAIAAAiIh8AAIAADMgAjghxIAAjuIAoAAIAADugAqDhxIAAjuIAnAAIAADug");
	this.shape.setTransform(0.025,-299.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STX_Logo, new cjs.Rectangle(-232.5,-362.8,465.1,126.30000000000001), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.server_img, new cjs.Rectangle(-448,-298.9,896.1,597.9), null);


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
	this.instance.setTransform(-94,-5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-94,-5,189,28.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("A95xKMA7zAAAMAAAAiVMg7zAAAg");
	this.shape.setTransform(715.375,227.925);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(1).to({x:676.325},0).wait(1).to({x:639.325},0).wait(1).to({x:604.475},0).wait(1).to({x:571.725},0).wait(1).to({x:541.075},0).wait(1).to({x:512.575},0).wait(1).to({x:486.175},0).wait(1).to({x:461.875},0).wait(1).to({x:439.725},0).wait(1).to({x:419.625},0).wait(1).to({x:401.675},0).wait(1).to({x:385.825},0).wait(1).to({x:372.125},0).wait(1).to({x:360.475},0).wait(1).to({x:350.975},0).wait(1).to({x:343.575},0).wait(1).to({x:338.325},0).wait(1).to({x:335.125},0).wait(1).to({x:334.075},0).wait(89).to({_off:true},1).wait(247));

	// Layer_3
	this.instance_1 = new lib.txt_highestStandard();
	this.instance_1.setTransform(737.35,220.45,1.5441,1.5441);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:365.2,alpha:1},19,cjs.Ease.quadOut).wait(79).to({_off:true},1).wait(247));

	// Layer_8
	this.instance_2 = new lib.server_img();
	this.instance_2.setTransform(256,280.95,0.9465,0.9465);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:0.1,scaleX:1.0758,scaleY:1.0758,x:221.6,y:290.45},112).to({_off:true},1).wait(247));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-39.3,1193.8,664.5999999999999);


// stage content:
(lib.STX_TripAdvisor_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("A3RzXMAujAAAMAAAAmvMgujAAAg");
	this.shape.setTransform(150.0071,125.009,1.0067,1.0081);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// ctaBtn
	this.instance = new lib.ctaBtn_1();
	this.instance.setTransform(150,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:227},14,cjs.Ease.quadOut).wait(346));

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
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_1.setTransform(153.25,303.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(263).to({_off:false},0).wait(97));

	// town_square
	this.instance_3 = new lib.townSquare();
	this.instance_3.setTransform(166.1,116.1,0.7026,0.7026);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({scaleX:0.7139,scaleY:0.7139,x:162.65,y:117.7,alpha:1},15).to({regX:0.1,regY:0.1,scaleX:0.7747,scaleY:0.7747,x:144.2,y:126.25},81).wait(1));

	// white_Box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("Aq8rpIV5AAIAAXTI15AAg");
	this.shape_2.setTransform(-69.825,94.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(182).to({_off:false},0).wait(1).to({x:-53.825},0).wait(1).to({x:-38.825},0).wait(1).to({x:-24.775},0).wait(1).to({x:-11.675},0).wait(1).to({x:0.425},0).wait(1).to({x:11.575},0).wait(1).to({x:21.725},0).wait(1).to({x:30.925},0).wait(1).to({x:39.175},0).wait(1).to({x:46.425},0).wait(1).to({x:52.725},0).wait(1).to({x:58.075},0).wait(1).to({x:62.425},0).wait(1).to({x:65.825},0).wait(1).to({x:68.225},0).wait(1).to({x:69.675},0).wait(1).to({x:70.175},0).wait(161));

	// txt_shopping
	this.instance_4 = new lib.txt_escape();
	this.instance_4.setTransform(-64.35,94.45,0.9043,0.9043);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({x:75.65,alpha:1},17,cjs.Ease.quadOut).wait(153));

	// bar
	this.instance_5 = new lib.bar_img_1("synched",0,false);
	this.instance_5.setTransform(155.7,7.85,0.7264,0.7264,0,0,0,0.2,0.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).to({regY:0.4,scaleX:0.7382,scaleY:0.7382,x:155.25,y:15.75,alpha:1},18).to({regY:0.3,scaleX:0.8085,scaleY:0.8085,x:152.7,y:61.9},107).wait(54));

	// server
	this.instance_6 = new lib.server_PX("synched",0);
	this.instance_6.setTransform(183,116.9,0.5782,0.5782,0,0,0,319.2,304.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).to({alpha:1,startPosition:9},9).to({_off:true},104).wait(160));

	// white_Box
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("ArQsCIWhAAIAAYFI2hAAg");
	this.shape_3.setTransform(-76.825,91.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({x:-59.825},0).wait(1).to({x:-43.825},0).wait(1).to({x:-28.875},0).wait(1).to({x:-14.975},0).wait(1).to({x:-2.075},0).wait(1).to({x:9.775},0).wait(1).to({x:20.625},0).wait(1).to({x:30.425},0).wait(1).to({x:39.175},0).wait(1).to({x:46.925},0).wait(1).to({x:53.625},0).wait(1).to({x:59.275},0).wait(1).to({x:63.925},0).wait(1).to({x:67.525},0).wait(1).to({x:70.125},0).wait(1).to({x:71.675},0).wait(1).to({x:72.175},0).wait(343));

	// txt_shopping
	this.instance_7 = new lib.txt_shopping();
	this.instance_7.setTransform(-75.35,91.45,0.8884,0.8884);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({x:73.65,alpha:1},17,cjs.Ease.quadOut).wait(335));

	// multiply_layer
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("EgZfAxSMAAAhikMAzAAAAMAAABikg");
	this.shape_4.setTransform(153.25,303.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(360));

	// shopping_woman
	this.instance_8 = new lib.ShoppingWoman_PX("synched",0,false);
	this.instance_8.setTransform(177.3,223.8,1.138,1.138,0,0,0,128.1,299.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:174.3,y:144.8,startPosition:97},97).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-172.7,584.5,791.7);
// library properties:
lib.properties = {
	id: 'A995C96434FB4299A346847C54808D17',
	width: 300,
	height: 250,
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