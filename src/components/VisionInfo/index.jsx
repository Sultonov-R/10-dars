import React, { useState } from 'react';
import './index.css';

function VisionInfo() {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('uzbek');

    const handleClick = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleTextareaChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };

    return (
        <div className='vision-info-wrapper'>
            <h3>Habarning ko'rinishi</h3>
            <div className='hero-section'>
                <div className='left-hero'>
                    <div className='shablon-class'>
                        <label htmlFor="select">Shablon</label>
                        <select name="select" id="select">
                            <option value="" disabled selected>Shablon</option>
                        </select>
                    </div>
                    <div className='message-info'>
                        <span className='active'>Habar</span>
                        <div className='save-shablon'>
                            <div className='plus'>+</div>
                            <span>Shablon holatida saqlash</span>
                        </div>
                    </div>
                    <div className='text-area-info'>
                        <div className='select-language'>
                            <div onClick={() => handleClick('uzbek')} className={`language ${language == 'uzbek' && 'active'}`}>
                                <span>O'zbekcha</span>
                            </div>
                            <div onClick={() => handleClick('rus')} className={`language ${language == 'rus' && 'active'}`}>
                                <span>Russian</span>
                            </div>
                            <div onClick={() => handleClick('english')} className={`language ${language == 'english' && 'active'}`}>
                                <span>English</span>
                            </div>
                        </div>
                        <textarea value={text} onChange={handleTextareaChange} placeholder='Habar matni...'></textarea>
                    </div>
                </div>
                <div className='right-hero'>
                    <img src="../../../phone.png" alt="user" />
                </div>
            </div>
        </div>
    );
}

export default VisionInfo;
