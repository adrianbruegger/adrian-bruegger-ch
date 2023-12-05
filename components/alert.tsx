import Container from "./container";
import cn from "classnames";

import Link from "next/link";

export default function Alert({ preview }) {
    return (
        <div
            className={cn("border-b", {
                "bg-accent-7 border-accent-7 text-white": preview,
                "bg-accent-1 border-accent-2": !preview,
            })}
        >
            <Container>
                <div className="py-2 text-center text-sm">
                    {preview ? (
                        <>
                            This is a page preview.{" "}
                            <Link
                                href="/api/exit-preview"
                                className="underline hover:text-cyan duration-200 transition-colors"
                            >
                                Click here
                            </Link>{" "}
                            to exit preview mode.
                        </>
                    ) : (
                        <>
                            Der Quellcode meiner Webseite ist{" "}
                            <a
                                href={`https://github.com/adrianbruegger/adrian-bruegger-ch`}
                                className="underline hover:text-success duration-200 transition-colors"
                            >
                                öffentlich abrufbar auf GitHub
                            </a>
                            .
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}
