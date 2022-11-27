import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  // console.log(params);
  const id = params.id || 1;
  return (
    <div className="flex flex-col justify-between h-full">
      <h2>This is Post Page!</h2>
      <h2>Post Detail - {id}</h2>
      <div>params {JSON.stringify(params)}</div>
    </div>
  );
};

export default PostPage;
