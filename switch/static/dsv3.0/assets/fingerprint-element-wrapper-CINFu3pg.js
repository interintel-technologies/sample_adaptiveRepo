import{S as N,k as D,a as R,j as y}from"./index-C2PWchud.js";class L extends N{static get is(){return"fingerprint-element"}static get properties(){return{result:String,e:{type:Object}}}constructor(){super(),this.e={}}updated(r){if(r.has("e")){const t=this;w().get(function(n,i){t.result=n})}}render(){return D``}getValue(){return this.result}getName(){return this.e.formName}validate(){return new this.Validation(!0,"valid")}valid(r){}invalid(r){}init(r,t){super.init(r,t);const a=this;w().get(function(i,o){a.result=i})}}window.customElements.define(L.is,L);var w=function(e){if(!(this instanceof w))return new w(e);var r={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[],excludeDoNotTrack:!0,excludePixelRatio:!0};this.options=this.extend(e,r),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};w.prototype={extend:function(e,r){if(e==null)return r;for(var t in e)e[t]!=null&&r[t]!==e[t]&&(r[t]=e[t]);return r},get:function(e){var r=this,t={data:[],addPreprocessedComponent:function(a){var n=a.value;typeof r.options.preprocessor=="function"&&(n=r.options.preprocessor(a.key,n)),t.data.push({key:a.key,value:n})}};t=this.userAgentKey(t),t=this.languageKey(t),t=this.colorDepthKey(t),t=this.deviceMemoryKey(t),t=this.pixelRatioKey(t),t=this.hardwareConcurrencyKey(t),t=this.screenResolutionKey(t),t=this.availableScreenResolutionKey(t),t=this.timezoneOffsetKey(t),t=this.sessionStorageKey(t),t=this.localStorageKey(t),t=this.indexedDbKey(t),t=this.addBehaviorKey(t),t=this.openDatabaseKey(t),t=this.cpuClassKey(t),t=this.platformKey(t),t=this.doNotTrackKey(t),t=this.pluginsKey(t),t=this.canvasKey(t),t=this.webglKey(t),t=this.webglVendorAndRendererKey(t),t=this.adBlockKey(t),t=this.hasLiedLanguagesKey(t),t=this.hasLiedResolutionKey(t),t=this.hasLiedOsKey(t),t=this.hasLiedBrowserKey(t),t=this.touchSupportKey(t),t=this.customEntropyFunction(t),this.fontsKey(t,function(a){r.audioKey(a,function(n){var i=[];r.each(n.data,function(l){var d=l.value;d&&typeof d.join=="function"?i.push(d.join(";")):i.push(d)});var o=r.x64hash128(i.join("~~~"),31);return e(o,n.data)})})},audioKey:function(e,r){if(this.options.excludeAudioFP)return r(e);var t=window.OfflineAudioContext||window.webkitOfflineAudioContext,a=new t(1,44100,44100),n=a.createOscillator();n.type="triangle",n.frequency.setValueAtTime(1e4,a.currentTime);var i=a.createDynamicsCompressor();this.each([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(o){i[o[0]]!==void 0&&typeof i[o[0]].setValueAtTime=="function"&&i[o[0]].setValueAtTime(o[1],a.currentTime)}),a.oncomplete=function(o){var l=o.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(d,f){return d+Math.abs(f)},0).toString();return n.disconnect(),i.disconnect(),e.addPreprocessedComponent({key:"audio_fp",value:l}),r(e)},n.connect(i),i.connect(a.destination),n.start(0),a.startRendering()},customEntropyFunction:function(e){return typeof this.options.customFunction=="function"&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1}),e},deviceMemoryKey:function(e){return this.options.excludeDeviceMemory||e.addPreprocessedComponent({key:"device_memory",value:this.getDeviceMemory()}),e},getDeviceMemory:function(){return navigator.deviceMemory||-1},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var r;return this.options.detectScreenOrientation?r=window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height]:r=[window.screen.width,window.screen.height],e.addPreprocessedComponent({key:"resolution",value:r}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var r;return window.screen.availWidth&&window.screen.availHeight&&(this.options.detectScreenOrientation?r=window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:r=[window.screen.availHeight,window.screen.availWidth]),typeof r<"u"&&e.addPreprocessedComponent({key:"available_resolution",value:r}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:new Date().getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.addPreprocessedComponent({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return!this.options.excludeWebGL&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e},webglVendorAndRendererKey:function(e){return!this.options.excludeWebGLVendorAndRenderer&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl_vendor",value:this.getWebglVendorAndRenderer()}),e},adBlockKey:function(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,r){return this.options.excludeJsFonts?this.flashFontsKey(e,r):this.jsFontsKey(e,r)},flashFontsKey:function(e,r){if(this.options.excludeFlashFonts||!this.hasSwfObjectLoaded()||!this.hasMinFlashInstalled()||typeof this.options.swfPath>"u")return r(e);this.loadSwfAndDetectFonts(function(t){e.addPreprocessedComponent({key:"swf_fonts",value:t.join(";")}),r(e)})},jsFontsKey:function(e,r){var t=this;return setTimeout(function(){var a=["monospace","sans-serif","serif"],n=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],i=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];t.options.extendedJsFonts&&(n=n.concat(i)),n=n.concat(t.options.userDefinedFonts),n=n.filter(function(u,c){return n.indexOf(u)===c});var o="mmmmmmmmmmlli",l="72px",d=document.getElementsByTagName("body")[0],f=document.createElement("div"),s=document.createElement("div"),T={},v={},h=function(){var u=document.createElement("span");return u.style.position="absolute",u.style.left="-9999px",u.style.fontSize=l,u.style.fontStyle="normal",u.style.fontWeight="normal",u.style.letterSpacing="normal",u.style.lineBreak="auto",u.style.lineHeight="normal",u.style.textTransform="none",u.style.textAlign="left",u.style.textDecoration="none",u.style.textShadow="none",u.style.whiteSpace="normal",u.style.wordBreak="normal",u.style.wordSpacing="normal",u.innerHTML=o,u},m=function(u,c){var p=h();return p.style.fontFamily="'"+u+"',"+c,p},g=function(){for(var u=[],c=0,p=a.length;c<p;c++){var x=h();x.style.fontFamily=a[c],f.appendChild(x),u.push(x)}return u},S=function(){for(var u={},c=0,p=n.length;c<p;c++){for(var x=[],E=0,F=a.length;E<F;E++){var b=m(n[c],a[E]);s.appendChild(b),x.push(b)}u[n[c]]=x}return u},M=function(u){for(var c=!1,p=0;p<a.length;p++)if(c=u[p].offsetWidth!==T[a[p]]||u[p].offsetHeight!==v[a[p]],c)return c;return c},B=g();d.appendChild(f);for(var C=0,O=a.length;C<O;C++)T[a[C]]=B[C].offsetWidth,v[a[C]]=B[C].offsetHeight;var _=S();d.appendChild(s);for(var P=[],A=0,I=n.length;A<I;A++)M(_[n[A]])&&P.push(n[A]);d.removeChild(s),d.removeChild(f),e.addPreprocessedComponent({key:"js_fonts",value:P}),r(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):e.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){var e=[];if(navigator.plugins)for(var r=0,t=navigator.plugins.length;r<t;r++)navigator.plugins[r]&&e.push(navigator.plugins[r]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(a,n){return a.name>n.name?1:a.name<n.name?-1:0})),this.map(e,function(a){var n=this.map(a,function(i){return[i.type,i.suffixes].join("~")}).join(",");return[a.name,a.description,n].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var r=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(r,function(t){try{return new window.ActiveXObject(t),t}catch{return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,r=0,t=this.options.sortPluginsFor.length;r<t;r++){var a=this.options.sortPluginsFor[r];if(navigator.userAgent.match(a)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.addPreprocessedComponent({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch{return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch{return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch{return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,r=!1;typeof navigator.maxTouchPoints<"u"?e=navigator.maxTouchPoints:typeof navigator.msMaxTouchPoints<"u"&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),r=!0}catch{}var t="ontouchstart"in window;return[e,r,t]},getCanvasFp:function(){var e=[],r=document.createElement("canvas");r.width=2e3,r.height=200,r.style.display="inline";var t=r.getContext("2d");return t.rect(0,0,10,10),t.rect(2,2,6,6),e.push("canvas winding:"+(t.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(125,1,62,20),t.fillStyle="#069",this.options.dontUseFakeFontInCanvas?t.font="11pt Arial":t.font="11pt no-real-font-123",t.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),t.globalCompositeOperation="multiply",t.fillStyle="rgb(255,0,255)",t.beginPath(),t.arc(50,50,50,0,Math.PI*2,!0),t.closePath(),t.fill(),t.fillStyle="rgb(0,255,255)",t.beginPath(),t.arc(100,50,50,0,Math.PI*2,!0),t.closePath(),t.fill(),t.fillStyle="rgb(255,255,0)",t.beginPath(),t.arc(75,100,50,0,Math.PI*2,!0),t.closePath(),t.fill(),t.fillStyle="rgb(255,0,255)",t.arc(75,75,75,0,Math.PI*2,!0),t.arc(75,75,25,0,Math.PI*2,!0),t.fill("evenodd"),r.toDataURL&&e.push("canvas fp:"+r.toDataURL()),e.join("~")},getWebglFp:function(){var e,r=function(h){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+h[0]+", "+h[1]+"]"},t=function(h){var m=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic");if(m){var g=h.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return g===0&&(g=2),g}else return null};if(e=this.getWebglCanvas(),!e)return null;var a=[],n="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",i="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var l=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var d=e.createProgram(),f=e.createShader(e.VERTEX_SHADER);e.shaderSource(f,n),e.compileShader(f);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,i),e.compileShader(s),e.attachShader(d,f),e.attachShader(d,s),e.linkProgram(d),e.useProgram(d),d.vertexPosAttrib=e.getAttribLocation(d,"attrVertex"),d.offsetUniform=e.getUniformLocation(d,"uniformOffset"),e.enableVertexAttribArray(d.vertexPosArray),e.vertexAttribPointer(d.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(d.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems);try{a.push(e.canvas.toDataURL())}catch{}a.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),a.push("webgl aliased line width range:"+r(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+r(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+t(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+r(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var T=e.getExtension("WEBGL_debug_renderer_info");T&&(a.push("webgl unmasked vendor:"+e.getParameter(T.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(T.UNMASKED_RENDERER_WEBGL)))}catch{}if(!e.getShaderPrecisionFormat)return a.join("~");var v=this;return v.each(["FLOAT","INT"],function(h){v.each(["VERTEX","FRAGMENT"],function(m){v.each(["HIGH","MEDIUM","LOW"],function(g){v.each(["precision","rangeMin","rangeMax"],function(S){var M=e.getShaderPrecisionFormat(e[m+"_SHADER"],e[g+"_"+h])[S];S!=="precision"&&(S="precision "+S);var B=["webgl ",m.toLowerCase()," shader ",g.toLowerCase()," ",h.toLowerCase()," ",S,":",M];a.push(B.join(""))})})})}),a.join("~")},getWebglVendorAndRenderer:function(){try{var e=this.getWebglCanvas(),r=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(r.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(r.UNMASKED_RENDERER_WEBGL)}catch{return null}},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var r=!1;try{document.body.appendChild(e),r=document.getElementsByClassName("adsbox")[0].offsetHeight===0,document.body.removeChild(e)}catch{r=!1}return r},getHasLiedLanguages:function(){if(typeof navigator.languages<"u")try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch{return!0}return!1},getHasLiedResolution:function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},getHasLiedOs:function(){var e=navigator.userAgent.toLowerCase(),r=navigator.oscpu,t=navigator.platform.toLowerCase(),a;e.indexOf("windows phone")>=0?a="Windows Phone":e.indexOf("win")>=0?a="Windows":e.indexOf("android")>=0?a="Android":e.indexOf("linux")>=0?a="Linux":e.indexOf("iphone")>=0||e.indexOf("ipad")>=0?a="iOS":e.indexOf("mac")>=0?a="Mac":a="Other";var n;if("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?n=!0:n=!1,n&&a!=="Windows Phone"&&a!=="Android"&&a!=="iOS"&&a!=="Other")return!0;if(typeof r<"u"){if(r=r.toLowerCase(),r.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone")return!0;if(r.indexOf("linux")>=0&&a!=="Linux"&&a!=="Android")return!0;if(r.indexOf("mac")>=0&&a!=="Mac"&&a!=="iOS")return!0;if((r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!=(a==="Other"))return!0}return t.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone"||(t.indexOf("linux")>=0||t.indexOf("android")>=0||t.indexOf("pike")>=0)&&a!=="Linux"&&a!=="Android"||(t.indexOf("mac")>=0||t.indexOf("ipad")>=0||t.indexOf("ipod")>=0||t.indexOf("iphone")>=0)&&a!=="Mac"&&a!=="iOS"?!0:(t.indexOf("win")===-1&&t.indexOf("linux")===-1&&t.indexOf("mac")===-1)!=(a==="Other")||typeof navigator.plugins>"u"&&a!=="Windows"&&a!=="Windows Phone"},getHasLiedBrowser:function(){var e=navigator.userAgent.toLowerCase(),r=navigator.productSub,t;if(e.indexOf("firefox")>=0?t="Firefox":e.indexOf("opera")>=0||e.indexOf("opr")>=0?t="Opera":e.indexOf("chrome")>=0?t="Chrome":e.indexOf("safari")>=0?t="Safari":e.indexOf("trident")>=0?t="Internet Explorer":t="Other",(t==="Chrome"||t==="Safari"||t==="Opera")&&r!=="20030107")return!0;var a=eval.toString().length;if(a===37&&t!=="Safari"&&t!=="Firefox"&&t!=="Other")return!0;if(a===39&&t!=="Internet Explorer"&&t!=="Other")return!0;if(a===33&&t!=="Chrome"&&t!=="Opera"&&t!=="Other")return!0;var n;try{throw"a"}catch(i){try{i.toSource(),n=!0}catch{n=!1}}return!!(n&&t!=="Firefox"&&t!=="Other")},isCanvasSupported:function(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e=this.getWebglCanvas();return!!window.WebGLRenderingContext&&!!e},isIE:function(){return navigator.appName==="Microsoft Internet Explorer"?!0:!!(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return typeof window.swfobject<"u"},hasMinFlashInstalled:function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var r="___fp_swf_loaded";window[r]=function(i){e(i)};var t=this.options.swfContainerId;this.addFlashDivNode();var a={onReady:r},n={allowScriptAccess:"always",menu:"false"};window.swfobject.embedSWF(this.options.swfPath,t,"1","1","9.0.0",!1,a,n,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),r=null;try{r=e.getContext("webgl")||e.getContext("experimental-webgl")}catch{}return r||(r=null),r},each:function(e,r,t){if(e!==null){if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(r,t);else if(e.length===+e.length){for(var a=0,n=e.length;a<n;a++)if(r.call(t,e[a],a,e)==={})return}else for(var i in e)if(e.hasOwnProperty(i)&&r.call(t,e[i],i,e)==={})return}},map:function(e,r,t){var a=[];return e==null?a:this.nativeMap&&e.map===this.nativeMap?e.map(r,t):(this.each(e,function(n,i,o){a[a.length]=r.call(t,n,i,o)}),a)},x64Add:function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];return t[3]+=e[3]+r[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]+r[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]+r[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]+r[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},x64Multiply:function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];return t[3]+=e[3]*r[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]*r[3],t[1]+=t[2]>>>16,t[2]&=65535,t[2]+=e[3]*r[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]*r[3],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[2]*r[2],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[3]*r[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]*r[3]+e[1]*r[2]+e[2]*r[1]+e[3]*r[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},x64Rotl:function(e,r){return r%=64,r===32?[e[1],e[0]]:r<32?[e[0]<<r|e[1]>>>32-r,e[1]<<r|e[0]>>>32-r]:(r-=32,[e[1]<<r|e[0]>>>32-r,e[0]<<r|e[1]>>>32-r])},x64LeftShift:function(e,r){return r%=64,r===0?e:r<32?[e[0]<<r|e[1]>>>32-r,e[1]<<r]:[e[1]<<r-32,0]},x64Xor:function(e,r){return[e[0]^r[0],e[1]^r[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1]),e},x64hash128:function(e,r){e=e||"",r=r||0;for(var t=e.length%16,a=e.length-t,n=[0,r],i=[0,r],o=[0,0],l=[0,0],d=[2277735313,289559509],f=[1291169091,658871167],s=0;s<a;s=s+16)o=[e.charCodeAt(s+4)&255|(e.charCodeAt(s+5)&255)<<8|(e.charCodeAt(s+6)&255)<<16|(e.charCodeAt(s+7)&255)<<24,e.charCodeAt(s)&255|(e.charCodeAt(s+1)&255)<<8|(e.charCodeAt(s+2)&255)<<16|(e.charCodeAt(s+3)&255)<<24],l=[e.charCodeAt(s+12)&255|(e.charCodeAt(s+13)&255)<<8|(e.charCodeAt(s+14)&255)<<16|(e.charCodeAt(s+15)&255)<<24,e.charCodeAt(s+8)&255|(e.charCodeAt(s+9)&255)<<8|(e.charCodeAt(s+10)&255)<<16|(e.charCodeAt(s+11)&255)<<24],o=this.x64Multiply(o,d),o=this.x64Rotl(o,31),o=this.x64Multiply(o,f),n=this.x64Xor(n,o),n=this.x64Rotl(n,27),n=this.x64Add(n,i),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,1390208809]),l=this.x64Multiply(l,f),l=this.x64Rotl(l,33),l=this.x64Multiply(l,d),i=this.x64Xor(i,l),i=this.x64Rotl(i,31),i=this.x64Add(i,n),i=this.x64Add(this.x64Multiply(i,[0,5]),[0,944331445]);switch(o=[0,0],l=[0,0],t){case 15:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+14)],48));case 14:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+13)],40));case 13:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+12)],32));case 12:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+11)],24));case 11:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+10)],16));case 10:l=this.x64Xor(l,this.x64LeftShift([0,e.charCodeAt(s+9)],8));case 9:l=this.x64Xor(l,[0,e.charCodeAt(s+8)]),l=this.x64Multiply(l,f),l=this.x64Rotl(l,33),l=this.x64Multiply(l,d),i=this.x64Xor(i,l);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(s+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(s)]),o=this.x64Multiply(o,d),o=this.x64Rotl(o,31),o=this.x64Multiply(o,f),n=this.x64Xor(n,o)}return n=this.x64Xor(n,[0,e.length]),i=this.x64Xor(i,[0,e.length]),n=this.x64Add(n,i),i=this.x64Add(i,n),n=this.x64Fmix(n),i=this.x64Fmix(i),n=this.x64Add(n,i),i=this.x64Add(i,n),("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}};w.VERSION="1.8.0";const K=({element:e})=>{const r=R.useRef(null);return R.useEffect(()=>{r.current&&e&&(r.current.e=e)},[e]),y.jsx(y.Fragment,{children:e?y.jsx("fingerprint-element",{style:{display:"none"},id:"fingerprint-element",ref:r}):y.jsx("p",{children:"Loading data..."})})};export{K as default};