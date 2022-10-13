import React, { CSSProperties } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";

export type LogoProps = {
    size?: CSSProperties["width"] | CSSProperties["height"];
    text?: boolean;
    className?: string;
}

export const Logo: React.FC<LogoProps> = React.memo((props) => {
    const {size = 32} = props;

    return <div className={ classNames(props.className, styles.logo) } style={ {width: size, height: size} }>
        <img src="/logo.png" alt="Logo"/>
        {
            props.text &&
            <svg viewBox="0 0 101 17" xmlns="http://www.w3.org/2000/svg" className={ styles.text }>
                <path
                    d="M10.0037 1.45459H12.6386V10.9574C12.6386 11.9991 12.3924 12.9153 11.9 13.706C11.4123 14.4967 10.7258 15.1146 9.84034 15.5597C8.95492 16 7.92036 16.2202 6.73664 16.2202C5.5482 16.2202 4.51127 16 3.62585 15.5597C2.74043 15.1146 2.05388 14.4967 1.56619 13.706C1.0785 12.9153 0.834656 11.9991 0.834656 10.9574V1.45459H3.4696V10.7373C3.4696 11.3433 3.60217 11.8831 3.86733 12.3566C4.13721 12.8301 4.516 13.2017 5.00369 13.4716C5.49138 13.7368 6.06903 13.8694 6.73664 13.8694C7.40426 13.8694 7.98191 13.7368 8.4696 13.4716C8.96202 13.2017 9.34081 12.8301 9.60596 12.3566C9.87111 11.8831 10.0037 11.3433 10.0037 10.7373V1.45459Z"
                    fill="#101828"/>
                <path
                    d="M17.96 9.608V16H15.389V5.09095H17.8464V6.94465H17.9742C18.2252 6.33385 18.6253 5.84853 19.1745 5.48868C19.7285 5.12883 20.4127 4.94891 21.2271 4.94891C21.9799 4.94891 22.6357 5.10989 23.1944 5.43186C23.7578 5.75383 24.1934 6.22022 24.5012 6.83101C24.8137 7.44181 24.9676 8.18281 24.9629 9.05402V16H22.3918V9.45175C22.3918 8.72258 22.2024 8.15203 21.8236 7.7401C21.4496 7.32817 20.9311 7.1222 20.2682 7.1222C19.8184 7.1222 19.4183 7.22163 19.068 7.4205C18.7223 7.61463 18.4501 7.89635 18.2512 8.26567C18.0571 8.63499 17.96 9.08243 17.96 9.608Z"
                    fill="#101828"/>
                <path
                    d="M33.0239 5.09095V7.07959H26.7526V5.09095H33.0239ZM28.3009 2.47732H30.8719V12.7188C30.8719 13.0644 30.924 13.3296 31.0282 13.5142C31.1371 13.6942 31.2791 13.8173 31.4543 13.8836C31.6295 13.9499 31.8236 13.983 32.0367 13.983C32.1977 13.983 32.3445 13.9712 32.4771 13.9475C32.6144 13.9238 32.7185 13.9025 32.7896 13.8836L33.2228 15.8935C33.0855 15.9409 32.889 15.9929 32.6333 16.0498C32.3824 16.1066 32.0746 16.1397 31.71 16.1492C31.0661 16.1681 30.4861 16.0711 29.97 15.858C29.4539 15.6402 29.0443 15.304 28.7413 14.8495C28.443 14.3949 28.2962 13.8267 28.3009 13.1449V2.47732Z"
                    fill="#101828"/>
                <path
                    d="M35.1741 16V5.09095H37.7452V16H35.1741ZM36.4668 3.54266C36.0596 3.54266 35.7092 3.40772 35.4156 3.13783C35.1221 2.86321 34.9753 2.53413 34.9753 2.15061C34.9753 1.76235 35.1221 1.43328 35.4156 1.1634C35.7092 0.888775 36.0596 0.751465 36.4668 0.751465C36.8787 0.751465 37.2291 0.888775 37.5179 1.1634C37.8115 1.43328 37.9582 1.76235 37.9582 2.15061C37.9582 2.53413 37.8115 2.86321 37.5179 3.13783C37.2291 3.40772 36.8787 3.54266 36.4668 3.54266Z"
                    fill="#101828"/>
                <path
                    d="M45.8364 5.09095V7.07959H39.5651V5.09095H45.8364ZM41.1134 2.47732H43.6844V12.7188C43.6844 13.0644 43.7365 13.3296 43.8407 13.5142C43.9496 13.6942 44.0916 13.8173 44.2668 13.8836C44.442 13.9499 44.6362 13.983 44.8492 13.983C45.0102 13.983 45.157 13.9712 45.2896 13.9475C45.4269 13.9238 45.531 13.9025 45.6021 13.8836L46.0353 15.8935C45.898 15.9409 45.7015 15.9929 45.4458 16.0498C45.1949 16.1066 44.8871 16.1397 44.5225 16.1492C43.8786 16.1681 43.2986 16.0711 42.7825 15.858C42.2664 15.6402 41.8568 15.304 41.5538 14.8495C41.2555 14.3949 41.1087 13.8267 41.1134 13.1449V2.47732Z"
                    fill="#101828"/>
                <path d="M50.792 1.45459V16H48.221V1.45459H50.792Z" fill="#101828"/>
                <path
                    d="M58.2654 16.2131C57.1717 16.2131 56.2271 15.9858 55.4316 15.5313C54.6409 15.072 54.0325 14.4233 53.6063 13.5853C53.1802 12.7425 52.9671 11.7505 52.9671 10.6094C52.9671 9.48726 53.1802 8.50241 53.6063 7.65487C54.0372 6.8026 54.6385 6.13972 55.4103 5.66624C56.1821 5.18802 57.0888 4.94891 58.1305 4.94891C58.8028 4.94891 59.4373 5.05781 60.0339 5.27561C60.6352 5.48868 61.1655 5.82012 61.6248 6.26993C62.0888 6.71974 62.4534 7.29266 62.7185 7.98868C62.9837 8.67997 63.1163 9.50383 63.1163 10.4603V11.2486H54.1745V9.51567H60.6518C60.647 9.02324 60.5405 8.58527 60.3322 8.20175C60.1238 7.81349 59.8326 7.50809 59.4586 7.28556C59.0893 7.06302 58.6584 6.95175 58.166 6.95175C57.6404 6.95175 57.1788 7.07959 56.781 7.33527C56.3833 7.58622 56.0732 7.91766 55.8506 8.32959C55.6328 8.73679 55.5216 9.18423 55.5168 9.67192V11.1847C55.5168 11.8192 55.6328 12.3637 55.8648 12.8182C56.0968 13.268 56.4212 13.6137 56.8379 13.8552C57.2545 14.0919 57.7422 14.2103 58.3009 14.2103C58.675 14.2103 59.0135 14.1582 59.3165 14.054C59.6196 13.9451 59.8824 13.7865 60.1049 13.5782C60.3274 13.3698 60.4955 13.1118 60.6092 12.804L63.0097 13.0739C62.8582 13.7084 62.5694 14.2624 62.1433 14.7358C61.7219 15.2046 61.1821 15.5692 60.5239 15.8296C59.8658 16.0853 59.1129 16.2131 58.2654 16.2131Z"
                    fill="#101828"/>
                <path
                    d="M69.3396 16.1918C68.4826 16.1918 67.7156 15.9716 67.0385 15.5313C66.3614 15.091 65.8264 14.4517 65.4334 13.6137C65.0404 12.7756 64.8439 11.7576 64.8439 10.5597C64.8439 9.34758 65.0427 8.32486 65.4405 7.49152C65.8429 6.65345 66.3851 6.02135 67.0669 5.59521C67.7487 5.16434 68.5087 4.94891 69.3467 4.94891C69.9859 4.94891 70.5115 5.05781 70.9234 5.27561C71.3354 5.48868 71.6621 5.74673 71.9035 6.04976C72.145 6.34806 72.332 6.62978 72.4646 6.89493H72.5712V1.45459H75.1493V16H72.6209V14.2813H72.4646C72.332 14.5464 72.1403 14.8282 71.8893 15.1265C71.6384 15.42 71.307 15.671 70.895 15.8793C70.4831 16.0876 69.9646 16.1918 69.3396 16.1918ZM70.057 14.0824C70.6015 14.0824 71.0655 13.9357 71.449 13.6421C71.8325 13.3438 72.1237 12.9295 72.3226 12.3992C72.5214 11.8689 72.6209 11.251 72.6209 10.5455C72.6209 9.84001 72.5214 9.22684 72.3226 8.70601C72.1284 8.18518 71.8396 7.78035 71.4561 7.49152C71.0773 7.2027 70.6109 7.05828 70.057 7.05828C69.484 7.05828 69.0058 7.20743 68.6223 7.50573C68.2388 7.80402 67.95 8.21595 67.7558 8.74152C67.5617 9.26709 67.4646 9.86842 67.4646 10.5455C67.4646 11.2273 67.5617 11.8357 67.7558 12.3708C67.9547 12.9011 68.2459 13.3201 68.6294 13.6279C69.0177 13.9309 69.4935 14.0824 70.057 14.0824Z"
                    fill="#101828"/>
                <path
                    d="M92.1326 1.45459H94.7675V10.9574C94.7675 11.9991 94.5213 12.9153 94.0289 13.706C93.5412 14.4967 92.8547 15.1146 91.9692 15.5597C91.0838 16 90.0493 16.2202 88.8655 16.2202C87.6771 16.2202 86.6402 16 85.7548 15.5597C84.8693 15.1146 84.1828 14.4967 83.6951 13.706C83.2074 12.9153 82.9636 11.9991 82.9636 10.9574V1.45459H85.5985V10.7373C85.5985 11.3433 85.7311 11.8831 85.9962 12.3566C86.2661 12.8301 86.6449 13.2017 87.1326 13.4716C87.6203 13.7368 88.1979 13.8694 88.8655 13.8694C89.5332 13.8694 90.1108 13.7368 90.5985 13.4716C91.0909 13.2017 91.4697 12.8301 91.7349 12.3566C92 11.8831 92.1326 11.3433 92.1326 10.7373V1.45459Z"
                    fill="#101828"/>
                <path d="M100.266 1.45459V16H97.6315V1.45459H100.266Z" fill="#101828"/>
            </svg>
        }
    </div>
})