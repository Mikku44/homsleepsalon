import { useState } from "react"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from "~/components/Toast"
import { useTranslation } from "react-i18next"


export function meta() {
  return [
    {
      title:
        'Reserve at Homsleepsalon | Head Spa & Premium Relaxation Sukhumvit 22 & Sathorn'
    },
    {
      name: 'description',
      content:
        'จองบริการ Head Spa, นวดผ่อนคลาย, สปาหน้า และทำเล็บที่ Homsleepsalon สุขุมวิท 22 และสาทร พร้อมเทอราพิสผู้เชี่ยวชาญในบรรยากาศผ่อนคลาย ใกล้ BTS พร้อมพงษ์'
    },
  ]
}

// Zod schema
const reserveSchema = z.object({
  name: z.string().min(2, 'กรุณากรอกชื่อของคุณ'),
  phone: z
    .string()
    .regex(/^0\d{8,9}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง'),
  date: z.string().nonempty('กรุณาเลือกวันที่'),
  time: z.string().nonempty('กรุณาเลือกเวลา'),
  guests: z
    .number({ invalid_type_error: 'กรุณากรอกจำนวนคน' })
    .min(1, 'ต้องมีอย่างน้อย 1 คน')
    .max(10, 'จำนวนคนเกินไป'),
})

type ReserveFormData = z.infer<typeof reserveSchema>

export default function Reserve() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReserveFormData>({
    resolver: zodResolver(reserveSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
    },
  })

  const toast = useToast()
  const {t} = useTranslation();
  const [submitted, setSubmitted] = useState(false)
  

  const onSubmit = (data: ReserveFormData) => {
    toast('Success!', 'Your action was successful.');
    console.log('Reserve Data:', data)
    setSubmitted(true)
    reset()
    
  }

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="md:h-screen h-[500px] overflow-hidden bg-[var(--secondary-color)] text-white flex justify-between items-center">
        <div className="box-container-md w-full flex md:flex-row-reverse text-right flex-col gap-5 justify-between items-center">
          <div>
            <h2 className="header-1 font-bold max-w-[350px]">
              Serenity Through Vietnamese Head & Face Therapy
            </h2>
            <p className="text-md max-w-[350px] mt-2">
              Experience ultimate relaxation and rejuvenation with our signature
              Vietnamese head and face therapies in the heart of Bangkok.
            </p>
          </div>
          <div className="md:w-[300px] w-full md:h-auto h-[150px] md:rounded-full overflow-hidden">
            <img
              src="/images/hom4/hom4 (26).jpg"
              className="h-full w-full object-cover"
              alt="homesleep bed"
            />
          </div>
        </div>
      </section>

      {/* Reserve Form Section */}
      <div className="w-full ">
        <section className="box-container py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {t("Book Your Reservation")}
          </h2>
          {submitted && (
            <p className="mb-6 text-green-600">
              Thank you! Your reservation has been submitted.
            </p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Name</label>
              <input
                {...register('name')}
                placeholder="Your Name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            {/* Phone */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Phone</label>
              <input
                {...register('phone')}
                placeholder="0812345678"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            {/* Date */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Date</label>
              <input
                {...register('date')}
                type="date"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>
            {/* Time */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Time</label>
              <input
                {...register('time')}
                type="time"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
            {/* Guests */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Guests</label>
              <input
                {...register('guests', { valueAsNumber: true })}
                type="number"
                min={1}
                max={10}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {errors.guests && (
                <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--primary-color)] text-black py-3 rounded font-medium hover:opacity-90 transition"
              >
                {isSubmitting ? 'Submitting...' : 'Reserve Now'}
              </button>
            </div>

            {/* button */}
  
          </form>
        </section>
      </div>
    </main>
  )
}
