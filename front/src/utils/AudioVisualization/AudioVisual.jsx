import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AudioVisual = ({ width, height }) => {
  const audioVolume = useSelector((state) => state.tools.audioVolume);
  useEffect(() => {
    const curAudio = document.getElementById("audio1");
    switch (audioVolume) {
      case 0:
        curAudio.volume = 0;
        console.log(0);
        break;
      case 1:
        curAudio.volume = 0.1;
        console.log(1);
        break;
      case 2:
        curAudio.volume = 0.3;
        console.log(2);
        break;
      case 3:
        curAudio.volume = 0.8;
        console.log(3);
        break;
      default:
        curAudio.volume = 0.5;
        console.log(4);
        break;
    }
  }, [audioVolume]);

  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    canvas.width = 2500000 / window.innerWidth;
    canvas.height = 500000 / window.innerWidth;
    const ctx = canvas.getContext("2d");
    /*ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 1;
      ctx.shadowColor = 'black';*/
    let audioSource;
    let analyser;
    let audioContext;
    document.body.onclick = () => {
      const audio1 = document.getElementById("audio1");

      audio1.src = "/audio/Soviet_Connection.mp3";
      audioContext = new AudioContext();
      audio1.play();
      audioSource = audioContext.createMediaElementSource(audio1);
      analyser = audioContext.createAnalyser();
      audioSource.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 1024;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const barWidth = 15;
      let barHeight;
      let x;

      function animate() {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
      }
      animate();
      document.body.onclick = (e) => {
        e.preventDefault();
      };
    };

    function audioStart() {
      const audio1 = document.getElementById("audio1");
      audio1.src = "/audio/Soviet_Connection.mp3";
      audio1.load();
      audio1.play();

      audioSource = audioContext.createMediaElementSource(audio1);
      analyser = audioContext.createAnalyser();
      audioSource.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 1024;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const barWidth = 15;
      let barHeight;
      let x;

      function animate() {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.fillStyle = 'rgba(0,0,0,0.2)';
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);

        requestAnimationFrame(animate);
      }
      animate();
    }

    function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray) {
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2.5; // > 100 ? dataArray[i] : 100;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(i * 4.0001);
        const hue = 120 + i * 0.05;
        ctx.fillStyle = "#00ffd2";
        ctx.beginPath();
        ctx.arc(10, barHeight / 2, barHeight / 2, 0, Math.PI / 4);
        ctx.fill();
        ctx.stroke();

        x -= barWidth;
        ctx.restore();
      }
    }
  }, []);

  return (
    <AudioVisualBox id="container">
      <canvas id="canvas1" width={width} height={height}></canvas>
      <audio id="audio1" loop></audio>
    </AudioVisualBox>
  );
};

export default AudioVisual;

const AudioVisualBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 30%;

  #container {
    background: black;
    width: 100%;
    height: 100%;
  }
  #canvas1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*filter: blur(10px) contrast(10);*/
  }
  #audio1 {
    width: 50%;
    margin: 50px auto;
    display: block;
  }
`;
