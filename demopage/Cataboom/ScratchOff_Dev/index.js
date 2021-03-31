(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1080,1080]]}
];


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



(lib.scratch_image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.scratchMasked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// image_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhUXBUYMAAAiovMCovAAAMAAACovg");
	mask.setTransform(0.0918,0.0918);

	// image
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AoYa0IAAs6IOnAAIAAM6gAn6KRIAAhYQAAjeAyiLQAziMBlhyQBjh0FdkhQC6iZAAh+QAAh+hJhGQhMhHiYAAQijAAhpBsQhtBtgeENIt9huQAunuE5kqQE3kuKEAAQH1AAE1DSQGjEaAAHYQAADEhsC2QhsC1lOEGQjpC5g8BwQg+BuAAC0g");
	this.shape.setTransform(-1.025,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhUXBUYMAAAiovMCovAAAMAAACovgAoicbIOnAAIAAs6IunAAgAD3s2QBJBFAAB+QAAB/i6CYQldEihjByQhlBzgzCMQgyCLAADfIAABXINpAAQAAizA+hvQA8hwDpi5QFOkFBsi2QBsi2AAjDQAAnYmjkbQk1jSn1AAQqEAAk3EuQk5ErguHtIN9BuQAekNBthtQBphsCjAAQCYAABMBIg");
	this.shape_1.setTransform(-0.025,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scratchMasked, new cjs.Rectangle(-539.9,-539.9,1079.9,1079.9), null);


(lib.scratch_off_area = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// image_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhUXBUYMAAAiovMCovAAAMAAACovg");
	mask.setTransform(540,540);

	// reveal_image
	this.instance = new lib.scratch_image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scratch_off_area, new cjs.Rectangle(0,0,1080,1080), null);


(lib.marker_placeholder = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aa7AAQAALan5IEQn4IFrKAAQrJAAn4oFQn5oEAAraQAArZH5oFQH4oELJAAQLKAAH4IEQH5IFAALZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AzBTeQn5oEAAraQAArZH5oFQH4oDLJAAQLKAAH4IDQH5IFAALZQAALan5IEQn4IFrKgBQrJABn4oFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.marker_placeholder, new cjs.Rectangle(-173.2,-177.2,346.5,354.5), null);


(lib.scratchOff_container = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_2
	this.instance = new lib.marker_placeholder();
	this.instance.setTransform(76.1,-344.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:332.45,y:-192.25},7,cjs.Ease.quadOut).to({x:-164.2,y:408.5},6,cjs.Ease.quadOut).to({x:781.05,y:-128.15},6).to({x:-76.1,y:1073.4},6).to({x:1173.7,y:216.25},6).to({x:428.55,y:1233.75},7).to({x:1301.9,y:745.15},6).wait(1));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhTJCEZIjzgVQBLhOAHgOQAigxEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeIg");
	var mask_graphics_7 = new cjs.Graphics().p("EhTJCEZIjzgVQBLhOAHgOQAigxEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeIg");
	var mask_graphics_38 = new cjs.Graphics().p("EhTJCEZIjzgVQBLhOAHgOQAigxEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeIg");
	var mask_graphics_39 = new cjs.Graphics().p("EhJkCEYIjzgUQBMhOAGgNQAjgzEWkOIC/i4QjpDVjRAiQi+Afi4hyQiJhXirjEQi4jihZhhIRlxGQgBgCpCIcIpCIdQk8kqhVjpQgahdgLgcQgPgqgrgLQi7gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQAAgZgTgfQgVghgXgOQgRgLgoAPMEF/jf3IB3gNIg/BOQBuCAhdA9QiHBYgFAgIEzjBIgqBVIBAAJIg+B6IARAOIAogXQAYgQAMgOQAlg1BAAbQBTAjAUgFQAKA6gDAFQgCANgpBPIB0gaIlDEcQihCNDTilIiaB+QgeAZAGgEIAogbQEOi+AIArQAjAWEfFRQBqB8CFCfIvPM/IPwsgIKVMjIHJIpIgtBEQArAHAdAWMkD+DeJg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg//CEZIjzgVQBMhOAGgOQAjgxEWkPIC/i4QjpDVjRAjQi+Aei4hyQiJhXirjEQi4jihZhhIRmxGQgCgCpCIcIpCIdQk8krhVjpQgahcgLgcQgPgqgrgLQi7gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQAAgZgTgfQgVghgXgOQgRgLgoAPMEF/jf3IB3gNIg/BOQBuCAhdA9QiHBYgFAgIEzjBIgqBVIBAAJIg+B6IARAOIAogXQAYgPAMgPQAlg1BAAbQBTAjAUgFQAKA6gDAFQgCAOgpBNIB0gZIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi+AIAqQAjAXEfFRQBqB8CFCfIvPM/IPwsgIKVMiQGzIRAWAZIgtBEQArAHAdAWMkD+DeIg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg2ZCEZIjzgVQBLhOAHgOQAigxEXkPIC+i4QjpDVjRAjQi9Aei4hzQiJhWirjEQi5jihYhhIRlxGQgCgDpCIdIpBIdQk9krhVjoQgahdgKgcQgQgqgqgLQi8gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDAOgpBNIB0gZIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi+AIAqQAkAXEfFRQBqB8CECfIvOM/IPwsgIKVMiQGzIRAWAZIguBEQArAHAdAWMkD+DeIg");
	var mask_graphics_42 = new cjs.Graphics().p("Egs0CEZIjzgWQBMhNAGgOQAjgxEWkPIC/i4QjpDVjRAjQi+Aei4hyQiJhXirjEQi4jihZhhIRlxGQgBgDpCIdIpCIcQk8kphVjqQgahcgLgcQgPgqgrgLQi7gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQAAgZgTgfQgVghgXgOQgRgLgoAPMEF/jf3IB3gNIg/BOQBuCAhdA9QiHBYgFAgIEzjBIgqBVIBAAJIg+B6IARAOIAogXQAYgQAMgOQAlg1BAAbQBTAjAUgFQAKA6gDAFQgCAOgpBNIB0gZIlDEcQihCNDTilIiaB+QgeAZAGgEIAogbQEOi+AIAqQAjAYEfFQQBqB8CFCfIvPM/IPwsgIKVMiIHJIrIgtBDQArAHAdAWMkD+DeIg");
	var mask_graphics_43 = new cjs.Graphics().p("EgjPCEZIjzgWQBMhNAGgOQAjgxEWkPIC/i4QjpDVjRAjQi+Aei4hzQiJhWirjEQi4jihZhhIRmxGQgCgDpCIdIpCIcQk8kphVjqQgahcgLgcQgPgqgrgLQi7gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQAAgZgTgfQgVgigXgOQgRgKgoAPMEF/jf3IB3gNIg/BOQBuCAhdA9QiHBYgFAgIEzjBIgqBVIBAAJIg+B6IARAOIAogXQAYgQAMgOQAlg1BAAbQBTAjAUgFQAKA5gDAGQgCAOgpBNIB0gZIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi9AIApQAjAYEfFQQBqB8CFCfIvPM/IPwsgIKVMiQGzIRAWAaIgtBDQArAHAdAWMkD+DeIg");
	var mask_graphics_44 = new cjs.Graphics().p("EgZpCEZIjzgWQBLhNAHgOQAigxEXkPIC+i4QjpDVjRAjQi9Aei4hzQiJhWirjEQi5jihYhhIRlxGQgCgDpCIdIpBIcQk9kphVjqQgahcgKgcQgQgqgqgLQi8gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgPQgSgKgnAPMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARAOIAogXQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA5gCAGQgDAOgpBNIB0gZIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi9AIApQAkAYEfFQQBqB8CECfIvOM/IPwsgIKVMiIHJIrIguBDQArAHAdAWMkD+DeIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1129.625,y:726.4}).wait(7).to({graphics:mask_graphics_7,x:1129.625,y:726.4}).wait(31).to({graphics:mask_graphics_38,x:1129.625,y:726.4}).wait(1).to({graphics:mask_graphics_39,x:1190.9583,y:621.0667}).wait(1).to({graphics:mask_graphics_40,x:1252.2917,y:515.7333}).wait(1).to({graphics:mask_graphics_41,x:1313.625,y:410.4}).wait(1).to({graphics:mask_graphics_42,x:1374.9583,y:305.0667}).wait(1).to({graphics:mask_graphics_43,x:1436.2917,y:199.7333}).wait(1).to({graphics:mask_graphics_44,x:1497.625,y:94.4}).wait(1));

	// masked_area
	this.instance_1 = new lib.scratchMasked();
	this.instance_1.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// Layer_17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EhvmCaCIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDTimIibB/QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EhvmCSiIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSimIiaB/QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EhvmCSiIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSimIiaB/QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EhvmCeBIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSimIiaB/QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhvmCpgIjzgVQBLhOAHgNQAigyEXkPIC+i3QjpDVjRAiQi9Aei4hyQiJhWirjFQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gvjTiyIiChxQg4gwgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARANIAogXQAXgPANgPQAlg1A/AbQBUAjAUgEQAJA5gCAGQgDANgpBOIB0gaIlDEcQigCODSimIiaB+QgeAZAGgEIAogbQEOi9AIAqQAkAXEfFQQBqB8CECfIvONAIPwsgIKVMiIHJIqIguBDQArAHAdAWMkD+DeJg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhvmC0/IjzgVQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhWirjFQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gvjTiyIiChxQg4gwgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARANIAogXQAXgPANgPQAlg1A/AbQBUAjAUgEQAJA5gCAGQgDANgpBOIB0gaIlDEcQigCODSimIiaB+QgeAZAGgEIAogbQEOi9AIAqQAkAXEfFQQBqB8CECfIvONAIPwsgIKVMiQGzIQAWAaIguBDQArAHAdAWMkD+DeJg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhvmDAeIjzgVQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhWirjFQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gvjTiyIiChxQg4gwgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARANIAogXQAXgPANgPQAlg1A/AbQBUAjAUgEQAJA5gCAGQgDANgpBOIB0gaIlDEcQigCODSimIiaB+QgeAZAGgEIAogbQEOi9AIAqQAkAXEfFQQBqB8CECfIvONAIPwsgIKVMiIHJIqIguBDQArAHAdAWMkD+DeJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EhvmDL9IjzgVQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhWirjFQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gvjTiyIiChxQg4gwgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARANIAogXQAXgPANgPQAlg1A/AbQBUAjAUgEQAJA5gCAGQgDANgpBOIB0gaIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi9AIAqQAkAXEfFQQBqB8CECfIvONAIPwsgIKVMiIHJIqIguBDQArAHAdAWMkD+DeJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EhvmDXbIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EhvmDi6IjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiQGzIQAWAZIguBEQArAHAdAVMkD+DeKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:412.525,y:992.625}).wait(7).to({graphics:mask_1_graphics_7,x:652.525,y:944.625}).wait(24).to({graphics:mask_1_graphics_31,x:652.525,y:944.625}).wait(1).to({graphics:mask_1_graphics_32,x:479.9536,y:1018.1107}).wait(1).to({graphics:mask_1_graphics_33,x:307.3821,y:1091.5964}).wait(1).to({graphics:mask_1_graphics_34,x:134.8107,y:1165.0821}).wait(1).to({graphics:mask_1_graphics_35,x:-37.7607,y:1238.5679}).wait(1).to({graphics:mask_1_graphics_36,x:-210.3321,y:1312.0536}).wait(1).to({graphics:mask_1_graphics_37,x:-382.9036,y:1385.5393}).wait(1).to({graphics:mask_1_graphics_38,x:-555.475,y:1459.025}).wait(7));

	// masked_area
	this.instance_2 = new lib.scratchMasked();
	this.instance_2.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// Layer_16 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIcQk9kqhVjoQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnARMEF/jf3IB2gPIg/BQQBuB/hdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi8AIAqQAkAXEfFQQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIcQk9kqhVjoQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnARMEF/jf3IB2gPIg/BQQBuB/hdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi8AIAqQAkAXEfFQQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIcQk9kqhVjoQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnARMEF/jf3IB2gPIg/BQQBuB/hdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi8AIAqQAkAXEfFQQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhgIRlxIQgCgCpCIdIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnAQMEF/jf3IB2gNIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi8AIAqQAkAWEfFRQBqB8CECeIvONAIPwsfIKVMiIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhkJCEYIjzgUQBLhOAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgLQi8gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeIg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhRpCEZIjzgWQBLhNAHgOQAigxEXkPIC+i4QjpDVjRAjQi9Aei4hzQiJhWirjEQi5jihYhhIRlxGQgCgDpCIdIpBIcQk9kphVjqQgahcgKgcQgQgqgqgLQi8gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgKgnAPMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARAOIAogXQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA5gCAGQgDAOgpBNIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogbQEOi+AIAqQAkAYEfFQQBqB8CECfIvOM/IPwsgIKVMiQGzIRAWAaIguBDQArAHAdAWMkD+DeIg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Eg/JCEZIjzgWQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhhIRlxHQgCgBpCIcIpBIcQk9kphVjqQgahdgKgbQgQgqgqgLQi8gujTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgPQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBZgFAfIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogbQEOi+AIAqQAkAYEfFQQBqB8CECfIvONAIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgspCEYIjzgVQBLhNAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gvjTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BQQBuB/hdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDAMgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwsgIKVMhIHJIrIguBDQArAHAdAVMkD+DeKg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgaJCEYIjzgUQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAiQi9Afi4hyQiJhWirjFQi5jihYhgIRlxHQgCgDpCIdIpBIdQk9krhVjoQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnAQMEF/jf3IB2gOIg/BQQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIArQAkAXEfFQQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:620.525,y:616}).wait(7).to({graphics:mask_2_graphics_7,x:620.525,y:616}).wait(18).to({graphics:mask_2_graphics_25,x:620.525,y:616}).wait(1).to({graphics:mask_2_graphics_26,x:857.325,y:413.3333}).wait(1).to({graphics:mask_2_graphics_27,x:1020.825,y:210.6667}).wait(1).to({graphics:mask_2_graphics_28,x:1139.225,y:8}).wait(1).to({graphics:mask_2_graphics_29,x:1257.625,y:-194.6667}).wait(1).to({graphics:mask_2_graphics_30,x:1376.025,y:-397.3333}).wait(1).to({graphics:mask_2_graphics_31,x:1494.425,y:-600}).wait(14));

	// masked_area
	this.instance_3 = new lib.scratchMasked();
	this.instance_3.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// Layer_15 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EhvmCEZIjzgVQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9krhVjoQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgMgnAQMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_3_graphics_7 = new cjs.Graphics().p("EhvmCEZIjzgVQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9krhVjoQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgMgnAQMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EhvmCEZIjzgVQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9krhVjoQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgMgnAQMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgMgnAQMEF/jf3IB2gNIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogcQEOi8AIAqQAkAWEfFRQBqB8CECfIvOM/IPwsfIKVMiIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EhvmCNaIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EhvmCaSIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EhvmCnKIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EhvmC0CIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EhwmDA6IjzgVQBLhNAHgOQAjgyEWkOIC/i4QjpDVjRAiQi+Afi4hzQiJhWirjEQi4jihZhhIRlxHQgCgCpCIdIpBIcQk9kqhUjpQgahdgLgbQgPgqgrgLQi8gvjSixIiDhyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBvCAhdA9QiHBYgFAgIEyjBIgpBVIBAAIIg+B7IARANIAogWQAYgQAMgOQAlg1BAAaQBTAkAUgFQAKA5gDAGQgDANgpBOIB1gZIlEEcQigCNDTimIibB/QgeAYAHgDIAngcQEPi9AHAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQAsAHAcAVMkD9DeJg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:201.325,y:640}).wait(7).to({graphics:mask_3_graphics_7,x:201.325,y:640}).wait(12).to({graphics:mask_3_graphics_19,x:201.325,y:640}).wait(1).to({graphics:mask_3_graphics_20,x:7.725,y:804.8}).wait(1).to({graphics:mask_3_graphics_21,x:-185.875,y:911.825}).wait(1).to({graphics:mask_3_graphics_22,x:-379.475,y:994.225}).wait(1).to({graphics:mask_3_graphics_23,x:-573.075,y:1076.625}).wait(1).to({graphics:mask_3_graphics_24,x:-766.675,y:1159.025}).wait(1).to({graphics:mask_3_graphics_25,x:-953.9,y:1241.425}).wait(20));

	// masked_area
	this.instance_4 = new lib.scratchMasked();
	this.instance_4.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// Layer_11 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhgIRlxIQgCgBpCIcIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gwjTixIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAZAGgEIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_4_graphics_7 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhgIRlxIQgCgBpCIcIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gwjTixIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAZAGgEIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_4_graphics_13 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhgIRlxIQgCgBpCIcIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gwjTixIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAZAGgEIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_4_graphics_14 = new cjs.Graphics().p("EhvmCEYIjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgBpCIcIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gvjTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgKgnAQMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAGQgDAMgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_4_graphics_15 = new cjs.Graphics().p("EhvmCEYIjzgVQBLhNAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgKQi8gvjTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgQANgOQAlg1A/AaQBUAkAUgEQAJA4gCAGQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONBIPwsgIKVMiIHJIqIguBDQArAHAdAVMkD+DeKg");
	var mask_4_graphics_16 = new cjs.Graphics().p("EhnhCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hzQiJhVirjFQi5jihYhgIRlxIQgCgCpCIdIpBIdQk9krhVjpQgahdgKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnARMEF/jf3IB2gPIg/BQQBuB/hdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B8IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDAMgpBPIB0gaIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAkAYEfFQQBqB8CECeIvONBIPwsgIKVMhQGzIRAWAZIguBEQArAHAdAVMkD+DeKg");
	var mask_4_graphics_17 = new cjs.Graphics().p("EhcJCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hyQiJhWirjFQi5jihYhgIRlxIQgCgCpCIdIpBIdQk9krhVjoQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnAQMEF/jf2IB2gPIg/BQQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDAMgpBPIB0gaIlDEcQigCNDTilIibB+QgeAYAGgDIAogcQEOi9AIArQAkAXEfFQQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");
	var mask_4_graphics_18 = new cjs.Graphics().p("EhQxCEYIjzgUQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhgIRlxHQgCgDpCIdIpBIdQk9kqhVjpQgahegKgbQgQgqgqgKQi8gwjTixIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVgigXgNQgSgMgnAQMEF/jf2IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARAMIAogWQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDSilIiaB+QgeAYAGgDIAogcQEOi8AIAqQAkAWEfFRQBqB8CECeIvONBIPwsgIKVMiIHJIpIguBEQArAHAdAVMkD+DeKg");
	var mask_4_graphics_19 = new cjs.Graphics().p("EhFZCDfIjzgVQBLhOAHgNQAigyEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhWirjFQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gvjTiyIiChxQg4gwgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B7IARANIAogXQAXgPANgPQAlg1A/AbQBUAjAUgEQAJA5gCAGQgDANgpBOIB0gaIlDEcQigCODSimIiaB+QgeAZAGgEIAogbQEOi9AIAqQAkAXEfFQQBqB8CECfIvONAIPwsgIKVMiQGzIQAWAaIguBDQArAHAdAWMkD+DeJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:614.125,y:-120}).wait(7).to({graphics:mask_4_graphics_7,x:614.125,y:-120}).wait(6).to({graphics:mask_4_graphics_13,x:614.125,y:-120}).wait(1).to({graphics:mask_4_graphics_14,x:759.725,y:-244.2667}).wait(1).to({graphics:mask_4_graphics_15,x:905.325,y:-368.5333}).wait(1).to({graphics:mask_4_graphics_16,x:999.225,y:-492.8}).wait(1).to({graphics:mask_4_graphics_17,x:1072.025,y:-617.0667}).wait(1).to({graphics:mask_4_graphics_18,x:1144.825,y:-741.3333}).wait(1).to({graphics:mask_4_graphics_19,x:1217.625,y:-859.825}).wait(26));

	// masked_area
	this.instance_5 = new lib.scratchMasked();
	this.instance_5.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// Layer_12 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigxEXkPIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kphVjqQgahdgKgbQgQgqgqgLQi8gujTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgPQgSgKgnAQMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBZgFAfIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAYAGgDIAogbQEOi9AIApQAkAYEfFQQBqB8CECfIvOM/IPwsgIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_5_graphics_7 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigxEXkPIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kphVjqQgahdgKgbQgQgqgqgLQi8gujTiyIiChyQg4gvgTACIg0AJQAalTgBhRQABgZgTgfQgVghgXgPQgSgKgnAQMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBZgFAfIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDTilIibB+QgeAYAGgDIAogbQEOi9AIApQAkAYEfFQQBqB8CECfIvOM/IPwsgIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_5_graphics_8 = new cjs.Graphics().p("EhvmCEZIjzgWQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAjQi9Aei4hzQiJhVirjFQi5jihYhhIRlxHQgCgBpCIcIpBIcQk9kphVjqQgahdgKgbQgQgqgqgLQi8gujTiyIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgPQgSgLgnARMEF/jf3IB2gPIg/BPQBuCAhdA9QiGBZgFAfIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AbQBUAjAUgFQAJA6gCAFQgDANgpBOIB0gZIlDEcQigCNDSilIiaB+QgeAYAGgDIAogbQEOi9AIApQAkAYEfFQQBqB8CECfIvONAIPwshIKVMiIHJIrIguBDQArAHAdAVMkD+DeJg");
	var mask_5_graphics_9 = new cjs.Graphics().p("EhvmCEYIjzgUQBLhOAHgNQAigzEXkOIC+i3QjpDUjRAiQi9Afi4hyQiJhXirjEQi5jihYhgIRlxHQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgKQi8gwjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgMgnAQMEF/jf3IB2gNIg/BPQBuB/hdA9QiGBZgFAfIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgEQAJA4gCAHQgDANgpBOIB0gaIlDEcQigCNDTilIibB+QgeAZAGgEIAogbQEOi9AIAqQAkAWEfFRQBqB8CECfIvOM/IPwsfIKVMiIHJIpIguBEQArAHAdAWMkD+DeJg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EhvmCEZIjzgVQBLhOAHgOQAigxEXkPIC+i3QjpDUjRAjQi9Aei4hyQiJhXirjEQi5jihYhhIRlxGQgCgCpCIcIpBIdQk9kqhVjpQgahdgKgcQgQgqgqgLQi8gvjTixIiChxQg4gxgTADIg0AJQAalTgBhRQABgZgTgfQgVghgXgOQgSgLgnAPMEF/jf3IB2gNIg/BOQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAJIg9B6IARAOIAogXQAXgPANgPQAlg1A/AaQBUAkAUgFQAJA6gCAFQgDANgpBPIB0gaIlDEcQigCNDSilIiaB+QgeAZAGgEIAogbQEOi+AIArQAkAWEfFRQBqB8CECfIvOM/IPwsgIKVMjIHJIpIguBEQArAHAdAWMkD+DeIg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EhwPCHZIjzgVQBMhNAGgOQAjgyEWkOIC/i4QjpDVjRAiQi+Afi4hzQiJhWirjEQi4jihZhhIRlxHQgBgCpCIdIpCIcQk8kqhVjpQgahdgLgbQgPgqgrgLQi7gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQAAgZgTgfQgVgigXgOQgRgLgoAQMEF/jf3IB3gOIg/BPQBuCAhdA9QiHBYgFAgIEzjBIgqBVIBAAIIg+B7IARANIAogWQAYgQAMgOQAlg1BAAaQBTAkAUgFQAKA5gDAGQgCANgpBOIB0gZIlDEcQihCNDTilIiaB+QgeAYAGgDIAogcQEOi9AIAqQAjAXEfFRQBqB8CFCeIvPNAIPwsgIKVMiQGzIRAWAZIgtBEQArAHAdAVMkD+DeJg");
	var mask_5_graphics_12 = new cjs.Graphics().p("Eh0cCK+IjzgVQBLhNAHgOQAigyEXkOIC+i4QjpDVjRAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpCIdIpBIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi8gvjTixIiChyQg4gwgTADIg0AJQAalTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEyjBIgqBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1A/AaQBUAkAUgFQAJA5gCAGQgDANgpBOIB0gZIlDEcQigCNDTimIibB/QgeAYAGgDIAogcQEOi9AIAqQAkAXEfFRQBqB8CECeIvONAIPwsgIKVMiIHJIqIguBEQArAHAdAVMkD+DeJg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Eh12CMKIjzgVQBLhNAHgOQAigyEXkOIC+i4QjoDVjSAiQi9Afi4hzQiJhWirjEQi5jihYhhIRlxHQgCgCpBIdIpCIcQk9kqhVjpQgahdgKgbQgQgqgqgLQi7gvjUixIiBhyQg4gwgUADIgzAJQAZlTgBhRQABgZgTgfQgVgigXgOQgSgLgnAQMEF/jf3IB2gOIg/BPQBuCAhdA9QiGBYgFAgIEzjBIgrBVIBAAIIg9B7IARANIAogWQAXgQANgOQAlg1BAAaQBTAkAUgFQAKA5gDAGQgDANgpBOIB0gZIlDEcQigCNDTilIiaB+QgeAYAFgDIApgcQEOi9AHAqQAkAXEfFRQBqB8CFCeIvPNAIPwsgIKVMiIHJIqIgtBEQArAHAdAVMkD+DeJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:-381.075,y:404.8}).wait(7).to({graphics:mask_5_graphics_7,x:-381.075,y:404.8}).wait(1).to({graphics:mask_5_graphics_8,x:-578.5861,y:572.4889}).wait(1).to({graphics:mask_5_graphics_9,x:-740.1861,y:709.6889}).wait(1).to({graphics:mask_5_graphics_10,x:-865.875,y:816.4}).wait(1).to({graphics:mask_5_graphics_11,x:-951.5889,y:873.3361}).wait(1).to({graphics:mask_5_graphics_12,x:-978.5222,y:896.2028}).wait(1).to({graphics:mask_5_graphics_13,x:-987.5,y:903.825}).wait(32));

	// masked_area
	this.instance_6 = new lib.scratchMasked();
	this.instance_6.setTransform(542.45,542.45,1,1,0,0,0,2.4,2.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// masked_area (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EhUWBUZMAAAiovMCovAAAMAAACovg");
	mask_6.setTransform(540.0668,540.0668);

	// scratch_off_area
	this.instance_7 = new lib.scratch_off_area();
	this.instance_7.setTransform(540.15,540.2,1,1,0,0,0,540,540);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.9,-521.2,1811.6,1931.7);


// stage content:
(lib.RECOVER_CAT_ScratchOff_Prototype_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var root = this; //Declared variable for access to global scope.
		
		this.scratch_container.addEventListener("click", scratch.bind(this));
		
		
		function scratch(e) {
			e.stopPropagation();
			root.scratch_container.play();
			console.log("Scratch-off Pressed");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// scratch_container
	this.scratch_container = new lib.scratchOff_container();
	this.scratch_container.name = "scratch_container";
	this.scratch_container.setTransform(1081.9,1082.3,1,1,0,0,0,542,542.4);

	this.timeline.addTween(cjs.Tween.get(this.scratch_container).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(291.3,645.9,2507.8999999999996,1879.2999999999997);
// library properties:
lib.properties = {
	id: '1EE6FF9F1E8C4EF3B1D69DE018D81564',
	width: 2160,
	height: 2160,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['1EE6FF9F1E8C4EF3B1D69DE018D81564'] = {
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