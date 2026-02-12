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
            speed: 1,
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
            className="w-full max-w-[12rem] sm:max-w-xs">
            <CarouselContent>
                {carousel.map((path, urutan) => (
                    <CarouselItem key={urutan}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        src={path}
                                        alt={`slide-${urutan}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
