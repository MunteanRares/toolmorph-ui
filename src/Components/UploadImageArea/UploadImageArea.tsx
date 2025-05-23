import { motion } from "framer-motion"; // Make sure you import from 'framer-motion'
import { LuImageUp } from "react-icons/lu";
import { durationAmount } from "../../styling/constants";
import { FileRejection, useDropzone } from "react-dropzone";
import "./UploadImageArea.scss";
import { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { basicOpacityVariant } from "../../styling/animationVariants";

interface Props {
    fetchData: (file: File) => void;
    setFile: (file: File) => void;
}

const UploadImageArea = ({ setFile, fetchData }: Props) => {
    const [uploadError, setUploadError] = useState("");
    const [acceptedImage, setAcceptedImage] = useState<File>();
    const [imageLoading, setImageLoading] = useState(true);

    const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (fileRejections.length > 0) {
            setUploadError("Invalid file type!");
        } else if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setImageLoading(true);
            setAcceptedImage(file);
            fetchData(file);
            setFile(file);
        }
    };

    const { getRootProps, getInputProps, open } = useDropzone({
        accept: { "image/*": [] },
        multiple: true,
        noClick: true,
        noKeyboard: true,
        onDrop,
    });

    return (
        <div {...getRootProps()} className="upload-area">
            {acceptedImage ? (
                <motion.img
                    key={acceptedImage.name}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: imageLoading ? 0 : 1,
                    }}
                    onClick={open}
                    transition={{
                        delay: 0.4,
                        duration: durationAmount.transformQuick,
                        type: "spring",
                    }}
                    onLoad={() => setImageLoading(false)}
                    className="dropped-image"
                    src={URL.createObjectURL(acceptedImage)}
                ></motion.img>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <LuImageUp className="icon-img" />
                    </motion.div>

                    <motion.p
                        variants={basicOpacityVariant}
                        initial="initial"
                        animate="animate"
                    >
                        Drag and Drop Your Image Here
                    </motion.p>
                    <motion.p
                        variants={basicOpacityVariant}
                        initial="initial"
                        animate="animate"
                        className="select-image-text"
                    >
                        or <span onClick={open}>select an image</span> from your
                        computer
                    </motion.p>
                </>
            )}

            <input {...getInputProps()} multiple={false} />
        </div>
    );
};

export default UploadImageArea;
