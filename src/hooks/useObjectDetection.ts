import { useState } from "react";
import apiBase from "../services/apiBase";

interface Prediction {
    class: string;
    probability: number;
}

export interface ObjectDetectionResponse {
    predictions: Prediction[];
}

const useObjectDetection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<ObjectDetectionResponse>();

    const fetchObjectDetection = async (file?: File) => {
        setIsLoading(true);
        const formData = new FormData();
        if (file) formData.append("file", file);

        try {
            const response = await apiBase.post(
                "/api/ImageProcessing/object-detection",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setData(response.data);
            setError("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, fetchObjectDetection };
};

export default useObjectDetection;
