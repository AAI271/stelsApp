import { createRoot } from "react-dom/client";
import { WheelEvent } from "react";

// const createSvgElement = (
//   tag: string,
//   attributes: {
//     width?: string;
//     viewBox?: string;
//     fill: string;
//     d?: string;
//     fillOpacity?: string;
//   }
// ) => {
//   const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
//   for (const [key, value] of Object.entries(attributes)) {
//     element.setAttribute(key, value);
//   }
//   return element;
// };
// const createVector = () => {
//   const svg = createSvgElement("svg", {
//     width: "100%",
//     viewBox: "0 0 1512 217",
//     fill: "none",
//   });

//   const path1 = createSvgElement("path", {
//     d: "M836.599 80.2832L932.502 72.6372L1052.89 37.2743L1232.45 126.159L1422.22 104.177L1512 0V216H0L420.34 195.929L669.279 155.788L769.263 161.522L820.275 126.159L836.599 80.2832Z",
//     fill: "var(--stels-color-gray-dark)",
//     fillOpacity: "0.3",
//   });
//   svg.appendChild(path1);

//   const path2 = createSvgElement("path", {
//     d: "M1130.67 141.366L1157.99 78.3106L1227.23 150.812L1299.24 74.3084L1432.26 96.2997L1512 40V217H877L995.71 150.812L1010.57 125.736L1066.56 129.007L1095.13 108.838L1130.67 141.366Z",
//     fill: "var(--stels-color-gray-dark)",
//     fillOpacity: "0.5",
//   });
//   svg.appendChild(path2);

//   const path3 = createSvgElement("path", {
//     d: "M1037.85 124.273L1071.81 46.9683L1133.49 79.3436L1151.81 51.6211L1233.21 113.758L1294.26 70.7401L1412.85 69.0228L1512 0V217H439.559L769.228 190.233L870.03 135.854L888.503 105.112L958.131 109.122L993.656 84.3941L1037.85 124.273Z",
//     fill: "var(--stels-color-gray-dark)",
//     fillOpacity: "0.2",
//   });
//   svg.appendChild(path3);
//   return svg;
// };

export default function createRootComponent(window: any) {
  try {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener(
        "wheel",
        (e: WheelEvent<HTMLDivElement>) => {
          if (e.deltaMode !== 1) {
            e.preventDefault();
          }
        },
        { passive: false }
      );
    }
    window.document.addEventListener(
      "wheel",
      (event: WheelEvent<HTMLDivElement>) => {
        if (event.deltaMode > 1) {
          event.preventDefault();
        }
      },
      false
    );

    const root = document.createElement("div");
    document.body.appendChild(root);

    return createRoot(root);
  } catch (e) {
    console.error(e);
    throw new Error("Failed to create Component Root");
  }
}
