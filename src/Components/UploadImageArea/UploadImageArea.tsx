import { motion } from "framer-motion"; // Make sure you import from 'framer-motion'
import { LuImageUp } from "react-icons/lu";
import { basicOpacityAnimation } from "../../styling/constants";
import { FileRejection, useDropzone } from "react-dropzone";
import "./UploadImageArea.scss";
import { useEffect, useState } from "react";

const UploadImageArea = () => {
    const [uploadError, setUploadError] = useState("");

    const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (fileRejections.length > 0) {
            setUploadError("Invalid file type!");
        } else if (acceptedFiles.length > 0) {
            console.log("Accepted file: ", acceptedFiles[0]);
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
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <LuImageUp className="icon-img" />
            </motion.div>

            <motion.p
                variants={basicOpacityAnimation}
                initial="initial"
                animate="animate"
            >
                Drag and Drop Your Image Here
            </motion.p>
            <motion.p
                variants={basicOpacityAnimation}
                initial="initial"
                animate="animate"
                className="select-image-text"
            >
                or <span onClick={open}>select an image</span> from your
                computer
            </motion.p>
            <input {...getInputProps()} multiple={false} />
        </div>
    );
};

export default UploadImageArea;
