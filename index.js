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
    
    /**
     * initialize contents
     * 
     * @param disp : (bool) visible flag
     */
    initDomConts (x, y) {
        try {
            this.name('Frame');
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
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mf.func.getColor(
                           this.style('background')
                       );
            }
            /* setter */
            if (false === mf.func.isObject(clr,'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'background' : clr.getStyle() });
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
            super.width(val-2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            super.height(val-2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame;
