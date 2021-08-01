import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar pr-5 text-sm w-60">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className=" my-3 ml-3 p-4 text-gray-600 capitalize rounded-full shadow-md hover:shadow-lg"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        number={53}
        title="Inbox"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} number={53} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} number={53} title="Snoozed" />
      <SidebarOption Icon={LabelImportantIcon} number={53} title="Important" />
      <SidebarOption Icon={NearMeIcon} number={53} title="Sent" />
      <SidebarOption Icon={NoteIcon} number={53} title="Drafts" />
      <SidebarOption Icon={ExpandMoreIcon} number={53} title="More" />

      <div className="flex justify-center">
        <div>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
