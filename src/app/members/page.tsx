import members from "@/people/members.json";
export default function MembersPage() {
  return (
    <div className='object-contain'>
      <div className='relative py-10  bg-gray-900'>
        <h2 className='text-5xl font-semibold tracking-tight text-white sm:text-7xl text-center p-20'>Placeholder!!!!!!</h2>
      </div>

      <div className='flex justify-center'>
        <ul
          role='list'
          className='px-32 mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
        >
          {members.map((members) => (
            <li
              key={members.name}
              className='group rounded-lg hover:rounded-2xl bg-gray-100 hover:bg-gray-200/60 shadow-md hover:shadow-xl duration-200 m-2'
            >
              <img
                alt=''
                src={members.image ? members.image : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"}
                className='aspect-14/13 object-cover p-10 rounded-full'
              />
              <div className='pb-8 pl-8'>
                <h3 className='text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:translate-x-2 motion-reduce:transform-none duration-200'>{members.name}</h3>
                <p className='text-base/7 text-gray-500 group-hover:translate-x-1 motion-reduce:transform-none duration-200'>{members.position}</p>
                <p className='text-sm/6 text-gray-400/80'>{members?.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
