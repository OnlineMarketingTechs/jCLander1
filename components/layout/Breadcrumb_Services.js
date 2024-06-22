import Link from "next/link"

export default function Breadcrumb_Services({ breadcrumbTitle, pageTitle, pageImage }) {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: `url(${pageImage})` }}> {/* Use pageImage for background */}
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1>{pageTitle}</h1>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="#">Services</Link></li>
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
