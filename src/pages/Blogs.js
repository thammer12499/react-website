import React, {useState} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import { useSpring, animated, config} from "@react-spring/three";
import Pikm from "./images/4K_PikmIt2_Eevee_Render.png"
import MirrorCom from "./images/4K_MirrorCombine_Eevee_Render.png"
import Pilw from "./images/4KPilwIt2_EeveeRender.png"

function MyRotatingBox(){
    const myMesh = React.useRef()
    const [active, setActive] = useState(false)

    const {scale} = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    })

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        myMesh.current.rotation.x = a;
    })

    return(
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

    const [modelClick, setModelClick] = useState("Click on me");

    return(
        <>
            <h1>Gallery</h1>
            <hr/>
            <div className="gallery-container">
                <div className="gallery-content">
                    <div>
                        <Canvas>
                            <ambientLight intensity={0.1}/>
                            <directionalLight color="red" position={[0,0,5]}/>
                            <MyRotatingBox/>
                        </Canvas>
                    </div>
                    <hr/>
                    <p onClick={() => setModelClick("This box here is made using ThreeJS, click it!")}>{modelClick}</p>
                </div>
                <div className="gallery-content">
                    <iframe frameBorder="0" src="https://itch.io/embed/2293923">The Insurance Game by GraydonK</iframe>
                    <hr/>
                    <p>Play the game created by myself and a team of DIGIT students in collaboration with ERIE Insurance!</p>
                </div>
            </div>
            <hr/>
            <h2>3D Renders</h2>
            <h4 >Renders of objects scanned into Blender through photography</h4>
            <div className="gallery-container">
                <div className="gallery-content">
                    <a target="_blank" href={Pikm}>
                        <img src={Pikm}/>
                    </a>
                    <hr/>
                    <p>Pile of logs scanned into a 3D model</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={Pilw}>
                        <img src={Pilw} />
                    </a>
                    <hr/>
                    <p>Areas of the forest around Penn State Behrend scanned into Blender</p>
                </div>
                <div className="gallery-content">
                    <a target="_blank" href={MirrorCom}>
                        <img src={MirrorCom}/>
                    </a>
                    <hr/>
                    <p>Combination of multiple forest scans rendered together</p>
                </div>
            </div>
        </>
    )
};




export default Blogs;