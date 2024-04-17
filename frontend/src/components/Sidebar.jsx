import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      {/* <LogoutButton />  */}
    </div>
  );
};

export default sidebar;
