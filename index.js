/**
 * @file   mofron-comp-frame/index.js
 * @brief  frame component for mofron
 * @feature default size is 1rem × 1rem
 *          frame size is includes border size
 * @license MIT
 */
const Radius = require('mofron-effect-radius');
const Shadow = require('mofron-effect-shadow');
const Border = require('mofron-effect-border');
const comutl = mofron.util.common;
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * initialize frame component
     * 
     * @param (mixed) width parameter
     *                key-value: component option
     * @param (string (size)) height parameter
     * @short width,height
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname("Frame");
            this.shortForm("width", "height");
            
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1, p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            
	    let pvt = { private:true };
            /* configure border style */
            this.effect([
                new Border({ color: [190,190,190], tag: "Frame" }),
		new Radius("0rem"), new Shadow({ suspend:true })
            ],pvt);
            
            this.childDom().style().listener(
                "border-width",
                (p1,p2,p3) => {
                    try {
		        let o_bdr = comutl.sizesum(p2["border-width"],p2["border-width"]);
		        p3.size(
                            comutl.sizesum(cmputl.size(p3,"width"), o_bdr),
			    comutl.sizesum(cmputl.size(p3,"height"), o_bdr),
			);
	            } catch (e) {}
                },
                this
            );
            this.width("1rem",pvt);
	    this.height("1rem",pvt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * background color
     * 
     * @param (mixed (color)) string: background color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (string) background color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
	    return cmputl.color(this, "background", prm, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border color
     * 
     * @param (mixed (color)) string: border color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed (color)) border color
     * @type parameter
     */
    accentColor (prm, opt) {
        try {
            this.effect({ modname: "Shadow" }).color(prm);
            return this.effect({ modname: "Border" }).color(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radius effect
     *
     * @param (string (size)) radius effect value
     * @return (string (size)) radius effect value
     * @type parameter
     */
    radius (prm) {
        try {
            return this.effect({ modname: "Radius" }).value(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow effect
     *
     * @param (string (size)) shadow value
     * @return (string (size)) shadow value
     * @type parameter
     */
    shadow (prm, clr) {
        try {
	    if (undefined === prm) {
                return this.effect({ modname: "Shadow" }).blur();
	    }
	    let shadow = this.effect({ modname: "Shadow" });
	    shadow.suspend(false);
	    shadow.value(prm);
            let blur_siz = comutl.getsize(prm);
	    blur_siz.value(blur_siz.value()*5);
	    shadow.blur(blur_siz);
            if (undefined !== clr) {
                shadow.color(clr);
	    }

	    if (true === this.isExists()) {
                shadow.execute();
	    }
            //return this.effect({ modname: "Shadow" }).blur(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border width setter
     * 
     * @param (string(size)) top border width
     * @param (string(size)) right border width
     * @param (string(size)) bottom border width
     * @param (string(size)) left border width
     * @type parameter
     */
    borderWidth (top, right, bottom, left) {
        try {
	    if (1 === arguments.length) {
                this.effect({ modname: "Border" }).width(top);
	    } else {
	        this.style({ 'border-width':null }, { lock:true });
                this.style({
                    "border-top-width"    : top,
                    "border-right-width"  : right,
		    "border-bottom-width" : bottom,
		    "border-left-width"   : left
	        }, { lock:true });
            }
	    if (true === this.isExists()) {
                this.effect({ modname: "Border" }).execute();
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    borderColor (prm) {
        try {
            let ret = this.effect({ modname: "Border" }).color(prm);
            if (undefined === prm) {
                return ret;
	    }
            if (true === this.isExists()) {
                this.effect({ modname: "Border" }).execute();
            }
        } catch (e) {
	    console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame width
     * 
     * @param (string (size)) frame width
     * @param (key-value) style option
     * @return (string (size)) frame width
     * @type parameter
     */
    width (prm, opt) {
        try {
	    return this.frmsiz("width", prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame height
     * 
     * @param (string (size)) frame height
     * @param (key-value) style option
     * @return (string (size)) frame height
     * @type parameter
     */
    height (prm, opt) {
        try {
	    return this.frmsiz("height", prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set frame size
     * 
     * @param (string) size target (width,height)
     * @type private
     */
    frmsiz (tgt, val, opt) {
        try {
	    if (("width" !== tgt) && ("height" !== tgt)) {
                throw new Error("invalid parameter");
	    }
	    let bdr_siz = this.effect({ name: "Border", tag: "Frame" }).width();
	    bdr_siz = comutl.sizesum(bdr_siz, bdr_siz);
            if (undefined === val) {
                /* getter */
		return comutl.sizesum(super[tgt](), bdr_siz);
	    }
            /* setter */
            super[tgt](comutl.sizesum(val, (null === bdr_siz) ? null :  "-" + bdr_siz));
	} catch (e) {
            return super[tgt](val);
	}
    }
}
/* end of file */
