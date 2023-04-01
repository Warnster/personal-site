import { IUser } from "./types";
import { UserDisplay } from ".";
import { render } from "@testing-library/react";
import { Post } from "../post";
import { createPostMock, createUserMock } from "../../../jest-helpers/user-helper";

jest.mock("../post");
const postComponentMock = jest.mocked(Post);
const mockedPostDataTestId = "mocked-post";
postComponentMock.mockImplementation(() => (
  <div data-testid={mockedPostDataTestId}>Mocked Post</div>
));


type UserDisplayProps = React.ComponentProps<typeof UserDisplay>;

describe("UserDisplay", () => {
  

  const setup = (props?: Partial<UserDisplayProps>) => {
    const userDisplayProps: UserDisplayProps = {
      user: createUserMock(),
      ...props,
    }
    return render(<UserDisplay {...userDisplayProps} />)
  }

  it("renders the user's full name", () => {
    const firstName = "John";
    const lastName = "Doe";
    const user = createUserMock({ firstName, lastName });
    const { getByRole } = setup({ user })
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("eoD nhoJ");
  });

  it("renders the user's age", () => {
    const dateOfBirth = new Date("1990-01-01");
    const user = createUserMock({ dateOfBirth });
    const { getByText } = setup({user})
    const paragraph = getByText("33");
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the user's posts", () => {
    const posts = createPostMock();
    const user = createUserMock({posts: [posts]});
    const { getByTestId } = setup({user});
    const post = getByTestId(mockedPostDataTestId);
    expect(post).toBeInTheDocument();
  });
});
