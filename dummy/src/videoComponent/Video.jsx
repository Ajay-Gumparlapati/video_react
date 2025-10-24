import video1 from "../videos/video1.mp4"
import video2 from "../videos/video2.mp4"
import video3 from "../videos/video3.mp4"

export function Video1(){
    return <div>
        <h3>Video 1</h3>
        <video src={video1} controls width="500px" height="300px"></video>
    </div>
}
export function Video2(){
    return <div>
        <h3>Video 2</h3>
        <video src={video2} controls width="500px" height="300px"></video>
    </div>
}
export function Video3(){
    return <div>
        <h3>Video 3</h3>
        <video src={video3} controls width="500px" height="300px"></video>
    </div>
}