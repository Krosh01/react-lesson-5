import React from 'react'
import Btn from '../../assets/footer/Group 295.svg'

const Footer =() => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__block'>
          <h2 className='footer__block-title'>Будьте в курсе событий</h2>
          <form action="#">
            <input className='footer__input' type="text"  required />
            <button className='footer__btn' type='submit'><img className='footer__btn-img' src={Btn} alt="" /></button>
          </form>
          <div className='footer__links'>
            <a className='footer__links-item' href='#'>О нас</a>
            <a className='footer__links-item' href='#'>Распространенные вопросы</a>
            <a className='footer__links-item' href='#'>Бренды</a>
          </div>
        </div>
      </div>
      <div className='footer__line'>
      </div>
      <div className='container'>
        <div className='down'>
          <p className='down__corp'>Все права защищены  © 2020 Allegria.com</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer