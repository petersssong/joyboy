import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

export const AddPostIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 72 72" fill="none" {...props}>
    <Path
      fill="#EC796B"
      d="M30 3.464a12 12 0 0 1 12 0l19.177 11.072a12 12 0 0 1 6 10.392v22.144a12 12 0 0 1-6 10.392L42 68.536a12 12 0 0 1-12 0L10.823 57.464a12 12 0 0 1-6-10.392V24.928a12 12 0 0 1 6-10.392L30 3.464Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M36 23.667c.92 0 1.667.746 1.667 1.666v9h9a1.667 1.667 0 1 1 0 3.334h-9v9a1.667 1.667 0 1 1-3.334 0v-9h-9a1.667 1.667 0 1 1 0-3.334h9v-9c0-.92.746-1.666 1.667-1.666Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const HomeIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      {...props}
      fillRule="evenodd"
      d="M9.524 1.996c.836-.47 1.61-.746 2.476-.746.866 0 1.64.277 2.476.746.81.454 1.738 1.125 2.905 1.97l1.51 1.09c.936.677 1.684 1.218 2.248 1.719.582.517 1.018 1.032 1.295 1.68.277.65.344 1.315.307 2.083-.036.74-.174 1.635-.345 2.75l-.315 2.05c-.244 1.585-.437 2.846-.722 3.828-.294 1.016-.71 1.823-1.45 2.44-.739.613-1.618.887-2.692 1.017-1.045.127-2.363.127-4.028.127H10.81c-1.665 0-2.983 0-4.028-.127-1.074-.13-1.953-.404-2.692-1.018-.74-.616-1.156-1.423-1.45-2.439-.285-.982-.478-2.244-.722-3.827l-.315-2.052c-.171-1.114-.309-2.008-.345-2.749-.037-.768.03-1.433.307-2.083.277-.648.713-1.163 1.295-1.68.564-.5 1.312-1.042 2.249-1.719l1.509-1.09c1.167-.845 2.095-1.516 2.905-1.97ZM10 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const IndicatorIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 6 6" fill="none" {...props}>
    <Rect width={6} height={6} fill="currentColor" rx={3} />
  </Svg>
);

export const MessageIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.98368 18.8571C8.4529 18.7286 7.92497 18.5621 7.37131 18.3685L3.79112 19.9492C3.78341 19.9526 3.7752 19.9456 3.77743 19.9375L4.69206 16.617C3.4357 15.3458 2.00622 13.8115 2.00622 10.3996C1.82328 5.4028 7.24655 1.74833 11.1012 2.01194C11.9954 2.01212 12.9963 2.25396 13.8395 2.45769L13.8735 2.4659C15.1064 2.8253 17.1562 3.99932 18.3692 5.68609C19.3875 7.10215 19.7414 8.54366 19.8281 9.0031"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <Path
      d="M21.5829 18.1216C22.9036 15.2437 20.8918 12.001 18.1313 11.2207C15.5118 10.3421 12.1405 11.8825 11.2565 14.5C10.3724 17.1175 11.7078 20.3461 14.8531 21.1618C16.4741 21.7055 17.7451 21.3271 18.1736 21.1616C18.8539 21.3751 20.3554 21.6856 20.8648 21.9975C20.9744 22.0645 20.7937 21.2464 20.6428 19.517C20.9028 19.0975 21.4739 18.6987 21.5829 18.1216Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </Svg>
);

export const NotificationIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SearchIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.7771 15.3629C17.5518 15.1066 18.4392 15.2866 19.0555 15.9029L22.0971 18.9445C22.9676 19.8151 22.9676 21.2265 22.0971 22.0971C21.2265 22.9676 19.8151 22.9676 18.9445 22.0971L15.9029 19.0555C15.2866 18.4392 15.1066 17.5518 15.3629 16.7771L13.293 14.7072L14.7072 13.293L16.7771 15.3629Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z"
      fill="currentColor"
    />
  </Svg>
);

