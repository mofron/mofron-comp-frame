/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
const mf     = require('mofron');
const Radius = require('mofron-effect-radius');
const Shadow = require('mofron-effect-shadow');
/**
 * @class Frame
 * @brief frame component class
 */
mf.comp.Frame = class extends mf.Component {
    constructor (po, p2) {
        try {
            super();
            this.name('Frame');
            this.prmMap('width', 'height');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize contents
     * 
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            /* configure style */
            this.style({ 'border-style' : 'solid' });
            this.sizeValue('border-width', '0.01rem');
            
            /* set default option */
            this.size('1rem', '1rem');
            this.accentColor(new mofron.Color(190,190,190));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return mf.func.getColor(this.style('background'));
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'background' : prm.getStyle() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return mf.func.getColor(this.style('border-color')); 
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'border-color' : prm.getStyle() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    baseColor () {}
    
    radius (val) {
        try { this.effect([ new Radius(val) ]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (val, clr) {
        try { this.effect([ new Shadow(val, clr) ]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            let ret = super.width(prm);
            if (undefined === ret) {
                let bwid = this.sizeValue('border-width');
                if (null === bwid) {
                    return;
                }
                super.width(
                    mf.func.sizeSum(this.width(), '-' + (bwid.value()*2) + bwid.type())
                );
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            let ret = super.height(prm);
            if (undefined === ret) {
                let bwid = this.sizeValue('border-width');
                if (null === bwid) {
                    return;
                }
                super.height(
                    mf.func.sizeSum(this.height(), '-' + (bwid.value()*2) + bwid.type())
                );
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame;
/* end of file */
