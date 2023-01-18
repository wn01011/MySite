import React, { useState } from "react";
import { uploadFile } from "./fileAPI";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setTitleImgThunk } from "../../modules/tools.js";

const FileUpload = () => {
  const dispatch = useDispatch();
  const [tempImgFile, setTempImgFile] = useState([]);

  const setImage = (imgName) => {
    dispatch(setTitleImgThunk(imgName));
  };

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);
    const curFile = await uploadFile(formData);
    console.log(curFile, e.target.file.files[0].name);
    setImage(e.target.file.files[0].name);
  };

  const tempImgArr = (e) => {
    const imageLists = e.target.files[0];
    const currentImageUrl = URL.createObjectURL(imageLists);
    setTempImgFile(currentImageUrl);
  };

  return (
    <>
      <TempImgBox>
        <img src={tempImgFile} alt="" />
      </TempImgBox>
      <form encType="multiart/form-data" onSubmit={upload}>
        <input type="file" name="file" onChange={(e) => tempImgArr(e)} />
        <button type={"submit"}>업로드</button>
      </form>
    </>
  );
};

export default FileUpload;

const TempImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 30%;
  }
`;
