import { AutoSlider } from "@/components/ui/brutal/auto-slider";
import { Button } from "@/components/ui/brutal/button";
import { Card, CardContent } from "@/components/ui/brutal/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/brutal/carousel";
import Marquee from "@/components/ui/brutal/marquee";
import { coba } from "@/types/coba";

export default function Coba({ HBD, gambar1, judul, carousel, kartuUcapan, gambarMomen, love }: coba) {

    return (
        <div className="bg-auto">
            <div>
                <Marquee items={HBD} />
            </div>
            <div className="flex gap-[20px] flex-wrap mx-2 my-5">
                <div className="grow flex justify-center">
                    <img src={gambar1} alt="gambar1" className="w-58 h-auto animate-pulse-scale" />
                </div>

                <div className="w-full text-center">
                    <h1 className="whitespace-pre-line text-xl">{judul}</h1>
                </div>

                <div className="grow flex justify-center">
                    <AutoSlider carousel={carousel}/>
                </div>

                <div className="flex w-full">
                    <Button className="flex-1 w-25 h-15 text-sm mx-2">Ucapan mas <br /> ke pean</Button>
                    <Button className="flex-1 w-25 h-15 text-sm mx-2">Momen kita</Button>
                    <Button className="flex-1 w-25 h-15 text-sm mx-2">Tulis <br />harapan pean!</Button>
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
        </div>
    )
}