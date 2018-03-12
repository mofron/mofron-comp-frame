/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Radius = require('mofron-effect-radius');
let Shadow = require('mofron-effect-shadow');

/**
 * @class Frame
 * @brief frame component class
 */
mf.comp.Frame = class extends mf.Component {
    constructor (xo, y) {
        try {
            super();
            this.name('Frame');
            this.prmOpt(xo, y);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize contents
     * 
     * @param disp : (bool) visible flag
     */
    initDomConts (x, y) {
        try {
            super.initDomConts();
            
            /* configure style */
            let bd_clr = this.theme().color(0);
            this.style({
                'border'       : 'solid',
                'border-color' : (null === bd_clr) ?
                                     new mofron.Color(190,190,190).getStyle() : bd_clr.getStyle(),
                'border-width' : '1px'
            });
            
            /* size setting */
            if (undefined !== x) {
                this.size(x, y);
            } else {
                /* this size is default size */
                this.size(100, 100);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            let clr = this.theme().color(0);
            if ((null !== clr) && (null === this.color())) {
                this.color(clr);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (bgd, bdr) {
        try {
            let ret = super.color(bgd);
            if (undefined !== bdr) {
                /* set border color */
                if (true !== mf.func.isInclude(bdr, 'Color')) {
                    throw new Error('invalid parameter');
                }
                this.style({
                    'border-color' : bdr.getStyle()
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    radius (val) {
        try {
            this.addEffect(new Radius(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (val) {
        try {
            this.addEffect(new Shadow(val));
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
