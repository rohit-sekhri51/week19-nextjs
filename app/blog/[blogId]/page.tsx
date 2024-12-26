import axios from "axios";

type Props = {
  params: Readonly<{
    blogId: string;
  }>;
  searchParams: Readonly<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function BlogHome({
  params,
  searchParams,
}: Props) {
    
  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${params.blogId}`
    );

    return (
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            <div>Title: {response.data.title}</div>
            Body: {response.data.body}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div className="border p-8 rounded text-red-500">
            Error loading blog post
          </div>
        </div>
      </div>
    );
  }
}