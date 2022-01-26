import React, { Fragment } from 'react'
import { BackgroundHome } from '../images/index'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import articles from '../activities/Article'
import { useSelector } from 'react-redux'

const Home = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <Fragment>
            <MetaData title={''} />
            <div className="home">
                <img src={BackgroundHome} alt="bg" />
                <div className="home-content">
                    <div className="home-atas">
                        <h1>Armada Kemasan</h1>
                        <br />
                        <h2>Waste less, damage less</h2>
                        <br />
                        <p>Armada Kemasan adalah perusahaan yang bergerak di bidang pengolaan limbah sampah. Armada Kemasan menjadi wadah/ tempat daur ulang sampah plastik, kaca, besi, dan bahan daur ulang lainnya agar bisa mengurangi sampah di bumi. Proses pengolahan sampah diawali dengan pengumpulan sampah-sampah yang telah dikumpulkan dari beberapa rumah (secara mandiri/lewat jasa pick up), kemudian disortir dan dibersihkan. Sampah-sampah yang telah dibersihkan siap didaur ulang dengan cara dileburkan atau dilelehkan atau dibuat menjadi suatu barang fungsional kembali.</p>
                        <div className="button">
                            {
                                user ? (
                                    <Fragment>
                                        <Link to="/Address">
                                            FIND NEAREST POINT
                                        </Link>
                                    </Fragment>
                                ) :
                                    <Link to="/Login">
                                        GET STARTED
                                    </Link>
                            }
                        </div>
                    </div>
                    <div className="home-news">
                        <h1>NEW ARTICLE</h1>
                        <div className="home-article">
                            {
                                articles.map((article, id) => {
                                    return (
                                        <div className="list-article" key={id}>
                                            <img src={article.images} alt="article1" />
                                            <div className="caption-article">
                                                <h6>{article.title}</h6>
                                                <br />
                                                <Link to={`/Activities/${article.id}`}>Read more <HiOutlineArrowNarrowRight /></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
