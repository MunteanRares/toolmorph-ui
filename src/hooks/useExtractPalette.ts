import { useEffect, useState } from "react";
import apiBase from "../services/apiBase";

export interface PaletteResponse {
    palettes: string[];
}

const useExtractPalette = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<PaletteResponse>();

    const fetchExtractPalette = (file: File) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        apiBase
            .post("/api/ImageProcessing/extract-palette", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((response) => {
                setData(response.data);
                console.log(data);
                setLoading(false);
                setError("");
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, isLoading, error, fetchExtractPalette };
};

export default useExtractPalette;
