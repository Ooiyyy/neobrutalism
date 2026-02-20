import { AutoSlider } from "@/components/ui/brutal/auto-slider";
import { Button } from "@/components/ui/brutal/button";
import { Card, CardContent } from "@/components/ui/brutal/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/brutal/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/brutal/dialog";
import Marquee from "@/components/ui/brutal/marquee";
import { ScrollArea } from "@/components/ui/scroll-area";
import { coba } from "@/types/coba";
import { useEffect, useRef, useState } from "react";


function Typewriter({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState("")

    useEffect(() => {
        let i = 0

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1))
            i++

            if (i >= text.length) clearInterval(interval)
        }, 40) // kecepatan ketik

        return () => clearInterval(interval)
    }, [text])

    return (
        <p className="whitespace-pre-line leading-relaxed">
            {displayed}
            <span className="animate-pulse">|</span>
        </p>
    )
}
function HarapanForm() {
    const [text, setText] = useState("")

    const nomorWA = "6281803558858" // GANTI nomor kamu (tanpa +)

    const handleSend = () => {
        if (!text.trim()) return

        const pesan = encodeURIComponent(text)

        const url = `https://wa.me/${nomorWA}?text=${pesan}`

        window.open(url, "_blank")
    }

    return (
        <div className="p-4 space-y-4">
            <ScrollArea>
                {/* INPUT */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Tulis harapan pean di sini..."
                    className="
          w-full h-32
          p-3
          border-2 border-black
          bg-white
          shadow-[4px_4px_0px_black]
          resize-none
          text-sm
        "
                />
            </ScrollArea>
            {/* BUTTON KIRIM */}
            <button
                onClick={handleSend}
                className="
          w-full
          py-3
          font-bold
          border-4 border-black
          bg-green-400
          shadow-[6px_6px_0px_black]
          hover:translate-x-1 hover:translate-y-1 hover:shadow-none
          transition-all
        "
            >
                Kirim Harapan Pean!
            </button>

        </div>
    )
}

export default function Coba({ HBD, gambar1, judul, carousel, kartuUcapan, gambarMomen, love }: coba) {
    return (
        <div className="min-h-screen w-full bg-pink-50 text-black">
            <div>
                <Marquee items={HBD} />
            </div>
            <div className="flex gap-[20px] flex-wrap mx-2 my-5">
                <div className="grow flex justify-center">
                    <img src={gambar1} alt="gambar1" className="w-58 h-auto animate-pulse-scale" />
                </div>

                <div className="w-full text-center">
                    <h1 className="whitespace-pre-line text-xs font-pixel">
                        {judul}
                    </h1>
                </div>

                <div className="grow flex justify-center">
                    <AutoSlider carousel={carousel} />
                </div>

                <div className="flex w-full">
                    {/* Dialog Ucapan */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="flex-1 w-25 h-15 text-sm mx-2">
                                Ucapan mas <br /> ke pean
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-sm p-0 border-4 border-black shadow-[8px_8px_0px_black] bg-yellow-50    text-black">

                            {/* HEADER */}
                            <DialogHeader className="px-4 pt-4">
                                <DialogTitle className="text-base font-bold">
                                    Ucapan Mas ke Pean
                                </DialogTitle>
                                <DialogDescription className="text-xs text-black">
                                    baca pelan-pelan sambil di scroll ya sayang :)
                                </DialogDescription>
                            </DialogHeader>

                            {/* KERTAS */}
                            <div className="p-4">
                                <div
                                    className="
                                    bg-white
                                    border-2 border-black
                                    shadow-[4px_4px_0px_black]
                                    p-4
                                    min-h-[200px]
                                    text-sm
                                    font-mono
                                    "
                                >
                                    <ScrollArea className="h-[260px] p-4">
                                        <Typewriter
                                            text={`Selamat ulang tahun sayang❤️
                                                Makasih udah kerja keras selama 19 tahun ini, makasih udah kuaat,
                                                makasih selalu berjuang buat hubungan kita, makasih selalu ada buat mas :)
                                                
                                                Semoga kedepannya pean bisa buat semua orang bahagia sayang :), 
                                                buktiin ke bapak ibu bahwa pean gapernah berhent mikirin biar mereka seneng dan bangga.
                                                
                                                Buktiin juga ke mas dan diri pean sendiri bahwa pean selalu berusaha buat jadi yang terbaik.
                                                Semoga sayang bisa sukses, manfaat, sehat, bahagia, dan dapat mencapai cita cita pean.
                                                
                                                Semoga juga pean selalu diberi kelancaran dalam hal apapu, semoga kuliah pean lancar terus,
                                                semoga sayang banyak rezeki.
                                                
                                                Mas buat ini dengan sebisa mas hehee, maap cuma ini yang bisa mas kasih. Semoga mas bisa kasih kado pean lain hari.
                                                love you sayang :) <3.`}
                                        />
                                    </ScrollArea>
                                </div>
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

                        <DialogContent className="max-w-sm p-0 border-4 border-black shadow-[8px_8px_0px_black] bg-white text-black">

                            {/* HEADER */}
                            <DialogHeader className="px-4 pt-4">
                                <DialogTitle className="text-base font-bold">
                                    Momen Kita 💛
                                </DialogTitle>

                                <DialogDescription className="text-xs text-black">
                                    Beberapa momen kita yang sempet kita abadikan :)
                                </DialogDescription>
                            </DialogHeader>

                            {/* CAROUSEL */}
                            <div className="px-4 pb-4 pt-2">
                                <Carousel opts={{ loop: true }} className="w-full">
                                    <CarouselContent>
                                        {gambarMomen.map((url, i) => (
                                            <CarouselItem key={i}>
                                                <Card className="border-4 border-black shadow-[6px_6px_0px_black] overflow-hidden bg-rose-100">
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
                    {/* Dialog Harapan */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="flex-1 w-25 h-15 text-sm mx-2">
                                Tulis <br /> harapan pean!
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-sm p-0 border-4 border-black shadow-[8px_8px_0px_black] bg-white text-black">

                            <DialogHeader className="px-4 pt-4">
                                <DialogTitle className="font-bold">
                                    ✍️ Tulis Harapan
                                </DialogTitle>

                                <DialogDescription className="text-xs text-black">
                                    nanti langsung kekirim ke WA mas
                                </DialogDescription>
                            </DialogHeader>

                            <HarapanForm />

                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}