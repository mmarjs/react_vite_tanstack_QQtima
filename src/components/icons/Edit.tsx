import type { SVGProps } from 'react';

export const Edit = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.6 16.6" fill="currentColor" {...props}>
			<path
				fill="#f40"
				stroke="#f40"
				strokeWidth=".3"
				d="M13.07 16.5H2.4A2.4 2.4 0 0 1 0 14.1V3.41a2.4 2.4 0 0 1 2.4-2.4h7.22a.28.28 0 1 1 0 .55H2.4A1.86 1.86 0 0 0 .55 3.42V14.1a1.86 1.86 0 0 0 1.85 1.85h10.67a1.86 1.86 0 0 0 1.85-1.85V6.34a.28.28 0 0 1 .55 0v7.75a2.4 2.4 0 0 1-2.4 2.4"
			/>
			<path d="M5.65 11.55a.64.64 0 0 1-.57-.91l1.34-2.9a.64.64 0 0 1 .13-.18L13.93.19a.64.64 0 0 1 .9 0l1.48 1.48a.64.64 0 0 1 0 .9L8.93 9.94a.64.64 0 0 1-.17.12l-2.82 1.42a.64.64 0 0 1-.29.07m8.73-11a.08.08 0 0 0-.06.02L6.94 7.95a.08.08 0 0 0-.02.02l-1.34 2.9a.09.09 0 0 0 .11.11l2.83-1.41a.09.09 0 0 0 .02-.02l7.38-7.38a.09.09 0 0 0 0-.12L14.44.57a.08.08 0 0 0-.06-.02" />
			<path d="m7.33 8.21.86.95c.14.18.66.7.43.74l-3 1.37a.3.3 0 0 1-.33-.4L6.63 7.9c.09-.21.55.13.7.31" />
		</svg>
	);
};
