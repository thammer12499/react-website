import React from 'react';
import QRcode from './images/qrCode.png';

const Contact = () => {
    return(
        <div>
            <h1>R&#233;sum&#233;</h1>
            <div className="resume-top">
                <div>
                    <p className="resume-bold">Thomas J. Hammer III</p>
                    <p className="resume-contact">
                        (716)253-7526
                        <br/>
                        705 Potomac Ave, Erie, Pennsylvania, 16505
                        <br/>
                        thammer12499(at)gmail.com
                    </p>
                </div>
                <div>
                    <figure>
                        <img src={QRcode} alt="scan to be taken to portfolio"/>
                    </figure>
                </div>
            </div>
            <hr/>
            <div className="resume-bottom">
                <p className="resume-bold">QUALIFICATIONS SUMMARY&#58;</p>
                <ul>
                    <li>Demonstrated leadership skills</li>
                    <li>Showcased cleared communication among co-workers</li>
                    <li>Completed cross-training in the following</li>
                    <li>Programming and Debugging</li>
                    <li>Creative Writing</li>
                    <li>Critical Writing</li>
                    <li>Digital Design</li>
                    <li>Website Development</li>
                    <li>Project Management</li>
                    <li>Leadership, Motivational, and Project Management skills honed from the National Society of Leadership</li>
                    <li>Experience in managing and quality control in groups at Penn State Behrend</li>
                    <li>Worked as Research Assistant within Penn State Behrend for Professor Tommy Hartung</li>
                </ul>
                <p className="resume-bold">EDUCATION&#58;</p>
                <ul>
                    <li>Senior Student in Digital Media, Arts, and Technology (08/2020 - Present)</li>
                    <li>The Pennsylvania State University, Erie, PA (08/2020 - Present)</li>
                    <li>Cumulative GPA: 3.24 (Fall/2023)</li>
                </ul>
                <p className="resume-bold">WORK EXPERIENCE</p>
                <ul>
                    <li>Pizza hut
                        <ul>
                            <li>Worked part-time at the establishment for two years (2018-2020) before departing for college</li>
                            <li>Averaged 27 and a half hours a week</li>
                            <li>Showed a consistent drive to work with few sick days</li>
                            <li>Demonstrated flexibility in scheduling and willingness to work on days off if required</li>
                            <li>Showcased ability to work under pressure</li>
                            <li>Responded appropriately and defused tense situations with clientele</li>
                            <li>Received promotion from cook to shift manager</li>
                        </ul>
                    </li>
                    <li>Research Assistant
                        <ul>
                            <li>Worked under Professor Tommy Hartung as a research assistant</li>
                            <li>Displayed ability to utilize creativity to make unique and abstract</li>
                            <li>Developed and modified scanned in environmental 3D assets</li>
                            <li>Utilized Blender’s shader node system to create imaginative and unique textures</li>
                            <li>Used Blender’s geometry nodes to create VFX</li>
                            <li>Created atmospheric renders using Blender’s lighting and camera systems</li>
                            <li>Maintained position between semesters and during summer break</li>
                        </ul>
                    </li>
                </ul>
                <p className="resume-bold">SKILLS&#58;</p>
                <ul>
                    <li>Showcased desire to adapt and learn new mediums and techniques</li>
                    <li>Excelled in group communication and willingness to take leadership role</li>
                    <li>Demonstrated proactive and flexible mindset when working</li>
                    <li>Willingness to assist colleagues when required</li>
                    <li>Defused difficult situations with clientele and coworkers</li>
                    <li>Experience in debugging and communicating errors/room for improvement</li>
                    <li>Produced clear documentation for instructing or communicating goals in design or achieving solutions</li>
                    <li>Ability to adapt to strenuous situations and achieve goals through creative thinking</li>
                    <li>Created 3D objects utilizing photographs to import them to a digital landscape</li>
                    <li>Produced new 3D objects and character models using 3D software</li>
                    <li>Generated new PBR textures using node-based systems and baking techniques for individual models</li>
                    <li>Utilized animation and model rigging system to create detailed animations with unique characters</li>
                    <li>Displayed understanding in software development and coding languages&#58;
                        <ul>
                            <li>C++</li>
                            <li>Python</li>
                            <li>XML</li>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>XSLT</li>
                        </ul>
                    </li>
                    <li>Demonstrated advanced knowledge and understanding in the following 3D software&#58;
                        <ul>
                            <li>Blender</li>
                            <li>Maya</li>
                            <li>3DS Max</li>
                            <li>Zbrush</li>
                        </ul>
                    </li>
                    <li>Showcased knowledge in the following Adobe Creative Software&#58;
                        <ul>
                            <li>Photoshop</li>
                            <li>Premiere</li>
                            <li>After Effects</li>
                            <li>Illustrator</li>
                        </ul>
                    </li>
                    <li>Understanding in filming, photography, and the following equipment&#58;
                        <ul>
                            <li>Black Magic 4k Cameras</li>
                            <li>Epic Red Dragon Cinema Camera 6k</li>
                            <li>Stage Lighting/Lamps</li>
                            <li>Camera Stands</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact