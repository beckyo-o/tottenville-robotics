const links = [
  { name: "Members", href: "/members" },
  { name: "more stuf", href: "#" },
  { name: "extra stuf", href: "#" },
  { name: "bleep", href: "#" },
];

const more = [
  { name: "place", value: "1" },
  { name: "holder", value: "2" },
  { name: "plac", value: "3" },
  { name: "holdr", value: "4" },
];

export default function Home() {
  return (
    <div className='object-contain'>
      <div className='relative isolate overflow-hidden py-24 sm:py-32'>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='absolute inset-0 -z-10 size-full object-cover object-right md:object-center blur-sm brightness-50'
        />

        <div
          aria-hidden='true'
          className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
        >
          <div className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20' />
        </div>
        <div
          aria-hidden='true'
          className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
        >
          <div className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20' />
        </div>

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-5xl font-semibold tracking-tight text-gray-100/80 sm:text-7xl'>Placeholder!!!!!!</h2>
            <p className='mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
          </div>
          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                >
                  {link.name} <span aria-hidden='true'>&rarr;</span>
                </a>
              ))}
            </div>

            <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
              {more.map((more) => (
                <div
                  key={more.name}
                  className='flex flex-col-reverse gap-1'
                >
                  <dt className='text-base/7 text-gray-300'>{more.name}</dt>
                  <dd className='text-4xl font-semibold tracking-tight text-white'>{more.value}</dd>
                </div>
              ))}
            </dl>
            {/* CHECK IF NEEDED */}
          </div>
        </div>
      </div>
      <div className='p-32 text-center text-5xl font-semibold tracking-tigh text-slate-800/80'>
        <p> Title Placeholder </p>
      </div>
      <div className=''></div>
    </div>
  );
}
