import { motion } from "motion/react";
import { LuImageUp } from "react-icons/lu";
import { basicOpacityAnimation } from "../../styling/constants";
import Dropzone from "react-dropzone";
import "./UploadImageArea.scss";

const UploadImageArea = () => {
    return (
        <Dropzone
            onDrop={(acceptedFiles, fileRejections) => {
                if (fileRejections.length > 0) {
                    console.log(fileRejections[0]["file"]);
                } else {
                    console.log(acceptedFiles);
                }
            }}
            noClick
            noKeyboard
            multiple={false}
        >
            {({ getRootProps, getInputProps, open }) => (
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
                    <input {...getInputProps()} />
                </div>
            )}
        </Dropzone>
    );
};

export default UploadImageArea;
