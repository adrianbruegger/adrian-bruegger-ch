import Link from "next/link";

import { useRouter } from "next/router";
import Container from "./container";

export default function Header() {
    const router = useRouter();
    const navigation = [
        {
            name: "Engagement",
            href: "/engagement",
            isActive: router.pathname === "/engagement",
        },
        {
            name: "Aktuelles",
            href: "/posts",
            isActive: router.pathname === "/posts",
        },
        {
            name: "Über mich",
            href: "/ueber-mich",
            isActive: router.pathname === "/ueber-mich",
        },
    ];
    return (
        <div className="container mx-auto px-5 xl:px-8">
            <nav style={{ zIndex: 100 }} className="sticky top-0 z-100 border-b bg-white/20 border-primary backdrop-blur-md px-2">
                <div className="flex items-center justify-between w-full py-2 lg:px-0">
                    <p className="font-syne w-fit md:w-full text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                        <Link href="/" className="hover:underline ">
                            Adrian Brügger
                        </Link>
                    </p>
                    <div className="w-full flex justify-end md:items-center">
                        <div className="flex space-x-1 md:space-x-5 w-full justify-end">
                            {navigation.map((item) => (
                                <NavItem item={item} key={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

type Props = {
    item: {
        href: string;
        isActive: boolean;
        name: string;
    };
};

function NavItem({ item }: Props) {

    return (
        <Link
            key={item.name}
            href={item.href}
            className={`text-sm h-6 p-1 hover:border-b  ${item.isActive
                    ? "text-teal-800 hover:text-teal-950  hover:border-teal-950"
                    : "text-secondary hover:text-primary hover:border-gray-700"
                }`}
        >
            {item.name}
        </Link>
    );
}
