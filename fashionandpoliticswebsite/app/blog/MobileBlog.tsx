import BlogArticlePreview from "@/components/BlogArticlePreview";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

type Props = {
  title: string;
  author: string;
  date: string;
};

export default function MobileBlog({
  title = "TITLE OF ARTICLE",
  author = "AUTHOR FIRST LAST",
  date = "00/00/00",
}: Props) {
  return (
    <>
      <h1
        className={`${anton.className} text-white text-8xl mt-[15vh] mb-[5vh] mr-15 flex justify-end`}
      >
        BLOG
      </h1>
      <div className="flex justify-center">
        <Image
          src="/images/blog-page/mobile-blank-folder.jpg"
          alt="blank page"
          width={400}
          height={400}
          className="relative"
        />
        <div className="absolute z-10 w-[60%] mr-8 h-[55%] mt-10 bg-[#ffebf7] overflow-y-auto">
          {/* make this dynamic to receive a list of preview */}
          <div className="ml-7 mr-8 mt-5">
            {" "}
            {/* <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} /> */}
            <div className="text-3xl w-full h-full overflow-y-auto p-5">
              COMING SOON...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
