import { useEffect, useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Button from "../../UI/button/Button";
import "./form.scss";
import camera from "../../Images/camera_icon.jpg";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Form = ({ data }) => {
  const [file, setFile] = useState();
  const [formData, setFormData] = useState();
  const [fileUploadPercentage, setFileUploadPercentage] = useState();

  const onChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    const uploadFile = () => {
      // For creating a unique name for the png file so the two files never have same name
      const name = new Date().getTime() + file.name;
      console.log(name);
      const imagesRef = ref(storage, "images");
      const fileRef = ref(imagesRef, name);
      const uploadTask = uploadBytesResumable(fileRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setFileUploadPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prev) => {
              return {
                ...prev,
                img: downloadURL,
              };
            });
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const onInputChangeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [id]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    await setDoc(doc(db, "users", res.user.uid), {
      ...formData,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="heading">
        <h2>Add New User</h2>
      </div>
      <div className="container">
        <div className="input-field">
          <div className="upload-img">
            <div
              className="img"
              style={{
                backgroundImage: `url("${
                  file ? URL.createObjectURL(file) : camera
                }")`,
              }}
            ></div>
            <div className="input-file">
              <label htmlFor="file">
                Image: <DriveFolderUploadIcon />
              </label>
              <input onChange={onChangeHandler} type="file" id="file" />
            </div>
          </div>
          <div className="input-container">
            {data.map((d, index) => {
              return (
                <div className="field" key={index + d.id}>
                  <label htmlFor={d.id}>{d.label}</label>
                  <input
                    type={d.type}
                    id={d.id}
                    placeholder={d.placeholder}
                    onChange={onInputChangeHandler}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Button
          disable={fileUploadPercentage != null && fileUploadPercentage < 100}
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
