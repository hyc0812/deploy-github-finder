import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

export default function Home(props) {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
}
