import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import './App.css';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import Room2 from './Room2';
import Room1 from './Room1';
import { OrbitControls, Loader} from '@react-three/drei';
import { useModal } from 'react-hooks-use-modal';

const Row = styled.div`
  display: flex;
  width: 100%;
`;


const Video = styled.video`
  z-index: 2;
  width: 10%;
  height: 10%;
`;

function App() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [call, setCall] = useState(false);
  const [playerNumber, setPlayerNumber] = useState('');
  const [currentStage, setCurrentStage] = useState(0);
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const [hovered, onHover] = useState(null)
  const selected = hovered ? [hovered] : undefined

  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();
  let currentRoom;
  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    setPlayerNumber(2);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {

        iceServers: [
            {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCurrentStage(1);
      setCallAccepted(true);
      peer.signal(signal);
    })
  }

  const startGame = () => {
    setCurrentStage(1);
  }
  function acceptCall() {
    startGame();
    setPlayerNumber(1);
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  function handleButtons(){
    const toBeRemoved = document.getElementsByClassName('buttonClass');
    toBeRemoved.style.visibility = 'hidden';
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }
  let incomingCall;
  let yourVideo;
  if (receivingCall) {
    incomingCall = (
      <div class="incoming">
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }

 
  const CanvasComp = () => {
    return(
      <>
        <Canvas perspective camera={{position:[0,1.6, 2.5]}}>
          <Suspense fallback={null}>
            <Room1 />
          </Suspense>
        </Canvas>
        {incomingCall}
      </>
    )
  }

  const CanvasComp2 = () => {
    return(
      <>
        <Canvas perspective camera={{position:[0,1.6, 2.5]}}>
          <Suspense fallback={null}>
            <Room2 />
          </Suspense>
        </Canvas>
        {incomingCall}
      </>
    )
  }
  const Test = () => {
    return(
    <>
      {/* <Canvas perspective camera={{position:[0,1.6, 2.5]}}>
        <Room2/>
      </Canvas> */}
    </>
    )
  }

  const StageRender = () =>{
    console.log(playerNumber);
    if(currentStage === 0){
      return <Test/> 
    }
    if(currentStage === 1){
      if(playerNumber === 1){
        return <CanvasComp/>
      }else if(playerNumber === 2){
        return <CanvasComp2/>
      }
    }
  }

  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <div id='videos'>
          {UserVideo}
          {PartnerVideo}
        </div>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <div class="buttonClass">
              <button onClick={() => {handleButtons(); callPeer(key);}}>Call {key}</button>
            </div>
          );
        })}
        <StageRender /> 
          {incomingCall}
      </Route>
      <Route path="/room1">
        <Canvas perspective camera={{position:[0,1.6, 2.5]}}>
        </Canvas>
        <Loader/>
      </Route>
      <Route path="/room2">
        <Canvas perspective camera={{position:[0, 1.6, 2.5]}}>
          <Room2 />
          </Canvas>
          <Loader/>
      </Route>
    </Switch> 
    </Router>
  );
}

export default App;
