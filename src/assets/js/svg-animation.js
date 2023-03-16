// document.addEventListener("DOMContentLoaded", function() {

//     function drawLine(container, line) {
//       var pathLength = line.getTotalLength(),
//           maxScrollTop = document.documentElement.scrollHeight - window.innerHeight,
//           percentDone = (window.pageYOffset || document.documentElement.scrollTop) / maxScrollTop,
//           length = percentDone * pathLength;
//       line.style.strokeDasharray = [length, pathLength].join(' ');
//     }
  
//     function positionTheDot() {
//       var scrollPercentage = (window.pageYOffset || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight),
//           path = document.getElementById("path"),
//           pathLen = path.getTotalLength(),
//           pt = path.getPointAtLength(scrollPercentage * pathLen),
//           scrollY = window.pageYOffset || document.documentElement.scrollTop,
//           maxScrollY = document.documentElement.scrollHeight - window.innerHeight,
//           dist = pathLen * scrollY / maxScrollY,
//           pos = path.getPointAtLength(dist),
//           angle;
//       if (dist + 1 <= pathLen) {
//         var posAhead = path.getPointAtLength(dist + 1);
//         angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
//       } else {
//         var posBehind = path.getPointAtLength(dist - 1);
//         angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
//       }
//       var dot = document.getElementById("dot");
//       dot.setAttribute("transform", "translate(" + pt.x + "," + (pt.y + 5) + ")");
//     }
  
//     function positionCar() {
//       var scrollY = window.pageYOffset || document.documentElement.scrollTop,
//           maxScrollY = document.documentElement.scrollHeight - window.innerHeight,
//           path = document.getElementById("path"),
//           pathLen = path.getTotalLength(),
//           dist = pathLen * scrollY / maxScrollY,
//           pos = path.getPointAtLength(dist),
//           angle;
//       if (dist + 1 <= pathLen) {
//         var posAhead = path.getPointAtLength(dist + 1);
//         angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
//       } else {
//         var posBehind = path.getPointAtLength(dist - 1);
//         angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
//       }
//       var car = document.getElementById("c");
//       car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ") rotate(" + rad2deg(angle) + ")");
//     }
  
//     function rad2deg(rad) {
//       return 180 * rad / Math.PI;
//     }
  
//     window.addEventListener("scroll", function() {
//       drawLine(document.getElementById('bx_a'), document.getElementById('path'));
//       positionTheDot();
//       positionCar();
//     });
  
//     drawLine(document.getElementById('bx_a'), document.getElementById('path'));
//     positionTheDot();
//     positionCar();
  
//   });