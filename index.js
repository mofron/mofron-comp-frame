/**
 * @file   mofron-comp-frame/index.js
 * @brief  frame component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Radius = require('mofron-effect-radius');
const Shadow = require('mofron-effect-shadow');
const Border = require('mofron-effect-border');

mf.comp.Frame = class extends mf.Component {
    /**
     * initialize frame component
     *
     * @param p1 (object) frame option
     * @param p1 (string) width css value
     * @param p2 (string) height css value
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Frame');
            this.prmMap(['width', 'height']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize contents
     * 
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            /* configure border style */
            this.effect([
                new Border({ value: '0.01rem', color: [190,190,190], tag: 'init' }),
                new Radius({ value: '0rem', tag: 'init' }),
                new Shadow({ value: '0rem', tag: 'init' })
            ]);
            
            this.target().styleListener(
                'border-width',
                (p1,p2,p3) => {
                    try { p3.size(this.m_width, this.m_height); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
            /* set default option */
            this.size('1rem', '1rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter background color
     *
     * @param p1 (string) color css value
     * @param p1 (Array) [red(0-255), green(0-255), blue(0-255)]
     * @param p1 (undefined) call as getter
     * @return (string) color css value
     */
    mainColor (prm) {
        try { return this.tgtColor('background', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border color
     *
     * @param p1 (string) color css value
     * @param p1 (Array) [red(0-255), green(0-255), blue(0-255)]
     * @param p1 (undefined) call as getter
     * @return (string) color css value
     */
    accentColor (prm) {
        try { return this.effect(['Border', 'init']).color(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter radius value
     *
     * @param p1 (string) radius value
     * @param p1 (undefined) call as getter
     * @return (string) radius value
     */
    radius (val, tp) {
        try {
            let radi = this.effect(['Radius', 'init']);
            if (undefined === val) {
                /* getter */
                return [ radi.value(), radi.type() ];
            }
            /* setter */
            radi.value(val);
            radi.type(tp);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter shadow value
     *
     * @param p1 (string) shadow value
     * @param p1 (undefined) call as getter
     * @return (string) shadow value
     */
    shadow (val, clr) {
        try {
            let shd = this.effect(['Shadow', 'init']);
            if (undefined === val) {
                /* getter */
                return [ shd.value(), shd.color() ];
            }
            /* setter */
            shd.value(val);
            shd.color(clr);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * getter border effect
     *
     * @return (Border) border effect
     */
    border (val, clr) {
        try {
            let brd = this.effect(['Border', 'init']);
            if (undefined === val) {
                /* getter */
                return [ brd.width(), brd.color() ];
            }
            /* setter */
            brd.width(val);
            brd.color(clr);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter frame width
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
     * setter/getter frame height
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
     * return frame size without border width
     *
     * @note private method
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
            let bwid = this.effect(['Border', 'init']).width();
            
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
