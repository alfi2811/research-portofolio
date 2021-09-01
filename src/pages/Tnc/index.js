import React from 'react'
import { Button } from 'antd';
import Navbar from '../../components/Navbar'
import './Tnc.scss'
import { useHistory } from 'react-router-dom';

const Tnc = () => {
    // const dispatch = useDispatch()
    // const arr = [1,2,3,4,5]    
    let history = useHistory()

    return (
      <div>
        <Navbar justLogo={true} />
        <div className="tnc-container">
          <h1>Syarat dan Ketentuan</h1>
          <p>Selamat datang di ReZearch</p>
          <p>
            Disarankan sebelum mengakses Situs ini lebih jauh, Anda terlebih dahulu membaca dan memahami syarat dan ketentuan yang berlaku. Syarat dan ketentuan berikut adalah ketentuan dalam pengunjungan Situs, isi dan/atau konten, layanan, serta fitur lainnya yang ada di dalam Situs. Dengan mengakses atau menggunakan Situs atau aplikasi lainnya yang disediakan oleh atau dalam Situs, berarti Anda telah memahami dan menyetujui serta terikat dan tunduk dengan segala syarat dan ketentuan yang berlaku di Situs ini.
          </p>
          <p>
            1. DEFINISI
          </p>
          <p>
            1.1. “Kami”, berarti PT Partai OABlood Perjuangan selaku pemilik dan pengelola Situs serta aplikasi mobile yang bernama ReZearch.
          </p>
          <p>
            1.2. “Anda”, berarti tiap orang yang mengakses Situs dan menggunakan layanan dan jasa yang disediakan oleh Kami.
          </p>
          <p>
            1.3. “Layanan”, berarti setiap dan keseluruhan jasa serta informasi yang ada pada Situs, termasuk namun tidak terbatas pada informasi yang disediakan, fitur dan layanan aplikasi, dukungan data, serta aplikasi mobile yang Kami sediakan.
          </p>
          <p>
            1.4. “Pengguna”, berarti tiap orang yang mengakses dan menggunakan layanan dan jasa yang disediakan oleh Kami, termasuk diantaranya Pengguna Belum Terdaftar dan Pengguna Terdaftar.
          </p>
          <p>
            1.5. "Pengguna Belum Terdaftar", berarti tiap orang yang mengakses Situs Kami dan belum melakukan registrasi.
          </p>
          <p>
            1.6. “Pengguna Terdaftar”, berarti tiap orang yang mengakses dan menggunakan layanan dan jasa yang disediakan oleh Kami, serta telah melakukan registrasi dan memiliki akun pada Situs Kami.
          </p>
          <p>
            1.7. “Konten”, berarti teks, data, informasi, angka, gambar, grafik, foto, audio, video, nama pengguna, informasi, aplikasi, tautan, komentar, peringkat, desain, atau materi lainnya yang ditampilkan pada Situs.
          </p>
          <p>
            1.10. “Situs”, berarti https://research-porto-web.netlify.app/
          </p>
          <p>
            2. LAYANAN DAN/ATAU JASA
          </p>
          <p>
            Kami memberikan informasi mengenai produk-produk finansial dan/atau perbankan, asuransi, telekomunikasi yang disediakan oleh Pihak Ketiga. Layanan ini memungkinkan Anda untuk dapat melihat, menelaah, membaca, serta membandingkan informasi tersebut.
          </p>
          <p>
            2.1. Informasi yang terdapat dalam Situs Kami ditampilkan sesuai keadaan kenyataan untuk tujuan informasi umum. Kami berusaha untuk selalu menyediakan dan menampilkan informasi yang terbaru dan akurat, namun Kami tidak menjamin bahwa segala informasi sesuai dengan ketepatan waktu atau relevansi dengan kebutuhan Anda.
          </p>
          <p>
            2.2. Diharapkan Anda tidak menganggap atau berasumsi bahwa Situs ini dapat dijadikan sebagai saran keuangan dan/atau finansial, atau rekomendasi atas produk serta layanan yang ditampilkan. Informasi di Situs ini disediakan untuk membantu Anda dalam memilih produk atau layanan yang sesuai dengan kebutuhan Anda. Anda sepenuhnya bertanggung jawab atas keputusan terkait pemilihan produk dan layanan, atau dalam menandatangani kontrak berkaitan dengan sebuah produk atau layanan. Dengan memberikan Kami rincian tentang diri pribadi Anda, dianggap Anda mengajukan diri untuk mendapatkan suatu produk atau layanan tertentu.
          </p>
          <p>
            2.3. Layanan yang Kami berikan tidak bersifat memaksa atau mengikat, serta tidak mengharuskan Anda untuk mengikuti informasi yang tersedia. Tidak ada situasi atau keadaan apapun yang dapat membuat Kami dikenakan tanggung jawab atas kemungkinan kerugian yang Anda alami karena pengambilan keputusan yang dilakukan oleh Anda sendiri terkait tindakan atas informasi produk yang kami sampaikan di Situs.
          </p>
          <p>
            2.4. Kami memiliki hak untuk kapan saja menampilkan, mengubah, menghapus, menghilangkan, atau menambahkan segala konten yang ditampilkan dalam Situs ini.
          </p>
          <p>
            3. PENGGUNAAN LAYANAN DAN JASA
          </p>
          <p>
            Dengan Anda melanjutkan penggunaan atau pengaksesan Situs ini, berarti Anda telah menyatakan serta menjamin kepada Kami bahwa :
          </p>
          <p>
            3.1. Anda hanya diperkenankan untuk mengakses dan/atau menggunakan Situs ini untuk keperluan pribadi dan non-komersil, yang berarti bahwa Situs ini hanya boleh diakses dan digunakan secara langsung oleh individu atau bisnis yang sedang mencari produk atau layanan untuk individu atau bisnis tersebut. Akses dan penggunaan Situs diluar dari keperluan pribadi atau non-komersil dilarang keras, dan melanggar Syarat dan Ketentuan ini.
          </p>
          <p>
            3.2. Anda tidak diperkenankan menggunakan Situs dalam hal sebagai berikut :
          </p>
          <p>
            Untuk menyakiti, menyiksa, mempermalukan, memfitnah, mencemarkan nama baik, mengancam, mengintimidasi atau mengganggu orang atau bisnis lain, atau apapun yang melanggar privasi atau yang Kami anggap cabul, menghina, penuh kebencian, tidak senonoh, tidak patut, tidak pantas, tidak dapat diterima, mendiskriminasikan atau merusak.
          </p>
          <p>
            4. HAK INTELEKTUAL PROPERTI
          </p>
          <p>
            Semua Hak Kekayaan Intelektual yang ada di dalam Situs ini adalah milik Kami. Tiap atau keseluruhan informasi dan materi dan konten, termasuk namun tidak terbatas pada tulisan, perangkat lunak, teks, data, grafik, gambar, audio, video, logo, ikon atau kode-kode html dan kode-kode lain yang ada di Situs ini dilarang dipublikasikan, dimodifikasi, disalin, digandakan atau diubah dengan cara apapun di luar area Situs ini tanpa izin dari Kami. Pelanggaran terhadap hak-hak Situs ini dapat ditindak sesuai dengan peraturan yang berlaku.
          </p>
          <p>
            5. KOMENTAR
          </p>
          <p>
            Jika Anda ingin memberikan komentar, masukan, ataupun sanggahan mengenai tiap atau keseluruhan konten dan informasi dalam Situs, Kami juga menyediakan sarana chat/messaging, kontak email, blog, ataupun media sosial milik Kami. Anda diperbolehkan untuk memberi komentar, dan setuju bahwa jika diperlukan, akan Kami pergunakan untuk kepentingan informasi dan ditampilkan pada Situs Kami. Dan harap diperhatikan bahwa komentar, masukan, atau sanggahan yang Anda berikan tidak boleh bertentangan dengan Syarat dan Ketentuan ini, terutama seperti tercantum dalam poin 3.2.
          </p>
          <Button type="primary" shape="round" size="large" block onClick={() => history.push('/register')}>
            Back to Sign Up Page
          </Button>
        </div>
      </div>
    )
}

export default Tnc
