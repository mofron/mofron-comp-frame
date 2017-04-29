/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
require('mofron-effect-radius');
require('mofron-effect-shadow');

/**
 * @class Frame
 * @brief frame component class
 */
mofron.comp.Frame = class extends mofron.Component {
    
    constructor (phei, wid) {
        try {
            super();
            this.name('Frame');
            this.prmOpt(
                ('number' === typeof wid) ? {param : [phei, wid]} : phei
            );
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
            this.vdom().addChild(new mofron.Dom('div',this));
            
            /* configure style */
            this.style({
                'border'       : 'solid 1px',
                'border-color' : new mofron.Color(190,190,190).getStyle()
            });
            
            /* size setting */
            if ( (null !== prm) && ('object' === typeof prm) ) {
                this.size(prm[0], prm[1]);
            } else {
                this.size(100, 100);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (hei, wid) {
        try {
            if (undefined === hei) {
                /* getter */
                return [
                    mofron.func.getLength(this.style('height')),
                    mofron.func.getLength(this.style('width'))
                ];
            }
            /* setter */
            this.style({
                'height' : ('number' === typeof hei) ? (hei + 'px') : hei,
                'width'  : ('number' === typeof wid) ? (wid + 'px') : wid
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
                return mofron.func.getColor(this.style('background'));
            }
            /* setter */
            if (false === mofron.func.isObject(clr,'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({'background' : clr.getStyle()});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    radius (val) {
        try {
            this.addEffect(new mofron.effect.Radius(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (val) {
        try {
            this.addEffect(new mofron.effect.Shadow(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.frame = {};
module.exports = mofron.comp.Frame;
