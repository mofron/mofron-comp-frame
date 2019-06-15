/**
 * @file   mofron-comp-frame/index.js
 * @brief  frame component for mofron
 * @feature default size is 1rem × 1rem
 *          frame size is includes border size
 * @author simpart
 */
const mf     = require('mofron');
const Radius = require('mofron-effect-radius');
const Shadow = require('mofron-effect-shadow');
const Border = require('mofron-effect-border');

let mod_name = "Frame";
mf.comp.Frame = class extends mf.Component {
    /**
     * initialize frame component
     * 
     * @param (string (size)) frame width
     * @param (string (size)) frame height
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name(mod_name);
            this.prmMap(["width", "height"]);
            this.prmOpt(po, p2);
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
                new Border({ color: [190,190,190], tag: mod_name }),
                new Radius({ value: "0rem", tag: mod_name }),
                new Shadow({ value: "0rem", tag: mod_name })
            ]);
            
            this.target().styleListener(
                "border-width",
                (p1,p2,p3) => {
                    try { p3.size(this.m_width, this.m_height); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
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
     * @param (string(color)/array(r,g,b)) background color
     * @return (string) background color
     * @type tag parameter
     */
    mainColor (prm) {
        try { return this.tgtColor("background", prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border color
     *
     * @param (string(color)/array(r,g,b)) border color
     * @return (string) border color
     * @type tag parameter
     */
    accentColor (prm) {
        try {
            this.effect(["Shadow", mod_name]).color(prm);
            return this.effect(["Border", mod_name]).color(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radius effect
     *
     * @param (string(size)) radius effect value
     * @return (string(size)) radius effect value
     * @tag parameter
     */
    radius (val) {
        try {
            let radi = this.effect(["Radius", mod_name]);
            if (undefined === val) {
                /* getter */
                return radi.value();
            }
            /* setter */
            radi.value(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow effect
     *
     * @param (string) shadow value
     * @return (string) shadow value
     * @type tag parameter
     */
    shadow (val) {
        try {
            let shd = this.effect(["Shadow", mod_name]);
            if (undefined === val) {
                /* getter */
                return shd.value();
            }
            /* setter */
            shd.value(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    ///**
    // * getter border effect
    // *
    // * @return (Border) border effect
    // */
    //border (val) {
    //    try {
    //        let brd = this.effect(['Border', 'init']);
    //        if ( (undefined === val) && (undefined === clr) ) {
    //            /* getter */
    //            return [ brd.width(), brd.color() ];
    //        }
    //        /* setter */
    //        brd.width(val);
    //        brd.color(clr);
     //   } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    /**
     * frame width
     * 
     * @param (string(size)) frame width
     * @return (string(size)) frame width
     * @type tag parameter
     */
    width (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return super.width();
            }
            /* setter */
            if (null === prm) {
                super.width(prm);
                return;
            }
            let fsiz = mf.func.getSize(this.frmSize(prm));
            if (0 > fsiz.value()) {
                fsiz.value(0);
            }
            return super.width(fsiz.toString());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame height
     * 
     * @param (string(size)) frame height
     * @return (string(size)) frame height
     * @type tag parameter
     */
    height (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return super.height();
            }
            /* setter */
            if (null === prm) {
                super.height(prm);
                return;
            }
            let fsiz = mf.func.getSize(this.frmSize(prm));
            if (0 > fsiz.value()) {
                fsiz.value(0);
            }
            return super.height(fsiz.toString());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame size getter
     *
     * @param (string(size)) frame size
     * @return frame size without border width
     *
     * @type private
     */
    frmSize (prm) {
        try {
            if (undefined === prm) {
                return;
            }
            let siz = mf.func.getSize(prm);
            if ( (null === siz) || ( ('px' !== siz.type()) && ('rem' !== siz.type()) ) ) {
                return prm;
            }
            let bwid = this.effect(['Border', mod_name]).width();
            
            try {
                return mf.func.sizeDiff(prm, mf.func.sizeSum(bwid, bwid));
            } catch (e) {
                return prm;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame;
/* end of file */
