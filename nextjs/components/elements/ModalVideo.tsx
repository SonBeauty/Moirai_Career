import React, { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import dynamic from "next/dynamic";
import ModalVideo from "react-modal-video";

const ModalVideos: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <>
            <a onClick={() => setOpen(true)}>Click</a>

            <ModalVideo
                channel="youtube"
                youtube={{
                  autoplay: 1,
                  mute: 1
                }}
                isOpen={isOpen}
                videoId="7e90gBu4pas"
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default ModalVideos;