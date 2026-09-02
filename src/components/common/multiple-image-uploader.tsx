"use client";
import React, { useState } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";
import { FieldLabel } from "../ui/field";
import { Label } from "../ui/label";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import normalizeImage from "@/lib/normalizeImage";

type MultiplaImageUploaderProps<T extends FieldValues> = {
  name: Path<T>;
  initImages?: string[];
  id: string;
  label?: string;
};

const MultiplaImageUploader = <T extends FieldValues>({
  name,
  initImages,
  id,
  label,
}: MultiplaImageUploaderProps<T>) => {
  console.log(initImages);
  const { control } = useFormContext<T>();
  const [images, setImages] = useState<string[]>(initImages ?? []);
  const [previewImages, setPreviewImages] = useState<string[]>(
    initImages ?? [],
  );

  const imagesChangeHandler = (files: File[]) => {
    const previewImages = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewImages((prevImages) => [...prevImages, ...previewImages]);
  };

  const removeImage = (
    index: number,
    field: ControllerRenderProps<T, Path<T>>,
  ) => {
    const url = previewImages[index];

    if (url) {
      URL.revokeObjectURL(url);
    }

    const updatedPreviewImages = previewImages.filter((_, i) => i !== index);

    const updatedImages = images.filter((_, i) => i !== index);

    setPreviewImages(updatedPreviewImages);
    setImages(updatedImages);
    field.onChange(updatedImages);
  };

  return (
    <>
      {label && <FieldLabel className="mb-2">{label}</FieldLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            <div className="grid grid-cols-4 gap-5 items-center">
              <Label htmlFor={id} className="col-span-full !w-full">
                <div className="w-full group border-2 border-dashed border-muted-foreground/30 p-10 rounded-xl  cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200">
                  <div className="flex flex-col justify-center items-center">
                    <div className="p-3 bg-muted/50 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                      <UploadCloud className="size-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <span className="font-semibold text-muted-foreground mt-3 group-hover:text-primary">
                      Browse file to upload
                    </span>
                    <span className="text-xs text-muted-foreground/70 mt-1">
                      PNG, JPG or WebP (Max 5MB)
                    </span>
                  </div>
                </div>
              </Label>
              {previewImages?.map((image, index) => (
                <div key={image + "" + index}>
                  <div
                    onClick={() => {
                      removeImage(index, field);
                    }}
                    className="cursor-pointer"
                  >
                    <X className="text-destructive" />
                  </div>
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt="image"
                    className="object-cover aspect-video rounded-xl"
                  />
                </div>
              ))}
            </div>

            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={(event) => {
                const files = event.target.files;

                if (!files) return;

                const filesArray = Array.from(files || []);
                const imagesNames = filesArray.map((file) => {
                  return normalizeImage(file.name);
                });
                const updatedImages = [...images, ...imagesNames];
                setImages(updatedImages);
                field.onChange(updatedImages);
                imagesChangeHandler(filesArray);
              }}
              id={id}
            />
          </div>
        )}
      />
    </>
  );
};

export default MultiplaImageUploader;
