import { useState } from "react";
import useObjectDetection from "../../../hooks/useObjectDetection";
import UploadImageArea from "../../UploadImageArea/UploadImageArea";
import Loader from "../../Loader/Loader";

const ObjectDetection = () => {
    const { isLoading, data, error, fetchObjectDetection } =
        useObjectDetection();
    const [uploadedFile, setUploadedFile] = useState<File>();

    return (
        <>
            <div className="remove-bg-upload">
                <UploadImageArea
                    fetchData={fetchObjectDetection}
                    setFile={setUploadedFile}
                />
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                data && (
                    <div>
                        {data.predictions.map((prediction, index) => (
                            <div key={index}>
                                <strong>{prediction.class}</strong>:{" "}
                                {prediction.probability.toFixed(2)}%
                            </div>
                        ))}
                    </div>
                )
            )}
        </>
    );
};

export default ObjectDetection;
