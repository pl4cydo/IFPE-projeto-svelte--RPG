
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.48.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Components/BotaoComecar.svelte generated by Svelte v3.48.0 */

    const file$2 = "src/Components/BotaoComecar.svelte";

    function create_fragment$3(ctx) {
    	let button;
    	let t;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			t = text(/*Texto*/ ctx[0]);
    			attr_dev(button, "class", "Botao svelte-1xkef03");
    			add_location(button, file$2, 12, 0, 281);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, t);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Texto*/ 1) set_data_dev(t, /*Texto*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function comecar() {
    	bottonRow1.innerHTML = "<p>Hora de dar um quebra! Cuidado!<br> Ele pode cortar sua verba!</p>";
    	bottonRow2.style.visibility = "visible";
    	hpp1.style.visibility = "visible";
    	hpbs.style.visibility = "visible";
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BotaoComecar', slots, []);
    	let { Texto = '' } = $$props;
    	const writable_props = ['Texto'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BotaoComecar> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => comecar();

    	$$self.$$set = $$props => {
    		if ('Texto' in $$props) $$invalidate(0, Texto = $$props.Texto);
    	};

    	$$self.$capture_state = () => ({ Texto, comecar });

    	$$self.$inject_state = $$props => {
    		if ('Texto' in $$props) $$invalidate(0, Texto = $$props.Texto);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [Texto, click_handler];
    }

    class BotaoComecar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { Texto: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BotaoComecar",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get Texto() {
    		throw new Error("<BotaoComecar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set Texto(value) {
    		throw new Error("<BotaoComecar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Components/BotaoMurro.svelte generated by Svelte v3.48.0 */

    const file$1 = "src/Components/BotaoMurro.svelte";

    function create_fragment$2(ctx) {
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			button.textContent = "Murro";
    			attr_dev(button, "class", "Murro svelte-1d21e09");
    			add_location(button, file$1, 21, 0, 578);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function barradevida() {
    	
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BotaoMurro', slots, []);
    	let proeficienciaSupermarlon = 3;
    	let lifeMessiah = 100;

    	function murro() {
    		let acerto = Math.round(Math.random() * 20) + proeficienciaSupermarlon;

    		if (acerto > 13) {
    			let dano = Math.round(Math.random() * 10) + 10 + proeficienciaSupermarlon;
    			lifeMessiah -= dano;
    			let vidaAtual = `${lifeMessiah}`;
    			lifebs.style.width = lifeMessiah + "px";
    			bottonRow1.innerHTML = "<p>Super Marlon foi bem sucedido em dar um murro!<br> MESSIAH HP:" + vidaAtual + "</p>";
    		} else {
    			bottonRow1.innerHTML = "<p>ERROU!</p>";
    		}
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BotaoMurro> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => murro();

    	$$self.$capture_state = () => ({
    		proeficienciaSupermarlon,
    		lifeMessiah,
    		murro,
    		barradevida
    	});

    	$$self.$inject_state = $$props => {
    		if ('proeficienciaSupermarlon' in $$props) proeficienciaSupermarlon = $$props.proeficienciaSupermarlon;
    		if ('lifeMessiah' in $$props) lifeMessiah = $$props.lifeMessiah;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [murro, click_handler];
    }

    class BotaoMurro extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BotaoMurro",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src/Batalha.svelte generated by Svelte v3.48.0 */
    const file = "src/Batalha.svelte";

    function create_fragment$1(ctx) {
    	let link;
    	let t0;
    	let main;
    	let div15;
    	let div14;
    	let div9;
    	let img0;
    	let img0_src_value;
    	let t1;
    	let div8;
    	let div2;
    	let span0;
    	let br0;
    	let t3;
    	let span1;
    	let t5;
    	let div1;
    	let div0;
    	let t6;
    	let div3;
    	let img1;
    	let img1_src_value;
    	let t7;
    	let div4;
    	let img2;
    	let img2_src_value;
    	let t8;
    	let div7;
    	let span2;
    	let br1;
    	let t10;
    	let span3;
    	let t12;
    	let div6;
    	let div5;
    	let t13;
    	let div13;
    	let div10;
    	let p0;
    	let t15;
    	let botaocomecar;
    	let t16;
    	let div12;
    	let p1;
    	let br2;
    	let t18;
    	let div11;
    	let botaomurro;
    	let t19;
    	let button;
    	let current;

    	botaocomecar = new BotaoComecar({
    			props: { Texto: "Começar!" },
    			$$inline: true
    		});

    	botaomurro = new BotaoMurro({ $$inline: true });

    	const block = {
    		c: function create() {
    			link = element("link");
    			t0 = space();
    			main = element("main");
    			div15 = element("div");
    			div14 = element("div");
    			div9 = element("div");
    			img0 = element("img");
    			t1 = space();
    			div8 = element("div");
    			div2 = element("div");
    			span0 = element("span");
    			span0.textContent = "HP:";
    			br0 = element("br");
    			t3 = space();
    			span1 = element("span");
    			span1.textContent = "Super Marlon";
    			t5 = space();
    			div1 = element("div");
    			div0 = element("div");
    			t6 = space();
    			div3 = element("div");
    			img1 = element("img");
    			t7 = space();
    			div4 = element("div");
    			img2 = element("img");
    			t8 = space();
    			div7 = element("div");
    			span2 = element("span");
    			span2.textContent = "HP:";
    			br1 = element("br");
    			t10 = space();
    			span3 = element("span");
    			span3.textContent = "MESSIAH";
    			t12 = space();
    			div6 = element("div");
    			div5 = element("div");
    			t13 = space();
    			div13 = element("div");
    			div10 = element("div");
    			p0 = element("p");
    			p0.textContent = "Let's battle begins!";
    			t15 = space();
    			create_component(botaocomecar.$$.fragment);
    			t16 = space();
    			div12 = element("div");
    			p1 = element("p");
    			p1.textContent = "Movimentos:";
    			br2 = element("br");
    			t18 = space();
    			div11 = element("div");
    			create_component(botaomurro.$$.fragment);
    			t19 = space();
    			button = element("button");
    			button.textContent = "Power!";
    			attr_dev(link, "rel", "stylesheet");
    			attr_dev(link, "href", "styles/batalha.css");
    			add_location(link, file, 1, 1, 15);
    			if (!src_url_equal(img0.src, img0_src_value = "images/backgound.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "id", "imageBackground");
    			add_location(img0, file, 18, 4, 424);
    			add_location(span0, file, 22, 6, 537);
    			add_location(br0, file, 22, 22, 553);
    			add_location(span1, file, 23, 6, 564);
    			attr_dev(div0, "id", "lifep1");
    			add_location(div0, file, 25, 7, 625);
    			attr_dev(div1, "class", "barraHP");
    			add_location(div1, file, 24, 6, 596);
    			attr_dev(div2, "id", "hpp1");
    			add_location(div2, file, 21, 5, 515);
    			if (!src_url_equal(img1.src, img1_src_value = "images/player1.png")) attr_dev(img1, "src", img1_src_value);
    			add_location(img1, file, 30, 6, 705);
    			attr_dev(div3, "id", "player1");
    			add_location(div3, file, 29, 5, 680);
    			if (!src_url_equal(img2.src, img2_src_value = "images/boss_semfundo.png")) attr_dev(img2, "src", img2_src_value);
    			add_location(img2, file, 35, 6, 801);
    			attr_dev(div4, "id", "inimigo");
    			add_location(div4, file, 34, 5, 776);
    			add_location(span2, file, 38, 6, 877);
    			add_location(br1, file, 38, 22, 893);
    			add_location(span3, file, 39, 6, 904);
    			attr_dev(div5, "id", "lifebs");
    			add_location(div5, file, 41, 7, 960);
    			attr_dev(div6, "class", "barraHP");
    			add_location(div6, file, 40, 6, 931);
    			attr_dev(div7, "id", "hpbs");
    			add_location(div7, file, 37, 5, 855);
    			attr_dev(div8, "id", "blocoPersonagem");
    			add_location(div8, file, 19, 4, 482);
    			attr_dev(div9, "id", "topRow");
    			add_location(div9, file, 15, 3, 380);
    			add_location(p0, file, 50, 5, 1118);
    			attr_dev(div10, "id", "bottonRow1");
    			add_location(div10, file, 49, 4, 1091);
    			add_location(p1, file, 55, 5, 1307);
    			add_location(br2, file, 55, 24, 1326);
    			add_location(button, file, 58, 5, 1382);
    			attr_dev(div11, "id", "movimentos");
    			add_location(div11, file, 56, 5, 1336);
    			attr_dev(div12, "id", "bottonRow2");
    			add_location(div12, file, 54, 4, 1280);
    			attr_dev(div13, "id", "botton");
    			add_location(div13, file, 48, 3, 1069);
    			attr_dev(div14, "id", "bloco1");
    			add_location(div14, file, 12, 2, 324);
    			attr_dev(div15, "id", "container");
    			add_location(div15, file, 11, 1, 301);
    			attr_dev(main, "id", "main");
    			add_location(main, file, 10, 0, 283);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, div15);
    			append_dev(div15, div14);
    			append_dev(div14, div9);
    			append_dev(div9, img0);
    			append_dev(div9, t1);
    			append_dev(div9, div8);
    			append_dev(div8, div2);
    			append_dev(div2, span0);
    			append_dev(div2, br0);
    			append_dev(div2, t3);
    			append_dev(div2, span1);
    			append_dev(div2, t5);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			append_dev(div8, t6);
    			append_dev(div8, div3);
    			append_dev(div3, img1);
    			append_dev(div8, t7);
    			append_dev(div8, div4);
    			append_dev(div4, img2);
    			append_dev(div8, t8);
    			append_dev(div8, div7);
    			append_dev(div7, span2);
    			append_dev(div7, br1);
    			append_dev(div7, t10);
    			append_dev(div7, span3);
    			append_dev(div7, t12);
    			append_dev(div7, div6);
    			append_dev(div6, div5);
    			append_dev(div14, t13);
    			append_dev(div14, div13);
    			append_dev(div13, div10);
    			append_dev(div10, p0);
    			append_dev(div10, t15);
    			mount_component(botaocomecar, div10, null);
    			append_dev(div13, t16);
    			append_dev(div13, div12);
    			append_dev(div12, p1);
    			append_dev(div12, br2);
    			append_dev(div12, t18);
    			append_dev(div12, div11);
    			mount_component(botaomurro, div11, null);
    			append_dev(div11, t19);
    			append_dev(div11, button);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(botaocomecar.$$.fragment, local);
    			transition_in(botaomurro.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(botaocomecar.$$.fragment, local);
    			transition_out(botaomurro.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			detach_dev(link);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    			destroy_component(botaocomecar);
    			destroy_component(botaomurro);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Batalha', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Batalha> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BotaoComecar, BotaoMurro });
    	return [];
    }

    class Batalha extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Batalha",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.48.0 */

    function create_fragment(ctx) {
    	let batalha;
    	let current;
    	batalha = new Batalha({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(batalha.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(batalha, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(batalha.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(batalha.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(batalha, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Batalha });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    var app = new App({
    	target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
