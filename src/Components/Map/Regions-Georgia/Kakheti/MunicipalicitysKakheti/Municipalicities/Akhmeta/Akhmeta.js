import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Akhmeta.module.css";
import HeaderAkhmeta from "./HeaderAkhmeta/HeaderAkhmeta";

const Akhmeta = () => {
  return (
    <div className={style.wrapper}>
      <NavLink to="/*">
        <div className={style.header}>
          <HeaderAkhmeta />
        </div>
        <svg viewBox="0 0 833.393 456.022" className={style.Akhmeta}>
          <path d="m 368.66263,119.71708 c -2.3043,3.77929 -6.41096,5.02805 -9.81052,7.72585 -7.43454,5.90455 -6.15877,7.18631 -4.14375,16.76883 0.81588,3.84997 -1.2733,5.73726 2.79627,9.17961 1.31286,0.70921 2.05707,2.32553 2.26968,3.43999 1.2733,7.62455 1.13238,13.39715 -6.62109,16.40128 -2.62076,1.01314 -7.18729,-0.40527 -10.58934,1.04377 -5.23903,2.22892 -7.2936,8.40208 -10.90579,11.77847 -1.98039,1.85429 -5.02391,1.34535 -6.86836,3.94656 -0.38568,0.53957 -0.45985,2.73315 -0.56369,3.34341 -1.34993,7.42192 -7.3307,15.2491 -8.67815,21.08766 -0.95682,4.11622 -0.10632,9.88412 -1.20159,14.7496 -0.63788,2.96638 -2.69492,5.26131 -3.15232,7.72351 -0.49448,2.66716 0.99144,6.3098 -0.38818,8.47039 -2.26719,3.50834 -12.32001,3.3764 -10.02067,9.71918 0.95435,2.5965 2.83339,1.38307 4.10668,2.56351 2.9743,2.76849 4.42561,3.03709 4.63823,5.1977 0.39065,3.80992 -5.13273,5.39795 -5.70385,9.00762 -0.60078,4.18454 3.29572,9.81812 5.17228,12.18372 1.83948,2.25955 4.49731,1.5857 5.66676,3.44 4.60115,7.31825 -8.25042,8.67302 -8.32212,17.07277 -0.0346,3.81462 7.72132,12.41933 10.97748,12.24969 3.14986,-0.16728 5.69643,-1.28176 7.96611,-0.81052 3.18445,0.64087 4.42808,3.57902 7.46914,4.52147 1.91117,0.57255 6.69281,-0.47122 8.70784,1.2158 4.95962,-3.64264 12.21862,2.90277 21.56927,6.1425 4.38605,1.51738 7.82517,0.60791 10.83161,2.86747 1.34748,0.9778 1.87904,3.23735 3.61714,4.08321 1.58729,0.77754 6.19337,-0.0684 7.0068,1.11447 4.95966,-0.37464 16.21899,-4.72647 18.87437,-10.7983 0.85052,-2.02393 -0.0346,-4.5898 -0.14342,-7.08734 -0.21015,-6.58076 0.31895,-17.61939 0.77633,-28.34465 0.2151,-4.89611 0.88266,-11.00093 -0.67002,-15.68735 -1.41916,-4.21988 -4.67531,-6.31215 -5.62968,-9.11364 -1.20653,-3.64497 -1.49333,-12.14603 0.24725,-14.54458 5.24152,-7.15332 23.12442,0.53955 24.32601,-12.14602 0.70959,-7.45728 -14.02348,-11.47454 -9.13801,-18.55952 1.91363,-2.80147 10.62641,-3.64498 13.42271,-4.11622 5.06347,-0.87649 13.06668,-2.93577 15.50693,3.24209 5.24399,13.22515 22.34563,11.09987 28.89503,1.4137 -0.0346,-1.92263 -2.29934,-2.79913 -2.76168,-5.46395 -1.06313,-6.27681 9.59789,-24.02582 14.44876,-27.56713 2.55153,-1.85665 7.61254,0.57019 11.89721,-0.13433 1.4884,-0.24033 2.76169,-1.25112 4.25008,-1.45139 3.14984,-0.44297 7.61254,0.20027 9.34818,-1.04615 5.94614,-4.38718 1.70102,-12.68793 0.8505,-16.77117 -0.60079,-2.8698 -1.16944,-7.11796 -1.24114,-9.24794 -0.28186,-15.58838 12.25326,-22.47074 12.006,-35.93621 -0.0742,-3.37638 -4.04237,-6.51244 -2.05456,-10.15743 -6.44557,0.10136 -12.57219,5.73727 -18.90898,3.27271 -4.35637,-1.687 -5.70135,-8.50104 -9.38277,-10.22339 -1.23868,-0.57254 -2.86555,0.67622 -4.21053,0.7422 -3.7902,0.23797 -8.3246,-1.85667 -11.05166,-2.42921 -1.87902,-0.40526 -3.57757,0.16729 -5.10058,-0.20263 -4.91761,-1.14745 -7.11559,-10.357687 -7.93149,-10.932607 -7.43452,-5.26601 -18.12521,0.23327 -27.54508,0.1673 -6.02278,-0.0684 -12.92576,-1.51973 -19.54685,-3.03945 -1.52054,-0.33694 -4.10915,-1.17808 -6.16127,-0.36992 -6.47523,2.59885 -7.26143,8.02981 -14.44625,9.51418 -13.52656,2.768497 -3.75313,-15.55538 -14.23366,-17.81966 -1.45378,3.17375 -8.81908,10.29408 -9.95145,16.13265 -0.81341,4.290567 2.19551,17.852657 -0.56618,22.477807 z" />
        </svg>
      </NavLink>
    </div>
  );
};
export default Akhmeta;
