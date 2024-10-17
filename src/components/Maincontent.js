import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan from "./../assets/ak.jpg";
import jurusan1 from "./../assets/ak1.jpg";
import jurusan2 from "./../assets/ak2.jpg";
import kegiatan from "./../assets/keg.jpg";
import kegiatan1 from "./../assets/keg1.jpg";
import kegiatan2 from "./../assets/keg2.jpg";
import kegiatan3 from "./../assets/keg3.jpg";
import kegiatan4 from "./../assets/keg4.jpg";

const Maincontent = ()=> {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan</h1>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan} jurusan="Jurusan Gaming" description="Menjadi seorang ahli dalam bermain game adalah keterampilan atau bakat yang kebanyakan orangtua tidak akan bisa mengerti"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan1} jurusan=" Jurusan Teknik Kendaraan Ringan" description="ilmu yang mempelajari tentang alat-alat transportasi darat yang menggunakan mesin"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan2} jurusan="Jurusan Farmasi" description=" Di jurusan ini, kamu akan belajar mengenai berbagai informasi mengenai obat-obatan dan bahan kimia."/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan} description="Pramuka per-pekan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1} description="Perpisahan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan2} description="workout"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan3} description="Makan makan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan4} description="Latihan PSHT"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;