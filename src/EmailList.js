import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { useState, useEffect } from "react";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    //   main email list
    <div className="flex-1 overflow-scroll">
      {/* email list settings */}
      <div className="flex justify-between sticky border-b border-gray-100 pr-3">
        {/* left */}
        <div>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>{" "}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        {/* right */}
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>{" "}
          <IconButton>
            <ChevronRightIcon />
          </IconButton>{" "}
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      {/* email list section */}
      <div className="flex sticky t-0 border-b border-gray-100 max-w-full md:max-w-screen-md">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      {/* email rows */}
      <div>
        {emails.map((emailObj) => {
          const { to, message, subject, timestamp } = emailObj.data;
          return (
            <EmailRow
              key={emailObj.id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer"
          description="this is a test t is at is at is at is at is at is at is at is a testthis is a testthis is a testthis is a tesstthis is a testthis is a testthis is a tesstthis is a testthis is a testthis is a test"
          time="10pm"
          his
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer"
          description="this is a test"
          time="10pm"
          his
        />
      </div>
    </div>
  );
};

export default EmailList;
