import { notFound } from "next/navigation";
import members from "@/people/members.json";

// export default function MemberDetailPage({ params }: { params: { membersId: string } }) {
//   const entry = members.find((entry: { name: string }) => entry.name === params.membersId);
//   if (!entry) {
//     notFound();
//   }
//   return (
//     <div className='object-contain'>
//       <div className='relative py-10  bg-gray-900'>
//         <h2 className='text-5xl font-semibold tracking-tight text-white sm:text-7xl text-center p-20'>{entry?.id}</h2>
//       </div>

//       <div className='flex justify-center'>
//         <ul
//           role='list'
//           className='px-32 mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
//         ></ul>
//       </div>
//     </div>
//   );
// }

("use client");

export default async function EntryDetailPage({ params }: { params: { membersId: string } }) {
  const person = members.find((person: { id: string }) => person.id === params.membersId); // Look for entry with id
  if (!person) {
    notFound();
  }
  return (
    <div className='object-contain'>
      <div className='relative py-10  bg-gray-900'>
        <h2 className='text-5xl font-semibold tracking-tight text-white sm:text-7xl text-center p-20'>{person?.id}</h2>
      </div>

      <div className='flex justify-center'>
        <ul
          role='list'
          className='px-32 mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
        ></ul>
      </div>
    </div>
  );
}
