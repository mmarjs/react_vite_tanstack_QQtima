import type { SVGProps } from 'react';

export const List = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24.4 18.8"
			aria-hidden="true"
			focusable="false"
			fill="currentColor"
			{...props}
		>
			<path d="M23.94 0H8.54a.48.48 0 0 0-.49.48v2.67a.48.48 0 0 0 .49.49h15.4a.48.48 0 0 0 .48-.49V.48a.48.48 0 0 0-.48-.48M3.78 0H.48A.48.48 0 0 0 0 .48v2.67a.48.48 0 0 0 .48.49h3.3a.48.48 0 0 0 .49-.49V.48A.48.48 0 0 0 3.78 0m0 7.61H.48A.48.48 0 0 0 0 8.1v2.67a.48.48 0 0 0 .48.48h3.3a.48.48 0 0 0 .49-.48V8.1a.48.48 0 0 0-.49-.49m20.16 0H8.54a.48.48 0 0 0-.49.49v2.67a.48.48 0 0 0 .49.48h15.4a.48.48 0 0 0 .48-.48V8.1a.48.48 0 0 0-.48-.49M3.78 15.22H.48a.48.48 0 0 0-.48.49v2.67a.48.48 0 0 0 .48.48h3.3a.48.48 0 0 0 .49-.48V15.7a.48.48 0 0 0-.49-.49m20.16.01H8.54a.48.48 0 0 0-.49.49v2.67a.48.48 0 0 0 .49.48h15.4a.48.48 0 0 0 .48-.48V15.7a.48.48 0 0 0-.48-.49" />
		</svg>
	);
};
