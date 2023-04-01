import { Post } from "../post";
import { containerCss } from "./style";
import { IUser } from "./types";
import { fullNameReversed, yearsSince } from "./utils";

interface UserDisplayProps {
  user: IUser;
}

export const UserDisplay = ({
  user: { firstName, lastName, dateOfBirth, posts },
}: UserDisplayProps) => {
  const fullName = fullNameReversed(firstName, lastName);
  const displayAge = yearsSince(dateOfBirth);
  return (
    <div
      style={containerCss}
    >
      <h1>{fullName}</h1>
      <p>{displayAge}</p>
      {posts.map((post, index) => (
        <Post key={post.content + index} post={post} />
      ))}
    </div>
  );
};
