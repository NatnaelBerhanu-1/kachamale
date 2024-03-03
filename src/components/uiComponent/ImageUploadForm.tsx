"use client";
import { useRef, useCallback, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useDropzone } from "react-dropzone";
import { DetailCarousel } from "./DetailCarousel";
import { toast, ToastContainer } from "react-toastify";

function ImageUploadForm() {
  const hiddenFileInput = useRef(null);
  const [preview, setPreview] = useState<any>("");
  const handleClick = (e: React.FormEvent) => {
    //@ts-ignore
    hiddenFileInput.current.click();
  };

  const onDrop: any = useCallback((acceptedFiles: FileList) => {
    const file = new FileReader();
    file.onload = () => {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  if (fileRejections.length > 0) {
    toast.error("Invalid file format");
  }
  return (
    <>
      <DetailCarousel
        images={[
          "/assets/carChair.png",
          "/assets/carWheel.png",
          "/assets/carChair.png",
          "/assets/carWheel.png",
        ]}
      />
      <Separator />
      <div className="px-5 flex flex-col gap-2">
        <Separator />

        <div className="min-h-24 relative h-fit w-full border-2 border-dashed cursor-pointer">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="font-medium absolute inset-0 w-full h-full flex items-center justify-center">
                Drop your file here
              </p>
            ) : (
              <div className="font-medium absolute inset-0 w-full h-full flex flex-col items-center justify-center left-0 right-0">
                <Image
                  src={"/assets/uploadIcon.png"}
                  alt="upload icon"
                  width={500}
                  height={1000}
                  className="w-8"
                />
                Drag your file to here
              </div>
            )}
          </div>
        </div>

        <input type="file" className="hidden" ref={hiddenFileInput} />
        <Button
          className="w-full max-w-[120px] py-6 bg-main_blue hover:bg-hover_blue mx-auto"
          onClick={handleClick}
        >
          Browse
        </Button>

        {preview && (
          <div>
            <p>only for testing purpose</p>
            <Image src={preview} alt="test" width={500} height={500} />
          </div>
        )}
      </div>
    </>
  );
}

export default ImageUploadForm;
