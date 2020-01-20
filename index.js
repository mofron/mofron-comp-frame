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
            this.name("Frame");
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
            
            /* configure border style */
            this.effect([
                new Border({ color: [190,190,190] }),new Radius("0rem"), new Shadow("0rem")
            ]);
            
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
            
            this.size("1rem", "1rem");
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
            this.effect({ name: "Shadow" }).color(prm);
            return this.effect({ name: "Border" }).color(prm);
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
            return this.effect({ name: "Radius" }).value(prm);
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
    shadow (prm) {
        try {
            return this.effect({ name: "Shadow" }).value(prm);
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
	    let bdr_siz = comutl.sizesum(
	                      cmputl.size(this, "border-width"),
			      cmputl.size(this, "border-width")
			  );
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
