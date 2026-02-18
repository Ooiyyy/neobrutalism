import { useEffect, useState } from "react"
import { router } from "@inertiajs/react"

type Props = {
  deadline: string
}

export default function Countdown({ deadline }: Props) {
  const [timeLeft, setTimeLeft] = useState(0)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const target = new Date(deadline).getTime()

    const interval = setInterval(() => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        setExpired(true)
        clearInterval(interval)
        return
      }

      setTimeLeft(diff)
    }, 1000)

    return () => clearInterval(interval)
  }, [deadline])

  // format waktu
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  const handleClick = () => {
    if (expired) {
      router.visit("/coba")
    }
  }

  return (
    <div
      onClick={handleClick}
      className="
        min-h-screen
        bg-yellow-300
        flex flex-col items-center justify-center
        px-4 text-center
        font-pixel
        cursor-pointer
      "
    >
      {/* BOX BRUTAL */}
      <div
        className="
          border-4 border-black
          bg-white
          shadow-[8px_8px_0px_black]
          p-6
          w-full max-w-sm
        "
      >
        {!expired ? (
          <>
            <h1 className="text-lg mb-6">Tunggu ya aayy....</h1>

            <div className="text-xl leading-loose">
              {days}H {hours}J
              <br />
              {minutes}M {seconds}D
            </div>

            <p className="mt-6 text-xs">
              21 FEB 2026 — 00:00
            </p>
          </>
        ) : (
          <>
            <h1 className="text-lg mb-4">
              Tekan Sambil Doa...
            </h1>

            <p className="text-xs">
              untuk melanjutkan
            </p>
          </>
        )}
      </div>

      {/* INFO KECIL */}
      {!expired && (
        <p className="mt-6 text-xs font-pixel">
          sabar ya :)
        </p>
      )}
    </div>
  )
}
