/**
 * @file   frame.js
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
     * initialize button component
     *
     * @param prm (string) button text contents
     * @param opt (object) option
     */
    constructor (prm, opt) {
        try {
            super(prm);
            this.name('Frame');
            
            if (null !== opt) {
                this.option(opt);
            }
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
            var frm = new mofron.util.Dom('div',this);
            this.vdom().addChild(frm);
            this.target(frm);
            
            this.style('border', 'solid 1px black');
            
            if ('number' === (typeof prm)) {
                this.size(prm,prm);
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
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    radius (val) {
        try {
            this.setEffect(new mofron.effect.Radius(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (val) {
        try {
            this.setEffect(new mofron.effect.Shadow(val));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
