const randomColor = (seed: String) => {
    var num = 0;
    for (var i = 0; i < seed.length; i++) {
        num += seed.charCodeAt(i);
    }
    num = parseFloat(`0.${num}`);
    let hex = '#' + (num / 100 * 0xffffff).toString(16).substring(1);
    return increase_brightness(hex, 60);
}

function increase_brightness(hex: String, percent: number) {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
        ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

// static Color random(String seed) {
//     int num = 0;
//     for (int i = 0; i < seed.length; i++) {
//       num += seed[i].codeUnitAt(0);
//     }
//     // add lightness to make it look better overall
//     Color col =
//         Color((num.toDouble() * 0.001 * 0xFFFFFF).toInt()).withOpacity(1.0);
//     HSLColor hsl = HSLColor.fromColor(col);
//     return hsl.withLightness(0.75).toColor();
// }

export default randomColor