import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
	const { t } = useTranslation();
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => (count < 404 ? count + 1 : count));
		}, 8);
		return () => clearInterval(interval);
	}, []);

	return (
		<main aria-label="Error page" className="fixed inset-0 flex items-center justify-center">
			<div className="flex h-96 max-w-lg flex-col items-center gap-6 p-1 text-center">
				<p className="text-8xl font-bold">{count}</p>

				<h1 className="text-3xl font-bold">{t('errors.404.title')}</h1>
				<p className="text-xl">{t('errors.404.subtitle')}</p>

				<NavLink
					to="/"
					className="rounded-3xl bg-primary px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark"
				>
					{t('errors.common.backToHome')}
				</NavLink>
			</div>
		</main>
	);
};

export default Page404;
