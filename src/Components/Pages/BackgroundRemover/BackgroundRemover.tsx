import { useState } from "react";
import useRemoveBackground from "../../../hooks/useRemoveBackground";
import UploadImageArea from "../../UploadImageArea/UploadImageArea";
import Loader from "../../Loader/Loader";
import "./BackgroundRemover.scss";

const BackgroundRemover = () => {
    const { isLoading, data, error, fetchRemoveBackground } =
        useRemoveBackground();
    const [uploadedFile, setUploadedFile] = useState<File>();

    return (
        <>
            <div className="remove-bg-upload">
                <UploadImageArea
                    fetchData={fetchRemoveBackground}
                    setFile={setUploadedFile}
                />
            </div>

            {isLoading ? <Loader /> : <img src={data ? data : ""}></img>}
        </>
    );
};

export default BackgroundRemover;
