'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Loading from "@/app/loading";
import styles from "./gallery.module.scss";

interface GalleryImage {
  id: string;
  download_url: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch("https://picsum.photos/v2/list?limit=4")
      .then((res) => res.json())
      .then((data: GalleryImage[]) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  };

  if (isLoading) return <Loading />;
  if (!images.length) return <p>No images found.</p>;

  return (
    <section
      id="gallery"
      className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
    >
      <SectionTitle
        title="Our Gallery"
        paragraph="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
        center
      />
      <div className={styles.container}>
        <div className="m-2 grid grid-cols-12 gap-0">
          {images.map((image) => (
            <GalleryImage key={image.id} imageUrl={image.download_url} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GalleryImageProps {
  imageUrl: string;
}

const GalleryImage = ({ imageUrl }: GalleryImageProps) => (
  <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-gray-100 relative">
    <Image
      src={imageUrl}
      fill
      className="object-cover"
      alt={`alt image text`}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
);

export default Gallery;

