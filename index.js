/**
 * @file   mofron-comp-frame/index.js
 * @author simpart
 */
const mf     = require('mofron');
const Radius = require('mofron-effect-radius');
const Shadow = require('mofron-effect-shadow');
const Border = require('mofron-effect-border');
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
            
            /* configure border style */
            this.effect([this.border()]);
            
            this.target().styleListener(
                'border-width',
                (p1,p2,p3) => {
                    try { p3.size(p3.width(), p3.height()); } catch (e) {
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
    
    border (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                if (undefined === this.m_border) {
                    this.border(new Border({color : new mf.Color(190,190,190)}));
                }
                return this.m_border;
            }
            /* setter */
            if (undefined !== this.m_border) {
                this.m_border.execOption(prm.getOption());
                return;
            }
            this.m_border = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            let ret = super.width(prm);
            if (undefined === ret) {
                let bwid = this.sizeValue('border-width');
                let wid  = super.sizeValue('width');
                if ( ('px' === wid.type()) || ('rem' === wid.type()) ) {
                    super.width(
                        mf.func.sizeDiff(this.width(), (bwid.value()*2) + bwid.type())
                    );
                }
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
                let hei  = super.sizeValue('height');
                if ( ('px' === hei.type()) || ('rem' === hei.type()) ) {
                    super.height(
                        mf.func.sizeDiff(this.height(), (bwid.value()*2) + bwid.type())
                    );
                }
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
