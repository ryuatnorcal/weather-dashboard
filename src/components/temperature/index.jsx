import './styles.css';

export const Temperature = ({ temp, attr }) => {
  return (
    <div className='temperature'>
      <span className="temp">
        { temp }
      </span>
      <span className="degree">
        { attr }
      </span>
      {/* 
      * this icon also had huge padding; 
      * I decided to use text instead of image for styling purpose
      * <img src={icon} />
      */}
    </div>
  )
}