export const JoyboyIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 96 16" fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M7.202 9.44V1h3.38v9.32c0 3.72-3.02 5.12-5.78 5.12-1.66 0-3.24-.52-4.04-1.32l.94-3.04c.76.66 1.86 1.06 2.86 1.06 1.4 0 2.64-.78 2.64-2.7ZM28.578 8c0 5-4.32 7.46-7.98 7.46-3.68 0-7.98-2.46-7.98-7.46s4.3-7.46 7.98-7.46c3.66 0 7.98 2.46 7.98 7.46Zm-3.46 0c0-2.86-2.44-4.26-4.52-4.26-2.1 0-4.54 1.4-4.54 4.26s2.44 4.24 4.54 4.24c2.08 0 4.52-1.38 4.52-4.24Zm-6.08.02c0-.94.6-1.56 1.56-1.56.94 0 1.54.62 1.54 1.56 0 .94-.6 1.54-1.54 1.54-.96 0-1.56-.6-1.56-1.54ZM30.001 1h3.94l5.52 8.26V15h-3.38V9.38L30.001 1Zm9.2 3.5 2.4-3.5h3.94l-4.38 5.82-1.96-2.32ZM56.335 15h-9v-2.74h8.3c1.14 0 1.72-.78 1.72-1.58 0-.78-.58-1.56-1.72-1.56h-8.3v-2.5h7.04c1.14 0 1.72-.76 1.72-1.54 0-.76-.58-1.54-1.72-1.54h-7.04V1h7.74c2.92 0 4.38 2.02 4.38 4.06 0 .84-.26 1.68-.76 2.38 1.3.84 1.92 2.2 1.92 3.54 0 2.04-1.46 4.02-4.28 4.02ZM78.414 8c0 5-4.32 7.46-7.98 7.46-3.68 0-7.98-2.46-7.98-7.46s4.3-7.46 7.98-7.46c3.66 0 7.98 2.46 7.98 7.46Zm-3.46 0c0-2.86-2.44-4.26-4.52-4.26-2.1 0-4.54 1.4-4.54 4.26s2.44 4.24 4.54 4.24c2.08 0 4.52-1.38 4.52-4.24Zm-6.08.02c0-.94.6-1.56 1.56-1.56.94 0 1.54.62 1.54 1.56 0 .94-.6 1.54-1.54 1.54-.96 0-1.56-.6-1.56-1.54ZM79.836 1h3.94l5.52 8.26V15h-3.38V9.38L79.836 1Zm9.2 3.5 2.4-3.5h3.94l-4.38 5.82-1.96-2.32Z"
    />
  </Svg>
);

export const UserIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333Z"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 22.667c3.109-3.257 8.858-3.41 12 0m-2.673-10A3.336 3.336 0 0 1 15.989 16a3.336 3.336 0 0 1-3.338-3.333 3.336 3.336 0 0 1 3.338-3.334 3.336 3.336 0 0 1 3.338 3.334Z"
    />
  </Svg>
);

export const CopyIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.596 20.699-2.445.647c-2.263.6-3.395.899-4.281.408-.887-.49-1.182-1.58-1.773-3.758l-1.462-5.391c-.59-2.179-.886-3.268-.367-4.13.52-.863 1.651-1.163 3.914-1.762l4-1.06c2.264-.598 3.395-.898 4.282-.407.886.49 1.182 1.58 1.772 3.758l1.468 5.413c.251.926.377 1.39.239 1.825m-5.347 4.457c.752-.2.758-.202 1.343-.704l2.743-2.355c.749-.642 1.123-.963 1.261-1.398m-5.347 4.457s.588-4.593 1.904-5.199c1.493-.687 3.443.742 3.443.742"
      />
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 5.001c-.064-1.073-.243-1.749-.752-2.233-.78-.742-2.03-.746-4.532-.754l-4.423-.013c-2.502-.007-3.753-.01-4.528.727-.775.737-.771 1.928-.764 4.31l.018 5.893c.008 2.381.011 3.572.79 4.314.78.742 2.031.746 4.533.753l.681.002"
      />
    </Svg>
  );
};

export const GalleryIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"
      />
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 22c-.62-2.225-2.066-4.218-4.123-5.666-2.22-1.561-5.005-2.387-7.861-2.331-.34-.001-.678.01-1.016.032"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 18c1.701-1.327 3.535-2.007 5.386-2a7.792 7.792 0 0 1 3.114.662"
      />
    </Svg>
  );
};

export const GifIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.156 4.156 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252 1.166.406 2.085 1.263 2.52 2.35.27.676.27 1.523.27 3.216V10"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.75 12c0-1.84 1.506-3.333 3.364-3.333.672 0 1.464.116 2.117-.057a1.674 1.674 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2M12.842 18h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523"
      />
    </Svg>
  );
};

export const SendIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        fill="currentColor"
        d="M22 3.464a12 12 0 0 1 12 0l12.249 7.072a12 12 0 0 1 6 10.392v14.144a12 12 0 0 1-6 10.392L34 52.536a12 12 0 0 1-12 0L9.751 45.464a12 12 0 0 1-6-10.392V20.928a12 12 0 0 1 6-10.392L22 3.464Z"
      />
      <Path
        fill="#fff"
        d="M37.597 18.543c-.467-.504-1.2-.692-1.9-.76-.736-.07-1.617-.024-2.566.1-1.902.25-4.2.828-6.409 1.539-2.21.711-4.363 1.567-5.976 2.386-.802.409-1.499.821-2.005 1.218-.252.197-.482.41-.655.636-.165.216-.338.524-.336.894.006.972.668 1.659 1.373 2.12.72.47 1.657.825 2.589 1.103.941.281 1.931.499 2.783.675l.304.063c.514.106.771.16 1.013.087.242-.072.428-.258.8-.63l3.68-3.681a1 1 0 0 1 1.415 1.414l-3.433 3.433c-.379.379-.568.568-.64.814-.072.246-.014.507.102 1.03.448 2.024.838 3.697 1.226 4.823.227.657.483 1.227.806 1.646.337.438.796.77 1.4.796.376.017.69-.155.904-.315.225-.167.438-.393.635-.639.396-.495.812-1.18 1.226-1.97.832-1.59 1.713-3.722 2.459-5.915.745-2.193 1.366-4.48 1.665-6.38.149-.948.223-1.828.182-2.565-.04-.7-.188-1.434-.642-1.922Z"
      />
    </Svg>
  );
};