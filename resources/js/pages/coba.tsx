import { AutoSlider } from "@/components/ui/brutal/auto-slider";
import { Button } from "@/components/ui/brutal/button";
import { Card, CardContent } from "@/components/ui/brutal/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/brutal/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/brutal/dialog";
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
                    <AutoSlider carousel={carousel} />
                </div>

                <div className="flex w-full">
                    {/* Dialog Ucapan */}
                    <Dialog>
                        <DialogTrigger asChild>
                            {/* <Button>Scrollable Content</Button> */}
                            <Button className="flex-1 w-25 h-15 text-sm mx-2">Ucapan mas <br /> ke pean</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Scrollable Content</DialogTitle>
                                <DialogDescription>
                                    This is a dialog with scrollable content.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
                                <h4 className="mb-4 text-lg leading-none font-heading">
                                    Lorem Ipsum
                                </h4>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <p key={index} className="mb-4 leading-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
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