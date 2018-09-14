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
        try { return this.border().color(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    baseColor () {}
    
    radius (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_radius) ? 0 : this.m_radius.value();
            }
            /* setter */
            if (undefined === this.m_radius) {
                this.m_radius = new Radius(prm);
                this.effect([ this.m_radius ]);
            } else {
                this.m_radius.value(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    shadow (prm, clr) {
        try { 
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_shadow) ? 0 : this.m_shadow.value();
            }
            /* setter */
            if (undefined === this.m_shadow) {
                this.m_shadow = new Shadow(prm, clr);
                this.effect([ this.m_shadow ]);
            } else {
                this.m_shadow.value(prm);
                this.m_shadow.color(clr);
            }
        } catch (e) {
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
            if (undefined !== prm) {
                this.m_width = prm;
            }
            return (undefined === super.width(prm)) ? this.frmSize(prm, 'width') : super.width(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            if (undefined !== prm) {
                this.m_height = prm;
            }
            return (undefined === super.height(prm)) ? this.frmSize(prm, 'height') : super.height(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frmSize (prm, tp) {
        try {
            let bwid = mf.func.getSizeObj(this.border().width());
            let val  = this.sizeValue(tp);
            if ( ('px' === val.type())  ||
                 ('rem' === val.type()) ||
                 (val.type() === mf.func.getSizeObj(this.border().width())) ) {
                    super[tp](val.diff((bwid.value()*2) + bwid.type()));
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Frame;
/* end of file */
