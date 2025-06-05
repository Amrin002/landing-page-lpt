import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
   icon: <MedalIcon />,
title: "Aksesibilitas",
description:
  "Kami memastikan layanan teknologi yang kami kembangkan mudah diakses oleh semua kalangan, termasuk masyarakat desa yang belum familiar dengan teknologi, dengan antarmuka yang sederhana dan ramah pengguna.",

  },
  {
    icon: <MapIcon />,
title: "Komunitas",
description:
  "LPT Management lahir dari komunitas belajar lokal yang peduli terhadap kemajuan teknologi desa. Kami tumbuh bersama masyarakat dan membangun solusi yang sesuai dengan kebutuhan nyata di lapangan.",

  },
 {
  icon: <PlaneIcon />,
  title: "Skalabilitas",
  description:
    "Solusi yang kami kembangkan dirancang untuk tumbuh bersama desa. Dari sistem sederhana hingga layanan terintegrasi yang kompleks, teknologi kami dapat disesuaikan dengan perkembangan dan kebutuhan setiap desa.",
},

  {
  icon: <GiftIcon />,
  title: "Gamifikasi",
  description:
    "Kami menerapkan elemen gamifikasi dalam beberapa layanan untuk meningkatkan partisipasi masyarakat, menjadikan interaksi digital lebih menarik, edukatif, dan menyenangkan khususnya bagi generasi muda.",
}

];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Bagaimana{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Cara Kerjanya{" "}
        </span>
        Langkah Demi Langkah
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        LPT Management hadir dengan pendekatan yang terstruktur dan menyeluruh untuk membantu desa dalam proses digitalisasi, mulai dari pengembangan sistem, pemasangan infrastruktur, hingga dukungan berkelanjutan.

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
