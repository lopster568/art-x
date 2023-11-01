"use client"
import { Player } from "@lottiefiles/react-lottie-player";

const AnimationPlayer = ({ lottie }: { lottie: any }) => {
    return (
        <Player
            autoplay
            loop
            src={lottie}
            style={{ height: '200px', width: '300px', padding: 0 }}
        />
    );
}

export default AnimationPlayer;