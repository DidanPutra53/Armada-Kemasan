import React from 'react'
import { Fragment } from 'react'
import MetaData from '../layout/MetaData'


const Tips = ({ history }) => {

    const submitHandler = () => {
        history.push('/')
    }

    return (
        <Fragment>
            <MetaData title={'Tips'} />
            <div className="Tips-page">
                <h1>Here's some tips</h1>
                <ul>
                    <li>
                        PILAH
                        <p>Mulai pilah sampah Anda. Untuk layanan Send Your Waste, Anda hanya bisa mengirim sampah jenis anorganik</p>
                    </li>
                    <br />
                    <li>
                        ISI FORM
                        <p>Tentukan tujuan kirim, lengkapi data diri dan isi alamat Anda. Anda bisa menyimpan alamat Anda untuk memudahkan pengiriman selanjutnya</p>
                    </li>
                    <br />
                    <li>
                        KEMAS
                        <p>Kemas sampah anorganik Anda di dalam kotak/kardus. Sematkan label atau tulis kode unik SYW yang didapat pada kotak/kardus</p>
                    </li>
                    <br />
                    <li>
                        KIRIM
                        <p>Kirimkan sampah anorganik Anda menggunakan jasa ekspedisi ke fasilitas daur ulang Waste4Change Sampah yang Anda kirim akan kami terima catat untuk kemudian kami daur ulang secara optimal</p>
                    </li>
                </ul>
                <br />
                <button onClick={submitHandler}>
                    Understand
                </button>
                <br />
            </div>
        </Fragment>
    )
}

export default Tips
