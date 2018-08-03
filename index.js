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
            this.style({
                'border-style' : 'solid',
                'border-width' : '1px'
            });
            
            /* set default option */
            this.size(100, 100);
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
            this.style({
                'background' : prm.getStyle()
            });
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
            this.style({
                'border-color' : prm.getStyle()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    baseColor () {}
    
    radius (val) {
        try {
            this.addEffect(new Radius(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (val, clr) {
        try {
            this.addEffect(
                new Shadow(
                    val,
                    (undefined === clr) ? this.mainColor() : clr
                )
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            return super.width(
                ('number' === typeof val)? val-2 : val
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            return super.height(
                ('number' === typeof val)? val-2 : val
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame;
/* end of file */
