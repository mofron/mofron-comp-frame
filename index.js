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
    
    constructor (x_opt, y) {
        try {
            super(('number' === typeof x_opt) ? {param : [x_opt, y]} : x_opt);
            this.name('Frame');
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
    initDomConts (prm) {
        try {
            /* dom contents */
            this.adom().addChild(new mf.Dom('div',this));
            
            /* configure style */
            let bd_clr = this.theme().color(0);
            this.style({
                'border'       : 'solid 1px',
                'border-color' : (null === bd_clr) ?
                                     new mofron.Color(190,190,190).getStyle() : bd_clr.getStyle()
            });
            
            /* size setting */
            if ( (null !== prm) &&
                 ('object'  === typeof prm) &&
                 (undefined !== prm[0]) ) {
                this.size(prm[0], prm[1]);
            } else {
                this.size(100, 100);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (x, y) {
        try {
            if (undefined === x) {
                /* getter */
                return {
                    width  : mofron.func.getLength(this.style('width')),
                    height : mofron.func.getLength(this.style('height'))
                };
            }
            /* setter */
            this.style({
                'width'  : ('number' === typeof x) ? (x + 'px') : x,
                'height' : ('number' === typeof y) ? (y + 'px') : y
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mofron.func.getColor(
                           this.style('background')
                       );
            }
            /* setter */
            if (false === mofron.func.isObject(clr,'Color')) {
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
}
mofron.comp.frame = {};
module.exports = mofron.comp.Frame;
