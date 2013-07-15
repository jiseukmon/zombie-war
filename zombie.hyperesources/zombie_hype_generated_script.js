//	HYPE.documents["zombie"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "zombie.hyperesources";
	var documentName = "zombie";
	var documentLoaderFilename = "zombie_hype_generated_script.js";
	var mainContainerID = "zombie_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"cut007.jpg",p:1},"3":{n:"cut003.jpg",p:1},"4":{n:"cut004.jpg",p:1},"0":{n:"dossier-start-bg.jpg",p:1},"5":{n:"cut005.jpg",p:1},"1":{n:"cut001.jpg",p:1},"6":{n:"cut006.jpg",p:1},"2":{n:"cut002.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:0}],v:{"2":{o:"content-box",h:"0",x:"visible",a:7,q:"100% 100%",b:8,j:"absolute",r:"inline",c:625,k:"div",z:"1",d:944},"17":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"cover",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"4":{o:"content-box",h:"1",x:"visible",a:7,q:"100% 100%",b:16,j:"absolute",r:"inline",c:617,k:"div",z:"1",d:928},"18":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"},"19":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"caption001",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"3"},{x:2,p:"600px",c:"#FFFFFF",v:{"6":{o:"content-box",h:"2",x:"visible",a:22,q:"100% 100%",b:30,j:"absolute",r:"inline",c:595,k:"div",z:"1",d:899},"22":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"},"27":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"caption002",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"5"},{x:3,p:"600px",c:"#FFFFFF",v:{"8":{o:"content-box",h:"3",x:"visible",a:13,q:"100% 100%",b:24,j:"absolute",r:"inline",c:614,k:"div",z:"1",d:911},"23":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"},"28":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"caption003",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"7"},{x:4,p:"600px",c:"#FFFFFF",v:{"29":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"10":{o:"content-box",h:"4",x:"visible",a:11,q:"100% 100%",b:26,j:"absolute",r:"inline",c:613,k:"div",z:"1",d:908},"24":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"}},n:"caption004",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"9"},{x:5,p:"600px",c:"#FFFFFF",v:{"12":{o:"content-box",h:"5",x:"visible",a:17,q:"100% 100%",b:24,j:"absolute",r:"inline",c:605,k:"div",z:"1",d:911},"25":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"},"30":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"caption005",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"11"},{x:6,p:"600px",c:"#FFFFFF",v:{"26":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"},"14":{o:"content-box",h:"6",x:"visible",a:15,q:"100% 100%",b:33,j:"absolute",r:"inline",c:609,k:"div",z:"1",d:894},"31":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"sample001",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"13"},{x:7,p:"600px",c:"#FFFFFF",v:{"16":{o:"content-box",h:"7",x:"visible",a:18,q:"100% 100%",b:35,j:"absolute",r:"inline",c:606,k:"div",z:"1",d:890},"39":{b:0,z:"3",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"38":{b:0,z:"2",K:"Solid",c:306,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:320,y:"preserve",J:"Solid"}},n:"sample002",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"15"},{x:8,p:"600px",c:"#FFFFFF",v:{"37":{I:"None",J:"None",a:34,x:"visible",b:149,j:"absolute",K:"None",c:571,k:"div",z:"1",d:396,L:"None",U:"htmlwidget.html",V:"0",W:""},"41":{b:665,z:"3",K:"Solid",c:594,L:"Solid",d:265,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,sceneOid:"1",transition:3}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}},n:"video",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"36"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

