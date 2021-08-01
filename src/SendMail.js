import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="absolute right-12 bottom-0 bg-gray-700 h-1/2 w-2/5 max-w-screen-sm flex flex-col rounded-t-lg border border-gray-100 shadow-sm">
      {/* send mail header */}
      <div className="flex px-3 py-2 justify-between items-center text-gray-100 text-sm">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="text-gray-400 cursor-pointer"
        />
      </div>

      {/* form */}
      <form className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          name="to"
          placeholder="To"
          className="input"
          type="email"
        />
        {errors.to && (
          <p className="bg-white text-red-600 text-right p-1 text-sm">
            Recipient field required
          </p>
        )}
        <input
          {...register("subject", { required: true })}
          name="subject"
          placeholder="Subject"
          className="input"
          type="text"
        />
        <input
          {...register("message", { required: true })}
          name="message"
          placeholder="Message"
          className="input flex-1"
          type="text"
        />
        {errors.message && (
          <p className="bg-white text-red-600 text-right p-1 text-sm">
            Message field required
          </p>
        )}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="bg-blue-500 capitalize m-4 w-1/5"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SendMail;
