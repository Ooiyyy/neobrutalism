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
                                {/* {Array.from({ length: 10 }).map((_, index) => ( */}
                                <p>
                                    Haaiiii, Selamat Ulang Tahun sayang, <br />
                                    Semoga sehat selaluu,
                                </p>
                                {/* ))} */}
                            </div>
                        </DialogContent>
                    </Dialog>
                    {/* Dialog gambar momen */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="flex-1 w-25 h-15 text-sm mx-2">
                                Momen kita
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-sm p-0 border-4 border-black shadow-[8px_8px_0px_black] bg-white">

                            {/* HEADER */}
                            <DialogHeader className="px-4 pt-4">
                                <DialogTitle className="text-base font-bold">
                                    Momen Kita 💛
                                </DialogTitle>

                                <DialogDescription className="text-xs">
                                    kenangan yang tidak bisa diulang :)
                                </DialogDescription>
                            </DialogHeader>

                            {/* CAROUSEL */}
                            <div className="px-4 pb-4 pt-2">
                                <Carousel opts={{ loop: true }} className="w-full">
                                    <CarouselContent>
                                        {gambarMomen.map((url, i) => (
                                            <CarouselItem key={i}>
                                                <Card className="border-4 border-black shadow-[6px_6px_0px_black] overflow-hidden">
                                                    <CardContent className="p-0">
                                                        <img
                                                            src={url}
                                                            alt={`momen-${i}`}
                                                            className="
                                                                w-full
                                                                h-64
                                                                object-cover
                                                                select-none
                                                                "
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {/* NAV BUTTON */}
                                    <CarouselPrevious className="left-2 border-4 border-black bg-white shadow-[4px_4px_0px_black]" />
                                    <CarouselNext className="right-2 border-4 border-black bg-white shadow-[4px_4px_0px_black]" />
                                </Carousel>
                            </div>
                        </DialogContent>
                    </Dialog>
                    {/* dialog harapan */}
                    <Dialog>
                        <DialogTrigger asChild>
                            {/* <Button>Scrollable Content</Button> */}
                            <Button className="flex-1 w-25 h-15 text-sm mx-2">Tulis <br />harapan pean!</Button>
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
                                {/* {Array.from({ length: 10 }).map((_, index) => ( */}
                                <p>
                                    Haaiiii, Selamat Ulang Tahun sayang, <br />
                                    Semoga sehat selaluu,
                                </p>
                                {/* ))} */}
                            </div>
                        </DialogContent>
                    </Dialog>
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