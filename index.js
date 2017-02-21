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
    /**
     * initialize frame component
     *
     * @param prm_opt : (obujct) [0]-> height size, [1]-> width size
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('Frame');

            this.prmOpt(prm_opt);
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
            var frm = new mofron.Dom('div',this);
            this.vdom().addChild(frm);
            this.target(frm);
            
            this.style('border', 'solid 1px black');
            
            if ((null !== prm) && ('object' === (typeof prm))) {
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
            var _hei  = (hei === undefined) ? null : hei;
            var _wid  = (wid === undefined) ? null : wid;
            
            if ( (null === _hei) &&
                 (null === _wid)) {
                return [
                    this.style('height'),
                    this.style('width')
                ];
            }
            
            if ( ('number' != (typeof _hei)) ||
                 ('number' != (typeof _wid)) ) {
                throw new Error('invalid parameter');
            }
            
            this.style('height', _hei + 'px');
            this.style('width' , _wid + 'px');
            this.border
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
            this.style('background', clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    border (wid,clr) {
        try {
            if (undefined === wid) {
                /* getter */
                return new Array(
                               this.style('border-width'),
                               mofron.func.getColor(this.style('border-color'))
                           );
            }
            /* setter */
            if (null !== wid) {
                if ('number' !== typeof wid) {
                    throw new Error('invalid parameter');
                }
                this.style('border-width', wid + 'px');
            }
            
            if (undefined !== clr) {
                if (false === mofron.func.isObject(clr,'Color')) {
                    throw new Error('invalid paramter');
                }
                this.style('border-color', clr.getStyle());
            }
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
