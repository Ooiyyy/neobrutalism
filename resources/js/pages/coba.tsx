import { Card, CardContent } from "@/components/ui/brutal/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/brutal/carousel";
import usePage from "node_modules/@inertiajs/react/types/usePage";

type Coba = {
    gambar1: string;
    judul: string;
    carousel: string[];
    kartuUcapan: string;
    gambarMomen: string[];
}

export default function Coba({ gambar1, judul, carousel, kartuUcapan, gambarMomen }: Coba) {

    return (
        <div className="w-full flex-col items-center gap-4 flex">
            <img src={gambar1} alt="gambar1" />
            <h1>{judul}</h1>
            <Carousel className="w-100">
                <CarouselContent>
                    {carousel.map((urlDariprops, urutan) =>
                        <CarouselItem key={urutan}>
                            <div className="p-[10px]">
                                <Card className="shadow-none p-0 bg-main text-main-foreground">
                                    <CardContent className="flex aspect-square items-center justify-center p-4">
                                        <img src={urlDariprops} alt={`carousel-${urutan}`} className="w-full h-50 object-cover"
                                        />                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <p>{kartuUcapan}</p>
            <Carousel className="w-100">
                <CarouselContent>
                    {gambarMomen.map((urlDariprops, urutan) =>
                        <CarouselItem key={urutan}>
                            <div className="p-[10px]">
                                <Card className="shadow-none p-0 bg-main text-main-foreground">
                                    <CardContent className="flex aspect-square items-center justify-center p-4">
                                        <img src={urlDariprops} alt={`carousel-${urutan}`} className="w-full h-50 object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}