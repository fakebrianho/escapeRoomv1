import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import './App.css';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import Room from './Room2';
import { OrbitControls, Loader} from '@react-three/drei';
import { useModal } from 'react-hooks-use-modal';


const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Row = styled.div`
  display: absolute;
  top: 75%;
  right: 50%;
  margin-left: 25%;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
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
    // setCurrentStage(1);
    console.log(playerNumber);
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
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }

  if(call){
    yourVideo = (
      <>
      <Video playsInline muted ref={userVideo} autoPlay />  
      </>
    )
  }

  if(playerNumber == 1){

  }

  function TestComponent() {
    return(
    <Container2>
      <Row>
        <button onClick={()=> setCurrentStage(1)}>Hello World </button>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button onClick={() => callPeer(key)}>Join Room with {key}</button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
      </Row>
    </Container2>
    )
  }

  function UserGreeting(props) { 
    return(
      <h1>Welcome Back!</h1>
    )
  }

  function GuestGreeting(props) { 
    return(
      <h1>Please Sign Up!</h1>
    )
  }

  function Greetings(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
      return <UserGreeting/>
    }
    return <GuestGreeting/>
  }


  const CanvasComp = () => {
    return(
      <>
      <Canvas>
      <Suspense fallback={null}>
        {/* <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material'/>
        </mesh> */}
        <Room />
        <OrbitControls/>
      </Suspense>
    </Canvas>
    <Row>
      {incomingCall}
    </Row>
    </>
    )
  }

  const StageRender = () =>{
    console.log(playerNumber);
    if(currentStage == 0){
      return(
        <TestComponent/>
      )
    }else if(currentStage == 1){
      if(playerNumber == 1){
        console.log('returned');
        return <CanvasComp/>
      }else if(playerNumber == 2){
        console.log('wh');
        return(
          <>
            <Canvas>
              <mesh>
                <boxBufferGeometry attach='geometry' args={[1, 4, 1]}/>
                <meshStandardMaterial attach='material' />
              </mesh>
            </Canvas>
          </>
        )
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
        <StageRender /> 
      </Route>
      <Route path="/room1">
        <Canvas>
          <Room /> 
          <OrbitControls />
        </Canvas>
        <Loader/>
      </Route>
    </Switch> 
    </Router>
  );
}

export default App;
