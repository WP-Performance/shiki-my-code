export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-20">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block mx-auto my-0 bg-none"
                width="48px"
                height="48px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="36.6559" cy="50" fill="#333" r="20">
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="-0.5s"
                    />
                </circle>
                <circle cx="63.3441" cy="50"
                        fill="var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))"
                        r="20">
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="0s"
                    />
                </circle>
                <circle cx="36.6559" cy="50" fill="#333" r="20">
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="-0.5s"
                    />
                    <animate
                        attributeName="fill-opacity"
                        values="0;0;1;1"
                        calcMode="discrete"
                        keyTimes="0;0.499;0.5;1"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
}
