import * as React from 'react';

function Meta(props) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={'50px'} height={'50px'} viewBox="0 100" {...props}>
         <defs>
            <linearGradient id="prefix__b">
               <stop offset={0} stopColor="#3c638a" />
               <stop offset={0.454} stopColor="#036" />
               <stop offset={1} stopColor="#00264b" />
            </linearGradient>
            <linearGradient id="prefix__a">
               <stop offset={0} stopColor="#ffd739" />
               <stop offset={0.492} stopColor="#f1c204" />
               <stop offset={1} stopColor="#c49d00" />
            </linearGradient>
            <linearGradient xlinkHref="#prefix__a" id="prefix__c" x1={-107.555} y1={-34.349} x2={-24.388} y2={48.818} gradientUnits="userSpaceOnUse" gradientTransform="translate(124.655 51.961)" />
            <linearGradient xlinkHref="#prefix__b" id="prefix__d" x1={23.375} y1={22.187} x2={95.518} y2={94.33} gradientUnits="userSpaceOnUse" />
         </defs>
         <circle cy={59} cx={59} r={59} fill="url(#prefix__c)" />
         <circle cx={59} cy={59} r={49.075} fill="#036" stroke="url(#prefix__d)" strokeWidth={3.849} />
         <text
            style={{
               lineHeight: '21.86963844px',
            }}
            x={-38.255}
            y={104.575}
            transform="rotate(-45) scale(.92132 1.0854)"
            fontWeight={700}
            fontSize={13.997}
            fontFamily="sans-serif"
            letterSpacing={-0.026}
            wordSpacing={0}
            fill="#fff"
            strokeWidth={0.875}
         >
            <tspan x={-38.255} y={104.575}>
               {'metacritic'}
            </tspan>
         </text>
         <path
            d="M46 37c-11.462-5.62-23.36 8.009-20.5 19.5l-5-4.5-9 9 34 34L56 84.5 36.5 65c-8.485-8.485 1.016-18.984 9.5-10.5l20 20L76.5 64 57 44.5c-8.487-8.487 1.017-18.983 9.5-10.5l20 20L97 43.5l-24-24C60.303 6.803 40.892 23.28 46 37z"
            fill="#fffff5"
         />
      </svg>
   );
}

export default Meta;
