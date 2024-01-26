import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Projects</h1>
      <p className="mt-10 text-2xl">
        <a
          href="https://halowarpoint.com"
          className="text-blue-500 no-underline hover:underline"
        >
          Halo Warpoint
        </a>
      </p>
      <p className="max-w-[800px] mb-4">
        Halo Warpoint is a site that allows players of &quot;Halo Wars 2&quot; to view their stats. I have
        spent time building this over a few years for the community to enjoy. The frontend is built with Next.
      </p>
      <p className="max-w-[800px] mb-4">
      The backend is involved with dedicated servers that constantly run scripts to get game data, database queries
        that compile and interpret data.
      </p>
      <p className="max-w-[800px] mb-4">
        The database alone is 200GB of data and involved dealing with partitioning, indexes, and optimising queries.
      </p>
      <div className="m-4">
        <Image
          src="/halowarpoint.png"
          alt="Halo Warpoint"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}
