import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Digitalisasi Layanan Desa",
    description:
      "Kami membantu desa bertransformasi ke era digital melalui pembuatan website desa dan sistem layanan administrasi yang efisien dan terintegrasi.",
    image: image4,
  },
  {
    title: "Pemasangan Jaringan Internet",
    description:
      "Kami menyediakan layanan pemasangan dan konfigurasi jaringan internet untuk kebutuhan desa, sekolah, UMKM, dan rumah tangga.",
    image: image3, // gambar orang bekerja dengan koneksi
  },
  {
    title: "Layanan Berbasis AI",
    description:
      "Kami sedang mengembangkan sistem cerdas berbasis AI untuk membantu proses pembuatan surat secara otomatis dan mendukung pelayanan desa yang lebih cepat dan akurat.",
    image: image, // growth / teknologi
  },
];

const featureList: string[] = [
  "Digitalisasi Layanan Desa",
  "Tim Profesional & Lokal",
  "User Interface Ramah Pengguna",
  "Pemasangan Jaringan Internet",
  "Layanan Pemasangan CCTV",
  "Jasa Servis Perangkat",
  "Desain yang Responsif",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
