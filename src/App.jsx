import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  // const screenHeight = window.innerHeight / 2
  // const header = document.querySelector('header');

  // window.addEventListener('scroll', () => {
  //   const onHero = window.scrollY > screenHeight;
  //   header.classList.add('bg-beige', onHero);
  //   // header.classList.add('bg-transparent', !onHero);
  // });

  useEffect(() => {
    const headerEl = document.querySelector('header');
    if (!headerEl) return; // safety guard

    const updateHeader = () => {
      const screenHeight = window.innerHeight / 2;
      const onHero = window.scrollY > screenHeight;

      headerEl.classList.toggle('bg-beige', onHero);
      headerEl.classList.toggle('bg-transparent', !onHero);
    };

    updateHeader();

    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);

    // cleanup on unmount
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  /** Rooms */
  const rooms = [
    { id: 1, title: "Standard Room", content: "First card content" },
    { id: 2, title: "Suite", content: "Second card content" },
    { id: 3, title: "Villa", content: "Third card content" },
  ];

  const [activeRoom, setActiveRoom] = useState(0);

  const next = () => {
    setActiveRoom((prev) => (prev + 1) % rooms.length);
  };

  const prev = () => {
    setActiveRoom((prev) =>
      prev === 0 ? rooms.length - 1 : prev - 1
    );
  };
  /** End of Rooms */

  return (
    <>
      {/* <header className='fixed top-0 right-0 left-0 z-40'> */}
      <header className='fixed top-0 right-0 left-0 z-40 transition-all duration-700 ease-in-out'>
        <div className='relative flex items-center justify-between px-4 md:px-12 border-b border-b-amber-900 py-4'>
          <h1><a href="/">Luxe Escape</a></h1>
          <nav className='max-md:absolute max-md:top-14.5 max-md:right-6 z-50'>
            <ul 
              className={`
                flex md:flex-row gap-2 md:gap-3.5 text-end md:text-center
                transition-all duration-700 ease-in-out max-md:bg-beige 
                max-md:flex-col max-md:py-4 max-md:px-2.5 max-md:text-lg md:font-semibold
                ${navOpen
                  ? 'max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto'
                  : 'max-md:opacity-0 max-md:-translate-y-4 max-md:pointer-events-none'}
                `}>
                  <li><a href="#hotel">Hotel</a></li>
                  <li><a href="#rooms">Rooms</a></li>
                  <li><a href="#restaurant">Restaurant</a></li>
                  <li><a href="#booking">Booking</a></li>
            </ul>
          </nav>
          <div className='md:hidden'>
            <svg
              id='menu-open'
              className={`${navOpen ? 'hidden' : 'block'} size-8 cursor-pointer`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              onClick={() => {
                setNavOpen(true);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8'
              >
                <path
                  fillRule='evenodd'
                  d='M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                  clipRule='evenodd'></path>
              </svg>
            </svg>

            <svg
              id='menu-close'
              className={`${navOpen ? 'block' : 'hidden'} size-8 cursor-pointer`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor' 
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'></path>
              </svg>
            </svg>
          </div>
        </div>
      </header>
      <div className='hero h-screen flex flex-col'>
        <div className='flex-1 flex flex-col justify-center pt-25 px-4 md:px-12 w-[70%] mx-auto '>
          <h2 className='flex flex-col gap-y-0 uppercase text-4xl md:text-7xl'>
            <span className='font-light'>Welcome to</span>
            <span className='self-end text-end'>Luxe Escape</span>
          </h2>
          <div className='pt-4 w-full md:w-[85%] self-end flex flex-col md:flex-row max-md:items-end items-center md:justify-end gap-x-5 gap-y-3'>
            <p className='max-md:text-sm'>Welcome to our Cozy Haven, where Comfort Meets Style and Exceptional Service Elevates Every Experience</p>
            <a href="#booking" className='bg-black px-7 md:px-14 py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Book Now</a>
          </div>
        </div>
        <div className='flex-1 pt-7 h-[50%]'>
          <img src="/images/hero.jpg" alt="" className='w-full h-full object-cover' />
        </div>
      </div>
      <main className='px-4 md:px-12'>
        <section id='rooms' className='pt-14'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl uppercase'>Our Rooms</h2>
            <div className='self-end flex items-center gap-2'>
              <button className='p-2 border border-beige hover:bg-beige focus:bg-beige active:bg-beige transition-all duration-700 ease-in-out rounded-full cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
              </button>
              <button className='p-2 border border-beige hover:bg-beige focus:bg-beige active:bg-beige transition-all duration-700 ease-in-out rounded-full cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
              </button>
            </div>
          </div>
          <section className='pt-5'>
            <article className='flex flex-col md:flex-row md:items-stretch gap-4 h-full'>
              <div className='flex-1 flex flex-col h-[70vh] md:h-[50vh] lg:h-[70vh]'>
                <div className='order-2 flex justify-between items-center pt-3'>
                  <div className='flex flex-col'>
                    <h3 className='text-xs font-bold'>Standard Room</h3>
                    <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                  </div>
                  <span>
                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                  </span>
                </div>
                <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
              </div>
              <div className='flex-1 flex gap-x-3 h-[70vh] md:h-[50vh] lg:h-[70vh]'>
                <article className='group flex flex-col gap-3 h-full cursor-pointer'>
                  <div className='flex-[55%] flex flex-col'>
                    <div className='order-2 flex justify-between items-center pt-3'>
                      <div className='flex flex-col'>
                        <h3 className='text-xs font-bold'>Standard Room</h3>
                        <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                      </div>
                      <span>
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                      </span>
                    </div>
                    <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
                  </div>
                  <div className='flex-[45%]'>
                    <div className='h-full opacity-0 group-hover:opacity-100 focus-within:opacity-100 group-active:opacity-100 transition-all duration-700 ease-in-out flex flex-col gap-2 justify-between bg-beige p-3'>
                      <p>This room offers different facilities for both business travellers and vacationers.</p>
                      <a href="#booking" className='bg-black text-center py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Book Now</a>
                    </div>
                  </div>
                </article>
                <article className='group flex flex-col-reverse gap-3 h-full cursor-pointer'>
                  <div className='flex-[55%] flex flex-col'>
                    <div className='order-2 flex justify-between items-center pt-3'>
                      <div className='flex flex-col'>
                        <h3 className='text-xs font-bold'>Standard Room</h3>
                        <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                      </div>
                      <span>
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                      </span>
                    </div>
                    <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
                  </div>
                  <div className='flex-[45%]'>
                    <div className='h-full opacity-0 group-hover:opacity-100 focus-within:opacity-100 group-active:opacity-100 transition-all duration-700 ease-in-out flex flex-col gap-2 justify-between bg-beige p-3'>
                      <p>This room offers different facilities for both business travellers and vacationers.</p>
                      <a href="#booking" className='bg-black text-center py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Book Now</a>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </section>
        </section>
        <section id="restaurant" className='pt-14'>
          <div className='mt-2 h-full flex flex-col md:flex-row gap-10 items-start justify-between'>
            <div className='flex-1 flex flex-col justify-between items-start gap-4 bg-beige p-4.5 h-[50vh] md:h-[37vh] lg:h-[50vh]'>
              <div className='flex-1'>
                <h2 className='text-5xl uppercase'>Restaurant at the Hotel</h2>
                <p className='h-full pt-3'>Our chefs offer both international and local dishes prepared only with fresh ingredients. In the cozy atmosphere of the restaurant, you can enjoy not only delicious meals, but also pleasant music and a friendly ambience.</p>
              </div>
              <a href="#booking" className='bg-black px-7 md:px-14 py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Reservation</a>
            </div>
            <div className='flex-1 h-[50vh] md:h-[37vh] lg:h-[50vh]'>
              <img src="/images/meal1.jpg" alt="" className='h-full w-full object-cover' />
            </div>
          </div>
        </section>
        <section id='video'></section>
        <section id='booking' className='pt-14'>
          <h2 className='text-3xl uppercase'>Booking</h2>
          <section className='grid grid-cols-1 md:grid-cols-4 items-end gap-6 pt-4 pb-3 mb:pb-2'>
            <div className=''>
              <span className='text-sm font-semibold'>Check-in</span>
              <div className='relative border-b border-b-gray-400'>
                <input type="text" placeholder='11-12-2025' className='ps-7 focus:outline-none focus:ring-0' />
                <svg class="w-6 h-6 absolute left-0 bottom-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                </svg>
              </div>
            </div>
            <div className=''>
              <span className='text-sm font-semibold'>Check-out</span>
              <div className='relative border-b border-b-gray-400'>
                <input type="text" placeholder='11-12-2025' className='ps-7 focus:outline-none focus:ring-0' />
                <svg class="w-6 h-6 absolute left-0 bottom-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                </svg>
              </div>
            </div>
            <div className=''>
              <span className='text-sm font-semibold'>Guests</span>
              <div className='relative border-b border-b-gray-400'>
                <input type="text" placeholder='2 guests, 1 kid' className='ps-7 focus:outline-none focus:ring-0' />
                <svg class="w-6 h-6 absolute left-0 bottom-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
              </div>
            </div>
            <button className='mb-0.5 bg-black px-7 md:px-14 py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Reserve</button>
          </section>
          <section className='pt-7'>
            <article className='flex flex-col md:flex-row-reverse md:items-stretch gap-4 h-full'>
              <div className='flex-1 flex flex-col h-[70vh] md:h-[50vh] lg:h-[70vh]'>
                <div className='order-2 flex justify-between items-center pt-3'>
                  <div className='flex flex-col'>
                    <h3 className='text-xs font-bold'>Standard Room</h3>
                    <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                  </div>
                  <span>
                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                  </span>
                </div>
                <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
              </div>
              <div className='flex-1 flex gap-x-3 h-[70vh] md:h-[50vh] lg:h-[70vh]'>
                <article className='group flex flex-col gap-3 h-full cursor-pointer'>
                  <div className='flex-[55%] flex flex-col'>
                    <div className='order-2 flex justify-between items-center pt-3'>
                      <div className='flex flex-col'>
                        <h3 className='text-xs font-bold'>Standard Room</h3>
                        <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                      </div>
                      <span>
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                      </span>
                    </div>
                    <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
                  </div>
                  <div className='flex-[45%]'>
                    <div className='h-full opacity-0 group-hover:opacity-100 focus-within:opacity-100 group-active:opacity-100 transition-all duration-700 ease-in-out flex flex-col gap-2 justify-between bg-beige p-3'>
                      <p>This room offers different facilities for both business travellers and vacationers.</p>
                      <a href="#booking" className='bg-black text-center py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Book Now</a>
                    </div>
                  </div>
                </article>
                <article className='group flex flex-col-reverse gap-3 h-full cursor-pointer'>
                  <div className='flex-[55%] flex flex-col'>
                    <div className='order-2 flex justify-between items-center pt-3'>
                      <div className='flex flex-col'>
                        <h3 className='text-xs font-bold'>Standard Room</h3>
                        <p className='text-xs pt-0.5'>1 bed | 2 sleeps</p>
                      </div>
                      <span>
                        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                      </span>
                    </div>
                    <img src="/images/room1.jpg" alt="" className='order-1 h-full object-cover' />
                  </div>
                  <div className='flex-[45%]'>
                    <div className='h-full opacity-0 group-hover:opacity-100 focus-within:opacity-100 group-active:opacity-100 transition-all duration-700 ease-in-out flex flex-col gap-2 justify-between bg-beige p-3'>
                      <p>This room offers different facilities for both business travellers and vacationers.</p>
                      <a href="#booking" className='bg-black text-center py-1.5 text-white text-sm text-nowrap hover:opacity-50 active:opacity-50 transition-opacity duration-700 ease-in-out'>Book Now</a>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </section>
        </section>
      </main>
      <footer className='pt-14 text-center'>
        <p className='text-xs border-t border-t-amber-950 py-2.5'>&copy; 2025. <span className='font-bold'>Luxe Escape</span>.</p>
      </footer>
    </>
  )
}

export default App;
