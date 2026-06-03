import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="lievinm635@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+250 7865 20731" Image={FiPhone} />
      <SingleInfo text="KIGALI, RWANDA" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
