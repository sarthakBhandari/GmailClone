import { IconButton, Checkbox } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ title, subject, time, description, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ title, subject, time, description }));
    history.push("/mail");
  };

  return (
    <div
      onClick={() => openMail()}
      className="flex items-center border-b border-gray-100 cursor-pointer hover:shadow-md text-sm"
    >
      {/* option */}
      <div className="flex items-center">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="grid grid-cols-7 w-full">
        <div className="font-bold overflow-hidden overflow-ellipsis">
          <h3 className="overflow-hidden overflow-ellipsis">{title} </h3>
        </div>
        <div className="overflow-hidden whitespace-nowrap col-span-4 flex">
          <h4 className="font-bold mr-2">{subject}</h4>
          <span className="text-gray-400 overflow-hidden overflow-ellipsis">
            {description}
          </span>
        </div>
        <p className="font-semibold text-xs col-span-2">{time}</p>
      </div>
    </div>
  );
};

export default EmailRow;
