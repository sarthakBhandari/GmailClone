import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { selectOpenMail } from "./features/mailSlice";
import { useSelector } from "react-redux";

const Mail = () => {
  const history = useHistory();
  const selectMail = useSelector(selectOpenMail);

  return (
    <div className="bg-gray-100 w-full flex flex-col">
      {/* tools at the top */}
      <div className="flex bg-white justify-between">
        {/* tools left */}
        <div className="flex items-center">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        {/* tools right */}
        <div className="flex items-center">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      {/* main body of the email */}
      <div className="flex flex-col bg-white m-7 p-5 h-full shadow-md">
        {/* mail body header */}
        <div className="flex border-b border-gray-100 items-center relative">
          <h2 className="font-semibold mr-5 text-xl">{selectMail?.subject}</h2>
          <LabelImportantIcon className="text-yellow-500 mr-5" />
          <p>{selectMail?.title}</p>
          <p className="absolute top-2 right-0  text-gray-500 text-xs">
            {selectMail?.time}
          </p>
        </div>
        {/* mail message */}
        <div className="break-words mr-5 p-3">{selectMail?.description}</div>
      </div>
    </div>
  );
};

export default Mail;
