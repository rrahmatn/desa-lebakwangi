import React from "react";
import Navbar from "../../components/navbar/navbar";
import imgDashboard from "../../harta/img/dashboard.png";
import logo from "./../../harta/img/logo.png";
import JudulContent from "../../components/judulcontent/judulcontent";
import map from "../../harta/img/map.png";
import logodesa from "../../harta/img/logo-bandung 1.png";
import Footer from "../../components/footer/footer";
import "./profile.css";
import CardProfile from "../../components/cardprofile/cardprofile";

const Profile = () => {
    const judul = "Kata Pengantar Kepala Desa"
    const gambar = "ridwan-kamil.png"
    const jabatan = "Tukang Las"
    const nametag = "Ridwan Kamil S.pd"
    const isiContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <div className="flex flex-col w-full h-96 overflow-x-hidden items-center content-center bg-black">
          <img src={imgDashboard} alt="content1" className=" h-full w-fit" />
        </div>

        <div className="flex flex-row w-full justify-between absolute pt-9 px-14">
          <img className="h-16" src={logo} alt="logo" />
          <div>
            <Navbar />
          </div>
        </div>
        <div
          className="absolute flex flex-col text-white"
          style={{ marginTop: "210px" }}
        >
          <div className="flex flex-row justify-around items-center py-5">
            <div className="flex flex-col justify-around ">
              <div className="flex text-[32px] font-bold drop-shadow-xl">
                <p>PROFIL DESA LEBAKWANGI</p>
              </div>
              <div className="flex text-[14px] mb-5 drop-shadow-xl">
                <p>
                  Informasi Mengenai Profil Pemerintahan Desa Lebakwangi
                  Kecamatan Arjasari Kabupaten Bandung{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center w-1/12 h-fit">
              <img src={logodesa} alt="logo desa" />
            </div>
          </div>
          <JudulContent />
        </div>
        <div
          className="h-fit overflow-hidden flex mt-16 items-center"
          style={{ width: "1000px" }}
        >
          <img src={map} alt="map arjasari" className="w-full h-fit" />
        </div>
        <div className="flex flex-col w-2/3 cont">
          <div className="flex  flex-col text-center w-full cont py-6">
            <h1>Wilayah Desa</h1> <h1>KONDISI UMUM DESA</h1>
          </div>
          <div className="flex flex-col cont">
            <h3> 1. Letak Geografis dan Batas Desa</h3>
            <p>
              Desa Lebakwangi terletak di wilayah Kecamatan Arjasari, Kabupaten
              Bandung dengan luas wilayah 316.717 Ha. Desa ini berjarak sekitar
              6 km dari ibu kota Kecamatan Arjasari, 11 km dari Ibukota
              Kabupaten Bandung, dan sekitar 19 km dari Ibukota Provinsi Jawa
              Barat. Datarannya memiliki ketinggian rata-rata sekitar 600 m di
              atas permukaan laut.
            </p>
            <p>
              Secara administratif, wilayah Desa Lebakwangi berbatasan dengan
              beberapa desa lainnya. Di sebelah utara, berbatasan dengan Desa
              Wargaluyu Kecamatan Arjasari. Sementara itu, di sebelah selatan,
              berbatasan dengan Desa Batukarut Kecamatan Arjasari. Di sebelah
              barat, berbatasan dengan Desa Tarajusari Kecamatan Banjaran. Dan
              di sebelah timur, berbatasan dengan Desa Arjasari Kecamatan
              Arjasari.
            </p>
          </div>
          <CardProfile judul = {judul} gambar = {gambar} jabatan ={jabatan} isiContent={isiContent} nametag={nametag} />
          <h3>2. Iklim</h3>
          <p>
            klim Desa Lebakwangi, sebagaimana desa-desa lain di wilayah
            Indonesia mempunyai Iklim Kemarau dan Penghujan, hal tersebut
            mempunyai pengaruh langsung terhadap pola tanam yang ada di Desa
            Lebakwangi pada umumnya.
          </p>
          <h3>3. Keadaan Sosial Ekonomi Penduduk</h3>
          <p>
            Masyarakat Desa Lebakwangi, dalam suasana Desa perkotaan, dalam
            social Ekonomi yang berkembang dari masa ke masa mengalami
            pergeseran terutama dari masyarakat petani kearah perkembangan
            pekerja dan industri. Karena hal ini pula menjadi salah satu yang
            menguatkan visi Desa Lebakwangi dalam membangun desa kemasa depan,
            mengingat desa Lebakwangi sendiri terus berkembang terutama dalam
            kependudukan dimana berbagai etnis berdomisili dan membaur dengan
            masyarakat.
          </p>
          <h3>4. Hidrologi dan Klimatologi</h3>
          <p>
            Berdasarkan hidrologinya, aliran-aliran sungai yang ada di wilayah
            Desa Lebakwangi membentuk pola Daerah Alirah Sungai Cisangkuy.
            Tercatat beberapa sungai maupun solokan yang terdapat di Desa
            Lebakwangi , yaitu :
          </p>
          <ul>
            <li>
              Sungai Citalutug yang berbatasan dengan Desa Tarajusari/Kecamatan
              Banjaran
            </li>
            <li>
              Sungai Cibintinu yang berbatasan dengan Desa Arjasari/Kecamatan
              Arjasari
            </li>
            <li>
              Sungai Cikabuyutan yang berbatasan dengan Desa Batukarut/Kecamatan
              Arjasari
            </li>
            <li>Sungai Cipalasari yang berbatasan dengan Desa Bojongmanggu.</li>
          </ul>
          <h3>5. Pemanfaatan Lahan</h3>
          <p>
            Pada umumnya, lahan yang terdapat di Desa Lebakwangi digunakan
            secara produktif dan hanya sedikit saja yang tidak dipergunakan. Hal
            ini menunjukkan bahwa kawasan Desa Lebakwangi memiliki sumber daya
            alam yang memadai dan siap untuk diolah. Berikut ini Luas Lahan
            menurut Jenis Penggunaannya :
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
