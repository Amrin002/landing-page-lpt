import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Tentang{" "}
                </span>
                Kami
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
               
      LPT Management (Local Project Technology Management) adalah sebuah startup yang dibentuk oleh komunitas belajar LCT (Local Class Technology) yang berfokus pada digitalisasi desa. Kami memiliki misi untuk membantu desa dalam membangun sistem layanan publik yang modern, efisien, dan transparan melalui pengembangan website desa dan aplikasi layanan masyarakat.
      <br /><br />
      Selain itu, kami juga bergerak di bidang pemasangan jaringan internet, instalasi CCTV, serta menyediakan layanan tukang servis untuk kebutuhan teknologi harian masyarakat. Kami percaya bahwa teknologi harus dapat diakses dan dimanfaatkan oleh semua kalangan, termasuk wilayah pedesaan.

              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
