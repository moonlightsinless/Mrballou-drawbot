const BaseConfig = require("./BaseConfig")


module.exports = class Setting extends BaseConfig {
    constructor(name = 'setting', prettify = false) {
        super(name, prettify)

        this.data = {
            name: "paint",
            img: './img/test.png',
            dither: false,
            fast: true,
            sortColors: true,
            distancing: 1,
            delay: 1,
            colorDelay: 0,
            ignoreColors: ['#ffffff'],
            sortColAlg: "size 0-9",
            resizeImgAlg: "fit",
            positionImgAlg: "center",
            bucket: false,
            lineSaving: false,
            onTimeDelay: false,
            onTimeDelayMultiplyer: 1,
            positionOverride: {
                enabled: false,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            },
            dualColorMode: false
        }

    }

}