// "use client";

// export default function Location() {
//   return (
//     <section className="relative w-full min-w-0">
//       {/* Heading */}
//       <div className="mb-6 w-full">
//         <p className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
//           Find Us
//         </p>

//         <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
//           Visit our location
//         </h2>

//         <p className="mt-2 text-sm sm:text-base text-zinc-500">
//           SEABRAND AI, Kerala, India
//         </p>
//       </div>

//       {/* Map */}
//       <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12333.557310203956!2d75.99470808966403!3d10.996800505778111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5d4bb44b701%3A0xd50affd3c84e49e9!2sPROCODER%20-%20Technology%20%26%20Admedia!5e0!3m2!1sen!2sin!4v1787120515948!5m2!1sen!2sin"
//           title="SEABRAND AI Location"
//           loading="lazy"
//           allowFullScreen
//           referrerPolicy="strict-origin-when-cross-origin"
//           style={{
//             width: "100%",
//             height: "450px",
//             border: 0,
//             display: "block",
//           }}
//         />
//       </div>
//     </section>
//   );
// }
"use client";

export default function Location() {
  return (
    <section className="relative w-full min-w-0">
      {/* Map */}
      <div className="w-full min-w-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12333.557310203956!2d75.99470808966403!3d10.996800505778111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5d4bb44b701%3A0xd50affd3c84e49e9!2sPROCODER%20-%20Technology%20%26%20Admedia!5e0!3m2!1sen!2sin!4v1787120515948!5m2!1sen!2sin"
          title="SEABRAND AI Location"
          className="block h-[400px] w-full border-0 sm:h-[550px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}