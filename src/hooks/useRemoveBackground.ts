import { useState } from "react";
import apiBase from "../services/apiBase";

const useRemoveBackground = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<string | null>(null);

    const fetchRemoveBackground = async (file?: File) => {
        setLoading(true);
        const formData = new FormData();
        if (file) formData.append("file", file);

        try {
            const response = await apiBase.post(
                "/api/ImageProcessing/background-remover",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], { type: "image/png" });
            const url = URL.createObjectURL(blob);
            setData(url);
        } catch (err: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, error, data, fetchRemoveBackground };
};

export default useRemoveBackground;
