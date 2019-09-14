// BODE STYLES

// 全屏控制函数
function fullScreen(full = null) {
    let doc = document;
    let el = doc.documentElement;
    let efs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
    let dfs = doc.exitFullScreen || doc.webkitCancelFullScreen || doc.mozCancelFullScreen || doc.msExitFullscreen;

    if (efs) {
        switch(full){
            case true:efs.call(el);break;
            case false:dfs.call(doc);break;
            default:;
        }
        //typeof rfs != "undefined" && rfs
    } else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}