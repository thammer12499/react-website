import React, {useState} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import {useSpring, animated, config} from "@react-spring/three";
import Pikm from "./images/4K_PikmIt2_Eevee_Render.png"
import MirrorCom from "./images/4K_MirrorCombine_Eevee_Render.png"
import Pilw from "./images/4KPilwIt2_EeveeRender.png"
import SchlPt2 from "./images/SchoolRender2.png"
import SchlPt1 from "./images/SchoolRender1.png"
//import Video from './data'
import YouTube from 'react-youtube';

class Example extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

function MyRotatingBox() {
    const myMesh = React.useRef()
    const [active, setActive] = useState(false)

    const {scale} = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    })

    useFrame(({clock}) => {
        const a = clock.getElapsedTime()
        myMesh.current.rotation.x = a;
    })

    return (
        <animated.mesh
            scale={scale}
            onClick={() => setActive(!active)}
            ref={myMesh}
        >
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color="hotpink"/>
        </animated.mesh>
    )
}


const Blogs = () => {

    return (
        <>
            <h1>Portfolio</h1>
            <hr/>
            <h2>Animations/Videos</h2>
            <div className="gallery-container">
                <div className="gallery-content">
                    <iframe
                        src="https://www.youtube.com/embed/hWaPRp1bO2o?si=h1CuJP-EaSzTWVHJ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <hr/>
                    <p>A ten second animated zoom in of a school scene. The scene demonstrates model and environment creation, UV unwrapping, material modularity and creation, skinning and animation.</p>
                </div>
                <div className="gallery-content">
                    <iframe
                        src="https://www.youtube.com/embed/t5tutnRC6d4?si=dQ0Gv-wBQr05fVMG"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <hr/>
                    <p>A secondary animated view of the school scene. The different angle conveys the modularity of the scene as well as the technical aspect of it. Vegetation was created and spread using Blender's Geometry nodes.</p>
                </div>
                <div className="gallery-content">
                    <iframe
                        src="https://www.youtube.com/embed/pVXCEIr_Jzk?si=_BuNgrD_NrchIR8S"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <hr/>
                    <p>This is a minor animation test that showcases sharp animations, slow and fluid movement, as well as procedural animation.</p>
                </div>
                <div className="gallery-content">
                    <iframe
                        src="https://www.youtube.com/embed/NRJq2mkcctY?si=XSW5vnWCeLoxbATx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <hr/>
                    <p>This video acts as a showcase to demonstrate my knowledge of materials and modulating it for ease of us and later modification.</p>
                </div>
            </div>
            <hr/>

            <h2>Static Renders</h2>
            <div className="gallery-container">
                <div className="gallery-content">
                    <a target="_blank" href={SchlPt1}>
                        <img src={SchlPt1}/>
                    </a>
                    <hr/>
                    <p>A render of a School scene that I created using Blender. The models and materials were all hand
                        made and UV unwrapped personally.</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={SchlPt2}>
                        <img src={SchlPt2}/>
                    </a>
                    <hr/>
                    <p>Side view render of the school scene I created from my senior project.</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={Pikm}>
                        <img src={Pikm}/>
                    </a>
                    <hr/>
                    <p>A pile of logs scanned into a 3D model.
                        The scanned in materials were modified by myself</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={Pilw}>
                        <img src={Pilw}/>
                    </a>
                    <hr/>
                    <p>Areas of the forest around Penn State Behrend scanned into Blender.
                        The materials were changed to create an uncanny feeling.</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={MirrorCom}>
                        <img src={MirrorCom}/>
                    </a>
                    <hr/>
                    <p>A combination of multiple forest scans rendered together with
                        modified materials for added effect and dynamic lighting.</p>
                </div>
            </div>
        </>
    )
};


export default Blogs;