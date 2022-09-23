var app=function(){"use strict";function noop(){}function run(e){return e()}function blank_object(){return Object.create(null)}function run_all(e){e.forEach(run)}function is_function(e){return"function"==typeof e}function safe_not_equal(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function is_empty(e){return 0===Object.keys(e).length}function append(e,t){e.appendChild(t)}function insert(e,t,n){e.insertBefore(t,n||null)}function detach(e){e.parentNode.removeChild(e)}function element(e){return document.createElement(e)}function text(e){return document.createTextNode(e)}function space(){return text(" ")}function listen(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function stop_propagation(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function attr(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function children(e){return Array.from(e.childNodes)}function set_data(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function set_input_value(e,t){e.value=null==t?"":t}function set_style(e,t,n,o){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let current_component;function set_current_component(e){current_component=e}function bubble(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(e){render_callbacks.push(e)}const seen_callbacks=new Set;let flushidx=0;function flush(){const e=current_component;do{for(;flushidx<dirty_components.length;){const e=dirty_components[flushidx];flushidx++,set_current_component(e),update(e.$$)}for(set_current_component(null),dirty_components.length=0,flushidx=0;binding_callbacks.length;)binding_callbacks.pop()();for(let e=0;e<render_callbacks.length;e+=1){const t=render_callbacks[e];seen_callbacks.has(t)||(seen_callbacks.add(t),t())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,seen_callbacks.clear(),set_current_component(e)}function update(e){if(null!==e.fragment){e.update(),run_all(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(add_render_callback)}}const outroing=new Set;function transition_in(e,t){e&&e.i&&(outroing.delete(e),e.i(t))}function mount_component(e,t,n,o){const{fragment:a,on_mount:r,on_destroy:c,after_update:l}=e.$$;a&&a.m(t,n),o||add_render_callback((()=>{const t=r.map(run).filter(is_function);c?c.push(...t):run_all(t),e.$$.on_mount=[]})),l.forEach(add_render_callback)}function destroy_component(e,t){const n=e.$$;null!==n.fragment&&(run_all(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(e,t){-1===e.$$.dirty[0]&&(dirty_components.push(e),schedule_update(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function init(e,t,n,o,a,r,c,l=[-1]){const s=current_component;set_current_component(e);const i=e.$$={fragment:null,ctx:null,props:r,update:noop,not_equal:a,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:blank_object(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return i.ctx&&a(i.ctx[t],i.ctx[t]=r)&&(!i.skip_bound&&i.bound[t]&&i.bound[t](r),d&&make_dirty(e,t)),n})):[],i.update(),d=!0,run_all(i.before_update),i.fragment=!!o&&o(i.ctx),t.target){if(t.hydrate){const e=children(t.target);i.fragment&&i.fragment.l(e),e.forEach(detach)}else i.fragment&&i.fragment.c();t.intro&&transition_in(e.$$.fragment),mount_component(e,t.target,t.anchor,t.customElement),flush()}set_current_component(s)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!is_empty(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function create_fragment(e){let t,n,o,a,r,c,l,s,i,d,p,u,_,f,h,m,$,b,v,g,k,y,S,x;return{c(){t=element("div"),n=element("main"),o=element("h1"),o.textContent="Счёт",a=space(),r=element("div"),c=element("div"),l=element("input"),s=space(),i=element("div"),d=text(e[2]),p=space(),u=element("button"),u.textContent="−",_=space(),f=element("div"),h=element("input"),m=space(),$=element("div"),b=text(e[3]),v=space(),g=element("button"),g.textContent="−",k=space(),y=element("button"),y.textContent="Сброс",attr(o,"class","svelte-1h08hrl"),attr(l,"placeholder","Игрок 1"),attr(l,"type","text"),attr(l,"class","name-inpt svelte-1h08hrl"),attr(i,"class","score-view svelte-1h08hrl"),set_style(i,"--color",e[6]),attr(u,"class","inc-button svelte-1h08hrl"),attr(c,"class","first svelte-1h08hrl"),attr(h,"placeholder","Игрок 2"),attr(h,"type","text"),attr(h,"class","name-inpt svelte-1h08hrl"),attr($,"class","score-view svelte-1h08hrl"),set_style($,"--color",e[5]),attr(g,"class","inc-button svelte-1h08hrl"),attr(f,"class","second svelte-1h08hrl"),attr(r,"class","score svelte-1h08hrl"),set_style(y,"margin-top","0.5rem"),attr(y,"class","inc-button svelte-1h08hrl"),attr(n,"class","svelte-1h08hrl"),attr(t,"class","app svelte-1h08hrl")},m(w,C){insert(w,t,C),append(t,n),append(n,o),append(n,a),append(n,r),append(r,c),append(c,l),set_input_value(l,e[0]),append(c,s),append(c,i),append(i,d),append(c,p),append(c,u),append(r,_),append(r,f),append(f,h),set_input_value(h,e[1]),append(f,m),append(f,$),append($,b),append(f,v),append(f,g),append(n,k),append(n,y),e[15](t),S||(x=[listen(l,"input",e[11]),listen(l,"click",stop_propagation(e[10])),listen(u,"click",stop_propagation(e[12])),listen(h,"input",e[13]),listen(h,"click",stop_propagation(e[9])),listen(g,"click",stop_propagation(e[14])),listen(y,"click",stop_propagation(e[7])),listen(t,"click",e[8])],S=!0)},p(e,[t]){1&t&&l.value!==e[0]&&set_input_value(l,e[0]),4&t&&set_data(d,e[2]),64&t&&set_style(i,"--color",e[6]),2&t&&h.value!==e[1]&&set_input_value(h,e[1]),8&t&&set_data(b,e[3]),32&t&&set_style($,"--color",e[5])},i:noop,o:noop,d(n){n&&detach(t),e[15](null),S=!1,run_all(x)}}}function instance($$self,$$props,$$invalidate){let firstColor,secondColor,firstName=window.localStorage.getItem("firstName"),secondName=window.localStorage.getItem("secondName"),firstScore=window.localStorage.getItem("firstScore")??0,secondScore=window.localStorage.getItem("secondScore")??0,saveToLocalStorage=(event,name)=>{window.localStorage.setItem(name,eval(name))},clearScore=()=>{$$invalidate(2,firstScore=0),$$invalidate(3,secondScore=0)},app;setTimeout((()=>{$$invalidate(2,firstScore=firstScore??0),$$invalidate(3,secondScore=secondScore??0)}),0);let appClickHandler=e=>{console.log(e,e.x,app.getBoundingClientRect().width/2),e.x>app.getBoundingClientRect().width/2?$$invalidate(3,secondScore++,secondScore):$$invalidate(2,firstScore++,firstScore)};function click_handler_1(e){bubble.call(this,$$self,e)}function click_handler(e){bubble.call(this,$$self,e)}function input0_input_handler(){firstName=this.value,$$invalidate(0,firstName)}const click_handler_2=()=>$$invalidate(2,firstScore=Math.max(0,firstScore-1));function input1_input_handler(){secondName=this.value,$$invalidate(1,secondName)}const click_handler_3=()=>$$invalidate(3,secondScore=Math.max(0,secondScore-1));function div5_binding(e){binding_callbacks[e?"unshift":"push"]((()=>{app=e,$$invalidate(4,app)}))}return $$self.$$.update=()=>{4&$$self.$$.dirty&&saveToLocalStorage(null,"firstScore"),8&$$self.$$.dirty&&saveToLocalStorage(null,"secondScore"),1&$$self.$$.dirty&&saveToLocalStorage(event,"firstName"),2&$$self.$$.dirty&&saveToLocalStorage(event,"secondName"),12&$$self.$$.dirty&&$$invalidate(6,firstColor=firstScore===secondScore?"#000":firstScore>secondScore?"#ff3e00":"#000"),12&$$self.$$.dirty&&$$invalidate(5,secondColor=firstScore===secondScore||firstScore>secondScore?"#000":"#ff3e00")},[firstName,secondName,firstScore,secondScore,app,secondColor,firstColor,clearScore,appClickHandler,click_handler_1,click_handler,input0_input_handler,click_handler_2,input1_input_handler,click_handler_3,div5_binding]}class App extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}const app=new App({target:document.body,props:{name:"world"}});return app}();
//# sourceMappingURL=bundle.js.map