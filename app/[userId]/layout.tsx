export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-self-center gap-4 py-8 md:py-10 h-full">
			<div className="inline-block max-w-2xl w-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
