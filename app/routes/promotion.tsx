

export default function Promotion() {
  return (
     <main>
      <section
        className='md:h-screen h-[500px] overflow-hidden 
       bg-[var(--secondary-color)] text-white flex justify-between items-center'
      >
        <div className='box-container-md w-full flex md:flex-row-reverse text-right flex-col gap-5 justify-between items-center'>
          <div className=''>
            <h2 className='header-1 font-bold max-w-[350px]'>
              Serenity Through Vietnamese Head & Face Therapy
            </h2>
            <h2 className='text-md max-w-[350px] '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate delectus accusamus, saepe tempore quos assumenda nam
              similique quisquam perspiciatis impedit.
            </h2>
          </div>
          {/*  */}
          <div className='md:w-[300px] w-full md:h-auto h-[150px] md:rounded-full overflow-hidden'>
            <img
              src='/images/hom4/hom4 (26).jpg'
              className='h-full w-full object-cover'
              alt='homesleep bed'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
