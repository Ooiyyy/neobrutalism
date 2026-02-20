import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import { Card, CardContent } from "@/components/ui/brutal/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
    carousel: string[]
}

export function AutoSlider({ carousel }: Props) {
    const plugin = React.useRef(
        AutoScroll({
            speed: 0.5,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            playOnInit: true,
        })
    )


    if (!carousel || carousel.length === 0) return null

    return (
        <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            className="w-full max-w-[14rem] sm:max-w-xs"
        >
            <CarouselContent>

                {carousel.map((path, i) => (
                    <CarouselItem key={i}>

                        <Card className="overflow-hidden border-4 border-black shadow-[6px_6px_0px_black] bg-rose-100">

                            <CardContent className="p-0">
                                <img
                                    src={path}
                                    alt={`slide-${i}`}
                                    className="
                                        w-full
                                        h-48
                                        object-cover
                                        select-none
                                    "
                                />
                            </CardContent>

                        </Card>

                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel>

    )
}
