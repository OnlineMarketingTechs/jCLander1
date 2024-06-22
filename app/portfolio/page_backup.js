
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

// JavaScript
const Database = require('better-sqlite3');
const db = new Database('portfolio.db');

// Get clients from the database
const clients = db.prepare('SELECT * FROM Clients').all();


    return (
        <>
            <Layout headerStyle={16} footerStyle={1}  wrapperCls="home_3">
            <Breadcrumb_Services breadcrumbTitle="Online Marketing Techs Work Portfolio" pageTitle="Were Proud of Our Work" pageImage="assets/images/online_maarketing_services_g.jpg" />
      
                <section className="portfolio-section">
                    <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1/>
                            <div className="link-btn text-center mb-30"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Load More</span></Link></div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}