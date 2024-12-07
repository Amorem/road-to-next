import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/app/paths";
import { buttonVariants } from "@/components/ui/button";
import ThemeSwitcher from "./themes/theme-switcher";

export default function Header() {
	return (
		<nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
			<div className="flex align-middle gap-x-2">
				<Link href={homePath} className={buttonVariants({ variant: "ghost" })}>
					<LucideKanban />
					<h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
				</Link>
			</div>
			<div className="flex align-middle gap-x-2">
				<ThemeSwitcher />
				<Link
					href={ticketsPath}
					className={buttonVariants({ variant: "outline" })}
				>
					Tickets
				</Link>
			</div>
		</nav>
	);
}
