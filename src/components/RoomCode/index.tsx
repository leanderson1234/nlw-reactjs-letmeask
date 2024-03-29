import copyImg from '../../assets/images/copy.svg'
import './style.scss'

type RoomCodeProps= {
  code: string;
}
export function RoomCode(props: RoomCodeProps){

  function copyRoomCopyToClipBoard(){
    navigator.clipboard.writeText(props.code)
  }
  return(
    <button className="room-code" onClick={copyRoomCopyToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code"/>
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}