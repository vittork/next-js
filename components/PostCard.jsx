import Link from "next/link";
export default function PostCard({
  title,
  image,
  descript,
  date,
  authors,
  href,
}) {
  return (
    <div className="flex flex-wrap">
      <div className="mb4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-3/12">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-no-repeat shadow-lg">
          <img src={image} alt="" />
          <Link href={href}>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-gray-100"></div>
          </Link>
        </div>
      </div>
      <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-3 text-gray-800">
          <small>
            Published <u>{date}</u> by {authors}
            <Link href="/blog/latihan-route-next"></Link>
          </small>
        </p>
        <p className="class-text-gray-800 text-justify">{descript}</p>
      </div>
    </div>
  );
}
