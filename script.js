var animations = [
    { 
        id: '#banner', 
        duration: 600, 
        delayBefore: 0,
        delayAfter: 0, 
        animations: { top : 0 } 
    },
    {
        id: '#i02', 
        duration: 0, 
        delayBefore: 0, 
        delayAfter: 0, 
        animations: { opacity:0, scale:0 }
    },
    [
        {
            id: '#i01', 
            duration: 600, 
            delayBefore: 0, 
            delayAfter: 1800, 
            animations: { opacity:1, right: 15 }
        },
        {
            id: '#i02', 
            duration: 400, 
            delayBefore: 0, 
            delayAfter: 2000, 
            animations: { opacity:1, scale:1 }
        },
        {
            id: '#i03', 
            duration: 600, 
            delayBefore: 300, 
            delayAfter: 1800, 
            animations: { opacity:1, bottom: 20 }
        }
    ],
    [
        {
            id: '#i01', 
            duration: 150, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, right: 200 }
        },
        {
            id: '#i02', 
            duration: 150, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, scale:0 }
        },
        {
            id: '#i03', 
            duration: 150, 
            delayBefore: 300, 
            delayAfter: 0, 
            animations: { opacity:0, bottom: 0 }
        }
    ],
    [
        {
            id: '#i04', 
            duration: 600, 
            delayBefore: 0, 
            delayAfter: 1800, 
            animations: { opacity:1, left: 10 }
        },
        {
            id: '#i05', 
            duration: 600, 
            delayBefore: 0, 
            delayAfter: 1800, 
            animations: { opacity:1, left: 10 }
        },
        {
            id: '#i06', 
            duration: 300, 
            delayBefore: 100, 
            delayAfter: 2100, 
            animations: { opacity:1, right: '5%'}
        },
        {
            id: '#i07', 
            duration: 300, 
            delayBefore: 300, 
            delayAfter: 2100, 
            animations: { opacity:1, top: '35%'}
        }
    ],
    [
        {
            id: '#i04', 
            duration: 600, 
            delayBefore: 0, 
            delayAfter: 400, 
            animations: { opacity:0, left: 500 }
        },
        {
            id: '#i05', 
            duration: 600, 
            delayBefore: 0, 
            delayAfter: 350, 
            animations: { opacity:0, left: 200 }
        },
        {
            id: '#i06', 
            duration: 300, 
            delayBefore: 100, 
            delayAfter: 200, 
            animations: { opacity:0, margintop: 20 }
        },
        {
            id: '#i07', 
            duration: 300, 
            delayBefore: 300, 
            delayAfter: 200, 
            animations: { opacity:0, marginTop: 20 }
        },
    ],
    [
        {
            id: '#i08', 
            duration: 500, 
            delayBefore: 0, 
            delayAfter: 1000, 
            animations: { opacity:1, top: '40%' }
        },
        {
            id: '#i09', 
            duration: 500, 
            delayBefore: 200, 
            delayAfter: 1400, 
            animations: { opacity:1, top: '50%' }
        },
        {
            id: '#i10', 
            duration: 500, 
            delayBefore: 400, 
            delayAfter: 1200, 
            animations: { opacity:1, top: '40%' }
        },
        {
            id: '#i11', 
            duration: 500, 
            delayBefore: 600, 
            delayAfter: 1800, 
            animations: { opacity:1, top: '65%' }
        }
    ],
    [
        {
            id: '#i08', 
            duration: 300, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, marginTop:20 }
        },
        {
            id: '#i09', 
            duration: 300, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, marginTop:20 }
        },
        {
            id: '#i10', 
            duration: 300, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, marginTop:20 }
        },
        {
            id: '#i11', 
            duration: 200, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: { opacity:0, top: '50%' }
        }
    ],
    [
        {
            id: '#i12', 
            duration: 500, 
            delayBefore: 600, 
            delayAfter: 1000, 
            animations: { opacity:1, top: '30%' }
        },
        {
            id: '#i13', 
            duration: 500, 
            delayBefore: 800, 
            delayAfter: 1400, 
            animations: { opacity:1, top: '58%' }
        },
        {
            id: '#i14', 
            duration: 500, 
            delayBefore: 800, 
            delayAfter: 1200, 
            animations: { opacity:1, top: '60%' }
        },
        {
            id: '#i15', 
            duration: 500, 
            delayBefore: 1000, 
            delayAfter: 1800, 
            animations: { opacity:1 }
        },
        {
            id: '#i16', 
            duration: 500, 
            delayBefore: 0, 
            delayAfter: 1800,
            animations: { opacity:1, top: '70%', left:'60%' }
        },
        {
            id: '#i17', 
            duration: 500, 
            delayBefore: 400, 
            delayAfter: 1800, 
            animations: { opacity:1, right: '5%'}
        }
    ]
]

new YAnimation(animations, {loop: false, clearAfterEnd: false}).startAnimation()