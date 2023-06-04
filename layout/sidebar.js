import React from 'react'
import Link from 'next/link'
import { FileDoc, FilePdf, FileZip } from '../public/svg/icon'

export default function Sidebar() {
    return (
        <>
            <div className="industify_fn_sidebar">
                <div className="industify_fn_sidebar_in">

                    <div className="widget_block">
                        <div className="industify_fn_widget_estimate">
                            <div className="img_holder">
                                <span className="helper1"></span>
                                <span className="helper2"></span>
                                <span className="helper3"></span>
                                <span className="helper4"></span>
                                <span className="helper5"></span>
                                <span className="helper6"></span>
                                <div className="abs_img" style={{"backgroundImage":"url(img/widget/1.jpg)"}}></div>
                            </div>
                            <div className="bfwe_inner">
                                <p>Let's get started! Contact us for a free quote on your next home improvement project.</p>
                                <Link href="/contact"><a>Request an Estimate</a></Link>
                            </div>
                        </div>
                    </div>

                    <div className="widget_block widget_brochure">
                        <div className="wid-title">
                            <span>Company Presentation</span>
                        </div>
                        <div className="industify_fn_widget_brochure">
                            <div className="fn_brochures">
                                <ul>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Viva-Profile.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                                <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Viva Profile</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/VIVA-Marble-_-Wood-Series-Digital-Images.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">VIVA Marble _ Wood Series Digital Images</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Viva-FR-A2-ACCP.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Viva FR A2+ (ACCP)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/VIVA-DECOR-SERIES.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                                <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">VIVA DECOR SERIES</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Partition-Panel.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Partition Panel</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Sand-Blast-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Sand Blast Series</span>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Natural-Stone-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                                <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Natural Stone Series</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Metal-Abstract-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Metal Abstract Series</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Gold-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Gold Series</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Galaxy-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                                <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Galaxy Series</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Desert-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Desert Series</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Corten-Steel-catalogue.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Corten Steel Catalogue</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <Link href="../pdf/Bus-Body-Series.pdf"><a download=""></a></Link>
                                            <span className="icon">
                                            <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Bus Body Series</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
