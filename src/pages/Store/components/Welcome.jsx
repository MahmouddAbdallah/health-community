import { ComprehensivelyTestedIcon, QualitySourcedIcon, RootedInScienceIcon, SustainabilityMindedIcon } from "../../../components/icons"

const Welcome = () => {
    const items = [
        {
            name: "Quality Sourced",
            icon: <QualitySourcedIcon />
        },
        {
            name: "Sustainability Minded",
            icon: <SustainabilityMindedIcon />
        },
        {
            name: "Rooted In Science",
            icon: <RootedInScienceIcon />
        },
        {
            name: "Comprehensively Tested",
            icon: <ComprehensivelyTestedIcon />
        },
    ]
    return (
        <div className="py-10 lg:py-32 pcontainer space-y-10 bg-black-black/5">
            <div className="flex justify-center">
                <div className="lg:w-2/3 text-center space-y-3">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-DARKCOLOR">Welcome to a happier, healthier you</h1>
                    <span className="block text-sm lg:text-lg text-DARKCOLOR/75">
                        Our unique formulas include targeted nutrients and bioactive that radically transform your health -
                        from the inside out and outside in.*
                    </span>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex justify-center gap-10 flex-wrap">
                    {
                        items.map(item =>
                            <div key={item.name}>
                                <div className="flex flex-col gap-2 items-center">
                                    {item.icon}
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Welcome