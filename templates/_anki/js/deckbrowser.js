"use strict";
/* Copyright: Ankitects Pty Ltd and contributors
 * License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html */
$(init);
function init() {
    $("tr.deck").draggable({
        scroll: false,
        // can't use "helper: 'clone'" because of a bug in jQuery 1.5
        helper: function (event) {
            return $(this).clone(false);
        },
        delay: 200,
        opacity: 0.7,
    });
    $("tr.deck").droppable({
        drop: handleDropEvent,
        hoverClass: "drag-hover",
    });
    $("tr.top-level-drag-row").droppable({
        drop: handleDropEvent,
        hoverClass: "drag-hover",
    });
}
function handleDropEvent(event, ui) {
    const draggedDeckId = ui.draggable.attr("id");
    const ontoDeckId = $(this).attr("id") || "";
    pycmd("drag:" + draggedDeckId + "," + ontoDeckId);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVja2Jyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9xdC9hcXQvZGF0YS93ZWIvanMvZGVja2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO2tGQUNrRjtBQUVsRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFUixTQUFTLElBQUk7SUFDVCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25CLE1BQU0sRUFBRSxLQUFLO1FBRWIsNkRBQTZEO1FBQzdELE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxLQUFLLEVBQUUsR0FBRztRQUNWLE9BQU8sRUFBRSxHQUFHO0tBQ2YsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuQixJQUFJLEVBQUUsZUFBZTtRQUNyQixVQUFVLEVBQUUsWUFBWTtLQUMzQixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxFQUFFLGVBQWU7UUFDckIsVUFBVSxFQUFFLFlBQVk7S0FDM0IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzlCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTVDLEtBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0OiBBbmtpdGVjdHMgUHR5IEx0ZCBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlOiBHTlUgQUdQTCwgdmVyc2lvbiAzIG9yIGxhdGVyOyBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sICovXG5cbiQoaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJChcInRyLmRlY2tcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgc2Nyb2xsOiBmYWxzZSxcblxuICAgICAgICAvLyBjYW4ndCB1c2UgXCJoZWxwZXI6ICdjbG9uZSdcIiBiZWNhdXNlIG9mIGEgYnVnIGluIGpRdWVyeSAxLjVcbiAgICAgICAgaGVscGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb25lKGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IDIwMCxcbiAgICAgICAgb3BhY2l0eTogMC43LFxuICAgIH0pO1xuICAgICQoXCJ0ci5kZWNrXCIpLmRyb3BwYWJsZSh7XG4gICAgICAgIGRyb3A6IGhhbmRsZURyb3BFdmVudCxcbiAgICAgICAgaG92ZXJDbGFzczogXCJkcmFnLWhvdmVyXCIsXG4gICAgfSk7XG4gICAgJChcInRyLnRvcC1sZXZlbC1kcmFnLXJvd1wiKS5kcm9wcGFibGUoe1xuICAgICAgICBkcm9wOiBoYW5kbGVEcm9wRXZlbnQsXG4gICAgICAgIGhvdmVyQ2xhc3M6IFwiZHJhZy1ob3ZlclwiLFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcm9wRXZlbnQoZXZlbnQsIHVpKSB7XG4gICAgY29uc3QgZHJhZ2dlZERlY2tJZCA9IHVpLmRyYWdnYWJsZS5hdHRyKFwiaWRcIik7XG4gICAgY29uc3Qgb250b0RlY2tJZCA9ICQodGhpcykuYXR0cihcImlkXCIpIHx8IFwiXCI7XG5cbiAgICBweWNtZChcImRyYWc6XCIgKyBkcmFnZ2VkRGVja0lkICsgXCIsXCIgKyBvbnRvRGVja0lkKTtcbn1cbiJdfQ==