var _0x38e4 = ['bG9n', 'bG9jYXRpb24=', 'aHR0cHM6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9pbi5lcm5ldC5kbGkuMjAxNS40NzgzODYvMjAxNS40NzgzODYuSmlpdmF0LUtpaS5wZGY=', 'c3Vic3Ry', 'bGFzdEluZGV4T2Y=', 'bGVuZ3Ro'];
(function (a, c) {
    var b = function (b) {
        while (--b) {
            a['push'](a['shift']());
        }
    };
    b(++c);
}(_0x38e4, 0x9e));
var _0x438e = function (b, d) {
    b = b - 0x0;
    var a = _0x38e4[b];
    if (_0x438e['initialized'] === undefined) {
        (function () {
            var a;
            try {
                var b = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                a = b();
            } catch (b) {
                a = window;
            }
            var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            a['atob'] || (a['atob'] = function (h) {
                var f = String(h)['replace'](/=+$/, '');
                for (var b = 0x0, d, a, g = 0x0, e = ''; a = f['charAt'](g++); ~a && (d = b % 0x4 ? d * 0x40 + a : a, b++ % 0x4) ? e += String['fromCharCode'](0xff & d >> (-0x2 * b & 0x6)) : 0x0) {
                    a = c['indexOf'](a);
                }
                return e;
            });
        }());
        _0x438e['base64DecodeUnicode'] = function (e) {
            var b = atob(e);
            var c = [];
            for (var a = 0x0, d = b['length']; a < d; a++) {
                c += '%' + ('00' + b['charCodeAt'](a)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(c);
        };
        _0x438e['data'] = {};
        _0x438e['initialized'] = !![];
    }
    var c = _0x438e['data'][b];
    if (c === undefined) {
        a = _0x438e['base64DecodeUnicode'](a);
        _0x438e['data'][b] = a;
    } else {
        a = c;
    }
    return a;
};

function download() {
    var b = {};
    b['post-2'] = _0x438e('0x0');
    var a = document['referrer'];
    var c = a[_0x438e('0x1')](a[_0x438e('0x2')]('/') + 0x1)['substr'](0x0, a[_0x438e('0x1')](a[_0x438e('0x2')]('/') + 0x1)[_0x438e('0x3')] - 0x5);
    console[_0x438e('0x4')](c);
    console[_0x438e('0x4')](b[c]);
    window[_0x438e('0x5')] = b[c];
}
