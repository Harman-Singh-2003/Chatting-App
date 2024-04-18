import "@/styles/globals.css";
import { Metadata } from "next";
import { users } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-row h-screen">
						<aside className="w-1/4 bg-gray-200 p-4">
							<h2 className="text-lg font-semibold mb-4">Users</h2>
							<ul className="space-y-2">
								{/* Render the list of users */}
								{users.map((user) => (
									<li className="text-gray-700" key={user.id}>
										<Link href={`/${user.id}`}>{user.name}</Link>
									</li>
								))}
							</ul>
						</aside>
						<main className="container mx-auto max-w-7xl flex-grow">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
