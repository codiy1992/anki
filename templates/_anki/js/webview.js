"use strict";
/* Copyright: Ankitects Pty Ltd and contributors
 * License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html */
// prevent backspace key from going back a page
document.addEventListener("keydown", function (evt) {
    if (evt.keyCode !== 8) {
        return;
    }
    let isText = 0;
    const node = evt.target;
    const nn = node.nodeName;
    if (nn === "INPUT" || nn === "TEXTAREA") {
        isText = 1;
    }
    else if (nn === "DIV" && node.contentEditable) {
        isText = 1;
    }
    if (!isText) {
        evt.preventDefault();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3F0L2FxdC9kYXRhL3dlYi9qcy93ZWJ2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtrRkFDa0Y7QUFFbEYsK0NBQStDO0FBQy9DLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFrQjtJQUM3RCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU87S0FDVjtJQUNELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFpQixDQUFDO0lBQ25DLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsSUFBSSxFQUFFLEtBQUssT0FBTyxJQUFJLEVBQUUsS0FBSyxVQUFVLEVBQUU7UUFDckMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU0sSUFBSSxFQUFFLEtBQUssS0FBSyxJQUFLLElBQXVCLENBQUMsZUFBZSxFQUFFO1FBQ2pFLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDZDtJQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDVCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodDogQW5raXRlY3RzIFB0eSBMdGQgYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZTogR05VIEFHUEwsIHZlcnNpb24gMyBvciBsYXRlcjsgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCAqL1xuXG4vLyBwcmV2ZW50IGJhY2tzcGFjZSBrZXkgZnJvbSBnb2luZyBiYWNrIGEgcGFnZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldnQua2V5Q29kZSAhPT0gOCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpc1RleHQgPSAwO1xuICAgIGNvbnN0IG5vZGUgPSBldnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgY29uc3Qgbm4gPSBub2RlLm5vZGVOYW1lO1xuICAgIGlmIChubiA9PT0gXCJJTlBVVFwiIHx8IG5uID09PSBcIlRFWFRBUkVBXCIpIHtcbiAgICAgICAgaXNUZXh0ID0gMTtcbiAgICB9IGVsc2UgaWYgKG5uID09PSBcIkRJVlwiICYmIChub2RlIGFzIEhUTUxEaXZFbGVtZW50KS5jb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgaXNUZXh0ID0gMTtcbiAgICB9XG4gICAgaWYgKCFpc1RleHQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG4iXX0=