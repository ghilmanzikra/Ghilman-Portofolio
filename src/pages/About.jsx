import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import p1 from "../assets/profil/Ghilman Zikra.jpg";

function About() {
  return (
    <div style={{ marginTop: "100px" }} className="about min-vh-100 w-100 d-flex" id="about">
            <Container>
                <Row className="riwayat mt-50px">
                    <Col className="text-center animate__animated animate__fadeInUp">
                        <img src={p1} alt="profil" className="rounded-circle img-fluid" style={{ width: "200px", height: "200px", objectFit: "cover" }}/>
                    </Col>
                    <Col >
                        <h1 className="mt-50px animate__animated animate__fadeInUp">Pekenalan</h1>
                        <p className="animate__animated animate__fadeInUp">Nama saya Ghilman Zikra, saya seorang mahasiswa Teknik Informatika di Universitas Islam Negeri Sultan Syarif Kasim Riau. Saya merupakan anak pertama dari tiga bersaudara. Saya lahir di Bandung pada tanggal 8 Oktober 2004. Saat ini saya tinggal di Pekanbaru bersama keluarga saya. Kami sudah pindah ke Pekanbaru selama 18 Tahun. Untuk riwayat pendidikan saya tekuni di Kota Pekanbaru ini.</p>
                    </Col>
                    
                </Row>

                <Row className="riwayat mt-50px mt-5">
                    <Col>
                        <h1 className="mt-50px animate__animated animate__fadeInUp">Riwayat Pendidikan</h1>
                        <p className="animate__animated animate__fadeInUp">Riwayat pendidikan saya selama 12 tahun sebelum berkuliah</p>
                    </Col>
                </Row>

                <Table striped bordered hover >
                    <thead className="animate__animated animate__fadeInUp">
                        <tr>
                            <th></th>
                            <th>Nama Sekolah</th>
                            <th>Tingkat</th>
                            <th>Tahun Lulus</th>
                        </tr>
                    </thead>
                    <tbody className="animate__animated animate__fadeInUp">
                        <tr>
                            <td>1</td>
                            <td>SDN 141 Pekanbaru</td>
                            <td>SD</td>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SMPN 8 Pekanbaru</td>
                            <td>SMP</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SMK Hasanah Pekanbaru</td>
                            <td>SMK</td>
                            <td>2023</td>
                        </tr>
                    </tbody>
                </Table>

                <Row className="magang pt-50px mt-5">
                    <Col>
                        <h1 className="pt-50px animate__animated animate__fadeInUp">Riwayat Magang</h1>
                        <p className="animate__animated animate__fadeInUp">Riwayat magang saya saat berada di SMK</p>
                    </Col>
                </Row>
                <Table striped bordered hover className="pt-30px">
                    <thead className="animate__animated animate__fadeInUp">
                        <tr>
                            <th></th>
                            <th>Nama Instansi</th>
                            <th>Tingkat</th>
                            <th>Tahun</th>
                        </tr>
                    </thead>
                    <tbody className="animate__animated animate__fadeInUp">
                        <tr>
                            <td>1</td>
                            <td>CV. Berkah Andalas</td>
                            <td>CV</td>
                            <td>2022</td>
                        </tr>
                    </tbody>
                </Table>

            </Container>    
        </div>
  );
}

export default About;