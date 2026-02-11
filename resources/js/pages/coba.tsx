import { Card, CardContent } from "@/components/ui/brutal/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/brutal/carousel";
import Marquee from "@/components/ui/brutal/marquee";
import { coba } from "@/types/coba";

export default function Coba({ HBD, gambar1, judul, carousel, kartuUcapan, gambarMomen }: coba) {

    return (
        <>
            <Marquee items={HBD} />
            <div className="flex gap-[20px] flex-wrap">
                <div className="grow flex justify-center">
                    <img src={gambar1} alt="gambar1" className="w-full h-auto" />
                </div>

                <div className="w-full text-center">
                    <h1>{judul}</h1>
                </div>
                <div className="grow">
                    <Card />
                </div>
                <div className="grow w-auto h-auto">
                    <Card />
                </div>
                <div className="w-auto h-auto grow">
                    <Card />
                </div>
                {/* <Carousel className="w-100">
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
                </Carousel> */}
            </div>
        </>
    )
}