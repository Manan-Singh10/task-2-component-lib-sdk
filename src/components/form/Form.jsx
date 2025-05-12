import { useState } from "react";
import Button from "../button/Button";
import AvatarInput from "../input-fields/AvatarInput";
import Input from "../input-fields/Input";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { getFormattedDate } from "../../utils/helper";
import clsx from "clsx";

function Form({ className = "" }) {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      fullName,
      emailAddress,
      repoLink,
      imageURL:
        imageURL ||
        `https://ui-avatars.com/api/?name=${fullName}&background=random`,
      date: getFormattedDate(),
      ticketID: crypto.randomUUID().replace(/-/g, "").slice(0, 10),
    };
    setUser(newUser);
    navigate("/ticket");
  }

  const baseStyles = "flex flex-col gap-4";

  return (
    <form className={clsx(baseStyles, className)} onSubmit={handleSubmit}>
      <AvatarInput setImageURL={setImageURL} />
      <Input title="Full Name *" value={fullName} setValue={setFullName} />
      <Input
        title="Email address *"
        placeholder="example@email.com"
        value={emailAddress}
        setValue={setEmailAddress}
      />
      <Input
        title="Github repository *"
        placeholder="repository link"
        value={repoLink}
        setValue={setRepoLink}
      />
      <Button>Generate a Ticket</Button>
    </form>
  );
}

export default Form;
