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

	// timeline functions:
	this.frame_55 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},34).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:76.625,y:123.9}).wait(1).to({graphics:mask_graphics_2,x:80.85,y:119.75}).wait(1).to({graphics:mask_graphics_3,x:98.525,y:107.125}).wait(1).to({graphics:mask_graphics_4,x:104.4,y:104.65}).wait(1).to({graphics:mask_graphics_5,x:117.35,y:100.1}).wait(1).to({graphics:mask_graphics_6,x:132.275,y:97.875}).wait(1).to({graphics:mask_graphics_7,x:144.325,y:99.975}).wait(1).to({graphics:mask_graphics_8,x:145.575,y:109.175}).wait(1).to({graphics:mask_graphics_9,x:138.575,y:119.925}).wait(1).to({graphics:mask_graphics_10,x:130.425,y:128.025}).wait(1).to({graphics:mask_graphics_11,x:126.775,y:135.6}).wait(1).to({graphics:mask_graphics_12,x:134.825,y:135.975}).wait(1).to({graphics:mask_graphics_13,x:147.35,y:129.075}).wait(1).to({graphics:mask_graphics_14,x:150.75,y:124.6984}).wait(1).to({graphics:mask_graphics_15,x:154,y:113.65}).wait(1).to({graphics:mask_graphics_16,x:153.85,y:102.525}).wait(1).to({graphics:mask_graphics_17,x:152.375,y:87.3}).wait(1).to({graphics:mask_graphics_18,x:154.375,y:61.9525}).wait(1).to({graphics:null,x:0,y:0}).wait(37));

	// body_outline_inner
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3BC46").ss(2,1,1).p("AmEDmQBhh3ClhIQCihFCbAHQAYABAeARQAnAVAKAhQAGAWgGAiQgGAkgPASQhFBVgZAaQhJBOhMAtQBhACBOgkQBWgoBVheQAMgNABgTQABgSgKgQIgshcQgRgiACgbQAIgiACgbQAGg5AEgQQAQg+AFhpQACheAAgD");
	this.shape_8.setTransform(118.2262,97.9803);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},18).wait(37));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:170.225,y:69.5}).wait(1).to({graphics:mask_1_graphics_2,x:167.95,y:82.15}).wait(1).to({graphics:mask_1_graphics_3,x:166.575,y:86.575}).wait(1).to({graphics:mask_1_graphics_4,x:165.95,y:93.2}).wait(1).to({graphics:mask_1_graphics_5,x:168.975,y:100.225}).wait(1).to({graphics:mask_1_graphics_6,x:169.35,y:110.4}).wait(1).to({graphics:mask_1_graphics_7,x:169.475,y:120.425}).wait(1).to({graphics:mask_1_graphics_8,x:164.575,y:131.725}).wait(1).to({graphics:mask_1_graphics_9,x:122.775,y:148.425}).wait(1).to({graphics:mask_1_graphics_10,x:85.75,y:143.05}).wait(1).to({graphics:mask_1_graphics_11,x:75.975,y:131.725}).wait(1).to({graphics:mask_1_graphics_12,x:96.3,y:111.775}).wait(1).to({graphics:mask_1_graphics_13,x:111.725,y:106.525}).wait(1).to({graphics:mask_1_graphics_14,x:123.925,y:101.5}).wait(1).to({graphics:mask_1_graphics_15,x:138.225,y:106.025}).wait(1).to({graphics:mask_1_graphics_16,x:132.45,y:123.075}).wait(1).to({graphics:mask_1_graphics_17,x:123.15,y:130.6}).wait(1).to({graphics:mask_1_graphics_18,x:109.125,y:142.45}).wait(1).to({graphics:null,x:0,y:0}).wait(37));

	// body_outline
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3BC46").ss(4,1,1).p("AgTF/QjKAAjnhwIg0gZIAdgyQBcihCshdQBTgtBagWQBcgWBdAEQAVABASALQARAMAJAUQAJATgDAVQgCAUgNARQg7BKg9BBQhZBghQA8QCEAOBvgoQCAguBgh0QAOgRACgWQABgXgMgUIg3hXQgWgrAEg3QADggARg9QALgkADgRQAHgeAAgYIBrAAQAAAhgIAnQgFAXgMAqQgMAtgDAUQgEAcAJASIAzBSQAfAxgEA4QgEA5gkAsQhfByh7A6Qh6A5iPAAg");
	this.shape_9.setTransform(122.5178,113);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},18).wait(37));

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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:161.8,y:70.65}).wait(1).to({graphics:mask_2_graphics_2,x:161.7,y:74.75}).wait(1).to({graphics:mask_2_graphics_3,x:161.925,y:78.175}).wait(1).to({graphics:mask_2_graphics_4,x:162.55,y:82.175}).wait(1).to({graphics:mask_2_graphics_5,x:163.175,y:88.2}).wait(1).to({graphics:mask_2_graphics_6,x:162.175,y:93.975}).wait(1).to({graphics:mask_2_graphics_7,x:162.45,y:101.225}).wait(1).to({graphics:mask_2_graphics_8,x:161.55,y:105.625}).wait(1).to({graphics:mask_2_graphics_9,x:134.825,y:109.9}).wait(1).to({graphics:mask_2_graphics_10,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_11,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_12,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_13,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_14,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_15,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_16,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_17,x:121.275,y:109.9}).wait(1).to({graphics:mask_2_graphics_18,x:121.275,y:109.9}).wait(1).to({graphics:null,x:0,y:0}).wait(37));

	// body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnEEOIg0gZIAdgxQBcihCshdQBTgtBagWQBcgWBdAEQAVABASALQARAMAJAUQAJATgDAVQgCAUgNASQg7BIg9BCQhZBghQA7QCEAOBvgoQCAgtBghzQAOgSACgWQABgXgMgUIg3hWQgWgsAEg2QADghARg9QALgjADgSQAHgeAAgZIBrAAQAAAjgIAnQgFAWgMAqQgMAtgDAUQgEAbAJATIAzBRQAfAygEA4QgEA5gkAsQhfByh7A6Qh6A5iPABQjKgBjnhxgAijAlQhxA+hJBkQA1AYA5ARQBIgdBihdQBFhBBLhYQh9ALhxA9g");
	this.shape_10.setTransform(122.5178,113);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(55));

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

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:168.075,y:68.025}).wait(1).to({graphics:mask_3_graphics_2,x:165.175,y:51.125}).wait(1).to({graphics:mask_3_graphics_3,x:158.25,y:45.025}).wait(1).to({graphics:mask_3_graphics_4,x:145.075,y:41.525}).wait(1).to({graphics:mask_3_graphics_5,x:136.7421,y:47.025}).wait(1).to({graphics:mask_3_graphics_6,x:130.8696,y:56.45}).wait(1).to({graphics:mask_3_graphics_7,x:130.175,y:69.05}).wait(1).to({graphics:mask_3_graphics_8,x:130.55,y:79.275}).wait(1).to({graphics:mask_3_graphics_9,x:137.45,y:98.05}).wait(1).to({graphics:mask_3_graphics_10,x:141.975,y:76.55}).wait(1).to({graphics:mask_3_graphics_11,x:137.2,y:56.575}).wait(1).to({graphics:mask_3_graphics_12,x:153.2,y:51.225}).wait(1).to({graphics:mask_3_graphics_13,x:155.625,y:65.275}).wait(1).to({graphics:null,x:0,y:0}).wait(42));

	// head_outline
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3BC46").ss(4,1,1).p("AgqE/IhlgjQAYhGgIg0QgFgggcg4QgTglgHgUQgNgigEghQgEgwAHgtQAMhGApgtQAbgeAlgPQAlgPAsAAQBeAAA5BDQA4BDAABxIhrAAQAAg2gSgkQgZgyg5AAQgrAAgWAZQgTAVgHAlQgGAgADAjQACAVAJAXQAGAOAPAdQAjBFAHAvQAOBQgiBhg");
	this.shape_11.setTransform(146.9656,70.025);
	this.shape_11._off = true;

	var maskedShapeInstanceList = [this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},13).wait(42));

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

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:162.5808,y:62.925}).wait(1).to({graphics:mask_4_graphics_2,x:161.5,y:56.4}).wait(1).to({graphics:mask_4_graphics_3,x:158.55,y:53.575}).wait(1).to({graphics:mask_4_graphics_4,x:149.7,y:53.575}).wait(1).to({graphics:mask_4_graphics_5,x:148.95,y:53.575}).wait(1).to({graphics:mask_4_graphics_6,x:148.95,y:54.85}).wait(1).to({graphics:mask_4_graphics_7,x:148.95,y:59.825}).wait(1).to({graphics:mask_4_graphics_8,x:148.95,y:64.275}).wait(1).to({graphics:mask_4_graphics_9,x:148.95,y:69.8}).wait(1).to({graphics:null,x:0,y:0}).wait(46));

	// head
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnYOlQBQjmgbiqQgRhqhci3Qg8h5gYhBQgshzgLhuQgQicAaiVQAnjmCFiTQBYhhB6gzQB6gyCSAAQE2AAC5DdQC6DeAAFzIlgAAQAAi0g6h0QhSimi9AAQiOAAhKBSQg+BFgXB7QgUBoAMBzQAHBEAeBNQASAuAxBhQByDjAZCZQAsEIhuE+g");
	this.shape_12.setTransform(146.913,69.9698,0.3045,0.3045);
	this.shape_12._off = true;

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).wait(55));

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

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_5_graphics_8,x:122.125,y:136.725}).wait(1).to({graphics:mask_5_graphics_9,x:122.125,y:141.625}).wait(1).to({graphics:mask_5_graphics_10,x:122.125,y:146.15}).wait(1).to({graphics:mask_5_graphics_11,x:122.125,y:151.3}).wait(1).to({graphics:mask_5_graphics_12,x:122.125,y:156.55}).wait(1).to({graphics:mask_5_graphics_13,x:122.125,y:162.9}).wait(1).to({graphics:mask_5_graphics_14,x:122.125,y:165.75}).wait(1).to({graphics:mask_5_graphics_15,x:124.05,y:169.05}).wait(1).to({graphics:mask_5_graphics_16,x:124.225,y:172.8}).wait(1).to({graphics:mask_5_graphics_17,x:124.3,y:172.875}).wait(1).to({graphics:null,x:0,y:0}).wait(38));

	// leg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhrFaIAAqzIBrAAIAAGHIBXAAIAABrIhXAAIAABWIBsAAIAABrg");
	this.shape_13.setTransform(128.675,175.95);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(8).to({_off:false},0).wait(48));

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

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_6_graphics_17,x:199.3083,y:54.3}).wait(1).to({graphics:mask_6_graphics_18,x:191.0709,y:76.5}).wait(1).to({graphics:mask_6_graphics_19,x:185.1982,y:89.425}).wait(1).to({graphics:mask_6_graphics_20,x:182.1529,y:123.45}).wait(1).to({graphics:mask_6_graphics_21,x:211.15,y:139.025}).wait(1).to({graphics:mask_6_graphics_22,x:217.2818,y:113.675}).wait(1).to({graphics:mask_6_graphics_23,x:208.3134,y:80.9}).wait(1).to({graphics:mask_6_graphics_24,x:201.7281,y:62.2}).wait(1).to({graphics:null,x:0,y:0}).wait(31));

	// bag_outline
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3BC46").ss(4,1,1).p("AAAGpQhdAAg3gxQhKhBAAiRQAAhYBRjFQArhnAzhoIAxhiIAvBjQAyBqAsBsQBQDHAABOQAACRhJBBQg4AxheAAg");
	this.shape_14.setTransform(197.9,102.65);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(17).to({_off:false},0).to({_off:true},8).wait(31));

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

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_7_graphics_17,x:197.375,y:56.775}).wait(1).to({graphics:mask_7_graphics_18,x:192.5872,y:73.5}).wait(1).to({graphics:mask_7_graphics_19,x:186.45,y:85.15}).wait(1).to({graphics:mask_7_graphics_20,x:186.45,y:101.725}).wait(1).to({graphics:mask_7_graphics_21,x:199.25,y:101.725}).wait(1).to({graphics:mask_7_graphics_22,x:199.25,y:101.725}).wait(1).to({graphics:mask_7_graphics_23,x:199.25,y:101.725}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// bag_outer
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnqTSQjxjVAAndQAAkjEJqFQCLlTCqlWIChlCICbFGQCmFdCOFiQEJKRAAD9QAAHdjxDVQi3Cik0AAQkzAAi3iigAj+AmQh8FcAACeQAAEiBoBzQBWBeC8AAQC9AABWheQBohzAAkiQAAiBh6lWQhlkbielsQicFXhgENg");
	this.shape_15.setTransform(197.9113,102.6607,0.3046,0.3046);
	this.shape_15._off = true;

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(17).to({_off:false},0).wait(39));

	// bag_part_01_mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_19 = new cjs.Graphics().p("AhZAZICnhcIAMApIiVBegABagaIAAAAIAAAAIAAAAg");
	var mask_8_graphics_20 = new cjs.Graphics().p("AhNAnIgegqICnhdIAMApIAkBDIhkBUg");
	var mask_8_graphics_21 = new cjs.Graphics().p("AhmAMIgegqICnhdIAMAoIBWBcIhTBzg");
	var mask_8_graphics_22 = new cjs.Graphics().p("AiZgLIgfgrICohdIANApIC7CXIhfBng");
	var mask_8_graphics_23 = new cjs.Graphics().p("AjKguIgfgrICohdIANAoIEdDUIhGBxg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_8_graphics_19,x:180.425,y:98.15}).wait(1).to({graphics:mask_8_graphics_20,x:182.2,y:101}).wait(1).to({graphics:mask_8_graphics_21,x:184.7,y:103.775}).wait(1).to({graphics:mask_8_graphics_22,x:189.85,y:106.15}).wait(1).to({graphics:mask_8_graphics_23,x:194.75,y:109.675}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// bag_part_01
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjOAyQhFhFg3hPQgegsgPgcIE4imIAbArQAkA0AuAuQCSCTC4ApIhNFXQkfg/jajfg");
	this.shape_16.setTransform(190.7822,108.5233,0.3046,0.3046);
	this.shape_16._off = true;

	var maskedShapeInstanceList = [this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(19).to({_off:false},0).wait(37));

	// bag_part_02_mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_19 = new cjs.Graphics().p("AgOhPIAsACIgKCbIgxACg");
	var mask_9_graphics_20 = new cjs.Graphics().p("Ag3hPIAtACIAzAKIAfB9IhcAUIgzACg");
	var mask_9_graphics_21 = new cjs.Graphics().p("AhuhCIAtADIBrgeIBVB6IjKA/IgzACg");
	var mask_9_graphics_22 = new cjs.Graphics().p("AiagmIAtADIBsgeIA7g4IBxBYIhYBZIjKA/IgzADg");
	var mask_9_graphics_23 = new cjs.Graphics().p("Ai8gCIAtACIBsgdIA7g3IA1hJICAA8IhEBkIhYBaIjKA/IgzACg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AjVAcIAtACIBsgeIA8g2IBSiFICUA0Ih2CoIhYBaIjKA/IgzACg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_9_graphics_19,x:178.475,y:127.475}).wait(1).to({graphics:mask_9_graphics_20,x:182.625,y:127.475}).wait(1).to({graphics:mask_9_graphics_21,x:188.15,y:126.1}).wait(1).to({graphics:mask_9_graphics_22,x:192.525,y:123.325}).wait(1).to({graphics:mask_9_graphics_23,x:195.925,y:119.7}).wait(1).to({graphics:mask_9_graphics_24,x:198.425,y:116.675}).wait(32));

	// bag_part_02
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AotCoQEyABEPlWQCIirBNiwIFECKQhqD1i6DcQlwG2nGAAg");
	this.shape_17.setTransform(198.7717,116.8535,0.3046,0.3046);
	this.shape_17._off = true;

	var maskedShapeInstanceList = [this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(19).to({_off:false},0).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.3,210.6);


(lib.pin_head_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pin_head_outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3BC46").ss(12,2,1).p("AA/g+Ih9B9");
	this.shape.setTransform(690.8625,245.9875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F3BC46").ss(12,2,1).p("AD4j3InvHv");
	this.shape_1.setTransform(667.4,269.4375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F3BC46").ss(12,2,1).p("AJOm2IuHOGIkUkU");
	this.shape_2.setTransform(622.9,298.8824);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F3BC46").ss(12,2,1).p("AJGkUIpFJEIpGpG");
	this.shape_3.setTransform(591.3875,314.9074);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F3BC46").ss(12,2,1).p("AE2E2Iprpr");
	this.shape_4.setTransform(520.025,273.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F3BC46").ss(12,2,1).p("AGKGKIsTsT");
	this.shape_5.setTransform(490.3625,244.1625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F3BC46").ss(12,2,1).p("ADzDzInlnl");
	this.shape_6.setTransform(445.825,199.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F3BC46").ss(12,2,1).p("ADHDGImMmL");
	this.shape_7.setTransform(408.675,162.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3BC46").ss(12,2,1).p("AjcHPIiqiqIL0rz");
	this.shape_8.setTransform(417.5051,102.9375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3BC46").ss(12,2,1).p("AnyHKIKCqDQCjijDDhw");
	this.shape_9.setTransform(446.0655,68.772);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F3BC46").ss(12,2,1).p("AncEfIB9h9QD2j2FAiCQCHg2CMgf");
	this.shape_10.setTransform(495.67,34.03);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3BC46").ss(12,2,1).p("AoVCOQCdhtC1hJQE1h9FQAAQA0AAA0AD");
	this.shape_11.setTransform(536.8397,16.6037);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F3BC46").ss(12,2,1).p("AoCAgQD6hOEKAAQEJAAD4BN");
	this.shape_12.setTransform(581.5955,4.7142);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F3BC46").ss(12,2,1).p("AkRh+QBtAcBrArQCrBFCWBn");
	this.shape_13.setTransform(652.1767,18.1142);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3BC46").ss(12,2,1).p("AgggfQAXAVAWAWIAUAU");
	this.shape_14.setTransform(701.8406,49.0156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(25));

	// pin_head
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABLClQg9g6gcgZIhMhBQgrglgbggQgQgTg/hbIgCgDIBNhOIGWGWIhRBRQgggcg2gzg");
	this.shape_15.setTransform(679.625,216.6875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVD6Qi1inhghRIg2grIErksIGWGWIkUEVg");
	this.shape_16.setTransform(668.5125,226.4625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AosCxIAhgqQAcgkATgcIJypxIGXGXIrAK+Qi+i2jbjEg");
	this.shape_17.setTransform(648.1875,247.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ArpGNQDcjgC/j2QAcglAUgcIJxpyIGXGXIxjRig");
	this.shape_18.setTransform(629.2625,268.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AuwAAIC8i/QBOhQAsgnQA3gzA0gkIFdFeILMrNIGXGXIxjRig");
	this.shape_19.setTransform(609.3625,268.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AyFmHIBRhVQBuhwDIjHIANgNIMUMVILMrNIGXGXIxjRig");
	this.shape_20.setTransform(588.0125,265.1875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A0nopQA8g+BHhEICCh6QBJhHAwg7IAXgbIRXRXILMrLIGXGXIxjRig");
	this.shape_21.setTransform(571.8125,249.0125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A3HrWQB/h/BMhGQBuhoBlhSIAFAGQBaBsAxAtQAzAtAzAaISXSXILNrLIGXGXIxkRig");
	this.shape_22.setTransform(555.85,234.3125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A5atYIGhmhQCVCfCTCvQBaBsAxAtQAzAtAzAaISXSXILNrLIGXGWIxkRjg");
	this.shape_23.setTransform(541.15,217.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("A5apcIM1s0QA0g1A4gwIANArQAqCBBMCpQAlBRBFCSIlgFhIUjUkILNrLIGXGWIxkRjg");
	this.shape_24.setTransform(541.15,192.7375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A5anYIM1s0QDrjsEviBIA2EOQAaCUAOCyQh7BIhnBnImdGeIUjUkILNrMIGXGXIxkRjg");
	this.shape_25.setTransform(541.15,179.5125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A5amXIM1s0QD2j3FBiCQDpheD2gYQgJBOgFBCIgHBtQgFBAgHAsQgFAqgOBDIgWBtIgCAOQhgAVhbAlQjWBXijCjImdGeIUjUkILNrMIGXGXIxkRjg");
	this.shape_26.setTransform(541.15,173.0375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A5amTIM1s0QD2j3FBiCQE1h+FPAAQCqAACkAhIhEDzQgWBKhADIIgLAmQhTgMhWAAQjfgBjNBUQjWBWijCkImdGeIUjUkILNrMIGXGXIxkRjg");
	this.shape_27.setTransform(541.15,172.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A5amTIM1s0QD2j3FBiCQE1h+FPAAQFQAAE2B+IAeAMQgjBPgtBaQh1Dhg1BzIgFAJQjKhRjbABQjfgBjNBUQjWBWijCkImdGeIUjUkILNrMIGXGXIxkRjg");
	this.shape_28.setTransform(541.15,172.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A5amTIM1s0QD2j3FBiCQE1h+FPAAQFQAAE2B+QD/BnDRCxQheBqg2A1IhMBHQgxAtgbAZQgmAnhCBKQh+hjiXg9QjNhUjgABQjfgBjNBUQjWBWijCkImdGeIUjUkILNrMIGXGXIxkRjg");
	this.shape_29.setTransform(541.15,172.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A5hmTIM1s0QD2j3FBiCQE1h+FQAAQFQAAE2B+QFACCD3D3IAUAUQg8AzheBkIikCsQg1A3gaAlIgdgdQilikjVhWQjOhUjfABQjggBjNBUQjVBWikCkImdGeIUkUkILMrMIGYGXIxkRjg");
	this.shape_30.setTransform(541.8,172.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(26));

	// pin_head_circle_inner
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F3BC46").ss(3,2,1).p("AA5gOQgQAJgRAGQgoAQgtAD");
	this.shape_31.setTransform(572.3344,210.8656);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F3BC46").ss(3,2,1).p("ABBhCQgUAtgkAjQggAhgpAU");
	this.shape_32.setTransform(582.7389,203.6236);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F3BC46").ss(3,2,1).p("AA5hqQgBAygTAsQgUAxgmAmQgOAOgQAM");
	this.shape_33.setTransform(585.8354,197.5146);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F3BC46").ss(3,2,1).p("AgPhrQAKARAGASQAVAxAAA1QAAApgMAn");
	this.shape_34.setTransform(589.4224,182.8729);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F3BC46").ss(3,2,1).p("AhPg9QAOAEAOAGQAyAUAlAlQAZAZARAd");
	this.shape_35.setTransform(580.081,166.181);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F3BC46").ss(3,2,1).p("AikAIQAWgOAYgKQAxgUA2AAQA2AAAxAUQAqARAjAe");
	this.shape_36.setTransform(566.1438,162.6464);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F3BC46").ss(3,2,1).p("AiZCCQACgxASgsQAUgxAngmQAmgmAwgVQAxgUA2AAQATAAATAC");
	this.shape_37.setTransform(553.0205,171.9244);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F3BC46").ss(3,2,1).p("Ag5C0QgCgFgDgFQgUgxAAg3QAAg2AUgwQAVgxAmgnQAjgjAugU");
	this.shape_38.setTransform(545.8517,179.2511);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F3BC46").ss(3,2,1).p("ABbDjQgJgDgJgEQgzgUglgnQgngmgUgyQgUgxAAg1QAAg2AUgxQAUgyAngmQABgCACgB");
	this.shape_39.setTransform(547.1231,188.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F3BC46").ss(3,2,1).p("ACrArQgFACgFACQgxAUg1AAQg1AAgwgUQgygUgngmQgWgXgRga");
	this.shape_40.setTransform(558.6585,206.2414);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F3BC46").ss(3,2,1).p("ABmgyQgLAPgNANQgnAmgxAVQgvASgyAB");
	this.shape_41.setTransform(575.8994,207.2631);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F3BC46").ss(3,2,1).p("AAegcQgLAPgOANQgPAQgTAN");
	this.shape_42.setTransform(583.131,205.094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},8).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},1).wait(30));

	// pin_head_circle_outline
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F3BC46").ss(10,2,1).p("AiUAGQBigVBnAAQAzAAAyAF");
	this.shape_43.setTransform(559.2409,98.1695);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F3BC46").ss(10,2,1).p("AkgBYQBkhQB3gwQCihECzAAQARAAASAB");
	this.shape_44.setTransform(537.3766,107.4157);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F3BC46").ss(10,2,1).p("Ak8C6QAvhFA9g9QB/h+CihDQB5gyCCgN");
	this.shape_45.setTransform(522.2372,117.1253);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F3BC46").ss(10,2,1).p("Ak2GvQAAizBDijQBEiiB+h/QB+h/CjhDQAdgMAdgK");
	this.shape_46.setTransform(506.342,142.8455);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F3BC46").ss(10,2,1).p("AgzH5QgJgUgIgUQhEijAAizQAAiyBEijQBBieB3h8");
	this.shape_47.setTransform(488.8851,173.6256);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F3BC46").ss(10,2,1).p("ACuG+Qg4gpgygyQh9h+hEijQhDijAAizQAAhcARhX");
	this.shape_48.setTransform(494.5434,213.5972);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F3BC46").ss(10,2,1).p("AniCaQgbgXgZgZQh/h+hDijQgjhVgRhaAMBA/QgTAWgVAVQiACAioBEQihBBivAAQiSAAiKgu");
	this.shape_49.setTransform(554.8599,238.5058);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F3BC46").ss(10,2,1).p("AEyhkQhyBkiNA4QigBCivAAQgUAAgTgB");
	this.shape_50.setTransform(593.0717,263.096);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F3BC46").ss(10,2,1).p("AMOj1QgCAQgDAPAr0DoQgGgGgGgG");
	this.shape_51.setTransform(574.8253,223.5899);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F3BC46").ss(10,2,1).p("ANyoGQAMBLAABOQAACzhDCjQhECih/B/QiACAinBEQihBBiwAAQiuAAihhBQinhEiBiAQh+h/hEiiQg3iHgKiR");
	this.shape_52.setTransform(564.5121,222.5415);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F3BC46").ss(10,2,1).p("ALspRQA3CUAAChQAACzhECiQhECjh+B/QgMAMgLAKADmIlQiaA7imAAQivAAihhBQiohEiAiAQgggggcgi");
	this.shape_53.setTransform(573.656,214.4009);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F3BC46").ss(10,2,1).p("AA7o3QAbAvAVA0QBECjAACzQAACyhECjQhECjh9B/QggAggkAd");
	this.shape_54.setTransform(636.457,198.6482);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F3BC46").ss(10,2,1).p("Aifj6QAwAlArAsQB+B/BDCiQAdBFARBI");
	this.shape_55.setTransform(634.669,139.744);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F3BC46").ss(10,2,1).p("AghgPQAhAOAgAQ");
	this.shape_56.setTransform(603.2302,105.3927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},8).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},1).wait(26));

	// pin_head_circle
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgTEWQghhNg4hwQg8h5gdg4QgnhNgkg/QCeg+CrAAQBvgBBpAaQgQAkgQAoQgRAqg9CxQgsCDgxB7IgNAAQgkAAgiAIIgGgOg");
	this.shape_57.setTransform(558.825,125.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AiEDZQiehdhRhEQgRgOg5g0QAVgZAXgXQB/h+CjhEQCihDCzAAQBvAABpAZQgQAkgQAoQgRArg9CwQgsCDgxB7IgNAAQg/AAg6AYQgnAQghAZQhBgqhog9g");
	this.shape_58.setTransform(541.5375,128.5875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWFYQgwgFh9gRIgVgDIgKgCIkvhFIASguQBDijB/h+QB/h+CjhEQCihDCzAAQBvgBBpAaQgRAkgPAoQgRAqg9CyQgsCCgxB7IgNAAQhAAAg5AYQg7AYgtAtQgPAPgMAPQgygCgigDg");
	this.shape_59.setTransform(533.15,131.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AoqF8QAAi0BEiiQBDijB/h/QB+h+CkhDQCihECzAAQBvAABpAaQgRAjgPAoQgRArg9CxQgsCDgxB6IgNAAQhAAAg6AZQg6AXgtAuQgtAtgYA5QgYA6AABBQAAAUACAUQhEALjgAsQiiAhhxAGQgKhCAAhEg");
	this.shape_60.setTransform(530.6625,147.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AnmIKQhEikAAizQAAizBEiiQBDijB/h/QB+h+CkhEQCihDCzAAQBvAABpAaQgRAjgPAoQgRArg9CxQgsCDgxB7IgNAAQhAAAg6AYQg6AYgtAtQgtAtgYA5QgYA6AABAQAAAuAMArQgWAVgkArQhqB7g7BBQhcBmhQBOIgPAOQhChZgrhng");
	this.shape_61.setTransform(530.6625,167.9625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AkkKrQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCihDCzAAQBvgBBpAaQgRAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQhAAAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAVAzAmAqQgLAkgLAsIghCDQgaBfg8ClIgmBpQh4g+hhhhg");
	this.shape_62.setTransform(530.6625,180.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AADNCQinhEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCihDCzAAQBvgBBpAaQgRAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQhAAAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQAiAiAmAVIADAhIAAATIADIlQhhgPhcgmg");
	this.shape_63.setTransform(530.6625,185.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AADM8QinhEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCihDCzAAQBvgBBpAaQgRAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQhAAAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBHBHBeARIALAYIAKAdQAgBcBJCdIAvCKIAsB/QhNANhQAAQivAAihhBg");
	this.shape_64.setTransform(530.6625,185.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhFM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCihDCzAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgtCDgwB7IgNAAQhAAAg6AYQg6AYgtAtQgsAtgYA6QgYA6AAA/QAABAAYA6QAYA6AsAtQBdBdCCAAQAxBBBHBlIB8CuQA3BLBBBUIgaALQihBBivAAQivAAighBg");
	this.shape_65.setTransform(537.9875,185.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AjbM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgtCDgwB7IgNAAQhAAAg5AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQBKAAA+gdQDZB3CaBeQBRAxBKAyIgeAfQiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_66.setTransform(552.9875,185.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBpAaQgRAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQg/AAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAighAVgoIAsgLQEbhFEfg0QgECohACaQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_67.setTransform(564.5625,185.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQg/AAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAtgtAYg6QAJgWAGgXQAZgOAogdIBghEQBbhAA6guQBphTATgNQA0gkAxgTQAyCOAACZQAACzhECjQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_68.setTransform(564.575,185.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQg/AAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAtgtAYg6QAYg6AAhAQAAgcgFgcIApgfQAtgiBJhAQBVhLAfgaQAxgoBHg0IBLg1QAYAsATAuQBECjAACyQAACzhECjQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_69.setTransform(564.575,185.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQg/AAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAtgtAYg6QAYg6AAhAQAAg/gXg5QBBhaB8iXIBVhnQA7hIAngeIAQgKQBaBqA1CBQBECjAACyQAACzhECjQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_70.setTransform(564.575,185.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQBvgBBoAaQgQAkgPAoQgRAqg9CyQgsCDgxB7IgNAAQg/AAg6AYQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAtgtAYg6QAYg6AAhAQAAg/gYg6QgYg6gtgtIgTgSIAIgTIAehHQAbhAAihpIA5irQAYhEAbg0QB5A/BiBiQB/B/BDCjQBECjAACyQAACzhECjQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBg");
	this.shape_71.setTransform(564.575,185.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AlPM8QiohEiAiAQh/h/hDijQhEijAAizQAAiyBEijQBDijB/h/QB+h+CkhEQCjhDCyAAQCzAACjBDQCkBEB+B+QB/B/BDCjQBECjAACyQAACzhECjQhECjh+B/QiACAioBEQihBBivAAQiuAAihhBgAh5klQg6AYgtAtQgtAtgYA6QgYA6AAA/QAABAAYA6QAYA6AtAtQBdBdCDAAQCEAABdhdQAtgtAYg6QAYg6AAhAQAAg/gYg6QgYg6gtgtQgtgtg6gYQg6gYhAAAQg/AAg6AYg");
	this.shape_72.setTransform(564.575,185.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57}]},8).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,713.7,359.8);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(26));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(34));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(33));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},10).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(38));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(16).to({_off:false},0).wait(34));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},21).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).wait(25));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},19).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(26));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},3).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(31));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83}]},3).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-40.8,115.6,201.60000000000002);


(lib.safetyPin_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F3BD46").s().p("AnQm3IAAgZIOhOXIgaAKg");
	this.shape.setTransform(554.75,306.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3BD46").s().p("ApHjjIHhnNIKuRiIjzD+g");
	this.shape_1.setTransform(566.575,283.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3BD46").s().p("Aq6gLIOHt5IHuUhInfHog");
	this.shape_2.setTransform(578.15,262.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BD46").s().p("AsfCvIT2zsIFJXIIqtKzg");
	this.shape_3.setTransform(588.2,244.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3BD46").s().p("At0FOIYt4nIC8ZUItbNfg");
	this.shape_4.setTransform(596.7,228.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3BD46").s().p("Au5HQIcr8pIBIbIIvoPqg");
	this.shape_5.setTransform(603.65,216.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3BD46").s().p("Av4I0Ifx/wIgSchIxWRYg");
	this.shape_6.setTransform(609.925,206.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(24));

	// pin_head
	this.instance = new lib.pin_head_top_mc("synched",0);
	this.instance.setTransform(6.75,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// pin_circle_inner
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F3BC46").ss(6,2,1).p("ACECeQhAgog2g2Qhbhcgzh4QgDgGgCgF");
	this.shape_7.setTransform(90.1909,657.4534);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3BC46").ss(6,2,1).p("ABNDsQhHhRgqhkQg0h7AAiIQAAgVABgV");
	this.shape_8.setTransform(80.9294,637.0667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3BC46").ss(6,2,1).p("AidFZQgJg2AAg4QAAiIA0h7QAzh4BchdQA6g6BFgq");
	this.shape_9.setTransform(88.7469,593.0676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F3BC46").ss(6,2,1).p("AnkCiQAshMA/g/QBdhbB4gzQB8g1CHAAQCIAAB8A1QBFAdA8Ar");
	this.shape_10.setTransform(129.3803,566.9994);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3BC46").ss(6,2,1).p("Al8hdQBvgpB4AAQCIAAB7A1QB4AzBdBbQAeAeAZAg");
	this.shape_11.setTransform(153.8896,563.1932);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F3BC46").ss(6,2,1).p("AijlBQBOAsBBBBQBcBcAyB4QA1B8AACHQAAAkgDAj");
	this.shape_12.setTransform(188.2687,590.6197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F3BC46").ss(6,2,1).p("Ahjm4QAIAHAIAIQBbBcAzB4QA1B9AACGQAACIg1B8QgfBJgsA/");
	this.shape_13.setTransform(194.6046,611.9135);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3BC46").ss(6,2,1).p("AFikRQgNBKgeBGQgyB4hdBcQhdBch3AzQh8A1iIAAQgaAAgagC");
	this.shape_14.setTransform(169.3788,655.5847);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F3BC46").ss(6,2,1).p("AG4iXQgoBBg3A3QhdBbh4AzQh8A1iHAAQiIAAh8g1QgbgLgagO");
	this.shape_15.setTransform(151.6873,667.0736);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F3BC46").ss(6,2,1).p("AEeCnQiCgCh3gyQh3gzhdhcQg6g6gqhG");
	this.shape_16.setTransform(109.1782,666.7282);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F3BC46").ss(6,2,1).p("ACqDHQhigxhOhOQhchbgzh5QgNgegJgf");
	this.shape_17.setTransform(92.2691,656.6316);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F3BC46").ss(6,2,1).p("AAgBVQgTgjgPgmQgVgxgNgz");
	this.shape_18.setTransform(77.5813,641.3313);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3BC46").ss(6,2,1).p("AATBoQgohogEhu");
	this.shape_19.setTransform(74.6966,630.5216);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F3BC46").ss(6,2,1).p("AgCArQAAgIAAgHQAAgiACgi");
	this.shape_20.setTransform(72.3207,613.7664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},6).wait(29));

	// pin_circle_outline
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F3BC46").ss(14,2,1).p("Ag5gVQA3ASA1AWQADABACAB");
	this.shape_21.setTransform(187.7929,486.7929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F3BC46").ss(14,2,1).p("AjKiYQDJBkCfCfQAVAUATAV");
	this.shape_22.setTransform(221.2511,507.6886);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F3BC46").ss(14,2,1).p("AkQkqQCWBYB8B9QCrCrBnDY");
	this.shape_23.setTransform(236.9173,527.0173);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F3BC46").ss(14,2,1).p("Ak+nDQCUBYB8B7QC/DBBpD4QA3CBAbCH");
	this.shape_24.setTransform(241.8399,542.4774);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F3BC46").ss(14,2,1).p("Aj5qNQA/AxA6A6QC/DABpD5QBuEBAAEaQAAB5gUB1");
	this.shape_25.setTransform(250.0084,573.1002);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F3BC46").ss(14,2,1).p("ADmspQBSDjAAD0QAAEahtEBQhqD6i/DAQhZBZhlBG");
	this.shape_26.setTransform(246.5781,650.4231);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F3BC46").ss(14,2,1).p("AGRofQgYC3hJCtQhqD5jADAQisCtjbBn");
	this.shape_27.setTransform(236.4979,689.3396);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F3BC46").ss(14,2,1).p("AItk/QhVCMh1B1QjBC/j4BqQjtBkkCAJ");
	this.shape_28.setTransform(201.6283,721.0092);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F3BC46").ss(14,2,1).p("AKwClQi5A1jFAAQkaAAkBhuQj6hpjAi/");
	this.shape_29.setTransform(108.3063,733.6503);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F3BC46").ss(14,2,1).p("AHYG0QhYgYhWglQj6hpi/jAQjAjAhqj5QgOgigMgi");
	this.shape_30.setTransform(55.119,706.994);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F3BC46").ss(14,2,1).p("AF4I0QjMhlikijQi/jAhqj5QhajUgQjl");
	this.shape_31.setTransform(39.9037,684.7287);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F3BC46").ss(14,2,1).p("AgbJOQhRjhAAj0QAAkZBskCQAlhWAuhP");
	this.shape_32.setTransform(10.9312,604.4129);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F3BC46").ss(14,2,1).p("Ak8HEQAbiCA1h+QBqj4C/jAQBwhvCDhT");
	this.shape_33.setTransform(34.6212,542.9038);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F3BC46").ss(14,2,1).p("AlRDzQA+hTBKhLQDAi/D5hpQA1gXA2gS");
	this.shape_34.setTransform(60.9032,509.8593);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F3BC46").ss(14,2,1).p("AhNAeQAagNAbgLQA0gVA2gS");
	this.shape_35.setTransform(87.401,488.0365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},1).wait(34));

	// pin_circle_bottom
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkDEgQglgPgmgMQAGh3ADiCQADh8ABjXQCSAcCLA7QDMBWCnCRQhTAzhOA8IiZB3QhaBChNAeIghALQgngWgpgSg");
	this.shape_36.setTransform(196.55,512.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhyGUIgSgSQhxhxiRg+QglgPgmgMQAGh3ADiBQADh8ABjXQCSAbCLA7QD5BpDADAQBvBuBRCBQg+AOgyAMQh8AghkAoQhQAhgpAQQhFAbg1ALg");
	this.shape_37.setTransform(209.675,520.4625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgzGAQhAgLgmgEQgbghgfgfQhxhwiRg+QglgQgmgMQAGh1ADiCQADh9ABjXQCSAbCLA7QD5BqDADAQDAC/BqD5QAeBIAWBJg");
	this.shape_38.setTransform(217.5625,528.5125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ADQIgQh/gxgagLQgvgUgngUQgOgwgUgvQg+iShwhwQhxhwiSg+QglgQgmgMQAGh2ADiCQADh9ABjXQCSAbCMA7QD5BqDADAQDADABpD5QBuECAAEaIgBAiQjChZirhDg");
	this.shape_39.setTransform(220.425,550);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AEfMAQiXhnhbhAIg1gmQAHg2AAg3QAAilhAiYQg+iRhwhwQhxhxiSg+QglgPgmgMQAGh3ADiCQADh8ABjXQCSAbCMA7QD5BpDADAQDADBBpD5QBuEBAAEaQAADthODcIjRiPg");
	this.shape_40.setTransform(220.425,571.1625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AlNLGQAxglAtgsQBwhxA+iSQBAiXAAilQAAikhAiYQg+iShwhwQhxhxiSg+QglgPgmgMQAGh3ADiCQADh8ABjXQCSAbCMA7QD5BpDADAQDADBBpD5QBuECAAEZQAAEahuECQhpD5jADBQisCtjcBmQgzj/g5lag");
	this.shape_41.setTransform(220.425,611.1625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("An9RvIgKkoIgDhKIAYgKQCSg+BxhwQBwhxA+iSQBAiXAAilQAAikhAiYQg+iShwhwQhxhxiSg+QglgPgmgMQAGh3ADiCQADh8ABjXQCSAbCMA7QD5BpDADAQDADBBpD5QBuECAAEZQAAEahuECQhpD5jADBQjADAj5BpQhwAwhzAaIgIjgg");
	this.shape_42.setTransform(220.425,615.9625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AtKVBQByhVBVhhQA8hDBmiSQBLhqAzhBQBAgPA+gaQCSg+BwhxQBwhwA+iSQBAiYAAikQAAilhAiXQg+iShwhxQhwhwiSg+QglgQgmgMQAGh3ADiBQADh9ABjXQCTAbCLA7QD4BqDBDAQDADABpD5QBuECAAEaQAAEZhuECQhpD6jADAQjBDAj4BqQkCBtkaAAQiYAAiRggg");
	this.shape_43.setTransform(193.5125,617.7375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AqXT0Qj5hqjAjAQhahZhGhmIBGgNQBYgOCPgPQC1gTA0gHQBXgLBigRQAzAfA3AYQCXBAClAAQCkAACYhAQCSg+BwhxQBxhwA+iSQBAiYAAikQAAilhAiXQg+iShxhxQhxhwiRg+QglgQgmgMQAGh3ADiBQADh9ABjXQCSAbCLA7QD6BqDADAQDADABqD5QBtECAAEaQAAEZhtECQhqD6jADAQjADAj6BqQkCBtkZAAQkaAAkChtg");
	this.shape_44.setTransform(151.2625,617.7375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AoiT0Qj6hqjAjAQjAjAhqj6QhFijgaitQCEAnBJATQCdAqCAAWQAgAGB1APQA8B/BlBlQBwBxCSA+QCYBAClAAQCkAACXhAQCSg+BxhxQBwhwA+iSQBAiYAAikQAAilhAiXQg+iShwhxQhxhwiSg+QglgQgmgMQAGh3ADiBQADh9ABjXQCSAbCMA7QD5BqDBDAQDADABpD5QBuECAAEaQAAEZhuECQhpD6jADAQjBDAj5BqQkCBtkZAAQkaAAkChtg");
	this.shape_45.setTransform(139.6375,617.7375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AobT0Qj5hqjAjAQjBjAhpj6QhukCAAkZQAAhpAPhlIBhBFQBpBNB8BUQCVBkBVAuIAVALQAQBFAcBCQA9CRBxBxQBxBxCSA+QCXBACkAAQClAACYhAQCSg+BwhxQBxhwA9iSQBBiYgBikQABilhBiXQg9iShxhxQhxhwiRg+QgmgQglgMQAFh3AEiBQACh9ABjXQCTAbCLA7QD6BqDADAQDADABqD5QBtECAAEaQAAEZhtECQhqD6jADAQjADAj6BqQkCBtkaAAQkZAAkChtg");
	this.shape_46.setTransform(138.9,617.7375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AobT0Qj5hqjAjAQjBjAhpj6QhukCAAkZQAAkaBukCQBjjrCxi5IAFAHQAzBFA6BvIBhC8QAqBOA4BTQggA0gXA4QhBCXAAClQAACkBBCYQA9CRBxBxQBxBxCSA+QCXBACkAAQClAACYhAQCSg+BwhxQBxhwA9iSQBBiYgBikQABilhBiXQg9iShxhxQhxhwiRg+QgmgQglgMQAFh3AEiBQACh9ABjXQCTAbCLA7QD6BqDADAQDADABqD5QBtECAAEaQAAEZhtECQhqD6jADAQjADAj6BqQkCBtkaAAQkZAAkChtg");
	this.shape_47.setTransform(138.9,617.7375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AobT0Qj5hqjAjAQjBjAhpj6QhukCAAkZQAAkaBukCQBpj5DBjAQC+i/D2hpQAYBwAMCSQAGA2AMDZIAHBeQgwAkgrArQhxBxg9CSQhBCXAAClQAACkBBCYQA9CRBxBxQBxBxCSA+QCXBACkAAQClAACYhAQCSg+BwhxQBxhwA9iSQBBiYgBikQABilhBiXQg9iShxhxQhxhwiRg+QgmgQglgMQAFh3AEiBQACh9ABjXQCTAbCLA7QD6BqDADAQDADABqD5QBtECAAEaQAAEZhtECQhqD6jADAQjADAj6BqQkCBtkaAAQkZAAkChtg");
	this.shape_48.setTransform(138.9,617.7375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AobT3Qj5hpjAjAQjBjBhpj5QhukCAAkZQAAkaBukCQBpj5DBjBQDAjAD5hpQCghECqgaQACEKgRFFQguANgtATQiSA+hxBxQhxBxg9CRQhBCYAAClQAACkBBCXQA9CSBxBxQBxBwCSA+QCXBACkAAQClAACYhAQCSg+BwhwQBxhxA9iSQBBiXgBikQABilhBiYQg9iShxhwQhxhxiRg+QgmgPglgMQAFh3AEiCQACh8ABjXQCTAbCLA7QD6BpDADAQDADBBqD5QBtECAAEaQAAEZhtECQhqD5jADBQjADAj6BpQkCBukaAAQkZAAkChug");
	this.shape_49.setTransform(138.9,617.3625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AobT/Qj5hpjAjAQjBjBhpj5QhukCAAkaQAAkZBukCQBpj5DBjBQDAjAD5hpQEChuEZAAQEaAAECBuQD6BpDADAQDADBBqD5QBtECAAEZQAAEahtECQhqD5jADBQjADAj6BpQkCBukaAAQkZAAkChugAk7rtQiSA+hxBxQhxBxg9CRQhBCYAACkQAAClBBCXQA9CSBxBxQBxBwCSA+QCXBACkAAQClAACYhAQCSg+BwhwQBxhxA9iSQBBiXgBilQABikhBiYQg9iShxhwQhxhxiRg+QiYhAilAAQikAAiXBAg");
	this.shape_50.setTransform(138.9,616.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).wait(35));

	// pin_LT
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AkDh9IAGgMIIAEJIgHAKg");
	this.shape_51.setTransform(42.55,563.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AoYIJIKp0aIGIHpIoxQ6g");
	this.shape_52.setTransform(70.275,498.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AsNREMAT9gmQIEdKsIwaftg");
	this.shape_53.setTransform(94.75,441.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AvhYzMAcDg1uIC/NWMgXCAshg");
	this.shape_54.setTransform(115.95,391.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AyUfWMAi3hC0IByPmMgcpA3Xg");
	this.shape_55.setTransform(133.9,349.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("EgUnAktMAodhNhIAyRbMghPBAPg");
	this.shape_56.setTransform(148.575,315.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EgWZAo4MAszhV3IAAS3MgkzBHIg");
	this.shape_57.setTransform(160,288.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},12).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).wait(32));

	// pin_RT
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AjOjCIAHgQIGWGVIgHARg");
	this.shape_58.setTransform(208.575,701.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AqbEJIOgunIGXGWIugOog");
	this.shape_59.setTransform(254.675,655.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AwxKeIbM7SIGYGWI7ObTg");
	this.shape_60.setTransform(295.35,614.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A2SP+MAmOgmSIGXGXMgmPAmSg");
	this.shape_61.setTransform(330.6,579.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A68UoMAvigvmIGXGXMgvjAvmg");
	this.shape_62.setTransform(360.45,549.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A+wYbMA3Kg3MIGXGXMg3LA3Mg");
	this.shape_63.setTransform(384.85,525.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("EghuAbYMA9Gg9GIGXGWMg9HA9Hg");
	this.shape_64.setTransform(403.825,506.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58}]},5).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,0,727.6,762.7);


// stage content:
(lib.BSWHLD_Icon_Animations = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baby_mc
	this.instance = new lib.baby_mc("synched",0);
	this.instance.setTransform(183.65,45.6,0.3773,0.3773,0,0,0,16.9,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

	// pin_mc
	this.instance_1 = new lib.safetyPin_mc("synched",0);
	this.instance_1.setTransform(109,48.1,0.0998,0.0998,0,0,0,332.8,377.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56));

	// stork_mc
	this.instance_2 = new lib.stork_mc("synched",0);
	this.instance_2.setTransform(24.1,38.8,0.4528,0.4528,0,0,0,120.4,104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A7U2HMA2pAAAMAAAAsPMg2pAAAg");
	this.shape.setTransform(155.875,132.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("A7UWIMAAAgsPMA2pAAAMAAAAsPg");
	this.shape_1.setTransform(155.875,132.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(56));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130,115,201.8,160.10000000000002);
// library properties:
lib.properties = {
	id: 'E46423B54AE54D4585205B331B0697CF',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['E46423B54AE54D4585205B331B0697CF'] = {
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