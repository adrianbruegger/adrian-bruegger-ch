import { CassetteTape, Mountain, Rocket } from "lucide-react";

export default function Standpunkte() {
    return (
        <div className="grid gap-6 items-center my-32 w-full">
            <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                    <h2 className=" font-syne text-start text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                        Meine Schwerpunkte
                    </h2>
                </div>
                <div className="w-full max-w-full space-y-4 mx-auto">
                    <div className="grid lg:grid-cols-3 text-start gap-8">
                        <div className="flex flex-col space-y-2 items-start  border-gray-800 rounded-lg">
                            <Rocket className="h-12 w-12" />
                            <h3 className="text-xl font-bold">
                                Freiheit für die Wirtschaft
                            </h3>
                            <p className="leading-relaxed" >

                                Ich stehe für eine liberale Wirtschaftsordnung,
                                in der der Staat sich zurückhält und der freie
                                Markt gedeihen kann. Mein Ziel ist es,
                                Unternehmertum zu fördern und staatliche
                                Eingriffe zu minimieren, um Innovation und
                                Wettbewerbsfähigkeit zu stärken.
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-2 border-gray-800  rounded-lg">
                            <Mountain className="h-12 w-12" />
                            <h3 className="text-xl font-bold">
                                Unser Toggenburg - unsere Heimat
                            </h3>
                            <p className=" leading-relaxed" >

                                Ich engagiere mich für ein lebenswertes
                                Toggenburg, in dem wir uns wohl fühlen und
                                nachfolgende Generationen eine Zukunft haben. Dafür braucht
                                es eine Politik, die unsere Region stärkt und
                                die Eigenverantwortung der Menschen fördert.
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-2 border-gray-800  rounded-lg">
                            <CassetteTape className="h-12 w-12" />
                            <h3 className="text-xl font-bold">
                                Unsere digitale Zukunft
                            </h3>
                            <p className=" leading-relaxed" >
                                Ich setze mich für eine Zukunft ein, in der digitale Technologien unser Leben erleichtern und bereichern und in der wir die Chancen der Digitalisierung nutzen können.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
