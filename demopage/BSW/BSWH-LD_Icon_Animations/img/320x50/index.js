(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1814,594],[0,596,605,152]]}
];


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



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2103,376);


(lib._970x250_diagonal = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.text_02 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Find out if you’re ready.", "bold 31px 'Sharp Sans'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 408;
	this.text.parent = this;
	this.text.setTransform(-32.5,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_02, new cjs.Rectangle(-34.5,-22.3,412,119.39999999999999), null);


(lib.text_01 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Delivering during COVID-19?", "bold 31px 'Sharp Sans'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 500;
	this.text.parent = this;
	this.text.setTransform(-72.55,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-6.7,504.2,80.60000000000001);


(lib.stork_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellow_bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3BD46").s().p("AgJBpIAAjRIATAAIAADRg");
	this.shape.setTransform(156.35,64.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3BD46").s().p("Ah1BpIAAjRICxAAIA5DRg");
	this.shape_1.setTransform(167.1,64.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3BD46").s().p("AjRBpIAAjRIE2AAIBtDRg");
	this.shape_2.setTransform(176.35,64.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BD46").s().p("AkeBpIAAjRIGmAAICXDRg");
	this.shape_3.setTransform(184.05,64.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3BD46").s().p("AlcBpIAAjRIIAAAIC5DRg");
	this.shape_4.setTransform(190.2,64.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3BD46").s().p("AmKBpIAAjRIJDAAIDSDRg");
	this.shape_5.setTransform(194.825,64.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3BD46").s().p("AmABpIAAjRIIvAAIDSDRg");
	this.shape_6.setTransform(193.825,64.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3BD46").s().p("Al2BpIAAjRIIbAAIDSDRg");
	this.shape_7.setTransform(192.825,64.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(153));

	// body_outline_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Ag5gKIAOgSQAPgSABAAIBVA2IgfAmg");
	var mask_graphics_2 = new cjs.Graphics().p("AhjAeIA5g6QA3g7ABAAIBWA3IhyB4g");
	var mask_graphics_3 = new cjs.Graphics().p("AhsAPIBFgxQBFgyABAAIBOBLIisBeg");
	var mask_graphics_4 = new cjs.Graphics().p("AiHADQCjhfACAAIBqBfIjIBag");
	var mask_graphics_5 = new cjs.Graphics().p("AiQgWIEZhQIAHB1IkBBYg");
	var mask_graphics_6 = new cjs.Graphics().p("AhrhAID1gFIhBB8IjSAPg");
	var mask_graphics_7 = new cjs.Graphics().p("AhFgPIBEhOQBFCxACAAIhUAKg");
	var mask_graphics_8 = new cjs.Graphics().p("AAyBJIAAAAIAAAAgAgxAgIAehoIA7AZQAIB2ACACg");
	var mask_graphics_9 = new cjs.Graphics().p("AgsB2IAAAAIAAAAgAhtBJICfi+IA8AwIhOBdQhNBcABACg");
	var mask_graphics_10 = new cjs.Graphics().p("AgTBGIAAAAIAAAAgAhRAjIBxhoIAyApIg0AwQgxAxAAABg");
	var mask_graphics_11 = new cjs.Graphics().p("AhjAiIAFg4IBVgfIAWAwIAqgUIAtA2Ih/AZg");
	var mask_graphics_12 = new cjs.Graphics().p("AhdAAIASgJIA9gRIBDgfIAqAwIh1AsIhIAXg");
	var mask_graphics_13 = new cjs.Graphics().p("Ah/AnIAwghIBLg2IBDgyQA9AOAEAGIisCqIgwAHg");
	var mask_graphics_14 = new cjs.Graphics().p("AhfAsIA1gnIAEgJIBFhOIAegFQAggEADADIgWA2IiKB9g");
	var mask_graphics_15 = new cjs.Graphics().p("Ag8BsIAZhJIgNinIAXAEQAWAFADAEIAfBSIAeBAIg9Bqg");
	var mask_graphics_16 = new cjs.Graphics().p("AgdCGIgWiYIAFhyIAVgBQAWAAADADIAZCPIAUA6IAHA/g");
	var mask_graphics_17 = new cjs.Graphics().p("AgqBsIANiRIAPhmIAWAIQAYAIADADIAIBRIgKBUIgFBfg");
	var mask_graphics_18 = new cjs.Graphics().p("AggBOIADhVIAKhJIARgCQARgBADADIAKBEIACAsIADAzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:76.625,y:123.9}).wait(1).to({graphics:mask_graphics_2,x:80.85,y:119.75}).wait(1).to({graphics:mask_graphics_3,x:98.525,y:107.125}).wait(1).to({graphics:mask_graphics_4,x:104.4,y:104.65}).wait(1).to({graphics:mask_graphics_5,x:117.35,y:100.1}).wait(1).to({graphics:mask_graphics_6,x:132.275,y:97.875}).wait(1).to({graphics:mask_graphics_7,x:144.325,y:99.975}).wait(1).to({graphics:mask_graphics_8,x:145.575,y:109.175}).wait(1).to({graphics:mask_graphics_9,x:138.575,y:119.925}).wait(1).to({graphics:mask_graphics_10,x:130.425,y:128.025}).wait(1).to({graphics:mask_graphics_11,x:126.775,y:135.6}).wait(1).to({graphics:mask_graphics_12,x:134.825,y:135.975}).wait(1).to({graphics:mask_graphics_13,x:147.35,y:129.075}).wait(1).to({graphics:mask_graphics_14,x:150.75,y:124.6984}).wait(1).to({graphics:mask_graphics_15,x:154,y:113.65}).wait(1).to({graphics:mask_graphics_16,x:153.85,y:102.525}).wait(1).to({graphics:mask_graphics_17,x:152.375,y:87.3}).wait(1).to({graphics:mask_graphics_18,x:154.375,y:61.9525}).wait(1).to({graphics:null,x:0,y:0}).wait(155));

	// body_outline_inner
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3BC46").ss(2,1,1).p("AmEDmQBhh3ClhIQCihFCbAHQAYABAeARQAnAVAKAhQAGAWgGAiQgGAkgPASQhFBVgZAaQhJBOhMAtQBhACBOgkQBWgoBVheQAMgNABgTQABgSgKgQIgshcQgRgiACgbQAIgiACgbQAGg5AEgQQAQg+AFhpQACheAAgD");
	this.shape_8.setTransform(118.2262,97.9803);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},18).wait(155));

	// body_outline_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AggASIgCgsIBDgDIACA7g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgnAsIARhhIA+AAIgWBrg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgtA8IAgiBIA7AKIgWCBg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgbhBIBIgNIgSCOIhHAPg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AgTB3Ig3huIAPiEIBCAAIgJB2IBNCBg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AgNCHIgKh2Ig3htIAAghIBNgdIAdBiIAzBTIgRCAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhXB5IA6hlIgFg+IgXhfIBUgrIAkA/IAZA6IgPBoIhXCIg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AiABLIBiheIAphEIAchEIBaAwIgMBQIgpA5IhBA3IhSBHg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AidBKIiNgPIA6hhICcgFIFhgjIAeBoIhlAXIiAAeg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AAaBiIhygrIhig7IgRh5IB6AhICiAyIB7AqIgtB+g");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ag9DEIhug/IAPilIEJi3IA/BMIh7CfIBTAyIhOCSg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AiUAdIAZglIBVgqICWhMIAlBdIhQBDIhDAyIgyArg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ai2gfICCg3IBageICRgFIgWCEIhiANIhcAlIhTA9g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AiPgeIB4gXIBSgIIBVADIhVBzIg6AAIhKAAIg/AEg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ah0BMIBJg0IgyggIgSgZIA/hiIB/AhIAmBjIgrCDg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhggDIAjgqIANgXIAFgNICMBHIgGAKIgOAdIgmA1g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhCgVIAhgbIBjBGIggAbg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ag+gEIAVgPIBoAaIgSANg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:170.225,y:69.5}).wait(1).to({graphics:mask_1_graphics_2,x:167.95,y:82.15}).wait(1).to({graphics:mask_1_graphics_3,x:166.575,y:86.575}).wait(1).to({graphics:mask_1_graphics_4,x:165.95,y:93.2}).wait(1).to({graphics:mask_1_graphics_5,x:168.975,y:100.225}).wait(1).to({graphics:mask_1_graphics_6,x:169.35,y:110.4}).wait(1).to({graphics:mask_1_graphics_7,x:169.475,y:120.425}).wait(1).to({graphics:mask_1_graphics_8,x:164.575,y:131.725}).wait(1).to({graphics:mask_1_graphics_9,x:122.775,y:148.425}).wait(1).to({graphics:mask_1_graphics_10,x:85.75,y:143.05}).wait(1).to({graphics:mask_1_graphics_11,x:75.975,y:131.725}).wait(1).to({graphics:mask_1_graphics_12,x:96.3,y:111.775}).wait(1).to({graphics:mask_1_graphics_13,x:111.725,y:106.525}).wait(1).to({graphics:mask_1_graphics_14,x:123.925,y:101.5}).wait(1).to({graphics:mask_1_graphics_15,x:138.225,y:106.025}).wait(1).to({graphics:mask_1_graphics_16,x:132.45,y:123.075}).wait(1).to({graphics:mask_1_graphics_17,x:123.15,y:130.6}).wait(1).to({graphics:mask_1_graphics_18,x:109.125,y:142.45}).wait(1).to({graphics:null,x:0,y:0}).wait(155));

	// body_outline
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3BC46").ss(4,1,1).p("AgTF/QjKAAjnhwIg0gZIAdgyQBcihCshdQBTgtBagWQBcgWBdAEQAVABASALQARAMAJAUQAJATgDAVQgCAUgNARQg7BKg9BBQhZBghQA8QCEAOBvgoQCAguBgh0QAOgRACgWQABgXgMgUIg3hXQgWgrAEg3QADggARg9QALgkADgRQAHgeAAgYIBrAAQAAAhgIAnQgFAXgMAqQgMAtgDAUQgEAcAJASIAzBSQAfAxgEA4QgEA5gkAsQhfByh7A6Qh6A5iPAAg");
	this.shape_9.setTransform(122.5178,113);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},18).wait(155));

	// Body_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("Ah+hOIEAgSIgLC8Ij3AFg");
	var mask_2_graphics_2 = new cjs.Graphics().p("Ah9h3IEAgSIgNEOIj3AFg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Ah/iaID/gRIgIFSIj3AFg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiFjCID/gRIAMGiIj3AFg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiLj+ID/gSIAYIbIj3AGg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AiBk4ID/gRIAEKOIj3AFg");
	var mask_2_graphics_7 = new cjs.Graphics().p("Ah/EaIAyi+Ig3ncID/gSIAKIiIg4EDg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Ai4EIIB0jYIg3ncID/gSIA0JVIjmEog");
	var mask_2_graphics_9 = new cjs.Graphics().p("AnUGyIBpijICaAgIDlgvICXiXIgcpAIEAgSIA0IaIASDFImCC+IlSA1g");
	var mask_2_graphics_10 = new cjs.Graphics().p("ApcFnICQisIB4ArIBxApICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_11 = new cjs.Graphics().p("ApcFnICQisICyi4IBZBlIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_12 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIA6BsIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_13 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIgVB8Ih6AfIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_14 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIBtAXIiWB6IAUgVIh6AfIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_15 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIBtAXIArBdIhIBqIhbgSIhLgKIAtgxIAUgVIh6AfIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_16 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIBtAXIArBdIhIBqIhkBgIh/hEIA9g4IAtgxIAUgVIh6AfIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_17 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIBtAXIArBdIhIBqIhkBgIhJA9Ih1hFIA/g8IA9g4IAtgxIAUgVIh6AfIidBMIiKB/IBoAoICbAhIDkgwICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1g");
	var mask_2_graphics_18 = new cjs.Graphics().p("ApcFnICQisICyi4IC8hTIDJgvIBtAXIArBdIhIBqIhkBgIhJA9IhJAxIDXgtICWiXIgbpAIEAgSIAzIaIATDFImDC+IlRA1gAgkAcIidBMIiKB/IBkAmICAhWIA/g8IA9g4IAtgxIAUgVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:161.8,y:70.65}).wait(1).to({graphics:mask_2_graphics_2,x:161.7,y:74.75}).wait(1).to({graphics:mask_2_graphics_3,x:161.925,y:78.175}).wait(1).to({graphics:mask_2_graphics_4,x:162.55,y:82.175}).wait(1).to({graphics:mask_2_graphics_5,x:163.175,y:88.2}).wait(1).to({graphics:mask_2_graphics_6,x:162.175,y:93.975}).wait(1).to({graphics:mask_2_graphics_7,x:162.45,y:101.225}).wait(1).to({graphics:mask_2_graphics_8,x:161.55,y:105.625}).wait(1).to({graphics:mask_2_graphics_9,x:134.825,y:109.9}).wait(1).to({graphics:mask_2_graphics_10,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_11,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_12,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_13,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_14,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_15,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_16,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_17,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_18,x:121.275,y:109.9}).wait(1).to({graphics:null,x:0,y:0}).wait(155));

	// body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnEFaIg0gZIAdgyQBcigCsheQBTgsBagWQBcgWBdAEQAVABASALQARAMAJAUQAJATgDAUQgCAUgNARQg7BKg9BCQhZBghQA7QCEAOBvgoQCAgtBgh0QAOgRACgWQABgXgMgUIg3hXQgWgrAEg3QADggARg9QALgkADgRIAFgbQACgIgBgMIgDgwIgBgPIAAgJIgCgPQAAgLgEgRIgBgPIAAgLIACAAIAMAAIALAAIAIgIQALgJAOgBQANAAAMAHQAIAFAFAIIAJAAIAAABIAAAAIAAAGIACAAQgBAEADAJIAFA3QAFAzgCAZIgBAXIgFAeQgFAXgMAqQgMAtgDAUQgEAbAJATIAzBQQAfAygEA5QgEA5gkAsQhfByh7A6Qh6A5iPAAQjKAAjnhxgAijBxQhxA+hJBkQA1AYA5ARQBIgeBihcQBFhBBLhZQh9AKhxA/g");
	this.shape_10.setTransform(122.5178,105.4483);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(173));

	// headoutline_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("AgggXIA6gEIAKA0IhHADg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AgZAbQgDgLgLgUIgagtIA1gqIAxBaIAdBbIhQACQABgigMgfg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AA1BxIgJgZQgBgEgbgjQgbgmgEgHIhvgdIgDhYIC/A3IBECsg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AjUAUIDEhmIDlBIIhWBAQgBgDgagSIhpgRIhwBDg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AimCAIAriQIDLh6IBBAQQgBABATAwQAHARgFAFQgHAKgqAEIh6A3Ig+B5g");
	var mask_3_graphics_6 = new cjs.Graphics().p("AhWAtIALhVIAziPIAwARQA0AVAIAUQAEALgCAEIgkA2IgmBoIgGBrIhYAdgAgYi4IAAABIAAgBg");
	var mask_3_graphics_7 = new cjs.Graphics().p("Ag4BEIgQhzIAHhXIBWACIAFBWIAMBIIAjBsIhvABg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AgOBcIgDg5IgTg5IgghCIBSgNIAoBYIANA1IACA+g");
	var mask_3_graphics_9 = new cjs.Graphics().p("AhdA6IgEhdIAEg3QgBAAAJgsIBXATIgJBKIBqA3IgIB5g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AhAhQIBMgeIA1DRIhSAMg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AhFBYIBSi+IA5A6IggCTg");
	var mask_3_graphics_12 = new cjs.Graphics().p("Ag1ALIAdg9IBOA5Ig7Asg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AgggoIBAgHIABBTIhBAMg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:168.075,y:68.025}).wait(1).to({graphics:mask_3_graphics_2,x:165.175,y:51.125}).wait(1).to({graphics:mask_3_graphics_3,x:158.25,y:45.025}).wait(1).to({graphics:mask_3_graphics_4,x:145.075,y:41.525}).wait(1).to({graphics:mask_3_graphics_5,x:136.7421,y:47.025}).wait(1).to({graphics:mask_3_graphics_6,x:130.8696,y:56.45}).wait(1).to({graphics:mask_3_graphics_7,x:130.175,y:69.05}).wait(1).to({graphics:mask_3_graphics_8,x:130.55,y:79.275}).wait(1).to({graphics:mask_3_graphics_9,x:137.45,y:98.05}).wait(1).to({graphics:mask_3_graphics_10,x:141.975,y:76.55}).wait(1).to({graphics:mask_3_graphics_11,x:137.2,y:56.575}).wait(1).to({graphics:mask_3_graphics_12,x:153.2,y:51.225}).wait(1).to({graphics:mask_3_graphics_13,x:155.625,y:65.275}).wait(1).to({graphics:null,x:0,y:0}).wait(160));

	// head_outline
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3BC46").ss(4,1,1).p("AgqE/IhlgjQAYhGgIg0QgFgggcg4QgTglgHgUQgNgigEghQgEgwAHgtQAMhGApgtQAbgeAlgPQAlgPAsAAQBeAAA5BDQA4BDAABxIhrAAQAAg2gSgkQgZgyg5AAQgrAAgWAZQgTAVgHAlQgGAgADAjQACAVAJAXQAGAOAPAdQAjBFAHAvQAOBQgiBhg");
	this.shape_11.setTransform(146.9656,70.025);
	this.shape_11._off = true;

	var maskedShapeInstanceList = [this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},13).wait(160));

	// head_mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("AhsAxQgEgiADADIAZhTICagSIApBgIAAA4IjXAPIgEgjg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AhiBzQgDgjADADIAIhLIgfhDICChZIBICCIApBhIAAA3IjXAPIgFgig");
	var mask_4_graphics_3 = new cjs.Graphics().p("AhECPQgDgiACADIAIhMIgehDIg8AHIADiYIC7A4IBHCCIApBhIAAA3IjXAPIgEgig");
	var mask_4_graphics_4 = new cjs.Graphics().p("AATCPQgDgiADADIAIhMIgehDIg7AHIgpA2IiIhmICzhoIC7A4IBICCIApBhIAAA3IjYAPIgFgig");
	var mask_4_graphics_5 = new cjs.Graphics().p("AAbCPQgDgiACADIAIhMIgehDIg7AHIgoA2IACBKIiagZIAQiXICzhoIC7A4IBHCCIApBhIAAA3IjYAPIgEgig");
	var mask_4_graphics_6 = new cjs.Graphics().p("Aj3BCIAQiXICzhoIC7A4IBHCDIApBgIAAA4IjYAOIgEgiQgDgiACADIAIhLIgehEIg7AHIgoA2IACBKIAdBUIiWAPg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AjWCMIghh8IAQiXICzhoIC7A5IBHCCIApBgIAAA4IjYAPIgEgjQgDgiACADIAIhKIgehEIg7AGIgoA3IACBJIAdBUIAmBxIiKACg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AibEJIgJhGIgyhjIghh7IAQiYICzhoIC7A4IBHCDIApBgIAAA3IjYAPIgEgiQgDgiACADIAIhLIgehEIg7AHIgoA3IACBKIAdBTIAmBxIgBBag");
	var mask_4_graphics_9 = new cjs.Graphics().p("Ai4EoIAdhWIgJhGIgyhjIghh7IAQiYICzhpIC7A5IBHCCIApBiIAAA2IjYAPIgEghQgDgjACADIAIhLIgehEIg7AGIgoA3IACBLIAdBTIAmBwIgBBbIgeBvg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:162.5808,y:62.925}).wait(1).to({graphics:mask_4_graphics_2,x:161.5,y:56.4}).wait(1).to({graphics:mask_4_graphics_3,x:158.55,y:53.575}).wait(1).to({graphics:mask_4_graphics_4,x:149.7,y:53.575}).wait(1).to({graphics:mask_4_graphics_5,x:148.95,y:53.575}).wait(1).to({graphics:mask_4_graphics_6,x:148.95,y:54.85}).wait(1).to({graphics:mask_4_graphics_7,x:148.95,y:59.825}).wait(1).to({graphics:mask_4_graphics_8,x:148.95,y:64.275}).wait(1).to({graphics:mask_4_graphics_9,x:148.95,y:69.8}).wait(1).to({graphics:null,x:0,y:0}).wait(164));

	// head
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnYOlQBQjmgbiqQgRhqhci3Qg8h5gYhBQgshzgLhuQgQicAaiVQAnjmCFiTQBYhhB6gzQB6gyCSAAQE2AAC5DdQC6DeAAFzIlgAAQAAi0g6h0QhSimi9AAQiOAAhKBSQg+BFgXB7QgUBoAMBzQAHBEAeBNQASAuAxBhQByDjAZCZQAsEIhuE+g");
	this.shape_12.setTransform(146.8485,69.9257,0.3044,0.3044);
	this.shape_12._off = true;

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).wait(173));

	// leg_mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_8 = new cjs.Graphics().p("AiFAjIgNhFIElAAIAABFg");
	var mask_5_graphics_9 = new cjs.Graphics().p("AhnBKIgehXIgNhGIElAAIAABGIgXBhg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AhWB8IgRhfIgehXIgNhHIElAAIAABHIgXBhIgMBbg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AhHC1IgPhsIgRhfIgehYIgNhGIElAAIAABGIgXBiIgMBaIgIBng");
	var mask_5_graphics_12 = new cjs.Graphics().p("Ag8DkIgLhkIgPhsIgRheIgehYIgNhHIElAAIAABHIgXBiIgMBaIgIBmIglBqg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AhIEoIABjnIgPhrIgRhgIgehYIgNhGIElAAIAABGIgXBiIgMBbIgsBmIgCDog");
	var mask_5_graphics_14 = new cjs.Graphics().p("AhIFEIABkgIgPhrIgRhfIgehYIgNhHIElAAIAABHIgXBiIgMBbIgsBlIgBBhIA5AAIAACRIg6gDIAAAyg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AhbFmIABljIgPhrIgShfIgdhYIgNhHIElAAIAABHIgXBiIgNBbIgrBlIgBBhIByAHIAEB3Ih3AGIgBB/g");
	var mask_5_graphics_16 = new cjs.Graphics().p("AhdGLIABmsIgPhsIgRhgIgehYIgNhGIElAAIAABGIgXBiIgMBbIgsBnIgBBcIByAPIAIB+Ih6gBIAAAxIBDADIAACQIhEABg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AAsGLIiKgBIABmsIgOhsIgShfIgehYIgMhHIEkAAIAABHIgWBiIgNBaIgrBnIgBBdIBxAOIAIB+Ih6gBIAAAyIB7AFIAACQg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_5_graphics_8,x:122.125,y:136.725}).wait(1).to({graphics:mask_5_graphics_9,x:122.125,y:141.625}).wait(1).to({graphics:mask_5_graphics_10,x:122.125,y:146.15}).wait(1).to({graphics:mask_5_graphics_11,x:122.125,y:151.3}).wait(1).to({graphics:mask_5_graphics_12,x:122.125,y:156.55}).wait(1).to({graphics:mask_5_graphics_13,x:122.125,y:162.9}).wait(1).to({graphics:mask_5_graphics_14,x:122.125,y:165.75}).wait(1).to({graphics:mask_5_graphics_15,x:124.05,y:169.05}).wait(1).to({graphics:mask_5_graphics_16,x:124.225,y:172.8}).wait(1).to({graphics:mask_5_graphics_17,x:124.3,y:172.875}).wait(1).to({graphics:null,x:0,y:0}).wait(156));

	// leg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhrFaIAAqzIBrAAIAAGHIBXAAIAABrIhXAAIAABWIBsAAIAABrg");
	this.shape_13.setTransform(128.675,175.95);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(8).to({_off:false},0).wait(166));

	// bag_outline_mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_17 = new cjs.Graphics().p("AgyAYQgDAAAFg3IBkAKIgNA0g");
	var mask_6_graphics_18 = new cjs.Graphics().p("AhCAAQgBAAAagwIAagxIBSA6IgzCJg");
	var mask_6_graphics_19 = new cjs.Graphics().p("Ah8C5QgDAACqmbIBTA6IiZGLg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AAQDzQhqhBgbhdQgahYAqiYQANgwASgxIAQgmIBrAZIg5EnICECIIgKB9QgxgOg1gig");
	var mask_6_graphics_21 = new cjs.Graphics().p("Ai/AKIAtgKIBQgnIBIiAIC6APQgMAegXApQgwBRg8AyQg7AyhgAnIhVAdg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AgnCwIAFiDIgqi0ICQg8IAIBhQAFBvgNBNQgFAigDAiIgCAmgABEjDIAAAAIAAAAg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AgsAkIguiGIBOg3IAUAjQAbAzAcBFQAeBMgDAYIhQA1gAgMiaIAAABIAAgBg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AgiAwIggiCIBNgHIACADQAKAUAcBFQALAcAFAGQABABgCAEIhQAxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_6_graphics_17,x:199.3083,y:54.3}).wait(1).to({graphics:mask_6_graphics_18,x:191.0709,y:76.5}).wait(1).to({graphics:mask_6_graphics_19,x:185.1982,y:89.425}).wait(1).to({graphics:mask_6_graphics_20,x:182.1529,y:123.45}).wait(1).to({graphics:mask_6_graphics_21,x:211.15,y:139.025}).wait(1).to({graphics:mask_6_graphics_22,x:217.2818,y:113.675}).wait(1).to({graphics:mask_6_graphics_23,x:208.3134,y:80.9}).wait(1).to({graphics:mask_6_graphics_24,x:201.7281,y:62.2}).wait(1).to({graphics:null,x:0,y:0}).wait(149));

	// bag_outline
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3BC46").ss(4,1,1).p("AAAGpQhdAAg3gxQhKhBAAiRQAAhYBRjFQArhnAzhoIAxhiIAvBjQAyBqAsBsQBQDHAABOQAACRhJBBQg4AxheAAg");
	this.shape_14.setTransform(197.9,102.65);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(17).to({_off:false},0).to({_off:true},8).wait(149));

	// bag_mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_17 = new cjs.Graphics().p("AgyAEQgIgagCgBIB5gKIAAAxIhmASIgJgeg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AgNCPQgpg6gBgFQgEgLAthgQAshegBgBIAchTIgDFQIgZBLQgCgFgog6g");
	var mask_7_graphics_19 = new cjs.Graphics().p("Ah1EEIA+iwIA0h9IBdjFIAchTIgCFPIgbBQIgnB2IgoBug");
	var mask_7_graphics_20 = new cjs.Graphics().p("AhrFNIgKjvIA+ivIA0h+IBdjFIAchTIgCFQIgbBRIgnB0IgoBvIAbB7IBGAhIgHCvg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AjrFNIgKjvIA+ivIA0h+IBejFIAchTIgDFQIgaBRIgnB0IgoBvIAbB7IBGAhIBigwIAMhlICcAaIg8DVIjVBVg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AjrFNIgKjvIA+ivIA0h+IBejFIAchTIgDFQIgaBRIgnB0IgoBvIAbB7IBGAhIBigwIAMhlIgWhXIghhrIB7gjIA1B8IAjCDIg8DVIjVBVg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AjrFNIgKjvIA+ivIA0h+IBejFIAchTIgBBDIABgCIBtDYIA6CNIA1B8IAjCDIg8DVIjVBVgAgMiXIgaBRIgnB0IgoBvIAbB7IBGAhIBigwIAMhlIgWhXIghhrIgsh5IgDgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_7_graphics_17,x:197.375,y:56.775}).wait(1).to({graphics:mask_7_graphics_18,x:192.5872,y:73.5}).wait(1).to({graphics:mask_7_graphics_19,x:186.45,y:85.15}).wait(1).to({graphics:mask_7_graphics_20,x:186.45,y:101.725}).wait(1).to({graphics:mask_7_graphics_21,x:199.25,y:101.725}).wait(1).to({graphics:mask_7_graphics_22,x:199.25,y:101.725}).wait(1).to({graphics:mask_7_graphics_23,x:199.25,y:101.725}).wait(1).to({graphics:null,x:0,y:0}).wait(150));

	// bag_outer
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnqTSQjxjVAAndQAAkjEJqFQCLlTCqlWIChlCICbFGQCmFdCOFiQEJKRAAD9QAAHdjxDVQi3Cik0AAQkzAAi3iigAj+AmQh8FcAACeQAAEiBoBzQBWBeC8AAQC9AABWheQBohzAAkiQAAiBh6lWQhlkbielsQicFXhgENg");
	this.shape_15.setTransform(197.8263,102.6035,0.3044,0.3044);
	this.shape_15._off = true;

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(17).to({_off:false},0).wait(157));

	// bag_part_01_mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_19 = new cjs.Graphics().p("AhZAZICnhcIAMApIiVBegABagaIAAAAIAAAAIAAAAg");
	var mask_8_graphics_20 = new cjs.Graphics().p("AhNAnIgegqICnhdIAMApIAkBDIhkBUg");
	var mask_8_graphics_21 = new cjs.Graphics().p("AhmAMIgegqICnhdIAMAoIBWBcIhTBzg");
	var mask_8_graphics_22 = new cjs.Graphics().p("AiZgLIgfgrICohdIANApIC7CXIhfBng");
	var mask_8_graphics_23 = new cjs.Graphics().p("AjKguIgfgrICohdIANAoIEdDUIhGBxg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_8_graphics_19,x:180.425,y:98.15}).wait(1).to({graphics:mask_8_graphics_20,x:182.2,y:101}).wait(1).to({graphics:mask_8_graphics_21,x:184.7,y:103.775}).wait(1).to({graphics:mask_8_graphics_22,x:189.85,y:106.15}).wait(1).to({graphics:mask_8_graphics_23,x:194.75,y:109.675}).wait(1).to({graphics:null,x:0,y:0}).wait(150));

	// bag_part_01
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjOAyQhFhFg3hPQgegsgPgcIE4imIAbArQAkA0AuAuQCSCTC4ApIhNFXQkfg/jajfg");
	this.shape_16.setTransform(190.7,108.4637,0.3045,0.3045);
	this.shape_16._off = true;

	var maskedShapeInstanceList = [this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(19).to({_off:false},0).wait(155));

	// bag_part_02_mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_19 = new cjs.Graphics().p("AgOhPIAsACIgKCbIgxACg");
	var mask_9_graphics_20 = new cjs.Graphics().p("Ag3hPIAtACIAzAKIAfB9IhcAUIgzACg");
	var mask_9_graphics_21 = new cjs.Graphics().p("AhuhCIAtADIBrgeIBVB6IjKA/IgzACg");
	var mask_9_graphics_22 = new cjs.Graphics().p("AiagmIAtADIBsgeIA7g4IBxBYIhYBZIjKA/IgzADg");
	var mask_9_graphics_23 = new cjs.Graphics().p("Ai8gCIAtACIBsgdIA7g3IA1hJICAA8IhEBkIhYBaIjKA/IgzACg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AjVAcIAtACIBsgeIA8g2IBSiFICUA0Ih2CoIhYBaIjKA/IgzACg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_9_graphics_19,x:178.475,y:127.475}).wait(1).to({graphics:mask_9_graphics_20,x:182.625,y:127.475}).wait(1).to({graphics:mask_9_graphics_21,x:188.15,y:126.1}).wait(1).to({graphics:mask_9_graphics_22,x:192.525,y:123.325}).wait(1).to({graphics:mask_9_graphics_23,x:195.925,y:119.7}).wait(1).to({graphics:mask_9_graphics_24,x:198.425,y:116.675}).wait(150));

	// bag_part_02
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AotCoQEyABEPlWQCIirBNiwIFECKQhqD1i6DcQlwG2nGAAg");
	this.shape_17.setTransform(198.6864,116.7906,0.3044,0.3044);
	this.shape_17._off = true;

	var maskedShapeInstanceList = [this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(19).to({_off:false},0).wait(155));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.3,210.6);


(lib.baby_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellowBar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3BD46").s().p("AAACGIAAkMIABABIAAEMg");
	this.shape.setTransform(-37.325,52.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3BD46").s().p("AhsCGIAAkMIDZABIhKEMg");
	this.shape_1.setTransform(-26.5,52.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3BD46").s().p("AjJCGIAAkMIGTACIiLEKg");
	this.shape_2.setTransform(-17.2,52.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BD46").s().p("AkWCGIgBkMIIvACIjBEKg");
	this.shape_3.setTransform(-9.45,52.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3BD46").s().p("AlTCGIgBkMIKpADIjrEJg");
	this.shape_4.setTransform(-3.25,52.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3BD46").s().p("AmCCGIgBkMIMGADIkLEJg");
	this.shape_5.setTransform(1.4,52.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(109));

	// head_outline_inner
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F3BC46").ss(2,2,1).p("AgnARQAUgOAWgIQATgIAUgF");
	this.shape_6.setTransform(9.1699,-2.5824);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F3BC46").ss(2,2,1).p("Ag4AGQAngOAqAAQARAAARAD");
	this.shape_7.setTransform(16.548,-4.298);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3BC46").ss(2,2,1).p("AhQgDQAegIAfAAQAxAAAuASQACABACAB");
	this.shape_8.setTransform(21.0307,-3.9468);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3BC46").ss(2,2,1).p("AhmgrQAJAAAIAAQAyAAAtATQAsATAiAhQAGAGAFAG");
	this.shape_9.setTransform(27.6022,-0.7445);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F3BC46").ss(2,2,1).p("AhAhZQAjASAbAcQAiAiASArQAMAcAFAd");
	this.shape_10.setTransform(36.7256,6.5256);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3BC46").ss(2,2,1).p("AAhhQQgBAwgTApQgOAmgbAe");
	this.shape_11.setTransform(40.4066,28.1809);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F3BC46").ss(2,2,1).p("ABXgsQgJALgKAKQgiAhgsATQgmAQgpAD");
	this.shape_12.setTransform(29.6848,39.3402);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F3BC46").ss(2,2,1).p("ABogKQgGADgHADQgtASgxAAQgyAAgugSQgCgBgDgB");
	this.shape_13.setTransform(19.4556,42.7546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3BC46").ss(2,2,1).p("ABNBBQgOgFgOgFQgsgTghgiQgdgcgSgk");
	this.shape_14.setTransform(4.5479,36.7979);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F3BC46").ss(2,2,1).p("AgKA5QAAgIAAgIQAAgxASgu");
	this.shape_15.setTransform(-4.497,15.4266);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F3BC46").ss(2,2,1).p("AggAtQATgrAgggQAGgHAHgG");
	this.shape_16.setTransform(-0.255,5.205);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F3BC46").ss(2,2,1).p("AgcAXQAEgEAEgEQAWgWAbgQ");
	this.shape_17.setTransform(3.7402,0.5598);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F3BC46").ss(2,2,1).p("AgSAIQANgHANgFQAGgCAGgC");
	this.shape_18.setTransform(8.6524,-2.7149);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3BC46").ss(2,2,1).p("AgJABQAJgBAKgB");
	this.shape_19.setTransform(15.0518,-4.7768);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F3BC46").ss(2,2,1).p("AgLAAQAHAAAGAAQAFAAAFAA");
	this.shape_20.setTransform(18.8281,-5.0913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(117));

	// head_outline
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F3BC46").ss(4,2,1).p("AApgaQgmAggtAX");
	this.shape_21.setTransform(42.2795,54.4205);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F3BC46").ss(4,2,1).p("ABdgjQgoAdguATQgyAVg2AI");
	this.shape_22.setTransform(34.7207,57.2418);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F3BC46").ss(4,2,1).p("ACdgeQggAVglAPQhPAhhVAAQgrAAgpgI");
	this.shape_23.setTransform(26.6692,57.8876);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F3BC46").ss(4,2,1).p("AD9AJQgWANgXAKQhPAhhWAAQhUAAhPghQhKggg5g3");
	this.shape_24.setTransform(14.677,55.3359);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F3BC46").ss(4,2,1).p("ACiCGQgugIgtgSQhLghg6g6Qg7g6gghMQgDgHgDgH");
	this.shape_25.setTransform(-4.5344,47.7406);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F3BC46").ss(4,2,1).p("ABNC2QgUgQgSgSQg6g7gghMQghhNAAhWQAAgTABgT");
	this.shape_26.setTransform(-14.7332,34.6023);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F3BC46").ss(4,2,1).p("AgOCUQgMgxAAgzQAAhVAghPQAHgOAHgO");
	this.shape_27.setTransform(-20.5931,14.7124);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F3BC46").ss(4,2,1).p("AhVB0QAHgWAIgUQAghLA6g7QAdgdAigX");
	this.shape_28.setTransform(-12.8686,-4.3064);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F3BC46").ss(4,2,1).p("AiMBMQAPgTARgRQA7g6BKggQA7gZA/gG");
	this.shape_29.setTransform(0.0285,-14.391);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F3BC46").ss(4,2,1).p("AiAgHQAvgLAwAAQBTAABMAf");
	this.shape_30.setTransform(22.3815,-20.9057);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F3BC46").ss(4,2,1).p("AhOgsQAUAHAUAIQA+AbA0As");
	this.shape_31.setTransform(39.3436,-16.4439);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F3BC46").ss(4,2,1).p("Agyg0QAaATAXAXQAdAdAXAi");
	this.shape_32.setTransform(49.0526,-9.3224);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F3BC46").ss(4,2,1).p("Agdg3QAgArAVAxQAFALADAK");
	this.shape_33.setTransform(55.5773,-0.6477);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F3BC46").ss(4,2,1).p("AgEg2QANA0AAA3QAAADAAAE");
	this.shape_34.setTransform(60.3922,14.2172);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F3BC46").ss(4,2,1).p("AAMgiQgIAigNAh");
	this.shape_35.setTransform(59.0528,32.4847);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F3BC46").ss(4,2,1).p("AAMgOQgLAOgMAP");
	this.shape_36.setTransform(52.0862,45.7763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(116));

	// hair
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhOAvQAAgsARgoIAEgJQAQAIAnAIQAsAKAlALQgWAXAAAhg");
	this.shape_37.setTransform(19.8375,-23.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhYBfQAAgsARgpQAQgmAfgfQAVgVAYgOIAYApQAbAsARAgQgKAFgIAJQgYAYAAAig");
	this.shape_38.setTransform(20.8,-28.4125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhtBtQABgsAQgoQARgnAegeQAfgeAmgRQApgRAtAAIAACHQgjgBgZAZQgYAYAAAig");
	this.shape_39.setTransform(22.85,-29.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},10).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(121));

	// head
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhDAyQgGgQgJgsIgIgjQAigQAdgYIARANQAkAdBBAiIgDACQg6A6hLAgIgHADQgMgagDgKg");
	this.shape_40.setTransform(40.075,50.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AicBlQAKgrAGgWIAXhHQAsgEApgRQAmgRAggbIARANQAlAdBBAhIgDADQg6A6hMAgQhOAhhWAAIgMAAg");
	this.shape_41.setTransform(33.4625,51.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AjjBIIADgHIBIhuQAnALAoAAQA7AAA0gWQAngRAggbIARANQAlAdBBAhIgDADQg6A6hMAgQhPAhhVAAQhQAAhKgdg");
	this.shape_42.setTransform(26.35,51.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiVBMQhLghg7g5QgRgRgPgTQAYgJAWgKIBKgiIAKgFQAnAmAyAVQA2AXA5AAQA6AAA1gXQAngQAhgbIARANQAlAdBAAhIgCADQg7A5hMAhQhOAhhWAAQhVAAhPghg");
	this.shape_43.setTransform(17.525,50.9125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhsCHQhLghg7g6Qg7g6gghMQgPgkgIgmIA5AAIBTgDIAJAYQAVA0AoAoQAoAnAzAVQA2AXA5AAQA6AAA1gXQAngPAhgbIARANQAkAcBBAhIgCADQg7A6hMAhQhOAhhWAAQhVAAhPghg");
	this.shape_44.setTransform(13.4375,45.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhnDeQhLggg7g7Qg7g6gghLQghhPAAhWQAAgsAJgrIAUAFIA0ANQAZAGAjAMQgFAZAAAaQAAA7AXA1QAVAzAoAnQAnAoA0AWQA1AWA5AAQA7AAA1gWQAngRAggbIARANQAlAdBBAiIgDACQg6A7hMAgQhPAhhWAAQhUAAhPghg");
	this.shape_45.setTransform(12.95,36.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhnEyQhLghg7g6Qg7g7gghMQghhOAAhVQAAhWAhhPQAUgwAggqQBFBFAeAaQgPAXgKAZQgXA2AAA6QAAA6AXA0QAVA0AoAoQAnAnA0AWQA1AXA5AAQA7AAA1gXQAngRAggaIARANQAlAdBBAhIgDADQg6A6hMAhQhPAhhWAAQhUAAhPghg");
	this.shape_46.setTransform(12.95,27.9375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhnFuQhLghg7g6Qg7g7gghMQghhOAAhVQAAhWAhhPQAghLA7g7QAuguA3geQARA5AZA1IAJASQgfASgZAaQgoAogVAzQgXA2AAA6QAAA5AXA1QAVA0AoAoQAnAnA0AWQA1AXA5AAQA7AAA1gXQAngRAggaIARANQAlAdBBAhIgDADQg6A6hMAhQhPAhhWAAQhUAAhPghg");
	this.shape_47.setTransform(12.95,21.9375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhnGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBUAAIAGAAIgBAUQgDA1gRA/QgxADguAUQg0AWgnAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAnAnA0AXQA1AWA5AAQA7AAA1gWQAngRAggbIARANQAlAdBBAhIgDADQg6A7hMAgQhPAhhWAAQhUAAhPghg");
	this.shape_48.setTransform(12.95,19.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhnGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBUAAQBWAABPAiQAVAIAUALQhFBAglAlQgwgSg0AAQg5AAg1AXQg0AWgnAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAnAnA0AXQA1AWA5AAQA7AAA1gWQAngRAggbIARANQAlAdBBAhIgDADQg6A7hMAgQhPAhhWAAQhUAAhPghg");
	this.shape_49.setTransform(12.95,19.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhqGGQhMggg6g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA6g7BMgfQBPgiBUAAQBWAABPAiQBMAfA6A7IAJAJIgQAIQg/Adg0AbQgegXgjgPQg1gXg7AAQg5AAg1AXQg0AWgnAoQgoAngWA0QgWA1AAA5QAAA7AWA1QAWAzAoAoQAnAnA0AXQA1AWA5AAQA7AAA1gWQAngRAggbIARANQAlAdBBAhIgDADQg6A7hMAgQhPAhhWAAQhUAAhPghg");
	this.shape_50.setTransform(13.2625,19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiEGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBVAAQBWAABOAiQBMAfA7A7QAiAjAaApIguAOIg5ARIgkAJIgRgTQgogog0gWQg1gXg6AAQg5AAg2AXQgzAWgoAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAoAnAzAXQA2AWA5AAQA6AAA1gWQAngRAhgbIARANQAkAdBBAhIgCADQg7A7hMAgQhOAhhWAAQhVAAhPghg");
	this.shape_51.setTransform(15.8375,19.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AidGGQhMggg6g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA6g7BMgfQBPgiBUAAQBWAABPAiQBMAfA6A7QA7A7AgBMQANAdAHAfIgxgFQgbgDgtABIgYAAIAAAAQgWg0gognQgogogzgWQg1gXg7AAQg5AAg1AXQg0AWgnAoQgoAngWA0QgWA1AAA5QAAA7AWA1QAWAzAoAoQAnAnA0AXQA1AWA5AAQA7AAA1gWQAngRAggbIARANQAlAdBBAhIgDADQg6A7hMAgQhPAhhWAAQhUAAhPghg");
	this.shape_52.setTransform(18.3875,19.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AikGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBVAAQBWAABOAiQBMAfA7A7QA6A7AhBMQAhBOAABVQAAAigFAhIiEg4IABgLQAAg5gXg1QgWg0gngnQgogog0gWQg1gXg6AAQg5AAg2AXQgzAWgoAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAoAnAzAXQA2AWA5AAQA6AAA1gWQAngRAhgbIARANQAlAdBAAhIgCADQg7A7hMAgQhOAhhWAAQhVAAhPghg");
	this.shape_53.setTransform(19.025,19.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AikGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBVAAQBWAABOAiQBMAfA7A7QA6A7AhBMQAhBOAABVQAABWghBOQgHARgJAQQhGgkgsghIgDgCIAHgOQAXg1AAg7QAAg5gXg1QgWg0gngnQgogog0gWQg1gXg6AAQg5AAg2AXQgzAWgoAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAoAnAzAXQA2AWA5AAQA6AAA1gWQAngRAhgbIARANQAlAdBAAhIgCADQg7A7hMAgQhOAhhWAAQhVAAhPghg");
	this.shape_54.setTransform(19.025,19.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AikGGQhLggg7g7Qg7g6gghNQghhOAAhWQAAhVAhhOQAghMA7g7QA7g7BLgfQBPgiBVAAQBWAABOAiQBMAfA7A7QA6A7AhBMQAhBOAABVQAABWghBOQghBNg6A6Qg7A7hMAgQhOAhhWAAQhVAAhPghgAhvkHQgzAWgoAoQgoAngVA0QgXA1AAA5QAAA7AXA1QAVAzAoAoQAoAnAzAXQA2AWA5AAQA6AAA1gWQA0gXAognQAngoAWgzQAXg1AAg7QAAg5gXg1QgWg0gngnQgogog0gWQg1gXg6AAQg5AAg2AXg");
	this.shape_55.setTransform(19.025,19.5);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(16).to({_off:false},0).wait(117));

	// strap_yellow
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3BC46").s().p("AgxBhQgTgbgRgRIgLgMIgUgbICEiEQA0AsAxAvIiSCSIgUgWg");
	this.shape_56.setTransform(27.9375,61.6375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3BC46").s().p("AmfGYIACgCIgBADgAicCUIABAAIAFAFIACADIgIgIgAArCIIhJhQIgHgLIgHgJIBxhxIAIAFQASALAWATIAkAiIAVARIiBCBIgCgCgAC1i9IABgBIAAACIgBgBgAGQmYIAQAQIgUAQIg4AvQghAbgaAQIgFACg");
	this.shape_57.setTransform(11.5875,68.5375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F3BC46").s().p("AjFDKIgYgdIA6g6IAfAiIAjAoIAYAcIg3A3QggglglghgADekPIgTAXQgLAMgJAFg");
	this.shape_58.setTransform(10.625,73.5625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3BC46").s().p("AmhFoIAagZQAIAMANAPQAgAhApAmIgYAXgAGPnHIATATQgcAGgaAKg");
	this.shape_59.setTransform(11.7125,73.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},21).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).wait(108));

	// strap
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgzgtIAIgEIBfBfIgIAEg");
	this.shape_60.setTransform(56.025,32.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AiEAjICoilIBhBgIipClg");
	this.shape_61.setTransform(47.95,40.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AjVB0IFKlHIBhBgIlLFHg");
	this.shape_62.setTransform(39.85,48.875);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AkmDGIHsnrIBhBgIntHrg");
	this.shape_63.setTransform(31.775,57.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Al3EXIKOqNIBhBgIqPKNg");
	this.shape_64.setTransform(23.675,65.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AnIFoIMwsvIBhBgIswMvg");
	this.shape_65.setTransform(15.6,73.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},19).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(109));

	// body_outline
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F3BC46").ss(4,2,1).p("AgJAAIATAA");
	this.shape_66.setTransform(-18.05,25.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F3BC46").ss(4,2,1).p("AhHASQAugsBAAAIAqAA");
	this.shape_67.setTransform(-25.0891,28.3266);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F3BC46").ss(4,2,1).p("AhICeIAAiaQAAhBAwgvQAngpA4gG");
	this.shape_68.setTransform(-30.0161,41.3161);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F3BC46").ss(4,2,1).p("AAAB6IAAjz");
	this.shape_69.setTransform(-37.3,69.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F3BC46").ss(4,2,1).p("AAAChQgBgaAAgaIAAkO");
	this.shape_70.setTransform(-37.1035,90.834);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F3BC46").ss(4,2,1).p("AAtCeQghgxgVg3QgrhnAAhvIAAgF");
	this.shape_71.setTransform(-32.0249,117.8502);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F3BC46").ss(4,2,1).p("ABbB7QgjgbgfgiQhKhOgohkQgCgEgBgE");
	this.shape_72.setTransform(-24.036,134.914);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F3BC46").ss(4,2,1).p("AB4BEQgugMgsgVQhQglhBg9");
	this.shape_73.setTransform(-7.4021,150.0604);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F3BC46").ss(4,2,1).p("AC3AUQg6AMg9AAQgKAAgKAAQhsgEhkguQgIgDgHgE");
	this.shape_74.setTransform(12.0911,155.4026);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#F3BC46").ss(4,2,1).p("ADZhQQgIAHgIAIQhOBLhkAoQhjAohtAAQgKAAgKAAQgJgBgIAA");
	this.shape_75.setTransform(37.0741,149.6735);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F3BC46").ss(4,2,1).p("ACHiNQgsBohSBOQhAA/hPAm");
	this.shape_76.setTransform(56.3257,138.9243);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F3BC46").ss(4,2,1).p("AAeiSIAAAxQAABxgrBoQgEAKgFAK");
	this.shape_77.setTransform(71.2533,112.7342);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F3BC46").ss(4,2,1).p("AAAhrIAADX");
	this.shape_78.setTransform(74.25,87.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#F3BC46").ss(4,2,1).p("AAAhmIAADO");
	this.shape_79.setTransform(74.25,75.35);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F3BC46").ss(4,2,1).p("AAAg7IAAB3");
	this.shape_80.setTransform(74.25,53.5125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F3BC46").ss(4,2,1).p("AgpgiQAfALAZAZQAPAPAKAR");
	this.shape_81.setTransform(68.0598,30.0973);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F3BC46").ss(4,2,1).p("AgIAAIARAA");
	this.shape_82.setTransform(54.475,25.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},3).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(114));

	// baby_body
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgBBEQgRhAgWhGIALgBIBHAAIAACHg");
	this.shape_83.setTransform(-18.2,32.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAFBMQgjgVhFg2IgEgCQAKgPANgNQAvgwBCAAIBHAAIAACHIhHAAQgKAAgIAIQgFAFgCAHg");
	this.shape_84.setTransform(-24.4625,33.4125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhzCyIAAjIQAAhDAvgvQAvgwBCAAIBHAAIAACIIhHAAQgKABgIAHQgHAHAAALIAADOIiHgGg");
	this.shape_85.setTransform(-25.675,44.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhziPQAAhCAvgvQAvgwBCAAIBHAAIAACIIhHAAQgKAAgIAIQgHAHAAAKIAAG+Ig0AAQgsgBgbACIgMABg");
	this.shape_86.setTransform(-25.675,56.1125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhpGzQgKg2AAg3IAApXQAAhDAvgvQAvgvBCAAIBHAAIAACIIhHAAQgKAAgIAHQgHAIAAAKIAAJXQAAA3ANA1IhKABIhAAAg");
	this.shape_87.setTransform(-25.675,69.1697);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhJGlQgqhoAAhvIAApXQAAhDAvgvQAvgvBCAAIBHAAIAACIIhHAAQgKAAgIAHQgHAIAAAKIAAJXQAABVAgBOQAWA3AjAuIg0ApIg2AsQgug9gehJg");
	this.shape_88.setTransform(-25.675,81.1625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgDIWQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBCAAIBHAAIAACIIhHAAQgKAAgHAHQgIAIAAAKIAAJXQAABVAfBOQAfBNA4A8QAgAiAlAZIgMAZQgcA4gWApQg5glgugyg");
	this.shape_89.setTransform(-21.1125,87.75);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("ABRJoQhggthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA3A8QA5A8BJAjQA1AZA6AJIgHCIQhTgLhNgkg");
	this.shape_90.setTransform(-12.5125,91.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ACrKZQhtgEhjgvQhggthLhPQhKhPgphkQgqhnAAhwIAApXQAAhDAvguQAvgwBDAAIBHAAIAACIIhHAAQgKAAgIAHQgHAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA4A8BIAjQBMAjBSADQBLADBEgXIAcBMIATA0QhUAchaAAIgVAAg");
	this.shape_91.setTransform(-0.675,92.15);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAqKZQhsgEhkgvQhggthLhPQhKhPgphkQgqhnAAhwIAApXQAAhDAvguQAvgwBDAAIBHAAIAACIIhHAAQgKAAgIAHQgHAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA4A8BJAjQBMAjBRADQBXADBPgfQBQgeA+g8QASgRAPgSIBMA7IAfAZQgVAZgYAYQhPBMhkAoQhjAohtAAIgVAAg");
	this.shape_92.setTransform(12.225,92.15);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgGKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAJgXAHgYIASAJQAqAUBDAWQgIAZgKAYQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_93.setTransform(17.175,92.15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgTKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAhhPAAhXIAAhnIB0gBIAUAAIAABoQAABzgsBoQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_94.setTransform(18.475,92.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgTKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAhhPAAhXIAAklICIgJIAAEuQAABzgsBoQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_95.setTransform(18.475,92.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgTKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAhhPAAhXIAAm7IBQAAIA4AAIAAG7QAABzgsBoQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_96.setTransform(18.475,92.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgTKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAhhPAAhXIAAooIABgBIAdgPQASgJBFgeIATgJIAAAGIAAJiQAABzgsBoQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_97.setTransform(18.475,92.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgTKZQhtgEhkgvQhhgthKhPQhLhPgohkQgrhnAAhwIAApXQAAhDAwguQAvgwBDAAIBHAAIAACIIhHAAQgLAAgHAHQgIAIAAAKIAAJXQAABVAgBOQAfBNA4A8QA5A8BJAjQBLAjBTADQBVADBQgfQBQgeA+g8QA+g9AihNQAhhPAAhXIAApiQAAgGgDgGQgBhFAEhOQAyAHAnAnQAvAuAABDIAAJiQAABzgsBoQgsBohTBPQhOBMhkAoQhkAohtAAIgTAAg");
	this.shape_98.setTransform(18.475,92.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTKaQhtgFhkgvQhhgshKhQQhLhPgohkQgrhnAAhvIAApXQAAhDAvgvQAwgwBCAAIBIAAIAACIIhIAAQgKABgIAHQgHAHAAALIAAJXQAABUAgBPQAfBMA4A9QA4A7BKAjQBLAjBSAEQBWACBQgeQBQgeA+g8QA+g9AhhOQAihOAAhXIAApiQAAgHgDgFIAAgCIgFgFQgHgHgLgBIhHAAIAAiHIBHAAQBDgBAwAwQAvAvAABDIAAAMIAAAAIAAJXQgBBzgsBnQgrBohTBPQhOBMhlAoQhjAohtABIgTAAg");
	this.shape_99.setTransform(18.5,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83}]},3).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(114));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-40.8,115.6,201.60000000000002);


(lib.diagonal_mask = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._970x250_diagonal();
	this.instance.setTransform(-757,-285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diagonal_mask, new cjs.Rectangle(-757,-285,1814,594), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A7xG/IAAt9MA3jAAAIAAN9g");
	mask.setTransform(177.825,44.675);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.5878,0.5878);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,355.6,89.4), null);


(lib.BSWH_Logo_H = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo_H, new cjs.Rectangle(0,0,1051.5,188), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A7xG/IAAt9MA3jAAAIAAN9g");
	mask.setTransform(177.825,44.675);

	// Layer_3
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(177.8,44.6,1,1,0,0,0,177.8,44.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,355.7,89.4), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(177.8,44.6,1,1,0,0,0,177.8,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,355.7,89.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group();
	this.instance.setTransform(238.2,53.9,1,1,0,0,0,177.8,44.6);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(60.4,9.3,355.70000000000005,89.4), null);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AFtBaQgSgIgNgNQgNgNgIgSQgHgRAAgVQAAgTAHgSQAIgSANgNQANgNASgIQARgHAVgBQAUABASAHQASAIANANQANANAIASQAHASAAATQAAAVgHARQgIASgNANQgNANgSAIQgSAHgUAAQgVAAgRgHgAF7g3QgLAFgIAHQgIAJgFALQgEAMAAALQAAAMAEAMQAFALAIAJQAIAIALAEQALAGANgBQANABALgGQALgEAIgIQAIgJAFgLQAEgMAAgMQAAgLgEgMQgFgLgIgJQgIgHgLgFQgMgFgMgBQgNABgLAFgAK/BfIAAi9ICAAAIAAAiIhbAAIAAArIBbAAIAAAiIhbAAIAAArIBbAAIAAAjgAJ+BfIgeg8IgrAAIAAA8IglAAIAAi9IBNAAQARAAANAFQAMAFAJAJQAJAJAFALQAFAMAAAOQAAARgJAOQgIAQgQAHIAlBGgAI1ABIAmAAQAJAAAGgBQAHgDAEgEQAFgFACgFQACgGAAgGQAAgOgJgJQgJgIgRAAIgmAAgADyBfIAAiEIg5BLIg4hKIAACDIgkAAIAAi9IAkAAIA4BOIA6hOIAiAAIAAC9gAgkBfIhWiEIAACEIgkAAIAAi9IAoAAIBTCAIAAiAIAjAAIAAC9gAjeBfIgfg8IgqAAIAAA8IglAAIAAi9IBNAAQAQAAANAFQANAFAJAJQAJAJAFALQAFAMAAAOQAAARgJAOQgJAQgQAHIAmBGgAknABIAlAAQAJAAAHgBQAGgDAFgEQAEgFACgFQACgGAAgGQAAgOgIgJQgJgIgSAAIglAAgAmGBfIgMgiIhQAAIgMAiIgmAAIBIi9IAkAAIBIC9gAmfAbIgbhKIgbBKIA2AAgAqmBfIAAi9ICAAAIAAAiIhbAAIAAArIBbAAIAAAiIhbAAIAAArIBbAAIAAAjgAs+BfIAAi9IAlAAIAACaIBYAAIAAAjg");
	this.shape.setTransform(194.275,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// gradient_diagonal
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B48DBF","#AC85B7"],[0,1],-81,0,161.3,0).s().p("AspEqIJVpTIP+AAIAAJTg");
	this.shape_1.setTransform(236,50.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD7DB7").s().p("AzPEqIAApUMAmfAAAIAAJVg");
	this.shape_2.setTransform(193.825,50.2625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(195.6,50.2,0.7708,1,0,0,0,235.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_btn, new cjs.Rectangle(60.4,9.3,274.20000000000005,89.4), null);


// stage content:
(lib.BSWH_LD_icons_320x50_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A41jvMAxrAAAIAAHfMgxrAAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(348));

	// diagonal_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_198 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_199 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_200 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_201 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_202 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_203 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_204 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_205 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_206 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_207 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_208 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_209 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_210 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_211 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_212 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_213 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_214 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_215 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_216 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_217 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_218 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_219 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_220 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_221 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_222 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_223 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_224 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_225 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_226 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_227 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_228 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_229 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_230 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_231 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_232 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_233 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_234 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_235 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_236 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_237 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_238 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_239 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_240 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_241 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_242 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_243 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_244 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_245 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_246 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_247 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_248 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_249 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_250 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_251 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_252 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_253 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	var mask_graphics_254 = new cjs.Graphics().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_graphics_198,x:1253.925,y:-401.875}).wait(1).to({graphics:mask_graphics_199,x:1231.175,y:-404.025}).wait(1).to({graphics:mask_graphics_200,x:1208.725,y:-406.175}).wait(1).to({graphics:mask_graphics_201,x:1186.725,y:-408.275}).wait(1).to({graphics:mask_graphics_202,x:1165.025,y:-410.325}).wait(1).to({graphics:mask_graphics_203,x:1143.725,y:-412.375}).wait(1).to({graphics:mask_graphics_204,x:1122.775,y:-414.375}).wait(1).to({graphics:mask_graphics_205,x:1102.175,y:-416.325}).wait(1).to({graphics:mask_graphics_206,x:1081.975,y:-418.275}).wait(1).to({graphics:mask_graphics_207,x:1062.125,y:-420.125}).wait(1).to({graphics:mask_graphics_208,x:1042.625,y:-421.975}).wait(1).to({graphics:mask_graphics_209,x:1023.525,y:-423.825}).wait(1).to({graphics:mask_graphics_210,x:1004.775,y:-425.625}).wait(1).to({graphics:mask_graphics_211,x:986.375,y:-427.375}).wait(1).to({graphics:mask_graphics_212,x:968.325,y:-429.075}).wait(1).to({graphics:mask_graphics_213,x:950.675,y:-430.775}).wait(1).to({graphics:mask_graphics_214,x:933.325,y:-432.425}).wait(1).to({graphics:mask_graphics_215,x:916.425,y:-434.025}).wait(1).to({graphics:mask_graphics_216,x:899.825,y:-435.575}).wait(1).to({graphics:mask_graphics_217,x:883.625,y:-437.125}).wait(1).to({graphics:mask_graphics_218,x:867.775,y:-438.675}).wait(1).to({graphics:mask_graphics_219,x:852.325,y:-440.125}).wait(1).to({graphics:mask_graphics_220,x:837.175,y:-441.575}).wait(1).to({graphics:mask_graphics_221,x:822.425,y:-442.975}).wait(1).to({graphics:mask_graphics_222,x:808.025,y:-444.325}).wait(1).to({graphics:mask_graphics_223,x:794.025,y:-445.675}).wait(1).to({graphics:mask_graphics_224,x:780.375,y:-446.975}).wait(1).to({graphics:mask_graphics_225,x:767.075,y:-448.225}).wait(1).to({graphics:mask_graphics_226,x:754.125,y:-449.475}).wait(1).to({graphics:mask_graphics_227,x:741.575,y:-450.675}).wait(1).to({graphics:mask_graphics_228,x:729.375,y:-451.825}).wait(1).to({graphics:mask_graphics_229,x:717.525,y:-452.975}).wait(1).to({graphics:mask_graphics_230,x:706.025,y:-454.075}).wait(1).to({graphics:mask_graphics_231,x:694.925,y:-455.125}).wait(1).to({graphics:mask_graphics_232,x:684.175,y:-456.125}).wait(1).to({graphics:mask_graphics_233,x:673.825,y:-457.125}).wait(1).to({graphics:mask_graphics_234,x:663.775,y:-458.075}).wait(1).to({graphics:mask_graphics_235,x:654.125,y:-458.975}).wait(1).to({graphics:mask_graphics_236,x:644.825,y:-459.875}).wait(1).to({graphics:mask_graphics_237,x:635.925,y:-460.725}).wait(1).to({graphics:mask_graphics_238,x:627.375,y:-461.525}).wait(1).to({graphics:mask_graphics_239,x:619.175,y:-462.325}).wait(1).to({graphics:mask_graphics_240,x:611.325,y:-463.075}).wait(1).to({graphics:mask_graphics_241,x:603.875,y:-463.775}).wait(1).to({graphics:mask_graphics_242,x:596.725,y:-464.475}).wait(1).to({graphics:mask_graphics_243,x:590.025,y:-465.125}).wait(1).to({graphics:mask_graphics_244,x:583.625,y:-465.725}).wait(1).to({graphics:mask_graphics_245,x:577.625,y:-466.275}).wait(1).to({graphics:mask_graphics_246,x:571.975,y:-466.825}).wait(1).to({graphics:mask_graphics_247,x:566.725,y:-467.325}).wait(1).to({graphics:mask_graphics_248,x:561.775,y:-467.775}).wait(1).to({graphics:mask_graphics_249,x:557.225,y:-468.225}).wait(1).to({graphics:mask_graphics_250,x:553.025,y:-468.625}).wait(1).to({graphics:mask_graphics_251,x:549.225,y:-468.975}).wait(1).to({graphics:mask_graphics_252,x:545.775,y:-469.325}).wait(1).to({graphics:mask_graphics_253,x:542.675,y:-469.625}).wait(1).to({graphics:mask_graphics_254,x:539.925,y:-469.875}).wait(94));

	// BSWH_Logo
	this.instance = new lib.BSWH_Logo_H();
	this.instance.setTransform(149.2,11.5,0.147,0.147);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198).to({_off:false},0).to({alpha:1},15).wait(135));

	// cta_btn
	this.instance_1 = new lib.cta_btn();
	this.instance_1.setTransform(58.9,25.75,0.3117,0.3117,0,0,0,197.3,53.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},0).to({alpha:1},17).wait(124));

	// diagonal_endFrame
	this.instance_2 = new lib.diagonal_mask();
	this.instance_2.setTransform(570.4,29.85,0.2962,0.2962,180,0,0,-0.7,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(198).to({_off:false},0).to({regY:0.7,scaleX:0.1467,scaleY:0.1467,x:163.25},34,cjs.Ease.quadOut).wait(116));

	// diagonal_mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B482BA").s().p("EjZdgkfMDjHi2YMDP0D/XMjjHC2Yg");
	this.shape_1.setTransform(1253.925,-401.875);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(198).to({_off:false},0).wait(1).to({x:1231.175,y:-404.025},0).wait(1).to({x:1208.725,y:-406.175},0).wait(1).to({x:1186.725,y:-408.275},0).wait(1).to({x:1165.025,y:-410.325},0).wait(1).to({x:1143.725,y:-412.375},0).wait(1).to({x:1122.775,y:-414.375},0).wait(1).to({x:1102.175,y:-416.325},0).wait(1).to({x:1081.975,y:-418.275},0).wait(1).to({x:1062.125,y:-420.125},0).wait(1).to({x:1042.625,y:-421.975},0).wait(1).to({x:1023.525,y:-423.825},0).wait(1).to({x:1004.775,y:-425.625},0).wait(1).to({x:986.375,y:-427.375},0).wait(1).to({x:968.325,y:-429.075},0).wait(1).to({x:950.675,y:-430.775},0).wait(1).to({x:933.325,y:-432.425},0).wait(1).to({x:916.425,y:-434.025},0).wait(1).to({x:899.825,y:-435.575},0).wait(1).to({x:883.625,y:-437.125},0).wait(1).to({x:867.775,y:-438.675},0).wait(1).to({x:852.325,y:-440.125},0).wait(1).to({x:837.175,y:-441.575},0).wait(1).to({x:822.425,y:-442.975},0).wait(1).to({x:808.025,y:-444.325},0).wait(1).to({x:794.025,y:-445.675},0).wait(1).to({x:780.375,y:-446.975},0).wait(1).to({x:767.075,y:-448.225},0).wait(1).to({x:754.125,y:-449.475},0).wait(1).to({x:741.575,y:-450.675},0).wait(1).to({x:729.375,y:-451.825},0).wait(1).to({x:717.525,y:-452.975},0).wait(1).to({x:706.025,y:-454.075},0).wait(1).to({x:694.925,y:-455.125},0).wait(1).to({x:684.175,y:-456.125},0).wait(1).to({x:673.825,y:-457.125},0).wait(1).to({x:663.775,y:-458.075},0).wait(1).to({x:654.125,y:-458.975},0).wait(1).to({x:644.825,y:-459.875},0).wait(1).to({x:635.925,y:-460.725},0).wait(1).to({x:627.375,y:-461.525},0).wait(1).to({x:619.175,y:-462.325},0).wait(1).to({x:611.325,y:-463.075},0).wait(1).to({x:603.875,y:-463.775},0).wait(1).to({x:596.725,y:-464.475},0).wait(1).to({x:590.025,y:-465.125},0).wait(1).to({x:583.625,y:-465.725},0).wait(1).to({x:577.625,y:-466.275},0).wait(1).to({x:571.975,y:-466.825},0).wait(1).to({x:566.725,y:-467.325},0).wait(1).to({x:561.775,y:-467.775},0).wait(1).to({x:557.225,y:-468.225},0).wait(1).to({x:553.025,y:-468.625},0).wait(1).to({x:549.225,y:-468.975},0).wait(1).to({x:545.775,y:-469.325},0).wait(1).to({x:542.675,y:-469.625},0).wait(1).to({x:539.925,y:-469.875},0).wait(94));

	// background_pink (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_88 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAICbCaMAvTAvKMjBaCcfg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_156 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_160 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EjPyg2cMDD6iFVMCp9CpgIAAAAICbCaMAvTAvKMjBaCcfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_1_graphics_88,x:-1016.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_89,x:-1001.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_90,x:-986.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_91,x:-971.425,y:236.575}).wait(1).to({graphics:mask_1_graphics_92,x:-956.625,y:236.575}).wait(1).to({graphics:mask_1_graphics_93,x:-941.975,y:236.575}).wait(1).to({graphics:mask_1_graphics_94,x:-927.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_95,x:-913.125,y:236.575}).wait(1).to({graphics:mask_1_graphics_96,x:-898.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_97,x:-884.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_98,x:-870.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_99,x:-857.125,y:236.575}).wait(1).to({graphics:mask_1_graphics_100,x:-843.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_101,x:-830.025,y:236.575}).wait(1).to({graphics:mask_1_graphics_102,x:-816.675,y:236.575}).wait(1).to({graphics:mask_1_graphics_103,x:-803.525,y:236.575}).wait(1).to({graphics:mask_1_graphics_104,x:-790.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_105,x:-777.575,y:236.575}).wait(1).to({graphics:mask_1_graphics_106,x:-764.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_107,x:-752.225,y:236.575}).wait(1).to({graphics:mask_1_graphics_108,x:-739.775,y:236.575}).wait(1).to({graphics:mask_1_graphics_109,x:-727.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_110,x:-715.325,y:236.575}).wait(1).to({graphics:mask_1_graphics_111,x:-703.325,y:236.575}).wait(1).to({graphics:mask_1_graphics_112,x:-691.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_113,x:-679.775,y:236.575}).wait(1).to({graphics:mask_1_graphics_114,x:-668.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_115,x:-656.775,y:236.575}).wait(1).to({graphics:mask_1_graphics_116,x:-645.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_117,x:-634.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_118,x:-623.425,y:236.575}).wait(1).to({graphics:mask_1_graphics_119,x:-612.575,y:236.575}).wait(1).to({graphics:mask_1_graphics_120,x:-601.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_121,x:-591.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_122,x:-580.975,y:236.575}).wait(1).to({graphics:mask_1_graphics_123,x:-570.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_124,x:-560.625,y:236.575}).wait(1).to({graphics:mask_1_graphics_125,x:-550.675,y:236.575}).wait(1).to({graphics:mask_1_graphics_126,x:-540.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_127,x:-531.225,y:236.575}).wait(1).to({graphics:mask_1_graphics_128,x:-521.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_129,x:-512.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_130,x:-503.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_131,x:-494.125,y:236.575}).wait(1).to({graphics:mask_1_graphics_132,x:-485.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_133,x:-476.425,y:236.575}).wait(1).to({graphics:mask_1_graphics_134,x:-467.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_135,x:-459.325,y:236.575}).wait(1).to({graphics:mask_1_graphics_136,x:-451.025,y:236.575}).wait(1).to({graphics:mask_1_graphics_137,x:-442.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_138,x:-434.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_139,x:-426.925,y:236.575}).wait(1).to({graphics:mask_1_graphics_140,x:-419.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_141,x:-411.575,y:236.575}).wait(1).to({graphics:mask_1_graphics_142,x:-404.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_143,x:-396.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_144,x:-389.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_145,x:-382.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_146,x:-375.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_147,x:-369.125,y:236.575}).wait(1).to({graphics:mask_1_graphics_148,x:-362.575,y:236.575}).wait(1).to({graphics:mask_1_graphics_149,x:-356.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_150,x:-349.925,y:236.575}).wait(1).to({graphics:mask_1_graphics_151,x:-343.775,y:236.575}).wait(1).to({graphics:mask_1_graphics_152,x:-337.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_153,x:-332.025,y:236.575}).wait(1).to({graphics:mask_1_graphics_154,x:-326.325,y:236.575}).wait(1).to({graphics:mask_1_graphics_155,x:-320.825,y:236.575}).wait(1).to({graphics:mask_1_graphics_156,x:-315.425,y:236.575}).wait(1).to({graphics:mask_1_graphics_157,x:-310.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_158,x:-305.075,y:236.575}).wait(1).to({graphics:mask_1_graphics_159,x:-300.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_160,x:-295.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_161,x:-290.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_162,x:-286.225,y:236.575}).wait(1).to({graphics:mask_1_graphics_163,x:-281.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_164,x:-277.675,y:236.575}).wait(1).to({graphics:mask_1_graphics_165,x:-273.625,y:236.575}).wait(1).to({graphics:mask_1_graphics_166,x:-269.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_167,x:-265.975,y:236.575}).wait(1).to({graphics:mask_1_graphics_168,x:-262.325,y:236.575}).wait(1).to({graphics:mask_1_graphics_169,x:-258.875,y:236.575}).wait(1).to({graphics:mask_1_graphics_170,x:-255.575,y:236.575}).wait(1).to({graphics:mask_1_graphics_171,x:-252.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_172,x:-249.375,y:236.575}).wait(1).to({graphics:mask_1_graphics_173,x:-246.475,y:236.575}).wait(1).to({graphics:mask_1_graphics_174,x:-243.725,y:236.575}).wait(1).to({graphics:mask_1_graphics_175,x:-241.175,y:236.575}).wait(1).to({graphics:mask_1_graphics_176,x:-238.725,y:236.575}).wait(172));

	// Txt_Frame_02
	this.instance_3 = new lib.text_02();
	this.instance_3.setTransform(116.5,42.15,0.4951,0.4951,0,0,0,171.4,35.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({alpha:1},12).wait(236));

	// diagonal
	this.instance_4 = new lib.diagonal_mask();
	this.instance_4.setTransform(-938,-211.7,1.1025,1.1025,0,0,0,-90,-136.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(178).to({_off:false},0).to({regX:-89.8,regY:-136.5,scaleX:0.4205,scaleY:0.4205,x:258,y:-41.6},45).to({_off:true},1).wait(124));

	// diagonal
	this.instance_5 = new lib.diagonal_mask();
	this.instance_5.setTransform(-872.75,71.6,0.9469,0.9469,0,0,0,-0.4,1.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).to({x:519.25},89).to({_off:true},1).wait(170));

	// baby
	this.instance_6 = new lib.baby_mc("synched",0);
	this.instance_6.setTransform(280.4,23.5,0.205,0.205,0,0,0,17.3,56.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).wait(244));

	// background_pink
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A1C1E6").s().p("EjPyg2cMDD6iFVMCp9CpgIAAAAICbCaMAvTAvKMjBaCcfg");
	this.shape_2.setTransform(-1016.725,236.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A1C1E6").s().p("EjPyg2cMDD6iFVMCp9CpgIAAAAMAxuAxkMjBaCcfg");
	this.shape_3.setTransform(-1001.475,236.575);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{x:-1016.725}}]},88).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:-238.725}}]},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(89).to({_off:false},0).wait(1).to({x:-986.375},0).wait(1).to({x:-971.425},0).wait(1).to({x:-956.625},0).wait(1).to({x:-941.975},0).wait(1).to({x:-927.475},0).wait(1).to({x:-913.125},0).wait(1).to({x:-898.875},0).wait(1).to({x:-884.825},0).wait(1).to({x:-870.875},0).wait(1).to({x:-857.125},0).wait(1).to({x:-843.475},0).wait(1).to({x:-830.025},0).wait(1).to({x:-816.675},0).wait(1).to({x:-803.525},0).wait(1).to({x:-790.475},0).wait(1).to({x:-777.575},0).wait(1).to({x:-764.825},0).wait(1).to({x:-752.225},0).wait(1).to({x:-739.775},0).wait(1).to({x:-727.475},0).wait(1).to({x:-715.325},0).wait(1).to({x:-703.325},0).wait(1).to({x:-691.475},0).wait(1).to({x:-679.775},0).wait(1).to({x:-668.175},0).wait(1).to({x:-656.775},0).wait(1).to({x:-645.475},0).wait(1).to({x:-634.375},0).wait(1).to({x:-623.425},0).wait(1).to({x:-612.575},0).wait(1).to({x:-601.875},0).wait(1).to({x:-591.375},0).wait(1).to({x:-580.975},0).wait(1).to({x:-570.725},0).wait(1).to({x:-560.625},0).wait(1).to({x:-550.675},0).wait(1).to({x:-540.875},0).wait(1).to({x:-531.225},0).wait(1).to({x:-521.725},0).wait(1).to({x:-512.375},0).wait(1).to({x:-503.175},0).wait(1).to({x:-494.125},0).wait(1).to({x:-485.175},0).wait(1).to({x:-476.425},0).wait(1).to({x:-467.825},0).wait(1).to({x:-459.325},0).wait(1).to({x:-451.025},0).wait(1).to({x:-442.825},0).wait(1).to({x:-434.825},0).wait(1).to({x:-426.925},0).wait(1).to({x:-419.175},0).wait(1).to({x:-411.575},0).wait(1).to({x:-404.175},0).wait(1).to({x:-396.875},0).wait(1).to({x:-389.725},0).wait(1).to({x:-382.725},0).wait(1).to({x:-375.875},0).wait(1).to({x:-369.125},0).wait(1).to({x:-362.575},0).wait(1).to({x:-356.175},0).wait(1).to({x:-349.925},0).wait(1).to({x:-343.775},0).wait(1).to({x:-337.825},0).wait(1).to({x:-332.025},0).wait(1).to({x:-326.325},0).wait(1).to({x:-320.825},0).wait(1).to({x:-315.425},0).wait(1).to({x:-310.175},0).wait(1).to({x:-305.075},0).wait(1).to({x:-300.175},0).wait(1).to({x:-295.375},0).wait(1).to({x:-290.725},0).wait(1).to({x:-286.225},0).wait(1).to({x:-281.875},0).wait(1).to({x:-277.675},0).wait(1).to({x:-273.625},0).wait(1).to({x:-269.725},0).wait(1).to({x:-265.975},0).wait(1).to({x:-262.325},0).wait(1).to({x:-258.875},0).wait(1).to({x:-255.575},0).wait(1).to({x:-252.375},0).wait(1).to({x:-249.375},0).wait(1).to({x:-246.475},0).wait(1).to({x:-243.725},0).wait(1).to({x:-241.175},0).to({_off:true},1).wait(172));

	// diagonal
	this.instance_7 = new lib.diagonal_mask();
	this.instance_7.setTransform(654.6,-109.4,0.5269,0.5269,0,0,180,-0.5,1.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({regX:-0.3,regY:1,scaleX:0.5032,scaleY:0.5032,x:-58.55,y:-103.2},62).to({_off:true},1).wait(281));

	// diagonal
	this.instance_8 = new lib.diagonal_mask();
	this.instance_8.setTransform(-456.9,-89.85,0.4751,0.4751,0,0,0,-0.4,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({x:357.1,y:-92.85},66).to({_off:true},1).wait(277));

	// diagonal_mask
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B482BA").s().p("EixNASJMC4Ui61MCqHCseMimDCk7g");
	this.shape_4.setTransform(621.475,396.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B482BA").s().p("EixNASKMC4Ri62MCqKCsfMimDCk6g");
	this.shape_5.setTransform(634.775,396.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B482BA").s().p("EixMASKMC4Ni63MCqMCsgMimDCk7g");
	this.shape_6.setTransform(648.075,396.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B482BA").s().p("EixMASLMC4Ki64MCqPCshMimDCk6g");
	this.shape_7.setTransform(661.375,396.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B482BA").s().p("EixLASLMC4Gi64MCqRCshMimDCk6g");
	this.shape_8.setTransform(674.675,396.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B482BA").s().p("EixLASLMC4Di65MCqUCsiMimDCk7g");
	this.shape_9.setTransform(687.975,396.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B482BA").s().p("EixKASMMC3/i66MCqWCsjMimDCk6g");
	this.shape_10.setTransform(701.325,396.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B482BA").s().p("EixKASMMC38i67MCqZCskMimDCk7g");
	this.shape_11.setTransform(714.625,396.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B482BA").s().p("EixJASNMC34i68MCqbCslMimDCk6g");
	this.shape_12.setTransform(727.925,396.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B482BA").s().p("EixJASNMC31i68MCqeCslMimDCk6g");
	this.shape_13.setTransform(741.225,396.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B482BA").s().p("EixIASNMC3xi69MCqgCsmMimDCk7g");
	this.shape_14.setTransform(754.525,396.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B482BA").s().p("EixIASOMC3ui6+MCqjCsnMimDCk6g");
	this.shape_15.setTransform(767.825,396.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B482BA").s().p("EixHASOMC3qi6+MCqlCsnMimDCk7g");
	this.shape_16.setTransform(781.125,396.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B482BA").s().p("EixHASPMC3ni7AMCqoCspMimDCk6g");
	this.shape_17.setTransform(794.425,396.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B482BA").s().p("EixGASPMC3ji7AMCqqCspMimDCk6g");
	this.shape_18.setTransform(807.725,396.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B482BA").s().p("EixGASPMC3gi7BMCqtCsqMimDCk7g");
	this.shape_19.setTransform(821.025,396.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B482BA").s().p("EixFASQMC3bi7CMCqwCsrMimDCk6g");
	this.shape_20.setTransform(834.375,396.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B482BA").s().p("EixFASQMC3Yi7DMCqzCssMimDCk7g");
	this.shape_21.setTransform(847.675,396);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B482BA").s().p("EixEASRMC3Ui7EMCq1CstMimDCk6g");
	this.shape_22.setTransform(860.975,395.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B482BA").s().p("EixEASRMC3Ri7EMCq4CstMimDCk6g");
	this.shape_23.setTransform(874.275,395.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B482BA").s().p("EixDASRMC3Ni7FMCq6CsuMimDCk7g");
	this.shape_24.setTransform(887.575,395.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B482BA").s().p("EixDASSMC3Ki7GMCq9CsvMimDCk6g");
	this.shape_25.setTransform(900.875,395.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B482BA").s().p("EixCASSMC3Gi7GMCq/CsvMimDCk7g");
	this.shape_26.setTransform(914.175,395.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B482BA").s().p("EixCASTMC3Di7IMCrCCsxMimDCk6g");
	this.shape_27.setTransform(927.475,395.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B482BA").s().p("EixBASTMC2/i7IMCrECsxMimDCk6g");
	this.shape_28.setTransform(940.775,395.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B482BA").s().p("EixBASTMC28i7JMCrHCsyMimDCk7g");
	this.shape_29.setTransform(954.075,395.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B482BA").s().p("EixAASUMC24i7KMCrJCszMimDCk6g");
	this.shape_30.setTransform(967.425,395.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B482BA").s().p("EixAASUMC21i7LMCrMCs0MimDCk7g");
	this.shape_31.setTransform(980.725,395.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B482BA").s().p("Eiw/ASUMC2xi7LMCrOCs0MimDCk7g");
	this.shape_32.setTransform(994.025,395.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B482BA").s().p("Eiw/ASVMC2ui7MMCrRCs1MimDCk6g");
	this.shape_33.setTransform(1007.325,395.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B482BA").s().p("Eiw+ASVMC2qi7NMCrTCs2MimDCk7g");
	this.shape_34.setTransform(1020.625,395.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B482BA").s().p("Eiw+ASWMC2ni7OMCrWCs3MimDCk6g");
	this.shape_35.setTransform(1033.925,395.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B482BA").s().p("Eiw9ASWMC2ji7OMCrYCs3MimDCk7g");
	this.shape_36.setTransform(1047.225,395.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B482BA").s().p("Eiw9ASWMC2gi7PMCrbCs4MimDCk7g");
	this.shape_37.setTransform(1060.525,395.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B482BA").s().p("Eiw8ASXMC2ci7QMCrdCs5MimDCk6g");
	this.shape_38.setTransform(1073.825,395.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B482BA").s().p("Eiw8ASXMC2Zi7RMCrgCs6MimDCk7g");
	this.shape_39.setTransform(1087.125,395.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B482BA").s().p("Eiw7ASYMC2Vi7SMCriCs7MimDCk6g");
	this.shape_40.setTransform(1100.475,395.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B482BA").s().p("Eiw7ASYMC2Si7TMCrlCs8MimDCk7g");
	this.shape_41.setTransform(1113.775,395.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B482BA").s().p("Eiw6ASYMC2Oi7TMCrnCs8MimDCk7g");
	this.shape_42.setTransform(1127.075,395.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B482BA").s().p("Eiw6ASZMC2Li7UMCrqCs9MimDCk6g");
	this.shape_43.setTransform(1140.375,395.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B482BA").s().p("Eiw5ASZMC2Hi7VMCrsCs+MimDCk7g");
	this.shape_44.setTransform(1153.675,395.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B482BA").s().p("Eiw5ASaMC2Ei7WMCrvCs/MimDCk6g");
	this.shape_45.setTransform(1166.975,395.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B482BA").s().p("Eiw4ASaMC2Ai7WMCrxCs/MimDCk7g");
	this.shape_46.setTransform(1180.275,395);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B482BA").s().p("Eiw4ASaMC19i7XMCr0CtAMimDCk7g");
	this.shape_47.setTransform(1193.575,394.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B482BA").s().p("Eiw3ASbMC15i7YMCr2CtBMimDCk6g");
	this.shape_48.setTransform(1206.875,394.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B482BA").s().p("Eiw3ASbMC12i7YMCr5CtBMimDCk7g");
	this.shape_49.setTransform(1220.175,394.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B482BA").s().p("Eiw2AScMC1xi7aMCr8CtDMimDCk6g");
	this.shape_50.setTransform(1233.525,394.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B482BA").s().p("Eiw2AScMC1ui7bMCr/CtEMimDCk7g");
	this.shape_51.setTransform(1246.825,394.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B482BA").s().p("Eiw1AScMC1qi7bMCsBCtEMimDCk7g");
	this.shape_52.setTransform(1260.125,394.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B482BA").s().p("Eiw1ASdMC1ni7cMCsECtFMimDCk6g");
	this.shape_53.setTransform(1273.425,394.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B482BA").s().p("Eiw0ASdMC1ji7dMCsGCtGMimDCk7g");
	this.shape_54.setTransform(1286.725,394.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B482BA").s().p("Eiw0ASeMC1gi7eMCsJCtHMimDCk6g");
	this.shape_55.setTransform(1300.025,394.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(297));

	// Txt_Frame_01
	this.instance_9 = new lib.text_01("synched",14);
	this.instance_9.setTransform(48.8,18.15,0.4565,0.4565,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1,startPosition:29},15).wait(333));

	// stork
	this.instance_10 = new lib.stork_mc("synched",0);
	this.instance_10.setTransform(278.35,24.75,0.2259,0.2259,0,0,0,150.8,123.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).wait(330));

	// background_blue
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7CE0D3").s().p("EhPnAX6MAAAgvzMCfOAAAMAAAAvzg");
	this.shape_56.setTransform(483.45,128.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(348));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2186.6,-1845.7,4832.299999999999,3322.1000000000004);
// library properties:
lib.properties = {
	id: '8E001561404B4819888B8621455E166F',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
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
an.compositions['8E001561404B4819888B8621455E166F'] = {
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