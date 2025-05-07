import { useEffect, useState } from "react";
import apiBase from "../services/apiBase";

export interface PaletteResponse {
    palettes: string[];
}

const useExtractPalette = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<PaletteResponse>();

    const fetchExtractPalette = async (file?: File) => {
        setLoading(true);
        const formData = new FormData();
        if (file) formData.append("file", file);
        try {
            const response = await apiBase.post(
                "/api/ImageProcessing/extract-palette",
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
            setLoading(false);
        }
    };

    return { data, isLoading, error, fetchExtractPalette };
};

export default useExtractPalette;
