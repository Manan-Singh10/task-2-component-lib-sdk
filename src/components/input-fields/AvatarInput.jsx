import clsx from "clsx";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

function AvatarInput({ setImageURL, className = "" }) {
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState("");

  const baseStyles =
    "bg-white/5 items-center justify-center py-4 px-20 flex flex-col gap-4 sm:px-30 sm:py-6 rounded-2xl";

  function handleButtonClick(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  }

  return (
    <div className={clsx(baseStyles, className)}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={handleButtonClick}
        className="bg-white/10 px-3 py-4 rounded-2xl cursor-pointer"
      >
        <img src="/upload-logo.png" alt="upload-logo" className="h-4" />
      </button>

      {fileName && (
        <p className="text-sm sm:text-lg text-[var(--primary-gray)] mt-2">
          Selected file: <span className="font-medium">{fileName}</span>
        </p>
      )}

      <p className="sm:text-lg text-[var(--secondary-gray)]">
        Click to upload a avatar
      </p>
    </div>
  );
}

AvatarInput.propTypes = {
  setImageURL: PropTypes.func.isRequired,
};

export default AvatarInput;
