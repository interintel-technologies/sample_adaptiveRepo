import{h as w,P as d,d as l,a as ne,u as q,b as oe}from"./polymer-legacy-CVdXdTHq.js";import"./iron-flex-layout-C17s8gyg.js";import"./default-theme-ChQ485_s.js";import{I as se,a as L,b as z}from"./paper-ripple-CP-IWaVj.js";import"./shadow-R2NCNWlE.js";/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/if(!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=w`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;G.setAttribute("style","display: none;");document.head.appendChild(G.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=document.createElement("template");K.setAttribute("style","display: none;");K.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(K.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const re={hostAttributes:{role:"option",tabindex:"0"}},ae=[se,L,re];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({_template:w`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[ae]});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class le{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach(function(i){(!t||t.indexOf(i)<0)&&this.setItemSelected(i,!1)},this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,i){if(t!=null&&i!==this.isSelected(t)){if(i)this.selection.push(t);else{var n=this.selection.indexOf(t);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(t,i)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const P={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new le(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&l(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=l(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return e==null?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,i;i=this.items[t];t++)if(this._valueForItem(i)==e)return t}else return Number(e)},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return t===-1?null:t}var i=e[ne(this.attrForSelected)];return i??e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return l(e).observeNodes(function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var n=i.indexOf(t);if(n>=0){var o=this._indexToValue(n);this._itemActivate(o,t);return}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const J={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return this.selected!=null||this.selectedValues!=null&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map(function(e){return this._indexToValue(this.indexOf(e))},this).filter(function(e){return e!=null},this)):P._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter(function(o){return o!=null});this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);if(this.fallbackSelection&&!this._selection.get().length){var n=this._valueToItem(this.fallbackSelection);n&&this.select(this.fallbackSelection)}},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):e!=null?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e),i=t<0;i?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return e==null?null:e.map(function(t){return this._valueToItem(t)},this)}},he=[P,J];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const S={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),J.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))},this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(this._MODIFIER_KEYS.indexOf(e.key)===-1){this.cancelDebouncer("_clearSearchText");var t=this._searchText||"",i=e.key&&e.key.length==1?e.key:String.fromCharCode(e.keyCode);t+=i.toLocaleLowerCase();for(var n=t.length,o=0,s;s=this.items[o];o++)if(!s.hasAttribute("disabled")){var r=this.attrForItemTitle||"textContent",a=(s[r]||s.getAttribute(r)||"").trim();if(!(a.length<n)&&a.slice(0,n).toLocaleLowerCase()==t){this._setFocusedItem(s);break}}this._searchText=t,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t-i+e)%e];if(!n.hasAttribute("disabled")){var o=l(n).getOwnerRoot()||document;if(this._setFocusedItem(n),l(o).activeElement==n)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t+i)%e];if(!n.hasAttribute("disabled")){var o=l(n).getOwnerRoot()||document;if(this._setFocusedItem(n),l(o).activeElement==n)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),P._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),e&&!e.hasAttribute("disabled")&&!this.disabled&&(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");S._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),S._shiftTabPressed=!1},1)},_onFocus:function(e){if(!S._shiftTabPressed){var t=l(e).rootTarget;t!==this&&typeof t.tabIndex<"u"&&!this.isLightDescendant(t)||(this._defaultFocusAsync=this.async(function(){var i=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),i?this._setFocusedItem(i):this.items[0]&&this._focusNext()}))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){P._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)}};S._shiftTabPressed=!1;const ce=[he,z,S];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({_template:w`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[ce],hostAttributes:{role:"listbox"}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let F;const fe=()=>{if(F!==void 0)return F;const e=document.createElement("div");Object.assign(e.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const t=document.createElement("div");return t.style.width="200px",t.style.height="200px",e.appendChild(t),document.body.appendChild(e),F=Math.abs(e.offsetWidth-100)>1?e.offsetWidth-e.clientWidth:0,document.body.removeChild(e),F},de={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var e;return this.fitInto===window?e=this.fitInto.innerWidth:e=this.fitInto.getBoundingClientRect().width,e},get _fitHeight(){var e;return this.fitInto===window?e=this.fitInto.innerHeight:e=this.fitInto.getBoundingClientRect().height,e},get _fitLeft(){var e;return this.fitInto===window?e=0:e=this.fitInto.getBoundingClientRect().left,e},get _fitTop(){var e;return this.fitInto===window?e=0:e=this.fitInto.getBoundingClientRect().top,e},get _defaultPositionTarget(){var e=l(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if(this.horizontalAlign==="right")return"left";if(this.horizontalAlign==="left")return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return typeof this._memoizedIsRTL>"u"&&(this._memoizedIsRTL=window.getComputedStyle(this).direction=="rtl"),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&(window.getComputedStyle(this).display==="none"?setTimeout((function(){this.fit()}).bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:e.top!=="auto"?"top":e.bottom!=="auto"?"bottom":null,horizontally:e.left!=="auto"?"left":e.right!=="auto"?"right":null},sizedBy:{height:t.maxHeight!=="none",width:t.maxWidth!=="none",minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,o,s,r;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,o=this.sizingTarget.offsetHeight,s=this.sizingTarget.clientWidth,r=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,_={width:e.width+a.left+a.right,height:e.height+a.top+a.bottom},f=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,_,e,t,i),u=f.left+a.left,h=f.top+a.top,c=Math.min(i.right-a.right,u+e.width),v=Math.min(i.bottom-a.bottom,h+e.height);u=Math.max(i.left+a.left,Math.min(u,c-this._fitInfo.sizedBy.minWidth)),h=Math.max(i.top+a.top,Math.min(h,v-this._fitInfo.sizedBy.minHeight));const y=Math.max(c-u,this._fitInfo.sizedBy.minWidth),C=Math.max(v-h,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=y+"px",this.sizingTarget.style.maxHeight=C+"px";const g=u-e.left,E=h-e.top;if(this.style.left=`${g}px`,this.style.top=`${E}px`,this.expandSizingTargetForScrollbars){const j=this.sizingTarget.offsetHeight,Q=this.sizingTarget.clientHeight,ee=o-r,Y=j-Q-ee;if(Y>0){const N=i.height-a.top-a.bottom,H=Math.min(N,C+Y);this.sizingTarget.style.maxHeight=`${H}px`;const k=this.sizingTarget.offsetHeight,A=k-j;let m;f.verticalAlign==="top"?m=E:f.verticalAlign==="middle"?m=E-A/2:f.verticalAlign==="bottom"&&(m=E-A),m=Math.max(i.top+a.top,Math.min(m,i.bottom-a.bottom-k)),this.style.top=`${m}px`}const $=this.sizingTarget.offsetWidth,te=this.sizingTarget.clientWidth,ie=n-s,X=$-te-ie;if(X>0){const N=fe(),H=i.width-a.left-a.right,k=Math.min(H,y+X-N);this.sizingTarget.style.maxWidth=`${k}px`;const A=this.sizingTarget.offsetWidth+N,m=A-$;let b;f.horizontalAlign==="left"?b=g:f.horizontalAlign==="center"?b=g-m/2:f.horizontalAlign==="right"&&(b=g-m),b=Math.max(i.left+a.left,Math.min(b,i.right-a.right-A)),this.style.left=`${b}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,n,o){this.__sizeDimension(e,t,i,n,o)},__sizeDimension:function(e,t,i,n,o){var s=this._fitInfo,r=this.__getNormalizedRect(this.fitInto),a=o==="Width"?r.width:r.height,_=t===n,f=_?a-e[n]:e[i],u=s.margin[_?i:n],h="offset"+o,c=this[h]-this.sizingTarget[h];this.sizingTarget.style["max"+o]=a-u-f-c+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!(e.vertically&&e.horizontally)){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var n=i.top-t.top+(i.height-t.height)/2;this.style.top=n+"px"}if(!e.horizontally){var o=i.left-t.left+(i.width-t.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var n=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),o=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(n)*t.width+Math.abs(o)*t.height},__getPosition:function(e,t,i,n,o,s){var r=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var a=0,_=r.length;a<_;a++){var f={};for(var u in r[a])f[u]=r[a][u];r.push(f)}r[0].top=r[1].top+=o.height,r[2].top=r[3].top-=o.height,r[4].left=r[6].left+=o.width,r[5].left=r[7].left-=o.width}t=t==="auto"?null:t,e=e==="auto"?null:e,(!e||e==="center")&&(r.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),r.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),(!t||t==="middle")&&(r.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),r.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),t==="middle"&&e==="center"&&r.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(var h,a=0;a<r.length;a++){var c=r[a],v=c.verticalAlign===t,y=c.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&v&&y){h=c;break}var C=(!t||v)&&(!e||y);if(!(!this.dynamicAlign&&!C)){if(c.offscreenArea=this.__getOffscreenArea(c,i,s),c.offscreenArea===0&&C){h=c;break}h=h||c;var g=c.offscreenArea-h.offscreenArea;(g<0||g===0&&(v||y))&&(h=c)}}return h}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var B=new Set;const ue={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(B.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&e._interestedResizables.indexOf(this)===-1&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){if(this._notifyingDescendant){e.stopPropagation();return}q||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=l(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(B.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?B.delete(this):B.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var x=Element.prototype,R=x.matches||x.matchesSelector||x.mozMatchesSelector||x.msMatchesSelector||x.oMatchesSelector||x.webkitMatchesSelector;class pe{getTabbableNodes(t){var i=[],n=this._collectTabbableNodes(t,i);return n?this._sortByTabIndex(i):i}isFocusable(t){return R.call(t,"input, select, textarea, button, object")?R.call(t,":not([disabled])"):R.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(t){return this.isFocusable(t)&&R.call(t,':not([tabindex="-1"])')&&this._isVisible(t)}_normalizedTabIndex(t){if(this.isFocusable(t)){var i=t.getAttribute("tabindex")||0;return Number(i)}return-1}_collectTabbableNodes(t,i){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var n=t;if(!this._isVisible(n))return!1;var o=this._normalizedTabIndex(n),s=o>0;o>=0&&i.push(n);var r;n.localName==="content"||n.localName==="slot"?r=l(n).getDistributedNodes():r=l(n.root||n).children;for(var a=0;a<r.length;a++)s=this._collectTabbableNodes(r[a],i)||s;return s}_isVisible(t){var i=t.style;return i.visibility!=="hidden"&&i.display!=="none"?(i=window.getComputedStyle(t),i.visibility!=="hidden"&&i.display!=="none"):!1}_sortByTabIndex(t){var i=t.length;if(i<2)return t;var n=Math.ceil(i/2),o=this._sortByTabIndex(t.slice(0,n)),s=this._sortByTabIndex(t.slice(n));return this._mergeSortByTabIndex(o,s)}_mergeSortByTabIndex(t,i){for(var n=[];t.length>0&&i.length>0;)this._hasLowerTabOrder(t[0],i[0])?n.push(i.shift()):n.push(t.shift());return n.concat(t,i)}_hasLowerTabOrder(t,i){var n=Math.max(t.tabIndex,0),o=Math.max(i.tabIndex,0);return n===0||o===0?o>n:n>o}}const me=new pe;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({_template:w`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&l(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){!this.opened&&this.parentNode===document.body&&l(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);(t.transitionDuration==="0s"||t.opacity==0)&&this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame((function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}).bind(this)))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class _e{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,oe(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var t=document.activeElement;for((!t||!(t instanceof Element))&&(t=document.body);t.root&&l(t.root).activeElement;)t=l(t.root).activeElement;return t}_bringOverlayAtIndexToFront(t){var i=this._overlays[t];if(i){var n=this._overlays.length-1,o=this._overlays[n];if(o&&this._shouldBeBehindOverlay(i,o)&&n--,!(t>=n)){var s=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(i)<=s&&this._applyOverlayZ(i,s);t<n;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[n]=i}}}addOrRemoveOverlay(t){t.opened?this.addOverlay(t):this.removeOverlay(t)}addOverlay(t){var i=this._overlays.indexOf(t);if(i>=0){this._bringOverlayAtIndexToFront(i),this.trackBackdrop();return}var n=this._overlays.length,o=this._overlays[n-1],s=Math.max(this._getZ(o),this._minimumZ),r=this._getZ(t);if(o&&this._shouldBeBehindOverlay(t,o)){this._applyOverlayZ(o,s),n--;var a=this._overlays[n-1];s=Math.max(this._getZ(a),this._minimumZ)}r<=s&&this._applyOverlayZ(t,s),this._overlays.splice(n,0,t),this.trackBackdrop()}removeOverlay(t){var i=this._overlays.indexOf(t);i!==-1&&(this._overlays.splice(i,1),this.trackBackdrop())}currentOverlay(){var t=this._overlays.length-1;return this._overlays[t]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(t){this._minimumZ=Math.max(this._minimumZ,t)}focusOverlay(){var t=this.currentOverlay();t&&t._applyFocus()}trackBackdrop(){var t=this._overlayWithBackdrop();!t&&!this._backdropElement||(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())}getBackdrops(){for(var t=[],i=0;i<this._overlays.length;i++)this._overlays[i].withBackdrop&&t.push(this._overlays[i]);return t}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]}_getZ(t){var i=this._minimumZ;if(t){var n=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);n===n&&(i=n)}return i}_setZ(t,i){t.style.zIndex=i}_applyOverlayZ(t,i){this._setZ(t,i+2)}_overlayInPath(t){t=t||[];for(var i=0;i<t.length;i++)if(t[i]._manager===this)return t[i]}_onCaptureClick(t){var i=this._overlays.length-1;if(i!==-1)for(var n=l(t).path,o;(o=this._overlays[i])&&this._overlayInPath(n)!==o&&(o._onCaptureClick(t),o.allowClickThrough);)i--}_onCaptureFocus(t){var i=this.currentOverlay();i&&i._onCaptureFocus(t)}_onCaptureKeyDown(t){var i=this.currentOverlay();i&&(z.keyboardEventMatchesKeys(t,"esc")?i._onCaptureEsc(t):z.keyboardEventMatchesKeys(t,"tab")&&i._onCaptureTab(t))}_shouldBeBehindOverlay(t,i){return!t.alwaysOnTop&&i.alwaysOnTop}}const ge=new _e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var D={pageX:0,pageY:0},U=null,Z=[],W=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],M,V;function ve(e){p.indexOf(e)>=0||(p.length===0&&xe(),p.push(e),V=p[p.length-1])}function ye(e){var t=p.indexOf(e);t!==-1&&(p.splice(t,1),V=p[p.length-1],p.length===0&&we())}const p=[];function be(e){if(e.cancelable&&Ie(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];D.pageX=t.pageX,D.pageY=t.pageY}}function xe(){M=M||be.bind(void 0);for(var e=0,t=W.length;e<t;e++)document.addEventListener(W[e],M,{capture:!0,passive:!1})}function we(){for(var e=0,t=W.length;e<t;e++)document.removeEventListener(W[e],M,{capture:!0,passive:!1})}function Ie(e){var t=l(e).rootTarget;if(e.type!=="touchmove"&&U!==t&&(U=t,Z=Ce(l(e).path)),!Z.length)return!0;if(e.type==="touchstart")return!1;var i=Te(e);return!Ae(Z,i.deltaX,i.deltaY)}function Ce(e){for(var t=[],i=e.indexOf(V),n=0;n<=i;n++)if(e[n].nodeType===Node.ELEMENT_NODE){var o=e[n],s=o.style;s.overflow!=="scroll"&&s.overflow!=="auto"&&(s=window.getComputedStyle(o)),(s.overflow==="scroll"||s.overflow==="auto")&&t.push(o)}return t}function Ae(e,t,i){if(!(!t&&!i))for(var n=Math.abs(i)>=Math.abs(t),o=0;o<e.length;o++){var s=e[o],r=!1;if(n?r=i<0?s.scrollTop>0:s.scrollTop<s.scrollHeight-s.clientHeight:r=t<0?s.scrollLeft>0:s.scrollLeft<s.scrollWidth-s.clientWidth,r)return s}}function Te(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if(!("deltaX"in e)){if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=e.axis===1?e.detail:0,t.deltaY=e.axis===2?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=D.pageX-i.pageX,t.deltaY=D.pageY-i.pageY}}return t}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const T={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:ge},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||l(this).querySelector("[autofocus]")||this},get _focusableNodes(){return me.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=l(this).observeNodes(this._onNodesChange)},detached:function(){this._observer&&l(this).unobserveNodes(this._observer),this._observer=null;for(var e in this.__rafs)this.__rafs[e]!==null&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){var t=this.fire("iron-overlay-canceled",e,{cancelable:!0});t.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||Oe(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=l(e).path;t.indexOf(this)===-1?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,n=t?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var s=this._manager.deepActiveElement;o=s===i||s===this}o&&(e.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;i[e]!==null&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame((function(){i[e]=null,t.call(this)}).bind(this))},__updateScrollObservers:function(e,t,i){!e||!t||!this.__isValidScrollAction(i)?(ye(this),this.__removeScrollListeners()):(i==="lock"&&(this.__saveScrollPosition(),ve(this)),this.__addScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],q)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return e==="lock"||e==="refit"||e==="cancel"},__onCaptureScroll:function(e){if(!this.__isAnimating&&!(l(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e);break}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Se=e=>e.assignedSlot||e.parentNode||e.host,Oe=(e,t)=>{for(let i=t;i;i=Se(i))if(i===e)return!0;return!1},ze=[de,ue,T];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ee={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(e?n=this.animationConfig[e]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,s=0;o=n[s];s++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,t,i);else if(o.id){var r=t[o.id];r?(r.isClone||(t[o.id]=this._cloneConfig(r),r=t[o.id]),this._copyProperties(r,o)):t[o.id]=o}else i.push(o)}},getAnimationConfig:function(e){var t={},i=[];this._getAnimationConfigRecursive(e,t,i);for(var n in t)i.push(t[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ne={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let o,s=0;o=e[s];s++){let r=document.createElement(o.name);if(r.isNeonAnimation){let a=null;r.configure||(r.configure=function(_){return null}),a=r.configure(o),i.push({result:a,config:o,neonAnimation:r})}else console.warn(this.is+":",o.name,"not found!")}for(var n=0;n<i.length;n++){let o=i[n].result,s=i[n].config,r=i[n].neonAnimation;try{typeof o.cancel!="function"&&(o=document.timeline.play(o))}catch(a){o=null,console.warn("Couldnt play","(",s.name,").",a)}o&&t.push({neonAnimation:r,config:s,animation:o})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if(e[i].animation.playState!="finished"){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(var t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",t,{bubbles:!1});return}this._active[e]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=(function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}).bind(this)}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}},ke=[Ee,Ne];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({_template:w`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[L,z,ze,ke],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=l(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){(!this.sizingTarget||this.sizingTarget===this)&&(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),T._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):T._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):T._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?(!this.scrollAction||this.scrollAction==="lock")&&(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():T._applyFocus.apply(this,arguments)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const I={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},o=n[t],s,r=0;s=o[r];r++)e.style[s]=i;e.style[t]=i},complete:function(e){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({is:"fade-in-animation",behaviors:[I],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({is:"fade-out-animation",behaviors:[I],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({is:"paper-menu-grow-height-animation",_template:null,behaviors:[I],configure:function(e){var t=e.node,i=t.getBoundingClientRect(),n=i.height;return this._effect=new KeyframeEffect(t,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(e)),this._effect}});d({is:"paper-menu-grow-width-animation",_template:null,behaviors:[I],configure:function(e){var t=e.node,i=t.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(t,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(e)),this._effect}});d({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[I],configure:function(e){var t=e.node,i=t.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(t,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(e)),this._effect}});d({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[I],configure:function(e){var t=e.node,i=t.getBoundingClientRect(),n=i.height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var O={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const Fe=d({_template:w`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[z,L],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:O.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:O.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:O.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=l(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):t!=null&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){L._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger,n=l(t).path;n.indexOf(i)>-1&&e.preventDefault()}});Object.keys(O).forEach(function(e){Fe[e]=O[e]});
