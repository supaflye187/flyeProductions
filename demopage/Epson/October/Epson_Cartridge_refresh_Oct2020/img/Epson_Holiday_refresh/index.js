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



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,639);


(lib.blue_printer = function() {
	this.initialize(img.blue_printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,573);


(lib.cartridges = function() {
	this.initialize(img.cartridges);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,398);


(lib.cartridges_cassettes = function() {
	this.initialize(img.cartridges_cassettes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,409);


(lib.logos = function() {
	this.initialize(img.logos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,56);


(lib.pink_printer = function() {
	this.initialize(img.pink_printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,573);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,288);


(lib.shaq_01 = function() {
	this.initialize(img.shaq_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,639);


(lib.shaq_03 = function() {
	this.initialize(img.shaq_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,553);


(lib.starLight = function() {
	this.initialize(img.starLight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.yellow_printer = function() {
	this.initialize(img.yellow_printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,573);// helper functions:

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


(lib.yellow_cassette = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AKsJ4IilAKI1PAFIjEAFIgkgEQgogHgSgTQgTgTgcg8IgXg4IAAiCQAAgTAZgyIAYguIAZh4IgHgcIBXlbIAegeIAmi7IAZgSIAbhzIA6AIIAeAMIA+gFIAIgbIHcAFIAIANQALANAQABQARACAKgMQAHgKAAgMQABgIClAJICjALQAfgRgIgKQgGgIAVgEQAXgEAMALIBBAKIA0gcIAigLQAmgHAaAVIASATQAVASALAAQARAAAXgPIBVgKIADAmIA1gFQA3gCAJAJQAPAPgDAUIAXANIBBDAIgCANIAvAAIAhCTIgEAaQAAAZALACQARACASAeIBXg0IANAbIgHB2IgSAaQAFAcAKgIQAHgFAKAVQAKAVAAAQQAAAUgCAjIAjAtIAJAOQAHAQgBAKQgBAHgIACQgGABACAKIAKAhQAGAUAHgDQAHgDAOABIAOACIgHBDIAIAgQAJAhAKADQAPAFAwAWIgaA4IgjAlIgbArQgIABgLgCQgTgDgHgOQgGgOgSggIgQgdIhBBzIgEAbQgHAagOAAIhkAFg");
	mask.setTransform(5.65,135.3859);

	// Layer_1
	this.instance = new lib.cartridges_cassettes();
	this.instance.setTransform(-129.5,-204.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_cassette, new cjs.Rectangle(-114.5,68.7,240.3,133.39999999999998), null);


(lib.starLight_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.starLight();
	this.instance.setTransform(-19,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starLight_1, new cjs.Rectangle(-19,-19,38,38), null);


(lib.red_cassette = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ay/GlQgFgNgCgUQgEgoALgdIAyjfIDXqpIQIgDIARgJQATgLALgFQAFgCARgOQAMgKALABQAUADAyAMIAegHICCgIIBVAZIBDgDQBJADAmAhIBfAAICCHMQAtCDAAAcIAGAHQAJAJAJADQAdAIAbgyIAMgIQAOgHAGAIQAKAMAFBiIB2B1IACAEQABAJgDAZQgFAmABAkQACAuAMAKIAQAOQAQAPAAAIQAAANgHA8QgXAygPAKIgyAjIgZgWIgZhdQgCgJgGgHQgLgNgVALQgUALgHAPIgDAMIgMBJIgIARIgCAhQoDgCoKgBQwUgBgkAGg");
	mask.setTransform(5.3847,-0.1094);

	// Layer_1
	this.instance = new lib.cartridges_cassettes();
	this.instance.setTransform(-129.5,-204.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red_cassette, new cjs.Rectangle(-117,-64,244.8,127.8), null);


(lib.blue_cassette = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AvRKKIggi0IgFhBQgWAIgSAPQgMAKgGAPQgFAMgCAUIgSBkIgUATQgaAPgigTIg0h9IgBgZQAGgdAcgQQAJgMAIgPQAQgegBgNIgHg2QgBgqAXgLIACg1IANgyIBGAAIAjg3IABgsQACgtAKgFQAEAKAFALQANATANACIAUgjQAZgjAWAIIA3k2IAeAAIAjjXQADgDAGgDQALgEAMAFQAEgIAQgHQAggNBAADIAIg8IAxACIALAUIBNAAIAYgSQAggTAnAAQANgCATAEQApAJAlAfQARADATACQAkADAIgIIAPgPIAeADQgBAPADAQQAGAgAWACIG1AAIAJAFQAMAHALADIGcAHIAQAZIBpADQAAAJACAKQADAUAJAGIA1AMICTHUIAHAEQAKAGALAEIAoBxIgGARQgDAUAEANIBdEWIhiC7QAAAFgGAFQgLAKgcAAI9QAMIhPAGIgDAAQhSAAgdgag");
	mask.setTransform(-5,-135.7553);

	// Layer_1
	this.instance = new lib.cartridges_cassettes();
	this.instance.setTransform(-129.5,-204.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_cassette, new cjs.Rectangle(-128,-203.3,246.1,135.20000000000002), null);


(lib.yellow_printer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.yellow_printer();
	this.instance.setTransform(-223.5,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_printer_1, new cjs.Rectangle(-223.5,-283,449,573), null);


(lib.txt_rediculous = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#252C78").s().p("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");
	this.shape.setTransform(0.275,0.2265);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rediculous, new cjs.Rectangle(-246.9,-43.7,494.4,87.9), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A357E").s().p("AJJCxQgVgFgPgOQgPgPgJgaQgHgaAAgrQAAgvAJgcQAJgcAQgPQAQgPAWgFQAVgFAZAAQAdAAATAIQAUAIAMAOQALAPAEAVQAFAUAAAYIhPAAIgBgaIgFgQQgFgLgPAAQgHAAgFADQgFAFgDAJIgEAZIAABQIAEAZQADAKAFAEQAFADAHAAQANAAAGgKQAHgIAAgaIAAgRIBPAAQAAAfgFAWQgGAXgMAOQgZAag5AAQgZABgVgFgACVCwQgTgGgPgMQgPgMgJgTQgIgSAAgYQAAggAQgaQAQgaAigRQgNgSgLgVQgKgUAAgUQAAgTAIgOQAGgQAOgKQANgLARgGQATgGAXAAQAXAAARAGQATAGANALQANAKAHAQQAHAOAAATQAAAZgQAXQgPAXgeASIAoA0QAGgIADgLIADgVIBMAAQgBAdgKAbQgJAcgVAVIAvBBIhhAAIgPgUIgnATIgVAEIgZACQgVABgUgGgACtA5QgFAKAAAIQAAAIADAHQADAIAGAFIAMAJQAGACAIAAQAIAAAJgDIANgIIgug/QgLAHgGAKgADEh3QgHAHAAALQAAAHAFAKIASAaQAQgPAGgKQAHgLAAgHQAAgLgHgHQgIgHgLAAQgLAAgIAHgAwcCfQgYgWAAgrIBNAAIACAOIAFAMQAHAJAMAAQAKAAAIgGQAHgGAAgLQAAgMgJgGQgKgGgOgFIgegKQgSgGgOgJQgNgKgKgPQgKgPAAgYQABgRAFgQQAHgOANgMQANgLAUgHQAUgGAaAAQBkAAAABUIhMAAQgBgSgGgGQgGgGgLAAQgKAAgGAFQgHAGABAKQgBALAKAGQAKAEAOAFIAfAJQAQAFAOAJQAPAJAJAPQAKAPAAAaQAAAUgIAQQgHAQgNAMQgOALgUAHQgUAFgZAAQg3ABgZgXgAz/CyQgNgCgJgIQgJgIgFgOQgGgOAAgVIAAjHIBYAAIAACuQAAARAGAHQAEAHAMAAQAMAAAEgHQAGgHAAgRIAAiuIBYAAIAAEIIhWAAIAAghIgBAAQgQAmgwAAQgPAAgMgDgA4NCZQgYgcgBg3IAAgIIBTAAIAAARQAAAaAGAIQAHAIAKAAQALAAAGgIQAHgIAAgaIAAj8IBbAAIAADwQAAA/gdAaQgdAZg4AAQg5AAgZgcgAV2CwIAAhhIBTAAIAABhgAT1CwIAAldIBYAAIAAFdgAR3CwIAAldIBYAAIAAFdgAP4CwIAAkIIBZAAIAAEIgAN8CwIAAivQAAgPgFgIQgFgHgLAAQgMAAgFAHQgFAIAAAPIAACvIhYAAIAAldIBYAAIAABzIAAAAQAMgWARgIQARgHAQAAQAOAAAMADQAMAEALAIQAJAJAFAOQAGAOAAAUIAADHgAiYCwIAAldIBZAAIAAFdgAkWCwIAAldIBZAAIAAFdgAmUCwIAAkIIBZAAIAAEIgAoiCwIAAjNIgeAAIAAg7IAeAAIAAgTQAAgVAEgNQAFgOAJgIQAJgJAQgEQAQgDAWgBIArADIAAA4IgPgCQgIAAgGAEQgHAFAAAKIAAAQIAkAAIAAA7IgkAAIAADNgAsSCwQgOgCgKgHQgJgHgEgNQgEgOAAgVIAAiNIgdAAIAAg7IAdAAIAAhOIBYAAIAABOIAjAAIAAA7IgjAAIAAB9QAAAMAFAFQAFAEALAAIAOAAIAAA7gAYShiIAAg5IgBAAIgTA5IgUAAIgTg5IgBAAIAAA5IgUAAIAAhTIAhAAIARAzIARgzIAhAAIAABTgAWFhiIAAhAIgWAAIAAgTIBDAAIAAATIgWAAIAABAgAP4hrIAAhCIBZAAIAABCgAmUhrIAAhCIBZAAIAABCg");
	this.shape.setTransform(3.65,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_justFill, new cjs.Rectangle(-153.8,-17.4,314.9,36.3), null);


(lib.txt_getEcoTank = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#252C78").s().p("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");
	this.shape.setTransform(1.075,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_getEcoTank, new cjs.Rectangle(-84.4,-39.6,171,79.2), null);


(lib.txt_ECT_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A357E").s().p("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");
	this.shape.setTransform(0.45,3.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ECT_Logo, new cjs.Rectangle(-166,-11.9,333,30.4), null);


(lib.shaq_03_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EARRAqkI+7AAIhLjwQgGgSgWgoIgWglQgZgPgXgdQgug7AJhIQAFhZAHgbQAIgnA3g3QgGgOgGgTQgNgnAAgcQAAgKgMglQgNgpgEgcQgNhlBNhTQAdgcAggnQBAhMAPgvQAQgvBMhjIBJhZQAHgPAEgUQAJgpgKgZQgJgVgEgOQgIgYAFgYQAOhCBwhQQAOgNANgUQAagqgDgoQgIggAKg4QAUhwBdhzQAbgeAWgoQAthOgTgvQgWgegUgyQgmhjAPhkIgyhHQg2hSgQg1IhpiRIhfhXIgrg+IgHgCQgIgDgGgHQgUgXALg6IjmkMIgWgvQgag8gShGQg5jeAujkQBMmCD7jAQBkhDCegvQE+heEoBlQBDAQBhBHQDBCPCSEQIAdghQAighAWAGQATAHAYAOQAyAeAdAnIA/BiQA+BVAPAbIBEB2QAPAYAQAbQAeA2gBASQgCAQgFATIgGAOIAmA/UAAHA8RgAFAAAIAAAAgARR8SQgSgCgOgLQgdgWAJgmQADgOAQgOQAIgIAIgEQAPk5gNgFQgIgDgygnIgxgmQgWgcAHgpQAGgkAOgHQAIgFgOgRQgGgJgIgHQgmgggWgNQgPgIACg+QACgyAIgjQAFgUASgNQAJgHAIgCICRgKQAFACAZOOIgIABIgHAAg");
	mask.setTransform(19.5151,-38.3499);

	// Layer_1
	this.instance = new lib.shaq_03();
	this.instance.setTransform(-98,-320);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_03_1, new cjs.Rectangle(-92.5,-310.8,220.5,543.8), null);


(lib.shaq_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_01();
	this.instance.setTransform(-321,-317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_01_1, new cjs.Rectangle(-321,-317,639,639), null);


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
	this.instance.setTransform(-239,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-239,-196,449,288), null);


(lib.pink_printer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pink_printer();
	this.instance.setTransform(-223.5,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink_printer_1, new cjs.Rectangle(-223.5,-283,449,573), null);


(lib.logos_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logos();
	this.instance.setTransform(-181.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logos_1, new cjs.Rectangle(-181.5,-28,363,56), null);


(lib.ctaBtn_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1152BD").s().p("AvYFFQgoAAAAgoIAAo5QAAgoAoAAIexAAQAoAAAAAoIAAI5QAAAogoAAgAJEhSIAAB1QAAAgAWAWQAWAVAhAAQAiAAAWgVQAWgWAAggIAAh1QAAgGgFAAIgaAAQgGAAAAAGIAAB0QAAARgLALQgLAMgTAAQgSAAgLgMQgLgLAAgSIAAhzQAAgGgGAAIgaAAQgFAAAAAGgAF7g9QgdAeAAAoQAAAqAdAeQAdAdAqAAQAqAAAegdQAdgeAAgqQAAgogdgeQgegegqAAQgqAAgdAegAlHg9QgeAeAAAoQAAAqAeAeQAdAdAqAAQAoAAAcgbQAEgEgEgEIgRgSQgDgDgEADQgUAQgXAAQgaAAgTgTQgRgTAAgaQAAgaARgTQATgUAaAAQAYAAATARQAEAEADgEIARgSQAEgEgEgEQgdgagnAAQgqAAgdAegAttg9QgeAeAAAoQAAAqAeAeQAdAdAqAAQAoAAAcgbQAEgEgEgEIgRgSQgDgDgEADQgUAQgXAAQgaAAgTgTQgRgTAAgaQAAgaARgTQATgUAaAAQAYAAATARQAEAEADgEIARgSQAEgEgEgEQgdgagnAAQgqAAgdAegAL3hSIAAAWQAAAGAGAAIArAAIAACcQAAAFAFAAIAaAAQAFAAAAgFIAAicIArAAQAGAAAAgGIAAgWQAAgGgGAAIh6AAQgGAAAAAGgACMhSIAAAWQAAAGAFAAIArAAIAACcQAAAFAFAAIAbAAQAFAAAAgFIAAicIArAAQAFAAAAgGIAAgWQAAgGgFAAIh7AAQgFAAAAAGgABOhSIAAC4QAAAFAFAAIAaAAQAFAAAAgFIAAi4QAAgGgFAAIgaAAQgFAAAAAGgAgvBpQACACADAAIAfAAQAEAAABgDQACgEgCgDIhPhdIBJhSQADgDgBgDQgCgEgEAAIgcAAQgDAAgCADIhHBQIAAhMQAAgHgHAAIgYAAQgHAAAAAHIAAC2QAAAGAHAAIAYAAQAHAAAAgGIAAhWgAn1hSIAAC4QAAAFAFAAIByAAQAFAAAAgFIAAgXQAAgFgFAAIhTAAIAAgxIBFAAQAFAAAAgGIAAgWQAAgFgFAAIhFAAIAAguIBTAAQAFAAAAgGIAAgWQAAgGgFAAIhyAAQgFAAAAAGgApEAZIAABNQAAAFAFAAIAaAAQAFAAAAgFIAAi4QAAgGgFAAIgaAAQgFAAAAAGIAABKIhbAAIAAhKQAAgGgGAAIgaAAQgFAAAAAGIAAC4QAAAFAFAAIAaAAQAGAAAAgFIAAhNgAGVA3QgTgTAAgbQAAgZATgTQATgTAaAAQAbAAATATQASATAAAZQAAAbgSATQgTATgbAAQgaAAgTgTg");
	this.shape.setTransform(1.275,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJiBQQgXgWAAggIAAh1QAAgGAFAAIAbAAQAFAAAAAGIAABzQAAASAMALQALAMASAAQASAAALgMQAMgLAAgRIAAh0QAAgGAFAAIAbAAQAFAAAAAGIAAB1QAAAggWAWQgXAVghAAQghAAgWgVgAGCBIQgdgeAAgqQAAgoAdgeQAegeAqAAQAqAAAdAeQAdAeAAAoQAAAqgdAeQgdAdgqAAQgqAAgegdgAGcgsQgTATAAAZQAAAbATATQATATAbAAQAaAAATgTQATgTAAgbQAAgZgTgTQgTgTgaAAQgbAAgTATgAlABIQgdgeAAgqQAAgoAdgeQAegeAqAAQAmAAAdAaQAFAEgEAEIgRASQgEAEgDgEQgTgRgYAAQgbAAgSAUQgSATAAAaQAAAaASATQASATAbAAQAXAAAUgQQADgDAEADIARASQAEAEgEAEQgcAbgoAAQgqAAgegdgAtmBIQgdgeAAgqQAAgoAdgeQAegeAqAAQAmAAAdAaQAFAEgEAEIgRASQgEAEgDgEQgTgRgYAAQgbAAgSAUQgSATAAAaQAAAaASATQASATAbAAQAXAAAUgQQADgDAEADIARASQAEAEgEAEQgcAbgoAAQgqAAgegdgAM0BiQgFAAAAgFIAAicIgrAAQgFAAAAgGIAAgWQAAgGAFAAIB7AAQAFAAAAAGIAAAWQAAAGgFAAIgrAAIAACcQAAAFgFAAgADJBiQgFAAAAgFIAAicIgrAAQgGAAAAgGIAAgWQAAgGAGAAIB6AAQAGAAAAAGIAAAWQAAAGgGAAIgrAAIAACcQAAAFgFAAgABaBiQgFAAAAgFIAAi4QAAgGAFAAIAaAAQAGAAAAAGIAAC4QAAAFgGAAgAgiBiQgEAAgBgCIhJhaIAABWQAAAGgHAAIgZAAQgGAAAAgGIAAi2QAAgHAGAAIAZAAQAHAAAAAHIAABMIBGhQQACgDAEAAIAbAAQAFAAABAEQACADgDADIhJBTIBNBcQACADgBAEQgBADgEAAgAnpBiQgFAAAAgFIAAi4QAAgGAFAAIByAAQAGAAAAAGIAAAWQAAAGgGAAIhTAAIAAAuIBGAAQAFAAAAAFIAAAWQAAAGgFAAIhGAAIAAAxIBTAAQAGAAAAAFIAAAXQAAAFgGAAgAo3BiQgFAAAAgFIAAhNIhcAAIAABNQAAAFgFAAIgaAAQgFAAAAgFIAAi4QAAgGAFAAIAaAAQAFAAAAAGIAABKIBcAAIAAhKQAAgGAFAAIAaAAQAFAAAAAGIAAC4QAAAFgFAAg");
	this.shape_1.setTransform(0.525,0.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_mc, new cjs.Rectangle(-101.2,-32.5,205,65.1), null);


(lib.cartridges_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cartridges();
	this.instance.setTransform(-240,-203.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cartridges_mc, new cjs.Rectangle(-240,-203.5,474,398), null);


(lib.blue_printer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blue_printer();
	this.instance.setTransform(-223.5,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_printer_1, new cjs.Rectangle(-223.5,-283,449,573), null);


(lib.starlight_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// starLight
	this.instance = new lib.starLight_1();
	this.instance.setTransform(0,0,0.021,0.021);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:100.7715,x:-0.05},15).to({scaleX:0.0183,scaleY:0.0183,rotation:143.5691,x:0},22,cjs.Ease.cubicOut).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-22.2,44.4,44.4);


(lib.group_cassettes_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// red_cassette
	this.instance = new lib.red_cassette();
	this.instance.setTransform(-17.85,507.85,1,1,-6.7936,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.yellow_cassette();
	this.instance_1.setTransform(280.65,508.15,0.9999,0.9999,28.7529,0,0,4,136);

	this.instance_2 = new lib.blue_cassette();
	this.instance_2.setTransform(-296.3,520.25,0.9999,0.9999,-138.3082,0,0,0.5,-131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.group_cassettes_04, new cjs.Rectangle(-440.9,145.5,995.4,580.6), null);


(lib.group_cassettes_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// red_cassette
	this.instance = new lib.red_cassette();
	this.instance.setTransform(36.15,423.8,1,1,-6.7935,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.yellow_cassette();
	this.instance_1.setTransform(244.65,452.1,0.9999,0.9999,28.7529,0,0,4,136);

	this.instance_2 = new lib.red_cassette();
	this.instance_2.setTransform(-196.6,335.25,0.9999,0.9999,-150.1052);

	this.instance_3 = new lib.blue_cassette();
	this.instance_3.setTransform(196.6,294.4,0.9999,0.9999,-162.9841,0,0,0.4,-131.9);

	this.instance_4 = new lib.blue_cassette();
	this.instance_4.setTransform(-70.55,397.15,1,1,152.9798,0,0,0.4,-131.9);

	this.instance_5 = new lib.blue_cassette();
	this.instance_5.setTransform(-292.35,430.25,1,1,-173.5339,0,0,0.5,-131.9);

	this.instance_6 = new lib.yellow_cassette();
	this.instance_6.setTransform(71.4,435.95,0.9999,0.9999,116.5588,0,0,4,136.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.group_cassettes_03, new cjs.Rectangle(-428.7,-65,947.2,765.6), null);


(lib.group_cassettes_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.yellow_cassette();
	this.instance.setTransform(244.65,332.1,0.9999,0.9999,28.7529,0,0,4,136);

	this.instance_1 = new lib.red_cassette();
	this.instance_1.setTransform(-294.25,500.65,0.9999,0.9999,-158.5561);

	this.instance_2 = new lib.red_cassette();
	this.instance_2.setTransform(-298.65,275.25,1,1,-179.047);

	this.instance_3 = new lib.red_cassette();
	this.instance_3.setTransform(216.05,146.4,1,1,24.4454);

	this.instance_4 = new lib.blue_cassette();
	this.instance_4.setTransform(-87.6,468.5,0.9999,0.9999,135.5422,0,0,0.5,-131.9);

	this.instance_5 = new lib.blue_cassette();
	this.instance_5.setTransform(-94.55,267.15,1,1,152.9798,0,0,0.4,-131.9);

	this.instance_6 = new lib.blue_cassette();
	this.instance_6.setTransform(-292.35,310.25,1,1,-173.5339,0,0,0.5,-131.9);

	this.instance_7 = new lib.blue_cassette();
	this.instance_7.setTransform(47.65,58.55,1,1,-3.5282,0,0,0.4,-131.9);

	this.instance_8 = new lib.blue_cassette();
	this.instance_8.setTransform(380.25,180.5,1,1,9.4676,0,0,0.5,-131.9);

	this.instance_9 = new lib.blue_cassette();
	this.instance_9.setTransform(98.2,204.5,1,1,-7.9694,0,0,0.5,-131.9);

	this.instance_10 = new lib.blue_cassette();
	this.instance_10.setTransform(324.25,452.6,1,1,9.4676,0,0,0.5,-131.9);

	this.instance_11 = new lib.red_cassette();
	this.instance_11.setTransform(53.3,406.6,1,1,143.512);

	this.instance_12 = new lib.red_cassette();
	this.instance_12.setTransform(48.25,221.2,1,1,143.512);

	this.instance_13 = new lib.red_cassette();
	this.instance_13.setTransform(-117.95,403.7,1,1,143.512,0,0,0.1,0.1);

	this.instance_14 = new lib.red_cassette();
	this.instance_14.setTransform(-177.7,148.45,1,1,123.0201);

	this.instance_15 = new lib.red_cassette();
	this.instance_15.setTransform(-214,83.55,1,1,156.508);

	this.instance_16 = new lib.yellow_cassette();
	this.instance_16.setTransform(-345.65,401.2,0.9999,0.9999,150.0472,0,0,4,136.1);

	this.instance_17 = new lib.yellow_cassette();
	this.instance_17.setTransform(-42.6,367.95,0.9999,0.9999,116.5588,0,0,4,136.2);

	this.instance_18 = new lib.yellow_cassette();
	this.instance_18.setTransform(-215.7,349.2,0.9999,0.9999,116.5588,0,0,4.1,136.1);

	this.instance_19 = new lib.yellow_cassette();
	this.instance_19.setTransform(331.35,35.7,1,1,-6.4609,0,0,4,136.1);

	this.instance_20 = new lib.yellow_cassette();
	this.instance_20.setTransform(2.2,258.5,1,1,-26.9529,0,0,4,136.1);

	this.instance_21 = new lib.yellow_cassette();
	this.instance_21.setTransform(-111.95,424.6,1,1,16.0333,0,0,4,136.1);

	this.instance_22 = new lib.yellow_cassette();
	this.instance_22.setTransform(202.2,400.55,1,1,-26.9529,0,0,4,136.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.group_cassettes_02, new cjs.Rectangle(-489.5,-316.8,1009,1122.4), null);


(lib.group_cassettes_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.yellow_cassette();
	this.instance.setTransform(244.65,332.1,0.9999,0.9999,28.7529,0,0,4,136);

	this.instance_1 = new lib.red_cassette();
	this.instance_1.setTransform(247.85,-384.15,1,1,44.9363);

	this.instance_2 = new lib.red_cassette();
	this.instance_2.setTransform(158.05,-163.7,1,1,24.4454);

	this.instance_3 = new lib.red_cassette();
	this.instance_3.setTransform(-294.25,500.65,0.9999,0.9999,-158.5561);

	this.instance_4 = new lib.red_cassette();
	this.instance_4.setTransform(-298.65,275.25,1,1,-179.047);

	this.instance_5 = new lib.red_cassette();
	this.instance_5.setTransform(305.85,-74.05,1,1,44.9363);

	this.instance_6 = new lib.red_cassette();
	this.instance_6.setTransform(216.05,146.4,1,1,24.4454);

	this.instance_7 = new lib.blue_cassette();
	this.instance_7.setTransform(-218.65,-354.4,1,1,165.9769,0,0,0.4,-131.9);

	this.instance_8 = new lib.blue_cassette();
	this.instance_8.setTransform(-389.45,-165.85,1,1,165.9769,0,0,0.4,-132);

	this.instance_9 = new lib.blue_cassette();
	this.instance_9.setTransform(382.2,-291.4,1,1,29.9593,0,0,0.5,-131.9);

	this.instance_10 = new lib.blue_cassette();
	this.instance_10.setTransform(29.55,-497.05,1,1,13.2552,0,0,0.5,-131.9);

	this.instance_11 = new lib.blue_cassette();
	this.instance_11.setTransform(-10.35,-251.55,1,1,-3.5282,0,0,0.4,-131.9);

	this.instance_12 = new lib.blue_cassette();
	this.instance_12.setTransform(322.25,-129.6,1,1,9.4676,0,0,0.5,-131.9);

	this.instance_13 = new lib.blue_cassette();
	this.instance_13.setTransform(-438.7,460.15,1,1,-173.5339,0,0,0.5,-131.9);

	this.instance_14 = new lib.blue_cassette();
	this.instance_14.setTransform(-87.6,468.5,0.9999,0.9999,135.5422,0,0,0.5,-131.9);

	this.instance_15 = new lib.blue_cassette();
	this.instance_15.setTransform(-94.55,267.15,1,1,152.9798,0,0,0.4,-131.9);

	this.instance_16 = new lib.blue_cassette();
	this.instance_16.setTransform(-292.35,310.25,1,1,-173.5339,0,0,0.5,-131.9);

	this.instance_17 = new lib.blue_cassette();
	this.instance_17.setTransform(-448.2,287.85,1,1,165.9769,0,0,0.5,-131.9);

	this.instance_18 = new lib.blue_cassette();
	this.instance_18.setTransform(-160.65,-44.3,1,1,165.9769,0,0,0.4,-131.9);

	this.instance_19 = new lib.blue_cassette();
	this.instance_19.setTransform(-331.45,144.25,1,1,165.9769,0,0,0.4,-132);

	this.instance_20 = new lib.blue_cassette();
	this.instance_20.setTransform(440.2,18.7,1,1,29.9593,0,0,0.5,-131.9);

	this.instance_21 = new lib.blue_cassette();
	this.instance_21.setTransform(155.55,-70.95,1,1,13.2552,0,0,0.5,-131.9);

	this.instance_22 = new lib.blue_cassette();
	this.instance_22.setTransform(47.65,58.55,1,1,-3.5282,0,0,0.4,-131.9);

	this.instance_23 = new lib.blue_cassette();
	this.instance_23.setTransform(380.25,180.5,1,1,9.4676,0,0,0.5,-131.9);

	this.instance_24 = new lib.blue_cassette();
	this.instance_24.setTransform(98.2,204.5,1,1,-7.9694,0,0,0.5,-131.9);

	this.instance_25 = new lib.blue_cassette();
	this.instance_25.setTransform(324.25,452.6,1,1,9.4676,0,0,0.5,-131.9);

	this.instance_26 = new lib.red_cassette();
	this.instance_26.setTransform(-321.65,-423.7,0.9999,0.9999,21.9732,0,0,0.1,-0.1);

	this.instance_27 = new lib.red_cassette();
	this.instance_27.setTransform(-235.7,-161.65,1,1,123.0201);

	this.instance_28 = new lib.red_cassette();
	this.instance_28.setTransform(-69.15,-367.05,1,1,156.508);

	this.instance_29 = new lib.red_cassette();
	this.instance_29.setTransform(-272,-226.55,1,1,156.508);

	this.instance_30 = new lib.red_cassette();
	this.instance_30.setTransform(-119.75,-511.8,1,1,-12.9963,0,0,0.1,0.1);

	this.instance_31 = new lib.red_cassette();
	this.instance_31.setTransform(-159.65,-266.4,1,1,-12.9963);

	this.instance_32 = new lib.red_cassette();
	this.instance_32.setTransform(65.5,-367.5,1,1,-12.9963,0,0,0.1,0.1);

	this.instance_33 = new lib.red_cassette();
	this.instance_33.setTransform(-263.65,-113.6,0.9999,0.9999,21.9732,0,0,0.1,-0.1);

	this.instance_34 = new lib.red_cassette();
	this.instance_34.setTransform(53.3,406.6,1,1,143.512);

	this.instance_35 = new lib.red_cassette();
	this.instance_35.setTransform(48.25,221.2,1,1,143.512);

	this.instance_36 = new lib.red_cassette();
	this.instance_36.setTransform(-117.95,403.7,1,1,143.512,0,0,0.1,0.1);

	this.instance_37 = new lib.red_cassette();
	this.instance_37.setTransform(-177.7,148.45,1,1,123.0201);

	this.instance_38 = new lib.red_cassette();
	this.instance_38.setTransform(-11.15,-56.95,1,1,156.508);

	this.instance_39 = new lib.red_cassette();
	this.instance_39.setTransform(-214,83.55,1,1,156.508);

	this.instance_40 = new lib.red_cassette();
	this.instance_40.setTransform(6.25,-85.7,1,1,-12.9963,0,0,0.1,0.1);

	this.instance_41 = new lib.red_cassette();
	this.instance_41.setTransform(-101.65,43.7,1,1,-12.9963);

	this.instance_42 = new lib.red_cassette();
	this.instance_42.setTransform(123.5,-57.4,1,1,-12.9963,0,0,0.1,0.1);

	this.instance_43 = new lib.red_cassette();
	this.instance_43.setTransform(63.1,166.3,1,1,-33.4883);

	this.instance_44 = new lib.red_cassette();
	this.instance_44.setTransform(-158.05,322.5);

	this.instance_45 = new lib.red_cassette();
	this.instance_45.setTransform(84,274.5);

	this.instance_46 = new lib.yellow_cassette();
	this.instance_46.setTransform(-107.5,-143.55,0.9999,0.9999,159.544,0,0,4,136.1);

	this.instance_47 = new lib.yellow_cassette();
	this.instance_47.setTransform(-190.55,-244.4,0.9999,0.9999,129.5545,0,0,4,136);

	this.instance_48 = new lib.yellow_cassette();
	this.instance_48.setTransform(-186,-500.35,1,1,172.5421,0,0,3.9,136.1);

	this.instance_49 = new lib.yellow_cassette();
	this.instance_49.setTransform(-355.1,-301.7,0.9999,0.9999,129.5545,0,0,4,136.1);

	this.instance_50 = new lib.yellow_cassette();
	this.instance_50.setTransform(273.35,-274.4,1,1,-6.4609,0,0,4,136.1);

	this.instance_51 = new lib.yellow_cassette();
	this.instance_51.setTransform(-17.85,-364.7,0.9999,0.9999,-39.9486,0,0,4,136.2);

	this.instance_52 = new lib.yellow_cassette();
	this.instance_52.setTransform(-91.75,-177.2,1,1,3.0362,0,0,4,136.2);

	this.instance_53 = new lib.yellow_cassette();
	this.instance_53.setTransform(133.35,-278.5,0.9999,0.9999,-39.9486,0,0,4,136.1);

	this.instance_54 = new lib.yellow_cassette();
	this.instance_54.setTransform(-345.65,401.2,0.9999,0.9999,150.0472,0,0,4,136.1);

	this.instance_55 = new lib.yellow_cassette();
	this.instance_55.setTransform(-42.6,367.95,0.9999,0.9999,116.5588,0,0,4,136.2);

	this.instance_56 = new lib.yellow_cassette();
	this.instance_56.setTransform(-49.5,166.55,0.9999,0.9999,159.544,0,0,4,136.1);

	this.instance_57 = new lib.yellow_cassette();
	this.instance_57.setTransform(-215.7,349.2,0.9999,0.9999,116.5588,0,0,4.1,136.1);

	this.instance_58 = new lib.yellow_cassette();
	this.instance_58.setTransform(-132.55,65.7,0.9999,0.9999,129.5545,0,0,4,136);

	this.instance_59 = new lib.yellow_cassette();
	this.instance_59.setTransform(-60,-74.25,1,1,172.5421,0,0,3.9,136.1);

	this.instance_60 = new lib.yellow_cassette();
	this.instance_60.setTransform(-297.1,8.4,0.9999,0.9999,129.5545,0,0,4,136.1);

	this.instance_61 = new lib.yellow_cassette();
	this.instance_61.setTransform(331.35,35.7,1,1,-6.4609,0,0,4,136.1);

	this.instance_62 = new lib.yellow_cassette();
	this.instance_62.setTransform(40.15,-54.6,0.9999,0.9999,-39.9486,0,0,4,136.2);

	this.instance_63 = new lib.yellow_cassette();
	this.instance_63.setTransform(-33.75,132.9,1,1,3.0362,0,0,4,136.2);

	this.instance_64 = new lib.yellow_cassette();
	this.instance_64.setTransform(191.35,31.6,0.9999,0.9999,-39.9486,0,0,4,136.1);

	this.instance_65 = new lib.yellow_cassette();
	this.instance_65.setTransform(284.25,234.5,1,1,-26.9529,0,0,4,136.1);

	this.instance_66 = new lib.yellow_cassette();
	this.instance_66.setTransform(2.2,258.5,1,1,-26.9529,0,0,4,136.1);

	this.instance_67 = new lib.yellow_cassette();
	this.instance_67.setTransform(-111.95,424.6,1,1,16.0333,0,0,4,136.1);

	this.instance_68 = new lib.yellow_cassette();
	this.instance_68.setTransform(202.2,400.55,1,1,-26.9529,0,0,4,136.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.group_cassettes_01, new cjs.Rectangle(-654.8,-740.2,1243,1545.8000000000002), null);


// stage content:
(lib.Epson_cartridge_Holiday_refresh_640x640 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Egx/gx/MBj/AAAMAAABj/Mhj/AAAg");
	this.shape.setTransform(320,320);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(321));

	// starLight
	this.instance = new lib.starlight_animation("synched",0);
	this.instance.setTransform(448,23.55,1,1,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({_off:true},233).wait(3));

	// starLight
	this.instance_1 = new lib.starlight_animation("synched",0);
	this.instance_1.setTransform(32,37.9,2.7778,2.7778,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({_off:true},306).wait(3));

	// starLight
	this.instance_2 = new lib.starlight_animation("synched",0);
	this.instance_2.setTransform(48.15,325.85,2.4999,2.4999,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({_off:true},270).wait(3));

	// starLight
	this.instance_3 = new lib.starlight_animation("synched",0);
	this.instance_3.setTransform(576.15,149.85,2.2999,2.3,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({_off:true},293).wait(3));

	// starLight
	this.instance_4 = new lib.starlight_animation("synched",0);
	this.instance_4.setTransform(189.75,533.85);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({_off:true},254).wait(3));

	// starLight
	this.instance_5 = new lib.starlight_animation("synched",0);
	this.instance_5.setTransform(81.9,230.15,0.999,0.999,0,0,0,-5.7,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({_off:true},287).wait(3));

	// starLight
	this.instance_6 = new lib.starlight_animation("synched",8);
	this.instance_6.setTransform(538,470.15,1.3767,1.3767,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(138).to({_off:false},0).to({_off:true},180).wait(3));

	// starLight
	this.instance_7 = new lib.starlight_animation("synched",0);
	this.instance_7.setTransform(128,576.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(116).to({_off:false},0).to({_off:true},202).wait(3));

	// logos
	this.instance_8 = new lib.logos_1();
	this.instance_8.setTransform(329,593.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({_off:false},0).to({alpha:1},12).wait(122).to({alpha:0},9).to({_off:true},1).wait(73));

	// group_cassettes_01
	this.instance_9 = new lib.group_cassettes_01();
	this.instance_9.setTransform(285.05,198.6,1,1,0,0,0,-33.4,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({alpha:0},12).to({_off:true},1).wait(298));

	// group_cassettes_02
	this.instance_10 = new lib.group_cassettes_02();
	this.instance_10.setTransform(285.05,198.6,1,1,0,0,0,-33.4,32.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(12).to({alpha:0},12).wait(287));

	// group_cassettes_03
	this.instance_11 = new lib.group_cassettes_03();
	this.instance_11.setTransform(285.05,198.6,1,1,0,0,0,-33.4,32.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).wait(12).to({alpha:0},13).wait(274));

	// group_cassettes_04
	this.instance_12 = new lib.group_cassettes_04();
	this.instance_12.setTransform(285.05,198.6,1,1,0,0,0,-33.4,32.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).wait(13).to({alpha:0},12).wait(262));

	// shaq_01
	this.instance_13 = new lib.shaq_01_1();
	this.instance_13.setTransform(321,319);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({alpha:0},10).to({_off:true},1).wait(216));

	// txt_getEcoTank
	this.instance_14 = new lib.txt_getEcoTank();
	this.instance_14.setTransform(536.7,266.75);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(111).to({_off:false},0).to({alpha:1},16).wait(50).to({alpha:0},11).wait(133));

	// yellow_printer
	this.instance_15 = new lib.yellow_printer_1();
	this.instance_15.setTransform(224.5,283);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(152).to({_off:false},0).to({alpha:1},10).wait(15).to({alpha:0},11,cjs.Ease.quadOut).wait(133));

	// pink_printer
	this.instance_16 = new lib.pink_printer_1();
	this.instance_16.setTransform(223.5,282);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(134).to({_off:false},0).to({alpha:1},9).to({_off:true},19).wait(159));

	// blue_printer
	this.instance_17 = new lib.blue_printer_1();
	this.instance_17.setTransform(223.5,283);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(104).to({_off:false},0).to({alpha:1},16).to({_off:true},23).wait(178));

	// cartridges_mc
	this.instance_18 = new lib.cartridges_mc();
	this.instance_18.setTransform(320,359.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(186).to({_off:false},0).to({alpha:1},11).wait(40).to({alpha:0},10).wait(74));

	// txt_rediculous
	this.instance_19 = new lib.txt_rediculous();
	this.instance_19.setTransform(314.2,91.85);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(186).to({_off:false},0).to({alpha:1},11).wait(40).to({alpha:0},10).wait(74));

	// ctaBtn_mc_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_285 = new cjs.Graphics().p("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IAAAAQgqAAgdgdgAGCAJQAAAbATATIAAAAQATATAaAAIAAAAQAbAAATgTIAAAAQASgTAAgbIAAAAQAAgZgSgTIAAAAQgTgTgbAAIAAAAQgaAAgTATIAAAAQgTATAAAZIAAAAIAAAAgAlHBRQgegeAAgqIAAAAQAAgoAegeIAAAAQAdgeAqAAIAAAAQAnAAAdAaIAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABIAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAAIgRASQgDAEgEgEIAAAAQgTgRgYAAIAAAAQgaAAgTAUIAAAAQgRATAAAaIAAAAQAAAaARATIAAAAQATATAaAAIAAAAQAXAAAUgQIAAAAQAEgDADADIAAAAIARASQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIAAAAQgcAbgoAAIAAAAQgqAAgdgdgAttBRQgegeAAgqIAAAAQAAgoAegeIAAAAQAdgeAqAAIAAAAQAnAAAdAaIAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABIAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAAIgRASQgDAEgEgEIAAAAQgTgRgYAAIAAAAQgaAAgTAUIAAAAQgRATAAAaIAAAAQAAAaARATIAAAAQATATAaAAIAAAAQAXAAAUgQIAAAAQAEgDADADIAAAAIARASQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIAAAAQgcAbgoAAIAAAAQgqAAgdgdgAMtBrQgFAAAAgFIAAAAIAAicIgrAAQgGAAAAgGIAAAAIAAgWQAAgGAGAAIAAAAIB6AAQAGAAAAAGIAAAAIAAAWQAAAGgGAAIAAAAIgrAAIAACcQAAAFgFAAIAAAAgADBBrQgFAAAAgFIAAAAIAAicIgrAAQgFAAAAgGIAAAAIAAgWQAAgGAFAAIAAAAIB7AAQAFAAAAAGIAAAAIAAAWQAAAGgFAAIAAAAIgrAAIAACcQAAAFgFAAIAAAAgABTBrQgFAAAAgFIAAAAIAAi4QAAgGAFAAIAAAAIAaAAQAFAAAAAGIAAAAIAAC4QAAAFgFAAIAAAAgAgqBrQgDAAgCgCIAAAAIhJhaIAABWQAAAGgHAAIAAAAIgYAAQgHAAAAgGIAAAAIAAi2QAAgHAHAAIAAAAIAYAAQAHAAAAAHIAAAAIAABMIBHhQQACgDADAAIAAAAIAcAAQAEAAACAEIAAAAIAAACIAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAAIhJBSIBPBdIABAEIAAAAIgBADIAAAAQgBADgEAAIAAAAgAnwBrQgFAAAAgFIAAAAIAAi4QAAgGAFAAIAAAAIByAAQAFAAAAAGIAAAAIAAAWQAAAGgFAAIAAAAIhTAAIAAAuIBFAAQAFAAAAAFIAAAAIAAAWQAAAGgFAAIAAAAIhFAAIAAAxIBTAAQAFAAAAAFIAAAAIAAAXQAAAFgFAAIAAAAgAo/BrQgFAAAAgFIAAAAIAAhNIhbAAIAABNQAAAFgGAAIAAAAIgaAAQgFAAAAgFIAAAAIAAi4QAAgGAFAAIAAAAIAaAAQAGAAAAAGIAAAAIAABKIBbAAIAAhKQAAgGAFAAIAAAAIAaAAQAFAAAAAGIAAAAIAAC4QAAAFgFAAIAAAAgAGVA3QgTgTAAgbIAAAAQAAgZATgTIAAAAQATgTAaAAIAAAAQAbAAATATIAAAAQASATAAAZIAAAAQAAAbgSATIAAAAQgTATgbAAIAAAAQgaAAgTgTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(285).to({graphics:mask_graphics_285,x:237.5752,y:560.1249}).wait(36));

	// shine_mc
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.4,-17.8,25.4,17.8).s().p("AtXKqISz64IH8FlIyza4g");
	this.shape_1.setTransform(88.1848,497.6794,1.4189,1.4189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-34.5,-24.2,34.6,24.1).s().p("AyKOfMAZjgkhIKyHjMgZjAkig");
	this.shape_2.setTransform(130.675,513.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-33.1,-23.3,33.2,23.1).s().p("AxcN6MAYigjEIKXHQMgYjAjGg");
	this.shape_3.setTransform(168.925,527.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-31.9,-22.4,32,22.3).s().p("AwzNaMAXoghzIJ/HAMgXpAhzg");
	this.shape_4.setTransform(203.125,539.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-30.9,-21.6,30.8,21.6).s().p("AwPM9MAW1ggpIJqGwMgW2Agpg");
	this.shape_5.setTransform(233.55,550.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-29.9,-21,29.9,20.8).s().p("AvuMjIWI/oIJVGiI2Hfpg");
	this.shape_6.setTransform(260.375,560.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-29.1,-20.3,29,20.3).s().p("AvSMNIVg+wIJFGXI1gewg");
	this.shape_7.setTransform(283.9,568.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-28.3,-19.8,28.4,19.8).s().p("Au5L5IU99+II2GNI09d+g");
	this.shape_8.setTransform(304.25,576.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-27.7,-19.4,27.7,19.4).s().p("AulLoIUg9TIIrGEI0gdTg");
	this.shape_9.setTransform(321.7,582.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-27.2,-19,27.2,19).s().p("AuSLaIUG8wIIfF9I0Hcwg");
	this.shape_10.setTransform(336.5,588.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-26.7,-18.7,26.8,18.7).s().p("AuELOITy8SIIXF3IzycSg");
	this.shape_11.setTransform(348.825,592.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-26.3,-18.5,26.4,18.4).s().p("At4LEITh75IIQFxIzhb6g");
	this.shape_12.setTransform(358.925,596.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-26,-18.3,26.1,18.2).s().p("AtuK9ITT7nIIKFuIzTbmg");
	this.shape_13.setTransform(367,599.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.8,-18.1,25.9,18.1).s().p("AtmK3ITI7XIIFFqIzIbXg");
	this.shape_14.setTransform(373.275,601.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.7,-18,25.7,18).s().p("AthKyITB7LIICFoIzBbLg");
	this.shape_15.setTransform(378,603.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.5,-17.9,25.6,17.9).s().p("AtcKvIS67DIH/FmIy7bDg");
	this.shape_16.setTransform(381.4,604.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.5,-17.8,25.5,17.8).s().p("AtaKtIS36+IH+FlIy3a+g");
	this.shape_17.setTransform(383.675,605.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.4,-17.8,25.5,17.8).s().p("AtYKrIS166IH8FkIy0a7g");
	this.shape_18.setTransform(385.025,605.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.4,-17.8,25.5,17.8).s().p("AtYKrIS065IH9FkIy0a5g");
	this.shape_19.setTransform(385.75,606.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-25.4,-17.8,25.4,17.8).s().p("AtXKrISz64IH8FjIyza4g");
	this.shape_20.setTransform(386,606.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},285).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:386}}]},1).to({state:[{t:this.shape_20,p:{x:386.05}}]},1).wait(16));

	// ctaBtn_mc
	this.instance_20 = new lib.ctaBtn_mc();
	this.instance_20.setTransform(236.3,560.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(274).to({_off:false},0).to({alpha:1},11).wait(36));

	// txt_justFill
	this.instance_21 = new lib.txt_justFill();
	this.instance_21.setTransform(234.05,125.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(262).to({_off:false},0).to({alpha:1},12).wait(47));

	// txt_ECT_Logo
	this.instance_22 = new lib.txt_ECT_Logo();
	this.instance_22.setTransform(234.2,487.95);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(262).to({_off:false},0).to({alpha:1},12).wait(47));

	// shaq_03
	this.instance_23 = new lib.shaq_03_1();
	this.instance_23.setTransform(734,407);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(253).to({_off:false},0).to({x:512},12,cjs.Ease.cubicOut).wait(56));

	// printer_mc
	this.instance_24 = new lib.printer_mc();
	this.instance_24.setTransform(240,365);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(247).to({_off:false},0).to({alpha:1},12).wait(62));

	// background
	this.instance_25 = new lib.background();
	this.instance_25.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(321));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-254.2,923.1,1225.8);
// library properties:
lib.properties = {
	id: '8C83D15983494028B23AACF81CB12FB8',
	width: 640,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background.jpg", id:"background"},
		{src:"blue_printer.jpg", id:"blue_printer"},
		{src:"cartridges.jpg", id:"cartridges"},
		{src:"cartridges_cassettes.jpg", id:"cartridges_cassettes"},
		{src:"logos.png", id:"logos"},
		{src:"pink_printer.jpg", id:"pink_printer"},
		{src:"printer.jpg", id:"printer"},
		{src:"shaq_01.jpg", id:"shaq_01"},
		{src:"shaq_03.jpg", id:"shaq_03"},
		{src:"starLight.png", id:"starLight"},
		{src:"yellow_printer.jpg", id:"yellow_printer"}
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
an.compositions['8C83D15983494028B23AACF81CB12FB8'] = {
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