import './styles.css';
/**
 * All the params are required
 * @param {*}labelTop, labelBottom, contentTop, contentBottom 
 * @returns 
 */
export const DividedInfo = ({ labelTop, labelBottom, contentTop, contentBottom }) => {
  if (!labelTop || !labelBottom
    || (typeof contentTop !== 'number' && !contentTop)
    || (typeof contentBottom !== 'number' && !contentBottom)
  ) return;
  return(
    <div className='dividedInfo'>
      <div className='top'>
        <div className="label">{labelTop} :</div>
        <div className="content">{contentTop}</div>
      </div>
      <div className='bottom'>
        <div className="label">{labelBottom} :</div>
        <div className="content">{contentBottom}</div>
      </div>
    </div>
  )
}