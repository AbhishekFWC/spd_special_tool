import React from "react";

interface Props {
  width: number;
  height: number;
}

const WebsiteIcon: React.FC<Props> = ({ height, width }) => {
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      clip-rule="evenodd"
      viewBox="0 0 500 500"
      id="website"
    >
      <path
        fill="#1f4073"
        d="M104.086,397.385C104.2,397.504 104.317,397.619 104.437,397.731C141.893,434.644 193.306,457.437 250,457.437L250,457.437C306.694,457.437 358.107,434.644 395.572,397.722C395.685,397.616 395.796,397.506 395.905,397.393C433.892,359.788 457.437,307.622 457.437,250.001L457.437,249.999C457.437,192.378 433.892,140.213 395.908,102.609L395.325,102.035C385.676,92.585 375.149,84.052 363.868,76.624C345.413,64.472 325.023,55.298 303.676,49.587C286.179,44.906 268.108,42.592 250,42.563C193.306,42.563 141.893,65.356 104.428,102.278C104.311,102.387 104.197,102.5 104.086,102.615C66.108,140.213 42.563,192.378 42.563,250C42.563,307.622 66.108,359.787 104.086,397.385ZM169.342,368.622C155.119,374.378 140.614,381.99 125.975,391.824C152.91,415.405 186.624,431.447 223.795,436.626C200.431,413.665 182.603,390.908 169.342,368.622ZM330.101,369.554C316.899,391.542 299.244,413.984 276.206,436.626C313.352,431.448 347.045,415.425 373.984,391.858C365.014,386.061 349.851,377.27 330.101,369.554ZM259.5,353.724L259.5,426.367C281.725,405.013 298.853,383.883 311.714,363.182C296.14,358.467 278.555,354.852 259.5,353.724ZM240.5,353.461C223.691,353.994 205.963,356.616 187.652,362.156C200.583,383.186 217.909,404.66 240.5,426.366L240.5,353.461ZM387.937,378.329C417.248,346.842 435.921,305.314 438.201,259.5L363.561,259.5C363.452,263.977 363.196,268.493 362.783,273.05C360.472,298.491 353.293,325.256 339.344,352.834C362.137,362.003 379.063,372.352 387.937,378.329ZM160.131,351.791C146.525,324.575 139.498,298.167 137.217,273.05C136.804,268.494 136.548,263.978 136.439,259.5L61.799,259.5C64.079,305.307 82.746,346.829 112.053,378.319C128.267,367.08 144.342,358.38 160.131,351.791ZM321.321,346.311C334.736,320.414 341.685,295.287 343.86,271.331C344.222,267.351 344.453,263.405 344.562,259.5L259.5,259.5L259.5,334.617C282.277,335.889 303.149,340.453 321.321,346.311ZM240.5,334.348L240.5,259.5L155.438,259.5C155.547,263.411 155.778,267.354 156.14,271.331C158.282,294.926 165.056,319.658 178.078,345.143C199.76,338.114 220.722,334.9 240.5,334.348ZM438.201,240.5C435.921,194.689 417.251,153.165 387.937,121.671C378.733,127.871 360.87,138.771 336.785,148.18C350.356,175.161 360.841,206.371 363.147,240.5L438.201,240.5ZM344.144,240.5C341.864,208.626 331.877,179.528 319.026,154.417C301.394,159.923 281.322,164.163 259.5,165.383L259.5,240.5L344.144,240.5ZM240.5,240.5L240.5,165.652C221.414,165.118 201.236,162.109 180.378,155.59C167.817,180.423 158.1,209.115 155.855,240.5L240.5,240.5ZM136.854,240.5C139.129,206.829 149.366,176 162.677,149.255C146.087,142.554 129.147,133.528 112.054,121.681C82.748,153.166 64.079,194.689 61.799,240.5L136.854,240.5ZM240.5,73.748C227.028,87.189 207.028,109.542 189.795,138.479C207.349,143.584 224.346,146.025 240.5,146.539L240.5,73.748ZM259.5,73.747L259.5,146.275C277.693,145.199 294.547,141.855 309.589,137.45C292.5,109.016 272.815,87.032 259.5,73.747ZM224.324,63.301C186.952,68.4 153.05,84.477 125.976,108.177C141.45,118.571 156.775,126.483 171.779,132.347C189.252,102.18 209.668,78.424 224.324,63.301ZM275.676,63.301C290.178,78.267 310.315,101.677 327.662,131.385C348.603,123.451 364.645,114.177 373.984,108.142C346.92,84.465 313.032,68.4 275.676,63.301Z"
      ></path>
    </svg>
  );
};

export default WebsiteIcon;
