
import React from 'react'
import mojs from '@mojs/core'
import './Confetti.css'

function partyPopper(selector) {

    console.log("🚀 ~ file: Confetti.js ~ line 10 ~ partyPopper ~ selector", selector)

    const colors = [
        '#bea4ff',
        '#feb535',
        '#ff6e83',
        '#58cafe',
    ]

    const flight = {
        isSwirl: true,
        swirlSize: 'rand(0, 10)',
        swirlFrequency: 'rand(1, 10)',
        direction: [-1, 1],
        degreeShift: 'rand(-300, 300)',
        duration: 2000,
        easing: 'cubic.out',
        pathScale: 'stagger(.5)',
    }

    // Confetti shapes
    const torsade = {
        shape: 'zigzag',
        points: 'rand(4, 6)',
        radius: 40,
        radiusY: 30,
        strokeLinecap: 'round',
        strokeWidth: 8,
        fill: 'none',
        stroke: colors,
        angle: { 0: 'rand(-720, 720)' },
        ...flight,
    }

    const bent = {
        shape: 'curve',
        radius: 'rand(25, 35)',
        radiusY: 15,
        strokeLinecap: 'round',
        strokeWidth: 8,
        fill: 'none',
        stroke: colors,
        angle: { 0: 'rand(-720, 720)' },
        ...flight,
    }

    const flake = {
        shape: 'circle',
        radius: 'rand(5, 10)',
        fill: colors,
        ...flight,
    }

    // Bursts
    const burst = {
        parent: selector,
        radius: { 0: 'rand(50, 100)' },
        count: 'rand(33, 100)',
        degree: 30,
    }

    const torsadeBurstObj = {
        ...burst,
        children: {
            ...torsade
        },
        onComplete: function () {
            this.el.parentNode.removeChild(this.el);
        }
    }

    const flakeBurstObj = {
        ...burst,
        children: {
            ...flake,
        },
        onComplete: function () {
            this.el.parentNode.removeChild(this.el);
        }
    }

    const bentBurstObj = {
        ...burst,
        children: {
            ...bent,
        },
        onComplete: function () {
            this.el.parentNode.removeChild(this.el);
        }
    }
    console.log("🚀 ~ file: Confetti.js ~ line 1 ~ partyPopper ~ torsadeBurstObj", torsadeBurstObj)
    const torsadeBurst = new mojs.Burst(torsadeBurstObj);
    const bentBurst = new mojs.Burst(bentBurstObj)
    const flakeBurst = new mojs.Burst(flakeBurstObj);

    torsadeBurst.play()
    bentBurst.play()
    flakeBurst.play()
};

export default function Confetti({ open }) {

    React.useEffect(() => {
        console.log("🚀 ~ file: Confetti.js ~ line 110 ~ useEffect ~ open", open)
        if (open) { partyPopper('.party-popper-left'); partyPopper('.party-popper-right') }
    }, [open])

    return (
        <div>
            <div className="party-popper-left">
                <div className="party-popper__emoji"></div>
            </div>
            <div className="party-popper-right">
                <div className="party-popper__emoji"></div>
            </div>
        </div>
    )
}
