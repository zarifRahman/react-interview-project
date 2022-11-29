import React from "react";
import { useQuery} from "@apollo/client";
import TabItem from "../components/TabItem/TabItem";
import Tab from "../components/Tab/Tab";
import PostDetails from "../components/PostDetails/PostDetails";
import { GETS_COMMENT_AND_POST, GETS_USER, POSTS } from "../services";
import UserDetails from "../components/UserDetails/UserDetails";
import CommentDetails from "../components/CommentDetails/CommentDetails";

interface IProps {
}

const Crud: React.FC<IProps> = () => {
  const { loading, error, data: postData } = useQuery(POSTS);
  const { data: userData } = useQuery(GETS_USER);
  const { data: commentData } = useQuery(GETS_COMMENT_AND_POST);

  console.log(commentData, "commentData");

  const posts = postData?.posts.map((post: any, index: number) => {
    return {
      label: <TabItem label={post?.data?.title} key={index} />,
      key: post?.id,
      children: <PostDetails data={post} />,
    };
  });

  const users = userData?.users.map((user: any, index: number)=>{
    return {
      label: <TabItem label={user?.data?.first_name} />,
      key: user?.id,
      children: <UserDetails data={user} />,
    };
  })

  const comments = commentData?.comments.map((comment: any, index: number) => {
    return {
      label: <TabItem label={comment?.data?.body} />,
      key: comment?.id,
      children: <CommentDetails data={comment} />,
    };
  });

  const items = [
    {
      label: "Users",
      key: "1",
      children: <Tab width={265} items={users} />,
    },
    {
      label: "Posts",
      key: "2",
      children: <Tab width={265} items={posts} />,
    },
    {
      label: "Comments",
      key: "3",
      children: <Tab width={265} items={comments} />,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An Error has occured</p>;
  return <div>{<Tab type='card' items={items} defaultActiveKey={1} />}</div>;
};

export default Crud;
