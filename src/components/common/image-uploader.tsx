"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";
import { FieldLabel } from "../ui/field";
import normalizeImage from "@/lib/normalizeImage";

type ImageUploaderProps<T extends FieldValues> = {
  name: Path<T>;
  initImage?: string;
  id: string;
  label?: string;
};

const ImageUploader = <T extends FieldValues>({
  name,
  initImage,
  id,
  label,
}: ImageUploaderProps<T>) => {
  const { control } = useFormContext<T>();
  const [preview, setPreview] = useState<string | undefined>("");

  const imageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewImage = URL.createObjectURL(file);
    setPreview(previewImage);
  };
  return (
    <>
      {label && <FieldLabel>{label}</FieldLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Label htmlFor={id} className="inline">
              <div className="group border-2 border-dashed border-muted-foreground/30 p-8 rounded-xl  cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200">
                {initImage && !preview && (
                  <div className="flex h-[360px] items-center justify-center overflow-hidden">
                    <Image
                      src={initImage}
                      width={1000}
                      height={1000}
                      alt="Preview"
                      className="h-full w-full object-contain "
                    />
                  </div>
                )}
                {preview && (
                  <div className="flex h-[360px] items-center justify-center overflow-hidden">
                    <Image
                      src={preview}
                      width={1000}
                      height={1000}
                      alt="Preview"
                      className="h-full w-full object-contain "
                    />
                  </div>
                )}
                {!preview && !initImage && (
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
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    console.log(event.target.files)
                    if (!file) return;
                    field.onChange(normalizeImage(file.name));
                    imageChangeHandler(event);
                  }}
                  id={id}
                  accept="image/*"
                  multiple
                />
              </div>
              {error && <ErrorMessage text={error.message} />}
            </Label>
          </>
        )}
      />
    </>
  );
};

export default ImageUploader;
